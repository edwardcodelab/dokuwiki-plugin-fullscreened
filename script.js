
 
// add a new toolbar button, but first check if there is a toolbar
if (typeof window.toolbar !== 'undefined') {
    window.toolbar[window.toolbar.length] = {
        type: "fullscreenmode", // we have a new type that links to the function
        title: "Fulls Screen Edit Mode",
        icon: "../../plugins/fullscreened/fullscreened.png",
        key:""
    };    
}




function addBtnActionFullscreenmode($btn, props, edid) {
    // initialize stuff if required
    // ...
 
    $btn.click(function() {
     jQuery('.editBox').toggleClass('fullscreen');

        return false;
    });
 
    return 'click';
}



     
