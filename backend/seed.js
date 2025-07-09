const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { Neighborhood } = require('./src/neighborhoods'); // adjust the path if needed

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("MongoDB connected.");
  return Neighborhood.deleteMany({});
})
.then(() => {
  return Neighborhood.insertMany([
    { name: "Green Meadows", population: 4500, status: "Active", rating: 4.7 },
    { name: "Sunrise Valley", population: 3200, status: "Pending", rating: 3.8 },
    { name: "Moonlight Town", population: 5800, status: "Active", rating: 4.9 }
  ]);
})
.then(() => {
  console.log("Seed data inserted.");
  mongoose.disconnect();
})
.catch(err => {
  console.error("Seeding error:", err);
  mongoose.disconnect();
});
