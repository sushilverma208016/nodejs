
// client-side code
function getData() {
    // to communicate with server
    // NON-XHR way
    // window.open();

    //XHR way //XmlHttpRequest
    const xhr = new XMLHttpRequest();
    xhr.open( "get", "/products", true ); // true is for async

    //register the function to process the response
    xhr.onload = function() {
        document.getElementById( "busy" ).style.visibility = "hidden";     
        document.getElementById( "output" ).innerHTML = xhr.responseText;        
        
        // setTimeout ( () => {
            // alert( "From server: " + xhr.responseText );
        // }, 50 );
    };
    xhr.send(); // async
    document.getElementById( "busy" ).style.visibility = "visible";
}