package com.CodeOfDuty.CourseEvaluation.DAO;

import com.CodeOfDuty.CourseEvaluation.model.Department;

import java.util.List;

public interface IDepartmentDao {
    List<Department> getAll();

    void add(Department department);

    void update(Department department);

    void delete(Department department);
    Department getByDepartmentName(String dept_name);

}
