const fs = require('fs');
const path = require('path');
const dirPath= path.join(__dirname,'crud');
const apiDirPath = path.join(dirPath,'api');
const localFilePath = path.join(dirPath,'locale');

function sortFile(item) {
    extension = path.extname(item);
    const sourcePath = path.join(dirPath,item)
    if(extension === `.txt`){
        destination = path.join(localFilePath,item);
        fs.rename(sourcePath, destination, (err) => {
            if(err){console.log(`error`)}
        })
    }
    else if(extension === `.api`){
        destination = path.join(apiDirPath,item);
        fs.rename(sourcePath, destination, (err) => {
            if (err){
                console.log(`error`)
     } })

    }  
  }
  const dirr = fs.readdirSync(dirPath);
  dirr.forEach((item) => {
    sortFile(item)
  })