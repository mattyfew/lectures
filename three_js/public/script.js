// =========== SETTING UP THE SCENE =============

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 50);
camera.position.z = 30;



// ================ RENDERER ==================

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);



// ================ CONTROLS ==================

var orbit = new THREE.OrbitControls(camera, renderer.domElement);
orbit.enableZoom = false;



// ================ LIGHTING ==================

var light = new THREE.AmbientLight( 0xFFFFFF );
scene.add( light );



// ================ EARTH MESH ==================

var geometry = new THREE.SphereGeometry( 10, 32, 32 );
var material = new THREE.MeshPhongMaterial();
material.map = new THREE.TextureLoader().load('./img/earthmap4k.jpg');
var earthMesh = new THREE.Mesh( geometry, material );
scene.add( earthMesh );



// ================ SKYBOX ==================

var imagePrefix = "./img/";
var urls = [ `space.jpg`, `space.jpg`, `space.jpg`, `space.jpg`, `space.jpg`, `space.jpg` ];
var skyBox = new THREE.CubeTextureLoader().setPath(imagePrefix).load(urls);
scene.background = skyBox;



// ================ RENDER ==================

var render = function() {
    requestAnimationFrame(render);
    earthMesh.rotation.x += 0.005;
    earthMesh.rotation.y += 0.005;
    renderer.render(scene, camera);
};
render();

window.addEventListener('resize', function() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}, false);
