---
title: "ReactJs"
description: "How to Build and Deploy ReactJs project?"
position: 39
category: "Learn by example"
---

<description>
How to Build and Deploy ReactJs project?
</description>

> If you do not have code ready, you can fork the repository being used in this example: [https://github.com/paladium/nativeci-demos](https://github.com/paladium/nativeci-demos)

![ReactJs](/images/languages/reactjs.png)

We are going to deploy a hello-world application for ReactJs, follow along to find different ways you can customise your ReactJs deployment.

![ReactJs Demo](/images/examples/react-demo.png)

## Guide
Choose your repo first:
![Choose repo](/images/intro/choose-repo.png)

Next, select react deployment:
![react select](/images/examples/react-choose.png)

To choose a correct NodeJS version, open up the terminal and type the command below:
```
$ node --version
v14.0.0
```

Choose the major version output, e.g 16 or 14.

On the final screen, enter the following settings:
![react settings](/images/examples/react-settings.png)

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
react-helloworld
```

**Port to expose**:
```bash
#Choose port 80 as ssl is provided automatically
```

**Deploy folder**:
```bash
#React deploys into build folder
build
```

**Run command**:
```bash
#Leave empty as nginx will be launched

```

After that you can visit your website and see how easy it was to deploy it:
![Deployed](/images/examples/react-deployed.png)

The bonus is if you change your code in source control, the build will be automatically triggered and newest version will be deployed. Congratulations, you now have Continuous Build and Deployment.