package com.og.onlygiftsapi.service.impl;

import java.io.IOException;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.og.onlygiftsapi.db.domain.Product;
import com.og.onlygiftsapi.db.domain.request.PhotoRequest;
import com.og.onlygiftsapi.db.domain.request.ProductIdRequest;
import com.og.onlygiftsapi.db.domain.request.ProductRequest;
import com.og.onlygiftsapi.db.domain.response.ProductResponse;
import com.og.onlygiftsapi.db.domain.response.ProductsManagerResponse;
import com.og.onlygiftsapi.db.domain.response.ProductsResponse;
import com.og.onlygiftsapi.db.domain.response.list.ProductsListResponse;
import com.og.onlygiftsapi.db.domain.response.list.ProductsManagerListResponse;
import com.og.onlygiftsapi.exeptions.ResourceNotFoundException;
import com.og.onlygiftsapi.repository.ProductRepository;
import com.og.onlygiftsapi.service.ProductService;
import com.og.onlygiftsapi.util.FileUploadUtil;

@Service
public class ProductServiceImpl implements ProductService {

	@Autowired
	ProductRepository productRepository;

	public ResponseEntity<?> addProduct(ProductRequest request){
		Integer response = productRepository.addProduct(request);
		return new ResponseEntity<>(response, HttpStatus.CREATED);
	}
	
	public ResponseEntity<?> addImage(MultipartFile image, Integer productId) {
		String fileName = UUID.randomUUID().toString() + ".jpg";
		Boolean response = productRepository.addProductImage(productId, fileName);
		if(response) {
			String uploadDir = "src/main/resources/product-photos/" + productId;
			try {
				FileUploadUtil.saveFile(uploadDir, fileName, image);
			} catch (IOException e) {
				e.printStackTrace();
			}	
		}
		return new ResponseEntity<>(response, HttpStatus.OK);
	}

	public ResponseEntity<?> editProduct(ProductRequest request) {
		Boolean response = productRepository.editProduct(request);
		return new ResponseEntity<>(response, HttpStatus.OK);
	}
	
	public ResponseEntity<?> dropProduct(ProductRequest request) {
		Boolean response = productRepository.dropProduct(request);
		return new ResponseEntity<>(response, HttpStatus.OK);
	}
	
	public ResponseEntity<?> changeStatusProduct(ProductRequest request) {
		Boolean response = productRepository.changeStatusProduct(request);
		return new ResponseEntity<>(response, HttpStatus.OK);
	}

	public ResponseEntity<?> getProduct(ProductRequest request) {
		Object products = productRepository.getProduct(request);
		Object[] fields = (Object[]) products;
		ProductResponse response = new ProductResponse(); 
		response.setProductId(Integer.valueOf(String.valueOf(fields[0])));
		response.setName(String.valueOf(fields[1]));
		response.setDescription(String.valueOf(fields[2]));
		response.setCharacteristic(String.valueOf(fields[3]));
		response.setPrice(Float.valueOf(String.valueOf(fields[4])));
		response.setImage(String.valueOf(fields[5]));
		response.setCustomImage(Integer.valueOf(String.valueOf(fields[6])));
		
		return new ResponseEntity<>(response, HttpStatus.OK);
	}
	
	public ResponseEntity<?> getProducts() {
		List<?> products = productRepository.getProducts();
		if(products == null || products.isEmpty()) {
			throw new ResourceNotFoundException("Products", "products", null);
		}
		ProductsListResponse response = new ProductsListResponse();
		for(Object o : products) {
			Object[] obj = (Object[]) o;
			ProductsResponse product = new ProductsResponse();
			product.setProductId(Integer.valueOf(String.valueOf(obj[0])));
			product.setName(String.valueOf(obj[1]));
			product.setPrice(Float.valueOf(String.valueOf(obj[2])));
			product.setImage(String.valueOf(obj[3]));
			response.add(product);
		}
		return new ResponseEntity<>(response, HttpStatus.OK);
	}
	
	public ResponseEntity<?> getProductsBySearch(ProductRequest request) {
		List<?> products = productRepository.getProductsBySearch(request);
		if(products == null || products.isEmpty()) {
			throw new ResourceNotFoundException("Products", "products", null);
		}
		ProductsListResponse response = new ProductsListResponse();
		for(Object o : products) {
			Object[] obj = (Object[]) o;
			ProductsResponse product = new ProductsResponse();
			product.setProductId(Integer.valueOf(String.valueOf(obj[0])));
			product.setName(String.valueOf(obj[1]));
			product.setPrice(Float.valueOf(String.valueOf(obj[2])));
			product.setImage(String.valueOf(obj[3]));
			response.add(product);
		}
		return new ResponseEntity<>(response, HttpStatus.OK);
	}
	
	public ResponseEntity<?> getProductsManager() {
		List<?> products = productRepository.getProductsManager();
		if(products == null || products.isEmpty()) {
			throw new ResourceNotFoundException("Products", "products", null);
		}
		ProductsManagerListResponse response = new ProductsManagerListResponse();
		for(Object o : products) {
			Object[] obj = (Object[]) o;
			ProductsManagerResponse product = new ProductsManagerResponse();
			product.setProductId(Integer.valueOf(String.valueOf(obj[0])));
			product.setName(String.valueOf(obj[1]));
			product.setPrice(Float.valueOf(String.valueOf(obj[2])));
			product.setStatus(String.valueOf(obj[3]));
			product.setCategory(String.valueOf(obj[4]));
			response.add(product);
		}
		return new ResponseEntity<>(response, HttpStatus.OK);
	}

}
