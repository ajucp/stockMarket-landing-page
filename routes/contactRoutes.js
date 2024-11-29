const express=require('express');
const {submitContactForm}=require('../controllers/contactC');

const routes=express.Router();
routes.post('/',submitContactForm);
module.exports=routes;