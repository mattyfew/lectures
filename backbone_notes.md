# Backbone

- An older framework, very lightweight.
- 2 dependencies - jQuery & Underscore.
- Include BB & these 2 in your HTML
  - every file that you create needs to be included in your HTML
- BB allows for constructors if View, Models, Router, & Collection.

## MVC

- Model - data & logic
- View - present data & respond to changes
- Controller - the go-between for models and views
- [Link to bartender analogy](https://medium.freecodecamp.com/model-view-controller-mvc-explained-through-ordering-drinks-at-the-bar-efcba6255053#.tied93vc9)

Most of the time, when you hear SPA, it is built with MVC.  MVC is basically a more sophisticated  version of handlebars with AJAX.

## Router

- Where you create your client-side routes
  - routes that the user will see.
  - POST routes are separate, as well as GET requests to the database.
- Create Router with a **route** & its **handler function**.
- You can do anything you want in these functions. You will usually create a view and/or model.

## Models

- Holds & manages data
- Give the model a *URL property*, then use the `fetch()` method to query the database.
- You can also set defaults on instantiated models.
- These will be added to the model's **attributes** property & that is typically how you access their data.
- Use `get()` & `set()` to add, change, or get properties of the models.
- `save()` creates a POST request using the models URL property.  The request will send the models attributes as req.body.
- Tip - when instantiating a model, you can pass properties that you want to be set on the model.

## Views

- In BB, views can do a lot.  They basically function as **controllers**.
- Notice views and models have `initialize()` methods.
- You'll need to specify the view's **el** property so that the view knows where to load the view.
  - You can `append()`, as well as set the `html()`.
- You have to call `render()` to load the view. You should only call this once.
- Tip - When instantiating a view, you usually pass it a model.