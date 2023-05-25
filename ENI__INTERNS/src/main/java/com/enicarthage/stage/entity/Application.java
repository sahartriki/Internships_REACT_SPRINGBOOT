package com.enicarthage.stage.entity;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name= "Application")

public class Application {

	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	
	@Enumerated(EnumType.STRING)
    private ApplicationStatus status;
	
	
	@ManyToOne(cascade = CascadeType.PERSIST)
	@JoinColumn(name = "course_id")
	private Courses course;
     
     @ManyToOne(cascade = CascadeType.PERSIST)
     @JoinColumn(name = "etudiant_id")
     private Etudiant etudiant;
     
     @ManyToOne(cascade = CascadeType.PERSIST)
     @JoinColumn(name = "RespClub_id")
     private RespClub respclub;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public ApplicationStatus getStatus() {
		return status;
	}
	

	public void setStatus(ApplicationStatus status) {
		this.status = status;
	}

	public Courses getCourse() {
		return course;
	}

	public void setCourse(Courses course) {
		this.course = course;
	}

	public Etudiant getEtudiant() {
		return etudiant;
	}

	public void setEtudiant(Etudiant etudiant) {
		this.etudiant = etudiant;
	}

	public RespClub getRespclub() {
		return respclub;
	}

	public void setRespclub(RespClub respclub) {
		this.respclub = respclub;
	}
     
     
     
     
	    
	
}

