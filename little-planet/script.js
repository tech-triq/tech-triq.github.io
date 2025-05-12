import * as THREE from "three"
import CameraControls from "camera-controls"

const canvas = document.querySelector("canvas")
 const [panoramaButton, littlePlanetButton] = document.querySelectorAll("button") 

const clock = new THREE.Clock()
const animationSpeed = 0.2

const views = {
  panorama: {
    distanceFromCenter: 0.01,
    horizontalAngle: 70,
    verticalAngle: 100,
    zoomFactor: 1,
    animated: true,
  },
  littlePlanet: {
    distanceFromCenter: -500,
    horizontalAngle: 200,
    verticalAngle: 0,
    zoomFactor: 0.15,
    animated: true,
  },
}

;(async () => {
  const environmentSphere = await createEnvironmentSphere()
  const [scene, renderer, camera, cameraControls] = createScene()

  setView({ ...views.littlePlanet, animated: false })
  panoramaButton.onclick = () => setView(views.panorama)
  littlePlanetButton.onclick = () => setView(views.littlePlanet)

  async function createEnvironmentSphere() {
    const imageUrl = "https://i.ibb.co/bvNfJdR/palermo-square.jpg"
    const environmentMap = await new THREE.TextureLoader().loadAsync(imageUrl)
    environmentMap.mapping = THREE.EquirectangularReflectionMapping
    environmentMap.colorSpace = THREE.SRGBColorSpace
    environmentMap.wrapS = THREE.RepeatWrapping
    environmentMap.repeat.x = -1

    const environmentSphere = new THREE.Mesh(
      new THREE.SphereGeometry(500, 100, 50),
      new THREE.MeshBasicMaterial({
        map: environmentMap,
        side: THREE.BackSide,
      }),
    )

    return environmentSphere
  }

  function createScene() {
    const scene = new THREE.Scene()
    scene.add(environmentSphere)

    const renderer = new THREE.WebGLRenderer({ antialias: true, canvas })
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setAnimationLoop(onFrameRequest)

    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.2,
      2000,
    )
    CameraControls.install({ THREE: THREE })
    const cameraControls = new CameraControls(camera, canvas)
    cameraControls.restThreshold = 1
    cameraControls.addEventListener(
      "rest",
      () => (cameraControls.enabled = true),
    )
    cameraControls.minZoom = 0.1;
    cameraControls.maxZoom = 1;

    return [scene, renderer, camera, cameraControls]
  }

  function setView({
    distanceFromCenter,
    horizontalAngle,
    verticalAngle,
    zoomFactor,
    animated,
  }) {
    cameraControls.enabled = false
    cameraControls.setPosition(0, 0, distanceFromCenter, animated)
    cameraControls.rotateTo(rad(horizontalAngle), rad(verticalAngle), animated)
    cameraControls.zoomTo(zoomFactor, animated)
  }

  function onFrameRequest() {
    const delta = clock.getDelta()
    const cameraChanged = cameraControls.update(delta * animationSpeed)
    cameraChanged && renderer.render(scene, camera)
  }

  window.onresize = () => {
    cameraControls.saveState()
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    cameraControls.reset(false)
    renderer.setSize(window.innerWidth, window.innerHeight)
  }

  function rad(deg) {
    return THREE.MathUtils.degToRad(deg)
  }
})()
