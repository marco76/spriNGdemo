package io.springdemo.examples.bv.repeatable;

import io.springdemo.common.web.json.JsonResponseFactory;
import io.springdemo.common.web.json.ValidationErrorBeanFactory;
import io.springdemo.common.web.response.ResponseFactory;
import io.springdemo.examples.bv.emailList.Addresses;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.inject.Inject;
import javax.json.JsonArrayBuilder;
import javax.validation.ConstraintViolation;
import javax.validation.Valid;
import javax.validation.Validator;
import java.util.Set;


@RestController()
@CrossOrigin()
public class BvRepeatableController {

    @Inject
    Validator validator;
    @Inject
    ValidationErrorBeanFactory validationErrorBeanFactory;
    @Inject
    ResponseFactory<User> responseFactory;

    public BvRepeatableController() {

    }

    @RequestMapping(value = "rest/bv/repeatable/user", method = RequestMethod.POST)
    public ResponseEntity user(@Valid SimpleUserDTO simpleUserDTO) {

        User user = new User();
        user.setPassword(simpleUserDTO.getPassword());

        Set<ConstraintViolation<User>> constraintViolationSet;

        if (simpleUserDTO.getType().equalsIgnoreCase("admin")) {
            constraintViolationSet = validator.validate(user, Admin.class);
        } else {
            constraintViolationSet = validator.validate(user);
        }

        return responseFactory.buildResponse(constraintViolationSet);
    }
}
