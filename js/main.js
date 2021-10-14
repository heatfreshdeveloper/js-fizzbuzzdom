const containerRow = document.querySelector(".row");

for (let i = 1; i <= 100; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
        containerRow.innerHTML += `<div class="col">
                                        <div class="ratio ratio-1x1 box box--fizzbuzz"></div>
                                    </div>`;
    } else if (i % 3 === 0) {
        containerRow.innerHTML += `<div class="col">
                                        <div class="ratio ratio-1x1 box box--fizz"></div>
                                    </div>`;
    } else if (i % 5 === 0) {
        containerRow.innerHTML += `<div class="col">
                                        <div class="ratio ratio-1x1 box box--buzz"></div>
                                    </div>`;
    } else {
        containerRow.innerHTML += `<div class="col">
                                        <div class="ratio ratio-1x1 box"></div>
                                    </div>`;
    }
}