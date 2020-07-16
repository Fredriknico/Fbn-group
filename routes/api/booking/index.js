const express = require('express');
const router = express.Router();
const db = require('../../../database/nicobu');
const mailService = require('./mailService');

// API  MODULE
router.use('/customers', require('./customers'));

router.use('/bookings', require('./bookings'));

// TIMER FOR SENDING INFORMATION FROM DATABASE TO CLIENTS
const sendBookingInformationToCustomers = () => {
  var d = new Date().getDate();
  var day = d < 10 ? `0${d}` : `${d}`;
  var m = new Date().getMonth() + 1;
  var month = m < 10 ? `0${m}` : `${m}`;
  var year = new Date().getFullYear();
  var today = day + '' + month + '' + year;
  var todaysBookings = new Array();
  var t = [];

  let joinsql = `SELECT *
  FROM bookings
  INNER JOIN customers
  ON bookings.eventid = customers.id
  WHERE bookings.start = ${today};`;

  db.query(joinsql, (err, result) => {
    console.log(result);
    if (result.length > 0) {
      result.forEach((element, index) => {
        if (t.length < 1) {
          t.push(element.id);
        }
        if (!t.includes(element.id)) {
          t.push(element.id);
        }
      });

      t.forEach((number) => {
        todaysBookings[number] = result.filter((element) => {
          if (element.id == number) {
            return element;
          }
        });
      });

      t.forEach((item, index) => {
        sendMailToCustomer(todaysBookings[item]);
      });
    } else {
      return;
    }
  });
};

const sendMailToCustomer = (customerList) => {
  var testing = true;
  var id = customerList[0]['bookingid'];
  var date = customerList[0]['start'];
  var aktivitet = customerList[0]['title'];
  var location = customerList[0]['location'];
  var responsible = customerList[0]['responsible'];
  var comments = customerList[0]['comments'];
  var phone = customerList[0]['phone'];
  var numberOfParticipants = customerList[0]['number'];
  var participants = customerList[0]['participants']
    .replace(/[{}]/g, '')
    .replace(/[""]/g, '')
    .split(',');

  var email = customerList[0]['email'];
  var mailTo = testing ? 'fredrik_nico@yahoo.no' : customerList[0]['email'];
  var subject = 'Booking' + ' ' + aktivitet + ' ' + date;
  // plaintext body
  var text = `Automatisk generert booking oversikt for aktiviteten ${aktivitet},  den ${date}`;
  var HTMLbody = participants.forEach((element) => {
    return '<p>' + element + '</p>';
  });

  mailService.Mailer(
    id,
    date,
    aktivitet,
    location,
    responsible,
    comments,
    phone,
    numberOfParticipants,
    participants,
    email,
    mailTo,
    subject,
    text
  );
};

const TimR = () => {
  var now = new Date();
  console.log(now);
  var millisTill10 =
    new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12, 0, 0, 0) -
    now;
  console.log(millisTill10);
  if (millisTill10 < 0) {
    millisTill10 += 86400000; // it's after 10am, try 10am tomorrow.
  }
  setTimeout(function () {
    sendBookingInformationToCustomers();
  }, millisTill10);
};

// START TIMER FOR SENDING TIL KUNDER
// TimR();

module.exports = router;
