# 営業デモHP / LPセット

営業商談でそのまま見せるための静的デモサイト集です。

## 内容

- HPデモ3本
  - AI秘書・業務自動化HP
  - 美容サロン予約HP
  - リフォーム会社HP
- LPデモ3本
  - チャットボット導入LP
  - SNS運用代行LP
  - 採用強化LP
- 各デモページにチャットボットを実装

## ローカル確認

```bash
python3 -m http.server 4173 --bind 127.0.0.1
```

ブラウザで開く:

```text
http://127.0.0.1:4173/
```

## ファイル構成

```text
.
├── index.html
├── hp-ai-secretary.html
├── hp-salon-reserve.html
├── hp-reform-estimate.html
├── lp-chatbot.html
├── lp-sns-operation.html
├── lp-recruit.html
└── assets/
    ├── styles.css
    └── app.js
```
