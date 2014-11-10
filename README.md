**Angular JS BOILERPLATE**

Get started quick with angularJS.

	- clone repository into your local folder
	- install NPM modules (details below), if you do not already have them installed globally
		- install npm modules by envoking npm install.
	- run tests to prove everything is working
		- $ grunt
	- run gulp to package everything up for production.
		- $ gulp

The reason I created this boilerplate for angularJS : When I want to create a new site or app I do not want to spend my time setting up the bits and pieces for each instance. Performing a git clone speeds up my development and I have something to show the client before the day is over.

You can find other boilerplates under my github account at 

*Get up and Running*

	You might also want to install Grunt and Karma globally so you don't have to keep installing it for every project. You can do that with the following commands.

	npm install -g grunt-cli

	npm install -g karma-cli

	The "cli" suffix is the package that allows grunt and karma to called directly from the command line in Windows. The -g parameter tells NPM you want to install the package globally.

Once you have installed grunt and karma or if you decided to skip the global install

	$ npm install

	- this will install all the dependencies to your machine.

	$ grunt

	- this will run the default grunt task
		- watches all of your sass files and compile them to css when you save.
		- watches all of your .js files and runs tests via karma when you save a .js file.

Review the gruntfile.js to view the other tasks that can be completed.

================

Google Signing : Auth

https://developers.google.com/+/web/signin/add-button



