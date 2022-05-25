package com.og.onlygiftsapi.repository.Impl;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.ParameterMode;
import javax.persistence.PersistenceContext;
import javax.persistence.StoredProcedureQuery;

import org.springframework.stereotype.Repository;

import com.og.onlygiftsapi.db.domain.Product;
import com.og.onlygiftsapi.db.domain.request.ProductIdRequest;
import com.og.onlygiftsapi.db.domain.request.ProductRequest;
import com.og.onlygiftsapi.repository.ProductRepository;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Repository
public class ProductRepositoryImpl implements ProductRepository {
	
	@PersistenceContext
	EntityManager eManager;
	
	@Override
	public Integer addProduct(ProductRequest request) {
		StoredProcedureQuery query = eManager.createStoredProcedureQuery("PROC_ADD_PRODUCT").
		registerStoredProcedureParameter(1, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(2, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(3, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(4, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(5, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(6, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(7, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(8, Integer.class, ParameterMode.OUT).
		setParameter(1, request.getName()).
		setParameter(2, request.getDescription()).
		setParameter(3, request.getCharacteristic()).
		setParameter(4, request.getPrice()).
		setParameter(5, request.getCategoryId()).
		setParameter(6, request.getImage()).
		setParameter(7, request.getCustomImage());
		query.execute();
		try {
			return Integer.parseInt(query.getOutputParameterValue(8).toString());
		} catch (Exception e) {
			return 0;
		}
	}
	
	@Override
	public Boolean addProductImage(Integer productId, String imageUrl) {
		StoredProcedureQuery query = eManager.createStoredProcedureQuery("PROC_ADD_PRODUCT_IMAGE").
		registerStoredProcedureParameter(1, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(2, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(3, Boolean.class, ParameterMode.OUT).
		setParameter(1, productId).
		setParameter(2, imageUrl);
		query.execute();
		try {
			return Boolean.parseBoolean(query.getOutputParameterValue(3).toString());
		} catch (Exception e) {
			log.error(e.toString());
			return false;
		}
	}

	@Override
	public Boolean editProduct(ProductRequest request) {
		StoredProcedureQuery query = eManager.createStoredProcedureQuery("PROC_UPDATE_PRODUCT").
		registerStoredProcedureParameter(1, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(2, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(3, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(4, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(5, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(6, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(7, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(8, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(9, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(10, Boolean.class, ParameterMode.OUT).
		setParameter(1, request.getProductId()).
		setParameter(2, request.getName()).
		setParameter(3, request.getDescription()).
		setParameter(4, request.getCharacteristic()).
		setParameter(5, request.getPrice()).
		setParameter(6, request.getCategoryId()).
		setParameter(7, request.getStatus()).
		setParameter(8, request.getImage()).
		setParameter(9, request.getCustomImage());
		query.execute();
		try {
			return Boolean.parseBoolean(query.getOutputParameterValue(10).toString());
		} catch (Exception e) {
			return false;
		}
	}

	@Override
	public Boolean dropProduct(ProductRequest request) {
		StoredProcedureQuery query = eManager.createStoredProcedureQuery("PROC_DROP_PRODUCT").
		registerStoredProcedureParameter(1, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(2, Boolean.class, ParameterMode.OUT).
		setParameter(1, request.getProductId());
		query.execute();
		try {
			return Boolean.parseBoolean(query.getOutputParameterValue(2).toString());
		} catch (Exception e) {
			return false;
		}
	}
	
	@Override
	public Boolean changeStatusProduct(ProductRequest request) {
		StoredProcedureQuery query = eManager.createStoredProcedureQuery("PROC_CHANGE_STATUS_PRODUCT").
		registerStoredProcedureParameter(1, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(2, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(3, Boolean.class, ParameterMode.OUT).
		setParameter(1, request.getProductId()).
		setParameter(2, request.getStatus());
		query.execute();
		try {
			return Boolean.parseBoolean(query.getOutputParameterValue(3).toString());
		} catch (Exception e) {
			return false;
		}
	}

	@Override
	public Object getProduct(ProductRequest request) {
		StoredProcedureQuery query = eManager.createStoredProcedureQuery("PROC_GET_PRODUCT").
		registerStoredProcedureParameter(1, Integer.class, ParameterMode.IN).
		setParameter(1, request.getProductId());
		query.execute();
		@SuppressWarnings("unchecked")
		Object rptTrx = query.getSingleResult();
		return rptTrx;
	}

	@Override
	public List<?> getProducts() {
		StoredProcedureQuery query = eManager.createStoredProcedureQuery("PROC_GET_PRODUCTS");
		query.execute();
		@SuppressWarnings("unchecked")
		List<Object[]> rptTrx = query.getResultList();
		return rptTrx;
	}

	@Override
	public List<?> getProductsBySearch(ProductRequest request) {
		StoredProcedureQuery query = eManager.createStoredProcedureQuery("PROC_PRODUCT").
		registerStoredProcedureParameter(1, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(2, Integer.class, ParameterMode.IN).
		setParameter(1, request.getName()).
		setParameter(2, request.getCategoryId() != null ? request.getCategoryId() : 0);
		query.execute();
		@SuppressWarnings("unchecked")
		List<Object[]> rptTrx = query.getResultList();
		return rptTrx;
	}

	@Override
	public List<?> getProductsManager() {
		StoredProcedureQuery query = eManager.createStoredProcedureQuery("PROC_GET_PRODUCTS_MANG");
		query.execute();
		@SuppressWarnings("unchecked")
		List<Object[]> rptTrx = query.getResultList();
		return rptTrx;
	}

}
