# HTML Links
Links are found in nearly all web pages. Links allow users to click their way from page to page.

## HTML Links - Hyperlinks
HTML links are hyperlinks.

You can click on a link and jump to another document.

When you move the mouse over a link, the mouse arrow will turn into a little hand.

> Note: A link does not have to be text. A link can be an image or any other HTML element!

## HTML Links - Syntax
The HTML `<a>` tag defines a hyperlink. It has the following syntax:
```html
<a href="url">link text</a>
```
The most important attribute of the `<a>` element is the `href` attribute, which indicates the link's destination.

The *`link`* text is the part that will be visible to the reader.

Clicking on the link text, will send the reader to the specified URL address.

### Example
This example shows how to create a link to W3Schools.com:
```html
<a href="https://mskinstitute.github.io/">Visit MSK Institute</a>
```
By default, links will appear as follows in all browsers:
### Link to a Page section:
To link to a particular section of a webpage:
- use the name attribute or id attribute
- use hyperlink with `#` place where you want to go on a webpage.
 
### Link Colors:
Three types of links are there: active, visited, and unvisited.
- Active: It is in red with an underline.
- Visited: It is purple and underlined.
- Unvisited: It is blue and underlined.
> By CSS we can change the color of the links.

> **Tip:** Links can of course be styled with CSS, to get another look!

## HTML Links - The target Attribute
By default, the linked page will be displayed in the current browser window. To change this, you must specify another target for the link.

The `target` attribute specifies where to open the linked document.

The `target` attribute can have one of the following values:

- `_self` - Default. Opens the document in the same window/tab as it was clicked
- `_blank` - Opens the document in a new window or tab
- `_parent` - Opens the document in the parent frame
- `_top` - Opens the document in the full body of the window

### Example
Use target="_blank" to open the linked document in a new browser window or tab:
```html
<a href="https://mskinstitute.github.io/" target="_blank"> Visit MSK Institute </a>
```
## Absolute URLs vs. Relative URLs
Both examples above are using an **absolute URL** (a full web address) in the `href` attribute.

A local link (a link to a page within the same website) is specified with a **relative URL** (without the ` "https://www" ` part):

### Example
```html
<h2>Absolute URLs</h2>
<p><a href="https://www.w3.org/">W3C</a></p>
<p><a href="https://www.google.com/">Google</a></p>

<h2>Relative URLs</h2>
<p><a href="html_images.asp">HTML Images</a></p>
<p><a href="/css/default.asp">CSS Tutorial</a></p>
```

## HTML Links - Use an Image as a Link
To use an image as a link, just put the `<img>` tag inside the `<a>` tag:

### Example
```html
<a href="default.asp">
    <img src="smiley.gif" alt="HTML tutorial" style="width:42px;height:42px;">
</a>
```
## Link to an Email Address
Use mailto: inside the href attribute to create a link that opens the user's email program (to let them send a new email):
```html
<a href="mailto:mrsumitcontact@gmail.com">Send email</a>
```

## Button as a Link
To use an HTML button as a link, you have to add some JavaScript code.

JavaScript allows you to specify what happens at certain events, such as a click of a button:

### Example
```html
<button onclick="document.location='default.asp'">HTML Tutorial</button>
```
> Tip: Learn more about JavaScript in our JavaScript Tutorial.

## Link Titles
The `title` attribute specifies extra information about an element. The information is most often shown as a tooltip text when the mouse moves over the element.

### Example
```html
<a href="mskinstitute.github.io/html/" title="Go to MSK Institute HTML section">Visit our HTML Tutorial</a>
```

## More on Absolute URLs and Relative URLs


Use a full URL to link to a web page: 
```html
<a href="mskinstitute.github.io">MSK Institute</a>
```
Link to a page located in the html folder on the current web site: 
```html
<a href="/html/default.asp">HTML tutorial</a>
```
Link to a page located in the same folder as the current page: 
```html
<a href="default.asp">HTML tutorial</a>
```

You can read more about file paths in the chapter HTML File Paths.

## Chapter Summary
- Use the `<a>` element to define a link
- Use the `href` attribute to define the link address
- Use the `target` attribute to define where to open the linked document
- Use the `<img>` element (inside `<a>`) to use an image as a link
- Use the `mailto:` scheme inside the `href` attribute to create a link that opens the user's email program


For a complete list of all available HTML tags, visit our HTML Tag Reference.

HTML Exercises
Test Yourself With Exercises
Exercise:
Use the correct HTML to make the text below into a link to "default.html".

 
>Visit our HTML tutorial.
