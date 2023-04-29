package com.CodeOfDuty.CourseEvaluation.restApi;


import com.CodeOfDuty.CourseEvaluation.Service.IAdminService;
import com.CodeOfDuty.CourseEvaluation.Service.IDepartmentService;
import com.CodeOfDuty.CourseEvaluation.Service.IInstructorService;
import com.CodeOfDuty.CourseEvaluation.Service.IStudentService;
import com.CodeOfDuty.CourseEvaluation.model.LoginForm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping()
public class LoginController {

    @Autowired
    private IDepartmentService departmentService;
    @Autowired
    private IInstructorService instructorService;
    @Autowired
    private IStudentService studentService;

    @Autowired
    private IAdminService adminService;


    @GetMapping("/login")
    public String login(){
        return "Login Page";
    }

    @PostMapping("/login")
    public String login(@RequestBody LoginForm login_info){
        String username=login_info.getUser_name();
        String password=login_info.getPassword();
        if (studentService.isValidStudent(username,password)) {
            return "redirect:/student/home";
        }
        // Check if user is a department manager
        if (instructorService.isValidDepartmentManager(username, password)) {
            return "redirect:/deptmanager/home";
        }
        // Check if user is a teacher
        if (instructorService.isValidInstructor(username, password)) {
            return "redirect:/instructor/home";
        }
        // Check if user is an admin
        if (adminService.isValidAdmin(username, password)) {
            return "redirect:/admin/home";
        }
        return "Invalid user information";
    }





}
