package com.cdx.wedform.database;

import com.cdx.wedform.child.Child;
import com.cdx.wedform.guest.Guest;
import com.cdx.wedform.guest.GuestRepository;
import com.cdx.wedform.person.Person;
import com.cdx.wedform.phone.Phone;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class LoadDatabase {

    private static final Logger logger = LoggerFactory.getLogger(LoadDatabase.class);

    @Bean
    CommandLineRunner initDatabase(GuestRepository repository) {
        Guest guest = createGuest();
        return args -> {
            logger.info("Preloading " + repository.save(guest));
        };
    }

    private Guest createGuest() {
        Guest guest = new Guest();
        guest.setName("John");
        guest.setSurname("Doe");
        Phone phone = new Phone();
        phone.setNumber("555-555-1234");
        phone.setInternationalNumber("+1 555-555-1234");
        phone.setNationalNumber("(555) 555-1234");
        phone.setCountryCode("US");
        phone.setDialCode("+1");
        guest.setPhone(phone);
        guest.setEmail("john.doe@example.com");
        guest.setAttend("yes");
        guest.setPeopleCount(1);
        Person person = new Person();
        person.setName("Paul");
        person.setSurname("Gibert");
        person.setGuest(guest);
        guest.getPersons().add(person);
        guest.setChildrenCount(1);
        Child child = new Child();
        child.setName("toto");
        child.setAge(8);
        child.setGuest(guest);
        guest.getChildren().add(child);
        guest.setArrival("by car");
        guest.setTransportation("car");
        guest.setFromLocation("New York");
        guest.setTransportShare(true);
        guest.setEvent("wedding");
        guest.setDietary(false);
        guest.setDietaryDetail("");
        guest.setMusicStyle("pop");
        guest.setBrunch(true);
        guest.setComment("Looking forward to the celebration!");
        return guest;
    }
}
