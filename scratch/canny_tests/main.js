const NUM_IMAGES = 50;
let HEADERS = ['source','25-150', '25-200', '25-300', '50-150', '50-200', '50-300', '100-150', '100-200', '100-300'];
const NUM_TESTS = HEADERS.length-1;
let entry = ``;


for(let i = 0; i < NUM_TESTS; i++) {
    let newColumn = `<div class="column">
                        <h3 class="column__header">${HEADERS[i]}</h3>
                     </div>`
    $('.container').append(newColumn);
    for(let j = 0; j < NUM_IMAGES; j++) {
        let counter = (100 + j + 1) + '';
        let counterString = counter.slice(1);
        let tempEntry = `<img src="./images/${HEADERS[i]}/better-hands_00${counterString}.PNG" alt="canny-hand" class="sample">`
        $('.column:last-child').append(tempEntry);
    }
}
