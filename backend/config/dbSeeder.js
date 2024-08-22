import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import infos from "../data/infos.js";
import Infos from "../models/infosModel.js";
import connectDB from "./db.js";

dotenv.config();
connectDB();

const importData = async () => {
  try {
    // clear out the database before any operations
    await Infos.deleteMany();

    await Infos.insertMany(infos); // insert all the infos into the database

    console.log("Data Imported".green.inverse); // function in colors package, can directly use, no need of color.green
    process.exit(); // we don't want to kill it, so not using process.exit(1)
  } catch (error) {
    console.error(`${error}`.red.inverse); // when error, show it in red background
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Infos.deleteMany();

    console.log("Data Destroyed!".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

// use process.argv to pass command line argument, when "-d" activate destroyData func
if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
