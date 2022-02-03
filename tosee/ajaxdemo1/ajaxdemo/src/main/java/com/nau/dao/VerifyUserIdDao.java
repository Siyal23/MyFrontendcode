package com.nau.dao;

import java.util.ArrayList;
import java.util.List;

import com.nau.model.User;

public class VerifyUserIdDao {

	private static String users[] = { "nau", "akh", "ppp" };
	private static List<User> listUsers = new ArrayList<>();
	static {
		listUsers.add(new User("1","Naushad","Pune"));
		listUsers.add(new User("2","Akhtar","Mumbai"));
		listUsers.add(new User("3","Ankit","Goa"));
		listUsers.add(new User("4","Rahul","Goa"));
		listUsers.add(new User("5","Anshul","Goa"));
	}

	public static List<User> getAllUsers() {
		return listUsers;
	}
	
	public static boolean getUserId(String userid) {
		
		System.out.println(userid);
		
		boolean flag=false;
		for (String user : users) {
			if (user.equals(userid)) {
				flag = true;
			}
		}
		return flag;
	}

}
