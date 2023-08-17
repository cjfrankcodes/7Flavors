import express from "express";
import bodyParser from "body-parser";
import NodeMailer from 'nodemailer'

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public", { "extensions": ["html", "htm", "js", "css", "png", "jpg"] }));

app.get("/", (req,res) =>{
    res.render("index.ejs")
})

app.get("/about", (req, res) =>{
    res.render("about.ejs")
})

app.get("/gallery", (req, res) =>{
    res.render("gallery2.ejs")
})

app.get("/booking", (req, res) =>{
    res.render("book.ejs")
})

app.post("/submit-form", (req, res) =>{
    const message = {
        name : req.body.fullName,
        email: req.body.email,
        phone: req.body.phoneNumber,
        date: req.body.date,
        service: req.body.service,
        guests: req.body.guestCount,
        contactPref: req.body.contact
    }

    const transporter = NodeMailer.createTransport({
        service: 'gmail',
        auth: {
            user: '7flavorskitchen@gmail.com',
            pass: 'klvumbixutdarvaj'
        }
    })

    const mailOptions = {
        from: '7flavorskitchen@gmail.com',
        to: '7flavorskitchen@gmail.com',
        subject: `Booking Inquiry from ${message['name']} for a ${message['service']} on ${message['date']}`,
        text: `${message['name']} is interested in booking a ${message['service']} on ${message['date']}. The estimated guest count is ${message['guests']}. Their phone number is ${message['phone']} and their email is ${message['email']}. They want to be contacted via ${message['contactPref']}.`
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error){
            console.log(error);
            res.render("book-error.ejs")
        }else{
            console.log('email sent: ' + info.response)
            res.render("book-success.ejs")
        }
    })
})

app.get("/brunch", (req, res) =>{
    res.render("brunch.ejs")
})

app.get("/dinner", (req, res) =>{
    res.render("dinner.ejs")
})

app.get("/420", (req, res) =>{
    res.render("420.ejs")
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });