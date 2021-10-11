// initialize the returned content -result
var content;
if (content==null){
var content="We stand against suicide"
}


//select content to display when user navigates to the content page throught the homepage
function selectContentReferred(id){
if(id==="three"){
  console.log("clicked on loss");
  content="loss"
}


}

// function to change the content to display on the iframe

function displayContent(id) {
  console.log(id);
  // display content based on the clicked button
  if (id === "suicidal_ideation") {
    content="We stand against Suicide";
    
  }

  else if(id==="addiction"){
    content="We stand against addiction";
  }
  else if(id==="loss"){
    content="We stand against loss";
  }
  else if(id==="anxiety"){
    content="We stand against anxiety";
  }
  else if(id==="relationship"){
    content="We stand against relationship";
  }
  else if(id==="depression"){
    content="We stand against depression";
  }
  else{

    content="something went wrong,please reload the page";
  }
};

//function to set the content on the iframe
function defaultIframe(){
  document.getElementById("display_iframe").contentDocument.getElementById("category_content").innerHTML=content;

}

