package com.og.onlygiftsapi.db.domain.request;

import org.springframework.web.multipart.MultipartFile;

import lombok.Data;

@Data
public class ProductRequest {
	public Integer productId;
	public String name;
	public String description;
	public String characteristic;
	public String price;
	public Integer categoryId;
	public Integer customImage;
	public String image;
	public String status;
}
