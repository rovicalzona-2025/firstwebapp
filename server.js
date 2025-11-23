const http = require("http");
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.write("Alzona, Rovic Andrea T. \n");
  res.write("Student from BA - 4102. \n");
   res.write("Jesus loves you :). \n");
  res.end();
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
