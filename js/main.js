	
var winheight = window.innerHeigh
var scrollTop = window.pageYOffset;
console.log(scrollTop);


var forms = document.querySelectorAll('form');
var nextBtn = document.querySelectorAll('#submit')

var index = 0;


for (var i = 0; i < forms.length; i++){
    forms[i].classList.add('hidden');
    console.log(i);
}

forms[0].classList.remove('hidden');


function nextButton(){
index++;
    forms[index].classList.toggle('hidden');
    console.log(index);
    console.log('button number', nextBtn[index]);
};

nextBtn[index].addEventListener("mousedown", nextButton)
console.log(index);





var createBtn = document.querySelector(".adj_btn");
createBtn.addEventListener('mousedown', getValues);
createBtn.addEventListener('mousedown', showStory);


function addText(inputCssSelector, outputCssSelector) {
    var inputValue = document.querySelector(inputCssSelector).value;
    var outputElements = document.querySelectorAll(outputCssSelector);

    for (var i = 0; i < outputElements.length; i++) {
        if (inputValue != "")
            outputElements[i].textContent = inputValue;
    }
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

var story = document.querySelector('#story');

function showStory() {
    story.classList.remove('hidden');

    document.querySelector("#form_box").classList.add("hidden");
}