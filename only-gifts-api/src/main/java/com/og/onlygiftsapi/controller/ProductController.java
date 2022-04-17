package com.og.onlygiftsapi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.og.onlygiftsapi.db.domain.Product;
import com.og.onlygiftsapi.db.domain.request.ProductRequestId;
import com.og.onlygiftsapi.globals.Endpoint;
import com.og.onlygiftsapi.service.ProductService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@Api("V1 Productos.")
public class ProductController {
	
	@Autowired
	ProductService productService;
	
	@PostMapping(value = Endpoint.ADD_PRODUCT, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<?> addProduct(@RequestBody Product productRequest) {
		log.info("Add Product");
		return productService.addProduct(productRequest);
	}
	
	@PostMapping(value = Endpoint.EDIT_PRODUCT, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<?> editProduct(@RequestBody Product productRequest) {
		log.info("Edit Product");
		return productService.editProduct(productRequest);
	}
	
	@PostMapping(value = Endpoint.DROP_PRODUCT, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<?> dropProduct(@RequestBody Product productRequest) {
		log.info("Drop Product");
		return productService.dropProduct(productRequest);
	}
	
	@PostMapping(value = Endpoint.GET_PRODUCTS_MANG, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<?> getProductsManager() {
		log.info("Get Product Manager");
		return productService.getProductsManager();
	}
	
	@PostMapping(value = Endpoint.GET_PRODUCT, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<?> getProduct(@RequestBody ProductRequestId productRequest) {
		log.info("Get Product");
		return productService.getProduct(productRequest);
	}
	
	@PostMapping(value = Endpoint.GET_PRODUCTS, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<?> getProducts() {
		log.info("Get Products");
		return productService.getProducts();
	}
	
	/*@GetMapping(value = Endpoint.PRODUCT, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    @ApiOperation(value = "Product", notes = "Metodo para obtener un producto por su id.")
	public ResponseEntity<?> getProduct(@PathVariable("product") Integer productId) {
		return productService.getProduct(productId);
	}*/
}
