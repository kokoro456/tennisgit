import React from 'react';
import { Link } from 'react-router-dom';

const Privacy = () => {
  return (
    <div className="max-w-3xl mx-auto py-20 px-6">
      <Link to="/" className="text-blue-600 font-bold mb-8 inline-block hover:underline">
        ← Home
      </Link>
      
      {/* Korean Version */}
      <div className="mb-16">
        <h1 className="text-4xl font-black mb-6 border-b-2 border-slate-100 pb-4">개인정보 처리방침</h1>
        <p className="text-slate-600 mb-8 font-medium">UBUNTU 테니스 매칭 시스템(이하 '서비스')은 사용자의 개인정보를 소중히 여기며, 개인정보 보호법을 준수합니다.</p>

        <section className="mb-8">
          <h2 className="text-xl font-bold mt-8 mb-3 text-blue-600">1. 수집하는 개인정보 항목</h2>
          <p className="text-slate-700 leading-relaxed">본 서비스는 별도의 회원가입 없이 이용 가능하며, 사용자가 입력하는 플레이어 이름, 성별, 숙련도(NTPR) 정보만을 처리합니다.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mt-8 mb-3 text-blue-600">2. 개인정보의 저장 및 파기</h2>
          <p className="text-slate-700 leading-relaxed">본 서비스는 어떠한 데이터도 외부 서버로 전송하거나 저장하지 않습니다. 모든 데이터는 사용자의 웹 브라우저 로컬 저장소(Local Storage)에만 저장됩니다. 브라우저의 캐시를 삭제하거나 데이터를 초기화하면 즉시 파기됩니다.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mt-8 mb-3 text-blue-600">3. 쿠키 및 광고 관련</h2>
          <p className="text-slate-700 leading-relaxed">본 서비스는 Google AdSense 광고를 게재하며, Google은 사용자의 웹사이트 방문 기록을 바탕으로 맞춤형 광고를 제공하기 위해 쿠키를 사용합니다. 사용자는 Google 광고 설정에서 맞춤형 광고를 해제할 수 있습니다.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mt-8 mb-3 text-blue-600">4. 사용자의 권리</h2>
          <p className="text-slate-700 leading-relaxed">사용자는 언제든지 본 서비스의 'Reset All Data' 기능을 통해 저장된 정보를 스스로 삭제할 수 있습니다.</p>
        </section>
      </div>

      <div className="h-px bg-slate-200 my-16"></div>

      {/* English Version */}
      <div className="mb-16">
        <h1 className="text-4xl font-black mb-6 border-b-2 border-slate-100 pb-4">Privacy Policy</h1>
        <p className="text-slate-600 mb-8 font-medium">UBUNTU Tennis Matcher ("the Service") respects your privacy and complies with data protection regulations.</p>

        <section className="mb-8">
          <h2 className="text-xl font-bold mt-8 mb-3 text-blue-600">1. Information Collected</h2>
          <p className="text-slate-700 leading-relaxed">This Service does not require registration. We only process player names, gender, and skill levels (NTPR) entered by the user.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mt-8 mb-3 text-blue-600">2. Storage and Deletion</h2>
          <p className="text-slate-700 leading-relaxed">The Service does not transmit or store any data on external servers. All data is stored locally in the user's web browser (Local Storage). Data is destroyed immediately when the browser cache or local storage is cleared.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mt-8 mb-3 text-blue-600">3. Cookies and Advertising</h2>
          <p className="text-slate-700 leading-relaxed">This Service displays Google AdSense advertisements. Google uses cookies to serve ads based on a user's prior visits to your website or other websites. Users may opt out of personalized advertising by visiting Google's Ad Settings.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mt-8 mb-3 text-blue-600">4. User Rights</h2>
          <p className="text-slate-700 leading-relaxed">Users can delete their stored information at any time using the 'Reset All Data' feature within the Service.</p>
        </section>
      </div>

      <footer className="mt-20 text-center text-slate-400 text-sm">
        Contact: kokoro456@gmail.com
      </footer>
    </div>
  );
};

export default Privacy;
