var fs = require('fs');

// fs.readFile(path, encoder, callback) ;
// fs.readFile('./mydocs/alldoc.txt','utf-8', (err, data) => {
//     console.log("my data is : ",data);

// }) ;

fs.writeFile('./document.txt', 'it is good to serious', (err)=>{
    console.log("you have error: ", err)
})

fs.writeFileSync('./document.txt', 'it is good to serious', (err)=>{
    console.log("you have error: ", err)
})