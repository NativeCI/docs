---
title: "Docker"
description: "How to Build and Deploy Docker project?"
position: 42
category: "Learn by example"
---

<description>
How to Build and Deploy Docker project?
</description>

> If you do not have code ready, you can fork the repository being used in this example: [https://github.com/paladium/nativeci-demos](https://github.com/paladium/nativeci-demos)

![Docker](/images/languages/docker.png)

We are going to deploy a Nextcloud application for Docker, follow along to find different ways you can customise your Docker deployment.

## Guide
Choose your repo first:
![Choose repo](/images/intro/choose-repo.png)

Next, select Docker deployment:
![Docker select](/images/examples/docker-choose.png)

On the final screen, enter the following settings:
![Docker settings](/images/examples/docker-settings.png)

**Dockerfile path**:
```bash
#For monorepo example
docker-nextcloud/Dockerfile
```

**Port to expose**:
```bash
#Choose port 80 as ssl is provided automatically
```

After that you can visit your website and see how easy it was to deploy it:
![Deployed](/images/examples/docker-deployed.png)

The bonus is if you change your code in source control, the build will be automatically triggered and newest version will be deployed. Congratulations, you now have Continuous Build and Deployment.