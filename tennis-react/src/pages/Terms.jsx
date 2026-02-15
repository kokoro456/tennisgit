import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
  return (
    <div className="max-w-3xl mx-auto py-20 px-6">
      <Link to="/" className="text-emerald-600 font-bold mb-8 inline-block hover:underline">
        ← Home
      </Link>
      
      {/* Korean Version */}
      <div className="mb-16">
        <h1 className="text-4xl font-black mb-6 border-b-2 border-slate-100 pb-4">이용약관</h1>
        <p className="text-slate-600 mb-8 font-medium">본 약관은 UBUNTU 테니스 매칭 시스템(이하 '서비스')이 제공하는 웹사이트의 이용 조건 및 절차를 규정합니다.</p>

        <section className="mb-8">
          <h2 className="text-xl font-bold mt-8 mb-3 text-emerald-600">1. 서비스의 목적</h2>
          <p className="text-slate-700 leading-relaxed">본 서비스는 테니스 동호회 대진표 생성 및 경기 관리를 돕는 유틸리티 도구입니다.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mt-8 mb-3 text-emerald-600">2. 책임의 한계</h2>
          <p className="text-slate-700 leading-relaxed">본 서비스는 사용자가 입력한 데이터의 정확성을 보장하지 않으며, 서비스 이용 중 발생한 손실이나 분쟁(경기 결과에 따른 갈등 등)에 대해 어떠한 법적 책임도 지지 않습니다.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mt-8 mb-3 text-emerald-600">3. 데이터 관리</h2>
          <p className="text-slate-700 leading-relaxed">모든 데이터는 사용자의 기기에만 저장되며, 브라우저 환경에 따라 데이터가 유실될 수 있습니다. 중요한 정보는 '내보내기' 기능을 통해 별도로 백업할 것을 권장합니다.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mt-8 mb-3 text-emerald-600">4. 약관의 변경</h2>
          <p className="text-slate-700 leading-relaxed">본 서비스는 예고 없이 약관을 변경할 수 있으며, 변경된 약관은 사이트에 게시됨과 동시에 효력이 발생합니다.</p>
        </section>
      </div>

      <div className="h-px bg-slate-200 my-16"></div>

      {/* English Version */}
      <div className="mb-16">
        <h1 className="text-4xl font-black mb-6 border-b-2 border-slate-100 pb-4">Terms of Service</h1>
        <p className="text-slate-600 mb-8 font-medium">These terms regulate the use of the UBUNTU Tennis Matcher website ("the Service").</p>

        <section className="mb-8">
          <h2 className="text-xl font-bold mt-8 mb-3 text-emerald-600">1. Purpose of Service</h2>
          <p className="text-slate-700 leading-relaxed">This Service is a utility tool designed to help generate tennis match sheets and manage club activities.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mt-8 mb-3 text-emerald-600">2. Limitation of Liability</h2>
          <p className="text-slate-700 leading-relaxed">The Service does not guarantee the accuracy of data entered by users and is not legally responsible for any losses or disputes (such as conflicts over match results) arising from the use of the Service.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mt-8 mb-3 text-emerald-600">3. Data Management</h2>
          <p className="text-slate-700 leading-relaxed">All data is stored only on the user's device. Data may be lost depending on the browser environment. Users are encouraged to back up important information using the 'Export' feature.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mt-8 mb-3 text-emerald-600">4. Changes to Terms</h2>
          <p className="text-slate-700 leading-relaxed">The Service may change these terms without prior notice. The changed terms become effective as soon as they are posted on the website.</p>
        </section>
      </div>

      <footer className="mt-20 text-center text-slate-400 text-sm">
        Last Updated: 2026.02.10
      </footer>
    </div>
  );
};

export default Terms;
