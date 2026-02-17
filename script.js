document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("studentForm");
    const tableBody = document.querySelector("#studentTable tbody");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let id = document.getElementById("id").value.trim();
        let name = document.getElementById("name").value.trim();
        let marks = document.getElementById("marks").value.trim();

        // Validation
        if (id === "" || name === "" || marks === "") {
            alert("Please fill all fields!");
            return;
        }

        if (marks < 0 || marks > 100) {
            alert("Marks must be between 0 and 100");
            return;
        }

        // Create new row
        let newRow = document.createElement("tr");

        newRow.innerHTML = `
            <td>${id}</td>
            <td>${name}</td>
            <td>${marks}</td>
        `;

        // Add row to table
        tableBody.appendChild(newRow);

        // Clear form
        form.reset();
    });

});
