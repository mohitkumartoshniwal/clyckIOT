const express = require("express");
const router = express.Router();
const User = require("../models/User.js");
const Auth = require("../config/auth.js");
const admin = require("../config/projectfirebaseConfig");
const { response } = require("express");
const crypto = require("crypto");
// const Auth = require('../config/auth')

router.get("/api/getUserData", Auth.checkIfAuthenticated, async (req, res) => {
  const { authToken } = req;
  const userInfo = await admin.auth().verifyIdToken(authToken);
  if (userInfo.user_id) {
    User.findOne({ email: userInfo.email })
      .then((user) => {
        if (!user) {
          if (userInfo.email_verified) {
            const newUser = new User({
              email: userInfo.email,
              name: userInfo.name,
              googleID: userInfo.user_id,
            });
            newUser
              .save()
              .then(() => {
                res.status(200).send(newUser);
              })
              .catch(() => {
                console.log("Error saving user Data");
              });
          }
        } else if (user) {
          res.status(200).send(user);
        }
      })
      .catch(() => {
        console.log("Error");
      });
  }
});

router.post(
  "/api/addDevice",
  Auth.checkIfAuthenticated,
  async (req, res, next) => {
    const { devicename } = req.body;
    const { authToken } = req;
    const userInfo = await admin.auth().verifyIdToken(authToken);
    if (!devicename) {
      res.render("dashboard", {
        name: req.user.name,
      });
    } else {
      // validation done
      User.findOne({ email: userInfo.email }).then((user) => {
        if (user) {
          console.log(user.devices.length) 
          if (user.devices.length < 7) {
            console.log(user.devices.length)
            const matched = user.devices.filter((device) => {
              const existedDevice = String(device.devicename);
              const match = existedDevice.match(devicename);
              if (match) {
                return match;
              }
            });
            if (matched.length !== 0) {
              res.status(400).send({
                msg: {
                  name: user.name,
                  devices: user.devices,
                  deviceSuccess_msg: "",
                  deviceError_msg: `Device: ${devicename} already exists`,
                },
              });
            } else {
              const newDevice = {
                devicename: devicename,
                devicestatus: "OFF",
              };

              user.devices.push(newDevice);
              user
                .save()
                .then((user) => {
                  console.log(user.devices);
                  // req.flash('deviceSuccess_msg', `Device: ${devicename} successfully added.`);
                  res.status(201).send({
                    msg: {
                      name: user.name,
                      devices: user.devices,
                      deviceSuccess_msg: `Device: ${devicename} successfully added.`,
                      deviceError_msg: "",
                    },
                  });
                })
                .catch((err) => console.log(err));
            }
          } else {
            res.status(202).send({
              msg: "You can have only 7 devices"
            })
          }
        }
      });
    }
  }
);

router.get(
  "/api/getDeviceDetails",
  Auth.checkIfAuthenticated,
  async (req, res, next) => {
    const { authToken } = req;
    const userInfo = await admin.auth().verifyIdToken(authToken);
    if (userInfo.user_id) {
      User.findOne({ email: userInfo.email }).then((user) => {
        if (user) {
          console.log(user);
          res.status(200).send(user.devices);
        }
      });
    } else {
      res.send({
        msg: "User not found",
      });
    }
  }
);

router.get("/api/hardwareDevice", (req, res) => {
  res.send("Hello There mate");
});

router.put(
  "/api/changeState",
  Auth.checkIfAuthenticated,
  async (req, res, next) => {
    const { authToken } = req;
    const userInfo = await admin.auth().verifyIdToken(authToken);
    if (userInfo.user_id) {
      User.findOne({ email: userInfo.email })
        .then((response) => {
          const obj = {
            devicename: req.body.devicename,
            devicestatus: req.body.deviceState,
          };

          let count;
          for (let i = 0; i < response.devices.length; i++) {
            if (response.devices[i].devicename === obj.devicename) {
              count = i;
              break;
            }
          }
          response.devices[count] = obj;
          const updatedDevices = response.devices;
          User.updateOne(
            { email: userInfo.email },
            { $set: { devices: updatedDevices } },
            (err, result) => {
              if (err) {
                console.log(err);
              } else {
                res.send(updatedDevices[count]);
              }
            }
          );
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      res.send({
        msg: "Please enter the request body",
      });
    }
  }
);

router.post("/api/HardWareEndDetails", (req, res) => {
  User.findOne({ googleID: req.body.auth }).then((response) => {
    console.log(response.name);
    res.send(response.devices);
  });
});

router.put(
  "/api/deleteDevice",
  Auth.checkIfAuthenticated,
  async (req, res, next) => {
    const { authToken } = req;
    const userInfo = await admin.auth().verifyIdToken(authToken);
    if (userInfo.user_id) {
      User.findOne({ email: userInfo.email })
        .then((response) => {
          let count;
          for (let i = 0; i < response.devices.length; i++) {
            if (response.devices[i].devicename === req.body.devicename) {
              count = i;
              break;
            }
          }
          if (count > -1) {
            response.devices.splice(count, 1);
          }
          const updatedDevices = response.devices;
          User.updateOne(
            { email: userInfo.email },
            { $set: { devices: updatedDevices } },
            (err, result) => {
              if (err) {
                console.log(err);
              } else {
                res.send({
                  msg: {
                    devices: updatedDevices,
                  },
                });
              }
            }
          );
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      res.send({
        msg: "Please enter the request body",
      });
    }
  }
);

module.exports = router;
