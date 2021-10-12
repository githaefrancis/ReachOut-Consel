var suicideIdeation={

  "title":"Suicide Ideation",
  "description":"Suicide are the notions",
  "expertAdvice":"Sit and reflect on the better days.Things could get back to these."
}





// initialize the returned content -result
var content;
if (content==null){
var content=suicideIdeation
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
    content=suicideIdeation;
    
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
  var title=document.getElementById("display_iframe").contentDocument.getElementById("content_heading");
  var advice=document.getElementById("display_iframe").contentDocument.getElementById("content_advice");
  var counsellor_email=document.getElementById("display_iframe").contentDocument.getElementById("counsellor_email");
  var description=document.getElementById("display_iframe").contentDocument.getElementById("content_description");
  description.innerHTML=content.description;
  title.innnerHTML=content.title;
  advice.innerHTML=content.expertAdvice;
}

