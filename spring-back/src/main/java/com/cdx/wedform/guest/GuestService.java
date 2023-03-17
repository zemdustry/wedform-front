package com.cdx.wedform.guest;

import java.util.List;
import java.util.Optional;

public interface GuestService {
    Guest saveGuest(Guest guest);

    List<Guest> findAll();

    Optional<Guest> findById(Long id);
}
