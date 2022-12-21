console.log(__dirname);
console.log(__filename);
// __dirname和__filename是全局可用对象，就是在任何模块都可用，但是不是属于global的对象
global.console.log("asdf"); // console就是全局对象
console.log("asdf");

// const Circle = require("./circle");

// const circle = new Circle();

// console.log(circle.area(5));
// console.log(circle.circumference(7));

// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "application/json" });
//   res.end(
//     JSON.stringify({
//       data: "Hello World!",
//     })
//   );
// });

// server.listen(3000);
