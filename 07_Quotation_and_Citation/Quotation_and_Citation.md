# HTML Quotation and Citation Elements

In this chapter we will go through the `<blockquote>,<q>, <abbr>, <address>, <cite>,` and `<bdo>` HTML elements.

Here is a quote from WWF's website:

## `<blockquote>` for Quotations

The `<blockquote>` element defines a section that is quoted from another source.

Browsers usually indent `<blockquote>` elements.
### [Example](index.html)

```html
<p>Non harum eos ea fuga sint veritatis, id unde animi voluptates porro doloribus nesciunt ad delectus amet recusandae debitis dolores! Repellat quo hic eligendi placeat. Ea?</p>

<blockquote>
    Officiis distinctio voluptates soluta assumenda doloremque deleniti libero molestias rem nostrum voluptatum dolores, velit quibusdam recusandae placeat, tenetur provident rerum cupiditate ad, fuga consequatur excepturi! Sit!
</blockquote>
```

## `<q>` for Short Quotations

The HTML `<q>` tag defines a short quotation.
Browsers normally insert quotation marks around the quotation.

### Example
```html
<p>MSK Institute is the <q>Best for learn Coding & Computer Courses in Shikohabad</q> </p>
```

## `<abbr>` for Abbreviations

The HTML `<abbr>` tag defines an abbreviation or an acronym, like "HTML", "CSS", "Mr.", "Dr.", "ASAP", "ATM".
Marking abbreviations can give useful information to browsers, translation systems and search-engines.
Tip: Use the global title attribute to show the description for the abbreviation/acronym when you mouse over the element

### Example
```html
<p>The <abbr title="MSK Institute">MSK</abbr> was founded in 2023.</p>
```

## `<address>` for Contact Information
The HTML `<address>` tag defines the contact information for the author/owner of a document or an article.

The contact information can be an email address, URL, physical address, phone number, social media handle, etc.

The text in the `<address>` element usually renders in italic, and browsers will always add a line break before and after the `<address>` element.

### Example

```html
<address>
    Written by: Sumit Kumar.<br>
    Visit at: MSK Institute<br>
    Website: mskinstitute.com<br>
    Address: Near Subhash Park, Shikohabad, Firozabad (UP)
</address>
```

## `<bdo>` for Bi-Directional Override

BDO stands for Bi-Directional Override.
The HTML `<bdo>` tag is used to override the current text direction:

### Example
```html
<bdo dir="rtl">Best for learn Coding & Computer Courses in Shikohabad</bdo>
```

```html
<marquee direction="left">MSK Institute</marquee>
```

```html
<!-- Scroll behavior -->
<marquee behavior="scroll" direction="left">Scrolling text</marquee>

<!-- Slide behavior -->
<marquee behavior="slide" direction="right">Sliding text</marquee>

<!-- Alternate behavior -->
<marquee behavior="alternate" direction="left">Bouncing text</marquee>
```

```html
<meter value="0.6">60%</meter>
```

# [<<<Back](../06_Text_Formatting/Text_Formatting.md) : [Next>>>](../08_Comments/comment.md)