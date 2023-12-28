# HTML HSL and HSLA Colors
HSL stands for hue, saturation, and lightness.

HSLA color values are an extension of HSL with an Alpha channel (opacity).

## HSL Color Values
In HTML, a color can be specified using hue, saturation, and lightness (HSL) in the form:

### `hsl(hue, saturation, lightness)`

Hue is a degree on the color wheel from 0 to 360. 0 is red, 120 is green, and 240 is blue.

Saturation is a percentage value. 0% means a shade of gray, and 100% is the full color.

Lightness is also a percentage value. 0% is black, and 100% is white.

Experiment by mixing the HSL values below:


### Example

<h1 style="background-color:hsl(0, 100%, 50%);">hsl(0, 100%, 50%)</h1>
<h1 style="background-color:hsl(240, 100%, 50%);">hsl(240, 100%, 50%)</h1>
<h1 style="background-color:hsl(147, 50%, 47%);">hsl(147, 50%, 47%)</h1>
<h1 style="background-color:hsl(300, 76%, 72%);">hsl(300, 76%, 72%)</h1>
<h1 style="background-color:hsl(39, 100%, 50%);">hsl(39, 100%, 50%)</h1>
<h1 style="background-color:hsl(248, 53%, 58%);">hsl(248, 53%, 58%)</h1>

### Saturation
Saturation can be described as the intensity of a color.

100% is pure color, no shades of gray.

50% is 50% gray, but you can still see the color.

0% is completely gray; you can no longer see the color.

### Example
<h1 style="background-color:hsl(0, 100%, 50%);">hsl(0, 100%, 50%)</h1>
<h1 style="background-color:hsl(0, 80%, 50%);">hsl(0, 80%, 50%)</h1>
<h1 style="background-color:hsl(0, 60%, 50%);">hsl(0, 60%, 50%)</h1>
<h1 style="background-color:hsl(0, 40%, 50%);">hsl(0, 40%, 50%)</h1>
<h1 style="background-color:hsl(0, 20%, 50%);">hsl(0, 20%, 50%)</h1>
<h1 style="background-color:hsl(0, 0%, 50%);">hsl(0, 0%, 50%)</h1>

### Lightness
The lightness of a color can be described as how much light you want to give the color, where 0% means no light (black), 50% means 50% light (neither dark nor light), and 100% means full lightness (white).

### Example

<h1 style="background-color:hsl(0, 100%, 0%);">hsl(0, 100%, 0%)</h1>
<h1 style="background-color:hsl(0, 100%, 25%);">hsl(0, 100%, 25%)</h1>
<h1 style="background-color:hsl(0, 100%, 50%);">hsl(0, 100%, 50%)</h1>
<h1 style="background-color:hsl(0, 100%, 75%);">hsl(0, 100%, 75%)</h1>
<h1 style="background-color:hsl(0, 100%, 90%);">hsl(0, 100%, 90%)</h1>
<h1 style="background-color:hsl(0, 100%, 100%);">hsl(0, 100%, 100%)</h1>

## Shades of Gray
Shades of gray are often defined by setting the hue and saturation to 0, and adjusting the lightness from 0% to 100% to get darker/lighter shades:

### Example
<h1 style="background-color:hsl(0, 0%, 20%);">hsl(0, 0%, 20%)</h1>
<h1 style="background-color:hsl(0, 0%, 30%);">hsl(0, 0%, 30%)</h1>
<h1 style="background-color:hsl(0, 0%, 40%);">hsl(0, 0%, 40%)</h1>
<h1 style="background-color:hsl(0, 0%, 60%);">hsl(0, 0%, 60%)</h1>
<h1 style="background-color:hsl(0, 0%, 70%);">hsl(0, 0%, 70%)</h1>
<h1 style="background-color:hsl(0, 0%, 90%);">hsl(0, 0%, 90%)</h1>

## HSLA Color Values
HSLA color values are an extension of HSL color values, with an Alpha channel - which specifies the opacity for a color.

An HSLA color value is specified with:

`hsla(hue, saturation, lightness, alpha)`

The alpha parameter is a number between 0.0 (fully transparent) and 1.0 (not transparent at all):

Experiment by mixing the HSLA values below:


### Example
<h1 style="background-color:hsla(9, 100%, 64%, 0);">hsla(9, 100%, 64%, 0)</h1>
<h1 style="background-color:hsla(9, 100%, 64%, 0.2);">hsla(9, 100%, 64%, 0.2)</h1>
<h1 style="background-color:hsla(9, 100%, 64%, 0.4);">hsla(9, 100%, 64%, 0.4)</h1>
<h1 style="background-color:hsla(9, 100%, 64%, 0.6);">hsla(9, 100%, 64%, 0.6)</h1>
<h1 style="background-color:hsla(9, 100%, 64%, 0.8);">hsla(9, 100%, 64%, 0.8)</h1>
<h1 style="background-color:hsla(9, 100%, 64%, 1);">hsla(9, 100%, 64%, 1)</h1>

### Exercise:
Insert the HSLA value to make a color with no hue, 100% saturation, 50% lightness, and 50% transparency.
```html
<p style="color:____(___, ___, ___)">This is a paragraph.</p>
```