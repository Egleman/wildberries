const getGoods = () => {
    const links = document.querySelectorAll('.navigation-link');
    
    

    const getData = () => {
        fetch('https://test-81c4e-default-rtdb.firebaseio.com/db.json').then((res) => res.json()).then((data) => {
        console.log(data);
        const rand = ['Сергей', 'Василий', 'Иван', 'Василий', 'Максим'],
        randomIndex = Math.floor(Math.random() * 5);
        localStorage.setItem(rand[randomIndex], JSON.stringify(data));
    })
    }

    links.forEach((link)=> {
        link.addEventListener('click', (e)=> {
            e.preventDefault();
            getData();
        })
    })
    localStorage.setItem('goods', JSON.stringify([1, 2, 3, 4, 5]));
    const goods = JSON.parse(localStorage.getItem('goods'));
    console.log(goods);
    
}

getGoods();