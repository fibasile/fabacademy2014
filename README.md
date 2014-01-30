# FabAcademy 2014 website

In order to be able to build the site or serve it dynamically you will need the following:

- Node.js 10.0.*
- harp.js

You can grab node.js from the [nodejs.org](http://nodejs.org) website, and install a binary package for your platform.

Once this is done just type:

	> npm install -g harp

Then clone this repository and run:

	> harp server

this will start a webserver on your localhost:9000 port with the complete website.

If you want a static version, you can run in the same folder:

	> harp compile

This will create a www folder containing the static website.


