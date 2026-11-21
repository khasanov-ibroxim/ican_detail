'use client';
import { Link } from '@/components/link';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useStore } from './store-context';
import type { Product } from '@/lib/store/data';
export function ProductCard({product}:{product:Product}){const {t,local}=useStore();return <article className="product-card"><Link to="/products/$product" params={{product:product.id}} className="product-image" aria-label={product.name}><img src={product.image} alt={product.name} width={512} height={512} loading="lazy"/>{product.isNew&&<span className="product-badge">{t('YANGI','НОВИНКА')}</span>}</Link><div className="product-info"><span className="product-brand">{product.brand}</span><h3>{product.name}</h3><p>{local(product.description)}</p><Button asChild variant="detail" size="sm"><Link to="/products/$product" params={{product:product.id}}>{t('Batafsil','Подробнее')}<ArrowUpRight size={13}/></Link></Button></div></article>;}
