var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://api.dayschedule.com/v1/bookings/public/vr/tapaswin-padhy',
  'headers': {
    'Content-Type': 'application/json',
   },
  body: JSON.stringify({
    "start_at": "2021-08-24T10:00:00+05:30",
    "end_at": "2021-08-24T10:30:00+05:30",
    "event_id": 193,
    "org_id": 111,
    "invitee": {
      "name": "Vicky Rathee",
      "email": "vicky.rathee2005@gmail.com",
      "time_zone": "Asia/Calcutta",
      "guests": null,
      "questions": [
        {
          "name": "name",
          "type": "text",
          "label": "Name",
          "value": "Vicky",
          "required": true
        },
        {
          "name": "email",
          "type": "text",
          "label": "Email address",
          "value": "vicky.rathee2005@gmail.com",
          "required": true
        }
      ]
    }
  })

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
