# HTML Table Borders
HTML tables can have borders of different styles and shapes.

## How To Add a Border
![Alt text](images/image-1.png)

To add a border, use the `border` attribute in `<table>` element Or CSS border property on `table`, `th`, and `td` elements:
### `border` : Attribute
```html
<table border>
    content...
</table>
```

### Using CSS
```css
table, th, td {
  border: 1px solid black;
}
```

## Collapsed Table Borders
To avoid having double borders like in the example above, set the CSS `border-collapse` property to `collapse`.

This will make the borders collapse into a single border:

![Alt text](images/image-2.png)

### Example
```css
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}
```
## Style Table Borders

If you set a background color of each cell, and give the border a white color (the same as the document background), you get the impression of an invisible border:

![Alt text](images/image-3.png)

### Example
```css
table, th, td {
  border: 1px solid white;
  border-collapse: collapse;
}
th, td {
  background-color: #96D4D4;
}
```

## Round Table Borders
With the `border-radius` property, the borders get rounded corners:

![Alt text](images/image-4.png)	 
 	 	 
Example
```css
table, th, td {
  border: 1px solid black;
  border-radius: 10px;
}
```
Skip the border around the table by leaving out `table` from the css selector:

![Alt text](images/image-5.png)
 	 	 
Example
```css
th, td {
  border: 1px solid black;
  border-radius: 10px;
}
```
## Dotted Table Borders
With the `border-style` property, you can set the appearance of the border.

![Alt text](images/image-6.png)

The following values are allowed:

![Alt text](images/image-7.png)

### Example
```css
th, td {
  border-style: dotted;
}
```
## Border Color

With the `border-color` property, you can set the color of the border.

![Alt text](images/image-8.png)

### Example
```css
th, td {
  border-color: #96D4D4;
}
```
