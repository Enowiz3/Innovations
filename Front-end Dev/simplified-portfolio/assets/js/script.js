document.addEventListener("DOMContentLoaded", function () {
    updateSidebar("home"); // Set default sidebar menu on page load
});

// Function to load content dynamically
function loadContent(page, section, subSection = null) {
    fetch(page)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("main-content").innerHTML = data;
            updateSidebar(section, subSection);

            // Construct the new URL path dynamically
            let newUrl = `/${section}`;
            if (subSection) {
                newUrl += `/${subSection}`;
            }

            // Update browser URL without reloading the page
            window.history.pushState({ path: newUrl }, '', newUrl);
        })
        .catch(error => console.error("Error loading page:", error));
}

/* 
✅ Updates the Browser URL – When you click About Me, the URL changes to www.enowiz.com/aboutme.
✅ Does NOT Reload the Page – Only updates the URL and dynamically loads content.
✅ Improves SEO & User Experience – Clients can see which section they're viewing.
*/

 
// Back Button Handler

window.onpopstate = function(event) {
    const path = window.location.pathname.split('/').filter(Boolean);
    
    if (path.length === 1) {
        loadContent(`${path[0]}.html`, path[0]);
    } else if (path.length === 2) {
        loadContent(`${path[1]}.html`, path[0], path[1]);
    } else {
        loadContent("home.html", "home");
    }
};

// Function to dynamically update sidebar content
function updateSidebar(section, subSection = null) {
    const sidebarMenu = document.getElementById("sidebar-menu");
    let menuContent = "";

    if (section === "techarchive") {
        menuContent = `
            <h5 class="label"> Proof of Concept (POC) </h5>
            <h6 class="sublabel"> Cloud Computing </h6>
            <a class="component" href="#" onclick="loadContent('pages/aws.html', 'techarchive', 'aws')">Amazon Web Services (AWS)</a>
        `;
    } else if (section === "projects") {
        menuContent = `
            <a href="#" onclick="loadContent('web-projects.html', 'projects', 'web-dev')">Web Projects</a>
            <a href="#" onclick="loadContent('automation.html', 'projects', 'automation')">Automation Scripts</a>
            <a href="#" onclick="loadContent('cloud.html', 'projects', 'cloud-deploy')">Cloud Deployments</a>
        `;
    } else if (section === "contact") {
        menuContent = `
            <a href="#" onclick="loadContent('email.html', 'contact', 'email')">Email</a>
            <a href="#" onclick="loadContent('social.html', 'contact', 'social')">Social Media</a>
        `;
    } else {
        menuContent = `
            <a href="#" onclick="loadContent('home.html', 'home')">Welcome</a>
        `;
    }

    sidebarMenu.innerHTML = menuContent;
}
