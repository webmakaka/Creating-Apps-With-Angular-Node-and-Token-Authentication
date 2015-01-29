# Creating-Apps-With-Angular-Node-and-Token-Authentication
[Pluralsight] Creating Apps With Angular, Node, and Token Authentication [2014, ENG]




### 02. Register in Front End Views  

02. Register in Front End Views | 05-Environment Setup  

yum install -y libpng-devel  

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



02. Register in Front End Views | 06-Generated Angular Project  

Nothing  

02. Register in Front End Views |  07-Register View

yo angular:view register  


02. Register in Front End Views |  08-ui-router

bower install angular-ui-router --save

http://localhost/#/  
http://localhost/#/register


02. Register in Front End Views |  09-App Theme

http://bootswatch.com/

Theme: SuperHero


http://bootsnipp.com/snippets/featured/login-screen-with-background



02. Register in Front End Views |  10-ui-sref active


02. Register in Front End Views |  11-Register View Fixes



### 03. Register Front End Controllers and Services

03. Register Front End Controllers and Services | 14-Match Password Directive  

yo angular:directive validateEquals  


03. Register Front End Controllers and Services | 15-Register Controller  

yo angular:controller register  

По нажатию на Submit, в консоль пишется "test"  


03. Register Front End Controllers and Services | 16-HTTP Post

Nothing


03. Register Front End Controllers and Services | 16-HTTP Post

bower install animate.css --save  
yo angular:service alert


03. Register Front End Controllers and Services | 17-Alert Service

Неудачная попытка регистрации в системе.



### 04. Register WebAPI Manual JWT

04. Register WebAPI Manual JWT | 20-API Environment Setup  

mkdir frontend  
mkdir api  

Все кроме git в /frontend  
cd api/  

npm init  
npm install --save express

node api.js

С помощью PostMan делаю POST запрос localhost/register
получаю ответ.


04. Register WebAPI Manual JWT | 21-API Register Post  

cd api/  
npm install --save body-parser  

node api.js
