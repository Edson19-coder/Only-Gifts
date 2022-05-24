package com.og.onlygiftsapi.service;

import java.io.IOException;

import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

import com.og.onlygiftsapi.db.domain.Product;
import com.og.onlygiftsapi.db.domain.request.PhotoRequest;
import com.og.onlygiftsapi.db.domain.request.ProductIdRequest;
import com.og.onlygiftsapi.db.domain.request.ProductRequest;

public interface ProductService {

	ResponseEntity<?> addProduct(ProductRequest request);
	ResponseEntity<?> addImage(MultipartFile image, Integer productId);
	ResponseEntity<?> editProduct(ProductRequest request);
	ResponseEntity<?> dropProduct(ProductRequest request);
	ResponseEntity<?> changeStatusProduct(ProductRequest request);
	
	ResponseEntity<?> getProduct(ProductRequest request);
	ResponseEntity<?> getProducts();
	ResponseEntity<?> getProductsBySearch(ProductRequest request);
	ResponseEntity<?> getProductsManager();
}
