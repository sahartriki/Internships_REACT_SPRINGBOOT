package com.enicarthage.stage.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.enicarthage.stage.entity.Application;

public interface ApplicationRepository extends JpaRepository<Application, Long>{

}
