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

// // Replace with your actual Google Sheets JSON URL
// function init() {
//     Papa.parse('https://docs.google.com/spreadsheets/d/e/2PACX-1vTKO1gHxzzbjlR0Gnva1GFGIzpsmSpEMz4z9IA67nIR6e9FQRw7LJt6rPeiclOTudRoI9Y82PKU0y4m/pub?output=csv', {
//         download: true,
//         header: true,
//         complete: function(results) {
//             var data = results.data;
//             console.log(data);  // Log data to the console
//             showInfo(data);     // Call function to display the data
//         }
//     });
// }

// function showInfo(data) {
//     const gridContainer = document.getElementById('grid-container');
    
//     data.forEach(row => {
//         const gridItem = document.createElement('div');
//         gridItem.classList.add('grid-item');

//         // Create image element
//         const image = document.createElement('img');
//         image.src = row.image;  // Make sure to match the column names in the CSV file
//         image.alt = row.title;

//         // Create title element
//         const title = document.createElement('h3');
//         title.textContent = row.title;

//         // Create description element
//         const description = document.createElement('p');
//         description.textContent = row.description;

//          // Create description element
//          const price = document.createElement('p');
//          price.textContent = row.price;
 

//         // Append elements to grid item
//         gridItem.appendChild(image);
//         gridItem.appendChild(title);
//         gridItem.appendChild(description);
//         gridItem.appendChild(price);

//         // Append grid item to grid container
//         gridContainer.appendChild(gridItem);
//     });
// }

// window.addEventListener('DOMContentLoaded', init); // Initialize and load the Google API Client Library
        function loadClient() {
            gapi.load('client', function() {
                gapi.client.init({
                    apiKey: 'AIzaSyD6-CJ9pIY0-UzN6wjMCRDLxpfqLWk8cFk',  // Replace with your actual API key
                    discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest']
                }).then(function() {
                    console.log("Google API client loaded for Google Drive");
                    init();  // After loading the client, call init() to fetch data
                }, function(error) {
                    console.error("Error loading Google API client", error);
                });
            });
        }

        // Function to convert Google Drive file ID into a direct download link using API key
        function getDriveFileLink(fileId) {
            return `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media&key=YOUR_API_KEY`;  // Replace with your API key
        }

        // Convert Google Drive preview links to direct file IDs
        function convertDriveLink(link) {
            if (link.includes('drive.google.com/file/d/')) {
                const fileId = link.split('/d/')[1].split('/')[0];
                return getDriveFileLink(fileId);
            }
            return link;
        }

        // Fetch and display data from Google Sheets
        function init() {
            Papa.parse('https://docs.google.com/spreadsheets/d/e/2PACX-1vTKO1gHxzzbjlR0Gnva1GFGIzpsmSpEMz4z9IA67nIR6e9FQRw7LJt6rPeiclOTudRoI9Y82PKU0y4m/pub?output=csv', {
                download: true,
                header: true,
                complete: function(results) {
                    var data = results.data;
                    console.log("Data from Google Sheets:", data);  // Log data to the console for debugging
                    showInfo(data);     // Display the data
                }
            });
        }

        function showInfo(data) {
            const gridContainer = document.getElementById('grid-container');
            
            data.forEach(row => {
                const gridItem = document.createElement('div');
                gridItem.classList.add('grid-item');

                // Convert Google Drive image links to direct file links
                const imageUrl = convertDriveLink(row.image);

                // Check if the image URL is valid and log it
                console.log("Converted Image URL:", imageUrl);

                // Create image element
                const image = document.createElement('img');
                if (imageUrl) {
                    image.src = imageUrl;  // Ensure this column name matches your Google Sheet
                } else {
                    console.log("Image URL missing for:", row.title);
                }
                image.alt = row.title;

                // Create title element
                const title = document.createElement('h3');
                title.textContent = row.title;

                // Create description element
                const description = document.createElement('p');
                description.textContent = row.description;

                // Create price element
                const price = document.createElement('p');
                price.textContent = row.price;

                // Append elements to grid item
                gridItem.appendChild(image);
                gridItem.appendChild(title);
                gridItem.appendChild(description);
                gridItem.appendChild(price);

                // Append grid item to grid container
                gridContainer.appendChild(gridItem);
            });
        }

        // Load the API client and fetch the data from Google Sheets
        window.addEventListener('DOMContentLoaded', function() {
            loadClient();
        });
        console.log("main.js loaded successfully");
