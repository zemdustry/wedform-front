package com.cdx.wedform.guest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/guests")
@CrossOrigin(origins = "http://localhost:4200")
public class GuestController {

    final GuestService guestService;

    public GuestController(GuestService guestService) {
        this.guestService = guestService;
    }

    @GetMapping
    List<Guest> findAll() {
        return guestService.findAll();
    }

    @GetMapping("/{id}")
    Guest findById(@PathVariable Long id) {
        return guestService.findById(id)
                .orElseThrow(() -> new NoSuchElementException());
    }

    @PostMapping
    Guest createGuest(@RequestBody Guest newGuest) {
        return guestService.saveGuest(newGuest);
    }
}
