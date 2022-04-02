---
title: Build
description: 'How to configure build settings for project?'
position: 4
category: 'Guides'
---

You can configure build settings for your project in "Build" tab:
![Build](/images/guides/build.png)

The following settings can be configured:
- Build command: specify how to build your application. In case of "Go" apps, the following is the default: go build -o main main.go. Each language that you use comes with default build command, you can change it to fit your needs
- Folder: when working with mono-repo (having many apps in the same repo) you can specify which folder to run build it relative to root folder, for example you might have "frontend" and "backend" and each of them will have their own project, one having "frontend" folder and another "backend" folder.