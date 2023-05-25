package com.enicarthage.stage.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.enicarthage.stage.entity.Application;
import com.enicarthage.stage.entity.ApplicationStatus;
import com.enicarthage.stage.entity.Courses;
import com.enicarthage.stage.entity.Internships;
import com.enicarthage.stage.repository.ApplicationRepository;
import com.enicarthage.stage.repository.CourseRepository;
import com.enicarthage.stage.repository.InternshipRepository;


@Service
public class EtudiantService {

	
	
    private static CourseRepository courseRepository;
    private static InternshipRepository internshipRepository;
    private static ApplicationRepository applicationRepository;
    
   /********************courses***********************/   
    @Autowired
    public EtudiantService(CourseRepository courseRepository ,  InternshipRepository internshipRepository ,  ApplicationRepository applicationRepository ) {
        EtudiantService.courseRepository = courseRepository;
        EtudiantService.internshipRepository = internshipRepository;
        EtudiantService.applicationRepository= applicationRepository ; 
    }
	
    
    
	 public static List<Courses> getAllCourses() {
	        return courseRepository.findAll();
	    }

	 public Courses getCourseById(Long id) {
	        return courseRepository.findById(id).orElse(null);
	    }

	 
  public List<Courses> listAll(String nom )
  {
	  if(nom!= null ) {
		  return courseRepository.findAllByName(nom)  ; 
	  }
	  return courseRepository.findAll() ; 
  }
   /********************interns************************/
    public List<Internships> getAllInternships() {
	          return internshipRepository.findAll() ;
    }
	
    public Internships getInternshipById(Long id) {
        return internshipRepository.findById(id).orElse(null);
    }
	
    
	 
 public List<Internships> listAllInternsspecialite(String specialite)
 {
	  if(specialite!= null ) {
		  return internshipRepository.findAllByspecialite(specialite)  ; 
	  }
	  return internshipRepository.findAll() ; 
 }



   public List<Internships> listAllInternstitre(String titre) {
	     if(titre!= null ) {
		      return internshipRepository.findAllBytitre(titre)  ; 
	       }
	        return internshipRepository.findAll() ; 
         }
    /***********application**********************/



    public Application createApplication(Application application) {

        application.setStatus(ApplicationStatus.EN_ATTENTE);
         return applicationRepository.save(application);
       }
   
   
  

   
   
   
   
   
   
   
    
    
}
