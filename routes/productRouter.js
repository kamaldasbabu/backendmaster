const router = require('express').Router();
const productModel = require('../models/productModel');

// GET all product
router.get('/', async(req,res) => {
    try{
        const products = await productModel.find();
        res.send(products)
    }catch(err){
        res.send('Error '+err);
    }
})

// GET single product
router.get('/:productId', async(req,res) => {
    try{
        const product = await productModel.findById(req.params.productId);
        res.send(product);
    }catch(err){
        res.send('Error '+err);
    }
})

// CREATE product
router.post('/', async(req,res) => {
    const product = new productModel({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    });
    try{
        const saveProduct = await product.save();
        res.send(saveProduct);
    }catch(err){
        res.status(400).send(err);
    }
})

// UPDATE product
router.patch('/:productId', (req,res) => {
    res.send('UPDATE product');
})

// DELETE product
router.patch('/:productId', (req,res) => {
    res.send('DELETE product');
})

module.exports = router;