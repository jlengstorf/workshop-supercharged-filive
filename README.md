Supercharge Your Front-End Workflow
===============================================================================

If you're going to be a great front-end developer, you need to make sure that
the little stuff is taken care of. The details make the difference between okay
work and great work.

However, it's hard to do consistently because it's — well — *boring*.

I want to let you in on a little secret: I don't take care of the little
details in my work. I'm lazy; I'd rather be working on something fun than
compressing CSS output or checking that my JavaScript conforms to the style
guide requirements.

However, it all still gets done. And better than I could do it myself,
honestly.

Because I have friggin' *robots* to do it for me.

In this workshop, I'll show you how I built a small army of robots to do my
bidding, so that I could focus on the fun stuff.

The tools we'll be using have scary names, like *task runners* and
*transpilers* and *linters*, but don't worry — you don't have to be a hardcore
back-end developer to set this up. More importantly, once you've built it
once, you can reuse it on future projects.

**Build once; *win forever.***

Whether you're a designer or a developer, these tools don't need to be scary
and can save you *hours* in the long run.


Quick Start
-------------------------------------------------------------------------------

For a quick look at what the completed app looks like, check out the `complete`
branch. The source is also thoroughly commented, and
[Groc](https://github.com/nevir/groc) was used to generate
[the documentation](http://git.io/vff2n).


What You'll Learn
-------------------------------------------------------------------------------

- Task automation, including:
  + Running a local development server
  + Watching files for changes and automatically running tasks
  + Reloading the browser after changes are made
  + Automatically injecting app resources
  + Automatically injecting dependencies
  + Removing old and unused files
- CSS Post-Processing and Optimization
  + Understanding nested selectors
  + Using CSS variables
  + Automatically adding vendor prefixes where needed
  + Manipulating color with CSS functions
  + Inserting high-resolution background images automatically
  + Using custom selectors
  + Creating extendable placeholder classes
  + Building and using mixins
  + Optimizing CSS output for performance
- JavaScript Linting, Processing, and Optimization
  + Linting scripts for warnings and errors
  + Checking adherence to a coding style guide (and fixing issues!)
  + Implementing ES6 features *today*
  + Concatenating scripts to save on HTTP requests
  + Minifying scripts for faster loading
- Image Optimization
  + Compressing JPG images for smaller files and faster, progressive loading
  + Optimizing PNG images to decrease file size with no visible quality loss

Throughout this workshop we'll be using tools that start out sounding scary —
*package managers* like Bower and NPM; *post-processors* and *transpilers* like PostCSS and Babel, respectively — but we'll quickly see that using


Requirements
-------------------------------------------------------------------------------

* Node 0.12.0 — [installation instructions](https://nodejs.org/download/)
* Bower 1.4.1 — [installation instructions](http://bower.io/#install-bower)
* Gulp 3.8.11 — [installation instructions](http://git.io/vTpk5)

**NOTE:** This app will most likely work with older versions. This is just what I was using at the time I built this demo.

### Full List of Node Packages Used in This Workshop

There's probably no need to worry about versions unless something is
inexplicably breaking and you're not sure why. If you have an issue that you
think may have been caused by the package's version, please see `package.json`
for versions used in this workshop.

#### Production Dependencies

Packages installed with:

    npm install --save package

- [`bower`](https://www.npmjs.com/package/bower)
- [`express`](https://www.npmjs.com/package/express)
- [`jade`](https://www.npmjs.com/package/jade)
- [`morgan`](https://www.npmjs.com/package/morgan)

#### Development Dependencies

Packages installed with:

    npm install --save-dev package

- [`del`](https://www.npmjs.com/package/del)
- [`doiuse`](https://www.npmjs.com/package/doiuse)
- [`gulp`](https://www.npmjs.com/package/gulp)
- [`gulp-babel`](https://www.npmjs.com/package/gulp-babel)
- [`gulp-changed`](https://www.npmjs.com/package/gulp-changed)
- [`gulp-concat`](https://www.npmjs.com/package/gulp-concat)
- [`gulp-cssnano`](https://www.npmjs.com/package/gulp-cssnano)
- [`gulp-cssnext`](https://www.npmjs.com/package/gulp-cssnext)
- [`gulp-imagemin`](https://www.npmjs.com/package/gulp-imagemin)
- [`gulp-inject`](https://www.npmjs.com/package/gulp-inject)
- [`gulp-jscs`](https://www.npmjs.com/package/gulp-jscs)
- [`gulp-jshint`](https://www.npmjs.com/package/gulp-jshint)
- [`gulp-livereload`](https://www.npmjs.com/package/gulp-livereload)
- [`gulp-nodemon`](https://www.npmjs.com/package/gulp-nodemon)
- [`gulp-postcss`](https://www.npmjs.com/package/gulp-postcss)
- [`gulp-rename`](https://www.npmjs.com/package/gulp-rename)
- [`gulp-rev`](https://www.npmjs.com/package/gulp-rev)
- [`gulp-rev-replace`](https://www.npmjs.com/package/gulp-rev-replace)
- [`gulp-sourcemaps`](https://www.npmjs.com/package/gulp-sourcemaps)
- [`gulp-uglify`](https://www.npmjs.com/package/gulp-uglify)
- [`gulp-using`](https://www.npmjs.com/package/gulp-using)
- [`imagemin-pngquant`](https://www.npmjs.com/package/imagemin-pngquant)
- [`jshint-stylish`](https://www.npmjs.com/package/jshint-stylish)
- [`lazypipe`](https://www.npmjs.com/package/lazypipe)
- [`matchdep`](https://www.npmjs.com/package/matchdep)
- [`postcss-at2x`](https://www.npmjs.com/package/postcss-at2x)
- [`postcss-discard-comments`](https://www.npmjs.com/package/postcss-discard-comments)
- [`postcss-import`](https://www.npmjs.com/package/postcss-import)
- [`postcss-mixins`](https://www.npmjs.com/package/postcss-mixins)
- [`postcss-nested`](https://www.npmjs.com/package/postcss-nested)
- [`postcss-simple-extend`](https://www.npmjs.com/package/postcss-simple-extend)
- [`postcss-simple-vars`](https://www.npmjs.com/package/postcss-simple-vars)
- [`wiredep`](https://www.npmjs.com/package/wiredep)


Installation
-------------------------------------------------------------------------------

To get this up and running on your computer, start by
cloning the repo:

    cd path/to/where/you/want/to/install/
    git clone git@github.com:jlengstorf/workshop-supercharged-filive.git

Next, move into the cloned project and install the
required dependencies.

    cd ../workshop-supercharged-filive
    npm install

**NOTE:** [Bower][1] components are automatically installed as a
[`postinstall` script][2].


Credits
-------------------------------------------------------------------------------

[Jason Lengstorf][3] built this app with love and bear hugs.


License
-------------------------------------------------------------------------------

The MIT License (MIT)

Copyright (c) 2015 Jason Lengstorf

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


[1]: http://bower.io/
[2]: https://docs.npmjs.com/misc/scripts
[3]: http://lengstorf.com/
