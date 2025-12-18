"use client"

import { useState } from "react"
import Link from "next/link"

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("all")

  const galleryItems = [
    {
      id: 1,
      category: "scenery",
      title: "大鸿寨云海",
      desc: "晨曦中的大鸿寨，云海翻腾如梦似幻",
      img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    },
    {
      id: 2,
      category: "scenery",
      title: "颍河夕照",
      desc: "落日余晖洒满河面，波光粼粼",
      img: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=600&fit=crop",
    },
    {
      id: 3,
      category: "scenery",
      title: "金秋森林",
      desc: "层林尽染，秋色迷人",
      img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=600&fit=crop",
    },
    {
      id: 4,
      category: "ancient",
      title: "神垕古镇",
      desc: "千年古镇，青砖黛瓦诉说历史",
      img: "https://images.unsplash.com/photo-1547448415-e9f5b28e570d?w=800&h=600&fit=crop",
    },
    {
      id: 5,
      category: "ancient",
      title: "古镇街巷",
      desc: "石板路上的时光印记",
      img: "https://images.unsplash.com/photo-1528127269322-539801943592?w=800&h=600&fit=crop",
    },
    {
      id: 6,
      category: "ancient",
      title: "古韵建筑",
      desc: "飞檐翘角，古色古香",
      img: "https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?w=800&h=600&fit=crop",
    },
    {
      id: 7,
      category: "culture",
      title: "钧瓷窑变",
      desc: "入窑一色，出窑万彩的神奇艺术",
      img: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=800&h=600&fit=crop",
    },
    {
      id: 8,
      category: "culture",
      title: "钧瓷珍品",
      desc: "巧夺天工的艺术珍品",
      img: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&h=600&fit=crop",
    },
    {
      id: 9,
      category: "culture",
      title: "匠心传承",
      desc: "世代相传的钧瓷烧制技艺",
      img: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&h=600&fit=crop",
    },
    {
      id: 10,
      category: "food",
      title: "禹州十三碗",
      desc: "传承千年的宴席文化",
      img: "/traditional-chinese-banquet-dishes-thirteen-bowls.jpg",
    },
    {
      id: 11,
      category: "food",
      title: "道地药材",
      desc: "华夏药都的珍贵药材",
      img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=800&h=600&fit=crop",
    },
    {
      id: 12,
      category: "food",
      title: "地道美味",
      desc: "禹州特色风味小吃",
      img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop",
    },
  ]

  const filteredItems =
    activeFilter === "all" ? galleryItems : galleryItems.filter((item) => item.category === activeFilter)

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
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
                <Link href="/" className="text-gray-700 hover:text-red-600 transition-colors">
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
                <Link href="/gallery" className="text-red-600 font-medium">
                  影像禹州
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Page Header */}
      <section
        className="relative h-96 flex items-center justify-center mt-16"
        style={{
          backgroundImage: "url(https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?w=1920&h=800&fit=crop)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">影像禹州</h1>
          <p className="text-xl">用镜头记录千年古都的四季之美</p>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">光影中的禹州</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              每一帧画面，都是禹州的故事。从春天的繁花似锦到冬日的银装素裹，
              从古镇的青砖黛瓦到钧瓷的窑变万千，让我们用镜头定格这座千年古都的独特魅力。
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { key: "all", label: "全部" },
              { key: "scenery", label: "自然风光" },
              { key: "ancient", label: "古镇古韵" },
              { key: "culture", label: "文化艺术" },
              { key: "food", label: "美食特产" },
            ].map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeFilter === filter.key
                    ? "bg-red-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div key={item.id} className="group relative overflow-hidden rounded-xl aspect-[4/3] bg-gray-100">
                <img
                  src={item.img || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-white/90">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photography Tips */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">摄影指南</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="text-4xl mb-4">📸</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">最佳拍摄时间</h3>
              <div className="space-y-2 text-gray-600">
                <p>
                  <strong>春季（3-5月）：</strong>大鸿寨山花烂漫
                </p>
                <p>
                  <strong>夏季（6-8月）：</strong>颍河风光，绿意盎然
                </p>
                <p>
                  <strong>秋季（9-11月）：</strong>层林尽染，秋高气爽
                </p>
                <p>
                  <strong>冬季（12-2月）：</strong>雪景如画，银装素裹
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="text-4xl mb-4">🏞️</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">推荐拍摄地点</h3>
              <div className="space-y-2 text-gray-600">
                <p>
                  <strong>神垕古镇：</strong>清晨和傍晚光线柔和
                </p>
                <p>
                  <strong>大鸿寨：</strong>日出云海最为壮观
                </p>
                <p>
                  <strong>钧窑遗址：</strong>展现传统工艺之美
                </p>
                <p>
                  <strong>颍河沿岸：</strong>夕阳倒影如诗如画
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">拍摄小贴士</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 尊重当地文化和居民隐私</li>
                <li>• 携带广角镜头捕捉壮丽风光</li>
                <li>• 使用三脚架拍摄夜景和长曝光</li>
                <li>• 关注天气变化，雨后初晴景色最美</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">分享您的禹州记忆</h2>
          <p className="text-xl mb-8 text-white/90">如果您也拍摄了精彩的禹州照片，欢迎与我们分享</p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/attractions"
              className="px-8 py-3 bg-white text-red-600 hover:bg-gray-100 rounded-lg font-medium transition-colors"
            >
              探索景点
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
