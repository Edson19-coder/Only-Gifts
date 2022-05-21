package com.og.onlygiftsapi.db.domain.request;

import lombok.Data;

@Data
public class AddressRequest {
	private Integer addressId;
	private Integer userId;
	private String country;
	private String name;
	private String streetNumber;
	private Integer postalCode;
	private String state;
	private String city;
	private String suburb;
	private String phone;
	private String additionalInstruction;
}
