import type { Ingredient, Vault } from "./types";
const now="2026-08-08T00:00:00.000Z";
const seed=(id:string,name:string,phrase:string,kind:Ingredient["kind"],notes=""):Ingredient=>({id,name,phrase,kind,notes,favorite:false,uses:0,createdAt:now});
export const initialVault:Vault={schema:1,collections:["Sisters of Freya","SUBINAC","Sleep Magic","Experiments"],recipes:[],archivedPrompts:[],ingredients:[
 seed("norse-boom","Norse Boom Bap","Nordic ritual boom bap with colossal dusty drums","Genre"),
 seed("shadow-jazz","Shadow Jazz","nocturnal spiritual jazz drifting through a candlelit chamber","Genre"),
 seed("cinematic-ambient","Cinematic Ambient","vast cinematic dark ambient with patient harmonic movement","Genre"),
 seed("sacred-sensual","Sacred Sensuality","sacred, intimate, feminine and quietly magnetic","Mood"),
 seed("shieldmaiden","Shieldmaiden Resolve","unyielding shieldmaiden resolve beneath serene control","Mood"),
 seed("aurora","Aurora Wonder","glacial wonder illuminated by slow aurora light","Mood"),
 seed("war-horns","Distant War Horns","distant Nordic war horns answering across a frozen valley","Instrument"),
 seed("tagelharpa","Tagelharpa","bowed tagelharpa drones with ancient wooden resonance","Instrument"),
 seed("glass-harmonica","Glass Harmonica","ethereal glass harmonica circling above the mix","Instrument"),
 seed("frame-drums","Frame Drums","deep hand-played frame drums with human pulse","Rhythm"),
 seed("headnod","Head-Nod Drums","heavy 86 BPM head-nod drums, loose swing, hard pocket","Rhythm"),
 seed("goddess-whisper","Goddess Whisper","warm adult feminine whispers, intimate and composed","Voice"),
 seed("valkyrie-choir","Valkyrie Choir","layered adult female choir, powerful without operatic excess","Voice"),
 seed("spoken-oracle","Spoken Oracle","low, intelligent feminine spoken word with deliberate silence","Voice"),
 seed("snow-texture","Snow and Wind","fine wind, distant snow and breathing room between notes","Texture"),
 seed("vinyl","Ancient Vinyl","subtle vinyl patina and tape warmth, never lo-fi muddy","Texture"),
 seed("wide-master","Wide Cinematic Master","wide deep mix, controlled sub bass, detailed transients","Production"),
 seed("organic","Organic Imperfection","human timing, organic dynamics, no plastic quantization","Production"),
 seed("slow-bloom","Slow Bloom","slow-blooming introduction, two evolving movements, seamless return","Structure"),
 seed("no-cheese","No Fantasy Clichés","no trailer braams, no tavern cheer, no cartoon Viking clichés","Exclusion")
]};
