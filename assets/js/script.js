window.onload = function() {
  // الحصول على زر فتح الشريط الجانبي باستخدام ID
  openSidebarBtn = document.getElementById("openSidebarBtn");
  // إضافة حدث 'click' لزر فتح الشريط الجانبي
  openSidebarBtn.addEventListener('click', function () {
    sidebar = document.getElementById("sidebar");
    // إظهار الشريط الجانبي
    sidebar.classList.remove('sidebar__hide');
  });

  // الحصول على زر إغلاق الشريط الجانبي باستخدام ID
  closeSidebarBtn = document.getElementById("closeSidebarBtn");
  // إضافة حدث 'click' لزر إغلاق الشريط الجانبي
  closeSidebarBtn.addEventListener('click', function () {
    sidebar = document.getElementById("sidebar");
    // إخفاء الشريط الجانبي
    sidebar.classList.add('sidebar__hide');
  });

  // This if statment will be true if I am in the contact.html page
  if (window.location.pathname.includes('contact.html')) {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
      // منع الإرسال الافتراضي للنموذج
      event.preventDefault();
      
      // الحصول على القيم المدخلة
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
  
      // التحقق من صحة المدخلات
      if (name && email && message) {
          alert(`شكراً لك، ${name}!\nتم إرسال رسالتك بنجاح.`);
          document.getElementById('contactForm').reset();
      } else {
          alert('يرجى ملء جميع الحقول.');
      }
      contactForm.reset();
    });
  }

  if (window.location.pathname.includes('event.html')) {
      loadEventDetails();
  }
  initializeAdditionalFeatures();

  const toggleBtn = document.getElementById('dropdownToggleBtn');
  const dropdownMenu = document.getElementById('flagDropdown');

  toggleBtn.addEventListener('click', function () {
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
  });

  // Optional: hide dropdown when clicking outside
  document.addEventListener('click', function (e) {
    if (!toggleBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
      dropdownMenu.style.display = 'none';
    }
  });
};

const eventsData = {
  1: {
    title: "مهرجان اللاذقية السينمائي",
    category: "ثقافة وفنون",
    date: "الجمعة 26 سبتمبر 2025",
    location: "اللاذقية - المسرح الوطني",
    time: "6:00 مساءً - 10:00 مساءً",
    price: "مجاني",
    image: "assets/img/events/مهرجان.webp",
    description: `
      <p>مهرجان اللاذقية السينمائي هو تظاهرة ثقافية فنية تسلط الضوء على الإنتاج السينمائي السوري والعربي المعاصر. يُقام المهرجان هذا العام تحت شعار "السينما جسر للتواصل" ويستمر لمدة 5 أيام متتالية.</p>
      
      <h4 class="mt-4">الفعاليات والأنشطة:</h4>
      <ul class="list">
        <li>عرض 20 فيلمًا سوريًا وعربيًا حديثًا</li>
        <li>ورشات عمل متخصصة في كتابة السيناريو والإخراج</li>
        <li>ندوات حوارية مع مخرجين وممثلين بارزين</li>
        <li>معرض للصور والملصقات السينمائية التاريخية</li>
        <li>عروض أفلام قصيرة لشباب المواهب</li>
      </ul>

      <h4 class="mt-4">الفنانين المشاركين:</h4>
      <p>يشارك في المهرجان نخبة من صناع الأفلام السوريين والعرب، بما في ذلك المخرجين البارزين والنجوم الشباب الواعدين.</p>
    `,
    organizer: "جمعية الفن السابع",
    contact: "info@cinema7.com",
    phone: "00963111234567"
  },
  2: {
    title: "ماراثون دمشق للسلام",
    category: "رياضة ومجتمع",
    date: "السبت 27 سبتمبر 2025",
    location: "دمشق - ساحة الأمويين",
    time: "7:00 صباحاً - 12:00 ظهراً",
    price: "50,000 ل.س",
    image: "assets/img/events/ماراثون.jpg",
    description: `
      <p>ماراثون دمشق للسلام هو حدث رياضي جماهيري ينطلق من ساحة الأمويين ويهدف إلى تعزيز روح السلام والتضامن في المجتمع. يشارك في الماراثون رياضيون محترفون وهواة من مختلف الأعمار.</p>
      
      <h4 class="mt-4">مسارات الماراثون:</h4>
      <ul class="list">
        <li>مسار 42 كم للمحترفين</li>
        <li>مسار 21 كم للهواة</li>
        <li>مسار 5 كم للمبتدئين والعائلات</li>
        <li>مسار 1 كم للأطفال</li>
      </ul>

      <h4 class="mt-4">الجوائز:</h4>
      <p>جوائز مالية وعينية للفائزين في كل فئة، بالإضافة إلى ميداليات تذكارية لجميع المشاركين.</p>
    `,
    organizer: "الاتحاد الرياضي السوري",
    contact: "marathon@syriasport.com",
    phone: "00963117654321"
  },
  3: {
    title: "معرض الكتاب في حلب",
    category: "ثقافة وأدب",
    date: "الخميس 25 سبتمبر 2025",
    location: "حلب - معرض الكتاب الدولي",
    time: "10:00 صباحاً - 9:00 مساءً",
    price: "مجاني",
    image: "assets/img/events/معرض-كتب.jpg",
    description: `
      <p>معرض الكتاب في حلب هو تظاهرة ثقافية كبرى تجمع دور النشر المحلية والعربية تحت سقف واحد. يستمر المعرض لمدة 10 أيام ويشهد إقبالاً كبيراً من محبي القراءة.</p>
      
      <h4 class="mt-4">مميزات المعرض:</h4>
      <ul class="list">
        <li>مشاركة أكثر من 100 دار نشر محلية وعربية</li>
        <li>خصومات تصل إلى 50% على آلاف العناوين</li>
        <li>ندوات ثقافية يومية مع كتّاب ومفكرين</li>
        <li>جلسات توقيع كتب مع مؤلفين بارزين</li>
        <li>ركن خاص للأطفال واليافعين</li>
      </ul>

      <h4 class="mt-4">أنشطة موازية:</h4>
      <p>ورش عمل في الكتابة الإبداعية، وجلسات قراءة قصصية، وعروض مسرحية مستوحاة من الأدب.</p>
    `,
    organizer: "اتحاد الناشرين السوريين",
    contact: "bookfair@aleppo-culture.com",
    phone: "00963211122334"
  },
  4: {
    title: "أمسية موسيقية في قلعة صلاح الدين",
    category: "موسيقى وفنون",
    date: "الأحد 28 سبتمبر 2025",
    location: "اللاذقية - قلعة صلاح الدين",
    time: "7:30 مساءً - 10:30 مساءً",
    price: "25,000 ل.س",
    image: "assets/img/events/أمسية.jpg",
    description: `
      <p>أمسية موسيقية استثنائية في أجواء تاريخية ساحرة داخل قلعة صلاح الدين. تقدم الفرقة السورية للموسيقى الكلاسيكية باقة مختارة من أروع المقطوعات الشرقية والغربية.</p>
      
      <h4 class="mt-4">برنامج الأمسية:</h4>
      <ul class="list">
        <li>مقدمة موسيقية: سمفونية الربيع</li>
        <li>مقطوعات عربية كلاسيكية: أم كلثوم وعبد الوهاب</li>
        <li>موسيقى سورية تراثية</li>
        <li>مقطوعات عالمية مختارة</li>
        <li>ختام: وصلة موسيقية تفاعلية</li>
      </ul>

      <h4 class="mt-4">الفرقة المشاركة:</h4>
      <p>فرقة سورية للموسيقى الكلاسيكية بقيادة المايسترو أحمد العبد الله، بمشاركة عازفين محترفين على الآلات الوترية والإيقاعية.</p>
    `,
    organizer: "مديرية الثقافة - اللاذقية",
    contact: "music@latakia-culture.com",
    phone: "00963415566778"
  },
  5: {
    title: "مؤتمر حماية البيئة والتنمية المستدامة",
    category: "تكنولوجيا وريادة أعمال",
    date: "الإثنين 29 سبتمبر 2025",
    location: "دمشق - فندق الشام",
    time: "9:00 صباحاً - 5:00 مساءً",
    price: "75,000 ل.س",
    image: "assets/img/events/أعمال.jpg",
    description: `
      <p>مؤتمر متخصص يجمع الخبراء والمهتمين بقضايا البيئة والتنمية المستدامة لمناقشة أحدث الحلول التكنولوجية والتحديات البيئية في سوريا والمنطقة.</p>
      
      <h4 class="mt-4">محاور المؤتمر:</h4>
      <ul class="list">
        <li>التكنولوجيا الخضراء والحلول المستدامة</li>
        <li>إدارة النفايات وإعادة التدوير</li>
        <li>الطاقة المتجددة وتقنياتها</li>
        <li>الزراعة المستدامة والأمن الغذائي</li>
        <li>السياسات البيئية والتشريعات</li>
      </ul>

      <h4 class="mt-4">المتحدثون:</h4>
      <p>خبراء محليون ودوليون في مجال البيئة والتنمية المستدامة، وممثلون عن منظمات دولية، ورواد أعمال في مجال التكنولوجيا الخضراء.</p>
    `,
    organizer: "وزارة الإدارة المحلية والبيئة",
    contact: "conference@environment.gov.sy",
    phone: "00963119988776"
  },
  6: {
    title: "ورشة عمل فن الرسم بالقهوة",
    category: "فنون وتعليم",
    date: "الخميس 25 سبتمبر 2025",
    location: "حمص - مركز الفنون التشكيلية",
    time: "4:00 مساءً - 7:00 مساءً",
    price: "15,000 ل.س",
    image: "assets/img/events/فن-بالقهوة.jpg",
    description: `
      <p>ورشة فنية مبتكرة تقدم تجربة فريدة للرسم باستخدام القهوة كوسيط فني. تهدف الورشة إلى اكتشاف مواهب جديدة وتعليم تقنيات الرسم بالقهوة للمبتدئين والمهتمين.</p>
      
      <h4 class="mt-4">محتويات الورشة:</h4>
      <ul class="list">
        <li>مقدمة عن تاريخ وتقنيات الرسم بالقهوة</li>
        <li>تعلم خلط درجات القهوة المختلفة</li>
        <li>تقنيات الرسم والتظليل بالقهوة</li>
        <li>تطبيق عملي: إنشاء لوحة فنية بالقهوة</li>
        <li>نصائح للحفاظ على اللوحات</li>
      </ul>

      <h4 class="mt-4">المهارات المكتسبة:</h4>
      <p>سيتمكن المشاركون من إنشاء لوحات فنية باستخدام القهوة، وفهم أساسيات التظليل والتركيب الفني، وتطوير الإبداع الفني باستخدام مواد غير تقليدية.</p>
    `,
    organizer: "مركز الفنون التشكيلية - حمص",
    contact: "art@homs-culture.com",
    phone: "00963314455667"
  },
  7: {
    title: "فعالية التوعية بمرض السكري",
    category: "صحة وتوعية",
    date: "الثلاثاء 30 سبتمبر 2025",
    location: "طرطوس - المستشفى الوطني",
    time: "10:00 صباحاً - 2:00 ظهراً",
    price: "مجاني",
    image: "assets/img/events/توعية-صحية.jpg",
    description: `
      <p>فعالية توعوية شاملة تهدف إلى رفع الوعي حول مرض السكري، طرق الوقاية منه، وكيفية التعايش معه. تقام الفعالية بمناسبة اليوم العالمي للسكري.</p>
      
      <h4 class="mt-4">أنشطة الفعالية:</h4>
      <ul class="list">
        <li>فحوصات مجانية لمستوى السكر في الدم</li>
        <li>استشارات طبية مجانية مع أخصائيين</li>
        <li>ندوات تثقيفية عن التغذية الصحية</li>
        <li>عروض عملية لطرق قياس السكر</li>
        <li>توزيع نشرات توعوية ومطويات</li>
      </ul>

      <h4 class="mt-4">المحاضرون:</h4>
      <p>أطباء مختصون في أمراض الغدد الصماء والسكري، أخصائيو تغذية، وممرضون متخصصون في رعاية مرضى السكري.</p>
    `,
    organizer: "نقابة الأطباء - فرع طرطوس",
    contact: "diabetes@tartous-doctors.com",
    phone: "00963437788990"
  },
  8: {
    title: 'مسرحية "أيام زمان" الكوميدية',
    category: "مسرح وفنون أدائية",
    date: "الأحد 28 سبتمبر 2025",
    location: "حلب - المسرح الوطني",
    time: "8:00 مساءً - 10:00 مساءً",
    price: "20,000 ل.س",
    image: "assets/img/events/مسرحية.jpg",
    description: `
      <p>مسرحية كوميدية اجتماعية تروي قصصاً من التراث المحلي بطريقة حديثة ومضحكة. تقدم رؤية فكاهية للحياة الاجتماعية في الماضي والحاضر.</p>
      
      <h4 class="mt-4">قصة المسرحية:</h4>
      <p>تدور أحداث المسرحية حول عائلة تقليدية تواجه تحديات العصر الحديث، وتسلط الضوء على التناقضات الطريفة بين الأجيال والعادات والتقاليد.</p>

      <h4 class="mt-4">طاقم التمثيل:</h4>
      <ul class="list">
        <li>الفنان ناصر السقا - بدور الجد</li>
        <li>الفنانة لمى إبراهيم - بدور الجدة</li>
        <li>الفنان وسام رحال - بدور الابن</li>
        <li>الفنانة سلمى الحسين - بدور الحفيدة</li>
      </ul>

      <h4 class="mt-4">معلومات إضافية:</h4>
      <p>المسرحية من تأليف محمد الحلبي وإخراج ياسين العودات، وتستمر لمدة 120 دقيقة مع استراحة.</p>
    `,
    organizer: "فرقة مسرح حلب",
    contact: "theater@aleppo-arts.com",
    phone: "00963213344556"
  },
  9: {
    title: "بازار المنتجات اليدوية",
    category: "حرف يدوية ومجتمع",
    date: "الإثنين 29 سبتمبر 2025",
    location: "دمشق - سوق الحميدية",
    time: "10:00 صباحاً - 8:00 مساءً",
    price: "مجاني",
    image: "assets/img/events/بازار-منتجات-يدوية.jpg",
    description: `
      <p>سوق شعبي يضم منتجات الحرفيين المحليين من مختلف مناطق سوريا. يهدف البازار إلى دعم المشاريع الصغيرة والحرف التقليدية وتعزيز الاقتصاد المحلي.</p>
      
      <h4 class="mt-4">أنواع المنتجات:</h4>
      <ul class="list">
        <li>المطرزات والمنسوجات التقليدية</li>
        <li>التحف والأعمال الخشبية</li>
        <li>المصنوعات الجلدية</li>
        <li>الإكسسوارات والحلي</li>
        <li>منتجات غذائية محلية</li>
        <li>أعمال فنية تشكيلية</li>
      </ul>

      <h4 class="mt-4">أنشطة مصاحبة:</h4>
      <p>عروض حية للحرف اليدوية، ورش عمل مصغرة، عروض موسيقية شعبية، وتذوق منتجات محلية.</p>
    `,
    organizer: "جمعية دعم الحرف اليدوية",
    contact: "bazaar@handicrafts-sy.com",
    phone: "00963112233445"
  },
  10: {
    title: "جلسة يوغا وتأمل عند شروق الشمس",
    category: "صحة ورفاهية",
    date: "الجمعة 26 سبتمبر 2025",
    location: "جبل قاسيون - قمة المشهد",
    time: "5:30 صباحاً - 7:30 صباحاً",
    price: "10,000 ل.س",
    image: "assets/img/events/جلسة-يوغا.jpg",
    description: `
      <p>جلسة استثنائية لليوغا والتأمل في الهواء الطلق مع إطلالة بانورامية على مدينة دمشق عند شروق الشمس. تجربة روحية وجسدية فريدة لبدء اليوم بالطاقة الإيجابية.</p>
      
      <h4 class="mt-4">برنامج الجلسة:</h4>
      <ul class="list">
        <li>تمارين إحماء واستعداد</li>
        <li>جلسة يوغا كاملة (60 دقيقة)</li>
        <li>جلسة تأمل وصمت (20 دقيقة)</li>
        <li>تمارين تنفس وطاقة</li>
        <li>ختام مع شاي أعشاب</li>
      </ul>

      <h4 class="mt-4">ما ستتعلمه:</h4>
      <p>أساسيات اليوغا، تقنيات التنفس الصحيحة، كيفية ممارسة التأمل، والاستفادة من طاقة الطبيعة في تحسين الصحة النفسية والجسدية.</p>

      <h4 class="mt-4">ملاحظات:</h4>
      <p>يرجى إحضار سجادة يوغا شخصية، وارتداء ملابس مريحة، والحضور قبل الموعد بربع ساعة على الأقل.</p>
    `,
    organizer: "مركز دمشق للصحة واليوغا",
    contact: "yoga@damascus-wellness.com",
    phone: "00963116677889"
  }
};



function loadEventDetails() {
  const urlParams = new URLSearchParams(window.location.search);
  const eventId = urlParams.get('id') || '1';
  const event = eventsData[eventId];
  const eventContent = document.getElementById('eventContent');

  if (event) {
    // تحديث عنوان الصفحة
    document.title = `${event.title} - المرشد`;

    // إنشاء محتوى الفعالية مباشرة بدون رسالة تحميل
    eventContent.innerHTML = `
      <div class="row">
        <div class="col-lg-8">
          <div class="event-header mb-4">
            <span class="tag tag-blue">${event.category}</span>
            <h1 class="mt-3">${event.title}</h1>
            <div class="event-meta mt-3">
              <p class="date"><strong>📅 التاريخ:</strong> ${event.date}</p>
              <p class="location"><strong>📍 الموقع:</strong> ${event.location}</p>
              <p class="time"><strong>⏰ الوقت:</strong> ${event.time}</p>
              <p class="price"><strong>💵 السعر:</strong> ${event.price}</p>
            </div>
          </div>

          <div class="event-gallery mb-4" style="position: relative;">
            <img src="${event.image}" alt="${event.title}" class="img-fluid rounded">
            <button class="favorite-btn" id="favoriteBtn"></button>
          </div>

          <div class="event-description">
            ${event.description}

            <div class="event-actions mt-5">
              <button class="button-style me-3" id="addToCalendar">أضف إلى التقويم</button>
              <button class="button-style me-3" id="bookEvent">احجز مقعدك</button>
              <button class="button-style" id="shareEvent">شارك الفعالية</button>
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="event-sidebar">
            <div class="card-2 p-3 mb-4">
              <h4>تنظيم الفعالية</h4>
              <p><strong>المنظم:</strong> ${event.organizer}</p>
              <p><strong>الاتصال:</strong> ${event.contact}</p>
              <p><strong>الهاتف:</strong><span class="ltr"> ${event.phone}</span></p>
            </div>

            <div class="card-2 p-3">
              <h4>فعاليات ذات صلة</h4>
              <div class="related-events">
                ${getRelatedEvents(eventId)}
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="related-articles my-80">
        <div class="container">
          <div class="section-title">
            <h2>فعاليات قد تهمك</h2>
          </div>
          <div class="row">
            ${getRecommendedEvents(eventId)}
          </div>
        </div>
      </section>
    `;

    // إضافة event listeners للأزرار
    document.getElementById('addToCalendar')?.addEventListener('click', function() {
      showToast('تمت إضافة الفعالية إلى تقويمك بنجاح!', 'success');
    });

    document.getElementById('shareEvent')?.addEventListener('click', function() {
      if (navigator.share) {
        navigator.share({
          title: event.title,
          text: `انضم إلى ${event.title} - ${event.date}`,
          url: window.location.href
        });
      } else {
        showToast(`رابط المشاركة: ${window.location.href}`, 'info');
      }
    });

    // Favorite Button
    initializeFavoriteButton(eventId);
    
    // Booking System
    initializeBookingSystem(eventId, event.title);

  } else {
    eventContent.innerHTML = `
      <div class="text-center">
        <h2>الفعالية غير موجودة</h2>
        <p>عذراً، لم نتمكن من العثور على الفعالية المطلوبة.</p>
        <a href="events.html" class="button-style mt-3">عودة إلى جميع الفعاليات</a>
      </div>
    `;
  }
}

function initializeAdditionalFeatures() {
  // Scroll to Top Button
  const scrollToTopBtn = document.createElement('button');
  scrollToTopBtn.innerHTML = '↑';
  scrollToTopBtn.classList.add('scroll-to-top');
  document.body.appendChild(scrollToTopBtn);

  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      scrollToTopBtn.style.display = 'flex';
    } else {
      scrollToTopBtn.style.display = 'none';
    }
  });

  // Dark Mode Toggle
  const darkModeToggle = document.createElement('div');
  darkModeToggle.classList.add('dark-mode-toggle');
  darkModeToggle.innerHTML = `
    <label class="switch">
      <input type="checkbox" id="darkModeToggle">
      <span class="slider"></span>
    </label>
  `;
  document.body.appendChild(darkModeToggle);

  const darkModeToggleInput = document.getElementById('darkModeToggle');

  // تحميل تفضيلات المستخدم
  if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    darkModeToggleInput.checked = true;
  }

  darkModeToggleInput.addEventListener('change', function() {
    if (this.checked) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('darkMode', 'enabled');
      showToast('تم تفعيل الوضع الليلي', 'success');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('darkMode', 'disabled');
      showToast('تم تعطيل الوضع الليلي', 'info');
    }
  });

  // Reading Progress Bar
  const progressBar = document.createElement('div');
  progressBar.classList.add('reading-progress');
  progressBar.innerHTML = '<div class="reading-progress-bar"></div>';
  document.body.appendChild(progressBar);

  window.addEventListener('scroll', () => {
    const winHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;
    const scrollTop = window.pageYOffset;
    const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;
    const progressBarInner = document.querySelector('.reading-progress-bar');
    progressBarInner.style.width = scrollPercent + '%';
  });
}

function initializeFavoriteButton(eventId) {
  const favoriteBtn = document.getElementById('favoriteBtn');
  if (!favoriteBtn) return;

  // التحقق إذا كانت الفعالية مفضلة
  const favorites = JSON.parse(localStorage.getItem('favoriteEvents') || '[]');
  if (favorites.includes(eventId)) {
    favoriteBtn.classList.add('active');
  }

  favoriteBtn.addEventListener('click', function() {
    let favorites = JSON.parse(localStorage.getItem('favoriteEvents') || '[]');
    
    if (favorites.includes(eventId)) {
      // إزالة من المفضلة
      favorites = favorites.filter(id => id !== eventId);
      this.classList.remove('active');
      showToast('تمت إزالة الفعالية من المفضلة', 'info');
    } else {
      // إضافة إلى المفضلة
      favorites.push(eventId);
      this.classList.add('active');
      showToast('تمت إضافة الفعالية إلى المفضلة', 'success');
    }
    
    localStorage.setItem('favoriteEvents', JSON.stringify(favorites));
  });
}

function initializeBookingSystem(eventId, eventTitle) {
  const bookEventBtn = document.getElementById('bookEvent');
  if (!bookEventBtn) return;

  bookEventBtn.addEventListener('click', function() {
    const bookingModal = new bootstrap.Modal(document.getElementById('bookingModal'));
    bookingModal.show();
  });

  document.getElementById('confirmBooking')?.addEventListener('click', function() {
    const form = document.getElementById('bookingForm');
    if (form.checkValidity()) {
      // حفظ بيانات الحجز
      const bookingData = {
        eventId: eventId,
        eventTitle: eventTitle,
        name: document.getElementById('bookingName').value,
        email: document.getElementById('bookingEmail').value,
        phone: document.getElementById('bookingPhone').value,
        guests: document.getElementById('bookingGuests').value,
        notes: document.getElementById('bookingNotes').value,
        date: new Date().toISOString()
      };
      
      // حفظ في localStorage
      let bookings = JSON.parse(localStorage.getItem('eventBookings') || '[]');
      bookings.push(bookingData);
      localStorage.setItem('eventBookings', JSON.stringify(bookings));
      
      // إغلاق المودال وعرض رسالة نجاح
      bootstrap.Modal.getInstance(document.getElementById('bookingModal')).hide();
      showToast('تم حجز مقعدك بنجاح! سنتواصل معك قريباً لتأكيد الحجز.', 'success');
      form.reset();
    } else {
      form.reportValidity();
    }
  });
}

function showToast(message, type = 'info', duration = 3000) {
  const toastContainer = document.querySelector('.toast-container') || createToastContainer();
  const toast = document.createElement('div');
  toast.classList.add('toast', type);
  toast.innerHTML = message;
  
  toastContainer.appendChild(toast);
  
  setTimeout(() => toast.classList.add('show'), 100);
  
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

function createToastContainer() {
  const container = document.createElement('div');
  container.classList.add('toast-container');
  document.body.appendChild(container);
  return container;
}

function getRelatedEvents(currentEventId) {
  const relatedIds = [];
  const currentCategory = eventsData[currentEventId].category;
  
  // إيجاد فعاليات من نفس التصنيف
  Object.keys(eventsData).forEach(id => {
    if (id !== currentEventId && eventsData[id].category === currentCategory) {
      relatedIds.push(id);
    }
  });

  // إذا لم توجد فعاليات من نفس التصنيف، اختر عشوائياً
  if (relatedIds.length === 0) {
    Object.keys(eventsData).forEach(id => {
      if (id !== currentEventId && relatedIds.length < 3) {
        relatedIds.push(id);
      }
    });
  }

  return relatedIds.map(id => `
    <div class="related-event mb-3">
      <a href="event.html?id=${id}" class="d-flex align-items-center" style="gap: 15px">
        <img src="${eventsData[id].image}" alt="${eventsData[id].title}" class="rounded me-3" style="width: 80px; height: 70px; object-fit: cover;">
        <div class="d-flex align-items-right" style="flex-direction: column;">
          <h6 class="mb-1" style="color: #212529;">${eventsData[id].title}</h6>
          <small class="text-muted text-right">${eventsData[id].date.split(' ')[1]} ${eventsData[id].date.split(' ')[2]}</small>
        </div>
      </a>
    </div>
  `).join('');
}

function getRecommendedEvents(currentEventId) {
  const recommendedIds = [];
  Object.keys(eventsData).forEach(id => {
    if (id !== currentEventId && recommendedIds.length < 3) {
      recommendedIds.push(id);
    }
  });

  return recommendedIds.map(id => `
    <div class="col-md-4 mb-4">
      <div class="card-2">
        <div class="card__header">
          <img src="${eventsData[id].image}" alt="${eventsData[id].title}">
        </div>
        <div class="card-body">
          <span class="tag tag-blue">${eventsData[id].category}</span>
          <h4>${eventsData[id].title}</h4>
          <p class="date">${eventsData[id].date}</p>
          <p>${eventsData[id].description.substring(0, 100)}...</p>
          <a href="event.html?id=${id}">
            <button class="button-style">اقرأ المزيد</button>
          </a>
        </div>
      </div>
    </div>
  `).join('');
}