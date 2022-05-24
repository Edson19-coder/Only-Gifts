package com.og.onlygiftsapi.db.domain.response;

import lombok.Data;

@Data
public class ProductsManagerResponse {
	public Integer productId;
	public String name;
	public Float price;
	public String status;
	public String category;
}
