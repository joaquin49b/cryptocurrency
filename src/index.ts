import Server from "./server/server";

const server = Server.init();

server.start(() => {
  console.log("Server online");

});


