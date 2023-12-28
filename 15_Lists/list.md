# HTML Lists
HTML lists allow web developers to group a set of related items in lists.

### Example

<h4>An Unordered HTML List</h4>
<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>  

<h4>An Ordered HTML List</h4>
<ol>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>

## Unordered HTML List
An unordered list starts with the `<ul>` tag. Each list item starts with the `<li>` tag.

The list items will be marked with bullets (small black circles) by default:

### Example
```html
<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>
```
## Ordered HTML List
An ordered list starts with the `<ol>` tag. Each list item starts with the `<li>` tag.

The list items will be marked with numbers by default:

### Example
```html
<ol>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>
```

## HTML Description Lists
HTML also supports description lists.

A description list is a list of terms, with a description of each term.

<dl>
  <dt>Coffee</dt>
  <dd>- black hot drink</dd>
  <dt>Milk</dt>
  <dd>- white cold drink</dd>
</dl>

The `<dl>` tag defines the description list, the `<dt>` tag defines the term (name), and the `<dd>` tag describes each term:

### Example
```html
<dl>
  <dt>Coffee</dt>
  <dd>- black hot drink</dd>
  <dt>Milk</dt>
  <dd>- white cold drink</dd>
</dl>
```

## Exercise:
Add a list item with the text "Coffee" inside the `<ul>` element.
```html
<ul>____ Coffee ____</ul>
```

### HTML List Tags
Tag	Description

- `<ul>` Defines an unordered list
- `<ol>` Defines an ordered list
- `<li>` Defines a list item
- `<dl>` Defines a description list
- `<dt>` Defines a term in a description list
- `<dd>` Describes the term in a description list