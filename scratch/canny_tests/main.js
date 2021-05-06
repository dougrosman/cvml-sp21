const NUM_IMAGES = 25;
let HEADERS = ['source','c50_100', 'c50_150', 'c50_200', 'c75_150', 'c75_200', 'c75_250', 'c100_150', 'c100_200', 'c100_250', 'c100_300'];
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
        let tempEntry = `<img src="./images/${HEADERS[i]}/better-hands_00${counterString}.png" alt="canny-hand" class="sample">`
        $('.column:last-child').append(tempEntry);
    }
}
