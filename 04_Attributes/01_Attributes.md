># HTML Attributes
>
>-   All HTML elements can have **attributes**
>-   Attributes provide **additional information** about elements
>-   Attributes are always specified in **Opening `<>` tag**
>-   Attributes usually come in name/value pairs like: **name="value"**
>---

<br>

>---
>## `href` Attribute
>
>The `<a>` tag defines a hyperlink. The `href` attribute specifies the URL of the page the link goes to:
>
>```html
><a href="https://github.com/mskinstitute">Visit MSK !nstitute</a>
>```
>---

<br>

>---
>## `src` Attribute
>
>The `<img>` tag is used to embed an image in an HTML page. The `src` attribute specifies the path to the image to be displayed:
>
>```html
><img src="https://github.com/mskinstitute/html/blob/main/assets/img/hello.png?raw=true" >
>```
>---

<br>

>---
>## `width` and `height` Attributes
>
>The `<img>` tag should also contain the `width` and `height` attributes, which specify the width and height of the image (in pixels):
>
>```html
><img src="https://github.com/mskinstitute/html/blob/main/assets/img/hello.png?raw=true" width="500" height="600">
>```
>---

<br>

>---
>## `alt` Attribute
>
>The required `alt` attribute for the `<img>` tag specifies an alternate text for an image, if the image for some reason cannot be displayed. This can be due to a slow connection, or an error in the `src` attribute, or if the user uses a screen reader.
>
>```html
><img src="https://github.com/mskinstitute/html/blob/main/assets/img/hello.png?raw=true" alt="Student With Laptop">
>```
>---

<br>

>---
>## `style` Attribute
>
>The `style` attribute is used to add styles to an element, such as color, font, size, and more.
>
>```html
><p style="color:red;">This is a red paragraph.</p>
>```
>---

<br>

>---
>## `title` Attribute
>
>The `title` attribute defines some extra information about an element.
>
>The value of the title attribute will be displayed as a `tooltip` when you mouse over the element:
>
>```html
><p title="I'm a tooltip">This is a paragraph.</p>
>```
>
>### We Suggest: Always Use Lowercase Attributes
>
>The HTML standard does not require lowercase attribute names.
>
>The title attribute (and all other attributes) can be written with uppercase or lowercase like **title** or **TITLE**.
>
>However, MSK **recommends** lowercase attributes in HTML, and **demands** lowercase attributes for stricter document types like XHTML.
>
>we always use lowercase attribute names.
>
>## We Suggest: Always Quote `""` Attribute Values
>
>The HTML standard does not require quotes around attribute values.
>
>However, MSK **recommends** quotes in HTML, and **demands** quotes for stricter document types like XHTML.
>
>### Good ✅:
>```html
><a href="https://www.mskinstitute.com/html/">Visit our HTML tutorial</a>
>```
>
>### Bad ❌:
>```html
><a href=https://www.mskinstitute.com/html/>Visit our HTML tutorial</a>
>```
>
>Sometimes you have to use quotes. This example will not display the title attribute correctly, because it contains a space:
>
>```html
><p title=About MSK !institute>
>```
>
>we always use quotes around attribute values.
>
>### Single `'` or Double `"` Quotes?
>
>Double quotes around attribute values are the most common in HTML, but single quotes can also be used.
>
>In some situations, when the attribute value itself contains double quotes, it is necessary to use single quotes:
>```HTML
><p title='Sumit "HTML" Developer'>
>```
>
>Or:
>```HTML
><p title="Sumit 'HTML' Developer">
>```
>---

<br>

>---
>## `lang` Attribute
>
>You should always include the `lang` attribute inside the `<html>` tag, to declare the language of the Web page. This is meant to assist search engines and browsers.
>
>The following example specifies English as the language:
>
>```html
><!DOCTYPE html>
><html lang="en">
><body>
>...
></body>
></html>
>```
>
>Country codes can also be added to the language code in the `lang` attribute. So, the first two characters define the language of the HTML page, and the last two characters define the country.
>
>The following example specifies English as the language and United States as the country:
>```html
><!DOCTYPE html>
><html lang="en-US">
><body>
>...
></body>
></html>
>```
> All `lang` Code list here 👉 [here](https://www.w3schools.com/tags/ref_language_codes.asp)
>---

<br>

# [<<<Back](../03_Element/01_Element.md) : [Next>>>](../05_Heading_&_Paragraphs/01_heading.md)