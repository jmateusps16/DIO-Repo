//resolução com o try/catch
/* const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const catBtn = document.getElementById('change-cat');

const getCat = async () => {
    try {
        const data = await fetch(BASE_URL);
        const json = await data.json();
        return json.webpurl;
    } catch (e) {
        console.log(e.message);
    }
};

const loadImg = async () => {
    const catImg = document.getElementById('cat');
    catImg.src = await getCat();
}

catBtn.addEventListener('click', loadImg);

loadImg(); */

//resolução com o then/catch
const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const catBtn = document.getElementById('change-cat');

const getCat = async () => {
    const data = await fetch(BASE_URL)
    .then((res) => res.json())
    .catch((e) => console.log(e));

    return data.webpurl;
}

const loadImg = async () => {
    const catImg = document.getElementById('cat');
    catImg.src = await getCat();
};

catBtn.addEventListener('click', loadImg);

loadImg();