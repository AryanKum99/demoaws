const AWS = require('aws-sdk');
const express = require('express');
const app = express();
// Create an S3 client using the temporary credentials obtained from the assumed role
const s3 = new AWS.S3();

// Specify S3 bucket and object key
const bucketName = 'demoooooooosdssdf';
const objectKey = 'demo';

// Specify the data you want to upload to S3
const dataToUpload = 'Hello, S3!';

// Set up the S3 upload parameters
const params = {
    Bucket: bucketName,
    Key: objectKey,
    Body: dataToUpload,
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

