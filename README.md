[![PRETTIER](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://gitter.im/jlongster/prettie)
[![LICENSE](https://img.shields.io/github/license/arshadkazmi42/awesome-github-init.svg)](https://github.com/arshadkazmi42/awesome-github-init/LICENSE)
[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Flucioerlan%2FAutomation-request&count_bg=%23E71A18&title_bg=%23555555&icon=dependabot.svg&icon_color=%23E7E7E7&title=views&edge_flat=false)](https://hits.seeyoufarm.com)

![buildersoap](https://user-images.githubusercontent.com/67064886/89115436-96308d00-d45e-11ea-9f3e-23cc2a67e200.gif)
<br>


# Description 

This service is just an example, of another service that I did recently, much more complex and with more important data. This service generates an xml automatically, with information from the database, and then a request is made to a web service soap, then the entire response is saved in the database.
<br>



---

# Installation

### Requirements

You will need to install some stuff, if they are not yet installed in your machine:

* [Node.js (v4.3.2 or higher; LTS)](http://nodejs.org)
* [NPM (v3.5+; bundled with node.js installation package)](https://docs.npmjs.com/getting-started/installing-node#updating-npm)
<br>

---

### Install through Github :octocat:

Best way to install is to clone it from Github
<br>

**To clone/download the boilerplate**

```bash
$ git clone https://github.com/lucioerlan/Automation-request.git
```

**After cloning**

```bash
$ cd Automation-request
```

**Install all of the projects dependencies with:**

```bash
$ npm install

```


### copy the .env-examples file to .env

```
$ cp .env-examples .env
```

**running**

```bash
$ npm start

```
<br>

---

### Create table into Postgres
![knex-migration](https://user-images.githubusercontent.com/67064886/89115889-efe78600-d463-11ea-9c2d-c53fdb18b528.png)
```sh
$ npx knex migrate:latest
```
<br>



### Insert data into Postgres
![seeds](https://user-images.githubusercontent.com/67064886/89115891-f118b300-d463-11ea-8666-13605e7e3bc7.png)
```sh
$ npx knex seed:run
```
<br>




### Running with PM2

![pm2](https://user-images.githubusercontent.com/67064886/89115890-f0801c80-d463-11ea-9e59-320df400d6d5.png)

```
$ pm2 start pm2.config,js
```
<br>

## 🔓 Licença 
MIT © [Erlan Lucio](https://www.linkedin.com/in/erlanlucio/)


