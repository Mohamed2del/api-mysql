const express = require('express')
const db = require('../db')

const  router = express.Router();

router.get('/', async (req,res,next) =>{
    try{
        let results = await db.all();
        res.json(results)
    }
    catch(e){
        console.log(e)
         res.sendStatus(500)
    }
})


router.get('/:id', async (req,res,next) =>{
    try{
        let results = await db.one(req.params.id);
        res.json(results)
    }
    catch(e){
        console.log(e)
         res.sendStatus(500)
    }
})

router.delete('/:id', async (req,res,next) =>{
    try{
        let results = await db.delete(req.params.id);
        res.json(results)
    }
    catch(e){
        console.log(e)
         res.sendStatus(500)
    }
})

router.put('/:id/:col', async (req,res,next) =>{
    try{
        let results = await db.update(req.params.id,req.params.col);
        res.json(results)
    }
    catch(e){
        console.log(e)
         res.sendStatus(500)
    }
})

router.post('/:id/:scarcol/:scarcol1/:scarcol2', async (req,res,next) =>{
    try{
        let results = await db.post(req.params.id,req.params.scarcol,req.params.scarcol1,req.params.scarcol2);
        res.json(results)
    }
    catch(e){
        console.log(e)
         res.sendStatus(500)
    }
})
module.exports = router;