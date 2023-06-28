import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const handleLogout = async () => {
  try {
    await firebase.auth().signOut();
  } catch (error) {
    console.error(error);
  }
};

export default handleLogout;