---
title: "Java Maven"
description: "How to deploy Java-based Maven project?"
position: 34
category: "Learn by example"
---

<description>
How to deploy Java-based Maven project?
</description>

> If you do not have code ready, you can fork the repository being used in this example: [https://github.com/paladium/nativeci-demos](https://github.com/paladium/nativeci-demos)

![Maven](/images/languages/maven.png)

We are going to deploy a simple hello world java api, that will have a single endpoint:
```
/ -> Hello world
```

## Guide
Choose your repo first:

![Choose repo](/images/intro/choose-repo.png)

Next, select JavaGradle deployment:
![Java Maven select](/images/examples/java-maven-choose.png)

To choose a correct Java version, open up the terminal and type:
```
$ java --version
Picked up _JAVA_OPTIONS: -Xmx1024M
openjdk 11.0.9.1 2020-11-04
OpenJDK Runtime Environment AdoptOpenJDK (build 11.0.9.1+1)
OpenJDK 64-Bit Server VM AdoptOpenJDK (build 11.0.9.1+1, mixed mode)
```

Choose major version like ```11``` or ```13```.

On the final screen, enter the following settings:
![Java Maven settings](/images/examples/java-maven-settings.png)

**Build command**:
```bash
#Default build command, will create out folder
mvn package -B

#Run tests first
mvn test package -B
```

**Folder**:
```bash
#For monorepo example
java-maven-helloworld
```

**Port to expose**:
```bash
#Choose port 8080 (default) as ssl is provided automatically
```

**Deploy folder**:
```bash
#Build command deploys into out
target
```

**Run command**:
```bash
#Take project name from pom.xml: project.artifactId-project.version.jar
java -jar helloworld-0.0.1-SNAPSHOT.jar
```

After that you can visit your api and see how easy it was to deploy it:
![Deployed](/images/examples/java-maven-deployed.png)

> Note: if you need to configure which spring profile file to use, set environment variable SPRING_PROFILES_ACTIVE to production/dev/staging - [Set runtime environment variables](/apps/envs)