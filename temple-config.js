/**
 * ╔══════════════════════════════════════════════════════╗
 * ║         TEMPLE CONFIG – Chùa Phúc Sinh Tự            ║
 * ║  Thôn Ngô Phần · Làng Ngò · Xã Bình Định            ║
 * ║  Huyện Lương Tài · Tỉnh Bắc Ninh                    ║
 * ╚══════════════════════════════════════════════════════╝
 *
 * HƯỚNG DẪN:
 *  1. Copy file này vào repo chùa mới → đổi nội dung bên dưới
 *  2. Ảnh: đặt vào thư mục /images/, đổi tên trong mảng hero / gallery
 *  3. Chạy lại server là xong
 */

const TEMPLE = {

  // ══════════════════════════════════════════════
  // 🏛️  THÔNG TIN CHÙA
  // ══════════════════════════════════════════════
  name:      'Chùa Phúc Sinh Tự',
  shortName: 'Phúc Sinh Tự',
  emoji:     '🪷',
  slogan:    'Phúc lành nảy sinh · Đất làng Ngò linh thiêng',
  subSlogan: 'Nơi tiếng chuông xứ Kinh Bắc ngân vang qua bao thế hệ — gọi người con xa quê trở về với gốc rễ tâm linh',

  // ══════════════════════════════════════════════
  // 📍  ĐỊA CHỈ & LIÊN HỆ
  // ══════════════════════════════════════════════
  location: 'Thôn Ngô Phần (Làng Ngò), xã Bình Định, Bắc Ninh',
  address:  'Thôn Ngô Phần (Làng Ngò), Xã Bình Định, Huyện Lương Tài, Tỉnh Bắc Ninh',
  phone:    '',          // Cập nhật số điện thoại chùa
  phoneRaw: '',
  email:    '',          // Cập nhật email chùa
  hours:    'Hàng ngày: 05:00 – 21:00',
  mapLink:  'https://maps.google.com/?q=Chùa+Phúc+Sinh+Tự+Thôn+Ngô+Phần+Bình+Định+Lương+Tài+Bắc+Ninh',
  fanpage:  '',
  youtube:  '',

  // ══════════════════════════════════════════════
  // 👨‍⚖️  TRỤ TRÌ
  // ══════════════════════════════════════════════
  abbot: {
    name:  '',   // Cập nhật tên sư trụ trì
    title: 'Trụ trì – Chùa Phúc Sinh Tự',
    bio:   'Với tâm nguyện hoằng dương Phật pháp, phụng sự cộng đồng phật tử thôn Ngô Phần và du khách thập phương, sư trụ trì luôn giữ ngọn đèn chánh pháp không bao giờ tắt trên mảnh đất làng Ngò.'
  },

  // ══════════════════════════════════════════════
  // 🖊️  HERO — BANNER TRANG CHỦ
  // ══════════════════════════════════════════════
  hero: {
    title:    'Chùa Phúc Sinh Tự',
    subtitle: 'Phúc lành nảy sinh · Đất làng Ngò linh thiêng',
    badge:    '📍 Thôn Ngô Phần · Xã Bình Định · Lương Tài · Bắc Ninh',
    cta:      'Dâng hương & Cầu nguyện',
  },

  // ══════════════════════════════════════════════
  // 📖  LỜI NGỎ
  // ══════════════════════════════════════════════
  welcome: {
    label: 'Lời ngỏ',
    title: 'Cửa Phật luôn rộng mở · Lòng người luôn hướng thiện',
    paragraphs: [
      'Phúc Sinh Tự — ngôi chùa nhỏ giữa lòng làng Ngò — đã đứng vững qua bao thế kỷ thăng trầm như một chứng nhân lặng lẽ của đất và người xứ Kinh Bắc. Tên chùa mang ý nguyện sâu xa của tiền nhân: Phúc — nguồn phúc lành vô lượng từ đức Phật trao ban; Sinh — sự sống nảy nở, con người sinh trưởng trong ánh sáng chánh pháp. Hai chữ ấy là lời cầu của bao đời cha ông gửi vào hương khói, vào đất làng, vào từng viên gạch ngôi chùa.',
      'Dù bạn là người con của làng Ngò đang sống ngay cạnh bên, hay là người con xa quê đang ở tận phương trời nào đó — khi đọc những dòng chữ này, hãy biết rằng: ngôi chùa vẫn ở đó, tiếng chuông vẫn ngân, mái ngói vẫn rêu phong, và tấm lòng của cộng đồng phật tử nơi đây vẫn ngày ngày dâng hương cầu nguyện cho mọi gia đình được bình an, vạn sự cát tường.',
      'Cửa Phật không phân biệt gần xa, sang hèn, tuổi tác. Chỉ cần một tấm lòng thành, chỉ cần một nén hương dâng lên, chư Phật và Bồ Tát đã đón nhận trọn vẹn. Phúc Sinh Tự kính mời quý phật tử — dù ở gần hay ở xa — cùng hướng về ngôi chùa làng Ngò để tâm được an, gia đình được phúc.',
    ],
    signature:     '🙏 Kính cẩn cúi đầu',
    signatureName: 'Ban hộ tự Chùa Phúc Sinh Tự'
  },

  // ══════════════════════════════════════════════
  // 🏛️  GIỚI THIỆU — CÂU CHUYỆN CHÙA
  // ══════════════════════════════════════════════
  story: {
    label: 'Lịch sử & Văn hóa',
    title: 'Mảnh Đất Kinh Bắc — Cái Nôi Phật Giáo Việt Nam',
    intro: 'Phúc Sinh Tự tọa lạc trên vùng đất Kinh Bắc ngàn năm văn hiến — nơi Phật giáo Việt Nam bắt đầu những bước chân đầu tiên từ hơn hai nghìn năm trước, và vẫn tiếp tục tỏa sáng đến tận ngày nay qua từng ngôi chùa làng bình dị như Phúc Sinh Tự.',
    features: [
      {
        icon:  '☸',
        title: 'Di Tích Lịch Sử Được Ghi Nhận',
        desc:  'Chùa Phúc Sinh được ghi danh trong danh mục 154 di tích lịch sử văn hóa huyện Lương Tài — là tài sản chung của cộng đồng, được các thế hệ gìn giữ và tôn tạo.'
      },
      {
        icon:  '🌸',
        title: 'Quan Âm Bồ Tát — Đấng Từ Bi Chở Che',
        desc:  'Chính điện thờ tôn tượng Quan Thế Âm Bồ Tát nghìn tay nghìn mắt — biểu tượng của lòng từ bi vô lượng, luôn lắng nghe và cứu độ mọi chúng sinh đang chịu khổ đau.'
      },
      {
        icon:  '🎋',
        title: 'Vườn Cảnh Thanh Tịnh',
        desc:  'Khuôn viên chùa với hoa nở bốn mùa, cây cổ thụ buông lan trắng muốt — tạo nên không gian thiên nhiên thanh tịnh, nơi tâm hồn được tĩnh lặng và phiền não được buông bỏ.'
      },
      {
        icon:  '📿',
        title: 'Cộng Đồng Phật Tử Gắn Kết',
        desc:  'Đoàn phật tử làng Ngò — những bà, những chị khoác áo lam trang nhã — đã gắn bó với chùa bao thập kỷ, duy trì nghi lễ, kinh kệ và tình nghĩa xóm làng.'
      },
    ]
  },

  // ══════════════════════════════════════════════
  // 📜  KINH TRÍCH DẪN & THƠ CA
  //     (Hiển thị luân phiên trong các section Quote)
  // ══════════════════════════════════════════════
  quotes: [
    // ── Kinh Phổ Môn (Phẩm 25 Kinh Pháp Hoa) ──
    {
      text:   'Nếu có vô lượng trăm nghìn vạn ức chúng sinh đang chịu đựng các thứ khổ não, chỉ cần nhất tâm xưng niệm danh hiệu Quan Thế Âm Bồ Tát — Ngài tức thì quán xét tiếng kêu cầu ấy, tất cả đều được giải thoát.',
      source: 'Kinh Diệu Pháp Liên Hoa – Phẩm Phổ Môn',
      style:  'crimson',
    },
    // ── Kinh Pháp Cú (Dhammapada) ──
    {
      text:   'Tâm dẫn đầu các pháp, tâm làm chủ, tâm tạo tác. Nếu nói hay làm với tâm trong sáng, an lạc sẽ theo sau — như bóng không bao giờ rời hình.',
      source: 'Kinh Pháp Cú – Phẩm Song Yếu (Dhammapada I.2)',
      style:  'gold',
    },
    // ── Kinh Địa Tạng ──
    {
      text:   'Ngài Địa Tạng thệ nguyện: Địa ngục chưa trống, thề không thành Phật. Chúng sinh đã độ xong, mới chứng Bồ Đề. Đó là tấm lòng từ bi vô lượng — không bỏ lại bất kỳ ai phía sau.',
      source: 'Kinh Địa Tạng Bồ Tát Bổn Nguyện',
      style:  'ink',
    },
    // ── Thiền ngữ / Tâm kinh ──
    {
      text:   'Sắc tức thị Không, Không tức thị Sắc. Trong cõi vô thường này, ngọn nến tâm linh nơi chùa làng là ánh sáng bất biến — không sinh, không diệt, không tăng, không giảm.',
      source: 'Bát Nhã Tâm Kinh',
      style:  'gold',
    },
    // ── Thơ lục bát — Người con xa quê ──
    {
      text:   'Dù cho đất khách trời xa,\nTrong tim vẫn giữ mái chùa làng Ngò.\nTiếng chuông vọng lại trong mơ,\nGọi người phương ấy trở về cội nguồn.\n\nMẹ già tóc bạc buổi hôm,\nThắp hương cầu Phật cho con bình yên.\nPhúc Sinh Tự — chốn thiêng liêng,\nChở che muôn nẻo ưu phiền tan đi.',
      source: 'Thơ cảm tác – Người con làng Ngò xa quê',
      style:  'crimson',
    },
    // ── Thơ về Lễ Cầu An ──
    {
      text:   'Tháng Hai hăm bảy mỗi năm,\nNhà chùa mở lễ, dân làng sum vầy.\nHương trầm bay tỏa khắp đây,\nCầu cho lúa tốt, cầu ngày bình yên.\n\nKhói hương gặp gió vươn lên,\nNhư lời nguyện ước thả trên trời xanh.\nBao người con đất làng mình,\nDù xa muôn dặm — lòng thành không phai.',
      source: 'Thơ cảm tác – Lễ Cầu An Phúc Sinh Tự',
      style:  'ink',
    },
    // ── Kinh A Di Đà – về lòng thành ──
    {
      text:   'Chẳng phải vì chút thiện căn phước đức nhỏ mà được sinh về cõi an lành — mà chính lòng tin kiên định, hạnh nguyện chân thành mới là hạt giống của bình an đích thực.',
      source: 'Kinh A Di Đà',
      style:  'gold',
    },
    // ── Thơ về mái chùa và tuổi thơ ──
    {
      text:   'Nhớ thuở bé theo bà lên chùa,\nHương trầm thơm, tiếng mõ trưa nắng vàng.\nBây giờ lưu lạc bốn phương,\nMỗi khi nhắm mắt — thấy sân Phúc Sinh.\n\nCổng chùa rêu xanh lặng thinh,\nTượng Quan Âm đứng độ sinh muôn đời.\nNgôi chùa là gốc của tôi,\nDù đi đâu cũng một trời nhớ thương.',
      source: 'Thơ cảm tác – Ký ức tuổi thơ bên mái chùa',
      style:  'crimson',
    },
  ],

  // ══════════════════════════════════════════════
  // 🙏  NGHI LỄ (dịch vụ tâm linh chùa cung cấp)
  // ══════════════════════════════════════════════
  services: [
    {
      icon:        '🌸',
      name:        'Dâng sớ cầu an',
      description: 'Dâng sớ cầu bình an, sức khỏe, công danh cho bản thân và gia đình. Phật tử gần xa đều có thể gửi sớ về chùa để được tụng trong các thời khóa.',
      price:       'Tùy tâm phật tử',
      highlight:   true,
    },
    {
      icon:        '🕯️',
      name:        'Lễ cầu siêu',
      description: 'Cầu siêu cho hương linh người thân đã khuất, hồi hướng công đức để vong linh sớm được siêu thoát về cõi lành.',
      price:       'Tùy tâm phật tử',
      highlight:   false,
    },
    {
      icon:        '👶',
      name:        'Lễ bán khoán',
      description: 'Cầu bình an cho trẻ nhỏ, hay ăn chóng lớn, thông minh học giỏi, được chư Phật và Bồ Tát che chở.',
      price:       'Tùy tâm phật tử',
      highlight:   false,
    },
    {
      icon:        '🏠',
      name:        'Cầu an gia trạch',
      description: 'Cầu an cho ngôi nhà mới, gia đình hòa thuận, công việc thuận lợi, vạn sự cát tường.',
      price:       'Tùy tâm phật tử',
      highlight:   false,
    },
    {
      icon:        '📿',
      name:        'Các nghi lễ khác',
      description: 'Tiếp nhận các nghi lễ theo yêu cầu riêng. Liên hệ trực tiếp với chùa để được tư vấn tận tình.',
      price:       'Theo thỏa thuận',
      highlight:   false,
    },
  ],

  // ══════════════════════════════════════════════════════
  // 🎎  LỄ CẦU AN HÀNG NĂM — NGÀY ĐẶC BIỆT NHẤT CỦA CHÙA
  //     Ngày 27 tháng 2 âm lịch
  // ══════════════════════════════════════════════════════
  gioTo: {
    // Ngày âm lịch cố định hàng năm
    ngayAm:  27,
    thangAm: 2,

    // Tên đầy đủ lễ
    ten: 'Đại Lễ Cầu An Phúc Sinh Tự',

    // Mô tả hiển thị trên website
    moTa: `Ngày 27 tháng Hai âm lịch hàng năm là ngày thiêng liêng nhất của Chùa Phúc Sinh Tự — Đại Lễ Cầu An cho toàn thể nhân dân thôn Ngô Phần và phật tử thập phương. Đây là truyền thống được duy trì bao đời nay, là sợi dây tâm linh vô hình gắn kết người làng Ngò — dù ở gần hay ở xa — cùng hướng về một mái chùa, một lời nguyện cầu chung: Bình an, sức khỏe, mưa thuận gió hòa, gia đình hạnh phúc.`,

    // Số ngày tổ chức
    soNgay: 1,

    // Chương trình lễ
    chuongTrinh: [
      'Lễ khai kinh — Chư tăng ni tụng kinh cầu an, hồi hướng phúc lành cho toàn thể chúng sinh',
      'Lễ dâng hương — Phật tử thành kính dâng hoa, quả, hương thơm trước tôn tượng Quan Thế Âm Bồ Tát',
      'Đại lễ cầu an — Tụng Kinh Phổ Môn, Kinh Dược Sư, dâng sớ cầu an cho từng gia đình trong làng',
      'Pháp thoại — Giảng giải Phật pháp, nhắc nhở người dân sống lành, làm thiện, tích công đức',
      'Hồi hướng công đức — Chia sẻ phúc lành đến tất cả chúng sinh, cầu quốc thái dân an',
    ],

    // Thông báo nhắc trước X ngày
    nhacTruocNgay: 7,

    // Lời dẫn đặc biệt cho section lễ hội (hiển thị trên trang chủ)
    loiDan: `Cứ mỗi độ cuối tháng Hai âm lịch, khi cơn gió xuân còn vương nhẹ trên những cánh đồng xã Bình Định, người dân làng Ngò lại nao nao trong lòng một cảm giác quen thuộc — cảm giác của những ngày lễ được mong đợi từ cả năm trước. Đó là Đại Lễ Cầu An của Phúc Sinh Tự.

Không ồn ào, không phô trương. Chỉ có tiếng kinh trầm ấm vang lên từ chính điện, khói hương trầm bay tỏa, và hàng trăm con người — từ cụ bà tóc bạc đến em nhỏ còn bế trên tay — cùng quỳ lạy, cùng chắp tay, cùng thầm nguyện cầu trong lòng. Chính khoảnh khắc đó — giản dị mà thiêng liêng — mới là linh hồn thật sự của ngôi chùa làng.

Với người con xa quê, ngày 27 tháng Hai là ngày để nhớ. Dù không thể trở về dự lễ, hãy dành một phút lặng yên, thắp một nén hương tâm linh trong lòng, và biết rằng: ở làng Ngò xa xôi kia, vẫn có người đang cầu nguyện cho bạn.`,
  },

  // ══════════════════════════════════════════════
  // 📅  CÁC NGÀY LỄ PHẬT GIÁO TRONG NĂM
  // ══════════════════════════════════════════════
  ngayLe: [
    { ten: 'Tết Nguyên Đán',                    ngayAm: 1,  thangAm: 1  },
    { ten: 'Rằm tháng Giêng – Thượng Nguyên',   ngayAm: 15, thangAm: 1  },
    { ten: 'Đại Lễ Cầu An Phúc Sinh Tự',        ngayAm: 27, thangAm: 2,  isGioTo: true },
    { ten: 'Đại Lễ Phật Đản',                   ngayAm: 15, thangAm: 4  },
    { ten: 'Lễ Vu Lan – Báo Hiếu',              ngayAm: 15, thangAm: 7  },
    { ten: 'Rằm tháng Tám – Trung Thu',          ngayAm: 15, thangAm: 8  },
    { ten: 'Lễ Hạ Nguyên',                       ngayAm: 15, thangAm: 10 },
    { ten: 'Lễ Thành Đạo',                       ngayAm: 8,  thangAm: 12 },
  ],

  // ══════════════════════════════════════════════════════════
  // 🎊  MÔ TẢ CÁC LỄ HỘI LỚN (hiển thị trong section lễ hội)
  // ══════════════════════════════════════════════════════════
  festivals: [
    {
      icon:   '🌼',
      ngayAm: '27 tháng Hai âm lịch',
      ten:    'Đại Lễ Cầu An – Lễ Lớn Nhất Trong Năm',
      moTa:   'Truyền thống thiêng liêng đặc trưng của Phúc Sinh Tự — ngày toàn thể nhân dân làng Ngò và phật tử thập phương cùng hội tụ về chùa, dâng hương cầu nguyện bình an cho từng mái nhà, từng con người, từng thửa ruộng. Ngày này là sợi dây vô hình nối liền người ở lại và người xa xứ.',
      highlight: true,
    },
    {
      icon:   '🪷',
      ngayAm: 'Rằm tháng Tư',
      ten:    'Đại Lễ Phật Đản',
      moTa:   'Mừng ngày Đức Thế Tôn đản sinh, chùa trang hoàng rực rỡ đèn hoa. Lễ tắm Phật được tổ chức trang nghiêm — mỗi gáo nước thơm tưới lên tôn tượng Đản Sinh là một lần gột rửa phiền não trong tâm, nuôi dưỡng hạt giống bồ đề.',
      highlight: false,
    },
    {
      icon:   '🕯️',
      ngayAm: 'Rằm tháng Bảy',
      ten:    'Đại Lễ Vu Lan – Báo Hiếu',
      moTa:   'Mùa Vu Lan là mùa của tình thương và lòng biết ơn. Phúc Sinh Tự tổ chức lễ Vu Lan trang nghiêm, cài hoa hồng tri ân cha mẹ, cầu siêu cho hương linh tiền nhân. Đây là dịp để người con xa quê gửi tình cảm về quê nhà qua một nén hương lòng.',
      highlight: false,
    },
    {
      icon:   '🎋',
      ngayAm: 'Mùng 1 & Rằm hàng tháng',
      ten:    'Thời Khóa Tụng Kinh Định Kỳ',
      moTa:   'Mỗi ngày mùng Một và Rằm, phật tử làng Ngò tề tựu về chùa tụng kinh, dâng hương, và chia sẻ những điều lành trong cuộc sống. Nhịp sống tâm linh đều đặn này là mạch máu nuôi dưỡng cộng đồng qua bao thế hệ.',
      highlight: false,
    },
  ],

  // ══════════════════════════════════════════════════════════
  // ✍️  SECTION ĐẶC BIỆT — "NHỚ VỀ MÁI CHÙA"
  //     (Dành cho người con xa quê — hiển thị trong 1 section)
  // ══════════════════════════════════════════════════════════
  homesick: {
    title:    'Gửi Người Con Xa Quê',
    subtitle: 'Dù ngàn dặm cách xa — lòng vẫn hướng về mái chùa làng',
    content: [
      'Có những người rời làng Ngò từ thuở còn trẻ — vào Nam lập nghiệp, ra Hà Nội học hành, hay bay sang xứ người mưu sinh. Năm tháng qua đi, tóc bạc thêm, đường đời dài thêm, nhưng trong ký ức, hình ảnh ngôi chùa Phúc Sinh vẫn vẹn nguyên như thuở ấu thơ: mái ngói rêu phong dưới nắng chiều, cây cổ thụ xòe bóng mát, tiếng mõ trầm ấm vọng ra từ chính điện.',
      'Mỗi năm, đến ngày 27 tháng Hai âm lịch, dù ở đâu, những người con ấy lại bâng khuâng nhớ về ngày lễ cầu an — nhớ mùi hương trầm, nhớ tiếng kinh ngân, nhớ cảnh cả làng cùng quỳ lạy trong không khí trang nghiêm mà ấm áp.',
      'Phúc Sinh Tự luôn ở đó — chờ bạn trở về. Và trong những ngày chưa thể trở về, hãy biết rằng: chùa vẫn ngày ngày dâng hương, vẫn tụng kinh, vẫn gửi vào hương khói những lời nguyện cầu bình an cho tất cả người con của làng Ngò — dù ở nơi nào trên thế gian này.',
    ],
    poem: {
      title: 'Tiếng Chuông Làng Ngò',
      lines: [
        'Chiều quê chuông đổ một hồi,',
        'Lòng người lữ thứ bồi hồi nhớ thương.',
        'Phúc Sinh Tự — mái chùa làng —',
        'Ngàn đời vẫn đứng, vẫn vàng khói hương.',
        '',
        'Quan Âm ngàn mắt nhìn khắp,',
        'Ngàn tay đưa ra — ôm lấp khổ đau.',
        'Con đi bốn bể năm châu,',
        'Vẫn nghe Ngài gọi — trở về bình an.',
      ],
      author: '— Thơ cảm tác, gửi tặng người con xa quê làng Ngò',
    }
  },

  // ══════════════════════════════════════════════
  // 🎨  MÀU SẮC
  // ══════════════════════════════════════════════
  theme: {
    crimson:     '#7a0c1e',
    crimsonDark: '#500a14',
    gold:        '#c9921f',
    goldLight:   '#e8b84b',
    cream:       '#faf5ea',
  },

  // ══════════════════════════════════════════════
  // 🖼️  ẢNH
  // ══════════════════════════════════════════════
  images: {
    hero: [
      '/images/hero-1.jpg',   // Toàn cảnh chùa / cổng chùa
      '/images/hero-2.jpg',   // Chính điện / tượng Quan Âm
      '/images/hero-3.jpg',   // Vườn hoa / cảnh quan
    ],
    gallery: [
      '/images/gallery-1.jpg',   // z7729041069295 — tượng Quan Âm chính điện
      '/images/gallery-2.jpg',   // z7729041073279 — bàn thờ lễ hội
      '/images/gallery-3.jpg',   // z7729041083268 — tượng Phật Đản Sinh
      '/images/gallery-4.jpg',   // z7729041090244 — gác chuông & vườn hoa
      '/images/gallery-5.jpg',   // z7729041109330 — vườn cúc đẹp
      '/images/gallery-6.jpg',   // z7729041113504 — phật tử tụng kinh
      '/images/gallery-7.jpg',   // z7729041126917 — lễ Tết 2025
      '/images/gallery-8.jpg',   // z7729202861837 — thời khóa tụng kinh
      '/images/gallery-9.jpg',   // z7729202883171 — sư trụ trì tại bàn thờ
      '/images/gallery-10.jpg',  // z7729234198787 — đại lễ ngoài trời
    ],
    abbot: '/images/abbot.jpg',
    logo:  '',
  },

  // ══════════════════════════════════════════════
  // 💳  NGÂN HÀNG (thanh toán công đức)
  // ══════════════════════════════════════════════
  bank: {
    primary: {
      name:          '',   // Cập nhật tên ngân hàng
      id:            '',   // Bank ID cho VietQR
      accountNumber: '',   // Số tài khoản
      accountName:   '',   // Tên chủ tài khoản
      description:   'Chuyển khoản công đức – Chùa Phúc Sinh Tự',
    },
    secondary: {
      name:          '',
      id:            '',
      accountNumber: '',
      accountName:   '',
      description:   'Sư Trụ Trì – Chùa Phúc Sinh Tự',
    }
  },

  // ══════════════════════════════════════════════
  // 🔧  CẤU HÌNH HỆ THỐNG
  // ══════════════════════════════════════════════
  system: {
    domain:      'chuaphucsinhtubacninh.com.vn',   // Cập nhật domain thực
    foundedYear: '2025',
    copyright:   '© 2025 Chùa Phúc Sinh Tự · Thôn Ngô Phần, Xã Bình Định, Lương Tài, Bắc Ninh',
  }

};

// Export cho Node.js (server.js)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = TEMPLE;
}
