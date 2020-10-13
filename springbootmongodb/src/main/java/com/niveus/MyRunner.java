package com.niveus;

import com.niveus.model.Country;
import com.niveus.repository.CountryRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class MyRunner implements CommandLineRunner {

    private static final Logger logger = LoggerFactory.getLogger(MyRunner.class);

    @Autowired
    private CountryRepository repository;

    @Override
    public void run(String... args) throws Exception {

        repository.deleteAll();

        repository.save(new Country("China", 1382050000));
        repository.save(new Country("India", 1313210000));

        repository.findAll().forEach((country) -> {
            logger.info("{}", country);
        });
    }
}