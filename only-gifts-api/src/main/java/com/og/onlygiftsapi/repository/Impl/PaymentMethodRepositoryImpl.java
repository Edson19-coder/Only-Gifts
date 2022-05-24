package com.og.onlygiftsapi.repository.Impl;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.ParameterMode;
import javax.persistence.PersistenceContext;
import javax.persistence.StoredProcedureQuery;

import org.springframework.stereotype.Repository;

import com.og.onlygiftsapi.db.domain.request.PaymentMethodRequest;
import com.og.onlygiftsapi.repository.PaymentMethodRepository;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Repository
public class PaymentMethodRepositoryImpl implements PaymentMethodRepository {

	@PersistenceContext
	EntityManager eManager;
	
	@Override
	public Boolean addPaymentMethod(PaymentMethodRequest request) {
		log.info("Executing PROC_PAYMENT_METHODS.ADD_PAYMENT_METHOD");
		StoredProcedureQuery query = eManager.createStoredProcedureQuery("PROC_PAYMENT_METHODS").
		registerStoredProcedureParameter(1, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(2, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(3, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(4, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(5, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(6, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(7, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(8, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(9, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(10, String.class, ParameterMode.IN).
		setParameter(1, "ADD_PAYMENT_METHOD").
		setParameter(2, -1).
		setParameter(3, request.getUserId()).
		setParameter(4, request.getMethod()).
		setParameter(5, request.getCardHolder()).
		setParameter(6, request.getCardNumber()).
		setParameter(7, request.getCardNumberPublic()).
		setParameter(8, request.getExpirationMonth()).
		setParameter(9, request.getExpirationYear()).
		setParameter(10, request.getSecurityNumber());
		try {
			query.execute();
			return true;
		} catch (Exception e) {
			return false;
		}
	}

	@Override
	public Boolean editPaymentMethod(PaymentMethodRequest request) {
		log.info("Executing PROC_PAYMENT_METHODS.EDIT_PAYMENT_METHOD");
		StoredProcedureQuery query = eManager.createStoredProcedureQuery("PROC_PAYMENT_METHODS").
		registerStoredProcedureParameter(1, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(2, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(3, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(4, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(5, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(6, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(7, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(8, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(9, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(10, String.class, ParameterMode.IN).
		setParameter(1, "EDIT_PAYMENT_METHOD").
		setParameter(2, request.getPaymentMethodsId()).
		setParameter(3, -1).
		setParameter(4, "").
		setParameter(5, request.getCardHolder()).
		setParameter(6, "").
		setParameter(7, "").
		setParameter(8, request.getExpirationMonth()).
		setParameter(9, request.getExpirationYear()).
		setParameter(10, request.getSecurityNumber());
		try {
			query.execute();
			return true;
		} catch (Exception e) {
			return false;
		}
	}

	@Override
	public Boolean dropPaymentMethod(PaymentMethodRequest request) {
		log.info("Executing PROC_PAYMENT_METHODS.DROP_PAYMENT_METHOD");
		StoredProcedureQuery query = eManager.createStoredProcedureQuery("PROC_PAYMENT_METHODS").
		registerStoredProcedureParameter(1, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(2, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(3, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(4, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(5, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(6, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(7, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(8, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(9, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(10, String.class, ParameterMode.IN).
		setParameter(1, "DROP_PAYMENT_METHOD").
		setParameter(2, request.getPaymentMethodsId()).
		setParameter(3, -1).
		setParameter(4, "").
		setParameter(5, "").
		setParameter(6, "").
		setParameter(7, "").
		setParameter(8, "").
		setParameter(9, "").
		setParameter(10, "");
		try {
			query.execute();
			return true;
		} catch (Exception e) {
			return false;
		}
	}

	@Override
	public Object getPaymentMethod(PaymentMethodRequest request) {
		log.info("Executing PROC_PAYMENT_METHODS.GET_PAYMENT_METHOD");
		StoredProcedureQuery query = eManager.createStoredProcedureQuery("PROC_PAYMENT_METHODS").
		registerStoredProcedureParameter(1, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(2, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(3, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(4, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(5, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(6, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(7, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(8, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(9, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(10, String.class, ParameterMode.IN).
		setParameter(1, "GET_PAYMENT_METHOD").
		setParameter(2, request.getPaymentMethodsId()).
		setParameter(3, -1).
		setParameter(4, "").
		setParameter(5, "").
		setParameter(6, "").
		setParameter(7, "").
		setParameter(8, "").
		setParameter(9, "").
		setParameter(10, "");
		query.execute();
		@SuppressWarnings("unchecked")
		Object rptTrx = query.getSingleResult();
		return rptTrx;
	}

	@Override
	public List<?> getPaymentMethods(PaymentMethodRequest request) {
		log.info("Executing PROC_PAYMENT_METHODS.GET_PAYMENT_METHODS");
		StoredProcedureQuery query = eManager.createStoredProcedureQuery("PROC_PAYMENT_METHODS").
		registerStoredProcedureParameter(1, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(2, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(3, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(4, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(5, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(6, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(7, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(8, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(9, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(10, String.class, ParameterMode.IN).
		setParameter(1, "GET_PAYMENT_METHODS").
		setParameter(2, -1).
		setParameter(3, request.getUserId()).
		setParameter(4, "").
		setParameter(5, "").
		setParameter(6, "").
		setParameter(7, "").
		setParameter(8, "").
		setParameter(9, "").
		setParameter(10, "");
		query.execute();
		@SuppressWarnings("unchecked")
		List<Object[]> rptTrx = query.getResultList();
		return rptTrx;
	}
	
}
