$ (function(){
    function hideDiv() {
        $("#xdiv").hide();
        $("#ydiv").hide();
      }
    hideDiv();
    $("#triangle").on("click",function(){
        hideDiv();
        $("#xdiv").show();
        $("#ydiv").show();
        $("#promX").html("Zadej výška");
        $("#promY").html("Zadej délku strany a");
        $("#promZ").html("Zadej délku strany b");
        $("#promW").html("Zadej délku strany c");
    })
    $("#square").on("click",function(){
        hideDiv();
        $("#xdiv").show();
        $("#ydiv").show();
        $("#promX").html("Zadej délku strany a");
        $("#promY").html("Zadej délku strany b");
    })
    $("#circle").on("click",function(){
        hideDiv();
        $("#xdiv").show();
        $("#promX").html("Zadej poloměr");
    })
    let calc = {
        shape:'triangle',
        x:1,
        y:1,
        z:1,
        w:1,
        Striangle:function(){
            return (this.x * this.y)/2
        },
        Scircle:function(){
            return 3.14*(this.x*this.x)
        },
        Ssquare:function(){
            return (this.x * this.y)
        }
    }
    $("#button").on("click", function(){
        if ($('#circle').is(':checked')) {
            calc.x=$("#x").val();
            $("#result").html(`Obsah kruhu je: ${calc.Scircle()} cm<sup>2</sup>`)
        }
        if ($('#square').is(':checked')) {
            calc.x=$("#x").val();
            calc.y=$("#y").val();
            $("#result").html(`Obsah čtverce je: ${calc.Ssquare()} cm<sup>2</sup>`)
        }
        if ($('#triangle').is(':checked')) {
            calc.x=$("#x").val();
            calc.y=$("#y").val();
            $("#result").html(`Obsah trojúhelníku je: ${calc.Striangle()} cm<sup>2</sup>`)
        }
        
    })
});