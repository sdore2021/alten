package com.sam.dotobackend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sam.dotobackend.model.User;
import com.sam.dotobackend.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    public List<User> getUsers(){
        return userRepository.findAll();
    }

    public User getUserstById(Integer id){
        return userRepository.findById(id).get();
    }

    public void saveOrUpdate(User user){
        userRepository.save(user);
    }

    public void delete(Integer id) {
        userRepository.deleteById(id);
    }
    
    
}

