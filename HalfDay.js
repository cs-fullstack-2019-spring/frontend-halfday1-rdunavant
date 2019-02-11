var clickItChangeColor;
document.addEventListener()
function click1() {
    if (clickIt === changeColor) {
        $("#btnFive").on("click", click1)
        clickIt = changeColor
    }

    function click2() {
        if (clickIt === changeColor) {
            $("#btnSix").on("click", click2)
            clickIt = changeColor
        }

        function click3() {
            if (clickIt === changeColor) {
                $("#btnSeven").on("click", click3)
                clickIt = changeColor
            }
        }

        $(".red").click(function () {
            $(this).css("background", "red");
        });
        $(".blue").click(function () {
            $(this).css("background", "red");
        });
        $(".yellow").click(function () {
            $(this).css("background", "red");
        });

        function KeyPressStuff(e) {
        }

        if (e.code === "KeyA") ;

        //Do something when A is pressed
        function startCounting(e) {
            console.log("Button Clicked");
            timerVariable = window.setInterval(timerFunction)
        }
    }
}
function timerFunction()
{
    console.log("Function in timer");
    sectionElement.innerText=count;
    count--;
}
