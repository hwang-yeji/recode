package com.example.recode.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class FindIdRequest {

    private String userRealName;
    private String userEmail;
}
