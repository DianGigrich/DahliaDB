const express = require('express');
const router = express.Router();
const {User,Dahlia} = require('../models');
const jwt = require("jsonwebtoken")

router.get("/",(req,res)=>{
    Dahlia.findAll().then(dahliaData=>{
        res.json(dahliaData)
    }).catch(err=>{
        console.log(err);
        res.json({
            msg:"an error occurred",
            err,
        })
    })
})
router.get("/:id",(req,res)=>{
    Dahlia.findByPk(req.params.id,{
        include:[User]
    }).then(dahliaData=>{
        res.json(dahliaData)
    }).catch(err=>{
        console.log(err);
        res.json({
            msg:"an error occurred",
            err,
        })
    })
})

router.post("/",(req,res)=>{
    try{
        const token = req.headers.authorization.split(" ")[1];
        const userData = jwt.verify(token,process.env.JWT_SECRET)
        Dahlia.create({
            task:req.body.task,
            priority:req.body.priority,
            isComplete:req.body.isComplete,
            UserId:userData.id
        }).then(dahliaData=>{
            res.json(dahliaData)
        })
    }catch (err) {
        console.log(err);
        res.status(500).json({msg:"error occurred",err})
    }
})

router.delete("/:id",(req,res)=>{
    try{
        const token = req.headers.authorization.split(" ")[1];
        const userData = jwt.verify(token,process.env.JWT_SECRET)
        Dahlia.findByPk(req.params.id).then(foundDahlia=>{
            if(!foundDahlia){
                return res.status(404).json({
                    msg:"no such item exists!"
                })
            } else if(foundDahlia.UserId!==userData.id){
                return res.status(403).json({
                    msg:"you dont own this dahlia!"
                })
            } else {
                Dahlia.destroy({
                    where:{
                        id:req.params.id
                    }
                }).then(delDahlia=>{
                    res.json(delDahlia)
                })
            }
        })
    }catch(err){
        console.log(err);
        res.status(500).json({msg:"an error occured",err})
    }
})
router.put("/:id",(req,res)=>{
    try{
        const token = req.headers.authorization.split(" ")[1];
        const userData = jwt.verify(token,process.env.JWT_SECRET)
        Dahlia.findByPk(req.params.id).then(foundDahlia=>{
            if(!foundDahlia){
                return res.status(404).json({
                    msg:"no such item exists!"
                })
            } else if(foundDahlia.UserId!==userData.id){
                return res.status(403).json({
                    msg:"you dont own this dahlia!"
                })
            } else {
                Dahlia.update(
                    req.body,
                    {
                    where:{
                        id:req.params.id
                    }
                }).then(delDahlia=>{
                    res.json(delDahlia)
                })
            }
        })
    }catch(err){
        console.log(err);
        res.status(500).json({msg:"an error occured",err})
    }
})

module.exports = router;