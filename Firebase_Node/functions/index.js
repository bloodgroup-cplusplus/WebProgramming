const functions = require("firebase-functions");
const express = require("express");
const admin = require('firebase-admin')


const app=express();

app.get("/", (req, res)=>{
  res.status(200).send({data: "wordly hellos"});
});

exports.app=functions.https.onRequest(app);
