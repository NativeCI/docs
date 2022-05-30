---
title: 'Databases quickstart'
description: 'How to quickly deploy a Mysql database on NativeCI?'
position: 20
category: 'Databases'
---

In this demo we will deploy a Twitter-like application which allows users to login and posts on public feed:
![Demo login](/images/databases/demo-login.png)
![Demo chat](/images/databases/demo-chat.png)

Deployed demo project: [https://paladium-nativeci-demos-96ed.nativeci.io](https://paladium-nativeci-demos-96ed.nativeci.io)

## Deploy the application
First navigate to [https://github.com/paladium/nativeci-demos](https://github.com/paladium/nativeci-demos) and fork the repository to your account.

After that navigate to [https://console.nativeci.io/add-project](https://console.nativeci.io/add-project) and add your repository with the following settings:
![Demo repo](/images/databases/demo-repo.png)
Next choose Golang 1.14 as the version:
![Demo language](/images/databases/demo-language.png)
Finally specify the deploy folder to go-database and choose that this will be a web service, with port 8000. Leave the rest of settings to default:
![Demo deploy](/images/databases/demo-deploy.png)

Click on Create and wait for a few moments until the project gets created and built. Meanwhile, we will prepare the database.

## Deploy the database
Navigate to [https://console.nativeci.io/add-database](https://console.nativeci.io/add-database) and choose Mysql version 5.7 as the database:
![Demo database](/images/databases/demo-database-choose.png)
Choose the flavor on next page and finally specify the name of the database (This could be any name, since we will be creating MYSQL databases inside of it):
![Demo deploy database](/images/databases/demo-database-deploy.png)

Wait a few moments, before a database is created, after that click on the database created and click on Attach button:
![Demo database attach](/images/databases/demo-database-attach.png)
Enter the following script to connect to your database:
```
mysql -u root -p$MYSQL_ROOT_PASSWORD
```
> Note: $MYSQL_ROOT_PASSWORD will be replaced automatically for you as environment variable.

> Note: you could copy the text and right click "Paste as plain text" into the terminal

![Demo database enter](/images/databases/demo-database-enter.png)

Next copy the contents of tables.sql from your forked repository or from [https://github.com/paladium/nativeci-demos/blob/master/go-database/tables.sql](https://github.com/paladium/nativeci-demos/blob/master/go-database/tables.sql)
Paste the contents into the terminal:
![Demo database created](/images/databases/demo-database-created.png)

To verify the database was created run:
```
use twitter;
select * from users;
```
![Demo database verify](/images/databases/demo-database-verify.png)

> Note: in case you encounter any problems or have any suggestions about your specific usecase, you could open an issue at [https://github.com/nativeci/issues](https://github.com/nativeci/issues)

## Connecting application to database
We have everything ready to connect our application to the database.

Let's add the final touches, navigate to Dashboard and choose your created project (you should see no instaces running, it is normal since the application cannot connect to the database).

Navigate to Environment variables and set the following variable:
Key: JWT_SECRET, Value: any random string you want
Click add and finally save.
![Demo app env](/images/databases/demo-app-env.png)

Navigate to Application Tab and click on the database you created earlier from the right sidebar:

![Demo connect db](/images/databases/demo-connect-db.png)

You should then see the following view after a few seconds:
![Demo connected db](/images/databases/demo-database-connected.png)

You can click on View app button the left sidebar to verify your application is working:

From now on, you can take the project as the basis for your own applications. Go ahead and explore more features, like customising database port or database connection string. Good luck :)