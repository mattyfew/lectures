var textMesh, cubeMesh
var textColor = "#ffae23"





// =========== TEXT =============

var loader = new THREE.FontLoader();

loader.load( '/public/assets/fonts/optimer_regular.typeface.json', function ( font ) {
    var textGeometry = new THREE.TextGeometry( 'Hello Wasabi', {
        font: font,
        size: 6,
        height: 3,
        curveSegments: 10
    });
    var textMaterial = new THREE.MeshPhongMaterial( {
        color: textColor,
        emissive: 0x20202,
        specular: 0x111111,
        side: THREE.DoubleSide,
        shading: THREE.FlatShading
    });
    textMesh = new THREE.Mesh( textGeometry, textMaterial );
    textMesh.position.set(-23, 17, -15)

    scene.add(textMesh)
})





// =========== SCENE =============

var scene = new THREE.Scene()
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z = 40





// =========== RENDERER =============

var renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)





// =========== AMBIENT LIGHT =============

// var light = new THREE.AmbientLight( 0xFFFFFF )
// scene.add( light )





// =========== DIRECTIONAL LIGHTS =============

// var pointColor = "#CF2DE3";
var directionalLight = new THREE.DirectionalLight();
directionalLight.position.set(0, 0,  40);
directionalLight.intensity = 0.8;

scene.add(directionalLight);


var backDirectionalLight = directionalLight.clone()
backDirectionalLight.position.set(0,0, -40)

scene.add(backDirectionalLight);




// =========== EARTHMESH =============

var geometry = new THREE.SphereGeometry( 10, 32, 32 )
var material = new THREE.MeshPhongMaterial()
material.map = new THREE.TextureLoader().load('/public/assets/earthmap4k.jpg')
var earthMesh = new THREE.Mesh( geometry, material )

scene.add( earthMesh )




// =========== CONTROLS =============

var orbit = new THREE.OrbitControls(camera, renderer.domElement)
// orbit.enableZoom = false





// =========== SKYBOX =============

var imagePrefix = "/public/assets/"
var urls = [ 'space.jpg', 'space.jpg', 'space.jpg', 'space.jpg', 'space.jpg', 'space.jpg' ]
var skyBox = new THREE.CubeTextureLoader().setPath(imagePrefix).load(urls)
scene.background = skyBox





// =========== DAT.GUI =============

var controls = new function() {
    this.textColor = textColor
    this.guiRotationX = 0.005;
    this.guiRotationY = 0.005;
}

var gui = new dat.GUI();
gui.add(controls, 'guiRotationX', 0, .2);
gui.add(controls, 'guiRotationY', 0, .2);

gui.addColor(controls, 'textColor').onChange(function (e) {
    textMesh.material.color = new THREE.Color(e);
});




// =========== RENDER =============

var render = function() {
    requestAnimationFrame(render)
    // earthMesh.rotation.x += 0.005
    // earthMesh.rotation.y += 0.005

    earthMesh.rotation.x += controls.guiRotationX
    earthMesh.rotation.y += controls.guiRotationY

    renderer.render(scene, camera)
}
render()
