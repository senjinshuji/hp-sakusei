export default function BusinessSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">事業紹介</h2>
        
        {/* Services */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-700">サービス一覧</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 text-4xl mb-4">💡</div>
              <h4 className="text-xl font-semibold mb-3">IT コンサルティング</h4>
              <p className="text-gray-600">企業のデジタル変革を支援し、効率的なシステム導入をサポートします。</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 text-4xl mb-4">🚀</div>
              <h4 className="text-xl font-semibold mb-3">システム開発</h4>
              <p className="text-gray-600">最新技術を活用したカスタムソフトウェアの開発を行います。</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 text-4xl mb-4">📊</div>
              <h4 className="text-xl font-semibold mb-3">データ分析</h4>
              <p className="text-gray-600">ビジネスデータを活用した戦略的な意思決定をサポートします。</p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-700">私たちの特徴</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 text-white p-2 rounded-full flex-shrink-0">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">豊富な経験</h4>
                <p className="text-gray-600">10年以上にわたる業界経験と実績を持つ専門チーム</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 text-white p-2 rounded-full flex-shrink-0">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">最新技術</h4>
                <p className="text-gray-600">常に最新の技術トレンドをキャッチアップし、最適なソリューションを提供</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 text-white p-2 rounded-full flex-shrink-0">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">カスタマイズ対応</h4>
                <p className="text-gray-600">お客様のニーズに合わせた柔軟なサービス提供</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 text-white p-2 rounded-full flex-shrink-0">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">アフターサポート</h4>
                <p className="text-gray-600">プロジェクト完了後も継続的なサポートを提供</p>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-700">実績</h3>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
              <p className="text-gray-600">プロジェクト実績</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <p className="text-gray-600">クライアント数</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
              <p className="text-gray-600">年の経験</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-2">99%</div>
              <p className="text-gray-600">顧客満足度</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}