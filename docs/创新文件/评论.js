/*!
 * docsify-ztao
 * v1.0
 * https://github.com/daidi/docsify-valine#readme
 * (c) 2019-2020
 * MIT license
 */
"use strict";window.$docsify=window.$docsify||{},window.$docsify.plugins=[function(n,i){n.ready((function(){window.Valine||console.warn("please include `<script src='//unpkg.com/valine/dist/Valine.min.js'><\/script>` before init $docsify")})),n.mounted((function(){var n=Docsify.dom,i=n.create("div");i.id="vcomments";n.getNode("#main");i.style="max-width: 50% !important; margin: 0 auto 20px;",n.appendTo(n.find(".content"),i)})),n.doneEach((function(){i.config.Valine=i.config.Valine||{};var n=Object.assign({el:"#vcomments",path:"full"===i.config.Valine.docPath?location.pathname+location.hash.replace(/\?.+/,""):location.hash.replace(/\?.+/,"")},i.config.Valine);n.appId&&n.appKey?new Valine(n):console.warn("sorry , appId and appKey must be required .")}))}].concat(window.$docsify.plugins||[]);
//# sourceMappingURL=docsify-ztao.min.js.map