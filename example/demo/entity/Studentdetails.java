package com.example.demo.entity;

import jakarta.persistence.*;

@Entity
public class Studentdetails {
	

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO) // Auto increment
    private Long sid;

    @Column(name = "sname", nullable = false)
    private String sname;

    @Column(name = "class")
    private String studentClass;

    @Column(name = "dob")
    private String dob; 

    @Column(name = "phone")
    private Long phone;
    
    // Getters and Setters

    public Long getSid() {
        return sid;
    }

    public void setSid(Long sid) {
        this.sid = sid;
    }

    public String getSname() {
        return sname;
    }

    public void setSname(String sname) {
        this.sname = sname;
    }

    public String getStudentClass() {
        return studentClass;
    }

    public void setStudentClass(String studentClass) {
        this.studentClass = studentClass;
    }

    public String getDob() {
        return dob;
    }

    public void setDob(String dob) {
        this.dob = dob;
    }

    public Long getPhone() {
        return phone;
    }

    public void setPhone(Long phone) {
        this.phone = phone;
    }

}
