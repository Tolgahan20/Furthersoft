/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
function ParticleSlider(t) {
    var e = this;
    if (e.sliderId = "particle-slider", e.color = "#fff", e.hoverColor = "#88f", e.width = 0, e.height = 0, e.ptlGap = 0, e.ptlSize = 1, e.slideDelay = 10, e.arrowPadding = 10, e.showArrowControls = !0, e.onNextSlide = null, e.onWidthChange = null, e.onHeightChange = null, e.onSizeChange = null, e.monochrome = !1, e.mouseForce = 1e4, e.restless = !0, e.imgs = [], t)
        for (var i = ["color", "hoverColor", "width", "height", "ptlGap", "ptlSize", "slideDelay", "arrowPadding", "sliderId", "showArrowControls", "onNextSlide", "monochrome", "mouseForce", "restless", "imgs", "onSizeChange", "onWidthChange", "onHeightChange"], n = 0, s = i.length; n < s; n++) t[i[n]] && (e[i[n]] = t[i[n]]);
    if (e.$container = e.$("#" + e.sliderId), e.$$children = e.$container.childNodes, e.$controlsContainer = e.$(".controls"), e.$$slides = e.$(".slide", e.$(".slides").childNodes, !0), e.$controlLeft = null, e.$controlRight = null, e.$canv = e.$(".draw"), e.$srcCanv = document.createElement("canvas"), e.$srcCanv.style.display = "none", e.$container.appendChild(e.$srcCanv), e.$prevCanv = document.createElement("canvas"), e.$prevCanv.style.display = "none", e.$container.appendChild(e.$prevCanv), e.$nextCanv = document.createElement("canvas"), e.$nextCanv.style.display = "none", e.$container.appendChild(e.$nextCanv), e.$overlay = document.createElement("p"), e.$container.appendChild(e.$overlay), e.imgControlPrev = null, e.imgControlNext = null, e.$$slides.length <= 1 && (e.showArrowControls = !1), e.$controlsContainer && e.$controlsContainer.childNodes && 1 == e.showArrowControls ? (e.$controlLeft = e.$(".left", e.$controlsContainer.childNodes), e.$controlRight = e.$(".right", e.$controlsContainer.childNodes), e.imgControlPrev = new Image, e.imgControlNext = new Image, e.imgControlPrev.onload = function() { e.$prevCanv.height = this.height, e.$prevCanv.width = this.width, e.loadingStep() }, e.imgControlNext.onload = function() { e.$nextCanv.height = this.height, e.$nextCanv.width = this.width, e.loadingStep() }, e.imgControlPrev.src = e.$controlLeft.getAttribute("data-src"), e.imgControlNext.src = e.$controlRight.getAttribute("data-src")) : e.showArrowControls = !1, e.width <= 0 && (e.width = e.$container.clientWidth), e.height <= 0 && (e.height = e.$container.clientHeight), e.mouseDownRegion = 0, e.colorArr = e.parseColor(e.color), e.hoverColorArr = e.parseColor(e.hoverColor), e.mx = -1, e.my = -1, e.swipeOffset = 0, e.cw = e.getCw(), e.ch = e.getCh(), e.frame = 0, e.nextSlideTimer = !1, e.currImg = 0, e.lastImg = 0, e.imagesLoaded = 0, e.pxlBuffer = { first: null }, e.recycleBuffer = { first: null }, e.ctx = e.$canv.getContext("2d"), e.srcCtx = e.$srcCanv.getContext("2d"), e.prevCtx = e.$prevCanv.getContext("2d"), e.nextCtx = e.$nextCanv.getContext("2d"), e.$canv.width = e.cw, e.$canv.height = e.ch, e.shuffle = function() { for (var t, e, i = 0, n = this.length; i < n; i++) e = Math.floor(Math.random() * n), t = this[i], this[i] = this[e], this[e] = t }, Array.prototype.shuffle = e.shuffle, e.$canv.onmouseout = function() { e.mx = -1, e.my = -1, e.mouseDownRegion = 0 }, e.$canv.onmousemove = function(t) {
            function i(t) {
                var i = 0,
                    n = 0,
                    s = "string" == typeof t ? e.$(t) : t;
                if (s) { i = s.offsetLeft, n = s.offsetTop; for (var o = document.getElementsByTagName("body")[0]; s.offsetParent && s != o;) i += s.offsetParent.offsetLeft, n += s.offsetParent.offsetTop, s = s.offsetParent }
                this.x = i, this.y = n
            }
            var n = new i(e.$container);
            e.mx = t.clientX - n.x + document.body.scrollLeft + document.documentElement.scrollLeft, e.my = t.clientY - n.y + document.body.scrollTop + document.documentElement.scrollTop
        }, e.$canv.onmousedown = function() {
            if (e.imgs.length > 1) {
                var t = 0;
                e.mx >= 0 && e.mx < 2 * e.arrowPadding + e.$prevCanv.width ? t = -1 : e.mx > 0 && e.mx > e.cw - (2 * e.arrowPadding + e.$nextCanv.width) && (t = 1), e.mouseDownRegion = t
            }
        }, e.$canv.onmouseup = function() {
            if (e.imgs.length > 1) {
                var t = "";
                e.mx >= 0 && e.mx < 2 * e.arrowPadding + e.$prevCanv.width ? t = -1 : e.mx > 0 && e.mx > e.cw - (2 * e.arrowPadding + e.$nextCanv.width) && (t = 1), 0 != t && 0 != e.mouseDownRegion && (t != e.mouseDownRegion && (t *= -1), e.nextSlideTimer && clearTimeout(e.nextSlideTimer), e.nextSlide(t)), e.mouseDownRegion = 0
            }
        }, 0 == e.imgs.length)
        for (n = 0, s = e.$$slides.length; n < s; n++) {
            var o = new Image;
            e.imgs.push(o), o.src = e.$$slides[n].getAttribute("data-src")
        }
    e.imgs.length > 0 && (e.imgs[0].onload = function() { e.loadingStep() }), e.requestAnimationFrame(function() { e.nextFrame() })
}! function(t, e) { "use strict"; "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) { if (!t.document) throw new Error("jQuery requires a window with a document"); return e(t) } : e(t) }("undefined" != typeof window ? window : this, function(t, e) {
    "use strict";

    function i(t, e, i) {
        var n, s = (e = e || rt).createElement("script");
        if (s.text = t, i)
            for (n in bt) i[n] && (s[n] = i[n]);
        e.head.appendChild(s).parentNode.removeChild(s)
    }

    function n(t) { return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? dt[pt.call(t)] || "object" : typeof t }

    function s(t) {
        var e = !!t && "length" in t && t.length,
            i = n(t);
        return !_t(t) && !yt(t) && ("array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
    }

    function o(t, e) { return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase() }

    function r(t, e, i) { return _t(e) ? wt.grep(t, function(t, n) { return !!e.call(t, n, t) !== i }) : e.nodeType ? wt.grep(t, function(t) { return t === e !== i }) : "string" != typeof e ? wt.grep(t, function(t) { return ut.call(e, t) > -1 !== i }) : wt.filter(e, t, i) }

    function a(t, e) {
        for (;
            (t = t[e]) && 1 !== t.nodeType;);
        return t
    }

    function l(t) { var e = {}; return wt.each(t.match(Ot) || [], function(t, i) { e[i] = !0 }), e }

    function h(t) { return t }

    function c(t) { throw t }

    function u(t, e, i, n) { var s; try { t && _t(s = t.promise) ? s.call(t).done(e).fail(i) : t && _t(s = t.then) ? s.call(t, e, i) : e.apply(void 0, [t].slice(n)) } catch (t) { i.apply(void 0, [t]) } }

    function d() { rt.removeEventListener("DOMContentLoaded", d), t.removeEventListener("load", d), wt.ready() }

    function p(t, e) { return e.toUpperCase() }

    function f(t) { return t.replace(zt, "ms-").replace(Ht, p) }

    function m() { this.expando = wt.expando + m.uid++ }

    function g(t) { return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : Wt.test(t) ? JSON.parse(t) : t) }

    function v(t, e, i) {
        var n;
        if (void 0 === i && 1 === t.nodeType)
            if (n = "data-" + e.replace(jt, "-$&").toLowerCase(), "string" == typeof(i = t.getAttribute(n))) {
                try { i = g(i) } catch (t) {}
                Ft.set(t, e, i)
            } else i = void 0;
        return i
    }

    function _(t, e, i, n) {
        var s, o, r = 20,
            a = n ? function() { return n.cur() } : function() { return wt.css(t, e, "") },
            l = a(),
            h = i && i[3] || (wt.cssNumber[e] ? "" : "px"),
            c = (wt.cssNumber[e] || "px" !== h && +l) && qt.exec(wt.css(t, e));
        if (c && c[3] !== h) {
            for (l /= 2, h = h || c[3], c = +l || 1; r--;) wt.style(t, e, c + h), (1 - o) * (1 - (o = a() / l || .5)) <= 0 && (r = 0), c /= o;
            c *= 2, wt.style(t, e, c + h), i = i || []
        }
        return i && (c = +c || +l || 0, s = i[1] ? c + (i[1] + 1) * i[2] : +i[2], n && (n.unit = h, n.start = c, n.end = s)), s
    }

    function y(t) {
        var e, i = t.ownerDocument,
            n = t.nodeName,
            s = Vt[n];
        return s || (e = i.body.appendChild(i.createElement(n)), s = wt.css(e, "display"), e.parentNode.removeChild(e), "none" === s && (s = "block"), Vt[n] = s, s)
    }

    function b(t, e) { for (var i, n, s = [], o = 0, r = t.length; o < r; o++)(n = t[o]).style && (i = n.style.display, e ? ("none" === i && (s[o] = Rt.get(n, "display") || null, s[o] || (n.style.display = "")), "" === n.style.display && Xt(n) && (s[o] = y(n))) : "none" !== i && (s[o] = "none", Rt.set(n, "display", i))); for (o = 0; o < r; o++) null != s[o] && (t[o].style.display = s[o]); return t }

    function w(t, e) { var i; return i = "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e || "*") : "undefined" != typeof t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && o(t, e) ? wt.merge([t], i) : i }

    function x(t, e) { for (var i = 0, n = t.length; i < n; i++) Rt.set(t[i], "globalEval", !e || Rt.get(e[i], "globalEval")) }

    function T(t, e, i, s, o) {
        for (var r, a, l, h, c, u, d = e.createDocumentFragment(), p = [], f = 0, m = t.length; f < m; f++)
            if ((r = t[f]) || 0 === r)
                if ("object" === n(r)) wt.merge(p, r.nodeType ? [r] : r);
                else if (Jt.test(r)) {
            for (a = a || d.appendChild(e.createElement("div")), l = (Gt.exec(r) || ["", ""])[1].toLowerCase(), h = Zt[l] || Zt._default, a.innerHTML = h[1] + wt.htmlPrefilter(r) + h[2], u = h[0]; u--;) a = a.lastChild;
            wt.merge(p, a.childNodes), (a = d.firstChild).textContent = ""
        } else p.push(e.createTextNode(r));
        for (d.textContent = "", f = 0; r = p[f++];)
            if (s && wt.inArray(r, s) > -1) o && o.push(r);
            else if (c = wt.contains(r.ownerDocument, r), a = w(d.appendChild(r), "script"), c && x(a), i)
            for (u = 0; r = a[u++];) Qt.test(r.type || "") && i.push(r);
        return d
    }

    function k() { return !0 }

    function C() { return !1 }

    function S() { try { return rt.activeElement } catch (t) {} }

    function P(t, e, i, n, s, o) {
        var r, a;
        if ("object" == typeof e) { for (a in "string" != typeof i && (n = n || i, i = void 0), e) P(t, a, i, n, e[a], o); return t }
        if (null == n && null == s ? (s = i, n = i = void 0) : null == s && ("string" == typeof i ? (s = n, n = void 0) : (s = n, n = i, i = void 0)), !1 === s) s = C;
        else if (!s) return t;
        return 1 === o && (r = s, (s = function(t) { return wt().off(t), r.apply(this, arguments) }).guid = r.guid || (r.guid = wt.guid++)), t.each(function() { wt.event.add(this, e, s, n, i) })
    }

    function D(t, e) { return o(t, "table") && o(11 !== e.nodeType ? e : e.firstChild, "tr") && wt(t).children("tbody")[0] || t }

    function A(t) { return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t }

    function M(t) { return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"), t }

    function I(t, e) {
        var i, n, s, o, r, a, l, h;
        if (1 === e.nodeType) {
            if (Rt.hasData(t) && (o = Rt.access(t), r = Rt.set(e, o), h = o.events))
                for (s in delete r.handle, r.events = {}, h)
                    for (i = 0, n = h[s].length; i < n; i++) wt.event.add(e, s, h[s][i]);
            Ft.hasData(t) && (a = Ft.access(t), l = wt.extend({}, a), Ft.set(e, l))
        }
    }

    function O(t, e) { var i = e.nodeName.toLowerCase(); "input" === i && Kt.test(t.type) ? e.checked = t.checked : "input" !== i && "textarea" !== i || (e.defaultValue = t.defaultValue) }

    function E(t, e, n, s) {
        e = ht.apply([], e);
        var o, r, a, l, h, c, u = 0,
            d = t.length,
            p = d - 1,
            f = e[0],
            m = _t(f);
        if (m || d > 1 && "string" == typeof f && !vt.checkClone && re.test(f)) return t.each(function(i) {
            var o = t.eq(i);
            m && (e[0] = f.call(this, i, o.html())), E(o, e, n, s)
        });
        if (d && (r = (o = T(e, t[0].ownerDocument, !1, t, s)).firstChild, 1 === o.childNodes.length && (o = r), r || s)) {
            for (l = (a = wt.map(w(o, "script"), A)).length; u < d; u++) h = o, u !== p && (h = wt.clone(h, !0, !0), l && wt.merge(a, w(h, "script"))), n.call(t[u], h, u);
            if (l)
                for (c = a[a.length - 1].ownerDocument, wt.map(a, M), u = 0; u < l; u++) h = a[u], Qt.test(h.type || "") && !Rt.access(h, "globalEval") && wt.contains(c, h) && (h.src && "module" !== (h.type || "").toLowerCase() ? wt._evalUrl && wt._evalUrl(h.src) : i(h.textContent.replace(ae, ""), c, h))
        }
        return t
    }

    function $(t, e, i) { for (var n, s = e ? wt.filter(e, t) : t, o = 0; null != (n = s[o]); o++) i || 1 !== n.nodeType || wt.cleanData(w(n)), n.parentNode && (i && wt.contains(n.ownerDocument, n) && x(w(n, "script")), n.parentNode.removeChild(n)); return t }

    function N(t, e, i) { var n, s, o, r, a = t.style; return (i = i || he(t)) && ("" !== (r = i.getPropertyValue(e) || i[e]) || wt.contains(t.ownerDocument, t) || (r = wt.style(t, e)), !vt.pixelBoxStyles() && le.test(r) && ce.test(e) && (n = a.width, s = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = i.width, a.width = n, a.minWidth = s, a.maxWidth = o)), void 0 !== r ? r + "" : r }

    function z(t, e) {
        return {
            get: function() {
                if (!t()) return (this.get = e).apply(this, arguments);
                delete this.get
            }
        }
    }

    function H(t) {
        if (t in ge) return t;
        for (var e = t[0].toUpperCase() + t.slice(1), i = me.length; i--;)
            if ((t = me[i] + e) in ge) return t
    }

    function L(t) { var e = wt.cssProps[t]; return e || (e = wt.cssProps[t] = H(t) || t), e }

    function R(t, e, i) { var n = qt.exec(e); return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : e }

    function F(t, e, i, n, s, o) {
        var r = "width" === e ? 1 : 0,
            a = 0,
            l = 0;
        if (i === (n ? "border" : "content")) return 0;
        for (; r < 4; r += 2) "margin" === i && (l += wt.css(t, i + Yt[r], !0, s)), n ? ("content" === i && (l -= wt.css(t, "padding" + Yt[r], !0, s)), "margin" !== i && (l -= wt.css(t, "border" + Yt[r] + "Width", !0, s))) : (l += wt.css(t, "padding" + Yt[r], !0, s), "padding" !== i ? l += wt.css(t, "border" + Yt[r] + "Width", !0, s) : a += wt.css(t, "border" + Yt[r] + "Width", !0, s));
        return !n && o >= 0 && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - o - l - a - .5))), l
    }

    function W(t, e, i) {
        var n = he(t),
            s = N(t, e, n),
            o = "border-box" === wt.css(t, "boxSizing", !1, n),
            r = o;
        if (le.test(s)) {
            if (!i) return s;
            s = "auto"
        }
        return r = r && (vt.boxSizingReliable() || s === t.style[e]), ("auto" === s || !parseFloat(s) && "inline" === wt.css(t, "display", !1, n)) && (s = t["offset" + e[0].toUpperCase() + e.slice(1)], r = !0), (s = parseFloat(s) || 0) + F(t, e, i || (o ? "border" : "content"), r, n, s) + "px"
    }

    function j(t, e, i, n, s) { return new j.prototype.init(t, e, i, n, s) }

    function B() { _e && (!1 === rt.hidden && t.requestAnimationFrame ? t.requestAnimationFrame(B) : t.setTimeout(B, wt.fx.interval), wt.fx.tick()) }

    function q() { return t.setTimeout(function() { ve = void 0 }), ve = Date.now() }

    function Y(t, e) {
        var i, n = 0,
            s = { height: t };
        for (e = e ? 1 : 0; n < 4; n += 2 - e) s["margin" + (i = Yt[n])] = s["padding" + i] = t;
        return e && (s.opacity = s.width = t), s
    }

    function X(t, e, i) {
        for (var n, s = (K.tweeners[e] || []).concat(K.tweeners["*"]), o = 0, r = s.length; o < r; o++)
            if (n = s[o].call(i, e, t)) return n
    }

    function U(t, e, i) {
        var n, s, o, r, a, l, h, c, u = "width" in e || "height" in e,
            d = this,
            p = {},
            f = t.style,
            m = t.nodeType && Xt(t),
            g = Rt.get(t, "fxshow");
        for (n in i.queue || (null == (r = wt._queueHooks(t, "fx")).unqueued && (r.unqueued = 0, a = r.empty.fire, r.empty.fire = function() { r.unqueued || a() }), r.unqueued++, d.always(function() { d.always(function() { r.unqueued--, wt.queue(t, "fx").length || r.empty.fire() }) })), e)
            if (s = e[n], ye.test(s)) {
                if (delete e[n], o = o || "toggle" === s, s === (m ? "hide" : "show")) {
                    if ("show" !== s || !g || void 0 === g[n]) continue;
                    m = !0
                }
                p[n] = g && g[n] || wt.style(t, n)
            }
        if ((l = !wt.isEmptyObject(e)) || !wt.isEmptyObject(p))
            for (n in u && 1 === t.nodeType && (i.overflow = [f.overflow, f.overflowX, f.overflowY], null == (h = g && g.display) && (h = Rt.get(t, "display")), "none" === (c = wt.css(t, "display")) && (h ? c = h : (b([t], !0), h = t.style.display || h, c = wt.css(t, "display"), b([t]))), ("inline" === c || "inline-block" === c && null != h) && "none" === wt.css(t, "float") && (l || (d.done(function() { f.display = h }), null == h && (c = f.display, h = "none" === c ? "" : c)), f.display = "inline-block")), i.overflow && (f.overflow = "hidden", d.always(function() { f.overflow = i.overflow[0], f.overflowX = i.overflow[1], f.overflowY = i.overflow[2] })), l = !1, p) l || (g ? "hidden" in g && (m = g.hidden) : g = Rt.access(t, "fxshow", { display: h }), o && (g.hidden = !m), m && b([t], !0), d.done(function() { for (n in m || b([t]), Rt.remove(t, "fxshow"), p) wt.style(t, n, p[n]) })), l = X(m ? g[n] : 0, n, d), n in g || (g[n] = l.start, m && (l.end = l.start, l.start = 0))
    }

    function V(t, e) {
        var i, n, s, o, r;
        for (i in t)
            if (s = e[n = f(i)], o = t[i], Array.isArray(o) && (s = o[1], o = t[i] = o[0]), i !== n && (t[n] = o, delete t[i]), (r = wt.cssHooks[n]) && "expand" in r)
                for (i in o = r.expand(o), delete t[n], o) i in t || (t[i] = o[i], e[i] = s);
            else e[n] = s
    }

    function K(t, e, i) {
        var n, s, o = 0,
            r = K.prefilters.length,
            a = wt.Deferred().always(function() { delete l.elem }),
            l = function() { if (s) return !1; for (var e = ve || q(), i = Math.max(0, h.startTime + h.duration - e), n = 1 - (i / h.duration || 0), o = 0, r = h.tweens.length; o < r; o++) h.tweens[o].run(n); return a.notifyWith(t, [h, n, i]), n < 1 && r ? i : (r || a.notifyWith(t, [h, 1, 0]), a.resolveWith(t, [h]), !1) },
            h = a.promise({
                elem: t,
                props: wt.extend({}, e),
                opts: wt.extend(!0, { specialEasing: {}, easing: wt.easing._default }, i),
                originalProperties: e,
                originalOptions: i,
                startTime: ve || q(),
                duration: i.duration,
                tweens: [],
                createTween: function(e, i) { var n = wt.Tween(t, h.opts, e, i, h.opts.specialEasing[e] || h.opts.easing); return h.tweens.push(n), n },
                stop: function(e) {
                    var i = 0,
                        n = e ? h.tweens.length : 0;
                    if (s) return this;
                    for (s = !0; i < n; i++) h.tweens[i].run(1);
                    return e ? (a.notifyWith(t, [h, 1, 0]), a.resolveWith(t, [h, e])) : a.rejectWith(t, [h, e]), this
                }
            }),
            c = h.props;
        for (V(c, h.opts.specialEasing); o < r; o++)
            if (n = K.prefilters[o].call(h, t, c, h.opts)) return _t(n.stop) && (wt._queueHooks(h.elem, h.opts.queue).stop = n.stop.bind(n)), n;
        return wt.map(c, X, h), _t(h.opts.start) && h.opts.start.call(t, h), h.progress(h.opts.progress).done(h.opts.done, h.opts.complete).fail(h.opts.fail).always(h.opts.always), wt.fx.timer(wt.extend(l, { elem: t, anim: h, queue: h.opts.queue })), h
    }

    function G(t) { return (t.match(Ot) || []).join(" ") }

    function Q(t) { return t.getAttribute && t.getAttribute("class") || "" }

    function Z(t) { return Array.isArray(t) ? t : "string" == typeof t && t.match(Ot) || [] }

    function J(t, e, i, s) {
        var o;
        if (Array.isArray(e)) wt.each(e, function(e, n) { i || Ie.test(t) ? s(t, n) : J(t + "[" + ("object" == typeof n && null != n ? e : "") + "]", n, i, s) });
        else if (i || "object" !== n(e)) s(t, e);
        else
            for (o in e) J(t + "[" + o + "]", e[o], i, s)
    }

    function tt(t) {
        return function(e, i) {
            "string" != typeof e && (i = e, e = "*");
            var n, s = 0,
                o = e.toLowerCase().match(Ot) || [];
            if (_t(i))
                for (; n = o[s++];) "+" === n[0] ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
        }
    }

    function et(t, e, i, n) {
        function s(a) { var l; return o[a] = !0, wt.each(t[a] || [], function(t, a) { var h = a(e, i, n); return "string" != typeof h || r || o[h] ? r ? !(l = h) : void 0 : (e.dataTypes.unshift(h), s(h), !1) }), l }
        var o = {},
            r = t === Be;
        return s(e.dataTypes[0]) || !o["*"] && s("*")
    }

    function it(t, e) { var i, n, s = wt.ajaxSettings.flatOptions || {}; for (i in e) void 0 !== e[i] && ((s[i] ? t : n || (n = {}))[i] = e[i]); return n && wt.extend(!0, t, n), t }

    function nt(t, e, i) {
        for (var n, s, o, r, a = t.contents, l = t.dataTypes;
            "*" === l[0];) l.shift(), void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
        if (n)
            for (s in a)
                if (a[s] && a[s].test(n)) { l.unshift(s); break }
        if (l[0] in i) o = l[0];
        else {
            for (s in i) {
                if (!l[0] || t.converters[s + " " + l[0]]) { o = s; break }
                r || (r = s)
            }
            o = o || r
        }
        if (o) return o !== l[0] && l.unshift(o), i[o]
    }

    function st(t, e, i, n) {
        var s, o, r, a, l, h = {},
            c = t.dataTypes.slice();
        if (c[1])
            for (r in t.converters) h[r.toLowerCase()] = t.converters[r];
        for (o = c.shift(); o;)
            if (t.responseFields[o] && (i[t.responseFields[o]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = c.shift())
                if ("*" === o) o = l;
                else if ("*" !== l && l !== o) {
            if (!(r = h[l + " " + o] || h["* " + o]))
                for (s in h)
                    if ((a = s.split(" "))[1] === o && (r = h[l + " " + a[0]] || h["* " + a[0]])) {!0 === r ? r = h[s] : !0 !== h[s] && (o = a[0], c.unshift(a[1])); break }
            if (!0 !== r)
                if (r && t.throws) e = r(e);
                else try { e = r(e) } catch (t) { return { state: "parsererror", error: r ? t : "No conversion from " + l + " to " + o } }
        }
        return { state: "success", data: e }
    }
    var ot = [],
        rt = t.document,
        at = Object.getPrototypeOf,
        lt = ot.slice,
        ht = ot.concat,
        ct = ot.push,
        ut = ot.indexOf,
        dt = {},
        pt = dt.toString,
        ft = dt.hasOwnProperty,
        mt = ft.toString,
        gt = mt.call(Object),
        vt = {},
        _t = function(t) { return "function" == typeof t && "number" != typeof t.nodeType },
        yt = function(t) { return null != t && t === t.window },
        bt = { type: !0, src: !0, noModule: !0 },
        wt = function(t, e) { return new wt.fn.init(t, e) },
        xt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    wt.fn = wt.prototype = {
        jquery: "3.3.1",
        constructor: wt,
        length: 0,
        toArray: function() { return lt.call(this) },
        get: function(t) { return null == t ? lt.call(this) : t < 0 ? this[t + this.length] : this[t] },
        pushStack: function(t) { var e = wt.merge(this.constructor(), t); return e.prevObject = this, e },
        each: function(t) { return wt.each(this, t) },
        map: function(t) { return this.pushStack(wt.map(this, function(e, i) { return t.call(e, i, e) })) },
        slice: function() { return this.pushStack(lt.apply(this, arguments)) },
        first: function() { return this.eq(0) },
        last: function() { return this.eq(-1) },
        eq: function(t) {
            var e = this.length,
                i = +t + (t < 0 ? e : 0);
            return this.pushStack(i >= 0 && i < e ? [this[i]] : [])
        },
        end: function() { return this.prevObject || this.constructor() },
        push: ct,
        sort: ot.sort,
        splice: ot.splice
    }, wt.extend = wt.fn.extend = function() {
        var t, e, i, n, s, o, r = arguments[0] || {},
            a = 1,
            l = arguments.length,
            h = !1;
        for ("boolean" == typeof r && (h = r, r = arguments[a] || {}, a++), "object" == typeof r || _t(r) || (r = {}), a === l && (r = this, a--); a < l; a++)
            if (null != (t = arguments[a]))
                for (e in t) i = r[e], r !== (n = t[e]) && (h && n && (wt.isPlainObject(n) || (s = Array.isArray(n))) ? (s ? (s = !1, o = i && Array.isArray(i) ? i : []) : o = i && wt.isPlainObject(i) ? i : {}, r[e] = wt.extend(h, o, n)) : void 0 !== n && (r[e] = n));
        return r
    }, wt.extend({
        expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) { throw new Error(t) },
        noop: function() {},
        isPlainObject: function(t) { var e, i; return !(!t || "[object Object]" !== pt.call(t) || (e = at(t)) && ("function" != typeof(i = ft.call(e, "constructor") && e.constructor) || mt.call(i) !== gt)) },
        isEmptyObject: function(t) { var e; for (e in t) return !1; return !0 },
        globalEval: function(t) { i(t) },
        each: function(t, e) {
            var i, n = 0;
            if (s(t))
                for (i = t.length; n < i && !1 !== e.call(t[n], n, t[n]); n++);
            else
                for (n in t)
                    if (!1 === e.call(t[n], n, t[n])) break; return t
        },
        trim: function(t) { return null == t ? "" : (t + "").replace(xt, "") },
        makeArray: function(t, e) { var i = e || []; return null != t && (s(Object(t)) ? wt.merge(i, "string" == typeof t ? [t] : t) : ct.call(i, t)), i },
        inArray: function(t, e, i) { return null == e ? -1 : ut.call(e, t, i) },
        merge: function(t, e) { for (var i = +e.length, n = 0, s = t.length; n < i; n++) t[s++] = e[n]; return t.length = s, t },
        grep: function(t, e, i) { for (var n = [], s = 0, o = t.length, r = !i; s < o; s++) !e(t[s], s) !== r && n.push(t[s]); return n },
        map: function(t, e, i) {
            var n, o, r = 0,
                a = [];
            if (s(t))
                for (n = t.length; r < n; r++) null != (o = e(t[r], r, i)) && a.push(o);
            else
                for (r in t) null != (o = e(t[r], r, i)) && a.push(o);
            return ht.apply([], a)
        },
        guid: 1,
        support: vt
    }), "function" == typeof Symbol && (wt.fn[Symbol.iterator] = ot[Symbol.iterator]), wt.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) { dt["[object " + e + "]"] = e.toLowerCase() });
    var Tt = function(t) {
        function e(t, e, i, n) {
            var s, o, r, a, l, h, c, d = e && e.ownerDocument,
                f = e ? e.nodeType : 9;
            if (i = i || [], "string" != typeof t || !t || 1 !== f && 9 !== f && 11 !== f) return i;
            if (!n && ((e ? e.ownerDocument || e : W) !== E && O(e), e = e || E, N)) {
                if (11 !== f && (l = vt.exec(t)))
                    if (s = l[1]) { if (9 === f) { if (!(r = e.getElementById(s))) return i; if (r.id === s) return i.push(r), i } else if (d && (r = d.getElementById(s)) && R(e, r) && r.id === s) return i.push(r), i } else { if (l[2]) return Z.apply(i, e.getElementsByTagName(t)), i; if ((s = l[3]) && x.getElementsByClassName && e.getElementsByClassName) return Z.apply(i, e.getElementsByClassName(s)), i }
                if (x.qsa && !X[t + " "] && (!z || !z.test(t))) {
                    if (1 !== f) d = e, c = t;
                    else if ("object" !== e.nodeName.toLowerCase()) {
                        for ((a = e.getAttribute("id")) ? a = a.replace(wt, xt) : e.setAttribute("id", a = F), o = (h = S(t)).length; o--;) h[o] = "#" + a + " " + p(h[o]);
                        c = h.join(","), d = _t.test(t) && u(e.parentNode) || e
                    }
                    if (c) try { return Z.apply(i, d.querySelectorAll(c)), i } catch (t) {} finally { a === F && e.removeAttribute("id") }
                }
            }
            return D(t.replace(at, "$1"), e, i, n)
        }

        function i() {
            function t(i, n) { return e.push(i + " ") > T.cacheLength && delete t[e.shift()], t[i + " "] = n }
            var e = [];
            return t
        }

        function n(t) { return t[F] = !0, t }

        function s(t) { var e = E.createElement("fieldset"); try { return !!t(e) } catch (t) { return !1 } finally { e.parentNode && e.parentNode.removeChild(e), e = null } }

        function o(t, e) { for (var i = t.split("|"), n = i.length; n--;) T.attrHandle[i[n]] = e }

        function r(t, e) {
            var i = e && t,
                n = i && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
            if (n) return n;
            if (i)
                for (; i = i.nextSibling;)
                    if (i === e) return -1;
            return t ? 1 : -1
        }

        function a(t) { return function(e) { return "input" === e.nodeName.toLowerCase() && e.type === t } }

        function l(t) { return function(e) { var i = e.nodeName.toLowerCase(); return ("input" === i || "button" === i) && e.type === t } }

        function h(t) { return function(e) { return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && kt(e) === t : e.disabled === t : "label" in e && e.disabled === t } }

        function c(t) { return n(function(e) { return e = +e, n(function(i, n) { for (var s, o = t([], i.length, e), r = o.length; r--;) i[s = o[r]] && (i[s] = !(n[s] = i[s])) }) }) }

        function u(t) { return t && "undefined" != typeof t.getElementsByTagName && t }

        function d() {}

        function p(t) { for (var e = 0, i = t.length, n = ""; e < i; e++) n += t[e].value; return n }

        function f(t, e, i) {
            var n = e.dir,
                s = e.next,
                o = s || n,
                r = i && "parentNode" === o,
                a = B++;
            return e.first ? function(e, i, s) {
                for (; e = e[n];)
                    if (1 === e.nodeType || r) return t(e, i, s);
                return !1
            } : function(e, i, l) {
                var h, c, u, d = [j, a];
                if (l) {
                    for (; e = e[n];)
                        if ((1 === e.nodeType || r) && t(e, i, l)) return !0
                } else
                    for (; e = e[n];)
                        if (1 === e.nodeType || r)
                            if (c = (u = e[F] || (e[F] = {}))[e.uniqueID] || (u[e.uniqueID] = {}), s && s === e.nodeName.toLowerCase()) e = e[n] || e;
                            else { if ((h = c[o]) && h[0] === j && h[1] === a) return d[2] = h[2]; if (c[o] = d, d[2] = t(e, i, l)) return !0 } return !1
            }
        }

        function m(t) {
            return t.length > 1 ? function(e, i, n) {
                for (var s = t.length; s--;)
                    if (!t[s](e, i, n)) return !1;
                return !0
            } : t[0]
        }

        function g(t, i, n) { for (var s = 0, o = i.length; s < o; s++) e(t, i[s], n); return n }

        function v(t, e, i, n, s) { for (var o, r = [], a = 0, l = t.length, h = null != e; a < l; a++)(o = t[a]) && (i && !i(o, n, s) || (r.push(o), h && e.push(a))); return r }

        function _(t, e, i, s, o, r) {
            return s && !s[F] && (s = _(s)), o && !o[F] && (o = _(o, r)), n(function(n, r, a, l) {
                var h, c, u, d = [],
                    p = [],
                    f = r.length,
                    m = n || g(e || "*", a.nodeType ? [a] : a, []),
                    _ = !t || !n && e ? m : v(m, d, t, a, l),
                    y = i ? o || (n ? t : f || s) ? [] : r : _;
                if (i && i(_, y, a, l), s)
                    for (h = v(y, p), s(h, [], a, l), c = h.length; c--;)(u = h[c]) && (y[p[c]] = !(_[p[c]] = u));
                if (n) {
                    if (o || t) {
                        if (o) {
                            for (h = [], c = y.length; c--;)(u = y[c]) && h.push(_[c] = u);
                            o(null, y = [], h, l)
                        }
                        for (c = y.length; c--;)(u = y[c]) && (h = o ? tt(n, u) : d[c]) > -1 && (n[h] = !(r[h] = u))
                    }
                } else y = v(y === r ? y.splice(f, y.length) : y), o ? o(null, r, y, l) : Z.apply(r, y)
            })
        }

        function y(t) {
            for (var e, i, n, s = t.length, o = T.relative[t[0].type], r = o || T.relative[" "], a = o ? 1 : 0, l = f(function(t) { return t === e }, r, !0), h = f(function(t) { return tt(e, t) > -1 }, r, !0), c = [function(t, i, n) { var s = !o && (n || i !== A) || ((e = i).nodeType ? l(t, i, n) : h(t, i, n)); return e = null, s }]; a < s; a++)
                if (i = T.relative[t[a].type]) c = [f(m(c), i)];
                else {
                    if ((i = T.filter[t[a].type].apply(null, t[a].matches))[F]) { for (n = ++a; n < s && !T.relative[t[n].type]; n++); return _(a > 1 && m(c), a > 1 && p(t.slice(0, a - 1).concat({ value: " " === t[a - 2].type ? "*" : "" })).replace(at, "$1"), i, a < n && y(t.slice(a, n)), n < s && y(t = t.slice(n)), n < s && p(t)) }
                    c.push(i)
                }
            return m(c)
        }

        function b(t, i) {
            var s = i.length > 0,
                o = t.length > 0,
                r = function(n, r, a, l, h) {
                    var c, u, d, p = 0,
                        f = "0",
                        m = n && [],
                        g = [],
                        _ = A,
                        y = n || o && T.find.TAG("*", h),
                        b = j += null == _ ? 1 : Math.random() || .1,
                        w = y.length;
                    for (h && (A = r === E || r || h); f !== w && null != (c = y[f]); f++) {
                        if (o && c) {
                            for (u = 0, r || c.ownerDocument === E || (O(c), a = !N); d = t[u++];)
                                if (d(c, r || E, a)) { l.push(c); break }
                            h && (j = b)
                        }
                        s && ((c = !d && c) && p--, n && m.push(c))
                    }
                    if (p += f, s && f !== p) {
                        for (u = 0; d = i[u++];) d(m, g, r, a);
                        if (n) {
                            if (p > 0)
                                for (; f--;) m[f] || g[f] || (g[f] = G.call(l));
                            g = v(g)
                        }
                        Z.apply(l, g), h && !n && g.length > 0 && p + i.length > 1 && e.uniqueSort(l)
                    }
                    return h && (j = b, A = _), m
                };
            return s ? n(r) : r
        }
        var w, x, T, k, C, S, P, D, A, M, I, O, E, $, N, z, H, L, R, F = "sizzle" + 1 * new Date,
            W = t.document,
            j = 0,
            B = 0,
            q = i(),
            Y = i(),
            X = i(),
            U = function(t, e) { return t === e && (I = !0), 0 },
            V = {}.hasOwnProperty,
            K = [],
            G = K.pop,
            Q = K.push,
            Z = K.push,
            J = K.slice,
            tt = function(t, e) {
                for (var i = 0, n = t.length; i < n; i++)
                    if (t[i] === e) return i;
                return -1
            },
            et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            it = "[\\x20\\t\\r\\n\\f]",
            nt = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            st = "\\[" + it + "*(" + nt + ")(?:" + it + "*([*^$|!~]?=)" + it + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + nt + "))|)" + it + "*\\]",
            ot = ":(" + nt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + st + ")*)|.*)\\)|)",
            rt = new RegExp(it + "+", "g"),
            at = new RegExp("^" + it + "+|((?:^|[^\\\\])(?:\\\\.)*)" + it + "+$", "g"),
            lt = new RegExp("^" + it + "*," + it + "*"),
            ht = new RegExp("^" + it + "*([>+~]|" + it + ")" + it + "*"),
            ct = new RegExp("=" + it + "*([^\\]'\"]*?)" + it + "*\\]", "g"),
            ut = new RegExp(ot),
            dt = new RegExp("^" + nt + "$"),
            pt = { ID: new RegExp("^#(" + nt + ")"), CLASS: new RegExp("^\\.(" + nt + ")"), TAG: new RegExp("^(" + nt + "|[*])"), ATTR: new RegExp("^" + st), PSEUDO: new RegExp("^" + ot), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + it + "*(even|odd|(([+-]|)(\\d*)n|)" + it + "*(?:([+-]|)" + it + "*(\\d+)|))" + it + "*\\)|)", "i"), bool: new RegExp("^(?:" + et + ")$", "i"), needsContext: new RegExp("^" + it + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + it + "*((?:-\\d)?\\d*)" + it + "*\\)|)(?=[^-]|$)", "i") },
            ft = /^(?:input|select|textarea|button)$/i,
            mt = /^h\d$/i,
            gt = /^[^{]+\{\s*\[native \w/,
            vt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            _t = /[+~]/,
            yt = new RegExp("\\\\([\\da-f]{1,6}" + it + "?|(" + it + ")|.)", "ig"),
            bt = function(t, e, i) { var n = "0x" + e - 65536; return n != n || i ? e : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320) },
            wt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            xt = function(t, e) { return e ? "\0" === t ? "\ufffd" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t },
            Tt = function() { O() },
            kt = f(function(t) { return !0 === t.disabled && ("form" in t || "label" in t) }, { dir: "parentNode", next: "legend" });
        try { Z.apply(K = J.call(W.childNodes), W.childNodes), K[W.childNodes.length].nodeType } catch (t) {
            Z = {
                apply: K.length ? function(t, e) { Q.apply(t, J.call(e)) } : function(t, e) {
                    for (var i = t.length, n = 0; t[i++] = e[n++];);
                    t.length = i - 1
                }
            }
        }
        for (w in x = e.support = {}, C = e.isXML = function(t) { var e = t && (t.ownerDocument || t).documentElement; return !!e && "HTML" !== e.nodeName }, O = e.setDocument = function(t) {
                var e, i, n = t ? t.ownerDocument || t : W;
                return n !== E && 9 === n.nodeType && n.documentElement ? ($ = (E = n).documentElement, N = !C(E), W !== E && (i = E.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", Tt, !1) : i.attachEvent && i.attachEvent("onunload", Tt)), x.attributes = s(function(t) { return t.className = "i", !t.getAttribute("className") }), x.getElementsByTagName = s(function(t) { return t.appendChild(E.createComment("")), !t.getElementsByTagName("*").length }), x.getElementsByClassName = gt.test(E.getElementsByClassName), x.getById = s(function(t) { return $.appendChild(t).id = F, !E.getElementsByName || !E.getElementsByName(F).length }), x.getById ? (T.filter.ID = function(t) { var e = t.replace(yt, bt); return function(t) { return t.getAttribute("id") === e } }, T.find.ID = function(t, e) { if ("undefined" != typeof e.getElementById && N) { var i = e.getElementById(t); return i ? [i] : [] } }) : (T.filter.ID = function(t) { var e = t.replace(yt, bt); return function(t) { var i = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id"); return i && i.value === e } }, T.find.ID = function(t, e) {
                    if ("undefined" != typeof e.getElementById && N) {
                        var i, n, s, o = e.getElementById(t);
                        if (o) {
                            if ((i = o.getAttributeNode("id")) && i.value === t) return [o];
                            for (s = e.getElementsByName(t), n = 0; o = s[n++];)
                                if ((i = o.getAttributeNode("id")) && i.value === t) return [o]
                        }
                        return []
                    }
                }), T.find.TAG = x.getElementsByTagName ? function(t, e) { return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : x.qsa ? e.querySelectorAll(t) : void 0 } : function(t, e) {
                    var i, n = [],
                        s = 0,
                        o = e.getElementsByTagName(t);
                    if ("*" === t) { for (; i = o[s++];) 1 === i.nodeType && n.push(i); return n }
                    return o
                }, T.find.CLASS = x.getElementsByClassName && function(t, e) { if ("undefined" != typeof e.getElementsByClassName && N) return e.getElementsByClassName(t) }, H = [], z = [], (x.qsa = gt.test(E.querySelectorAll)) && (s(function(t) { $.appendChild(t).innerHTML = "<a id='" + F + "'></a><select id='" + F + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && z.push("[*^$]=" + it + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || z.push("\\[" + it + "*(?:value|" + et + ")"), t.querySelectorAll("[id~=" + F + "-]").length || z.push("~="), t.querySelectorAll(":checked").length || z.push(":checked"), t.querySelectorAll("a#" + F + "+*").length || z.push(".#.+[+~]") }), s(function(t) {
                    t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var e = E.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && z.push("name" + it + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && z.push(":enabled", ":disabled"), $.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && z.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), z.push(",.*:")
                })), (x.matchesSelector = gt.test(L = $.matches || $.webkitMatchesSelector || $.mozMatchesSelector || $.oMatchesSelector || $.msMatchesSelector)) && s(function(t) { x.disconnectedMatch = L.call(t, "*"), L.call(t, "[s!='']:x"), H.push("!=", ot) }), z = z.length && new RegExp(z.join("|")), H = H.length && new RegExp(H.join("|")), e = gt.test($.compareDocumentPosition), R = e || gt.test($.contains) ? function(t, e) {
                    var i = 9 === t.nodeType ? t.documentElement : t,
                        n = e && e.parentNode;
                    return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
                } : function(t, e) {
                    if (e)
                        for (; e = e.parentNode;)
                            if (e === t) return !0;
                    return !1
                }, U = e ? function(t, e) { if (t === e) return I = !0, 0; var i = !t.compareDocumentPosition - !e.compareDocumentPosition; return i || (1 & (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !x.sortDetached && e.compareDocumentPosition(t) === i ? t === E || t.ownerDocument === W && R(W, t) ? -1 : e === E || e.ownerDocument === W && R(W, e) ? 1 : M ? tt(M, t) - tt(M, e) : 0 : 4 & i ? -1 : 1) } : function(t, e) {
                    if (t === e) return I = !0, 0;
                    var i, n = 0,
                        s = t.parentNode,
                        o = e.parentNode,
                        a = [t],
                        l = [e];
                    if (!s || !o) return t === E ? -1 : e === E ? 1 : s ? -1 : o ? 1 : M ? tt(M, t) - tt(M, e) : 0;
                    if (s === o) return r(t, e);
                    for (i = t; i = i.parentNode;) a.unshift(i);
                    for (i = e; i = i.parentNode;) l.unshift(i);
                    for (; a[n] === l[n];) n++;
                    return n ? r(a[n], l[n]) : a[n] === W ? -1 : l[n] === W ? 1 : 0
                }, E) : E
            }, e.matches = function(t, i) { return e(t, null, null, i) }, e.matchesSelector = function(t, i) {
                if ((t.ownerDocument || t) !== E && O(t), i = i.replace(ct, "='$1']"), x.matchesSelector && N && !X[i + " "] && (!H || !H.test(i)) && (!z || !z.test(i))) try { var n = L.call(t, i); if (n || x.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n } catch (t) {}
                return e(i, E, null, [t]).length > 0
            }, e.contains = function(t, e) { return (t.ownerDocument || t) !== E && O(t), R(t, e) }, e.attr = function(t, e) {
                (t.ownerDocument || t) !== E && O(t);
                var i = T.attrHandle[e.toLowerCase()],
                    n = i && V.call(T.attrHandle, e.toLowerCase()) ? i(t, e, !N) : void 0;
                return void 0 !== n ? n : x.attributes || !N ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
            }, e.escape = function(t) { return (t + "").replace(wt, xt) }, e.error = function(t) { throw new Error("Syntax error, unrecognized expression: " + t) }, e.uniqueSort = function(t) {
                var e, i = [],
                    n = 0,
                    s = 0;
                if (I = !x.detectDuplicates, M = !x.sortStable && t.slice(0), t.sort(U), I) { for (; e = t[s++];) e === t[s] && (n = i.push(s)); for (; n--;) t.splice(i[n], 1) }
                return M = null, t
            }, k = e.getText = function(t) {
                var e, i = "",
                    n = 0,
                    s = t.nodeType;
                if (s) { if (1 === s || 9 === s || 11 === s) { if ("string" == typeof t.textContent) return t.textContent; for (t = t.firstChild; t; t = t.nextSibling) i += k(t) } else if (3 === s || 4 === s) return t.nodeValue } else
                    for (; e = t[n++];) i += k(e);
                return i
            }, (T = e.selectors = {
                cacheLength: 50,
                createPseudo: n,
                match: pt,
                attrHandle: {},
                find: {},
                relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                preFilter: {
                    ATTR: function(t) { return t[1] = t[1].replace(yt, bt), t[3] = (t[3] || t[4] || t[5] || "").replace(yt, bt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4) },
                    CHILD: function(t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                    },
                    PSEUDO: function(t) { var e, i = !t[6] && t[2]; return pt.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && ut.test(i) && (e = S(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3)) }
                },
                filter: {
                    TAG: function(t) { var e = t.replace(yt, bt).toLowerCase(); return "*" === t ? function() { return !0 } : function(t) { return t.nodeName && t.nodeName.toLowerCase() === e } },
                    CLASS: function(t) { var e = q[t + " "]; return e || (e = new RegExp("(^|" + it + ")" + t + "(" + it + "|$)")) && q(t, function(t) { return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "") }) },
                    ATTR: function(t, i, n) { return function(s) { var o = e.attr(s, t); return null == o ? "!=" === i : !i || (o += "", "=" === i ? o === n : "!=" === i ? o !== n : "^=" === i ? n && 0 === o.indexOf(n) : "*=" === i ? n && o.indexOf(n) > -1 : "$=" === i ? n && o.slice(-n.length) === n : "~=" === i ? (" " + o.replace(rt, " ") + " ").indexOf(n) > -1 : "|=" === i && (o === n || o.slice(0, n.length + 1) === n + "-")) } },
                    CHILD: function(t, e, i, n, s) {
                        var o = "nth" !== t.slice(0, 3),
                            r = "last" !== t.slice(-4),
                            a = "of-type" === e;
                        return 1 === n && 0 === s ? function(t) { return !!t.parentNode } : function(e, i, l) {
                            var h, c, u, d, p, f, m = o !== r ? "nextSibling" : "previousSibling",
                                g = e.parentNode,
                                v = a && e.nodeName.toLowerCase(),
                                _ = !l && !a,
                                y = !1;
                            if (g) {
                                if (o) {
                                    for (; m;) {
                                        for (d = e; d = d[m];)
                                            if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                        f = m = "only" === t && !f && "nextSibling"
                                    }
                                    return !0
                                }
                                if (f = [r ? g.firstChild : g.lastChild], r && _) {
                                    for (y = (p = (h = (c = (u = (d = g)[F] || (d[F] = {}))[d.uniqueID] || (u[d.uniqueID] = {}))[t] || [])[0] === j && h[1]) && h[2], d = p && g.childNodes[p]; d = ++p && d && d[m] || (y = p = 0) || f.pop();)
                                        if (1 === d.nodeType && ++y && d === e) { c[t] = [j, p, y]; break }
                                } else if (_ && (y = p = (h = (c = (u = (d = e)[F] || (d[F] = {}))[d.uniqueID] || (u[d.uniqueID] = {}))[t] || [])[0] === j && h[1]), !1 === y)
                                    for (;
                                        (d = ++p && d && d[m] || (y = p = 0) || f.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++y || (_ && ((c = (u = d[F] || (d[F] = {}))[d.uniqueID] || (u[d.uniqueID] = {}))[t] = [j, y]), d !== e)););
                                return (y -= s) === n || y % n == 0 && y / n >= 0
                            }
                        }
                    },
                    PSEUDO: function(t, i) { var s, o = T.pseudos[t] || T.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t); return o[F] ? o(i) : o.length > 1 ? (s = [t, t, "", i], T.setFilters.hasOwnProperty(t.toLowerCase()) ? n(function(t, e) { for (var n, s = o(t, i), r = s.length; r--;) t[n = tt(t, s[r])] = !(e[n] = s[r]) }) : function(t) { return o(t, 0, s) }) : o }
                },
                pseudos: {
                    not: n(function(t) {
                        var e = [],
                            i = [],
                            s = P(t.replace(at, "$1"));
                        return s[F] ? n(function(t, e, i, n) { for (var o, r = s(t, null, n, []), a = t.length; a--;)(o = r[a]) && (t[a] = !(e[a] = o)) }) : function(t, n, o) { return e[0] = t, s(e, null, o, i), e[0] = null, !i.pop() }
                    }),
                    has: n(function(t) { return function(i) { return e(t, i).length > 0 } }),
                    contains: n(function(t) {
                        return t = t.replace(yt, bt),
                            function(e) { return (e.textContent || e.innerText || k(e)).indexOf(t) > -1 }
                    }),
                    lang: n(function(t) {
                        return dt.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(yt, bt).toLowerCase(),
                            function(e) {
                                var i;
                                do { if (i = N ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (i = i.toLowerCase()) === t || 0 === i.indexOf(t + "-") } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) { var i = t.location && t.location.hash; return i && i.slice(1) === e.id },
                    root: function(t) { return t === $ },
                    focus: function(t) { return t === E.activeElement && (!E.hasFocus || E.hasFocus()) && !!(t.type || t.href || ~t.tabIndex) },
                    enabled: h(!1),
                    disabled: h(!0),
                    checked: function(t) { var e = t.nodeName.toLowerCase(); return "input" === e && !!t.checked || "option" === e && !!t.selected },
                    selected: function(t) { return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected },
                    empty: function(t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(t) { return !T.pseudos.empty(t) },
                    header: function(t) { return mt.test(t.nodeName) },
                    input: function(t) { return ft.test(t.nodeName) },
                    button: function(t) { var e = t.nodeName.toLowerCase(); return "input" === e && "button" === t.type || "button" === e },
                    text: function(t) { var e; return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase()) },
                    first: c(function() { return [0] }),
                    last: c(function(t, e) { return [e - 1] }),
                    eq: c(function(t, e, i) { return [i < 0 ? i + e : i] }),
                    even: c(function(t, e) { for (var i = 0; i < e; i += 2) t.push(i); return t }),
                    odd: c(function(t, e) { for (var i = 1; i < e; i += 2) t.push(i); return t }),
                    lt: c(function(t, e, i) { for (var n = i < 0 ? i + e : i; --n >= 0;) t.push(n); return t }),
                    gt: c(function(t, e, i) { for (var n = i < 0 ? i + e : i; ++n < e;) t.push(n); return t })
                }
            }).pseudos.nth = T.pseudos.eq, { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) T.pseudos[w] = a(w);
        for (w in { submit: !0, reset: !0 }) T.pseudos[w] = l(w);
        return d.prototype = T.filters = T.pseudos, T.setFilters = new d, S = e.tokenize = function(t, i) { var n, s, o, r, a, l, h, c = Y[t + " "]; if (c) return i ? 0 : c.slice(0); for (a = t, l = [], h = T.preFilter; a;) { for (r in n && !(s = lt.exec(a)) || (s && (a = a.slice(s[0].length) || a), l.push(o = [])), n = !1, (s = ht.exec(a)) && (n = s.shift(), o.push({ value: n, type: s[0].replace(at, " ") }), a = a.slice(n.length)), T.filter) !(s = pt[r].exec(a)) || h[r] && !(s = h[r](s)) || (n = s.shift(), o.push({ value: n, type: r, matches: s }), a = a.slice(n.length)); if (!n) break } return i ? a.length : a ? e.error(t) : Y(t, l).slice(0) }, P = e.compile = function(t, e) {
            var i, n = [],
                s = [],
                o = X[t + " "];
            if (!o) {
                for (e || (e = S(t)), i = e.length; i--;)(o = y(e[i]))[F] ? n.push(o) : s.push(o);
                (o = X(t, b(s, n))).selector = t
            }
            return o
        }, D = e.select = function(t, e, i, n) {
            var s, o, r, a, l, h = "function" == typeof t && t,
                c = !n && S(t = h.selector || t);
            if (i = i || [], 1 === c.length) {
                if ((o = c[0] = c[0].slice(0)).length > 2 && "ID" === (r = o[0]).type && 9 === e.nodeType && N && T.relative[o[1].type]) {
                    if (!(e = (T.find.ID(r.matches[0].replace(yt, bt), e) || [])[0])) return i;
                    h && (e = e.parentNode), t = t.slice(o.shift().value.length)
                }
                for (s = pt.needsContext.test(t) ? 0 : o.length; s-- && (r = o[s], !T.relative[a = r.type]);)
                    if ((l = T.find[a]) && (n = l(r.matches[0].replace(yt, bt), _t.test(o[0].type) && u(e.parentNode) || e))) { if (o.splice(s, 1), !(t = n.length && p(o))) return Z.apply(i, n), i; break }
            }
            return (h || P(t, c))(n, e, !N, i, !e || _t.test(t) && u(e.parentNode) || e), i
        }, x.sortStable = F.split("").sort(U).join("") === F, x.detectDuplicates = !!I, O(), x.sortDetached = s(function(t) { return 1 & t.compareDocumentPosition(E.createElement("fieldset")) }), s(function(t) { return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href") }) || o("type|href|height|width", function(t, e, i) { if (!i) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2) }), x.attributes && s(function(t) { return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value") }) || o("value", function(t, e, i) { if (!i && "input" === t.nodeName.toLowerCase()) return t.defaultValue }), s(function(t) { return null == t.getAttribute("disabled") }) || o(et, function(t, e, i) { var n; if (!i) return !0 === t[e] ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null }), e
    }(t);
    wt.find = Tt, wt.expr = Tt.selectors, wt.expr[":"] = wt.expr.pseudos, wt.uniqueSort = wt.unique = Tt.uniqueSort, wt.text = Tt.getText, wt.isXMLDoc = Tt.isXML, wt.contains = Tt.contains, wt.escapeSelector = Tt.escape;
    var kt = function(t, e, i) {
            for (var n = [], s = void 0 !== i;
                (t = t[e]) && 9 !== t.nodeType;)
                if (1 === t.nodeType) {
                    if (s && wt(t).is(i)) break;
                    n.push(t)
                }
            return n
        },
        Ct = function(t, e) { for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t); return i },
        St = wt.expr.match.needsContext,
        Pt = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    wt.filter = function(t, e, i) { var n = e[0]; return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? wt.find.matchesSelector(n, t) ? [n] : [] : wt.find.matches(t, wt.grep(e, function(t) { return 1 === t.nodeType })) }, wt.fn.extend({
        find: function(t) {
            var e, i, n = this.length,
                s = this;
            if ("string" != typeof t) return this.pushStack(wt(t).filter(function() {
                for (e = 0; e < n; e++)
                    if (wt.contains(s[e], this)) return !0
            }));
            for (i = this.pushStack([]), e = 0; e < n; e++) wt.find(t, s[e], i);
            return n > 1 ? wt.uniqueSort(i) : i
        },
        filter: function(t) { return this.pushStack(r(this, t || [], !1)) },
        not: function(t) { return this.pushStack(r(this, t || [], !0)) },
        is: function(t) { return !!r(this, "string" == typeof t && St.test(t) ? wt(t) : t || [], !1).length }
    });
    var Dt, At = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (wt.fn.init = function(t, e, i) {
        var n, s;
        if (!t) return this;
        if (i = i || Dt, "string" == typeof t) {
            if (!(n = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : At.exec(t)) || !n[1] && e) return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
            if (n[1]) {
                if (e = e instanceof wt ? e[0] : e, wt.merge(this, wt.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : rt, !0)), Pt.test(n[1]) && wt.isPlainObject(e))
                    for (n in e) _t(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                return this
            }
            return (s = rt.getElementById(n[2])) && (this[0] = s, this.length = 1), this
        }
        return t.nodeType ? (this[0] = t, this.length = 1, this) : _t(t) ? void 0 !== i.ready ? i.ready(t) : t(wt) : wt.makeArray(t, this)
    }).prototype = wt.fn, Dt = wt(rt);
    var Mt = /^(?:parents|prev(?:Until|All))/,
        It = { children: !0, contents: !0, next: !0, prev: !0 };
    wt.fn.extend({
        has: function(t) {
            var e = wt(t, this),
                i = e.length;
            return this.filter(function() {
                for (var t = 0; t < i; t++)
                    if (wt.contains(this, e[t])) return !0
            })
        },
        closest: function(t, e) {
            var i, n = 0,
                s = this.length,
                o = [],
                r = "string" != typeof t && wt(t);
            if (!St.test(t))
                for (; n < s; n++)
                    for (i = this[n]; i && i !== e; i = i.parentNode)
                        if (i.nodeType < 11 && (r ? r.index(i) > -1 : 1 === i.nodeType && wt.find.matchesSelector(i, t))) { o.push(i); break }
            return this.pushStack(o.length > 1 ? wt.uniqueSort(o) : o)
        },
        index: function(t) { return t ? "string" == typeof t ? ut.call(wt(t), this[0]) : ut.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 },
        add: function(t, e) { return this.pushStack(wt.uniqueSort(wt.merge(this.get(), wt(t, e)))) },
        addBack: function(t) { return this.add(null == t ? this.prevObject : this.prevObject.filter(t)) }
    }), wt.each({ parent: function(t) { var e = t.parentNode; return e && 11 !== e.nodeType ? e : null }, parents: function(t) { return kt(t, "parentNode") }, parentsUntil: function(t, e, i) { return kt(t, "parentNode", i) }, next: function(t) { return a(t, "nextSibling") }, prev: function(t) { return a(t, "previousSibling") }, nextAll: function(t) { return kt(t, "nextSibling") }, prevAll: function(t) { return kt(t, "previousSibling") }, nextUntil: function(t, e, i) { return kt(t, "nextSibling", i) }, prevUntil: function(t, e, i) { return kt(t, "previousSibling", i) }, siblings: function(t) { return Ct((t.parentNode || {}).firstChild, t) }, children: function(t) { return Ct(t.firstChild) }, contents: function(t) { return o(t, "iframe") ? t.contentDocument : (o(t, "template") && (t = t.content || t), wt.merge([], t.childNodes)) } }, function(t, e) { wt.fn[t] = function(i, n) { var s = wt.map(this, e, i); return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (s = wt.filter(n, s)), this.length > 1 && (It[t] || wt.uniqueSort(s), Mt.test(t) && s.reverse()), this.pushStack(s) } });
    var Ot = /[^\x20\t\r\n\f]+/g;
    wt.Callbacks = function(t) {
        t = "string" == typeof t ? l(t) : wt.extend({}, t);
        var e, i, s, o, r = [],
            a = [],
            h = -1,
            c = function() {
                for (o = o || t.once, s = e = !0; a.length; h = -1)
                    for (i = a.shift(); ++h < r.length;) !1 === r[h].apply(i[0], i[1]) && t.stopOnFalse && (h = r.length, i = !1);
                t.memory || (i = !1), e = !1, o && (r = i ? [] : "")
            },
            u = {
                add: function() { return r && (i && !e && (h = r.length - 1, a.push(i)), function s(e) { wt.each(e, function(e, i) { _t(i) ? t.unique && u.has(i) || r.push(i) : i && i.length && "string" !== n(i) && s(i) }) }(arguments), i && !e && c()), this },
                remove: function() {
                    return wt.each(arguments, function(t, e) {
                        for (var i;
                            (i = wt.inArray(e, r, i)) > -1;) r.splice(i, 1), i <= h && h--
                    }), this
                },
                has: function(t) { return t ? wt.inArray(t, r) > -1 : r.length > 0 },
                empty: function() { return r && (r = []), this },
                disable: function() { return o = a = [], r = i = "", this },
                disabled: function() { return !r },
                lock: function() { return o = a = [], i || e || (r = i = ""), this },
                locked: function() { return !!o },
                fireWith: function(t, i) { return o || (i = [t, (i = i || []).slice ? i.slice() : i], a.push(i), e || c()), this },
                fire: function() { return u.fireWith(this, arguments), this },
                fired: function() { return !!s }
            };
        return u
    }, wt.extend({
        Deferred: function(e) {
            var i = [
                    ["notify", "progress", wt.Callbacks("memory"), wt.Callbacks("memory"), 2],
                    ["resolve", "done", wt.Callbacks("once memory"), wt.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", wt.Callbacks("once memory"), wt.Callbacks("once memory"), 1, "rejected"]
                ],
                n = "pending",
                s = {
                    state: function() { return n },
                    always: function() { return o.done(arguments).fail(arguments), this },
                    "catch": function(t) { return s.then(null, t) },
                    pipe: function() {
                        var t = arguments;
                        return wt.Deferred(function(e) {
                            wt.each(i, function(i, n) {
                                var s = _t(t[n[4]]) && t[n[4]];
                                o[n[1]](function() {
                                    var t = s && s.apply(this, arguments);
                                    t && _t(t.promise) ? t.promise().progress(e.notify).done(e.resolve).fail(e.reject) : e[n[0] + "With"](this, s ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    },
                    then: function(e, n, s) {
                        function o(e, i, n, s) {
                            return function() {
                                var a = this,
                                    l = arguments,
                                    u = function() {
                                        var t, u;
                                        if (!(e < r)) {
                                            if ((t = n.apply(a, l)) === i.promise()) throw new TypeError("Thenable self-resolution");
                                            u = t && ("object" == typeof t || "function" == typeof t) && t.then, _t(u) ? s ? u.call(t, o(r, i, h, s), o(r, i, c, s)) : (r++, u.call(t, o(r, i, h, s), o(r, i, c, s), o(r, i, h, i.notifyWith))) : (n !== h && (a = void 0, l = [t]), (s || i.resolveWith)(a, l))
                                        }
                                    },
                                    d = s ? u : function() { try { u() } catch (t) { wt.Deferred.exceptionHook && wt.Deferred.exceptionHook(t, d.stackTrace), e + 1 >= r && (n !== c && (a = void 0, l = [t]), i.rejectWith(a, l)) } };
                                e ? d() : (wt.Deferred.getStackHook && (d.stackTrace = wt.Deferred.getStackHook()), t.setTimeout(d))
                            }
                        }
                        var r = 0;
                        return wt.Deferred(function(t) { i[0][3].add(o(0, t, _t(s) ? s : h, t.notifyWith)), i[1][3].add(o(0, t, _t(e) ? e : h)), i[2][3].add(o(0, t, _t(n) ? n : c)) }).promise()
                    },
                    promise: function(t) { return null != t ? wt.extend(t, s) : s }
                },
                o = {};
            return wt.each(i, function(t, e) {
                var r = e[2],
                    a = e[5];
                s[e[1]] = r.add, a && r.add(function() { n = a }, i[3 - t][2].disable, i[3 - t][3].disable, i[0][2].lock, i[0][3].lock), r.add(e[3].fire), o[e[0]] = function() { return o[e[0] + "With"](this === o ? void 0 : this, arguments), this }, o[e[0] + "With"] = r.fireWith
            }), s.promise(o), e && e.call(o, o), o
        },
        when: function(t) {
            var e = arguments.length,
                i = e,
                n = Array(i),
                s = lt.call(arguments),
                o = wt.Deferred(),
                r = function(t) { return function(i) { n[t] = this, s[t] = arguments.length > 1 ? lt.call(arguments) : i, --e || o.resolveWith(n, s) } };
            if (e <= 1 && (u(t, o.done(r(i)).resolve, o.reject, !e), "pending" === o.state() || _t(s[i] && s[i].then))) return o.then();
            for (; i--;) u(s[i], r(i), o.reject);
            return o.promise()
        }
    });
    var Et = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    wt.Deferred.exceptionHook = function(e, i) { t.console && t.console.warn && e && Et.test(e.name) && t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, i) }, wt.readyException = function(e) { t.setTimeout(function() { throw e }) };
    var $t = wt.Deferred();
    wt.fn.ready = function(t) { return $t.then(t)["catch"](function(t) { wt.readyException(t) }), this }, wt.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(t) {
            (!0 === t ? --wt.readyWait : wt.isReady) || (wt.isReady = !0, !0 !== t && --wt.readyWait > 0 || $t.resolveWith(rt, [wt]))
        }
    }), wt.ready.then = $t.then, "complete" === rt.readyState || "loading" !== rt.readyState && !rt.documentElement.doScroll ? t.setTimeout(wt.ready) : (rt.addEventListener("DOMContentLoaded", d), t.addEventListener("load", d));
    var Nt = function(t, e, i, s, o, r, a) {
            var l = 0,
                h = t.length,
                c = null == i;
            if ("object" === n(i))
                for (l in o = !0, i) Nt(t, e, l, i[l], !0, r, a);
            else if (void 0 !== s && (o = !0, _t(s) || (a = !0), c && (a ? (e.call(t, s), e = null) : (c = e, e = function(t, e, i) { return c.call(wt(t), i) })), e))
                for (; l < h; l++) e(t[l], i, a ? s : s.call(t[l], l, e(t[l], i)));
            return o ? t : c ? e.call(t) : h ? e(t[0], i) : r
        },
        zt = /^-ms-/,
        Ht = /-([a-z])/g,
        Lt = function(t) { return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType };
    m.uid = 1, m.prototype = {
        cache: function(t) { var e = t[this.expando]; return e || (e = {}, Lt(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, { value: e, configurable: !0 }))), e },
        set: function(t, e, i) {
            var n, s = this.cache(t);
            if ("string" == typeof e) s[f(e)] = i;
            else
                for (n in e) s[f(n)] = e[n];
            return s
        },
        get: function(t, e) { return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][f(e)] },
        access: function(t, e, i) { return void 0 === e || e && "string" == typeof e && void 0 === i ? this.get(t, e) : (this.set(t, e, i), void 0 !== i ? i : e) },
        remove: function(t, e) { var i, n = t[this.expando]; if (void 0 !== n) { if (void 0 !== e) { i = (e = Array.isArray(e) ? e.map(f) : (e = f(e)) in n ? [e] : e.match(Ot) || []).length; for (; i--;) delete n[e[i]] }(void 0 === e || wt.isEmptyObject(n)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando]) } },
        hasData: function(t) { var e = t[this.expando]; return void 0 !== e && !wt.isEmptyObject(e) }
    };
    var Rt = new m,
        Ft = new m,
        Wt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        jt = /[A-Z]/g;
    wt.extend({ hasData: function(t) { return Ft.hasData(t) || Rt.hasData(t) }, data: function(t, e, i) { return Ft.access(t, e, i) }, removeData: function(t, e) { Ft.remove(t, e) }, _data: function(t, e, i) { return Rt.access(t, e, i) }, _removeData: function(t, e) { Rt.remove(t, e) } }), wt.fn.extend({
        data: function(t, e) {
            var i, n, s, o = this[0],
                r = o && o.attributes;
            if (void 0 === t) {
                if (this.length && (s = Ft.get(o), 1 === o.nodeType && !Rt.get(o, "hasDataAttrs"))) {
                    for (i = r.length; i--;) r[i] && 0 === (n = r[i].name).indexOf("data-") && (n = f(n.slice(5)), v(o, n, s[n]));
                    Rt.set(o, "hasDataAttrs", !0)
                }
                return s
            }
            return "object" == typeof t ? this.each(function() { Ft.set(this, t) }) : Nt(this, function(e) { var i; if (o && void 0 === e) { if (void 0 !== (i = Ft.get(o, t))) return i; if (void 0 !== (i = v(o, t))) return i } else this.each(function() { Ft.set(this, t, e) }) }, null, e, arguments.length > 1, null, !0)
        },
        removeData: function(t) { return this.each(function() { Ft.remove(this, t) }) }
    }), wt.extend({
        queue: function(t, e, i) { var n; if (t) return e = (e || "fx") + "queue", n = Rt.get(t, e), i && (!n || Array.isArray(i) ? n = Rt.access(t, e, wt.makeArray(i)) : n.push(i)), n || [] },
        dequeue: function(t, e) {
            e = e || "fx";
            var i = wt.queue(t, e),
                n = i.length,
                s = i.shift(),
                o = wt._queueHooks(t, e),
                r = function() { wt.dequeue(t, e) };
            "inprogress" === s && (s = i.shift(), n--), s && ("fx" === e && i.unshift("inprogress"), delete o.stop, s.call(t, r, o)), !n && o && o.empty.fire()
        },
        _queueHooks: function(t, e) { var i = e + "queueHooks"; return Rt.get(t, i) || Rt.access(t, i, { empty: wt.Callbacks("once memory").add(function() { Rt.remove(t, [e + "queue", i]) }) }) }
    }), wt.fn.extend({
        queue: function(t, e) {
            var i = 2;
            return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? wt.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                var i = wt.queue(this, t, e);
                wt._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && wt.dequeue(this, t)
            })
        },
        dequeue: function(t) { return this.each(function() { wt.dequeue(this, t) }) },
        clearQueue: function(t) { return this.queue(t || "fx", []) },
        promise: function(t, e) {
            var i, n = 1,
                s = wt.Deferred(),
                o = this,
                r = this.length,
                a = function() {--n || s.resolveWith(o, [o]) };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; r--;)(i = Rt.get(o[r], t + "queueHooks")) && i.empty && (n++, i.empty.add(a));
            return a(), s.promise(e)
        }
    });
    var Bt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        qt = new RegExp("^(?:([+-])=|)(" + Bt + ")([a-z%]*)$", "i"),
        Yt = ["Top", "Right", "Bottom", "Left"],
        Xt = function(t, e) { return "none" === (t = e || t).style.display || "" === t.style.display && wt.contains(t.ownerDocument, t) && "none" === wt.css(t, "display") },
        Ut = function(t, e, i, n) { var s, o, r = {}; for (o in e) r[o] = t.style[o], t.style[o] = e[o]; for (o in s = i.apply(t, n || []), e) t.style[o] = r[o]; return s },
        Vt = {};
    wt.fn.extend({ show: function() { return b(this, !0) }, hide: function() { return b(this) }, toggle: function(t) { return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() { Xt(this) ? wt(this).show() : wt(this).hide() }) } });
    var Kt = /^(?:checkbox|radio)$/i,
        Gt = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        Qt = /^$|^module$|\/(?:java|ecma)script/i,
        Zt = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
    Zt.optgroup = Zt.option, Zt.tbody = Zt.tfoot = Zt.colgroup = Zt.caption = Zt.thead, Zt.th = Zt.td;
    var Jt = /<|&#?\w+;/;
    ! function() {
        var t = rt.createDocumentFragment().appendChild(rt.createElement("div")),
            e = rt.createElement("input");
        e.setAttribute("type", "radio"), e.setAttribute("checked", "checked"), e.setAttribute("name", "t"), t.appendChild(e), vt.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", vt.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var te = rt.documentElement,
        ee = /^key/,
        ie = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        ne = /^([^.]*)(?:\.(.+)|)/;
    wt.event = {
        global: {},
        add: function(t, e, i, n, s) {
            var o, r, a, l, h, c, u, d, p, f, m, g = Rt.get(t);
            if (g)
                for (i.handler && (i = (o = i).handler, s = o.selector), s && wt.find.matchesSelector(te, s), i.guid || (i.guid = wt.guid++), (l = g.events) || (l = g.events = {}), (r = g.handle) || (r = g.handle = function(e) { return void 0 !== wt && wt.event.triggered !== e.type ? wt.event.dispatch.apply(t, arguments) : void 0 }), h = (e = (e || "").match(Ot) || [""]).length; h--;) p = m = (a = ne.exec(e[h]) || [])[1], f = (a[2] || "").split(".").sort(), p && (u = wt.event.special[p] || {}, p = (s ? u.delegateType : u.bindType) || p, u = wt.event.special[p] || {}, c = wt.extend({ type: p, origType: m, data: n, handler: i, guid: i.guid, selector: s, needsContext: s && wt.expr.match.needsContext.test(s), namespace: f.join(".") }, o), (d = l[p]) || ((d = l[p] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(t, n, f, r) || t.addEventListener && t.addEventListener(p, r)), u.add && (u.add.call(t, c), c.handler.guid || (c.handler.guid = i.guid)), s ? d.splice(d.delegateCount++, 0, c) : d.push(c), wt.event.global[p] = !0)
        },
        remove: function(t, e, i, n, s) {
            var o, r, a, l, h, c, u, d, p, f, m, g = Rt.hasData(t) && Rt.get(t);
            if (g && (l = g.events)) {
                for (h = (e = (e || "").match(Ot) || [""]).length; h--;)
                    if (p = m = (a = ne.exec(e[h]) || [])[1], f = (a[2] || "").split(".").sort(), p) {
                        for (u = wt.event.special[p] || {}, d = l[p = (n ? u.delegateType : u.bindType) || p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), r = o = d.length; o--;) c = d[o], !s && m !== c.origType || i && i.guid !== c.guid || a && !a.test(c.namespace) || n && n !== c.selector && ("**" !== n || !c.selector) || (d.splice(o, 1), c.selector && d.delegateCount--, u.remove && u.remove.call(t, c));
                        r && !d.length && (u.teardown && !1 !== u.teardown.call(t, f, g.handle) || wt.removeEvent(t, p, g.handle), delete l[p])
                    } else
                        for (p in l) wt.event.remove(t, p + e[h], i, n, !0);
                wt.isEmptyObject(l) && Rt.remove(t, "handle events")
            }
        },
        dispatch: function(t) {
            var e, i, n, s, o, r, a = wt.event.fix(t),
                l = new Array(arguments.length),
                h = (Rt.get(this, "events") || {})[a.type] || [],
                c = wt.event.special[a.type] || {};
            for (l[0] = a, e = 1; e < arguments.length; e++) l[e] = arguments[e];
            if (a.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, a)) {
                for (r = wt.event.handlers.call(this, a, h), e = 0;
                    (s = r[e++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = s.elem, i = 0;
                        (o = s.handlers[i++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o, a.data = o.data, void 0 !== (n = ((wt.event.special[o.origType] || {}).handle || o.handler).apply(s.elem, l)) && !1 === (a.result = n) && (a.preventDefault(), a.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(t, e) {
            var i, n, s, o, r, a = [],
                l = e.delegateCount,
                h = t.target;
            if (l && h.nodeType && !("click" === t.type && t.button >= 1))
                for (; h !== this; h = h.parentNode || this)
                    if (1 === h.nodeType && ("click" !== t.type || !0 !== h.disabled)) {
                        for (o = [], r = {}, i = 0; i < l; i++) void 0 === r[s = (n = e[i]).selector + " "] && (r[s] = n.needsContext ? wt(s, this).index(h) > -1 : wt.find(s, this, null, [h]).length), r[s] && o.push(n);
                        o.length && a.push({ elem: h, handlers: o })
                    }
            return h = this, l < e.length && a.push({ elem: h, handlers: e.slice(l) }), a
        },
        addProp: function(t, e) { Object.defineProperty(wt.Event.prototype, t, { enumerable: !0, configurable: !0, get: _t(e) ? function() { if (this.originalEvent) return e(this.originalEvent) } : function() { if (this.originalEvent) return this.originalEvent[t] }, set: function(e) { Object.defineProperty(this, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) } }) },
        fix: function(t) { return t[wt.expando] ? t : new wt.Event(t) },
        special: { load: { noBubble: !0 }, focus: { trigger: function() { if (this !== S() && this.focus) return this.focus(), !1 }, delegateType: "focusin" }, blur: { trigger: function() { if (this === S() && this.blur) return this.blur(), !1 }, delegateType: "focusout" }, click: { trigger: function() { if ("checkbox" === this.type && this.click && o(this, "input")) return this.click(), !1 }, _default: function(t) { return o(t.target, "a") } }, beforeunload: { postDispatch: function(t) { void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result) } } }
    }, wt.removeEvent = function(t, e, i) { t.removeEventListener && t.removeEventListener(e, i) }, wt.Event = function(t, e) {
        if (!(this instanceof wt.Event)) return new wt.Event(t, e);
        t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? k : C, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && wt.extend(this, e), this.timeStamp = t && t.timeStamp || Date.now(), this[wt.expando] = !0
    }, wt.Event.prototype = {
        constructor: wt.Event,
        isDefaultPrevented: C,
        isPropagationStopped: C,
        isImmediatePropagationStopped: C,
        isSimulated: !1,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = k, t && !this.isSimulated && t.preventDefault()
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = k, t && !this.isSimulated && t.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = k, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, wt.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, char: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function(t) { var e = t.button; return null == t.which && ee.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && ie.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which } }, wt.event.addProp), wt.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(t, e) {
        wt.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var i, n = this,
                    s = t.relatedTarget,
                    o = t.handleObj;
                return s && (s === n || wt.contains(n, s)) || (t.type = o.origType, i = o.handler.apply(this, arguments), t.type = e), i
            }
        }
    }), wt.fn.extend({ on: function(t, e, i, n) { return P(this, t, e, i, n) }, one: function(t, e, i, n) { return P(this, t, e, i, n, 1) }, off: function(t, e, i) { var n, s; if (t && t.preventDefault && t.handleObj) return n = t.handleObj, wt(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this; if ("object" == typeof t) { for (s in t) this.off(s, e, t[s]); return this } return !1 !== e && "function" != typeof e || (i = e, e = void 0), !1 === i && (i = C), this.each(function() { wt.event.remove(this, t, i, e) }) } });
    var se = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        oe = /<script|<style|<link/i,
        re = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ae = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    wt.extend({
        htmlPrefilter: function(t) { return t.replace(se, "<$1></$2>") },
        clone: function(t, e, i) {
            var n, s, o, r, a = t.cloneNode(!0),
                l = wt.contains(t.ownerDocument, t);
            if (!(vt.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || wt.isXMLDoc(t)))
                for (r = w(a), n = 0, s = (o = w(t)).length; n < s; n++) O(o[n], r[n]);
            if (e)
                if (i)
                    for (o = o || w(t), r = r || w(a), n = 0, s = o.length; n < s; n++) I(o[n], r[n]);
                else I(t, a);
            return (r = w(a, "script")).length > 0 && x(r, !l && w(t, "script")), a
        },
        cleanData: function(t) {
            for (var e, i, n, s = wt.event.special, o = 0; void 0 !== (i = t[o]); o++)
                if (Lt(i)) {
                    if (e = i[Rt.expando]) {
                        if (e.events)
                            for (n in e.events) s[n] ? wt.event.remove(i, n) : wt.removeEvent(i, n, e.handle);
                        i[Rt.expando] = void 0
                    }
                    i[Ft.expando] && (i[Ft.expando] = void 0)
                }
        }
    }), wt.fn.extend({
        detach: function(t) { return $(this, t, !0) },
        remove: function(t) { return $(this, t) },
        text: function(t) { return Nt(this, function(t) { return void 0 === t ? wt.text(this) : this.empty().each(function() { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t) }) }, null, t, arguments.length) },
        append: function() { return E(this, arguments, function(t) { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || D(this, t).appendChild(t) }) },
        prepend: function() {
            return E(this, arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = D(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() { return E(this, arguments, function(t) { this.parentNode && this.parentNode.insertBefore(t, this) }) },
        after: function() { return E(this, arguments, function(t) { this.parentNode && this.parentNode.insertBefore(t, this.nextSibling) }) },
        empty: function() { for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (wt.cleanData(w(t, !1)), t.textContent = ""); return this },
        clone: function(t, e) { return t = null != t && t, e = null == e ? t : e, this.map(function() { return wt.clone(this, t, e) }) },
        html: function(t) {
            return Nt(this, function(t) {
                var e = this[0] || {},
                    i = 0,
                    n = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if ("string" == typeof t && !oe.test(t) && !Zt[(Gt.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = wt.htmlPrefilter(t);
                    try {
                        for (; i < n; i++) 1 === (e = this[i] || {}).nodeType && (wt.cleanData(w(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (t) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function() {
            var t = [];
            return E(this, arguments, function(e) {
                var i = this.parentNode;
                wt.inArray(this, t) < 0 && (wt.cleanData(w(this)), i && i.replaceChild(e, this))
            }, t)
        }
    }), wt.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(t, e) { wt.fn[t] = function(t) { for (var i, n = [], s = wt(t), o = s.length - 1, r = 0; r <= o; r++) i = r === o ? this : this.clone(!0), wt(s[r])[e](i), ct.apply(n, i.get()); return this.pushStack(n) } });
    var le = new RegExp("^(" + Bt + ")(?!px)[a-z%]+$", "i"),
        he = function(e) { var i = e.ownerDocument.defaultView; return i && i.opener || (i = t), i.getComputedStyle(e) },
        ce = new RegExp(Yt.join("|"), "i");
    ! function() {
        function e() {
            if (h) {
                l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", h.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", te.appendChild(l).appendChild(h);
                var e = t.getComputedStyle(h);
                n = "1%" !== e.top, a = 12 === i(e.marginLeft), h.style.right = "60%", r = 36 === i(e.right), s = 36 === i(e.width), h.style.position = "absolute", o = 36 === h.offsetWidth || "absolute", te.removeChild(l), h = null
            }
        }

        function i(t) { return Math.round(parseFloat(t)) }
        var n, s, o, r, a, l = rt.createElement("div"),
            h = rt.createElement("div");
        h.style && (h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", vt.clearCloneStyle = "content-box" === h.style.backgroundClip, wt.extend(vt, { boxSizingReliable: function() { return e(), s }, pixelBoxStyles: function() { return e(), r }, pixelPosition: function() { return e(), n }, reliableMarginLeft: function() { return e(), a }, scrollboxSize: function() { return e(), o } }))
    }();
    var ue = /^(none|table(?!-c[ea]).+)/,
        de = /^--/,
        pe = { position: "absolute", visibility: "hidden", display: "block" },
        fe = { letterSpacing: "0", fontWeight: "400" },
        me = ["Webkit", "Moz", "ms"],
        ge = rt.createElement("div").style;
    wt.extend({
        cssHooks: { opacity: { get: function(t, e) { if (e) { var i = N(t, "opacity"); return "" === i ? "1" : i } } } },
        cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
        cssProps: {},
        style: function(t, e, i, n) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var s, o, r, a = f(e),
                    l = de.test(e),
                    h = t.style;
                if (l || (e = L(a)), r = wt.cssHooks[e] || wt.cssHooks[a], void 0 === i) return r && "get" in r && void 0 !== (s = r.get(t, !1, n)) ? s : h[e];
                "string" == (o = typeof i) && (s = qt.exec(i)) && s[1] && (i = _(t, e, s), o = "number"), null != i && i == i && ("number" === o && (i += s && s[3] || (wt.cssNumber[a] ? "" : "px")), vt.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (h[e] = "inherit"), r && "set" in r && void 0 === (i = r.set(t, i, n)) || (l ? h.setProperty(e, i) : h[e] = i))
            }
        },
        css: function(t, e, i, n) { var s, o, r, a = f(e); return de.test(e) || (e = L(a)), (r = wt.cssHooks[e] || wt.cssHooks[a]) && "get" in r && (s = r.get(t, !0, i)), void 0 === s && (s = N(t, e, n)), "normal" === s && e in fe && (s = fe[e]), "" === i || i ? (o = parseFloat(s), !0 === i || isFinite(o) ? o || 0 : s) : s }
    }), wt.each(["height", "width"], function(t, e) {
        wt.cssHooks[e] = {
            get: function(t, i, n) { if (i) return !ue.test(wt.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? W(t, e, n) : Ut(t, pe, function() { return W(t, e, n) }) },
            set: function(t, i, n) {
                var s, o = he(t),
                    r = "border-box" === wt.css(t, "boxSizing", !1, o),
                    a = n && F(t, e, n, r, o);
                return r && vt.scrollboxSize() === o.position && (a -= Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - parseFloat(o[e]) - F(t, e, "border", !1, o) - .5)), a && (s = qt.exec(i)) && "px" !== (s[3] || "px") && (t.style[e] = i, i = wt.css(t, e)), R(t, i, a)
            }
        }
    }), wt.cssHooks.marginLeft = z(vt.reliableMarginLeft, function(t, e) { if (e) return (parseFloat(N(t, "marginLeft")) || t.getBoundingClientRect().left - Ut(t, { marginLeft: 0 }, function() { return t.getBoundingClientRect().left })) + "px" }), wt.each({ margin: "", padding: "", border: "Width" }, function(t, e) { wt.cssHooks[t + e] = { expand: function(i) { for (var n = 0, s = {}, o = "string" == typeof i ? i.split(" ") : [i]; n < 4; n++) s[t + Yt[n] + e] = o[n] || o[n - 2] || o[0]; return s } }, "margin" !== t && (wt.cssHooks[t + e].set = R) }), wt.fn.extend({
        css: function(t, e) {
            return Nt(this, function(t, e, i) {
                var n, s, o = {},
                    r = 0;
                if (Array.isArray(e)) { for (n = he(t), s = e.length; r < s; r++) o[e[r]] = wt.css(t, e[r], !1, n); return o }
                return void 0 !== i ? wt.style(t, e, i) : wt.css(t, e)
            }, t, e, arguments.length > 1)
        }
    }), wt.Tween = j, j.prototype = {
        constructor: j,
        init: function(t, e, i, n, s, o) { this.elem = t, this.prop = i, this.easing = s || wt.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = o || (wt.cssNumber[i] ? "" : "px") },
        cur: function() { var t = j.propHooks[this.prop]; return t && t.get ? t.get(this) : j.propHooks._default.get(this) },
        run: function(t) {
            var e, i = j.propHooks[this.prop];
            return this.options.duration ? this.pos = e = wt.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t,
                this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : j.propHooks._default.set(this), this
        }
    }, j.prototype.init.prototype = j.prototype, j.propHooks = { _default: { get: function(t) { var e; return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = wt.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0 }, set: function(t) { wt.fx.step[t.prop] ? wt.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[wt.cssProps[t.prop]] && !wt.cssHooks[t.prop] ? t.elem[t.prop] = t.now : wt.style(t.elem, t.prop, t.now + t.unit) } } }, j.propHooks.scrollTop = j.propHooks.scrollLeft = { set: function(t) { t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now) } }, wt.easing = { linear: function(t) { return t }, swing: function(t) { return .5 - Math.cos(t * Math.PI) / 2 }, _default: "swing" }, wt.fx = j.prototype.init, wt.fx.step = {};
    var ve, _e, ye = /^(?:toggle|show|hide)$/,
        be = /queueHooks$/;
    wt.Animation = wt.extend(K, { tweeners: { "*": [function(t, e) { var i = this.createTween(t, e); return _(i.elem, t, qt.exec(e), i), i }] }, tweener: function(t, e) { _t(t) ? (e = t, t = ["*"]) : t = t.match(Ot); for (var i, n = 0, s = t.length; n < s; n++) i = t[n], K.tweeners[i] = K.tweeners[i] || [], K.tweeners[i].unshift(e) }, prefilters: [U], prefilter: function(t, e) { e ? K.prefilters.unshift(t) : K.prefilters.push(t) } }), wt.speed = function(t, e, i) { var n = t && "object" == typeof t ? wt.extend({}, t) : { complete: i || !i && e || _t(t) && t, duration: t, easing: i && e || e && !_t(e) && e }; return wt.fx.off ? n.duration = 0 : "number" != typeof n.duration && (n.duration in wt.fx.speeds ? n.duration = wt.fx.speeds[n.duration] : n.duration = wt.fx.speeds._default), null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function() { _t(n.old) && n.old.call(this), n.queue && wt.dequeue(this, n.queue) }, n }, wt.fn.extend({
            fadeTo: function(t, e, i, n) { return this.filter(Xt).css("opacity", 0).show().end().animate({ opacity: e }, t, i, n) },
            animate: function(t, e, i, n) {
                var s = wt.isEmptyObject(t),
                    o = wt.speed(e, i, n),
                    r = function() {
                        var e = K(this, wt.extend({}, t), o);
                        (s || Rt.get(this, "finish")) && e.stop(!0)
                    };
                return r.finish = r, s || !1 === o.queue ? this.each(r) : this.queue(o.queue, r)
            },
            stop: function(t, e, i) {
                var n = function(t) {
                    var e = t.stop;
                    delete t.stop, e(i)
                };
                return "string" != typeof t && (i = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), this.each(function() {
                    var e = !0,
                        s = null != t && t + "queueHooks",
                        o = wt.timers,
                        r = Rt.get(this);
                    if (s) r[s] && r[s].stop && n(r[s]);
                    else
                        for (s in r) r[s] && r[s].stop && be.test(s) && n(r[s]);
                    for (s = o.length; s--;) o[s].elem !== this || null != t && o[s].queue !== t || (o[s].anim.stop(i), e = !1, o.splice(s, 1));
                    !e && i || wt.dequeue(this, t)
                })
            },
            finish: function(t) {
                return !1 !== t && (t = t || "fx"), this.each(function() {
                    var e, i = Rt.get(this),
                        n = i[t + "queue"],
                        s = i[t + "queueHooks"],
                        o = wt.timers,
                        r = n ? n.length : 0;
                    for (i.finish = !0, wt.queue(this, t, []), s && s.stop && s.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                    for (e = 0; e < r; e++) n[e] && n[e].finish && n[e].finish.call(this);
                    delete i.finish
                })
            }
        }), wt.each(["toggle", "show", "hide"], function(t, e) {
            var i = wt.fn[e];
            wt.fn[e] = function(t, n, s) { return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(Y(e, !0), t, n, s) }
        }), wt.each({ slideDown: Y("show"), slideUp: Y("hide"), slideToggle: Y("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(t, e) { wt.fn[t] = function(t, i, n) { return this.animate(e, t, i, n) } }), wt.timers = [], wt.fx.tick = function() {
            var t, e = 0,
                i = wt.timers;
            for (ve = Date.now(); e < i.length; e++)(t = i[e])() || i[e] !== t || i.splice(e--, 1);
            i.length || wt.fx.stop(), ve = void 0
        }, wt.fx.timer = function(t) { wt.timers.push(t), wt.fx.start() }, wt.fx.interval = 13, wt.fx.start = function() { _e || (_e = !0, B()) }, wt.fx.stop = function() { _e = null }, wt.fx.speeds = { slow: 600, fast: 200, _default: 400 }, wt.fn.delay = function(e, i) {
            return e = wt.fx && wt.fx.speeds[e] || e, i = i || "fx", this.queue(i, function(i, n) {
                var s = t.setTimeout(i, e);
                n.stop = function() { t.clearTimeout(s) }
            })
        },
        function() {
            var t = rt.createElement("input"),
                e = rt.createElement("select").appendChild(rt.createElement("option"));
            t.type = "checkbox", vt.checkOn = "" !== t.value, vt.optSelected = e.selected, (t = rt.createElement("input")).value = "t", t.type = "radio", vt.radioValue = "t" === t.value
        }();
    var we, xe = wt.expr.attrHandle;
    wt.fn.extend({ attr: function(t, e) { return Nt(this, wt.attr, t, e, arguments.length > 1) }, removeAttr: function(t) { return this.each(function() { wt.removeAttr(this, t) }) } }), wt.extend({
        attr: function(t, e, i) { var n, s, o = t.nodeType; if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof t.getAttribute ? wt.prop(t, e, i) : (1 === o && wt.isXMLDoc(t) || (s = wt.attrHooks[e.toLowerCase()] || (wt.expr.match.bool.test(e) ? we : void 0)), void 0 !== i ? null === i ? void wt.removeAttr(t, e) : s && "set" in s && void 0 !== (n = s.set(t, i, e)) ? n : (t.setAttribute(e, i + ""), i) : s && "get" in s && null !== (n = s.get(t, e)) ? n : null == (n = wt.find.attr(t, e)) ? void 0 : n) },
        attrHooks: { type: { set: function(t, e) { if (!vt.radioValue && "radio" === e && o(t, "input")) { var i = t.value; return t.setAttribute("type", e), i && (t.value = i), e } } } },
        removeAttr: function(t, e) {
            var i, n = 0,
                s = e && e.match(Ot);
            if (s && 1 === t.nodeType)
                for (; i = s[n++];) t.removeAttribute(i)
        }
    }), we = { set: function(t, e, i) { return !1 === e ? wt.removeAttr(t, i) : t.setAttribute(i, i), i } }, wt.each(wt.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var i = xe[e] || wt.find.attr;
        xe[e] = function(t, e, n) { var s, o, r = e.toLowerCase(); return n || (o = xe[r], xe[r] = s, s = null != i(t, e, n) ? r : null, xe[r] = o), s }
    });
    var Te = /^(?:input|select|textarea|button)$/i,
        ke = /^(?:a|area)$/i;
    wt.fn.extend({ prop: function(t, e) { return Nt(this, wt.prop, t, e, arguments.length > 1) }, removeProp: function(t) { return this.each(function() { delete this[wt.propFix[t] || t] }) } }), wt.extend({ prop: function(t, e, i) { var n, s, o = t.nodeType; if (3 !== o && 8 !== o && 2 !== o) return 1 === o && wt.isXMLDoc(t) || (e = wt.propFix[e] || e, s = wt.propHooks[e]), void 0 !== i ? s && "set" in s && void 0 !== (n = s.set(t, i, e)) ? n : t[e] = i : s && "get" in s && null !== (n = s.get(t, e)) ? n : t[e] }, propHooks: { tabIndex: { get: function(t) { var e = wt.find.attr(t, "tabindex"); return e ? parseInt(e, 10) : Te.test(t.nodeName) || ke.test(t.nodeName) && t.href ? 0 : -1 } } }, propFix: { "for": "htmlFor", "class": "className" } }), vt.optSelected || (wt.propHooks.selected = {
        get: function(t) { var e = t.parentNode; return e && e.parentNode && e.parentNode.selectedIndex, null },
        set: function(t) {
            var e = t.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
        }
    }), wt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { wt.propFix[this.toLowerCase()] = this }), wt.fn.extend({
        addClass: function(t) {
            var e, i, n, s, o, r, a, l = 0;
            if (_t(t)) return this.each(function(e) { wt(this).addClass(t.call(this, e, Q(this))) });
            if ((e = Z(t)).length)
                for (; i = this[l++];)
                    if (s = Q(i), n = 1 === i.nodeType && " " + G(s) + " ") {
                        for (r = 0; o = e[r++];) n.indexOf(" " + o + " ") < 0 && (n += o + " ");
                        s !== (a = G(n)) && i.setAttribute("class", a)
                    }
            return this
        },
        removeClass: function(t) {
            var e, i, n, s, o, r, a, l = 0;
            if (_t(t)) return this.each(function(e) { wt(this).removeClass(t.call(this, e, Q(this))) });
            if (!arguments.length) return this.attr("class", "");
            if ((e = Z(t)).length)
                for (; i = this[l++];)
                    if (s = Q(i), n = 1 === i.nodeType && " " + G(s) + " ") {
                        for (r = 0; o = e[r++];)
                            for (; n.indexOf(" " + o + " ") > -1;) n = n.replace(" " + o + " ", " ");
                        s !== (a = G(n)) && i.setAttribute("class", a)
                    }
            return this
        },
        toggleClass: function(t, e) {
            var i = typeof t,
                n = "string" === i || Array.isArray(t);
            return "boolean" == typeof e && n ? e ? this.addClass(t) : this.removeClass(t) : _t(t) ? this.each(function(i) { wt(this).toggleClass(t.call(this, i, Q(this), e), e) }) : this.each(function() {
                var e, s, o, r;
                if (n)
                    for (s = 0, o = wt(this), r = Z(t); e = r[s++];) o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                else void 0 !== t && "boolean" !== i || ((e = Q(this)) && Rt.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : Rt.get(this, "__className__") || ""))
            })
        },
        hasClass: function(t) {
            var e, i, n = 0;
            for (e = " " + t + " "; i = this[n++];)
                if (1 === i.nodeType && (" " + G(Q(i)) + " ").indexOf(e) > -1) return !0;
            return !1
        }
    });
    var Ce = /\r/g;
    wt.fn.extend({
        val: function(t) {
            var e, i, n, s = this[0];
            return arguments.length ? (n = _t(t), this.each(function(i) {
                var s;
                1 === this.nodeType && (null == (s = n ? t.call(this, i, wt(this).val()) : t) ? s = "" : "number" == typeof s ? s += "" : Array.isArray(s) && (s = wt.map(s, function(t) { return null == t ? "" : t + "" })), (e = wt.valHooks[this.type] || wt.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, s, "value") || (this.value = s))
            })) : s ? (e = wt.valHooks[s.type] || wt.valHooks[s.nodeName.toLowerCase()]) && "get" in e && void 0 !== (i = e.get(s, "value")) ? i : "string" == typeof(i = s.value) ? i.replace(Ce, "") : null == i ? "" : i : void 0
        }
    }), wt.extend({
        valHooks: {
            option: { get: function(t) { var e = wt.find.attr(t, "value"); return null != e ? e : G(wt.text(t)) } },
            select: {
                get: function(t) {
                    var e, i, n, s = t.options,
                        r = t.selectedIndex,
                        a = "select-one" === t.type,
                        l = a ? null : [],
                        h = a ? r + 1 : s.length;
                    for (n = r < 0 ? h : a ? r : 0; n < h; n++)
                        if (((i = s[n]).selected || n === r) && !i.disabled && (!i.parentNode.disabled || !o(i.parentNode, "optgroup"))) {
                            if (e = wt(i).val(), a) return e;
                            l.push(e)
                        }
                    return l
                },
                set: function(t, e) { for (var i, n, s = t.options, o = wt.makeArray(e), r = s.length; r--;)((n = s[r]).selected = wt.inArray(wt.valHooks.option.get(n), o) > -1) && (i = !0); return i || (t.selectedIndex = -1), o }
            }
        }
    }), wt.each(["radio", "checkbox"], function() { wt.valHooks[this] = { set: function(t, e) { if (Array.isArray(e)) return t.checked = wt.inArray(wt(t).val(), e) > -1 } }, vt.checkOn || (wt.valHooks[this].get = function(t) { return null === t.getAttribute("value") ? "on" : t.value }) }), vt.focusin = "onfocusin" in t;
    var Se = /^(?:focusinfocus|focusoutblur)$/,
        Pe = function(t) { t.stopPropagation() };
    wt.extend(wt.event, {
        trigger: function(e, i, n, s) {
            var o, r, a, l, h, c, u, d, p = [n || rt],
                f = ft.call(e, "type") ? e.type : e,
                m = ft.call(e, "namespace") ? e.namespace.split(".") : [];
            if (r = d = a = n = n || rt, 3 !== n.nodeType && 8 !== n.nodeType && !Se.test(f + wt.event.triggered) && (f.indexOf(".") > -1 && (f = (m = f.split(".")).shift(), m.sort()), h = f.indexOf(":") < 0 && "on" + f, (e = e[wt.expando] ? e : new wt.Event(f, "object" == typeof e && e)).isTrigger = s ? 2 : 3, e.namespace = m.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), i = null == i ? [e] : wt.makeArray(i, [e]), u = wt.event.special[f] || {}, s || !u.trigger || !1 !== u.trigger.apply(n, i))) {
                if (!s && !u.noBubble && !yt(n)) {
                    for (l = u.delegateType || f, Se.test(l + f) || (r = r.parentNode); r; r = r.parentNode) p.push(r), a = r;
                    a === (n.ownerDocument || rt) && p.push(a.defaultView || a.parentWindow || t)
                }
                for (o = 0;
                    (r = p[o++]) && !e.isPropagationStopped();) d = r, e.type = o > 1 ? l : u.bindType || f, (c = (Rt.get(r, "events") || {})[e.type] && Rt.get(r, "handle")) && c.apply(r, i), (c = h && r[h]) && c.apply && Lt(r) && (e.result = c.apply(r, i), !1 === e.result && e.preventDefault());
                return e.type = f, s || e.isDefaultPrevented() || u._default && !1 !== u._default.apply(p.pop(), i) || !Lt(n) || h && _t(n[f]) && !yt(n) && ((a = n[h]) && (n[h] = null), wt.event.triggered = f, e.isPropagationStopped() && d.addEventListener(f, Pe), n[f](), e.isPropagationStopped() && d.removeEventListener(f, Pe), wt.event.triggered = void 0, a && (n[h] = a)), e.result
            }
        },
        simulate: function(t, e, i) {
            var n = wt.extend(new wt.Event, i, { type: t, isSimulated: !0 });
            wt.event.trigger(n, null, e)
        }
    }), wt.fn.extend({ trigger: function(t, e) { return this.each(function() { wt.event.trigger(t, e, this) }) }, triggerHandler: function(t, e) { var i = this[0]; if (i) return wt.event.trigger(t, e, i, !0) } }), vt.focusin || wt.each({ focus: "focusin", blur: "focusout" }, function(t, e) {
        var i = function(t) { wt.event.simulate(e, t.target, wt.event.fix(t)) };
        wt.event.special[e] = {
            setup: function() {
                var n = this.ownerDocument || this,
                    s = Rt.access(n, e);
                s || n.addEventListener(t, i, !0), Rt.access(n, e, (s || 0) + 1)
            },
            teardown: function() {
                var n = this.ownerDocument || this,
                    s = Rt.access(n, e) - 1;
                s ? Rt.access(n, e, s) : (n.removeEventListener(t, i, !0), Rt.remove(n, e))
            }
        }
    });
    var De = t.location,
        Ae = Date.now(),
        Me = /\?/;
    wt.parseXML = function(e) { var i; if (!e || "string" != typeof e) return null; try { i = (new t.DOMParser).parseFromString(e, "text/xml") } catch (t) { i = void 0 } return i && !i.getElementsByTagName("parsererror").length || wt.error("Invalid XML: " + e), i };
    var Ie = /\[\]$/,
        Oe = /\r?\n/g,
        Ee = /^(?:submit|button|image|reset|file)$/i,
        $e = /^(?:input|select|textarea|keygen)/i;
    wt.param = function(t, e) {
        var i, n = [],
            s = function(t, e) {
                var i = _t(e) ? e() : e;
                n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == i ? "" : i)
            };
        if (Array.isArray(t) || t.jquery && !wt.isPlainObject(t)) wt.each(t, function() { s(this.name, this.value) });
        else
            for (i in t) J(i, t[i], e, s);
        return n.join("&")
    }, wt.fn.extend({ serialize: function() { return wt.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var t = wt.prop(this, "elements"); return t ? wt.makeArray(t) : this }).filter(function() { var t = this.type; return this.name && !wt(this).is(":disabled") && $e.test(this.nodeName) && !Ee.test(t) && (this.checked || !Kt.test(t)) }).map(function(t, e) { var i = wt(this).val(); return null == i ? null : Array.isArray(i) ? wt.map(i, function(t) { return { name: e.name, value: t.replace(Oe, "\r\n") } }) : { name: e.name, value: i.replace(Oe, "\r\n") } }).get() } });
    var Ne = /%20/g,
        ze = /#.*$/,
        He = /([?&])_=[^&]*/,
        Le = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Re = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Fe = /^(?:GET|HEAD)$/,
        We = /^\/\//,
        je = {},
        Be = {},
        qe = "*/".concat("*"),
        Ye = rt.createElement("a");
    Ye.href = De.href, wt.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: { url: De.href, type: "GET", isLocal: Re.test(De.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": qe, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": wt.parseXML }, flatOptions: { url: !0, context: !0 } },
        ajaxSetup: function(t, e) { return e ? it(it(t, wt.ajaxSettings), e) : it(wt.ajaxSettings, t) },
        ajaxPrefilter: tt(je),
        ajaxTransport: tt(Be),
        ajax: function(e, i) {
            function n(e, i, n, a) {
                var h, d, p, b, w, x = i;
                c || (c = !0, l && t.clearTimeout(l), s = void 0, r = a || "", T.readyState = e > 0 ? 4 : 0, h = e >= 200 && e < 300 || 304 === e, n && (b = nt(f, T, n)), b = st(f, b, T, h), h ? (f.ifModified && ((w = T.getResponseHeader("Last-Modified")) && (wt.lastModified[o] = w), (w = T.getResponseHeader("etag")) && (wt.etag[o] = w)), 204 === e || "HEAD" === f.type ? x = "nocontent" : 304 === e ? x = "notmodified" : (x = b.state, d = b.data, h = !(p = b.error))) : (p = x, !e && x || (x = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (i || x) + "", h ? v.resolveWith(m, [d, x, T]) : v.rejectWith(m, [T, x, p]), T.statusCode(y), y = void 0, u && g.trigger(h ? "ajaxSuccess" : "ajaxError", [T, f, h ? d : p]), _.fireWith(m, [T, x]), u && (g.trigger("ajaxComplete", [T, f]), --wt.active || wt.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (i = e, e = void 0), i = i || {};
            var s, o, r, a, l, h, c, u, d, p, f = wt.ajaxSetup({}, i),
                m = f.context || f,
                g = f.context && (m.nodeType || m.jquery) ? wt(m) : wt.event,
                v = wt.Deferred(),
                _ = wt.Callbacks("once memory"),
                y = f.statusCode || {},
                b = {},
                w = {},
                x = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function(t) {
                        var e;
                        if (c) {
                            if (!a)
                                for (a = {}; e = Le.exec(r);) a[e[1].toLowerCase()] = e[2];
                            e = a[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function() { return c ? r : null },
                    setRequestHeader: function(t, e) { return null == c && (t = w[t.toLowerCase()] = w[t.toLowerCase()] || t, b[t] = e), this },
                    overrideMimeType: function(t) { return null == c && (f.mimeType = t), this },
                    statusCode: function(t) {
                        var e;
                        if (t)
                            if (c) T.always(t[T.status]);
                            else
                                for (e in t) y[e] = [y[e], t[e]];
                        return this
                    },
                    abort: function(t) { var e = t || x; return s && s.abort(e), n(0, e), this }
                };
            if (v.promise(T), f.url = ((e || f.url || De.href) + "").replace(We, De.protocol + "//"), f.type = i.method || i.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(Ot) || [""], null == f.crossDomain) { h = rt.createElement("a"); try { h.href = f.url, h.href = h.href, f.crossDomain = Ye.protocol + "//" + Ye.host != h.protocol + "//" + h.host } catch (t) { f.crossDomain = !0 } }
            if (f.data && f.processData && "string" != typeof f.data && (f.data = wt.param(f.data, f.traditional)), et(je, f, i, T), c) return T;
            for (d in (u = wt.event && f.global) && 0 == wt.active++ && wt.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Fe.test(f.type), o = f.url.replace(ze, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(Ne, "+")) : (p = f.url.slice(o.length), f.data && (f.processData || "string" == typeof f.data) && (o += (Me.test(o) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (o = o.replace(He, "$1"), p = (Me.test(o) ? "&" : "?") + "_=" + Ae++ + p), f.url = o + p), f.ifModified && (wt.lastModified[o] && T.setRequestHeader("If-Modified-Since", wt.lastModified[o]), wt.etag[o] && T.setRequestHeader("If-None-Match", wt.etag[o])), (f.data && f.hasContent && !1 !== f.contentType || i.contentType) && T.setRequestHeader("Content-Type", f.contentType), T.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + qe + "; q=0.01" : "") : f.accepts["*"]), f.headers) T.setRequestHeader(d, f.headers[d]);
            if (f.beforeSend && (!1 === f.beforeSend.call(m, T, f) || c)) return T.abort();
            if (x = "abort", _.add(f.complete), T.done(f.success), T.fail(f.error), s = et(Be, f, i, T)) {
                if (T.readyState = 1, u && g.trigger("ajaxSend", [T, f]), c) return T;
                f.async && f.timeout > 0 && (l = t.setTimeout(function() { T.abort("timeout") }, f.timeout));
                try { c = !1, s.send(b, n) } catch (t) {
                    if (c) throw t;
                    n(-1, t)
                }
            } else n(-1, "No Transport");
            return T
        },
        getJSON: function(t, e, i) { return wt.get(t, e, i, "json") },
        getScript: function(t, e) { return wt.get(t, void 0, e, "script") }
    }), wt.each(["get", "post"], function(t, e) { wt[e] = function(t, i, n, s) { return _t(i) && (s = s || n, n = i, i = void 0), wt.ajax(wt.extend({ url: t, type: e, dataType: s, data: i, success: n }, wt.isPlainObject(t) && t)) } }), wt._evalUrl = function(t) { return wt.ajax({ url: t, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0 }) }, wt.fn.extend({
        wrapAll: function(t) { var e; return this[0] && (_t(t) && (t = t.call(this[0])), e = wt(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() { for (var t = this; t.firstElementChild;) t = t.firstElementChild; return t }).append(this)), this },
        wrapInner: function(t) {
            return _t(t) ? this.each(function(e) { wt(this).wrapInner(t.call(this, e)) }) : this.each(function() {
                var e = wt(this),
                    i = e.contents();
                i.length ? i.wrapAll(t) : e.append(t)
            })
        },
        wrap: function(t) { var e = _t(t); return this.each(function(i) { wt(this).wrapAll(e ? t.call(this, i) : t) }) },
        unwrap: function(t) { return this.parent(t).not("body").each(function() { wt(this).replaceWith(this.childNodes) }), this }
    }), wt.expr.pseudos.hidden = function(t) { return !wt.expr.pseudos.visible(t) }, wt.expr.pseudos.visible = function(t) { return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length) }, wt.ajaxSettings.xhr = function() { try { return new t.XMLHttpRequest } catch (t) {} };
    var Xe = { 0: 200, 1223: 204 },
        Ue = wt.ajaxSettings.xhr();
    vt.cors = !!Ue && "withCredentials" in Ue, vt.ajax = Ue = !!Ue, wt.ajaxTransport(function(e) {
        var i, n;
        if (vt.cors || Ue && !e.crossDomain) return {
            send: function(s, o) {
                var r, a = e.xhr();
                if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                    for (r in e.xhrFields) a[r] = e.xhrFields[r];
                for (r in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || s["X-Requested-With"] || (s["X-Requested-With"] = "XMLHttpRequest"), s) a.setRequestHeader(r, s[r]);
                i = function(t) { return function() { i && (i = n = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Xe[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? { binary: a.response } : { text: a.responseText }, a.getAllResponseHeaders())) } }, a.onload = i(), n = a.onerror = a.ontimeout = i("error"), void 0 !== a.onabort ? a.onabort = n : a.onreadystatechange = function() { 4 === a.readyState && t.setTimeout(function() { i && n() }) }, i = i("abort");
                try { a.send(e.hasContent && e.data || null) } catch (t) { if (i) throw t }
            },
            abort: function() { i && i() }
        }
    }), wt.ajaxPrefilter(function(t) { t.crossDomain && (t.contents.script = !1) }), wt.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(t) { return wt.globalEval(t), t } } }), wt.ajaxPrefilter("script", function(t) { void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET") }), wt.ajaxTransport("script", function(t) { var e, i; if (t.crossDomain) return { send: function(n, s) { e = wt("<script>").prop({ charset: t.scriptCharset, src: t.url }).on("load error", i = function(t) { e.remove(), i = null, t && s("error" === t.type ? 404 : 200, t.type) }), rt.head.appendChild(e[0]) }, abort: function() { i && i() } } });
    var Ve = [],
        Ke = /(=)\?(?=&|$)|\?\?/;
    wt.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var t = Ve.pop() || wt.expando + "_" + Ae++; return this[t] = !0, t } }), wt.ajaxPrefilter("json jsonp", function(e, i, n) { var s, o, r, a = !1 !== e.jsonp && (Ke.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ke.test(e.data) && "data"); if (a || "jsonp" === e.dataTypes[0]) return s = e.jsonpCallback = _t(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Ke, "$1" + s) : !1 !== e.jsonp && (e.url += (Me.test(e.url) ? "&" : "?") + e.jsonp + "=" + s), e.converters["script json"] = function() { return r || wt.error(s + " was not called"), r[0] }, e.dataTypes[0] = "json", o = t[s], t[s] = function() { r = arguments }, n.always(function() { void 0 === o ? wt(t).removeProp(s) : t[s] = o, e[s] && (e.jsonpCallback = i.jsonpCallback, Ve.push(s)), r && _t(o) && o(r[0]), r = o = void 0 }), "script" }), vt.createHTMLDocument = function() { var t = rt.implementation.createHTMLDocument("").body; return t.innerHTML = "<form></form><form></form>", 2 === t.childNodes.length }(), wt.parseHTML = function(t, e, i) { return "string" != typeof t ? [] : ("boolean" == typeof e && (i = e, e = !1), e || (vt.createHTMLDocument ? ((n = (e = rt.implementation.createHTMLDocument("")).createElement("base")).href = rt.location.href, e.head.appendChild(n)) : e = rt), o = !i && [], (s = Pt.exec(t)) ? [e.createElement(s[1])] : (s = T([t], e, o), o && o.length && wt(o).remove(), wt.merge([], s.childNodes))); var n, s, o }, wt.fn.load = function(t, e, i) {
        var n, s, o, r = this,
            a = t.indexOf(" ");
        return a > -1 && (n = G(t.slice(a)), t = t.slice(0, a)), _t(e) ? (i = e, e = void 0) : e && "object" == typeof e && (s = "POST"), r.length > 0 && wt.ajax({ url: t, type: s || "GET", dataType: "html", data: e }).done(function(t) { o = arguments, r.html(n ? wt("<div>").append(wt.parseHTML(t)).find(n) : t) }).always(i && function(t, e) { r.each(function() { i.apply(this, o || [t.responseText, e, t]) }) }), this
    }, wt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) { wt.fn[e] = function(t) { return this.on(e, t) } }), wt.expr.pseudos.animated = function(t) { return wt.grep(wt.timers, function(e) { return t === e.elem }).length }, wt.offset = {
        setOffset: function(t, e, i) {
            var n, s, o, r, a, l, h = wt.css(t, "position"),
                c = wt(t),
                u = {};
            "static" === h && (t.style.position = "relative"), a = c.offset(), o = wt.css(t, "top"), l = wt.css(t, "left"), ("absolute" === h || "fixed" === h) && (o + l).indexOf("auto") > -1 ? (r = (n = c.position()).top, s = n.left) : (r = parseFloat(o) || 0, s = parseFloat(l) || 0), _t(e) && (e = e.call(t, i, wt.extend({}, a))), null != e.top && (u.top = e.top - a.top + r), null != e.left && (u.left = e.left - a.left + s), "using" in e ? e.using.call(t, u) : c.css(u)
        }
    }, wt.fn.extend({
        offset: function(t) { if (arguments.length) return void 0 === t ? this : this.each(function(e) { wt.offset.setOffset(this, t, e) }); var e, i, n = this[0]; return n ? n.getClientRects().length ? (e = n.getBoundingClientRect(), i = n.ownerDocument.defaultView, { top: e.top + i.pageYOffset, left: e.left + i.pageXOffset }) : { top: 0, left: 0 } : void 0 },
        position: function() {
            if (this[0]) {
                var t, e, i, n = this[0],
                    s = { top: 0, left: 0 };
                if ("fixed" === wt.css(n, "position")) e = n.getBoundingClientRect();
                else {
                    for (e = this.offset(), i = n.ownerDocument, t = n.offsetParent || i.documentElement; t && (t === i.body || t === i.documentElement) && "static" === wt.css(t, "position");) t = t.parentNode;
                    t && t !== n && 1 === t.nodeType && ((s = wt(t).offset()).top += wt.css(t, "borderTopWidth", !0), s.left += wt.css(t, "borderLeftWidth", !0))
                }
                return { top: e.top - s.top - wt.css(n, "marginTop", !0), left: e.left - s.left - wt.css(n, "marginLeft", !0) }
            }
        },
        offsetParent: function() { return this.map(function() { for (var t = this.offsetParent; t && "static" === wt.css(t, "position");) t = t.offsetParent; return t || te }) }
    }), wt.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(t, e) {
        var i = "pageYOffset" === e;
        wt.fn[t] = function(n) {
            return Nt(this, function(t, n, s) {
                var o;
                if (yt(t) ? o = t : 9 === t.nodeType && (o = t.defaultView), void 0 === s) return o ? o[e] : t[n];
                o ? o.scrollTo(i ? o.pageXOffset : s, i ? s : o.pageYOffset) : t[n] = s
            }, t, n, arguments.length)
        }
    }), wt.each(["top", "left"], function(t, e) { wt.cssHooks[e] = z(vt.pixelPosition, function(t, i) { if (i) return i = N(t, e), le.test(i) ? wt(t).position()[e] + "px" : i }) }), wt.each({ Height: "height", Width: "width" }, function(t, e) {
        wt.each({ padding: "inner" + t, content: e, "": "outer" + t }, function(i, n) {
            wt.fn[n] = function(s, o) {
                var r = arguments.length && (i || "boolean" != typeof s),
                    a = i || (!0 === s || !0 === o ? "margin" : "border");
                return Nt(this, function(e, i, s) { var o; return yt(e) ? 0 === n.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === s ? wt.css(e, i, a) : wt.style(e, i, s, a) }, e, r ? s : void 0, r)
            }
        })
    }), wt.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(t, e) { wt.fn[e] = function(t, i) { return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e) } }), wt.fn.extend({ hover: function(t, e) { return this.mouseenter(t).mouseleave(e || t) } }), wt.fn.extend({ bind: function(t, e, i) { return this.on(t, null, e, i) }, unbind: function(t, e) { return this.off(t, null, e) }, delegate: function(t, e, i, n) { return this.on(e, t, i, n) }, undelegate: function(t, e, i) { return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i) } }), wt.proxy = function(t, e) { var i, n, s; if ("string" == typeof e && (i = t[e], e = t, t = i), _t(t)) return n = lt.call(arguments, 2), (s = function() { return t.apply(e || this, n.concat(lt.call(arguments))) }).guid = t.guid = t.guid || wt.guid++, s }, wt.holdReady = function(t) { t ? wt.readyWait++ : wt.ready(!0) }, wt.isArray = Array.isArray, wt.parseJSON = JSON.parse, wt.nodeName = o, wt.isFunction = _t, wt.isWindow = yt, wt.camelCase = f, wt.type = n, wt.now = Date.now, wt.isNumeric = function(t) { var e = wt.type(t); return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t)) }, "function" == typeof define && define.amd && define("jquery", [], function() { return wt });
    var Ge = t.jQuery,
        Qe = t.$;
    return wt.noConflict = function(e) { return t.$ === wt && (t.$ = Qe), e && t.jQuery === wt && (t.jQuery = Ge), wt }, e || (t.jQuery = t.$ = wt), wt
}),
/*! jQuery UI - v1.12.1 - 2016-09-14
 * http://jqueryui.com
 * Includes: widget.js, position.js, data.js, disable-selection.js, effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js, focusable.js, form-reset-mixin.js, jquery-1-7.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/accordion.js, widgets/autocomplete.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/datepicker.js, widgets/dialog.js, widgets/draggable.js, widgets/droppable.js, widgets/menu.js, widgets/mouse.js, widgets/progressbar.js, widgets/resizable.js, widgets/selectable.js, widgets/selectmenu.js, widgets/slider.js, widgets/sortable.js, widgets/spinner.js, widgets/tabs.js, widgets/tooltip.js
 * Copyright jQuery Foundation and other contributors; Licensed MIT */
function(t) { "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery) }(function(t) {
    function e(t) {
        for (var e = t.css("visibility");
            "inherit" === e;) e = (t = t.parent()).css("visibility");
        return "hidden" !== e
    }

    function i(t) {
        for (var e, i; t.length && t[0] !== document;) {
            if (("absolute" === (e = t.css("position")) || "relative" === e || "fixed" === e) && (i = parseInt(t.css("zIndex"), 10), !isNaN(i) && 0 !== i)) return i;
            t = t.parent()
        }
        return 0
    }

    function n() { this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = { closeText: "Done", prevText: "Prev", nextText: "Next", currentText: "Today", monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], weekHeader: "Wk", dateFormat: "mm/dd/yy", firstDay: 0, isRTL: !1, showMonthAfterYear: !1, yearSuffix: "" }, this._defaults = { showOn: "focus", showAnim: "fadeIn", showOptions: {}, defaultDate: null, appendText: "", buttonText: "...", buttonImage: "", buttonImageOnly: !1, hideIfNoPrevNext: !1, navigationAsDateFormat: !1, gotoCurrent: !1, changeMonth: !1, changeYear: !1, yearRange: "c-10:c+10", showOtherMonths: !1, selectOtherMonths: !1, showWeek: !1, calculateWeek: this.iso8601Week, shortYearCutoff: "+10", minDate: null, maxDate: null, duration: "fast", beforeShowDay: null, beforeShow: null, onSelect: null, onChangeMonthYear: null, onClose: null, numberOfMonths: 1, showCurrentAtPos: 0, stepMonths: 1, stepBigMonths: 12, altField: "", altFormat: "", constrainInput: !0, showButtonPanel: !1, autoSize: !1, disabled: !1 }, t.extend(this._defaults, this.regional[""]), this.regional.en = t.extend(!0, {}, this.regional[""]), this.regional["en-US"] = t.extend(!0, {}, this.regional.en), this.dpDiv = s(t("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) }

    function s(e) { var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a"; return e.on("mouseout", i, function() { t(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).removeClass("ui-datepicker-next-hover") }).on("mouseover", i, o) }

    function o() { t.datepicker._isDisabledDatepicker(f.inline ? f.dpDiv.parent()[0] : f.input[0]) || (t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), t(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).addClass("ui-datepicker-next-hover")) }

    function r(e, i) { for (var n in t.extend(e, i), i) null == i[n] && (e[n] = i[n]); return e }

    function a(t) {
        return function() {
            var e = this.element.val();
            t.apply(this, arguments), this._refresh(), e !== this.element.val() && this._trigger("change")
        }
    }
    t.ui = t.ui || {}, t.ui.version = "1.12.1";
    var l = 0,
        h = Array.prototype.slice;
    t.cleanData = function(e) {
            return function(i) {
                var n, s, o;
                for (o = 0; null != (s = i[o]); o++) try {
                    (n = t._data(s, "events")) && n.remove && t(s).triggerHandler("remove")
                } catch (r) {}
                e(i)
            }
        }(t.cleanData), t.widget = function(e, i, n) {
            var s, o, r, a = {},
                l = e.split(".")[0],
                h = l + "-" + (e = e.split(".")[1]);
            return n || (n = i, i = t.Widget), t.isArray(n) && (n = t.extend.apply(null, [{}].concat(n))), t.expr[":"][h.toLowerCase()] = function(e) { return !!t.data(e, h) }, t[l] = t[l] || {}, s = t[l][e], o = t[l][e] = function(t, e) { return this._createWidget ? void(arguments.length && this._createWidget(t, e)) : new o(t, e) }, t.extend(o, s, { version: n.version, _proto: t.extend({}, n), _childConstructors: [] }), (r = new i).options = t.widget.extend({}, r.options), t.each(n, function(e, n) {
                return t.isFunction(n) ? void(a[e] = function() {
                    function t() { return i.prototype[e].apply(this, arguments) }

                    function s(t) { return i.prototype[e].apply(this, t) }
                    return function() {
                        var e, i = this._super,
                            o = this._superApply;
                        return this._super = t, this._superApply = s, e = n.apply(this, arguments), this._super = i, this._superApply = o, e
                    }
                }()) : void(a[e] = n)
            }), o.prototype = t.widget.extend(r, { widgetEventPrefix: s && r.widgetEventPrefix || e }, a, { constructor: o, namespace: l, widgetName: e, widgetFullName: h }), s ? (t.each(s._childConstructors, function(e, i) {
                var n = i.prototype;
                t.widget(n.namespace + "." + n.widgetName, o, i._proto)
            }), delete s._childConstructors) : i._childConstructors.push(o), t.widget.bridge(e, o), o
        }, t.widget.extend = function(e) {
            for (var i, n, s = h.call(arguments, 1), o = 0, r = s.length; r > o; o++)
                for (i in s[o]) n = s[o][i], s[o].hasOwnProperty(i) && void 0 !== n && (e[i] = t.isPlainObject(n) ? t.isPlainObject(e[i]) ? t.widget.extend({}, e[i], n) : t.widget.extend({}, n) : n);
            return e
        }, t.widget.bridge = function(e, i) {
            var n = i.prototype.widgetFullName || e;
            t.fn[e] = function(s) {
                var o = "string" == typeof s,
                    r = h.call(arguments, 1),
                    a = this;
                return o ? this.length || "instance" !== s ? this.each(function() { var i, o = t.data(this, n); return "instance" === s ? (a = o, !1) : o ? t.isFunction(o[s]) && "_" !== s.charAt(0) ? (i = o[s].apply(o, r)) !== o && void 0 !== i ? (a = i && i.jquery ? a.pushStack(i.get()) : i, !1) : void 0 : t.error("no such method '" + s + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; attempted to call method '" + s + "'") }) : a = void 0 : (r.length && (s = t.widget.extend.apply(null, [s].concat(r))), this.each(function() {
                    var e = t.data(this, n);
                    e ? (e.option(s || {}), e._init && e._init()) : t.data(this, n, new i(s, this))
                })), a
            }
        }, t.Widget = function() {}, t.Widget._childConstructors = [], t.Widget.prototype = {
            widgetName: "widget",
            widgetEventPrefix: "",
            defaultElement: "<div>",
            options: { classes: {}, disabled: !1, create: null },
            _createWidget: function(e, i) { i = t(i || this.defaultElement || this)[0], this.element = t(i), this.uuid = l++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = t(), this.hoverable = t(), this.focusable = t(), this.classesElementLookup = {}, i !== this && (t.data(i, this.widgetFullName, this), this._on(!0, this.element, { remove: function(t) { t.target === i && this.destroy() } }), this.document = t(i.style ? i.ownerDocument : i.document || i), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init() },
            _getCreateOptions: function() { return {} },
            _getCreateEventData: t.noop,
            _create: t.noop,
            _init: t.noop,
            destroy: function() {
                var e = this;
                this._destroy(), t.each(this.classesElementLookup, function(t, i) { e._removeClass(i, t) }), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace)
            },
            _destroy: t.noop,
            widget: function() { return this.element },
            option: function(e, i) {
                var n, s, o, r = e;
                if (0 === arguments.length) return t.widget.extend({}, this.options);
                if ("string" == typeof e)
                    if (r = {}, e = (n = e.split(".")).shift(), n.length) {
                        for (s = r[e] = t.widget.extend({}, this.options[e]), o = 0; n.length - 1 > o; o++) s[n[o]] = s[n[o]] || {}, s = s[n[o]];
                        if (e = n.pop(), 1 === arguments.length) return void 0 === s[e] ? null : s[e];
                        s[e] = i
                    } else {
                        if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
                        r[e] = i
                    }
                return this._setOptions(r), this
            },
            _setOptions: function(t) { var e; for (e in t) this._setOption(e, t[e]); return this },
            _setOption: function(t, e) { return "classes" === t && this._setOptionClasses(e), this.options[t] = e, "disabled" === t && this._setOptionDisabled(e), this },
            _setOptionClasses: function(e) { var i, n, s; for (i in e) s = this.classesElementLookup[i], e[i] !== this.options.classes[i] && s && s.length && (n = t(s.get()), this._removeClass(s, i), n.addClass(this._classes({ element: n, keys: i, classes: e, add: !0 }))) },
            _setOptionDisabled: function(t) { this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t), t && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus")) },
            enable: function() { return this._setOptions({ disabled: !1 }) },
            disable: function() { return this._setOptions({ disabled: !0 }) },
            _classes: function(e) {
                function i(i, o) { var r, a; for (a = 0; i.length > a; a++) r = s.classesElementLookup[i[a]] || t(), r = e.add ? t(t.unique(r.get().concat(e.element.get()))) : t(r.not(e.element).get()), s.classesElementLookup[i[a]] = r, n.push(i[a]), o && e.classes[i[a]] && n.push(e.classes[i[a]]) }
                var n = [],
                    s = this;
                return e = t.extend({ element: this.element, classes: this.options.classes || {} }, e), this._on(e.element, { remove: "_untrackClassesElement" }), e.keys && i(e.keys.match(/\S+/g) || [], !0), e.extra && i(e.extra.match(/\S+/g) || []), n.join(" ")
            },
            _untrackClassesElement: function(e) {
                var i = this;
                t.each(i.classesElementLookup, function(n, s) {-1 !== t.inArray(e.target, s) && (i.classesElementLookup[n] = t(s.not(e.target).get())) })
            },
            _removeClass: function(t, e, i) { return this._toggleClass(t, e, i, !1) },
            _addClass: function(t, e, i) { return this._toggleClass(t, e, i, !0) },
            _toggleClass: function(t, e, i, n) {
                n = "boolean" == typeof n ? n : i;
                var s = "string" == typeof t || null === t,
                    o = { extra: s ? e : i, keys: s ? t : e, element: s ? this.element : t, add: n };
                return o.element.toggleClass(this._classes(o), n), this
            },
            _on: function(e, i, n) {
                var s, o = this;
                "boolean" != typeof e && (n = i, i = e, e = !1), n ? (i = s = t(i), this.bindings = this.bindings.add(i)) : (n = i, i = this.element, s = this.widget()), t.each(n, function(n, r) {
                    function a() { return e || !0 !== o.options.disabled && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof r ? o[r] : r).apply(o, arguments) : void 0 }
                    "string" != typeof r && (a.guid = r.guid = r.guid || a.guid || t.guid++);
                    var l = n.match(/^([\w:-]*)\s*(.*)$/),
                        h = l[1] + o.eventNamespace,
                        c = l[2];
                    c ? s.on(h, c, a) : i.on(h, a)
                })
            },
            _off: function(e, i) { i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.off(i).off(i), this.bindings = t(this.bindings.not(e).get()), this.focusable = t(this.focusable.not(e).get()), this.hoverable = t(this.hoverable.not(e).get()) },
            _delay: function(t, e) {
                function i() { return ("string" == typeof t ? n[t] : t).apply(n, arguments) }
                var n = this;
                return setTimeout(i, e || 0)
            },
            _hoverable: function(e) { this.hoverable = this.hoverable.add(e), this._on(e, { mouseenter: function(e) { this._addClass(t(e.currentTarget), null, "ui-state-hover") }, mouseleave: function(e) { this._removeClass(t(e.currentTarget), null, "ui-state-hover") } }) },
            _focusable: function(e) { this.focusable = this.focusable.add(e), this._on(e, { focusin: function(e) { this._addClass(t(e.currentTarget), null, "ui-state-focus") }, focusout: function(e) { this._removeClass(t(e.currentTarget), null, "ui-state-focus") } }) },
            _trigger: function(e, i, n) {
                var s, o, r = this.options[e];
                if (n = n || {}, (i = t.Event(i)).type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], o = i.originalEvent)
                    for (s in o) s in i || (i[s] = o[s]);
                return this.element.trigger(i, n), !(t.isFunction(r) && !1 === r.apply(this.element[0], [i].concat(n)) || i.isDefaultPrevented())
            }
        }, t.each({ show: "fadeIn", hide: "fadeOut" }, function(e, i) { t.Widget.prototype["_" + e] = function(n, s, o) { "string" == typeof s && (s = { effect: s }); var r, a = s ? !0 === s || "number" == typeof s ? i : s.effect || i : e; "number" == typeof(s = s || {}) && (s = { duration: s }), r = !t.isEmptyObject(s), s.complete = o, s.delay && n.delay(s.delay), r && t.effects && t.effects.effect[a] ? n[e](s) : a !== e && n[a] ? n[a](s.duration, s.easing, o) : n.queue(function(i) { t(this)[e](), o && o.call(n[0]), i() }) } }), t.widget,
        function() {
            function e(t, e, i) { return [parseFloat(t[0]) * (u.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (u.test(t[1]) ? i / 100 : 1)] }

            function i(e, i) { return parseInt(t.css(e, i), 10) || 0 }

            function n(e) { var i = e[0]; return 9 === i.nodeType ? { width: e.width(), height: e.height(), offset: { top: 0, left: 0 } } : t.isWindow(i) ? { width: e.width(), height: e.height(), offset: { top: e.scrollTop(), left: e.scrollLeft() } } : i.preventDefault ? { width: 0, height: 0, offset: { top: i.pageY, left: i.pageX } } : { width: e.outerWidth(), height: e.outerHeight(), offset: e.offset() } }
            var s, o = Math.max,
                r = Math.abs,
                a = /left|center|right/,
                l = /top|center|bottom/,
                h = /[\+\-]\d+(\.[\d]+)?%?/,
                c = /^\w+/,
                u = /%$/,
                d = t.fn.position;
            t.position = {
                scrollbarWidth: function() {
                    if (void 0 !== s) return s;
                    var e, i, n = t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                        o = n.children()[0];
                    return t("body").append(n), e = o.offsetWidth, n.css("overflow", "scroll"), e === (i = o.offsetWidth) && (i = n[0].clientWidth), n.remove(), s = e - i
                },
                getScrollInfo: function(e) {
                    var i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"),
                        n = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"),
                        s = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth;
                    return { width: "scroll" === n || "auto" === n && e.height < e.element[0].scrollHeight ? t.position.scrollbarWidth() : 0, height: s ? t.position.scrollbarWidth() : 0 }
                },
                getWithinInfo: function(e) {
                    var i = t(e || window),
                        n = t.isWindow(i[0]),
                        s = !!i[0] && 9 === i[0].nodeType;
                    return { element: i, isWindow: n, isDocument: s, offset: !n && !s ? t(e).offset() : { left: 0, top: 0 }, scrollLeft: i.scrollLeft(), scrollTop: i.scrollTop(), width: i.outerWidth(), height: i.outerHeight() }
                }
            }, t.fn.position = function(s) {
                if (!s || !s.of) return d.apply(this, arguments);
                s = t.extend({}, s);
                var u, p, f, m, g, v, _ = t(s.of),
                    y = t.position.getWithinInfo(s.within),
                    b = t.position.getScrollInfo(y),
                    w = (s.collision || "flip").split(" "),
                    x = {};
                return v = n(_), _[0].preventDefault && (s.at = "left top"), p = v.width, f = v.height, m = v.offset, g = t.extend({}, m), t.each(["my", "at"], function() {
                    var t, e, i = (s[this] || "").split(" ");
                    1 === i.length && (i = a.test(i[0]) ? i.concat(["center"]) : l.test(i[0]) ? ["center"].concat(i) : ["center", "center"]), i[0] = a.test(i[0]) ? i[0] : "center", i[1] = l.test(i[1]) ? i[1] : "center", t = h.exec(i[0]), e = h.exec(i[1]), x[this] = [t ? t[0] : 0, e ? e[0] : 0], s[this] = [c.exec(i[0])[0], c.exec(i[1])[0]]
                }), 1 === w.length && (w[1] = w[0]), "right" === s.at[0] ? g.left += p : "center" === s.at[0] && (g.left += p / 2), "bottom" === s.at[1] ? g.top += f : "center" === s.at[1] && (g.top += f / 2), u = e(x.at, p, f), g.left += u[0], g.top += u[1], this.each(function() {
                    var n, a, l = t(this),
                        h = l.outerWidth(),
                        c = l.outerHeight(),
                        d = i(this, "marginLeft"),
                        v = i(this, "marginTop"),
                        T = h + d + i(this, "marginRight") + b.width,
                        k = c + v + i(this, "marginBottom") + b.height,
                        C = t.extend({}, g),
                        S = e(x.my, l.outerWidth(), l.outerHeight());
                    "right" === s.my[0] ? C.left -= h : "center" === s.my[0] && (C.left -= h / 2), "bottom" === s.my[1] ? C.top -= c : "center" === s.my[1] && (C.top -= c / 2), C.left += S[0], C.top += S[1], n = { marginLeft: d, marginTop: v }, t.each(["left", "top"], function(e, i) { t.ui.position[w[e]] && t.ui.position[w[e]][i](C, { targetWidth: p, targetHeight: f, elemWidth: h, elemHeight: c, collisionPosition: n, collisionWidth: T, collisionHeight: k, offset: [u[0] + S[0], u[1] + S[1]], my: s.my, at: s.at, within: y, elem: l }) }), s.using && (a = function(t) {
                        var e = m.left - C.left,
                            i = e + p - h,
                            n = m.top - C.top,
                            a = n + f - c,
                            u = { target: { element: _, left: m.left, top: m.top, width: p, height: f }, element: { element: l, left: C.left, top: C.top, width: h, height: c }, horizontal: 0 > i ? "left" : e > 0 ? "right" : "center", vertical: 0 > a ? "top" : n > 0 ? "bottom" : "middle" };
                        h > p && p > r(e + i) && (u.horizontal = "center"), c > f && f > r(n + a) && (u.vertical = "middle"), u.important = o(r(e), r(i)) > o(r(n), r(a)) ? "horizontal" : "vertical", s.using.call(this, t, u)
                    }), l.offset(t.extend(C, { using: a }))
                })
            }, t.ui.position = {
                fit: {
                    left: function(t, e) {
                        var i, n = e.within,
                            s = n.isWindow ? n.scrollLeft : n.offset.left,
                            r = n.width,
                            a = t.left - e.collisionPosition.marginLeft,
                            l = s - a,
                            h = a + e.collisionWidth - r - s;
                        e.collisionWidth > r ? l > 0 && 0 >= h ? (i = t.left + l + e.collisionWidth - r - s, t.left += l - i) : t.left = h > 0 && 0 >= l ? s : l > h ? s + r - e.collisionWidth : s : l > 0 ? t.left += l : h > 0 ? t.left -= h : t.left = o(t.left - a, t.left)
                    },
                    top: function(t, e) {
                        var i, n = e.within,
                            s = n.isWindow ? n.scrollTop : n.offset.top,
                            r = e.within.height,
                            a = t.top - e.collisionPosition.marginTop,
                            l = s - a,
                            h = a + e.collisionHeight - r - s;
                        e.collisionHeight > r ? l > 0 && 0 >= h ? (i = t.top + l + e.collisionHeight - r - s, t.top += l - i) : t.top = h > 0 && 0 >= l ? s : l > h ? s + r - e.collisionHeight : s : l > 0 ? t.top += l : h > 0 ? t.top -= h : t.top = o(t.top - a, t.top)
                    }
                },
                flip: {
                    left: function(t, e) {
                        var i, n, s = e.within,
                            o = s.offset.left + s.scrollLeft,
                            a = s.width,
                            l = s.isWindow ? s.scrollLeft : s.offset.left,
                            h = t.left - e.collisionPosition.marginLeft,
                            c = h - l,
                            u = h + e.collisionWidth - a - l,
                            d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
                            p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
                            f = -2 * e.offset[0];
                        0 > c ? (0 > (i = t.left + d + p + f + e.collisionWidth - a - o) || r(c) > i) && (t.left += d + p + f) : u > 0 && (((n = t.left - e.collisionPosition.marginLeft + d + p + f - l) > 0 || u > r(n)) && (t.left += d + p + f))
                    },
                    top: function(t, e) {
                        var i, n, s = e.within,
                            o = s.offset.top + s.scrollTop,
                            a = s.height,
                            l = s.isWindow ? s.scrollTop : s.offset.top,
                            h = t.top - e.collisionPosition.marginTop,
                            c = h - l,
                            u = h + e.collisionHeight - a - l,
                            d = "top" === e.my[1] ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
                            p = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
                            f = -2 * e.offset[1];
                        0 > c ? (0 > (n = t.top + d + p + f + e.collisionHeight - a - o) || r(c) > n) && (t.top += d + p + f) : u > 0 && (((i = t.top - e.collisionPosition.marginTop + d + p + f - l) > 0 || u > r(i)) && (t.top += d + p + f))
                    }
                },
                flipfit: { left: function() { t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments) }, top: function() { t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments) } }
            }
        }(), t.ui.position, t.extend(t.expr[":"], { data: t.expr.createPseudo ? t.expr.createPseudo(function(e) { return function(i) { return !!t.data(i, e) } }) : function(e, i, n) { return !!t.data(e, n[3]) } }), t.fn.extend({ disableSelection: function() { var t = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown"; return function() { return this.on(t + ".ui-disableSelection", function(t) { t.preventDefault() }) } }(), enableSelection: function() { return this.off(".ui-disableSelection") } });
    var c = "ui-effects-",
        u = "ui-effects-style",
        d = "ui-effects-animated",
        p = t;
    t.effects = { effect: {} },
        function(t, e) {
            function i(t, e, i) { var n = u[e.type] || {}; return null == t ? i || !e.def ? null : e.def : (t = n.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : n.mod ? (t + n.mod) % n.mod : 0 > t ? 0 : t > n.max ? n.max : t) }

            function n(i) {
                var n = h(),
                    s = n._rgba = [];
                return i = i.toLowerCase(), f(l, function(t, o) {
                    var r, a = o.re.exec(i),
                        l = a && o.parse(a),
                        h = o.space || "rgba";
                    return l ? (r = n[h](l), n[c[h].cache] = r[c[h].cache], s = n._rgba = r._rgba, !1) : e
                }), s.length ? ("0,0,0,0" === s.join() && t.extend(s, o.transparent), n) : o[i]
            }

            function s(t, e, i) { return 1 > 6 * (i = (i + 1) % 1) ? t + 6 * (e - t) * i : 1 > 2 * i ? e : 2 > 3 * i ? t + 6 * (e - t) * (2 / 3 - i) : t }
            var o, r = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
                a = /^([\-+])=\s*(\d+\.?\d*)/,
                l = [{ re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, parse: function(t) { return [t[1], t[2], t[3], t[4]] } }, { re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, parse: function(t) { return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]] } }, { re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/, parse: function(t) { return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] } }, { re: /#([a-f0-9])([a-f0-9])([a-f0-9])/, parse: function(t) { return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)] } }, { re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, space: "hsla", parse: function(t) { return [t[1], t[2] / 100, t[3] / 100, t[4]] } }],
                h = t.Color = function(e, i, n, s) { return new t.Color.fn.parse(e, i, n, s) },
                c = { rgba: { props: { red: { idx: 0, type: "byte" }, green: { idx: 1, type: "byte" }, blue: { idx: 2, type: "byte" } } }, hsla: { props: { hue: { idx: 0, type: "degrees" }, saturation: { idx: 1, type: "percent" }, lightness: { idx: 2, type: "percent" } } } },
                u = { byte: { floor: !0, max: 255 }, percent: { max: 1 }, degrees: { mod: 360, floor: !0 } },
                d = h.support = {},
                p = t("<p>")[0],
                f = t.each;
            p.style.cssText = "background-color:rgba(1,1,1,.5)", d.rgba = p.style.backgroundColor.indexOf("rgba") > -1, f(c, function(t, e) { e.cache = "_" + t, e.props.alpha = { idx: 3, type: "percent", def: 1 } }), h.fn = t.extend(h.prototype, {
                parse: function(s, r, a, l) {
                    if (s === e) return this._rgba = [null, null, null, null], this;
                    (s.jquery || s.nodeType) && (s = t(s).css(r), r = e);
                    var u = this,
                        d = t.type(s),
                        p = this._rgba = [];
                    return r !== e && (s = [s, r, a, l], d = "array"), "string" === d ? this.parse(n(s) || o._default) : "array" === d ? (f(c.rgba.props, function(t, e) { p[e.idx] = i(s[e.idx], e) }), this) : "object" === d ? (f(c, s instanceof h ? function(t, e) { s[e.cache] && (u[e.cache] = s[e.cache].slice()) } : function(e, n) {
                        var o = n.cache;
                        f(n.props, function(t, e) {
                            if (!u[o] && n.to) {
                                if ("alpha" === t || null == s[t]) return;
                                u[o] = n.to(u._rgba)
                            }
                            u[o][e.idx] = i(s[t], e, !0)
                        }), u[o] && 0 > t.inArray(null, u[o].slice(0, 3)) && (u[o][3] = 1, n.from && (u._rgba = n.from(u[o])))
                    }), this) : e
                },
                is: function(t) {
                    var i = h(t),
                        n = !0,
                        s = this;
                    return f(c, function(t, o) { var r, a = i[o.cache]; return a && (r = s[o.cache] || o.to && o.to(s._rgba) || [], f(o.props, function(t, i) { return null != a[i.idx] ? n = a[i.idx] === r[i.idx] : e })), n }), n
                },
                _space: function() {
                    var t = [],
                        e = this;
                    return f(c, function(i, n) { e[n.cache] && t.push(i) }), t.pop()
                },
                transition: function(t, e) {
                    var n = h(t),
                        s = n._space(),
                        o = c[s],
                        r = 0 === this.alpha() ? h("transparent") : this,
                        a = r[o.cache] || o.to(r._rgba),
                        l = a.slice();
                    return n = n[o.cache], f(o.props, function(t, s) {
                        var o = s.idx,
                            r = a[o],
                            h = n[o],
                            c = u[s.type] || {};
                        null !== h && (null === r ? l[o] = h : (c.mod && (h - r > c.mod / 2 ? r += c.mod : r - h > c.mod / 2 && (r -= c.mod)), l[o] = i((h - r) * e + r, s)))
                    }), this[s](l)
                },
                blend: function(e) {
                    if (1 === this._rgba[3]) return this;
                    var i = this._rgba.slice(),
                        n = i.pop(),
                        s = h(e)._rgba;
                    return h(t.map(i, function(t, e) { return (1 - n) * s[e] + n * t }))
                },
                toRgbaString: function() {
                    var e = "rgba(",
                        i = t.map(this._rgba, function(t, e) { return null == t ? e > 2 ? 1 : 0 : t });
                    return 1 === i[3] && (i.pop(), e = "rgb("), e + i.join() + ")"
                },
                toHslaString: function() {
                    var e = "hsla(",
                        i = t.map(this.hsla(), function(t, e) { return null == t && (t = e > 2 ? 1 : 0), e && 3 > e && (t = Math.round(100 * t) + "%"), t });
                    return 1 === i[3] && (i.pop(), e = "hsl("), e + i.join() + ")"
                },
                toHexString: function(e) {
                    var i = this._rgba.slice(),
                        n = i.pop();
                    return e && i.push(~~(255 * n)), "#" + t.map(i, function(t) { return 1 === (t = (t || 0).toString(16)).length ? "0" + t : t }).join("")
                },
                toString: function() { return 0 === this._rgba[3] ? "transparent" : this.toRgbaString() }
            }), h.fn.parse.prototype = h.fn, c.hsla.to = function(t) {
                if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
                var e, i, n = t[0] / 255,
                    s = t[1] / 255,
                    o = t[2] / 255,
                    r = t[3],
                    a = Math.max(n, s, o),
                    l = Math.min(n, s, o),
                    h = a - l,
                    c = a + l,
                    u = .5 * c;
                return e = l === a ? 0 : n === a ? 60 * (s - o) / h + 360 : s === a ? 60 * (o - n) / h + 120 : 60 * (n - s) / h + 240, i = 0 === h ? 0 : .5 >= u ? h / c : h / (2 - c), [Math.round(e) % 360, i, u, null == r ? 1 : r]
            }, c.hsla.from = function(t) {
                if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
                var e = t[0] / 360,
                    i = t[1],
                    n = t[2],
                    o = t[3],
                    r = .5 >= n ? n * (1 + i) : n + i - n * i,
                    a = 2 * n - r;
                return [Math.round(255 * s(a, r, e + 1 / 3)), Math.round(255 * s(a, r, e)), Math.round(255 * s(a, r, e - 1 / 3)), o]
            }, f(c, function(n, s) {
                var o = s.props,
                    r = s.cache,
                    l = s.to,
                    c = s.from;
                h.fn[n] = function(n) {
                    if (l && !this[r] && (this[r] = l(this._rgba)), n === e) return this[r].slice();
                    var s, a = t.type(n),
                        u = "array" === a || "object" === a ? n : arguments,
                        d = this[r].slice();
                    return f(o, function(t, e) {
                        var n = u["object" === a ? t : e.idx];
                        null == n && (n = d[e.idx]), d[e.idx] = i(n, e)
                    }), c ? ((s = h(c(d)))[r] = d, s) : h(d)
                }, f(o, function(e, i) {
                    h.fn[e] || (h.fn[e] = function(s) {
                        var o, r = t.type(s),
                            l = "alpha" === e ? this._hsla ? "hsla" : "rgba" : n,
                            h = this[l](),
                            c = h[i.idx];
                        return "undefined" === r ? c : ("function" === r && (s = s.call(this, c), r = t.type(s)), null == s && i.empty ? this : ("string" === r && ((o = a.exec(s)) && (s = c + parseFloat(o[2]) * ("+" === o[1] ? 1 : -1))), h[i.idx] = s, this[l](h)))
                    })
                })
            }), h.hook = function(e) {
                var i = e.split(" ");
                f(i, function(e, i) {
                    t.cssHooks[i] = {
                        set: function(e, s) {
                            var o, r, a = "";
                            if ("transparent" !== s && ("string" !== t.type(s) || (o = n(s)))) {
                                if (s = h(o || s), !d.rgba && 1 !== s._rgba[3]) {
                                    for (r = "backgroundColor" === i ? e.parentNode : e;
                                        ("" === a || "transparent" === a) && r && r.style;) try { a = t.css(r, "backgroundColor"), r = r.parentNode } catch (l) {}
                                    s = s.blend(a && "transparent" !== a ? a : "_default")
                                }
                                s = s.toRgbaString()
                            }
                            try { e.style[i] = s } catch (l) {}
                        }
                    }, t.fx.step[i] = function(e) { e.colorInit || (e.start = h(e.elem, i), e.end = h(e.end), e.colorInit = !0), t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos)) }
                })
            }, h.hook(r), t.cssHooks.borderColor = { expand: function(t) { var e = {}; return f(["Top", "Right", "Bottom", "Left"], function(i, n) { e["border" + n + "Color"] = t }), e } }, o = t.Color.names = { aqua: "#00ffff", black: "#000000", blue: "#0000ff", fuchsia: "#ff00ff", gray: "#808080", green: "#008000", lime: "#00ff00", maroon: "#800000", navy: "#000080", olive: "#808000", purple: "#800080", red: "#ff0000", silver: "#c0c0c0", teal: "#008080", white: "#ffffff", yellow: "#ffff00", transparent: [null, null, null, 0], _default: "#ffffff" }
        }(p),
        function() {
            function e(e) {
                var i, n, s = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle,
                    o = {};
                if (s && s.length && s[0] && s[s[0]])
                    for (n = s.length; n--;) "string" == typeof s[i = s[n]] && (o[t.camelCase(i)] = s[i]);
                else
                    for (i in s) "string" == typeof s[i] && (o[i] = s[i]);
                return o
            }

            function i(e, i) { var n, o, r = {}; for (n in i) o = i[n], e[n] !== o && (s[n] || (t.fx.step[n] || !isNaN(parseFloat(o))) && (r[n] = o)); return r }
            var n = ["add", "remove", "toggle"],
                s = { border: 1, borderBottom: 1, borderColor: 1, borderLeft: 1, borderRight: 1, borderTop: 1, borderWidth: 1, margin: 1, padding: 1 };
            t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(e, i) {
                t.fx.step[i] = function(t) {
                    ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (p.style(t.elem, i, t.end), t.setAttr = !0)
                }
            }), t.fn.addBack || (t.fn.addBack = function(t) { return this.add(null == t ? this.prevObject : this.prevObject.filter(t)) }), t.effects.animateClass = function(s, o, r, a) {
                var l = t.speed(o, r, a);
                return this.queue(function() {
                    var o, r = t(this),
                        a = r.attr("class") || "",
                        h = l.children ? r.find("*").addBack() : r;
                    h = h.map(function() { return { el: t(this), start: e(this) } }), (o = function() { t.each(n, function(t, e) { s[e] && r[e + "Class"](s[e]) }) })(), h = h.map(function() { return this.end = e(this.el[0]), this.diff = i(this.start, this.end), this }), r.attr("class", a), h = h.map(function() {
                        var e = this,
                            i = t.Deferred(),
                            n = t.extend({}, l, { queue: !1, complete: function() { i.resolve(e) } });
                        return this.el.animate(this.diff, n), i.promise()
                    }), t.when.apply(t, h.get()).done(function() {
                        o(), t.each(arguments, function() {
                            var e = this.el;
                            t.each(this.diff, function(t) { e.css(t, "") })
                        }), l.complete.call(r[0])
                    })
                })
            }, t.fn.extend({ addClass: function(e) { return function(i, n, s, o) { return n ? t.effects.animateClass.call(this, { add: i }, n, s, o) : e.apply(this, arguments) } }(t.fn.addClass), removeClass: function(e) { return function(i, n, s, o) { return arguments.length > 1 ? t.effects.animateClass.call(this, { remove: i }, n, s, o) : e.apply(this, arguments) } }(t.fn.removeClass), toggleClass: function(e) { return function(i, n, s, o, r) { return "boolean" == typeof n || void 0 === n ? s ? t.effects.animateClass.call(this, n ? { add: i } : { remove: i }, s, o, r) : e.apply(this, arguments) : t.effects.animateClass.call(this, { toggle: i }, n, s, o) } }(t.fn.toggleClass), switchClass: function(e, i, n, s, o) { return t.effects.animateClass.call(this, { add: i, remove: e }, n, s, o) } })
        }(),
        function() {
            function e(e, i, n, s) { return t.isPlainObject(e) && (i = e, e = e.effect), e = { effect: e }, null == i && (i = {}), t.isFunction(i) && (s = i, n = null, i = {}), ("number" == typeof i || t.fx.speeds[i]) && (s = n, n = i, i = {}), t.isFunction(n) && (s = n, n = null), i && t.extend(e, i), n = n || i.duration, e.duration = t.fx.off ? 0 : "number" == typeof n ? n : n in t.fx.speeds ? t.fx.speeds[n] : t.fx.speeds._default, e.complete = s || i.complete, e }

            function i(e) { return !(e && "number" != typeof e && !t.fx.speeds[e]) || ("string" == typeof e && !t.effects.effect[e] || (!!t.isFunction(e) || "object" == typeof e && !e.effect)) }

            function n(t, e) {
                var i = e.outerWidth(),
                    n = e.outerHeight(),
                    s = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/.exec(t) || ["", 0, i, n, 0];
                return { top: parseFloat(s[1]) || 0, right: "auto" === s[2] ? i : parseFloat(s[2]), bottom: "auto" === s[3] ? n : parseFloat(s[3]), left: parseFloat(s[4]) || 0 }
            }
            t.expr && t.expr.filters && t.expr.filters.animated && (t.expr.filters.animated = function(e) { return function(i) { return !!t(i).data(d) || e(i) } }(t.expr.filters.animated)), !1 !== t.uiBackCompat && t.extend(t.effects, {
                save: function(t, e) { for (var i = 0, n = e.length; n > i; i++) null !== e[i] && t.data(c + e[i], t[0].style[e[i]]) },
                restore: function(t, e) { for (var i, n = 0, s = e.length; s > n; n++) null !== e[n] && (i = t.data(c + e[n]), t.css(e[n], i)) },
                setMode: function(t, e) { return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e },
                createWrapper: function(e) {
                    if (e.parent().is(".ui-effects-wrapper")) return e.parent();
                    var i = { width: e.outerWidth(!0), height: e.outerHeight(!0), float: e.css("float") },
                        n = t("<div></div>").addClass("ui-effects-wrapper").css({ fontSize: "100%", background: "transparent", border: "none", margin: 0, padding: 0 }),
                        s = { width: e.width(), height: e.height() },
                        o = document.activeElement;
                    try { o.id } catch (r) { o = document.body }
                    return e.wrap(n), (e[0] === o || t.contains(e[0], o)) && t(o).trigger("focus"), n = e.parent(), "static" === e.css("position") ? (n.css({ position: "relative" }), e.css({ position: "relative" })) : (t.extend(i, { position: e.css("position"), zIndex: e.css("z-index") }), t.each(["top", "left", "bottom", "right"], function(t, n) { i[n] = e.css(n), isNaN(parseInt(i[n], 10)) && (i[n] = "auto") }), e.css({ position: "relative", top: 0, left: 0, right: "auto", bottom: "auto" })), e.css(s), n.css(i).show()
                },
                removeWrapper: function(e) { var i = document.activeElement; return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === i || t.contains(e[0], i)) && t(i).trigger("focus")), e }
            }), t.extend(t.effects, {
                version: "1.12.1",
                define: function(e, i, n) { return n || (n = i, i = "effect"), t.effects.effect[e] = n, t.effects.effect[e].mode = i, n },
                scaledDimensions: function(t, e, i) {
                    if (0 === e) return { height: 0, width: 0, outerHeight: 0, outerWidth: 0 };
                    var n = "horizontal" !== i ? (e || 100) / 100 : 1,
                        s = "vertical" !== i ? (e || 100) / 100 : 1;
                    return { height: t.height() * s, width: t.width() * n, outerHeight: t.outerHeight() * s, outerWidth: t.outerWidth() * n }
                },
                clipToBox: function(t) { return { width: t.clip.right - t.clip.left, height: t.clip.bottom - t.clip.top, left: t.clip.left, top: t.clip.top } },
                unshift: function(t, e, i) {
                    var n = t.queue();
                    e > 1 && n.splice.apply(n, [1, 0].concat(n.splice(e, i))), t.dequeue()
                },
                saveStyle: function(t) { t.data(u, t[0].style.cssText) },
                restoreStyle: function(t) { t[0].style.cssText = t.data(u) || "", t.removeData(u) },
                mode: function(t, e) { var i = t.is(":hidden"); return "toggle" === e && (e = i ? "show" : "hide"), (i ? "hide" === e : "show" === e) && (e = "none"), e },
                getBaseline: function(t, e) {
                    var i, n;
                    switch (t[0]) {
                        case "top":
                            i = 0;
                            break;
                        case "middle":
                            i = .5;
                            break;
                        case "bottom":
                            i = 1;
                            break;
                        default:
                            i = t[0] / e.height
                    }
                    switch (t[1]) {
                        case "left":
                            n = 0;
                            break;
                        case "center":
                            n = .5;
                            break;
                        case "right":
                            n = 1;
                            break;
                        default:
                            n = t[1] / e.width
                    }
                    return { x: n, y: i }
                },
                createPlaceholder: function(e) {
                    var i, n = e.css("position"),
                        s = e.position();
                    return e.css({ marginTop: e.css("marginTop"), marginBottom: e.css("marginBottom"), marginLeft: e.css("marginLeft"), marginRight: e.css("marginRight") }).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()), /^(static|relative)/.test(n) && (n = "absolute", i = t("<" + e[0].nodeName + ">").insertAfter(e).css({ display: /^(inline|ruby)/.test(e.css("display")) ? "inline-block" : "block", visibility: "hidden", marginTop: e.css("marginTop"), marginBottom: e.css("marginBottom"), marginLeft: e.css("marginLeft"), marginRight: e.css("marginRight"), float: e.css("float") }).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).addClass("ui-effects-placeholder"), e.data(c + "placeholder", i)), e.css({ position: n, left: s.left, top: s.top }), i
                },
                removePlaceholder: function(t) {
                    var e = c + "placeholder",
                        i = t.data(e);
                    i && (i.remove(), t.removeData(e))
                },
                cleanUp: function(e) { t.effects.restoreStyle(e), t.effects.removePlaceholder(e) },
                setTransition: function(e, i, n, s) {
                    return s = s || {}, t.each(i, function(t, i) {
                        var o = e.cssUnit(i);
                        o[0] > 0 && (s[i] = o[0] * n + o[1])
                    }), s
                }
            }), t.fn.extend({
                effect: function() {
                    function i(e) {
                        function i() { a.removeData(d), t.effects.cleanUp(a), "hide" === n.mode && a.hide(), r() }

                        function r() { t.isFunction(l) && l.call(a[0]), t.isFunction(e) && e() }
                        var a = t(this);
                        n.mode = c.shift(), !1 === t.uiBackCompat || o ? "none" === n.mode ? (a[h](), r()) : s.call(a[0], n, i) : (a.is(":hidden") ? "hide" === h : "show" === h) ? (a[h](), r()) : s.call(a[0], n, r)
                    }
                    var n = e.apply(this, arguments),
                        s = t.effects.effect[n.effect],
                        o = s.mode,
                        r = n.queue,
                        a = r || "fx",
                        l = n.complete,
                        h = n.mode,
                        c = [],
                        u = function(e) {
                            var i = t(this),
                                n = t.effects.mode(i, h) || o;
                            i.data(d, !0), c.push(n), o && ("show" === n || n === o && "hide" === n) && i.show(), o && "none" === n || t.effects.saveStyle(i), t.isFunction(e) && e()
                        };
                    return t.fx.off || !s ? h ? this[h](n.duration, l) : this.each(function() { l && l.call(this) }) : !1 === r ? this.each(u).each(i) : this.queue(a, u).queue(a, i)
                },
                show: function(t) { return function(n) { if (i(n)) return t.apply(this, arguments); var s = e.apply(this, arguments); return s.mode = "show", this.effect.call(this, s) } }(t.fn.show),
                hide: function(t) { return function(n) { if (i(n)) return t.apply(this, arguments); var s = e.apply(this, arguments); return s.mode = "hide", this.effect.call(this, s) } }(t.fn.hide),
                toggle: function(t) { return function(n) { if (i(n) || "boolean" == typeof n) return t.apply(this, arguments); var s = e.apply(this, arguments); return s.mode = "toggle", this.effect.call(this, s) } }(t.fn.toggle),
                cssUnit: function(e) {
                    var i = this.css(e),
                        n = [];
                    return t.each(["em", "px", "%", "pt"], function(t, e) { i.indexOf(e) > 0 && (n = [parseFloat(i), e]) }), n
                },
                cssClip: function(t) { return t ? this.css("clip", "rect(" + t.top + "px " + t.right + "px " + t.bottom + "px " + t.left + "px)") : n(this.css("clip"), this) },
                transfer: function(e, i) {
                    var n = t(this),
                        s = t(e.to),
                        o = "fixed" === s.css("position"),
                        r = t("body"),
                        a = o ? r.scrollTop() : 0,
                        l = o ? r.scrollLeft() : 0,
                        h = s.offset(),
                        c = {
                            top: h.top - a,
                            left: h.left - l,
                            height: s.innerHeight(),
                            width: s.innerWidth()
                        },
                        u = n.offset(),
                        d = t("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(e.className).css({ top: u.top - a, left: u.left - l, height: n.innerHeight(), width: n.innerWidth(), position: o ? "fixed" : "absolute" }).animate(c, e.duration, e.easing, function() { d.remove(), t.isFunction(i) && i() })
                }
            }), t.fx.step.clip = function(e) { e.clipInit || (e.start = t(e.elem).cssClip(), "string" == typeof e.end && (e.end = n(e.end, e.elem)), e.clipInit = !0), t(e.elem).cssClip({ top: e.pos * (e.end.top - e.start.top) + e.start.top, right: e.pos * (e.end.right - e.start.right) + e.start.right, bottom: e.pos * (e.end.bottom - e.start.bottom) + e.start.bottom, left: e.pos * (e.end.left - e.start.left) + e.start.left }) }
        }(),
        function() {
            var e = {};
            t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(t, i) { e[i] = function(e) { return Math.pow(e, t + 2) } }), t.extend(e, {
                Sine: function(t) { return 1 - Math.cos(t * Math.PI / 2) },
                Circ: function(t) { return 1 - Math.sqrt(1 - t * t) },
                Elastic: function(t) { return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15) },
                Back: function(t) { return t * t * (3 * t - 2) },
                Bounce: function(t) {
                    for (var e, i = 4;
                        ((e = Math.pow(2, --i)) - 1) / 11 > t;);
                    return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
                }
            }), t.each(e, function(e, i) { t.easing["easeIn" + e] = i, t.easing["easeOut" + e] = function(t) { return 1 - i(1 - t) }, t.easing["easeInOut" + e] = function(t) { return .5 > t ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2 } })
        }();
    t.effects;
    t.effects.define("blind", "hide", function(e, i) {
        var n = { up: ["bottom", "top"], vertical: ["bottom", "top"], down: ["top", "bottom"], left: ["right", "left"], horizontal: ["right", "left"], right: ["left", "right"] },
            s = t(this),
            o = e.direction || "up",
            r = s.cssClip(),
            a = { clip: t.extend({}, r) },
            l = t.effects.createPlaceholder(s);
        a.clip[n[o][0]] = a.clip[n[o][1]], "show" === e.mode && (s.cssClip(a.clip), l && l.css(t.effects.clipToBox(a)), a.clip = r), l && l.animate(t.effects.clipToBox(a), e.duration, e.easing), s.animate(a, { queue: !1, duration: e.duration, easing: e.easing, complete: i })
    }), t.effects.define("bounce", function(e, i) {
        var n, s, o, r = t(this),
            a = e.mode,
            l = "hide" === a,
            h = "show" === a,
            c = e.direction || "up",
            u = e.distance,
            d = e.times || 5,
            p = 2 * d + (h || l ? 1 : 0),
            f = e.duration / p,
            m = e.easing,
            g = "up" === c || "down" === c ? "top" : "left",
            v = "up" === c || "left" === c,
            _ = 0,
            y = r.queue().length;
        for (t.effects.createPlaceholder(r), o = r.css(g), u || (u = r["top" === g ? "outerHeight" : "outerWidth"]() / 3), h && ((s = { opacity: 1 })[g] = o, r.css("opacity", 0).css(g, v ? 2 * -u : 2 * u).animate(s, f, m)), l && (u /= Math.pow(2, d - 1)), (s = {})[g] = o; d > _; _++)(n = {})[g] = (v ? "-=" : "+=") + u, r.animate(n, f, m).animate(s, f, m), u = l ? 2 * u : u / 2;
        l && ((n = { opacity: 0 })[g] = (v ? "-=" : "+=") + u, r.animate(n, f, m)), r.queue(i), t.effects.unshift(r, y, p + 1)
    }), t.effects.define("clip", "hide", function(e, i) {
        var n, s = {},
            o = t(this),
            r = e.direction || "vertical",
            a = "both" === r,
            l = a || "horizontal" === r,
            h = a || "vertical" === r;
        n = o.cssClip(), s.clip = { top: h ? (n.bottom - n.top) / 2 : n.top, right: l ? (n.right - n.left) / 2 : n.right, bottom: h ? (n.bottom - n.top) / 2 : n.bottom, left: l ? (n.right - n.left) / 2 : n.left }, t.effects.createPlaceholder(o), "show" === e.mode && (o.cssClip(s.clip), s.clip = n), o.animate(s, { queue: !1, duration: e.duration, easing: e.easing, complete: i })
    }), t.effects.define("drop", "hide", function(e, i) {
        var n, s = t(this),
            o = "show" === e.mode,
            r = e.direction || "left",
            a = "up" === r || "down" === r ? "top" : "left",
            l = "up" === r || "left" === r ? "-=" : "+=",
            h = "+=" === l ? "-=" : "+=",
            c = { opacity: 0 };
        t.effects.createPlaceholder(s), n = e.distance || s["top" === a ? "outerHeight" : "outerWidth"](!0) / 2, c[a] = l + n, o && (s.css(c), c[a] = h + n, c.opacity = 1), s.animate(c, { queue: !1, duration: e.duration, easing: e.easing, complete: i })
    }), t.effects.define("explode", "hide", function(e, i) {
        function n() { _.push(this), _.length === u * d && s() }

        function s() { p.css({ visibility: "visible" }), t(_).remove(), i() }
        var o, r, a, l, h, c, u = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3,
            d = u,
            p = t(this),
            f = "show" === e.mode,
            m = p.show().css("visibility", "hidden").offset(),
            g = Math.ceil(p.outerWidth() / d),
            v = Math.ceil(p.outerHeight() / u),
            _ = [];
        for (o = 0; u > o; o++)
            for (l = m.top + o * v, c = o - (u - 1) / 2, r = 0; d > r; r++) a = m.left + r * g, h = r - (d - 1) / 2, p.clone().appendTo("body").wrap("<div></div>").css({ position: "absolute", visibility: "visible", left: -r * g, top: -o * v }).parent().addClass("ui-effects-explode").css({ position: "absolute", overflow: "hidden", width: g, height: v, left: a + (f ? h * g : 0), top: l + (f ? c * v : 0), opacity: f ? 0 : 1 }).animate({ left: a + (f ? 0 : h * g), top: l + (f ? 0 : c * v), opacity: f ? 1 : 0 }, e.duration || 500, e.easing, n)
    }), t.effects.define("fade", "toggle", function(e, i) {
        var n = "show" === e.mode;
        t(this).css("opacity", n ? 0 : 1).animate({ opacity: n ? 1 : 0 }, { queue: !1, duration: e.duration, easing: e.easing, complete: i })
    }), t.effects.define("fold", "hide", function(e, i) {
        var n = t(this),
            s = e.mode,
            o = "show" === s,
            r = "hide" === s,
            a = e.size || 15,
            l = /([0-9]+)%/.exec(a),
            h = !!e.horizFirst ? ["right", "bottom"] : ["bottom", "right"],
            c = e.duration / 2,
            u = t.effects.createPlaceholder(n),
            d = n.cssClip(),
            p = { clip: t.extend({}, d) },
            f = { clip: t.extend({}, d) },
            m = [d[h[0]], d[h[1]]],
            g = n.queue().length;
        l && (a = parseInt(l[1], 10) / 100 * m[r ? 0 : 1]), p.clip[h[0]] = a, f.clip[h[0]] = a, f.clip[h[1]] = 0, o && (n.cssClip(f.clip), u && u.css(t.effects.clipToBox(f)), f.clip = d), n.queue(function(i) { u && u.animate(t.effects.clipToBox(p), c, e.easing).animate(t.effects.clipToBox(f), c, e.easing), i() }).animate(p, c, e.easing).animate(f, c, e.easing).queue(i), t.effects.unshift(n, g, 4)
    }), t.effects.define("highlight", "show", function(e, i) {
        var n = t(this),
            s = { backgroundColor: n.css("backgroundColor") };
        "hide" === e.mode && (s.opacity = 0), t.effects.saveStyle(n), n.css({ backgroundImage: "none", backgroundColor: e.color || "#ffff99" }).animate(s, { queue: !1, duration: e.duration, easing: e.easing, complete: i })
    }), t.effects.define("size", function(e, i) {
        var n, s, o, r = t(this),
            a = ["fontSize"],
            l = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
            h = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
            c = e.mode,
            u = "effect" !== c,
            d = e.scale || "both",
            p = e.origin || ["middle", "center"],
            f = r.css("position"),
            m = r.position(),
            g = t.effects.scaledDimensions(r),
            v = e.from || g,
            _ = e.to || t.effects.scaledDimensions(r, 0);
        t.effects.createPlaceholder(r), "show" === c && (o = v, v = _, _ = o), s = { from: { y: v.height / g.height, x: v.width / g.width }, to: { y: _.height / g.height, x: _.width / g.width } }, ("box" === d || "both" === d) && (s.from.y !== s.to.y && (v = t.effects.setTransition(r, l, s.from.y, v), _ = t.effects.setTransition(r, l, s.to.y, _)), s.from.x !== s.to.x && (v = t.effects.setTransition(r, h, s.from.x, v), _ = t.effects.setTransition(r, h, s.to.x, _))), ("content" === d || "both" === d) && s.from.y !== s.to.y && (v = t.effects.setTransition(r, a, s.from.y, v), _ = t.effects.setTransition(r, a, s.to.y, _)), p && (n = t.effects.getBaseline(p, g), v.top = (g.outerHeight - v.outerHeight) * n.y + m.top, v.left = (g.outerWidth - v.outerWidth) * n.x + m.left, _.top = (g.outerHeight - _.outerHeight) * n.y + m.top, _.left = (g.outerWidth - _.outerWidth) * n.x + m.left), r.css(v), ("content" === d || "both" === d) && (l = l.concat(["marginTop", "marginBottom"]).concat(a), h = h.concat(["marginLeft", "marginRight"]), r.find("*[width]").each(function() {
            var i = t(this),
                n = t.effects.scaledDimensions(i),
                o = { height: n.height * s.from.y, width: n.width * s.from.x, outerHeight: n.outerHeight * s.from.y, outerWidth: n.outerWidth * s.from.x },
                r = { height: n.height * s.to.y, width: n.width * s.to.x, outerHeight: n.height * s.to.y, outerWidth: n.width * s.to.x };
            s.from.y !== s.to.y && (o = t.effects.setTransition(i, l, s.from.y, o), r = t.effects.setTransition(i, l, s.to.y, r)), s.from.x !== s.to.x && (o = t.effects.setTransition(i, h, s.from.x, o), r = t.effects.setTransition(i, h, s.to.x, r)), u && t.effects.saveStyle(i), i.css(o), i.animate(r, e.duration, e.easing, function() { u && t.effects.restoreStyle(i) })
        })), r.animate(_, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function() {
                var e = r.offset();
                0 === _.opacity && r.css("opacity", v.opacity), u || (r.css("position", "static" === f ? "relative" : f).offset(e), t.effects.saveStyle(r)), i()
            }
        })
    }), t.effects.define("scale", function(e, i) {
        var n = t(this),
            s = e.mode,
            o = parseInt(e.percent, 10) || (0 === parseInt(e.percent, 10) ? 0 : "effect" !== s ? 0 : 100),
            r = t.extend(!0, { from: t.effects.scaledDimensions(n), to: t.effects.scaledDimensions(n, o, e.direction || "both"), origin: e.origin || ["middle", "center"] }, e);
        e.fade && (r.from.opacity = 1, r.to.opacity = 0), t.effects.effect.size.call(this, r, i)
    }), t.effects.define("puff", "hide", function(e, i) {
        var n = t.extend(!0, {}, e, { fade: !0, percent: parseInt(e.percent, 10) || 150 });
        t.effects.effect.scale.call(this, n, i)
    }), t.effects.define("pulsate", "show", function(e, i) {
        var n = t(this),
            s = e.mode,
            o = "show" === s,
            r = o || "hide" === s,
            a = 2 * (e.times || 5) + (r ? 1 : 0),
            l = e.duration / a,
            h = 0,
            c = 1,
            u = n.queue().length;
        for ((o || !n.is(":visible")) && (n.css("opacity", 0).show(), h = 1); a > c; c++) n.animate({ opacity: h }, l, e.easing), h = 1 - h;
        n.animate({ opacity: h }, l, e.easing), n.queue(i), t.effects.unshift(n, u, a + 1)
    }), t.effects.define("shake", function(e, i) {
        var n = 1,
            s = t(this),
            o = e.direction || "left",
            r = e.distance || 20,
            a = e.times || 3,
            l = 2 * a + 1,
            h = Math.round(e.duration / l),
            c = "up" === o || "down" === o ? "top" : "left",
            u = "up" === o || "left" === o,
            d = {},
            p = {},
            f = {},
            m = s.queue().length;
        for (t.effects.createPlaceholder(s), d[c] = (u ? "-=" : "+=") + r, p[c] = (u ? "+=" : "-=") + 2 * r, f[c] = (u ? "-=" : "+=") + 2 * r, s.animate(d, h, e.easing); a > n; n++) s.animate(p, h, e.easing).animate(f, h, e.easing);
        s.animate(p, h, e.easing).animate(d, h / 2, e.easing).queue(i), t.effects.unshift(s, m, l + 1)
    }), t.effects.define("slide", "show", function(e, i) {
        var n, s, o = t(this),
            r = { up: ["bottom", "top"], down: ["top", "bottom"], left: ["right", "left"], right: ["left", "right"] },
            a = e.mode,
            l = e.direction || "left",
            h = "up" === l || "down" === l ? "top" : "left",
            c = "up" === l || "left" === l,
            u = e.distance || o["top" === h ? "outerHeight" : "outerWidth"](!0),
            d = {};
        t.effects.createPlaceholder(o), n = o.cssClip(), s = o.position()[h], d[h] = (c ? -1 : 1) * u + s, d.clip = o.cssClip(), d.clip[r[l][1]] = d.clip[r[l][0]], "show" === a && (o.cssClip(d.clip), o.css(h, d[h]), d.clip = n, d[h] = s), o.animate(d, { queue: !1, duration: e.duration, easing: e.easing, complete: i })
    }), !1 !== t.uiBackCompat && t.effects.define("transfer", function(e, i) { t(this).transfer(e, i) }), t.ui.focusable = function(i, n) { var s, o, r, a, l, h = i.nodeName.toLowerCase(); return "area" === h ? (o = (s = i.parentNode).name, !(!i.href || !o || "map" !== s.nodeName.toLowerCase()) && ((r = t("img[usemap='#" + o + "']")).length > 0 && r.is(":visible"))) : (/^(input|select|textarea|button|object)$/.test(h) ? (a = !i.disabled) && ((l = t(i).closest("fieldset")[0]) && (a = !l.disabled)) : a = "a" === h && i.href || n, a && t(i).is(":visible") && e(t(i))) }, t.extend(t.expr[":"], { focusable: function(e) { return t.ui.focusable(e, null != t.attr(e, "tabindex")) } }), t.ui.focusable, t.fn.form = function() { return "string" == typeof this[0].form ? this.closest("form") : t(this[0].form) }, t.ui.formResetMixin = {
        _formResetHandler: function() {
            var e = t(this);
            setTimeout(function() {
                var i = e.data("ui-form-reset-instances");
                t.each(i, function() { this.refresh() })
            })
        },
        _bindFormResetHandler: function() {
            if (this.form = this.element.form(), this.form.length) {
                var t = this.form.data("ui-form-reset-instances") || [];
                t.length || this.form.on("reset.ui-form-reset", this._formResetHandler), t.push(this), this.form.data("ui-form-reset-instances", t)
            }
        },
        _unbindFormResetHandler: function() {
            if (this.form.length) {
                var e = this.form.data("ui-form-reset-instances");
                e.splice(t.inArray(this, e), 1), e.length ? this.form.data("ui-form-reset-instances", e) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")
            }
        }
    }, "1.7" === t.fn.jquery.substring(0, 3) && (t.each(["Width", "Height"], function(e, i) {
        function n(e, i, n, o) { return t.each(s, function() { i -= parseFloat(t.css(e, "padding" + this)) || 0, n && (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0), o && (i -= parseFloat(t.css(e, "margin" + this)) || 0) }), i }
        var s = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
            o = i.toLowerCase(),
            r = { innerWidth: t.fn.innerWidth, innerHeight: t.fn.innerHeight, outerWidth: t.fn.outerWidth, outerHeight: t.fn.outerHeight };
        t.fn["inner" + i] = function(e) { return void 0 === e ? r["inner" + i].call(this) : this.each(function() { t(this).css(o, n(this, e) + "px") }) }, t.fn["outer" + i] = function(e, s) { return "number" != typeof e ? r["outer" + i].call(this, e) : this.each(function() { t(this).css(o, n(this, e, !0, s) + "px") }) }
    }), t.fn.addBack = function(t) { return this.add(null == t ? this.prevObject : this.prevObject.filter(t)) }), t.ui.keyCode = { BACKSPACE: 8, COMMA: 188, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, LEFT: 37, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SPACE: 32, TAB: 9, UP: 38 }, t.ui.escapeSelector = function() { var t = /([!"#$%&'()*+,.\/:;<=>?@[\]^`{|}~])/g; return function(e) { return e.replace(t, "\\$1") } }(), t.fn.labels = function() { var e, i, n, s, o; return this[0].labels && this[0].labels.length ? this.pushStack(this[0].labels) : (s = this.eq(0).parents("label"), (n = this.attr("id")) && (o = (e = this.eq(0).parents().last()).add(e.length ? e.siblings() : this.siblings()), i = "label[for='" + t.ui.escapeSelector(n) + "']", s = s.add(o.find(i).addBack(i))), this.pushStack(s)) }, t.fn.scrollParent = function(e) {
        var i = this.css("position"),
            n = "absolute" === i,
            s = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
            o = this.parents().filter(function() { var e = t(this); return (!n || "static" !== e.css("position")) && s.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x")) }).eq(0);
        return "fixed" !== i && o.length ? o : t(this[0].ownerDocument || document)
    }, t.extend(t.expr[":"], {
        tabbable: function(e) {
            var i = t.attr(e, "tabindex"),
                n = null != i;
            return (!n || i >= 0) && t.ui.focusable(e, n)
        }
    }), t.fn.extend({ uniqueId: function() { var t = 0; return function() { return this.each(function() { this.id || (this.id = "ui-id-" + ++t) }) } }(), removeUniqueId: function() { return this.each(function() { /^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id") }) } }), t.widget("ui.accordion", {
        version: "1.12.1",
        options: { active: 0, animate: {}, classes: { "ui-accordion-header": "ui-corner-top", "ui-accordion-header-collapsed": "ui-corner-all", "ui-accordion-content": "ui-corner-bottom" }, collapsible: !1, event: "click", header: "> li > :first-child, > :not(li):even", heightStyle: "auto", icons: { activeHeader: "ui-icon-triangle-1-s", header: "ui-icon-triangle-1-e" }, activate: null, beforeActivate: null },
        hideProps: { borderTopWidth: "hide", borderBottomWidth: "hide", paddingTop: "hide", paddingBottom: "hide", height: "hide" },
        showProps: { borderTopWidth: "show", borderBottomWidth: "show", paddingTop: "show", paddingBottom: "show", height: "show" },
        _create: function() {
            var e = this.options;
            this.prevShow = this.prevHide = t(), this._addClass("ui-accordion", "ui-widget ui-helper-reset"), this.element.attr("role", "tablist"), e.collapsible || !1 !== e.active && null != e.active || (e.active = 0), this._processPanels(), 0 > e.active && (e.active += this.headers.length), this._refresh()
        },
        _getCreateEventData: function() { return { header: this.active, panel: this.active.length ? this.active.next() : t() } },
        _createIcons: function() {
            var e, i, n = this.options.icons;
            n && (e = t("<span>"), this._addClass(e, "ui-accordion-header-icon", "ui-icon " + n.header), e.prependTo(this.headers), i = this.active.children(".ui-accordion-header-icon"), this._removeClass(i, n.header)._addClass(i, null, n.activeHeader)._addClass(this.headers, "ui-accordion-icons"))
        },
        _destroyIcons: function() { this._removeClass(this.headers, "ui-accordion-icons"), this.headers.children(".ui-accordion-header-icon").remove() },
        _destroy: function() {
            var t;
            this.element.removeAttr("role"), this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(), this._destroyIcons(), t = this.headers.next().css("display", "").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(), "content" !== this.options.heightStyle && t.css("height", "")
        },
        _setOption: function(t, e) { return "active" === t ? void this._activate(e) : ("event" === t && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(e)), this._super(t, e), "collapsible" !== t || e || !1 !== this.options.active || this._activate(0), void("icons" === t && (this._destroyIcons(), e && this._createIcons()))) },
        _setOptionDisabled: function(t) { this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t), this._toggleClass(this.headers.add(this.headers.next()), null, "ui-state-disabled", !!t) },
        _keydown: function(e) {
            if (!e.altKey && !e.ctrlKey) {
                var i = t.ui.keyCode,
                    n = this.headers.length,
                    s = this.headers.index(e.target),
                    o = !1;
                switch (e.keyCode) {
                    case i.RIGHT:
                    case i.DOWN:
                        o = this.headers[(s + 1) % n];
                        break;
                    case i.LEFT:
                    case i.UP:
                        o = this.headers[(s - 1 + n) % n];
                        break;
                    case i.SPACE:
                    case i.ENTER:
                        this._eventHandler(e);
                        break;
                    case i.HOME:
                        o = this.headers[0];
                        break;
                    case i.END:
                        o = this.headers[n - 1]
                }
                o && (t(e.target).attr("tabIndex", -1), t(o).attr("tabIndex", 0), t(o).trigger("focus"), e.preventDefault())
            }
        },
        _panelKeyDown: function(e) { e.keyCode === t.ui.keyCode.UP && e.ctrlKey && t(e.currentTarget).prev().trigger("focus") },
        refresh: function() {
            var e = this.options;
            this._processPanels(), !1 === e.active && !0 === e.collapsible || !this.headers.length ? (e.active = !1, this.active = t()) : !1 === e.active ? this._activate(0) : this.active.length && !t.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (e.active = !1, this.active = t()) : this._activate(Math.max(0, e.active - 1)) : e.active = this.headers.index(this.active), this._destroyIcons(), this._refresh()
        },
        _processPanels: function() {
            var t = this.headers,
                e = this.panels;
            this.headers = this.element.find(this.options.header), this._addClass(this.headers, "ui-accordion-header ui-accordion-header-collapsed", "ui-state-default"), this.panels = this.headers.next().filter(":not(.ui-accordion-content-active)").hide(), this._addClass(this.panels, "ui-accordion-content", "ui-helper-reset ui-widget-content"), e && (this._off(t.not(this.headers)), this._off(e.not(this.panels)))
        },
        _refresh: function() {
            var e, i = this.options,
                n = i.heightStyle,
                s = this.element.parent();
            this.active = this._findActive(i.active), this._addClass(this.active, "ui-accordion-header-active", "ui-state-active")._removeClass(this.active, "ui-accordion-header-collapsed"), this._addClass(this.active.next(), "ui-accordion-content-active"), this.active.next().show(), this.headers.attr("role", "tab").each(function() {
                var e = t(this),
                    i = e.uniqueId().attr("id"),
                    n = e.next(),
                    s = n.uniqueId().attr("id");
                e.attr("aria-controls", s), n.attr("aria-labelledby", i)
            }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({ "aria-selected": "false", "aria-expanded": "false", tabIndex: -1 }).next().attr({ "aria-hidden": "true" }).hide(), this.active.length ? this.active.attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 }).next().attr({ "aria-hidden": "false" }) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(i.event), "fill" === n ? (e = s.height(), this.element.siblings(":visible").each(function() {
                var i = t(this),
                    n = i.css("position");
                "absolute" !== n && "fixed" !== n && (e -= i.outerHeight(!0))
            }), this.headers.each(function() { e -= t(this).outerHeight(!0) }), this.headers.next().each(function() { t(this).height(Math.max(0, e - t(this).innerHeight() + t(this).height())) }).css("overflow", "auto")) : "auto" === n && (e = 0, this.headers.next().each(function() {
                var i = t(this).is(":visible");
                i || t(this).show(), e = Math.max(e, t(this).css("height", "").height()), i || t(this).hide()
            }).height(e))
        },
        _activate: function(e) {
            var i = this._findActive(e)[0];
            i !== this.active[0] && (i = i || this.active[0], this._eventHandler({ target: i, currentTarget: i, preventDefault: t.noop }))
        },
        _findActive: function(e) { return "number" == typeof e ? this.headers.eq(e) : t() },
        _setupEvents: function(e) {
            var i = { keydown: "_keydown" };
            e && t.each(e.split(" "), function(t, e) { i[e] = "_eventHandler" }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i), this._on(this.headers.next(), { keydown: "_panelKeyDown" }), this._hoverable(this.headers), this._focusable(this.headers)
        },
        _eventHandler: function(e) {
            var i, n, s = this.options,
                o = this.active,
                r = t(e.currentTarget),
                a = r[0] === o[0],
                l = a && s.collapsible,
                h = l ? t() : r.next(),
                c = { oldHeader: o, oldPanel: o.next(), newHeader: l ? t() : r, newPanel: h };
            e.preventDefault(), a && !s.collapsible || !1 === this._trigger("beforeActivate", e, c) || (s.active = !l && this.headers.index(r), this.active = a ? t() : r, this._toggle(c), this._removeClass(o, "ui-accordion-header-active", "ui-state-active"), s.icons && (i = o.children(".ui-accordion-header-icon"), this._removeClass(i, null, s.icons.activeHeader)._addClass(i, null, s.icons.header)), a || (this._removeClass(r, "ui-accordion-header-collapsed")._addClass(r, "ui-accordion-header-active", "ui-state-active"), s.icons && (n = r.children(".ui-accordion-header-icon"), this._removeClass(n, null, s.icons.header)._addClass(n, null, s.icons.activeHeader)), this._addClass(r.next(), "ui-accordion-content-active")))
        },
        _toggle: function(e) {
            var i = e.newPanel,
                n = this.prevShow.length ? this.prevShow : e.oldPanel;
            this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = i, this.prevHide = n, this.options.animate ? this._animate(i, n, e) : (n.hide(), i.show(), this._toggleComplete(e)), n.attr({ "aria-hidden": "true" }), n.prev().attr({ "aria-selected": "false", "aria-expanded": "false" }), i.length && n.length ? n.prev().attr({ tabIndex: -1, "aria-expanded": "false" }) : i.length && this.headers.filter(function() { return 0 === parseInt(t(this).attr("tabIndex"), 10) }).attr("tabIndex", -1), i.attr("aria-hidden", "false").prev().attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 })
        },
        _animate: function(t, e, i) {
            var n, s, o, r = this,
                a = 0,
                l = t.css("box-sizing"),
                h = t.length && (!e.length || t.index() < e.index()),
                c = this.options.animate || {},
                u = h && c.down || c,
                d = function() { r._toggleComplete(i) };
            return "number" == typeof u && (o = u), "string" == typeof u && (s = u), s = s || u.easing || c.easing, o = o || u.duration || c.duration, e.length ? t.length ? (n = t.show().outerHeight(), e.animate(this.hideProps, { duration: o, easing: s, step: function(t, e) { e.now = Math.round(t) } }), void t.hide().animate(this.showProps, { duration: o, easing: s, complete: d, step: function(t, i) { i.now = Math.round(t), "height" !== i.prop ? "content-box" === l && (a += i.now) : "content" !== r.options.heightStyle && (i.now = Math.round(n - e.outerHeight() - a), a = 0) } })) : e.animate(this.hideProps, o, s, d) : t.animate(this.showProps, o, s, d)
        },
        _toggleComplete: function(t) {
            var e = t.oldPanel,
                i = e.prev();
            this._removeClass(e, "ui-accordion-content-active"), this._removeClass(i, "ui-accordion-header-active")._addClass(i, "ui-accordion-header-collapsed"), e.length && (e.parent()[0].className = e.parent()[0].className), this._trigger("activate", null, t)
        }
    }), t.ui.safeActiveElement = function(t) { var e; try { e = t.activeElement } catch (i) { e = t.body } return e || (e = t.body), e.nodeName || (e = t.body), e }, t.widget("ui.menu", {
        version: "1.12.1",
        defaultElement: "<ul>",
        delay: 300,
        options: { icons: { submenu: "ui-icon-caret-1-e" }, items: "> *", menus: "ul", position: { my: "left top", at: "right top" }, role: "menu", blur: null, focus: null, select: null },
        _create: function() {
            this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().attr({ role: this.options.role, tabIndex: 0 }), this._addClass("ui-menu", "ui-widget ui-widget-content"), this._on({
                "mousedown .ui-menu-item": function(t) { t.preventDefault() },
                "click .ui-menu-item": function(e) {
                    var i = t(e.target),
                        n = t(t.ui.safeActiveElement(this.document[0]));
                    !this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(e), e.isPropagationStopped() || (this.mouseHandled = !0), i.has(".ui-menu").length ? this.expand(e) : !this.element.is(":focus") && n.closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                },
                "mouseenter .ui-menu-item": function(e) {
                    if (!this.previousFilter) {
                        var i = t(e.target).closest(".ui-menu-item"),
                            n = t(e.currentTarget);
                        i[0] === n[0] && (this._removeClass(n.siblings().children(".ui-state-active"), null, "ui-state-active"), this.focus(e, n))
                    }
                },
                mouseleave: "collapseAll",
                "mouseleave .ui-menu": "collapseAll",
                focus: function(t, e) {
                    var i = this.active || this.element.find(this.options.items).eq(0);
                    e || this.focus(t, i)
                },
                blur: function(e) { this._delay(function() {!t.contains(this.element[0], t.ui.safeActiveElement(this.document[0])) && this.collapseAll(e) }) },
                keydown: "_keydown"
            }), this.refresh(), this._on(this.document, { click: function(t) { this._closeOnDocumentClick(t) && this.collapseAll(t), this.mouseHandled = !1 } })
        },
        _destroy: function() {
            var e = this.element.find(".ui-menu-item").removeAttr("role aria-disabled").children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(), e.children().each(function() {
                var e = t(this);
                e.data("ui-menu-submenu-caret") && e.remove()
            })
        },
        _keydown: function(e) {
            var i, n, s, o, r = !0;
            switch (e.keyCode) {
                case t.ui.keyCode.PAGE_UP:
                    this.previousPage(e);
                    break;
                case t.ui.keyCode.PAGE_DOWN:
                    this.nextPage(e);
                    break;
                case t.ui.keyCode.HOME:
                    this._move("first", "first", e);
                    break;
                case t.ui.keyCode.END:
                    this._move("last", "last", e);
                    break;
                case t.ui.keyCode.UP:
                    this.previous(e);
                    break;
                case t.ui.keyCode.DOWN:
                    this.next(e);
                    break;
                case t.ui.keyCode.LEFT:
                    this.collapse(e);
                    break;
                case t.ui.keyCode.RIGHT:
                    this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
                    break;
                case t.ui.keyCode.ENTER:
                case t.ui.keyCode.SPACE:
                    this._activate(e);
                    break;
                case t.ui.keyCode.ESCAPE:
                    this.collapse(e);
                    break;
                default:
                    r = !1, n = this.previousFilter || "", o = !1, s = e.keyCode >= 96 && 105 >= e.keyCode ? "" + (e.keyCode - 96) : String.fromCharCode(e.keyCode), clearTimeout(this.filterTimer), s === n ? o = !0 : s = n + s, i = this._filterMenuItems(s), (i = o && -1 !== i.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : i).length || (s = String.fromCharCode(e.keyCode), i = this._filterMenuItems(s)), i.length ? (this.focus(e, i), this.previousFilter = s, this.filterTimer = this._delay(function() { delete this.previousFilter }, 1e3)) : delete this.previousFilter
            }
            r && e.preventDefault()
        },
        _activate: function(t) { this.active && !this.active.is(".ui-state-disabled") && (this.active.children("[aria-haspopup='true']").length ? this.expand(t) : this.select(t)) },
        refresh: function() {
            var e, i, n, s, o = this,
                r = this.options.icons.submenu,
                a = this.element.find(this.options.menus);
            this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length), i = a.filter(":not(.ui-menu)").hide().attr({ role: this.options.role, "aria-hidden": "true", "aria-expanded": "false" }).each(function() {
                var e = t(this),
                    i = e.prev(),
                    n = t("<span>").data("ui-menu-submenu-caret", !0);
                o._addClass(n, "ui-menu-icon", "ui-icon " + r), i.attr("aria-haspopup", "true").prepend(n), e.attr("aria-labelledby", i.attr("id"))
            }), this._addClass(i, "ui-menu", "ui-widget ui-widget-content ui-front"), (e = a.add(this.element).find(this.options.items)).not(".ui-menu-item").each(function() {
                var e = t(this);
                o._isDivider(e) && o._addClass(e, "ui-menu-divider", "ui-widget-content")
            }), s = (n = e.not(".ui-menu-item, .ui-menu-divider")).children().not(".ui-menu").uniqueId().attr({ tabIndex: -1, role: this._itemRole() }), this._addClass(n, "ui-menu-item")._addClass(s, "ui-menu-item-wrapper"), e.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !t.contains(this.element[0], this.active[0]) && this.blur()
        },
        _itemRole: function() { return { menu: "menuitem", listbox: "option" }[this.options.role] },
        _setOption: function(t, e) {
            if ("icons" === t) {
                var i = this.element.find(".ui-menu-icon");
                this._removeClass(i, null, this.options.icons.submenu)._addClass(i, null, e.submenu)
            }
            this._super(t, e)
        },
        _setOptionDisabled: function(t) { this._super(t), this.element.attr("aria-disabled", t + ""), this._toggleClass(null, "ui-state-disabled", !!t) },
        focus: function(t, e) {
            var i, n, s;
            this.blur(t, t && "focus" === t.type), this._scrollIntoView(e), this.active = e.first(), n = this.active.children(".ui-menu-item-wrapper"), this._addClass(n, null, "ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", n.attr("id")), s = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"), this._addClass(s, null, "ui-state-active"), t && "keydown" === t.type ? this._close() : this.timer = this._delay(function() { this._close() }, this.delay), (i = e.children(".ui-menu")).length && t && /^mouse/.test(t.type) && this._startOpening(i), this.activeMenu = e.parent(), this._trigger("focus", t, { item: e })
        },
        _scrollIntoView: function(e) {
            var i, n, s, o, r, a;
            this._hasScroll() && (i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0, n = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0, s = e.offset().top - this.activeMenu.offset().top - i - n, o = this.activeMenu.scrollTop(), r = this.activeMenu.height(), a = e.outerHeight(), 0 > s ? this.activeMenu.scrollTop(o + s) : s + a > r && this.activeMenu.scrollTop(o + s - r + a))
        },
        blur: function(t, e) { e || clearTimeout(this.timer), this.active && (this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active"), this._trigger("blur", t, { item: this.active }), this.active = null) },
        _startOpening: function(t) { clearTimeout(this.timer), "true" === t.attr("aria-hidden") && (this.timer = this._delay(function() { this._close(), this._open(t) }, this.delay)) },
        _open: function(e) {
            var i = t.extend({ of: this.active }, this.options.position);
            clearTimeout(this.timer), this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"), e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
        },
        collapseAll: function(e, i) {
            clearTimeout(this.timer), this.timer = this._delay(function() {
                var n = i ? this.element : t(e && e.target).closest(this.element.find(".ui-menu"));
                n.length || (n = this.element), this._close(n), this.blur(e), this._removeClass(n.find(".ui-state-active"), null, "ui-state-active"), this.activeMenu = n
            }, this.delay)
        },
        _close: function(t) { t || (t = this.active ? this.active.parent() : this.element), t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false") },
        _closeOnDocumentClick: function(e) { return !t(e.target).closest(".ui-menu").length },
        _isDivider: function(t) { return !/[^\-\u2014\u2013\s]/.test(t.text()) },
        collapse: function(t) {
            var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            e && e.length && (this._close(), this.focus(t, e))
        },
        expand: function(t) {
            var e = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
            e && e.length && (this._open(e.parent()), this._delay(function() { this.focus(t, e) }))
        },
        next: function(t) { this._move("next", "first", t) },
        previous: function(t) { this._move("prev", "last", t) },
        isFirstItem: function() { return this.active && !this.active.prevAll(".ui-menu-item").length },
        isLastItem: function() { return this.active && !this.active.nextAll(".ui-menu-item").length },
        _move: function(t, e, i) {
            var n;
            this.active && (n = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)), n && n.length && this.active || (n = this.activeMenu.find(this.options.items)[e]()), this.focus(i, n)
        },
        nextPage: function(e) { var i, n, s; return this.active ? void(this.isLastItem() || (this._hasScroll() ? (n = this.active.offset().top, s = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() { return 0 > (i = t(this)).offset().top - n - s }), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]()))) : void this.next(e) },
        previousPage: function(e) { var i, n, s; return this.active ? void(this.isFirstItem() || (this._hasScroll() ? (n = this.active.offset().top, s = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() { return (i = t(this)).offset().top - n + s > 0 }), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items).first()))) : void this.next(e) },
        _hasScroll: function() { return this.element.outerHeight() < this.element.prop("scrollHeight") },
        select: function(e) {
            this.active = this.active || t(e.target).closest(".ui-menu-item");
            var i = { item: this.active };
            this.active.has(".ui-menu").length || this.collapseAll(e, !0), this._trigger("select", e, i)
        },
        _filterMenuItems: function(e) {
            var i = e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
                n = RegExp("^" + i, "i");
            return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function() { return n.test(t.trim(t(this).children(".ui-menu-item-wrapper").text())) })
        }
    }), t.widget("ui.autocomplete", {
        version: "1.12.1",
        defaultElement: "<input>",
        options: { appendTo: null, autoFocus: !1, delay: 300, minLength: 1, position: { my: "left top", at: "left bottom", collision: "none" }, source: null, change: null, close: null, focus: null, open: null, response: null, search: null, select: null },
        requestIndex: 0,
        pending: 0,
        _create: function() {
            var e, i, n, s = this.element[0].nodeName.toLowerCase(),
                o = "textarea" === s,
                r = "input" === s;
            this.isMultiLine = o || !r && this._isContentEditable(this.element), this.valueMethod = this.element[o || r ? "val" : "text"], this.isNewMenu = !0, this._addClass("ui-autocomplete-input"), this.element.attr("autocomplete", "off"), this._on(this.element, {
                    keydown: function(s) {
                        if (this.element.prop("readOnly")) return e = !0, n = !0, void(i = !0);
                        e = !1, n = !1, i = !1;
                        var o = t.ui.keyCode;
                        switch (s.keyCode) {
                            case o.PAGE_UP:
                                e = !0, this._move("previousPage", s);
                                break;
                            case o.PAGE_DOWN:
                                e = !0, this._move("nextPage", s);
                                break;
                            case o.UP:
                                e = !0, this._keyEvent("previous", s);
                                break;
                            case o.DOWN:
                                e = !0, this._keyEvent("next", s);
                                break;
                            case o.ENTER:
                                this.menu.active && (e = !0, s.preventDefault(), this.menu.select(s));
                                break;
                            case o.TAB:
                                this.menu.active && this.menu.select(s);
                                break;
                            case o.ESCAPE:
                                this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(s), s.preventDefault());
                                break;
                            default:
                                i = !0, this._searchTimeout(s)
                        }
                    },
                    keypress: function(n) {
                        if (e) return e = !1, void((!this.isMultiLine || this.menu.element.is(":visible")) && n.preventDefault());
                        if (!i) {
                            var s = t.ui.keyCode;
                            switch (n.keyCode) {
                                case s.PAGE_UP:
                                    this._move("previousPage", n);
                                    break;
                                case s.PAGE_DOWN:
                                    this._move("nextPage", n);
                                    break;
                                case s.UP:
                                    this._keyEvent("previous", n);
                                    break;
                                case s.DOWN:
                                    this._keyEvent("next", n)
                            }
                        }
                    },
                    input: function(t) { return n ? (n = !1, void t.preventDefault()) : void this._searchTimeout(t) },
                    focus: function() { this.selectedItem = null, this.previous = this._value() },
                    blur: function(t) { return this.cancelBlur ? void delete this.cancelBlur : (clearTimeout(this.searching), this.close(t), void this._change(t)) }
                }), this._initSource(),
                this.menu = t("<ul>").appendTo(this._appendTo()).menu({ role: null }).hide().menu("instance"), this._addClass(this.menu.element, "ui-autocomplete", "ui-front"), this._on(this.menu.element, {
                    mousedown: function(e) { e.preventDefault(), this.cancelBlur = !0, this._delay(function() { delete this.cancelBlur, this.element[0] !== t.ui.safeActiveElement(this.document[0]) && this.element.trigger("focus") }) },
                    menufocus: function(e, i) { var n, s; return this.isNewMenu && (this.isNewMenu = !1, e.originalEvent && /^mouse/.test(e.originalEvent.type)) ? (this.menu.blur(), void this.document.one("mousemove", function() { t(e.target).trigger(e.originalEvent) })) : (s = i.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", e, { item: s }) && e.originalEvent && /^key/.test(e.originalEvent.type) && this._value(s.value), void((n = i.item.attr("aria-label") || s.value) && t.trim(n).length && (this.liveRegion.children().hide(), t("<div>").text(n).appendTo(this.liveRegion)))) },
                    menuselect: function(e, i) {
                        var n = i.item.data("ui-autocomplete-item"),
                            s = this.previous;
                        this.element[0] !== t.ui.safeActiveElement(this.document[0]) && (this.element.trigger("focus"), this.previous = s, this._delay(function() { this.previous = s, this.selectedItem = n })), !1 !== this._trigger("select", e, { item: n }) && this._value(n.value), this.term = this._value(), this.close(e), this.selectedItem = n
                    }
                }), this.liveRegion = t("<div>", { role: "status", "aria-live": "assertive", "aria-relevant": "additions" }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this._on(this.window, { beforeunload: function() { this.element.removeAttr("autocomplete") } })
        },
        _destroy: function() { clearTimeout(this.searching), this.element.removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove() },
        _setOption: function(t, e) { this._super(t, e), "source" === t && this._initSource(), "appendTo" === t && this.menu.element.appendTo(this._appendTo()), "disabled" === t && e && this.xhr && this.xhr.abort() },
        _isEventTargetInWidget: function(e) { var i = this.menu.element[0]; return e.target === this.element[0] || e.target === i || t.contains(i, e.target) },
        _closeOnClickOutside: function(t) { this._isEventTargetInWidget(t) || this.close() },
        _appendTo: function() { var e = this.options.appendTo; return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e && e[0] || (e = this.element.closest(".ui-front, dialog")), e.length || (e = this.document[0].body), e },
        _initSource: function() {
            var e, i, n = this;
            t.isArray(this.options.source) ? (e = this.options.source, this.source = function(i, n) { n(t.ui.autocomplete.filter(e, i.term)) }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function(e, s) { n.xhr && n.xhr.abort(), n.xhr = t.ajax({ url: i, data: e, dataType: "json", success: function(t) { s(t) }, error: function() { s([]) } }) }) : this.source = this.options.source
        },
        _searchTimeout: function(t) {
            clearTimeout(this.searching), this.searching = this._delay(function() {
                var e = this.term === this._value(),
                    i = this.menu.element.is(":visible"),
                    n = t.altKey || t.ctrlKey || t.metaKey || t.shiftKey;
                (!e || e && !i && !n) && (this.selectedItem = null, this.search(null, t))
            }, this.options.delay)
        },
        search: function(t, e) { return t = null != t ? t : this._value(), this.term = this._value(), t.length < this.options.minLength ? this.close(e) : !1 !== this._trigger("search", e) ? this._search(t) : void 0 },
        _search: function(t) { this.pending++, this._addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({ term: t }, this._response()) },
        _response: function() { var e = ++this.requestIndex; return t.proxy(function(t) { e === this.requestIndex && this.__response(t), this.pending--, this.pending || this._removeClass("ui-autocomplete-loading") }, this) },
        __response: function(t) { t && (t = this._normalize(t)), this._trigger("response", null, { content: t }), !this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t), this._trigger("open")) : this._close() },
        close: function(t) { this.cancelSearch = !0, this._close(t) },
        _close: function(t) { this._off(this.document, "mousedown"), this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", t)) },
        _change: function(t) { this.previous !== this._value() && this._trigger("change", t, { item: this.selectedItem }) },
        _normalize: function(e) { return e.length && e[0].label && e[0].value ? e : t.map(e, function(e) { return "string" == typeof e ? { label: e, value: e } : t.extend({}, e, { label: e.label || e.value, value: e.value || e.label }) }) },
        _suggest: function(e) {
            var i = this.menu.element.empty();
            this._renderMenu(i, e), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), i.position(t.extend({ of: this.element }, this.options.position)), this.options.autoFocus && this.menu.next(), this._on(this.document, { mousedown: "_closeOnClickOutside" })
        },
        _resizeMenu: function() {
            var t = this.menu.element;
            t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function(e, i) {
            var n = this;
            t.each(i, function(t, i) { n._renderItemData(e, i) })
        },
        _renderItemData: function(t, e) { return this._renderItem(t, e).data("ui-autocomplete-item", e) },
        _renderItem: function(e, i) { return t("<li>").append(t("<div>").text(i.label)).appendTo(e) },
        _move: function(t, e) { return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t) ? (this.isMultiLine || this._value(this.term), void this.menu.blur()) : void this.menu[t](e) : void this.search(null, e) },
        widget: function() { return this.menu.element },
        _value: function() { return this.valueMethod.apply(this.element, arguments) },
        _keyEvent: function(t, e) {
            (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(t, e), e.preventDefault())
        },
        _isContentEditable: function(t) { if (!t.length) return !1; var e = t.prop("contentEditable"); return "inherit" === e ? this._isContentEditable(t.parent()) : "true" === e }
    }), t.extend(t.ui.autocomplete, { escapeRegex: function(t) { return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&") }, filter: function(e, i) { var n = RegExp(t.ui.autocomplete.escapeRegex(i), "i"); return t.grep(e, function(t) { return n.test(t.label || t.value || t) }) } }), t.widget("ui.autocomplete", t.ui.autocomplete, {
        options: { messages: { noResults: "No search results.", results: function(t) { return t + (t > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate." } } },
        __response: function(e) {
            var i;
            this._superApply(arguments), this.options.disabled || this.cancelSearch || (i = e && e.length ? this.options.messages.results(e.length) : this.options.messages.noResults, this.liveRegion.children().hide(), t("<div>").text(i).appendTo(this.liveRegion))
        }
    }), t.ui.autocomplete;
    var f, m = /ui-corner-([a-z]){2,6}/g;
    t.widget("ui.controlgroup", {
        version: "1.12.1",
        defaultElement: "<div>",
        options: { direction: "horizontal", disabled: null, onlyVisible: !0, items: { button: "input[type=button], input[type=submit], input[type=reset], button, a", controlgroupLabel: ".ui-controlgroup-label", checkboxradio: "input[type='checkbox'], input[type='radio']", selectmenu: "select", spinner: ".ui-spinner-input" } },
        _create: function() { this._enhance() },
        _enhance: function() { this.element.attr("role", "toolbar"), this.refresh() },
        _destroy: function() { this._callChildMethod("destroy"), this.childWidgets.removeData("ui-controlgroup-data"), this.element.removeAttr("role"), this.options.items.controlgroupLabel && this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap() },
        _initWidgets: function() {
            var e = this,
                i = [];
            t.each(this.options.items, function(n, s) {
                var o, r = {};
                return s ? "controlgroupLabel" === n ? ((o = e.element.find(s)).each(function() {
                    var e = t(this);
                    e.children(".ui-controlgroup-label-contents").length || e.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>")
                }), e._addClass(o, null, "ui-widget ui-widget-content ui-state-default"), void(i = i.concat(o.get()))) : void(t.fn[n] && (r = e["_" + n + "Options"] ? e["_" + n + "Options"]("middle") : { classes: {} }, e.element.find(s).each(function() {
                    var s = t(this),
                        o = s[n]("instance"),
                        a = t.widget.extend({}, r);
                    if ("button" !== n || !s.parent(".ui-spinner").length) {
                        o || (o = s[n]()[n]("instance")), o && (a.classes = e._resolveClassesValues(a.classes, o)), s[n](a);
                        var l = s[n]("widget");
                        t.data(l[0], "ui-controlgroup-data", o || s[n]("instance")), i.push(l[0])
                    }
                }))) : void 0
            }), this.childWidgets = t(t.unique(i)), this._addClass(this.childWidgets, "ui-controlgroup-item")
        },
        _callChildMethod: function(e) {
            this.childWidgets.each(function() {
                var i = t(this).data("ui-controlgroup-data");
                i && i[e] && i[e]()
            })
        },
        _updateCornerClass: function(t, e) {
            var i = "ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all",
                n = this._buildSimpleOptions(e, "label").classes.label;
            this._removeClass(t, null, i), this._addClass(t, null, n)
        },
        _buildSimpleOptions: function(t, e) {
            var i = "vertical" === this.options.direction,
                n = { classes: {} };
            return n.classes[e] = { middle: "", first: "ui-corner-" + (i ? "top" : "left"), last: "ui-corner-" + (i ? "bottom" : "right"), only: "ui-corner-all" }[t], n
        },
        _spinnerOptions: function(t) { var e = this._buildSimpleOptions(t, "ui-spinner"); return e.classes["ui-spinner-up"] = "", e.classes["ui-spinner-down"] = "", e },
        _buttonOptions: function(t) { return this._buildSimpleOptions(t, "ui-button") },
        _checkboxradioOptions: function(t) { return this._buildSimpleOptions(t, "ui-checkboxradio-label") },
        _selectmenuOptions: function(t) { var e = "vertical" === this.options.direction; return { width: !!e && "auto", classes: { middle: { "ui-selectmenu-button-open": "", "ui-selectmenu-button-closed": "" }, first: { "ui-selectmenu-button-open": "ui-corner-" + (e ? "top" : "tl"), "ui-selectmenu-button-closed": "ui-corner-" + (e ? "top" : "left") }, last: { "ui-selectmenu-button-open": e ? "" : "ui-corner-tr", "ui-selectmenu-button-closed": "ui-corner-" + (e ? "bottom" : "right") }, only: { "ui-selectmenu-button-open": "ui-corner-top", "ui-selectmenu-button-closed": "ui-corner-all" } }[t] } },
        _resolveClassesValues: function(e, i) {
            var n = {};
            return t.each(e, function(s) {
                var o = i.options.classes[s] || "";
                o = t.trim(o.replace(m, "")), n[s] = (o + " " + e[s]).replace(/\s+/g, " ")
            }), n
        },
        _setOption: function(t, e) { return "direction" === t && this._removeClass("ui-controlgroup-" + this.options.direction), this._super(t, e), "disabled" === t ? void this._callChildMethod(e ? "disable" : "enable") : void this.refresh() },
        refresh: function() {
            var e, i = this;
            this._addClass("ui-controlgroup ui-controlgroup-" + this.options.direction), "horizontal" === this.options.direction && this._addClass(null, "ui-helper-clearfix"), this._initWidgets(), e = this.childWidgets, this.options.onlyVisible && (e = e.filter(":visible")), e.length && (t.each(["first", "last"], function(t, n) {
                var s = e[n]().data("ui-controlgroup-data");
                if (s && i["_" + s.widgetName + "Options"]) {
                    var o = i["_" + s.widgetName + "Options"](1 === e.length ? "only" : n);
                    o.classes = i._resolveClassesValues(o.classes, s), s.element[s.widgetName](o)
                } else i._updateCornerClass(e[n](), n)
            }), this._callChildMethod("refresh"))
        }
    }), t.widget("ui.checkboxradio", [t.ui.formResetMixin, {
        version: "1.12.1",
        options: { disabled: null, label: null, icon: !0, classes: { "ui-checkboxradio-label": "ui-corner-all", "ui-checkboxradio-icon": "ui-corner-all" } },
        _getCreateOptions: function() {
            var e, i, n = this,
                s = this._super() || {};
            return this._readType(), i = this.element.labels(), this.label = t(i[i.length - 1]), this.label.length || t.error("No label found for checkboxradio widget"), this.originalLabel = "", this.label.contents().not(this.element[0]).each(function() { n.originalLabel += 3 === this.nodeType ? t(this).text() : this.outerHTML }), this.originalLabel && (s.label = this.originalLabel), null != (e = this.element[0].disabled) && (s.disabled = e), s
        },
        _create: function() {
            var t = this.element[0].checked;
            this._bindFormResetHandler(), null == this.options.disabled && (this.options.disabled = this.element[0].disabled), this._setOption("disabled", this.options.disabled), this._addClass("ui-checkboxradio", "ui-helper-hidden-accessible"), this._addClass(this.label, "ui-checkboxradio-label", "ui-button ui-widget"), "radio" === this.type && this._addClass(this.label, "ui-checkboxradio-radio-label"), this.options.label && this.options.label !== this.originalLabel ? this._updateLabel() : this.originalLabel && (this.options.label = this.originalLabel), this._enhance(), t && (this._addClass(this.label, "ui-checkboxradio-checked", "ui-state-active"), this.icon && this._addClass(this.icon, null, "ui-state-hover")), this._on({ change: "_toggleClasses", focus: function() { this._addClass(this.label, null, "ui-state-focus ui-visual-focus") }, blur: function() { this._removeClass(this.label, null, "ui-state-focus ui-visual-focus") } })
        },
        _readType: function() {
            var e = this.element[0].nodeName.toLowerCase();
            this.type = this.element[0].type, "input" === e && /radio|checkbox/.test(this.type) || t.error("Can't create checkboxradio on element.nodeName=" + e + " and element.type=" + this.type)
        },
        _enhance: function() { this._updateIcon(this.element[0].checked) },
        widget: function() { return this.label },
        _getRadioGroup: function() {
            var e = this.element[0].name,
                i = "input[name='" + t.ui.escapeSelector(e) + "']";
            return e ? (this.form.length ? t(this.form[0].elements).filter(i) : t(i).filter(function() { return 0 === t(this).form().length })).not(this.element) : t([])
        },
        _toggleClasses: function() {
            var e = this.element[0].checked;
            this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", e), this.options.icon && "checkbox" === this.type && this._toggleClass(this.icon, null, "ui-icon-check ui-state-checked", e)._toggleClass(this.icon, null, "ui-icon-blank", !e), "radio" === this.type && this._getRadioGroup().each(function() {
                var e = t(this).checkboxradio("instance");
                e && e._removeClass(e.label, "ui-checkboxradio-checked", "ui-state-active")
            })
        },
        _destroy: function() { this._unbindFormResetHandler(), this.icon && (this.icon.remove(), this.iconSpace.remove()) },
        _setOption: function(t, e) { return "label" !== t || e ? (this._super(t, e), "disabled" === t ? (this._toggleClass(this.label, null, "ui-state-disabled", e), void(this.element[0].disabled = e)) : void this.refresh()) : void 0 },
        _updateIcon: function(e) {
            var i = "ui-icon ui-icon-background ";
            this.options.icon ? (this.icon || (this.icon = t("<span>"), this.iconSpace = t("<span> </span>"), this._addClass(this.iconSpace, "ui-checkboxradio-icon-space")), "checkbox" === this.type ? (i += e ? "ui-icon-check ui-state-checked" : "ui-icon-blank", this._removeClass(this.icon, null, e ? "ui-icon-blank" : "ui-icon-check")) : i += "ui-icon-blank", this._addClass(this.icon, "ui-checkboxradio-icon", i), e || this._removeClass(this.icon, null, "ui-icon-check ui-state-checked"), this.icon.prependTo(this.label).after(this.iconSpace)) : void 0 !== this.icon && (this.icon.remove(), this.iconSpace.remove(), delete this.icon)
        },
        _updateLabel: function() {
            var t = this.label.contents().not(this.element[0]);
            this.icon && (t = t.not(this.icon[0])), this.iconSpace && (t = t.not(this.iconSpace[0])), t.remove(), this.label.append(this.options.label)
        },
        refresh: function() {
            var t = this.element[0].checked,
                e = this.element[0].disabled;
            this._updateIcon(t), this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", t), null !== this.options.label && this._updateLabel(), e !== this.options.disabled && this._setOptions({ disabled: e })
        }
    }]), t.ui.checkboxradio, t.widget("ui.button", {
        version: "1.12.1",
        defaultElement: "<button>",
        options: { classes: { "ui-button": "ui-corner-all" }, disabled: null, icon: null, iconPosition: "beginning", label: null, showLabel: !0 },
        _getCreateOptions: function() { var t, e = this._super() || {}; return this.isInput = this.element.is("input"), null != (t = this.element[0].disabled) && (e.disabled = t), this.originalLabel = this.isInput ? this.element.val() : this.element.html(), this.originalLabel && (e.label = this.originalLabel), e },
        _create: function() {!this.option.showLabel & !this.options.icon && (this.options.showLabel = !0), null == this.options.disabled && (this.options.disabled = this.element[0].disabled || !1), this.hasTitle = !!this.element.attr("title"), this.options.label && this.options.label !== this.originalLabel && (this.isInput ? this.element.val(this.options.label) : this.element.html(this.options.label)), this._addClass("ui-button", "ui-widget"), this._setOption("disabled", this.options.disabled), this._enhance(), this.element.is("a") && this._on({ keyup: function(e) { e.keyCode === t.ui.keyCode.SPACE && (e.preventDefault(), this.element[0].click ? this.element[0].click() : this.element.trigger("click")) } }) },
        _enhance: function() { this.element.is("button") || this.element.attr("role", "button"), this.options.icon && (this._updateIcon("icon", this.options.icon), this._updateTooltip()) },
        _updateTooltip: function() { this.title = this.element.attr("title"), this.options.showLabel || this.title || this.element.attr("title", this.options.label) },
        _updateIcon: function(e, i) {
            var n = "iconPosition" !== e,
                s = n ? this.options.iconPosition : i,
                o = "top" === s || "bottom" === s;
            this.icon ? n && this._removeClass(this.icon, null, this.options.icon) : (this.icon = t("<span>"), this._addClass(this.icon, "ui-button-icon", "ui-icon"), this.options.showLabel || this._addClass("ui-button-icon-only")), n && this._addClass(this.icon, null, i), this._attachIcon(s), o ? (this._addClass(this.icon, null, "ui-widget-icon-block"), this.iconSpace && this.iconSpace.remove()) : (this.iconSpace || (this.iconSpace = t("<span> </span>"), this._addClass(this.iconSpace, "ui-button-icon-space")), this._removeClass(this.icon, null, "ui-wiget-icon-block"), this._attachIconSpace(s))
        },
        _destroy: function() { this.element.removeAttr("role"), this.icon && this.icon.remove(), this.iconSpace && this.iconSpace.remove(), this.hasTitle || this.element.removeAttr("title") },
        _attachIconSpace: function(t) { this.icon[/^(?:end|bottom)/.test(t) ? "before" : "after"](this.iconSpace) },
        _attachIcon: function(t) { this.element[/^(?:end|bottom)/.test(t) ? "append" : "prepend"](this.icon) },
        _setOptions: function(t) {
            var e = void 0 === t.showLabel ? this.options.showLabel : t.showLabel,
                i = void 0 === t.icon ? this.options.icon : t.icon;
            e || i || (t.showLabel = !0), this._super(t)
        },
        _setOption: function(t, e) { "icon" === t && (e ? this._updateIcon(t, e) : this.icon && (this.icon.remove(), this.iconSpace && this.iconSpace.remove())), "iconPosition" === t && this._updateIcon(t, e), "showLabel" === t && (this._toggleClass("ui-button-icon-only", null, !e), this._updateTooltip()), "label" === t && (this.isInput ? this.element.val(e) : (this.element.html(e), this.icon && (this._attachIcon(this.options.iconPosition), this._attachIconSpace(this.options.iconPosition)))), this._super(t, e), "disabled" === t && (this._toggleClass(null, "ui-state-disabled", e), this.element[0].disabled = e, e && this.element.blur()) },
        refresh: function() {
            var t = this.element.is("input, button") ? this.element[0].disabled : this.element.hasClass("ui-button-disabled");
            t !== this.options.disabled && this._setOptions({ disabled: t }), this._updateTooltip()
        }
    }), !1 !== t.uiBackCompat && (t.widget("ui.button", t.ui.button, { options: { text: !0, icons: { primary: null, secondary: null } }, _create: function() { this.options.showLabel && !this.options.text && (this.options.showLabel = this.options.text), !this.options.showLabel && this.options.text && (this.options.text = this.options.showLabel), this.options.icon || !this.options.icons.primary && !this.options.icons.secondary ? this.options.icon && (this.options.icons.primary = this.options.icon) : this.options.icons.primary ? this.options.icon = this.options.icons.primary : (this.options.icon = this.options.icons.secondary, this.options.iconPosition = "end"), this._super() }, _setOption: function(t, e) { return "text" === t ? void this._super("showLabel", e) : ("showLabel" === t && (this.options.text = e), "icon" === t && (this.options.icons.primary = e), "icons" === t && (e.primary ? (this._super("icon", e.primary), this._super("iconPosition", "beginning")) : e.secondary && (this._super("icon", e.secondary), this._super("iconPosition", "end"))), void this._superApply(arguments)) } }), t.fn.button = function(e) { return function() { return !this.length || this.length && "INPUT" !== this[0].tagName || this.length && "INPUT" === this[0].tagName && "checkbox" !== this.attr("type") && "radio" !== this.attr("type") ? e.apply(this, arguments) : (t.ui.checkboxradio || t.error("Checkboxradio widget missing"), 0 === arguments.length ? this.checkboxradio({ icon: !1 }) : this.checkboxradio.apply(this, arguments)) } }(t.fn.button), t.fn.buttonset = function() { return t.ui.controlgroup || t.error("Controlgroup widget missing"), "option" === arguments[0] && "items" === arguments[1] && arguments[2] ? this.controlgroup.apply(this, [arguments[0], "items.button", arguments[2]]) : "option" === arguments[0] && "items" === arguments[1] ? this.controlgroup.apply(this, [arguments[0], "items.button"]) : ("object" == typeof arguments[0] && arguments[0].items && (arguments[0].items = { button: arguments[0].items }), this.controlgroup.apply(this, arguments)) }), t.ui.button, t.extend(t.ui, { datepicker: { version: "1.12.1" } }), t.extend(n.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function() { return this.dpDiv },
        setDefaults: function(t) { return r(this._defaults, t || {}), this },
        _attachDatepicker: function(e, i) {
            var n, s, o;
            s = "div" === (n = e.nodeName.toLowerCase()) || "span" === n, e.id || (this.uuid += 1, e.id = "dp" + this.uuid), (o = this._newInst(t(e), s)).settings = t.extend({}, i || {}), "input" === n ? this._connectDatepicker(e, o) : s && this._inlineDatepicker(e, o)
        },
        _newInst: function(e, i) { return { id: e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"), input: e, selectedDay: 0, selectedMonth: 0, selectedYear: 0, drawMonth: 0, drawYear: 0, inline: i, dpDiv: i ? s(t("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv } },
        _connectDatepicker: function(e, i) {
            var n = t(e);
            i.append = t([]), i.trigger = t([]), n.hasClass(this.markerClassName) || (this._attachments(n, i), n.addClass(this.markerClassName).on("keydown", this._doKeyDown).on("keypress", this._doKeyPress).on("keyup", this._doKeyUp), this._autoSize(i), t.data(e, "datepicker", i), i.settings.disabled && this._disableDatepicker(e))
        },
        _attachments: function(e, i) {
            var n, s, o, r = this._get(i, "appendText"),
                a = this._get(i, "isRTL");
            i.append && i.append.remove(), r && (i.append = t("<span class='" + this._appendClass + "'>" + r + "</span>"), e[a ? "before" : "after"](i.append)), e.off("focus", this._showDatepicker), i.trigger && i.trigger.remove(), ("focus" === (n = this._get(i, "showOn")) || "both" === n) && e.on("focus", this._showDatepicker), ("button" === n || "both" === n) && (s = this._get(i, "buttonText"), o = this._get(i, "buttonImage"), i.trigger = t(this._get(i, "buttonImageOnly") ? t("<img/>").addClass(this._triggerClass).attr({ src: o, alt: s, title: s }) : t("<button type='button'></button>").addClass(this._triggerClass).html(o ? t("<img/>").attr({ src: o, alt: s, title: s }) : s)), e[a ? "before" : "after"](i.trigger), i.trigger.on("click", function() { return t.datepicker._datepickerShowing && t.datepicker._lastInput === e[0] ? t.datepicker._hideDatepicker() : t.datepicker._datepickerShowing && t.datepicker._lastInput !== e[0] ? (t.datepicker._hideDatepicker(), t.datepicker._showDatepicker(e[0])) : t.datepicker._showDatepicker(e[0]), !1 }))
        },
        _autoSize: function(t) {
            if (this._get(t, "autoSize") && !t.inline) {
                var e, i, n, s, o = new Date(2009, 11, 20),
                    r = this._get(t, "dateFormat");
                r.match(/[DM]/) && (e = function(t) { for (i = 0, n = 0, s = 0; t.length > s; s++) t[s].length > i && (i = t[s].length, n = s); return n }, o.setMonth(e(this._get(t, r.match(/MM/) ? "monthNames" : "monthNamesShort"))), o.setDate(e(this._get(t, r.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - o.getDay())), t.input.attr("size", this._formatDate(t, o).length)
            }
        },
        _inlineDatepicker: function(e, i) {
            var n = t(e);
            n.hasClass(this.markerClassName) || (n.addClass(this.markerClassName).append(i.dpDiv), t.data(e, "datepicker", i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(e), i.dpDiv.css("display", "block"))
        },
        _dialogDatepicker: function(e, i, n, s, o) { var a, l, h, c, u, d = this._dialogInst; return d || (this.uuid += 1, a = "dp" + this.uuid, this._dialogInput = t("<input type='text' id='" + a + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.on("keydown", this._doKeyDown), t("body").append(this._dialogInput), (d = this._dialogInst = this._newInst(this._dialogInput, !1)).settings = {}, t.data(this._dialogInput[0], "datepicker", d)), r(d.settings, s || {}), i = i && i.constructor === Date ? this._formatDate(d, i) : i, this._dialogInput.val(i), this._pos = o ? o.length ? o : [o.pageX, o.pageY] : null, this._pos || (l = document.documentElement.clientWidth, h = document.documentElement.clientHeight, c = document.documentElement.scrollLeft || document.body.scrollLeft, u = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [l / 2 - 100 + c, h / 2 - 150 + u]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), d.settings.onSelect = n, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), t.blockUI && t.blockUI(this.dpDiv), t.data(this._dialogInput[0], "datepicker", d), this },
        _destroyDatepicker: function(e) {
            var i, n = t(e),
                s = t.data(e, "datepicker");
            n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), t.removeData(e, "datepicker"), "input" === i ? (s.append.remove(), s.trigger.remove(), n.removeClass(this.markerClassName).off("focus", this._showDatepicker).off("keydown", this._doKeyDown).off("keypress", this._doKeyPress).off("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && n.removeClass(this.markerClassName).empty(), f === s && (f = null))
        },
        _enableDatepicker: function(e) {
            var i, n, s = t(e),
                o = t.data(e, "datepicker");
            s.hasClass(this.markerClassName) && ("input" === (i = e.nodeName.toLowerCase()) ? (e.disabled = !1, o.trigger.filter("button").each(function() { this.disabled = !1 }).end().filter("img").css({ opacity: "1.0", cursor: "" })) : ("div" === i || "span" === i) && ((n = s.children("." + this._inlineClass)).children().removeClass("ui-state-disabled"), n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = t.map(this._disabledInputs, function(t) { return t === e ? null : t }))
        },
        _disableDatepicker: function(e) {
            var i, n, s = t(e),
                o = t.data(e, "datepicker");
            s.hasClass(this.markerClassName) && ("input" === (i = e.nodeName.toLowerCase()) ? (e.disabled = !0, o.trigger.filter("button").each(function() { this.disabled = !0 }).end().filter("img").css({ opacity: "0.5", cursor: "default" })) : ("div" === i || "span" === i) && ((n = s.children("." + this._inlineClass)).children().addClass("ui-state-disabled"), n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = t.map(this._disabledInputs, function(t) { return t === e ? null : t }), this._disabledInputs[this._disabledInputs.length] = e)
        },
        _isDisabledDatepicker: function(t) {
            if (!t) return !1;
            for (var e = 0; this._disabledInputs.length > e; e++)
                if (this._disabledInputs[e] === t) return !0;
            return !1
        },
        _getInst: function(e) { try { return t.data(e, "datepicker") } catch (i) { throw "Missing instance data for this datepicker" } },
        _optionDatepicker: function(e, i, n) { var s, o, a, l, h = this._getInst(e); return 2 === arguments.length && "string" == typeof i ? "defaults" === i ? t.extend({}, t.datepicker._defaults) : h ? "all" === i ? t.extend({}, h.settings) : this._get(h, i) : null : (s = i || {}, "string" == typeof i && ((s = {})[i] = n), void(h && (this._curInst === h && this._hideDatepicker(), o = this._getDateDatepicker(e, !0), a = this._getMinMaxDate(h, "min"), l = this._getMinMaxDate(h, "max"), r(h.settings, s), null !== a && void 0 !== s.dateFormat && void 0 === s.minDate && (h.settings.minDate = this._formatDate(h, a)), null !== l && void 0 !== s.dateFormat && void 0 === s.maxDate && (h.settings.maxDate = this._formatDate(h, l)), "disabled" in s && (s.disabled ? this._disableDatepicker(e) : this._enableDatepicker(e)), this._attachments(t(e), h), this._autoSize(h), this._setDate(h, o), this._updateAlternate(h), this._updateDatepicker(h)))) },
        _changeDatepicker: function(t, e, i) { this._optionDatepicker(t, e, i) },
        _refreshDatepicker: function(t) {
            var e = this._getInst(t);
            e && this._updateDatepicker(e)
        },
        _setDateDatepicker: function(t, e) {
            var i = this._getInst(t);
            i && (this._setDate(i, e), this._updateDatepicker(i), this._updateAlternate(i))
        },
        _getDateDatepicker: function(t, e) { var i = this._getInst(t); return i && !i.inline && this._setDateFromField(i, e), i ? this._getDate(i) : null },
        _doKeyDown: function(e) {
            var i, n, s, o = t.datepicker._getInst(e.target),
                r = !0,
                a = o.dpDiv.is(".ui-datepicker-rtl");
            if (o._keyEvent = !0, t.datepicker._datepickerShowing) switch (e.keyCode) {
                case 9:
                    t.datepicker._hideDatepicker(), r = !1;
                    break;
                case 13:
                    return (s = t("td." + t.datepicker._dayOverClass + ":not(." + t.datepicker._currentClass + ")", o.dpDiv))[0] && t.datepicker._selectDay(e.target, o.selectedMonth, o.selectedYear, s[0]), (i = t.datepicker._get(o, "onSelect")) ? (n = t.datepicker._formatDate(o), i.apply(o.input ? o.input[0] : null, [n, o])) : t.datepicker._hideDatepicker(), !1;
                case 27:
                    t.datepicker._hideDatepicker();
                    break;
                case 33:
                    t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
                    break;
                case 34:
                    t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
                    break;
                case 35:
                    (e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target), r = e.ctrlKey || e.metaKey;
                    break;
                case 36:
                    (e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target), r = e.ctrlKey || e.metaKey;
                    break;
                case 37:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, a ? 1 : -1, "D"), r = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
                    break;
                case 38:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, -7, "D"), r = e.ctrlKey || e.metaKey;
                    break;
                case 39:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, a ? -1 : 1, "D"), r = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
                    break;
                case 40:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, 7, "D"), r = e.ctrlKey || e.metaKey;
                    break;
                default:
                    r = !1
            } else 36 === e.keyCode && e.ctrlKey ? t.datepicker._showDatepicker(this) : r = !1;
            r && (e.preventDefault(), e.stopPropagation())
        },
        _doKeyPress: function(e) { var i, n, s = t.datepicker._getInst(e.target); return t.datepicker._get(s, "constrainInput") ? (i = t.datepicker._possibleChars(t.datepicker._get(s, "dateFormat")), n = String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), e.ctrlKey || e.metaKey || " " > n || !i || i.indexOf(n) > -1) : void 0 },
        _doKeyUp: function(e) {
            var i = t.datepicker._getInst(e.target);
            if (i.input.val() !== i.lastVal) try { t.datepicker.parseDate(t.datepicker._get(i, "dateFormat"), i.input ? i.input.val() : null, t.datepicker._getFormatConfig(i)) && (t.datepicker._setDateFromField(i), t.datepicker._updateAlternate(i), t.datepicker._updateDatepicker(i)) } catch (s) {}
            return !0
        },
        _showDatepicker: function(e) {
            var n, s, o, a, l, h, c;
            ("input" !== (e = e.target || e).nodeName.toLowerCase() && (e = t("input", e.parentNode)[0]), t.datepicker._isDisabledDatepicker(e) || t.datepicker._lastInput === e) || (n = t.datepicker._getInst(e), t.datepicker._curInst && t.datepicker._curInst !== n && (t.datepicker._curInst.dpDiv.stop(!0, !0), n && t.datepicker._datepickerShowing && t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])), !1 !== (o = (s = t.datepicker._get(n, "beforeShow")) ? s.apply(e, [e, n]) : {}) && (r(n.settings, o), n.lastVal = null, t.datepicker._lastInput = e, t.datepicker._setDateFromField(n), t.datepicker._inDialog && (e.value = ""), t.datepicker._pos || (t.datepicker._pos = t.datepicker._findPos(e), t.datepicker._pos[1] += e.offsetHeight), a = !1, t(e).parents().each(function() { return !(a |= "fixed" === t(this).css("position")) }), l = { left: t.datepicker._pos[0], top: t.datepicker._pos[1] }, t.datepicker._pos = null, n.dpDiv.empty(), n.dpDiv.css({ position: "absolute", display: "block", top: "-1000px" }), t.datepicker._updateDatepicker(n), l = t.datepicker._checkOffset(n, l, a), n.dpDiv.css({ position: t.datepicker._inDialog && t.blockUI ? "static" : a ? "fixed" : "absolute", display: "none", left: l.left + "px", top: l.top + "px" }), n.inline || (h = t.datepicker._get(n, "showAnim"), c = t.datepicker._get(n, "duration"), n.dpDiv.css("z-index", i(t(e)) + 1), t.datepicker._datepickerShowing = !0, t.effects && t.effects.effect[h] ? n.dpDiv.show(h, t.datepicker._get(n, "showOptions"), c) : n.dpDiv[h || "show"](h ? c : null), t.datepicker._shouldFocusInput(n) && n.input.trigger("focus"), t.datepicker._curInst = n)))
        },
        _updateDatepicker: function(e) {
            this.maxRows = 4, f = e, e.dpDiv.empty().append(this._generateHTML(e)), this._attachHandlers(e);
            var i, n = this._getNumberOfMonths(e),
                s = n[1],
                r = 17,
                a = e.dpDiv.find("." + this._dayOverClass + " a");
            a.length > 0 && o.apply(a.get(0)), e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), s > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + s).css("width", r * s + "em"), e.dpDiv[(1 !== n[0] || 1 !== n[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), e === t.datepicker._curInst && t.datepicker._datepickerShowing && t.datepicker._shouldFocusInput(e) && e.input.trigger("focus"), e.yearshtml && (i = e.yearshtml, setTimeout(function() { i === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml), i = e.yearshtml = null }, 0))
        },
        _shouldFocusInput: function(t) { return t.input && t.input.is(":visible") && !t.input.is(":disabled") && !t.input.is(":focus") },
        _checkOffset: function(e, i, n) {
            var s = e.dpDiv.outerWidth(),
                o = e.dpDiv.outerHeight(),
                r = e.input ? e.input.outerWidth() : 0,
                a = e.input ? e.input.outerHeight() : 0,
                l = document.documentElement.clientWidth + (n ? 0 : t(document).scrollLeft()),
                h = document.documentElement.clientHeight + (n ? 0 : t(document).scrollTop());
            return i.left -= this._get(e, "isRTL") ? s - r : 0, i.left -= n && i.left === e.input.offset().left ? t(document).scrollLeft() : 0, i.top -= n && i.top === e.input.offset().top + a ? t(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + s > l && l > s ? Math.abs(i.left + s - l) : 0), i.top -= Math.min(i.top, i.top + o > h && h > o ? Math.abs(o + a) : 0), i
        },
        _findPos: function(e) { for (var i, n = this._getInst(e), s = this._get(n, "isRTL"); e && ("hidden" === e.type || 1 !== e.nodeType || t.expr.filters.hidden(e));) e = e[s ? "previousSibling" : "nextSibling"]; return [(i = t(e).offset()).left, i.top] },
        _hideDatepicker: function(e) { var i, n, s, o, r = this._curInst;!r || e && r !== t.data(e, "datepicker") || this._datepickerShowing && (i = this._get(r, "showAnim"), n = this._get(r, "duration"), s = function() { t.datepicker._tidyDialog(r) }, t.effects && (t.effects.effect[i] || t.effects[i]) ? r.dpDiv.hide(i, t.datepicker._get(r, "showOptions"), n, s) : r.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? n : null, s), i || s(), this._datepickerShowing = !1, (o = this._get(r, "onClose")) && o.apply(r.input ? r.input[0] : null, [r.input ? r.input.val() : "", r]), this._lastInput = null, this._inDialog && (this._dialogInput.css({ position: "absolute", left: "0", top: "-100px" }), t.blockUI && (t.unblockUI(), t("body").append(this.dpDiv))), this._inDialog = !1) },
        _tidyDialog: function(t) { t.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar") },
        _checkExternalClick: function(e) {
            if (t.datepicker._curInst) {
                var i = t(e.target),
                    n = t.datepicker._getInst(i[0]);
                (i[0].id !== t.datepicker._mainDivId && 0 === i.parents("#" + t.datepicker._mainDivId).length && !i.hasClass(t.datepicker.markerClassName) && !i.closest("." + t.datepicker._triggerClass).length && t.datepicker._datepickerShowing && (!t.datepicker._inDialog || !t.blockUI) || i.hasClass(t.datepicker.markerClassName) && t.datepicker._curInst !== n) && t.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function(e, i, n) {
            var s = t(e),
                o = this._getInst(s[0]);
            this._isDisabledDatepicker(s[0]) || (this._adjustInstDate(o, i + ("M" === n ? this._get(o, "showCurrentAtPos") : 0), n), this._updateDatepicker(o))
        },
        _gotoToday: function(e) {
            var i, n = t(e),
                s = this._getInst(n[0]);
            this._get(s, "gotoCurrent") && s.currentDay ? (s.selectedDay = s.currentDay, s.drawMonth = s.selectedMonth = s.currentMonth, s.drawYear = s.selectedYear = s.currentYear) : (i = new Date, s.selectedDay = i.getDate(), s.drawMonth = s.selectedMonth = i.getMonth(), s.drawYear = s.selectedYear = i.getFullYear()), this._notifyChange(s), this._adjustDate(n)
        },
        _selectMonthYear: function(e, i, n) {
            var s = t(e),
                o = this._getInst(s[0]);
            o["selected" + ("M" === n ? "Month" : "Year")] = o["draw" + ("M" === n ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(o), this._adjustDate(s)
        },
        _selectDay: function(e, i, n, s) {
            var o, r = t(e);
            t(s).hasClass(this._unselectableClass) || this._isDisabledDatepicker(r[0]) || ((o = this._getInst(r[0])).selectedDay = o.currentDay = t("a", s).html(), o.selectedMonth = o.currentMonth = i, o.selectedYear = o.currentYear = n, this._selectDate(e, this._formatDate(o, o.currentDay, o.currentMonth, o.currentYear)))
        },
        _clearDate: function(e) {
            var i = t(e);
            this._selectDate(i, "")
        },
        _selectDate: function(e, i) {
            var n, s = t(e),
                o = this._getInst(s[0]);
            i = null != i ? i : this._formatDate(o), o.input && o.input.val(i), this._updateAlternate(o), (n = this._get(o, "onSelect")) ? n.apply(o.input ? o.input[0] : null, [i, o]) : o.input && o.input.trigger("change"), o.inline ? this._updateDatepicker(o) : (this._hideDatepicker(), this._lastInput = o.input[0], "object" != typeof o.input[0] && o.input.trigger("focus"), this._lastInput = null)
        },
        _updateAlternate: function(e) {
            var i, n, s, o = this._get(e, "altField");
            o && (i = this._get(e, "altFormat") || this._get(e, "dateFormat"), n = this._getDate(e), s = this.formatDate(i, n, this._getFormatConfig(e)), t(o).val(s))
        },
        noWeekends: function(t) { var e = t.getDay(); return [e > 0 && 6 > e, ""] },
        iso8601Week: function(t) { var e, i = new Date(t.getTime()); return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), e = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((e - i) / 864e5) / 7) + 1 },
        parseDate: function(e, i, n) {
            if (null == e || null == i) throw "Invalid arguments";
            if ("" === (i = "object" == typeof i ? "" + i : i + "")) return null;
            var s, o, r, a, l = 0,
                h = (n ? n.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                c = "string" != typeof h ? h : (new Date).getFullYear() % 100 + parseInt(h, 10),
                u = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort,
                d = (n ? n.dayNames : null) || this._defaults.dayNames,
                p = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort,
                f = (n ? n.monthNames : null) || this._defaults.monthNames,
                m = -1,
                g = -1,
                v = -1,
                _ = -1,
                y = !1,
                b = function(t) { var i = e.length > s + 1 && e.charAt(s + 1) === t; return i && s++, i },
                w = function(t) {
                    var e = b(t),
                        n = "@" === t ? 14 : "!" === t ? 20 : "y" === t && e ? 4 : "o" === t ? 3 : 2,
                        s = RegExp("^\\d{" + ("y" === t ? n : 1) + "," + n + "}"),
                        o = i.substring(l).match(s);
                    if (!o) throw "Missing number at position " + l;
                    return l += o[0].length, parseInt(o[0], 10)
                },
                x = function(e, n, s) {
                    var o = -1,
                        r = t.map(b(e) ? s : n, function(t, e) {
                            return [
                                [e, t]
                            ]
                        }).sort(function(t, e) { return -(t[1].length - e[1].length) });
                    if (t.each(r, function(t, e) { var n = e[1]; return i.substr(l, n.length).toLowerCase() === n.toLowerCase() ? (o = e[0], l += n.length, !1) : void 0 }), -1 !== o) return o + 1;
                    throw "Unknown name at position " + l
                },
                T = function() {
                    if (i.charAt(l) !== e.charAt(s)) throw "Unexpected literal at position " + l;
                    l++
                };
            for (s = 0; e.length > s; s++)
                if (y) "'" !== e.charAt(s) || b("'") ? T() : y = !1;
                else switch (e.charAt(s)) {
                    case "d":
                        v = w("d");
                        break;
                    case "D":
                        x("D", u, d);
                        break;
                    case "o":
                        _ = w("o");
                        break;
                    case "m":
                        g = w("m");
                        break;
                    case "M":
                        g = x("M", p, f);
                        break;
                    case "y":
                        m = w("y");
                        break;
                    case "@":
                        m = (a = new Date(w("@"))).getFullYear(), g = a.getMonth() + 1, v = a.getDate();
                        break;
                    case "!":
                        m = (a = new Date((w("!") - this._ticksTo1970) / 1e4)).getFullYear(), g = a.getMonth() + 1, v = a.getDate();
                        break;
                    case "'":
                        b("'") ? T() : y = !0;
                        break;
                    default:
                        T()
                }
            if (i.length > l && (r = i.substr(l), !/^\s+/.test(r))) throw "Extra/unparsed characters found in date: " + r;
            if (-1 === m ? m = (new Date).getFullYear() : 100 > m && (m += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (c >= m ? 0 : -100)), _ > -1)
                for (g = 1, v = _; !((o = this._getDaysInMonth(m, g - 1)) >= v);) g++, v -= o;
            if ((a = this._daylightSavingAdjust(new Date(m, g - 1, v))).getFullYear() !== m || a.getMonth() + 1 !== g || a.getDate() !== v) throw "Invalid date";
            return a
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: 864e9 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
        formatDate: function(t, e, i) {
            if (!e) return "";
            var n, s = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
                o = (i ? i.dayNames : null) || this._defaults.dayNames,
                r = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
                a = (i ? i.monthNames : null) || this._defaults.monthNames,
                l = function(e) { var i = t.length > n + 1 && t.charAt(n + 1) === e; return i && n++, i },
                h = function(t, e, i) {
                    var n = "" + e;
                    if (l(t))
                        for (; i > n.length;) n = "0" + n;
                    return n
                },
                c = function(t, e, i, n) { return l(t) ? n[e] : i[e] },
                u = "",
                d = !1;
            if (e)
                for (n = 0; t.length > n; n++)
                    if (d) "'" !== t.charAt(n) || l("'") ? u += t.charAt(n) : d = !1;
                    else switch (t.charAt(n)) {
                        case "d":
                            u += h("d", e.getDate(), 2);
                            break;
                        case "D":
                            u += c("D", e.getDay(), s, o);
                            break;
                        case "o":
                            u += h("o", Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                            break;
                        case "m":
                            u += h("m", e.getMonth() + 1, 2);
                            break;
                        case "M":
                            u += c("M", e.getMonth(), r, a);
                            break;
                        case "y":
                            u += l("y") ? e.getFullYear() : (10 > e.getFullYear() % 100 ? "0" : "") + e.getFullYear() % 100;
                            break;
                        case "@":
                            u += e.getTime();
                            break;
                        case "!":
                            u += 1e4 * e.getTime() + this._ticksTo1970;
                            break;
                        case "'":
                            l("'") ? u += "'" : d = !0;
                            break;
                        default:
                            u += t.charAt(n)
                    }
            return u
        },
        _possibleChars: function(t) {
            var e, i = "",
                n = !1,
                s = function(i) { var n = t.length > e + 1 && t.charAt(e + 1) === i; return n && e++, n };
            for (e = 0; t.length > e; e++)
                if (n) "'" !== t.charAt(e) || s("'") ? i += t.charAt(e) : n = !1;
                else switch (t.charAt(e)) {
                    case "d":
                    case "m":
                    case "y":
                    case "@":
                        i += "0123456789";
                        break;
                    case "D":
                    case "M":
                        return null;
                    case "'":
                        s("'") ? i += "'" : n = !0;
                        break;
                    default:
                        i += t.charAt(e)
                }
            return i
        },
        _get: function(t, e) { return void 0 !== t.settings[e] ? t.settings[e] : this._defaults[e] },
        _setDateFromField: function(t, e) {
            if (t.input.val() !== t.lastVal) {
                var i = this._get(t, "dateFormat"),
                    n = t.lastVal = t.input ? t.input.val() : null,
                    s = this._getDefaultDate(t),
                    o = s,
                    r = this._getFormatConfig(t);
                try { o = this.parseDate(i, n, r) || s } catch (a) { n = e ? "" : n }
                t.selectedDay = o.getDate(), t.drawMonth = t.selectedMonth = o.getMonth(), t.drawYear = t.selectedYear = o.getFullYear(), t.currentDay = n ? o.getDate() : 0, t.currentMonth = n ? o.getMonth() : 0, t.currentYear = n ? o.getFullYear() : 0, this._adjustInstDate(t)
            }
        },
        _getDefaultDate: function(t) { return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date)) },
        _determineDate: function(e, i, n) {
            var s = function(t) { var e = new Date; return e.setDate(e.getDate() + t), e },
                o = null == i || "" === i ? n : "string" == typeof i ? function(i) {
                    try { return t.datepicker.parseDate(t.datepicker._get(e, "dateFormat"), i, t.datepicker._getFormatConfig(e)) } catch (n) {}
                    for (var s = (i.toLowerCase().match(/^c/) ? t.datepicker._getDate(e) : null) || new Date, o = s.getFullYear(), r = s.getMonth(), a = s.getDate(), l = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, h = l.exec(i); h;) {
                        switch (h[2] || "d") {
                            case "d":
                            case "D":
                                a += parseInt(h[1], 10);
                                break;
                            case "w":
                            case "W":
                                a += 7 * parseInt(h[1], 10);
                                break;
                            case "m":
                            case "M":
                                r += parseInt(h[1], 10), a = Math.min(a, t.datepicker._getDaysInMonth(o, r));
                                break;
                            case "y":
                            case "Y":
                                o += parseInt(h[1], 10), a = Math.min(a, t.datepicker._getDaysInMonth(o, r))
                        }
                        h = l.exec(i)
                    }
                    return new Date(o, r, a)
                }(i) : "number" == typeof i ? isNaN(i) ? n : s(i) : new Date(i.getTime());
            return (o = o && "Invalid Date" == "" + o ? n : o) && (o.setHours(0), o.setMinutes(0), o.setSeconds(0), o.setMilliseconds(0)), this._daylightSavingAdjust(o)
        },
        _daylightSavingAdjust: function(t) { return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t) : null },
        _setDate: function(t, e, i) {
            var n = !e,
                s = t.selectedMonth,
                o = t.selectedYear,
                r = this._restrictMinMax(t, this._determineDate(t, e, new Date));
            t.selectedDay = t.currentDay = r.getDate(), t.drawMonth = t.selectedMonth = t.currentMonth = r.getMonth(), t.drawYear = t.selectedYear = t.currentYear = r.getFullYear(), s === t.selectedMonth && o === t.selectedYear || i || this._notifyChange(t), this._adjustInstDate(t), t.input && t.input.val(n ? "" : this._formatDate(t))
        },
        _getDate: function(t) { return !t.currentYear || t.input && "" === t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay)) },
        _attachHandlers: function(e) {
            var i = this._get(e, "stepMonths"),
                n = "#" + e.id.replace(/\\\\/g, "\\");
            e.dpDiv.find("[data-handler]").map(function() {
                var e = { prev: function() { t.datepicker._adjustDate(n, -i, "M") }, next: function() { t.datepicker._adjustDate(n, +i, "M") }, hide: function() { t.datepicker._hideDatepicker() }, today: function() { t.datepicker._gotoToday(n) }, selectDay: function() { return t.datepicker._selectDay(n, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1 }, selectMonth: function() { return t.datepicker._selectMonthYear(n, this, "M"), !1 }, selectYear: function() { return t.datepicker._selectMonthYear(n, this, "Y"), !1 } };
                t(this).on(this.getAttribute("data-event"), e[this.getAttribute("data-handler")])
            })
        },
        _generateHTML: function(t) {
            var e, i, n, s, o, r, a, l, h, c, u, d, p, f, m, g, v, _, y, b, w, x, T, k, C, S, P, D, A, M, I, O, E, $, N, z, H, L, R, F = new Date,
                W = this._daylightSavingAdjust(new Date(F.getFullYear(), F.getMonth(), F.getDate())),
                j = this._get(t, "isRTL"),
                B = this._get(t, "showButtonPanel"),
                q = this._get(t, "hideIfNoPrevNext"),
                Y = this._get(t, "navigationAsDateFormat"),
                X = this._getNumberOfMonths(t),
                U = this._get(t, "showCurrentAtPos"),
                V = this._get(t, "stepMonths"),
                K = 1 !== X[0] || 1 !== X[1],
                G = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)),
                Q = this._getMinMaxDate(t, "min"),
                Z = this._getMinMaxDate(t, "max"),
                J = t.drawMonth - U,
                tt = t.drawYear;
            if (0 > J && (J += 12, tt--), Z)
                for (e = this._daylightSavingAdjust(new Date(Z.getFullYear(), Z.getMonth() - X[0] * X[1] + 1, Z.getDate())), e = Q && Q > e ? Q : e; this._daylightSavingAdjust(new Date(tt, J, 1)) > e;) 0 > --J && (J = 11, tt--);
            for (t.drawMonth = J, t.drawYear = tt, i = this._get(t, "prevText"), i = Y ? this.formatDate(i, this._daylightSavingAdjust(new Date(tt, J - V, 1)), this._getFormatConfig(t)) : i, n = this._canAdjustMonth(t, -1, tt, J) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (j ? "e" : "w") + "'>" + i + "</span></a>" : q ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (j ? "e" : "w") + "'>" + i + "</span></a>", s = this._get(t, "nextText"), s = Y ? this.formatDate(s, this._daylightSavingAdjust(new Date(tt, J + V, 1)), this._getFormatConfig(t)) : s, o = this._canAdjustMonth(t, 1, tt, J) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (j ? "w" : "e") + "'>" + s + "</span></a>" : q ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (j ? "w" : "e") + "'>" + s + "</span></a>", r = this._get(t, "currentText"), a = this._get(t, "gotoCurrent") && t.currentDay ? G : W, r = Y ? this.formatDate(r, a, this._getFormatConfig(t)) : r, l = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>", h = B ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (j ? l : "") + (this._isInRange(t, a) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + r + "</button>" : "") + (j ? "" : l) + "</div>" : "", c = parseInt(this._get(t, "firstDay"), 10), c = isNaN(c) ? 0 : c, u = this._get(t, "showWeek"), d = this._get(t, "dayNames"), p = this._get(t, "dayNamesMin"), f = this._get(t, "monthNames"), m = this._get(t, "monthNamesShort"), g = this._get(t, "beforeShowDay"), v = this._get(t, "showOtherMonths"), _ = this._get(t, "selectOtherMonths"), y = this._getDefaultDate(t), b = "", x = 0; X[0] > x; x++) {
                for (T = "", this.maxRows = 4, k = 0; X[1] > k; k++) {
                    if (C = this._daylightSavingAdjust(new Date(tt, J, t.selectedDay)), S = " ui-corner-all", P = "", K) {
                        if (P += "<div class='ui-datepicker-group", X[1] > 1) switch (k) {
                            case 0:
                                P += " ui-datepicker-group-first", S = " ui-corner-" + (j ? "right" : "left");
                                break;
                            case X[1] - 1:
                                P += " ui-datepicker-group-last", S = " ui-corner-" + (j ? "left" : "right");
                                break;
                            default:
                                P += " ui-datepicker-group-middle", S = ""
                        }
                        P += "'>"
                    }
                    for (P += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + S + "'>" + (/all|left/.test(S) && 0 === x ? j ? o : n : "") + (/all|right/.test(S) && 0 === x ? j ? n : o : "") + this._generateMonthYearHeader(t, J, tt, Q, Z, x > 0 || k > 0, f, m) + "</div><table class='ui-datepicker-calendar'><thead><tr>", D = u ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "", w = 0; 7 > w; w++) D += "<th scope='col'" + ((w + c + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + d[A = (w + c) % 7] + "'>" + p[A] + "</span></th>";
                    for (P += D + "</tr></thead><tbody>", M = this._getDaysInMonth(tt, J), tt === t.selectedYear && J === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, M)), I = (this._getFirstDayOfMonth(tt, J) - c + 7) % 7, O = Math.ceil((I + M) / 7), E = K && this.maxRows > O ? this.maxRows : O, this.maxRows = E, $ = this._daylightSavingAdjust(new Date(tt, J, 1 - I)), N = 0; E > N; N++) {
                        for (P += "<tr>", z = u ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")($) + "</td>" : "", w = 0; 7 > w; w++) H = g ? g.apply(t.input ? t.input[0] : null, [$]) : [!0, ""], R = (L = $.getMonth() !== J) && !_ || !H[0] || Q && Q > $ || Z && $ > Z, z += "<td class='" + ((w + c + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (L ? " ui-datepicker-other-month" : "") + ($.getTime() === C.getTime() && J === t.selectedMonth && t._keyEvent || y.getTime() === $.getTime() && y.getTime() === C.getTime() ? " " + this._dayOverClass : "") + (R ? " " + this._unselectableClass + " ui-state-disabled" : "") + (L && !v ? "" : " " + H[1] + ($.getTime() === G.getTime() ? " " + this._currentClass : "") + ($.getTime() === W.getTime() ? " ui-datepicker-today" : "")) + "'" + (L && !v || !H[2] ? "" : " title='" + H[2].replace(/'/g, "&#39;") + "'") + (R ? "" : " data-handler='selectDay' data-event='click' data-month='" + $.getMonth() + "' data-year='" + $.getFullYear() + "'") + ">" + (L && !v ? "&#xa0;" : R ? "<span class='ui-state-default'>" + $.getDate() + "</span>" : "<a class='ui-state-default" + ($.getTime() === W.getTime() ? " ui-state-highlight" : "") + ($.getTime() === G.getTime() ? " ui-state-active" : "") + (L ? " ui-priority-secondary" : "") + "' href='#'>" + $.getDate() + "</a>") + "</td>", $.setDate($.getDate() + 1), $ = this._daylightSavingAdjust($);
                        P += z + "</tr>"
                    }++J > 11 && (J = 0, tt++), T += P += "</tbody></table>" + (K ? "</div>" + (X[0] > 0 && k === X[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : "")
                }
                b += T
            }
            return b += h, t._keyEvent = !1, b
        },
        _generateMonthYearHeader: function(t, e, i, n, s, o, r, a) {
            var l, h, c, u, d, p, f, m, g = this._get(t, "changeMonth"),
                v = this._get(t, "changeYear"),
                _ = this._get(t, "showMonthAfterYear"),
                y = "<div class='ui-datepicker-title'>",
                b = "";
            if (o || !g) b += "<span class='ui-datepicker-month'>" + r[e] + "</span>";
            else {
                for (l = n && n.getFullYear() === i, h = s && s.getFullYear() === i, b += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", c = 0; 12 > c; c++)(!l || c >= n.getMonth()) && (!h || s.getMonth() >= c) && (b += "<option value='" + c + "'" + (c === e ? " selected='selected'" : "") + ">" + a[c] + "</option>");
                b += "</select>"
            }
            if (_ || (y += b + (!o && g && v ? "" : "&#xa0;")), !t.yearshtml)
                if (t.yearshtml = "", o || !v) y += "<span class='ui-datepicker-year'>" + i + "</span>";
                else {
                    for (u = this._get(t, "yearRange").split(":"), d = (new Date).getFullYear(), f = (p = function(t) { var e = t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? d + parseInt(t, 10) : parseInt(t, 10); return isNaN(e) ? d : e })(u[0]), m = Math.max(f, p(u[1] || "")), f = n ? Math.max(f, n.getFullYear()) : f, m = s ? Math.min(m, s.getFullYear()) : m, t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; m >= f; f++) t.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
                    t.yearshtml += "</select>", y += t.yearshtml, t.yearshtml = null
                }
            return y += this._get(t, "yearSuffix"), _ && (y += (!o && g && v ? "" : "&#xa0;") + b), y + "</div>"
        },
        _adjustInstDate: function(t, e, i) {
            var n = t.selectedYear + ("Y" === i ? e : 0),
                s = t.selectedMonth + ("M" === i ? e : 0),
                o = Math.min(t.selectedDay, this._getDaysInMonth(n, s)) + ("D" === i ? e : 0),
                r = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(n, s, o)));
            t.selectedDay = r.getDate(), t.drawMonth = t.selectedMonth = r.getMonth(), t.drawYear = t.selectedYear = r.getFullYear(), ("M" === i || "Y" === i) && this._notifyChange(t)
        },
        _restrictMinMax: function(t, e) {
            var i = this._getMinMaxDate(t, "min"),
                n = this._getMinMaxDate(t, "max"),
                s = i && i > e ? i : e;
            return n && s > n ? n : s
        },
        _notifyChange: function(t) {
            var e = this._get(t, "onChangeMonthYear");
            e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t])
        },
        _getNumberOfMonths: function(t) { var e = this._get(t, "numberOfMonths"); return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e },
        _getMinMaxDate: function(t, e) { return this._determineDate(t, this._get(t, e + "Date"), null) },
        _getDaysInMonth: function(t, e) { return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate() },
        _getFirstDayOfMonth: function(t, e) { return new Date(t, e, 1).getDay() },
        _canAdjustMonth: function(t, e, i, n) {
            var s = this._getNumberOfMonths(t),
                o = this._daylightSavingAdjust(new Date(i, n + (0 > e ? e : s[0] * s[1]), 1));
            return 0 > e && o.setDate(this._getDaysInMonth(o.getFullYear(), o.getMonth())), this._isInRange(t, o)
        },
        _isInRange: function(t, e) {
            var i, n, s = this._getMinMaxDate(t, "min"),
                o = this._getMinMaxDate(t, "max"),
                r = null,
                a = null,
                l = this._get(t, "yearRange");
            return l && (i = l.split(":"), n = (new Date).getFullYear(), r = parseInt(i[0], 10), a = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (r += n), i[1].match(/[+\-].*/) && (a += n)), (!s || e.getTime() >= s.getTime()) && (!o || e.getTime() <= o.getTime()) && (!r || e.getFullYear() >= r) && (!a || a >= e.getFullYear())
        },
        _getFormatConfig: function(t) { var e = this._get(t, "shortYearCutoff"); return { shortYearCutoff: e = "string" != typeof e ? e : (new Date).getFullYear() % 100 + parseInt(e, 10), dayNamesShort: this._get(t, "dayNamesShort"), dayNames: this._get(t, "dayNames"), monthNamesShort: this._get(t, "monthNamesShort"), monthNames: this._get(t, "monthNames") } },
        _formatDate: function(t, e, i, n) { e || (t.currentDay = t.selectedDay, t.currentMonth = t.selectedMonth, t.currentYear = t.selectedYear); var s = e ? "object" == typeof e ? e : this._daylightSavingAdjust(new Date(n, i, e)) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay)); return this.formatDate(this._get(t, "dateFormat"), s, this._getFormatConfig(t)) }
    }), t.fn.datepicker = function(e) {
        if (!this.length) return this;
        t.datepicker.initialized || (t(document).on("mousedown", t.datepicker._checkExternalClick), t.datepicker.initialized = !0), 0 === t("#" + t.datepicker._mainDivId).length && t("body").append(t.datepicker.dpDiv);
        var i = Array.prototype.slice.call(arguments, 1);
        return "string" != typeof e || "isDisabled" !== e && "getDate" !== e && "widget" !== e ? "option" === e && 2 === arguments.length && "string" == typeof arguments[1] ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i)) : this.each(function() { "string" == typeof e ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this].concat(i)) : t.datepicker._attachDatepicker(this, e) }) : t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i))
    }, t.datepicker = new n, t.datepicker.initialized = !1, t.datepicker.uuid = (new Date).getTime(), t.datepicker.version = "1.12.1", t.datepicker, t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
    var g = !1;
    t(document).on("mouseup", function() { g = !1 }), t.widget("ui.mouse", {
        version: "1.12.1",
        options: { cancel: "input, textarea, button, select, option", distance: 1, delay: 0 },
        _mouseInit: function() {
            var e = this;
            this.element.on("mousedown." + this.widgetName, function(t) { return e._mouseDown(t) }).on("click." + this.widgetName, function(i) { return !0 === t.data(i.target, e.widgetName + ".preventClickEvent") ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0 }), this.started = !1
        },
        _mouseDestroy: function() { this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate) },
        _mouseDown: function(e) {
            if (!g) {
                this._mouseMoved = !1, this._mouseStarted && this._mouseUp(e), this._mouseDownEvent = e;
                var i = this,
                    n = 1 === e.which,
                    s = !("string" != typeof this.options.cancel || !e.target.nodeName) && t(e.target).closest(this.options.cancel).length;
                return !(n && !s && this._mouseCapture(e)) || (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() { i.mouseDelayMet = !0 }, this.options.delay)), this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(e), !this._mouseStarted) ? (e.preventDefault(), !0) : (!0 === t.data(e.target, this.widgetName + ".preventClickEvent") && t.removeData(e.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(t) { return i._mouseMove(t) }, this._mouseUpDelegate = function(t) { return i._mouseUp(t) }, this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), e.preventDefault(), g = !0, !0))
            }
        },
        _mouseMove: function(e) {
            if (this._mouseMoved) {
                if (t.ui.ie && (!document.documentMode || 9 > document.documentMode) && !e.button) return this._mouseUp(e);
                if (!e.which)
                    if (e.originalEvent.altKey || e.originalEvent.ctrlKey || e.originalEvent.metaKey || e.originalEvent.shiftKey) this.ignoreMissingWhich = !0;
                    else if (!this.ignoreMissingWhich) return this._mouseUp(e)
            }
            return (e.which || e.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, e), this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
        },
        _mouseUp: function(e) { this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer), this.ignoreMissingWhich = !1, g = !1, e.preventDefault() },
        _mouseDistanceMet: function(t) { return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance },
        _mouseDelayMet: function() { return this.mouseDelayMet },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() { return !0 }
    }), t.ui.plugin = {
        add: function(e, i, n) { var s, o = t.ui[e].prototype; for (s in n) o.plugins[s] = o.plugins[s] || [], o.plugins[s].push([i, n[s]]) },
        call: function(t, e, i, n) {
            var s, o = t.plugins[e];
            if (o && (n || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType))
                for (s = 0; o.length > s; s++) t.options[o[s][0]] && o[s][1].apply(t.element, i)
        }
    }, t.ui.safeBlur = function(e) { e && "body" !== e.nodeName.toLowerCase() && t(e).trigger("blur") }, t.widget("ui.draggable", t.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "drag",
        options: { addClasses: !0, appendTo: "parent", axis: !1, connectToSortable: !1, containment: !1, cursor: "auto", cursorAt: !1, grid: !1, handle: !1, helper: "original", iframeFix: !1, opacity: !1, refreshPositions: !1, revert: !1, revertDuration: 500, scope: "default", scroll: !0, scrollSensitivity: 20, scrollSpeed: 20, snap: !1, snapMode: "both", snapTolerance: 20, stack: !1, zIndex: !1, drag: null, start: null, stop: null },
        _create: function() { "original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this._addClass("ui-draggable"), this._setHandleClassName(), this._mouseInit() },
        _setOption: function(t, e) { this._super(t, e), "handle" === t && (this._removeHandleClassName(), this._setHandleClassName()) },
        _destroy: function() { return (this.helper || this.element).is(".ui-draggable-dragging") ? void(this.destroyOnClear = !0) : (this._removeHandleClassName(), void this._mouseDestroy()) },
        _mouseCapture: function(e) { var i = this.options; return !(this.helper || i.disabled || t(e.target).closest(".ui-resizable-handle").length > 0) && (this.handle = this._getHandle(e), !!this.handle && (this._blurActiveElement(e), this._blockFrames(!0 === i.iframeFix ? "iframe" : i.iframeFix), !0)) },
        _blockFrames: function(e) { this.iframeBlocks = this.document.find(e).map(function() { var e = t(this); return t("<div>").css("position", "absolute").appendTo(e.parent()).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).offset(e.offset())[0] }) },
        _unblockFrames: function() { this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks) },
        _blurActiveElement: function(e) {
            var i = t.ui.safeActiveElement(this.document[0]);
            t(e.target).closest(i).length || t.ui.safeBlur(i)
        },
        _mouseStart: function(e) { var i = this.options; return this.helper = this._createHelper(e), this._addClass(this.helper, "ui-draggable-dragging"), this._cacheHelperProportions(), t.ui.ddmanager && (t.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = this.helper.parents().filter(function() { return "fixed" === t(this).css("position") }).length > 0, this.positionAbs = this.element.offset(), this._refreshOffsets(e), this.originalPosition = this.position = this._generatePosition(e, !1), this.originalPageX = e.pageX, this.originalPageY = e.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), !1 === this._trigger("start", e) ? (this._clear(), !1) : (this._cacheHelperProportions(), t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this._mouseDrag(e, !0), t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e), !0) },
        _refreshOffsets: function(t) { this.offset = { top: this.positionAbs.top - this.margins.top, left: this.positionAbs.left - this.margins.left, scroll: !1, parent: this._getParentOffset(), relative: this._getRelativeOffset() }, this.offset.click = { left: t.pageX - this.offset.left, top: t.pageY - this.offset.top } },
        _mouseDrag: function(e, i) {
            if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(e, !0), this.positionAbs = this._convertPositionTo("absolute"), !i) {
                var n = this._uiHash();
                if (!1 === this._trigger("drag", e, n)) return this._mouseUp(new t.Event("mouseup", e)), !1;
                this.position = n.position
            }
            return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", t.ui.ddmanager && t.ui.ddmanager.drag(this, e), !1
        },
        _mouseStop: function(e) {
            var i = this,
                n = !1;
            return t.ui.ddmanager && !this.options.dropBehaviour && (n = t.ui.ddmanager.drop(this, e)), this.dropped && (n = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !n || "valid" === this.options.revert && n || !0 === this.options.revert || t.isFunction(this.options.revert) && this.options.revert.call(this.element, n) ? t(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {!1 !== i._trigger("stop", e) && i._clear() }) : !1 !== this._trigger("stop", e) && this._clear(), !1
        },
        _mouseUp: function(e) { return this._unblockFrames(), t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e), this.handleElement.is(e.target) && this.element.trigger("focus"), t.ui.mouse.prototype._mouseUp.call(this, e) },
        cancel: function() { return this.helper.is(".ui-draggable-dragging") ? this._mouseUp(new t.Event("mouseup", { target: this.element[0] })) : this._clear(), this },
        _getHandle: function(e) { return !this.options.handle || !!t(e.target).closest(this.element.find(this.options.handle)).length },
        _setHandleClassName: function() { this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this._addClass(this.handleElement, "ui-draggable-handle") },
        _removeHandleClassName: function() { this._removeClass(this.handleElement, "ui-draggable-handle") },
        _createHelper: function(e) {
            var i = this.options,
                n = t.isFunction(i.helper),
                s = n ? t(i.helper.apply(this.element[0], [e])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
            return s.parents("body").length || s.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), n && s[0] === this.element[0] && this._setPositionRelative(), s[0] === this.element[0] || /(fixed|absolute)/.test(s.css("position")) || s.css("position", "absolute"), s
        },
        _setPositionRelative: function() { /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative") },
        _adjustOffsetFromHelper: function(e) { "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = { left: +e[0], top: +e[1] || 0 }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top) },
        _isRootNode: function(t) { return /(html|body)/i.test(t.tagName) || t === this.document[0] },
        _getParentOffset: function() {
            var e = this.offsetParent.offset(),
                i = this.document[0];
            return "absolute" === this.cssPosition && this.scrollParent[0] !== i && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (e = { top: 0, left: 0 }), { top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0) }
        },
        _getRelativeOffset: function() {
            if ("relative" !== this.cssPosition) return { top: 0, left: 0 };
            var t = this.element.position(),
                e = this._isRootNode(this.scrollParent[0]);
            return { top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + (e ? 0 : this.scrollParent.scrollTop()), left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + (e ? 0 : this.scrollParent.scrollLeft()) }
        },
        _cacheMargins: function() { this.margins = { left: parseInt(this.element.css("marginLeft"), 10) || 0, top: parseInt(this.element.css("marginTop"), 10) || 0, right: parseInt(this.element.css("marginRight"), 10) || 0, bottom: parseInt(this.element.css("marginBottom"), 10) || 0 } },
        _cacheHelperProportions: function() { this.helperProportions = { width: this.helper.outerWidth(), height: this.helper.outerHeight() } },
        _setContainment: function() {
            var e, i, n, s = this.options,
                o = this.document[0];
            return this.relativeContainer = null, s.containment ? "window" === s.containment ? void(this.containment = [t(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, t(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, t(window).scrollLeft() + t(window).width() - this.helperProportions.width - this.margins.left, t(window).scrollTop() + (t(window).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : "document" === s.containment ? void(this.containment = [0, 0, t(o).width() - this.helperProportions.width - this.margins.left, (t(o).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : s.containment.constructor === Array ? void(this.containment = s.containment) : ("parent" === s.containment && (s.containment = this.helper[0].parentNode), void((n = (i = t(s.containment))[0]) && (e = /(scroll|auto)/.test(i.css("overflow")), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (e ? Math.max(n.scrollWidth, n.offsetWidth) : n.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(n.scrollHeight, n.offsetHeight) : n.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = i))) : void(this.containment = null)
        },
        _convertPositionTo: function(t, e) {
            e || (e = this.position);
            var i = "absolute" === t ? 1 : -1,
                n = this._isRootNode(this.scrollParent[0]);
            return { top: e.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : n ? 0 : this.offset.scroll.top) * i, left: e.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : n ? 0 : this.offset.scroll.left) * i }
        },
        _generatePosition: function(t, e) {
            var i, n, s, o, r = this.options,
                a = this._isRootNode(this.scrollParent[0]),
                l = t.pageX,
                h = t.pageY;
            return a && this.offset.scroll || (this.offset.scroll = { top: this.scrollParent.scrollTop(), left: this.scrollParent.scrollLeft() }), e && (this.containment && (this.relativeContainer ? (n = this.relativeContainer.offset(), i = [this.containment[0] + n.left, this.containment[1] + n.top, this.containment[2] + n.left, this.containment[3] + n.top]) : i = this.containment, t.pageX - this.offset.click.left < i[0] && (l = i[0] + this.offset.click.left), t.pageY - this.offset.click.top < i[1] && (h = i[1] + this.offset.click.top), t.pageX - this.offset.click.left > i[2] && (l = i[2] + this.offset.click.left), t.pageY - this.offset.click.top > i[3] && (h = i[3] + this.offset.click.top)), r.grid && (s = r.grid[1] ? this.originalPageY + Math.round((h - this.originalPageY) / r.grid[1]) * r.grid[1] : this.originalPageY, h = i ? s - this.offset.click.top >= i[1] || s - this.offset.click.top > i[3] ? s : s - this.offset.click.top >= i[1] ? s - r.grid[1] : s + r.grid[1] : s, o = r.grid[0] ? this.originalPageX + Math.round((l - this.originalPageX) / r.grid[0]) * r.grid[0] : this.originalPageX, l = i ? o - this.offset.click.left >= i[0] || o - this.offset.click.left > i[2] ? o : o - this.offset.click.left >= i[0] ? o - r.grid[0] : o + r.grid[0] : o), "y" === r.axis && (l = this.originalPageX), "x" === r.axis && (h = this.originalPageY)), { top: h - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : a ? 0 : this.offset.scroll.top), left: l - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : a ? 0 : this.offset.scroll.left) }
        },
        _clear: function() { this._removeClass(this.helper, "ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy() },
        _trigger: function(e, i, n) { return n = n || this._uiHash(), t.ui.plugin.call(this, e, [i, n, this], !0), /^(drag|start|stop)/.test(e) && (this.positionAbs = this._convertPositionTo("absolute"), n.offset = this.positionAbs), t.Widget.prototype._trigger.call(this, e, i, n) },
        plugins: {},
        _uiHash: function() { return { helper: this.helper, position: this.position, originalPosition: this.originalPosition, offset: this.positionAbs } }
    }), t.ui.plugin.add("draggable", "connectToSortable", {
        start: function(e, i, n) {
            var s = t.extend({}, i, { item: n.element });
            n.sortables = [], t(n.options.connectToSortable).each(function() {
                var i = t(this).sortable("instance");
                i && !i.options.disabled && (n.sortables.push(i), i.refreshPositions(), i._trigger("activate", e, s))
            })
        },
        stop: function(e, i, n) {
            var s = t.extend({}, i, { item: n.element });
            n.cancelHelperRemoval = !1, t.each(n.sortables, function() {
                var t = this;
                t.isOver ? (t.isOver = 0, n.cancelHelperRemoval = !0, t.cancelHelperRemoval = !1, t._storedCSS = { position: t.placeholder.css("position"), top: t.placeholder.css("top"), left: t.placeholder.css("left") }, t._mouseStop(e), t.options.helper = t.options._helper) : (t.cancelHelperRemoval = !0, t._trigger("deactivate", e, s))
            })
        },
        drag: function(e, i, n) {
            t.each(n.sortables, function() {
                var s = !1,
                    o = this;
                o.positionAbs = n.positionAbs, o.helperProportions = n.helperProportions, o.offset.click = n.offset.click, o._intersectsWith(o.containerCache) && (s = !0, t.each(n.sortables, function() { return this.positionAbs = n.positionAbs, this.helperProportions = n.helperProportions, this.offset.click = n.offset.click, this !== o && this._intersectsWith(this.containerCache) && t.contains(o.element[0], this.element[0]) && (s = !1), s })), s ? (o.isOver || (o.isOver = 1, n._parent = i.helper.parent(), o.currentItem = i.helper.appendTo(o.element).data("ui-sortable-item", !0), o.options._helper = o.options.helper, o.options.helper = function() { return i.helper[0] }, e.target = o.currentItem[0], o._mouseCapture(e, !0), o._mouseStart(e, !0, !0), o.offset.click.top = n.offset.click.top, o.offset.click.left = n.offset.click.left, o.offset.parent.left -= n.offset.parent.left - o.offset.parent.left, o.offset.parent.top -= n.offset.parent.top - o.offset.parent.top, n._trigger("toSortable", e), n.dropped = o.element, t.each(n.sortables, function() { this.refreshPositions() }), n.currentItem = n.element, o.fromOutside = n), o.currentItem && (o._mouseDrag(e), i.position = o.position)) : o.isOver && (o.isOver = 0, o.cancelHelperRemoval = !0, o.options._revert = o.options.revert, o.options.revert = !1, o._trigger("out", e, o._uiHash(o)), o._mouseStop(e, !0), o.options.revert = o.options._revert, o.options.helper = o.options._helper, o.placeholder && o.placeholder.remove(), i.helper.appendTo(n._parent), n._refreshOffsets(e), i.position = n._generatePosition(e, !0), n._trigger("fromSortable", e), n.dropped = !1, t.each(n.sortables, function() { this.refreshPositions() }))
            })
        }
    }), t.ui.plugin.add("draggable", "cursor", {
        start: function(e, i, n) {
            var s = t("body"),
                o = n.options;
            s.css("cursor") && (o._cursor = s.css("cursor")), s.css("cursor", o.cursor)
        },
        stop: function(e, i, n) {
            var s = n.options;
            s._cursor && t("body").css("cursor", s._cursor)
        }
    }), t.ui.plugin.add("draggable", "opacity", {
        start: function(e, i, n) {
            var s = t(i.helper),
                o = n.options;
            s.css("opacity") && (o._opacity = s.css("opacity")), s.css("opacity", o.opacity)
        },
        stop: function(e, i, n) {
            var s = n.options;
            s._opacity && t(i.helper).css("opacity", s._opacity)
        }
    }), t.ui.plugin.add("draggable", "scroll", {
        start: function(t, e, i) { i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)), i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset()) },
        drag: function(e, i, n) {
            var s = n.options,
                o = !1,
                r = n.scrollParentNotHidden[0],
                a = n.document[0];
            r !== a && "HTML" !== r.tagName ? (s.axis && "x" === s.axis || (n.overflowOffset.top + r.offsetHeight - e.pageY < s.scrollSensitivity ? r.scrollTop = o = r.scrollTop + s.scrollSpeed : e.pageY - n.overflowOffset.top < s.scrollSensitivity && (r.scrollTop = o = r.scrollTop - s.scrollSpeed)), s.axis && "y" === s.axis || (n.overflowOffset.left + r.offsetWidth - e.pageX < s.scrollSensitivity ? r.scrollLeft = o = r.scrollLeft + s.scrollSpeed : e.pageX - n.overflowOffset.left < s.scrollSensitivity && (r.scrollLeft = o = r.scrollLeft - s.scrollSpeed))) : (s.axis && "x" === s.axis || (e.pageY - t(a).scrollTop() < s.scrollSensitivity ? o = t(a).scrollTop(t(a).scrollTop() - s.scrollSpeed) : t(window).height() - (e.pageY - t(a).scrollTop()) < s.scrollSensitivity && (o = t(a).scrollTop(t(a).scrollTop() + s.scrollSpeed))), s.axis && "y" === s.axis || (e.pageX - t(a).scrollLeft() < s.scrollSensitivity ? o = t(a).scrollLeft(t(a).scrollLeft() - s.scrollSpeed) : t(window).width() - (e.pageX - t(a).scrollLeft()) < s.scrollSensitivity && (o = t(a).scrollLeft(t(a).scrollLeft() + s.scrollSpeed)))), !1 !== o && t.ui.ddmanager && !s.dropBehaviour && t.ui.ddmanager.prepareOffsets(n, e)
        }
    }), t.ui.plugin.add("draggable", "snap", {
        start: function(e, i, n) {
            var s = n.options;
            n.snapElements = [], t(s.snap.constructor !== String ? s.snap.items || ":data(ui-draggable)" : s.snap).each(function() {
                var e = t(this),
                    i = e.offset();
                this !== n.element[0] && n.snapElements.push({ item: this, width: e.outerWidth(), height: e.outerHeight(), top: i.top, left: i.left })
            })
        },
        drag: function(e, i, n) {
            var s, o, r, a, l, h, c, u, d, p, f = n.options,
                m = f.snapTolerance,
                g = i.offset.left,
                v = g + n.helperProportions.width,
                _ = i.offset.top,
                y = _ + n.helperProportions.height;
            for (d = n.snapElements.length - 1; d >= 0; d--) h = (l = n.snapElements[d].left - n.margins.left) + n.snapElements[d].width, u = (c = n.snapElements[d].top - n.margins.top) + n.snapElements[d].height, l - m > v || g > h + m || c - m > y || _ > u + m || !t.contains(n.snapElements[d].item.ownerDocument, n.snapElements[d].item) ? (n.snapElements[d].snapping && n.options.snap.release && n.options.snap.release.call(n.element, e, t.extend(n._uiHash(), { snapItem: n.snapElements[d].item })), n.snapElements[d].snapping = !1) : ("inner" !== f.snapMode && (s = m >= Math.abs(c - y), o = m >= Math.abs(u - _), r = m >= Math.abs(l - v), a = m >= Math.abs(h - g), s && (i.position.top = n._convertPositionTo("relative", { top: c - n.helperProportions.height, left: 0 }).top), o && (i.position.top = n._convertPositionTo("relative", { top: u, left: 0 }).top), r && (i.position.left = n._convertPositionTo("relative", { top: 0, left: l - n.helperProportions.width }).left), a && (i.position.left = n._convertPositionTo("relative", { top: 0, left: h }).left)), p = s || o || r || a, "outer" !== f.snapMode && (s = m >= Math.abs(c - _), o = m >= Math.abs(u - y), r = m >= Math.abs(l - g), a = m >= Math.abs(h - v), s && (i.position.top = n._convertPositionTo("relative", { top: c, left: 0 }).top), o && (i.position.top = n._convertPositionTo("relative", { top: u - n.helperProportions.height, left: 0 }).top), r && (i.position.left = n._convertPositionTo("relative", { top: 0, left: l }).left), a && (i.position.left = n._convertPositionTo("relative", { top: 0, left: h - n.helperProportions.width }).left)), !n.snapElements[d].snapping && (s || o || r || a || p) && n.options.snap.snap && n.options.snap.snap.call(n.element, e, t.extend(n._uiHash(), { snapItem: n.snapElements[d].item })), n.snapElements[d].snapping = s || o || r || a || p)
        }
    }), t.ui.plugin.add("draggable", "stack", {
        start: function(e, i, n) {
            var s, o = n.options,
                r = t.makeArray(t(o.stack)).sort(function(e, i) { return (parseInt(t(e).css("zIndex"), 10) || 0) - (parseInt(t(i).css("zIndex"), 10) || 0) });
            r.length && (s = parseInt(t(r[0]).css("zIndex"), 10) || 0, t(r).each(function(e) { t(this).css("zIndex", s + e) }), this.css("zIndex", s + r.length))
        }
    }), t.ui.plugin.add("draggable", "zIndex", {
        start: function(e, i, n) {
            var s = t(i.helper),
                o = n.options;
            s.css("zIndex") && (o._zIndex = s.css("zIndex")), s.css("zIndex", o.zIndex)
        },
        stop: function(e, i, n) {
            var s = n.options;
            s._zIndex && t(i.helper).css("zIndex", s._zIndex)
        }
    }), t.ui.draggable, t.widget("ui.resizable", t.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "resize",
        options: { alsoResize: !1, animate: !1, animateDuration: "slow", animateEasing: "swing", aspectRatio: !1, autoHide: !1, classes: { "ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se" }, containment: !1, ghost: !1, grid: !1, handles: "e,s,se", helper: !1, maxHeight: null, maxWidth: null, minHeight: 10, minWidth: 10, zIndex: 90, resize: null, start: null, stop: null },
        _num: function(t) { return parseFloat(t) || 0 },
        _isNumber: function(t) { return !isNaN(parseFloat(t)) },
        _hasScroll: function(e, i) {
            if ("hidden" === t(e).css("overflow")) return !1;
            var n = i && "left" === i ? "scrollLeft" : "scrollTop",
                s = !1;
            return e[n] > 0 || (e[n] = 1, s = e[n] > 0, e[n] = 0, s)
        },
        _create: function() {
            var e, i = this.options,
                n = this;
            this._addClass("ui-resizable"), t.extend(this, { _aspectRatio: !!i.aspectRatio, aspectRatio: i.aspectRatio, originalElement: this.element, _proportionallyResizeElements: [], _helper: i.helper || i.ghost || i.animate ? i.helper || "ui-resizable-helper" : null }), this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({ position: this.element.css("position"), width: this.element.outerWidth(), height: this.element.outerHeight(), top: this.element.css("top"), left: this.element.css("left") })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, e = { marginTop: this.originalElement.css("marginTop"), marginRight: this.originalElement.css("marginRight"), marginBottom: this.originalElement.css("marginBottom"), marginLeft: this.originalElement.css("marginLeft") }, this.element.css(e), this.originalElement.css("margin", 0), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({ position: "static", zoom: 1, display: "block" })), this.originalElement.css(e), this._proportionallyResize()), this._setupHandles(), i.autoHide && t(this.element).on("mouseenter", function() { i.disabled || (n._removeClass("ui-resizable-autohide"), n._handles.show()) }).on("mouseleave", function() { i.disabled || n.resizing || (n._addClass("ui-resizable-autohide"), n._handles.hide()) }), this._mouseInit()
        },
        _destroy: function() { this._mouseDestroy(); var e, i = function(e) { t(e).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove() }; return this.elementIsWrapper && (i(this.element), e = this.element, this.originalElement.css({ position: e.css("position"), width: e.outerWidth(), height: e.outerHeight(), top: e.css("top"), left: e.css("left") }).insertAfter(e), e.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this },
        _setOption: function(t, e) {
            switch (this._super(t, e), t) {
                case "handles":
                    this._removeHandles(), this._setupHandles()
            }
        },
        _setupHandles: function() {
            var e, i, n, s, o, r = this.options,
                a = this;
            if (this.handles = r.handles || (t(".ui-resizable-handle", this.element).length ? { n: ".ui-resizable-n", e: ".ui-resizable-e", s: ".ui-resizable-s", w: ".ui-resizable-w", se: ".ui-resizable-se", sw: ".ui-resizable-sw", ne: ".ui-resizable-ne", nw: ".ui-resizable-nw" } : "e,s,se"), this._handles = t(), this.handles.constructor === String)
                for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), n = this.handles.split(","), this.handles = {}, i = 0; n.length > i; i++) s = "ui-resizable-" + (e = t.trim(n[i])), o = t("<div>"), this._addClass(o, "ui-resizable-handle " + s), o.css({ zIndex: r.zIndex }), this.handles[e] = ".ui-resizable-" + e, this.element.append(o);
            this._renderAxis = function(e) { var i, n, s, o; for (i in e = e || this.element, this.handles) this.handles[i].constructor === String ? this.handles[i] = this.element.children(this.handles[i]).first().show() : (this.handles[i].jquery || this.handles[i].nodeType) && (this.handles[i] = t(this.handles[i]), this._on(this.handles[i], { mousedown: a._mouseDown })), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (n = t(this.handles[i], this.element), o = /sw|ne|nw|se|n|s/.test(i) ? n.outerHeight() : n.outerWidth(), s = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), e.css(s, o), this._proportionallyResize()), this._handles = this._handles.add(this.handles[i]) }, this._renderAxis(this.element), this._handles = this._handles.add(this.element.find(".ui-resizable-handle")), this._handles.disableSelection(), this._handles.on("mouseover", function() { a.resizing || (this.className && (o = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), a.axis = o && o[1] ? o[1] : "se") }), r.autoHide && (this._handles.hide(), this._addClass("ui-resizable-autohide"))
        },
        _removeHandles: function() { this._handles.remove() },
        _mouseCapture: function(e) { var i, n, s = !1; for (i in this.handles)((n = t(this.handles[i])[0]) === e.target || t.contains(n, e.target)) && (s = !0); return !this.options.disabled && s },
        _mouseStart: function(e) {
            var i, n, s, o = this.options,
                r = this.element;
            return this.resizing = !0, this._renderProxy(), i = this._num(this.helper.css("left")), n = this._num(this.helper.css("top")), o.containment && (i += t(o.containment).scrollLeft() || 0, n += t(o.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = { left: i, top: n }, this.size = this._helper ? { width: this.helper.width(), height: this.helper.height() } : { width: r.width(), height: r.height() }, this.originalSize = this._helper ? { width: r.outerWidth(), height: r.outerHeight() } : { width: r.width(), height: r.height() }, this.sizeDiff = { width: r.outerWidth() - r.width(), height: r.outerHeight() - r.height() }, this.originalPosition = { left: i, top: n }, this.originalMousePosition = { left: e.pageX, top: e.pageY }, this.aspectRatio = "number" == typeof o.aspectRatio ? o.aspectRatio : this.originalSize.width / this.originalSize.height || 1, s = t(".ui-resizable-" + this.axis).css("cursor"), t("body").css("cursor", "auto" === s ? this.axis + "-resize" : s), this._addClass("ui-resizable-resizing"), this._propagate("start", e), !0
        },
        _mouseDrag: function(e) {
            var i, n, s = this.originalMousePosition,
                o = this.axis,
                r = e.pageX - s.left || 0,
                a = e.pageY - s.top || 0,
                l = this._change[o];
            return this._updatePrevProperties(), !!l && (i = l.apply(this, [e, r, a]), this._updateVirtualBoundaries(e.shiftKey), (this._aspectRatio || e.shiftKey) && (i = this._updateRatio(i, e)), i = this._respectSize(i, e), this._updateCache(i), this._propagate("resize", e), n = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), t.isEmptyObject(n) || (this._updatePrevProperties(), this._trigger("resize", e, this.ui()), this._applyChanges()), !1)
        },
        _mouseStop: function(e) {
            this.resizing = !1;
            var i, n, s, o, r, a, l, h = this.options,
                c = this;
            return this._helper && (s = (n = (i = this._proportionallyResizeElements).length && /textarea/i.test(i[0].nodeName)) && this._hasScroll(i[0], "left") ? 0 : c.sizeDiff.height, o = n ? 0 : c.sizeDiff.width, r = { width: c.helper.width() - o, height: c.helper.height() - s }, a = parseFloat(c.element.css("left")) + (c.position.left - c.originalPosition.left) || null, l = parseFloat(c.element.css("top")) + (c.position.top - c.originalPosition.top) || null, h.animate || this.element.css(t.extend(r, { top: l, left: a })), c.helper.height(c.size.height), c.helper.width(c.size.width), this._helper && !h.animate && this._proportionallyResize()), t("body").css("cursor", "auto"), this._removeClass("ui-resizable-resizing"), this._propagate("stop", e), this._helper && this.helper.remove(), !1
        },
        _updatePrevProperties: function() { this.prevPosition = { top: this.position.top, left: this.position.left }, this.prevSize = { width: this.size.width, height: this.size.height } },
        _applyChanges: function() { var t = {}; return this.position.top !== this.prevPosition.top && (t.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (t.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (t.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (t.height = this.size.height + "px"), this.helper.css(t), t },
        _updateVirtualBoundaries: function(t) {
            var e, i, n, s, o, r = this.options;
            o = { minWidth: this._isNumber(r.minWidth) ? r.minWidth : 0, maxWidth: this._isNumber(r.maxWidth) ? r.maxWidth : 1 / 0, minHeight: this._isNumber(r.minHeight) ? r.minHeight : 0, maxHeight: this._isNumber(r.maxHeight) ? r.maxHeight : 1 / 0 }, (this._aspectRatio || t) && (e = o.minHeight * this.aspectRatio, n = o.minWidth / this.aspectRatio, i = o.maxHeight * this.aspectRatio, s = o.maxWidth / this.aspectRatio, e > o.minWidth && (o.minWidth = e), n > o.minHeight && (o.minHeight = n), o.maxWidth > i && (o.maxWidth = i), o.maxHeight > s && (o.maxHeight = s)), this._vBoundaries = o
        },
        _updateCache: function(t) { this.offset = this.helper.offset(), this._isNumber(t.left) && (this.position.left = t.left), this._isNumber(t.top) && (this.position.top = t.top), this._isNumber(t.height) && (this.size.height = t.height), this._isNumber(t.width) && (this.size.width = t.width) },
        _updateRatio: function(t) {
            var e = this.position,
                i = this.size,
                n = this.axis;
            return this._isNumber(t.height) ? t.width = t.height * this.aspectRatio : this._isNumber(t.width) && (t.height = t.width / this.aspectRatio), "sw" === n && (t.left = e.left + (i.width - t.width), t.top = null), "nw" === n && (t.top = e.top + (i.height - t.height), t.left = e.left + (i.width - t.width)), t
        },
        _respectSize: function(t) {
            var e = this._vBoundaries,
                i = this.axis,
                n = this._isNumber(t.width) && e.maxWidth && e.maxWidth < t.width,
                s = this._isNumber(t.height) && e.maxHeight && e.maxHeight < t.height,
                o = this._isNumber(t.width) && e.minWidth && e.minWidth > t.width,
                r = this._isNumber(t.height) && e.minHeight && e.minHeight > t.height,
                a = this.originalPosition.left + this.originalSize.width,
                l = this.originalPosition.top + this.originalSize.height,
                h = /sw|nw|w/.test(i),
                c = /nw|ne|n/.test(i);
            return o && (t.width = e.minWidth), r && (t.height = e.minHeight), n && (t.width = e.maxWidth), s && (t.height = e.maxHeight), o && h && (t.left = a - e.minWidth), n && h && (t.left = a - e.maxWidth), r && c && (t.top = l - e.minHeight), s && c && (t.top = l - e.maxHeight), t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : t.top = null, t
        },
        _getPaddingPlusBorderDimensions: function(t) { for (var e = 0, i = [], n = [t.css("borderTopWidth"), t.css("borderRightWidth"), t.css("borderBottomWidth"), t.css("borderLeftWidth")], s = [t.css("paddingTop"), t.css("paddingRight"), t.css("paddingBottom"), t.css("paddingLeft")]; 4 > e; e++) i[e] = parseFloat(n[e]) || 0, i[e] += parseFloat(s[e]) || 0; return { height: i[0] + i[2], width: i[1] + i[3] } },
        _proportionallyResize: function() {
            if (this._proportionallyResizeElements.length)
                for (var t, e = 0, i = this.helper || this.element; this._proportionallyResizeElements.length > e; e++) t = this._proportionallyResizeElements[e], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(t)), t.css({ height: i.height() - this.outerDimensions.height || 0, width: i.width() - this.outerDimensions.width || 0 })
        },
        _renderProxy: function() {
            var e = this.element,
                i = this.options;
            this.elementOffset = e.offset(), this._helper ? (this.helper = this.helper || t("<div style='overflow:hidden;'></div>"), this._addClass(this.helper, this._helper), this.helper.css({ width: this.element.outerWidth(), height: this.element.outerHeight(), position: "absolute", left: this.elementOffset.left + "px", top: this.elementOffset.top + "px", zIndex: ++i.zIndex }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
        },
        _change: { e: function(t, e) { return { width: this.originalSize.width + e } }, w: function(t, e) { var i = this.originalSize; return { left: this.originalPosition.left + e, width: i.width - e } }, n: function(t, e, i) { var n = this.originalSize; return { top: this.originalPosition.top + i, height: n.height - i } }, s: function(t, e, i) { return { height: this.originalSize.height + i } }, se: function(e, i, n) { return t.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [e, i, n])) }, sw: function(e, i, n) { return t.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [e, i, n])) }, ne: function(e, i, n) { return t.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [e, i, n])) }, nw: function(e, i, n) { return t.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [e, i, n])) } },
        _propagate: function(e, i) { t.ui.plugin.call(this, e, [i, this.ui()]), "resize" !== e && this._trigger(e, i, this.ui()) },
        plugins: {},
        ui: function() { return { originalElement: this.originalElement, element: this.element, helper: this.helper, position: this.position, size: this.size, originalSize: this.originalSize, originalPosition: this.originalPosition } }
    }), t.ui.plugin.add("resizable", "animate", {
        stop: function(e) {
            var i = t(this).resizable("instance"),
                n = i.options,
                s = i._proportionallyResizeElements,
                o = s.length && /textarea/i.test(s[0].nodeName),
                r = o && i._hasScroll(s[0], "left") ? 0 : i.sizeDiff.height,
                a = o ? 0 : i.sizeDiff.width,
                l = { width: i.size.width - a, height: i.size.height - r },
                h = parseFloat(i.element.css("left")) + (i.position.left - i.originalPosition.left) || null,
                c = parseFloat(i.element.css("top")) + (i.position.top - i.originalPosition.top) || null;
            i.element.animate(t.extend(l, c && h ? { top: c, left: h } : {}), {
                duration: n.animateDuration,
                easing: n.animateEasing,
                step: function() {
                    var n = { width: parseFloat(i.element.css("width")), height: parseFloat(i.element.css("height")), top: parseFloat(i.element.css("top")), left: parseFloat(i.element.css("left")) };
                    s && s.length && t(s[0]).css({ width: n.width, height: n.height }), i._updateCache(n), i._propagate("resize", e)
                }
            })
        }
    }), t.ui.plugin.add("resizable", "containment", {
        start: function() {
            var e, i, n, s, o, r, a, l = t(this).resizable("instance"),
                h = l.options,
                c = l.element,
                u = h.containment,
                d = u instanceof t ? u.get(0) : /parent/.test(u) ? c.parent().get(0) : u;
            d && (l.containerElement = t(d), /document/.test(u) || u === document ? (l.containerOffset = { left: 0, top: 0 }, l.containerPosition = { left: 0, top: 0 }, l.parentData = { element: t(document), left: 0, top: 0, width: t(document).width(), height: t(document).height() || document.body.parentNode.scrollHeight }) : (e = t(d), i = [], t(["Top", "Right", "Left", "Bottom"]).each(function(t, n) { i[t] = l._num(e.css("padding" + n)) }), l.containerOffset = e.offset(), l.containerPosition = e.position(), l.containerSize = { height: e.innerHeight() - i[3], width: e.innerWidth() - i[1] }, n = l.containerOffset, s = l.containerSize.height, o = l.containerSize.width, r = l._hasScroll(d, "left") ? d.scrollWidth : o, a = l._hasScroll(d) ? d.scrollHeight : s, l.parentData = { element: d, left: n.left, top: n.top, width: r, height: a }))
        },
        resize: function(e) {
            var i, n, s, o, r = t(this).resizable("instance"),
                a = r.options,
                l = r.containerOffset,
                h = r.position,
                c = r._aspectRatio || e.shiftKey,
                u = { top: 0, left: 0 },
                d = r.containerElement,
                p = !0;
            d[0] !== document && /static/.test(d.css("position")) && (u = l), h.left < (r._helper ? l.left : 0) && (r.size.width = r.size.width + (r._helper ? r.position.left - l.left : r.position.left - u.left), c && (r.size.height = r.size.width / r.aspectRatio, p = !1), r.position.left = a.helper ? l.left : 0), h.top < (r._helper ? l.top : 0) && (r.size.height = r.size.height + (r._helper ? r.position.top - l.top : r.position.top), c && (r.size.width = r.size.height * r.aspectRatio, p = !1), r.position.top = r._helper ? l.top : 0), s = r.containerElement.get(0) === r.element.parent().get(0), o = /relative|absolute/.test(r.containerElement.css("position")), s && o ? (r.offset.left = r.parentData.left + r.position.left, r.offset.top = r.parentData.top + r.position.top) : (r.offset.left = r.element.offset().left, r.offset.top = r.element.offset().top), i = Math.abs(r.sizeDiff.width + (r._helper ? r.offset.left - u.left : r.offset.left - l.left)), n = Math.abs(r.sizeDiff.height + (r._helper ? r.offset.top - u.top : r.offset.top - l.top)), i + r.size.width >= r.parentData.width && (r.size.width = r.parentData.width - i, c && (r.size.height = r.size.width / r.aspectRatio, p = !1)), n + r.size.height >= r.parentData.height && (r.size.height = r.parentData.height - n, c && (r.size.width = r.size.height * r.aspectRatio, p = !1)), p || (r.position.left = r.prevPosition.left, r.position.top = r.prevPosition.top, r.size.width = r.prevSize.width, r.size.height = r.prevSize.height)
        },
        stop: function() {
            var e = t(this).resizable("instance"),
                i = e.options,
                n = e.containerOffset,
                s = e.containerPosition,
                o = e.containerElement,
                r = t(e.helper),
                a = r.offset(),
                l = r.outerWidth() - e.sizeDiff.width,
                h = r.outerHeight() - e.sizeDiff.height;
            e._helper && !i.animate && /relative/.test(o.css("position")) && t(this).css({ left: a.left - s.left - n.left, width: l, height: h }), e._helper && !i.animate && /static/.test(o.css("position")) && t(this).css({ left: a.left - s.left - n.left, width: l, height: h })
        }
    }), t.ui.plugin.add("resizable", "alsoResize", {
        start: function() {
            var e = t(this).resizable("instance").options;
            t(e.alsoResize).each(function() {
                var e = t(this);
                e.data("ui-resizable-alsoresize", { width: parseFloat(e.width()), height: parseFloat(e.height()), left: parseFloat(e.css("left")), top: parseFloat(e.css("top")) })
            })
        },
        resize: function(e, i) {
            var n = t(this).resizable("instance"),
                s = n.options,
                o = n.originalSize,
                r = n.originalPosition,
                a = { height: n.size.height - o.height || 0, width: n.size.width - o.width || 0, top: n.position.top - r.top || 0, left: n.position.left - r.left || 0 };
            t(s.alsoResize).each(function() {
                var e = t(this),
                    n = t(this).data("ui-resizable-alsoresize"),
                    s = {},
                    o = e.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                t.each(o, function(t, e) {
                    var i = (n[e] || 0) + (a[e] || 0);
                    i && i >= 0 && (s[e] = i || null)
                }), e.css(s)
            })
        },
        stop: function() { t(this).removeData("ui-resizable-alsoresize") }
    }), t.ui.plugin.add("resizable", "ghost", {
        start: function() {
            var e = t(this).resizable("instance"),
                i = e.size;
            e.ghost = e.originalElement.clone(), e.ghost.css({ opacity: .25, display: "block", position: "relative", height: i.height, width: i.width, margin: 0, left: 0, top: 0 }), e._addClass(e.ghost, "ui-resizable-ghost"), !1 !== t.uiBackCompat && "string" == typeof e.options.ghost && e.ghost.addClass(this.options.ghost), e.ghost.appendTo(e.helper)
        },
        resize: function() {
            var e = t(this).resizable("instance");
            e.ghost && e.ghost.css({ position: "relative", height: e.size.height, width: e.size.width })
        },
        stop: function() {
            var e = t(this).resizable("instance");
            e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0))
        }
    }), t.ui.plugin.add("resizable", "grid", {
        resize: function() {
            var e, i = t(this).resizable("instance"),
                n = i.options,
                s = i.size,
                o = i.originalSize,
                r = i.originalPosition,
                a = i.axis,
                l = "number" == typeof n.grid ? [n.grid, n.grid] : n.grid,
                h = l[0] || 1,
                c = l[1] || 1,
                u = Math.round((s.width - o.width) / h) * h,
                d = Math.round((s.height - o.height) / c) * c,
                p = o.width + u,
                f = o.height + d,
                m = n.maxWidth && p > n.maxWidth,
                g = n.maxHeight && f > n.maxHeight,
                v = n.minWidth && n.minWidth > p,
                _ = n.minHeight && n.minHeight > f;
            n.grid = l, v && (p += h), _ && (f += c), m && (p -= h), g && (f -= c), /^(se|s|e)$/.test(a) ? (i.size.width = p, i.size.height = f) : /^(ne)$/.test(a) ? (i.size.width = p, i.size.height = f, i.position.top = r.top - d) : /^(sw)$/.test(a) ? (i.size.width = p, i.size.height = f, i.position.left = r.left - u) : ((0 >= f - c || 0 >= p - h) && (e = i._getPaddingPlusBorderDimensions(this)), f - c > 0 ? (i.size.height = f, i.position.top = r.top - d) : (f = c - e.height, i.size.height = f, i.position.top = r.top + o.height - f), p - h > 0 ? (i.size.width = p, i.position.left = r.left - u) : (p = h - e.width, i.size.width = p, i.position.left = r.left + o.width - p))
        }
    }), t.ui.resizable, t.widget("ui.dialog", {
        version: "1.12.1",
        options: {
            appendTo: "body",
            autoOpen: !0,
            buttons: [],
            classes: { "ui-dialog": "ui-corner-all", "ui-dialog-titlebar": "ui-corner-all" },
            closeOnEscape: !0,
            closeText: "Close",
            draggable: !0,
            hide: null,
            height: "auto",
            maxHeight: null,
            maxWidth: null,
            minHeight: 150,
            minWidth: 150,
            modal: !1,
            position: {
                my: "center",
                at: "center",
                of: window,
                collision: "fit",
                using: function(e) {
                    var i = t(this).css(e).offset().top;
                    0 > i && t(this).css("top", e.top - i)
                }
            },
            resizable: !0,
            show: null,
            title: null,
            width: 300,
            beforeClose: null,
            close: null,
            drag: null,
            dragStart: null,
            dragStop: null,
            focus: null,
            open: null,
            resize: null,
            resizeStart: null,
            resizeStop: null
        },
        sizeRelatedOptions: { buttons: !0, height: !0, maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0, width: !0 },
        resizableRelatedOptions: { maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0 },
        _create: function() { this.originalCss = { display: this.element[0].style.display, width: this.element[0].style.width, minHeight: this.element[0].style.minHeight, maxHeight: this.element[0].style.maxHeight, height: this.element[0].style.height }, this.originalPosition = { parent: this.element.parent(), index: this.element.parent().children().index(this.element) }, this.originalTitle = this.element.attr("title"), null == this.options.title && null != this.originalTitle && (this.options.title = this.originalTitle), this.options.disabled && (this.options.disabled = !1), this._createWrapper(), this.element.show().removeAttr("title").appendTo(this.uiDialog), this._addClass("ui-dialog-content", "ui-widget-content"), this._createTitlebar(), this._createButtonPane(), this.options.draggable && t.fn.draggable && this._makeDraggable(), this.options.resizable && t.fn.resizable && this._makeResizable(), this._isOpen = !1, this._trackFocus() },
        _init: function() { this.options.autoOpen && this.open() },
        _appendTo: function() { var e = this.options.appendTo; return e && (e.jquery || e.nodeType) ? t(e) : this.document.find(e || "body").eq(0) },
        _destroy: function() {
            var t, e = this.originalPosition;
            this._untrackInstance(), this._destroyOverlay(), this.element.removeUniqueId().css(this.originalCss).detach(), this.uiDialog.remove(), this.originalTitle && this.element.attr("title", this.originalTitle), (t = e.parent.children().eq(e.index)).length && t[0] !== this.element[0] ? t.before(this.element) : e.parent.append(this.element)
        },
        widget: function() { return this.uiDialog },
        disable: t.noop,
        enable: t.noop,
        close: function(e) {
            var i = this;
            this._isOpen && !1 !== this._trigger("beforeClose", e) && (this._isOpen = !1, this._focusedElement = null, this._destroyOverlay(), this._untrackInstance(), this.opener.filter(":focusable").trigger("focus").length || t.ui.safeBlur(t.ui.safeActiveElement(this.document[0])), this._hide(this.uiDialog, this.options.hide, function() { i._trigger("close", e) }))
        },
        isOpen: function() { return this._isOpen },
        moveToTop: function() { this._moveToTop() },
        _moveToTop: function(e, i) {
            var n = !1,
                s = this.uiDialog.siblings(".ui-front:visible").map(function() { return +t(this).css("z-index") }).get(),
                o = Math.max.apply(null, s);
            return o >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", o + 1), n = !0), n && !i && this._trigger("focus", e), n
        },
        open: function() { var e = this; return this._isOpen ? void(this._moveToTop() && this._focusTabbable()) : (this._isOpen = !0, this.opener = t(t.ui.safeActiveElement(this.document[0])), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), this._show(this.uiDialog, this.options.show, function() { e._focusTabbable(), e._trigger("focus") }), this._makeFocusTarget(), void this._trigger("open")) },
        _focusTabbable: function() {
            var t = this._focusedElement;
            t || (t = this.element.find("[autofocus]")), t.length || (t = this.element.find(":tabbable")), t.length || (t = this.uiDialogButtonPane.find(":tabbable")), t.length || (t = this.uiDialogTitlebarClose.filter(":tabbable")), t.length || (t = this.uiDialog), t.eq(0).trigger("focus")
        },
        _keepFocus: function(e) {
            function i() {
                var e = t.ui.safeActiveElement(this.document[0]);
                this.uiDialog[0] === e || t.contains(this.uiDialog[0], e) || this._focusTabbable()
            }
            e.preventDefault(), i.call(this), this._delay(i)
        },
        _createWrapper: function() {
            this.uiDialog = t("<div>").hide().attr({ tabIndex: -1, role: "dialog" }).appendTo(this._appendTo()), this._addClass(this.uiDialog, "ui-dialog", "ui-widget ui-widget-content ui-front"), this._on(this.uiDialog, {
                keydown: function(e) {
                    if (this.options.closeOnEscape && !e.isDefaultPrevented() && e.keyCode && e.keyCode === t.ui.keyCode.ESCAPE) return e.preventDefault(), void this.close(e);
                    if (e.keyCode === t.ui.keyCode.TAB && !e.isDefaultPrevented()) {
                        var i = this.uiDialog.find(":tabbable"),
                            n = i.filter(":first"),
                            s = i.filter(":last");
                        e.target !== s[0] && e.target !== this.uiDialog[0] || e.shiftKey ? e.target !== n[0] && e.target !== this.uiDialog[0] || !e.shiftKey || (this._delay(function() { s.trigger("focus") }), e.preventDefault()) : (this._delay(function() { n.trigger("focus") }), e.preventDefault())
                    }
                },
                mousedown: function(t) { this._moveToTop(t) && this._focusTabbable() }
            }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({ "aria-describedby": this.element.uniqueId().attr("id") })
        },
        _createTitlebar: function() {
            var e;
            this.uiDialogTitlebar = t("<div>"), this._addClass(this.uiDialogTitlebar, "ui-dialog-titlebar", "ui-widget-header ui-helper-clearfix"), this._on(this.uiDialogTitlebar, { mousedown: function(e) { t(e.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.trigger("focus") } }), this.uiDialogTitlebarClose = t("<button type='button'></button>").button({ label: t("<a>").text(this.options.closeText).html(), icon: "ui-icon-closethick", showLabel: !1 }).appendTo(this.uiDialogTitlebar), this._addClass(this.uiDialogTitlebarClose, "ui-dialog-titlebar-close"), this._on(this.uiDialogTitlebarClose, {
                click: function(t) { t.preventDefault(), this.close(t) }
            }), e = t("<span>").uniqueId().prependTo(this.uiDialogTitlebar), this._addClass(e, "ui-dialog-title"), this._title(e), this.uiDialogTitlebar.prependTo(this.uiDialog), this.uiDialog.attr({ "aria-labelledby": e.attr("id") })
        },
        _title: function(t) { this.options.title ? t.text(this.options.title) : t.html("&#160;") },
        _createButtonPane: function() { this.uiDialogButtonPane = t("<div>"), this._addClass(this.uiDialogButtonPane, "ui-dialog-buttonpane", "ui-widget-content ui-helper-clearfix"), this.uiButtonSet = t("<div>").appendTo(this.uiDialogButtonPane), this._addClass(this.uiButtonSet, "ui-dialog-buttonset"), this._createButtons() },
        _createButtons: function() {
            var e = this,
                i = this.options.buttons;
            return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), t.isEmptyObject(i) || t.isArray(i) && !i.length ? void this._removeClass(this.uiDialog, "ui-dialog-buttons") : (t.each(i, function(i, n) {
                var s, o;
                n = t.isFunction(n) ? { click: n, text: i } : n, n = t.extend({ type: "button" }, n), s = n.click, o = { icon: n.icon, iconPosition: n.iconPosition, showLabel: n.showLabel, icons: n.icons, text: n.text }, delete n.click, delete n.icon, delete n.iconPosition, delete n.showLabel, delete n.icons, "boolean" == typeof n.text && delete n.text, t("<button></button>", n).button(o).appendTo(e.uiButtonSet).on("click", function() { s.apply(e.element[0], arguments) })
            }), this._addClass(this.uiDialog, "ui-dialog-buttons"), void this.uiDialogButtonPane.appendTo(this.uiDialog))
        },
        _makeDraggable: function() {
            function e(t) { return { position: t.position, offset: t.offset } }
            var i = this,
                n = this.options;
            this.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function(n, s) { i._addClass(t(this), "ui-dialog-dragging"), i._blockFrames(), i._trigger("dragStart", n, e(s)) },
                drag: function(t, n) { i._trigger("drag", t, e(n)) },
                stop: function(s, o) {
                    var r = o.offset.left - i.document.scrollLeft(),
                        a = o.offset.top - i.document.scrollTop();
                    n.position = { my: "left top", at: "left" + (r >= 0 ? "+" : "") + r + " top" + (a >= 0 ? "+" : "") + a, of: i.window }, i._removeClass(t(this), "ui-dialog-dragging"), i._unblockFrames(), i._trigger("dragStop", s, e(o))
                }
            })
        },
        _makeResizable: function() {
            function e(t) { return { originalPosition: t.originalPosition, originalSize: t.originalSize, position: t.position, size: t.size } }
            var i = this,
                n = this.options,
                s = n.resizable,
                o = this.uiDialog.css("position"),
                r = "string" == typeof s ? s : "n,e,s,w,se,sw,ne,nw";
            this.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: this.element,
                maxWidth: n.maxWidth,
                maxHeight: n.maxHeight,
                minWidth: n.minWidth,
                minHeight: this._minHeight(),
                handles: r,
                start: function(n, s) { i._addClass(t(this), "ui-dialog-resizing"), i._blockFrames(), i._trigger("resizeStart", n, e(s)) },
                resize: function(t, n) { i._trigger("resize", t, e(n)) },
                stop: function(s, o) {
                    var r = i.uiDialog.offset(),
                        a = r.left - i.document.scrollLeft(),
                        l = r.top - i.document.scrollTop();
                    n.height = i.uiDialog.height(), n.width = i.uiDialog.width(), n.position = { my: "left top", at: "left" + (a >= 0 ? "+" : "") + a + " top" + (l >= 0 ? "+" : "") + l, of: i.window }, i._removeClass(t(this), "ui-dialog-resizing"), i._unblockFrames(), i._trigger("resizeStop", s, e(o))
                }
            }).css("position", o)
        },
        _trackFocus: function() { this._on(this.widget(), { focusin: function(e) { this._makeFocusTarget(), this._focusedElement = t(e.target) } }) },
        _makeFocusTarget: function() { this._untrackInstance(), this._trackingInstances().unshift(this) },
        _untrackInstance: function() {
            var e = this._trackingInstances(),
                i = t.inArray(this, e); - 1 !== i && e.splice(i, 1)
        },
        _trackingInstances: function() { var t = this.document.data("ui-dialog-instances"); return t || (t = [], this.document.data("ui-dialog-instances", t)), t },
        _minHeight: function() { var t = this.options; return "auto" === t.height ? t.minHeight : Math.min(t.minHeight, t.height) },
        _position: function() {
            var t = this.uiDialog.is(":visible");
            t || this.uiDialog.show(), this.uiDialog.position(this.options.position), t || this.uiDialog.hide()
        },
        _setOptions: function(e) {
            var i = this,
                n = !1,
                s = {};
            t.each(e, function(t, e) { i._setOption(t, e), t in i.sizeRelatedOptions && (n = !0), t in i.resizableRelatedOptions && (s[t] = e) }), n && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", s)
        },
        _setOption: function(e, i) { var n, s, o = this.uiDialog; "disabled" !== e && (this._super(e, i), "appendTo" === e && this.uiDialog.appendTo(this._appendTo()), "buttons" === e && this._createButtons(), "closeText" === e && this.uiDialogTitlebarClose.button({ label: t("<a>").text("" + this.options.closeText).html() }), "draggable" === e && ((n = o.is(":data(ui-draggable)")) && !i && o.draggable("destroy"), !n && i && this._makeDraggable()), "position" === e && this._position(), "resizable" === e && ((s = o.is(":data(ui-resizable)")) && !i && o.resizable("destroy"), s && "string" == typeof i && o.resizable("option", "handles", i), s || !1 === i || this._makeResizable()), "title" === e && this._title(this.uiDialogTitlebar.find(".ui-dialog-title"))) },
        _size: function() {
            var t, e, i, n = this.options;
            this.element.show().css({ width: "auto", minHeight: 0, maxHeight: "none", height: 0 }), n.minWidth > n.width && (n.width = n.minWidth), t = this.uiDialog.css({ height: "auto", width: n.width }).outerHeight(), e = Math.max(0, n.minHeight - t), i = "number" == typeof n.maxHeight ? Math.max(0, n.maxHeight - t) : "none", "auto" === n.height ? this.element.css({ minHeight: e, maxHeight: i, height: "auto" }) : this.element.height(Math.max(0, n.height - t)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
        },
        _blockFrames: function() { this.iframeBlocks = this.document.find("iframe").map(function() { var e = t(this); return t("<div>").css({ position: "absolute", width: e.outerWidth(), height: e.outerHeight() }).appendTo(e.parent()).offset(e.offset())[0] }) },
        _unblockFrames: function() { this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks) },
        _allowInteraction: function(e) { return !!t(e.target).closest(".ui-dialog").length || !!t(e.target).closest(".ui-datepicker").length },
        _createOverlay: function() {
            if (this.options.modal) {
                var e = !0;
                this._delay(function() { e = !1 }), this.document.data("ui-dialog-overlays") || this._on(this.document, { focusin: function(t) { e || this._allowInteraction(t) || (t.preventDefault(), this._trackingInstances()[0]._focusTabbable()) } }), this.overlay = t("<div>").appendTo(this._appendTo()), this._addClass(this.overlay, null, "ui-widget-overlay ui-front"), this._on(this.overlay, { mousedown: "_keepFocus" }), this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1)
            }
        },
        _destroyOverlay: function() {
            if (this.options.modal && this.overlay) {
                var t = this.document.data("ui-dialog-overlays") - 1;
                t ? this.document.data("ui-dialog-overlays", t) : (this._off(this.document, "focusin"), this.document.removeData("ui-dialog-overlays")), this.overlay.remove(), this.overlay = null
            }
        }
    }), !1 !== t.uiBackCompat && t.widget("ui.dialog", t.ui.dialog, { options: { dialogClass: "" }, _createWrapper: function() { this._super(), this.uiDialog.addClass(this.options.dialogClass) }, _setOption: function(t, e) { "dialogClass" === t && this.uiDialog.removeClass(this.options.dialogClass).addClass(e), this._superApply(arguments) } }), t.ui.dialog, t.widget("ui.droppable", {
        version: "1.12.1",
        widgetEventPrefix: "drop",
        options: { accept: "*", addClasses: !0, greedy: !1, scope: "default", tolerance: "intersect", activate: null, deactivate: null, drop: null, out: null, over: null },
        _create: function() {
            var e, i = this.options,
                n = i.accept;
            this.isover = !1, this.isout = !0, this.accept = t.isFunction(n) ? n : function(t) { return t.is(n) }, this.proportions = function() { return arguments.length ? void(e = arguments[0]) : e || (e = { width: this.element[0].offsetWidth, height: this.element[0].offsetHeight }) }, this._addToManager(i.scope), i.addClasses && this._addClass("ui-droppable")
        },
        _addToManager: function(e) { t.ui.ddmanager.droppables[e] = t.ui.ddmanager.droppables[e] || [], t.ui.ddmanager.droppables[e].push(this) },
        _splice: function(t) { for (var e = 0; t.length > e; e++) t[e] === this && t.splice(e, 1) },
        _destroy: function() {
            var e = t.ui.ddmanager.droppables[this.options.scope];
            this._splice(e)
        },
        _setOption: function(e, i) {
            if ("accept" === e) this.accept = t.isFunction(i) ? i : function(t) { return t.is(i) };
            else if ("scope" === e) {
                var n = t.ui.ddmanager.droppables[this.options.scope];
                this._splice(n), this._addToManager(i)
            }
            this._super(e, i)
        },
        _activate: function(e) {
            var i = t.ui.ddmanager.current;
            this._addActiveClass(), i && this._trigger("activate", e, this.ui(i))
        },
        _deactivate: function(e) {
            var i = t.ui.ddmanager.current;
            this._removeActiveClass(), i && this._trigger("deactivate", e, this.ui(i))
        },
        _over: function(e) {
            var i = t.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._addHoverClass(), this._trigger("over", e, this.ui(i)))
        },
        _out: function(e) {
            var i = t.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._removeHoverClass(), this._trigger("out", e, this.ui(i)))
        },
        _drop: function(e, i) {
            var n = i || t.ui.ddmanager.current,
                s = !1;
            return !(!n || (n.currentItem || n.element)[0] === this.element[0]) && (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() { var i = t(this).droppable("instance"); return i.options.greedy && !i.options.disabled && i.options.scope === n.options.scope && i.accept.call(i.element[0], n.currentItem || n.element) && v(n, t.extend(i, { offset: i.element.offset() }), i.options.tolerance, e) ? (s = !0, !1) : void 0 }), !s && (!!this.accept.call(this.element[0], n.currentItem || n.element) && (this._removeActiveClass(), this._removeHoverClass(), this._trigger("drop", e, this.ui(n)), this.element)))
        },
        ui: function(t) { return { draggable: t.currentItem || t.element, helper: t.helper, position: t.position, offset: t.positionAbs } },
        _addHoverClass: function() { this._addClass("ui-droppable-hover") },
        _removeHoverClass: function() { this._removeClass("ui-droppable-hover") },
        _addActiveClass: function() { this._addClass("ui-droppable-active") },
        _removeActiveClass: function() { this._removeClass("ui-droppable-active") }
    });
    var v = t.ui.intersect = function() {
        function t(t, e, i) { return t >= e && e + i > t }
        return function(e, i, n, s) {
            if (!i.offset) return !1;
            var o = (e.positionAbs || e.position.absolute).left + e.margins.left,
                r = (e.positionAbs || e.position.absolute).top + e.margins.top,
                a = o + e.helperProportions.width,
                l = r + e.helperProportions.height,
                h = i.offset.left,
                c = i.offset.top,
                u = h + i.proportions().width,
                d = c + i.proportions().height;
            switch (n) {
                case "fit":
                    return o >= h && u >= a && r >= c && d >= l;
                case "intersect":
                    return o + e.helperProportions.width / 2 > h && u > a - e.helperProportions.width / 2 && r + e.helperProportions.height / 2 > c && d > l - e.helperProportions.height / 2;
                case "pointer":
                    return t(s.pageY, c, i.proportions().height) && t(s.pageX, h, i.proportions().width);
                case "touch":
                    return (r >= c && d >= r || l >= c && d >= l || c > r && l > d) && (o >= h && u >= o || a >= h && u >= a || h > o && a > u);
                default:
                    return !1
            }
        }
    }();
    t.ui.ddmanager = {
        current: null,
        droppables: { "default": [] },
        prepareOffsets: function(e, i) {
            var n, s, o = t.ui.ddmanager.droppables[e.options.scope] || [],
                r = i ? i.type : null,
                a = (e.currentItem || e.element).find(":data(ui-droppable)").addBack();
            t: for (n = 0; o.length > n; n++)
                if (!(o[n].options.disabled || e && !o[n].accept.call(o[n].element[0], e.currentItem || e.element))) {
                    for (s = 0; a.length > s; s++)
                        if (a[s] === o[n].element[0]) { o[n].proportions().height = 0; continue t }
                    o[n].visible = "none" !== o[n].element.css("display"), o[n].visible && ("mousedown" === r && o[n]._activate.call(o[n], i), o[n].offset = o[n].element.offset(), o[n].proportions({ width: o[n].element[0].offsetWidth, height: o[n].element[0].offsetHeight }))
                }
        },
        drop: function(e, i) { var n = !1; return t.each((t.ui.ddmanager.droppables[e.options.scope] || []).slice(), function() { this.options && (!this.options.disabled && this.visible && v(e, this, this.options.tolerance, i) && (n = this._drop.call(this, i) || n), !this.options.disabled && this.visible && this.accept.call(this.element[0], e.currentItem || e.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, i))) }), n },
        dragStart: function(e, i) { e.element.parentsUntil("body").on("scroll.droppable", function() { e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i) }) },
        drag: function(e, i) {
            e.options.refreshPositions && t.ui.ddmanager.prepareOffsets(e, i), t.each(t.ui.ddmanager.droppables[e.options.scope] || [], function() {
                if (!this.options.disabled && !this.greedyChild && this.visible) {
                    var n, s, o, r = v(e, this, this.options.tolerance, i),
                        a = !r && this.isover ? "isout" : r && !this.isover ? "isover" : null;
                    a && (this.options.greedy && (s = this.options.scope, (o = this.element.parents(":data(ui-droppable)").filter(function() { return t(this).droppable("instance").options.scope === s })).length && ((n = t(o[0]).droppable("instance")).greedyChild = "isover" === a)), n && "isover" === a && (n.isover = !1, n.isout = !0, n._out.call(n, i)), this[a] = !0, this["isout" === a ? "isover" : "isout"] = !1, this["isover" === a ? "_over" : "_out"].call(this, i), n && "isout" === a && (n.isout = !1, n.isover = !0, n._over.call(n, i)))
                }
            })
        },
        dragStop: function(e, i) { e.element.parentsUntil("body").off("scroll.droppable"), e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i) }
    }, !1 !== t.uiBackCompat && t.widget("ui.droppable", t.ui.droppable, { options: { hoverClass: !1, activeClass: !1 }, _addActiveClass: function() { this._super(), this.options.activeClass && this.element.addClass(this.options.activeClass) }, _removeActiveClass: function() { this._super(), this.options.activeClass && this.element.removeClass(this.options.activeClass) }, _addHoverClass: function() { this._super(), this.options.hoverClass && this.element.addClass(this.options.hoverClass) }, _removeHoverClass: function() { this._super(), this.options.hoverClass && this.element.removeClass(this.options.hoverClass) } }), t.ui.droppable, t.widget("ui.progressbar", {
        version: "1.12.1",
        options: { classes: { "ui-progressbar": "ui-corner-all", "ui-progressbar-value": "ui-corner-left", "ui-progressbar-complete": "ui-corner-right" }, max: 100, value: 0, change: null, complete: null },
        min: 0,
        _create: function() { this.oldValue = this.options.value = this._constrainedValue(), this.element.attr({ role: "progressbar", "aria-valuemin": this.min }), this._addClass("ui-progressbar", "ui-widget ui-widget-content"), this.valueDiv = t("<div>").appendTo(this.element), this._addClass(this.valueDiv, "ui-progressbar-value", "ui-widget-header"), this._refreshValue() },
        _destroy: function() { this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow"), this.valueDiv.remove() },
        value: function(t) { return void 0 === t ? this.options.value : (this.options.value = this._constrainedValue(t), void this._refreshValue()) },
        _constrainedValue: function(t) { return void 0 === t && (t = this.options.value), this.indeterminate = !1 === t, "number" != typeof t && (t = 0), !this.indeterminate && Math.min(this.options.max, Math.max(this.min, t)) },
        _setOptions: function(t) {
            var e = t.value;
            delete t.value, this._super(t), this.options.value = this._constrainedValue(e), this._refreshValue()
        },
        _setOption: function(t, e) { "max" === t && (e = Math.max(this.min, e)), this._super(t, e) },
        _setOptionDisabled: function(t) { this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t) },
        _percentage: function() { return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min) },
        _refreshValue: function() {
            var e = this.options.value,
                i = this._percentage();
            this.valueDiv.toggle(this.indeterminate || e > this.min).width(i.toFixed(0) + "%"), this._toggleClass(this.valueDiv, "ui-progressbar-complete", null, e === this.options.max)._toggleClass("ui-progressbar-indeterminate", null, this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = t("<div>").appendTo(this.valueDiv), this._addClass(this.overlayDiv, "ui-progressbar-overlay"))) : (this.element.attr({ "aria-valuemax": this.options.max, "aria-valuenow": e }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== e && (this.oldValue = e, this._trigger("change")), e === this.options.max && this._trigger("complete")
        }
    }), t.widget("ui.selectable", t.ui.mouse, {
        version: "1.12.1",
        options: { appendTo: "body", autoRefresh: !0, distance: 0, filter: "*", tolerance: "touch", selected: null, selecting: null, start: null, stop: null, unselected: null, unselecting: null },
        _create: function() {
            var e = this;
            this._addClass("ui-selectable"), this.dragged = !1, this.refresh = function() {
                e.elementPos = t(e.element[0]).offset(), e.selectees = t(e.options.filter, e.element[0]), e._addClass(e.selectees, "ui-selectee"), e.selectees.each(function() {
                    var i = t(this),
                        n = i.offset(),
                        s = { left: n.left - e.elementPos.left, top: n.top - e.elementPos.top };
                    t.data(this, "selectable-item", { element: this, $element: i, left: s.left, top: s.top, right: s.left + i.outerWidth(), bottom: s.top + i.outerHeight(), startselected: !1, selected: i.hasClass("ui-selected"), selecting: i.hasClass("ui-selecting"), unselecting: i.hasClass("ui-unselecting") })
                })
            }, this.refresh(), this._mouseInit(), this.helper = t("<div>"), this._addClass(this.helper, "ui-selectable-helper")
        },
        _destroy: function() { this.selectees.removeData("selectable-item"), this._mouseDestroy() },
        _mouseStart: function(e) {
            var i = this,
                n = this.options;
            this.opos = [e.pageX, e.pageY], this.elementPos = t(this.element[0]).offset(), this.options.disabled || (this.selectees = t(n.filter, this.element[0]), this._trigger("start", e), t(n.appendTo).append(this.helper), this.helper.css({ left: e.pageX, top: e.pageY, width: 0, height: 0 }), n.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
                var n = t.data(this, "selectable-item");
                n.startselected = !0, e.metaKey || e.ctrlKey || (i._removeClass(n.$element, "ui-selected"), n.selected = !1, i._addClass(n.$element, "ui-unselecting"), n.unselecting = !0, i._trigger("unselecting", e, { unselecting: n.element }))
            }), t(e.target).parents().addBack().each(function() { var n, s = t.data(this, "selectable-item"); return s ? (n = !e.metaKey && !e.ctrlKey || !s.$element.hasClass("ui-selected"), i._removeClass(s.$element, n ? "ui-unselecting" : "ui-selected")._addClass(s.$element, n ? "ui-selecting" : "ui-unselecting"), s.unselecting = !n, s.selecting = n, s.selected = n, n ? i._trigger("selecting", e, { selecting: s.element }) : i._trigger("unselecting", e, { unselecting: s.element }), !1) : void 0 }))
        },
        _mouseDrag: function(e) {
            if (this.dragged = !0, !this.options.disabled) {
                var i, n = this,
                    s = this.options,
                    o = this.opos[0],
                    r = this.opos[1],
                    a = e.pageX,
                    l = e.pageY;
                return o > a && (i = a, a = o, o = i), r > l && (i = l, l = r, r = i), this.helper.css({ left: o, top: r, width: a - o, height: l - r }), this.selectees.each(function() {
                    var i = t.data(this, "selectable-item"),
                        h = !1,
                        c = {};
                    i && i.element !== n.element[0] && (c.left = i.left + n.elementPos.left, c.right = i.right + n.elementPos.left, c.top = i.top + n.elementPos.top, c.bottom = i.bottom + n.elementPos.top, "touch" === s.tolerance ? h = !(c.left > a || o > c.right || c.top > l || r > c.bottom) : "fit" === s.tolerance && (h = c.left > o && a > c.right && c.top > r && l > c.bottom), h ? (i.selected && (n._removeClass(i.$element, "ui-selected"), i.selected = !1), i.unselecting && (n._removeClass(i.$element, "ui-unselecting"), i.unselecting = !1), i.selecting || (n._addClass(i.$element, "ui-selecting"), i.selecting = !0, n._trigger("selecting", e, { selecting: i.element }))) : (i.selecting && ((e.metaKey || e.ctrlKey) && i.startselected ? (n._removeClass(i.$element, "ui-selecting"), i.selecting = !1, n._addClass(i.$element, "ui-selected"), i.selected = !0) : (n._removeClass(i.$element, "ui-selecting"), i.selecting = !1, i.startselected && (n._addClass(i.$element, "ui-unselecting"), i.unselecting = !0), n._trigger("unselecting", e, { unselecting: i.element }))), i.selected && (e.metaKey || e.ctrlKey || i.startselected || (n._removeClass(i.$element, "ui-selected"), i.selected = !1, n._addClass(i.$element, "ui-unselecting"), i.unselecting = !0, n._trigger("unselecting", e, { unselecting: i.element })))))
                }), !1
            }
        },
        _mouseStop: function(e) {
            var i = this;
            return this.dragged = !1, t(".ui-unselecting", this.element[0]).each(function() {
                var n = t.data(this, "selectable-item");
                i._removeClass(n.$element, "ui-unselecting"), n.unselecting = !1, n.startselected = !1, i._trigger("unselected", e, { unselected: n.element })
            }), t(".ui-selecting", this.element[0]).each(function() {
                var n = t.data(this, "selectable-item");
                i._removeClass(n.$element, "ui-selecting")._addClass(n.$element, "ui-selected"), n.selecting = !1, n.selected = !0, n.startselected = !0, i._trigger("selected", e, { selected: n.element })
            }), this._trigger("stop", e), this.helper.remove(), !1
        }
    }), t.widget("ui.selectmenu", [t.ui.formResetMixin, {
        version: "1.12.1",
        defaultElement: "<select>",
        options: { appendTo: null, classes: { "ui-selectmenu-button-open": "ui-corner-top", "ui-selectmenu-button-closed": "ui-corner-all" }, disabled: null, icons: { button: "ui-icon-triangle-1-s" }, position: { my: "left top", at: "left bottom", collision: "none" }, width: !1, change: null, close: null, focus: null, open: null, select: null },
        _create: function() {
            var e = this.element.uniqueId().attr("id");
            this.ids = { element: e, button: e + "-button", menu: e + "-menu" }, this._drawButton(), this._drawMenu(), this._bindFormResetHandler(), this._rendered = !1, this.menuItems = t()
        },
        _drawButton: function() {
            var e, i = this,
                n = this._parseOption(this.element.find("option:selected"), this.element[0].selectedIndex);
            this.labels = this.element.labels().attr("for", this.ids.button), this._on(this.labels, { click: function(t) { this.button.focus(), t.preventDefault() } }), this.element.hide(), this.button = t("<span>", { tabindex: this.options.disabled ? -1 : 0, id: this.ids.button, role: "combobox", "aria-expanded": "false", "aria-autocomplete": "list", "aria-owns": this.ids.menu, "aria-haspopup": "true", title: this.element.attr("title") }).insertAfter(this.element), this._addClass(this.button, "ui-selectmenu-button ui-selectmenu-button-closed", "ui-button ui-widget"), e = t("<span>").appendTo(this.button), this._addClass(e, "ui-selectmenu-icon", "ui-icon " + this.options.icons.button), this.buttonItem = this._renderButtonItem(n).appendTo(this.button), !1 !== this.options.width && this._resizeButton(), this._on(this.button, this._buttonEvents), this.button.one("focusin", function() { i._rendered || i._refreshMenu() })
        },
        _drawMenu: function() {
            var e = this;
            this.menu = t("<ul>", { "aria-hidden": "true", "aria-labelledby": this.ids.button, id: this.ids.menu }), this.menuWrap = t("<div>").append(this.menu), this._addClass(this.menuWrap, "ui-selectmenu-menu", "ui-front"), this.menuWrap.appendTo(this._appendTo()), this.menuInstance = this.menu.menu({
                classes: { "ui-menu": "ui-corner-bottom" },
                role: "listbox",
                select: function(t, i) { t.preventDefault(), e._setSelection(), e._select(i.item.data("ui-selectmenu-item"), t) },
                focus: function(t, i) {
                    var n = i.item.data("ui-selectmenu-item");
                    null != e.focusIndex && n.index !== e.focusIndex && (e._trigger("focus", t, { item: n }), e.isOpen || e._select(n, t)), e.focusIndex = n.index, e.button.attr("aria-activedescendant", e.menuItems.eq(n.index).attr("id"))
                }
            }).menu("instance"), this.menuInstance._off(this.menu, "mouseleave"), this.menuInstance._closeOnDocumentClick = function() { return !1 }, this.menuInstance._isDivider = function() { return !1 }
        },
        refresh: function() { this._refreshMenu(), this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item") || {})), null === this.options.width && this._resizeButton() },
        _refreshMenu: function() {
            var t, e = this.element.find("option");
            this.menu.empty(), this._parseOptions(e), this._renderMenu(this.menu, this.items), this.menuInstance.refresh(), this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper"), this._rendered = !0, e.length && (t = this._getSelectedItem(), this.menuInstance.focus(null, t), this._setAria(t.data("ui-selectmenu-item")), this._setOption("disabled", this.element.prop("disabled")))
        },
        open: function(t) { this.options.disabled || (this._rendered ? (this._removeClass(this.menu.find(".ui-state-active"), null, "ui-state-active"), this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(), this.menuItems.length && (this.isOpen = !0, this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), this._trigger("open", t))) },
        _position: function() { this.menuWrap.position(t.extend({ of: this.button }, this.options.position)) },
        close: function(t) { this.isOpen && (this.isOpen = !1, this._toggleAttr(), this.range = null, this._off(this.document), this._trigger("close", t)) },
        widget: function() { return this.button },
        menuWidget: function() { return this.menu },
        _renderButtonItem: function(e) { var i = t("<span>"); return this._setText(i, e.label), this._addClass(i, "ui-selectmenu-text"), i },
        _renderMenu: function(e, i) {
            var n = this,
                s = "";
            t.each(i, function(i, o) {
                var r;
                o.optgroup !== s && (r = t("<li>", { text: o.optgroup }), n._addClass(r, "ui-selectmenu-optgroup", "ui-menu-divider" + (o.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : "")), r.appendTo(e), s = o.optgroup), n._renderItemData(e, o)
            })
        },
        _renderItemData: function(t, e) { return this._renderItem(t, e).data("ui-selectmenu-item", e) },
        _renderItem: function(e, i) {
            var n = t("<li>"),
                s = t("<div>", { title: i.element.attr("title") });
            return i.disabled && this._addClass(n, null, "ui-state-disabled"), this._setText(s, i.label), n.append(s).appendTo(e)
        },
        _setText: function(t, e) { e ? t.text(e) : t.html("&#160;") },
        _move: function(t, e) {
            var i, n, s = ".ui-menu-item";
            this.isOpen ? i = this.menuItems.eq(this.focusIndex).parent("li") : (i = this.menuItems.eq(this.element[0].selectedIndex).parent("li"), s += ":not(.ui-state-disabled)"), (n = "first" === t || "last" === t ? i["first" === t ? "prevAll" : "nextAll"](s).eq(-1) : i[t + "All"](s).eq(0)).length && this.menuInstance.focus(e, n)
        },
        _getSelectedItem: function() { return this.menuItems.eq(this.element[0].selectedIndex).parent("li") },
        _toggle: function(t) { this[this.isOpen ? "close" : "open"](t) },
        _setSelection: function() {
            var t;
            this.range && (window.getSelection ? ((t = window.getSelection()).removeAllRanges(), t.addRange(this.range)) : this.range.select(), this.button.focus())
        },
        _documentClick: { mousedown: function(e) { this.isOpen && (t(e.target).closest(".ui-selectmenu-menu, #" + t.ui.escapeSelector(this.ids.button)).length || this.close(e)) } },
        _buttonEvents: {
            mousedown: function() {
                var t;
                window.getSelection ? (t = window.getSelection()).rangeCount && (this.range = t.getRangeAt(0)) : this.range = document.selection.createRange()
            },
            click: function(t) { this._setSelection(), this._toggle(t) },
            keydown: function(e) {
                var i = !0;
                switch (e.keyCode) {
                    case t.ui.keyCode.TAB:
                    case t.ui.keyCode.ESCAPE:
                        this.close(e), i = !1;
                        break;
                    case t.ui.keyCode.ENTER:
                        this.isOpen && this._selectFocusedItem(e);
                        break;
                    case t.ui.keyCode.UP:
                        e.altKey ? this._toggle(e) : this._move("prev", e);
                        break;
                    case t.ui.keyCode.DOWN:
                        e.altKey ? this._toggle(e) : this._move("next", e);
                        break;
                    case t.ui.keyCode.SPACE:
                        this.isOpen ? this._selectFocusedItem(e) : this._toggle(e);
                        break;
                    case t.ui.keyCode.LEFT:
                        this._move("prev", e);
                        break;
                    case t.ui.keyCode.RIGHT:
                        this._move("next", e);
                        break;
                    case t.ui.keyCode.HOME:
                    case t.ui.keyCode.PAGE_UP:
                        this._move("first", e);
                        break;
                    case t.ui.keyCode.END:
                    case t.ui.keyCode.PAGE_DOWN:
                        this._move("last", e);
                        break;
                    default:
                        this.menu.trigger(e), i = !1
                }
                i && e.preventDefault()
            }
        },
        _selectFocusedItem: function(t) {
            var e = this.menuItems.eq(this.focusIndex).parent("li");
            e.hasClass("ui-state-disabled") || this._select(e.data("ui-selectmenu-item"), t)
        },
        _select: function(t, e) {
            var i = this.element[0].selectedIndex;
            this.element[0].selectedIndex = t.index, this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(t)), this._setAria(t), this._trigger("select", e, { item: t }), t.index !== i && this._trigger("change", e, { item: t }), this.close(e)
        },
        _setAria: function(t) {
            var e = this.menuItems.eq(t.index).attr("id");
            this.button.attr({ "aria-labelledby": e, "aria-activedescendant": e }), this.menu.attr("aria-activedescendant", e)
        },
        _setOption: function(t, e) {
            if ("icons" === t) {
                var i = this.button.find("span.ui-icon");
                this._removeClass(i, null, this.options.icons.button)._addClass(i, null, e.button)
            }
            this._super(t, e), "appendTo" === t && this.menuWrap.appendTo(this._appendTo()), "width" === t && this._resizeButton()
        },
        _setOptionDisabled: function(t) { this._super(t), this.menuInstance.option("disabled", t), this.button.attr("aria-disabled", t), this._toggleClass(this.button, null, "ui-state-disabled", t), this.element.prop("disabled", t), t ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0) },
        _appendTo: function() { var e = this.options.appendTo; return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e && e[0] || (e = this.element.closest(".ui-front, dialog")), e.length || (e = this.document[0].body), e },
        _toggleAttr: function() { this.button.attr("aria-expanded", this.isOpen), this._removeClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "closed" : "open"))._addClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "open" : "closed"))._toggleClass(this.menuWrap, "ui-selectmenu-open", null, this.isOpen), this.menu.attr("aria-hidden", !this.isOpen) },
        _resizeButton: function() { var t = this.options.width; return !1 === t ? void this.button.css("width", "") : (null === t && (t = this.element.show().outerWidth(), this.element.hide()), void this.button.outerWidth(t)) },
        _resizeMenu: function() { this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1)) },
        _getCreateOptions: function() { var t = this._super(); return t.disabled = this.element.prop("disabled"), t },
        _parseOptions: function(e) {
            var i = this,
                n = [];
            e.each(function(e, s) { n.push(i._parseOption(t(s), e)) }), this.items = n
        },
        _parseOption: function(t, e) { var i = t.parent("optgroup"); return { element: t, index: e, value: t.val(), label: t.text(), optgroup: i.attr("label") || "", disabled: i.prop("disabled") || t.prop("disabled") } },
        _destroy: function() { this._unbindFormResetHandler(), this.menuWrap.remove(), this.button.remove(), this.element.show(), this.element.removeUniqueId(), this.labels.attr("for", this.ids.element) }
    }]), t.widget("ui.slider", t.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "slide",
        options: { animate: !1, classes: { "ui-slider": "ui-corner-all", "ui-slider-handle": "ui-corner-all", "ui-slider-range": "ui-corner-all ui-widget-header" }, distance: 0, max: 100, min: 0, orientation: "horizontal", range: !1, step: 1, value: 0, values: null, change: null, slide: null, start: null, stop: null },
        numPages: 5,
        _create: function() { this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content"), this._refresh(), this._animateOff = !1 },
        _refresh: function() { this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue() },
        _createHandles: function() {
            var e, i, n = this.options,
                s = this.element.find(".ui-slider-handle"),
                o = "<span tabindex='0'></span>",
                r = [];
            for (i = n.values && n.values.length || 1, s.length > i && (s.slice(i).remove(), s = s.slice(0, i)), e = s.length; i > e; e++) r.push(o);
            this.handles = s.add(t(r.join("")).appendTo(this.element)), this._addClass(this.handles, "ui-slider-handle", "ui-state-default"), this.handle = this.handles.eq(0), this.handles.each(function(e) { t(this).data("ui-slider-handle-index", e).attr("tabIndex", 0) })
        },
        _createRange: function() {
            var e = this.options;
            e.range ? (!0 === e.range && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [e.values[0], e.values[0]] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? (this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"), this.range.css({ left: "", bottom: "" })) : (this.range = t("<div>").appendTo(this.element), this._addClass(this.range, "ui-slider-range")), ("min" === e.range || "max" === e.range) && this._addClass(this.range, "ui-slider-range-" + e.range)) : (this.range && this.range.remove(), this.range = null)
        },
        _setupEvents: function() { this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles) },
        _destroy: function() { this.handles.remove(), this.range && this.range.remove(), this._mouseDestroy() },
        _mouseCapture: function(e) {
            var i, n, s, o, r, a, l, h = this,
                c = this.options;
            return !c.disabled && (this.elementSize = { width: this.element.outerWidth(), height: this.element.outerHeight() }, this.elementOffset = this.element.offset(), i = { x: e.pageX, y: e.pageY }, n = this._normValueFromMouse(i), s = this._valueMax() - this._valueMin() + 1, this.handles.each(function(e) {
                var i = Math.abs(n - h.values(e));
                (s > i || s === i && (e === h._lastChangedValue || h.values(e) === c.min)) && (s = i, o = t(this), r = e)
            }), !1 !== this._start(e, r) && (this._mouseSliding = !0, this._handleIndex = r, this._addClass(o, null, "ui-state-active"), o.trigger("focus"), a = o.offset(), l = !t(e.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = l ? { left: 0, top: 0 } : { left: e.pageX - a.left - o.width() / 2, top: e.pageY - a.top - o.height() / 2 - (parseInt(o.css("borderTopWidth"), 10) || 0) - (parseInt(o.css("borderBottomWidth"), 10) || 0) + (parseInt(o.css("marginTop"), 10) || 0) }, this.handles.hasClass("ui-state-hover") || this._slide(e, r, n), this._animateOff = !0, !0))
        },
        _mouseStart: function() { return !0 },
        _mouseDrag: function(t) {
            var e = { x: t.pageX, y: t.pageY },
                i = this._normValueFromMouse(e);
            return this._slide(t, this._handleIndex, i), !1
        },
        _mouseStop: function(t) { return this._removeClass(this.handles, null, "ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1 },
        _detectOrientation: function() { this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal" },
        _normValueFromMouse: function(t) { var e, i, n, s, o; return "horizontal" === this.orientation ? (e = this.elementSize.width, i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), (n = i / e) > 1 && (n = 1), 0 > n && (n = 0), "vertical" === this.orientation && (n = 1 - n), s = this._valueMax() - this._valueMin(), o = this._valueMin() + n * s, this._trimAlignValue(o) },
        _uiHash: function(t, e, i) {
            var n = { handle: this.handles[t], handleIndex: t, value: void 0 !== e ? e : this.value() };
            return this._hasMultipleValues() && (n.value = void 0 !== e ? e : this.values(t), n.values = i || this.values()), n
        },
        _hasMultipleValues: function() { return this.options.values && this.options.values.length },
        _start: function(t, e) { return this._trigger("start", t, this._uiHash(e)) },
        _slide: function(t, e, i) {
            var n, s = this.value(),
                o = this.values();
            this._hasMultipleValues() && (n = this.values(e ? 0 : 1), s = this.values(e), 2 === this.options.values.length && !0 === this.options.range && (i = 0 === e ? Math.min(n, i) : Math.max(n, i)), o[e] = i), i !== s && (!1 !== this._trigger("slide", t, this._uiHash(e, i, o)) && (this._hasMultipleValues() ? this.values(e, i) : this.value(i)))
        },
        _stop: function(t, e) { this._trigger("stop", t, this._uiHash(e)) },
        _change: function(t, e) { this._keySliding || this._mouseSliding || (this._lastChangedValue = e, this._trigger("change", t, this._uiHash(e))) },
        value: function(t) { return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), void this._change(null, 0)) : this._value() },
        values: function(e, i) {
            var n, s, o;
            if (arguments.length > 1) return this.options.values[e] = this._trimAlignValue(i), this._refreshValue(), void this._change(null, e);
            if (!arguments.length) return this._values();
            if (!t.isArray(arguments[0])) return this._hasMultipleValues() ? this._values(e) : this.value();
            for (n = this.options.values, s = arguments[0], o = 0; n.length > o; o += 1) n[o] = this._trimAlignValue(s[o]), this._change(null, o);
            this._refreshValue()
        },
        _setOption: function(e, i) {
            var n, s = 0;
            switch ("range" === e && !0 === this.options.range && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), t.isArray(this.options.values) && (s = this.options.values.length), this._super(e, i), e) {
                case "orientation":
                    this._detectOrientation(), this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation), this._refreshValue(), this.options.range && this._refreshRange(i), this.handles.css("horizontal" === i ? "bottom" : "left", "");
                    break;
                case "value":
                    this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                    break;
                case "values":
                    for (this._animateOff = !0, this._refreshValue(), n = s - 1; n >= 0; n--) this._change(null, n);
                    this._animateOff = !1;
                    break;
                case "step":
                case "min":
                case "max":
                    this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
                    break;
                case "range":
                    this._animateOff = !0, this._refresh(), this._animateOff = !1
            }
        },
        _setOptionDisabled: function(t) { this._super(t), this._toggleClass(null, "ui-state-disabled", !!t) },
        _value: function() { var t = this.options.value; return this._trimAlignValue(t) },
        _values: function(t) { var e, i, n; if (arguments.length) return e = this.options.values[t], this._trimAlignValue(e); if (this._hasMultipleValues()) { for (i = this.options.values.slice(), n = 0; i.length > n; n += 1) i[n] = this._trimAlignValue(i[n]); return i } return [] },
        _trimAlignValue: function(t) {
            if (this._valueMin() >= t) return this._valueMin();
            if (t >= this._valueMax()) return this._valueMax();
            var e = this.options.step > 0 ? this.options.step : 1,
                i = (t - this._valueMin()) % e,
                n = t - i;
            return 2 * Math.abs(i) >= e && (n += i > 0 ? e : -e), parseFloat(n.toFixed(5))
        },
        _calculateNewMax: function() {
            var t = this.options.max,
                e = this._valueMin(),
                i = this.options.step;
            (t = Math.round((t - e) / i) * i + e) > this.options.max && (t -= i), this.max = parseFloat(t.toFixed(this._precision()))
        },
        _precision: function() { var t = this._precisionOf(this.options.step); return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t },
        _precisionOf: function(t) {
            var e = "" + t,
                i = e.indexOf(".");
            return -1 === i ? 0 : e.length - i - 1
        },
        _valueMin: function() { return this.options.min },
        _valueMax: function() { return this.max },
        _refreshRange: function(t) { "vertical" === t && this.range.css({ width: "", left: "" }), "horizontal" === t && this.range.css({ height: "", bottom: "" }) },
        _refreshValue: function() {
            var e, i, n, s, o, r = this.options.range,
                a = this.options,
                l = this,
                h = !this._animateOff && a.animate,
                c = {};
            this._hasMultipleValues() ? this.handles.each(function(n) { i = (l.values(n) - l._valueMin()) / (l._valueMax() - l._valueMin()) * 100, c["horizontal" === l.orientation ? "left" : "bottom"] = i + "%", t(this).stop(1, 1)[h ? "animate" : "css"](c, a.animate), !0 === l.options.range && ("horizontal" === l.orientation ? (0 === n && l.range.stop(1, 1)[h ? "animate" : "css"]({ left: i + "%" }, a.animate), 1 === n && l.range[h ? "animate" : "css"]({ width: i - e + "%" }, { queue: !1, duration: a.animate })) : (0 === n && l.range.stop(1, 1)[h ? "animate" : "css"]({ bottom: i + "%" }, a.animate), 1 === n && l.range[h ? "animate" : "css"]({ height: i - e + "%" }, { queue: !1, duration: a.animate }))), e = i }) : (n = this.value(), s = this._valueMin(), o = this._valueMax(), i = o !== s ? (n - s) / (o - s) * 100 : 0, c["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[h ? "animate" : "css"](c, a.animate), "min" === r && "horizontal" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({ width: i + "%" }, a.animate), "max" === r && "horizontal" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({ width: 100 - i + "%" }, a.animate), "min" === r && "vertical" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({ height: i + "%" }, a.animate), "max" === r && "vertical" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({ height: 100 - i + "%" }, a.animate))
        },
        _handleEvents: {
            keydown: function(e) {
                var i, n, s, o = t(e.target).data("ui-slider-handle-index");
                switch (e.keyCode) {
                    case t.ui.keyCode.HOME:
                    case t.ui.keyCode.END:
                    case t.ui.keyCode.PAGE_UP:
                    case t.ui.keyCode.PAGE_DOWN:
                    case t.ui.keyCode.UP:
                    case t.ui.keyCode.RIGHT:
                    case t.ui.keyCode.DOWN:
                    case t.ui.keyCode.LEFT:
                        if (e.preventDefault(), !this._keySliding && (this._keySliding = !0, this._addClass(t(e.target), null, "ui-state-active"), !1 === this._start(e, o))) return
                }
                switch (s = this.options.step, i = n = this._hasMultipleValues() ? this.values(o) : this.value(), e.keyCode) {
                    case t.ui.keyCode.HOME:
                        n = this._valueMin();
                        break;
                    case t.ui.keyCode.END:
                        n = this._valueMax();
                        break;
                    case t.ui.keyCode.PAGE_UP:
                        n = this._trimAlignValue(i + (this._valueMax() - this._valueMin()) / this.numPages);
                        break;
                    case t.ui.keyCode.PAGE_DOWN:
                        n = this._trimAlignValue(i - (this._valueMax() - this._valueMin()) / this.numPages);
                        break;
                    case t.ui.keyCode.UP:
                    case t.ui.keyCode.RIGHT:
                        if (i === this._valueMax()) return;
                        n = this._trimAlignValue(i + s);
                        break;
                    case t.ui.keyCode.DOWN:
                    case t.ui.keyCode.LEFT:
                        if (i === this._valueMin()) return;
                        n = this._trimAlignValue(i - s)
                }
                this._slide(e, o, n)
            },
            keyup: function(e) {
                var i = t(e.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1, this._stop(e, i), this._change(e, i), this._removeClass(t(e.target), null, "ui-state-active"))
            }
        }
    }), t.widget("ui.sortable", t.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "sort",
        ready: !1,
        options: { appendTo: "parent", axis: !1, connectWith: !1, containment: !1, cursor: "auto", cursorAt: !1, dropOnEmpty: !0, forcePlaceholderSize: !1, forceHelperSize: !1, grid: !1, handle: !1, helper: "original", items: "> *", opacity: !1, placeholder: !1, revert: !1, scroll: !0, scrollSensitivity: 20, scrollSpeed: 20, scope: "default", tolerance: "intersect", zIndex: 1e3, activate: null, beforeStop: null, change: null, deactivate: null, out: null, over: null, receive: null, remove: null, sort: null, start: null, stop: null, update: null },
        _isOverAxis: function(t, e, i) { return t >= e && e + i > t },
        _isFloating: function(t) { return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display")) },
        _create: function() { this.containerCache = {}, this._addClass("ui-sortable"), this.refresh(), this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), this.ready = !0 },
        _setOption: function(t, e) { this._super(t, e), "handle" === t && this._setHandleClassName() },
        _setHandleClassName: function() {
            var e = this;
            this._removeClass(this.element.find(".ui-sortable-handle"), "ui-sortable-handle"), t.each(this.items, function() { e._addClass(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item, "ui-sortable-handle") })
        },
        _destroy: function() { this._mouseDestroy(); for (var t = this.items.length - 1; t >= 0; t--) this.items[t].item.removeData(this.widgetName + "-item"); return this },
        _mouseCapture: function(e, i) {
            var n = null,
                s = !1,
                o = this;
            return !this.reverting && (!this.options.disabled && "static" !== this.options.type && (this._refreshItems(e), t(e.target).parents().each(function() { return t.data(this, o.widgetName + "-item") === o ? (n = t(this), !1) : void 0 }), t.data(e.target, o.widgetName + "-item") === o && (n = t(e.target)), !!n && (!(this.options.handle && !i && (t(this.options.handle, n).find("*").addBack().each(function() { this === e.target && (s = !0) }), !s)) && (this.currentItem = n, this._removeCurrentsFromItems(), !0))))
        },
        _mouseStart: function(e, i, n) {
            var s, o, r = this.options;
            if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = { top: this.offset.top - this.margins.top, left: this.offset.left - this.margins.left }, t.extend(this.offset, { click: { left: e.pageX - this.offset.left, top: e.pageY - this.offset.top }, parent: this._getParentOffset(), relative: this._getRelativeOffset() }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, r.cursorAt && this._adjustOffsetFromHelper(r.cursorAt), this.domPosition = { prev: this.currentItem.prev()[0], parent: this.currentItem.parent()[0] }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), r.containment && this._setContainment(), r.cursor && "auto" !== r.cursor && (o = this.document.find("body"), this.storedCursor = o.css("cursor"), o.css("cursor", r.cursor), this.storedStylesheet = t("<style>*{ cursor: " + r.cursor + " !important; }</style>").appendTo(o)), r.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", r.opacity)), r.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", r.zIndex)), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !n)
                for (s = this.containers.length - 1; s >= 0; s--) this.containers[s]._trigger("activate", e, this._uiHash(this));
            return t.ui.ddmanager && (t.ui.ddmanager.current = this), t.ui.ddmanager && !r.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this.dragging = !0, this._addClass(this.helper, "ui-sortable-helper"), this._mouseDrag(e), !0
        },
        _mouseDrag: function(e) {
            var i, n, s, o, r = this.options,
                a = !1;
            for (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < r.scrollSensitivity ? this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop + r.scrollSpeed : e.pageY - this.overflowOffset.top < r.scrollSensitivity && (this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop - r.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < r.scrollSensitivity ? this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft + r.scrollSpeed : e.pageX - this.overflowOffset.left < r.scrollSensitivity && (this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft - r.scrollSpeed)) : (e.pageY - this.document.scrollTop() < r.scrollSensitivity ? a = this.document.scrollTop(this.document.scrollTop() - r.scrollSpeed) : this.window.height() - (e.pageY - this.document.scrollTop()) < r.scrollSensitivity && (a = this.document.scrollTop(this.document.scrollTop() + r.scrollSpeed)), e.pageX - this.document.scrollLeft() < r.scrollSensitivity ? a = this.document.scrollLeft(this.document.scrollLeft() - r.scrollSpeed) : this.window.width() - (e.pageX - this.document.scrollLeft()) < r.scrollSensitivity && (a = this.document.scrollLeft(this.document.scrollLeft() + r.scrollSpeed))), !1 !== a && t.ui.ddmanager && !r.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--)
                if (s = (n = this.items[i]).item[0], (o = this._intersectsWithPointer(n)) && n.instance === this.currentContainer && s !== this.currentItem[0] && this.placeholder[1 === o ? "next" : "prev"]()[0] !== s && !t.contains(this.placeholder[0], s) && ("semi-dynamic" !== this.options.type || !t.contains(this.element[0], s))) {
                    if (this.direction = 1 === o ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(n)) break;
                    this._rearrange(e, n), this._trigger("change", e, this._uiHash());
                    break
                }
            return this._contactContainers(e), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), this._trigger("sort", e, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
        },
        _mouseStop: function(e, i) {
            if (e) {
                if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert) {
                    var n = this,
                        s = this.placeholder.offset(),
                        o = this.options.axis,
                        r = {};
                    o && "x" !== o || (r.left = s.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)), o && "y" !== o || (r.top = s.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, t(this.helper).animate(r, parseInt(this.options.revert, 10) || 500, function() { n._clear(e) })
                } else this._clear(e, i);
                return !1
            }
        },
        cancel: function() { if (this.dragging) { this._mouseUp(new t.Event("mouseup", { target: null })), "original" === this.options.helper ? (this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")) : this.currentItem.show(); for (var e = this.containers.length - 1; e >= 0; e--) this.containers[e]._trigger("deactivate", null, this._uiHash(this)), this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), this.containers[e].containerCache.over = 0) } return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), t.extend(this, { helper: null, dragging: !1, reverting: !1, _noFinalSort: null }), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)), this },
        serialize: function(e) {
            var i = this._getItemsAsjQuery(e && e.connected),
                n = [];
            return e = e || {}, t(i).each(function() {
                var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
                i && n.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]))
            }), !n.length && e.key && n.push(e.key + "="), n.join("&")
        },
        toArray: function(e) {
            var i = this._getItemsAsjQuery(e && e.connected),
                n = [];
            return e = e || {}, i.each(function() { n.push(t(e.item || this).attr(e.attribute || "id") || "") }), n
        },
        _intersectsWith: function(t) {
            var e = this.positionAbs.left,
                i = e + this.helperProportions.width,
                n = this.positionAbs.top,
                s = n + this.helperProportions.height,
                o = t.left,
                r = o + t.width,
                a = t.top,
                l = a + t.height,
                h = this.offset.click.top,
                c = this.offset.click.left,
                u = "x" === this.options.axis || n + h > a && l > n + h,
                d = "y" === this.options.axis || e + c > o && r > e + c,
                p = u && d;
            return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? p : e + this.helperProportions.width / 2 > o && r > i - this.helperProportions.width / 2 && n + this.helperProportions.height / 2 > a && l > s - this.helperProportions.height / 2
        },
        _intersectsWithPointer: function(t) {
            var e, i, n = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height),
                s = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width);
            return !!(n && s) && (e = this._getDragVerticalDirection(), i = this._getDragHorizontalDirection(), this.floating ? "right" === i || "down" === e ? 2 : 1 : e && ("down" === e ? 2 : 1))
        },
        _intersectsWithSides: function(t) {
            var e = this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
                i = this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
                n = this._getDragVerticalDirection(),
                s = this._getDragHorizontalDirection();
            return this.floating && s ? "right" === s && i || "left" === s && !i : n && ("down" === n && e || "up" === n && !e)
        },
        _getDragVerticalDirection: function() { var t = this.positionAbs.top - this.lastPositionAbs.top; return 0 !== t && (t > 0 ? "down" : "up") },
        _getDragHorizontalDirection: function() { var t = this.positionAbs.left - this.lastPositionAbs.left; return 0 !== t && (t > 0 ? "right" : "left") },
        refresh: function(t) { return this._refreshItems(t), this._setHandleClassName(), this.refreshPositions(), this },
        _connectWith: function() { var t = this.options; return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith },
        _getItemsAsjQuery: function(e) {
            function i() { a.push(this) }
            var n, s, o, r, a = [],
                l = [],
                h = this._connectWith();
            if (h && e)
                for (n = h.length - 1; n >= 0; n--)
                    for (s = (o = t(h[n], this.document[0])).length - 1; s >= 0; s--)(r = t.data(o[s], this.widgetFullName)) && r !== this && !r.options.disabled && l.push([t.isFunction(r.options.items) ? r.options.items.call(r.element) : t(r.options.items, r.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), r]);
            for (l.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, { options: this.options, item: this.currentItem }) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), n = l.length - 1; n >= 0; n--) l[n][0].each(i);
            return t(a)
        },
        _removeCurrentsFromItems: function() {
            var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = t.grep(this.items, function(t) {
                for (var i = 0; e.length > i; i++)
                    if (e[i] === t.item[0]) return !1;
                return !0
            })
        },
        _refreshItems: function(e) {
            this.items = [], this.containers = [this];
            var i, n, s, o, r, a, l, h, c = this.items,
                u = [
                    [t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, { item: this.currentItem }) : t(this.options.items, this.element), this]
                ],
                d = this._connectWith();
            if (d && this.ready)
                for (i = d.length - 1; i >= 0; i--)
                    for (n = (s = t(d[i], this.document[0])).length - 1; n >= 0; n--)(o = t.data(s[n], this.widgetFullName)) && o !== this && !o.options.disabled && (u.push([t.isFunction(o.options.items) ? o.options.items.call(o.element[0], e, { item: this.currentItem }) : t(o.options.items, o.element), o]), this.containers.push(o));
            for (i = u.length - 1; i >= 0; i--)
                for (r = u[i][1], n = 0, h = (a = u[i][0]).length; h > n; n++)(l = t(a[n])).data(this.widgetName + "-item", r), c.push({ item: l, instance: r, width: 0, height: 0, left: 0, top: 0 })
        },
        refreshPositions: function(e) {
            var i, n, s, o;
            for (this.floating = !!this.items.length && ("x" === this.options.axis || this._isFloating(this.items[0].item)), this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset()), i = this.items.length - 1; i >= 0; i--)(n = this.items[i]).instance !== this.currentContainer && this.currentContainer && n.item[0] !== this.currentItem[0] || (s = this.options.toleranceElement ? t(this.options.toleranceElement, n.item) : n.item, e || (n.width = s.outerWidth(), n.height = s.outerHeight()), o = s.offset(), n.left = o.left, n.top = o.top);
            if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
            else
                for (i = this.containers.length - 1; i >= 0; i--) o = this.containers[i].element.offset(), this.containers[i].containerCache.left = o.left, this.containers[i].containerCache.top = o.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
            return this
        },
        _createPlaceholder: function(e) {
            var i, n = (e = e || this).options;
            n.placeholder && n.placeholder.constructor !== String || (i = n.placeholder, n.placeholder = {
                element: function() {
                    var n = e.currentItem[0].nodeName.toLowerCase(),
                        s = t("<" + n + ">", e.document[0]);
                    return e._addClass(s, "ui-sortable-placeholder", i || e.currentItem[0].className)._removeClass(s, "ui-sortable-helper"), "tbody" === n ? e._createTrPlaceholder(e.currentItem.find("tr").eq(0), t("<tr>", e.document[0]).appendTo(s)) : "tr" === n ? e._createTrPlaceholder(e.currentItem, s) : "img" === n && s.attr("src", e.currentItem.attr("src")), i || s.css("visibility", "hidden"), s
                },
                update: function(t, s) {
                    (!i || n.forcePlaceholderSize) && (s.height() || s.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), s.width() || s.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)))
                }
            }), e.placeholder = t(n.placeholder.element.call(e.element, e.currentItem)), e.currentItem.after(e.placeholder), n.placeholder.update(e, e.placeholder)
        },
        _createTrPlaceholder: function(e, i) {
            var n = this;
            e.children().each(function() { t("<td>&#160;</td>", n.document[0]).attr("colspan", t(this).attr("colspan") || 1).appendTo(i) })
        },
        _contactContainers: function(e) {
            var i, n, s, o, r, a, l, h, c, u, d = null,
                p = null;
            for (i = this.containers.length - 1; i >= 0; i--)
                if (!t.contains(this.currentItem[0], this.containers[i].element[0]))
                    if (this._intersectsWith(this.containers[i].containerCache)) {
                        if (d && t.contains(this.containers[i].element[0], d.element[0])) continue;
                        d = this.containers[i], p = i
                    } else this.containers[i].containerCache.over && (this.containers[i]._trigger("out", e, this._uiHash(this)), this.containers[i].containerCache.over = 0);
            if (d)
                if (1 === this.containers.length) this.containers[p].containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash(this)), this.containers[p].containerCache.over = 1);
                else {
                    for (s = 1e4, o = null, r = (c = d.floating || this._isFloating(this.currentItem)) ? "left" : "top", a = c ? "width" : "height", u = c ? "pageX" : "pageY", n = this.items.length - 1; n >= 0; n--) t.contains(this.containers[p].element[0], this.items[n].item[0]) && this.items[n].item[0] !== this.currentItem[0] && (l = this.items[n].item.offset()[r], h = !1, e[u] - l > this.items[n][a] / 2 && (h = !0), s > Math.abs(e[u] - l) && (s = Math.abs(e[u] - l), o = this.items[n], this.direction = h ? "up" : "down"));
                    if (!o && !this.options.dropOnEmpty) return;
                    if (this.currentContainer === this.containers[p]) return void(this.currentContainer.containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash()), this.currentContainer.containerCache.over = 1));
                    o ? this._rearrange(e, o, null, !0) : this._rearrange(e, null, this.containers[p].element, !0), this._trigger("change", e, this._uiHash()), this.containers[p]._trigger("change", e, this._uiHash(this)), this.currentContainer = this.containers[p], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[p]._trigger("over", e, this._uiHash(this)), this.containers[p].containerCache.over = 1
                }
        },
        _createHelper: function(e) {
            var i = this.options,
                n = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
            return n.parents("body").length || t("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(n[0]), n[0] === this.currentItem[0] && (this._storedCSS = { width: this.currentItem[0].style.width, height: this.currentItem[0].style.height, position: this.currentItem.css("position"), top: this.currentItem.css("top"), left: this.currentItem.css("left") }), (!n[0].style.width || i.forceHelperSize) && n.width(this.currentItem.width()), (!n[0].style.height || i.forceHelperSize) && n.height(this.currentItem.height()), n
        },
        _adjustOffsetFromHelper: function(e) { "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = { left: +e[0], top: +e[1] || 0 }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top) },
        _getParentOffset: function() { this.offsetParent = this.helper.offsetParent(); var e = this.offsetParent.offset(); return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = { top: 0, left: 0 }), { top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0) } },
        _getRelativeOffset: function() { if ("relative" === this.cssPosition) { var t = this.currentItem.position(); return { top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(), left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft() } } return { top: 0, left: 0 } },
        _cacheMargins: function() { this.margins = { left: parseInt(this.currentItem.css("marginLeft"), 10) || 0, top: parseInt(this.currentItem.css("marginTop"), 10) || 0 } },
        _cacheHelperProportions: function() { this.helperProportions = { width: this.helper.outerWidth(), height: this.helper.outerHeight() } },
        _setContainment: function() { var e, i, n, s = this.options; "parent" === s.containment && (s.containment = this.helper[0].parentNode), ("document" === s.containment || "window" === s.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === s.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === s.containment ? this.document.height() || document.body.parentNode.scrollHeight : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(s.containment) || (e = t(s.containment)[0], i = t(s.containment).offset(), n = "hidden" !== t(e).css("overflow"), this.containment = [i.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (n ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (n ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]) },
        _convertPositionTo: function(e, i) {
            i || (i = this.position);
            var n = "absolute" === e ? 1 : -1,
                s = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                o = /(html|body)/i.test(s[0].tagName);
            return { top: i.top + this.offset.relative.top * n + this.offset.parent.top * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : s.scrollTop()) * n, left: i.left + this.offset.relative.left * n + this.offset.parent.left * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : s.scrollLeft()) * n }
        },
        _generatePosition: function(e) {
            var i, n, s = this.options,
                o = e.pageX,
                r = e.pageY,
                a = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                l = /(html|body)/i.test(a[0].tagName);
            return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (r = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (r = this.containment[3] + this.offset.click.top)), s.grid && (i = this.originalPageY + Math.round((r - this.originalPageY) / s.grid[1]) * s.grid[1], r = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - s.grid[1] : i + s.grid[1] : i, n = this.originalPageX + Math.round((o - this.originalPageX) / s.grid[0]) * s.grid[0], o = this.containment ? n - this.offset.click.left >= this.containment[0] && n - this.offset.click.left <= this.containment[2] ? n : n - this.offset.click.left >= this.containment[0] ? n - s.grid[0] : n + s.grid[0] : n)), { top: r - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : l ? 0 : a.scrollTop()), left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : l ? 0 : a.scrollLeft()) }
        },
        _rearrange: function(t, e, i, n) {
            i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
            var s = this.counter;
            this._delay(function() { s === this.counter && this.refreshPositions(!n) })
        },
        _clear: function(t, e) {
            function i(t, e, i) { return function(n) { i._trigger(t, n, e._uiHash(e)) } }
            this.reverting = !1;
            var n, s = [];
            if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                for (n in this._storedCSS)("auto" === this._storedCSS[n] || "static" === this._storedCSS[n]) && (this._storedCSS[n] = "");
                this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")
            } else this.currentItem.show();
            for (this.fromOutside && !e && s.push(function(t) { this._trigger("receive", t, this._uiHash(this.fromOutside)) }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || s.push(function(t) { this._trigger("update", t, this._uiHash()) }), this !== this.currentContainer && (e || (s.push(function(t) { this._trigger("remove", t, this._uiHash()) }), s.push(function(t) { return function(e) { t._trigger("receive", e, this._uiHash(this)) } }.call(this, this.currentContainer)), s.push(function(t) { return function(e) { t._trigger("update", e, this._uiHash(this)) } }.call(this, this.currentContainer)))), n = this.containers.length - 1; n >= 0; n--) e || s.push(i("deactivate", this, this.containers[n])), this.containers[n].containerCache.over && (s.push(i("out", this, this.containers[n])), this.containers[n].containerCache.over = 0);
            if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !e) {
                for (n = 0; s.length > n; n++) s[n].call(this, t);
                this._trigger("stop", t, this._uiHash())
            }
            return this.fromOutside = !1, !this.cancelHelperRemoval
        },
        _trigger: function() {!1 === t.Widget.prototype._trigger.apply(this, arguments) && this.cancel() },
        _uiHash: function(e) { var i = e || this; return { helper: i.helper, placeholder: i.placeholder || t([]), position: i.position, originalPosition: i.originalPosition, offset: i.positionAbs, item: i.currentItem, sender: e ? e.element : null } }
    }), t.widget("ui.spinner", {
        version: "1.12.1",
        defaultElement: "<input>",
        widgetEventPrefix: "spin",
        options: { classes: { "ui-spinner": "ui-corner-all", "ui-spinner-down": "ui-corner-br", "ui-spinner-up": "ui-corner-tr" }, culture: null, icons: { down: "ui-icon-triangle-1-s", up: "ui-icon-triangle-1-n" }, incremental: !0, max: null, min: null, numberFormat: null, page: 10, step: 1, change: null, spin: null, start: null, stop: null },
        _create: function() { this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), "" !== this.value() && this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, { beforeunload: function() { this.element.removeAttr("autocomplete") } }) },
        _getCreateOptions: function() {
            var e = this._super(),
                i = this.element;
            return t.each(["min", "max", "step"], function(t, n) {
                var s = i.attr(n);
                null != s && s.length && (e[n] = s)
            }), e
        },
        _events: {
            keydown: function(t) { this._start(t) && this._keydown(t) && t.preventDefault() },
            keyup: "_stop",
            focus: function() { this.previous = this.element.val() },
            blur: function(t) { return this.cancelBlur ? void delete this.cancelBlur : (this._stop(), this._refresh(), void(this.previous !== this.element.val() && this._trigger("change", t))) },
            mousewheel: function(t, e) {
                if (e) {
                    if (!this.spinning && !this._start(t)) return !1;
                    this._spin((e > 0 ? 1 : -1) * this.options.step, t), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function() { this.spinning && this._stop(t) }, 100), t.preventDefault()
                }
            },
            "mousedown .ui-spinner-button": function(e) {
                function i() { this.element[0] === t.ui.safeActiveElement(this.document[0]) || (this.element.trigger("focus"), this.previous = n, this._delay(function() { this.previous = n })) }
                var n;
                n = this.element[0] === t.ui.safeActiveElement(this.document[0]) ? this.previous : this.element.val(), e.preventDefault(), i.call(this), this.cancelBlur = !0, this._delay(function() {
                    delete this.cancelBlur,
                        i.call(this)
                }), !1 !== this._start(e) && this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e)
            },
            "mouseup .ui-spinner-button": "_stop",
            "mouseenter .ui-spinner-button": function(e) { return t(e.currentTarget).hasClass("ui-state-active") ? !1 !== this._start(e) && void this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e) : void 0 },
            "mouseleave .ui-spinner-button": "_stop"
        },
        _enhance: function() { this.uiSpinner = this.element.attr("autocomplete", "off").wrap("<span>").parent().append("<a></a><a></a>") },
        _draw: function() { this._enhance(), this._addClass(this.uiSpinner, "ui-spinner", "ui-widget ui-widget-content"), this._addClass("ui-spinner-input"), this.element.attr("role", "spinbutton"), this.buttons = this.uiSpinner.children("a").attr("tabIndex", -1).attr("aria-hidden", !0).button({ classes: { "ui-button": "" } }), this._removeClass(this.buttons, "ui-corner-all"), this._addClass(this.buttons.first(), "ui-spinner-button ui-spinner-up"), this._addClass(this.buttons.last(), "ui-spinner-button ui-spinner-down"), this.buttons.first().button({ icon: this.options.icons.up, showLabel: !1 }), this.buttons.last().button({ icon: this.options.icons.down, showLabel: !1 }), this.buttons.height() > Math.ceil(.5 * this.uiSpinner.height()) && this.uiSpinner.height() > 0 && this.uiSpinner.height(this.uiSpinner.height()) },
        _keydown: function(e) {
            var i = this.options,
                n = t.ui.keyCode;
            switch (e.keyCode) {
                case n.UP:
                    return this._repeat(null, 1, e), !0;
                case n.DOWN:
                    return this._repeat(null, -1, e), !0;
                case n.PAGE_UP:
                    return this._repeat(null, i.page, e), !0;
                case n.PAGE_DOWN:
                    return this._repeat(null, -i.page, e), !0
            }
            return !1
        },
        _start: function(t) { return !(!this.spinning && !1 === this._trigger("start", t)) && (this.counter || (this.counter = 1), this.spinning = !0, !0) },
        _repeat: function(t, e, i) { t = t || 500, clearTimeout(this.timer), this.timer = this._delay(function() { this._repeat(40, e, i) }, t), this._spin(e * this.options.step, i) },
        _spin: function(t, e) {
            var i = this.value() || 0;
            this.counter || (this.counter = 1), i = this._adjustValue(i + t * this._increment(this.counter)), this.spinning && !1 === this._trigger("spin", e, { value: i }) || (this._value(i), this.counter++)
        },
        _increment: function(e) { var i = this.options.incremental; return i ? t.isFunction(i) ? i(e) : Math.floor(e * e * e / 5e4 - e * e / 500 + 17 * e / 200 + 1) : 1 },
        _precision: function() { var t = this._precisionOf(this.options.step); return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t },
        _precisionOf: function(t) {
            var e = "" + t,
                i = e.indexOf(".");
            return -1 === i ? 0 : e.length - i - 1
        },
        _adjustValue: function(t) { var e, i, n = this.options; return i = t - (e = null !== n.min ? n.min : 0), t = e + (i = Math.round(i / n.step) * n.step), t = parseFloat(t.toFixed(this._precision())), null !== n.max && t > n.max ? n.max : null !== n.min && n.min > t ? n.min : t },
        _stop: function(t) { this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", t)) },
        _setOption: function(t, e) { var i, n, s; return "culture" === t || "numberFormat" === t ? (i = this._parse(this.element.val()), this.options[t] = e, void this.element.val(this._format(i))) : (("max" === t || "min" === t || "step" === t) && "string" == typeof e && (e = this._parse(e)), "icons" === t && (n = this.buttons.first().find(".ui-icon"), this._removeClass(n, null, this.options.icons.up), this._addClass(n, null, e.up), s = this.buttons.last().find(".ui-icon"), this._removeClass(s, null, this.options.icons.down), this._addClass(s, null, e.down)), void this._super(t, e)) },
        _setOptionDisabled: function(t) { this._super(t), this._toggleClass(this.uiSpinner, null, "ui-state-disabled", !!t), this.element.prop("disabled", !!t), this.buttons.button(t ? "disable" : "enable") },
        _setOptions: a(function(t) { this._super(t) }),
        _parse: function(t) { return "string" == typeof t && "" !== t && (t = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(t, 10, this.options.culture) : +t), "" === t || isNaN(t) ? null : t },
        _format: function(t) { return "" === t ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(t, this.options.numberFormat, this.options.culture) : t },
        _refresh: function() { this.element.attr({ "aria-valuemin": this.options.min, "aria-valuemax": this.options.max, "aria-valuenow": this._parse(this.element.val()) }) },
        isValid: function() { var t = this.value(); return null !== t && t === this._adjustValue(t) },
        _value: function(t, e) { var i; "" !== t && (null !== (i = this._parse(t)) && (e || (i = this._adjustValue(i)), t = this._format(i))), this.element.val(t), this._refresh() },
        _destroy: function() { this.element.prop("disabled", !1).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow"), this.uiSpinner.replaceWith(this.element) },
        stepUp: a(function(t) { this._stepUp(t) }),
        _stepUp: function(t) { this._start() && (this._spin((t || 1) * this.options.step), this._stop()) },
        stepDown: a(function(t) { this._stepDown(t) }),
        _stepDown: function(t) { this._start() && (this._spin((t || 1) * -this.options.step), this._stop()) },
        pageUp: a(function(t) { this._stepUp((t || 1) * this.options.page) }),
        pageDown: a(function(t) { this._stepDown((t || 1) * this.options.page) }),
        value: function(t) { return arguments.length ? void a(this._value).call(this, t) : this._parse(this.element.val()) },
        widget: function() { return this.uiSpinner }
    }), !1 !== t.uiBackCompat && t.widget("ui.spinner", t.ui.spinner, { _enhance: function() { this.uiSpinner = this.element.attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml()) }, _uiSpinnerHtml: function() { return "<span>" }, _buttonHtml: function() { return "<a></a><a></a>" } }), t.ui.spinner, t.widget("ui.tabs", {
        version: "1.12.1",
        delay: 300,
        options: { active: null, classes: { "ui-tabs": "ui-corner-all", "ui-tabs-nav": "ui-corner-all", "ui-tabs-panel": "ui-corner-bottom", "ui-tabs-tab": "ui-corner-top" }, collapsible: !1, event: "click", heightStyle: "content", hide: null, show: null, activate: null, beforeActivate: null, beforeLoad: null, load: null },
        _isLocal: function() {
            var t = /#.*$/;
            return function(e) {
                var i, n;
                i = e.href.replace(t, ""), n = location.href.replace(t, "");
                try { i = decodeURIComponent(i) } catch (s) {}
                try { n = decodeURIComponent(n) } catch (s) {}
                return e.hash.length > 1 && i === n
            }
        }(),
        _create: function() {
            var e = this,
                i = this.options;
            this.running = !1, this._addClass("ui-tabs", "ui-widget ui-widget-content"), this._toggleClass("ui-tabs-collapsible", null, i.collapsible), this._processTabs(), i.active = this._initialActive(), t.isArray(i.disabled) && (i.disabled = t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"), function(t) { return e.tabs.index(t) }))).sort()), this.active = !1 !== this.options.active && this.anchors.length ? this._findActive(i.active) : t(), this._refresh(), this.active.length && this.load(i.active)
        },
        _initialActive: function() {
            var e = this.options.active,
                i = this.options.collapsible,
                n = location.hash.substring(1);
            return null === e && (n && this.tabs.each(function(i, s) { return t(s).attr("aria-controls") === n ? (e = i, !1) : void 0 }), null === e && (e = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === e || -1 === e) && (e = !!this.tabs.length && 0)), !1 !== e && (-1 === (e = this.tabs.index(this.tabs.eq(e))) && (e = !i && 0)), !i && !1 === e && this.anchors.length && (e = 0), e
        },
        _getCreateEventData: function() { return { tab: this.active, panel: this.active.length ? this._getPanelForTab(this.active) : t() } },
        _tabKeydown: function(e) {
            var i = t(t.ui.safeActiveElement(this.document[0])).closest("li"),
                n = this.tabs.index(i),
                s = !0;
            if (!this._handlePageNav(e)) {
                switch (e.keyCode) {
                    case t.ui.keyCode.RIGHT:
                    case t.ui.keyCode.DOWN:
                        n++;
                        break;
                    case t.ui.keyCode.UP:
                    case t.ui.keyCode.LEFT:
                        s = !1, n--;
                        break;
                    case t.ui.keyCode.END:
                        n = this.anchors.length - 1;
                        break;
                    case t.ui.keyCode.HOME:
                        n = 0;
                        break;
                    case t.ui.keyCode.SPACE:
                        return e.preventDefault(), clearTimeout(this.activating), void this._activate(n);
                    case t.ui.keyCode.ENTER:
                        return e.preventDefault(), clearTimeout(this.activating), void this._activate(n !== this.options.active && n);
                    default:
                        return
                }
                e.preventDefault(), clearTimeout(this.activating), n = this._focusNextTab(n, s), e.ctrlKey || e.metaKey || (i.attr("aria-selected", "false"), this.tabs.eq(n).attr("aria-selected", "true"), this.activating = this._delay(function() { this.option("active", n) }, this.delay))
            }
        },
        _panelKeydown: function(e) { this._handlePageNav(e) || e.ctrlKey && e.keyCode === t.ui.keyCode.UP && (e.preventDefault(), this.active.trigger("focus")) },
        _handlePageNav: function(e) { return e.altKey && e.keyCode === t.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : e.altKey && e.keyCode === t.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0 },
        _findNextTab: function(e, i) {
            function n() { return e > s && (e = 0), 0 > e && (e = s), e }
            for (var s = this.tabs.length - 1; - 1 !== t.inArray(n(), this.options.disabled);) e = i ? e + 1 : e - 1;
            return e
        },
        _focusNextTab: function(t, e) { return t = this._findNextTab(t, e), this.tabs.eq(t).trigger("focus"), t },
        _setOption: function(t, e) { return "active" === t ? void this._activate(e) : (this._super(t, e), "collapsible" === t && (this._toggleClass("ui-tabs-collapsible", null, e), e || !1 !== this.options.active || this._activate(0)), "event" === t && this._setupEvents(e), void("heightStyle" === t && this._setupHeightStyle(e))) },
        _sanitizeSelector: function(t) { return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : "" },
        refresh: function() {
            var e = this.options,
                i = this.tablist.children(":has(a[href])");
            e.disabled = t.map(i.filter(".ui-state-disabled"), function(t) { return i.index(t) }), this._processTabs(), !1 !== e.active && this.anchors.length ? this.active.length && !t.contains(this.tablist[0], this.active[0]) ? this.tabs.length === e.disabled.length ? (e.active = !1, this.active = t()) : this._activate(this._findNextTab(Math.max(0, e.active - 1), !1)) : e.active = this.tabs.index(this.active) : (e.active = !1, this.active = t()), this._refresh()
        },
        _refresh: function() { this._setOptionDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({ "aria-selected": "false", "aria-expanded": "false", tabIndex: -1 }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({ "aria-hidden": "true" }), this.active.length ? (this.active.attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 }), this._addClass(this.active, "ui-tabs-active", "ui-state-active"), this._getPanelForTab(this.active).show().attr({ "aria-hidden": "false" })) : this.tabs.eq(0).attr("tabIndex", 0) },
        _processTabs: function() {
            var e = this,
                i = this.tabs,
                n = this.anchors,
                s = this.panels;
            this.tablist = this._getList().attr("role", "tablist"), this._addClass(this.tablist, "ui-tabs-nav", "ui-helper-reset ui-helper-clearfix ui-widget-header"), this.tablist.on("mousedown" + this.eventNamespace, "> li", function(e) { t(this).is(".ui-state-disabled") && e.preventDefault() }).on("focus" + this.eventNamespace, ".ui-tabs-anchor", function() { t(this).closest("li").is(".ui-state-disabled") && this.blur() }), this.tabs = this.tablist.find("> li:has(a[href])").attr({ role: "tab", tabIndex: -1 }), this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default"), this.anchors = this.tabs.map(function() { return t("a", this)[0] }).attr({ role: "presentation", tabIndex: -1 }), this._addClass(this.anchors, "ui-tabs-anchor"), this.panels = t(), this.anchors.each(function(i, n) {
                var s, o, r, a = t(n).uniqueId().attr("id"),
                    l = t(n).closest("li"),
                    h = l.attr("aria-controls");
                e._isLocal(n) ? (r = (s = n.hash).substring(1), o = e.element.find(e._sanitizeSelector(s))) : (s = "#" + (r = l.attr("aria-controls") || t({}).uniqueId()[0].id), (o = e.element.find(s)).length || (o = e._createPanel(r)).insertAfter(e.panels[i - 1] || e.tablist), o.attr("aria-live", "polite")), o.length && (e.panels = e.panels.add(o)), h && l.data("ui-tabs-aria-controls", h), l.attr({ "aria-controls": r, "aria-labelledby": a }), o.attr("aria-labelledby", a)
            }), this.panels.attr("role", "tabpanel"), this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content"), i && (this._off(i.not(this.tabs)), this._off(n.not(this.anchors)), this._off(s.not(this.panels)))
        },
        _getList: function() { return this.tablist || this.element.find("ol, ul").eq(0) },
        _createPanel: function(e) { return t("<div>").attr("id", e).data("ui-tabs-destroy", !0) },
        _setOptionDisabled: function(e) {
            var i, n, s;
            for (t.isArray(e) && (e.length ? e.length === this.anchors.length && (e = !0) : e = !1), s = 0; n = this.tabs[s]; s++) i = t(n), !0 === e || -1 !== t.inArray(s, e) ? (i.attr("aria-disabled", "true"), this._addClass(i, null, "ui-state-disabled")) : (i.removeAttr("aria-disabled"), this._removeClass(i, null, "ui-state-disabled"));
            this.options.disabled = e, this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !0 === e)
        },
        _setupEvents: function(e) {
            var i = {};
            e && t.each(e.split(" "), function(t, e) { i[e] = "_eventHandler" }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors, { click: function(t) { t.preventDefault() } }), this._on(this.anchors, i), this._on(this.tabs, { keydown: "_tabKeydown" }), this._on(this.panels, { keydown: "_panelKeydown" }), this._focusable(this.tabs), this._hoverable(this.tabs)
        },
        _setupHeightStyle: function(e) {
            var i, n = this.element.parent();
            "fill" === e ? (i = n.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function() {
                var e = t(this),
                    n = e.css("position");
                "absolute" !== n && "fixed" !== n && (i -= e.outerHeight(!0))
            }), this.element.children().not(this.panels).each(function() { i -= t(this).outerHeight(!0) }), this.panels.each(function() { t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height())) }).css("overflow", "auto")) : "auto" === e && (i = 0, this.panels.each(function() { i = Math.max(i, t(this).height("").height()) }).height(i))
        },
        _eventHandler: function(e) {
            var i = this.options,
                n = this.active,
                s = t(e.currentTarget).closest("li"),
                o = s[0] === n[0],
                r = o && i.collapsible,
                a = r ? t() : this._getPanelForTab(s),
                l = n.length ? this._getPanelForTab(n) : t(),
                h = { oldTab: n, oldPanel: l, newTab: r ? t() : s, newPanel: a };
            e.preventDefault(), s.hasClass("ui-state-disabled") || s.hasClass("ui-tabs-loading") || this.running || o && !i.collapsible || !1 === this._trigger("beforeActivate", e, h) || (i.active = !r && this.tabs.index(s), this.active = o ? t() : s, this.xhr && this.xhr.abort(), l.length || a.length || t.error("jQuery UI Tabs: Mismatching fragment identifier."), a.length && this.load(this.tabs.index(s), e), this._toggle(e, h))
        },
        _toggle: function(e, i) {
            function n() { o.running = !1, o._trigger("activate", e, i) }

            function s() { o._addClass(i.newTab.closest("li"), "ui-tabs-active", "ui-state-active"), r.length && o.options.show ? o._show(r, o.options.show, n) : (r.show(), n()) }
            var o = this,
                r = i.newPanel,
                a = i.oldPanel;
            this.running = !0, a.length && this.options.hide ? this._hide(a, this.options.hide, function() { o._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), s() }) : (this._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), a.hide(), s()), a.attr("aria-hidden", "true"), i.oldTab.attr({ "aria-selected": "false", "aria-expanded": "false" }), r.length && a.length ? i.oldTab.attr("tabIndex", -1) : r.length && this.tabs.filter(function() { return 0 === t(this).attr("tabIndex") }).attr("tabIndex", -1), r.attr("aria-hidden", "false"), i.newTab.attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 })
        },
        _activate: function(e) {
            var i, n = this._findActive(e);
            n[0] !== this.active[0] && (n.length || (n = this.active), i = n.find(".ui-tabs-anchor")[0], this._eventHandler({ target: i, currentTarget: i, preventDefault: t.noop }))
        },
        _findActive: function(e) { return !1 === e ? t() : this.tabs.eq(e) },
        _getIndex: function(e) { return "string" == typeof e && (e = this.anchors.index(this.anchors.filter("[href$='" + t.ui.escapeSelector(e) + "']"))), e },
        _destroy: function() {
            this.xhr && this.xhr.abort(), this.tablist.removeAttr("role").off(this.eventNamespace), this.anchors.removeAttr("role tabIndex").removeUniqueId(), this.tabs.add(this.panels).each(function() { t.data(this, "ui-tabs-destroy") ? t(this).remove() : t(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded") }), this.tabs.each(function() {
                var e = t(this),
                    i = e.data("ui-tabs-aria-controls");
                i ? e.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : e.removeAttr("aria-controls")
            }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
        },
        enable: function(e) { var i = this.options.disabled;!1 !== i && (void 0 === e ? i = !1 : (e = this._getIndex(e), i = t.isArray(i) ? t.map(i, function(t) { return t !== e ? t : null }) : t.map(this.tabs, function(t, i) { return i !== e ? i : null })), this._setOptionDisabled(i)) },
        disable: function(e) {
            var i = this.options.disabled;
            if (!0 !== i) {
                if (void 0 === e) i = !0;
                else {
                    if (e = this._getIndex(e), -1 !== t.inArray(e, i)) return;
                    i = t.isArray(i) ? t.merge([e], i).sort() : [e]
                }
                this._setOptionDisabled(i)
            }
        },
        load: function(e, i) {
            e = this._getIndex(e);
            var n = this,
                s = this.tabs.eq(e),
                o = s.find(".ui-tabs-anchor"),
                r = this._getPanelForTab(s),
                a = { tab: s, panel: r },
                l = function(t, e) { "abort" === e && n.panels.stop(!1, !0), n._removeClass(s, "ui-tabs-loading"), r.removeAttr("aria-busy"), t === n.xhr && delete n.xhr };
            this._isLocal(o[0]) || (this.xhr = t.ajax(this._ajaxSettings(o, i, a)), this.xhr && "canceled" !== this.xhr.statusText && (this._addClass(s, "ui-tabs-loading"), r.attr("aria-busy", "true"), this.xhr.done(function(t, e, s) { setTimeout(function() { r.html(t), n._trigger("load", i, a), l(s, e) }, 1) }).fail(function(t, e) { setTimeout(function() { l(t, e) }, 1) })))
        },
        _ajaxSettings: function(e, i, n) { var s = this; return { url: e.attr("href").replace(/#.*$/, ""), beforeSend: function(e, o) { return s._trigger("beforeLoad", i, t.extend({ jqXHR: e, ajaxSettings: o }, n)) } } },
        _getPanelForTab: function(e) { var i = t(e).attr("aria-controls"); return this.element.find(this._sanitizeSelector("#" + i)) }
    }), !1 !== t.uiBackCompat && t.widget("ui.tabs", t.ui.tabs, { _processTabs: function() { this._superApply(arguments), this._addClass(this.tabs, "ui-tab") } }), t.ui.tabs, t.widget("ui.tooltip", {
        version: "1.12.1",
        options: { classes: { "ui-tooltip": "ui-corner-all ui-widget-shadow" }, content: function() { var e = t(this).attr("title") || ""; return t("<a>").text(e).html() }, hide: !0, items: "[title]:not([disabled])", position: { my: "left top+15", at: "left bottom", collision: "flipfit flip" }, show: !0, track: !1, close: null, open: null },
        _addDescribedBy: function(e, i) {
            var n = (e.attr("aria-describedby") || "").split(/\s+/);
            n.push(i), e.data("ui-tooltip-id", i).attr("aria-describedby", t.trim(n.join(" ")))
        },
        _removeDescribedBy: function(e) {
            var i = e.data("ui-tooltip-id"),
                n = (e.attr("aria-describedby") || "").split(/\s+/),
                s = t.inArray(i, n); - 1 !== s && n.splice(s, 1), e.removeData("ui-tooltip-id"), (n = t.trim(n.join(" "))) ? e.attr("aria-describedby", n) : e.removeAttr("aria-describedby")
        },
        _create: function() { this._on({ mouseover: "open", focusin: "open" }), this.tooltips = {}, this.parents = {}, this.liveRegion = t("<div>").attr({ role: "log", "aria-live": "assertive", "aria-relevant": "additions" }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this.disabledTitles = t([]) },
        _setOption: function(e, i) {
            var n = this;
            this._super(e, i), "content" === e && t.each(this.tooltips, function(t, e) { n._updateContent(e.element) })
        },
        _setOptionDisabled: function(t) { this[t ? "_disable" : "_enable"]() },
        _disable: function() {
            var e = this;
            t.each(this.tooltips, function(i, n) {
                var s = t.Event("blur");
                s.target = s.currentTarget = n.element[0], e.close(s, !0)
            }), this.disabledTitles = this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function() { var e = t(this); return e.is("[title]") ? e.data("ui-tooltip-title", e.attr("title")).removeAttr("title") : void 0 }))
        },
        _enable: function() {
            this.disabledTitles.each(function() {
                var e = t(this);
                e.data("ui-tooltip-title") && e.attr("title", e.data("ui-tooltip-title"))
            }), this.disabledTitles = t([])
        },
        open: function(e) {
            var i = this,
                n = t(e ? e.target : this.element).closest(this.options.items);
            n.length && !n.data("ui-tooltip-id") && (n.attr("title") && n.data("ui-tooltip-title", n.attr("title")), n.data("ui-tooltip-open", !0), e && "mouseover" === e.type && n.parents().each(function() {
                var e, n = t(this);
                n.data("ui-tooltip-open") && ((e = t.Event("blur")).target = e.currentTarget = this, i.close(e, !0)), n.attr("title") && (n.uniqueId(), i.parents[this.id] = { element: this, title: n.attr("title") }, n.attr("title", ""))
            }), this._registerCloseHandlers(e, n), this._updateContent(n, e))
        },
        _updateContent: function(t, e) {
            var i, n = this.options.content,
                s = this,
                o = e ? e.type : null;
            return "string" == typeof n || n.nodeType || n.jquery ? this._open(e, t, n) : void((i = n.call(t[0], function(i) { s._delay(function() { t.data("ui-tooltip-open") && (e && (e.type = o), this._open(e, t, i)) }) })) && this._open(e, t, i))
        },
        _open: function(e, i, n) {
            function s(t) { h.of = t, r.is(":hidden") || r.position(h) }
            var o, r, a, l, h = t.extend({}, this.options.position);
            if (n) {
                if (o = this._find(i)) return void o.tooltip.find(".ui-tooltip-content").html(n);
                i.is("[title]") && (e && "mouseover" === e.type ? i.attr("title", "") : i.removeAttr("title")), o = this._tooltip(i), r = o.tooltip, this._addDescribedBy(i, r.attr("id")), r.find(".ui-tooltip-content").html(n), this.liveRegion.children().hide(), (l = t("<div>").html(r.find(".ui-tooltip-content").html())).removeAttr("name").find("[name]").removeAttr("name"), l.removeAttr("id").find("[id]").removeAttr("id"), l.appendTo(this.liveRegion), this.options.track && e && /^mouse/.test(e.type) ? (this._on(this.document, { mousemove: s }), s(e)) : r.position(t.extend({ of: i }, this.options.position)), r.hide(), this._show(r, this.options.show), this.options.track && this.options.show && this.options.show.delay && (a = this.delayedShow = setInterval(function() { r.is(":visible") && (s(h.of), clearInterval(a)) }, t.fx.interval)), this._trigger("open", e, { tooltip: r })
            }
        },
        _registerCloseHandlers: function(e, i) {
            var n = {
                keyup: function(e) {
                    if (e.keyCode === t.ui.keyCode.ESCAPE) {
                        var n = t.Event(e);
                        n.currentTarget = i[0], this.close(n, !0)
                    }
                }
            };
            i[0] !== this.element[0] && (n.remove = function() { this._removeTooltip(this._find(i).tooltip) }), e && "mouseover" !== e.type || (n.mouseleave = "close"), e && "focusin" !== e.type || (n.focusout = "close"), this._on(!0, i, n)
        },
        close: function(e) {
            var i, n = this,
                s = t(e ? e.currentTarget : this.element),
                o = this._find(s);
            return o ? (i = o.tooltip, void(o.closing || (clearInterval(this.delayedShow), s.data("ui-tooltip-title") && !s.attr("title") && s.attr("title", s.data("ui-tooltip-title")), this._removeDescribedBy(s), o.hiding = !0, i.stop(!0), this._hide(i, this.options.hide, function() { n._removeTooltip(t(this)) }), s.removeData("ui-tooltip-open"), this._off(s, "mouseleave focusout keyup"), s[0] !== this.element[0] && this._off(s, "remove"), this._off(this.document, "mousemove"), e && "mouseleave" === e.type && t.each(this.parents, function(e, i) { t(i.element).attr("title", i.title), delete n.parents[e] }), o.closing = !0, this._trigger("close", e, { tooltip: i }), o.hiding || (o.closing = !1)))) : void s.removeData("ui-tooltip-open")
        },
        _tooltip: function(e) {
            var i = t("<div>").attr("role", "tooltip"),
                n = t("<div>").appendTo(i),
                s = i.uniqueId().attr("id");
            return this._addClass(n, "ui-tooltip-content"), this._addClass(i, "ui-tooltip", "ui-widget ui-widget-content"), i.appendTo(this._appendTo(e)), this.tooltips[s] = { element: e, tooltip: i }
        },
        _find: function(t) { var e = t.data("ui-tooltip-id"); return e ? this.tooltips[e] : null },
        _removeTooltip: function(t) { t.remove(), delete this.tooltips[t.attr("id")] },
        _appendTo: function(t) { var e = t.closest(".ui-front, dialog"); return e.length || (e = this.document[0].body), e },
        _destroy: function() {
            var e = this;
            t.each(this.tooltips, function(i, n) {
                var s = t.Event("blur"),
                    o = n.element;
                s.target = s.currentTarget = o[0], e.close(s, !0), t("#" + i).remove(), o.data("ui-tooltip-title") && (o.attr("title") || o.attr("title", o.data("ui-tooltip-title")), o.removeData("ui-tooltip-title"))
            }), this.liveRegion.remove()
        }
    }), !1 !== t.uiBackCompat && t.widget("ui.tooltip", t.ui.tooltip, { options: { tooltipClass: null }, _tooltip: function() { var t = this._superApply(arguments); return this.options.tooltipClass && t.tooltip.addClass(this.options.tooltipClass), t } }), t.ui.tooltip
}),
function(t) { "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof module && module.exports ? module.exports = t(require("jquery")) : t(jQuery) }(function(t) {
    t.extend(t.fn, {
        validate: function(e) {
            if (this.length) {
                var i = t.data(this[0], "validator");
                return i || (this.attr("novalidate", "novalidate"), i = new t.validator(e, this[0]), t.data(this[0], "validator", i), i.settings.onsubmit && (this.on("click.validate", ":submit", function(e) { i.submitButton = e.currentTarget, t(this).hasClass("cancel") && (i.cancelSubmit = !0), void 0 !== t(this).attr("formnovalidate") && (i.cancelSubmit = !0) }), this.on("submit.validate", function(e) {
                    function n() { var n, s; return i.submitButton && (i.settings.submitHandler || i.formSubmitted) && (n = t("<input type='hidden'/>").attr("name", i.submitButton.name).val(t(i.submitButton).val()).appendTo(i.currentForm)), !i.settings.submitHandler || (s = i.settings.submitHandler.call(i, i.currentForm, e), n && n.remove(), void 0 !== s && s) }
                    return i.settings.debug && e.preventDefault(), i.cancelSubmit ? (i.cancelSubmit = !1, n()) : i.form() ? i.pendingRequest ? (i.formSubmitted = !0, !1) : n() : (i.focusInvalid(), !1)
                })), i)
            }
            e && e.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.")
        },
        valid: function() {
            var e, i, n;
            return t(this[0]).is("form") ? e = this.validate().form() : (n = [], e = !0, i = t(this[0].form).validate(), this.each(function() {
                (e = i.element(this) && e) || (n = n.concat(i.errorList))
            }), i.errorList = n), e
        },
        rules: function(e, i) {
            var n, s, o, r, a, l, h = this[0];
            if (null != h && (!h.form && h.hasAttribute("contenteditable") && (h.form = this.closest("form")[0], h.name = this.attr("name")), null != h.form)) {
                if (e) switch (n = t.data(h.form, "validator").settings, s = n.rules, o = t.validator.staticRules(h), e) {
                    case "add":
                        t.extend(o, t.validator.normalizeRule(i)), delete o.messages, s[h.name] = o, i.messages && (n.messages[h.name] = t.extend(n.messages[h.name], i.messages));
                        break;
                    case "remove":
                        return i ? (l = {}, t.each(i.split(/\s/), function(t, e) { l[e] = o[e], delete o[e] }), l) : (delete s[h.name], o)
                }
                return (r = t.validator.normalizeRules(t.extend({}, t.validator.classRules(h), t.validator.attributeRules(h), t.validator.dataRules(h), t.validator.staticRules(h)), h)).required && (a = r.required, delete r.required, r = t.extend({ required: a }, r)), r.remote && (a = r.remote, delete r.remote, r = t.extend(r, { remote: a })), r
            }
        }
    }), t.extend(t.expr.pseudos || t.expr[":"], { blank: function(e) { return !t.trim("" + t(e).val()) }, filled: function(e) { var i = t(e).val(); return null !== i && !!t.trim("" + i) }, unchecked: function(e) { return !t(e).prop("checked") } }), t.validator = function(e, i) { this.settings = t.extend(!0, {}, t.validator.defaults, e), this.currentForm = i, this.init() }, t.validator.format = function(e, i) { return 1 === arguments.length ? function() { var i = t.makeArray(arguments); return i.unshift(e), t.validator.format.apply(this, i) } : void 0 === i ? e : (arguments.length > 2 && i.constructor !== Array && (i = t.makeArray(arguments).slice(1)), i.constructor !== Array && (i = [i]), t.each(i, function(t, i) { e = e.replace(new RegExp("\\{" + t + "\\}", "g"), function() { return i }) }), e) }, t.extend(t.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            pendingClass: "pending",
            validClass: "valid",
            errorElement: "label",
            focusCleanup: !1,
            focusInvalid: !0,
            errorContainer: t([]),
            errorLabelContainer: t([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function(t) { this.lastActive = t, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, t, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(t))) },
            onfocusout: function(t) { this.checkable(t) || !(t.name in this.submitted) && this.optional(t) || this.element(t) },
            onkeyup: function(e, i) {
                var n = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
                9 === i.which && "" === this.elementValue(e) || -1 !== t.inArray(i.keyCode, n) || (e.name in this.submitted || e.name in this.invalid) && this.element(e)
            },
            onclick: function(t) { t.name in this.submitted ? this.element(t) : t.parentNode.name in this.submitted && this.element(t.parentNode) },
            highlight: function(e, i, n) { "radio" === e.type ? this.findByName(e.name).addClass(i).removeClass(n) : t(e).addClass(i).removeClass(n) },
            unhighlight: function(e, i, n) { "radio" === e.type ? this.findByName(e.name).removeClass(i).addClass(n) : t(e).removeClass(i).addClass(n) }
        },
        setDefaults: function(e) { t.extend(t.validator.defaults, e) },
        messages: { required: "This field is required.", remote: "Bu alani duzeltin lutfen.", email: "Lutfen gecerli bir e-posta adresi giriniz.", url: "Lutfen gecerli bir adres giriniz.", date: "Lutfen gecerli bir tarih girin.", dateISO: "Lutfen gecerli bir tarih giriniz (ISO).", number: "Lutfen gecerli bir sayi giriniz.", digits: "Lutfen sadece rakam giriniz.", equalTo: "Lutfen ayni degeri tekrar giriniz.", maxlength: t.validator.format("En fazla {0} karakter."), minlength: t.validator.format("En az {0} karakter."), rangelength: t.validator.format("Lutfen {0} ile {1} arasinda karakter giriniz."), range: t.validator.format("Lutfen {0} ve {1} arasinda bir deger girin."), max: t.validator.format("Lutfen {0} 'a esit veya daha kucuk bir deger girin."), min: t.validator.format("L???tfen {0} 'a esit veya daha buyuk bir deger girin."), step: t.validator.format("Lutfen {0} katini girin.") },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                function e(e) {
                    !this.form && this.hasAttribute("contenteditable") && (this.form = t(this).closest("form")[0], this.name = t(this).attr("name"));
                    var i = t.data(this.form, "validator"),
                        n = "on" + e.type.replace(/^validate/, ""),
                        s = i.settings;
                    s[n] && !t(this).is(s.ignore) && s[n].call(i, this, e)
                }
                this.labelContainer = t(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || t(this.currentForm), this.containers = t(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                var i, n = this.groups = {};
                t.each(this.settings.groups, function(e, i) { "string" == typeof i && (i = i.split(/\s/)), t.each(i, function(t, i) { n[i] = e }) }), i = this.settings.rules, t.each(i, function(e, n) { i[e] = t.validator.normalizeRule(n) }), t(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']", e).on("click.validate", "select, option, [type='radio'], [type='checkbox']", e), this.settings.invalidHandler && t(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler)
            },
            form: function() { return this.checkForm(), t.extend(this.submitted, this.errorMap), this.invalid = t.extend({}, this.errorMap), this.valid() || t(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid() },
            checkForm: function() { this.prepareForm(); for (var t = 0, e = this.currentElements = this.elements(); e[t]; t++) this.check(e[t]); return this.valid() },
            element: function(e) {
                var i, n, s = this.clean(e),
                    o = this.validationTargetFor(s),
                    r = this,
                    a = !0;
                return void 0 === o ? delete this.invalid[s.name] : (this.prepareElement(o), this.currentElements = t(o), (n = this.groups[o.name]) && t.each(this.groups, function(t, e) { e === n && t !== o.name && ((s = r.validationTargetFor(r.clean(r.findByName(t)))) && s.name in r.invalid && (r.currentElements.push(s), a = r.check(s) && a)) }), i = !1 !== this.check(o), a = a && i, this.invalid[o.name] = !i, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), t(e).attr("aria-invalid", !i)), a
            },
            showErrors: function(e) {
                if (e) {
                    var i = this;
                    t.extend(this.errorMap, e), this.errorList = t.map(this.errorMap, function(t, e) { return { message: t, element: i.findByName(e)[0] } }), this.successList = t.grep(this.successList, function(t) { return !(t.name in e) })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                t.fn.resetForm && t(this.currentForm).resetForm(), this.invalid = {}, this.submitted = {}, this.prepareForm(), this.hideErrors();
                var e = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                this.resetElements(e)
            },
            resetElements: function(t) {
                var e;
                if (this.settings.unhighlight)
                    for (e = 0; t[e]; e++) this.settings.unhighlight.call(this, t[e], this.settings.errorClass, ""), this.findByName(t[e].name).removeClass(this.settings.validClass);
                else t.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
            },
            numberOfInvalids: function() { return this.objectLength(this.invalid) },
            objectLength: function(t) { var e, i = 0; for (e in t) void 0 !== t[e] && null !== t[e] && !1 !== t[e] && i++; return i },
            hideErrors: function() { this.hideThese(this.toHide) },
            hideThese: function(t) { t.not(this.containers).text(""), this.addWrapper(t).hide() },
            valid: function() { return 0 === this.size() },
            size: function() { return this.errorList.length },
            focusInvalid: function() { if (this.settings.focusInvalid) try { t(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin") } catch (e) {} },
            findLastActive: function() { var e = this.lastActive; return e && 1 === t.grep(this.errorList, function(t) { return t.element.name === e.name }).length && e },
            elements: function() {
                var e = this,
                    i = {};
                return t(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() { var n = this.name || t(this).attr("name"); return !n && e.settings.debug && window.console && console.error("%o has no name assigned", this), this.hasAttribute("contenteditable") && (this.form = t(this).closest("form")[0], this.name = n), !(n in i || !e.objectLength(t(this).rules()) || (i[n] = !0, 0)) })
            },
            clean: function(e) { return t(e)[0] },
            errors: function() { var e = this.settings.errorClass.split(" ").join("."); return t(this.settings.errorElement + "." + e, this.errorContext) },
            resetInternals: function() { this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = t([]), this.toHide = t([]) },
            reset: function() { this.resetInternals(), this.currentElements = t([]) },
            prepareForm: function() {
                this.reset(),
                    this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(t) { this.reset(), this.toHide = this.errorsFor(t) },
            elementValue: function(e) {
                var i, n, s = t(e),
                    o = e.type;
                return "radio" === o || "checkbox" === o ? this.findByName(e.name).filter(":checked").val() : "number" === o && "undefined" != typeof e.validity ? e.validity.badInput ? "NaN" : s.val() : (i = e.hasAttribute("contenteditable") ? s.text() : s.val(), "file" === o ? "C:\\fakepath\\" === i.substr(0, 12) ? i.substr(12) : (n = i.lastIndexOf("/")) >= 0 ? i.substr(n + 1) : (n = i.lastIndexOf("\\")) >= 0 ? i.substr(n + 1) : i : "string" == typeof i ? i.replace(/\r/g, "") : i)
            },
            check: function(e) {
                e = this.validationTargetFor(this.clean(e));
                var i, n, s, o, r = t(e).rules(),
                    a = t.map(r, function(t, e) { return e }).length,
                    l = !1,
                    h = this.elementValue(e);
                if ("function" == typeof r.normalizer ? o = r.normalizer : "function" == typeof this.settings.normalizer && (o = this.settings.normalizer), o) {
                    if ("string" != typeof(h = o.call(e, h))) throw new TypeError("The normalizer should return a string value.");
                    delete r.normalizer
                }
                for (n in r) { s = { method: n, parameters: r[n] }; try { if ("dependency-mismatch" === (i = t.validator.methods[n].call(this, h, e, s.parameters)) && 1 === a) { l = !0; continue } if (l = !1, "pending" === i) return void(this.toHide = this.toHide.not(this.errorsFor(e))); if (!i) return this.formatAndAdd(e, s), !1 } catch (c) { throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + e.id + ", check the '" + s.method + "' method.", c), c instanceof TypeError && (c.message += ".  Exception occurred when checking element " + e.id + ", check the '" + s.method + "' method."), c } }
                if (!l) return this.objectLength(r) && this.successList.push(e), !0
            },
            customDataMessage: function(e, i) { return t(e).data("msg" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase()) || t(e).data("msg") },
            customMessage: function(t, e) { var i = this.settings.messages[t]; return i && (i.constructor === String ? i : i[e]) },
            findDefined: function() {
                for (var t = 0; t < arguments.length; t++)
                    if (void 0 !== arguments[t]) return arguments[t]
            },
            defaultMessage: function(e, i) {
                "string" == typeof i && (i = { method: i });
                var n = this.findDefined(this.customMessage(e.name, i.method), this.customDataMessage(e, i.method), !this.settings.ignoreTitle && e.title || void 0, t.validator.messages[i.method], "<strong>Warning: No message defined for " + e.name + "</strong>"),
                    s = /\$?\{(\d+)\}/g;
                return "function" == typeof n ? n = n.call(this, i.parameters, e) : s.test(n) && (n = t.validator.format(n.replace(s, "{$1}"), i.parameters)), n
            },
            formatAndAdd: function(t, e) {
                var i = this.defaultMessage(t, e);
                this.errorList.push({ message: i, element: t, method: e.method }), this.errorMap[t.name] = i, this.submitted[t.name] = i
            },
            addWrapper: function(t) { return this.settings.wrapper && (t = t.add(t.parent(this.settings.wrapper))), t },
            defaultShowErrors: function() {
                var t, e, i;
                for (t = 0; this.errorList[t]; t++) i = this.errorList[t], this.settings.highlight && this.settings.highlight.call(this, i.element, this.settings.errorClass, this.settings.validClass), this.showLabel(i.element, i.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                    for (t = 0; this.successList[t]; t++) this.showLabel(this.successList[t]);
                if (this.settings.unhighlight)
                    for (t = 0, e = this.validElements(); e[t]; t++) this.settings.unhighlight.call(this, e[t], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
            },
            validElements: function() { return this.currentElements.not(this.invalidElements()) },
            invalidElements: function() { return t(this.errorList).map(function() { return this.element }) },
            showLabel: function(e, i) {
                var n, s, o, r, a = this.errorsFor(e),
                    l = this.idOrName(e),
                    h = t(e).attr("aria-describedby");
                a.length ? (a.removeClass(this.settings.validClass).addClass(this.settings.errorClass), a.html(i)) : (n = a = t("<" + this.settings.errorElement + ">").attr("id", l + "-error").addClass(this.settings.errorClass).html(i || ""), this.settings.wrapper && (n = a.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(n) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, n, t(e)) : n.insertAfter(e), a.is("label") ? a.attr("for", l) : 0 === a.parents("label[for='" + this.escapeCssMeta(l) + "']").length && (o = a.attr("id"), h ? h.match(new RegExp("\\b" + this.escapeCssMeta(o) + "\\b")) || (h += " " + o) : h = o, t(e).attr("aria-describedby", h), (s = this.groups[e.name]) && (r = this, t.each(r.groups, function(e, i) { i === s && t("[name='" + r.escapeCssMeta(e) + "']", r.currentForm).attr("aria-describedby", a.attr("id")) })))), !i && this.settings.success && (a.text(""), "string" == typeof this.settings.success ? a.addClass(this.settings.success) : this.settings.success(a, e)), this.toShow = this.toShow.add(a)
            },
            errorsFor: function(e) {
                var i = this.escapeCssMeta(this.idOrName(e)),
                    n = t(e).attr("aria-describedby"),
                    s = "label[for='" + i + "'], label[for='" + i + "'] *";
                return n && (s = s + ", #" + this.escapeCssMeta(n).replace(/\s+/g, ", #")), this.errors().filter(s)
            },
            escapeCssMeta: function(t) { return t.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g, "\\$1") },
            idOrName: function(t) { return this.groups[t.name] || (this.checkable(t) ? t.name : t.id || t.name) },
            validationTargetFor: function(e) { return this.checkable(e) && (e = this.findByName(e.name)), t(e).not(this.settings.ignore)[0] },
            checkable: function(t) { return /radio|checkbox/i.test(t.type) },
            findByName: function(e) { return t(this.currentForm).find("[name='" + this.escapeCssMeta(e) + "']") },
            getLength: function(e, i) {
                switch (i.nodeName.toLowerCase()) {
                    case "select":
                        return t("option:selected", i).length;
                    case "input":
                        if (this.checkable(i)) return this.findByName(i.name).filter(":checked").length
                }
                return e.length
            },
            depend: function(t, e) { return !this.dependTypes[typeof t] || this.dependTypes[typeof t](t, e) },
            dependTypes: { boolean: function(t) { return t }, string: function(e, i) { return !!t(e, i.form).length }, "function": function(t, e) { return t(e) } },
            optional: function(e) { var i = this.elementValue(e); return !t.validator.methods.required.call(this, i, e) && "dependency-mismatch" },
            startRequest: function(e) { this.pending[e.name] || (this.pendingRequest++, t(e).addClass(this.settings.pendingClass), this.pending[e.name] = !0) },
            stopRequest: function(e, i) { this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[e.name], t(e).removeClass(this.settings.pendingClass), i && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (t(this.currentForm).submit(), this.submitButton && t("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove(), this.formSubmitted = !1) : !i && 0 === this.pendingRequest && this.formSubmitted && (t(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1) },
            previousValue: function(e, i) { return i = "string" == typeof i && i || "remote", t.data(e, "previousValue") || t.data(e, "previousValue", { old: null, valid: !0, message: this.defaultMessage(e, { method: i }) }) },
            destroy: function() { this.resetForm(), t(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur") }
        },
        classRuleSettings: { required: { required: !0 }, email: { email: !0 }, url: { url: !0 }, date: { date: !0 }, dateISO: { dateISO: !0 }, number: { number: !0 }, digits: { digits: !0 }, creditcard: { creditcard: !0 } },
        addClassRules: function(e, i) { e.constructor === String ? this.classRuleSettings[e] = i : t.extend(this.classRuleSettings, e) },
        classRules: function(e) {
            var i = {},
                n = t(e).attr("class");
            return n && t.each(n.split(" "), function() { this in t.validator.classRuleSettings && t.extend(i, t.validator.classRuleSettings[this]) }), i
        },
        normalizeAttributeRule: function(t, e, i, n) { /min|max|step/.test(i) && (null === e || /number|range|text/.test(e)) && (n = Number(n), isNaN(n) && (n = void 0)), n || 0 === n ? t[i] = n : e === i && "range" !== e && (t[i] = !0) },
        attributeRules: function(e) {
            var i, n, s = {},
                o = t(e),
                r = e.getAttribute("type");
            for (i in t.validator.methods) "required" === i ? ("" === (n = e.getAttribute(i)) && (n = !0), n = !!n) : n = o.attr(i), this.normalizeAttributeRule(s, r, i, n);
            return s.maxlength && /-1|2147483647|524288/.test(s.maxlength) && delete s.maxlength, s
        },
        dataRules: function(e) {
            var i, n, s = {},
                o = t(e),
                r = e.getAttribute("type");
            for (i in t.validator.methods) n = o.data("rule" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase()), this.normalizeAttributeRule(s, r, i, n);
            return s
        },
        staticRules: function(e) {
            var i = {},
                n = t.data(e.form, "validator");
            return n.settings.rules && (i = t.validator.normalizeRule(n.settings.rules[e.name]) || {}), i
        },
        normalizeRules: function(e, i) {
            return t.each(e, function(n, s) {
                if (!1 !== s) {
                    if (s.param || s.depends) {
                        var o = !0;
                        switch (typeof s.depends) {
                            case "string":
                                o = !!t(s.depends, i.form).length;
                                break;
                            case "function":
                                o = s.depends.call(i, i)
                        }
                        o ? e[n] = void 0 === s.param || s.param : (t.data(i.form, "validator").resetElements(t(i)), delete e[n])
                    }
                } else delete e[n]
            }), t.each(e, function(n, s) { e[n] = t.isFunction(s) && "normalizer" !== n ? s(i) : s }), t.each(["minlength", "maxlength"], function() { e[this] && (e[this] = Number(e[this])) }), t.each(["rangelength", "range"], function() {
                var i;
                e[this] && (t.isArray(e[this]) ? e[this] = [Number(e[this][0]), Number(e[this][1])] : "string" == typeof e[this] && (i = e[this].replace(/[\[\]]/g, "").split(/[\s,]+/), e[this] = [Number(i[0]), Number(i[1])]))
            }), t.validator.autoCreateRanges && (null != e.min && null != e.max && (e.range = [e.min, e.max], delete e.min, delete e.max), null != e.minlength && null != e.maxlength && (e.rangelength = [e.minlength, e.maxlength], delete e.minlength, delete e.maxlength)), e
        },
        normalizeRule: function(e) {
            if ("string" == typeof e) {
                var i = {};
                t.each(e.split(/\s/), function() { i[this] = !0 }), e = i
            }
            return e
        },
        addMethod: function(e, i, n) { t.validator.methods[e] = i, t.validator.messages[e] = void 0 !== n ? n : t.validator.messages[e], i.length < 3 && t.validator.addClassRules(e, t.validator.normalizeRule(e)) },
        methods: {
            required: function(e, i, n) { if (!this.depend(n, i)) return "dependency-mismatch"; if ("select" === i.nodeName.toLowerCase()) { var s = t(i).val(); return s && s.length > 0 } return this.checkable(i) ? this.getLength(e, i) > 0 : e.length > 0 },
            email: function(t, e) { return this.optional(e) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(t) },
            url: function(t, e) { return this.optional(e) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(t) },
            date: function(t, e) { return this.optional(e) || !/Invalid|NaN/.test(new Date(t).toString()) },
            dateISO: function(t, e) { return this.optional(e) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(t) },
            number: function(t, e) { return this.optional(e) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t) },
            digits: function(t, e) { return this.optional(e) || /^\d+$/.test(t) },
            minlength: function(e, i, n) { var s = t.isArray(e) ? e.length : this.getLength(e, i); return this.optional(i) || s >= n },
            maxlength: function(e, i, n) { var s = t.isArray(e) ? e.length : this.getLength(e, i); return this.optional(i) || s <= n },
            rangelength: function(e, i, n) { var s = t.isArray(e) ? e.length : this.getLength(e, i); return this.optional(i) || s >= n[0] && s <= n[1] },
            min: function(t, e, i) { return this.optional(e) || t >= i },
            max: function(t, e, i) { return this.optional(e) || t <= i },
            range: function(t, e, i) { return this.optional(e) || t >= i[0] && t <= i[1] },
            step: function(e, i, n) {
                var s, o = t(i).attr("type"),
                    r = "Step attribute on input type " + o + " is not supported.",
                    a = ["text", "number", "range"],
                    l = new RegExp("\\b" + o + "\\b"),
                    h = function(t) { var e = ("" + t).match(/(?:\.(\d+))?$/); return e && e[1] ? e[1].length : 0 },
                    c = function(t) { return Math.round(t * Math.pow(10, s)) },
                    u = !0;
                if (o && !l.test(a.join())) throw new Error(r);
                return s = h(n), (h(e) > s || c(e) % c(n) != 0) && (u = !1), this.optional(i) || u
            },
            equalTo: function(e, i, n) { var s = t(n); return this.settings.onfocusout && s.not(".validate-equalTo-blur").length && s.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function() { t(i).valid() }), e === s.val() },
            remote: function(e, i, n, s) {
                if (this.optional(i)) return "dependency-mismatch";
                s = "string" == typeof s && s || "remote";
                var o, r, a, l = this.previousValue(i, s);
                return this.settings.messages[i.name] || (this.settings.messages[i.name] = {}), l.originalMessage = l.originalMessage || this.settings.messages[i.name][s], this.settings.messages[i.name][s] = l.message, n = "string" == typeof n && { url: n } || n, a = t.param(t.extend({ data: e }, n.data)), l.old === a ? l.valid : (l.old = a, o = this, this.startRequest(i), (r = {})[i.name] = e, t.ajax(t.extend(!0, {
                    mode: "abort",
                    port: "validate" + i.name,
                    dataType: "json",
                    data: r,
                    context: o.currentForm,
                    success: function(t) {
                        var n, r, a, h = !0 === t || "true" === t;
                        o.settings.messages[i.name][s] = l.originalMessage, h ? (a = o.formSubmitted, o.resetInternals(), o.toHide = o.errorsFor(i), o.formSubmitted = a, o.successList.push(i), o.invalid[i.name] = !1, o.showErrors()) : (n = {}, r = t || o.defaultMessage(i, { method: s, parameters: e }), n[i.name] = l.message = r, o.invalid[i.name] = !0, o.showErrors(n)), l.valid = h, o.stopRequest(i, h)
                    }
                }, n)), "pending")
            }
        }
    });
    var e, i = {};
    return t.ajaxPrefilter ? t.ajaxPrefilter(function(t, e, n) { var s = t.port; "abort" === t.mode && (i[s] && i[s].abort(), i[s] = n) }) : (e = t.ajax, t.ajax = function(n) {
        var s = ("mode" in n ? n : t.ajaxSettings).mode,
            o = ("port" in n ? n : t.ajaxSettings).port;
        return "abort" === s ? (i[o] && i[o].abort(), i[o] = e.apply(this, arguments), i[o]) : e.apply(this, arguments)
    }), t
}),
function(t) {
    function e(t, e) {
        if (!(t.originalEvent.touches.length > 1)) {
            t.preventDefault();
            var i = t.originalEvent.changedTouches[0],
                n = document.createEvent("MouseEvents");
            n.initMouseEvent(e, !0, !0, window, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null), t.target.dispatchEvent(n)
        }
    }
    if (t.support.touch = "ontouchend" in document, t.support.touch) {
        var i, n = t.ui.mouse.prototype,
            s = n._mouseInit,
            o = n._mouseDestroy;
        n._touchStart = function(t) { var n = this;!i && n._mouseCapture(t.originalEvent.changedTouches[0]) && (i = !0, n._touchMoved = !1, e(t, "mouseover"), e(t, "mousemove"), e(t, "mousedown")) }, n._touchMove = function(t) { i && (this._touchMoved = !0, e(t, "mousemove")) }, n._touchEnd = function(t) { i && (e(t, "mouseup"), e(t, "mouseout"), this._touchMoved || e(t, "click"), i = !1) }, n._mouseInit = function() {
            var e = this;
            e.element.bind({ touchstart: t.proxy(e, "_touchStart"), touchmove: t.proxy(e, "_touchMove"), touchend: t.proxy(e, "_touchEnd") }), s.call(e)
        }, n._mouseDestroy = function() {
            var e = this;
            e.element.unbind({ touchstart: t.proxy(e, "_touchStart"), touchmove: t.proxy(e, "_touchMove"), touchend: t.proxy(e, "_touchEnd") }), o.call(e)
        }
    }
}(jQuery),
function(t, e) { "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e() : t.ScrollMagic = e() }(this, function() {
    "use strict";
    var t = function() {};
    t.version = "2.0.6", window.addEventListener("mousewheel", function() {});
    var e = "data-scrollmagic-pin-spacer";
    t.Controller = function(n) {
        var o, r, a = "ScrollMagic.Controller",
            l = "FORWARD",
            h = "REVERSE",
            c = "PAUSED",
            u = i.defaults,
            d = this,
            p = s.extend({}, u, n),
            f = [],
            m = !1,
            g = 0,
            v = c,
            _ = !0,
            y = 0,
            b = !0,
            w = function() {
                for (var t in p) u.hasOwnProperty(t) || delete p[t];
                if (p.container = s.get.elements(p.container)[0], !p.container) throw a + " init failed.";
                (_ = p.container === window || p.container === document.body || !document.body.contains(p.container)) && (p.container = window), y = k(), p.container.addEventListener("resize", D), p.container.addEventListener("scroll", D);
                var e = parseInt(p.refreshInterval, 10);
                p.refreshInterval = s.type.Number(e) ? e : u.refreshInterval, x()
            },
            x = function() { p.refreshInterval > 0 && (r = window.setTimeout(A, p.refreshInterval)) },
            T = function() { return p.vertical ? s.get.scrollTop(p.container) : s.get.scrollLeft(p.container) },
            k = function() { return p.vertical ? s.get.height(p.container) : s.get.width(p.container) },
            C = this._setScrollPos = function(t) { p.vertical ? _ ? window.scrollTo(s.get.scrollLeft(), t) : p.container.scrollTop = t : _ ? window.scrollTo(t, s.get.scrollTop()) : p.container.scrollLeft = t },
            S = function() {
                if (b && m) {
                    var t = s.type.Array(m) ? m : f.slice(0);
                    m = !1;
                    var e = g,
                        i = (g = d.scrollPos()) - e;
                    0 !== i && (v = i > 0 ? l : h), v === h && t.reverse(), t.forEach(function(t) { t.update(!0) })
                }
            },
            P = function() { o = s.rAF(S) },
            D = function(t) { "resize" == t.type && (y = k(), v = c), !0 !== m && (m = !0, P()) },
            A = function() {
                if (!_ && y != k()) {
                    var t;
                    try { t = new Event("resize", { bubbles: !1, cancelable: !1 }) } catch (e) {
                        (t = document.createEvent("Event")).initEvent("resize", !1, !1)
                    }
                    p.container.dispatchEvent(t)
                }
                f.forEach(function(t) { t.refresh() }), x()
            };
        this._options = p;
        var M = function(t) { if (t.length <= 1) return t; var e = t.slice(0); return e.sort(function(t, e) { return t.scrollOffset() > e.scrollOffset() ? 1 : -1 }), e };
        return this.addScene = function(e) {
            if (s.type.Array(e)) e.forEach(function(t) { d.addScene(t) });
            else if (e instanceof t.Scene)
                if (e.controller() !== d) e.addTo(d);
                else if (f.indexOf(e) < 0)
                for (var i in f.push(e), f = M(f), e.on("shift.controller_sort", function() { f = M(f) }), p.globalSceneOptions) e[i] && e[i].call(e, p.globalSceneOptions[i]);
            return d
        }, this.removeScene = function(t) {
            if (s.type.Array(t)) t.forEach(function(t) { d.removeScene(t) });
            else {
                var e = f.indexOf(t);
                e > -1 && (t.off("shift.controller_sort"), f.splice(e, 1), t.remove())
            }
            return d
        }, this.updateScene = function(e, i) { return s.type.Array(e) ? e.forEach(function(t) { d.updateScene(t, i) }) : i ? e.update(!0) : !0 !== m && e instanceof t.Scene && (-1 == (m = m || []).indexOf(e) && m.push(e), m = M(m), P()), d }, this.update = function(t) { return D({ type: "resize" }), t && S(), d }, this.scrollTo = function(i, n) {
            if (s.type.Number(i)) C.call(p.container, i, n);
            else if (i instanceof t.Scene) i.controller() === d && d.scrollTo(i.scrollOffset(), n);
            else if (s.type.Function(i)) C = i;
            else {
                var o = s.get.elements(i)[0];
                if (o) {
                    for (; o.parentNode.hasAttribute(e);) o = o.parentNode;
                    var r = p.vertical ? "top" : "left",
                        a = s.get.offset(p.container),
                        l = s.get.offset(o);
                    _ || (a[r] -= d.scrollPos()), d.scrollTo(l[r] - a[r], n)
                }
            }
            return d
        }, this.scrollPos = function(t) { return arguments.length ? (s.type.Function(t) && (T = t), d) : T.call(d) }, this.info = function(t) { var e = { size: y, vertical: p.vertical, scrollPos: g, scrollDirection: v, container: p.container, isDocument: _ }; return arguments.length ? void 0 !== e[t] ? e[t] : void 0 : e }, this.loglevel = function() { return d }, this.enabled = function(t) { return arguments.length ? (b != t && (b = !!t, d.updateScene(f, !0)), d) : b }, this.destroy = function(t) { window.clearTimeout(r); for (var e = f.length; e--;) f[e].destroy(t); return p.container.removeEventListener("resize", D), p.container.removeEventListener("scroll", D), s.cAF(o), null }, w(), d
    };
    var i = { defaults: { container: window, vertical: !0, globalSceneOptions: {}, loglevel: 2, refreshInterval: 100 } };
    t.Controller.addOption = function(t, e) { i.defaults[t] = e }, t.Controller.extend = function(e) {
        var i = this;
        t.Controller = function() { return i.apply(this, arguments), this.$super = s.extend({}, this), e.apply(this, arguments) || this }, s.extend(t.Controller, i), t.Controller.prototype = i.prototype, t.Controller.prototype.constructor = t.Controller
    }, t.Scene = function(i) {
        var o, r, a = "BEFORE",
            l = "DURING",
            h = "AFTER",
            c = n.defaults,
            u = this,
            d = s.extend({}, c, i),
            p = a,
            f = 0,
            m = { start: 0, end: 0 },
            g = 0,
            v = !0,
            _ = function() {
                for (var t in d) c.hasOwnProperty(t) || delete d[t];
                for (var e in c) A(e);
                P()
            },
            y = {};
        this.on = function(t, e) {
            return s.type.Function(e) && (t = t.trim().split(" ")).forEach(function(t) {
                var i = t.split("."),
                    n = i[0],
                    s = i[1];
                "*" != n && (y[n] || (y[n] = []), y[n].push({ namespace: s || "", callback: e }))
            }), u
        }, this.off = function(t, e) {
            return t ? ((t = t.trim().split(" ")).forEach(function(t) {
                var i = t.split("."),
                    n = i[0],
                    s = i[1] || "";
                ("*" === n ? Object.keys(y) : [n]).forEach(function(t) {
                    for (var i = y[t] || [], n = i.length; n--;) { var o = i[n];!o || s !== o.namespace && "*" !== s || e && e != o.callback || i.splice(n, 1) }
                    i.length || delete y[t]
                })
            }), u) : u
        }, this.trigger = function(e, i) {
            if (e) {
                var n = e.trim().split("."),
                    s = n[0],
                    o = n[1],
                    r = y[s];
                r && r.forEach(function(e) { o && o !== e.namespace || e.callback.call(u, new t.Event(s, e.namespace, u, i)) })
            }
            return u
        }, u.on("change.internal", function(t) { "loglevel" !== t.what && "tweenChanges" !== t.what && ("triggerElement" === t.what ? k() : "reverse" === t.what && u.update()) }).on("shift.internal", function() { x(), u.update() }), this.addTo = function(e) { return e instanceof t.Controller && r != e && (r && r.removeScene(u), r = e, P(), T(!0), k(!0), x(), r.info("container").addEventListener("resize", C), e.addScene(u), u.trigger("add", { controller: r }), u.update()), u }, this.enabled = function(t) { return arguments.length ? (v != t && (v = !!t, u.update(!0)), u) : v }, this.remove = function() {
            if (r) {
                r.info("container").removeEventListener("resize", C);
                var t = r;
                r = void 0, t.removeScene(u), u.trigger("remove")
            }
            return u
        }, this.destroy = function(t) { return u.trigger("destroy", { reset: t }), u.remove(), u.off("*.*"), null }, this.update = function(t) {
            if (r)
                if (t)
                    if (r.enabled() && v) {
                        var e, i = r.info("scrollPos");
                        e = d.duration > 0 ? (i - m.start) / (m.end - m.start) : i >= m.start ? 1 : 0, u.trigger("update", { startPos: m.start, endPos: m.end, scrollPos: i }), u.progress(e)
                    } else b && p === l && M(!0);
            else r.updateScene(u, !1);
            return u
        }, this.refresh = function() { return T(), k(), u }, this.progress = function(t) {
            if (arguments.length) {
                var e = !1,
                    i = p,
                    n = r ? r.info("scrollDirection") : "PAUSED",
                    s = d.reverse || t >= f;
                if (0 === d.duration ? (e = f != t, p = 0 === (f = 1 > t && s ? 0 : 1) ? a : l) : 0 > t && p !== a && s ? (f = 0, p = a, e = !0) : t >= 0 && 1 > t && s ? (f = t, p = l, e = !0) : t >= 1 && p !== h ? (f = 1, p = h, e = !0) : p !== l || s || M(), e) {
                    var o = { progress: f, state: p, scrollDirection: n },
                        c = p != i,
                        m = function(t) { u.trigger(t, o) };
                    c && i !== l && (m("enter"), m(i === a ? "start" : "end")), m("progress"), c && p !== l && (m(p === a ? "start" : "end"), m("leave"))
                }
                return u
            }
            return f
        };
        var b, w, x = function() { m = { start: g + d.offset }, r && d.triggerElement && (m.start -= r.info("size") * d.triggerHook), m.end = m.start + d.duration },
            T = function(t) {
                if (o) {
                    var e = "duration";
                    D(e, o.call(u)) && !t && (u.trigger("change", { what: e, newval: d[e] }), u.trigger("shift", { reason: e }))
                }
            },
            k = function(t) {
                var i = 0,
                    n = d.triggerElement;
                if (r && (n || g > 0)) {
                    if (n)
                        if (n.parentNode) {
                            for (var o = r.info(), a = s.get.offset(o.container), l = o.vertical ? "top" : "left"; n.parentNode.hasAttribute(e);) n = n.parentNode;
                            var h = s.get.offset(n);
                            o.isDocument || (a[l] -= r.scrollPos()), i = h[l] - a[l]
                        } else u.triggerElement(void 0);
                    var c = i != g;
                    g = i, c && !t && u.trigger("shift", { reason: "triggerElementPosition" })
                }
            },
            C = function() { d.triggerHook > 0 && u.trigger("shift", { reason: "containerResize" }) },
            S = s.extend(n.validate, {
                duration: function(t) {
                    if (s.type.String(t) && t.match(/^(\.|\d)*\d+%$/)) {
                        var e = parseFloat(t) / 100;
                        t = function() { return r ? r.info("size") * e : 0 }
                    }
                    if (s.type.Function(t)) { o = t; try { t = parseFloat(o()) } catch (i) { t = -1 } }
                    if (t = parseFloat(t), !s.type.Number(t) || 0 > t) throw o ? (o = void 0, 0) : 0;
                    return t
                }
            }),
            P = function(t) {
                (t = arguments.length ? [t] : Object.keys(S)).forEach(function(t) { var e; if (S[t]) try { e = S[t](d[t]) } catch (i) { e = c[t] } finally { d[t] = e } })
            },
            D = function(t, e) {
                var i = !1,
                    n = d[t];
                return d[t] != e && (d[t] = e, P(t), i = n != d[t]), i
            },
            A = function(t) { u[t] || (u[t] = function(e) { return arguments.length ? ("duration" === t && (o = void 0), D(t, e) && (u.trigger("change", { what: t, newval: d[t] }), n.shifts.indexOf(t) > -1 && u.trigger("shift", { reason: t })), u) : d[t] }) };
        this.controller = function() { return r }, this.state = function() { return p }, this.scrollOffset = function() { return m.start }, this.triggerPosition = function() { var t = d.offset; return r && (t += d.triggerElement ? g : r.info("size") * u.triggerHook()), t }, u.on("shift.internal", function(t) {
            var e = "duration" === t.reason;
            (p === h && e || p === l && 0 === d.duration) && M(), e && I()
        }).on("progress.internal", function() { M() }).on("add.internal", function() { I() }).on("destroy.internal", function(t) { u.removePin(t.reset) });
        var M = function(t) {
                if (b && r) {
                    var e = r.info(),
                        i = w.spacer.firstChild;
                    if (t || p !== l) {
                        var n = { position: w.inFlow ? "relative" : "absolute", top: 0, left: 0 },
                            o = s.css(i, "position") != n.position;
                        w.pushFollowers ? d.duration > 0 && (p === h && 0 === parseFloat(s.css(w.spacer, "padding-top")) ? o = !0 : p === a && 0 === parseFloat(s.css(w.spacer, "padding-bottom")) && (o = !0)) : n[e.vertical ? "top" : "left"] = d.duration * f, s.css(i, n), o && I()
                    } else {
                        "fixed" != s.css(i, "position") && (s.css(i, { position: "fixed" }), I());
                        var c = s.get.offset(w.spacer, !0),
                            u = d.reverse || 0 === d.duration ? e.scrollPos - m.start : Math.round(f * d.duration * 10) / 10;
                        c[e.vertical ? "top" : "left"] += u, s.css(w.spacer.firstChild, { top: c.top, left: c.left })
                    }
                }
            },
            I = function() {
                if (b && r && w.inFlow) {
                    var t = p === l,
                        e = r.info("vertical"),
                        i = w.spacer.firstChild,
                        n = s.isMarginCollapseType(s.css(w.spacer, "display")),
                        o = {};
                    w.relSize.width || w.relSize.autoFullWidth ? t ? s.css(b, { width: s.get.width(w.spacer) }) : s.css(b, { width: "100%" }) : (o["min-width"] = s.get.width(e ? b : i, !0, !0), o.width = t ? o["min-width"] : "auto"), w.relSize.height ? t ? s.css(b, { height: s.get.height(w.spacer) - (w.pushFollowers ? d.duration : 0) }) : s.css(b, { height: "100%" }) : (o["min-height"] = s.get.height(e ? i : b, !0, !n), o.height = t ? o["min-height"] : "auto"), w.pushFollowers && (o["padding" + (e ? "Top" : "Left")] = d.duration * f, o["padding" + (e ? "Bottom" : "Right")] = d.duration * (1 - f)), s.css(w.spacer, o)
                }
            },
            O = function() { r && b && p === l && !r.info("isDocument") && M() },
            E = function() { r && b && p === l && ((w.relSize.width || w.relSize.autoFullWidth) && s.get.width(window) != s.get.width(w.spacer.parentNode) || w.relSize.height && s.get.height(window) != s.get.height(w.spacer.parentNode)) && I() },
            $ = function(t) { r && b && p === l && !r.info("isDocument") && (t.preventDefault(), r._setScrollPos(r.info("scrollPos") - ((t.wheelDelta || t[r.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"]) / 3 || 30 * -t.detail))) };
        this.setPin = function(t, i) {
            var n = { pushFollowers: !0, spacerClass: "scrollmagic-pin-spacer" };
            if (i = s.extend({}, n, i), !(t = s.get.elements(t)[0])) return u;
            if ("fixed" === s.css(t, "position")) return u;
            if (b) {
                if (b === t) return u;
                u.removePin()
            }
            var o = (b = t).parentNode.style.display,
                r = ["top", "left", "bottom", "right", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
            b.parentNode.style.display = "none";
            var a = "absolute" != s.css(b, "position"),
                l = s.css(b, r.concat(["display"])),
                h = s.css(b, ["width", "height"]);
            b.parentNode.style.display = o, !a && i.pushFollowers && (i.pushFollowers = !1);
            var c = b.parentNode.insertBefore(document.createElement("div"), b),
                d = s.extend(l, { position: a ? "relative" : "absolute", boxSizing: "content-box", mozBoxSizing: "content-box", webkitBoxSizing: "content-box" });
            if (a || s.extend(d, s.css(b, ["width", "height"])), s.css(c, d), c.setAttribute(e, ""), s.addClass(c, i.spacerClass), w = { spacer: c, relSize: { width: "%" === h.width.slice(-1), height: "%" === h.height.slice(-1), autoFullWidth: "auto" === h.width && a && s.isMarginCollapseType(l.display) }, pushFollowers: i.pushFollowers, inFlow: a }, !b.___origStyle) {
                b.___origStyle = {};
                var p = b.style;
                r.concat(["width", "height", "position", "boxSizing", "mozBoxSizing", "webkitBoxSizing"]).forEach(function(t) { b.___origStyle[t] = p[t] || "" })
            }
            return w.relSize.width && s.css(c, { width: h.width }), w.relSize.height && s.css(c, { height: h.height }), c.appendChild(b), s.css(b, { position: a ? "relative" : "absolute", margin: "auto", top: "auto", left: "auto", bottom: "auto", right: "auto" }), (w.relSize.width || w.relSize.autoFullWidth) && s.css(b, { boxSizing: "border-box", mozBoxSizing: "border-box", webkitBoxSizing: "border-box" }), window.addEventListener("scroll", O), window.addEventListener("resize", O), window.addEventListener("resize", E), b.addEventListener("mousewheel", $), b.addEventListener("DOMMouseScroll", $), M(), u
        }, this.removePin = function(t) {
            if (b) {
                if (p === l && M(!0), t || !r) {
                    var i = w.spacer.firstChild;
                    if (i.hasAttribute(e)) {
                        var n = w.spacer.style,
                            o = {};
                        ["margin", "marginLeft", "marginRight", "marginTop", "marginBottom"].forEach(function(t) { o[t] = n[t] || "" }), s.css(i, o)
                    }
                    w.spacer.parentNode.insertBefore(i, w.spacer), w.spacer.parentNode.removeChild(w.spacer), b.parentNode.hasAttribute(e) || (s.css(b, b.___origStyle), delete b.___origStyle)
                }
                window.removeEventListener("scroll", O), window.removeEventListener("resize", O), window.removeEventListener("resize", E), b.removeEventListener("mousewheel", $), b.removeEventListener("DOMMouseScroll", $), b = void 0
            }
            return u
        };
        var N, z = [];
        return u.on("destroy.internal", function(t) { u.removeClassToggle(t.reset) }), this.setClassToggle = function(t, e) {
            var i = s.get.elements(t);
            return 0 !== i.length && s.type.String(e) ? (z.length > 0 && u.removeClassToggle(), N = e, z = i, u.on("enter.internal_class leave.internal_class", function(t) {
                var e = "enter" === t.type ? s.addClass : s.removeClass;
                z.forEach(function(t) { e(t, N) })
            }), u) : u
        }, this.removeClassToggle = function(t) { return t && z.forEach(function(t) { s.removeClass(t, N) }), u.off("start.internal_class end.internal_class"), N = void 0, z = [], u }, _(), u
    };
    var n = {
        defaults: { duration: 0, offset: 0, triggerElement: void 0, triggerHook: .5, reverse: !0, loglevel: 2 },
        validate: {
            offset: function(t) { if (t = parseFloat(t), !s.type.Number(t)) throw 0; return t },
            triggerElement: function(t) {
                if (t = t || void 0) {
                    var e = s.get.elements(t)[0];
                    if (!e || !e.parentNode) throw 0;
                    t = e
                }
                return t
            },
            triggerHook: function(t) {
                var e = { onCenter: .5, onEnter: 1, onLeave: 0 };
                if (s.type.Number(t)) t = Math.max(0, Math.min(parseFloat(t), 1));
                else {
                    if (!(t in e)) throw 0;
                    t = e[t]
                }
                return t
            },
            reverse: function(t) { return !!t }
        },
        shifts: ["duration", "offset", "triggerHook"]
    };
    t.Scene.addOption = function(t, e, i, s) { t in n.defaults || (n.defaults[t] = e, n.validate[t] = i, s && n.shifts.push(t)) }, t.Scene.extend = function(e) {
        var i = this;
        t.Scene = function() { return i.apply(this, arguments), this.$super = s.extend({}, this), e.apply(this, arguments) || this }, s.extend(t.Scene, i), t.Scene.prototype = i.prototype, t.Scene.prototype.constructor = t.Scene
    }, t.Event = function(t, e, i, n) { for (var s in n = n || {}) this[s] = n[s]; return this.type = t, this.target = this.currentTarget = i, this.namespace = e || "", this.timeStamp = this.timestamp = Date.now(), this };
    var s = t._util = function(t) {
        var e, i = {},
            n = function(t) { return parseFloat(t) || 0 },
            s = function(e) { return e.currentStyle ? e.currentStyle : t.getComputedStyle(e) },
            o = function(e, i, o, r) {
                if ((i = i === document ? t : i) === t) r = !1;
                else if (!u.DomElement(i)) return 0;
                e = e.charAt(0).toUpperCase() + e.substr(1).toLowerCase();
                var a = (o ? i["offset" + e] || i["outer" + e] : i["client" + e] || i["inner" + e]) || 0;
                if (o && r) {
                    var l = s(i);
                    a += "Height" === e ? n(l.marginTop) + n(l.marginBottom) : n(l.marginLeft) + n(l.marginRight)
                }
                return a
            },
            r = function(t) { return t.replace(/^[^a-z]+([a-z])/g, "$1").replace(/-([a-z])/g, function(t) { return t[1].toUpperCase() }) };
        i.extend = function(t) {
            for (t = t || {}, e = 1; e < arguments.length; e++)
                if (arguments[e])
                    for (var i in arguments[e]) arguments[e].hasOwnProperty(i) && (t[i] = arguments[e][i]);
            return t
        }, i.isMarginCollapseType = function(t) { return ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(t) > -1 };
        var a = 0,
            l = ["ms", "moz", "webkit", "o"],
            h = t.requestAnimationFrame,
            c = t.cancelAnimationFrame;
        for (e = 0; !h && e < l.length; ++e) h = t[l[e] + "RequestAnimationFrame"], c = t[l[e] + "CancelAnimationFrame"] || t[l[e] + "CancelRequestAnimationFrame"];
        h || (h = function(e) {
            var i = (new Date).getTime(),
                n = Math.max(0, 16 - (i - a)),
                s = t.setTimeout(function() { e(i + n) }, n);
            return a = i + n, s
        }), c || (c = function(e) { t.clearTimeout(e) }), i.rAF = h.bind(t), i.cAF = c.bind(t);
        var u = i.type = function(t) { return Object.prototype.toString.call(t).replace(/^\[object (.+)\]$/, "$1").toLowerCase() };
        u.String = function(t) { return "string" === u(t) }, u.Function = function(t) { return "function" === u(t) }, u.Array = function(t) { return Array.isArray(t) }, u.Number = function(t) { return !u.Array(t) && t - parseFloat(t) + 1 >= 0 }, u.DomElement = function(t) { return "object" == typeof HTMLElement ? t instanceof HTMLElement : t && "object" == typeof t && null !== t && 1 === t.nodeType && "string" == typeof t.nodeName };
        var d = i.get = {};
        return d.elements = function(e) {
            var i = [];
            if (u.String(e)) try { e = document.querySelectorAll(e) } catch (n) { return i }
            if ("nodelist" === u(e) || u.Array(e))
                for (var s = 0, o = i.length = e.length; o > s; s++) {
                    var r = e[s];
                    i[s] = u.DomElement(r) ? r : d.elements(r)
                } else(u.DomElement(e) || e === document || e === t) && (i = [e]);
            return i
        }, d.scrollTop = function(e) { return e && "number" == typeof e.scrollTop ? e.scrollTop : t.pageYOffset || 0 }, d.scrollLeft = function(e) { return e && "number" == typeof e.scrollLeft ? e.scrollLeft : t.pageXOffset || 0 }, d.width = function(t, e, i) { return o("width", t, e, i) }, d.height = function(t, e, i) { return o("height", t, e, i) }, d.offset = function(t, e) {
            var i = { top: 0, left: 0 };
            if (t && t.getBoundingClientRect) {
                var n = t.getBoundingClientRect();
                i.top = n.top, i.left = n.left, e || (i.top += d.scrollTop(), i.left += d.scrollLeft())
            }
            return i
        }, i.addClass = function(t, e) { e && (t.classList ? t.classList.add(e) : t.className += " " + e) }, i.removeClass = function(t, e) { e && (t.classList ? t.classList.remove(e) : t.className = t.className.replace(RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"), " ")) }, i.css = function(t, e) {
            if (u.String(e)) return s(t)[r(e)];
            if (u.Array(e)) {
                var i = {},
                    n = s(t);
                return e.forEach(function(t) { i[t] = n[r(t)] }), i
            }
            for (var o in e) {
                var a = e[o];
                a == parseFloat(a) && (a += "px"), t.style[r(o)] = a
            }
        }, i
    }(window || {});
    return t
}),
function(t, e) { "function" == typeof define && define.amd ? define(["ScrollMagic", "TweenMax", "TimelineMax"], e) : "object" == typeof exports ? (require("gsap"), e(require("scrollmagic"), TweenMax, TimelineMax)) : e(t.ScrollMagic || t.jQuery && t.jQuery.ScrollMagic, t.TweenMax || t.TweenLite, t.TimelineMax || t.TimelineLite) }(this, function(t, e, i) {
    "use strict";
    t.Scene.addOption("tweenChanges", !1, function(t) { return !!t }), t.Scene.extend(function() {
        var t, n = this;
        n.on("progress.plugin_gsap", function() { s() }), n.on("destroy.plugin_gsap", function(t) { n.removeTween(t.reset) });
        var s = function() {
            if (t) {
                var e = n.progress(),
                    i = n.state();
                t.repeat && -1 === t.repeat() ? "DURING" === i && t.paused() ? t.play() : "DURING" === i || t.paused() || t.pause() : e != t.progress() && (0 === n.duration() ? e > 0 ? t.play() : t.reverse() : n.tweenChanges() && t.tweenTo ? t.tweenTo(e * t.duration()) : t.progress(e).pause())
            }
        };
        n.setTween = function(o, r, a) {
            var l;
            arguments.length > 1 && (arguments.length < 3 && (a = r, r = 1), o = e.to(o, r, a));
            try {
                (l = i ? new i({ smoothChildTiming: !0 }).add(o) : o).pause()
            } catch (h) { return n }
            return t && n.removeTween(), t = l, o.repeat && -1 === o.repeat() && (t.repeat(-1), t.yoyo(o.yoyo())), s(), n
        }, n.removeTween = function(e) { return t && (e && t.progress(0).pause(), t.kill(), t = void 0), n }
    })
});
/*!
 * VERSION: 2.0.2
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 * 
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        var t, e, i, n, s, o, r, a, l, h, c, u, d, p, f, m, g;
        _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
                var n = function(t) {
                        var e, i = [],
                            n = t.length;
                        for (e = 0; e !== n; i.push(t[e++]));
                        return i
                    },
                    s = function(t, e, i) {
                        var n, s, o = t.cycle;
                        for (n in o) s = o[n], t[n] = "function" == typeof s ? s(i, e[i]) : s[i % s.length];
                        delete t.cycle
                    },
                    o = function(t, e, n) { i.call(this, t, e, n), this._cycle = 0, this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._repeat && this._uncache(!0), this.render = o.prototype.render },
                    r = 1e-10,
                    a = i._internals,
                    l = a.isSelector,
                    h = a.isArray,
                    c = o.prototype = i.to({}, .1, {}),
                    u = [];
                o.version = "2.0.2", c.constructor = o, c.kill()._gc = !1, o.killTweensOf = o.killDelayedCallsTo = i.killTweensOf, o.getTweensOf = i.getTweensOf, o.lagSmoothing = i.lagSmoothing, o.ticker = i.ticker, o.render = i.render, c.invalidate = function() { return this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._yoyoEase = null, this._uncache(!0), i.prototype.invalidate.call(this) }, c.updateTo = function(t, e) {
                    var n, s = this.ratio,
                        o = this.vars.immediateRender || t.immediateRender;
                    for (n in e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay)), t) this.vars[n] = t[n];
                    if (this._initted || o)
                        if (e) this._initted = !1, o && this.render(0, !0, !0);
                        else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                        var r = this._totalTime;
                        this.render(0, !0, !1), this._initted = !1, this.render(r, !0, !1)
                    } else if (this._initted = !1, this._init(), this._time > 0 || o)
                        for (var a, l = 1 / (1 - s), h = this._firstPT; h;) a = h.s + h.c, h.c *= l, h.s = a - h.c, h = h._next;
                    return this
                }, c.render = function(t, e, n) {
                    this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                    var s, o, l, h, c, u, d, p, f, m = this._dirty ? this.totalDuration() : this._totalDuration,
                        g = this._time,
                        v = this._totalTime,
                        _ = this._cycle,
                        y = this._duration,
                        b = this._rawPrevTime;
                    if (t >= m - 1e-7 && t >= 0 ? (this._totalTime = m, this._cycle = this._repeat, this._yoyo && 0 != (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = y, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (s = !0, o = "onComplete", n = n || this._timeline.autoRemoveChildren), 0 === y && (this._initted || !this.vars.lazy || n) && (this._startTime === this._timeline._duration && (t = 0), (0 > b || 0 >= t && t >= -1e-7 || b === r && "isPause" !== this.data) && b !== t && (n = !0, b > r && (o = "onReverseComplete")), this._rawPrevTime = p = !e || t || b === t ? t : r)) : 1e-7 > t ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== v || 0 === y && b > 0) && (o = "onReverseComplete", s = this._reversed), 0 > t && (this._active = !1, 0 === y && (this._initted || !this.vars.lazy || n) && (b >= 0 && (n = !0), this._rawPrevTime = p = !e || t || b === t ? t : r)), this._initted || (n = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (h = y + this._repeatDelay, this._cycle = this._totalTime / h >> 0, 0 !== this._cycle && this._cycle === this._totalTime / h && t >= v && this._cycle--, this._time = this._totalTime - this._cycle * h, this._yoyo && 0 != (1 & this._cycle) && (this._time = y - this._time, (f = this._yoyoEase || this.vars.yoyoEase) && (this._yoyoEase || (!0 !== f || this._initted ? this._yoyoEase = f = !0 === f ? this._ease : f instanceof Ease ? f : Ease.map[f] : (f = this.vars.ease, this._yoyoEase = f = f ? f instanceof Ease ? f : "function" == typeof f ? new Ease(f, this.vars.easeParams) : Ease.map[f] || i.defaultEase : i.defaultEase)), this.ratio = f ? 1 - f.getRatio((y - this._time) / y) : 0)), this._time > y ? this._time = y : this._time < 0 && (this._time = 0)), this._easeType && !f ? (c = this._time / y, (1 === (u = this._easeType) || 3 === u && c >= .5) && (c = 1 - c), 3 === u && (c *= 2), 1 === (d = this._easePower) ? c *= c : 2 === d ? c *= c * c : 3 === d ? c *= c * c * c : 4 === d && (c *= c * c * c * c), 1 === u ? this.ratio = 1 - c : 2 === u ? this.ratio = c : this._time / y < .5 ? this.ratio = c / 2 : this.ratio = 1 - c / 2) : f || (this.ratio = this._ease.getRatio(this._time / y))), g !== this._time || n || _ !== this._cycle) {
                        if (!this._initted) { if (this._init(), !this._initted || this._gc) return; if (!n && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = g, this._totalTime = v, this._rawPrevTime = b, this._cycle = _, a.lazyTweens.push(this), void(this._lazy = [t, e]);!this._time || s || f ? s && this._ease._calcEnd && !f && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1)) : this.ratio = this._ease.getRatio(this._time / y) }
                        for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== g && t >= 0 && (this._active = !0), 0 === v && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, !0, n) : o || (o = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === y) && (e || this._callback("onStart"))), l = this._firstPT; l;) l.f ? l.t[l.p](l.c * this.ratio + l.s) : l.t[l.p] = l.c * this.ratio + l.s, l = l._next;
                        this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, !0, n), e || (this._totalTime !== v || o) && this._callback("onUpdate")), this._cycle !== _ && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")), o && (!this._gc || n) && (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, !0, n), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[o] && this._callback(o), 0 === y && this._rawPrevTime === r && p !== r && (this._rawPrevTime = 0))
                    } else v !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate"))
                }, o.to = function(t, e, i) { return new o(t, e, i) }, o.from = function(t, e, i) { return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new o(t, e, i) }, o.fromTo = function(t, e, i, n) { return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new o(t, e, n) }, o.staggerTo = o.allTo = function(t, e, r, a, c, d, p) {
                    a = a || 0;
                    var f, m, g, v, _ = 0,
                        y = [],
                        b = function() { r.onComplete && r.onComplete.apply(r.onCompleteScope || this, arguments), c.apply(p || r.callbackScope || this, d || u) },
                        w = r.cycle,
                        x = r.startAt && r.startAt.cycle;
                    for (h(t) || ("string" == typeof t && (t = i.selector(t) || t), l(t) && (t = n(t))), t = t || [], 0 > a && ((t = n(t)).reverse(), a *= -1), f = t.length - 1, g = 0; f >= g; g++) {
                        for (v in m = {}, r) m[v] = r[v];
                        if (w && (s(m, t, g), null != m.duration && (e = m.duration, delete m.duration)), x) {
                            for (v in x = m.startAt = {}, r.startAt) x[v] = r.startAt[v];
                            s(m.startAt, t, g)
                        }
                        m.delay = _ + (m.delay || 0), g === f && c && (m.onComplete = b), y[g] = new o(t[g], e, m), _ += a
                    }
                    return y
                }, o.staggerFrom = o.allFrom = function(t, e, i, n, s, r, a) { return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, o.staggerTo(t, e, i, n, s, r, a) }, o.staggerFromTo = o.allFromTo = function(t, e, i, n, s, r, a, l) { return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, o.staggerTo(t, e, n, s, r, a, l) }, o.delayedCall = function(t, e, i, n, s) { return new o(e, 0, { delay: t, onComplete: e, onCompleteParams: i, callbackScope: n, onReverseComplete: e, onReverseCompleteParams: i, immediateRender: !1, useFrames: s, overwrite: 0 }) }, o.set = function(t, e) { return new o(t, 0, e) }, o.isTweening = function(t) { return i.getTweensOf(t, !0).length > 0 };
                var d = function(t, e) { for (var n = [], s = 0, o = t._first; o;) o instanceof i ? n[s++] = o : (e && (n[s++] = o), s = (n = n.concat(d(o, e))).length), o = o._next; return n },
                    p = o.getAllTweens = function(e) { return d(t._rootTimeline, e).concat(d(t._rootFramesTimeline, e)) };
                o.killAll = function(t, i, n, s) {
                    null == i && (i = !0), null == n && (n = !0);
                    var o, r, a, l = p(0 != s),
                        h = l.length,
                        c = i && n && s;
                    for (a = 0; h > a; a++) r = l[a], (c || r instanceof e || (o = r.target === r.vars.onComplete) && n || i && !o) && (t ? r.totalTime(r._reversed ? 0 : r.totalDuration()) : r._enabled(!1, !1))
                }, o.killChildTweensOf = function(t, e) {
                    if (null != t) {
                        var s, r, c, u, d, p = a.tweenLookup;
                        if ("string" == typeof t && (t = i.selector(t) || t), l(t) && (t = n(t)), h(t))
                            for (u = t.length; --u > -1;) o.killChildTweensOf(t[u], e);
                        else {
                            for (c in s = [], p)
                                for (r = p[c].target.parentNode; r;) r === t && (s = s.concat(p[c].tweens)), r = r.parentNode;
                            for (d = s.length, u = 0; d > u; u++) e && s[u].totalTime(s[u].totalDuration()), s[u]._enabled(!1, !1)
                        }
                    }
                };
                var f = function(t, i, n, s) { i = !1 !== i, n = !1 !== n; for (var o, r, a = p(s = !1 !== s), l = i && n && s, h = a.length; --h > -1;) r = a[h], (l || r instanceof e || (o = r.target === r.vars.onComplete) && n || i && !o) && r.paused(t) };
                return o.pauseAll = function(t, e, i) { f(!0, t, e, i) }, o.resumeAll = function(t, e, i) { f(!1, t, e, i) }, o.globalTimeScale = function(e) {
                    var n = t._rootTimeline,
                        s = i.ticker.time;
                    return arguments.length ? (e = e || r, n._startTime = s - (s - n._startTime) * n._timeScale / e, n = t._rootFramesTimeline, s = i.ticker.frame, n._startTime = s - (s - n._startTime) * n._timeScale / e, n._timeScale = t._rootTimeline._timeScale = e, e) : n._timeScale
                }, c.progress = function(t, e) { return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration() }, c.totalProgress = function(t, e) { return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration() }, c.time = function(t, e) { return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time }, c.duration = function(e) { return arguments.length ? t.prototype.duration.call(this, e) : this._duration }, c.totalDuration = function(t) { return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration) }, c.repeat = function(t) { return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat }, c.repeatDelay = function(t) { return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay }, c.yoyo = function(t) { return arguments.length ? (this._yoyo = t, this) : this._yoyo }, o
            }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
                var n = function(t) {
                        e.call(this, t), this._labels = {}, this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren, this.smoothChildTiming = !0 === this.vars.smoothChildTiming, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                        var i, n, s = this.vars;
                        for (n in s) i = s[n], l(i) && -1 !== i.join("").indexOf("{self}") && (s[n] = this._swapSelfInParams(i));
                        l(s.tweens) && this.add(s.tweens, 0, s.align, s.stagger)
                    },
                    s = 1e-10,
                    o = i._internals,
                    r = n._internals = {},
                    a = o.isSelector,
                    l = o.isArray,
                    h = o.lazyTweens,
                    c = o.lazyRender,
                    u = _gsScope._gsDefine.globals,
                    d = function(t) { var e, i = {}; for (e in t) i[e] = t[e]; return i },
                    p = function(t, e, i) {
                        var n, s, o = t.cycle;
                        for (n in o) s = o[n], t[n] = "function" == typeof s ? s(i, e[i]) : s[i % s.length];
                        delete t.cycle
                    },
                    f = r.pauseCallback = function() {},
                    m = function(t) {
                        var e, i = [],
                            n = t.length;
                        for (e = 0; e !== n; i.push(t[e++]));
                        return i
                    },
                    g = n.prototype = new e;
                return n.version = "2.0.2", g.constructor = n, g.kill()._gc = g._forcingPlayhead = g._hasPause = !1, g.to = function(t, e, n, s) { var o = n.repeat && u.TweenMax || i; return e ? this.add(new o(t, e, n), s) : this.set(t, n, s) }, g.from = function(t, e, n, s) { return this.add((n.repeat && u.TweenMax || i).from(t, e, n), s) }, g.fromTo = function(t, e, n, s, o) { var r = s.repeat && u.TweenMax || i; return e ? this.add(r.fromTo(t, e, n, s), o) : this.set(t, s, o) }, g.staggerTo = function(t, e, s, o, r, l, h, c) {
                    var u, f, g = new n({ onComplete: l, onCompleteParams: h, callbackScope: c, smoothChildTiming: this.smoothChildTiming }),
                        v = s.cycle;
                    for ("string" == typeof t && (t = i.selector(t) || t), a(t = t || []) && (t = m(t)), 0 > (o = o || 0) && ((t = m(t)).reverse(), o *= -1), f = 0; f < t.length; f++)(u = d(s)).startAt && (u.startAt = d(u.startAt), u.startAt.cycle && p(u.startAt, t, f)), v && (p(u, t, f), null != u.duration && (e = u.duration, delete u.duration)), g.to(t[f], e, u, f * o);
                    return this.add(g, r)
                }, g.staggerFrom = function(t, e, i, n, s, o, r, a) { return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, n, s, o, r, a) }, g.staggerFromTo = function(t, e, i, n, s, o, r, a, l) { return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, n, s, o, r, a, l) }, g.call = function(t, e, n, s) { return this.add(i.delayedCall(0, t, e, n), s) }, g.set = function(t, e, n) { return n = this._parseTimeOrLabel(n, 0, !0), null == e.immediateRender && (e.immediateRender = n === this._time && !this._paused), this.add(new i(t, 0, e), n) }, n.exportRoot = function(t, e) {
                    null == (t = t || {}).smoothChildTiming && (t.smoothChildTiming = !0);
                    var s, o, r, a, l = new n(t),
                        h = l._timeline;
                    for (null == e && (e = !0), h._remove(l, !0), l._startTime = 0, l._rawPrevTime = l._time = l._totalTime = h._time, r = h._first; r;) a = r._next, e && r instanceof i && r.target === r.vars.onComplete || (0 > (o = r._startTime - r._delay) && (s = 1), l.add(r, o)), r = a;
                    return h.add(l, 0), s && l.totalDuration(), l
                }, g.add = function(s, o, r, a) {
                    var h, c, u, d, p, f;
                    if ("number" != typeof o && (o = this._parseTimeOrLabel(o, 0, !0, s)), !(s instanceof t)) {
                        if (s instanceof Array || s && s.push && l(s)) { for (r = r || "normal", a = a || 0, h = o, c = s.length, u = 0; c > u; u++) l(d = s[u]) && (d = new n({ tweens: d })), this.add(d, h), "string" != typeof d && "function" != typeof d && ("sequence" === r ? h = d._startTime + d.totalDuration() / d._timeScale : "start" === r && (d._startTime -= d.delay())), h += a; return this._uncache(!0) }
                        if ("string" == typeof s) return this.addLabel(s, o);
                        if ("function" != typeof s) throw "Cannot add " + s + " into the timeline; it is not a tween, timeline, function, or string.";
                        s = i.delayedCall(0, s)
                    }
                    if (e.prototype.add.call(this, s, o), s._time && (h = Math.max(0, Math.min(s.totalDuration(), (this.rawTime() - s._startTime) * s._timeScale)), Math.abs(h - s._totalTime) > 1e-5 && s.render(h, !1, !1)), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                        for (f = (p = this).rawTime() > s._startTime; p._timeline;) f && p._timeline.smoothChildTiming ? p.totalTime(p._totalTime, !0) : p._gc && p._enabled(!0, !1), p = p._timeline;
                    return this
                }, g.remove = function(e) { if (e instanceof t) { this._remove(e, !1); var i = e._timeline = e.vars.useFrames ? t._rootFramesTimeline : t._rootTimeline; return e._startTime = (e._paused ? e._pauseTime : i._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale, this } if (e instanceof Array || e && e.push && l(e)) { for (var n = e.length; --n > -1;) this.remove(e[n]); return this } return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e) }, g._remove = function(t, i) { return e.prototype._remove.call(this, t, i), this._last ? this._time > this.duration() && (this._time = this._duration, this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this }, g.append = function(t, e) { return this.add(t, this._parseTimeOrLabel(null, e, !0, t)) }, g.insert = g.insertMultiple = function(t, e, i, n) { return this.add(t, e || 0, i, n) }, g.appendMultiple = function(t, e, i, n) { return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, n) }, g.addLabel = function(t, e) { return this._labels[t] = this._parseTimeOrLabel(e), this }, g.addPause = function(t, e, n, s) { var o = i.delayedCall(0, f, n, s || this); return o.vars.onComplete = o.vars.onReverseComplete = e, o.data = "isPause", this._hasPause = !0, this.add(o, t) }, g.removeLabel = function(t) { return delete this._labels[t], this }, g.getLabelTime = function(t) { return null != this._labels[t] ? this._labels[t] : -1 }, g._parseTimeOrLabel = function(e, i, n, s) {
                    var o, r;
                    if (s instanceof t && s.timeline === this) this.remove(s);
                    else if (s && (s instanceof Array || s.push && l(s)))
                        for (r = s.length; --r > -1;) s[r] instanceof t && s[r].timeline === this && this.remove(s[r]);
                    if (o = "number" != typeof e || i ? this.duration() > 99999999999 ? this.recent().endTime(!1) : this._duration : 0, "string" == typeof i) return this._parseTimeOrLabel(i, n && "number" == typeof e && null == this._labels[i] ? e - o : 0, n);
                    if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = o);
                    else {
                        if (-1 === (r = e.indexOf("="))) return null == this._labels[e] ? n ? this._labels[e] = o + i : i : this._labels[e] + i;
                        i = parseInt(e.charAt(r - 1) + "1", 10) * Number(e.substr(r + 1)), e = r > 1 ? this._parseTimeOrLabel(e.substr(0, r - 1), 0, n) : o
                    }
                    return Number(e) + i
                }, g.seek = function(t, e) { return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), !1 !== e) }, g.stop = function() { return this.paused(!0) }, g.gotoAndPlay = function(t, e) { return this.play(t, e) }, g.gotoAndStop = function(t, e) { return this.pause(t, e) }, g.render = function(t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var n, o, r, a, l, u, d, p = this._time,
                        f = this._dirty ? this.totalDuration() : this._totalDuration,
                        m = this._startTime,
                        g = this._timeScale,
                        v = this._paused;
                    if (p !== this._time && (t += this._time - p), t >= f - 1e-7 && t >= 0) this._totalTime = this._time = f, this._reversed || this._hasPausedChild() || (o = !0, a = "onComplete", l = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= t && t >= -1e-7 || this._rawPrevTime < 0 || this._rawPrevTime === s) && this._rawPrevTime !== t && this._first && (l = !0, this._rawPrevTime > s && (a = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : s, t = f + 1e-4;
                    else if (1e-7 > t)
                        if (this._totalTime = this._time = 0, (0 !== p || 0 === this._duration && this._rawPrevTime !== s && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (a = "onReverseComplete", o = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (l = o = !0, a = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (l = !0), this._rawPrevTime = t;
                        else {
                            if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : s, 0 === t && o)
                                for (n = this._first; n && 0 === n._startTime;) n._duration || (o = !1), n = n._next;
                            t = 0, this._initted || (l = !0)
                        }
                    else {
                        if (this._hasPause && !this._forcingPlayhead && !e) {
                            if (t >= p)
                                for (n = this._first; n && n._startTime <= t && !u;) n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (u = n), n = n._next;
                            else
                                for (n = this._last; n && n._startTime >= t && !u;) n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (u = n), n = n._prev;
                            u && (this._time = t = u._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                        }
                        this._totalTime = this._time = this._rawPrevTime = t
                    }
                    if (this._time !== p && this._first || i || l || u) {
                        if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== p && t > 0 && (this._active = !0), 0 === p && this.vars.onStart && (0 === this._time && this._duration || e || this._callback("onStart")), (d = this._time) >= p)
                            for (n = this._first; n && (r = n._next, d === this._time && (!this._paused || v));)(n._active || n._startTime <= d && !n._paused && !n._gc) && (u === n && this.pause(), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = r;
                        else
                            for (n = this._last; n && (r = n._prev, d === this._time && (!this._paused || v));) {
                                if (n._active || n._startTime <= p && !n._paused && !n._gc) {
                                    if (u === n) {
                                        for (u = n._prev; u && u.endTime() > this._time;) u.render(u._reversed ? u.totalDuration() - (t - u._startTime) * u._timeScale : (t - u._startTime) * u._timeScale, e, i), u = u._prev;
                                        u = null, this.pause()
                                    }
                                    n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)
                                }
                                n = r
                            }
                        this._onUpdate && (e || (h.length && c(), this._callback("onUpdate"))), a && (this._gc || (m === this._startTime || g !== this._timeScale) && (0 === this._time || f >= this.totalDuration()) && (o && (h.length && c(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[a] && this._callback(a)))
                    }
                }, g._hasPausedChild = function() {
                    for (var t = this._first; t;) {
                        if (t._paused || t instanceof n && t._hasPausedChild()) return !0;
                        t = t._next
                    }
                    return !1
                }, g.getChildren = function(t, e, n, s) { s = s || -9999999999; for (var o = [], r = this._first, a = 0; r;) r._startTime < s || (r instanceof i ? !1 !== e && (o[a++] = r) : (!1 !== n && (o[a++] = r), !1 !== t && (a = (o = o.concat(r.getChildren(!0, e, n))).length))), r = r._next; return o }, g.getTweensOf = function(t, e) {
                    var n, s, o = this._gc,
                        r = [],
                        a = 0;
                    for (o && this._enabled(!0, !0), s = (n = i.getTweensOf(t)).length; --s > -1;)(n[s].timeline === this || e && this._contains(n[s])) && (r[a++] = n[s]);
                    return o && this._enabled(!1, !0), r
                }, g.recent = function() { return this._recent }, g._contains = function(t) {
                    for (var e = t.timeline; e;) {
                        if (e === this) return !0;
                        e = e.timeline
                    }
                    return !1
                }, g.shiftChildren = function(t, e, i) {
                    i = i || 0;
                    for (var n, s = this._first, o = this._labels; s;) s._startTime >= i && (s._startTime += t), s = s._next;
                    if (e)
                        for (n in o) o[n] >= i && (o[n] += t);
                    return this._uncache(!0)
                }, g._kill = function(t, e) { if (!t && !e) return this._enabled(!1, !1); for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), n = i.length, s = !1; --n > -1;) i[n]._kill(t, e) && (s = !0); return s }, g.clear = function(t) {
                    var e = this.getChildren(!1, !0, !0),
                        i = e.length;
                    for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
                    return !1 !== t && (this._labels = {}), this._uncache(!0)
                }, g.invalidate = function() { for (var e = this._first; e;) e.invalidate(), e = e._next; return t.prototype.invalidate.call(this) }, g._enabled = function(t, i) {
                    if (t === this._gc)
                        for (var n = this._first; n;) n._enabled(t, !0), n = n._next;
                    return e.prototype._enabled.call(this, t, i)
                }, g.totalTime = function() { this._forcingPlayhead = !0; var e = t.prototype.totalTime.apply(this, arguments); return this._forcingPlayhead = !1, e }, g.duration = function(t) { return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration) }, g.totalDuration = function(t) {
                    if (!arguments.length) {
                        if (this._dirty) {
                            for (var e, i, n = 0, s = this._last, o = 999999999999; s;) e = s._prev, s._dirty && s.totalDuration(), s._startTime > o && this._sortChildren && !s._paused && !this._calculatingDuration ? (this._calculatingDuration = 1, this.add(s, s._startTime - s._delay), this._calculatingDuration = 0) : o = s._startTime, s._startTime < 0 && !s._paused && (n -= s._startTime, this._timeline.smoothChildTiming && (this._startTime += s._startTime / this._timeScale, this._time -= s._startTime, this._totalTime -= s._startTime, this._rawPrevTime -= s._startTime), this.shiftChildren(-s._startTime, !1, -9999999999), o = 0), (i = s._startTime + s._totalDuration / s._timeScale) > n && (n = i), s = e;
                            this._duration = this._totalDuration = n, this._dirty = !1
                        }
                        return this._totalDuration
                    }
                    return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) : this
                }, g.paused = function(e) {
                    if (!e)
                        for (var i = this._first, n = this._time; i;) i._startTime === n && "isPause" === i.data && (i._rawPrevTime = 0), i = i._next;
                    return t.prototype.paused.apply(this, arguments)
                }, g.usesFrames = function() { for (var e = this._timeline; e._timeline;) e = e._timeline; return e === t._rootFramesTimeline }, g.rawTime = function(t) { return t && (this._paused || this._repeat && this.time() > 0 && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(t) - this._startTime) * this._timeScale }, n
            }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(t, e, i) {
                var n = function(e) { t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = !0 === this.vars.yoyo, this._dirty = !0 },
                    s = 1e-10,
                    o = e._internals,
                    r = o.lazyTweens,
                    a = o.lazyRender,
                    l = _gsScope._gsDefine.globals,
                    h = new i(null, null, 1, 0),
                    c = n.prototype = new t;
                return c.constructor = n, c.kill()._gc = !1, n.version = "2.0.2", c.invalidate = function() { return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this) }, c.addCallback = function(t, i, n, s) { return this.add(e.delayedCall(0, t, n, s), i) }, c.removeCallback = function(t, e) {
                    if (t)
                        if (null == e) this._kill(null, t);
                        else
                            for (var i = this.getTweensOf(t, !1), n = i.length, s = this._parseTimeOrLabel(e); --n > -1;) i[n]._startTime === s && i[n]._enabled(!1, !1);
                    return this
                }, c.removePause = function(e) { return this.removeCallback(t._internals.pauseCallback, e) }, c.tweenTo = function(t, i) {
                    i = i || {};
                    var n, s, o, r = { ease: h, useFrames: this.usesFrames(), immediateRender: !1, lazy: !1 },
                        a = i.repeat && l.TweenMax || e;
                    for (s in i) r[s] = i[s];
                    return r.time = this._parseTimeOrLabel(t), n = Math.abs(Number(r.time) - this._time) / this._timeScale || .001, o = new a(this, n, r), r.onStart = function() { o.target.paused(!0), o.vars.time === o.target.time() || n !== o.duration() || o.isFromTo || o.duration(Math.abs(o.vars.time - o.target.time()) / o.target._timeScale).render(o.time(), !0, !0), i.onStart && i.onStart.apply(i.onStartScope || i.callbackScope || o, i.onStartParams || []) }, o
                }, c.tweenFromTo = function(t, e, i) { i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = { onComplete: this.seek, onCompleteParams: [t], callbackScope: this }, i.immediateRender = !1 !== i.immediateRender; var n = this.tweenTo(e, i); return n.isFromTo = 1, n.duration(Math.abs(n.vars.time - t) / this._timeScale || .001) }, c.render = function(t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var n, o, l, h, c, u, d, p, f = this._time,
                        m = this._dirty ? this.totalDuration() : this._totalDuration,
                        g = this._duration,
                        v = this._totalTime,
                        _ = this._startTime,
                        y = this._timeScale,
                        b = this._rawPrevTime,
                        w = this._paused,
                        x = this._cycle;
                    if (f !== this._time && (t += this._time - f), t >= m - 1e-7 && t >= 0) this._locked || (this._totalTime = m, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (o = !0, h = "onComplete", c = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= t && t >= -1e-7 || 0 > b || b === s) && b !== t && this._first && (c = !0, b > s && (h = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : s, this._yoyo && 0 != (1 & this._cycle) ? this._time = t = 0 : (this._time = g, t = g + 1e-4);
                    else if (1e-7 > t)
                        if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== f || 0 === g && b !== s && (b > 0 || 0 > t && b >= 0) && !this._locked) && (h = "onReverseComplete", o = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (c = o = !0, h = "onReverseComplete") : b >= 0 && this._first && (c = !0), this._rawPrevTime = t;
                        else {
                            if (this._rawPrevTime = g || !e || t || this._rawPrevTime === t ? t : s, 0 === t && o)
                                for (n = this._first; n && 0 === n._startTime;) n._duration || (o = !1), n = n._next;
                            t = 0, this._initted || (c = !0)
                        }
                    else if (0 === g && 0 > b && (c = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (u = g + this._repeatDelay, this._cycle = this._totalTime / u >> 0, 0 !== this._cycle && this._cycle === this._totalTime / u && t >= v && this._cycle--, this._time = this._totalTime - this._cycle * u, this._yoyo && 0 != (1 & this._cycle) && (this._time = g - this._time), this._time > g ? (this._time = g, t = g + 1e-4) : this._time < 0 ? this._time = t = 0 : t = this._time)), this._hasPause && !this._forcingPlayhead && !e) {
                        if ((t = this._time) >= f || this._repeat && x !== this._cycle)
                            for (n = this._first; n && n._startTime <= t && !d;) n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (d = n), n = n._next;
                        else
                            for (n = this._last; n && n._startTime >= t && !d;) n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (d = n), n = n._prev;
                        d && d._startTime < g && (this._time = t = d._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                    }
                    if (this._cycle !== x && !this._locked) {
                        var T = this._yoyo && 0 != (1 & x),
                            k = T === (this._yoyo && 0 != (1 & this._cycle)),
                            C = this._totalTime,
                            S = this._cycle,
                            P = this._rawPrevTime,
                            D = this._time;
                        if (this._totalTime = x * g, this._cycle < x ? T = !T : this._totalTime += g, this._time = f, this._rawPrevTime = 0 === g ? b - 1e-4 : b, this._cycle = x, this._locked = !0, f = T ? 0 : g, this.render(f, e, 0 === g), e || this._gc || this.vars.onRepeat && (this._cycle = S, this._locked = !1, this._callback("onRepeat")), f !== this._time) return;
                        if (k && (this._cycle = x, this._locked = !0, f = T ? g + 1e-4 : -1e-4, this.render(f, !0, !1)), this._locked = !1, this._paused && !w) return;
                        this._time = D, this._totalTime = C, this._cycle = S, this._rawPrevTime = P
                    }
                    if (this._time !== f && this._first || i || c || d) {
                        if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== v && t > 0 && (this._active = !0), 0 === v && this.vars.onStart && (0 === this._totalTime && this._totalDuration || e || this._callback("onStart")), (p = this._time) >= f)
                            for (n = this._first; n && (l = n._next, p === this._time && (!this._paused || w));)(n._active || n._startTime <= this._time && !n._paused && !n._gc) && (d === n && this.pause(), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = l;
                        else
                            for (n = this._last; n && (l = n._prev, p === this._time && (!this._paused || w));) {
                                if (n._active || n._startTime <= f && !n._paused && !n._gc) {
                                    if (d === n) {
                                        for (d = n._prev; d && d.endTime() > this._time;) d.render(d._reversed ? d.totalDuration() - (t - d._startTime) * d._timeScale : (t - d._startTime) * d._timeScale, e, i), d = d._prev;
                                        d = null, this.pause()
                                    }
                                    n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)
                                }
                                n = l
                            }
                        this._onUpdate && (e || (r.length && a(), this._callback("onUpdate"))), h && (this._locked || this._gc || (_ === this._startTime || y !== this._timeScale) && (0 === this._time || m >= this.totalDuration()) && (o && (r.length && a(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[h] && this._callback(h)))
                    } else v !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate"))
                }, c.getActive = function(t, e, i) {
                    null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
                    var n, s, o = [],
                        r = this.getChildren(t, e, i),
                        a = 0,
                        l = r.length;
                    for (n = 0; l > n; n++)(s = r[n]).isActive() && (o[a++] = s);
                    return o
                }, c.getLabelAfter = function(t) {
                    t || 0 !== t && (t = this._time);
                    var e, i = this.getLabelsArray(),
                        n = i.length;
                    for (e = 0; n > e; e++)
                        if (i[e].time > t) return i[e].name;
                    return null
                }, c.getLabelBefore = function(t) {
                    null == t && (t = this._time);
                    for (var e = this.getLabelsArray(), i = e.length; --i > -1;)
                        if (e[i].time < t) return e[i].name;
                    return null
                }, c.getLabelsArray = function() {
                    var t, e = [],
                        i = 0;
                    for (t in this._labels) e[i++] = { time: this._labels[t], name: t };
                    return e.sort(function(t, e) { return t.time - e.time }), e
                }, c.invalidate = function() { return this._locked = !1, t.prototype.invalidate.call(this) }, c.progress = function(t, e) { return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration() || 0 }, c.totalProgress = function(t, e) { return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration() || 0 }, c.totalDuration = function(e) { return arguments.length ? -1 !== this._repeat && e ? this.timeScale(this.totalDuration() / e) : this : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration) }, c.time = function(t, e) { return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time }, c.repeat = function(t) { return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat }, c.repeatDelay = function(t) { return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay }, c.yoyo = function(t) { return arguments.length ? (this._yoyo = t, this) : this._yoyo }, c.currentLabel = function(t) { return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8) }, n
            }, !0), t = 180 / Math.PI, e = [], i = [], n = [], s = {}, o = _gsScope._gsDefine.globals, r = function(t, e, i, n) { i === n && (i = n - (n - e) / 1e6), t === e && (e = t + (i - t) / 1e6), this.a = t, this.b = e, this.c = i, this.d = n, this.da = n - t, this.ca = i - t, this.ba = e - t }, a = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,", l = function(t, e, i, n) {
                var s = { a: t },
                    o = {},
                    r = {},
                    a = { c: n },
                    l = (t + e) / 2,
                    h = (e + i) / 2,
                    c = (i + n) / 2,
                    u = (l + h) / 2,
                    d = (h + c) / 2,
                    p = (d - u) / 8;
                return s.b = l + (t - l) / 4, o.b = u + p, s.c = o.a = (s.b + o.b) / 2, o.c = r.a = (u + d) / 2, r.b = d - p, a.b = c + (n - c) / 4, r.c = a.a = (r.b + a.b) / 2, [s, o, r, a]
            }, h = function(t, s, o, r, a) {
                var h, c, u, d, p, f, m, g, v, _, y, b, w, x = t.length - 1,
                    T = 0,
                    k = t[0].a;
                for (h = 0; x > h; h++) c = (p = t[T]).a, u = p.d, d = t[T + 1].d, a ? (y = e[h], w = ((b = i[h]) + y) * s * .25 / (r ? .5 : n[h] || .5), g = u - ((f = u - (u - c) * (r ? .5 * s : 0 !== y ? w / y : 0)) + (((m = u + (d - u) * (r ? .5 * s : 0 !== b ? w / b : 0)) - f) * (3 * y / (y + b) + .5) / 4 || 0))) : g = u - ((f = u - (u - c) * s * .5) + (m = u + (d - u) * s * .5)) / 2, f += g, m += g, p.c = v = f, p.b = 0 !== h ? k : k = p.a + .6 * (p.c - p.a), p.da = u - c, p.ca = v - c, p.ba = k - c, o ? (_ = l(c, k, v, u), t.splice(T, 1, _[0], _[1], _[2], _[3]), T += 4) : T++, k = m;
                (p = t[T]).b = k, p.c = k + .4 * (p.d - k), p.da = p.d - p.a, p.ca = p.c - p.a, p.ba = k - p.a, o && (_ = l(p.a, k, p.c, p.d), t.splice(T, 1, _[0], _[1], _[2], _[3]))
            }, c = function(t, n, s, o) {
                var a, l, h, c, u, d, p = [];
                if (o)
                    for (l = (t = [o].concat(t)).length; --l > -1;) "string" == typeof(d = t[l][n]) && "=" === d.charAt(1) && (t[l][n] = o[n] + Number(d.charAt(0) + d.substr(2)));
                if (0 > (a = t.length - 2)) return p[0] = new r(t[0][n], 0, 0, t[0][n]), p;
                for (l = 0; a > l; l++) h = t[l][n], c = t[l + 1][n], p[l] = new r(h, 0, 0, c), s && (u = t[l + 2][n], e[l] = (e[l] || 0) + (c - h) * (c - h), i[l] = (i[l] || 0) + (u - c) * (u - c));
                return p[l] = new r(t[l][n], 0, 0, t[l + 1][n]), p
            }, u = function(t, o, r, l, u, d) {
                var p, f, m, g, v, _, y, b, w = {},
                    x = [],
                    T = d || t[0];
                for (f in u = "string" == typeof u ? "," + u + "," : a, null == o && (o = 1), t[0]) x.push(f);
                if (t.length > 1) {
                    for (b = t[t.length - 1], y = !0, p = x.length; --p > -1;)
                        if (f = x[p], Math.abs(T[f] - b[f]) > .05) { y = !1; break }
                    y && (t = t.concat(), d && t.unshift(d), t.push(t[1]), d = t[t.length - 3])
                }
                for (e.length = i.length = n.length = 0, p = x.length; --p > -1;) f = x[p], s[f] = -1 !== u.indexOf("," + f + ","), w[f] = c(t, f, s[f], d);
                for (p = e.length; --p > -1;) e[p] = Math.sqrt(e[p]), i[p] = Math.sqrt(i[p]);
                if (!l) {
                    for (p = x.length; --p > -1;)
                        if (s[f])
                            for (_ = (m = w[x[p]]).length - 1, g = 0; _ > g; g++) v = m[g + 1].da / i[g] + m[g].da / e[g] || 0, n[g] = (n[g] || 0) + v * v;
                    for (p = n.length; --p > -1;) n[p] = Math.sqrt(n[p])
                }
                for (p = x.length, g = r ? 4 : 1; --p > -1;) m = w[f = x[p]], h(m, o, r, l, s[f]), y && (m.splice(0, g), m.splice(m.length - g, g));
                return w
            }, d = function(t, e, i) {
                var n, s, o, a, l, h, c, u, d, p, f, m = {},
                    g = "cubic" === (e = e || "soft") ? 3 : 2,
                    v = "soft" === e,
                    _ = [];
                if (v && i && (t = [i].concat(t)), null == t || t.length < g + 1) throw "invalid Bezier data";
                for (d in t[0]) _.push(d);
                for (h = _.length; --h > -1;) {
                    for (m[d = _[h]] = l = [], p = 0, u = t.length, c = 0; u > c; c++) n = null == i ? t[c][d] : "string" == typeof(f = t[c][d]) && "=" === f.charAt(1) ? i[d] + Number(f.charAt(0) + f.substr(2)) : Number(f), v && c > 1 && u - 1 > c && (l[p++] = (n + l[p - 2]) / 2), l[p++] = n;
                    for (u = p - g + 1, p = 0, c = 0; u > c; c += g) n = l[c], s = l[c + 1], o = l[c + 2],
                        a = 2 === g ? 0 : l[c + 3], l[p++] = f = 3 === g ? new r(n, s, o, a) : new r(n, (2 * s + n) / 3, (2 * s + o) / 3, o);
                    l.length = p
                }
                return m
            }, p = function(t, e, i) {
                for (var n, s, o, r, a, l, h, c, u, d, p, f = 1 / i, m = t.length; --m > -1;)
                    for (o = (d = t[m]).a, r = d.d - o, a = d.c - o, l = d.b - o, n = s = 0, c = 1; i >= c; c++) n = s - (s = ((h = f * c) * h * r + 3 * (u = 1 - h) * (h * a + u * l)) * h), e[p = m * i + c - 1] = (e[p] || 0) + n * n
            }, f = function(t, e) {
                var i, n, s, o, r = [],
                    a = [],
                    l = 0,
                    h = 0,
                    c = (e = e >> 0 || 6) - 1,
                    u = [],
                    d = [];
                for (i in t) p(t[i], r, e);
                for (s = r.length, n = 0; s > n; n++) l += Math.sqrt(r[n]), d[o = n % e] = l, o === c && (h += l, u[o = n / e >> 0] = d, a[o] = h, l = 0, d = []);
                return { length: h, lengths: a, segments: u }
            }, m = _gsScope._gsDefine.plugin({
                propName: "bezier",
                priority: -1,
                version: "1.3.8",
                API: 2,
                global: !0,
                init: function(t, e, i) {
                    this._target = t, e instanceof Array && (e = { values: e }), this._func = {}, this._mod = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                    var n, s, o, r, a, l = e.values || [],
                        h = {},
                        c = l[0],
                        p = e.autoRotate || i.vars.orientToBezier;
                    for (n in this._autoRotate = p ? p instanceof Array ? p : [
                            ["x", "y", "rotation", !0 === p ? 0 : Number(p) || 0]
                        ] : null, c) this._props.push(n);
                    for (o = this._props.length; --o > -1;) n = this._props[o], this._overwriteProps.push(n), s = this._func[n] = "function" == typeof t[n], h[n] = s ? t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(t[n]), a || h[n] !== l[0][n] && (a = h);
                    if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? u(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, a) : d(l, e.type, h), this._segCount = this._beziers[n].length, this._timeRes) {
                        var m = f(this._beziers, this._timeRes);
                        this._length = m.length, this._lengths = m.lengths, this._segments = m.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                    }
                    if (p = this._autoRotate)
                        for (this._initialRotations = [], p[0] instanceof Array || (this._autoRotate = p = [p]), o = p.length; --o > -1;) {
                            for (r = 0; 3 > r; r++) n = p[o][r], this._func[n] = "function" == typeof t[n] && t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)];
                            n = p[o][2], this._initialRotations[o] = (this._func[n] ? this._func[n].call(this._target) : this._target[n]) || 0, this._overwriteProps.push(n)
                        }
                    return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
                },
                set: function(e) {
                    var i, n, s, o, r, a, l, h, c, u, d = this._segCount,
                        p = this._func,
                        f = this._target,
                        m = e !== this._startRatio;
                    if (this._timeRes) {
                        if (c = this._lengths, u = this._curSeg, e *= this._length, s = this._li, e > this._l2 && d - 1 > s) {
                            for (h = d - 1; h > s && (this._l2 = c[++s]) <= e;);
                            this._l1 = c[s - 1], this._li = s, this._curSeg = u = this._segments[s], this._s2 = u[this._s1 = this._si = 0]
                        } else if (e < this._l1 && s > 0) {
                            for (; s > 0 && (this._l1 = c[--s]) >= e;);
                            0 === s && e < this._l1 ? this._l1 = 0 : s++, this._l2 = c[s], this._li = s, this._curSeg = u = this._segments[s], this._s1 = u[(this._si = u.length - 1) - 1] || 0, this._s2 = u[this._si]
                        }
                        if (i = s, e -= this._l1, s = this._si, e > this._s2 && s < u.length - 1) {
                            for (h = u.length - 1; h > s && (this._s2 = u[++s]) <= e;);
                            this._s1 = u[s - 1], this._si = s
                        } else if (e < this._s1 && s > 0) {
                            for (; s > 0 && (this._s1 = u[--s]) >= e;);
                            0 === s && e < this._s1 ? this._s1 = 0 : s++, this._s2 = u[s], this._si = s
                        }
                        a = (s + (e - this._s1) / (this._s2 - this._s1)) * this._prec || 0
                    } else a = (e - (i = 0 > e ? 0 : e >= 1 ? d - 1 : d * e >> 0) * (1 / d)) * d;
                    for (n = 1 - a, s = this._props.length; --s > -1;) o = this._props[s], l = (a * a * (r = this._beziers[o][i]).da + 3 * n * (a * r.ca + n * r.ba)) * a + r.a, this._mod[o] && (l = this._mod[o](l, f)), p[o] ? f[o](l) : f[o] = l;
                    if (this._autoRotate) { var g, v, _, y, b, w, x, T = this._autoRotate; for (s = T.length; --s > -1;) o = T[s][2], w = T[s][3] || 0, x = !0 === T[s][4] ? 1 : t, r = this._beziers[T[s][0]], g = this._beziers[T[s][1]], r && g && (r = r[i], g = g[i], v = r.a + (r.b - r.a) * a, v += ((y = r.b + (r.c - r.b) * a) - v) * a, y += (r.c + (r.d - r.c) * a - y) * a, _ = g.a + (g.b - g.a) * a, _ += ((b = g.b + (g.c - g.b) * a) - _) * a, b += (g.c + (g.d - g.c) * a - b) * a, l = m ? Math.atan2(b - _, y - v) * x + w : this._initialRotations[s], this._mod[o] && (l = this._mod[o](l, f)), p[o] ? f[o](l) : f[o] = l) }
                }
            }), g = m.prototype, m.bezierThrough = u, m.cubicToQuadratic = l, m._autoCSS = !0, m.quadraticToCubic = function(t, e, i) { return new r(t, (2 * e + t) / 3, (2 * e + i) / 3, i) }, m._cssRegister = function() {
                var t = o.CSSPlugin;
                if (t) {
                    var e = t._internals,
                        i = e._parseToProxy,
                        n = e._setPluginRatio,
                        s = e.CSSPropTween;
                    e._registerComplexSpecialProp("bezier", {
                        parser: function(t, e, o, r, a, l) {
                            e instanceof Array && (e = { values: e }), l = new m;
                            var h, c, u, d = e.values,
                                p = d.length - 1,
                                f = [],
                                g = {};
                            if (0 > p) return a;
                            for (h = 0; p >= h; h++) u = i(t, d[h], r, a, l, p !== h), f[h] = u.end;
                            for (c in e) g[c] = e[c];
                            return g.values = f, (a = new s(t, "bezier", 0, 0, u.pt, 2)).data = u, a.plugin = l, a.setRatio = n, 0 === g.autoRotate && (g.autoRotate = !0), !g.autoRotate || g.autoRotate instanceof Array || (h = !0 === g.autoRotate ? 0 : Number(g.autoRotate), g.autoRotate = null != u.end.left ? [
                                ["left", "top", "rotation", h, !1]
                            ] : null != u.end.x && [
                                ["x", "y", "rotation", h, !1]
                            ]), g.autoRotate && (r._transform || r._enableTransforms(!1), u.autoRotate = r._target._gsTransform, u.proxy.rotation = u.autoRotate.rotation || 0, r._overwriteProps.push("rotation")), l._onInitTween(u.proxy, g, r._tween), a
                        }
                    })
                }
            }, g._mod = function(t) { for (var e, i = this._overwriteProps, n = i.length; --n > -1;)(e = t[i[n]]) && "function" == typeof e && (this._mod[i[n]] = e) }, g._kill = function(t) {
                var e, i, n = this._props;
                for (e in this._beziers)
                    if (e in t)
                        for (delete this._beziers[e], delete this._func[e], i = n.length; --i > -1;) n[i] === e && n.splice(i, 1);
                if (n = this._autoRotate)
                    for (i = n.length; --i > -1;) t[n[i][2]] && n.splice(i, 1);
                return this._super._kill.call(this, t)
            }, _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
                var i, n, s, o, r = function() { t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = r.prototype.setRatio },
                    a = _gsScope._gsDefine.globals,
                    l = {},
                    h = r.prototype = new t("css");
                h.constructor = r, r.version = "2.0.2", r.API = 2, r.defaultTransformPerspective = 0, r.defaultSkewType = "compensated", r.defaultSmoothOrigin = !0, h = "px", r.suffixMap = { top: h, right: h, bottom: h, left: h, width: h, height: h, fontSize: h, padding: h, margin: h, perspective: h, lineHeight: "" };
                var c, u, d, p, f, m, g, v, _ = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
                    y = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                    b = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                    w = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                    x = /(?:\d|\-|\+|=|#|\.)*/g,
                    T = /opacity *= *([^)]*)/i,
                    k = /opacity:([^;]*)/i,
                    C = /alpha\(opacity *=.+?\)/i,
                    S = /^(rgb|hsl)/,
                    P = /([A-Z])/g,
                    D = /-([a-z])/gi,
                    A = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                    M = function(t, e) { return e.toUpperCase() },
                    I = /(?:Left|Right|Width)/i,
                    O = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                    E = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                    $ = /,(?=[^\)]*(?:\(|$))/gi,
                    N = /[\s,\(]/i,
                    z = Math.PI / 180,
                    H = 180 / Math.PI,
                    L = {},
                    R = { style: {} },
                    F = _gsScope.document || { createElement: function() { return R } },
                    W = function(t, e) { return F.createElementNS ? F.createElementNS(e || "http://www.w3.org/1999/xhtml", t) : F.createElement(t) },
                    j = W("div"),
                    B = W("img"),
                    q = r._internals = { _specialProps: l },
                    Y = (_gsScope.navigator || {}).userAgent || "",
                    X = function() {
                        var t = Y.indexOf("Android"),
                            e = W("a");
                        return d = -1 !== Y.indexOf("Safari") && -1 === Y.indexOf("Chrome") && (-1 === t || parseFloat(Y.substr(t + 8, 2)) > 3), f = d && parseFloat(Y.substr(Y.indexOf("Version/") + 8, 2)) < 6, p = -1 !== Y.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(Y) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(Y)) && (m = parseFloat(RegExp.$1)), !!e && (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity))
                    }(),
                    U = function(t) { return T.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1 },
                    V = function(t) { _gsScope.console && console.log(t) },
                    K = "",
                    G = "",
                    Q = function(t, e) { var i, n, s = (e = e || j).style; if (void 0 !== s[t]) return t; for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], n = 5; --n > -1 && void 0 === s[i[n] + t];); return n >= 0 ? (G = 3 === n ? "ms" : i[n], K = "-" + G.toLowerCase() + "-", G + t) : null },
                    Z = ("undefined" != typeof window ? window : F.defaultView || { getComputedStyle: function() {} }).getComputedStyle,
                    J = r.getStyle = function(t, e, i, n, s) { var o; return X || "opacity" !== e ? (!n && t.style[e] ? o = t.style[e] : (i = i || Z(t)) ? o = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(P, "-$1").toLowerCase()) : t.currentStyle && (o = t.currentStyle[e]), null == s || o && "none" !== o && "auto" !== o && "auto auto" !== o ? o : s) : U(t) },
                    tt = q.convertToPixels = function(t, i, n, s, o) {
                        if ("px" === s || !s && "lineHeight" !== i) return n;
                        if ("auto" === s || !n) return 0;
                        var a, l, h, c = I.test(i),
                            u = t,
                            d = j.style,
                            p = 0 > n,
                            f = 1 === n;
                        if (p && (n = -n), f && (n *= 100), "lineHeight" !== i || s)
                            if ("%" === s && -1 !== i.indexOf("border")) a = n / 100 * (c ? t.clientWidth : t.clientHeight);
                            else {
                                if (d.cssText = "border:0 solid red;position:" + J(t, "position") + ";line-height:0;", "%" !== s && u.appendChild && "v" !== s.charAt(0) && "rem" !== s) d[c ? "borderLeftWidth" : "borderTopWidth"] = n + s;
                                else {
                                    if (u = t.parentNode || F.body, -1 !== J(u, "display").indexOf("flex") && (d.position = "absolute"), l = u._gsCache, h = e.ticker.frame, l && c && l.time === h) return l.width * n / 100;
                                    d[c ? "width" : "height"] = n + s
                                }
                                u.appendChild(j), a = parseFloat(j[c ? "offsetWidth" : "offsetHeight"]), u.removeChild(j), c && "%" === s && !1 !== r.cacheWidths && ((l = u._gsCache = u._gsCache || {}).time = h, l.width = a / n * 100), 0 !== a || o || (a = tt(t, i, n, s, !0))
                            }
                        else l = Z(t).lineHeight, t.style.lineHeight = n, a = parseFloat(Z(t).lineHeight), t.style.lineHeight = l;
                        return f && (a /= 100), p ? -a : a
                    },
                    et = q.calculateOffset = function(t, e, i) {
                        if ("absolute" !== J(t, "position", i)) return 0;
                        var n = "left" === e ? "Left" : "Top",
                            s = J(t, "margin" + n, i);
                        return t["offset" + n] - (tt(t, e, parseFloat(s), s.replace(x, "")) || 0)
                    },
                    it = function(t, e) {
                        var i, n, s, o = {};
                        if (e = e || Z(t, null))
                            if (i = e.length)
                                for (; --i > -1;)(-1 === (s = e[i]).indexOf("-transform") || At === s) && (o[s.replace(D, M)] = e.getPropertyValue(s));
                            else
                                for (i in e)(-1 === i.indexOf("Transform") || Dt === i) && (o[i] = e[i]);
                        else if (e = t.currentStyle || t.style)
                            for (i in e) "string" == typeof i && void 0 === o[i] && (o[i.replace(D, M)] = e[i]);
                        return X || (o.opacity = U(t)), n = Bt(t, e, !1), o.rotation = n.rotation, o.skewX = n.skewX, o.scaleX = n.scaleX, o.scaleY = n.scaleY, o.x = n.x, o.y = n.y, It && (o.z = n.z, o.rotationX = n.rotationX, o.rotationY = n.rotationY, o.scaleZ = n.scaleZ), o.filters && delete o.filters, o
                    },
                    nt = function(t, e, i, n, s) {
                        var o, r, a, l = {},
                            h = t.style;
                        for (r in i) "cssText" !== r && "length" !== r && isNaN(r) && (e[r] !== (o = i[r]) || s && s[r]) && -1 === r.indexOf("Origin") && ("number" == typeof o || "string" == typeof o) && (l[r] = "auto" !== o || "left" !== r && "top" !== r ? "" !== o && "auto" !== o && "none" !== o || "string" != typeof e[r] || "" === e[r].replace(w, "") ? o : 0 : et(t, r), void 0 !== h[r] && (a = new _t(h, r, h[r], a)));
                        if (n)
                            for (r in n) "className" !== r && (l[r] = n[r]);
                        return { difs: l, firstMPT: a }
                    },
                    st = { width: ["Left", "Right"], height: ["Top", "Bottom"] },
                    ot = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                    rt = function(t, e, i) {
                        if ("svg" === (t.nodeName + "").toLowerCase()) return (i || Z(t))[e] || 0;
                        if (t.getCTM && Ft(t)) return t.getBBox()[e] || 0;
                        var n = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                            s = st[e],
                            o = s.length;
                        for (i = i || Z(t, null); --o > -1;) n -= parseFloat(J(t, "padding" + s[o], i, !0)) || 0, n -= parseFloat(J(t, "border" + s[o] + "Width", i, !0)) || 0;
                        return n
                    },
                    at = function(t, e) {
                        if ("contain" === t || "auto" === t || "auto auto" === t) return t + " ";
                        (null == t || "" === t) && (t = "0 0");
                        var i, n = t.split(" "),
                            s = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : n[0],
                            o = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : n[1];
                        if (n.length > 3 && !e) { for (n = t.split(", ").join(",").split(","), t = [], i = 0; i < n.length; i++) t.push(at(n[i])); return t.join(",") }
                        return null == o ? o = "center" === s ? "50%" : "0" : "center" === o && (o = "50%"), ("center" === s || isNaN(parseFloat(s)) && -1 === (s + "").indexOf("=")) && (s = "50%"), t = s + " " + o + (n.length > 2 ? " " + n[2] : ""), e && (e.oxp = -1 !== s.indexOf("%"), e.oyp = -1 !== o.indexOf("%"), e.oxr = "=" === s.charAt(1), e.oyr = "=" === o.charAt(1), e.ox = parseFloat(s.replace(w, "")), e.oy = parseFloat(o.replace(w, "")), e.v = t), e || t
                    },
                    lt = function(t, e) { return "function" == typeof t && (t = t(v, g)), "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) || 0 },
                    ht = function(t, e) { "function" == typeof t && (t = t(v, g)); var i = "string" == typeof t && "=" === t.charAt(1); return "string" == typeof t && "v" === t.charAt(t.length - 2) && (t = (i ? t.substr(0, 2) : 0) + window["inner" + ("vh" === t.substr(-2) ? "Height" : "Width")] * (parseFloat(i ? t.substr(2) : t) / 100)), null == t ? e : i ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t) || 0 },
                    ct = function(t, e, i, n) { var s, o, r, a, l, h = 1e-6; return "function" == typeof t && (t = t(v, g)), null == t ? a = e : "number" == typeof t ? a = t : (s = 360, o = t.split("_"), r = ((l = "=" === t.charAt(1)) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(o[0].substr(2)) : parseFloat(o[0])) * (-1 === t.indexOf("rad") ? 1 : H) - (l ? 0 : e), o.length && (n && (n[i] = e + r), -1 !== t.indexOf("short") && ((r %= s) !== r % (s / 2) && (r = 0 > r ? r + s : r - s)), -1 !== t.indexOf("_cw") && 0 > r ? r = (r + 9999999999 * s) % s - (r / s | 0) * s : -1 !== t.indexOf("ccw") && r > 0 && (r = (r - 9999999999 * s) % s - (r / s | 0) * s)), a = e + r), h > a && a > -h && (a = 0), a },
                    ut = { aqua: [0, 255, 255], lime: [0, 255, 0], silver: [192, 192, 192], black: [0, 0, 0], maroon: [128, 0, 0], teal: [0, 128, 128], blue: [0, 0, 255], navy: [0, 0, 128], white: [255, 255, 255], fuchsia: [255, 0, 255], olive: [128, 128, 0], yellow: [255, 255, 0], orange: [255, 165, 0], gray: [128, 128, 128], purple: [128, 0, 128], green: [0, 128, 0], red: [255, 0, 0], pink: [255, 192, 203], cyan: [0, 255, 255], transparent: [255, 255, 255, 0] },
                    dt = function(t, e, i) { return 255 * (1 > 6 * (t = 0 > t ? t + 1 : t > 1 ? t - 1 : t) ? e + (i - e) * t * 6 : .5 > t ? i : 2 > 3 * t ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0 },
                    pt = r.parseColor = function(t, e) {
                        var i, n, s, o, r, a, l, h, c, u, d;
                        if (t)
                            if ("number" == typeof t) i = [t >> 16, t >> 8 & 255, 255 & t];
                            else {
                                if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), ut[t]) i = ut[t];
                                else if ("#" === t.charAt(0)) 4 === t.length && (t = "#" + (n = t.charAt(1)) + n + (s = t.charAt(2)) + s + (o = t.charAt(3)) + o), i = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & 255, 255 & t];
                                else if ("hsl" === t.substr(0, 3))
                                    if (i = d = t.match(_), e) { if (-1 !== t.indexOf("=")) return t.match(y) } else r = Number(i[0]) % 360 / 360, a = Number(i[1]) / 100, n = 2 * (l = Number(i[2]) / 100) - (s = .5 >= l ? l * (a + 1) : l + a - l * a), i.length > 3 && (i[3] = Number(i[3])), i[0] = dt(r + 1 / 3, n, s), i[1] = dt(r, n, s), i[2] = dt(r - 1 / 3, n, s);
                                else i = t.match(_) || ut.transparent;
                                i[0] = Number(i[0]), i[1] = Number(i[1]), i[2] = Number(i[2]), i.length > 3 && (i[3] = Number(i[3]))
                            }
                        else i = ut.black;
                        return e && !d && (n = i[0] / 255, s = i[1] / 255, o = i[2] / 255, l = ((h = Math.max(n, s, o)) + (c = Math.min(n, s, o))) / 2, h === c ? r = a = 0 : (u = h - c, a = l > .5 ? u / (2 - h - c) : u / (h + c), r = h === n ? (s - o) / u + (o > s ? 6 : 0) : h === s ? (o - n) / u + 2 : (n - s) / u + 4, r *= 60), i[0] = r + .5 | 0, i[1] = 100 * a + .5 | 0, i[2] = 100 * l + .5 | 0), i
                    },
                    ft = function(t, e) {
                        var i, n, s, o = t.match(mt) || [],
                            r = 0,
                            a = "";
                        if (!o.length) return t;
                        for (i = 0; i < o.length; i++) n = o[i], r += (s = t.substr(r, t.indexOf(n, r) - r)).length + n.length, 3 === (n = pt(n, e)).length && n.push(1), a += s + (e ? "hsla(" + n[0] + "," + n[1] + "%," + n[2] + "%," + n[3] : "rgba(" + n.join(",")) + ")";
                        return a + t.substr(r)
                    },
                    mt = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
                for (h in ut) mt += "|" + h + "\\b";
                mt = new RegExp(mt + ")", "gi"), r.colorStringFilter = function(t) {
                    var e, i = t[0] + " " + t[1];
                    mt.test(i) && (e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("), t[0] = ft(t[0], e), t[1] = ft(t[1], e)), mt.lastIndex = 0
                }, e.defaultStringFilter || (e.defaultStringFilter = r.colorStringFilter);
                var gt = function(t, e, i, n) {
                        if (null == t) return function(t) { return t };
                        var s, o = e ? (t.match(mt) || [""])[0] : "",
                            r = t.split(o).join("").match(b) || [],
                            a = t.substr(0, t.indexOf(r[0])),
                            l = ")" === t.charAt(t.length - 1) ? ")" : "",
                            h = -1 !== t.indexOf(" ") ? " " : ",",
                            c = r.length,
                            u = c > 0 ? r[0].replace(_, "") : "";
                        return c ? s = e ? function(t) {
                            var e, d, p, f;
                            if ("number" == typeof t) t += u;
                            else if (n && $.test(t)) { for (f = t.replace($, "|").split("|"), p = 0; p < f.length; p++) f[p] = s(f[p]); return f.join(",") }
                            if (e = (t.match(mt) || [o])[0], p = (d = t.split(e).join("").match(b) || []).length, c > p--)
                                for (; ++p < c;) d[p] = i ? d[(p - 1) / 2 | 0] : r[p];
                            return a + d.join(h) + h + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
                        } : function(t) {
                            var e, o, d;
                            if ("number" == typeof t) t += u;
                            else if (n && $.test(t)) { for (o = t.replace($, "|").split("|"), d = 0; d < o.length; d++) o[d] = s(o[d]); return o.join(",") }
                            if (d = (e = t.match(b) || []).length, c > d--)
                                for (; ++d < c;) e[d] = i ? e[(d - 1) / 2 | 0] : r[d];
                            return a + e.join(h) + l
                        } : function(t) { return t }
                    },
                    vt = function(t) {
                        return t = t.split(","),
                            function(e, i, n, s, o, r, a) { var l, h = (i + "").split(" "); for (a = {}, l = 0; 4 > l; l++) a[t[l]] = h[l] = h[l] || h[(l - 1) / 2 >> 0]; return s.parse(e, a, o, r) }
                    },
                    _t = (q._setPluginRatio = function(t) {
                        this.plugin.setRatio(t);
                        for (var e, i, n, s, o, r = this.data, a = r.proxy, l = r.firstMPT, h = 1e-6; l;) e = a[l.v], l.r ? e = l.r(e) : h > e && e > -h && (e = 0), l.t[l.p] = e, l = l._next;
                        if (r.autoRotate && (r.autoRotate.rotation = r.mod ? r.mod.call(this._tween, a.rotation, this.t, this._tween) : a.rotation), 1 === t || 0 === t)
                            for (l = r.firstMPT, o = 1 === t ? "e" : "b"; l;) {
                                if ((i = l.t).type) {
                                    if (1 === i.type) {
                                        for (s = i.xs0 + i.s + i.xs1, n = 1; n < i.l; n++) s += i["xn" + n] + i["xs" + (n + 1)];
                                        i[o] = s
                                    }
                                } else i[o] = i.s + i.xs0;
                                l = l._next
                            }
                    }, function(t, e, i, n, s) { this.t = t, this.p = e, this.v = i, this.r = s, n && (n._prev = this, this._next = n) }),
                    yt = (q._parseToProxy = function(t, e, i, n, s, o) {
                        var r, a, l, h, c, u = n,
                            d = {},
                            p = {},
                            f = i._transform,
                            m = L;
                        for (i._transform = null, L = e, n = c = i.parse(t, e, n, s), L = m, o && (i._transform = f, u && (u._prev = null, u._prev && (u._prev._next = null))); n && n !== u;) {
                            if (n.type <= 1 && (p[a = n.p] = n.s + n.c, d[a] = n.s, o || (h = new _t(n, "s", a, h, n.r), n.c = 0), 1 === n.type))
                                for (r = n.l; --r > 0;) l = "xn" + r, p[a = n.p + "_" + l] = n.data[l], d[a] = n[l], o || (h = new _t(n, l, a, h, n.rxp[l]));
                            n = n._next
                        }
                        return { proxy: d, end: p, firstMPT: h, pt: c }
                    }, q.CSSPropTween = function(t, e, n, s, r, a, l, h, c, u, d) { this.t = t, this.p = e, this.s = n, this.c = s, this.n = l || e, t instanceof yt || o.push(this.n), this.r = h ? "function" == typeof h ? h : Math.round : h, this.type = a || 0, c && (this.pr = c, i = !0), this.b = void 0 === u ? n : u, this.e = void 0 === d ? n + s : d, r && (this._next = r, r._prev = this) }),
                    bt = function(t, e, i, n, s, o) { var r = new yt(t, e, i, n - i, s, -1, o); return r.b = i, r.e = r.xs0 = n, r },
                    wt = r.parseComplex = function(t, e, i, n, s, o, a, l, h, u) {
                        i = i || o || "", "function" == typeof n && (n = n(v, g)), a = new yt(t, e, 0, 0, a, u ? 2 : 1, null, !1, l, i, n), n += "", s && mt.test(n + i) && (n = [i, n], r.colorStringFilter(n), i = n[0], n = n[1]);
                        var d, p, f, m, b, w, x, T, k, C, S, P, D, A = i.split(", ").join(",").split(" "),
                            M = n.split(", ").join(",").split(" "),
                            I = A.length,
                            O = !1 !== c;
                        for ((-1 !== n.indexOf(",") || -1 !== i.indexOf(",")) && (-1 !== (n + i).indexOf("rgb") || -1 !== (n + i).indexOf("hsl") ? (A = A.join(" ").replace($, ", ").split(" "), M = M.join(" ").replace($, ", ").split(" ")) : (A = A.join(" ").split(",").join(", ").split(" "), M = M.join(" ").split(",").join(", ").split(" ")), I = A.length), I !== M.length && (I = (A = (o || "").split(" ")).length), a.plugin = h, a.setRatio = u, mt.lastIndex = 0, d = 0; I > d; d++)
                            if (m = A[d], b = M[d] + "", (T = parseFloat(m)) || 0 === T) a.appendXtra("", T, lt(b, T), b.replace(y, ""), !(!O || -1 === b.indexOf("px")) && Math.round, !0);
                            else if (s && mt.test(m)) P = ")" + ((P = b.indexOf(")") + 1) ? b.substr(P) : ""), D = -1 !== b.indexOf("hsl") && X, C = b, m = pt(m, D), b = pt(b, D), (k = m.length + b.length > 6) && !X && 0 === b[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent", a.e = a.e.split(M[d]).join("transparent")) : (X || (k = !1), D ? a.appendXtra(C.substr(0, C.indexOf("hsl")) + (k ? "hsla(" : "hsl("), m[0], lt(b[0], m[0]), ",", !1, !0).appendXtra("", m[1], lt(b[1], m[1]), "%,", !1).appendXtra("", m[2], lt(b[2], m[2]), k ? "%," : "%" + P, !1) : a.appendXtra(C.substr(0, C.indexOf("rgb")) + (k ? "rgba(" : "rgb("), m[0], b[0] - m[0], ",", Math.round, !0).appendXtra("", m[1], b[1] - m[1], ",", Math.round).appendXtra("", m[2], b[2] - m[2], k ? "," : P, Math.round), k && (m = m.length < 4 ? 1 : m[3], a.appendXtra("", m, (b.length < 4 ? 1 : b[3]) - m, P, !1))), mt.lastIndex = 0;
                        else if (w = m.match(_)) {
                            if (!(x = b.match(y)) || x.length !== w.length) return a;
                            for (f = 0, p = 0; p < w.length; p++) S = w[p], C = m.indexOf(S, f), a.appendXtra(m.substr(f, C - f), Number(S), lt(x[p], S), "", !(!O || "px" !== m.substr(C + S.length, 2)) && Math.round, 0 === p), f = C + S.length;
                            a["xs" + a.l] += m.substr(f)
                        } else a["xs" + a.l] += a.l || a["xs" + a.l] ? " " + b : b;
                        if (-1 !== n.indexOf("=") && a.data) {
                            for (P = a.xs0 + a.data.s, d = 1; d < a.l; d++) P += a["xs" + d] + a.data["xn" + d];
                            a.e = P + a["xs" + d]
                        }
                        return a.l || (a.type = -1, a.xs0 = a.e), a.xfirst || a
                    },
                    xt = 9;
                for ((h = yt.prototype).l = h.pr = 0; --xt > 0;) h["xn" + xt] = 0, h["xs" + xt] = "";
                h.xs0 = "", h._next = h._prev = h.xfirst = h.data = h.plugin = h.setRatio = h.rxp = null, h.appendXtra = function(t, e, i, n, s, o) {
                    var r = this,
                        a = r.l;
                    return r["xs" + a] += o && (a || r["xs" + a]) ? " " + t : t || "", i || 0 === a || r.plugin ? (r.l++, r.type = r.setRatio ? 2 : 1, r["xs" + r.l] = n || "", a > 0 ? (r.data["xn" + a] = e + i, r.rxp["xn" + a] = s, r["xn" + a] = e, r.plugin || (r.xfirst = new yt(r, "xn" + a, e, i, r.xfirst || r, 0, r.n, s, r.pr), r.xfirst.xs0 = 0), r) : (r.data = { s: e + i }, r.rxp = {}, r.s = e, r.c = i, r.r = s, r)) : (r["xs" + a] += e + (n || ""), r)
                };
                var Tt = function(t, e) { e = e || {}, this.p = e.prefix && Q(t) || t, l[t] = l[this.p] = this, this.format = e.formatter || gt(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0 },
                    kt = q._registerComplexSpecialProp = function(t, e, i) {
                        "object" != typeof e && (e = { parser: i });
                        var n, s = t.split(","),
                            o = e.defaultValue;
                        for (i = i || [o], n = 0; n < s.length; n++) e.prefix = 0 === n && e.prefix, e.defaultValue = i[n] || o, new Tt(s[n], e)
                    },
                    Ct = q._registerPluginProp = function(t) {
                        if (!l[t]) {
                            var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                            kt(t, { parser: function(t, i, n, s, o, r, h) { var c = a.com.greensock.plugins[e]; return c ? (c._cssRegister(), l[n].parse(t, i, n, s, o, r, h)) : (V("Error: " + e + " js file not loaded."), o) } })
                        }
                    };
                (h = Tt.prototype).parseComplex = function(t, e, i, n, s, o) {
                    var r, a, l, h, c, u, d = this.keyword;
                    if (this.multi && ($.test(i) || $.test(e) ? (a = e.replace($, "|").split("|"), l = i.replace($, "|").split("|")) : d && (a = [e], l = [i])), l) {
                        for (h = l.length > a.length ? l.length : a.length, r = 0; h > r; r++) e = a[r] = a[r] || this.dflt, i = l[r] = l[r] || this.dflt, d && ((c = e.indexOf(d)) !== (u = i.indexOf(d)) && (-1 === u ? a[r] = a[r].split(d).join("") : -1 === c && (a[r] += " " + d)));
                        e = a.join(", "), i = l.join(", ")
                    }
                    return wt(t, this.p, e, i, this.clrs, this.dflt, n, this.pr, s, o)
                }, h.parse = function(t, e, i, n, o, r) { return this.parseComplex(t.style, this.format(J(t, this.p, s, !1, this.dflt)), this.format(e), o, r) }, r.registerSpecialProp = function(t, e, i) { kt(t, { parser: function(t, n, s, o, r, a) { var l = new yt(t, s, 0, 0, r, 2, s, !1, i); return l.plugin = a, l.setRatio = e(t, n, o._tween, s), l }, priority: i }) }, r.useSVGTransformAttr = !0;
                var St, Pt = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                    Dt = Q("transform"),
                    At = K + "transform",
                    Mt = Q("transformOrigin"),
                    It = null !== Q("perspective"),
                    Ot = q.Transform = function() { this.perspective = parseFloat(r.defaultTransformPerspective) || 0, this.force3D = !(!1 === r.defaultForce3D || !It) && (r.defaultForce3D || "auto") },
                    Et = _gsScope.SVGElement,
                    $t = function(t, e, i) {
                        var n, s = F.createElementNS("http://www.w3.org/2000/svg", t),
                            o = /([a-z])([A-Z])/g;
                        for (n in i) s.setAttributeNS(null, n.replace(o, "$1-$2").toLowerCase(), i[n]);
                        return e.appendChild(s), s
                    },
                    Nt = F.documentElement || {},
                    zt = function() { var t, e, i, n = m || /Android/i.test(Y) && !_gsScope.chrome; return F.createElementNS && !n && (t = $t("svg", Nt), i = (e = $t("rect", t, { width: 100, height: 50, x: 100 })).getBoundingClientRect().width, e.style[Mt] = "50% 50%", e.style[Dt] = "scaleX(0.5)", n = i === e.getBoundingClientRect().width && !(p && It), Nt.removeChild(t)), n }(),
                    Ht = function(t, e, i, n, s, o) {
                        var a, l, h, c, u, d, p, f, m, g, v, _, y, b, w = t._gsTransform,
                            x = jt(t, !0);
                        w && (y = w.xOrigin, b = w.yOrigin), (!n || (a = n.split(" ")).length < 2) && (0 === (p = t.getBBox()).x && 0 === p.y && p.width + p.height === 0 && (p = { x: parseFloat(t.hasAttribute("x") ? t.getAttribute("x") : t.hasAttribute("cx") ? t.getAttribute("cx") : 0) || 0, y: parseFloat(t.hasAttribute("y") ? t.getAttribute("y") : t.hasAttribute("cy") ? t.getAttribute("cy") : 0) || 0, width: 0, height: 0 }), a = [(-1 !== (e = at(e).split(" "))[0].indexOf("%") ? parseFloat(e[0]) / 100 * p.width : parseFloat(e[0])) + p.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * p.height : parseFloat(e[1])) + p.y]), i.xOrigin = c = parseFloat(a[0]), i.yOrigin = u = parseFloat(a[1]), n && x !== Wt && (d = x[0], p = x[1], f = x[2], m = x[3], g = x[4], v = x[5], (_ = d * m - p * f) && (l = c * (m / _) + u * (-f / _) + (f * v - m * g) / _, h = c * (-p / _) + u * (d / _) - (d * v - p * g) / _, c = i.xOrigin = a[0] = l, u = i.yOrigin = a[1] = h)), w && (o && (i.xOffset = w.xOffset, i.yOffset = w.yOffset, w = i), s || !1 !== s && !1 !== r.defaultSmoothOrigin ? (l = c - y, h = u - b, w.xOffset += l * x[0] + h * x[2] - l, w.yOffset += l * x[1] + h * x[3] - h) : w.xOffset = w.yOffset = 0), o || t.setAttribute("data-svg-origin", a.join(" "))
                    },
                    Lt = function(t) {
                        var e, i = W("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                            n = this.parentNode,
                            s = this.nextSibling,
                            o = this.style.cssText;
                        if (Nt.appendChild(i), i.appendChild(this), this.style.display = "block", t) try { e = this.getBBox(), this._originalGetBBox = this.getBBox, this.getBBox = Lt } catch (r) {} else this._originalGetBBox && (e = this._originalGetBBox());
                        return s ? n.insertBefore(this, s) : n.appendChild(this), Nt.removeChild(i), this.style.cssText = o, e
                    },
                    Rt = function(t) { try { return t.getBBox() } catch (e) { return Lt.call(t, !0) } },
                    Ft = function(t) { return !(!Et || !t.getCTM || t.parentNode && !t.ownerSVGElement || !Rt(t)) },
                    Wt = [1, 0, 0, 1, 0, 0],
                    jt = function(t, e) {
                        var i, n, s, o, r, a, l = t._gsTransform || new Ot,
                            h = 1e5,
                            c = t.style;
                        if (Dt ? n = J(t, At, null, !0) : t.currentStyle && (n = (n = t.currentStyle.filter.match(O)) && 4 === n.length ? [n[0].substr(4), Number(n[2].substr(4)), Number(n[1].substr(4)), n[3].substr(4), l.x || 0, l.y || 0].join(",") : ""), i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n, !Dt || !(a = !Z(t) || "none" === Z(t).display) && t.parentNode || (a && (o = c.display, c.display = "block"), t.parentNode || (r = 1, Nt.appendChild(t)), i = !(n = J(t, At, null, !0)) || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n, o ? c.display = o : a && Ut(c, "display"), r && Nt.removeChild(t)), (l.svg || t.getCTM && Ft(t)) && (i && -1 !== (c[Dt] + "").indexOf("matrix") && (n = c[Dt], i = 0), s = t.getAttribute("transform"), i && s && (n = "matrix(" + (s = t.transform.baseVal.consolidate().matrix).a + "," + s.b + "," + s.c + "," + s.d + "," + s.e + "," + s.f + ")", i = 0)), i) return Wt;
                        for (s = (n || "").match(_) || [], xt = s.length; --xt > -1;) o = Number(s[xt]), s[xt] = (r = o - (o |= 0)) ? (r * h + (0 > r ? -.5 : .5) | 0) / h + o : o;
                        return e && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s
                    },
                    Bt = q.getTransform = function(t, i, n, s) {
                        if (t._gsTransform && n && !s) return t._gsTransform;
                        var o, a, l, h, c, u, d = n && t._gsTransform || new Ot,
                            p = d.scaleX < 0,
                            f = 2e-5,
                            m = 1e5,
                            g = It && (parseFloat(J(t, Mt, i, !1, "0 0 0").split(" ")[2]) || d.zOrigin) || 0,
                            v = parseFloat(r.defaultTransformPerspective) || 0;
                        if (d.svg = !(!t.getCTM || !Ft(t)), d.svg && (Ht(t, J(t, Mt, i, !1, "50% 50%") + "", d, t.getAttribute("data-svg-origin")), St = r.useSVGTransformAttr || zt), (o = jt(t)) !== Wt) {
                            if (16 === o.length) {
                                var _, y, b, w, x, T = o[0],
                                    k = o[1],
                                    C = o[2],
                                    S = o[3],
                                    P = o[4],
                                    D = o[5],
                                    A = o[6],
                                    M = o[7],
                                    I = o[8],
                                    O = o[9],
                                    E = o[10],
                                    $ = o[12],
                                    N = o[13],
                                    z = o[14],
                                    L = o[11],
                                    R = Math.atan2(A, E);
                                d.zOrigin && ($ = I * (z = -d.zOrigin) - o[12], N = O * z - o[13], z = E * z + d.zOrigin - o[14]), d.rotationX = R * H, R && (_ = P * (w = Math.cos(-R)) + I * (x = Math.sin(-R)), y = D * w + O * x, b = A * w + E * x, I = P * -x + I * w, O = D * -x + O * w, E = A * -x + E * w, L = M * -x + L * w, P = _, D = y, A = b), R = Math.atan2(-C, E), d.rotationY = R * H, R && (y = k * (w = Math.cos(-R)) - O * (x = Math.sin(-R)), b = C * w - E * x, O = k * x + O * w, E = C * x + E * w, L = S * x + L * w, T = _ = T * w - I * x, k = y, C = b), R = Math.atan2(k, T), d.rotation = R * H, R && (_ = T * (w = Math.cos(R)) + k * (x = Math.sin(R)), y = P * w + D * x, b = I * w + O * x, k = k * w - T * x, D = D * w - P * x, O = O * w - I * x, T = _, P = y, I = b), d.rotationX && Math.abs(d.rotationX) + Math.abs(d.rotation) > 359.9 && (d.rotationX = d.rotation = 0, d.rotationY = 180 - d.rotationY), R = Math.atan2(P, D), d.scaleX = (Math.sqrt(T * T + k * k + C * C) * m + .5 | 0) / m, d.scaleY = (Math.sqrt(D * D + A * A) * m + .5 | 0) / m, d.scaleZ = (Math.sqrt(I * I + O * O + E * E) * m + .5 | 0) / m, T /= d.scaleX, P /= d.scaleY, k /= d.scaleX, D /= d.scaleY, Math.abs(R) > f ? (d.skewX = R * H, P = 0, "simple" !== d.skewType && (d.scaleY *= 1 / Math.cos(R))) : d.skewX = 0, d.perspective = L ? 1 / (0 > L ? -L : L) : 0, d.x = $, d.y = N, d.z = z, d.svg && (d.x -= d.xOrigin - (d.xOrigin * T - d.yOrigin * P), d.y -= d.yOrigin - (d.yOrigin * k - d.xOrigin * D))
                            } else if (!It || s || !o.length || d.x !== o[4] || d.y !== o[5] || !d.rotationX && !d.rotationY) {
                                var F = o.length >= 6,
                                    W = F ? o[0] : 1,
                                    j = o[1] || 0,
                                    B = o[2] || 0,
                                    q = F ? o[3] : 1;
                                d.x = o[4] || 0, d.y = o[5] || 0, l = Math.sqrt(W * W + j * j), h = Math.sqrt(q * q + B * B), c = W || j ? Math.atan2(j, W) * H : d.rotation || 0, u = B || q ? Math.atan2(B, q) * H + c : d.skewX || 0, d.scaleX = l, d.scaleY = h, d.rotation = c, d.skewX = u, It && (d.rotationX = d.rotationY = d.z = 0, d.perspective = v, d.scaleZ = 1), d.svg && (d.x -= d.xOrigin - (d.xOrigin * W + d.yOrigin * B), d.y -= d.yOrigin - (d.xOrigin * j + d.yOrigin * q))
                            }
                            for (a in Math.abs(d.skewX) > 90 && Math.abs(d.skewX) < 270 && (p ? (d.scaleX *= -1, d.skewX += d.rotation <= 0 ? 180 : -180, d.rotation += d.rotation <= 0 ? 180 : -180) : (d.scaleY *= -1, d.skewX += d.skewX <= 0 ? 180 : -180)), d.zOrigin = g, d) d[a] < f && d[a] > -f && (d[a] = 0)
                        }
                        return n && (t._gsTransform = d, d.svg && (St && t.style[Dt] ? e.delayedCall(.001, function() { Ut(t.style, Dt) }) : !St && t.getAttribute("transform") && e.delayedCall(.001, function() { t.removeAttribute("transform") }))), d
                    },
                    qt = function(t) {
                        var e, i, n = this.data,
                            s = -n.rotation * z,
                            o = s + n.skewX * z,
                            r = 1e5,
                            a = (Math.cos(s) * n.scaleX * r | 0) / r,
                            l = (Math.sin(s) * n.scaleX * r | 0) / r,
                            h = (Math.sin(o) * -n.scaleY * r | 0) / r,
                            c = (Math.cos(o) * n.scaleY * r | 0) / r,
                            u = this.t.style,
                            d = this.t.currentStyle;
                        if (d) {
                            i = l, l = -h, h = -i, e = d.filter, u.filter = "";
                            var p, f, g = this.t.offsetWidth,
                                v = this.t.offsetHeight,
                                _ = "absolute" !== d.position,
                                y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + l + ", M21=" + h + ", M22=" + c,
                                b = n.x + g * n.xPercent / 100,
                                w = n.y + v * n.yPercent / 100;
                            if (null != n.ox && (b += (p = (n.oxp ? g * n.ox * .01 : n.ox) - g / 2) - (p * a + (f = (n.oyp ? v * n.oy * .01 : n.oy) - v / 2) * l), w += f - (p * h + f * c)), _ ? y += ", Dx=" + ((p = g / 2) - (p * a + (f = v / 2) * l) + b) + ", Dy=" + (f - (p * h + f * c) + w) + ")" : y += ", sizingMethod='auto expand')", -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? u.filter = e.replace(E, y) : u.filter = y + " " + e, (0 === t || 1 === t) && 1 === a && 0 === l && 0 === h && 1 === c && (_ && -1 === y.indexOf("Dx=0, Dy=0") || T.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && u.removeAttribute("filter")), !_) { var k, C, S, P = 8 > m ? 1 : -1; for (p = n.ieOffsetX || 0, f = n.ieOffsetY || 0, n.ieOffsetX = Math.round((g - ((0 > a ? -a : a) * g + (0 > l ? -l : l) * v)) / 2 + b), n.ieOffsetY = Math.round((v - ((0 > c ? -c : c) * v + (0 > h ? -h : h) * g)) / 2 + w), xt = 0; 4 > xt; xt++) S = (i = -1 !== (k = d[C = ot[xt]]).indexOf("px") ? parseFloat(k) : tt(this.t, C, parseFloat(k), k.replace(x, "")) || 0) !== n[C] ? 2 > xt ? -n.ieOffsetX : -n.ieOffsetY : 2 > xt ? p - n.ieOffsetX : f - n.ieOffsetY, u[C] = (n[C] = Math.round(i - S * (0 === xt || 2 === xt ? 1 : P))) + "px" }
                        }
                    },
                    Yt = q.set3DTransformRatio = q.setTransformRatio = function(t) {
                        var e, i, n, s, o, r, a, l, h, c, u, d, f, m, g, v, _, y, b, w, x, T, k, C = this.data,
                            S = this.t.style,
                            P = C.rotation,
                            D = C.rotationX,
                            A = C.rotationY,
                            M = C.scaleX,
                            I = C.scaleY,
                            O = C.scaleZ,
                            E = C.x,
                            $ = C.y,
                            N = C.z,
                            H = C.svg,
                            L = C.perspective,
                            R = C.force3D,
                            F = C.skewY,
                            W = C.skewX;
                        if (F && (W += F, P += F), !((1 !== t && 0 !== t || "auto" !== R || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && R || N || L || A || D || 1 !== O) || St && H || !It) P || W || H ? (P *= z, T = W * z, k = 1e5, i = Math.cos(P) * M, o = Math.sin(P) * M, n = Math.sin(P - T) * -I, r = Math.cos(P - T) * I, T && "simple" === C.skewType && (e = Math.tan(T - F * z), n *= e = Math.sqrt(1 + e * e), r *= e, F && (e = Math.tan(F * z), i *= e = Math.sqrt(1 + e * e), o *= e)), H && (E += C.xOrigin - (C.xOrigin * i + C.yOrigin * n) + C.xOffset, $ += C.yOrigin - (C.xOrigin * o + C.yOrigin * r) + C.yOffset, St && (C.xPercent || C.yPercent) && (g = this.t.getBBox(), E += .01 * C.xPercent * g.width, $ += .01 * C.yPercent * g.height), (g = 1e-6) > E && E > -g && (E = 0), g > $ && $ > -g && ($ = 0)), b = (i * k | 0) / k + "," + (o * k | 0) / k + "," + (n * k | 0) / k + "," + (r * k | 0) / k + "," + E + "," + $ + ")", H && St ? this.t.setAttribute("transform", "matrix(" + b) : S[Dt] = (C.xPercent || C.yPercent ? "translate(" + C.xPercent + "%," + C.yPercent + "%) matrix(" : "matrix(") + b) : S[Dt] = (C.xPercent || C.yPercent ? "translate(" + C.xPercent + "%," + C.yPercent + "%) matrix(" : "matrix(") + M + ",0,0," + I + "," + E + "," + $ + ")";
                        else {
                            if (p && ((g = 1e-4) > M && M > -g && (M = O = 2e-5), g > I && I > -g && (I = O = 2e-5), !L || C.z || C.rotationX || C.rotationY || (L = 0)), P || W) P *= z, v = i = Math.cos(P), _ = o = Math.sin(P), W && (P -= W * z, v = Math.cos(P), _ = Math.sin(P), "simple" === C.skewType && (e = Math.tan((W - F) * z), v *= e = Math.sqrt(1 + e * e), _ *= e, C.skewY && (e = Math.tan(F * z), i *= e = Math.sqrt(1 + e * e), o *= e))), n = -_, r = v;
                            else {
                                if (!(A || D || 1 !== O || L || H)) return void(S[Dt] = (C.xPercent || C.yPercent ? "translate(" + C.xPercent + "%," + C.yPercent + "%) translate3d(" : "translate3d(") + E + "px," + $ + "px," + N + "px)" + (1 !== M || 1 !== I ? " scale(" + M + "," + I + ")" : ""));
                                i = r = 1, n = o = 0
                            }
                            c = 1, s = a = l = h = u = d = 0, f = L ? -1 / L : 0, m = C.zOrigin, g = 1e-6, w = ",", x = "0", (P = A * z) && (v = Math.cos(P), l = -(_ = Math.sin(P)), u = f * -_, s = i * _, a = o * _, c = v, f *= v, i *= v, o *= v), (P = D * z) && (e = n * (v = Math.cos(P)) + s * (_ = Math.sin(P)), y = r * v + a * _, h = c * _, d = f * _, s = n * -_ + s * v, a = r * -_ + a * v, c *= v, f *= v, n = e, r = y), 1 !== O && (s *= O, a *= O, c *= O, f *= O), 1 !== I && (n *= I, r *= I, h *= I, d *= I), 1 !== M && (i *= M, o *= M, l *= M, u *= M), (m || H) && (m && (E += s * -m, $ += a * -m, N += c * -m + m), H && (E += C.xOrigin - (C.xOrigin * i + C.yOrigin * n) + C.xOffset, $ += C.yOrigin - (C.xOrigin * o + C.yOrigin * r) + C.yOffset), g > E && E > -g && (E = x), g > $ && $ > -g && ($ = x), g > N && N > -g && (N = 0)), b = C.xPercent || C.yPercent ? "translate(" + C.xPercent + "%," + C.yPercent + "%) matrix3d(" : "matrix3d(", b += (g > i && i > -g ? x : i) + w + (g > o && o > -g ? x : o) + w + (g > l && l > -g ? x : l), b += w + (g > u && u > -g ? x : u) + w + (g > n && n > -g ? x : n) + w + (g > r && r > -g ? x : r), D || A || 1 !== O ? (b += w + (g > h && h > -g ? x : h) + w + (g > d && d > -g ? x : d) + w + (g > s && s > -g ? x : s), b += w + (g > a && a > -g ? x : a) + w + (g > c && c > -g ? x : c) + w + (g > f && f > -g ? x : f) + w) : b += ",0,0,0,0,1,0,", b += E + w + $ + w + N + w + (L ? 1 + -N / L : 1) + ")", S[Dt] = b
                        }
                    };
                (h = Ot.prototype).x = h.y = h.z = h.skewX = h.skewY = h.rotation = h.rotationX = h.rotationY = h.zOrigin = h.xPercent = h.yPercent = h.xOffset = h.yOffset = 0, h.scaleX = h.scaleY = h.scaleZ = 1, kt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                    parser: function(t, e, i, n, o, a, l) {
                        if (n._lastParsedTransform === l) return o;
                        n._lastParsedTransform = l;
                        var h, c = l.scale && "function" == typeof l.scale ? l.scale : 0;
                        "function" == typeof l[i] && (h = l[i], l[i] = e), c && (l.scale = c(v, t));
                        var u, d, p, f, m, _, y, b, w, x = t._gsTransform,
                            T = t.style,
                            k = 1e-6,
                            C = Pt.length,
                            S = l,
                            P = {},
                            D = "transformOrigin",
                            A = Bt(t, s, !0, S.parseTransform),
                            M = S.transform && ("function" == typeof S.transform ? S.transform(v, g) : S.transform);
                        if (A.skewType = S.skewType || A.skewType || r.defaultSkewType, n._transform = A, "rotationZ" in S && (S.rotation = S.rotationZ), M && "string" == typeof M && Dt)(d = j.style)[Dt] = M, d.display = "block", d.position = "absolute", -1 !== M.indexOf("%") && (d.width = J(t, "width"), d.height = J(t, "height")), F.body.appendChild(j), u = Bt(j, null, !1), "simple" === A.skewType && (u.scaleY *= Math.cos(u.skewX * z)), A.svg && (_ = A.xOrigin, y = A.yOrigin, u.x -= A.xOffset, u.y -= A.yOffset, (S.transformOrigin || S.svgOrigin) && (M = {}, Ht(t, at(S.transformOrigin), M, S.svgOrigin, S.smoothOrigin, !0), _ = M.xOrigin, y = M.yOrigin, u.x -= M.xOffset - A.xOffset, u.y -= M.yOffset - A.yOffset), (_ || y) && (b = jt(j, !0), u.x -= _ - (_ * b[0] + y * b[2]), u.y -= y - (_ * b[1] + y * b[3]))), F.body.removeChild(j), u.perspective || (u.perspective = A.perspective),
                            null != S.xPercent && (u.xPercent = ht(S.xPercent, A.xPercent)), null != S.yPercent && (u.yPercent = ht(S.yPercent, A.yPercent));
                        else if ("object" == typeof S) {
                            if (u = { scaleX: ht(null != S.scaleX ? S.scaleX : S.scale, A.scaleX), scaleY: ht(null != S.scaleY ? S.scaleY : S.scale, A.scaleY), scaleZ: ht(S.scaleZ, A.scaleZ), x: ht(S.x, A.x), y: ht(S.y, A.y), z: ht(S.z, A.z), xPercent: ht(S.xPercent, A.xPercent), yPercent: ht(S.yPercent, A.yPercent), perspective: ht(S.transformPerspective, A.perspective) }, null != (m = S.directionalRotation))
                                if ("object" == typeof m)
                                    for (d in m) S[d] = m[d];
                                else S.rotation = m;
                                "string" == typeof S.x && -1 !== S.x.indexOf("%") && (u.x = 0, u.xPercent = ht(S.x, A.xPercent)), "string" == typeof S.y && -1 !== S.y.indexOf("%") && (u.y = 0, u.yPercent = ht(S.y, A.yPercent)), u.rotation = ct("rotation" in S ? S.rotation : "shortRotation" in S ? S.shortRotation + "_short" : A.rotation, A.rotation, "rotation", P), It && (u.rotationX = ct("rotationX" in S ? S.rotationX : "shortRotationX" in S ? S.shortRotationX + "_short" : A.rotationX || 0, A.rotationX, "rotationX", P), u.rotationY = ct("rotationY" in S ? S.rotationY : "shortRotationY" in S ? S.shortRotationY + "_short" : A.rotationY || 0, A.rotationY, "rotationY", P)), u.skewX = ct(S.skewX, A.skewX), u.skewY = ct(S.skewY, A.skewY)
                        }
                        for (It && null != S.force3D && (A.force3D = S.force3D, f = !0), (p = A.force3D || A.z || A.rotationX || A.rotationY || u.z || u.rotationX || u.rotationY || u.perspective) || null == S.scale || (u.scaleZ = 1); --C > -1;)((M = u[w = Pt[C]] - A[w]) > k || -k > M || null != S[w] || null != L[w]) && (f = !0, o = new yt(A, w, A[w], M, o), w in P && (o.e = P[w]), o.xs0 = 0, o.plugin = a, n._overwriteProps.push(o.n));
                        return M = S.transformOrigin, A.svg && (M || S.svgOrigin) && (_ = A.xOffset, y = A.yOffset, Ht(t, at(M), u, S.svgOrigin, S.smoothOrigin), o = bt(A, "xOrigin", (x ? A : u).xOrigin, u.xOrigin, o, D), o = bt(A, "yOrigin", (x ? A : u).yOrigin, u.yOrigin, o, D), (_ !== A.xOffset || y !== A.yOffset) && (o = bt(A, "xOffset", x ? _ : A.xOffset, A.xOffset, o, D), o = bt(A, "yOffset", x ? y : A.yOffset, A.yOffset, o, D)), M = "0px 0px"), (M || It && p && A.zOrigin) && (Dt ? (f = !0, w = Mt, M = (M || J(t, w, s, !1, "50% 50%")) + "", (o = new yt(T, w, 0, 0, o, -1, D)).b = T[w], o.plugin = a, It ? (d = A.zOrigin, M = M.split(" "), A.zOrigin = (M.length > 2 && (0 === d || "0px" !== M[2]) ? parseFloat(M[2]) : d) || 0, o.xs0 = o.e = M[0] + " " + (M[1] || "50%") + " 0px", (o = new yt(A, "zOrigin", 0, 0, o, -1, o.n)).b = d, o.xs0 = o.e = A.zOrigin) : o.xs0 = o.e = M) : at(M + "", A)), f && (n._transformType = A.svg && St || !p && 3 !== this._transformType ? 2 : 3), h && (l[i] = h), c && (l.scale = c), o
                    },
                    prefix: !0
                }), kt("boxShadow", { defaultValue: "0px 0px 0px 0px #999", prefix: !0, color: !0, multi: !0, keyword: "inset" }), kt("borderRadius", {
                    defaultValue: "0px",
                    parser: function(t, e, i, o, r) {
                        e = this.format(e);
                        var a, l, h, c, u, d, p, f, m, g, v, _, y, b, w, x, T = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                            k = t.style;
                        for (m = parseFloat(t.offsetWidth), g = parseFloat(t.offsetHeight), a = e.split(" "), l = 0; l < T.length; l++) this.p.indexOf("border") && (T[l] = Q(T[l])), -1 !== (u = c = J(t, T[l], s, !1, "0px")).indexOf(" ") && (u = (c = u.split(" "))[0], c = c[1]), d = h = a[l], p = parseFloat(u), _ = u.substr((p + "").length), (y = "=" === d.charAt(1)) ? (f = parseInt(d.charAt(0) + "1", 10), d = d.substr(2), f *= parseFloat(d), v = d.substr((f + "").length - (0 > f ? 1 : 0)) || "") : (f = parseFloat(d), v = d.substr((f + "").length)), "" === v && (v = n[i] || _), v !== _ && (b = tt(t, "borderLeft", p, _), w = tt(t, "borderTop", p, _), "%" === v ? (u = b / m * 100 + "%", c = w / g * 100 + "%") : "em" === v ? (u = b / (x = tt(t, "borderLeft", 1, "em")) + "em", c = w / x + "em") : (u = b + "px", c = w + "px"), y && (d = parseFloat(u) + f + v, h = parseFloat(c) + f + v)), r = wt(k, T[l], u + " " + c, d + " " + h, !1, "0px", r);
                        return r
                    },
                    prefix: !0,
                    formatter: gt("0px 0px 0px 0px", !1, !0)
                }), kt("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", { defaultValue: "0px", parser: function(t, e, i, n, o) { return wt(t.style, i, this.format(J(t, i, s, !1, "0px 0px")), this.format(e), !1, "0px", o) }, prefix: !0, formatter: gt("0px 0px", !1, !0) }), kt("backgroundPosition", {
                    defaultValue: "0 0",
                    parser: function(t, e, i, n, o, r) {
                        var a, l, h, c, u, d, p = "background-position",
                            f = s || Z(t, null),
                            g = this.format((f ? m ? f.getPropertyValue(p + "-x") + " " + f.getPropertyValue(p + "-y") : f.getPropertyValue(p) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                            v = this.format(e);
                        if (-1 !== g.indexOf("%") != (-1 !== v.indexOf("%")) && v.split(",").length < 2 && ((d = J(t, "backgroundImage").replace(A, "")) && "none" !== d)) {
                            for (a = g.split(" "), l = v.split(" "), B.setAttribute("src", d), h = 2; --h > -1;)(c = -1 !== (g = a[h]).indexOf("%")) !== (-1 !== l[h].indexOf("%")) && (u = 0 === h ? t.offsetWidth - B.width : t.offsetHeight - B.height, a[h] = c ? parseFloat(g) / 100 * u + "px" : parseFloat(g) / u * 100 + "%");
                            g = a.join(" ")
                        }
                        return this.parseComplex(t.style, g, v, o, r)
                    },
                    formatter: at
                }), kt("backgroundSize", { defaultValue: "0 0", formatter: function(t) { return "co" === (t += "").substr(0, 2) ? t : at(-1 === t.indexOf(" ") ? t + " " + t : t) } }), kt("perspective", { defaultValue: "0px", prefix: !0 }), kt("perspectiveOrigin", { defaultValue: "50% 50%", prefix: !0 }), kt("transformStyle", { prefix: !0 }), kt("backfaceVisibility", { prefix: !0 }), kt("userSelect", { prefix: !0 }), kt("margin", { parser: vt("marginTop,marginRight,marginBottom,marginLeft") }), kt("padding", { parser: vt("paddingTop,paddingRight,paddingBottom,paddingLeft") }), kt("clip", { defaultValue: "rect(0px,0px,0px,0px)", parser: function(t, e, i, n, o, r) { var a, l, h; return 9 > m ? (l = t.currentStyle, h = 8 > m ? " " : ",", a = "rect(" + l.clipTop + h + l.clipRight + h + l.clipBottom + h + l.clipLeft + ")", e = this.format(e).split(",").join(h)) : (a = this.format(J(t, this.p, s, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, a, e, o, r) } }), kt("textShadow", { defaultValue: "0px 0px 0px #999", color: !0, multi: !0 }), kt("autoRound,strictUnits", { parser: function(t, e, i, n, s) { return s } }), kt("border", {
                    defaultValue: "0px solid #000",
                    parser: function(t, e, i, n, o, r) {
                        var a = J(t, "borderTopWidth", s, !1, "0px"),
                            l = this.format(e).split(" "),
                            h = l[0].replace(x, "");
                        return "px" !== h && (a = parseFloat(a) / tt(t, "borderTopWidth", 1, h) + h), this.parseComplex(t.style, this.format(a + " " + J(t, "borderTopStyle", s, !1, "solid") + " " + J(t, "borderTopColor", s, !1, "#000")), l.join(" "), o, r)
                    },
                    color: !0,
                    formatter: function(t) { var e = t.split(" "); return e[0] + " " + (e[1] || "solid") + " " + (t.match(mt) || ["#000"])[0] }
                }), kt("borderWidth", { parser: vt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth") }), kt("float,cssFloat,styleFloat", {
                    parser: function(t, e, i, n, s) {
                        var o = t.style,
                            r = "cssFloat" in o ? "cssFloat" : "styleFloat";
                        return new yt(o, r, 0, 0, s, -1, i, !1, 0, o[r], e)
                    }
                });
                var Xt = function(t) {
                    var e, i = this.t,
                        n = i.filter || J(this.data, "filter") || "",
                        s = this.s + this.c * t | 0;
                    100 === s && (-1 === n.indexOf("atrix(") && -1 === n.indexOf("radient(") && -1 === n.indexOf("oader(") ? (i.removeAttribute("filter"), e = !J(this.data, "filter")) : (i.filter = n.replace(C, ""), e = !0)), e || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + s + ")"), -1 === n.indexOf("pacity") ? 0 === s && this.xn1 || (i.filter = n + " alpha(opacity=" + s + ")") : i.filter = n.replace(T, "opacity=" + s))
                };
                kt("opacity,alpha,autoAlpha", {
                    defaultValue: "1",
                    parser: function(t, e, i, n, o, r) {
                        var a = parseFloat(J(t, "opacity", s, !1, "1")),
                            l = t.style,
                            h = "autoAlpha" === i;
                        return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + a), h && 1 === a && "hidden" === J(t, "visibility", s) && 0 !== e && (a = 0), X ? o = new yt(l, "opacity", a, e - a, o) : ((o = new yt(l, "opacity", 100 * a, 100 * (e - a), o)).xn1 = h ? 1 : 0, l.zoom = 1, o.type = 2, o.b = "alpha(opacity=" + o.s + ")", o.e = "alpha(opacity=" + (o.s + o.c) + ")", o.data = t, o.plugin = r, o.setRatio = Xt), h && ((o = new yt(l, "visibility", 0, 0, o, -1, null, !1, 0, 0 !== a ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit")).xs0 = "inherit", n._overwriteProps.push(o.n), n._overwriteProps.push(i)), o
                    }
                });
                var Ut = function(t, e) { e && (t.removeProperty ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) && (e = "-" + e), t.removeProperty(e.replace(P, "-$1").toLowerCase())) : t.removeAttribute(e)) },
                    Vt = function(t) {
                        if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                            this.t.setAttribute("class", 0 === t ? this.b : this.e);
                            for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : Ut(i, e.p), e = e._next;
                            1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                        } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                    };
                kt("className", {
                    parser: function(t, e, n, o, r, a, l) {
                        var h, c, u, d, p, f = t.getAttribute("class") || "",
                            m = t.style.cssText;
                        if ((r = o._classNamePT = new yt(t, n, 0, 0, r, 2)).setRatio = Vt, r.pr = -11, i = !0, r.b = f, c = it(t, s), u = t._gsClassPT) {
                            for (d = {}, p = u.data; p;) d[p.p] = 1, p = p._next;
                            u.setRatio(1)
                        }
                        return t._gsClassPT = r, r.e = "=" !== e.charAt(1) ? e : f.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", r.e), h = nt(t, c, it(t), l, d), t.setAttribute("class", f), r.data = h.firstMPT, t.style.cssText = m, r.xfirst = o.parse(t, h.difs, r, a)
                    }
                });
                var Kt = function(t) {
                    if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                        var e, i, n, s, o, r = this.t.style,
                            a = l.transform.parse;
                        if ("all" === this.e) r.cssText = "", s = !0;
                        else
                            for (n = (e = this.e.split(" ").join("").split(",")).length; --n > -1;) i = e[n], l[i] && (l[i].parse === a ? s = !0 : i = "transformOrigin" === i ? Mt : l[i].p), Ut(r, i);
                        s && (Ut(r, Dt), (o = this.t._gsTransform) && (o.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
                    }
                };
                for (kt("clearProps", { parser: function(t, e, n, s, o) { return (o = new yt(t, n, 0, 0, o, 2)).setRatio = Kt, o.e = e, o.pr = -10, o.data = s._tween, i = !0, o } }), h = "bezier,throwProps,physicsProps,physics2D".split(","), xt = h.length; xt--;) Ct(h[xt]);
                (h = r.prototype)._firstPT = h._lastParsedTransform = h._transform = null, h._onInitTween = function(t, e, a, h) {
                    if (!t.nodeType) return !1;
                    this._target = g = t, this._tween = a, this._vars = e, v = h, c = e.autoRound, i = !1, n = e.suffixMap || r.suffixMap, s = Z(t, ""), o = this._overwriteProps;
                    var p, m, _, y, b, w, x, T, C, S = t.style;
                    if (u && "" === S.zIndex && (("auto" === (p = J(t, "zIndex", s)) || "" === p) && this._addLazySet(S, "zIndex", 0)), "string" == typeof e && (y = S.cssText, p = it(t, s), S.cssText = y + ";" + e, p = nt(t, p, it(t)).difs, !X && k.test(e) && (p.opacity = parseFloat(RegExp.$1)), e = p, S.cssText = y), e.className ? this._firstPT = m = l.className.parse(t, e.className, "className", this, null, null, e) : this._firstPT = m = this.parse(t, e, null), this._transformType) {
                        for (C = 3 === this._transformType, Dt ? d && (u = !0, "" === S.zIndex && (("auto" === (x = J(t, "zIndex", s)) || "" === x) && this._addLazySet(S, "zIndex", 0)), f && this._addLazySet(S, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (C ? "visible" : "hidden"))) : S.zoom = 1, _ = m; _ && _._next;) _ = _._next;
                        T = new yt(t, "transform", 0, 0, null, 2), this._linkCSSP(T, null, _), T.setRatio = Dt ? Yt : qt, T.data = this._transform || Bt(t, s, !0), T.tween = a, T.pr = -1, o.pop()
                    }
                    if (i) {
                        for (; m;) {
                            for (w = m._next, _ = y; _ && _.pr > m.pr;) _ = _._next;
                            (m._prev = _ ? _._prev : b) ? m._prev._next = m: y = m, (m._next = _) ? _._prev = m : b = m, m = w
                        }
                        this._firstPT = y
                    }
                    return !0
                }, h.parse = function(t, e, i, o) {
                    var r, a, h, u, d, p, f, m, _, y, b = t.style;
                    for (r in e) {
                        if ("function" == typeof(p = e[r]) && (p = p(v, g)), a = l[r]) i = a.parse(t, p, r, this, i, o, e);
                        else {
                            if ("--" === r.substr(0, 2)) { this._tween._propLookup[r] = this._addTween.call(this._tween, t.style, "setProperty", Z(t).getPropertyValue(r) + "", p + "", r, !1, r); continue }
                            d = J(t, r, s) + "", _ = "string" == typeof p, "color" === r || "fill" === r || "stroke" === r || -1 !== r.indexOf("Color") || _ && S.test(p) ? (_ || (p = ((p = pt(p)).length > 3 ? "rgba(" : "rgb(") + p.join(",") + ")"), i = wt(b, r, d, p, !0, "transparent", i, 0, o)) : _ && N.test(p) ? i = wt(b, r, d, p, !0, null, i, 0, o) : (f = (h = parseFloat(d)) || 0 === h ? d.substr((h + "").length) : "", ("" === d || "auto" === d) && ("width" === r || "height" === r ? (h = rt(t, r, s), f = "px") : "left" === r || "top" === r ? (h = et(t, r, s), f = "px") : (h = "opacity" !== r ? 0 : 1, f = "")), (y = _ && "=" === p.charAt(1)) ? (u = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), u *= parseFloat(p), m = p.replace(x, "")) : (u = parseFloat(p), m = _ ? p.replace(x, "") : ""), "" === m && (m = r in n ? n[r] : f), p = u || 0 === u ? (y ? u + h : u) + m : e[r], f !== m && ("" !== m || "lineHeight" === r) && (u || 0 === u) && h && (h = tt(t, r, h, f), "%" === m ? (h /= tt(t, r, 100, "%") / 100, !0 !== e.strictUnits && (d = h + "%")) : "em" === m || "rem" === m || "vw" === m || "vh" === m ? h /= tt(t, r, 1, m) : "px" !== m && (u = tt(t, r, u, m), m = "px"), y && (u || 0 === u) && (p = u + h + m)), y && (u += h), !h && 0 !== h || !u && 0 !== u ? void 0 !== b[r] && (p || p + "" != "NaN" && null != p) ? (i = new yt(b, r, u || h || 0, 0, i, -1, r, !1, 0, d, p)).xs0 = "none" !== p || "display" !== r && -1 === r.indexOf("Style") ? p : d : V("invalid " + r + " tween value: " + e[r]) : (i = new yt(b, r, h, u - h, i, 0, r, !1 !== c && ("px" === m || "zIndex" === r), 0, d, p)).xs0 = m)
                        }
                        o && i && !i.plugin && (i.plugin = o)
                    }
                    return i
                }, h.setRatio = function(t) {
                    var e, i, n, s = this._firstPT,
                        o = 1e-6;
                    if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                        if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime)
                            for (; s;) {
                                if (e = s.c * t + s.s, s.r ? e = s.r(e) : o > e && e > -o && (e = 0), s.type)
                                    if (1 === s.type)
                                        if (2 === (n = s.l)) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2;
                                        else if (3 === n) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3;
                                else if (4 === n) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3 + s.xn3 + s.xs4;
                                else if (5 === n) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3 + s.xn3 + s.xs4 + s.xn4 + s.xs5;
                                else {
                                    for (i = s.xs0 + e + s.xs1, n = 1; n < s.l; n++) i += s["xn" + n] + s["xs" + (n + 1)];
                                    s.t[s.p] = i
                                } else -1 === s.type ? s.t[s.p] = s.xs0 : s.setRatio && s.setRatio(t);
                                else s.t[s.p] = e + s.xs0;
                                s = s._next
                            } else
                                for (; s;) 2 !== s.type ? s.t[s.p] = s.b : s.setRatio(t), s = s._next;
                        else
                            for (; s;) {
                                if (2 !== s.type)
                                    if (s.r && -1 !== s.type)
                                        if (e = s.r(s.s + s.c), s.type) {
                                            if (1 === s.type) {
                                                for (n = s.l, i = s.xs0 + e + s.xs1, n = 1; n < s.l; n++) i += s["xn" + n] + s["xs" + (n + 1)];
                                                s.t[s.p] = i
                                            }
                                        } else s.t[s.p] = e + s.xs0;
                                else s.t[s.p] = s.e;
                                else s.setRatio(t);
                                s = s._next
                            }
                }, h._enableTransforms = function(t) { this._transform = this._transform || Bt(this._target, s, !0), this._transformType = this._transform.svg && St || !t && 3 !== this._transformType ? 2 : 3 };
                var Gt = function() { this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0) };
                h._addLazySet = function(t, e, i) {
                    var n = this._firstPT = new yt(t, e, 0, 0, this._firstPT, 2);
                    n.e = i, n.setRatio = Gt, n.data = this
                }, h._linkCSSP = function(t, e, i, n) { return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, n = !0), i ? i._next = t : n || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t }, h._mod = function(t) { for (var e = this._firstPT; e;) "function" == typeof t[e.p] && (e.r = t[e.p]), e = e._next }, h._kill = function(e) {
                    var i, n, s, o = e;
                    if (e.autoAlpha || e.alpha) {
                        for (n in o = {}, e) o[n] = e[n];
                        o.opacity = 1, o.autoAlpha && (o.visibility = 1)
                    }
                    for (e.className && (i = this._classNamePT) && ((s = i.xfirst) && s._prev ? this._linkCSSP(s._prev, i._next, s._prev._prev) : s === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, s._prev), this._classNamePT = null), i = this._firstPT; i;) i.plugin && i.plugin !== n && i.plugin._kill && (i.plugin._kill(e), n = i.plugin), i = i._next;
                    return t.prototype._kill.call(this, o)
                };
                var Qt = function(t, e, i) {
                    var n, s, o, r;
                    if (t.slice)
                        for (s = t.length; --s > -1;) Qt(t[s], e, i);
                    else
                        for (s = (n = t.childNodes).length; --s > -1;) r = (o = n[s]).type, o.style && (e.push(it(o)), i && i.push(o)), 1 !== r && 9 !== r && 11 !== r || !o.childNodes.length || Qt(o, e, i)
                };
                return r.cascadeTo = function(t, i, n) {
                    var s, o, r, a, l = e.to(t, i, n),
                        h = [l],
                        c = [],
                        u = [],
                        d = [],
                        p = e._internals.reservedProps;
                    for (t = l._targets || l.target, Qt(t, c, d), l.render(i, !0, !0), Qt(t, u), l.render(0, !0, !0), l._enabled(!0), s = d.length; --s > -1;)
                        if ((o = nt(d[s], c[s], u[s])).firstMPT) {
                            for (r in o = o.difs, n) p[r] && (o[r] = n[r]);
                            for (r in a = {}, o) a[r] = c[s][r];
                            h.push(e.fromTo(d[s], i, a, o))
                        }
                    return h
                }, t.activate([r]), r
            }, !0),
            function() {
                var t = _gsScope._gsDefine.plugin({ propName: "roundProps", version: "1.7.0", priority: -1, API: 2, init: function(t, e, i) { return this._tween = i, !0 } }),
                    e = function(t) { var e = 1 > t ? Math.pow(10, (t + "").length - 2) : 1; return function(i) { return (Math.round(i / t) * t * e | 0) / e } },
                    i = function(t, e) { for (; t;) t.f || t.blob || (t.m = e || Math.round), t = t._next },
                    n = t.prototype;
                n._onInitAllProps = function() {
                    var t, n, s, o, r = this._tween,
                        a = r.vars.roundProps,
                        l = {},
                        h = r._propLookup.roundProps;
                    if ("object" != typeof a || a.push)
                        for ("string" == typeof a && (a = a.split(",")), s = a.length; --s > -1;) l[a[s]] = Math.round;
                    else
                        for (o in a) l[o] = e(a[o]);
                    for (o in l)
                        for (t = r._firstPT; t;) n = t._next, t.pg ? t.t._mod(l) : t.n === o && (2 === t.f && t.t ? i(t.t._firstPT, l[o]) : (this._add(t.t, o, t.s, t.c, l[o]), n && (n._prev = t._prev), t._prev ? t._prev._next = n : r._firstPT === t && (r._firstPT = n), t._next = t._prev = null, r._propLookup[o] = h)), t = n;
                    return !1
                }, n._add = function(t, e, i, n, s) { this._addTween(t, e, i, i + n, e, s || Math.round), this._overwriteProps.push(e) }
            }(), _gsScope._gsDefine.plugin({ propName: "attr", API: 2, version: "0.6.1", init: function(t, e, i, n) { var s, o; if ("function" != typeof t.setAttribute) return !1; for (s in e) "function" == typeof(o = e[s]) && (o = o(n, t)), this._addTween(t, "setAttribute", t.getAttribute(s) + "", o + "", s, !1, s), this._overwriteProps.push(s); return !0 } }), _gsScope._gsDefine.plugin({
                propName: "directionalRotation",
                version: "0.3.1",
                API: 2,
                init: function(t, e, i, n) {
                    "object" != typeof e && (e = { rotation: e }), this.finals = {};
                    var s, o, r, a, l, h, c = !0 === e.useRadians ? 2 * Math.PI : 360,
                        u = 1e-6;
                    for (s in e) "useRadians" !== s && ("function" == typeof(a = e[s]) && (a = a(n, t)), o = (h = (a + "").split("_"))[0], r = parseFloat("function" != typeof t[s] ? t[s] : t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)]()), l = (a = this.finals[s] = "string" == typeof o && "=" === o.charAt(1) ? r + parseInt(o.charAt(0) + "1", 10) * Number(o.substr(2)) : Number(o) || 0) - r, h.length && (-1 !== (o = h.join("_")).indexOf("short") && ((l %= c) !== l % (c / 2) && (l = 0 > l ? l + c : l - c)), -1 !== o.indexOf("_cw") && 0 > l ? l = (l + 9999999999 * c) % c - (l / c | 0) * c : -1 !== o.indexOf("ccw") && l > 0 && (l = (l - 9999999999 * c) % c - (l / c | 0) * c)), (l > u || -u > l) && (this._addTween(t, s, r, r + l, s), this._overwriteProps.push(s)));
                    return !0
                },
                set: function(t) {
                    var e;
                    if (1 !== t) this._super.setRatio.call(this, t);
                    else
                        for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
                }
            })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(t) {
                var e, i, n, s, o = _gsScope.GreenSockGlobals || _gsScope,
                    r = o.com.greensock,
                    a = 2 * Math.PI,
                    l = Math.PI / 2,
                    h = r._class,
                    c = function(e, i) {
                        var n = h("easing." + e, function() {}, !0),
                            s = n.prototype = new t;
                        return s.constructor = n, s.getRatio = i, n
                    },
                    u = t.register || function() {},
                    d = function(t, e, i, n) { var s = h("easing." + t, { easeOut: new e, easeIn: new i, easeInOut: new n }, !0); return u(s, t), s },
                    p = function(t, e, i) { this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t) },
                    f = function(e, i) {
                        var n = h("easing." + e, function(t) { this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1 }, !0),
                            s = n.prototype = new t;
                        return s.constructor = n, s.getRatio = i, s.config = function(t) { return new n(t) }, n
                    },
                    m = d("Back", f("BackOut", function(t) { return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1 }), f("BackIn", function(t) { return t * t * ((this._p1 + 1) * t - this._p1) }), f("BackInOut", function(t) { return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2) })),
                    g = h("easing.SlowMo", function(t, e, i) { e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = !0 === i }, !0),
                    v = g.prototype = new t;
                return v.constructor = g, v.getRatio = function(t) { var e = t + (.5 - t) * this._p; return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 === t ? 0 : 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e }, g.ease = new g(.7, .7), v.config = g.config = function(t, e, i) { return new g(t, e, i) }, (v = (e = h("easing.SteppedEase", function(t, e) { t = t || 1, this._p1 = 1 / t, this._p2 = t + (e ? 0 : 1), this._p3 = e ? 1 : 0 }, !0)).prototype = new t).constructor = e, v.getRatio = function(t) { return 0 > t ? t = 0 : t >= 1 && (t = .999999999), ((this._p2 * t | 0) + this._p3) * this._p1 }, v.config = e.config = function(t, i) { return new e(t, i) }, (v = (i = h("easing.ExpoScaleEase", function(t, e, i) { this._p1 = Math.log(e / t), this._p2 = e - t, this._p3 = t, this._ease = i }, !0)).prototype = new t).constructor = i, v.getRatio = function(t) { return this._ease && (t = this._ease.getRatio(t)), (this._p3 * Math.exp(this._p1 * t) - this._p3) / this._p2 }, v.config = i.config = function(t, e, n) { return new i(t, e, n) }, (v = (n = h("easing.RoughEase", function(e) {
                    for (var i, n, s, o, r, a, l = (e = e || {}).taper || "none", h = [], c = 0, u = 0 | (e.points || 20), d = u, f = !1 !== e.randomize, m = !0 === e.clamp, g = e.template instanceof t ? e.template : null, v = "number" == typeof e.strength ? .4 * e.strength : .4; --d > -1;) i = f ? Math.random() : 1 / u * d, n = g ? g.getRatio(i) : i, "none" === l ? s = v : "out" === l ? s = (o = 1 - i) * o * v : "in" === l ? s = i * i * v : .5 > i ? s = (o = 2 * i) * o * .5 * v : s = (o = 2 * (1 - i)) * o * .5 * v, f ? n += Math.random() * s - .5 * s : d % 2 ? n += .5 * s : n -= .5 * s, m && (n > 1 ? n = 1 : 0 > n && (n = 0)), h[c++] = { x: i, y: n };
                    for (h.sort(function(t, e) { return t.x - e.x }), a = new p(1, 1, null), d = u; --d > -1;) r = h[d], a = new p(r.x, r.y, a);
                    this._prev = new p(0, 0, 0 !== a.t ? a : a.next)
                }, !0)).prototype = new t).constructor = n, v.getRatio = function(t) {
                    var e = this._prev;
                    if (t > e.t) {
                        for (; e.next && t >= e.t;) e = e.next;
                        e = e.prev
                    } else
                        for (; e.prev && t <= e.t;) e = e.prev;
                    return this._prev = e, e.v + (t - e.t) / e.gap * e.c
                }, v.config = function(t) { return new n(t) }, n.ease = new n, d("Bounce", c("BounceOut", function(t) { return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375 }), c("BounceIn", function(t) { return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375) }), c("BounceInOut", function(t) { var e = .5 > t; return t = 1 / 2.75 > (t = e ? 1 - 2 * t : 2 * t - 1) ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5 })), d("Circ", c("CircOut", function(t) { return Math.sqrt(1 - (t -= 1) * t) }), c("CircIn", function(t) { return -(Math.sqrt(1 - t * t) - 1) }), c("CircInOut", function(t) { return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1) })), d("Elastic", (s = function(e, i, n) {
                    var s = h("easing." + e, function(t, e) { this._p1 = t >= 1 ? t : 1, this._p2 = (e || n) / (1 > t ? t : 1), this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0), this._p2 = a / this._p2 }, !0),
                        o = s.prototype = new t;
                    return o.constructor = s, o.getRatio = i, o.config = function(t, e) { return new s(t, e) }, s
                })("ElasticOut", function(t) { return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1 }, .3), s("ElasticIn", function(t) { return -this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) }, .3), s("ElasticInOut", function(t) { return (t *= 2) < 1 ? this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * -.5 : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * .5 + 1 }, .45)), d("Expo", c("ExpoOut", function(t) { return 1 - Math.pow(2, -10 * t) }), c("ExpoIn", function(t) { return Math.pow(2, 10 * (t - 1)) - .001 }), c("ExpoInOut", function(t) { return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1))) })), d("Sine", c("SineOut", function(t) { return Math.sin(t * l) }), c("SineIn", function(t) { return 1 - Math.cos(t * l) }), c("SineInOut", function(t) { return -.5 * (Math.cos(Math.PI * t) - 1) })), h("easing.EaseLookup", { find: function(e) { return t.map[e] } }, !0), u(o.SlowMo, "SlowMo", "ease,"), u(n, "RoughEase", "ease,"), u(e, "SteppedEase", "ease,"), m
            }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(t, e) {
        "use strict";
        var i = {},
            n = t.document,
            s = t.GreenSockGlobals = t.GreenSockGlobals || t,
            o = s[e];
        if (o) return "undefined" != typeof module && module.exports && (module.exports = o), o;
        var r, a, l, h, c, u = function(t) {
                var e, i = t.split("."),
                    n = s;
                for (e = 0; e < i.length; e++) n[i[e]] = n = n[i[e]] || {};
                return n
            },
            d = u("com.greensock"),
            p = 1e-10,
            f = function(t) {
                var e, i = [],
                    n = t.length;
                for (e = 0; e !== n; i.push(t[e++]));
                return i
            },
            m = function() {},
            g = function() {
                var t = Object.prototype.toString,
                    e = t.call([]);
                return function(i) { return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e) }
            }(),
            v = {},
            _ = function(n, o, r, a) {
                this.sc = v[n] ? v[n].sc : [], v[n] = this, this.gsClass = null, this.func = r;
                var l = [];
                this.check = function(h) {
                    for (var c, d, p, f, m = o.length, g = m; --m > -1;)(c = v[o[m]] || new _(o[m], [])).gsClass ? (l[m] = c.gsClass, g--) : h && c.sc.push(this);
                    if (0 === g && r) {
                        if (p = (d = ("com.greensock." + n).split(".")).pop(), f = u(d.join("."))[p] = this.gsClass = r.apply(r, l), a)
                            if (s[p] = i[p] = f, "undefined" != typeof module && module.exports)
                                if (n === e)
                                    for (m in module.exports = i[e] = f, i) f[m] = i[m];
                                else i[e] && (i[e][p] = f);
                        else "function" == typeof define && define.amd && define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + n.split(".").pop(), [], function() { return f });
                        for (m = 0; m < this.sc.length; m++) this.sc[m].check()
                    }
                }, this.check(!0)
            },
            y = t._gsDefine = function(t, e, i, n) { return new _(t, e, i, n) },
            b = d._class = function(t, e, i) { return e = e || function() {}, y(t, [], function() { return e }, i), e };
        y.globals = s;
        var w = [0, 0, 1, 1],
            x = b("easing.Ease", function(t, e, i, n) { this._func = t, this._type = i || 0, this._power = n || 0, this._params = e ? w.concat(e) : w }, !0),
            T = x.map = {},
            k = x.register = function(t, e, i, n) {
                for (var s, o, r, a, l = e.split(","), h = l.length, c = (i || "easeIn,easeOut,easeInOut").split(","); --h > -1;)
                    for (o = l[h], s = n ? b("easing." + o, null, !0) : d.easing[o] || {}, r = c.length; --r > -1;) a = c[r], T[o + "." + a] = T[a + o] = s[a] = t.getRatio ? t : t[a] || new t
            };
        for ((l = x.prototype)._calcEnd = !1, l.getRatio = function(t) {
                if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                var e = this._type,
                    i = this._power,
                    n = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
                return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n), 1 === e ? 1 - n : 2 === e ? n : .5 > t ? n / 2 : 1 - n / 2
            }, a = (r = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length; --a > -1;) l = r[a] + ",Power" + a, k(new x(null, null, 1, a), l, "easeOut", !0), k(new x(null, null, 2, a), l, "easeIn" + (0 === a ? ",easeNone" : "")), k(new x(null, null, 3, a), l, "easeInOut");
        T.linear = d.easing.Linear.easeIn, T.swing = d.easing.Quad.easeInOut;
        var C = b("events.EventDispatcher", function(t) { this._listeners = {}, this._eventTarget = t || this });
        (l = C.prototype).addEventListener = function(t, e, i, n, s) {
            s = s || 0;
            var o, r, a = this._listeners[t],
                l = 0;
            for (this !== h || c || h.wake(), null == a && (this._listeners[t] = a = []), r = a.length; --r > -1;)(o = a[r]).c === e && o.s === i ? a.splice(r, 1) : 0 === l && o.pr < s && (l = r + 1);
            a.splice(l, 0, { c: e, s: i, up: n, pr: s })
        }, l.removeEventListener = function(t, e) {
            var i, n = this._listeners[t];
            if (n)
                for (i = n.length; --i > -1;)
                    if (n[i].c === e) return void n.splice(i, 1)
        }, l.dispatchEvent = function(t) {
            var e, i, n, s = this._listeners[t];
            if (s)
                for ((e = s.length) > 1 && (s = s.slice(0)), i = this._eventTarget; --e > -1;)(n = s[e]) && (n.up ? n.c.call(n.s || i, { type: t, target: i }) : n.c.call(n.s || i))
        };
        var S = t.requestAnimationFrame,
            P = t.cancelAnimationFrame,
            D = Date.now || function() { return (new Date).getTime() },
            A = D();
        for (a = (r = ["ms", "moz", "webkit", "o"]).length; --a > -1 && !S;) S = t[r[a] + "RequestAnimationFrame"], P = t[r[a] + "CancelAnimationFrame"] || t[r[a] + "CancelRequestAnimationFrame"];
        b("Ticker", function(t, e) {
            var i, s, o, r, a, l = this,
                u = D(),
                d = !(!1 === e || !S) && "auto",
                f = 500,
                g = 33,
                v = "tick",
                _ = function(t) {
                    var e, n, h = D() - A;
                    h > f && (u += h - g), A += h, l.time = (A - u) / 1e3, e = l.time - a, (!i || e > 0 || !0 === t) && (l.frame++, a += e + (e >= r ? .004 : r - e), n = !0), !0 !== t && (o = s(_)), n && l.dispatchEvent(v)
                };
            C.call(l), l.time = l.frame = 0, l.tick = function() { _(!0) }, l.lagSmoothing = function(t, e) { return arguments.length ? (f = t || 1 / p, void(g = Math.min(e, f, 0))) : 1 / p > f }, l.sleep = function() { null != o && (d && P ? P(o) : clearTimeout(o), s = m, o = null, l === h && (c = !1)) }, l.wake = function(t) { null !== o ? l.sleep() : t ? u += -A + (A = D()) : l.frame > 10 && (A = D() - f + 5), s = 0 === i ? m : d && S ? S : function(t) { return setTimeout(t, 1e3 * (a - l.time) + 1 | 0) }, l === h && (c = !0), _(2) }, l.fps = function(t) { return arguments.length ? (r = 1 / ((i = t) || 60), a = this.time + r, void l.wake()) : i }, l.useRAF = function(t) { return arguments.length ? (l.sleep(), d = t, void l.fps(i)) : d }, l.fps(t), setTimeout(function() { "auto" === d && l.frame < 5 && "hidden" !== (n || {}).visibilityState && l.useRAF(!1) }, 1500)
        }), (l = d.Ticker.prototype = new d.events.EventDispatcher).constructor = d.Ticker;
        var M = b("core.Animation", function(t, e) {
            if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = !0 === e.immediateRender, this.data = e.data, this._reversed = !0 === e.reversed, G) {
                c || h.wake();
                var i = this.vars.useFrames ? K : G;
                i.add(this, i._time), this.vars.paused && this.paused(!0)
            }
        });
        h = M.ticker = new d.Ticker, (l = M.prototype)._dirty = l._gc = l._initted = l._paused = !1, l._totalTime = l._time = 0, l._rawPrevTime = -1, l._next = l._last = l._onUpdate = l._timeline = l.timeline = null, l._paused = !1;
        var I = function() {
            c && D() - A > 2e3 && ("hidden" !== (n || {}).visibilityState || !h.lagSmoothing()) && h.wake();
            var t = setTimeout(I, 2e3);
            t.unref && t.unref()
        };
        I(), l.play = function(t, e) { return null != t && this.seek(t, e), this.reversed(!1).paused(!1) }, l.pause = function(t, e) { return null != t && this.seek(t, e), this.paused(!0) }, l.resume = function(t, e) { return null != t && this.seek(t, e), this.paused(!1) }, l.seek = function(t, e) { return this.totalTime(Number(t), !1 !== e) }, l.restart = function(t, e) { return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, !1 !== e, !0) }, l.reverse = function(t, e) { return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1) }, l.render = function() {}, l.invalidate = function() { return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this }, l.isActive = function() {
            var t, e = this._timeline,
                i = this._startTime;
            return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime(!0)) >= i && t < i + this.totalDuration() / this._timeScale - 1e-7
        }, l._enabled = function(t, e) { return c || h.wake(), this._gc = !t, this._active = this.isActive(), !0 !== e && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1 }, l._kill = function() { return this._enabled(!1, !1) }, l.kill = function(t, e) { return this._kill(t, e), this }, l._uncache = function(t) { for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline; return this }, l._swapSelfInParams = function(t) { for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this); return i }, l._callback = function(t) {
            var e = this.vars,
                i = e[t],
                n = e[t + "Params"],
                s = e[t + "Scope"] || e.callbackScope || this;
            switch (n ? n.length : 0) {
                case 0:
                    i.call(s);
                    break;
                case 1:
                    i.call(s, n[0]);
                    break;
                case 2:
                    i.call(s, n[0], n[1]);
                    break;
                default:
                    i.apply(s, n)
            }
        }, l.eventCallback = function(t, e, i, n) {
            if ("on" === (t || "").substr(0, 2)) {
                var s = this.vars;
                if (1 === arguments.length) return s[t];
                null == e ? delete s[t] : (s[t] = e, s[t + "Params"] = g(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, s[t + "Scope"] = n), "onUpdate" === t && (this._onUpdate = e)
            }
            return this
        }, l.delay = function(t) { return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay }, l.duration = function(t) { return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration) }, l.totalDuration = function(t) { return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration }, l.time = function(t, e) { return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time }, l.totalTime = function(t, e, i) {
            if (c || h.wake(), !arguments.length) return this._totalTime;
            if (this._timeline) {
                if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var n = this._totalDuration,
                        s = this._timeline;
                    if (t > n && !i && (t = n), this._startTime = (this._paused ? this._pauseTime : s._time) - (this._reversed ? n - t : t) / this._timeScale, s._dirty || this._uncache(!1), s._timeline)
                        for (; s._timeline;) s._timeline._time !== (s._startTime + s._totalTime) / s._timeScale && s.totalTime(s._totalTime, !0), s = s._timeline
                }
                this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (z.length && Z(), this.render(t, e, !1), z.length && Z())
            }
            return this
        }, l.progress = l.totalProgress = function(t, e) { var i = this.duration(); return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio }, l.startTime = function(t) { return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime }, l.endTime = function(t) { return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale }, l.timeScale = function(t) { if (!arguments.length) return this._timeScale; var e, i; for (t = t || p, this._timeline && this._timeline.smoothChildTiming && (i = (e = this._pauseTime) || 0 === e ? e : this._timeline.totalTime(), this._startTime = i - (i - this._startTime) * this._timeScale / t), this._timeScale = t, i = this.timeline; i && i.timeline;) i._dirty = !0, i.totalDuration(), i = i.timeline; return this }, l.reversed = function(t) { return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed }, l.paused = function(t) { if (!arguments.length) return this._paused; var e, i, n = this._timeline; return t != this._paused && n && (c || t || h.wake(), i = (e = n.rawTime()) - this._pauseTime, !t && n.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && (e = n.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, this.render(e, e === this._totalTime, !0))), this._gc && !t && this._enabled(!0, !1), this };
        var O = b("core.SimpleTimeline", function(t) { M.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0 });
        (l = O.prototype = new M).constructor = O, l.kill()._gc = !1, l._first = l._last = l._recent = null, l._sortChildren = !1, l.add = l.insert = function(t, e) {
            var i, n;
            if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = this.rawTime() - (t._timeline.rawTime() - t._pauseTime)), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), i = this._last, this._sortChildren)
                for (n = t._startTime; i && i._startTime > n;) i = i._prev;
            return i ? (t._next = i._next, i._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = i, this._recent = t, this._timeline && this._uncache(!0), this
        }, l._remove = function(t, e) {
            return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last),
                this._timeline && this._uncache(!0)), this
        }, l.render = function(t, e, i) { var n, s = this._first; for (this._totalTime = this._time = this._rawPrevTime = t; s;) n = s._next, (s._active || t >= s._startTime && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = n }, l.rawTime = function() { return c || h.wake(), this._totalTime };
        var E = b("TweenLite", function(e, i, n) {
                if (M.call(this, i, n), this.render = E.prototype.render, null == e) throw "Cannot tween a null target.";
                this.target = e = "string" != typeof e ? e : E.selector(e) || e;
                var s, o, r, a = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                    l = this.vars.overwrite;
                if (this._overwrite = l = null == l ? V[E.defaultOverwrite] : "number" == typeof l ? l >> 0 : V[l], (a || e instanceof Array || e.push && g(e)) && "number" != typeof e[0])
                    for (this._targets = r = f(e), this._propLookup = [], this._siblings = [], s = 0; s < r.length; s++)(o = r[s]) ? "string" != typeof o ? o.length && o !== t && o[0] && (o[0] === t || o[0].nodeType && o[0].style && !o.nodeType) ? (r.splice(s--, 1), this._targets = r = r.concat(f(o))) : (this._siblings[s] = J(o, this, !1), 1 === l && this._siblings[s].length > 1 && et(o, this, null, 1, this._siblings[s])) : "string" == typeof(o = r[s--] = E.selector(o)) && r.splice(s + 1, 1) : r.splice(s--, 1);
                else this._propLookup = {}, this._siblings = J(e, this, !1), 1 === l && this._siblings.length > 1 && et(e, this, null, 1, this._siblings);
                (this.vars.immediateRender || 0 === i && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -p, this.render(Math.min(0, -this._delay)))
            }, !0),
            $ = function(e) { return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType) },
            N = function(t, e) {
                var i, n = {};
                for (i in t) U[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!q[i] || q[i] && q[i]._autoCSS) || (n[i] = t[i], delete t[i]);
                t.css = n
            };
        (l = E.prototype = new M).constructor = E, l.kill()._gc = !1, l.ratio = 0, l._firstPT = l._targets = l._overwrittenProps = l._startAt = null, l._notifyPluginsOfEnabled = l._lazy = !1, E.version = "2.0.2", E.defaultEase = l._ease = new x(null, null, 1, 1), E.defaultOverwrite = "auto", E.ticker = h, E.autoSleep = 120, E.lagSmoothing = function(t, e) { h.lagSmoothing(t, e) }, E.selector = t.$ || t.jQuery || function(e) { var i = t.$ || t.jQuery; return i ? (E.selector = i, i(e)) : (n || (n = t.document), n ? n.querySelectorAll ? n.querySelectorAll(e) : n.getElementById("#" === e.charAt(0) ? e.substr(1) : e) : e) };
        var z = [],
            H = {},
            L = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
            R = /[\+-]=-?[\.\d]/,
            F = function(t) { for (var e, i = this._firstPT, n = 1e-6; i;) e = i.blob ? 1 === t && null != this.end ? this.end : t ? this.join("") : this.start : i.c * t + i.s, i.m ? e = i.m.call(this._tween, e, this._target || i.t, this._tween) : n > e && e > -n && !i.blob && (e = 0), i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e, i = i._next },
            W = function(t, e, i, n) {
                var s, o, r, a, l, h, c, u = [],
                    d = 0,
                    p = "",
                    f = 0;
                for (u.start = t, u.end = e, t = u[0] = t + "", e = u[1] = e + "", i && (i(u), t = u[0], e = u[1]), u.length = 0, s = t.match(L) || [], o = e.match(L) || [], n && (n._next = null, n.blob = 1, u._firstPT = u._applyPT = n), l = o.length, a = 0; l > a; a++) c = o[a], p += (h = e.substr(d, e.indexOf(c, d) - d)) || !a ? h : ",", d += h.length, f ? f = (f + 1) % 5 : "rgba(" === h.substr(-5) && (f = 1), c === s[a] || s.length <= a ? p += c : (p && (u.push(p), p = ""), r = parseFloat(s[a]), u.push(r), u._firstPT = { _next: u._firstPT, t: u, p: u.length - 1, s: r, c: ("=" === c.charAt(1) ? parseInt(c.charAt(0) + "1", 10) * parseFloat(c.substr(2)) : parseFloat(c) - r) || 0, f: 0, m: f && 4 > f ? Math.round : 0 }), d += c.length;
                return (p += e.substr(d)) && u.push(p), u.setRatio = F, R.test(e) && (u.end = null), u
            },
            j = function(t, e, i, n, s, o, r, a, l) {
                "function" == typeof n && (n = n(l || 0, t));
                var h = typeof t[e],
                    c = "function" !== h ? "" : e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3),
                    u = "get" !== i ? i : c ? r ? t[c](r) : t[c]() : t[e],
                    d = "string" == typeof n && "=" === n.charAt(1),
                    p = { t: t, p: e, s: u, f: "function" === h, pg: 0, n: s || e, m: o ? "function" == typeof o ? o : Math.round : 0, pr: 0, c: d ? parseInt(n.charAt(0) + "1", 10) * parseFloat(n.substr(2)) : parseFloat(n) - u || 0 };
                return ("number" != typeof u || "number" != typeof n && !d) && (r || isNaN(u) || !d && isNaN(n) || "boolean" == typeof u || "boolean" == typeof n ? (p.fp = r, p = { t: W(u, d ? parseFloat(p.s) + p.c + (p.s + "").replace(/[0-9\-\.]/g, "") : n, a || E.defaultStringFilter, p), p: "setRatio", s: 0, c: 1, f: 2, pg: 0, n: s || e, pr: 0, m: 0 }) : (p.s = parseFloat(u), d || (p.c = parseFloat(n) - p.s || 0))), p.c ? ((p._next = this._firstPT) && (p._next._prev = p), this._firstPT = p, p) : void 0
            },
            B = E._internals = { isArray: g, isSelector: $, lazyTweens: z, blobDif: W },
            q = E._plugins = {},
            Y = B.tweenLookup = {},
            X = 0,
            U = B.reservedProps = { ease: 1, delay: 1, overwrite: 1, onComplete: 1, onCompleteParams: 1, onCompleteScope: 1, useFrames: 1, runBackwards: 1, startAt: 1, onUpdate: 1, onUpdateParams: 1, onUpdateScope: 1, onStart: 1, onStartParams: 1, onStartScope: 1, onReverseComplete: 1, onReverseCompleteParams: 1, onReverseCompleteScope: 1, onRepeat: 1, onRepeatParams: 1, onRepeatScope: 1, easeParams: 1, yoyo: 1, immediateRender: 1, repeat: 1, repeatDelay: 1, data: 1, paused: 1, reversed: 1, autoCSS: 1, lazy: 1, onOverwrite: 1, callbackScope: 1, stringFilter: 1, id: 1, yoyoEase: 1 },
            V = { none: 0, all: 1, auto: 2, concurrent: 3, allOnStart: 4, preexisting: 5, "true": 1, "false": 0 },
            K = M._rootFramesTimeline = new O,
            G = M._rootTimeline = new O,
            Q = 30,
            Z = B.lazyRender = function() {
                var t, e = z.length;
                for (H = {}; --e > -1;)(t = z[e]) && !1 !== t._lazy && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                z.length = 0
            };
        G._startTime = h.time, K._startTime = h.frame, G._active = K._active = !0, setTimeout(Z, 1), M._updateRoot = E.render = function() {
            var t, e, i;
            if (z.length && Z(), G.render((h.time - G._startTime) * G._timeScale, !1, !1), K.render((h.frame - K._startTime) * K._timeScale, !1, !1), z.length && Z(), h.frame >= Q) {
                for (i in Q = h.frame + (parseInt(E.autoSleep, 10) || 120), Y) {
                    for (t = (e = Y[i].tweens).length; --t > -1;) e[t]._gc && e.splice(t, 1);
                    0 === e.length && delete Y[i]
                }
                if ((!(i = G._first) || i._paused) && E.autoSleep && !K._first && 1 === h._listeners.tick.length) {
                    for (; i && i._paused;) i = i._next;
                    i || h.sleep()
                }
            }
        }, h.addEventListener("tick", M._updateRoot);
        var J = function(t, e, i) {
                var n, s, o = t._gsTweenID;
                if (Y[o || (t._gsTweenID = o = "t" + X++)] || (Y[o] = { target: t, tweens: [] }), e && ((n = Y[o].tweens)[s = n.length] = e, i))
                    for (; --s > -1;) n[s] === e && n.splice(s, 1);
                return Y[o].tweens
            },
            tt = function(t, e, i, n) { var s, o, r = t.vars.onOverwrite; return r && (s = r(t, e, i, n)), (r = E.onOverwrite) && (o = r(t, e, i, n)), !1 !== s && !1 !== o },
            et = function(t, e, i, n, s) {
                var o, r, a, l;
                if (1 === n || n >= 4) {
                    for (l = s.length, o = 0; l > o; o++)
                        if ((a = s[o]) !== e) a._gc || a._kill(null, t, e) && (r = !0);
                        else if (5 === n) break;
                    return r
                }
                var h, c = e._startTime + p,
                    u = [],
                    d = 0,
                    f = 0 === e._duration;
                for (o = s.length; --o > -1;)(a = s[o]) === e || a._gc || a._paused || (a._timeline !== e._timeline ? (h = h || it(e, 0, f), 0 === it(a, h, f) && (u[d++] = a)) : a._startTime <= c && a._startTime + a.totalDuration() / a._timeScale > c && ((f || !a._initted) && c - a._startTime <= 2e-10 || (u[d++] = a)));
                for (o = d; --o > -1;)
                    if (l = (a = u[o])._firstPT, 2 === n && a._kill(i, t, e) && (r = !0), 2 !== n || !a._firstPT && a._initted && l) {
                        if (2 !== n && !tt(a, e)) continue;
                        a._enabled(!1, !1) && (r = !0)
                    }
                return r
            },
            it = function(t, e, i) {
                for (var n = t._timeline, s = n._timeScale, o = t._startTime; n._timeline;) {
                    if (o += n._startTime, s *= n._timeScale, n._paused) return -100;
                    n = n._timeline
                }
                return (o /= s) > e ? o - e : i && o === e || !t._initted && 2 * p > o - e ? p : (o += t.totalDuration() / t._timeScale / s) > e + p ? 0 : o - e - p
            };
        l._init = function() {
            var t, e, i, n, s, o, r = this.vars,
                a = this._overwrittenProps,
                l = this._duration,
                h = !!r.immediateRender,
                c = r.ease;
            if (r.startAt) {
                for (n in this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), s = {}, r.startAt) s[n] = r.startAt[n];
                if (s.data = "isStart", s.overwrite = !1, s.immediateRender = !0, s.lazy = h && !1 !== r.lazy, s.startAt = s.delay = null, s.onUpdate = r.onUpdate, s.onUpdateParams = r.onUpdateParams, s.onUpdateScope = r.onUpdateScope || r.callbackScope || this, this._startAt = E.to(this.target || {}, 0, s), h)
                    if (this._time > 0) this._startAt = null;
                    else if (0 !== l) return
            } else if (r.runBackwards && 0 !== l)
                if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                else { for (n in 0 !== this._time && (h = !1), i = {}, r) U[n] && "autoCSS" !== n || (i[n] = r[n]); if (i.overwrite = 0, i.data = "isFromStart", i.lazy = h && !1 !== r.lazy, i.immediateRender = h, this._startAt = E.to(this.target, 0, i), h) { if (0 === this._time) return } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null) }
            if (this._ease = c = c ? c instanceof x ? c : "function" == typeof c ? new x(c, r.easeParams) : T[c] || E.defaultEase : E.defaultEase, r.easeParams instanceof Array && c.config && (this._ease = c.config.apply(c, r.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                for (o = this._targets.length, t = 0; o > t; t++) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], a ? a[t] : null, t) && (e = !0);
            else e = this._initProps(this.target, this._propLookup, this._siblings, a, 0);
            if (e && E._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), r.runBackwards)
                for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
            this._onUpdate = r.onUpdate, this._initted = !0
        }, l._initProps = function(e, i, n, s, o) {
            var r, a, l, h, c, u;
            if (null == e) return !1;
            for (r in H[e._gsTweenID] && Z(), this.vars.css || e.style && e !== t && e.nodeType && q.css && !1 !== this.vars.autoCSS && N(this.vars, e), this.vars)
                if (u = this.vars[r], U[r]) u && (u instanceof Array || u.push && g(u)) && -1 !== u.join("").indexOf("{self}") && (this.vars[r] = u = this._swapSelfInParams(u, this));
                else if (q[r] && (h = new q[r])._onInitTween(e, this.vars[r], this, o)) {
                for (this._firstPT = c = { _next: this._firstPT, t: h, p: "setRatio", s: 0, c: 1, f: 1, n: r, pg: 1, pr: h._priority, m: 0 }, a = h._overwriteProps.length; --a > -1;) i[h._overwriteProps[a]] = this._firstPT;
                (h._priority || h._onInitAllProps) && (l = !0), (h._onDisable || h._onEnable) && (this._notifyPluginsOfEnabled = !0), c._next && (c._next._prev = c)
            } else i[r] = j.call(this, e, r, "get", u, r, 0, null, this.vars.stringFilter, o);
            return s && this._kill(s, e) ? this._initProps(e, i, n, s, o) : this._overwrite > 1 && this._firstPT && n.length > 1 && et(e, this, i, this._overwrite, n) ? (this._kill(i, e), this._initProps(e, i, n, s, o)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (H[e._gsTweenID] = !0), l)
        }, l.render = function(t, e, i) {
            var n, s, o, r, a = this._time,
                l = this._duration,
                h = this._rawPrevTime;
            if (t >= l - 1e-7 && t >= 0) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (n = !0, s = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 > h || 0 >= t && t >= -1e-7 || h === p && "isPause" !== this.data) && h !== t && (i = !0, h > p && (s = "onReverseComplete")), this._rawPrevTime = r = !e || t || h === t ? t : p);
            else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== a || 0 === l && h > 0) && (s = "onReverseComplete", n = this._reversed), 0 > t && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (h >= 0 && (h !== p || "isPause" !== this.data) && (i = !0), this._rawPrevTime = r = !e || t || h === t ? t : p)), (!this._initted || this._startAt && this._startAt.progress()) && (i = !0);
            else if (this._totalTime = this._time = t, this._easeType) {
                var c = t / l,
                    u = this._easeType,
                    d = this._easePower;
                (1 === u || 3 === u && c >= .5) && (c = 1 - c), 3 === u && (c *= 2), 1 === d ? c *= c : 2 === d ? c *= c * c : 3 === d ? c *= c * c * c : 4 === d && (c *= c * c * c * c), this.ratio = 1 === u ? 1 - c : 2 === u ? c : .5 > t / l ? c / 2 : 1 - c / 2
            } else this.ratio = this._ease.getRatio(t / l);
            if (this._time !== a || i) {
                if (!this._initted) {
                    if (this._init(), !this._initted || this._gc) return;
                    if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = a, this._rawPrevTime = h, z.push(this), void(this._lazy = [t, e]);
                    this._time && !n ? this.ratio = this._ease.getRatio(this._time / l) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== a && t >= 0 && (this._active = !0), 0 === a && (this._startAt && (t >= 0 ? this._startAt.render(t, !0, i) : s || (s = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (e || this._callback("onStart"))), o = this._firstPT; o;) o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s, o = o._next;
                this._onUpdate && (0 > t && this._startAt && -1e-4 !== t && this._startAt.render(t, !0, i), e || (this._time !== a || n || i) && this._callback("onUpdate")), s && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && -1e-4 !== t && this._startAt.render(t, !0, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[s] && this._callback(s), 0 === l && this._rawPrevTime === p && r !== p && (this._rawPrevTime = 0))
            }
        }, l._kill = function(t, e, i) {
            if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
            e = "string" != typeof e ? e || this._targets || this.target : E.selector(e) || e;
            var n, s, o, r, a, l, h, c, u, d = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline,
                p = this._firstPT;
            if ((g(e) || $(e)) && "number" != typeof e[0])
                for (n = e.length; --n > -1;) this._kill(t, e[n], i) && (l = !0);
            else {
                if (this._targets) {
                    for (n = this._targets.length; --n > -1;)
                        if (e === this._targets[n]) { a = this._propLookup[n] || {}, this._overwrittenProps = this._overwrittenProps || [], s = this._overwrittenProps[n] = t ? this._overwrittenProps[n] || {} : "all"; break }
                } else {
                    if (e !== this.target) return !1;
                    a = this._propLookup, s = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                }
                if (a) { if (h = t || a, c = t !== s && "all" !== s && t !== a && ("object" != typeof t || !t._tempKill), i && (E.onOverwrite || this.vars.onOverwrite)) { for (o in h) a[o] && (u || (u = []), u.push(o)); if ((u || !t) && !tt(this, i, e, u)) return !1 } for (o in h)(r = a[o]) && (d && (r.f ? r.t[r.p](r.s) : r.t[r.p] = r.s, l = !0), r.pg && r.t._kill(h) && (l = !0), r.pg && 0 !== r.t._overwriteProps.length || (r._prev ? r._prev._next = r._next : r === this._firstPT && (this._firstPT = r._next), r._next && (r._next._prev = r._prev), r._next = r._prev = null), delete a[o]), c && (s[o] = 1);!this._firstPT && this._initted && p && this._enabled(!1, !1) }
            }
            return l
        }, l.invalidate = function() { return this._notifyPluginsOfEnabled && E._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], M.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -p, this.render(Math.min(0, -this._delay))), this }, l._enabled = function(t, e) {
            if (c || h.wake(), t && this._gc) {
                var i, n = this._targets;
                if (n)
                    for (i = n.length; --i > -1;) this._siblings[i] = J(n[i], this, !0);
                else this._siblings = J(this.target, this, !0)
            }
            return M.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && E._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
        }, E.to = function(t, e, i) { return new E(t, e, i) }, E.from = function(t, e, i) { return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new E(t, e, i) }, E.fromTo = function(t, e, i, n) { return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new E(t, e, n) }, E.delayedCall = function(t, e, i, n, s) { return new E(e, 0, { delay: t, onComplete: e, onCompleteParams: i, callbackScope: n, onReverseComplete: e, onReverseCompleteParams: i, immediateRender: !1, lazy: !1, useFrames: s, overwrite: 0 }) }, E.set = function(t, e) { return new E(t, 0, e) }, E.getTweensOf = function(t, e) {
            if (null == t) return [];
            var i, n, s, o;
            if (t = "string" != typeof t ? t : E.selector(t) || t, (g(t) || $(t)) && "number" != typeof t[0]) {
                for (i = t.length, n = []; --i > -1;) n = n.concat(E.getTweensOf(t[i], e));
                for (i = n.length; --i > -1;)
                    for (o = n[i], s = i; --s > -1;) o === n[s] && n.splice(i, 1)
            } else if (t._gsTweenID)
                for (i = (n = J(t).concat()).length; --i > -1;)(n[i]._gc || e && !n[i].isActive()) && n.splice(i, 1);
            return n || []
        }, E.killTweensOf = E.killDelayedCallsTo = function(t, e, i) { "object" == typeof e && (i = e, e = !1); for (var n = E.getTweensOf(t, e), s = n.length; --s > -1;) n[s]._kill(i, t) };
        var nt = b("plugins.TweenPlugin", function(t, e) { this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = nt.prototype }, !0);
        if (l = nt.prototype, nt.version = "1.19.0", nt.API = 2, l._firstPT = null, l._addTween = j, l.setRatio = F, l._kill = function(t) {
                var e, i = this._overwriteProps,
                    n = this._firstPT;
                if (null != t[this._propName]) this._overwriteProps = [];
                else
                    for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
                for (; n;) null != t[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? (n._prev._next = n._next, n._prev = null) : this._firstPT === n && (this._firstPT = n._next)), n = n._next;
                return !1
            }, l._mod = l._roundProps = function(t) { for (var e, i = this._firstPT; i;)(e = t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && "function" == typeof e && (2 === i.f ? i.t._applyPT.m = e : i.m = e), i = i._next }, E._onPluginEvent = function(t, e) {
                var i, n, s, o, r, a = e._firstPT;
                if ("_onInitAllProps" === t) {
                    for (; a;) {
                        for (r = a._next, n = s; n && n.pr > a.pr;) n = n._next;
                        (a._prev = n ? n._prev : o) ? a._prev._next = a: s = a, (a._next = n) ? n._prev = a : o = a, a = r
                    }
                    a = e._firstPT = s
                }
                for (; a;) a.pg && "function" == typeof a.t[t] && a.t[t]() && (i = !0), a = a._next;
                return i
            }, nt.activate = function(t) { for (var e = t.length; --e > -1;) t[e].API === nt.API && (q[(new t[e])._propName] = t[e]); return !0 }, y.plugin = function(t) {
                if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                var e, i = t.propName,
                    n = t.priority || 0,
                    s = t.overwriteProps,
                    o = { init: "_onInitTween", set: "setRatio", kill: "_kill", round: "_mod", mod: "_mod", initAll: "_onInitAllProps" },
                    r = b("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() { nt.call(this, i, n), this._overwriteProps = s || [] }, !0 === t.global),
                    a = r.prototype = new nt(i);
                for (e in a.constructor = r, r.API = t.API, o) "function" == typeof t[e] && (a[o[e]] = t[e]);
                return r.version = t.version, nt.activate([r]), r
            }, r = t._gsQueue) { for (a = 0; a < r.length; a++) r[a](); for (l in v) v[l].func || t.console.log("GSAP encountered missing dependency: " + l) }
        c = !1
    }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax"),
    function(t, e) {
        if ("function" == typeof define && define.amd) define(["module", "exports"], e);
        else if ("undefined" != typeof exports) e(module, exports);
        else {
            var i = { exports: {} };
            e(i, i.exports), t.autosize = i.exports
        }
    }(this, function(t, e) {
        "use strict";

        function i(t) {
            function e(e) {
                var i = t.style.width;
                t.style.width = "0px", t.offsetWidth, t.style.width = i, t.style.overflowY = e
            }

            function i() {
                if (0 !== t.scrollHeight) {
                    var e = function(t) { for (var e = []; t && t.parentNode && t.parentNode instanceof Element;) t.parentNode.scrollTop && e.push({ node: t.parentNode, scrollTop: t.parentNode.scrollTop }), t = t.parentNode; return e }(t),
                        i = document.documentElement && document.documentElement.scrollTop;
                    t.style.height = "", t.style.height = t.scrollHeight + o + "px", r = t.clientWidth, e.forEach(function(t) { t.node.scrollTop = t.scrollTop }), i && (document.documentElement.scrollTop = i)
                }
            }

            function n() {
                i();
                var n = Math.round(parseFloat(t.style.height)),
                    s = window.getComputedStyle(t, null),
                    o = "content-box" === s.boxSizing ? Math.round(parseFloat(s.height)) : t.offsetHeight;
                if (o < n ? "hidden" === s.overflowY && (e("scroll"), i(), o = "content-box" === s.boxSizing ? Math.round(parseFloat(window.getComputedStyle(t, null).height)) : t.offsetHeight) : "hidden" !== s.overflowY && (e("hidden"), i(), o = "content-box" === s.boxSizing ? Math.round(parseFloat(window.getComputedStyle(t, null).height)) : t.offsetHeight), h !== o) { h = o; var r = l("autosize:resized"); try { t.dispatchEvent(r) } catch (n) {} }
            }
            if (t && t.nodeName && "TEXTAREA" === t.nodeName && !a.has(t)) {
                var s, o = null,
                    r = null,
                    h = null,
                    c = function() { t.clientWidth !== r && n() },
                    u = function(e) { window.removeEventListener("resize", c, !1), t.removeEventListener("input", n, !1), t.removeEventListener("keyup", n, !1), t.removeEventListener("autosize:destroy", u, !1), t.removeEventListener("autosize:update", n, !1), Object.keys(e).forEach(function(i) { t.style[i] = e[i] }), a["delete"](t) }.bind(t, { height: t.style.height, resize: t.style.resize, overflowY: t.style.overflowY, overflowX: t.style.overflowX, wordWrap: t.style.wordWrap });
                t.addEventListener("autosize:destroy", u, !1), "onpropertychange" in t && "oninput" in t && t.addEventListener("keyup", n, !1), window.addEventListener("resize", c, !1), t.addEventListener("input", n, !1), t.addEventListener("autosize:update", n, !1), t.style.overflowX = "hidden", t.style.wordWrap = "break-word", a.set(t, { destroy: u, update: n }), "vertical" === (s = window.getComputedStyle(t, null)).resize ? t.style.resize = "none" : "both" === s.resize && (t.style.resize = "horizontal"), o = "content-box" === s.boxSizing ? -(parseFloat(s.paddingTop) + parseFloat(s.paddingBottom)) : parseFloat(s.borderTopWidth) + parseFloat(s.borderBottomWidth), isNaN(o) && (o = 0), n()
            }
        }

        function n(t) {
            var e = a.get(t);
            e && e.destroy()
        }

        function s(t) {
            var e = a.get(t);
            e && e.update()
        }
        var o, r, a = "function" == typeof Map ? new Map : (o = [], r = [], { has: function(t) { return -1 < o.indexOf(t) }, get: function(t) { return r[o.indexOf(t)] }, set: function(t, e) {-1 === o.indexOf(t) && (o.push(t), r.push(e)) }, "delete": function(t) { var e = o.indexOf(t); - 1 < e && (o.splice(e, 1), r.splice(e, 1)) } }),
            l = function(t) { return new Event(t, { bubbles: !0 }) };
        try { new Event("test") } catch (t) { l = function(t) { var e = document.createEvent("Event"); return e.initEvent(t, !0, !1), e } }
        var h = null;
        "undefined" == typeof window || "function" != typeof window.getComputedStyle ? ((h = function(t) { return t }).destroy = function(t) { return t }, h.update = function(t) { return t }) : ((h = function(t) { return t && Array.prototype.forEach.call(t.length ? t : [t], function(t) { return i(t) }), t }).destroy = function(t) { return t && Array.prototype.forEach.call(t.length ? t : [t], n), t }, h.update = function(t) { return t && Array.prototype.forEach.call(t.length ? t : [t], s), t }), e["default"] = h, t.exports = e["default"]
    });
var AppYalantis, psParticle = function(t) { this.ps = t, this.ttl = null, this.color = t.colorArr, this.next = null, this.prev = null, this.gravityX = 0, this.gravityY = 0, this.x = Math.random() * t.cw, this.y = Math.random() * t.ch, this.velocityX = 10 * Math.random() - 5, this.velocityY = 10 * Math.random() - 5 };
psParticle.prototype.move = function() {
        var t = this.ps,
            e = this;
        if (null != this.ttl && this.ttl-- <= 0) t.swapList(e, t.pxlBuffer, t.recycleBuffer), this.ttl = null;
        else {
            var i = this.gravityX + t.swipeOffset - this.x,
                n = this.gravityY - this.y,
                s = Math.sqrt(Math.pow(i, 2) + Math.pow(n, 2)),
                o = Math.atan2(n, i),
                r = .01 * s;
            1 == t.restless ? r += .1 * Math.random() - .05 : r < .01 && (this.x = this.gravityX + .25, this.y = this.gravityY + .25);
            var a = 0,
                l = 0;
            if (t.mx >= 0 && t.mouseForce) {
                var h = this.x - t.mx,
                    c = this.y - t.my;
                a = Math.min(t.mouseForce / (Math.pow(h, 2) + Math.pow(c, 2)), t.mouseForce), l = Math.atan2(c, h), "function" == typeof this.color && (l += Math.PI, a *= .001 + .1 * Math.random() - .05)
            } else a = 0, l = 0;
            this.velocityX += r * Math.cos(o) + a * Math.cos(l), this.velocityY += r * Math.sin(o) + a * Math.sin(l), this.velocityX *= .92, this.velocityY *= .92, this.x += this.velocityX, this.y += this.velocityY
        }
    }, ParticleSlider.prototype.Particle = psParticle, ParticleSlider.prototype.swapList = function(t, e, i) {
        var n = this;
        null == t ? t = new n.Particle(n) : e.first == t ? null != t.next ? (t.next.prev = null, e.first = t.next) : e.first = null : null == t.next ? t.prev.next = null : (t.prev.next = t.next, t.next.prev = t.prev), null == i.first ? (i.first = t, t.prev = null, t.next = null) : (t.next = i.first, i.first.prev = t, i.first = t, t.prev = null)
    }, ParticleSlider.prototype.parseColor = function(t) {
        var e;
        t = t.replace(" ", "");
        if (e = /^#([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})/.exec(t)) e = [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)];
        else if (e = /^#([\da-fA-F])([\da-fA-F])([\da-fA-F])/.exec(t)) e = [17 * parseInt(e[1], 16), 17 * parseInt(e[2], 16), 17 * parseInt(e[3], 16)];
        else if (e = /^rgba\(([\d]+),([\d]+),([\d]+),([\d]+|[\d]*.[\d]+)\)/.exec(t)) e = [+e[1], +e[2], +e[3], +e[4]];
        else {
            if (!(e = /^rgb\(([\d]+),([\d]+),([\d]+)\)/.exec(t))) return null;
            e = [+e[1], +e[2], +e[3]]
        }
        return isNaN(e[3]) && (e[3] = 1), e[3] *= 255, e
    }, ParticleSlider.prototype.loadingStep = function() {
        var t = this;
        t.imagesLoaded++, (t.imagesLoaded >= 3 || 0 == t.showArrowControls) && (t.resize(), t.slideDelay > 0 && (t.nextSlideTimer = setTimeout(function() { t.nextSlide() }, 1e3 * t.slideDelay)))
    }, ParticleSlider.prototype.$ = function(t, e, i) {
        var n = this;
        if ("." == t[0]) {
            var s = t.substr(1);
            e || (e = n.$$children);
            for (var o = [], r = 0, a = e.length; r < a; r++) e[r].className && e[r].className == s && o.push(e[r]);
            return 0 == o.length ? null : 1 != o.length || i ? o : o[0]
        }
        return document.getElementById(t.substr(1))
    }, ParticleSlider.prototype.nextFrame = function() {
        var t = this;
        1 == t.mouseDownRegion && t.mx < t.cw / 2 || -1 == t.mouseDownRegion && t.mx > t.cw / 2 ? t.swipeOffset = t.mx - t.cw / 2 : t.swipeOffset = 0;
        for (var e = t.pxlBuffer.first, i = null; null != e;) i = e.next, e.move(), e = i;
        if (t.drawParticles(), t.frame++ % 25 == 0 && (t.cw != t.getCw() || t.ch != t.getCh())) {
            var n = t.getCh(),
                s = t.getCw();
            t.ch != s && "function" == typeof t.onWidthChange && t.onWidthChange(t, s), t.ch != n && "function" == typeof t.onHeightChange && t.onHeightChange(t, n), "function" == typeof t.onSizeChange && t.onSizeChange(t, s, n), t.resize()
        }
        setTimeout(function() { t.requestAnimationFrame(function() { t.nextFrame() }) }, 15)
    }, ParticleSlider.prototype.nextSlide = function(t) {
        var e = this;
        null != e.nextSlideTimer && e.imgs.length > 1 ? (e.currImg = (e.currImg + e.imgs.length + (t || 1)) % e.imgs.length, e.resize(), e.slideDelay > 0 && (e.nextSlideTimer = setTimeout(function() { e.nextSlide() }, 1e3 * e.slideDelay))) : e.slideDelay > 0 && (e.nextSlideTimer = setTimeout(function() { e.nextSlide() }, 1e3 * e.slideDelay)), "function" == typeof e.onNextSlide && e.onNextSlide(e.currImg)
    }, ParticleSlider.prototype.drawParticles = function() {
        for (var t, e, i, n, s, o, r = this, a = r.ctx.createImageData(r.cw, r.ch), l = a.data, h = r.pxlBuffer.first; null != h;) {
            for (e = ~~h.x, i = ~~h.y, n = e; n < e + r.ptlSize && n >= 0 && n < r.cw; n++)
                for (s = i; s < i + r.ptlSize && s >= 0 && s < r.ch; s++) t = 4 * (s * a.width + n), o = "function" == typeof h.color ? h.color() : h.color, l[t + 0] = o[0], l[t + 1] = o[1], l[t + 2] = o[2], l[t + 3] = o[3];
            h = h.next
        }
        a.data = l, r.ctx.putImageData(a, 0, 0)
    }, ParticleSlider.prototype.getPixelFromImageData = function(t, e, n) {
        for (var s = this, o = [], r = 0; r < t.width; r += s.ptlGap + 1)
            for (var a = 0; a < t.height; a += s.ptlGap + 1) i = 4 * (a * t.width + r), t.data[i + 3] > 0 && o.push({ x: e + r, y: n + a, color: 1 == s.monochrome ? [s.colorArr[0], s.colorArr[1], s.colorArr[2], s.colorArr[3]] : [t.data[i], t.data[i + 1], t.data[i + 2], t.data[i + 3]] });
        return o
    }, ParticleSlider.prototype.init = function(t) {
        var e = this;
        if (e.imgs.length > 0) {
            e.$srcCanv.width = e.imgs[e.currImg].width, e.$srcCanv.height = e.imgs[e.currImg].height, e.srcCtx.clearRect(0, 0, e.$srcCanv.width, e.$srcCanv.height), e.srcCtx.drawImage(e.imgs[e.currImg], 0, 0);
            var i = e.getPixelFromImageData(e.srcCtx.getImageData(0, 0, e.$srcCanv.width, e.$srcCanv.height), ~~(e.cw / 2 - e.$srcCanv.width / 2), ~~(e.ch / 2 - e.$srcCanv.height / 2));
            if (1 == e.showArrowControls) {
                e.prevCtx.clearRect(0, 0, e.$prevCanv.width, e.$prevCanv.height), e.prevCtx.drawImage(e.imgControlPrev, 0, 0);
                for (var n = e.getPixelFromImageData(e.prevCtx.getImageData(0, 0, e.$prevCanv.width, e.$prevCanv.height), e.arrowPadding, ~~(e.ch / 2 - e.$prevCanv.height / 2)), s = 0, o = n.length; s < o; s++) n[s].color = function() { return e.mx >= 0 && e.mx < 2 * e.arrowPadding + e.$prevCanv.width ? e.hoverColorArr : e.colorArr }, i.push(n[s]);
                e.nextCtx.clearRect(0, 0, e.$nextCanv.width, e.$nextCanv.height), e.nextCtx.drawImage(e.imgControlNext, 0, 0);
                var r = e.getPixelFromImageData(e.nextCtx.getImageData(0, 0, e.$nextCanv.width, e.$nextCanv.height), e.cw - e.arrowPadding - e.$nextCanv.width, ~~(e.ch / 2 - e.$nextCanv.height / 2));
                for (s = 0, o = r.length; s < o; s++) r[s].color = function() { return e.mx > 0 && e.mx > e.cw - (2 * e.arrowPadding + e.$nextCanv.width) ? e.hoverColorArr : e.colorArr }, i.push(r[s])
            }
            e.currImg == e.lastImg && 1 != t || (i.shuffle(), e.lastImg = e.currImg);
            var a = e.pxlBuffer.first;
            for (s = 0, o = i.length; s < o; s++) {
                var l = null;
                null != a ? (l = a, a = a.next) : (e.swapList(e.recycleBuffer.first, e.recycleBuffer, e.pxlBuffer), l = e.pxlBuffer.first), l.gravityX = i[s].x, l.gravityY = i[s].y, l.color = i[s].color
            }
            for (; null != a;) a.ttl = ~~(10 * Math.random()), a.gravityY = ~~(e.ch * Math.random()), a.gravityX = ~~(e.cw * Math.random()), a = a.next;
            e.$overlay.innerHTML = e.$$slides[e.currImg].innerHTML
        }
    }, ParticleSlider.prototype.getCw = function() { var t = this; return Math.min(document.body.clientWidth, t.width, t.$container.clientWidth) }, ParticleSlider.prototype.getCh = function() { var t = this; return Math.min(document.body.clientHeight, t.height, t.$container.clientHeight) }, ParticleSlider.prototype.resize = function() {
        var t = this;
        t.cw = t.getCw(), t.ch = t.getCh(), t.$canv.width = t.cw, t.$canv.height = t.ch, t.init(!0)
    }, ParticleSlider.prototype.setColor = function(t) {
        var e = this;
        e.colorArr = e.parseColor(t)
    }, ParticleSlider.prototype.setHoverColor = function(t) {
        var e = this;
        e.hoverColorArr = e.parseColor(t)
    }, ParticleSlider.prototype.requestAnimationFrame = function(t) {
        (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) { window.setTimeout(t, 1e3 / 60) })(t)
    },
    function(t) { "use strict"; "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof exports ? module.exports = t(require("jquery")) : t(jQuery) }(function(t) {
        "use strict";
        var e = window.Slick || {};
        (e = function() {
            var e = 0;
            return function(i, n) {
                var s, o = this;
                o.defaults = { accessibility: !0, adaptiveHeight: !1, appendArrows: t(i), appendDots: t(i), arrows: !0, asNavFor: null, prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>', nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>', autoplay: !1, autoplaySpeed: 3e3, centerMode: !1, centerPadding: "50px", cssEase: "ease", customPaging: function(e, i) { return t('<button type="button" />').text(i + 1) }, dots: !1, dotsClass: "slick-dots", draggable: !0, easing: "linear", edgeFriction: .35, fade: !1, focusOnSelect: !1, focusOnChange: !1, infinite: !0, initialSlide: 0, lazyLoad: "ondemand", mobileFirst: !1, pauseOnHover: !0, pauseOnFocus: !0, pauseOnDotsHover: !1, respondTo: "window", responsive: null, rows: 1, rtl: !1, slide: "", slidesPerRow: 1, slidesToShow: 1, slidesToScroll: 1, speed: 500, swipe: !0, swipeToSlide: !1, touchMove: !0, touchThreshold: 5, useCSS: !0, useTransform: !0, variableWidth: !1, vertical: !1, verticalSwiping: !1, waitForAnimate: !0, zIndex: 1e3 }, o.initials = { animating: !1, dragging: !1, autoPlayTimer: null, currentDirection: 0, currentLeft: null, currentSlide: 0, direction: 1, $dots: null, listWidth: null, listHeight: null, loadIndex: 0, $nextArrow: null, $prevArrow: null, scrolling: !1, slideCount: null, slideWidth: null, $slideTrack: null, $slides: null, sliding: !1, slideOffset: 0, swipeLeft: null, swiping: !1, $list: null, touchObject: {}, transformsEnabled: !1, unslicked: !1 }, t.extend(o, o.initials), o.activeBreakpoint = null, o.animType = null, o.animProp = null, o.breakpoints = [], o.breakpointSettings = [], o.cssTransitions = !1, o.focussed = !1, o.interrupted = !1, o.hidden = "hidden", o.paused = !0, o.positionProp = null, o.respondTo = null, o.rowCount = 1, o.shouldClick = !0, o.$slider = t(i), o.$slidesCache = null, o.transformType = null, o.transitionType = null, o.visibilityChange = "visibilitychange", o.windowWidth = 0, o.windowTimer = null, s = t(i).data("slick") || {}, o.options = t.extend({}, o.defaults, n, s), o.currentSlide = o.options.initialSlide, o.originalSettings = o.options, void 0 !== document.mozHidden ? (o.hidden = "mozHidden", o.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (o.hidden = "webkitHidden", o.visibilityChange = "webkitvisibilitychange"), o.autoPlay = t.proxy(o.autoPlay, o), o.autoPlayClear = t.proxy(o.autoPlayClear, o), o.autoPlayIterator = t.proxy(o.autoPlayIterator, o), o.changeSlide = t.proxy(o.changeSlide, o), o.clickHandler = t.proxy(o.clickHandler, o), o.selectHandler = t.proxy(o.selectHandler, o), o.setPosition = t.proxy(o.setPosition, o), o.swipeHandler = t.proxy(o.swipeHandler, o), o.dragHandler = t.proxy(o.dragHandler, o), o.keyHandler = t.proxy(o.keyHandler, o), o.instanceUid = e++, o.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, o.registerBreakpoints(), o.init(!0)
            }
        }()).prototype.activateADA = function() { this.$slideTrack.find(".slick-active").attr({ "aria-hidden": "false" }).find("a, input, button, select").attr({ tabindex: "0" }) }, e.prototype.addSlide = e.prototype.slickAdd = function(e, i, n) {
                var s = this;
                if ("boolean" == typeof i) n = i, i = null;
                else if (i < 0 || i >= s.slideCount) return !1;
                s.unload(), "number" == typeof i ? 0 === i && 0 === s.$slides.length ? t(e).appendTo(s.$slideTrack) : n ? t(e).insertBefore(s.$slides.eq(i)) : t(e).insertAfter(s.$slides.eq(i)) : !0 === n ? t(e).prependTo(s.$slideTrack) : t(e).appendTo(s.$slideTrack), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slides.each(function(e, i) { t(i).attr("data-slick-index", e) }), s.$slidesCache = s.$slides, s.reinit()
            }, e.prototype.animateHeight = function() {
                var t = this;
                if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
                    var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
                    t.$list.animate({ height: e }, t.options.speed)
                }
            }, e.prototype.animateSlide = function(e, i) {
                var n = {},
                    s = this;
                s.animateHeight(), !0 === s.options.rtl && !1 === s.options.vertical && (e = -e), !1 === s.transformsEnabled ? !1 === s.options.vertical ? s.$slideTrack.animate({ left: e }, s.options.speed, s.options.easing, i) : s.$slideTrack.animate({ top: e }, s.options.speed, s.options.easing, i) : !1 === s.cssTransitions ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft), t({ animStart: s.currentLeft }).animate({ animStart: e }, { duration: s.options.speed, easing: s.options.easing, step: function(t) { t = Math.ceil(t), !1 === s.options.vertical ? (n[s.animType] = "translate(" + t + "px, 0px)", s.$slideTrack.css(n)) : (n[s.animType] = "translate(0px," + t + "px)", s.$slideTrack.css(n)) }, complete: function() { i && i.call() } })) : (s.applyTransition(), e = Math.ceil(e), !1 === s.options.vertical ? n[s.animType] = "translate3d(" + e + "px, 0px, 0px)" : n[s.animType] = "translate3d(0px," + e + "px, 0px)", s.$slideTrack.css(n), i && setTimeout(function() { s.disableTransition(), i.call() }, s.options.speed))
            }, e.prototype.getNavTarget = function() {
                var e = this,
                    i = e.options.asNavFor;
                return i && null !== i && (i = t(i).not(e.$slider)), i
            }, e.prototype.asNavFor = function(e) {
                var i = this.getNavTarget();
                null !== i && "object" == typeof i && i.each(function() {
                    var i = t(this).slick("getSlick");
                    i.unslicked || i.slideHandler(e, !0)
                })
            }, e.prototype.applyTransition = function(t) {
                var e = this,
                    i = {};
                !1 === e.options.fade ? i[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : i[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
            },
            e.prototype.autoPlay = function() {
                var t = this;
                t.autoPlayClear(), t.slideCount > t.options.slidesToShow && (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed))
            }, e.prototype.autoPlayClear = function() {
                var t = this;
                t.autoPlayTimer && clearInterval(t.autoPlayTimer)
            }, e.prototype.autoPlayIterator = function() {
                var t = this,
                    e = t.currentSlide + t.options.slidesToScroll;
                t.paused || t.interrupted || t.focussed || (!1 === t.options.infinite && (1 === t.direction && t.currentSlide + 1 === t.slideCount - 1 ? t.direction = 0 : 0 === t.direction && (e = t.currentSlide - t.options.slidesToScroll, t.currentSlide - 1 == 0 && (t.direction = 1))), t.slideHandler(e))
            }, e.prototype.buildArrows = function() { var e = this;!0 === e.options.arrows && (e.$prevArrow = t(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = t(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({ "aria-disabled": "true", tabindex: "-1" })) }, e.prototype.buildDots = function() {
                var e, i, n = this;
                if (!0 === n.options.dots) {
                    for (n.$slider.addClass("slick-dotted"), i = t("<ul />").addClass(n.options.dotsClass), e = 0; e <= n.getDotCount(); e += 1) i.append(t("<li />").append(n.options.customPaging.call(this, n, e)));
                    n.$dots = i.appendTo(n.options.appendDots), n.$dots.find("li").first().addClass("slick-active")
                }
            }, e.prototype.buildOut = function() {
                var e = this;
                e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function(e, i) { t(i).attr("data-slick-index", e).data("originalStyling", t(i).attr("style") || "") }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? t('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), t("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable")
            }, e.prototype.buildRows = function() {
                var t, e, i, n, s, o, r, a = this;
                if (n = document.createDocumentFragment(), o = a.$slider.children(), a.options.rows > 1) {
                    for (r = a.options.slidesPerRow * a.options.rows, s = Math.ceil(o.length / r), t = 0; t < s; t++) {
                        var l = document.createElement("div");
                        for (e = 0; e < a.options.rows; e++) {
                            var h = document.createElement("div");
                            for (i = 0; i < a.options.slidesPerRow; i++) {
                                var c = t * r + (e * a.options.slidesPerRow + i);
                                o.get(c) && h.appendChild(o.get(c))
                            }
                            l.appendChild(h)
                        }
                        n.appendChild(l)
                    }
                    a.$slider.empty().append(n), a.$slider.children().children().children().css({ width: 100 / a.options.slidesPerRow + "%", display: "inline-block" })
                }
            }, e.prototype.checkResponsive = function(e, i) {
                var n, s, o, r = this,
                    a = !1,
                    l = r.$slider.width(),
                    h = window.innerWidth || t(window).width();
                if ("window" === r.respondTo ? o = h : "slider" === r.respondTo ? o = l : "min" === r.respondTo && (o = Math.min(h, l)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
                    for (n in s = null, r.breakpoints) r.breakpoints.hasOwnProperty(n) && (!1 === r.originalSettings.mobileFirst ? o < r.breakpoints[n] && (s = r.breakpoints[n]) : o > r.breakpoints[n] && (s = r.breakpoints[n]));
                    null !== s ? null !== r.activeBreakpoint ? (s !== r.activeBreakpoint || i) && (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = t.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), a = s) : (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = t.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), a = s) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e), a = s), e || !1 === a || r.$slider.trigger("breakpoint", [r, a])
                }
            }, e.prototype.changeSlide = function(e, i) {
                var n, s, o = this,
                    r = t(e.currentTarget);
                switch (r.is("a") && e.preventDefault(), r.is("li") || (r = r.closest("li")), n = o.slideCount % o.options.slidesToScroll != 0 ? 0 : (o.slideCount - o.currentSlide) % o.options.slidesToScroll, e.data.message) {
                    case "previous":
                        s = 0 === n ? o.options.slidesToScroll : o.options.slidesToShow - n, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide - s, !1, i);
                        break;
                    case "next":
                        s = 0 === n ? o.options.slidesToScroll : n, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide + s, !1, i);
                        break;
                    case "index":
                        var a = 0 === e.data.index ? 0 : e.data.index || r.index() * o.options.slidesToScroll;
                        o.slideHandler(o.checkNavigable(a), !1, i), r.children().trigger("focus");
                        break;
                    default:
                        return
                }
            }, e.prototype.checkNavigable = function(t) {
                var e, i;
                if (i = 0, t > (e = this.getNavigableIndexes())[e.length - 1]) t = e[e.length - 1];
                else
                    for (var n in e) {
                        if (t < e[n]) { t = i; break }
                        i = e[n]
                    }
                return t
            }, e.prototype.cleanUpEvents = function() {
                var e = this;
                e.options.dots && null !== e.$dots && (t("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", t.proxy(e.interrupt, e, !0)).off("mouseleave.slick", t.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), t(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().off("click.slick", e.selectHandler), t(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), t(window).off("resize.slick.slick-" + e.instanceUid, e.resize), t("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), t(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
            }, e.prototype.cleanUpSlideEvents = function() {
                var e = this;
                e.$list.off("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", t.proxy(e.interrupt, e, !1))
            }, e.prototype.cleanUpRows = function() {
                var t, e = this;
                e.options.rows > 1 && ((t = e.$slides.children().children()).removeAttr("style"), e.$slider.empty().append(t))
            }, e.prototype.clickHandler = function(t) {!1 === this.shouldClick && (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault()) }, e.prototype.destroy = function(e) {
                var i = this;
                i.autoPlayClear(), i.touchObject = {}, i.cleanUpEvents(), t(".slick-cloned", i.$slider).detach(), i.$dots && i.$dots.remove(), i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()), i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()), i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() { t(this).attr("style", t(this).data("originalStyling")) }), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.detach(), i.$list.detach(), i.$slider.append(i.$slides)), i.cleanUpRows(), i.$slider.removeClass("slick-slider"), i.$slider.removeClass("slick-initialized"), i.$slider.removeClass("slick-dotted"), i.unslicked = !0, e || i.$slider.trigger("destroy", [i])
            }, e.prototype.disableTransition = function(t) {
                var e = this,
                    i = {};
                i[e.transitionType] = "", !1 === e.options.fade ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
            }, e.prototype.fadeSlide = function(t, e) { var i = this;!1 === i.cssTransitions ? (i.$slides.eq(t).css({ zIndex: i.options.zIndex }), i.$slides.eq(t).animate({ opacity: 1 }, i.options.speed, i.options.easing, e)) : (i.applyTransition(t), i.$slides.eq(t).css({ opacity: 1, zIndex: i.options.zIndex }), e && setTimeout(function() { i.disableTransition(t), e.call() }, i.options.speed)) }, e.prototype.fadeSlideOut = function(t) { var e = this;!1 === e.cssTransitions ? e.$slides.eq(t).animate({ opacity: 0, zIndex: e.options.zIndex - 2 }, e.options.speed, e.options.easing) : (e.applyTransition(t), e.$slides.eq(t).css({ opacity: 0, zIndex: e.options.zIndex - 2 })) }, e.prototype.filterSlides = e.prototype.slickFilter = function(t) {
                var e = this;
                null !== t && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(t).appendTo(e.$slideTrack), e.reinit())
            }, e.prototype.focusHandler = function() {
                var e = this;
                e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(i) {
                    i.stopImmediatePropagation();
                    var n = t(this);
                    setTimeout(function() { e.options.pauseOnFocus && (e.focussed = n.is(":focus"), e.autoPlay()) }, 0)
                })
            }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function() { return this.currentSlide }, e.prototype.getDotCount = function() {
                var t = this,
                    e = 0,
                    i = 0,
                    n = 0;
                if (!0 === t.options.infinite)
                    if (t.slideCount <= t.options.slidesToShow) ++n;
                    else
                        for (; e < t.slideCount;) ++n, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
                else if (!0 === t.options.centerMode) n = t.slideCount;
                else if (t.options.asNavFor)
                    for (; e < t.slideCount;) ++n, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
                else n = 1 + Math.ceil((t.slideCount - t.options.slidesToShow) / t.options.slidesToScroll);
                return n - 1
            }, e.prototype.getLeft = function(t) {
                var e, i, n, s, o = this,
                    r = 0;
                return o.slideOffset = 0, i = o.$slides.first().outerHeight(!0), !0 === o.options.infinite ? (o.slideCount > o.options.slidesToShow && (o.slideOffset = o.slideWidth * o.options.slidesToShow * -1, s = -1, !0 === o.options.vertical && !0 === o.options.centerMode && (2 === o.options.slidesToShow ? s = -1.5 : 1 === o.options.slidesToShow && (s = -2)), r = i * o.options.slidesToShow * s), o.slideCount % o.options.slidesToScroll != 0 && t + o.options.slidesToScroll > o.slideCount && o.slideCount > o.options.slidesToShow && (t > o.slideCount ? (o.slideOffset = (o.options.slidesToShow - (t - o.slideCount)) * o.slideWidth * -1, r = (o.options.slidesToShow - (t - o.slideCount)) * i * -1) : (o.slideOffset = o.slideCount % o.options.slidesToScroll * o.slideWidth * -1, r = o.slideCount % o.options.slidesToScroll * i * -1))) : t + o.options.slidesToShow > o.slideCount && (o.slideOffset = (t + o.options.slidesToShow - o.slideCount) * o.slideWidth, r = (t + o.options.slidesToShow - o.slideCount) * i), o.slideCount <= o.options.slidesToShow && (o.slideOffset = 0, r = 0), !0 === o.options.centerMode && o.slideCount <= o.options.slidesToShow ? o.slideOffset = o.slideWidth * Math.floor(o.options.slidesToShow) / 2 - o.slideWidth * o.slideCount / 2 : !0 === o.options.centerMode && !0 === o.options.infinite ? o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth : !0 === o.options.centerMode && (o.slideOffset = 0, o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2)), e = !1 === o.options.vertical ? t * o.slideWidth * -1 + o.slideOffset : t * i * -1 + r, !0 === o.options.variableWidth && (n = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(t) : o.$slideTrack.children(".slick-slide").eq(t + o.options.slidesToShow), e = !0 === o.options.rtl ? n[0] ? -1 * (o.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, !0 === o.options.centerMode && (n = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(t) : o.$slideTrack.children(".slick-slide").eq(t + o.options.slidesToShow + 1), e = !0 === o.options.rtl ? n[0] ? -1 * (o.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, e += (o.$list.width() - n.outerWidth()) / 2)), e
            }, e.prototype.getOption = e.prototype.slickGetOption = function(t) { return this.options[t] }, e.prototype.getNavigableIndexes = function() {
                var t, e = this,
                    i = 0,
                    n = 0,
                    s = [];
                for (!1 === e.options.infinite ? t = e.slideCount : (i = -1 * e.options.slidesToScroll, n = -1 * e.options.slidesToScroll, t = 2 * e.slideCount); i < t;) s.push(i), i = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
                return s
            }, e.prototype.getSlick = function() { return this }, e.prototype.getSlideCount = function() { var e, i, n = this; return i = !0 === n.options.centerMode ? n.slideWidth * Math.floor(n.options.slidesToShow / 2) : 0, !0 === n.options.swipeToSlide ? (n.$slideTrack.find(".slick-slide").each(function(s, o) { if (o.offsetLeft - i + t(o).outerWidth() / 2 > -1 * n.swipeLeft) return e = o, !1 }), Math.abs(t(e).attr("data-slick-index") - n.currentSlide) || 1) : n.options.slidesToScroll }, e.prototype.goTo = e.prototype.slickGoTo = function(t, e) { this.changeSlide({ data: { message: "index", index: parseInt(t) } }, e) }, e.prototype.init = function(e) {
                var i = this;
                t(i.$slider).hasClass("slick-initialized") || (t(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots(), i.checkResponsive(!0), i.focusHandler()), e && i.$slider.trigger("init", [i]), !0 === i.options.accessibility && i.initADA(), i.options.autoplay && (i.paused = !1, i.autoPlay())
            }, e.prototype.initADA = function() {
                var e = this,
                    i = Math.ceil(e.slideCount / e.options.slidesToShow),
                    n = e.getNavigableIndexes().filter(function(t) { return t >= 0 && t < e.slideCount });
                e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({ "aria-hidden": "true", tabindex: "-1" }).find("a, input, button, select").attr({ tabindex: "-1" }), null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(i) {
                    var s = n.indexOf(i);
                    t(this).attr({ role: "tabpanel", id: "slick-slide" + e.instanceUid + i, tabindex: -1 }), -1 !== s && t(this).attr({ "aria-describedby": "slick-slide-control" + e.instanceUid + s })
                }), e.$dots.attr("role", "tablist").find("li").each(function(s) {
                    var o = n[s];
                    t(this).attr({ role: "presentation" }), t(this).find("button").first().attr({ role: "tab", id: "slick-slide-control" + e.instanceUid + s, "aria-controls": "slick-slide" + e.instanceUid + o, "aria-label": s + 1 + " of " + i, "aria-selected": null, tabindex: "-1" })
                }).eq(e.currentSlide).find("button").attr({ "aria-selected": "true", tabindex: "0" }).end());
                for (var s = e.currentSlide, o = s + e.options.slidesToShow; s < o; s++) e.$slides.eq(s).attr("tabindex", 0);
                e.activateADA()
            }, e.prototype.initArrowEvents = function() { var t = this;!0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.off("click.slick").on("click.slick", { message: "previous" }, t.changeSlide), t.$nextArrow.off("click.slick").on("click.slick", { message: "next" }, t.changeSlide), !0 === t.options.accessibility && (t.$prevArrow.on("keydown.slick", t.keyHandler), t.$nextArrow.on("keydown.slick", t.keyHandler))) }, e.prototype.initDotEvents = function() { var e = this;!0 === e.options.dots && (t("li", e.$dots).on("click.slick", { message: "index" }, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && t("li", e.$dots).on("mouseenter.slick", t.proxy(e.interrupt, e, !0)).on("mouseleave.slick", t.proxy(e.interrupt, e, !1)) }, e.prototype.initSlideEvents = function() {
                var e = this;
                e.options.pauseOnHover && (e.$list.on("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", t.proxy(e.interrupt, e, !1)))
            }, e.prototype.initializeEvents = function() {
                var e = this;
                e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", { action: "start" }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", { action: "move" }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", { action: "end" }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", { action: "end" }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), t(document).on(e.visibilityChange, t.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on("click.slick", e.selectHandler), t(window).on("orientationchange.slick.slick-" + e.instanceUid, t.proxy(e.orientationChange, e)), t(window).on("resize.slick.slick-" + e.instanceUid, t.proxy(e.resize, e)), t("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), t(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), t(e.setPosition)
            }, e.prototype.initUI = function() { var t = this;!0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(), t.$nextArrow.show()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.show() }, e.prototype.keyHandler = function(t) {
                var e = this;
                t.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === t.keyCode && !0 === e.options.accessibility ? e.changeSlide({ data: { message: !0 === e.options.rtl ? "next" : "previous" } }) : 39 === t.keyCode && !0 === e.options.accessibility && e.changeSlide({ data: { message: !0 === e.options.rtl ? "previous" : "next" } }))
            }, e.prototype.lazyLoad = function() {
                function e(e) {
                    t("img[data-lazy]", e).each(function() {
                        var e = t(this),
                            i = t(this).attr("data-lazy"),
                            n = t(this).attr("data-srcset"),
                            s = t(this).attr("data-sizes") || o.$slider.attr("data-sizes"),
                            r = document.createElement("img");
                        r.onload = function() { e.animate({ opacity: 0 }, 100, function() { n && (e.attr("srcset", n), s && e.attr("sizes", s)), e.attr("src", i).animate({ opacity: 1 }, 200, function() { e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading") }), o.$slider.trigger("lazyLoaded", [o, e, i]) }) }, r.onerror = function() { e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), o.$slider.trigger("lazyLoadError", [o, e, i]) }, r.src = i
                    })
                }
                var i, n, s, o = this;
                if (!0 === o.options.centerMode ? !0 === o.options.infinite ? s = (n = o.currentSlide + (o.options.slidesToShow / 2 + 1)) + o.options.slidesToShow + 2 : (n = Math.max(0, o.currentSlide - (o.options.slidesToShow / 2 + 1)), s = o.options.slidesToShow / 2 + 1 + 2 + o.currentSlide) : (n = o.options.infinite ? o.options.slidesToShow + o.currentSlide : o.currentSlide, s = Math.ceil(n + o.options.slidesToShow), !0 === o.options.fade && (n > 0 && n--, s <= o.slideCount && s++)), i = o.$slider.find(".slick-slide").slice(n, s), "anticipated" === o.options.lazyLoad)
                    for (var r = n - 1, a = s, l = o.$slider.find(".slick-slide"), h = 0; h < o.options.slidesToScroll; h++) r < 0 && (r = o.slideCount - 1), i = (i = i.add(l.eq(r))).add(l.eq(a)), r--, a++;
                e(i), o.slideCount <= o.options.slidesToShow ? e(o.$slider.find(".slick-slide")) : o.currentSlide >= o.slideCount - o.options.slidesToShow ? e(o.$slider.find(".slick-cloned").slice(0, o.options.slidesToShow)) : 0 === o.currentSlide && e(o.$slider.find(".slick-cloned").slice(-1 * o.options.slidesToShow))
            }, e.prototype.loadSlider = function() {
                var t = this;
                t.setPosition(), t.$slideTrack.css({ opacity: 1 }), t.$slider.removeClass("slick-loading"), t.initUI(), "progressive" === t.options.lazyLoad && t.progressiveLazyLoad()
            }, e.prototype.next = e.prototype.slickNext = function() { this.changeSlide({ data: { message: "next" } }) }, e.prototype.orientationChange = function() {
                var t = this;
                t.checkResponsive(), t.setPosition()
            }, e.prototype.pause = e.prototype.slickPause = function() {
                var t = this;
                t.autoPlayClear(), t.paused = !0
            }, e.prototype.play = e.prototype.slickPlay = function() {
                var t = this;
                t.autoPlay(), t.options.autoplay = !0, t.paused = !1, t.focussed = !1, t.interrupted = !1
            }, e.prototype.postSlide = function(e) {
                var i = this;
                i.unslicked || (i.$slider.trigger("afterChange", [i, e]), i.animating = !1, i.slideCount > i.options.slidesToShow && i.setPosition(), i.swipeLeft = null, i.options.autoplay && i.autoPlay(), !0 === i.options.accessibility && (i.initADA(), i.options.focusOnChange && t(i.$slides.get(i.currentSlide)).attr("tabindex", 0).focus()))
            }, e.prototype.prev = e.prototype.slickPrev = function() { this.changeSlide({ data: { message: "previous" } }) }, e.prototype.preventDefault = function(t) { t.preventDefault() }, e.prototype.progressiveLazyLoad = function(e) {
                e = e || 1;
                var i, n, s, o, r, a = this,
                    l = t("img[data-lazy]", a.$slider);
                l.length ? (i = l.first(), n = i.attr("data-lazy"), s = i.attr("data-srcset"), o = i.attr("data-sizes") || a.$slider.attr("data-sizes"), (r = document.createElement("img")).onload = function() { s && (i.attr("srcset", s), o && i.attr("sizes", o)), i.attr("src", n).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === a.options.adaptiveHeight && a.setPosition(), a.$slider.trigger("lazyLoaded", [a, i, n]), a.progressiveLazyLoad() }, r.onerror = function() { e < 3 ? setTimeout(function() { a.progressiveLazyLoad(e + 1) }, 500) : (i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), a.$slider.trigger("lazyLoadError", [a, i, n]), a.progressiveLazyLoad()) }, r.src = n) : a.$slider.trigger("allImagesLoaded", [a])
            }, e.prototype.refresh = function(e) {
                var i, n, s = this;
                n = s.slideCount - s.options.slidesToShow, !s.options.infinite && s.currentSlide > n && (s.currentSlide = n), s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0), i = s.currentSlide, s.destroy(!0), t.extend(s, s.initials, { currentSlide: i }), s.init(), e || s.changeSlide({ data: { message: "index", index: i } }, !1)
            }, e.prototype.registerBreakpoints = function() {
                var e, i, n, s = this,
                    o = s.options.responsive || null;
                if ("array" === t.type(o) && o.length) {
                    for (e in s.respondTo = s.options.respondTo || "window", o)
                        if (n = s.breakpoints.length - 1, o.hasOwnProperty(e)) {
                            for (i = o[e].breakpoint; n >= 0;) s.breakpoints[n] && s.breakpoints[n] === i && s.breakpoints.splice(n, 1), n--;
                            s.breakpoints.push(i), s.breakpointSettings[i] = o[e].settings
                        }
                    s.breakpoints.sort(function(t, e) { return s.options.mobileFirst ? t - e : e - t })
                }
            }, e.prototype.reinit = function() {
                var e = this;
                e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
            }, e.prototype.resize = function() {
                var e = this;
                t(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function() { e.windowWidth = t(window).width(), e.checkResponsive(), e.unslicked || e.setPosition() }, 50))
            }, e.prototype.removeSlide = e.prototype.slickRemove = function(t, e, i) {
                var n = this;
                if (t = "boolean" == typeof t ? !0 === (e = t) ? 0 : n.slideCount - 1 : !0 === e ? --t : t, n.slideCount < 1 || t < 0 || t > n.slideCount - 1) return !1;
                n.unload(), !0 === i ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(t).remove(), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slidesCache = n.$slides, n.reinit()
            }, e.prototype.setCSS = function(t) {
                var e, i, n = this,
                    s = {};
                !0 === n.options.rtl && (t = -t), e = "left" == n.positionProp ? Math.ceil(t) + "px" : "0px", i = "top" == n.positionProp ? Math.ceil(t) + "px" : "0px", s[n.positionProp] = t, !1 === n.transformsEnabled ? n.$slideTrack.css(s) : (s = {}, !1 === n.cssTransitions ? (s[n.animType] = "translate(" + e + ", " + i + ")", n.$slideTrack.css(s)) : (s[n.animType] = "translate3d(" + e + ", " + i + ", 0px)", n.$slideTrack.css(s)))
            }, e.prototype.setDimensions = function() { var t = this;!1 === t.options.vertical ? !0 === t.options.centerMode && t.$list.css({ padding: "0px " + t.options.centerPadding }) : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow), !0 === t.options.centerMode && t.$list.css({ padding: t.options.centerPadding + " 0px" })), t.listWidth = t.$list.width(), t.listHeight = t.$list.height(), !1 === t.options.vertical && !1 === t.options.variableWidth ? (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow), t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length))) : !0 === t.options.variableWidth ? t.$slideTrack.width(5e3 * t.slideCount) : (t.slideWidth = Math.ceil(t.listWidth), t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length))); var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();!1 === t.options.variableWidth && t.$slideTrack.children(".slick-slide").width(t.slideWidth - e) }, e.prototype.setFade = function() {
                var e, i = this;
                i.$slides.each(function(n, s) { e = i.slideWidth * n * -1, !0 === i.options.rtl ? t(s).css({ position: "relative", right: e, top: 0, zIndex: i.options.zIndex - 2, opacity: 0 }) : t(s).css({ position: "relative", left: e, top: 0, zIndex: i.options.zIndex - 2, opacity: 0 }) }), i.$slides.eq(i.currentSlide).css({ zIndex: i.options.zIndex - 1, opacity: 1 })
            }, e.prototype.setHeight = function() {
                var t = this;
                if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
                    var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
                    t.$list.css("height", e)
                }
            }, e.prototype.setOption = e.prototype.slickSetOption = function() {
                var e, i, n, s, o, r = this,
                    a = !1;
                if ("object" === t.type(arguments[0]) ? (n = arguments[0], a = arguments[1], o = "multiple") : "string" === t.type(arguments[0]) && (n = arguments[0], s = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === t.type(arguments[1]) ? o = "responsive" : void 0 !== arguments[1] && (o = "single")), "single" === o) r.options[n] = s;
                else if ("multiple" === o) t.each(n, function(t, e) { r.options[t] = e });
                else if ("responsive" === o)
                    for (i in s)
                        if ("array" !== t.type(r.options.responsive)) r.options.responsive = [s[i]];
                        else {
                            for (e = r.options.responsive.length - 1; e >= 0;) r.options.responsive[e].breakpoint === s[i].breakpoint && r.options.responsive.splice(e, 1), e--;
                            r.options.responsive.push(s[i])
                        }
                a && (r.unload(), r.reinit())
            }, e.prototype.setPosition = function() {
                var t = this;
                t.setDimensions(), t.setHeight(), !1 === t.options.fade ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade(), t.$slider.trigger("setPosition", [t])
            }, e.prototype.setProps = function() {
                var t = this,
                    e = document.body.style;
                t.positionProp = !0 === t.options.vertical ? "top" : "left", "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === t.options.useCSS && (t.cssTransitions = !0), t.options.fade && ("number" == typeof t.options.zIndex ? t.options.zIndex < 3 && (t.options.zIndex = 3) : t.options.zIndex = t.defaults.zIndex), void 0 !== e.OTransform && (t.animType = "OTransform", t.transformType = "-o-transform", t.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.MozTransform && (t.animType = "MozTransform", t.transformType = "-moz-transform", t.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)), void 0 !== e.webkitTransform && (t.animType = "webkitTransform", t.transformType = "-webkit-transform", t.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.msTransform && (t.animType = "msTransform", t.transformType = "-ms-transform", t.transitionType = "msTransition", void 0 === e.msTransform && (t.animType = !1)), void 0 !== e.transform && !1 !== t.animType && (t.animType = "transform", t.transformType = "transform", t.transitionType = "transition"), t.transformsEnabled = t.options.useTransform && null !== t.animType && !1 !== t.animType
            }, e.prototype.setSlideClasses = function(t) {
                var e, i, n, s, o = this;
                if (i = o.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), o.$slides.eq(t).addClass("slick-current"), !0 === o.options.centerMode) {
                    var r = o.options.slidesToShow % 2 == 0 ? 1 : 0;
                    e = Math.floor(o.options.slidesToShow / 2), !0 === o.options.infinite && (t >= e && t <= o.slideCount - 1 - e ? o.$slides.slice(t - e + r, t + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (n = o.options.slidesToShow + t, i.slice(n - e + 1 + r, n + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === t ? i.eq(i.length - 1 - o.options.slidesToShow).addClass("slick-center") : t === o.slideCount - 1 && i.eq(o.options.slidesToShow).addClass("slick-center")), o.$slides.eq(t).addClass("slick-center")
                } else t >= 0 && t <= o.slideCount - o.options.slidesToShow ? o.$slides.slice(t, t + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= o.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (s = o.slideCount % o.options.slidesToShow, n = !0 === o.options.infinite ? o.options.slidesToShow + t : t, o.options.slidesToShow == o.options.slidesToScroll && o.slideCount - t < o.options.slidesToShow ? i.slice(n - (o.options.slidesToShow - s), n + s).addClass("slick-active").attr("aria-hidden", "false") : i.slice(n, n + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
                "ondemand" !== o.options.lazyLoad && "anticipated" !== o.options.lazyLoad || o.lazyLoad()
            }, e.prototype.setupInfinite = function() {
                var e, i, n, s = this;
                if (!0 === s.options.fade && (s.options.centerMode = !1), !0 === s.options.infinite && !1 === s.options.fade && (i = null, s.slideCount > s.options.slidesToShow)) {
                    for (n = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow, e = s.slideCount; e > s.slideCount - n; e -= 1) i = e - 1, t(s.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
                    for (e = 0; e < n + s.slideCount; e += 1) i = e, t(s.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
                    s.$slideTrack.find(".slick-cloned").find("[id]").each(function() { t(this).attr("id", "") })
                }
            }, e.prototype.interrupt = function(t) {
                var e = this;
                t || e.autoPlay(), e.interrupted = t
            }, e.prototype.selectHandler = function(e) {
                var i = this,
                    n = t(e.target).is(".slick-slide") ? t(e.target) : t(e.target).parents(".slick-slide"),
                    s = parseInt(n.attr("data-slick-index"));
                s || (s = 0), i.slideCount <= i.options.slidesToShow ? i.slideHandler(s, !1, !0) : i.slideHandler(s)
            }, e.prototype.slideHandler = function(t, e, i) {
                var n, s, o, r, a, l = null,
                    h = this;
                if (e = e || !1, !(!0 === h.animating && !0 === h.options.waitForAnimate || !0 === h.options.fade && h.currentSlide === t))
                    if (!1 === e && h.asNavFor(t), n = t, l = h.getLeft(n), r = h.getLeft(h.currentSlide), h.currentLeft = null === h.swipeLeft ? r : h.swipeLeft, !1 === h.options.infinite && !1 === h.options.centerMode && (t < 0 || t > h.getDotCount() * h.options.slidesToScroll)) !1 === h.options.fade && (n = h.currentSlide, !0 !== i ? h.animateSlide(r, function() { h.postSlide(n) }) : h.postSlide(n));
                    else if (!1 === h.options.infinite && !0 === h.options.centerMode && (t < 0 || t > h.slideCount - h.options.slidesToScroll)) !1 === h.options.fade && (n = h.currentSlide, !0 !== i ? h.animateSlide(r, function() { h.postSlide(n) }) : h.postSlide(n));
                else { if (h.options.autoplay && clearInterval(h.autoPlayTimer), s = n < 0 ? h.slideCount % h.options.slidesToScroll != 0 ? h.slideCount - h.slideCount % h.options.slidesToScroll : h.slideCount + n : n >= h.slideCount ? h.slideCount % h.options.slidesToScroll != 0 ? 0 : n - h.slideCount : n, h.animating = !0, h.$slider.trigger("beforeChange", [h, h.currentSlide, s]), o = h.currentSlide, h.currentSlide = s, h.setSlideClasses(h.currentSlide), h.options.asNavFor && (a = (a = h.getNavTarget()).slick("getSlick")).slideCount <= a.options.slidesToShow && a.setSlideClasses(h.currentSlide), h.updateDots(), h.updateArrows(), !0 === h.options.fade) return !0 !== i ? (h.fadeSlideOut(o), h.fadeSlide(s, function() { h.postSlide(s) })) : h.postSlide(s), void h.animateHeight();!0 !== i ? h.animateSlide(l, function() { h.postSlide(s) }) : h.postSlide(s) }
            }, e.prototype.startLoad = function() { var t = this;!0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(), t.$nextArrow.hide()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.hide(), t.$slider.addClass("slick-loading") }, e.prototype.swipeDirection = function() { var t, e, i, n, s = this; return t = s.touchObject.startX - s.touchObject.curX, e = s.touchObject.startY - s.touchObject.curY, i = Math.atan2(e, t), (n = Math.round(180 * i / Math.PI)) < 0 && (n = 360 - Math.abs(n)), n <= 45 && n >= 0 ? !1 === s.options.rtl ? "left" : "right" : n <= 360 && n >= 315 ? !1 === s.options.rtl ? "left" : "right" : n >= 135 && n <= 225 ? !1 === s.options.rtl ? "right" : "left" : !0 === s.options.verticalSwiping ? n >= 35 && n <= 135 ? "down" : "up" : "vertical" }, e.prototype.swipeEnd = function() {
                var t, e, i = this;
                if (i.dragging = !1, i.swiping = !1, i.scrolling) return i.scrolling = !1, !1;
                if (i.interrupted = !1, i.shouldClick = !(i.touchObject.swipeLength > 10), void 0 === i.touchObject.curX) return !1;
                if (!0 === i.touchObject.edgeHit && i.$slider.trigger("edge", [i, i.swipeDirection()]), i.touchObject.swipeLength >= i.touchObject.minSwipe) {
                    switch (e = i.swipeDirection()) {
                        case "left":
                        case "down":
                            t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) : i.currentSlide + i.getSlideCount(), i.currentDirection = 0;
                            break;
                        case "right":
                        case "up":
                            t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) : i.currentSlide - i.getSlideCount(), i.currentDirection = 1
                    }
                    "vertical" != e && (i.slideHandler(t), i.touchObject = {}, i.$slider.trigger("swipe", [i, e]))
                } else i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide), i.touchObject = {})
            }, e.prototype.swipeHandler = function(t) {
                var e = this;
                if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== t.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), t.data.action) {
                    case "start":
                        e.swipeStart(t);
                        break;
                    case "move":
                        e.swipeMove(t);
                        break;
                    case "end":
                        e.swipeEnd(t)
                }
            }, e.prototype.swipeMove = function(t) { var e, i, n, s, o, r, a = this; return o = void 0 !== t.originalEvent ? t.originalEvent.touches : null, !(!a.dragging || a.scrolling || o && 1 !== o.length) && (e = a.getLeft(a.currentSlide), a.touchObject.curX = void 0 !== o ? o[0].pageX : t.clientX, a.touchObject.curY = void 0 !== o ? o[0].pageY : t.clientY, a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))), !a.options.verticalSwiping && !a.swiping && r > 4 ? (a.scrolling = !0, !1) : (!0 === a.options.verticalSwiping && (a.touchObject.swipeLength = r), i = a.swipeDirection(), void 0 !== t.originalEvent && a.touchObject.swipeLength > 4 && (a.swiping = !0, t.preventDefault()), s = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1), !0 === a.options.verticalSwiping && (s = a.touchObject.curY > a.touchObject.startY ? 1 : -1), n = a.touchObject.swipeLength, a.touchObject.edgeHit = !1, !1 === a.options.infinite && (0 === a.currentSlide && "right" === i || a.currentSlide >= a.getDotCount() && "left" === i) && (n = a.touchObject.swipeLength * a.options.edgeFriction, a.touchObject.edgeHit = !0), !1 === a.options.vertical ? a.swipeLeft = e + n * s : a.swipeLeft = e + n * (a.$list.height() / a.listWidth) * s, !0 === a.options.verticalSwiping && (a.swipeLeft = e + n * s), !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? (a.swipeLeft = null, !1) : void a.setCSS(a.swipeLeft)))) }, e.prototype.swipeStart = function(t) {
                var e, i = this;
                if (i.interrupted = !0, 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow) return i.touchObject = {}, !1;
                void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== e ? e.pageX : t.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== e ? e.pageY : t.clientY, i.dragging = !0
            }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function() {
                var t = this;
                null !== t.$slidesCache && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.appendTo(t.$slideTrack), t.reinit())
            }, e.prototype.unload = function() {
                var e = this;
                t(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
            }, e.prototype.unslick = function(t) {
                var e = this;
                e.$slider.trigger("unslick", [e, t]), e.destroy()
            }, e.prototype.updateArrows = function() {
                var t = this;
                Math.floor(t.options.slidesToShow / 2), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && !t.options.infinite && (t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === t.currentSlide ? (t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - t.options.slidesToShow && !1 === t.options.centerMode ? (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - 1 && !0 === t.options.centerMode && (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
            }, e.prototype.updateDots = function() {
                var t = this;
                null !== t.$dots && (t.$dots.find("li").removeClass("slick-active").end(), t.$dots.find("li").eq(Math.floor(t.currentSlide / t.options.slidesToScroll)).addClass("slick-active"))
            }, e.prototype.visibility = function() {
                var t = this;
                t.options.autoplay && (document[t.hidden] ? t.interrupted = !0 : t.interrupted = !1)
            }, t.fn.slick = function() {
                var t, i, n = this,
                    s = arguments[0],
                    o = Array.prototype.slice.call(arguments, 1),
                    r = n.length;
                for (t = 0; t < r; t++)
                    if ("object" == typeof s || void 0 === s ? n[t].slick = new e(n[t], s) : i = n[t].slick[s].apply(n[t].slick, o), void 0 !== i) return i;
                return n
            }
    }),
    function(t, e) { "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.typer = e() : t.typer = e() }(window, function() {
        return function(t) {
            function e(n) { if (i[n]) return i[n].exports; var s = i[n] = { i: n, l: !1, exports: {} }; return t[n].call(s.exports, s, s.exports, e), s.l = !0, s.exports }
            var i = {};
            return e.m = t, e.c = i, e.d = function(t, i, n) { e.o(t, i) || Object.defineProperty(t, i, { enumerable: !0, get: n }) }, e.r = function(t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, e.t = function(t, i) {
                if (1 & i && (t = e(t)), 8 & i) return t;
                if (4 & i && "object" == typeof t && t && t.__esModule) return t;
                var n = Object.create(null);
                if (e.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: t }), 2 & i && "string" != typeof t)
                    for (var s in t) e.d(n, s, function(e) { return t[e] }.bind(null, s));
                return n
            }, e.n = function(t) { var i = t && t.__esModule ? function() { return t["default"] } : function() { return t }; return e.d(i, "a", i), i }, e.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, e.p = "", e(e.s = 0)
        }([function(t, e, i) {
            "use strict";

            function n(t, e, i) { return e in t ? Object.defineProperty(t, e, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = i, t }
            i(1);
            var s = function a(t) { return t ? (t ^ 16 * Math.random() >> t / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, a) },
                o = ["typer", "cursor-block", "cursor-soft", "cursor-hard", "no-cursor"],
                r = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@$^*()".split("");
            t.exports = function(t, e) {
                function i(t) { return {}.toString.call(t).slice(8, -1) }

                function a(t) { var e = i(t); if ("html" !== e.slice(0, 4).toLowerCase() && "String" !== e) throw "You need to provide a string selector, such as '.some-class', or an html element."; return e }

                function l(t) {
                    var n = i(t);
                    if (void 0 === t) return _.speedSet ? e : 70;
                    if ("Number" === n && !isNaN(t)) return t;
                    if ("Object" === n) {
                        var s = t.hasOwnProperty("min"),
                            o = t.hasOwnProperty("max"),
                            r = t.hasOwnProperty("speed");
                        if (r && !isNaN(t.speed)) return t.speed;
                        if (s && o && t.min < t.max) return t;
                        if (!Object.keys(t).length && _.speedSet) return e;
                        if (!s && !o && !r) return e
                    }
                    throw "You have provided an invalid value for speed."
                }

                function h(e, i) { _.style && _.style.remove(), _.newDiv && c(), t.removeAttribute("data-typer"), y.removeEventListener("killTyper", g), _.newDiv && _.newDiv.classList.add("white-space"), _.newDiv = "", "function" == typeof e ? e(t) : "function" == typeof i && i(t), !0 !== e && !0 !== i || y.dispatchEvent(new Event("typerFinished")) }

                function c() { o.forEach(function(t) { return _.newDiv.classList.remove(t) }) }

                function u(t, e, s) {
                    function o() {
                        var e, s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            o = arguments.length > 1 ? arguments[1] : void 0,
                            a = s.container,
                            h = s.totalTime,
                            c = s.military,
                            u = !o && ("String" === i(a) ? document.querySelector(a).textContent : a.textContent);
                        return n(e = {}, t, o || u), n(e, "speed", l(s)), n(e, "html", !1 !== s.html), n(e, "element", r ? s.element : null), n(e, "military", function(t) { if (!t) return null; if (+t) return { speed: +t, chars: 3 }; if ("Object" === i(t)) return { speed: +t.speed || 50, chars: +t.chars || 3 }; throw "You have provided an invalid value for military." }(c)), n(e, "totalTime", h), e
                    }
                    var r = "line" === t,
                        a = "continue" === t;
                    if (e || s)
                        if ("Object" === i(e))(r || a && e.container) && _.push(o(e));
                        else if (isNaN(s)) _.push(o(s, e));
                    else {
                        var h;
                        _.push((n(h = {}, t, e), n(h, "speed", l(s)), n(h, "html", !0), h))
                    } else r && _.push({ line: 1 })
                }

                function d() {
                    if (_.item >= 0 || (_.item = 0), _.item === _.length) return _.complete = !0, y.removeEventListener("killTyper", g);
                    _.ks || (_.ks = !0, y.addEventListener("killTyper", g)), _.cursor || (_.cursor = "cursor-soft"), _.type = setInterval(function() {
                        if (!_.length) return clearInterval(_.type);
                        var i = _[_.item];
                        i.line ? p(i) : i["continue"] ? function(t) { clearInterval(_.type), m(t) }(i) : i.pause ? function(t) { clearInterval(_.type), _.pause = setTimeout(function() { _.pause = null, _.item++, d() }, t.pause) }(i) : i.emit ? function(t) { clearInterval(_.type), t.el.dispatchEvent(new Event(t.emit)), _.item++, d() }(i) : i.listen ? function(t) {
                            function e(t) { _.listening = !1, i.removeEventListener(t.type, e), _.killed || (_.item++, d()) }
                            var i = t.el,
                                n = t.listen;
                            clearInterval(_.type), _.listening = !0, i.addEventListener(n, e), b = { el: i, type: n, fxn: e }
                        }(i) : i.back ? function(t) {
                            function i(t) {
                                var i = 0,
                                    r = function a(t) {
                                        var e = [],
                                            i = Array.from(t.childNodes);
                                        return i.length ? (i.forEach(function(t) { t.childNodes.length ? e = e.concat(a(t)) : e.push(t) }), e) : e
                                    }(t || _.newDiv).reverse();
                                return function l() {
                                    if (_.halt) return _.resume = function() { return _.goBack = setInterval(l, o || e) }, clearInterval(_.goBack);
                                    var a = r[0];
                                    _.voids.includes(a.nodeName) ? (a.remove(), r.shift()) : (a.textContent = a.textContent.slice(0, -1), a.length || r.shift()), t || ++i === s && (clearInterval(_.goBack), n(_.newDiv), _.item++, d())
                                }
                            }

                            function n(t) { Array.from(t.childNodes).forEach(function(t) { _.voids.includes(t.nodeName) || (t.childNodes.length && n(t), "#text" === t.nodeName || t.innerHTML.length || t.remove(), "#text" !== t.nodeName || t.length || t.remove()) }) }
                            var s = t.back,
                                o = t.speed;
                            if (clearInterval(_.type), !_.newDiv || !_.newDiv.textContent) return _.item++, d();
                            var r = function u(t) { var e = 0; return Array.from(t.childNodes).forEach(function(t) { _.voids.includes(t.nodeName) && e++, t.childNodes.length && (e += u(t)) }), e }(_.newDiv),
                                a = _.newDiv.textContent.length;
                            if ("empty" === s) {
                                if (!o || o >= a) _.newDiv.innerHTML = "";
                                else {
                                    var l = _.newDiv.cloneNode(!0),
                                        h = i(l);
                                    o < 0 && (o += a);
                                    for (var c = 0; c < o; c++) h();
                                    n(l), _.newDiv.innerHTML = l.innerHTML
                                }
                                return _.item++, d()
                            }
                            s > a + r && (s = "all"), "all" === s && (s = a + r), s < 0 && (s = a + r - -1 * s), _.goBack = setInterval(i(), o || e)
                        }(i) : i.empty ? (t.innerHTML = "", p({ line: 1 })) : i.run ? function(e) {
                            var i = e.run;
                            clearInterval(_.type), i(t), _.item++, d()
                        }(i) : i.end && (clearInterval(_.type), _.cb())
                    }, 0)
                }

                function p(e) {
                    clearInterval(_.type), _.newDiv && (c(), _.newDiv.classList.add("white-space"), _.newDiv.innerHTML || (_.newDiv.innerHTML = " "));
                    var i = document.createElement(e.element || "div");
                    if (i.setAttribute("data-typer-child", _.uuid), i.className = "".concat(_.cursor, " typer white-space"), t.appendChild(i), _.newDiv = i, 1 === e.line) return _.item++, d();
                    m(e)
                }

                function f(t, e) {
                    var n = "Object" === i(t) ? function(t, e) { return Math.floor(Math.random() * (e - t + 1) + t) }(t.min, t.max) : t;
                    _.halt ? _.resume = function() { return _.iterator = setTimeout(e, n) } : _.iterator = setTimeout(e, n)
                }

                function m(t) {
                    function e() { return r[Math.floor(Math.random() * r.length)] }

                    function n(i, n, s) {
                        var o = 0,
                            r = t.military,
                            a = r.speed,
                            l = r.chars;
                        i.innerHTML += e(), _.military = setInterval(function() {
                            if (o === l) return i.innerHTML = i.innerHTML.slice(0, -1) + n, clearInterval(_.military), s();
                            i.innerHTML = i.innerHTML.slice(0, -1) + e(), o++
                        }, a)
                    }

                    function s() { return clearInterval(_.iterator), _.item++, d() }
                    var o = t.line || t["continue"],
                        a = document.createElement("div");
                    if (Array.isArray(o)) return function() {
                        var e = 0,
                            i = t.totalTime ? t.totalTime / o.length : t.speed;
                        f(i, function n() {
                            var r = o[e++];
                            a.textContent = r, _.newDiv.innerHTML += t.html ? r : a.innerHTML, e === o.length ? s() : f(i, n)
                        })
                    }();
                    a.innerHTML = o, t.html ? function() {
                        var e = function h(t, e) {
                                var i = [];
                                t = Array.from(t);
                                for (var n = 0; n < t.length; n++) {
                                    var s = t[n],
                                        o = s.nodeName;
                                    "#text" === o ? i.push({ parent: e, content: s.textContent }) : s.childNodes.length ? function() {
                                        var t = document.createElement(o);
                                        Array.from(s.attributes).forEach(function(e) { t.setAttribute(e.name, e.value) }), i.push({ parent: e, newNode: t }), i = i.concat(h(s.childNodes, t))
                                    }() : _.voids.includes(o) && i.push({ parent: e, voidNode: s })
                                }
                                return i
                            }(a.childNodes, _.newDiv),
                            i = 0,
                            o = 0,
                            r = e[i++],
                            l = t.totalTime ? t.totalTime / r.content.length : t.speed;
                        f(l, function c() {
                            if (r.content && o === r.content.length && (o = 0, r = e[i++]), !r) return s();
                            if (r.content) {
                                if (t.military) return n(r.parent, r.content[o++], function() { f(l, c) });
                                r.parent.innerHTML += r.content[o++]
                            } else r.parent.appendChild(r.voidNode || r.newNode), r = e[i++];
                            f(l, c)
                        })
                    }() : function() {
                        var e = 0,
                            r = t.totalTime ? t.totalTime / o.length : t.speed;
                        f(r, function l() { if (e === o.length) return s(); var h = o[e]; if (t.military) return n(_.newDiv, h, function() { e++, f(r, l) }); "String" !== i(o) && (a.textContent = h, h = a.innerHTML), _.newDiv.innerHTML += h, e++, f(r, l) })
                    }()
                }

                function g() { return _.typing ? (b.el && b.el.removeEventListener(b.type, b.fxn), clearInterval(_.type), clearInterval(_.iterator), clearInterval(_.goBack), clearInterval(_.military), clearTimeout(_.pause), h(), v("kill")) : w }

                function v(t) {
                    function e(t) { return console.warn(i, t), w }
                    var i = 'WARNING: you tried to call ".%s" after ".'.concat(t, '" has already been called.\nThe public API has been nullified.');
                    return Object.keys(w).forEach(function(i) { "kill" === i && "end" === t || (w[i] = e.bind(null, i)) }), "kill" === t && (_.killed && e(), _.killed = !0), w
                }
                var _ = [],
                    y = document.body,
                    b = {};
                if ("String" === a(t) && (t = document.querySelector(t)), t.getAttribute("data-typer")) throw "You've already called Typer on this element.";
                e = l(e), _.speedSet = !0, _.voids = ["AREA", "BASE", "BR", "COL", "COMMAND", "EMBED", "HR", "IMG", "INPUT", "KEYGEN", "LINK", "META", "PARAM", "SOURCE", "TRACK", "WBR"], _.classNames = o, _.uuid = s(), t.setAttribute("data-typer", _.uuid);
                var w = {
                    cursor: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        if (_.cursorRan) return console.warn('You can only call ".cursor" once.'), this;
                        if (_.cursorRan = !0, !1 === t) return _.cursor = "no-cursor", this;
                        var e = t.color,
                            i = t.blink,
                            n = t.block,
                            s = [];
                        return e && function(t, e) { _.style = document.createElement("style"), _.style.appendChild(document.createTextNode("")), document.head.appendChild(_.style); var i = document.styleSheets[document.styleSheets.length - 1]; "insertRule" in i ? i.insertRule("".concat(t, "{").concat(e, "}"), 0) : i.addRule(t, e) }('[data-typer="'.concat(_.uuid, '"] .typer::after'), "background-color:".concat(e)), s.push("cursor-".concat("hard" === i ? "hard" : "soft")), !0 === n && s.push("cursor-block"), _.cursor = s.join(" "), this
                    },
                    line: function(t, e) { return u("line", t, e), _.typing || (_.typing = !0, d()), this },
                    "continue": function(t, e) { return u("continue", t, e), this },
                    military: function(t, e) { return u("military", t, e), _.typing || (_.typing = !0, d()), this },
                    pause: function(t) { return _.push({ pause: +t || 500 }), this },
                    emit: function(t, e) { return e ? "String" === a(e) && (e = document.querySelector(e)) : e = y, _.push({ emit: t, el: e }), this },
                    listen: function(t, e) { return e ? "String" === a(e) && (e = document.querySelector(e)) : e = y, _.push({ listen: t, el: e }), this },
                    back: function(t, e) { return _.push({ back: t, speed: e }), this },
                    empty: function() { return _.push({ empty: !0 }), this },
                    run: function(t) { return _.push({ run: t }), this },
                    end: function(t, e) { return _.push({ end: !0 }), _.cb = function() { return h(t, e) }, v("end") },
                    halt: function() { if (!_.typing) return this; var t = 'You can\'t call ".halt" while Typer is in %s mode.'; return _.pause ? console.warn(t, "pause") : _.listening ? console.warn(t, "listen") : void(_.halt = !0) },
                    resume: function() {
                        if (!_.typing) return this;
                        if (!_.complete) {
                            if (_.halt = !1, !_.resume) return console.warn('You called ".resume" before calling ".halt".');
                            _.resume(), _.resume = null
                        }
                    },
                    kill: g
                };
                return w
            }
        }, function() {}])
    }),
    function(t, e) {
        "use strict";

        function i(i, n, o, a, l) {
            function h() {
                k = t.devicePixelRatio > 1, o = c(o), n.delay >= 0 && setTimeout(function() { u(!0) }, n.delay), (n.delay < 0 || n.combined) && (a.e = _(n.throttle, function(t) { "resize" === t.type && (x = T = -1), u(t.all) }), a.a = function(t) { t = c(t), o.push.apply(o, t) }, a.g = function() { return o = s(o).filter(function() { return !s(this).data(n.loadedName) }) }, a.f = function(t) {
                    for (var e = 0; e < t.length; e++) {
                        var i = o.filter(function() { return this === t[e] });
                        i.length && u(!1, i)
                    }
                }, u(), s(n.appendScroll).on("scroll." + l + " resize." + l, a.e))
            }

            function c(t) {
                for (var o = n.defaultImage, r = n.placeholder, a = n.imageBase, l = n.srcsetAttribute, h = n.loaderAttribute, c = n._f || {}, u = 0, d = (t = s(t).filter(function() {
                        var t = s(this),
                            i = g(this);
                        return !t.data(n.handledName) && (t.attr(n.attribute) || t.attr(l) || t.attr(h) || c[i] !== e)
                    }).data("plugin_" + n.name, i)).length; u < d; u++) {
                    var p = s(t[u]),
                        f = g(t[u]),
                        m = p.attr(n.imageBaseAttribute) || a;
                    f === D && m && p.attr(l) && p.attr(l, v(p.attr(l), m)), c[f] === e || p.attr(h) || p.attr(h, c[f]), f === D && o && !p.attr(A) ? p.attr(A, o) : f === D || !r || p.css(O) && "none" !== p.css(O) || p.css(O, "url('" + r + "')")
                }
                return t
            }

            function u(t, e) {
                if (o.length) {
                    for (var r = e || o, a = !1, l = n.imageBase || "", h = n.srcsetAttribute, c = n.handledName, u = 0; u < r.length; u++)
                        if (t || e || p(r[u])) {
                            var f = s(r[u]),
                                m = g(r[u]),
                                v = f.attr(n.attribute),
                                _ = f.attr(n.imageBaseAttribute) || l,
                                y = f.attr(n.loaderAttribute);
                            f.data(c) || n.visibleOnly && !f.is(":visible") || !((v || f.attr(h)) && (m === D && (_ + v !== f.attr(A) || f.attr(h) !== f.attr(M)) || m !== D && _ + v !== f.css(O)) || y) || (a = !0, f.data(c, !0), d(f, m, _, y))
                        }
                    a && (o = s(o).filter(function() { return !s(this).data(c) }))
                } else n.autoDestroy && i.destroy()
            }

            function d(t, e, i, o) {
                ++w;
                var r = function() { b("onError", t), y(), r = s.noop };
                b("beforeLoad", t);
                var a = n.attribute,
                    l = n.srcsetAttribute,
                    h = n.sizesAttribute,
                    c = n.retinaAttribute,
                    u = n.removeAttribute,
                    d = n.loadedName,
                    p = t.attr(c);
                if (o) {
                    var f = function() { u && t.removeAttr(n.loaderAttribute), t.data(d, !0), b(C, t), setTimeout(y, 1), f = s.noop };
                    t.off(P).one(P, r).one(S, f), b(o, t, function(e) { e ? (t.off(S), f()) : (t.off(P), r()) }) || t.trigger(P)
                } else {
                    var m = s(new Image);
                    m.one(P, r).one(S, function() { t.hide(), e === D ? t.attr(I, m.attr(I)).attr(M, m.attr(M)).attr(A, m.attr(A)) : t.css(O, "url('" + m.attr(A) + "')"), t[n.effect](n.effectTime), u && (t.removeAttr(a + " " + l + " " + c + " " + n.imageBaseAttribute), h !== I && t.removeAttr(h)), t.data(d, !0), b(C, t), m.remove(), y() });
                    var g = (k && p ? p : t.attr(a)) || "";
                    m.attr(I, t.attr(h)).attr(M, t.attr(l)).attr(A, g ? i + g : null), m.complete && m.trigger(S)
                }
            }

            function p(t) {
                var e = t.getBoundingClientRect(),
                    i = n.scrollDirection,
                    s = n.threshold,
                    o = m() + s > e.top && -s < e.bottom,
                    r = f() + s > e.left && -s < e.right;
                return "vertical" === i ? o : "horizontal" === i ? r : o && r
            }

            function f() { return x >= 0 ? x : x = s(t).width() }

            function m() { return T >= 0 ? T : T = s(t).height() }

            function g(t) { return t.tagName.toLowerCase() }

            function v(t, e) {
                if (e) {
                    var i = t.split(",");
                    t = "";
                    for (var n = 0, s = i.length; n < s; n++) t += e + i[n].trim() + (n !== s - 1 ? "," : "")
                }
                return t
            }

            function _(t, e) {
                var s, o = 0;
                return function(r, a) {
                    function l() { o = +new Date, e.call(i, r) }
                    var h = +new Date - o;
                    s && clearTimeout(s), h > t || !n.enableThrottle || a ? l() : s = setTimeout(l, t - h)
                }
            }

            function y() {--w, o.length || w || b("onFinishedAll") }

            function b(t) { return !!(t = n[t]) && (t.apply(i, [].slice.call(arguments, 1)), !0) }
            var w = 0,
                x = -1,
                T = -1,
                k = !1,
                C = "afterLoad",
                S = "load",
                P = "error",
                D = "img",
                A = "src",
                M = "srcset",
                I = "sizes",
                O = "background-image";
            "event" === n.bind || r ? h() : s(t).on(S + "." + l, h)
        }

        function n(n, r) {
            var a = this,
                l = s.extend({}, a.config, r),
                h = {},
                c = l.name + "-" + ++o;
            return a.config = function(t, i) { return i === e ? l[t] : (l[t] = i, a) }, a.addItems = function(t) { return h.a && h.a("string" === s.type(t) ? s(t) : t), a }, a.getItems = function() { return h.g ? h.g() : {} }, a.update = function(t) { return h.e && h.e({}, !t), a }, a.force = function(t) { return h.f && h.f("string" === s.type(t) ? s(t) : t), a }, a.loadAll = function() { return h.e && h.e({ all: !0 }, !0), a }, a.destroy = function() { return s(l.appendScroll).off("." + c, h.e), s(t).off("." + c), h = {}, e }, i(a, l, n, h, c), l.chainable ? n : a
        }
        var s = t.jQuery || t.Zepto,
            o = 0,
            r = !1;
        s.fn.Lazy = s.fn.lazy = function(t) { return new n(this, t) }, s.Lazy = s.lazy = function(t, i, o) { if (s.isFunction(i) && (o = i, i = []), s.isFunction(o)) { t = s.isArray(t) ? t : [t], i = s.isArray(i) ? i : [i]; for (var r = n.prototype.config, a = r._f || (r._f = {}), l = 0, h = t.length; l < h; l++)(r[t[l]] === e || s.isFunction(r[t[l]])) && (r[t[l]] = o); for (var c = 0, u = i.length; c < u; c++) a[i[c]] = t[0] } }, n.prototype.config = { name: "lazy", chainable: !0, autoDestroy: !0, bind: "load", threshold: 500, visibleOnly: !1, appendScroll: t, scrollDirection: "both", imageBase: null, defaultImage: "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", placeholder: null, delay: -1, combined: !1, attribute: "data-src", srcsetAttribute: "data-srcset", sizesAttribute: "data-sizes", retinaAttribute: "data-retina", loaderAttribute: "data-loader", imageBaseAttribute: "data-imagebase", removeAttribute: !0, handledName: "handled", loadedName: "loaded", effect: "show", effectTime: 0, enableThrottle: !0, throttle: 250, beforeLoad: e, afterLoad: e, onError: e, onFinishedAll: e }, s(t).on("load", function() { r = !0 })
    }(window), (AppYalantis = AppYalantis || {}).Helpers = {
        debounce: function(t, e, i) {
            var n;
            return function() {
                var s = this,
                    o = arguments,
                    r = function() { n = null, i || t.apply(s, o) },
                    a = i && !n;
                clearTimeout(n), n = setTimeout(r, e), a && t.apply(s, o)
            }
        },
        imageOnLoad: function(t, e) {
            if (t) {
                var i = new Image;
                i.onload = function() { "function" == typeof e && e() }, i.src = t
            }
        },
        getBrowserWidth: function() {
            switch (!0) {
                case window.innerWidth < 768:
                    return "mobile";
                case window.innerWidth < 900:
                    return "tabletPortrait";
                case window.innerWidth <= 1024:
                    return "tablet";
                default:
                    return "desktop"
            }
        }
    }, (AppYalantis = AppYalantis || {}).DeviceAdapter = function() {
        var t, e = "data-device",
            i = "data-src",
            n = function() {
                t.each(function() {
                    var t = $(this),
                        e = t.attr(i);
                    t.attr("src", e)
                })
            };
        return { init: function() { t = $("[" + e + '*="' + AppYalantis.Helpers.getBrowserWidth() + '"]'), n() }, lazyLoad: function(t, e) { AppYalantis.Helpers.getBrowserWidth() === e && t.map(AppYalantis.Helpers.imageOnLoad) } }
    }(), (AppYalantis = AppYalantis || {}).BackgroundAdapter = function() {
        var t, e, i, n, s, o, r, a = 50,
            l = 500,
            h = 75,
            c = "scene--bg",
            u = "section--bg",
            d = "data-bg",
            p = "data-bg-switch",
            f = "data-header-transparent",
            m = "",
            g = "",
            v = function(t) {
                var e = $(window).height(),
                    i = 0;
                switch (t.attr(p)) {
                    case "middle":
                        i = e / 2;
                        break;
                    case "bottom":
                        i = e
                }
                return t.offset().top - h - i
            },
            _ = function(t) {
                switch (t.attr(f)) {
                    case "half":
                        offset = t.outerHeight() / 2;
                        break;
                    case "third":
                        offset = t.outerHeight() / 3
                }
                return t.offset().top + offset - h
            },
            y = function() {
                s = [], o = [], i.each(function() {
                    var t = $(this),
                        e = t.attr(d);
                    s.push({ background: e, position: v(t) })
                }), n.each(function() { o.push({ from: $(this).offset().top, to: _($(this)) }) })
            },
            b = function() {
                var t = AppYalantis.Helpers.debounce(k, l);
                i.each(function() {
                    var e = $(this);
                    e.addClass(u + "-" + $(this).attr(d)), e.find("img").each(function() { AppYalantis.Helpers.imageOnLoad($(this).attr("src"), t) })
                })
            },
            w = function() {
                for (var t = "", i = $(window).scrollTop(), n = 0, o = s.length; n < o; n++) {
                    var r = s[n],
                        a = s[n + 1],
                        l = i >= r.position,
                        h = a && i < a.position;
                    if (l && (a ? h : l)) { t = s[n].background; break }
                }
                m !== t && (e.removeAttr("class").addClass(c + "-" + t), m = t)
            },
            x = function() {
                var e = $(window).scrollTop(),
                    i = $(window).height(),
                    n = $(document).height();
                t.css("display", e + i + h >= n ? "none" : "block")
            },
            T = function() {
                for (var e = $(window).scrollTop(), i = 0, n = o.length; i < n; i++) { var s = ""; if (e >= o[0].from && e < o[0].to) { s = "transparent"; break } }
                g !== s && (t.css("background-color", s), g = s)
            },
            k = function() { y(), w(), x(), T() },
            C = function() {
                var t = $(window).scrollTop(),
                    e = !!(r && r > t);
                return r = t, e
            },
            S = function() {
                var t = "scroll-up";
                C() ? e.addClass(t) : e.removeClass(t)
            },
            P = function() { w(), x(), T(), S() };
        return { init: function() { t = $("header.page-header"), e = $("body"), i = $("[" + d + "]"), n = $("[" + f + "]"), /(home|works)/.test(e.data("page")) || (b(), k(), $(window).resize(AppYalantis.Helpers.debounce(k, a)), $(window).scroll(P)) }, onScroll: P, onResize: AppYalantis.Helpers.debounce(k, a) }
    }(), (AppYalantis = AppYalantis || {}).FormCheckbox = function() {
        var t = ".form-checkbox__input",
            e = function() {
                var t = $(this),
                    e = t.closest(".form-checkbox");
                t.is(":checked") ? (t.attr("value", "false"), e.removeClass("form-checkbox--checked")) : (t.attr("value", "true"), e.addClass("form-checkbox--checked"))
            };
        return { init: function() { $(t).change(e) } }
    }(), $(document).ready(function() {
        function t() { e(), AppYalantis.FormCheckbox.init(), AppYalantis.BackgroundAdapter.init(), AppYalantis.DeviceAdapter.init(), AppYalantis.ScrollCatch.init(), n(), s() }

        function e() {
            if (r.length) {
                var t = r.data("page");
                if ("desktop" === AppYalantis.Helpers.getBrowserWidth()) {
                    var e = $("#first-slide").data("src");
                    AppYalantis.Helpers.imageOnLoad(e, function() {
                        var e = $.extend({ mouseForce: 500, showArrowControls: !0 }, i(t));
                        a = new ParticleSlider(e), $(window).on("resize", function() { a.height = r.height(), a.width = r.width() })
                    })
                } else $(".particle-slider").addClass("particle-slider-mobile").removeAttr("id")
            }
        }

        function i(t) {
            switch (t) {
                case "company":
                    return { ptlGap: 1, ptlSize: .75, width: 1e9, height: 1e9, mouseForce: 20 };
                default:
                    return { ptlGap: 5, ptlSize: 2 }
            }
        }

        function n() { /(tabletPortrait|tablet|mobile)/.test(AppYalantis.Helpers.getBrowserWidth()) && $(".section--top-company, .section--top-home").css("min-height", window.innerHeight) }

        function s() {
            var t = $(".flow-artboard"),
                e = $(".anniversary__mobile");
            "desktop" === AppYalantis.Helpers.getBrowserWidth() ? e.remove() : (t.remove(), $(".section--anniversary").append('<div class="anniversary__mobile--bg"><div class="anniversary__mobile--dots"></div></div>'))
        }

        function o() {
            var t = u.closest(".form-checkbox"),
                e = t.hasClass("form-checkbox--checked");
            if (e) $("#subscription-checkbox-error").remove();
            else if (!e && 0 === $("#subscription-checkbox-error").length) {
                var i = $('<div class="form-checkbox__msg"></div>').attr("id", "subscription-checkbox-error").text("Lutfen Gizlilik Politikamizi kabul edin");
                t.append(i)
            }
        }
        document.addEventListener("touchend", function() {}, !0);
        var r = $("#particle-slider"),
            a = null;
        t();
        var l = $("#form-subscribe"),
            h = $("body"),
            c = $(".form-field__input"),
            u = l.find(".checkbox-required");
        c.blur(function() { $(".remove-active").remove(), $(this).parent(c).removeClass("form-field--active"), 0 === $(this).val().length ? $(this).parent($(".form-field")).removeClass("form-field--filled") : $(this).parent($(".form-field")).addClass("form-field--filled") }), c.focus(function() { $(".remove-active").remove(), $(this).parent($(".form-field")).addClass("form-field--active") }), u.on("change", function() { setTimeout(o, 0) }), l.validate({ rules: { "subscription[email]": { required: !0, correct_email: !0, min_size_email: !0, max_size_email: !0 } }, messages: { "subscription[email]": { required: "Lutfen mail adresinizi giriniz", correct_email: "Lutfen gecerli bir mail adresi giriniz" } }, focusInvalid: !1, errorClass: "form-field__msg", errorElement: "div", highlight: function(t) { $(t).closest(".form-field").addClass("form-field--error") }, unhighlight: function(t) { $(t).closest(".form-field").removeClass("form-field--error") }, errorPlacement: function(t, e) { $(e).closest(".form-field").append(t) } }), $.validator.addMethod("correct_email", function(t, e) { return this.optional(e) || null !== t.match(/\S+@\S+\.\S+/) }, "Enter correct email"), $.validator.addMethod("min_size_email", function(t, e) { return !!(this.optional(e) || t.replace(/\s/g, "").length >= 5) }, "Is too short (minimum is 2 characters)"), $.validator.addMethod("max_size_email", function(t, e) { return !(this.optional(e) || t.replace(/\s/g, "").length > 256) }, "Is too long (maximum is 256 characters)"), l.submit(function(t) {
            if (t.preventDefault(), o(), !($("#subscription-checkbox-error").length || $(".form-field--error").length)) {
                var e = $(this).find("input[name='subscription[email]']").val(),
                    i = u.val();
                $.ajax({ type: "POST", url: window.location.origin + "/subscriptions", data: { privacy_policy_accepted: i, email: e }, success: function(t) { t.success ? ($(".sender__subscribe").css("display", "none"), $("#subscribe-complete").css("display", "block"), setTimeout(function() { h.css("overflow", "auto"), $(".modal").removeClass("modal--open"), $(".sender__subscribe").css("display", "block"), $("#subscribe-complete").css("display", "none"), l.each(function() { this.reset() }) }, 2e3)) : $(".form-field.form-field--filled").addClass("form-field--error").append('<div id="subscription[email]-error" class="form-field__msg remove-active" style="">' + t.errors.email + "</div>") }, error: function(t) { console.log("error " + t) } })
            }
        }), $(".build-scheme__title, .build-scheme__block").mouseenter(function() { $(".build-scheme__item").removeClass("build-scheme__item--open"), $(this).closest(".build-scheme__item").addClass("build-scheme__item--open") }), $(".architect-scheme__title-wrap").mouseenter(function() { $(".architect-scheme__item").removeClass("architect-scheme__item--open"), $(this).closest(".architect-scheme__item").addClass("architect-scheme__item--open") }), $(".list--process .list__item").click(function() { $(this).siblings(".list__item").removeClass("list__item--open"), $(this).hasClass("list__item--open") ? $(this).removeClass("list__item--open") : $(this).addClass("list__item--open") }), $(".quotes-wrap").slick({ fade: !0 })
    }), $(document).ready(function() {
        var t = Power1.easeOut,
            e = .75,
            i = new ScrollMagic.Controller;
        new ScrollMagic.Scene({ triggerElement: "[data-animation-anniversary]" }).on("enter", function() { $(".flow-layer").each(function() { $(this).addClass("animation") }) }).addTo(i);
        $(".section__heading, .recent-projects .project__desc, .concept__desc, .architect-scheme, .mails-list").each(function() { new ScrollMagic.Scene({ triggerElement: this, triggerHook: .85 }).setTween(TweenMax.from($(this), .5, { yPercent: 50, opacity: 0, ease: t })).reverse(!1).addTo(i) });
        new ScrollMagic.Scene({ triggerElement: ".list--process", triggerHook: "onEnter" }).setTween((new TimelineMax).staggerFrom(".list--process", .5, { yPercent: 25, opacity: 0, ease: t }).staggerFrom(".list--process .list__item", .15, { borderColor: "transparent", ease: t }, 0, .5)).reverse(!1).addTo(i);
        $(".section__control").each(function() { new ScrollMagic.Scene({ triggerElement: this, triggerHook: .9 }).setTween(TweenMax.from($(this), .5, { yPercent: 50, opacity: 0, ease: t })).reverse(!1).addTo(i) }), $(".team-list__item, .list--team .list__item, .knowledge-list__item, .knowledge-timeline__item, .quote, .description-list__item, .previews-list__item, .architect-scheme").each(function() { new ScrollMagic.Scene({ triggerElement: this, triggerHook: "onEnter" }).setTween(TweenMax.from($(this), .5, { opacity: 0, yPercent: 25, ease: t })).reverse(!1).addTo(i) }), $(".list--services-blocks").each(function() { new ScrollMagic.Scene({ triggerElement: this, triggerHook: "onEnter" }).setTween(TweenMax.from($(this), .5, { yPercent: 25, ease: t })).reverse(!1).addTo(i) });
        new ScrollMagic.Scene({ triggerElement: ".list--competition", triggerHook: e }).setTween((new TimelineMax).staggerFrom(".list--competition .list__item", .5, { yPercent: 50, opacity: 0, ease: t }, .15)).reverse(!1).addTo(i), new ScrollMagic.Scene({ triggerElement: ".list--models", triggerHook: e }).setTween((new TimelineMax).staggerFrom(".list--models .list__item", .5, { yPercent: 50, opacity: 0, ease: t }, .15).staggerFrom(".list--models .img", .5, { scale: 0, ease: t }, .15, .5)).reverse(!1).addTo(i);
        if ($(".list--divider .list__item").each(function() { new ScrollMagic.Scene({ triggerElement: this, triggerHook: e }).setTween((new TimelineMax).from($(this).find(".img"), .5, { scale: 0, ease: t }, 0).from($(this).find(".divider"), .5, { scale: 0, ease: t }, 0).from($(this).find(".title"), .5, { y: 50, opacity: 0, ease: t }, .5).from($(this).find(".text, .list"), .5, { y: -50, opacity: 0, ease: t }, .5)).reverse(!1).addTo(i) }), $(".list--icons, .list--clients, .list--news, .list--devices, .list--cards, .list--previews, .list--graph, .list--tech-blocks").each(function() { new ScrollMagic.Scene({ triggerElement: this, triggerHook: e }).setTween((new TimelineMax).staggerFrom($(this).find(".list__item"), .5, { yPercent: 50, opacity: 0, ease: t }, .15).staggerFrom($(this).find(".img"), .5, { scale: 0, ease: t }, .15, 0).staggerFrom($(this).find(".logo"), .5, { scale: 0, ease: t }, .15, 0)).reverse(!1).addTo(i) }), $(".index-list__item").each(function() { new ScrollMagic.Scene({ triggerElement: this, triggerHook: e }).setTween((new TimelineMax).from($(this).find(".index-list__divider"), .5, { scale: 0, ease: t }).from($(this).find(".index-list__item-title"), .5, { yPercent: 50, opacity: 0, ease: t }, .5)).reverse(!1).addTo(i) }), $(".tech-scheme").each(function() { new ScrollMagic.Scene({ triggerElement: this, triggerHook: e }).setClassToggle(this, "animated").reverse(!1).addTo(i) }), $(".graph").length) { var n = (new TimelineMax).to(".graph__line-inner", 1.4, { width: "100%", ease: t }).from(".graph__legend, .graph .gradient, .graph__dot", .5, { opacity: 0, ease: t }, 1.4); if ($(window).width() >= 768) new ScrollMagic.Scene({ triggerElement: ".graph", triggerHook: e }).setTween(n).reverse(!1).addTo(i) }
        if ($(".goals-scheme").length) {
            var s = $(".goals-scheme__item"),
                o = (new TimelineMax).from([s[0], s[2], s[4]], .6, { opacity: 0, ease: t }).from(s[0], .6, { left: "50%", xPercent: -50, ease: t }, .6).from(s[4], .6, { right: "50%", xPercent: 50, ease: t }, .6).from(".goals-scheme__item-title", .4, { opacity: 0, ease: t }, 1.2).from([s[1], s[3]], .6, { scaleY: 0, opacity: 0, ease: t }, 1.2).staggerFrom($(s[1]).find(".goals-scheme__item-list li"), .4, { opacity: 0, xPercent: -30, ease: t }, .05, 1.8).staggerFrom($(s[3]).find(".goals-scheme__item-list li"), .4, { opacity: 0, xPercent: 30, ease: t }, .05, 1.8);
            if ($(window).width() >= 768) new ScrollMagic.Scene({ triggerElement: ".goals-scheme", triggerHook: e }).setTween(o).reverse(!1).addTo(i)
        }
        if ($(".build-scheme").length) {
            var r = $(".build-scheme__block"),
                a = (new TimelineMax).from(r[0], .3, { opacity: 0, ease: t }).staggerFrom([r[1], r[2], r[3], r[4]], .2, { x: -200, opacity: 0, ease: t }, .1, .1).from(".build-scheme__title", .3, { opacity: 0, ease: t }, .7).from(".build-scheme__text", .3, { color: "transparent", ease: t }, .7);
            if ($(window).width() >= 768) new ScrollMagic.Scene({ triggerElement: ".build-scheme", triggerHook: e, offset: 100 }).setTween(a).reverse(!1).addTo(i)
        }
        if ($(".web-scheme").length) {
            var l = (new TimelineMax).from($(".web-scheme__circles"), .3, { opacity: 0, ease: Power1.easeOut }).from($(".circle--left"), .6, { transform: "rotate(87deg)", ease: Power1.easeOut }, .6).from($(".circle--right"), .6, { transform: "rotate(-87deg)", ease: Power1.easeOut }, .6).from($(".circle__part"), .1, { opacity: 0, ease: Power1.easeOut }, .7).from($(".circle__part span"), .3, { opacity: 0, ease: Power1.easeOut }, 1.2);
            if ($(window).width() >= 768) new ScrollMagic.Scene({ triggerElement: ".web-scheme", triggerHook: e }).setTween(l).reverse(!1).addTo(i)
        }
        if ($(".design-scheme").length) {
            var h = $(".design-scheme__item"),
                c = (new TimelineMax).from($(".design-scheme__item"), .2, { opacity: 0, ease: t }).from(h[0], .5, { x: h[0].offsetWidth / 2, ease: t }, .2).from(h[2], .5, { x: -h[2].offsetWidth / 2, ease: t }, .2).from(h.find(".arrow"), .2, { opacity: 0, ease: Power1.easeOut }, .7).from(h.find(".arrow"), .5, { width: 0, ease: Power1.easeOut }, .9).from($(".design-scheme .overlay, .design-scheme .title"), .5, { opacity: 0, ease: Power1.easeOut }, .9);
            if ($(window).width() >= 768) new ScrollMagic.Scene({ triggerElement: ".design-scheme", triggerHook: e }).setTween(c).reverse(!1).addTo(i)
        }
        if ($(".devices-scheme").length) {
            var u = $(".devices-scheme__item"),
                d = (new TimelineMax).from([u[1], u[2]], .2, { opacity: 0, ease: t }).from(u[1], .5, { x: u[1].offsetWidth / 2, ease: t }, .2).from(u[2], .5, { x: -u[2].offsetWidth / 2, ease: t }, .2).from([u[0], u[3]], .2, { opacity: 0, ease: t }).from(u[0], .5, { x: u[0].offsetWidth, ease: t }, .7).from(u[3], .5, { x: -u[3].offsetWidth, ease: t }, .7).from(".devices-scheme .img-overlay, .devices-scheme .title", .5, { opacity: 0, ease: t }, 1.4).from(".devices-scheme .img", .5, { scale: 0, ease: t }, 1.4);
            if ($(window).width() >= 768) new ScrollMagic.Scene({ triggerElement: ".devices-scheme", triggerHook: e }).setTween(d).reverse(!1).addTo(i)
        }
        new ScrollMagic.Scene({ triggerElement: ".section--bg-vishnu .concept__desc", triggerHook: e }).setTween((new TimelineMax).from(".section--bg-vishnu .section__bg-item:nth-child(1)", .5, { yPercent: 50, opacity: 0, ease: t }, .2).from(".section--bg-vishnu .section__bg-item:nth-child(2)", .8, { yPercent: 50, opacity: 0, ease: t }, .2)).reverse(!1).addTo(i);
        if ($(".concept__gallery").each(function() {
                function n() {
                    var n = (new TimelineMax).from(o, .5, { yPercent: 50, opacity: 0, ease: t }).from(s[0], .5, { xPercent: 140, ease: t }, .5).from(s[1], .5, { xPercent: 90, ease: t }, .5).from(s[3], .5, { xPercent: -90, ease: t }, .5).from(s[4], .5, { xPercent: -140, ease: t }, .5);
                    new ScrollMagic.Scene({ triggerElement: o, triggerHook: e }).setTween(n).reverse(!1).addTo(i)
                }
                var s = $(this).find(".concept__gallery-item"),
                    o = this,
                    r = 0,
                    a = 0;
                s.each(function() {
                    var t = $(this).find("img").attr("src");
                    t && (r++, AppYalantis.Helpers.imageOnLoad(t, function() {++a === r && n() }))
                })
            }), $(".devices-scheme-android").length) {
            var p = $(".devices-scheme-android__item"),
                f = (new TimelineMax).from([p[0], p[1]], .2, { opacity: 0, ease: t }).from(p[0], .5, { x: p[0].offsetWidth, ease: t }, .2).from(p[1], .5, { x: -p[1].offsetWidth, ease: t }, .2).from(p[2], .2, { opacity: 0, ease: t }, .7).from(".devices-scheme-android .img-overlay, .devices-scheme-android .title", .5, { opacity: 0, ease: t }, .9).from(".devices-scheme-android .img", .5, { scale: 0, ease: t }, .9);
            if ($(window).width() >= 768) new ScrollMagic.Scene({ triggerElement: ".devices-scheme-android", triggerHook: e }).setTween(f).reverse(!1).addTo(i)
        }
        if ($(".pm-scheme").length) {
            var m = $(".pm-scheme__item"),
                g = (new TimelineMax).from(m[1], .2, { opacity: 0, ease: t }).from($(m[1]).find(".title"), .2, { opacity: 0, ease: t }, .1).from($(m[1]).find(".img"), .2, { scale: 0, ease: t }, .1).from(m[0], .5, { opacity: 0, x: m[0].offsetWidth / 2, ease: t }, .1).from(m[2], .5, { opacity: 0, x: -m[2].offsetWidth / 2, ease: t }, .1).from($([m[0], m[2]]).find(".title"), .2, { opacity: 0, ease: t }, .5).from($([m[0], m[2]]).find(".img"), .2, { scale: 0, ease: t }, .5).from(m[3], .5, { opacity: 0, x: m[3].offsetWidth, y: -m[3].offsetWidth / 2, ease: t }, .5).from(m[5], .5, { opacity: 0, x: -m[5].offsetWidth, y: -m[5].offsetWidth / 2, ease: t }, .5).from($([m[3], m[5]]).find(".title"), .2, { opacity: 0, ease: t }, .9).from($([m[3], m[5]]).find(".img"), .2, { scale: 0, ease: t }, .9).from(m[4], .5, { opacity: 0, y: -m[4].offsetWidth / 2, ease: t }, .9).from($(m[4]).find(".title"), .2, { opacity: 0, ease: t }, 1.3).from($(m[4]).find(".img"), .2, { scale: 0, ease: t }, 1.3);
            if ($(window).width() >= 768) new ScrollMagic.Scene({ triggerElement: ".pm-scheme", triggerHook: "onCenter" }).setTween(g).reverse(!1).addTo(i)
        }
        if ($(".ui-scheme").length) {
            var v = $(".ui-scheme__figure"),
                _ = (new TimelineMax).from($(".ui-scheme__device-wrap"), .4, { yPercent: 50, ease: t }).from($(".ui-scheme__figures-wrap"), .1, { opacity: 0, ease: t }, .4).from([v[0], v[1]], .5, { scaleX: .5, ease: t }, .4).from(v[2], .5, { x: v[2].offsetWidth, ease: t }, .4).from(v[3], .5, { x: v[3].offsetWidth, ease: t }, .4);
            if ($(window).width() >= 768) new ScrollMagic.Scene({ triggerElement: ".ui-scheme", triggerHook: e }).setTween(_).reverse(!1).addTo(i)
        }
        if ($(".qa-scheme").length) {
            var y = $(".qa-scheme__item"),
                b = (new TimelineMax).from(y[1], .2, { opacity: 0, ease: t }).from(".qa-scheme__item:nth-child(2) .img", .5, { transform: "rotate(-90deg)", ease: t }, .2).from(y[0], .5, { opacity: 0, x: y[0].offsetWidth / 2, ease: t }, .2).from(y[2], .5, { opacity: 0, x: -y[2].offsetWidth / 2, ease: t }, .2);
            if ($(window).width() >= 768) new ScrollMagic.Scene({ triggerElement: ".qa-scheme", triggerHook: e }).setTween(b).reverse(!1).addTo(i)
        }
        if ($(".method-scheme").length) { $(".method-scheme__item"); var w = (new TimelineMax).from($(".method-scheme__item"), .2, { opacity: 0, yPercent: 50, ease: t }).from($(".method-scheme .overlay"), .5, { opacity: 0, ease: t }, .2).from($(".method-scheme .layer1"), .5, { scale: 0, ease: t }, .7).from($(".method-scheme .layer2"), .5, { scale: 0, ease: t }, 1.2).from($(".method-scheme .layer3"), .5, { scale: 0, ease: t }, 1.5).from(".method-scheme .title", .5, { opacity: 0, ease: t }, .2); if ($(window).width() >= 768) new ScrollMagic.Scene({ triggerElement: ".method-scheme", triggerHook: e }).setTween(w).reverse(!1).addTo(i) }
        var x = function() { typer(".code-frame", 25).line('<code class="code-frame__row"><span class="code-frame__keyword--red">&nbsp;private var</span> sprites: [<span class="code-frame__keyword--mint">Sprite</span>] = []</code>').line('<code class="code-frame__row"><span class="code-frame__keyword--red">&nbsp;private var</span> glContext: <span class="code-frame__keyword--blue">EAGLContext</span>!</code>').line('<code class="code-frame__row"><span class="code-frame__keyword--red">&nbsp;private var</span> effect: <span class="code-frame__keyword--blue">GLKBaseEffect</span>!</code>').line('<code class="code-frame__row"><span class="code-frame__keyword--red">&nbsp;private var</span> glView: <span class="code-frame__keyword--blue">GLKView</span>!</code>').line('<code class="code-frame__row"><span class="code-frame__keyword--red">&nbsp;private var</span> displayLink: <span class="code-frame__keyword--blue">CADisplayLink</span>!</code>').line('<code class="code-frame__row"><span class="code-frame__keyword--red">&nbsp;private var</span> lastUpdateTime: <span class="code-frame__keyword--blue">NSTimeInterval</span>?</code>').line('<code class="code-frame__row"><span class="code-frame__keyword--red">&nbsp;private var</span> startTransitionTime: <span class="code-frame__keyword--blue">NSTimeInterval</span>!</code>').line('<code class="code-frame__row"><span class="code-frame__keyword--red">&nbsp;private var</span> transitionContext: <span class="code-frame__keyword--blue">UIViewControllerContextTransitioning</span>!</code>').line('<code class="code-frame__row"><span class="code-frame__keyword--red">&nbsp;private var</span> render: <span class="code-frame__keyword--mint">SpriteRender</span>!</code>').line('<code class="code-frame__row">&nbsp;</code>').line('<code class="code-frame__row"><span class="code-frame__keyword--red">&nbsp;public func</span> transitionDuration(transitionContext: <span class="code-frame__keyword--blue">UIViewControllerContextTransitioning</span>?) -> NSTimeInterval {</code>').line('<code class="code-frame__row"><span class="code-frame__keyword--red">&nbsp;&nbsp;return self</span>.<span class="code-frame__keyword--mint">duration</span>!</code>').line('<code class="code-frame__row">&nbsp;}</code>').line('<code class="code-frame__row">&nbsp;</code>').line('<code class="code-frame__row"><span class="code-frame__keyword--red">&nbsp;public func</span> animateTransition(transitionContext: <span class="code-frame__keyword--blue">UIViewControllerContextTransitioning</span>) {</code>\n').line('<code class="code-frame__row">&nbsp;</code>').line('<code class="code-frame__row"><span class="code-frame__keyword--red">&nbsp;&nbsp;let</span> containerView = transitionContext. <span class="code-frame__keyword--blue">containerView</span>()!</code>\n').line('<code class="code-frame__row"><span class="code-frame__keyword--red">&nbsp;&nbsp;let></span> fromView = transitionContext.<span class="code-frame__keyword--blue">viewControllerForKey</span>(<span class="code-frame__keyword--blue">UITransitionContextFromViewControllerKey</span>)!.view</code>\n').line('<code class="code-frame__row"><span class="code-frame__keyword--red">&nbsp;&nbsp;let</span> toView = transitionContext.<span class="code-frame__keyword--blue">viewControllerForKey</span>(<span class="code-frame__keyword--blue">UITransitionContextFromViewControllerKey</span>)!.view</code>\n').line('<code class="code-frame__row">&nbsp;</code>').line('<code class="code-frame__row">&nbsp;&nbsp;containerView.<span class="code-frame__keyword--blue">addSubview</span>(toView)</code>').line('<code class="code-frame__row">&nbsp;&nbsp;containerView.<span class="code-frame__keyword--blue">sendSubviewToBack</span>(toView)</code>').line('<code class="code-frame__row">&nbsp;</code>').line('<code class="code-frame__row"><span class="code-frame__keyword--red">&nbsp;&nbsp;func</span> randomFloatBetween(smallNumber: <span class="code-frame__keyword--blue">CGFloat</span>, and bigNumber: <span class="code-frame__keyword--blue">CGFloat</span>) -> <span class="code-frame__keyword--blue">Float</span> {</code>\n').line('<code class="code-frame__row"><span class="code-frame__keyword--red">&nbsp;&nbsp;&nbsp;let</span> diff = bigNumber - smallNumber</code>').line('<code class="code-frame__row"><span class="code-frame__keyword--red">&nbsp;&nbsp;&nbsp;return</span> <span class="code-frame__keyword--blue">Float</span>(<span class="code-frame__keyword--blue">CGFloat</span>(<span class="code-frame__keyword--blue">arc4random</span>()) / <span class="code-frame__keyword--violet">100.0</span> % diff + smallNumber)</code>\n').line('<code class="code-frame__row">&nbsp;&nbsp;}</code>').line('<code class="code-frame__row">&nbsp;</code>').line('<code class="code-frame__row"><span class="code-frame__keyword--red">&nbsp;&nbsp;self</span>.<span class="code-frame__keyword--mint">glContext</span> = <span class="code-frame__keyword--blue">EAGLContext</span>(API: .<span class="code-frame__keyword--blue">OpenGLES2</span>)</code>\n').line('<code class="code-frame__row"><span class="code-frame__keyword--blue">&nbsp;&nbsp;EAGLContext</span>.<span class="code-frame__keyword--blue">setCurrentContext</span>(<span class="code-frame__keyword--mint">glContext</span>)</code>\n') };
        $(".code-frame").length && new ScrollMagic.Scene({ triggerElement: ".code-frame", triggerHook: e }).setTween((new TimelineMax).call(x, [], this)).reverse(!1).addTo(i);
        var T = function() { typer(".code-editor__body", 25).line('<code class="code__row"><span class="code__keyword--orange">@IBOutlet private var</span> featureImageView: <span class="code__keyword--red">UIImageView</span>!</code>').line('<code class="code__row"><span class="code__keyword--orange">@IBOutlet private</span> featureTitleLabel: <span class="code__keyword--red">UILabel</span>!</code>').line('<code class="code__row"><span class="code__keyword--orange">@IBOutlet private</span> featureCountLabel: <span class="code__keyword--red">UILabel</span>!</code>').line('<code class="code__row">&nbsp;</code>').line('<code class="code__row"><span class="code__keyword--orange">func </span>configure(with feature: <span class="code__keyword--red">Feature</span>, count: <span class="code__keyword--red">Int</span>) {</code>').line('<code class="code__row">&nbsp;<span class="code__keyword--orange">let</span> options = [.avoidAutoSetImage, .retryFailed]</code>').line('<code class="code__row">&nbsp;<span class="code__keyword--red">if let</span> urlString = feature.inactiveImage?.url {</code>').line('<code class="code__row">&nbsp;&nbsp;featureImageView.sd_setImageWithURL(</code>').line('<code class="code__row">&nbsp;&nbsp;&nbsp;NSURL(string: urlString),</code>').line('<code class="code__row">&nbsp;&nbsp;&nbsp;placeholderImage: <span class="code__keyword--orange">nil</span>,</code>').line('<code class="code__row">&nbsp;&nbsp;&nbsp;options: <span class="code__keyword--orange">options</span>,</code>').line('<code class="code__row">&nbsp;&nbsp;&nbsp;completion: <span class="code__keyword--orange">nil</span>)</code>').line('<code class="code__row">&nbsp;}</code>').line('<code class="code__row">&nbsp;featureTitleLabel.text = feature.name</code>').line('<code class="code__row">&nbsp;featureCountLabel.text = <span class="code__keyword--orange">\u201c</span>\\<span class="code__keyword--orange">(</span>count<span class="code__keyword--orange">)\u201d</span></code>').line('<code class="code__row">}</code>').line('<code class="code__row">&nbsp;</code>').line('<code class="code__row"><span class="code__keyword--orange">override func</span> prepareForReuse() {</code>').line('<code class="code__row">&nbsp;<span class="code__keyword--orange">super</span>.prepareForReuse()</code>').line('<code class="code__row">&nbsp;featureImageView.sd_cancelCurrentImageLoad()</code>').line('<code class="code__row">}</code>').line('<code class="code__row">&nbsp;</code>') };
        if ($(".dev-scheme").length) {
            var k = $(".dev-scheme__item"),
                C = (new TimelineMax).from([k[0], k[2]], .8, { yPercent: 50, ease: t }).from(k[0], .8, { x: k[0].offsetWidth, ease: t }, .8).from(k[2], .8, { x: -k[2].offsetWidth, ease: t }, .8).from(k[1], .4, { opacity: 0, ease: t }, .9).from(".dev-scheme .title, .dev-scheme .text", .8, { opacity: 0, yPercent: 50, ease: t }).from(".dev-scheme .code-editor", .8, { opacity: 0, ease: t }, 1.3).from(".dev-scheme .j-start-typer", .1, { opacity: 0, ease: t }).call(T, [], this, 2.1);
            if ($(window).width() >= 768) new ScrollMagic.Scene({ triggerElement: ".dev-scheme", triggerHook: e }).setTween(C).reverse(!1).addTo(i)
        }
        $(".design-projects .section--project:nth-child(1)").each(function() { new ScrollMagic.Scene({ triggerElement: this, triggerHook: "onCenter" }).setTween((new TimelineMax).from($(this).find(".project__img-wrap"), .5, { xPercent: -50, opacity: 0, ease: t }).from($(this).find(".project__desc"), .5, { xPercent: 50, opacity: 0, ease: t }, 0).from($(this).find(".balloons"), .5, { scale: 0, opacity: 0, ease: t }, .5).from($(this).find(".humans"), .5, { opacity: 0, ease: t }, 1)).reverse(!1).addTo(i) }), $(".design-projects .section--project:nth-child(2)").each(function() { new ScrollMagic.Scene({ triggerElement: this, triggerHook: e }).setTween((new TimelineMax).from($(this).find(".project__img-wrap"), .5, { xPercent: 50, opacity: 0, ease: t }).from($(this).find(".project__desc"), .5, { xPercent: -50, opacity: 0, ease: t }, 0).from($(this).find(".dots"), .5, { xPercent: 50, opacity: 0, ease: t }, .5)).reverse(!1).addTo(i) }), $(".design-projects .section--project:nth-child(3)").each(function() { new ScrollMagic.Scene({ triggerElement: this, triggerHook: "onCenter" }).setTween((new TimelineMax).from($(this).find(".project__img-wrap"), .5, { xPercent: -50, opacity: 0, ease: t }).from($(this).find(".project__desc"), .5, { xPercent: 50, opacity: 0, ease: t }, 0)).setClassToggle(".design-projects .section--project:nth-child(3) .balloons", "animated").reverse(!1).addTo(i) });
        new ScrollMagic.Scene({ triggerElement: ".global-map__text", triggerHook: "onEnter" }).on("enter", function() { $(".global-map__map").addClass("global-map__map--active") }).on("leave", function() { $(".global-map__map").removeClass("global-map__map--active") }).addTo(i)
    }), (AppYalantis = AppYalantis || {}).ScrollCatch = function() {
        function t() {
            switch ($("body").data("page")) {
                case "works":
                    $(document).on("works-async", e);
                    break;
                case "home":
                    e(), setTimeout(r, 2e3);
                    break;
                default:
                    return
            }
        }

        function e() { f = $(".recent-projects"), m = $(".section"), g = $(".page-header"), i(), $(window).on("resize", AppYalantis.Helpers.debounce(r, 200)) }

        function i() {
            m.each(function(t, e) {
                var i = n(t, e);
                $(e).addClass(y + "-" + i.currentBgKey), a(e).on("enter", i.animate("enter")).on("leave", i.animate("leave")).addTo(v)
            })
        }

        function n(t, e) {
            var i = $(e),
                n = s(t),
                r = l(i),
                a = l(n);
            return {
                currentBgKey: r.key,
                animate: function(t) {
                    switch (t) {
                        case "enter":
                            return function() {
                                var t = "static" === n.data("scroll-type") ? 0 : o(i),
                                    e = "static" === i.data("scroll-type");
                                h(r, t, e), c(i, !1)
                            };
                        case "leave":
                            return function() {
                                var t = "static" === n.data("scroll-type") ? 0 : o(i),
                                    e = "static" === n.data("scroll-type");
                                h(a, t, e), c(i, !0)
                            }
                    }
                }
            }
        }

        function s(t) { return m.eq(t - 1 > 0 ? t - 1 : 0) }

        function o(t) { return void 0 !== t.data("duration") ? t.data("duration") : w }

        function r() {
            var t = $(window).scrollTop();
            k.reduce(function(e, i) { return t >= e.scrollOffset() && t <= i.scrollOffset() && e.trigger("enter"), i })
        }

        function a(t) {
            var e = $(t).data("trigger-hook"),
                i = $(t).data("offset"),
                n = void 0 !== e ? e : x,
                s = void 0 !== i ? i : 0,
                o = new ScrollMagic.Scene({ triggerElement: t, triggerHook: n, offset: s, reverse: !0 });
            return k.push(o), o
        }

        function l(t) { var e = $(t).data("bg"); return { key: e, color: T[e] || "#000" } }

        function h(t, e, i) {
            var n = t.key,
                s = t.color;
            u(n), i || TweenMax.to(f, e, { background: s, ease: _ }), TweenMax.to(g, e, { background: s.replace(/1\)/g, "0.9)"), ease: _ })
        }

        function c(t, e) { "hide-header" === t.data("scroll-type") && TweenMax.to(g, 0, { opacity: e ? 1 : 0, ease: _ }) }

        function u(t) { p(), document.body.classList.add(b + "-" + t) }

        function d() { return { "white-smoke": "linear-gradient(to left, rgba(245, 245, 245, 1), rgba(245, 245, 245, 1))", anniversary: "linear-gradient(to left, rgba(24, 24, 34, 1), rgba(24, 24, 34, 1))", "world-cleanup": "linear-gradient(to left, rgba(0, 133, 214, 1), rgba(0, 133, 214, 1))", kpmg: "linear-gradient(to left, rgba(1, 108, 185, 1), rgba(42, 123, 181, 1))", "connect-home": "linear-gradient(to left, rgba(22, 24, 28, 1), rgba(22, 24, 28, 1))", ecuris: "linear-gradient(to left, rgba(34, 108, 166, 1), rgba(33, 135, 191, 1))", "brilliant-move": "linear-gradient(to left, rgba(180, 52, 246, 1), rgba(81, 78, 192, 1))", homesway: "linear-gradient(to left, rgba(44, 50, 57, 1), rgba(68, 73, 79, 1))", pogo: "linear-gradient(to left, rgba(237, 238, 214, 1), rgba(23, 199, 194, 1))", talos: "linear-gradient(to left, rgba(229, 229, 229, 1), rgba(229, 229, 229, 1))", "fitness-center-platform": "linear-gradient(to left, rgba(34, 192, 201, 1), rgba(55, 192, 182, 1))", jetjournal: "linear-gradient(to left, rgba(67, 131, 237, 1), rgba(67, 131, 237, 1))", vishnu: "linear-gradient(to left, rgba(218, 217, 255, 1), rgba(118, 129, 192, 1))", "on-demand": "linear-gradient(to left, rgba(52, 159, 255, 1), rgba(52, 186, 254, 1))", bro: "linear-gradient(to left, rgba(47, 154, 219, 1), rgba(0, 133, 214, 1))", "workout-book": "linear-gradient(to left, rgba(38, 120, 101, 1), rgba(37, 149, 101, 1))", autoportal: "linear-gradient(to left, rgba(213, 86, 70, 1), rgba(204, 49, 29, 1))", snapbook: "linear-gradient(to left, rgba(64, 73, 88, 1), rgba(89, 96, 107, 1))", black: "linear-gradient(to left, rgba(22,24,28, 1), rgba(22,24,28, 1))", grey: "linear-gradient(to left, rgba(35,37,44, 1), rgba(35,37,44, 1))", growfit: "linear-gradient(to left, rgba(0,25,47, 1), rgba(0,25,47, 1))" } }

        function p() { for (var t = document.body.classList, e = 0; e < t.length; e++) { var i = t[e]; /scene--bg.+/.test(i) && document.body.classList.remove(i) } }
        var f, m, g, v = new ScrollMagic.Controller,
            _ = Power1.easeOut,
            y = "section--bg",
            b = "scene--bg",
            w = 1.5,
            x = .5,
            T = d(),
            k = [];
        return { init: t }
    }(), $(document).ready(function() {
        var t = function(t) { var e = document.createElement("a"); return e.href = t, { full: t, protocol: e.protocol, hostname: e.hostname, port: e.port, pathname: e.pathname, search: e.search, hash: e.hash, host: e.host } },
            e = (t("https://yalantis.com/"), ["send", "event"]);
        $(document).on("click", ".section-ready-to-contact a", function() { ga.apply(this, e.concat(["conversion", "clicked on call to action", "clicked on call to action on page " + window.location.pathname])) }), $(document).on("click", ".section-segments-we-cover a", function() { ga.apply(this, e.concat(["engagement", "opened segment page", "opened segment page  - " + t($(this).attr("href")).pathname])) }), $(document).on("click", "#experiments a", function() { ga.apply(this, e.concat(["engagement", "opened experiment page", "opened experiment page  - " + t($(this).attr("href")).pathname])) }), $(document).on("click", "#related a", function() { ga.apply(this, e.concat(["engagement", "opened related article", "opened related article on page " + window.location.pathname + " direction - " + t($(this).attr("href")).pathname])) }), $(document).on("click", ".article-related a", function() { ga.apply(this, e.concat(["engagement", "opened related article on blog", "opened related article on page " + window.location.pathname + " direction - " + t($(this).attr("href")).pathname])) }), $(document).on("click", ".article-w a", function() { this.href.includes("yalantis.com/blog") && ga.apply(this, e.concat(["engagement", "opened relevant article", "opened relevant article on page " + window.location.pathname + " direction - " + t($(this).attr("href")).pathname])) }), $(document).on("submit", "#new_contact", function() { gtag && gtag("event", "sent form", { event_category: "conversion" }) }), $(document).on("click", ".subscription-dialog", function() { ga.apply(this, e.concat(["engagement", "subscribe", "subscribe" + window.location.pathname])) }), $(document).on("complite-subscribe", function() { ga.apply(this, e.concat(["conversion", "subscribed", "subscribed" + window.location.pathname])) })
    }), $(document).ready(function() {
        var t = .5,
            e = 100,
            i = .1,
            n = !1,
            s = $("body");
        $("#headerButtonBurger").click(function() { n ? (s.css("overflow", "auto"), $(".main-nav").removeClass("main-nav--open"), $(".icon-burger").removeClass("icon-burger--active"), n = !n) : (TweenMax.staggerFromTo(".main-nav__list li", t, { opacity: 0, cycle: { x: [-e, e] } }, { opacity: 1, cycle: { x: [0, 0] } }, i), s.css("overflow", "hidden"), $(".main-nav").addClass("main-nav--open"), $(".icon-burger").addClass("icon-burger--active"), n = !n) }), $("#modalButtonClose").click(function() { s.css("overflow", "auto"), $(".modal").removeClass("modal--open") })
    }), $(document).ready(function() {
        var t = $("body");
        $("#footerButton").click(function() { t.css("overflow", "hidden"), $(".modal").addClass("modal--open") }), $("#modalButtonClose").click(function() { t.css("overflow", "auto"), $(".modal").removeClass("modal--open") })
    }), $("body").css("overflow", "hidden"), $(document).ready(function() {
        var t = $(".page-loader"),
            e = 500,
            i = 1500,
            n = 2500,
            s = 3500;
        t.addClass("page-loader--step-1"), setTimeout(function() { t.addClass("animate-point") }, e), setTimeout(function() { t.addClass("page-loader--step-3 hide") }, i), setTimeout(function() { $("body").css("overflow", "auto") }, n), setTimeout(function() { t.removeClass("page-loader--step-3"), t.remove() }, s)
    }), $(document).ready(function() {
        var t = $(".cookies"),
            e = $(".cookies .controls-list .btn");
        localStorage.getItem("userAgreedCookiesUsage") || t.addClass("cookies--show"), e.click(function() { t.removeClass("cookies--show"), localStorage.setItem("userAgreedCookiesUsage", !0) })
    });