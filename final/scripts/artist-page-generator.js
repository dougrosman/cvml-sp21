loadContent();

function loadContent() {
    
    const artist = $("title").text();
    // const year = title_text.substring(title_text.length-4, title_text.length)

    const req = new XMLHttpRequest();
    req.open("GET", '../scripts/artist-info.json', true);
    req.send();
    req.onload = parseImageInfo;

    function parseImageInfo() {
        const data = JSON.parse(req.responseText);
        for(const d of data) {
            if(d.artist == artist && d.include){
              
              const ARTIST = d.artist;
              const INSTAGRAM = d.instagram;
              let instagramSplit = INSTAGRAM.split("/");
              const INSTAGRAM_HANDLE = instagramSplit[instagramSplit.length-1];
              const WEBSITE = d.website;
              let websiteSplit = WEBSITE.split("/");
              const WEBSITE_URL_SHORT = websiteSplit[websiteSplit.length-1];
              const STATEMENT = d.statement;
              const DESCRIPTION = d.description;
              const CREDIT = d.credit;
              const MEDIA = d.media;

              let artistHTML = `<h1 class="artist">${ARTIST}</h1>`
              let instagramHTML = `<a href="${INSTAGRAM}" target="_blank" class="instagram">@${INSTAGRAM_HANDLE}</a>`
              let websiteHTML = `<a href="${WEBSITE}" target="_blank" class="website">${WEBSITE_URL_SHORT}</a>`
              let socialsHTML = `<div class="socials">${instagramHTML}${websiteHTML}</div>`
              let statementHTML = `<p class="statement">${STATEMENT}</p>`;
              let descriptionHTML = `<p class="description">${DESCRIPTION}</p>`;
              let creditHTML = `<p class="credit">${CREDIT}</p>`;

              $('#artist-container').append(artistHTML, socialsHTML);
              addMedia(MEDIA, ARTIST);
              $('#artist-container').append(statementHTML, descriptionHTML, creditHTML);
            }
        }
    }
}

function addMedia(media, artist) {
  for(m of media) {
    let ext = m.split(".");
    ext = ext[ext.length-1];

    let mediaHTML;

    if(ext == "mp4") {
      mediaHTML = `<video src="media/${m}" class="video" autoplay muted controls loop></video>`
    } else {
      mediaHTML = `<img src="media/${m}" alt-text="${artist} img ${m}" class="img">`
    }
    $('#artist-container').append(mediaHTML);
  }
}