/*
  كل الرسومات مرسومة بالكود (SVG): شخصية أنمي محجبة + أربعة مشاهد.
  خفيفة جداً، بلا صور خارجية ولا مشاكل حقوق.
  props: bouquet | sketch | ball | racket | tablet   ·   hat: خوذة مهندسة
*/
(function () {
  var counter = 0;

  function girlInner(n, o) {
    o = o || {};
    var id = function (k) { return k + n; };

    var eye = function (x, y, flip) {
      var s = flip ? ' scale(-1 1)' : '';
      var cid = id('ec' + (flip ? 'r' : 'l'));
      return '' +
        '<g transform="translate(' + x + ' ' + y + ')' + s + '"><g class="eye">' +
          '<clipPath id="' + cid + '"><ellipse rx="27" ry="33"/></clipPath>' +
          '<ellipse rx="27" ry="33" fill="#fff"/>' +
          '<g clip-path="url(#' + cid + ')"><g class="iris">' +
            '<ellipse cx="0" cy="5" rx="23" ry="30" fill="url(#' + id('i') + ')"/>' +
            '<ellipse cx="0" cy="7" rx="11" ry="16" fill="#1c0f48"/>' +
            '<circle cx="-9" cy="-9" r="8.5" fill="#fff"/>' +
            '<circle cx="10" cy="14" r="4.2" fill="#fff" opacity=".92"/>' +
            '<circle cx="-3" cy="22" r="2.2" fill="#fff" opacity=".75"/>' +
          '</g></g>' +
          '<path d="M-30 -6C-25 -38 25 -40 30 -6" fill="none" stroke="#2a1450" stroke-width="6.5" stroke-linecap="round"/>' +
          '<path d="M-29 -10L-38 -21" stroke="#2a1450" stroke-width="4.5" stroke-linecap="round"/>' +
          '<path d="M-24 -26L-30 -36" stroke="#2a1450" stroke-width="3.5" stroke-linecap="round"/>' +
        '</g></g>';
    };

    var flower = function (x, y, r, c1, c2) {
      var p = '';
      for (var k = 0; k < 5; k++) {
        var a = k * 72 * Math.PI / 180;
        p += '<circle cx="' + (Math.sin(a) * r * .95).toFixed(1) + '" cy="' + (-Math.cos(a) * r * .95).toFixed(1) + '" r="' + (r * .78).toFixed(1) + '" fill="' + c1 + '"/>';
      }
      return '<g transform="translate(' + x + ' ' + y + ')">' + p + '<circle r="' + (r * .55).toFixed(1) + '" fill="' + c2 + '"/></g>';
    };

    var spark = function (x, y, s, d) {
      return '<path class="sp" style="--d:' + d + 's" transform="translate(' + x + ' ' + y + ') scale(' + s + ')" d="M0-14L3.4-3.4 14 0 3.4 3.4 0 14-3.4 3.4-14 0-3.4-3.4Z" fill="#fff"/>';
    };

    // -------- props (drawn behind the hands) --------
    var prop = '';
    if (o.prop === 'bouquet') {
      prop = '<g>' +
        '<path d="M200 524L178 474M200 524L222 474M200 524L200 466" stroke="#2ee6a6" stroke-width="6" stroke-linecap="round"/>' +
        '<path d="M166 482L234 482L216 534L184 534Z" fill="#fff" opacity=".92"/>' +
        '<path d="M166 482L234 482L229 494L171 494Z" fill="#cdb6ff"/>' +
        flower(176, 462, 14, '#a67bff', '#ffe08a') + flower(224, 462, 14, '#c9b2ff', '#ffe08a') + flower(200, 446, 16, '#fff', '#ffe08a') +
        '</g>';
    } else if (o.prop === 'sketch') {
      prop = '<g transform="rotate(-7 200 484)">' +
        '<rect x="146" y="436" width="108" height="84" rx="9" fill="#fff"/>' +
        '<rect x="146" y="436" width="15" height="84" rx="7" fill="#8b5cf6"/>' +
        '<circle cx="222" cy="458" r="9" fill="#ffe08a"/>' +
        '<path d="M161 508Q186 476 208 494T254 480V516H161Z" fill="#2ee6a6"/>' +
        '<path d="M232 506L262 452" stroke="#ffd34d" stroke-width="7" stroke-linecap="round"/>' +
        '<path d="M232 506l-4 11l11-5z" fill="#ff7eb3"/>' +
        '</g>';
    } else if (o.prop === 'ball') {
      prop = '<g transform="translate(200 476)">' +
        '<circle r="31" fill="#fff" stroke="#2a1450" stroke-width="3.5"/>' +
        '<path d="M0-12L11-4 7 10H-7L-11-4Z" fill="#2a1450"/>' +
        '<path d="M0-12V-30M11-4L28-10M7 10L18 26M-7 10L-18 26M-11-4L-28-10" stroke="#2a1450" stroke-width="3" stroke-linecap="round"/>' +
        '</g>';
    } else if (o.prop === 'racket') {
      prop = '<g>' +
        '<path d="M226 488L284 428" stroke="#2a1450" stroke-width="9" stroke-linecap="round"/>' +
        '<g transform="rotate(38 308 392)"><ellipse cx="308" cy="392" rx="35" ry="46" fill="rgba(255,255,255,.18)" stroke="#2ee6a6" stroke-width="8"/>' +
        '<path d="M308 348V436M283 362V424M333 362V424M274 392H342M280 372H336M280 412H336" stroke="#fff" stroke-opacity=".7" stroke-width="2"/></g>' +
        '<circle cx="152" cy="486" r="13" fill="#d8ff5e"/><path d="M141 480Q152 488 141 496M163 476Q152 486 163 494" fill="none" stroke="#fff" stroke-width="2"/>' +
        '</g>';
    } else if (o.prop === 'tablet') {
      prop = '<g transform="rotate(-5 200 484)">' +
        '<rect x="144" y="438" width="112" height="82" rx="10" fill="#171044" stroke="#e6d4ff" stroke-width="4"/>' +
        '<path d="M156 456H244M156 474H244M156 492H244M172 446V512M200 446V512M228 446V512" stroke="#2ee6a6" stroke-opacity=".35" stroke-width="1.5"/>' +
        '<path d="M160 504L186 468L212 490L240 456" fill="none" stroke="#2ee6a6" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>' +
        '<circle cx="240" cy="456" r="5" fill="#ffe08a"/>' +
        '</g>';
    }

    // -------- hard hat (future engineer) --------
    var hat = o.hat ? '' +
      '<path d="M100 88C100 24 300 24 300 88Z" fill="#2ee6a6"/>' +
      '<path d="M120 70C130 44 170 32 200 32" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="6" stroke-linecap="round"/>' +
      '<rect x="188" y="26" width="24" height="62" rx="10" fill="#13b983"/>' +
      '<rect x="84" y="84" width="232" height="18" rx="9" fill="#1fd19a"/>' : '';

    return '' +
    '<defs>' +
      '<linearGradient id="' + id('h') + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--h1,#b99cff)"/><stop offset="1" style="stop-color:var(--h2,#7a4de0)"/></linearGradient>' +
      '<linearGradient id="' + id('hl') + '" x1="0" y1="0" x2="1" y2="1"><stop offset="0" style="stop-color:var(--h3,#efe3ff)"/><stop offset="1" style="stop-color:var(--h1,#b99cff)"/></linearGradient>' +
      '<linearGradient id="' + id('d') + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--d1,#46e3ad)"/><stop offset="1" style="stop-color:var(--d2,#139f76)"/></linearGradient>' +
      '<radialGradient id="' + id('s') + '" cx=".5" cy=".36" r=".78"><stop offset="0" stop-color="#fff4ec"/><stop offset="1" stop-color="#ffd0bb"/></radialGradient>' +
      '<radialGradient id="' + id('i') + '" cx=".5" cy=".28" r=".9"><stop offset="0" stop-color="#7d4ff2"/><stop offset=".55" stop-color="#4527ae"/><stop offset="1" stop-color="#3fe8b4"/></radialGradient>' +
      '<radialGradient id="' + id('b') + '"><stop offset="0" stop-color="#ff6f9f" stop-opacity=".8"/><stop offset="1" stop-color="#ff6f9f" stop-opacity="0"/></radialGradient>' +
    '</defs>' +

    spark(46, 96, .9, 0) + spark(358, 70, 1.1, .7) + spark(374, 250, .7, 1.3) + spark(30, 290, .8, 1.9) + spark(332, 18, .6, 2.4) +

    // ground shadow + dress (soft wavy hem)
    '<ellipse cx="200" cy="540" rx="138" ry="13" fill="#10042e" opacity=".38"/>' +
    '<path d="M98 402C72 450 54 496 46 528Q200 552 354 528C346 496 328 450 302 402Z" fill="url(#' + id('d') + ')"/>' +
    '<path d="M122 468Q200 490 278 468L283 484Q200 508 117 484Z" fill="#fff" opacity=".5"/>' +

    // hijab silhouette (head + drape)
    '<path d="M200 20C116 20 62 86 62 176C62 232 78 262 74 304C70 350 54 384 44 424Q200 460 356 424C346 384 330 350 326 304C322 262 338 232 338 176C338 86 284 20 200 20Z" fill="url(#' + id('h') + ')"/>' +
    '<path d="M92 326C102 368 94 398 80 422" fill="none" stroke="#fff" stroke-opacity=".3" stroke-width="5" stroke-linecap="round"/>' +
    '<path d="M308 326C298 368 306 398 320 422" fill="none" stroke="#fff" stroke-opacity=".3" stroke-width="5" stroke-linecap="round"/>' +
    '<path d="M138 338C136 378 128 408 114 432" fill="none" stroke="#fff" stroke-opacity=".18" stroke-width="4" stroke-linecap="round"/>' +
    '<path d="M262 338C264 378 272 408 286 432" fill="none" stroke="#fff" stroke-opacity=".18" stroke-width="4" stroke-linecap="round"/>' +
    '<path d="M150 40C110 62 84 108 80 160" fill="none" stroke="#fff" stroke-opacity=".28" stroke-width="6" stroke-linecap="round"/>' +

    // arms, props, hands
    '<path d="M94 428C100 468 132 490 170 486" fill="none" stroke="url(#' + id('d') + ')" stroke-width="32" stroke-linecap="round"/>' +
    '<path d="M306 428C300 468 268 490 230 486" fill="none" stroke="url(#' + id('d') + ')" stroke-width="32" stroke-linecap="round"/>' +
    prop +
    '<circle cx="174" cy="486" r="15" fill="url(#' + id('s') + ')"/>' +
    '<circle cx="226" cy="486" r="15" fill="url(#' + id('s') + ')"/>' +

    // face
    '<ellipse cx="200" cy="306" rx="72" ry="14" fill="#4a2c96" opacity=".22"/>' +
    '<ellipse cx="200" cy="198" rx="98" ry="102" fill="url(#' + id('s') + ')"/>' +
    '<path fill-rule="evenodd" d="M200 66C132 66 90 116 90 188C90 264 138 316 200 316C262 316 310 264 310 188C310 116 268 66 200 66ZM200 124C150 124 112 150 106 190C112 252 150 298 200 298C250 298 288 252 294 190C288 150 250 124 200 124Z" fill="url(#' + id('hl') + ')"/>' +
    '<path d="M106 190C112 252 150 298 200 298C250 298 288 252 294 190" fill="none" stroke="#7a55d6" stroke-opacity=".35" stroke-width="3"/>' +
    '<path d="M116 164Q142 150 172 158" fill="none" stroke="#6a3f8f" stroke-width="5" stroke-linecap="round"/>' +
    '<path d="M228 158Q258 150 284 164" fill="none" stroke="#6a3f8f" stroke-width="5" stroke-linecap="round"/>' +
    eye(152, 214, false) + eye(248, 214, true) +
    '<ellipse cx="124" cy="250" rx="21" ry="11" fill="url(#' + id('b') + ')"/>' +
    '<ellipse cx="276" cy="250" rx="21" ry="11" fill="url(#' + id('b') + ')"/>' +
    '<path d="M196 248Q200 252 204 248" fill="none" stroke="#e39a86" stroke-width="3" stroke-linecap="round"/>' +
    '<path d="M183 264Q200 281 217 264" fill="none" stroke="#d1446f" stroke-width="4.5" stroke-linecap="round"/>' +
    '<path d="M193 271Q200 277 207 271" fill="#ff8fa9" opacity=".6"/>' +
    (o.hat ? '' : flower(108, 98, 11, '#d7c4ff', '#ffe08a')) +
    '<circle cx="266" cy="338" r="10" fill="#ffe08a"/><circle cx="266" cy="338" r="5" fill="#fff" opacity=".85"/>' +
    hat;
  }

  function girlSVG(opts, cls) {
    counter++;
    return '<svg class="girl ' + (cls || '') + '" viewBox="0 0 400 540" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="' + ((opts && opts.label) || '') + '">' + girlInner(counter, opts) + '</svg>';
  }

  // ---------------------------------------------------------------- scenes
  function scene(kind) {
    counter++;
    var n = counter;
    var girl = function (x, y, s, o) {
      counter++;
      return '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')">' + girlInner(counter, o) + '</g>';
    };
    var tw = function (x, y, r, d) {
      return '<circle class="tw" style="--d:' + d + 's" cx="' + x + '" cy="' + y + '" r="' + r + '" fill="#fff"/>';
    };
    var head = function (extra) {
      return '<svg viewBox="0 0 320 400" xmlns="http://www.w3.org/2000/svg" class="sc sc' + kind + '" role="img">' + (extra || '');
    };

    // ---- 0: drawing studio
    if (kind === 0) {
      var splash = '';
      [[34, 66, 14, '#2ee6a6'], [276, 60, 10, '#ff7eb3'], [262, 150, 7, '#ffe08a'], [44, 150, 8, '#8b5cf6'], [160, 30, 9, '#2ee6a6'], [292, 232, 6, '#8b5cf6']].forEach(function (p, i) {
        splash += '<circle class="fl2" style="--d:' + (3 + i * .4) + 's;--dl:-' + i * .7 + 's" cx="' + p[0] + '" cy="' + p[1] + '" r="' + p[2] + '" fill="' + p[3] + '" opacity=".85"/>';
      });
      return head() +
        '<defs><linearGradient id="sg' + n + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d9c8ff"/><stop offset="1" stop-color="#f4eeff"/></linearGradient></defs>' +
        '<rect width="320" height="400" fill="url(#sg' + n + ')"/>' +
        '<path d="M-10 346Q90 310 190 340T330 326V410H-10Z" fill="#b697ff"/><path d="M-10 376Q110 350 210 374T330 366V410H-10Z" fill="#8b5cf6"/>' +
        // easel with canvas
        '<path d="M236 214L214 392M268 214L290 392M252 214V392" stroke="#7a4d2a" stroke-width="7" stroke-linecap="round"/>' +
        '<rect x="214" y="104" width="76" height="98" rx="5" fill="#fff" stroke="#7a4d2a" stroke-width="5"/>' +
        '<rect x="220" y="110" width="64" height="86" fill="#7c5cff"/><circle cx="262" cy="136" r="9" fill="#ffe08a"/><path d="M220 196V168Q244 142 284 170V196Z" fill="#2ee6a6"/>' +
        splash + girl(52, 38, .56, { prop: 'sketch' }) + '</svg>';
    }

    // ---- 1: football pitch
    if (kind === 1) {
      var stripes = '';
      for (var i = 0; i < 6; i++) stripes += '<rect x="0" y="' + (250 + i * 30) + '" width="320" height="30" fill="' + (i % 2 ? '#22c58f' : '#2ee6a6') + '"/>';
      var net = '';
      for (var j = 0; j < 9; j++) net += '<path d="M' + (96 + j * 16) + ' 168V228" stroke="#fff" stroke-opacity=".55" stroke-width="1.2"/>';
      for (var k = 0; k < 5; k++) net += '<path d="M96 ' + (168 + k * 15) + 'H224" stroke="#fff" stroke-opacity=".55" stroke-width="1.2"/>';
      return head() +
        '<defs><linearGradient id="sg' + n + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2a1568"/><stop offset=".6" stop-color="#8b5cf6"/><stop offset="1" stop-color="#d7c1ff"/></linearGradient></defs>' +
        '<rect width="320" height="400" fill="url(#sg' + n + ')"/>' +
        tw(40, 40, 1.6, 0) + tw(120, 22, 1.2, .5) + tw(210, 44, 1.7, 1) + tw(280, 24, 1.3, 1.6) +
        '<circle cx="262" cy="86" r="26" fill="#fff6d2" opacity=".9"/>' +
        stripes + '<path d="M0 250H320" stroke="#fff" stroke-opacity=".7" stroke-width="3"/>' +
        '<g>' + net + '<path d="M96 228V166H224V228" fill="none" stroke="#fff" stroke-width="5" stroke-linejoin="round"/></g>' +
        girl(52, 40, .56, { prop: 'ball' }) +
        '<path class="mv" d="M24 330H62M14 350H52M30 370H60" stroke="#fff" stroke-opacity=".7" stroke-width="3" stroke-linecap="round"/>' + '</svg>';
    }

    // ---- 2: tennis
    if (kind === 2) {
      var tnet = '';
      for (var a = 0; a < 17; a++) tnet += '<path d="M' + (20 + a * 17) + ' 232V272" stroke="#fff" stroke-opacity=".5" stroke-width="1.2"/>';
      for (var b = 0; b < 4; b++) tnet += '<path d="M20 ' + (232 + b * 13) + 'H292" stroke="#fff" stroke-opacity=".5" stroke-width="1.2"/>';
      return head() +
        '<defs><linearGradient id="sg' + n + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4b2aa6"/><stop offset="1" stop-color="#b9a0ff"/></linearGradient></defs>' +
        '<rect width="320" height="400" fill="url(#sg' + n + ')"/>' +
        '<path d="M-10 230L60 150H260L330 230V410H-10Z" fill="#1fbf8c"/>' +
        '<path d="M60 150L-10 230M260 150L330 230M0 262H320M160 150V410" stroke="#fff" stroke-opacity=".8" stroke-width="3"/>' +
        '<g>' + tnet + '<path d="M16 232H296" stroke="#fff" stroke-width="5"/><path d="M16 232V290M296 232V290" stroke="#e6e0ff" stroke-width="6"/></g>' +
        '<circle class="bf" cx="24" cy="96" r="9" fill="#d8ff5e"/><path class="bf" d="M16 92Q24 98 16 104" fill="none" stroke="#fff" stroke-width="1.6"/>' +
        girl(52, 40, .56, { prop: 'racket' }) +
        '</svg>';
    }

    // ---- 3: future engineer (blueprint + gears)
    var grid = '';
    for (var g = 0; g <= 320; g += 32) grid += '<path d="M' + g + ' 0V400" stroke="#2ee6a6" stroke-opacity=".16"/>';
    for (var h = 0; h <= 400; h += 32) grid += '<path d="M0 ' + h + 'H320" stroke="#2ee6a6" stroke-opacity=".16"/>';
    return head() +
      '<defs><linearGradient id="sg' + n + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#150a42"/><stop offset="1" stop-color="#3a1f8f"/></linearGradient></defs>' +
      '<rect width="320" height="400" fill="url(#sg' + n + ')"/>' + grid +
      '<g class="gear" style="transform-origin:58px 86px"><circle cx="58" cy="86" r="38" fill="none" stroke="#2ee6a6" stroke-width="12" stroke-dasharray="7 7"/><circle cx="58" cy="86" r="28" fill="none" stroke="#2ee6a6" stroke-width="4"/><circle cx="58" cy="86" r="8" fill="#2ee6a6"/></g>' +
      '<g class="gear rev" style="transform-origin:268px 120px"><circle cx="268" cy="120" r="30" fill="none" stroke="#b99cff" stroke-width="10" stroke-dasharray="6 6"/><circle cx="268" cy="120" r="21" fill="none" stroke="#b99cff" stroke-width="4"/><circle cx="268" cy="120" r="6" fill="#b99cff"/></g>' +
      '<path d="M0 372H320" stroke="#2ee6a6" stroke-opacity=".6" stroke-width="3"/>' +
      '<path d="M236 372V250L284 250V372M236 280H284M236 310H284M236 340H284" fill="none" stroke="#2ee6a6" stroke-opacity=".5" stroke-width="3"/>' +
      girl(52, 40, .56, { prop: 'tablet', hat: true }) + '</svg>';
  }

  window.ART = { girlSVG: girlSVG, scene: scene };
})();
