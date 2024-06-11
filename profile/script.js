document.addEventListener('DOMContentLoaded', function() {
    // Show the active tab content
    const tabLinks = document.querySelectorAll('.account-settings-links a');
    const tabPanes = document.querySelectorAll('.tab-content .tab-pane');

    tabLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));

            tabLinks.forEach(function(link) {
                link.classList.remove('active');
            });
            tabPanes.forEach(function(pane) {
                pane.classList.remove('active');
            });

            this.classList.add('active');
            target.classList.add('active');
        });
    });

    // Activate the first tab
    tabLinks[0].click();
});

function uploadPhoto(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.querySelector('.ui-w-80').src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
}

function resetPhoto() {
    document.querySelector('.ui-w-80').src = 'https://bootdey.com/img/Content/avatar/avatar1.png';
}

function resendConfirmation() {
    alert('Resend confirmation email function triggered.');
    // Implement the actual resend functionality
}

function saveChanges() {
    const username = document.getElementById('username').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    alert(`Changes saved for ${name} (${username}) with email ${email}.`);
    // Implement the actual save functionality
}

function cancelChanges() {
    alert('Cancel changes function triggered.');
    // Implement the actual cancel functionality
}
