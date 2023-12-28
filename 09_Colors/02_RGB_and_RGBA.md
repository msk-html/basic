# HTML RGB and RGBA Colors

An RGB color value represents RED, GREEN, and BLUE light sources.

An RGBA color value is an extension of RGB with an Alpha channel (opacity).

## RGB Color Values
In HTML, a color can be specified as an RGB value, using this formula:

**rgb(red, green, blue)**

Each parameter (red, green, and blue) defines the intensity of the color with a value between 0 and 255.

This means that there are 256 x 256 x 256 = 16777216 possible colors!

For example, rgb(255, 0, 0) is displayed as red, because red is set to its highest value (255), and the other two (green and blue) are set to 0.

Another example, rgb(0, 255, 0) is displayed as green, because green is set to its highest value (255), and the other two (red and blue) are set to 0.

To display black, set all color parameters to 0, like this: rgb(0, 0, 0).

To display white, set all color parameters to 255, like this: rgb(255, 255, 255).

### [Example](changeRGBvalue.html)

<h1 style="background-color:rgb(255, 0, 0);">rgb(255, 0, 0)</h1>
<h1 style="background-color:rgb(0, 0, 255);">rgb(0, 0, 255)</h1>
<h1 style="background-color:rgb(60, 179, 113);">rgb(60, 179, 113)</h1>
<h1 style="background-color:rgb(238, 130, 238);">rgb(238, 130, 238)</h1>
<h1 style="background-color:rgb(255, 165, 0);">rgb(255, 165, 0)</h1>
<h1 style="background-color:rgb(106, 90, 205);">rgb(106, 90, 205)</h1>

## Shades of Gray

Shades of gray are often defined using equal values for all three parameters:

### Example
<h1 style="background-color:rgb(60, 60, 60);">rgb(60, 60, 60)</h1>
<h1 style="background-color:rgb(100, 100, 100);">rgb(100, 100, 100)</h1>
<h1 style="background-color:rgb(140, 140, 140);">rgb(140, 140, 140)</h1>
<h1 style="background-color:rgb(180, 180, 180); color:black;">rgb(180, 180, 180)</h1>
<h1 style="background-color:rgb(200, 200, 200); color:black;">rgb(200, 200, 200)</h1>
<h1 style="background-color:rgb(240, 240, 240); color:black;">rgb(240, 240, 240)</h1>

## RGBA Color Values
RGBA color values are an extension of RGB color values with an Alpha channel - which specifies the opacity for a color.

An RGBA color value is specified with:

### rgba(red, green, blue, alpha)

The alpha parameter is a number between 0.0 (fully transparent) and 1.0 (not transparent at all):

Experiment by mixing the RGBA values below:

### [Example](changeRGBAvalue.html)

<h1 style="background-color:rgba(255, 99, 71, 0);">rgba(255, 99, 71, 0)</h1>
<h1 style="background-color:rgba(255, 99, 71, 0.2);">rgba(255, 99, 71, 0.2)</h1>
<h1 style="background-color:rgba(255, 99, 71, 0.4);">rgba(255, 99, 71, 0.4)</h1>
<h1 style="background-color:rgba(255, 99, 71, 0.6);">rgba(255, 99, 71, 0.6)</h1>
<h1 style="background-color:rgba(255, 99, 71, 0.8);">rgba(255, 99, 71, 0.8)</h1>
<h1 style="background-color:rgba(255, 99, 71, 1);">rgba(255, 99, 71, 1)</h1>

## Exercise:
Insert the correct RGB color values to make the background color completely blue.
```html
<p style="background-color:rgb(___, ___, ___)">This is a paragraph.</p>
```