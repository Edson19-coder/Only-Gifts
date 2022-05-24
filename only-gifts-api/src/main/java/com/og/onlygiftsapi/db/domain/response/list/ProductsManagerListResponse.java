package com.og.onlygiftsapi.db.domain.response.list;

import java.util.ArrayList;
import java.util.List;

import com.og.onlygiftsapi.db.domain.response.ProductsManagerResponse;

public class ProductsManagerListResponse {
	private List<ProductsManagerResponse> products;
	
	public List<ProductsManagerResponse> getProductList() {
		if(products == null)
			products = new ArrayList<>();
		return this.products;
	}
	public void add(ProductsManagerResponse response) {
		if(products == null)
			products = new ArrayList<>();
		products.add(response);
	}
}
