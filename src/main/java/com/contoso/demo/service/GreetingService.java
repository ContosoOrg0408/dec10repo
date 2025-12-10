package com.contoso.demo.service;

import com.contoso.demo.model.Greeting;
import org.springframework.stereotype.Service;

@Service
public class GreetingService {

    public Greeting createGreeting(String name) {
        String message = name != null && !name.isEmpty() 
            ? "Hello, " + name + "!" 
            : "Hello, World!";
        return new Greeting(message);
    }

}
