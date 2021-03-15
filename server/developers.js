
const express = require('express');
const router = express.Router();
const axios = require('axios');
const {devList} = require('../store/dataStore');
const gitAPI = "https://api.github.com/users/";

//get a developer with id
router.get('/:developerId', (req, res) => {
    if(devList[req.params.developerId]){
        res.status(200).send({user:devList[req.params.developerId],message:null});
    }
    else{
        res.status(404).send({user:null,message:"User Does not exist"});
    }
});
//delete a developer with a specific id;
router.delete('/:developerId',(req,res)=>{
    if(devList[req.params.developerId]){
        delete devList[req.params.developerId];
        return res.status(204);
    }
    else{
        return res.status(404).send({message:"User Does not exist"});
    }
});
//get all develoopers
router.get('/',(req,res)=>{
    const devArray = [];
    if(Object.keys(devList).length!==0){
        Object.keys(devList).forEach((id)=>{
            console.log(id);
            const devProf = {};
            devProf.id = id;
            devProf.avatar_url = devList[id].avatar_url;
            devArray.push(devProf);
        });
    }
    return res.status(200).send(devArray);
})

//create a new developer
router.post('/',(req,res)=>{
    const github_id = req.body.github_id;
    const user = req.body;
    axios.get(gitAPI+github_id)
    .then((response)=>{
        if(response.status === 404){     
            return res.status(404).send({message:"Enter a valid github id"});
        }
        const {avatar_url,name,company,location,blog,email,bio} =  response.data;
        user.avatar_url = avatar_url;
        user.name = name;
        user.company = company;
        user.location = location;
        user.blog = blog;
        user.email = email;
        user.bio = bio;
        return response.data.repos_url;
    })
    .then((repos_url)=>{
        axios.get(repos_url)
        .then((response)=>{  
            const repos = response.data.map((repo)=>{return {name:repo.name,html_url:repo.html_url,desription:repo.description,updated_at:repo.updated_at}});
            user.repos = repos;
            devList[user.github_id] = user;
            console.log(devList);
            return res.status(201).send({id:user.github_id})
        })
    })
    .catch(error=>{
        return res.status(500).send({message:error.message});
    })
})


module.exports = router;