var express = require('express');
var nodemailer = require('nodemailer');
var router = express.Router();

/* GET users listing. */
router.post('/mail', function(req, res, next) {

    // create reusable transporter object using SMTP transport
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'mycyagency@gmail.com',
            pass: 'manuelcindy'
        }
    });

    // NB! No need to recreate the transporter object. You can use
    // the same transporter object for all e-mails

    // setup e-mail data with unicode symbols
    var mailOptions = {
        from: req.body.email, // sender address
        to: 'mycyagency@gmail.com', // list of receivers
        subject: 'Lead - Message sent from ' + req.body.email , // Subject line
        text: req.body.message // plaintext body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            res.send(error);
            return console.log(error);
        }
        res.send({data: 1});
        console.log('Message sent: ' + info.response);
    });

});

module.exports = router;
