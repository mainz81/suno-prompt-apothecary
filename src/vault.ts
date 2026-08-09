import type { Vault } from "./types";
import { initialVault } from "./data";
export const VAULT_KEY="suno-apothecary-v1";
const migratePrompts=(items:unknown[])=>items.map(item=>typeof item==="object"&&item?{...item,domain:(item as {domain?:string}).domain||"Suno"}:item);
export function loadVault():Vault { try { const parsed=JSON.parse(localStorage.getItem(VAULT_KEY)||"null"); if(parsed?.schema===1&&Array.isArray(parsed.ingredients)&&Array.isArray(parsed.recipes)) return {...parsed,archivedPrompts:Array.isArray(parsed.archivedPrompts)?migratePrompts(parsed.archivedPrompts):[],collections:Array.isArray(parsed.collections)&&parsed.collections.length?parsed.collections:initialVault.collections}; } catch{} return initialVault; }
export function saveVault(vault:Vault){ localStorage.setItem(VAULT_KEY,JSON.stringify(vault)); }
export function exportVault(vault:Vault){ const blob=new Blob([JSON.stringify(vault,null,2)],{type:"application/json"}); const href=URL.createObjectURL(blob); const a=document.createElement("a"); a.href=href;a.download=`suno-apothecary-${new Date().toISOString().slice(0,10)}.json`;a.click();URL.revokeObjectURL(href); }
export async function importVault(file:File){ const parsed=JSON.parse(await file.text()); if(parsed?.schema!==1||!Array.isArray(parsed.ingredients)||!Array.isArray(parsed.recipes)) throw new Error("This is not a Prompt Apothecary vault."); return {...parsed,archivedPrompts:Array.isArray(parsed.archivedPrompts)?migratePrompts(parsed.archivedPrompts):[],collections:Array.isArray(parsed.collections)&&parsed.collections.length?parsed.collections:initialVault.collections} as Vault; }
export const makeId=(prefix:string)=>typeof crypto.randomUUID==="function"?crypto.randomUUID():`${prefix}-${Date.now()}-${Math.random().toString(36).slice(2)}`;
