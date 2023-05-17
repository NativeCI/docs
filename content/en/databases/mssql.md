---
title: 'MSSQL'
description: 'How to login to management UI for Microsoft SQL Server database deployed on NativeCI?'
position: 24
category: 'Databases'
features:
    - Query your data
    - Import/export data
    - Create databases and tables
    - Edit and delete columns
    - Much more
---

NativeCI uses Adminer(https://www.adminer.org) to provide database management UI. It has many features including:
<list :items="features"></list>

In order to login to management UI for your database, retrieve the root password first from <nuxt-link to="/databases/get-root-password">Get root password</nuxt-link>

Next click on 'View database':
![View database](/images/databases/view-database.png)

Next enter the following details on login page:
- Server: 127.0.0.1:1433 for MSSQL
- Username: sa
- Password: root password retrieved earlier

![DB UI](/images/databases/mssql-login.png)

Click login to connect to your database:
![DB UI Dashboard](/images/databases/mssql-dashboard.png)