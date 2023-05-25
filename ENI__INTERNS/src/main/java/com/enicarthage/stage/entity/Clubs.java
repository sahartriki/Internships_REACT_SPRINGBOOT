package com.enicarthage.stage.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter 
@Setter 
@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name= "Clubs")



public class Clubs {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;
		private String NomClub;	  
	    private String description ; 
	    private String logoImage; 
	
	
	
	    
	    public Long getId() {
			return id;
		}




		public void setId(Long id) {
			this.id = id;
		}




		public String getNomClub() {
			return NomClub;
		}




		public void setNomClub(String nomClub) {
			NomClub = nomClub;
		}




		public String getDescription() {
			return description;
		}




		public void setDescription(String description) {
			this.description = description;
		}




		public RespClub getRespClub() {
			return respClub;
		}




		public void setRespClub(RespClub respClub) {
			this.respClub = respClub;
		}
		
	   public String getLogoImage() {
			return logoImage;
		}




		public void setLogoImage(String logoImage) {
			this.logoImage = logoImage;
		}

	@ManyToOne
	    @JoinColumn(name = "resp_club_id")
	    private RespClub respClub;
	    

}
