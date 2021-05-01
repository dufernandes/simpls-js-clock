# Simple clock using Javascript

This is an example of a simple clock, created using html with a SVG image and javascript.

The idea is is to show the power of SVG, and how one can interate with javascript.

## Executing the clock

In order to run the code, simply checkout the project from github and open with your browser the [index.html](./index.html) file.

## Understanding the code

All the logic is done in the [script.js](./script.js) file. Note that variables representing the clock arms are fetched from the SVG file. Later, the specific date elements are fetched: hour, minute and second. After that, their initial position is caluclated, and a function called `runClock` is executed every second. This very function update the clock.

## References

- How to build a clock with Javascript and CSS - https://blog.idrisolubisi.com/how-to-build-a-clock-with-javascript-and-svg

