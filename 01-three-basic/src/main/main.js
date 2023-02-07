import * as THREE from 'three'
// 1. 创建场景

const scene = new THREE.Scene()
// 2.创建相机
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100)
// 设置相机位置
camera.position.set(0, 0, 10)

// 相机添加到场景
scene.add(camera)



// 3. 添加物体
// 创建几何体
const geometry = new THREE.BoxGeometry(1, 1, 1) // BoxGeometry立方体缓冲集合体
// 设置材质
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })  // 基础网格材质
// 根据几何体&材质创建物体
const cube = new THREE.Mesh(geometry, material)
// 将几何体添加到场景中
scene.add(cube)

// 4.初始化渲染器
const render = new THREE.WebGL1Renderer()
// 设置渲染的尺寸大小
render.setSize(window.innerWidth, window.innerHeight)
// 将webgl渲染的canvas内容添加到body
document.body.appendChild(render.domElement)
// 使用渲染器，通过相机将场景渲染出来
render.render(scene, camera)