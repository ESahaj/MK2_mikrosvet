// Popisy vycházejí z dodaných zdrojů a určení uživatelkou.
const questions=[
  {
    "micro": "detail-zip.jpg",
    "macro": "macro-zip.svg",
    "answer": "Suchý zip",
    "english": "hook and loop",
    "czech": "suchý zip",
    "fact": "Drobné háčky se zachytí do oček. A drží!",
    "choices": [
      [
        "🍃",
        "List"
      ],
      [
        "👟",
        "Suchý zip"
      ],
      [
        "🪶",
        "Pírko"
      ]
    ],
    "correct": 1
  },
  {
    "micro": "detail-strawberry.jpg",
    "macro": "macro-strawberry.svg",
    "answer": "Jahoda",
    "english": "strawberry",
    "czech": "jahoda",
    "fact": "Na povrchu jahody jsou drobná zrníčka.",
    "choices": [
      [
        "🍓",
        "Jahoda"
      ],
      [
        "🍋",
        "Citron"
      ],
      [
        "🥒",
        "Okurka"
      ]
    ],
    "correct": 0
  },
  {
    "micro": "detail-pollen.webp",
    "macro": "macro-pollen.svg",
    "answer": "Pylové zrnko",
    "english": "pollen",
    "czech": "pyl",
    "fact": "Pyl najdeš v květech. Včelky ho sbírají.",
    "choices": [
      [
        "🫧",
        "Bublina"
      ],
      [
        "🪨",
        "Kamínek"
      ],
      [
        "🌼",
        "Pyl z květů"
      ]
    ],
    "correct": 2
  },
  {
    "micro": "detail-sugar.jpg",
    "macro": "macro-sugar.svg",
    "answer": "Cukr",
    "english": "sugar",
    "czech": "cukr",
    "fact": "Bílá i hnědá kostka cukru se skládá z krystalků.",
    "choices": [
      [
        "🧊",
        "Led"
      ],
      [
        "assets/macro-sugar.svg",
        "Cukr"
      ],
      [
        "🧽",
        "Houbička"
      ]
    ],
    "correct": 1
  },
  {
    "micro": "detail-leaf.jpg",
    "macro": "macro-leaf.svg",
    "answer": "List",
    "english": "leaf",
    "czech": "list",
    "fact": "Na listu jsou maličké otvory. Říkáme jim průduchy.",
    "choices": [
      [
        "🍃",
        "List"
      ],
      [
        "🪶",
        "Pírko"
      ],
      [
        "🍏",
        "Jablko"
      ]
    ],
    "correct": 0
  },
  {
    "micro": "detail-floss.jpg",
    "macro": "macro-floss.svg",
    "answer": "Zubní nit",
    "english": "dental floss",
    "czech": "zubní nit",
    "fact": "Zubní nit čistí místa mezi zuby.",
    "choices": [
      [
        "🧶",
        "Vlna"
      ],
      [
        "🕸️",
        "Pavučina"
      ],
      [
        "🦷",
        "Zubní nit"
      ]
    ],
    "correct": 2
  },
  {
    "micro": "detail-cauliflower.jpg",
    "macro": "macro-cauliflower.svg",
    "answer": "Květák",
    "english": "cauliflower",
    "czech": "květák",
    "fact": "Velká růžice květáku je složená z malých růžiček.",
    "choices": [
      [
        "assets/macro-cauliflower.svg",
        "Květák"
      ],
      [
        "🍇",
        "Hrozny"
      ],
      [
        "🌳",
        "Strom"
      ]
    ],
    "correct": 0
  },
  {
    "micro": "detail-match.jpg",
    "macro": "macro-match.svg",
    "answer": "Hlavička zápalky",
    "english": "match",
    "czech": "zápalka",
    "fact": "Zápalka má dřívko a malou hlavičku.",
    "choices": [
      [
        "🖍️",
        "Pastelka"
      ],
      [
        "🔥",
        "Zápalka"
      ],
      [
        "🍄",
        "Houba"
      ]
    ],
    "correct": 1
  },
  {
    "micro": "detail-wing.jpg",
    "macro": "macro-wing.svg",
    "answer": "Křídlo mouchy",
    "english": "wing",
    "czech": "křídlo",
    "fact": "I na křídle mouchy jsou drobné chloupky.",
    "choices": [
      [
        "🐟",
        "Šupina ryby"
      ],
      [
        "🪶",
        "Pírko"
      ],
      [
        "🪰",
        "Křídlo mouchy"
      ]
    ],
    "correct": 2
  },
  {
    "micro": "detail-mould.jpg",
    "macro": "macro-mould.svg",
    "answer": "Plíseň na chlebu",
    "english": "mould",
    "czech": "plíseň",
    "fact": "Pod mikroskopem vidíme jemná vlákna plísně.",
    "choices": [
      [
        "🍞",
        "Plíseň na chlebu"
      ],
      [
        "☁️",
        "Obláček"
      ],
      [
        "❄️",
        "Sněhová vločka"
      ]
    ],
    "correct": 0
  }
];
let index=0,solved=false;const $=id=>document.getElementById(id);
function render(){solved=false;const q=questions[index];$('step').textContent='Hádanka '+(index+1)+' z '+questions.length;$('stars').textContent='★'.repeat(index)+'☆'.repeat(questions.length-index);$('stars').setAttribute('aria-label','Objeveno '+index+' z '+questions.length);$('progress').max=questions.length;$('progress').value=index;$('guess').hidden=false;$('micro').src='assets/'+q.micro;$('feedback').textContent='';$('reveal').hidden=true;$('choices').replaceChildren();q.choices.forEach(([icon,label],i)=>{const b=document.createElement('button');b.className='choice';const e=document.createElement('span');e.className='icon';e.setAttribute('aria-hidden','true');if(icon.startsWith('assets/')){const image=document.createElement('img');image.src=icon;image.alt='';e.append(image);}else{e.textContent=icon;}b.append(e,document.createTextNode(label));b.onclick=()=>choose(i,b);$('choices').append(b)});$('next').textContent=index===questions.length-1?'Mám všechny objevy! ★':'Další objev →';}
function choose(i,b){if(solved)return;const q=questions[index];if(i!==q.correct){b.classList.add('wrong');b.disabled=true;$('feedback').textContent='Ještě to není ono. Zkus jiný obrázek. 🐾';return;}solved=true;$('macro').src='assets/'+q.macro;$('macro').alt=q.answer+' – ilustrace běžného pohledu';$('answer').textContent=q.answer;$('fact').textContent=q.fact;$('english').textContent='🇬🇧 '+q.english+' = '+q.czech;$('guess').hidden=true;$('reveal').hidden=false;$('answer').focus({preventScroll:true});keepGameVisible();$('stars').textContent='★'.repeat(index+1)+'☆'.repeat(questions.length-index-1);$('stars').setAttribute('aria-label','Objeveno '+(index+1)+' z '+questions.length);$('progress').value=index+1;}
$('next').onclick=()=>{if(!solved)return;if(index<questions.length-1){index++;render();$('question').focus({preventScroll:true});keepGameVisible();}else{$('play').hidden=true;$('finish').hidden=false;$('finish-text').textContent='Se Spottym jsi odhalil všech '+questions.length+' záhad!';$('finish-title').focus({preventScroll:true});keepGameVisible();}};
$('restart').onclick=()=>{index=0;$('finish').hidden=true;$('play').hidden=false;render();$('question').focus({preventScroll:true});keepGameVisible();};
$('read').onclick=()=>{if(!('speechSynthesis'in window)){$('feedback').textContent='Popros dospělého, ať ti přečte možnosti.';return;}speechSynthesis.cancel();const msg=new SpeechSynthesisUtterance('Co je na obrázku? '+questions[index].choices.map(x=>x[1]).join('. '));msg.lang='cs-CZ';msg.rate=.85;speechSynthesis.speak(msg);};
function keepGameVisible(){const game=document.querySelector('.game');if(game.getBoundingClientRect().top<0)game.scrollIntoView({block:'start',behavior:'instant'});}
render();
