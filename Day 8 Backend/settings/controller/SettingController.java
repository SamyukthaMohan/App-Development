package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;


import com.example.demo.Service.SettingService;
import com.example.demo.model.SettingModel;


public class SettingController {

	@Autowired
	public SettingService sets;
	
	@GetMapping("/getsettingdetails")
	public List<SettingModel> getsettingdetails(){
		return sets.getsettingdetails();
	}
	
	@GetMapping("/getsettingdetailsbyid/{id}")
	public Optional<SettingModel> getuserByID(@PathVariable int id){
		return sets.getuserByID(id);
	}
	@PutMapping("/putsettingdetails/{id}")
	public void putDetails(@PathVariable int id,@RequestBody SettingModel setm) {
		setm.setId(id);
		sets.putDetails(setm);
	}
	@DeleteMapping("/deletesettingdetails/{id}")
	public void deleteByID(@PathVariable int id) {
		sets.deleteByID(id);
	}
}
