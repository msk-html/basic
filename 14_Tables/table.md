# HTML Tables
HTML tables allow web developers to arrange data into rows and columns.



### Example
![Alt text](image.png)

## Advance Table
<table border="1" width="400">
    <tr>
        <th rowspan="3">Day</th>
        <th colspan="3">Seminar</th>
    </tr>
    <tr>
        <th colspan="2">Schedule</th>
        <th rowspan="2">Topic</th>
    </tr>
    <tr>
        <th>Begin</th>
        <th>End</th>
    </tr>
    <tr>
        <td rowspan="2">Monday</td>
        <td rowspan="2">8:00am</td>
        <td rowspan="2">5:00pm</td>
        <td>Introduction of XML</td>
    </tr>
    <tr>
        <td>Validity:DTD and RelaxNG</td>
    </tr>
    <tr>
        <td rowspan="3">Tuesday</td>
        <td>8:00am</td>
        <td>11:00am</td>
        <td rowspan="2">XPATH</td>
    </tr>
    <tr>
        <td>11:00am</td>
        <td>2:00pm</td>
    </tr>
    <tr>
        <td>2:00pm</td>
        <td>5:00pm</td>
        <td>XSL Transformation</td>
    </tr>
</table>

## Define an HTML Table
A table in HTML consists of table cells inside rows and columns.

### Example
A simple HTML table:
```html
<table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
</table>
```
## Table Cells
Each table cell is defined by a `<td>` and a `</td>` tag.

td stands for table data.

Everything between `<td>` and `</td>` are the content of the table cell.

### Example
```html
<table>
  <tr>
    <td>Emil</td>
    <td>Tobias</td>
    <td>Linus</td>
  </tr>
</table>
```
> **Note:** A table cell can contain all sorts of HTML elements: text, images, lists, links, other tables, etc.

## Table Rows
Each table row starts with a `<tr>` and ends with a `</tr>` tag.

`tr` stands for table row.

### Example
```html
<table>
  <tr>
    <td>Sumit</td>
    <td>Amit</td>
    <td>Aryan</td>
  </tr>
  <tr>
    <td>21</td>
    <td>18</td>
    <td>7</td>
  </tr>
</table>
```
You can have as many rows as you like in a table; just make sure that the number of cells are the same in each row.

> **Note:** There are times when a row can have less or more cells than another. You will learn about that in a later chapter.

## Table Headers
Sometimes you want your cells to be table header cells. In those cases use the `<th>` tag instead of the `<td>` tag:

`th` stands for table header.

### Example
Let the first row be table header cells:
```html
<table>
  <tr>
    <th>Person 1</th>
    <th>Person 2</th>
    <th>Person 3</th>
  </tr>
  <tr>
    <td>Sumit</td>
    <td>Amit</td>
    <td>Aryan</td>
  </tr>
  <tr>
    <td>21</td>
    <td>18</td>
    <td>7</td>
  </tr>
</table>
```
By default, the text in `<th>` elements are bold and centered, but you can change that with CSS.

## HTML Exercises

Add a table row with two table headers.

The two table headers should have the value "Name" and "Age".
```html
<table>
  __
  ______
  ______
  __
  <tr>
    <td>Sumit</td>
    <td>21</td>
  </tr>
</table>
```
# More on Tables
Let's take a closer look at HTML tables and delve into some more aspects of using tables in HTML.

## Adding a `Caption`
To add a title to your table, you can use the <caption> element. This element helps both in terms of SEO and accessibility.
```html
<table>
  <caption>Student Details</caption>
    <tr>
      <td>Sumit</td>
      <td>Amit</td>
      <td>Aryan</td>
    </tr>
    <tr>
      <td>21</td>
      <td>18</td>
      <td>7</td>
    </tr>
</table>
```

<table border>
  <caption>Student Details</caption>
    <tr>
      <td>Sumit</td>
      <td>Amit</td>
      <td>Aryan</td>
    </tr>
    <tr>
      <td>21</td>
      <td>18</td>
      <td>7</td>
    </tr>
</table>

## Table `Headers` and `Footers`
Besides `<th>` for individual header cells, HTML tables allow you to group header or footer content using `<thead>` and `<tfoot>`.
```html
<table>
  <thead>
     <!--  header content -->
  </thead>
  <tfoot>
  <!-- footer content -->
  </tfoot>
  <tbody>
  <!-- body content -->
  </tbody>
</table>
```

## Column Groups
You can use the `<colgroup>` and `<col>` elements to apply styles to an entire column in an HTML table.
```html
<table>
  <colgroup>
    <col style="background-color:yellow">
  </colgroup>
  <!-- rest of the table -->
</table>
```
### Accessibility in Tables
To make your tables more accessible, you can use the scope attribute in `<th>` elements to specify if they are headers for columns, rows, or groups of columns or rows.
```html
<th scope="col">Name</th>
<th scope="col">Age</th>
```
## Sample HTML Table
Here is an example HTML table with all the important elements:
```html
<table border="1">
    <!-- Caption -->
    <caption>Employee Information</caption>

    <!-- Table Header -->
    <thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Position</th>
            <th>Salary</th>
        </tr>
    </thead>

    <!-- Table Body -->
    <tbody>
        <tr>
            <td>1</td>
            <td>Sumit</td>
            <td>Developer</td>
            <td>$80,000</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Amit</td>
            <td>Designer</td>
            <td>$70,000</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Aryan</td>
            <td>Manager</td>
            <td>$90,000</td>
        </tr>
    </tbody>

    <!-- Table Footer -->
    <tfoot>
        <tr>
            <td colspan="3">Total Employees</td>
            <td>3</td>
        </tr>
    </tfoot>
</table>
```
