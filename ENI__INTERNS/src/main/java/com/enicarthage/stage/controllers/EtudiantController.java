package com.enicarthage.stage.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.enicarthage.stage.entity.Application;
import com.enicarthage.stage.entity.Courses;
import com.enicarthage.stage.entity.Internships;
import com.enicarthage.stage.service.EtudiantService;

@CrossOrigin( origins = "http://localhost:5173" ) 
@RestController
@RequestMapping("/api/etudiant")

public class EtudiantController {
	
	@Autowired
    private EtudiantService etudiantService;
	
	
	 /*********************workdhop+formation *****************/
	 @GetMapping("/Courses")
	 public ResponseEntity<List<Courses>> getCourses()
	 {
		  List<Courses> courses = etudiantService.getAllCourses();
	        return new ResponseEntity<>(courses, HttpStatus.OK);
		 
		 
	 }
	 
	 
	 @GetMapping("/Courses/{id}")
	    public ResponseEntity<Courses> getCourseById(@PathVariable Long id) {
	        Courses course = etudiantService.getCourseById(id);
	        return new ResponseEntity<>(course, HttpStatus.OK);
	    }
	 
	
	@GetMapping("/Courses/search")
	    public List<Courses> searchCourseByName(@RequestParam("nom") String nom) {
	        return etudiantService.listAll(nom);
	    }
	
	
	 /*******************Internships************************/
	
	  @GetMapping("/Internships")
	  public ResponseEntity<List<Internships>> getInternships()
	   {
		   List<Internships> intern = etudiantService.getAllInternships();
	         return new ResponseEntity<>(intern, HttpStatus.OK);
		 
	 	 
	   }
	 
	  @GetMapping("/Internships/{id}")
	    public ResponseEntity<Internships> getInternshipById(@PathVariable Long id) {
	        Internships interns= etudiantService.getInternshipById(id);
	        return new ResponseEntity<>(interns, HttpStatus.OK);
	    }
	 
	 
	 
	 

		@GetMapping("/Internships/search")
		    public List<Internships> searchInternshipsByspecialite(@RequestParam("specialite") String specialite) {
		        return etudiantService.listAllInternsspecialite(specialite);
		    }
		
		
	 
	 

		@GetMapping("/Internships/searchTitle")
		    public List<Internships> searchInternshipsBytitre(@RequestParam("titre") String titre) {
		        return etudiantService.listAllInternstitre(titre);
		    }
		
	
	 
	 /***********************************************************/
	
	
		 @PostMapping("/Applications")
		   public ResponseEntity<Application> createApplication(@RequestBody Application application) {
		       Application newApplication = etudiantService.createApplication(application);
		       return new ResponseEntity<>(newApplication, HttpStatus.CREATED);
		   }
	
	
	
	
	
	
}
