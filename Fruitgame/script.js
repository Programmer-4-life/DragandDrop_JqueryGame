var score=0;
    var fruits = ["./images/apple.jpg", "./images/dates.jpg", "./images/fig.jpg", "./images/watermelon.jpg", "./images/mango.jpg",
                 "./images/grapes.jpg","./images/pineapple.jpg"];
    var names = ["apple", "dates", "fig", "watermelon","mango","grapes","pineapple"]
    $(document).ready(function() {
        var suffleArray = suffle(fruits);

        $.each(suffleArray, function(index, value) {
            var fruit_value = value.slice(9, -4);
            
            $("<div ><img style='width:190px;height:190px;' src='" + value + "' /></div>").appendTo("#Fruits").draggable({
                revert: true,
                scope: fruit_value.toLocaleLowerCase()
            });


        });

        var suffle_name = suffle(names)
        $.each(suffle_name, function(index, value) {
            $("<div>" + value + "</div>").appendTo("#fNames").droppable({
                scope: value.toLocaleLowerCase(),
                drop: function(event, ui) {
                    $(ui.draggable).append($(this).text());
                    score++;
                    $(this).hide("puff", "1000");
                    console.log(score);
                    $("#score_board").text("score: "+score);
                    if (score == names.length) {
                    
                        $("<div><p>Congrstulations!!! Do you want  to play again</p></div>").dialog({modal: true, buttons: [{
                                text: "Yes",
                                click:function() {
                                    window.reload();
                                }
                            },
                            {
                                text: "No",
                                click:function() {
                                    $(this).dialog("close");
                                     window.location.replace("thankyou.html")
                                }
                            }
                        ]});
                    }
                }
            });
        });


    });

    function suffle(arr) {
        return arr.sort(function() {
            return .5 - Math.random();
        });
    }