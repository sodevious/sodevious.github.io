---
layout: post
title: 'GCC + Python + Pip install errors got me like, "i can&apos;t even"'
date: 2015-05-22 11:42:02
categories: thoughts
tag: development, python, protip
---

In my free time, I have been trying to pick up working on my side project, techconferenc.es again. However, I 
couldn't even seem to simply `pip install -r requirements.txt` without getting errors.

`error: command 'gcc-4.9' failed with exit status 1`

This error has been tripping me up for so long! Googling for hours on the weekend, racking my head about
what could possibly fix this, and trying every solution I found. Nothing.

![i can't even](http://media.giphy.com/media/12I0zvnRp4Lq92/giphy.gif)

**Until**, I found [this blog post](https://kaspermunck.github.io/2014/03/fixing-clang-error/) after the 321934th Google search pertaining to this issue. Apparently
it's a temporary fix, but OMG IT WORKED.

```
ARCHFLAGS=-Wno-error=unused-command-line-argument-hard-error-in-future
```

See the post here: [Fix 'clang: unknown argument' error after updating to Xcode 5.1](https://kaspermunck.github.io/2014/03/fixing-clang-error/)
