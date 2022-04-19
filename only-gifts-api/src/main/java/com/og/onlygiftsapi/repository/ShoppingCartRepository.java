package com.og.onlygiftsapi.repository;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.og.onlygiftsapi.db.domain.request.ShoppingCartItemAddRequest;

@Repository
public interface ShoppingCartRepository {
	Boolean addShoppingCartItem(ShoppingCartItemAddRequest request);
	Boolean editShoppingCartItem(ShoppingCartItemAddRequest request);
	Boolean dropShoppingCartItem(ShoppingCartItemAddRequest request);
	Boolean dropShoppingCart(ShoppingCartItemAddRequest request);
	
	List<?> getShoppingCart(ShoppingCartItemAddRequest request);
}
