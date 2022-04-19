package com.og.onlygiftsapi.db.domain.response.list;

import java.util.ArrayList;
import java.util.List;

import com.og.onlygiftsapi.db.domain.response.ShoppingCartResponse;

public class ShoppingCartListResponse {
	private List<ShoppingCartResponse> cartItems;

	public List<ShoppingCartResponse> getCartItemList() {
        if (cartItems == null)
        	cartItems = new ArrayList<>();
        return this.cartItems;
    }
    public void add(ShoppingCartResponse response) {
        if (cartItems==null)
        	cartItems = new ArrayList<>();
        cartItems.add(response);
    }
}
