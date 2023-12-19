const AWS = require('aws-sdk');
const express = require('express');
const fs = require('fs');
const app = express();
// Create an S3 client using the temporary credentials obtained from the assumed role
const s3 = new AWS.S3();

// Specify S3 bucket and object key
const bucketName = 'demoooooooosdssdf';
const objectKey = 'demo';


// Specify the path to the image file you want to upload
const filePath = './error_hostel.png';

// Read the image file as a binary buffer
const fileContent = fs.readFileSync(filePath);


// Set up the S3 upload parameters
const params = {
    Bucket: bucketName,
    Key: objectKey,
    Body: fileContent,
    ContentType: 'image/png',
};
app.listen(8080, () => {
    s3.upload(params, (err, data) => {
        if (err) {
            console.error('Error uploading to S3:', err);
        } else {
            console.log('Successfully uploaded data to S3:', data);
        }
    });
    console.log('runnin');
})
// Upload data to S3

