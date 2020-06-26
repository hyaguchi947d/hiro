var layers = 
{
    "layers": [
        {
            "name": "body",
            "image": "body.png",
            "tx": 0,  // world座標系から見た左上隅
            "ty": 0,
            "width": 1587,
            "height": 2245,
            "cx": 793,  // 画像座標系から見た中心、ここがbody座標系の原点になる。
            "cy": 1122
        },
        {
            "name": "neck",
            "image": "neck.png",
            // "tx": 671,  // world座標系
            // "ty": 882,
            "tx": -122,  // body座標系
            "ty": -240,
            "width": 244,
            "height": 196,
            "cx": 122,
            "cy": 196
        },
        {
            "name": "face_base",
            "image": "face_base.png",
            // "tx": 506,  // world座標系
            // "ty": 322,
            "tx": -287,  // neck座標系
            "ty": -756,
            "width": 568,
            "height": 678,
            "cx": 284,
            "cy": 567
        },
        {
            "name": "eyeball_r",
            "image": "eyeball.png",
            // "tx": 632,  // world
            // "ty": 651,
            "tx": -158,  // 以下はすべてface座標系, world - 790
            "ty": -238,  // world - 889
            "width": 106,
            "height": 106,
            "cx": 53,
            "cy": 53
        },
        {
            "name": "eyeball_l",
            "image": "eyeball.png",
            // "tx": 832,
            // "ty": 651,
            "tx": 42,
            "ty": -238,
            "width": 106,
            "height": 106,
            "cx": 53,
            "cy": 53
        },

        {
            "name": "mouth_close",
            "image": "mouth_close.png",
            // "tx": 752,
            // "ty": 874,
            "tx": -38,
            "ty": -15,
            "width": 76,
            "height": 11,
            "cx": 0,
            "cy": 0
        },
        {
            "name": "mouth_a",
            "image": "mouth_a.png",
            // "tx": 746,
            // "ty": 845,
            "tx": -44,
            "ty": -45,
            "width": 92,
            "height": 73,
            "cx": 0,
            "cy": 0
        },
        {
            "name": "mouth_i",
            "image": "mouth_i.png",
            // "tx": 749,
            // "ty": 872,
            "tx": -42,
            "ty": -17,
            "width": 86,
            "height": 32,
            "cx": 0,
            "cy": 0
        },
        {
            "name": "mouth_u",
            "image": "mouth_u.png",
            // "tx": 775,
            // "ty": 869,
            "tx": -15,
            "ty": -20,
            "width": 33,
            "height": 28,
            "cx": 0,
            "cy": 0
        },
        {
            "name": "mouth_e",
            "image": "mouth_e.png",
            // "tx": 748,
            // "ty": 863,
            "tx": -42,
            "ty": -26,
            "width": 82,
            "height": 35,
            "cx": 0,
            "cy": 0
        },
        {
            "name": "mouth_o",
            "image": "mouth_o.png",
            // "tx": 770,
            // "ty": 861,
            "tx": -20,
            "ty": -28,
            "width": 43,
            "height": 45,
            "cx": 0,
            "cy": 0
        },
        {
            "name": "mouth_he",
            "image": "mouth_he.png",
            // "tx": 764,
            // "ty": 877,
            "tx": -26,
            "ty": -12,
            "width": 50,
            "height": 9,
            "cx": 0,
            "cy": 0
        },
        {
            "name": "mouth_^",
            "image": "mouth_^.png",
            // "tx": 771,
            // "ty": 871,
            "tx": -19,
            "ty": -18,
            "width": 38,
            "height": 20,
            "cx": 0,
            "cy": 0
        },
        {
            "name": "mouth_kuri",
            "image": "mouth_kuri.png",
            // "tx": 766,
            // "ty": 859,
            "tx": -24,
            "ty": -30,
            "width": 51,
            "height": 38,
            "cx": 0,
            "cy": 0
        },
        {
            "name": "mouth_w",
            "image": "mouth_w.png",
            // "tx": 756,
            // "ty": 870,
            "tx": -34,
            "ty": -19,
            "width": 62,
            "height": 22,
            "cx": 0,
            "cy": 0
        },

        {
            "name": "eye_r",
            "image": "eye.png",
            // "tx": 653,
            // "ty": 667,
            "tx": -137,
            "ty": -222,
            "width": 73,
            "height": 73,
            "cx": 36,
            "cy": 36
        },
        {
            "name": "eye_l",
            "image": "eye.png",
            // "tx": 847,
            // "ty": 667,
            "tx": 57,
            "ty": -222,
            "width": 73,
            "height": 73,
            "cx": 36,
            "cy": 36
        },

        {
            "name": "eye2_r",
            "image": "eye2.png",
            "tx": -137,
            "ty": -222,
            "width": 73,
            "height": 73,
            "cx": 36,
            "cy": 36
        },
        {
            "name": "eye2_l",
            "image": "eye2.png",
            "tx": 57,
            "ty": -222,
            "width": 73,
            "height": 73,
            "cx": 36,
            "cy": 36
        },

        {
            "name": "eyelid_under_r",
            "image": "eyelid_under_r.png",
            // "tx": 626,
            // "ty": 729,
            "tx": -164,
            "ty": -160,
            "width": 119,
            "height": 36,
            "cx": 0,
            "cy": 0
        },
        {
            "name": "eyelid_under_l",
            "image": "eyelid_under_l.png",
            // "tx": 823,
            // "ty": 728,
            "tx": 33,
            "ty": -161,
            "width": 119,
            "height": 36,
            "cx": 0,
            "cy": 0
        },


        {
            "name": "eyelid_r100",
            "image": "eyelid_r100.png",
            // "tx": 613,
            // "ty": 639,
            "tx": -177,
            "ty": -250,
            "width": 138,
            "height": 66,
            "cx": 0,
            "cy": 0
        },
        {
            "name": "eyelid_l100",
            "image": "eyelid_l100.png",
            // "tx": 818,
            // "ty": 639,
            "tx": 28,
            "ty": -250,
            "width": 138,
            "height": 66,
            "cx": 0,
            "cy": 0
        },

        {
            "name": "eyelid_r75",
            "image": "eyelid_r75.png",
            // "tx": 613,
            // "ty": 640,
            "tx": -177,
            "ty": -249,
            "width": 135,
            "height": 76,
            "cx": 0,
            "cy": 0
        },
        {
            "name": "eyelid_l75",
            "image": "eyelid_l75.png",
            // "tx": 821,
            // "ty": 640,
            "tx": 31,
            "ty": -249,
            "width": 135,
            "height": 76,
            "cx": 0,
            "cy": 0
        },

        {
            "name": "eyelid_r50",
            "image": "eyelid_r50.png",
            // "tx": 613,
            // "ty": 645,
            "tx": -177,
            "ty": -244,
            "width": 139,
            "height": 76,
            "cx": 0,
            "cy": 0
        },
        {
            "name": "eyelid_l50",
            "image": "eyelid_l50.png",
            // "tx": 817,
            // "ty": 645,
            "tx": 27,
            "ty": -244,
            "width": 139,
            "height": 76,
            "cx": 0,
            "cy": 0
        },

        {
            "name": "eyelid_r25",
            "image": "eyelid_r25.png",
            // "tx": 611,
            // "ty": 646,
            "tx": -179,
            "ty": -243,
            "width": 139,
            "height": 89,
            "cx": 0,
            "cy": 0
        },
        {
            "name": "eyelid_l25",
            "image": "eyelid_l25.png",
            // "tx": 819,
            // "ty": 645,
            "tx": 29,
            "ty": -244,
            "width": 139,
            "height": 89,
            "cx": 0,
            "cy": 0
        },

        {
            "name": "eyelid_r0",
            "image": "eyelid_r0.png",
            // "tx": 613,
            // "ty": 644,
            "tx": -177,
            "ty": -245,
            "width": 135,
            "height": 96,
            "cx": 0,
            "cy": 0
        },
        {
            "name": "eyelid_l0",
            "image": "eyelid_l0.png",
            // "tx": 820,
            // "ty": 644,
            "tx": 30,
            "ty": -245,
            "width": 135,
            "height": 96,
            "cx": 0,
            "cy": 0
        },

        {
            "name": "eyelid_r_smile",
            "image": "eyelid_r_smile.png",
            // "tx": 611,
            // "ty": 648,
            "tx": -179,
            "ty": -241,
            "width": 138,
            "height": 105,
            "cx": 0,
            "cy": 0
        },
        {
            "name": "eyelid_l_smile",
            "image": "eyelid_l_smile.png",
            // "tx": 820,
            // "ty": 646,
            "tx": 30,
            "ty": -243,
            "width": 138,
            "height": 105,
            "cx": 0,
            "cy": 0
        },

        {
            "name": "eyelid_r_-",
            "image": "eyelid_r_-.png",
            // "tx": 611,
            // "ty": 648,
            "tx": -179,
            "ty": -241,
            "width": 138,
            "height": 105,
            "cx": 0,
            "cy": 0
        },
        {
            "name": "eyelid_l_-",
            "image": "eyelid_l_-.png",
            // "tx": 820,
            // "ty": 646,
            "tx": 30,
            "ty": -243,
            "width": 138,
            "height": 105,
            "cx": 0,
            "cy": 0
        },

        {
            "name": "eyelid_r_x",
            "image": "eyelid_r_x.png",
            // "tx": 611,
            // "ty": 648,
            "tx": -179,
            "ty": -241,
            "width": 139,
            "height": 105,
            "cx": 0,
            "cy": 0
        },
        {
            "name": "eyelid_l_x",
            "image": "eyelid_l_x.png",
            // "tx": 820,
            // "ty": 646,
            "tx": 30,
            "ty": -243,
            "width": 138,
            "height": 105,
            "cx": 0,
            "cy": 0
        },

        {
            "name": "eyelid_r_o",
            "image": "eyelid_r_o.png",
            // "tx": 611,
            // "ty": 648,
            "tx": -179,
            "ty": -241,
            "width": 138,
            "height": 105,
            "cx": 0,
            "cy": 0
        },
        {
            "name": "eyelid_l_o",
            "image": "eyelid_l_o.png",
            // "tx": 820,
            // "ty": 646,
            "tx": 30,
            "ty": -243,
            "width": 138,
            "height": 105,
            "cx": 0,
            "cy": 0
        },

        {
            "name": "front_hair",
            "image": "front_hair.png",
            // "tx": 524,
            // "ty": 395,
            "tx": -266,
            "ty": -494,
            "width": 527,
            "height": 453,
            "cx": 0,
            "cy": 0
        },
        {
            "name": "front_hair2",
            "image": "front_hair2.png",
            "tx": -266,
            "ty": -494,
            "width": 527,
            "height": 453,
            "cx": 0,
            "cy": 0
        },
        {
            "name": "eyebrows_r",
            "image": "eyebrows_r.png",
            // "tx": 610,
            // "ty": 586,
            "tx": -180,
            "ty": -303,
            "width": 134,
            "height": 35,
            "cx": 0,
            "cy": 0
        },
        {
            "name": "eyebrows_l",
            "image": "eyebrows_l.png",
            // "tx": 824,
            // "ty": 583,
            "tx": 34,
            "ty": -306,
            "width": 134,
            "height": 35,
            "cx": 0,
            "cy": 0
        },

        // christmas
        {
            "name": "santa_hat",
            "image": "santa_hat.png",
            // "tx": 504, // -790
            // "ty": 138, // -889
            "tx": -286,
            "ty": -751,
            "width": 608,
            "height": 418,
            "cx": 0,
            "cy": 0
        },
        {
            "name": "santa_body",
            "image": "santa_body.png",
            "tx": 0,
            "ty": 0,
            "width": 1587,
            "height": 2245,
            "cx": 0,
            "cy": 0
        }

    ]
};

export default function createLayers() {
    return layers;
}