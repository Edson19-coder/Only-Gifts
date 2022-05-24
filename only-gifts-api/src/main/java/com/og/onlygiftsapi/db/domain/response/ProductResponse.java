package com.og.onlygiftsapi.db.domain.response;

import lombok.Data;

@Data
public class ProductResponse {
	public Integer productId;
	public String name;
	public String description;
	public String characteristic;
	public Float price;
	public String image;
	public Integer customImage;
}
