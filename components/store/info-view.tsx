'use client';
import {Link} from '@/components/link';
import {ArrowRight, ShieldCheck, Gem, Headphones, Truck} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {useStore} from './store-context';

const studio = '/images/detail-studio.jpg';

export function InfoView({kind}: { kind: 'about' | 'delivery' | 'faq' | 'contact' | 'privacy' }) {
    const {t} = useStore();
    const titles = {
        about: t('Har bir detal — biz uchun muhim.', 'Для нас важна каждая деталь.'),
        delivery: t('Yetkazib berish', 'Доставка'),
        faq: t('Savollar va javoblar', 'Вопросы и ответы'),
        contact: t('Biz bilan bog‘laning', 'Свяжитесь с нами'),
        privacy: t('Maxfiylik siyosati', 'Политика конфиденциальности')
    };
    const faqs = [{
        q: t('Mahsulotni qanday tanlash mumkin?', 'Как выбрать подходящий товар?'),
        a: t('Katalogdagi kategoriyalar va brend filtrlari orqali mahsulotlarni tanlang. Har bir mahsulot sahifasida uning tavsifi va asosiy xususiyatlari keltirilgan.', 'Выбирайте товары с помощью категорий и фильтров брендов. Описание и основные характеристики доступны на странице каждого товара.')
    }, {
        q: t('Mahsulotlar qaysi avtomobillarga mos?', 'Для каких автомобилей подходят товары?'),
        a: t('Moslik mahsulot turiga bog‘liq. Kimyoviy vositalarni ishlatishdan oldin ishlab chiqaruvchining ko‘rsatmalarini tekshiring; tuning detallari uchun aniq modelga moslikni tasdiqlash zarur.', 'Совместимость зависит от типа товара. Перед использованием автохимии проверьте инструкции производителя; для деталей тюнинга необходимо уточнить совместимость с конкретной моделью.')
    }, {
        q: t('Yetkazib berish shartlari qanday?', 'Каковы условия доставки?'),
        a: t('Yetkazib berish hududi, usuli va muddati do‘kon bilan alohida kelishiladi. Tasdiqlangan ma’lumotlar keyinroq ushbu sahifaga qo‘shiladi.', 'Регион, способ и срок доставки согласуются с магазином отдельно. Подтверждённая информация будет добавлена на эту страницу.')
    }, {
        q: t('Qaytarish va almashtirish mumkinmi?', 'Возможны возврат и обмен?'),
        a: t('Qaytarish va almashtirish shartlari mahsulot turi va holatiga bog‘liq. Do‘konning tasdiqlangan qoidalari e’lon qilingandan so‘ng shu yerda ko‘rsatiladi.', 'Условия возврата и обмена зависят от типа и состояния товара. Подтверждённые правила магазина будут опубликованы здесь.')
    }];
    return <main className="page-main page-enter">
        <div className="shell">
            <div className="breadcrumbs"><Link
                to="/">{t('Bosh sahifa', 'Главная')}</Link><span>/</span><span>{kind === 'about' ? t('Biz haqimizda', 'О нас') : titles[kind]}</span>
            </div>
            <p className="eyebrow">iCAN DETAIL</p><h1 className="page-title">{titles[kind]}</h1>{kind === 'about' && <>
            <p className="page-intro">{t('iCan Detail — avtomobiliga g‘amxo‘rlik qiladiganlar uchun. Yetakchi brendlar, professional vositalar va sifatli detailing aksessuarlari.', 'iCan Detail — для тех, кто заботится о своём автомобиле. Ведущие бренды, профессиональные средства и качественные аксессуары.')}</p>
            <img className="editorial-image" src={studio}
                 alt={t('Detailing ustaxonasida avtomobil parvarishi', 'Уход за автомобилем в детейлинг-студии')}
                 width={1536} height={1024}/>
            <div className="editorial-columns">
                <section><Gem className="mb-4"/><h2>{t('Bizning maqsadimiz', 'Наша цель')}</h2>
                    <p>{t('Professional detailingni hamma uchun yaqinroq qilish. Avtomobilning har bir yuzasi va har bir detali uchun mos mahsulotni bir joyda taqdim etish.', 'Сделать профессиональный детейлинг доступнее. Собрать в одном месте подходящие товары для каждой поверхности и детали автомобиля.')}</p>
                </section>
                <section><ShieldCheck className="mb-4"/><h2>{t('Sifatga e’tibor', 'Внимание к качеству')}</h2>
                    <p>{t('Biz uchun parvarish — shunchaki tozalik emas. Bu ehtiyotkorlik, to‘g‘ri vosita va avtomobilingizga bo‘lgan hurmat.', 'Для нас уход — не просто чистота. Это бережное отношение, правильные средства и уважение к вашему автомобилю.')}</p>
                </section>
            </div>
            <Button variant="hero" className="mt-8" asChild><Link
                to="/catalog">{t('Katalogni ko‘rish', 'Смотреть каталог')}<ArrowRight/></Link></Button></>}{kind === 'delivery' && <>
            <p className="page-intro">{t('Mahsulotlarni olishning siz uchun qulay usulini tanlang.', 'Выберите удобный для вас способ получения товаров.')}</p>
            <div className="editorial-columns my-10">
                <section><Truck className="mb-4"/><h2>{t('Yetkazib berish', 'Доставка')}</h2>
                    <p>{t('Manzilga yetkazib berish imkoniyati va hududlari do‘kon bilan kelishiladi. Aniq muddat va shartlar tasdiqlangandan keyin beriladi.', 'Возможность доставки по адресу и регионы согласуются с магазином. Точные сроки и условия сообщаются после подтверждения.')}</p>
                </section>
                <section><Headphones className="mb-4"/><h2>{t('Do‘kondan olib ketish', 'Самовывоз')}</h2>
                    <p>{t('Mahsulotni do‘kondan olib ketish imkoniyatini oldindan aniqlashtiring. Manzil va ish vaqti do‘kon tomonidan tasdiqlanadi.', 'Возможность самовывоза уточняйте заранее. Адрес и часы работы должны быть подтверждены магазином.')}</p>
                </section>
            </div>
            {faqs.slice(2, 3).map(f => <details className="faq-item" key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p></details>)}</>}{kind === 'faq' && <><p
            className="page-intro">{t('Mahsulotlar, parvarish va do‘kon shartlari haqida.', 'О товарах, уходе и условиях магазина.')}</p>{faqs.map(f =>
            <details className="faq-item" key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p></details>)}</>}{kind === 'contact' && <><p
            className="page-intro">{t('Mahsulot haqida savolingiz bormi? Biz sizga to‘g‘ri vositani tanlashda yordam berishga tayyormiz.', 'Есть вопрос о товаре? Мы готовы помочь выбрать подходящее средство.')}</p>
            <div className="contact-note"><Headphones size={32} className="mb-5"/><h2
                className="text-xl font-bold mb-3">{t('Aloqa ma’lumotlari tez orada', 'Контактные данные появятся скоро')}</h2>
                <p>{t('Telefon, Telegram, Instagram va do‘kon manzili tasdiqlangandan keyin shu yerda ko‘rsatiladi.', 'Телефон, Telegram, Instagram и адрес магазина будут указаны после подтверждения.')}</p>
            </div>
            <Button asChild variant="hero" className="mt-8"><Link
                to="/catalog">{t('Mahsulotlarni ko‘rish', 'Посмотреть товары')}<ArrowRight/></Link></Button></>}{kind === 'privacy' && <>
            <p className="page-intro">{t('Ushbu sayt mahsulotlar bilan tanishish uchun mo‘ljallangan.', 'Этот сайт предназначен для знакомства с товарами.')}</p>
            <div className="editorial-columns">
                <section><h2>{t('Shaxsiy ma’lumotlar', 'Персональные данные')}</h2>
                    <p>{t('Saytda ro‘yxatdan o‘tish, shaxsiy kabinet yoki ma’lumot yuborish shakllari mavjud emas. Sayt ilovasi foydalanuvchining shaxsiy ma’lumotlarini yig‘maydi va saqlamaydi.', 'На сайте нет регистрации, личного кабинета или форм отправки данных. Приложение сайта не собирает и не сохраняет персональные данные пользователей.')}</p>
                </section>
                <section><h2>{t('Til va qidirish', 'Язык и поиск')}</h2>
                    <p>{t('Til tanlovi, qidiruv va filtrlar faqat joriy sahifa seansida ishlaydi. Ular doimiy xotiraga yozilmaydi.', 'Выбор языка, поиск и фильтры действуют только в текущем сеансе страницы. Они не сохраняются в постоянном хранилище.')}</p>
                </section>
            </div>
        </>}</div>
    </main>;
}
