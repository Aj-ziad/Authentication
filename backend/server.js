const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const jwt=require('jsonwebtoken');
dotenv.config(); 

app.use(cors());
app.use(express.json());

//model
const User= mongoose.model('User', new  mongoose.Schema({
    email: {type: String , required: true, unique: true},
    password: {type: String, required: true}
}))


// Route
app.post("/register", async (req, res) => {
  const { email, password } = req.body;
  try {
    const newUser = new User({ email, password }); 
    await newUser.save();
    res.status(201).json({ message: "account created with success" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "server error" }); 
  }
});



app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email, password }); 
    if(user){

        //create token
        const token=jwt.sign({email:user.email},process.env.JWT_SECRET)
        res.json({ message: "login with succes",token});
       
    }else{
        res.status(401).json({ message: "email or password not correct" });
    }
   
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "server error" }); 
  }
});

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to database successfully"))
  .catch((err) => console.error("Failed to connect with the DB:", err));

app.listen(PORT, () => {
  console.log(`Server works on port ${PORT}`);
});