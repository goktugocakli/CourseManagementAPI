package com.CodeOfDuty.CourseEvaluation.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import org.hibernate.engine.internal.Cascade;

@Entity
@Table(name="instructor")
public class Instructor {
    @Id
    @Column(name = "user_name")
    private String user_name;

    @Column(name = "first_name")
    private String first_name;

    @Column(name = "second_name")
    private String second_name;

    @Column(name = "surname")
    private String surname;

    @Column(name = "e_mail")
    private String e_mail;

    @Column(name = "password")
    private String password;


    @ManyToOne()
    @JoinColumn(name = "department", referencedColumnName = "department_name")
    @JsonIgnoreProperties("manager")
    private Department department;

    public Instructor(String user_name, String first_name, String second_name, String surname, String e_mail, String password) {
        this.user_name = user_name;
        this.first_name = first_name;
        this.second_name = second_name;
        this.surname = surname;
        this.e_mail = e_mail;
        this.password = password;
    }

    public Instructor() {

    }

    public String getUser_name() {
        return user_name;
    }

    public void setUser_name(String user_name) {
        this.user_name = user_name;
    }

    public String getFirst_name() {
        return first_name;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public String getSecond_name() {
        return second_name;
    }

    public void setSecond_name(String second_name) {
        this.second_name = second_name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getE_mail() {
        return e_mail;
    }

    public void setE_mail(String e_mail) {
        this.e_mail = e_mail;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Department getDepartment() {
        return department;
    }

    public void setDepartment(Department department) {
        this.department = department;
    }

}
