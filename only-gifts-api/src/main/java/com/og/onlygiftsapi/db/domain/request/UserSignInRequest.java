package com.og.onlygiftsapi.db.domain.request;

import lombok.Data;

@Data
public class UserSignInRequest {
	private String email;
	private String password;
}
