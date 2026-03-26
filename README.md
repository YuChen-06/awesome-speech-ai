# Awesome Speech AI [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

- [简体中文](./README.zh.md) | **English**

> A curated list of awesome Speech AI resources: TTS · ASR · Voice Cloning · Audio Enhancement · Datasets · Speech LLM · Papers

## Contents

- [Foundation Models & Frameworks](#foundation-models--frameworks)
- [Text-to-Speech (TTS)](#text-to-speech-tts)
- [Automatic Speech Recognition (ASR)](#automatic-speech-recognition-asr)
- [Voice Cloning](#voice-cloning)
- [Audio Enhancement](#audio-enhancement)
- [Audio Engineering Tools](#audio-engineering-tools)
- [Datasets & Benchmarks](#datasets--benchmarks)
- [Speech LLM & Real-time Systems](#speech-llm--real-time-systems)
- [Papers](#papers)

---

## Foundation Models & Frameworks

### End-to-End Toolkits

- [ESPnet](https://github.com/espnet/espnet) ![stars](https://img.shields.io/github/stars/espnet/espnet.svg?cacheSeconds=86400) - End-to-end speech processing toolkit (ASR/TTS/translation/enhancement).
- [NVIDIA NeMo](https://github.com/NVIDIA-NeMo/NeMo) ![stars](https://img.shields.io/github/stars/NVIDIA-NeMo/NeMo.svg?cacheSeconds=86400) - NVIDIA speech AI framework (training + deployment for ASR/TTS/speaker).
- [SpeechBrain](https://github.com/speechbrain/speechbrain) ![stars](https://img.shields.io/github/stars/speechbrain/speechbrain.svg?cacheSeconds=86400) - PyTorch-based speech toolkit (ASR/speaker/enhancement/separation and more).
- [PaddleSpeech](https://github.com/PaddlePaddle/PaddleSpeech) ![stars](https://img.shields.io/github/stars/PaddlePaddle/PaddleSpeech.svg?cacheSeconds=86400) - Speech toolkit covering ASR/TTS/speaker/KWS with recipes and deployment tools.

### Self-supervised Pretraining

- [S3PRL](https://github.com/s3prl/s3prl) ![stars](https://img.shields.io/github/stars/s3prl/s3prl.svg?cacheSeconds=86400) - Self-supervised speech pretraining & representation learning toolkit.
- [fairseq](https://github.com/facebookresearch/fairseq) ![stars](https://img.shields.io/github/stars/facebookresearch/fairseq.svg?cacheSeconds=86400) - Sequence modeling toolkit that includes common speech SSL implementations (e.g., wav2vec 2.0 / HuBERT).
- [UniSpeech](https://github.com/microsoft/UniSpeech) ![stars](https://img.shields.io/github/stars/microsoft/UniSpeech.svg?cacheSeconds=86400) - Microsoft speech SSL research codebase (UniSpeech / UniSpeech-SAT).
- [WavLM (in UniLM)](https://github.com/microsoft/unilm/tree/master/wavlm) ![stars](https://img.shields.io/github/stars/microsoft/unilm.svg?cacheSeconds=86400) - WavLM code and resources (part of the UniLM repository).

## Text-to-Speech (TTS)

### TTS > Foundation Models

- [Chatterbox](https://github.com/resemble-ai/chatterbox) ![stars](https://img.shields.io/github/stars/resemble-ai/chatterbox.svg?cacheSeconds=86400) - Open-source TTS model released by Resemble AI.
- [Coqui TTS](https://github.com/coqui-ai/TTS) ![stars](https://img.shields.io/github/stars/coqui-ai/TTS.svg?cacheSeconds=86400) - Production-ready open-source TTS toolkit with XTTS voice cloning capabilities.
- [Bark](https://github.com/suno-ai/bark) ![stars](https://img.shields.io/github/stars/suno-ai/bark.svg?cacheSeconds=86400) - Text-prompted audio/speech generation model.
- [StyleTTS 2](https://github.com/yl4579/StyleTTS2) ![stars](https://img.shields.io/github/stars/yl4579/StyleTTS2.svg?cacheSeconds=86400) - TTS implementation based on style diffusion + adversarial training.
- [Tortoise-TTS](https://github.com/neonbjb/tortoise-tts) ![stars](https://img.shields.io/github/stars/neonbjb/tortoise-tts.svg?cacheSeconds=86400) - Multi-speaker TTS reference implementation (slower inference).
- [Amphion](https://github.com/open-mmlab/Amphion) ![stars](https://img.shields.io/github/stars/open-mmlab/Amphion.svg?cacheSeconds=86400) - Audio/Music/Speech Generation toolkit with multiple TTS recipes and models.
- [CosyVoice](https://github.com/FunAudioLLM/CosyVoice) ![stars](https://img.shields.io/github/stars/FunAudioLLM/CosyVoice.svg?cacheSeconds=86400) - LLM-based multilingual/streaming TTS full-stack with training/inference/deployment.
- [Parler-TTS](https://github.com/huggingface/parler-tts) ![stars](https://img.shields.io/github/stars/huggingface/parler-tts.svg?cacheSeconds=86400) - High-quality TTS with natural language prompting.
- [MeloTTS](https://github.com/myshell-ai/MeloTTS) ![stars](https://img.shields.io/github/stars/myshell-ai/MeloTTS.svg?cacheSeconds=86400) - Multilingual TTS library.
- [Fish Speech](https://github.com/fishaudio/fish-speech) ![stars](https://img.shields.io/github/stars/fishaudio/fish-speech.svg?cacheSeconds=86400) - Multilingual expressive TTS.
- [Orpheus-TTS](https://github.com/canopyai/orpheus-tts) ![stars](https://img.shields.io/github/stars/canopyai/orpheus-tts.svg?cacheSeconds=86400) - Llama-3b based TTS with emotion control and streaming inference.

### TTS > Zero-Shot / Few-Shot

- [Qwen3-TTS](https://github.com/QwenLM/Qwen3-TTS) ![stars](https://img.shields.io/github/stars/QwenLM/Qwen3-TTS.svg?cacheSeconds=86400) - Open-source TTS model with voice cloning and streaming/inference tooling.
- [VALL-E X](https://github.com/Plachtaa/VALL-E-X) ![stars](https://img.shields.io/github/stars/Plachtaa/VALL-E-X.svg?cacheSeconds=86400) - Zero-shot TTS reproduction (unofficial) supporting cross-lingual voice cloning.
- [Zonos](https://github.com/Zyphra/Zonos) ![stars](https://img.shields.io/github/stars/Zyphra/Zonos.svg?cacheSeconds=86400) - Open multilingual TTS model with strong expressiveness.
- [Index-TTS](https://github.com/index-tts/index-tts) ![stars](https://img.shields.io/github/stars/index-tts/index-tts.svg?cacheSeconds=86400) - Controllable zero-shot TTS.
- [VoxCPM](https://github.com/OpenBMB/VoxCPM) ![stars](https://img.shields.io/github/stars/OpenBMB/VoxCPM.svg?cacheSeconds=86400) - Tokenizer-free TTS with continuous space modeling, 5-second voice cloning.
- [GLM-TTS](https://github.com/zai-org/GLM-TTS) ![stars](https://img.shields.io/github/stars/zai-org/GLM-TTS.svg?cacheSeconds=86400) - Controllable/emotional zero-shot TTS with multi-reward RL, supports streaming.
- [Sopro](https://github.com/samuel-vitorino/sopro) ![stars](https://img.shields.io/github/stars/samuel-vitorino/sopro.svg?cacheSeconds=86400) - Lightweight real-time TTS with zero-shot voice cloning.

### TTS > Diffusion / Flow Matching Methods

- [F5-TTS](https://github.com/SWivid/F5-TTS) ![stars](https://img.shields.io/github/stars/SWivid/F5-TTS.svg?cacheSeconds=86400) - Flow matching-based TTS implementation.
- [Matcha-TTS](https://github.com/shivammehta25/Matcha-TTS) ![stars](https://img.shields.io/github/stars/shivammehta25/Matcha-TTS.svg?cacheSeconds=86400) - Fast non-autoregressive TTS with conditional flow matching (official ICASSP 2024 code).
- [Grad-TTS](https://github.com/WelkinYang/GradTTS) ![stars](https://img.shields.io/github/stars/WelkinYang/GradTTS.svg?cacheSeconds=86400) - PyTorch implementation of Grad-TTS (diffusion probabilistic model for TTS).

### TTS > Low-Latency / Real-time

- [Kyutai pocket-tts](https://github.com/kyutai-labs/pocket-tts) ![stars](https://img.shields.io/github/stars/kyutai-labs/pocket-tts.svg?cacheSeconds=86400) - CPU-friendly small TTS for on-device/low-resource real-time playback.
- [Kyutai delayed-streams-modeling](https://github.com/kyutai-labs/delayed-streams-modeling) ![stars](https://img.shields.io/github/stars/kyutai-labs/delayed-streams-modeling.svg?cacheSeconds=86400) - Delayed Stream Modeling (DSM): unified framework for streaming STT/TTS.
- [Kyutai unmute](https://github.com/kyutai-labs/unmute) ![stars](https://img.shields.io/github/stars/kyutai-labs/unmute.svg?cacheSeconds=86400) - Voice interface layer adding listen/speak capabilities to text LLMs.

### TTS > Server / Deployment

- [parler-tts-server](https://github.com/fedirz/parler-tts-server) ![stars](https://img.shields.io/github/stars/fedirz/parler-tts-server.svg?cacheSeconds=86400) - OpenAI-compatible TTS API server for Parler-TTS (Docker deployable).
- [parler-tts-fastapi](https://github.com/parisneo/parler-tts-fastapi) ![stars](https://img.shields.io/github/stars/parisneo/parler-tts-fastapi.svg?cacheSeconds=86400) - FastAPI service for Parler-TTS with streaming response.
- [Qwen3-TTS OpenAI FastAPI](https://github.com/groxaxo/Qwen3-TTS-Openai-Fastapi) ![stars](https://img.shields.io/github/stars/groxaxo/Qwen3-TTS-Openai-Fastapi.svg?cacheSeconds=86400) - OpenAI-compatible API server for Qwen3-TTS (FastAPI-based).
- [faster-qwen3-tts](https://github.com/andimarafioti/faster-qwen3-tts) ![stars](https://img.shields.io/github/stars/andimarafioti/faster-qwen3-tts.svg?cacheSeconds=86400) - Real-time Qwen3-TTS inference acceleration using CUDA Graph capture.
- [Wyoming Piper](https://github.com/rhasspy/wyoming-piper) ![stars](https://img.shields.io/github/stars/rhasspy/wyoming-piper.svg?cacheSeconds=86400) - Wyoming protocol server for Piper (Home Assistant integration).
- [TTS-WebUI](https://github.com/rsxdalv/TTS-WebUI) ![stars](https://img.shields.io/github/stars/rsxdalv/TTS-WebUI.svg?cacheSeconds=86400) - Unified WebUI aggregating multiple TTS/VC/Audio models (extensible).
- [Mimic 3](https://github.com/MycroftAI/mimic3) ![stars](https://img.shields.io/github/stars/MycroftAI/mimic3.svg?cacheSeconds=86400) - Local neural TTS engine for voice assistant ecosystem (edge/offline friendly).
- [Piper (maintained)](https://github.com/OHF-Voice/piper1-gpl) ![stars](https://img.shields.io/github/stars/OHF-Voice/piper1-gpl.svg?cacheSeconds=86400) - Fast local TTS engine.
- [VibeVoice](https://github.com/vibevoice-community/VibeVoice) ![stars](https://img.shields.io/github/stars/vibevoice-community/VibeVoice.svg?cacheSeconds=86400) - Long-dialogue TTS supporting 90-minute conversations with 4 speakers.
- [Parler-tts-streaming (SSE)](https://github.com/inferless/Parler-tts-streaming) ![stars](https://img.shields.io/github/stars/inferless/Parler-tts-streaming.svg?cacheSeconds=86400) - SSE streaming audio output example for Parler-TTS.
- [Home Assistant Piper Add-on](https://github.com/home-assistant/addons/tree/master/piper) ![stars](https://img.shields.io/github/stars/home-assistant/addons.svg?cacheSeconds=86400) - Official Home Assistant add-on for Piper.
- [StyleTTS-WebUI](https://github.com/JarodMica/StyleTTS-WebUI) ![stars](https://img.shields.io/github/stars/JarodMica/StyleTTS-WebUI.svg?cacheSeconds=86400) - WebUI wrapper for StyleTTS2.
- [StyleTTS2_GUI](https://github.com/effusiveperiscope/StyleTTS2_GUI) ![stars](https://img.shields.io/github/stars/effusiveperiscope/StyleTTS2_GUI.svg?cacheSeconds=86400) - Windows GUI packaging for StyleTTS2.

## Automatic Speech Recognition (ASR)

### ASR > Foundation Models

- [Whisper](https://github.com/openai/whisper) ![stars](https://img.shields.io/github/stars/openai/whisper.svg?cacheSeconds=86400) - General-purpose ASR foundation model with multilingual support and translation capabilities.
- [Kaldi](https://github.com/kaldi-asr/kaldi) ![stars](https://img.shields.io/github/stars/kaldi-asr/kaldi.svg?cacheSeconds=86400) - Classic ASR toolkit with rich research/production ecosystem.
- [WeNet](https://github.com/wenet-e2e/wenet) ![stars](https://img.shields.io/github/stars/wenet-e2e/wenet.svg?cacheSeconds=86400) - Production-oriented end-to-end ASR toolkit with streaming/offline recipes.
- [Vosk](https://github.com/alphacep/vosk-api) ![stars](https://img.shields.io/github/stars/alphacep/vosk-api.svg?cacheSeconds=86400) - Offline ASR API with multilingual support, small models, and streaming capabilities.

### ASR > Real-time / Streaming

- [Kyutai Hibiki](https://github.com/kyutai-labs/hibiki) ![stars](https://img.shields.io/github/stars/kyutai-labs/hibiki.svg?cacheSeconds=86400) - Streaming speech-to-speech translation (S2ST) system.
- [Hibiki-Zero](https://github.com/kyutai-labs/hibiki-zero) ![stars](https://img.shields.io/github/stars/kyutai-labs/hibiki-zero.svg?cacheSeconds=86400) - Real-time multilingual speech translation with voice transfer.
- [NAST-S2x](https://github.com/ictnlp/NAST-S2x) ![stars](https://img.shields.io/github/stars/ictnlp/NAST-S2x.svg?cacheSeconds=86400) - Non-autoregressive end-to-end simultaneous speech-to-any translation (S2S & S2T).
- [whisper_streaming](https://github.com/ufal/whisper_streaming) ![stars](https://img.shields.io/github/stars/ufal/whisper_streaming.svg?cacheSeconds=86400) - Whisper real-time streaming speech recognition with incremental processing.
- [sherpa](https://github.com/k2-fsa/sherpa) ![stars](https://img.shields.io/github/stars/k2-fsa/sherpa.svg?cacheSeconds=86400) - Streaming ASR inference/service framework (PyTorch-based, deployment-ready).
- [Nemotron Speech ASR (weights)](https://huggingface.co/nvidia/nemotron-speech-streaming-en-0.6b) - Ultra-low-latency streaming ASR weights.
- [StreamSpeech](https://github.com/ictnlp/StreamSpeech) ![stars](https://img.shields.io/github/stars/ictnlp/StreamSpeech.svg?cacheSeconds=86400) - All-in-One streaming model: ASR+ST+TTS for simultaneous interpretation.

### ASR > On-Device / Edge

- [whisper.cpp](https://github.com/ggml-org/whisper.cpp) ![stars](https://img.shields.io/github/stars/ggml-org/whisper.cpp.svg?cacheSeconds=86400) - C/C++ on-device Whisper inference with CPU/Metal support and real-time microphone examples.
- [sherpa-onnx](https://github.com/k2-fsa/sherpa-onnx) ![stars](https://img.shields.io/github/stars/k2-fsa/sherpa-onnx.svg?cacheSeconds=86400) - On-device/offline/streaming ASR+TTS+VAD+enhancement all-in-one (ONNX runtime, no cloud needed).
- [sherpa-ncnn](https://github.com/k2-fsa/sherpa-ncnn) ![stars](https://img.shields.io/github/stars/k2-fsa/sherpa-ncnn.svg?cacheSeconds=86400) - On-device real-time ASR + VAD + TTS (ncnn-based, mobile-friendly, no cloud needed).
- [Moonshine](https://github.com/usefulsensors/moonshine) ![stars](https://img.shields.io/github/stars/usefulsensors/moonshine.svg?cacheSeconds=86400) - ASR model and tooling optimized for edge devices.

### ASR > Multilingual

- [SeamlessM4T](https://github.com/facebookresearch/seamless_communication) ![stars](https://img.shields.io/github/stars/facebookresearch/seamless_communication.svg?cacheSeconds=86400) - Multilingual multimodal translation model supporting speech-to-text and speech-to-speech.
- [sherpa-onnx omnilingual ASR](https://huggingface.co/csukuangfj2/sherpa-onnx-omnilingual-asr-1600-languages-300M-ctc-v2-2026-02-05) - 1600+ language ASR weights for sherpa-onnx (on-device/offline inference).

For multilingual ASR foundation models, see Whisper and Vosk above.

### ASR > VAD & Voice Activity Detection

- [Silero VAD](https://github.com/snakers4/silero-vad) ![stars](https://img.shields.io/github/stars/snakers4/silero-vad.svg?cacheSeconds=86400) - Lightweight high-quality VAD (PyTorch/ONNX) for streaming audio segmentation.
- [WebRTC VAD](https://github.com/wiseman/py-webrtcvad) ![stars](https://img.shields.io/github/stars/wiseman/py-webrtcvad.svg?cacheSeconds=86400) - Classic high-performance VAD (WebRTC implementation) for edge/streaming segmentation.

### ASR > Speaker Diarization

- [pyannote-audio](https://github.com/pyannote/pyannote-audio) ![stars](https://img.shields.io/github/stars/pyannote/pyannote-audio.svg?cacheSeconds=86400) - Speaker diarization/speaker change/overlap detection toolkit with mature ecosystem.
- [diarize](https://github.com/FoxNoseTech/diarize) ![stars](https://img.shields.io/github/stars/FoxNoseTech/diarize.svg?cacheSeconds=86400) - CPU-only speaker diarization (who spoke when) with ONNX inference.

### ASR > Server / Deployment Tools

- [WhisperX](https://github.com/m-bain/whisperX) ![stars](https://img.shields.io/github/stars/m-bain/whisperX.svg?cacheSeconds=86400) - Whisper alignment enhancement with word-level timestamps and optional speaker diarization.
- [whisper-timestamped](https://github.com/linto-ai/whisper-timestamped) ![stars](https://img.shields.io/github/stars/linto-ai/whisper-timestamped.svg?cacheSeconds=86400) - Whisper word-level timestamps and confidence.
- [faster-whisper](https://github.com/SYSTRAN/faster-whisper) ![stars](https://img.shields.io/github/stars/SYSTRAN/faster-whisper.svg?cacheSeconds=86400) - Whisper accelerated inference with CTranslate2 for efficient deployment.
- [speaches](https://github.com/speaches-ai/speaches) ![stars](https://img.shields.io/github/stars/speaches-ai/speaches.svg?cacheSeconds=86400) - OpenAI API-compatible server for streaming transcription/translation (STT powered by faster-whisper).
- [whisper-websocket-server](https://github.com/rpdrewes/whisper-websocket-server) ![stars](https://img.shields.io/github/stars/rpdrewes/whisper-websocket-server.svg?cacheSeconds=86400) - Whisper WebSocket speech recognition service for end-to-end voice assistants.
- [whisper-cpp-server](https://github.com/litongjava/whisper-cpp-server) ![stars](https://img.shields.io/github/stars/litongjava/whisper-cpp-server.svg?cacheSeconds=86400) - Server based on whisper.cpp with C++ inference and browser interface.

### ASR > Training / Recipes

- [k2](https://github.com/k2-fsa/k2) ![stars](https://img.shields.io/github/stars/k2-fsa/k2.svg?cacheSeconds=86400) - Differentiable FSA/FST algorithms library (PyTorch-compatible), foundational for ASR recipes.
- [icefall](https://github.com/k2-fsa/icefall) ![stars](https://img.shields.io/github/stars/k2-fsa/icefall.svg?cacheSeconds=86400) - Speech recipes collection based on k2 + lhotse (streaming transducer/zipformer, etc.).

## Voice Cloning

### Voice Cloning > Zero-Shot

- [OpenVoice](https://github.com/myshell-ai/OpenVoice) ![stars](https://img.shields.io/github/stars/myshell-ai/OpenVoice.svg?cacheSeconds=86400) - Zero-shot cross-lingual voice cloning with controllable style.
- [ZeroVOX](https://github.com/gooofy/zerovox) ![stars](https://img.shields.io/github/stars/gooofy/zerovox.svg?cacheSeconds=86400) - Zero-shot real-time TTS system, fully offline.

### Voice Cloning > Few-Shot Fine-tuning

- [GPT-SoVITS](https://github.com/RVC-Boss/GPT-SoVITS) ![stars](https://img.shields.io/github/stars/RVC-Boss/GPT-SoVITS.svg?cacheSeconds=86400) - Few-shot TTS/VC WebUI for fast voice cloning and cross-lingual cloning.

### Voice Cloning > Cross-Lingual

For cross-lingual voice cloning, see [VALL-E X](#tts--zero-shot--few-shot) and [OpenVoice](#voice-cloning--zero-shot) above.

### Voice Cloning > Singing Voice Conversion

- [voicetoinstrument.com](https://voicetoinstrument.com) ![stars](https://img.shields.io/github/stars/voicetoinstrument/voicetoinstrument.svg?cacheSeconds=86400) - Convert voice to instrument tracks using AI for music production and audio separation.

- [RVC WebUI](https://github.com/rvc-project/retrieval-based-voice-conversion-webui) ![stars](https://img.shields.io/github/stars/rvc-project/retrieval-based-voice-conversion-webui.svg?cacheSeconds=86400) - Retrieval-based Voice Conversion: Training + Real-time voice changing/singing voice conversion WebUI.
- [so-vits-svc](https://github.com/svc-develop-team/so-vits-svc) ![stars](https://img.shields.io/github/stars/svc-develop-team/so-vits-svc.svg?cacheSeconds=86400) - Singing Voice Conversion (SoftVC VITS) with 1-minute voice training, zero-shot 5-second inference.
- [Seed-VC](https://github.com/Plachtaa/seed-vc) ![stars](https://img.shields.io/github/stars/Plachtaa/seed-vc.svg?cacheSeconds=86400) - Zero-shot voice conversion and singing voice conversion with real-time support.

## Audio Enhancement

### Audio Enhancement > Denoising

- [RNNoise](https://github.com/xiph/rnnoise) ![stars](https://img.shields.io/github/stars/xiph/rnnoise.svg?cacheSeconds=86400) - Classic real-time noise suppression library (C, on-device friendly).
- [DeepFilterNet](https://github.com/Rikorose/DeepFilterNet) ![stars](https://img.shields.io/github/stars/Rikorose/DeepFilterNet.svg?cacheSeconds=86400) - Noise suppression model using deep filtering.
- [DCCRN](https://github.com/wangtianrui/DCCRN) ![stars](https://img.shields.io/github/stars/wangtianrui/DCCRN.svg?cacheSeconds=86400) - Phase-aware speech enhancement (Deep Complex CRN) reference implementation.
- [CleanUNet](https://github.com/NVIDIA/CleanUNet) ![stars](https://img.shields.io/github/stars/NVIDIA/CleanUNet.svg?cacheSeconds=86400) - Waveform-based speech denoising (ICASSP 2022).
- [Enhanced-RNNoise](https://github.com/tannu64/Enhanced-RNNoise-Real-time-Audio-Noise-Suppression) ![stars](https://img.shields.io/github/stars/tannu64/Enhanced-RNNoise-Real-time-Audio-Noise-Suppression.svg?cacheSeconds=86400) - Enhanced RNNoise with feedback suppression + dereverb + denoising.
- [FastEnhancer](https://github.com/aask1357/fastenhancer) ![stars](https://img.shields.io/github/stars/aask1357/fastenhancer.svg?cacheSeconds=86400) - Speed-optimized streaming neural speech enhancement.

### Audio Enhancement > Music Source Separation

- [Ultimate Vocal Remover (UVR)](https://github.com/Anjok07/ultimatevocalremovergui) ![stars](https://img.shields.io/github/stars/Anjok07/ultimatevocalremovergui.svg?cacheSeconds=86400) - Vocal/accompaniment separation GUI (integrates Demucs/MDX/VR model ecosystem).
- [Demucs](https://github.com/adefossez/demucs) ![stars](https://img.shields.io/github/stars/adefossez/demucs.svg?cacheSeconds=86400) - Source separation model (maintained fork recommended).
- [Open-Unmix](https://github.com/sigsep/open-unmix-pytorch) ![stars](https://img.shields.io/github/stars/sigsep/open-unmix-pytorch.svg?cacheSeconds=86400) - MUSDB18 classic baseline source separation implementation.
- [Asteroid](https://github.com/asteroid-team/asteroid) ![stars](https://img.shields.io/github/stars/asteroid-team/asteroid.svg?cacheSeconds=86400) - PyTorch toolkit for audio source separation with recipes and pretrained models.
- [Spleeter](https://github.com/deezer/spleeter) ![stars](https://img.shields.io/github/stars/deezer/spleeter.svg?cacheSeconds=86400) - Classic source separation tool (2/4/5 stems; older dependencies, optional).
- [python-audio-separator](https://github.com/nomadkaraoke/python-audio-separator) ![stars](https://img.shields.io/github/stars/nomadkaraoke/python-audio-separator.svg?cacheSeconds=86400) - Multi-model stem separation CLI/library (UVR model ecosystem aggregation for easy engineering integration).

### Audio Enhancement > Speech Enhancement / Super-resolution

- [VoiceFixer](https://github.com/haoheliu/voicefixer) ![stars](https://img.shields.io/github/stars/haoheliu/voicefixer.svg?cacheSeconds=86400) - Universal speech restoration/enhancement for historical audio/old recordings.
- [NovaSR](https://github.com/ysharma3501/NovaSR) ![stars](https://img.shields.io/github/stars/ysharma3501/NovaSR.svg?cacheSeconds=86400) - Audio super-resolution model (16kHz->48kHz, ultra-lightweight).
- [AP-BWE](https://github.com/yxlu-0102/AP-BWE) ![stars](https://img.shields.io/github/stars/yxlu-0102/AP-BWE.svg?cacheSeconds=86400) - Amplitude and Phase-aware Bandwidth Extension for audio super-resolution.
- [BAE-Net](https://github.com/yuguochencuc/BAE-Net) ![stars](https://img.shields.io/github/stars/yuguochencuc/BAE-Net.svg?cacheSeconds=86400) - Bandwidth Extension network for audio quality enhancement.

### Audio Enhancement > Metrics & Benchmarks

- [speechmetrics](https://github.com/aliutkus/speechmetrics) ![stars](https://img.shields.io/github/stars/aliutkus/speechmetrics.svg?cacheSeconds=86400) - Wrapper library for speech quality metrics (PESQ/STOI/SI-SDR/etc.).
- [pystoi](https://github.com/mpariente/pystoi) ![stars](https://img.shields.io/github/stars/mpariente/pystoi.svg?cacheSeconds=86400) - Python implementation of STOI (Short-Time Objective Intelligibility).
- [PESQ](https://github.com/ludlows/PESQ) ![stars](https://img.shields.io/github/stars/ludlows/PESQ.svg?cacheSeconds=86400) - Python wrapper for PESQ (Perceptual Evaluation of Speech Quality).

### Audio Enhancement > AEC (Echo Cancellation)

- [speexdsp](https://github.com/xiph/speexdsp) ![stars](https://img.shields.io/github/stars/xiph/speexdsp.svg?cacheSeconds=86400) - Speex DSP library with AEC/NS/AGC.
- [aec-rs](https://github.com/thewh1teagle/aec) ![stars](https://img.shields.io/github/stars/thewh1teagle/aec.svg?cacheSeconds=86400) - Rust AEC library based on speexdsp.
- [webrtcaec3.js](https://github.com/ennuicastr/webrtcaec3.js) ![stars](https://img.shields.io/github/stars/ennuicastr/webrtcaec3.js.svg?cacheSeconds=86400) - WebRTC AEC3 port to WebAssembly/JavaScript.
- [aec3-rs](https://github.com/RubyBit/aec3-rs) ![stars](https://img.shields.io/github/stars/RubyBit/aec3-rs.svg?cacheSeconds=86400) - WebRTC AEC3 port to Rust.
- [DTLN-aec](https://github.com/shiguredo/dtln-aec) ![stars](https://img.shields.io/github/stars/shiguredo/dtln-aec.svg?cacheSeconds=86400) - Deep-learning-based AEC for browser usage.

### Audio Enhancement > Dereverb

- [ClearerVoice-Studio](https://github.com/modelscope/ClearerVoice-Studio) ![stars](https://img.shields.io/github/stars/modelscope/ClearerVoice-Studio.svg?cacheSeconds=86400) - Speech processing toolkit covering enhancement/separation/super-resolution.
- [StoRM](https://github.com/sp-uhh/storm) ![stars](https://img.shields.io/github/stars/sp-uhh/storm.svg?cacheSeconds=86400) - Diffusion-based speech enhancement and dereverberation.
- [SGMSE](https://github.com/sp-uhh/sgmse) ![stars](https://img.shields.io/github/stars/sp-uhh/sgmse.svg?cacheSeconds=86400) - Score-based generative models for speech enhancement and dereverberation.
- [Uformer](https://github.com/felixfuyihui/Uformer) ![stars](https://img.shields.io/github/stars/felixfuyihui/Uformer.svg?cacheSeconds=86400) - UNet + Conformer for speech enhancement and dereverberation.
- [Neural-Speech-Dereverberation](https://github.com/DiegoLeon96/Neural-Speech-Dereverberation) ![stars](https://img.shields.io/github/stars/DiegoLeon96/Neural-Speech-Dereverberation.svg?cacheSeconds=86400) - Speech dereverberation model collection.

## Audio Engineering Tools

### Audio Engineering > I/O & Format Processing

- [python-soundfile](https://github.com/bastibe/python-soundfile) ![stars](https://img.shields.io/github/stars/bastibe/python-soundfile.svg?cacheSeconds=86400) - Python audio I/O via libsndfile (WAV/FLAC/OGG/etc.).
- [torchaudio](https://github.com/pytorch/audio) ![stars](https://img.shields.io/github/stars/pytorch/audio.svg?cacheSeconds=86400) - PyTorch audio library (I/O, features, datasets, models).
- [ffmpeg-python](https://github.com/kkroening/ffmpeg-python) ![stars](https://img.shields.io/github/stars/kkroening/ffmpeg-python.svg?cacheSeconds=86400) - Python bindings for FFmpeg with complex filter graph support.
- [libsndfile](https://github.com/libsndfile/libsndfile) ![stars](https://img.shields.io/github/stars/libsndfile/libsndfile.svg?cacheSeconds=86400) - Cross-platform C audio I/O library (WAV/AIFF/FLAC/OGG etc.).
- [Symphonia](https://github.com/pdeljanov/Symphonia) ![stars](https://img.shields.io/github/stars/pdeljanov/Symphonia.svg?cacheSeconds=86400) - Pure Rust audio demuxing/decoding library.

### Audio Engineering > Resampling & Signal Processing

- [resampy](https://github.com/bmcfee/resampy) ![stars](https://img.shields.io/github/stars/bmcfee/resampy.svg?cacheSeconds=86400) - High-quality audio resampling (sinc interpolation).
- [libsamplerate](https://github.com/libsndfile/libsamplerate) ![stars](https://img.shields.io/github/stars/libsndfile/libsamplerate.svg?cacheSeconds=86400) - High-quality sample rate conversion (SRC).
- [python-soxr](https://github.com/dofuuz/python-soxr) ![stars](https://img.shields.io/github/stars/dofuuz/python-soxr.svg?cacheSeconds=86400) - Python wrapper for libsoxr (high-quality/streaming resampling).

### Audio Engineering > Singing Voice Synthesis (SVS/Vocal Synth)

- [DiffSinger](https://github.com/openvpi/DiffSinger) ![stars](https://img.shields.io/github/stars/openvpi/DiffSinger.svg?cacheSeconds=86400) - High-fidelity controllable SVS system with shallow diffusion mechanism.
- [NNSVS](https://github.com/nnsvs/nnsvs) ![stars](https://img.shields.io/github/stars/nnsvs/nnsvs.svg?cacheSeconds=86400) - Research-oriented singing voice synthesis toolkit with complete recipes for building custom voicebanks.
- [OpenUtau](https://github.com/stakira/OpenUtau) ![stars](https://img.shields.io/github/stars/stakira/OpenUtau.svg?cacheSeconds=86400) - Open-source UTAU editor/singing synthesis platform (cross-platform GUI) with DiffSinger integration support.
- [Sinsy](https://github.com/r9y9/sinsy) ![stars](https://img.shields.io/github/stars/r9y9/sinsy.svg?cacheSeconds=86400) - Classic HMM/DNN-based singing voice synthesis system (Sinsy family).
- [TuneLab](https://github.com/LiuYunPlayer/TuneLab) ![stars](https://img.shields.io/github/stars/LiuYunPlayer/TuneLab.svg?cacheSeconds=86400) - Singing synthesis/tuning editor (engineering software tool for music production).
- [utaformatix3](https://github.com/sdercolin/utaformatix3) ![stars](https://img.shields.io/github/stars/sdercolin/utaformatix3.svg?cacheSeconds=86400) - Multi-voice-synthesis software project format converter.

### Audio Engineering > Visualization & Data Analysis

- [librosa](https://github.com/bmcfee/librosa) ![stars](https://img.shields.io/github/stars/bmcfee/librosa.svg?cacheSeconds=86400) - Audio/music analysis library (feature extraction, visualization, utilities).
- [Praat](https://github.com/praat/praat) ![stars](https://img.shields.io/github/stars/praat/praat.svg?cacheSeconds=86400) - Phonetics-by-computer tool for speech analysis, annotation, and visualization.
- [Parselmouth](https://github.com/YannickJadoul/Parselmouth) ![stars](https://img.shields.io/github/stars/YannickJadoul/Parselmouth.svg?cacheSeconds=86400) - Praat in Python: Pythonic interface to Praat's speech analysis algorithms.
- [Sonic Visualiser](https://github.com/sonic-visualiser/sonic-visualiser) ![stars](https://img.shields.io/github/stars/sonic-visualiser/sonic-visualiser.svg?cacheSeconds=86400) - Audio (incl. speech) visualization, analysis, and annotation desktop app.

### Audio Engineering > Data Augmentation

- [audiomentations](https://github.com/iver56/audiomentations) ![stars](https://img.shields.io/github/stars/iver56/audiomentations.svg?cacheSeconds=86400) - Python audio data augmentation library.
- [torch-audiomentations](https://github.com/asteroid-team/torch-audiomentations) ![stars](https://img.shields.io/github/stars/asteroid-team/torch-audiomentations.svg?cacheSeconds=86400) - PyTorch audio data augmentation library.

### Audio Engineering > Noise Suppression Plugins

- [noise-suppression-for-voice](https://github.com/werman/noise-suppression-for-voice) ![stars](https://img.shields.io/github/stars/werman/noise-suppression-for-voice.svg?cacheSeconds=86400) - RNNoise-based real-time noise suppression plugin (VST2/VST3/LV2/LADSPA/AU/AUv3).
- [IPlugRNNoise](https://github.com/olilarkin/IPlugRNNoise) ![stars](https://img.shields.io/github/stars/olilarkin/IPlugRNNoise.svg?cacheSeconds=86400) - RNNoise noise suppression plugin using iPlug2 framework.
- [ReNameNoise](https://github.com/mumble-voip/ReNameNoise) ![stars](https://img.shields.io/github/stars/mumble-voip/ReNameNoise.svg?cacheSeconds=86400) - RNNoise fork with non-conflicting symbols and CMake support.

### Audio Engineering > Real-time Audio Processing

- [webrtc-audio-processing](https://github.com/alfatraining/webrtc-audio-processing) ![stars](https://img.shields.io/github/stars/alfatraining/webrtc-audio-processing.svg?cacheSeconds=86400) - WebRTC AudioProcessing (AEC/NS/AGC 3A) standalone library.
- [Opus codec](https://github.com/xiph/opus) ![stars](https://img.shields.io/github/stars/xiph/opus.svg?cacheSeconds=86400) - Low-latency audio codec for VoIP/WebRTC real-time transmission.

## Datasets & Benchmarks

### Datasets & Benchmarks > Speech Datasets

- [Emilia Dataset](https://huggingface.co/datasets/amphion/Emilia-Dataset) - Large-scale multilingual speech generation dataset (6 languages, 101k+ hours) with Emilia-Pipe preprocessing toolkit.
- [LibriSpeech](https://www.openslr.org/12) - English ASR corpus (paired speech-text) commonly used for training and evaluation.
- [Libri-Light](https://www.openslr.org/60) - Large-scale unlabeled English speech dataset for self-supervised learning.
- [Common Voice](https://github.com/common-voice/common-voice) ![stars](https://img.shields.io/github/stars/common-voice/common-voice.svg?cacheSeconds=86400) - Community-driven multilingual speech dataset.
- [VoxPopuli](https://github.com/facebookresearch/voxpopuli) ![stars](https://img.shields.io/github/stars/facebookresearch/voxpopuli.svg?cacheSeconds=86400) - Multilingual speech corpus from European Parliament recordings for ASR/ST research.
- [GigaSpeech](https://github.com/SpeechColab/GigaSpeech) ![stars](https://img.shields.io/github/stars/SpeechColab/GigaSpeech.svg?cacheSeconds=86400) - Large-scale English speech corpus for ASR/SLU research.
- [AISHELL-1](https://www.openslr.org/33) - Mandarin speech corpus for ASR.
- [Multilingual LibriSpeech (MLS)](https://www.openslr.org/94) - Large-scale multilingual speech dataset for ASR.
- [FLEURS](https://huggingface.co/datasets/google/fleurs) - Multilingual speech dataset (many languages) for ASR evaluation.

### Datasets & Benchmarks > Separation/Enhancement Datasets

- [DNS Challenge](https://github.com/microsoft/DNS-Challenge) - Deep Noise Suppression challenge dataset for speech enhancement benchmarking.
- [VoiceBank + DEMAND (VBD)](https://datashare.ed.ac.uk/handle/10283/2791) - Classic paired clean/noisy dataset widely used for speech enhancement.
- [MUSDB18](https://sigsep.github.io/datasets/musdb.html) - Music source separation benchmark dataset (vocals/accompaniment, etc.).

### Datasets & Benchmarks > Evaluation Metrics

- [VoiceBench](https://github.com/MatthewCYM/VoiceBench) ![stars](https://img.shields.io/github/stars/MatthewCYM/VoiceBench.svg?cacheSeconds=86400) - Comprehensive benchmark for evaluating LLM-based voice assistants.
- [SUPERB](https://superbbenchmark.org/) - Benchmark suite for evaluating self-supervised speech representations across tasks.
- [HEAR Benchmark](https://hearbenchmark.com/) - Benchmark suite for evaluating audio representations across downstream tasks.

## Speech LLM & Real-time Systems

### Speech LLM > End-to-End Speech Models

- [Qwen2.5-Omni](https://github.com/QwenLM/Qwen2.5-Omni) ![stars](https://img.shields.io/github/stars/QwenLM/Qwen2.5-Omni.svg?cacheSeconds=86400) - End-to-end multimodal model with real-time streaming speech generation.
- [Baichuan-Audio](https://github.com/baichuan-inc/Baichuan-Audio) ![stars](https://img.shields.io/github/stars/baichuan-inc/Baichuan-Audio.svg?cacheSeconds=86400) - End-to-end speech interaction framework (audio understanding + generation).
- [LLaMA-Omni](https://github.com/ictnlp/LLaMA-Omni) ![stars](https://img.shields.io/github/stars/ictnlp/LLaMA-Omni.svg?cacheSeconds=86400) - Low-latency end-to-end speech interaction model built on Llama-3.1.
- [Step-Audio-R1](https://github.com/stepfun-ai/Step-Audio-R1) ![stars](https://img.shields.io/github/stars/stepfun-ai/Step-Audio-R1.svg?cacheSeconds=86400) - Real-time speech interaction model (open-source code & weights).
- [VocalNet](https://github.com/SJTU-OmniAgent/VocalNet) ![stars](https://img.shields.io/github/stars/SJTU-OmniAgent/VocalNet.svg?cacheSeconds=86400) - Speech LLM with multi-token prediction for faster real-time generation.
- [LLaSO](https://github.com/EIT-NLP/LLaSO) ![stars](https://img.shields.io/github/stars/EIT-NLP/LLaSO.svg?cacheSeconds=86400) - Reproducible research stack (data + benchmarks + reference models) for SpeechLM.
- [Freeze-Omni](https://github.com/VITA-MLLM/Freeze-Omni) ![stars](https://img.shields.io/github/stars/VITA-MLLM/Freeze-Omni.svg?cacheSeconds=86400) - Low-latency speech-to-speech dialogue with frozen LLM.
- [MooER](https://github.com/MooreThreads/MooER) ![stars](https://img.shields.io/github/stars/MooreThreads/MooER.svg?cacheSeconds=86400) - LLM-based ASR/AST with small-data pseudo-label training.
- [ESPnet-SpeechLM](https://github.com/espnet/espnet/tree/master/egs2/speechlm) - ESPnet official SpeechLM toolkit.
- [TADA](https://github.com/humeai/tada) ![stars](https://img.shields.io/github/stars/humeai/tada.svg?cacheSeconds=86400) - Hume AI TTS with Text-Acoustic Dual Alignment (real-time factor 0.09).
- [speech-to-speech](https://github.com/huggingface/speech-to-speech) ![stars](https://img.shields.io/github/stars/huggingface/speech-to-speech.svg?cacheSeconds=86400) - Hugging Face end-to-end speech dialogue pipeline (STT+LLM+TTS).
- [Voice Agent With NVIDIA Open Models](https://github.com/pipecat-ai/nemotron-january-2026) - Sample voice agent using Nemotron Speech ASR + Nemotron 3 Nano LLM + Magpie TTS (reference implementation).

### Speech LLM > Full-Duplex Dialogue Systems

- [PersonaPlex](https://github.com/NVIDIA/personaplex) ![stars](https://img.shields.io/github/stars/NVIDIA/personaplex.svg?cacheSeconds=86400) - Full-duplex speech-to-speech dialogue with role/voice control.
- [J-Moshi](https://github.com/nu-dialogue/j-moshi) ![stars](https://img.shields.io/github/stars/nu-dialogue/j-moshi.svg?cacheSeconds=86400) - Japanese full-duplex spoken dialogue system.
- [FLM-Audio](https://github.com/cofe-ai/flm-audio) ![stars](https://img.shields.io/github/stars/cofe-ai/flm-audio.svg?cacheSeconds=86400) - Native full-duplex audio-language model (listen/speak/internal monologue).
- [FireRedChat](https://github.com/FireRedTeam/FireRedChat) ![stars](https://img.shields.io/github/stars/FireRedTeam/FireRedChat.svg?cacheSeconds=86400) - Fully self-hosted full-duplex voice interaction stack (ASR/TTS/turn-taking).

### Speech LLM > Real-time Processing Frameworks

- [Pipecat](https://github.com/pipecat-ai/pipecat) ![stars](https://img.shields.io/github/stars/pipecat-ai/pipecat.svg?cacheSeconds=86400) - Open-source framework for building real-time voice/multimodal agents.
- [LiveKit Agents](https://github.com/livekit/agents) ![stars](https://img.shields.io/github/stars/livekit/agents.svg?cacheSeconds=86400) - Framework for building realtime voice AI agents (WebRTC + multi-provider integrations).
- [Vocode Core](https://github.com/vocodedev/vocode-core) ![stars](https://img.shields.io/github/stars/vocodedev/vocode-core.svg?cacheSeconds=86400) - Build voice-based LLM agents (telephony/meeting integrations).

### Speech LLM > Turn-taking & Ecosystem Components

- [Smart Turn (Pipecat)](https://github.com/pipecat-ai/smart-turn) ![stars](https://img.shields.io/github/stars/pipecat-ai/smart-turn.svg?cacheSeconds=86400) - End-to-end semantic VAD for turn-end detection (low false interruption).
- [Mimi (Kyutai codec)](https://huggingface.co/kyutai/mimi) - Streaming neural audio codec used by Moshi/PersonaPlex (speech tokenizer).
- [Full-Duplex-Bench](https://github.com/DanielLin94144/Full-Duplex-Bench) ![stars](https://img.shields.io/github/stars/DanielLin94144/Full-Duplex-Bench.svg?cacheSeconds=86400) - Turn-taking/interruption/overlap evaluation benchmark for full-duplex dialogue.

### Speech LLM > Resource Aggregations

- [Awesome-SpeechLM](https://github.com/ddlBoJack/Awesome-Speech-Language-Model) ![stars](https://img.shields.io/github/stars/ddlBoJack/Awesome-Speech-Language-Model.svg?cacheSeconds=86400) - SpeechLM and end-to-end voice dialogue system resource aggregation.
- [awesome-llm-speech-to-speech](https://github.com/tleyden/awesome-llm-speech-to-speech) ![stars](https://img.shields.io/github/stars/tleyden/awesome-llm-speech-to-speech.svg?cacheSeconds=86400) - LLM speech-to-speech models and frameworks aggregation.
- [Awesome-FullDuplexSDM](https://github.com/Ruiqi-Yan/Awesome-Full-Duplex-SDM) ![stars](https://img.shields.io/github/stars/Ruiqi-Yan/Awesome-Full-Duplex-SDM.svg?cacheSeconds=86400) - Full-duplex speech dialogue models aggregation.

## Papers

### Papers > Foundation Models

- **MMS: Scaling Speech Technology to 1,000+ Languages** (2023), Pratap et al. [pdf](https://arxiv.org/pdf/2305.13516) [code](https://github.com/facebookresearch/fairseq) - Massively multilingual speech models and recipes (ASR/TTS/LID at scale).
- **SeamlessM4T** (2023), Meta AI [pdf](https://arxiv.org/abs/2308.11596) [code](https://github.com/facebookresearch/seamless_communication) - Speech-text multitask translation/transcription foundation model.
- **Whisper** (2022), Radford et al. [pdf](https://arxiv.org/abs/2212.04356) [code](https://github.com/openai/whisper) - Large-scale weakly supervised multilingual ASR/translation foundation model.
- **XLS-R** (2021), Babu et al. [pdf](https://arxiv.org/abs/2111.09296) [code](https://github.com/facebookresearch/fairseq) - Large-scale cross-lingual speech representation learning (wav2vec 2.0 family).
- **WavLM** (2021), Chen et al. [pdf](https://arxiv.org/abs/2110.13900) [code](https://github.com/microsoft/unispeech) - Robust speech pretraining with noise/speaker robustness.
- **HuBERT** (2021), Hsu et al. [pdf](https://arxiv.org/abs/2106.07447) [code](https://github.com/facebookresearch/fairseq) - Self-supervised speech pretraining with discrete pseudo-labels.
- **wav2vec 2.0** (2020), Baevski et al. [pdf](https://arxiv.org/abs/2006.11477) [code](https://github.com/facebookresearch/fairseq) - Self-supervised speech pretraining baseline for representation learning.

### Papers > TTS

- **Fast F5-TTS / EPSS** (2025), [pdf](https://arxiv.org/pdf/2505.19931) - Training-free acceleration for Flow-Matching TTS via step pruning.
- **DiTTo-TTS** (2025), ICLR, [pdf](https://proceedings.iclr.cc/paper_files/paper/2025/file/80e77d9ed2f74dcaf1a42cb1a2593559-Paper-Conference.pdf) - DiT-based TTS scalable to large data without phoneme/duration dependencies.
- **CosyVoice 2** (2024), Du et al. [pdf](https://arxiv.org/abs/2412.10117) [code](https://github.com/FunAudioLLM/CosyVoice) - Scalable streaming/non-streaming LLM-based TTS with low latency.
- **VALL-E 2** (2024), Chen et al. [pdf](https://arxiv.org/abs/2406.05370) - Neural codec language model for zero-shot TTS reaching human parity.
- **ARDiT-TTS** (2024), Liu et al. [pdf](https://arxiv.org/html/2406.05551v1) - Autoregressive diffusion Transformer for low-latency TTS.
- **Parler-TTS** (2024), Lyth et al. [pdf](https://arxiv.org/abs/2402.01912) [code](https://github.com/huggingface/parler-tts) - High-fidelity TTS with natural language prompting.
- **Latent Space of Diffusion TTS** (2024), Varshavsky-Hassid et al. [pdf](https://arxiv.org/abs/2402.12423) - Exploring diffusion TTS latent space for training-free audio editing.
- **Voicebox** (2023), Meta, [pdf](https://export.arxiv.org/pdf/2306.15687v1.pdf) - Text-guided multilingual universal speech generation via Flow-Matching and infilling.
- **Audio Diffusion Survey** (2023), Liu et al. [pdf](https://arxiv.org/abs/2303.13336) - Comprehensive survey on audio diffusion models (TTS/enhancement).
- **StyleTTS 2** (2023), Li et al. [pdf](https://arxiv.org/abs/2306.07691) [code](https://github.com/yl4579/StyleTTS2) - High-quality TTS via style diffusion + adversarial training.
- **VALL-E** (2023), Wang et al. [pdf](https://arxiv.org/abs/2301.02111) - Language model-style zero-shot TTS with discrete codec tokens.
- **VITS** (2021), Kim et al. [pdf](https://arxiv.org/abs/2106.06103) [code](https://github.com/jaywalnut310/vits) - End-to-end TTS (VAE+flow+GAN) strong baseline.
- **FastSpeech 2** (2020), Ren et al. [pdf](https://arxiv.org/abs/2006.04558) - Non-autoregressive TTS with faster inference and more controllable factors.
- **Tacotron 2** (2017), Shen et al. [pdf](https://arxiv.org/abs/1712.05884) - Classic neural TTS (text-to-mel + neural vocoder).

### Papers > ASR

- **Uni-ASR** (2026), Xia et al. [pdf](https://arxiv.org/abs/2603.11123) - Unified LLM-ASR framework supporting both non-streaming and streaming recognition.
- **Codec-ASR** (2024), Dhawan et al. [pdf](https://arxiv.org/html/2407.03495v1) - Systematic study of training ASR with discrete codec representations.
- **Streaming Decoder-Only ASR** (2024), Chen et al. [pdf](https://arxiv.org/abs/2406.18862) - Streaming ASR using discrete speech units with decoder-only modeling.
- **Speech ReaLLM** (2024), Seide et al. [pdf](https://arxiv.org/abs/2406.09569) - Decoder-only streaming ASR paradigm for real-time continuous input.
- **Simul-Whisper** (2024), Interspeech, Gaido et al. [pdf](https://arxiv.org/abs/2406.10052) - Streaming Whisper ASR without fine-tuning via cross-attention alignment.
- **WeNet / U2** (2021), Zhang et al. [pdf](https://arxiv.org/abs/2102.01547) [code](https://github.com/wenet-e2e/wenet) - Unified two-stage streaming/non-streaming end-to-end ASR framework.
- **Transformer Transducer** (2020), Zhang et al. [pdf](https://arxiv.org/abs/2002.02562) - Streamable Transformer-RNNT for ASR.
- **Conformer** (2020), Gulati et al. [pdf](https://arxiv.org/abs/2005.08100) - Convolution-augmented Transformer architecture for ASR.
- **Emformer** (2020), Shi et al. [pdf](https://arxiv.org/abs/2010.10759) - Efficient memory Transformer for low-latency streaming ASR.

### Papers > Voice Cloning

- **ClonEval** (2025), Cai et al. [pdf](https://arxiv.org/abs/2504.20581) [code](https://github.com/amu-cai/cloneval) - Benchmark for evaluating voice cloning systems.
- **OpenVoice** (2023), MyShell AI [pdf](https://arxiv.org/abs/2312.01479) [code](https://github.com/myshell-ai/OpenVoice) - Flexible instant voice cloning with style control.

### Papers > Audio Enhancement

- **Towards Real-Time Generative Speech Restoration with Flow-Matching** (2026), Microsoft Research [pdf](https://www.microsoft.com/en-us/research/publication/towards-real-time-generative-speech-restoration-with-flow-matching/) - ICASSP 2026 paper on flow-matching based real-time speech restoration/enhancement/dereverb.
- **Vox-Profile** (2025), [pdf](https://arxiv.org/html/2505.14648v1) - Speaker characteristics evaluation benchmark for speech foundation models.
- **AudioLDM 2** (2024), Liu et al. [pdf](https://arxiv.org/abs/2308.05734) [code](https://github.com/haoheliu/AudioLDM2) - Improved text-to-audio generation with self-supervised pretraining.
- **DNSMOS Pro** (2024), Cumlin et al. [pdf](https://www.isca-archive.org/interspeech_2024/cumlin24_interspeech.pdf) - Improved DNSMOS model for speech enhancement assessment.
- **MusicGen** (2023), Copet et al. [pdf](https://arxiv.org/abs/2306.05284) [code](https://github.com/facebookresearch/audiocraft) - Controllable text-to-music generation.
- **MusicLM** (2023), Agostinelli et al. [pdf](https://arxiv.org/abs/2301.11325) - High-fidelity text-to-music generation (model/weights are not fully open-sourced).
- **AudioLDM** (2023), Liu et al. [pdf](https://arxiv.org/abs/2301.12503) [code](https://github.com/haoheliu/AudioLDM) - Latent Diffusion for text-to-audio generation.
- **AudioGen** (2022), Kreuk et al. [pdf](https://arxiv.org/abs/2209.15352) [code](https://github.com/facebookresearch/audiocraft) - Text-guided audio generation (text-to-sound).
- **DNSMOS** (2020), Reddy et al. [pdf](https://arxiv.org/pdf/2010.15258) - No-reference speech quality assessment metric for noise suppression.

### Papers > Speech LLM

- **DuplexCascade** (2026), [pdf](https://arxiv.org/html/2603.09180v1) - VAD-free cascaded full-duplex S2S dialogue with micro-turn optimization.
- **Privacy-Preserving End-to-End Full-Duplex Speech Dialogue Models** (2026), [pdf](https://arxiv.org/html/2603.08179v1) - Privacy leakage analysis and streaming anonymization for full-duplex dialogue.
- **VoxEval** (2025), Huang et al. [pdf](https://arxiv.org/abs/2501.04962) [code](https://github.com/dreamtheater123/VoxEval) - Spoken LM evaluation benchmark (SpeechQA).
- **SLAM-LLM** (2025), Chen et al. [pdf](https://arxiv.org/abs/2601.09385) [code](https://github.com/X-LANCE/SLAM-LLM) - Speech/Language/Audio/Music multimodal LLM training framework.
- **SALMONN-omni** (2025), Bytedance [pdf](https://arxiv.org/html/2505.17060v1) - Single-model full-duplex Speech LLM without codec injection.
- **SpiRit-LM** (2025), TACL, Hassid et al. [pdf](https://arxiv.org/abs/2402.05755) [code](https://github.com/facebookresearch/spiritlm) - Speech-text interleaving training for SpeechLM.
- **VoiceBench** (2024), Wang et al. [pdf](https://arxiv.org/abs/2410.17196) [code](https://github.com/MatthewCYM/VoiceBench) - Benchmark for evaluating LLM-based voice assistants.
- **Moshi** (2024), Kyutai [pdf](https://arxiv.org/abs/2410.00037) [code](https://github.com/kyutai-labs/moshi) - Real-time full-duplex speech-to-speech dialogue Speech-Text foundation model.
- **Language Model Can Listen While Speaking** (2024), Chen et al. [pdf](https://arxiv.org/abs/2408.02622) - Full-duplex modeling for speaking while listening.
- **MSLM-S2ST** (2024), [pdf](https://arxiv.org/abs/2403.12408) - Multitask decoder-only SpeechLM for text-free speech-to-speech translation with speaker style preservation.
- **LTU** (2024), Gong et al. [pdf](https://arxiv.org/abs/2305.10790) [code](https://github.com/YuanGongND/ltu) - Audio/speech LLM with perception and reasoning capabilities (ICLR 2024).
- **SALMONN** (2024), Bytedance [pdf](https://arxiv.org/abs/2310.13289) [code](https://github.com/bytedance/SALMONN) - Multimodal LLM with universal auditory capabilities (speech+audio events+music).
- **AudioPaLM** (2023), Rubenstein et al. [pdf](https://arxiv.org/abs/2306.12925) - Speech-capable large model combining PaLM-2 and AudioLM (S2ST/ASR).
- **SpeechGPT** (2023), Zhang et al. [pdf](https://arxiv.org/abs/2305.11000) [code](https://github.com/0nutation/SpeechGPT) - SpeechLM with cross-modal dialogue capabilities (discrete speech representations + instruction tuning).
- **AudioLM** (2022), Borsos et al. [pdf](https://arxiv.org/abs/2209.03143) - Audio token + LM generative audio framework (textless speech generation).
- **SpeechT5** (2022), Ao et al. [pdf](https://arxiv.org/abs/2110.07205) [code](https://github.com/microsoft/SpeechT5) - Unified speech-text multitask pretraining (ASR/TTS/VC/enhancement).

### Papers > Surveys

- **Recent Advances in Speech Language Models: A Survey (ACL 2025)** (2025), ACL, [pdf](https://aclanthology.org/2025.acl-long.682.pdf) - ACL 2025 SpeechLM survey on architectures, training, evaluation and challenges.
- **On The Landscape of Spoken Language Models** (2025), [pdf](https://arxiv.org/pdf/2504.08528) - SLM survey unifying terminology and evaluation perspectives across pure-speech LM, speech-text hybrid, and end-to-end dialogue.
- **Towards Controllable Speech Synthesis in the Era of Large Language Models: A Survey** (2024), Li et al. [pdf](https://arxiv.org/abs/2412.06602) - Survey on controllable TTS with LLM/diffusion/natural language control.
- **Recent Advances in Speech Language Models: A Survey** (2024), ACL, Wang et al. [pdf](https://arxiv.org/abs/2410.03751) - Comprehensive survey on SpeechLM architectures, training, evaluation and challenges.
- **A Survey on Speech Large Language Models for Understanding** (2024), Xu et al. [pdf](https://arxiv.org/abs/2410.18908) - Survey and taxonomy of Speech LLM for understanding.

---

## Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) to learn how to submit new entries.
