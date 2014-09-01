---
layout: post
title:  "Jekyll, WHY U NO LIVERELOAD (or, How to get Jekyll to play nice with LiveReload)"
date:   2014-07-06 19:11:02
categories: thoughts
tag: code
---

I have been a believer in LiveReload and its counterparts for a while now. It's completely changed my development process and experience. Other than built-in rails preprocessing, I exclusively use LiveReload.

Anyways, I only update this site once every few months so the annoyance of not having styles reinjected was fine to deal with. (Jekyll regenerates the `_site` folder in a way that makes LiveReload impossible to reload the styles without a hard page refresh)

I'm refactoring the code to use neat instead of susy and figured I might as well figure out a solution to the problem I've been having.

Possible solutions include:

### Don't use the built-in Jekyll server
Idea came from [this](http://thanpol.as/jekyll/jekyll-and-livereload-flow/) post. Seems like an interesting solution, possibly the easiest. Except I couldn't get that to work. *Note: this command is the best thing ever invented, try it! `python -m SimpleHTTPServer 4000`*

### Use the Jekyll-assets gem
I took a peek at the source of [Tim Smith's](http://ttimsmith.com) site and saw he was using [this](http://ixti.net/jekyll-assets/) gem.

After much googling and fighting with installing the gem, **finally** I got it working. So I ended up ditching guard and guard-livereload, in favor of the [LiveReload](http://livereload.com/) Mac app. I know, I know. It does a hard reload of the page 0.5 seconds after it detects changes.

I let [jekyll-assets](https://github.com/ixti/jekyll-assets) compile my sass, which works pretty well because you can include third-party resources, like bootstrap, compass, bourbon, etc. I was able to delete my Guardfile and config.rb.

My Gemfile looks like this:

```
gem 'jekyll', '~> 2.1.0'
gem 'jekyll-assets', ~> '0.8.1'
gem 'bourbon', '~> 4.0.2'
gem 'neat', '~> 1.6.0'
```

ext.rb

```
require "jekyll-assets"
require "jekyll-assets/bourbon"
require "jekyll-assets/neat"
```

piece of my config.yml

```
# Plugin: jekyll-assets
assets:
  sources:
    - assets/sass
    - assets/stylesheets
    - assets/images

  css_compressor: sass
  cachebust: hard
  cache: false
  gzip: [ text/css, application/javascript ]
```