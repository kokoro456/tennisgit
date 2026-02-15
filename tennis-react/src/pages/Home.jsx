import React, { useState, useEffect, useRef } from 'react';
import Sortable from 'sortablejs';
import html2canvas from 'html2canvas';

const Home = () => {
  const [lang, setLang] = useState(localStorage.getItem('tennis_lang') || 'ko');
  const [members, setMembers] = useState([]);
  const [stadium, setStadium] = useState([]);
  const [playerStats, setPlayerStats] = useState({});
  const [editingId, setEditingId] = useState(null);
  const [courtCount, setCourtCount] = useState(2);
  const [matchType, setMatchType] = useState('mixed');
  const [timelineBoard, setTimelineBoard] = useState([]);
  const [courtConfigs, setCourtConfigs] = useState([]);

  // Form states
  const [formName, setFormName] = useState('');
  const [formGender, setFormGender] = useState('남');
  const [formNtpr, setFormNtpr] = useState(3.0);

  const captureRef = useRef(null);

  const translations = {
    ko: {
      lang: "EN",
      export: "내보내기",
      import: "불러오기",
      copy: "카톡 복사",
      saveImage: "전체 이미지 저장 📸",
      playerManager: "Player Manager",
      name: "이름",
      male: "남성",
      female: "여성",
      addUpdate: "Add / Update",
      courtStatus: "코트대관상태",
      participants: "참석인원",
      matchTypeGender: "남복/여복",
      matchTypeMixed: "혼복",
      matchTypeRandom: "랜덤",
      generate: "생성",
      matchSheet: "대진표",
      stats: "📊 오늘 매칭 상세 통계",
      ranking: "🏆 Club Ranking",
      reset: "Reset All Arena Data",
      playerCount: "명",
      court: "번 코트",
      hour: "시간",
      wait: "대기",
      save: "저장",
      done: "완료 ✓",
      played: "경기 완료",
      noMatch: "참석자를 선택하고 대진을 생성하세요.",
      statsTitle: "📊 오늘 매칭 상세 통계",
      aboutTitle: "UBUNTU 테니스 매칭 시스템: 공정한 대진표의 중요성",
      guideTitle: "💡 상세 사용법 가이드",
      policyTitle: "개인정보 및 이용정책",
      policyDesc: "본 서비스는 별도의 회원가입 없이 이용 가능하며, 입력된 플레이어 정보 및 경기 데이터는 귀하의 브라우저에만 저장됩니다.",
      infoTitle: "Professional Tennis Matching Platform",
      infoDesc: "UBUNTU 테니스 매칭 시스템은 동호회 운영진의 번거로운 대진표 작성을 자동화하고, 실시간 점수 기록과 통계를 통해 더욱 즐거운 테니스 문화를 만드는 전문 플랫폼입니다.",
      rankingTitle: "🏆 Club Ranking",
    },
    en: {
      lang: "KO",
      export: "Export",
      import: "Import",
      copy: "Copy Text",
      saveImage: "Save Image 📸",
      playerManager: "Player Manager",
      name: "Name",
      male: "Male",
      female: "Female",
      addUpdate: "Add / Update",
      courtStatus: "Court Status",
      participants: "Participants",
      matchTypeGender: "MD/WD",
      matchTypeMixed: "Mixed",
      matchTypeRandom: "Random",
      generate: "Generate",
      matchSheet: "Match Sheet",
      stats: "📊 Today's Match Stats",
      ranking: "🏆 Club Ranking",
      reset: "Reset All Arena Data",
      playerCount: "players",
      court: "Court",
      hour: "hr",
      wait: "Wait",
      save: "Save",
      done: "Done ✓",
      played: "Played",
      noMatch: "Select players and generate matches.",
      statsTitle: "📊 Today's Match Stats",
      aboutTitle: "Importance of Fair Tennis Matching",
      guideTitle: "💡 Detailed Guide",
      policyTitle: "Privacy & Usage Policy",
      policyDesc: "This service can be used without registration. Your data is stored only in your browser.",
      infoTitle: "Professional Tennis Matching Platform",
      infoDesc: "UBUNTU Tennis Matcher automates match sheet generation and creates a better tennis culture through real-time scoring and statistics.",
      rankingTitle: "🏆 Club Ranking",
    }
  };

  const t = translations[lang];

  useEffect(() => {
    const initialMembers = [
      { id: 1, name: '김철수', gender: '남', ntpr: 3.5 }, { id: 2, name: '이영희', gender: '여', ntpr: 3.0 },
      { id: 3, name: '박지성', gender: '남', ntpr: 4.5 }, { id: 4, name: '손흥민', gender: '남', ntpr: 5.0 },
      { id: 5, name: '김연아', gender: '여', ntpr: 4.0 }, { id: 6, name: '차은우', gender: '남', ntpr: 3.5 },
      { id: 7, name: '한소희', gender: '여', ntpr: 2.5 }, { id: 8, name: '강동원', gender: '남', ntpr: 4.0 },
      { id: 9, name: '아이유', gender: '여', ntpr: 3.0 }, { id: 10, name: '공유', gender: '남', ntpr: 4.5 },
      { id: 11, name: '카리나', gender: '여', ntpr: 3.5 }, { id: 12, name: '윈터', gender: '여', ntpr: 3.0 }
    ];
    const saved = JSON.parse(localStorage.getItem('tennis_v85_data'));
    setMembers(saved || initialMembers);
    
    // Initialize court configs
    initCourtConfigs(courtCount);
  }, []);

  const initCourtConfigs = (count) => {
    const configs = Array.from({ length: count }, (_, i) => ({
      id: i + 1,
      start: 14,
      duration: 2,
    }));
    setCourtConfigs(configs);
  };

  useEffect(() => {
    if (members.length > 0) {
      localStorage.setItem('tennis_v85_data', JSON.stringify(members));
    }
  }, [members]);

  const toggleLanguage = () => {
    const newLang = lang === 'ko' ? 'en' : 'ko';
    setLang(newLang);
    localStorage.setItem('tennis_lang', newLang);
  };

  const addOrUpdatePlayer = () => {
    if (!formName) return alert(lang === 'ko' ? '이름을 입력하세요' : 'Please enter name');

    if (editingId) {
      setMembers(members.map(m => m.id === editingId ? { ...m, name: formName, gender: formGender, ntpr: parseFloat(formNtpr) } : m));
      setEditingId(null);
    } else {
      setMembers([...members, { id: Date.now(), name: formName, gender: formGender, ntpr: parseFloat(formNtpr) }]);
    }
    resetForm();
  };

  const editPlayer = (id, e) => {
    e.stopPropagation();
    const p = members.find(m => m.id === id);
    setEditingId(id);
    setFormName(p.name);
    setFormGender(p.gender);
    setFormNtpr(p.ntpr);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetForm = () => {
    setEditingId(null);
    setFormName('');
    setFormGender('남');
    setFormNtpr(3.0);
  };

  const togglePlayer = (id) => {
    const isSelected = stadium.some(s => s.id === id);
    if (isSelected) {
      setStadium(stadium.filter(s => s.id !== id));
      const newStats = { ...playerStats };
      delete newStats[id];
      setPlayerStats(newStats);
    } else {
      const p = members.find(m => m.id === id);
      setStadium([...stadium, { ...p }]);
      setPlayerStats({ ...playerStats, [id]: { games: 0, wins: 0, losses: 0, ptsWon: 0, ptsLost: 0 } });
    }
  };

  const generateTimeline = () => {
    if (stadium.length < 4) return alert(lang === 'ko' ? '4명 이상 선택하세요.' : 'Select at least 4 players.');
    
    // Reset stats for current session
    const freshStats = {};
    stadium.forEach(p => {
      freshStats[p.id] = { games: 0, wins: 0, losses: 0, ptsWon: 0, ptsLost: 0 };
    });

    let maxSlots = 0;
    const currentCourtConfigs = courtConfigs.map(c => {
      const slots = c.duration * 2;
      if (slots > maxSlots) maxSlots = slots;
      return { ...c, slots, matches: [] };
    });

    for (let s = 0; s < maxSlots; s++) {
      let assignedInSlot = new Set();
      for (let c = 0; c < courtConfigs.length; c++) {
        const config = currentCourtConfigs[c];
        if (s < config.slots) {
          const players = pickPlayersForMatch(matchType, assignedInSlot, freshStats);
          config.matches.push({ id: `${config.id}-${s}`, players, scoreA: '', scoreB: '', finished: false });
          players.forEach(p => {
            if (p) {
              assignedInSlot.add(p.id);
              freshStats[p.id].games++;
            }
          });
        }
      }
    }

    setPlayerStats(freshStats);
    setTimelineBoard(currentCourtConfigs);
  };

  const pickPlayersForMatch = (type, assignedInSlot, currentStats) => {
    let availablePool = stadium.filter(p => !assignedInSlot.has(p.id))
      .sort((a, b) => (currentStats[a.id]?.games || 0) - (currentStats[b.id]?.games || 0) || Math.random() - 0.5);

    if (availablePool.length < 4) return [null, null, null, null];

    let males = availablePool.filter(p => p.gender === '남');
    let females = availablePool.filter(p => p.gender === '여');

    if (type === 'gender') {
      if (males.length >= 4) return males.slice(0, 4);
      if (females.length >= 4) return females.slice(0, 4);
      return availablePool.slice(0, 4);
    } else if (type === 'mixed') {
      if (males.length >= 2 && females.length >= 2) return [males[0], females[0], males[1], females[1]];
    }
    return availablePool.slice(0, 4);
  };

  const confirmResult = (courtId, matchIdx) => {
    const newBoard = [...timelineBoard];
    const court = newBoard.find(c => c.id === courtId);
    const match = court.matches[matchIdx];
    const sa = parseInt(match.scoreA);
    const sb = parseInt(match.scoreB);

    if (isNaN(sa) || isNaN(sb)) return alert(lang === 'ko' ? '점수를 입력하세요.' : 'Please enter scores.');

    const p = match.players;
    const tA = [p[0]?.id, p[1]?.id];
    const tB = [p[2]?.id, p[3]?.id];

    const newStats = { ...playerStats };
    const updateStats = (ids, won, lost, isWin) => {
      ids.forEach(id => {
        if (!id) return;
        newStats[id].ptsWon += won;
        newStats[id].ptsLost += lost;
        if (isWin) newStats[id].wins++; else newStats[id].losses++;
      });
    };

    if (sa > sb) {
      updateStats(tA, sa, sb, true);
      updateStats(tB, sb, sa, false);
      applyNtpr(tA, 0.1);
    } else if (sb > sa) {
      updateStats(tA, sa, sb, false);
      updateStats(tB, sb, sa, true);
      applyNtpr(tB, 0.1);
    }

    match.finished = true;
    setPlayerStats(newStats);
    setTimelineBoard(newBoard);
  };

  const applyNtpr = (ids, change) => {
    setMembers(prev => prev.map(m => ids.includes(m.id) ? { ...m, ntpr: Math.max(1.0, Math.min(7.0, m.ntpr + change)) } : m));
  };

  const saveAsImage = async () => {
    if (!captureRef.current) return;
    alert(lang === 'ko' ? '이미지를 생성 중입니다...' : 'Generating image...');
    const canvas = await html2canvas(captureRef.current, { scale: 2 });
    const data = canvas.toDataURL("image/png");
    const link = document.createElement('a');
    link.download = `Tennis_MatchSheet_${Date.now()}.png`;
    link.href = data;
    link.click();
  };

  const copyToClipboard = () => {
    if (timelineBoard.length === 0) return alert(lang === 'ko' ? '대진표가 없습니다.' : 'No matches found.');
    let text = `🎾 [UBUNTU ${t.matchSheet}]\n`;
    timelineBoard.forEach(court => {
      text += `\n📍 ${court.id}${t.court}\n`;
      court.matches.forEach((m, i) => {
        const h = court.start + Math.floor(i/2);
        const time = `${h}:${i%2===0?'00':'30'}`;
        const pNames = m.players.map(p => p?.name || t.wait);
        text += `${time} | ${pNames[0]},${pNames[1]} VS ${pNames[2]},${pNames[3]}\n`;
      });
    });
    navigator.clipboard.writeText(text).then(() => alert(lang === 'ko' ? '복사 완료!' : 'Copied!'));
  };

  const resetAllData = () => {
    if (confirm(lang === 'ko' ? '모든 데이터를 초기화할까요?' : 'Reset all data?')) {
      localStorage.removeItem('tennis_v85_data');
      window.location.reload();
    }
  };

  const exportData = () => {
    const data = JSON.stringify(members, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'tennis_members.json';
    link.click();
  };

  return (
    <div className="p-3 md:p-8 bg-[#d4edda] min-h-screen">
      <div className="max-w-7xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-black italic text-slate-900 uppercase tracking-tighter">UBUNTU <span className="text-blue-600">매칭시스템</span></h1>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mt-1">React Version 1.0 <span className="text-blue-500 ml-2">v8.5 Engine</span></p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button onClick={toggleLanguage} className="bg-white text-slate-900 px-3 py-2 rounded-xl text-[10px] font-black border border-slate-200">{t.lang}</button>
            <button onClick={exportData} className="bg-blue-50 text-blue-600 px-3 py-2 rounded-xl text-[10px] font-black border border-blue-100">{t.export}</button>
            <button onClick={copyToClipboard} className="bg-slate-200 text-slate-700 px-3 py-2 rounded-xl text-[10px] font-black">{t.copy}</button>
            <button onClick={saveAsImage} className="bg-slate-800 text-white px-4 py-2 rounded-xl text-[11px] font-black shadow-lg">{t.saveImage}</button>
          </div>
        </header>

        <section className="mb-10 p-8 bg-white/50 rounded-[2.5rem] border border-white/50 backdrop-blur-sm">
          <h2 className="text-xl font-black text-slate-800 mb-3 uppercase italic">{t.infoTitle}</h2>
          <p className="text-sm text-slate-600 leading-relaxed max-w-3xl">{t.infoDesc}</p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
          {/* Left Panel: Player Manager */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white/95 backdrop-blur-md p-5 rounded-[2rem] shadow-sm border border-white/50">
              <h3 className="text-[10px] font-black text-slate-400 uppercase mb-3">{t.playerManager}</h3>
              <div className="space-y-2 mb-4">
                <input 
                  type="text" value={formName} onChange={(e) => setFormName(e.target.value)}
                  placeholder={t.name} className="w-full p-2.5 border rounded-xl text-xs font-bold outline-none focus:ring-2 focus:ring-blue-500" 
                />
                <div className="flex gap-2">
                  <select value={formGender} onChange={(e) => setFormGender(e.target.value)} className="flex-1 p-2.5 border rounded-xl text-xs font-bold">
                    <option value="남">{t.male}</option>
                    <option value="여">{t.female}</option>
                  </select>
                  <input 
                    type="number" step="0.1" value={formNtpr} onChange={(e) => setFormNtpr(e.target.value)}
                    className="flex-1 p-2.5 border rounded-xl text-xs font-bold" 
                  />
                </div>
                <div className="flex gap-1.5">
                  <button onClick={addOrUpdatePlayer} className="flex-grow bg-slate-900 text-white py-2.5 rounded-xl text-[10px] font-black uppercase">
                    {editingId ? (lang === 'ko' ? "정보 수정" : "Update Info") : t.addUpdate}
                  </button>
                  {editingId && <button onClick={resetForm} className="px-3 bg-slate-200 py-2.5 rounded-xl text-[10px] font-black">X</button>}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 max-h-56 overflow-y-auto pr-1">
                {members.map(m => (
                  <div 
                    key={m.id} onClick={() => togglePlayer(m.id)}
                    className={`relative p-3 rounded-2xl border transition-all cursor-pointer ${m.gender === '남' ? 'bg-blue-50 border-blue-100 text-blue-800' : 'bg-rose-50 border-rose-100 text-rose-800'} ${stadium.some(s => s.id === m.id) ? 'ring-2 ring-blue-500' : ''}`}
                  >
                    <div className="font-bold text-[11px] truncate">{m.name} {stadium.some(s => s.id === m.id) ? '✅' : ''}</div>
                    <div className="text-[8px] opacity-40 font-black italic">NTPR {m.ntpr.toFixed(2)}</div>
                    <button onClick={(e) => editPlayer(m.id, e)} className="absolute top-1 right-1 bg-white/60 rounded-full w-5 h-5 text-[8px] flex items-center justify-center border">✎</button>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/95 backdrop-blur-md p-5 rounded-[2rem] shadow-sm border border-white/50">
              <h3 className="text-[10px] font-black text-slate-400 uppercase mb-2">{t.courtStatus}</h3>
              <select 
                value={courtCount} onChange={(e) => { setCourtCount(parseInt(e.target.value)); initCourtConfigs(parseInt(e.target.value)); }}
                className="w-full p-2.5 rounded-xl border-slate-200 border bg-white font-black text-[11px] outline-none"
              >
                {[1, 2, 3, 4, 5].map(n => <option key={n} value={n}>{n}{lang === 'ko' ? '개 코트' : ' Court' + (n > 1 ? 's' : '')}</option>)}
              </select>
              <div className="mt-2 space-y-1.5">
                {courtConfigs.map((c, idx) => (
                  <div key={idx} className="flex items-center justify-between p-2.5 bg-slate-50 rounded-xl border border-slate-100 text-[10px] font-bold">
                    <span className="text-slate-400 uppercase tracking-tighter">{c.id}{t.court}</span>
                    <select 
                      value={c.start} onChange={(e) => setCourtConfigs(courtConfigs.map(conf => conf.id === c.id ? { ...conf, start: parseInt(e.target.value) } : conf))}
                      className="bg-transparent text-blue-600 outline-none"
                    >
                      {Array.from({ length: 24 }, (_, h) => <option key={h} value={h}>{h}:00</option>)}
                    </select>
                    <select 
                      value={c.duration} onChange={(e) => setCourtConfigs(courtConfigs.map(conf => conf.id === c.id ? { ...conf, duration: parseInt(e.target.value) } : conf))}
                      className="bg-transparent text-slate-500 outline-none"
                    >
                      {Array.from({ length: 6 }, (_, d) => <option key={d} value={d + 1}>{d + 1}{t.hour}</option>)}
                    </select>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Panel: Stadium */}
          <div className="lg:col-span-8">
            <div className="bg-slate-900 p-7 rounded-[2.5rem] shadow-2xl h-full flex flex-col relative overflow-hidden">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6 relative z-10">
                <h2 className="text-xl font-bold text-white uppercase italic">{t.participants} <span className="text-blue-400 text-xs font-normal ml-2">{stadium.length}{t.playerCount}</span></h2>
                <div className="flex gap-1.5 w-full md:w-auto">
                  <select 
                    value={matchType} onChange={(e) => setMatchType(e.target.value)}
                    className="flex-1 md:flex-none bg-slate-800 text-white text-[12px] px-5 py-3 rounded-xl font-bold border border-slate-700"
                  >
                    <option value="gender">{t.matchTypeGender}</option>
                    <option value="mixed">{t.matchTypeMixed}</option>
                    <option value="random">{t.matchTypeRandom}</option>
                  </select>
                  <button onClick={generateTimeline} className="flex-1 md:flex-none bg-blue-600 text-white px-6 py-3 rounded-xl font-black text-[12px] active:scale-95 transition-all shadow-lg uppercase">{t.generate}</button>
                </div>
              </div>
              <div className="flex-grow flex flex-wrap gap-2 p-6 rounded-2xl border border-slate-700 border-dashed bg-slate-800/30 min-h-[180px] content-start relative z-10 overflow-y-auto">
                {stadium.length === 0 ? (
                  <p className="text-slate-500 text-[11px] italic w-full text-center py-10">{lang === 'ko' ? '플레이어를 선택하세요.' : 'Select players.'}</p>
                ) : (
                  stadium.map(m => (
                    <div key={m.id} className={`px-3 py-1.5 rounded-xl text-[10px] font-black shadow-lg flex items-center gap-2 ${m.gender === '남' ? 'bg-blue-600 text-white' : 'bg-rose-600 text-white'}`}>
                      <span onClick={() => togglePlayer(m.id)} className="cursor-pointer opacity-70">✕</span><span>{m.name}</span>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Match Sheet Board */}
        <section ref={captureRef} className="mb-16 bg-white p-8 rounded-[3.5rem] shadow-sm">
          <div className="mb-8 border-b pb-4 flex justify-between items-end">
            <div>
              <h2 className="text-3xl font-black text-slate-900 tracking-tighter uppercase italic">{t.matchSheet}</h2>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">Tennis Arena Official Match Sheet</p>
            </div>
            <p className="text-sm font-black text-blue-600">{new Date().toLocaleDateString()}</p>
          </div>
          <div className="flex overflow-x-auto gap-6 pb-6">
            {timelineBoard.length === 0 ? (
              <div className="w-full text-center py-20 text-slate-300 font-bold uppercase text-xs">{t.noMatch}</div>
            ) : (
              timelineBoard.map(court => (
                <div key={court.id} className="min-width-[300px] flex-shrink-0 space-y-4">
                  <div className="p-4 bg-slate-900 text-white rounded-[1.8rem] shadow-xl font-black text-center text-[9px] uppercase tracking-widest">{court.id}{t.court}</div>
                  {court.matches.map((m, mIdx) => (
                    <div key={mIdx} className={`bg-white p-5 rounded-[2.2rem] border-t-8 border-slate-800 shadow-sm ${m.finished ? 'opacity-50' : ''}`}>
                      <div className="flex justify-between items-center mb-4 text-[9px] font-black">
                        <span className="text-slate-400 font-mono italic">ROUND {mIdx + 1}</span>
                        <span className="text-blue-600 font-mono font-black">{`${court.start + Math.floor(mIdx/2)}:${mIdx%2===0?'00':'30'}`}</span>
                      </div>
                      <div className="space-y-3">
                        <div className="space-y-1">
                          {[m.players[0], m.players[1]].map((p, i) => (
                            <div key={i} className={`p-3 rounded-xl shadow-sm text-[10px] font-black flex justify-between items-center ${p ? (p.gender === '남' ? 'bg-blue-50 text-blue-700' : 'bg-rose-50 text-rose-700') : 'bg-slate-50 text-slate-300'}`}>
                              <span>{p?.name || t.wait}</span><span className="text-[7px] opacity-40 font-mono">{p?.ntpr.toFixed(2)}</span>
                            </div>
                          ))}
                        </div>
                        <div className="text-center text-[7px] font-black text-slate-200 tracking-[0.5em]">VS</div>
                        <div className="space-y-1">
                          {[m.players[2], m.players[3]].map((p, i) => (
                            <div key={i} className={`p-3 rounded-xl shadow-sm text-[10px] font-black flex justify-between items-center ${p ? (p.gender === '남' ? 'bg-blue-50 text-blue-700' : 'bg-rose-50 text-rose-700') : 'bg-slate-50 text-slate-300'}`}>
                              <span>{p?.name || t.wait}</span><span className="text-[7px] opacity-40 font-mono">{p?.ntpr.toFixed(2)}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="mt-5 flex items-center justify-between gap-1.5 bg-slate-50 p-3 rounded-2xl">
                        <input 
                          type="number" value={m.scoreA} onChange={(e) => {
                            const newBoard = [...timelineBoard];
                            newBoard.find(c => c.id === court.id).matches[mIdx].scoreA = e.target.value;
                            setTimelineBoard(newBoard);
                          }}
                          className="w-12 text-center font-black bg-white rounded-lg p-1 border" placeholder="0" 
                        />
                        <input 
                          type="number" value={m.scoreB} onChange={(e) => {
                            const newBoard = [...timelineBoard];
                            newBoard.find(c => c.id === court.id).matches[mIdx].scoreB = e.target.value;
                            setTimelineBoard(newBoard);
                          }}
                          className="w-12 text-center font-black bg-white rounded-lg p-1 border" placeholder="0" 
                        />
                        <button 
                          onClick={() => confirmResult(court.id, mIdx)} disabled={m.finished}
                          className="bg-slate-900 text-white px-4 py-2 rounded-xl text-[9px] font-black uppercase"
                        >
                          {m.finished ? t.done : t.save}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ))
            )}
          </div>
        </section>

        {/* Stats and Info */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-20">
          <div className="lg:col-span-7 bg-white p-8 rounded-[3rem] shadow-sm">
            <h3 className="text-lg font-black text-slate-800 uppercase mb-6 tracking-tight">{t.statsTitle}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {stadium.map(m => {
                const s = playerStats[m.id] || { games: 0, wins: 0, losses: 0, ptsWon: 0, ptsLost: 0 };
                const diff = s.ptsWon - s.ptsLost;
                return (
                  <div key={m.id} className={`bg-slate-50 p-4 rounded-3xl border-l-8 ${m.gender === '남' ? 'border-l-blue-500' : 'border-l-rose-500'} shadow-sm flex flex-col gap-2`}>
                    <div className="flex justify-between items-center font-black">
                      <span className="text-slate-800 text-xs">{m.name}</span>
                      <span className="text-[8px] text-slate-400 italic">{s.games} {t.played}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[10px] font-bold">
                      <div className="bg-white p-2 rounded-xl text-center font-black italic">{s.wins}W {s.losses}L</div>
                      <div className="bg-white p-2 rounded-xl text-center font-black italic">{s.ptsWon}:{s.ptsLost} ({diff >= 0 ? '+' : ''}{diff})</div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-12 pt-12 border-t border-slate-100">
              <h3 className="text-2xl font-black text-slate-900 mb-6">{t.aboutTitle}</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                UBUNTU 테니스 매칭 시스템은 데이터 기반의 공정한 팀 배분과 실시간 기록 관리를 통해 동호회 운영의 효율성을 극대화합니다.
              </p>
              <h4 className="text-sm font-black text-slate-800 mb-3">{t.guideTitle}</h4>
              <ul className="text-xs text-slate-500 space-y-2 list-disc pl-4" dangerouslySetInnerHTML={{ __html: lang === 'ko' ? `
                <li><b>멤버 등록:</b> Player Manager에서 이름, 성별, 실력을 입력하세요.</li>
                <li><b>참석자 선택:</b> 멤버 카드를 클릭하여 참석 상태를 활성화합니다.</li>
                <li><b>대진 생성:</b> 코트 수와 방식을 선택 후 생성 버튼을 누르세요.</li>
              ` : `
                <li><b>Add Members:</b> Enter name, gender, and skill in Player Manager.</li>
                <li><b>Select Participants:</b> Click member cards to activate status.</li>
                <li><b>Generate:</b> Choose court count and type, then click generate.</li>
              ` }}></ul>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-900 p-8 rounded-[3rem] shadow-2xl text-white">
            <h3 className="text-lg font-black text-blue-400 uppercase mb-8 tracking-[0.2em]">{t.rankingTitle}</h3>
            <div className="space-y-3 font-mono text-xs">
              {[...members].sort((a, b) => b.ntpr - a.ntpr).map((m, i) => (
                <div key={m.id} className={`flex items-center justify-between p-3 rounded-2xl ${i === 0 ? 'bg-amber-100 text-amber-900' : i === 1 ? 'bg-slate-200 text-slate-800' : i === 2 ? 'bg-orange-100 text-orange-900' : 'bg-white/5 border border-white/10'}`}>
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] font-black w-4 text-center">{i === 0 ? '👑' : i === 1 ? '🥈' : i === 2 ? '🥉' : i + 1}</span>
                    <span className="font-black text-[12px] uppercase italic">{m.name}</span>
                  </div>
                  <span className="text-[12px] font-black">{m.ntpr.toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="mt-12 pt-12 border-t border-slate-700/50 text-[10px] text-slate-400 leading-relaxed">
              <p className="mb-2 font-bold text-slate-300">{t.policyTitle}</p>
              <p>{t.policyDesc}</p>
            </div>
          </div>
        </section>

        <footer className="mt-10 mb-20 text-center">
          <button onClick={resetAllData} className="text-[9px] font-black text-red-400 uppercase tracking-[0.3em] underline">Reset All Arena Data</button>
        </footer>
      </div>
    </div>
  );
};

export default Home;
