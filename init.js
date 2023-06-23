const fs = require('fs');

console.log(__dirname);
let updatedJSON = null;

fs.readFile(__dirname + '/package.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    let object = JSON.parse(data);
    object['type']  = 'module';
    updatedJSON = JSON.stringify(object, null, 2);

    if(updatedJSON !== null) {
      fs.writeFile(__dirname + '/package.json', updatedJSON, err => {
        if (err) {
          console.error(err);
        }
        // file written successfully
      });
    }

  });


