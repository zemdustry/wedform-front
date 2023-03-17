package com.cdx.wedform.guest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
public class GuestController {

    @Autowired
    GuestService guestService;

    @GetMapping("/guests")
    List<Guest> findAll() {
        return guestService.findAll();
    }

    @GetMapping("/guests/{id}")
    Guest findById(@PathVariable Long id) {
        return guestService.findById(id)
                .orElseThrow(() -> new NoSuchElementException());
    }

//    @PostMapping("/guests")
//    List<Guest> createGuest(@RequestBody Guest newGuest) {
//        return guestService.saveGuest(newGuest);
//    }
}
