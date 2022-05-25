package com.og.onlygiftsapi.db.domain.request;

import lombok.Data;

@Data
public class UserSignUpRequest {
	private String firstName;
	private String lastName;
	private String email;
	private String password;
}
