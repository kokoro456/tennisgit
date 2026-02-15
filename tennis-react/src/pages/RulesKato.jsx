import React, { useState } from 'react';

const RulesKato = () => {
  const [activeTab, setActiveTab] = useState('eligibility');

  const tabs = [
    { id: 'eligibility', label: '출전자격규정' },
    { id: 'ranking', label: '랭킹규정' },
    { id: 'ethics', label: '선수윤리규정' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-5xl mx-auto px-6 py-20">
        <article className="prose max-w-none">
          <header className="text-center mb-24">
            <span className="inline-block px-4 py-1.5 rounded-full bg-teal-100 text-teal-700 text-[10px] font-black uppercase tracking-widest mb-6">KATO Official Document</span>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-4 uppercase italic tracking-tighter">KATO 공식 규정집</h1>
            <p className="text-slate-500 font-medium">한국동호인테니스연맹의 모든 규정 데이터를 수록하였습니다.</p>
          </header>

          {/* Tab Navigation */}
          <div className="flex gap-2 border-b-2 border-slate-100 mb-8 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 font-bold text-lg whitespace-nowrap transition-all ${
                  activeTab === tab.id 
                    ? 'bg-blue-600 text-white rounded-t-lg' 
                    : 'text-slate-500 hover:text-blue-600'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="text-center font-black text-xl mb-10 text-teal-700 bg-teal-50 py-6 rounded-2xl border border-teal-100">
            ◈ 2024년 랭킹규정변경안 (2024년 3월 1일 시행) ◈
          </div>

          {activeTab === 'eligibility' && (
            <section id="eligibility">
              <div className="bg-slate-50 p-8 rounded-2xl mb-12 border border-slate-200">
                <p className="mb-4">1) KATO(한국테니스발전협의회)와 KTA(대한테니스협회) 협력</p>
                <p className="text-sm text-slate-600">◈ 2023년 1월 1일 이후 KATA 전부서 우승 및 입상 불인정 ◈</p>
              </div>
              <h2 className="text-3xl font-black mb-6">출전자격규정</h2>
              {/* 여기에 기존 테이블 구조를 JSX로 추가할 수 있습니다 */}
              <p className="text-slate-500 italic">상세 테이블 및 세부 내용은 마이그레이션 중입니다...</p>
            </section>
          )}

          {/* 기타 탭 내용들... */}
        </article>
      </main>
    </div>
  );
};

export default RulesKato;
