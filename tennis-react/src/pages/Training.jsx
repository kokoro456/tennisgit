import React from 'react';
import { Link } from 'react-router-dom';

const Training = () => {
  return (
    <div className="antialiased">
      <header className="bg-gradient-to-br from-green-50 to-green-100 py-20 border-b border-green-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-[10px] font-black uppercase tracking-[0.2em] mb-6">Training</span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight leading-tight uppercase italic">
            NTPR 4.0으로 가는 <br /><span className="text-green-600">체계적인 훈련</span> 방법
          </h1>
          <div className="flex justify-center items-center gap-4 text-sm text-slate-400 font-medium">
            <span>By Ubuntu Performance Coach</span>
            <span>•</span>
            <span>February 13, 2026</span>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-20">
        <article className="prose prose-green lg:prose-xl mx-auto">
          <p className="text-xl font-medium text-slate-600 leading-relaxed mb-12 italic">
            "매번 게임만 한다고 실력이 늘까요? 정체기에 빠진 여러분을 위해 구체적이고 실천 가능한 테니스 훈련 드릴을 소개합니다."
          </p>

          <h2 className="text-3xl font-black mb-6 text-green-900 border-l-8 border-green-500 pl-4">1. 일관성 있는 베이스라인 훈련</h2>
          <p className="mb-6 leading-relaxed text-slate-700">파워보다 중요한 것은 일관성입니다.</p>
          <ul className="list-disc pl-6 mb-12 space-y-4 text-slate-700">
            <li><strong>타겟 프랙티스:</strong> 코너 구석에 캔을 세워두고 맞히는 연습을 하세요.</li>
            <li><strong>크로스 코트 랠리:</strong> 대각선 방향으로 깊게 치는 연습을 통해 안전한 궤적을 확보하세요.</li>
          </ul>

          <h2 className="text-3xl font-black mb-6 text-green-900 border-l-8 border-green-500 pl-4">2. 네트 플레이(발리)</h2>
          <p className="mb-8 text-slate-700">발리는 큰 스윙이 필요 없습니다. 벽을 마주 보고 아주 가까운 거리에서 연습하는 <strong>월 발리</strong> 드릴을 추천합니다.</p>

          <div className="mt-20 bg-slate-900 p-10 rounded-[3rem] text-center text-white">
            <h4 className="text-2xl font-black mb-4 uppercase italic tracking-tighter text-green-400">Ready to Test Your Skills?</h4>
            <p className="text-slate-400 mb-8 font-medium">훈련한 성과를 실제 경기 대진표에서 확인해보세요.</p>
            <Link to="/" className="inline-block bg-green-600 text-white px-10 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-green-700 transition-all shadow-xl shadow-green-900/20">
              Create Match Sheet →
            </Link>
          </div>
        </article>
      </main>
    </div>
  );
};

export default Training;
