# Building a website with Node.js in 20 minutes!

![img](http://assets.codebar.io/b//uploads/sponsor/avatar/250/Spiced_Logo.png)



I'm Matt Fewer, a teacher and developer here at [SPICED Academy](https://www.spiced-academy.com/). We are a computer programming bootcamp specializing in teaching Full Stack Development with JavaScript and Node.js.  The courses we currently offer are:

	1. Full Stack Web Development [full-time]
	2. Front End Web Development [part-time]

If you are interested in learning more information about <u>SPICED Academy</u>, you can reach out to Shilpa (shilpa@spiced-academy.com) or myself (matt@spiced-academy.com).

## A couple of things before we start...

1. We will not spend any time installing/setting up the following. Links are provided for you to install on your own time.
   1. [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/)
   2. A code editor such as [Atom](https://atom.io/) or [Brackets](http://brackets.io/)
   3. If you have Windows, that you are able to run [Bash](https://msdn.microsoft.com/en-us/commandline/wsl/about) in the terminal (Mac & Linux people, it's already installed)
   4. [Now](https://zeit.co/now) - provides realtime global deployment for free
2. Q & A - I will take questions as I go through the demo. If need be, we will "parking lot" certain questions to be discussed at the conclusion of the demo.

## Let's talk about Node.js

![Node](https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2015/07/1436439824nodejs-logo.png)

From the Node.js wiki:

> **Node.js** is an open-source, cross-platform, JavaScript runtime environment for developing a diverse variety of tools and applications. Although Node.js is not a JavaScript framework, many of its basic modules are written in JavaScript, and developers can write new modules in JavaScript.

Woah, what does all of that mean?? I will explain...

Traditional servers are thread based, meaning they run one line at a time. Node is event driven, meaning that we are able to run multiple processes at once, where one process won't hinder the other from running. Each process fires a **callback** when they are completed. This tells Node what to do after the process is finished running.

Quoting [this article](https://objectpartners.com/2011/08/23/an-introduction-to-node-js/):

>  [Tim Caswell and Dan York](http://code.danyork.com/2011/01/25/node-js-doctors-offices-and-fast-food-restaurants-understanding-event-driven-programming/) use the a doctor’s office reception line as an analogy to describe the difference between threaded and asynchronous systems. A traditional threaded model in a reception line would have you stand at the receptionist for as long as it takes you to complete your transaction. Even if you have multiple forms to fill out, you would stay at the window until they are all filled out. The only way to scale is to add more receptionists.
>
>  In an event based system, the receptionist gives you the forms with a clipboard and pen and tells you to come back when you are done. The receptionist can then help the next person in line. When your forms are done, you get back in line. This system is already scalable. If the line gets to long, you can add more receptionists, but not at the rate you would need to in the “threaded” version.

## The steps

1. Create your project directory and all the files we will need.
   1. `index.html` & `server.js`
2. `npm init` your directory
   1. Go into `package.json`, change the start script to `"start": "node --harmony-async-await server"`
3. `npm install —save express`
4. Create your server.
5. Create your html file.
6. Style it.
7. Deploy using **Now**.
8. Go brag to all your friends, your website is now live on the internet! 






![do a dance](./success.gif)