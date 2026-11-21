const shampoo = '/images/shampoo.webp';
const compound = '/images/compound.webp';
const polisher = '/images/polisher.webp';
const microfiber = '/images/microfiber.webp';
const brushes = '/images/brushes.webp';
const ceramic = '/images/ceramic.webp';
const tuning = '/images/tuning.webp.jpg';
export type LocalText = { uz: string; ru: string };
export type Product = {
    id: string;
    name: string;
    brand: string;
    category: string;
    image: string;
    description: LocalText;
    size: string;
    featured: boolean;
    isNew: boolean
};
export const categories = [
    {
        slug: 'avtokimyo',
        name: {uz: 'Avtokimyo', ru: 'Автохимия'},
        description: {uz: 'Mukammal tozalik va himoya', ru: 'Безупречная чистота и защита'},
        image: shampoo
    },
    {
        slug: 'shotkalar',
        name: {uz: 'Shotkalar va aksessuarlar', ru: 'Щётки и аксессуары'},
        description: {uz: 'Har bir detalga e’tibor', ru: 'Внимание к каждой детали'},
        image: brushes
    },
    {
        slug: 'tuning',
        name: {uz: 'Tuning detallari', ru: 'Детали тюнинга'},
        description: {uz: 'Avtomobilingiz uchun yangi uslub', ru: 'Новый стиль вашего автомобиля'},
        image: tuning
    },
    {
        slug: 'polirovka',
        name: {uz: 'Polirovka uskunalari', ru: 'Полировальные машины'},
        description: {uz: 'Professional natija uchun', ru: 'Для профессионального результата'},
        image: polisher
    },
    {
        slug: 'mikrofibra',
        name: {uz: 'Mikrofibra va salfetkalar', ru: 'Микрофибра и салфетки'},
        description: {uz: 'Yumshoq va ehtiyotkor parvarish', ru: 'Мягкий и бережный уход'},
        image: microfiber
    },
    {
        slug: 'boshqa',
        name: {uz: 'Boshqa mahsulotlar', ru: 'Другие товары'},
        description: {uz: 'Detailing uchun qo‘shimcha vositalar', ru: 'Дополнения для детейлинга'},
        image: ceramic
    },
];
export const brands = ['SONAX', "Meguiar’s", 'MOTUL', '3M', 'LIQUI MOLY', 'BOSCH', 'Koch Chemie', 'RUPES', 'iCan Detail'];
export const brandSlug = (brand: string) => brand.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-$/, '');
export const products: Product[] = [
    {
        id: 'sonax-gloss-shampoo',
        name: 'SONAX Gloss Shampoo',
        brand: 'SONAX',
        category: 'avtokimyo',
        image: shampoo,
        description: {uz: 'Avtomobil uchun konsentrat shampun', ru: 'Концентрированный автомобильный шампунь'},
        size: '1000 ml',
        featured: true,
        isNew: false
    },
    {
        id: 'meguiars-ultimate-compound',
        name: 'Meguiar’s Ultimate Compound',
        brand: 'Meguiar’s',
        category: 'avtokimyo',
        image: compound,
        description: {
            uz: 'Yaltiroqlikni tiklovchi polirovka pastasi',
            ru: 'Полировальная паста для восстановления блеска'
        },
        size: '473 ml',
        featured: true,
        isNew: false
    },
    {
        id: 'rupes-lhr15',
        name: 'RUPES LHR15 Mark III',
        brand: 'RUPES',
        category: 'polirovka',
        image: polisher,
        description: {uz: 'Professional polirovka mashinasi', ru: 'Профессиональная полировальная машина'},
        size: '125 mm',
        featured: true,
        isNew: false
    },
    {
        id: 'ican-ceramic',
        name: 'iCan Ceramic Coating Pro',
        brand: 'iCan Detail',
        category: 'avtokimyo',
        image: ceramic,
        description: {uz: 'Kuzov uchun keramik himoya qoplamasi', ru: 'Защитное керамическое покрытие кузова'},
        size: '50 ml',
        featured: true,
        isNew: true
    },
    {
        id: 'ican-microfiber',
        name: 'iCan Ultra Soft Microfiber',
        brand: 'iCan Detail',
        category: 'mikrofibra',
        image: microfiber,
        description: {uz: 'Yumshoq mikrofibra salfetkalar to‘plami', ru: 'Набор мягких салфеток из микрофибры'},
        size: '40 × 40 cm',
        featured: false,
        isNew: true
    },
    {
        id: 'ican-brush-set',
        name: 'iCan Detailing Brush Set',
        brand: 'iCan Detail',
        category: 'shotkalar',
        image: brushes,
        description: {uz: 'Nozik joylar uchun detailing shotkalari', ru: 'Кисти для ухода за труднодоступными местами'},
        size: '3 dona / шт.',
        featured: false,
        isNew: true
    },
    {
        id: 'carbon-spoiler',
        name: 'Carbon Sport Spoiler',
        brand: 'iCan Detail',
        category: 'tuning',
        image: tuning,
        description: {uz: 'Karbon teksturali sport spoyleri', ru: 'Спортивный спойлер с карбоновой текстурой'},
        size: 'Universal',
        featured: false,
        isNew: true
    },
    {
        id: 'ican-coating-kit',
        name: 'iCan Ceramic Protection Kit',
        brand: 'iCan Detail',
        category: 'boshqa',
        image: ceramic,
        description: {uz: 'Keramik parvarish uchun vositalar', ru: 'Средства для керамического ухода'},
        size: '50 ml',
        featured: false,
        isNew: true
    },
];

export function filterProducts(list: Product[], query = '', category = '', brand = '', sort = 'popular') {
    const q = query.trim().toLocaleLowerCase();
    const result = list.filter(p => (!category || p.category === category) && (!brand || p.brand === brand) && (!q || [p.name, p.brand, p.description.uz, p.description.ru, ...Object.values(categories.find(c => c.slug === p.category)?.name ?? {})].some(v => v.toLocaleLowerCase().includes(q))));
    if (sort === 'alphabet') result.sort((a, b) => a.name.localeCompare(b.name));
    if (sort === 'new') result.sort((a, b) => Number(b.isNew) - Number(a.isNew));
    return result;
}

export function pageHead(title: string, description: string) {
    const t = `${title} | iCan Detail`;
    return {
        title: t,
        description,
        openGraph: {title: t, description, type: 'website' as const},
        twitter: {card: 'summary_large_image' as const}
    };
}
