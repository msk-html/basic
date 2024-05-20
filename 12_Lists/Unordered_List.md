# HTML Unordered Lists
The HTML `<ul>` tag defines an unordered (bulleted) list.

Unordered HTML List
An unordered list starts with the `<ul>` tag. Each list item starts with the `<li>` tag.

The list items will be marked with bullets (small black circles) by default:

```html
<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>
```
# `list-style-type` - Choose List Item Marker
The CSS `list-style-type` property is used to define the style of the list item marker. It can have one of the following values:

1. [disc](#disc)
2. [circle](#circle)
3. [square](#square)
4. [none](#none)

### disc
```html
<ul style="list-style-type:disc;">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>
```
### circle
```html
<ul style="list-style-type:circle;">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>
```
### square
```html
<ul style="list-style-type:square;">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>
```
### none
```html
<ul style="list-style-type:none;">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>
```


## Nested HTML Lists
Lists can be nested (list inside list):

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

# [<<< Back](list.md)