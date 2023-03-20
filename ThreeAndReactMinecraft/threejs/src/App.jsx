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

  const camera = new THREE.PerspectiveCamera(45)
}

return (
  <div>{create_threed_scene}</div>
)




}

export default App
