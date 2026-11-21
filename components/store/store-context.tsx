'use client';
import { createContext, useContext, useState, type ReactNode } from 'react';
import type { LocalText } from '@/lib/store/data';
type Language = 'uz' | 'ru';
const Context = createContext<{lang:Language;setLang:(lang:Language)=>void;t:(uz:string,ru:string)=>string;local:(text:LocalText)=>string} | undefined>(undefined);
export function StoreProvider({children}:{children:ReactNode}) {
 const [lang,setLang]=useState<Language>('uz');
 return <Context.Provider value={{lang,setLang,t:(uz,ru)=>lang==='uz'?uz:ru,local:text=>text[lang]}}>{children}</Context.Provider>;
}
export function useStore(){const context=useContext(Context);if(!context)throw new Error('StoreProvider required');return context;}
