"use client"

import { useEffect } from "react"
import Link from "next/link"

export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar")
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add("scrolled")
        } else {
          navbar.classList.remove("scrolled")
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav id="navbar" className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 transition-all">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <span className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center text-xl font-bold">
                禹
              </span>
              <span className="text-xl font-bold text-gray-800">禹州文旅</span>
            </Link>

            <ul className="hidden md:flex items-center gap-8">
              <li>
                <Link href="/" className="text-red-600 font-medium">
                  首页
                </Link>
              </li>
              <li>
                <Link href="/cuisine" className="text-gray-700 hover:text-red-600 transition-colors">
                  禹州美食
                </Link>
              </li>
              <li>
                <Link href="/attractions" className="text-gray-700 hover:text-red-600 transition-colors">
                  景点推荐
                </Link>
              </li>
              <li>
                <Link href="/culture" className="text-gray-700 hover:text-red-600 transition-colors">
                  三都文化
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-700 hover:text-red-600 transition-colors">
                  影像禹州
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center"
        style={{
          backgroundImage: "url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-6xl md:text-7xl font-bold mb-4 text-balance">夏都禹州</h1>
          <p className="text-2xl md:text-3xl mb-8">千年夏都 · 钧瓷之乡 · 华夏药都</p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/attractions"
              className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors"
            >
              开始探索
            </Link>
            <Link
              href="/culture"
              className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg font-medium backdrop-blur-sm border border-white/30 transition-colors"
            >
              了解文化
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">探索禹州之美</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              禹州，因大禹治水有功受封于此而得名，是中华民族重要发祥地之一。
              这里汇聚了深厚的历史文化、精湛的钧瓷艺术、丰富的中医药文化和秀美的自然风光。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "夏都文化",
                desc: "中国第一个奴隶制王朝夏朝的建都之地，华夏文明的重要发祥地",
                link: "/culture",
                color: "bg-red-50",
              },
              {
                title: "钧瓷艺术",
                desc: "宋代五大名瓷之首，以独特的窑变神奇闻名于世，黄金有价钧无价",
                link: "/culture",
                color: "bg-amber-50",
              },
              {
                title: "自然风光",
                desc: "大鸿寨国家森林公园、神垕古镇等景点，山水相映，古韵悠长",
                link: "/attractions",
                color: "bg-green-50",
              },
              {
                title: "特色美食",
                desc: "传承千年的地道美食，融合中医药文化，让您品味禹州独特风味",
                link: "/cuisine",
                color: "bg-orange-50",
              },
            ].map((item, i) => (
              <div key={i} className={`${item.color} rounded-xl p-6 hover:shadow-lg transition-shadow`}>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{item.desc}</p>
                <Link href={item.link} className="text-red-600 font-medium hover:text-red-700">
                  了解更多 →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">热门景点</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              {
                title: "大鸿寨",
                desc: "国家级森林公园，层峦叠嶂，气势磅礴",
                img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=480&h=600&fit=crop",
              },
              {
                title: "神垕古镇",
                desc: "全国唯一活着的古镇，钧瓷之都核心区",
                img: "https://images.unsplash.com/photo-1547448415-e9f5b28e570d?w=480&h=600&fit=crop",
              },
              {
                title: "颍河风景区",
                desc: "国家级水利风景区，景色如画，风光旖旎",
                img: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=480&h=600&fit=crop",
              },
            ].map((item, i) => (
              <div key={i} className="group relative overflow-hidden rounded-xl h-80">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${item.img})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-white/90 mb-3">{item.desc}</p>
                  <Link href="/attractions" className="text-white hover:text-red-300 font-medium">
                    查看详情 →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/attractions"
              className="inline-block px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors"
            >
              查看全部景点
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">开启您的禹州之旅</h2>
          <p className="text-xl mb-8 text-white/90">探索千年历史，品味文化底蕴，感受钧瓷魅力，享受自然美景</p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/gallery"
              className="px-8 py-3 bg-white text-red-600 hover:bg-gray-100 rounded-lg font-medium transition-colors"
            >
              影像禹州
            </Link>
            <Link
              href="/cuisine"
              className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg font-medium backdrop-blur-sm border border-white/30 transition-colors"
            >
              美食推荐
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-lg font-bold mb-4">关于禹州</h4>
              <p className="text-gray-400 leading-relaxed">
                禹州，中国历史文化名城，因大禹治水有功受封于此而得名。 这里是夏朝建都之地，钧瓷发源地，中药材集散地。
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">快速链接</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                    首页
                  </Link>
                </li>
                <li>
                  <Link href="/cuisine" className="text-gray-400 hover:text-white transition-colors">
                    禹州美食
                  </Link>
                </li>
                <li>
                  <Link href="/attractions" className="text-gray-400 hover:text-white transition-colors">
                    景点推荐
                  </Link>
                </li>
                <li>
                  <Link href="/culture" className="text-gray-400 hover:text-white transition-colors">
                    三都文化
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">特色文化</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/culture" className="text-gray-400 hover:text-white transition-colors">
                    夏都文化
                  </Link>
                </li>
                <li>
                  <Link href="/culture" className="text-gray-400 hover:text-white transition-colors">
                    钧都文化
                  </Link>
                </li>
                <li>
                  <Link href="/culture" className="text-gray-400 hover:text-white transition-colors">
                    药都文化
                  </Link>
                </li>
                <li>
                  <Link href="/attractions" className="text-gray-400 hover:text-white transition-colors">
                    旅游景点
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">联系方式</h4>
              <ul className="space-y-2 text-gray-400">
                <li>📍 河南省许昌市禹州市</li>
                <li>📞 0374-8888888</li>
                <li>✉️ info@yuzhou-travel.com</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 禹州文化旅游. 保留所有权利</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
