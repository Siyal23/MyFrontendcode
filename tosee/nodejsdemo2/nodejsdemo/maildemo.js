var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'naushad25.mailtest@gmail.com',
    pass: 'n@ushad123'
  }
});

var mailOptions = {
  from: 'naushad25.mailtest@gmail.com',
  to: 'naushad25@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});