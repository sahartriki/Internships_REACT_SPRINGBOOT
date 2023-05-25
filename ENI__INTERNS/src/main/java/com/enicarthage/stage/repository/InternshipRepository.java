package com.enicarthage.stage.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import com.enicarthage.stage.entity.Internships;

public interface InternshipRepository extends JpaRepository<Internships, Long> {
	
	@Query("SELECT i FROM Internships i WHERE i.specialite LIKE %:specialite%" ) 
	public List<Internships> findAllByspecialite(@Param("specialite") String specialite ) ;


	@Query("SELECT i FROM Internships i WHERE i.titre LIKE %:titre%" ) 
	public List<Internships> findAllBytitre(@Param("titre") String titre); 
	
	

}
