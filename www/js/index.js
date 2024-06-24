$(document).ready(function() {
    // AJAX request to fetch staff data
    $.ajax({
        url: 'https://kerbau.odaje.biz/getstaff.php',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            // Process each staff entry
            data.forEach(function(staffJson) {
                let staff = JSON.parse(staffJson);
                // Display email as list item with employeeNumber as id
                $('#staffList').append('<li class="list-group-item"><a href="secondpage.html?id=' + staff.employeeNumber + '">' + staff.email + '</a></li>');
            });
        },
        error: function(xhr, status, error) {
            console.error('Error fetching staff data:', error);
        }
    });
});
