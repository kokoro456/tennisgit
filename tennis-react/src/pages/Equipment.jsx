import React from 'react';
import { Link } from 'react-router-dom';

const Equipment = () => {
  return (
    <div className="antialiased">
      <header className="bg-gradient-to-br from-amber-50 to-amber-100 py-20 border-b border-amber-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-100 text-amber-700 text-[10px] font-black uppercase tracking-[0.2em] mb-6">Gear Guide</span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight leading-tight uppercase italic">
            나에게 맞는 테니스 <br /><span className="text-amber-600">라켓과 장비</span> 선택법
          </h1>
          <div className="flex justify-center items-center gap-4 text-sm text-slate-400 font-medium">
            <span>By Ubuntu Equipment Lab</span>
            <span>•</span>
            <span>February 13, 2026</span>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-20">
        <article className="prose prose-amber lg:prose-xl mx-auto">
          <p className="text-xl font-medium text-slate-600 leading-relaxed mb-12">
            "라켓이 실력을 만든다"는 말이 있을 정도로 테니스에서 장비 선택은 중요합니다. 하지만 수많은 브랜드와 스펙 사이에서 길을 잃기 쉽죠. 오늘 여러분의 테니스 라이프를 바꿔줄 장비 선택의 기준을 제시합니다.
          </p>

          <h2 className="text-3xl font-black mb-6 text-amber-900 border-b-2 border-amber-100 pb-2">1. 테니스 라켓 선택의 3대 요소</h2>
          <p className="mb-6 leading-relaxed text-slate-700">
            라켓을 고를 때 브랜드 디자인보다 먼저 확인해야 할 것은 무게, 헤드 사이즈, 그리고 밸런스입니다.
          </p>
          <ul className="list-disc pl-6 mb-12 space-y-4 text-slate-700">
            <li><strong>무게(Weight):</strong> 보통 언스트렁 기준 남성은 290g~310g, 여성은 260g~280g을 추천합니다.</li>
            <li><strong>헤드 사이즈(Head Size):</strong> 100sq.in가 표준이며 초중급자에게 적합합니다.</li>
            <li><strong>밸런스(Balance):</strong> 헤드 헤비(파워)와 헤드 라이트(조작성)로 나뉩니다.</li>
          </ul>

          <h2 className="text-3xl font-black mb-6 text-amber-900 border-b-2 border-amber-100 pb-2">2. 스트링(String)과 텐션의 비밀</h2>
          <p className="mb-6 leading-relaxed text-slate-700">라켓보다 타구감에 더 큰 영향을 미치는 것이 스트링입니다.</p>
          <h3 className="text-xl font-bold mb-4 text-amber-800">스트링 종류</h3>
          <p className="mb-8 text-slate-700">부드러운 느낌을 원한다면 <strong>인조 거트</strong>를, 강력한 스핀을 원한다면 <strong>폴리에스터</strong>를 선택하세요.</p>

          <div className="mt-20 p-10 bg-amber-50 rounded-[2.5rem] border border-amber-100 text-center">
            <h4 className="text-2xl font-black mb-4 text-amber-800">Must-Have Accessories</h4>
            <p className="text-amber-700/70 mb-0">작은 소품 하나가 여러분의 경기 집중력을 높여줍니다.</p>
          </div>
        </article>
      </main>
    </div>
  );
};

export default Equipment;
