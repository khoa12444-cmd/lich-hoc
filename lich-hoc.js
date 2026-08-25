<script type="module">

import { initializeApp }
    from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import {
    getDatabase,
    ref,
    onValue,
    set
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-database.js";


const firebaseConfig = {
    apiKey: "AIzaSyBuVxe6-UpiDrLgvAVU_bGn4Jk1ljfnJVQ",
    authDomain: "lich-hoc-65e5b.firebaseapp.com",
    projectId: "lich-hoc-65e5b",
    storageBucket: "lich-hoc-65e5b.firebasestorage.app",
    messagingSenderId: "930830461526",
    appId: "1:930830461526:web:1104d2efc13ab7674669f7",
    measurementId: "G-PEJ40T9T2J"
};


const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

const scheduleRef = ref(database, "lich_hoc");


const checkboxes =
    document.querySelectorAll(
        'input[type="checkbox"]'
    );


/* Nhận dữ liệu từ Firebase */

onValue(scheduleRef, (snapshot) => {

    const data = snapshot.val() || {};

    checkboxes.forEach((box) => {

        const id = box.dataset.id;

        box.checked = data[id] === true;

    });

});


/* Khi tick */

checkboxes.forEach((box) => {

    box.addEventListener("change", () => {

        const id = box.dataset.id;

        set(
            ref(database, "lich_hoc/" + id),
            box.checked
        );

    });

});

</script>