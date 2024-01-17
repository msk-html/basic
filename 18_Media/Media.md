# Video & Audio Tags [media.html](media.html)

This tutorial aims to provide a comprehensive guide on using `<video>` and `<audio>` tags in HTML to embed media files.

### Common Video Formats
![Alt text](image.png)

Videoformats	There are many video formats out there.

The MP4, WebM, and Ogg formats are supported by HTML.

The MP4 format is recommended by YouTube.

## The `<video>` Tag [video.html](video.html)

The HTML `<video>` element is used to show a video on a web page.

```html
<video src="video.mp4" controls></video>
```

### Attributes for `<video>` Tag 

-   **src**: Specifies the path to the video file.
-   **controls**: Adds video controls, like play, pause, and volume.
-   **autoplay**: Automatically starts playing the video when the page loads.
-   **loop**: Repeats the video once it ends.
-   **muted**: Mutes the video by default.
-   **poster**: Specifies an image to be displayed before the video starts playing.
-   **width** and **height**: Specifies the dimensions of the video.

> **Note:** Chromium browsers do not allow autoplay in most cases. However, muted autoplay is always allowed.

## The `<audio>` Tag

The `<audio>` tag is used to embed audio files in an HTML document. It also supports multiple attributes for control.

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

>**Note:** Only MP3, WAV, and Ogg audio are supported by the HTML standard. 


<br><br>

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


# HTML `YouTube` Videos

The easiest way to play videos in HTML, is to use YouTube.

## Struggling with Video Formats?

Converting videos to different formats can be difficult and time-consuming.

An easier solution is to let YouTube play the videos in your web page.

## YouTube Video Id

YouTube will display an id (like tgbNymZ7vqY), when you save (or play) a video.

You can use this id, and refer to your video in the HTML code.

## Playing a YouTube Video in HTML

To play your video on a web page, do the following:

-   Upload the video to YouTube
-   Take a note of the video id
-   Define an `<iframe>` element in your web page
-   Let the `src` attribute point to the video URL
-   Use the `width` and `height` attributes to specify the dimension of the player
-   Add any other parameters to the URL (see below)

### Example
```html
<iframe width="420" height="315"
src="https://www.youtube.com/embed/tgbNymZ7vqY">
</iframe>
```

## YouTube Autoplay + Mute

You can let your video start playing automatically when a user visits the page, by adding `autoplay=1` to the YouTube URL. However, automatically starting a video is annoying for your visitors!

> **Note:** Chromium browsers do not allow autoplay in most cases. However, muted autoplay is always allowed.

Add `mute=1` after `autoplay=1` to let your video start playing automatically (but muted).

### YouTube - Autoplay + Muted
```html
<iframe width="420" height="315"
src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1">
</iframe>
```

## YouTube Playlist

A comma separated list of videos to play (in addition to the original URL).

## YouTube Loop

Add `loop=1` to let your video loop forever.

Value 0 (default): The video will play only once.

Value 1: The video will loop (forever).

### YouTube - Loop
```html
<iframe width="420" height="315"
src="https://www.youtube.com/embed/tgbNymZ7vqY?playlist=tgbNymZ7vqY&loop=1">
</iframe>
```
## YouTube Controls

Add `controls=0` to not display controls in the video player.

Value 0: Player controls does not display.

Value 1 (default): Player controls display.

### YouTube - Controls
```html
<iframe width="420" height="315"
src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=0">
</iframe>
```
```html
<iframe width="560" height="315" src="https://www.youtube.com/embed/aqz-KE-bpKQ?si=ta-VxWuqvEz98EdY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
```

# HTML [SVG](svg.html) Graphics

SVG defines vector-based graphics in XML format.

## What is SVG?

-   SVG stands for Scalable Vector Graphics
-   SVG is used to define graphics for the Web
-   SVG is a W3C recommendation

## Examples: [svg](photo_svg.svg) v/s [jpg](svg_Photo.jpg)

## The HTML `<svg>` Element

The HTML `<svg>` element is a container for SVG graphics.

SVG has several methods for drawing paths, boxes, circles, text, and graphic images.

## SVG `Circle`
```html
<!DOCTYPE html>
<html>
<body>

<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
</svg>

</body>
</html>
```

## SVG `Rectangle`
```html
<svg width="400" height="100">
  <rect width="400" height="100" style="fill:rgb(0,0,255);stroke-width:10;stroke:rgb(0,0,0)" />
</svg>
```

## SVG `Rounded Rectangle`
```html
<svg width="400" height="180">
  <rect x="50" y="20" rx="20" ry="20" width="150" height="150"
  style="fill:red;stroke:black;stroke-width:5;opacity:0.5" />
</svg>
```
## SVG `Star`
```html
<svg width="300" height="200">
  <polygon points="100,10 40,198 190,78 10,78 160,198"
  style="fill:lime;stroke:purple;stroke-width:5;fill-rule:evenodd;" />
</svg>
```
## SVG `Logo`
```html
<svg height="130" width="500">
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:rgb(255,255,0);stop-opacity:1" />
      <stop offset="100%" style="stop-color:rgb(255,0,0);stop-opacity:1" />
    </linearGradient>
  </defs>
  <ellipse cx="100" cy="70" rx="85" ry="55" fill="url(#grad1)" />
  <text fill="#ffffff" font-size="45" font-family="Verdana" x="50" y="86">MSK</text>
  Sorry, your browser does not support inline SVG.
</svg>
```
# HTML Plug-ins

Plug-ins are computer programs that extend the standard functionality of the browser.

## Plug-ins

Plug-ins were designed to be used for many different purposes:

-   To run Java applets
-   To run Microsoft ActiveX controls
-   To display Flash movies
-   To display maps
-   To scan for viruses
-   To verify a bank id

**`Warning !`**

- Most browsers no longer support Java Applets and Plug-ins.
- ActiveX controls are no longer supported in any browsers.
- The support for Shockwave Flash has also been turned off in modern browsers.

## The `<object>` Element

The `<object>` element is supported by all browsers.

The `<object>` element defines an embedded object within an HTML document.

It was designed to embed plug-ins (like Java applets, PDF readers, and Flash Players) in web pages, but can also be used to include HTML in HTML:

### Example
```html
<object width="100%" height="500px" data="https://www.w3schools.com/html/snippet.html"></object>
```

Or images if you like:

### Example
```html
<object data="audi.jpeg"></object>
```

## The <embed> Element

The `<embed>` element is supported in all major browsers.

The `<embed>` element also defines an embedded object within an HTML document.

Web browsers have supported the <embed> element for a long time. However, it has not been a part of the HTML specification before HTML5.

### Example
```html
<embed src="audi.jpeg">
```

Note that the <embed> element does not have a closing tag. It can not contain alternative text.

The `<embed>` element can also be used to include HTML in HTML:

### Example
```html
<embed width="100%" height="500px" src="snippet.html">
```

