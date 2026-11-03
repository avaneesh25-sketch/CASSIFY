import React, { useEffect, useState } from 'react';
import { ProfessorCharacter } from './ProfessorCharacter';
import { LANGUAGES, Language, getCopy } from '../data/i18n';

type Stage = 'language'|'inside'|'handle'|'open'|'walk'|'greet'|'suction'|'exit';
export const IntroSequence: React.FC<{
  language: Language;
  onLanguage: (language: Language) => void;
  onComplete: () => void;
}> = ({language,onLanguage,onComplete}) => {
  const [stage,setStage] = useState<Stage>('language');
  const [selected,setSelected] = useState<Language>(language);
  const copy = getCopy(selected);
  useEffect(() => {
    if(stage==='language') return;
    const timeouts: Record<Exclude<Stage,'language'>,number> = {
      inside: 800,handle:900,open:1350,walk:1800,greet:1100,suction:1250,exit:100
    };
    const next: Record<Exclude<Stage,'language'>,Stage> = {
      inside:'handle',handle:'open',open:'walk',walk:'greet',greet:'suction',suction:'exit',exit:'exit'
    };
    const timeout=window.setTimeout(()=> {
      if(stage==='exit') onComplete();
      else setStage(next[stage]);
    },timeouts[stage]);
    return ()=>window.clearTimeout(timeout);
  },[stage,onComplete]);
  useEffect(() => {
    const onKey=(event:KeyboardEvent) => { if(event.key==='Escape' && stage!=='language') onComplete(); };
    window.addEventListener('keydown',onKey);return()=>window.removeEventListener('keydown',onKey);
  },[stage,onComplete]);
  const begin = () => {onLanguage(selected);setStage('inside');};
  const open = stage==='open'||stage==='walk'||stage==='greet'||stage==='exit';
  return (
    <div className={`fixed inset-0 z-[10000] bg-[#0c100d] text-[#f8f9f4] overflow-y-auto cassify-intro-stage ${stage==='suction'||stage==='exit'?'cassify-portal-zoom':''}`} role="dialog" aria-modal="true" aria-label={stage==='language'?copy.choose:copy.welcome}>
      <div className="cassify-solar-field absolute inset-0 overflow-hidden pointer-events-none">
        <div className="cassify-solar-core"/><div className="cassify-solar-orbit cassify-solar-orbit-a"/><div className="cassify-solar-orbit cassify-solar-orbit-b"/><div className="cassify-solar-orbit cassify-solar-orbit-c"/>
        
      </div>
      {stage==='language' ? (
        <div className="relative z-10 min-h-screen flex items-center justify-center p-5">
          <section className="w-full max-w-[620px] rounded-[28px] border border-[#c6fa58]/30 bg-[#172019]/95 shadow-[0_35px_120px_rgba(0,0,0,.65)] p-6 sm:p-10">
            <div className="text-[#c6fa58] font-black tracking-[.24em] text-xs mb-5">CASSIFY / FIRST ENTRY</div>
            <h1 className="text-3xl sm:text-5xl font-bold leading-tight tracking-tight">{copy.choose}</h1>
            <p className="text-[#c2cbbb] mt-3 mb-7 text-sm sm:text-base">{copy.subtitle}</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3" role="group" aria-label={copy.choose}>
              {LANGUAGES.map(item=>(
                <button key={item.code} type="button" onClick={()=>setSelected(item.code)}
                  aria-pressed={selected===item.code}
                  className={`rounded-2xl border p-4 text-left transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#c6fa58] ${selected===item.code?'bg-[#c6fa58] text-[#172019] border-[#c6fa58] scale-[1.02]':'bg-white/5 border-white/15 hover:border-[#c6fa58]/60'}`}>
                  <span className="block text-base font-bold">{item.native}</span><span className="block text-xs opacity-70 mt-1">{item.english}</span>
                </button>
              ))}
            </div>
            <button onClick={begin} className="w-full rounded-xl bg-[#c6fa58] text-[#172019] font-extrabold text-base mt-7 p-4 hover:bg-[#b8ed4e]">{copy.continue} <span aria-hidden="true">→</span></button>
          </section>
        </div>
      ) : (
        <div className="relative z-10 min-h-screen flex flex-col justify-center items-center px-4 py-12">
          <button onClick={onComplete} className="absolute right-5 top-5 text-xs rounded-full border border-white/30 px-4 py-2 hover:bg-white/10">{copy.skip}</button>
          <div className="cassify-portal-scene relative w-[280px] h-[465px] sm:w-[390px] sm:h-[550px] flex justify-center items-end">
            <div className="absolute left-1/2 -translate-x-1/2 bottom-7 w-[200px] h-[355px] sm:w-[245px] sm:h-[420px] rounded-t-[130px] border-[11px] border-[#526d4a] shadow-[0_0_90px_rgba(198,250,88,.25)] bg-[#19281e] overflow-visible" style={{perspective:'1100px'}}>
              <div className={`absolute inset-0 rounded-t-full bg-gradient-to-b from-[#fff7d9] via-[#c6fa58] to-[#688b44] transition-opacity duration-1000 ${open?'opacity-100':'opacity-0'}`}/>
              <div className={`cassify-door absolute inset-0 rounded-t-full border-[4px] border-[#74593d] bg-gradient-to-r from-[#533d2c] via-[#846044] to-[#493324] shadow-2xl ${open?'cassify-door-open':''}`}>
                <div className="absolute inset-4 rounded-t-full border-2 border-[#ae8660]/70"/>
                <div className="absolute top-1/3 left-7 right-7 bottom-12 border border-[#a67c54]/55 rounded-md"/>
                <div className="absolute right-4 top-1/2 w-4 h-10 rounded-full bg-[#dfc16b] shadow-lg">
                  <div className={`absolute top-1 left-1 w-2 h-8 bg-[#91702e] rounded-full ${stage==='handle'?'animate-pulse':''}`}/>
                </div>
              </div>
            </div>
            <div className={`absolute bottom-0 left-1/2 w-[165px] sm:w-[200px] cassify-professor-motion ${stage}`}>
              <ProfessorCharacter pose={stage==='handle'?'reach':stage==='walk'?'walk':stage==='greet'?'greet':'idle'} className="w-full h-auto drop-shadow-[0_20px_20px_rgba(0,0,0,.55)]"/>
            </div>
          </div>
          <div className="max-w-[520px] min-h-[110px] mt-3 text-center">
            <div className="text-[11px] font-black text-[#c6fa58] tracking-[.25em] mb-2">PROFESSOR CASS</div>
            <p className="text-xl sm:text-2xl font-semibold">{stage==='greet'||stage==='exit'?copy.ready:copy.welcome}</p>
            <p className="text-xs text-white/55 mt-3">LEVEL 01 / THE ROOKIE</p>
          </div>
        </div>
      )}
    </div>
  );
};
