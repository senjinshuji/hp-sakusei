export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 会社情報 */}
          <div>
            <h3 className="text-xl font-bold mb-4">Senjin Holdings</h3>
            <p className="text-gray-400 mb-4">
              革新的なソリューションで<br />
              未来を創造する投資会社
            </p>
            <div className="text-sm text-gray-400">
              <p>〒100-0001</p>
              <p>東京都千代田区千代田1-1-1</p>
              <p>千代田ビル10F</p>
            </div>
          </div>

          {/* サービス */}
          <div>
            <h4 className="text-lg font-semibold mb-4">サービス</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition duration-300">投資事業</a></li>
              <li><a href="#" className="hover:text-white transition duration-300">コンサルティング</a></li>
              <li><a href="#" className="hover:text-white transition duration-300">M&A支援</a></li>
              <li><a href="#" className="hover:text-white transition duration-300">事業開発</a></li>
            </ul>
          </div>

          {/* 企業情報 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">企業情報</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-white transition duration-300">会社概要</a></li>
              <li><a href="#vision" className="hover:text-white transition duration-300">ビジョン</a></li>
              <li><a href="#team" className="hover:text-white transition duration-300">チーム</a></li>
              <li><a href="#news" className="hover:text-white transition duration-300">ニュース</a></li>
              <li><a href="#careers" className="hover:text-white transition duration-300">採用情報</a></li>
            </ul>
          </div>

          {/* お問い合わせ・SNS */}
          <div>
            <h4 className="text-lg font-semibold mb-4">お問い合わせ</h4>
            <div className="space-y-2 text-gray-400 mb-6">
              <p>TEL: 03-1234-5678</p>
              <p>EMAIL: info@senjin-holdings.com</p>
              <p>営業時間: 平日 9:00-18:00</p>
            </div>

            <div>
              <h5 className="font-semibold mb-3">フォローする</h5>
              <div className="flex space-x-4">
                {/* Twitter/X */}
                <a 
                  href="https://twitter.com/senjinholdings" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition duration-300"
                  aria-label="Twitter"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>

                {/* LinkedIn */}
                <a 
                  href="https://linkedin.com/company/senjin-holdings" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition duration-300"
                  aria-label="LinkedIn"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>

                {/* Facebook */}
                <a 
                  href="https://facebook.com/senjinholdings" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition duration-300"
                  aria-label="Facebook"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                {/* YouTube */}
                <a 
                  href="https://youtube.com/@senjinholdings" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition duration-300"
                  aria-label="YouTube"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* サイトマップ・法的情報 */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              <a href="/privacy" className="hover:text-white transition duration-300">プライバシーポリシー</a>
              <a href="/terms" className="hover:text-white transition duration-300">利用規約</a>
              <a href="/legal" className="hover:text-white transition duration-300">法的事項</a>
              <a href="/sitemap" className="hover:text-white transition duration-300">サイトマップ</a>
            </div>
            <div className="text-sm text-gray-400">
              © {currentYear} Senjin Holdings. All rights reserved.
            </div>
          </div>
        </div>

        {/* お問い合わせボタン */}
        <div className="text-center mt-8">
          <a 
            href="#contact" 
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300"
          >
            お問い合わせはこちら
          </a>
        </div>
      </div>
    </footer>
  )
}