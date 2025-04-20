const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.static("public"));

app.get("/web1", (req,res)=>{
    res.sendFile(path.join(__dirname,"public", "web1.html"))
});
app.get("/web2", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "web2"));
  });

app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en http://localhost:${PORT}`)
})