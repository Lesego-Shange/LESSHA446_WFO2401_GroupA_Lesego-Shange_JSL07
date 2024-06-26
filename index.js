document.addEventListener('DOMContentLoaded', function () {
    const cardForm = document.getElementById('cardForm');
    const modal = document.getElementById('modal');
    const certificateContent = document.getElementById('certificateContent');
    const closeModal = document.querySelector('.close');
  
    // Hide the modal initially
    modal.style.display = 'none';
  
    cardForm.addEventListener('submit', function (e) {
      e.preventDefault();
  
      // 🚨 Get input values
      const studentNameInput = document.getElementById('studentName');
      const personalMessageInput =document.getElementById('personalMessage');
      const courseNameInput = document.getElementById('courseName'); 
  
      const studentName = studentNameInput.value;
      const personalMessage = personalMessageInput.value;
      const courseName = courseNameInput ? courseNameInput.value : "a course"; // Fallback to "a course" if no input
  
      if (studentName.trim() === '' || personalMessage.trim() === '') {
        alert('Please fill in all fields');
        return;
      }

      // Clear the content of the close span
      closeModal.innerHTML = '';


      // Create a close button dynamically
      const closeButton = document.createElement('button');
      closeButton.textContent = 'Close';
      closeButton.classList.add('close-button');

      // Append the close button to the span
      closeModal.appendChild(closeButton);

  
      // 🚨 Generate certificate content dynamically
      certificateContent.innerHTML = `
          <h1>Certificate of Achievement</h1>
          <p>This is to certify that:</p>
          <h2>${studentName}</h2>
          <p>has almost completed the:</p>
          <h2>${courseName}</h2>
          <p>with legendary perseverance and world-class badassery for never giving up🏆</p>
          <img src="logo.png" alt="Logo"> 
          <p>${personalMessage}</p>
      `;

    
      //  Display the modal
      modal.style.display = 'block';

       // Dynamically adjust CSS for logo size
       const logo = certificateContent.querySelector('img');
       if (logo) {
           logo.style.maxWidth = '85%'; // Adjust the max-width as needed
           logo.style.height = 'auto';
           logo.style.display = 'block';
           logo.style.margin = '0 auto';
       }
 
  
      // Clear the form inputs
      studentNameInput.value = '';
      personalMessageInput.value = '';
      if(courseNameInput) courseNameInput.value = '';
    });
  
    //  🚨 Close the modal when the close button is clicked
    closeButton.addEventListener('click', function () {
      modal.style.display = 'none';

    });
  });
  