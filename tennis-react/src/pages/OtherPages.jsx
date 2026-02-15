import React from 'react';

const PlaceholderPage = ({ title }) => (
  <div className="min-h-screen flex items-center justify-center bg-slate-50">
    <div className="text-center">
      <h1 className="text-6xl font-black uppercase italic mb-4">{title}</h1>
      <p className="text-slate-500 font-medium">이 페이지는 현재 이사 중입니다...</p>
      <a href="/" className="mt-8 inline-block bg-blue-600 text-white px-8 py-3 rounded-xl font-bold uppercase tracking-widest">Home으로 돌아가기</a>
    </div>
  </div>
);

export const Equipment = () => <PlaceholderPage title="Equipment" />;
export const Training = () => <PlaceholderPage title="Training" />;
export const Guide = () => <PlaceholderPage title="Guide" />;
