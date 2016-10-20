# Grunt starter kit

 A starter kit for building sites on grunt. It's kept simple so if your design uses a UI kit you should add that into vender folders as appropriate.

## Technology stack

### Resource management

* [**Grunt**](http://gruntjs.com/): Task manager
* [**Node.js**](https://nodejs.org/en/): Package manager
* [**Bower**](https://bower.io/): Package manager

### HTML frameworks

* [**SASS**](http://sass-lang.com/): Style preprocessor
* [**Compass**](http://compass-style.org/): CSS authoring framework
* [**jQuery**](https://jquery.com/): Javascript framework

N.B. If you're getting `compass not found` errors, make sure you've [installed the Compass gem](http://compass-style.org/install/). NPM will automatically install the node interface for Grunt to use, but the gem install needs to be done manually.

## File structure

### Primary folders

* **src**: Source files intended for automated compilation into *dev* and *dist* paths
* **dev**: Compiled, but expanded files intended for development and debugging
* **dist**: Compiled, minified, and possibly obfuscated files intended for distribution

The dev and dist folders are not tracked in git but are compilation paths for Grunt.

If your using bower components it's recommended that you make a soft link to the *bower_components* directory in the *dev* folder.

### Structure

The structure is modeled primarily after Google's.

Assets are kept in a root folder with the asset type as the name.

Most commonly there are:

* **images**
* **js**
* **sass**
* **css**
