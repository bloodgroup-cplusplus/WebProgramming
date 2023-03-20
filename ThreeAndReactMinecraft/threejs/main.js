import * as THREE from "three"
import "./styles.css"

// import orbit controls 
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"




  // create our scene
  const scene = new THREE.Scene();

  // create our sphere

  const geometry = new THREE.SphereGeometry(3,64,64)

  const material = new THREE.MeshStandardMaterial({
    color:"#00ff83",

  })
  const mesh = new THREE.Mesh(geometry,material)
  scene.add(mesh)

  // get the size of the viewport here 
  //Sizes 
  const sizes = {
    width: window.innerWidth,
    height:window.innerHeight,

  }
  // we can add this sizes to our camera 


  // cREate a light 

  const light = new THREE.PointLight(0xffffff,1,100)
  light.position.set(0,10,10)
  // this is the (x,y,z) postion for the light

  scene.add(light)

  // Create a camera 

  const camera = new THREE.PerspectiveCamera(45,sizes.width/sizes.height,0.1,100)
  // 0.1 and 100 are the near and far clipping points 
  // we are going to keep it nice and simple 
  // the field of view is how much can this camera see
  // we wouldn't go above 50
  // fish eye camera is very white . The wider the camera focal lenght is the more dispersion we get 
  
  // give it aspect ratio

  // the thing we see on the screen is what the camera is looking at 
  // add this camera to the scene 

  // move the camera z axis ( dimension z value to 20)

  camera.position.z = 20

  scene.add(camera)
  // render the scene on the screen 
  // using a canvas 





  // Renderer 
  const canvas = document.querySelector('.webgl');

  const renderer = new THREE.WebGLRenderer({canvas})


  // define how big our render is and how to set size 
  renderer.setSize(sizes.width,sizes.height)
  renderer.render(scene,camera)

  // Controls 
  const controls = new OrbitControls(camera,canvas)
  controls.enableDamping=true
  // this disables pan
  controls.enablePan=false

  // this disables zoom
  controls.enableZoom=false

  // add auto rotation to true 
  controls.autoRotate=true
  controls.autoRotateSpeed=5


  // Resize 
  window.addEventListener('resize',()=>{
    //update the sizes 
    console.log(window.innerWidth)
    sizes.width= window.innerWidth;
    sizes.height = window.innerHeight;

    //update camera 
    camera.aspect = sizes.width/sizes.height
    camera.updateProjectionMatrix()

    // 
    renderer.setSize(sizes.width,sizes.height)
  })

  const loop = () =>{
    controls.update()
    renderer.render(scene,camera)
    window.requestAnimationFrame(loop)

  }

  loop()

