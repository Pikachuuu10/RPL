import { ref, onValue } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-database.js";
import { firebaseConfig } from "./config.js";

const mahasiswaRef = ref(database, 'data_mahasiswa');

// Get table body element
const tableBody = document.querySelector('tbody');

// Listen for data changes
onValue(mahasiswaRef, (snapshot) => {
    // Clear existing table data
    tableBody.innerHTML = '';
    
    // Counter for numbering
    let counter = 1;

    snapshot.forEach((childSnapshot) => {
        const data = childSnapshot.val();
        
        // Create new row
        const row = document.createElement('tr');
        
        // Create table cells
        const cells = [
            counter,
            data.nama,
            data.nim,
            data.mk,
            data.nilai
        ].map(text => {
            const td = document.createElement('td');
            td.textContent = text;
            return td;
        });
        
        // Add cells to row
        cells.forEach(cell => row.appendChild(cell));
        
        // Add row to table
        tableBody.appendChild(row);
        
        counter++;
    });

});
