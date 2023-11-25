package com.example.TaskManager_Springboot.Model;

import jakarta.persistence.*;

@Entity
@Table(name = "Task")
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String empcode;
    private String emptask;
    private String description;
    private String track;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmpcode() {
        return empcode;
    }

    public void setEmpcode(String empcode) {
        this.empcode = empcode;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getTrack() {
        return track;
    }

    public void setTrack(String track) {
        this.track = track;
    }

    public Task() {
    }

    public String getEmptask() {
        return emptask;
    }

    public void setEmptask(String emptask) {
        this.emptask = emptask;
    }

    public Task(Long id, String empcode, String emptask, String description, String track) {
        this.id = id;
        this.empcode = empcode;
        this.emptask = emptask;
        this.description = description;
        this.track = track;
    }
}
