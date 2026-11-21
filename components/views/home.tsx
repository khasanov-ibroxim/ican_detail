'use client';
import {Link} from '@/components/link';
import {useState} from 'react';
import {ArrowRight, ArrowUpRight, Sparkles, Gem, Truck, ShieldCheck, Headphones} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {useStore} from '@/components/store/store-context';
import {ProductCard} from '@/components/store/product-card';
import {categories, brands, brandSlug, products} from '@/lib/store/data';

const hero = '/images/detail-hero.jpg';
const studio = '/images/detail-studio.jpg';
export default function Index() {
    const {t, local} = useStore();
    const [tab, setTab] = useState('');
    const [slide, setSlide] = useState(0);
    const slides = [{
        title: t('Avtomobil parvarishi va detailing uchun', 'Всё для ухода за автомобилем и детейлинга'),
        end: t('barchasi bir joyda.', 'в одном месте.'),
        copy: t('Avtokimyo, shotkalar, polirovka uskunalari, tuning detallari va professional aksessuarlar.', 'Автохимия, щётки, полировальные машины, детали тюнинга и профессиональные аксессуары.')
    }, {
        title: t('Har bir detal uchun', 'Для каждой детали —'),
        end: t('mukammal parvarish.', 'безупречный уход.'),
        copy: t('Yumshoq mikrofibra va professional vositalar bilan avtomobilingizning go‘zalligini asrang.', 'Сохраните красоту автомобиля с мягкой микрофиброй и профессиональными средствами.')
    }, {
        title: t('Professional sifat.', 'Профессиональное качество.'),
        end: t('Ajoyib natija.', 'Блестящий результат.'),
        copy: t('Ishonchli brendlar va detailing ishqibozlari uchun tanlangan mahsulotlar.', 'Надёжные бренды и товары, подобранные для любителей детейлинга.')
    }];
    const current = slides[slide] ?? slides[0];
    if (!current) return null;
    const benefits = [{
        icon: Gem,
        title: t('Premium brendlar', 'Премиальные бренды'),
        copy: t('Dunyoning yetakchi ishlab chiqaruvchilari', 'Ведущие мировые производители')
    }, {
        icon: Truck,
        title: t('Yetkazib berish', 'Доставка'),
        copy: t('Siz uchun qulay usulda', 'Удобным для вас способом')
    }, {
        icon: ShieldCheck,
        title: t('Ishonchli sifat', 'Надёжное качество'),
        copy: t('Har bir detalda sifat', 'Качество в каждой детали')
    }, {
        icon: Headphones,
        title: t('Mutaxassis maslahati', 'Совет специалиста'),
        copy: t('To‘g‘ri tanlov uchun yordam', 'Помощь с правильным выбором')
    }];
    return <main className="page-enter">
        <section className="hero"><img className="hero-photo" src={hero}
                                       alt={t('Ko‘k sport avtomobili va detailing uskunalari', 'Синий спортивный автомобиль и оборудование для детейлинга')}
                                       width={1920} height={1024} fetchPriority="high"/>
            <div className="shell hero-content">
                <div className="hero-eyebrow"><Sparkles
                    size={13}/>{t('PREMIUM AUTO DETAILING', 'ПРЕМИАЛЬНЫЙ ДЕТЕЙЛИНГ')}</div>
                <h1>{current.title}<br/><span>{current.end}</span></h1><p className="hero-copy">{current.copy}</p>
                <div className="hero-buttons"><Button variant="hero" size="lg" asChild><Link
                    to="/catalog">{t('Katalogni ko‘rish', 'Смотреть каталог')}<ArrowRight/></Link></Button><Button
                    variant="glass" size="lg" asChild><Link
                    to="/about">{t('Do‘kon haqida', 'О магазине')}<ArrowUpRight/></Link></Button></div>
                <div className="hero-slide-controls">{slides.map((_, i) => <Button key={i}
                                                                                   aria-label={t(`${i + 1}-slayd`, `Слайд ${i + 1}`)}
                                                                                   aria-pressed={slide === i}
                                                                                   onClick={() => setSlide(i)}/>)}<span
                    className="ml-3 text-[10px] text-muted-foreground">0{slide + 1} / 03</span></div>
            </div>
            <div className="hero-caption">Care beyond the ordinary</div>
        </section>
        <div className="home-body">
            <div className="shell benefits">{benefits.map(b => <div className="benefit" key={b.title}>
                <b.icon/>
                <div><strong>{b.title}</strong><small>{b.copy}</small></div>
            </div>)}</div>
            <section className="shell section">
                <div className="section-heading">
                    <div><p className="eyebrow">{t('HAR BIR DETAL MUHIM', 'КАЖДАЯ ДЕТАЛЬ ВАЖНА')}</p>
                        <h2>{t('Kategoriyalar', 'Категории')}</h2></div>
                    <Link to="/categories">{t('Barcha kategoriyalar', 'Все категории')}<ArrowRight size={14}/></Link>
                </div>
                <div className="category-grid">{categories.slice(0, 4).map(c => <Link key={c.slug}
                                                                                      to="/categories/$category"
                                                                                      params={{category: c.slug}}
                                                                                      className="category-card"><img
                    src={c.image} alt={local(c.name)} width={512} height={512} loading="lazy"/><h3>{local(c.name)}</h3>
                    <span className="category-arrow"><ArrowUpRight size={16}/></span></Link>)}</div>
            </section>
            <section className="shell section pt-2">
                <div className="section-heading"><h2>{t('Dunyoning yetakchi brendlari', 'Ведущие мировые бренды')}</h2>
                    <Link to="/brands">{t('Barcha brendlar', 'Все бренды')}<ArrowRight size={14}/></Link></div>
                <div className="brand-strip">{brands.slice(0, 8).map(b => <Link key={b} to="/brands/$brand"
                                                                                params={{brand: brandSlug(b)}}
                                                                                className="brand-tile">{b}</Link>)}</div>
            </section>
            <section className="shell section">
                <div className="section-heading">
                    <div><p className="eyebrow">{t('SIFATNI TANLANG', 'ВЫБИРАЙТЕ КАЧЕСТВО')}</p>
                        <h2>{t('Tavsiya etilgan mahsulotlar', 'Рекомендуемые товары')}</h2></div>
                    <Link to="/catalog">{t('Katalogni ko‘rish', 'Смотреть каталог')}<ArrowRight size={14}/></Link></div>
                <div className="product-tabs">{[{
                    slug: '',
                    name: {uz: 'Barchasi', ru: 'Все'}
                }, ...categories.slice(0, 4)].map(c => <Button key={c.slug} variant={tab === c.slug ? 'hero' : 'glass'}
                                                               size="sm"
                                                               onClick={() => setTab(c.slug)}>{local(c.name)}</Button>)}</div>
                <div
                    className="product-grid">{products.filter(p => !tab ? p.featured : p.category === tab).slice(0, 4).map(p =>
                    <ProductCard key={p.id} product={p}/>)}</div>
            </section>
            <section className="promo"><img src={studio}
                                            alt={t('Professional detailing studiyasi', 'Профессиональная студия детейлинга')}
                                            width={1536} height={1024} loading="lazy"/>
                <div className="shell"><p className="eyebrow">iCAN DETAIL</p>
                    <h2>{t('Oddiy parvarish emas. Mukammallikka e’tibor.', 'Не просто уход. Внимание к совершенству.')}</h2>
                    <p>{t('Avtomobilingiz eng yaxshisiga munosib.', 'Ваш автомобиль заслуживает лучшего.')}</p><Button
                        variant="hero" asChild><Link
                        to="/about">{t('Biz haqimizda', 'О нас')}<ArrowUpRight/></Link></Button></div>
            </section>
            <section className="shell section">
                <div className="section-heading">
                    <div><p className="eyebrow">{t('KATALOGDAGI YANGILIKLAR', 'НОВИНКИ КАТАЛОГА')}</p>
                        <h2>{t('Yangi mahsulotlar', 'Новые товары')}</h2></div>
                    <Link to="/catalog">{t('Barcha mahsulotlar', 'Все товары')}<ArrowRight size={14}/></Link></div>
                <div className="product-grid">{products.filter(p => p.isNew).slice(0, 4).map(p => <ProductCard
                    key={p.id} product={p}/>)}</div>
            </section>
        </div>
    </main>;
}
