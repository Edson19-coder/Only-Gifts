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
	public Integer addPurchase(PurchaseRequest request) {
		log.info("Executing PROC_ADD_PURCHASES");
		StoredProcedureQuery query = eManager.createStoredProcedureQuery("PROC_ADD_PURCHASES").
		registerStoredProcedureParameter(1, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(2, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(3, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(4, Float.class, ParameterMode.IN).
		registerStoredProcedureParameter(5, Integer.class, ParameterMode.OUT).
		setParameter(1, request.getUserId()).
		setParameter(2, request.getAddressId()).
		setParameter(3, request.getPaymentMethodId()).
		setParameter(4, Float.parseFloat(request.getTotalAmount()));
		query.execute();
		try {
			return Integer.parseInt(query.getOutputParameterValue(5).toString());
		} catch (Exception e) {
			return 0;
		}
	}

	@Override
	public Boolean editPurchase(PurchaseRequest request) {
		log.info("Executing PROC_CHANGE_STATUS_PURCHASE");
		StoredProcedureQuery query = eManager.createStoredProcedureQuery("PROC_CHANGE_STATUS_PURCHASE").
		registerStoredProcedureParameter(1, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(2, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(3, Boolean.class, ParameterMode.OUT).
		setParameter(1, request.getPurchaseId()).
		setParameter(2, request.getStatus());
		query.execute();
		try {
			return Boolean.parseBoolean(query.getOutputParameterValue(3).toString());
		} catch (Exception e) {
			return false;
		}
	}

	@Override
	public Boolean addPurchaseItem(PurchaseItemRequest request) {
		log.info("Executing PROC_ADD_PURCHASE_ITEM");
		StoredProcedureQuery query = eManager.createStoredProcedureQuery("PROC_ADD_PURCHASE_ITEM").
		registerStoredProcedureParameter(1, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(2, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(3, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(4, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(5, Boolean.class, ParameterMode.OUT).
		setParameter(1, request.getPurchaseId()).
		setParameter(2, request.getProductId()).
		setParameter(3, request.getQuantity()).
		setParameter(4, request.getComment());
		query.execute();
		try {
			return Boolean.parseBoolean(query.getOutputParameterValue(5).toString());
		} catch (Exception e) {
			return false;
		}
	}

	@Override
	public List<?> getPurchasesByUser(PurchaseRequest request) {
		StoredProcedureQuery query = eManager.createStoredProcedureQuery("PROC_GET_PURCHASE_USER").
		registerStoredProcedureParameter(1, Integer.class, ParameterMode.IN).
		setParameter(1, request.getUserId());
		query.execute();
		@SuppressWarnings("unchecked")
		List<Object[]> rptTrx = query.getResultList();
		return rptTrx;
	}
	
	@Override
	public List<?> getPurchasesByManager() {
		StoredProcedureQuery query = eManager.createStoredProcedureQuery("PROC_GET_PURCHASE_MANAGER");
		query.execute();
		@SuppressWarnings("unchecked")
		List<Object[]> rptTrx = query.getResultList();
		return rptTrx;
	}
	
	@Override
	public List<?> getPurchasesByManagerHistory() {
		StoredProcedureQuery query = eManager.createStoredProcedureQuery("PROC_GET_PURCHASE_MANAGER_HISTORY");
		query.execute();
		@SuppressWarnings("unchecked")
		List<Object[]> rptTrx = query.getResultList();
		return rptTrx;
	}
	
	@Override
	public Object getPurchase(PurchaseRequest request) {
		StoredProcedureQuery query = eManager.createStoredProcedureQuery("PROC_GET_PURCHASE_DETAIL").
		registerStoredProcedureParameter(1, Integer.class, ParameterMode.IN).
		setParameter(1, request.getPurchaseId());
		query.execute();
		@SuppressWarnings("unchecked")
		Object rptTrx = query.getSingleResult();
		return rptTrx;
	}

	@Override
	public Object getPurchaseDetail(PurchaseRequest request) {
		StoredProcedureQuery query = eManager.createStoredProcedureQuery("PROC_GET_PURCHASE_DETAIL").
		registerStoredProcedureParameter(1, Integer.class, ParameterMode.IN).
		setParameter(1, request.getPurchaseId());
		query.execute();
		@SuppressWarnings("unchecked")
		Object rptTrx = query.getSingleResult();
		return rptTrx;
	}

	@Override
	public List<?> getPurchaseItems(PurchaseRequest request) {
		StoredProcedureQuery query = eManager.createStoredProcedureQuery("PROC_GET_PURCHASE_ITEMS").
		registerStoredProcedureParameter(1, Integer.class, ParameterMode.IN).
		setParameter(1, request.getPurchaseId());
		query.execute();
		@SuppressWarnings("unchecked")
		List<Object[]> rptTrx = query.getResultList();
		return rptTrx;
	}


}
