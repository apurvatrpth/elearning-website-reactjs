package com.cisco.learning.dao;

import java.util.List;

import com.cisco.learning.entity.Student;
import com.cisco.learning.entity.Student_courses;


public interface StudentDAO {

	
//﻿	public List<Student_courses> findAll();
	
	public List<Student_courses> findById(int theId);
	
	public void save(Student_courses stud_course);
	
	public void deleteById(int id, String cname);
	
	public Student blah(String student_name, String pw);
	
	public Student findStud(int theId);
	
	public void saveStud(Student stud);
}
