import React from 'react';

const Equipment = () => {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-amber-50 py-24 border-b border-amber-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-100 text-amber-700 text-[10px] font-black uppercase tracking-widest mb-6">Gear Guide</span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight italic uppercase">
            나에게 맞는 테니스 <br/><span className="text-amber-600">라켓과 장비</span> 선택법
          </h1>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-20">
        <article className="prose prose-amber lg:prose-xl mx-auto">
          <p className="text-xl font-medium text-slate-600 leading-relaxed mb-12">
            "라켓이 실력을 만든다"는 말이 있을 정도로 테니스에서 장비 선택은 중요합니다. 오늘 여러분의 테니스 라이프를 바꿔줄 장비 선택의 기준을 제시합니다.
          </p>

          <h2 className="text-2xl font-black text-amber-900 mb-6 border-b-2 border-amber-100 pb-2">1. 테니스 라켓 선택의 3대 요소</h2>
          <ul className="space-y-4 text-slate-600 mb-12">
            <li><strong>무게(Weight):</strong> 남성은 290g~310g, 여성은 260g~280g 추천.</li>
            <li><strong>헤드 사이즈(Head Size):</strong> 100sq.in가 표준이며 초보자에게 적합.</li>
            <li><strong>밸런스(Balance):</strong> 헤드 헤비(파워) vs 헤드 라이트(컨트롤).</li>
          </ul>

          <h2 className="text-2xl font-black text-amber-900 mb-6 border-b-2 border-amber-100 pb-2">2. 스트링(String)과 텐션</h2>
          <p className="text-slate-600">부드러운 타구감을 원하면 인조 거트, 스핀을 원하면 폴리에스터 스트링을 추천합니다. 보통 45~52lbs 사이에서 설정합니다.</p>
        </article>
      </main>
    </div>
  );
};

export default Equipment;
