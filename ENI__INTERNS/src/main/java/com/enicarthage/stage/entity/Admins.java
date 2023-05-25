   package com.enicarthage.stage.entity;
	import jakarta.persistence.Entity;
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
	@Table(name= "Admins")

	public class Admins {
		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		    private Long id;
		    private String firstName;
		    private String lastName;
		    private String email;
		    private String password;
		    private int tel;
			
			public void setId(Long id) {
				this.id = id;
			}
			public String getFirstName() {
				return firstName;
			}
			public void setFirstName(String firstName) {
				this.firstName = firstName;
			}
			public String getLastName() {
				return lastName;
			}
			public void setLastName(String lastName) {
				this.lastName = lastName;
			}
			public String getEmail() {
				return email;
			}
			public void setEmail(String email) {
				this.email = email;
			}
			public String getPassword() {
				return password;
			}
			public void setPassword(String password) {
				this.password = password;
			}
			public int getTel() {
				return tel;
			}
			public void setTel(int tel) {
				this.tel = tel;
			}
		   
	}



