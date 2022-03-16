package com.og.onlygiftsapi.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.og.onlygiftsapi.db.domain.User;

public interface UserRepository extends CrudRepository<User, Integer> {

	public Optional<User> findByEmail(String email);
	
}
