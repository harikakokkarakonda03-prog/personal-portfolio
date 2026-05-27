require("dotenv").config();

const express = require("express");

const cors = require("cors");

const { Pool } = require("pg");

const app = express();



app.use(cors());

app.use(express.json());



const db = new Pool({

    connectionString: process.env.DATABASE_URL,

    ssl: {

        rejectUnauthorized: false

    }

});



db.connect()

.then(() => {

    console.log("Database Connected");

})

.catch((err) => {

    console.log(err);

});



app.get("/", (req, res) => {

    res.send("Portfolio Server Running");

});



app.post("/contact", async (req, res) => {

    const {

        first_name,

        last_name,

        email,

        role_type,

        message

    } = req.body;



    try {

        await db.query(

            `INSERT INTO contact_messages
            (first_name, last_name, email, role_type, message)

            VALUES ($1, $2, $3, $4, $5)`,

            [

                first_name,

                last_name,

                email,

                role_type,

                message

            ]

        );



        res.send("Message Stored Successfully");

    }

    catch(err){

        console.log(err);

        res.send("Database Error");

    }

});



app.listen(5000, () => {

    console.log("Server running on port 5000");

});