import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js";

const scene = new THREE.Scene();

scene.background = new THREE.Color(0x222222);

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

const renderer = new THREE.WebGLRenderer({
    antialias: true
});

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const light = new THREE.DirectionalLight(0xffffff, 2);

light.position.set(5, 10, 5);

scene.add(light);

const ambient = new THREE.AmbientLight(0xffffff, 1);

scene.add(ambient);

const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(50, 50),
    new THREE.MeshStandardMaterial({
        color: 0x555555
    })
);

floor.rotation.x = -Math.PI / 2;

scene.add(floor);

const player = new THREE.Mesh(
    new THREE.BoxGeometry(1, 2, 1),
    new THREE.MeshStandardMaterial({
        color: 0x00ff00
    })
);

player.position.y = 1;

scene.add(player);

camera.position.set(0, 6, 10);

camera.lookAt(0, 0, 0);

const keys = {};

window.addEventListener("keydown", (e) => {

    keys[e.key.toLowerCase()] = true;

});

window.addEventListener("keyup", (e) => {

    keys[e.key.toLowerCase()] = false;

});

function movePlayer() {

    let speed = 0.1;

    if(keys["w"]) player.position.z -= speed;

    if(keys["s"]) player.position.z += speed;

    if(keys["a"]) player.position.x -= speed;

    if(keys["d"]) player.position.x += speed;

}

function animate() {

    requestAnimationFrame(animate);

    movePlayer();

    renderer.render(scene, camera);

}

animate();