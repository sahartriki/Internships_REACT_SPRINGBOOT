package com.enicarthage.stage.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.enicarthage.stage.entity.Etudiant;

public interface StudentRepository  extends JpaRepository<Etudiant, Long>{

}
