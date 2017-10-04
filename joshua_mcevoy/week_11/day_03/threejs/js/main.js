let renderer, cube, sphere, controls;
let spherePos = 0;
let cubeYPosition = 0;

const scene = new THREE.Scene();

let width = window.innerWidth;
let height = window.innerHeight;

//args for camera: field of view, aspect ratio, near, far
let camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);

camera.position.x = -30;
camera.position.y = 40;
camera.position.z = 30;

camera.lookAt(scene.position);

//Two side-effects
//A new empty object is assigned to the keyword 'this'
//Implict return takes place (the object that is assigned to 'this' is automatiically returned)
const controller = new function(){
  this.bouncingSpeed = 0.02;
  this.rotationSpeed = 0.02;
};

const animate = () => {
  const rotationSpeed = controller.rotationSpeed;
  spherePos += controller.bouncingSpeed;
  sphere.position.x = 20 + 10 * Math.cos(spherePos);
  sphere.position.y = 2 + 10 * Math.abs(Math.sin(spherePos));


  cube.rotation.x += rotationSpeed;
  cube.rotation.y += rotationSpeed;
  cube.rotation.z += rotationSpeed;
  cubeYPosition += controller.bouncingSpeed;
  cube.position.y = 2 + 10 * Math.abs(Math.sin(cubeYPosition));




  renderer.render(scene, camera);
  requestAnimationFrame(animate);
};

const addLights = () => {
  const pointLight = new THREE.PointLight(0xffffff);
  pointLight.position.set(-40, 60, 20);
  pointLight.castShadow = true;
  pointLight.shadow.mapSize.width = 2048;
  pointLight.shadow.mapSize.height = 2048;
  scene.add(pointLight);
};



const init = () => {
  renderer = new THREE.WebGLRenderer();
  renderer.setClearColor(0x00A7FF);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio || 1);
  renderer.shadowMap.enabled = true;
  console.log(renderer);
  document.querySelector("#output").appendChild(renderer.domElement);

  const axes = new THREE.AxisHelper(40);
  scene.add(axes);

  const planeMaterial = new THREE.MeshLambertMaterial({
    color: 0xFF4452
  });
  const planeGeometry = new THREE.PlaneGeometry(60, 20);

  const plane = new THREE.Mesh(planeGeometry, planeMaterial);
  scene.add(plane);
  plane.rotation.x = THREE.Math.degToRad(-90);

  //x: left to right
  plane.position.x = 15;
  //y: top to bottom
  plane.position.y = 0;
  //z: near to far
  plane.position.z = 0;
  plane.receiveShadow = true;

  //when creating a new object in the scene you need: Material, Geometry, Mesh
  const cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
  const cubeMaterial = new THREE.MeshLambertMaterial({
    color: 0xD144FF,
    side: THREE.DoubleSide,
    // wireframe: true
  });

  cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
  cube.position.x = -4;
  cube.position.y = 3;
  cube.castShadow = true;
  scene.add(cube);

  // Radius, Latitudes, Longitudes
  const sphereGeometry = new THREE.SphereGeometry(4, 20, 20);
  const sphereMaterial = new THREE.MeshLambertMaterial({
    color: 0x00FF98,
    // wireframe: true
  });


  sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
  sphere.position.x = 20;
  sphere.position.y = 4;
  sphere.position.z = 2;
  sphere.castShadow = true;
  scene.add(sphere);

  addLights();

  let gui = new dat.GUI();
  gui.add(controller, "bouncingSpeed", 0, 0.5);
  gui.add(controller, "rotationSpeed", 0, 0.5);

  controls = new THREE.OrbitControls(camera, renderer.domElement);

  renderer.render(scene, camera);

  animate();
};

const onResize = () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
};

window.onload = init;
window.addEventListener("resize", onResize);
