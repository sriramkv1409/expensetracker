const fs = require('fs');
const http = require('http');
fs.readFile('./sample.json', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    const jsonData = JSON.parse(data);
    const filterData = jsonData.filter((user)=> user.amount > 2000);
    
    fs.writeFile('./write.json',JSON.stringify(filterData), (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('File has been written');
    });
});
