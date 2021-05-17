const currentArtist = $("title").text();
let currentURL = window.location.href.split("/");
let currentFolder = currentURL[currentURL.length-2];

let artistFolders = [
  "test-student",
  "alyssa-cheng",
  "ben-glass",
  "boomer-scripps",
  "daniella-thach",
  "henry-boeschenstein",
  "jieun-hong",
  "keming-li",
  "kio-zhu",
  "li-zhu",
  "max-weiss",
  "sean-cheng",
  "victoria-yang"
]


let directory = "";
if(currentArtist == "CVML SP21 Finals") {
  directory = "."
} else {
  directory = ".."
}
let URLs = `<a href="${directory}" class="topnav__dropdown-menu-item">Home</a>`;


for(a of artistFolders) {
  let tempURL = ``;
  if(a == currentFolder) {
    tempURL = `<a href="." class="topnav__dropdown-menu-item current-page">${currentArtist}</a>`
  } else {
    let fullName = a.split("-")[0] + " " + a.split("-")[1];
    tempURL = `<a href="${directory}/${a}" class="topnav__dropdown-menu-item">${fullName}</a>`
  }
  URLs+=tempURL;
}


let containerTopnav = 
` <header class="topnav">
    <div class="topnav__left">
      <a href=".." class="topnav__left-site-title">
          <span class="site-title__title">Intro to Computer Vision and Machine Learning</span>
          <span class="site-title__semester">Spring 2021 | Art and Technology Studies, SAIC</span>
      </a>
    </div>
    <div class="topnav__right">
      <button type="button" value="main menu" class="topnav__right-hamburger">
        <span class="hamburger-text">Main Menu</span>
        <span class="topnav__right-hamburger-patty"></span>
      </button>
    </div>
  </header>
  <div class="topnav__dropdown-menu-container">
    <nav class="topnav__dropdown-menu">
      ${URLs}
    </nav>
  </div>
`

$('.container-topnav').append(containerTopnav);