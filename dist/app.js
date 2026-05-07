const STORAGE_KEY = "life-literacy-progress-v2";
const SETTINGS_KEY = "life-literacy-settings-v1";
const DEFAULT_DAILY_COUNT = 5;
const AUDIO_BASE = "./audio";

const SCENES = [
  {
    id: "health",
    name: "药品健康",
    short: "药品",
    task: "今天在药盒或说明上找：饭前、饭后、过期、用量。",
  },
  {
    id: "phone",
    name: "手机付款",
    short: "手机",
    task: "今天在手机页面上找：确认、取消、返回、支付。",
  },
  {
    id: "hospital",
    name: "医院看病",
    short: "医院",
    task: "今天在医院、药单或挂号页面里找：挂号、缴费、取药。",
  },
  {
    id: "travel",
    name: "出门坐车",
    short: "出门",
    task: "今天在车站或路牌上找：入口、出口、上车、下车。",
  },
  {
    id: "food",
    name: "买菜食品",
    short: "食品",
    task: "今天在食品包装或菜市场牌子上找：价格、日期、冷藏。",
  },
  {
    id: "home",
    name: "家里生活",
    short: "家里",
    task: "今天在家里的电器、门窗或说明上找：开、关、热水、危险。",
  },
];

const WORDS = [
  { id: "yao", scene: "health", text: "药", speak: "药", example: "这个字常在药盒上看到。" },
  { id: "pian", scene: "health", text: "片", speak: "片", example: "一片药、两片药。" },
  { id: "ci", scene: "health", text: "次", speak: "次", example: "一天三次。" },
  { id: "f_qian", scene: "health", text: "饭前", speak: "饭前", example: "吃饭以前。" },
  { id: "f_hou", scene: "health", text: "饭后", speak: "饭后", example: "吃饭以后。" },
  { id: "guoqi", scene: "health", text: "过期", speak: "过期", example: "过了日期，不要再用。" },
  { id: "yongliang", scene: "health", text: "用量", speak: "用量", example: "一次吃多少。" },
  { id: "koufu", scene: "health", text: "口服", speak: "口服", example: "从嘴里吃下去。" },
  { id: "jinji", scene: "health", text: "禁忌", speak: "禁忌", example: "不适合用的情况。" },
  { id: "chufang", scene: "health", text: "处方", speak: "处方", example: "医生开的药单。" },

  { id: "saoma", scene: "phone", text: "扫码", speak: "扫码", example: "打开手机扫一下。" },
  { id: "zhifu", scene: "phone", text: "支付", speak: "支付", example: "付款时会看到。" },
  { id: "queren", scene: "phone", text: "确认", speak: "确认", example: "确定要这样做。" },
  { id: "quxiao", scene: "phone", text: "取消", speak: "取消", example: "不做这一步。" },
  { id: "fanhui", scene: "phone", text: "返回", speak: "返回", example: "回到上一页。" },
  { id: "wancheng", scene: "phone", text: "完成", speak: "完成", example: "事情已经做好了。" },
  { id: "shuru", scene: "phone", text: "输入", speak: "输入", example: "把数字或字打进去。" },
  { id: "mima", scene: "phone", text: "密码", speak: "密码", example: "付款或登录要用。" },
  { id: "yue", scene: "phone", text: "余额", speak: "余额", example: "还剩多少钱。" },
  { id: "shanchu", scene: "phone", text: "删除", speak: "删除", example: "把不要的内容去掉。" },

  { id: "guahao", scene: "hospital", text: "挂号", speak: "挂号", example: "看病前先挂号。" },
  { id: "jiaofei", scene: "hospital", text: "缴费", speak: "缴费", example: "去交钱。" },
  { id: "quyao", scene: "hospital", text: "取药", speak: "取药", example: "到窗口拿药。" },
  { id: "menzhen", scene: "hospital", text: "门诊", speak: "门诊", example: "白天去医院看病。" },
  { id: "jizhen", scene: "hospital", text: "急诊", speak: "急诊", example: "情况急时去这里。" },
  { id: "jiancha", scene: "hospital", text: "检查", speak: "检查", example: "医生让你去查一查。" },
  { id: "chuangkou", scene: "hospital", text: "窗口", speak: "窗口", example: "办事或取药的地方。" },
  { id: "paidui", scene: "hospital", text: "排队", speak: "排队", example: "按顺序等着。" },
  { id: "keshi", scene: "hospital", text: "科室", speak: "科室", example: "不同病去不同地方。" },
  { id: "baogao", scene: "hospital", text: "报告", speak: "报告", example: "检查后出的结果。" },

  { id: "rukou", scene: "travel", text: "入口", speak: "入口", example: "从这里进去。" },
  { id: "chukou", scene: "travel", text: "出口", speak: "出口", example: "从这里出来。" },
  { id: "zuo", scene: "travel", text: "左", speak: "左", example: "左边。" },
  { id: "you", scene: "travel", text: "右", speak: "右", example: "右边。" },
  { id: "weishengjian", scene: "travel", text: "卫生间", speak: "卫生间", example: "上厕所的地方。" },
  { id: "chezhan", scene: "travel", text: "车站", speak: "车站", example: "等车的地方。" },
  { id: "shangche", scene: "travel", text: "上车", speak: "上车", example: "坐到车上去。" },
  { id: "xiache", scene: "travel", text: "下车", speak: "下车", example: "从车上下来。" },
  { id: "huancheng", scene: "travel", text: "换乘", speak: "换乘", example: "换另一辆车。" },
  { id: "tingzhi", scene: "travel", text: "停止", speak: "停止", example: "停下来，不要继续。" },

  { id: "jiage", scene: "food", text: "价格", speak: "价格", example: "这个东西多少钱。" },
  { id: "riqi", scene: "food", text: "日期", speak: "日期", example: "哪一天生产或到期。" },
  { id: "baozhiqi", scene: "food", text: "保质期", speak: "保质期", example: "能放多久。" },
  { id: "shengchan", scene: "food", text: "生产", speak: "生产", example: "什么时候做出来。" },
  { id: "lengcang", scene: "food", text: "冷藏", speak: "冷藏", example: "要放进冰箱。" },
  { id: "jiare", scene: "food", text: "加热", speak: "加热", example: "吃之前要弄热。" },
  { id: "zhongliang", scene: "food", text: "重量", speak: "重量", example: "有多重。" },
  { id: "xinxian", scene: "food", text: "新鲜", speak: "新鲜", example: "刚买的、没坏的。" },
  { id: "youhui", scene: "food", text: "优惠", speak: "优惠", example: "便宜一些。" },
  { id: "lingshou", scene: "food", text: "零售", speak: "零售", example: "一个一个卖。" },

  { id: "kai", scene: "home", text: "开", speak: "开", example: "打开门、打开灯。" },
  { id: "guan", scene: "home", text: "关", speak: "关", example: "关门、关灯。" },
  { id: "reshui", scene: "home", text: "热水", speak: "热水", example: "热的水，小心烫。" },
  { id: "lengshui", scene: "home", text: "冷水", speak: "冷水", example: "凉的水。" },
  { id: "weixian", scene: "home", text: "危险", speak: "危险", example: "要小心，不能乱碰。" },
  { id: "xiaoxin", scene: "home", text: "小心", speak: "小心", example: "慢一点，注意安全。" },
  { id: "chongdian", scene: "home", text: "充电", speak: "充电", example: "给手机接上电。" },
  { id: "kaiguan", scene: "home", text: "开关", speak: "开关", example: "控制灯或电器。" },
  { id: "qingjie", scene: "home", text: "清洁", speak: "清洁", example: "打扫干净。" },
  { id: "tongfeng", scene: "home", text: "通风", speak: "通风", example: "开窗让空气进来。" },
];

const GUIDE_AUDIO = {
  intro: "intro",
  start: "start",
  reviewStart: "review-start",
  chooseWord: "choose-word",
  wrongReview: "wrong-review",
  correct: "correct",
  done: "done",
  noReview: "no-review",
  count3: "count-3",
  count5: "count-5",
  count8: "count-8",
  count10: "count-10",
  sceneHealth: "scene-health",
  scenePhone: "scene-phone",
  sceneHospital: "scene-hospital",
  sceneTravel: "scene-travel",
  sceneFood: "scene-food",
  sceneHome: "scene-home",
};

const app = document.querySelector("#app");
const pageTitle = document.querySelector("#pageTitle");
const pageHint = document.querySelector("#pageHint");
const backButton = document.querySelector("#backButton");

let route = { name: "home" };
let session = null;
let spokenDone = false;
let currentAudio = null;

function loadJson(key, fallback) {
  try {
    const parsed = JSON.parse(localStorage.getItem(key) || "null");
    return parsed && typeof parsed === "object" ? parsed : fallback;
  } catch {
    return fallback;
  }
}

function saveJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function loadProgress() {
  return loadJson(STORAGE_KEY, {});
}

function saveProgress(progress) {
  saveJson(STORAGE_KEY, progress);
}

function loadSettings() {
  const settings = loadJson(SETTINGS_KEY, {});
  return {
    dailyCount: Number(settings.dailyCount) || DEFAULT_DAILY_COUNT,
    heardIntro: Boolean(settings.heardIntro),
  };
}

function saveSettings(patch) {
  saveJson(SETTINGS_KEY, { ...loadSettings(), ...patch });
}

function getRecord(id) {
  const progress = loadProgress();
  return progress[id] || { seen: 0, correct: 0, wrong: 0, review: false, last: "" };
}

function updateRecord(id, patch) {
  const progress = loadProgress();
  progress[id] = { ...getRecord(id), ...patch };
  saveProgress(progress);
}

function browserSpeak(text, options = {}) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "zh-CN";
  utterance.rate = options.rate || 0.82;
  window.speechSynthesis.speak(utterance);
}

function playAudio(src, fallbackText, options = {}) {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
  currentAudio = new Audio(src);
  currentAudio.playbackRate = options.rate || 1;
  currentAudio.play().catch(() => browserSpeak(fallbackText, options));
}

function speakWord(word) {
  playAudio(`${AUDIO_BASE}/words/${word.id}.wav`, word.speak);
}

function speakGuide(key, fallbackText) {
  playAudio(`${AUDIO_BASE}/guide/${GUIDE_AUDIO[key]}.wav`, fallbackText, { rate: 0.96 });
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function pickTodayItems() {
  const dailyCount = loadSettings().dailyCount;
  const reviewItems = WORDS.filter((word) => getRecord(word.id).review);
  const newItems = WORDS.filter((word) => !getRecord(word.id).seen && !getRecord(word.id).review);
  const oldItems = WORDS.filter((word) => getRecord(word.id).seen && !getRecord(word.id).review);
  return [...reviewItems, ...newItems, ...oldItems].slice(0, dailyCount);
}

function pickReviewItems() {
  return WORDS.filter((word) => getRecord(word.id).review).slice(0, Math.max(8, loadSettings().dailyCount));
}

function setHeader(title, hint, canGoBack = true) {
  pageTitle.textContent = title;
  pageHint.textContent = hint;
  backButton.classList.toggle("hidden", !canGoBack);
}

function setRoute(nextRoute) {
  route = nextRoute;
  render();
}

function startSession(items, title, hint, mode = "today") {
  if (!items.length) {
    renderEmptyReview();
    return;
  }
  spokenDone = false;
  session = {
    title,
    hint,
    mode,
    items,
    index: 0,
    phase: "listen",
    correct: 0,
    wrong: 0,
    currentOptions: [],
    feedback: "",
  };
  setRoute({ name: "session" });
}

function render() {
  if (route.name === "home") renderHome();
  if (route.name === "session") renderSession();
  if (route.name === "scenes") renderScenes();
  if (route.name === "sceneDetail") renderSceneDetail(route.sceneId);
  if (route.name === "settings") renderSettings();
}

function renderHome() {
  setHeader("生活认字", "点一下就开始", false);
  session = null;
  spokenDone = false;

  const progress = loadProgress();
  const settings = loadSettings();
  const learnedCount = WORDS.filter((word) => progress[word.id]?.seen).length;
  const reviewCount = WORDS.filter((word) => progress[word.id]?.review).length;
  const todayCount = pickTodayItems().length;
  const introClass = settings.heardIntro ? "intro-card compact" : "intro-card";

  app.innerHTML = `
    <section class="${introClass}">
      <button class="voice-help" data-action="intro" aria-label="听我说">
        <span class="voice-icon">▶</span>
        <span>听我说</span>
      </button>
      <p>${settings.heardIntro ? "需要时再听一遍。" : "第一次用，先点这里听提示。"}</p>
    </section>

    <button class="start-button" data-action="start" aria-label="开始学习">
      <span class="start-icon">▶</span>
      <strong>开始</strong>
      <span>今天 ${todayCount} 个</span>
    </button>

    <section class="status-row" aria-label="学习状态">
      <div class="status-cell"><b>${learnedCount}</b><span>学过</span></div>
      <div class="status-cell"><b>${reviewCount}</b><span>复习</span></div>
      <div class="status-cell"><b>${WORDS.length}</b><span>字词</span></div>
    </section>

    <section class="quick-row" aria-label="更多入口">
      <button class="quick-button" data-action="review"><span>↻</span><b>复习</b></button>
      <button class="quick-button" data-action="scenes"><span>▦</span><b>场景</b></button>
      <button class="quick-button" data-action="settings"><span>⚙</span><b>设置</b></button>
    </section>
  `;

  app.querySelector('[data-action="intro"]').addEventListener("click", () => {
    saveSettings({ heardIntro: true });
    speakGuide("intro", "点中间的大按钮开始学习。听到字以后，看一看。认识就点绿色对勾。不认识就点红色叉。");
    renderHome();
  });
  app.querySelector('[data-action="start"]').addEventListener("click", () => {
    saveSettings({ heardIntro: true });
    speakGuide("start", "开始学习。先听读音，再看字。");
    startSession(pickTodayItems(), "今日学习", `今天 ${todayCount} 个`);
  });
  app.querySelector('[data-action="review"]').addEventListener("click", () => {
    const reviewItems = pickReviewItems();
    if (reviewItems.length) {
      speakGuide("reviewStart", "开始复习不会的字。");
      startSession(reviewItems, "复习", "慢慢来", "review");
    } else {
      renderEmptyReview();
    }
  });
  app.querySelector('[data-action="scenes"]').addEventListener("click", () => setRoute({ name: "scenes" }));
  app.querySelector('[data-action="settings"]').addEventListener("click", () => setRoute({ name: "settings" }));
}

function renderSession() {
  setHeader(session.title, session.hint);

  if (session.phase === "done") {
    renderDone();
    return;
  }

  const item = session.items[session.index];
  const stepText = `${session.index + 1} / ${session.items.length}`;

  if (session.phase === "listen") {
    app.innerHTML = `
      <section class="card listen-card">
        <div class="step-line"><span>${stepText}</span><span>${sceneName(item.scene)}</span></div>
        <div class="listen-symbol">🔊</div>
        <p>先听一遍</p>
        <button class="large-action" data-action="again">再听一次</button>
        <button class="large-action secondary" data-action="show">看这个字</button>
      </section>
    `;

    app.querySelector('[data-action="again"]').addEventListener("click", () => speakWord(item));
    app.querySelector('[data-action="show"]').addEventListener("click", () => {
      session.phase = "learn";
      renderSession();
    });
    setTimeout(() => {
      speakWord(item);
      setTimeout(() => {
        if (session?.phase === "listen") {
          session.phase = "learn";
          renderSession();
        }
      }, 900);
    }, 120);
    return;
  }

  if (session.phase === "quiz") {
    renderQuiz(item, stepText);
    return;
  }

  app.innerHTML = `
    <section class="card word-card">
      <div class="step-line"><span>${stepText}</span><span>${sceneName(item.scene)}</span></div>
      <div class="big-word ${item.text.length > 1 ? "phrase" : ""}">${item.text}</div>
      <button class="large-action" data-action="speak">🔊 听读音</button>
      <div class="example-box">${item.example}</div>
      <div class="answer-grid">
        <button class="judge-button yes" data-action="know" aria-label="认识">
          <span>✓</span>
          <b>认识</b>
        </button>
        <button class="judge-button no" data-action="unknown" aria-label="不认识">
          <span>×</span>
          <b>不认识</b>
        </button>
      </div>
    </section>
  `;

  app.querySelector('[data-action="speak"]').addEventListener("click", () => speakWord(item));
  app.querySelector('[data-action="know"]').addEventListener("click", () => {
    speakGuide("chooseWord", "选出刚才这个字。");
    session.phase = "quiz";
    session.currentOptions = makeOptions(item);
    session.feedback = "";
    renderSession();
  });
  app.querySelector('[data-action="unknown"]').addEventListener("click", () => {
    speakGuide("wrongReview", "没关系，放进复习。");
    markWrong(item.id);
    session.wrong += 1;
    nextItem();
  });
}

function renderQuiz(item, stepText) {
  app.innerHTML = `
    <section class="card word-card">
      <div class="step-line"><span>${stepText}</span><span>选一选</span></div>
      <button class="large-action" data-action="speak">🔊 再听一遍</button>
      <div class="choice-grid">
        ${session.currentOptions
          .map(
            (option) => `
              <button class="choice-button" data-choice="${option.id}">${option.text}</button>
            `,
          )
          .join("")}
      </div>
      ${session.feedback ? `<div class="feedback ${session.feedbackType === "bad" ? "bad" : ""}">${session.feedback}</div>` : ""}
    </section>
  `;

  app.querySelector('[data-action="speak"]').addEventListener("click", () => speakWord(item));
  app.querySelectorAll("[data-choice]").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.choice === item.id) {
        markCorrect(item.id);
        session.correct += 1;
        session.feedback = "答对了";
        session.feedbackType = "good";
        speakGuide("correct", "答对了。");
      } else {
        markWrong(item.id);
        session.wrong += 1;
        session.feedback = "放进复习";
        session.feedbackType = "bad";
        speakGuide("wrongReview", "没关系，放进复习。");
      }
      renderSession();
      setTimeout(nextItem, 750);
    });
  });
}

function renderDone() {
  if (!spokenDone) {
    spokenDone = true;
    setTimeout(() => speakGuide("done", "今天学完了，可以休息了。"), 150);
  }
  const tasks = [...new Set(session.items.map((item) => sceneTask(item.scene)))].slice(0, 2);
  app.innerHTML = `
    <section class="card done-card">
      <div class="done-icon">✓</div>
      <h2>今天学完了</h2>
      <p>答对 ${session.correct} 个，放进复习 ${session.wrong} 个。</p>
    </section>
    <section class="card task-box">
      <h2>今天找一找</h2>
      <p>${tasks.join(" ")}</p>
    </section>
    <button class="large-action" data-action="home">回首页</button>
  `;

  app.querySelector('[data-action="home"]').addEventListener("click", () => setRoute({ name: "home" }));
}

function renderScenes() {
  setHeader("生活场景", "一组一组练");
  app.innerHTML = `
    <section class="scene-list">
      ${SCENES.map((scene) => {
        const sceneWords = WORDS.filter((word) => word.scene === scene.id);
        return `
          <button class="scene-button" data-scene="${scene.id}">
            <strong>${scene.name}</strong>
            <span>${sceneWords.map((word) => word.text).join("、")}</span>
          </button>
        `;
      }).join("")}
    </section>
  `;

  app.querySelectorAll("[data-scene]").forEach((button) => {
    button.addEventListener("click", () => setRoute({ name: "sceneDetail", sceneId: button.dataset.scene }));
  });
}

function renderSceneDetail(sceneId) {
  const scene = SCENES.find((item) => item.id === sceneId);
  const sceneWords = WORDS.filter((word) => word.scene === sceneId);
  setHeader(scene.name, "10 个字词");
  app.innerHTML = `
    <section class="card">
      <div class="word-list">
        ${sceneWords.map((word) => `<button class="word-chip" data-word="${word.id}">${word.text}</button>`).join("")}
      </div>
    </section>
    <section class="card task-box">
      <h2>现实里找</h2>
      <p>${scene.task}</p>
    </section>
    <button class="large-action" data-action="start">练这一组</button>
  `;

  app.querySelectorAll("[data-word]").forEach((button) => {
    button.addEventListener("click", () => {
      const word = WORDS.find((item) => item.id === button.dataset.word);
      speakWord(word);
    });
  });
  app.querySelector('[data-action="start"]').addEventListener("click", () => {
    speakGuide(`scene${scene.id[0].toUpperCase()}${scene.id.slice(1)}`, `开始练${scene.short}。`);
    startSession(sceneWords, scene.name, "10 个字词", "scene");
  });
}

function renderSettings() {
  const settings = loadSettings();
  setHeader("设置", "每天学几个");
  app.innerHTML = `
    <section class="card settings-card">
      <h2>每天学几个</h2>
      <div class="count-grid">
        ${[3, 5, 8, 10]
          .map(
            (count) => `
              <button class="count-button ${settings.dailyCount === count ? "active" : ""}" data-count="${count}">
                ${count}
              </button>
            `,
          )
          .join("")}
      </div>
      <p>默认 5 个。累的时候选 3 个，状态好再多学。</p>
    </section>
    <section class="card install-card">
      <h2>放到手机</h2>
      <p>部署成固定链接后，用手机浏览器打开，再添加到手机桌面。</p>
    </section>
  `;

  app.querySelectorAll("[data-count]").forEach((button) => {
    button.addEventListener("click", () => {
      const dailyCount = Number(button.dataset.count);
      saveSettings({ dailyCount });
      speakGuide(`count${dailyCount}`, `以后每天学${dailyCount}个。`);
      renderSettings();
    });
  });
}

function renderEmptyReview() {
  setHeader("复习", "现在没有");
  speakGuide("noReview", "现在没有要复习的字，可以开始今天学习。");
  app.innerHTML = `
    <section class="card empty-state">
      <div>
        <h2>现在没有错题</h2>
        <p>可以先去今日学习。</p>
      </div>
    </section>
    <button class="large-action" data-action="today">开始</button>
  `;
  app.querySelector('[data-action="today"]').addEventListener("click", () => {
    startSession(pickTodayItems(), "今日学习", `今天 ${pickTodayItems().length} 个`);
  });
}

function makeOptions(item) {
  const sameScene = WORDS.filter((word) => word.id !== item.id && word.scene === item.scene);
  const otherWords = WORDS.filter((word) => word.id !== item.id && word.scene !== item.scene);
  const wrongOptions = [...shuffle(sameScene).slice(0, 1), ...shuffle(otherWords).slice(0, 1)];
  return shuffle([item, ...wrongOptions]);
}

function markCorrect(id) {
  const record = getRecord(id);
  updateRecord(id, {
    seen: record.seen + 1,
    correct: record.correct + 1,
    review: false,
    last: new Date().toISOString(),
  });
}

function markWrong(id) {
  const record = getRecord(id);
  updateRecord(id, {
    seen: record.seen + 1,
    wrong: record.wrong + 1,
    review: true,
    last: new Date().toISOString(),
  });
}

function nextItem() {
  if (!session) return;
  if (session.index >= session.items.length - 1) {
    session.phase = "done";
  } else {
    session.index += 1;
    session.phase = "listen";
    session.currentOptions = [];
    session.feedback = "";
    session.feedbackType = "";
  }
  renderSession();
}

function sceneName(sceneId) {
  return SCENES.find((scene) => scene.id === sceneId)?.name || "";
}

function sceneTask(sceneId) {
  return SCENES.find((scene) => scene.id === sceneId)?.task || "";
}

backButton.addEventListener("click", () => {
  if (route.name === "sceneDetail") {
    setRoute({ name: "scenes" });
    return;
  }
  setRoute({ name: "home" });
});

render();
