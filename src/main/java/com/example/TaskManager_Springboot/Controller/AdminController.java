package com.example.TaskManager_Springboot.Controller;

import com.example.TaskManager_Springboot.Model.Employee;
import com.example.TaskManager_Springboot.Model.Task;
import com.example.TaskManager_Springboot.Repository.EmployeeRepo;
import com.example.TaskManager_Springboot.Repository.TaskRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("api/employee")
public class AdminController {
    @Autowired
    private EmployeeRepo employeeRepo;

    @Autowired
    private TaskRepo taskRepo;
    @CrossOrigin(origins ="*")
    @PostMapping("/addemp")
    public ResponseEntity<String> addEmployee(@RequestParam("image") MultipartFile image, @RequestParam("empcode") String empcode, @RequestParam("name") String name, @RequestParam("phn") String phn, @RequestParam("address") String address, @RequestParam("designation") String designation, @RequestParam("gender") String gender, @RequestParam("email") String email, @RequestParam("username") String username, @RequestParam("password") String password, @RequestParam("con_password") String con_password) {
        try {

            if (!password.equals(con_password)) {
                return new ResponseEntity<>("Password and Confirm Password do not match.", HttpStatus.BAD_REQUEST);
            }
            Employee employee = new Employee();
            employee.setEmpcode(empcode);
            employee.setName(name);
            employee.setPhn(phn);
            employee.setAddress(address);
            employee.setDesignation(designation);
            employee.setGender(gender);
            employee.setEmail(email);
            employee.setUsername(username);
            employee.setPassword(password);
            employee.setCon_password(con_password);
            employee.setImage(image.getBytes());

            employeeRepo.save(employee);
            return new ResponseEntity<>("User registered successfully.", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Error registering user.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }



    @CrossOrigin(origins = "*")
    @GetMapping("/{empcode}")
    public ResponseEntity<Employee> getUserByEmpcode(@PathVariable String empcode) {
        Employee employee = employeeRepo.findByEmpcode(empcode).orElse(null);

        if (employee != null) {
            return ResponseEntity.ok(employee);
        } else {
            return ResponseEntity.notFound().build();
        }
    }


    @CrossOrigin(origins = "*")
    @PostMapping(path = "/emplogin", consumes = "application/json", produces = "application/json")
    public HashMap<String, String> userLogin(@RequestBody Employee employee){
        System.out.println(employee.getUsername());
        List<Employee> result=(List<Employee>) employeeRepo.empLogin(employee.getEmpcode(),employee.getPassword());
        HashMap<String,String> st=new HashMap<>();
        if (result.size()==0){
            st.put("status","failed");
            st.put("message","user doesn't exist");

        }
        else{
            long id =result.get(0).getId();
            String empcode=result.get(0).getEmpcode();
            st.put("status","success");
            st.put("userid",String.valueOf(id));
            st.put("empcode",String.valueOf(empcode));
            st.put("message","user login success");
        }
        return st;
    }
    @CrossOrigin(origins = "*")
    @GetMapping(path ="/viewAll",produces = "application/json")
    public List<Employee> getAllEmployee() {
        return employeeRepo.findAll();
    }
    @CrossOrigin(origins = "*")
    @PostMapping("/createTask")
    public ResponseEntity<String> createTask(@RequestBody Task task) {
        try {

            String empcode = task.getEmpcode();
            String description = task.getDescription();
            String track = task.getTrack();
            String emptask = task.getEmptask();


            Task newTask = new Task();
            newTask.setEmpcode(empcode);
            newTask.setDescription(description);
            newTask.setTrack(track);
            newTask.setEmptask(emptask);


            taskRepo.save(newTask);

            return new ResponseEntity<>("Task added successfully.", HttpStatus.OK);
        } catch (Exception e){
            return new ResponseEntity<>("Error occurred", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @CrossOrigin(origins = "*")
    @GetMapping(path="/viewAlltask",produces = "application/json")
    public List<Task> getAllTask(){
        return taskRepo.findAll();
    }
    @CrossOrigin(origins = "*")
    @GetMapping("/task/{empcode}")
    public List<Task> getTasksByEmpcode(@PathVariable String empcode) {
        return taskRepo.findTaskByEmpcode(empcode);
    }


@CrossOrigin(origins = "*")
@PutMapping("/task/{id}/track")
public ResponseEntity<Object> updateTrackForTask(@PathVariable Long id, @RequestBody String track) {
    Task task = taskRepo.findById(id).orElse(null);
    if (task != null) {
        task.setTrack(track);
        taskRepo.save(task);
        return ResponseEntity.ok("Track updated successfully");
    } else {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Task not found");
    }
}
}