loadContent();

function loadContent() {
    const title_text = $("title").text();
    const year = title_text.substring(title_text.length-4, title_text.length)

    const req = new XMLHttpRequest();
    req.open("GET", '../scripts/image-info.json', true);
    req.send();
    req.onload = parseImageInfo;

    function parseImageInfo() {
        const data = JSON.parse(req.responseText);
        for(const d of data) {
            if(d.year == year && d.include){
              let gridOrder = (d.type == "exhibition" ? 1 : 2);
              let newGridItem = `
              <div class="grid-item" style="order: ${gridOrder};">
                <a href="../images/${d.year}/fullsize/${d.filename}" data-lightbox="${d.year}" data-title="${d.alt_text}" data-alt="${d.alt_text}">
                  <img src="../images/${d.year}/thumbs/${d.filename}" alt="${d.alt_text}" class="grid-img">
                </a>
              </div>`
              $('#grid-container').append(newGridItem);
            }
        }
    }
}