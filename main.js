document.addEventListener('DOMContentLoaded', () => {
    // Dark Mode Toggle Logic (Integrated)
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        htmlElement.classList.add('dark');
        themeToggleBtn.innerHTML = '☀️';
        themeToggleBtn.classList.remove('bg-yellow-400', 'border-yellow-500', 'text-slate-800');
        themeToggleBtn.classList.add('bg-slate-700', 'text-white', 'border-slate-600');
    } else {
        htmlElement.classList.remove('dark');
        themeToggleBtn.innerHTML = '🌙';
        themeToggleBtn.classList.remove('bg-slate-700', 'text-white', 'border-slate-600');
        themeToggleBtn.classList.add('bg-yellow-400', 'text-slate-800', 'border-yellow-500');
    }

    themeToggleBtn.addEventListener('click', () => {
        if (htmlElement.classList.contains('dark')) {
            htmlElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            themeToggleBtn.innerHTML = '🌙';
            themeToggleBtn.classList.remove('bg-slate-700', 'text-white', 'border-slate-600');
            themeToggleBtn.classList.add('bg-yellow-400', 'text-slate-800', 'border-yellow-500');
        } else {
            htmlElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            themeToggleBtn.innerHTML = '☀️';
            themeToggleBtn.classList.remove('bg-yellow-400', 'border-yellow-500', 'text-slate-800');
            themeToggleBtn.classList.add('bg-slate-700', 'text-white', 'border-slate-600');
        }
    });

    // --- Original Application Logic (Reconstructed based on index.html and common patterns) ---
    const initialMembers = [
        { id: 1, name: '김철수', gender: '남', ntpr: 3.5 }, { id: 2, name: '이영희', gender: '여', ntpr: 3.0 },
        { id: 3, name: '박지성', gender: '남', ntpr: 4.5 }, { id: 4, name: '손흥민', gender: '남', ntpr: 5.0 },
        { id: 5, name: '김연아', gender: '여', ntpr: 4.0 }, { id: 6, name: '차은우', gender: '남', ntpr: 3.5 },
        { id: 7, name: '한소희', gender: '여', ntpr: 2.5 }, { id: 8, name: '강동원', gender: '남', ntpr: 4.0 },
        { id: 9, name: '아이유', gender: '여', ntpr: 3.0 }, { id: 10, name: '공유', gender: '남', ntpr: 4.5 },
        { id: 11, name: '카리나', gender: '여', ntpr: 3.5 }, { id: 12, name: '윈터', gender: '여', ntpr: 3.0 }
    ];

    let members = JSON.parse(localStorage.getItem('tennis_v85_data')) || initialMembers;
    let stadium = [];
    let playerStats = {};
    let editingId = null;

    const now = new Date();
    document.getElementById('capture-date').innerText = now.toLocaleDateString() + ' ' + now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    renderLibrary(); renderRanking(); initCourtInputs();
    document.getElementById('court-count').addEventListener('change', initCourtInputs);

    // Placeholder for other functions, their full logic would be needed from original project
    function saveLocal() { localStorage.setItem('tennis_v85_data', JSON.stringify(members)); }

    async function saveAsImage() {
        const target = document.getElementById('capture-area');
        const board = document.getElementById('timeline-board');
        
        if (stadium.length === 0) return alert('대진표가 비어있습니다.');
        
        alert('전체 코트 대진표를 하나의 이미지로 생성합니다.\n잠시만 기다려주세요.');

        const originalBoardClass = board.className;
        board.className = "capture-mode"; 

        try {
            const canvas = await html2canvas(target, { 
                backgroundColor: '#ffffff', 
                scale: 2, 
                useCORS: true,
                windowWidth: 1200,
            });

            const data = canvas.toDataURL("image/png");
            const win = window.open();
            
            if(!win) {
                const link = document.createElement('a');
                link.download = `TennisArena_FullTimeline_${Date.now()}.png`;
                link.href = data; link.click();
                alert('팝업이 차단되어 이미지 다운로드를 시작합니다.');
            } else {
                win.document.write(`<body style="margin:0; background:#333; display:flex; flex-direction:column; align-items:center; justify-content:center; height:100vh; font-family:sans-serif;">
                    <p style="color:white; font-size:14px; margin-bottom:15px;">전체 코트가 포함된 이미지입니다. 길게 눌러 사진첩에 저장하세요.</p>
                    <img src="${data}" style="max-width:95%; max-height:80vh; border:2px solid #555; box-shadow:0 0 30px rgba(0,0,0,0.5);">
                    <button onclick="window.close()" style="margin-top:20px; padding:12px 24px; background:white; border:none; border-radius:12px; font-weight:bold; cursor:pointer;">닫기</button>
                </body>`);
            }
        } catch (e) {
            alert('이미지 생성 중 오류가 발생했습니다.');
            console.error(e);
        } finally {
            board.className = originalBoardClass;
        }
    }

    function exportData() {
        const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(JSON.stringify(members, null, 2));
        const linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', `TennisArena_Backup_${new Date().toLocaleDateString()}.json`);
        linkElement.click();
        alert('백업 파일이 생성되었습니다.');
    }

    function importData(event) {
        const file = event.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                members = JSON.parse(e.target.result);
                saveLocal(); location.reload();
            } catch (err) { alert('파일 형식이 잘못되었습니다.'); }
        };
        reader.readAsText(file);
    }

    function togglePlayer(id) {
        const idx = stadium.findIndex(m => m.id === id);
        if (idx > -1) { stadium.splice(idx, 1); delete playerStats[id]; } 
        else {
            const p = members.find(m => m.id === id);
            if (p) { stadium.push({...p}); playerStats[id] = { games: 0, wins: 0, losses: 0, ptsWon: 0, ptsLost: 0 }; }
        }
        renderStadium(); renderLibrary(); renderStats();
    }

    function addOrUpdatePlayer() {
        const name = document.getElementById('p-name').value.trim();
        const gender = document.getElementById('p-gender').value;
        const ntpr = parseFloat(document.getElementById('p-ntpr').value);
        if (!name) return alert('이름을 입력하세요');

        if (editingId) {
            const p = members.find(m => m.id === editingId);
            if(p) { p.name = name; p.gender = gender; p.ntpr = ntpr; }
            editingId = null; document.getElementById('submit-btn').innerText = "Add / Update";
        } else { members.push({ id: Date.now(), name, gender, ntpr }); }
        saveLocal(); renderLibrary(); renderRanking(); resetForm();
    }

    function editPlayer(id, e) {
        if(e) e.stopPropagation();
        const p = members.find(m => m.id === id);
        editingId = id; document.getElementById('p-name').value = p.name;
        document.getElementById('p-gender').value = p.gender;
        document.getElementById('p-ntpr').value = p.ntpr;
        document.getElementById('submit-btn').innerText = "Update Info";
        document.getElementById('cancel-btn').classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function resetForm() { editingId = null; document.getElementById('p-name').value = ''; document.getElementById('cancel-btn').classList.add('hidden'); }

    function renderLibrary() {
        document.getElementById('member-library').innerHTML = members.map(m => {
            const isSelected = stadium.some(s => s.id === m.id);
            return `
                <div onclick="togglePlayer(${m.id})" class="relative p-3 rounded-2xl border transition-all ${m.gender === '남' ? 'male-gradient' : 'female-gradient'} ${isSelected ? 'border-blue-600 ring-2 ring-blue-500/10' : 'border-slate-100'} shadow-sm">
                    <div class="font-bold text-[11px] truncate">${m.name} ${isSelected ? '✅' : ''}</div>
                    <div class="text-[8px] opacity-40 font-black italic">NTPR ${m.ntpr.toFixed(2)}</div>
                    <button onclick="editPlayer(${m.id}, event)" class="absolute top-1 right-1 bg-white/60 rounded-full w-5 h-5 text-[8px] flex items-center justify-center border">✎</button>
                </div>`;
        }).join('');
    }

    function renderStadium() {
        const pool = document.getElementById('stadium-pool');
        document.getElementById('player-count').innerText = `${stadium.length}명`;
        if (stadium.length === 0) { pool.innerHTML = `<p class="text-slate-500 text-[11px] italic w-full text-center py-10">플레이어를 선택하세요.</p>`; return; }
        pool.innerHTML = stadium.map(m => `
            <div class="px-3 py-1.5 rounded-xl text-[10px] font-black shadow-lg flex items-center gap-2 ${m.gender === '남' ? 'bg-blue-600 text-white' : 'bg-rose-600 text-white'}">
                <span onclick="togglePlayer(${m.id})" class="cursor-pointer opacity-70">✕</span><span>${m.name}</span>
            </div>`).join('');
    }

    function initCourtInputs() {
        const count = parseInt(document.getElementById('court-count').value);
        document.getElementById('court-config-list').innerHTML = Array.from({length: count}, (_, i) => `
            <div class="flex items-center justify-between p-2.5 bg-slate-50 rounded-xl border border-slate-100 text-[10px] font-bold">
                <span class="text-slate-400 uppercase tracking-tighter">${i+1}번 코트</span>
                <select id="court-${i+1}-start" class="bg-transparent text-blue-600 outline-none">${Array.from({length: 24}, (_, h) => `<option value="${h}" ${h===14 ? 'selected' : ''}>${h}:00</option>`).join('')}</select>
                <select id="court-${i+1}-duration" class="bg-transparent text-slate-500 outline-none">${Array.from({length: 6}, (_, d) => `<option value="${d+1}">${d+1}시간</option>`).join('')}</select>
            </div>`).join('');
    }

    function generateTimeline() {
        if (stadium.length < 4) return alert('4명 이상 선택하세요.');
        const board = document.getElementById('timeline-board'); board.innerHTML = '';
        stadium.forEach(p => playerStats[p.id] = { games: 0, wins: 0, losses: 0, ptsWon: 0, ptsLost: 0 });

        for (let c = 1; c <= parseInt(document.getElementById('court-count').value); c++) {
            const start = parseInt(document.getElementById(`court-${c}-start`).value);
            const slots = parseInt(document.getElementById(`court-${c}-duration`).value) * 2;
            const col = document.createElement('div');
            col.className = 'court-column space-y-4';
            col.innerHTML = `<div class="p-4 bg-slate-900 text-white rounded-[1.8rem] shadow-xl font-black text-center text-[9px] uppercase tracking-widest">${c}번 코트</div>`;
            
            for (let s = 0; s < slots; s++) {
                const h = start + Math.floor(s/2);
                const timeStr = `${h < 10 ? '0'+h : h}:${(s%2===0 ? '00' : '30')}`;
                const players = getSmartMatch(document.getElementById('match-type').value, c);
                col.innerHTML += renderMatchCard(s + 1, timeStr, players);
                players.forEach(p => { if(p) playerStats[p.id].games++; });
            }
            board.appendChild(col);
            col.querySelectorAll('.drag-zone').forEach(el => new Sortable(el, { group: 'tennis', animation: 200 }));
        }
        renderStats();
    }

    function getSmartMatch(type, courtIdx) {
        let pool = [...stadium].sort((a, b) => playerStats[a.id].games - playerStats[b.id].games || Math.random() - 0.5);
        if (type === 'gender') {
            let m = pool.filter(p => p.gender === '남'), f = pool.filter(p => p.gender === '여');
            return courtIdx % 2 !== 0 ? (m.length >= 4 ? m.slice(0, 4) : pool.slice(0, 4)) : (f.length >= 4 ? f.slice(0, 4) : pool.slice(0, 4));
        } else if (type === 'mixed') {
            let m = pool.filter(p => p.gender === '남'), f = pool.filter(p => p.gender === '여');
            return (m.length >= 2 && f.length >= 2) ? [m[0], f[0], m[1], f[1]] : pool.slice(0, 4);
        }
        return pool.slice(0, 4);
    }

    function renderMatchCard(round, time, p) {
        return `
            <div class="match-card glass-card p-5 rounded-[2.2rem] border-t-8 border-slate-800 shadow-sm">
                <div class="flex justify-between items-center mb-4 text-[9px] font-black"><span class="text-slate-400 font-mono italic">ROUND ${round}</span><span class="text-blue-600 font-mono font-black">${time}</span></div>
                <div class="space-y-3"><div class="drag-zone space-y-1">${renderPlayerMini(p[0])} ${renderPlayerMini(p[1])}</div><div class="text-center text-[7px] font-black text-slate-200 tracking-[0.5em]">VS</div><div class="drag-zone space-y-1">${renderPlayerMini(p[2])} ${renderPlayerMini(p[3])}</div></div>
                <div class="mt-5 flex items-center justify-between gap-1.5 bg-slate-50 p-3 rounded-2xl">
                    <input type="number" class="score-input score-a" placeholder="0"><input type="number" class="score-input score-b" placeholder="0">
                    <button onclick="confirmResult(this)" class="bg-slate-900 text-white px-4 py-2.5 rounded-xl text-[9px] font-black active:scale-95 shadow-md uppercase">Save</button>
                </div>
            </div>`;
    }

    function renderPlayerMini(p) {
        if (!p) return `<div class="p-3 bg-white/50 border border-dashed rounded-xl text-[8px] text-center text-slate-300">Wait</div>`;
        return `<div class="p-3 rounded-xl shadow-sm text-[10px] font-black flex justify-between items-center cursor-move ${p.gender === '남' ? 'male-gradient' : 'female-gradient'}" data-id="${p.id}"><span>${p.name}</span><span class="text-[7px] opacity-40 font-mono">${p.ntpr.toFixed(2)}</span></div>`;
    }

    function confirmResult(btn) {
        const card = btn.closest('.match-card'), sa = parseInt(card.querySelector('.score-a').value), sb = parseInt(card.querySelector('.score-b').value);
        if (isNaN(sa) || isNaN(sb)) return alert('점수를 입력하세요.');
        const p = card.querySelectorAll('[data-id]'), tA = [p[0].dataset.id, p[1].dataset.id], tB = [p[2].dataset.id, p[3].dataset.id];
        [...tA].forEach(id => { playerStats[id].ptsWon += sa; playerStats[id].ptsLost += sb; if(sa>sb) playerStats[id].wins++; else if(sb>sa) playerStats[id].losses++; });
        [...tB].forEach(id => { playerStats[id].ptsWon += sb; playerStats[id].ptsLost += sa; if(sb>sa) playerStats[id].wins++; else if(sa>sb) playerStats[id].losses++; });
        sa > sb ? applyNtpr(tA, 0.1) : (sb > sa ? applyNtpr(tB, 0.1) : null); 
        card.classList.add('match-finished'); btn.innerHTML = 'DONE ✓'; saveLocal(); renderStats(); renderRanking(); renderLibrary();
    }

    function applyNtpr(ids, change) { ids.forEach(id => { const m = members.find(m => m.id == id); if (m) m.ntpr = Math.min(7.0, m.ntpr + change); }); }

    function renderStats() {
        document.getElementById('stat-grid').innerHTML = stadium.map(m => {
            const s = playerStats[m.id], d = s.ptsWon - s.ptsLost;
            return `<div class="bg-white p-4 rounded-3xl border-l-8 ${m.gender === '남' ? 'border-l-blue-500' : 'border-l-rose-500'} shadow-sm flex flex-col gap-2">
                <div class="flex justify-between items-center font-black"><span class="text-slate-800 text-xs">${m.name}</span><span class="text-[8px] text-slate-400 italic">${s.games}G Played</span></div>
                <div class="grid grid-cols-2 gap-2 text-[10px] font-bold"><div class="bg-slate-50 p-2 rounded-xl text-center font-black italic">${s.wins}W ${s.losses}L</div><div class="bg-slate-50 p-2 rounded-xl text-center font-black italic">${s.ptsWon}:${s.ptsLost} (${d>=0?'+':''}${d})</div></div>
            </div>`;
        }).join('');
    }

    function renderRanking() {
        document.getElementById('ranking-list').innerHTML = [...members].sort((a,b)=>b.ntpr-a.ntpr).map((m,i)=>`
            <div class="flex items-center justify-between p-3 rounded-2xl ${i===0?'rank-1':i===1?'rank-2':i===2?'rank-3':'bg-white/5 border border-white/10 shadow-sm'}">
                <div class="flex items-center gap-4"><span class="text-[10px] font-black w-4 text-center tracking-tighter">${i===0?'👑':i===1?'🥈':i===2?'🥉':i+1}</span><span class="font-black text-[12px] uppercase tracking-tighter italic">${m.name}</span></div><span class="text-[12px] font-black font-mono tracking-tighter">${m.ntpr.toFixed(2)}</span>
            </div>`).join('');
    }

    function resetAllData() { if(confirm('모든 데이터를 초기화할까요?')) { localStorage.clear(); location.reload(); } }
    
    function copyToClipboard() {
        if (stadium.length === 0) return alert('대진표가 없습니다.');
        let text = `🎾 [TENNIS ARENA 대진표]\n`;
        document.querySelectorAll('.court-column').forEach(col => {
            text += `\n📍 ${col.firstChild.innerText}\n`;
            col.querySelectorAll('.match-card').forEach(card => {
                const time = card.querySelector('.text-blue-600').innerText;
                const p = Array.from(card.querySelectorAll('[data-id]')).map(p => p.innerText.split('\n')[0].trim());
                if(p.length >= 4) text += `${time} | ${p[0]},${p[1]} VS ${p[2]},${p[3]}\n`;
            });
        });
        const textarea = document.createElement("textarea");
        textarea.value = text; document.body.appendChild(textarea);
        textarea.select(); try { document.execCommand('copy'); alert('카톡용 복사 완료!'); } catch(e) { alert('복사 실패'); }
        document.body.removeChild(textarea);
    }
});