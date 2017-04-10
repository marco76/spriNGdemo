package io.springdemo.examples.bv.simple;

import io.springdemo.common.web.json.ValidationErrorBeanFactory;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.inject.Inject;
import javax.validation.*;
import java.util.Iterator;
import java.util.Set;

/**
 *
 * 3.1 Resource Classes
 * A resource class is a Java class that uses JAX-RS annotations to implement a corresponding Web resource.
 * Resource classes are POJOs that have at least one method annotated with @Path or a request method desig- nator.
 */
@RestController()
@CrossOrigin()
public class BvController {

    @Inject
    ValidationErrorBeanFactory validationErrorBeanFactory;

    public BvController() {

    }

    @RequestMapping(value = "/rest/bv/participant", method = RequestMethod.POST,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity validateParticipant(Participant participant) {

        ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
        Validator validator = factory.getValidator();

        Set<ConstraintViolation<Participant>> constraintViolationSet = validator.validate(participant);

        return ResponseEntity.ok(validationErrorBeanFactory.buildJsonResponse(constraintViolationSet));

    }
}
