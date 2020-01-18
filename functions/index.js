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
