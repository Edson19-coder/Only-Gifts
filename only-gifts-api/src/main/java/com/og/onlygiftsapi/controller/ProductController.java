package com.og.onlygiftsapi.controller;

import java.io.IOException;
import java.io.InputStream;

import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.og.onlygiftsapi.db.domain.Product;
import com.og.onlygiftsapi.db.domain.request.PhotoRequest;
import com.og.onlygiftsapi.db.domain.request.ProductIdRequest;
import com.og.onlygiftsapi.db.domain.request.ProductRequest;
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
	public ResponseEntity<?> addProduct(@RequestBody ProductRequest productRequest) {
		log.info("Add Product");
		return productService.addProduct(productRequest);
	}
	
	@PostMapping(value = Endpoint.ADD_PRODUCT_IMAGE)
	public ResponseEntity<?> addImageProduct(@RequestParam("image") MultipartFile image, @RequestParam("productId") Integer productId) {
		log.info("Add Image Product");
		return productService.addImage(image, productId);
	}
	
	@GetMapping(value = Endpoint.GET_PRODUCT_IMAGE, produces = MediaType.IMAGE_JPEG_VALUE)
	public @ResponseBody byte[] getImageProduct(@PathVariable("productId") Integer productId, @PathVariable("image") String image) throws IOException {
		ClassLoader classLoader = getClass().getClassLoader();
		String resourcePath = "./product-photos/" + productId + "/" + image;
		log.info(resourcePath);
		InputStream in = classLoader.getResourceAsStream(resourcePath);
	    return IOUtils.toByteArray(in);
	}
	
	@PostMapping(value = Endpoint.EDIT_PRODUCT, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<?> editProduct(@RequestBody ProductRequest productRequest) {
		log.info("Edit Product");
		return productService.editProduct(productRequest);
	}
	
	@PostMapping(value = Endpoint.DROP_PRODUCT, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<?> dropProduct(@RequestBody ProductRequest productRequest) {
		log.info("Drop Product");
		return productService.dropProduct(productRequest);
	}
	
	@PostMapping(value = Endpoint.CHANGE_STATUS_PRODUCT, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<?> changeStatusProduct(@RequestBody ProductRequest productRequest) {
		log.info("Change Status Product");
		return productService.changeStatusProduct(productRequest);
	}
	
	@PostMapping(value = Endpoint.GET_PRODUCTS_MANG, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<?> getProductsManager() {
		log.info("Get Product Manager");
		return productService.getProductsManager();
	}
	
	@PostMapping(value = Endpoint.GET_PRODUCT, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<?> getProduct(@RequestBody ProductRequest productRequest) {
		log.info("Get Product");
		return productService.getProduct(productRequest);
	}
	
	@PostMapping(value = Endpoint.GET_PRODUCTS, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<?> getProducts() {
		log.info("Get Products");
		return productService.getProducts();
	}

}
