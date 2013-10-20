---
layout: post
title:  "CSS Layout Testing Snippet"
date:   2013-03-16 19:11:02
categories: thoughts
---

As a pixel perfectionist, I like knowing that my layout and elements are exactly as I imagine they should be. I usually find myself adding random red backgrounds to certain elements while I am building my layout. I found this snippet of code to be immensely useful while testing:

{% highlight css %}
* { background: rgba(1, 1, 1, 0.1); }
{% endhighlight %}
