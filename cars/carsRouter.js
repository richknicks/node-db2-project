const express = require("express");
const db = require('../data/connection');

const router = express.Router();

router.get("/", (req,res)=>{
 db("cars")
 .then(car=>{
     res.json(200).json(car)
 })
 .catchs(error=>{
     res.status(500).json({
         error: `This is an error${error}`
     });
 });
});

router.get("/:id", (req, res)=>{
    const {id}=req.params
    db("cars")
    .where({id})
    .first()
    .then(car=>{
        res.status(200).json(car)
    })
    .catch(error=>{
        res.status(500).json({
            error: `There is an error ${error}`
        });
    });
});

router.post("/", (req, res) => {
    const change = req.body;
    const {id}=req.params;
    db("cars")
      .insert(change, id)
      .then(ids => {
        db("cars")
          .where({ id: ids[0] })
          .then(newcarEntry => {
            res.status(201).json(newcarEntry);
          });
      })
      .catch(err => {
        console.log("POST error", err);
        res.status(500).json({ message: "Failed to store data" });
      });
  });
  
  module.exports = router;