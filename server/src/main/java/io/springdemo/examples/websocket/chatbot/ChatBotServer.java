package io.springdemo.examples.websocket.chatbot;

import org.springframework.web.bind.annotation.CrossOrigin;

import javax.json.Json;
import javax.json.JsonObject;
import javax.validation.ConstraintViolationException;
import javax.websocket.*;
import javax.websocket.server.ServerEndpoint;
import java.io.IOException;
import java.util.HashSet;
import java.util.Set;
import java.util.logging.Level;
import java.util.logging.Logger;


@ServerEndpoint(value = "/chatbotserver")
@CrossOrigin()
public class ChatBotServer {

    private static final Logger logger = Logger
            .getLogger(ChatBotServer.class.getName());

    private final Set<Session> peers;

    public ChatBotServer() {
        peers = new HashSet<>();
    }

    @OnOpen
    public void onOpen(Session peer) {
        logger.log(Level.INFO, "Opened session: {0}", peer);
        peers.add(peer);
    }

    @OnClose
    public void onClose(Session peer) {
        logger.log(Level.INFO, "Closed session: {0}", peer);
        peers.remove(peer);
    }

    @OnMessage
    public void handleMessage(Session session, String message) throws IOException {
        logger.log(Level.INFO, "Received message {0} from peer {1}",
                new Object[]{message, session});

        for (Session peer : peers) {
            try {
                logger.log(Level.INFO, "Broadcasting message {0} to peer {1}",
                        new Object[]{message, peer});

                peer.getBasicRemote().sendObject(message);
            } catch (IOException | EncodeException ex) {
                logger.log(Level.SEVERE, "Error sending message", ex);
            }
        }

        createAnswer(message, session);
    }

    private void createAnswer(String message, Session session) {
         if (message == null) {
             return;
         }
         String content = message;
         if (content.toUpperCase().contains("HI")) {
             try {
                 ClientMessage clientMessage = new ClientMessage();
                 clientMessage.setMessage("Hi my dear! How are you?");
                 session.getBasicRemote().sendText(clientMessage.encode(clientMessage));
             } catch (IOException e) {
                 e.printStackTrace();
             }
         } else {
             ClientMessage clientMessage = new ClientMessage();
             clientMessage.setMessage("Until now I know only 2 sentences. Try again next week");
             try {
                 session.getBasicRemote().sendText(clientMessage.encode(clientMessage));
             } catch (IOException e) {
                 e.printStackTrace();
             }

         }
    }

    @OnError
    public void onError(Session session, Throwable error) {
        try {
            if (error.getCause() instanceof ConstraintViolationException) {
                JsonObject jsonObject = Json.createObjectBuilder()
                        .add("error",
                                ((ConstraintViolationException) error.getCause())
                                        .getConstraintViolations().iterator().next()
                                        .getMessage())
                        .build();
                session.getBasicRemote().sendText(jsonObject.toString());
            } else {
                logger.log(Level.SEVERE, null, error);
            }
        } catch (IOException ex) {
            logger.log(Level.SEVERE, null, ex);
        }
    }
}
