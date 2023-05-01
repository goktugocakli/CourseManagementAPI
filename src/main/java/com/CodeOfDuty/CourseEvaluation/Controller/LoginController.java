package com.CodeOfDuty.CourseEvaluation.Controller;


import com.CodeOfDuty.CourseEvaluation.Service.IAdminService;
import com.CodeOfDuty.CourseEvaluation.Service.IDepartmentService;
import com.CodeOfDuty.CourseEvaluation.Service.IInstructorService;
import com.CodeOfDuty.CourseEvaluation.Service.IStudentService;
import com.CodeOfDuty.CourseEvaluation.model.LoginForm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.RedirectView;

@RestController
@RequestMapping("/login")
public class LoginController {


    private IDepartmentService departmentService;

    private IInstructorService instructorService;

    private IStudentService studentService;

    private IAdminService adminService;

    @Autowired
    public LoginController(IDepartmentService departmentService, IInstructorService instructorService, IStudentService studentService, IAdminService adminService) {
        this.departmentService = departmentService;
        this.instructorService = instructorService;
        this.studentService = studentService;
        this.adminService = adminService;
    }

    @GetMapping()
    public String login(){
        return "Login Page \n Username: \n Password:";
    }

    @PostMapping()
    public RedirectView login(@RequestBody LoginForm login_info){
        String username=login_info.getUser_name();
        String password=login_info.getPassword();
        System.out.println(studentService.isValidStudent(username,password));
        if (studentService.isValidStudent(username,password)) {
            System.out.println("login basarili");
            return new RedirectView("/home/student/" + username);
        }
        // Check if user is a department manager
        if (instructorService.isValidDepartmentManager(username, password)) {
            return new RedirectView("/home/deptmanager/"+ username);
        }
        // Check if user is a teacher
        if (instructorService.isValidInstructor(username, password)) {
            return new RedirectView("/home/instructor/" + username);
        }
        // Check if user is an admin
        if (adminService.isValidAdmin(username, password)) {
            return new RedirectView("/home/admin/"+username);
        }
        return new RedirectView("/login");
    }


}
