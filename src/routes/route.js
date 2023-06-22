const express = require('express')
const router= express.Router()
const collegeController=require('../Controller/collegeController')
const internController= require('../controller/internController')
const getCollege= require('../Controller/collegeController')
// API to create College

router.post('/functionup/colleges',collegeController.createCollege)

// API to create Intern

router.post('/functionup/interns',internController.createIntern)

// API to get college Details

router.post('/functionup/collegeDetails',collegeController.getCollegeData)

// API to get college 
router.post('/getCollege',getCollege.getCollege )

//RahulCahudhary
router.get('/allcollege',collegeController.AllCollege)

module.exports = router
