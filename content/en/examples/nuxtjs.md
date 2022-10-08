---
title: "NuxtJs"
description: "How to Build and Deploy NuxtJs project?"
position: 36
category: "Learn by example"
---

<description>
How to Build and Deploy NuxtJs project?
</description>

![NuxtJs](/images/languages/nuxtjs.png)

We are going to deploy a hello-world application for NuxtJs, follow along to find different ways you can customise your NuxtJs deployment.

## Guide
Choose your repo first:
![Choose repo](/images/intro/choose-repo.png)

Next, select NuxtJs deployment:
![NuxtJs select](/images/examples/nuxtjs-choose.png)

To choose a correct NodeJS version, open up the terminal and type the command below:
```
$ node --version
v14.0.0
```

Choose the major version output, e.g 16 or 14.

On the final screen, enter the following settings:
![NuxtJs settings](/images/examples/NuxtJs-settings.png)

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
nuxtjs-helloworld
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
nuxt-start
```

After that you can visit your website and see how easy it was to deploy it:
![Deployed](/images/examples/nuxtjs-deployed.png)

The bonus is if you change your code in source control, the build will be automatically triggered and newest version will be deployed. Congratulations, you now have Continuous Build and Deployment.