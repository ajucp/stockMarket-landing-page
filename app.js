const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const contactRoutes=require('./routes/contactRoutes');

const app=express();
const PORT=5000;

app.use(bodyParser.json());
app.use(cors());

//for routes
app.use('/api/contact',contactRoutes);
app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`);
});