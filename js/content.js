// initialize the returned content -result

var result="We stand against suicide"

// function to change the content to display on the iframe

function displayContent(id) {
  console.log(id);
  if (id === "suicidal_ideation") {
    result="We stand against Suicide";
    
  }
};

//function to set the content on the iframe
function defaultIframe(){
  document.getElementById("display_iframe").contentDocument.getElementById("category_content").innerHTML=result;

}