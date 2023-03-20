import * as THREE from "three"
function App() {
  function create_threed_scene(){
  // create our scene
  const scene = new THREE.Scene();

  // create our sphere

  const geometry = new THREE.SphereGeometry(3,64,64)

  const material = new THREE.MeshStandardMaterial({
    color:"#00ff83",

  })
  const mesh = new THREE.Mesh(geometry,material)
  scene.add(mesh)

  // Create a camera 

  const camera = new THREE.PerspectiveCamera(45,800,600)
  // we are going to keep it nice and simple 
  // the field of view is how much can this camera see
  // we wouldn't go above 50
  // fish eye camera is very white . The wider the camera focal lenght is the more dispersion we get 
  
  // give it aspect ratio

  // the thing we see on the screen is what the camera is looking at 
  // add this camera to the scene 

  scene.add(camera)
  // render the scene on the screen 
  // using a canvas 


  // Render 
  const canvas = document.querySelector('.webgl');

  const render = new THREE.WebGLRenderer({canvas})

}

return (
  <div>{create_threed_scene}</div>
)




}

export default App
