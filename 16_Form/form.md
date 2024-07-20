# Introduction to HTML Forms
HTML forms are essential for collecting user input on web pages. Whether it's a search bar, a login screen, or a multi-field registration form, HTML forms play a key role in web interactions. They enable users to submit data, which can be processed, stored, or returned by a server.

## Why Do We Use Forms?
Forms serve as the gateway between the user and the server, allowing for dynamic, interactive web experiences. They are crucial for tasks such as user authentication, data submission, feedback collection, and more. Simply put, forms make websites more engaging and functional.

## HTML Forms Structure:
The fundamental structure of an HTML form is encapsulated within the `<form>` tags. Inside these tags, you'll place various form controls like text fields, checkboxes, radio buttons, and buttons for submitting the form.

```html
<form action="/submit" method="post">
      <!-- Text input for username -->
      <label for="username">Username:</label>
      <input type="text" id="username" name="username" required>
      <br><br>

      <!-- Password input -->
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" required>
      <br><br>

      <!-- Radio buttons for gender -->
      <label for="gender">Gender:</label>

      <br>

      <label for="male">Male</label>
      <input type="radio" id="male" name="gender" value="male">

      <label for="female">Female</label>
      <input type="radio" id="female" name="gender" value="female">
      <br><br>

      <!-- Submit button -->
      <input type="submit" value="Submit">
</form>
```

## How to Use Form Controls?
The `<input>` tag is commonly used to create form controls. The attributes of this tag define the control's behavior.
```html
<input type="" name="" value="">
```
The "type" attribute specifies the type of input control (e.g., `text`, `password`, `checkbox`).

The `"name"` attribute is used for identifying the control, especially when the data is sent to the server.

The `"value"` attribute sets a default value for the control, which the user can overwrite.

### Here is a comprehensive list of input types you can use in html

<table border="1">
    <thead>
    <tr>
    <th> Input Type</th>
    <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td>text</td>
    <td>Allows the user to type a single line of text.</td>
    </tr>
    <tr>
    <td>password</td>
    <td>Allows the user to type a password.</td>
    </tr>
    <tr>
    <td>submit</td>
    <td>Represents a button that, when pressed, submits the form.</td>
    </tr>
    <tr>
    <td>reset</td>
    <td>Represents a button that, when pressed, resets all the form controls to their initial values.</td>
    </tr>
    <tr>
    <td>radio</td>
    <td>Represents an option in a set of options that are mutually exclusive with each other.</td>
    </tr>
    <tr>
    <td>checkbox</td>
    <td>Represents an option in a set that may be selected independently of other options.</td>
    </tr>
    <tr>
    <td>button</td>
    <td>Represents a clickable button.</td>
    </tr>
    <tr>
    <td>color</td>
    <td>Allows the user to select a color.</td>
    </tr>
    <tr>
    <td>date</td>
    <td>Allows the user to select a date.</td>
    </tr>
    <tr>
    <td>datetime-local</td>
    <td>Allows the user to select a date and time with no time zone.</td>
    </tr>
    <tr>
    <td>email</td>
    <td>Allows the user to enter an email address.</td>
    </tr>
    <tr>
    <td>file</td>
    <td>Allows the user to select one or more files from their device storage.</td>
    </tr>
    <tr>
    <td>hidden</td>
    <td>Represents a value that is not displayed but is submitted to the server.</td>
    </tr>
    <tr>
    <td>image</td>
    <td>Defines an image that acts as a submit button.</td>
    </tr>
    <tr>
    <td>month</td>
    <td>Allows the user to select a month and year.</td>
    </tr>
    <tr>
    <td>number</td>
    <td>Allows the user to enter a number.</td>
    </tr>
    <tr>
    <td>range</td>
    <td>Allows the user to select a number from a range.</td>
    </tr>
    <tr>
    <td>search</td>
    <td>Allows the user to enter a search query string.</td>
    </tr>
    <tr>
    <td>tel</td>
    <td>Allows the user to enter a telephone number.</td>
    </tr>
    <tr>
    <td>time</td>
    <td>Allows the user to select a time.</td>
    </tr>
    <tr>
    <td>url</td>
    <td>Allows the user to enter a URL.</td>
    </tr>
    <tr>
    <td>week</td>
    <td>Allows the user to select a week.</td>
    </tr>
    </tbody>
</table>

## Text Input
The text input type is the most basic form of input and is widely used for collecting simple text data.
```html
<input type="text" name="username" placeholder="Enter your username">
```
In the above example, the placeholder attribute provides a hint to the user about what to enter.

## Password Input
The password input type is similar to the text type but hides the characters entered by the user for security reasons.
```html
<input type="password" name="password" placeholder="Enter your password">
```
## Radio Buttons
Radio buttons are used when you want the user to select only one option from a set of choices.
```html
<input type="radio" id="male" name="gender" value="male">
<label for="male">Male</label>
<input type="radio" id="female" name="gender" value="female">
<label for="female">Female</label>
```
## Checkbox
Checkboxes allow the user to select multiple options from a set.
```html
<input type="checkbox" id="subscribe" name="subscribe" value="yes">
<label for="subscribe">Subscribe to newsletter</label>
```

# Textarea & Select
In addition to the basic input types, HTML forms offer other controls like textarea and select for richer user interaction. These elements allow for more complex data collection and provide a better user experience. In this blog, we will dive into these form controls and provide examples.

## The Textarea Element
The textarea element is used when you need multiline text input from the user. This is particularly useful for comments, reviews, or any other type of input where the length is unpredictable.
```html
<textarea name="comment" rows="4" cols="50">
      Enter your comment here...
</textarea>
```
The rows and cols attributes define the visible dimensions of the textarea.

## The Select Element
The select element creates a dropdown menu for the user. It is useful when you have a predefined list of options for the user to choose from.
```html
<select name="fruits">
      <option value="apple">Apple</option>
      <option value="banana">Banana</option>
      <option value="cherry">Cherry</option>
</select>
```
```html
<!-- This select tag with optgroup tag -->
<select>
<optgroup label="Web">
      <option>HTML</option>
      <option>CSS</option>
      <option>JavaScript</option>
</optgroup>
<optgroup label="Software">
      <option>Python</option>
      <option>C/C++</option>
      <option>Java</option>
</optgroup>
</select>
```



Each option inside the select tag represents an item in the dropdown list.

Combining Textarea and Select
You can combine textarea and select in the same form to capture varied types of user input.
```html
<form action="/submit">
      <textarea name="comment" rows="4" cols="50">Enter your comment here...</textarea>
      <select name="fruits">
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
        <option value="cherry">Cherry</option>
      </select>
      <input type="submit" value="Submit">
</form>
```

<video style="width: 650px; height: 358px;" autoplay="autoplay" loop="loop" muted="" controls="controls" width="650" height="358"> <source src="https://cwh-full-next-space.fra1.cdn.digitaloceanspaces.com/tutorial/html-select-and-textarea/html-textarea.mp4" type="video/mp4">Your browser does not support the video tag.</video>

