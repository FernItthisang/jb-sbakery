document.addEventListener("DOMContentLoaded", function() {
    const main = document.getElementById("main");
    const section1 = document.getElementById("section1");

    // Delay before starting the transition to allow the page to load
    setTimeout(() => {
        main.classList.add("hidden");
    }, 500); // Adjust delay as needed

    main.addEventListener("transitionend", function() {
        // หลังจาก transition จบแล้ว, ซ่อน main ทั้งหมด
        main.style.display = "none";
        
        // แสดง section1
        section1.style.display = "block";
    });
});

// Connect with google sheet

// Replace with your actual Google Sheets JSON URL
function init() {
    Papa.parse('https://docs.google.com/spreadsheets/d/e/2PACX-1vTKO1gHxzzbjlR0Gnva1GFGIzpsmSpEMz4z9IA67nIR6e9FQRw7LJt6rPeiclOTudRoI9Y82PKU0y4m/pub?output=csv', {
        download: true,
        header: true,
        complete: function(results) {
            var data = results.data;
            console.log(data);  // Log data to the console
            showInfo(data);     // Call function to display the data
        }
    });
}

function showInfo(data) {
    const gridContainer = document.getElementById('grid-container');
    
    data.forEach(row => {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');

        // Create image element
        const image = document.createElement('img');
        image.src = row.image;  // Make sure to match the column names in the CSV file
        image.alt = row.title;

        // Create title element
        const title = document.createElement('h3');
        title.textContent = row.title;

        // Create description element
        const description = document.createElement('p');
        description.textContent = row.description;

        // Append elements to grid item
        gridItem.appendChild(image);
        gridItem.appendChild(title);
        gridItem.appendChild(description);

        // Append grid item to grid container
        gridContainer.appendChild(gridItem);
    });
}

window.addEventListener('DOMContentLoaded', init);