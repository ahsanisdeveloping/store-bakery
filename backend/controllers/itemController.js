const itemModel = require("../models/itemModel");
const mongoose = require("mongoose");

const insertItem = async (req,res)=> {
    const {name,price,description,image} = req.body;
    try{
        const item = await itemModel.create({name,price,description,image});
        res.status(200).json(item);
    }catch(error){
        res.status(400).json({error:error.message})
    }
}


module.exports = {
  insertItem
};