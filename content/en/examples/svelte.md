---
title: "Svelte"
description: "How to Build and Deploy Svelte project?"
position: 41
category: "Learn by example"
---

<description>
How to Build and Deploy Svelte project?
</description>

> If you do not have code ready, you can fork the repository being used in this example: [https://github.com/paladium/nativeci-demos](https://github.com/paladium/nativeci-demos)

![Svelte](/images/languages/sveltejs.png)

We are going to deploy a hello-world application for Svelte, follow along to find different ways you can customise your Svelte deployment.

## Guide
Choose your repo first:
![Choose repo](/images/intro/choose-repo.png)

Next, select svelte deployment:
![Svelte select](/images/examples/svelte-choose.png)

To choose a correct NodeJS version, open up the terminal and type the command below:
```
$ node --version
v14.0.0
```

Choose the major version output, e.g 16 or 14.

On the final screen, enter the following settings:
![svelte settings](/images/examples/svelte-settings.png)

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
svelte-helloworld
```

**Port to expose**:
```bash
#Choose port 80 as ssl is provided automatically
```

**Deploy folder**:
```bash
#svelte deploys into dist folder
dist
```

**Run command**:
```bash
#Leave empty as nginx will be launched

```

After that you can visit your website and see how easy it was to deploy it:
![Deployed](/images/examples/svelte-deployed.png)

The bonus is if you change your code in source control, the build will be automatically triggered and newest version will be deployed. Congratulations, you now have Continuous Build and Deployment.