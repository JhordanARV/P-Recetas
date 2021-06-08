const express = require('express')
const router = express.Router()
const fs = require('fs')
const { v4: uuidv4 } = require('uuid')

const json_comment = fs.readFileSync('components/comment/comment.json', 'utf-8')
let comments = JSON.parse(json_comment)

router.post('/', (req, res) => {
    const { usuario, comment, id_recipe, fecha} = req.body

    if (!usuario || !comment || !id_recipe) {
        res.status(422).send('Entries must have a title')
    }

    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();

    today = dd + '-' + mm + '-' + yyyy;

    let newComment = {
        id: uuidv4(),
        usuario: "Invitado",
        comment,
        id_recipe,
        fecha: today
        
    }

    comments.push(newComment)
    const json_comment = JSON.stringify(comments)
    fs.writeFileSync('components/comment/comment.json', json_comment, 'utf-8')

    res.send(newComment)
})

router.get('/', (req, res) => {
    comments = JSON.parse(json_comment)
    res.send(comments)
})

router.delete("/:id", async(req, res)=>{

    comments = comments.filter(comment => comment.id != req.params.id)

    const json_comment = JSON.stringify(comments)
    fs.writeFileSync('components/comment/comment.json', json_comment, 'utf-8')
    
    res.status(200).send({message:"Removed"})
})

module.exports = router