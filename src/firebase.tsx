import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

/*const firebaseConfig =  {
    apiKey: "AIzaSyArcHR-u520-pvwa75P9dTqmn9Q-0xuQfk",
    authDomain: "testsensor-50e80.firebaseapp.com",
    databaseURL: "https://testsensor-50e80-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "testsensor-50e80",
    storageBucket: "testsensor-50e80.appspot.com",
    messagingSenderId: "15455856559",
    appId: "1:15455856559:web:2b0ce1e3f3a8fd206b315a"
};
*/
const firebaseConfig = {
    apiKey: "AIzaSyBWCGso7ConB4uAv-j-QUFCg4wWHwzo_Ng",
    authDomain: "mysensors-b8cfe.firebaseapp.com",
    databaseURL: "https://mysensors-b8cfe-default-rtdb.firebaseio.com",
    projectId: "mysensors-b8cfe",
    storageBucket: "mysensors-b8cfe.appspot.com",
    messagingSenderId: "265785378277",
    appId: "1:265785378277:web:e3f320f541eef441f15b0c",
    measurementId: "G-8RMGJP5T1Y"
  };
  
const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

export default db