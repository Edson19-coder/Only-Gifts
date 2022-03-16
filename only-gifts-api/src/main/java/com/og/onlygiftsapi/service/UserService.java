package com.og.onlygiftsapi.service;

import com.og.onlygiftsapi.db.domain.User;

public interface UserService {

	User createUser(User userRequest);
	User getUserByEmail(User userRequest);
	
	Boolean isUniqueEmailUser(String email);
	
}
