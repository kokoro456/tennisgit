import React from 'react';

const RulesItf = () => {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-6 py-24">
        <article className="prose max-w-none">
          <header className="text-center mb-24">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-widest mb-6">Global Standard</span>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter leading-tight uppercase italic">International <br/><span className="text-blue-600">Rules of Tennis</span></h1>
            <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto">국제테니스연맹(ITF)이 규정하는 테니스의 표준 경기 방식과 기술적 규격입니다.</p>
          </header>

          <section id="court">
            <h2 className="text-3xl font-black mb-6 border-l-8 border-blue-600 pl-6">1. 코트 및 장비 규격</h2>
            <p className="mb-8 text-slate-600">테니스 경기가 이루어지는 공간과 사용되는 도구는 엄격한 물리적 수치를 준수해야 합니다.</p>
            <div className="bg-slate-50 border border-slate-200 rounded-[2rem] p-10 grid grid-cols-1 md:grid-cols-2 gap-12 my-12">
              <div>
                <h4 className="font-black text-blue-600 uppercase text-xs tracking-widest mb-6">Court Dimensions</h4>
                <ul className="text-sm space-y-4 text-slate-600">
                  <li className="flex justify-between border-b border-slate-200 pb-2"><span>전장 (Total Length)</span> <span className="font-bold">23.77m (78ft)</span></li>
                  <li className="flex justify-between border-b border-slate-200 pb-2"><span>단식폭 (Singles Width)</span> <span className="font-bold">8.23m (27ft)</span></li>
                  <li className="flex justify-between border-b border-slate-200 pb-2"><span>복식폭 (Doubles Width)</span> <span className="font-bold">10.97m (36ft)</span></li>
                  <li className="flex justify-between border-b border-slate-200 pb-2"><span>네트 높이</span> <span className="font-bold">0.914m (3ft)</span></li>
                </ul>
              </div>
              <div>
                <h4 className="font-black text-blue-600 uppercase text-xs tracking-widest mb-6">Ball Specifications</h4>
                <ul className="text-sm space-y-4 text-slate-600">
                  <li className="flex justify-between border-b border-slate-200 pb-2"><span>무게 (Weight)</span> <span className="font-bold">56.0g ~ 59.4g</span></li>
                  <li className="flex justify-between border-b border-slate-200 pb-2"><span>크기 (Diameter)</span> <span className="font-bold">6.54cm ~ 6.86cm</span></li>
                  <li className="flex justify-between border-b border-slate-200 pb-2"><span>리바운드 (Rebound)</span> <span className="font-bold">135~147cm (2.54m 투하시)</span></li>
                </ul>
              </div>
            </div>
          </section>

          <section id="scoring" className="mt-32">
            <h2 className="text-3xl font-black mb-6 border-l-8 border-blue-600 pl-6">2. 스코어링 시스템 (Scoring)</h2>
            <div className="bg-slate-900 text-white p-10 rounded-[2rem] mb-8">
              <h4 className="font-black mb-8 text-xs uppercase tracking-[0.2em] text-slate-400 text-center">포인트의 호칭</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-md">
                  <span className="block text-blue-400 font-black text-2xl mb-1">0 Pt</span>
                  <span className="font-bold text-sm uppercase">Love</span>
                </div>
                <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-md">
                  <span className="block text-blue-400 font-black text-2xl mb-1">1 Pt</span>
                  <span className="font-bold text-sm uppercase">15 (Fifteen)</span>
                </div>
                <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-md">
                  <span className="block text-blue-400 font-black text-2xl mb-1">2 Pts</span>
                  <span className="font-bold text-sm uppercase">30 (Thirty)</span>
                </div>
                <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-md">
                  <span className="block text-blue-400 font-black text-2xl mb-1">3 Pts</span>
                  <span className="font-bold text-sm uppercase">40 (Forty)</span>
                </div>
              </div>
            </div>
            <p className="text-slate-600 leading-relaxed">
              양 선수가 3포인트씩 득점하면 <strong>듀스(Deuce)</strong>가 되며, 이후 2포인트 차이가 날 때까지 경기를 진행합니다. 
              6게임을 먼저 따면 세트를 획득하지만, 게임 스코어 6-6에서는 타이브레이크를 거쳐야 합니다.
            </p>
          </section>
        </article>
      </main>
    </div>
  );
};

export default RulesItf;
