var current = 1;
var max = $("li").length + 1;

$(".quotation").hide();
$(".quotation:nth-child(1)").fadeIn("slow");

//function to change to next quote

function changeUp(){
    $(".quotation").hide();
    current += 1;
    if (current === max) {
        current = 1;
    }
    $(".quotation:nth-child(" + current + ")").fadeIn("slow");
}

function changeDown() {
    $(".quotation").hide();
    current -= 1;

    if(current === 0){
        current = max -1;
    }

    $(".quotation:nth-child(" + current +")").fadeIn("slow");
}

startChange();

$(".slider-arrow .next").click(function(){
    stopChange();
    changeUp();
    startChange();
});

$(".slider-arrow .prev").click(function(){
    stopChange();
    changeDown();
    startChange();
});

function startChange(){
    changeIt = setInterval(function(){
        changeUp();
    }, 3000)
    }
function stopChange() {
    clearInterval(changeIt);
}