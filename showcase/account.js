(() => {
  'use strict';
  const panel = document.createElement('section');
  panel.className = 'wrap account-panel';
  panel.id = 'my-progress';
  panel.setAttribute('data-clarity-mask', 'true');
  panel.innerHTML = '<div><div class="eyebrow">YOUR PERSONAL PRACTICE</div><h2>Pick up where you left off.</h2><p id="account-status" role="status">Connecting to your account…</p><p id="saved-progress"></p></div><div class="account-actions"><button class="button" id="google-login" disabled>Continue with Google</button><button class="button" id="account-logout" hidden>Sign out</button><button id="account-retry" hidden>Retry loading progress</button><a href="privacy.html">How your data is saved</a></div>';
  document.querySelector('.progress-section').before(panel);
  const status = panel.querySelector('#account-status');
  const summary = panel.querySelector('#saved-progress');
  const login = panel.querySelector('#google-login');
  const logout = panel.querySelector('#account-logout');
  const retry = panel.querySelector('#account-retry');
  let client, user = null, rows = new Map(), ready = false, generation = 0;
  let saveQueue = Promise.resolve();
  const note = document.querySelector('.dialog-note');
  const valid = n => Number.isInteger(n) && n >= 0 && n <= 2;
  function render() {
    login.hidden = !!user; logout.hidden = !user;
    const xp = [...rows.keys()].reduce((sum, id) => sum + [100,200,350][id], 0);
    summary.textContent = user ? `${rows.size} of 3 sample cases practised · ${xp} practice XP` : '';
    note.textContent = user ? 'Your selected answer is saved to your account after each choice.' : 'Try the sample freely. Sign in before answering to save your progress.';
    document.querySelectorAll('[data-case]').forEach(button => {
      const saved = rows.has(Number(button.dataset.case));
      button.dataset.saved = String(saved);
      button.title = saved ? 'You have a saved answer for this case' : '';
    });
  }
  async function load(session) {
    const ticket = ++generation;
    user = session?.user || null; ready = false; rows = new Map(); retry.hidden = true; render();
    login.disabled = false;
    if (!user) { status.textContent = 'Sign in with Google to save your answers across devices.'; return; }
    status.textContent = 'Loading your saved answers…';
    try {
      const {data, error} = await client.from('case_progress').select('case_id,selected_answer').eq('user_id',user.id);
      if (ticket !== generation) return;
      if (error) throw error;
      rows = new Map(data.filter(row => valid(row.case_id) && valid(row.selected_answer)).map(row => [row.case_id,row.selected_answer]));
      ready = true; status.textContent = 'Signed in. Your practice is saved privately to your account.'; render();
    } catch { if(ticket === generation) {status.textContent = 'Could not load your progress. Please retry before answering.'; retry.hidden = false;} }
  }
  document.addEventListener('cassify-answer', event => {
    const {caseId,answer} = event.detail;
    if (!valid(caseId) || !valid(answer)) return;
    if (!user || !ready) { note.textContent = user ? 'Answer not saved: wait for your progress to load, then select again.' : 'Answer not saved. Sign in, then select your answer to save it.'; return; }
    const owner = user.id, ticket = generation;
    note.textContent = 'Saving your answer…';
    saveQueue = saveQueue.then(async () => {
      if(ticket !== generation) return;
      const {error} = await client.from('case_progress').upsert({user_id:owner,case_id:caseId,selected_answer:answer},{onConflict:'user_id,case_id'});
      if(ticket !== generation) return;
      if(error) {note.textContent = 'Could not save this answer. Check your connection and select it again.'; return;}
      rows.set(caseId,answer); render(); note.textContent = 'Answer saved to your account.';
    }).catch(() => {if(ticket === generation) note.textContent = 'Could not save. Select your answer again to retry.';});
  });
  document.addEventListener('cassify-case-open', event => {
    const saved = rows.get(event.detail.caseId);
    if(saved === undefined) return;
    document.querySelectorAll('#choices button')[saved]?.classList.add('selected');
    note.textContent = 'Your saved answer is selected. Choose an answer to update it.';
  });
  login.addEventListener('click', async () => {
    login.disabled = true; status.textContent = 'Opening Google sign-in…';
    try {
      const {error} = await client.auth.signInWithOAuth({provider:'google',options:{redirectTo:location.origin+'/',queryParams:{prompt:'select_account'}}});
      if(error) throw error;
    } catch {login.disabled = false; status.textContent = 'Google sign-in could not start. Please try again.';}
  });
  logout.addEventListener('click', async () => {
    logout.disabled = true;
    const {error} = await client.auth.signOut({scope:'local'});
    logout.disabled = false;
    if(error) status.textContent = 'Could not sign out. Please try again.';
  });
  retry.addEventListener('click', async () => {const {data} = await client.auth.getSession(); await load(data.session);});
  try {
    client = window.supabase.createClient('https://phdjmotxonxuaiyyhwrf.supabase.co','sb_publishable_mbTeLkK2QS02MCYQUpFTEg_ymOn8h9A',{auth:{flowType:'pkce',detectSessionInUrl:true,persistSession:true,autoRefreshToken:true}});
    client.auth.onAuthStateChange((event,session) => {
      if(event === 'INITIAL_SESSION' || event === 'SIGNED_OUT' || (event === 'SIGNED_IN' && session?.user.id !== user?.id)) setTimeout(() => load(session),0);
    });
    if(new URLSearchParams(location.search).has('error')) status.textContent = 'Sign-in was cancelled or unavailable. Please try again.';
  } catch {status.textContent = 'Account services are unavailable. You can still explore the sample cases.';}
})();
