import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Lang = "en" | "zh";

const en = {
  "gate.badge": "NEXARC // Access Terminal",
  "gate.hint": "Click the logo to enter",
  "gate.sub": "Initialize the ARC meme protocol",
  "gate.loading": "Establishing uplink…",
  "gate.enter": "Enter",

  "nav.home": "Home",
  "nav.about": "About",
  "nav.thesis": "Thesis",
  "nav.community": "Community",
  "nav.roadmap": "Roadmap",
  "nav.faq": "FAQ",
  "nav.buy": "Buy $NEXARC",

  "hero.badge": "Built on ARC",
  "hero.t1": "The Next",
  "hero.t2": "Meme on",
  "hero.t3": "ARC",
  "hero.p":
    "NEXARC is a community-driven memecoin built on ARC, bringing meme culture, creativity and community energy to the next chapter of the ecosystem.",
  "hero.telegram": "Join Telegram",
  "hero.x": "Follow on X",
  "hero.contract": "Contract",

  "about.label": "Identity // 01",
  "about.h": "What is",
  "about.q": "?",
  "about.p1a": "NEXARC is a community-driven memecoin built around a simple idea:",
  "about.p1b": " the next meme on ARC.",
  "about.eq1": "Next",
  "about.eq2": "Arc",
  "about.eq3": "The next meme",
  "about.p2":
    "The project is about building meme culture around the ARC ecosystem through community, creativity, humor and internet-native energy.",

  "thesis.label": "Thesis // 02",
  "thesis.h1": "The",
  "thesis.h2": "Thesis",
  "thesis.big": "Every chain needs a culture.",
  "thesis.suba": "ARC brings the infrastructure.",
  "thesis.subb": "NEXARC brings the memes.",
  "thesis.p1t": "Communities",
  "thesis.p1d": "People who show up every day, not just holders.",
  "thesis.p2t": "Inside Jokes",
  "thesis.p2d": "Language only the fam understands.",
  "thesis.p3t": "Characters",
  "thesis.p3d": "A mascot with a face, a vibe and a mission.",
  "thesis.p4t": "Movements",
  "thesis.p4d": "Culture that spreads faster than any roadmap.",
  "thesis.outro":
    "NEXARC wants to become one of the recognizable meme-native communities within the ARC ecosystem.",
  "thesis.f1": "Meme",
  "thesis.f2": "Community",
  "thesis.f3": "Attention",
  "thesis.f4": "Culture",
  "thesis.f5": "More Memes",

  "community.label": "Community // 03",
  "community.h1": "Powered by",
  "community.h2": "People",
  "community.p":
    "NEXARC is powered by its community. No promises, no roadmap theater — just memes, momentum and the people who show up.",
  "community.xd": "Memes, announcements and daily NEXARC energy.",
  "community.tgd": "The main hub. Where the fam actually lives.",
  "community.trade": "Trade on Radardex",

  "culture.label": "Culture // 04",
  "culture.h1": "Meme",
  "culture.h2": "Archive",
  "culture.p": "HODL. Laugh. Repeat. The NEXARC culture feed — straight from the command center.",
  "culture.c1": "In ARC we trust, memes we NEXARC",
  "culture.c2": "Buy NEXARC and chill",
  "culture.c3": "Certified ARC native",

  "road.label": "Trajectory // 05",
  "road.h1": "Flight",
  "road.h2": "Path",
  "road.p1": "Phase 01",
  "road.p1t": "Launch",
  "road.p1s": "Live",
  "road.p1i1": "Token launch on ARC",
  "road.p1i2": "Website & brand identity",
  "road.p1i3": "First meme drops",
  "road.p2": "Phase 02",
  "road.p2t": "Expansion",
  "road.p2s": "Next",
  "road.p2i1": "Community growth",
  "road.p2i2": "Meme contests & raids",
  "road.p2i3": "Creator collabs",
  "road.p3": "Phase 03",
  "road.p3t": "Culture",
  "road.p3s": "Soon",
  "road.p3i1": "NEXARC lore & characters",
  "road.p3i2": "Ecosystem partnerships",
  "road.p3i3": "Wider ARC presence",
  "road.p4": "Phase 04",
  "road.p4t": "Legacy",
  "road.p4s": "Vision",
  "road.p4i1": "The recognizable meme of ARC",
  "road.p4i2": "Community-led initiatives",
  "road.p4i3": "Endless memes",

  "buy.label": "Acquisition // 06",
  "buy.h1": "How to",
  "buy.h2": "Buy",
  "buy.s1t": "Get a wallet",
  "buy.s1d": "Set up a wallet that supports the ARC chain.",
  "buy.s2t": "Fund it",
  "buy.s2d": "Add the funds you need to swap for $NEXARC.",
  "buy.s3t": "Open Radardex",
  "buy.s3d": "Head to radardex.pro, the buy platform for $NEXARC.",
  "buy.s4t": "Swap & chill",
  "buy.s4d": "Swap for $NEXARC. HODL. Laugh. Repeat.",
  "buy.ca": "Contract Address",
  "buy.cta": "Buy on Radardex",
  "buy.cap": "Buy NEXARC and chill",

  "faq.label": "Intel // 07",
  "faq.h1": "Frequently",
  "faq.h2": "Asked",
  "faq.q1": "What is NEXARC?",
  "faq.a1":
    "NEXARC is a community-driven memecoin built on the ARC chain, centered on the idea of being the next meme on ARC.",
  "faq.q2": "What is the ticker?",
  "faq.a2": "The ticker is $NEXARC.",
  "faq.q3": "What is the contract address?",
  "faq.a3":
    "The contract address is COMING SOON. Always verify it from the official NEXARC channels before buying.",
  "faq.q4": "Where can I buy $NEXARC?",
  "faq.a4": "$NEXARC will be tradeable on Radardex at radardex.pro.",
  "faq.q5": "Does NEXARC have utility?",
  "faq.a5":
    "NEXARC is a memecoin. Its value is community, culture and memes — no promises, no roadmap theater.",

  "cta.h1": "Be Early to the",
  "cta.h2": "Next Meme on ARC",
  "cta.p":
    "The arc is drawn. The memes are loaded. Join the NEXARC fam and help write the next chapter of ARC culture.",
  "footer.disclaimer":
    "$NEXARC is a meme coin with no intrinsic value or expectation of financial return. It is for entertainment and community purposes only. Nothing here is financial advice — always do your own research.",
  "footer.tag": "The Next Meme on ARC",
};

export type Key = keyof typeof en;

const zh: Record<Key, string> = {
  "gate.badge": "NEXARC // 接入终端",
  "gate.hint": "点击标志进入",
  "gate.sub": "启动 ARC 迷因协议",
  "gate.loading": "正在建立连接…",
  "gate.enter": "进入",

  "nav.home": "首页",
  "nav.about": "关于",
  "nav.thesis": "理念",
  "nav.community": "社区",
  "nav.roadmap": "路线图",
  "nav.faq": "常见问题",
  "nav.buy": "购买 $NEXARC",

  "hero.badge": "构建于 ARC",
  "hero.t1": "ARC 上的",
  "hero.t2": "下一个",
  "hero.t3": "迷因",
  "hero.p":
    "NEXARC 是构建于 ARC 之上的社区驱动迷因币，把迷因文化、创意与社区能量带入生态的下一个篇章。",
  "hero.telegram": "加入 Telegram",
  "hero.x": "在 X 关注",
  "hero.contract": "合约地址",

  "about.label": "身份 // 01",
  "about.h": "什么是",
  "about.q": "？",
  "about.p1a": "NEXARC 是一个社区驱动的迷因币，理念非常简单：",
  "about.p1b": " 成为 ARC 上的下一个迷因。",
  "about.eq1": "下一个",
  "about.eq2": "弧线",
  "about.eq3": "下一个迷因",
  "about.p2": "项目致力于通过社区、创意、幽默与互联网原生能量，在 ARC 生态中打造迷因文化。",

  "thesis.label": "理念 // 02",
  "thesis.h1": "NEXARC",
  "thesis.h2": "理念",
  "thesis.big": "每条链都需要文化。",
  "thesis.suba": "ARC 提供基础设施。",
  "thesis.subb": "NEXARC 带来迷因。",
  "thesis.p1t": "社区",
  "thesis.p1d": "每天都在场的人，而不只是持币者。",
  "thesis.p2t": "内部梗",
  "thesis.p2d": "只有家人才懂的语言。",
  "thesis.p3t": "角色",
  "thesis.p3d": "有面孔、有气质、有使命的吉祥物。",
  "thesis.p4t": "运动",
  "thesis.p4d": "比任何路线图都传播得更快的文化。",
  "thesis.outro": "NEXARC 希望成为 ARC 生态中最具辨识度的迷因原生社区之一。",
  "thesis.f1": "迷因",
  "thesis.f2": "社区",
  "thesis.f3": "关注",
  "thesis.f4": "文化",
  "thesis.f5": "更多迷因",

  "community.label": "社区 // 03",
  "community.h1": "由",
  "community.h2": "人 驱动",
  "community.p": "NEXARC 由社区驱动。没有空头承诺，没有路线图表演——只有迷因、势能和真正出现的人。",
  "community.xd": "迷因、公告与每日 NEXARC 能量。",
  "community.tgd": "主要据点，家人们真正生活的地方。",
  "community.trade": "在 Radardex 交易",

  "culture.label": "文化 // 04",
  "culture.h1": "迷因",
  "culture.h2": "档案库",
  "culture.p": "持有。大笑。重复。NEXARC 文化信息流——直接来自指挥中心。",
  "culture.c1": "我们信仰 ARC，我们创造迷因",
  "culture.c2": "买入 NEXARC，然后放松",
  "culture.c3": "认证 ARC 原住民",

  "road.label": "轨迹 // 05",
  "road.h1": "飞行",
  "road.h2": "路径",
  "road.p1": "第一阶段",
  "road.p1t": "启动",
  "road.p1s": "进行中",
  "road.p1i1": "在 ARC 上发行代币",
  "road.p1i2": "官网与品牌形象",
  "road.p1i3": "首批迷因发布",
  "road.p2": "第二阶段",
  "road.p2t": "扩张",
  "road.p2s": "下一步",
  "road.p2i1": "社区增长",
  "road.p2i2": "迷因比赛与冲榜",
  "road.p2i3": "创作者合作",
  "road.p3": "第三阶段",
  "road.p3t": "文化",
  "road.p3s": "即将到来",
  "road.p3i1": "NEXARC 世界观与角色",
  "road.p3i2": "生态伙伴关系",
  "road.p3i3": "更广泛的 ARC 影响力",
  "road.p4": "第四阶段",
  "road.p4t": "传奇",
  "road.p4s": "愿景",
  "road.p4i1": "成为 ARC 的标志性迷因",
  "road.p4i2": "社区主导的行动",
  "road.p4i3": "无尽的迷因",

  "buy.label": "购买 // 06",
  "buy.h1": "如何",
  "buy.h2": "购买",
  "buy.s1t": "创建钱包",
  "buy.s1d": "准备一个支持 ARC 链的钱包。",
  "buy.s2t": "充值资金",
  "buy.s2d": "存入用于兑换 $NEXARC 的资金。",
  "buy.s3t": "打开 Radardex",
  "buy.s3d": "前往 radardex.pro，$NEXARC 的购买平台。",
  "buy.s4t": "兑换并放松",
  "buy.s4d": "兑换 $NEXARC。持有。大笑。重复。",
  "buy.ca": "合约地址",
  "buy.cta": "在 Radardex 购买",
  "buy.cap": "买入 NEXARC，然后放松",

  "faq.label": "情报 // 07",
  "faq.h1": "常见",
  "faq.h2": "问题",
  "faq.q1": "NEXARC 是什么？",
  "faq.a1": "NEXARC 是构建在 ARC 链上的社区驱动迷因币，核心理念是成为 ARC 上的下一个迷因。",
  "faq.q2": "代币符号是什么？",
  "faq.a2": "代币符号是 $NEXARC。",
  "faq.q3": "合约地址是什么？",
  "faq.a3": "合约地址即将公布。购买前请务必在 NEXARC 官方渠道核实。",
  "faq.q4": "在哪里可以购买 $NEXARC？",
  "faq.a4": "$NEXARC 将在 Radardex（radardex.pro）上交易。",
  "faq.q5": "NEXARC 有实用性吗？",
  "faq.a5": "NEXARC 是迷因币，它的价值是社区、文化与迷因——没有承诺，也没有路线图表演。",

  "cta.h1": "抢先加入",
  "cta.h2": "ARC 上的下一个迷因",
  "cta.p": "弧线已经画好，迷因已经上膛。加入 NEXARC 家族，一起书写 ARC 文化的下一章。",
  "footer.disclaimer":
    "$NEXARC 是一种迷因币，不具备内在价值，也不应期待财务回报。它仅用于娱乐与社区目的。本站内容不构成任何财务建议，请务必自行研究。",
  "footer.tag": "ARC 上的下一个迷因",
};

const DICT: Record<Lang, Record<Key, string>> = { en, zh };

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: Key) => string };

const LangContext = createContext<Ctx>({ lang: "en", setLang: () => {}, t: (k) => en[k] });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = localStorage.getItem("nexarc-lang");
    if (saved === "en" || saved === "zh") setLangState(saved);
  }, []);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    localStorage.setItem("nexarc-lang", l);
    document.documentElement.lang = l === "zh" ? "zh-CN" : "en";
  }, []);

  const t = useCallback((k: Key) => DICT[lang][k] ?? en[k], [lang]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useI18n() {
  return useContext(LangContext);
}
