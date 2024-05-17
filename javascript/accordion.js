//Accordion js, used in the CMDA Signage Project


//Each new instance of a dropdown must be added to the id section and the accords array.
//get accordion ids
var musicAccUnder = document.getElementById("musicAccordionUndergrad").getElementsByClassName("accordion");
var theatreAccUnder = document.getElementById("theatreAccordionUndergrad").getElementsByClassName("accordion");
var musicAccGrad = document.getElementById("musicAccordionGrad").getElementsByClassName("accordion");
var theatreAccGrad = document.getElementById("theatreAccordionGrad").getElementsByClassName("accordion");
var studentOrgAcc = document.getElementById("studentOrgsAccordion").getElementsByClassName("accordion");
var applyAcc = document.getElementById("applyAccordion").getElementsByClassName("accordion");
var contactInfoAcc = document.getElementById("contactInfoAccordion").getElementsByClassName("accordion");


const accords = [musicAccUnder, theatreAccUnder, musicAccGrad, theatreAccGrad, studentOrgAcc, applyAcc, contactInfoAcc];

function addAccordionEventListener(accordions) {
  for (var i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener("click", function() {
      // Close all other tabs within the same accordion
      for (var j = 0; j < accordions.length; j++) {
        if (accordions[j] !== this) {
          accordions[j].classList.remove("active");
          accordions[j].nextElementSibling.style.maxHeight = null;
        }
      }

      // Toggle the clicked tab
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
}

// Add event listeners to each accordion
for (var i = 0; i < accords.length; i++){
	addAccordionEventListener(accords[i]);
}


