package com.og.onlygiftsapi.db.domain.response.list;

import java.util.ArrayList;
import java.util.List;

import com.og.onlygiftsapi.db.domain.response.ProductsResponse;

public class ProductsListResponse {
	private List<ProductsResponse> products;
	
	public List<ProductsResponse> getProductList() {
		if(products == null)
			products = new ArrayList<>();
		return this.products;
	}
	public void add(ProductsResponse response) {
		if(products == null)
			products = new ArrayList<>();
		products.add(response);
	}
}
