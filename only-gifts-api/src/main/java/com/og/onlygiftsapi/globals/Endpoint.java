package com.og.onlygiftsapi.globals;

public class Endpoint {
	public static final String CREATE_USER = "api/user";
	public static final String SIGN_IN_USER = "api/user/SignIn";
	
	public static final String ADD_PRODUCT= "api/manager/add-product";
	public static final String ADD_PRODUCT_IMAGE= "api/manager/add-product-image";
	public static final String GET_PRODUCT_IMAGE= "api/get-image-product/{productId}/{image}";
	public static final String EDIT_PRODUCT= "api/manager/edit-product";
	public static final String DROP_PRODUCT= "api/manager/drop-product";
	public static final String CHANGE_STATUS_PRODUCT= "api/manager/change-status-product";
	public static final String GET_PRODUCTS_MANG = "api/manager/get-products";

	public static final String GET_PRODUCT = "api/get-product";
	public static final String GET_PRODUCTS = "api/get-products";
	public static final String GET_PRODUCTS_CATEGORY = "api/get-products-category";
	
	public static final String ADD_CART_ITEM = "api/add-cart-item";
	public static final String EDIT_CART_ITEM = "api/edit-cart-item";
	public static final String DROP_CART_ITEM = "api/drop-cart-item";
	public static final String DROP_SHOPPING_CART = "api/drop-shopping-cart";
	
	public static final String GET_SHOPPING_CART = "api/shopping-cart";
	
	public static final String ADD_ADDRESS = "api/add-address";
	public static final String EDIT_ADDRESS = "api/edit-address";
	public static final String DROP_ADDRESS = "api/drop-address";

	public static final String GET_ADDRESS = "api/get-address";
	public static final String GET_ADDRESSES = "api/get-addresses";
	
	public static final String ADD_PAYMENT_METHOD = "api/add-payment-method";
	public static final String EDIT_PAYMENT_METHOD = "api/edit-payment-method";
	public static final String DROP_PAYMENT_METHOD = "api/drop-payment-method";

	public static final String GET_PAYMENT_METHOD = "api/get-payment-method";
	public static final String GET_PAYMENT_METHODS = "api/get-payment-methods";
	
	public static final String ADD_PURCHASE = "api/add-purchase";
	public static final String EDIT_PURCHASE = "api/edit-purchase";
	public static final String GET_PURCHASE_USER = "api/get-purchase";
	public static final String GET_PURCHASE_MANAGER = "api/manager/get-purchase";
	public static final String GET_PURCHASE_MANAGER_HISTORY = "api/manager/get-purchase-history";
	public static final String GET_PURCHASE_DETAIL = "api/get-purchase-detail";
	public static final String GET_PURCHASE_ITEMS = "api/get-purchase-items";
	
	public static final String ADD_PURCHASE_ITEM = "api/add-purchase-item";
}
