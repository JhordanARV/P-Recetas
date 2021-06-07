const express = require('express')
const router = express.Router()
/*
const { createRecipe, deleteRecipe, getRecipe, getRecipes, updateRecipe } = require('./actions')

// GET all
router.get('/', getRecipes)

// GET by ID
router.get('/:id', getRecipe)

// POST Create
router.post('/', createRecipe)

// PUT Update
router.put('/:id', updateRecipe)

// DELETE by ID
router.delete('/:id', deleteRecipe)
*/

const { createRecipe } = require('./actions')

router.get('/', createRecipe)

module.exports = router