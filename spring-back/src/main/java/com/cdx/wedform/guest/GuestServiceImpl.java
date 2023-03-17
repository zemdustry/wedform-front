package com.cdx.wedform.guest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class GuestServiceImpl implements  GuestService {

    @Autowired
    private GuestRepository guestRepository;

    @Override
    public Guest saveGuest(Guest guest) {
        return guestRepository.save(guest);
    }

    @Override
    public List<Guest> findAll() {
        List<Guest> guests = new ArrayList<>();
        guestRepository.findAll().forEach(guests::add);
        return guests;
    }

    @Override
    public Optional<Guest> findById(Long id) {
        return guestRepository.findById(id);
    }
}
