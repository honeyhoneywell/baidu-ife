require.config({
    paths : {
        "calendar" : ["calendar"],
        "util" : ["util"]
    }
})


require( ["calendar" , "util"] , function (calendar) {
    $ = new u();
    var oCW = $.$(".calendar-wrap");
    var oC = $.$(".calendar-wrap input");
    

    calendar( oCW , oC , function () {

    });
});