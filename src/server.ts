import app from './app';

function server() {
  app.listen(5000, () => {
    console.log(`server is running at port 5000`);
  });
}

server();
