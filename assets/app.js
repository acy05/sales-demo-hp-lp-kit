(function () {
  const botProfiles = {
    "ai-secretary": {
      name: "AIDEA Ops 相談窓口",
      subline: "AI業務チーム化する範囲を整理",
      greeting: "こんにちは。問い合わせ整理、営業準備、社内確認、レポート化など、まずAI業務チームに渡したい作業を1つ教えてください。人の判断を残した導入範囲に整理します。",
      quick: ["何から始めるべき？", "人の確認は残せる？", "導入までの流れ"],
      rules: [
        {
          keys: ["料金", "価格", "費用", "予算"],
          reply: "費用はAI業務チームに渡す作業数、参照する社内資料、承認フローの複雑さで変わります。最初は1業務に絞り、設計と運用改善を含めて小さく始める提案が現実的です。"
        },
        {
          keys: ["自動", "できる", "業務", "faq", "何から", "始める"],
          reply: "始めやすいのは、問い合わせ分類、返信下書き、営業準備、社内FAQ検索、週次レポート化です。判断や契約条件の確定は人に残し、AIは下準備に限定すると運用しやすくなります。"
        },
        {
          keys: ["流れ", "導入", "期間", "進め方"],
          reply: "流れは 1. 業務棚卸し、2. AIへ渡す作業の選定、3. 人の確認条件の設計、4. 小さな業務で試験運用、5. ログを見ながら改善です。最初から全社展開せず、1業務で型を作ります。"
        },
        {
          keys: ["人", "確認", "承認", "判断", "残せる"],
          reply: "残せます。AIDEA Opsのデモでは、AIは整理・検索・下書き・記録までを担当し、金額、契約、例外対応、最終送信は人が確認する前提にしています。"
        }
      ],
      fallback: "内容を確認しました。まずは頻度が高く、判断よりも整理が多い業務から選ぶと、AI業務チーム化の効果を検証しやすくなります。"
    },
    salon: {
      name: "LUMINA予約前相談",
      subline: "髪の悩みから初回メニューを整理",
      greeting: "ご来店前の相談を承ります。髪の悩み、希望時期、メニュー未定かどうかを入力してください。スタッフ確認へ渡しやすい形に整理します。",
      quick: ["初回メニューを相談", "空き枠を確認したい", "料金を知りたい"],
      rules: [
        {
          keys: ["初回", "メニュー", "相談", "おすすめ"],
          reply: "初回はカウンセリング付きのカット、カラー履歴確認、集中ケアの候補から整理します。髪質、悩み、普段のセット時間を聞き、担当者が確認しやすい内容にまとめます。"
        },
        {
          keys: ["予約", "今日", "明日", "空き"],
          reply: "このデモでは空き枠の自動確認前までを再現しています。希望日時、希望メニュー、メニュー未定の場合の相談内容を受け取り、スタッフ確認へつなげる設計です。"
        },
        {
          keys: ["料金", "価格", "費用"],
          reply: "価格表、初回割引、追加料金が出る条件を案内できます。高単価メニューは事前カウンセリングに誘導して、ミスマッチを減らします。"
        }
      ],
      fallback: "ありがとうございます。希望日時・悩み・予算感を送っていただくと、予約前に必要な確認事項をまとめます。"
    },
    reform: {
      name: "RENOVA概算相談",
      subline: "現地調査前の相談票を整理",
      greeting: "リフォーム内容を伺います。場所、築年数、困っていること、希望時期を入力してください。現地調査前に担当者が確認しやすい相談票にまとめます。",
      quick: ["概算を知りたい", "現地調査の流れ", "補助金は使える？"],
      rules: [
        {
          keys: ["概算", "見積", "金額", "費用", "価格"],
          reply: "概算は工事範囲、設備グレード、現地状況で変わります。このデモでは、必要情報を先に集めて、営業担当が返答しやすい見積もり相談票を作ります。"
        },
        {
          keys: ["現地", "調査", "訪問", "流れ"],
          reply: "現地調査は、相談内容の確認、寸法確認、写真記録、希望予算のすり合わせの順で案内します。チャットで事前情報を集めると当日の時間を短縮できます。"
        },
        {
          keys: ["補助", "助成", "制度"],
          reply: "補助金は地域・年度・工事内容で条件が変わるため、チャットでは対象になりそうな工事かを一次確認し、最終判断は担当者確認にしています。"
        }
      ],
      fallback: "承知しました。工事場所、希望時期、写真の有無を整理して担当者へ渡す流れにできます。"
    },
    chatbot: {
      name: "ChatFlow導入診断",
      subline: "FAQと有人引き継ぎ条件を整理",
      greeting: "今の問い合わせ対応で困っていることを教えてください。FAQ回答、資料請求、有人引き継ぎのどこから導入すべきか整理します。",
      quick: ["導入効果を知りたい", "人の対応は残せる？", "どんな業種向け？"],
      rules: [
        {
          keys: ["効果", "成果", "メリット", "削減"],
          reply: "代表的な効果は、営業時間外の受付、同じ質問への回答削減、相談内容の事前整理、資料請求率の改善です。営業では返信速度と取りこぼし防止を見せると伝わりやすいです。"
        },
        {
          keys: ["人", "有人", "担当", "残せる"],
          reply: "はい。最終回答、契約、個人情報の確認は人に引き継ぐ設計にできます。チャットは一次受付と整理に限定すると、導入の不安を抑えられます。"
        },
        {
          keys: ["業種", "向け", "店舗", "会社"],
          reply: "店舗予約、士業相談、リフォーム、不動産、スクール、採用、BtoB資料請求に向いています。共通点は「よくある質問」と「相談前ヒアリング」が多いことです。"
        }
      ],
      fallback: "導入判断では、月間問い合わせ数、よくある質問の数、受付後の人の作業時間を見るのが有効です。"
    },
    sns: {
      name: "SocialCraft SNS診断",
      subline: "投稿停止の原因を切り分け",
      greeting: "SNS運用の状況を教えてください。投稿頻度、売りたい商品、止まっている理由から7日分の制作計画に落とします。",
      quick: ["投稿案がほしい", "売上につなげたい", "運用が続かない"],
      rules: [
        {
          keys: ["投稿", "ネタ", "案", "内容"],
          reply: "投稿案は、悩み訴求、比較、事例、購入前チェック、よくある失敗の5型から作れます。LPでは初回診断への導線として見せると強いです。"
        },
        {
          keys: ["売上", "cv", "購入", "問い合わせ"],
          reply: "売上導線は、プロフィール、固定投稿、ストーリーズ、LPの順に整えると改善しやすいです。チャットで商品情報を聞き、必要な導線を診断できます。"
        },
        {
          keys: ["続か", "継続", "止ま", "忙しい"],
          reply: "続かない場合は、投稿数よりも週1回の型化を優先します。チャットでネタ出し、下書き依頼、改善点の受付までデモできます。"
        }
      ],
      fallback: "状況を受け取りました。まずは商品、ターゲット、投稿できる頻度を整理すると、運用プランに落とせます。"
    },
    recruit: {
      name: "Harbor応募前相談",
      subline: "働き方と選考前の不安を整理",
      greeting: "募集内容について質問できます。職種、働き方、未経験可否、選考の流れなど、応募前に気になる点を入力してください。",
      quick: ["未経験でも応募できる？", "働き方を知りたい", "選考の流れ"],
      rules: [
        {
          keys: ["未経験", "初心者", "経験"],
          reply: "未経験向けには、研修内容、最初に任せる仕事、必要な姿勢を案内します。応募前の不安を減らすことで離脱を抑えられます。"
        },
        {
          keys: ["働き方", "勤務", "時間", "リモート"],
          reply: "勤務時間、出社頻度、残業の考え方、評価制度を整理して案内できます。曖昧なまま応募させない設計が採用LPでは重要です。"
        },
        {
          keys: ["選考", "流れ", "面接", "応募"],
          reply: "選考は、応募、書類確認、一次面談、最終面談、内定の流れとして案内できます。必要書類や面談前に見てほしい資料も送れます。"
        }
      ],
      fallback: "質問ありがとうございます。応募前によくある不安をチャットで受け止め、必要な説明や応募フォームへ案内できます。"
    }
  };

  function initIcons() {
    if (window.lucide && typeof window.lucide.createIcons === "function") {
      window.lucide.createIcons();
    }
  }

  function initMenu() {
    const toggle = document.querySelector("[data-menu-toggle]");
    const nav = document.querySelector("[data-nav]");
    if (!toggle || !nav) return;
    toggle.addEventListener("click", () => {
      nav.classList.toggle("is-open");
      const expanded = nav.classList.contains("is-open");
      toggle.setAttribute("aria-expanded", String(expanded));
    });
  }

  function getReply(profile, text) {
    const source = text.toLowerCase();
    const matched = profile.rules.find((rule) => {
      return rule.keys.some((key) => source.includes(key.toLowerCase()));
    });
    return matched ? matched.reply : profile.fallback;
  }

  function appendMessage(body, type, text) {
    const message = document.createElement("div");
    message.className = "chat-message " + type;
    message.textContent = text;
    body.appendChild(message);
    body.scrollTop = body.scrollHeight;
  }

  function initChatbot() {
    const target = document.querySelector("[data-chatbot]");
    if (!target) return;
    const profileKey = target.dataset.bot || "chatbot";
    const profile = botProfiles[profileKey] || botProfiles.chatbot;

    const launcher = document.createElement("button");
    launcher.className = "chat-launcher";
    launcher.type = "button";
    launcher.setAttribute("aria-label", "チャットを開く");
    launcher.innerHTML = '<i data-lucide="message-circle"></i>';

    const panel = document.createElement("section");
    panel.className = "chat-panel";
    panel.setAttribute("aria-label", profile.name);
    panel.innerHTML = `
      <div class="chat-header">
        <div>
          <strong>${profile.name}</strong>
          <span>${profile.subline}</span>
        </div>
        <button class="chat-close" type="button" aria-label="チャットを閉じる">
          <i data-lucide="x"></i>
        </button>
      </div>
      <div class="chat-body" data-chat-body></div>
      <div class="chat-quick" data-chat-quick></div>
      <form class="chat-compose" data-chat-form>
        <input name="message" type="text" autocomplete="off" placeholder="質問を入力" aria-label="質問を入力">
        <button type="submit" aria-label="送信"><i data-lucide="send"></i></button>
      </form>
    `;

    document.body.appendChild(launcher);
    document.body.appendChild(panel);

    const body = panel.querySelector("[data-chat-body]");
    const quick = panel.querySelector("[data-chat-quick]");
    const form = panel.querySelector("[data-chat-form]");
    const input = form.querySelector("input");

    appendMessage(body, "bot", profile.greeting);
    profile.quick.forEach((label) => {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = label;
      button.addEventListener("click", () => sendMessage(label));
      quick.appendChild(button);
    });

    function openChat() {
      panel.classList.add("is-open");
      launcher.setAttribute("aria-label", "チャットを表示中");
      input.focus();
    }

    function closeChat() {
      panel.classList.remove("is-open");
      launcher.setAttribute("aria-label", "チャットを開く");
    }

    function sendMessage(text) {
      const clean = text.trim();
      if (!clean) return;
      appendMessage(body, "user", clean);
      window.setTimeout(() => {
        appendMessage(body, "bot", getReply(profile, clean));
      }, 220);
    }

    launcher.addEventListener("click", () => {
      if (panel.classList.contains("is-open")) {
        closeChat();
      } else {
        openChat();
      }
    });

    panel.querySelector(".chat-close").addEventListener("click", closeChat);

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const value = input.value;
      input.value = "";
      sendMessage(value);
    });

    document.querySelectorAll("[data-open-chat]").forEach((button) => {
      button.addEventListener("click", openChat);
    });

    initIcons();
  }

  function initDemoForms() {
    document.querySelectorAll("[data-demo-form]").forEach((form) => {
      const button = form.querySelector("button[type='submit']");
      const original = button ? button.innerHTML : "";
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        if (!button) return;
        button.innerHTML = '<i data-lucide="check"></i> 送信デモ完了';
        button.disabled = true;
        initIcons();
        window.setTimeout(() => {
          button.innerHTML = original;
          button.disabled = false;
          form.reset();
          initIcons();
        }, 1800);
      });
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initMenu();
    initDemoForms();
    initChatbot();
    initIcons();
  });
})();
