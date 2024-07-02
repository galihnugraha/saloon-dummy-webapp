const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const {body, validationResult} = require('express-validator')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const flash = require('connect-flash')

// init app
const app = express()
const port = 3000

//ejs and express-ejs-layouts for view engine and layouts
app.set('view engine', 'ejs')
app.use(expressLayouts)

//built-in middleware
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

//session, cookie parser, dan flash
app.use(cookieParser('secret'))
app.use(
    session({
        cookie: {maxAge: 6000},
        secret: 'secret',
        resave: true,
        saveUninitialized: true,
    })
)
app.use(flash())

//routing
//menampilkan halaman home
app.get('/', (req, res) => {
    res.render('index', {
        name: 'home',
        title: "Halaman Home",
        layout: 'layouts/main-layout' 
    })
})

//middleware untuk route yang tidak tersedia
app.use('/data', (req, res) => {
    res.redirect('/data');
})

app.use('/', (req, res) => {
    res.status(404)
    res.send('<h1>404 Not Found</h1>')
})

//port
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})