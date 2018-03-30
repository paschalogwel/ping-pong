


function test(num) {
  var arr = [];
  for (var i = 1; i <= num; i++) {

    if ((i % 3 == 0) && (i % 5 == 0)) {

      arr.push("pingpong");
    } else if (i % 3 == 0) {

      arr.push("ping");
    } else if (i % 5 == 0) {

      arr.push("pong");
    } else {
      arr.push(i);
      console.log(i);
    }
    }
    return arr;
    };



$(document).ready(function() {

          $(".btn").click(function(event) {
            event.preventDefault();
            var passedNumber =$("#ping1").val();
            $("#list").empty();
            var arr = test(passedNumber);
            console.log(arr);
            arr.forEach(function(m) {
            $("#list").append($("<li>").html(m));
            });
          });
        });
