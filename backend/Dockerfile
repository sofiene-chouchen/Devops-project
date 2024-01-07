FROM maven:3.6.3-openjdk-17-slim AS build
WORKDIR /app
COPY . .
RUN mvn package -DiskipTests

FROM openjdk:17-jdk-alpine
WORKDIR /app
COPY --from=build /app/target/*.jar /app/app.jar
EXPOSE 8081
CMD ["java" , "-jar" , "app.jar"]