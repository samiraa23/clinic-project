

// document.addEventListener('DOMContentLoaded', function() {
//     loadAppointments();

//     function loadAppointments() {
//         fetch('http://localhost:3001/appointments')
//             .then(response => response.json())
//             .then(data => {
//                 const tableBody = document.getElementById('appointmentTableBody');
//                 tableBody.innerHTML = '';
//                 data.forEach(appointment => {
//                     const row = document.createElement('tr');
//                     row.innerHTML = `
//                         <td>${appointment.fullName}</td>
//                         <td>${appointment.email}</td>
//                         <td>${appointment.phone}</td>
//                         <td>${appointment.date}</td>
//                         <td>${appointment.message || ''}</td>
//                         <td>
//                             <button class="btn btn-primary btn-sm" onclick="editAppointment(${appointment.id})">Edit</button>
//                             <button class="btn btn-danger btn-sm" onclick="deleteAppointment(${appointment.id})">Delete</button>
//                         </td>
//                     `;
//                     tableBody.appendChild(row);
//                 });
//             })
//             .catch(error => console.error('Error loading appointments:', error));
//     }

//     window.editAppointment = function(appointmentId) {
//         const email = prompt('Enter your email to edit the appointment:');
//         if (!email) return;

//         fetch(`http://localhost:3001/appointments/${appointmentId}`)
//             .then(response => response.json())
//             .then(appointment => {
//                 if (appointment.email === email) {
//                     const fullName = prompt('Enter your full name:', appointment.fullName);
//                     const phone = prompt('Enter your phone number:', appointment.phone);
//                     const date = prompt('Enter the new date:', appointment.date);
//                     const message = prompt('Enter the message (optional):', appointment.message);

//                     if (fullName || phone || date || message) {
//                         updateAppointment(appointmentId, { fullName, email, phone, date, message });
//                     } else {
//                         alert('No changes made.');
//                     }
//                 } else {
//                     alert('Email does not match the appointment.');
//                 }
//             })
//             .catch(error => console.error('Error editing appointment:', error));
//     }

//     function updateAppointment(appointmentId, newData) {
//         fetch(`http://localhost:3001/appointments/${appointmentId}`, {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(newData)
//         })
//         .then(response => response.json())
//         .then(data => {
//             alert('Appointment updated successfully.');
//             loadAppointments();
//         })
//         .catch(error => console.error('Error updating appointment:', error));
//     }

//     window.deleteAppointment = function(appointmentId) {
//         const confirmDelete = confirm('Are you sure you want to delete this appointment?');
//         if (confirmDelete) {
//             fetch(`http://localhost:3001/appointments/${appointmentId}`, {
//                 method: 'DELETE',
//             })
//             .then(response => {
//                 if (response.ok) {
//                     alert('Appointment deleted successfully.');
//                     loadAppointments();
//                 } else {
//                     alert('Failed to delete appointment.');
//                 }
//             })
//             .catch(error => console.error('Error deleting appointment:', error));
//         }
//     }
// });