# Video & Audio Tags

This tutorial aims to provide a comprehensive guide on using `<video>` and `<audio>` tags in HTML to embed media files.

## The `<video>` Tag

The `<video>` tag is used to embed video files in an HTML document. It supports multiple attributes to control the video playback.

Example usage:

```html
<video src="video.mp4" controls></video>
```

Copy

### Attributes for `<video>` Tag

-   **src**: Specifies the path to the video file.
-   **controls**: Adds video controls, like play, pause, and volume.
-   **autoplay**: Automatically starts playing the video when the page loads.
-   **loop**: Repeats the video once it ends.
-   **muted**: Mutes the video by default.
-   **poster**: Specifies an image to be displayed before the video starts playing.
-   **width** and **height**: Specifies the dimensions of the video.

## The `<audio>` Tag

The `<audio>` tag is used to embed audio files in an HTML document. It also supports multiple attributes for control.

Example usage:

```html
<audio src="audio.mp3" controls></audio>
```

### Attributes for `<audio>` Tag

-   **src**: Specifies the path to the audio file.
-   **controls**: Adds audio controls, like play, pause, and volume.
-   **autoplay**: Automatically starts playing the audio when the page loads.
-   **loop**: Repeats the audio once it ends.
-   **muted**: Mutes the audio by default.
-   **preload**: Specifies if and how the audio should be loaded when the page loads ('auto', 'metadata', 'none').

The "preload" attribute can have the following values:

1.  `none`: This is the default value. It indicates that the browser should not preload the audio file at all. The audio file will only start downloading when the user initiates playback.
    
2.  `metadata`: This value tells the browser to preload only the metadata of the audio file, such as its duration and basic information about the audio. This can be useful if you want to display the audio duration to the user without fully loading the audio data.
    
3.  `auto`: This value instructs the browser to preload the entire audio file as much as possible without delaying the loading of other important page content. The browser will try to load the audio file in the background so that it's ready to play when the user decides to start it.
    

## Conclusion

The `<video>` and `<audio>` tags are powerful tools for embedding media content in HTML documents. Utilizing their attributes allows you to offer an interactive and dynamic user experience.

<br><br>

# `SVG` in HTML

Scalable Vector Graphics (SVG) has become an indispensable part of modern web development. SVG enables developers to create high-quality, scalable graphics that look crisp at any size or resolution. In this blog post, we'll explore the basics of using SVG in HTML, its benefits, and some practical examples.

## What is SVG?

SVG stands for Scalable Vector Graphics. Unlike raster images like PNGs or JPGs, SVGs are not pixel-based. They're composed of vectors—mathematical formulas that describe shapes, paths, and fills. This means SVGs can be resized without losing quality.

## Why Use SVG?

### Scalability

SVG images can be scaled indefinitely without losing quality, which is ideal for responsive web design.

### File Size

SVG files are often smaller than their raster counterparts, especially for simple shapes and icons.

### Flexibility

SVGs can be styled, animated, and manipulated using CSS and JavaScript.

## How to Embed SVG in HTML

SVG can be embedded in HTML in several ways:

1.  Inline SVG: Directly writing the SVG XML code within HTML.
2.  Using an <img> tag: Point the src attribute to an SVG file.
3.  Using CSS: Setting SVG as a background image in a CSS file.

### Inline SVG Example

```html
<svg height="100" width="100">
    <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
</svg>
```


### <img> Tag Example

```html
<img src="image.svg" alt="Sample SVG">
```


### CSS Background Example

```css
.background {
          background-image: url('image.svg');
        }
```


## SVG Attributes

SVG comes with a set of attributes to control its behavior:

-   width and height: To set the dimensions.
-   viewBox: To set the coordinate system.
-   fill and stroke: To set the colors.

## Practical Examples

### Creating a Simple Icon

```html
<svg height="30" width="30">
    <rect width="30" height="30" style="fill:rgb(0,0,255);stroke-width:1;stroke:rgb(0,0,0)" />
</svg>
```


### Creating Complex Shapes

SVG can also be used to create more complex shapes like polygons, lines, and text.

## Conclusion

SVG offers a powerful way to add scalable and interactive graphics to your HTML documents. Its compatibility with CSS and JavaScript makes it a versatile choice for modern web development. Whether you're creating simple icons or intricate illustrations, SVG has got you covered.


# `iFrames` in HTML

iFrames, or Inline Frames, are an integral part of modern web development. They allow you to embed another HTML page within your current page. In this blog, we'll delve into the utility of iFrames, their attributes, and some use-cases.

## What is an iFrame?

An iFrame is an HTML element that enables an inline frame for the embedding of external content. Essentially, you can load another web page within a designated area of your current webpage.

## Why Use iFrames?

iFrames offer a variety of use-cases:

-   **Content Isolation**: iFrames allow you to isolate third-party content, which can improve security.
-   **Modularity**: Easily embed external plugins, widgets, or content.
-   **Resource Separation**: Content within an iFrame can load separately from the rest of the page.

## Basic Syntax

The basic syntax of an iFrame is quite straightforward:

```html
<iframe src="URL" width="width" height="height"></iframe>
```


## Attributes of iFrame

Several attributes can enhance the functionality of an iFrame:

-   **src**: Specifies the URL of the page to embed.
-   **height** and **width**: Define the dimensions.
-   **frameborder**: Indicates whether to display a border.
-   **scrolling**: Controls the scrollbars.
-   **name**: For targeting the iFrame in JavaScript.

## Practical Examples

### Embedding a YouTube Video

```html
<iframe src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allowfullscreen></iframe>
```


### Embedding Google Maps

```html
<iframe src="https://maps.google.com/maps?q=LOCATION&output=embed" frameborder="0"></iframe>
```


## Conclusion

iFrames offers a convenient way to embed external content into your web pages. Their flexibility and ease of use make them an invaluable tool for modern web development.