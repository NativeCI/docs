---
title: "C# NetCore"
description: "How to deploy C# based .NetCore project?"
position: 32
category: "Learn by example"
---

<description>
How to deploy C# based .NetCore project?
</description>

> If you do not have code ready, you can fork the repository being used in this example: [https://github.com/paladium/nativeci-demos](https://github.com/paladium/nativeci-demos)

![NetCore](/images/languages/dotnet_core.png)

We are going to deploy a simple hello world dotnet api, that will have a single endpoint:
```
/api/values
```

## Guide
Choose your repo first:

![Choose repo](/images/intro/choose-repo.png)

Next, select DotnetCore deployment:
![Dotnet select](/images/examples/dotnet-core-choose.png)

To choose a correct Dotnet version, open up the project and find your ```.csproj``` file:
```xml
<PropertyGroup>
    <TargetFramework>net6.0</TargetFramework>
</PropertyGroup>
```

Choose the version TargetFramework, e.g 2.1 or 6.0.

On the final screen, enter the following settings:
![DotnetCore settings](/images/examples/dotnet-core-settings.png)

**Build command**:
```bash
#Default build command, will create out folder
dotnet publish -c Release -o out

#Run tests first
dotnet test && dotnet publish -c Release -o out
```

**Folder**:
```bash
#For monorepo example
dotnet-helloworld
```

**Port to expose**:
```bash
#Choose port 80 (default) as ssl is provided automatically
```

**Deploy folder**:
```bash
#Build command deploys into out
out
```

**Run command**:
```bash
#Take project name
dotnet dotnet-helloworld.dll
```

After that you can visit your api and see how easy it was to deploy it:
![Deployed](/images/examples/dotnet-core-deployed.png)


> Note: if you need to configure which settings file to use, set environment variable ASPNETCORE_ENVIRONMENT to Production - [Set runtime environment variables](/apps/envs)