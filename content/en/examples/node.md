---
title: "NodeJs"
description: "How to Build and Deploy NodeJs project?"
position: 37
category: "Learn by example"
---

<description>
How to Build and Deploy NodeJs project?
</description>

> If you do not have code ready, you can fork the repository being used in this example: [https://github.com/paladium/nativeci-demos](https://github.com/paladium/nativeci-demos)

![NodeJs](/images/languages/nodejs.png)

We are going to deploy a hello-world express application for NodeJs, follow along to find different ways you can customise your NodeJs deployment.

## Guide
Choose your repo first:
![Choose repo](/images/intro/choose-repo.png)

Next, select NodeJs deployment:
![NodeJs select](/images/examples/nodejs-choose.png)

To choose a correct NodeJS version, open up the terminal and type the command below:
```
$ node --version
v14.0.0
```

Choose the major version output, e.g 16 or 14.

On the final screen, enter the following settings:
![NodeJs settings](/images/examples/nodejs-settings.png)

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
nodejs-helloworld
```

**Port to expose**:
```bash
#Choose port 3000 as ssl is provided automatically
```

**Deploy folder**:
```bash
#Keep empty by default
```

**Run command**:
```bash
#Default launch command
npm run start
#If no script provided, run main file
node app.js
```

After that you can visit your website and see how easy it was to deploy it:
![Deployed](/images/examples/nodejs-deployed.png)

The bonus is if you change your code in source control, the build will be automatically triggered and newest version will be deployed. Congratulations, you now have Continuous Build and Deployment.