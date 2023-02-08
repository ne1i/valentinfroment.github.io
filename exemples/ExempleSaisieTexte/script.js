function changementdestyle() {
 
    var baliseLink = document.getElementById("linkcss");
    var etat = baliseLink.href.endsWith("style1.css");
 
    if (etat == true) {
        baliseLink.setAttribute("href", "style2.css");
        buttonChangeStyle.textContent = "style2.css"
    } else {
        baliseLink.setAttribute("href", "style1.css");
        buttonChangeStyle.textContent = "style1.css"
    }
}