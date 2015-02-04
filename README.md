## Creating-Apps-With-Angular-Node-and-Token-Authentication
[Pluralsight] Creating Apps With Angular, Node, and Token Authentication [2014, ENG]

ports:  
9000 - grunt (у меня на 80)
3000 - express
1337 - sails



### 02. Register in Front End Views  

02\. Register in Front End Views | 05-Environment Setup  

    yum install -y libpng-devel  

    npm install -g nodemon  
    npm install -g yo  
    npm install -g bower  
    npm install -g grunt-cli  
    npm install -g generator-angular

    yo angular  

? Would you like to use Sass (with Compass)? (Y/n) n  
? Would you like to include Bootstrap? Yes  
? Which modules would you like to include?  Nothing


    grunt serve

http://localhost

02\. Register in Front End Views | 06-Generated Angular Project  
02\. Register in Front End Views |  07-Register View

    yo angular:view register  


02\. Register in Front End Views |  08-ui-router

    bower install --save angular-ui-router

http://localhost/#/  
http://localhost/#/register

02\. Register in Front End Views |  09-App Theme

http://bootswatch.com/

Theme: SuperHero

http://bootsnipp.com/snippets/featured/login-screen-with-background

02\. Register in Front End Views |  10-ui-sref active

02\. Register in Front End Views |  11-Register View Fixes

### 03. Register Front End Controllers and Services

03\. Register Front End Controllers and Services | 14-Match Password Directive  

    yo angular:directive validateEquals  


03\. Register Front End Controllers and Services | 15-Register Controller  

    yo angular:controller register  

По нажатию на Submit, в консоль пишется "test"  

03\. Register Front End Controllers and Services | 16-HTTP Post
03\. Register Front End Controllers and Services | 16-HTTP Post

    bower install --save animate.css
    yo angular:service alert


03\. Register Front End Controllers and Services | 17-Alert Service

Неудачная попытка регистрации в системе.

### 04. Register WebAPI Manual JWT

04\. Register WebAPI Manual JWT | 20-API Environment Setup  

    mkdir frontend  
    mkdir api  

Все кроме git в /frontend

    cd api/  
    npm init  
    npm install --save express
    nodemon api.js

С помощью PostMan делаю POST запрос localhost/register
получаю ответ.


04\. Register WebAPI Manual JWT | 21-API Register Post  

    cd api/  
    npm install --save body-parser  
    nodemon api.js


04\. Register WebAPI Manual JWT | 22-MongoDB Save User

    cd api/  
    npm install --save mongoose  
    nodemon api.js

04\. Register WebAPI Manual JWT | 23-Encrypt Password With Hash

    cd api/  
    npm install --save bcrypt-nodejs  

04\. Register WebAPI Manual JWT | 24-Hide Password  

04\. Register WebAPI Manual JWT | 25-JWT Encoding From Scratch  

    cd api/  
    npm install --save crypto  
    nodemon api.js

eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.ImgxIg==.WkzcmKyO2ZLVkHGnH2fzuv2eVuRqadfCYqfuEMC5IJo=

04\. Register WebAPI Manual JWT | 26-Token Passed With Register  

04\. Register WebAPI Manual JWT | 27-Authtoken Factory  

    cd frontend/
    yo angular:factory authToken

04\. Register WebAPI Manual JWT | 28-isauthenticated

    cd frontend/  
    yo angular:controller header

### 05. Register WebAPI JWT Library

05\. Register WebAPI JWT Library | 31-Logout

    cd frontend/  
    yo angular:controller logout  

05\. Register WebAPI JWT Library | 32-Jobs and Greetings

    cd frontend/  
    yo angular:controller jobs


05\. Register WebAPI JWT Library | 33-View Animations  

    cd frontend/
    bower install --save angular-animate


05\. Register WebAPI JWT Library | 34-Securing the Jobs Resource
05\. Register WebAPI JWT Library | 35-Auth Interceptor

    yo angular:factory authInterceptor


05\. Register WebAPI JWT Library | 36-JWT Decoding From Scratch

05\. Register WebAPI JWT Library | 37-Verifying the Signature

05\. Register WebAPI JWT Library | 38-Design Break Optimize Alerts (ошибка в api.js. Вместо payload.sub нужно !payload.sub)

05\. Register WebAPI JWT Library | 39-Switching to Node JWT Simple  (лучше не выполнять этот шаг)

    cd api/
    npm install --save jwt-simple  

### 06. Login


06\. Login | 42-Login Endpoint  

06\. Login | 43-Login View

    cd frontend/  
    yo angular:controller login  


06\. Login | 44-Login Controller


06\. Login | 45-Login Auth Service

    cd frontend/  
    yo angular:service auth  


06\. Login | 46-Redirect


06\. Login | 47-Register Auth Service


06\. Login | 48-Passport Login

    cd api/  
    npm install --save passport
    npm install --save passport-local

06\. Login | 49-Passport Register
06\. Login | 50-Duplicate Email Check

### 07. Auth Provider

07\. Auth Provider | 53-Google Project

https://console.developers.google.com/project

APIs  
+  
Contacts API  
Google+ API

Credentilas  
+OAuth


07\. Auth Provider | 54-Window Popup

По нажатию на кнопку google появляется окно с invalid request


07\. Auth Provider | 55-Google Authorization Code Request

По нажатию на кнопку google появляется окно с предложением авторизоваться с помощью google


07\. Auth Provider | 56-Getting Authorization Code


07\. Auth Provider | 57-Sending Authorization Code


07\. Auth Provider | 58-Authorization Code in Main Window


07\. Auth Provider | 59-Close Popup


07\. Auth Provider | 60-Authorization Code to Backend  


07\. Auth Provider | 61-Token Exchange With Google  

    cd api/  
    npm install --save request  


07\. Auth Provider | 62-Google Plus API Profile  


07\. Auth Provider | 63-Create JWT From Google Profile  


07\. Auth Provider | 64-Frontend Authentication

### 08. Sattelizer  

https://github.com/sahat/satellizer

08\. Sattelizer | 67-Satellizer Google Login


    cd frontend/  
    bower install --save satellizer  


08\. Sattelizer | 68-Is Authenticated

http://momentjs.com/  


    cd api/  
    npm install --save moment  


08\. Sattelizer | 69-Logout


08\. Sattelizer | 70-Local Login


08\. Sattelizer | 71-Local Register  


08\. Sattelizer | 72-Facebook Auth Backend

https://developers.facebook.com/docs/facebook-login/access-tokens

    cd api/  
    npm install --save querystring  


08\. Sattelizer | 73-Facebook Auth Frontend

developers.facebook.com/apps/  


### 09. Email Validation

09\. Email Validation | 76-Cleanup  
09\. Email Validation | 77-Email Verification Token  
09\. Email Validation | 78-Template  

http://zurb.com/ink/templates.php  
Basic  

09\. Email Validation | 79-Template Theme  

09\. Email Validation | 80-Template With Underscore  
http://underscorejs.org/#template  


    cd api/  
    npm install --save underscore


09\. Email Validation | 81-Nodemailer  
https://github.com/andris9/Nodemailer  
https://github.com/andris9/nodemailer-smtp-transport


    cd api/  
    npm install --save nodemailer
    npm install --save nodemailer-smtp-transport


Скопировали в форму сайта http://zurb.com/ink/inliner.php файл emailVerification.html
и заменили его содержимое сгенерированным контентом.


09\. Email Validation | 82-Endpoint Handler



09\. Email Validation | 83-Front End Check


### 10. Authentication With Sails


10\. Authentication With Sails | 86-Sails Overview

https://github.com/balderdashy/sails-docs


    npm install -g sails
    sails new sapi
    cd sapi
    sails lift

http://localhost:1337

    sails generate api user
    sails lift

What would you like Sails to do?
3

http://localhost:1337/user  
http://localhost:1337/user/create?name=Alex  
http://localhost:1337/user/update/1/?email=alex@example.com  
http://localhost:1337/user/create?name=Tim  
http://localhost:1337/user  


http://sailsjs.org/#/documentation/reference


10\. Authentication With Sails | 87-Getting Jobs  


    cd sapi
    sails generate api job
    sails lift


http://localhost:1337/job/create?title=cook
http://localhost:1337/job/create?title=programmer
http://localhost:1337/job/create?title=super%20hero
http://localhost:1337/job/create?title=nicorn%20whisperer
http://localhost:1337/job

внесли правки в cors.js

sails lift
What would you like Sails to do?
2



http://localhost/#/jobs

получили данные с sails



10\. Authentication With Sails | 88-Authenticating With Policy Middleware | не заработало

    cd sapi
    npm install --save jwt-simple

    sails lift

What would you like Sails to do?
2


10\. Authentication With Sails | 89-Local Login


    cd sapi
    sails generate controller auth
