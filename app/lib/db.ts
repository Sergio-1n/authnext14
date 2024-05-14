// import mongoose from 'mongoose';

// const MONGODB_URI = process.env.MONGODB_URI;

// const connect = async () => {
//   const connectionState = mongoose.connection.readyState;

//   if (connectionState === 1) {
//     console.log('Already connected');
//     return;
//   }

//   if (connectionState === 2) {
//     console.log('Connecting...');
//     return;
//   }

//   try {
//     mongoose.connect(MONGODB_URI!, {
//       dbName: 'nextjsInglishApp',
//       bufferCommands: false,
//     });
//     console.log('Connected');
//   } catch (error) {
//     console.log('Error in connecting to database', error);
//     throw new Error('Error connecting to database');
//   }
// };

// export default connect;

import mongoose, { Mongoose } from 'mongoose';

const MONGODB_URL = process.env.MONGODB_URL!;

interface MongooseConn {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

let cached: MongooseConn = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = {
    conn: null,
    promise: null,
  };
}

export const connect = async () => {
  if (cached.conn) return cached.conn;

  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URL, {
      dbName: 'clerk-next14-db',
      bufferCommands: false,
      connectTimeoutMS: 30000,
    });

  cached.conn = await cached.promise;

  return cached.conn;
};
