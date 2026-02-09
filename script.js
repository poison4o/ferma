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
    'about.text2': 'Всяка седмица посещаваме партньорските стопанства, проследяваме процесите и подбираме продукти, които носят истински вкус и пълна прозрачност.',
    'shop.title': 'Магазин',
    'shop.intro': '12 внимателно подбрани био продукта.',
    'shop.details': 'От сушени плодове и ядки до студено пресовани масла и супер храни – всеки артикул е подбран за балансиран и активен начин на живот.',
    'delivery.title': 'Условия за доставка',
    'delivery.details': 'Подготвяме всяка поръчка ръчно и я изпращаме в термо защитени еко опаковки, за да запазим свежестта на продуктите до вашата врата.',
    'delivery.item1': 'Доставка до 24 часа за София и до 48 часа за страната.',
    'delivery.item2': 'Безплатна доставка за поръчки над 80 лв.',
    'delivery.item3': 'Еко опаковки и възможност за безконтактно получаване.',
    'contact.title': 'Контакти',
    'contact.details': 'Нашият екип е на разположение всеки делничен ден между 9:00 и 18:00, за да помогне с избор на продукти, поръчки и персонални препоръки.',
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
    'about.text2': 'Every week we visit partner farms, monitor production practices, and curate products that deliver authentic taste with full transparency.',
    'shop.title': 'Shop',
    'shop.intro': '12 carefully selected organic products.',
    'shop.details': 'From dried fruits and nuts to cold-pressed oils and superfoods, every item is selected to support a balanced and active lifestyle.',
    'delivery.title': 'Delivery terms',
    'delivery.details': 'Each order is hand-packed and shipped in insulated eco packaging to keep every product fresh all the way to your doorstep.',
    'delivery.item1': 'Delivery within 24h in Sofia and up to 48h nationwide.',
    'delivery.item2': 'Free delivery for orders over 80 BGN.',
    'delivery.item3': 'Eco packaging and contactless delivery available.',
    'contact.title': 'Contact',
    'contact.details': 'Our team is available every weekday from 9:00 to 18:00 to help with product choices, orders, and personal recommendations.',
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
    'about.text2': 'Каждую неделю мы посещаем партнерские фермы, отслеживаем процессы и отбираем продукты с настоящим вкусом и полной прозрачностью происхождения.',
    'shop.title': 'Магазин',
    'shop.intro': '12 тщательно отобранных био продуктов.',
    'shop.details': 'От сухофруктов и орехов до масел холодного отжима и суперфудов — каждый товар подобран для сбалансированного и активного образа жизни.',
    'delivery.title': 'Условия доставки',
    'delivery.details': 'Каждый заказ мы собираем вручную и отправляем в термозащитной эко-упаковке, чтобы сохранить свежесть продуктов до вашей двери.',
    'delivery.item1': 'Доставка за 24 часа по Софии и до 48 часов по стране.',
    'delivery.item2': 'Бесплатная доставка при заказе от 80 лв.',
    'delivery.item3': 'Эко-упаковка и бесконтактная доставка.',
    'contact.title': 'Контакты',
    'contact.details': 'Наша команда на связи каждый будний день с 9:00 до 18:00 и поможет с выбором продуктов, заказами и персональными рекомендациями.',
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
