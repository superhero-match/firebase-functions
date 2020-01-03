const functions = require('firebase-functions');

let admin = require("firebase-admin");

admin.initializeApp(functions.config().firebase);


exports.newMatch = functions.https.onRequest((req, resp) => {
    console.log(req.body);

    let request = JSON.parse(req.body);

    let token = request.token;
    console.log("token:", token);

    var options = {
      priority: "high",
      timeToLive: 60 * 60 * 24
    };

    const payload = {
        data: {
            data_type: "new_match",
            superhero_id: request.superheroId
        }
    };

    return admin.messaging().sendToDevice(token, payload, options)
    .then(function(response) {
        console.log("Successfully sent message:", response);
        resp.statusCode(200).send();
      })
    .catch(function(error) {
        console.log("Error sending message:", error);
        resp.statusCode(500).send();
      });
});

exports.deleteMatch = functions.https.onRequest((req, resp) => {
    console.log(req.body);

    let request = JSON.parse(req.body);

    let token = request.token;
    console.log("token:", token);
    
    var options = {
      priority: "high",
      timeToLive: 60 * 60 * 24
    };

    const payload = {
        data: {
            data_type: "delete_match",
            superhero_id: request.superheroId
        }
    };

    return admin.messaging().sendToDevice(token, payload, options)
    .then(function(response) {
        console.log("Successfully sent message:", response);
        resp.statusCode(200).send();
      })
    .catch(function(error) {
        console.log("Error sending message:", error);
        resp.statusCode(500).send();
      });
});

exports.newLike = functions.https.onRequest((req, resp) => {
    console.log(req.body);

    let request = JSON.parse(req.body);

    let token = request.token;
    console.log("token:", token);

    var options = {
      priority: "high",
      timeToLive: 60 * 60 * 24
    };

    const payload = {
        data: {
            data_type: "new_like",
            superhero_id: request.superheroId
        }
    };

    return admin.messaging().sendToDevice(token, payload, options)
    .then(function(response) {
        console.log("Successfully sent message:", response);
        resp.statusCode(200).send();
      })
    .catch(function(error) {
        console.log("Error sending message:", error);
        resp.statusCode(500).send();
      });
});

exports.newMessage = functions.https.onRequest((req, resp) => {
    console.log(req.body);

    let request = JSON.parse(req.body);

    let token = request.token;
    console.log("token:", token);

    var options = {
      priority: "high",
      timeToLive: 60 * 60 * 24
    };

    const payload = {
        data: {
            data_type: "new_message",
            superhero_id: request.superheroId
        }
    };

    return admin.messaging().sendToDevice(token, payload, options)
    .then(function(response) {
        console.log("Successfully sent message:", response);
        resp.statusCode(200).send();
      })
    .catch(function(error) {
        console.log("Error sending message:", error);
        resp.statusCode(500).send();
      });
});
