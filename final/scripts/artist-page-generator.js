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
              let artistClass = ARTIST.split(" ");
              artistClass = artistClass[0] + "-" + artistClass[1];
              $('.content-container').addClass(`${artistClass}`);
              let artistHTML = `<h1 class="artist">${ARTIST}</h1>`
              $('.content-container').append(artistHTML);

              ///// SOCIALS /////
              let socialsHTML = `<div class="socials">`
              
              if(d.instagram) {
                const INSTAGRAM_URL = d.instagram;
                let instagramSplit = INSTAGRAM_URL.split("/");
                const INSTAGRAM_HANDLE = instagramSplit[instagramSplit.length-2];
                let instagramHTML = `<a href="${INSTAGRAM_URL}" target="_blank" class="instagram">@${INSTAGRAM_HANDLE}</a>`
                socialsHTML+=instagramHTML;
              }
              
              if(d.vimeo) {
                const VIMEO_URL = d.vimeo;
                let vimeoSplit = VIMEO_URL.split("/");
                const VIMEO_HANDLE = vimeoSplit[vimeoSplit.length-2];
                let vimeoHTML = `<a href="${VIMEO_URL}" target="_blank" class="vimeo">${VIMEO_HANDLE}</a>`
                socialsHTML+=vimeoHTML;
              }
              
              if(d.website) {
                const WEBSITE_URL = d.website;
                let websiteSplit = WEBSITE_URL.split("/");
                let shortURL = ""
                for(let i = 2; i < websiteSplit.length-1; i++) {
                  shortURL+=websiteSplit[i]
                  if(i < websiteSplit.length-2) {
                    shortURL+="/";
                  }
                }
                const WEBSITE_URL_SHORT = shortURL;
                console.log(WEBSITE_URL)
                let websiteHTML = `<a href="${WEBSITE_URL}" target="_blank" class="website">${WEBSITE_URL_SHORT}</a>`
                socialsHTML+=websiteHTML;
              }
              
              if(socialsHTML.length > 27) {
                $('.content-container').append(socialsHTML);
              }

              const TITLE = d.title;
              const YEAR = d.year;
              let titleHTML = `<h2 class="title">${TITLE}</h2>`
              let yearHTML = `<p class="year">${YEAR}</p>`
              $('.content-container').append(titleHTML, yearHTML);

              if(d.medium) {
                const MEDIUM = d.medium;
                let mediumHTML = `<p class="medium">${MEDIUM}</p>`
                $('.content-container').append(mediumHTML);
              }

              if(d.materials) {
                const MATERIALS = d.materials;
                let materialsHTML = `<p class="materials">${MATERIALS}</p>`
                $('.content-container').append(materialsHTML);
              }              

              if(d.statement) {
                const STATEMENT = d.statement;
                let statementHTML = `<p class="statement">${STATEMENT}</p>`
                $('.content-container').append(statementHTML);
              }

              if(d.preContent) {
                const PRECONTENT = d.preContent;
                let preContentHTML = `<div class="pre-content">${PRECONTENT}</div>`
                $('.content-container').append(preContentHTML);
              }

              if(d.warning) {
                const WARNING = d.warning;
                let warningHTML = `<p class="warning"><span class="warning-label">Warning:</span> ${WARNING}</p>`
                $('.content-container').append(warningHTML);
              }
              
              const MEDIA = d.media;
              let captions = "";
              if(d.captions) {
                captions = d.captions;
              }
              addMedia(MEDIA, captions, ARTIST);

              if(d.postContent) {
                const POSTCONTENT = d.postContent;
                let postContentHTML = `<div class="post-content">${POSTCONTENT}</div>`
                $('.content-container').append(postContentHTML);
              }

              if(d.description) {
                const DESCRIPTION = d.description;
                let descriptionHTML = `<h3 class="description-label">Technical Description:</h3><p class="description">${DESCRIPTION}</p>`
                $('.content-container').append(descriptionHTML);
              }

              if(d.credit) {
                const CREDIT = d.credit;
                let creditHTML = `<h3 class="credit-label">Credits:</h3><p class="credit">${CREDIT}</p>`
                $('.content-container').append(creditHTML);
              }            
            }
        }
    }
}

function addMedia(media, captions, artist) {
  for(let i = 0; i < media.length; i++) {
    let ext = media[i].split(".");
    ext = ext[ext.length-1];

    let mediaHTML;

    if(captions.length > 0) {
      if(ext == "mp4") {
        mediaHTML = `<video src="media/${media[i]}" class="video" controls loop></video><p class="caption">${captions[i]}</p>`
      } else {
        mediaHTML = `<a href="media/${media[i]}"><img src="media/${media[i]}" alt-text="${artist} img ${media[i]}" class="img"></a><p class="caption">${captions[i]}</p>`
      }
    } else {
      if(ext == "mp4") {
        mediaHTML = `<video src="media/${media[i]}" class="video" controls loop></video>`
      } else {
        mediaHTML = `<a href="media/${media[i]}" target="_blank"><img src="media/${media[i]}" alt-text="${artist} img ${media[i]}" class="img"></a>`
      }
    }

   
    $('.content-container').append(mediaHTML);
  }
}