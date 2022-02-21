function getImage() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => todo(data))
}
function todo(apiData) {
    const imgParent = document.getElementById('images');
    apiData.forEach(e => {
        const img = document.createElement('img');
        img.src = `${e.thumbnailUrl}`;
        imgParent.appendChild(img)
    });
}