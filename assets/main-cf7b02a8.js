import{a as o}from"./vendor-2b35cb0d.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerpolicy&&(i.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?i.credentials="include":e.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(e){if(e.ep)return;e.ep=!0;const i=r(e);fetch(e.href,i)}})();const u="https://your-energy.b.goit.study/api/",p={bodypart:"Body parts",muscles:"Muscles",equipment:"Equipment"};class g{constructor({filter:s="muscles",subFilter:r="",keyword:n="",page:e=1,limit:i=8}){this.filter=s,this.subFilter=r,this.keyword=n,this.page=e,this.limit=i}async getFilters(){return(await o.get(`${u}filters`,{params:{filter:p[this.filter],page:this.page,limit:this.limit}})).data}async getExercises(){return(await o.get(`${u}exercises`,{params:{[this.filter]:this.subFilter,keyword:this.keyword,page:this.page,limit:this.limit}})).data}async getExerciseById(s){return(await o.get(`${u}exercises/${s}`)).data}async getQuote(){return(await o.get(`${u}quote`)).data}}const l=new g({}),a={burger:document.querySelector(".js-burger"),filter:document.querySelector(".js-filter"),gallery:document.querySelector(".js-gallery"),nav_home:document.querySelector(".nav-home"),nav_favorites:document.querySelector(".nav-favorites")};function d(t){return t.map(({filter:s,name:r,imgURL:n})=>`<li data-subfilter="${r}" class="exercises-item">
      <a class="exercises-item-container" href="">
        <img class="exercises-item-image" src="${n}" alt="${r}" />
        <div class="exercises-proprties-container">
          <h4 class="exercises-item-name">${r}</h4>
          <p class="exercises-item-type">${s}</p>
        </div>
      </a>
    </li>`).join("")}function m(t){return t.map(({_id:s,bodyPart:r,name:n,target:e,rating:i,burnedCalories:c,time:f})=>`
      <li data-id="${s}">
        <a class="link-exercise-card" href="">
          <!-- Top place card -->
          <div class="cont-rating-btn-title">
            <div class="const-text-exer">
              <p class="text-card-exer">WORKOUT</p>
            </div>
            <div class="cont-card-rating">
              <p class="card-rating-exer">${i}</p>
              <svg class="icon-card-exer" width="18" height="18">
                <use href="../img/icons.svg#icon-star"></use>
              </svg>
            </div>
            <div class="block-btn-icon-exer">
              <button class="btn-card-exer">Start</button>
              <svg class="icon-card-btn" width="16" height="16">
                <use href="../img/icons.svg#icon-arrow"></use>
              </svg>
            </div>
          </div>
          <!-- Middle place card -->
          <div class="cont-icon-name-text">
            <svg class="icon-people-card" width="24" height="24">
              <use href="../img/icons.svg#icon-running-stick-figure"></use>
            </svg>
            <p>${n}</p>
          </div>
          <!-- End place card -->
          <ul class="list-info-exer">
            <li class="item-card-exer">
              <p class="text-title-item-exer">Burned calories:</p>
              <p class="text-info-exer">${c}/${f}</p>
            </li>
            <li class="item-card-exer">
              <p class="text-title-item-exer">Body part:</p>
              <p class="text-info-exer">${r}</p>
            </li>
            <li class="item-card-exer">
              <p class="text-title-item-exer">Target:</p>
              <p class="text-info-exer">${e}</p>
            </li>
          </ul>
          </a>
        </li>`).join("")}async function h(){const t=await l.getFilters();a.gallery.innerHTML=d(t.results)}function v(t){t.target.hasAttribute("data-filter")&&(l.filter=t.target.dataset.filter,h())}async function x(t){if(t.preventDefault(),t.target.nodeName.toLowerCase()==="ul")return;l.subFilter=t.target.closest("li").dataset.subfilter;const s=await l.getExercises();a.gallery.innerHTML=m(s.results)}function y(t){}function b(){if(location.href.includes("index.html")){a.nav_home.classList.add("active-item"),a.nav_favorites.classList.remove("active-item");return}if(location.href.includes("favorites.html")){a.nav_favorites.classList.add("active-item"),a.nav_home.classList.remove("active-item");return}}a.filter.addEventListener("click",v);a.gallery.addEventListener("click",x);a.gallery.addEventListener("click",y);async function w(){const t=await l.getFilters();a.gallery.innerHTML=d(t.results)}b();w();
//# sourceMappingURL=main-cf7b02a8.js.map
