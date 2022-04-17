package com.og.onlygiftsapi.db.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="OG_PRODUCTS")
public class Product {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO, generator="native")
	@GenericGenerator(name="native", strategy="native")
	@Column(name="PRODUCT_ID")
	@JsonIgnore
	private Integer productId;
	
	@Column(name = "NAME")
    private String productName;
	
	@Column(name = "DESCRIPTION")
    private String description;
	
	@Column(name = "CHARACTERISTIC")
    private String characteristic;
	
	@Column(name = "PRICE")
    private String price;
	
	@Column(name = "CATEGORY")
    private Integer category;
	
	@Column(name = "STATUS")
    private String status;
	
	@Column(name = "IMAGE_URL")
    private String imageUrl;
	
	@Column(name = "CUSTOM_IMAGE")
    private Integer customImage;
	
	public Product() {}
	
	public Product(Integer productId, String productName, String description, String characteristic, String price,
			Integer category, String status, String imageUrl, Integer customImage) {
		super();
		this.productId = productId;
		this.productName = productName;
		this.description = description;
		this.characteristic = characteristic;
		this.price = price;
		this.category = category;
		this.status = status;
		this.imageUrl = imageUrl;
		this.customImage = customImage;
	}

	public Product(String productName, String description, String characteristic, String price, String imageUrl) {
		super();
		this.productName = productName;
		this.description = description;
		this.characteristic = characteristic;
		this.price = price;
		this.imageUrl = imageUrl;
	}

	public Integer getProductId() {
		return productId;
	}

	public void setProductId(Integer productId) {
		this.productId = productId;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getCharacteristic() {
		return characteristic;
	}

	public void setCharacteristic(String characteristic) {
		this.characteristic = characteristic;
	}

	public String getPrice() {
		return price;
	}

	public void setPrice(String price) {
		this.price = price;
	}

	public Integer getCategory() {
		return category;
	}

	public void setCategory(Integer category) {
		this.category = category;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}
	
	public Integer getCustomImage() {
		return customImage;
	}
	
	public void setCustomImage(Integer customImage) {
		this.customImage = customImage;
	}
}
