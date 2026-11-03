import React,{useEffect,useState} from 'react';
import {CaseItem} from '../data/cases';
import {Language,getCopy,LANGUAGES} from '../data/i18n';
import {ProfessorCharacter} from './ProfessorCharacter';

type Props = {
  caseItem:CaseItem|null; onClose:()=>void; savedAnswer?:number;
  onSelectAnswer:(id:number,answer:number)=>void;isUserSignedIn:boolean;
  language:Language;onLanguage:(language:Language)=>void;
};
export const GuidedCaseDialog:React.FC<Props> = ({
 caseItem,onClose,savedAnswer,onSelectAnswer,language,onLanguage
}) => {
 const [hint,setHint]=useState(0);
 const [selected,setSelected]=useState<number|undefined>(savedAnswer);
 const [notes,setNotes]=useState('');
 useEffect(()=> {setSelected(savedAnswer);setHint(0);setNotes('');},[caseItem?.id,savedAnswer]);
 useEffect(()=> {
   if(!caseItem)return;
   const onKey=(event:KeyboardEvent)=> {if(event.key==='Escape')onClose();};
   window.addEventListener('keydown',onKey);
   return()=>window.removeEventListener('keydown',onKey);
 },[caseItem,onClose]);
 if(!caseItem) return null;
 const c=getCopy(language);
 const first=caseItem.id===0;
 const choices=first?c.choices:caseItem.choices;
 const heading=first?c.caseTitle:caseItem.title;
 const brief=first?c.brief:caseItem.brief;
 const feedback=first?c.feedback:caseItem.feedback;
 const hasAnswered=selected!==undefined;
 const correct=selected===caseItem.answer;
 const advice=[c.stepOne,c.stepTwo,c.stepThree];
 return (
  <div className="fixed inset-0 z-[11000] bg-[#101b14]/90 backdrop-blur-lg overflow-y-auto p-3 sm:p-8" role="dialog" aria-modal="true" aria-labelledby="guided-case-title">
   <div className="max-w-5xl mx-auto rounded-[26px] bg-[#f8f9f4] border border-[#c6fa58]/40 shadow-[0_30px_100px_rgba(0,0,0,.4)] overflow-hidden">
    <header className="bg-[#172019] text-white p-5 sm:px-9 flex justify-between gap-3 items-center">
     <div><div className="text-[#c6fa58] font-black text-[10px] tracking-[.18em]">{first?c.first:caseItem.level}</div><h2 id="guided-case-title" className="text-xl sm:text-2xl font-bold mt-1">{heading}</h2></div>
     <div className="flex items-center gap-2">
      <label className="text-xs text-white/70" htmlFor="case-language">{c.change}</label>
      <select id="case-language" className="bg-[#304133] rounded-lg text-xs px-2 py-2 text-white" value={language} onChange={e=>onLanguage(e.target.value as Language)}>
       {LANGUAGES.map(l=><option key={l.code} value={l.code}>{l.native}</option>)}
      </select>
      <button onClick={onClose} aria-label="Close case" className="text-2xl w-9 h-9 rounded-full border border-white/20 hover:bg-white/10">×</button>
     </div>
    </header>
    <div className="grid md:grid-cols-[minmax(0,1fr)_285px]">
     <main className="p-5 sm:p-9">
      <div className="flex justify-between text-xs uppercase font-bold tracking-widest text-[#65715c] mb-4"><span>01 / DIAGNOSE</span><span>+{caseItem.xp} XP</span></div>
      <p className="text-[15px] sm:text-base leading-8 text-[#344235]">{brief}</p>
      {first&& <div className="grid grid-cols-2 gap-3 my-6">
        <div className="rounded-xl bg-[#e8eedc] p-4"><span className="text-xs block">REVENUE</span><strong className="text-lg">₹4L → ₹5L</strong></div>
        <div className="rounded-xl bg-[#f0e4d9] p-4"><span className="text-xs block">PROFIT</span><strong className="text-lg">₹80K → ₹50K</strong></div>
      </div>}
      <details className="my-5 rounded-xl border border-[#dce0d5] p-4 text-sm">
       <summary className="cursor-pointer font-bold">{c.response} / Working notes</summary>
       <textarea value={notes} onChange={e=>setNotes(e.target.value)} rows={3} className="w-full mt-3 p-3 rounded-lg border border-[#c6cdbd] bg-white" placeholder="Calculate margins, outline hypotheses, and test your reasoning…"/>
       <p className="text-[11px] text-[#687366] mt-2">Scratchpad only. Your notes are not submitted or graded by AI.</p>
      </details>
      <h3 className="text-lg font-extrabold mb-3">{c.question}</h3>
      <div className="grid gap-3">
       {choices.map((choice,index)=><button key={index} type="button" onClick={()=>{setSelected(index);onSelectAnswer(caseItem.id,index);}}
         className={`text-left rounded-xl border-2 p-4 transition-colors ${selected===index?'bg-[#e7f7d2] border-[#75a138]':'bg-white border-[#dce0d5] hover:border-[#9cc15e]'}`}>
         <span className="inline-grid place-items-center w-7 h-7 rounded-full bg-[#172019] text-white text-xs font-bold mr-3">{String.fromCharCode(65+index)}</span>{choice}
       </button>)}
      </div>
      {hasAnswered&&<div className={`rounded-xl p-5 mt-5 border ${correct?'bg-[#e4f7cb] border-[#8cae63]':'bg-[#fff1e6] border-[#e8bb88]'}`} role="status">
       <strong>{correct?c.correct:c.incorrect}</strong>
       {correct&&<p className="text-sm mt-2 leading-7">{feedback}</p>}
       {correct&&<p className="mt-3 text-sm font-bold">✓ {c.complete} · +{caseItem.xp} XP</p>}
       {!correct&&<p className="text-sm mt-2">{c.tryAgain}</p>}
      </div>}
      <p className="text-xs text-[#647160] mt-5">{c.locally}</p>
     </main>
     <aside className="p-5 sm:p-6 bg-[#eaf0dc] border-l border-[#dce0d5] flex flex-col">
      <div className="h-[205px] overflow-hidden flex justify-center items-end">
       <ProfessorCharacter pose={hint>0?'point':'idle'} className="h-[198px] w-auto"/>
      </div>
      <p className="text-[11px] tracking-[.14em] font-black text-[#536942] mt-3">{c.mentor}</p>
      <div className="bg-white rounded-2xl p-4 mt-3 border border-[#d5dfc7] shadow-sm">
       <strong className="text-sm">{c.mentor} · {c.tip}</strong>
       <p aria-live="polite" className="text-[13px] leading-6 mt-2">{hint===0 ? `${c.welcome} ${c.stepOne} ${c.question}` : advice[Math.max(0,hint-1)]}</p>
      </div>
      <button type="button" onClick={()=>setHint(v=>Math.min(3,v+1))} disabled={hint>=3}
       className="rounded-xl mt-4 bg-[#172019] text-[#c6fa58] p-3 text-sm font-bold disabled:opacity-50">
       {hint===0?c.hint:c.moreHint} {hint>0?`(${hint}/3)`:''}
      </button>
      <p className="text-xs text-[#65745d] mt-3">Choose an option above. I’ll guide your reasoning, not just reveal the answer.</p>
     </aside>
    </div>
   </div>
  </div>
 );
};
