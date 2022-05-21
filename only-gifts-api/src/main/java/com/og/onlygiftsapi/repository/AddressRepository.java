package com.og.onlygiftsapi.repository;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.og.onlygiftsapi.db.domain.request.AddressRequest;

@Repository
public interface AddressRepository {
	Boolean addAddress(AddressRequest request);
	Boolean editAddress(AddressRequest request);
	Boolean dropAddress(AddressRequest request);
	
	List<?> getAddress(AddressRequest request);
	List<?> getAddresses(AddressRequest request);
}
