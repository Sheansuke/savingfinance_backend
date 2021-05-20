import mongoose from "mongoose";
import chalk from 'chalk';

// MONGOOSE
export const dbConection = (URI: string) =>
  mongoose
    .connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    .then(() => console.log(chalk.green("Database Connected")))
    .catch((error) => {
      console.log(chalk.yellow(error));
      console.log(chalk.red("Database can't connected"));
    });
