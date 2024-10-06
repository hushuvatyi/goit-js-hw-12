import{i as c,S as u}from"./assets/vendor-5ObWk2rO.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function l(t,a){c.info({message:`${t}`,position:"topRight",backgroundColor:`${a}`})}const e={form:document.querySelector(".search-form"),gallery:document.querySelector(".gallery"),div:document.createElement("div"),API_KEY:"46342237-7f01d30a27b9cd655db8e01c6",BASE_URL:"https://pixabay.com/api/?",options:{method:"GET"},color:{blue:"#abd4f8",red:"#e97782"},message:{info:"Please enter a value in the search field!",warning:"Sorry, there are no images matching your search query. Please try again!",error:"Sorry, there are no connection to the server. Please try again later! ",exception:"Exception: We have some issue with connection. Please try again later! "}};async function g(t){try{const a=new URLSearchParams({key:e.API_KEY,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}),n=await fetch(e.BASE_URL+a,e.options).then();if(!n.ok){l(e.message.error,e.color.orange);return}return await n.json()}catch(a){l(`${e.message.exception} ERROR:  ${a}`,e.color.orange)}}const d=new u(".gallery a",{captionsData:"alt",captionDelay:250});function m(t,a){a.innerHTML=p(t),d.refresh()}function p(t){return t.hits.map(({webformatURL:a,largeImageURL:n,tags:i,likes:r,views:o,comments:s,downloads:f})=>`
				<li class="gallery-item hvr-grow">
					<a class="gallery-link" href="${n}">
						<figure class="gallery-figure ">
							<img class="gallery-image" src="${a}" alt="${i}" loading="lazy">
							<figcaption class="gallery-figcaption">
								<ul class="img-content-wrapper">
									<li>Likes<span>${r}</span></li>
									<li>Views<span>${o}</span></li>
									<li>Comments<span>${s}</span></li>
									<li>Downloads<span>${f}</span></li>
								</ul>
							</figcaption>
						</figure>
					</a>
				</li>
		`).join("")}async function y(t){t.preventDefault(),c.destroy(),e.gallery.innerHTML="",h();const a=new FormData(t.target),{search:n}=Object.fromEntries(a.entries());if(!n.trim()){l(e.message.info,e.color.blue),e.gallery.innerHTML="";return}try{const i=await g(n.trim());L(i)&&m(i,e.gallery)}catch(i){l(e.message.exception+i,e.color.red),e.gallery.innerHTML=""}t.target.reset()}function h(){e.div.classList.add("loader"),e.gallery.append(e.div)}function L(t){return t?t&&t.totalHits===0?(l(message.warning,color.red),e.gallery.innerHTML="",!1):!0:(e.gallery.innerHTML="",!1)}e.form.addEventListener("submit",y);
//# sourceMappingURL=index.js.map
