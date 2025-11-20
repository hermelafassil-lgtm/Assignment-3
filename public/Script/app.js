
(function(){
    // Define the start functions initalizes the app
    function start(){
        console.log("App started...")
        // Wint untill the DOM is fully loaded
        document.addEventListener("DOMContentLoaded",
 function () {
    setTimeout(function () {
        document.getElementById("preloader")
        .style.display = "none";
        setTimeout(function () 
        {   // Sets the document type for splah
            document.getElementById("splash")
            // Displayes non
            .style.display = "none";
            document.getElementById("content")
            .style.display = "block";
            // Adds live animation
            addLiveAnimations();
        }, 3000);
    }, 1000);
});
    } // Starts the app one completly loaded
    window.addEventListener("load",start);
})();