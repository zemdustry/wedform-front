package com.cdx.wedform;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories("com.cdx.wedform.guest")
public class WedformApplication {


	public static void main(String[] args) {
		SpringApplication.run(WedformApplication.class, args);

	}

}
