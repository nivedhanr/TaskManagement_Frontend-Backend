package com.example.TaskManager_Springboot.Repository;

import com.example.TaskManager_Springboot.Model.Employee;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface EmployeeRepo extends JpaRepository<Employee,Long> {
    @Modifying
    @Transactional
    @Query(value = "SELECT * FROM employee WHERE empcode = :empcode AND password = :password",nativeQuery = true)
    List<Employee> empLogin(@Param("empcode") String empcode, @Param("password") String password);

    Optional<Employee> findByEmpcode(String empcode);
}
