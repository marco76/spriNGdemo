package io.springdemo.config;

import com.hazelcast.config.Config;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CacheConfig {

    @Bean
    public Config config() {
        return new Config();
    }
}
