import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { app } from "../firebase.js";

export default function OAth() {
  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);
      console.log(result);
    } catch (error) {
      console.log("Could not load with google", error);
    }
  };

  return (
    <button
      onClick={handleGoogleClick}
      className="bg-red-700 rounded-lg p-3 text-white hover:cursor-pointer hover:opacity-90 uppercase"
    >
      Continue with Google
    </button>
  );
}
