package com.enicarthage.stage.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.enicarthage.stage.entity.Clubs;
import com.enicarthage.stage.entity.Courses;
import com.enicarthage.stage.entity.Etudiant;
import com.enicarthage.stage.entity.Internships;
import com.enicarthage.stage.entity.RespClub;
import com.enicarthage.stage.repository.ClubsRepository;
import com.enicarthage.stage.repository.CourseRepository;
import com.enicarthage.stage.repository.InternshipRepository;
import com.enicarthage.stage.repository.RespClubRepository;
import com.enicarthage.stage.repository.StudentRepository;




@Service
public class AdminService {
	

    private static StudentRepository studentRepository;
    private static RespClubRepository respClubRepository ; 
    private static ClubsRepository clubsRepository ; 
    private static CourseRepository courseRepository ; 
    private static InternshipRepository internshipRepository;
  
    
	
    
       @Autowired
	    public AdminService(StudentRepository studentRepository , RespClubRepository respClubRepository , CourseRepository courseRepository  ,InternshipRepository internshipRepository ,ClubsRepository clubsRepository ) {
	        AdminService.studentRepository = studentRepository;
	        AdminService.respClubRepository= respClubRepository ; 
	        AdminService.courseRepository=courseRepository ; 
	        AdminService.internshipRepository = internshipRepository;
	        AdminService.clubsRepository=clubsRepository ; 
	      
	    }
		

	/**************etudiant**********************/
	
	
	 /*show all students */
	

	 public static List<Etudiant> getAllStudents() {
	        return studentRepository.findAll();
	    }

    /*show student by Id */
	 
	 public Etudiant getStudentById(Long id) {
	        return studentRepository.findById(id).orElse(null);
	    }

	 
	 
	 
	/***save student***/
	 

	    public Etudiant createStudent(Etudiant etudiant) {

	         return studentRepository.save(etudiant);
	       }
	   
	/***edit student***/ 
	 
	    
	    public Etudiant updateStudent(Long id, Etudiant etd) {
	        Etudiant existingStudent = studentRepository.findById(id).orElse(null);
	        if (existingStudent != null) {
	            existingStudent.setFirstName(etd.getFirstName());
	            existingStudent.setLastName(etd.getLastName());
	            existingStudent.setEmail(etd.getEmail());
	            existingStudent.setTel(etd.getTel());
	            existingStudent.setPassword(etd.getPassword());
	            existingStudent.setNiveau(etd.getNiveau());
	            existingStudent.setSpecialite(etd.getSpecialite());
	            return studentRepository.save(existingStudent);
	        }
	        return null;
	    }

	 
	 
   /**delete student***/
	 	 
	    public void deleteStudent(Long id) {
	    	studentRepository.deleteById(id) ; 	    	
	    }
	
	    
	    
	    
 /******************************RespClub**********************************************/

		public List<RespClub> getAllRespClub() {
			
			return respClubRepository.findAll();
		}


	    /*show respclub by Id */
		 
		 public RespClub getRespClubById(Long id) {
		        return respClubRepository.findById(id).orElse(null);
		    }

		 
		 
		 
		/***save  respclub***/
		 

		    public RespClub createRespClub(RespClub respclub) {

		         return respClubRepository.save(respclub);
		       }
		   
		/***edit respclub***/ 
		 
		    
		    public RespClub updateRespClub(Long id, RespClub respclub) {
		    	RespClub existingRespClub = respClubRepository.findById(id).orElse(null);
		        if (existingRespClub != null) {
		            existingRespClub.setFirstName(respclub.getFirstName());
		            existingRespClub.setLastName(respclub.getLastName());
		            existingRespClub.setEmail(respclub.getEmail());
		            existingRespClub.setTel(respclub.getTel());
		            existingRespClub.setPassword(respclub.getPassword());
		            existingRespClub.setDescription(respclub.getDescription());
		            return respClubRepository.save(existingRespClub);
		        }
		        return null;
		    }

		 
	   /**delete respclub***/
		 	 
		    public void deleteRespClub(Long id) {
		    	respClubRepository.deleteById(id) ; 	    	
		    }
		
		
		
	/***************************************clubs*************************************************/
		
		public List<Clubs> getAllClubs() {
			
			return clubsRepository.findAll();
		}
		
	
		 
		 public Clubs getClubById(Long id) {
		        return clubsRepository.findById(id).orElse(null);
		    }


		    public Clubs createClub(Clubs club) {

		         return clubsRepository.save(club);
		       }
		   
	
		 
		    
		    public Clubs updateClub(Long id,Clubs club) {
		    	Clubs existingClub = clubsRepository.findById(id).orElse(null);
		        if (existingClub != null) {
		            existingClub.setNomClub(club.getNomClub());
		            existingClub.setDescription(club.getDescription());
		            return clubsRepository.save(existingClub);
		        }
		        return null;
		    }

		 	 
		    public void deleteClub(Long id) {
		    	clubsRepository.deleteById(id) ; 	    	
		    }
		
		
		
		
   /*******************************************cours***********************************************/
		
		
	public List<Courses> getAllCourses() {
			
			return courseRepository.findAll();
		}
		
	
	public Courses getCoursesById(Long id) {
        return courseRepository.findById(id).orElse(null);
    }

	
	
	public Courses createCourse(Courses course) {
        return courseRepository.save(course);
    }
	
	
	public Courses updateCourse(Long id, Courses course) {
        Courses existingCourse = courseRepository.findById(id).orElse(null);
        if (existingCourse != null) {
            existingCourse.setNom(course.getNom());
            existingCourse.setDescription(course.getDescription());
            existingCourse.setDate_D(course.getDate_D());
            existingCourse.setDate_F(course.getDate_F());
            existingCourse.setType(course.getType());
            return courseRepository.save(existingCourse);
        }
        return null;
    }
	
	
	
	  public void deleteCourse(Long id) {
	        courseRepository.deleteById(id);
	    }
	
		
  /************************************************stages********************************************/
	
	
	   public List<Internships> getAllInternships() {
	          return internshipRepository.findAll() ;
 }

	  

	    public Internships getInternshipById(Long id) {
	        return internshipRepository.findById(id).orElse(null);
	    }
        
	    
	    public Internships createInternship(Internships internship) {
	        return internshipRepository.save(internship);
	    }

	    public Internships  updateInternship(Long id, Internships internship) {
	        Internships existingInternship = internshipRepository.findById(id).orElse(null);
	        if (existingInternship != null) {
	            existingInternship.setNom_societe(internship.getNom_societe());
	            existingInternship.setDescription(internship.getDescription());
	            existingInternship.setTitre(internship.getTitre());
	            existingInternship.setSpecialite(internship.getSpecialite());
	            existingInternship.setCapacite(internship.getCapacite());
	            existingInternship.setMail_societe(internship.getMail_societe());
	            existingInternship.setNum_societe(internship.getNum_societe());
	            existingInternship.setLieu(internship.getLieu());
	            return internshipRepository.save(existingInternship);
	        }
	        return null;
	    }
	    
	    

	    public void deleteInternship(Long id) {
	        internshipRepository.deleteById(id);
	    }

	
	
	
	
	
	
 /**************************************************************************************************/
	
	
    
    
}
