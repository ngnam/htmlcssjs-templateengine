const express = require("express");
 
// setting up express server
const app = express();
 
// setting the view folder for the jade files
app.set("views", "pages");
// setting app engine
app.set("view engine", "jade");
 
// -- application endpoints --
 
// http://localhost:3005
app.get("/", (req, res) => {
  res.render("welcome");
});
 
// http://localhost:3005/sql
app.get("/sql", (req, res) => {
  const records = [
    {
      id: "101",
      name: "Jane Doe"
    },
    {
      id: "102",
      name: "Neil Irani"
    },
    {
      id: "103",
      name: "Tom Hanks"
    }
  ];
  res.render("employees", { employeeList: records });
});
 
// driver code
const SERVER_PORT = 3005;
app.listen(SERVER_PORT, () => {
  console.log(`Service endpoint = http://localhost:${SERVER_PORT}`);
});