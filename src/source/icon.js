!
  function (e) {
    var c, o = '<svg><symbol id="icon-remove" viewBox="0 0 1024 1024"><path d="M857 215.34h-76.7V67H243.7v148.34H90.39v74.16H167v593.33c0 41 30.89 74.17 69 74.17h552c38.11 0 69-33.21 69-74.17V289.5h76.66v-74.16zM397 808.67h-76.64v-445H397z m153.31 0h-76.64v-445h76.65z m153.31 0H627v-445h76.66z m0-593.33H320.36v-74.16h383.28z"  ></path></symbol></svg>',
      l = (c = document.getElementsByTagName("script"))[c.length - 1].getAttribute("data-injectcss");
    if (l && !e.__iconfont__svg__cssinject__) {
      e.__iconfont__svg__cssinject__ = !0;
      try {
        document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")
      } catch (c) {
        console && console.log(c)
      }
    } !
      function (c) {
        if (document.addEventListener) if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) setTimeout(c, 0);
        else {
          var l = function () {
            document.removeEventListener("DOMContentLoaded", l, !1),
              c()
          };
          document.addEventListener("DOMContentLoaded", l, !1)
        } else document.attachEvent && (t = c, h = e.document, a = !1, i = function () {
          a || (a = !0, t())
        },
          (o = function () {
            try {
              h.documentElement.doScroll("left")
            } catch (c) {
              return void setTimeout(o, 50)
            }
            i()
          })(), h.onreadystatechange = function () {
            "complete" == h.readyState && (h.onreadystatechange = null, i())
          });
        var t, h, a, i, o
      }(function () {
        var c, l, t, h, a, i; (c = document.createElement("div")).innerHTML = o,
          o = null,
          (l = c.getElementsByTagName("svg")[0]) && (l.setAttribute("aria-hidden", "true"), l.style.position = "absolute", l.style.width = 0, l.style.height = 0, l.style.overflow = "hidden", t = l, (h = document.body).firstChild ? (a = t, (i = h.firstChild).parentNode.insertBefore(a, i)) : h.appendChild(t))
      })
  }(window);