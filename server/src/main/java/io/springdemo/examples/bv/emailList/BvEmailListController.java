package io.springdemo.examples.bv.emailList;

import io.springdemo.common.web.json.JsonResponseFactory;
import io.springdemo.common.web.json.ValidationErrorBeanFactory;
import io.springdemo.common.web.response.ResponseFactory;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.inject.Inject;
import javax.validation.ConstraintViolation;
import javax.validation.Validator;
import java.util.List;
import java.util.Set;

@RestController()
@CrossOrigin()
public class BvEmailListController {

    @Inject
    Validator validator;
    @Inject
    ValidationErrorBeanFactory validationErrorBeanFactory;
    @Inject
    ResponseFactory<Addresses> addressesResponseFactory;

    public BvEmailListController() {

    }

    @RequestMapping(value = "rest/bv/email/list", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity user(@RequestBody List<String> emailListDTO) {

        // TODO : tried to validate directly the collection <List <@Email String>> but no constraint, added to class
        Addresses addresses = new Addresses();

        for (String email : emailListDTO) {
            addresses.addEmail(email);
        }

        Set<ConstraintViolation<Addresses>> constraintViolationSet;
            constraintViolationSet = validator.validate(addresses);

        return addressesResponseFactory.buildResponse(constraintViolationSet);
    }
}
