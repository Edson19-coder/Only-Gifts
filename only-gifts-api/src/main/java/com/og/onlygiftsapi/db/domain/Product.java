package com.og.onlygiftsapi.db.domain;

import lombok.Data;

@Data
public class Product {
	private Integer productId;
	private String productName;
	private String description;
	private String characteristic;
	private String price;
	private Integer category;
	private String status;
	private String imageUrl;
	private Integer customImage;	
}
