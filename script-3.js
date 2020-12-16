function getImages(form, page = 1) {
    const query = form.query.value.replaceAll(' ', '+');
    const api = `https://pixabay.com/api/?key=19382229-224c5a6d041d5555ed1cad525&q=${query}&page=${page}&image_type=photo`;

    fetch(api)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            createPhotoCards(data.hits, page);
        })
}

function createPhotoCards(photos, page) {
    const listEl = document.getElementById('photocards-list');

    if (page === 1) {
        listEl.innerHTML = '';
    }
    
    photos.forEach(({largeImageURL, webformatURL, tags}, index) => {
        const listItemEl = document.createElement('li');
        const linkEl = document.createElement('a');

        linkEl.setAttribute('href', `${largeImageURL}`);

        const imgEl = document.createElement('img');
        
        if (index === photos.length - 1) {
            imgEl.onload = () => {
                initializeObserver(page);
            }
        }
        
        imgEl.setAttribute('src', `${webformatURL}`);
        imgEl.setAttribute('data-source', `${largeImageURL}`);
        imgEl.setAttribute('alt', `${tags} photo`);

        linkEl.appendChild(imgEl);
        listItemEl.appendChild(linkEl);
        listEl.appendChild(listItemEl);
    })
}


function initializeObserver(page) {
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 1
    }

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                 ++page;

                const form = document.querySelector('form');
                getImages(form, page);

                observer.unobserve(entry.target);
            }
        })
    }, options)

    const listEl = document.querySelector('ul');
    observer.observe(listEl.lastChild);
}

const listEl = document.getElementById('photocards-list');

listEl.onclick = (e) => {
    e.preventDefault();
    if (e.target.tagName !== 'IMG') return;

    const instance = basicLightbox.create(`
        <img src="${e.target.dataset.source}" alt="${e.target.alt}">
    `);

    instance.show();
}