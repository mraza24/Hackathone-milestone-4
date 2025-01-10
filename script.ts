// Get references to the form and display area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');

// Check if the form exists before attaching the event listener
if (!form) {
    console.error('The form element with ID "resume-form" is missing.');
} else {
    // Handle form submission
    form.addEventListener('submit', (event: Event) => {
        event.preventDefault(); // Prevent page reload

        // Collect input values
        const name = (document.getElementById('name') as HTMLInputElement).value.trim();
        const email = (document.getElementById('email') as HTMLInputElement).value.trim();
        const phone = (document.getElementById('phone') as HTMLInputElement).value.trim();
        const education = (document.getElementById('education') as HTMLTextAreaElement).value.trim();
        const experience = (document.getElementById('experience') as HTMLTextAreaElement).value.trim();
        const skills = (document.getElementById('skills') as HTMLTextAreaElement).value.trim();

        // Validate inputs
        if (!name || !email || !phone || !education || !experience || !skills) {
            alert('Please fill out all fields before submitting the form.');
            return;
        }

        // Basic email and phone validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[0-9]{10,15}$/;

        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        if (!phoneRegex.test(phone)) {
            alert('Please enter a valid phone number.');
            return;
        }

        // Generate Resume Content
        const educationHTML = education.split('\n').map((item) => `<li>${item}</li>`).join('');
        const skillsHTML = skills.split(',').map((skill) => `<li>${skill.trim()}</li>`).join('');

        const resumeHTML = `
            <h2><b>Editable Resume</b></h2>
            <h3>Personal Information</h3>
            <p><b>Name:</b><span contenteditable="true">${name}</span></p>
            <p><b>Email:</b><span contenteditable="true">${email}</span></p>
            <p><b>Phone:</b><span contenteditable="true">${phone}</span></p>

            <h3>Education</h3>
            <ul contenteditable="true">${educationHTML}</ul>

            <h3>Experience</h3>
            <p contenteditable="true">${experience}</p>

            <h3>Skills</h3>
            <ul contenteditable="true">${skillsHTML}</ul>
        `;

        // Display Resume
        if (resumeDisplayElement) {
            resumeDisplayElement.innerHTML = resumeHTML;
        } else {
            console.error('The resume display element is missing.');
        }
    });
}