'use client';
import { useState } from 'react';
import { Link } from '@/components/link';
import { Search } from 'lucide-react';
import { brands,brandSlug } from '@/lib/store/data';
import { useStore } from '@/components/store/store-context';
export default function Brands(){const {t}=useStore();const [q,setQ]=useState('');return <main className="page-main"><div className="shell"><h1 className="page-title">{t('Premium brendlar','Премиальные бренды')}</h1><p className="page-intro">{t('Avtomobil parvarishida dunyoning yetakchi nomlari.','Ведущие мировые имена в уходе за автомобилем.')}</p><label className="search-field mb-8"><Search size={17}/><input aria-label={t('Brend qidirish','Поиск бренда')} placeholder={t('Brend nomini kiriting...','Введите название бренда...')} value={q} maxLength={100} onChange={e=>setQ(e.target.value)}/></label><div className="brand-strip">{brands.filter(b=>b.toLowerCase().includes(q.toLowerCase())).sort().map(b=><Link className="brand-tile" key={b} to="/brands/$brand" params={{brand:brandSlug(b)}}>{b}</Link>)}</div>{!brands.some(b=>b.toLowerCase().includes(q.toLowerCase()))&&<div className="empty-state">{t('Brend topilmadi','Бренд не найден')}</div>}</div></main>;}
