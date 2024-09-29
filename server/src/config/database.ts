import mongoose from "mongoose"

export const connectDB = async () => {
   await mongoose.connect(process.env.MONGODB_URI as string)
      .then(() => console.log("MongoDB Connected."))
      .catch(err => {
         console.log("MongoDB Connection Error: ", err);
         console.log("Retrying in 0.5s second...");
         setTimeout(connectDB, 500);
      });
}