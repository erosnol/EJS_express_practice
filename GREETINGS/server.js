const express = require("express")


//* ======= set up 
const app = express()
const PORT = 3000;
app.set('view engine', 'ejs')
app.set('views', './Views')

//* ======= middleware
app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))

//* ======= routes 
app.get('/greeting/:name', (req, res) => {

    console.log('Wow, Hello there, ${:name}');
    console.log(req.params);
    // res.render('greetings.ejs', {
      
    //     pageTitle: "Greetings",
    //     pageHeader: "Hello!, ${:name}"
    // })
})

app.get('/tip', (req, res) => {
    function tipcal() {
        const total = total
        return total * .2 
    } 
})

//* ====== listener
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});