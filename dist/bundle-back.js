(() => {
  var e = {
      620: (e, r, s) => {
        var n = s(127),
          t = n();
        s(334).config();
        var o = process.env.PORT || 5500;
        (e.exports = process.env.NEWS_API_KEY),
          t.set("view engine", "ejs"),
          t.use(n.static(__dirname + "/public")),
          t.get("/", (e, r) => {
            r.render("index");
          }),
          t.listen(o, () => {
            console.log("newszone app is running on port: " + o);
          });
      },
      334: (e) => {
        "use strict";
        e.exports = require("dotenv");
      },
      127: (e) => {
        "use strict";
        e.exports = require("express");
      },
    },
    r = {};
  !(function s(n) {
    if (r[n]) return r[n].exports;
    var t = (r[n] = { exports: {} });
    return e[n](t, t.exports, s), t.exports;
  })(620);
})();
