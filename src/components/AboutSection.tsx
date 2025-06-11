export default function AboutSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">会社について</h2>
        
        {/* Company Overview */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-700">会社概要</h3>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4 text-gray-800">基本情報</h4>
                <div className="space-y-3 text-gray-600">
                  <div className="flex">
                    <span className="w-24 font-medium">会社名:</span>
                    <span>株式会社Senjin Holdings</span>
                  </div>
                  <div className="flex">
                    <span className="w-24 font-medium">設立:</span>
                    <span>2020年4月</span>
                  </div>
                  <div className="flex">
                    <span className="w-24 font-medium">資本金:</span>
                    <span>1,000万円</span>
                  </div>
                  <div className="flex">
                    <span className="w-24 font-medium">従業員数:</span>
                    <span>25名</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4 text-gray-800">所在地</h4>
                <div className="text-gray-600">
                  <p className="mb-2">〒100-0001</p>
                  <p className="mb-2">東京都千代田区千代田1-1-1</p>
                  <p className="mb-2">千代田ビル10F</p>
                  <p>TEL: 03-1234-5678</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-700">ビジョン・ミッション</h3>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-4 text-blue-600">ビジョン</h4>
                <p className="text-gray-700 leading-relaxed">
                  テクノロジーの力で社会課題を解決し、すべての人がより豊かな生活を送れる未来を創造する。
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-4 text-green-600">ミッション</h4>
                <p className="text-gray-700 leading-relaxed">
                  革新的なITソリューションを通じて、お客様のビジネス成長を支援し、デジタル社会の発展に貢献する。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* History */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-700">沿革</h3>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start space-x-4 border-l-4 border-blue-600 pl-6">
                <div className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-semibold flex-shrink-0">2020</div>
                <div>
                  <h4 className="font-semibold mb-1">4月 - 会社設立</h4>
                  <p className="text-gray-600">株式会社Senjin Holdings設立。ITコンサルティング事業を開始。</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 border-l-4 border-blue-600 pl-6">
                <div className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-semibold flex-shrink-0">2021</div>
                <div>
                  <h4 className="font-semibold mb-1">6月 - サービス拡張</h4>
                  <p className="text-gray-600">システム開発部門を新設。カスタムソフトウェア開発サービスを開始。</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 border-l-4 border-blue-600 pl-6">
                <div className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-semibold flex-shrink-0">2022</div>
                <div>
                  <h4 className="font-semibold mb-1">10月 - データ分析事業開始</h4>
                  <p className="text-gray-600">AI・機械学習を活用したデータ分析サービスを開始。</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 border-l-4 border-blue-600 pl-6">
                <div className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-semibold flex-shrink-0">2023</div>
                <div>
                  <h4 className="font-semibold mb-1">3月 - 組織拡大</h4>
                  <p className="text-gray-600">従業員数20名を突破。新オフィスに移転。</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 border-l-4 border-blue-600 pl-6">
                <div className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-semibold flex-shrink-0">2024</div>
                <div>
                  <h4 className="font-semibold mb-1">1月 - 新サービス展開</h4>
                  <p className="text-gray-600">クラウドサービス導入支援を開始。DX推進コンサルティングを本格化。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}