import React from 'react';

const Training = () => {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-green-50 py-24 border-b border-green-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-[10px] font-black uppercase tracking-widest mb-6">Training</span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight italic uppercase">
            NTPR 4.0으로 가는 <br/><span className="text-green-600">체계적인 훈련</span> 방법
          </h1>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-20">
        <article className="prose prose-green lg:prose-xl mx-auto">
          <p className="text-xl font-medium text-slate-600 leading-relaxed mb-12 italic">
            "매번 게임만 한다고 실력이 늘까요? 정체기에 빠진 여러분을 위해 체계적인 훈련법을 소개합니다."
          </p>

          <h2 className="text-2xl font-black text-green-900 mb-6 border-l-4 border-green-500 pl-4">1. 일관성 있는 랠리 훈련</h2>
          <p className="text-slate-600 mb-8">파워보다 중요한 것은 일관성입니다. 타겟 프랙티스를 통해 내가 원하는 곳으로 공을 보내는 연습을 하세요.</p>

          <h2 className="text-2xl font-black text-green-900 mb-6 border-l-4 border-green-500 pl-4">2. 네트 플레이 (발리)</h2>
          <p className="text-slate-600 mb-8">벽을 마주 보고 아주 가까운 거리에서 연습하는 월 발리 드릴은 반응 속도를 비약적으로 높여줍니다.</p>
        </article>
      </main>
    </div>
  );
};

export default Training;
