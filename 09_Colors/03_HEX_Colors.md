# HTML HEX Colors
A hexadecimal color is specified with: #RRGGBB, where the RR (red), GG (green) and BB (blue) hexadecimal integers specify the components of the color.

## HEX Color Values
In HTML, a color can be specified using a hexadecimal value in the form:

### `#rrggbb`
Where rr (red), gg (green) and bb (blue) are hexadecimal values between 00 and ff (same as decimal 0-255).

For example, #ff0000 is displayed as red, because red is set to its highest value (ff), and the other two (green and blue) are set to 00.

Another example, #00ff00 is displayed as green, because green is set to its highest value (ff), and the other two (red and blue) are set to 00.

To display black, set all color parameters to 00, like this: #000000.

To display white, set all color parameters to ff, like this: #ffffff.

Experiment by mixing the HEX values below:

### [Example](changeHEXvalue.html)
<h1 style="background-color:#ff0000;">#ff0000</h1>
<h1 style="background-color:#0000ff;">#0000ff</h1>
<h1 style="background-color:#3cb371;">#3cb371</h1>
<h1 style="background-color:#ee82ee;">#ee82ee</h1>
<h1 style="background-color:#ffa500;">#ffa500</h1>
<h1 style="background-color:#6a5acd;">#6a5acd</h1>

## Shades of Gray
Shades of gray are often defined using equal values for all three parameters:

### Example

<h1 style="background-color:#404040;">#404040</h1>
<h1 style="background-color:#686868;">#686868</h1>
<h1 style="background-color:#a0a0a0;">#a0a0a0</h1>
<h1 style="background-color:#bebebe; color:black">#bebebe</h1>
<h1 style="background-color:#dcdcdc; color:black">#dcdcdc</h1>
<h1 style="background-color:#f8f8f8; color:black">#f8f8f8</h1>

## Exercise:
Insert the correct HEX value to make the text color white.
```html
<p style="color: #______">This is a paragraph.</p>
```