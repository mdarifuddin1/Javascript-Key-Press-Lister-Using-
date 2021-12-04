for (var i = 0; i < 3; i++) {

    document.querySelectorAll(".MyClass")[i].addEventListener("click", function() {

        var text = this.innerHTML;
        console.log(text);
        audioPlay(text);
        playanimation(text);

    });

    document.addEventListener("keypress", function(event) {

        var text = event.key;
        audioPlay(text);
        audioPlay(text);

    });

    function audioPlay(text) {
        switch (text) {
            case "A":
                var audio = new Audio("sound/A.mp3");
                audio.play();
                break;

            case "B":
                var audio = new Audio("sound/B.mp3");
                audio.play();
                break;

            case "C":
                var audio = new Audio("sound/C.mp3");
                audio.play();
                break;
        }
    }

    function playanimation(text) {
        var SelectButton = document.querySelector("." + text);
        SelectButton.classList.add("anim");
    }


}