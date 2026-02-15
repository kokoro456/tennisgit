import React from 'react';
import { Link } from 'react-router-dom';

const Guide = () => {
  return (
    <div className="antialiased">
      <header className="bg-slate-50 py-20 border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] mb-6">Management</span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight leading-tight uppercase italic">
            테니스 클럽 운영 및 <br /><span className="text-blue-600">점수 계산법</span> 가이드
          </h1>
          <div className="flex justify-center items-center gap-4 text-sm text-slate-400 font-medium">
            <span>By Ubuntu Editor</span>
            <span>•</span>
            <span>February 13, 2026</span>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-20">
        <article className="prose prose-slate lg:prose-xl mx-auto">
          <p className="text-xl font-medium text-slate-600 leading-relaxed italic mb-12 border-l-4 border-blue-500 pl-6">
            "테니스를 처음 시작하거나 동호회를 운영하게 된 분들에게 가장 큰 장벽은 무엇일까요? 바로 독특한 점수 체계와 매번 머리 아픈 대진표 작성입니다."
          </p>

          <h2 className="text-3xl font-black mb-6 text-slate-900">1. 테니스의 독특한 점수 체계 이해하기</h2>
          <p className="mb-6 leading-relaxed text-slate-700">
            테니스는 0점을 <strong>'러브(Love)'</strong>라고 부르는 것부터 시작해 15, 30, 40이라는 독특한 숫자 체계를 가집니다.
          </p>
          <ul className="list-disc pl-6 mb-12 space-y-4 text-slate-700">
            <li><strong>Love (0점):</strong> 달걀(l'œuf)에서 유래했다는 설이 유력합니다.</li>
            <li><strong>15, 30, 40:</strong> 4포인트를 먼저 따면 게임을 가져옵니다.</li>
            <li><strong>Deuce (듀스):</strong> 40-40 상황에서 2포인트 차이가 나야 승리합니다.</li>
          </ul>

          <h2 className="text-3xl font-black mb-6 text-slate-900">2. 효율적인 동호회 대진표 작성 노하우</h2>
          <h3 className="text-xl font-bold mb-4">실력 균형의 원칙</h3>
          <p className="mb-8 text-slate-700">
            단순히 랜덤으로 팀을 나누면 실력 차이가 너무 벌어집니다. <strong>UBUNTU 매칭 시스템</strong>처럼 NTPR 지수를 활용하세요.
          </p>

          <div className="mt-20 p-10 bg-slate-900 rounded-[2.5rem] text-white">
            <h4 className="text-2xl font-black mb-4 italic uppercase tracking-tighter text-blue-400">Pro Tip for Managers</h4>
            <p className="text-slate-400 leading-relaxed mb-8">
              번거로운 수동 작업 대신 자동화 도구를 사용하세요. UBUNTU 테니스 매칭 시스템은 이 모든 과정을 단 몇 번의 클릭으로 해결해 드립니다.
            </p>
            <Link to="/" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-blue-500 transition-all">
              Launch Matcher Tool →
            </Link>
          </div>
        </article>
      </main>
    </div>
  );
};

export default Guide;
