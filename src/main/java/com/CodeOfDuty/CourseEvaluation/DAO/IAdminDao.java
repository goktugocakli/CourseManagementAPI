package com.CodeOfDuty.CourseEvaluation.DAO;

import com.CodeOfDuty.CourseEvaluation.model.Admin;
import com.CodeOfDuty.CourseEvaluation.model.Instructor;

import java.util.List;

public interface IAdminDao {

    List<Admin> getAll();
    void add(Admin admin);
    void update(Admin admin);
    void delete(Admin admin);
    Admin getByUserName(String user_name);

}