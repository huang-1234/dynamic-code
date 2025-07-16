var Ge = Object.defineProperty
  , Ve = Object.defineProperties;
var Xe = Object.getOwnPropertyDescriptors;
var _t = Object.getOwnPropertySymbols;
var $t = Object.prototype.hasOwnProperty
  , Jt = Object.prototype.propertyIsEnumerable;
var Yt = (W, w, Q) => w in W ? Ge(W, w, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: Q
}) : W[w] = Q
  , pt = (W, w) => {
    for (var Q in w || (w = {}))
        $t.call(w, Q) && Yt(W, Q, w[Q]);
    if (_t)
        for (var Q of _t(w))
            Jt.call(w, Q) && Yt(W, Q, w[Q]);
    return W
}
  , Zt = (W, w) => Ve(W, Xe(w));
var Ot = (W, w) => {
    var Q = {};
    for (var J in W)
        $t.call(W, J) && w.indexOf(J) < 0 && (Q[J] = W[J]);
    if (W != null && _t)
        for (var J of _t(W))
            w.indexOf(J) < 0 && Jt.call(W, J) && (Q[J] = W[J]);
    return Q
}
;
(function(w, Q) {
    if (typeof exports == "object" && typeof module == "object")
        module.exports = Q(require("react"), require("@es/kpro-seller-layout-container"), require("@m-ui/react"), require("icons"), require("@es/kpro-seller-diagnose-suggestion"), require("@es/kpro-data-cardTrend"), require("@es/kpro-data-datacard-new"));
    else if (typeof define == "function" && define.amd)
        define(["react", "@es/kpro-seller-layout-container", "@m-ui/react", "icons", "@es/kpro-seller-diagnose-suggestion", "@es/kpro-data-cardTrend", "@es/kpro-data-datacard-new"], Q);
    else {
        var J = typeof exports == "object" ? Q(require("react"), require("@es/kpro-seller-layout-container"), require("@m-ui/react"), require("icons"), require("@es/kpro-seller-diagnose-suggestion"), require("@es/kpro-data-cardTrend"), require("@es/kpro-data-datacard-new")) : Q(w.React, w["@es/kpro-seller-layout-container"], w["@m-ui/react"], w.icons, w["@es/kpro-seller-diagnose-suggestion"], w["@es/kpro-data-cardTrend"], w["@es/kpro-data-datacard-new"]);
        for (var mt in J)
            (typeof exports == "object" ? exports : w)[mt] = J[mt]
    }
}
)(self, (W, w, Q, J, mt, qt, te) => ( () => {
    var ee = {
        3533: (r, c, t) => {
            "use strict";
            t.r(c),
            t.d(c, {
                default: () => u
            });
            var n = t(1047)
              , o = t.n(n)
              , e = t(2990)
              , a = t.n(e)
              , s = a()(o());
            s.push([r.id, '.tbug_qGsutHSMu8BQtxx{background-color:#f6faff;background-color:var(--blue-1,#f6faff);border-radius:12px;border-radius:var(--radius-5,12px);display:flex;flex-direction:column;gap:8px;padding:16px}.tbug_qGsutHSMu8BQtxx .i4ABNqqPTCddKZO4MUtc{align-items:center;display:flex;justify-content:space-between}.tbug_qGsutHSMu8BQtxx .i4ABNqqPTCddKZO4MUtc .N8NrgHpPFNLI3nMnwqqD{text-wrap:nowrap;color:#2c2e30;font-family:PingFang SC;font-size:16px;font-weight:500;line-height:24px;overflow:hidden;text-overflow:ellipsis}.tbug_qGsutHSMu8BQtxx .i4ABNqqPTCddKZO4MUtc .uL6RMGxZMi3DDuzhmktw{text-wrap:nowrap;align-items:center;color:#90949e;color:var(--gray-9,#90949e);cursor:pointer;display:flex;font-family:PingFang SC;font-size:12px;font-weight:400;gap:2px;line-height:14px;transition:all .3s}.tbug_qGsutHSMu8BQtxx .H5LWAadpO5Xoz7znGhMr{align-items:center;display:flex;gap:12px}.tbug_qGsutHSMu8BQtxx .H5LWAadpO5Xoz7znGhMr span{font-feature-settings:"liga" off,"clig" off;align-items:center;color:#2c2e30;display:flex;font-family:PingFang SC;font-size:12px;font-style:normal;font-weight:400;gap:2px;line-height:normal;text-align:left}', ""]),
            s.locals = {
                container: "tbug_qGsutHSMu8BQtxx",
                header: "i4ABNqqPTCddKZO4MUtc",
                title: "N8NrgHpPFNLI3nMnwqqD",
                desc: "uL6RMGxZMi3DDuzhmktw",
                content: "H5LWAadpO5Xoz7znGhMr"
            };
            const u = s
        }
        ,
        5349: (r, c, t) => {
            "use strict";
            t.r(c),
            t.d(c, {
                default: () => u
            });
            var n = t(1047)
              , o = t.n(n)
              , e = t(2990)
              , a = t.n(e)
              , s = a()(o());
            s.push([r.id, ".ELMp0z89oLA8ckyBdpxV{background-color:#f6faff;background-color:var(--blue-1,#f6faff);border-radius:12px;gap:12px;padding:16px}.ELMp0z89oLA8ckyBdpxV,.ELMp0z89oLA8ckyBdpxV .z3OkHfa31ESg6wYAKRzr{display:flex;flex-direction:column}.ELMp0z89oLA8ckyBdpxV .z3OkHfa31ESg6wYAKRzr{gap:4px}.ELMp0z89oLA8ckyBdpxV .z3OkHfa31ESg6wYAKRzr .H2RUCt4Wq1L_eQc90mZK{color:#1d1d1f;color:var(--gray-11,#1d1d1f);font-family:PingFang SC;font-size:16px;font-weight:500;line-height:24px;overflow:hidden;text-align:left;text-overflow:ellipsis;white-space:nowrap}.ELMp0z89oLA8ckyBdpxV .z3OkHfa31ESg6wYAKRzr .MH7ieylr4ULeQ0LjOVXh{align-items:center;display:flex;gap:4px;justify-content:space-between}.ELMp0z89oLA8ckyBdpxV .z3OkHfa31ESg6wYAKRzr .MH7ieylr4ULeQ0LjOVXh .H0NjHSAfvA5w6yDfiDKX{color:#2c2e30;line-height:18px;overflow:hidden;text-overflow:ellipsis}.ELMp0z89oLA8ckyBdpxV .z3OkHfa31ESg6wYAKRzr .MH7ieylr4ULeQ0LjOVXh .haibY32WbM2ErioUzgY2,.ELMp0z89oLA8ckyBdpxV .z3OkHfa31ESg6wYAKRzr .MH7ieylr4ULeQ0LjOVXh .H0NjHSAfvA5w6yDfiDKX{font-family:PingFang SC;font-size:12px;font-weight:400;text-align:left;white-space:nowrap}.ELMp0z89oLA8ckyBdpxV .z3OkHfa31ESg6wYAKRzr .MH7ieylr4ULeQ0LjOVXh .haibY32WbM2ErioUzgY2{color:#90949e;color:var(--gray-9,#90949e);cursor:pointer;line-height:14px;transition:all .3s}.ELMp0z89oLA8ckyBdpxV ._ta4Gnc46xxsnxL2bEut{background-color:#fff;border-radius:12px;display:flex;flex-direction:column;gap:16px;padding:12px}.ELMp0z89oLA8ckyBdpxV ._ta4Gnc46xxsnxL2bEut .Nsa4n83kEH_fqgpi33l8{align-items:center;display:flex;gap:16px;justify-content:space-between}.ELMp0z89oLA8ckyBdpxV ._ta4Gnc46xxsnxL2bEut .Nsa4n83kEH_fqgpi33l8 .xCh_gIsCoEy6qSENk5mv{overflow:hidden;text-align:left}.ELMp0z89oLA8ckyBdpxV ._ta4Gnc46xxsnxL2bEut .Nsa4n83kEH_fqgpi33l8 .xCh_gIsCoEy6qSENk5mv .H2RUCt4Wq1L_eQc90mZK{color:#2c2e30;font-family:PingFang SC;font-size:14px;font-weight:500;line-height:22px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ELMp0z89oLA8ckyBdpxV ._ta4Gnc46xxsnxL2bEut .Nsa4n83kEH_fqgpi33l8 .xCh_gIsCoEy6qSENk5mv .H0NjHSAfvA5w6yDfiDKX{color:#90949e;font-family:PingFang SC;font-size:12px;font-weight:400;line-height:20px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ELMp0z89oLA8ckyBdpxV ._ta4Gnc46xxsnxL2bEut .Nsa4n83kEH_fqgpi33l8 .haibY32WbM2ErioUzgY2{text-wrap:nowrap;cursor:pointer;font-family:PingFang SC;font-size:14px;font-weight:500;line-height:22px;text-align:left;transition:all .3s}.ELMp0z89oLA8ckyBdpxV ._ta4Gnc46xxsnxL2bEut .Nsa4n83kEH_fqgpi33l8 .haibY32WbM2ErioUzgY2.zsV7FNyfNZ3bWNYFT6Nc{color:#326bfb;color:var(--blue-6,#326bfb)}.ELMp0z89oLA8ckyBdpxV ._ta4Gnc46xxsnxL2bEut .Nsa4n83kEH_fqgpi33l8 .haibY32WbM2ErioUzgY2.zsV7FNyfNZ3bWNYFT6Nc:hover{color:#648ffc}.ELMp0z89oLA8ckyBdpxV ._ta4Gnc46xxsnxL2bEut .Nsa4n83kEH_fqgpi33l8 .haibY32WbM2ErioUzgY2.QlzmSehVdPYjMYv14aog{color:#fe3421;color:var(--red-6,#fe3421)}.ELMp0z89oLA8ckyBdpxV ._ta4Gnc46xxsnxL2bEut .Nsa4n83kEH_fqgpi33l8 .haibY32WbM2ErioUzgY2.QlzmSehVdPYjMYv14aog:hover{color:#fe7a6d}", ""]),
            s.locals = {
                container: "ELMp0z89oLA8ckyBdpxV",
                header: "z3OkHfa31ESg6wYAKRzr",
                title: "H2RUCt4Wq1L_eQc90mZK",
                descContainer: "MH7ieylr4ULeQ0LjOVXh",
                desc: "H0NjHSAfvA5w6yDfiDKX",
                action: "haibY32WbM2ErioUzgY2",
                content: "_ta4Gnc46xxsnxL2bEut",
                item: "Nsa4n83kEH_fqgpi33l8",
                itemContent: "xCh_gIsCoEy6qSENk5mv",
                blue: "zsV7FNyfNZ3bWNYFT6Nc",
                red: "QlzmSehVdPYjMYv14aog"
            };
            const u = s
        }
        ,
        7606: (r, c, t) => {
            "use strict";
            t.r(c),
            t.d(c, {
                default: () => u
            });
            var n = t(1047)
              , o = t.n(n)
              , e = t(2990)
              , a = t.n(e)
              , s = a()(o());
            s.push([r.id, ".SJllQgNNl7YQ1HA13GQb{gap:16px}.SJllQgNNl7YQ1HA13GQb,.SJllQgNNl7YQ1HA13GQb .jYP0pA87KpToYGJIr8Hf{display:flex;flex-direction:column}.SJllQgNNl7YQ1HA13GQb .jYP0pA87KpToYGJIr8Hf{background:#f6faff;background:var(--blue-1,#f6faff);border-radius:12px;border-radius:var(--radius-5,12px);gap:4px;height:98px;padding:16px 12px 16px 16px;padding:16px var(--spacing-4,12px) 16px 16px}.SJllQgNNl7YQ1HA13GQb .jYP0pA87KpToYGJIr8Hf *{width:310px}.SJllQgNNl7YQ1HA13GQb .jYP0pA87KpToYGJIr8Hf .Imf5V_c9toaMAgnMdUQb{color:#2c2e30;font-family:PingFang SC;font-size:14px;font-weight:500;line-height:22px;overflow:hidden;text-align:left;text-overflow:ellipsis;white-space:nowrap}.SJllQgNNl7YQ1HA13GQb .jYP0pA87KpToYGJIr8Hf .Qgsq_wkmOoWbNhREyEWZ{color:#90949e;color:var(--gray-9,#90949e);font-family:PingFang SC;font-size:12px;font-weight:400;line-height:20px;text-align:left}", ""]),
            s.locals = {
                container: "SJllQgNNl7YQ1HA13GQb",
                content: "jYP0pA87KpToYGJIr8Hf",
                title: "Imf5V_c9toaMAgnMdUQb",
                desc: "Qgsq_wkmOoWbNhREyEWZ"
            };
            const u = s
        }
        ,
        738: (r, c, t) => {
            "use strict";
            t.r(c),
            t.d(c, {
                default: () => u
            });
            var n = t(1047)
              , o = t.n(n)
              , e = t(2990)
              , a = t.n(e)
              , s = a()(o());
            s.push([r.id, '.oSJSH7yzskQpe_f7lM68{gap:16px}.oSJSH7yzskQpe_f7lM68,.oSJSH7yzskQpe_f7lM68 .tyD37EkBkKe74D6FAUXp{display:flex;flex-direction:column}.oSJSH7yzskQpe_f7lM68 .tyD37EkBkKe74D6FAUXp{align-items:flex-start;align-self:stretch;background-color:#f6faff;background-color:var(--blue-1,#f6faff);border-radius:12px;border-radius:var(--radius-5,12px);gap:8px;padding:16px}.oSJSH7yzskQpe_f7lM68 .tyD37EkBkKe74D6FAUXp .AATBjkXxTTuEF2k7pGeg{color:#2c2e30;font-family:PingFang SC;font-size:14px;font-style:normal;font-weight:400;line-height:22px}.oSJSH7yzskQpe_f7lM68 .tyD37EkBkKe74D6FAUXp .o120H92OZaGo5LIuS9Sg{align-items:flex-start;align-self:stretch;background-color:#fff;background-color:var(--gray-1,#fff);border-radius:12px;border-radius:var(--radius-5,12px);display:flex;flex-direction:column;gap:8px;padding:12px;padding:var(--spacing-4,12px)}.oSJSH7yzskQpe_f7lM68 .tyD37EkBkKe74D6FAUXp .o120H92OZaGo5LIuS9Sg .uwsV03KyWDD2tRYUQLWa{align-items:center;align-self:stretch;display:flex;gap:16px;gap:var(--spacing-5,16px)}.oSJSH7yzskQpe_f7lM68 .tyD37EkBkKe74D6FAUXp .o120H92OZaGo5LIuS9Sg .uwsV03KyWDD2tRYUQLWa ._tstRtdLkSjnB4Ok4lQz{align-items:flex-start;display:flex;flex:1 0;gap:12px;gap:var(--spacing-4,12px);justify-content:center}.oSJSH7yzskQpe_f7lM68 .tyD37EkBkKe74D6FAUXp .o120H92OZaGo5LIuS9Sg .uwsV03KyWDD2tRYUQLWa ._tstRtdLkSjnB4Ok4lQz .r365Ti0_PSFns5oYMEWn{height:40px;height:var(--sizing-11,40px);position:relative;width:40px;width:var(--sizing-11,40px)}.oSJSH7yzskQpe_f7lM68 .tyD37EkBkKe74D6FAUXp .o120H92OZaGo5LIuS9Sg .uwsV03KyWDD2tRYUQLWa ._tstRtdLkSjnB4Ok4lQz .r365Ti0_PSFns5oYMEWn .qIwTV4VjF0w8GBixO5OQ{border-radius:50%;height:100%;width:100%}.oSJSH7yzskQpe_f7lM68 .tyD37EkBkKe74D6FAUXp .o120H92OZaGo5LIuS9Sg .uwsV03KyWDD2tRYUQLWa ._tstRtdLkSjnB4Ok4lQz .r365Ti0_PSFns5oYMEWn .QFCbhtad2fGjjLJP1HPd{position:absolute;right:0;top:0;width:14px}.oSJSH7yzskQpe_f7lM68 .tyD37EkBkKe74D6FAUXp .o120H92OZaGo5LIuS9Sg .uwsV03KyWDD2tRYUQLWa ._tstRtdLkSjnB4Ok4lQz .cVd1TggnkXjKk9tQd7Zl{align-items:flex-start;display:flex;flex:1 0;flex-direction:column}.oSJSH7yzskQpe_f7lM68 .tyD37EkBkKe74D6FAUXp .o120H92OZaGo5LIuS9Sg .uwsV03KyWDD2tRYUQLWa ._tstRtdLkSjnB4Ok4lQz .cVd1TggnkXjKk9tQd7Zl .r65nbLc4e2MXrmm435Cb{text-wrap:nowrap;color:#2c2e30;color:var(--gray-10,#2c2e30);font-family:PingFang SC;font-size:14px;font-style:normal;font-weight:500;line-height:22px;max-width:253px;overflow:hidden;text-align:left;text-overflow:ellipsis;white-space:nowrap}.oSJSH7yzskQpe_f7lM68 .tyD37EkBkKe74D6FAUXp .o120H92OZaGo5LIuS9Sg .uwsV03KyWDD2tRYUQLWa ._tstRtdLkSjnB4Ok4lQz .cVd1TggnkXjKk9tQd7Zl .rvlrO4dQnU0jHlCyFj0j{text-wrap:nowrap;align-items:center;color:#90949e;color:var(--gray-9,#90949e);display:flex;font-family:PingFang SC;font-size:12px;font-style:normal;font-weight:400;gap:16px;justify-content:center;line-height:20px;max-width:253px;text-align:left}.oSJSH7yzskQpe_f7lM68 .tyD37EkBkKe74D6FAUXp .o120H92OZaGo5LIuS9Sg .uwsV03KyWDD2tRYUQLWa ._tstRtdLkSjnB4Ok4lQz .cVd1TggnkXjKk9tQd7Zl .rvlrO4dQnU0jHlCyFj0j span:nth-child(2){overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.oSJSH7yzskQpe_f7lM68 .tyD37EkBkKe74D6FAUXp .o120H92OZaGo5LIuS9Sg .uwsV03KyWDD2tRYUQLWa .WrMsoOAM1caX8oMM5io9{font-feature-settings:"liga" off,"clig" off;text-wrap:nowrap;color:#326bfb;cursor:pointer;font-family:PingFang SC;font-size:14px;font-style:normal;font-weight:500;line-height:20px;text-align:right;transition:all .3s}.oSJSH7yzskQpe_f7lM68 .tyD37EkBkKe74D6FAUXp .o120H92OZaGo5LIuS9Sg .uwsV03KyWDD2tRYUQLWa .WrMsoOAM1caX8oMM5io9:hover{color:#7da1fc}.oSJSH7yzskQpe_f7lM68 .tyD37EkBkKe74D6FAUXp .o120H92OZaGo5LIuS9Sg .I_kac891ZLOFqpa7jBdD{background-color:#eef1f6;background-color:var(--gray-5,#eef1f6);height:.5px;width:100%}.oSJSH7yzskQpe_f7lM68 .tyD37EkBkKe74D6FAUXp .o120H92OZaGo5LIuS9Sg .fMT1pg_h0bc5nzHxh6G8{align-items:flex-start;align-self:stretch;color:#2c2e30;color:var(--gray-10,#2c2e30);display:flex;font-family:PingFang SC;font-size:12px;font-style:normal;font-weight:400;gap:16px;line-height:20px}.oSJSH7yzskQpe_f7lM68 .tyD37EkBkKe74D6FAUXp .o120H92OZaGo5LIuS9Sg .fMT1pg_h0bc5nzHxh6G8 span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.oSJSH7yzskQpe_f7lM68 .Jl9gmbTUXohlHYKGXW7E{align-items:center;display:flex;gap:8px}.oSJSH7yzskQpe_f7lM68 .Jl9gmbTUXohlHYKGXW7E .iBRL_OpxEDkUVU6Qyc2h{align-items:center;background-color:#f5f6f9;border-radius:8px;color:#73757e;color:var(--gray-9-5,#73757e);cursor:pointer;display:flex;font-family:PingFang SC;font-size:12px;font-style:normal;font-weight:400;gap:4px;height:32px;height:var(--sizing-9,32px);line-height:normal;padding:5px 12px;padding:5px var(--spacing-4,12px);transition:all .3s}.oSJSH7yzskQpe_f7lM68 .Jl9gmbTUXohlHYKGXW7E .iBRL_OpxEDkUVU6Qyc2h:hover{filter:brightness(.95)}', ""]),
            s.locals = {
                container: "oSJSH7yzskQpe_f7lM68",
                content: "tyD37EkBkKe74D6FAUXp",
                title: "AATBjkXxTTuEF2k7pGeg",
                recommended: "o120H92OZaGo5LIuS9Sg",
                user: "uwsV03KyWDD2tRYUQLWa",
                info: "_tstRtdLkSjnB4Ok4lQz",
                avatarContainer: "r365Ti0_PSFns5oYMEWn",
                avatar: "qIwTV4VjF0w8GBixO5OQ",
                sex: "QFCbhtad2fGjjLJP1HPd",
                text: "cVd1TggnkXjKk9tQd7Zl",
                name: "r65nbLc4e2MXrmm435Cb",
                desc: "rvlrO4dQnU0jHlCyFj0j",
                action: "WrMsoOAM1caX8oMM5io9",
                hr: "I_kac891ZLOFqpa7jBdD",
                data: "fMT1pg_h0bc5nzHxh6G8",
                buttonContainer: "Jl9gmbTUXohlHYKGXW7E",
                extraText: "iBRL_OpxEDkUVU6Qyc2h"
            };
            const u = s
        }
        ,
        8891: (r, c, t) => {
            "use strict";
            t.r(c),
            t.d(c, {
                default: () => u
            });
            var n = t(1047)
              , o = t.n(n)
              , e = t(2990)
              , a = t.n(e)
              , s = a()(o());
            s.push([r.id, '.lTVHcsOw7DbV4jhhKLaI,.lTVHcsOw7DbV4jhhKLaI .E7kGUCmesQzT6arcbXYo{display:flex;flex-direction:column;gap:16px}.lTVHcsOw7DbV4jhhKLaI .E7kGUCmesQzT6arcbXYo{align-items:flex-start;align-self:stretch;background-color:#f6faff;background-color:var(--blue-1,#f6faff);border-radius:12px;border-radius:var(--radius-5,12px);padding:16px}.lTVHcsOw7DbV4jhhKLaI .E7kGUCmesQzT6arcbXYo .yrFSwCesVaRIK2kLWChP{color:#326bfb;color:var(--blue-6,#326bfb);font-family:PingFang SC;font-size:14px;font-style:normal;font-weight:500;line-height:22px}.lTVHcsOw7DbV4jhhKLaI .E7kGUCmesQzT6arcbXYo .R_jfkftApXuBX0qjpQRl{align-items:flex-start;align-self:stretch;display:flex;gap:16px}.lTVHcsOw7DbV4jhhKLaI .E7kGUCmesQzT6arcbXYo .R_jfkftApXuBX0qjpQRl .kLRj8Rvf0pAeWryY4hRE{align-items:flex-start;display:flex;flex:1 0;flex-direction:column;gap:4px}.lTVHcsOw7DbV4jhhKLaI .E7kGUCmesQzT6arcbXYo .R_jfkftApXuBX0qjpQRl .kLRj8Rvf0pAeWryY4hRE .yrFSwCesVaRIK2kLWChP{font-feature-settings:"liga" off,"clig" off;color:#3e3e3e;font-family:PingFang SC;font-size:12px;font-style:normal;font-weight:400;line-height:normal}.lTVHcsOw7DbV4jhhKLaI .E7kGUCmesQzT6arcbXYo .R_jfkftApXuBX0qjpQRl .kLRj8Rvf0pAeWryY4hRE .pyUUuA_wGEkineiW3rfQ{align-items:baseline;color:#1d1d1f;display:flex;font-family:SF Pro Display;font-size:18px;font-style:normal;font-weight:700;gap:2px;justify-content:end;line-height:normal}.lTVHcsOw7DbV4jhhKLaI .E7kGUCmesQzT6arcbXYo .R_jfkftApXuBX0qjpQRl .kLRj8Rvf0pAeWryY4hRE .pyUUuA_wGEkineiW3rfQ .tAojO5luB3nlMuYrt3Qq{color:#1d1d1f;font-family:PingFang SC;font-size:12px;font-style:normal;font-weight:600;line-height:normal;transform:translateY(-5%)}.lTVHcsOw7DbV4jhhKLaI .jcbve_Y_X6XM9lEMQQHG{align-items:center;display:flex;gap:8px}.lTVHcsOw7DbV4jhhKLaI .jcbve_Y_X6XM9lEMQQHG .moJh2F4QS6HTFi21Pwys{align-items:center;background-color:#f5f6f9;border-radius:8px;color:#2c2e30;display:flex;font-family:PingFang SC;font-size:12px;font-style:normal;font-weight:400;gap:4px;height:32px;height:var(--sizing-9,32px);line-height:normal;padding:5px 12px;padding:5px var(--spacing-4,12px)}', ""]),
            s.locals = {
                container: "lTVHcsOw7DbV4jhhKLaI",
                historyContainer: "E7kGUCmesQzT6arcbXYo",
                title: "yrFSwCesVaRIK2kLWChP",
                content: "R_jfkftApXuBX0qjpQRl",
                item: "kLRj8Rvf0pAeWryY4hRE",
                num: "pyUUuA_wGEkineiW3rfQ",
                unit: "tAojO5luB3nlMuYrt3Qq",
                buttonContainer: "jcbve_Y_X6XM9lEMQQHG",
                extraText: "moJh2F4QS6HTFi21Pwys"
            };
            const u = s
        }
        ,
        3688: (r, c, t) => {
            "use strict";
            t.r(c),
            t.d(c, {
                default: () => u
            });
            var n = t(1047)
              , o = t.n(n)
              , e = t(2990)
              , a = t.n(e)
              , s = a()(o());
            s.push([r.id, ".WaaPM2N_6p1sChOlxebd{display:flex;flex-direction:column;gap:16px;margin-top:-8px;min-width:420px;width:100%}", ""]),
            s.locals = {
                container: "WaaPM2N_6p1sChOlxebd"
            };
            const u = s
        }
        ,
        751: (r, c, t) => {
            "use strict";
            t.r(c),
            t.d(c, {
                default: () => u
            });
            var n = t(1047)
              , o = t.n(n)
              , e = t(2990)
              , a = t.n(e)
              , s = a()(o());
            s.push([r.id, ".kpro-cps-overview{border:0;border-radius:3em;cursor:pointer;display:inline-block;font-family:Nunito Sans,Helvetica Neue,Helvetica,Arial,sans-serif;font-weight:700;line-height:1}.kpro-cps-overview--primary{background-color:#1ea7fd;color:#fff}.kpro-cps-overview--secondary{background-color:transparent;box-shadow:inset 0 0 0 1px rgba(0,0,0,.15);color:#333}.kpro-cps-overview--small{font-size:12px;padding:10px 16px}.kpro-cps-overview--medium{font-size:14px;padding:11px 20px}.kpro-cps-overview--large{font-size:16px;padding:12px 24px}.kpro-cps-overview-cards{align-items:center;display:flex;justify-content:space-between;margin-top:32px}", ""]);
            const u = s
        }
        ,
        7458: (r, c, t) => {
            "use strict";
            t.r(c),
            t.d(c, {
                default: () => u
            });
            var n = t(1047)
              , o = t.n(n)
              , e = t(2990)
              , a = t.n(e)
              , s = a()(o());
            s.push([r.id, ".kpro-common-event-collector-error-boundary-button{background:#326bfb;border-radius:4px;color:#fff;cursor:pointer;height:32px;margin-top:24px;padding:5px 15px}", ""]);
            const u = s
        }
        ,
        6294: (r, c, t) => {
            "use strict";
            t.r(c),
            t.d(c, {
                default: () => u
            });
            var n = t(1047)
              , o = t.n(n)
              , e = t(2990)
              , a = t.n(e)
              , s = a()(o());
            s.push([r.id, ".kpro-common-event-collector-mobile-result-container{align-items:center;display:flex;flex-direction:column;height:100%;width:100%}.kpro-common-event-collector-mobile-result-notice-png{height:84px;margin-top:20%;width:84px}.kpro-common-event-collector-mobile-result-info{color:#9c9c9c;font-size:14px;line-height:22px;margin:16px 0;text-align:center;width:80%}.kpro-common-event-collector-mobile-result-title{font-size:18px;font-weight:600;margin:22px 0 4px}", ""]);
            const u = s
        }
        ,
        709: (r, c, t) => {
            "use strict";
            t.r(c),
            t.d(c, {
                default: () => u
            });
            var n = t(1047)
              , o = t.n(n)
              , e = t(2990)
              , a = t.n(e)
              , s = a()(o());
            s.push([r.id, ".kpro-common-event-collector-pc-result-container{align-items:center;display:flex;flex-direction:column;height:100%;width:100%}.kpro-common-event-collector-pc-result-icon{margin-top:20%}.kpro-common-event-collector-pc-result-title{font-size:18px;font-weight:600;margin:22px 0 4px}.kpro-common-event-collector-pc-result-subTitle{color:#8c8c8c;line-height:22px}", ""]);
            const u = s
        }
        ,
        2990: r => {
            "use strict";
            r.exports = function(c) {
                var t = [];
                return t.toString = function() {
                    return this.map(function(o) {
                        var e = ""
                          , a = typeof o[5] != "undefined";
                        return o[4] && (e += "@supports (".concat(o[4], ") {")),
                        o[2] && (e += "@media ".concat(o[2], " {")),
                        a && (e += "@layer".concat(o[5].length > 0 ? " ".concat(o[5]) : "", " {")),
                        e += c(o),
                        a && (e += "}"),
                        o[2] && (e += "}"),
                        o[4] && (e += "}"),
                        e
                    }).join("")
                }
                ,
                t.i = function(o, e, a, s, u) {
                    typeof o == "string" && (o = [[null, o, void 0]]);
                    var l = {};
                    if (a)
                        for (var i = 0; i < this.length; i++) {
                            var f = this[i][0];
                            f != null && (l[f] = !0)
                        }
                    for (var p = 0; p < o.length; p++) {
                        var m = [].concat(o[p]);
                        a && l[m[0]] || (typeof u != "undefined" && (typeof m[5] == "undefined" || (m[1] = "@layer".concat(m[5].length > 0 ? " ".concat(m[5]) : "", " {").concat(m[1], "}")),
                        m[5] = u),
                        e && (m[2] && (m[1] = "@media ".concat(m[2], " {").concat(m[1], "}")),
                        m[2] = e),
                        s && (m[4] ? (m[1] = "@supports (".concat(m[4], ") {").concat(m[1], "}"),
                        m[4] = s) : m[4] = "".concat(s)),
                        t.push(m))
                    }
                }
                ,
                t
            }
        }
        ,
        1047: r => {
            "use strict";
            r.exports = function(c) {
                return c[1]
            }
        }
        ,
        7167: (r, c, t) => {
            var n = t(9486)
              , o = t(9676)
              , e = t(3545)
              , a = t(6166)
              , s = t(9425)
              , u = t(3229)
              , l = t(3533);
            l = l.__esModule ? l.default : l;
            var i = {};
            i.styleTagTransform = u,
            i.setAttributes = a,
            i.insert = e.bind(null, "head"),
            i.domAPI = o,
            i.insertStyleElement = s;
            var f = n(l, i);
            r.exports = l && l.locals || {}
        }
        ,
        3465: (r, c, t) => {
            var n = t(9486)
              , o = t(9676)
              , e = t(3545)
              , a = t(6166)
              , s = t(9425)
              , u = t(3229)
              , l = t(5349);
            l = l.__esModule ? l.default : l;
            var i = {};
            i.styleTagTransform = u,
            i.setAttributes = a,
            i.insert = e.bind(null, "head"),
            i.domAPI = o,
            i.insertStyleElement = s;
            var f = n(l, i);
            r.exports = l && l.locals || {}
        }
        ,
        6832: (r, c, t) => {
            var n = t(9486)
              , o = t(9676)
              , e = t(3545)
              , a = t(6166)
              , s = t(9425)
              , u = t(3229)
              , l = t(7606);
            l = l.__esModule ? l.default : l;
            var i = {};
            i.styleTagTransform = u,
            i.setAttributes = a,
            i.insert = e.bind(null, "head"),
            i.domAPI = o,
            i.insertStyleElement = s;
            var f = n(l, i);
            r.exports = l && l.locals || {}
        }
        ,
        8789: (r, c, t) => {
            var n = t(9486)
              , o = t(9676)
              , e = t(3545)
              , a = t(6166)
              , s = t(9425)
              , u = t(3229)
              , l = t(738);
            l = l.__esModule ? l.default : l;
            var i = {};
            i.styleTagTransform = u,
            i.setAttributes = a,
            i.insert = e.bind(null, "head"),
            i.domAPI = o,
            i.insertStyleElement = s;
            var f = n(l, i);
            r.exports = l && l.locals || {}
        }
        ,
        6147: (r, c, t) => {
            var n = t(9486)
              , o = t(9676)
              , e = t(3545)
              , a = t(6166)
              , s = t(9425)
              , u = t(3229)
              , l = t(8891);
            l = l.__esModule ? l.default : l;
            var i = {};
            i.styleTagTransform = u,
            i.setAttributes = a,
            i.insert = e.bind(null, "head"),
            i.domAPI = o,
            i.insertStyleElement = s;
            var f = n(l, i);
            r.exports = l && l.locals || {}
        }
        ,
        9033: (r, c, t) => {
            var n = t(9486)
              , o = t(9676)
              , e = t(3545)
              , a = t(6166)
              , s = t(9425)
              , u = t(3229)
              , l = t(3688);
            l = l.__esModule ? l.default : l;
            var i = {};
            i.styleTagTransform = u,
            i.setAttributes = a,
            i.insert = e.bind(null, "head"),
            i.domAPI = o,
            i.insertStyleElement = s;
            var f = n(l, i);
            r.exports = l && l.locals || {}
        }
        ,
        4353: (r, c, t) => {
            var n = t(9486)
              , o = t(9676)
              , e = t(3545)
              , a = t(6166)
              , s = t(9425)
              , u = t(3229)
              , l = t(751);
            l = l.__esModule ? l.default : l;
            var i = {};
            i.styleTagTransform = u,
            i.setAttributes = a,
            i.insert = e.bind(null, "head"),
            i.domAPI = o,
            i.insertStyleElement = s;
            var f = n(l, i);
            r.exports = l && l.locals || {}
        }
        ,
        2740: (r, c, t) => {
            var n = t(9486)
              , o = t(9676)
              , e = t(3545)
              , a = t(6166)
              , s = t(9425)
              , u = t(3229)
              , l = t(7458);
            l = l.__esModule ? l.default : l;
            var i = {};
            i.styleTagTransform = u,
            i.setAttributes = a,
            i.insert = e.bind(null, "head"),
            i.domAPI = o,
            i.insertStyleElement = s;
            var f = n(l, i);
            r.exports = l && l.locals || {}
        }
        ,
        3176: (r, c, t) => {
            var n = t(9486)
              , o = t(9676)
              , e = t(3545)
              , a = t(6166)
              , s = t(9425)
              , u = t(3229)
              , l = t(6294);
            l = l.__esModule ? l.default : l;
            var i = {};
            i.styleTagTransform = u,
            i.setAttributes = a,
            i.insert = e.bind(null, "head"),
            i.domAPI = o,
            i.insertStyleElement = s;
            var f = n(l, i);
            r.exports = l && l.locals || {}
        }
        ,
        4274: (r, c, t) => {
            var n = t(9486)
              , o = t(9676)
              , e = t(3545)
              , a = t(6166)
              , s = t(9425)
              , u = t(3229)
              , l = t(709);
            l = l.__esModule ? l.default : l;
            var i = {};
            i.styleTagTransform = u,
            i.setAttributes = a,
            i.insert = e.bind(null, "head"),
            i.domAPI = o,
            i.insertStyleElement = s;
            var f = n(l, i);
            r.exports = l && l.locals || {}
        }
        ,
        9486: r => {
            "use strict";
            var c = [];
            function t(e) {
                for (var a = -1, s = 0; s < c.length; s++)
                    if (c[s].identifier === e) {
                        a = s;
                        break
                    }
                return a
            }
            function n(e, a) {
                for (var s = {}, u = [], l = 0; l < e.length; l++) {
                    var i = e[l]
                      , f = a.base ? i[0] + a.base : i[0]
                      , p = s[f] || 0
                      , m = "".concat(f, " ").concat(p);
                    s[f] = p + 1;
                    var g = t(m)
                      , E = {
                        css: i[1],
                        media: i[2],
                        sourceMap: i[3],
                        supports: i[4],
                        layer: i[5]
                    };
                    if (g !== -1)
                        c[g].references++,
                        c[g].updater(E);
                    else {
                        var _ = o(E, a);
                        a.byIndex = l,
                        c.splice(l, 0, {
                            identifier: m,
                            updater: _,
                            references: 1
                        })
                    }
                    u.push(m)
                }
                return u
            }
            function o(e, a) {
                var s = a.domAPI(a);
                s.update(e);
                var u = function(i) {
                    if (i) {
                        if (i.css === e.css && i.media === e.media && i.sourceMap === e.sourceMap && i.supports === e.supports && i.layer === e.layer)
                            return;
                        s.update(e = i)
                    } else
                        s.remove()
                };
                return u
            }
            r.exports = function(e, a) {
                a = a || {},
                e = e || [];
                var s = n(e, a);
                return function(l) {
                    l = l || [];
                    for (var i = 0; i < s.length; i++) {
                        var f = s[i]
                          , p = t(f);
                        c[p].references--
                    }
                    for (var m = n(l, a), g = 0; g < s.length; g++) {
                        var E = s[g]
                          , _ = t(E);
                        c[_].references === 0 && (c[_].updater(),
                        c.splice(_, 1))
                    }
                    s = m
                }
            }
        }
        ,
        3545: r => {
            "use strict";
            var c = {};
            function t(o) {
                if (typeof c[o] == "undefined") {
                    var e = document.querySelector(o);
                    if (window.HTMLIFrameElement && e instanceof window.HTMLIFrameElement)
                        try {
                            e = e.contentDocument.head
                        } catch (a) {
                            e = null
                        }
                    c[o] = e
                }
                return c[o]
            }
            function n(o, e) {
                var a = t(o);
                if (!a)
                    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                a.appendChild(e)
            }
            r.exports = n
        }
        ,
        9425: r => {
            "use strict";
            function c(t) {
                var n = document.createElement("style");
                return t.setAttributes(n, t.attributes),
                t.insert(n, t.options),
                n
            }
            r.exports = c
        }
        ,
        6166: (r, c, t) => {
            "use strict";
            function n(o) {
                var e = t.nc;
                e && o.setAttribute("nonce", e)
            }
            r.exports = n
        }
        ,
        9676: r => {
            "use strict";
            function c(o, e, a) {
                var s = "";
                a.supports && (s += "@supports (".concat(a.supports, ") {")),
                a.media && (s += "@media ".concat(a.media, " {"));
                var u = typeof a.layer != "undefined";
                u && (s += "@layer".concat(a.layer.length > 0 ? " ".concat(a.layer) : "", " {")),
                s += a.css,
                u && (s += "}"),
                a.media && (s += "}"),
                a.supports && (s += "}");
                var l = a.sourceMap;
                l && typeof btoa != "undefined" && (s += `
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(l)))), " */")),
                e.styleTagTransform(s, o, e.options)
            }
            function t(o) {
                if (o.parentNode === null)
                    return !1;
                o.parentNode.removeChild(o)
            }
            function n(o) {
                if (typeof document == "undefined")
                    return {
                        update: function() {},
                        remove: function() {}
                    };
                var e = o.insertStyleElement(o);
                return {
                    update: function(s) {
                        c(e, o, s)
                    },
                    remove: function() {
                        t(e)
                    }
                }
            }
            r.exports = n
        }
        ,
        3229: r => {
            "use strict";
            function c(t, n) {
                if (n.styleSheet)
                    n.styleSheet.cssText = t;
                else {
                    for (; n.firstChild; )
                        n.removeChild(n.firstChild);
                    n.appendChild(document.createTextNode(t))
                }
            }
            r.exports = c
        }
        ,
        5800: function(r, c, t) {
            (function(n, o) {
                o(c, t(9787))
            }
            )(this, function(n, o) {
                "use strict";
                function e(g) {
                    if (g && g.__esModule)
                        return g;
                    var E = Object.create(null);
                    return g && Object.keys(g).forEach(function(_) {
                        if (_ !== "default") {
                            var S = Object.getOwnPropertyDescriptor(g, _);
                            Object.defineProperty(E, _, S.get ? S : {
                                enumerable: !0,
                                get: function() {
                                    return g[_]
                                }
                            })
                        }
                    }),
                    E.default = g,
                    Object.freeze(E)
                }
                var a = e(o);
                function s(g, E) {
                    return s = Object.setPrototypeOf || function(S, M) {
                        return S.__proto__ = M,
                        S
                    }
                    ,
                    s(g, E)
                }
                function u(g, E) {
                    g.prototype = Object.create(E.prototype),
                    g.prototype.constructor = g,
                    s(g, E)
                }
                var l = function(E, _) {
                    return E === void 0 && (E = []),
                    _ === void 0 && (_ = []),
                    E.length !== _.length || E.some(function(S, M) {
                        return !Object.is(S, _[M])
                    })
                }
                  , i = {
                    error: null
                }
                  , f = function(g) {
                    u(E, g);
                    function E() {
                        for (var S, M = arguments.length, A = new Array(M), I = 0; I < M; I++)
                            A[I] = arguments[I];
                        return S = g.call.apply(g, [this].concat(A)) || this,
                        S.state = i,
                        S.resetErrorBoundary = function() {
                            for (var O, b = arguments.length, T = new Array(b), L = 0; L < b; L++)
                                T[L] = arguments[L];
                            S.props.onReset == null || (O = S.props).onReset.apply(O, T),
                            S.reset()
                        }
                        ,
                        S
                    }
                    E.getDerivedStateFromError = function(M) {
                        return {
                            error: M
                        }
                    }
                    ;
                    var _ = E.prototype;
                    return _.reset = function() {
                        this.setState(i)
                    }
                    ,
                    _.componentDidCatch = function(M, A) {
                        var I, O;
                        (I = (O = this.props).onError) == null || I.call(O, M, A)
                    }
                    ,
                    _.componentDidUpdate = function(M, A) {
                        var I = this.state.error
                          , O = this.props.resetKeys;
                        if (I !== null && A.error !== null && l(M.resetKeys, O)) {
                            var b, T;
                            (b = (T = this.props).onResetKeysChange) == null || b.call(T, M.resetKeys, O),
                            this.reset()
                        }
                    }
                    ,
                    _.render = function() {
                        var M = this.state.error
                          , A = this.props
                          , I = A.fallbackRender
                          , O = A.FallbackComponent
                          , b = A.fallback;
                        if (M !== null) {
                            var T = {
                                error: M,
                                resetErrorBoundary: this.resetErrorBoundary
                            };
                            if (a.isValidElement(b))
                                return b;
                            if (typeof I == "function")
                                return I(T);
                            if (O)
                                return a.createElement(O, T);
                            throw new Error("react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop")
                        }
                        return this.props.children
                    }
                    ,
                    E
                }(a.Component);
                function p(g, E) {
                    var _ = function(A) {
                        return a.createElement(f, E, a.createElement(g, A))
                    }
                      , S = g.displayName || g.name || "Unknown";
                    return _.displayName = "withErrorBoundary(" + S + ")",
                    _
                }
                function m(g) {
                    var E = a.useState(null)
                      , _ = E[0]
                      , S = E[1];
                    if (g != null)
                        throw g;
                    if (_ != null)
                        throw _;
                    return S
                }
                n.ErrorBoundary = f,
                n.useErrorHandler = m,
                n.withErrorBoundary = p,
                Object.defineProperty(n, "__esModule", {
                    value: !0
                })
            })
        },
        2012: r => {
            "use strict";
            r.exports = qt
        }
        ,
        5055: r => {
            "use strict";
            r.exports = te
        }
        ,
        241: r => {
            "use strict";
            r.exports = mt
        }
        ,
        3078: r => {
            "use strict";
            r.exports = w
        }
        ,
        7204: r => {
            "use strict";
            r.exports = Q
        }
        ,
        5041: r => {
            "use strict";
            r.exports = J
        }
        ,
        9787: r => {
            "use strict";
            r.exports = W
        }
        ,
        509: (r, c, t) => {
            "use strict";
            var n = t(9985)
              , o = t(3691)
              , e = TypeError;
            r.exports = function(a) {
                if (n(a))
                    return a;
                throw new e(o(a) + " is not a function")
            }
        }
        ,
        7370: (r, c, t) => {
            "use strict";
            var n = t(4201)
              , o = t(5391)
              , e = t(2560).f
              , a = n("unscopables")
              , s = Array.prototype;
            s[a] === void 0 && e(s, a, {
                configurable: !0,
                value: o(null)
            }),
            r.exports = function(u) {
                s[a][u] = !0
            }
        }
        ,
        767: (r, c, t) => {
            "use strict";
            var n = t(3622)
              , o = TypeError;
            r.exports = function(e, a) {
                if (n(a, e))
                    return e;
                throw new o("Incorrect invocation")
            }
        }
        ,
        5027: (r, c, t) => {
            "use strict";
            var n = t(8999)
              , o = String
              , e = TypeError;
            r.exports = function(a) {
                if (n(a))
                    return a;
                throw new e(o(a) + " is not an object")
            }
        }
        ,
        2872: (r, c, t) => {
            "use strict";
            var n = t(690)
              , o = t(7578)
              , e = t(6310);
            r.exports = function(s) {
                for (var u = n(this), l = e(u), i = arguments.length, f = o(i > 1 ? arguments[1] : void 0, l), p = i > 2 ? arguments[2] : void 0, m = p === void 0 ? l : o(p, l); m > f; )
                    u[f++] = s;
                return u
            }
        }
        ,
        4328: (r, c, t) => {
            "use strict";
            var n = t(5290)
              , o = t(7578)
              , e = t(6310)
              , a = function(s) {
                return function(u, l, i) {
                    var f = n(u), p = e(f), m = o(i, p), g;
                    if (s && l !== l) {
                        for (; p > m; )
                            if (g = f[m++],
                            g !== g)
                                return !0
                    } else
                        for (; p > m; m++)
                            if ((s || m in f) && f[m] === l)
                                return s || m || 0;
                    return !s && -1
                }
            };
            r.exports = {
                includes: a(!0),
                indexOf: a(!1)
            }
        }
        ,
        2960: (r, c, t) => {
            "use strict";
            var n = t(4071)
              , o = t(8844)
              , e = t(4413)
              , a = t(690)
              , s = t(6310)
              , u = t(7120)
              , l = o([].push)
              , i = function(f) {
                var p = f === 1
                  , m = f === 2
                  , g = f === 3
                  , E = f === 4
                  , _ = f === 6
                  , S = f === 7
                  , M = f === 5 || _;
                return function(A, I, O, b) {
                    for (var T = a(A), L = e(T), N = s(L), Z = n(I, O), k = 0, et = b || u, G = p ? et(A, N) : m || S ? et(A, 0) : void 0, st, dt; N > k; k++)
                        if ((M || k in L) && (st = L[k],
                        dt = Z(st, k, T),
                        f))
                            if (p)
                                G[k] = dt;
                            else if (dt)
                                switch (f) {
                                case 3:
                                    return !0;
                                case 5:
                                    return st;
                                case 6:
                                    return k;
                                case 2:
                                    l(G, st)
                                }
                            else
                                switch (f) {
                                case 4:
                                    return !1;
                                case 7:
                                    l(G, st)
                                }
                    return _ ? -1 : g || E ? E : G
                }
            };
            r.exports = {
                forEach: i(0),
                map: i(1),
                filter: i(2),
                some: i(3),
                every: i(4),
                find: i(5),
                findIndex: i(6),
                filterReject: i(7)
            }
        }
        ,
        9042: (r, c, t) => {
            "use strict";
            var n = t(3689)
              , o = t(4201)
              , e = t(3615)
              , a = o("species");
            r.exports = function(s) {
                return e >= 51 || !n(function() {
                    var u = []
                      , l = u.constructor = {};
                    return l[a] = function() {
                        return {
                            foo: 1
                        }
                    }
                    ,
                    u[s](Boolean).foo !== 1
                })
            }
        }
        ,
        5271: (r, c, t) => {
            "use strict";
            var n = t(2297)
              , o = t(9429)
              , e = t(8999)
              , a = t(4201)
              , s = a("species")
              , u = Array;
            r.exports = function(l) {
                var i;
                return n(l) && (i = l.constructor,
                o(i) && (i === u || n(i.prototype)) ? i = void 0 : e(i) && (i = i[s],
                i === null && (i = void 0))),
                i === void 0 ? u : i
            }
        }
        ,
        7120: (r, c, t) => {
            "use strict";
            var n = t(5271);
            r.exports = function(o, e) {
                return new (n(o))(e === 0 ? 0 : e)
            }
        }
        ,
        1228: (r, c, t) => {
            "use strict";
            var n = t(5027)
              , o = t(2125);
            r.exports = function(e, a, s, u) {
                try {
                    return u ? a(n(s)[0], s[1]) : a(s)
                } catch (l) {
                    o(e, "throw", l)
                }
            }
        }
        ,
        6648: (r, c, t) => {
            "use strict";
            var n = t(8844)
              , o = n({}.toString)
              , e = n("".slice);
            r.exports = function(a) {
                return e(o(a), 8, -1)
            }
        }
        ,
        926: (r, c, t) => {
            "use strict";
            var n = t(3043)
              , o = t(9985)
              , e = t(6648)
              , a = t(4201)
              , s = a("toStringTag")
              , u = Object
              , l = e(function() {
                return arguments
            }()) === "Arguments"
              , i = function(f, p) {
                try {
                    return f[p]
                } catch (m) {}
            };
            r.exports = n ? e : function(f) {
                var p, m, g;
                return f === void 0 ? "Undefined" : f === null ? "Null" : typeof (m = i(p = u(f), s)) == "string" ? m : l ? e(p) : (g = e(p)) === "Object" && o(p.callee) ? "Arguments" : g
            }
        }
        ,
        8758: (r, c, t) => {
            "use strict";
            var n = t(6812)
              , o = t(9152)
              , e = t(2474)
              , a = t(2560);
            r.exports = function(s, u, l) {
                for (var i = o(u), f = a.f, p = e.f, m = 0; m < i.length; m++) {
                    var g = i[m];
                    !n(s, g) && !(l && n(l, g)) && f(s, g, p(u, g))
                }
            }
        }
        ,
        1748: (r, c, t) => {
            "use strict";
            var n = t(3689);
            r.exports = !n(function() {
                function o() {}
                return o.prototype.constructor = null,
                Object.getPrototypeOf(new o) !== o.prototype
            })
        }
        ,
        7807: r => {
            "use strict";
            r.exports = function(c, t) {
                return {
                    value: c,
                    done: t
                }
            }
        }
        ,
        5773: (r, c, t) => {
            "use strict";
            var n = t(7697)
              , o = t(2560)
              , e = t(5684);
            r.exports = n ? function(a, s, u) {
                return o.f(a, s, e(1, u))
            }
            : function(a, s, u) {
                return a[s] = u,
                a
            }
        }
        ,
        5684: r => {
            "use strict";
            r.exports = function(c, t) {
                return {
                    enumerable: !(c & 1),
                    configurable: !(c & 2),
                    writable: !(c & 4),
                    value: t
                }
            }
        }
        ,
        6522: (r, c, t) => {
            "use strict";
            var n = t(8360)
              , o = t(2560)
              , e = t(5684);
            r.exports = function(a, s, u) {
                var l = n(s);
                l in a ? o.f(a, l, e(0, u)) : a[l] = u
            }
        }
        ,
        2148: (r, c, t) => {
            "use strict";
            var n = t(8702)
              , o = t(2560);
            r.exports = function(e, a, s) {
                return s.get && n(s.get, a, {
                    getter: !0
                }),
                s.set && n(s.set, a, {
                    setter: !0
                }),
                o.f(e, a, s)
            }
        }
        ,
        1880: (r, c, t) => {
            "use strict";
            var n = t(9985)
              , o = t(2560)
              , e = t(8702)
              , a = t(5014);
            r.exports = function(s, u, l, i) {
                i || (i = {});
                var f = i.enumerable
                  , p = i.name !== void 0 ? i.name : u;
                if (n(l) && e(l, p, i),
                i.global)
                    f ? s[u] = l : a(u, l);
                else {
                    try {
                        i.unsafe ? s[u] && (f = !0) : delete s[u]
                    } catch (m) {}
                    f ? s[u] = l : o.f(s, u, {
                        value: l,
                        enumerable: !1,
                        configurable: !i.nonConfigurable,
                        writable: !i.nonWritable
                    })
                }
                return s
            }
        }
        ,
        6045: (r, c, t) => {
            "use strict";
            var n = t(1880);
            r.exports = function(o, e, a) {
                for (var s in e)
                    n(o, s, e[s], a);
                return o
            }
        }
        ,
        5014: (r, c, t) => {
            "use strict";
            var n = t(9037)
              , o = Object.defineProperty;
            r.exports = function(e, a) {
                try {
                    o(n, e, {
                        value: a,
                        configurable: !0,
                        writable: !0
                    })
                } catch (s) {
                    n[e] = a
                }
                return a
            }
        }
        ,
        7697: (r, c, t) => {
            "use strict";
            var n = t(3689);
            r.exports = !n(function() {
                return Object.defineProperty({}, 1, {
                    get: function() {
                        return 7
                    }
                })[1] !== 7
            })
        }
        ,
        2659: r => {
            "use strict";
            var c = typeof document == "object" && document.all
              , t = typeof c == "undefined" && c !== void 0;
            r.exports = {
                all: c,
                IS_HTMLDDA: t
            }
        }
        ,
        6420: (r, c, t) => {
            "use strict";
            var n = t(9037)
              , o = t(8999)
              , e = n.document
              , a = o(e) && o(e.createElement);
            r.exports = function(s) {
                return a ? e.createElement(s) : {}
            }
        }
        ,
        5565: r => {
            "use strict";
            var c = TypeError
              , t = 9007199254740991;
            r.exports = function(n) {
                if (n > t)
                    throw c("Maximum allowed index exceeded");
                return n
            }
        }
        ,
        71: r => {
            "use strict";
            r.exports = typeof navigator != "undefined" && String(navigator.userAgent) || ""
        }
        ,
        3615: (r, c, t) => {
            "use strict";
            var n = t(9037), o = t(71), e = n.process, a = n.Deno, s = e && e.versions || a && a.version, u = s && s.v8, l, i;
            u && (l = u.split("."),
            i = l[0] > 0 && l[0] < 4 ? 1 : +(l[0] + l[1])),
            !i && o && (l = o.match(/Edge\/(\d+)/),
            (!l || l[1] >= 74) && (l = o.match(/Chrome\/(\d+)/),
            l && (i = +l[1]))),
            r.exports = i
        }
        ,
        2739: r => {
            "use strict";
            r.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
        }
        ,
        9989: (r, c, t) => {
            "use strict";
            var n = t(9037)
              , o = t(2474).f
              , e = t(5773)
              , a = t(1880)
              , s = t(5014)
              , u = t(8758)
              , l = t(5266);
            r.exports = function(i, f) {
                var p = i.target, m = i.global, g = i.stat, E, _, S, M, A, I;
                if (m ? _ = n : g ? _ = n[p] || s(p, {}) : _ = (n[p] || {}).prototype,
                _)
                    for (S in f) {
                        if (A = f[S],
                        i.dontCallGetSet ? (I = o(_, S),
                        M = I && I.value) : M = _[S],
                        E = l(m ? S : p + (g ? "." : "#") + S, i.forced),
                        !E && M !== void 0) {
                            if (typeof A == typeof M)
                                continue;
                            u(A, M)
                        }
                        (i.sham || M && M.sham) && e(A, "sham", !0),
                        a(_, S, A, i)
                    }
            }
        }
        ,
        3689: r => {
            "use strict";
            r.exports = function(c) {
                try {
                    return !!c()
                } catch (t) {
                    return !0
                }
            }
        }
        ,
        4071: (r, c, t) => {
            "use strict";
            var n = t(6576)
              , o = t(509)
              , e = t(7215)
              , a = n(n.bind);
            r.exports = function(s, u) {
                return o(s),
                u === void 0 ? s : e ? a(s, u) : function() {
                    return s.apply(u, arguments)
                }
            }
        }
        ,
        7215: (r, c, t) => {
            "use strict";
            var n = t(3689);
            r.exports = !n(function() {
                var o = function() {}
                .bind();
                return typeof o != "function" || o.hasOwnProperty("prototype")
            })
        }
        ,
        2615: (r, c, t) => {
            "use strict";
            var n = t(7215)
              , o = Function.prototype.call;
            r.exports = n ? o.bind(o) : function() {
                return o.apply(o, arguments)
            }
        }
        ,
        1236: (r, c, t) => {
            "use strict";
            var n = t(7697)
              , o = t(6812)
              , e = Function.prototype
              , a = n && Object.getOwnPropertyDescriptor
              , s = o(e, "name")
              , u = s && function() {}
            .name === "something"
              , l = s && (!n || n && a(e, "name").configurable);
            r.exports = {
                EXISTS: s,
                PROPER: u,
                CONFIGURABLE: l
            }
        }
        ,
        6576: (r, c, t) => {
            "use strict";
            var n = t(6648)
              , o = t(8844);
            r.exports = function(e) {
                if (n(e) === "Function")
                    return o(e)
            }
        }
        ,
        8844: (r, c, t) => {
            "use strict";
            var n = t(7215)
              , o = Function.prototype
              , e = o.call
              , a = n && o.bind.bind(e, e);
            r.exports = n ? a : function(s) {
                return function() {
                    return e.apply(s, arguments)
                }
            }
        }
        ,
        6058: (r, c, t) => {
            "use strict";
            var n = t(9037)
              , o = t(9985)
              , e = function(a) {
                return o(a) ? a : void 0
            };
            r.exports = function(a, s) {
                return arguments.length < 2 ? e(n[a]) : n[a] && n[a][s]
            }
        }
        ,
        2302: r => {
            "use strict";
            r.exports = function(c) {
                return {
                    iterator: c,
                    next: c.next,
                    done: !1
                }
            }
        }
        ,
        4849: (r, c, t) => {
            "use strict";
            var n = t(509)
              , o = t(981);
            r.exports = function(e, a) {
                var s = e[a];
                return o(s) ? void 0 : n(s)
            }
        }
        ,
        9037: function(r, c, t) {
            "use strict";
            var n = function(o) {
                return o && o.Math === Math && o
            };
            r.exports = n(typeof globalThis == "object" && globalThis) || n(typeof window == "object" && window) || n(typeof self == "object" && self) || n(typeof t.g == "object" && t.g) || n(typeof this == "object" && this) || function() {
                return this
            }() || Function("return this")()
        },
        6812: (r, c, t) => {
            "use strict";
            var n = t(8844)
              , o = t(690)
              , e = n({}.hasOwnProperty);
            r.exports = Object.hasOwn || function(s, u) {
                return e(o(s), u)
            }
        }
        ,
        7248: r => {
            "use strict";
            r.exports = {}
        }
        ,
        2688: (r, c, t) => {
            "use strict";
            var n = t(6058);
            r.exports = n("document", "documentElement")
        }
        ,
        8506: (r, c, t) => {
            "use strict";
            var n = t(7697)
              , o = t(3689)
              , e = t(6420);
            r.exports = !n && !o(function() {
                return Object.defineProperty(e("div"), "a", {
                    get: function() {
                        return 7
                    }
                }).a !== 7
            })
        }
        ,
        4413: (r, c, t) => {
            "use strict";
            var n = t(8844)
              , o = t(3689)
              , e = t(6648)
              , a = Object
              , s = n("".split);
            r.exports = o(function() {
                return !a("z").propertyIsEnumerable(0)
            }) ? function(u) {
                return e(u) === "String" ? s(u, "") : a(u)
            }
            : a
        }
        ,
        6738: (r, c, t) => {
            "use strict";
            var n = t(8844)
              , o = t(9985)
              , e = t(4091)
              , a = n(Function.toString);
            o(e.inspectSource) || (e.inspectSource = function(s) {
                return a(s)
            }
            ),
            r.exports = e.inspectSource
        }
        ,
        618: (r, c, t) => {
            "use strict";
            var n = t(9834), o = t(9037), e = t(8999), a = t(5773), s = t(6812), u = t(4091), l = t(2713), i = t(7248), f = "Object already initialized", p = o.TypeError, m = o.WeakMap, g, E, _, S = function(O) {
                return _(O) ? E(O) : g(O, {})
            }, M = function(O) {
                return function(b) {
                    var T;
                    if (!e(b) || (T = E(b)).type !== O)
                        throw new p("Incompatible receiver, " + O + " required");
                    return T
                }
            };
            if (n || u.state) {
                var A = u.state || (u.state = new m);
                A.get = A.get,
                A.has = A.has,
                A.set = A.set,
                g = function(O, b) {
                    if (A.has(O))
                        throw new p(f);
                    return b.facade = O,
                    A.set(O, b),
                    b
                }
                ,
                E = function(O) {
                    return A.get(O) || {}
                }
                ,
                _ = function(O) {
                    return A.has(O)
                }
            } else {
                var I = l("state");
                i[I] = !0,
                g = function(O, b) {
                    if (s(O, I))
                        throw new p(f);
                    return b.facade = O,
                    a(O, I, b),
                    b
                }
                ,
                E = function(O) {
                    return s(O, I) ? O[I] : {}
                }
                ,
                _ = function(O) {
                    return s(O, I)
                }
            }
            r.exports = {
                set: g,
                get: E,
                has: _,
                enforce: S,
                getterFor: M
            }
        }
        ,
        2297: (r, c, t) => {
            "use strict";
            var n = t(6648);
            r.exports = Array.isArray || function(e) {
                return n(e) === "Array"
            }
        }
        ,
        9985: (r, c, t) => {
            "use strict";
            var n = t(2659)
              , o = n.all;
            r.exports = n.IS_HTMLDDA ? function(e) {
                return typeof e == "function" || e === o
            }
            : function(e) {
                return typeof e == "function"
            }
        }
        ,
        9429: (r, c, t) => {
            "use strict";
            var n = t(8844)
              , o = t(3689)
              , e = t(9985)
              , a = t(926)
              , s = t(6058)
              , u = t(6738)
              , l = function() {}
              , i = []
              , f = s("Reflect", "construct")
              , p = /^\s*(?:class|function)\b/
              , m = n(p.exec)
              , g = !p.test(l)
              , E = function(M) {
                if (!e(M))
                    return !1;
                try {
                    return f(l, i, M),
                    !0
                } catch (A) {
                    return !1
                }
            }
              , _ = function(M) {
                if (!e(M))
                    return !1;
                switch (a(M)) {
                case "AsyncFunction":
                case "GeneratorFunction":
                case "AsyncGeneratorFunction":
                    return !1
                }
                try {
                    return g || !!m(p, u(M))
                } catch (A) {
                    return !0
                }
            };
            _.sham = !0,
            r.exports = !f || o(function() {
                var S;
                return E(E.call) || !E(Object) || !E(function() {
                    S = !0
                }) || S
            }) ? _ : E
        }
        ,
        5266: (r, c, t) => {
            "use strict";
            var n = t(3689)
              , o = t(9985)
              , e = /#|\.prototype\./
              , a = function(f, p) {
                var m = u[s(f)];
                return m === i ? !0 : m === l ? !1 : o(p) ? n(p) : !!p
            }
              , s = a.normalize = function(f) {
                return String(f).replace(e, ".").toLowerCase()
            }
              , u = a.data = {}
              , l = a.NATIVE = "N"
              , i = a.POLYFILL = "P";
            r.exports = a
        }
        ,
        981: r => {
            "use strict";
            r.exports = function(c) {
                return c == null
            }
        }
        ,
        8999: (r, c, t) => {
            "use strict";
            var n = t(9985)
              , o = t(2659)
              , e = o.all;
            r.exports = o.IS_HTMLDDA ? function(a) {
                return typeof a == "object" ? a !== null : n(a) || a === e
            }
            : function(a) {
                return typeof a == "object" ? a !== null : n(a)
            }
        }
        ,
        3931: r => {
            "use strict";
            r.exports = !1
        }
        ,
        734: (r, c, t) => {
            "use strict";
            var n = t(6058)
              , o = t(9985)
              , e = t(3622)
              , a = t(9525)
              , s = Object;
            r.exports = a ? function(u) {
                return typeof u == "symbol"
            }
            : function(u) {
                var l = n("Symbol");
                return o(l) && e(l.prototype, s(u))
            }
        }
        ,
        2125: (r, c, t) => {
            "use strict";
            var n = t(2615)
              , o = t(5027)
              , e = t(4849);
            r.exports = function(a, s, u) {
                var l, i;
                o(a);
                try {
                    if (l = e(a, "return"),
                    !l) {
                        if (s === "throw")
                            throw u;
                        return u
                    }
                    l = n(l, a)
                } catch (f) {
                    i = !0,
                    l = f
                }
                if (s === "throw")
                    throw u;
                if (i)
                    throw l;
                return o(l),
                u
            }
        }
        ,
        5419: (r, c, t) => {
            "use strict";
            var n = t(2615)
              , o = t(5391)
              , e = t(5773)
              , a = t(6045)
              , s = t(4201)
              , u = t(618)
              , l = t(4849)
              , i = t(2013).IteratorPrototype
              , f = t(7807)
              , p = t(2125)
              , m = s("toStringTag")
              , g = "IteratorHelper"
              , E = "WrapForValidIterator"
              , _ = u.set
              , S = function(I) {
                var O = u.getterFor(I ? E : g);
                return a(o(i), {
                    next: function() {
                        var T = O(this);
                        if (I)
                            return T.nextHandler();
                        try {
                            var L = T.done ? void 0 : T.nextHandler();
                            return f(L, T.done)
                        } catch (N) {
                            throw T.done = !0,
                            N
                        }
                    },
                    return: function() {
                        var b = O(this)
                          , T = b.iterator;
                        if (b.done = !0,
                        I) {
                            var L = l(T, "return");
                            return L ? n(L, T) : f(void 0, !0)
                        }
                        if (b.inner)
                            try {
                                p(b.inner.iterator, "normal")
                            } catch (N) {
                                return p(T, "throw", N)
                            }
                        return p(T, "normal"),
                        f(void 0, !0)
                    }
                })
            }
              , M = S(!0)
              , A = S(!1);
            e(A, m, "Iterator Helper"),
            r.exports = function(I, O) {
                var b = function(L, N) {
                    N ? (N.iterator = L.iterator,
                    N.next = L.next) : N = L,
                    N.type = O ? E : g,
                    N.nextHandler = I,
                    N.counter = 0,
                    N.done = !1,
                    _(this, N)
                };
                return b.prototype = O ? M : A,
                b
            }
        }
        ,
        8983: (r, c, t) => {
            "use strict";
            var n = t(2615)
              , o = t(509)
              , e = t(5027)
              , a = t(2302)
              , s = t(5419)
              , u = t(1228)
              , l = s(function() {
                var i = this.iterator
                  , f = e(n(this.next, i))
                  , p = this.done = !!f.done;
                if (!p)
                    return u(i, this.mapper, [f.value, this.counter++], !0)
            });
            r.exports = function(f) {
                return e(this),
                o(f),
                new l(a(this),{
                    mapper: f
                })
            }
        }
        ,
        2013: (r, c, t) => {
            "use strict";
            var n = t(3689), o = t(9985), e = t(8999), a = t(5391), s = t(1868), u = t(1880), l = t(4201), i = t(3931), f = l("iterator"), p = !1, m, g, E;
            [].keys && (E = [].keys(),
            "next"in E ? (g = s(s(E)),
            g !== Object.prototype && (m = g)) : p = !0);
            var _ = !e(m) || n(function() {
                var S = {};
                return m[f].call(S) !== S
            });
            _ ? m = {} : i && (m = a(m)),
            o(m[f]) || u(m, f, function() {
                return this
            }),
            r.exports = {
                IteratorPrototype: m,
                BUGGY_SAFARI_ITERATORS: p
            }
        }
        ,
        6310: (r, c, t) => {
            "use strict";
            var n = t(3126);
            r.exports = function(o) {
                return n(o.length)
            }
        }
        ,
        8702: (r, c, t) => {
            "use strict";
            var n = t(8844)
              , o = t(3689)
              , e = t(9985)
              , a = t(6812)
              , s = t(7697)
              , u = t(1236).CONFIGURABLE
              , l = t(6738)
              , i = t(618)
              , f = i.enforce
              , p = i.get
              , m = String
              , g = Object.defineProperty
              , E = n("".slice)
              , _ = n("".replace)
              , S = n([].join)
              , M = s && !o(function() {
                return g(function() {}, "length", {
                    value: 8
                }).length !== 8
            })
              , A = String(String).split("String")
              , I = r.exports = function(O, b, T) {
                E(m(b), 0, 7) === "Symbol(" && (b = "[" + _(m(b), /^Symbol\(([^)]*)\)/, "$1") + "]"),
                T && T.getter && (b = "get " + b),
                T && T.setter && (b = "set " + b),
                (!a(O, "name") || u && O.name !== b) && (s ? g(O, "name", {
                    value: b,
                    configurable: !0
                }) : O.name = b),
                M && T && a(T, "arity") && O.length !== T.arity && g(O, "length", {
                    value: T.arity
                });
                try {
                    T && a(T, "constructor") && T.constructor ? s && g(O, "prototype", {
                        writable: !1
                    }) : O.prototype && (O.prototype = void 0)
                } catch (N) {}
                var L = f(O);
                return a(L, "source") || (L.source = S(A, typeof b == "string" ? b : "")),
                O
            }
            ;
            Function.prototype.toString = I(function() {
                return e(this) && p(this).source || l(this)
            }, "toString")
        }
        ,
        8828: r => {
            "use strict";
            var c = Math.ceil
              , t = Math.floor;
            r.exports = Math.trunc || function(o) {
                var e = +o;
                return (e > 0 ? t : c)(e)
            }
        }
        ,
        5394: (r, c, t) => {
            "use strict";
            var n = t(7697)
              , o = t(8844)
              , e = t(2615)
              , a = t(3689)
              , s = t(300)
              , u = t(7518)
              , l = t(9556)
              , i = t(690)
              , f = t(4413)
              , p = Object.assign
              , m = Object.defineProperty
              , g = o([].concat);
            r.exports = !p || a(function() {
                if (n && p({
                    b: 1
                }, p(m({}, "a", {
                    enumerable: !0,
                    get: function() {
                        m(this, "b", {
                            value: 3,
                            enumerable: !1
                        })
                    }
                }), {
                    b: 2
                })).b !== 1)
                    return !0;
                var E = {}
                  , _ = {}
                  , S = Symbol("assign detection")
                  , M = "abcdefghijklmnopqrst";
                return E[S] = 7,
                M.split("").forEach(function(A) {
                    _[A] = A
                }),
                p({}, E)[S] !== 7 || s(p({}, _)).join("") !== M
            }) ? function(_, S) {
                for (var M = i(_), A = arguments.length, I = 1, O = u.f, b = l.f; A > I; )
                    for (var T = f(arguments[I++]), L = O ? g(s(T), O(T)) : s(T), N = L.length, Z = 0, k; N > Z; )
                        k = L[Z++],
                        (!n || e(b, T, k)) && (M[k] = T[k]);
                return M
            }
            : p
        }
        ,
        5391: (r, c, t) => {
            "use strict";
            var n = t(5027), o = t(8920), e = t(2739), a = t(7248), s = t(2688), u = t(6420), l = t(2713), i = ">", f = "<", p = "prototype", m = "script", g = l("IE_PROTO"), E = function() {}, _ = function(O) {
                return f + m + i + O + f + "/" + m + i
            }, S = function(O) {
                O.write(_("")),
                O.close();
                var b = O.parentWindow.Object;
                return O = null,
                b
            }, M = function() {
                var O = u("iframe"), b = "java" + m + ":", T;
                return O.style.display = "none",
                s.appendChild(O),
                O.src = String(b),
                T = O.contentWindow.document,
                T.open(),
                T.write(_("document.F=Object")),
                T.close(),
                T.F
            }, A, I = function() {
                try {
                    A = new ActiveXObject("htmlfile")
                } catch (b) {}
                I = typeof document != "undefined" ? document.domain && A ? S(A) : M() : S(A);
                for (var O = e.length; O--; )
                    delete I[p][e[O]];
                return I()
            };
            a[g] = !0,
            r.exports = Object.create || function(b, T) {
                var L;
                return b !== null ? (E[p] = n(b),
                L = new E,
                E[p] = null,
                L[g] = b) : L = I(),
                T === void 0 ? L : o.f(L, T)
            }
        }
        ,
        8920: (r, c, t) => {
            "use strict";
            var n = t(7697)
              , o = t(5648)
              , e = t(2560)
              , a = t(5027)
              , s = t(5290)
              , u = t(300);
            c.f = n && !o ? Object.defineProperties : function(i, f) {
                a(i);
                for (var p = s(f), m = u(f), g = m.length, E = 0, _; g > E; )
                    e.f(i, _ = m[E++], p[_]);
                return i
            }
        }
        ,
        2560: (r, c, t) => {
            "use strict";
            var n = t(7697)
              , o = t(8506)
              , e = t(5648)
              , a = t(5027)
              , s = t(8360)
              , u = TypeError
              , l = Object.defineProperty
              , i = Object.getOwnPropertyDescriptor
              , f = "enumerable"
              , p = "configurable"
              , m = "writable";
            c.f = n ? e ? function(E, _, S) {
                if (a(E),
                _ = s(_),
                a(S),
                typeof E == "function" && _ === "prototype" && "value"in S && m in S && !S[m]) {
                    var M = i(E, _);
                    M && M[m] && (E[_] = S.value,
                    S = {
                        configurable: p in S ? S[p] : M[p],
                        enumerable: f in S ? S[f] : M[f],
                        writable: !1
                    })
                }
                return l(E, _, S)
            }
            : l : function(E, _, S) {
                if (a(E),
                _ = s(_),
                a(S),
                o)
                    try {
                        return l(E, _, S)
                    } catch (M) {}
                if ("get"in S || "set"in S)
                    throw new u("Accessors not supported");
                return "value"in S && (E[_] = S.value),
                E
            }
        }
        ,
        2474: (r, c, t) => {
            "use strict";
            var n = t(7697)
              , o = t(2615)
              , e = t(9556)
              , a = t(5684)
              , s = t(5290)
              , u = t(8360)
              , l = t(6812)
              , i = t(8506)
              , f = Object.getOwnPropertyDescriptor;
            c.f = n ? f : function(m, g) {
                if (m = s(m),
                g = u(g),
                i)
                    try {
                        return f(m, g)
                    } catch (E) {}
                if (l(m, g))
                    return a(!o(e.f, m, g), m[g])
            }
        }
        ,
        2741: (r, c, t) => {
            "use strict";
            var n = t(4948)
              , o = t(2739)
              , e = o.concat("length", "prototype");
            c.f = Object.getOwnPropertyNames || function(s) {
                return n(s, e)
            }
        }
        ,
        7518: (r, c) => {
            "use strict";
            c.f = Object.getOwnPropertySymbols
        }
        ,
        1868: (r, c, t) => {
            "use strict";
            var n = t(6812)
              , o = t(9985)
              , e = t(690)
              , a = t(2713)
              , s = t(1748)
              , u = a("IE_PROTO")
              , l = Object
              , i = l.prototype;
            r.exports = s ? l.getPrototypeOf : function(f) {
                var p = e(f);
                if (n(p, u))
                    return p[u];
                var m = p.constructor;
                return o(m) && p instanceof m ? m.prototype : p instanceof l ? i : null
            }
        }
        ,
        3622: (r, c, t) => {
            "use strict";
            var n = t(8844);
            r.exports = n({}.isPrototypeOf)
        }
        ,
        4948: (r, c, t) => {
            "use strict";
            var n = t(8844)
              , o = t(6812)
              , e = t(5290)
              , a = t(4328).indexOf
              , s = t(7248)
              , u = n([].push);
            r.exports = function(l, i) {
                var f = e(l), p = 0, m = [], g;
                for (g in f)
                    !o(s, g) && o(f, g) && u(m, g);
                for (; i.length > p; )
                    o(f, g = i[p++]) && (~a(m, g) || u(m, g));
                return m
            }
        }
        ,
        300: (r, c, t) => {
            "use strict";
            var n = t(4948)
              , o = t(2739);
            r.exports = Object.keys || function(a) {
                return n(a, o)
            }
        }
        ,
        9556: (r, c) => {
            "use strict";
            var t = {}.propertyIsEnumerable
              , n = Object.getOwnPropertyDescriptor
              , o = n && !t.call({
                1: 2
            }, 1);
            c.f = o ? function(a) {
                var s = n(this, a);
                return !!s && s.enumerable
            }
            : t
        }
        ,
        5073: (r, c, t) => {
            "use strict";
            var n = t(3043)
              , o = t(926);
            r.exports = n ? {}.toString : function() {
                return "[object " + o(this) + "]"
            }
        }
        ,
        5899: (r, c, t) => {
            "use strict";
            var n = t(2615)
              , o = t(9985)
              , e = t(8999)
              , a = TypeError;
            r.exports = function(s, u) {
                var l, i;
                if (u === "string" && o(l = s.toString) && !e(i = n(l, s)) || o(l = s.valueOf) && !e(i = n(l, s)) || u !== "string" && o(l = s.toString) && !e(i = n(l, s)))
                    return i;
                throw new a("Can't convert object to primitive value")
            }
        }
        ,
        9152: (r, c, t) => {
            "use strict";
            var n = t(6058)
              , o = t(8844)
              , e = t(2741)
              , a = t(7518)
              , s = t(5027)
              , u = o([].concat);
            r.exports = n("Reflect", "ownKeys") || function(i) {
                var f = e.f(s(i))
                  , p = a.f;
                return p ? u(f, p(i)) : f
            }
        }
        ,
        4684: (r, c, t) => {
            "use strict";
            var n = t(981)
              , o = TypeError;
            r.exports = function(e) {
                if (n(e))
                    throw new o("Can't call method on " + e);
                return e
            }
        }
        ,
        2713: (r, c, t) => {
            "use strict";
            var n = t(3430)
              , o = t(4630)
              , e = n("keys");
            r.exports = function(a) {
                return e[a] || (e[a] = o(a))
            }
        }
        ,
        4091: (r, c, t) => {
            "use strict";
            var n = t(9037)
              , o = t(5014)
              , e = "__core-js_shared__"
              , a = n[e] || o(e, {});
            r.exports = a
        }
        ,
        3430: (r, c, t) => {
            "use strict";
            var n = t(3931)
              , o = t(4091);
            (r.exports = function(e, a) {
                return o[e] || (o[e] = a !== void 0 ? a : {})
            }
            )("versions", []).push({
                version: "3.34.0",
                mode: n ? "pure" : "global",
                copyright: "\xA9 2014-2023 Denis Pushkarev (zloirock.ru)",
                license: "https://github.com/zloirock/core-js/blob/v3.34.0/LICENSE",
                source: "https://github.com/zloirock/core-js"
            })
        }
        ,
        146: (r, c, t) => {
            "use strict";
            var n = t(3615)
              , o = t(3689)
              , e = t(9037)
              , a = e.String;
            r.exports = !!Object.getOwnPropertySymbols && !o(function() {
                var s = Symbol("symbol detection");
                return !a(s) || !(Object(s)instanceof Symbol) || !Symbol.sham && n && n < 41
            })
        }
        ,
        7578: (r, c, t) => {
            "use strict";
            var n = t(8700)
              , o = Math.max
              , e = Math.min;
            r.exports = function(a, s) {
                var u = n(a);
                return u < 0 ? o(u + s, 0) : e(u, s)
            }
        }
        ,
        5290: (r, c, t) => {
            "use strict";
            var n = t(4413)
              , o = t(4684);
            r.exports = function(e) {
                return n(o(e))
            }
        }
        ,
        8700: (r, c, t) => {
            "use strict";
            var n = t(8828);
            r.exports = function(o) {
                var e = +o;
                return e !== e || e === 0 ? 0 : n(e)
            }
        }
        ,
        3126: (r, c, t) => {
            "use strict";
            var n = t(8700)
              , o = Math.min;
            r.exports = function(e) {
                return e > 0 ? o(n(e), 9007199254740991) : 0
            }
        }
        ,
        690: (r, c, t) => {
            "use strict";
            var n = t(4684)
              , o = Object;
            r.exports = function(e) {
                return o(n(e))
            }
        }
        ,
        8732: (r, c, t) => {
            "use strict";
            var n = t(2615)
              , o = t(8999)
              , e = t(734)
              , a = t(4849)
              , s = t(5899)
              , u = t(4201)
              , l = TypeError
              , i = u("toPrimitive");
            r.exports = function(f, p) {
                if (!o(f) || e(f))
                    return f;
                var m = a(f, i), g;
                if (m) {
                    if (p === void 0 && (p = "default"),
                    g = n(m, f, p),
                    !o(g) || e(g))
                        return g;
                    throw new l("Can't convert object to primitive value")
                }
                return p === void 0 && (p = "number"),
                s(f, p)
            }
        }
        ,
        8360: (r, c, t) => {
            "use strict";
            var n = t(8732)
              , o = t(734);
            r.exports = function(e) {
                var a = n(e, "string");
                return o(a) ? a : a + ""
            }
        }
        ,
        3043: (r, c, t) => {
            "use strict";
            var n = t(4201)
              , o = n("toStringTag")
              , e = {};
            e[o] = "z",
            r.exports = String(e) === "[object z]"
        }
        ,
        3691: r => {
            "use strict";
            var c = String;
            r.exports = function(t) {
                try {
                    return c(t)
                } catch (n) {
                    return "Object"
                }
            }
        }
        ,
        4630: (r, c, t) => {
            "use strict";
            var n = t(8844)
              , o = 0
              , e = Math.random()
              , a = n(1.toString);
            r.exports = function(s) {
                return "Symbol(" + (s === void 0 ? "" : s) + ")_" + a(++o + e, 36)
            }
        }
        ,
        9525: (r, c, t) => {
            "use strict";
            var n = t(146);
            r.exports = n && !Symbol.sham && typeof Symbol.iterator == "symbol"
        }
        ,
        5648: (r, c, t) => {
            "use strict";
            var n = t(7697)
              , o = t(3689);
            r.exports = n && o(function() {
                return Object.defineProperty(function() {}, "prototype", {
                    value: 42,
                    writable: !1
                }).prototype !== 42
            })
        }
        ,
        9834: (r, c, t) => {
            "use strict";
            var n = t(9037)
              , o = t(9985)
              , e = n.WeakMap;
            r.exports = o(e) && /native code/.test(String(e))
        }
        ,
        4201: (r, c, t) => {
            "use strict";
            var n = t(9037)
              , o = t(3430)
              , e = t(6812)
              , a = t(4630)
              , s = t(146)
              , u = t(9525)
              , l = n.Symbol
              , i = o("wks")
              , f = u ? l.for || l : l && l.withoutSetter || a;
            r.exports = function(p) {
                return e(i, p) || (i[p] = s && e(l, p) ? l[p] : f("Symbol." + p)),
                i[p]
            }
        }
        ,
        4338: (r, c, t) => {
            "use strict";
            var n = t(9989)
              , o = t(3689)
              , e = t(2297)
              , a = t(8999)
              , s = t(690)
              , u = t(6310)
              , l = t(5565)
              , i = t(6522)
              , f = t(7120)
              , p = t(9042)
              , m = t(4201)
              , g = t(3615)
              , E = m("isConcatSpreadable")
              , _ = g >= 51 || !o(function() {
                var A = [];
                return A[E] = !1,
                A.concat()[0] !== A
            })
              , S = function(A) {
                if (!a(A))
                    return !1;
                var I = A[E];
                return I !== void 0 ? !!I : e(A)
            }
              , M = !_ || !p("concat");
            n({
                target: "Array",
                proto: !0,
                arity: 1,
                forced: M
            }, {
                concat: function(I) {
                    var O = s(this), b = f(O, 0), T = 0, L, N, Z, k, et;
                    for (L = -1,
                    Z = arguments.length; L < Z; L++)
                        if (et = L === -1 ? O : arguments[L],
                        S(et))
                            for (k = u(et),
                            l(T + k),
                            N = 0; N < k; N++,
                            T++)
                                N in et && i(b, T, et[N]);
                        else
                            l(T + 1),
                            i(b, T++, et);
                    return b.length = T,
                    b
                }
            })
        }
        ,
        7895: (r, c, t) => {
            "use strict";
            var n = t(9989)
              , o = t(2872)
              , e = t(7370);
            n({
                target: "Array",
                proto: !0
            }, {
                fill: o
            }),
            e("fill")
        }
        ,
        8077: (r, c, t) => {
            "use strict";
            var n = t(9989)
              , o = t(2960).filter
              , e = t(9042)
              , a = e("filter");
            n({
                target: "Array",
                proto: !0,
                forced: !a
            }, {
                filter: function(u) {
                    return o(this, u, arguments.length > 1 ? arguments[1] : void 0)
                }
            })
        }
        ,
        886: (r, c, t) => {
            "use strict";
            var n = t(9989)
              , o = t(2960).map
              , e = t(9042)
              , a = e("map");
            n({
                target: "Array",
                proto: !0,
                forced: !a
            }, {
                map: function(u) {
                    return o(this, u, arguments.length > 1 ? arguments[1] : void 0)
                }
            })
        }
        ,
        429: (r, c, t) => {
            "use strict";
            var n = t(9989)
              , o = t(5394);
            n({
                target: "Object",
                stat: !0,
                arity: 2,
                forced: Object.assign !== o
            }, {
                assign: o
            })
        }
        ,
        228: (r, c, t) => {
            "use strict";
            var n = t(3043)
              , o = t(1880)
              , e = t(5073);
            n || o(Object.prototype, "toString", e, {
                unsafe: !0
            })
        }
        ,
        7602: (r, c, t) => {
            "use strict";
            var n = t(9989)
              , o = t(9037)
              , e = t(767)
              , a = t(5027)
              , s = t(9985)
              , u = t(1868)
              , l = t(2148)
              , i = t(6522)
              , f = t(3689)
              , p = t(6812)
              , m = t(4201)
              , g = t(2013).IteratorPrototype
              , E = t(7697)
              , _ = t(3931)
              , S = "constructor"
              , M = "Iterator"
              , A = m("toStringTag")
              , I = TypeError
              , O = o[M]
              , b = _ || !s(O) || O.prototype !== g || !f(function() {
                O({})
            })
              , T = function() {
                if (e(this, g),
                u(this) === g)
                    throw new I("Abstract class Iterator not directly constructable")
            }
              , L = function(N, Z) {
                E ? l(g, N, {
                    configurable: !0,
                    get: function() {
                        return Z
                    },
                    set: function(k) {
                        if (a(this),
                        this === g)
                            throw new I("You can't redefine this property");
                        p(this, N) ? this[N] = k : i(this, N, k)
                    }
                }) : g[N] = Z
            };
            p(g, A) || L(A, M),
            (b || !p(g, S) || g[S] === Object) && L(S, T),
            T.prototype = g,
            n({
                global: !0,
                constructor: !0,
                forced: b
            }, {
                Iterator: T
            })
        }
        ,
        3476: (r, c, t) => {
            "use strict";
            var n = t(9989)
              , o = t(2615)
              , e = t(509)
              , a = t(5027)
              , s = t(2302)
              , u = t(5419)
              , l = t(1228)
              , i = t(3931)
              , f = u(function() {
                for (var p = this.iterator, m = this.predicate, g = this.next, E, _, S; ; ) {
                    if (E = a(o(g, p)),
                    _ = this.done = !!E.done,
                    _)
                        return;
                    if (S = E.value,
                    l(p, m, [S, this.counter++], !0))
                        return S
                }
            });
            n({
                target: "Iterator",
                proto: !0,
                real: !0,
                forced: i
            }, {
                filter: function(m) {
                    return a(this),
                    e(m),
                    new f(s(this),{
                        predicate: m
                    })
                }
            })
        }
        ,
        1792: (r, c, t) => {
            "use strict";
            var n = t(9989)
              , o = t(8983)
              , e = t(3931);
            n({
                target: "Iterator",
                proto: !0,
                real: !0,
                forced: e
            }, {
                map: o
            })
        }
    }
      , It = {};
    function D(r) {
        var c = It[r];
        if (c !== void 0)
            return c.exports;
        var t = It[r] = {
            id: r,
            exports: {}
        };
        return ee[r].call(t.exports, t, t.exports, D),
        t.exports
    }
    D.n = r => {
        var c = r && r.__esModule ? () => r.default : () => r;
        return D.d(c, {
            a: c
        }),
        c
    }
    ,
    D.d = (r, c) => {
        for (var t in c)
            D.o(c, t) && !D.o(r, t) && Object.defineProperty(r, t, {
                enumerable: !0,
                get: c[t]
            })
    }
    ,
    D.g = function() {
        if (typeof globalThis == "object")
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (r) {
            if (typeof window == "object")
                return window
        }
    }(),
    D.o = (r, c) => Object.prototype.hasOwnProperty.call(r, c),
    D.r = r => {
        typeof Symbol != "undefined" && Symbol.toStringTag && Object.defineProperty(r, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(r, "__esModule", {
            value: !0
        })
    }
    ,
    D.nc = void 0;
    var Ct = {};
    return ( () => {
        "use strict";
        D.r(Ct),
        D.d(Ct, {
            Component: () => Rt,
            CpsOverviewCard: () => We
        });
        var r = D(429)
          , c = D(9787)
          , t = D.n(c)
          , n = D(3078)
          , o = D.n(n)
          , e = "https://cps.kwaixiaodian.com"
          , a = {
            watchStrategy: "\u67E5\u770B\u653B\u7565",
            open: "\u5F00\u901A",
            more: "\u67E5\u770B\u66F4\u591A",
            enterKFC: "\u8FDB\u5165\u5FEB\u5206\u9500",
            other: "\u5176\u4ED6\u64CD\u4F5C",
            dataArea: "\u6570\u636E\u533A\u57DF"
        }
          , s = D(9033)
          , u = D.n(s)
          , l = function(d) {
            return d.notOpenKFC = "notOpenKFC",
            d.noDistribution = "noDistribution",
            d.noSevenData = "noSevenData",
            d.hasSevenData = "hasSevenData",
            d.noQualification = "noQualification",
            d.recoveryQualification = "recoveryQualification",
            d
        }({})
          , i = D(6832)
          , f = D.n(i)
          , p = D(7204)
          , m = function(v) {
            var y = v.data
              , h = v.collectShow
              , x = v.collectClick;
            return (0,
            c.useEffect)(function() {
                h()
            }, [h]),
            t().createElement("div", {
                className: f().container
            }, t().createElement("div", {
                className: f().content,
                style: {
                    backgroundImage: "url(".concat(y.bgImg, ")"),
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center"
                }
            }, t().createElement("div", {
                className: f().title
            }, y.title), t().createElement("div", {
                className: f().desc
            }, y.desc)), t().createElement(p.Button, {
                type: "primary",
                onClick: function() {
                    x("other"),
                    window.open(y.actionUrl)
                },
                style: {
                    width: "fit-content"
                }
            }, y.actionText))
        };
        const g = m;
        var E = D(886)
          , _ = D(1792)
          , S = D(8077)
          , M = D(228)
          , A = D(7602)
          , I = D(3476)
          , O = D(7895);
        function b(d) {
            var v = d.style
              , y = v === void 0 ? {
                width: 16
            } : v
              , h = d.fill
              , x = h === void 0 ? "#E6E6E6" : h;
            return t().createElement(t().Fragment, null, t().createElement("svg", {
                style: y,
                zoomAndPan: "magnify",
                contentStyleType: "text/css",
                viewBox: "0 0 48 48",
                preserveAspectRatio: "xMidYMid meet",
                version: "1.0"
            }, t().createElement("defs", null, t().createElement("path", {
                d: "M0 0H48V48H0z"
            })), t().createElement("g", {
                fill: "none",
                fillRule: "evenodd"
            }, t().createElement("mask", {
                fill: "white"
            }, t().createElement("use", {
                xlinkActuate: "onLoad",
                xlinkType: "simple",
                xlinkShow: "embed",
                xlinkHref: "#a"
            })), t().createElement("g", {
                fill: x,
                fillRule: "nonzero",
                mask: "url(#b)"
            }, t().createElement("path", {
                d: "M28.4778173,0.00153950013 L28.9696553,0.0137959606 C30.0400056,0.0565777991 30.591206,0.198211432 31.0800206,0.429620231 L31.2870247,0.534265408 C31.9388766,0.882879593 32.4504537,1.39445674 32.7990679,2.04630859 L32.9037131,2.25331273 L32.9973654,2.46795593 C33.1442036,2.83649939 33.2445766,3.27016415 33.2951766,3.93540951 L33.3195374,4.36367807 C33.3225932,4.44013166 33.3251447,4.51923398 33.3271886,4.60115149 L33.3333333,5.1277704 L33.3333333,24.1267834 C33.3333333,28.4637823 32.7763797,30.5721853 31.7305371,32.5277409 C30.6846946,34.4832964 29.1499631,36.0180279 27.1944076,37.0638704 C25.238852,38.109713 23.130449,38.6666667 18.7934501,38.6666667 L5.1277704,38.6666667 C4.94008224,38.6666667 4.7649865,38.6646096 4.60115149,38.6605219 L4.14209699,38.6421934 C3.07225789,38.581275 2.56092848,38.407623 2.04630859,38.1324013 C1.39445674,37.7837871 0.882879593,37.2722099 0.534265408,36.6203581 C0.240695567,36.0714302 0.0626894903,35.5262461 0.0137959606,34.3029886 L0.00153950013,33.8111507 L0.00153950013,4.85551601 L0.0137959606,4.36367807 C0.0504661079,3.44623491 0.159762063,2.91020809 0.335967933,2.46795593 L0.429620231,2.25331273 C0.462678631,2.18348206 0.497569178,2.11492458 0.534265408,2.04630859 C0.882879593,1.39445674 1.39445674,0.882879593 2.04630859,0.534265408 C2.11492458,0.497569178 2.18348206,0.462678631 2.25331273,0.429620231 L2.46795593,0.335967933 C2.91020809,0.159762063 3.44623491,0.0504661079 4.36367807,0.0137959606 L4.85551601,0.00153950013 L28.4778173,0.00153950013 Z M28.4080752,4.00097701 L4.92525816,4.00097701 L4.5748391,4.00836827 C4.52232191,4.01015708 4.47268729,4.01220861 4.4258446,4.01449928 L4.17756645,4.03092397 L4.044,4.044 L4.03092397,4.17756645 L4.01449928,4.4258446 L4.00381364,4.74112901 L4,5.1277704 L4.00097701,33.7414085 L4.00836827,34.0918276 L4.02206505,34.373065 C4.02481037,34.4144145 4.02777121,34.4530627 4.03092397,34.4891002 L4.044,34.621 L4.17756645,34.6357427 L4.4258446,34.6521674 L4.74112901,34.662853 L5.1277704,34.6666667 L18.7934501,34.6666667 C19.173981,34.6666667 19.5318154,34.6626419 19.8693613,34.6543838 L20.5181153,34.6321613 L21.1170477,34.5982792 C22.5556694,34.4986905 23.5673486,34.2863173 24.4530949,33.9350922 L24.8013905,33.7871349 C24.9728936,33.7093918 25.1409648,33.6259555 25.3080121,33.5366177 C26.5664938,32.8635743 27.530241,31.8998271 28.2032843,30.6413455 L28.374153,30.3051722 C28.8363361,29.3447702 29.1134751,28.2999404 29.2435166,26.732502 L29.2833675,26.156875 L29.3113735,25.5335669 C29.3150746,25.4254709 29.3182977,25.3152099 29.3210504,25.2026946 L29.331984,24.499838 L29.3333333,24.1267834 L29.3323563,4.92525816 L29.3249651,4.5748391 L29.3112683,4.29360166 L29.288,4.044 L29.1557669,4.03092397 L28.9074887,4.01449928 L28.5922043,4.00381364 C28.5338314,4.0025739 28.4724852,4.00162049 28.4080752,4.00097701 Z",
                transform: "translate(7.333 4.667)"
            }), t().createElement("path", {
                d: "M24.6666667 8.66666667L24.6666667 12.6666667 8.66666667 12.6666667 8.66666667 8.66666667zM19.3333333 16.6666667L19.3333333 20.6666667 8.66666667 20.6666667 8.66666667 16.6666667z",
                transform: "translate(7.333 4.667)"
            })))))
        }
        var T = D(7167)
          , L = D.n(T)
          , N = function(v) {
            var y, h = v.data, x = v.collectClick;
            return h ? t().createElement("div", {
                className: L().container
            }, t().createElement("div", {
                className: L().header
            }, t().createElement("span", {
                className: L().title
            }, h.title), t().createElement("span", {
                className: L().desc,
                onClick: function() {
                    x("watchStrategy"),
                    window.open(h.actionUrl)
                }
            }, t().createElement(b, {
                fill: "#90949E"
            }), h.actionText)), t().createElement("div", {
                className: L().content
            }, (y = h.infos) === null || y === void 0 ? void 0 : y.filter(Boolean).map(function(P, C) {
                return t().createElement("span", {
                    key: P.text
                }, t().createElement(p.Image, {
                    src: P.iconUrl,
                    width: 16,
                    preview: !1
                }), P.text)
            }))) : null
        };
        const Z = N;
        var k = D(4338)
          , et = D(3465)
          , G = D.n(et)
          , st = D(5041)
          , dt = function(v) {
            var y, h, x = v.data, P = v.collectClick;
            if (!x)
                return null;
            var C = x.isMeet;
            return C ? t().createElement(p.Button, {
                type: "primary",
                size: "middle",
                onClick: function() {
                    P("open"),
                    window.open(x.actionUrl)
                },
                style: {
                    width: "fit-content"
                }
            }, x.actionText) : t().createElement("div", {
                className: G().container,
                style: x.title ? {
                    gap: 16,
                    backgroundImage: "url(".concat(x.bgImg, ")"),
                    backgroundColor: "var(--red-1, #FFF7F6)",
                    backgroundSize: "100% auto",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "top center"
                } : {}
            }, t().createElement("div", {
                className: G().header
            }, !!x.title && t().createElement("div", {
                className: G().title
            }, x.title), t().createElement("div", {
                className: G().descContainer
            }, t().createElement("div", {
                className: G().desc
            }, x.desc), !!x.actionText && t().createElement("div", {
                className: G().action,
                onClick: function() {
                    P("more"),
                    window.open(x.actionUrl)
                }
            }, x.actionText, t().createElement(st.SystemArrowLargeRightLine, {
                width: 12,
                style: {
                    color: "#8C8C8C"
                }
            })))), (y = x.conditions) !== null && y !== void 0 && y.length ? t().createElement("div", {
                className: G().content
            }, (h = x.conditions) === null || h === void 0 ? void 0 : h.filter(Boolean).map(function(R, F) {
                return t().createElement("div", {
                    className: G().item,
                    key: R.title
                }, t().createElement("div", {
                    className: G().itemContent
                }, t().createElement("div", {
                    className: G().title
                }, R.title), t().createElement("div", {
                    className: G().desc
                }, R.desc)), t().createElement("div", {
                    className: "".concat(G().action, " ").concat(x.title ? G().red : G().blue),
                    onClick: function() {
                        P("other"),
                        window.open(R.actionUrl)
                    }
                }, R.actionText))
            })) : null)
        };
        const Lt = dt;
        var re = function(v) {
            var y = v.data
              , h = v.collectShow
              , x = v.collectClick;
            return (0,
            c.useEffect)(function() {
                h()
            }, [h]),
            t().createElement(t().Fragment, null, t().createElement(Z, {
                data: y.benefits,
                collectClick: x
            }), t().createElement(Lt, {
                data: y.conditionData,
                collectClick: x
            }))
        };
        const ne = re;
        var oe = function(v) {
            var y = v.data
              , h = v.collectShow
              , x = v.collectClick;
            return (0,
            c.useEffect)(function() {
                h()
            }, [h]),
            t().createElement(t().Fragment, null, t().createElement(Lt, {
                data: y.conditionData,
                collectClick: x
            }))
        };
        const ae = oe;
        var se = D(8789)
          , V = D.n(se)
          , le = function(v) {
            var y, h = v.data, x = v.collectShow, P = v.collectClick;
            return (0,
            c.useEffect)(function() {
                x()
            }, [x]),
            t().createElement("div", {
                className: V().container
            }, t().createElement("div", {
                className: V().content
            }, t().createElement("div", {
                className: V().title
            }, h.title), (y = h.recommendedData) === null || y === void 0 ? void 0 : y.filter(Boolean).map(function(C, R) {
                var F, j, K, X, ot, U;
                return t().createElement("div", {
                    key: C.avatar,
                    className: V().recommended
                }, t().createElement("div", {
                    className: V().user
                }, t().createElement("div", {
                    className: V().info
                }, t().createElement("div", {
                    className: V().avatarContainer
                }, t().createElement(p.Image, {
                    wrapperClassName: V().avatar,
                    src: C.avatar,
                    preview: !1
                }), t().createElement(p.Image, {
                    wrapperClassName: V().sex,
                    src: C.sexImg,
                    preview: !1
                })), t().createElement("div", {
                    className: V().text
                }, t().createElement("div", {
                    className: V().name
                }, C.name), t().createElement("div", {
                    className: V().desc
                }, t().createElement("span", null, "\u7C89\u4E1D\u6570\uFF1A", (F = C.fans) === null || F === void 0 ? void 0 : F.value, (j = C.fans) === null || j === void 0 ? void 0 : j.unit), t().createElement("span", null, C.kind)))), t().createElement("div", {
                    className: V().action,
                    onClick: function() {
                        P("other"),
                        window.open(C.actionUrl)
                    }
                }, C.actionText)), t().createElement("div", {
                    className: V().hr
                }), t().createElement("div", {
                    className: V().data
                }, t().createElement("span", {
                    className: V().sales
                }, "\u573A\u5747\u9500\u552E\u989D\uFF1A", (K = C.sales) === null || K === void 0 ? void 0 : K.value, (X = C.sales) === null || X === void 0 ? void 0 : X.unit), t().createElement("span", {
                    className: V().watchs
                }, "\u573A\u5747\u89C2\u770B\u4EBA\u6570\uFF1A", (ot = C.watchs) === null || ot === void 0 ? void 0 : ot.value, (U = C.watchs) === null || U === void 0 ? void 0 : U.unit)))
            })), t().createElement("div", {
                className: V().buttonContainer
            }, t().createElement(p.Button, {
                type: "primary",
                onClick: function() {
                    P("other"),
                    window.open(h.actionUrl)
                }
            }, h.actionText), !!h.extraText && t().createElement("div", {
                className: V().extraText,
                onClick: function() {
                    P("watchStrategy"),
                    window.open(h.extraUrl)
                }
            }, t().createElement(b, {
                fill: "#73757E"
            }), h.extraText)))
        };
        const ie = le;
        var ce = D(6147)
          , q = D.n(ce)
          , ue = function(v) {
            var y, h, x, P, C = v.data, R = v.collectShow, F = v.collectClick;
            (0,
            c.useEffect)(function() {
                R()
            }, [R]);
            var j = C.historyData;
            return t().createElement("div", {
                className: q().container
            }, t().createElement(Z, {
                data: C.benefits,
                collectClick: F
            }), !!j && t().createElement("div", {
                className: q().historyContainer,
                style: {
                    backgroundImage: "url(".concat(j.bgImg, ")"),
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center"
                }
            }, t().createElement("div", {
                className: q().title
            }, j.title), t().createElement("div", {
                className: q().content
            }, t().createElement("div", {
                className: q().item
            }, t().createElement("div", {
                className: q().title
            }, "\u5386\u53F2\u4E0A\u67B6\u5546\u54C1\u6570"), t().createElement("div", {
                className: q().num
            }, (y = j.goodsCount) === null || y === void 0 ? void 0 : y.value, (h = j.goodsCount) === null || h === void 0 ? void 0 : h.unit)), t().createElement("div", {
                className: q().item
            }, t().createElement("div", {
                className: q().title
            }, "\u7D2F\u8BA1\u6210\u4EA4\u91D1\u989D"), t().createElement("div", {
                className: q().num
            }, (x = j.sales) === null || x === void 0 ? void 0 : x.value, t().createElement("span", {
                className: q().unit
            }, (P = j.sales) === null || P === void 0 ? void 0 : P.unit))))), t().createElement("div", {
                className: q().buttonContainer
            }, t().createElement(p.Button, {
                type: "primary",
                onClick: function() {
                    F("open"),
                    window.open(C.actionUrl)
                }
            }, C.actionText), !j && !!C.extraText && t().createElement("div", {
                className: q().extraText
            }, C.extraText)))
        };
        const de = ue;
        function Pt() {
            return Pt = Object.assign ? Object.assign.bind() : function(d) {
                for (var v = 1; v < arguments.length; v++) {
                    var y = arguments[v];
                    for (var h in y)
                        ({}).hasOwnProperty.call(y, h) && (d[h] = y[h])
                }
                return d
            }
            ,
            Pt.apply(null, arguments)
        }
        var ve = function(v) {
            var y = v.sellerStatus
              , h = v.data
              , x = v.style
              , P = v.webloger
              , C = v.collectClick
              , R = v.collectShow
              , F = {
                style: x,
                webloger: P,
                collectClick: C,
                collectShow: R
            }
              , j = {
                notOpenKFC: ne,
                noDistribution: g,
                noSevenData: ie,
                hasSevenData: function() {
                    return null
                },
                noQualification: ae,
                recoveryQualification: de
            }
              , K = j[y]
              , X = h[y];
            return !K || !X ? null : t().createElement(K, Pt({
                data: X
            }, F))
        };
        const fe = ve;
        var Rt = function(v) {
            var y, h, x, P, C = v.style, R = v.collectClick;
            return t().createElement(o(), {
                layoutConfig: {
                    title: "\u5206\u9500\u5356\u8D27",
                    actionText: "\u8FDB\u5165\u5FEB\u5206\u9500",
                    actionUrl: e
                },
                noteList: v.sellerStatus === l.recoveryQualification ? (y = (h = v.data) === null || h === void 0 || (x = h[l.recoveryQualification]) === null || x === void 0 || (P = x.historyData) === null || P === void 0 ? void 0 : P.noteList) !== null && y !== void 0 ? y : [] : [],
                onActionClick: function() {
                    R("enterKFC"),
                    window.open(e)
                },
                style: C
            }, t().createElement("div", {
                className: u().container
            }, t().createElement(fe, v)))
        };
        const pe = Rt;
        var me = D(5800);
        function Tt() {
            return Tt = Object.assign ? Object.assign.bind() : function(d) {
                for (var v = 1; v < arguments.length; v++) {
                    var y = arguments[v];
                    for (var h in y)
                        Object.prototype.hasOwnProperty.call(y, h) && (d[h] = y[h])
                }
                return d
            }
            ,
            Tt.apply(this, arguments)
        }
        let jt;
        (function(d) {
            d.Click = "CLICK",
            d.Show = "SHOW",
            d.Custom = "CUSTOM",
            d.DoubleClick = "DOUBLE_CLICK",
            d.TripleClick = "TRIPLE_CLICK",
            d.LongPress = "LONG_PRESS",
            d.Pull = "PULL",
            d.Drag = "DRAG",
            d.Scale = "SCALE",
            d.PullDown = "PULL_DOWN",
            d.PullUP = "PULL_UP",
            d.RightClick = "RIGHT_CLICK",
            d.Auto = "AUTO"
        }
        )(jt || (jt = {}));
        const Nt = (d, v) => {}
          , gt = c.createContext({
            collect: Nt
        });
        gt.displayName = "KproContext";
        const Ye = d => {
            const F = d || {}
              , {children: v} = F
              , j = Ot(F, ["children"]) || {}
              , {collect: h} = j
              , x = Ot(j, ["collect"]);
            let P = h;
            typeof P != "function" && (P = Nt);
            const C = {}
              , R = (K, X) => {
                P(K.toLocaleUpperCase(), X)
            }
            ;
            return ["Click", "Show", "Custom"].forEach(K => {
                C[`collect${K}`] = X => {
                    X && h(K, X)
                }
            }
            ),
            React.createElement(gt.Provider, {
                value: pt(Zt(pt({}, x), {
                    collect: R
                }), C)
            }, v)
        }
          , ge = () => (0,
        c.useContext)(gt)
          , $e = ({children: d}) => React.createElement(gt.Consumer, null, v => React.createElement(React.Fragment, null, typeof d == "function" ? d(v) : null))
          , ye = d => v => {
            const P = ge()
              , {collect: y} = P
              , h = Ot(P, ["collect"]);
            "collectShow"in h || ["Click", "Show", "Custom"].forEach(C => {
                h[`collect${C}`] = R => {
                    R && y(C.toLocaleUpperCase(), R)
                }
            }
            );
            const x = pt({}, v);
            return Object.keys(h).forEach(C => {
                C in x ? console.warn(`Key '${C}' and component conflict in KproContext value, and will be discarded`) : x[C] = h[C]
            }
            ),
            c.createElement(d, Tt({}, x, {
                collect: y
            }))
        }
          , he = d => ye(d)
          , xe = location && location.hostname || ""
          , Ft = ".kwaigobuy.com"
          , Ee = new RegExp(Ft.replace(/\./g, "\\.") + "$").test(xe);
        function Se(d) {
            let y = "" + (window && window.DOMAINS || "")[d];
            return /^(?:[\w\-]+\.)+\w{2,}$/.test(y) || (y = d),
            y
        }
        function Ze(d) {
            let v = "";
            try {
                v = new URL(fillProtocol(d))
            } catch (h) {
                return d
            }
            v.hostname = Se(v.hostname),
            Ee && (v.hostname = v.hostname.replace(/\.kwaixiaodian\.com$/, Ft));
            let y = v.toString();
            return v.pathname === "/" && !/\/$/.test(d) ? y.replace(/\/$/, "") : y
        }
        function Ut(d) {
            return /^\/\//.test(d) ? "https:" + d : d
        }
        let wt = 3
          , Kt = 0
          , Bt = !0;
        const Ht = {}
          , bt = null
          , yt = null;
        function _e(d) {
            const v = d.hostname
              , y = d.toString()
              , x = v.match(yt)[2]
              , P = Ht[y] = {
                retry: !0,
                queue: []
            };
            for (let C = 0; C < bt.length; C++)
                bt[C] !== x && (d.hostname = v.replace(yt, `$1${bt[C]}$3$4$5`),
                P.queue.push(d.toString()));
            return d.hostname = v.replace(yt, "$1$2$3b$4$5"),
            P.queue.push(d.toString()),
            P
        }
        function zt(d) {
            if (!d.retry)
                return "";
            let v = d.queue.shift();
            return d.queue.length === 0 && (d.retry = !1,
            Kt++,
            Kt >= wt && (Bt = !1)),
            v
        }
        function qe(d) {
            let v = Ht[d];
            if (v)
                return zt(v);
            let y;
            try {
                y = new URL(fillProtocol(d))
            } catch (h) {
                return ""
            }
            return !yt.test(y.hostname) || !Bt ? "" : (v = _e(y),
            zt(v))
        }
        function tr(d) {
            wt = d
        }
        function ht(d) {
            let v = "";
            try {
                v = new URL(Ut(d))
            } catch (x) {
                return d
            }
            let y = window && window._CDN_HOST_ || "";
            if (!y)
                return d;
            let h = "";
            try {
                h = new URL(Ut(y))
            } catch (x) {
                return d
            }
            return v.hostname = h.hostname,
            v.toString()
        }
        const Qt = d => {
            console.warn(d)
        }
          , Wt = () => {
            try {
                var d, v, y;
                const h = window.ESLOGGER_PROJECT_NAME
                  , x = (d = (v = window._WEBLOGGER) === null || v === void 0 ? void 0 : v.instances) !== null && d !== void 0 ? d : []
                  , P = x == null || (y = x.find) === null || y === void 0 ? void 0 : y.call(x, C => {
                    var R, F;
                    return (C == null || (R = C.baseOption) === null || R === void 0 || (F = R.h5_extra_attr) === null || F === void 0 ? void 0 : F.projectName) === h
                }
                );
                return P || (x == null ? void 0 : x[0])
            } catch (h) {
                Qt(`\u3010kwaishop-tech-component-logger-provider\u3011\u83B7\u53D6 weblog \u5B9E\u4F8B\u51FA\u9519\uFF1A${h}`);
                return
            }
        }
          , Oe = () => {
            try {
                var d, v, y, h;
                const C = Wt();
                if (C != null && (d = C.plugins) !== null && d !== void 0 && d.radar) {
                    var x;
                    return C == null || (x = C.plugins) === null || x === void 0 ? void 0 : x.radar
                }
                const R = (v = (y = window._WEBLOGGER) === null || y === void 0 ? void 0 : y.instances) !== null && v !== void 0 ? v : []
                  , F = R == null || (h = R.find) === null || h === void 0 ? void 0 : h.call(R, j => {
                    var K;
                    return !!(j != null && (K = j.plugins) !== null && K !== void 0 && K.radar)
                }
                );
                if (F) {
                    var P;
                    return F == null || (P = F.plugins) === null || P === void 0 ? void 0 : P.radar
                }
            } catch (C) {
                Qt(`\u3010kwaishop-tech-component-logger-provider\u3011\u83B7\u53D6 Radar \u5B9E\u4F8B\u51FA\u9519\uFF1A${C}`);
                return
            }
        }
          , nt = navigator.userAgent.toLowerCase()
          , Ce = ( () => {
            if (/applewebkit/g.test(nt)) {
                if (/edge/g.test(nt))
                    return !0;
                if (/opr/g.test(nt))
                    return !0;
                if (/chrome/g.test(nt))
                    return !0;
                if (/safari/g.test(nt))
                    return !1
            } else {
                if (/gecko/g.test(nt) && /firefox/g.test(nt))
                    return !0;
                if (/presto/g.test(nt))
                    return !0
            }
            return !1
        }
        )()
          , kt = ht("https://w2.eckwai.com/udata/pkg/eshop")
          , Pe = /macintosh|mac os x/i.test(navigator.userAgent.toLocaleLowerCase()) ? `${kt}/googlechrome-mac.dmg` : `${kt}/83.0.4103.106_chrome64_stable_windows_installer.exe`
          , er = d => {
            console.warn("[kpro-tech-common-event-collector]", d)
        }
          , At = d => {
            console.error("[kpro-tech-common-event-collector]", d)
        }
          , Te = (d, v) => {
            var y;
            const h = Wt();
            h == null || (y = h.collect) === null || y === void 0 || y.call(h, "CUSTOM", {
                key: d,
                value: v
            })
        }
          , be = d => {
            var v;
            const y = Oe();
            return y == null || (v = y.captureException) === null || v === void 0 ? void 0 : v.call(y, d)
        }
        ;
        function Ae(d, v) {
            return !d || !v ? !1 : (d == null ? void 0 : d.slice(-v.length)) === v
        }
        const Me = d => Ae(d == null ? void 0 : d.toString(), "{}");
        var rr = D(4274);
        const it = "kpro-common-event-collector-pc-result"
          , De = "https://w2.eckwai.com/kos/nlav12333/kp-assets/SystemErrorCircleFill.ec01864498cdb85c.png"
          , Ie = ({icon: d="", title: v, subTitle: y, extra: h}) => {
            let x = t().createElement("img", {
                src: ht(De),
                className: `${it}-icon`
            });
            return d && (typeof d == "string" ? x = t().createElement("img", {
                src: ht(d),
                className: `${it}-icon`
            }) : x = d),
            t().createElement("div", {
                className: `${it}-container`
            }, x, v ? t().createElement("div", {
                className: `${it}-title`
            }, v) : null, y ? t().createElement("div", {
                className: `${it}-subTitle`
            }, y) : null, h ? t().createElement("div", {
                className: `${it}-extra`
            }, h) : null)
        }
        ;
        var or = D(3176);
        const vt = "kpro-common-event-collector-mobile-result"
          , Le = d => {
            const {icon: v, subTitle: y, extra: h, title: x} = d;
            return t().createElement("div", {
                className: `${vt}-container`
            }, v != null ? v : t().createElement("img", {
                src: ht("https://w2.eckwai.com/kos/nlav12333/kp-assets/notice-icon.28374b6a74a1109e.png"),
                className: `${vt}-notice-png`
            }), x ? t().createElement("div", {
                className: `${vt}-title`
            }, x) : null, t().createElement("div", {
                className: `${vt}-info`
            }, y), h && t().createElement("div", {
                className: `${vt}-extra`
            }, h))
        }
        ;
        var sr = D(2740);
        const Gt = "ESHOP_FRONTEND_PC_ERROR"
          , Re = "kpro-common-event-collector-error-boundary"
          , Vt = he( ({content: d, logger: v, project: y, collect: h, captureException: x, renderContent: P, device: C, children: R, type: F, extraInfo: j={}}) => {
            const K = ({error: U, resetErrorBoundary: Y}) => {
                if (d !== void 0)
                    return d;
                if (F === "component" && !d && !P)
                    return null;
                if (typeof P == "function")
                    return P(U);
                function B() {
                    var $;
                    typeof (($ = location) === null || $ === void 0 ? void 0 : $.reload) == "function" ? location.reload() : Y()
                }
                const H = /Loading (CSS )?chunk .+ failed\./.test(U == null ? void 0 : U.message) ? "\u8D44\u6E90\u52A0\u8F7D\u5931\u8D25" : "\u9875\u9762\u5F02\u5E38"
                  , z = "\u975E\u5E38\u62B1\u6B49\u7ED9\u60A8\u9020\u6210\u7684\u4E0D\u4FBF\uFF0C\u6211\u4EEC\u7684\u5DE5\u7A0B\u5E08\u4F1A\u5C3D\u5FEB\u4FEE\u590D\uFF0C\u5982\u679C\u65B9\u4FBF\u8BF7\u8054\u7CFB\u6211\u4EEC\u7684\u5BA2\u670D\u628A\u60A8\u7684\u6D4F\u89C8\u5668\u7248\u672C\u3001\u9875\u9762\u5730\u5740\u4EE5\u53CA\u7528\u6237Id\u53CD\u9988\u7ED9\u6211\u4EEC\uFF0C\u8C22\u8C22";
                return C === "h5" ? t().createElement(Le, {
                    subTitle: `${H}\uFF0C${z}`
                }) : t().createElement(Ie, {
                    title: H,
                    subTitle: Ce ? z : t().createElement(t().Fragment, null, "\u3010\u6E29\u99A8\u63D0\u793A\u3011\u4E3A\u4E86\u4E0D\u5F71\u54CD\u60A8\u7684\u6B63\u5E38\u4F7F\u7528\uFF0C\u63A8\u8350\u4F7F\u7528chrome\u6D4F\u89C8\u5668\uFF0C", t().createElement("a", {
                        target: "_blank",
                        rel: "noreferrer noopener",
                        href: Pe
                    }, "\u70B9\u51FB\u4E0B\u8F7D")),
                    extra: t().createElement("div", {
                        className: `${Re}-button`,
                        onClick: B
                    }, "\u5237\u65B0\u9875\u9762")
                })
            }
              , X = U => {
                let Y = "";
                if (typeof U == "string") {
                    var B, H, z, $, ct;
                    const tt = U == null || (B = U.split) === null || B === void 0 || (H = B.call(U, `
`)) === null || H === void 0 || (z = H.filter) === null || z === void 0 ? void 0 : z.call(H, rt => rt);
                    if (typeof (tt == null ? void 0 : tt[0]) == "string" && tt !== null && tt !== void 0 && ($ = (ct = tt[0]).includes) !== null && $ !== void 0 && $.call(ct, "@es")) {
                        var at, lt;
                        const rt = tt == null || (at = tt[0]) === null || at === void 0 || (lt = at.match) === null || lt === void 0 ? void 0 : lt.call(at, /@es\S*/);
                        rt != null && rt[0] && (Y = rt[0])
                    }
                }
                return Y
            }
              , ot = (U, Y) => {
                var B, H, z, $, ct;
                let at = "";
                try {
                    at = X(Y == null ? void 0 : Y.componentStack)
                } catch (St) {}
                const lt = (B = v == null || (H = v.collect) === null || H === void 0 ? void 0 : H.bind(v)) !== null && B !== void 0 ? B : h
                  , tt = pt({
                    project: y || "UNKNOWN",
                    errMsg: U == null ? void 0 : U.message,
                    errorStack: U == null ? void 0 : U.stack,
                    type: F,
                    extraInfo: j
                }, at ? {
                    packageName: at,
                    componentStack: Y.componentStack
                } : {});
                typeof lt == "function" && !Me(lt) ? lt("CUSTOM", {
                    key: Gt,
                    value: tt
                }) : (Te(Gt, tt),
                At("ErrorBoundary \u7F3A\u5C11\u5F02\u5E38\u4E0A\u62A5\u65B9\u6CD5"));
                const rt = v == null || (z = v.plugins) === null || z === void 0 ? void 0 : z.radar
                  , Xt = ($ = rt == null || (ct = rt.captureException) === null || ct === void 0 ? void 0 : ct.bind(rt)) !== null && $ !== void 0 ? $ : x;
                typeof Xt == "function" ? Xt(U) : (be(U),
                At("ErrorBoundary \u7F3A\u5C11\u96F7\u8FBE\u4E0A\u62A5\u65B9\u6CD5"));
                try {
                    if (/Loading (CSS )?chunk .+ failed\./.test(U == null ? void 0 : U.message)) {
                        var Et, Dt;
                        const St = /https:\/\/.*?\.(js|css)/g
                          , ut = (Et = U.message) === null || Et === void 0 || (Dt = Et.match) === null || Dt === void 0 ? void 0 : Dt.call(Et, St);
                        if (ut != null && ut.length && typeof fetch == "function") {
                            const ke = ut == null ? void 0 : ut[0];
                            fetch(ke, {
                                cache: "reload"
                            })
                        }
                    }
                } catch (St) {
                    At(St)
                }
            }
            ;
            return t().createElement(me.ErrorBoundary, {
                fallbackRender: K,
                onError: ot
            }, R)
        }
        );
        var je = D(241)
          , Ne = D.n(je)
          , Fe = D(2012)
          , Ue = D.n(Fe);
        const we = ({value: d, unit: v, percentile: y, compareRatio: h, trendData: x}) => {
            var P;
            return t().createElement("div", {
                className: "kpro-cps-overview-summary"
            }, t().createElement(Ue(), {
                trendChartConfig: {
                    trendTopText: `\u6570\u636E\u5468\u671F ${x == null ? void 0 : x.startTime} ~ ${x == null ? void 0 : x.endTime}`,
                    tooltipCrosshairs: {
                        line: {
                            style: {
                                stroke: "#7AAEFC"
                            }
                        }
                    }
                },
                dataCardConfig: {},
                sourceData: {
                    cardKey: "total",
                    title: "\u7D2F\u8BA1\u6210\u4EA4\u91D1\u989D",
                    titleTooltipType: "underline",
                    value: {
                        value: d,
                        valueType: "AMOUNT_SUFFIX",
                        unit: v
                    },
                    sellerCompare: {
                        value: {
                            value: y,
                            valueType: "AMOUNT_SUFFIX",
                            unit: "%"
                        },
                        valueLeftSlot: y > 0 ? "\u8D85\u8FC7" : "\u4F4E\u4E8E",
                        valueTrend: y > 0 ? "positive" : "negative"
                    },
                    timeCompare: {
                        value: {
                            value: h,
                            valueType: "AMOUNT_SUFFIX",
                            unit: "%"
                        },
                        valueTrend: h > 0 ? "positive" : "negative"
                    },
                    trendData: x == null || (P = x.dataList) === null || P === void 0 ? void 0 : P.map(C => ({
                        category: "total",
                        label: C.date,
                        value: C.value,
                        valueType: "AMOUNT",
                        rate: 10,
                        desc: "\u6210\u4EA4\u91D1\u989D"
                    }))
                }
            }))
        }
        ;
        var Ke = D(5055)
          , Be = D.n(Ke);
        const ft = "https://cps.kwaixiaodian.com"
          , He = ({createOrderItemCnt: d, createOrderPromoterCnt: v, createOrderInvestmentCnt: y, collectClick: h}) => {
            const x = [{
                cardKey: "createOrderItemCnt",
                title: "\u6210\u4EA4\u8D27\u54C1\u6570",
                value: d == null ? void 0 : d.value,
                unit: d == null ? void 0 : d.unit,
                timeCompare: d == null ? void 0 : d.percentile
            }, {
                cardKey: "createOrderPromoterCnt",
                title: "\u6210\u4EA4\u8FBE\u4EBA\u6570",
                value: v == null ? void 0 : v.value,
                unit: v == null ? void 0 : v.unit,
                timeCompare: v == null ? void 0 : v.percentile
            }, {
                cardKey: "createOrderInvestmentCnt",
                title: "\u6210\u4EA4\u56E2\u957F\u6570",
                value: y == null ? void 0 : y.value,
                unit: y == null ? void 0 : y.unit,
                timeCompare: y == null ? void 0 : y.percentile
            }];
            return t().createElement("div", {
                className: "kpro-cps-overview-cards"
            }, x == null ? void 0 : x.map(P => t().createElement(Be(), {
                size: "small",
                key: P.cardKey,
                onCardClick: () => {
                    ft && window.open(ft),
                    h == null || h("CPS_MODULE", {
                        click_area: P == null ? void 0 : P.title,
                        click_type: 1,
                        jump_url: ft
                    })
                }
                ,
                cardKey: P.cardKey,
                titleTooltipType: "underline",
                value: {
                    value: P.value,
                    unit: P.unit,
                    valueType: "AMOUNT_SUFFIX"
                },
                sellerCompare: {
                    value: {
                        value: P.timeCompare,
                        valueType: "AMOUNT_SUFFIX",
                        unit: "%"
                    },
                    valueTrend: P.timeCompare > 0 ? "positive" : "negative",
                    valueLeftSlot: P.timeCompare > 0 ? "\u8D85\u8FC7" : "\u4F4E\u4E8E",
                    valueRightSlot: t().createElement("span", null, "\u540C\u7C7B\u5546\u5BB6")
                },
                title: P.title
            })))
        }
        ;
        var lr = D(4353);
        function Mt() {
            return Mt = Object.assign ? Object.assign.bind() : function(d) {
                for (var v = 1; v < arguments.length; v++) {
                    var y = arguments[v];
                    for (var h in y)
                        Object.prototype.hasOwnProperty.call(y, h) && (d[h] = y[h])
                }
                return d
            }
            ,
            Mt.apply(this, arguments)
        }
        const ze = ({createOrderAmt: d, trendData: v, createOrderInvestmentCnt: y, createOrderItemCnt: h, createOrderPromoterCnt: x, suggestionConfigFrameImplant: P, style: C, webloger: R, collectShow: F, collectClick: j}) => ((0,
        c.useEffect)( () => {
            F == null || F("CPS_MODULE")
        }
        , [F]),
        t().createElement(o(), {
            layoutConfig: {
                title: "\u5206\u9500\u5356\u8D27",
                actionText: "\u8FDB\u5165\u5FEB\u5206\u9500",
                actionUrl: ft
            },
            noteList: [{
                label: "\u7D2F\u8BA1\u6210\u4EA4\u91D1\u989D",
                value: "\u8FD17\u65E5\u7D2F\u8BA1\u6210\u4EA4\u91D1\u989D"
            }, {
                label: "\u6210\u4EA4\u8D27\u54C1\u6570\u91CF",
                value: "\u7EDF\u8BA1\u8FD17\u65E5\u6210\u4EA4\u8D27\u54C1\u6570\u91CF"
            }, {
                label: "\u6210\u4EA4\u8FBE\u4EBA\u6570\u91CF",
                value: "\u7EDF\u8BA1\u8FD17\u65E5\u6210\u4EA4\u8FBE\u4EBA\u6570\u91CF"
            }, {
                label: "\u6210\u4EA4\u56E2\u957F\u6570\u91CF",
                value: "\u7EDF\u8BA1\u8FD17\u65E5\u6210\u4EA4\u56E2\u957F\u6570\u91CF"
            }, {
                label: "\u540C\u7C7B\u5546\u5BB6",
                value: "\u540C\u4E3B\u8425\u7C7B\u76EE\u4E14\u540C\u5546\u5BB6\u7B49\u7EA7"
            }],
            onActionClick: () => {
                j == null || j("CPS_MODULE_ENTER_HOME", {}),
                j == null || j("CPS_MODULE", {
                    click_area: "\u8FDB\u5165\u5FEB\u5206\u9500",
                    click_type: 5,
                    jump_url: ft
                })
            }
            ,
            style: C
        }, t().createElement(we, Mt({}, d, {
            trendData: v,
            collectClick: j
        })), t().createElement(He, {
            createOrderItemCnt: h,
            createOrderPromoterCnt: x,
            createOrderInvestmentCnt: y,
            collectClick: j
        }), P && t().createElement("div", {
            style: {
                paddingTop: "16px"
            }
        }, t().createElement(Ne(), {
            logger: R,
            moduleName: "\u5206\u9500\u5356\u8D27",
            suggestionConfig: P,
            onMainActionClick: () => {}
        }))))
          , Qe = d => t().createElement(Vt, {
            type: "component",
            project: "@es/kpro-cps-overview-card",
            extraInfo: {
                version: "1.1.0"
            }
        }, t().createElement(ze, d));
        function xt() {
            return xt = Object.assign ? Object.assign.bind() : function(d) {
                for (var v = 1; v < arguments.length; v++) {
                    var y = arguments[v];
                    for (var h in y)
                        ({}).hasOwnProperty.call(y, h) && (d[h] = y[h])
                }
                return d
            }
            ,
            xt.apply(null, arguments)
        }
        var We = function(v) {
            var y, h;
            if (!v.data || !v.sellerStatus)
                return null;
            var x = v.data
              , P = v.sellerStatus
              , C = v.webloger
              , R = function(B, H) {
                C == null || C.sendImmediately("SHOW", {
                    action: B,
                    params: H
                })
            }
              , F = function(B, H) {
                C == null || C.sendImmediately("CLICK", {
                    action: B,
                    params: H,
                    type: "USER_OPERATION"
                })
            }
              , j = {
                notOpenKFC: (y = x.notOpenKFC) !== null && y !== void 0 && (h = y.conditionData) !== null && h !== void 0 && h.isMeet ? "\u6EE1\u8DB3\u6761\u4EF6\u672A\u5F00\u901A" : "\u672A\u6EE1\u8DB3\u5F00\u901A\u6761\u4EF6",
                noDistribution: "\u65E0\u666E\u901A\u8BA1\u5212",
                noSevenData: "\u8FBE\u4EBA\u5EFA\u8054",
                hasSevenData: "\u5206\u9500\u6570\u636E",
                noQualification: "\u6E05\u9000",
                recoveryQualification: "\u91CD\u53EC\u56DE\u5F85\u5F00\u901A"
            }
              , K = function(B) {
                F("DISTRIBUTION_SALE_CARD", {
                    card_type: j[P],
                    click_area: a[B]
                })
            }
              , X = function() {
                R("DISTRIBUTION_SALE_CARD", {
                    card_type: j[P]
                })
            };
            if (P === l.hasSevenData) {
                var ot = function() {
                    for (var B, H = arguments.length, z = new Array(H), $ = 0; $ < H; $++)
                        z[$] = arguments[$];
                    switch (F.apply(void 0, z),
                    z[0]) {
                    case "CPS_MODULE_ENTER_HOME":
                        K("enterKFC");
                        break;
                    case "CPS_MODULE":
                        (z == null || (B = z[1]) === null || B === void 0 ? void 0 : B.click_type) === 1 && K("dataArea");
                        break;
                    default:
                        break
                    }
                }
                  , U = function() {
                    for (var B = arguments.length, H = new Array(B), z = 0; z < B; z++)
                        H[z] = arguments[z];
                    R.apply(void 0, H),
                    H[0] === "CPS_MODULE" && X()
                };
                return x.hasSevenData ? t().createElement(Qe, xt({}, x.hasSevenData, v, {
                    collectClick: ot,
                    collectShow: U
                })) : null
            }
            return t().createElement(Vt, {
                type: "component",
                project: "@es/kpro-seller-v2-cps-overview-card",
                extraInfo: {
                    version: "0.1.2"
                }
            }, t().createElement(pe, xt({}, v, {
                collectClick: K,
                collectShow: X
            })))
        }
    }
    )(),
    Ct
}
)());
