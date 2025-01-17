// const mongoose = require("mongoose");
// const colors = require("colors");

// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });

//     console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
//   } catch (error) {
//     console.error(`Error: ${error.message}`.red.bold);
//     process.exit(1); // Exit with a non-zero status code to indicate an error
//   }
// };

// module.exports = connectDB;


const mongoose = require("mongoose");
const colors = require("colors");

const connectDB =  async() => {
  try {
    const conn =  await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Correct the template literal usage with backticks
    console.log(`MongoDB Connected: ${conn.connection.host}.cyan.underline`);
  } catch (error) {
    // Correct the template literal usage with backticks
    // console.log("MONGO_URI:", process.env.MONGO_URI);
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit with a non-zero status code to indicate an error
  }
};

module.exports = connectDB;