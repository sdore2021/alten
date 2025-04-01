package com.sam.dotobackend.model;

import java.math.BigInteger;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "PRODUCT")
@Getter @Setter
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(nullable = false)
    private String code;
    private String name;
    private String description;
    private String image;
    private String category;
    private String price;
    private Integer quantity;
    private String internalreference;
    private Integer shellid;
    private String inventorystatus; //"INSTOCK" | "LOWSTOCK" | "OUTOFSTOCK";
    private Integer rating;
    private BigInteger createdat;
    private BigInteger updatedat;
    

    public Product() {
    }


    public Product(Integer id, String code, String name, String description, String image, String category,
            String price, Integer quantity, String internalReference, Integer shellId, String inventoryStatus,
            Integer rating, BigInteger createdAt, BigInteger updatedAt) {
        this.id = id;
        this.code = code;
        this.name = name;
        this.description = description;
        this.image = image;
        this.category = category;
        this.price = price;
        this.quantity = quantity;
        this.internalreference = internalReference;
        this.shellid = shellId;
        this.inventorystatus = inventoryStatus;
        this.rating = rating;
        this.createdat = createdAt;
        this.updatedat = updatedAt;
    }
    
}



