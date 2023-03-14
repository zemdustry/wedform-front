## <u> Docker steps</u> 🐋

Steps to launch all the usefull containers for the project. 
Don't forget to securise them !
#### requirement :
- OpenJDK 17.0.6
<br>


1. Lancer les containers (PostgreSQL, PgAdmin) 🐘🐋

*Dans le répertoire `quarkus-backend/compose`*
```bash 
docker-compose up
```

#### alternative :
### PostegreSQL container (Dev) 🐘
📁 into the "postgres" directory
```bash 
docker build -t postgres-wedform-dev dev/
docker run -p 5430:5432/tcp --name postgres-wedform-dev -e POSTGRES_PASSWORD=<my-password> -d postgres-wedform-dev

docker build -t postgres-wedform-test test/
docker run -p 5431:5432/tcp --name postgres-wedform-test -e POSTGRES_PASSWORD=<my-password> -d postgres-wedform-test
```

__To change password__ : Login/Group Roles ➡️ Properties➡️  Definition ➡️ Password
⚠️<span style="color:red">Container database for production is not recommended.</span>⚠️

Servers are accessible with **pgAdmin** or **postgresql-client**:
```bash
#psql -h <ip> -p <port> -U <user> 
psql -h 192.168.1.50 -p 5430 -U postgre 
```
<br>

### pgAdmin container 🧿
base on **dpage/pgadmin** container
```bash 
docker run -p 8081:80 -e 'PGADMIN_DEFAULT_EMAIL=<my-email>' -e 'PGADMIN_DEFAULT_PASSWORD=<my-password>' -d --name=ui-pgadmin dpage/pgadmin4
```

__To change password__ : "my-email@gmail.com" ➡️ Change password

<p>pgAdmin is accessible with localhost:8081</p>

1. Add server **postgres-dev** ➡️ **Host name/address** : <your-ip> ➡️ **Port** : 5430 ➡️ **Username** : postgres ➡️ **Password** : \<my-password\>

2. Add server **postgres-test** ➡️ **Host name/address** : <your-ip> ➡️ **Port** : 5431 ➡️ **Username** : postgres ➡️ **Password** : \<my-password\>

<br>

*Usefull :*
```bash 
#check
docker images #check images
docker ps # container list
docker ps -a # container history
docker container ls 

#build
docker build -t <image-name>

#debug containers
docker run -it -p 8180:8080 --name wildflycoco -d wildfly23
docker exec -it wildfly /bin/bash

#remove
docker image rm -f <image-name> #remove image with force
docker rmi -f <image-id> #remove image
```
