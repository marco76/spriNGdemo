package io.springdemo.examples.readFile;

import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.util.FileCopyUtils;

import javax.annotation.PostConstruct;


import java.io.*;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.util.Scanner;
import java.util.stream.Collectors;
import java.util.stream.Stream;

/**
 * Created by marcomolteni on 07.04.17.
 */

@Service
public class ReadFileService {

    private final static String JSR_STATUS_FILE = "jsr-status.json";
    private final static String STATUS_URL = "https://s3.eu-central-1.amazonaws.com/io.springdemo/jsr-status.json";

    private String cachedData;

    public String getData() {
        return cachedData;
    }

    private String readUrl() throws IOException {
        URL url = new URL(STATUS_URL);
        Stream<String> lines = new BufferedReader(
                new InputStreamReader(url.openStream(), "UTF-8")).lines();

        return lines.map(Object::toString).collect(Collectors.joining());
    }

    private String readClassPathFile() {
        String result = "";

        ClassPathResource cpr = new ClassPathResource(JSR_STATUS_FILE);
        try {
            byte[] bdata = FileCopyUtils.copyToByteArray(cpr.getInputStream());
            result = new String(bdata, StandardCharsets.UTF_8);
        } catch (IOException e) {

        }
        return result;
    }

        @Scheduled(cron = "0 0 1 * * ?")
    @PostConstruct
    private void loadData() {
        try {
            cachedData = readUrl();
        } catch (IOException e) {
            cachedData = readClassPathFile();
        }
    }
}