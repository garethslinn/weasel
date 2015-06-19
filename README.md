# App


## Install

1. Install nodejs 

    https://nodejs.org/download/

2. Install bower

    npm install -g bower;

3. Install Ruby 

    https://www.ruby-lang.org/en/documentation/installation/

4. install compass

    http://compass-style.org/install/


## Setup

1. npm install
2. bower install

## config

A config.rb file is required to asssit automatic sprite generation.  If do not have this file then you will need to make one.

### Create a file named config.rb and save it in the src folder then add the following:

http_path = "../"
css_dir = "css"
sass_dir = "spriteSass"
images_dir = "src/images"
fonts_dir = "fonts"
javascripts_dir = "javascripts"
output_style = :expanded
line_comments = false
preferred_syntax = :scss
line_comments = false

## Watch files

run 'gulp' at the command line.

## Structure
The app should comprise the following:

    .
    |-- bower_components
    |-- node_modules
    |-- src
    |   |-- css
    |   |-- images
    |   |   |-- icons
    |   |   `-- icons-2x
    |   |-- js
    |   |-- scss
    |   |-- spriteScss
    |   |   `-- screen.scss
    |   `-- config.rb
    |-- bower.json
    |-- gulpfile.js
    |-- bower.json
    |-- package.json
    `-- README.mb







# weasel 
