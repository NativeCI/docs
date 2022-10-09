---
title: "Go"
description: "How Build and Deploy Golang project?"
position: 30
category: "Learn by example"
---

<description>
How Build and Deploy Golang project?
</description>

> If you do not have code ready, you can fork the repository being used in this example: [https://github.com/paladium/nativeci-demos](https://github.com/paladium/nativeci-demos)

![Golang](/images/languages/go.png)

## Guide

First you would need to choose one of golang projects available, if you do not have one, you can navigate to this example to deploy a project [Create project](/create-project) example.

At the last page, let's explore all the options available and common deployment commands you can use.

![Golang example](/images/examples/go-settings.png)

Build command examples:
```bash
#Will build main file and name the binary main
go build -o main main.go

#Reduce binary size by stripping runtime information
go build -ldflags="-s -w" -o main main.go

#Build into deployment folder
go build -o deployment/main main.go
```

Folder examples:
```bash
#Leave empty for repos with only one project

#For multiple projects in repo can choose the folder to build
backend
api
```

Web service/port to expose examples:
```bash
#Any integer number
8080
8000
3000
```

Deploy folder examples:
```bash
#If deployment folder used
deployment
```

Run command examples:
```bash
#Can provide config path:
./main config.yaml

#Can provide port
./main --port=8080
```

> Using these settings, you can deploy most of the golang based applications. However if you need more customisations, you can always choose ```Dockerfile``` language. Here is the starter template for golang-based projects:
```dockerfile
FROM golang:1.18-buster AS build

WORKDIR /app

COPY go.mod ./
COPY go.sum ./
RUN go mod download

COPY *.go ./

RUN go build -o /main

## Deploy
FROM gcr.io/distroless/base-debian10

WORKDIR /

COPY --from=build /main /main

EXPOSE 8080

USER nonroot:nonroot

ENTRYPOINT ["/main"]
```