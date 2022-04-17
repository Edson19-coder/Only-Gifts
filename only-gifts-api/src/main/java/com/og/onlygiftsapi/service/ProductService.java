package com.og.onlygiftsapi.service;

import org.springframework.http.ResponseEntity;

import com.og.onlygiftsapi.db.domain.Product;
import com.og.onlygiftsapi.db.domain.request.ProductRequestId;

public interface ProductService {

	ResponseEntity<?> addProduct(Product productRequest);
	ResponseEntity<?> editProduct(Product productRequest);
	ResponseEntity<?> dropProduct(Product productRequest);
	
	ResponseEntity<?> getProduct(ProductRequestId productRequest);
	ResponseEntity<?> getProducts();
	ResponseEntity<?> getProductsByCategory(Product productRequest);
	ResponseEntity<?> getProductsManager();
}
