package com.enicarthage.stage.entity;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;



@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name= "Courses")

public class Courses {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	 
    private String nom;
 
    private String description;
    
    
  //  @Enumerated(EnumType.STRING)
   // private CoursesType Type;
 
    private String Type ; 
    private LocalDate Date_D;
 
    private LocalDate Date_F;
    
    

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getType() {
		return Type;
	}

	public void setType(String type) {
		Type = type;
	}

	public LocalDate getDate_D() {
		return Date_D;
	}

	public void setDate_D(LocalDate date_D) {
		Date_D = date_D;
	}

	public LocalDate getDate_F() {
		return Date_F;
	}

	public void setDate_F(LocalDate date_F) {
		Date_F = date_F;
	}
	
	
	
	

}
