package com.og.onlygiftsapi.db.domain.response;

import lombok.Data;

@Data
public class ProductsResponse {
	public Integer productId;
	public String name;
	public Float price;
	public String image;
}
