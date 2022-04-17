package com.og.onlygiftsapi.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.og.onlygiftsapi.db.domain.Product;
import com.og.onlygiftsapi.db.domain.request.ProductRequestId;
import com.og.onlygiftsapi.repository.ProductRepository;
import com.og.onlygiftsapi.service.ProductService;

@Service
public class ProductServiceImpl implements ProductService {

	@Autowired
	ProductRepository productRepository;

	public ResponseEntity<?> addProduct(Product productRequest) {
		Boolean response = productRepository.addProduct(productRequest);
		return new ResponseEntity<>(response, HttpStatus.CREATED);
	}

	public ResponseEntity<?> editProduct(Product productRequest) {
		Boolean response = productRepository.editProduct(productRequest);
		return new ResponseEntity<>(response, HttpStatus.OK);
	}
	
	public ResponseEntity<?> dropProduct(Product productRequest) {
		Boolean response = productRepository.dropProduct(productRequest);
		return new ResponseEntity<>(response, HttpStatus.OK);
	}

	public ResponseEntity<?> getProduct(ProductRequestId productRequest) {
		List<?> products = productRepository.getProduct(productRequest);
		return new ResponseEntity<>(products, HttpStatus.OK);
	}
	
	public ResponseEntity<?> getProducts() {
		List<?> products = productRepository.getProducts();
		return new ResponseEntity<>(products, HttpStatus.OK);
	}
	
	public ResponseEntity<?> getProductsByCategory(Product productRequest) {
		List<?> products = productRepository.getProductsByCategory(productRequest);
		return new ResponseEntity<>(products, HttpStatus.OK);
	}
	
	public ResponseEntity<?> getProductsManager() {
		List<?> products = productRepository.getProductsManager();
		return new ResponseEntity<>(products, HttpStatus.OK);
	}

}
