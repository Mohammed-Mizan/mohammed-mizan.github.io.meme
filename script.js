// Define a class for the cool cat
class CoolCat {
    constructor(imageElement) {
        this.imageElement = imageElement;
        this.shadesOn = false;
    }

    putOnShades() {
        this.imageElement.src = 'cool_cat_with_shades.png';
        this.shadesOn = true;
    }

    takeOffShades() {
        this.imageElement.src = 'cat.png';
        this.shadesOn = false;
    }
}

// Function to handle button click
function handleSikeButtonClick() {
    if (coolCat.shadesOn) {
        coolCat.takeOffShades();
        document.getElementById('meme-text').innerText = 'SIKE';
    } else {
        coolCat.putOnShades();
        document.getElementById('meme-text').innerText = 'YEAH!';
    }
}

// Initialize CoolCat
const coolCat = new CoolCat(document.getElementById('cat-image'));

// Add event listener for the button
document.getElementById('sike-button').addEventListener('click', handleSikeButtonClick);

