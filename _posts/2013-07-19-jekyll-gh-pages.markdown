---
layout: post
title:  "How This Blog Works: Jekyll + GitHub Pages + Custom Domain"
date:   2013-07-19 19:11:02
categories: thoughts
---

I recently moved from a Tumblr blog + custom domain to using GitHub Pages to host and serve my Jekyll powered blog with a custom domain. It's pretty cool actually, cause all the code is open source and works great with a regular GitHub workflow. Did I mention it's free and deserves some nerd cred?

At first, Jekyll seems kind of daunting, but once you start your local server and play with the inner workings, you'll realize that it's pretty powerful. All it takes is a little knowledge of ruby views and sass - then you're good to go! **The [documentation](http://jekyllrb.com/) is super useful.**

* So to handle the 301 redirection, I'm using a plugin called *[jekyll_alias_generator](https://github.com/tsmango/jekyll_alias_generator)* to generate local post files where the old url goes. Those files contain 301 redirects for the new slug. It's worth noting that I had to generate these files locally and then put them in the *site* folder, because GitHub pages won't run any Jekyll plugins.

* All of the posts are written in markdown, using yaml frontmatter for metadata. I found *[Mou](http://mouapp.com/)*, a great free Mac app that helps with formatting markdown.

* To get the custom domains working, you have to point your domain to the GitHub Pages IP, which is all laid out in their wonderful [documentation](https://help.github.com/articles/setting-up-a-custom-domain-with-pages). And then in your repo, create a file called "*CNAME*" with the url of your domain, no www. Here's [mine](https://github.com/sodevious/sodevious-blog/blob/master/CNAME).

* To get it all going, create a branch called gh-pages and push everything there. It will live at *yourusername*.github.io/*your-repo*.

Huzzah! Profit! Prosper! Be Merry!
