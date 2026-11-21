'use client';
import {Link} from '@/components/link';
import {Check, ArrowRight} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {products, categories, type Product as ProductType} from '@/lib/store/data';
import {useStore} from '@/components/store/store-context';
import {ProductCard} from '@/components/store/product-card';

export default function Product({p}: { p: ProductType }) {
    const {t, local} = useStore();
    const cat = categories.find(c => c.slug === p.category);
    return <main className="page-main page-enter">
        <div className="shell">
            <div className="breadcrumbs"><Link to="/">{t('Bosh sahifa', 'Главная')}</Link><span>/</span><Link
                to="/catalog">{t('Katalog', 'Каталог')}</Link><span>/</span><span>{p.brand}</span></div>
            <div className="detail-layout">
                <div className="detail-image"><img src={p.image} alt={p.name} width={512} height={512}/></div>
                <div className="detail-body"><p className="eyebrow">{p.brand}</p><h1>{p.name}</h1>
                    <p>{local(p.description)}. {t('Avtomobilingizga ehtiyotkor parvarish va professional natija uchun tanlangan mahsulot.', 'Товар, подобранный для бережного ухода за автомобилем и профессионального результата.')}</p>
                    <ul>
                        <li><Check size={17}/>{t('Avtomobil parvarishi uchun', 'Для ухода за автомобилем')}</li>
                        <li><Check size={17}/>{t('Qulay foydalanish', 'Удобство использования')}</li>
                        <li><Check size={17}/>{t('Detailing ishqibozlari uchun', 'Для любителей детейлинга')}</li>
                    </ul>
                    <div className="spec-row"><span>{t('Brend', 'Бренд')}</span><strong>{p.brand}</strong></div>
                    <div className="spec-row">
                        <span>{t('Kategoriya', 'Категория')}</span><strong>{cat ? local(cat.name) : ''}</strong></div>
                    <div className="spec-row">
                        <span>{t('Hajm / o‘lcham', 'Объём / размер')}</span><strong>{p.size}</strong></div>
                    <Button variant="hero" asChild className="mt-7"><Link
                        to="/contact">{t('Mahsulot haqida so‘rash', 'Узнать о товаре')}<ArrowRight/></Link></Button>
                </div>
            </div>
            <details className="faq-item" open>
                <summary>{t('Foydalanish bo‘yicha tavsiyalar', 'Рекомендации по использованию')}</summary>
                <p>{t('Ishlatishdan oldin ishlab chiqaruvchi ko‘rsatmalarini o‘qing. Vositaning yuzaga mosligini kichik, ko‘rinmaydigan joyda tekshiring. To‘g‘ridan-to‘g‘ri quyosh nuri ostida ishlatmang; qadoqdagi xavfsizlik ko‘rsatmalariga rioya qiling.', 'Перед использованием ознакомьтесь с инструкцией производителя. Проверьте совместимость на небольшом незаметном участке. Не работайте под прямыми солнечными лучами; соблюдайте рекомендации по безопасности на упаковке.')}</p>
            </details>
            <section className="section">
                <div className="section-heading"><h2>{t('Sizga yoqishi mumkin', 'Вам также может понравиться')}</h2>
                </div>
                <div className="product-grid">{products.filter(v => v.id !== p.id).slice(0, 4).map(v => <ProductCard
                    key={v.id} product={v}/>)}</div>
            </section>
        </div>
    </main>;
}
