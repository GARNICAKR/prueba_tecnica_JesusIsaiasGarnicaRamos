module.exports={
    obtener:(req,res)=>{
        Roles.findAll().then(roles=>{
            res.json(roles);
        })
    },
    buscar:(req,res)=>{
        Roles.findByPK(req.params.id).then(roles=>{
            res.json(roles)
        })
    }
}