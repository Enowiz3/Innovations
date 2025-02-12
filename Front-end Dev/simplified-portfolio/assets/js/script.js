document.addEventListener("DOMContentLoaded", function () {
    updateSidebar("home"); // Set default sidebar menu on page load
});

// Function to load content dynamically
function loadContent(page, section) {
    console.log("Loading content:", page, "Section:", section); // Debugging output

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
        menuContent = `
            <a href="#" onclick="loadContent('bio.html')">Biography</a>
            <a href="#" onclick="loadContent('experience.html')">Experience</a>
        `;
    } else if (section === "projects") {
        menuContent = `
            <a href="#" onclick="loadContent('web-projects.html')">Web Projects</a>
            <a href="#" onclick="loadContent('automation.html')">Automation Scripts</a>
            <a href="#" onclick="loadContent('cloud.html')">Cloud Deployments</a>
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