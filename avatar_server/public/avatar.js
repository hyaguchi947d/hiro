export default function DRAvatar() {return Object.create(DRAvatar.prototype);}
DRAvatar.prototype = {
    mouth_shape : "close",
    eye_frame_r : "r100",
    eye_frame_l : "l100",
    
    eye_r_pos_x : 0,
    eye_r_pos_y : 0,
    eye_l_pos_x : 0,
    eye_l_pos_y : 0,
    
    neck_angle : 0,
    
    santa : false,
    shadow : false,

    loadImage(layers, name) {
        let data = layers.layers.find((v) => v.name === name);
        let img = new Image();
        img.src = "image/" + data.image;
        img.tx = data.tx;
        img.ty = data.ty;
        img.cx = data.cx;
        img.cy = data.cy;
        return img;
    },
    drawImage(ctx, img, x = 0, y = 0) {
        ctx.drawImage(img, img.tx + x, img.ty + y);
    },

    load(layers) {
        this.img_body = this.loadImage(layers, "body");
        this.img_neck = this.loadImage(layers, "neck");
        this.img_face_base = this.loadImage(layers, "face_base");
        this.img_mouth_list = {
            "close" : this.loadImage(layers, "mouth_close"),
            "a" : this.loadImage(layers, "mouth_a"),
            "i" : this.loadImage(layers, "mouth_i"),
            "u" : this.loadImage(layers, "mouth_u"),
            "e" : this.loadImage(layers, "mouth_e"),
            "o" : this.loadImage(layers, "mouth_o")
        };
        this.img_eyeball_r = this.loadImage(layers, "eyeball_r");
        this.img_eyeball_l = this.loadImage(layers, "eyeball_l");

        if (this.shadow) {
            this.img_eye_r = this.loadImage(layers, "eye2_r");
            this.img_eye_l = this.loadImage(layers, "eye2_l");
        } else {
            this.img_eye_r = this.loadImage(layers, "eye_r");
            this.img_eye_l = this.loadImage(layers, "eye_l");
        }

        this.img_eyelid_list = {
            "r100" : this.loadImage(layers, "eyelid_r100"),
            "r75" : this.loadImage(layers, "eyelid_r75"),
            "r50" : this.loadImage(layers, "eyelid_r50"),
            "r25" : this.loadImage(layers, "eyelid_r25"),
            "r0" : this.loadImage(layers, "eyelid_r0"),
            "r_smile" : this.loadImage(layers, "eyelid_r_smile"),
            "r_-" : this.loadImage(layers, "eyelid_r_-"),
            "r_x" : this.loadImage(layers, "eyelid_r_x"),
            "r_o" : this.loadImage(layers, "eyelid_r_o"),
            
            "l100" : this.loadImage(layers, "eyelid_l100"),
            "l75" : this.loadImage(layers, "eyelid_l75"),
            "l50" : this.loadImage(layers, "eyelid_l50"),
            "l25" : this.loadImage(layers, "eyelid_l25"),
            "l0" : this.loadImage(layers, "eyelid_l0"),
            "l_smile" : this.loadImage(layers, "eyelid_l_smile"),
            "l_-" : this.loadImage(layers, "eyelid_l_-"),
            "l_x" : this.loadImage(layers, "eyelid_l_x"),
            "l_o" : this.loadImage(layers, "eyelid_l_o")
        };
        this.img_eyelid_under_r = this.loadImage(layers, "eyelid_under_r");
        this.img_eyelid_under_l = this.loadImage(layers, "eyelid_under_l");
        
        if (this.shadow) {
            this.img_front_hair = this.loadImage(layers, "front_hair2");
        } else {
            this.img_front_hair = this.loadImage(layers, "front_hair");
        }
        
        this.img_eyebrows_r = this.loadImage(layers, "eyebrows_r");
        this.img_eyebrows_l = this.loadImage(layers, "eyebrows_l");

        this.width = this.img_body.width;
        this.height = this.img_body.height;

        this.img_santa_body = this.loadImage(layers, "santa_body");
        this.img_santa_hat = this.loadImage(layers, "santa_hat");
    },

    draw(ctx) {
        // body
        this.drawImage(ctx, this.img_body);
        if (this.santa) {
            this.drawImage(ctx, this.img_santa_body);
        }

        ctx.translate(this.img_body.tx + this.img_body.cx,
                      this.img_body.ty + this.img_body.cy);

        // neck
        ctx.rotate(this.neck_angle);
        this.drawImage(ctx, this.img_neck);
        ctx.translate(this.img_neck.tx + this.img_neck.cx,
                      this.img_neck.ty + this.img_neck.cy)

        // face
        ctx.rotate(this.neck_angle * 0.3);
        this.drawImage(ctx, this.img_face_base);
        ctx.translate(this.img_face_base.tx + this.img_face_base.cx,
                      this.img_face_base.ty + this.img_face_base.cy)

        // mouth
        this.drawImage(ctx, this.img_mouth_list[this.mouth_shape]);

        // eyes
        this.drawImage(ctx, this.img_eyeball_r);
        this.drawImage(ctx, this.img_eyeball_l);

        this.drawImage(ctx, this.img_eye_r, this.eye_r_pos_x, this.eye_r_pos_y);
        this.drawImage(ctx, this.img_eye_l, this.eye_l_pos_x, this.eye_l_pos_y);

        this.drawImage(ctx, this.img_eyelid_under_r);
        this.drawImage(ctx, this.img_eyelid_under_l);

        this.drawImage(ctx, this.img_eyelid_list[this.eye_frame_r]);
        this.drawImage(ctx, this.img_eyelid_list[this.eye_frame_l]);

        this.drawImage(ctx, this.img_front_hair);

        // eyebrows
        this.drawImage(ctx, this.img_eyebrows_l);
        this.drawImage(ctx, this.img_eyebrows_r);

        if (this.santa) {
            this.drawImage(ctx, this.img_santa_hat);
        }
    }
}
