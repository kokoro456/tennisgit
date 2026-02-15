import React from 'react';

const Guide = () => {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-slate-50 py-24 border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-widest mb-6">Management</span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight italic uppercase">
            테니스 클럽 운영 및 <br/><span className="text-blue-600">점수 계산법</span> 가이드
          </h1>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-20">
        <article className="prose lg:prose-xl mx-auto">
          <h2 className="text-2xl font-black mb-6">1. 테니스 점수 체계</h2>
          <p className="text-slate-600 mb-8">0점(Love)부터 시작하여 15, 30, 40 순으로 점수가 올라갑니다. 40-40 상황은 듀스라고 부릅니다.</p>

          <h2 className="text-2xl font-black mb-6">2. 효율적인 대진표 작성</h2>
          <p className="text-slate-600 mb-8">공정한 대진표는 클럽 운영의 핵심입니다. 실력 균형의 원칙에 따라 팀을 나누는 것이 중요합니다.</p>
        </article>
      </main>
    </div>
  );
};

export default Guide;
