const mongoose = require("mongoose");
const validator = require("validator");
//connection
mongoose.connect("mongodb://127.0.0.1:27017/task-manger-api");

//model (collection as object)
const User = mongoose.model("user", {
  name: { type: String, required: true, trim: true },
  password: {
    type: String, required: true, trim: true,
     validate(value) { if (value.includes('password'))
       { throw new error('invalid password') } }},
    email: {
      type: String,
      trim: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new error("invalid email");
        }
      },
    },
    age: {
      type: Number,
      default: 18,
      validate(value) {
        if (value < 0) {
          throw new error("negative age");
        }
      },
    },
  });

const task = mongoose.model("task", {
  description: { type: String, required: true ,trim:true},
  completed: { type: Boolean ,default:false },
});

//use model
const me = new User({ name: "ahmed", password:'asd',email: "Mo@gmail.com", age: 24 });
//const task1 = new task({ description: "Clean the house", completed: true });

/*
task1
  .save()
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });
  */
me.save()
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });
