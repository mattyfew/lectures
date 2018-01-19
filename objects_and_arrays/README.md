# Object & Arrays

**Object Literal** - refers to the usual way we declare objects in JS. Rather 

- *var person = {}*

Namespace - a container for variables and functions. Typically to keep vars and funcs with the same name separate.

- we can create a namespace easily by containing info inside of an object.
- *english.greet() vs. spanish.great()*

**JSON** - JavaScript Object Notation

- the JSON object comes with JavaScript because it's so popular to use together.
- JSON.stringify() and JSON.parse()
- You can't have functions as values.

**Functions are Objects**

First Class Functions - Everything you can do with other types you can do with functions. Assign them to vars, pass them around.

- Functions are special types of objects.
- You can attach a primitive, another object, or another function.
- It's name can be anonymous. and it has a "code" property. The code you write in it is "invocable". **A function is an object, whose properties include running code that was passed to that object.**

Expression - a unit of code that results in a value. It doesn't have to save to a variable. Function expressions are NOT hoisted because variables and function declarations are stored in memory first.  As the code is run line by line, if the function was ran before the function expression was set, then it will result in *undefined is not a function*.

Statement - does work but doesn't result in a value. if statements are statements because they just do work. You can store the result of an if statement in a variable ex: *var a = if (a === 3) { … }*

var anonymousGreet = function() { console.log('hi') }

**By Reference vs. By Value**

primitive values are stored in memory **by value**. This means that if they were copied, there would be 2 vars stored in memory.

- var a = 3…………….b=a
- Now there are two different spots in memory storing 3

objects are stored in memory **by reference**. This means that if they are copied, both copies point *to the same object in memory*,

- var a = {}………….b = a
- both b and a point to the SAME object in memory.