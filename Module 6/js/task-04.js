// Створити картку товару з об'єкта,
// Запушити її в container.
// оформити мінімально

const product = {
  shortName: "Сардельки «Алан»",
  price: 200,
  img: {
    url: "https://content.silpo.ua/sku/ecommerce/7/545x440wwm/72620_545x440wwm_f865a87e-2cfd-cd86-37ea-15160792313c.png",
    alt: "food",
  },
};


function createCard(object) {
  const card = document.querySelector('.container');
  card.style.display = 'inline-block';
  card.style.textAlign = 'center';
  card.style.border = '4mm ridge rgba(211, 220, 50, .6)';

  const { shortName, price, img: { url, alt }} = object;
  
  card.insertAdjacentHTML('beforeend', `
      <div>
        <img src="${url}" alt="${alt}"/>
        <h2>${shortName}</h2>
        <p>${price} грн/кг</p>
      </div>
  `);
};

createCard(product);