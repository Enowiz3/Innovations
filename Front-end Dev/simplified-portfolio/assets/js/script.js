document.addEventListener("DOMContentLoaded", function () {
    updateSidebar("home"); // Set default sidebar menu on page load
});

// Function to load content dynamically
function loadContent(page, section) {
    fetch(page)
        .then(response => response.text())
        .then(data => {
            document.getElementById("main-content").innerHTML = data;
            updateSidebar(section);
        })
        .catch(error => console.error("Error loading page:", error));
}


// Function to update the sidebar dynamically based on the selected section
function updateSidebar(section) {
    console.log("Updating sidebar for:", section); // Debugging

    const sidebarMenu = document.getElementById("sidebar-menu");
    let menuContent = "";
    
    if (section === "about") {

    } else if (section === "tech archive") {
        menuContent = `
            <h5 class="label"> Proof of Concept (POC) </h5>
            <h6 class="sublabel"> Cloud Computing </h6>
            <a class ="component" href="#" onclick="loadContent('pages/aws.html', 'tech archive')">Amazon Web Services (AWS)</a>
            
        `;
    } else if (section === "contact") {
        menuContent = `
            <a href="#" onclick="loadContent('email.html')">Email</a>
            <a href="#" onclick="loadContent('social.html')">Social Media</a>
        `;
    } else {
        menuContent = `
            <a href="#" onclick="loadContent('home.html')">Welcome</a>
        `;
    }

    sidebarMenu.innerHTML = menuContent;
}