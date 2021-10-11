// initialize the returned content -result

var content="We stand against suicide"

// function to change the content to display on the iframe

function displayContent(id) {
  console.log(id);
  if (id === "suicidal_ideation") {
    content="We stand against Suicide";
    
  }

  else if(id==="addiction"){
    content="We stand against addiction";
  }
};

//function to set the content on the iframe
function defaultIframe(){
  document.getElementById("display_iframe").contentDocument.getElementById("category_content").innerHTML=content;

}