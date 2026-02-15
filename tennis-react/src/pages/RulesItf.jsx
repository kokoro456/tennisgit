import React from 'react';
import { Link } from 'react-router-dom';

const RulesItf = () => {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24">
      <article className="prose max-w-none">
        <header className="text-center mb-24">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-widest mb-6">Global Standard</span>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter leading-tight uppercase italic">
            International <br /><span className="text-blue-600">Rules of Tennis</span>
          </h1>
          <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto">국제테니스연맹(ITF)이 규정하는 테니스의 표준 경기 방식과 기술적 규격입니다.</p>
        </header>

        <section id="court">
          <h2 className="text-3xl font-black mb-6 border-l-8 border-blue-600 pl-4">1. 코트 및 장비 규격</h2>
          <p className="mb-8">테니스 경기가 이루어지는 공간과 사용되는 도구는 엄격한 물리적 수치를 준수해야 합니다.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
              <h4 className="font-black text-blue-600 uppercase tracking-widest text-xs mb-4">Court Dimensions</h4>
              <ul className="text-sm space-y-3 text-slate-600">
                <li><strong>전장 (Total Length):</strong> 23.77m (78ft)</li>
                <li><strong>단식폭 (Singles Width):</strong> 8.23m (27ft)</li>
                <li><strong>복식폭 (Doubles Width):</strong> 10.97m (36ft)</li>
                <li><strong>네트 높이:</strong> 중앙 기준 0.914m (3ft)</li>
              </ul>
            </div>
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
              <h4 className="font-black text-blue-600 uppercase tracking-widest text-xs mb-4">Ball Specifications</h4>
              <ul className="text-sm space-y-3 text-slate-600">
                <li><strong>무게 (Weight):</strong> 56.0g ~ 59.4g</li>
                <li><strong>크기 (Diameter):</strong> 6.54cm ~ 6.86cm</li>
                <li><strong>리바운드 (Rebound):</strong> 254cm 높이 투하 시 135~147cm 반등</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="scoring" className="mt-24">
          <h2 className="text-3xl font-black mb-6 border-l-8 border-blue-600 pl-4">2. 스코어링 시스템 (Scoring)</h2>
          <p className="mb-8">테니스의 점수 산정 방식은 '포인트-게임-세트-매치'의 계층 구조를 가집니다.</p>
          <div className="bg-slate-900 text-white p-8 rounded-3xl mb-8">
            <h4 className="font-black text-blue-400 mb-6 uppercase italic">Point Calls</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-white/10 p-4 rounded-2xl">
                <span className="block text-blue-400 font-black">0 Pt</span>Love
              </div>
              <div className="bg-white/10 p-4 rounded-2xl">
                <span className="block text-blue-400 font-black">1 Pt</span>15
              </div>
              <div className="bg-white/10 p-4 rounded-2xl">
                <span className="block text-blue-400 font-black">2 Pts</span>30
              </div>
              <div className="bg-white/10 p-4 rounded-2xl">
                <span className="block text-blue-400 font-black">3 Pts</span>40
              </div>
            </div>
          </div>
          <p className="text-slate-600">
            양 선수가 3포인트씩 득점하면 **듀스(Deuce)**가 되며, 이후 2포인트 차이가 날 때까지 경기를 진행합니다.
          </p>
        </section>
      </article>
    </main>
  );
};

export default RulesItf;
