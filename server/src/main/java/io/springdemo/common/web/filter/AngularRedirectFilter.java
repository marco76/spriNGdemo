package io.springdemo.common.web.filter;

/**
 * This filter is needed to avoid the implementation on the client of the
 * Path location strategy
 * http://stackoverflow.com/questions/35284988/angular-2-404-error-occur-when-i-refresh-through-browser
 *
 * In few words is not possible refresh a page using the url of the route: domain/route
 * The request is sent directly to the server. To solve the issue we can implement a pattern in the client or
 * redirect the 'wrong' requests from the server
 */

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;

@WebFilter(filterName = "AngularRedirectFilter",
        urlPatterns = {"/*"})
public class AngularRedirectFilter implements Filter {

    private static Logger LOGGER = Logger.getLogger(AngularRedirectFilter.class.getName());

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {

    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        LOGGER.log(Level.INFO, "Request from {0}", request.getRemoteAddr());
        chain.doFilter(request, response);
    }

    @Override
    public void destroy() {

    }
}
