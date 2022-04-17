package com.og.onlygiftsapi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.og.onlygiftsapi.db.domain.User;
import com.og.onlygiftsapi.globals.Endpoint;
import com.og.onlygiftsapi.service.UserService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@Api("V1 Creación de usuarios.")
public class UserController {

	@Autowired 
	UserService userService;
	
	@PostMapping(value = Endpoint.CREATE_USER, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    @ApiOperation(value = "User", notes = "Metodo para crear un usuario.")
	public ResponseEntity<?> createUser(@RequestBody User userRequest) {
		User user = userService.createUser(userRequest);
		log.info("User created successfully.");
		return new ResponseEntity<>(user, HttpStatus.CREATED);
	}
	
	@PostMapping(value = Endpoint.SIGN_IN_USER, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    @ApiOperation(value = "User", notes = "Metodo para iniciar sesión con un usuario.")
	public ResponseEntity<?> signInUser(@RequestBody User userRequest) {
		log.info("Get user by email and password.");
		User user = userService.getUserByEmail(userRequest);
		return new ResponseEntity<>(user, HttpStatus.OK);
	}
}
