import dotenv from "dotenv";

dotenv.config();

const myKey = {
  firebaseKey: process.env.REACT_APP_FIREBASE_KEY,
  stripeKey: process.env.REACT_APP_STRIPE_KEY,
};

export default myKey;
