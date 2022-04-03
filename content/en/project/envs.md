---
title: Environment variables
description: 'How to securely pass credentials to your application?'
position: 9
category: 'Guides'
---

You can securely pass information to your application via ***Environment variables***:
![Envs](/images/guides/envs.png)

<alert>
All the values for variables are stored encrypted in NativeCI, meaning even we cannot access those values. Using environment variables is therefore a preferred way to pass sensitive information to your application, like database password or token.
</alert>

If you have edited the variables, you should click Builds -> Trigger build to rebuild the application and apply those variables to a new deployment.

You can access those variables are usual, for example in golang:

```go
os.Getenv("STRIPE_KEY")
```

or in nodejs:
```js
process.env.STRIPE_KEY
```