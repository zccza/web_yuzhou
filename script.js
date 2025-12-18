// 导航栏滚动效果
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar")
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled")
  } else {
    navbar.classList.remove("scrolled")
  }
})

// 移动端菜单切换
const navToggle = document.getElementById("navToggle")
const navMenu = document.getElementById("navMenu")

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active")

    // 动画效果
    const spans = navToggle.querySelectorAll("span")
    if (navMenu.classList.contains("active")) {
      spans[0].style.transform = "rotate(45deg) translate(5px, 5px)"
      spans[1].style.opacity = "0"
      spans[2].style.transform = "rotate(-45deg) translate(7px, -6px)"
    } else {
      spans[0].style.transform = "none"
      spans[1].style.opacity = "1"
      spans[2].style.transform = "none"
    }
  })

  // 点击菜单项关闭菜单
  const navLinks = document.querySelectorAll(".nav-link")
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        navMenu.classList.remove("active")
        const spans = navToggle.querySelectorAll("span")
        spans[0].style.transform = "none"
        spans[1].style.opacity = "1"
        spans[2].style.transform = "none"
      }
    })
  })
}

// 表单提交处理
const contactForm = document.getElementById("contactForm")
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // 获取表单数据
    const formData = {
      name: document.getElementById("name").value,
      phone: document.getElementById("phone").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    }

    // 这里可以添加实际的表单提交逻辑
    console.log("表单数据:", formData)

    // 显示成功消息
    alert("感谢您的留言！我们会尽快与您联系。")

    // 重置表单
    contactForm.reset()
  })
}

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// 图片懒加载
if ("IntersectionObserver" in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target
        img.src = img.dataset.src
        img.classList.add("loaded")
        observer.unobserve(img)
      }
    })
  })

  document.querySelectorAll("img[data-src]").forEach((img) => {
    imageObserver.observe(img)
  })
}

// 画廊过滤功能
const filterButtons = document.querySelectorAll(".filter-btn")
const galleryItems = document.querySelectorAll(".gallery-item")

if (filterButtons.length > 0 && galleryItems.length > 0) {
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // 移除所有按钮的active类
      filterButtons.forEach((btn) => btn.classList.remove("active"))
      // 给当前按钮添加active类
      button.classList.add("active")

      const filterValue = button.getAttribute("data-filter")

      galleryItems.forEach((item) => {
        if (filterValue === "all") {
          item.classList.remove("hidden")
        } else {
          const category = item.getAttribute("data-category")
          if (category === filterValue) {
            item.classList.remove("hidden")
          } else {
            item.classList.add("hidden")
          }
        }
      })
    })
  })
}
