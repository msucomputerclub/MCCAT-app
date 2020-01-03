const { session } = require("electron");
const { net } = require("electron").remote;

function login() {
  var formdata = $("form").serializeArray();
  var data = `${formdata[0].name}=${formdata[0].value}&${formdata[1].name}=${formdata[1].value}`;
  console.log(formdata[0].value);

  const request = net.request({
    method: "POST",
    protocol: "http:",
    hostname: "localhost",
    port: 5000,
    path: "/api/admin/login"
  });

  request.on("response", response => {
    console.log(`STATUS: ${response.statusCode} ${response.data}`);
  });
  request.on("error", error => {
    console.log(`ERROR: ${JSON.stringify(error)}`);
  });
  request.end();

  // var request = new XMLHttpRequest();
  // request.open("POST", "http://localhost:5000/api/admin/login", true);
  // request.setRequestHeader("Accept", "application/json");
  // request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  // request.onload = function() {
  //   // Begin accessing JSON data here
  //   var resp = JSON.parse(this.response);

  //   if (request.status >= 200 && request.status < 400) {
  //     const cookie = { url: "http://www.github.com", name: "jwt", value: `${resp.token}` };
  //     session.defaultSession.cookies.set(cookie).then(
  //       () => {
  //         console.log("cookies set");
  //       },
  //       error => {
  //         console.error(error);
  //       }
  //     );
  //     location.href = "signin";
  //   } else {
  //     console.log(resp);
  //   }
  // };
  // console.log(data);
  // request.send(data);
}
