
var storage = [];

var entryPanel = document.querySelector("#entry-panel")
var listView = document.querySelector("#list-view")
var submit = document.querySelector("#entry-panel button")
var newTitle = document.querySelector("#title");
var newSeverity = document.querySelector("#severity");
var newState = document.querySelector("#state");
var newDescription = document.querySelector("#description");
var newOwner = document.querySelector("#owner");
var newRelease = document.querySelector("#release");
var toggleBox = document.querySelector("#toggle-box");
var totalBugs = document.querySelector("#total-bugs");
var totalSev1Bugs = document.querySelector("#total-sev1");

function updateDisplay (newBug) {
    var el = document.createElement ("div");

    el.classList.add("fields-block");
    el.classList.add("cf");

    el.innerHTML = 
        "<p class='title_spec'>" + newBug.title + "</p>" +
        "<div class='sev_spec'> <p class='sev-tag'>Severity: </p>" +
            "<p>"  + newBug.severity + "</p>" +
        "</div>" +
        "<p class='state_spec'>" + newBug.state + "</p>" +
        "<p class='desc_spec'>" + newBug.description + "</p>" +
        "<p class='owner_spec'>" + newBug.owner + "</p>" +
        "<p class='date_spec'>" + newBug.date + "</p>" +
        "<p class='release_spec'>" + newBug.release + "</p>" 


    listView.appendChild(el);
}

function updateStats (array) {
    totalBugs.textContent = array.length;
    totalSev1Bugs.textContent = array.reduce (function (a,b) {
        if (parseInt(b.severity) === 1 ) {
            return a + 1;
        } else {
            return a;
        }

    },0);
}

function addBugToList (bug) {
    storage.push(bug);
    updateDisplay(bug);
    updateStats(storage);
}



submit.addEventListener("click", function (e) {
    addBugToList({ 
        title: newTitle.value,
        severity: newSeverity.value,
        state: newState.value,
        description: newDescription.value,
        owner: newOwner.value,
        date: new Date().toDateString(),
        release: newRelease.value
    });
    
});

function clearChildren() {

}

var flag = 1;
toggleBox.addEventListener("click", function (e) {
    if (flag === 1) {
        entryPanel.style.opacity = "0";
        flag = 0;
    } else {
        entryPanel.style.opacity = "1";
        flag = 1;
    }

});



