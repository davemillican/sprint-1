
var storage = [];

var entryPanel = document.querySelector("#entry-panel")
var listView = document.querySelector("#list-view")
var submit = document.querySelector("#entry-panel button")
var newTitle = document.querySelector("#title");
var newSeverity = document.querySelector("#severity");
var newState = document.querySelector("#state");
var newDescription = document.querySelector("#description");
var toggleBox = document.querySelector("#toggle-box");

function updateDisplay (newBug) {
    var el = document.createElement ("div");

    el.classList.add("fields-block");
    el.classList.add("cf");

    el.innerHTML = 
        "<p class='title_spec'>" + newBug.title + "</p>" +
        "<p class='sev_spec'>"  + newBug.severity + "</p>" +
        "<p class='state_spec'>" + newBug.state + "</p>" +
        "<p class='desc_spec'>" + newBug.description + "</p>" +
        "<p class='owner_spec'>" + newBug.owner + "</p>" +
        "<p class='date_spec'>" + newBug.date + "</p>" +
        "<p class='release_spec'>" + newBug.release + "</p>" 


    listView.appendChild(el);
}


function addBugToList (bug) {
    storage.push(bug);
    updateDisplay(bug);
}



submit.addEventListener("click", function (e) {
    addBugToList({ 
        title: newTitle.value,
        severity: newSeverity.value,
        state: newState.value,
        description: newDescription.value,
        owner: "placeholder",
        date: "placeholder",
        release: "version 2.5.3"
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



