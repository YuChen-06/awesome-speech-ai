# Awesome Speech AI [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

- 简体中文 | [English](./README.md)

> 精选 Speech AI 资源合集：文本转语音 · 语音识别 · 声音克隆 · 音频增强 · 数据集 · 语音大模型 · 论文

## Contents

- [语音基础模型与框架](#语音基础模型与框架)
- [文本转语音 TTS](#文本转语音-tts)
- [自动语音识别 ASR](#自动语音识别-asr)
- [声音克隆 Voice Cloning](#声音克隆-voice-cloning)
- [音频增强](#音频增强)
- [音频工程与开发工具](#音频工程与开发工具)
- [数据集与评测基准](#数据集与评测基准)
- [语音大模型与实时系统](#语音大模型与实时系统)
- [论文 Papers](#论文-papers)

---

## 语音基础模型与框架

### 端到端工具箱

- [ESPnet](https://github.com/espnet/espnet) ![stars](https://img.shields.io/github/stars/espnet/espnet.svg?cacheSeconds=86400) - 端到端语音处理工具箱（ASR/TTS/翻译/增强）。
- [NVIDIA NeMo](https://github.com/NVIDIA-NeMo/NeMo) ![stars](https://img.shields.io/github/stars/NVIDIA-NeMo/NeMo.svg?cacheSeconds=86400) - NVIDIA Speech AI 框架（训练+部署：ASR/TTS/说话人等）。
- [SpeechBrain](https://github.com/speechbrain/speechbrain) ![stars](https://img.shields.io/github/stars/speechbrain/speechbrain.svg?cacheSeconds=86400) - 基于 PyTorch 的语音工具箱（ASR/说话人/增强/分离等）。
- [PaddleSpeech](https://github.com/PaddlePaddle/PaddleSpeech) ![stars](https://img.shields.io/github/stars/PaddlePaddle/PaddleSpeech.svg?cacheSeconds=86400) - 语音工具箱，覆盖 ASR/TTS/说话人/KWS，提供 recipes 与部署工具。

### 自监督预训练

- [S3PRL](https://github.com/s3prl/s3prl) ![stars](https://img.shields.io/github/stars/s3prl/s3prl.svg?cacheSeconds=86400) - 自监督语音预训练与表征学习工具链。
- [fairseq](https://github.com/facebookresearch/fairseq) ![stars](https://img.shields.io/github/stars/facebookresearch/fairseq.svg?cacheSeconds=86400) - 序列建模工具箱，包含常用语音 SSL 实现（如 wav2vec 2.0 / HuBERT）。
- [UniSpeech](https://github.com/microsoft/UniSpeech) ![stars](https://img.shields.io/github/stars/microsoft/UniSpeech.svg?cacheSeconds=86400) - Microsoft 语音 SSL 研究代码库（UniSpeech / UniSpeech-SAT）。
- [WavLM（UniLM 仓库内）](https://github.com/microsoft/unilm/tree/master/wavlm) ![stars](https://img.shields.io/github/stars/microsoft/unilm.svg?cacheSeconds=86400) - WavLM 相关代码与资源（位于 UniLM 仓库）。

## 文本转语音 TTS

### TTS > 基础模型

- [Chatterbox](https://github.com/resemble-ai/chatterbox) ![stars](https://img.shields.io/github/stars/resemble-ai/chatterbox.svg?cacheSeconds=86400) - Resemble AI 开源的 TTS 模型。
- [Coqui TTS](https://github.com/coqui-ai/TTS) ![stars](https://img.shields.io/github/stars/coqui-ai/TTS.svg?cacheSeconds=86400) - 生产级开源 TTS 工具箱，含 XTTS 语音克隆能力。
- [Bark](https://github.com/suno-ai/bark) ![stars](https://img.shields.io/github/stars/suno-ai/bark.svg?cacheSeconds=86400) - 文本提示驱动的语音/音频生成模型。
- [StyleTTS 2](https://github.com/yl4579/StyleTTS2) ![stars](https://img.shields.io/github/stars/yl4579/StyleTTS2.svg?cacheSeconds=86400) - 基于 style diffusion + adversarial training 的 TTS 实现。
- [Tortoise-TTS](https://github.com/neonbjb/tortoise-tts) ![stars](https://img.shields.io/github/stars/neonbjb/tortoise-tts.svg?cacheSeconds=86400) - 多说话人 TTS 参考实现（推理速度相对较慢）。
- [Amphion](https://github.com/open-mmlab/Amphion) ![stars](https://img.shields.io/github/stars/open-mmlab/Amphion.svg?cacheSeconds=86400) - 音频/音乐/语音生成工具箱，含多种 TTS 配方和模型。
- [CosyVoice](https://github.com/FunAudioLLM/CosyVoice) ![stars](https://img.shields.io/github/stars/FunAudioLLM/CosyVoice.svg?cacheSeconds=86400) - 基于 LLM 的多语言/流式 TTS 全栈（训练/推理/部署）。
- [Parler-TTS](https://github.com/huggingface/parler-tts) ![stars](https://img.shields.io/github/stars/huggingface/parler-tts.svg?cacheSeconds=86400) - 自然语言提示控制的 TTS 实现。
- [MeloTTS](https://github.com/myshell-ai/MeloTTS) ![stars](https://img.shields.io/github/stars/myshell-ai/MeloTTS.svg?cacheSeconds=86400) - 多语言 TTS 库。
- [Fish Speech](https://github.com/fishaudio/fish-speech) ![stars](https://img.shields.io/github/stars/fishaudio/fish-speech.svg?cacheSeconds=86400) - 多语言/表现力 TTS。
- [Orpheus-TTS](https://github.com/canopyai/orpheus-tts) ![stars](https://img.shields.io/github/stars/canopyai/orpheus-tts.svg?cacheSeconds=86400) - 基于 Llama-3b 的 TTS，支持情感控制与流式推理.

### TTS > 零样本/少样本

- [Qwen3-TTS](https://github.com/QwenLM/Qwen3-TTS) ![stars](https://img.shields.io/github/stars/QwenLM/Qwen3-TTS.svg?cacheSeconds=86400) - 开源 TTS 模型，支持语音克隆与流式/推理工具链.
- [VALL-E X](https://github.com/Plachtaa/VALL-E-X) ![stars](https://img.shields.io/github/stars/Plachtaa/VALL-E-X.svg?cacheSeconds=86400) - 零样本 TTS 复现（非官方），支持跨语言语音克隆.
- [Zonos](https://github.com/Zyphra/Zonos) ![stars](https://img.shields.io/github/stars/Zyphra/Zonos.svg?cacheSeconds=86400) - 开源多语言 TTS，表现力强。
- [Index-TTS](https://github.com/index-tts/index-tts) ![stars](https://img.shields.io/github/stars/index-tts/index-tts.svg?cacheSeconds=86400) - 工业级可控零样本 TTS。
- [VoxCPM](https://github.com/OpenBMB/VoxCPM) ![stars](https://img.shields.io/github/stars/OpenBMB/VoxCPM.svg?cacheSeconds=86400) - 无 tokenizer TTS：连续空间建模，5 秒语音克隆.
- [GLM-TTS](https://github.com/zai-org/GLM-TTS) ![stars](https://img.shields.io/github/stars/zai-org/GLM-TTS.svg?cacheSeconds=86400) - 可控/情感表达零样本 TTS（多奖励 RL），支持流式推理.
- [Sopro](https://github.com/samuel-vitorino/sopro) ![stars](https://img.shields.io/github/stars/samuel-vitorino/sopro.svg?cacheSeconds=86400) - 轻量级实时 TTS + 零样本语音克隆。

### TTS > 扩散/流匹配方法

- [F5-TTS](https://github.com/SWivid/F5-TTS) ![stars](https://img.shields.io/github/stars/SWivid/F5-TTS.svg?cacheSeconds=86400) - 基于 flow matching 的 TTS 实现。
- [Matcha-TTS](https://github.com/shivammehta25/Matcha-TTS) ![stars](https://img.shields.io/github/stars/shivammehta25/Matcha-TTS.svg?cacheSeconds=86400) - Conditional flow matching TTS（ICASSP 2024 官方实现）。
- [Grad-TTS](https://github.com/WelkinYang/GradTTS) ![stars](https://img.shields.io/github/stars/WelkinYang/GradTTS.svg?cacheSeconds=86400) - 扩散式 TTS（Grad-TTS）PyTorch 实现.

### TTS > 低延迟/实时

- [Kyutai pocket-tts](https://github.com/kyutai-labs/pocket-tts) ![stars](https://img.shields.io/github/stars/kyutai-labs/pocket-tts.svg?cacheSeconds=86400) - CPU 友好的小型 TTS，适合端侧/低资源实时播放.
- [Kyutai delayed-streams-modeling](https://github.com/kyutai-labs/delayed-streams-modeling) ![stars](https://img.shields.io/github/stars/kyutai-labs/delayed-streams-modeling.svg?cacheSeconds=86400) - 延迟流建模（DSM）：统一流式 STT/TTS 框架.
- [Kyutai unmute](https://github.com/kyutai-labs/unmute) ![stars](https://img.shields.io/github/stars/kyutai-labs/unmute.svg?cacheSeconds=86400) - 语音接口层，为文本 LLM 添加听/说能力.

### TTS > 服务端与部署

- [parler-tts-server](https://github.com/fedirz/parler-tts-server) ![stars](https://img.shields.io/github/stars/fedirz/parler-tts-server.svg?cacheSeconds=86400) - Parler-TTS 的 OpenAI 兼容 TTS API 服务（Docker 可部署）。
- [parler-tts-fastapi](https://github.com/parisneo/parler-tts-fastapi) ![stars](https://img.shields.io/github/stars/parisneo/parler-tts-fastapi.svg?cacheSeconds=86400) - Parler-TTS 的 FastAPI 服务（含流式响应）。
- [Parler-tts-streaming (SSE)](https://github.com/inferless/Parler-tts-streaming) ![stars](https://img.shields.io/github/stars/inferless/Parler-tts-streaming.svg?cacheSeconds=86400) - Parler-TTS 的 SSE 流式音频输出示例。
- [Home Assistant Piper Add-on](https://github.com/home-assistant/addons/tree/master/piper) ![stars](https://img.shields.io/github/stars/home-assistant/addons.svg?cacheSeconds=86400) - Home Assistant 官方 Piper 插件。
- [StyleTTS-WebUI](https://github.com/JarodMica/StyleTTS-WebUI) ![stars](https://img.shields.io/github/stars/JarodMica/StyleTTS-WebUI.svg?cacheSeconds=86400) - StyleTTS2 的 WebUI 封装。
- [StyleTTS2_GUI](https://github.com/effusiveperiscope/StyleTTS2_GUI) ![stars](https://img.shields.io/github/stars/effusiveperiscope/StyleTTS2_GUI.svg?cacheSeconds=86400) - StyleTTS2 的 Windows GUI 打包。
- [Qwen3-TTS OpenAI FastAPI](https://github.com/groxaxo/Qwen3-TTS-Openai-Fastapi) ![stars](https://img.shields.io/github/stars/groxaxo/Qwen3-TTS-Openai-Fastapi.svg?cacheSeconds=86400) - Qwen3-TTS 的 OpenAI 兼容接口服务端（FastAPI）。
- [faster-qwen3-tts](https://github.com/andimarafioti/faster-qwen3-tts) ![stars](https://img.shields.io/github/stars/andimarafioti/faster-qwen3-tts.svg?cacheSeconds=86400) - Qwen3-TTS 的实时推理加速实现（CUDA Graph，MIT）。
- [Wyoming Piper](https://github.com/rhasspy/wyoming-piper) ![stars](https://img.shields.io/github/stars/rhasspy/wyoming-piper.svg?cacheSeconds=86400) - Piper 的 Wyoming 协议服务端（Home Assistant 集成）。
- [TTS-WebUI](https://github.com/rsxdalv/TTS-WebUI) ![stars](https://img.shields.io/github/stars/rsxdalv/TTS-WebUI.svg?cacheSeconds=86400) - 单一 WebUI 聚合多种 TTS/VC/Audio 模型（扩展式）。
- [Mimic 3](https://github.com/MycroftAI/mimic3) ![stars](https://img.shields.io/github/stars/MycroftAI/mimic3.svg?cacheSeconds=86400) - Mycroft 生态的本地神经 TTS 引擎（端侧/离线部署友好）。
- [Piper (维护版)](https://github.com/OHF-Voice/piper1-gpl) ![stars](https://img.shields.io/github/stars/OHF-Voice/piper1-gpl.svg?cacheSeconds=86400) - 快速本地 TTS 引擎。
- [VibeVoice](https://github.com/vibevoice-community/VibeVoice) ![stars](https://img.shields.io/github/stars/vibevoice-community/VibeVoice.svg?cacheSeconds=86400) - 长对话 TTS，支持 90 分钟对话与 4 个说话人.

## 自动语音识别 ASR

### ASR > 基础模型

- [Whisper](https://github.com/openai/whisper) ![stars](https://img.shields.io/github/stars/openai/whisper.svg?cacheSeconds=86400) - 通用 ASR 基础模型，支持多语言和翻译能力.
- [Kaldi](https://github.com/kaldi-asr/kaldi) ![stars](https://img.shields.io/github/stars/kaldi-asr/kaldi.svg?cacheSeconds=86400) - 经典 ASR 工具箱，学术/工业生态丰富.
- [WeNet](https://github.com/wenet-e2e/wenet) ![stars](https://img.shields.io/github/stars/wenet-e2e/wenet.svg?cacheSeconds=86400) - 面向生产的端到端 ASR 工具箱，覆盖流式/非流式配方.
- [Vosk](https://github.com/alphacep/vosk-api) ![stars](https://img.shields.io/github/stars/alphacep/vosk-api.svg?cacheSeconds=86400) - 离线 ASR API，多语言，小模型，支持流式.

### ASR > 实时/流式

- [Kyutai Hibiki](https://github.com/kyutai-labs/hibiki) ![stars](https://img.shields.io/github/stars/kyutai-labs/hibiki.svg?cacheSeconds=86400) - 流式语音到语音翻译（S2ST）系统.
- [Hibiki-Zero](https://github.com/kyutai-labs/hibiki-zero) ![stars](https://img.shields.io/github/stars/kyutai-labs/hibiki-zero.svg?cacheSeconds=86400) - 实时多语种语音翻译（支持 voice transfer，MIT）。
- [NAST-S2x](https://github.com/ictnlp/NAST-S2x) ![stars](https://img.shields.io/github/stars/ictnlp/NAST-S2x.svg?cacheSeconds=86400) - 非自回归端到端同时同传模型（S2S & S2T）。
- [whisper_streaming](https://github.com/ufal/whisper_streaming) ![stars](https://img.shields.io/github/stars/ufal/whisper_streaming.svg?cacheSeconds=86400) - Whisper 实时流式识别，支持增量处理.
- [sherpa](https://github.com/k2-fsa/sherpa) ![stars](https://img.shields.io/github/stars/k2-fsa/sherpa.svg?cacheSeconds=86400) - 流式 ASR 推理/服务框架（PyTorch，部署友好）。
- [Nemotron Speech ASR (weights)](https://huggingface.co/nvidia/nemotron-speech-streaming-en-0.6b) - 超低延迟流式 ASR 权重。
- [StreamSpeech](https://github.com/ictnlp/StreamSpeech) ![stars](https://img.shields.io/github/stars/ictnlp/StreamSpeech.svg?cacheSeconds=86400) - “All-in-One” 流式模型：ASR+ST+TTS（同声传译方向）。

### ASR > 端侧优化

- [whisper.cpp](https://github.com/ggml-org/whisper.cpp) ![stars](https://img.shields.io/github/stars/ggml-org/whisper.cpp.svg?cacheSeconds=86400) - C/C++ 端侧 Whisper 推理，CPU/Metal 支持，含实时麦克风示例.
- [sherpa-onnx](https://github.com/k2-fsa/sherpa-onnx) ![stars](https://img.shields.io/github/stars/k2-fsa/sherpa-onnx.svg?cacheSeconds=86400) - 端侧/离线/流式 ASR+TTS+VAD+增强一体化（ONNX，无需联网）。
- [sherpa-ncnn](https://github.com/k2-fsa/sherpa-ncnn) ![stars](https://img.shields.io/github/stars/k2-fsa/sherpa-ncnn.svg?cacheSeconds=86400) - 端侧实时 ASR + VAD + TTS（ncnn，移动端友好，无需联网）。
- [Moonshine](https://github.com/usefulsensors/moonshine) ![stars](https://img.shields.io/github/stars/usefulsensors/moonshine.svg?cacheSeconds=86400) - 面向端侧设备优化的 ASR 模型与工具.

### ASR > 多语言

- [SeamlessM4T](https://github.com/facebookresearch/seamless_communication) ![stars](https://img.shields.io/github/stars/facebookresearch/seamless_communication.svg?cacheSeconds=86400) - 多语言多模态翻译模型，支持语音到文本和语音到语音.
- [Vosk](https://github.com/alphacep/vosk-api) ![stars](https://img.shields.io/github/stars/alphacep/vosk-api.svg?cacheSeconds=86400) - 离线 ASR API，多语言支持，小模型，支持流式。
- [sherpa-onnx omnilingual ASR](https://huggingface.co/csukuangfj2/sherpa-onnx-omnilingual-asr-1600-languages-300M-ctc-v2-2026-02-05) - sherpa-onnx 1600+ 语种 ASR 权重（端侧/离线推理）。

多语言 ASR 基础模型请参见上方的 Whisper.

### ASR > VAD 与语音活动检测

- [Silero VAD](https://github.com/snakers4/silero-vad) ![stars](https://img.shields.io/github/stars/snakers4/silero-vad.svg?cacheSeconds=86400) - 轻量高质量 VAD（PyTorch/ONNX），适合流式切分（含 v5 版本）。
- [WebRTC VAD](https://github.com/wiseman/py-webrtcvad) ![stars](https://img.shields.io/github/stars/wiseman/py-webrtcvad.svg?cacheSeconds=86400) - 经典高性能 VAD（WebRTC 实现），适合端侧/流式切分.

### ASR > 说话人分离与 Diarization

- [pyannote-audio](https://github.com/pyannote/pyannote-audio) ![stars](https://img.shields.io/github/stars/pyannote/pyannote-audio.svg?cacheSeconds=86400) - 说话人分离/变更/重叠检测工具箱，生态成熟.
- [diarize](https://github.com/FoxNoseTech/diarize) ![stars](https://img.shields.io/github/stars/FoxNoseTech/diarize.svg?cacheSeconds=86400) - CPU-only 说话人分离（who spoke when），ONNX 推理。

### ASR > 服务端/部署工具

- [WhisperX](https://github.com/m-bain/whisperX) ![stars](https://img.shields.io/github/stars/m-bain/whisperX.svg?cacheSeconds=86400) - Whisper 对齐增强，词级时间戳 + 可选说话人分离.
- [whisper-timestamped](https://github.com/linto-ai/whisper-timestamped) ![stars](https://img.shields.io/github/stars/linto-ai/whisper-timestamped.svg?cacheSeconds=86400) - Whisper 词级时间戳与置信度（AGPL-3.0）。
- [faster-whisper](https://github.com/SYSTRAN/faster-whisper) ![stars](https://img.shields.io/github/stars/SYSTRAN/faster-whisper.svg?cacheSeconds=86400) - Whisper 加速推理，CTranslate2 实现，高效部署.
- [speaches](https://github.com/speaches-ai/speaches) ![stars](https://img.shields.io/github/stars/speaches-ai/speaches.svg?cacheSeconds=86400) - OpenAI API 兼容服务端，支持流式转写/翻译（STT 由 faster-whisper 驱动）。
- [whisper-websocket-server](https://github.com/rpdrewes/whisper-websocket-server) ![stars](https://img.shields.io/github/stars/rpdrewes/whisper-websocket-server.svg?cacheSeconds=86400) - Whisper WebSocket 语音识别服务，适合端到端语音助手.
- [whisper-cpp-server](https://github.com/litongjava/whisper-cpp-server) ![stars](https://img.shields.io/github/stars/litongjava/whisper-cpp-server.svg?cacheSeconds=86400) - 基于 whisper.cpp 的服务端（C++推理，浏览器展示）。

### ASR > 训练与配方

- [k2](https://github.com/k2-fsa/k2) ![stars](https://img.shields.io/github/stars/k2-fsa/k2.svg?cacheSeconds=86400) - 可微 FSA/FST 算法库（PyTorch 兼容），ASR recipes 基础组件.
- [icefall](https://github.com/k2-fsa/icefall) ![stars](https://img.shields.io/github/stars/k2-fsa/icefall.svg?cacheSeconds=86400) - 基于 k2 + lhotse 的语音 recipes 集合（含流式 transducer/zipformer 等）。

## 声音克隆 Voice Cloning

### Voice Cloning > 零样本

- [OpenVoice](https://github.com/myshell-ai/OpenVoice) ![stars](https://img.shields.io/github/stars/myshell-ai/OpenVoice.svg?cacheSeconds=86400) - 零样本跨语言语音克隆（风格可控）。
- [ZeroVOX](https://github.com/gooofy/zerovox) ![stars](https://img.shields.io/github/stars/gooofy/zerovox.svg?cacheSeconds=86400) - 零样本实时 TTS 系统，完全离线。

### Voice Cloning > 少样本微调

- [GPT-SoVITS](https://github.com/RVC-Boss/GPT-SoVITS) ![stars](https://img.shields.io/github/stars/RVC-Boss/GPT-SoVITS.svg?cacheSeconds=86400) - 少样本 TTS/VC WebUI，支持快速声音克隆与跨语言克隆.
- [RVC WebUI](https://github.com/rvc-project/retrieval-based-voice-conversion-webui) ![stars](https://img.shields.io/github/stars/rvc-project/retrieval-based-voice-conversion-webui.svg?cacheSeconds=86400) - 基于检索的语音转换：训练 + 实时变声/歌声转换 WebUI.

### Voice Cloning > 跨语言

- [VALL-E X](https://github.com/Plachtaa/VALL-E-X) ![stars](https://img.shields.io/github/stars/Plachtaa/VALL-E-X.svg?cacheSeconds=86400) - 零样本 TTS 复现（非官方），支持跨语言语音克隆。

更多跨语言语音克隆选项请参见上方的 OpenVoice 与 GPT-SoVITS.

### Voice Cloning > 歌声转换

- [RVC WebUI](https://github.com/rvc-project/retrieval-based-voice-conversion-webui) ![stars](https://img.shields.io/github/stars/rvc-project/retrieval-based-voice-conversion-webui.svg?cacheSeconds=86400) - 基于检索的语音转换：训练 + 实时变声/歌声转换 WebUI.
- [so-vits-svc](https://github.com/svc-develop-team/so-vits-svc) ![stars](https://img.shields.io/github/stars/svc-develop-team/so-vits-svc.svg?cacheSeconds=86400) - 歌声转换 SVC（SoftVC VITS），1分钟语音训练，零样本5秒推理（已归档，仅作参考）。
- [Seed-VC](https://github.com/Plachtaa/seed-vc) ![stars](https://img.shields.io/github/stars/Plachtaa/seed-vc.svg?cacheSeconds=86400) - 零样本语音转换与歌声转换，支持实时.

## 音频增强

### 音频增强 > 去噪/降噪

- [RNNoise](https://github.com/xiph/rnnoise) ![stars](https://img.shields.io/github/stars/xiph/rnnoise.svg?cacheSeconds=86400) - 经典实时语音降噪库（C 实现，端侧友好）。
- [DeepFilterNet](https://github.com/Rikorose/DeepFilterNet) ![stars](https://img.shields.io/github/stars/Rikorose/DeepFilterNet.svg?cacheSeconds=86400) - 基于深度滤波的噪声抑制模型.
- [DCCRN](https://github.com/wangtianrui/DCCRN) ![stars](https://img.shields.io/github/stars/wangtianrui/DCCRN.svg?cacheSeconds=86400) - 相位感知语音增强（Deep Complex CRN）参考实现.
- [CleanUNet](https://github.com/NVIDIA/CleanUNet) ![stars](https://img.shields.io/github/stars/NVIDIA/CleanUNet.svg?cacheSeconds=86400) - 波形域语音去噪模型（ICASSP 2022）。
- [Enhanced-RNNoise](https://github.com/tannu64/Enhanced-RNNoise-Real-time-Audio-Noise-Suppression) ![stars](https://img.shields.io/github/stars/tannu64/Enhanced-RNNoise-Real-time-Audio-Noise-Suppression.svg?cacheSeconds=86400) - 增强版 RNNoise（反馈抑制+去混响+降噪）。
- [FastEnhancer](https://github.com/aask1357/fastenhancer) ![stars](https://img.shields.io/github/stars/aask1357/fastenhancer.svg?cacheSeconds=86400) - 速度优化的流式神经语音增强网络。

### 音频增强 > 音乐源分离

- [Ultimate Vocal Remover (UVR)](https://github.com/Anjok07/ultimatevocalremovergui) ![stars](https://img.shields.io/github/stars/Anjok07/ultimatevocalremovergui.svg?cacheSeconds=86400) - 人声/伴奏分离 GUI（集成 Demucs/MDX/VR 等模型生态）。
- [Demucs](https://github.com/adefossez/demucs) ![stars](https://img.shields.io/github/stars/adefossez/demucs.svg?cacheSeconds=86400) - 音乐源分离模型（优先引用维护分支）。
- [Open-Unmix](https://github.com/sigsep/open-unmix-pytorch) ![stars](https://img.shields.io/github/stars/sigsep/open-unmix-pytorch.svg?cacheSeconds=86400) - MUSDB18 经典基线源分离实现.
- [Asteroid](https://github.com/asteroid-team/asteroid) ![stars](https://img.shields.io/github/stars/asteroid-team/asteroid.svg?cacheSeconds=86400) - 基于 PyTorch 的音频源分离工具箱，提供 recipes 与预训练模型.
- [Spleeter](https://github.com/deezer/spleeter) ![stars](https://img.shields.io/github/stars/deezer/spleeter.svg?cacheSeconds=86400) - 经典源分离工具（2/4/5 stems；依赖偏旧，作为可选项）。
- [python-audio-separator](https://github.com/nomadkaraoke/python-audio-separator) ![stars](https://img.shields.io/github/stars/nomadkaraoke/python-audio-separator.svg?cacheSeconds=86400) - 多模型 stem 分离 CLI/库（UVR 模型生态聚合，便于工程集成）。

### 音频增强 > 语音增强/超分

- [VoiceFixer](https://github.com/haoheliu/voicefixer) ![stars](https://img.shields.io/github/stars/haoheliu/voicefixer.svg?cacheSeconds=86400) - 通用语音修复/增强，适合历史音频/老录音修复。
- [NovaSR](https://github.com/ysharma3501/NovaSR) ![stars](https://img.shields.io/github/stars/ysharma3501/NovaSR.svg?cacheSeconds=86400) - 音频超分模型（16kHz->48kHz，超轻量级）。
- [AP-BWE](https://github.com/yxlu-0102/AP-BWE) ![stars](https://img.shields.io/github/stars/yxlu-0102/AP-BWE.svg?cacheSeconds=86400) - 幅度与相位感知带宽扩展（BWE）用于音频超分.
- [BAE-Net](https://github.com/yuguochencuc/BAE-Net) ![stars](https://img.shields.io/github/stars/yuguochencuc/BAE-Net.svg?cacheSeconds=86400) - 带宽扩展网络，提升音频质量.

### 音频增强 > 评测指标与基准

- [speechmetrics](https://github.com/aliutkus/speechmetrics) ![stars](https://img.shields.io/github/stars/aliutkus/speechmetrics.svg?cacheSeconds=86400) - 语音质量评测指标封装（PESQ/STOI/SI-SDR 等）。
- [pystoi](https://github.com/mpariente/pystoi) ![stars](https://img.shields.io/github/stars/mpariente/pystoi.svg?cacheSeconds=86400) - STOI（Short-Time Objective Intelligibility）指标的 Python 实现.
- [PESQ](https://github.com/ludlows/PESQ) ![stars](https://img.shields.io/github/stars/ludlows/PESQ.svg?cacheSeconds=86400) - PESQ（Perceptual Evaluation of Speech Quality）Python 封装.

### 音频增强 > AEC 回声消除

- [speexdsp](https://github.com/xiph/speexdsp) ![stars](https://img.shields.io/github/stars/xiph/speexdsp.svg?cacheSeconds=86400) - Speex DSP 库，包含 AEC/NS/AGC。
- [aec-rs](https://github.com/thewh1teagle/aec) ![stars](https://img.shields.io/github/stars/thewh1teagle/aec.svg?cacheSeconds=86400) - 基于 speexdsp 的 Rust AEC 库。
- [webrtcaec3.js](https://github.com/ennuicastr/webrtcaec3.js) ![stars](https://img.shields.io/github/stars/ennuicastr/webrtcaec3.js.svg?cacheSeconds=86400) - WebRTC AEC3 的 WebAssembly/JavaScript 移植。
- [aec3-rs](https://github.com/RubyBit/aec3-rs) ![stars](https://img.shields.io/github/stars/RubyBit/aec3-rs.svg?cacheSeconds=86400) - WebRTC AEC3 的 Rust 移植。
- [DTLN-aec](https://github.com/shiguredo/dtln-aec) ![stars](https://img.shields.io/github/stars/shiguredo/dtln-aec.svg?cacheSeconds=86400) - 基于深度学习的 AEC（浏览器端用例）。

### 音频增强 > 去混响 (Dereverb)

- [ClearerVoice-Studio](https://github.com/modelscope/ClearerVoice-Studio) ![stars](https://img.shields.io/github/stars/modelscope/ClearerVoice-Studio.svg?cacheSeconds=86400) - 语音处理工具箱（增强/分离/超分）。
- [StoRM](https://github.com/sp-uhh/storm) ![stars](https://img.shields.io/github/stars/sp-uhh/storm.svg?cacheSeconds=86400) - 基于扩散的语音增强与去混响。
- [SGMSE](https://github.com/sp-uhh/sgmse) ![stars](https://img.shields.io/github/stars/sp-uhh/sgmse.svg?cacheSeconds=86400) - Score-based 生成式语音增强与去混响。
- [Uformer](https://github.com/felixfuyihui/Uformer) ![stars](https://img.shields.io/github/stars/felixfuyihui/Uformer.svg?cacheSeconds=86400) - UNet + Conformer 用于语音增强与去混响。
- [Neural-Speech-Dereverberation](https://github.com/DiegoLeon96/Neural-Speech-Dereverberation) ![stars](https://img.shields.io/github/stars/DiegoLeon96/Neural-Speech-Dereverberation.svg?cacheSeconds=86400) - 语音去混响模型集合。

## 音频工程与开发工具

### 音频工程 > I/O 与格式处理

- [python-soundfile](https://github.com/bastibe/python-soundfile) ![stars](https://img.shields.io/github/stars/bastibe/python-soundfile.svg?cacheSeconds=86400) - 基于 libsndfile 的音频 I/O（WAV/FLAC/OGG 等）。
- [torchaudio](https://github.com/pytorch/audio) ![stars](https://img.shields.io/github/stars/pytorch/audio.svg?cacheSeconds=86400) - PyTorch 官方音频库（I/O/特征/数据集/模型）。
- [ffmpeg-python](https://github.com/kkroening/ffmpeg-python) ![stars](https://img.shields.io/github/stars/kkroening/ffmpeg-python.svg?cacheSeconds=86400) - FFmpeg Python 绑定，支持复杂滤镜图.
- [libsndfile](https://github.com/libsndfile/libsndfile) ![stars](https://img.shields.io/github/stars/libsndfile/libsndfile.svg?cacheSeconds=86400) - 跨平台 C 音频 I/O 库（WAV/AIFF/FLAC/OGG 等）。
- [Symphonia](https://github.com/pdeljanov/Symphonia) ![stars](https://img.shields.io/github/stars/pdeljanov/Symphonia.svg?cacheSeconds=86400) - 纯 Rust 音频解封装/解码库.

### 音频工程 > 重采样与信号处理

- [resampy](https://github.com/bmcfee/resampy) ![stars](https://img.shields.io/github/stars/bmcfee/resampy.svg?cacheSeconds=86400) - 高质量音频重采样（sinc 插值）。
- [libsamplerate](https://github.com/libsndfile/libsamplerate) ![stars](https://img.shields.io/github/stars/libsndfile/libsamplerate.svg?cacheSeconds=86400) - 高质量采样率转换（SRC）。
- [python-soxr](https://github.com/dofuuz/python-soxr) ![stars](https://img.shields.io/github/stars/dofuuz/python-soxr.svg?cacheSeconds=86400) - libsoxr Python 封装（高质量/流式重采样）。

### 音频工程 > 歌声合成与制作（SVS/Vocal Synth）

- [DiffSinger](https://github.com/openvpi/DiffSinger) ![stars](https://img.shields.io/github/stars/openvpi/DiffSinger.svg?cacheSeconds=86400) - 高保真可控 SVS 系统，浅层扩散机制（OpenVPI 社区维护）。
- [NNSVS](https://github.com/nnsvs/nnsvs) ![stars](https://img.shields.io/github/stars/nnsvs/nnsvs.svg?cacheSeconds=86400) - 研究向歌声合成工具箱，含完整 recipes，可自建 voicebank.
- [OpenUtau](https://github.com/stakira/OpenUtau) ![stars](https://img.shields.io/github/stars/stakira/OpenUtau.svg?cacheSeconds=86400) - 开源 UTAU 编辑器/歌声合成平台（跨平台 GUI），支持 DiffSinger 集成.
- [Sinsy](https://github.com/r9y9/sinsy) ![stars](https://img.shields.io/github/stars/r9y9/sinsy.svg?cacheSeconds=86400) - 经典 HMM/DNN 歌声合成系统（Sinsy 系）。
- [TuneLab](https://github.com/LiuYunPlayer/TuneLab) ![stars](https://img.shields.io/github/stars/LiuYunPlayer/TuneLab.svg?cacheSeconds=86400) - 歌声合成/调音编辑器（工程软件工具）。
- [utaformatix3](https://github.com/sdercolin/utaformatix3) ![stars](https://img.shields.io/github/stars/sdercolin/utaformatix3.svg?cacheSeconds=86400) - 多歌声合成软件工程文件格式互转。

### 音频工程 > 可视化与数据分析

- [librosa](https://github.com/bmcfee/librosa) ![stars](https://img.shields.io/github/stars/bmcfee/librosa.svg?cacheSeconds=86400) - 音频/音乐分析库（特征提取/可视化/工具集）。
- [Praat](https://github.com/praat/praat) ![stars](https://img.shields.io/github/stars/praat/praat.svg?cacheSeconds=86400) - 语音学“做语音分析的工具箱”，支持语音分析/标注/可视化。
- [Parselmouth](https://github.com/YannickJadoul/Parselmouth) ![stars](https://img.shields.io/github/stars/YannickJadoul/Parselmouth.svg?cacheSeconds=86400) - Praat 的 Python 接口：以 Pythonic 方式调用 Praat 语音分析算法。
- [Sonic Visualiser](https://github.com/sonic-visualiser/sonic-visualiser) ![stars](https://img.shields.io/github/stars/sonic-visualiser/sonic-visualiser.svg?cacheSeconds=86400) - 音频（含语音）可视化/分析/标注桌面工具。

### 音频工程 > 数据增强

- [audiomentations](https://github.com/iver56/audiomentations) ![stars](https://img.shields.io/github/stars/iver56/audiomentations.svg?cacheSeconds=86400) - Python 音频数据增强库（CPU；类 albumentations API）。
- [torch-audiomentations](https://github.com/asteroid-team/torch-audiomentations) ![stars](https://img.shields.io/github/stars/asteroid-team/torch-audiomentations.svg?cacheSeconds=86400) - PyTorch 音频数据增强（GPU 支持；nn.Module 形式）。

### 音频工程 > 降噪插件

- [noise-suppression-for-voice](https://github.com/werman/noise-suppression-for-voice) ![stars](https://img.shields.io/github/stars/werman/noise-suppression-for-voice.svg?cacheSeconds=86400) - 基于 RNNoise 的实时降噪插件（VST2/VST3/LV2/LADSPA/AU/AUv3，GPL-3.0）。
- [IPlugRNNoise](https://github.com/olilarkin/IPlugRNNoise) ![stars](https://img.shields.io/github/stars/olilarkin/IPlugRNNoise.svg?cacheSeconds=86400) - iPlug2 框架 RNNoise 降噪插件.
- [ReNameNoise](https://github.com/mumble-voip/ReNameNoise) ![stars](https://img.shields.io/github/stars/mumble-voip/ReNameNoise.svg?cacheSeconds=86400) - RNNoise fork，符号不冲突，CMake 支持（BSD-3-Clause，Mumble 维护）。

### 音频工程 > 实时音频处理

- [webrtc-audio-processing](https://github.com/alfatraining/webrtc-audio-processing) ![stars](https://img.shields.io/github/stars/alfatraining/webrtc-audio-processing.svg?cacheSeconds=86400) - WebRTC 音频处理（AEC/NS/AGC 3A）独立库.
- [Opus codec](https://github.com/xiph/opus) ![stars](https://img.shields.io/github/stars/xiph/opus.svg?cacheSeconds=86400) - 低延迟音频编解码器，用于 VoIP/WebRTC 实时传输.

## 数据集与评测基准

### 数据集与评测 > 语音数据集

- [Emilia Dataset](https://huggingface.co/datasets/amphion/Emilia-Dataset) - 大规模多语种语音生成数据集（6种语言，101k+小时），含 Emilia-Pipe 预处理工具.
- [LibriSpeech](https://www.openslr.org/12) - 英语 ASR 数据集（语音-文本对齐），常用于训练与评测.
- [Libri-Light](https://www.openslr.org/60) - 大规模未标注英语语音数据集，常用于自监督预训练.
- [Common Voice](https://github.com/common-voice/common-voice) ![stars](https://img.shields.io/github/stars/common-voice/common-voice.svg?cacheSeconds=86400) - 社区驱动的多语种语音数据集。
- [VoxPopuli](https://github.com/facebookresearch/voxpopuli) ![stars](https://img.shields.io/github/stars/facebookresearch/voxpopuli.svg?cacheSeconds=86400) - 多语种语音语料（欧盟议会录音），常用于 ASR/语音翻译研究.
- [GigaSpeech](https://github.com/SpeechColab/GigaSpeech) ![stars](https://img.shields.io/github/stars/SpeechColab/GigaSpeech.svg?cacheSeconds=86400) - 大规模英语语音语料，用于 ASR/SLU 研究.
- [AISHELL-1](https://www.openslr.org/33) - 普通话语音识别数据集.
- [Multilingual LibriSpeech (MLS)](https://www.openslr.org/94) - 大规模多语种语音数据集（ASR）。
- [FLEURS](https://huggingface.co/datasets/google/fleurs) - 多语种语音数据集（覆盖多语言），常用于 ASR 评测.

### 数据集与评测 > 分离/增强数据集

- [DNS Challenge](https://github.com/microsoft/DNS-Challenge) - 深度噪声抑制挑战赛数据集，用于语音增强评测.
- [VoiceBank + DEMAND (VBD)](https://datashare.ed.ac.uk/handle/10283/2791) - 经典成对干净/带噪数据集，常用于语音增强.
- [MUSDB18](https://sigsep.github.io/datasets/musdb.html) - 音乐源分离评测数据集（人声/伴奏等）。

### 数据集与评测 > 评测基准与指标

- [VoiceBench](https://github.com/MatthewCYM/VoiceBench) ![stars](https://img.shields.io/github/stars/MatthewCYM/VoiceBench.svg?cacheSeconds=86400) - LLM语音助手综合评测基准.
- [SUPERB](https://superbbenchmark.org/) - 自监督语音表征评测基准套件，覆盖多任务.
- [HEAR Benchmark](https://hearbenchmark.com/) - 音频表征评测基准套件，覆盖多种下游任务.

## 语音大模型与实时系统

### 语音大模型 > 端到端语音模型

- [Qwen2.5-Omni](https://github.com/QwenLM/Qwen2.5-Omni) ![stars](https://img.shields.io/github/stars/QwenLM/Qwen2.5-Omni.svg?cacheSeconds=86400) - 端到端多模态模型，支持实时流式语音生成.
- [Baichuan-Audio](https://github.com/baichuan-inc/Baichuan-Audio) ![stars](https://img.shields.io/github/stars/baichuan-inc/Baichuan-Audio.svg?cacheSeconds=86400) - 端到端语音交互框架（理解+生成一体）。
- [LLaMA-Omni](https://github.com/ictnlp/LLaMA-Omni) ![stars](https://img.shields.io/github/stars/ictnlp/LLaMA-Omni.svg?cacheSeconds=86400) - 基于 Llama-3.1 的低延迟端到端语音交互模型。
- [Step-Audio-R1](https://github.com/stepfun-ai/Step-Audio-R1) ![stars](https://img.shields.io/github/stars/stepfun-ai/Step-Audio-R1.svg?cacheSeconds=86400) - 实时语音交互模型（开源推理代码与权重）。
- [VocalNet](https://github.com/SJTU-OmniAgent/VocalNet) ![stars](https://img.shields.io/github/stars/SJTU-OmniAgent/VocalNet.svg?cacheSeconds=86400) - 语音大模型：多 token 预测提升实时生成速度与质量.
- [LLaSO](https://github.com/EIT-NLP/LLaSO) ![stars](https://img.shields.io/github/stars/EIT-NLP/LLaSO.svg?cacheSeconds=86400) - 可复现实验栈：开放数据+基准+参考模型（Speech-Language）。
- [Freeze-Omni](https://github.com/VITA-MLLM/Freeze-Omni) ![stars](https://img.shields.io/github/stars/VITA-MLLM/Freeze-Omni.svg?cacheSeconds=86400) - 冻结 LLM 的低延迟语音对话。
- [MooER](https://github.com/MooreThreads/MooER) ![stars](https://img.shields.io/github/stars/MooreThreads/MooER.svg?cacheSeconds=86400) - 基于 LLM 的 ASR/AST，小数据伪标签训练.
- [ESPnet-SpeechLM](https://github.com/espnet/espnet/tree/master/egs2/speechlm) - ESPnet 官方 SpeechLM 工具包。
- [TADA](https://github.com/humeai/tada) ![stars](https://img.shields.io/github/stars/humeai/tada.svg?cacheSeconds=86400) - Hume AI TTS，Text-Acoustic Dual Alignment（实时系数 0.09）。
- [speech-to-speech](https://github.com/huggingface/speech-to-speech) ![stars](https://img.shields.io/github/stars/huggingface/speech-to-speech.svg?cacheSeconds=86400) - Hugging Face 端到端语音对话管线（STT+LLM+TTS）。
- [Voice Agent With NVIDIA Open Models](https://github.com/pipecat-ai/nemotron-january-2026) - 使用 Nemotron Speech ASR + Nemotron 3 Nano LLM + Magpie TTS 的语音 Agent 样例工程（参考实现）。

### 语音大模型 > 全双工对话系统

- [PersonaPlex](https://github.com/NVIDIA/personaplex) ![stars](https://img.shields.io/github/stars/NVIDIA/personaplex.svg?cacheSeconds=86400) - 全双工 speech-to-speech 对话模型（可控 voice + role）。
- [J-Moshi](https://github.com/nu-dialogue/j-moshi) ![stars](https://img.shields.io/github/stars/nu-dialogue/j-moshi.svg?cacheSeconds=86400) - 日语全双工语音对话系统（CC-BY-NC-4.0，非商用）。
- [FLM-Audio](https://github.com/cofe-ai/flm-audio) ![stars](https://img.shields.io/github/stars/cofe-ai/flm-audio.svg?cacheSeconds=86400) - 原生全双工音频-语言模型（同时听/说/内心独白）。
- [FireRedChat](https://github.com/FireRedTeam/FireRedChat) ![stars](https://img.shields.io/github/stars/FireRedTeam/FireRedChat.svg?cacheSeconds=86400) - 全双工语音交互自托管方案（含 ASR/TTS/回合管理）。

### 语音大模型 > 实时处理框架

- [Pipecat](https://github.com/pipecat-ai/pipecat) ![stars](https://img.shields.io/github/stars/pipecat-ai/pipecat.svg?cacheSeconds=86400) - 实时语音/多模态 Agent 框架（编排 STT/LLM/TTS）。
- [LiveKit Agents](https://github.com/livekit/agents) ![stars](https://img.shields.io/github/stars/livekit/agents.svg?cacheSeconds=86400) - 实时语音 AI Agent 框架（WebRTC + 多供应商集成）。
- [Vocode Core](https://github.com/vocodedev/vocode-core) ![stars](https://img.shields.io/github/stars/vocodedev/vocode-core.svg?cacheSeconds=86400) - 语音 Agent 编排库（电话/会议等实时语音应用）。

### 语音大模型 > 回合管理与生态组件

- [Smart Turn (Pipecat)](https://github.com/pipecat-ai/smart-turn) ![stars](https://img.shields.io/github/stars/pipecat-ai/smart-turn.svg?cacheSeconds=86400) - 端到端语义 VAD，用于回合结束检测（低误打断）。
- [Mimi (Kyutai codec)](https://huggingface.co/kyutai/mimi) - 流式神经音频编解码器，Moshi/PersonaPlex 使用（语音分词器）。
- [Full-Duplex-Bench](https://github.com/DanielLin94144/Full-Duplex-Bench) ![stars](https://img.shields.io/github/stars/DanielLin94144/Full-Duplex-Bench.svg?cacheSeconds=86400) - 全双工对话回合管理/打断/重叠评测基准.

### 语音大模型 > 资源聚合

- [Awesome-Speech-Language-Model](https://github.com/ddlBoJack/Awesome-Speech-Language-Model) ![stars](https://img.shields.io/github/stars/ddlBoJack/Awesome-Speech-Language-Model.svg?cacheSeconds=86400) - SpeechLM 与端到端语音对话系统资源聚合.
- [awesome-llm-speech-to-speech](https://github.com/tleyden/awesome-llm-speech-to-speech) ![stars](https://img.shields.io/github/stars/tleyden/awesome-llm-speech-to-speech.svg?cacheSeconds=86400) - LLM 语音到语音模型与框架聚合.
- [Awesome-FullDuplexSDM](https://github.com/Ruiqi-Yan/Awesome-Full-Duplex-SDM) ![stars](https://img.shields.io/github/stars/Ruiqi-Yan/Awesome-Full-Duplex-SDM.svg?cacheSeconds=86400) - 全双工语音对话模型聚合。

## 论文 Papers

### Papers > 基础模型

- **MMS: Scaling Speech Technology to 1,000+ Languages** (2023), Pratap et al. [pdf](https://arxiv.org/pdf/2305.13516) [code](https://github.com/facebookresearch/fairseq) - 超大规模多语种语音模型与 recipes（ASR/TTS/LID）。
- **SeamlessM4T** (2023), Meta AI [pdf](https://arxiv.org/abs/2308.11596) [code](https://github.com/facebookresearch/seamless_communication) - 语音-文本多任务翻译/转写基础模型.
- **Whisper** (2022), Radford et al. [pdf](https://arxiv.org/abs/2212.04356) [code](https://github.com/openai/whisper) - 大规模弱监督多语种ASR/翻译基础模型.
- **XLS-R** (2021), Babu et al. [pdf](https://arxiv.org/abs/2111.09296) [code](https://github.com/facebookresearch/fairseq) - 大规模跨语种语音表征学习（wav2vec 2.0 系列）。
- **WavLM** (2021), Chen et al. [pdf](https://arxiv.org/abs/2110.13900) [code](https://github.com/microsoft/unispeech) - 鲁棒语音预训练，强调噪声/说话人鲁棒性.
- **HuBERT** (2021), Hsu et al. [pdf](https://arxiv.org/abs/2106.07447) [code](https://github.com/facebookresearch/fairseq) - 自监督语音预训练（离散伪标签）经典方法.
- **wav2vec 2.0** (2020), Baevski et al. [pdf](https://arxiv.org/abs/2006.11477) [code](https://github.com/facebookresearch/fairseq) - 自监督语音预训练基线，用于表征学习.

### Papers > TTS

- **Fast F5-TTS / EPSS** (2025), [pdf](https://arxiv.org/pdf/2505.19931) - 通过步数剪枝实现 Flow-Matching TTS 的无训练加速.
- **DiTTo-TTS** (2025), ICLR, [pdf](https://proceedings.iclr.cc/paper_files/paper/2025/file/80e77d9ed2f74dcaf1a42cb1a2593559-Paper-Conference.pdf) - 基于 DiT 的 TTS，可扩展到大数据无需音素/时长依赖.
- **CosyVoice 2** (2024), Du et al. [pdf](https://arxiv.org/abs/2412.10117) [code](https://github.com/FunAudioLLM/CosyVoice) - 可扩展流式/非流式 LLM-TTS（低延迟）。
- **VALL-E 2** (2024), Chen et al. [pdf](https://arxiv.org/abs/2406.05370) - Neural codec LM 零样本 TTS 达到“human parity”（研究里程碑）。
- **ARDiT-TTS** (2024), Liu et al. [pdf](https://arxiv.org/html/2406.05551v1) - 自回归扩散 Transformer 的低延迟 TTS.
- **Parler-TTS** (2024), Lyth et al. [pdf](https://arxiv.org/abs/2402.01912) [code](https://github.com/huggingface/parler-tts) - 自然语言提示控制的高保真 TTS.
- **Latent Space of Diffusion TTS** (2024), Varshavsky-Hassid et al. [pdf](https://arxiv.org/html/2402.12423v2) - 探索扩散 TTS 语义潜空间用于免训练音频编辑.
- **Voicebox** (2023), Meta, [pdf](https://export.arxiv.org/pdf/2306.15687v1.pdf) - 基于 Flow-Matching 的文本引导多语言通用语音生成.
- **Audio Diffusion Survey** (2023), Liu et al. [pdf](https://arxiv.org/abs/2303.13336) - 音频扩散模型综述（TTS/增强）。
- **StyleTTS 2** (2023), Li et al. [pdf](https://arxiv.org/abs/2306.07691) [code](https://github.com/yl4579/StyleTTS2) - 风格扩散+对抗训练的高质量TTS.
- **VALL-E** (2023), Wang et al. [pdf](https://arxiv.org/abs/2301.02111) - 语言模型式零样本TTS（离散codec token）。
- **VITS** (2021), Kim et al. [pdf](https://arxiv.org/abs/2106.06103) [code](https://github.com/jaywalnut310/vits) - 端到端TTS（VAE+flow+GAN）强基线.
- **FastSpeech 2** (2020), Ren et al. [pdf](https://arxiv.org/abs/2006.04558) - 非自回归TTS（速度快，可控因素更多）。
- **Tacotron 2** (2017), Shen et al. [pdf](https://arxiv.org/abs/1712.05884) - 经典神经TTS（文本到梅尔+神经声码器）。

### Papers > ASR

- **Uni-ASR** (2026), Xia et al. [pdf](https://arxiv.org/abs/2603.11123) - 统一 LLM-ASR 框架：同时支持非流式与流式识别.
- **Codec-ASR** (2024), Dhawan et al. [pdf](https://arxiv.org/html/2407.03495v1) - 使用离散 codec 表征训练 ASR 的系统性研究与 pipeline.
- **Streaming Decoder-Only ASR** (2024), Chen et al. [pdf](https://arxiv.org/abs/2406.18862) - 离散语音单元 + decoder-only 的流式识别.
- **Speech ReaLLM** (2024), Seide et al. [pdf](https://arxiv.org/abs/2406.09569) - 面向实时连续输入的 decoder-only 流式 ASR 范式.
- **Simul-Whisper** (2024), Gaido et al. [pdf](https://arxiv.org/abs/2406.10052) - 无需微调的 Whisper 流式 ASR.
- **WeNet / U2** (2021), Zhang et al. [pdf](https://arxiv.org/abs/2102.01547) [code](https://github.com/wenet-e2e/wenet) - 统一流式/非流式两阶段端到端 ASR 框架.
- **Transformer Transducer** (2020), Zhang et al. [pdf](https://arxiv.org/abs/2002.02562) - 可流式 Transformer-RNNT.
- **Conformer** (2020), Gulati et al. [pdf](https://arxiv.org/abs/2005.08100) - 卷积增强的 Transformer ASR 架构.
- **Emformer** (2020), Shi et al. [pdf](https://arxiv.org/abs/2010.10759) - 低延迟流式 ASR 的高效记忆 Transformer.

### Papers > Voice Cloning

- **ClonEval** (2025), Cai et al. [pdf](https://arxiv.org/abs/2504.20581) [code](https://github.com/amu-cai/cloneval) - voice cloning 系统评测基准.
- **OpenVoice** (2023), MyShell AI [pdf](https://arxiv.org/abs/2312.01479) [code](https://github.com/myshell-ai/OpenVoice) - 灵活风格控制的即时语音克隆.

### Papers > 音频增强

- **Vox-Profile** (2025), [pdf](https://arxiv.org/html/2505.14648v1) - 语音基础模型说话人特性评估基准.
- **Towards Real-Time Generative Speech Restoration with Flow-Matching** (2026), Microsoft Research [pdf](https://www.microsoft.com/en-us/research/publication/towards-real-time-generative-speech-restoration-with-flow-matching/) - ICASSP 2026，基于 Flow-Matching 的实时语音修复/增强/去混响论文.。
- **AudioLDM 2** (2024), Liu et al. [pdf](https://arxiv.org/abs/2308.05734) [code](https://github.com/haoheliu/AudioLDM2) - 文本到音频生成增强版（引入自监督预训练）。
- **DNSMOS Pro** (2024), Cumlin et al. [pdf](https://www.isca-archive.org/interspeech_2024/cumlin24_interspeech.pdf) - 改进版 DNSMOS 语音增强评估指标.
- **MusicGen** (2023), Copet et al. [pdf](https://arxiv.org/abs/2306.05284) [code](https://github.com/facebookresearch/audiocraft) - 可控文本到音乐生成.
- **MusicLM** (2023), Agostinelli et al. [pdf](https://arxiv.org/abs/2301.11325) - 高保真文本到音乐生成（模型/权重未完全开源）。
- **AudioLDM** (2023), Liu et al. [pdf](https://arxiv.org/abs/2301.12503) [code](https://github.com/haoheliu/AudioLDM) - Latent Diffusion 文本到音频生成.
- **AudioGen** (2022), Kreuk et al. [pdf](https://arxiv.org/abs/2209.15352) [code](https://github.com/facebookresearch/audiocraft) - 文本引导音频生成（text-to-sound）。
- **DNSMOS** (2020), Reddy et al. [pdf](https://arxiv.org/pdf/2010.15258) - 无参考语音质量评价指标（噪声抑制常用）。

### Papers > 语音大模型

- **DuplexCascade** (2026), [pdf](https://arxiv.org/html/2603.09180v1) - VAD-free cascaded 全双工 S2S 对话（micro-turn 优化）。
- **Privacy-Preserving End-to-End Full-Duplex Speech Dialogue Models** (2026), [pdf](https://arxiv.org/html/2603.08179v1) - 全双工对话隐私泄露分析与流式匿名化.
- **VoxEval** (2025), Huang et al. [pdf](https://arxiv.org/abs/2501.04962) [code](https://github.com/dreamtheater123/VoxEval) - Spoken LM 评测基准（SpeechQA）。
- **SLAM-LLM** (2025), Chen et al. [pdf](https://arxiv.org/abs/2601.09385) [code](https://github.com/X-LANCE/SLAM-LLM) - 语音/语言/音频/音乐多模态 LLM 训练框架。
- **SALMONN-omni** (2025), Bytedance [pdf](https://arxiv.org/html/2505.17060v1) - 单模型全双工 Speech LLM（无需 codec 注入）。
- **SpiRit-LM** (2025), TACL, Hassid et al. [pdf](https://arxiv.org/abs/2402.05755) [code](https://github.com/facebookresearch/spiritlm) - 语音与文本 token 交错训练的 SpeechLM。
- **VoiceBench** (2024), Wang et al. [pdf](https://arxiv.org/abs/2410.17196) [code](https://github.com/MatthewCYM/VoiceBench) - LLM 语音助手评测基准。
- **Moshi** (2024), Kyutai [pdf](https://arxiv.org/abs/2410.00037) [code](https://github.com/kyutai-labs/moshi) - 实时全双工语音对话 Speech-Text 基础模型。
- **Language Model Can Listen While Speaking** (2024), Chen et al. [pdf](https://arxiv.org/abs/2408.02622) - 让 SpeechLM 支持“边说边听”的全双工建模。
- **MSLM-S2ST** (2024), [pdf](https://arxiv.org/abs/2403.12408) - 多任务 decoder-only SpeechLM：无文本 S2ST 与说话人风格保持。
- **LTU** (2024), Gong et al. [pdf](https://arxiv.org/abs/2305.10790) [code](https://github.com/YuanGongND/ltu) - 具备感知与推理能力的音频/语音 LLM（ICLR 2024）。
- **SALMONN** (2024), Bytedance [pdf](https://arxiv.org/abs/2310.13289) [code](https://github.com/bytedance/SALMONN) - 通用听觉能力的多模态LLM。
- **AudioPaLM** (2023), Rubenstein et al. [pdf](https://arxiv.org/abs/2306.12925) - 融合 PaLM-2 与 AudioLM 的“能听能说”大模型.
- **SpeechGPT** (2023), Zhang et al. [pdf](https://arxiv.org/abs/2305.11000) [code](https://github.com/0nutation/SpeechGPT) - 跨模态对话能力的 SpeechLM.
- **AudioLM** (2022), Borsos et al. [pdf](https://arxiv.org/abs/2209.03143) - 音频 token + LM 生成式音频框架（无文本语音生成）。
- **SpeechT5** (2022), Ao et al. [pdf](https://arxiv.org/abs/2110.07205) [code](https://github.com/microsoft/SpeechT5) - 统一语音/文本多任务预训练.

### Papers > 综述

- **Recent Advances in Speech Language Models: A Survey (ACL 2025)** (2025), ACL, [pdf](https://aclanthology.org/2025.acl-long.682.pdf) - ACL 2025 SpeechLM 综述：架构、训练、评测与挑战。
- **On The Landscape of Spoken Language Models** (2025), [pdf](https://arxiv.org/pdf/2504.08528) - Spoken LM 综述：术语体系与评测视角梳理。
- **Towards Controllable Speech Synthesis in the Era of Large Language Models: A Survey** (2024), Li et al. [pdf](https://arxiv.org/abs/2412.06602) - 可控TTS综述（LLM/扩散/自然语言控制）。
- **Recent Advances in Speech Language Models: A Survey** (2024), ACL, Wang et al. [pdf](https://arxiv.org/abs/2410.03751) - SpeechLM架构、训练、评测与挑战综述。
- **A Survey on Speech Large Language Models for Understanding** (2024), Xu et al. [pdf](https://arxiv.org/abs/2410.18908) - Speech LLM（语音理解）综述与体系化分类。

---

## 贡献指南

欢迎贡献！请阅读 [贡献指南](CONTRIBUTING.md) 了解如何提交条目。
