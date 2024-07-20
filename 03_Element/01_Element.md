># HTML Elements

>## What is an HTML Element?
>An HTML element is defined by a `Opening tag`, some `content`, and an `Closing tag`:
>
>![alt text](./html_element.png) 
>
>```html
><h1>MSK Institute</h1>
><p>MSK Institute is the best</p>
>```
>
>| Opening (<_>) | Content | Closing (</_>) |
>| ------ | ------ | ------ |
>| `<h1>` | MSK Institute | `</h1>` |
>| `<p>` | MSK Institute is the best | `</p>` |
>| `<br>` | No Content | No Closing Tag  |
>
> >**Note:** Some HTML elements have `no content` (like: `<br>` element) These elements are called `empty` elements. Empty elements do not have an closing `</>` tag!
>
>---

<br>

>## Nested HTML Elements
>HTML elements can be `nested` (this means that elements can contain other elements).
>
>
>The following example contains four HTML elements (`<html>`, `<body>`, `<h1>` and `<p>`):
>
>```html
><!DOCTYPE html>  
><html>  
>
>   <body>  
>       <h1>MSK !nstitute</h1>  
>       <p>Best for learn coding</p>
>   </body>  
>
></html>
>```
>
>### Explained
>
>The `<html>` element is the root element and it defines the whole HTML document.
>
>It has a opening tag `<html>` and an closing tag `</html>`.
>
>Then, inside the `<html>` element there is a `<body>` element:
>```html
><body>  
>  
><h1>MSK !nstitute</h1>  
><p>Best for learn coding</p>  
>  
></body>
>```
>
>The `<body>` element defines the document's body.
>
>It has a start tag `<body>` and an end tag `</body>`.
>
>Then, inside the `<body>` element there are two other elements: `<h1>` and `<p>`:
>```html
><h1>MSK !nstitute</h1>  
><p>Best for learn coding</p>
>```
>
>The `<h1>` element defines a heading.
>
>It has a start tag `<h1>` and an end tag `</h1>`:
>```html
><h1>MSK !nstitute</h1>
>```
>
>The `<p>` element defines a paragraph.
>
>It has a start tag `<p>` and an end tag `</p>`:
>```html
><p>Best for learn coding</p>
>```

<br>

># Never Skip the End `</>` Tag
>
>Some HTML elements will display correctly, even if you forget the end tag:
>
>### Example
>```html
><html>  
><body>  
>  
><h1>MSK Institue  
><p>This is a paragraph
>  
></body>  
></html>
>```
>
>**However, never rely on this! Unexpected results and errors may occur if you forget the end tag!**
>
>## Empty HTML Elements
>
>HTML elements with no content are called empty elements.
>
>The `<br>` tag defines a line break, and is an empty element without a closing tag:
>
>```html
><p>This is a <br> paragraph with a line break.</p>
>```
>---

<br>

>## HTML is Not Case Sensitive
>
> - HTML tags are not case sensitive: `<P>` means the same as `<p>`.
> - The HTML standard does not require lowercase tags, but we are recommends lowercase in HTML
>---

# [<<<Back](../02_SetUp/SetUp.md) : [Next>>>](../04_Attributes/01_Attributes.md)
