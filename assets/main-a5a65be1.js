import{a as l}from"./vendor-2b35cb0d.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const a={burger:document.querySelector(".js-burger"),filter:document.querySelector(".js-filter"),gallery:document.querySelector(".js-gallery"),nav_home:document.querySelector(".nav-home"),nav_favorites:document.querySelector(".nav-favorites")},o="https://your-energy.b.goit.study/api/",p={bodypart:"Body parts",muscles:"Muscles",equipment:"Equipment"};class m{constructor({filter:i="muscles",subFilter:r="",keyword:n="",page:e=1,limit:s=8}){this.filter=i,this.subFilter=r,this.keyword=n,this.page=e,this.limit=s}async getFilters(){return(await l.get(`${o}filters`,{params:{filter:p[this.filter],page:this.page,limit:this.limit}})).data}async getExercises(){return(await l.get(`${o}exercises`,{params:{[this.filter]:this.subFilter,keyword:this.keyword,page:this.page,limit:this.limit}})).data}async getExerciseById(i){return(await l.get(`${o}exercises/${i}`)).data}async getQuote(){return(await l.get(`${o}quote`)).data}}const d=new m({});function g(t){return t.map(({filter:i,name:r,imgURL:n})=>`<li data-subfilter="${r}" class="exercises-item">
      <a class="exercises-item-container" href="">
        <img class="exercises-item-image" src="${n}" alt="${r}" />
        <div class="exercises-proprties-container">
          <h4 class="exercises-item-name">${r}</h4>
          <p class="exercises-item-type">${i}</p>
        </div>
      </a>
    </li>`).join("")}function h(t){return t.map(({_id:i,bodyPart:r,name:n,target:e,rating:s,burnedCalories:c,time:f})=>`
      <li data-id="${i}">
        <a class="link-exercise-card" href="">
          <!-- Top place card -->
          <div class="cont-rating-btn-title">
            <div class="const-text-exer">
              <p class="text-card-exer">WORKOUT</p>
            </div>
            <div class="cont-card-rating">
              <p class="card-rating-exer">${s}</p>
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
        </li>`).join("")}async function v(){const t=await d.getExercises();a.gallery.innerHTML=h(t.results)}async function u(){const t=await d.getFilters();a.gallery.innerHTML=g(t.results)}function x(t){t.target.hasAttribute("data-filter")&&(d.filter=t.target.dataset.filter,u())}async function y(t){t.preventDefault(),t.target.nodeName.toLowerCase()!=="ul"&&(d.subFilter=t.target.closest("li").dataset.subfilter,v())}function b(t){}function $(){if(location.href.includes("index.html")){a.nav_home.classList.add("active-item"),a.nav_favorites.classList.remove("active-item");return}if(location.href.includes("favorites.html")){a.nav_favorites.classList.add("active-item"),a.nav_home.classList.remove("active-item");return}}a.filter.addEventListener("click",x);a.gallery.addEventListener("click",y);a.gallery.addEventListener("click",b);$();u();
//# sourceMappingURL=main-a5a65be1.js.map
