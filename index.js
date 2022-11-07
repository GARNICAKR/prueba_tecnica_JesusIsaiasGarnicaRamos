const express=require("express");
const path = require("path");
const exphbs=require('express-handlebars');
const methodOverride=require('method-override');

const app=express();


app.set('port',process.env.PORT||3000);
app.set('views',path.join(__dirname,'views'));
app.engine('hbs',exphbs.engine({
    defaultLayout:'main',
    layoutsDir:path.join(app.get("views"),'layaouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    runtimeOptions:{
        allowProtoPropertiesByDefault:true
    },
    extname:'.hbs'
}));
app.use(methodOverride('_method'));
app.set('view engine','.hbs');
/*app.get('/',(req,res)=>{
  //res.render("index.html");
  res.send("Hola Mundo")
})*/
//Routes
app.use(require('./routes/roles'));
app.use(require('./routes/usuarios'));
app.listen(app.get('port'),()=>{
    console.log("Server on port",app.get('port'));
});
