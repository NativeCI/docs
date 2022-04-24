---
title: 'Retrieve root password'
description: 'How to get root password for Mysql database deployed on NativeCI?'
position: 11
category: 'Databases'
---

In order to retrieve root password for MySQL database created, open the database page, next click 'Attach button':
![Attach](/images/databases/attach.png)

Next enter the following command into the terminal:
```
echo $MYSQL_ROOT_PASSWORD
```

![Root password](/images/databases/root-password.png)