package com.og.onlygiftsapi.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.og.onlygiftsapi.db.domain.User;
import com.og.onlygiftsapi.db.domain.request.UserSignUpRequest;

@Repository
public interface UserRepository {

	Boolean addUser(UserSignUpRequest request);
	Object getUserByEmail(String email);
}
