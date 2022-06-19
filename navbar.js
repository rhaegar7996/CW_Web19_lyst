//cartbutton after login logic//
let loggedIn = Boolean(localStorage.getItem('loggedIn')) || false;
if(loggedIn===true) {
 loginbut = document.querySelector('#navbar > div:nth-child(1) > p:nth-child(6) > a')
 loginbut.innerText=' 🛒 '
 
 loginbut.setAttribute('href','cart.html')

 signinbut = document.querySelector('#navbar > div:nth-child(1) > p:nth-child(5) > a')
 signinbut.innerText = ''
}
//cartbutton after login logic//
ScrollOut( {
    cssProps: true,
    threshold: 0.2
} );

function redirect( x ) {
    x.classList.toggle( "change" )
    // window.location.href="womens.html"
}
document.querySelector( "#search_icon" ).addEventListener( "click", display_search );
function display_search() {
    document.querySelector( "#menu_icon" ).style.right = "91%";
    document.querySelector( "#person_icon" ).style.left = "7%";
    document.querySelector( "#search" ).style.display = "block";
    document.querySelector( "#close_search" ).style.display = "block";
    document.querySelector( "#navbar" ).style.height = "80px";
}
// close searchbar
document.querySelector( "#close_search" ).addEventListener( "click", close_search );
function close_search() {
    document.querySelector( "#search" ).style.display = "none";
    document.querySelector( "#close_search" ).style.display = "none";
    document.querySelector( "#navbar" ).style.height = "40px";
    document.querySelector( "#menu_icon" ).style.right = "95%";
    document.querySelector( "#person_icon" ).style.left = "5px";
    window.location.reload()
}

// change color of border in search
document.querySelector( "#search" ).addEventListener( "click", changeborder );
function changeborder() {

    document.querySelector( "#search" ).style.border = "1px solid #8735ea"
    document.querySelector( "#search" ).style.backgroundColor = "transparent"
}


// display help dropdown
document.querySelector( "#help" ).addEventListener( "click", displaybar );

function displaybar() {
    document.querySelector( ".helplist" ).style.display = "inline-block";
}



// contry selection
let arr = [
    { country: "India", currency: "$" },
    {
        country: "United States of America",
        currency: "$",
    },
    { country: "China", currency: "$" },
    { country: "Nepal", currency: "$" },
    { country: "Australia", currency: "$" },
    { country: "France", currency: "$" },
    { country: "South Africa", currency: "$" },
    { country: "Nigeria", currency: "$" },
    { country: "Mexico", currency: "$" },
    { country: "Argentina", currency: "$" },
    { country: "Brazil", currency: "$" },
    { country: "Canada", currency: "$" },
    { country: "Singapore", currency: "$" },
    { country: "Sweden", currency: "$" },
    { country: "Germany", currency: "$" },
];
for ( let i = 0; i < arr.length; i++ ) {
    let x = document.createElement( "option" );
    x.innerText = arr[ i ].country;
    document.querySelector( "select" ).append( x );
}
// document.querySelector( "#set_country" ).style.display = "none";
document.querySelector( "#country" ).addEventListener( "click", displayselect );
function displayselect() {
    document.querySelector( "#set_country" ).style.display = "inline-block";
    document.querySelector( "#set_country" ).style.visibility = "visible";
}
document.querySelector( "#close_display" ).addEventListener( "click", closedisplay );

function closedisplay() {
    document.querySelector( "#set_country" ).style.display = "none";
}
document.querySelector( "#set_country button " ).addEventListener( "click", set_country );
function set_country() {
    window.location.reload();
}
// country section over ....................................................//
// it will close dropdown when clicking outside
document.addEventListener( "click", function ( event ) {
    if ( ( event.target.matches( "#set_country" ) ) ||
        ( !event.target.closest( "#country" ) ) ) {
        closeModel()
    }




},
    false );



document.addEventListener( "click", function ( event ) {
    if ( ( event.target.matches( ".helplist" ) ) || ( !event.target.closest( "#help" ) ) ) {
        closehelp()
    }
},
    false );


function closehelp() {

    document.querySelector( ".helplist" ).style.display = "none";
}

function closeModel() {
    document.querySelector( "#set_country" ).style.display = "none";
    // document.querySelector( ".helplist" ).style.display = "none";

}
// for logo
document.querySelector( "#logo" ).addEventListener( "click", redirect );
function redirect() {
    window.location.href = "index.html";
}
document.querySelector( "#menu_icon" ).addEventListener( "click", redirect_womenspage );
function redirect_womenspage() {
    window.location.href = "womens.html";
    // window.location.reload();
}
