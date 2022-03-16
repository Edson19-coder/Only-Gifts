package com.og.onlygiftsapi.service.impl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.og.onlygiftsapi.controller.UserController;
import com.og.onlygiftsapi.db.domain.User;
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
	public User createUser(User userRequest) {
		
		if(userRepository.findByEmail(userRequest.getEmail()).isPresent()) {
			throw new ResourceFoundException("User", "email", userRequest.getEmail());
		}
		
		userRequest.setPassword(bCryptPasswordEncoder.encode(userRequest.getPassword()));
		userRequest.setActive(1);
		
		User user = userRepository.save(userRequest);
		return user;
	}

	@Override
	public User getUserByEmail(User userRequest) {
		Optional<User> user = userRepository.findByEmail(userRequest.getEmail());
		
		if(!user.isPresent()) {
			throw new ResourceNotFoundException("User", "email", userRequest.getEmail());
		}
		
		if(!bCryptPasswordEncoder.matches(userRequest.getPassword(), user.get().getPassword()))	{
			throw new ResourceNotFoundException("User", "password", userRequest.getEmail());
		}
		
		String token = GetJwtToken.getJWTToken(user.get().getEmail());
		System.out.println(token);
		
		return user.get();
	}

	@Override
	public Boolean isUniqueEmailUser(String email) {
		Optional<User> user = userRepository.findByEmail(email);
		return !user.isEmpty();
	}


}
