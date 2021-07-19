// -------------------------------------------------------------------------------------
// 5. Global Object

console.log('5. Global Object');

console.log('Root Level:', this);

function breath() {
    console.log('Root Level Inside Function:', this);
}

breath();
