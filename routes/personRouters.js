const router = require('express').Router()

const Person = require('../models/Person')

router.post('/', async (req,res) => {

    // { name: "person", salary: 10000, approved: true }
   const {name, salary, approved} =  req.body

   if(!name){
     res.status(422).json({ error: "Name is Required!"})
   }

   if(!salary){
     res.status(422).json({ error: "Salary is Required!"})
   }

   if(!approved){
    res.status(422).json({ error: "Approved is Required!"})
   }

   const person = {
    name, 
    salary,
    approved 
   }
   
   try {
      await Person.create(person)
      res.status(201).json({message: 'Person created!'})
   } catch (error) {
      res.status(500).json({error: error})
   }
})

router.get('/', async (req,res) => {
   try {
     const person = await Person.find()
     res.status(200).json(person)
   } catch (error) {
     res.status(500).json({error: error})
   }
})

module.exports = router
