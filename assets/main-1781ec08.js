import{a as l,i as u}from"./vendor-2f7d7b6c.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(t){if(t.ep)return;t.ep=!0;const i=r(t);fetch(t.href,i)}})();const a={burger:document.querySelector(".js-burger"),filter:document.querySelector(".js-filter"),gallery:document.querySelector(".js-gallery"),nav_home:document.querySelector(".nav-home"),nav_favorites:document.querySelector(".nav-favorites")},d="https://your-energy.b.goit.study/api/",g={bodypart:"Body parts",muscles:"Muscles",equipment:"Equipment"};class m{constructor({filter:s="muscles",subFilter:r="",keyword:n="",page:t=1,limit:i=8}){this.filter=s,this.subFilter=r,this.keyword=n,this.page=t,this.limit=i}async getFilters(){return(await l.get(`${d}filters`,{params:{filter:g[this.filter],page:this.page,limit:this.limit}})).data}async getExercises(){return(await l.get(`${d}exercises`,{params:{[this.filter]:this.subFilter,keyword:this.keyword,page:this.page,limit:this.limit}})).data}async getExerciseById(s){return(await l.get(`${d}exercises/${s}`)).data}async getQuote(){return(await l.get(`${d}quote`)).data}}const o=new m({});function h(e){return e.map(({filter:s,name:r,imgURL:n})=>`<li data-subfilter="${r}" class="exercises-item">
      <a class="exercises-item-container" href="">
        <img class="exercises-item-image" src="${n}" alt="${r}" />
        <div class="exercises-proprties-container">
          <h4 class="exercises-item-name">${r}</h4>
          <p class="exercises-item-type">${s}</p>
        </div>
      </a>
    </li>`).join("")}function v(e){return e.map(({_id:s,bodyPart:r,name:n,target:t,rating:i,burnedCalories:c,time:p})=>`
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
              <p class="text-info-exer">${c}/${p}</p>
            </li>
            <li class="item-card-exer">
              <p class="text-title-item-exer">Body part:</p>
              <p class="text-info-exer">${r}</p>
            </li>
            <li class="item-card-exer">
              <p class="text-title-item-exer">Target:</p>
              <p class="text-info-exer">${t}</p>
            </li>
          </ul>
          </a>
        </li>`).join("")}async function x(){const e=await o.getExercises();a.gallery.innerHTML=v(e.results)}async function f(){const e=await o.getFilters();a.gallery.innerHTML=h(e.results)}function y(e){e.target.hasAttribute("data-filter")&&(o.filter=e.target.dataset.filter,f())}async function b(e){e.preventDefault(),e.target.closest("[data-subfilter]")&&(o.subFilter=e.target.closest("[data-subfilter]").dataset.subfilter,x())}u.settings({timeout:5e3,resetOnHover:!0,position:"bottomCenter",transitionIn:"flipInX",transitionOut:"flipOutX"});function w(e){u.show({backgroundColor:"#87D662",message:e})}async function $(e){if(e.preventDefault(),!e.target.closest("[data-id]"))return;const s=e.target.closest("[data-id]").dataset.id,r=await o.getExerciseById(s);console.log(r),w(s)}function L(){if(location.href.includes("index.html")){a.nav_home.classList.add("active-item"),a.nav_favorites.classList.remove("active-item");return}if(location.href.includes("favorites.html")){a.nav_favorites.classList.add("active-item"),a.nav_home.classList.remove("active-item");return}}a.filter.addEventListener("click",y);a.gallery.addEventListener("click",b);a.gallery.addEventListener("click",$);L();f();
//# sourceMappingURL=main-1781ec08.js.map
