'use client';
import { Link } from '@/components/link';
import { ArrowUpRight } from 'lucide-react';
import { categories } from '@/lib/store/data';
import { useStore } from '@/components/store/store-context';
export default function Categories(){const {t,local}=useStore();return <main className="page-main"><div className="shell"><h1 className="page-title">{t('Kategoriyalar','Категории')}</h1><p className="page-intro">{t('Har bir detal uchun to‘g‘ri vosita.','Правильное средство для каждой детали.')}</p><div className="category-grid">{categories.map(c=><Link key={c.slug} to="/categories/$category" params={{category:c.slug}} className="category-card"><img src={c.image} alt={local(c.name)} width={512} height={512}/><h3>{local(c.name)}</h3><span className="category-arrow"><ArrowUpRight size={16}/></span></Link>)}</div></div></main>;}
