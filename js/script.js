





// Get submit button

// var submitBtn = document.getElementById("submit");
// submitBtn.addEventListener('mousedown', getValues);
// submitBtn.addEventListener('mousedown', showScenes1);


// Click logo or "restart" to restart 

var restart = document.querySelectorAll('.restart');

for (var i = 0; i < restart.length; i++ ){
    restart[i].addEventListener('mousedown', showForm);
}


function getValues() {

    // replace text names
    addText("input.widow", "span.name1");
    addText("input.wolf", "span.name3");
    addText("input.cat", "span.name2");
    addText("input.hare", "span.name4");

    // replace text b-adjektiv
    addText("input.b_ad1", "span.bad1");
    addText("input.b_ad2", "span.bad2");
    addText("input.b_ad3", "span.bad3");
    addText("input.b_ad4", "span.bad4");

    // replace text b-adjektiv
    addText("input.ad_1", "span.ad1");
    addText("input.ad_2", "span.ad2");
    addText("input.ad_3", "span.ad3");
    addText("input.ad_4", "span.ad4");
    addText("input.ad_5", "span.ad5");
    addText("input.ad_6", "span.ad6");
    addText("input.ad_7", "span.ad7");
    addText("input.ad_8", "span.ad8");


    // hide input
    document.querySelector("#form_box").classList.add("hidden");
}

function addText(inputCssSelector, outputCssSelector) {
    var inputValue = document.querySelector(inputCssSelector).value;
    var outputElements = document.querySelectorAll(outputCssSelector);

    for (var i = 0; i < outputElements.length; i++) {
        if (inputValue != "")
            outputElements[i].textContent = inputValue;
    }
}


/* 


var scene1 = document.getElementById("scene1");
var scene2 = document.getElementById("scene2");
var scene3 = document.getElementById("scene3");
var scene4 = document.getElementById("scene4");


var nextBtn1 = document.getElementById("nextButton1");
nextBtn1.addEventListener("mousedown", showScenes2);

var nextBtn2 = document.getElementById("nextButton2");
nextBtn2.addEventListener("mousedown", showScenes3);

var nextBtn3 = document.getElementById("nextButton3");
nextBtn3.addEventListener("mousedown", showScenes4);

*/

function showForm() {
    document.querySelector("#form_box").classList.remove("hidden");

    document.querySelector("#form_box").scrollTop = 0;
    console.log('scroll back to top!');
}


/*


function showScenes1() {
    scene1.classList.remove('hidden');

    scene2.classList.add('hidden');
    scene3.classList.add('hidden');

    document.querySelector("#form_box").classList.add("hidden");
}


function showScenes2() {
    scene2.classList.remove('hidden');

    scene1.classList.add('hidden');
    scene3.classList.add('hidden');

    document.querySelector("#form_box").classList.add("hidden");
}

function showScenes3() {
    scene3.classList.remove('hidden');

    scene1.classList.add('hidden');
    scene2.classList.add('hidden');

    document.querySelector("#form_box").classList.add("hidden");
}

function showScenes4() {
    scene4.classList.remove('hidden');

    scene1.classList.add('hidden');
    scene2.classList.add('hidden');
    scene3.classList.add('hidden');

    console.log('showing scene 4');
    document.querySelector("#form_box").classList.add("hidden");
    console.log('hiding form');
}

*/
