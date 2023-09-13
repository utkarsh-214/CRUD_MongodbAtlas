const express = require("express");
const app = express();
const db = require("./connection");
const schema = require("./schema");
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//crud applications
app.post('/', async(req, res)=>{
    const {title, content} = req.body;
    try{
        const newPost = await schema.create({title, content});
        res.json(newPost);
    }catch(err){
        res.status(500).send(error);
    }
});

app.get('/', async(req, res)=>{
    try {
        const posts = await schema.find();
        res.json(posts);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.get('/:id', async(req, res)=>{
    const {id} = req.params;
    try{
        const post = await schema.findById(id);
        res.json(post);
    }catch(error){
        res.status(500).send(error);
    }
});

app.put('/:id', async(req, res)=>{
    const {id} = req.params;
    const {title, content} = req.body;
    try{
        const post = await schema.findByIdAndUpdate(id, {title, content});
        res.json('Update Successful');
    }catch(error){
        res.status(500).send(error);
    }
});

app.delete('/:id', async(req, res)=>{
    const {id} = req.params;
    const {title, content} = req.body;
    try{
        const post = await schema.findByIdAndDelete(id, {title, content});
        res.json('Delete Successful');
    }catch(error){
        res.status(500).send(error);
    }
});

app.listen(3000, () => {
    console.log("listening to port 3000");
})