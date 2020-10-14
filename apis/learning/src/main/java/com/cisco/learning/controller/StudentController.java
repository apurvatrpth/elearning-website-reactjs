package com.cisco.learning.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cisco.learning.dao.StudentDAO;
import com.cisco.learning.entity.Student;
import com.cisco.learning.entity.Student_courses;


@RestController
@CrossOrigin
@RequestMapping("/api")
public class StudentController {
	
	
	private StudentDAO studentDAO;
	@Autowired
	public StudentController(StudentDAO s) {
		studentDAO = s;
	}
	
	@CrossOrigin
	@GetMapping("/clist/{id}")
	public List<Student_courses> blah(@PathVariable int id){
		
		return studentDAO.findById(id);
	}
	
	@CrossOrigin
	@DeleteMapping("/clist/delete/{id}/{cname}")
	public List<Student_courses> blah(@PathVariable int id, @PathVariable String cname){
		
	  studentDAO.deleteById(id,cname);
	 return studentDAO.findById(id);
	}
	
	@CrossOrigin
	@PutMapping("/clist/update")
	public Student_courses updateCourse(@RequestBody Student_courses thecourse)
	{
		studentDAO.save(thecourse);
		return thecourse;
	}
	
	@CrossOrigin
	@GetMapping("clist/login/{student_name}/{student_password}")
	public Student loged(@PathVariable String student_name, @PathVariable String student_password)
			{
		     	return studentDAO.blah(student_name, student_password);
			}
	
	@CrossOrigin
	@GetMapping("clist/login/{theId}")
	public Student findStud(@PathVariable int theId)
			{
		     	return studentDAO.findStud(theId);
			}
	
	@CrossOrigin
	@PutMapping("clist/signup")
	public Student signUp(@RequestBody Student stud) {
		studentDAO.saveStud(stud);
		return stud;
		
	}
	
}
