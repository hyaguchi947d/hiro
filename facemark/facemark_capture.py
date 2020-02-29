#!/usr/bin/env python

import random
import math
import numpy as np
import cv2 as cv

from websocket import create_connection
import json

ws = create_connection('ws://localhost:3000/ws')

# please edit below for your env.
cap = cv.VideoCapture(2)
cap.set(cv.CAP_PROP_FRAME_WIDTH, 640)
cap.set(cv.CAP_PROP_FRAME_HEIGHT, 480)
cap.set(cv.CAP_PROP_FOURCC, cv.VideoWriter_fourcc('H', '2', '6', '4'))

facemark = cv.face.createFacemarkLBF()

try:
    facemark.loadModel(cv.samples.findFile('lbfmodel.yaml'))
except cv.error:
    print("lbfmodel.yaml not found")
    exit()

cascade = cv.CascadeClassifier(cv.samples.findFile('lbpcascade_frontalface_improved.xml'))
if cascade.empty() :
    print("cascade not found")
    exit()

mouth_old_state = "close"
neck_old_angle = 0.0
neck_angle_list = [0, 0, 0, 0, 0]


while(True):
    ret, frame = cap.read()
    js_message = {}

    try:
        faces = cascade.detectMultiScale(frame, 1.05,  3, cv.CASCADE_SCALE_IMAGE, (30, 30))
        ok, landmarks = facemark.fit(frame, faces=faces)

        for marks in landmarks:
            # 68 landmarks
            # 0-16: edge
            for i in range(0, 16):
                cv.line(frame,
                        tuple(marks[0][i]), tuple(marks[0][i + 1]),
                        (255, 255, 255), 2)

            # 17-21, 22-26: eyebrows(R,L)
            for i in range(17, 21):
                cv.line(frame,
                        tuple(marks[0][i]), tuple(marks[0][i + 1]),
                        (255, 255, 255), 2)
            for i in range(22, 26):
                cv.line(frame,
                        tuple(marks[0][i]), tuple(marks[0][i + 1]),
                        (255, 255, 255), 2)

            # 27-30, 31-35: nose
            for i in range(27, 30):
                cv.line(frame,
                        tuple(marks[0][i]), tuple(marks[0][i + 1]),
                        (255, 255, 255), 2)
            for i in range(31, 35):
                cv.line(frame,
                        tuple(marks[0][i]), tuple(marks[0][i + 1]),
                        (255, 255, 255), 2)
                
            # 36-41, 42-47: eyes(R.L)
            for i in range(36, 41):
                cv.line(frame,
                        tuple(marks[0][i]), tuple(marks[0][i + 1]),
                        (255, 0, 0), 2)
            cv.line(frame,
                    tuple(marks[0][41]), tuple(marks[0][36]),
                    (255, 0, 0), 2)

            for i in range(42, 47):
                cv.line(frame,
                        tuple(marks[0][i]), tuple(marks[0][i + 1]),
                        (255, 0, 0), 2)
            cv.line(frame,
                    tuple(marks[0][47]), tuple(marks[0][42]),
                    (255, 0, 0), 2)


            # 48-59: mouth (outer)
            for i in range(48, 59):
                cv.line(frame,
                        tuple(marks[0][i]), tuple(marks[0][i + 1]),
                        (0, 0, 255), 2)
            cv.line(frame,
                    tuple(marks[0][59]), tuple(marks[0][48]),
                    (0, 0, 255), 2)

            # 60-67: mouth (inner)
            for i in range(60, 67):
                cv.line(frame,
                        tuple(marks[0][i]), tuple(marks[0][i + 1]),
                        (0, 255, 255), 2)
            cv.line(frame,
                    tuple(marks[0][67]), tuple(marks[0][60]),
                    (0, 255, 255), 2)

            # calc neck angle
            face_left = marks[0][0]
            face_under = marks[0][8]
            face_right = marks[0][16]
            face_center = (face_left + face_right) * 0.5
            face_norm = face_under - face_center
            face_norm = face_norm / np.linalg.norm(face_norm)
            neck_angle = math.atan2(face_norm[0], face_norm[1])
            print("neck_angle = %f" % neck_angle)
            neck_angle_list.append(neck_angle)
            neck_angle_list = neck_angle_list[1:5]
            print(neck_angle_list)

            # neck_new_angle = neck_angle * 0.4
            # neck_new_angle = neck_new_angle * 0.3 + neck_old_angle * 0.7
            # neck_old_angle = neck_new_angle

            neck_new_angle = sum(neck_angle_list) / len(neck_angle_list)
            neck_new_angle *= 0.4

            js_message["neck_angle"] = neck_new_angle

            # calc mouth xy
            mouth_x = np.linalg.norm(marks[0][64] - marks[0][60])
            mouth_y = np.linalg.norm(marks[0][66] - marks[0][62])
            print("mouth: %f : %f" % (mouth_x, mouth_y))

            mouth_ratio = 0
            if mouth_x > 0 :
                mouth_ratio = mouth_y / mouth_x

            mouth_new_state = "close"
            # if mouth_ratio > 0.25:
            #     mouth_new_state = "a"
            # elif mouth_ratio > 0.15:
            #     mouth_new_state = "e"

            if mouth_ratio > 0.2:
                mouth_new_state = "a"
            elif mouth_ratio > 0.1:
                mouth_new_state = "e"

            
            # if mouth_ratio > 0.1:
            #     mouth_new_state = "e"
            print(mouth_new_state)
                
            if mouth_old_state != mouth_new_state:
                mouth_old_state = mouth_new_state
                js_message["mouth_shape"] = mouth_new_state

            if "mouth_shape" in js_message or "neck_angle" in js_message:
                ws.send(json.dumps(js_message))

            cv.imshow("Image Landmarks", frame)
    except Exception as e:
        print(e)
        
    cv.waitKey(1)

cap.release()
cv.destroyAllWindows()
