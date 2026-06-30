const root = document.documentElement;
const savedTheme = localStorage.getItem('moonvpn-theme');
if (savedTheme) root.setAttribute('data-theme', savedTheme);

const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.querySelector('.theme-icon');
function syncThemeIcon() {
  if (!themeIcon) return;
  themeIcon.textContent = root.getAttribute('data-theme') === 'light' ? '☀️' : '🌙';
}
syncThemeIcon();
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    root.setAttribute('data-theme', next);
    localStorage.setItem('moonvpn-theme', next);
    syncThemeIcon();
  });
}

const stars = document.getElementById('stars');
if (stars) {
  const count = window.innerWidth < 720 ? 75 : 120;
  for (let i = 0; i < count; i++) {
    const s = document.createElement('span');
    s.className = 'star';
    s.style.left = Math.random() * 100 + '%';
    s.style.top = Math.random() * 100 + '%';
    s.style.animationDelay = Math.random() * 3 + 's';
    s.style.animationDuration = 2 + Math.random() * 3 + 's';
    stars.appendChild(s);
  }
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

if (!window.matchMedia('(max-width: 760px)').matches) {
  document.querySelectorAll('.magnetic').forEach((btn) => {
    btn.addEventListener('mousemove', (e) => {
      const r = btn.getBoundingClientRect();
      btn.style.transform = `translate(${(e.clientX - r.left - r.width / 2) / 10}px, ${(e.clientY - r.top - r.height / 2) / 10}px)`;
    });
    btn.addEventListener('mouseleave', () => btn.style.transform = 'translate(0,0)');
  });

  document.querySelectorAll('.tilt').forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `perspective(900px) rotateY(${x * 7}deg) rotateX(${-y * 7}deg) translateY(-8px)`;
    });
    card.addEventListener('mouseleave', () => card.style.transform = '');
  });
}

const meteorLayer = document.getElementById('meteorLayer');
function createMeteor() {
  if (!meteorLayer) return;
  const meteor = document.createElement('span');
  meteor.className = 'meteor';
  meteor.style.left = (65 + Math.random() * 30) + 'vw';
  meteor.style.top = (4 + Math.random() * 42) + 'vh';
  meteor.style.animationDuration = (1.05 + Math.random() * 0.65).toFixed(2) + 's';
  meteorLayer.appendChild(meteor);
  setTimeout(() => meteor.remove(), 2200);
}
if (meteorLayer && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  setTimeout(createMeteor, 900);
  setInterval(createMeteor, 5000);
}

const ruToEn = {
  "Тарифы": "Plans",
  "Преимущества": "Benefits",
  "Поддержка": "Support",
  "Telegram Bot": "Telegram Bot",
  "FAQ": "FAQ",
  "Privacy": "Privacy",
  "Terms": "Terms",
  "Политика": "Privacy",
  "Условия": "Terms",

  "Legal": "Legal",
  "Help Center": "Help Center",
  "Public Offer": "Public Offer",
  "🚀 Получить VPN": "🚀 Get VPN",
  "Получить VPN": "Get VPN",
  "🚀 Подключиться": "🚀 Connect",
  "💎 Посмотреть тарифы": "💎 View plans",
  "🚀 Открыть Telegram-бота": "🚀 Open Telegram bot",
  "💬 Написать": "💬 Message",
  "🛒 Купить": "🛒 Buy",
  "🔥 Купить": "🔥 Buy",
  "Подключено": "Connected",
  "Назад на главную": "Back to home",
  "Главная": "Home",
  "Политика конфиденциальности": "Privacy Policy",
  "Условия использования": "Terms of Service",
  "Публичная оферта": "Public Offer",
  "Политика конфиденциальности Moon VPN.": "Moon VPN Privacy Policy.",
  "Условия использования сервиса Moon VPN.": "Moon VPN Terms of Service.",
  "Публичная оферта и правила покупки подписки Moon VPN.": "Public offer and Moon VPN subscription purchase rules.",
  "Privacy Policy": "Privacy Policy",
  "Terms of Service": "Terms of Service",
  "Secure VPN access": "Secure VPN access",
  "Свободный интернет": "Free internet",
  "на космической скорости": "at cosmic speed",
  "Moon VPN обеспечивает приватное подключение, стабильный доступ к сервисам и простое управление подпиской через Telegram.": "Moon VPN provides a private connection, stable access to services, and simple subscription management through Telegram.",
  "24/7": "24/7",
  "онлайн": "online",
  "1 мин": "1 min",
  "подключение": "setup",
  "RU/EN": "RU/EN",
  "интерфейс": "interface",
  "Moon VPN Active": "Moon VPN Active",
  "Protected connection": "Protected connection",
  "Download": "Download",
  "Private Mode": "Private Mode",
  "Почему Moon VPN": "Why Moon VPN",
  "Премиальный VPN-сервис для ежедневного использования": "A premium VPN service for everyday use",
  "Быстрый старт": "Fast start",
  "Оплата, выдача подписки и ссылка на конфигурацию прямо в Telegram-боте.": "Payment, subscription activation, and configuration link are available directly in the Telegram bot.",
  "Защита соединения": "Connection protection",
  "Безопасный доступ к интернету через персональную VPN-конфигурацию.": "Secure internet access through a personal VPN configuration.",
  "Для разных устройств": "For multiple devices",
  "Подходит для телефона, ПК и других устройств через популярные VPN-клиенты.": "Works on phones, PCs, and other devices through popular VPN clients.",
  "Промокоды и новости": "Promocodes and news",
  "Актуальные обновления, предложения и важные уведомления доступны в официальном канале Moon VPN.": "Latest updates, offers, and important announcements are available in the official Moon VPN channel.",
  "Выберите подходящий период доступа": "Choose the right access period",
  "1 месяц": "1 month",
  "3 месяца": "3 months",
  "6 месяцев": "6 months",
  "12 месяцев": "12 months",
  "Для теста и быстрого старта.": "For testing and a quick start.",
  "Оптимальный вариант по цене.": "Best price-to-period option.",
  "Для стабильного использования.": "For stable everyday use.",
  "Максимальная выгода на год.": "Maximum value for a full year.",
  "Best value": "Best value",
  "Всё управление подпиской в пару кликов": "Manage your subscription in a few clicks",
  "Проверяй статус, дни до окончания, трафик, подключенные устройства, рефералов и поддержку прямо в боте.": "Check status, remaining days, traffic, connected devices, referrals, and support directly in the bot.",
  "📊 Моя подписка": "📊 My subscription",
  "👥 Рефералы": "👥 Referrals",
  "💬 Помощь": "💬 Help",
  "Готовы подключиться?": "Ready to connect?",
  "Запустите Moon VPN прямо сейчас": "Start Moon VPN right now",
  "Перейдите в Telegram-бота, выберите тариф и получите доступ автоматически.": "Open the Telegram bot, choose a plan, and get access automatically.",
  "Частые вопросы": "Frequently asked questions",
  "Как подключиться?": "How do I connect?",
  "Открой Telegram-бота, выбери тариф, оплати подписку и следуй инструкции подключения.": "Open the Telegram bot, choose a plan, pay for the subscription, and follow the setup instructions.",
  "Можно использовать на телефоне?": "Can I use it on my phone?",
  "Да, Moon VPN можно использовать на Android и iOS через подходящее приложение-клиент.": "Yes, Moon VPN can be used on Android and iOS through a compatible VPN client app.",
  "Где смотреть статус подписки?": "Where can I check subscription status?",
  "В разделе «Моя подписка» отображается статус, срок действия, трафик и ссылка на конфигурацию.": "The “My subscription” section shows status, expiration date, traffic, and the configuration link.",
  "Что делать, если не работает?": "What should I do if it does not work?",
  "Напиши в поддержку. Мы поможем проверить подписку, конфигурацию и приложение.": "Contact support. We will help check your subscription, configuration, and app.",
  "Поддержка Moon VPN": "Moon VPN Support",
  "Поможем подключиться, проверить подписку и решить проблему с доступом.": "We will help you connect, check your subscription, and solve access issues.",
  "Telegram-бот": "Telegram bot",
  "Покупка, подписка, конфигурация и быстрый доступ к меню.": "Purchase, subscription, configuration, and quick menu access.",
  "🤖 Открыть Telegram-бота →": "🤖 Open Telegram bot →",
  "Администратор": "Administrator",
  "Если нужна ручная помощь или возникла проблема с оплатой.": "For manual help or payment issues.",
  "💬 Написать админу →": "💬 Message admin →",
  "Канал": "Channel",
  "Новости, промокоды, обновления и важные объявления.": "News, promocodes, updates, and important announcements.",
  "📣 Перейти в канал →": "📣 Open channel →",
  "Нужна помощь?": "Need help?",
  "Открой поддержку в Telegram": "Open support in Telegram",
  "Опиши проблему, устройство и приложи скриншот ошибки, если он есть.": "Describe the issue, your device, and attach an error screenshot if you have one.",
  "Дата вступления в силу:": "Effective date:",
  "Дата обновления:": "Last updated:",
  "30 июня 2026 г.": "June 30, 2026",
  "1. Какие данные мы собираем": "1. Information We Collect",
  "Мы можем собирать Telegram ID, username, выбранный язык, статус подписки, срок действия подписки, VPN-конфигурацию, статистику трафика, информацию об устройствах, реферальную статистику и статус оплаты.": "We may collect your Telegram ID, username, selected language, subscription status, subscription expiration date, VPN configuration data, traffic statistics, device information, referral statistics, and payment status.",
  "2. Для чего используются данные": "2. How We Use Data",
  "Данные нужны для предоставления VPN-доступа, управления подпиской, обработки платежей, выдачи конфигураций, отображения статистики, предотвращения злоупотреблений и работы поддержки.": "The data is used to provide VPN access, manage subscriptions, process payments, issue configurations, display statistics, prevent abuse, and operate customer support.",
  "3. Платежи": "3. Payments",
  "Оплата проходит через сторонние платежные сервисы. Moon VPN не хранит данные банковских карт.": "Payments are processed through third-party payment providers. Moon VPN does not store bank card details.",
  "4. Хранение и безопасность": "4. Storage and Security",
  "Данные хранятся на защищенных серверах. Доступ к ним имеют только уполномоченные администраторы в рамках работы сервиса.": "Data is stored on protected servers. Only authorized administrators have access when required for service operation.",
  "5. Передача третьим лицам": "5. Sharing with Third Parties",
  "Мы не продаем персональные данные. Передача возможна только по требованию закона, для обработки платежей или для обеспечения работы сервиса.": "We do not sell personal data. Data may only be shared when required by law, for payment processing, or to ensure service operation.",
  "6. Логи VPN": "6. VPN Logs",
  "Moon VPN стремится минимизировать сбор данных. Ограниченная техническая информация может временно обрабатываться для стабильности, диагностики и защиты от злоупотреблений.": "Moon VPN aims to minimize data collection. Limited technical information may be temporarily processed for stability, diagnostics, and abuse prevention.",
  "7. Ваши права": "7. Your Rights",
  "Вы можете запросить информацию о данных, исправление неточностей или удаление данных, если это не противоречит законодательству и условиям активной подписки.": "You may request information about stored data, correction of inaccuracies, or deletion of data if this does not conflict with applicable law or active subscription terms.",
  "8. Контакты": "8. Contacts",
  "По вопросам конфиденциальности обратитесь в поддержку Moon VPN через Telegram-бота или официальный канал.": "For privacy questions, contact Moon VPN support through the Telegram bot or official channel.",
  "1. Принятие условий": "1. Acceptance of Terms",
  "Используя Moon VPN и Telegram-бота, вы соглашаетесь с настоящими условиями.": "By using Moon VPN and the Telegram bot, you agree to these Terms.",
  "2. Описание сервиса": "2. Service Description",
  "Moon VPN предоставляет доступ к VPN-подписке, конфигурациям, статистике трафика, поддержке и другим функциям через Telegram-бота.": "Moon VPN provides access to VPN subscriptions, configurations, traffic statistics, support, and related functions through the Telegram bot.",
  "3. Подписка и оплата": "3. Subscription and Payment",
  "Доступ предоставляется на выбранный срок после успешной оплаты. Информация о подписке отображается в разделе «Моя подписка».": "Access is provided for the selected period after successful payment. Subscription information is displayed in the “My subscription” section.",
  "4. Запрещенное использование": "4. Prohibited Use",
  "Запрещается использовать сервис для незаконных действий, спама, атак, мошенничества, распространения вредоносных материалов или нарушения прав третьих лиц.": "The service may not be used for illegal activities, spam, attacks, fraud, distribution of malicious materials, or violation of third-party rights.",
  "5. Ограничения ответственности": "5. Limitation of Liability",
  "Сервис предоставляется «как есть». Мы стремимся обеспечить стабильную работу, но не гарантируем отсутствие перебоев у сторонних сетей, провайдеров или сервисов.": "The service is provided “as is”. We strive to maintain stable operation but do not guarantee the absence of interruptions caused by third-party networks, providers, or services.",
  "6. Возвраты": "6. Refunds",
  "Вопросы возврата решаются через поддержку индивидуально, с учетом причины обращения и статуса подписки.": "Refund requests are handled individually through support, considering the reason for the request and subscription status.",
  "7. Изменения условий": "7. Changes to Terms",
  "Мы можем обновлять условия. Продолжение использования сервиса после изменений означает согласие с новой редакцией.": "We may update these Terms. Continued use of the service after changes means acceptance of the updated version.",
  "Для вопросов по условиям использования обратитесь в поддержку Moon VPN.": "For questions about these Terms, contact Moon VPN support.",
  "Настоящий документ является публичной офертой и регулирует порядок покупки, предоставления и использования доступа к сервису Moon VPN. Оплата подписки или использование сервиса означает согласие пользователя с условиями данной оферты.": "This document is a public offer and governs the purchase, provision, and use of access to the Moon VPN service. Payment for a subscription or use of the service means the user agrees to this offer.",
  "1. Общие положения": "1. General Provisions",
  "Moon VPN предоставляет пользователям доступ к защищенному VPN-соединению для повышения приватности, безопасности передачи данных и комфортного доступа к интернет-ресурсам.": "Moon VPN provides users with access to a secure VPN connection to improve privacy, data transmission security, and comfortable access to internet resources.",
  "Сервис работает через Telegram-бота, официальный сайт, каналы поддержки и другие интерфейсы Moon VPN. Актуальные тарифы, сроки подписки и условия подключения размещаются в Telegram-боте и на сайте проекта.": "The service operates through the Telegram bot, official website, support channels, and other Moon VPN interfaces. Current plans, subscription periods, and connection terms are published in the Telegram bot and on the project website.",
  "2. Термины": "2. Definitions",
  "Сервис": "Service",
  "— VPN-сервис Moon VPN, включая Telegram-бота, сайт, конфигурации, инструкции, поддержку и связанные функции.": "means the Moon VPN service, including the Telegram bot, website, configurations, instructions, support, and related functions.",
  "Пользователь": "User",
  "— физическое лицо, использующее сервис или оплатившее подписку.": "means an individual who uses the service or has paid for a subscription.",
  "Подписка": "Subscription",
  "— оплаченный доступ к VPN-сервису на выбранный срок.": "means paid access to the VPN service for the selected period.",
  "Конфигурация": "Configuration",
  "— индивидуальная ссылка, ключ или набор данных для подключения к VPN.": "means an individual link, key, or set of data used to connect to the VPN.",
  "3. Предмет оферты": "3. Subject of the Offer",
  "Moon VPN предоставляет пользователю доступ к VPN-подписке на выбранный срок, а пользователь оплачивает доступ и использует сервис в соответствии с настоящими правилами.": "Moon VPN provides the user with access to a VPN subscription for the selected period, and the user pays for access and uses the service according to these rules.",
  "Доступ предоставляется в электронном виде. Физическая доставка товара не осуществляется.": "Access is provided electronically. No physical delivery is performed.",
  "4. Оформление заказа": "4. Placing an Order",
  "Заказ подписки оформляется через Telegram-бота Moon VPN или другие официальные каналы проекта.": "A subscription order is placed through the Moon VPN Telegram bot or other official project channels.",
  "Для оформления и обслуживания подписки может использоваться Telegram ID пользователя, username, статус оплаты, срок действия подписки, статистика трафика и техническая информация, необходимая для работы сервиса.": "To process and maintain a subscription, Moon VPN may use the user’s Telegram ID, username, payment status, subscription period, traffic statistics, and technical information required for service operation.",
  "Пользователь несет ответственность за корректность предоставленных данных и сохранность своей конфигурации.": "The user is responsible for the accuracy of the provided data and for keeping their configuration secure.",
  "5. Предоставление доступа": "5. Providing Access",
  "После успешной оплаты сервис автоматически или вручную выдает пользователю данные для подключения. Обычно доступ появляется в течение короткого времени после оплаты.": "After successful payment, the service automatically or manually provides the user with connection data. Access is usually provided shortly after payment.",
  "Подписка считается предоставленной с момента появления данных подключения в Telegram-боте или отправки инструкции пользователю.": "The subscription is considered provided when connection data appears in the Telegram bot or when instructions are sent to the user.",
  "6. Оплата": "6. Payment",
  "Оплата производится доступными в сервисе способами: банковской картой, СБП, Telegram Stars, криптовалютой или иными способами, если они подключены в Telegram-боте.": "Payment is made using methods available in the service: bank card, SBP, Telegram Stars, cryptocurrency, or other methods if enabled in the Telegram bot.",
  "Стоимость подписки зависит от выбранного тарифа и срока доступа. Актуальные цены отображаются перед оплатой.": "The subscription price depends on the selected plan and access period. Current prices are shown before payment.",
  "7. Возвраты": "7. Refunds",
  "Пользователь может обратиться в поддержку по вопросу возврата. Решение принимается индивидуально с учетом причины обращения, факта выдачи конфигурации, срока использования и технических обстоятельств.": "The user may contact support regarding a refund. The decision is made individually, considering the reason for the request, whether the configuration was issued, usage period, and technical circumstances.",
  "Возврат может быть отклонен, если доступ был предоставлен, сервис работал корректно, а проблема возникла из-за настроек устройства, стороннего приложения, интернет-провайдера, блокировок в сети пользователя или нарушения правил сервиса.": "A refund may be declined if access was provided, the service worked properly, and the issue was caused by device settings, a third-party app, the internet provider, network restrictions on the user’s side, or violation of service rules.",
  "8. Правила использования": "8. Usage Rules",
  "Сервис разрешено использовать только в законных целях. Запрещено использовать Moon VPN для спама, мошенничества, фишинга, распространения вредоносного ПО, атак на сети и сайты, подбора паролей, нарушения авторских прав, обхода ограничений с целью совершения незаконных действий или причинения вреда третьим лицам.": "The service may be used only for lawful purposes. Moon VPN may not be used for spam, fraud, phishing, distribution of malware, attacks on networks or websites, password cracking, copyright infringement, bypassing restrictions for illegal purposes, or causing harm to third parties.",
  "При нарушении правил Moon VPN вправе ограничить, приостановить или полностью прекратить доступ пользователя к сервису без компенсации.": "If the rules are violated, Moon VPN may limit, suspend, or fully terminate the user’s access to the service without compensation.",
  "9. Ограничения и стабильность": "9. Limitations and Stability",
  "Moon VPN стремится обеспечивать стабильную работу сервиса, но не гарантирует абсолютную доступность всех сайтов, приложений и направлений связи, так как на работу VPN могут влиять провайдеры, региональные ограничения, технические сбои, настройки устройств и сторонние сервисы.": "Moon VPN strives to provide stable service operation but does not guarantee absolute availability of all websites, apps, and routes because VPN performance may be affected by providers, regional restrictions, technical failures, device settings, and third-party services.",
  "При чрезмерной нагрузке, злоупотреблении ресурсами или действиях, влияющих на стабильность сервиса, доступ пользователя может быть ограничен.": "In case of excessive load, resource abuse, or actions affecting service stability, the user’s access may be limited.",
  "10. Ответственность": "10. Liability",
  "Пользователь самостоятельно отвечает за свои действия в интернете при использовании сервиса. Moon VPN не несет ответственности за незаконные действия пользователя, убытки, вызванные неправильной настройкой устройства, действиями провайдера, блокировками сторонних сервисов или недоступностью отдельных интернет-ресурсов.": "The user is solely responsible for their actions on the internet while using the service. Moon VPN is not responsible for illegal actions by the user, losses caused by incorrect device setup, provider actions, third-party service restrictions, or unavailability of individual internet resources.",
  "11. Конфиденциальность": "11. Privacy",
  "Обработка данных пользователя регулируется Политикой конфиденциальности Moon VPN. Сервис собирает только данные, необходимые для работы подписки, поддержки, оплаты, безопасности и предотвращения злоупотреблений.": "User data processing is governed by the Moon VPN Privacy Policy. The service collects only the data necessary for subscription operation, support, payment, security, and abuse prevention.",
  "12. Реферальная программа и бонусы": "12. Referral Program and Bonuses",
  "Moon VPN может предоставлять бонусные дни, промокоды, скидки и реферальные начисления. Условия таких программ отображаются в Telegram-боте или официальном канале и могут изменяться.": "Moon VPN may provide bonus days, promocodes, discounts, and referral rewards. The terms of such programs are displayed in the Telegram bot or official channel and may change.",
  "13. Форс-мажор": "13. Force Majeure",
  "Moon VPN не несет ответственности за невозможность исполнения обязательств, если она вызвана обстоятельствами непреодолимой силы: авариями, сбоями у провайдеров, изменениями законодательства, блокировками, военными действиями, стихийными бедствиями или иными событиями, на которые сервис не может повлиять.": "Moon VPN is not responsible for failure to fulfill obligations if caused by force majeure circumstances: accidents, provider failures, changes in law, blocking, military actions, natural disasters, or other events beyond the service’s control.",
  "14. Изменение условий": "14. Changes to Terms",
  "Moon VPN может обновлять настоящую оферту. Актуальная версия публикуется на сайте. Продолжение использования сервиса после обновления означает согласие с новой редакцией.": "Moon VPN may update this offer. The current version is published on the website. Continued use of the service after an update means acceptance of the new version.",
  "15. Контакты": "15. Contacts",
  "По вопросам оплаты, подключения, возвратов и работы сервиса пользователь может обратиться в поддержку Moon VPN через Telegram-бота, администратора или официальный канал проекта.": "For questions about payment, connection, refunds, and service operation, the user may contact Moon VPN support through the Telegram bot, administrator, or official project channel.",
  "© 2026 Moon VPN. Все права защищены.": "© 2026 Moon VPN. All rights reserved."
};
const enToRu = Object.fromEntries(Object.entries(ruToEn).map(([ru, en]) => [en, ru]));
Object.assign(enToRu, {
  "Privacy Policy": "Политика конфиденциальности",
  "Terms of Service": "Условия использования",
  "Privacy": "Политика",
  "Terms": "Условия",
  "Support": "Поддержка",
  "Public Offer": "Public Offer"
});
const langToggle = document.getElementById('langToggle');

function translateTextNode(node, dictionary) {
  const text = node.nodeValue;
  const trimmed = text.trim();
  if (!trimmed) return;
  const translated = dictionary[trimmed];
  if (!translated) return;
  const start = text.match(/^\s*/)[0];
  const end = text.match(/\s*$/)[0];
  node.nodeValue = start + translated + end;
}

function walkTextNodes(container, cb) {
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent || ['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(parent.tagName)) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  });
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach(cb);
}

function applyLanguage(lang) {
  const current = localStorage.getItem('moonvpn-lang') || 'ru';
  if (current === lang) return;
  const dictionary = lang === 'en' ? ruToEn : enToRu;
  walkTextNodes(document.body, (node) => translateTextNode(node, dictionary));
  root.lang = lang;
  localStorage.setItem('moonvpn-lang', lang);
  if (langToggle) langToggle.textContent = lang === 'en' ? 'EN / RU' : 'RU / EN';
  const titles = {
    '/privacy.html': ['Privacy Policy — Moon VPN', 'Политика конфиденциальности — Moon VPN'],
    '/terms.html': ['Terms of Service — Moon VPN', 'Условия использования — Moon VPN'],
    '/offer.html': ['Public Offer — Moon VPN', 'Публичная оферта — Moon VPN'],
    '/support.html': ['Support — Moon VPN', 'Поддержка — Moon VPN']
  };
  const key = location.pathname.slice(location.pathname.lastIndexOf('/'));
  const pair = titles[key];
  document.title = pair ? (lang === 'en' ? pair[0] : pair[1]) : (lang === 'en' ? 'Moon VPN — fast and secure VPN' : 'Moon VPN — быстрый и безопасный VPN');
}

function initLanguage() {
  const lang = localStorage.getItem('moonvpn-lang') || 'ru';
  if (langToggle) langToggle.textContent = lang === 'en' ? 'EN / RU' : 'RU / EN';
  if (lang === 'en') {
    localStorage.setItem('moonvpn-lang', 'ru');
    applyLanguage('en');
  }
}
initLanguage();
if (langToggle) {
  langToggle.addEventListener('click', () => {
    const current = localStorage.getItem('moonvpn-lang') || 'ru';
    applyLanguage(current === 'ru' ? 'en' : 'ru');
  });
}

// Global configurable links and prices from config.js
(function applyMoonVpnConfig() {
  const cfg = window.MOONVPN_CONFIG || {};
  const botUrl = cfg.botUrl || 'https://t.me/your_bot_username';
  const adminUrl = cfg.adminUrl || 'https://t.me/your_admin_username';
  const channelUrl = cfg.channelUrl || 'https://t.me/your_channel_username';
  const supportEmail = cfg.supportEmail || 'support@moonvpn.example';
  const websiteUrl = cfg.websiteUrl || window.location.origin;

  document.querySelectorAll('a[href="https://t.me/your_bot_username"]').forEach(a => a.href = botUrl);
  document.querySelectorAll('a[href="https://t.me/your_admin_username"]').forEach(a => a.href = adminUrl);
  document.querySelectorAll('a[href="https://t.me/your_channel_username"]').forEach(a => a.href = channelUrl);

  document.querySelectorAll('a[data-link="bot"]').forEach(a => a.href = botUrl);
  document.querySelectorAll('a[data-link="admin"]').forEach(a => a.href = adminUrl);
  document.querySelectorAll('a[data-link="channel"]').forEach(a => a.href = channelUrl);
  document.querySelectorAll('a[data-link="email"]').forEach(a => a.href = `mailto:${supportEmail}`);
  document.querySelectorAll('a[data-link="site"]').forEach(a => a.href = websiteUrl);

  document.querySelectorAll('[data-config="supportEmail"]').forEach(el => el.textContent = supportEmail);
  document.querySelectorAll('[data-config="websiteUrl"]').forEach(el => el.textContent = websiteUrl);
  document.querySelectorAll('[data-config="brandName"]').forEach(el => el.textContent = cfg.brandName || 'Moon VPN');

  const prices = cfg.prices || {};
  const priceValues = [prices.oneMonth, prices.threeMonths, prices.sixMonths, prices.twelveMonths].filter(Boolean);
  if (priceValues.length) {
    document.querySelectorAll('.plans .price').forEach((el, i) => {
      if (priceValues[i]) el.textContent = priceValues[i];
    });
  }
})();
