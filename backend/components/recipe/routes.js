const express = require('express')
const router = express.Router()
const fs = require('fs')
const { v4: uuidv4 } = require('uuid')

//const { createRecipe } = require('./actions')

const json_recipes = fs.readFileSync('components/recipe/recipe.json', 'utf-8')
let recipes = JSON.parse(json_recipes)

router.post('/', (req, res) => {
    const { title, description, images, preparation, ingredients, notes } = req.body

    if (!title || !description || !preparation || !ingredients) {
        res.status(422).send('Entries must have a title')
    }

    let newRecipe = {
        id: uuidv4(),
        title,
        description,
        images,
        preparation,
        ingredients,
        notes
    }

    recipes.push(newRecipe)
    const json_recipe = JSON.stringify(recipes)
    fs.writeFileSync('components/recipe/recipe.json', json_recipe, 'utf-8')

    res.send(newRecipe)
})

router.get('/', (req, res) => {
    recipes = JSON.parse(json_recipes)
    res.send(recipes)
})

router.get('/:id', (req, res) => {
    recipes = recipes.filter(recipe => recipe.id == req.params.id)
    res.send(recipes)
})

router.delete("/:id", async(req, res)=>{

    recipes = recipes.filter(recipe => recipe.id != req.params.id)

    const json_recipe = JSON.stringify(recipes)
    fs.writeFileSync('components/recipe/recipe.json', json_recipe, 'utf-8')
    
    res.status(200).send({message:"Removed"})
})

module.exports = router