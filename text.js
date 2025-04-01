document.addEventListener("DOMContentLoaded", function () {
    let textArea = document.querySelector(".area");
    let countDisplay = document.querySelector(".countw");
    function count(){
    let chc=textArea.value;
    if(!chc){
        countDisplay.style.visibility="hidden";
    }
    let words = chc.length === 0 ? 0 : chc.split(/\s+/).length;
    let chwos=chc.replace(/\s/g,"").length;
    let characters=chc.length;
    countDisplay.innerHTML=`<span style="font-weight:bold; font-size:20px">Words:${words}</span> <br><span style="font-weight:bold;font-size:20px">Characters:${characters}</span><br><span style="font-weight:bold;font-size:20px"> Chars (without spaces):${chwos}</span`;
    countDisplay.style.visibility="visible";
}
textArea.addEventListener("input", count)

});
