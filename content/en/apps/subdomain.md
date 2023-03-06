---
title: 'Custom subdomain'
description: 'How to configure custom subdomain?'
category: 'Apps'
position: 11
---

When you deploy a web-based application (the one exposed to the internet) you receive a unique subdomain which you can visit:
![SSL](/images/guides/ssl.png)

You can change that subdomain to become something memorable like `api.nativeci.app` or `ui.nativeci.app`.

In order to do it, visit your project and navigate to `Settings` and then `Deploy`:
![Subdomain](/images/guides/subdomain.png)

Change the subdomain to something unique, but make sure your subdomain conforms to the following rules:
- No more than 63 characters
- Unique
- No spaces, special characters etc.

Next click `Save` and if you run into any of the issues mentioned above you will be notified to fix them:
![Subdomain Changed](/images/guides/subdomain-changed.png)

After that your project is deployed at custom domain:
![Subdomain Deployed](/images/guides/subdomain-deployed.png)