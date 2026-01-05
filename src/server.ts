import mongoose from 'mongoose';
import app from './app';
import config from './app/config';

async function server() {
  try {
    await mongoose.connect(config.database_url as string);

    app.listen(5000, () => {
      console.log(`server is running at port 5000`);
    });
  } catch (error) {}
}

server();
