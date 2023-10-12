package com.example.demo.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Repository.SettingRepo;
import com.example.demo.model.SettingModel;

@Service
public class SettingService {

	
	@Autowired
	private SettingRepo setting;
	
	public List<SettingModel> getsettingdetails(){
		return setting.findAll();
	}
	
	public Optional<SettingModel> getuserByID(int id){
		return setting.findById(id);
	}
	
	public void postDetails(SettingModel logobj) {
		setting.save(logobj);
	}
	
	public SettingModel putDetails(SettingModel logobj) {
		return setting.save(logobj);
	}
	
	public void deleteByID(int id) {
		setting.deleteById(id);
	}
}
