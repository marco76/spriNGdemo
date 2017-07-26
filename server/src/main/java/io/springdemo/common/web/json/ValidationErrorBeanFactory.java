package io.springdemo.common.web.json;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Service;

import javax.json.Json;
import javax.json.JsonArrayBuilder;
import javax.json.JsonObjectBuilder;
import javax.json.bind.Jsonb;
import javax.json.bind.JsonbBuilder;
import javax.validation.ConstraintViolation;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Set;


/**
 * Created by marco on 03.04.17.
 */
@Service
public class ValidationErrorBeanFactory<T> {

    public List<ValidationErrorBean> buildJsonResponse(Set<ConstraintViolation<T>> constraintViolationSet) {
        List<ValidationErrorBean> errorList = new ArrayList<>();
        Iterator violationsIterator = constraintViolationSet.iterator();

        while (violationsIterator.hasNext()) {
            ConstraintViolation<T> violation = (ConstraintViolation) violationsIterator.next();

            ValidationErrorBean validationErrorBean = new ValidationErrorBean();
            validationErrorBean.setMessage(violation.getMessage().toString());
            validationErrorBean.setPropertyPath(violation.getPropertyPath().toString());
            validationErrorBean.setMessageTemplate(violation.getMessageTemplate().toString());
            validationErrorBean.setRootBean(violation.getRootBean().toString());

            errorList.add(validationErrorBean);

        }
        return errorList;
    }
}
