package com.example.TaskManager_Springboot.Repository;

import com.example.TaskManager_Springboot.Model.Employee;
import com.example.TaskManager_Springboot.Model.Task;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface TaskRepo extends JpaRepository<Task,Long> {
    List<Task> findTaskByEmpcode(String empcode);
//    

//    Optional<Task> findTaskByEmpcode(String empcode);
}
