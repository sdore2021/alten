package com.sam.dotobackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sam.dotobackend.model.Product;
import com.sam.dotobackend.service.ProductService;

@RequestMapping("/product")
@RestController
public class ProductController {

    @Autowired
    ProductService productService;

    @CrossOrigin("*")
    @GetMapping
    public List<Product> getProducts(){
        return productService.getProducts();
    }

    
    @CrossOrigin("*")
    @GetMapping("/{id}")
    public Product getProductById(@PathVariable("id") Integer id){
        return productService.getProductById(id);
    }


    @CrossOrigin("*")
    @PostMapping("/onlyAdmin")
    private boolean createOrUpdateProduct(@RequestBody Product product) {
        try {
            productService.saveOrUpdate(product);
        } catch (Exception exception) {
            return false;
        }
        return true;
    }


    @CrossOrigin("*")
    @DeleteMapping("/onlyAdmin/{id}")
    private boolean deleteById(@PathVariable("id") int id) {
        try {
            productService.delete(id);
        } catch (Exception exception) {
            return false;
        }
        return true;
    }
    
}
