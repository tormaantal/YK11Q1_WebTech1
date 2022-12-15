
var rotation = 0;

$(document).ready(function () {
    $("#szorzo").mouseenter(function () {
        $(this).html("Tanuld meg!");
    });
    $("#szorzo").mouseleave(function () {
        $(this).html("Szorzótábla");
    });

    $("#logo").click(function () {
        rotation += 90;
        $(this).css({
            'transform': 'rotate(' + rotation + 'deg)'
        })
    })

    $("#gomb").click(function () {
        var name = $("#name").val();
        var email = $("#email").val();
        var date = $("#date").val();
        var gender = document.querySelector('input[name = "gender"]:checked');
        var textarea = $("#textarea").val();
        $("#name").css('border', '1px solid #ccc');
        $("#email").css('border', '1px solid #ccc');
        $("#date").css('border', '1px solid #ccc');
        $("#gender").css('border', '1px solid #ccc');
        $("#textarea").css('border', '1px solid #ccc');
        if (name == "") {
            alert("Adja meg a nevét!");
            $("#name").css('border', '2px solid #ff0000');
            return;
        }
        if (email == "") {
            alert("Adja meg az email címét!");
            $("#email").css('border', '2px solid #ff0000');
            return;
        }
        if (date == "") {
            alert("Adja meg a dátumot!");
            $("#date").css('border', '2px solid #ff0000');
            return;
        }
        if (gender == null) {
            alert("Adja meg a nemét!")
            $("#gender").css('border', '2px solid #ff0000');
            return;
        }
        if (textarea == "") {
            alert("Írja le mi a problémája!")
            $("#textarea").css('border', '2px solid #ff0000');
            return;
        }
        alert("Elküldve!");
    })

})
