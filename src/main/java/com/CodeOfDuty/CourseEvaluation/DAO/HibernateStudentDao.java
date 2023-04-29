package com.CodeOfDuty.CourseEvaluation.DAO;

import com.CodeOfDuty.CourseEvaluation.model.Student;
import jakarta.persistence.EntityManager;

import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public class HibernateStudentDao implements IStudentDao {

    private EntityManager entityManager;

    @Autowired
    public HibernateStudentDao(EntityManager entityManager) {
        this.entityManager = entityManager;
    }



    @Override
    @Transactional
    public List<Student> getAll() {
        Session session = entityManager.unwrap(Session.class);
        List<Student> students = session.createQuery("from Student", Student.class).getResultList();
        return students;
    }

    @Override
    @Transactional
    public void add(Student student) {
        Session session = entityManager.unwrap(Session.class);
        session.saveOrUpdate(student);
    }

    @Override
    @Transactional
    public void update(Student student) {
        Session session = entityManager.unwrap(Session.class);
        session.saveOrUpdate(student);
    }

    @Override
    public void delete(Student student) {
        Session session = entityManager.unwrap(Session.class);
        Student studentToDelete =session.get(Student.class, student.getStudent_no());
        session.delete(studentToDelete);
    }

    @Override
    public Student getByNo(String student_no) {
        Session session = entityManager.unwrap(Session.class);
        Student student=session.get(Student.class, student_no);
        return student;
    }
}
