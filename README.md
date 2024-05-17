Built by Caleb Langley and Cullen Sadler for the LSU College of Music & Dramatic Arts (CMDA).

An interactive kiosk system, to be stationed in the main lobby of the LSU School of Music, CMDA Building, and Tiger Band Hall.
This system is designed to provide an accessible and user-friendly resource for students, alumni, and visitors,
helping them to easily discover and explore the history, events, and programs of the college.
The project will feature a touchscreen interface for ease of use and interactive engagement.

The kiosk system will utilize Microsoft Edge's kiosk mode.
This will be set to the Idle page (/CMDA-KIOSK/pages/signage-prototype-idle.html).
This page activates once the system has not been interacted with for a set amount of time.
That amount of time can be changed in the idle javascript at the bottom of the index page.

Most js files can be found under CMDA-KIOSK/javascript/.
These files are labeled by their calls at the bottom of the index html page.
	
	Found in js folder:
	accordion.js - js for dropdowns. Each new instance of a dropdown must be added to the id section and the accords array.
	date-time.js - js for date and time. Calls date and time from hardware and formats it.
	no-click-links.js - js keeping outside links on the events page unclickable. Allows for outside snippet use without external links.
	slideshow.js - js for slideshow snippet. Currently unused.
	tab-snippet.js - js for tab snippets found in directory, education, and giving.
	weather-widget.js - js for weather in left nav footer. Calls from KBTR and formatted accordingly.
	
	Found on bottom of index: (These do not work being called from the javascript folder)
	idle function - js for idle function. Sets page to time out after X number of seconds and redirects them to the Idle page.
	side nav function - js for the side navigation. Allows users to go from tab to tab while in use.


The same is true for the CSS files. They are under CMDA-KIOSK/css/.
These are also labeled by each of their calls at the top of the index html page.
	
	accordion.css - dropdown styling, grey dropdown box with + and - on side.
	clock-weather.css - styling for clock and weather in the bottom of the nav.
	column-layout.css - styling for side by side columns, default width is 50%, can change with inline styling.
	hero-image.css - hero images found at top of each individual tab page.
	idle.css - styles for idle screen, just sets a clickable div over top of whole screen.
	index-page.css - main styles for system, holds items like p, h1, h2, h3, ul, ol, and li.
	slideshow.css - styles for slideshow snippet. Currently unused.
	stat-section.css - style for statistics found on home tab.
	tab-snippet.css - style for tabs found on different pages. Examples are Directory, Education, and Giving.
	tables.css - styling for tables found in directory/contact-information.
	tabs.css - styling for left navigation pane


I no longer have access to LSU CMDA's resources such as photos, videos, or other media used.
If this repository is cloned, none of the images or other media will work.
You will notice the file path tags (ex. {{f:65288767}}). These are the file path calls used in the Modern Campus CMS.