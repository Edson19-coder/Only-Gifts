package com.og.onlygiftsapi.db.domain.response.list;

import java.util.ArrayList;
import java.util.List;

import com.og.onlygiftsapi.db.domain.response.AddressResponse;

public class AddressListResponse {
	private List<AddressResponse> addresses;
	
	public List<AddressResponse> getAddressList() {
		if(addresses == null)
			addresses = new ArrayList<>();
		return this.addresses;
	}
	public void add(AddressResponse response) {
		if(addresses==null)
			addresses = new ArrayList<>();
		addresses.add(response);
	}
}
