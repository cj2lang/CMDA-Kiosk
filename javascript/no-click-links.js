//No Links js, used in the CMDA Signage Project

//Keeps events and map sections contained. No external links to leave the signage directory.

// Function to disable link clicks within the given container
function disableLinkClicks(container) {
    container.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault();
      });
    });
  }
  
  // Function to handle iframe content
  function disableLinksInIframe(iframeId) {
    const iframe = document.getElementById(iframeId);
    if (iframe.contentWindow.document.readyState === 'complete') {
      disableLinkClicks(iframe.contentWindow.document.body);
    } else {
      iframe.onload = () => {
        disableLinkClicks(iframe.contentWindow.document.body);
      };
    }
  }
  
  // MutationObserver callback to react on changes
  const observerCallback = (mutationsList, observer) => {
    for (let mutation of mutationsList) {
      if (mutation.type === 'childList') {
        // Disable links in dynamic content
        disableLinkClicks(document.getElementById('localist-widget-59891354'));
        disableLinksInIframe('map_frame');
      }
    }
  };
  
  // Creating an observer instance
  const observer = new MutationObserver(observerCallback);
  
  // Configuration of the observer:
  const config = { childList: true, subtree: true };
  
  // Start observing the target node for configured mutations
  observer.observe(document.getElementById('Events'), config); // Adjust to the parent container if needed
  