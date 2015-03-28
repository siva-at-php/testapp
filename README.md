# testapp
A test app using the Zend framework.

# Requirements:
1. XAMPP 5.6.3


# Configurations:
Note: I have installed XAMPP in my D: drive.

1. Clone the repo
	- includes ZendFramework1.12.11 library
	- skeleton application 

2. D:\xampp\apache\conf\extra\httpd-vhosts.conf
	- Setup the virtualhost as given below:
	<VirtualHost testapp.local:80>
		DocumentRoot "D:/xampp/htdocs/testapp/public"
		ServerName testapp.local
		ErrorLog "logs/testapp-error.log"
		CustomLog "logs/testapp-access.log" combined
		SetEnv APPLICATION_ENV "development"
		<Directory D:/xampp/htdocs/testapp/public>
				DirectoryIndex index.php
				AllowOverride All
				Order allow,deny
				Allow from all
		</Directory>
	</VirtualHost>

3. C:\Windows\System32\drivers\etc\hosts
	- Map virtual host server name (testapp.local) into local ip address
	- add the below line into hosts file
		127.0.0.1	testapp.local

4. Start the apache server by using XAMPP-control panel application (available inside the D:\xampp folder)

5. Open your browser and run the testapp http://testapp.local

# Folder Structures
1. testapp
	- application, where we can start write all our MVC logics
		- configs
		- controllers
		- layouts
		- models
		- views
		- Bootstrap.php
	- docs,
	- library - Zend core library
	- public - Where server will starts the app
		- index.php
		- .htaccess
		- css/js
 
	- tests

Please go through the link for more informations: http://framework.zend.com/manual/1.12/en/learning.quickstart.html