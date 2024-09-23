!(function () {
  function setHtmlFontSize() {
    const width = 80 / 1920 // 表示1920的设计图
    const bodyWidth = document.documentElement.getBoundingClientRect().width // 当前窗口的宽度
    console.log(bodyWidth, '屏幕宽度')
    const rem = bodyWidth * width // 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
    document.getElementsByTagName('html')[0].style.fontSize = rem + 'px'
  }
  setHtmlFontSize()
  window.addEventListener('resize', function () {
    setTimeout(function () {
      setHtmlFontSize()
    }, 100)
  })
})()
