# 歌词字体

这些文件由 Adobe 官方思源黑体 2.005、思源宋体 2.003 的简体中文
CN 可变字体生成，分别覆盖 30,926 / 30,930 个源字体 Unicode 字符。
源字体不包含的字符由 CSS 后备字体显示。

每个分包包含一个 128 码位 Unicode 区块中源字体支持的字符，并保留
250–900 的可变字重。`src/styles/lyrics-fonts.css` 声明各包的
`unicode-range`；浏览器根据已渲染文字和所选字体请求相应 WOFF2，
不会因为声明了另一款字体就下载其文件。一个包可能包含多个歌词字符，
因此按需下载的单位是字符包，不是单个字。多行歌词中已渲染的行也会触发请求。

使用 `font-display: swap`，下载期间先显示后备字体。内容哈希包含在
文件名中，支持浏览器缓存和字体更新后的缓存失效。

生成命令（Python，依赖 `fonttools[woff]`，验证版本 4.62.1）：

```text
python scripts/prepare-lyrics-fonts.py --sans <SourceHanSansCN-VF.ttf> --serif <SourceHanSerifCN-VF.ttf>
```

输入来自官方仓库 `release/Variable/TTF/Subset/`：

- https://github.com/adobe-fonts/source-han-sans
- https://github.com/adobe-fonts/source-han-serif

修改版内部名称为 AudioEyes Lyrics Sans / AudioEyes Lyrics Serif，
包括命名字重的 PostScript 名称均已更名。原版权和许可记录保留在字体内。
完整许可见 `../../third-party-licenses/source-han-sans-LICENSE.txt`、
`../../third-party-licenses/source-han-serif-LICENSE.txt`。文件清单、输入校验值、
版本、覆盖和各包大小见 `manifest.json`。
