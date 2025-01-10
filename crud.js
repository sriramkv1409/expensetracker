const fs = require('fs');

const createFile = (student)=>{
    let students = []
    fs.readFile('./student.json','utf8',(err,data)=>{
        let s = data?JSON.parse(data):[];
        if(s.length>0){
             students = [...s,student];
        }
        else{
            students = [student];
        }

        fs.writeFile('./student.json',JSON.stringify(students),(err)=>{
            if(err){
                console.error(err);
                return;
            }
            console.log('File has been written');
        })
    })
}

const readFile = ()=>{
    fs.readFile('./student.json','utf8',(err,data)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log("Student data\n");
        try{
            const students = JSON.parse(data);
            console.log(students); 
        }
        catch(parseErr){
            console.error(parseErr);
        }
    })
}

const updateFile = ()=>{

}


const deleteFile = (studentName)=>{
     fs.readFile('./student.json','utf8',(err,data)=>{
        if(err){
            console.log(err);
            return;
        }
        let students = JSON.parse(data);

        const updatedData = students.filter(student => student.name != studentName);

        if(students.length === updatedData.length){
            console.log('Student with name '+studentName + " is not found");
            return;
        }

        fs.writeFile('./student.json',JSON.stringify(updatedData),(err)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log('Student with name '+studentName + " is deleted");
        })
     })
}
// createFile({name:"Murali",age:22,rollno:2});
// // // readFile();
deleteFile("Murali");

