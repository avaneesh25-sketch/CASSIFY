import React from 'react';

type Pose = 'idle' | 'walk' | 'reach' | 'greet' | 'point';
export const ProfessorCharacter: React.FC<{pose?: Pose; className?: string}> = ({pose='idle',className=''}) => (
  <svg viewBox="0 0 190 340" aria-label="Professor Cass, a friendly full-body animated guide" role="img" className={`prof-cass ${pose==='walk'?'prof-walk':''} ${className}`}>
    <defs>
      <linearGradient id="coat" x1="0" x2="1"><stop stopColor="#344c39"/><stop offset="1" stopColor="#14271c"/></linearGradient>
      <linearGradient id="face" x1="0" x2="1"><stop stopColor="#ffd9b2"/><stop offset="1" stopColor="#e7a87b"/></linearGradient>
      <linearGradient id="shoes"><stop stopColor="#5e392c"/><stop offset="1" stopColor="#281b1a"/></linearGradient>
    </defs>
    <ellipse cx="95" cy="326" rx="54" ry="8" fill="#000" opacity=".2"/>
    <g className="prof-person">
      <g className="prof-leg prof-leg-back">
        <path d="M96 213 Q111 235 113 271 L116 310 L93 311 Q87 275 80 240Z" fill="#303b37"/>
        <path d="M94 308 Q117 301 126 313 Q132 326 107 326 L89 322Z" fill="url(#shoes)"/>
      </g>
      <g className="prof-leg prof-leg-front">
        <path d="M69 214 Q65 240 62 274 L64 310 L87 312 Q88 266 94 238Z" fill="#43504a"/>
        <path d="M61 307 Q45 313 40 321 Q38 329 65 327 L89 321 L86 310Z" fill="url(#shoes)"/>
      </g>
      <g className="prof-torso">
        <path d="M64 111 Q80 101 109 111 Q137 120 140 151 L139 221 Q98 240 52 219 L50 152 Q52 123 64 111Z" fill="url(#coat)" stroke="#0e2117" strokeWidth="3"/>
        <path d="M83 116 L94 148 L106 116 L111 204 L77 204Z" fill="#f4ebde"/>
        <path d="M91 137 L96 145 L101 137 L100 154 L97 173 L91 154Z" fill="#c6fa58"/>
        <path d="M67 116 L86 150 L72 159 L94 220 L54 216Z" fill="#415b43"/>
        <path d="M122 118 L104 149 L119 161 L99 220 L136 218Z" fill="#28432e"/>
        <path d="M67 111 L85 139 L72 152 L63 143Z" fill="#56705a"/>
        <path d="M121 111 L105 140 L119 153 L129 143Z" fill="#46624d"/>
        <path d="M58 213 Q95 226 133 213" stroke="#c6fa58" strokeWidth="3" opacity=".55"/>
        <circle cx="100" cy="174" r="2.5" fill="#cfb45c"/><circle cx="100" cy="198" r="2.5" fill="#cfb45c"/>
        <g className="prof-arm prof-arm-left">
          <path d="M57 129 Q36 146 37 182 L44 220" stroke="#314b37" strokeWidth="24" strokeLinecap="round" fill="none"/>
          <path d="M44 215 Q39 236 51 241 Q63 233 54 214" fill="url(#face)"/>
          <path d="M40 212 L55 210" stroke="#f0e8db" strokeWidth="5"/>
        </g>
        <g className={`prof-arm prof-arm-right ${pose==='reach'?'prof-reaching':''} ${pose==='greet'||pose==='point'?'prof-waving':''}`}>
          <path d="M131 130 Q155 149 151 181 L145 213" stroke="#314b37" strokeWidth="24" strokeLinecap="round" fill="none"/>
          <path d="M137 210 Q143 233 155 222 Q160 211 153 206" fill="url(#face)"/>
          <path d="M138 209 L152 205" stroke="#f0e8db" strokeWidth="5"/>
        </g>
        <g className="prof-head">
          <path d="M85 96 L85 119 Q95 128 106 119 L106 94" fill="#edb487"/>
          <ellipse cx="94" cy="70" rx="40" ry="46" fill="url(#face)" stroke="#ae785c" strokeWidth="2"/>
          <ellipse cx="54" cy="78" rx="7" ry="11" fill="#e8ad86"/>
          <ellipse cx="134" cy="78" rx="7" ry="11" fill="#e8ad86"/>
          <path d="M56 65 Q45 30 70 21 Q90 5 116 19 Q139 21 136 61 L127 48 Q111 42 110 28 Q88 51 59 50Z" fill="#e7e4d6"/>
          <path d="M59 51 Q59 33 75 28 M118 29 Q132 39 130 57" stroke="#a4a99d" strokeWidth="6" fill="none"/>
          <path d="M64 67 Q75 58 87 67 M102 67 Q113 58 126 67" stroke="#655248" strokeWidth="3" fill="none"/>
          <ellipse cx="78" cy="73" rx="4" ry="5" fill="#263328"/><ellipse cx="111" cy="73" rx="4" ry="5" fill="#263328"/>
          <circle cx="79" cy="71" r="1.5" fill="white"/><circle cx="112" cy="71" r="1.5" fill="white"/>
          <rect x="65" y="62" width="24" height="22" rx="9" fill="none" stroke="#b69d50" strokeWidth="3"/>
          <rect x="100" y="62" width="24" height="22" rx="9" fill="none" stroke="#b69d50" strokeWidth="3"/>
          <path d="M89 72 Q94 68 100 72" stroke="#b69d50" strokeWidth="3" fill="none"/>
          <path d="M95 72 Q88 90 99 91" stroke="#c88865" strokeWidth="2.5" fill="none"/>
          <path d="M77 98 Q86 106 96 98 Q104 106 115 97" fill="#f9f0e3" stroke="#825e51" strokeWidth="2"/>
          <path d="M68 105 Q95 124 121 104" stroke="#d4ddd2" strokeWidth="5" fill="none"/>
          <path d="M54 34 L95 13 L137 33 L95 46Z" fill="#213329" stroke="#c6fa58" strokeWidth="2"/>
          <path d="M66 39 Q96 43 125 39 L120 48 Q92 57 69 47Z" fill="#24392b"/>
          <path d="M137 32 L141 57" stroke="#c6fa58" strokeWidth="3"/><circle cx="141" cy="59" r="5" fill="#c6fa58"/>
        </g>
      </g>
    </g>
  </svg>
);
