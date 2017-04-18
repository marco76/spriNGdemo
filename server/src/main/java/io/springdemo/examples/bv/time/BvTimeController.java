package io.springdemo.examples.bv.time;

import io.springdemo.common.web.json.JsonResponseFactory;
import io.springdemo.common.web.json.ValidationErrorBeanFactory;
import io.springdemo.common.web.response.ResponseFactory;
import io.springdemo.examples.bv.simple.Participant;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.inject.Inject;
import javax.json.JsonArrayBuilder;
import javax.validation.ConstraintViolation;
import javax.validation.Valid;
import javax.validation.Validator;
import java.time.LocalDate;
import java.time.Year;
import java.time.format.DateTimeFormatter;
import java.util.Locale;
import java.util.Set;

@RestController()
@CrossOrigin()
public class BvTimeController {

    @Inject
    Validator validator;
    @Inject
    ValidationErrorBeanFactory validationErrorBeanFactory;
    @Inject
    ResponseFactory<Patient> responseFactory;

    public BvTimeController() {

    }

    @RequestMapping(value = "/rest/bv/time/patient")
    public ResponseEntity user(@Valid @RequestBody SimplePatientDTO simplePatientDTO) {

        Patient patient = new Patient();
        patient.setName(simplePatientDTO.getName());

        patient.setNextAppointment(convertDate(simplePatientDTO.getNextAppointment()));
        patient.setYearOfBirth(Year.of(simplePatientDTO.getYearOfBirth()));

        Set<ConstraintViolation<Patient>> constraintViolationSet;
        constraintViolationSet = validator.validate(patient);

        return responseFactory.buildResponse(constraintViolationSet);
    }

    private LocalDate convertDate(String dateAsString) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        formatter = formatter.withLocale( Locale.US );
        LocalDate date = LocalDate.parse(dateAsString, formatter);
        return date;
    }
}
