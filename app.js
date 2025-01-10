var express = require("express");

const app = express();
// const students = [{
//     name:"Sriram",
//     age:21,
//     roll:4
// },{
//     name:"Murali",
//     age:21,
//     roll:5
// },{
//     name:"Shankar",
//     age:21,
//     roll:6
// },{
//     name:"Siva",
//     age:21,
//     roll:7
// }]

app.get("/api/sayhello",(req,res)=>{
    res.send("Hello MURALIDHARAN SHANKAR");
    res.end();
});
app.get("/api/students",(req,res)=>{
    res.status(200).json(students);
});


app.get("/api/students/:roll",(req,res)=>{
    const { roll } = req.params;
    const student = students.find((student)=>student.roll == roll);
    if(student){
        res.status(200).json(student);
    }
    else{
        res.status(404).json({message:"Student not found"});
    }
});

app.listen(3000,()=>{
    console.log("Server running in port number 3000");
});

