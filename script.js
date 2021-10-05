var url = 'https://www.boredapi.com/api/activity';


$.getJSON(url, function(data) {
    console.log(data);
    display.innerHTML = 
    `${data.activity} 
 

    
    
    
    `;
});

suggestion.addEventListener('click', reloadPage) ;

function reloadPage() {
    window.location.reload();
}