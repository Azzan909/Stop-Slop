const SPF = {

  chapters: [
    {
      id: 1,
      icon: '📖',
      color: '#1A5276',
      bgColor: '#EFF6FF',
      title_ar: 'الباب الأول: التعريفات والأحكام العامة',
      title_en: 'Chapter 1: Definitions & General Provisions',
      articles_ar: 'المواد 1 – 12',
      articles_en: 'Articles 1 – 12',
      desc_ar: 'تعريف المصطلحات الأساسية والأحكام المنظِّمة لتطبيق القانون',
      desc_en: 'Defines key terms and governs application of the law',
      content_ar: `<h3>الفصل الأول: التعريفات</h3>
<p>في تطبيق أحكام هذا القانون، يكون للكلمات والعبارات الآتية المعنى المبين قرين كل منها:</p>
<ul>
<li><strong>الصندوق:</strong> صندوق الحماية الاجتماعية — الجهة المعنية بتطبيق القانون وإدارة منظومة الحماية الاجتماعية.</li>
<li><strong>المجلس:</strong> مجلس إدارة الصندوق — الجهة العليا للإشراف والإدارة والرقابة.</li>
<li><strong>صاحب العمل:</strong> كل شخص طبيعي أو اعتباري يعمل لديه موظف أو منتسب أو عامل أو أكثر تتوفر فيه الشروط المنصوص عليها في هذا القانون.</li>
<li><strong>اللجنة الطبية:</strong> اللجنة المنصوص عليها في المادة (22) من هذا القانون.</li>
<li><strong>المؤمن عليه:</strong> كل من تسري عليه أحكام فروع التأمين الاجتماعي وفقاً لأحكام هذا القانون بصفة إلزامية أو اختيارية.</li>
<li><strong>المنتفع:</strong> كل مستحق لمنفعة وفقاً لأحكام فروع منافع الحماية الاجتماعية المنصوص عليها في هذا القانون.</li>
<li><strong>سن كبار السن:</strong> بلوغ سن (60) ستين عاماً من العمر.</li>
<li><strong>الراتب الإجمالي:</strong> إجمالي الراتب أو الأجر الأساسي مضافاً إليه جميع البدلات والعلاوات.</li>
<li><strong>الراتب الخاضع للاشتراك:</strong> الأجر بما لا يجاوز السقف المحدد في كل فرع من فروع التأمين الاجتماعي.</li>
</ul>
<hr/>
<h3>الفصل الثاني: الأحكام العامة</h3>
<p><strong>المادة (2):</strong> تلتزم كافة وحدات الجهاز الإداري للدولة وغيرها من الأشخاص الاعتبارية العامة أو الخاصة والمؤمن عليه، بموافاة الصندوق بجميع البيانات والمعلومات التي يطلبها.</p>
<p><strong>المادة (3):</strong> يلتزم الصندوق بفصل إيرادات ونفقات وأصول والتزامات كل فرع من فروع منافع الحماية الاجتماعية وفروع التأمين الاجتماعي فصلاً محاسبياً.</p>
<p><strong>المادة (6):</strong> يتم رفع سن كبار السن ابتداءً من تاريخ العمل بأحكام هذا القانون بمعدل عام كل 3 أعوام لحين وصوله إلى السن المحدد.</p>
<p><strong>المادة (9):</strong> لا يجوز الحجز أو التنازل عما يستحقه المؤمن عليه أو صاحب المعاش لدى الصندوق، إلا للوفاء بدين النفقة أو دين واجب السداد للصندوق أو للدولة، بما لا يجاوز <strong>الربع</strong>.</p>
<p><strong>المادة (10):</strong> يسقط حق المنتفع أو المؤمن عليه في المطالبة بما يستحقه بانقضاء <strong>5 سنوات</strong>.</p>`,
      videos: [
        { title_ar: 'مقدمة قانون الحماية الاجتماعية', duration: '12:30' },
        { title_ar: 'شرح المصطلحات الأساسية', duration: '08:45' }
      ],
      audios: [
        { title_ar: 'ملخص صوتي – التعريفات', duration: '05:20' },
        { title_ar: 'ملخص صوتي – الأحكام العامة', duration: '06:10' }
      ]
    },
    {
      id: 2,
      icon: '🛡️',
      color: '#1E8449',
      bgColor: '#F0FDF4',
      title_ar: 'الباب الثاني: فروع منافع الحماية الاجتماعية',
      title_en: 'Chapter 2: Social Protection Benefit Branches',
      articles_ar: 'المواد 13 – 65',
      articles_en: 'Articles 13 – 65',
      desc_ar: 'سبعة فروع للمنافع تشمل كبار السن، الإعاقة، الأيتام، الأرامل، الطفولة، دعم الدخل، والأمومة',
      desc_en: 'Seven benefit branches covering elderly, disability, orphans, widows, childhood, income support, and maternity',
      content_ar: `<h3>فروع منافع الحماية الاجتماعية السبعة</h3>
<h4>1. فرع منفعة كبار السن</h4>
<p>يستحق هذا الفرع من بلغ سن (60) عاماً وتوفرت فيه الشروط المقررة. يتم رفع هذا السن تدريجياً بمعدل عام كل 3 أعوام.</p>
<h4>2. فرع منفعة الأشخاص ذوي الإعاقة</h4>
<p>يشمل المواطنين العمانيين من ذوي الإعاقة الذين لا تتوفر لهم دخول كافية ولا يشملهم نظام التأمين الاجتماعي.</p>
<h4>3. فرع منفعة الأيتام والأرامل</h4>
<p>يستهدف الأيتام والأرامل العمانيين المحتاجين الذين فقدوا عائلهم ولا يحصلون على معاش أو مصدر دخل كافٍ.</p>
<h4>4. فرع منفعة الطفولة</h4>
<p>يقدم دعماً مالياً للأطفال العمانيين دون سن الرشد في الأسر ذات الدخل المحدود لضمان رعايتهم وتعليمهم.</p>
<h4>5. فرع منفعة دعم دخل الأسر</h4>
<p>يهدف إلى رفع مستوى الدخل للأسر العمانية ذات الدخل المحدود لضمان مستوى معيشي لائق.</p>
<h4>6. فرع منفعة الباحثين عن عمل لأول مرة</h4>
<p>يقدم مساعدة مالية مؤقتة للباحثين عن عمل لأول مرة بعد التخرج خلال فترة انتظار توظيفهم.</p>
<h4>7. فرع منفعة الأمومة</h4>
<p>يضمن الدعم المالي للأمهات غير العاملات أو اللواتي لا تشملهن تأمينات الأمومة في فروع التأمين الاجتماعي.</p>`,
      videos: [
        { title_ar: 'شرح فروع منافع الحماية الاجتماعية', duration: '18:00' },
        { title_ar: 'آلية الاستحقاق والتقديم', duration: '11:20' }
      ],
      audios: [
        { title_ar: 'ملخص صوتي – الفروع السبعة', duration: '07:15' }
      ]
    },
    {
      id: 3,
      icon: '💼',
      color: '#7D3C98',
      bgColor: '#F9F0FF',
      title_ar: 'الباب الثالث: فروع التأمين الاجتماعي',
      title_en: 'Chapter 3: Social Insurance Branches',
      articles_ar: 'المواد 66 – 140',
      articles_en: 'Articles 66 – 140',
      desc_ar: 'ستة فروع تأمينية تشمل التقاعد، إصابات العمل، الأمان الوظيفي، الإجازات المرضية، الأمومة، والتأمين الصحي',
      desc_en: 'Six insurance branches covering pension, work injuries, job security, sick leave, maternity, and health insurance',
      content_ar: `<h3>فروع التأمين الاجتماعي الستة</h3>
<h4>1. فرع تأمين كبار السن والعجز والوفاة</h4>
<p>يوفر معاشاً تقاعدياً عند بلوغ سن التقاعد أو العجز الكامل أو الوفاة. يشمل جميع العاملين العمانيين في القطاعين العام والخاص.</p>
<h4>2. فرع تأمين إصابات العمل والأمراض المهنية</h4>
<p>يغطي الإصابات التي تقع أثناء العمل أو بسببه، والأمراض المهنية الناتجة عن طبيعة العمل. يشمل تعويض الإصابات والعلاج وإعادة التأهيل.</p>
<h4>3. فرع تأمين الأمان الوظيفي</h4>
<p>يوفر تعويضاً مؤقتاً للعمال العمانيين الذين يفقدون وظائفهم بصورة لا إرادية، ريثما يجدون عملاً جديداً.</p>
<h4>4. فرع تأمين الإجازات المرضية والإجازات غير الاعتيادية</h4>
<p>يضمن استمرارية الدخل للمؤمن عليهم خلال فترات المرض المطوّل أو الإجازات الطارئة.</p>
<h4>5. فرع تأمين إجازات الأمومة</h4>
<p>يكفل صرف إجازة الأمومة المدفوعة الأجر للعاملات في القطاع الخاص طبقاً للاشتراطات المحددة.</p>
<h4>6. فرع التأمين الصحي الاجتماعي</h4>
<p>يهدف إلى توفير تغطية صحية شاملة للمواطنين العمانيين غير المشمولين بأنظمة التأمين الصحي الحكومية.</p>`,
      videos: [
        { title_ar: 'فروع التأمين الاجتماعي – نظرة شاملة', duration: '22:10' },
        { title_ar: 'تأمين إصابات العمل والأمراض المهنية', duration: '14:30' }
      ],
      audios: [
        { title_ar: 'ملخص صوتي – فرع الأمان الوظيفي', duration: '04:50' }
      ]
    },
    {
      id: 4,
      icon: '💰',
      color: '#B7950B',
      bgColor: '#FFFBEB',
      title_ar: 'الباب الرابع: الاشتراكات والتمويل',
      title_en: 'Chapter 4: Contributions & Financing',
      articles_ar: 'المواد 141 – 165',
      articles_en: 'Articles 141 – 165',
      desc_ar: 'أحكام الاشتراكات وآليات التمويل وسقف الأجر الخاضع للاشتراك',
      desc_en: 'Contribution rules, financing mechanisms, and contribution salary caps',
      content_ar: `<h3>نظام الاشتراكات والتمويل</h3>
<p>يُموَّل نظام الحماية الاجتماعية من مصادر متعددة تشمل اشتراكات أصحاب العمل والمؤمن عليهم والتمويل الحكومي.</p>
<h4>سقف أجر الاشتراك</h4>
<p>يُحدد المجلس سقف أجر الاشتراك سنوياً قبل نهاية كل عام، ويُعمل به في بداية العام التالي.</p>
<h4>التزامات صاحب العمل</h4>
<ul>
<li>حجب حصة المؤمن عليه من أجره وتحويلها للصندوق</li>
<li>سداد حصته كصاحب عمل في المواعيد المحددة</li>
<li>تسجيل جميع العمال المستوفين للشروط</li>
<li>إبلاغ الصندوق بأي تغييرات في بيانات العمال</li>
</ul>
<h4>العقوبات والغرامات</h4>
<p>يترتب على التأخر في سداد الاشتراكات غرامات تأخير وفق ما تحدده اللائحة التنفيذية.</p>`,
      videos: [
        { title_ar: 'كيفية احتساب الاشتراكات', duration: '09:40' }
      ],
      audios: [
        { title_ar: 'ملخص صوتي – الاشتراكات والسقف', duration: '05:00' }
      ]
    },
    {
      id: 5,
      icon: '📊',
      color: '#1A6A8A',
      bgColor: '#E0F7FA',
      title_ar: 'الباب الخامس: المعاشات وكيفية احتسابها',
      title_en: 'Chapter 5: Pensions & Calculation',
      articles_ar: 'المواد 166 – 195',
      articles_en: 'Articles 166 – 195',
      desc_ar: 'طرق احتساب المعاشات التقاعدية والمبكرة وتعويضات العجز والوفاة',
      desc_en: 'Methods for calculating retirement, early retirement, disability, and death pensions',
      content_ar: `<h3>أنواع المعاشات وكيفية احتسابها</h3>
<h4>معاش التقاعد العادي</h4>
<p>يُستحق عند بلوغ سن كبار السن (60 عاماً) مع استيفاء مدة الاشتراك المطلوبة. يُحتسب بناءً على:</p>
<ul>
<li>متوسط القيمة المستقبلية للأجور</li>
<li>مدة الاشتراك الإجمالية</li>
<li>نسبة الاستحقاق المحددة في القانون</li>
</ul>
<h4>معاش التقاعد المبكر</h4>
<p>يُتاح قبل سن الستين مع تطبيق نسب خصم محددة. يوجد نوعان:</p>
<ul>
<li><strong>مبكر بدون خصم:</strong> عند استيفاء مدة اشتراك معينة بغض النظر عن السن</li>
<li><strong>مبكر مع خصم:</strong> للمؤمن عليه الراغب في التقاعد قبل استيفاء شروط التقاعد بدون خصم</li>
</ul>
<h4>معاش العجز</h4>
<p>يُستحق عند إصابة المؤمن عليه بعجز كامل دائم يمنعه من الكسب، قبل بلوغ سن كبار السن.</p>
<h4>معاشات المستحقين عن المؤمن عليه</h4>
<p>تُوزَّع على الزوجة والأبناء والوالدين وفق نسب محددة في القانون.</p>`,
      videos: [
        { title_ar: 'شرح آلية احتساب المعاش التقاعدي', duration: '16:55' },
        { title_ar: 'التقاعد المبكر – الشروط والخصومات', duration: '10:20' }
      ],
      audios: []
    },
    {
      id: 6,
      icon: '⚖️',
      color: '#922B21',
      bgColor: '#FFF5F5',
      title_ar: 'الباب السادس: الإجراءات والمنازعات',
      title_en: 'Chapter 6: Procedures & Disputes',
      articles_ar: 'المواد 196 – 215',
      articles_en: 'Articles 196 – 215',
      desc_ar: 'إجراءات تقديم الطلبات والتظلم والفصل في المنازعات',
      desc_en: 'Application procedures, grievances, and dispute resolution',
      content_ar: `<h3>إجراءات التقديم والتظلم</h3>
<h4>إجراءات تقديم الطلبات</h4>
<ol>
<li>تقديم الطلب إلى الصندوق مستوفياً المستندات المطلوبة</li>
<li>مراجعة الصندوق للطلب خلال المدة المحددة</li>
<li>إخطار المتقدم بقرار القبول أو الرفض مع بيان الأسباب</li>
<li>صرف المستحقات وفق الجدول الزمني المحدد</li>
</ol>
<h4>حق التظلم</h4>
<p>للمنتفع أو المؤمن عليه الحق في التظلم من قرارات الصندوق خلال المدة المحددة في اللائحة.</p>
<h4>تقادم الحقوق</h4>
<p>تسقط المطالبات بانقضاء 5 سنوات من تاريخ استحقاق الحق، ولا يبدأ سريان مدة التقادم إلا من الوقت الذي يصبح فيه الدين مستحق الأداء.</p>`,
      videos: [
        { title_ar: 'كيفية تقديم طلبات الاستحقاق', duration: '08:30' }
      ],
      audios: [
        { title_ar: 'ملخص – إجراءات التظلم', duration: '04:00' }
      ]
    }
  ],

  quizzes: [
    {
      id: 1,
      title_ar: 'التعريفات والأحكام العامة',
      title_en: 'Definitions & General Provisions',
      icon: '📖',
      color: '#1A5276',
      bgColor: '#EFF6FF',
      questions_count: 10,
      time_min: 10,
      level_ar: 'مبتدئ',
      level_en: 'Beginner',
      questions: [
        {
          q_ar: 'ما هو سن كبار السن المنصوص عليه في قانون الحماية الاجتماعية؟',
          q_en: 'What is the old-age threshold defined in the Social Protection Law?',
          options_ar: ['50 سنة', '55 سنة', '60 سنة', '65 سنة'],
          options_en: ['50 years', '55 years', '60 years', '65 years'],
          correct: 2
        },
        {
          q_ar: 'من هو "صاحب العمل" وفق تعريف القانون؟',
          q_en: 'Who is an "employer" according to the law?',
          options_ar: ['الحكومة فقط', 'الشركات الكبرى فقط', 'كل شخص طبيعي أو اعتباري يعمل لديه موظف أو أكثر', 'المؤسسات العامة فقط'],
          options_en: ['Government only', 'Large companies only', 'Any natural or legal person with one or more employees', 'Public institutions only'],
          correct: 2
        },
        {
          q_ar: 'ما أقصى نسبة يجوز الحجز عليها من مستحقات المؤمن عليه؟',
          q_en: 'What is the maximum portion of benefits that can be seized?',
          options_ar: ['النصف', 'الثلث', 'الربع', 'الخمس'],
          options_en: ['Half', 'One third', 'One quarter', 'One fifth'],
          correct: 2
        },
        {
          q_ar: 'كم عدد فروع منافع الحماية الاجتماعية في القانون؟',
          q_en: 'How many social protection benefit branches are defined in the law?',
          options_ar: ['5', '6', '7', '8'],
          options_en: ['5', '6', '7', '8'],
          correct: 2
        },
        {
          q_ar: 'كم عدد فروع التأمين الاجتماعي في القانون؟',
          q_en: 'How many social insurance branches are defined in the law?',
          options_ar: ['4', '5', '6', '7'],
          options_en: ['4', '5', '6', '7'],
          correct: 2
        },
        {
          q_ar: 'من يصدر اللائحة التنفيذية لقانون الحماية الاجتماعية؟',
          q_en: 'Who issues the executive regulations of the Social Protection Law?',
          options_ar: ['وزير التنمية الاجتماعية', 'مجلس الوزراء', 'رئيس مجلس إدارة الصندوق', 'المجلس الأعلى للتخطيط'],
          options_en: ['Minister of Social Development', 'Council of Ministers', 'Chairman of the Fund Board', 'Supreme Council for Planning'],
          correct: 2
        },
        {
          q_ar: 'خلال كم شهراً تُصدر اللائحة التنفيذية من تاريخ المرسوم؟',
          q_en: 'Within how many months must the executive regulations be issued?',
          options_ar: ['3 أشهر', '6 أشهر', '9 أشهر', 'سنة كاملة'],
          options_en: ['3 months', '6 months', '9 months', '1 year'],
          correct: 1
        },
        {
          q_ar: 'بعد كم سنة تسقط حقوق المطالبة بالمستحقات؟',
          q_en: 'After how many years do benefit claims lapse?',
          options_ar: ['سنة واحدة', '3 سنوات', '5 سنوات', '10 سنوات'],
          options_en: ['1 year', '3 years', '5 years', '10 years'],
          correct: 2
        },
        {
          q_ar: 'بأي معدل يرتفع سن كبار السن وفق القانون؟',
          q_en: 'At what rate does the old-age threshold increase?',
          options_ar: ['عام كل عامين', 'عام كل 3 أعوام', 'عام كل 4 أعوام', 'عام كل 5 أعوام'],
          options_en: ['1 year every 2 years', '1 year every 3 years', '1 year every 4 years', '1 year every 5 years'],
          correct: 1
        },
        {
          q_ar: 'ما المقصود بـ"الراتب الخاضع للاشتراك"؟',
          q_en: 'What does "contribution salary" mean?',
          options_ar: ['الراتب الأساسي فقط', 'الراتب الإجمالي بما فيه البدلات', 'الأجر بما لا يجاوز السقف المحدد في كل فرع', 'الراتب الصافي بعد الخصومات'],
          options_en: ['Basic salary only', 'Total salary including allowances', 'Salary not exceeding the cap per branch', 'Net salary after deductions'],
          correct: 2
        }
      ]
    },
    {
      id: 2,
      title_ar: 'فروع منافع الحماية الاجتماعية',
      title_en: 'Social Protection Benefit Branches',
      icon: '🛡️',
      color: '#1E8449',
      bgColor: '#F0FDF4',
      questions_count: 10,
      time_min: 10,
      level_ar: 'متوسط',
      level_en: 'Intermediate',
      questions: [
        {
          q_ar: 'أي من التالية ليس فرعاً من فروع منافع الحماية الاجتماعية؟',
          q_en: 'Which of the following is NOT a social protection benefit branch?',
          options_ar: ['منفعة كبار السن', 'منفعة الأيتام والأرامل', 'منفعة الأمومة', 'منفعة الأمان الوظيفي'],
          options_en: ['Old age benefit', 'Orphans & widows benefit', 'Maternity benefit', 'Job security benefit'],
          correct: 3
        },
        {
          q_ar: 'ما سن استحقاق منفعة كبار السن عند صدور القانون؟',
          q_en: 'What is the eligible age for the old-age benefit at the time of enactment?',
          options_ar: ['55 سنة', '58 سنة', '60 سنة', '65 سنة'],
          options_en: ['55', '58', '60', '65'],
          correct: 2
        },
        {
          q_ar: 'فرع منفعة الباحثين عن عمل يستهدف:',
          q_en: 'The first-time job seekers benefit targets:',
          options_ar: ['العمال المفصولين', 'المتقدمين للعمل لأول مرة بعد التخرج', 'أصحاب المشاريع الصغيرة', 'العمانيين في الخارج'],
          options_en: ['Dismissed workers', 'First-time job seekers after graduation', 'Small business owners', 'Omanis abroad'],
          correct: 1
        },
        {
          q_ar: 'فرع منفعة دعم دخل الأسر يهدف إلى:',
          q_en: 'The family income support branch aims to:',
          options_ar: ['دعم الأسر الغنية', 'رفع مستوى دخل الأسر ذات الدخل المحدود', 'دعم أصحاب الأعمال', 'تمويل المشاريع'],
          options_en: ['Support wealthy families', 'Raise income of low-income families', 'Support employers', 'Fund projects'],
          correct: 1
        },
        {
          q_ar: 'من يستحق فرع منفعة الطفولة؟',
          q_en: 'Who is eligible for the childhood benefit?',
          options_ar: ['الأطفال العمانيون في الأسر المحتاجة', 'جميع الأطفال العمانيين', 'الطلاب الجامعيون', 'الأطفال غير العمانيين'],
          options_en: ['Omani children in needy families', 'All Omani children', 'University students', 'Non-Omani children'],
          correct: 0
        },
        {
          q_ar: 'فرع منفعة الأيتام والأرامل يستهدف:',
          q_en: 'The orphans and widows benefit targets:',
          options_ar: ['جميع الأرامل', 'العمانيين الذين فقدوا عائلهم ولا يحصلون على دخل كافٍ', 'الأرامل الأجنبيات', 'العزاب'],
          options_en: ['All widows', 'Omanis who lost their breadwinners with no adequate income', 'Foreign widows', 'Singles'],
          correct: 1
        },
        {
          q_ar: 'هل يمكن الجمع بين أكثر من منفعة من منافع الحماية الاجتماعية؟',
          q_en: 'Can multiple social protection benefits be combined?',
          options_ar: ['نعم دائماً', 'لا أبداً', 'وفق الشروط والضوابط المنصوص عليها في اللائحة', 'فقط للمتقاعدين'],
          options_en: ['Always yes', 'Never', 'Per terms in the regulations', 'Only for retirees'],
          correct: 2
        },
        {
          q_ar: 'منفعة الأمومة في فروع الحماية الاجتماعية تختلف عن تأمين إجازات الأمومة في أنها تستهدف:',
          q_en: 'The maternity benefit differs from maternity leave insurance in that it targets:',
          options_ar: ['العاملات في القطاع الخاص', 'الأمهات غير العاملات أو غير المشمولات بالتأمين', 'العاملات الحكوميات', 'الأجنبيات المقيمات'],
          options_en: ['Private sector employees', 'Non-working or uninsured mothers', 'Government employees', 'Foreign residents'],
          correct: 1
        },
        {
          q_ar: 'أي جهة تحدد الشروط التفصيلية لاستحقاق منافع الحماية الاجتماعية؟',
          q_en: 'Which entity sets the detailed eligibility conditions for social protection benefits?',
          options_ar: ['وزارة العمل', 'اللائحة التنفيذية الصادرة عن مجلس إدارة الصندوق', 'البرلمان', 'المحاكم'],
          options_en: ['Ministry of Labour', 'Executive regulations issued by the Fund Board', 'Parliament', 'Courts'],
          correct: 1
        },
        {
          q_ar: 'كيف يُموَّل فرع منافع الحماية الاجتماعية بشكل رئيسي؟',
          q_en: 'How is the social protection benefit branch primarily funded?',
          options_ar: ['اشتراكات العمال فقط', 'تبرعات المجتمع', 'تمويل حكومي من ميزانية الدولة', 'رسوم الخدمات'],
          options_en: ['Worker contributions only', 'Community donations', 'Government funding from state budget', 'Service fees'],
          correct: 2
        }
      ]
    },
    {
      id: 3,
      title_ar: 'فروع التأمين الاجتماعي',
      title_en: 'Social Insurance Branches',
      icon: '💼',
      color: '#7D3C98',
      bgColor: '#F9F0FF',
      questions_count: 8,
      time_min: 8,
      level_ar: 'متوسط',
      level_en: 'Intermediate',
      questions: [
        {
          q_ar: 'فرع الأمان الوظيفي يوفر تعويضاً لمن؟',
          q_en: 'The job security branch provides compensation to whom?',
          options_ar: ['المتقاعدين', 'العمال العمانيين الذين يفقدون وظائفهم لا إرادياً', 'أصحاب العمل المفلسين', 'الطلاب'],
          options_en: ['Retirees', 'Omani workers who involuntarily lose their jobs', 'Bankrupt employers', 'Students'],
          correct: 1
        },
        {
          q_ar: 'فرع تأمين إصابات العمل يشمل:',
          q_en: 'Work injuries insurance covers:',
          options_ar: ['الإصابات المنزلية فقط', 'الإصابات أثناء العمل والأمراض المهنية', 'الأمراض المزمنة فقط', 'الحوادث المرورية'],
          options_en: ['Home injuries only', 'Work injuries and occupational diseases', 'Chronic diseases only', 'Traffic accidents'],
          correct: 1
        },
        {
          q_ar: 'من يشمله فرع التأمين الصحي الاجتماعي بشكل رئيسي؟',
          q_en: 'Who does the social health insurance branch primarily cover?',
          options_ar: ['جميع المقيمين', 'العمانيون غير المشمولين بالتأمين الصحي الحكومي', 'الأجانب فقط', 'طلاب الجامعات فقط'],
          options_en: ['All residents', 'Omanis not covered by government health insurance', 'Foreigners only', 'University students only'],
          correct: 1
        },
        {
          q_ar: 'متى يُطبَّق فرع تأمين إصابات العمل على العمال غير العمانيين وفق القانون؟',
          q_en: 'When does work injury insurance apply to non-Omani workers per the law?',
          options_ar: ['فور صدور المرسوم', 'بعد سنة من صدور المرسوم', 'بعد 3 سنوات من صدور المرسوم', 'لا يشملهم القانون'],
          options_en: ['Immediately upon decree', 'One year after decree', '3 years after decree', 'Law does not cover them'],
          correct: 2
        },
        {
          q_ar: 'ما العجز الذي يستحق معاش العجز الكامل؟',
          q_en: 'What disability qualifies for full disability pension?',
          options_ar: ['أي إصابة', 'عجز جزئي مؤقت', 'عجز يمنع المؤمن عليه نهائياً من الكسب', 'مرض مزمن فقط'],
          options_en: ['Any injury', 'Partial temporary disability', 'Total permanent inability to earn', 'Chronic disease only'],
          correct: 2
        },
        {
          q_ar: 'فرع تأمين الإجازات المرضية يهدف إلى:',
          q_en: 'Sick leave insurance aims to:',
          options_ar: ['منح إجازات إضافية', 'ضمان استمرارية الدخل خلال المرض المطوّل', 'تمويل علاج المؤمن عليه', 'دفع رواتب الإجازة السنوية'],
          options_en: ['Grant extra leave', 'Ensure income continuity during prolonged illness', 'Fund medical treatment', 'Pay annual leave salaries'],
          correct: 1
        },
        {
          q_ar: 'كم فرعاً يتضمن نظام التأمين الاجتماعي في القانون الجديد؟',
          q_en: 'How many branches does the social insurance system include in the new law?',
          options_ar: ['4', '5', '6', '7'],
          options_en: ['4', '5', '6', '7'],
          correct: 2
        },
        {
          q_ar: 'من يُعدّ "مريضاً مهنياً" وفق القانون؟',
          q_en: 'Who is considered a "professional patient" under the law?',
          options_ar: ['أي مريض', 'من أصيب بمرض ينشأ بسبب العمل في مهنة أو صناعة معينة', 'من يعاني من أمراض وراثية', 'من تجاوز 50 سنة'],
          options_en: ['Any patient', 'One who develops a disease caused by their specific profession', 'Those with hereditary diseases', 'Those over 50'],
          correct: 1
        }
      ]
    },
    {
      id: 4,
      title_ar: 'إجراءات تقديم الخدمات',
      title_en: 'Service Delivery Procedures',
      icon: '📋',
      color: '#1A6A8A',
      bgColor: '#E0F7FA',
      questions_count: 8,
      time_min: 8,
      level_ar: 'تطبيقي',
      level_en: 'Applied',
      questions: [
        {
          q_ar: 'ما الجهة التي يلجأ إليها المتقدم إذا رُفض طلبه؟',
          q_en: 'Where does an applicant go if their request is rejected?',
          options_ar: ['المحكمة مباشرة', 'الصندوق للتظلم وفق الإجراءات المحددة', 'وزارة العمل', 'مجلس الوزراء'],
          options_en: ['Court directly', 'The Fund through the grievance process', 'Ministry of Labour', 'Council of Ministers'],
          correct: 1
        },
        {
          q_ar: 'متى يجب إبلاغ الصندوق عن أي تغيير يؤثر على قيمة المستحقات؟',
          q_en: 'When must the Fund be notified of any change affecting benefit value?',
          options_ar: ['في نهاية السنة', 'فور حدوث التغيير وفق ما تحدده اللائحة', 'بعد 6 أشهر', 'لا يلزم الإبلاغ'],
          options_en: ['End of year', 'Upon occurrence as per regulations', 'After 6 months', 'No notification needed'],
          correct: 1
        },
        {
          q_ar: 'ما مسؤولية صاحب العمل في نظام الحماية الاجتماعية؟',
          q_en: 'What is the employer\'s responsibility in the social protection system?',
          options_ar: ['لا توجد مسؤولية', 'تسجيل العمال وحجب الاشتراكات وتحويلها للصندوق', 'توفير التأمين الصحي فقط', 'دفع المعاشات مباشرة'],
          options_en: ['No responsibility', 'Register workers, withhold and transfer contributions', 'Provide health insurance only', 'Pay pensions directly'],
          correct: 1
        },
        {
          q_ar: 'ما الوثيقة الأساسية التي تحدد كيفية صرف المنافع ومواعيدها؟',
          q_en: 'What key document defines how and when benefits are paid?',
          options_ar: ['القانون مباشرة', 'اللائحة التنفيذية', 'قرار مجلس الوزراء', 'توجيهات الوزارة'],
          options_en: ['The law directly', 'The executive regulations', 'Cabinet decree', 'Ministerial directives'],
          correct: 1
        },
        {
          q_ar: 'ما حق الصندوق في استرداد المبالغ المصروفة بغير حق؟',
          q_en: 'What right does the Fund have to reclaim benefits paid by mistake?',
          options_ar: ['لا يحق له الاسترداد', 'يحق له الاسترداد خلال 5 سنوات', 'يحق له الاسترداد خلال سنة واحدة', 'الاسترداد فوري وغير مقيد بمدة'],
          options_en: ['No right to reclaim', 'Can reclaim within 5 years', 'Can reclaim within 1 year', 'Immediate reclaim with no time limit'],
          correct: 1
        },
        {
          q_ar: 'من له أولوية السداد عند تزاحم الديون على مستحقات المؤمن عليه؟',
          q_en: 'Who has payment priority when debts compete on insured benefits?',
          options_ar: ['الدولة أولاً', 'الصندوق أولاً', 'دين النفقة أولاً ثم الصندوق ثم الدولة', 'جميعهم بالتساوي'],
          options_en: ['State first', 'Fund first', 'Alimony first, then Fund, then State', 'All equally'],
          correct: 2
        },
        {
          q_ar: 'ما نوع الامتياز الذي تتمتع به المبالغ المستحقة للصندوق؟',
          q_en: 'What privilege do amounts owed to the Fund enjoy?',
          options_ar: ['لا امتياز', 'امتياز على جميع أموال المدين', 'امتياز على العقارات فقط', 'امتياز على الرواتب فقط'],
          options_en: ['No privilege', 'Privilege over all debtor assets', 'Privilege over real estate only', 'Privilege over salaries only'],
          correct: 1
        },
        {
          q_ar: 'ما الذي يترتب على التأخر في سداد الاشتراكات؟',
          q_en: 'What happens upon delayed contribution payment?',
          options_ar: ['لا شيء', 'إنذار فقط', 'غرامات تأخير وفق اللائحة', 'سجن صاحب العمل'],
          options_en: ['Nothing', 'Warning only', 'Late fines per regulations', 'Imprisonment of employer'],
          correct: 2
        }
      ]
    },
    {
      id: 5,
      title_ar: 'اختبار الاستعداد الشامل',
      title_en: 'Comprehensive Readiness Test',
      icon: '🏆',
      color: '#B7950B',
      bgColor: '#FFFBEB',
      questions_count: 15,
      time_min: 20,
      level_ar: 'متقدم',
      level_en: 'Advanced',
      questions: [
        {
          q_ar: 'متى صدر قانون الحماية الاجتماعية؟',
          q_en: 'When was the Social Protection Law enacted?',
          options_ar: ['2021', '2022', '2023', '2024'],
          options_en: ['2021', '2022', '2023', '2024'],
          correct: 2
        },
        {
          q_ar: 'ما الاسم الرسمي للجهة المشرفة على تطبيق القانون؟',
          q_en: 'What is the official name of the supervising body?',
          options_ar: ['هيئة التأمينات الاجتماعية', 'صندوق الحماية الاجتماعية', 'وزارة التنمية الاجتماعية', 'مجلس العمل'],
          options_en: ['Social Insurance Authority', 'Social Protection Fund', 'Ministry of Social Development', 'Labour Council'],
          correct: 1
        },
        {
          q_ar: 'ما الفرق بين "المنتفع" و"المؤمن عليه"؟',
          q_en: 'What is the difference between "beneficiary" and "insured"?',
          options_ar: ['لا فرق', 'المنتفع يستحق منافع الحماية، والمؤمن عليه يشمله التأمين الاجتماعي', 'المنتفع هو صاحب العمل', 'المؤمن عليه متقاعد فقط'],
          options_en: ['No difference', 'Beneficiary gets protection benefits; insured is covered by social insurance', 'Beneficiary is the employer', 'Insured is retiree only'],
          correct: 1
        },
        {
          q_ar: 'ما الهدف الرئيسي لقانون الحماية الاجتماعية؟',
          q_en: 'What is the main goal of the Social Protection Law?',
          options_ar: ['تحصيل الرسوم الحكومية', 'توفير شبكة أمان اجتماعي شاملة للمواطنين', 'تنظيم سوق العمل فقط', 'إلغاء الأنظمة السابقة فقط'],
          options_en: ['Collect government fees', 'Provide a comprehensive social safety net for citizens', 'Regulate labour market only', 'Cancel old systems only'],
          correct: 1
        },
        {
          q_ar: 'ما الوثيقة التي تبين تفاصيل نظام ومواعيد صرف المنافع؟',
          q_en: 'What document details the system and timing of benefit payments?',
          options_ar: ['القانون', 'اللائحة التنفيذية', 'قرار مجلس الإدارة', 'توجيهات الوزير'],
          options_en: ['The law', 'Executive regulations', 'Board decision', 'Ministerial directive'],
          correct: 1
        },
        {
          q_ar: 'هل يمكن الجمع بين معاش التقاعد ومنفعة دعم الدخل؟',
          q_en: 'Can retirement pension and income support benefit be combined?',
          options_ar: ['نعم دائماً', 'لا أبداً', 'وفق الشروط المحددة في اللائحة', 'للمتقاعدين الأجانب فقط'],
          options_en: ['Always yes', 'Never', 'Per conditions in regulations', 'For foreign retirees only'],
          correct: 2
        },
        {
          q_ar: 'ما الفصل الذي ينطبق على إجازات الأمومة للعاملات في القطاع الخاص؟',
          q_en: 'Which chapter applies to maternity leave for private sector employees?',
          options_ar: ['فروع منافع الحماية الاجتماعية', 'فروع التأمين الاجتماعي', 'أحكام عامة', 'الإجراءات والمنازعات'],
          options_en: ['Social protection benefit branches', 'Social insurance branches', 'General provisions', 'Procedures & disputes'],
          correct: 1
        },
        {
          q_ar: 'ما مسؤولية المؤمن عليه عند تغيير وضعه الوظيفي؟',
          q_en: 'What is the insured person\'s responsibility upon employment status change?',
          options_ar: ['لا توجد مسؤولية', 'إبلاغ الصندوق فور التغيير', 'إبلاغ صاحب العمل فقط', 'إبلاغ الصندوق بعد سنة'],
          options_en: ['No responsibility', 'Notify Fund immediately upon change', 'Notify employer only', 'Notify Fund after a year'],
          correct: 1
        },
        {
          q_ar: 'أيٌّ من التالي مصدر لتمويل نظام الحماية الاجتماعية؟',
          q_en: 'Which of the following is a source of social protection funding?',
          options_ar: ['اشتراكات أصحاب العمل والمؤمن عليهم والتمويل الحكومي', 'التبرعات الخيرية فقط', 'رسوم الخدمات فقط', 'الديون الخارجية'],
          options_en: ['Employer & employee contributions and government funding', 'Charitable donations only', 'Service fees only', 'Foreign debt'],
          correct: 0
        },
        {
          q_ar: 'ما المرسوم السلطاني الذي صدر به قانون الحماية الاجتماعية؟',
          q_en: 'Which royal decree enacted the Social Protection Law?',
          options_ar: ['المرسوم رقم 2/2021', 'المرسوم رقم 53/2023', 'المرسوم رقم 3/2023', 'المرسوم رقم 1/2024'],
          options_en: ['Decree 2/2021', 'Decree 53/2023', 'Decree 3/2023', 'Decree 1/2024'],
          correct: 2
        },
        {
          q_ar: 'من يصدر قرار تحديد متوسط نمو الأجور سنوياً؟',
          q_en: 'Who issues the annual average wage growth decision?',
          options_ar: ['وزير المالية', 'مجلس الوزراء', 'مجلس إدارة الصندوق', 'البنك المركزي'],
          options_en: ['Finance Minister', 'Cabinet', 'Fund Board of Directors', 'Central Bank'],
          correct: 2
        },
        {
          q_ar: 'متى يُعمل بالقرار السنوي لتحديد سقف أجر الاشتراك؟',
          q_en: 'When does the annual contribution salary cap decision take effect?',
          options_ar: ['فور إصداره', 'في بداية العام التالي', 'بعد موافقة الوزير', 'بعد نشره في الجريدة الرسمية بشهر'],
          options_en: ['Immediately upon issuance', 'At the start of the following year', 'After ministerial approval', 'One month after official gazette publication'],
          correct: 1
        },
        {
          q_ar: 'ما الحد الزمني لإصدار القرار السنوي بتحديد سقف الأجر؟',
          q_en: 'What is the deadline for issuing the annual salary cap decision?',
          options_ar: ['قبل نهاية السنة بأسبوع', 'قبل نهاية السنة بشهر على الأقل', 'في بداية السنة الجديدة', 'لا يوجد حد زمني'],
          options_en: ['One week before year end', 'At least one month before year end', 'At start of new year', 'No deadline'],
          correct: 1
        },
        {
          q_ar: 'ما الذي يتميز به الحجز لدين النفقة مقارنة بديون الصندوق والدولة؟',
          q_en: 'What distinguishes an alimony seizure from Fund or State debt seizure?',
          options_ar: ['لا يوجد فرق', 'دين النفقة له الأولوية في السداد', 'ديون الصندوق لها الأولوية', 'ديون الدولة لها الأولوية'],
          options_en: ['No difference', 'Alimony debt has payment priority', 'Fund debts have priority', 'State debts have priority'],
          correct: 1
        },
        {
          q_ar: 'ما مصير المستحقات التي انقضت مدة التقادم بشأنها دون مطالبة؟',
          q_en: 'What happens to benefits for which the limitation period lapses without a claim?',
          options_ar: ['تُعاد للمؤمن عليه', 'تؤول إلى الصندوق', 'تُحفظ للمستحق مدى الحياة', 'تُحوَّل للخزينة العامة'],
          options_en: ['Returned to insured', 'Transferred to the Fund', 'Kept for beneficiary for life', 'Transferred to public treasury'],
          correct: 1
        }
      ]
    }
  ],

  training_programs: [
    {
      id: 1,
      title_ar: 'برنامج الموظف الجديد',
      title_en: 'New Employee Program',
      desc_ar: 'برنامج شامل لتأهيل الموظفين الجدد في دائرة خدمة المتعاملين',
      desc_en: 'Comprehensive onboarding for new customer service staff',
      icon: '🌱',
      color: '#27AE60',
      duration_ar: '5 وحدات • 4 أسابيع',
      duration_en: '5 modules • 4 weeks',
      modules: [
        { id: 1, title_ar: 'مقدمة في صندوق الحماية الاجتماعية', title_en: 'Introduction to the Social Protection Fund', duration_ar: '2 ساعة', status: 'done' },
        { id: 2, title_ar: 'أساسيات قانون الحماية الاجتماعية', title_en: 'Fundamentals of the Social Protection Law', duration_ar: '4 ساعات', status: 'done' },
        { id: 3, title_ar: 'إجراءات تقديم الخدمات', title_en: 'Service Delivery Procedures', duration_ar: '3 ساعات', status: 'active' },
        { id: 4, title_ar: 'مهارات التواصل مع المتعاملين', title_en: 'Communication Skills with Clients', duration_ar: '3 ساعات', status: 'locked' },
        { id: 5, title_ar: 'اختبار الاستعداد النهائي', title_en: 'Final Readiness Assessment', duration_ar: '1 ساعة', status: 'locked' }
      ]
    },
    {
      id: 2,
      title_ar: 'برنامج التطوير المهني',
      title_en: 'Professional Development Program',
      desc_ar: 'تطوير مهارات الموظفين الحاليين في تطبيق القانون ومعالجة الحالات المعقدة',
      desc_en: 'Enhance skills of existing staff in law application and complex case handling',
      icon: '📈',
      color: '#2E86C1',
      duration_ar: '6 وحدات • 6 أسابيع',
      duration_en: '6 modules • 6 weeks',
      modules: [
        { id: 1, title_ar: 'مراجعة قانون الحماية الاجتماعية الجديد', title_en: 'Review of New Social Protection Law', duration_ar: '3 ساعات', status: 'done' },
        { id: 2, title_ar: 'الحالات المعقدة والاستثنائية', title_en: 'Complex & Exceptional Cases', duration_ar: '4 ساعات', status: 'done' },
        { id: 3, title_ar: 'تحليل البيانات وإعداد التقارير', title_en: 'Data Analysis & Reporting', duration_ar: '3 ساعات', status: 'done' },
        { id: 4, title_ar: 'إدارة شكاوى المتعاملين', title_en: 'Client Complaint Management', duration_ar: '2 ساعات', status: 'active' },
        { id: 5, title_ar: 'أخلاقيات العمل والسرية', title_en: 'Work Ethics & Confidentiality', duration_ar: '2 ساعات', status: 'locked' },
        { id: 6, title_ar: 'اختبار إتقان المهارات', title_en: 'Skills Mastery Assessment', duration_ar: '1 ساعة', status: 'locked' }
      ]
    },
    {
      id: 3,
      title_ar: 'برنامج القيادة الإدارية',
      title_en: 'Leadership Program',
      desc_ar: 'برنامج متخصص لقيادات دائرة خدمة المتعاملين والمشرفين',
      desc_en: 'Specialized program for customer service leaders and supervisors',
      icon: '🏆',
      color: '#C8A951',
      duration_ar: '4 وحدات • 3 أسابيع',
      duration_en: '4 modules • 3 weeks',
      modules: [
        { id: 1, title_ar: 'قيادة فرق الخدمة', title_en: 'Leading Service Teams', duration_ar: '3 ساعات', status: 'locked' },
        { id: 2, title_ar: 'مؤشرات الأداء وقياسه', title_en: 'KPIs & Performance Measurement', duration_ar: '3 ساعات', status: 'locked' },
        { id: 3, title_ar: 'تطوير الكفاءات الوظيفية', title_en: 'Staff Competency Development', duration_ar: '2 ساعات', status: 'locked' },
        { id: 4, title_ar: 'اختبار القيادة والإدارة', title_en: 'Leadership & Management Assessment', duration_ar: '1 ساعة', status: 'locked' }
      ]
    }
  ],

  knowledge_articles: [
    { id: 1, tag_ar: 'التعريفات', tag_en: 'Definitions', color: '#1A5276', title_ar: 'من هو المؤمن عليه؟', title_en: 'Who is the insured person?', excerpt_ar: 'كل من تسري عليه أحكام فروع التأمين الاجتماعي وفقاً لأحكام هذا القانون بصفة إلزامية أو اختيارية، بما يشمل موظفي القطاعين العام والخاص والعاملين لحسابهم الخاص.', excerpt_en: 'Anyone subject to social insurance branch provisions, whether mandatory or voluntary, including public/private sector employees and self-employed individuals.' },
    { id: 2, tag_ar: 'المنافع', tag_en: 'Benefits', color: '#1E8449', title_ar: 'فروع منافع الحماية الاجتماعية السبعة', title_en: 'The Seven Social Protection Benefit Branches', excerpt_ar: 'يشمل القانون سبعة فروع للمنافع: كبار السن، ذوو الإعاقة، الأيتام والأرامل، الطفولة، دعم دخل الأسر، الباحثون عن عمل لأول مرة، والأمومة.', excerpt_en: 'The law includes seven benefit branches: elderly, disability, orphans & widows, childhood, family income support, first-time job seekers, and maternity.' },
    { id: 3, tag_ar: 'التأمين', tag_en: 'Insurance', color: '#7D3C98', title_ar: 'فروع التأمين الاجتماعي الستة', title_en: 'The Six Social Insurance Branches', excerpt_ar: 'يتضمن نظام التأمين الاجتماعي ستة فروع: كبار السن والعجز والوفاة، إصابات العمل، الأمان الوظيفي، الإجازات المرضية، إجازات الأمومة، والتأمين الصحي.', excerpt_en: 'Social insurance includes six branches: old age/disability/death, work injuries, job security, sick leave, maternity leave, and health insurance.' },
    { id: 4, tag_ar: 'الاشتراكات', tag_en: 'Contributions', color: '#B7950B', title_ar: 'كيف تُحتسب اشتراكات الصندوق؟', title_en: 'How are Fund contributions calculated?', excerpt_ar: 'تُحتسب الاشتراكات بناءً على الراتب الخاضع للاشتراك الذي لا يتجاوز السقف المحدد من مجلس الإدارة سنوياً. يتحمل كل من صاحب العمل والمؤمن عليه نسبة محددة.', excerpt_en: 'Contributions are calculated based on the contribution salary not exceeding the annual cap set by the Board. Both employer and employee bear specified percentages.' },
    { id: 5, tag_ar: 'المعاشات', tag_en: 'Pensions', color: '#1A6A8A', title_ar: 'شروط استحقاق معاش التقاعد', title_en: 'Retirement Pension Eligibility Conditions', excerpt_ar: 'يستحق معاش التقاعد عند بلوغ سن 60 عاماً مع استيفاء مدة الاشتراك المطلوبة. يمكن التقاعد المبكر وفق شروط محددة مع أو بدون نسب خصم.', excerpt_en: 'Retirement pension is earned upon reaching 60 years with required contribution period. Early retirement is possible under specific conditions with or without reduction rates.' },
    { id: 6, tag_ar: 'الإجراءات', tag_en: 'Procedures', color: '#922B21', title_ar: 'إجراءات تقديم طلب المنافع', title_en: 'Benefit Application Procedures', excerpt_ar: 'تُقدَّم الطلبات إلى الصندوق مستوفيةً المستندات المطلوبة. يراجع الصندوق الطلب ويخطر المتقدم بالقرار. يحق التظلم من قرارات الرفض وفق الإجراءات المحددة.', excerpt_en: 'Applications are submitted to the Fund with required documents. The Fund reviews and notifies the applicant. Rejected decisions can be appealed per specified procedures.' },
    { id: 7, tag_ar: 'الحقوق', tag_en: 'Rights', color: '#1A5276', title_ar: 'الحجز على مستحقات المؤمن عليه', title_en: 'Seizure of Insured Benefits', excerpt_ar: 'لا يجوز الحجز على مستحقات المؤمن عليه لدى الصندوق إلا للوفاء بدين النفقة أو ديون الصندوق أو الدولة، بما لا يجاوز ربع المستحقات.', excerpt_en: 'Benefits cannot be seized except for alimony or Fund/State debts, and not exceeding one quarter of entitlements.' },
    { id: 8, tag_ar: 'التقادم', tag_en: 'Limitation', color: '#1E8449', title_ar: 'مدة التقادم في المطالبات', title_en: 'Limitation Period for Claims', excerpt_ar: 'يسقط حق المنتفع في المطالبة بمستحقاته بانقضاء 5 سنوات. ولا يبدأ سريان التقادم إلا من الوقت الذي يصبح فيه الدين مستحقاً.', excerpt_en: 'The right to claim benefits lapses after 5 years. The limitation period only starts when the debt becomes due.' },
    { id: 9, tag_ar: 'إصابات العمل', tag_en: 'Work Injuries', color: '#7D3C98', title_ar: 'تعريف إصابة العمل والمرض المهني', title_en: 'Definition of Work Injury & Occupational Disease', excerpt_ar: 'إصابة العمل هي الإصابة التي تقع أثناء العمل أو بسببه. المرض المهني هو المرض الناشئ عن العمل في مهنة أو صناعة محددة ولا يرجع لعوامل خارجية.', excerpt_en: 'A work injury occurs during or because of work. An occupational disease arises from working in a specific profession and is not due to external factors.' },
    { id: 10, tag_ar: 'الأمان الوظيفي', tag_en: 'Job Security', color: '#B7950B', title_ar: 'فرع تأمين الأمان الوظيفي', title_en: 'Job Security Insurance Branch', excerpt_ar: 'يوفر تعويضاً مؤقتاً للعمال العمانيين الذين يفقدون وظائفهم بصورة لا إرادية. يعينهم خلال فترة البحث عن عمل جديد بمبالغ محددة وفق اللائحة.', excerpt_en: 'Provides temporary compensation to Omani workers who involuntarily lose their jobs, supporting them while seeking new employment per regulation amounts.' },
    { id: 11, tag_ar: 'العجز', tag_en: 'Disability', color: '#922B21', title_ar: 'أنواع العجز في القانون', title_en: 'Types of Disability in the Law', excerpt_ar: 'يُميّز القانون بين عجز مهني جزئي دائم وعجز كامل دائم. كما يُفرّق بين عجز ناتج عن إصابة عمل وعجز ناشئ عن مرض عام.', excerpt_en: 'The law distinguishes between partial permanent professional disability and total permanent disability. It also differentiates work-injury disability from general disease disability.' },
    { id: 12, tag_ar: 'الأمومة', tag_en: 'Maternity', color: '#1A6A8A', title_ar: 'فرعا الأمومة: الفرق بينهما', title_en: 'Two Maternity Branches: The Difference', excerpt_ar: 'فرع منفعة الأمومة (حماية اجتماعية) للأمهات غير العاملات، أما فرع تأمين إجازات الأمومة فهو للعاملات في القطاع الخاص المسجلات في التأمين الاجتماعي.', excerpt_en: 'Maternity benefit branch (social protection) is for non-working mothers; maternity leave insurance branch is for private sector working women registered with social insurance.' }
  ],

  employees: [
    { id: 1, name_ar: 'أحمد بن سالم الراشدي', name_en: 'Ahmed Al-Rashdi', dept_ar: 'خدمة المتعاملين', dept_en: 'Customer Service', progress: 85, quizAvg: 88, program_ar: 'التطوير المهني', status_ar: 'متقدم', status: 'advanced' },
    { id: 2, name_ar: 'فاطمة بنت ناصر الحارثية', name_en: 'Fatima Al-Harithiya', dept_ar: 'خدمة المتعاملين', dept_en: 'Customer Service', progress: 45, quizAvg: 72, program_ar: 'الموظف الجديد', status_ar: 'قيد التدريب', status: 'training' },
    { id: 3, name_ar: 'محمد بن عيسى البلوشي', name_en: 'Mohammed Al-Balushi', dept_ar: 'المنافع', dept_en: 'Benefits', progress: 100, quizAvg: 94, program_ar: 'التطوير المهني', status_ar: 'مؤهل', status: 'qualified' },
    { id: 4, name_ar: 'سارة بنت خالد الشريفية', name_en: 'Sara Al-Sharifiya', dept_ar: 'التأمين', dept_en: 'Insurance', progress: 60, quizAvg: 79, program_ar: 'الموظف الجديد', status_ar: 'قيد التدريب', status: 'training' },
    { id: 5, name_ar: 'يوسف بن حمد الزدجالي', name_en: 'Yousuf Al-Zadjali', dept_ar: 'خدمة المتعاملين', dept_en: 'Customer Service', progress: 20, quizAvg: 55, program_ar: 'الموظف الجديد', status_ar: 'مبتدئ', status: 'beginner' },
    { id: 6, name_ar: 'نورة بنت سعيد المعمرية', name_en: 'Noura Al-Maamaria', dept_ar: 'المنافع', dept_en: 'Benefits', progress: 95, quizAvg: 91, program_ar: 'القيادة الإدارية', status_ar: 'متقدم', status: 'advanced' }
  ]

};
