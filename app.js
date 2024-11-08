const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();

// app.use(bodyParser.urlencoded({ extended: false }))
// body parser
app.use(express.urlencoded({ extended: true }));

// dynamic content rendering or template engine
app.set('view engine', 'ejs');
// app.set('views', './myfolder/views');

// middleware
app.get('/login',(req, res, next)=>{
    // console.log(req)
    // res.download('./document.txt', ()=>{
    //     console.log("file downloaded successfully")
    // })
    // res.end().status(400);
    // res.json({sucess: true});
    res.send('<h1>This is our login page</h1>')
    // res.redirect('/signup')
    // res.sendStatus(300)
    // res.status(200).send(`we cannot find that!`)
})
app.get('/signup',(req, res, next)=>{
    // console.log(req)
    // res.send(`<h1>This is our signup page</h1>`)
    res.render('myHospitalFe/signup.ejs')
    // res.render('classwork/index.ejs')
})
app.post('/signup', (req, res) => {
    // console.log(req.body)
    console.log(req.url)
    if(req.url === '/signup'){

        if(req.body.password === req.body.confirm_password){
            const data = JSON.stringify(req.body)
            // const data = 'new data';
            fs.writeFile('./database.txt', data, {flag: 'a'} , (err)=>{
                // res.send('Registration successful') ;
                res.redirect('/user')
            })

        }else{
            res.send('unmatched password, Try again !')
        }


    }else{
        console.log('invalid url: ', req.url)
    }
})

app.get('/user', function(req, res){
    fs.readFile('./database.txt', 'utf-8', function(err, data){
        console.log(data)
        const newData = data.split('},');
        console.log(newData)
        res.render('alluser.ejs', {data: newData})
    })
//  res.send("ALl users")
})

app.use('/',(req, res, next)=>{
    // console.log(req)
    res.send('<h1>This is our homepage</h1>')
})


// app.use((req, res, next)=>{
//     // console.log(req)
//     console.log("inside first middleware")

//    next();
// })

// app.use((req, res)=>{
//     // console.log(req)
//     console.log("inside second middleware")
//     res.send('<h1>My name is Fawaz</h1>')
// })

app.listen(3500);