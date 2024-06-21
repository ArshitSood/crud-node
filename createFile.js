const fs = require('fs');
const path = require('path');
const dirPath= path.join(__dirname,'crud');


for (i=0; i<6; i++){
    fs.writeFileSync(dirPath+`/apple${i}.txt`,'this is a simple file');
}
for (i=6; i<10; i++){
    fs.writeFileSync(dirPath+`/apple${i}.api`,'this is a simple /api file');
}
