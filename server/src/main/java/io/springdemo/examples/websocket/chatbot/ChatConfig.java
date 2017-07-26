package io.springdemo.examples.websocket.chatbot;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.context.ServletContextAware;
import org.springframework.web.socket.server.standard.ServerEndpointExporter;

import javax.servlet.ServletContext;
import javax.websocket.server.ServerEndpointConfig;

/**
 * Created by marcomolteni on 18.04.17.
 */

@Configuration
public class ChatConfig{

    @Bean
    public ChatBotServer echoEndpoint() {
        return new ChatBotServer();
    }

    @Bean
    public ServerEndpointExporter endpointExporter() {
        return new ServerEndpointExporter();
    }
}
