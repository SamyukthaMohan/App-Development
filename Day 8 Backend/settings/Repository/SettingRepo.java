package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.SettingModel;

@Repository
public interface SettingRepo extends JpaRepository<SettingModel, Integer>{

}
