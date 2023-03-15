package com.cdx.wedform.phone;

import jakarta.persistence.*;

import java.io.Serializable;

@Entity(name = "Phone")
@Table(schema = "wedapp", name = "phones")
public class Phone implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "phone_id")
    private Long id;

    @Column(name = "number", nullable = false)
    private String number;

    @Column(name = "international_number", nullable = false)
    private String internationalNumber;

    @Column(name = "national_number", nullable = false)
    private String nationalNumber;

    @Column(name = "country_code", nullable = false)
    private String countryCode;

    @Column(name = "dial_code", nullable = false)
    private String dialCode;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public String getInternationalNumber() {
        return internationalNumber;
    }

    public void setInternationalNumber(String internationalNumber) {
        this.internationalNumber = internationalNumber;
    }

    public String getNationalNumber() {
        return nationalNumber;
    }

    public void setNationalNumber(String nationalNumber) {
        this.nationalNumber = nationalNumber;
    }

    public String getCountryCode() {
        return countryCode;
    }

    public void setCountryCode(String countryCode) {
        this.countryCode = countryCode;
    }

    public String getDialCode() {
        return dialCode;
    }

    public void setDialCode(String dialCode) {
        this.dialCode = dialCode;
    }
}
