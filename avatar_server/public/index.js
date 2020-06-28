// init

import DRAvatar from "./avatar.js";
import createLayers from "./layers.js";

var layers = createLayers();
var avatar = DRAvatar();
avatar.santa = false;
avatar.shadow = false;

// query
var query_params =
    location.search.substring(1).split('&').map((x) => x.split('='));
if (query_params[0].length > 1) {
    query_params.forEach(q => {
        avatar[q[0]] = (q[1].toLowerCase() === 'true');
    })
}
avatar.load(layers);

// animation
var cnt = 0;

var eye_frames = ["100", "75", "50", "25", "0", "25", "50", "75"]
for (let i = 0; i < 300; i++) {
    eye_frames.push("100");
}

var body_angles = [0.0, 1.5707, 3.1415, -1.5707];
var body_angle_index = 0;

var avatar_pos_x = 0.0;
var avatar_pos_y = 0.0;
var avatar_scale = 1.0;

var canvas = document.getElementById("avator");

var blink = true;

// keyboard
// var back_image_list = ["intro_back_old.png", "intro_old.png", "intro.png", "intro_back.png"]
// var back_image_idx = 0;
// document.addEventListener("keydown", (event) => {
//     if (event.key === "ArrowLeft") {
//         back_image_idx--;
//         if (back_image_idx < 0) {
//             back_image_idx = back_image_list.length - 1;
//         }
//         document.getElementById("back").src = back_image_list[back_image_idx];
//     } else if (event.key === "ArrowRight") {
//         back_image_idx++;
//         if (back_image_idx >= back_image_list.length) {
//             back_image_idx = 0;
//         }
//         document.getElementById("back").src = back_image_list[back_image_idx];
//     }
// });

// document.addEventListener("keyup", () => {
//     avatar.mouth_shape ="close";
// })


// gamepad
var controllers = {};
var button_history = [];
for (let i = 0; i < 17; i++) {
    button_history.push(false);
}

window.addEventListener("gamepadconnected", (event) => {
    console.log("oonnected: " + String(event));
    controllers[event.gamepad.index] = event.gamepad;
    // setInterval(draw, 33);
});
window.addEventListener("gamepaddisconnected", (event) => {
    console.log("disoonnected: " + String(event));
    delete controllers[event.gamepad.index];
});

function updateGamePad() {
    let gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : []);
    for (let j = 0; j < gamepads.length; j++) {
        let gamepad = gamepads[j];
        if (gamepad) {
            if (gamepad.index in controllers) {
                controllers[gamepad.index] = gamepad;
            }
        }
    }

    for (let i in controllers) {
        let controller = controllers[i];
//         let lx = controller.axes[0];
//         let ly = controller.axes[1];
//         let rx = controller.axes[0];
//         let ry = controller.axes[1];

//         avatar.eye_l_pos_x = 13 * lx;
//         avatar.eye_l_pos_y = 13 * ly;
//         avatar.eye_r_pos_x = 13 * rx;
//         avatar.eye_r_pos_y = 13 * ry;

//         avatar.neck_angle = controller.axes[2] * 0.1;


//         if (controller.buttons[4].pressed) {  // LB
//             if (avatar_scale > 0.1) {
//                 avatar_scale -= 0.01;
//             }
//         } else if (controller.buttons[5].pressed) {  // RB
//             if (avatar_scale < 1.0) {
//                 avatar_scale += 0.01;
//             }
//         }

//         if (controller.buttons[6].pressed && !button_history[6]) {  // LT
//             body_angle_index--;
//             if (body_angle_index < 0) {
//                 body_angle_index = 3;
//             }
//         } else if (controller.buttons[7].pressed && !button_history[7]) {  // RT
//             body_angle_index++;
//             if (body_angle_index > 3) {
//                 body_angle_index = 0;
//             }
//         }

//         if (controller.buttons[12].pressed) {  // HAT_UP
//             avatar_pos_y -= 4;
//         } else if (controller.buttons[13].pressed) {  // HAT_DOWN
//             avatar_pos_y += 4;
//         }
//         if (controller.buttons[14].pressed) {  // HAT_LEFT
//             avatar_pos_x -= 4;
//         } else if (controller.buttons[15].pressed) {  // HAT_RIGHT
//             avatar_pos_x += 4;
//         }

//         for (let j = 0; j < controller.buttons.length; j++) {
//             button_history[j] = controller.buttons[j].pressed;
//         }

        if (controller.buttons[0].pressed) {
            blink = false;
            avatar.eye_frame_r = "r_smile";
            avatar.eye_frame_l = "l_smile";
        } else if (controller.buttons[1].pressed) {
            blink = false;
            avatar.eye_frame_r = "r_-";
            avatar.eye_frame_l = "l_-";
        } else if (controller.buttons[2].pressed) {
            blink = false;
            avatar.eye_frame_r = "r_o";
            avatar.eye_frame_l = "l_o";
        } else if (controller.buttons[3].pressed) {
            blink = false;
            avatar.eye_frame_r = "r_x";
            avatar.eye_frame_l = "l_x";
        } else {
            blink = true;
        }
    }
}

// websokcet
var ws = new WebSocket("ws://localhost:3000/ws");
ws.onmessage = function(e) {
    let data = JSON.parse(e.data);
    if (data.mouth_shape) {
        avatar.mouth_shape = data.mouth_shape
    }
    if (data.neck_angle) {
        avatar.neck_angle = data.neck_angle
    }
}


function draw() {
    updateGamePad();

    if (blink) {
        avatar.eye_frame_r = "r" + eye_frames[cnt];
        avatar.eye_frame_l = "l" + eye_frames[cnt];
    }

    let ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    ctx.save();
    // ctx.translate(avatar_pos_x, avatar_pos_y);
    ctx.scale(0.6, 0.6);
    // ctx.translate(avatar.width * 0.5, avatar.height * 0.5)
    // ctx.rotate(body_angles[body_angle_index]);
    // ctx.translate(-avatar.width * 0.5, -avatar.height * 0.5)

    avatar.draw(ctx);

    ctx.restore();

    cnt++;
    if (cnt >= eye_frames.length) {
        cnt = 0;
    }
}

window.onload = function() {
    setInterval(draw, 33);
}
