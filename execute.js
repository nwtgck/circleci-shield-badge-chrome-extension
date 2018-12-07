var waitMsec = 100;

(function process() {
  var embedCodeElem = document.querySelector("#subpage > section > article > div.status-page-inner > form > div.embed > textarea");
  if(embedCodeElem === null) {
    setTimeout(process, waitMsec);
    return;
  }

  // Replace embed code with style=shield
  function changeEmbedCode(){
    console.log(embedCodeElem);
    embedCodeElem.value = embedCodeElem.value.replace("style=svg", "style=shield");  
  }

  // Replace embed code with style=shield
  changeEmbedCode();

  // Change embed code on-change pull-down menu
  var embedCodeSelect = document.querySelector("#subpage > section > article > div.status-page-inner > form > div.embed > select");
  embedCodeSelect.addEventListener("change", function(){
    setTimeout(function(){
      changeEmbedCode();
    }, waitMsec);
  });

  // Change the demo image to sheild-style
  var img = document.querySelector("#subpage > section > article > div.status-page-inner > form > div.preview > img");
  img.src = img.src.replace("style=svg", "style=shield");
})();
