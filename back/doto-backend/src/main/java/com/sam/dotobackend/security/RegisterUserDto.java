package com.sam.dotobackend.security;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class RegisterUserDto {

    private String username;
    private String firstname;
    private String email;
    private String password;

}
