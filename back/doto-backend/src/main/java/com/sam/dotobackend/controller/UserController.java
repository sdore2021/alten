package com.sam.dotobackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.sam.dotobackend.model.User;

import com.sam.dotobackend.service.UserService;

@RequestMapping("/account")
@RestController
public class UserController {

    @Autowired
    UserService UserService;


    @CrossOrigin("*")
    @PostMapping
    private boolean createOrUpdateProduct(@RequestBody User user) {
        try {
            UserService.saveOrUpdate(user);
        } catch (Exception exception) {
            return false;
        }
        return true;
    }


    @CrossOrigin("*")
    @DeleteMapping("{id}")
    private boolean deleteById(@PathVariable("id") int id) {
        try {
            UserService.delete(id);
        } catch (Exception exception) {
            return false;
        }
        return true;
    }
    
}

