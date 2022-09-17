---
title: "AngularJS"
description: "How to Build and Deploy AngularJS project?"
position: 31
category: "Learn by example"
---

<description>
How to Build and Deploy AngularJS project?
</description>

![AngularJS](/images/languages/angularjs.png)

We are going to deploy a hello-world application for AngularJS, follow along to find different ways you can customise your AngularJS deployment.

![AngularJS Demo](/images/examples/angular-demo.png)

## Guide
Choose your repo first:
![Choose repo](/images/intro/choose-repo.png)

Next, select Angular deployment:
![Angular select](/images/examples/angular-choose.png)

To choose a correct NodeJS version, open up the terminal and type the command below:
```
$ node --version
v14.0.0
```

Choose the major version output, e.g 16 or 14.

On the final screen, enter the following settings:
![Angular settings](/images/examples/angular-settings.png)

**Build command**:
```bash
#Default build command
npm run build

#Run tests first
npm run test && npm run build
```

**Folder**:
```bash
#For monorepo example
angular-helloworld
```

**Port to expose**:
```bash
#Choose port 80 as ssl is provided automatically
```

**Deploy folder**:
```bash
#Angular deploys into dist/project-name
dist/angular-helloworld
```

**Run command**:
```bash
#Leave empty as nginx will be launched

```

After that you can visit your website and see how easy it was to deploy it:
![Deployed](/images/examples/angular-deployed.png)

The bonus is if you change your code in source control, the build will be automatically triggered and newest version will be deployed. Congratulations, you now have Continuous Build and Deployment.