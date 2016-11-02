# CSS Selectors & Filters

CSS Selectors are patterns that are used to select HTML elements on the DOM that you want to style.



Here is an "almanac" of all the [CSS selectors](https://css-tricks.com/almanac/selectors/).



## Selectors

There are a lot of CSS selectors you can use, [here is a more complete list](http://www.w3schools.com/cssref/css_selectors.asp). These are the most common:

|      Element       |               What it does               |
| :----------------: | :--------------------------------------: |
|    div  .child     | selects any _.child_ element that is a descendant of any _div_ element |
|    div > .child    | select any _.child_ element that is a child of any _div_ |
|   div + .sibling   | selects any _.sibling_ element that is immediately preceded by a sibling _div_ element |
| .mydiv:first-child | selects _.mydiv_ when it is the first child of its parent |
| section.this-class | selects any _section_ element with a class of  _.this-class_ |
|     h1, h2, h3     |   selects all h1, h2, and h3 elements    |
|       p ~ ul       | selects every _ul_ element that is preceded by a _p_ element |





## Pseudo Class Selectors

![pseudo-class](https://css-tricks.com/wp-content/csstricks-uploads/relationalpseudos2.png)

Pseudo classes are used as a way to be even *more* specific about the elements you are trying to select. They stary with a colon, followed by the pseudo selector. Some also take an argument.

[This article from CSS Tricks](https://css-tricks.com/pseudo-class-selectors/) details all of the different pseudo class selectors.

### The most common and useful pseudo selectors are:

- **:hover** - use this to set styles for when the mouse hovers over an element. Easy way to really spice up your design.
- **:first-child** - select the first child within a parent.
- **:last-child** - select the last child within a parent.
- **:nth-child(num)** - accepts an algebraic expression to specify the different ***child*** elements you want to select.  You can use this to only select the fifth child, or every odd or even element, or the first 5 child elements, and more!  [This article](https://css-tricks.com/how-nth-child-works/) talks about how `:nth-child` works and [this article](https://css-tricks.com/useful-nth-child-recipies/) goes over different formulas to use.
- **:nth-of-type(num)** - accepts an algebraic expression to specify the different ***type*** of elements you want to select.  You can pass it a mathematical expression, the words `even` or `odd`.  [Here's a more detailed article on :nth-of-type](https://css-tricks.com/almanac/selectors/n/nth-of-type/).



## BONUS FEATURE: Filter!





