package com.example.demo.repo;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.LoginModel;

@Repository
public interface LoginRepo extends JpaRepository<LoginModel, Integer>{

}
