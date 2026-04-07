# ViVa: A Video-Generative Value Model for Robot Reinforcement Learning

**ECCV 2026**

## Overview

This is the project page for ViVa, a video-generative value model that repurposes a pretrained video generator for robot reinforcement learning. ViVa jointly predicts future proprioception and a scalar value for the current state, grounding value estimation in anticipated embodiment dynamics.

## Authors

Jindi Lv, Hao Li, Jie Li, Yifei Nie, Fankun Kong, Yang Wang, Xiaofeng Wang, Zheng Zhu, Chaojun Ni, Qiuping Deng, Hengtao Li, Jiancheng Lv, Guan Huang

## Project Structure

```
├── assets/
│   ├── images/          # Paper figures
│   ├── videos/          # Qualitative result videos
│   │   ├── box_packaging/
│   │   ├── pants_folding/
│   │   ├── paper_organizing/
│   │   └── shirt_folding/
│   ├── bulma.min.css    # CSS framework
│   ├── index.css        # Custom styles
│   └── ...              # Other JS/CSS libraries
├── index.html           # Main webpage
├── script.js            # Interactive tab logic
├── metadata.json        # Paper metadata
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Website template

Adapted from [Nerfies](https://github.com/nerfies/nerfies.github.io).
