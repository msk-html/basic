# HTML Styles - CSS
CSS stands for Cascading Style Sheets.

CSS saves a lot of work. It can control the layout of multiple web pages all at once.

CSS = Styles and Colors


## What is CSS?
Cascading Style Sheets (CSS) is used to format the layout of a webpage.

With CSS, you can control the color, font, the size of text, the spacing between elements, how elements are positioned and laid out, what background images or background colors are to be used, different displays for different devices and screen sizes, and much more!

> Tip: The word `cascading` means that a style applied to a parent element will also apply to all children elements within the parent. So, if you set the color of the body text to "blue", all headings, paragraphs, and other text elements within the body will also get the same color (unless you specify something else)!

## Using CSS
CSS can be added to HTML documents in 3 ways:

- **Inline** - by using the `style` attribute inside HTML elements
- **Internal** - by using a `<style>` element in the `<head>` section
- **External** - by using a `<link>` element to link to an external CSS file

The most common way to add CSS, is to keep the styles in external CSS files. However, in this tutorial we will use inline and internal styles, because this is easier to demonstrate, and easier for you to try it yourself.

## Inline CSS
An inline CSS is used to apply a unique style to a single HTML element.

An inline CSS uses the `style` attribute of an HTML element.

The following example sets the text color of the `<h1>` element to blue, and the text color of the `<p>` element to red:

### [Example](style.html)
```html
<h1 style="color:blue;">MSK Institute</h1>
<p style="color:red;">For Coding Classes</p>
```
## Internal CSS
An internal CSS is used to define a style for a single HTML page.

An internal CSS is defined in the `<head>` section of an HTML page, within a `<style>` element.

The following example sets the text color of ALL the `<h1>` elements (on that page) to blue, and the text color of ALL the `<p>` elements to red. In addition, the page will be displayed with a "powderblue" background color: 

### Example
```html
<!DOCTYPE html>
<html>
    <head>
        <style>
            body {background-color: powderblue;}
            h1   {color: blue;}
            p    {color: red;}
        </style>
    </head>
<body>
    <h1>This is a heading</h1>
    <p>This is a paragraph.</p>
</body>
</html>
```
## External CSS
An external style sheet is used to define the style for many HTML pages.

To use an external style sheet, add a link to it in the `<head>` section of each HTML page:

### Example
```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>
</html>
```
The external style sheet can be written in any text editor. The file must not contain any HTML code, and must be saved with a .css extension.

Here is what the "styles.css" file looks like:

`"styles.css":`
```css
body {
  background-color: powderblue;
}
h1 {
  color: blue;
}
p {
  color: red;
}
```
> Tip: With an external style sheet, you can change the look of an entire web site, by changing one file!

## CSS Colors, Fonts and Sizes
Here, we will demonstrate some commonly used CSS properties. You will learn more about them later.

The CSS `color` property defines the text color to be used.

The CSS `font-family` property defines the font to be used.

The CSS `font-size` property defines the text size to be used.

### Example
Use of CSS color, font-family and font-size properties:
```html
<!DOCTYPE html>
<html>
<head>
<style>
h1 {
  color: blue;
  font-family: verdana;
  font-size: 300%;
}
p {
  color: red;
  font-family: courier;
  font-size: 160%;
}
</style>
</head>
<body>

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>
</html>
```

## CSS Border

The CSS border property defines a border around an HTML element.

> Tip: You can define a border for nearly all HTML elements.

### Example

Use of CSS border property: 
```css
p {
  border: 2px solid powderblue;
}
```
## CSS Padding
The CSS padding property defines a padding (space) between the text and the border.

### Example
Use of CSS border and padding properties:
```css
p {
  border: 2px solid powderblue;
  padding: 30px;
}
```
## CSS Margin
The CSS margin property defines a margin (space) outside the border.

### Example
Use of CSS border and margin properties:
```css
p {
  border: 2px solid powderblue;
  margin: 50px;
}
```
## Link to External CSS
External style sheets can be referenced with a full URL or with a path relative to the current web page.

### Example
This example uses a full URL to link to a style sheet:
```html
<link rel="stylesheet" href="https://www.w3schools.com/html/styles.css">
```
### Example
This example links to a style sheet located in the html folder on the current web site: 
```html
<link rel="stylesheet" href="/html/styles.css">
```
### Example

This example links to a style sheet located in the same folder as the current page:
```html
<link rel="stylesheet" href="styles.css">
```
You can read more about file paths in the chapter HTML File Paths.

# Link & Script Tags

The `<link>` and `<script>` tags are essential elements within an HTML document's `<head>` section. They serve various purposes, like linking external stylesheets or including JavaScript files.

## The `<link>` Tag

The `<link>` tag is commonly used to link external stylesheets to an HTML document. It's a self-closing tag, meaning it doesn't require a closing tag.

Below is an example HTML code snippet that includes a `<link>` tag to link an external stylesheet:

```html
<link rel="stylesheet" type="text/css" href="styles.css"> 
```
<video autoplay="autoplay" loop="loop" muted="" controls="controls" width="630" height="296"> <source src="https://cwh-full-next-space.fra1.cdn.digitaloceanspaces.com/tutorial/html-link-script-tags/css-added-link.mp4" type="video/mp4">Your browser does not support the video tag.</video>

## The `<script>` Tag

The `<script>` tag is used to include JavaScript code or files in an HTML document. Unlike the `<link>` tag, the `<script>` tag must be closed with a `</script>` tag.

Below is an example HTML code snippet that includes a `<script>` tag to link an external JavaScript file:

```html
<script src="script.js" type="text/javascript"></script>
```

<video autoplay="autoplay" loop="loop" muted="" controls="controls" width="630" height="296"> <source src="https://cwh-full-next-space.fra1.cdn.digitaloceanspaces.com/tutorial/html-link-script-tags/script-tag.mp4" type="video/mp4">Your browser does not support the video tag.</video>

## Conclusion

The `<link>` and `<script>` tags are crucial for linking external resources like stylesheets and JavaScript files, enhancing the functionality and presentation of your HTML documents.


## Chapter Summary

- Use the HTML style attribute for inline styling
- Use the HTML `<style>` element to define internal CSS
- Use the HTML `<link>` element to refer to an external CSS file
- Use the HTML `<head>` element to store `<style>` and `<link>` elements
- Use the CSS color property for text colors
- Use the CSS font-family property for text fonts
- Use the CSS font-size property for text sizes
- Use the CSS border property for borders
- Use the CSS padding property for space inside the border
- Use the CSS margin property for space outside the border

> Tip: You can learn much more about CSS in our CSS Tutorial.

### Exercise:
Use CSS to set the background color of the document (body) to yellow.
```html
<!DOCTYPE html>
<html>
    <head>
        <style>
            ____{
                ____________ :yellow;
            }
        </style>
    </head>
<body>

    <h1>My Home Page</h1>

</body>
</html>
```