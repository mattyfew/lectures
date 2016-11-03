# CSS Selectors & Filters

CSS Selectors are patterns that are used to select HTML elements in order to apply styles.  We can use different types of selectors to catch multiple elements that satisfy the selector's criteria.  This enables us to do cool stuff like style the odd `<li>` elements in a `<ul>`, or only apply styles to the last child of a div. There are many different combinations we can use to get the output we want.

## Selectors

CSS selectors use patterns to determine the element we want to select.  These are the most common:



|      Selector      |               What it does               |
| :----------------: | :--------------------------------------: |
|    div  .child     | selects all _.child_ elements that are descendants of any _div_ element |
|    div > .child    | select all _.child_ elements where their parent is a *div* |
|   div + .sibling   | Selects an element (.*sibling*) that follows directly after the prior element (*div*), in which both elements share the same parent |
|       p ~ ul       | Selects an element (*ul*) that follows anywhere after the prior element (*p*), in which both elements share the same parent |
| mydiv:first-child  | selects every element with class *.mydiv* that is the first child of its parent |
| section.this-class | selects any _section_ element with a class of  _.this-class_ |
|     h1, h2, h3     | selects all *h1*, *h2*, and *h3* elements |

## Pseudo Class Selectors

![pseudo-class](https://css-tricks.com/wp-content/csstricks-uploads/relationalpseudos2.png)

Pseudo classes are used as a way to be even *more* specific about the elements you are trying to select. They allow us to do construct more complicated CSS selectors quite easily.  They start with a colon - `:` - followed by the pseudo selector. Some also take an argument.

 Also check out this awesome [tester](https://css-tricks.com/examples/nth-child-tester/).

### The most common and useful pseudo selectors are:

- **:link** - select links on the page.
- **:visited** - selects all links that have been visited.
- **:active** - selects all links and applies styles to them when they become active (ie. are clicked on).
- **:hover** - use this to set styles for when the mouse hovers over an element. Easy way to really spice up your design.
- **:first-child** - select the first child within a parent.
- **:last-child** - select the last child within a parent.
- **:nth-child(num)** - accepts an algebraic expression to specify the different ***child*** elements you want to select.  You can use this to only select the fifth child, or every odd or even element, or the first 5 child elements, and more!  [This article](https://css-tricks.com/how-nth-child-works/) talks about how `:nth-child` works and [this article](https://css-tricks.com/useful-nth-child-recipies/) goes over different formulas to use.
- **:nth-of-type(num)** - accepts an algebraic expression to specify the different ***type*** of elements you want to select.  You can pass it a mathematical expression, the words `even` or `odd`. 
- **:before** - allows you to insert content onto a page (from your CSS file) **before** an HTML element. The result is not actually on the DOM, but it appears as if it is. You need to include a *content* property.
- **:after** - allows you to insert content onto a page (from your CSS file) **after** an HTML element. The result is not actually on the DOM, but it appears as if it is. You need to include a *content* property.


Note - `:hover` MUST come after `:link` and `:visited` in the CSS definition in order to be effective! `:active` MUST come after `:hover` in the CSS definition in order to be effective! Pseudo-class names are not case-sensitive.


## BONUS FEATURE: CSS Filters!

CSS filters are cool effects that you can put on images. These effects are similar to Instagram or Photoshop filters. You can add some interesting effects to the images on your web page very quickly and easily.

```css
.img-to-blur {
  filter: blur(20px) sepia(1);
}
```

Notice that you can use multiple filters in one line, but note that **order matters**.

You can demo all the different filters [here](http://html5-demos.appspot.com/static/css/filters/index.html).

Here is a list of most of the filters availble to you. Unless otherwise specified, they accept a number or percentage.

- **blur() **- takes a length (in px)
- **brightness()**
- **contrast()**
- **drop-shadow()** - takes a length (in px) and a color
- **grayscale()**
- **hue-rotate()** - takes angle. Max is 360deg.
- **invert()**
- **opacity()**
- **saturate()**
- **sepia()**




## Additional Resources

- There are a lot of CSS selectors you can use, [here is a more complete list](http://www.w3schools.com/cssref/css_selectors.asp).
- [This article from CSS Tricks](https://css-tricks.com/pseudo-class-selectors/) details all of the different pseudo class selectors.
- [Here's a more detailed article on :nth-of-type](https://css-tricks.com/almanac/selectors/n/nth-of-type/).
- [Full list of filter properties.](https://developer.mozilla.org/en/docs/Web/CSS/filter#Syntax)