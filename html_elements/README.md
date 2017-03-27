# HTML5 Tags

Part of being a good front end developer is knowing all the tools and facets that are available to you.  With the advent of HTML5, we are introduced to a bunch of new, **semantic** tags that help us better organize our HTML code for ourselves, other developers, & web crawlers (for SEO).

There are A LOT of HTML5 elements, most of which you will rarely use, if at all.  Here is a link for a complete list of [new elements](https://www.w3.org/TR/html5-diff/#new-elements) and everything else about the changes from HTML4 to HTML5.

## The Semantic Elements

**Semantic HTML** is using HTML to reinforce the semantics, or *meaning*, of the info in webpages, rather than merely for presentation.  This makes more sense as you look at the names of HTML5 elements - you can venture a guess as to how that tag would be best utilized.

| Element               | Use                                      |
| --------------------- | ---------------------------------------- |
| `<header>`            | Used as a container for introductory content or set of navigation links. Usually containers heading elements (`h1`, `h2`, etc.). |
| `<footer>`            | Typically used as the footer info of a page, i.e. copyright, sitemap, contact, etc. |
| `<article>`           | Used for self-contained compositions on a page.  Articles usually have a heading, as well as a footer. |
| `<section>`           | Used for seperating different "sections" of a website.  Each section should have a heading at the start of the section. Note that you should not use a `section` tag if `article`, `aside`, or `nav` is more appropriate. |
| `<nav>`               | The container for your navigation menu   |
| `<aside>`             | Represents a piece of content that is only slightly related to the rest of the page. |
| `<main>`              | Represents the main content of the body of a document or application. |
| `<template>`          | Used for holding client-side content that is not to be rendered when a page is loaded but may subsequently be instantiated during runtime using JavaScript.  Think of a template as a content fragment that is being stored for subsequent use in the document. |
| `<audio>` & `<video>` | Used to embed sound & video content.     |
| `<blockquote>`        | Indicates that the enclosed text is an extended quotation. Rendered with indentation |

### What's the difference between `<aside>` & `<section>`?

Quoting HTML5doctor.com on the difference between `<section>` and `<article>` tags:

>  The `<article>` element is a specialised kind of `<section>`; it has a more specific semantic meaning than `<section>` in that it is **an independent, self-contained** block of related content. We *could* use `<section>`, but using `<article>` gives more semantic meaning to the content.

## Inline text semantics

There are some HTML5 elements which will help you define meaning, structure, and/or style to piece of text. Note that some of these tags carry semantic value as well as apply certain styles to your text.

| Element    | Description                              |
| ---------- | ---------------------------------------- |
| `<cite>`   | Represents a reference to a creative work. |
| `<code>`   | Represents some computer code you want to display. It will displayed in monofont. |
| `<em>`     | Marks text that has stress emphasis.  Displayed with italics. |
| `<q>`      | Represents a short inline quote.  Will place text in " ". Long quotes should use `<blockquote>` |
| `<mark>`   | Use to place semantic emphasis on content on your page. Used to highlight specific phrases on a page. |
| `<s>`      | Renders strikethrough text               |
| `<span>`   | Generic inline container, does not inherently represent anything (like a div, only for inline). |
| `<strong>` | Gives text strong importance, and is typically displayed in bold. |

## Other useful HTML tags

Here are some other HTML5 tags that you should be aware of:

| Element     | Use                                      |
| ----------- | ---------------------------------------- |
| `<canvas>`  | Use this element with the [canvas scripting API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) to draw graphics and animations. |
| `<label>`   | Represents a caption for an item in a user interface. Usually used with labeling `input` tags. |
| `<meta />`  | Used in the `<head>` tag to include meta-information for the page. Note that it is self-closing. |
| `<address>` | Supplies contact information.            |



## Further Reading

1. [MDN HTML element reference](https://developer.mozilla.org/en/docs/Web/HTML/Element)
2. [header](http://html5doctor.com/the-header-element/), [footer](http://html5doctor.com/the-footer-element/), [article](http://html5doctor.com/the-article-element/), & [section](http://html5doctor.com/the-section-element/) elements