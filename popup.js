// Initialize button with user's preferred color
let changeColor = document.getElementById("changeColor");

chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});
 
// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: setPageBackgroundColor,
    });
  });
  
  // The body of this function will be executed as a content script inside the
  // current page
  function setPageBackgroundColor() {
    chrome.storage.sync.get("color", ({ color }) => {
        console.log("fuck you");
        // create button element
const button = document.createElement('button');
button.textContent = 'paste';

// set button position
button.style.position = 'absolute';
button.style.left = '0px';
button.style.top = '30%';
button.style.height = '100px';
button.style.width = '50px';
button.style.transform = 'translateY(-50%)';


button.id="button"
document.body.appendChild(button);
const button2 = document.createElement('button');
button2.textContent = 'copy';

// set button position
button2.style.position = 'absolute';
button2.style.right = '0px';
button2.style.top = '30%';
button2.style.transform = 'translateY(-50%)';
button2.id="button2"

button2.style.height = '100px';
button2.style.width = '50px';
// append button to document body
document.body.appendChild(button2);
const button111 = document.querySelector("#button");
button111.addEventListener("click", async function(){
  
  console.log("wocaonimade");
  const clipboardText =  await navigator.clipboard.readText();
  console.log(clipboardText);
  
  for_paste_area=document.getElementById("baidu_translate_input");
  for_paste_area.value="";
  for_paste_area.value=clipboardText;
});
  const button222 = document.querySelector("#button2");
  button222.addEventListener("click", function() {
      
    for_copy_area=document.querySelectorAll(".ordinary-output.target-output.clearfix");
   
    navigator.clipboard.writeText( for_copy_area[0].textContent)
  .then(function() {
    console.log("Text copied to clipboard.");
  })
  .catch(function(error) {
    console.error("Could not copy text: ", error);
  });
    });

    
        // var element_arr = document.getElementsByClassName("has-numbering");
        // var arr_length = element_arr.length;
        // for(var i =0; i<arr_length; i++) {
        //     element_arr[i].setAttribute('onclick','mdcp.copyCode(event)');
        // }


        //  element_arr = document.getElementsByClassName("signin");
        // arr_length = element_arr.length;
        // for(var i =0; i<arr_length; i++) {
        //     element_arr[i].setAttribute('onclick','hljs.copyCode(event)');
        // }
    
// setInterval(function () {
//     var element = document.getElementsByClassName("passport-login-container")[0];
//     if(element!=undefined)
// element.remove(); 
  
// }, 500);
    });
  }



