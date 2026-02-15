import React from 'react';

const RulesKta = () => {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20">
      <article className="prose max-w-none">
        <header className="text-center mb-24">
          <span className="inline-block px-4 py-1.5 rounded-full bg-slate-100 text-slate-700 text-[10px] font-black uppercase tracking-widest mb-6">KTA Official Standards</span>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-4 uppercase italic tracking-tighter">대한테니스협회 규정집</h1>
          <p className="text-slate-500 font-medium">KTA 대한테니스협회의 주요 규정 및 가이드라인입니다.</p>
          <div className="mt-4 text-sm text-slate-400">
            출처: <a href="https://www.kortennis.or.kr/intro/regulations.do" target="_blank" rel="noreferrer" className="text-blue-600 underline">대한테니스협회(KTA) 정보광장</a>
          </div>
        </header>

        <section>
          <h2 className="text-3xl font-black mb-8 border-l-8 border-slate-800 pl-4 bg-slate-50 py-2">KTA 주요 규정 목록</h2>
          <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
            <ul className="space-y-4">
              {[
                { title: '대한테니스협회 정관', dept: '관리부' },
                { title: '국가대표 선발 및 운영 규정', dept: '경기력향상위원회' },
                { title: '심판위원회 규정 및 경기 규칙', dept: '심판위원회' },
                { title: '랭킹 규정 (일반/주니어/동호인)', dept: '랭킹위원회' },
                { title: '선수 및 지도자 등록 규정', dept: '등록관리부' }
              ].map((item, idx) => (
                <li key={idx} className="flex justify-between items-center border-b border-slate-50 pb-4 last:border-0">
                  <span className="font-bold text-slate-800">{item.title}</span>
                  <span className="text-xs text-slate-400 px-3 py-1 bg-slate-50 rounded-full">{item.dept}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-20">
          <div className="bg-amber-50 border border-amber-100 p-8 rounded-3xl">
            <h3 className="text-amber-800 font-black mb-4 uppercase italic">안내사항</h3>
            <p className="text-sm text-amber-700 leading-relaxed">
              본 페이지는 대한테니스협회의 공식 규정 목록을 안내하고 있습니다. KTA의 규정은 체육회 지침 및 협회 이사회 결의에 따라 수시로 개정될 수 있으므로, 가장 최신의 정확한 규정 전문은 반드시 KTA 공식 홈페이지를 통해 확인하시기 바랍니다.
            </p>
          </div>
        </section>
      </article>
    </main>
  );
};

export default RulesKta;
