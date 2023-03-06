---
title: 'Deploying NativeAI API'
description: 'How to deploy NativeAI-generated API on NativeCI?'
category: 'Apps'
position: 12
---

Once you have successfully generated API on NativeAI, you can easily deploy it on NativeCI:
![NativeAI](/images/guides/nativeai-api.png)

First, create a new repository in Github with your project:
![NativeAI github](/images/guides/nativeai-github.png)

Depending on your project type, create a file with the right extension, in my case, it is Python language, so I created ```main.py``` file. Copy the API code from the code generated on NativeAI:
![NativeAI code](/images/guides/nativeai-code.png)

Finally, click "Commit changes..."

After that navigate to https://console.nativeci.io and click "Create project". Depending on your language, you can follow the guide specific for your case, by choosing the right language in the help window:
![NativeAI language](/images/guides/nativeai-language.png)

Finally, click "Create" and in a moment your project will be built and created.

After the build, you can visit the project by clicking on the "Link" button:
![NativeAI link](/images/guides/nativeai-link.png)

Finally, we have our project deployed, we can hit our endpoint ```/users``` and see the result:
![NativeAI link](/images/guides/nativeai-deployed.png)

You now have created full CI/CD pipeline, meaning everytime you change the code of your project, it will be automatically built and deployed.

Follow the guide here [Custom subdomain](/apps/subdomain) to assign a custom endpoint to your API.