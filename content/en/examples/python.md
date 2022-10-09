---
title: "Python"
description: "How to Build and Deploy Python project?"
position: 38
category: "Learn by example"
---

<description>
How to Build and Deploy Python project?
</description>

> If you do not have code ready, you can fork the repository being used in this example: [https://github.com/paladium/nativeci-demos](https://github.com/paladium/nativeci-demos)

![Python](/images/languages/python.png)

We are going to deploy a hello-world Flask application for Python, follow along to find different ways you can customise your Python deployment.

## Guide
Choose your repo first:
![Choose repo](/images/intro/choose-repo.png)

Next, select Python deployment:
![Python select](/images/examples/python-choose.png)

To choose a correct Python version, open up the terminal and type the command below:
```
$ python --version
Python 3.6.1 :: Anaconda custom (64-bit)
```

Choose the version output, e.g 3.6 or 2.6.

On the final screen, enter the following settings:
![Python settings](/images/examples/python-settings.png)

> Make sure you have ```requirements.txt``` file in your repo as it instructs NativeCI which dependencies to install for your application to run. Example of ```requirements.txt``` file can be found here: https://github.com/paladium/nativeci-demos/blob/master/python-helloworld/requirements.txt

**Build command**:
```bash
#Default build command, no build

#Run tests first
python -m unittest
```

**Folder**:
```bash
#For monorepo example
python-helloworld
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
python main.py
```

After that you can visit your website and see how easy it was to deploy it:
![Deployed](/images/examples/python-deployed.png)

The bonus is if you change your code in source control, the build will be automatically triggered and newest version will be deployed. Congratulations, you now have Continuous Build and Deployment.