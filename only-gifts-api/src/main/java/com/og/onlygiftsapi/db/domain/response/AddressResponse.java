package com.og.onlygiftsapi.db.domain.response;

import lombok.Data;

@Data
public class AddressResponse {
	private Integer addressId;
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
