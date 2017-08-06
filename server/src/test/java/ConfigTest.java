import io.springdemo.config.CorsConfig;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Import;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@RunWith(SpringRunner.class)
@Import(CorsConfig.class)

@TestPropertySource(locations = "classpath:test.properties")
public class ConfigTest {


    @Autowired
   CorsConfig corsConfig;

    @Test
    public void testCorsConfig() {
        Assert.assertTrue(true);
        Assert.assertNotNull(corsConfig);
        Assert.assertTrue(corsConfig.corsConfigurer() instanceof WebMvcConfigurer);

    }
}
