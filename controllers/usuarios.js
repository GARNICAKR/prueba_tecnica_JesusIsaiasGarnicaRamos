module.exports={
    obtener:(req,res)=>{
        Usuario.findAll().then(usuarios=>{
            res.json(usuarios);
        })
        

    },
    buscar:(req,res)=>{
        Usuario.findByPK(req.params.id).then(usuario=>{
            res.json(usuario);
        })
    },
    /*edad:async (req,res)=>{
         const usuarios =await Usuario.findAll();
         let UsuarioAge=[];
         let cont =0;
         let axu;
        usuarios.array.forEach(usuario => {
            axu=usuario;
            usuarios.array.forEach(usuario2=>{
                axu=
            })
        });
    }*/

    
}