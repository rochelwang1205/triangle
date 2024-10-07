import"./main-7ee41229.js";import"https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";const r="https://github.com/rochelwang1205/triangle/blob/main/assets/images/goods-%20(",a=").png?raw=true";function e(t){return`${r}${t}${a}`}function i(t,s=12){return t.length<=s?t:t.slice(0,s-1)+"..."}const n=[{title:"影音課",courses:[{title:i("托福閱讀與聽力技巧精進"),tags:["影音","中階 II"],instructor:"陳志翔 當代英文學",rating:"4.8",reviews:"1579",price:"NT$1,690",image:e(1)},{title:i("雅思寫作技巧"),tags:["影音","中階 II"],instructor:"林文均 啟發英語",rating:"4.8",reviews:"1579",price:"NT$1,690",image:e(2)},{title:i("商務與職場英文能力必備"),tags:["影音","中階 I"],instructor:"劉鴻惟 當代英文學",rating:"4.8",reviews:"1579",price:"NT$1,690",image:e(3)}]},{title:"直播課",courses:[{title:i("日常生活英文會話"),tags:["直播","初階 II"],instructor:"李欣喜 線上英語導師",rating:"4.7",reviews:"1280",price:"NT$1,490",image:e(7)},{title:i("電影、娛樂、明星與流行趨勢"),tags:["直播","高階 I"],instructor:"陳志翔 當代英文學",rating:"4.7",reviews:"1280",price:"NT$1,490",image:e(8)},{title:i("手工藝、繪畫與創意活動"),tags:["演講","中階 I"],instructor:"胡丹儒 專業英語",rating:"4.7",reviews:"1280",price:"NT$1,490",image:e(9)}]},{title:"演講",courses:[{title:i("日常生活英文會話"),tags:["直播","初階 II"],instructor:"李欣喜 線上英語導師",rating:"4.7",reviews:"1280",price:"NT$1,490",image:e(7)},{title:i("電影、娛樂、明星與流行趨勢"),tags:["直播","高階 I"],instructor:"陳志翔 當代英文學",rating:"4.7",reviews:"1280",price:"NT$1,490",image:e(8)},{title:i("手工藝、繪畫與創意活動"),tags:["演講","中階 I"],instructor:"胡丹儒 專業英語",rating:"4.7",reviews:"1280",price:"NT$1,490",image:e(9)}]},{title:"說明會",courses:[{title:i("日常生活英文會話"),tags:["直播","初階 II"],instructor:"李欣喜 線上英語導師",rating:"4.7",reviews:"1280",price:"NT$1,490",image:e(7)},{title:i("電影、娛樂、明星與流行趨勢"),tags:["直播","高階 I"],instructor:"陳志翔 當代英文學",rating:"4.7",reviews:"1280",price:"NT$1,490",image:e(8)},{title:i("手工藝、繪畫與創意活動"),tags:["演講","中階 I"],instructor:"胡丹儒 專業英語",rating:"4.7",reviews:"1280",price:"NT$1,490",image:e(9)}]}];function c(t){return`
        <div class="col">
            <div class="card">
                <div class="position-relative">
                    <img src="${t.image}" class="card-img-top" alt="${t.title}">
                    <div class="img-tags position-absolute d-flex justify-content-between align-items-center w-100">
                        <span class="hot-tag">熱門</span>
                        <span class="material-icons text-gray-01">bookmark_border</span>
                    </div>
                </div>
                <div class="card-body">
                    <h3 class="card-title text-gray-01">${t.title}</h3>
                    <div class="tags text-gray-03">
                        ${t.tags.map(s=>`<span>${s}</span>`).join("")}
                    </div>
                    <p class="card-text text-gray-03">${t.instructor}</p>
                    <div class="d-flex justify-content-between">
                        <div class="d-flex align-items-center text-gray-03">
                            <span class="material-icons text-brand-01 fs-5">star</span>
                            <span class="text-gray-03 fs-5">${t.rating}(${t.reviews})</span>
                        </div>
                        <span class="fs-3 text-gray-01">${t.price}</span>
                    </div>
                </div>
            </div>
        </div>
    `}function o(t){return`
        <section class="cards">
            <div class="d-flex justify-content-between border-bottom mb-7 border-gray-05">
                <h1 class="text-gray-01">${t.title}</h1>
                <a href="goods.html"><span class="material-icons-outlined forward">chevron_right</span></a>
            </div>
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                ${t.courses.map(s=>c(s)).join("")}
            </div>
            <div class="text-center mt-4">
                <button type="button" class="btn btn-outline-brand-01 fs-3 mx-0">查看更多課程</button>
            </div>
        </section>
    `}document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("goodsSections");n.forEach(s=>{t.innerHTML+=o(s)})});
