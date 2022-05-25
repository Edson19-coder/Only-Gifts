package com.og.onlygiftsapi.db.domain;

import lombok.Data;

public @Data class GenericResponse {
	private String message;
    private String code;

    public GenericResponse(String message, String code) {
        this.message = message;
        this.code = code;
    }

    public GenericResponse() {
    }
}
