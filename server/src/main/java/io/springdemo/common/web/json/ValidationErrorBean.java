package io.springdemo.common.web.json;

/**
 * Created by marcomolteni on 10.04.17.
 */
public class ValidationErrorBean {
    private String propertyPath;
    private String message;
    private String messageTemplate;
    private String rootBean;

    public String getPropertyPath() {
        return propertyPath;
    }

    public void setPropertyPath(String propertyPath) {
        this.propertyPath = propertyPath;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getMessageTemplate() {
        return messageTemplate;
    }

    public void setMessageTemplate(String messageTemplate) {
        this.messageTemplate = messageTemplate;
    }

    public String getRootBean() {
        return rootBean;
    }

    public void setRootBean(String rootBean) {
        this.rootBean = rootBean;
    }
}
