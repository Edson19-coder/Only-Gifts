package com.og.onlygiftsapi.db.domain.request;

import lombok.Data;

@Data
public class ShoppingCartItemAddRequest {
	private Integer shoppingCartItemId;
	private Integer shoppingCartId;
	private Integer userId;
	private Integer productId;
	private Integer quantity;
	private String comment;
}
