import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import validator from 'validator';

const Schema = mongoose.Schema;

interface IUser {
  email: string;
  password: string;
}

interface UserModel extends mongoose.Model<IUser> {
  register(email: string, password: string): Promise<IUser>;
}

const userSchema = new Schema<IUser, UserModel>({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  // createdAt: {
  //     type: Date,
  //     default: Date.now,
  // },
});


// static method to register a user

userSchema.statics.register = async function (this: mongoose.Model<any>, email: string, password: string) {

  // validation

  if (!email || !password) {
    throw new Error('All fields are required');
  }

  if (!validator.isEmail(email)) {
    console.log('Email validation failed');
    throw new Error('Invalid email format');
  }

  if (!validator.isStrongPassword(password)) {
    throw new Error('Password is not strong enough');
  }

  const exists = await this.findOne({ email });
  if (exists) {
    throw new Error('Email already in use');
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ email, password: hash });
  return user;
}

export const User = mongoose.model<IUser, UserModel>("User", userSchema);