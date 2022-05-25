package com.og.onlygiftsapi.db.domain.response;

import lombok.Data;

@Data
public class UserSignInResponse {
	private Integer userId;
	private String firstName;
	private String lastName;
	private String email;
	private String role;
	private String token;
	private Integer shoppingCartId;
}
