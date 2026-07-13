var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=c(o(((e,t)=>{(function(n,r){typeof e==`object`&&typeof t==`object`?t.exports=r():typeof define==`function`&&define.amd?define(`Navigo`,[],r):typeof e==`object`?e.Navigo=r():n.Navigo=r()})(typeof self<`u`?self:e,(function(){return function(){var e={407:function(e,t,n){n.d(t,{default:function(){return P}});var r=/([:*])(\w+)/g,i=/\*/g,a=/\/\?/g;function o(e){return e===void 0&&(e=`/`),h()?location.pathname+location.search+location.hash:e}function s(e){return e.replace(/\/+$/,``).replace(/^\/+/,``)}function c(e){return typeof e==`string`}function l(e){return e&&e.indexOf(`#`)>=0&&e.split(`#`).pop()||``}function u(e){var t=s(e).split(/\?(.*)?$/);return[s(t[0]),t.slice(1).join(``)]}function d(e){for(var t={},n=e.split(`&`),r=0;r<n.length;r++){var i=n[r].split(`=`);if(i[0]!==``){var a=decodeURIComponent(i[0]);t[a]?(Array.isArray(t[a])||(t[a]=[t[a]]),t[a].push(decodeURIComponent(i[1]||``))):t[a]=decodeURIComponent(i[1]||``)}}return t}function f(e,t){var n,o=u(s(e.currentLocationPath)),f=o[0],p=o[1],m=p===``?null:d(p),h=[];if(c(t.path)){if(n=`(?:/^|^)`+s(t.path).replace(r,(function(e,t,n){return h.push(n),`([^/]+)`})).replace(i,`?(?:.*)`).replace(a,`/?([^/]+|)`)+`$`,s(t.path)===``&&s(f)===``)return{url:f,queryString:p,hashString:l(e.to),route:t,data:null,params:m}}else n=t.path;var g=new RegExp(n,``),_=f.match(g);if(_){var v=c(t.path)?function(e,t){return t.length===0?null:e?e.slice(1,e.length).reduce((function(e,n,r){return e===null&&(e={}),e[t[r]]=decodeURIComponent(n),e}),null):null}(_,h):_.groups?_.groups:_.slice(1);return{url:s(f.replace(RegExp(`^`+e.instance.root),``)),queryString:p,hashString:l(e.to),route:t,data:v,params:m}}return!1}function p(){return!(typeof window>`u`||!window.history||!window.history.pushState)}function m(e,t){return e[t]===void 0||!0===e[t]}function h(){return typeof window<`u`}function g(e,t){return e===void 0&&(e=[]),t===void 0&&(t={}),e.filter((function(e){return e})).forEach((function(e){[`before`,`after`,`already`,`leave`].forEach((function(n){e[n]&&(t[n]||(t[n]=[]),t[n].push(e[n]))}))})),t}function _(e,t,n){var r=t||{},i=0;(function t(){e[i]?Array.isArray(e[i])?(e.splice.apply(e,[i,1].concat(e[i][0](r)?e[i][1]:e[i][2])),t()):e[i](r,(function(e){e===void 0||!0===e?(i+=1,t()):n&&n(r)})):n&&n(r)})()}function v(e,t){e.currentLocationPath===void 0&&(e.currentLocationPath=e.to=o(e.instance.root)),e.currentLocationPath=e.instance._checkForAHash(e.currentLocationPath),t()}function y(e,t){for(var n=0;n<e.instance.routes.length;n++){var r=f(e,e.instance.routes[n]);if(r&&(e.matches||=[],e.matches.push(r),e.resolveOptions.strategy===`ONE`))return void t()}t()}function b(e,t){e.navigateOptions&&(e.navigateOptions.shouldResolve!==void 0&&console.warn(`"shouldResolve" is deprecated. Please check the documentation.`),e.navigateOptions.silent!==void 0&&console.warn(`"silent" is deprecated. Please check the documentation.`)),t()}function x(e,t){!0===e.navigateOptions.force?(e.instance._setCurrent([e.instance._pathToMatchObject(e.to)]),t(!1)):t()}_.if=function(e,t,n){return Array.isArray(t)||(t=[t]),Array.isArray(n)||(n=[n]),[e,t,n]};var S=h(),C=p();function w(e,t){if(m(e.navigateOptions,`updateBrowserURL`)){var n=(`/`+e.to).replace(/\/\//g,`/`),r=S&&e.resolveOptions&&!0===e.resolveOptions.hash;C?(history[e.navigateOptions.historyAPIMethod||`pushState`](e.navigateOptions.stateObj||{},e.navigateOptions.title||``,r?`#`+n:n),location&&location.hash&&(e.instance.__freezeListening=!0,setTimeout((function(){if(!r){var t=location.hash;location.hash=``,location.hash=t}e.instance.__freezeListening=!1}),1))):S&&(window.location.href=e.to)}t()}function T(e,t){var n=e.instance;n.lastResolved()?_(n.lastResolved().map((function(t){return function(n,r){if(t.route.hooks&&t.route.hooks.leave){var i=!1,a=e.instance.matchLocation(t.route.path,e.currentLocationPath,!1);i=t.route.path===`*`?!(e.matches&&e.matches.find((function(e){return t.route.path===e.route.path}))):!a,m(e.navigateOptions,`callHooks`)&&i?_(t.route.hooks.leave.map((function(t){return function(n,r){return t((function(t){!1===t?e.instance.__markAsClean(e):r()}),e.matches&&e.matches.length>0?e.matches.length===1?e.matches[0]:e.matches:void 0)}})).concat([function(){return r()}])):r()}else r()}})),{},(function(){return t()})):t()}function E(e,t){m(e.navigateOptions,`updateState`)&&e.instance._setCurrent(e.matches),t()}var D=[function(e,t){var n=e.instance.lastResolved();if(n&&n[0]&&n[0].route===e.match.route&&n[0].url===e.match.url&&n[0].queryString===e.match.queryString)return n.forEach((function(t){t.route.hooks&&t.route.hooks.already&&m(e.navigateOptions,`callHooks`)&&t.route.hooks.already.forEach((function(t){return t(e.match)}))})),void t(!1);t()},function(e,t){e.match.route.hooks&&e.match.route.hooks.before&&m(e.navigateOptions,`callHooks`)?_(e.match.route.hooks.before.map((function(t){return function(n,r){return t((function(t){!1===t?e.instance.__markAsClean(e):r()}),e.match)}})).concat([function(){return t()}])):t()},function(e,t){m(e.navigateOptions,`callHandler`)&&e.match.route.handler(e.match),e.instance.updatePageLinks(),t()},function(e,t){e.match.route.hooks&&e.match.route.hooks.after&&m(e.navigateOptions,`callHooks`)&&e.match.route.hooks.after.forEach((function(t){return t(e.match)})),t()}],O=[T,function(e,t){var n=e.instance._notFoundRoute;if(n){e.notFoundHandled=!0;var r=u(e.currentLocationPath),i=r[0],a=r[1],o=l(e.to);n.path=s(i);var c={url:n.path,queryString:a,hashString:o,data:null,route:n,params:a===``?null:d(a)};e.matches=[c],e.match=c}t()},_.if((function(e){return e.notFoundHandled}),D.concat([E]),[function(e,t){e.resolveOptions&&!1!==e.resolveOptions.noMatchWarning&&e.resolveOptions.noMatchWarning!==void 0||console.warn(`Navigo: "`+e.currentLocationPath+`" didn't match any of the registered routes.`),t()},function(e,t){e.instance._setCurrent(null),t()}])];function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function A(e,t){var n=0;T(e,(function r(){n===e.matches.length?E(e,t):_(D,k({},e,{match:e.matches[n]}),(function(){n+=1,r()}))}))}function j(e){e.instance.__markAsClean(e)}function M(){return(M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var N=`[data-navigo]`;function P(e,t){var n,r=t||{strategy:`ONE`,hash:!1,noMatchWarning:!1,linksSelector:N},i=this,a=`/`,m=null,S=[],C=!1,T=p(),E=h();function D(e){return e.indexOf(`#`)>=0&&(e=!0===r.hash?e.split(`#`)[1]||`/`:e.split(`#`)[0]),e}function k(e){return s(a+`/`+s(e))}function P(e,t,n,r){return e=c(e)?k(e):e,{name:r||s(String(e)),path:e,handler:t,hooks:g(n)}}function F(e,t){if(!i.__dirty){i.__dirty=!0,e=e?s(a)+`/`+s(e):void 0;var n={instance:i,to:e,currentLocationPath:e,navigateOptions:{},resolveOptions:M({},r,t)};return _([v,y,_.if((function(e){var t=e.matches;return t&&t.length>0}),A,O)],n,j),!!n.matches&&n.matches}i.__waiting.push((function(){return i.resolve(e,t)}))}function I(e,t){if(i.__dirty)i.__waiting.push((function(){return i.navigate(e,t)}));else{i.__dirty=!0,e=s(a)+`/`+s(e);var n={instance:i,to:e,navigateOptions:t||{},resolveOptions:t&&t.resolveOptions?t.resolveOptions:r,currentLocationPath:D(e)};_([b,x,y,_.if((function(e){var t=e.matches;return t&&t.length>0}),A,O),w,j],n,j)}}function ee(){if(E)return(E?[].slice.call(document.querySelectorAll(r.linksSelector||N)):[]).forEach((function(e){e.getAttribute(`data-navigo`)!==`false`&&e.getAttribute(`target`)!==`_blank`?e.hasListenerAttached||(e.hasListenerAttached=!0,e.navigoHandler=function(t){if((t.ctrlKey||t.metaKey)&&t.target.tagName.toLowerCase()===`a`)return!1;var n=e.getAttribute(`href`);if(n==null)return!1;if(n.match(/^(http|https)/)&&typeof URL<`u`)try{var r=new URL(n);n=r.pathname+r.search}catch{}var a=function(e){if(!e)return{};var t,n=e.split(`,`),r={};return n.forEach((function(e){var n=e.split(`:`).map((function(e){return e.replace(/(^ +| +$)/g,``)}));switch(n[0]){case`historyAPIMethod`:r.historyAPIMethod=n[1];break;case`resolveOptionsStrategy`:t||={},t.strategy=n[1];break;case`resolveOptionsHash`:t||={},t.hash=n[1]===`true`;break;case`updateBrowserURL`:case`callHandler`:case`updateState`:case`force`:r[n[0]]=n[1]===`true`}})),t&&(r.resolveOptions=t),r}(e.getAttribute(`data-navigo-options`));C||(t.preventDefault(),t.stopPropagation(),i.navigate(s(n),a))},e.addEventListener(`click`,e.navigoHandler)):e.hasListenerAttached&&e.removeEventListener(`click`,e.navigoHandler)})),i}function L(e,t,n){var r=S.find((function(t){return t.name===e})),i=null;if(r){if(i=r.path,t)for(var o in t)i=i.replace(`:`+o,t[o]);i=i.match(/^\//)?i:`/`+i}return i&&n&&!n.includeRoot&&(i=i.replace(RegExp(`^/`+a),``)),i}function R(e){var t=u(s(e)),r=t[0],i=t[1],a=i===``?null:d(i);return{url:r,queryString:i,hashString:l(e),route:P(r,(function(){}),[n],r),data:null,params:a}}function z(e,t,n){return typeof t==`string`&&(t=B(t)),t?(t.hooks[e]||(t.hooks[e]=[]),t.hooks[e].push(n),function(){t.hooks[e]=t.hooks[e].filter((function(e){return e!==n}))}):(console.warn(`Route doesn't exists: `+t),function(){})}function B(e){return typeof e==`string`?S.find((function(t){return t.name===k(e)})):S.find((function(t){return t.handler===e}))}e?a=s(e):console.warn(`Navigo requires a root path in its constructor. If not provided will use "/" as default.`),this.root=a,this.routes=S,this.destroyed=C,this.current=m,this.__freezeListening=!1,this.__waiting=[],this.__dirty=!1,this.__markAsClean=function(e){e.instance.__dirty=!1,e.instance.__waiting.length>0&&e.instance.__waiting.shift()()},this.on=function(e,t,r){var i=this;return typeof e!=`object`||e instanceof RegExp?(typeof e==`function`&&(r=t,t=e,e=a),S.push(P(e,t,[n,r])),this):(Object.keys(e).forEach((function(t){if(typeof e[t]==`function`)i.on(t,e[t]);else{var r=e[t],a=r.uses,o=r.as,s=r.hooks;S.push(P(t,a,[n,s],o))}})),this)},this.off=function(e){return this.routes=S=S.filter((function(t){return c(e)?s(t.path)!==s(e):typeof e==`function`?e!==t.handler:String(t.path)!==String(e)})),this},this.resolve=F,this.navigate=I,this.navigateByName=function(e,t,n){var r=L(e,t);return r!==null&&(I(r.replace(RegExp(`^/?`+a),``),n),!0)},this.destroy=function(){this.routes=S=[],T&&window.removeEventListener(`popstate`,this.__popstateListener),this.destroyed=C=!0},this.notFound=function(e,t){return i._notFoundRoute=P(`*`,e,[n,t],`__NOT_FOUND__`),this},this.updatePageLinks=ee,this.link=function(e){return`/`+a+`/`+s(e)},this.hooks=function(e){return n=e,this},this.extractGETParameters=function(e){return u(D(e))},this.lastResolved=function(){return m},this.generate=L,this.getLinkPath=function(e){return e.getAttribute(`href`)},this.match=function(e){var t={instance:i,currentLocationPath:e,to:e,navigateOptions:{},resolveOptions:r};return y(t,(function(){})),!!t.matches&&t.matches},this.matchLocation=function(e,t,n){t===void 0||n!==void 0&&!n||(t=k(t));var r={instance:i,to:t,currentLocationPath:t};return v(r,(function(){})),typeof e==`string`&&(e=n===void 0||n?k(e):e),f(r,{name:String(e),path:e,handler:function(){},hooks:{}})||!1},this.getCurrentLocation=function(){return R(s(o(a)).replace(RegExp(`^`+a),``))},this.addBeforeHook=z.bind(this,`before`),this.addAfterHook=z.bind(this,`after`),this.addAlreadyHook=z.bind(this,`already`),this.addLeaveHook=z.bind(this,`leave`),this.getRoute=B,this._pathToMatchObject=R,this._clean=s,this._checkForAHash=D,this._setCurrent=function(e){return m=i.current=e},function(){T&&(this.__popstateListener=function(){i.__freezeListening||F()},window.addEventListener(`popstate`,this.__popstateListener))}.call(this),ee.call(this)}}},t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}return n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n(407)}().default}))}))(),1),u=`
<header class="absolute top-0 left-0 z-30 w-full">

  <div class="mx-auto flex max-w-7xl items-center justify-between px-8 py-8">

    <div class="text-3xl font-light tracking-[0.35em] text-white">
      
    </div>

    <nav class="hidden gap-10 text-lg text-white md:flex">
      <a href="#about">Sobre</a>
      <a href="#album">Album</a>
      <a href="#letras">Faixas</a>
    </nav>

  </div>

</header>
`,d=`
<header class="sticky top-0 z-30 w-full border-b border-zinc-200 bg-white">

  <div class="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">

    <a
      href="/"
      data-navigo
      class="text-2xl font-light tracking-[0.35em] text-zinc-900">

      A.G.M.

    </a>

    <nav class="hidden gap-10 text-lg text-zinc-900 md:flex">

      <a
        href="/"
        data-navigo
        class="transition hover:text-zinc-500">

        Inicio

      </a>

      <a
        href="/album1"
        data-navigo
        class="transition hover:text-zinc-500">

        Letras

      </a>

    </nav>

  </div>

</header>
`,f=`
<section class="relative h-screen overflow-hidden">

  <!-- Slider -->
  <div class="swiper hero-swiper h-full">

    <div class="swiper-wrapper">

      <!-- Slide 1 -->
      <div class="swiper-slide relative">

       <img
          src="/assets/banda8-zvRCC8t_.png"
          alt="Paulo na prisão"
          class="absolute inset-0 h-full w-full object-cover"
        />

        <div class="absolute inset-0 bg-black/60"></div>

      </div>

      <!-- Slide 2 -->
      <div class="swiper-slide relative">

        <img
           src="/assets/oficialcover-averdadeaindachama-2-BUzMTltQ.png"
          alt="Projeto Premium"
          class="absolute inset-0 h-full w-full object-cover"
        />

        <div class="absolute inset-0 bg-black/60"></div>

      </div>

      <!-- Slide 4 -->
      <div class="swiper-slide relative">

         <img
           src="/assets/guerra-DYWf8Jnh.png"
          alt="Projeto Premium"
          class="absolute inset-0 h-full w-full object-cover"
        />

        <div class="absolute inset-0 bg-black/60"></div>
      </div>

      <!-- Slide 5 -->
      <div class="swiper-slide relative">

         <img
           src="/assets/multidao-DVvcCCnX.png"
          alt="Projeto Premium"
          class="absolute inset-0 h-full w-full object-cover"
        />

        <div class="absolute inset-0 bg-black/60"></div>
      </div>

    </div>

    <div class="swiper-pagination"></div>

    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

  </div>

  <!-- Conteúdo Hero -->
  <div class="absolute inset-0 z-20 flex items-center">

    <div class="mx-auto w-full max-w-7xl px-8 lg:px-12">

      <div class="max-w-3xl">

      <h1
        class="mt-8 text-6xl md:text-8xl leading-none uppercase tracking-[0.12em] text-white font-bebas">

        A GRANDE MULTIDÃO

      </h1>

        <p
          class="mt-8 max-w-xl text-lg leading-relaxed text-zinc-300">

          “Depois disso vi uma grande multidão, que ninguém era capaz de contar.”
          — Apocalipse 7:9

        </p>

      

      </div>

    </div>

  </div>

</section>
`,p=`
<section id="album" class="bg-white py-32">

  <div class="mx-auto max-w-7xl px-8">

    <!-- Header -->

    <div class="mx-auto max-w-3xl text-center">

      <span
        class="text-xs font-medium uppercase tracking-[0.4em] text-stone-500">

        O ÁLBUM

      </span>

      <h2
        class="mt-6 text-5xl font-light tracking-tight text-zinc-900">

        A Verdade Ainda Chama

      </h2>

      <p
        class="mt-6 text-lg leading-8 text-zinc-500">

        Um álbum conceitual de rock cristão que transforma
        profecias bíblicas, conflitos humanos e a esperança
        do Reino de Deus em uma experiência musical profunda.

      </p>

    </div>

    <!-- Grid -->

    <div class="mt-24 grid gap-12 md:grid-cols-2 lg:grid-cols-3">

      <!-- Feature -->

      <article class="text-center">

        <div
          class="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-stone-100">

          <span class="text-2xl">✦</span>

        </div>

        <h3
          class="mt-8 text-xl font-medium text-zinc-900">

          Inspirado na Bíblia

        </h3>

        <p
          class="mt-4 leading-7 text-zinc-600">

          Cada canção aborda temas bíblicos,
          profecias, fé, esperança e o propósito
          de Deus para a humanidade.

        </p>

      </article>

      <!-- Feature -->

      <article class="text-center">

        <div
          class="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">

          <span class="text-2xl">◇</span>

        </div>

        <h3
          class="mt-8 text-xl font-medium text-zinc-900">

          Rock com Propósito

        </h3>

        <p
          class="mt-4 leading-7 text-zinc-600">

          Influências do rock brasileiro melódico
          e progressivo unidas a letras intensas
          e emocionalmente marcantes.

        </p>

      </article>

      <!-- Feature -->

      <article class="text-center">

        <div
          class="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-violet-100">

          <span class="text-2xl">⬢</span>

        </div>

        <h3
          class="mt-8 text-xl font-medium text-zinc-900">

          Mensagem de Esperança

        </h3>

        <p
          class="mt-4 leading-7 text-zinc-600">

          Em meio às crises do mundo atual,
          as músicas apontam para a esperança
          oferecida pelo Reino de Deus.

        </p>

      </article>

    </div>

    <!-- Destaque -->

    <div
      class="mt-24 overflow-hidden rounded-[2rem] bg-stone-50">

      <div class="grid lg:grid-cols-2">

        <div class="p-12 lg:p-16">

          <span
            class="text-xs uppercase tracking-[0.3em] text-stone-500">

            A GRANDE MULTIDÃO

          </span>

          <h3
            class="mt-6 text-4xl font-light text-zinc-900">

            Em um mundo cheio de vozes,
            a verdade continua chamando.

          </h3>

          <p
            class="mt-8 text-lg leading-8 text-zinc-600">

            Idealizado por Lameck S. Fernandes,
            Adriano Lima e Rodrigo Alves, o álbum
            conduz o ouvinte por uma jornada de
            reflexão sobre fé, discernimento,
            perseverança e esperança. Mais do que
            música, é um convite para olhar além
            das aparências e redescobrir as
            promessas de Deus.

          </p>

          <a
            href="#faixas"
            class="mt-10 inline-flex rounded-full bg-zinc-900 px-8 py-4 text-white transition hover:bg-zinc-700">

            Letras do álbum

          </a>

        </div>

        <div class="overflow-hidden">

          <img
            src="/assets/banda7-CR6zbOPq.png"
            class="h-full w-full object-cover transition duration-1000 hover:scale-105"
            alt="Capa do álbum A Verdade Ainda Chama"
          />

        </div>

      </div>

    </div>

  </div>

</section>
`,m=`

<footer class="bg-stone-50">

  <div class="mx-auto max-w-7xl px-8 py-32">

    <div class="mx-auto max-w-4xl text-center">

      <span
        class="text-sm font-medium uppercase tracking-[0.25em] text-stone-500">

        A Grande Multidao

      </span>

      <h2
        class="mt-6 text-5xl font-light tracking-tight text-zinc-900 md:text-6xl">

        Em um mundo cheio de vozes,
        a verdade continua chamando.

      </h2>

      <p
        class="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-600">

        Conheca o album "A Verdade Ainda Chama" e embarque
        em uma jornada musical inspirada na fe, na esperanca
        e nas promessas registradas nas Escrituras.

      </p>

      <a
        href="#letras"
        class="mt-10 inline-flex rounded-full bg-zinc-900 px-8 py-4 text-white transition duration-300 hover:bg-zinc-700">

        Ouvir o album

      </a>

    </div>

  </div>

  <div class="border-t border-zinc-200"></div>

  <div class="mx-auto max-w-7xl px-8 py-20">

    <div
      class="grid gap-16 md:grid-cols-[1.8fr_1fr_1fr_1fr_1fr]">

      <div>

        <h3
          class="text-3xl font-light tracking-[0.3em] text-zinc-900">

          A.G.M.

        </h3>

        <p
          class="mt-6 max-w-xs leading-7 text-zinc-500">

          Rock cristao com mensagens inspiradas
          na Biblia, esperanca e no Reino de Deus.

        </p>

      </div>

      <div>

        <h4
          class="mb-6 text-sm font-medium uppercase tracking-[0.15em] text-zinc-900">

          Banda

        </h4>

        <ul class="space-y-4 text-zinc-500">

          <li>
            <a class="transition hover:text-zinc-900" href="#about">
              Sobre
            </a>
          </li>

          <li>
            <a class="transition hover:text-zinc-900" href="#album">
              O Album
            </a>
          </li>

          <li>
            <a class="transition hover:text-zinc-900" href="#letras">
              Faixas
            </a>
          </li>

        </ul>

      </div>

      <div>

        <h4
          class="mb-6 text-sm font-medium uppercase tracking-[0.15em] text-zinc-900">

          Temas

        </h4>

        <ul class="space-y-4 text-zinc-500">

          <li>Profecias Biblicas</li>
          <li>Fe e Perseveranca</li>
          <li>Reino de Deus</li>
          <li>Esperanca</li>

        </ul>

      </div>

      <div>

        <h4
          class="mb-6 text-sm font-medium uppercase tracking-[0.15em] text-zinc-900">

          Projeto

        </h4>

        <ul class="space-y-4 text-zinc-500">

          <li>Lameck S. Fernandes</li>
          <li>Adriano Lima</li>
          <li>Rodrigo Alves</li>
          <li>A Grande Multidao</li>

        </ul>

      </div>

      <div>

        <h4
          class="mb-6 text-sm font-medium uppercase tracking-[0.15em] text-zinc-900">

          Conecte-se

        </h4>

        <ul class="space-y-4 text-zinc-500">

          <li>Spotify</li>

        </ul>

      </div>

    </div>

  </div>

  <div class="border-t border-zinc-200">

    <div
      class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-8 py-8 text-sm text-zinc-500 md:flex-row">

      <p>
        © 2026 A Grande Multidao. Todos os direitos reservados.
      </p>

      <div class="flex items-center gap-6">

       
      </div>

    </div>

  </div>

</footer>
`,h=`/assets/oficialcover-averdadeaindachama-Ch6vfrLw.jpg`,g=`
<section id="about" class="relative overflow-hidden bg-white py-32">

  <div
    class="absolute -left-40 top-20 h-96 w-96 rounded-full bg-stone-100 blur-3xl">
  </div>

  <div
    class="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-stone-100 blur-3xl">
  </div>

  <div class="relative mx-auto max-w-7xl px-8">

    <div class="grid gap-20 lg:grid-cols-2 lg:items-center">

      <div>

        <span
          class="text-sm font-semibold uppercase tracking-[0.35em] text-stone-500">

          Projeto Gospel: A Grande Multidao

        </span>

        <h2
          class="mt-6 text-5xl font-light leading-tight text-zinc-900 md:text-6xl">

          A Verdade Ainda
          Chama

        </h2>

        <p
          class="mt-8 text-lg leading-9 text-zinc-600">

          Um álbum conceitual de rock gospel que transforma profecias, 
          conflitos humanos, crises de fé e esperança bíblica em canções intensas e profundamente humanas. 

        </p>

        <p
          class="mt-6 text-lg leading-9 text-zinc-600">

          Inspirado pelas Escrituras e pela perspectiva das Testemunhas de Jeová, 
          o álbum percorre temas como a busca pela verdade, 
          os perigos do engano religioso, a perseguição aos que permanecem fiéis, 
          o sofrimento que marca o mundo atual e a esperança oferecida pelo Reino de Deus.

        </p>

        <div class="mt-12 flex items-center gap-8">

          <div>

            <div class="text-4xl font-light text-zinc-900">
              1º
            </div>

            <div class="text-sm uppercase tracking-[0.2em] text-zinc-500">
              Álbum
            </div>

          </div>

        </div>

      </div>

      <div class="relative">

        <div
          class="
            absolute
            -left-8
            -top-8
            h-full
            w-full
            rounded-[2rem]
            border
            border-stone-200
          ">
        </div>

        <div
          class="
            group
            relative
            overflow-hidden
            rounded-[2rem]
            shadow-[0_40px_120px_rgba(0,0,0,.12)]
          ">

          <img
            src="${h}"
            alt="Projeto em pedra natural"

            class="
              h-[650px]
              w-full
              object-cover

              transition
              duration-[1500ms]

              group-hover:scale-105
            "
          />

          <div
            class="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/40
              via-transparent
              to-transparent
            ">
          </div>

          <div
            class="
              absolute
              bottom-8
              left-8

              rounded-2xl

              bg-white/90
              px-6
              py-5

              backdrop-blur

              shadow-lg
            ">

            <div
              class="text-xs uppercase tracking-[0.25em] text-stone-500">

              Destaque

            </div>

            <div
              class="mt-2 text-lg font-medium text-zinc-900">

              Letras introspectivas

            </div>

          </div>

        </div>

       

      </div>

    </div>

  </div>

</section>
`,_=`https://open.spotify.com/album/2khPW0DgXHc5NcKg3uPZKl`;function v(e){let t=e.trim(),n=t.match(/open\.spotify\.com\/(track|album|playlist|artist|episode|show)\/([A-Za-z0-9]+)/);if(n?.[1]&&n?.[2])return{type:n[1],id:n[2]};let r=t.match(/spotify:(track|album|playlist|artist|episode|show):([A-Za-z0-9]+)/);return r?.[1]&&r?.[2]?{type:r[1],id:r[2]}:null}var y=v(_),b=y?`https://open.spotify.com/embed/${y.type}/${y.id}?utm_source=generator&theme=0`:``,x=`
<section id="spotify" class="bg-white py-32">
  <div class="mx-auto max-w-7xl px-8">
    <div class="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
      <div class="rounded-[2rem] border border-stone-200 bg-stone-50 p-4 shadow-[0_40px_120px_rgba(0,0,0,.08)] md:p-6">
        ${b?`
        <iframe
          style="border-radius: 24px"
          src="${b}"
          class="h-[352px] w-full"
          title="Player do Spotify"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
        `:`
        <div class="flex h-[352px] items-center justify-center rounded-[1.5rem] bg-zinc-950 px-8 text-center text-zinc-200">
          Link do Spotify invalido.
        </div>
        `}
      </div>

      <div>
        <span class="text-sm font-semibold uppercase tracking-[0.35em] text-stone-500">
          Spotify
        </span>

        <h2 class="mt-6 text-5xl font-light leading-tight text-zinc-900 md:text-6xl">
          Lancamento do album A Verdade Ainda Chama
        </h2>

        <p class="mt-8 max-w-xl text-lg leading-9 text-zinc-600">
          Acompanhe A Verdade Ainda Chama sem interrupcoes. O player do Spotify
          esta integrado a pagina para que voce possa ouvir cada cancao enquanto
          conhece a historia, as mensagens e as inspiracoes por tras do album.
        </p>
      </div>
    </div>
  </div>
</section>
`,S=`https://www.youtube.com/watch?v=b9QHotS4408`;function C(e){for(let t of[/(?:youtube\.com\/watch\?v=)([^&#]+)/,/(?:youtube\.com\/embed\/)([^&#?/]+)/,/(?:youtu\.be\/)([^&#?/]+)/,/(?:youtube\.com\/shorts\/)([^&#?/]+)/]){let n=e.match(t);if(n?.[1])return n[1]}return``}var w=C(S),T=w?`https://img.youtube.com/vi/${w}/maxresdefault.jpg`:``,E=w?`https://www.youtube.com/embed/${w}?autoplay=1&rel=0`:``,D=`
<section id="video" class="bg-stone-50 py-32">
  <div class="mx-auto max-w-7xl px-8">
    <div class="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
      <div>
        <span class="text-sm font-semibold uppercase tracking-[0.35em] text-stone-500">
          Video em destaque
        </span>

        <h2 class="mt-6 text-5xl font-light leading-tight text-zinc-900 md:text-6xl">
          Assista ao universo de
          A Verdade Ainda Chama
        </h2>

        <p class="mt-8 max-w-xl text-lg leading-9 text-zinc-600">
          Esta é uma amostra do vídeo clip da música "Além Do Ódio".
        </p>
      </div>

      <div class="relative overflow-hidden rounded-[2rem] bg-zinc-950 shadow-[0_40px_120px_rgba(0,0,0,.18)]">
        ${w?`
        <button
          type="button"
          class="js-youtube-video group relative block aspect-video w-full text-left"
          data-embed-url="${E}"
          data-video-title="Video em destaque de A Verdade Ainda Chama"
          aria-label="Reproduzir video do YouTube">

          <img
            src="${T}"
            alt="Thumbnail do video em destaque"
            class="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />

          <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

          <div class="absolute inset-0 flex items-center justify-center">
            <span class="flex h-20 w-20 items-center justify-center rounded-full bg-white text-zinc-900 shadow-2xl transition duration-300 group-hover:scale-110">
              <span class="ml-1 text-2xl">&#9654;</span>
            </span>
          </div>

          <div class="absolute bottom-8 left-8 right-8">
            <span class="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/80 backdrop-blur">
              YouTube
            </span>
          </div>
        </button>
        `:`
        <div class="flex aspect-video items-center justify-center px-8 text-center text-zinc-300">
          Link do YouTube invalido.
        </div>
        `}
      </div>
    </div>
  </div>
</section>
`;function O(){let e=document.querySelector(`.js-youtube-video`);e&&e.addEventListener(`click`,()=>{let t=e.dataset.embedUrl,n=e.dataset.videoTitle??`Video do YouTube`;t&&(e.outerHTML=`
      <iframe
        class="aspect-video w-full"
        src="${t}"
        title="${n}"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    `)})}var k=`
<section id="letras" class="bg-white py-32">

  <div class="mx-auto max-w-6xl px-8">

    <div class="text-center">

      <span
        class="text-xs uppercase tracking-[0.4em] text-stone-500">

        ÁLBUM

      </span>

      <h1
        class="mt-6 text-5xl font-light tracking-tight text-zinc-900">

        A Verdade Ainda Chama

      </h1>

    </div>

    <div class="mt-16 flex justify-center">

      <img
        src="${h}"
        class="w-full max-w-md rounded-[2rem] shadow-2xl"
      />

    </div>

    <div class="mt-20 space-y-4">

      ${[{number:`01`,title:`Saiam Dela, Povo Meu`,lyrics:`
            Ela caminha entre povos e reis
            Vestida em ouro e tradição
            Prometendo os segredos do céu
            Enquanto esconde a direção

            Luzes brilham sobre as torres
            Refletindo a própria ilusão
            Mil vozes ecoam seu nome
            Afogando a revelação

            Mistura a graça com correntes
            A verdade com ambição
            E chama tudo isso
            De devoção

            Altares crescem sobre a terra
            Tocando o horizonte da cidade
            Mas poucos ainda reconhecem
            A voz da eternidade

            No meio da confusão
            Há um caminho a seguir
            Poucos escolhem a verdade
            Quando é mais fácil desistir

            No ruído das multidões
            No peso das tradições
            Uma voz atravessa o céu

            Escolha a verdade agora
            Antes da noite vencer
            Não beba do cálice do engano
            Que ensina os olhos a não ver

            Os ecos já chegaram ao céu
            A queda começou
            Aquilo que parecia eterno
            Diante da luz se abalou

            Ela se senta entre os poderosos
            Falando em nome da fé
            Constrói muralhas de promessas
            Enquanto prende quem quiser

            Transforma graça em comércio
            Transforma temor em prisão
            E os que procuram a verdade
            Caminham contra a multidão

            Desde os dias mais antigos
            Levantou seus impérios de pó
            Mas nenhum reino construído por homens
            Permanece para sempre só

            Vestida de púrpura e escarlate
            Coberta de ouro e ostentação
            Sem perceber que seus alicerces
            Já caminham para a destruição

            Quando o véu começa a cair
            Quando a noite perde o poder
            A verdade volta a respirar

            Escolha a verdade agora
            Antes da noite vencer
            Não beba do cálice do engano
            Que ensina os olhos a não ver

            Os ecos já chegaram ao céu
            A queda começou
            Aquilo que parecia eterno
            Diante da luz se abalou

            A verdadeira adoração
            Não precisa de coroas
            Não depende de impérios
            Nem de mãos poderosas

            Ainda existe uma voz
            Chamando através da escuridão
            Ainda existe um caminho
            Além da religião

            Ouçam a voz que vem do céu
            Não compartilhem seu destino
            Não carreguem suas correntes
            Não caminhem pelo mesmo caminho

            Antes que as muralhas desabem
            Antes que a fumaça cubra o chão

            Saiam dela...
            Povo meu...
            Saiam dela...
            Povo meu
            Saiam...
            Povo meu...
        `,explanation:{verse:`Apocalipse 18:4`,quote:`Saiam dela, povo meu, se não quiserem participar dos pecados dela.`,sections:[{title:`Tema Central`,content:`A música retrata o chamado profético para abandonar sistemas religiosos que se afastam dos ensinamentos bíblicos.`},{title:`Babilônia, a Grande`,content:`A letra utiliza a linguagem simbólica de Apocalipse 17 e 18 para representar a religião falsa.`},{title:`Convite à Reflexão`,content:`A canção incentiva o ouvinte a examinar suas crenças à luz das Escrituras.`},{title:`Mensagem de Esperança`,content:`Deus continua chamando pessoas sinceras para se aproximarem dele.`}],references:[`Apocalipse 17:1-5`,`Apocalipse 18:4`,`Apocalipse 18:8,21`,`João 4:23,24`,`2 Coríntios 6:17`,`1 Tessalonicenses 5:21`]}},{number:`02`,title:`Deus`,lyrics:`
        Antes dos reinos da terra
        Antes das vozes do mundo
        Antes de qualquer templo humano
        Já existia o Criador

        Muitos falam de um Deus distante
        Perdido além da imensidão
        Criado por ideias humanas
        E moldado pela religião

        Mas acima das vozes do mundo
        Existe uma verdade maior
        O Criador de todas as coisas
        Conhece cada coração

        TEU NOME É JEOVÁ
        Criador da vida

        TEU NOME É JEOVÁ
        A fonte da verdade

        Chamaste as estrelas pelo nome
        E firmaste os céus no lugar
        Sustentas o sopro da vida
        E vês cada passo do homem caminhar

        Não és feito por mãos humanas
        Nem vive em templos de pedra
        O Deus que governa o universo
        Também escuta quem se achega

        Quem pode medir os céus?
        Quem pode prender o vento?

        Quem sustenta a terra no vazio
        E conhece cada pensamento?

        O Deus que governa as estrelas
        Ainda chama os que querem ouvir

        TEU NOME É JEOVÁ
        Acima dos reis da terra

        TEU NOME É JEOVÁ
        Refúgio em meio à guerra

        Quando os impérios caírem
        Tua justiça permanecerá

        TEU NOME É JEOVÁ
        E teu Reino governará

        Teu nome permanece
        Mesmo quando o mundo passar

        Jeová
        `,explanation:{title:`Conhecendo o Deus Verdadeiro`,verse:`Êxodo 3:15`,quote:`Jeová, o Deus dos seus antepassados... Este é o meu nome para sempre.`,message:`O Deus verdadeiro não é uma força impessoal nem uma criação humana. Seu nome é Jeová, ele é o Criador de todas as coisas e deseja ser conhecido por aqueles que o buscam.`,sections:[{title:`O Nome Revelado por Deus`,content:`A música destaca que Deus não permanece anônimo nas Escrituras. Ele revelou seu nome e deseja que as pessoas o conheçam. O refrão enfatiza esse aspecto ao repetir o nome Jeová como o centro da mensagem.`},{title:`O Criador do Universo`,content:`Antes da existência dos governos, das religiões e das civilizações humanas, Jeová já existia. A canção relembra que ele é o Autor da vida, o Criador dos céus, da Terra e de tudo o que existe.`},{title:`Um Deus Próximo`,content:`Embora governe o universo, Jeová não é distante. A música destaca que aquele que criou as estrelas também conhece cada pessoa e escuta aqueles que se aproximam dele com sinceridade.`},{title:`O Reino Que Permanecerá`,content:`Enquanto os governos humanos surgem e desaparecem, o Reino de Deus permanecerá para sempre. A canção aponta para essa esperança como a solução definitiva para os problemas da humanidade.`}],references:[`Êxodo 3:15`,`Salmo 83:18`,`Isaías 42:8`,`Gênesis 1:1`,`Isaías 40:26`,`Atos 17:27`,`Daniel 2:44`,`Apocalipse 4:11`]}},{number:`03`,title:`Acautelai-vos`,lyrics:`
    Não julguem,
    Pra que não sejam julgados.
    Antes, vejam
    A trave nos próprios olhos.

    Afastem-se de mim,
    Vocês que espalham a dor.
    Se você veio até aqui,
    É porque ainda tem amor.

    Sabe de onde eu vim,
    Sabe quem me enviou.
    Sabe onde eu morri
    E até onde a minha voz chegou.

    Quanto tempo vai andar
    Sem enxergar o caminho?
    Enquanto me negar,
    Vai continuar sozinho.

    Acautela-se de si!
    Olha as minhas mãos
    Ainda sangram por ti.

    O que mais preciso fazer
    Pra você acreditar em mim?

    Filho meu…
    Ninguém chega ao Pai sem mim.
    Se você veio até aqui,
    É porque ainda tem amor.

    Você sabe de onde eu vim…
    Sabe quem me enviou…
    Enquanto me negar,
    Vai continuar sozinho.

    Acautela-se de si!
    `,explanation:{title:`O Encontro Com o Caminho`,verse:`João 14:6`,quote:`Eu sou o caminho, a verdade e a vida. Ninguém vem ao Pai senão por mim.`,message:`Jesus é o Filho de Deus e o único caminho que conduz ao Pai. A música convida o ouvinte a refletir sobre sua relação com Cristo e sobre a decisão de aceitar o papel que Jeová lhe concedeu.`,sections:[{title:`Um Diálogo Pessoal`,content:`A canção apresenta uma conversa imaginária entre Jesus e uma pessoa que procura a Deus, mas ainda luta para reconhecer quem Jesus realmente é. As palavras da letra refletem convites e ensinamentos encontrados nos Evangelhos.`},{title:`Olhar Para Dentro`,content:`A abertura faz referência às palavras de Jesus em Mateus 7:1-5, lembrando a importância da humildade e da autoavaliação antes de julgar outras pessoas. O chamado é para examinar o próprio coração.`},{title:`O Sacrifício de Cristo`,content:`Quando a letra menciona as mãos que ainda sangram, a ideia não é que Jesus continue sofrendo literalmente. A imagem destaca que o valor de seu sacrifício permanece disponível para beneficiar todos os que exercem fé nele.`},{title:`O Único Caminho`,content:`O refrão enfatiza uma das declarações mais importantes feitas por Jesus: ninguém pode se aproximar do Pai sem passar por ele. A música recorda que a salvação e a amizade com Deus dependem de reconhecer o papel que Cristo recebeu.`},{title:`Um Convite à Esperança`,content:`Mesmo abordando fé, arrependimento e decisão, a canção transmite esperança. A frase "Se você veio até aqui, é porque ainda tem amor" destaca que pessoas sinceras que continuam procurando a verdade podem encontrar o caminho para Deus por meio de Cristo.`}],references:[`Mateus 7:1-5`,`João 8:42`,`João 3:16`,`João 14:6`,`Atos 4:12`,`Mateus 11:28-30`,`João 17:3`]}},{number:`04`,title:`Além Do Ódio`,lyrics:`
    O mundo sempre encontra uma cruz
    Para quem se recusa a seguir a multidão...

    Chamaram a luz de ameaça
    E a verdade de blasfêmia
    Ergueram tribunais contra o Inocente
    E lavaram as mãos diante da sentença

    Os séculos passaram
    Mas certas sombras nunca mudaram
    Apenas aprenderam
    A vestir roupas diferentes

    Se rejeitaram o Mestre
    Por que eu esperaria aplausos?

    Há correntes que não prendem os pulsos
    Mas tentam prender a consciência
    Há prisões construídas de silêncio
    E portas fechadas pela conveniência

    Paulo conhecia seus corredores
    Suas pedras
    Suas madrugadas sem fim
    Ainda assim transformava celas
    Em sementes de eternidade

    Talvez o problema nunca tenha sido nós
    Talvez seja o Reino
    Que eles não conseguem suportar

    Não pertenço às marés deste século
    Nem aos ventos que mudam de direção
    Fui chamado para outro horizonte
    Para outra cidadania
    Para outro Rei

    E toda vez que escolho permanecer
    O mundo me lembra
    Que não sou daqui

    "O escravo não é maior que seu senhor..."

    Se perseguiram Aquele
    Que curava feridas
    Se odiaram Aquele
    Que falava de amor
    Se pregaram Aquele
    Que veio do céu
    O que deveria esperar eu?

    Talvez as mesmas pedras
    Talvez os mesmos tribunais
    Talvez a mesma solidão
    Que acompanha os que recusam
    Vender a própria fé

    Mas não caminho sozinho
    Há marcas antigas nesta estrada
    Passos gravados na poeira
    Muito antes dos meus

    E quando a noite se fecha ao redor
    Lembro de quem caminhou primeiro

    Lembro de quem permaneceu fiel
    Até o último suspiro

    Não fazem parte do mundo...
    Assim como eu não faço...

    E talvez seja exatamente por isso
    Que o mundo nunca nos reconheceu...
    `,explanation:{title:`Fidelidade em um Mundo Hostil`,verse:`João 15:20`,quote:`Lembrem-se da palavra que eu lhes disse: o escravo não é maior do que o seu senhor. Se perseguiram a mim, perseguirão também a vocês.`,message:`Seguir a Cristo nem sempre traz aprovação. A música relembra que a oposição enfrentada pelos servos de Deus não é sinal de fracasso, mas frequentemente uma consequência natural da fidelidade ao Reino.`,sections:[{title:`Quando a Verdade Incomoda`,content:`A abertura da canção recorda que Jesus foi rejeitado, julgado e condenado apesar de sua inocência. A letra mostra que a verdade muitas vezes confronta interesses humanos e, por isso, desperta oposição.`},{title:`Perseguição ao Longo da História`,content:`Embora os séculos tenham passado, a hostilidade contra aqueles que procuram servir a Deus continua existindo. A música sugere que os métodos mudam, mas a resistência à verdade permanece presente sob novas formas.`},{title:`O Exemplo do Apóstolo Paulo`,content:`A referência às prisões, pedras e madrugadas sem fim lembra as experiências do apóstolo Paulo. Apesar das perseguições, ele permaneceu fiel e transformou circunstâncias difíceis em oportunidades para fortalecer a fé de outros.`},{title:`Não Fazem Parte do Mundo`,content:`A canção destaca o ensino de Jesus de que seus seguidores não fariam parte do mundo. Sua lealdade principal pertence ao Reino de Deus, e não aos sistemas humanos que dominam a sociedade atual.`},{title:`Seguindo os Passos de Cristo`,content:`O ponto central da música é lembrar que Jesus percorreu esse caminho primeiro. Os que enfrentam oposição por causa da fé não caminham sozinhos, mas seguem os passos daquele que permaneceu fiel até o fim.`}],references:[`João 15:18-20`,`João 17:14-16`,`Mateus 5:10-12`,`Atos 14:22`,`2 Timóteo 3:12`,`Atos 16:22-25`,`Hebreus 12:1-3`,`1 Pedro 2:21`]}},{number:`05`,title:`Quando a Alegria Se Apaga`,lyrics:`
    Quando o chão se abre
    E o céu se cala
    Quando o mundo grita
    E a fé falha

    Casas viram poeira
    Sonhos no chão
    O vento leva histórias
    Sem pedir razão

    Notícias repetem
    Dor sem parar
    Mas ninguém explica
    Por que isso está lá

    No meio do caos
    Algo ainda diz:
    Isso não é o fim
    Não foi feito assim

    Quando tudo desaba ao redor
    E a força se esvai de você
    Existe uma voz maior
    Chamando pra não ceder

    Nem toda dor é o final
    Nem todo fim é o fim
    Existe um Reino real
    Que ainda vai surgir

    Rostos sorrindo
    Mas vazios por dentro
    Perderam a chama
    Perderam o centro

    Vivem correndo
    Sem direção
    Rindo por fora
    Morrendo em vão

    Alegria comprada
    Pra anestesiar
    Mas quando a noite chega
    Quem vai te sustentar?

    Quando o silêncio pesa
    E ninguém te vê
    Há um Deus que enxerga
    Mesmo sem você crer

    Quando tudo desaba ao redor
    E a força se esvai de você
    Existe uma voz maior
    Chamando pra não ceder

    Nem toda dor é o final
    Nem todo fim é o fim
    Existe um Reino real
    Que ainda vai surgir

    Não é o caos que vence
    Não é a dor que define
    O que hoje te quebra
    Amanhã te refina

    Quando a alegria morrer em você
    E nada fizer mais sentido
    Lembre: o que foi prometido
    Ainda não foi cumprido

    Quando tudo desaba ao redor
    E a força se esvai de você
    Existe uma voz maior
    Chamando pra não ceder

    Nem toda dor é o final
    Nem todo fim é o fim
    O mundo pode cair
    Mas Deus não mudou por mim

    Quando tudo cair…
    A verdade fica de pé
    `,explanation:{title:`Esperança Quando Tudo Parece Desmoronar`,verse:`Apocalipse 21:4`,quote:`Ele enxugará dos seus olhos toda lágrima, e não haverá mais morte, nem haverá mais tristeza, nem choro, nem dor.`,message:`O sofrimento não faz parte do propósito original de Deus e não durará para sempre. Por meio do Reino de Deus, Jeová eliminará as causas da dor humana e cumprirá sua promessa de restaurar a paz, a justiça e a vida para toda a humanidade.`,sections:[{title:`Quando a Dor Parece Não Ter Fim`,content:`A música retrata um mundo marcado por tragédias, perdas, crises emocionais e incertezas. As imagens da letra refletem uma realidade que milhões de pessoas enfrentam diariamente, levantando a pergunta: por que existe tanto sofrimento?`},{title:`O Vazio Que Muitos Escondem`,content:`Além das tragédias visíveis, a canção aborda uma dor silenciosa. Pessoas podem aparentar felicidade, mas carregar ansiedade, solidão e falta de propósito. A letra lembra que nem toda alegria aparente revela paz verdadeira.`},{title:`Isso Não Foi Feito Assim`,content:`O refrão destaca uma das ideias centrais da Bíblia: Deus não criou os seres humanos para sofrer. Quando criou a humanidade, tudo era "muito bom". O sofrimento surgiu como consequência do afastamento da humanidade da orientação divina.`},{title:`Um Reino Real Está Chegando`,content:`A música aponta para o Reino de Deus como a solução definitiva para os problemas humanos. Não se trata apenas de consolo emocional, mas da promessa de um governo estabelecido por Jeová que eliminará as causas da injustiça, da dor e da morte.`},{title:`A Verdade Permanece`,content:`Mesmo quando governos falham, sonhos são destruídos ou o mundo parece desmoronar, as promessas de Deus permanecem firmes. A conclusão da canção é uma declaração de confiança de que a verdade e o propósito divino continuarão de pé.`}],references:[`Lucas 21:10,11`,`Gênesis 1:31`,`Romanos 5:12`,`João 12:31`,`Salmo 34:18`,`Daniel 2:44`,`Apocalipse 21:3,4`,`Isaías 55:11`]}},{number:`06`,title:`Debaixo dos Teus Pés`,lyrics:`
    Você anuncia o fim da terra
    Como quem já viu o último dia
    Conta os anos do mundo
    Como quem escreve a última linha

    Você fala do fogo que virá
    Como quem já conhece o final
    Mas esquece que o chão permanece
    Muito depois do seu cálculo mortal

    Quantas vezes você disse
    "Agora tudo termina"

    E ainda assim
    A manhã voltou.

    Debaixo dos teus pés
    A terra permanece

    Silenciosa
    Firme
    Sem pedir licença para existir

    Debaixo dos teus pés
    A promessa resiste

    E quem aprende a mansidão
    Entende
    Que o chão não foi feito para desaparecer

    Você observa o céu
    Esperando sinais de ruína
    Mas ignora o campo
    Que insiste em nascer todo dia

    Você procura o fim do mundo
    Como quem busca razão
    Mas talvez nunca tenha entendido
    Por que o primeiro presente foi um jardim

    Talvez você tenha ouvido
    Muitas vozes falando do fim

    Mas poucas lembraram
    Quem sustentou o princípio

    Debaixo dos teus pés
    A terra permanece

    Mesmo quando você
    Duvida

    Debaixo dos teus pés
    Ela continua

    Esperando o dia
    Em que você vai perceber
    `,explanation:{title:`A Terra Permanece`,verse:`Eclesiastes 1:4`,quote:`Uma geração vai e outra geração vem, mas a terra permanece para sempre.`,message:`A Terra não foi criada para ser destruída. Jeová a fez para ser habitada para sempre. O Reino de Deus restaurará o propósito original do Criador, transformando a Terra em um lar pacífico para a humanidade obediente.`,sections:[{title:`Uma Esperança Frequentemente Esquecida`,content:`A música questiona a ideia popular de que o propósito de Deus para a Terra terminará com a destruição do planeta. Ao longo dos séculos, muitas previsões sobre o fim do mundo foram feitas, mas a Terra continua existindo e cumprindo o propósito para o qual foi criada.`},{title:`O Que a Bíblia Chama de Fim`,content:`Segundo a compreensão das Testemunhas de Jeová, quando a Bíblia fala sobre o fim do mundo, normalmente está se referindo ao fim de um sistema de coisas, não à destruição da Terra. Assim como ocorreu nos dias de Noé, Deus remove a maldade, não o planeta.`},{title:`O Primeiro Presente Foi um Jardim`,content:`A letra relembra que Jeová colocou os primeiros humanos em um jardim e lhes deu a responsabilidade de cuidar da Terra. Isso mostra que o propósito original de Deus sempre envolveu a humanidade vivendo para sempre em um lar terrestre perfeito.`},{title:`Os Mansos Herdarão a Terra`,content:`A música destaca a promessa feita por Jesus de que os mansos herdarão a Terra. Essa esperança harmoniza-se com outras promessas bíblicas que descrevem uma humanidade justa vivendo para sempre em paz sob o governo do Reino de Deus.`},{title:`Uma Promessa Que Continua Viva`,content:`O refrão enfatiza que a Terra permanece debaixo dos nossos pés como um lembrete visível de que as promessas de Deus continuam firmes. O mesmo Criador que estabeleceu a Terra prometeu restaurá-la e enchê-la de pessoas justas.`}],references:[`Eclesiastes 1:4`,`Gênesis 1:28`,`Isaías 45:18`,`Salmo 37:29`,`Mateus 5:5`,`2 Pedro 3:5-7`,`Apocalipse 21:3,4`]}},{number:`07`,title:`Conflitos e Guerras (Remastered)`,lyrics:`
    Eles levantam bandeiras
    Como quem levanta razão
    Chamam de defesa
    O que nasce da divisão

    Mudam os nomes das guerras
    Mas o chão reconhece
    O peso antigo
    De tudo que se repete

    Eles prometem ordem
    Depois da próxima batalha

    Como se o amanhã
    Pudesse nascer da mesma lâmina

    E o mundo observa
    O mesmo roteiro outra vez

    Novos discursos
    Velhas feridas abertas

    Eles falam em paz
    Com as mãos ainda cerradas

    E o silêncio espera
    Alguém aprender a viver

    Eles desenham fronteiras
    Sobre mapas e mesas
    Como se o mundo
    Coubesse em linhas retas

    Chamam de honra
    Aquilo que o medo constrói
    E entregam aos filhos
    As histórias que nunca terminam

    E a terra continua girando

    Como se esperasse
    Que finalmente percebam

    E o mundo assiste
    Mais um capítulo igual

    Discursos mudam
    Mas a ferida permanece

    Eles procuram paz
    Nos mesmos caminhos quebrados

    Até o dia
    Em que desistam de governar a própria ruína
    `,explanation:{title:`A Paz Que os Homens Nunca Conseguiram Construir`,verse:`Jeremias 10:23`,quote:`Sei muito bem, ó Jeová, que não cabe ao homem o seu caminho. Não cabe ao homem que anda nem mesmo dirigir o seu passo.`,message:`Guerras e conflitos demonstram os limites do governo humano. A paz verdadeira e permanente virá apenas por meio do Reino de Deus, o único governo capaz de unir a humanidade sob justiça e paz duradouras.`,sections:[{title:`Um Ciclo Que se Repete`,content:`A música observa como a história humana parece seguir o mesmo roteiro geração após geração. Mudam os governantes, os discursos, as bandeiras e as justificativas, mas o sofrimento causado pelas guerras continua reaparecendo.`},{title:`A Ilusão da Paz Pela Força`,content:`Ao longo dos séculos, líderes prometeram segurança, estabilidade e paz através de alianças, exércitos e poder político. A canção questiona essa lógica ao mostrar que muitos conflitos nascem exatamente das mesmas ferramentas usadas para tentar evitá-los.`},{title:`A Profecia dos Últimos Dias`,content:`As palavras da música refletem a descrição feita por Jesus sobre o período dos últimos dias, quando nações e reinos entrariam repetidamente em conflito. O aumento das guerras confirma a incapacidade humana de estabelecer uma paz duradoura.`},{title:`O Limite dos Governos Humanos`,content:`A canção destaca uma conclusão apresentada repetidamente nas Escrituras: os seres humanos não foram criados para governar independentemente de Deus. A história demonstra que, apesar dos avanços tecnológicos e políticos, os problemas fundamentais continuam existindo.`},{title:`O Reino Que Trará Paz Verdadeira`,content:`A música aponta para o Reino de Deus como a única solução permanente. Diferente dos governos humanos, esse Reino eliminará as causas da guerra e unirá a humanidade sob um governo justo, trazendo a paz que o homem nunca conseguiu alcançar por seus próprios esforços.`}],references:[`Jeremias 10:23`,`Mateus 24:7`,`Eclesiastes 1:9`,`Daniel 2:44`,`Salmo 46:9`,`Isaías 2:4`,`Miqueias 4:3,4`,`Salmo 72:7`]}},{number:`08`,title:`Nem Toda Voz`,lyrics:`
    No meio das vozes
    No meio da fé
    Mil caminhos prometem
    Mas qual deles é?

    Templos brilham na noite
    Promessas no ar
    Muitos falam de Deus
    Mas querem mandar

    Entre ouro e discursos
    E tronos de pó
    Chamam isso de luz
    Mas deixam Deus só

    Entre tantas palavras
    Algo ecoa em mim
    Nem toda voz que chama
    Mostra o verdadeiro fim

    Nem toda voz vem do céu
    Nem toda luz é real
    Entre sombras e reis de papel
    A verdade rompe o vendaval

    Quando o silêncio quebrar
    E o engano cair
    Uma grande multidão
    Vai se levantar daqui

    Reinos feitos de homens
    Vestidos de fé
    Prometem o paraíso
    Mas não sabem quem Deus é

    Entre regras e medo
    Entre glória e poder
    Muitos dizem guiar
    Mas não sabem viver

    Quando as torres caírem
    Quando o brilho acabar
    A verdade esquecida
    Voltará a brilhar

    E de todas as nações
    Vozes vão ecoar
    Uma grande multidão
    Vai finalmente cantar

    Nem toda voz vem do céu
    Nem toda luz é real
    Entre sombras e reis de papel
    A verdade rompe o vendaval

    Quando a noite passar
    E o engano cair
    Uma grande multidão
    Vai se levantar daqui

    Entre mil caminhos no mundo
    A verdade vai surgir.
    `,explanation:{title:`A Busca Pela Verdadeira Adoração`,verse:`João 17:17`,quote:`Santifica-os por meio da verdade; a tua palavra é a verdade.`,message:`Entre as muitas vozes religiosas do mundo, a verdade continua existindo. Deus está reunindo pessoas sinceras de todas as nações para formar a Grande Multidão que o adorará em unidade sob o governo do seu Reino.`,sections:[{title:`Muitas Vozes, Uma Verdade`,content:`A música começa refletindo uma pergunta que acompanha a humanidade há séculos: entre tantas religiões, filosofias e caminhos espirituais, qual realmente conduz à verdade? A canção mostra que sinceridade é importante, mas a verdade precisa ser identificada à luz das Escrituras.`},{title:`Nem Toda Luz é Real`,content:`Jesus alertou que falsos profetas surgiriam afirmando representar a Deus. A letra utiliza imagens de templos, poder religioso, tradição e prestígio para lembrar que aparência espiritual nem sempre significa aprovação divina.`},{title:`A Bíblia Como Referência`,content:`Segundo a compreensão das Testemunhas de Jeová, a verdade religiosa não deve ser medida pela popularidade, antiguidade ou influência humana. O padrão para identificar a verdadeira adoração continua sendo a Palavra de Deus.`},{title:`A Grande Multidão`,content:`O ponto culminante da música é a referência à Grande Multidão descrita em Apocalipse 7. Pessoas de todas as nações, tribos, povos e línguas são retratadas como adoradores unidos pela verdade e pela lealdade a Jeová.`},{title:`O Resultado da Busca`,content:`A canção conclui mostrando que a jornada espiritual não termina em instituições humanas, mas em uma relação verdadeira com Deus. Quando o engano desaparecer, a verdade permanecerá e pessoas sinceras estarão unidas na adoração ao Criador.`}],references:[`Mateus 7:13,14`,`Mateus 7:15`,`João 17:17`,`Marcos 7:7,8`,`Apocalipse 7:9,10`,`Apocalipse 7:13-17`,`Apocalipse 21:3,4`,`Sofonias 2:3`]}},{number:`09`,title:`A Besta`,lyrics:`
    Preste atenção no que vou dizer
    Há coisas que você ainda não vê
    Entre promessas e devoção
    Existe um trono de dominação

    Vendiam o céu por moedas de ouro
    Chamavam de fé o peso do couro
    Papéis selados prometiam perdão
    Enquanto crescia a dominação

    Indulgências compravam pecado
    O povo seguia enganado
    A Bíblia escondida pra ninguém ler
    Para ninguém descobrir o poder

    Chamavam de santo
    Chamavam de luz
    Mas quem dizia a verdade
    Morria na cruz

    A besta vestida de púrpura e ouro
    Falando de Deus diante do povo
    Promete esperança e salvação
    Mas vive de pura dominação

    Ontem fogueiras queimando a razão
    Hoje vendendo ilusão
    Mudam as vestes, mudam a voz
    Mas a mesma mentira fala a nós

    Capelães abençoam a guerra
    Enquanto o sangue cai sobre a terra
    Dois lados orando ao mesmo altar
    Dois lados prontos pra se matar

    Hoje milagres estão à venda
    Promessas que ninguém sustenta
    O mesmo teatro, a mesma visão
    Mudou o palco, não mudou o chão

    Ontem com fogo e perseguição
    Hoje com fama e televisão
    Mas quando a verdade voltar a falar
    Nenhum império vai se sustentar

    A besta vestida de púrpura e ouro
    Falando de Deus diante do povo
    Promete o céu, promete perdão
    Mas vive de pura dominação

    Mas quando a verdade romper o véu
    A luz vai brilhar sobre a terra
    E a voz que tentaram calar
    Vai ecoar como guerra

    Preste atenção no que vou dizer…
    Nem todo altar fala por Deus.
    `,explanation:{title:`Quando a Religião se Afasta da Verdade`,verse:`1 João 4:1`,quote:`Não acreditem em toda declaração inspirada, mas ponham à prova as declarações inspiradas para ver se se originam de Deus.`,message:`Nem toda organização religiosa representa a Deus. A Bíblia alerta que sistemas religiosos podem se afastar da verdade e buscar poder, riqueza e influência. Por isso, cada pessoa precisa examinar cuidadosamente suas crenças e responder ao chamado divino de buscar a verdadeira adoração.`,sections:[{title:`Um Alerta Contra a Aparência Religiosa`,content:`A música parte do princípio de que nem tudo o que fala em nome de Deus realmente o representa. Ao longo da história, instituições religiosas exerceram grande influência espiritual, política e econômica, muitas vezes se afastando dos ensinamentos originais de Cristo.`},{title:`Fé, Poder e Dominação`,content:`A letra relembra acontecimentos históricos como a venda de indulgências, a limitação do acesso às Escrituras e a perseguição de pessoas que buscavam divulgar os ensinos bíblicos. Esses exemplos ilustram como a religião pode ser usada para controle e influência quando se distancia da verdade.`},{title:`A Mulher Vestida de Púrpura e Ouro`,content:`A imagem central da canção faz referência à figura simbólica apresentada em Apocalipse 17. Segundo a compreensão das Testemunhas de Jeová, essa mulher representa Babilônia, a Grande, simbolizando o império mundial da religião falsa e sua relação com os poderes políticos deste mundo.`},{title:`Religião e os Conflitos Humanos`,content:`A música também aborda a participação de organizações religiosas em guerras e disputas entre nações. Enquanto Jesus ensinou neutralidade e amor ao próximo, muitas instituições religiosas apoiaram conflitos armados ao longo da história.`},{title:`Examinando as Próprias Crenças`,content:`O objetivo da canção não é apenas criticar sistemas religiosos, mas incentivar cada pessoa a examinar suas crenças à luz da Bíblia. A mensagem final é um convite para distinguir tradição humana de verdade bíblica e buscar uma adoração baseada nas Escrituras.`}],references:[`Mateus 7:15`,`Marcos 7:7,8`,`João 18:36`,`2 Pedro 2:1-3`,`1 João 4:1`,`Apocalipse 17:1-6`,`Apocalipse 18:4`,`Apocalipse 18:7,8`]}},{number:`10`,title:`Não Podemos Nos Calar`,lyrics:`
    "Dizem que ele saiu de Jerusalém
    carregando cartas...
    Sem imaginar
    que voltaria carregando esperança..."

    Ele conhecia o nome das estradas
    Pela poeira presa às sandálias
    E o peso das certezas antigas
    Que vestem o orgulho de justiça

    Guardava sentenças nas mãos
    E convicções afiadas no peito
    Até que uma luz rasgou o meio-dia
    E uma pergunta atravessou seus ossos:

    "Por que você me persegue?"

    O homem que caiu naquele caminho
    Jamais voltou a se levantar
    Do mesmo jeito...

    Perdeu aplausos
    Perdeu antigos aliados
    Perdeu o direito
    De continuar sendo quem era

    E encontrou Cristo

    Há encontros
    Que não devolvem a vida antiga

    Há vozes
    Que ninguém consegue esquecer

    AINDA CAMINHA-REI
    Mesmo quando o medo aprende seu nome

    AINDA CAMINHA-REI
    Mesmo quando o mundo fecha as mãos

    Porque o amor que o encontrou
    Na estrada para Damasco

    Feriu o homem que ele era

    E salvou o homem que restou

    Filipos ouviu seus cânticos
    Depois da meia-noite

    Éfeso conheceu o barulho
    Das multidões enfurecidas

    Malta sentiu o gosto do naufrágio

    Roma viu um prisioneiro

    Mas nenhuma cidade conseguiu entender

    Como alguém tão ferido
    Continuava inteiro

    Como alguém tão livre
    Continuava acorrentado

    (Quem ama assim?)

    Chamaram de loucura
    Chamaram de ameaça

    Ele chamou...

    De BOAS NOVAS

    AINDA CAMINHA-REI
    Mesmo quando o aço corta a pele

    AINDA CAMINHA-REI
    Mesmo quando as portas se fecham

    Porque o amor que o encontrou
    Na estrada para Damasco

    Feriu o homem que ele era
    E salvou o homem que restou

    Acorrentaram seus pulsos...
    Mas não suas palavras
    Julgaram sua consciência
    Com leis feitas por homens

    Ergueram tribunais
    Afiaram espadas
    E ainda assim...

    A verdade continuou andando

    Os impérios mudaram...
    Os nomes dos governantes
    viraram pó...

    Mas ainda existem homens
    e mulheres
    Batendo em portas

    Atravessando fronteiras
    Falando em sussurros
    Entrando em celas

    Pelo mesmo motivo
    Porque o Cristo
    que encontrou Saulo

    Ainda encontra pessoas comuns

    E ainda as envia

    AINDA CAMINHA-REI
    Quando proibirem nossas vozes

    AINDA CAMINHA-REI
    Quando o amor custar liberdade

    Porque há notícias grandes demais
    Para morrerem em segredo
    E o Reino é grande demais

    Para caber em silêncio

    Ele correu sua corrida
    Nós seguimos seus passos

    Não atrás de Paulo
    Mas atrás dAquele

    Que transforma perseguidores
    Em testemunhas

    Ele escreveu cartas...
    Nós carregamos vozes...
    Ele atravessou mares...

    Nós atravessamos ruas...

    E quando perguntarem
    por que continuamos...

    Talvez a resposta
    não esteja na coragem...

    Mas no amor.

    (sim...)

    O mesmo amor

    Que o derrubou em Damasco...
    E o levantou para sempre...
    `,explanation:{title:`Quando a Verdade Transforma uma Vida`,verse:`Atos 9:4-5`,quote:`Saulo, Saulo, por que você me persegue?`,message:`O mesmo Cristo que transformou Saulo em Paulo continua transformando pessoas hoje. Seu Reino continua avançando, sua mensagem continua sendo proclamada e seu amor continua alcançando pessoas comuns que desejam servir a Deus com sinceridade.`,sections:[{title:`A Estrada que Mudou a História`,content:`A música acompanha a transformação de Saulo de Tarso, que saiu em direção a Damasco determinado a perseguir cristãos. O encontro com Jesus ressuscitado mudou completamente sua vida e o transformou em um dos mais dedicados proclamadores das boas novas.`},{title:`Quando Cristo Rompe as Certezas`,content:`A pergunta "Por que você me persegue?" representa o momento em que todas as convicções de Saulo foram confrontadas. A canção mostra que existem encontros com a verdade que tornam impossível continuar sendo a mesma pessoa.`},{title:`As Perdas e os Ganhos da Fé`,content:`Depois de aceitar Cristo, Paulo perdeu prestígio, posição e antigos aliados. Em troca, encontrou um propósito maior. Sua história demonstra que seguir a verdade pode exigir sacrifícios, mas produz uma esperança que nenhuma posição humana pode oferecer.`},{title:`Uma Vida de Perseverança`,content:`Filipos, Éfeso, Malta e Roma representam momentos marcantes da vida de Paulo. Prisões, perseguições, naufrágios e oposição não conseguiram impedir que ele continuasse anunciando as boas novas do Reino de Deus.`},{title:`A Mensagem Continua Caminhando`,content:`O refrão "AINDA CAMINHA-REI" aponta para Jesus Cristo. O verdadeiro protagonista da história não é Paulo, mas o Rei que continua dirigindo a pregação das boas novas. Assim como chamou Saulo no primeiro século, Cristo continua encontrando e enviando pessoas sinceras hoje.`},{title:`Não Podemos Nos Calar`,content:`O título da música resume sua mensagem principal. As boas novas do Reino são importantes demais para permanecerem em silêncio. A verdade continua avançando porque é sustentada pelo amor de Deus e pelo governo de Cristo, não pela força humana.`}],references:[`Atos 9:1-22`,`Atos 16:22-34`,`Atos 19:23-41`,`Atos 27:13-44`,`Atos 28:16-31`,`Filipenses 3:7-8`,`2 Timóteo 2:9`,`Mateus 24:14`,`Mateus 28:18-20`]}},{number:`11`,title:`O Tempo do Fim`,lyrics:`
    Lembro quando o futuro
    Parecia morar tão longe
    Quando os dias eram apenas dias
    E ninguém contava cicatrizes no horizonte

    Mas alguma coisa mudou
    Até o vento parece carregar
    Uma urgência antiga
    Nação contra nação

    O chão perdendo o equilíbrio

    Mesas vazias
    Hospitais cheios
    O amor trocando de temperatura
    Até aprender a ser ausência

    E crianças crescendo depressa demais
    Num mundo cansado de si mesmo
    As manchetes mudam de roupa
    Mas os avisos permanecem

    Dizem:
    "Sempre foi assim."
    Talvez.

    Mas nem sempre
    Tudo gritou ao mesmo tempo.

    Você consegue ouvir?

    Por trás das sirenes e das cidades acordadas
    Existe uma voz atravessando gerações

    Chamando os distraídos pelo nome

    Não é o medo que anuncia o fim
    É a misericórdia que insiste em avisar

    Ainda há tempo
    Antes que o ruído do mundo
    Silencie o seu coração.

    Filhos aprendem a responder
    Mas desaprendem a escutar

    A verdade se tornou negociável
    E a fé, uma vitrine iluminada

    Riem das antigas promessas
    Como nos dias de Noé

    Construindo futuros frágeis
    Sobre a certeza de que nada mudará

    Mas até a indiferença
    Tem prazo para acabar

    Quantos sinais serão necessários?

    Quantas noites sem estrelas?

    Quantas portas fechadas
    Até percebermos

    Que o relógio continua andando?

    Você consegue ouvir?

    Por trás das sirenes e das cidades acordadas
    Existe uma voz atravessando gerações

    Chamando os distraídos pelo nome

    Não é o medo que anuncia o fim
    É a misericórdia que insiste em avisar

    Ainda há tempo
    Antes que o ruído do mundo
    Silencie o seu coração.

    Guerras.
    Fome.
    Terra tremendo.
    Amor esfriando.
    Boas novas cruzando fronteiras.

    Tudo aquilo que disseram
    Que aconteceria.

    E enquanto muitos adormecem
    Rindo dos avisos

    A verdade continua chamando
    Em voz baixa.

    Apressa os teus passos.
    Procura enquanto ainda podes encontrar.

    Nem toda estrada leva à vida.
    Nem toda luz aponta o caminho.

    Existe uma porta estreita
    Esquecida entre multidões apressadas.

    E ela continua aberta.

    Você consegue ouvir?

    Por trás do concreto e da fumaça
    O Reino se aproxima

    Como o primeiro clarão antes do amanhecer

    Não entregue a esperança
    Às mãos da distração.

    Ainda há tempo para voltar.
    Ainda há tempo para buscar.
    Ainda há tempo para ouvir.

    A voz que nunca deixou
    De chamar.

    Talvez o sinal mais triste
    Não sejam as guerras

    Nem o céu escurecendo.

    Talvez seja descobrir
    Que a verdade esteve tão perto

    Enquanto aprendemos
    A viver sem olhar para ela.

    E mesmo assim...

    Ela ainda chama.
    `,explanation:{title:`Um Convite Antes Que o Tempo Termine`,verse:`Mateus 24:14`,quote:`Estas boas novas do Reino serão pregadas em toda a terra habitada, em testemunho a todas as nações; e então virá o fim.`,message:`Os acontecimentos dos últimos dias confirmam que vivemos no tempo do fim deste sistema. Mas os sinais não existem para gerar medo. Eles demonstram a paciência e a misericórdia de Jeová, que continua chamando pessoas sinceras para ouvirem as boas novas do Reino antes que chegue o fim deste mundo e o início do novo mundo prometido por Deus.`,sections:[{title:`Os Sinais Que Jesus Predisse`,content:`A música reúne diversos acontecimentos que Jesus mencionou ao descrever o sinal de sua presença: guerras, fome, instabilidade mundial, sofrimento crescente e mudanças profundas no comportamento humano. A canção convida o ouvinte a refletir sobre o significado desses eventos à luz das profecias bíblicas.`},{title:`Quando o Amor Esfria`,content:`Uma das imagens centrais da letra é a ideia de um amor que perde sua temperatura até se tornar ausência. Essa descrição ecoa o alerta de Jesus de que, nos últimos dias, o amor da maioria esfriaria por causa do aumento da injustiça e da falta de valores espirituais.`},{title:`Como Nos Dias de Noé`,content:`A música compara nossa época aos dias de Noé. Assim como muitos ignoraram os avisos antes do Dilúvio, grande parte das pessoas continua vivendo como se nada estivesse prestes a mudar. A indiferença espiritual se torna um dos sinais mais evidentes do tempo do fim.`},{title:`Não é Medo, é Misericórdia`,content:`O coração da canção está na ideia de que Deus não fornece sinais para assustar a humanidade, mas para ajudá-la. Os avisos proféticos demonstram a paciência de Jeová, que continua oferecendo oportunidade para arrependimento e mudança enquanto ainda há tempo.`},{title:`A Porta Continua Aberta`,content:`A referência à porta estreita destaca que a oportunidade de buscar a Deus ainda existe. A música enfatiza que ninguém precisa permanecer perdido ou indiferente. O convite para procurar a verdade continua disponível para todos os que desejam ouvir.`},{title:`O Reino Está Próximo`,content:`Embora a letra mencione crises e dificuldades, sua mensagem principal é de esperança. Os sinais não apontam apenas para o fim deste sistema, mas também para a aproximação do Reino de Deus, que trará a solução definitiva para os problemas da humanidade.`}],references:[`Mateus 24:3-14`,`Mateus 24:37-39`,`Lucas 21:10,11`,`Lucas 21:31`,`2 Timóteo 3:1-5`,`2 Pedro 3:9`,`Isaías 55:6`,`Mateus 7:13,14`,`Sofonias 2:2,3`]}},{number:`12`,title:`Quando Os Conflitos Terminarem`,lyrics:`
    Sirenes rasgam o silêncio
    E o céu se cobre de fumaça
    Cidades desaparecem
    Na poeira da história

    Prometeram paz tantas vezes
    Em mesas cheias de bandeiras
    Mas as mesmas mãos que assinam tratados
    Continuam forjando espadas

    Crianças aprendem a fugir
    Antes de aprender a viver
    E o mundo chama de política
    O que nasceu do orgulho humano

    O mundo fala de paz
    Mas continua se preparando para guerra

    Constrói muralhas de medo
    E chama isso de segurança

    Enquanto o coração humano governar
    A terra nunca descansará

    Reinos se levantam
    Prometendo ordem e proteção

    Mas cada geração descobre
    O mesmo campo de destruição

    Bandeiras mudam de cor
    Impérios mudam de nome

    Mas a guerra continua
    Como uma sombra sobre o homem

    (oh — oh — oh)

    Mas existe uma promessa
    Mais antiga que todos os reinos

    Um governo que não levanta espadas
    Nem constrói campos de batalha

    Então os arcos da guerra serão quebrados

    As lanças cairão das mãos dos homens

    E as nações finalmente aprenderão
    Um caminho que nunca conheceram

    Nenhum povo levantará espada
    Nenhuma criança aprenderá a guerra

    Porque a paz finalmente governará
    Sobre toda a terra.
    `,explanation:{title:`Quando a Paz Finalmente Governar`,verse:`Isaías 2:4`,quote:`Nação não levantará espada contra nação, nem aprenderão mais a guerra.`,message:`A história humana demonstra que os homens não conseguiram acabar com as guerras. A verdadeira paz virá somente quando o Reino de Deus substituir os governos humanos e cumprir a promessa de que as nações não aprenderão mais a guerra.`,sections:[{title:`A Humanidade e Sua Busca Pela Paz`,content:`A música observa uma realidade repetida ao longo da história. Governantes, alianças e organizações prometeram paz duradoura, mas conflitos continuam surgindo geração após geração. Apesar dos esforços humanos, a violência permanece presente em praticamente todas as épocas.`},{title:`As Feridas da Guerra`,content:`A letra destaca o impacto dos conflitos sobre pessoas comuns. Famílias são separadas, cidades são destruídas e crianças crescem convivendo com medo, deslocamento e insegurança. A canção relembra que as maiores vítimas das guerras raramente são aqueles que as iniciam.`},{title:`Os Limites dos Governos Humanos`,content:`Segundo a Bíblia, a incapacidade humana de estabelecer paz permanente está ligada às imperfeições que afetam a humanidade desde o afastamento de Deus. A música apresenta a ideia de que enquanto os homens tentarem resolver os problemas apenas por seus próprios meios, os conflitos continuarão retornando.`},{title:`O Reino Que Não Precisa de Exércitos`,content:`A segunda parte da canção apresenta uma esperança diferente. Em vez de confiar em poder militar ou influência política, ela aponta para o Reino de Deus, um governo estabelecido por Jeová sob a liderança de Jesus Cristo, que trará justiça e paz duradouras.`},{title:`Não Aprenderão Mais a Guerra`,content:`O clímax da música está na promessa bíblica de um futuro em que armas deixarão de ser necessárias e a guerra desaparecerá definitivamente. A humanidade viverá unida sob um único governo justo, sem medo, violência ou rivalidades nacionais.`}],references:[`Jeremias 10:23`,`Mateus 24:7`,`Daniel 2:44`,`Isaías 2:2-4`,`Miqueias 4:1-4`,`Salmo 46:9`,`Salmo 72:7`,`Apocalipse 21:3-4`]}}].map(e=>`
  <details class="group overflow-hidden rounded-[1.5rem] border border-zinc-200">

    <summary
      class="flex cursor-pointer items-center justify-between px-8 py-6 list-none">

      <div class="flex items-center gap-5">
        <span class="text-zinc-400">${e.number}</span>

        <h3 class="text-xl font-light text-zinc-900">
          ${e.title}
        </h3>
      </div>

      <span
        class="text-zinc-400 transition duration-300 group-open:rotate-45">
        +
      </span>

    </summary>

    <div class="border-t border-zinc-200 px-8 py-8">

      <h4 class="font-medium">
        Letra
      </h4>

      <div class="mt-6 columns-1 lg:columns-2 gap-12">

        <div
          class="whitespace-pre-line text-zinc-600 leading-8">

          ${e.lyrics}

        </div>

      </div>

      <div
        class="mt-10 rounded-[1.5rem] bg-stone-50 p-8">

        <span class="text-xs uppercase tracking-[0.3em] text-stone-500"> Sobre esta faixa </span>
        <br>  <br>
        <blockquote
          class="border-l-4 border-zinc-900 pl-6 text-lg italic">

          "${e.explanation.quote}"

          <span
            class="mt-2 block text-sm not-italic text-zinc-500">

            — ${e.explanation.verse}

          </span>

        </blockquote>

        <div class="mt-8 space-y-8">

          ${e.explanation.sections.map(e=>`
            <div>

              <h5
                class="mb-3 text-lg font-medium text-zinc-900">

                ${e.title}

              </h5>

              <p
                class="leading-8 text-zinc-600">

                ${e.content}

              </p>

            </div>
          `).join(``)}

        </div>

        <div
          class="mt-10 border-t border-stone-200 pt-6">

          <div class="flex flex-wrap gap-3">

            ${e.explanation.references.map(e=>`
              <span
                class="rounded-full bg-white px-4 py-2 text-sm">

                ${e}

              </span>
            `).join(``)}

          </div>

        </div>

      </div>

    </div>

  </details>
`).join(``)}

    </div>

  </div>

</section>
`;function A(e){return typeof e==`object`&&!!e&&`constructor`in e&&e.constructor===Object}function j(e={},t={}){let n=[`__proto__`,`constructor`,`prototype`];Object.keys(t).filter(e=>n.indexOf(e)<0).forEach(n=>{e[n]===void 0?e[n]=t[n]:A(t[n])&&A(e[n])&&Object.keys(t[n]).length>0&&j(e[n],t[n])})}var M={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:``},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:``,host:``,hostname:``,href:``,origin:``,pathname:``,protocol:``,search:``}};function N(){let e=typeof document<`u`?document:{};return j(e,M),e}var P={document:M,navigator:{userAgent:``},location:{hash:``,host:``,hostname:``,href:``,origin:``,pathname:``,protocol:``,search:``},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return``}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>`u`?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>`u`||clearTimeout(e)}};function F(){let e=typeof window<`u`?window:{};return j(e,P),e}function I(e=``){return e.trim().split(` `).filter(e=>!!e.trim())}function ee(e){let t=e;Object.keys(t).forEach(e=>{try{t[e]=null}catch{}try{delete t[e]}catch{}})}function L(e,t=0){return setTimeout(e,t)}function R(){return Date.now()}function z(e){let t=F(),n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||=e.style,n}function B(e,t=`x`){let n=F(),r,i,a,o=z(e);return n.WebKitCSSMatrix?(i=o.transform||o.webkitTransform,i.split(`,`).length>6&&(i=i.split(`, `).map(e=>e.replace(`,`,`.`)).join(`, `)),a=new n.WebKitCSSMatrix(i===`none`?``:i)):(a=o.MozTransform||o.OTransform||o.MsTransform||o.msTransform||o.transform||o.getPropertyValue(`transform`).replace(`translate(`,`matrix(1, 0, 0, 1,`),r=a.toString().split(`,`)),t===`x`&&(i=n.WebKitCSSMatrix?a.m41:r.length===16?parseFloat(r[12]):parseFloat(r[4])),t===`y`&&(i=n.WebKitCSSMatrix?a.m42:r.length===16?parseFloat(r[13]):parseFloat(r[5])),i||0}function V(e){return typeof e==`object`&&!!e&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)===`Object`}function te(e){return typeof window<`u`&&window.HTMLElement!==void 0?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function H(...e){let t=Object(e[0]);for(let n=1;n<e.length;n+=1){let r=e[n];if(r!=null&&!te(r)){let e=Object.keys(Object(r)).filter(e=>e!==`__proto__`&&e!==`constructor`&&e!==`prototype`);for(let n=0,i=e.length;n<i;n+=1){let i=e[n],a=Object.getOwnPropertyDescriptor(r,i);a!==void 0&&a.enumerable&&(V(t[i])&&V(r[i])?r[i].__swiper__?t[i]=r[i]:H(t[i],r[i]):!V(t[i])&&V(r[i])?(t[i]={},r[i].__swiper__?t[i]=r[i]:H(t[i],r[i])):t[i]=r[i])}}}return t}function U(e,t,n){e.style.setProperty(t,n)}function ne({swiper:e,targetPosition:t,side:n}){let r=F(),i=-e.translate,a=null,o,s=e.params.speed;e.wrapperEl.style.scrollSnapType=`none`,r.cancelAnimationFrame(e.cssModeFrameID);let c=t>i?`next`:`prev`,l=(e,t)=>c===`next`&&e>=t||c===`prev`&&e<=t,u=()=>{o=new Date().getTime(),a===null&&(a=o);let c=Math.max(Math.min((o-a)/s,1),0),d=i+(.5-Math.cos(c*Math.PI)/2)*(t-i);if(l(d,t)&&(d=t),e.wrapperEl.scrollTo({[n]:d}),l(d,t)){e.wrapperEl.style.overflow=`hidden`,e.wrapperEl.style.scrollSnapType=``,setTimeout(()=>{e.wrapperEl.style.overflow=``,e.wrapperEl.scrollTo({[n]:d})}),r.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=r.requestAnimationFrame(u)};u()}function re(e){return e.querySelector(`.swiper-slide-transform`)||e.shadowRoot&&e.shadowRoot.querySelector(`.swiper-slide-transform`)||e}function W(e,t=``){let n=F(),r=[...e.children];return n.HTMLSlotElement&&e instanceof HTMLSlotElement&&r.push(...e.assignedElements()),t?r.filter(e=>e.matches(t)):r}function ie(e,t){let n=[t];for(;n.length>0;){let t=n.shift();if(e===t)return!0;n.push(...t.children,...t.shadowRoot?t.shadowRoot.children:[],...t.assignedElements?t.assignedElements():[])}}function ae(e,t){let n=F(),r=t.contains(e);return!r&&n.HTMLSlotElement&&t instanceof HTMLSlotElement&&(r=[...t.assignedElements()].includes(e),r||=ie(e,t)),r}function G(e){try{console.warn(e);return}catch{}}function K(e,t=[]){let n=document.createElement(e);return n.classList.add(...Array.isArray(t)?t:I(t)),n}function oe(e,t){let n=[];for(;e.previousElementSibling;){let r=e.previousElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function se(e,t){let n=[];for(;e.nextElementSibling;){let r=e.nextElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function q(e,t){return F().getComputedStyle(e,null).getPropertyValue(t)}function J(e){let t=e,n;if(t){for(n=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(n+=1);return n}}function ce(e,t){let n=[],r=e.parentElement;for(;r;)t?r.matches(t)&&n.push(r):n.push(r),r=r.parentElement;return n}function le(e,t){function n(r){r.target===e&&(t.call(e,r),e.removeEventListener(`transitionend`,n))}t&&e.addEventListener(`transitionend`,n)}function Y(e,t,n){let r=F();return n?e[t===`width`?`offsetWidth`:`offsetHeight`]+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t===`width`?`margin-right`:`margin-top`))+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t===`width`?`margin-left`:`margin-bottom`)):e.offsetWidth}function X(e){return(Array.isArray(e)?e:[e]).filter(e=>!!e)}function ue(e,t=``){typeof trustedTypes<`u`?e.innerHTML=trustedTypes.createPolicy(`html`,{createHTML:e=>e}).createHTML(t):e.innerHTML=t}var de;function fe(){let e=F(),t=N();return{smoothScroll:t.documentElement&&t.documentElement.style&&`scrollBehavior`in t.documentElement.style,touch:!!(`ontouchstart`in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function pe(){return de||=fe(),de}var me;function he({userAgent:e}={}){let t=pe(),n=F(),r=n.navigator.platform,i=e||n.navigator.userAgent,a={ios:!1,android:!1},o=n.screen.width,s=n.screen.height,c=i.match(/(Android);?[\s\/]+([\d.]+)?/),l=i.match(/(iPad)(?!\1).*OS\s([\d_]+)/),u=i.match(/(iPod)(.*OS\s([\d_]+))?/),d=!l&&i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),f=r===`Win32`,p=r===`MacIntel`;return!l&&p&&t.touch&&[`1024x1366`,`1366x1024`,`834x1194`,`1194x834`,`834x1112`,`1112x834`,`768x1024`,`1024x768`,`820x1180`,`1180x820`,`810x1080`,`1080x810`].indexOf(`${o}x${s}`)>=0&&(l=i.match(/(Version)\/([\d.]+)/),l||=[0,1,`13_0_0`],p=!1),c&&!f&&(a.os=`android`,a.android=!0),(l||d||u)&&(a.os=`ios`,a.ios=!0),a}function ge(e={}){return me||=he(e),me}var _e;function ve(){let e=F(),t=ge(),n=!1;function r(){let t=e.navigator.userAgent.toLowerCase();return t.indexOf(`safari`)>=0&&t.indexOf(`chrome`)<0&&t.indexOf(`android`)<0}if(r()){let t=String(e.navigator.userAgent);if(t.includes(`Version/`)){let[e,r]=t.split(`Version/`)[1].split(` `)[0].split(`.`).map(e=>Number(e));n=e<16||e===16&&r<2}}let i=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),a=r(),o=a||i&&t.ios;return{isSafari:n||a,needPerspectiveFix:n,need3dFix:o,isWebView:i}}function ye(){return _e||=ve(),_e}function be({swiper:e,on:t,emit:n}){let r=F(),i=null,a=null,o=()=>{!e||e.destroyed||!e.initialized||(n(`beforeResize`),n(`resize`))},s=()=>{!e||e.destroyed||!e.initialized||(i=new ResizeObserver(t=>{a=r.requestAnimationFrame(()=>{let{width:n,height:r}=e,i=n,a=r;t.forEach(({contentBoxSize:t,contentRect:n,target:r})=>{r&&r!==e.el||(i=n?n.width:(t[0]||t).inlineSize,a=n?n.height:(t[0]||t).blockSize)}),(i!==n||a!==r)&&o()})}),i.observe(e.el))},c=()=>{a&&r.cancelAnimationFrame(a),i&&i.unobserve&&e.el&&(i.unobserve(e.el),i=null)},l=()=>{!e||e.destroyed||!e.initialized||n(`orientationchange`)};t(`init`,()=>{if(e.params.resizeObserver&&r.ResizeObserver!==void 0){s();return}r.addEventListener(`resize`,o),r.addEventListener(`orientationchange`,l)}),t(`destroy`,()=>{c(),r.removeEventListener(`resize`,o),r.removeEventListener(`orientationchange`,l)})}function xe({swiper:e,extendParams:t,on:n,emit:r}){let i=[],a=F(),o=(t,n={})=>{let o=new(a.MutationObserver||a.WebkitMutationObserver)(t=>{if(e.__preventObserver__)return;if(t.length===1){r(`observerUpdate`,t[0]);return}let n=function(){r(`observerUpdate`,t[0])};a.requestAnimationFrame?a.requestAnimationFrame(n):a.setTimeout(n,0)});o.observe(t,{attributes:n.attributes===void 0?!0:n.attributes,childList:e.isElement||(n.childList===void 0?!0:n).childList,characterData:n.characterData===void 0?!0:n.characterData}),i.push(o)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),n(`init`,()=>{if(e.params.observer){if(e.params.observeParents){let t=ce(e.hostEl);for(let e=0;e<t.length;e+=1)o(t[e])}o(e.hostEl,{childList:e.params.observeSlideChildren}),o(e.wrapperEl,{attributes:!1})}}),n(`destroy`,()=>{i.forEach(e=>{e.disconnect()}),i.splice(0,i.length)})}var Se={on(e,t,n){let r=this;if(!r.eventsListeners||r.destroyed||typeof t!=`function`)return r;let i=n?`unshift`:`push`;return e.split(` `).forEach(e=>{r.eventsListeners[e]||(r.eventsListeners[e]=[]),r.eventsListeners[e][i](t)}),r},once(e,t,n){let r=this;if(!r.eventsListeners||r.destroyed||typeof t!=`function`)return r;function i(...n){r.off(e,i),i.__emitterProxy&&delete i.__emitterProxy,t.apply(r,n)}return i.__emitterProxy=t,r.on(e,i,n)},onAny(e,t){let n=this;if(!n.eventsListeners||n.destroyed||typeof e!=`function`)return n;let r=t?`unshift`:`push`;return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[r](e),n},offAny(e){let t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;let n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){let n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||e.split(` `).forEach(e=>{t===void 0?n.eventsListeners[e]=[]:n.eventsListeners[e]&&n.eventsListeners[e].forEach((r,i)=>{(r===t||r.__emitterProxy&&r.__emitterProxy===t)&&n.eventsListeners[e].splice(i,1)})}),n},emit(...e){let t=this;if(!t.eventsListeners||t.destroyed||!t.eventsListeners)return t;let n,r,i;return typeof e[0]==`string`||Array.isArray(e[0])?(n=e[0],r=e.slice(1,e.length),i=t):(n=e[0].events,r=e[0].data,i=e[0].context||t),r.unshift(i),(Array.isArray(n)?n:n.split(` `)).forEach(e=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach(t=>{t.apply(i,[e,...r])}),t.eventsListeners&&t.eventsListeners[e]&&t.eventsListeners[e].forEach(e=>{e.apply(i,r)})}),t}};function Ce(){let e=this,t,n,r=e.el;t=e.params.width!==void 0&&e.params.width!==null?e.params.width:r.clientWidth,n=e.params.height!==void 0&&e.params.height!==null?e.params.height:r.clientHeight,!(t===0&&e.isHorizontal()||n===0&&e.isVertical())&&(t=t-parseInt(q(r,`padding-left`)||0,10)-parseInt(q(r,`padding-right`)||0,10),n=n-parseInt(q(r,`padding-top`)||0,10)-parseInt(q(r,`padding-bottom`)||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))}function we(){let e=this;function t(t,n){return parseFloat(t.getPropertyValue(e.getDirectionLabel(n))||0)}let n=e.params,{wrapperEl:r,slidesEl:i,rtlTranslate:a,wrongRTL:o}=e,s=e.virtual&&n.virtual.enabled,c=s?e.virtual.slides.length:e.slides.length,l=W(i,`.${e.params.slideClass}, swiper-slide`),u=s?e.virtual.slides.length:l.length,d=[],f=[],p=[],m=n.slidesOffsetBefore;typeof m==`function`&&(m=n.slidesOffsetBefore.call(e));let h=n.slidesOffsetAfter;typeof h==`function`&&(h=n.slidesOffsetAfter.call(e));let g=e.snapGrid.length,_=e.slidesGrid.length,v=e.size-m-h,y=n.spaceBetween,b=-m,x=0,S=0;if(v===void 0)return;typeof y==`string`&&y.indexOf(`%`)>=0?y=parseFloat(y.replace(`%`,``))/100*v:typeof y==`string`&&(y=parseFloat(y)),e.virtualSize=-y-m-h,l.forEach(e=>{a?e.style.marginLeft=``:e.style.marginRight=``,e.style.marginBottom=``,e.style.marginTop=``}),n.centeredSlides&&n.cssMode&&(U(r,`--swiper-centered-offset-before`,``),U(r,`--swiper-centered-offset-after`,``)),n.cssMode&&(U(r,`--swiper-slides-offset-before`,`${m}px`),U(r,`--swiper-slides-offset-after`,`${h}px`));let C=n.grid&&n.grid.rows>1&&e.grid;C?e.grid.initSlides(l):e.grid&&e.grid.unsetSlides();let w,T=n.slidesPerView===`auto`&&n.breakpoints&&Object.keys(n.breakpoints).filter(e=>n.breakpoints[e].slidesPerView!==void 0).length>0;for(let r=0;r<u;r+=1){w=0;let i=l[r];if(!(i&&(C&&e.grid.updateSlide(r,i,l),q(i,`display`)===`none`))){if(s&&n.slidesPerView===`auto`)n.virtual.slidesPerViewAutoSlideSize&&(w=n.virtual.slidesPerViewAutoSlideSize),w&&i&&(n.roundLengths&&(w=Math.floor(w)),i.style[e.getDirectionLabel(`width`)]=`${w}px`);else if(n.slidesPerView===`auto`){T&&(i.style[e.getDirectionLabel(`width`)]=``);let r=getComputedStyle(i),a=i.style.transform,o=i.style.webkitTransform;if(a&&(i.style.transform=`none`),o&&(i.style.webkitTransform=`none`),n.roundLengths)w=e.isHorizontal()?Y(i,`width`,!0):Y(i,`height`,!0);else{let e=t(r,`width`),n=t(r,`padding-left`),a=t(r,`padding-right`),o=t(r,`margin-left`),s=t(r,`margin-right`),c=r.getPropertyValue(`box-sizing`);if(c&&c===`border-box`)w=e+o+s;else{let{clientWidth:t,offsetWidth:r}=i;w=e+n+a+o+s+(r-t)}}a&&(i.style.transform=a),o&&(i.style.webkitTransform=o),n.roundLengths&&(w=Math.floor(w))}else w=(v-(n.slidesPerView-1)*y)/n.slidesPerView,n.roundLengths&&(w=Math.floor(w)),i&&(i.style[e.getDirectionLabel(`width`)]=`${w}px`);i&&(i.swiperSlideSize=w),p.push(w),n.centeredSlides?(b=b+w/2+x/2+y,x===0&&r!==0&&(b=b-v/2-y),r===0&&(b=b-v/2-y),Math.abs(b)<1/1e3&&(b=0),n.roundLengths&&(b=Math.floor(b)),S%n.slidesPerGroup===0&&d.push(b),f.push(b)):(n.roundLengths&&(b=Math.floor(b)),(S-Math.min(e.params.slidesPerGroupSkip,S))%e.params.slidesPerGroup===0&&d.push(b),f.push(b),b=b+w+y),e.virtualSize+=w+y,x=w,S+=1}}if(e.virtualSize=Math.max(e.virtualSize,v)+h,a&&o&&(n.effect===`slide`||n.effect===`coverflow`)&&(r.style.width=`${e.virtualSize+y}px`),n.setWrapperSize&&(r.style[e.getDirectionLabel(`width`)]=`${e.virtualSize+y}px`),C&&e.grid.updateWrapperSize(w,d),!n.centeredSlides){let t=n.slidesPerView!==`auto`&&n.slidesPerView%1!=0,r=n.snapToSlideEdge&&!n.loop&&(n.slidesPerView===`auto`||t),i=d.length;if(r){let e;if(n.slidesPerView===`auto`){e=1;let t=0;for(let n=p.length-1;n>=0&&(t+=p[n]+(n<p.length-1?y:0),t<=v);--n)e=p.length-n}else e=Math.floor(n.slidesPerView);i=Math.max(u-e,0)}let a=[];for(let t=0;t<d.length;t+=1){let o=d[t];n.roundLengths&&(o=Math.floor(o)),r?t<=i&&a.push(o):d[t]<=e.virtualSize-v&&a.push(o)}d=a,Math.floor(e.virtualSize-v)-Math.floor(d[d.length-1])>1&&(r||d.push(e.virtualSize-v))}if(s&&n.loop){let t=p[0]+y;if(n.slidesPerGroup>1){let r=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/n.slidesPerGroup),i=t*n.slidesPerGroup;for(let e=0;e<r;e+=1)d.push(d[d.length-1]+i)}for(let r=0;r<e.virtual.slidesBefore+e.virtual.slidesAfter;r+=1)n.slidesPerGroup===1&&d.push(d[d.length-1]+t),f.push(f[f.length-1]+t),e.virtualSize+=t}if(d.length===0&&(d=[0]),y!==0){let t=e.isHorizontal()&&a?`marginLeft`:e.getDirectionLabel(`marginRight`);l.filter((e,t)=>!n.cssMode||n.loop?!0:t!==l.length-1).forEach(e=>{e.style[t]=`${y}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let e=0;p.forEach(t=>{e+=t+(y||0)}),e-=y;let t=e>v?e-v:0;d=d.map(e=>e<=0?-m:e>t?t+h:e)}if(n.centerInsufficientSlides){let e=0;if(p.forEach(t=>{e+=t+(y||0)}),e-=y,e<v){let t=(v-e)/2;d.forEach((e,n)=>{d[n]=e-t}),f.forEach((e,n)=>{f[n]=e+t})}}if(Object.assign(e,{slides:l,snapGrid:d,slidesGrid:f,slidesSizesGrid:p}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){U(r,`--swiper-centered-offset-before`,`${-d[0]}px`),U(r,`--swiper-centered-offset-after`,`${e.size/2-p[p.length-1]/2}px`);let t=-e.snapGrid[0],n=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(e=>e+t),e.slidesGrid=e.slidesGrid.map(e=>e+n)}if(u!==c&&e.emit(`slidesLengthChange`),d.length!==g&&(e.params.watchOverflow&&e.checkOverflow(),e.emit(`snapGridLengthChange`)),f.length!==_&&e.emit(`slidesGridLengthChange`),n.watchSlidesProgress&&e.updateSlidesOffset(),e.emit(`slidesUpdated`),!s&&!n.cssMode&&(n.effect===`slide`||n.effect===`fade`)){let t=`${n.containerModifierClass}backface-hidden`,r=e.el.classList.contains(t);u<=n.maxBackfaceHiddenSlides?r||e.el.classList.add(t):r&&e.el.classList.remove(t)}}function Te(e){let t=this,n=[],r=t.virtual&&t.params.virtual.enabled,i=0,a;typeof e==`number`?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);let o=e=>r?t.slides[t.getSlideIndexByData(e)]:t.slides[e];if(t.params.slidesPerView!==`auto`&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(e=>{n.push(e)});else for(a=0;a<Math.ceil(t.params.slidesPerView);a+=1){let e=t.activeIndex+a;if(e>t.slides.length&&!r)break;n.push(o(e))}else n.push(o(t.activeIndex));for(a=0;a<n.length;a+=1)if(n[a]!==void 0){let e=n[a].offsetHeight;i=e>i?e:i}(i||i===0)&&(t.wrapperEl.style.height=`${i}px`)}function Ee(){let e=this,t=e.slides,n=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let r=0;r<t.length;r+=1)t[r].swiperSlideOffset=(e.isHorizontal()?t[r].offsetLeft:t[r].offsetTop)-n-e.cssOverflowAdjustment()}var De=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function Oe(e=this&&this.translate||0){let t=this,n=t.params,{slides:r,rtlTranslate:i,snapGrid:a}=t;if(r.length===0)return;r[0].swiperSlideOffset===void 0&&t.updateSlidesOffset();let o=-e;i&&(o=e),t.visibleSlidesIndexes=[],t.visibleSlides=[];let s=n.spaceBetween;typeof s==`string`&&s.indexOf(`%`)>=0?s=parseFloat(s.replace(`%`,``))/100*t.size:typeof s==`string`&&(s=parseFloat(s));for(let e=0;e<r.length;e+=1){let c=r[e],l=c.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(l-=r[0].swiperSlideOffset);let u=(o+(n.centeredSlides?t.minTranslate():0)-l)/(c.swiperSlideSize+s),d=(o-a[0]+(n.centeredSlides?t.minTranslate():0)-l)/(c.swiperSlideSize+s),f=-(o-l),p=f+t.slidesSizesGrid[e],m=f>=0&&f<=t.size-t.slidesSizesGrid[e],h=f>=0&&f<t.size-1||p>1&&p<=t.size||f<=0&&p>=t.size;h&&(t.visibleSlides.push(c),t.visibleSlidesIndexes.push(e)),De(c,h,n.slideVisibleClass),De(c,m,n.slideFullyVisibleClass),c.progress=i?-u:u,c.originalProgress=i?-d:d}}function ke(e){let t=this;if(e===void 0){let n=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*n||0}let n=t.params,r=t.maxTranslate()-t.minTranslate(),{progress:i,isBeginning:a,isEnd:o,progressLoop:s}=t,c=a,l=o;if(r===0)i=0,a=!0,o=!0;else{i=(e-t.minTranslate())/r;let n=Math.abs(e-t.minTranslate())<1,s=Math.abs(e-t.maxTranslate())<1;a=n||i<=0,o=s||i>=1,n&&(i=0),s&&(i=1)}if(n.loop){let n=t.getSlideIndexByData(0),r=t.getSlideIndexByData(t.slides.length-1),i=t.slidesGrid[n],a=t.slidesGrid[r],o=t.slidesGrid[t.slidesGrid.length-1],c=Math.abs(e);s=c>=i?(c-i)/o:(c+o-a)/o,s>1&&--s}Object.assign(t,{progress:i,progressLoop:s,isBeginning:a,isEnd:o}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),a&&!c&&t.emit(`reachBeginning toEdge`),o&&!l&&t.emit(`reachEnd toEdge`),(c&&!a||l&&!o)&&t.emit(`fromEdge`),t.emit(`progress`,i)}var Ae=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function je(){let e=this,{slides:t,params:n,slidesEl:r,activeIndex:i}=e,a=e.virtual&&n.virtual.enabled,o=e.grid&&n.grid&&n.grid.rows>1,s=e=>W(r,`.${n.slideClass}${e}, swiper-slide${e}`)[0],c,l,u;if(a)if(n.loop){let t=i-e.virtual.slidesBefore;t<0&&(t=e.virtual.slides.length+t),t>=e.virtual.slides.length&&(t-=e.virtual.slides.length),c=s(`[data-swiper-slide-index="${t}"]`)}else c=s(`[data-swiper-slide-index="${i}"]`);else o?(c=t.find(e=>e.column===i),u=t.find(e=>e.column===i+1),l=t.find(e=>e.column===i-1)):c=t[i];c&&(o||(u=se(c,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!u&&(u=t[0]),l=oe(c,`.${n.slideClass}, swiper-slide`)[0],n.loop)),t.forEach(e=>{Ae(e,e===c,n.slideActiveClass),Ae(e,e===u,n.slideNextClass),Ae(e,e===l,n.slidePrevClass)}),e.emitSlidesClasses()}var Z=(e,t)=>{if(!e||e.destroyed||!e.params)return;let n=t.closest(e.isElement?`swiper-slide`:`.${e.params.slideClass}`);if(n){let t=n.querySelector(`.${e.params.lazyPreloaderClass}`);!t&&e.isElement&&(n.shadowRoot?t=n.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{n.shadowRoot&&(t=n.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),t&&!t.lazyPreloaderManaged&&t.remove())})),t&&!t.lazyPreloaderManaged&&t.remove()}},Me=(e,t)=>{if(!e.slides[t])return;let n=e.slides[t].querySelector(`[loading="lazy"]`);n&&n.removeAttribute(`loading`)},Ne=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext,n=e.slides.length;if(!n||!t||t<0)return;t=Math.min(t,n);let r=e.params.slidesPerView===`auto`?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),i=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){let n=i,a=[n-t];a.push(...Array.from({length:t}).map((e,t)=>n+r+t)),e.slides.forEach((t,n)=>{a.includes(t.column)&&Me(e,n)});return}let a=i+r-1;if(e.params.rewind||e.params.loop)for(let r=i-t;r<=a+t;r+=1){let t=(r%n+n)%n;(t<i||t>a)&&Me(e,t)}else for(let r=Math.max(i-t,0);r<=Math.min(a+t,n-1);r+=1)r!==i&&(r>a||r<i)&&Me(e,r)};function Pe(e){let{slidesGrid:t,params:n}=e,r=e.rtlTranslate?e.translate:-e.translate,i;for(let e=0;e<t.length;e+=1)t[e+1]===void 0?r>=t[e]&&(i=e):r>=t[e]&&r<t[e+1]-(t[e+1]-t[e])/2?i=e:r>=t[e]&&r<t[e+1]&&(i=e+1);return n.normalizeSlideIndex&&(i<0||i===void 0)&&(i=0),i}function Fe(e){let t=this,n=t.rtlTranslate?t.translate:-t.translate,{snapGrid:r,params:i,activeIndex:a,realIndex:o,snapIndex:s}=t,c=e,l,u=e=>{let n=e-t.virtual.slidesBefore;return n<0&&(n=t.virtual.slides.length+n),n>=t.virtual.slides.length&&(n-=t.virtual.slides.length),n};if(c===void 0&&(c=Pe(t)),r.indexOf(n)>=0)l=r.indexOf(n);else{let e=Math.min(i.slidesPerGroupSkip,c);l=e+Math.floor((c-e)/i.slidesPerGroup)}if(l>=r.length&&(l=r.length-1),c===a&&!t.params.loop){l!==s&&(t.snapIndex=l,t.emit(`snapIndexChange`));return}if(c===a&&t.params.loop&&t.virtual&&t.params.virtual.enabled){t.realIndex=u(c);return}let d=t.grid&&i.grid&&i.grid.rows>1,f;if(t.virtual&&i.virtual.enabled)f=i.loop?u(c):c;else if(d){let e=t.slides.find(e=>e.column===c),n=parseInt(e.getAttribute(`data-swiper-slide-index`),10);Number.isNaN(n)&&(n=Math.max(t.slides.indexOf(e),0)),f=Math.floor(n/i.grid.rows)}else if(t.slides[c]){let e=t.slides[c].getAttribute(`data-swiper-slide-index`);f=e?parseInt(e,10):c}else f=c;Object.assign(t,{previousSnapIndex:s,snapIndex:l,previousRealIndex:o,realIndex:f,previousIndex:a,activeIndex:c}),t.initialized&&Ne(t),t.emit(`activeIndexChange`),t.emit(`snapIndexChange`),(t.initialized||t.params.runCallbacksOnInit)&&(o!==f&&t.emit(`realIndexChange`),t.emit(`slideChange`))}function Ie(e,t){let n=this,r=n.params,i=e.closest(`.${r.slideClass}, swiper-slide`);!i&&n.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(e=>{!i&&e.matches&&e.matches(`.${r.slideClass}, swiper-slide`)&&(i=e)});let a=!1,o;if(i){for(let e=0;e<n.slides.length;e+=1)if(n.slides[e]===i){a=!0,o=e;break}}if(i&&a)n.clickedSlide=i,n.virtual&&n.params.virtual.enabled?n.clickedIndex=parseInt(i.getAttribute(`data-swiper-slide-index`),10):n.clickedIndex=o;else{n.clickedSlide=void 0,n.clickedIndex=void 0;return}r.slideToClickedSlide&&n.clickedIndex!==void 0&&n.clickedIndex!==n.activeIndex&&n.slideToClickedSlide()}var Le={updateSize:Ce,updateSlides:we,updateAutoHeight:Te,updateSlidesOffset:Ee,updateSlidesProgress:Oe,updateProgress:ke,updateSlidesClasses:je,updateActiveIndex:Fe,updateClickedSlide:Ie};function Re(e=this.isHorizontal()?`x`:`y`){let t=this,{params:n,rtlTranslate:r,translate:i,wrapperEl:a}=t;if(n.virtualTranslate)return r?-i:i;if(n.cssMode)return i;let o=B(a,e);return o+=t.cssOverflowAdjustment(),r&&(o=-o),o||0}function ze(e,t){let n=this,{rtlTranslate:r,params:i,wrapperEl:a,progress:o}=n,s=0,c=0;n.isHorizontal()?s=r?-e:e:c=e,i.roundLengths&&(s=Math.floor(s),c=Math.floor(c)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?s:c,i.cssMode?a[n.isHorizontal()?`scrollLeft`:`scrollTop`]=n.isHorizontal()?-s:-c:i.virtualTranslate||(n.isHorizontal()?s-=n.cssOverflowAdjustment():c-=n.cssOverflowAdjustment(),a.style.transform=`translate3d(${s}px, ${c}px, 0px)`);let l,u=n.maxTranslate()-n.minTranslate();l=u===0?0:(e-n.minTranslate())/u,l!==o&&n.updateProgress(e),n.emit(`setTranslate`,n.translate,t)}function Be(){return-this.snapGrid[0]}function Ve(){return-this.snapGrid[this.snapGrid.length-1]}function He(e=0,t=this.params.speed,n=!0,r=!0,i){let a=this,{params:o,wrapperEl:s}=a;if(a.animating&&o.preventInteractionOnTransition)return!1;let c=a.minTranslate(),l=a.maxTranslate(),u;if(u=r&&e>c?c:r&&e<l?l:e,a.updateProgress(u),o.cssMode){let e=a.isHorizontal();if(t===0)s[e?`scrollLeft`:`scrollTop`]=-u;else{if(!a.support.smoothScroll)return ne({swiper:a,targetPosition:-u,side:e?`left`:`top`}),!0;s.scrollTo({[e?`left`:`top`]:-u,behavior:`smooth`})}return!0}return t===0?(a.setTransition(0),a.setTranslate(u),n&&(a.emit(`beforeTransitionStart`,t,i),a.emit(`transitionEnd`))):(a.setTransition(t),a.setTranslate(u),n&&(a.emit(`beforeTransitionStart`,t,i),a.emit(`transitionStart`)),a.animating||(a.animating=!0,a.onTranslateToWrapperTransitionEnd||=function(e){!a||a.destroyed||e.target===this&&(a.wrapperEl.removeEventListener(`transitionend`,a.onTranslateToWrapperTransitionEnd),a.onTranslateToWrapperTransitionEnd=null,delete a.onTranslateToWrapperTransitionEnd,a.animating=!1,n&&a.emit(`transitionEnd`))},a.wrapperEl.addEventListener(`transitionend`,a.onTranslateToWrapperTransitionEnd))),!0}var Ue={getTranslate:Re,setTranslate:ze,minTranslate:Be,maxTranslate:Ve,translateTo:He};function We(e,t){let n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${e}ms`,n.wrapperEl.style.transitionDelay=e===0?`0ms`:``),n.emit(`setTransition`,e,t)}function Ge({swiper:e,runCallbacks:t,direction:n,step:r}){let{activeIndex:i,previousIndex:a}=e,o=n;o||=i>a?`next`:i<a?`prev`:`reset`,e.emit(`transition${r}`),t&&o===`reset`?e.emit(`slideResetTransition${r}`):t&&i!==a&&(e.emit(`slideChangeTransition${r}`),o===`next`?e.emit(`slideNextTransition${r}`):e.emit(`slidePrevTransition${r}`))}function Ke(e=!0,t){let n=this,{params:r}=n;r.cssMode||(r.autoHeight&&n.updateAutoHeight(),Ge({swiper:n,runCallbacks:e,direction:t,step:`Start`}))}function qe(e=!0,t){let n=this,{params:r}=n;n.animating=!1,!r.cssMode&&(n.setTransition(0),Ge({swiper:n,runCallbacks:e,direction:t,step:`End`}))}var Je={setTransition:We,transitionStart:Ke,transitionEnd:qe};function Ye(e=0,t,n=!0,r,i){typeof e==`string`&&(e=parseInt(e,10));let a=this,o=e;o<0&&(o=0);let{params:s,snapGrid:c,slidesGrid:l,previousIndex:u,activeIndex:d,rtlTranslate:f,wrapperEl:p,enabled:m}=a;if(!m&&!r&&!i||a.destroyed||a.animating&&s.preventInteractionOnTransition)return!1;t===void 0&&(t=a.params.speed);let h=Math.min(a.params.slidesPerGroupSkip,o),g=h+Math.floor((o-h)/a.params.slidesPerGroup);g>=c.length&&(g=c.length-1);let _=-c[g];if(s.normalizeSlideIndex)for(let e=0;e<l.length;e+=1){let t=-Math.floor(_*100),n=Math.floor(l[e]*100),r=Math.floor(l[e+1]*100);l[e+1]===void 0?t>=n&&(o=e):t>=n&&t<r-(r-n)/2?o=e:t>=n&&t<r&&(o=e+1)}if(a.initialized&&o!==d&&(!a.allowSlideNext&&(f?_>a.translate&&_>a.minTranslate():_<a.translate&&_<a.minTranslate())||!a.allowSlidePrev&&_>a.translate&&_>a.maxTranslate()&&(d||0)!==o))return!1;o!==(u||0)&&n&&a.emit(`beforeSlideChangeStart`),a.updateProgress(_);let v;v=o>d?`next`:o<d?`prev`:`reset`;let y=a.virtual&&a.params.virtual.enabled;if(!(y&&i)&&(f&&-_===a.translate||!f&&_===a.translate))return a.updateActiveIndex(o),s.autoHeight&&a.updateAutoHeight(),a.updateSlidesClasses(),s.effect!==`slide`&&a.setTranslate(_),v!==`reset`&&(a.transitionStart(n,v),a.transitionEnd(n,v)),!1;if(s.cssMode){let e=a.isHorizontal(),n=f?_:-_;if(t===0)y&&(a.wrapperEl.style.scrollSnapType=`none`,a._immediateVirtual=!0),y&&!a._cssModeVirtualInitialSet&&a.params.initialSlide>0?(a._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{p[e?`scrollLeft`:`scrollTop`]=n})):p[e?`scrollLeft`:`scrollTop`]=n,y&&requestAnimationFrame(()=>{a.wrapperEl.style.scrollSnapType=``,a._immediateVirtual=!1});else{if(!a.support.smoothScroll)return ne({swiper:a,targetPosition:n,side:e?`left`:`top`}),!0;p.scrollTo({[e?`left`:`top`]:n,behavior:`smooth`})}return!0}let b=ye().isSafari;return y&&!i&&b&&a.isElement&&a.virtual.update(!1,!1,o),a.setTransition(t),a.setTranslate(_),a.updateActiveIndex(o),a.updateSlidesClasses(),a.emit(`beforeTransitionStart`,t,r),a.transitionStart(n,v),t===0?a.transitionEnd(n,v):a.animating||(a.animating=!0,a.onSlideToWrapperTransitionEnd||=function(e){!a||a.destroyed||e.target===this&&(a.wrapperEl.removeEventListener(`transitionend`,a.onSlideToWrapperTransitionEnd),a.onSlideToWrapperTransitionEnd=null,delete a.onSlideToWrapperTransitionEnd,a.transitionEnd(n,v))},a.wrapperEl.addEventListener(`transitionend`,a.onSlideToWrapperTransitionEnd)),!0}function Xe(e=0,t,n=!0,r){typeof e==`string`&&(e=parseInt(e,10));let i=this;if(i.destroyed)return;t===void 0&&(t=i.params.speed);let a=i.grid&&i.params.grid&&i.params.grid.rows>1,o=e;if(i.params.loop)if(i.virtual&&i.params.virtual.enabled)o+=i.virtual.slidesBefore;else{let e;if(a){let t=o*i.params.grid.rows;e=i.slides.find(e=>e.getAttribute(`data-swiper-slide-index`)*1===t).column}else e=i.getSlideIndexByData(o);let t=a?Math.ceil(i.slides.length/i.params.grid.rows):i.slides.length,{centeredSlides:n,slidesOffsetBefore:s,slidesOffsetAfter:c}=i.params,l=n||!!s||!!c,u=i.params.slidesPerView;u===`auto`?u=i.slidesPerViewDynamic():(u=Math.ceil(parseFloat(i.params.slidesPerView,10)),l&&u%2==0&&(u+=1));let d=t-e<u;if(l&&(d||=e<Math.ceil(u/2)),r&&l&&i.params.slidesPerView!==`auto`&&!a&&(d=!1),d){let n=l?e<i.activeIndex?`prev`:`next`:e-i.activeIndex-1<i.params.slidesPerView?`next`:`prev`;i.loopFix({direction:n,slideTo:!0,activeSlideIndex:n===`next`?e+1:e-t+1,slideRealIndex:n===`next`?i.realIndex:void 0})}if(a){let e=o*i.params.grid.rows;o=i.slides.find(t=>t.getAttribute(`data-swiper-slide-index`)*1===e).column}else o=i.getSlideIndexByData(o)}return requestAnimationFrame(()=>{i.slideTo(o,t,n,r)}),i}function Ze(e,t=!0,n){let r=this,{enabled:i,params:a,animating:o}=r;if(!i||r.destroyed)return r;e===void 0&&(e=r.params.speed);let s=a.slidesPerGroup;a.slidesPerView===`auto`&&a.slidesPerGroup===1&&a.slidesPerGroupAuto&&(s=Math.max(r.slidesPerViewDynamic(`current`,!0),1));let c=r.activeIndex<a.slidesPerGroupSkip?1:s,l=r.virtual&&a.virtual.enabled;if(a.loop){if(o&&!l&&a.loopPreventsSliding)return!1;if(r.loopFix({direction:`next`}),r._clientLeft=r.wrapperEl.clientLeft,r.activeIndex===r.slides.length-1&&a.cssMode)return requestAnimationFrame(()=>{r.slideTo(r.activeIndex+c,e,t,n)}),!0}return a.rewind&&r.isEnd?r.slideTo(0,e,t,n):r.slideTo(r.activeIndex+c,e,t,n)}function Qe(e,t=!0,n){let r=this,{params:i,snapGrid:a,slidesGrid:o,rtlTranslate:s,enabled:c,animating:l}=r;if(!c||r.destroyed)return r;e===void 0&&(e=r.params.speed);let u=r.virtual&&i.virtual.enabled;if(i.loop){if(l&&!u&&i.loopPreventsSliding)return!1;r.loopFix({direction:`prev`}),r._clientLeft=r.wrapperEl.clientLeft}let d=s?r.translate:-r.translate;function f(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e)}let p=f(d),m=a.map(e=>f(e)),h=i.freeMode&&i.freeMode.enabled,g=a[m.indexOf(p)-1];if(g===void 0&&(i.cssMode||h)){let e;a.forEach((t,n)=>{p>=t&&(e=n)}),e!==void 0&&(g=h?a[e]:a[e>0?e-1:e])}let _=0;if(g!==void 0&&(_=o.indexOf(g),_<0&&(_=r.activeIndex-1),i.slidesPerView===`auto`&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(_=_-r.slidesPerViewDynamic(`previous`,!0)+1,_=Math.max(_,0))),i.rewind&&r.isBeginning){let i=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(i,e,t,n)}else if(i.loop&&r.activeIndex===0&&i.cssMode)return requestAnimationFrame(()=>{r.slideTo(_,e,t,n)}),!0;return r.slideTo(_,e,t,n)}function $e(e,t=!0,n){let r=this;if(!r.destroyed)return e===void 0&&(e=r.params.speed),r.slideTo(r.activeIndex,e,t,n)}function et(e,t=!0,n,r=.5){let i=this;if(i.destroyed)return;e===void 0&&(e=i.params.speed);let a=i.activeIndex,o=Math.min(i.params.slidesPerGroupSkip,a),s=o+Math.floor((a-o)/i.params.slidesPerGroup),c=i.rtlTranslate?i.translate:-i.translate;if(c>=i.snapGrid[s]){let e=i.snapGrid[s],t=i.snapGrid[s+1];c-e>(t-e)*r&&(a+=i.params.slidesPerGroup)}else{let e=i.snapGrid[s-1],t=i.snapGrid[s];c-e<=(t-e)*r&&(a-=i.params.slidesPerGroup)}return a=Math.max(a,0),a=Math.min(a,i.slidesGrid.length-1),i.slideTo(a,e,t,n)}function tt(){let e=this;if(e.destroyed)return;let{params:t,slidesEl:n}=e,r=t.slidesPerView===`auto`?e.slidesPerViewDynamic():t.slidesPerView,i=e.getSlideIndexWhenGrid(e.clickedIndex),a,o=e.isElement?`swiper-slide`:`.${t.slideClass}`,s=e.grid&&e.params.grid&&e.params.grid.rows>1;if(t.loop){if(e.animating)return;a=parseInt(e.clickedSlide.getAttribute(`data-swiper-slide-index`),10),t.centeredSlides?e.slideToLoop(a):i>(s?(e.slides.length-r)/2-(e.params.grid.rows-1):e.slides.length-r)?(e.loopFix(),i=e.getSlideIndex(W(n,`${o}[data-swiper-slide-index="${a}"]`)[0]),L(()=>{e.slideTo(i)})):e.slideTo(i)}else e.slideTo(i)}var nt={slideTo:Ye,slideToLoop:Xe,slideNext:Ze,slidePrev:Qe,slideReset:$e,slideToClosest:et,slideToClickedSlide:tt};function rt(e,t){let n=this,{params:r,slidesEl:i}=n;if(!r.loop||n.virtual&&n.params.virtual.enabled)return;let a=()=>{W(i,`.${r.slideClass}, swiper-slide`).forEach((e,t)=>{e.setAttribute(`data-swiper-slide-index`,t)})},o=()=>{let e=W(i,`.${r.slideBlankClass}`);e.forEach(e=>{e.remove()}),e.length>0&&(n.recalcSlides(),n.updateSlides())},s=n.grid&&r.grid&&r.grid.rows>1;r.loopAddBlankSlides&&(r.slidesPerGroup>1||s)&&o();let c=r.slidesPerGroup*(s?r.grid.rows:1),l=n.slides.length%c!==0,u=s&&n.slides.length%r.grid.rows!==0,d=e=>{for(let t=0;t<e;t+=1){let e=n.isElement?K(`swiper-slide`,[r.slideBlankClass]):K(`div`,[r.slideClass,r.slideBlankClass]);n.slidesEl.append(e)}};l?(r.loopAddBlankSlides?(d(c-n.slides.length%c),n.recalcSlides(),n.updateSlides()):G(`Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)`),a()):(u&&(r.loopAddBlankSlides?(d(r.grid.rows-n.slides.length%r.grid.rows),n.recalcSlides(),n.updateSlides()):G(`Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)`)),a());let f=r.centeredSlides||!!r.slidesOffsetBefore||!!r.slidesOffsetAfter;n.loopFix({slideRealIndex:e,direction:f?void 0:`next`,initial:t})}function it({slideRealIndex:e,slideTo:t=!0,direction:n,setTranslate:r,activeSlideIndex:i,initial:a,byController:o,byMousewheel:s}={}){let c=this;if(!c.params.loop)return;c.emit(`beforeLoopFix`);let{slides:l,allowSlidePrev:u,allowSlideNext:d,slidesEl:f,params:p}=c,{centeredSlides:m,slidesOffsetBefore:h,slidesOffsetAfter:g,initialSlide:_}=p,v=m||!!h||!!g;if(c.allowSlidePrev=!0,c.allowSlideNext=!0,c.virtual&&p.virtual.enabled){t&&(!v&&c.snapIndex===0?c.slideTo(c.virtual.slides.length,0,!1,!0):v&&c.snapIndex<p.slidesPerView?c.slideTo(c.virtual.slides.length+c.snapIndex,0,!1,!0):c.snapIndex===c.snapGrid.length-1&&c.slideTo(c.virtual.slidesBefore,0,!1,!0)),c.allowSlidePrev=u,c.allowSlideNext=d,c.emit(`loopFix`);return}let y=p.slidesPerView;y===`auto`?y=c.slidesPerViewDynamic():(y=Math.ceil(parseFloat(p.slidesPerView,10)),v&&y%2==0&&(y+=1));let b=p.slidesPerGroupAuto?y:p.slidesPerGroup,x=v?Math.max(b,Math.ceil(y/2)):b;x%b!==0&&(x+=b-x%b),x+=p.loopAdditionalSlides,c.loopedSlides=x;let S=c.grid&&p.grid&&p.grid.rows>1;l.length<y+x||c.params.effect===`cards`&&l.length<y+x*2?G(`Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters`):S&&p.grid.fill===`row`&&G("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");let C=[],w=[],T=S?Math.ceil(l.length/p.grid.rows):l.length,E=a&&T-_<y&&!v,D=E?_:c.activeIndex;i===void 0?i=c.getSlideIndex(l.find(e=>e.classList.contains(p.slideActiveClass))):D=i;let O=n===`next`||!n,k=n===`prev`||!n,A=0,j=0,M=(S?l[i].column:i)+(v&&r===void 0?-y/2+.5:0);if(M<x){A=Math.max(x-M,b);for(let e=0;e<x-M;e+=1){let t=e-Math.floor(e/T)*T;if(S){let e=T-t-1;for(let t=l.length-1;t>=0;--t)l[t].column===e&&C.push(t)}else C.push(T-t-1)}}else if(M+y>T-x){j=Math.max(M-(T-x*2),b),E&&(j=Math.max(j,y-T+_+1));for(let e=0;e<j;e+=1){let t=e-Math.floor(e/T)*T;S?l.forEach((e,n)=>{e.column===t&&w.push(n)}):w.push(t)}}if(c.__preventObserver__=!0,requestAnimationFrame(()=>{c.__preventObserver__=!1}),c.params.effect===`cards`&&l.length<y+x*2&&(w.includes(i)&&w.splice(w.indexOf(i),1),C.includes(i)&&C.splice(C.indexOf(i),1)),k&&C.forEach(e=>{l[e].swiperLoopMoveDOM=!0,f.prepend(l[e]),l[e].swiperLoopMoveDOM=!1}),O&&w.forEach(e=>{l[e].swiperLoopMoveDOM=!0,f.append(l[e]),l[e].swiperLoopMoveDOM=!1}),c.recalcSlides(),p.slidesPerView===`auto`?c.updateSlides():S&&(C.length>0&&k||w.length>0&&O)&&c.slides.forEach((e,t)=>{c.grid.updateSlide(t,e,c.slides)}),p.watchSlidesProgress&&c.updateSlidesOffset(),t){if(C.length>0&&k){if(e===void 0){let e=c.slidesGrid[D],t=c.slidesGrid[D+A]-e;s?c.setTranslate(c.translate-t):(c.slideTo(D+Math.ceil(A),0,!1,!0),r&&(c.touchEventsData.startTranslate=c.touchEventsData.startTranslate-t,c.touchEventsData.currentTranslate=c.touchEventsData.currentTranslate-t))}else if(r){let e=S?C.length/p.grid.rows:C.length;c.slideTo(c.activeIndex+e,0,!1,!0),c.touchEventsData.currentTranslate=c.translate}}else if(w.length>0&&O)if(e===void 0){let e=c.slidesGrid[D],t=c.slidesGrid[D-j]-e;s?c.setTranslate(c.translate-t):(c.slideTo(D-j,0,!1,!0),r&&(c.touchEventsData.startTranslate=c.touchEventsData.startTranslate-t,c.touchEventsData.currentTranslate=c.touchEventsData.currentTranslate-t))}else{let e=S?w.length/p.grid.rows:w.length;c.slideTo(c.activeIndex-e,0,!1,!0)}}if(c.allowSlidePrev=u,c.allowSlideNext=d,c.controller&&c.controller.control&&!o){let a={slideRealIndex:e,direction:n,setTranslate:r,activeSlideIndex:i,byController:!0};Array.isArray(c.controller.control)?c.controller.control.forEach(e=>{!e.destroyed&&e.params.loop&&e.loopFix({...a,slideTo:e.params.slidesPerView===p.slidesPerView?t:!1})}):c.controller.control instanceof c.constructor&&c.controller.control.params.loop&&c.controller.control.loopFix({...a,slideTo:c.controller.control.params.slidesPerView===p.slidesPerView?t:!1})}c.emit(`loopFix`)}function at(){let e=this,{params:t,slidesEl:n}=e;if(!t.loop||!n||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();let r=[];e.slides.forEach(e=>{let t=e.swiperSlideIndex===void 0?e.getAttribute(`data-swiper-slide-index`)*1:e.swiperSlideIndex;r[t]=e}),e.slides.forEach(e=>{e.removeAttribute(`data-swiper-slide-index`)}),r.forEach(e=>{n.append(e)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var ot={loopCreate:rt,loopFix:it,loopDestroy:at};function st(e){let t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;let n=t.params.touchEventsTarget===`container`?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),n.style.cursor=`move`,n.style.cursor=e?`grabbing`:`grab`,t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function ct(){let e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget===`container`?`el`:`wrapperEl`].style.cursor=``,e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var lt={setGrabCursor:st,unsetGrabCursor:ct};function ut(e,t=this){function n(t){if(!t||t===N()||t===F())return null;t.assignedSlot&&(t=t.assignedSlot);let r=t.closest(e);return!r&&!t.getRootNode?null:r||n(t.getRootNode().host)}return n(t)}function dt(e,t,n){let r=F(),{params:i}=e,a=i.edgeSwipeDetection,o=i.edgeSwipeThreshold;return a&&(n<=o||n>=r.innerWidth-o)?a===`prevent`?(t.preventDefault(),!0):!1:!0}function ft(e){let t=this;if(t.destroyed)return;let n=N(),r=e;r.originalEvent&&(r=r.originalEvent);let i=t.touchEventsData;if(r.type===`pointerdown`){if(i.pointerId!==null&&i.pointerId!==r.pointerId)return;i.pointerId=r.pointerId}else r.type===`touchstart`&&r.targetTouches.length===1&&(i.touchId=r.targetTouches[0].identifier);if(r.type===`touchstart`){dt(t,r,r.targetTouches[0].pageX);return}let{params:a,touches:o,enabled:s}=t;if(!s||!a.simulateTouch&&r.pointerType===`mouse`||t.animating&&a.preventInteractionOnTransition)return;!t.animating&&a.cssMode&&a.loop&&t.loopFix();let c=r.target;if(a.touchEventsTarget===`wrapper`&&!ae(c,t.wrapperEl)||`which`in r&&r.which===3||`button`in r&&r.button>0||i.isTouched&&i.isMoved)return;let l=!!a.noSwipingClass&&a.noSwipingClass!==``,u=r.composedPath?r.composedPath():r.path;l&&r.target&&r.target.shadowRoot&&u&&(c=u[0]);let d=a.noSwipingSelector?a.noSwipingSelector:`.${a.noSwipingClass}`,f=!!(r.target&&r.target.shadowRoot);if(a.noSwiping&&(f?ut(d,c):c.closest(d))){t.allowClick=!0;return}if(a.swipeHandler&&!c.closest(a.swipeHandler))return;o.currentX=r.pageX,o.currentY=r.pageY;let p=o.currentX,m=o.currentY;if(!dt(t,r,p))return;Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=p,o.startY=m,i.touchStartTime=R(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,a.threshold>0&&(i.allowThresholdMove=!1);let h=!0;c.matches(i.focusableElements)&&(h=!1,c.nodeName===`SELECT`&&(i.isTouched=!1)),n.activeElement&&n.activeElement.matches(i.focusableElements)&&n.activeElement!==c&&(r.pointerType===`mouse`||r.pointerType!==`mouse`&&!c.matches(i.focusableElements))&&n.activeElement.blur();let g=h&&t.allowTouchMove&&a.touchStartPreventDefault;(a.touchStartForcePreventDefault||g)&&!c.isContentEditable&&r.preventDefault(),a.freeMode&&a.freeMode.enabled&&t.freeMode&&t.animating&&!a.cssMode&&t.freeMode.onTouchStart(),t.emit(`touchStart`,r)}function pt(e){let t=N(),n=this;if(n.destroyed)return;let r=n.touchEventsData,{params:i,touches:a,rtlTranslate:o,enabled:s}=n;if(!s||!i.simulateTouch&&e.pointerType===`mouse`)return;let c=e;if(c.originalEvent&&(c=c.originalEvent),c.type===`pointermove`&&(r.touchId!==null||c.pointerId!==r.pointerId))return;let l;if(c.type===`touchmove`){if(l=[...c.changedTouches].find(e=>e.identifier===r.touchId),!l||l.identifier!==r.touchId)return}else l=c;if(!r.isTouched){r.startMoving&&r.isScrolling&&n.emit(`touchMoveOpposite`,c);return}let u=l.pageX,d=l.pageY;if(c.preventedByNestedSwiper){a.startX=u,a.startY=d;return}if(!n.allowTouchMove){c.target.matches(r.focusableElements)||(n.allowClick=!1),r.isTouched&&(Object.assign(a,{startX:u,startY:d,currentX:u,currentY:d}),r.touchStartTime=R());return}if(i.touchReleaseOnEdges&&!i.loop){if(n.isVertical()){if(d<a.startY&&n.translate<=n.maxTranslate()||d>a.startY&&n.translate>=n.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else if(o&&(u>a.startX&&-n.translate<=n.maxTranslate()||u<a.startX&&-n.translate>=n.minTranslate()))return;else if(!o&&(u<a.startX&&n.translate<=n.maxTranslate()||u>a.startX&&n.translate>=n.minTranslate()))return}if(t.activeElement&&t.activeElement.matches(r.focusableElements)&&t.activeElement!==c.target&&c.pointerType!==`mouse`&&t.activeElement.blur(),t.activeElement&&c.target===t.activeElement&&c.target.matches(r.focusableElements)){r.isMoved=!0,n.allowClick=!1;return}r.allowTouchCallbacks&&n.emit(`touchMove`,c),a.previousX=a.currentX,a.previousY=a.currentY,a.currentX=u,a.currentY=d;let f=a.currentX-a.startX,p=a.currentY-a.startY;if(n.params.threshold&&Math.sqrt(f**2+p**2)<n.params.threshold)return;if(r.isScrolling===void 0){let e;n.isHorizontal()&&a.currentY===a.startY||n.isVertical()&&a.currentX===a.startX?r.isScrolling=!1:f*f+p*p>=25&&(e=Math.atan2(Math.abs(p),Math.abs(f))*180/Math.PI,r.isScrolling=n.isHorizontal()?e>i.touchAngle:90-e>i.touchAngle)}if(r.isScrolling&&n.emit(`touchMoveOpposite`,c),r.startMoving===void 0&&(a.currentX!==a.startX||a.currentY!==a.startY)&&(r.startMoving=!0),r.isScrolling||c.type===`touchmove`&&r.preventTouchMoveFromPointerMove){r.isTouched=!1;return}if(!r.startMoving)return;n.allowClick=!1,!i.cssMode&&c.cancelable&&c.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&c.stopPropagation();let m=n.isHorizontal()?f:p,h=n.isHorizontal()?a.currentX-a.previousX:a.currentY-a.previousY;i.oneWayMovement&&(m=Math.abs(m)*(o?1:-1),h=Math.abs(h)*(o?1:-1)),a.diff=m,m*=i.touchRatio,o&&(m=-m,h=-h);let g=n.touchesDirection;n.swipeDirection=m>0?`prev`:`next`,n.touchesDirection=h>0?`prev`:`next`;let _=n.params.loop&&!i.cssMode,v=n.touchesDirection===`next`&&n.allowSlideNext||n.touchesDirection===`prev`&&n.allowSlidePrev;if(!r.isMoved){if(_&&v&&n.loopFix({direction:n.swipeDirection}),r.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){let e=new window.CustomEvent(`transitionend`,{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});n.wrapperEl.dispatchEvent(e)}r.allowMomentumBounce=!1,i.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit(`sliderFirstMove`,c)}if(new Date().getTime(),i._loopSwapReset!==!1&&r.isMoved&&r.allowThresholdMove&&g!==n.touchesDirection&&_&&v&&Math.abs(m)>=1){Object.assign(a,{startX:u,startY:d,currentX:u,currentY:d,startTranslate:r.currentTranslate}),r.loopSwapReset=!0,r.startTranslate=r.currentTranslate;return}n.emit(`sliderMove`,c),r.isMoved=!0,r.currentTranslate=m+r.startTranslate;let y=!0,b=i.resistanceRatio;if(i.touchReleaseOnEdges&&(b=0),m>0?(_&&v&&r.allowThresholdMove&&r.currentTranslate>(i.centeredSlides?n.minTranslate()-n.slidesSizesGrid[n.activeIndex+1]-(i.slidesPerView!==`auto`&&n.slides.length-i.slidesPerView>=2?n.slidesSizesGrid[n.activeIndex+1]+n.params.spaceBetween:0)-n.params.spaceBetween:n.minTranslate())&&n.loopFix({direction:`prev`,setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>n.minTranslate()&&(y=!1,i.resistance&&(r.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+r.startTranslate+m)**b))):m<0&&(_&&v&&r.allowThresholdMove&&r.currentTranslate<(i.centeredSlides?n.maxTranslate()+n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween+(i.slidesPerView!==`auto`&&n.slides.length-i.slidesPerView>=2?n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween:0):n.maxTranslate())&&n.loopFix({direction:`next`,setTranslate:!0,activeSlideIndex:n.slides.length-(i.slidesPerView===`auto`?n.slidesPerViewDynamic():Math.ceil(parseFloat(i.slidesPerView,10)))}),r.currentTranslate<n.maxTranslate()&&(y=!1,i.resistance&&(r.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-r.startTranslate-m)**b))),y&&(c.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection===`next`&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&n.swipeDirection===`prev`&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(r.currentTranslate=r.startTranslate),i.threshold>0)if(Math.abs(m)>i.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,a.startX=a.currentX,a.startY=a.currentY,r.currentTranslate=r.startTranslate,a.diff=n.isHorizontal()?a.currentX-a.startX:a.currentY-a.startY;return}}else{r.currentTranslate=r.startTranslate;return}!i.followFinger||i.cssMode||((i.freeMode&&i.freeMode.enabled&&n.freeMode||i.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),i.freeMode&&i.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(r.currentTranslate),n.setTranslate(r.currentTranslate))}function mt(e){let t=this;if(t.destroyed)return;let n=t.touchEventsData,r=e;r.originalEvent&&(r=r.originalEvent);let i;if(!(r.type===`touchend`||r.type===`touchcancel`)){if(n.touchId!==null||r.pointerId!==n.pointerId)return;i=r}else if(i=[...r.changedTouches].find(e=>e.identifier===n.touchId),!i||i.identifier!==n.touchId)return;if([`pointercancel`,`pointerout`,`pointerleave`,`contextmenu`].includes(r.type)&&!([`pointercancel`,`contextmenu`].includes(r.type)&&(t.browser.isSafari||t.browser.isWebView)))return;n.pointerId=null,n.touchId=null;let{params:a,touches:o,rtlTranslate:s,slidesGrid:c,enabled:l}=t;if(!l||!a.simulateTouch&&r.pointerType===`mouse`)return;if(n.allowTouchCallbacks&&t.emit(`touchEnd`,r),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&a.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}a.grabCursor&&n.isMoved&&n.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);let u=R(),d=u-n.touchStartTime;if(t.allowClick){let e=r.path||r.composedPath&&r.composedPath();t.updateClickedSlide(e&&e[0]||r.target,e),t.emit(`tap click`,r),d<300&&u-n.lastClickTime<300&&t.emit(`doubleTap doubleClick`,r)}if(n.lastClickTime=R(),L(()=>{t.destroyed||(t.allowClick=!0)}),!n.isTouched||!n.isMoved||!t.swipeDirection||o.diff===0&&!n.loopSwapReset||n.currentTranslate===n.startTranslate&&!n.loopSwapReset){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let f;if(f=a.followFinger?s?t.translate:-t.translate:-n.currentTranslate,a.cssMode)return;if(a.freeMode&&a.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:f});return}let p=f>=-t.maxTranslate()&&!t.params.loop,m=0,h=t.slidesSizesGrid[0];for(let e=0;e<c.length;e+=e<a.slidesPerGroupSkip?1:a.slidesPerGroup){let t=e<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;c[e+t]===void 0?(p||f>=c[e])&&(m=e,h=c[c.length-1]-c[c.length-2]):(p||f>=c[e]&&f<c[e+t])&&(m=e,h=c[e+t]-c[e])}let g=null,_=null;a.rewind&&(t.isBeginning?_=a.virtual&&a.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(g=0));let v=(f-c[m])/h,y=m<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;if(d>a.longSwipesMs){if(!a.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection===`next`&&(v>=a.longSwipesRatio?t.slideTo(a.rewind&&t.isEnd?g:m+y):t.slideTo(m)),t.swipeDirection===`prev`&&(v>1-a.longSwipesRatio?t.slideTo(m+y):_!==null&&v<0&&Math.abs(v)>a.longSwipesRatio?t.slideTo(_):t.slideTo(m))}else{if(!a.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(r.target===t.navigation.nextEl||r.target===t.navigation.prevEl)?r.target===t.navigation.nextEl?t.slideTo(m+y):t.slideTo(m):(t.swipeDirection===`next`&&t.slideTo(g===null?m+y:g),t.swipeDirection===`prev`&&t.slideTo(_===null?m:_))}}function ht(){let e=this,{params:t,el:n}=e;if(n&&n.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();let{allowSlideNext:r,allowSlidePrev:i,snapGrid:a}=e,o=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();let s=o&&t.loop;if((t.slidesPerView===`auto`||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!s){let t=o?e.virtual.slides:e.slides;e.slideTo(t.length-1,0,!1,!0)}else e.params.loop&&!o?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0);e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=i,e.allowSlideNext=r,e.params.watchOverflow&&a!==e.snapGrid&&e.checkOverflow()}function gt(e){let t=this;t.destroyed||t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function _t(){let e=this;if(e.destroyed)return;let{wrapperEl:t,rtlTranslate:n,enabled:r}=e;if(!r)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let i,a=e.maxTranslate()-e.minTranslate();i=a===0?0:(e.translate-e.minTranslate())/a,i!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit(`setTranslate`,e.translate,!1)}function vt(e){let t=this;t.destroyed||(Z(t,e.target),!(t.params.cssMode||t.params.slidesPerView!==`auto`&&!t.params.autoHeight)&&t.update())}function yt(){let e=this;e.destroyed||e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction=`auto`))}var bt=(e,t)=>{let n=N(),{params:r,el:i,wrapperEl:a,device:o}=e,s=!!r.nested,c=t===`on`?`addEventListener`:`removeEventListener`,l=t;!i||typeof i==`string`||(n[c](`touchstart`,e.onDocumentTouchStart,{passive:!1,capture:s}),i[c](`touchstart`,e.onTouchStart,{passive:!1}),i[c](`pointerdown`,e.onTouchStart,{passive:!1}),n[c](`touchmove`,e.onTouchMove,{passive:!1,capture:s}),n[c](`pointermove`,e.onTouchMove,{passive:!1,capture:s}),n[c](`touchend`,e.onTouchEnd,{passive:!0}),n[c](`pointerup`,e.onTouchEnd,{passive:!0}),n[c](`pointercancel`,e.onTouchEnd,{passive:!0}),n[c](`touchcancel`,e.onTouchEnd,{passive:!0}),n[c](`pointerout`,e.onTouchEnd,{passive:!0}),n[c](`pointerleave`,e.onTouchEnd,{passive:!0}),n[c](`contextmenu`,e.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&i[c](`click`,e.onClick,!0),r.cssMode&&a[c](`scroll`,e.onScroll),r.updateOnWindowResize?e[l](o.ios||o.android?`resize orientationchange observerUpdate`:`resize observerUpdate`,ht,!0):e[l](`observerUpdate`,ht,!0),i[c](`load`,e.onLoad,{capture:!0}))};function xt(){let e=this,{params:t}=e;e.onTouchStart=ft.bind(e),e.onTouchMove=pt.bind(e),e.onTouchEnd=mt.bind(e),e.onDocumentTouchStart=yt.bind(e),t.cssMode&&(e.onScroll=_t.bind(e)),e.onClick=gt.bind(e),e.onLoad=vt.bind(e),bt(e,`on`)}function St(){bt(this,`off`)}var Ct={attachEvents:xt,detachEvents:St},wt=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function Tt(){let e=this,{realIndex:t,initialized:n,params:r,el:i}=e,a=r.breakpoints;if(!a||a&&Object.keys(a).length===0)return;let o=N(),s=r.breakpointsBase===`window`||!r.breakpointsBase?r.breakpointsBase:`container`,c=[`window`,`container`].includes(r.breakpointsBase)||!r.breakpointsBase?e.el:o.querySelector(r.breakpointsBase),l=e.getBreakpoint(a,s,c);if(!l||e.currentBreakpoint===l)return;let u=(l in a?a[l]:void 0)||e.originalParams,d=wt(e,r),f=wt(e,u),p=e.params.grabCursor,m=u.grabCursor,h=r.enabled;d&&!f?(i.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),e.emitContainerClasses()):!d&&f&&(i.classList.add(`${r.containerModifierClass}grid`),(u.grid.fill&&u.grid.fill===`column`||!u.grid.fill&&r.grid.fill===`column`)&&i.classList.add(`${r.containerModifierClass}grid-column`),e.emitContainerClasses()),p&&!m?e.unsetGrabCursor():!p&&m&&e.setGrabCursor(),[`navigation`,`pagination`,`scrollbar`].forEach(t=>{if(u[t]===void 0)return;let n=r[t]&&r[t].enabled,i=u[t]&&u[t].enabled;n&&!i&&e[t].disable(),!n&&i&&e[t].enable()});let g=u.direction&&u.direction!==r.direction,_=r.loop&&(u.slidesPerView!==r.slidesPerView||g),v=r.loop;g&&n&&e.changeDirection(),H(e.params,u);let y=e.params.enabled,b=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),h&&!y?e.disable():!h&&y&&e.enable(),e.currentBreakpoint=l,e.emit(`_beforeBreakpoint`,u),n&&(_?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!v&&b?(e.loopCreate(t),e.updateSlides()):v&&!b&&e.loopDestroy()),e.emit(`breakpoint`,u)}function Et(e,t=`window`,n){if(!e||t===`container`&&!n)return;let r=!1,i=F(),a=t===`window`?i.innerHeight:n.clientHeight,o=Object.keys(e).map(e=>typeof e==`string`&&e.indexOf(`@`)===0?{value:a*parseFloat(e.substr(1)),point:e}:{value:e,point:e});o.sort((e,t)=>parseInt(e.value,10)-parseInt(t.value,10));for(let e=0;e<o.length;e+=1){let{point:a,value:s}=o[e];t===`window`?i.matchMedia(`(min-width: ${s}px)`).matches&&(r=a):s<=n.clientWidth&&(r=a)}return r||`max`}var Dt={setBreakpoint:Tt,getBreakpoint:Et};function Ot(e,t){let n=[];return e.forEach(e=>{typeof e==`object`?Object.keys(e).forEach(r=>{e[r]&&n.push(t+r)}):typeof e==`string`&&n.push(t+e)}),n}function kt(){let e=this,{classNames:t,params:n,rtl:r,el:i,device:a}=e,o=Ot([`initialized`,n.direction,{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:r},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill===`column`},{android:a.android},{ios:a.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...o),i.classList.add(...t),e.emitContainerClasses()}function At(){let e=this,{el:t,classNames:n}=e;!t||typeof t==`string`||(t.classList.remove(...n),e.emitContainerClasses())}var jt={addClasses:kt,removeClasses:At};function Mt(){let e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:r}=n;if(r){let t=e.slides.length-1,n=e.slidesGrid[t]+e.slidesSizesGrid[t]+r*2;e.isLocked=e.size>n}else e.isLocked=e.snapGrid.length===1;n.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),n.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?`lock`:`unlock`)}var Nt={checkOverflow:Mt},Pt={init:!0,direction:`horizontal`,oneWayMovement:!1,swiperElementNodeName:`SWIPER-CONTAINER`,touchEventsTarget:`wrapper`,initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:`swiper`,enabled:!0,focusableElements:`input, select, option, textarea, button, video, label`,width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:`slide`,breakpoints:void 0,breakpointsBase:`window`,spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,snapToSlideEdge:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:`swiper-no-swiping`,noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:`swiper-`,slideClass:`swiper-slide`,slideBlankClass:`swiper-slide-blank`,slideActiveClass:`swiper-slide-active`,slideVisibleClass:`swiper-slide-visible`,slideFullyVisibleClass:`swiper-slide-fully-visible`,slideNextClass:`swiper-slide-next`,slidePrevClass:`swiper-slide-prev`,wrapperClass:`swiper-wrapper`,lazyPreloaderClass:`swiper-lazy-preloader`,lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function Ft(e,t){return function(n={}){let r=Object.keys(n)[0],i=n[r];if(typeof i!=`object`||!i){H(t,n);return}if(e[r]===!0&&(e[r]={enabled:!0}),r===`navigation`&&e[r]&&e[r].enabled&&!e[r].prevEl&&!e[r].nextEl&&(e[r].auto=!0),[`pagination`,`scrollbar`].indexOf(r)>=0&&e[r]&&e[r].enabled&&!e[r].el&&(e[r].auto=!0),!(r in e&&`enabled`in i)){H(t,n);return}typeof e[r]==`object`&&!(`enabled`in e[r])&&(e[r].enabled=!0),e[r]||(e[r]={enabled:!1}),H(t,n)}}var It={eventsEmitter:Se,update:Le,translate:Ue,transition:Je,slide:nt,loop:ot,grabCursor:lt,events:Ct,breakpoints:Dt,checkOverflow:Nt,classes:jt},Lt={},Rt=class e{constructor(...t){let n,r;t.length===1&&t[0].constructor&&Object.prototype.toString.call(t[0]).slice(8,-1)===`Object`?r=t[0]:[n,r]=t,r||={},r=H({},r),n&&!r.el&&(r.el=n);let i=N();if(r.el&&typeof r.el==`string`&&i.querySelectorAll(r.el).length>1){let t=[];return i.querySelectorAll(r.el).forEach(n=>{let i=H({},r,{el:n});t.push(new e(i))}),t}let a=this;a.__swiper__=!0,a.support=pe(),a.device=ge({userAgent:r.userAgent}),a.browser=ye(),a.eventsListeners={},a.eventsAnyListeners=[],a.modules=[...a.__modules__],r.modules&&Array.isArray(r.modules)&&r.modules.forEach(e=>{typeof e==`function`&&a.modules.indexOf(e)<0&&a.modules.push(e)});let o={};return a.modules.forEach(e=>{e({params:r,swiper:a,extendParams:Ft(r,o),on:a.on.bind(a),once:a.once.bind(a),off:a.off.bind(a),emit:a.emit.bind(a)})}),a.params=H({},H({},Pt,o),Lt,r),a.originalParams=H({},a.params),a.passedParams=H({},r),a.params&&a.params.on&&Object.keys(a.params.on).forEach(e=>{a.on(e,a.params.on[e])}),a.params&&a.params.onAny&&a.onAny(a.params.onAny),Object.assign(a,{enabled:a.params.enabled,el:n,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return a.params.direction===`horizontal`},isVertical(){return a.params.direction===`vertical`},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:a.params.allowSlideNext,allowSlidePrev:a.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:a.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:a.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),a.emit(`_swiper`),a.params.init&&a.init(),a}getDirectionLabel(e){return this.isHorizontal()?e:{width:`height`,"margin-top":`margin-left`,"margin-bottom ":`margin-right`,"margin-left":`margin-top`,"margin-right":`margin-bottom`,"padding-left":`padding-top`,"padding-right":`padding-bottom`,marginRight:`marginBottom`}[e]}getSlideIndex(e){let{slidesEl:t,params:n}=this,r=J(W(t,`.${n.slideClass}, swiper-slide`)[0]);return J(e)-r}getSlideIndexByData(e){return this.getSlideIndex(this.slides.find(t=>t.getAttribute(`data-swiper-slide-index`)*1===e))}getSlideIndexWhenGrid(e){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill===`column`?e=Math.floor(e/this.params.grid.rows):this.params.grid.fill===`row`&&(e%=Math.ceil(this.slides.length/this.params.grid.rows))),e}recalcSlides(){let e=this,{slidesEl:t,params:n}=e;e.slides=W(t,`.${n.slideClass}, swiper-slide`)}enable(){let e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit(`enable`))}disable(){let e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit(`disable`))}setProgress(e,t){let n=this;e=Math.min(Math.max(e,0),1);let r=n.minTranslate(),i=(n.maxTranslate()-r)*e+r;n.translateTo(i,t===void 0?0:t),n.updateActiveIndex(),n.updateSlidesClasses()}emitContainerClasses(){let e=this;if(!e.params._emitClasses||!e.el)return;let t=e.el.className.split(` `).filter(t=>t.indexOf(`swiper`)===0||t.indexOf(e.params.containerModifierClass)===0);e.emit(`_containerClasses`,t.join(` `))}getSlideClasses(e){let t=this;return t.destroyed?``:e.className.split(` `).filter(e=>e.indexOf(`swiper-slide`)===0||e.indexOf(t.params.slideClass)===0).join(` `)}emitSlidesClasses(){let e=this;if(!e.params._emitClasses||!e.el)return;let t=[];e.slides.forEach(n=>{let r=e.getSlideClasses(n);t.push({slideEl:n,classNames:r}),e.emit(`_slideClass`,n,r)}),e.emit(`_slideClasses`,t)}slidesPerViewDynamic(e=`current`,t=!1){let{params:n,slides:r,slidesGrid:i,slidesSizesGrid:a,size:o,activeIndex:s}=this,c=1;if(typeof n.slidesPerView==`number`)return n.slidesPerView;if(n.centeredSlides){let e=r[s]?Math.ceil(r[s].swiperSlideSize):0,t;for(let n=s+1;n<r.length;n+=1)r[n]&&!t&&(e+=Math.ceil(r[n].swiperSlideSize),c+=1,e>o&&(t=!0));for(let n=s-1;n>=0;--n)r[n]&&!t&&(e+=r[n].swiperSlideSize,c+=1,e>o&&(t=!0))}else if(e===`current`)for(let e=s+1;e<r.length;e+=1)(t?i[e]+a[e]-i[s]<o:i[e]-i[s]<o)&&(c+=1);else for(let e=s-1;e>=0;--e)i[s]-i[e]<o&&(c+=1);return c}update(){let e=this;if(!e||e.destroyed)return;let{snapGrid:t,params:n}=e;n.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll(`[loading="lazy"]`)].forEach(t=>{t.complete&&Z(e,t)}),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses();function r(){let t=e.rtlTranslate?e.translate*-1:e.translate,n=Math.min(Math.max(t,e.maxTranslate()),e.minTranslate());e.setTranslate(n),e.updateActiveIndex(),e.updateSlidesClasses()}let i;if(n.freeMode&&n.freeMode.enabled&&!n.cssMode)r(),n.autoHeight&&e.updateAutoHeight();else{if((n.slidesPerView===`auto`||n.slidesPerView>1)&&e.isEnd&&!n.centeredSlides){let t=e.virtual&&n.virtual.enabled?e.virtual.slides:e.slides;i=e.slideTo(t.length-1,0,!1,!0)}else i=e.slideTo(e.activeIndex,0,!1,!0);i||r()}n.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit(`update`)}changeDirection(e,t=!0){let n=this,r=n.params.direction;return e||=r===`horizontal`?`vertical`:`horizontal`,e===r||e!==`horizontal`&&e!==`vertical`?n:(n.el.classList.remove(`${n.params.containerModifierClass}${r}`),n.el.classList.add(`${n.params.containerModifierClass}${e}`),n.emitContainerClasses(),n.params.direction=e,n.slides.forEach(t=>{e===`vertical`?t.style.width=``:t.style.height=``}),n.emit(`changeDirection`),t&&n.update(),n)}changeLanguageDirection(e){let t=this;t.rtl&&e===`rtl`||!t.rtl&&e===`ltr`||(t.rtl=e===`rtl`,t.rtlTranslate=t.params.direction===`horizontal`&&t.rtl,t.rtl?(t.el.classList.add(`${t.params.containerModifierClass}rtl`),t.el.dir=`rtl`):(t.el.classList.remove(`${t.params.containerModifierClass}rtl`),t.el.dir=`ltr`),t.update())}mount(e){let t=this;if(t.mounted)return!0;let n=e||t.params.el;if(typeof n==`string`&&(n=document.querySelector(n)),!n)return!1;n.swiper=t,n.parentNode&&n.parentNode.host&&n.parentNode.host.nodeName===t.params.swiperElementNodeName.toUpperCase()&&(t.isElement=!0);let r=()=>`.${(t.params.wrapperClass||``).trim().split(` `).join(`.`)}`,i=n&&n.shadowRoot&&n.shadowRoot.querySelector?n.shadowRoot.querySelector(r()):W(n,r())[0];return!i&&t.params.createElements&&(i=K(`div`,t.params.wrapperClass),n.append(i),W(n,`.${t.params.slideClass}`).forEach(e=>{i.append(e)})),Object.assign(t,{el:n,wrapperEl:i,slidesEl:t.isElement&&!n.parentNode.host.slideSlots?n.parentNode.host:i,hostEl:t.isElement?n.parentNode.host:n,mounted:!0,rtl:n.dir.toLowerCase()===`rtl`||q(n,`direction`)===`rtl`,rtlTranslate:t.params.direction===`horizontal`&&(n.dir.toLowerCase()===`rtl`||q(n,`direction`)===`rtl`),wrongRTL:q(i,`display`)===`-webkit-box`}),!0}init(e){let t=this;if(t.initialized||t.mount(e)===!1)return t;t.emit(`beforeInit`),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.loop&&t.virtual&&t.params.virtual.enabled?t.slideTo(t.params.initialSlide+t.virtual.slidesBefore,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.params.loop&&t.loopCreate(void 0,!0),t.attachEvents();let n=[...t.el.querySelectorAll(`[loading="lazy"]`)];return t.isElement&&n.push(...t.hostEl.querySelectorAll(`[loading="lazy"]`)),n.forEach(e=>{e.complete?Z(t,e):e.addEventListener(`load`,e=>{Z(t,e.target)})}),Ne(t),t.initialized=!0,Ne(t),t.emit(`init`),t.emit(`afterInit`),t}destroy(e=!0,t=!0){let n=this,{params:r,el:i,wrapperEl:a,slides:o}=n;return n.params===void 0||n.destroyed?null:(n.emit(`beforeDestroy`),n.initialized=!1,n.detachEvents(),r.loop&&n.loopDestroy(),t&&(n.removeClasses(),i&&typeof i!=`string`&&i.removeAttribute(`style`),a&&a.removeAttribute(`style`),o&&o.length&&o.forEach(e=>{e.classList.remove(r.slideVisibleClass,r.slideFullyVisibleClass,r.slideActiveClass,r.slideNextClass,r.slidePrevClass),e.removeAttribute(`style`),e.removeAttribute(`data-swiper-slide-index`)})),n.emit(`destroy`),Object.keys(n.eventsListeners).forEach(e=>{n.off(e)}),e!==!1&&(n.el&&typeof n.el!=`string`&&(n.el.swiper=null),ee(n)),n.destroyed=!0,null)}static extendDefaults(e){H(Lt,e)}static get extendedDefaults(){return Lt}static get defaults(){return Pt}static installModule(t){e.prototype.__modules__||(e.prototype.__modules__=[]);let n=e.prototype.__modules__;typeof t==`function`&&n.indexOf(t)<0&&n.push(t)}static use(t){return Array.isArray(t)?(t.forEach(t=>e.installModule(t)),e):(e.installModule(t),e)}};Object.keys(It).forEach(e=>{Object.keys(It[e]).forEach(t=>{Rt.prototype[t]=It[e][t]})}),Rt.use([be,xe]);function zt(e,t,n,r){return e.params.createElements&&Object.keys(r).forEach(i=>{if(!n[i]&&n.auto===!0){let a=W(e.el,`.${r[i]}`)[0];a||(a=K(`div`,r[i]),a.className=r[i],e.el.append(a)),n[i]=a,t[i]=a}}),n}var Bt=`<svg class="swiper-navigation-icon" width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"/></svg>`;function Vt({swiper:e,extendParams:t,on:n,emit:r}){t({navigation:{nextEl:null,prevEl:null,addIcons:!0,hideOnClick:!1,disabledClass:`swiper-button-disabled`,hiddenClass:`swiper-button-hidden`,lockClass:`swiper-button-lock`,navigationDisabledClass:`swiper-navigation-disabled`}}),e.navigation={nextEl:null,prevEl:null,arrowSvg:Bt};function i(t){let n;return t&&typeof t==`string`&&e.isElement&&(n=e.el.querySelector(t)||e.hostEl.querySelector(t),n)?n:(t&&(typeof t==`string`&&(n=[...document.querySelectorAll(t)]),e.params.uniqueNavElements&&typeof t==`string`&&n&&n.length>1&&e.el.querySelectorAll(t).length===1?n=e.el.querySelector(t):n&&n.length===1&&(n=n[0])),t&&!n?t:n)}function a(t,n){let r=e.params.navigation;t=X(t),t.forEach(t=>{t&&(t.classList[n?`add`:`remove`](...r.disabledClass.split(` `)),t.tagName===`BUTTON`&&(t.disabled=n),e.params.watchOverflow&&e.enabled&&t.classList[e.isLocked?`add`:`remove`](r.lockClass))})}function o(){let{nextEl:t,prevEl:n}=e.navigation;if(e.params.loop){a(n,!1),a(t,!1);return}a(n,e.isBeginning&&!e.params.rewind),a(t,e.isEnd&&!e.params.rewind)}function s(t){t.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),r(`navigationPrev`))}function c(t){t.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),r(`navigationNext`))}function l(){let t=e.params.navigation;if(e.params.navigation=zt(e,e.originalParams.navigation,e.params.navigation,{nextEl:`swiper-button-next`,prevEl:`swiper-button-prev`}),!(t.nextEl||t.prevEl))return;let n=i(t.nextEl),r=i(t.prevEl);Object.assign(e.navigation,{nextEl:n,prevEl:r}),n=X(n),r=X(r);let a=(n,r)=>{if(n){if(t.addIcons&&n.matches(`.swiper-button-next,.swiper-button-prev`)&&!n.querySelector(`svg`)){let e=document.createElement(`div`);ue(e,Bt),n.appendChild(e.querySelector(`svg`)),e.remove()}n.addEventListener(`click`,r===`next`?c:s)}!e.enabled&&n&&n.classList.add(...t.lockClass.split(` `))};n.forEach(e=>a(e,`next`)),r.forEach(e=>a(e,`prev`))}function u(){let{nextEl:t,prevEl:n}=e.navigation;t=X(t),n=X(n);let r=(t,n)=>{t.removeEventListener(`click`,n===`next`?c:s),t.classList.remove(...e.params.navigation.disabledClass.split(` `))};t.forEach(e=>r(e,`next`)),n.forEach(e=>r(e,`prev`))}n(`init`,()=>{e.params.navigation.enabled===!1?f():(l(),o())}),n(`toEdge fromEdge lock unlock`,()=>{o()}),n(`destroy`,()=>{u()}),n(`enable disable`,()=>{let{nextEl:t,prevEl:n}=e.navigation;if(t=X(t),n=X(n),e.enabled){o();return}[...t,...n].filter(e=>!!e).forEach(t=>t.classList.add(e.params.navigation.lockClass))}),n(`click`,(t,n)=>{let{nextEl:i,prevEl:a}=e.navigation;i=X(i),a=X(a);let o=n.target,s=a.includes(o)||i.includes(o);if(e.isElement&&!s){let e=n.path||n.composedPath&&n.composedPath();e&&(s=e.find(e=>i.includes(e)||a.includes(e)))}if(e.params.navigation.hideOnClick&&!s){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===o||e.pagination.el.contains(o)))return;let t;i.length?t=i[0].classList.contains(e.params.navigation.hiddenClass):a.length&&(t=a[0].classList.contains(e.params.navigation.hiddenClass)),r(t===!0?`navigationShow`:`navigationHide`),[...i,...a].filter(e=>!!e).forEach(t=>t.classList.toggle(e.params.navigation.hiddenClass))}});let d=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(` `)),l(),o()},f=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(` `)),u()};Object.assign(e.navigation,{enable:d,disable:f,update:o,init:l,destroy:u})}function Q(e=``){return`.${e.trim().replace(/([\.:!+\/()[\]#>~*^$|=,'"@{}\\])/g,`\\$1`).replace(/ /g,`.`)}`}function Ht({swiper:e,extendParams:t,on:n,emit:r}){let i=`swiper-pagination`;t({pagination:{el:null,bulletElement:`span`,clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:`bullets`,dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:e=>e,formatFractionTotal:e=>e,bulletClass:`${i}-bullet`,bulletActiveClass:`${i}-bullet-active`,modifierClass:`${i}-`,currentClass:`${i}-current`,totalClass:`${i}-total`,hiddenClass:`${i}-hidden`,progressbarFillClass:`${i}-progressbar-fill`,progressbarOppositeClass:`${i}-progressbar-opposite`,clickableClass:`${i}-clickable`,lockClass:`${i}-lock`,horizontalClass:`${i}-horizontal`,verticalClass:`${i}-vertical`,paginationDisabledClass:`${i}-disabled`}}),e.pagination={el:null,bullets:[]};let a,o=0;function s(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function c(t,n){let{bulletActiveClass:r}=e.params.pagination;t&&(t=t[`${n===`prev`?`previous`:`next`}ElementSibling`],t&&(t.classList.add(`${r}-${n}`),t=t[`${n===`prev`?`previous`:`next`}ElementSibling`],t&&t.classList.add(`${r}-${n}-${n}`)))}function l(e,t,n){if(e%=n,t%=n,t===e+1)return`next`;if(t===e-1)return`previous`}function u(t){let n=t.target.closest(Q(e.params.pagination.bulletClass));if(!n)return;t.preventDefault();let r=J(n)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===r)return;let t=l(e.realIndex,r,e.slides.length);t===`next`?e.slideNext():t===`previous`?e.slidePrev():e.slideToLoop(r)}else e.slideTo(r)}function d(){let t=e.rtl,n=e.params.pagination;if(s())return;let i=e.pagination.el;i=X(i);let l,u,d=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,f=e.params.loop?Math.ceil(d/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(u=e.previousRealIndex||0,l=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):e.snapIndex===void 0?(u=e.previousIndex||0,l=e.activeIndex||0):(l=e.snapIndex,u=e.previousSnapIndex),n.type===`bullets`&&e.pagination.bullets&&e.pagination.bullets.length>0){let r=e.pagination.bullets,s,d,f;if(n.dynamicBullets&&(a=Y(r[0],e.isHorizontal()?`width`:`height`,!0),i.forEach(t=>{t.style[e.isHorizontal()?`width`:`height`]=`${a*(n.dynamicMainBullets+4)}px`}),n.dynamicMainBullets>1&&u!==void 0&&(o+=l-(u||0),o>n.dynamicMainBullets-1?o=n.dynamicMainBullets-1:o<0&&(o=0)),s=Math.max(l-o,0),d=s+(Math.min(r.length,n.dynamicMainBullets)-1),f=(d+s)/2),r.forEach(e=>{let t=[...[``,`-next`,`-next-next`,`-prev`,`-prev-prev`,`-main`].map(e=>`${n.bulletActiveClass}${e}`)].map(e=>typeof e==`string`&&e.includes(` `)?e.split(` `):e).flat();e.classList.remove(...t)}),i.length>1)r.forEach(t=>{let r=J(t);r===l?t.classList.add(...n.bulletActiveClass.split(` `)):e.isElement&&t.setAttribute(`part`,`bullet`),n.dynamicBullets&&(r>=s&&r<=d&&t.classList.add(...`${n.bulletActiveClass}-main`.split(` `)),r===s&&c(t,`prev`),r===d&&c(t,`next`))});else{let t=r[l];if(t&&t.classList.add(...n.bulletActiveClass.split(` `)),e.isElement&&r.forEach((e,t)=>{e.setAttribute(`part`,t===l?`bullet-active`:`bullet`)}),n.dynamicBullets){let e=r[s],t=r[d];for(let e=s;e<=d;e+=1)r[e]&&r[e].classList.add(...`${n.bulletActiveClass}-main`.split(` `));c(e,`prev`),c(t,`next`)}}if(n.dynamicBullets){let i=Math.min(r.length,n.dynamicMainBullets+4),o=(a*i-a)/2-f*a,s=t?`right`:`left`;r.forEach(t=>{t.style[e.isHorizontal()?s:`top`]=`${o}px`})}}i.forEach((t,i)=>{if(n.type===`fraction`&&(t.querySelectorAll(Q(n.currentClass)).forEach(e=>{e.textContent=n.formatFractionCurrent(l+1)}),t.querySelectorAll(Q(n.totalClass)).forEach(e=>{e.textContent=n.formatFractionTotal(f)})),n.type===`progressbar`){let r;r=n.progressbarOpposite?e.isHorizontal()?`vertical`:`horizontal`:e.isHorizontal()?`horizontal`:`vertical`;let i=(l+1)/f,a=1,o=1;r===`horizontal`?a=i:o=i,t.querySelectorAll(Q(n.progressbarFillClass)).forEach(t=>{t.style.transform=`translate3d(0,0,0) scaleX(${a}) scaleY(${o})`,t.style.transitionDuration=`${e.params.speed}ms`})}n.type===`custom`&&n.renderCustom?(ue(t,n.renderCustom(e,l+1,f)),i===0&&r(`paginationRender`,t)):(i===0&&r(`paginationRender`,t),r(`paginationUpdate`,t)),e.params.watchOverflow&&e.enabled&&t.classList[e.isLocked?`add`:`remove`](n.lockClass)})}function f(){let t=e.params.pagination;if(s())return;let n=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length,i=e.pagination.el;i=X(i);let a=``;if(t.type===`bullets`){let r=e.params.loop?Math.ceil(n/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&r>n&&(r=n);for(let n=0;n<r;n+=1)t.renderBullet?a+=t.renderBullet.call(e,n,t.bulletClass):a+=`<${t.bulletElement} ${e.isElement?`part="bullet"`:``} class="${t.bulletClass}"></${t.bulletElement}>`}t.type===`fraction`&&(a=t.renderFraction?t.renderFraction.call(e,t.currentClass,t.totalClass):`<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`),t.type===`progressbar`&&(a=t.renderProgressbar?t.renderProgressbar.call(e,t.progressbarFillClass):`<span class="${t.progressbarFillClass}"></span>`),e.pagination.bullets=[],i.forEach(n=>{t.type!==`custom`&&ue(n,a||``),t.type===`bullets`&&e.pagination.bullets.push(...n.querySelectorAll(Q(t.bulletClass)))}),t.type!==`custom`&&r(`paginationRender`,i[0])}function p(){e.params.pagination=zt(e,e.originalParams.pagination,e.params.pagination,{el:`swiper-pagination`});let t=e.params.pagination;if(!t.el)return;let n;typeof t.el==`string`&&e.isElement&&(n=e.el.querySelector(t.el)),!n&&typeof t.el==`string`&&(n=[...document.querySelectorAll(t.el)]),n||=t.el,!(!n||n.length===0)&&(e.params.uniqueNavElements&&typeof t.el==`string`&&Array.isArray(n)&&n.length>1&&(n=[...e.el.querySelectorAll(t.el)],n.length>1&&(n=n.find(t=>ce(t,`.swiper`)[0]===e.el))),Array.isArray(n)&&n.length===1&&(n=n[0]),Object.assign(e.pagination,{el:n}),n=X(n),n.forEach(n=>{t.type===`bullets`&&t.clickable&&n.classList.add(...(t.clickableClass||``).split(` `)),n.classList.add(t.modifierClass+t.type),n.classList.add(e.isHorizontal()?t.horizontalClass:t.verticalClass),t.type===`bullets`&&t.dynamicBullets&&(n.classList.add(`${t.modifierClass}${t.type}-dynamic`),o=0,t.dynamicMainBullets<1&&(t.dynamicMainBullets=1)),t.type===`progressbar`&&t.progressbarOpposite&&n.classList.add(t.progressbarOppositeClass),t.clickable&&n.addEventListener(`click`,u),e.enabled||n.classList.add(t.lockClass)}))}function m(){let t=e.params.pagination;if(s())return;let n=e.pagination.el;n&&(n=X(n),n.forEach(n=>{n.classList.remove(t.hiddenClass),n.classList.remove(t.modifierClass+t.type),n.classList.remove(e.isHorizontal()?t.horizontalClass:t.verticalClass),t.clickable&&(n.classList.remove(...(t.clickableClass||``).split(` `)),n.removeEventListener(`click`,u))})),e.pagination.bullets&&e.pagination.bullets.forEach(e=>e.classList.remove(...t.bulletActiveClass.split(` `)))}n(`changeDirection`,()=>{if(!e.pagination||!e.pagination.el)return;let t=e.params.pagination,{el:n}=e.pagination;n=X(n),n.forEach(n=>{n.classList.remove(t.horizontalClass,t.verticalClass),n.classList.add(e.isHorizontal()?t.horizontalClass:t.verticalClass)})}),n(`init`,()=>{e.params.pagination.enabled===!1?g():(p(),f(),d())}),n(`activeIndexChange`,()=>{e.snapIndex===void 0&&d()}),n(`snapIndexChange`,()=>{d()}),n(`snapGridLengthChange`,()=>{f(),d()}),n(`destroy`,()=>{m()}),n(`enable disable`,()=>{let{el:t}=e.pagination;t&&(t=X(t),t.forEach(t=>t.classList[e.enabled?`remove`:`add`](e.params.pagination.lockClass)))}),n(`lock unlock`,()=>{d()}),n(`click`,(t,n)=>{let i=n.target,a=X(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&a&&a.length>0&&!i.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&i===e.navigation.nextEl||e.navigation.prevEl&&i===e.navigation.prevEl))return;a[0].classList.contains(e.params.pagination.hiddenClass)===!0?r(`paginationShow`):r(`paginationHide`),a.forEach(t=>t.classList.toggle(e.params.pagination.hiddenClass))}});let h=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:t}=e.pagination;t&&(t=X(t),t.forEach(t=>t.classList.remove(e.params.pagination.paginationDisabledClass))),p(),f(),d()},g=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:t}=e.pagination;t&&(t=X(t),t.forEach(t=>t.classList.add(e.params.pagination.paginationDisabledClass))),m()};Object.assign(e.pagination,{enable:h,disable:g,render:f,update:d,init:p,destroy:m})}function Ut({swiper:e,extendParams:t,on:n,emit:r,params:i}){e.autoplay={running:!1,paused:!1,timeLeft:0},t({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let a,o,s=i&&i.autoplay?i.autoplay.delay:3e3,c=i&&i.autoplay?i.autoplay.delay:3e3,l,u=new Date().getTime(),d,f,p,m,h,g;function _(t){!e||e.destroyed||!e.wrapperEl||t.target===e.wrapperEl&&(e.wrapperEl.removeEventListener(`transitionend`,_),!(g||t.detail&&t.detail.bySwiperTouchMove)&&T())}let v=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?d=!0:d&&=(c=l,!1);let t=e.autoplay.paused?l:u+c-new Date().getTime();e.autoplay.timeLeft=t,r(`autoplayTimeLeft`,t,t/s),o=requestAnimationFrame(()=>{v()})},y=()=>{let t;if(t=e.virtual&&e.params.virtual.enabled?e.slides.find(e=>e.classList.contains(`swiper-slide-active`)):e.slides[e.activeIndex],t)return parseInt(t.getAttribute(`data-swiper-autoplay`),10)},b=()=>{let t=e.params.autoplay.delay,n=y();return!Number.isNaN(n)&&n>0&&(t=n),t},x=t=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(o),v();let n=t;n===void 0&&(n=b(),s=n,c=n),l=n;let i=e.params.speed,d=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(i,!0,!0),r(`autoplay`)):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,i,!0,!0),r(`autoplay`)):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(i,!0,!0),r(`autoplay`)):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,i,!0,!0),r(`autoplay`)),e.params.cssMode&&(u=new Date().getTime(),requestAnimationFrame(()=>{x()})))};return n>0?(clearTimeout(a),a=setTimeout(()=>{d()},n)):requestAnimationFrame(()=>{d()}),n},S=()=>{u=new Date().getTime(),e.autoplay.running=!0,x(),r(`autoplayStart`)},C=()=>{e.autoplay.running=!1,clearTimeout(a),cancelAnimationFrame(o),r(`autoplayStop`)},w=(t,n)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(a),t||(h=!0);let i=()=>{r(`autoplayPause`),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener(`transitionend`,_):T()};if(e.autoplay.paused=!0,n){i();return}l=(l||e.params.autoplay.delay)-(new Date().getTime()-u),!(e.isEnd&&l<0&&!e.params.loop)&&(l<0&&(l=0),i())},T=()=>{e.isEnd&&l<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(u=new Date().getTime(),h?(h=!1,x(l)):x(),e.autoplay.paused=!1,r(`autoplayResume`))},E=()=>{if(e.destroyed||!e.autoplay.running)return;let t=N();t.visibilityState===`hidden`&&(h=!0,w(!0)),t.visibilityState===`visible`&&T()},D=t=>{t.pointerType===`mouse`&&(h=!0,g=!0,!(e.animating||e.autoplay.paused)&&w(!0))},O=t=>{t.pointerType===`mouse`&&(g=!1,e.autoplay.paused&&T())},k=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener(`pointerenter`,D),e.el.addEventListener(`pointerleave`,O))},A=()=>{e.el&&typeof e.el!=`string`&&(e.el.removeEventListener(`pointerenter`,D),e.el.removeEventListener(`pointerleave`,O))},j=()=>{N().addEventListener(`visibilitychange`,E)},M=()=>{N().removeEventListener(`visibilitychange`,E)};n(`init`,()=>{e.params.autoplay.enabled&&(k(),j(),S())}),n(`destroy`,()=>{A(),M(),e.autoplay.running&&C()}),n(`_freeModeStaticRelease`,()=>{(p||h)&&T()}),n(`_freeModeNoMomentumRelease`,()=>{e.params.autoplay.disableOnInteraction?C():w(!0,!0)}),n(`beforeTransitionStart`,(t,n,r)=>{e.destroyed||!e.autoplay.running||(r||!e.params.autoplay.disableOnInteraction?w(!0,!0):C())}),n(`sliderFirstMove`,()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){C();return}f=!0,p=!1,h=!1,m=setTimeout(()=>{h=!0,p=!0,w(!0)},200)}}),n(`touchEnd`,()=>{if(!(e.destroyed||!e.autoplay.running||!f)){if(clearTimeout(m),clearTimeout(a),e.params.autoplay.disableOnInteraction){p=!1,f=!1;return}p&&e.params.cssMode&&T(),p=!1,f=!1}}),n(`slideChange`,()=>{e.destroyed||!e.autoplay.running||e.autoplay.paused&&(l=b(),s=b())}),Object.assign(e.autoplay,{start:S,stop:C,pause:w,resume:T})}function Wt(e){let{effect:t,swiper:n,on:r,setTranslate:i,setTransition:a,overwriteParams:o,perspective:s,recreateShadows:c,getEffectParams:l}=e;r(`beforeInit`,()=>{if(n.params.effect!==t)return;n.classNames.push(`${n.params.containerModifierClass}${t}`),s&&s()&&n.classNames.push(`${n.params.containerModifierClass}3d`);let e=o?o():{};Object.assign(n.params,e),Object.assign(n.originalParams,e)}),r(`setTranslate _virtualUpdated`,()=>{n.params.effect===t&&i()}),r(`setTransition`,(e,r)=>{n.params.effect===t&&a(r)}),r(`transitionEnd`,()=>{if(n.params.effect===t&&c){if(!l||!l().slideShadows)return;n.slides.forEach(e=>{e.querySelectorAll(`.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left`).forEach(e=>e.remove())}),c()}});let u;r(`virtualUpdate`,()=>{n.params.effect===t&&(n.slides.length||(u=!0),requestAnimationFrame(()=>{u&&n.slides&&n.slides.length&&(i(),u=!1)}))})}function Gt(e,t){let n=re(t);return n!==t&&(n.style.backfaceVisibility=`hidden`,n.style[`-webkit-backface-visibility`]=`hidden`),n}function Kt({swiper:e,duration:t,transformElements:n,allSlides:r}){let{activeIndex:i}=e,a=t=>t.parentElement?t.parentElement:e.slides.find(e=>e.shadowRoot&&e.shadowRoot===t.parentNode);if(e.params.virtualTranslate&&t!==0){let t=!1,o;o=r?n:n.filter(t=>{let n=t.classList.contains(`swiper-slide-transform`)?a(t):t;return e.getSlideIndex(n)===i}),o.forEach(n=>{le(n,()=>{if(t||!e||e.destroyed)return;t=!0,e.animating=!1;let n=new window.CustomEvent(`transitionend`,{bubbles:!0,cancelable:!0});e.wrapperEl.dispatchEvent(n)})})}}function qt({swiper:e,extendParams:t,on:n}){t({fadeEffect:{crossFade:!1}}),Wt({effect:`fade`,swiper:e,on:n,setTranslate:()=>{let{slides:t}=e,n=e.params.fadeEffect;for(let r=0;r<t.length;r+=1){let t=e.slides[r],i=-t.swiperSlideOffset;e.params.virtualTranslate||(i-=e.translate);let a=0;e.isHorizontal()||(a=i,i=0);let o=e.params.fadeEffect.crossFade?Math.max(1-Math.abs(t.progress),0):1+Math.min(Math.max(t.progress,-1),0),s=Gt(n,t);s.style.opacity=o,s.style.transform=`translate3d(${i}px, ${a}px, 0px)`}},setTransition:t=>{let n=e.slides.map(e=>re(e));n.forEach(e=>{e.style.transitionDuration=`${t}ms`}),Kt({swiper:e,duration:t,transformElements:n,allSlides:!0})},overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!e.params.cssMode})})}function Jt(){new Rt(`.hero-swiper`,{modules:[Ut,qt,Ht,Vt],effect:`fade`,fadeEffect:{crossFade:!0},loop:!0,speed:1200,autoplay:{delay:5e3,disableOnInteraction:!1},pagination:{el:`.swiper-pagination`,clickable:!0}})}function Yt(){let e=document.querySelectorAll(`.counter`),t=new IntersectionObserver(e=>{e.forEach(e=>{if(!e.isIntersecting)return;let n=e.target,r=Number(n.dataset.target),i=0,a=r/(2e3/16),o=()=>{i+=a,i<r?(r>=1e5?n.textContent=Math.floor(i).toLocaleString(`pt-BR`):n.textContent=Math.floor(i).toString(),requestAnimationFrame(o)):r===850?n.textContent=`+850`:r===12e4?n.textContent=`120 mil`:r===15&&(n.textContent=`15+`)};o(),t.unobserve(n)})},{threshold:.4});e.forEach(e=>{t.observe(e)})}var Xt=document.querySelector(`#app`),$=new l.default(`/`);$.on(`/`,()=>{Xt.innerHTML=`
    ${u}
    ${f}
    ${g}
    ${x}
    ${k}
    ${D}
    ${p}
    ${m}
  `,Yt(),Jt(),O(),$.updatePageLinks()}),$.on(`/album1`,()=>{Xt.innerHTML=`
    ${d}
    ${k}
    ${m}
  `,$.updatePageLinks()}),$.notFound(()=>{Xt.innerHTML=`
    ${u}

    <section class="py-32 text-center">
      <h1 class="text-5xl font-light">
        Página não encontrada
      </h1>
    </section>

    ${m}
  `}),$.resolve();