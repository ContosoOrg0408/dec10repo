# Spring Boot Demo Application

A basic Spring Boot application demonstrating RESTful API development with proper project structure and best practices.

## Project Overview

This is a Maven-based Spring Boot 3.x application that provides a simple REST API with a "Hello World" endpoint. The application demonstrates:
- Proper package structure and organization
- Dependency injection with Spring Framework
- REST controller implementation
- Service layer pattern
- Model/Entity classes

## Prerequisites

- Java 17 or higher
- Maven 3.6 or higher

## Project Structure

```
src/
├── main/
│   ├── java/
│   │   └── com/contoso/demo/
│   │       ├── DemoApplication.java          # Main Spring Boot application class
│   │       ├── controller/
│   │       │   └── GreetingController.java   # REST controller with endpoints
│   │       ├── service/
│   │       │   └── GreetingService.java      # Service layer with business logic
│   │       └── model/
│   │           └── Greeting.java             # Model/Entity class
│   └── resources/
│       └── application.properties            # Application configuration
└── test/
    └── java/
        └── com/contoso/demo/                 # Test classes location
```

## Building the Application

To build the application, run the following command from the project root:

```bash
mvn clean install
```

This will:
- Clean any previous builds
- Compile the source code
- Run tests
- Package the application into a JAR file in the `target/` directory

## Running the Application

There are multiple ways to run the application:

### Option 1: Using Maven Spring Boot Plugin

```bash
mvn spring-boot:run
```

### Option 2: Using the JAR file

First, build the application:
```bash
mvn clean package
```

Then run the generated JAR:
```bash
java -jar target/demo-0.0.1-SNAPSHOT.jar
```

The application will start on `http://localhost:8080`

## Available Endpoints

### GET /api/hello

Returns a greeting message with timestamp.

**URL:** `http://localhost:8080/api/hello`

**Method:** `GET`

**Query Parameters:**
- `name` (optional): Name to include in the greeting

**Example Requests:**

```bash
# Simple hello world
curl http://localhost:8080/api/hello

# Hello with name parameter
curl http://localhost:8080/api/hello?name=John
```

**Example Response:**

```json
{
  "message": "Hello, John!",
  "timestamp": 1702234567890
}
```

## Testing the Application

### Using curl

```bash
curl http://localhost:8080/api/hello
curl http://localhost:8080/api/hello?name=YourName
```

### Using a web browser

Simply navigate to:
- http://localhost:8080/api/hello
- http://localhost:8080/api/hello?name=YourName

### Running Unit Tests

```bash
mvn test
```

## Configuration

The application configuration is located in `src/main/resources/application.properties`:

- **Server Port:** 8080
- **Application Name:** demo
- **Logging Level:** INFO (root), DEBUG (com.contoso.demo)

You can modify these settings in the `application.properties` file.

## Technologies Used

- **Spring Boot 3.2.0**
- **Spring Web** - For building REST APIs
- **Java 17** - Programming language
- **Maven** - Build and dependency management

## Additional Information

### Stopping the Application

Press `Ctrl+C` in the terminal where the application is running.

### Troubleshooting

If port 8080 is already in use, you can change it in `application.properties`:
```properties
server.port=8081
```

## License

ISC

