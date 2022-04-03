---
title: Resizing
description: 'How to resize your application to fit your demans?'
position: 6
category: 'Guides'
---

Choose one of packages to scale your application.
![Resize](/images/guides/resize.png)

If you have no default payment method for paid plans, you will be prompted to add one:
![No payment](/images/guides/no-payment.png)

Then add your card details, you may be temporarily charged 1$ for verifying the card.
![Add payment](/images/guides/add-payment-method.png)

After that, you can use paid plans:
![Chosen flavor](/images/guides/chosen-flavor.png)

### How limiting works?
If your application reaches the CPU limit, it will be throttled meaning, it will not consume more than your package limit (100Mhz or 1000Mhz).

If your application exceeds RAM limit, it will be killed and a new instance will be created shortly.

You can monitor the application usage from Monitoring tab. Once, you see that your application requires more resources, you should scale it up. If you are suspecting that your application is overprovisioned with resources, you can scale down at any moment.

