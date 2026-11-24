(() => {
'use strict';
const COURSE = window.SCIT_COURSE;
if (!Array.isArray(COURSE) || COURSE.length !== 14) {
  document.getElementById('view').textContent = 'The curriculum could not load. Refresh the page.';
  return;
}
const KEY = 'scit:v1:progress';
const $ = (selector, base = document) => base.querySelector(selector);
const $$ = (selector, base = document) => [...base.querySelectorAll(selector)];
const esc = (s = '') => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let state;
try { state = JSON.parse(localStorage.getItem(KEY) || '{}'); } catch { state = {}; }
if (!state || typeof state !== 'object') state = {};
if (!state.modules || typeof state.modules !== 'object') state.modules = {};
let activeFilter = 'all';
let simPicked = null;
let simCorrect = false;
let videoLoadedFor = null;
const validID = id => COURSE.some(m => m.id === id);
const defaults = () => ({stage:0,labDone:false,watched:false,checks:[false,false,false],notes:'',score:null,quizAnswers:{}});
const rec = id => {
  if (!state.modules[id]) state.modules[id] = defaults();
  const r = state.modules[id];
  if (!Array.isArray(r.checks)) r.checks = [false,false,false];
  if (!r.quizAnswers || typeof r.quizAnswers !== 'object') r.quizAnswers = {};
  r.stage = Math.min(3, Math.max(0, Number(r.stage) || 0));
  return r;
};
const persist = () => {
  try { localStorage.setItem(KEY,JSON.stringify(state)); }
  catch { /* Browser storage may be unavailable; course remains usable until refresh. */ }
};
const complete = id => {
  const r = rec(id);
  return !!r.watched && !!r.labDone && typeof r.score === 'number' && r.score >= 2;
};
const completed = () => COURSE.filter(m => complete(m.id)).length;
const totalPct = () => Math.round(completed()/COURSE.length*100);
const route = () => {
  const raw = decodeURIComponent(location.hash.slice(1));
  if (raw === 'report') return {type:'report'};
  if (raw.startsWith('lesson/')) {
    const id = raw.slice(7);
    if(validID(id)) return {type:'lesson',id};
  }
  return {type:'home'};
};
const navTo = val => { location.hash = val; if(route().type === 'home') render(); };
const doneLabel = id => complete(id) ? 'Completed' : 'In progress';
function updateSidebar() {
  const pct = totalPct();
  $('#sidebar-progress').textContent = pct + '%';
  $('#sidebar-progress-bar').style.width = pct + '%';
  $('#sidebar-complete').textContent = completed() + ' of 14 lessons completed';
  const routeNow = route();
  const nav = $('#module-nav');
  const filtered = COURSE.filter(m => activeFilter === 'all' || (activeFilter === 'completed' ? complete(m.id) : !complete(m.id)));
  nav.innerHTML = filtered.length ? filtered.map(m => {
    const isActive = routeNow.type === 'lesson' && routeNow.id === m.id;
    return `<button type="button" data-lesson="${esc(m.id)}" class="module-link ${isActive ? 'active':''} ${complete(m.id)?'done':''}" ${isActive?'aria-current="page"':''}>
      <span class="num">${complete(m.id) ? '✓' : String(m.day).padStart(2,'0')}</span>
      <span><strong>${esc(m.title)}</strong><small>Day ${m.day} / ${esc(m.category)} ${complete(m.id)?'/ Done':''}</small></span>
    </button>`;
  }).join('') : '<p style="padding:16px;color:#a7c4bd;font-size:12px">No lessons in this filter.</p>';
  $$('.filter').forEach(b => {
    const yes = b.dataset.filter === activeFilter;
    b.classList.toggle('active',yes);
    b.setAttribute('aria-pressed',yes?'true':'false');
  });
}
function home() {
  const done = completed();
  const next = COURSE.find(m => !complete(m.id)) || COURSE[COURSE.length-1];
  const last = COURSE.length - done;
  return `<div class="crumb">43Dou learning systems / SCIT</div>
  <div class="home-hero">
   <div><div class="tiny-label" style="color:var(--teal)">YOUR 14-DAY SKILL REFRESHER</div>
    <h1>Back in the field.<br><span>Sharper than ever.</span></h1>
    <p class="lead">You already know how to troubleshoot. SCIT sharpens the enterprise tools, hospital support decisions and Windows deployment skills needed for the Southcoast Health Personal Computer Technician interview.</p>
    <div class="hero-actions"><button class="button button-primary" data-lesson="${esc(next.id)}">${done ? 'Continue training' : 'Start day one'} <span aria-hidden="true">→</span></button><button class="button button-secondary" data-action="report">View readiness report</button></div>
   </div>
   <div class="stats-panel"><span class="tiny-label">INTERVIEW PREP / PROGRESS</span><div class="stat-big">${String(done).padStart(2,'0')}<span class="stat-unit">/14</span></div><div class="tiny-label">LESSONS COMPLETED</div><div class="stat-foot">${last===0?'All training modules completed. Review your weak topics before interview day.':last+' modules remain. Watch, investigate, practice, and pass each knowledge check.'}</div></div>
  </div>
  <div class="section-top"><div><span class="tiny-label" style="color:var(--teal)">THE CURRICULUM</span><h2>14 days. Real support skills.</h2></div><p class="section-note">Video first. Short reading second. Interactive lab, practical checklist and scored knowledge check in every module.</p></div>
  <div class="overview-grid">${COURSE.map(m => `<button type="button" class="overview-card" data-lesson="${esc(m.id)}"><div class="card-meta"><span class="round-icon">${complete(m.id)?'✓':String(m.day).padStart(2,'0')}</span><span class="card-time">${m.mins} MIN / ${complete(m.id)?'COMPLETE':'DAY '+m.day}</span></div><strong>${esc(m.title)}</strong><p>${esc(m.summary)}</p></button>`).join('')}</div>
  <div class="scope-box"><strong>Made for your experience.</strong> SCIT builds on your years at LogMeIn, Experian, MA2K and other support roles. It emphasizes hands-on diagnostics instead of beginner-only theory. Scenarios are fictional and no real hospital systems or patient data are used.</div>`;
}
function readHTML(m) {
 return `<section class="content-card" id="reading">
   <p class="tiny-label">02 / SHORT READING</p><h2>Know the why.</h2><p class="card-intro">Three practical takeaways before you work the ticket.</p>
   <div class="reading-grid">${m.notes.map(([title,body]) => `<div class="reading-block"><strong>${esc(title)}</strong><p>${esc(body)}</p></div>`).join('')}</div>
 </section>`;
}
function videoHTML(m,r) {
 return `<section class="content-card" id="watch">
   <p class="tiny-label">01 / WATCH FIRST</p><h2>See the workflow.</h2>
   <p class="card-intro">${esc(m.videoTitle)} by ${esc(m.channel)}. Follow along, pausing to practice whenever useful.</p>
   <div class="video-frame" id="player-container">${videoLoadedFor === m.id ?
     `<iframe src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(m.video)}?rel=0" title="${esc(m.videoTitle)}" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture;web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen loading="lazy"></iframe>` :
     `<button class="video-poster" type="button" data-action="load-video" data-id="${esc(m.id)}" aria-label="Play training video"><span class="play">▶</span><span>Play ${esc(m.channel)} tutorial</span></button>`}
   </div>
   <div class="resource-list">
    <a class="resource-link" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=${encodeURIComponent(m.video)}">Watch on YouTube ↗</a>
    ${m.reading.map(([label,url]) => `<a class="resource-link" target="_blank" rel="noopener noreferrer" href="${esc(url)}">${esc(label)} ↗</a>`).join('')}
   </div>
   <p class="video-hint">Videos are from independent or official sources. Playback may be restricted by the creator; the direct YouTube link remains available. Watching isn't automatically tracked.</p>
   <div style="margin-top:15px"><button class="button ${r.watched?'button-green':'button-secondary'} button-small" data-action="mark-video" data-id="${esc(m.id)}">${r.watched ? '✓ Video reviewed' : 'Mark video as reviewed'}</button></div>
 </section>`;
}
function labHTML(m,r) {
 const idx=r.stage;
 const isDone=r.labDone || idx>=3;
 let interactive;
 if(isDone) interactive=`<div class="complete-state">✓ Simulation passed. You navigated all three troubleshooting decisions.</div><div style="margin-top:13px"><button class="button button-secondary button-small" data-action="retry-lab">Run the simulation again</button></div>`;
 else {
  const s=m.lab.steps[idx];
  const message = simPicked === null ? '' : `<div class="feedback ${simCorrect?'good':'bad'}"><strong>${simCorrect?'Correct diagnosis.':'Not the best next step.'}</strong> ${simCorrect ? esc(s.why) : 'Review the symptoms and try again. Use the safest evidence-based action.'}</div>`;
  interactive=`<div class="lab-stage-top"><span class="lab-count">DECISION ${idx+1} OF 3</span><span class="pill gray">${esc(m.category)}</span></div>
  <p class="lab-prompt">${esc(s.prompt)}</p>
  <div class="option-grid">${s.options.map((o,i)=>`<button type="button" class="option ${simPicked === i ? (simCorrect?'correct':'wrong'):''}" ${simCorrect?'disabled':''} data-action="lab-choice" data-choice="${i}">${esc(o)}</button>`).join('')}</div>
  ${message}
  ${simCorrect ? `<div class="lab-navigation"><button class="button button-primary button-small" data-action="next-lab">${idx===2?'Complete simulation':'Next decision'} →</button></div>` : ''}`;
 }
 return `<section class="content-card" id="simulation"><p class="tiny-label">03 / INTERACTIVE SUPPORT TICKET</p><h2>Make the call.</h2>
 <p class="card-intro">Treat this like a shift on the help desk. Choose the most appropriate next step. Incorrect decisions can be retried.</p>
 <div class="lab-context"><strong>INCOMING INCIDENT</strong>${esc(m.lab.brief)}</div>
 ${interactive}
 </section>
 <section class="content-card" id="practice"><p class="tiny-label">04 / REAL-WORLD PRACTICE</p><h2>Practice on your own terms.</h2><p class="card-intro">Optional guided activities for your own computer, a spare device or an isolated lab. Do not change employer systems without authorization.</p>
 <div class="practice-list">${m.lab.practice.map((p,i)=>`<label class="practice-check"><input type="checkbox" data-check="${i}" ${r.checks[i]?'checked':''}><span>${esc(p)}</span></label>`).join('')}</div>
 <label class="lab-notes-label" for="lab-notes">${esc(m.lab.notePrompt)}</label>
 <textarea id="lab-notes" class="lab-notes" maxlength="5000" placeholder="Write your troubleshooting notes here. They are stored only in this browser.">${esc(r.notes||'')}</textarea>
 <p class="video-hint" id="notes-status">Notes save automatically in this browser.</p>
 </section>`;
}
function quizHTML(m,r) {
 const checked = r.quizAnswers || {};
 return `<section class="content-card" id="knowledge"><p class="tiny-label">05 / KNOWLEDGE CHECK</p><h2>Prove you know it.</h2><p class="card-intro">Three questions. Score at least 2 out of 3 to pass. Retake as often as needed.</p>
 <form id="quiz-form" novalidate>
  ${m.quiz.map((q,qi)=> `<fieldset class="quiz-question" style="border:0;border-bottom:1px solid var(--line);padding:16px 0;margin:0">
    <legend>${qi+1}. ${esc(q.prompt)}</legend>
    ${q.options.map((opt,oi)=>`<label class="quiz-choice"><input type="radio" name="q${qi}" value="${oi}" ${Number(checked[qi])===oi && checked[qi]!==undefined?'checked':''} ${typeof r.score==='number'?'disabled':''}><span>${esc(opt)}</span></label>`).join('')}
    ${typeof r.score==='number' ? `<div class="quiz-answer">${Number(checked[qi])===q.correct?'✓ Correct.':'✕ Review.'} ${esc(q.why)}</div>`:''}
   </fieldset>`).join('')}
  ${typeof r.score==='number' ?
    `<div class="quiz-score"><strong>${r.score}/3</strong><span>${r.score>=2?'Knowledge check passed.':'Keep practicing. Review the lesson and retake the quiz.'}</span></div><div style="margin-top:15px"><button class="button button-secondary button-small" type="button" data-action="retake-quiz">Retake quiz</button></div>` :
    `<div style="margin-top:17px"><button class="button button-primary" type="submit">Grade knowledge check →</button><p id="quiz-error" class="video-hint" role="status">Answer all three questions before submitting.</p></div>`}
  </form>
 </section>`;
}
function lesson(m) {
 const r=rec(m.id);const done=complete(m.id);const next=COURSE[m.day];
 return `<div class="crumb"><a href="#home" style="color:inherit;text-decoration:none">SCIT curriculum</a> / Day ${m.day} of 14</div>
 <div class="lesson-header"><span class="tiny-label" style="color:var(--teal)">DAY ${String(m.day).padStart(2,'0')} / ${esc(m.category.toUpperCase())}</span>
 <h1>${esc(m.title)}</h1><p class="lead">${esc(m.summary)}</p>
 <div class="lesson-subline"><span class="pill">${esc(m.level)}</span><span class="pill gray">~${m.mins} min</span><span class="pill gray">${done ? '✓ Completed' : 'In progress'}</span></div></div>
 <div class="lesson-layout"><div class="lesson-main">
 <nav class="checkpoint-nav" aria-label="Lesson checkpoints"><a href="#watch" data-jump="watch">Watch</a><a href="#reading" data-jump="reading">Read</a><a href="#simulation" data-jump="simulation">Simulate</a><a href="#practice" data-jump="practice">Practice</a><a href="#knowledge" data-jump="knowledge">Test</a></nav>
 ${videoHTML(m,r)}${readHTML(m)}${labHTML(m,r)}${quizHTML(m,r)}
 ${done ? '<div class="complete-state">✓ Lesson passed. Video reviewed, troubleshooting simulation passed, and knowledge check passed.</div>' : '<div class="scope-box"><strong>To complete this lesson:</strong> mark the video reviewed, pass all three simulation decisions, and score at least 2/3 on the quiz. Real-device exercises are optional but recommended.</div>'}
 <div class="module-footer"><button class="button button-secondary" type="button" data-action="home">← Curriculum</button>${next ? `<button class="button button-primary" type="button" data-lesson="${esc(next.id)}">Day ${next.day}: ${esc(next.category)} →</button>` : '<button class="button button-primary" type="button" data-action="report">View readiness report →</button>'}</div></div>
 <aside class="lesson-side"><div class="lesson-mini"><p class="tiny-label" style="color:var(--teal)">YOUR CHECKPOINTS</p><h3>Lesson status</h3><ul class="track-list"><li><span>Video reviewed</span><span class="${r.watched?'mark':'pending'}">${r.watched?'✓':'○'}</span></li><li><span>Simulation</span><span class="${r.labDone?'mark':'pending'}">${r.labDone?'✓':r.stage+'/3'}</span></li><li><span>Knowledge check</span><span class="${r.score>=2?'mark':'pending'}">${r.score===null?'○':r.score+'/3'}</span></li><li><span>Optional practice</span><span class="mark">${r.checks.filter(Boolean).length}/3</span></li></ul></div>
 <div class="lesson-mini"><p class="tiny-label" style="color:var(--teal)">WHY THIS MATTERS</p><h3>Southcoast fit</h3><p>The posted role calls for end-user support across devices, applications, networking, operating systems, hardware, installations and configurations. This lesson reinforces part of that technical scope.</p></div>
 <div class="lesson-mini"><p class="tiny-label" style="color:var(--teal)">SAFE PRACTICE</p><h3>Lab rules</h3><p>Do not use patient information, hospital accounts or production devices. Simulations use fictional data. Device changes belong only in your personal or authorized lab environment.</p></div></aside></div>`;
}
function report() {
 const done=completed();
 const passed=COURSE.filter(m=>rec(m.id).score>=2).length;
 const labbed=COURSE.filter(m=>rec(m.id).labDone).length;
 const avg=COURSE.map(m=>rec(m.id).score).filter(x=>typeof x === 'number');
 const avgScore=avg.length ? Math.round(avg.reduce((a,b)=>a+b,0)/avg.length/3*100) : 0;
 const weak=COURSE.filter(m=>typeof rec(m.id).score==='number' && rec(m.id).score<2);
 return `<div class="crumb"><a href="#home" style="color:inherit;text-decoration:none">SCIT curriculum</a> / Your progress</div>
 <div class="lesson-header"><p class="tiny-label" style="color:var(--teal)">INTERVIEW READINESS REPORT</p><h1>Measure your <span>momentum.</span></h1><p class="lead">Scores reflect practice inside this independent learning app, not a professional certification or a guarantee of job readiness.</p></div>
 <div class="progress-report"><div class="report-tile"><strong>${done}/14</strong><small>Lessons completed</small></div><div class="report-tile"><strong>${labbed}/14</strong><small>Simulations passed</small></div><div class="report-tile"><strong>${avgScore}%</strong><small>Average quiz accuracy (${avg.length} graded)</small></div></div>
 <section class="content-card" style="margin-top:25px"><p class="tiny-label">LESSON RESULTS</p><h2>Where you stand.</h2>
 ${COURSE.map(m=>{const r=rec(m.id);return `<div class="report-row"><div><strong>${String(m.day).padStart(2,'0')} / ${esc(m.title)}</strong><br><span>${esc(m.category)}</span></div><div style="display:flex;gap:10px;align-items:center"><span>${r.score===null?'Not tested':r.score+'/3'}</span><button class="button button-secondary button-small" data-lesson="${esc(m.id)}">${complete(m.id)?'Review':'Study'}</button></div></div>`}).join('')}
 </section>
 ${weak.length ? `<div class="scope-box"><strong>Focus your review:</strong> ${weak.map(m=>esc(m.title)).join('; ')}. Revisit these quizzes before the interview.</div>` : ''}
 <div class="hero-actions"><button class="button button-primary" type="button" data-action="download-report">Download progress summary ↓</button><button class="button button-secondary" type="button" data-action="home">Return to curriculum</button></div>`;
}
function render(opts={}) {
 const r=route();
 updateSidebar();
 if (r.type === 'home') $('#view').innerHTML=home();
 else if(r.type === 'report') $('#view').innerHTML=report();
 else $('#view').innerHTML=lesson(COURSE.find(m=>m.id===r.id));
 if (opts.anchor) {
   const target=document.getElementById(opts.anchor);
   if(target) target.scrollIntoView({block:'start',behavior:'instant'});
 } else if(!opts.stay) window.scrollTo({top:0,behavior:'instant'});
}
function handleLabChoice(target) {
 const id=route().id,m=COURSE.find(x=>x.id===id),r=rec(id);
 if(r.labDone||simCorrect)return;
 simPicked=Number(target.dataset.choice);
 simCorrect = simPicked===m.lab.steps[r.stage].correct;
 render({anchor:'simulation'});
}
function handleNextLab() {
 if(!simCorrect)return;
 const id=route().id,r=rec(id);
 r.stage = Math.min(3,r.stage+1);
 if(r.stage===3)r.labDone=true;
 simPicked=null;simCorrect=false;
 persist();render({anchor:'simulation'});
}
function gradeQuiz() {
 const id=route().id,m=COURSE.find(x=>x.id===id),r=rec(id);
 const data = new FormData($('#quiz-form'));
 const answers={};
 for(let i=0;i<3;i++){
   if(!data.has('q'+i)){const err=$('#quiz-error');if(err){err.style.color='#b15341';err.textContent='Please answer all three questions before grading.';}return;}
   answers[i]=Number(data.get('q'+i));
 }
 r.quizAnswers=answers;
 r.score=m.quiz.reduce((sum,q,i)=>sum+(q.correct===answers[i]?1:0),0);
 persist();render({anchor:'knowledge'});
}
function downloadReport(){
 const lines=['SCIT | 43Dou IT Training','Self-paced learning progress summary',new Date().toLocaleString(),'','Completed: '+completed()+'/14',''];
 for(const m of COURSE){const r=rec(m.id);lines.push('Day '+m.day+' | '+m.title+' | Video: '+(r.watched?'reviewed':'not marked')+' | Simulation: '+(r.labDone?'passed':'pending')+' | Quiz: '+(r.score===null?'not graded':r.score+'/3')+' | Completed: '+(complete(m.id)?'yes':'no'));if(r.notes)lines.push('Lab notes: '+r.notes.replace(/[\r\n]+/g,' '));}
 lines.push('','Not an official training certificate. No employer data should be entered in this file.');
 const blob=new Blob([lines.join('\n')],{type:'text/plain;charset=utf-8'});
 const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='SCIT-learning-progress.txt';document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);
}
document.addEventListener('click',event=>{
 const el=event.target.closest('button,a');
 if(!el)return;
 if(el.dataset.lesson){event.preventDefault();simPicked=null;simCorrect=false;videoLoadedFor=null;navTo('lesson/'+el.dataset.lesson);$('#course-sidebar').classList.remove('open');$('#menu-toggle').setAttribute('aria-expanded','false');return;}
 if(el.dataset.filter){activeFilter=el.dataset.filter;updateSidebar();return;}
 if(el.dataset.jump){event.preventDefault();const node=document.getElementById(el.dataset.jump);if(node)node.scrollIntoView({behavior:'smooth',block:'start'});return;}
 const action=el.dataset.action;
 if(!action)return;
 if(action==='home'){navTo('home');return;}
 if(action==='report'){navTo('report');return;}
 if(action==='load-video'){videoLoadedFor=el.dataset.id;render({anchor:'watch'});return;}
 if(action==='mark-video'){const r=rec(el.dataset.id);r.watched=!r.watched;persist();render({anchor:'watch'});return;}
 if(action==='lab-choice'){handleLabChoice(el);return;}
 if(action==='next-lab'){handleNextLab();return;}
 if(action==='retry-lab'){const r=rec(route().id);r.stage=0;r.labDone=false;simPicked=null;simCorrect=false;persist();render({anchor:'simulation'});return;}
 if(action==='retake-quiz'){const r=rec(route().id);r.score=null;r.quizAnswers={};persist();render({anchor:'knowledge'});return;}
 if(action==='download-report'){downloadReport();return;}
});
document.addEventListener('change',event=>{
 if(event.target.matches('[data-check]')&&route().type==='lesson'){
  const r=rec(route().id),idx=Number(event.target.dataset.check);r.checks[idx]=event.target.checked;persist();updateSidebar();
 }
});
document.addEventListener('input',event=>{
 if(event.target.id==='lab-notes'&&route().type==='lesson'){
  rec(route().id).notes=event.target.value;persist();
  const status=$('#notes-status');if(status)status.textContent='Saved to this browser.';
 }
});
document.addEventListener('submit',event=>{if(event.target.id==='quiz-form'){event.preventDefault();gradeQuiz();}});
$('#menu-toggle').addEventListener('click',()=>{
 const side=$('#course-sidebar'),open=side.classList.toggle('open');
 $('#menu-toggle').setAttribute('aria-expanded',open?'true':'false');
});
$('#reset-progress').addEventListener('click',()=>{
 const d=$('#reset-dialog');
 if(typeof d.showModal==='function')d.showModal();else if(window.confirm('Erase all SCIT progress?')){state={modules:{}};persist();render();}
});
$('#reset-dialog').addEventListener('close',()=>{
 if($('#reset-dialog').returnValue==='confirm'){state={modules:{}};simPicked=null;simCorrect=false;videoLoadedFor=null;persist();navTo('home');render();}
});
window.addEventListener('hashchange',()=>{simPicked=null;simCorrect=false;videoLoadedFor=null;render();});
render();
})();
