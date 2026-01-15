const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Running on Port 5000");
});

const initializeDBAndServer = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/dineease");
    app.listen(5000, () => {
      console.log("Server Running at http://localhost:5000/");
    });
  } catch (e) {
    console.log(`DB Error: ${e.message}`);
    process.exit(1);
  }
};

const reservationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  people: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Reservation = mongoose.model("Reservation",reservationSchema)

app.post('/reservations',async (req,res)=>{
  try{
    const {name,email,date,time,people} = req.body;

    if (!email || !name || !date || !people || !time){
      res.status(400).json({message:"All fields are required"})
    }

    const newReservation = new Reservation({name,email,date,time,people});

    await newReservation.save();
    res.status(201).json({message:"Reservation saved successfully"})
  }catch(e){
    res.status(500).json({message : "Server Error"})
  }
})

initializeDBAndServer();
