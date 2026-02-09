const products = [
  { key: 'p1', price: '8.90 лв' },
  { key: 'p2', price: '7.40 лв' },
  { key: 'p3', price: '5.60 лв' },
  { key: 'p4', price: '10.20 лв' },
  { key: 'p5', price: '6.50 лв' },
  { key: 'p6', price: '9.30 лв' },
  { key: 'p7', price: '11.90 лв' },
  { key: 'p8', price: '4.80 лв' },
  { key: 'p9', price: '3.90 лв' },
  { key: 'p10', price: '12.60 лв' },
  { key: 'p11', price: '13.10 лв' },
  { key: 'p12', price: '7.90 лв' },
];

const i18n = {
  bg: {
    'nav.home': 'Начало',
    'nav.about': 'За нас',
    'nav.shop': 'Магазин',
    'nav.delivery': 'Условия за доставка',
    'nav.contact': 'Контакти',
    'hero.kicker': '100% био продукти',
    'hero.title': 'Минималистична грижа за теб и природата.',
    'hero.desc': 'Открий селекция от био храни с ясен произход, сезонни предложения и устойчиви практики.',
    'hero.cta': 'Разгледай магазина',
    'about.title': 'За нас',
    'about.text': 'Ние сме екип от хора, които вярват, че чистата храна е най-добрата инвестиция. Работим с малки ферми, без компромис с качеството и без излишни добавки.',
    'shop.title': 'Магазин',
    'shop.intro': '12 внимателно подбрани био продукта.',
    'delivery.title': 'Условия за доставка',
    'delivery.item1': 'Доставка до 24 часа за София и до 48 часа за страната.',
    'delivery.item2': 'Безплатна доставка за поръчки над 80 лв.',
    'delivery.item3': 'Еко опаковки и възможност за безконтактно получаване.',
    'contact.title': 'Контакти',
    'contact.address': 'гр. София, ул. „Зелена храна“ 12',
    'contact.phone': 'Телефон: +359 888 123 456',
    'contact.email': 'Имейл: hello@biofood.bg',
    footer: '© 2026 Bio Food. Всички права запазени.',
    productNames: [
      'Био мед акация',
      'Бадемово мляко',
      'Киноа микс',
      'Студено пресован зехтин',
      'Чиа семена',
      'Кокосова захар',
      'Матча чай',
      'Ябълков оцет',
      'Леща био',
      'Кашу сурово',
      'Тахан сусамов',
      'Овесени ядки'
    ]
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About us',
    'nav.shop': 'Shop',
    'nav.delivery': 'Delivery terms',
    'nav.contact': 'Contact',
    'hero.kicker': '100% organic products',
    'hero.title': 'Minimalist care for you and nature.',
    'hero.desc': 'Discover a curated selection of organic foods with transparent origin, seasonal picks, and sustainable practices.',
    'hero.cta': 'Explore the shop',
    'about.title': 'About us',
    'about.text': 'We are a team that believes clean food is the best investment. We work with small farms and never compromise on quality.',
    'shop.title': 'Shop',
    'shop.intro': '12 carefully selected organic products.',
    'delivery.title': 'Delivery terms',
    'delivery.item1': 'Delivery within 24h in Sofia and up to 48h nationwide.',
    'delivery.item2': 'Free delivery for orders over 80 BGN.',
    'delivery.item3': 'Eco packaging and contactless delivery available.',
    'contact.title': 'Contact',
    'contact.address': 'Sofia, 12 Green Food Str.',
    'contact.phone': 'Phone: +359 888 123 456',
    'contact.email': 'Email: hello@biofood.bg',
    footer: '© 2026 Bio Food. All rights reserved.',
    productNames: [
      'Organic Acacia Honey',
      'Almond Milk',
      'Quinoa Mix',
      'Cold Pressed Olive Oil',
      'Chia Seeds',
      'Coconut Sugar',
      'Matcha Tea',
      'Apple Cider Vinegar',
      'Organic Lentils',
      'Raw Cashews',
      'Sesame Tahini',
      'Oat Flakes'
    ]
  },
  ru: {
    'nav.home': 'Главная',
    'nav.about': 'О нас',
    'nav.shop': 'Магазин',
    'nav.delivery': 'Условия доставки',
    'nav.contact': 'Контакты',
    'hero.kicker': '100% био продукты',
    'hero.title': 'Минималистичный подход к вам и природе.',
    'hero.desc': 'Откройте подборку органических продуктов с прозрачным происхождением, сезонными предложениями и устойчивыми практиками.',
    'hero.cta': 'Перейти в магазин',
    'about.title': 'О нас',
    'about.text': 'Мы команда людей, которые верят, что чистая еда — лучшая инвестиция. Работаем с небольшими фермами без компромиссов по качеству.',
    'shop.title': 'Магазин',
    'shop.intro': '12 тщательно отобранных био продуктов.',
    'delivery.title': 'Условия доставки',
    'delivery.item1': 'Доставка за 24 часа по Софии и до 48 часов по стране.',
    'delivery.item2': 'Бесплатная доставка при заказе от 80 лв.',
    'delivery.item3': 'Эко-упаковка и бесконтактная доставка.',
    'contact.title': 'Контакты',
    'contact.address': 'г. София, ул. «Зелена храна» 12',
    'contact.phone': 'Телефон: +359 888 123 456',
    'contact.email': 'Email: hello@biofood.bg',
    footer: '© 2026 Bio Food. Все права защищены.',
    productNames: [
      'Био акациевый мед',
      'Миндальное молоко',
      'Смесь киноа',
      'Оливковое масло холодного отжима',
      'Семена чиа',
      'Кокосовый сахар',
      'Чай матча',
      'Яблочный уксус',
      'Био чечевица',
      'Сырой кешью',
      'Кунжутная тахини',
      'Овсяные хлопья'
    ]
  }
};

function renderProducts(lang) {
  const grid = document.getElementById('productGrid');
  const names = i18n[lang].productNames;
  grid.innerHTML = products
    .map(
      (product, index) => `
      <article class="product-card">
        <h3>${names[index]}</h3>
        <p>${i18n[lang]['shop.intro']}</p>
        <div class="price">${product.price}</div>
      </article>`
    )
    .join('');
}

function setLanguage(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach((node) => {
    const key = node.dataset.i18n;
    if (i18n[lang][key]) {
      node.textContent = i18n[lang][key];
    }
  });

  document.querySelectorAll('.lang-switch button').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  renderProducts(lang);
}

document.querySelectorAll('.lang-switch button').forEach((button) => {
  button.addEventListener('click', () => setLanguage(button.dataset.lang));
});

setLanguage('bg');
