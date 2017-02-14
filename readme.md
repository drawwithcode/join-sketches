# Join multiple sketches in the same page 🖇🖇
This sketch is an example on how to use `<iframe>` tag to join different sketches.

Here you can find the result:

https://drawwithcode.github.io/join-sketches-same-page/

We created three different sketches in P5.js, contained in three folders:
* 01_dots
* 02_squares
* 03_strokes

Each folder contains all the files needed by each sketch.

We then created a new HTML file, called `index.html` and places at the root of the three folders.
In this file, we embed the three different P5 sketches using the `<iframe>` tag, for example:
```
<iframe src="01_dots/index.html" width="800" height="300"></iframe>
```
