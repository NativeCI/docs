---
title: Creating project
description: 'How to deploy a demo project on NativeCI?'
position: 3
category: 'Getting started'
---

We are now ready to deploy a demo project, which is going to return us latest news from HackerNews:
![Hackernews demo](/images/intro/hackernews.png)

Fork the repository [https://github.com/paladium/nativeci-demos](https://github.com/paladium/nativeci-demos)

Next navigate to https://console.nativeci.io/add-project and choose your newly created repository and click "Next":
![Choose repo](/images/intro/choose-repo.png)

Next choose "Go 1.14" as version and click "Next":
![Language](/images/intro/language.png)

Choose the plan for the application, for now we will choose "Basic":
![Basic](/images/intro/size.png)

On the final page, change the "Folder" to "go-fullstack" and leave the rest of the settings as default:
![Deployment](/images/intro/deployment.png)

Click on "Create" and navigate to your newly created project.

Click on "Builds" to view as the project is being built:
![Builds](/images/intro/builds.png)

And the log for the build:
![Build](/images/intro/build.png)

After that navigate to "Application" tab, you should see how your application is deployed. Click on "View app" to see your application:
![View app](/images/intro/view-app.png)

<alert>
You should now be able to view your application. Try to change something in your Github repository and view how a new build will be triggered.
</alert>