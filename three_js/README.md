# Rendering 3D Graphics with Three.js

Three.js is a cross-browser JavaScript library/API used to create and display animated 3D computer graphics on a web browser. Three.js scripts may be used in conjunction with the HTML5 canvas element, SVG or [WebGL](https://en.wikipedia.org/wiki/WebGL).

You should definitely checkout the [Three.js website](https://threejs.org/) and look at some of the amazing examples.

## Creating a Scene

In order to get started created anything with Three.js, we are going to need a few things:

1. **Scene** - the 3 dimensional space that you will be working with.
2. **Camera** - represents the user vantage point. There are several types of cameras in Three.js.
3. **Light** - our scene needs a light source, otherwise everything will be "dark" and you won't be able to see anything.
4. **Mesh** - a mesh is a 3D object we create. This can be a cube, planet, character, tree, literally anything!
5. **Controls** - how the user can interact with the scene.
6. **Renderer** - the function which renders our scene. 

## Let's create a new Planet Earth!

Ok let's get started! Our HTML will be very simple. Notice we are loading Three.js via a CDN:

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset=utf-8>
		<title>Planet Earth</title>
		<style>
			body { margin: 0; }
			canvas { width: 100%; height: 100% }
		</style>
	</head>
	<body>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/85/three.min.js"></script>
         <script src="./script.js"></script>
	</body>
</html>
```

### Scene

Let's create our scene:

```javascript
var scene = new THREE.Scene()
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 50)
camera.position.z = 30

var renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)
```

First we create a new scene.  Next, we create a *camera*.  Three.js has a few camera options. For this example, we will use the **PerpectiveCamera**, which is designed to mimic the way the human eye sees (things get smaller the further away they are, amongst other things).  The PerspectiveCamera constructor is created as follows:

`PerpectiveCamera(fov, aspect, near, far)`

These parameters make up the [viewing frustum](https://en.wikipedia.org/wiki/Viewing_frustum) of a camera.

The *renderer* is used to display our beautifully crafted scenes using WebGL.

### Lighting

In order to illuminate our scene, we need to add lights. Otherwise, we will not be able to see anything!  We will use **AmbientLight**, which creates a general light to illuminate all objects. As a result, this light will not cast any shadows because it does not have a direction.

```javascript
var light = new THREE.AmbientLight( 0xFFFFFF )
scene.add( light )
```

### The Mesh

Let's write the code to create our planet mesh.

```javascript
var geometry = new THREE.SphereGeometry( 10, 32, 32 )
var material = new THREE.MeshPhongMaterial()
material.map = new THREE.TextureLoader().load('./img/earthmap4k.jpg')
var earthMesh = new THREE.Mesh( geometry, material )

scene.add( earthMesh )
```

Most meshes in Three.js are made up of a geometry and a material. The *geometry* represents the skeletal structure of the mesh.  The *material* is the covering that goes over the geometry.  Think of the geometry as the skeleton and the material as the skin.

Three.js has several built-in geometries, including ConeGeometry, CircleGeometry, RingGeometry, PolyhedronGeometry, etc. We use the **SphereGeometry** because planet earth is a sphere.  The 3 arguments it takes are the radius, widthSegments, and heightSegments.  

From there we use the **PhongMaterial**, which is a special material that gives our mesh a shiny finish. Note there are plenty of other material options, check the [docs](https://threejs.org/docs/index.html) for a full list.  Then, using **TextureLoader**, we load a skin of planet earth and map that to our material.

In summary, we create a new geometry and material. We then use these to create a new mesh. Lastly, we add our earthMesh to our scene.

### OrbitControls

Three.js has several very cool [control types](https://github.com/mrdoob/three.js/tree/dev/examples/js/controls), offering various ways to interact with the scene.  Examples include *FirstPersonControls* (like a first-person shooter game) and *FlyControls* (fly around the scene like Superman).  We will use **OrbitControls**, which allows us to drag and move around our planet. These controls take the camera and element being rendered as arguments.

OrbitControls does not come baked into Three.js. We must include it in our index.html:

```html
<script src="./OrbitControls.js"></script>
```

Then we add to our script file:

```javascript
var orbit = new THREE.OrbitControls(camera, renderer.domElement)
orbit.enableZoom = false
```

### Render

Lastly, we must create a render function. Inside of the render function is where we can use *requestAnimationFrame* to animate our scene.  Notice we access the earthMesh's rotation property to make our sphere spin on its axes:

```javascript
var render = function() {
    requestAnimationFrame(render)
    earthMesh.rotation.x += 0.005
    earthMesh.rotation.y += 0.005
    renderer.render(scene, camera)
}
render()
```

### Bonus: Adding a Skybox

Now we can see our planet earth rotating, but the background is black and boring.  Let's add a skybox.  Basically, a skybox is a BIG cube inside of which we place our meshes.  We give the *inside* of each side of the cube a texture.

```javascript
var imagePrefix = "./img/";
var urls = [ 'space.jpg', 'space.jpg', 'space.jpg', 'space.jpg', 'space.jpg', 'space.jpg' ];
var skyBox = new THREE.CubeTextureLoader().setPath(imagePrefix).load(urls);
scene.background = skyBox;
```

