package com.sam.dotobackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sam.dotobackend.model.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {
    
}

