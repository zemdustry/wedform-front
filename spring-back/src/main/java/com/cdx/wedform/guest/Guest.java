package com.cdx.wedform.guest;

import com.cdx.wedform.person.Person;
import com.cdx.wedform.phone.Phone;
import com.cdx.wedform.child.Child;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

/**
 * Wedding guest
 */
@Entity(name = "Guest")
@Table(schema = "wedapp", name = "guests")
public class Guest implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "guest_id")
    private Long guestId;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "surname", nullable = false)
    private String surname;

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "phone_id", nullable = false)
    private Phone phone;

    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "attend", nullable = false)
    private String attend;

    @Column(name = "people_count", nullable = false)
    private Integer peopleCount;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true, mappedBy = "guest", fetch = FetchType.EAGER)
    @JsonManagedReference
    private Set<Person> persons = new HashSet<>();

    @Column(name = "children_count", nullable = false)
    private Integer childrenCount;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true, mappedBy = "guest",  fetch = FetchType.EAGER)
    private Set<Child> children = new HashSet<>();

    @Column(name = "arrival", nullable = false)
    private String arrival;

    @Column(name = "transportation", nullable = false)
    private String transportation;

    @Column(name = "from_location", nullable = false)
    private String fromLocation;

    @Column(name = "transport_share", nullable = false)
    private Boolean transportShare;

    @Column(name = "event", nullable = false)
    private String event;

    @Column(name = "dietary", nullable = false)
    private Boolean dietary;

    @Column(name = "dietary_detail", nullable = false, columnDefinition = "TEXT")
    private String dietaryDetail;

    @Column(name = "music_style", nullable = false)
    private String musicStyle;

    @Column(name = "brunch", nullable = false)
    private Boolean brunch;

    @Column(name = "comment", nullable = false, columnDefinition = "TEXT")
    private String comment;

    public Long getGuestId() {
        return guestId;
    }

    public void setGuestId(Long guestId) {
        this.guestId = guestId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public Phone getPhone() {
        return phone;
    }

    public void setPhone(Phone phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAttend() {
        return attend;
    }

    public void setAttend(String attend) {
        this.attend = attend;
    }

    public Integer getPeopleCount() {
        return peopleCount;
    }

    public void setPeopleCount(Integer peopleCount) {
        this.peopleCount = peopleCount;
    }

    public Set<Person> getPersons() {
        return persons;
    }

    public void setPersons(Set<Person> persons) {
        this.persons = persons;
    }

    public Integer getChildrenCount() {
        return childrenCount;
    }

    public void setChildrenCount(Integer childrenCount) {
        this.childrenCount = childrenCount;
    }

    public Set<Child> getChildren() {
        return children;
    }

    public void setChildren(Set<Child> children) {
        this.children = children;
    }

    public String getArrival() {
        return arrival;
    }

    public void setArrival(String arrival) {
        this.arrival = arrival;
    }

    public String getTransportation() {
        return transportation;
    }

    public void setTransportation(String transportation) {
        this.transportation = transportation;
    }

    public String getFromLocation() {
        return fromLocation;
    }

    public void setFromLocation(String fromLocation) {
        this.fromLocation = fromLocation;
    }

    public Boolean getTransportShare() {
        return transportShare;
    }

    public void setTransportShare(Boolean transportShare) {
        this.transportShare = transportShare;
    }

    public String getEvent() {
        return event;
    }

    public void setEvent(String event) {
        this.event = event;
    }

    public Boolean getDietary() {
        return dietary;
    }

    public void setDietary(Boolean dietary) {
        this.dietary = dietary;
    }

    public String getDietaryDetail() {
        return dietaryDetail;
    }

    public void setDietaryDetail(String dietaryDetail) {
        this.dietaryDetail = dietaryDetail;
    }

    public String getMusicStyle() {
        return musicStyle;
    }

    public void setMusicStyle(String musicStyle) {
        this.musicStyle = musicStyle;
    }

    public Boolean getBrunch() {
        return brunch;
    }

    public void setBrunch(Boolean brunch) {
        this.brunch = brunch;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }
}
