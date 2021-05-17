const currentArtist = $("title").text();
let currentURL = window.location.href.split("/");
let currentFolder = currentURL[currentURL.length-2];
const currentStudent = currentFolder.split("-")[0];

console.log(currentStudent);

// let artistFolders = [
//   {test: "test-student",
//   {alyssa: "alyssa-cheng"},
//   {ben: "ben-glass"},
//   {boomer: "boomer-scripps"},
//   {daniella: "daniella-thach"},
//   {henry: "henry-boeschenstein"},
//   {jieun: "jieun-hong"},
//   {keming: "keming-li"},
//   {kio: "kio-zhu"},
//   {li: "lio-zhu"},
//   {max: "max-weiss"},
//   {sean: "sean-cheng"},
//   {victoria: "victoria-yang"}
// ]

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
  "lio-zhu",
  "max-weiss",
  "sean-cheng",
  "victoria-yang"
]

let URLs = `<a href=".." class="topnav__dropdown-menu-item">Home</a>`;

for(a of artistFolders) {
  let tempURL = ``;
  if(a == currentFolder) {
    tempURL = `<a href="." class="topnav__dropdown-menu-item current-page">${currentArtist}</a>`
  } else {
    let fullName = a.split("-")[0] + " " + a.split("-")[1];
    tempURL = `<a href="../${a}" class="topnav__dropdown-menu-item">${fullName}</a>`
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


  // <a href="." class="topnav__dropdown-menu-item current-page">Home</a>
  // <a href="." class="topnav__dropdown-menu-item">Alyssa Cheng</a>
  // <a href="." class="topnav__dropdown-menu-item">Ben Glass</a>
  // <a href="." class="topnav__dropdown-menu-item">Boomer Scripps</a>
  // <a href="." class="topnav__dropdown-menu-item" style="display: none;">Christie Kim</a>
  // <a href="." class="topnav__dropdown-menu-item">Daniella Thach</a>
  // <a href="." class="topnav__dropdown-menu-item">Henry Boeschenstein</a>
  // <a href="." class="topnav__dropdown-menu-item">Jieun Hong</a>
  // <a href="." class="topnav__dropdown-menu-item">Keming Li</a>
  // <a href="." class="topnav__dropdown-menu-item">Kio Zhu</a>
  // <a href="." class="topnav__dropdown-menu-item">Li Zhu</a>
  // <a href="." class="topnav__dropdown-menu-item">Max Weiss</a>
  // <a href="." class="topnav__dropdown-menu-item">Sean Cheng</a>
  // <a href="." class="topnav__dropdown-menu-item">Victoria Yang</a>