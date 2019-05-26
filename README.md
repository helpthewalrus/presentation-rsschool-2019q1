#Subtitles

[slide 1]
Canvas is a 2D drawing API added to HTML and supported by most browsers.
Canvas allows you to draw anything you want directly in the web browser without the use of plugins like Flash or Java.
Essentially the browser gives you a rectanglar area on the screen that you can draw into. You can draw lines, shapes, images, text, etc.

[slide 2]
This is an example of what some Canvas code looks like where the square is drawn by context.fillRect() function.
It's important to understand that Canvas is for drawing pixels.
It has no shapes or vectors. There are no objects to attach event handlers to.

[slide 3]
Let's talk about pros and cons of Canvas.
Canvas pros are:
1. It's a great choice for charts, graphs, dynamic diagrams, and video games;
2. Detailed control over when and how pixels are rendered;
3. Animation and rendering accelerate because it uses less memory.
Canvas cons are:
1. Does not automatically adjust to display pixel ratio, resulting in blurry text;
2. There is no support for event handlers and css styling (only <canvas> element);
3. Increases code complexity for animations, basic configurations, etc.;
4. Slow when drawing large objects or when managing a large canvas.

[slide 4]
Before diving into working with Canvas, let's talk about where you can use it.
Canvas is now a stable API and most modern browsers support it to some extent.
Even Internet Explorer supports it starting with IE 9.
On the mobile side most smartphone platforms support it because most of them are based on WebKit.

[slide 5]
Defining fallback content is very important in older browsers which don't support canvas (e.g. versions of IE earlier than 9).
It's very simple: just insert the alternate content inside the <canvas> element.
Browsers that don't support <canvas> will ignore the container and render the fallback content inside it and vice versa.
For example, we could provide a text description or a static image of the dynamically rendered content.

[slide 6]
The canvas element is initially blank, that's why a script first needs to access the rendering context and draw on it.
Method called getContext(), used to obtain the rendering context, takes one parameter - the type of context.
We will specify "2d" to get a CanvasRenderingContext2D with its methods.
The first line in the script retrieves the canvas node in the DOM, and getContext() method gives us access to the drawing context.
Scripts can also check for canvas support by simply testing for the presence of the getContext() method..

[slide 7]
Canvas has the origin in the upper left corner with the y axis going down, but you can change origin with transforms.
Canvas spec defines coordinates at the upper left corner of a pixel,
which means that a one pixel wide vertical line starting at 5,0 will actually span half of the adjacent pixels (4.5 to 5.5).
To address this, offset your x coordinate by 0.5, that will give you a line that goes from 5.0 to 6.0 or use an even line width.

[slide 8]
Drawing on Canvas

[slide 9]
Canvas only supports one primitive shape: rectangles.
There are three functions that draw rectangles on the canvas:
1) fillRect(x, y, width, height) - Draws a filled rectangle;
2) strokeRect(x, y, width, height) - Draws a rectangular outline;
3) clearRect(x, y, width, height) - Clears the specified rectangular area, making it fully transparent.
Parameters are the same: x and y specify the position on the canvas, width and height provide the rectangle's size.

[slide 10]
The only other primitive shapes are paths, which are lists of points, connected by segments of lines.
Steps to create shapes with paths are:
1. Create a path using beginPath() function;
2. Use different methods to set paths for objects;
3. Close path using closePath() function, which adds a straight line to the start of the path;
4. Use fill() function to fill the path's content area and stroke() to stroke its outline.
Function fill() closes shapes automatically (no need to call closePath()), but stroke() doesn't.

[slide 11]
The canvas rendering context provides two methods to render text with optional parameter - max width:
1. fillText(text, x, y [, maxWidth]);
2. strokeText(text, x, y [, maxWidth]).
The text is filled using the current fillStyle or strokeStyle.
Among text styling properties you can find:
1. font = value (syntax the same as in CSS);
2. textAlign = value (possibilities: start, end, left, right or center);
3. textBaseline = value (possibilities: top, hanging, middle, alphabetic, ideographic, bottom);
4. direction = value (possibilities: ltr, rtl, inherit).

[slide 12]
Canvas can draw images with the drawImage() function.
There are several forms of drawImage().
You can draw the image directly to the screen at normal scale, or stretch and slice it how you like.
Slicing and stretching images is much faster than other kinds of scaling in games.

[slide 13]
And last, but not the least, is drawing animation on canvas.
On the next slide you will see the walking sprite and now I'll explain how to make him walking.
Firstly, I've prepared a sprite sheet png picture with different states of the sprite,
add canvas element and link to sprite.js in index.html.

[slide 14]
let canvas - HTML canvas element
let ctx - variable 2d context for drawing
const sWidth = 184 - width of the sprite sheet divided by the number of sprites
const sHeight = 325 - height of the sprite sheet
let nStartX = 0 - x axis position of slice starting
let canvasInterval - variable that stores setInterval method

[slide 15]
When the window is loaded we get canvas element, assign to canvas variable and set its width and height properties.
After that create context for drawing, set sprite image and after the sprite sheet is loaded one of the sprite's states is drawn by drawSprite()function.

[slide 16]
In conclusion, I'd like to add that canvas element can be used to draw graphs, combine photos, or create animations.
The examples provided in presentation don't cover all ways of using canvas,
but should give you some clear ideas what you can do with it.