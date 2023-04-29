package com.CodeOfDuty.CourseEvaluation.restApi;

import com.CodeOfDuty.CourseEvaluation.Service.IDepartmentService;
import com.CodeOfDuty.CourseEvaluation.model.Department;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class DepartmentController {

    private IDepartmentService departmentService;

    public DepartmentController(IDepartmentService departmentService) {
        this.departmentService = departmentService;
    }

    @GetMapping("/departments")
    public List<Department> getAll(){
        return departmentService.getAll();
    }

    @PostMapping("/departments/add")
    public void add(@RequestBody Department department){
        departmentService.add(department);
    }

    @PostMapping("/departments/update")
    public void update(@RequestBody Department department){
        departmentService.update(department);
    }

    @DeleteMapping("/departments/delete")
    public void delete(@RequestBody Department department){
        departmentService.delete(department);
    }

    @GetMapping("/departments/{dept_name}")
    public Department getByDepartmentName(@PathVariable String dept_name){
        return departmentService.getByDepartmentName(dept_name);
    }




}
