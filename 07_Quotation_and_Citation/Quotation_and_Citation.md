# HTML Quotation and Citation Elements

In this chapter we will go through the `<blockquote>,<q>, <abbr>, <address>, <cite>,` and `<bdo>` HTML elements.

Here is a quote from WWF's website:

## `<blockquote>` for Quotations

The `<blockquote>` element defines a section that is quoted from another source.

Browsers usually indent `<blockquote>` elements.
### [Example](example1.html)

```html
<p>Here is a quote from WWF's website:</p>
<blockquote cite="http://www.worldwildlife.org/who/index.html">
For 50 years, WWF has been protecting the future of nature.
The world's leading conservation organization,
WWF works in 100 countries and is supported by
1.2 million members in the United States and
close to 5 million globally.
</blockquote>
```

## `<q>` for Short Quotations

The HTML `<q>` tag defines a short quotation.
Browsers normally insert quotation marks around the quotation.

### Example
```html
<p>WWF's goal is to: <q>Build a future where people live in harmony with nature.</q></p>
```

## `<abbr>` for Abbreviations

The HTML `<abbr>` tag defines an abbreviation or an acronym, like "HTML", "CSS", "Mr.", "Dr.", "ASAP", "ATM".
Marking abbreviations can give useful information to browsers, translation systems and search-engines.
Tip: Use the global title attribute to show the description for the abbreviation/acronym when you mouse over the element

### Example
```html
<p>The <abbr title="Mr Sumit Kumar">MSK</abbr> was founded in 2023.</p>
```

## `<address>` for Contact Information
The HTML `<address>` tag defines the contact information for the author/owner of a document or an article.

The contact information can be an email address, URL, physical address, phone number, social media handle, etc.

The text in the `<address>` element usually renders in italic, and browsers will always add a line break before and after the `<address>` element.

### Example

```html
<address>
Written by John Doe.<br>
Visit us at:<br>
Example.com<br>
Box 564, Disneyland<br>
USA
</address>
```

## `<bdo>` for Bi-Directional Override

BDO stands for Bi-Directional Override.
The HTML `<bdo>` tag is used to override the current text direction:

### Example
```html
<bdo dir="rtl">This text will be written from right to left</bdo>
```
# [<<<Back](../06_Text_Formatting/Text_Formatting.md) : [Next>>>](../08_Comments/comment.md)