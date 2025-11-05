import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-database.js";
import { firebaseConfig } from "./config.js";

const form = document.getElementById('dataForm');
const alertElement = document.querySelector('.alert');

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Create reference to 'mahasiswa' node in database
const mahasiswaRef = ref(database, 'data_mahasiswa');

if (!form) {
    console.error('Form with id "dataForm" not found!');
} else {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const nama = document.getElementById('nama').value;
        const nim = document.getElementById('nim').value;
        const mk = document.getElementById('mk').value;
        const nilai = document.getElementById('nilai').value;

        // Validate input
        if (!nama || !nim || !mk || !nilai) {
            alert('Semua field harus diisi!');
            return;
        }

        // Push data to Firebase
        push(mahasiswaRef, {
            nama: nama,
            nim: nim,
            mk: mk,
            nilai: nilai,
            timestamp: new Date().toISOString()
        }).then(() => {
            if (alertElement) {
                alertElement.style.display = 'block';
                setTimeout(() => {
                    alertElement.style.display = 'none';
                }, 3000); // Hide alert after 3 seconds
            }
            form.reset();
        }).catch(error => {
            console.error('Error:', error);
            alert('Gagal menyimpan data: ' + error.message);
        });
    });
}