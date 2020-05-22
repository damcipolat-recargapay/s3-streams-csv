const AWS = require('aws-sdk');
const s3  = new AWS.S3({apiVersion: '2006-03-01'});
const params = {Bucket: 'recargapay-backend-test', Key: 'pablo.csv'};
const csvParser = require('csv-parser');



 const s3Stream = s3.getObject(params).createReadStream().on('error', () => {
   console.log('ROW ERROR ');
 }).pipe(csvParser())
   .on('data', (row) => {
     console.log('ROW: ');
     console.log(row);
   })
   .on('end', () => {
     console.log('END.Can delete the file ');
   });
   /*
 console.log('TEST-2');
 console.log('s3Stream');
 console.log(s3Stream);
 console.log('TEST-3');
 console.log('END Rendimento test');*/