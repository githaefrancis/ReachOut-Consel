var suicideIdeation={

  "title":"Suicide Ideation",
  "description":"Suicide are the thoughts that make an individual feel hopeless and have the urge to end their lives.",
  "expertAdvice":"Even the strongest people experience suicidal thoughts that are usually triggered by stress and mental health challenges. If you’re experiencing  suicidal thoughts, having a good support system can help you pull through."
}

var depression={
  "title":"Depression",
  "description":"Are you feeling stuck in your life? The future looks not so promising for you. Are you unable to take a step forward?",
  "expertAdvice":"One thing that always helps with depression is taking care of yourself, building up your self-esteem. By taking care of yourself we mean eating well, try exercising and yoga, meditating, taking yourself out, treating yourself, all these really help build up a good mental health which with time helps you handle stress differently. Reachout will always be your home, so if you ever need to talk to someone, do not hesitate to reach us."
}

var anxiety={

  "title":"Anxiety",
  "description":"Are you feeling restless and overly worried about something?",
  "expertAdvice":"Try to understand what you are going through and what exactly triggers your anxiety, it could be post traumatic stress, social anxiety or obsessive anxiety. Most of these anxiety come from within and it really helps to work on yourself and assure yourself you are the most important thing to yourself. You can always talk to us and we will be glad to walk with you through the process."
}

var relationship={

  "title":"Relationships",
  "description":"Are you feeling unsettled in your current relationship? Are you comfortable with your partner?",
  "expertAdvice":"We all deserve to feel loved and cared for- the reason why we feel like we’ve hit the end of the world when our relationships break down. Much as we do not have control over other people’s commitment to give us the treatment we deserve, finding solace in our inner self is vital."
}
var addiction={
  "title":"Addiction",
  "description":"Are you struggling quiting a habit?",
  "expertAdvice":"Old habits die hard, but not for everyone. Whereas some people can overcome addictions by themselves, others require guidance and support. ReachOut counsel is a reliable partner in walking you through your addiction withdrawal process, regardless of how embarrassing your situation is. We do not judge because we’ve all been there."
}

var loss={
  "title":"Loss",
  "description":"Have you lost a loved one in your life. How are you coping?",
  "expertAdvice":"The pain of losing a member of your family or a loved one never really goes away, especially if you were close. We just need to learn how to live with it because one thing is for sure the pain becomes more bearable with time.Try appreciating them in your thoughts, like every loss it won't be a quick process it will take time to adjust to. Always feel free to reach out to us, we are here for you."
}

// initialize the returned content -result
var content;
if (content==null){
 content=suicideIdeation;
}


//select content to display when user navigates to the content page throught the homepage
function selectContentReferred(id){
if(id==="three"){
  content=loss;
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
    content=addiction;
  }
  else if(id==="loss"){
    content=loss;
  }
  else if(id==="anxiety"){
    content=anxiety;
  }
  else if(id==="relationship"){
    content=relationship;
  }
  else if(id==="depression"){
    content=depression;
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
  title.innerHTML=content.title;
  advice.innerHTML=content.expertAdvice;
}

