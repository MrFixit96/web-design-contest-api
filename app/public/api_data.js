define({ "api": [
  {
    "type": "get",
    "url": "/events",
    "title": "Get upcomming Events",
    "name": "getEvents",
    "group": "Events",
    "examples": [
      {
        "title": "fetch() Example:",
        "content": "fetch('http://localhost:60606/events')\n    .then(function(response) {\n        return response.json();\n    })\n    .then(function(data) {\n        console.log(data);\n    })\n    .catch(function(error) {\n        console.error(error);\n    });",
        "type": "json"
      },
      {
        "title": "jQuery.get() Example:",
        "content": "jQuery.get('http://localhost:60606/events')\n    .done(function(data) {\n        console.log(data);\n    })\n    .fail(function(error) {\n        console.log(error);\n    });",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "response",
            "description": "<p>List of Locations</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.name",
            "description": "<p>Location Name</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response.address",
            "description": "<p>Address data (example for an Object)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.address.street",
            "description": "<p>Street</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.address.city",
            "description": "<p>City</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.address.state",
            "description": "<p>State - Full Name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.address.state_abbr",
            "description": "<p>State - 2-letter Abbreviation</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.address.zip",
            "description": "<p>5-digit Zipcode</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.date",
            "description": "<p>Date (as a preformated string)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.time",
            "description": "<p>Time (as a preformated string)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n  [\n    {\n      name: \"Location 1\",\n      address: {\n      street:  \"3861 Forest Ln\",\n      city: \"Hartford\",\n      state: \"Louisiana\",\n      state_abbr: \"LA\",\n      zip: \"17951\"\n    },\n    date: \"Aug. 3, 2018\",\n    time: \"7:00 PM\"\n  },\n  {\n    name: \"Location 2\",\n    address: {\n      street:  \"2655 E Sandy Lake Rd\",\n      city: \"Victorville\",\n      state: \"Michigan,\n      state_abbr: \"MI\",\n      zip: \"22245\"\n    },\n    date: \"Aug. 3, 2018\",\n    time: \"7:00 PM\"\n  }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/server.js",
    "groupTitle": "Events"
  }
] });
