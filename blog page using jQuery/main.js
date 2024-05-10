$(document).ready(function(){
    $("#btn").click(function(){
        $("#navbar").toggle(1000)
    } );



    $('#button1').click(function(){
        $(".firstInfo").animate({
            left: '500px'
        })
        $(".firstInfo").toggle()
    } )

    $('#button2').click(function(){
        $(".secondInfo").animate({
            left: '500px'
        })
        $(".secondInfo").toggle()
    } )

    $('#button3').click(function(){
        $(".thirdInfo").animate({
            left: '500px'
        })
        $(".thirdInfo").toggle()
    } )

    $('#button4').click(function(){
        $(".fourthInfo").animate({
            left: '500px'
        })
        $(".fourthInfo").toggle()
    } )



    $("#slideButton").click(function(){
        $("#para2").slideToggle("slow");
      });

      $("#slideButton2").click(function(){
        $(".paragraph3").slideToggle("slow");
      });
      $("#slideButton").click(function(){
        $("#para2").slideToggle("slow");
      });



      $("#slideButton3").click(function(){
        $(".paragraph4").slideToggle("slow");
      });

      $("#slideButton4").click(function(){
        $(".paragraph5").slideToggle("slow");
      });

      $("#slideButton5").click(function(){
        $(".paragraph6").slideToggle("slow");
      });

      $("#slideButton6").click(function(){
        $(".paragraph7").slideToggle("slow");
      });

    

} )


$(document).ready(function(){
    $("#INP").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("ol li").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });

  




  $(document).ready(function(){
    function add(){
        $(".copied").addClass("bounce-effect");
    }
    function remove(){
        $(".copied").removeClass("bounce-effect");
    }

    $(".copy-btn").click(function(){
        $("#textField").select();
        document.execCommand("copy");
        add();
        setTimeout(remove, 800);
    } )
  } )



  
  $(document).ready(function(){
    $(".bn18").click(function(){
      alert($("#href").attr("href"));
    });
  });