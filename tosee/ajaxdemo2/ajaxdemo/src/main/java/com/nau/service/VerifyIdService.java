package com.nau.service;

import java.util.List;

import com.google.gson.Gson;
import com.nau.dao.VerifyUserIdDao;
import com.nau.model.User;

public class VerifyIdService {

	public static  int verify(String userid) {
		boolean res = VerifyUserIdDao.getUserId(userid);
		if(res) {
			return 1;
		}else {
			return 0;
		}
	}
	
	public static String getAllUsers() {
		
		List<User>  users = VerifyUserIdDao.getAllUsers();
	
		Gson gson = new Gson();
		String userjson = gson.toJson(users);
	
		System.out.println(users);
		return userjson;
	}
	
}
