# HTML Table Sizes
HTML tables can have different sizes for each column, row or the entire table.

![Alt text](images/image-9.png)

Use the `style` attribute with the `width` or `height` properties to specify the size of a table, row or column.

## HTML Table Width
To set the width of a table, add the `style` attribute to the `<table>` element:

Set the width of the table to 100%:
```html
<table style="width:100%">
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Sumit</td>
    <td>Kumar</td>
    <td>20</td>
  </tr>
  <tr>
    <td>Amit</td>
    <td>Yadav</td>
    <td>18</td>
  </tr>
</table>
```

> Note: Using a percentage as the size unit for a width means how wide will this element be compared to its parent element, which in this case is the `<body>` element.

## HTML Table Column Width
 	 	 
![Alt text](images/image-10.png)
 	 	 
To set the size of a specific column, add the style attribute on a `<th>` or `<td>` element:

Set the width of the first column to 70%:
```html
<table style="width:100%">
  <tr>
    <th style="width:70%">Firstname</th>
    <th>Lastname</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Sumit</td>
    <td>Kumar</td>
    <td>20</td>
  </tr>
  <tr>
    <td>Amit</td>
    <td>Yadav</td>
    <td>18</td>
  </tr>
</table>
```
## HTML Table Row Height
 	 	 
![Alt text](images/image-11.png)
 	 	 
To set the height of a specific row, add the `style` attribute on a table row element:

Set the height of the second row to 200 pixels:
```html
<table style="width:100%">
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Age</th>
  </tr>
  <tr style="height:200px">
    <td>Sumit</td>
    <td>Kumar</td>
    <td>20</td>
  </tr>
  <tr>
    <td>Amit</td>
    <td>Yadav</td>
    <td>18</td>
  </tr>
</table>
```

# `Rowspan` and `Colspan` Attributes

`Rowspan`: If you want a table cell to span multiple rows, you can use the rowspan attribute.
```html
<td rowspan="2">
```
`Colspan`: If you want a table cell to span multiple columns, you can use the colspan attribute.
```html
<td colspan="2">
```

## Rowspan and Colspan in HTML tables

### Example for Colspan:
```html
<table border>
  <tr>
    <td colspan="2">Merged Columns</td>
  </tr>
  <tr>
    <td>Column 1</td>
    <td>Column 2</td>
  </tr>
</table>
```

### Example for Rowspan:
```html
<table border>
  <tr>
    <td>Row 1, Column 1</td>
    <td rowspan="2">Merged Rows</td>
  </tr>
  <tr>
    <td>Row 2, Column 1</td>
  </tr>
</table>
```
