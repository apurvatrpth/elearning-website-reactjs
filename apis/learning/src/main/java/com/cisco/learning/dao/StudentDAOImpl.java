package com.cisco.learning.dao;

import java.util.List;

import javax.persistence.EntityManager;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.cisco.learning.entity.Student;
import com.cisco.learning.entity.Student_courses;


@Repository
public class StudentDAOImpl implements StudentDAO {

	
	private EntityManager entityManager;
	
	@Autowired
	public StudentDAOImpl(EntityManager e) {
		entityManager = e;
	}
	

	
	@Override
	@Transactional
	public List<Student_courses> findById(int theId) {
		Session currentSession= entityManager.unwrap(Session.class);
		Query<Student_courses> theQuery= 
				currentSession.createQuery(" from Student_courses s where s.student_id=:theId1", Student_courses.class);
		theQuery.setParameter("theId1", theId);
		List<Student_courses> employees = theQuery.getResultList();
		
		
		return employees;
		
	}


	@Override
	@Transactional
	public void save(Student_courses stud) {
		Session currentSession= entityManager.unwrap(Session.class);
		
		currentSession.saveOrUpdate(stud);
		
	}



	@Override
	@Transactional
	public void deleteById(int theId, String thecoursename) {
		Session currentSession= entityManager.unwrap(Session.class);
		
		Query theQuery = currentSession.createQuery("delete from Student_courses where student_id=:student_id and cname=:thecoursename1");
		theQuery.setParameter("student_id", theId);
		theQuery.setParameter("thecoursename1", thecoursename);
		theQuery.executeUpdate();
		
	}



	@Override
	@Transactional
	public Student blah(String student_name, String pw) {
		Session currentSession= entityManager.unwrap(Session.class);
		System.out.println("check one");
		Query<Student> theQuery = currentSession.createQuery("from Student where student_name=:student_name1 and student_password=:pw1",Student.class);
		System.out.println(student_name);
		theQuery.setParameter("student_name1", student_name);
		theQuery.setParameter("pw1", pw);
		Student studs=theQuery.getSingleResult();	
		return studs;
	
		}

	



	@Override
	@Transactional
	public Student findStud(int theId) {
		System.out.println("check one");
		Session currentSession= entityManager.unwrap(Session.class);
		Student log= currentSession.get(Student.class, theId);

		return log;
	}



	@Override
	@Transactional
	public void saveStud(Student stud) {
		
			Session currentSession= entityManager.unwrap(Session.class);
			
			currentSession.saveOrUpdate(stud);
		
		
	}
	
}
	





