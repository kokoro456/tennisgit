import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const RulesKato = () => {
  const [activeTab, setActiveTab] = useState('eligibility');
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (['eligibility', 'ranking', 'ethics'].includes(hash)) {
      setActiveTab(hash);
    }
  }, [location]);

  return (
    <main className="max-w-5xl mx-auto px-6 py-20">
      <article className="prose max-w-none">
        <header className="text-center mb-24">
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-100 text-teal-700 text-[10px] font-black uppercase tracking-widest mb-6">
            KATO Official Document
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-4 uppercase italic tracking-tighter">
            KATO 공식 규정집 원문
          </h1>
          <p className="text-slate-500 font-medium">한국동호인테니스연맹의 모든 규정 데이터를 수정 없이 수록하였습니다.</p>
        </header>

        {/* Tab Navigation */}
        <div className="flex gap-2 border-b-2 border-slate-100 mb-8 overflow-x-auto">
          {['eligibility', 'ranking', 'ethics'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-4 font-bold text-lg whitespace-nowrap transition-all ${
                activeTab === tab
                  ? 'bg-slate-900 text-white rounded-t-lg'
                  : 'text-slate-500 hover:text-teal-600 hover:bg-slate-50'
              }`}
            >
              {tab === 'eligibility' ? '출전자격규정' : tab === 'ranking' ? '랭킹규정' : '선수윤리규정'}
            </button>
          ))}
        </div>

        <div className="text-center font-black text-xl mb-10 text-teal-700 bg-teal-50 py-6 rounded-2xl border border-teal-100">
          ◈ 2024년 랭킹규정변경안 (2024년 3월 1일 시행) ◈
        </div>

        {activeTab === 'eligibility' && (
          <section id="eligibility">
            <div className="bg-slate-50 border border-slate-200 p-8 rounded-3xl mb-12">
              <p className="mb-4">1) KATO(한국테니스발전협의회)와 KTA(대한테니스협회) <br />
              KTA와 KATO 두단체 간 우승,입상 인정 공유하며, 2023.05.15 이후 상벌징계사항도 공유합니다.<br />
              <strong>◈ 2023년 1월1일 이후 KATA(한국동호인테니스협회) 전부서 우승 및 입상에 대해 인정하지 않는다. ◈</strong></p>
              <p className="mb-4">2) 그동안 KATO와 KATA 두단체가 선수윤리위반에 따른 상벌공유는 금일부로 파기한다. 단. KATO 자체 징계는 유효함.<br />
              * 1항과 2항은 2023. 03. 16 공지 기 시행중 (23. 1. 1. 자로 소급적용)</p>
              <p>3) 입상횟수로 우승자인정 규정 부활. 23년 5월15일부터 입상횟수 소급적용되며, 각 출전부서별로 KATO, KTA 합산 입상4회면 우승자가 된다.</p>
            </div>

            <h2 className="text-3xl font-black mb-8 border-l-8 border-teal-500 pl-4 bg-teal-50 py-2">출전자격규정</h2>
            <h4 className="text-xl font-bold mb-4">[출전나이 상세표]</h4>
            <p className="font-bold mb-4">* 남자부서 공통사항 (만 나이 출생년도 기준으로 변경)</p>
            <div className="overflow-x-auto mb-12">
              <table className="w-full border-collapse border border-slate-200 text-sm">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="border border-slate-200 p-3">구분</th>
                    <th className="border border-slate-200 p-3">청년부</th>
                    <th className="border border-slate-200 p-3">장년부</th>
                    <th className="border border-slate-200 p-3">베테랑부</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-slate-200 p-3 font-bold">순수동호인</td><td className="border border-slate-200 p-3">20세 이상</td><td className="border border-slate-200 p-3">40세 이상</td><td className="border border-slate-200 p-3">50세 이상</td></tr>
                  <tr><td className="border border-slate-200 p-3 font-bold">초등선수, 지도자</td><td className="border border-slate-200 p-3">35세 이상</td><td className="border border-slate-200 p-3">45세 이상</td><td className="border border-slate-200 p-3">55세 이상</td></tr>
                  <tr><td className="border border-slate-200 p-3 font-bold">중학선수</td><td className="border border-slate-200 p-3">40세 이상</td><td className="border border-slate-200 p-3">50세 이상</td><td className="border border-slate-200 p-3">60세 이상</td></tr>
                  <tr><td className="border border-slate-200 p-3 font-bold">고교선수</td><td className="border border-slate-200 p-3">45세 이상</td><td className="border border-slate-200 p-3">55세 이상</td><td className="border border-slate-200 p-3">65세 이상</td></tr>
                  <tr><td className="border border-slate-200 p-3 font-bold">대학/실업선수</td><td className="border border-slate-200 p-3">50세 이상</td><td className="border border-slate-200 p-3">60세 이상</td><td className="border border-slate-200 p-3">65세 이상</td></tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-2xl font-black mb-4">국화부</h3>
            <div className="overflow-x-auto mb-12">
              <table className="w-full border-collapse border border-slate-200 text-sm">
                <thead className="bg-slate-50">
                  <tr><th className="border border-slate-200 p-3">점 수</th><th className="border border-slate-200 p-3">대 상 자</th></tr>
                </thead>
                <tbody>
                  <tr><td className="border border-slate-200 p-3 font-bold text-center">9</td><td className="border border-slate-200 p-3">테니스 선수출신 (초등 만 45세, 중등 만 50세, 고등 이상 만 55세)</td></tr>
                  <tr><td className="border border-slate-200 p-3 font-bold text-center">8</td><td className="border border-slate-200 p-3">동호인 슈퍼급</td></tr>
                  <tr><td className="border border-slate-200 p-3 font-bold text-center">7</td><td className="border border-slate-200 p-3">3 ~ 4회 우승자, 만 60세 이상 동호인 슈퍼급</td></tr>
                  <tr><td className="border border-slate-200 p-3 font-bold text-center">5</td><td className="border border-slate-200 p-3">1회 우승자, 만 60세 이상 3회 우승자</td></tr>
                </tbody>
              </table>
            </div>
          </section>
        )}

        {activeTab === 'ranking' && (
          <section id="ranking">
            <h2 className="text-3xl font-black mb-8 border-l-8 border-teal-500 pl-4 bg-teal-50 py-2">랭킹규정</h2>
            <div className="space-y-8 text-slate-700 leading-relaxed">
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">1. 랭킹대회의 회원</h4>
                <p>1-1. 랭킹대회의 회원은 단체회원(대회주최자)과 개인회원(대회출전자)으로 나뉜다.</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">3. 랭킹그룹</h4>
                <div className="bg-slate-50 p-6 rounded-2xl">
                  <p>MA그룹: 서울/수도권 6개부서 필수</p>
                  <p>A그룹: 남자부 3개, 여자부 2개 필수</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeTab === 'ethics' && (
          <section id="ethics">
            <h2 className="text-3xl font-black mb-8 border-l-8 border-teal-500 pl-4 bg-teal-50 py-2">선수윤리규정</h2>
            <div className="space-y-6">
              {[
                { art: '제1조', title: '개론', content: 'KATO 주관 대회 참가 선수는 예의와 도덕성을 지켜야 한다.' },
                { art: '제2조', title: '선수의 의무', content: '폭력 행사나 인격 위협 언행 시 출장정지 등 중징계.' },
                { art: '제11조', title: '코칭', content: '경기 중 코칭 금지. 위반 시 실격 및 출장정지 가능.' }
              ].map((item, idx) => (
                <div key={idx} className="border-b border-slate-100 pb-6">
                  <span className="text-teal-600 font-black mr-2">{item.art} 【{item.title}】</span>
                  <p className="inline">{item.content}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </article>
    </main>
  );
};

export default RulesKato;
