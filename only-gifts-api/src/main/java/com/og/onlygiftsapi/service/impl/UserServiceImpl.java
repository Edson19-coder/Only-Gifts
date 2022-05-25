package com.og.onlygiftsapi.service.impl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.og.onlygiftsapi.controller.UserController;
import com.og.onlygiftsapi.db.domain.User;
import com.og.onlygiftsapi.db.domain.request.UserSignInRequest;
import com.og.onlygiftsapi.db.domain.request.UserSignUpRequest;
import com.og.onlygiftsapi.db.domain.response.UserSignInResponse;
import com.og.onlygiftsapi.exeptions.ResourceFoundException;
import com.og.onlygiftsapi.exeptions.ResourceNotFoundException;
import com.og.onlygiftsapi.repository.UserRepository;
import com.og.onlygiftsapi.security.GetJwtToken;
import com.og.onlygiftsapi.service.UserService;

import lombok.extern.slf4j.Slf4j;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	UserRepository userRepository;
	
	@Autowired
	BCryptPasswordEncoder bCryptPasswordEncoder;
	
	@Override
	public ResponseEntity<?> createUser(UserSignUpRequest request) {
		Object emailIsUsed = userRepository.getUserByEmail(request.getEmail());
		
		if(emailIsUsed != null) {
			throw new ResourceFoundException("User", "email", request.getEmail());
		}
		
		request.setPassword(bCryptPasswordEncoder.encode(request.getPassword()));
		
		Boolean response = userRepository.addUser(request);
		return new ResponseEntity<>(response, HttpStatus.CREATED);
	}

	@Override
	public ResponseEntity<?> getUserByEmail(UserSignInRequest request) {
		Object user = userRepository.getUserByEmail(request.getEmail());
		
		if(user == null) {
			throw new ResourceNotFoundException("User", "email", request.getEmail());
		}
		
		UserSignInResponse response = new UserSignInResponse();
		Object[] fields = (Object[]) user;
		response.setUserId(Integer.valueOf(String.valueOf(fields[0])));
		response.setFirstName(String.valueOf(fields[1]));
		response.setLastName(String.valueOf(fields[2]));
		response.setEmail(String.valueOf(fields[3]));
		response.setRole(String.valueOf(fields[5]));
		response.setShoppingCartId(Integer.valueOf(String.valueOf(fields[6])));
		
		if(!bCryptPasswordEncoder.matches(request.getPassword(), String.valueOf(fields[4]))) {
			throw new ResourceNotFoundException("User", "password", request.getEmail());
		}
		
		String token = GetJwtToken.getJWTToken(response.getEmail(), response.getRole());
		response.setToken(token);
		
		return new ResponseEntity<>(response, HttpStatus.OK);
	}

}
