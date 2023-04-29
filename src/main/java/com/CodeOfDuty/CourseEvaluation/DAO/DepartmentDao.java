package com.CodeOfDuty.CourseEvaluation.DAO;

import com.CodeOfDuty.CourseEvaluation.model.Department;
import jakarta.persistence.EntityManager;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public class DepartmentDao implements IDepartmentDao{

    private EntityManager entityManager;

    @Autowired
    public DepartmentDao(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    @Override
    @Transactional
    public List<Department> getAll() {
        Session session = entityManager.unwrap(Session.class);
        List<Department> departments = session.createQuery("from Department", Department.class).getResultList();
        return departments;
    }

    @Override
    @Transactional
    public void add(Department department) {
        Session session = entityManager.unwrap(Session.class);
        session.persist(department);
    }

    @Override
    @Transactional
    public void update(Department department) {
        Session session = entityManager.unwrap(Session.class);
        session.saveOrUpdate(department);
    }

    @Override
    @Transactional
    public void delete(Department department) {
        Session session = entityManager.unwrap(Session.class);
        Department departmentToDelete = session.get(Department.class, department.getName());
        session.remove(departmentToDelete);
    }

    @Override
    @Transactional
    public Department getByDepartmentName(String dept_name) {
        Session session = entityManager.unwrap(Session.class);
        return session.get(Department.class, dept_name);
    }
}
