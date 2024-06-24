const express=require('express');

const testingRouter=express.Router();

const {testingController}=require('../controllers/index');

testingRouter.get('/home',testingController.testingRoutes);

module.exports=testingRouter;