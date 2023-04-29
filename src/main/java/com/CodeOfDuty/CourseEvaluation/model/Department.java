package com.CodeOfDuty.CourseEvaluation.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonIncludeProperties;
import jakarta.persistence.*;

@Entity
@Table(name = "department")
public class Department {

    @Id
    @Column(name="department_name")
    private String name;


    @ManyToOne(cascade=CascadeType.ALL)
    @JoinColumn(name="manager", referencedColumnName = "user_name")
    @JsonIncludeProperties({"user_name"})
    private Instructor manager;


    public Department(String name, Instructor manager) {
        this.name = name;
        this.manager=manager;
    }




    public Department() {

    }



    public Instructor getManager() {
        return manager;
    }

    public void setManager(Instructor manager) {
        this.manager = manager;
    }

    public Department(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }


}
