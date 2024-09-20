package com.example.demo.controller;

// to handle incoming request

import com.example.demo.entity.Studentdetails;
import com.example.demo.repository.StudentdetailsRepository;    // repository interface that we created.
import org.springframework.beans.factory.annotation.Autowired;  // used o create  @Autowired for the repository
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/students")   // springframework.web.bind.annotation.*  is used here
public class StudentdetailsController {
	
	   @Autowired    
	    private StudentdetailsRepository studentDetailsRepository;
	
	   @PostMapping
	    public ResponseEntity<Studentdetails> createStudent(@RequestBody Studentdetails studentDetails) {
	        Studentdetails savedStudent = studentDetailsRepository.save(studentDetails);
	        return ResponseEntity.ok(savedStudent);
	    }
	   
	   
}
