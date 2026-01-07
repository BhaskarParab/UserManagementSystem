package org.example.servlet;

import java.io.IOException;

import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet("/register")
public class RegisterServlet extends HttpServlet{

  @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        resp.getWriter().write("Register servlet is alive");
    }

  @Override
  protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws IOException{
    String name = req.getParameter("name");
    String email = req.getParameter("email");

    resp.setContentType("text/plain");
        resp.getWriter().write("User registered: " + name + " | " + email);
  }
}
