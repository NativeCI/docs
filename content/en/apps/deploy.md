---
title: Deployment
description: 'How to configure deployment settings for project?'
position: 5
category: 'Apps'
---

You can configure deployment settings for your project in "Deploy" tab:
![Deploy](/images/guides/deploy.png)

The following settings can be configured:

### Port to expose
If your application can be accessed over the internet (webapp, api etc.), choose this option and specify which port the application will listen on.

### Deploy folder
If your build produces an output to a folder, specify which folder to use. For example, if your react project gets built into ```dist/``` folder specify it in deploy folder.

For most of the applications, you can leave it as empty, meaning the whole source folder will be published for deployment.

### Run command
Specify how your application should be launched after the build. For instance, ```node index.js``` for NodeJS or ```./main``` for golang.

You can also specify any arguments you want like ```./main server```.

## Deployments
Each build is connected with a deployment. When the commit is made or build is triggered and the build was successful - it leads to a new deployment, meaning your application will be launched with the new version.

### Stop deployment
You can always stop the current deployment, meaning your application will stop accepting requests. 

### Start deployment
When the application is in the state 'Down', you can start it again.

### Restart deployment
When the application is misbehaving or you want to run your application from start, click 'Restart', which will prompt the application to restart.