package com.cisco.learning.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="student_courses")
public class Student_courses {
	
	public Student_courses() {
		
	}
	
	@Id
	@Column(name="id")
	private int id;
	
	@Column(name="student_id")
	private int student_id;
	
	public int getStudent_id() {
		return student_id;
	}

	public void setStudent_id(int student_id) {
		this.student_id = student_id;
	}

	@Column(name="cname")
	private String cname;

	public Student_courses(int id, String cname) {
		this.id = id;
		this.cname = cname;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getCname() {
		return cname;
	}

	public void setCname(String cname) {
		this.cname = cname;
	}

	@Override
	public String toString() {
		return "Student_courses [id=" + id + ", student_id=" + student_id + ", cname=" + cname + "]";
	}

	
	
}
