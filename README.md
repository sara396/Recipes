# 🍲 Recipe Management System (Full-Stack)

פרויקט Full-Stack המאפשר ניהול מקיף של מתכונים, כולל הרשמה, יצירה, עריכה וסינון מתכונים לפי קטגוריות שונות. האפליקציה בנויה על גבי Angular בצד הלקוח, Node.js עם Express בצד השרת, ומסד נתונים MongoDB.

## ✨ תכונות עיקריות

* **ניהול מתכונים מקיף**: יצירה, עריכה ומחיקה של מתכונים.
* **סינון מתכונים**: סינון דינמי של מתכונים לפי קטגוריות.
* **אימות משתמשים**: הרשמה והתחברות מאובטחת.
* **ממשק משתמש אינטואיטיבי**: חווית משתמש נוחה וברורה.

## 🛠️ טכנולוגיות בשימוש

* **Frontend**:
    * **Angular**: פלטפורמה לבניית יישומי Single Page Application (SPA).
* **Backend**:
    * **Node.js**: סביבת ריצה ל-JavaScript בצד השרת.
    * **Express.js**: מסגרת עבודה (Framework) לבניית יישומי Web ו-APIs ב-Node.js.
* **Database**:
    * **MongoDB**: מסד נתונים NoSQL גמיש ומבוזר.

## 🚀 התחלה מהירה

כדי להריץ את הפרויקט באופן מקומי, בצע את השלבים הבאים:

### דרישות קדם

ודא שהדברים הבאים מותקנים במערכת שלך:

* [Node.js](https://nodejs.org/en/download/) (מומלץ גרסה LTS)
* [npm](https://www.npmjs.com/get-npm) (מגיע עם Node.js)
* [MongoDB](https://www.mongodb.com/try/download/community) (הגדרת שרת MongoDB מקומי או שימוש ב-MongoDB Atlas)
* [Angular CLI](https://angular.io/cli) (התקן גלובלית: `npm install -g @angular/cli`)

### התקנה והרצה

1.  **שכפול המאגר (Repository)**:
    ```bash
    git clone <YOUR_REPOSITORY_URL_HERE>
    cd <PROJECT_FOLDER_NAME>
    ```

2.  **הגדרת סביבת עבודה ל-Backend (שרת)**:
    * נווט לתיקיית ה-backend:
        ```bash
        cd backend
        ```
    * התקן את התלויות:
        ```bash
        npm install
        ```
    * צור קובץ `.env` בתיקיית ה-backend והגדר את משתני הסביבה (לדוגמה, מחרוזת החיבור ל-MongoDB, מפתח סודי ל-JWT):
        ```
        MONGO_URI=mongodb://localhost:27017/recipes_db
        JWT_SECRET=your_jwt_secret_key
        PORT=5000
        ```
    * הפעל את השרת:
        ```bash
        npm start
        ```
        השרת יפעל בדרך כלל על פורט `5000` (או הפורט שהגדרת).

3.  **הגדרת סביבת עבודה ל-Frontend (לקוח)**:
    * נווט לתיקיית ה-frontend (חזור לתיקייה הראשית של הפרויקט אם יצאת, ואז כנס לתיקיית ה-frontend):
        ```bash
        cd ../frontend
        ```
    * התקן את התלויות:
        ```bash
        npm install
        ```
    * הפעל את אפליקציית Angular:
        ```bash
        ng serve
        ```
        האפליקציה תהיה זמינה בדרך כלל בכתובת `http://localhost:4200/`.

## 🤝 תרומה לפרויקט

אם ברצונך לתרום לפרויקט, נשמח לקבל עזרה! אנא פתח/י Issue או Pull Request.

---

**הערה**:
* החלף/י את `<YOUR_REPOSITORY_URL_HERE>` בכתובת ה-URL האמיתית של הריפוזיטורי שלך ב-GitHub/GitLab.
* ייתכן שתצטרך/י לשנות את שמות התיקיות `backend` ו-`frontend` אם הן שונות בפרויקט שלך.
* ודא/י שהגדרת את משתני הסביבה בקובץ `.env` בצורה נכונה עבור הפרויקט שלך (לדוגמה, המפתח הסודי ל-JWT).

קובץ README כזה יספק למפתחים אחרים (וגם לעצמך בעתיד) את כל המידע הדרוש כדי להבין את הפרויקט, להתקין אותו ולהריץ אותו. בהצלחה!
