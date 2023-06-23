const express = require("express")
const app = express()


const HTTP_PORT = process.env.PORT || 8080

// 1. import handlebars library
const exphbs = require("express-handlebars");

// 2. Any file in the project with .hbs extension
app.engine(".hbs", exphbs.engine({
    extname: ".hbs",

    // 3. [OPTIONAL] Add functionality to output the contents of an object in the template
    helpers: {
        json: (context) => { return JSON.stringify(context) }
    }
}));
app.set("view engine", ".hbs");



// -------------------
const path = require("path")
app.use(express.static('assets'))
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.render("home", { layout: "skeleton" })
})

app.get("/home", (req, res) => {
    res.render("home", { layout: "skeleton" })
})

const books = [
    { name: "THINK LIKE A MONK", author: "by: JAY SHETTY", status: "Checked out by you", check: false },
    { name: "8 RULES OF lOVE", author: "by: JAY SHETTY", status: "Borrow", check: true },
    { name: "UNFINISHED", author: "by: PRIYANKA CHOPRA JONES", status: "On loan", check: false },
    { name: "WILL", author: "by: WILL SMITH", status: "Borrow", check: true },
    { name: "THE CALLING", author: "by: KELLY ARMSTRONG", status: "Checked out by you", check: false },
    { name: "FRIENDS, LOVERS AND BIG TERRIBLE THINGS", author: "by: MATTHEW PERRY", status: "On loan", check: false },
    { name: "HARRY POTTER #1", author: "by: J.K.ROWLING", status: "Checked out by you", check: false },
    { name: "HARRY POTTER #2", author: "by: J.K.ROWLING", status: "Borrow", check: true },
]
app.get("/books", (req, res) => {
    // if (req.body)
    console.log(req.body.search)
    res.render("books", { layout: "skeleton", bookList: books })
})



app.post("/books", (req, res) => {
    // if (req.body)
    console.log(req.body)
    if (req.body.filter == "Show All Books") {
        res.render("books", { layout: "skeleton", bookList: books })
    }

    else if (req.body.filter == "Show Available Books") {
        for (i = 0; i < bookList; i++) {
            if (status = "Borrow") {
                
                res.render("books", { layout: "skeleton", sortedList })
            }

        }
        res.render("books", { layout: "skeleton", bookList: books })
    }
    else if (req.body.filter == "Show My Books") {
        for (i = 0; i < bookList; i++) {
            if (status = "Borrow") {

                res.render("books", { layout: "skeleton", sortedList })
            }

        }
        res.render("books", { layout: "skeleton", bookList: books })
    }
})



app.get("/error", (req, res) => {
    res.render("error", { layout: "skeleton" })
})

// -------------------
const onHttpStart = () => {
    console.log(`Web server started on port ${HTTP_PORT}, press CTRL+C to exit`)
}

app.listen(HTTP_PORT, onHttpStart)

let sortedList = [];

