package com.og.onlygiftsapi.db.domain.response;

import lombok.Data;

@Data
public class ShoppingCartResponse {
	private Integer shoppingCartItemId;
	private Integer productId;
	private String imageUrl;
	private String name;
	private Integer quantity;
	private String comment;
	private Float unitary;
	private Float byQuantity;
	private String category;
}
