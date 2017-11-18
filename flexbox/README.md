# Flexbox

## Using Flexbox

- Define a parent element as a Flex Container
- All child elements become flex items
- Flexbox properties can then control orientation, aligment, size and spacing of child Flex Items
- Containers are either row or column orientation

## Main Axis vs. Cross Axis

Flex container set to <u>row</u>:

- main axis: **horizontal**, cross axis: **vertical**

Flex container set to <u>column</u>:

- main axis: **vertical**, cross axis: **horizontal**

## flex-flow

The shorthand for writing the flex-direction and flex-wrap

Syntax: 

```css
main { flex-flow: <flex-direction> <flex-wrap> }
```



## flex property

These properties are used to define flex item size in relation to other flex items and how to grow and shrink.

**flex-grow**: how much an item will grow relative to the other elements in the container

**flex-shrink**: how much an item will shrink relative to the other elements in the container

**flex-basis**: initial main size of an element before free space is distributed. Default is 0.



Syntax:

```css
main { flex: <flex-grow> <flex-shrink> <flex-basis> } 
```

## justify-content

![justify-content](https://www.w3.org/TR/css-flexbox-1/images/flex-pack.svg)

## flex-basis

Flex-basis allows you to set the initial size of a flex item, before it starts resizing. [This page](http://gedd.ski/post/the-difference-between-width-and-flex-basis/) does a good job describing how flex-basis works.