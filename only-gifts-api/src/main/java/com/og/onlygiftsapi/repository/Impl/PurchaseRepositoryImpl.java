package com.og.onlygiftsapi.repository.Impl;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.ParameterMode;
import javax.persistence.PersistenceContext;
import javax.persistence.StoredProcedureQuery;

import org.springframework.stereotype.Repository;

import com.og.onlygiftsapi.db.domain.request.PurchaseItemRequest;
import com.og.onlygiftsapi.db.domain.request.PurchaseRequest;
import com.og.onlygiftsapi.db.domain.response.PurchaseAddResponse;
import com.og.onlygiftsapi.repository.PurchaseRepository;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Repository
public class PurchaseRepositoryImpl implements PurchaseRepository {

	@PersistenceContext
	EntityManager eManager;
	
	@Override
	public List<?> addPurchase(PurchaseRequest request) {
		log.info("Executing PROC_PURCHASES.ADD_PURCHASE");
		StoredProcedureQuery query = eManager.createStoredProcedureQuery("PROC_PURCHASES").
		registerStoredProcedureParameter(1, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(2, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(3, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(4, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(5, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(6, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(7, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(8, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(9, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(10, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(11, Integer.class, ParameterMode.IN).
		setParameter(1, "ADD_PURCHASE").
		setParameter(2, -1).
		setParameter(3, -1).
		setParameter(4, request.getUserId()).
		setParameter(5, request.getAddressId()).
		setParameter(6, request.getPaymentMethodId()).
		setParameter(7, request.getTotalAmount()).
		setParameter(8, "").
		setParameter(9, -1).
		setParameter(10, "").
		setParameter(11, -1);
		query.execute();
		@SuppressWarnings("unchecked")
		List<Object[]> rptTrx = query.getResultList();
		return rptTrx;
	}

	@Override
	public Boolean editPurchase(PurchaseRequest request) {
		log.info("Executing PROC_PURCHASES.EDIT_PURCHASE");
		StoredProcedureQuery query = eManager.createStoredProcedureQuery("PROC_PURCHASES").
		registerStoredProcedureParameter(1, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(2, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(3, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(4, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(5, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(6, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(7, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(8, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(9, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(10, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(11, Integer.class, ParameterMode.IN).
		setParameter(1, "EDIT_PURCHASE").
		setParameter(2, request.getPurchaseId()).
		setParameter(3, -1).
		setParameter(4, -1).
		setParameter(5, -1).
		setParameter(6, -1).
		setParameter(7, "").
		setParameter(8, request.getStatus()).
		setParameter(9, -1).
		setParameter(10, "").
		setParameter(11, -1);
		try {
			query.execute();
			return true;
		} catch (Exception e) {
			return false;
		}
	}

	@Override
	public Boolean addPurchaseItem(PurchaseItemRequest request) {
		log.info("Executing PROC_PURCHASES.ADD_PURCHASE_ITEM");
		StoredProcedureQuery query = eManager.createStoredProcedureQuery("PROC_PURCHASES").
		registerStoredProcedureParameter(1, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(2, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(3, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(4, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(5, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(6, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(7, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(8, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(9, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(10, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(11, Integer.class, ParameterMode.IN).
		setParameter(1, "ADD_PURCHASE_ITEM").
		setParameter(2, request.getPurchaseId()).
		setParameter(3, -1).
		setParameter(4, -1).
		setParameter(5, -1).
		setParameter(6, -1).
		setParameter(7, "").
		setParameter(8, "").
		setParameter(9, request.getProductId()).
		setParameter(10, "").
		setParameter(11, request.getQuantity());
		try {
			query.execute();
			return true;
		} catch (Exception e) {
			return false;
		}
	}

	@Override
	public List<?> getPurchase(PurchaseRequest request) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<?> getPurchases(PurchaseRequest request) {
		// TODO Auto-generated method stub
		return null;
	}

}
