import { readFile } from 'node:fs/promises';

const headingPattern = /^(##|###)\s+(.*)$/;
const zhToCanonical = new Map([
  ['语音基础模型与框架', 'Foundation Models & Frameworks'],
  ['端到端工具箱', 'End-to-End Toolkits'],
  ['自监督预训练', 'Self-supervised Pretraining'],
  ['文本转语音 TTS', 'Text-to-Speech (TTS)'],
  ['TTS > 基础模型', 'TTS > Foundation Models'],
  ['TTS > 零样本/少样本', 'TTS > Zero-Shot / Few-Shot'],
  ['TTS > 扩散/流匹配方法', 'TTS > Diffusion / Flow Matching Methods'],
  ['TTS > 低延迟/实时', 'TTS > Low-Latency / Real-time'],
  ['TTS > 服务端与部署', 'TTS > Server / Deployment'],
  ['自动语音识别 ASR', 'Automatic Speech Recognition (ASR)'],
  ['ASR > 基础模型', 'ASR > Foundation Models'],
  ['ASR > 实时/流式', 'ASR > Real-time / Streaming'],
  ['ASR > 端侧优化', 'ASR > On-Device / Edge'],
  ['ASR > 多语言', 'ASR > Multilingual'],
  ['ASR > VAD 与语音活动检测', 'ASR > VAD & Voice Activity Detection'],
  ['ASR > 说话人分离与 Diarization', 'ASR > Speaker Diarization'],
  ['ASR > 服务端/部署工具', 'ASR > Server / Deployment Tools'],
  ['ASR > 训练与配方', 'ASR > Training / Recipes'],
  ['声音克隆 Voice Cloning', 'Voice Cloning'],
  ['Voice Cloning > 零样本', 'Voice Cloning > Zero-Shot'],
  ['Voice Cloning > 少样本微调', 'Voice Cloning > Few-Shot Fine-tuning'],
  ['Voice Cloning > 跨语言', 'Voice Cloning > Cross-Lingual'],
  ['Voice Cloning > 歌声转换', 'Voice Cloning > Singing Voice Conversion'],
  ['音频增强', 'Audio Enhancement'],
  ['音频增强 > 去噪/降噪', 'Audio Enhancement > Denoising'],
  ['音频增强 > 音乐源分离', 'Audio Enhancement > Music Source Separation'],
  ['音频增强 > 语音增强/超分', 'Audio Enhancement > Speech Enhancement / Super-resolution'],
  ['音频增强 > 评测指标与基准', 'Audio Enhancement > Metrics & Benchmarks'],
  ['音频增强 > AEC 回声消除', 'Audio Enhancement > AEC (Echo Cancellation)'],
  ['音频增强 > 去混响 (Dereverb)', 'Audio Enhancement > Dereverb'],
  ['音频工程与开发工具', 'Audio Engineering Tools'],
  ['音频工程 > I/O 与格式处理', 'Audio Engineering > I/O & Format Processing'],
  ['音频工程 > 重采样与信号处理', 'Audio Engineering > Resampling & Signal Processing'],
  ['音频工程 > 歌声合成与制作（SVS/Vocal Synth）', 'Audio Engineering > Singing Voice Synthesis (SVS/Vocal Synth)'],
  ['音频工程 > 可视化与数据分析', 'Audio Engineering > Visualization & Data Analysis'],
  ['音频工程 > 数据增强', 'Audio Engineering > Data Augmentation'],
  ['音频工程 > 降噪插件', 'Audio Engineering > Noise Suppression Plugins'],
  ['音频工程 > 实时音频处理', 'Audio Engineering > Real-time Audio Processing'],
  ['数据集与评测基准', 'Datasets & Benchmarks'],
  ['数据集与评测 > 语音数据集', 'Datasets & Benchmarks > Speech Datasets'],
  ['数据集与评测 > 分离/增强数据集', 'Datasets & Benchmarks > Separation/Enhancement Datasets'],
  ['数据集与评测 > 评测基准与指标', 'Datasets & Benchmarks > Evaluation Metrics'],
  ['语音大模型与实时系统', 'Speech LLM & Real-time Systems'],
  ['语音大模型 > 端到端语音模型', 'Speech LLM > End-to-End Speech Models'],
  ['语音大模型 > 全双工对话系统', 'Speech LLM > Full-Duplex Dialogue Systems'],
  ['语音大模型 > 实时处理框架', 'Speech LLM > Real-time Processing Frameworks'],
  ['语音大模型 > 回合管理与生态组件', 'Speech LLM > Turn-taking & Ecosystem Components'],
  ['语音大模型 > 资源聚合', 'Speech LLM > Resource Aggregations'],
  ['论文 Papers', 'Papers'],
  ['Papers > 基础模型', 'Papers > Foundation Models'],
  ['Papers > TTS', 'Papers > TTS'],
  ['Papers > ASR', 'Papers > ASR'],
  ['Papers > Voice Cloning', 'Papers > Voice Cloning'],
  ['Papers > 音频增强', 'Papers > Audio Enhancement'],
  ['Papers > 语音大模型', 'Papers > Speech LLM'],
  ['Papers > 综述', 'Papers > Surveys'],
  ['贡献指南', 'Contributing'],
]);

function extractHeadings(content, mapper) {
  return content
    .split(/\r?\n/)
    .map((line) => line.match(headingPattern))
    .filter(Boolean)
    .map((match) => ({
      level: match[1].length,
      text: match[2].trim(),
      canonical: mapper(match[2].trim()),
    }));
}

function canonicalizeZh(text) {
  if (zhToCanonical.has(text)) {
    return zhToCanonical.get(text);
  }

  const hasChineseCharacters = /[\u4e00-\u9fff]/.test(text);
  if (hasChineseCharacters) {
    throw new Error(`Unknown Chinese heading mapping: ${text}`);
  }

  return text;
}

function canonicalizeEn(text) {
  return text;
}

function formatHeading(heading) {
  return `${'#'.repeat(heading.level)} ${heading.text}`;
}

const [readmeEn, readmeZh] = await Promise.all([
  readFile('README.md', 'utf8'),
  readFile('README.zh.md', 'utf8'),
]);

const enHeadings = extractHeadings(readmeEn, canonicalizeEn);
const zhHeadings = extractHeadings(readmeZh, canonicalizeZh);

if (enHeadings.length !== zhHeadings.length) {
  console.error(`Heading count mismatch: README.md=${enHeadings.length}, README.zh.md=${zhHeadings.length}`);
  process.exit(1);
}

for (let index = 0; index < enHeadings.length; index += 1) {
  const en = enHeadings[index];
  const zh = zhHeadings[index];
  if (en.level !== zh.level || en.canonical !== zh.canonical) {
    console.error('README structure mismatch detected.');
    console.error(`At position ${index + 1}:`);
    console.error(`  README.md:    ${formatHeading(en)}`);
    console.error(`  README.zh.md: ${formatHeading(zh)}`);
    console.error(`  expected canonical: ${en.canonical}`);
    console.error(`  actual canonical:   ${zh.canonical}`);
    process.exit(1);
  }
}

console.log(`README structure OK: ${enHeadings.length} headings aligned.`);
