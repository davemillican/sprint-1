(function () {
    var storage = [
        {   title: "init problem",
            severity: '3',
            state: "open",
            description: "The computer smokes on reset",
            owner: "Dennis",
            date: "1/15/16",
            release: "1.2.17.3"},

        {   title: "U/I Blue Screen",
            severity: '1',
            state: "open",
            description: "hard to reproduce",
            owner: "Mark",
            date: "1/21/16",
            release: "Rel Alpha 2"}
            ];

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
    var filterButton = document.querySelector("#filter-button");

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
        bug.index = storage.length;
        storage.push(bug);
        updateDisplay(bug);
        updateStats(storage);
    }


    function displayAll(arr) {

        while (listView.children.length > 0) {
            listView.removeChild(listView.children[0]);
        }

        console.log( "length " + listView.children.length);

        arr.forEach (function (item) {
            updateDisplay (item);
        });
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


    var flag = 1;

    toggleBox.addEventListener("click", function (e) {
        if (flag === 1) {
            entryPanel.classList.add("invisible");
            flag = 0;
        } else {
            entryPanel.classList.remove("invisible");
            flag = 1;
        }

    });

    var filterFlag = true;

  
    filterButton.addEventListener('click', function(e) {
        var filtered;

        if (filterFlag === true ) {
            filtered = storage.filter(function(item) {
                return (item.severity === "1" );
            }); 

            displayAll(filtered);
            filterFlag = false;

        } else {

            displayAll(storage);
            filterFlag = true;

        }
    });

    displayAll (storage);

})();

