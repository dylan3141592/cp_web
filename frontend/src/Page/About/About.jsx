import React from 'react'
import companyImage from "../../assets/image2.jpg"

const About = () => {
  return (
<div className="container mx-auto px-4 py-32 max-w-7xl">
      <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-24">
        <img src={companyImage} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900"></div>
        <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 text-white">
          <h3 className="text-2xl md:text-4xl font-bold mb-2 md:mb-3">
            ABC 자산운용사는
          </h3>
          <p className="text-base md:text-xl font-light">
            혁신과 신뢰로 글로벌 시장을 선도합니다.
          </p>
        </div>
      </div>

      <div className="mb-24 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-slate-800 text-center">
          회사 소개
        </h2>
        <div className="text-lg leading-relaxed text-gray-600 space-y-6">
          <p>
            ABC 자산운용사는 2018년 설립 이래로 암호화폐 분야 투자로
            앞장서고 있습니다.
          </p>
          <p>
            특히 미래 화폐로 성장 가능성 있는 암호화폐에 적극 투자 및
            선도하고 있습니다.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">
        {[
          { title: "원칙", desc: "원칙을 최우선 가치로 삼습니다" },
          { title: "신뢰", desc: "신뢰를 최우선 가치로 삼습니다" },
          { title: "도전", desc: "도전을 최우선 가치로 삼습니다" },
        ].map((value, index) => (
          <div
            key={index}
            className="bg-white p-10 rounded-xl shadow-lg text-center hover:shadow-2xl transition-all duration-300 border border-gray-100"
          >
            <h3 className="text-2xl font-bold mb-4 text-indigo-600">
              {value.title}
            </h3>
            <p className="text-gray-600 text-lg">{value.desc}</p>
          </div>
        ))}
      </div>

      <div className="mb-24 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-slate-800">회사 비전</h2>
        <p className="text-2xl leading-relaxed text-gray-600 font-light">
          "세상에 변화를 가져다 줄 혁신 암호화폐를 발굴하여,
          <br />더 나은 세상을 만드는데 기여하겠습니다."
        </p>
      </div>

      <div className="mb-24">
        <h2 className="text-4xl font-bold mb-12 text-slate-800 text-center">
          회사 연혁
        </h2>
        <div className="space-y-12 max-w-5xl mx-auto">
          {[
            { year: "2025", event: "글로벌 시장 진출" },
            { year: "2023", event: "암호화폐 본격 투자" },
            { year: "2021", event: "유동성 장세로 투자 수익 확보" },
            { year: "2018", event: "회사 설립" },
          ].map((item, index) => (
            <div
              key={index}
              className={`flex items-center gap-8 ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <div className="w-1/2 text-center">
                <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  <h3 className="text-2xl font-bold mb-3 text-indigo-600">
                    {item.year}
                  </h3>
                  <p className="text-gray-700 text-lg">{item.event}</p>
                </div>
              </div>
              <div className="w-4 h-4 bg-gray-800 rounded-full"></div>
              <div className="w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
