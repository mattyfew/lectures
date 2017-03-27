# HTML5 Tags

![html5](https://www.w3.org/html/logo/downloads/HTML5_Badge_256.png)

Part of being a strong front end developer is knowing all the tools and facets that are available to you.  With the advent of HTML5, we are introduced to a bunch of new, **semantic** tags that help us better organize our HTML code for ourselves, other developers, & web crawlers (for SEO).

There are A LOT of HTML5 elements, many of which you will rarely use, if at all.  Here is a link for a complete list of [new elements](https://www.w3.org/TR/html5-diff/#new-elements) and everything else about the changes from HTML4 to HTML5.

## The Semantic Elements

![garfield](http://www.mezzacotta.net/garfield/comics/1470.png)

**Semantic HTML** refers to strategically using HTML5 elements to reinforce the semantics, or *meaning*, of the info in webpages, rather than merely for presentation.  This makes more sense as you look at the names of HTML5 elements - you can venture a guess as to how that tag would be best utilized.

| Element               | Use                                      |
| --------------------- | ---------------------------------------- |
| `<header>`            | Used as a container for introductory content or set of navigation links. Usually contains heading elements (`h1`, `h2`, etc.) as well as a logo. |
| `<footer>`            | Typically used as the footer info of a page, i.e. copyright, sitemap, contact, etc. |
| `<article>`           | Used for self-contained compositions on a page.  Articles usually have their own heading, as well as a footer. |
| `<section>`           | Used for seperating different "sections" of a website.  Note that you should not use a `section` tag if `article`, `aside`, or `nav` is more appropriate. |
| `<nav>`               | The wrapper for your navigation menu.    |
| `<aside>`             | Represents a piece of content that is only slightly related to the rest of the page. |
| `<main>`              | Represents the main content of the body of a document or application. |
| `<template>`          | Used for holding client-side content that is not to be rendered when a page is loaded but may subsequently be instantiated during runtime using JavaScript.  Think of a template as a content fragment that is being stored for subsequent use in the document. |
| `<blockquote>`        | Indicates that the enclosed text is an extended quotation. Rendered with indentation. |
| `<audio>` & `<video>` | Used to embed sound & video content.     |

### What's the difference between `<aside>` & `<section>`?

Quoting HTML5doctor.com on the difference between `<section>` and `<article>` tags:

>  The `<article>` element is a specialised kind of `<section>`; it has a more specific semantic meaning than `<section>` in that it is **an independent, self-contained** block of related content. We *could* use `<section>`, but using `<article>` gives more semantic meaning to the content.

## Inline Semantic Tags

There are some inline HTML5 elements which will help you define meaning, structure, and/or style to piece of text. Note that some of these tags carry semantic value as well as apply certain styles to your text.

| Element    | Description                              |
| ---------- | ---------------------------------------- |
| `<cite>`   | Represents a reference to a creative work. Renders in italics. |
| `<code>`   | Represents some computer code you want to display. It will displayed in monofont. |
| `<em>`     | Marks text that has stress emphasis.  Displayed with italics. |
| `<q>`      | Represents a short inline quote.  Will place text in `" "`. Long quotes should use `<blockquote>` |
| `<mark>`   | Use to place semantic emphasis on content on your page. Used to highlight specific phrases on a page. Renders highlighted. |
| `<s>`      | Renders strikethrough text.              |
| `<span>`   | Generic inline container, does not inherently represent anything (like a div, only for inline). |
| `<strong>` | Gives text strong importance, and is displayed in bold. |

## Other Useful HTML tags

Here are some other HTML5 tags that you should be aware of:

| Element     | Use                                      |
| ----------- | ---------------------------------------- |
| `<canvas>`  | Use this element with the [canvas scripting API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) to draw graphics and animations. |
| `<label>`   | Represents a caption for an item. Usually used with labeling `input` and `textarea`tags. |
| `<meta />`  | Used in the `<head>` tag to include meta-information for the page. These can be used to include information to help SEO.  Note that it is self-closing. |
| `<address>` | Represents contact information.          |

## Further Reading

1. [MDN HTML element reference](https://developer.mozilla.org/en/docs/Web/HTML/Element)
2. [header](http://html5doctor.com/the-header-element/), [footer](http://html5doctor.com/the-footer-element/), [article](http://html5doctor.com/the-article-element/), & [section](http://html5doctor.com/the-section-element/) elements