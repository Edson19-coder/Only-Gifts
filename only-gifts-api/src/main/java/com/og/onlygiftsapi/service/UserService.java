package com.og.onlygiftsapi.service;

import org.springframework.http.ResponseEntity;

import com.og.onlygiftsapi.db.domain.User;
import com.og.onlygiftsapi.db.domain.request.UserSignInRequest;
import com.og.onlygiftsapi.db.domain.request.UserSignUpRequest;

public interface UserService {

	ResponseEntity<?> createUser(UserSignUpRequest request);
	ResponseEntity<?> getUserByEmail(UserSignInRequest request);
	
}
