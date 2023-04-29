package com.CodeOfDuty.CourseEvaluation.Service;


import com.CodeOfDuty.CourseEvaluation.model.Instructor;

import java.util.List;

public interface IInstructorService  {
    List<Instructor> getAll();
    void add(Instructor instructor);
    void update(Instructor instructor);
    void delete(Instructor instructor);
    Instructor getByUserName(String user_name);

}