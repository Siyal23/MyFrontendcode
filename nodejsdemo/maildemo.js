var nodemailer = require('nodemailer'); 

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'siyalpatil69@gmail.com',
    pass: 'Harsha@123s'
  }
});

var mailOptions = {
  from: 'siyalpatil69@gmail.com',
  to: 'siyalpatil69@gmail.com',
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