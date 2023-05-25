package com.enicarthage.stage.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.enicarthage.stage.entity.Courses;

public interface CourseRepository  extends JpaRepository<Courses, Long> {
	
	@Query("SELECT c FROM Courses c WHERE c.nom LIKE %:nom%" ) 
	public List<Courses> findAllByName(@Param("nom") String nom ) ; 
	
}
