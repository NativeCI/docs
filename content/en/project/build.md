---
title: Build
description: 'How to configure build settings for project?'
position: 4
category: 'Guides'
---

You can configure build settings for your project in "Build" tab:
![Build](/images/guides/build.png)

The following settings can be configured:

### Language
Choose the language/framework and its target framework to build your project without any files (Dockerfile, nginx etc.).

You can also specify custom ```Dockerfile``` for more customizations.

### Build command
Specify how to build your application. In case of "Go" apps, the following is the default: ```go build -o main main.go```. Each language that you use comes with default build command, you can change it to fit your needs

### Folder
When working with mono-repo (having many apps in the same repo) you can specify which folder to run build it relative to root folder, for example you might have "frontend" and "backend" and each of them will have their own project, one having "frontend" folder and another "backend" folder.
### Dependencies to install
Optional list of packages to install needed to compile your application. For example, ***libgtk3-dev***
### Build environment variables
Global tuning settings that can change how your application is built, for example NODE_ENV=production or CGO_ENABLED=0
### Public builds
Specify whether your build logs can be accessible by any logged user (e.g you can share the link for troubleshooting)

## Accessing build logs
All the builds for the project are located in 'Builds' tab:
![Builds](/images/guides/builds.png)

Every time you make a commit to your main branch, a build will be scheduled automatically for you. You can also click ***Trigger build***, any time you want to run a build.

If you click on the latest build, you can access it logs:
![Build logs](/images/guides/build-logs.png)

<alert>
If you are running into issues with build, you can always post your issue at (https://github.com/NativeCI/Issues/issues)[https://github.com/NativeCI/Issues/issues]. You can either upload Raw log or make your build logs public and share the link.
</alert>