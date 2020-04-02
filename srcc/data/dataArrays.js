export const categories = [
  {
    id: 0,
    name: 'مناسك الحج',
    photo_url:
    'https://media.giphy.com/media/KtyoN4Rjrz3Lq/giphy.gif'
  },
  {
    id: 1,
    name: 'مناسك العمرة',
    photo_url: 'https://media.giphy.com/media/8RCxqyKMdY0zm/giphy.gif'
  },
  {
    id: 2,
    name: 'الأدعية',
    photo_url:
      'https://media.giphy.com/media/UzATyIkWlF1G8/giphy.gif'
  },
  // {
  //   id: 4,
  //   name: 'Smoothies',
  //   photo_url:
  //   'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/still-life-of-three-fresh-smoothies-in-front-of-royalty-free-image-561093647-1544042068.jpg?crop=0.715xw:0.534xh;0.0945xw,0.451xh&resize=768:*'
  // },
  // {
  //   id: 0,
  //   name: 'Pizza',
  //   photo_url: 'https://amp.businessinsider.com/images/5c084bf7bde70f4ea53f0436-750-563.jpg'
  // },
];

export const recipes = [
  {
    recipeId: 1,
    categoryId: 2,
    title: 'الذكر عند الاحرام',
    photo_url: 'https://i.ytimg.com/vi/Gq3mW43kpkU/maxresdefault.jpg?crop=0.803xw:0.923xh;0.116xw,0.00510xh&resize=768:*',
    photosArray: [
      'https://i.ytimg.com/vi/Gq3mW43kpkU/maxresdefault.jpg?crop=0.803xw:0.923xh;0.116xw,0.00510xh&resize=768:*',
      "http://2.bp.blogspot.com/-pci4fNS833w/TeRof4kUZnI/AAAAAAAAC3E/_bQlj3G6WJk/s1600/Beautiful+Flowers+1+%25286%2529.jpg",
      'https://www.mindfueldaily.com/wp-content/uploads/2018/img/8119.jpg',
      'http://cache.desktopnexus.com/thumbseg/1567/1567226-bigthumbnail.jpg'
    ],
    //time: '',
    ingredients: [],
    description:
      '"سُبْحَانَ اللهِ وَالحَمْدُ للهِ وَالله أَكْبَرُ"'
  },
  {
    recipeId:2,
    categoryId:2,
    title: 'دعاء التلبية في الحج والعمرة',
    photo_url:
      'https://tse1.mm.bing.net/th?id=OIP.Yu2HT7jaFvnaIn6JMEvaxwHaGl&pid=Api&P=0&w=188&h=168?crop=0.803xw:0.923xh;0.116xw,0.00510xh&resize=768:*',
    photosArray: [
      'https://tse1.mm.bing.net/th?id=OIP.Yu2HT7jaFvnaIn6JMEvaxwHaGl&pid=Api&P=0&w=188&h=168?crop=0.803xw:0.923xh;0.116xw,0.00510xh&resize=768:*',
      'https://tse2.mm.bing.net/th?id=OIP.V3gfhZFrLRewhEqqiLR3oQHaHa&pid=Api&P=0&w=300&h=300'
    ],
    time: '',
    ingredients: [ ],
    description: '"لَبَّيْكَ اللَّهُمَّ لَبَّيْك، لَبّيْك لا شَرِيكَ لك لَبَّيْك إنَّ الحَمْدَ، والنِّعْمَةَ، لَكَ والمُلْك، لا شريك لك".  [البخاري (2/ 170)، ومسلم (1184)]'
  },
  {
    recipeId: 3,
    categoryId: 2,
    title: 'الدعاء عند صعود الصَّفَا والمروة',
    photo_url: 'https://tse1.mm.bing.net/th?id=OIP.QBkNgBOgHlKdV3w3wQMQOwHaGA&pid=Api&P=0&w=234&h=191',
    photosArray: [
      'https://tse1.mm.bing.net/th?id=OIP.QBkNgBOgHlKdV3w3wQMQOwHaGA&pid=Api&P=0&w=234&h=191',
      'https://tse4.mm.bing.net/th?id=OIP.K0Z9u5QWyRsu2Rl7Xz02wgHaEK&pid=Api&P=0&w=310&h=175',
      'https://tse4.mm.bing.net/th?id=OIP.KHFpIpfE0rxshgdTLE1y7AHaFj&pid=Api&P=0&w=220&h=166',
      'https://tse3.mm.bing.net/th?id=OIP.1WkL2kFfo9a3lGqh9UXgzwHaEH&pid=Api&P=0&w=325&h=181'
    ],
    time: '',
    ingredients: [],
    description:
      'عَنْ جَابِرِ بْنِ عَبْدِ اللَّهِ رضي الله عنه، قَالَ: سَمِعْتُ رَسُولَ اللَّهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ حِينَ خَرَجَ مِنَ الْمَسْجِدِ يُرِيدُ الصَّفَا، يَقُولُ: "نَبْدَأُ بِمَا بَدَأَ بِهِ" فَبَدأَ بِالصَّفَا، وَقَرَأَ: {إِنَّ الصَّفَا وَالمَرْوَةَ مِنْ شَعَائِرِ اللَّهِ} وَكَانَ إِذَا وَقَفَ عَلَى الصَّفَا يُكَبِّرُ ثَلاثًا، وَيَقُولُ: "لَا إِلَهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، لَا إِلَهَ إِلَّا اللهُ، أَنْجَزَ وَعْدَهُ، وَنَصَرَ عَبْدَهُ، وَهَزَمَ الْأَحْزَابَ وَحْدَهُ" ثُمَّ أعاد هذا الكلام. [مسلم (1218)، وأحمد (3/ 320، 321)]'
  },
  {
    recipeId: 4,
    categoryId: 2,
    title: 'دعاء السلف الصالح في عرفات',
    photo_url:
      'https://tse4.mm.bing.net/th?id=OIP.0fD4YWmPDSMAzoLOF05mNQHaEL&pid=Api&P=0&w=290&h=164',
    photosArray: [
      'https://tse4.mm.bing.net/th?id=OIP.0fD4YWmPDSMAzoLOF05mNQHaEL&pid=Api&P=0&w=290&h=164',
      'https://tse3.mm.bing.net/th?id=OIP.UFHykrLwWuN1Z1fIFAOk-gHaE2&pid=Api&P=0&w=260&h=171',
      'https://tse2.mm.bing.net/th?id=OIP.dkfYy-AG80J2R2wfoF5VpwHaFj&pid=Api&P=0&w=216&h=163',
      'https://tse4.mm.bing.net/th?id=OIP.Z-15kPKEzw6uvqFV_9SpKQHaEO&pid=Api&P=0&w=311&h=179'
    ],
    time: '',
    ingredients: [],
    description:
      '"لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ". "اللَّهُمَّ اهْدِنَا بِالْهُدَى، وَزَيِّنَّا بِالتَّقْوَى، وَاغْفِرْ لَنَا فِي الْآخِرَةِ وَالْأُولَى". "ثُمَّ يَخْفِضُ صَوْتَهُ، ثُمَّ يَقُولُ: اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ وَعَطَائِكَ رِزْقًا طَيِّبًا مُبَارَكًا".  "اللَّهُمَّ إِنَّكَ أَمَرْتَ بِالدُّعَاءِ، وَقَضَيْتَ عَلَى نَفْسِكَ بِالِاسْتِجَابَةِ، وَأَنْتَ لَا تُخْلِفُ وَعْدَكَ، وَلَا تَكْذِبُ عَهْدَكَ، اللَّهُمَّ مَا أَحْبَبْتَ مِنْ خَيْرٍ فَحَبِّبْهُ إِلَيْنَا، وَيَسِّرْهُ لَنَا، وَمَا كَرِهْتَ مِنْ شَيْءٍ فَكَرِّهْهُ إِلَيْنَا وَجَنِّبْنَاهُ، وَلَا تَنْزِعْ عَنَّا الْإِسْلَامَ بَعْدَ إِذْ أَعْطَيْتَنَا".'
  },
  {
    recipeId: 5,
    categoryId: 2,
    title: 'دعاء الرجوع من الحج أو العمرة',
    photo_url: 'https://tse1.mm.bing.net/th?id=OIP.9VdVo0UXTmGt5sDhJB_HOQHaHa&pid=Api&P=0&w=300&h=300',
    photosArray: [
      'https://tse1.mm.bing.net/th?id=OIP.9VdVo0UXTmGt5sDhJB_HOQHaHa&pid=Api&P=0&w=300&h=300',
      'https://tse2.mm.bing.net/th?id=OIP.va_GQLXS0CyYb7-z1HPArgHaFo&pid=Api&P=0&w=229&h=175',
      'https://tse2.mm.bing.net/th?id=OIP.R-_cLQtQLgvbU9XytCOtfgHaFj&pid=Api&P=0&w=233&h=176',
      'https://tse4.mm.bing.net/th?id=OIP.bKwem22u_a_rQs_xsejT-wAAAA&pid=Api&P=0&w=229&h=173'
    ],
    time: '',
    ingredients: [],
    description:
      '"الله أَكْبَر، الله أَكْبَر، الله أَكْبَر". "لَا إِلَهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ، وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، آيِبُونَ، تَائِبُونَ، عَابِدُونَ، سَاجِدُونَ  "اَللّٰهُمَّ اجْعَلْهُ حَجًّا مَبْرُوْرًا وَسَعْيًا مَشْكُوْرًا وَذَنْبًا مَغْفُوْرًا".'
  },
  {
    recipeId: 0,
    categoryId: 0,
    title: 'الاحرام',
    photo_url: 'https://tse3.mm.bing.net/th?id=OIP.7jrZjVuT0tdrQqB-a_vSfAHaGG&pid=Api&P=0&w=212&h=175',
    photosArray: [
      'https://tse3.mm.bing.net/th?id=OIP.7jrZjVuT0tdrQqB-a_vSfAHaGG&pid=Api&P=0&w=212&h=175'
   
    ],
    time: '',
    ingredients: [],
    description:
      ' يقوم الحاج بالاستحمام أو الوضوء وبعد ذلك يقوم بصلاة ركعتين من السنة أدائهما وعقد نية الحج بقلبك. يقوم الحاج بالتلبية وذلك بقول " لبيك اللهم لبيك لبيك لا شريك لك لبيك إن الحمد والنعمة لك والملك لا شريك لك" ولا يجوز للمحرم كل  من :- تغطية الرأس, أو حلق شعر الرأس والجسم, وقص الأظافر, واستخدام العطور.كما عليه أن يلزم التلبية في كل وقت وعلي كل حال, عند النوم والأكل والذهاب والإياب وغير ذلك. '
  },
  {
    recipeId: 1,
    categoryId: 0,
    title: 'الطواف ',
    photo_url:
      'https://media.giphy.com/media/7qLd1AGxbbH6E/giphy.gif',
    photosArray: [
      'https://media.giphy.com/media/7qLd1AGxbbH6E/giphy.gif'
      
    ],
    time:'' ,
    ingredients: [],
    description:
      ' يبدأ بعد ذلك المحرم بالطواف من حول الكعبة المشرفة عن طهارة, بحيث يجعل الكعبة عن يساره كي تكون ناحية القلب, ويبدأ الطواف من عند الحجر الأسود والذي علي يسار الحاج ويقوم بتقبيله أو الإشارة فقط للحجر الأسود إذا ما تعسر الوصول إليه بسبب الزحام, ويسير الحاج إلي الأمام مع الحجاج في نفس الاتجاه حتي يعود إلي نفس المكان الذي بدأ منه الطواف ويكرر ما فعله بالحجر الأسود في المرة الأولي وهكذا حتي يتم سبع مرات للسبعة (سبعة أشواط) وتستمر بذكر الله أثناء الطواف مع مراعاة عدم إيذاء الناس في وسط الزحام بدفعهم أو زجرهم  حتي تأخذ أجرك كاملا. بعدها توجه إلي مقام إبراهيم وصل فيه ركعتين كسنة للطواف, وادع بما شئت بعدها, وإن لم تجد متسعا هناك فيمكنك التوجه إلي أقرب مسجد يمكنك الصلاة فيه أيضا. وبعد صلاة الركعتين والوقوف بالملتزم, اذهب إلي بئر زمزم واشرب قدر استطاعتك منها وانوي عند شربه ما تريد من خير الدنيا والآخرة فماء زمزم لما شربت له كما قال الرسول عليه الصلاة والسلام.'
  },
  {
    recipeId: 2,
    categoryId: 0,
    title: ' السعي مابين الصفا والمروة',
    photo_url:
      'https://tse4.mm.bing.net/th?id=OIP.K0Z9u5QWyRsu2Rl7Xz02wgHaEK&pid=Api&P=0&w=310&h=175',
    photosArray: [
      'https://tse4.mm.bing.net/th?id=OIP.K0Z9u5QWyRsu2Rl7Xz02wgHaEK&pid=Api&P=0&w=310&h=175',
      'https://rheb.cc/wp-content/uploads/2019/09/3715-16.jpg'
    ],
    time: '',
    ingredients: [],
    description:
      ' بعد ذلك توجه إلي جبل الصفا واصعد فوقه خطوات وقف قليلا وكبر الله وهلل وصلي علي النبي, وتكون الكعبة أمام قلبك وعينيك وادع الله بما شئت وأحببت هناك. ثم سر من الصفا إلي المروة سيرا عاديا في المسار المحدد, وعند وصولك للمكان بين الميلين الأخضرين وهما موضحان هناك بعلامات ظاهرة, هناك يبدأ الحاج بالإسراع في السير أي الهرولة, والهرولة للرجال فقط دون النساء, وبعد انتهاء الميلين الأخضرين قم بالسير سيرا عاديا كما بدأت حتي تصل إلي المروة وتصعد إليه وتقف فوقه قليلا لتكبر الله وتهلل وتدعو بما شئت وتصل علي النبي محمد عليه الصلاة والسلام, وتكون هنا قد أتممت أول شوط. بعد ذلك انزل من علي جبل المروة وسر حتي تبلغ الميلين الأخضرين وابدأ عندهما بالهرولة, وبعد تخطيهما عد إلي السير العادي حتي تبلغ الصفا وتصعد إليه وتكبر الله وتهلل وتدعو وتصلي علي النبي أيضا, وتكون هنا قد أتممت ثاني شوط وهكذا يستمر الحاج في السعي بين كل من الصفا والمروة حتي يتم الأشواط السبعة.'
  },
  {
    recipeId: 3,
    categoryId: 0,
    title: ' التحلل من العمرة',
    photo_url: 'https://tse1.mm.bing.net/th?id=OIP.9DLtTykz8j6_H2o6BegDUgHaES&pid=Api&P=0&w=313&h=182',
    photosArray: [
      "https://tse1.mm.bing.net/th?id=OIP.9DLtTykz8j6_H2o6BegDUgHaES&pid=Api&P=0&w=313&h=182"
      
      
    ],
    time: '',
    ingredients: [],
    description:
      ' بعد الانتهاء من الأشواط السبعة ينتهي الحاج من إتمام العمرة التي قد نواها عند الإحرام, ويقوم بحلق شعر رأسه أو قصه كله أو بعضه كما يري, ويحرم ذلك علي النساء, ويستطيع الرجل بعدها أن يرتدي ما شاء من الثياب ويتطيب بالعطر أيضا, ويقيم بمكة حلالا حتي يحين وقت الإحرام بالحج عند العزم بالذهاب إلي عرفات. وتسمي الفترة بين كل من التحلل من العمرة بعد الإحرام بها, وبين الإحرام للحج وأداؤه, بالتمتع حيث يتمتع المحرم بما كان محظورا عليه في وقت الإحرام, ويجب حينها علي المتمتع أن يذبح لوجه الله سبحانه وتعالي شكرا له علي التوفيق في الجمع بين الحج والعمرة.'
  },
  {
    recipeId: 4,
    categoryId: 0,
    title: 'الإحرام مرة أخري للحج',
    photo_url: 'https://tse3.mm.bing.net/th?id=OIP.TJK3JqKA17t094QkEdEqiAHaEK&pid=Api&P=0&w=315&h=178',
    photosArray: [
      'https://tse3.mm.bing.net/th?id=OIP.TJK3JqKA17t094QkEdEqiAHaEK&pid=Api&P=0&w=315&h=178',
      
    ],
    time: '',
    ingredients: [
      
    ],
    description:
      'في اليوم الثامن من ذي الحجة وهو يوم التروية يتم الاستعداد للإحرام بالحج, وهو يماثل الإحرام للعمرة تماما, ويقوم الحاج ارتداء ملابس الإحرام, وما يليها من الاغتسال أو الوضوء, ثم صلاة ركعتين بالمسجد الحرام إن استطاع الحاج وينوي بعدهما الحج.'
  },
  {
    recipeId: 5,
    categoryId: 0,
    title: ' التلبية بالحج',
    photo_url: 'https://tse1.mm.bing.net/th?id=OIP.r4Yh-T5RZ-CUUz5-CGkfmAHaFS&pid=Api&P=0&w=245&h=176',
    photosArray: [
      'https://tse1.mm.bing.net/th?id=OIP.r4Yh-T5RZ-CUUz5-CGkfmAHaFS&pid=Api&P=0&w=245&h=176'
      
    ],
    //time: '',
    ingredients: [],
    description:
      'ثم يردد الحاج عدها التلبية " لبيك اللهم لبيك لبيك لا شريك لك لبيك إن الحمد والنعمة لك والملك لا شريك لك" وكذلك في كل وقت وحين يردد الحاج التلبية.'
  },
  {
    recipeId: 5,
    categoryId: 0,
    title: 'الوقوف عند عرفة',
    photo_url: 'https://tse4.mm.bing.net/th?id=OIP.RL2ZQkj2T2h3ojdaFjIRTgHaEL&pid=Api&P=0&w=290&h=164',
    photosArray: [
      'https://tse4.mm.bing.net/th?id=OIP.RL2ZQkj2T2h3ojdaFjIRTgHaEL&pid=Api&P=0&w=290&h=164',
      "https://tse4.mm.bing.net/th?id=OIP.Z-15kPKEzw6uvqFV_9SpKQHaEO&pid=Api&P=0&w=311&h=179"
      
    ],
    //time: '',
    ingredients: [],
    description:
      ' يستعد بعد ذلك المحرم لذهابه إلي عرفة والوقوف عندها, في اليوم التاسع من شهر ذي الحجة, كما يمكن الذهاب إلي عرفة من اليوم الثامن والبقاء هناك, والوقوف عند عرفة يعني أن يقف الحاج علي أرض عرفة ولو لدقيقة واحدة او حتي للحظة, بدءا من ظهر اليوم التاسع وحتي فجر اليوم العاشر من ذي الحجة. وعند التواجد بعرفة يصلي المحرم صلاتي الظهر والعصر معا بجمع تقديم, ويفضل الصلاة بمسجد نمرة إن استطاع الحاج ذلك, أو في خيمته يصليهما منفردتين أو جمع تقديم ودون وجود نافلة بينهما.'
  },
  {
    recipeId: 6,
    categoryId: 0,
    title: 'الذهاب إلي مزدلفة والمبيت عندها',
    photo_url: 'https://tse3.mm.bing.net/th?id=OIP.selqW-1xSOUD-HoQEMA0iAHaFV&pid=Api&P=0&w=266&h=192',
    photosArray: [
      'https://tse3.mm.bing.net/th?id=OIP.selqW-1xSOUD-HoQEMA0iAHaFV&pid=Api&P=0&w=266&h=192',
      'https://tse2.mm.bing.net/th?id=OIP.Y6F3qBQjL1S6yTCSdyBRTAHaE4&pid=Api&P=0&w=248&h=164'
    ],
    //time: '',
    ingredients: [],
    description:
      'بعد غروب شمس يوم عرفة يفيض الحجاج إلي مزدلفة, وعند الوصول إليها يبدأ الحجاج بصلاة المغرب والعشاء بجمع تأخير في وقت العشاء, ويمكن للحاج أن يبيت بمزدلفة ويصلي الصبح في أول وقته, واجمع من هناك الحصي الذي سوف ترمي به جمرة العقبة وتكون صغيرة جدا بحجم البندق, ويتوجه الحاج إلي مني بعد ذلك ويمكنه أيضا أن يجمع الجمرات من هناك.'
  },
  {
    recipeId: 7,
    categoryId: 0,
    title: ' رمي جمرة العقبة',
    photo_url: 'https://tse4.mm.bing.net/th?id=OIP.7ThbeX3HNxIDrNrqtD8JggHaEZ&pid=Api&P=0&w=292&h=174',
    photosArray: [
      'https://tse4.mm.bing.net/th?id=OIP.7ThbeX3HNxIDrNrqtD8JggHaEZ&pid=Api&P=0&w=292&h=174',
      
      'https://tse3.mm.bing.net/th?id=OIP.aQxkd_mjkS7i1lgrHiANnQHaE6&pid=Api&P=0&w=246&h=164'
    ],
    //time: '',
    ingredients: [],
    description:
      ' بعد الذهاب إلي مني يبدأ الحاج بالدخول إلي جمرة العقبة ورميها بالحصي التي قام بجمعها, واحدة تلو الأخري من أي جانب بحيث تكون الحصي عند رميها مابين طرف إصبعي الإبهام والسبابة اليمني, ويتوقف الحاج عن التلبية عند البدء في رمي الجمرات, ثم يذبح الهدي الخاص به إن كان الهدي عليه واجبا أو لم يذبحه من قبل, كما يجوز تأخير الرمي إلي آخر النهار بسبب التعب والإرهاق أو الزحام والحر.كما يجوز أن يرمي أحد بدلا عنك إن كان لديك عذر أو مرض يجعل ذلك عليك عسيرا.'
  },
  {
    recipeId: 8,
    categoryId: 0,
    title: 'التحلل من الحج',
    photo_url: 'https://1.bp.blogspot.com/-85Z3QLSClx4/Wpaj7u62qAI/AAAAAAAAAm8/4XMoWGOsiJckQeKmMJq1zRgacZkqKPhDACLcBGAs/s640/unnamed.jpg',
    photosArray: [
      'https://i.ytimg.com/vi/Gq3mW43kpkU/maxresdefault.jpg?crop=0.803xw:0.923xh;0.116xw,0.00510xh&resize=768:*'
      
     
    ],
    //time: '',
    ingredients: [],
    description:
      'يبد أ المحرم بالتحلل من الحج بحلق شعر رأسه أو تقصيره, وتقصر المرأة من أطراف شعرها فقط,  ويحل للحاج التطيب وارتداء الثياب التي يريد.'
  },
  {
    recipeId: 9,
    categoryId: 0,
    title: 'طواف الإفاضة',
    photo_url: 'https://tse4.mm.bing.net/th?id=OIP.fR6B0H67xZt9RgqQ_7nT4gHaEO&pid=Api&P=0&w=315&h=181',
    photosArray: [
      'https://tse4.mm.bing.net/th?id=OIP.fR6B0H67xZt9RgqQ_7nT4gHaEO&pid=Api&P=0&w=315&h=181',
     
      'https://tse3.mm.bing.net/th?id=OIP.1TnJxZIyRAerEyCTONuDIQHaET&pid=Api&P=0&w=328&h=191'
    ],
    //time: '',
    ingredients: [],
    description:
      ' بعد ذلك يتوجه الحاج إلي مكة ويطوف سبعا حول الكعبة, ويبدأ كل شوط منهم باستلام الحجر الأسود وتقبيله أو الإشارة إليه من بعيد, ويبدأ الشوط من الحجر الأسود ويتمه عنده أيضا, ويذكر الله كثيرا أثناء الطواف, ثم يتوجه لشرب ما استطاع من ماء زمزم وينوي بشربه لها ما أراد من خير الدنيا والآخرة ويعود بعد ذلك الحاج إلي مني وبعد الطواف والسعي أو بعد الطواف مباشرة إن لم يكن عليه سعي, ويبيت هناك الليلة الحادية والثانية عشر من ذي الحجة, ويجو أن يبقي بمكة حتي منتصف الليل ويتمه بمني, او يستمر بمني إلي ذلك.لكن يلزم أن تأت إلي مني لرمي الجمرات الثلاث في هذين اليومين كل جمرة بسبع حصيات متواليات, كما كان في يوم العاشر من ذي الحجة.'
  },
  {
    recipeId: 10,
    categoryId: 0,
    title: 'طواف الوداع',
    photo_url: 'https://tse1.mm.bing.net/th?id=OIP.XWqntCyi3ax2_YWZrOLdZgHaEp&pid=Api&P=0&w=289&h=182',
    photosArray: [
      'https://tse1.mm.bing.net/th?id=OIP.XWqntCyi3ax2_YWZrOLdZgHaEp&pid=Api&P=0&w=289&h=182',
      
      'https://tse2.mm.bing.net/th?id=OIP.fu7EFpLUq89I_MDsDUu6vwHaE6&pid=Api&P=0&w=283&h=189'
    ],
    //time: '',
    ingredients: [],
    description:
      'وعند مغادرة مكة يقوم الحاج بالطواف حول الكعبة سبعة أشواط, وبعدها يصلي ركعتين, ويسمي ذلك بطواف الوداع أو طواف الصدر.'
  },
  {
    recipeId: 0,
    categoryId: 1,
    title: 'الاحرام',
    photo_url: 'https://tse3.mm.bing.net/th?id=OIP.7jrZjVuT0tdrQqB-a_vSfAHaGG&pid=Api&P=0&w=212&h=175',
    photosArray: [
      'https://tse3.mm.bing.net/th?id=OIP.7jrZjVuT0tdrQqB-a_vSfAHaGG&pid=Api&P=0&w=212&h=175'
   
    ],
    time: '',
    ingredients: [],
    description:
      ' يقوم الحاج بالاستحمام أو الوضوء وبعد ذلك يقوم بصلاة ركعتين من السنة أدائهما وعقد نية الحج بقلبك. يقوم الحاج بالتلبية وذلك بقول " لبيك اللهم لبيك لبيك لا شريك لك لبيك إن الحمد والنعمة لك والملك لا شريك لك" ولا يجوز للمحرم كل  من :- تغطية الرأس, أو حلق شعر الرأس والجسم, وقص الأظافر, واستخدام العطور.كما عليه أن يلزم التلبية في كل وقت وعلي كل حال, عند النوم والأكل والذهاب والإياب وغير ذلك. '
  },
  {
    recipeId: 1,
    categoryId: 1,
    title: 'الطواف',
    photo_url: 'https://tse3.mm.bing.net/th?id=OIP.Qz48Sl9w7a4Jb44C9pZkEAHaEK&pid=Api&P=0&w=321&h=181',
    photosArray: [
      'https://tse3.mm.bing.net/th?id=OIP.Qz48Sl9w7a4Jb44C9pZkEAHaEK&pid=Api&P=0&w=321&h=181',
      
      'https://tse4.mm.bing.net/th?id=OIP.pBOsuEJQYzKY3I0eeaJr-wHaEL&pid=Api&P=0&w=290&h=164'
    ],
    //time: '',
    ingredients: [],
    description:
      'يشترط في الطواف أن يكون المعتمر على طهارة من الحدثين الأصغر والأكبر، وذلك لكون الطواف مثل الصلاة إلا أنه مباح فيه الكلام. بعدما يصل المعتمر لبيت الله الحرام فإنه يقدم برجله اليمنى أثناء الدخول قائلاً “بسم الله والصلاة والسلام على رسول الله أعوذ بالله العظيم وبوجهه الكريم وسلطانه القديم من الشيطان الرجيم اللهم افتح لي أبواب رحمتك”. بعدما يصل المعتمر لبيت الله يقطع التلبية ويقصد الحجر الأسود فيستقبله ويستلمه بيمنه وإن تيسر له أن يقبله فليفعل شرط ألا يؤذي الناس بالمزاحمة، ويقول المعتمر عند الاستلام بسم الله والله أكبر، وفي حال إن شق على المعتمر أن يتسلم الحجر الأسود بيديه وأن يقبله يمكنه أن يتسلمه بعصا أو يشير إليه قائلا الله أكبر. على المعتمر أن يجعل البيت على يساره ثم يطوف به سبعة أشواط، وفي حال إن حاذى المعتمر للركن اليماني وكان عليه يمينه فيقول المعتمر بسم الله والله أكبر، وفي حال إن شق عليه أن يستلم الركب اليماني فيمكن للمعتمر تركه والمضي في الطواف دون أن يكبر أو يشير إليه، بينما الحجر الأسود كلما كان المعتمر بمحاذاته وجب عليه أن سيتمه ويقبله أو يشير إليه ويكبر.'
  },
  {
    recipeId: 2,
    categoryId: 1,
    title: 'الصلاة عند مقام إبراهيم',
    photo_url: 'https://tse3.mm.bing.net/th?id=OIP.J50lfjdoF1k2fKlW2l75cgAAAA&pid=Api&P=0&w=212&h=167',
    photosArray: [
      'https://tse3.mm.bing.net/th?id=OIP.J50lfjdoF1k2fKlW2l75cgAAAA&pid=Api&P=0&w=212&h=167',
      
      'https://tse1.explicit.bing.net/th?id=OIP.4xUElasTJi8EuXKJGkhJWQAAAA&pid=Api&P=0&w=300&h=300'
    ],
    //time: '',
    ingredients: [],
    description:
      'يصلي المعتمر ركعتين خلف مقام إبراهيم لو تيسر ذلك له، في حال إن لم يتمكن يمكنه الصلاة في أي موضع بالمسجد، بحيث يقرأ سورة الفاتحة وسورة الكافرون بأول ركعة، ويقرأ سورة الإخلاص بثاني ركعة، وفي حال إن لم يقرأهم فلا بأس، ثم بعد أن يسلم من الركعتين يقصد المعتمر الحجر الأسود لو تيسر له، وبعدها ينتقل لزمزم كي يشرب ويرتوي.'
  },
  {
    recipeId: 3,
    categoryId: 1,
    title: 'السعي ما بين الصفا والمروة',
    photo_url: 'https://tse3.mm.bing.net/th?id=OIP.YfnyJx0gAejiBMXQHtiZcgHaFj&pid=Api&P=0&w=225&h=170',
    photosArray: [
      'https://tse3.mm.bing.net/th?id=OIP.YfnyJx0gAejiBMXQHtiZcgHaFj&pid=Api&P=0&w=225&h=170',
      
      'https://tse3.mm.bing.net/th?id=OIP.eZJtE6yELVSjNiYnDiGoVQHaEK&pid=Api&P=0&w=301&h=170'
    ],
    //time: '',
    ingredients: [],
    description:
      'يخرج المعتمر إلى الصفا فيرقاه أو يقوم بالوقوف عنده، إلا أن الرقي أفضل لوتيسر ذلك، ثم يقرأ المعتمر “إن الصفا والمروة من شعائر الله” ويستحب له أن يقوم باستقبال القبلة ليكبر بحمد لله قائلا ” “لا إله إلا الله والله أكبر، لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير، لا إله إلا الله وحده أنجز وعده ونصر عبده وهزم الأحزاب وحده” ثم يدعو المعتمر رافعاً يديه ومكرراً لهذا الدعاء ثلاث مرات، وبعدها ينزل ويمشي للمروة حتى يصل للعلم الأول فيسرع في مشيته حتى وصوله للعلم الثاني، بينما المرأة فلم يُشرع لها أن تقوم بالإسراع. ثم بعد ذلك يرقى المعتمر إلى المروة أو يقف عندها، ويفعل ويقول مثلما فعل عند الصفا، وبعدها ينزل فيمشي بموضع مشية مع الإسراع في موضع حتى الوصول إلى الصفا، ويفعل هذا الأمر سبع أشواط وثماني وقفات، بحيث يكون ذهاباً شوط وإياباً شوط، فيكون أربع وقفات على الصفا وأربع وقفات على المروة، ولو سعى المعتمر وهو راكب فلا إثم ولا حرج عليه بخاصة عند الحاجة، وأكثر ما يستحب أثناء السعي أو ترديد الذكر والدعاء، ويستحب أن يكون المعتمر أن يكون طاهراً.'
  },
  {
    recipeId: 3,
    categoryId: 1,
    title: 'تحلل المعتمر من الإحرام',
    photo_url: 'https://tse3.mm.bing.net/th?id=OIP.cgDs7qwa959nfkDF-7nOsgAAAA&pid=Api&P=0&w=255&h=167',
    photosArray: [
      
      'https://tse3.mm.bing.net/th?id=OIP.cgDs7qwa959nfkDF-7nOsgAAAA&pid=Api&P=0&w=255&h=167',
      'http://2.bp.blogspot.com/-wy6tm6PRyxY/T2XwKJry_TI/AAAAAAAAABk/O4Jjqk4_GTg/s1600/12345.png'
    ],
    //time: ,
    ingredients: [
     
    ],
    description:
      'بعد إكمال السعي يقوم الرجل بتقصير شعر رأسه أو حلق الرأس وهو الأفضل، بينما المرأة فتقوم بتجميع شعرها وتأخذ من شعرها مقدار أقل من أنملة، فإن قام المعتمر بفعل ما ذكرناه فبذلك تمت عمره، ويحل له أن يفعل كل شئ حرم عليه أثناء الإحرام.'
  }
];

export const ingredients = [
  // {
  //   ingredientId: 0,
  //   name: 'Oil',
  //   photo_url: 'https://ak7.picdn.net/shutterstock/videos/27252067/thumb/11.jpg'
  // },
  // {
  //   ingredientId: 1,
  //   name: 'Salt',
  //   photo_url:
  //     'https://image.freepik.com/free-photo/sea-salt-wooden-bowl-isolated-white-background_29402-416.jpg'
  // },
  // {
  //   ingredientId: 2,
  //   name: 'Russet potatoes',
  //   photo_url: 'http://www.valleyspuds.com/wp-content/uploads/Russet-Potatoes-cut.jpg'
  // },
  // {
  //   ingredientId: 3,
  //   name: 'Paprika',
  //   photo_url:
  //     'https://image.freepik.com/free-photo/red-chilli-pepper-powder-isolated-white-background_55610-28.jpg'
  // },
  // {
  //   ingredientId: 4,
  //   name: 'Black Pepper',
  //   photo_url: 'https://ak0.picdn.net/shutterstock/videos/26741680/thumb/1.jpg'
  // },
  // {
  //   ingredientId: 5,
  //   name: 'Celery salt',
  //   photo_url: 'https://www.hasiroglugurme.com/images/urunler/Koftelik-Esmer-Bulgur-resim-297.jpg'
  // },
  // {
  //   ingredientId: 6,
  //   name: 'Dried sage',
  //   photo_url:
  //     'https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/Esxjvv7/super-slow-motion-dried-sage-falling-on-white-background_n1xg2gxzg__F0000.png'
  // },
  // {
  //   ingredientId: 7,
  //   name: 'Garlic powder',
  //   photo_url:
  //     'https://us.123rf.com/450wm/belchonock/belchonock1808/belchonock180818180/106007144-bowl-of-dry-garlic-powder-on-white-background.jpg?ver=6'
  // },
  // {
  //   ingredientId: 8,
  //   name: 'Ground allspice',
  //   photo_url:
  //     'https://www.savoryspiceshop.com/content/mercury_modules/cart/items/2/6/9/2695/allspice-berries-jamaican-ground-1.jpg'
  // },
  // {
  //   ingredientId: 9,
  //   name: 'Dried oregano',
  //   photo_url: 'https://frutascharito.es/886-large_default/oregano.jpg'
  // },
  // {
  //   ingredientId: 10,
  //   name: 'Dried basil',
  //   photo_url: 'https://www.honeychop.com/wp-content/uploads/2015/09/Dried-Mint.png'
  // },
  // {
  //   ingredientId: 11,
  //   name: 'Dried marjoram',
  //   photo_url: 'https://images-na.ssl-images-amazon.com/images/I/71YATIBqBYL._SX355_.jpg'
  // },
  // {
  //   ingredientId: 12,
  //   name: 'All-purpose flour',
  //   photo_url:
  //     'https://images.assetsdelivery.com/compings_v2/seregam/seregam1309/seregam130900036.jpg'
  // },
  // {
  //   ingredientId: 13,
  //   name: 'Brown sugar',
  //   photo_url:
  //     'https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/BALQTtekliuc6iu4u/rotating-brown-sugar-in-a-white-container-on-white-background_sis0xtbyl_thumbnail-full01.png'
  // },
  // {
  //   ingredientId: 14,
  //   name: 'Kosher salt',
  //   photo_url:
  //     'https://d1yn1kh78jj1rr.cloudfront.net/image/preview/r64-6MxPQjlatyfjp/storyblocks-top-view-of-ceramic-salt-cellar-with-coarse-grained-sea-salt-isolated-on-white-background_SPzKionPuV_SB_PM.jpg'
  // },
  // {
  //   ingredientId: 15,
  //   name: 'Whole chicken',
  //   photo_url:
  //     'https://image.shutterstock.com/image-photo/two-raw-chicken-drumsticks-isolated-260nw-632125991.jpg'
  // },
  // {
  //   ingredientId: 16,
  //   name: 'Eggs',
  //   photo_url:
  //     'https://image.shutterstock.com/image-photo/egg-whites-yolk-cup-isolated-260nw-1072453787.jpg'
  // },
  // {
  //   ingredientId: 17,
  //   name: 'Quarts neutral oil',
  //   photo_url:
  //     'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2Fgettyimages-464433694_0.jpg%3Fitok%3DK42YR2GV&w=400&c=sc&poi=face&q=85'
  // },
  // {
  //   ingredientId: 18,
  //   name: 'Water',
  //   photo_url: 'https://ak1.picdn.net/shutterstock/videos/829561/thumb/11.jpg'
  // },
  // {
  //   ingredientId: 19,
  //   name: 'Onion Powder',
  //   photo_url:
  //     'https://image.shutterstock.com/image-photo/mixed-spices-isolated-on-white-260nw-662383828.jpg'
  // },
  // {
  //   ingredientId: 20,
  //   name: 'MSG',
  //   photo_url:
  //     'https://img.freepik.com/free-photo/monosodium-glutamate-wood-spoon-white-background_55883-399.jpg?size=626&ext=jpg'
  // },
  // {
  //   ingredientId: 21,
  //   name: 'Chicken Breast',
  //   photo_url:
  //     'https://us.123rf.com/450wm/utima/utima1602/utima160200063/53405187-raw-chicken-breast-fillets.jpg?ver=6'
  // },
  // {
  //   ingredientId: 22,
  //   name: 'Onion chopped',
  //   photo_url: 'https://s3.envato.com/files/246703499/IMG_1752_5.jpg'
  // },
  // {
  //   ingredientId: 23,
  //   name: 'Tomato paste',
  //   photo_url:
  //     'http://d3e1m60ptf1oym.cloudfront.net/45bab59a-363c-11e1-ab4e-bf4c2e0bb026/PANELA_xgaplus.jpg'
  // },
  // {
  //   ingredientId: 24,
  //   name: 'Chilli Powder',
  //   photo_url:
  //     'https://us.123rf.com/450wm/nuttapong/nuttapong1505/nuttapong150500009/40458002-paprika-powder-isolated-on-white-background.jpg?ver=6'
  // },
  // {
  //   ingredientId: 25,
  //   name: 'Ground Beef',
  //   photo_url:
  //     'https://images.radio.com/kmoxam/s3fs-public/styles/nts_image_cover_tall_775x425/public/dreamstime_s_39607998.jpg?XCM.w1UGOp9sVKkWGQZe7_JIsRddxoIK&itok=3M6KcFLH&c=73fb6497175b4c1a5c79e3ede816656a'
  // },
  // {
  //   ingredientId: 26,
  //   name: 'Can kidney beans, rinsed and drained ',
  //   photo_url:
  //     'https://www.seriouseats.com/images/2014/04/20140414-pile-of-beans-primary-1500x1125.jpg'
  // },
  // {
  //   ingredientId: 27,
  //   name: 'Large Tortillas',
  //   photo_url: 'https://upload.wikimedia.org/wikipedia/commons/5/56/NCI_flour_tortillas.jpg'
  // },
  // {
  //   ingredientId: 28,
  //   name: 'Firtos',
  //   photo_url:
  //     'https://previews.123rf.com/images/ksena32/ksena321510/ksena32151000090/45863494-fried-fish-on-a-white-background.jpg'
  // },
  // {
  //   ingredientId: 29,
  //   name: 'Shredded cheddar',
  //   photo_url:
  //     'https://image.shutterstock.com/image-photo/top-view-small-bowl-filled-260nw-284460308.jpg'
  // },
  // {
  //   ingredientId: 30,
  //   name: 'Lime',
  //   photo_url: 'https://ak8.picdn.net/shutterstock/videos/23271748/thumb/1.jpg'
  // },

  // {
  //   ingredientId: 31,
  //   name: 'Ground cumin',
  //   photo_url:
  //     'https://image.shutterstock.com/image-photo/pile-cumin-powder-isolated-on-260nw-1193262853.jpg'
  // },
  // {
  //   ingredientId: 32,
  //   name: 'Cayenne pepper',
  //   photo_url: 'https://ak7.picdn.net/shutterstock/videos/11461337/thumb/1.jpg'
  // },
  // {
  //   ingredientId: 33,
  //   name: 'Flaky white fish',
  //   photo_url:
  //     'https://image.shutterstock.com/image-photo/roach-river-fish-isolated-on-260nw-277764143.jpg'
  // },
  // {
  //   ingredientId: 34,
  //   name: 'Avocado',
  //   photo_url:
  //     'https://www.redwallpapers.com/public/redwallpapers-large-thumb/avocado-cut-stone-leaves-white-background-free-stock-photos-images-hd-wallpaper.jpg'
  // },
  // {
  //   ingredientId: 35,
  //   name: 'Red Pepper Flakes',
  //   photo_url:
  //     'https://as1.ftcdn.net/jpg/02/06/55/10/500_F_206551074_mVczUrAWOSMaw8kR48FQDQBqDw47jCtL.jpg'
  // },
  // {
  //   ingredientId: 36,
  //   name: 'Onions',
  //   photo_url: 'http://www.allwhitebackground.com/images/2/2650.jpg'
  // },
  // {
  //   ingredientId: 37,
  //   name: 'Green Pepper',
  //   photo_url: 'https://ak9.picdn.net/shutterstock/videos/4055509/thumb/1.jpg'
  // },
  // {
  //   ingredientId: 38,
  //   name: 'Red Pepper',
  //   photo_url: 'https://ak9.picdn.net/shutterstock/videos/10314179/thumb/1.jpg'
  // },
  // {
  //   ingredientId: 39,
  //   name: 'Pizza dough',
  //   photo_url:
  //     'https://image.shutterstock.com/image-photo/fresh-raw-dough-pizza-bread-260nw-518950903.jpg'
  // },
  // {
  //   ingredientId: 40,
  //   name: 'Ketchup sauce',
  //   photo_url:
  //     'https://st2.depositphotos.com/5262887/11050/i/950/depositphotos_110501208-stock-photo-ketchup-bowl-isolated-on-white.jpg'
  // },
  // {
  //   ingredientId: 41,
  //   name: 'Hot Sauce',
  //   photo_url:
  //     'https://media.istockphoto.com/photos/opened-can-of-spaghetti-sauce-on-a-white-background-picture-id497704752?k=6&m=497704752&s=612x612&w=0&h=JnL54buYu1Z3fGtd8uNdjFxiAKwlxoDluD6jbIfSaZI='
  // },
  // {
  //   ingredientId: 42,
  //   name: 'Butter',
  //   photo_url: 'https://redrockstoffee.com/media/2016/11/AdobeStock_76417550.jpeg'
  // },
  // {
  //   ingredientId: 43,
  //   name: 'Heavy Cream',
  //   photo_url:
  //     'https://media.istockphoto.com/photos/mayonnaise-in-bowl-isolated-on-white-background-picture-id614981116?k=6&m=614981116&s=612x612&w=0&h=LtbsI2HQXOTERYuP9YJ2PJfRF3W6DcyZ798fxMcQWC0='
  // },
  // {
  //   ingredientId: 44,
  //   name: 'whole-milk plain yogurt',
  //   photo_url:
  //     'https://st.depositphotos.com/2757384/3317/i/950/depositphotos_33170129-stock-photo-pouring-a-glass-of-milk.jpg'
  // },
  // {
  //   ingredientId: 45,
  //   name: 'Chesse',
  //   photo_url: 'https://ak7.picdn.net/shutterstock/videos/3619997/thumb/1.jpg'
  // },
  // {
  //   ingredientId: 46,
  //   name: 'Mozzarella',
  //   photo_url:
  //     'https://t3.ftcdn.net/jpg/02/06/73/98/500_F_206739841_suPu6qDPHlowFqx9qo8fLqV8sNevL2g3.jpg'
  // },
  // {
  //   ingredientId: 47,
  //   name: 'celery stalks',
  //   photo_url:
  //     'https://cdn4.eyeem.com/thumb/6d1b3957c7caa9b73c3e0f820ef854b931808139-1538043742765/w/750'
  // },
  // {
  //   ingredientId: 48,
  //   name: 'Parmesan Chesse',
  //   photo_url: 'https://ak7.picdn.net/shutterstock/videos/3721877/thumb/1.jpg'
  // },
  // {
  //   ingredientId: 49,
  //   name: 'pancetta',
  //   photo_url:
  //     'https://previews.123rf.com/images/onlyfabrizio/onlyfabrizio1606/onlyfabrizio160600002/60198502-raw-stripes-of-pancetta-stesa-on-a-white-background.jpg'
  // },
  // {
  //   ingredientId: 50,
  //   name: 'Spaghetti',
  //   photo_url:
  //     'https://previews.123rf.com/images/mfron/mfron1204/mfron120400098/13306773-bunch-of-spaghetti-nudeln-isoliert-auf-wei%C3%9Fem-hintergrund.jpg'
  // },
  // {
  //   ingredientId: 51,
  //   name: 'Garlic',
  //   photo_url: 'https://image.freepik.com/free-photo/fresh-garlic-white-background_1339-17012.jpg'
  // },
  // {
  //   ingredientId: 52,
  //   name: 'Lasagna noodles',
  //   photo_url:
  //     'https://previews.123rf.com/images/velkol/velkol1110/velkol111000004/11083085-an-image-of-raw-lasagna-on-white-background.jpg'
  // },
  // {
  //   ingredientId: 53,
  //   name: 'Italian sauce',
  //   photo_url:
  //     'https://previews.123rf.com/images/arinahabich/arinahabich1504/arinahabich150400858/38827029-raw-italian-sausage-on-a-white-background-.jpg'
  // },
  // {
  //   ingredientId: 54,
  //   name: 'Crushed Tomatoes',
  //   photo_url:
  //     'https://previews.123rf.com/images/merkulovnik/merkulovnik1406/merkulovnik140600100/28751626-crushed-tomato-isolated-on-white-background.jpg'
  // },
  // {
  //   ingredientId: 55,
  //   name: 'Sugar',
  //   photo_url:
  //     'https://previews.123rf.com/images/sommai/sommai1411/sommai141100034/33199985-sugar-cubes-in-a-bowl-isolated-on-white-background.jpg'
  // },
  // {
  //   ingredientId: 56,
  //   name: 'minced fresh parsley',
  //   photo_url:
  //     'https://t4.ftcdn.net/jpg/02/15/78/05/240_F_215780551_Eid0xpP1M2fokvuEcvJj8uqhROLJkb3p.jpg'
  // },
  // {
  //   ingredientId: 57,
  //   name: 'ricotta cheese',
  //   photo_url:
  //     'https://previews.123rf.com/images/barkstudio/barkstudio1608/barkstudio160800351/61418602-ricotta-cheese-into-a-bowl-in-white-background.jpg'
  // },
  // {
  //   ingredientId: 58,
  //   name: ' fennel seed',
  //   photo_url:
  //     'https://previews.123rf.com/images/pinkomelet/pinkomelet1710/pinkomelet171000227/88851299-close-up-the-fennel-seed-on-white-background.jpg'
  // },
  // {
  //   ingredientId: 59,
  //   name: 'Banana',
  //   photo_url:
  //     'https://www.conservationmagazine.org/wp-content/uploads/2013/04/sterile-banana.jpg'
  // },
  // {
  //   ingredientId: 60,
  //   name: 'Frozen Straberries',
  //   photo_url:
  //     'https://www.cascadianfarm.com/wp-content/uploads/2018/12/Strawberries_Main_0218.png'
  // },
  // {
  //   ingredientId: 61,
  //   name: 'Greek Yogurt',
  //   photo_url:
  //     'http://images.media-allrecipes.com/userphotos/960x960/3758635.jpg'
  // },
];
