const recipe = []

const createRecipe = (req, res) => {
    const { title, description, images, preparation, ingredients, notes } = req.body
    
    if(!title || !description || !preparation || !ingredients){
        res.status(422).send('Entries must have a title')
    }
    
    let newRecipe = {
        title, 
        description, 
        images, 
        preparation, 
        ingredients, 
        notes
    }
    
    recipe.push(newRecipe);
}