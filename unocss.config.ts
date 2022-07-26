import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'
export default defineConfig({
  shortcuts: [//全局配置 可写正则
    {
      'flex-c': 'flex items-center justify-center',
    }
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({//定义图标
      warn: true,
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
        'margin-top': '-1px'
      }
    })
  ],
  theme: {
    colors: {
      primary: '#0066ff'
    }
  },
  transformers: [transformerDirectives(), transformerVariantGroup()],// 支持@apply引用
  variants: [
    // 因为.scss文件里面,uno不能写"!xxx"去表示 !importannt ,会报错
    // 这里为important写一种变体，让以"I_"开头的class也是important，兼容scss文件
    matcher => {
      if (!matcher.startsWith('I_')) return matcher
      return {
        matcher: matcher.slice(2),
        body: body => {
          body.forEach(v => {
            if (v[1]) v[1] += ' !important'
          })
          return body
        }
      }
    }
  ]
})
