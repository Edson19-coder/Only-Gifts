package com.og.onlygiftsapi.repository;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.og.onlygiftsapi.db.domain.Product;
import com.og.onlygiftsapi.db.domain.request.ProductRequestId;

@Repository
public interface ProductRepository {
	Boolean addProduct (Product request);
	Boolean editProduct(Product request);
	Boolean dropProduct(Product request);
	
	List<?> getProduct(ProductRequestId request);
	List<?> getProducts();
	List<?> getProductsByCategory(Product request);
	List<?> getProductsManager();
}
