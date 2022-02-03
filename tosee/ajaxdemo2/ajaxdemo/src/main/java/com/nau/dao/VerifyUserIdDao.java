package com.nau.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
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
		try {
			Connection con = DriverManager.getConnection("");
			PreparedStatement ps = con.prepareStatement("");
			ResultSet rs = ps.executeQuery();
			List<User> users = new ArrayList<>();
			while(rs.next()) {
				users.add(new User(rs.getString(1),rs.getString(2),rs.getString(3)));
			}
			return users;
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
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
