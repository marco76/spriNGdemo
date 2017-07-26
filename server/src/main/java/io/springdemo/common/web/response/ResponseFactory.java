package io.springdemo.common.web.response;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import javax.json.JsonArrayBuilder;
import javax.validation.ConstraintViolation;
import java.util.Set;

/**
 * Created by marcomolteni on 16.04.17.
 */
@Service
public class ResponseFactory<T> {

    public ResponseEntity buildResponse(Set<ConstraintViolation<T>> constraintViolationSet) {

        if (constraintViolationSet.isEmpty()) {
            return ResponseEntity.ok().build();
        } else {
            JsonArrayBuilder errorList = new BVJsonResponseFactory<T>().buildJsonResponse(constraintViolationSet);

            return ResponseEntity.badRequest().body(errorList.build());
        }
    }
}
