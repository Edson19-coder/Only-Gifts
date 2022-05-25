package com.og.onlygiftsapi.db.domain.request;

import org.springframework.web.multipart.MultipartFile;

import lombok.Data;

@Data
public class PhotoRequest {
	public Integer productId;
	public MultipartFile image;
}
