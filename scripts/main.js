
// This is a product of shadownet incoporation
$(document).ready(function() {
    // set date

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    if(dd < 10) {
        dd = '0'+ dd
    } 
    if(mm < 10) {
        mm='0' + mm
    } 
    today = mm+'/'+dd+'/'+yyyy;

    $("#date").text(today)

    $(".home-hero").hide();

    $('.close').click( function () { 
        $('.window').slideUp();
        $('.show').fadeIn();
        $(".home-hero").show();
    });

    $('.show').click( function () { 
        $('.window').slideDown();
        $('.show').fadeOut();
        $(".home-hero").hide();
    });

    $()

    var maxer = 0 ;
    $('.maxer').click( function () { 
        if(maxer%2 === 0) {  
            $('.window').animate({width:"60%", height:"400px"});
            $('#Tbd').animate({width:"97.6%", height:"400px"});
        }
        else {
            $('#Tbd').animate({width:"98.5%", height:"900px"});
            $('.window').animate({width:"100%", height:"900px"});
        }
        maxer++;
    });

    $("#command").focus();

    $('.min').click( function () { 
        $('pre').slideUp();
    });

    $('.max').click( function () { 
        $('pre').slideDown();
    });
    var commandor = '#command';
    onEnter(commandor)
 
});

$(function(){
    $(".element").typed({
        strings: ["Enter your command below....ask 'codedoctor --help' for help"],
        typeSpeed: 30,
        showCursor: false,
    });
});

function typeo(ele, message, speed, command, run) {
    $(ele).typed({
        strings: [message],
        typeSpeed: 0,
        showCursor: false,
        callback: function() {
            $(".response").append("<div class='fore clear' style='margin-top:10px;margin-left:10px;'>CMD</span>:<span class='accent'>~</div>: <input class='clear' style='color:#18bc51;background-color: #222220; width: 35%; border: none; line-height: 1.6em; font-size: 1em; -webkit-box-shadow: none;-moz-box-shadow: none; box-shadow: none;outline: none;' id=" + "'" + command + run + "'" + "type='text' maxlength='50'></input>")
            var commandor = "#" + command + run
            $(commandor).focus();
            onEnter(commandor)
        },
    });
}

var run = 0;
var cmd = null;
var commandList = [];

function onEnter(commandor) {
    $(commandor).on('keypress', function (e) {
        if(e.which == 13) {
            var command = $(commandor).val().toString().toLowerCase();
            commandList.push(command)
            var cla = "attach-" + run;
            var element = $("<div class=" + cla + ">" + "</div>")
            $(".response").append(element)
            if(command === " codedoctor -h" || command === "codedoctor --help") {
                message = " Usage: codedoctor [OPTIONS] COMMAND [ARGS]... <br><br> Codedoctor command line tool <br> Options: <br>   --help  Show this message and exit. <br> Commands:<br> who              Tells you who is codedoctor <br> schedule         Shows codedoctor schedule <br> hacks            Magics performed by codedoctor <br> academics        Academic qualification of codedoctor<br> clear/clc        Clear Screen<br> sec/secret        to know codedoctor secrets<br>";
                typeo("." + cla, message, 0, 'command-', run);
            }
            else if(command === "codedoctor -w" || command === "codedoctor who") {
                message = " codedoctor is an entrepreneur , hard code techy, hacker , algo lover and startup warrior.";
                typeo("." + cla, message, 0, 'command-', run);
            }
            else if(command === "codedoctor -s" || command === "codedoctor schedule") {
                message = " Day time Codedoctor Tead tech and Ops Team at SchoolCom and at night becomes the startup warrior and alsp help students on programming from all over the world.  <br>";
                typeo("." + cla, message, 0, 'command-', run)
            }
            else if(command === "codedoctor -ha" || command === "codedoctor hacks") {
                message = " Joined SchoolCom as a Developer and evolved to Co-Founder in 2 years,Solved a card puzzle by implementing his own number theory logic ,cracked interviews at Zoomcar and ibibo, Fixed a bug in Opensource 'Spreecommerce',Got 1st Rank in EverNote Programming Challenge'2012";
                typeo("." + cla, message, 0, 'command-', run);
            }
            else if(command === "codedoctor -a" || command === "codedoctor academics") {
                message = " codedoctor used to hate college curriculum , hence he invested most of the time in learning new technologies on its own.<br>";
                typeo("." + cla, message, 0, 'command-', run);
            }
            else if(command === "codedoctor -sec" || command === "codedoctor secret") {
                message = " codedoctor working on next big thing to change education industry in coming years.<br>";
                typeo("." + cla, message, 0, 'command-', run);
            }
            else if(command === "clear" || command === "clc") {
                $(".fore").remove();
                $("#command").remove();
                $(".response").remove();
                $(".break").remove();
                $("#Tbd").append("<div class='response'></div>")
                $(".response").append("<div class='fore clear' style='margin-top:10px;margin-left:10px;'>CMD</span>:<span class='accent'>~</div>: <input class='clear' style='color:#18bc51;background-color: #222220; width: 35%; border: none; line-height: 1.6em; font-size: .8em; -webkit-box-shadow: none;-moz-box-shadow: none; box-shadow: none;outline: none;' id='command' type='text' maxlength='50'></input>")
                $("#command").focus();
                onEnter("#command")
            }
            else {
                message = " Unknown command/option " + command.replace("codedoctor", "") + " .Try again";
                typeo("." + cla, message, 0, 'command-', run);
            }

            run = run + 1
            $(commandor).prop('disabled', true);
        }

    });
}

document.onkeydown = showPreviousCommand;
var i = 0
var j = 1
function showPreviousCommand(e) {
    var r = commandList.length - j
    var v = r + 1 
    e = window.event || e;

    if (e.keyCode == '38') {
        e.preventDefault()
        if(r < 0) {
          r = 0
        }
        $("#" + e.srcElement.id).val(commandList[r])
        j = j + 1
    }
    if (e.keyCode == '13') {
        j = 1
    }
    else if (e.keyCode == '40') {
        e.preventDefault()
        if(v > (commandList.length - 1)) {
          v = commandList.length - 1
        }
        $("#" + e.srcElement.id).val(commandList[v])
       j  = j - 1
    }

}
