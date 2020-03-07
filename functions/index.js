/*
  Copyright (C) 2019 - 2020 MWSOFT
  This program is free software: you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.
  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.
  You should have received a copy of the GNU General Public License
  along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
const functions = require('firebase-functions');

let admin = require("firebase-admin");

admin.initializeApp(functions.config().firebase);


exports.newMatch = functions.https.onRequest((req, resp) => {
    console.log(req.body);

    let token = req.body.token;
    console.log("token:", token);

    let options = {
      priority: "high",
      timeToLive: 60 * 60 * 24
    };

    const payload = {
        data: {
            data_type: "new_match",
            superhero_id: req.body.superheroId
        }
    };

    return admin.messaging().sendToDevice(token, payload, options)
    .then(function(response) {
        console.log("Successfully sent message:", JSON.stringify(response));
        resp.send().status(200);
      })
    .catch(function(error) {
        console.log("Error sending message:", error);
        resp.send().status(500);
      });
});

exports.deleteMatch = functions.https.onRequest((req, resp) => {
    console.log(req.body);

    let token = req.body.token;
    console.log("token:", token);
    
    let options = {
      priority: "high",
      timeToLive: 60 * 60 * 24
    };

    const payload = {
        data: {
            data_type: "delete_match",
            superhero_id: req.body.superheroId
        }
    };

    return admin.messaging().sendToDevice(token, payload, options)
        .then(function(response) {
            console.log("Successfully sent message:", JSON.stringify(response));
            resp.send().status(200);
        })
        .catch(function(error) {
            console.log("Error sending message:", error);
            resp.send().status(500);
        });
});

exports.newLike = functions.https.onRequest((req, resp) => {
    console.log(req.body);

    let token = req.body.token;
    console.log("token:", token);

    let options = {
      priority: "high",
      timeToLive: 60 * 60 * 24
    };

    const payload = {
        data: {
            data_type: "new_like",
            superhero_id: req.body.superheroId
        }
    };

    return admin.messaging().sendToDevice(token, payload, options)
        .then(function(response) {
            console.log("Successfully sent message:", JSON.stringify(response));
            resp.send().status(200);
        })
        .catch(function(error) {
            console.log("Error sending message:", error);
            resp.send().status(500);
        });
});

exports.newMessage = functions.https.onRequest((req, resp) => {
    console.log(req.body);

    let token = req.body.token;
    console.log("token:", token);

    let options = {
      priority: "high",
      timeToLive: 60 * 60 * 24
    };

    const payload = {
        data: {
            data_type: "new_message",
            superhero_id: req.body.superheroId
        }
    };

    return admin.messaging().sendToDevice(token, payload, options)
        .then(function(response) {
            console.log("Successfully sent message:", JSON.stringify(response));
            resp.send().status(200);
        })
        .catch(function(error) {
            console.log("Error sending message:", error);
            resp.send().status(500);
        });
});
