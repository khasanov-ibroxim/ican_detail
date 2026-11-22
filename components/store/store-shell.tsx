'use client';
import {useState} from 'react';
import {Link} from '@/components/link';
import {Search, Menu, X, ChevronDown, ArrowUpRight} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {useStore} from './store-context';
import {categories} from '@/lib/store/data';
import Image from "next/image";
import logo from "@/public/images/logo.png"

export function Logo() {
    return <Link to="/" className="brand-logo" aria-label="iCan Detail">
        <Image src={logo} alt={"asd"} width={180}/></Link>;
}

export function StoreHeader() {
    const {lang, setLang, t, local} = useStore();
    const [open, setOpen] = useState(false);
    const nav = <><Link to="/" activeOptions={{exact: true}}
                        onClick={() => setOpen(false)}>{t('Bosh sahifa', 'Главная')}</Link>
        <div className="nav-dropdown"><Link to="/catalog" className="inline-flex items-center gap-1"
                                            onClick={() => setOpen(false)}>{t('Katalog', 'Каталог')}<ChevronDown
            size={12}/></Link>
            <div className="nav-dropdown-content">{categories.map(c => <Link key={c.slug} to="/categories/$category"
                                                                             params={{category: c.slug}}
                                                                             onClick={() => setOpen(false)}>{local(c.name)}</Link>)}</div>
        </div>
        <Link to="/brands" onClick={() => setOpen(false)}>{t('Brendlar', 'Бренды')}</Link><Link to="/about"
                                                                                                onClick={() => setOpen(false)}>{t('Biz haqimizda', 'О нас')}</Link><Link
            to="/delivery" onClick={() => setOpen(false)}>{t('Yetkazib berish', 'Доставка')}</Link><Link to="/contact"
                                                                                                         onClick={() => setOpen(false)}>{t('Aloqa', 'Контакты')}</Link></>;
    return <header className="site-header">
        <div className="shell header-row"><Logo/>
            <nav className="desktop-nav" aria-label={t('Asosiy menyu', 'Основное меню')}>{nav}</nav>
            <div className="header-actions"><Button variant="ghost" size="icon" asChild><Link to="/search"
                                                                                              aria-label={t('Qidirish', 'Поиск')}
                                                                                              title={t('Qidirish', 'Поиск')}><Search
                size={20}/></Link></Button><Button variant="ghost" size="sm"
                                                   onClick={() => setLang(lang === 'uz' ? 'ru' : 'uz')}
                                                   aria-label={t('Русский язык', 'O‘zbek tili')}>{lang === 'uz' ? 'UZ' : 'RU'}<ChevronDown
                size={11}/></Button><Button className="mobile-only" variant="ghost" size="icon"
                                            onClick={() => setOpen(!open)} aria-label={t('Menyu', 'Меню')}
                                            aria-expanded={open}>{open ? <X/> : <Menu/>}</Button></div>
        </div>
        {open && <nav className="mobile-menu" aria-label={t('Mobil menyu', 'Мобильное меню')}>{nav}</nav>}</header>;
}

export function StoreFooter() {
    const {t, local} = useStore();
    return <footer className="site-footer">
        <div className="shell">
            <div className="footer-grid">
                <div><Logo/>
                    <p>{t('Avtomobilingizga munosib parvarish. Professional detailing mahsulotlari va dunyoning yetakchi brendlari bir joyda.', 'Уход, достойный вашего автомобиля. Профессиональные средства и ведущие мировые бренды в одном месте.')}</p>
                </div>
                <div><h3>{t('Sahifalar', 'Страницы')}</h3><Link
                    to="/catalog">{t('Mahsulotlar katalogi', 'Каталог товаров')}</Link><Link
                    to="/brands">{t('Brendlar', 'Бренды')}</Link><Link
                    to="/about">{t('Biz haqimizda', 'О нас')}</Link><Link to="/contact">{t('Aloqa', 'Контакты')}</Link>
                </div>
                <div><h3>{t('Kategoriyalar', 'Категории')}</h3>{categories.slice(0, 4).map(c => <Link key={c.slug}
                                                                                                      to="/categories/$category"
                                                                                                      params={{category: c.slug}}>{local(c.name)}</Link>)}
                </div>
                <div><h3>{t('Foydali ma’lumotlar', 'Полезная информация')}</h3><Link
                    to="/delivery">{t('Yetkazib berish', 'Доставка')}</Link><Link
                    to="/faq">{t('Savollar va javoblar', 'Вопросы и ответы')}</Link><Link
                    to="/privacy">{t('Maxfiylik siyosati', 'Конфиденциальность')}</Link><Link
                    to="/contact">{t('Biz bilan bog‘lanish', 'Связаться с нами')} <ArrowUpRight className="inline"
                                                                                                size={12}/></Link></div>
            </div>
            <div className="footer-bottom">
                <span>© {new Date().getFullYear()} iCan Detail. {t('Barcha huquqlar himoyalangan.', 'Все права защищены.')}</span><span></span>
            </div>
        </div>
    </footer>;
}
