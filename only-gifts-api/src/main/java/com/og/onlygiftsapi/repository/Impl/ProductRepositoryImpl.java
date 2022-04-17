package com.og.onlygiftsapi.repository.Impl;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.ParameterMode;
import javax.persistence.PersistenceContext;
import javax.persistence.StoredProcedureQuery;

import org.springframework.stereotype.Repository;

import com.og.onlygiftsapi.db.domain.Product;
import com.og.onlygiftsapi.db.domain.request.ProductRequestId;
import com.og.onlygiftsapi.repository.ProductRepository;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Repository
public class ProductRepositoryImpl implements ProductRepository {
	
	@PersistenceContext
	EntityManager eManager;
	
	@Override
	public Boolean addProduct(Product request) {
		StoredProcedureQuery query = eManager.createStoredProcedureQuery("PROC_PRODUCT").
		registerStoredProcedureParameter(1, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(2, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(3, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(4, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(5, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(6, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(7, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(8, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(9, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(10, Integer.class, ParameterMode.IN).
		setParameter(1, "ADD_PRODUCT").
		setParameter(2, -1).
		setParameter(3, request.getProductName()).
		setParameter(4, request.getDescription()).
		setParameter(5, request.getCharacteristic()).
		setParameter(6, request.getPrice()).
		setParameter(7, request.getCategory()).
		setParameter(8, "A").
		setParameter(9, request.getImageUrl()).
		setParameter(10, request.getCustomImage());
		query.execute();
		try {
			return true;
		} catch (Exception e) {
			return false;
		}
	}

	@Override
	public Boolean editProduct(Product request) {
		StoredProcedureQuery query = eManager.createStoredProcedureQuery("UPDATE_PRODUCT").
		registerStoredProcedureParameter(1, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(2, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(3, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(4, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(5, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(6, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(7, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(8, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(9, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(10, Integer.class, ParameterMode.IN).
		setParameter(1, "ADD_PRODUCT").
		setParameter(2, -1).
		setParameter(3, request.getProductName()).
		setParameter(4, request.getDescription()).
		setParameter(5, request.getCharacteristic()).
		setParameter(6, request.getPrice()).
		setParameter(7, request.getCategory()).
		setParameter(8, request.getStatus()).
		setParameter(9, request.getImageUrl()).
		setParameter(10, request.getCustomImage());
		query.execute();
		try {
			log.info(null, query.getFirstResult());
			return true;
		} catch (Exception e) {
			return false;
		}
	}

	@Override
	public Boolean dropProduct(Product request) {
		StoredProcedureQuery query = eManager.createStoredProcedureQuery("UPDATE_PRODUCT").
		registerStoredProcedureParameter(1, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(2, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(3, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(4, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(5, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(6, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(7, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(8, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(9, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(10, Integer.class, ParameterMode.IN).
		setParameter(1, "ADD_PRODUCT").
		setParameter(2, request.getProductId()).
		setParameter(3, "").
		setParameter(4, "").
		setParameter(5, "").
		setParameter(6, "").
		setParameter(7, -1).
		setParameter(8, "").
		setParameter(9, "").
		setParameter(10, -1);
		query.execute();
		try {
			log.info(null, query.getFirstResult());
			return true;
		} catch (Exception e) {
			return false;
		}
	}

	@Override
	public List<?> getProduct(ProductRequestId request) {
		StoredProcedureQuery query = eManager.createStoredProcedureQuery("PROC_PRODUCT").
		registerStoredProcedureParameter(1, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(2, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(3, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(4, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(5, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(6, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(7, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(8, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(9, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(10, Integer.class, ParameterMode.IN).
		setParameter(1, "GET_PRODUCT").
		setParameter(2, request.getProductId()).
		setParameter(3, "").
		setParameter(4, "").
		setParameter(5, "").
		setParameter(6, "").
		setParameter(7, -1).
		setParameter(8, "A").
		setParameter(9, "").
		setParameter(10, -1);
		query.execute();
		@SuppressWarnings("unchecked")
		List<Object[]> rptTrx = query.getResultList();
		return rptTrx;
	}

	@Override
	public List<?> getProducts() {
		StoredProcedureQuery query = eManager.createStoredProcedureQuery("PROC_PRODUCT").
		registerStoredProcedureParameter(1, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(2, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(3, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(4, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(5, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(6, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(7, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(8, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(9, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(10, Integer.class, ParameterMode.IN).
		setParameter(1, "GET_PRODUCTS").
		setParameter(2, -1).
		setParameter(3, "").
		setParameter(4, "").
		setParameter(5, "").
		setParameter(6, "").
		setParameter(7, -1).
		setParameter(8, "A").
		setParameter(9, "").
		setParameter(10, -1);
		query.execute();
		@SuppressWarnings("unchecked")
		List<Object[]> rptTrx = query.getResultList();
		return rptTrx;
	}

	@Override
	public List<?> getProductsByCategory(Product request) {
		StoredProcedureQuery query = eManager.createStoredProcedureQuery("PROC_PRODUCT").
		registerStoredProcedureParameter(1, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(2, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(3, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(4, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(5, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(6, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(7, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(8, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(9, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(10, Integer.class, ParameterMode.IN).
		setParameter(1, "GET_PRODUCTS_CATEGORY").
		setParameter(2, -1).
		setParameter(3, "").
		setParameter(4, "").
		setParameter(5, "").
		setParameter(6, "").
		setParameter(7, request.getCategory()).
		setParameter(8, "A").
		setParameter(9, "").
		setParameter(10, -1);
		query.execute();
		@SuppressWarnings("unchecked")
		List<Object[]> rptTrx = query.getResultList();
		return rptTrx;
	}

	@Override
	public List<?> getProductsManager() {
		StoredProcedureQuery query = eManager.createStoredProcedureQuery("PROC_PRODUCT").
		registerStoredProcedureParameter(1, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(2, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(3, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(4, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(5, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(6, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(7, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(8, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(9, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(10, Integer.class, ParameterMode.IN).
		setParameter(1, "GET_PRODUCTS_MANG").
		setParameter(2, -1).
		setParameter(3, "").
		setParameter(4, "").
		setParameter(5, "").
		setParameter(6, "").
		setParameter(7, -1).
		setParameter(8, "A").
		setParameter(9, "").
		setParameter(10, -1);
		query.execute();
		@SuppressWarnings("unchecked")
		List<Object[]> rptTrx = query.getResultList();
		return rptTrx;
	}

}
