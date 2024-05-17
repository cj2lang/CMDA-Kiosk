//Tab snippet js, used in the CMDA Signage Project

//THIS IS NOT THE LEFT NAV JS. THAT IS ON /signage-prototype/pages/index.html.

document.addEventListener("DOMContentLoaded", function() {
    // Get all tab links
    var tabs = document.querySelectorAll('.tab-snippet .nav-link');

    tabs.forEach(function(tab) {
        tab.addEventListener('click', function(event) {
            event.preventDefault();

            // Find the closest tab-snippet parent
            var tabSnippet = tab.closest('.tab-snippet');

            // Remove active class from all tabs in the same tab-snippet
            var siblingTabs = tabSnippet.querySelectorAll('.nav-link');
            siblingTabs.forEach(function(siblingTab) {
                siblingTab.classList.remove('active');
            });

            // Add active class to clicked tab
            tab.classList.add('active');

            // Hide all tab content in the same tab-snippet
            var tabContents = tabSnippet.querySelectorAll('.tab-info');
            tabContents.forEach(function(tc) {
                tc.style.display = 'none';
            });

            // Show the active tab content
            var activeTabContent = tabSnippet.querySelector(tab.getAttribute('href'));
            if (activeTabContent) {
                activeTabContent.style.display = 'block';
            }
        });
    });
});