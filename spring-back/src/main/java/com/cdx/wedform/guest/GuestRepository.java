package com.cdx.wedform.guest;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Set;

@Repository
public interface GuestRepository extends CrudRepository<Guest, Long> {
}

