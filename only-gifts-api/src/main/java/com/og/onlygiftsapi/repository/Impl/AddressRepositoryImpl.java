package com.og.onlygiftsapi.repository.Impl;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.ParameterMode;
import javax.persistence.PersistenceContext;
import javax.persistence.StoredProcedureQuery;

import org.springframework.stereotype.Repository;

import com.og.onlygiftsapi.db.domain.request.AddressRequest;
import com.og.onlygiftsapi.repository.AddressRepository;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Repository
public class AddressRepositoryImpl implements AddressRepository {

	@PersistenceContext
	EntityManager eManager;
	
	@Override
	public Boolean addAddress(AddressRequest request) {
		log.info("Executing PROC_ADDRESSES.ADD_ADDRESS");
		StoredProcedureQuery query = eManager.createStoredProcedureQuery("PROC_ADDRESSES").
		registerStoredProcedureParameter(1, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(2, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(3, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(4, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(5, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(6, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(7, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(8, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(9, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(10, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(11, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(12, String.class, ParameterMode.IN).
		setParameter(1, "ADD_ADDRESS").
		setParameter(2, -1).
		setParameter(3, request.getUserId()).
		setParameter(4, request.getCountry()).
		setParameter(5, request.getName()).
		setParameter(6, request.getStreetNumber()).
		setParameter(7, request.getPostalCode()).
		setParameter(8, request.getState()).
		setParameter(9, request.getCity()).
		setParameter(10, request.getSuburb()).
		setParameter(11, request.getPhone()).
		setParameter(12, request.getAdditionalInstruction());
		try {
			query.execute();
			return true;
		} catch (Exception e) {
			return false;
		}
	}

	@Override
	public Boolean editAddress(AddressRequest request) {
		log.info("Executing PROC_ADDRESSES.EDIT_ADDRESS");
		StoredProcedureQuery query = eManager.createStoredProcedureQuery("PROC_ADDRESSES").
		registerStoredProcedureParameter(1, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(2, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(3, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(4, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(5, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(6, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(7, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(8, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(9, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(10, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(11, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(12, String.class, ParameterMode.IN).
		setParameter(1, "EDIT_ADDRESS").
		setParameter(2, request.getAddressId()).
		setParameter(3, -1).
		setParameter(4, request.getCountry()).
		setParameter(5, request.getName()).
		setParameter(6, request.getStreetNumber()).
		setParameter(7, request.getPostalCode()).
		setParameter(8, request.getState()).
		setParameter(9, request.getCity()).
		setParameter(10, request.getSuburb()).
		setParameter(11, request.getPhone()).
		setParameter(12, request.getAdditionalInstruction());
		try {
			query.execute();
			return true;
		} catch (Exception e) {
			return false;
		}
	}

	@Override
	public Boolean dropAddress(AddressRequest request) {
		log.info("Executing PROC_ADDRESSES.DROP_ADDRESS");
		StoredProcedureQuery query = eManager.createStoredProcedureQuery("PROC_ADDRESSES").
		registerStoredProcedureParameter(1, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(2, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(3, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(4, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(5, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(6, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(7, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(8, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(9, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(10, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(11, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(12, String.class, ParameterMode.IN).
		setParameter(1, "DROP_ADDRESS").
		setParameter(2, request.getAddressId()).
		setParameter(3, -1).
		setParameter(4, "").
		setParameter(5, "").
		setParameter(6, "").
		setParameter(7, -1).
		setParameter(8, "").
		setParameter(9, "").
		setParameter(10, "").
		setParameter(11, "").
		setParameter(12, "");
		try {
			query.execute();
			return true;
		} catch (Exception e) {
			return false;
		}
	}

	@Override
	public List<?> getAddress(AddressRequest request) {
		log.info("Executing PROC_ADDRESSES.GET_ADDRESS");
		StoredProcedureQuery query = eManager.createStoredProcedureQuery("PROC_ADDRESSES").
		registerStoredProcedureParameter(1, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(2, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(3, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(4, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(5, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(6, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(7, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(8, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(9, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(10, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(11, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(12, String.class, ParameterMode.IN).
		setParameter(1, "GET_ADDRESS").
		setParameter(2, request.getAddressId()).
		setParameter(3, -1).
		setParameter(4, "").
		setParameter(5, "").
		setParameter(6, "").
		setParameter(7, -1).
		setParameter(8, "").
		setParameter(9, "").
		setParameter(10, "").
		setParameter(11, "").
		setParameter(12, "");
		query.execute();
		@SuppressWarnings("unchecked")
		List<Object[]> rptTrx = query.getResultList();
		return rptTrx;
	}

	@Override
	public List<?> getAddresses(AddressRequest request) {
		log.info("Executing PROC_ADDRESSES.GET_ADDRESSES");
		StoredProcedureQuery query = eManager.createStoredProcedureQuery("PROC_ADDRESSES").
		registerStoredProcedureParameter(1, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(2, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(3, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(4, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(5, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(6, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(7, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(8, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(9, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(10, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(11, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(12, String.class, ParameterMode.IN).
		setParameter(1, "GET_ADDRESSES").
		setParameter(2, -1).
		setParameter(3, request.getUserId()).
		setParameter(4, "").
		setParameter(5, "").
		setParameter(6, "").
		setParameter(7, -1).
		setParameter(8, "").
		setParameter(9, "").
		setParameter(10, "").
		setParameter(11, "").
		setParameter(12, "");
		query.execute();
		@SuppressWarnings("unchecked")
		List<Object[]> rptTrx = query.getResultList();
		return rptTrx;
	}

}
