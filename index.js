document.querySelector( "#plus1" ).addEventListener( "click", myfunction );
function myfunction() {
    let x = document.querySelector( "#l1" ).style.display

    if ( x = "none" ) {
        document.querySelector( "#l1" ).style.display = "block";
    } else if ( x = "block" ) {
        document.querySelector( "#l1" ).style.display = "none";
    }
}
document.querySelector( "#plus2" ).addEventListener( "click", newfunction );
function newfunction() {
    document.querySelector( "#l2" ).style.display = "block";
}



//  <!-- ad images --> js
document.querySelector( "#main_image" ).addEventListener( "click", displaybar );

function displaybar() {
    document.querySelector( ".adimages" ).style.display = "inline-block";
    document.querySelector( "#navbar" ).style.width = "97%"
    document.querySelector( "*" ).style.overflow = "hidden";
    let open = document.querySelector( ".adimages" );
    window.onclick = function ( event ) {
        if ( event.target == open ) {
            document.querySelector( ".adimages" ).style.display = "none";
            document.location.reload();

        }
    }
}
