># HTML Paragraphs

## `<p>` Element

A paragraph always starts on a new line, and is usually a block of text.
The HTML `<p>` element defines a paragraph. A paragraph always starts on a new line, and browsers automatically add some white space (a margin) before and after a paragraph.

## [Example](paragraph.html)
```html
<p>MSK Institute is best for coding classes</p>
<p>And Computer Courses</p>
```

## HTML Display
You cannot be sure how HTML will be displayed. Large or small screens, and resized windows will create different results. With HTML, you cannot change the display by adding extra spaces or extra lines in your HTML code. The browser will automatically remove any extra spaces and lines when the page is displayed:
## Example
```html
<p>
This paragraph
contains a lot of lines
in the source code,
but the browser
ignores it.
</p>

<p>
This paragraph
contains         a lot of spaces
in the source         code,
but the        browser
ignores it.
</p>
```

________________________________________
## HTML Horizontal Rules
The `<hr>` tag defines a thematic break in an HTML page, and is most often displayed as a horizontal rule.
The `<hr>` element is used to separate content (or define a change) in an HTML page:

### Example
```html
<h1>This is heading 1</h1>
<p>This is some text.</p>
<hr>
<h2>This is heading 2</h2>
<p>This is some other text.</p>
<hr>
```
The `<hr>` tag is an empty tag, which means that it has no end tag.
___
## HTML Line Breaks
The HTML `<br>` element defines a line break.
Use `<br>` if you want a line break (a new line) without starting a new paragraph:
### Example
```html
<p>This is<br>a paragraph<br>with line breaks.</p>
```
The `<br>` tag is an empty tag, which means that it has no end tag.
___

## The Application Problem

This Application will display on a single line:

### Example
```html
<p>
To
The Manager
MSK Institute

Date : 18 Jan. 2024

Subject : Leave Application for two Days.

Respected sir/madam

With due Respect, I beg to say that I am a student of class 10th in your school. I am not feeling well today and also have some weakness. Hence I request you to please grant me two days leave.

I hope you will consider my application. I will definitely try to remain present after 2 days.

Thanking you.

Yours obediently
Name : Sumit Kumar
Class : 11th
</p>
```
___

## `<pre>` Tag
The HTML `<pre>` element defines preformatted text.
The text inside a `<pre>` element is displayed in a fixed-width font (usually Courier), and it preserves both spaces and line breaks:

### Example
```html
<pre>
To
The Manager
MSK Institute

Date : 18 Jan. 2024

Subject : Leave Application for two Days.

Respected sir/madam

With due Respect, I beg to say that I am a student of class 10th in your school. I am not feeling well today and also have some weakness. Hence I request you to please grant me two days leave.

I hope you will consider my application. I will definitely try to remain present after 2 days.

Thanking you.

Yours obediently
Name : Sumit Kumar
Class : 11th
</pre>
```
# [<<<Back](./01_heading.md) : [Next>>>](../06_Text_Formatting/Text_Formatting.md)