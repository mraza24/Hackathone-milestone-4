// Get references to the form and display area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
// Check if the form exists before attaching the event listener
if (!form) {
    console.error('The form element with ID "resume-form" is missing.');
}
else {
    // Handle form submission
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent page reload
        // Collect input values
        var name = document.getElementById('name').value.trim();
        var email = document.getElementById('email').value.trim();
        var phone = document.getElementById('phone').value.trim();
        var education = document.getElementById('education').value.trim();
        var experience = document.getElementById('experience').value.trim();
        var skills = document.getElementById('skills').value.trim();
        // Validate inputs
        if (!name || !email || !phone || !education || !experience || !skills) {
            alert('Please fill out all fields before submitting the form.');
            return;
        }
        // Basic email and phone validation
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        var phoneRegex = /^[0-9]{10,15}$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        if (!phoneRegex.test(phone)) {
            alert('Please enter a valid phone number.');
            return;
        }
        // Generate Resume Content
        var educationHTML = education.split('\n').map(function (item) { return "<li>".concat(item, "</li>"); }).join('');
        var skillsHTML = skills.split(',').map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join('');
        var resumeHTML = "\n            <h2><b>Editable Resume</b></h2>\n            <h3>Personal Information</h3>\n            <p><b>Name:</b><span contenteditable=\"true\">".concat(name, "</span></p>\n            <p><b>Email:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n            <p><b>Phone:</b><span contenteditable=\"true\">").concat(phone, "</span></p>\n\n            <h3>Education</h3>\n            <ul contenteditable=\"true\">").concat(educationHTML, "</ul>\n\n            <h3>Experience</h3>\n            <p contenteditable=\"true\">").concat(experience, "</p>\n\n            <h3>Skills</h3>\n            <ul contenteditable=\"true\">").concat(skillsHTML, "</ul>\n        ");
        // Display Resume
        if (resumeDisplayElement) {
            resumeDisplayElement.innerHTML = resumeHTML;
        }
        else {
            console.error('The resume display element is missing.');
        }
    });
}
