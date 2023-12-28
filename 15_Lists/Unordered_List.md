# HTML Unordered Lists
The HTML `<ul>` tag defines an unordered (bulleted) list.

Unordered HTML List
An unordered list starts with the `<ul>` tag. Each list item starts with the `<li>` tag.

The list items will be marked with bullets (small black circles) by default:

#Example
```html
<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>
```
## Unordered HTML List - Choose List Item Marker
The CSS list-style-type property is used to define the style of the list item marker. It can have one of the following values:

### Value	Description
- disc	Sets the list item marker to a bullet (default)
- circle	Sets the list item marker to a circle
- square	Sets the list item marker to a square
- none	The list items will not be marked
### Example - Disc
```html
<ul style="list-style-type:disc;">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>
```
### Example - Circle
```html
<ul style="list-style-type:circle;">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>
```
### Example - Square
```html
<ul style="list-style-type:square;">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>
```
### Example - None
```html
<ul style="list-style-type:none;">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>
```
## Nested HTML Lists
Lists can be nested (list inside list):

### Example
```html
<ul>
  <li>Coffee</li>
  <li>Tea
    <ul>
      <li>Black tea</li>
      <li>Green tea</li>
    </ul>
  </li>
  <li>Milk</li>
</ul>
```
> Note: A list item (`<li>`) can contain a new list, and other HTML elements, like images and links, etc.

## Horizontal List with CSS
HTML lists can be styled in many different ways with CSS.

One popular way is to style a list horizontally, to create a navigation menu:

### Example
```html
<!DOCTYPE html>
<html>
<head>
<style>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333333;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 16px;
  text-decoration: none;
}

li a:hover {
  background-color: #111111;
}
</style>
</head>
<body>

<ul>
  <li><a href="#home">Home</a></li>
  <li><a href="#news">News</a></li>
  <li><a href="#contact">Contact</a></li>
  <li><a href="#about">About</a></li>
</ul>

</body>
</html>
```
> Tip: You can learn much more about CSS in our CSS Tutorial.

## Chapter Summary

-Use the HTML `<ul>` element to define an unordered list
-Use the CSS list-style-type property to define the list item marker
-Use the HTML `<li>` element to define a list item
-Lists can be nested
-List items can contain other HTML elements
-Use the CSS property float:left to display a list horizontally

### Exercise:
Finish the HTML code to make an unordered list.
```html
<li>Coffee</li>
<li>Tea</li>
<li>Milk</li>
```