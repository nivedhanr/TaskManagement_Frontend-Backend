package com.example.TaskManager_Springboot.Model;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "Employee")
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String empcode;
    private String name;
    private String phn;
    private String address;
    private String designation;
    private String gender;
    private String email;
    private String username;
    private String password;
    private String con_password; // New field
    @Lob
    @Column(name = "image", columnDefinition = "LONGBLOB")
    private byte[] image;

    public Employee() {
    }

    public Employee(Long id, String empcode, String name, String phn, String address, String designation, String gender, String email, String username, String password, String con_password, byte[] image) {
        this.id = id;
        this.empcode = empcode;
        this.name = name;
        this.phn = phn;
        this.address = address;
        this.designation = designation;
        this.gender = gender;
        this.email = email;
        this.username = username;
        this.password = password;
        this.con_password = con_password;
        this.image = image;
    }

    public Long getId() {
        return id;
    }

    public String getEmpcode() {
        return empcode;
    }

    public String getName() {
        return name;
    }

    public String getPhn() {
        return phn;
    }

    public String getAddress() {
        return address;
    }

    public String getDesignation() {
        return designation;
    }

    public String getGender() {
        return gender;
    }

    public String getEmail() {
        return email;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    public String getCon_password() {
        return con_password;
    }

    public byte[] getImage() {
        return image;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setEmpcode(String empcode) {
        this.empcode = empcode;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setPhn(String phn) {
        this.phn = phn;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public void setDesignation(String designation) {
        this.designation = designation;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setCon_password(String con_password) {
        this.con_password = con_password;
    }

    public void setImage(byte[] image) {
        this.image = image;
    }
}
