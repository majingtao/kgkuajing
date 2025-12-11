import { ContentData, Language } from './types';

export const CONTENT: Record<Language, ContentData> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      whyUs: "Why Us",
      results: "Results",
      process: "Process",
      contact: "Contact",
    },
    hero: {
      badge: "Digital Empowerment for Brand Growth",
      title: "AI-Driven Global E-Commerce Solutions",
      subtitle: "Combining AI technology with industry insights to provide data-driven cross-border operational strategies.",
      ctaPrimary: "Explore Solutions",
    },
    intro: {
      title: "About Kugua Tech",
      subtitle: "Professional solutions for traditional enterprises going global.",
      description: "Established in 2015, Kugua Tech is a leading cross-border e-commerce service provider. We are committed to providing comprehensive brand customized solutions for manufacturing companies. Through digital operations, technology development, and brand marketing, we have served over 200 global brands.",
      stats: [
        { label: "Years Experience", value: "8+" },
        { label: "Enterprises", value: "200+" },
        { label: "Countries", value: "30+" },
        { label: "Satisfaction", value: "98%" }
      ],
      cta: "Learn More"
    },
    painPoints: {
      titlePain: "Pain Points of Traditional Enterprises",
      itemsPain: [
        { title: "Unclear Market Position", description: "Lack of understanding of overseas markets, hard to position products." },
        { title: "Lack of Operations Experience", description: "Unfamiliar with platform rules and operations, leading to low efficiency." },
        { title: "Poor Marketing ROI", description: "Lack of effective marketing channels and strategies, high costs." },
        { title: "Logistics & Information Gaps", description: "Complex international logistics, untimely information leading to stockouts." },
        { title: "Weak Data Analysis", description: "Lack of professional analysis tools, unable to make data-driven decisions." }
      ],
      titleSolution: "Our Solutions",
      itemsSolution: [
        { title: "Product Positioning", items: ["Overseas Market Analysis", "Target Audience Definition", "Product Cost Structure", "Brand Tone & Visuals"] },
        { title: "Cross-Border Selection", items: ["Multi-platform Data Analysis", "Frontend Market API Data", "Budget Allocation Plan", "Risk Assessment"] },
        { title: "Omni-channel Marketing", items: ["Platform Ad Synergy", "Social Media Marketing", "KOL/KOC Matrices", "SEO/SEM Optimization"] },
        { title: "Digital Management", items: ["Smart Supply Chain System", "Multi-platform Unified Management", "Customer Relation Maintenance", "Data-driven Operations"] }
      ],
      cta: "Get Customized Plan"
    },
    services: {
      sectionTitle: "Service Products",
      sectionSubtitle: "Meeting the needs of cross-border e-commerce at different stages.",
      cta: "View Details",
      backBtn: "Back to Services",
      bookConsult: "Book Consultation",
      items: [
        {
          id: 'amazon',
          title: "Amazon Operations",
          description: "Professional managed services from registration to bestseller. Listings, PPC, and FBA optimization.",
          features: ["Store Registration", "Listing Optimization", "PPC Strategy", "Inventory Management", "Data Analysis"],
          iconName: 'ShoppingBag',
          color: "blue",
          fullDescription: "We provide end-to-end Amazon store management services tailored to maximize your ROI. Our team handles everything from account setup and brand registry to daily operations and advanced advertising strategies. We focus on A9 algorithm optimization to get your products ranked on page one.",
          benefits: [
            { title: "Sales Growth", desc: "Proven strategies to increase organic ranking and sales velocity." },
            { title: "Cost Efficiency", desc: "Optimized ACOS through precise PPC keyword targeting." },
            { title: "Risk Control", desc: "Strict adherence to Amazon TOS to protect account health." }
          ],
          workflow: ["Account Audit & Strategy", "Listing SEO & Visual Upgrade", "PPC Campaign Launch", "Daily Optimization", "Monthly Reporting"]
        },
        {
          id: 'dtc',
          title: "DTC Independent Site",
          description: "Build a private domain traffic pool. Establish an independent brand sales website.",
          features: ["Site Construction", "SEO Optimization", "Google/FB Ads", "Payment & Logistics", "Data Analytics"],
          iconName: 'Globe',
          color: "cyan",
          fullDescription: "Own your customer data and build lasting brand equity with a custom DTC (Direct-to-Consumer) website. We specialize in Shopify and WooCommerce development, ensuring a high-converting UI/UX design. Our service includes full-funnel marketing integration with Google Ads, Facebook/Instagram Ads, and Email Marketing automation.",
          benefits: [
            { title: "Brand Ownership", desc: "Full control over customer data and brand storytelling." },
            { title: "Higher Margins", desc: "No platform referral fees, increasing your bottom line." },
            { title: "Loyalty Building", desc: "Direct communication channels for retention marketing." }
          ],
          workflow: ["Site Architecture Design", "Development & Payment Setup", "Traffic Acquisition Setup", "Conversion Rate Optimization", "Retention Marketing"]
        },
        {
          id: 'tiktok',
          title: "TikTok Operations",
          description: "Seize the short video bonus. Use TikTok content marketing to drive brand awareness and sales.",
          features: ["Account Setup", "Short Video Content", "Livestream Operations", "TikTok Ads", "Influencer Marketing"],
          iconName: 'Video',
          color: "orange",
          fullDescription: "Tap into the viral power of TikTok. We manage your TikTok Shop and content strategy to drive engagement and sales. From creating localized short video content to managing live stream schedules and influencer collaborations (TSP/MCN resources), we help you capture the Gen Z market.",
          benefits: [
            { title: "Viral Exposure", desc: "High organic reach potential through creative content." },
            { title: "Direct Sales", desc: "Seamless purchasing via TikTok Shop integration." },
            { title: "Community", desc: "Build a loyal fanbase through interactive engagement." }
          ],
          workflow: ["Account Persona Setup", "Content Script & Filming", "Publishing & Community Mgmt", "Live Stream Operations", "Affiliate Management"]
        },
        {
          id: 'consulting',
          title: "Cross-border Consulting",
          description: "1-on-1 expert guidance. Building a complete cross-border team and system for your company.",
          features: ["Team Training", "System Construction", "1-on-1 Coaching", "Resource Matching", "Regular Reviews"],
          iconName: 'Users',
          color: "purple",
          fullDescription: "Transitioning from traditional manufacturing to e-commerce? Our consulting service acts as your external COO. We help you recruit talent, design operational SOPs, and select the right ERP/CRM tools. We don't just give advice; we help you implement it until your internal team is self-sufficient.",
          benefits: [
            { title: "Team Capability", desc: "Rapidly upskill your internal staff." },
            { title: "Strategic Clarity", desc: "Avoid costly mistakes with expert roadmap planning." },
            { title: "Resource Access", desc: "Direct introductions to vetted logistics and payment partners." }
          ],
          workflow: ["Gap Analysis", "Team Structure Design", "SOP Development", "Training Sessions", "Quarterly Review"]
        }
      ]
    },
    whyUs: {
      sectionTitle: "Why Choose Us?",
      sectionSubtitle: "Professional team, rich experience, and solid technology to empower your brand.",
      items: [
        { title: "Expert Team", description: "Core team has 10+ years of e-commerce experience, familiar with platform rules.", icon: "UserCheck" },
        { title: "Industry Resources", description: "Integrated logistics, payments, and marketing resources for a one-stop service.", icon: "Layers" },
        { title: "Digital Empowerment", description: "Self-developed SAAS systems combined with big data for precise operations.", icon: "Cpu" },
        { title: "Refined Service", description: "Team-to-one service model ensures response efficiency and results.", icon: "HeartHandshake" }
      ]
    },
    results: {
      sectionTitle: "Our Results",
      sectionSubtitle: "Speaking with data, witnessing growth.",
      chartTitle: "Client Sales Growth Trend",
      pieTitle: "Sales Platform Distribution",
      stats: [
        { label: "Success Cases", value: "200+" },
        { label: "Avg. Yearly Growth", value: "128%" },
        { label: "Countries Covered", value: "30+" },
        { label: "Client Retention", value: "98%" }
      ]
    },
    partners: {
      sectionTitle: "Typical Brand Partners",
      sectionSubtitle: "We have established long-term and stable cooperative relationships with many well-known brands."
    },
    process: {
      sectionTitle: "Cooperation Framework",
      sectionSubtitle: "Transparent process to ensure project goals are met.",
      items: [
        { step: "1", title: "Consultation", description: "Deep understanding of client needs and assessment." },
        { step: "2", title: "Signing Contract", description: "Confirm cooperation details and sign agreement." },
        { step: "3", title: "Execution", description: "Project setup and operational execution." },
        { step: "4", title: "Feedback", description: "Regular data reports and strategy optimization." },
        { step: "5", title: "Sustainment", description: "Long-term operation and brand growth." }
      ],
      cta: "Start Cooperation"
    },
    contact: {
      title: "Contact Us",
      subtitle: "Whether you have questions or needs, our team is ready to support you.",
      formName: "Name",
      formEmail: "Contact",
      formMessage: "Needs",
      submit: "Submit",
      success: "Submitted successfully!"
    },
    aiWidget: {
      title: "Kugua AI Assistant",
      placeholder: "Ask about strategy...",
      welcome: "Hello! I am Kugua Tech's AI consultant. How can I assist?",
      disclaimer: "Powered by Gemini 2.5."
    },
    footer: {
      copyright: "Hangzhou Kugua Technology Co., Ltd.",
      rights: "All rights reserved."
    }
  },
  zh: {
    nav: {
      home: "首页",
      about: "关于我们",
      services: "产品服务",
      whyUs: "跨境洞察", 
      results: "合作业绩",
      process: "合作流程",
      contact: "联系我们",
    },
    hero: {
      badge: "数字化赋能 跨境品牌增长",
      title: "结合AI技术与行业洞察",
      subtitle: "为您提供数据驱动的跨境电商运营策略",
      ctaPrimary: "立即咨询",
    },
    intro: {
      title: "关于苦瓜科技",
      subtitle: "专注为传统企业提供全方位的跨境电商解决方案，助力企业实现全球化布局与品牌出海",
      description: "苦瓜科技成立于2015年，是国内领先的跨境电商服务商。我们致力于为传统企业提供专业的跨境电商整体解决方案。我们拥有专业的电商运营、数字营销团队，技术开发工程师和设计团队，累计服务超过200家企业成功出海。",
      stats: [
        { label: "行业经验", value: "8+" },
        { label: "合作企业", value: "200+" },
        { label: "覆盖国家", value: "30+" },
        { label: "客户满意度", value: "98%" }
      ],
      cta: "了解更多公司介绍"
    },
    painPoints: {
      titlePain: "传统企业跨境的痛点",
      itemsPain: [
        { title: "市场定位不清晰", description: "缺乏对海外市场的深入了解，难以精准定位目标客户群体与产品方向" },
        { title: "跨境运营经验不足", description: "不熟悉海外电商平台规则与运营技巧，导致运营效率低下，效果不佳" },
        { title: "营销推广效果差", description: "缺乏有效的海外营销渠道与策略，品牌曝光度低，获客成本高" },
        { title: "物流信息复杂", description: "国际物流链路复杂，售后服务不及时，影响客户体验与店铺口碑" },
        { title: "数据分析能力弱", description: "缺乏专业的数据分析工具与人才，无法通过数据驱动做出决策" }
      ],
      titleSolution: "我们的解决方案",
      itemsSolution: [
        { title: "产品市场定位", items: ["海外市场深度调研与分析", "目标客户群体精准定位", "产品差异化竞争策略制定", "品牌形象与视觉体系塑造"] },
        { title: "跨境战略选择", items: ["多平台机遇洞察与分析", "阶段性目标与KPI设定", "预算分配与资源规划", "风险评估与应对方案"] },
        { title: "全渠道营销推广", items: ["平台广告与站外引流结合", "社交媒体内容营销", "网红合作与KOL营销", "SEO/SEM优化与投放"] },
        { title: "数字化运营管理", items: ["智能选品与定价系统", "多平台统一管理系统", "客户关系管理与维护", "数据驱动的精细化运营"] }
      ],
      cta: "获取定制化解决方案"
    },
    services: {
      sectionTitle: "服务产品",
      sectionSubtitle: "深度剖析全方位的跨境电商服务，满足不同企业的出海需求",
      cta: "查看详情",
      backBtn: "返回服务列表",
      bookConsult: "预约咨询",
      items: [
        {
          id: 'amazon',
          title: "亚马逊代运营",
          description: "专业团队全托管亚马逊店铺运营，从账号注册到爆品推广，全方位提升销售业绩",
          features: ["店铺注册与优化", "产品上架与Listing优化", "PPC广告投放与优化", "库存管理与FBA运营", "数据分析与复盘报告"],
          iconName: 'ShoppingBag',
          color: "blue",
          fullDescription: "我们提供从0到1的一站式亚马逊代运营服务。无论是新店开张还是老店托管，我们都拥有成熟的SOP流程。团队精通亚马逊A9算法，通过精细化运营提升店铺流量和转化率，帮助品牌在亚马逊全球站点（北美、欧洲、日本等）占据市场份额。",
          benefits: [
            { title: "销量增长", desc: "针对性的推广策略，快速提升关键词排名与自然订单。" },
            { title: "成本控制", desc: "精细化PPC广告管理，降低ACOS，提高资金周转率。" },
            { title: "账号安全", desc: "严格遵守平台规则，规避侵权与关联风险，保障账号长期稳定。" }
          ],
          workflow: ["市场调研与选品", "视觉设计与Listing撰写", "FBA物流规划", "广告推广与测评", "数据监控与优化"]
        },
        {
          id: 'dtc',
          title: "独立站代运营",
          description: "打造品牌专属独立站，实现自主可控的营销销售渠道，提升品牌价值与用户粘性",
          features: ["独立站搭建与设计", "SEO优化与内容营销", "Google/Facebook广告投放", "支付与物流系统集成", "网站数据分析与优化"],
          iconName: 'Globe',
          color: "cyan",
          fullDescription: "摆脱平台束缚，构建属于您自己的私域流量池。我们专注于Shopify及WooCommerce独立站建设与运营，提供从品牌视觉设计、UI/UX优化到全渠道引流（Google Shopping, FB/Ins Ads, Email）的全案服务。帮助品牌沉淀用户数据，提升复购率。",
          benefits: [
            { title: "品牌沉淀", desc: "完全掌控品牌调性与用户数据，建立长期品牌资产。" },
            { title: "利润最大化", desc: "免去平台高额佣金，自主定价，提升产品利润空间。" },
            { title: "私域运营", desc: "直接触达消费者，通过EDM与会员体系提升用户生命周期价值。" }
          ],
          workflow: ["品牌定位与网站规划", "网站开发与支付配置", "广告账户搭建与投放", "转化率CRO优化", "再营销与用户留存"]
        },
        {
          id: 'tiktok',
          title: "TikTok代运营",
          description: "把握短视频营销机遇，通过TikTok平台打造品牌影响力，实现品效合一的营销效果",
          features: ["账号定位与内容策划", "短视频拍摄与剪辑", "账号运营与粉丝增长", "TikTok广告投放", "直播带货与小店运营"],
          iconName: 'Video',
          color: "orange",
          fullDescription: "抢占TikTok流量红利，实现品牌年轻化。我们提供TikTok全案代运营，包括企业号蓝V认证、短视频内容创作、TikTok Shop小店运营以及红人营销。利用原生感内容撬动免费流量，结合付费投流（Promote/Ads）实现爆发式增长。",
          benefits: [
            { title: "海量曝光", desc: "利用算法推荐机制，低成本获取全球海量年轻用户关注。" },
            { title: "品效合一", desc: "视频种草+小店拔草，缩短用户购买路径，提高转化效率。" },
            { title: "内容资产", desc: "持续输出优质创意内容，建立品牌内容护城河。" }
          ],
          workflow: ["账号人设定位", "脚本策划与拍摄剪辑", "每日发布与互动", "直播间搭建与运营", "达人建联与带货"]
        },
        {
          id: 'consulting',
          title: "跨境陪跑",
          description: "一对一专业顾问指导，从0到1帮助企业建立跨境电商团队与运营体系，实现自主运营",
          features: ["团队搭建与人才培训", "运营体系搭建与优化", "一对一运营指导", "资源对接与供应链优化", "定期复盘与持续改进"],
          iconName: 'Users',
          color: "purple",
          fullDescription: "不仅仅是代运营，更是您的跨境合伙人。针对希望建立内部跨境团队的企业，我们提供深度陪跑咨询服务。从招聘面试协助、薪酬绩效设计，到具体的运营SOP制定与实操培训，我们手把手教您如何做跨境，最终实现团队的独立作战能力。",
          benefits: [
            { title: "团队赋能", desc: "快速提升内部团队专业能力，减少试错成本。" },
            { title: "体系建设", desc: "建立标准化的运营流程与管理制度，摆脱对个人的依赖。" },
            { title: "资源共享", desc: "共享苦瓜科技的物流、支付、红人等优质行业资源。" }
          ],
          workflow: ["企业现状诊断", "团队架构设计", "SOP流程导入", "实战培训与指导", "定期复盘与考核"]
        }
      ]
    },
    whyUs: {
      sectionTitle: "为什么选择我们？",
      sectionSubtitle: "我们凭借专业的团队，丰富的经验和坚实的技术，为企业提供卓越的跨境电商解决方案",
      items: [
        { title: "资深跨境团队", description: "核心团队拥有8年以上跨境电商经验，熟悉各平台规则与运营技巧，曾服务多家上市公司与知名品牌", icon: "UserCheck" },
        { title: "行业资源整合", description: "整合全球优质资源，包括物流仓储、支付结算、海外营销、供应链管理等，为客户提供一站式服务", icon: "Layers" },
        { title: "数字化技术赋能", description: "自主研发跨境电商SAAS系统，结合大数据分析与AI技术，实现智能化选品、精准营销与精细化运营", icon: "Cpu" },
        { title: "精细与完善的服务", description: "提供从战略规划到执行落地的全流程服务，建立完善的服务体系与质量监控机制，确保服务效果", icon: "HeartHandshake" }
      ]
    },
    results: {
      sectionTitle: "我们的服务成果",
      sectionSubtitle: "用数据说话，见证客户成长",
      chartTitle: "客户销售增长趋势",
      pieTitle: "销售平台分布",
      stats: [
        { label: "成功案例", value: "200+" },
        { label: "平均年增长率", value: "128%" },
        { label: "覆盖国家", value: "30+" },
        { label: "客户好评", value: "98%" }
      ]
    },
    partners: {
      sectionTitle: "典型合作品牌",
      sectionSubtitle: "我们与众多知名品牌建立了长期的合作关系，共同开拓全球市场"
    },
    process: {
      sectionTitle: "合作框架流程",
      sectionSubtitle: "我们提供透明清晰的合作流程，确保项目顺利进行，实现预期目标",
      items: [
        { step: "1", title: "前期洽谈", description: "深入了解客户需求与目标，进行市场分析评估，制定初步合作方案" },
        { step: "2", title: "合同签订", description: "确定合作细节与服务内容，签订正式合作合同，明确双方权利与义务" },
        { step: "3", title: "运营执行", description: "组建专业项目团队，按照既定方案开展各项运营工作，确保项目落地" },
        { step: "4", title: "反馈总结", description: "定期进行数据反馈与效果评估，总结经验教训，持续优化运营策略" },
        { step: "5", title: "持续服务", description: "提供长期运营监控与支持，根据市场变化调整策略，实现持续增长" }
      ],
      cta: "开启合作之旅"
    },
    contact: {
      title: "留言合作",
      subtitle: "无论你有任何疑问或需求，我们的跨境顾问提供专业的服务与支持",
      formName: "姓名",
      formEmail: "联系方式",
      formMessage: "留言内容",
      submit: "提交留言",
      success: "提交成功！"
    },
    aiWidget: {
      title: "苦瓜 AI 顾问",
      placeholder: "咨询出海策略...",
      welcome: "您好！我是苦瓜科技的AI出海顾问。请问有什么可以帮您？",
      disclaimer: "由 Gemini 2.5 驱动。建议仅供参考。"
    },
    footer: {
      copyright: "杭州苦瓜科技有限公司 浙ICP备18036155号-1",
      rights: "版权所有"
    }
  }
};