---
title: "Java Gradle"
description: "How to deploy Java-based Gradle project?"
position: 33
category: "Learn by example"
---

<description>
How to deploy Java-based Gradle project?
</description>

> If you do not have code ready, you can fork the repository being used in this example: [https://github.com/paladium/nativeci-demos](https://github.com/paladium/nativeci-demos)

![Gradle](/images/languages/gradle.png)

We are going to deploy a simple hello world java api, that will have a single endpoint:
```
/ -> Hello world
```

## Guide
Choose your repo first:

![Choose repo](/images/intro/choose-repo.png)

Next, select JavaGradle deployment:
![Java Gradle select](/images/examples/java-gradle-choose.png)

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
![Java Gradle settings](/images/examples/java-gradle-settings.png)

**Build command**:
```bash
#Default build command, will create out folder
gradle build --no-daemon

#Run tests first
gradle buildAndTest --no-daemon
```

**Folder**:
```bash
#For monorepo example
java-gradle-helloworld
```

**Port to expose**:
```bash
#Choose port 8080 (default) as ssl is provided automatically
```

**Deploy folder**:
```bash
#Build command deploys into out
build/libs
```

**Run command**:
```bash
#Take project name from settings.gradle: rootProject.name-version.jar
java -jar java-gradle-helloworld-0.0.1-SNAPSHOT.jar
```

After that you can visit your api and see how easy it was to deploy it:
![Deployed](/images/examples/java-gradle-deployed.png)

> Note: if you need to configure which spring profile file to use, set environment variable SPRING_PROFILES_ACTIVE to production/dev/staging - [Set runtime environment variables](/apps/envs)