package com.og.onlygiftsapi.repository;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.og.onlygiftsapi.db.domain.Product;
import com.og.onlygiftsapi.db.domain.request.ProductIdRequest;
import com.og.onlygiftsapi.db.domain.request.ProductRequest;

@Repository
public interface ProductRepository {
	Integer addProduct(ProductRequest request);
	Boolean addProductImage(Integer productId, String imageUrl);
	Boolean editProduct(ProductRequest request);
	Boolean dropProduct(ProductRequest request);
	Boolean changeStatusProduct(ProductRequest request);
	
	Object getProduct(ProductRequest request);
	List<?> getProducts();
	List<?> getProductsBySearch(ProductRequest request);
	List<?> getProductsManager();
}
