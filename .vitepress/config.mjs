import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "面试",
  description: "A VitePress Site",
  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,
  base: '/interview/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: 'JS',
        items: [
          {
            text: 'JavaScript',
            link: '/javascript/data-type',
            activeMatch: '/javascript/'
          },
          {
            text: 'ECMAScript',
            link: '/ecmascript/detail-info',
            activeMatch: '/ecmascript/'
          },
          {
            text: 'CSS',
            link: '/css/model',
            activeMatch: '/css/'
          },
          {
            text: 'Webpack',
            link: '/webpack/build',
            activeMatch: '/webpack/'
          },
          {
            text: 'Http',
            link: '/http/diff',
            activeMatch: '/http/'
          },
          {
            text: 'Vue2',
            link: '/vue2/mvvm',
            activeMatch: '/vue2/'
          },
        ]
      },
      {
        text: 'Algorithm',
        link: '/algorithm/str-split',
        activeMatch: '/algorithm/'
      },
    ],

    sidebar: {
      '/javascript/': {
        base: '/javascript/',
        items: [
          {
            text: 'JavaScript',
            items: [
              { text: 'JavaScript中的数据类型？存储上的差别？', link: 'data-type' },
              { text: '数组的常用方法有哪些？', link: 'array-methods' },
              { text: 'JavaScript字符串的常用方法有哪些？', link: '/examples' },
              { text: '谈谈 JavaScript 中的类型转换机制', link: '/examples' },
              { text: '== 和 ===区别，分别在什么情况使用', link: '/examples' },
              { text: '深拷贝浅拷贝的区别？如何实现一个深拷贝？', link: '/examples' },
              { text: '说说你对闭包的理解？闭包使用场景', link: '/examples' },
              { text: '说说你对作用域链的理解', link: '/examples' },
              { text: 'JavaScript原型，原型链 ? 有什么特点？', link: '/examples' },
              { text: 'Javascript如何实现继承？', link: '/examples' },
              { text: '谈谈this对象的理解', link: '/examples' },
              { text: 'JavaScript中执行上下文和执行栈是什么？', link: '/examples' },
              { text: '说说JavaScript中的事件模型', link: '/examples' },
              { text: 'typeof 与 instanceof 区别', link: '/examples' },
              { text: '解释下什么是事件代理？应用场景？', link: '/examples' },
              { text: '说说new操作符具体干了什么？', link: '/examples' },
              { text: 'ajax原理是什么？如何实现？', link: '/examples' },
              { text: 'bind、call、apply 区别？如何实现一个bind?', link: '/examples' },
              { text: '说说你对正则表达式的理解？应用场景？', link: '/examples' },
              { text: '说说你对事件循环的理解', link: '/examples' },
              { text: 'DOM常见的操作有哪些？', link: '/examples' },
              { text: '说说你对BOM的理解，常见的BOM对象你了解哪些？', link: '/examples' },
              { text: '举例说明你对尾递归的理解，有哪些应用场景', link: '/examples' },
              { text: '说说 JavaScript 中内存泄漏的几种情况？', link: '/examples' },
              { text: 'Javascript本地存储的方式有哪些？区别及应用场景？', link: '/examples' },
              { text: '说说你对函数式编程的理解？优缺点？', link: '/examples' },
              { text: 'Javascript中如何实现函数缓存？函数缓存有哪些应用场景？', link: '/examples' },
              { text: '说说 Javascript 数字精度丢失的问题，如何解决？', link: '/examples' },
              { text: '什么是防抖和节流？有什么区别？如何实现？', link: '/examples' },
              { text: '如何判断一个元素是否在可视区域中？', link: '/examples' },
              { text: '大文件上传如何做断点续传？', link: '/examples' },
              { text: '如何实现上拉加载，下拉刷新？', link: '/examples' },
              { text: '什么是单点登录？如何实现？', link: '/examples' },
              { text: 'web常见的攻击方式有哪些？如何防御？', link: '/examples' },
            ]
          }
        ]
      },
      'ecmascript': {
        base: '/ecmascript/',
        items: [
          {
            text: 'ECMAScript',
            items: [
              { text: '规范相关', link: 'detail-info' },
              { text: '变量声明的几种方式 let/const/var 的区别', link: 'var' },
              { text: '数组和对象的解构', link: '/examples' },
              { text: '模版字符串', link: '/examples' },
              { text: '正则表达式', link: '/examples' },
              { text: '数值进制和转换相关', link: '/examples' },
              { text: 'IEEE 754 双精度浮点数', link: '/examples' },
              { text: '浮点数取整', link: '/examples' },
              { text: '函数第三作用域问题', link: '/examples' },
              { text: '严格模式', link: '/examples' },
              { text: '箭头函数', link: '/examples' },
              { text: '函数尾递归的详细探究', link: '/examples' },
              { text: '常见的对象属性的遍历', link: '/examples' },
              { text: '属性描述符', link: '/examples' },
              { text: '符号常量', link: '/examples' },
              { text: '集合', link: '/examples' },
              { text: 'Proxy 对象代理', link: '/examples' },
              { text: 'Promise', link: '/examples' },
              { text: '遍历器对象', link: '/examples' },
              { text: '生成器对象', link: '/examples' },
              { text: 'async/wait', link: '/examples' },
              { text: 'class', link: '/examples' },
              { text: '模块', link: '/examples' },
            ]
          }
        ]
      },
      'css': {
        base: '/css/',
        items: [
          {
            text: 'CSS',
            items: [
              { text: '说说你对盒子模型的理解?', link: 'model' },
              { text: 'css选择器有哪些？优先级？哪些属性可以继承？', link: 'selector' },
              { text: '说说em/px/rem/vh/vw区别?', link: '/examples' },
              { text: '说说设备像素、css像素、设备独立像素、dpr、ppi 之间的区别？', link: '/examples' },
              { text: 'css中，有哪些方式可以隐藏页面元素？区别?', link: '/examples' },
              { text: '谈谈你对BFC的理解？', link: '/examples' },
              { text: '元素水平垂直居中的方法有哪些？如果元素不定宽高呢？', link: '/examples' },
              { text: '如何实现两栏布局，右侧自适应？三栏布局中间自适应呢？', link: '/examples' },
              { text: '说说flexbox（弹性盒布局模型）,以及适用场景？', link: '/examples' },
              { text: '介绍一下grid网格布局', link: '/examples' },
              { text: '怎么理解回流跟重绘？什么场景下会触发？', link: '/examples' },
              { text: '什么是响应式设计？响应式设计的基本原理是什么？如何做？', link: '/examples' },
              { text: '如果要做优化，CSS提高性能的方法有哪些？', link: '/examples' },
              { text: '如何实现单行／多行文本溢出的省略样式？', link: '/examples' },
              { text: '如何使用css完成视差滚动效果?', link: '/examples' },
              { text: 'CSS如何画一个三角形？原理是什么？', link: '/examples' },
              { text: '让Chrome支持小于12px 的文字方式有哪些？区别？', link: '/examples' },
              { text: '说说对Css预编语言的理解？有哪些区别?', link: '/examples' },
              { text: '移动端 300 ms 延迟问题', link: '/examples' },
              { text: '移动端如何实现 0.5 px 的极细线条', link: '/examples' },
              { text: '移动端滚动卡顿', link: '/examples' },
            ]
          }
        ]
      },
      'webpack': {
        base: '/webpack/',
        items: [
          {
            text: 'Webpack',
            items: [
              { text: '说说webpack的构建流程?', link: 'build' },
              { text: '说说webpack中常见的Loader？解决了什么问题？', link: 'loader' },
              { text: '说说webpack的热更新是如何做到的？原理是什么？', link: '/examples' },
              { text: '说说webpack proxy工作原理？为什么能解决跨域?', link: '/examples' },
              { text: '说说如何借助webpack来优化前端性能？', link: '/examples' },
              { text: '如何提高webpack的构建速度？', link: '/examples' },
              { text: '与webpack类似的工具还有哪些？区别？', link: '/examples' },
            ]
          }
        ]
      },
      'http': {
        base: '/http/',
        items: [
          {
            text: 'Http',
            items: [
              { text: '什么是HTTP? HTTP 和 HTTPS 的区别?', link: 'diff' },
              { text: '为什么说HTTPS比HTTP安全? HTTPS是如何保证安全的？', link: 'https' },
              { text: 'DNS协议 是什么？说说DNS 完整的查询过程?', link: '/examples' },
              { text: '如何理解CDN？说说实现原理？', link: '/examples' },
              { text: '说一下 GET 和 POST 的区别？', link: '/examples' },
              { text: '说说 HTTP 常见的请求头有哪些? 作用？', link: '/examples' },
              { text: '说说地址栏输入 URL 敲下回车后发生了什么?', link: '/examples' },
              { text: '说说TCP为什么需要三次握手和四次挥手？', link: '/examples' },
              { text: '说说对WebSocket的理解？应用场景？', link: '/examples' },
            ]
          }
        ]
      },
      'vue2': {
        base: '/vue2/',
        items: [
          {
            text: 'Vue2 源码解析',
            items: [
              { text: 'initData 做了哪些事情', link: '/examples' },
              { text: '数组方式如何做的数据劫持', link: '/examples' },
              { text: '模板编译为 ast 的过程', link: '/examples' },
              { text: 'vnode 如何转化为真实节点', link: '/examples' },
              { text: '对象的依赖搜集和更新过程', link: '/examples' },
              { text: '数组的依赖搜集和更新过程', link: '/examples' },
              { text: '队列和 nextTick', link: '/examples' },
              { text: 'vue 是如何可以在 vm 上直接访问 data 属性的呢？或者说 vue 如何实现的数据代理呢', link: '/examples' },
              { text: 'vue 时如何实现的数据更新', link: '/examples' },
              { text: 'vue 时如何实现的 computed ', link: '/examples' },
              { text: 'vue 如何实现的模板转换为页面的', link: '/examples' },
              { text: '插槽如何实现的呢', link: '/examples' },
              { text: 'vue 是如何实现的 watch', link: '/examples' },
            ]
          },
          {
            text: 'Vue2',
            items: [
              { text: '有使用过vue吗？说说你对vue的理解', link: 'mvvm' },
              { text: '你对SPA单页面的理解，它的优缺点分别是什么？如何实现SPA应用呢', link: 'spa' },
              { text: 'v-show和v-if有什么区别？使用场景分别是什么？', link: '/examples' },
              { text: '实例在挂载做了什么事情', link: '/examples' },
              { text: '请描述下你对vue生命周期的理解？在created和mounted这两个生命周期中请求数据有什么区别呢？', link: '/examples' },
              { text: 'v-if和v-for的优先级是什么？', link: '/examples' },
              { text: '为什么data属性是一个函数而不是一个对象？', link: '/examples' },
              { text: '动态给vue的data添加一个新的属性时会发生什么？怎样解决？', link: '/examples' },
              { text: 'Vue组件之间的通信方式都有哪些？', link: '/examples' },
              { text: '说说你对nexttick的理解?', link: '/examples' },
              { text: '说说你对vue的mixin的理解，有什么应用场景？', link: '/examples' },
              { text: '说说你对slot的理解？slot使用场景有哪些？', link: '/examples' },
              { text: 'Vue.observable你有了解过吗？说说看', link: '/examples' },
              { text: '你知道vue中key的原理吗？说说你对它的理解？', link: '/examples' },
              { text: 'Vue中的过滤器了解吗？过滤器的应用场景有哪些？', link: '/examples' },
              { text: '什么是虚拟DOM？如何实现一个虚拟DOM？说说你的思路', link: '/examples' },
              { text: '你有写过自定义指令吗？自定义指令的应用场景有哪些？', link: '/examples' },
              { text: '你了解vue的diff算法吗？说说看', link: '/examples' },
              { text: 'Vue常用的修饰符有哪些？有什么应用场景？', link: '/examples' },
              { text: '怎么缓存当前的组件？缓存后怎么更新？说说你对keep-alive的理解是什么？ ', link: '/examples' },
              { text: 'Vue中组件和插件有什么区别？', link: '/examples' },
              { text: 'Vue项目中有封装过axios吗？主要是封装哪方面的？', link: '/examples' },
              { text: '说下你的vue项目的目录结构，如果是大型项目你该怎么划分结构和划分组件呢？', link: '/examples' },
              { text: 'vue要做权限管理该怎么做？如果控制到按钮级别的权限怎么做？', link: '/examples' },
              { text: 'Vue项目中你是如何解决跨域的呢？', link: '/examples' },
              { text: 'vue项目本地开发完成后部署到服务器后报404是什么原因呢？', link: '/examples' },
              { text: '你是怎么处理vue项目中的错误的？', link: '/examples' },
              { text: 'spa 首屏加载速度慢如何解决', link: '/examples' },
              { text: 'Vue3有了解过吗？能说说跟Vue2的区别吗？', link: '/examples' },
              { text: 'initData 做了哪些事情', link: '/examples' },
              { text: '数组方式如何做的数据劫持', link: '/examples' },
              { text: '模板编译为 ast 的过程', link: '/examples' },
              { text: 'vnode 如何转化为真实节点', link: '/examples' },
              { text: '对象的依赖搜集和更新过程', link: '/examples' },
              { text: '数组的依赖搜集和更新过程', link: '/examples' },
              { text: '队列和 nextTick', link: '/examples' },
              { text: 'vue 是如何可以在 vm 上直接访问 data 属性的呢？或者说 vue 如何实现的数据代理呢', link: '/examples' },
              { text: 'vue 时如何实现的数据更新', link: '/examples' },
              { text: 'vue 时如何实现的 computed ', link: '/examples' },
              { text: 'vue 如何实现的模板转换为页面的', link: '/examples' },
              { text: '插槽如何实现的呢', link: '/examples' },
              { text: 'vue 是如何实现的 watch', link: '/examples' },
            ]
          }
        ]
      },
      'algorithm': {
        base: '/algorithm/',
        items: [
          {
            text: '算法',
            items: [
              { text: '字符串分割', link: 'str-split' },
              { text: '组成最大数', link: 'build-max' },
            ]
          }
        ]
      },
    },


    socialLinks: [
      { icon: 'github', link: 'https://github.com/dongwei1125/interview' }
    ]
  },
  srcDir: './src',
  outDir: './dist'
})
