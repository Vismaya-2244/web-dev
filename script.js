// script.js
$(document).ready(function () {
    $('#registrationForm').on('submit', function (e) {
        e.preventDefault(); // Prevent form from reloading page
        const formData = $(this).serialize();
        $.post('submit.php', formData, function (response) {
            $('#response').html(response).show();
        });
    });
});
