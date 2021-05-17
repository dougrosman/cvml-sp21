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
              let artistHTML = `<h1 class="artist">${ARTIST}</h1>`
              $('#artist-container').append(artistHTML);

              ///// SOCIALS /////
              let socialsHTML = `<div class="socials">`

              if(d.instagram) {
                const INSTAGRAM_URL = d.instagram;
                let instagramSplit = INSTAGRAM_URL.split("/");
                const INSTAGRAM_HANDLE = instagramSplit[instagramSplit.length-1];
                let instagramHTML = `<a href="${INSTAGRAM_URL}" target="_blank" class="instagram">@${INSTAGRAM_HANDLE}</a>`
                socialsHTML+=instagramHTML;
              }
              
              if(d.vimeo) {
                const VIMEO_URL = d.vimeo;
                let vimeoSplit = VIMEO_URL.split("/");
                const VIMEO_HANDLE = vimeoSplit[vimeoSplit.lengt-1];
                let vimeoHTML = `<a href="${VIMEO_URL}" target="_blank" class="vimeo">${VIMEO_HANDLE}</a>`
                socialsHTML+=vimeoHTML;
              }
              
              if(d.website) {
                let WEBSITE_URL = d.website;
                let websiteSplit = WEBSITE_URL.split("/");
                const WEBSITE_URL_SHORT = websiteSplit[websiteSplit.length-1];
                let websiteHTML = `<a href="${WEBSITE_URL}" target="_blank" class="website">${WEBSITE_URL_SHORT}</a>`
                socialsHTML+=websiteHTML;
              }
              socialsHTML+=`</div>`;
              
              if(socialsHTML.length > 27) {
                $('#artist-container').append(socialsHTML);
              }

              const TITLE = d.title;
              const YEAR = d.year;
              let titleHTML = `<h2 class="title">${TITLE}</h2>`
              let yearHTML = `<p class="year">${YEAR}</p>`
              $('#artist-container').append(titleHTML, yearHTML);

              if(d.materials) {
                const MATERIALS = d.materials;
                let materialsHTML = `<p class="materials">${MATERIALS}</p>`
                $('#artist-container').append(materialsHTML);
              }

              if(d.medium) {
                const MEDIUM = d.medium;
                let mediumHTML = `<p class="medium">${MEDIUM}</p>`
                $('#artist-container').append(mediumHTML);
              }

              if(d.statement) {
                const STATEMENT = d.statement;
                let statementHTML = `<p class="statement">${STATEMENT}</p>`
                $('#artist-container').append(statementHTML);
              }

              const MEDIA = d.media;
              addMedia(MEDIA, ARTIST);

              if(d.description) {
                const DESCRIPTION = d.description;
                let descriptionHTML = `<h3 class="description-label">Technical Description:</h3><p class="description">${DESCRIPTION}</p>`
                $('#artist-container').append(descriptionHTML);
              }

              if(d.credit) {
                const CREDIT = d.credit;
                let creditHTML = `<h3 class="credit-label">Credit:</h3><p class="credit">${CREDIT}</p>`
                $('#artist-container').append(creditHTML);
              }              
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