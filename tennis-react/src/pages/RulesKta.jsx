import React from 'react';

const RulesKta = () => {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-5xl mx-auto px-6 py-20">
        <article className="prose max-w-none">
          <header className="text-center mb-24">
            <span className="inline-block px-4 py-1.5 rounded-full bg-slate-100 text-slate-700 text-[10px] font-black uppercase tracking-widest mb-6">KTA Official Standards</span>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-4 uppercase italic tracking-tighter">대한테니스협회 규정집</h1>
          </header>

          <section>
            <h2 className="text-2xl font-black mb-8 bg-slate-100 p-4 rounded-lg">KTA 주요 규정 목록</h2>
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
              <ul className="space-y-4">
                {['대한테니스협회 정관', '국가대표 선발 규정', '심판 규정 및 경기 규칙', '랭킹 규정'].map((item, i) => (
                  <li key={i} className="flex justify-between items-center border-b pb-2">
                    <span className="font-bold">{item}</span>
                    <span className="text-xs text-slate-400">KTA 공식 자료</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
};

export default RulesKta;
