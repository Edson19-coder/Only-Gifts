package com.og.onlygiftsapi.service;

import org.springframework.http.ResponseEntity;

import com.og.onlygiftsapi.db.domain.Product;
import com.og.onlygiftsapi.db.domain.request.ProductIdRequest;

public interface ProductService {

	ResponseEntity<?> addProduct(Product request);
	ResponseEntity<?> editProduct(Product request);
	ResponseEntity<?> dropProduct(Product request);
	
	ResponseEntity<?> getProduct(ProductIdRequest request);
	ResponseEntity<?> getProducts();
	ResponseEntity<?> getProductsByCategory(Product request);
	ResponseEntity<?> getProductsManager();
}
