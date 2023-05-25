package com.enicarthage.stage.controllers;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.enicarthage.stage.entity.Clubs;
import com.enicarthage.stage.entity.Courses;
import com.enicarthage.stage.entity.Etudiant;
import com.enicarthage.stage.entity.Internships;
import com.enicarthage.stage.entity.RespClub;
import com.enicarthage.stage.service.AdminService;


@CrossOrigin( origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/Admin")
public class AdminController {
	
	
	
	@Autowired
    private AdminService adminService;
	
	
	/**************etudiant**********************/
	
	
	 @GetMapping("/Etudiants")
	 public ResponseEntity<List<Etudiant>> getStudent()
	 {
		  List<Etudiant> etd = adminService.getAllStudents();
	        return new ResponseEntity<>(etd, HttpStatus.OK);
		 
	 }


	 
	 @GetMapping("/Etudiant/{id}")
	    public ResponseEntity<Etudiant> getCourseById(@PathVariable Long id) {
	        Etudiant etd = adminService.getStudentById(id);
	        return new ResponseEntity<>(etd, HttpStatus.OK);
	    }

	 
	 @PostMapping("/Add_Student")
	   public ResponseEntity<Etudiant> createStudent(@RequestBody Etudiant etudiant) {
	         Etudiant newStudent= adminService.createStudent(etudiant);
	       return new ResponseEntity<>(newStudent, HttpStatus.CREATED);
	   }
	 

	 
	   @PutMapping("/edit_Student/{id}")
	    public ResponseEntity<Etudiant> updateStudent(@PathVariable Long id, @RequestBody Etudiant etd) {
	        Etudiant updatedStudent = adminService.updateStudent(id, etd);
	        return new ResponseEntity<>(updatedStudent, HttpStatus.OK);
	    }
	 

	 
	   @DeleteMapping("/deleteStudent/{id}")
	    public ResponseEntity<Void> deleteEtudiant(@PathVariable Long id) {
	        adminService.deleteStudent(id);
	        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	    }

	 
	
	/**************************************Resp club*************************************************/
	 
	 
	 @GetMapping("/RespClubs")
	 public ResponseEntity<List<RespClub>> getRespClub()
	 {
		  List<RespClub> resp = adminService.getAllRespClub();
	        return new ResponseEntity<>(resp, HttpStatus.OK);
		 
	 }
	
	 
	 
	 
	 
	 
	 @GetMapping("/RespClub/{id}")
	    public ResponseEntity<RespClub> getRespClubById(@PathVariable Long id) {
		    RespClub respclub = adminService.getRespClubById(id);
	        return new ResponseEntity<>(respclub, HttpStatus.OK);
	    }
	 
	 
	 

	 
	 @PostMapping("/Add_RespClub")
	   public ResponseEntity<RespClub> createRespClub(@RequestBody RespClub respclub) {
		 RespClub newRespClub= adminService.createRespClub(respclub) ; 
	       return new ResponseEntity<>(newRespClub, HttpStatus.CREATED);
	   }
	 
	 

	 
	   @PutMapping("/edit_RespClub/{id}")
	    public ResponseEntity<RespClub> updateRespClub(@PathVariable Long id, @RequestBody RespClub respclub) {
		   RespClub updatedRespClub= adminService.updateRespClub(id, respclub);
	        return new ResponseEntity<>(updatedRespClub, HttpStatus.OK);
	    }
	 

	 
	 
	 
	   @DeleteMapping("/deleteRespClub/{id}")
	    public ResponseEntity<Void> deleteRespClub(@PathVariable Long id) {
	        adminService.deleteRespClub(id);
	        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	    }

	 
	
	/**********************clubs**************************/
	 
	 
	 @GetMapping("/Clubs")
	 public ResponseEntity<List<Clubs>> getClubs()
	 {
		  List<Clubs> club = adminService.getAllClubs();
	        return new ResponseEntity<>(club, HttpStatus.OK);
		 
	 }
	 

	 
	 @GetMapping("/Club/{id}")
	    public ResponseEntity<Clubs> getClubById(@PathVariable Long id) {
		    Clubs club = adminService.getClubById(id);
	        return new ResponseEntity<>(club, HttpStatus.OK);
	    }
	 
	 

	 
	 @PostMapping("/Add_Club")
	   public ResponseEntity<Clubs> createClub(@RequestBody Clubs club) {
		 Clubs newClub= adminService.createClub(club) ; 
	       return new ResponseEntity<>(newClub, HttpStatus.CREATED);
	   }

	   @PutMapping("/edit_Club/{id}")
	    public ResponseEntity<Clubs> updateClub(@PathVariable Long id, @RequestBody Clubs club) {
		   Clubs updatedClub= adminService.updateClub(id, club);
	        return new ResponseEntity<>(updatedClub, HttpStatus.OK);
	    }

	 
	   @DeleteMapping("/deleteClub/{id}")
	    public ResponseEntity<Void> deleteClub(@PathVariable Long id) {
	        adminService.deleteClub(id);
	        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	    }

	 
	 
	 
	 
	 /***************************cours******************************/
	 
	 @GetMapping("/courses")
	 public ResponseEntity<List<Courses>> getCourses()
	 {
		  List<Courses> courses = adminService.getAllCourses();
	        return new ResponseEntity<>(courses, HttpStatus.OK);
		 
	        
	 }
	 
	 @GetMapping("/Courses/{id}")
	    public ResponseEntity<Courses> getCoursesById(@PathVariable Long id) {
		   Courses courses = adminService.getCoursesById(id);
	        return new ResponseEntity<>(courses, HttpStatus.OK);
	    }
	 
	 
	   @PostMapping("/add_courses")
	    public ResponseEntity<Courses> createCourse(@RequestBody Courses course) {
	        Courses newCourse = adminService.createCourse(course);
	        return new ResponseEntity<>(newCourse, HttpStatus.CREATED);
	    }

	    @PutMapping("/Edit_course/{id}")
	    public ResponseEntity<Courses> updateCourse(@PathVariable Long id, @RequestBody Courses course) {
	        Courses updatedCourse = adminService.updateCourse(id, course);
	        return new ResponseEntity<>(updatedCourse, HttpStatus.OK);
	    }

	    @DeleteMapping("/delete_course/{id}")
	    public ResponseEntity<Void> deleteCourse(@PathVariable Long id) {
	        adminService.deleteCourse(id);
	        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	    }

	 
	 
	 
	 

	 /*****************************stages****************************/
	 

	  @GetMapping("/Internships")
	  public ResponseEntity<List<Internships>> getInternships()
	   {
		   List<Internships> intern = adminService.getAllInternships();
	         return new ResponseEntity<>(intern, HttpStatus.OK);
		 
	 	 
	   }
	  
	  
	  @GetMapping("/Internships/{id}")
	    public ResponseEntity<Internships> getInternshipById(@PathVariable Long id) {
	        Internships interns= adminService.getInternshipById(id);
	        return new ResponseEntity<>(interns, HttpStatus.OK);
	    }
	 
	  @PostMapping("/Add_internships")
	    public ResponseEntity<Internships> createInternship(@RequestBody Internships internship) {
	        Internships newInternship = adminService.createInternship(internship);
	        return new ResponseEntity<>(newInternship, HttpStatus.CREATED);
	    }

	    @PutMapping("/edit_internships/{id}")
	    public ResponseEntity<Internships> updateInternship(@PathVariable Long id, @RequestBody Internships internship) {
	        Internships updatedInternship = adminService.updateInternship(id, internship);
	        return new ResponseEntity<>(updatedInternship, HttpStatus.OK);
	    }
	    
	    

	    @DeleteMapping("/delete_internships/{id}")
	    public ResponseEntity<Void> deleteInternship(@PathVariable Long id) {
	        adminService.deleteInternship(id);
	        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	    }

	 
	 
	
	

}
