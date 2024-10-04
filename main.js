import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';
// navbar
// document.addEventListener('DOMContentLoaded', function() {
//   console.log("DOM fully loaded");

//   const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
//   const currentPath = window.location.pathname;

//   console.log("Current path:", currentPath);

//   navLinks.forEach(link => {
//       const href = link.getAttribute('href');
//       console.log("Checking link:", href);
      
//       // 移除所有鏈接的 active 類
//       link.classList.remove('active');
//       link.removeAttribute('aria-current');

//       // 檢查當前路徑是否以鏈接的 href 結尾
//       if (currentPath.endsWith(href) || 
//           (currentPath.endsWith('/') && href === 'index.html')) {
//           console.log("Setting active:", href);
//           link.classList.add('active');
//           link.setAttribute('aria-current', 'page');
//       }
//   });
// });
// 首頁-banner-swiper
// var bannerSwiper = new Swiper(".banner-swiper", {
//   freeMode: true,
//   loop: true,
//   autoplay: {
//     delay: 2500,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });
// 首頁-banner-slidesBg
const bannerSlides = [
    {
        url: 'https://github.com/rochelwang1205/triangle/blob/main/assets/images/banner_1.jpg?raw=true',
        title: '發掘<span class="text-brand-01">新機會</span>，實現你的夢想',
        subtitle: '我們的課程將幫助你用英語發掘更多機會，實現你的職業和生活夢想'
    },
    {
        url: 'https://github.com/rochelwang1205/triangle/blob/main/assets/images/banner_2.jpg?raw=true',
        title: '探索豐富課程，找到你<span class="text-brand-01">學習興趣</span>',
        subtitle: '我們提供各種課程，無論你是初學者還是進階者，都能找到適合自己的學習計畫。'
    },
    {
        url: 'https://github.com/rochelwang1205/triangle/blob/main/assets/images/banner_3.jpg?raw=true',
        title: '從基礎到流利，<span class="text-brand-01">快速提升</span>口語能力',
        subtitle: '我們的口語訓練課程幫助你從基礎到流利，一步一步實現你的語言目標。'
    },
    {
        url: 'https://github.com/rochelwang1205/triangle/blob/main/assets/images/banner_4.jpg?raw=true',
        title: '輕鬆學英文，<span class="text-brand-01">隨時隨地</span>',
        subtitle: '無論你在何處，我們的線上課程都能讓你隨時隨地提高英語水平。'
    },
    {
        url: 'https://github.com/rochelwang1205/triangle/blob/main/assets/images/banner_5.jpg?raw=true',
        title: '新學期，<span class="text-brand-01">新挑戰</span>，量身定制學習計劃',
        subtitle: '加入我們的英語學習社群，迎接全新挑戰，開啟語言學習新篇章。'
    },
];
document.addEventListener('DOMContentLoaded', function() {
    const swiperWrapper = document.querySelector('.banner-swiper .swiper-wrapper');
    if (swiperWrapper) {
        bannerSlides.forEach(slide => {
            const slideDiv = document.createElement('div');
            slideDiv.className = 'swiper-slide';
            slideDiv.style.backgroundImage = `url(${slide.url})`;
            
            slideDiv.innerHTML = `
                <div class="container text-gray-02 text-center text-xl-start">
                    <h1>${slide.title}</h1>
                    <h5>${slide.subtitle}</h5>
                </div>
            `;
            
            swiperWrapper.appendChild(slideDiv);
        });
    } else {
        console.error("swiper-wrapper not found");
    }
});
// 首頁-熱門課程-swiper
// var hotSwiper = new Swiper(".hot-Swiper", {
//     slidesPerView: 1,
//     spaceBetween: 20,
//     centeredSlides: false,
//     autoplay: {
//       delay: 2500,
//       disableOnInteraction: false,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     breakpoints: {
//         640: {
//           slidesPerView: 1,
//           spaceBetween: 20,
//         },
//         768: {
//           slidesPerView: 2,
//           spaceBetween: 30,
//         },
//         1024: {
//           slidesPerView: 2,
//           spaceBetween: 40,
//         },
//       },
//   });
// 首頁-熱門課程-slidesBg
const hotCourses = [
    {
        title: "每日英文提升計畫",
        instructor: "林文均 Pro線上英文教學",
        rating: "4.8",
        reviews: "1579",
        price: "NT$1,690",
        image: "https://github.com/rochelwang1205/triangle/blob/main/assets/images/hot_course_1.jpg?raw=true"
    },
    {
        title: "高級會話技巧",
        instructor: "劉鴻惟 璀璨英語",
        rating: "4.7",
        reviews: "1280",
        price: "NT$1,890",
        image: "https://github.com/rochelwang1205/triangle/blob/main/assets/images/hot_course_2.jpg?raw=true"
    },
    {
        title: "IELTS考試成功策略",
        instructor: "李欣喜 專業英語",
        rating: "4.9",
        reviews: "2103",
        price: "NT$2,190",
        image: "https://github.com/rochelwang1205/triangle/blob/main/assets/images/hot_course_3.jpg?raw=true"
    },
    {
        title: "30天商務英語必備技能",
        instructor: "胡丹儒 智慧英文教學",
        rating: "4.6",
        reviews: "987",
        price: "NT$1,490",
        image: "https://github.com/rochelwang1205/triangle/blob/main/assets/images/hot_course_4.jpg?raw=true"
    }
];
document.addEventListener('DOMContentLoaded', function() {
    const hotCourseSwiperWrapper = document.querySelector('.hot-courses .swiper-wrapper');
    if (hotCourseSwiperWrapper) {
        hotCourses.forEach(course => {
            const slideDiv = document.createElement('div');
            slideDiv.className = 'swiper-slide d-flex flex-column align-items-start justify-content-between p-5 col-6';

            slideDiv.innerHTML = `
                <div class="hot-card" style="background-image: linear-gradient(0deg, rgba(0, 0, 0, .6) 40%, transparent 60%), url(${course.image});">
                    <div class="position-relative">
                        <div class="img-tags position-absolute d-flex justify-content-between align-items-center w-100">
                            <span class="hot-tag">熱門</span>
                            <span class="material-icons text-gray-01">bookmark_border</span>
                        </div>
                    </div>
                    <div class="card-body pt-14">
                        <h3 class="card-title text-gray-01">${course.title}</h3>
                        <p class="card-text text-gray-03">${course.instructor}</p>
                        <div class="d-flex justify-content-between">
                            <div class="d-flex align-items-center text-gray-03">
                                <span class="material-icons text-brand-01 fs-5">star</span>
                                <span class="text-gray-03 fs-5">${course.rating}(${course.reviews})</span>
                            </div>
                            <span class="fs-3 text-gray-01">${course.price}</span>
                        </div>
                    </div>
                </div>
            `;

            hotCourseSwiperWrapper.appendChild(slideDiv);
        });
    } else {
        console.error("hotCourseSwiperWrapper not found");
    }
});

// 首頁-課程
const courseBaseUrl = 'https://github.com/rochelwang1205/triangle/blob/main/assets/images/goods-%20(';
const courseFileExtension = ').png?raw=true';

function getImageUrl(number) {
    return `${courseBaseUrl}${number}${courseFileExtension}`;
}
function truncateTitle(title, maxLength = 12) {
    if (title.length <= maxLength) return title;
    return title.slice(0, maxLength - 1) + '...';
}

const courseTypes = [
    {
        title: "檢定英文",
        courses: [
            {
                title: truncateTitle("托福閱讀與聽力技巧精進"),
                tags: ["影音", "中階 II"],
                instructor: "陳志翔 當代英文學",
                rating: "4.8",
                reviews: "1579",
                price: "NT$1,690",
                image: getImageUrl(1)
            },
            {
                title: truncateTitle("雅思寫作技巧"),
                tags: ["影音", "中階 II"],
                instructor: "林文均 啟發英語",
                rating: "4.8",
                reviews: "1579",
                price: "NT$1,690",
                image: getImageUrl(2)
            },
            {
                title: truncateTitle("商務與職場英文能力必備"),
                tags: ["影音", "中階 I"],
                instructor: "劉鴻惟 當代英文學",
                rating: "4.8",
                reviews: "1579",
                price: "NT$1,690",
                image: getImageUrl(3)
            },
            {
                title: truncateTitle("掌握快節奏對話的技巧"),
                tags: ["影音", "高階 I"],
                instructor: "李欣喜 線上英語導師",
                rating: "4.8",
                reviews: "1579",
                price: "NT$1,690",
                image: getImageUrl(4)
            },
            {
                title: truncateTitle("考試必備單詞與定義"),
                tags: ["影音", "初階 II"],
                instructor: "劉鴻惟 啟發英語",
                rating: "4.8",
                reviews: "1579",
                price: "NT$1,690",
                image: getImageUrl(5)
            },
            {
                title: truncateTitle("口語流暢度：提升發音與自然語言模式"),
                tags: ["影音", "初階 II"],
                instructor: "陳志翔 當代英文學",
                rating: "4.8",
                reviews: "1579",
                price: "NT$1,690",
                image: getImageUrl(6)
            },

        ]
    },
    {
        title: "生活英文",
        courses: [
            {
                title: truncateTitle("日常生活英文會話"),
                tags: ["直播", "初階 II"],
                instructor: "李欣喜 線上英語導師",
                rating: "4.7",
                reviews: "1280",
                price: "NT$1,490",
                image: getImageUrl(7)
            },
            {
                title: truncateTitle("電影、娛樂、明星與流行趨勢"),
                tags: ["直播", "高階 I"],
                instructor: "陳志翔 當代英文學",
                rating: "4.7",
                reviews: "1280",
                price: "NT$1,490",
                image: getImageUrl(8)
            },
            {
                title: truncateTitle("手工藝、繪畫與創意活動"),
                tags: ["演講", "中階 I"],
                instructor: "胡丹儒 專業英語",
                rating: "4.7",
                reviews: "1280",
                price: "NT$1,490",
                image: getImageUrl(9)
            },
            {
                title: truncateTitle("與獸醫與寵物理容師的交流"),
                tags: ["說明會", "中階 I"],
                instructor: "胡丹儒 智慧英文教學",
                rating: "4.7",
                reviews: "1280",
                price: "NT$1,490",
                image: getImageUrl(10)
            },
            {
                title: truncateTitle("線上媒體溝通與趨勢"),
                tags: ["直播", "高階 II"],
                instructor: "陳志翔 線上英語導師",
                rating: "4.7",
                reviews: "1280",
                price: "NT$1,490",
                image: getImageUrl(11)
            },
            {
                title: truncateTitle("烹飪、食譜與廚房詞彙"),
                tags: ["說明會", "中階 I"],
                instructor: "李欣喜 智慧英文教學",
                rating: "4.7",
                reviews: "1280",
                price: "NT$1,490",
                image: getImageUrl(12)
            },
        ]
    }
];

function createCourseCard(course) {
    return `
        <div class="col">
            <div class="card">
                <div class="position-relative">
                    <img src="${course.image}" class="card-img-top" alt="${course.title}">
                    <div class="img-tags position-absolute d-flex justify-content-between align-items-center w-100">
                        <span class="hot-tag">熱門</span>
                        <span class="material-icons text-gray-01">bookmark_border</span>
                    </div>
                </div>
                <div class="card-body">
                    <h3 class="card-title text-gray-01">${course.title}</h3>
                    <div class="tags text-gray-03">
                        ${course.tags.map(tag => `<span>${tag}</span>`).join('')}
                    </div>
                    <p class="card-text text-gray-03">${course.instructor}</p>
                    <div class="d-flex justify-content-between">
                        <div class="d-flex align-items-center text-gray-03">
                            <span class="material-icons text-brand-01 fs-5">star</span>
                            <span class="text-gray-03 fs-5">${course.rating}(${course.reviews})</span>
                        </div>
                        <span class="fs-3 text-gray-01">${course.price}</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function createCourseSection(courseType) {
    return `
        <section class="cards">
            <div class="d-flex justify-content-between border-bottom mb-7 border-gray-05">
                <h1 class="text-gray-01">${courseType.title}</h1>
                <a href="goods.html"><span class="material-icons-outlined forward">chevron_right</span></a>
            </div>
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                ${courseType.courses.map(course => createCourseCard(course)).join('')}
            </div>
            <div class="text-center mt-4">
                <button type="button" class="btn btn-outline-brand-01 fs-3 mx-0">查看更多課程</button>
            </div>
        </section>
    `;
}

document.addEventListener('DOMContentLoaded', function() {
    const courseSectionsContainer = document.getElementById('courseSections');
    courseTypes.forEach(courseType => {
        courseSectionsContainer.innerHTML += createCourseSection(courseType);
    });
});

// 首頁-學員好評
// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 1,
//     spaceBetween: 20,
//     centeredSlides: false,
//     autoplay: {
//       delay: 2500,
//       disableOnInteraction: false,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     breakpoints: {
//         640: {
//           slidesPerView: 1,
//           spaceBetween: 20,
//         },
//         768: {
//           slidesPerView: 2,
//           spaceBetween: 30,
//         },
//         1024: {
//           slidesPerView: 3,
//           spaceBetween: 40,
//         },
//       },
//   });