# AudioEyes

[English](#english) · [简体中文](#简体中文)

<a id="english"></a>

## English

**Turn sound into an interactive visual world.**

AudioEyes is a real-time 3D music visualization platform that runs in your browser. It analyzes energy, frequency bands, and beats from local music or shared audio to drive particles, nebulae, fluids, lighting, and spatial animation. Lyrics, backgrounds, ambient light, and gesture controls complete the experience.

**[Try AudioEyes](https://www.audioeyes.xyz/)** · **[User Guide (Chinese)](https://www.audioeyes.xyz/help-content.html)** · **[Third-Party Notices](https://www.audioeyes.xyz/third-party-licenses.html)**

### Visualizations

The current release includes **86 visualizations loaded on demand**, spanning deep space, particle scenes, mathematical forms, natural environments, and audio analysis. Each effect maps music to its own combination of shape, movement, color, and light.

The following selection groups effects by theme for browsing. English effect names are descriptive translations; the interface may show their Chinese names.

| Theme | Selected effects | Visual features |
| --- | --- | --- |
| Space and stars | Nebula Dance, Star Rain, Galactic Arms, Cosmic Starfield | Nebulae, galaxies, particle trails, and spatial lighting |
| Fluids and light | Iridescent Fluid, Accretion Flow, Soul Vortex | Flowing sculptures, vortices, light filaments, and beat ripples |
| Silk and iridescence | Moonlight Veil, Moonlight Breathing, Iridescent Curtain | Folds, translucent petals, shimmering sheets, and soft deformation |
| Nature and scenery | Neon Rain, Maple Lake Cottage, Falling Stars | Rainy reflections, seasonal lakeside scenes, and impact ripples |
| Mathematics and geometry | Mathematical Forms, String-Wave Resonance, Glass Rhythm Rings, Spiral Dots | Polynomial particles, resonant curves, concentric glass rings, and spirals |
| Images and analysis | Fluid Reveal, Audio Features | Liquid transitions between images and live audio feature panels |

Some effects have dedicated parameter panels for colors, motion, audio response, cameras, or post-processing. Available controls vary by effect. Supported effects also let you save parameters, restore saved settings, or return to application defaults.

### Main Features

#### Music playback and live analysis

- Load local MP3, WAV, OGG, FLAC, AAC, and M4A files; actual decoding support depends on your browser.
- Manage multiple tracks, skip backward or forward, seek, shuffle the list, and clear the playlist.
- Capture audio from a shared browser tab, window, or screen on supported desktop browsers.
- Connect a local music folder in browsers that support directory access, scan tracks and lyrics recursively, and remember the directory in the current browser.
- Extract energy, bass/mid/treble levels, spectra, beats, and envelopes through a shared audio feature engine.

#### Lyrics and text staging

- Standard LRC and enhanced word-timed LRC, with automatic matching by track name.
- Single-line and multiline displays, playback synchronization, progressive highlighting, and scrolling.
- Adjustable fonts, sizes, gradient colors, hue cycling, borders, and text depth.
- Word jumps, breathing, floating, and transitions such as forward movement and fly-out.
- Independent lyric area width, rotation, tilt, perspective, and spatial motion, plus drag positioning.
- Local save and restore controls for font, animation, and spatial settings.

#### Backgrounds and atmosphere

- Solid colors, images, videos, gradients, and audio-reactive backgrounds.
- Image and video layout, positioning, and scaling; multi-image transitions include fades, push-ins, and soft wipes.
- Layered audio-reactive gradients with color presets, response strength, speed, brightness response, and beat accents.
- Edge ambient lighting with color, strength, speed, audio response, coverage, and artistic fluid treatments.
- WebGL and WebGPU mouse fluid backends, with controls for force, interaction radius, vorticity, and color.
- Configurable Dock spectrum and glass material effects, plus idle hiding of selected interface elements outside fullscreen.

#### Interaction and automatic switching

- Switch effects through the top menu, keyboard shortcuts, or two-finger horizontal swipes on mobile.
- Sequential, random, and timed automatic switching, with a selectable set of effects.
- Fullscreen, draggable panels, and a draggable mobile Dock.
- Optional single-hand camera gestures for fluid interaction, camera movement, track changes, and visualization switching.

### Getting Started

1. Open [AudioEyes](https://www.audioeyes.xyz/) and click the folder button in the bottom Dock to select local music. You can select matching LRC files at the same time.
2. Choose a track in the playlist and press play. Drag the progress bar to seek.
3. Select a visualization from the top menu, then open its parameter panel if you want to adjust the scene.
4. Open Control Center from the bottom Dock to configure lyrics, backgrounds, ambient light, automatic switching, Dock effects, fluids, and camera gestures.
5. Enter fullscreen or enable automatic switching to explore effects continuously.

#### Connect a local music folder

Where directory access is supported, use the music folder control to select a directory. AudioEyes scans audio and LRC files in that folder and its subfolders, and stores the directory handle in the current browser.

After a browser restart or a permission change, you may need to reconnect and grant read access again. You can still use the regular file picker if directory access is unavailable.

#### Capture system audio

On desktop, click the microphone button in the Dock, select a sharing source in the browser dialog, and enable audio sharing. Click again to stop capture.

Available audio sources depend on the browser and operating system. If there is no sound, try sharing a browser tab that is playing music and confirm that the shared source includes an audio track. Use local audio files on mobile.

#### Load lyrics

Select the LRC file together with the track. Matching base filenames are recommended:

```text
My Song.mp3
My Song.lrc
```

Lyrics are matched automatically during playback. Standard LRC synchronizes by line; enhanced LRC follows the word timing tags in the file. Use Control Center to choose single-line or multiline display and adjust appearance, animation, and spatial settings.

### Camera Gestures

Open the Gestures page in Control Center, enable the camera, grant permission, and place one hand in view. Recognition runs locally without uploading camera frames.

| Gesture | Action |
| --- | --- |
| Move with only the index finger extended | Guide the mouse fluid |
| Move a closed fist | Rotate the view |
| Move an open palm horizontally or vertically | Pan the view |
| Move an open palm toward or away from the camera | Zoom in or out |
| Hold 👍, then wave left / right | Previous / next track |
| Hold ✌️, then wave left / right | Previous / next visualization |

Hold a hand shape for about 0.2 seconds to activate it. Palm panning and zooming lock automatically; pause briefly before changing the movement direction. Fixed-view effects do not support camera movement, and mouse input takes priority. The camera stops when the page moves to the background. HTTPS or localhost and camera permission are required.

### Keyboard and Touch Controls

| Key | Action |
| --- | --- |
| `Space` | Play / pause |
| `N` / `P` | Next / previous track |
| `↑` / `↓` | Previous / next visualization |
| `F` | Enter / exit fullscreen |
| `L` | Show / hide lyrics |
| `W` | Trigger fireworks where supported |
| `Esc` | Close Help or Control Center |

On mobile, **swipe horizontally with two fingers moving together** to switch visualizations. This leaves single-finger input available for scene interaction. Drag the Dock to reposition it; landscape orientation provides a wider view.

### Saved Settings and Local Data

Effect parameters, lyrics, Dock, atmosphere, and fluid settings are stored in the current browser using the controls provided by each panel. Groups with an explicit save button require you to save manually. Editing a value does not automatically save it, and restoring application defaults does not delete the saved preset.

Background settings are excluded from Control Center preference persistence. Music, lyrics, images, and videos loaded through the regular file picker may need to be selected again after a refresh. Connected music folders use the browser's directory permission mechanism to restore access. Local preferences and directory records do not automatically sync across devices.

### Browser Requirements and Troubleshooting

Use a modern browser with WebGL 2, Web Audio API, and JavaScript enabled. WebGPU and directory access depend on browser, operating system, and hardware support.

| Issue | What to try |
| --- | --- |
| No sound on first playback | Click play directly and check volume and file format |
| No captured audio | Enable audio sharing and try a browser tab that is playing sound |
| Lyrics are missing | Select the LRC file, check matching filenames, and enable lyrics |
| A new effect takes time to appear | Effects load on demand; complex scenes need initialization time |
| Low frame rate | Reduce particle or post-processing settings, disable some layered effects, and lower fluid settings |
| WebGPU is unavailable | Choose WebGL in fluid settings where backend switching is available |
| Music folder access is not restored | Reconnect and grant read permission, or select the folder again |
| Camera gestures do not start | Use HTTPS and check camera permissions and device availability |

### Technology

| Area | Technologies |
| --- | --- |
| Graphics | Three.js, WebGL, WebGPU, TSL, GLSL, Canvas |
| Audio analysis | Web Audio API, AnalyserNode, custom audio feature engine |
| Animation and post-processing | GSAP, Three.js post-processing, GPU particle computation |
| Parameter panels | lil-gui |
| Hand tracking | MediaPipe Hand Landmarker, Web Worker |
| Local storage | Browser preference storage, IndexedDB directory handles |

Main runtime data flow:

```text
Local music / shared audio → Player and audio analysis → Current visualization
                                                        + Lyrics / background / ambient light / fluid
Mouse / touch / camera gestures ───────────────────────→ Interaction controls
```

### Repository and Licenses

This repository contains the static deployment files for the [AudioEyes website](https://www.audioeyes.xyz/): `index.html`, compiled `assets/`, fonts, media, hand-tracking resources, and help content. The development source project and its build scripts are maintained separately.

Third-party copyrights, versions, and license texts are listed in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) and [third-party-licenses/](third-party-licenses/). Those licenses apply to their respective components; they do not assign the same license to original AudioEyes code or media.

---

<a id="简体中文"></a>

## 简体中文

[Back to English](#english)

### 音频之眼 AudioEyes

**让声音成为可交互的视觉世界。**

音频之眼是一个运行在浏览器中的实时 3D 音乐可视化平台。它分析本地音乐或共享音频中的能量、频段与节拍，驱动粒子、星云、流体、光影和空间动画，并将歌词、背景、环境光与手势交互组合成完整的音乐视觉体验。

**[在线体验](https://www.audioeyes.xyz/)** · **[使用帮助](https://www.audioeyes.xyz/help-content.html)** · **[第三方许可](https://www.audioeyes.xyz/third-party-licenses.html)**

### 视觉效果

当前包含 **86 个按需加载的可视化效果**，既有深空与粒子场景，也有数学形态、自然景观和音频分析面板。不同效果采用各自的音频映射，音乐会影响画面的形态、运动、色彩与光效。

以下为部分效果示例，主题分类用于帮助浏览：

| 主题 | 代表效果 | 画面特点 |
| --- | --- | --- |
| 宇宙与星空 | 星云漫舞、星雨流光、银河旋臂、宇宙星场 | 星云、银河、粒子轨迹与空间光效 |
| 流体与光场 | 虹彩流体、吸积流光、灵魂之涡 | 流动雕塑、旋涡、光丝与节拍波纹 |
| 丝绸与虹彩 | 月光薄纱、月光呼吸、虹光幻幕 | 褶皱、半透明花瓣、虹彩薄片与柔和形变 |
| 自然与场景 | 霓虹雨幕、枫湖小筑、星落之境 | 雨夜水面、四季湖景、星雨与落地涟漪 |
| 数学与几何 | 数学形态、弦波共振、琉璃律环、螺点流光 | 多项式粒子、共振流线、同心玻璃环与螺旋圆点 |
| 图片与分析 | 流体揭示、音频特征 | 图片间的液态揭示与实时音频特征面板 |

部分效果提供独立参数面板，可调整配色、运动、音频响应、相机或后处理表现；可调项目随效果而异。支持的效果还可保存参数、恢复已保存设置或恢复程序默认。

### 主要功能

#### 音乐播放与实时分析

- 支持 MP3、WAV、OGG、FLAC、AAC 和 M4A 本地音频文件，实际解码能力取决于浏览器。
- 支持多文件播放列表、上一首与下一首、进度拖动、随机排列与列表清空。
- 桌面端可通过浏览器共享接口捕获标签页、窗口或屏幕中的音频。
- 在支持目录访问的浏览器中，可连接本地音乐文件夹，递归扫描歌曲与歌词，并在当前浏览器记住目录。
- 音频引擎提取能量、低中高频、频谱、节拍与包络等特征，为不同动画提供统一的音频数据。

#### 歌词与文字舞台

- 支持标准 LRC 和增强型逐字 LRC，按歌曲名称自动匹配。
- 提供单行与多行显示、播放进度同步、逐字扫亮与滚动显示。
- 可调整字体、字号、渐变配色、色相循环、边框与文字厚度。
- 支持逐字跃动、呼吸、浮动等动画，以及换句前推、飞出画面等转场。
- 可独立调整歌词区域的宽度、旋转、倾斜、透视与空间运动，并拖动到合适位置。
- 字体、动画与容器空间等设置提供本机保存和恢复操作。

#### 背景与舞台氛围

- 支持纯色、图片、视频、渐变与音频动态背景。
- 图片和视频可调整布局、位置与缩放；多图背景支持淡化、推近、柔边擦除等切换表现。
- 音频动态背景使用多层动态渐变，可调整颜色预设、响应强度、变化速度、亮度响应与节拍闪光。
- 边缘环境光可配置颜色、强度、速度、音频响应和覆盖范围，并提供艺术化流体表现。
- 鼠标流体提供 WebGL / WebGPU 两种后端，可调整推动力、作用范围、旋涡与色彩等参数。
- Dock 可配置频谱、玻璃材质及相关视觉表现；普通页面支持闲置后隐藏部分界面。

#### 交互与自动切换

- 顶部效果菜单、键盘快捷键和移动端双指横向滑动切换。
- 顺序、随机与定时自动切换，并可指定参与自动切换的效果。
- 支持全屏模式、面板拖动与移动端 Dock 拖动。
- 可选摄像头手势：用单手控制流体、视角、歌曲和可视化切换。

### 快速开始

1. 打开 [AudioEyes](https://www.audioeyes.xyz/)，点击底部 Dock 的文件夹按钮，选择本地音乐；可同时选择对应的 LRC 文件。
2. 在播放列表中选择歌曲，点击播放，通过进度条调整播放位置。
3. 使用顶部效果菜单选择可视化；需要时打开该效果的参数面板调整画面。
4. 点击底栏的控制中心按钮，设置歌词、背景、环境光、自动切换、Dock、流体与摄像头手势。
5. 调整完成后进入全屏，或启用自动切换连续体验不同效果。

#### 连接本地音乐文件夹

浏览器支持目录访问时，可使用音乐文件夹入口选择目录。系统会扫描目录及子目录中的音频和 LRC 文件，并将目录句柄保存在当前浏览器中。

浏览器重启或目录权限失效后，可能需要点击重新连接并再次授权。不支持目录访问时，仍可使用普通文件选择器载入音乐。

#### 使用系统音频

桌面端点击底栏的麦克风按钮，在浏览器授权窗口中选择共享来源，并确认共享音频。再次点击可停止捕获。

可用的共享音频来源取决于浏览器和操作系统。若没有声音，优先尝试共享正在播放音乐的浏览器标签页，并确认浏览器返回了音频轨道。移动端请使用本地音频文件。

#### 加载歌词

选择歌曲时一并选择 LRC 文件，建议使用相同的基础文件名：

```text
歌曲名.mp3
歌曲名.lrc
```

播放后会自动匹配歌词。普通 LRC 按行同步，增强型 LRC 可按文件中的逐字时间标签推进。通过控制中心切换单行或多行显示，并调整外观、动画和空间姿态。

### 摄像头手势

在控制中心的“手势”页面开启摄像头，授权后将单手放入画面。识别在本机运行，无需上传摄像头画面。

| 手势 | 操作 |
| --- | --- |
| 只伸食指并移动 | 鼠标流体跟随 |
| 握拳并移动 | 旋转视角 |
| 张掌左右或上下移动 | 平移视角 |
| 张掌靠近或远离摄像头 | 放大或缩小 |
| 👍 保持后向左 / 右挥动 | 上一首 / 下一首 |
| ✌️ 保持后向左 / 右挥动 | 上一个 / 下一个可视化 |

手形保持约 0.2 秒后生效。张掌平移和缩放会自动锁定，停稳片刻后可切换方向。固定视角的动画不支持视角控制，鼠标操作优先；页面进入后台时会关闭摄像头。此功能需要 HTTPS 或 localhost 与摄像头权限。

### 操作快捷键

| 按键 | 功能 |
| --- | --- |
| `Space` | 播放 / 暂停 |
| `N` / `P` | 下一首 / 上一首 |
| `↑` / `↓` | 上一个 / 下一个可视化效果 |
| `F` | 进入 / 退出全屏 |
| `L` | 显示 / 隐藏歌词 |
| `W` | 触发烟花效果（当前效果支持时） |
| `Esc` | 关闭帮助或控制中心 |

移动端使用**双指同向横滑**切换可视化，避免与场景自身的单指交互混淆。Dock 支持拖动，横屏可获得更宽阔的画面。

### 设置保存与本地数据

动画参数、歌词、Dock、舞台氛围和流体等设置按各自面板提供的方式保存在当前浏览器中。带有“保存我的设置”等按钮的分组需要主动保存，调整参数并不等于已经保存；恢复程序默认也不等于删除已保存的记录。

背景设置不参与控制中心偏好持久化。普通文件选择器载入的音乐、歌词、图片和视频在刷新后可能需要重新选择；已连接的音乐目录则通过浏览器目录授权机制恢复。本机设置与目录记录不会自动跨设备同步。

### 浏览器要求与常见问题

使用支持 WebGL 2 和 Web Audio API 的现代浏览器，并启用 JavaScript。WebGPU 和目录访问功能取决于浏览器、系统及硬件支持。

| 问题 | 处理方式 |
| --- | --- |
| 首次播放没有声音 | 主动点击播放按钮，确认音量及音频文件格式 |
| 系统音频没有反应 | 检查是否共享音频，尝试共享有声音的浏览器标签页 |
| 歌词不显示 | 同时选择 LRC 文件，检查文件名并开启歌词显示 |
| 首次切换效果需要等待 | 效果按需加载，复杂场景初始化需要时间 |
| 画面卡顿 | 降低当前效果的粒子或后处理配置，减少叠加效果并降低流体参数 |
| WebGPU 无法使用 | 在支持切换的流体设置中选择 WebGL 后端 |
| 音乐目录无法恢复 | 点击重新连接并授予读取权限，或重新选择目录 |
| 手势无法开启 | 使用 HTTPS，检查摄像头权限与设备连接 |

### 技术实现

| 领域 | 使用技术 |
| --- | --- |
| 图形渲染 | Three.js、WebGL、WebGPU、TSL、GLSL、Canvas |
| 音频分析 | Web Audio API、AnalyserNode、自定义音频特征引擎 |
| 动画与后处理 | GSAP、Three.js 后处理与 GPU 粒子计算 |
| 参数面板 | lil-gui |
| 手势识别 | MediaPipe Hand Landmarker、Web Worker |
| 本地存储 | 浏览器本地偏好存储、IndexedDB 目录句柄 |

运行时主要数据流：

```text
本地音乐 / 共享音频 → 播放器与音频分析 → 当前可视化效果
                                           + 歌词 / 背景 / 环境光 / 流体
鼠标 / 触摸 / 摄像头手势 ────────────────────→ 交互控制
```

### 仓库说明与许可

本仓库保存 [AudioEyes 网站](https://www.audioeyes.xyz/) 的静态发布文件，包括 `index.html`、构建后的 `assets/`、字体、媒体、手势识别资源与站内帮助；不是包含开发脚本的源码工程。

第三方组件与字体的版权、版本和许可文本见 [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) 及 [third-party-licenses/](third-party-licenses/)。这些许可仅适用于对应组件，不代表 AudioEyes 原创代码或媒体素材采用相同许可。
