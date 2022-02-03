package com.nau.controller;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.nau.service.VerifyIdService;

@WebServlet("/verifyid/*") // http://localhost:8080/ajaxdemo/verifyid?userId=?
public class VerifyUserId extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		System.out.println(req.getMethod());
		
		Integer x  =5;
		int xxx = x+10;
		
	//	doGet(req, resp);
	}
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String path = req.getPathInfo();
		System.out.println(path);
		if(path.equals("/verifyUser")) {
			verifyUser(req,resp);
		}else if(path.equals("/getallusers")) {
			getAllUsers(req,resp);
		}
	}
	private void verifyUser(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		PrintWriter out = response.getWriter();
		String userId = request.getParameter("userId");
		System.out.println(userId);
		int res= VerifyIdService.verify(userId);
		out.print(res);
	}
	private void getAllUsers(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		PrintWriter out = response.getWriter();
		String users =  VerifyIdService.getAllUsers();
		out.print(users);
	}

}
