package com.og.onlygiftsapi.repository.Impl;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.ParameterMode;
import javax.persistence.PersistenceContext;
import javax.persistence.StoredProcedureQuery;

import org.springframework.stereotype.Repository;

import com.og.onlygiftsapi.db.domain.request.ShoppingCartItemAddRequest;
import com.og.onlygiftsapi.repository.ShoppingCartRepository;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Repository
public class ShoppingCartRepositoryImpl implements ShoppingCartRepository {

	@PersistenceContext
	EntityManager eManager;
	
	@Override
	public Boolean addShoppingCartItem(ShoppingCartItemAddRequest request) {
		StoredProcedureQuery query = eManager.createStoredProcedureQuery("PROC_SHOPPING_CART").
		registerStoredProcedureParameter(1, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(2, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(3, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(4, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(5, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(6, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(7, String.class, ParameterMode.IN).
		setParameter(1, "ADD_ITEM_SC").
		setParameter(2, request.getShoppingCartId()).
		setParameter(3, -1).
		setParameter(4, -1).
		setParameter(5, request.getProductId()).
		setParameter(6, request.getQuantity()).
		setParameter(7, request.getComment());
		try {
			query.execute();
			return true;
		} catch (Exception e) {
			return false;
		}
	}

	@Override
	public Boolean editShoppingCartItem(ShoppingCartItemAddRequest request) {
		StoredProcedureQuery query = eManager.createStoredProcedureQuery("PROC_SHOPPING_CART").
		registerStoredProcedureParameter(1, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(2, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(3, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(4, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(5, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(6, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(7, String.class, ParameterMode.IN).
		setParameter(1, "EDIT_ITEM_SC").
		setParameter(2, -1).
		setParameter(3, request.getShoppingCartItemId()).
		setParameter(4, -1).
		setParameter(5, -1).
		setParameter(6, request.getQuantity()).
		setParameter(7, request.getComment());
		try {
			query.execute();
			return true;
		} catch (Exception e) {
			return false;
		}
	}

	@Override
	public Boolean dropShoppingCartItem(ShoppingCartItemAddRequest request) {
		StoredProcedureQuery query = eManager.createStoredProcedureQuery("PROC_SHOPPING_CART").
		registerStoredProcedureParameter(1, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(2, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(3, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(4, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(5, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(6, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(7, String.class, ParameterMode.IN).
		setParameter(1, "DROP_ITEM_SC").
		setParameter(2, -1).
		setParameter(3, request.getShoppingCartItemId()).
		setParameter(4, -1).
		setParameter(5, -1).
		setParameter(6, -1).
		setParameter(7, "");
		try {
			query.execute();
			return true;
		} catch (Exception e) {
			return false;
		}
	}

	@Override
	public Boolean dropShoppingCart(ShoppingCartItemAddRequest request) {
		StoredProcedureQuery query = eManager.createStoredProcedureQuery("PROC_SHOPPING_CART").
		registerStoredProcedureParameter(1, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(2, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(3, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(4, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(5, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(6, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(7, String.class, ParameterMode.IN).
		setParameter(1, "DROP_ALL_ITEM_SC").
		setParameter(2, request.getShoppingCartId()).
		setParameter(3, -1).
		setParameter(4, -1).
		setParameter(5, -1).
		setParameter(6, -1).
		setParameter(7, "");
		try {
			query.execute();
			return true;
		} catch (Exception e) {
			return false;
		}
	}

	@Override
	public List<?> getShoppingCart(ShoppingCartItemAddRequest request) {
		StoredProcedureQuery query = eManager.createStoredProcedureQuery("PROC_SHOPPING_CART").
		registerStoredProcedureParameter(1, String.class, ParameterMode.IN).
		registerStoredProcedureParameter(2, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(3, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(4, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(5, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(6, Integer.class, ParameterMode.IN).
		registerStoredProcedureParameter(7, String.class, ParameterMode.IN).
		setParameter(1, "GET_USER_CART").
		setParameter(2, -1).
		setParameter(3, -1).
		setParameter(4, request.getUserId()).
		setParameter(5, -1).
		setParameter(6, -1).
		setParameter(7, "");
		query.execute();
		@SuppressWarnings("unchecked")
		List<Object[]> rptTrx = query.getResultList();
		return rptTrx;
	}

}
