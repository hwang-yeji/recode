package com.example.recode.repository;

import com.example.recode.domain.Key;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface KeyRepository extends JpaRepository<Key, Long> {

    Optional<Key> findByKeyName(String keyName);
}
