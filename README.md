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
- [FunASR](https://github.com/modelscope/FunASR) ![stars](https://img.shields.io/github/stars/modelscope/FunASR.svg?cacheSeconds=86400) - End-to-end speech toolkit covering ASR, VAD, punctuation, diarization, and deployment workflows.
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
- [MOSS-TTSD](https://github.com/OpenMOSS/MOSS-TTSD) ![stars](https://img.shields.io/github/stars/OpenMOSS/MOSS-TTSD.svg?cacheSeconds=86400) - Long-form spoken dialogue generation model for expressive multi-speaker synthesis and zero-shot voice cloning.

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

- [Omnilingual ASR](https://github.com/facebookresearch/omnilingual-asr) ![stars](https://img.shields.io/github/stars/facebookresearch/omnilingual-asr.svg?cacheSeconds=86400) - Open multilingual ASR framework for 1600+ languages with CTC/LLM-ASR models and inference tooling.
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

- [YourTTS](https://github.com/Edresson/YourTTS) ![stars](https://img.shields.io/github/stars/Edresson/YourTTS.svg?cacheSeconds=86400) - Multilingual zero-shot multi-speaker TTS and zero-shot voice conversion with strong low-resource cross-lingual transfer.

See also [VALL-E X](#tts--zero-shot--few-shot), [OpenVoice](#voice-cloning--zero-shot), and [GPT-SoVITS](#voice-cloning--few-shot-fine-tuning) above.

### Voice Cloning > Singing Voice Conversion

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
- [ViSQOL](https://github.com/google/visqol) ![stars](https://img.shields.io/github/stars/google/visqol.svg?cacheSeconds=86400) - Google's full-reference perceptual speech/audio quality metric with MOS-LQO scoring, speech mode, CLI, and C++/Python APIs.
- [NISQA](https://github.com/gabrielmittag/NISQA) ![stars](https://img.shields.io/github/stars/gabrielmittag/NISQA.svg?cacheSeconds=86400) - Non-intrusive speech quality assessment framework with multidimensional quality prediction and reusable training/finetuning pipelines.
- [torchaudio SQUIM](https://docs.pytorch.org/audio/stable/generated/torchaudio.pipelines.SQUIM_OBJECTIVE.html) - Official torchaudio speech quality and intelligibility estimators covering objective and subjective prediction bundles.

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
- [FLEURS](https://huggingface.co/datasets/google/fleurs) - Multilingual speech dataset (many languages) for ASR evaluation.
- [Multilingual LibriSpeech (MLS)](https://www.openslr.org/94) - Large-scale multilingual speech dataset for ASR.
- [VoxPopuli](https://github.com/facebookresearch/voxpopuli) ![stars](https://img.shields.io/github/stars/facebookresearch/voxpopuli.svg?cacheSeconds=86400) - Multilingual speech corpus from European Parliament recordings for ASR/ST research.
- [VoxpopuliTTS](https://voxpopulitts.github.io/) - 30K-hour multilingual TTS-oriented corpus refined from VoxPopuli for zero-shot speech generation and related synthesis tasks.
- [AISHELL-1](https://www.openslr.org/33) - Mandarin speech corpus for ASR.
- [GigaSpeech](https://github.com/SpeechColab/GigaSpeech) ![stars](https://img.shields.io/github/stars/SpeechColab/GigaSpeech.svg?cacheSeconds=86400) - Large-scale English speech corpus for ASR/SLU research.
- [VoxKnesset](https://huggingface.co/datasets/yanirmr/VoxKnesset) - Longitudinal Hebrew parliamentary speech dataset with age and demographic metadata for speaker and speech modeling.
- [GigaSpeech2](https://github.com/SpeechColab/GigaSpeech2) ![stars](https://img.shields.io/github/stars/SpeechColab/GigaSpeech2.svg?cacheSeconds=86400) - Official large-scale multi-domain ASR corpus for low-resource languages with automated crawling and transcript refinement.
- [LEMAS](https://lemas-project.github.io/LEMAS-Project/) - 150K-hour multilingual audio suite with word-level timestamps for TTS, speech editing, and related generative speech tasks.
- [Swivuriso](https://huggingface.co/datasets/dsfsi-anv/za-african-next-voices) - Large-scale multilingual South African speech dataset targeting 3,000 hours across 7 languages for low-resource ASR research.
- [WAXAL](https://huggingface.co/datasets/google/WaxalNLP) - Open multilingual African speech corpus covering 24 languages with ASR and TTS subsets for low-resource speech research.
- [WenetSpeech-Chuan](https://github.com/ASLP-lab/WenetSpeech-Chuan) ![stars](https://img.shields.io/github/stars/ASLP-lab/WenetSpeech-Chuan.svg?cacheSeconds=86400) - Large-scale Sichuanese speech corpus with rich annotation and released ASR/TTS evaluation resources.
- [WenetSpeech-Wu](https://github.com/ASLP-lab/WenetSpeech-Wu-Repo) ![stars](https://img.shields.io/github/stars/ASLP-lab/WenetSpeech-Wu-Repo.svg?cacheSeconds=86400) - Large-scale Wu dialect speech corpus with multi-dimensional annotations, translations, emotion labels, and speaker metadata.
- [WenetSpeech-Yue](https://github.com/ASLP-lab/WenetSpeech-Yue) ![stars](https://img.shields.io/github/stars/ASLP-lab/WenetSpeech-Yue.svg?cacheSeconds=86400) - Large-scale Cantonese speech corpus with rich annotations and released ASR/TTS benchmark resources.

### Datasets & Benchmarks > Separation/Enhancement Datasets

- [DNS Challenge](https://github.com/microsoft/DNS-Challenge) - Deep Noise Suppression challenge dataset for speech enhancement benchmarking.
- [AEC Challenge](https://github.com/microsoft/AEC-Challenge) ![stars](https://img.shields.io/github/stars/microsoft/AEC-Challenge.svg?cacheSeconds=86400) - Official acoustic echo cancellation challenge datasets with real and synthetic recordings from thousands of devices, speakers, and environments.
- [Clarity Enhancement Challenge (CEC)](https://claritychallenge.org/docs/cec3/cec3_intro) - Official hearing-aid speech enhancement challenge series with downloadable datasets, real/simulated scenes, and intelligibility/quality-oriented evaluation tracks.
- [WHAM! / WHAMR!](https://wham.whisper.ai/) - Canonical noisy and reverberant speech separation datasets extending WSJ0-2mix with real ambient noise and room effects.
- [VoiceBank + DEMAND (VBD)](https://datashare.ed.ac.uk/handle/10283/2791) - Classic paired clean/noisy dataset widely used for speech enhancement.
- [RIR-Mega-Speech](https://huggingface.co/datasets/mandipgoswami/rir-mega-speech) - Reverberant speech corpus with per-file acoustic metadata for robust ASR and dereverberation evaluation.
- [URGENT 2026 Track 1](https://huggingface.co/datasets/lichenda/urgent26_track1_universal_se) - Pre-simulated universal speech enhancement training and validation set for the ICASSP 2026 URGENT challenge.
- [LibriMix](https://github.com/JorisCos/LibriMix) ![stars](https://img.shields.io/github/stars/JorisCos/LibriMix.svg?cacheSeconds=86400) - Open-source speech separation dataset built from LibriSpeech and WHAM noise for noisy two-speaker and three-speaker mixtures.
- [MUSDB18](https://sigsep.github.io/datasets/musdb.html) - Music source separation benchmark dataset (vocals/accompaniment, etc.).

### Datasets & Benchmarks > Evaluation Metrics

- [SUPERB](https://superbbenchmark.org/) - Benchmark suite for evaluating self-supervised speech representations across tasks.
- [HEAR Benchmark](https://hearbenchmark.com/) - Benchmark suite for evaluating audio representations across downstream tasks.
- [SpeechEval](https://huggingface.co/datasets/Hui519/SpeechEval) - Large-scale multilingual benchmark for interpretable speech quality evaluation, pairwise comparison, improvement suggestion, and deepfake detection.
- [MCL-MLAAD](https://github.com/xuanxixi/Multilingual-Source-Tracing) ![stars](https://img.shields.io/github/stars/xuanxixi/Multilingual-Source-Tracing.svg?cacheSeconds=86400) - Multilingual speech deepfake source-tracing benchmark covering mono- and cross-lingual protocols across six languages.
- [IndicSynth](https://github.com/vdivyas/IndicSynth) ![stars](https://img.shields.io/github/stars/vdivyas/IndicSynth.svg?cacheSeconds=86400) - Large-scale synthetic speech dataset for multilingual deepfake detection and anti-spoofing research across 12 low-resource Indian languages.
- [XMAD-Bench](https://github.com/ristea/xmad-bench) ![stars](https://img.shields.io/github/stars/ristea/xmad-bench.svg?cacheSeconds=86400) - Cross-domain multilingual audio deepfake benchmark with distinct speakers, generators, and real-source splits for in-the-wild robustness testing.
- [UltraEval-Audio](https://github.com/OpenBMB/UltraEval-Audio) ![stars](https://img.shields.io/github/stars/OpenBMB/UltraEval-Audio.svg?cacheSeconds=86400) - Unified evaluation framework for speech understanding and generation models across 34+ benchmarks.
- [Open ASR Leaderboard](https://github.com/huggingface/open_asr_leaderboard) ![stars](https://img.shields.io/github/stars/huggingface/open_asr_leaderboard.svg?cacheSeconds=86400) - Reproducible ASR benchmark and leaderboard covering English short-form, long-form, and multilingual tracks with standardized WER and RTFx evaluation.
- [VocalBench](https://github.com/SJTU-OmniAgent/VocalBench) ![stars](https://img.shields.io/github/stars/SJTU-OmniAgent/VocalBench.svg?cacheSeconds=86400) - Benchmark for vocal conversational abilities covering semantics, acoustics, chat quality, robustness, and latency.
- [VoiceBench](https://github.com/MatthewCYM/VoiceBench) ![stars](https://img.shields.io/github/stars/MatthewCYM/VoiceBench.svg?cacheSeconds=86400) - Comprehensive benchmark for evaluating LLM-based voice assistants.
- [VoiceAssistant-Eval](https://github.com/mathllm/VoiceAssistant-Eval) ![stars](https://img.shields.io/github/stars/mathllm/VoiceAssistant-Eval.svg?cacheSeconds=86400) - Benchmark and evaluation code for voice assistants across listening, speaking, and viewing.
- [VoiceAgentBench](https://huggingface.co/datasets/krutrim-ai-labs/VoiceAgentBench) - Agentic voice assistant benchmark for multilingual spoken tool use, multi-turn workflows, and safety-critical requests.
- [WildSpeech-Bench](https://huggingface.co/datasets/tencent/WildSpeech-Bench) - In-the-wild benchmark for end-to-end speech LLMs with real conversational audio, speech-specific phenomena, and query-aware evaluation.
- [MTalk-Bench](https://huggingface.co/datasets/FreedomIntelligence/MTalk-Bench) - Multi-turn speech-to-speech benchmark spanning semantic, paralinguistic, and ambient-sound abilities with arena and rubric evaluation.
- [EchoMind](https://huggingface.co/datasets/hlt-cuhksz/EchoMind) - Multi-level benchmark for empathetic speech LMs linking content understanding, vocal-cue perception, reasoning, and response generation.
- [PARSA-Bench](https://huggingface.co/datasets/MohammadJRanjbar/PARSA-Bench) - Persian audio-language benchmark spanning 16 tasks across speech understanding, paralinguistics, and culturally grounded audio reasoning.
- [SpeechParaling-Bench](https://speechparaling-bench.github.io/) - Bilingual benchmark for paralinguistic-aware speech generation covering 100+ features, dynamic control, and situational adaptation.
- [HumDial Challenge](https://aslp-lab.github.io/HumDial-Challenge/) - Human-like spoken dialogue benchmark covering emotional intelligence and full-duplex interaction on authentic conversations.
- [Full-Duplex-Bench-v3](https://daniellin94144.github.io/FDB-v3-demo/) - Benchmark for full-duplex voice agents under real-world disfluency and multi-step tool use with real human audio.
- [WearVox](https://github.com/facebookresearch/WearVox) ![stars](https://img.shields.io/github/stars/facebookresearch/WearVox.svg?cacheSeconds=86400) - Egocentric multichannel voice assistant benchmark for wearable scenarios such as AI glasses.
- [CS3-Bench](https://huggingface.co/datasets/VocalNet/CS3-Bench) - Benchmark for Mandarin-English code-switching speech-to-speech systems spanning knowledge QA and open-ended conversation.
- [ContextASR-Bench](https://huggingface.co/datasets/MrSupW/ContextASR-Bench) - Large-scale contextual ASR benchmark targeting named-entity recognition and domain-aware transcription with structured context signals.
- [Voxlect](https://github.com/tiantiaf0627/voxlect) ![stars](https://img.shields.io/github/stars/tiantiaf0627/voxlect.svg?cacheSeconds=86400) - Global dialect and regional-language benchmark for speech foundation models built on 30 public corpora across major speech varieties.
- [SimbaBench](https://huggingface.co/datasets/UBC-NLP/SimbaBench_dataset) - Large-scale African speech benchmark covering 61 languages across ASR, TTS, and spoken language identification tasks.
- [NADI 2025](https://nadi.dlnlp.ai/2025/index.html) - Official multidialectal Arabic speech processing shared task covering dialect identification, ASR, and spoken-dialect diacritization restoration.
- [Bambara ASR Benchmark](https://huggingface.co/datasets/MALIBA-AI/bambara-asr-benchmark) - Standardized Bambara ASR benchmark with a public leaderboard for controlled evaluation on formal constitutional speech.
- [NV-Bench](https://huggingface.co/datasets/AnonyData/NV-Bench) - Benchmark for expressive TTS with paired human reference audio, 14 nonverbal vocalization categories, and controllability/fidelity evaluation.
- [InstructTTSEval](https://huggingface.co/datasets/CaasiHUANG/InstructTTSEval) - Benchmark for instruction-following TTS with 6k English/Chinese test cases covering acoustic parameters, descriptive styles, and role-play prompts.
- [TTS General Benchmark](https://huggingface.co/datasets/sarvamai/tts-general-benchmark) - Multilingual TTS benchmark across 11 Indian languages with high-quality and telephony evaluation subsets.
- [TTS Robustness Benchmark](https://huggingface.co/datasets/sarvamai/tts-robustness-benchmark) - Stress-test benchmark for multilingual TTS robustness covering numerics, abbreviations, code-mixing, named entities, URLs, and other hard cases.
- [TTSDS2](https://github.com/ttsds/ttsds) ![stars](https://img.shields.io/github/stars/ttsds/ttsds.svg?cacheSeconds=86400) - Continually updated multilingual TTS benchmark and evaluation pipeline with subjective ratings, leakage-resistant test sets, and human-quality scoring.
- [WSChuan-eval](https://github.com/ASLP-lab/WenetSpeech-Chuan#benchmark) ![stars](https://img.shields.io/github/stars/ASLP-lab/WenetSpeech-Chuan.svg?cacheSeconds=86400) - Comprehensive Sichuanese benchmark with ASR and TTS subsets for dialectal speech processing.
- [WSYue-eval](https://github.com/ASLP-lab/WenetSpeech-Yue#benchmark) ![stars](https://img.shields.io/github/stars/ASLP-lab/WenetSpeech-Yue.svg?cacheSeconds=86400) - Comprehensive Cantonese benchmark with ASR and zero-shot TTS subsets covering code-switching and diverse domains.
- [WenetSpeech-Wu-Bench](https://huggingface.co/datasets/ASLP-lab/WenetSpeech-Wu-Bench) - Benchmark for Wu dialect ASR, AST, speaker traits, emotion recognition, TTS, and instruction-following TTS.
- [Whisper-RIR-Mega](https://huggingface.co/datasets/mandipgoswami/whisper-rirmega-bench) - Paired clean-reverberant benchmark for measuring Whisper-style ASR robustness across room acoustics.

## Speech LLM & Real-time Systems

### Speech LLM > End-to-End Speech Models

- [Qwen2.5-Omni](https://github.com/QwenLM/Qwen2.5-Omni) ![stars](https://img.shields.io/github/stars/QwenLM/Qwen2.5-Omni.svg?cacheSeconds=86400) - End-to-end multimodal model with real-time streaming speech generation.
- [Baichuan-Audio](https://github.com/baichuan-inc/Baichuan-Audio) ![stars](https://img.shields.io/github/stars/baichuan-inc/Baichuan-Audio.svg?cacheSeconds=86400) - End-to-end speech interaction framework (audio understanding + generation).
- [LLaMA-Omni](https://github.com/ictnlp/LLaMA-Omni) ![stars](https://img.shields.io/github/stars/ictnlp/LLaMA-Omni.svg?cacheSeconds=86400) - Low-latency end-to-end speech interaction model built on Llama-3.1.
- [Ming-UniAudio](https://github.com/inclusionAI/Ming-UniAudio) ![stars](https://img.shields.io/github/stars/inclusionAI/Ming-UniAudio.svg?cacheSeconds=86400) - Unified speech LLM for speech understanding, generation, and free-form editing with a continuous speech tokenizer.
- [Step-Audio-R1](https://github.com/stepfun-ai/Step-Audio-R1) ![stars](https://img.shields.io/github/stars/stepfun-ai/Step-Audio-R1.svg?cacheSeconds=86400) - Real-time speech interaction model (open-source code & weights).
- [Step-Audio2](https://github.com/stepfun-ai/Step-Audio2) ![stars](https://img.shields.io/github/stars/stepfun-ai/Step-Audio2.svg?cacheSeconds=86400) - End-to-end multimodal audio model for speech conversation, audio understanding, emotional reasoning, and tool use.
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

- **OWSM v4: Improving Open Whisper-Style Speech Models via Data Scaling and Cleaning** (2025), Peng et al. [pdf](https://arxiv.org/abs/2506.00338) - Open Whisper-style speech foundation models scaled to 166k hours across 75 languages via data scaling/cleaning, matching or surpassing Whisper/MMS on multilingual benchmarks.
- **FAMA: The First Large-Scale Open-Science Speech Foundation Model for English and Italian** (2025), Papi et al. [pdf](https://arxiv.org/abs/2505.22759) - First large-scale open-science speech foundation model family for English and Italian, trained on 150k+ hours of open-source speech with released data, code, and models.
- **Metis: A Foundation Speech Generation Model with Masked Generative Pre-training** (2025), Wang et al. [pdf](https://arxiv.org/abs/2502.03128) - Foundation speech generation model that adapts efficiently to zero-shot TTS, voice conversion, target speaker extraction, enhancement, and lip-to-speech.
- **OWSM-CTC: An Open Encoder-Only Speech Foundation Model for Speech Recognition, Translation, and Language Identification** (2024), Peng et al. [pdf](https://arxiv.org/abs/2402.12654) - Open encoder-only speech foundation model trained on 180k hours of public audio for multilingual ASR, speech translation, and language identification with faster inference.
- **MMS: Scaling Speech Technology to 1,000+ Languages** (2023), Pratap et al. [pdf](https://arxiv.org/pdf/2305.13516) [code](https://github.com/facebookresearch/fairseq) - Massively multilingual speech models and recipes (ASR/TTS/LID at scale).
- **SeamlessM4T** (2023), Meta AI [pdf](https://arxiv.org/abs/2308.11596) [code](https://github.com/facebookresearch/seamless_communication) - Speech-text multitask translation/transcription foundation model.
- **Whisper** (2022), Radford et al. [pdf](https://arxiv.org/abs/2212.04356) [code](https://github.com/openai/whisper) - Large-scale weakly supervised multilingual ASR/translation foundation model.
- **XLS-R** (2021), Babu et al. [pdf](https://arxiv.org/abs/2111.09296) [code](https://github.com/facebookresearch/fairseq) - Large-scale cross-lingual speech representation learning (wav2vec 2.0 family).
- **WavLM** (2021), Chen et al. [pdf](https://arxiv.org/abs/2110.13900) [code](https://github.com/microsoft/unispeech) - Robust speech pretraining with noise/speaker robustness.
- **HuBERT** (2021), Hsu et al. [pdf](https://arxiv.org/abs/2106.07447) [code](https://github.com/facebookresearch/fairseq) - Self-supervised speech pretraining with discrete pseudo-labels.
- **wav2vec 2.0** (2020), Baevski et al. [pdf](https://arxiv.org/abs/2006.11477) [code](https://github.com/facebookresearch/fairseq) - Self-supervised speech pretraining baseline for representation learning.

### Papers > TTS

- **LEMAS** (2026), Zhao et al. [pdf](https://arxiv.org/abs/2601.04233) - 150K-hour multilingual audio suite with word-level timestamps and benchmark generative speech models for zero-shot TTS and speech editing.
- **NV-Bench** (2026), Ni et al. [pdf](https://arxiv.org/abs/2603.15352) - First benchmark for evaluating nonverbal vocalization synthesis in expressive TTS with paired reference audio and dual controllability/fidelity metrics.
- **CodecMOS-Accent** (2026), Huang et al. [pdf](https://arxiv.org/abs/2603.14328) - MOS benchmark spanning 24 systems, 32 speakers, and ten English accents for codec resynthesis and accented TTS evaluation.
- **FlexiVoice** (2026), [pdf](https://arxiv.org/abs/2601.04656) - Zero-shot TTS with natural language instructions and optional speech references for disentangled style, timbre, and content control.
- **MOSS-TTSD** (2026), [pdf](https://arxiv.org/abs/2603.19739) - Long-form text-to-spoken-dialogue generation model for expressive multi-speaker dialogue TTS and zero-shot voice cloning.
- **TTSDS2** (2025), Minixhofer et al. [pdf](https://arxiv.org/abs/2506.19441) [code](https://github.com/ttsds/ttsds) - Multilingual TTS benchmark and resource suite with subjective ratings, continually refreshed test sets, and strong correlation to human judgments.
- **InstructTTSEval** (2025), Huang et al. [pdf](https://arxiv.org/abs/2506.16381) [code](https://github.com/KexinHUANG19/InstructTTSEval) - Benchmark for complex natural-language instruction following in TTS with English/Chinese subsets and automatic judging.
- **IndexTTS2** (2025), [pdf](https://arxiv.org/abs/2506.21619) [code](https://github.com/index-tts/index-tts) - Industrial-level controllable zero-shot TTS with exact duration control, timbre/emotion disentanglement, and soft text instruction support.
- **VoxpopuliTTS: a large-scale multilingual TTS corpus for zero-shot speech generation** (2025), Liu et al. [pdf](https://aclanthology.org/2025.coling-main.685.pdf) - 30K-hour multilingual TTS corpus refined from VoxPopuli for zero-shot speech generation and related synthesis tasks.
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

- **AfriVoices-KE** (2026), Wanzare et al. [pdf](https://arxiv.org/abs/2604.08448) - Multilingual Kenyan speech dataset with scripted and spontaneous audio designed for inclusive ASR and TTS research.
- **LoASR-Bench** (2026), Chen et al. [pdf](https://arxiv.org/abs/2603.20042) - Low-resource ASR benchmark spanning 25 languages across 9 language families for evaluating modern SpeechLMs.
- **Uni-ASR** (2026), Xia et al. [pdf](https://arxiv.org/abs/2603.11123) - Unified LLM-ASR framework supporting both non-streaming and streaming recognition.
- **Ramsa** (2026), Al-Sabbagh [pdf](https://arxiv.org/abs/2603.08125) - Emirati Arabic speech corpus with sociolinguistic coverage, subdialect diversity, and zero-shot ASR/TTS baselines.
- **Nwāchā Munā** (2026), Sharma et al. [pdf](https://arxiv.org/abs/2603.07554) - Devanagari Nepal Bhasha speech corpus and first benchmark showing proximal transfer can be competitive in ultra-low-resource ASR.
- **Whisper-RIR-Mega** (2026), Goswami [pdf](https://arxiv.org/abs/2603.02252) - Paired clean-reverberant benchmark for evaluating ASR robustness to room acoustics.
- **WAXAL** (2026), Diack et al. [pdf](https://arxiv.org/abs/2602.02734) - Large-scale multilingual African speech corpus with openly released ASR and TTS subsets for 24 languages.
- **Where Are We At with Automatic Speech Recognition for the Bambara Language?** (2026), Diallo et al. [pdf](https://arxiv.org/abs/2602.09785) - Introduces the first standardized Bambara ASR benchmark and public leaderboard for controlled low-resource evaluation.
- **WenetSpeech-Wu** (2026), Wang et al. [pdf](https://arxiv.org/abs/2601.11027) [code](https://github.com/ASLP-lab/WenetSpeech-Wu-Repo) - Wu dialect speech ecosystem with 8,000-hour corpus, unified benchmark, and released models.
- **Swivuriso: The South African Next Voices Multilingual Speech Dataset** (2025), Marivate et al. [pdf](https://arxiv.org/abs/2512.02201) - 3,000-hour multilingual South African speech dataset spanning 7 languages and multiple domains for low-resource ASR.
- **AfriSpeech-MultiBench** (2025), Ashungafac et al. [pdf](https://arxiv.org/abs/2511.14255) - Benchmark suite for African-accented English ASR spanning 100+ accents, 10+ countries, seven application domains, and hallucination robustness analysis.
- **CoVoGER: A Multilingual Multitask Benchmark for Speech-to-text Generative Error Correction with Large Language Models** (2025), Yang et al. [pdf](https://aclanthology.org/2025.emnlp-main.320.pdf) [code](https://github.com/N-Orien/CoVoGER) - Multilingual benchmark for generative error correction across ASR and speech translation with 15 languages and 28 language pairs.
- **Open ASR Leaderboard** (2025), Srivastav et al. [pdf](https://arxiv.org/abs/2510.06961) [code](https://github.com/huggingface/open_asr_leaderboard) - Reproducible benchmark platform comparing multilingual and long-form ASR systems with standardized WER and RTFx metrics.
- **WenetSpeech-Chuan** (2025), Dai et al. [pdf](https://arxiv.org/abs/2509.18004) [code](https://github.com/ASLP-lab/WenetSpeech-Chuan) - Large-scale Sichuanese corpus with rich annotation, dialect benchmarks, and released recipes for dialectal speech processing.
- **WenetSpeech-Yue** (2025), Li et al. [pdf](https://arxiv.org/abs/2509.03959) [code](https://github.com/ASLP-lab/WenetSpeech-Yue) - Large-scale Cantonese speech corpus with multi-dimensional annotation and released ASR/TTS benchmark resources.
- **NADI 2025: The First Multidialectal Arabic Speech Processing Shared Task** (2025), Talafha et al. [pdf](https://aclanthology.org/2025.arabicnlp-sharedtasks.99/) - Official ArabicNLP 2025 shared task covering spoken dialect identification, multidialectal ASR, and diacritization restoration from speech.
- **Voxlect** (2025), Feng et al. [pdf](https://arxiv.org/abs/2508.01691) [code](https://github.com/tiantiaf0627/voxlect) - Global benchmark for dialect and regional-language modeling with speech foundation models across 30 public corpora.
- **ContextASR-Bench** (2025), Wang et al. [pdf](https://arxiv.org/abs/2507.05727) [code](https://github.com/MrSupW/ContextASR-Bench) - Massive contextual ASR benchmark with named-entity-rich inputs and multiple evaluation modes for context-aware recognition.
- **Voice of a Continent: Mapping Africa's Speech Technology Frontier** (2025), Elmadany et al. [pdf](https://aclanthology.org/2025.emnlp-main.559/) [code](https://github.com/UBC-NLP/simba) - Introduces SimbaBench, a large-scale African speech benchmark and model suite spanning ASR, TTS, and spoken language identification.
- **Codec-ASR** (2024), Dhawan et al. [pdf](https://arxiv.org/html/2407.03495v1) - Systematic study of training ASR with discrete codec representations.
- **Streaming Decoder-Only ASR** (2024), Chen et al. [pdf](https://arxiv.org/abs/2406.18862) - Streaming ASR using discrete speech units with decoder-only modeling.
- **Speech ReaLLM** (2024), Seide et al. [pdf](https://arxiv.org/abs/2406.09569) - Decoder-only streaming ASR paradigm for real-time continuous input.
- **Simul-Whisper** (2024), Interspeech, Gaido et al. [pdf](https://arxiv.org/abs/2406.10052) - Streaming Whisper ASR without fine-tuning via cross-attention alignment.
- **WeNet / U2** (2021), Zhang et al. [pdf](https://arxiv.org/abs/2102.01547) [code](https://github.com/wenet-e2e/wenet) - Unified two-stage streaming/non-streaming end-to-end ASR framework.
- **Transformer Transducer** (2020), Zhang et al. [pdf](https://arxiv.org/abs/2002.02562) - Streamable Transformer-RNNT for ASR.
- **Conformer** (2020), Gulati et al. [pdf](https://arxiv.org/abs/2005.08100) - Convolution-augmented Transformer architecture for ASR.
- **Emformer** (2020), Shi et al. [pdf](https://arxiv.org/abs/2010.10759) - Efficient memory Transformer for low-latency streaming ASR.

### Papers > Voice Cloning

- **PFluxTTS** (2026), [pdf](https://arxiv.org/abs/2602.04160) - Hybrid flow-matching TTS focused on robust cross-lingual voice cloning and inference-time model fusion.
- **RVCBench: Benchmarking the Robustness of Voice Cloning Across Modern Audio Generation Models** (2026), Liao et al. [pdf](https://arxiv.org/abs/2602.00443) - Robustness benchmark for modern voice cloning across input variation, generation challenges, post-processing, adversarial perturbations, and cross-lingual settings.
- **Cross-Lingual F5-TTS** (2025), Liu et al. [pdf](https://arxiv.org/abs/2509.14579) - Cross-lingual voice cloning and speech synthesis without requiring audio-prompt transcripts.
- **RT-VC: Real-Time Zero-Shot Voice Conversion with Speech Articulatory Coding** (2025), Liu et al. [pdf](https://arxiv.org/abs/2506.10289) - Real-time zero-shot voice conversion with articulatory coding and low-latency synthesis.
- **ClonEval** (2025), Cai et al. [pdf](https://arxiv.org/abs/2504.20581) [code](https://github.com/amu-cai/cloneval) - Benchmark for evaluating voice cloning systems.
- **OpenVoice** (2023), MyShell AI [pdf](https://arxiv.org/abs/2312.01479) [code](https://github.com/myshell-ai/OpenVoice) - Flexible instant voice cloning with style control.

### Papers > Audio Enhancement

- **RIR-Mega-Speech** (2026), Goswami [pdf](https://arxiv.org/abs/2601.19949) - Reverberant speech corpus with acoustic metadata and reproducible evaluation for ASR and dereverberation research.
- **ICASSP 2026 URGENT Speech Enhancement Challenge** (2026), Li et al. [pdf](https://arxiv.org/abs/2601.13531) - Universal speech enhancement challenge covering diverse distortions, evaluation tracks, baselines, and results.
- **Towards Real-Time Generative Speech Restoration with Flow-Matching** (2026), Microsoft Research [pdf](https://www.microsoft.com/en-us/research/publication/towards-real-time-generative-speech-restoration-with-flow-matching/) - ICASSP 2026 paper on flow-matching based real-time speech restoration/enhancement/dereverb.
- **FlowSE: Efficient and High-Quality Speech Enhancement via Flow Matching** (2025), Welch et al. [pdf](https://arxiv.org/abs/2505.19476) - Flow-matching speech enhancement method targeting strong quality with low sampling cost.
- **ReverbMiipher** (2025), Nakata et al. [pdf](https://arxiv.org/abs/2505.05077) - Generative speech restoration that preserves and enables controllable reverberation characteristics.
- **Miipher-2** (2025), Karita et al. [pdf](https://arxiv.org/abs/2505.04457) - Universal speech restoration model for multilingual million-hour scale data cleaning and enhancement.
- **A Hybrid Model for Weakly-Supervised Speech Dereverberation** (2025), Bahrman et al. [pdf](https://arxiv.org/abs/2502.06839) - Weakly supervised dereverberation using limited acoustic cues such as RT60 instead of paired dry/wet targets.
- **HiFi-SR** (2025), Zhao et al. [pdf](https://arxiv.org/abs/2501.10045) - Unified adversarial transformer-convolutional network for high-fidelity speech super-resolution up to 48 kHz.
- **DNSMOS Pro** (2024), Cumlin et al. [pdf](https://www.isca-archive.org/interspeech_2024/cumlin24_interspeech.pdf) - Improved DNSMOS model for speech enhancement assessment.
- **DNSMOS** (2020), Reddy et al. [pdf](https://arxiv.org/pdf/2010.15258) - No-reference speech quality assessment metric for noise suppression.

### Papers > Speech LLM

- **HumDial-EIBench** (2026), Wang et al. [pdf](https://arxiv.org/abs/2604.11594) - Human-recorded multi-turn emotional intelligence benchmark for audio language models.
- **Full-Duplex-Bench-v3** (2026), Lin et al. [pdf](https://arxiv.org/abs/2604.04847) - Benchmark for tool use, latency, and turn-taking in full-duplex voice agents under real-world disfluency.
- **DuplexCascade** (2026), [pdf](https://arxiv.org/html/2603.09180v1) - VAD-free cascaded full-duplex S2S dialogue with micro-turn optimization.
- **Privacy-Preserving End-to-End Full-Duplex Speech Dialogue Models** (2026), [pdf](https://arxiv.org/html/2603.08179v1) - Privacy leakage analysis and streaming anonymization for full-duplex dialogue.
- **Human or Machine? A Preliminary Turing Test for Speech-to-Speech Interaction** (2026), Li et al. [pdf](https://arxiv.org/abs/2602.24080) - First Turing-style human-likeness evaluation for speech-to-speech systems with fine-grained diagnostic dimensions.
- **The ICASSP 2026 HumDial Challenge** (2026), Zhao et al. [pdf](https://arxiv.org/abs/2601.05564) - Human-like spoken dialogue benchmark spanning emotional intelligence and full-duplex interaction.
- **Speech-XL: Towards Long-Form Speech Understanding in Large Speech Language Models** (2026), Sun et al. [pdf](https://arxiv.org/abs/2602.05373) - Long-form speech understanding method using speech summarization tokens for high-ratio compression in large speech language models.
- **PARSA-Bench** (2026), Ranjbar Kalahroodi et al. [pdf](https://arxiv.org/abs/2603.14456) - Comprehensive Persian audio-language benchmark spanning 16 tasks across speech understanding, paralinguistics, and culturally grounded audio reasoning.
- **EchoMind** (2025), Zhou et al. [pdf](https://arxiv.org/abs/2510.22758) - Interrelated multi-level benchmark for empathetic speech language models covering content understanding, vocal cues, reasoning, and response generation.
- **SpeechLLM-as-Judges: Towards General and Interpretable Speech Quality Evaluation** (2025), Wang et al. [pdf](https://arxiv.org/abs/2510.14664) - Introduces SpeechEval and SQ-LLM for structured multilingual speech quality evaluation, comparison, improvement suggestion, and deepfake-aware judging.
- **VoiceAgentBench** (2025), Jain et al. [pdf](https://arxiv.org/abs/2510.07978) [code](https://github.com/ola-krutrim/VoiceAgentBench) - Agentic speech benchmark for tool use, multilingual workflows, multi-turn dialogue, and safety evaluation.
- **AudioMarathon: A Comprehensive Benchmark for Long-Context Audio Understanding and Efficiency in Audio LLMs** (2025), He et al. [pdf](https://arxiv.org/abs/2510.07293) - Long-context benchmark for audio LLMs covering 90 to 300 second inputs, multi-domain reasoning, and inference-efficiency trade-offs.
- **VoxRole** (2025), Wu et al. [pdf](https://arxiv.org/abs/2509.03940) - Comprehensive benchmark for speech-based role-playing agents with long-term persona consistency evaluation across 13,335 multi-turn dialogues.
- **CS3-Bench** (2025), Liu et al. [pdf](https://arxiv.org/abs/2510.07881) - Benchmark for Mandarin-English code-switching speech-to-speech systems with QA and open-ended interaction evaluation.
- **MTalk-Bench** (2025), Du et al. [pdf](https://arxiv.org/abs/2508.18240) [code](https://github.com/FreedomIntelligence/MTalk-Bench) - Multi-turn speech-to-speech benchmark covering semantic, paralinguistic, and ambient-sound abilities with arena and rubric protocols.
- **CCFQA: A Benchmark for Cross-Lingual and Cross-Modal Speech and Text Factuality Evaluation** (2025), Du et al. [pdf](https://arxiv.org/abs/2508.07295) - Factuality benchmark with parallel speech-text questions across eight languages for evaluating multilingual multimodal models.
- **SpeechR** (2025), Yang et al. [pdf](https://arxiv.org/abs/2508.02018) - Benchmark for speech reasoning in large audio-language models across factual retrieval, procedural inference, and normative judgment.
- **WildSpeech-Bench** (2025), Zhang et al. [pdf](https://arxiv.org/abs/2506.21875) - In-the-wild benchmark for end-to-end speech LLMs with query-aware evaluation over speech-specific phenomena and realistic spoken chat.
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

- **Automatic Speech Recognition in the Modern Era: Architectures, Training, and Evaluation** (2025), [pdf](https://arxiv.org/abs/2510.12827) - Survey of modern ASR architectures, training pipelines, evaluation practices, and open challenges.
- **Towards General Auditory Intelligence: Large Multimodal Models for Machine Listening and Speaking** (2025), [pdf](https://arxiv.org/abs/2511.01299) - Survey of large multimodal auditory models spanning machine listening, speaking, and audio-visual understanding.
- **Recent Advances in Speech Language Models: A Survey (ACL 2025)** (2025), ACL, [pdf](https://aclanthology.org/2025.acl-long.682.pdf) - ACL 2025 SpeechLM survey on architectures, training, evaluation and challenges.
- **On The Landscape of Spoken Language Models** (2025), [pdf](https://arxiv.org/pdf/2504.08528) - SLM survey unifying terminology and evaluation perspectives across pure-speech LM, speech-text hybrid, and end-to-end dialogue.
- **Towards Controllable Speech Synthesis in the Era of Large Language Models: A Survey** (2024), Li et al. [pdf](https://arxiv.org/abs/2412.06602) - Survey on controllable TTS with LLM/diffusion/natural language control.
- **A Survey on Speech Large Language Models for Understanding** (2024), Xu et al. [pdf](https://arxiv.org/abs/2410.18908) - Survey and taxonomy of Speech LLM for understanding.

---

## Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) to learn how to submit new entries.
