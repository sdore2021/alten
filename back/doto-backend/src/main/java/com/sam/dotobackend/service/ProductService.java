package com.sam.dotobackend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sam.dotobackend.model.Product;
import com.sam.dotobackend.repository.ProductRepository;

@Service
public class ProductService {

     @Autowired
    ProductRepository productRepository;

    public List<Product> getProducts(){
        return productRepository.findAll();
    }

    public Product getProductById(Integer id){
        return productRepository.findById(id).get();
    }

    public void saveOrUpdate(Product product){
        productRepository.save(product);
    }

    public void delete(Integer id) {
        productRepository.deleteById(id);
    }
    
    
}
