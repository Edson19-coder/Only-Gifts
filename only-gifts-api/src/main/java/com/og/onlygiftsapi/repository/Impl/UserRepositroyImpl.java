package com.og.onlygiftsapi.repository.Impl;

import javax.persistence.EntityManager;
import javax.persistence.ParameterMode;
import javax.persistence.PersistenceContext;
import javax.persistence.StoredProcedureQuery;

import org.springframework.stereotype.Repository;

import com.og.onlygiftsapi.db.domain.request.UserSignUpRequest;
import com.og.onlygiftsapi.repository.UserRepository;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Repository
public class UserRepositroyImpl implements UserRepository {

	@PersistenceContext
	EntityManager eManager;

	@Override
	public Boolean addUser(UserSignUpRequest request) {
		log.info("Executing PROC_USER.ADD_USER");
		StoredProcedureQuery query = eManager.createStoredProcedureQuery("PROC_USER").
		registerStoredProcedureParameter(1, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(2, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(3, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(4, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(5, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(6, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(7, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(8, String.class, ParameterMode.IN).
		setParameter(1, "ADD_USER").
		setParameter(2, -1).
		setParameter(3, request.getFirstName()).
		setParameter(4, request.getLastName()).
		setParameter(5, request.getEmail()).
		setParameter(6, request.getPassword()).
		setParameter(7, "USER").
		setParameter(8, "");
		try {
			query.execute();
			return true;
		} catch (Exception e) {
			return false;
		}
	}
	
	@Override
	public Object getUserByEmail(String email) {
		log.info("Executing PROC_USER.GET_USER_EMAIL");
		StoredProcedureQuery query = eManager.createStoredProcedureQuery("PROC_USER").
		registerStoredProcedureParameter(1, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(2, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(3, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(4, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(5, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(6, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(7, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(8, String.class, ParameterMode.IN).
		setParameter(1, "GET_USER_EMAIL").
		setParameter(2, -1).
		setParameter(3, "").
		setParameter(4, "").
		setParameter(5, email).
		setParameter(6, "").
		setParameter(7, "").
		setParameter(8, "");
		query.execute();
		Object rptTrx = null;
		try {
			rptTrx = query.getSingleResult();	
		} catch (Exception e) {
			return null;
		}
		return rptTrx;
	}

}
