package com.og.onlygiftsapi.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.og.onlygiftsapi.db.domain.Product;
import com.og.onlygiftsapi.db.domain.request.ProductIdRequest;
import com.og.onlygiftsapi.repository.ProductRepository;
import com.og.onlygiftsapi.service.ProductService;

@Service
public class ProductServiceImpl implements ProductService {

	@Autowired
	ProductRepository productRepository;

	public ResponseEntity<?> addProduct(Product request) {
		Boolean response = productRepository.addProduct(request);
		return new ResponseEntity<>(response, HttpStatus.CREATED);
	}

	public ResponseEntity<?> editProduct(Product request) {
		Boolean response = productRepository.editProduct(request);
		return new ResponseEntity<>(response, HttpStatus.OK);
	}
	
	public ResponseEntity<?> dropProduct(Product request) {
		Boolean response = productRepository.dropProduct(request);
		return new ResponseEntity<>(response, HttpStatus.OK);
	}

	public ResponseEntity<?> getProduct(ProductIdRequest request) {
		List<?> products = productRepository.getProduct(request);
		return new ResponseEntity<>(products, HttpStatus.OK);
	}
	
	public ResponseEntity<?> getProducts() {
		List<?> products = productRepository.getProducts();
		return new ResponseEntity<>(products, HttpStatus.OK);
	}
	
	public ResponseEntity<?> getProductsByCategory(Product request) {
		List<?> products = productRepository.getProductsByCategory(request);
		return new ResponseEntity<>(products, HttpStatus.OK);
	}
	
	public ResponseEntity<?> getProductsManager() {
		List<?> products = productRepository.getProductsManager();
		return new ResponseEntity<>(products, HttpStatus.OK);
	}

}
