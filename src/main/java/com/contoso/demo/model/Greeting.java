package com.contoso.demo.model;

public class Greeting {

    private final String message;
    private final long timestamp;

    public Greeting(String message) {
        this.message = message;
        this.timestamp = System.currentTimeMillis();
    }

    public String getMessage() {
        return message;
    }

    public long getTimestamp() {
        return timestamp;
    }

}
