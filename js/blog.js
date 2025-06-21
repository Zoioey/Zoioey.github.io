       /**
         * 更新时间函数
         * 该函数将当前时间格式化为易于阅读的字符串，并将其显示在页面上
         * 同时，它将当前时间的ISO字符串设置为相应元素的datetime属性
         */
        function updateTime() {
            // 创建一个Date对象，表示当前时间
            const now = new Date();
            // 定义日期和时间的格式选项
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
            // 将当前时间格式化为指定的日期和时间字符串
            const formattedTime = now.toLocaleDateString('en', options);
            // 更新页面上元素的文本内容为格式化后的日期和时间
            document.getElementById('current-time').textContent = formattedTime;
            // 将当前时间的ISO字符串设置为元素的datetime属性，以便于机器解析
            document.getElementById('current-time').setAttribute('datetime', now.toISOString());
        }

        // 更新时间
        updateTime();
        // 每秒更新一次时间
        setInterval(updateTime, 1000);

        function autoSplitText(element) {
    const text = element.textContent.trim();
    element.innerHTML = '';
    text.split('').forEach((char, index) => {
      const span = document.createElement('span');
      span.textContent = char;
      span.style.animationDelay = `${index * 0.05}s`;
      span.classList.add('letter');
      element.appendChild(span);
    });
  }

  // 为所有 .auto-type 元素预先包裹每个字为 <span>
  document.querySelectorAll(".auto-type").forEach(autoSplitText);

  // 交叉观察器：淡入 + 字符动画触发
  const faders = document.querySelectorAll(".fade-in");

  const appearOptions = {
    threshold: 0.07,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add("visible");

      // 开始其内部字符动画
      const typewriterElements = entry.target.querySelectorAll(".typewriter");
      typewriterElements.forEach(el => {
        const spans = el.querySelectorAll("span");
        spans.forEach((span, index) => {
          span.style.animation = `typing 0.1s forwards`;
          span.style.animationDelay = `${index * 0.05}s`;
        });
      });

      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });