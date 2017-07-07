  // This line is new!
  import Firebase from 'firebase';

  /*
   * The config was copied and pasted straight from the Firebase Dashboard.
   * Simply click "Add Firebase to Your Web App" to access yours.
   */

  let config = {
    apiKey: "AIzaSyD7qtlmRE86XTD8Mw5y7TZdTcO-2g-UZS4",
    authDomain: "meallist-9dfdd.firebaseapp.com",
    databaseURL: "https://meallist-9dfdd.firebaseio.com",
    projectId: "meallist-9dfdd",
    storageBucket: "meallist-9dfdd.appspot.com",
    messagingSenderId: "186746915202"
  };

  let app = Firebase.initializeApp(config)
  let db = app.database()
  export const conversationsRef = db.ref('conversations');
