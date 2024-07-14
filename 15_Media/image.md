# HTML Images
To represent HTML pages beautifully and to explain content, we use images for that. Our ability to comprehend complex things is aided by visual representations to do that we use images.
 
![Alt text](image.png)
 
`<img>` tag:  "used to add an image to the webpage" 
### Syntax:
```html
<img src= "image.png" />
```
 
- `<img>` tag is used to insert images on an HTML page.
- `<img>` tag is an empty tag which means it doesn’t have a corresponding closing tag.
- `<img>` tag uses mandatory attributes i.e. "alt attribute" a text description for an image and "src attribute" for the location path of an image. These attributes provide additional information about the image tag.
- Png, jpeg, jpg, and gif are extensions used by images.
 
## Setting image mandatory attributes:
- `"src attribute"` -> for the location path of an image.
### For example:
```html
<img src="images/profile_picture" />
```
> NOTE: If we want to find the location of our image. Right-click on your image -> Go to properties -> Check location in the properties.
 
- `"alt attribute"` -> a text description for an image
### For example:
```html
<img src="images/profile_pic" alt="Testing Image" />
```
 
## Setting image `width/height` attribute:
`<img>` tag uses the height or width attribute to set the height or width of an image. Values for height or width attribute must be in pixel or percentage and value should be placed in double quotes otherwise we can see an error.
For example:
```html
<img src="image.png" alt="Image Description" width="300" height="100" />
```
> NOTE: This method was used earlier. The styling is now handled by CSS. We can style our image using CSS properties. We can give height, width, border, alignment, etc. to our images. To learn more about styling check our CSS tutorial.

# [<<<Back](../11_Links/Links.md) : [Next>>>](../13_Favicon/favicon.md)