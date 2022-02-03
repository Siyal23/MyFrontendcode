package com.nau.model;

public class User {
	
	private String userId;
	private String uname;
	private String ucity;
	
	public User() {
	}

	public User(String userId, String uname, String ucity) {
		super();
		this.userId = userId;
		this.uname = uname;
		this.ucity = ucity;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getUname() {
		return uname;
	}

	public void setUname(String uname) {
		this.uname = uname;
	}

	public String getUcity() {
		return ucity;
	}

	public void setUcity(String ucity) {
		this.ucity = ucity;
	}

	@Override
	public String toString() {
		return "User [userId=" + userId + ", uname=" + uname + ", ucity=" + ucity + "]";
	}

}
