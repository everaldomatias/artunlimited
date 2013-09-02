(function (e, t) {
    function _(e) {
        var t = M[e] = {};
        return v.each(e.split(y), function (e, n) {
            t[n] = !0
        }), t
    }

    function H(e, n, r) {
        if(r === t && e.nodeType === 1) {
            var i = "data-" + n.replace(P, "-$1")
                .toLowerCase();
            r = e.getAttribute(i);
            if(typeof r == "string") {
                try {
                    r = r === "true" ? !0 : r === "false" ? !1 : r === "null" ? null : +r + "" === r ? +r : D.test(r) ? v.parseJSON(r) : r
                } catch(s) {}
                v.data(e, n, r)
            } else r = t
        }
        return r
    }

    function B(e) {
        var t;
        for(t in e) {
            if(t === "data" && v.isEmptyObject(e[t])) continue;
            if(t !== "toJSON") return !1
        }
        return !0
    }

    function et() {
        return !1
    }

    function tt() {
        return !0
    }

    function ut(e) {
        return !e || !e.parentNode || e.parentNode.nodeType === 11
    }

    function at(e, t) {
        do e = e[t]; while (e && e.nodeType !== 1);
        return e
    }

    function ft(e, t, n) {
        t = t || 0;
        if(v.isFunction(t)) return v.grep(e, function (e, r) {
            var i = !! t.call(e, r, e);
            return i === n
        });
        if(t.nodeType) return v.grep(e, function (e, r) {
            return e === t === n
        });
        if(typeof t == "string") {
            var r = v.grep(e, function (e) {
                return e.nodeType === 1
            });
            if(it.test(t)) return v.filter(t, r, !n);
            t = v.filter(t, r)
        }
        return v.grep(e, function (e, r) {
            return v.inArray(e, t) >= 0 === n
        })
    }

    function lt(e) {
        var t = ct.split("|"),
            n = e.createDocumentFragment();
        if(n.createElement)
            while(t.length) n.createElement(t.pop());
        return n
    }

    function Lt(e, t) {
        return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
    }

    function At(e, t) {
        if(t.nodeType !== 1 || !v.hasData(e)) return;
        var n, r, i, s = v._data(e),
            o = v._data(t, s),
            u = s.events;
        if(u) {
            delete o.handle, o.events = {};
            for(n in u)
                for(r = 0, i = u[n].length; r < i; r++) v.event.add(t, n, u[n][r])
        }
        o.data && (o.data = v.extend({}, o.data))
    }

    function Ot(e, t) {
        var n;
        if(t.nodeType !== 1) return;
        t.clearAttributes && t.clearAttributes(), t.mergeAttributes && t.mergeAttributes(e), n = t.nodeName.toLowerCase(), n === "object" ? (t.parentNode && (t.outerHTML = e.outerHTML), v.support.html5Clone && e.innerHTML && !v.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : n === "input" && Et.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : n === "option" ? t.selected = e.defaultSelected : n === "input" || n === "textarea" ? t.defaultValue = e.defaultValue : n === "script" && t.text !== e.text && (t.text = e.text), t.removeAttribute(v.expando)
    }

    function Mt(e) {
        return typeof e.getElementsByTagName != "undefined" ? e.getElementsByTagName("*") : typeof e.querySelectorAll != "undefined" ? e.querySelectorAll("*") : []
    }

    function _t(e) {
        Et.test(e.type) && (e.defaultChecked = e.checked)
    }

    function Kt(e, t) {
        if(t in e) return t;
        var n = t.charAt(0)
            .toUpperCase() + t.slice(1),
            r = t,
            i = $t.length;
        while(i--) {
            t = $t[i] + n;
            if(t in e) return t
        }
        return r
    }

    function Qt(e, t) {
        return e = t || e, v.css(e, "display") === "none" || !v.contains(e.ownerDocument, e)
    }

    function Gt(e, t) {
        var n, r, i = [],
            s = 0,
            o = e.length;
        for(; s < o; s++) {
            n = e[s];
            if(!n.style) continue;
            i[s] = v._data(n, "olddisplay"), t ? (!i[s] && n.style.display === "none" && (n.style.display = ""), n.style.display === "" && Qt(n) && (i[s] = v._data(n, "olddisplay", tn(n.nodeName)))) : (r = Dt(n, "display"), !i[s] && r !== "none" && v._data(n, "olddisplay", r))
        }
        for(s = 0; s < o; s++) {
            n = e[s];
            if(!n.style) continue;
            if(!t || n.style.display === "none" || n.style.display === "") n.style.display = t ? i[s] || "" : "none"
        }
        return e
    }

    function Yt(e, t, n) {
        var r = qt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function Zt(e, t, n, r) {
        var i = n === (r ? "border" : "content") ? 4 : t === "width" ? 1 : 0,
            s = 0;
        for(; i < 4; i += 2) n === "margin" && (s += v.css(e, n + Vt[i], !0)), r ? (n === "content" && (s -= parseFloat(Dt(e, "padding" + Vt[i])) || 0), n !== "margin" && (s -= parseFloat(Dt(e, "border" + Vt[i] + "Width")) || 0)) : (s += parseFloat(Dt(e, "padding" + Vt[i])) || 0, n !== "padding" && (s += parseFloat(Dt(e, "border" + Vt[i] + "Width")) || 0));
        return s
    }

    function en(e, t, n) {
        var r = t === "width" ? e.offsetWidth : e.offsetHeight,
            i = !0,
            s = v.support.boxSizing && v.css(e, "boxSizing") === "border-box";
        if(r <= 0) {
            r = Dt(e, t);
            if(r < 0 || r == null) r = e.style[t];
            if(Rt.test(r)) return r;
            i = s && (v.support.boxSizingReliable || r === e.style[t]), r = parseFloat(r) || 0
        }
        return r + Zt(e, t, n || (s ? "border" : "content"), i) + "px"
    }

    function tn(e) {
        if(zt[e]) return zt[e];
        var t = v("<" + e + ">")
            .appendTo(i.body),
            n = t.css("display");
        t.remove();
        if(n === "none" || n === "") {
            Pt = i.body.appendChild(Pt || v.extend(i.createElement("iframe"), {
                frameBorder: 0,
                width: 0,
                height: 0
            }));
            if(!Ht || !Pt.createElement) Ht = (Pt.contentWindow || Pt.contentDocument)
                .document, Ht.write("<!doctype html><html><body>"), Ht.close();
            t = Ht.body.appendChild(Ht.createElement(e)), n = Dt(t, "display"), i.body.removeChild(Pt)
        }
        return zt[e] = n, n
    }

    function an(e, t, n, r) {
        var i;
        if(v.isArray(t)) v.each(t, function (t, i) {
            n || rn.test(e) ? r(e, i) : an(e + "[" + (typeof i == "object" ? t : "") + "]", i, n, r)
        });
        else if(!n && v.type(t) === "object")
            for(i in t) an(e + "[" + i + "]", t[i], n, r);
        else r(e, t)
    }

    function Nn(e) {
        return function (t, n) {
            typeof t != "string" && (n = t, t = "*");
            var r, i, s, o = t.toLowerCase()
                    .split(y),
                u = 0,
                a = o.length;
            if(v.isFunction(n))
                for(; u < a; u++) r = o[u], s = /^\+/.test(r), s && (r = r.substr(1) || "*"), i = e[r] = e[r] || [], i[s ? "unshift" : "push"](n)
        }
    }

    function Cn(e, n, r, i, s, o) {
        s = s || n.dataTypes[0], o = o || {}, o[s] = !0;
        var u, a = e[s],
            f = 0,
            l = a ? a.length : 0,
            c = e === En;
        for(; f < l && (c || !u); f++) u = a[f](n, r, i), typeof u == "string" && (!c || o[u] ? u = t : (n.dataTypes.unshift(u), u = Cn(e, n, r, i, u, o)));
        return(c || !u) && !o["*"] && (u = Cn(e, n, r, i, "*", o)), u
    }

    function kn(e, n) {
        var r, i, s = v.ajaxSettings.flatOptions || {};
        for(r in n) n[r] !== t && ((s[r] ? e : i || (i = {}))[r] = n[r]);
        i && v.extend(!0, e, i)
    }

    function Ln(e, n, r) {
        var i, s, o, u, a = e.contents,
            f = e.dataTypes,
            l = e.responseFields;
        for(s in l) s in r && (n[l[s]] = r[s]);
        while(f[0] === "*") f.shift(), i === t && (i = e.mimeType || n.getResponseHeader("content-type"));
        if(i)
            for(s in a)
                if(a[s] && a[s].test(i)) {
                    f.unshift(s);
                    break
                }
        if(f[0] in r) o = f[0];
        else {
            for(s in r) {
                if(!f[0] || e.converters[s + " " + f[0]]) {
                    o = s;
                    break
                }
                u || (u = s)
            }
            o = o || u
        } if(o) return o !== f[0] && f.unshift(o), r[o]
    }

    function An(e, t) {
        var n, r, i, s, o = e.dataTypes.slice(),
            u = o[0],
            a = {}, f = 0;
        e.dataFilter && (t = e.dataFilter(t, e.dataType));
        if(o[1])
            for(n in e.converters) a[n.toLowerCase()] = e.converters[n];
        for(; i = o[++f];)
            if(i !== "*") {
                if(u !== "*" && u !== i) {
                    n = a[u + " " + i] || a["* " + i];
                    if(!n)
                        for(r in a) {
                            s = r.split(" ");
                            if(s[1] === i) {
                                n = a[u + " " + s[0]] || a["* " + s[0]];
                                if(n) {
                                    n === !0 ? n = a[r] : a[r] !== !0 && (i = s[0], o.splice(f--, 0, i));
                                    break
                                }
                            }
                        }
                    if(n !== !0)
                        if(n && e["throws"]) t = n(t);
                        else try {
                            t = n(t)
                        } catch(l) {
                            return {
                                state: "parsererror",
                                error: n ? l : "No conversion from " + u + " to " + i
                            }
                        }
                }
                u = i
            }
        return {
            state: "success",
            data: t
        }
    }

    function jn() {
        try {
            return new e.XMLHttpRequest
        } catch(t) {}
    }

    function Fn() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch(t) {}
    }

    function Vn() {
        return setTimeout(function () {
            In = t
        }, 0), In = v.now()
    }

    function $n(e, t) {
        v.each(t, function (t, n) {
            var r = (Xn[t] || [])
                .concat(Xn["*"]),
                i = 0,
                s = r.length;
            for(; i < s; i++)
                if(r[i].call(e, t, n)) return
        })
    }

    function Jn(e, t, n) {
        var r, i = 0,
            s = 0,
            o = Wn.length,
            u = v.Deferred()
                .always(function () {
                    delete a.elem
                }),
            a = function () {
                var t = In || Vn(),
                    n = Math.max(0, f.startTime + f.duration - t),
                    r = 1 - (n / f.duration || 0),
                    i = 0,
                    s = f.tweens.length;
                for(; i < s; i++) f.tweens[i].run(r);
                return u.notifyWith(e, [f, r, n]), r < 1 && s ? n : (u.resolveWith(e, [f]), !1)
            }, f = u.promise({
                elem: e,
                props: v.extend({}, t),
                opts: v.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: In || Vn(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n, r) {
                    var i = v.Tween(e, f.opts, t, n, f.opts.specialEasing[t] || f.opts.easing);
                    return f.tweens.push(i), i
                },
                stop: function (t) {
                    var n = 0,
                        r = t ? f.tweens.length : 0;
                    for(; n < r; n++) f.tweens[n].run(1);
                    return t ? u.resolveWith(e, [f, t]) : u.rejectWith(e, [f, t]), this
                }
            }),
            l = f.props;
        Kn(l, f.opts.specialEasing);
        for(; i < o; i++) {
            r = Wn[i].call(f, e, l, f.opts);
            if(r) return r
        }
        return $n(f, l), v.isFunction(f.opts.start) && f.opts.start.call(e, f), v.fx.timer(v.extend(a, {
            anim: f,
            queue: f.opts.queue,
            elem: e
        })), f.progress(f.opts.progress)
            .done(f.opts.done, f.opts.complete)
            .fail(f.opts.fail)
            .always(f.opts.always)
    }

    function Kn(e, t) {
        var n, r, i, s, o;
        for(n in e) {
            r = v.camelCase(n), i = t[r], s = e[n], v.isArray(s) && (i = s[1], s = e[n] = s[0]), n !== r && (e[r] = s, delete e[n]), o = v.cssHooks[r];
            if(o && "expand" in o) {
                s = o.expand(s), delete e[r];
                for(n in s) n in e || (e[n] = s[n], t[n] = i)
            } else t[r] = i
        }
    }

    function Qn(e, t, n) {
        var r, i, s, o, u, a, f, l, c = this,
            h = e.style,
            p = {}, d = [],
            m = e.nodeType && Qt(e);
        n.queue || (f = v._queueHooks(e, "fx"), f.unqueued == null && (f.unqueued = 0, l = f.empty.fire, f.empty.fire = function () {
            f.unqueued || l()
        }), f.unqueued++, c.always(function () {
            c.always(function () {
                f.unqueued--, v.queue(e, "fx")
                    .length || f.empty.fire()
            })
        })), e.nodeType === 1 && ("height" in t || "width" in t) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], v.css(e, "display") === "inline" && v.css(e, "float") === "none" && (!v.support.inlineBlockNeedsLayout || tn(e.nodeName) === "inline" ? h.display = "inline-block" : h.zoom = 1)), n.overflow && (h.overflow = "hidden", v.support.shrinkWrapBlocks || c.done(function () {
            h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
        }));
        for(r in t) {
            s = t[r];
            if(Rn.exec(s)) {
                delete t[r];
                if(s === (m ? "hide" : "show")) continue;
                d.push(r)
            }
        }
        o = d.length;
        if(o) {
            u = v._data(e, "fxshow") || v._data(e, "fxshow", {}), m ? v(e)
                .show() : c.done(function () {
                    v(e)
                        .hide()
                }), c.done(function () {
                    var t;
                    v.removeData(e, "fxshow", !0);
                    for(t in p) v.style(e, t, p[t])
                });
            for(r = 0; r < o; r++) i = d[r], a = c.createTween(i, m ? u[i] : 0), p[i] = u[i] || v.style(e, i), i in u || (u[i] = a.start, m && (a.end = a.start, a.start = i === "width" || i === "height" ? 1 : 0))
        }
    }

    function Gn(e, t, n, r, i) {
        return new Gn.prototype.init(e, t, n, r, i)
    }

    function Yn(e, t) {
        var n, r = {
                height: e
            }, i = 0;
        for(; i < 4; i += 2 - t) n = Vt[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function er(e) {
        return v.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : !1
    }
    var n, r, i = e.document,
        s = e.location,
        o = e.navigator,
        u = e.jQuery,
        a = e.$,
        f = Array.prototype.push,
        l = Array.prototype.slice,
        c = Array.prototype.indexOf,
        h = Object.prototype.toString,
        p = Object.prototype.hasOwnProperty,
        d = String.prototype.trim,
        v = function (e, t) {
            return new v.fn.init(e, t, n)
        }, m = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
        g = /\S/,
        y = /\s+/,
        b = g.test(" ") ? /^[\s\xA0]+|[\s\xA0]+$/g : /^\s+|\s+$/g,
        w = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
        E = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        S = /^[\],:{}\s]*$/,
        x = /(?:^|:|,)(?:\s*\[)+/g,
        T = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        N = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
        C = /^-ms-/,
        k = /-([\da-z])/gi,
        L = function (e, t) {
            return(t + "")
                .toUpperCase()
        }, A = function () {
            i.addEventListener ? (i.removeEventListener("DOMContentLoaded", A, !1), v.ready()) : i.readyState === "complete" && (i.detachEvent("onreadystatechange", A), v.ready())
        }, O = {};
    v.fn = v.prototype = {
        constructor: v,
        init: function (e, n, r) {
            var s, o, u, a;
            if(!e) return this;
            if(e.nodeType) return this.context = this[0] = e, this.length = 1, this;
            if(typeof e == "string") {
                e.charAt(0) === "<" && e.charAt(e.length - 1) === ">" && e.length >= 3 ? s = [null, e, null] : s = w.exec(e);
                if(s && (s[1] || !n)) {
                    if(s[1]) return n = n instanceof v ? n[0] : n, a = n && n.nodeType ? n.ownerDocument || n : i, e = v.parseHTML(s[1], a, !0), E.test(s[1]) && v.isPlainObject(n) && this.attr.call(e, n, !0), v.merge(this, e);
                    o = i.getElementById(s[2]);
                    if(o && o.parentNode) {
                        if(o.id !== s[2]) return r.find(e);
                        this.length = 1, this[0] = o
                    }
                    return this.context = i, this.selector = e, this
                }
                return !n || n.jquery ? (n || r)
                    .find(e) : this.constructor(n)
                    .find(e)
            }
            return v.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), v.makeArray(e, this))
        },
        selector: "",
        jquery: "1.8.0",
        length: 0,
        size: function () {
            return this.length
        },
        toArray: function () {
            return l.call(this)
        },
        get: function (e) {
            return e == null ? this.toArray() : e < 0 ? this[this.length + e] : this[e]
        },
        pushStack: function (e, t, n) {
            var r = v.merge(this.constructor(), e);
            return r.prevObject = this, r.context = this.context, t === "find" ? r.selector = this.selector + (this.selector ? " " : "") + n : t && (r.selector = this.selector + "." + t + "(" + n + ")"), r
        },
        each: function (e, t) {
            return v.each(this, e, t)
        },
        ready: function (e) {
            return v.ready.promise()
                .done(e), this
        },
        eq: function (e) {
            return e = +e, e === -1 ? this.slice(e) : this.slice(e, e + 1)
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        slice: function () {
            return this.pushStack(l.apply(this, arguments), "slice", l.call(arguments)
                .join(","))
        },
        map: function (e) {
            return this.pushStack(v.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        },
        end: function () {
            return this.prevObject || this.constructor(null)
        },
        push: f,
        sort: [].sort,
        splice: [].splice
    }, v.fn.init.prototype = v.fn, v.extend = v.fn.extend = function () {
        var e, n, r, i, s, o, u = arguments[0] || {}, a = 1,
            f = arguments.length,
            l = !1;
        typeof u == "boolean" && (l = u, u = arguments[1] || {}, a = 2), typeof u != "object" && !v.isFunction(u) && (u = {}), f === a && (u = this, --a);
        for(; a < f; a++)
            if((e = arguments[a]) != null)
                for(n in e) {
                    r = u[n], i = e[n];
                    if(u === i) continue;
                    l && i && (v.isPlainObject(i) || (s = v.isArray(i))) ? (s ? (s = !1, o = r && v.isArray(r) ? r : []) : o = r && v.isPlainObject(r) ? r : {}, u[n] = v.extend(l, o, i)) : i !== t && (u[n] = i)
                }
            return u
    }, v.extend({
        noConflict: function (t) {
            return e.$ === v && (e.$ = a), t && e.jQuery === v && (e.jQuery = u), v
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function (e) {
            e ? v.readyWait++ : v.ready(!0)
        },
        ready: function (e) {
            if(e === !0 ? --v.readyWait : v.isReady) return;
            if(!i.body) return setTimeout(v.ready, 1);
            v.isReady = !0;
            if(e !== !0 && --v.readyWait > 0) return;
            r.resolveWith(i, [v]), v.fn.trigger && v(i)
                .trigger("ready")
                .off("ready")
        },
        isFunction: function (e) {
            return v.type(e) === "function"
        },
        isArray: Array.isArray || function (e) {
            return v.type(e) === "array"
        },
        isWindow: function (e) {
            return e != null && e == e.window
        },
        isNumeric: function (e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        },
        type: function (e) {
            return e == null ? String(e) : O[h.call(e)] || "object"
        },
        isPlainObject: function (e) {
            if(!e || v.type(e) !== "object" || e.nodeType || v.isWindow(e)) return !1;
            try {
                if(e.constructor && !p.call(e, "constructor") && !p.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch(n) {
                return !1
            }
            var r;
            for(r in e);
            return r === t || p.call(e, r)
        },
        isEmptyObject: function (e) {
            var t;
            for(t in e) return !1;
            return !0
        },
        error: function (e) {
            throw new Error(e)
        },
        parseHTML: function (e, t, n) {
            var r;
            return !e || typeof e != "string" ? null : (typeof t == "boolean" && (n = t, t = 0), t = t || i, (r = E.exec(e)) ? [t.createElement(r[1])] : (r = v.buildFragment([e], t, n ? null : []), v.merge([], (r.cacheable ? v.clone(r.fragment) : r.fragment)
                .childNodes)))
        },
        parseJSON: function (t) {
            if(!t || typeof t != "string") return null;
            t = v.trim(t);
            if(e.JSON && e.JSON.parse) return e.JSON.parse(t);
            if(S.test(t.replace(T, "@")
                .replace(N, "]")
                .replace(x, ""))) return(new Function("return " + t))();
            v.error("Invalid JSON: " + t)
        },
        parseXML: function (n) {
            var r, i;
            if(!n || typeof n != "string") return null;
            try {
                e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
            } catch(s) {
                r = t
            }
            return(!r || !r.documentElement || r.getElementsByTagName("parsererror")
                .length) && v.error("Invalid XML: " + n), r
        },
        noop: function () {},
        globalEval: function (t) {
            t && g.test(t) && (e.execScript || function (t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function (e) {
            return e.replace(C, "ms-")
                .replace(k, L)
        },
        nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toUpperCase() === t.toUpperCase()
        },
        each: function (e, n, r) {
            var i, s = 0,
                o = e.length,
                u = o === t || v.isFunction(e);
            if(r) {
                if(u) {
                    for(i in e)
                        if(n.apply(e[i], r) === !1) break
                } else
                    for(; s < o;)
                        if(n.apply(e[s++], r) === !1) break
            } else if(u) {
                for(i in e)
                    if(n.call(e[i], i, e[i]) === !1) break
            } else
                for(; s < o;)
                    if(n.call(e[s], s, e[s++]) === !1) break; return e
        },
        trim: d ? function (e) {
            return e == null ? "" : d.call(e)
        } : function (e) {
            return e == null ? "" : e.toString()
                .replace(b, "")
        },
        makeArray: function (e, t) {
            var n, r = t || [];
            return e != null && (n = v.type(e), e.length == null || n === "string" || n === "function" || n === "regexp" || v.isWindow(e) ? f.call(r, e) : v.merge(r, e)), r
        },
        inArray: function (e, t, n) {
            var r;
            if(t) {
                if(c) return c.call(t, e, n);
                r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0;
                for(; n < r; n++)
                    if(n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function (e, n) {
            var r = n.length,
                i = e.length,
                s = 0;
            if(typeof r == "number")
                for(; s < r; s++) e[i++] = n[s];
            else
                while(n[s] !== t) e[i++] = n[s++];
            return e.length = i, e
        },
        grep: function (e, t, n) {
            var r, i = [],
                s = 0,
                o = e.length;
            n = !! n;
            for(; s < o; s++) r = !! t(e[s], s), n !== r && i.push(e[s]);
            return i
        },
        map: function (e, n, r) {
            var i, s, o = [],
                u = 0,
                a = e.length,
                f = e instanceof v || a !== t && typeof a == "number" && (a > 0 && e[0] && e[a - 1] || a === 0 || v.isArray(e));
            if(f)
                for(; u < a; u++) i = n(e[u], u, r), i != null && (o[o.length] = i);
            else
                for(s in e) i = n(e[s], s, r), i != null && (o[o.length] = i);
            return o.concat.apply([], o)
        },
        guid: 1,
        proxy: function (e, n) {
            var r, i, s;
            return typeof n == "string" && (r = e[n], n = e, e = r), v.isFunction(e) ? (i = l.call(arguments, 2), s = function () {
                return e.apply(n, i.concat(l.call(arguments)))
            }, s.guid = e.guid = e.guid || s.guid || v.guid++, s) : t
        },
        access: function (e, n, r, i, s, o, u) {
            var a, f = r == null,
                l = 0,
                c = e.length;
            if(r && typeof r == "object") {
                for(l in r) v.access(e, n, l, r[l], 1, o, i);
                s = 1
            } else if(i !== t) {
                a = u === t && v.isFunction(i), f && (a ? (a = n, n = function (e, t, n) {
                    return a.call(v(e), n)
                }) : (n.call(e, i), n = null));
                if(n)
                    for(; l < c; l++) n(e[l], r, a ? i.call(e[l], l, n(e[l], r)) : i, u);
                s = 1
            }
            return s ? e : f ? n.call(e) : c ? n(e[0], r) : o
        },
        now: function () {
            return(new Date)
                .getTime()
        }
    }), v.ready.promise = function (t) {
        if(!r) {
            r = v.Deferred();
            if(i.readyState === "complete" || i.readyState !== "loading" && i.addEventListener) setTimeout(v.ready, 1);
            else if(i.addEventListener) i.addEventListener("DOMContentLoaded", A, !1), e.addEventListener("load", v.ready, !1);
            else {
                i.attachEvent("onreadystatechange", A), e.attachEvent("onload", v.ready);
                var n = !1;
                try {
                    n = e.frameElement == null && i.documentElement
                } catch(s) {}
                n && n.doScroll && function o() {
                    if(!v.isReady) {
                        try {
                            n.doScroll("left")
                        } catch(e) {
                            return setTimeout(o, 50)
                        }
                        v.ready()
                    }
                }()
            }
        }
        return r.promise(t)
    }, v.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (e, t) {
        O["[object " + t + "]"] = t.toLowerCase()
    }), n = v(i);
    var M = {};
    v.Callbacks = function (e) {
        e = typeof e == "string" ? M[e] || _(e) : v.extend({}, e);
        var n, r, i, s, o, u, a = [],
            f = !e.once && [],
            l = function (t) {
                n = e.memory && t, r = !0, u = s || 0, s = 0, o = a.length, i = !0;
                for(; a && u < o; u++)
                    if(a[u].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                        n = !1;
                        break
                    }
                i = !1, a && (f ? f.length && l(f.shift()) : n ? a = [] : c.disable())
            }, c = {
                add: function () {
                    if(a) {
                        var t = a.length;
                        (function r(t) {
                            v.each(t, function (t, n) {
                                v.isFunction(n) && (!e.unique || !c.has(n)) ? a.push(n) : n && n.length && r(n)
                            })
                        })(arguments), i ? o = a.length : n && (s = t, l(n))
                    }
                    return this
                },
                remove: function () {
                    return a && v.each(arguments, function (e, t) {
                        var n;
                        while((n = v.inArray(t, a, n)) > -1) a.splice(n, 1), i && (n <= o && o--, n <= u && u--)
                    }), this
                },
                has: function (e) {
                    return v.inArray(e, a) > -1
                },
                empty: function () {
                    return a = [], this
                },
                disable: function () {
                    return a = f = n = t, this
                },
                disabled: function () {
                    return !a
                },
                lock: function () {
                    return f = t, n || c.disable(), this
                },
                locked: function () {
                    return !f
                },
                fireWith: function (e, t) {
                    return t = t || [], t = [e, t.slice ? t.slice() : t], a && (!r || f) && (i ? f.push(t) : l(t)), this
                },
                fire: function () {
                    return c.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!r
                }
            };
        return c
    }, v.extend({
        Deferred: function (e) {
            var t = [
                ["resolve", "done", v.Callbacks("once memory"), "resolved"],
                ["reject", "fail", v.Callbacks("once memory"), "rejected"],
                ["notify", "progress", v.Callbacks("memory")]
            ],
                n = "pending",
                r = {
                    state: function () {
                        return n
                    },
                    always: function () {
                        return i.done(arguments)
                            .fail(arguments), this
                    },
                    then: function () {
                        var e = arguments;
                        return v.Deferred(function (n) {
                            v.each(t, function (t, r) {
                                var s = r[0],
                                    o = e[t];
                                i[r[1]](v.isFunction(o) ? function () {
                                    var e = o.apply(this, arguments);
                                    e && v.isFunction(e.promise) ? e.promise()
                                        .done(n.resolve)
                                        .fail(n.reject)
                                        .progress(n.notify) : n[s + "With"](this === i ? n : this, [e])
                                } : n[s])
                            }), e = null
                        })
                            .promise()
                    },
                    promise: function (e) {
                        return typeof e == "object" ? v.extend(e, r) : r
                    }
                }, i = {};
            return r.pipe = r.then, v.each(t, function (e, s) {
                var o = s[2],
                    u = s[3];
                r[s[1]] = o.add, u && o.add(function () {
                    n = u
                }, t[e ^ 1][2].disable, t[2][2].lock), i[s[0]] = o.fire, i[s[0] + "With"] = o.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function (e) {
            var t = 0,
                n = l.call(arguments),
                r = n.length,
                i = r !== 1 || e && v.isFunction(e.promise) ? r : 0,
                s = i === 1 ? e : v.Deferred(),
                o = function (e, t, n) {
                    return function (r) {
                        t[e] = this, n[e] = arguments.length > 1 ? l.call(arguments) : r, n === u ? s.notifyWith(t, n) : --i || s.resolveWith(t, n)
                    }
                }, u, a, f;
            if(r > 1) {
                u = new Array(r), a = new Array(r), f = new Array(r);
                for(; t < r; t++) n[t] && v.isFunction(n[t].promise) ? n[t].promise()
                    .done(o(t, f, n))
                    .fail(s.reject)
                    .progress(o(t, a, u)) : --i
            }
            return i || s.resolveWith(f, n), s.promise()
        }
    }), v.support = function () {
        var t, n, r, s, o, u, a, f, l, c, h, p = i.createElement("div");
        p.setAttribute("className", "t"), p.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = p.getElementsByTagName("*"), r = p.getElementsByTagName("a")[0], r.style.cssText = "top:1px;float:left;opacity:.5";
        if(!n || !n.length || !r) return {};
        s = i.createElement("select"), o = s.appendChild(i.createElement("option")), u = p.getElementsByTagName("input")[0], t = {
            leadingWhitespace: p.firstChild.nodeType === 3,
            tbody: !p.getElementsByTagName("tbody")
                .length,
            htmlSerialize: !! p.getElementsByTagName("link")
                .length,
            style: /top/.test(r.getAttribute("style")),
            hrefNormalized: r.getAttribute("href") === "/a",
            opacity: /^0.5/.test(r.style.opacity),
            cssFloat: !! r.style.cssFloat,
            checkOn: u.value === "on",
            optSelected: o.selected,
            getSetAttribute: p.className !== "t",
            enctype: !! i.createElement("form")
                .enctype,
            html5Clone: i.createElement("nav")
                .cloneNode(!0)
                .outerHTML !== "<:nav></:nav>",
            boxModel: i.compatMode === "CSS1Compat",
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        }, u.checked = !0, t.noCloneChecked = u.cloneNode(!0)
            .checked, s.disabled = !0, t.optDisabled = !o.disabled;
        try {
            delete p.test
        } catch(d) {
            t.deleteExpando = !1
        }!p.addEventListener && p.attachEvent && p.fireEvent && (p.attachEvent("onclick", h = function () {
                t.noCloneEvent = !1
            }), p.cloneNode(!0)
            .fireEvent("onclick"), p.detachEvent("onclick", h)), u = i.createElement("input"), u.value = "t", u.setAttribute("type", "radio"), t.radioValue = u.value === "t", u.setAttribute("checked", "checked"), u.setAttribute("name", "t"), p.appendChild(u), a = i.createDocumentFragment(), a.appendChild(p.lastChild), t.checkClone = a.cloneNode(!0)
            .cloneNode(!0)
            .lastChild.checked, t.appendChecked = u.checked, a.removeChild(u), a.appendChild(p);
        if(p.attachEvent)
            for(l in {
                submit: !0,
                change: !0,
                focusin: !0
            }) f = "on" + l, c = f in p, c || (p.setAttribute(f, "return;"), c = typeof p[f] == "function"), t[l + "Bubbles"] = c;
        return v(function () {
            var n, r, s, o, u = "padding:0;margin:0;border:0;display:block;overflow:hidden;",
                a = i.getElementsByTagName("body")[0];
            if(!a) return;
            n = i.createElement("div"), n.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", a.insertBefore(n, a.firstChild), r = i.createElement("div"), n.appendChild(r), r.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", s = r.getElementsByTagName("td"), s[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = s[0].offsetHeight === 0, s[0].style.display = "", s[1].style.display = "none", t.reliableHiddenOffsets = c && s[0].offsetHeight === 0, r.innerHTML = "", r.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = r.offsetWidth === 4, t.doesNotIncludeMarginInBodyOffset = a.offsetTop !== 1, e.getComputedStyle && (t.pixelPosition = (e.getComputedStyle(r, null) || {})
                .top !== "1%", t.boxSizingReliable = (e.getComputedStyle(r, null) || {
                    width: "4px"
                })
                .width === "4px", o = i.createElement("div"), o.style.cssText = r.style.cssText = u, o.style.marginRight = o.style.width = "0", r.style.width = "1px", r.appendChild(o), t.reliableMarginRight = !parseFloat((e.getComputedStyle(o, null) || {})
                    .marginRight)), typeof r.style.zoom != "undefined" && (r.innerHTML = "", r.style.cssText = u + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = r.offsetWidth === 3, r.style.display = "block", r.style.overflow = "visible", r.innerHTML = "<div></div>", r.firstChild.style.width = "5px", t.shrinkWrapBlocks = r.offsetWidth !== 3, n.style.zoom = 1), a.removeChild(n), n = r = s = o = null
        }), a.removeChild(p), n = r = s = o = u = a = p = null, t
    }();
    var D = /^(?:\{.*\}|\[.*\])$/,
        P = /([A-Z])/g;
    v.extend({
        cache: {},
        deletedIds: [],
        uuid: 0,
        expando: "jQuery" + (v.fn.jquery + Math.random())
            .replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function (e) {
            return e = e.nodeType ? v.cache[e[v.expando]] : e[v.expando], !! e && !B(e)
        },
        data: function (e, n, r, i) {
            if(!v.acceptData(e)) return;
            var s, o, u = v.expando,
                a = typeof n == "string",
                f = e.nodeType,
                l = f ? v.cache : e,
                c = f ? e[u] : e[u] && u;
            if((!c || !l[c] || !i && !l[c].data) && a && r === t) return;
            c || (f ? e[u] = c = v.deletedIds.pop() || ++v.uuid : c = u), l[c] || (l[c] = {}, f || (l[c].toJSON = v.noop));
            if(typeof n == "object" || typeof n == "function") i ? l[c] = v.extend(l[c], n) : l[c].data = v.extend(l[c].data, n);
            return s = l[c], i || (s.data || (s.data = {}), s = s.data), r !== t && (s[v.camelCase(n)] = r), a ? (o = s[n], o == null && (o = s[v.camelCase(n)])) : o = s, o
        },
        removeData: function (e, t, n) {
            if(!v.acceptData(e)) return;
            var r, i, s, o = e.nodeType,
                u = o ? v.cache : e,
                a = o ? e[v.expando] : v.expando;
            if(!u[a]) return;
            if(t) {
                r = n ? u[a] : u[a].data;
                if(r) {
                    v.isArray(t) || (t in r ? t = [t] : (t = v.camelCase(t), t in r ? t = [t] : t = t.split(" ")));
                    for(i = 0, s = t.length; i < s; i++) delete r[t[i]];
                    if(!(n ? B : v.isEmptyObject)(r)) return
                }
            }
            if(!n) {
                delete u[a].data;
                if(!B(u[a])) return
            }
            o ? v.cleanData([e], !0) : v.support.deleteExpando || u != u.window ? delete u[a] : u[a] = null
        },
        _data: function (e, t, n) {
            return v.data(e, t, n, !0)
        },
        acceptData: function (e) {
            var t = e.nodeName && v.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t
        }
    }), v.fn.extend({
        data: function (e, n) {
            var r, i, s, o, u, a = this[0],
                f = 0,
                l = null;
            if(e === t) {
                if(this.length) {
                    l = v.data(a);
                    if(a.nodeType === 1 && !v._data(a, "parsedAttrs")) {
                        s = a.attributes;
                        for(u = s.length; f < u; f++) o = s[f].name, o.indexOf("data-") === 0 && (o = v.camelCase(o.substring(5)), H(a, o, l[o]));
                        v._data(a, "parsedAttrs", !0)
                    }
                }
                return l
            }
            return typeof e == "object" ? this.each(function () {
                v.data(this, e)
            }) : (r = e.split(".", 2), r[1] = r[1] ? "." + r[1] : "", i = r[1] + "!", v.access(this, function (n) {
                if(n === t) return l = this.triggerHandler("getData" + i, [r[0]]), l === t && a && (l = v.data(a, e), l = H(a, e, l)), l === t && r[1] ? this.data(r[0]) : l;
                r[1] = n, this.each(function () {
                    var t = v(this);
                    t.triggerHandler("setData" + i, r), v.data(this, e, n), t.triggerHandler("changeData" + i, r)
                })
            }, null, n, arguments.length > 1, null, !1))
        },
        removeData: function (e) {
            return this.each(function () {
                v.removeData(this, e)
            })
        }
    }), v.extend({
        queue: function (e, t, n) {
            var r;
            if(e) return t = (t || "fx") + "queue", r = v._data(e, t), n && (!r || v.isArray(n) ? r = v._data(e, t, v.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var n = v.queue(e, t),
                r = n.shift(),
                i = v._queueHooks(e, t),
                s = function () {
                    v.dequeue(e, t)
                };
            r === "inprogress" && (r = n.shift()), r && (t === "fx" && n.unshift("inprogress"), delete i.stop, r.call(e, s, i)), !n.length && i && i.empty.fire()
        },
        _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return v._data(e, n) || v._data(e, n, {
                empty: v.Callbacks("once memory")
                    .add(function () {
                        v.removeData(e, t + "queue", !0), v.removeData(e, n, !0)
                    })
            })
        }
    }), v.fn.extend({
        queue: function (e, n) {
            var r = 2;
            return typeof e != "string" && (n = e, e = "fx", r--), arguments.length < r ? v.queue(this[0], e) : n === t ? this : this.each(function () {
                var t = v.queue(this, e, n);
                v._queueHooks(this, e), e === "fx" && t[0] !== "inprogress" && v.dequeue(this, e)
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                v.dequeue(this, e)
            })
        },
        delay: function (e, t) {
            return e = v.fx ? v.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
                var r = setTimeout(t, e);
                n.stop = function () {
                    clearTimeout(r)
                }
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, n) {
            var r, i = 1,
                s = v.Deferred(),
                o = this,
                u = this.length,
                a = function () {
                    --i || s.resolveWith(o, [o])
                };
            typeof e != "string" && (n = e, e = t), e = e || "fx";
            while(u--)(r = v._data(o[u], e + "queueHooks")) && r.empty && (i++, r.empty.add(a));
            return a(), s.promise(n)
        }
    });
    var j, F, I, q = /[\t\r\n]/g,
        R = /\r/g,
        U = /^(?:button|input)$/i,
        z = /^(?:button|input|object|select|textarea)$/i,
        W = /^a(?:rea|)$/i,
        X = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        V = v.support.getSetAttribute;
    v.fn.extend({
        attr: function (e, t) {
            return v.access(this, v.attr, e, t, arguments.length > 1)
        },
        removeAttr: function (e) {
            return this.each(function () {
                v.removeAttr(this, e)
            })
        },
        prop: function (e, t) {
            return v.access(this, v.prop, e, t, arguments.length > 1)
        },
        removeProp: function (e) {
            return e = v.propFix[e] || e, this.each(function () {
                try {
                    this[e] = t, delete this[e]
                } catch(n) {}
            })
        },
        addClass: function (e) {
            var t, n, r, i, s, o, u;
            if(v.isFunction(e)) return this.each(function (t) {
                v(this)
                    .addClass(e.call(this, t, this.className))
            });
            if(e && typeof e == "string") {
                t = e.split(y);
                for(n = 0, r = this.length; n < r; n++) {
                    i = this[n];
                    if(i.nodeType === 1)
                        if(!i.className && t.length === 1) i.className = e;
                        else {
                            s = " " + i.className + " ";
                            for(o = 0, u = t.length; o < u; o++)~ s.indexOf(" " + t[o] + " ") || (s += t[o] + " ");
                            i.className = v.trim(s)
                        }
                }
            }
            return this
        },
        removeClass: function (e) {
            var n, r, i, s, o, u, a;
            if(v.isFunction(e)) return this.each(function (t) {
                v(this)
                    .removeClass(e.call(this, t, this.className))
            });
            if(e && typeof e == "string" || e === t) {
                n = (e || "")
                    .split(y);
                for(u = 0, a = this.length; u < a; u++) {
                    i = this[u];
                    if(i.nodeType === 1 && i.className) {
                        r = (" " + i.className + " ")
                            .replace(q, " ");
                        for(s = 0, o = n.length; s < o; s++)
                            while(r.indexOf(" " + n[s] + " ") > -1) r = r.replace(" " + n[s] + " ", " ");
                        i.className = e ? v.trim(r) : ""
                    }
                }
            }
            return this
        },
        toggleClass: function (e, t) {
            var n = typeof e,
                r = typeof t == "boolean";
            return v.isFunction(e) ? this.each(function (n) {
                v(this)
                    .toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function () {
                if(n === "string") {
                    var i, s = 0,
                        o = v(this),
                        u = t,
                        a = e.split(y);
                    while(i = a[s++]) u = r ? u : !o.hasClass(i), o[u ? "addClass" : "removeClass"](i)
                } else if(n === "undefined" || n === "boolean") this.className && v._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : v._data(this, "__className__") || ""
            })
        },
        hasClass: function (e) {
            var t = " " + e + " ",
                n = 0,
                r = this.length;
            for(; n < r; n++)
                if(this[n].nodeType === 1 && (" " + this[n].className + " ")
                    .replace(q, " ")
                    .indexOf(t) > -1) return !0;
            return !1
        },
        val: function (e) {
            var n, r, i, s = this[0];
            if(!arguments.length) {
                if(s) return n = v.valHooks[s.type] || v.valHooks[s.nodeName.toLowerCase()], n && "get" in n && (r = n.get(s, "value")) !== t ? r : (r = s.value, typeof r == "string" ? r.replace(R, "") : r == null ? "" : r);
                return
            }
            return i = v.isFunction(e), this.each(function (r) {
                var s, o = v(this);
                if(this.nodeType !== 1) return;
                i ? s = e.call(this, r, o.val()) : s = e, s == null ? s = "" : typeof s == "number" ? s += "" : v.isArray(s) && (s = v.map(s, function (e) {
                    return e == null ? "" : e + ""
                })), n = v.valHooks[this.type] || v.valHooks[this.nodeName.toLowerCase()];
                if(!n || !("set" in n) || n.set(this, s, "value") === t) this.value = s
            })
        }
    }), v.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = e.attributes.value;
                    return !t || t.specified ? e.value : e.text
                }
            },
            select: {
                get: function (e) {
                    var t, n, r, i, s = e.selectedIndex,
                        o = [],
                        u = e.options,
                        a = e.type === "select-one";
                    if(s < 0) return null;
                    n = a ? s : 0, r = a ? s + 1 : u.length;
                    for(; n < r; n++) {
                        i = u[n];
                        if(i.selected && (v.support.optDisabled ? !i.disabled : i.getAttribute("disabled") === null) && (!i.parentNode.disabled || !v.nodeName(i.parentNode, "optgroup"))) {
                            t = v(i)
                                .val();
                            if(a) return t;
                            o.push(t)
                        }
                    }
                    return a && !o.length && u.length ? v(u[s])
                        .val() : o
                },
                set: function (e, t) {
                    var n = v.makeArray(t);
                    return v(e)
                        .find("option")
                        .each(function () {
                            this.selected = v.inArray(v(this)
                                .val(), n) >= 0
                        }), n.length || (e.selectedIndex = -1), n
                }
            }
        },
        attrFn: {},
        attr: function (e, n, r, i) {
            var s, o, u, a = e.nodeType;
            if(!e || a === 3 || a === 8 || a === 2) return;
            if(i && v.isFunction(v.fn[n])) return v(e)[n](r);
            if(typeof e.getAttribute == "undefined") return v.prop(e, n, r);
            u = a !== 1 || !v.isXMLDoc(e), u && (n = n.toLowerCase(), o = v.attrHooks[n] || (X.test(n) ? F : j));
            if(r !== t) {
                if(r === null) {
                    v.removeAttr(e, n);
                    return
                }
                return o && "set" in o && u && (s = o.set(e, r, n)) !== t ? s : (e.setAttribute(n, "" + r), r)
            }
            return o && "get" in o && u && (s = o.get(e, n)) !== null ? s : (s = e.getAttribute(n), s === null ? t : s)
        },
        removeAttr: function (e, t) {
            var n, r, i, s, o = 0;
            if(t && e.nodeType === 1) {
                r = t.split(y);
                for(; o < r.length; o++) i = r[o], i && (n = v.propFix[i] || i, s = X.test(i), s || v.attr(e, i, ""), e.removeAttribute(V ? i : n), s && n in e && (e[n] = !1))
            }
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if(U.test(e.nodeName) && e.parentNode) v.error("type property can't be changed");
                    else if(!v.support.radioValue && t === "radio" && v.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            },
            value: {
                get: function (e, t) {
                    return j && v.nodeName(e, "button") ? j.get(e, t) : t in e ? e.value : null
                },
                set: function (e, t, n) {
                    if(j && v.nodeName(e, "button")) return j.set(e, t, n);
                    e.value = t
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function (e, n, r) {
            var i, s, o, u = e.nodeType;
            if(!e || u === 3 || u === 8 || u === 2) return;
            return o = u !== 1 || !v.isXMLDoc(e), o && (n = v.propFix[n] || n, s = v.propHooks[n]), r !== t ? s && "set" in s && (i = s.set(e, r, n)) !== t ? i : e[n] = r : s && "get" in s && (i = s.get(e, n)) !== null ? i : e[n]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var n = e.getAttributeNode("tabindex");
                    return n && n.specified ? parseInt(n.value, 10) : z.test(e.nodeName) || W.test(e.nodeName) && e.href ? 0 : t
                }
            }
        }
    }), F = {
        get: function (e, n) {
            var r, i = v.prop(e, n);
            return i === !0 || typeof i != "boolean" && (r = e.getAttributeNode(n)) && r.nodeValue !== !1 ? n.toLowerCase() : t
        },
        set: function (e, t, n) {
            var r;
            return t === !1 ? v.removeAttr(e, n) : (r = v.propFix[n] || n, r in e && (e[r] = !0), e.setAttribute(n, n.toLowerCase())), n
        }
    }, V || (I = {
        name: !0,
        id: !0,
        coords: !0
    }, j = v.valHooks.button = {
        get: function (e, n) {
            var r;
            return r = e.getAttributeNode(n), r && (I[n] ? r.value !== "" : r.specified) ? r.value : t
        },
        set: function (e, t, n) {
            var r = e.getAttributeNode(n);
            return r || (r = i.createAttribute(n), e.setAttributeNode(r)), r.value = t + ""
        }
    }, v.each(["width", "height"], function (e, t) {
        v.attrHooks[t] = v.extend(v.attrHooks[t], {
            set: function (e, n) {
                if(n === "") return e.setAttribute(t, "auto"), n
            }
        })
    }), v.attrHooks.contenteditable = {
        get: j.get,
        set: function (e, t, n) {
            t === "" && (t = "false"), j.set(e, t, n)
        }
    }), v.support.hrefNormalized || v.each(["href", "src", "width", "height"], function (e, n) {
        v.attrHooks[n] = v.extend(v.attrHooks[n], {
            get: function (e) {
                var r = e.getAttribute(n, 2);
                return r === null ? t : r
            }
        })
    }), v.support.style || (v.attrHooks.style = {
        get: function (e) {
            return e.style.cssText.toLowerCase() || t
        },
        set: function (e, t) {
            return e.style.cssText = "" + t
        }
    }), v.support.optSelected || (v.propHooks.selected =
        v.extend(v.propHooks.selected, {
            get: function (e) {
                var t = e.parentNode;
                return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
            }
        })), v.support.enctype || (v.propFix.enctype = "encoding"), v.support.checkOn || v.each(["radio", "checkbox"], function () {
        v.valHooks[this] = {
            get: function (e) {
                return e.getAttribute("value") === null ? "on" : e.value
            }
        }
    }), v.each(["radio", "checkbox"], function () {
        v.valHooks[this] = v.extend(v.valHooks[this], {
            set: function (e, t) {
                if(v.isArray(t)) return e.checked = v.inArray(v(e)
                    .val(), t) >= 0
            }
        })
    });
    var $ = /^(?:textarea|input|select)$/i,
        J = /^([^\.]*|)(?:\.(.+)|)$/,
        K = /(?:^|\s)hover(\.\S+|)\b/,
        Q = /^key/,
        G = /^(?:mouse|contextmenu)|click/,
        Y = /^(?:focusinfocus|focusoutblur)$/,
        Z = function (e) {
            return v.event.special.hover ? e : e.replace(K, "mouseenter$1 mouseleave$1")
        };
    v.event = {
        add: function (e, n, r, i, s) {
            var o, u, a, f, l, c, h, p, d, m, g;
            if(e.nodeType === 3 || e.nodeType === 8 || !n || !r || !(o = v._data(e))) return;
            r.handler && (d = r, r = d.handler, s = d.selector), r.guid || (r.guid = v.guid++), a = o.events, a || (o.events = a = {}), u = o.handle, u || (o.handle = u = function (e) {
                return typeof v == "undefined" || !! e && v.event.triggered === e.type ? t : v.event.dispatch.apply(u.elem, arguments)
            }, u.elem = e), n = v.trim(Z(n))
                .split(" ");
            for(f = 0; f < n.length; f++) {
                l = J.exec(n[f]) || [], c = l[1], h = (l[2] || "")
                    .split(".")
                    .sort(), g = v.event.special[c] || {}, c = (s ? g.delegateType : g.bindType) || c, g = v.event.special[c] || {}, p = v.extend({
                        type: c,
                        origType: l[1],
                        data: i,
                        handler: r,
                        guid: r.guid,
                        selector: s,
                        namespace: h.join(".")
                    }, d), m = a[c];
                if(!m) {
                    m = a[c] = [], m.delegateCount = 0;
                    if(!g.setup || g.setup.call(e, i, h, u) === !1) e.addEventListener ? e.addEventListener(c, u, !1) : e.attachEvent && e.attachEvent("on" + c, u)
                }
                g.add && (g.add.call(e, p), p.handler.guid || (p.handler.guid = r.guid)), s ? m.splice(m.delegateCount++, 0, p) : m.push(p), v.event.global[c] = !0
            }
            e = null
        },
        global: {},
        remove: function (e, t, n, r, i) {
            var s, o, u, a, f, l, c, h, p, d, m, g = v.hasData(e) && v._data(e);
            if(!g || !(h = g.events)) return;
            t = v.trim(Z(t || ""))
                .split(" ");
            for(s = 0; s < t.length; s++) {
                o = J.exec(t[s]) || [], u = a = o[1], f = o[2];
                if(!u) {
                    for(u in h) v.event.remove(e, u + t[s], n, r, !0);
                    continue
                }
                p = v.event.special[u] || {}, u = (r ? p.delegateType : p.bindType) || u, d = h[u] || [], l = d.length, f = f ? new RegExp("(^|\\.)" + f.split(".")
                    .sort()
                    .join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                for(c = 0; c < d.length; c++) m = d[c], (i || a === m.origType) && (!n || n.guid === m.guid) && (!f || f.test(m.namespace)) && (!r || r === m.selector || r === "**" && m.selector) && (d.splice(c--, 1), m.selector && d.delegateCount--, p.remove && p.remove.call(e, m));
                d.length === 0 && l !== d.length && ((!p.teardown || p.teardown.call(e, f, g.handle) === !1) && v.removeEvent(e, u, g.handle), delete h[u])
            }
            v.isEmptyObject(h) && (delete g.handle, v.removeData(e, "events", !0))
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function (n, r, s, o) {
            if(!s || s.nodeType !== 3 && s.nodeType !== 8) {
                var u, a, f, l, c, h, p, d, m, g, y = n.type || n,
                    b = [];
                if(Y.test(y + v.event.triggered)) return;
                y.indexOf("!") >= 0 && (y = y.slice(0, -1), a = !0), y.indexOf(".") >= 0 && (b = y.split("."), y = b.shift(), b.sort());
                if((!s || v.event.customEvent[y]) && !v.event.global[y]) return;
                n = typeof n == "object" ? n[v.expando] ? n : new v.Event(y, n) : new v.Event(y), n.type = y, n.isTrigger = !0, n.exclusive = a, n.namespace = b.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, h = y.indexOf(":") < 0 ? "on" + y : "";
                if(!s) {
                    u = v.cache;
                    for(f in u) u[f].events && u[f].events[y] && v.event.trigger(n, r, u[f].handle.elem, !0);
                    return
                }
                n.result = t, n.target || (n.target = s), r = r != null ? v.makeArray(r) : [], r.unshift(n), p = v.event.special[y] || {};
                if(p.trigger && p.trigger.apply(s, r) === !1) return;
                m = [
                    [s, p.bindType || y]
                ];
                if(!o && !p.noBubble && !v.isWindow(s)) {
                    g = p.delegateType || y, l = Y.test(g + y) ? s : s.parentNode;
                    for(c = s; l; l = l.parentNode) m.push([l, g]), c = l;
                    c === (s.ownerDocument || i) && m.push([c.defaultView || c.parentWindow || e, g])
                }
                for(f = 0; f < m.length && !n.isPropagationStopped(); f++) l = m[f][0], n.type = m[f][1], d = (v._data(l, "events") || {})[n.type] && v._data(l, "handle"), d && d.apply(l, r), d = h && l[h], d && v.acceptData(l) && d.apply(l, r) === !1 && n.preventDefault();
                return n.type = y, !o && !n.isDefaultPrevented() && (!p._default || p._default.apply(s.ownerDocument, r) === !1) && (y !== "click" || !v.nodeName(s, "a")) && v.acceptData(s) && h && s[y] && (y !== "focus" && y !== "blur" || n.target.offsetWidth !== 0) && !v.isWindow(s) && (c = s[h], c && (s[h] = null), v.event.triggered = y, s[y](), v.event.triggered = t, c && (s[h] = c)), n.result
            }
            return
        },
        dispatch: function (n) {
            n = v.event.fix(n || e.event);
            var r, i, s, o, u, a, f, l, c, h, p, d = (v._data(this, "events") || {})[n.type] || [],
                m = d.delegateCount,
                g = [].slice.call(arguments),
                y = !n.exclusive && !n.namespace,
                b = v.event.special[n.type] || {}, w = [];
            g[0] = n, n.delegateTarget = this;
            if(b.preDispatch && b.preDispatch.call(this, n) === !1) return;
            if(m && (!n.button || n.type !== "click")) {
                o = v(this), o.context = this;
                for(s = n.target; s != this; s = s.parentNode || this)
                    if(s.disabled !== !0 || n.type !== "click") {
                        a = {}, l = [], o[0] = s;
                        for(r = 0; r < m; r++) c = d[r], h = c.selector, a[h] === t && (a[h] = o.is(h)), a[h] && l.push(c);
                        l.length && w.push({
                            elem: s,
                            matches: l
                        })
                    }
            }
            d.length > m && w.push({
                elem: this,
                matches: d.slice(m)
            });
            for(r = 0; r < w.length && !n.isPropagationStopped(); r++) {
                f = w[r], n.currentTarget = f.elem;
                for(i = 0; i < f.matches.length && !n.isImmediatePropagationStopped(); i++) {
                    c = f.matches[i];
                    if(y || !n.namespace && !c.namespace || n.namespace_re && n.namespace_re.test(c.namespace)) n.data = c.data, n.handleObj = c, u = ((v.event.special[c.origType] || {})
                        .handle || c.handler)
                        .apply(f.elem, g), u !== t && (n.result = u, u === !1 && (n.preventDefault(), n.stopPropagation()))
                }
            }
            return b.postDispatch && b.postDispatch.call(this, n), n.result
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (e, t) {
                return e.which == null && (e.which = t.charCode != null ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, n) {
                var r, s, o, u = n.button,
                    a = n.fromElement;
                return e.pageX == null && n.clientX != null && (r = e.target.ownerDocument || i, s = r.documentElement, o = r.body, e.pageX = n.clientX + (s && s.scrollLeft || o && o.scrollLeft || 0) - (s && s.clientLeft || o && o.clientLeft || 0), e.pageY = n.clientY + (s && s.scrollTop || o && o.scrollTop || 0) - (s && s.clientTop || o && o.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? n.toElement : a), !e.which && u !== t && (e.which = u & 1 ? 1 : u & 2 ? 3 : u & 4 ? 2 : 0), e
            }
        },
        fix: function (e) {
            if(e[v.expando]) return e;
            var t, n, r = e,
                s = v.event.fixHooks[e.type] || {}, o = s.props ? this.props.concat(s.props) : this.props;
            e = v.Event(r);
            for(t = o.length; t;) n = o[--t], e[n] = r[n];
            return e.target || (e.target = r.srcElement || i), e.target.nodeType === 3 && (e.target = e.target.parentNode), e.metaKey = !! e.metaKey, s.filter ? s.filter(e, r) : e
        },
        special: {
            ready: {
                setup: v.bindReady
            },
            load: {
                noBubble: !0
            },
            focus: {
                delegateType: "focusin"
            },
            blur: {
                delegateType: "focusout"
            },
            beforeunload: {
                setup: function (e, t, n) {
                    v.isWindow(this) && (this.onbeforeunload = n)
                },
                teardown: function (e, t) {
                    this.onbeforeunload === t && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function (e, t, n, r) {
            var i = v.extend(new v.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? v.event.trigger(i, null, t) : v.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, v.event.handle = v.event.dispatch, v.removeEvent = i.removeEventListener ? function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function (e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] == "undefined" && (e[r] = null), e.detachEvent(r, n))
    }, v.Event = function (e, t) {
        if(!(this instanceof v.Event)) return new v.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? tt : et) : this.type = e, t && v.extend(this, t), this.timeStamp = e && e.timeStamp || v.now(), this[v.expando] = !0
    }, v.Event.prototype = {
        preventDefault: function () {
            this.isDefaultPrevented = tt;
            var e = this.originalEvent;
            if(!e) return;
            e.preventDefault ? e.preventDefault() : e.returnValue = !1
        },
        stopPropagation: function () {
            this.isPropagationStopped = tt;
            var e = this.originalEvent;
            if(!e) return;
            e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = tt, this.stopPropagation()
        },
        isDefaultPrevented: et,
        isPropagationStopped: et,
        isImmediatePropagationStopped: et
    }, v.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function (e, t) {
        v.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
                var n, r = this,
                    i = e.relatedTarget,
                    s = e.handleObj,
                    o = s.selector;
                if(!i || i !== r && !v.contains(r, i)) e.type = s.origType, n = s.handler.apply(this, arguments), e.type = t;
                return n
            }
        }
    }), v.support.submitBubbles || (v.event.special.submit = {
        setup: function () {
            if(v.nodeName(this, "form")) return !1;
            v.event.add(this, "click._submit keypress._submit", function (e) {
                var n = e.target,
                    r = v.nodeName(n, "input") || v.nodeName(n, "button") ? n.form : t;
                r && !v._data(r, "_submit_attached") && (v.event.add(r, "submit._submit", function (e) {
                    e._submit_bubble = !0
                }), v._data(r, "_submit_attached", !0))
            })
        },
        postDispatch: function (e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && v.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function () {
            if(v.nodeName(this, "form")) return !1;
            v.event.remove(this, "._submit")
        }
    }), v.support.changeBubbles || (v.event.special.change = {
        setup: function () {
            if($.test(this.nodeName)) {
                if(this.type === "checkbox" || this.type === "radio") v.event.add(this, "propertychange._change", function (e) {
                    e.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                }), v.event.add(this, "click._change", function (e) {
                    this._just_changed && !e.isTrigger && (this._just_changed = !1), v.event.simulate("change", this, e, !0)
                });
                return !1
            }
            v.event.add(this, "beforeactivate._change", function (e) {
                var t = e.target;
                $.test(t.nodeName) && !v._data(t, "_change_attached") && (v.event.add(t, "change._change", function (e) {
                    this.parentNode && !e.isSimulated && !e.isTrigger && v.event.simulate("change", this.parentNode, e, !0)
                }), v._data(t, "_change_attached", !0))
            })
        },
        handle: function (e) {
            var t = e.target;
            if(this !== t || e.isSimulated || e.isTrigger || t.type !== "radio" && t.type !== "checkbox") return e.handleObj.handler.apply(this, arguments)
        },
        teardown: function () {
            return v.event.remove(this, "._change"), $.test(this.nodeName)
        }
    }), v.support.focusinBubbles || v.each({
        focus: "focusin",
        blur: "focusout"
    }, function (e, t) {
        var n = 0,
            r = function (e) {
                v.event.simulate(t, e.target, v.event.fix(e), !0)
            };
        v.event.special[t] = {
            setup: function () {
                n++ === 0 && i.addEventListener(e, r, !0)
            },
            teardown: function () {
                --n === 0 && i.removeEventListener(e, r, !0)
            }
        }
    }), v.fn.extend({
        on: function (e, n, r, i, s) {
            var o, u;
            if(typeof e == "object") {
                typeof n != "string" && (r = r || n, n = t);
                for(u in e) this.on(u, n, r, e[u], s);
                return this
            }
            r == null && i == null ? (i = n, r = n = t) : i == null && (typeof n == "string" ? (i = r, r = t) : (i = r, r = n, n = t));
            if(i === !1) i = et;
            else if(!i) return this;
            return s === 1 && (o = i, i = function (e) {
                return v()
                    .off(e), o.apply(this, arguments)
            }, i.guid = o.guid || (o.guid = v.guid++)), this.each(function () {
                v.event.add(this, e, i, r, n)
            })
        },
        one: function (e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function (e, n, r) {
            var i, s;
            if(e && e.preventDefault && e.handleObj) return i = e.handleObj, v(e.delegateTarget)
                .off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if(typeof e == "object") {
                for(s in e) this.off(s, n, e[s]);
                return this
            }
            if(n === !1 || typeof n == "function") r = n, n = t;
            return r === !1 && (r = et), this.each(function () {
                v.event.remove(this, e, r, n)
            })
        },
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function (e, t) {
            return this.off(e, null, t)
        },
        live: function (e, t, n) {
            return v(this.context)
                .on(e, this.selector, t, n), this
        },
        die: function (e, t) {
            return v(this.context)
                .off(e, this.selector || "**", t), this
        },
        delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function (e, t, n) {
            return arguments.length == 1 ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        trigger: function (e, t) {
            return this.each(function () {
                v.event.trigger(e, t, this)
            })
        },
        triggerHandler: function (e, t) {
            if(this[0]) return v.event.trigger(e, t, this[0], !0)
        },
        toggle: function (e) {
            var t = arguments,
                n = e.guid || v.guid++,
                r = 0,
                i = function (n) {
                    var i = (v._data(this, "lastToggle" + e.guid) || 0) % r;
                    return v._data(this, "lastToggle" + e.guid, i + 1), n.preventDefault(), t[i].apply(this, arguments) || !1
                };
            i.guid = n;
            while(r < t.length) t[r++].guid = n;
            return this.click(i)
        },
        hover: function (e, t) {
            return this.mouseenter(e)
                .mouseleave(t || e)
        }
    }), v.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        v.fn[t] = function (e, n) {
            return n == null && (n = e, e = null), arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }, Q.test(t) && (v.event.fixHooks[t] = v.event.keyHooks), G.test(t) && (v.event.fixHooks[t] = v.event.mouseHooks)
    }),
    function (e, t) {
        function rt(e, t, n, r) {
            var i = 0,
                s = t.length;
            for(; i < s; i++) G(e, t[i], n, r)
        }

        function it(e, t, n, r, i, s) {
            var o, u = Y.setFilters[t.toLowerCase()];
            return u || G.error(t), (e || !(o = i)) && rt(e || "*", r, o = [], i), o.length > 0 ? u(o, n, s) : []
        }

        function st(e, n, r, i, s) {
            var o, u, a, f, l, c, h, p, v = 0,
                m = s.length,
                y = j.POS,
                b = new RegExp("^" + y.source + "(?!" + g + ")", "i"),
                w = function () {
                    var e = 1,
                        n = arguments.length - 2;
                    for(; e < n; e++) arguments[e] === t && (o[e] = t)
                };
            for(; v < m; v++) {
                y.exec(""), e = s[v], f = [], a = 0, l = i;
                while(o = y.exec(e)) {
                    p = y.lastIndex = o.index + o[0].length;
                    if(p > a) {
                        h = e.slice(a, o.index), a = p, c = [n], k.test(h) && (l && (c = l), l = i);
                        if(u = D.test(h)) h = h.slice(0, -5)
                            .replace(k, "$&*");
                        o.length > 1 && o[0].replace(b, w), l = it(h, o[1], o[2], c, l, u)
                    }
                }
                l ? (f = f.concat(l), (h = e.slice(a)) && h !== ")" ? k.test(h) ? rt(h, f, r, i) : G(h, n, r, i ? i.concat(l) : l) : d.apply(r, f)) : G(e, n, r, i)
            }
            return m === 1 ? r : G.uniqueSort(r)
        }

        function ot(e, t, n) {
            var r, i, s, o = [],
                a = 0,
                f = A.exec(e),
                l = !f.pop() && !f.pop(),
                c = l && e.match(L) || [""],
                h = Y.preFilter,
                p = Y.filter,
                d = !n && t !== u;
            for(;
                (i = c[a]) != null && l; a++) {
                o.push(r = []), d && (i = " " + i);
                while(i) {
                    l = !1;
                    if(f = k.exec(i)) i = i.slice(f[0].length), l = r.push({
                        part: f.pop()
                            .replace(C, " "),
                        captures: f
                    });
                    for(s in p)(f = j[s].exec(i)) && (!h[s] || (f = h[s](f, t, n))) && (i = i.slice(f.shift()
                        .length), l = r.push({
                        part: s,
                        captures: f
                    }));
                    if(!l) break
                }
            }
            return l || G.error(e), o
        }

        function ut(e, t, i) {
            var s = t.dir,
                o = h++;
            return e || (e = function (e) {
                return e === i
            }), t.first ? function (t, n) {
                while(t = t[s])
                    if(t.nodeType === 1) return e(t, n) && t
            } : function (t, i) {
                var u, a = o + "." + r,
                    f = a + "." + n;
                while(t = t[s])
                    if(t.nodeType === 1) {
                        if((u = t[m]) === f) return t.sizset;
                        if(typeof u == "string" && u.indexOf(a) === 0) {
                            if(t.sizset) return t
                        } else {
                            t[m] = f;
                            if(e(t, i)) return t.sizset = !0, t;
                            t.sizset = !1
                        }
                    }
            }
        }

        function at(e, t) {
            return e ? function (n, r) {
                var i = t(n, r);
                return i && e(i === !0 ? n : i, r)
            } : t
        }

        function ft(e, t, n) {
            var r, i, s = 0;
            for(; r = e[s]; s++) Y.relative[r.part] ? i = ut(i, Y.relative[r.part], t) : (r.captures.push(t, n), i = at(i, Y.filter[r.part].apply(null, r.captures)));
            return i
        }

        function lt(e) {
            return function (t, n) {
                var r, i = 0;
                for(; r = e[i]; i++)
                    if(r(t, n)) return !0;
                return !1
            }
        }
        var n, r, i, s, o, u = e.document,
            a = u.documentElement,
            f = "undefined",
            l = !1,
            c = !0,
            h = 0,
            p = [].slice,
            d = [].push,
            m = ("sizcache" + Math.random())
                .replace(".", ""),
            g = "[\\x20\\t\\r\\n\\f]",
            y = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",
            b = y.replace("w", "w#"),
            w = "([*^$|!~]?=)",
            E = "\\[" + g + "*(" + y + ")" + g + "*(?:" + w + g + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + b + ")|)|)" + g + "*\\]",
            S = ":(" + y + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|((?:[^,]|\\\\,|(?:,(?=[^\\[]*\\]))|(?:,(?=[^\\(]*\\))))*))\\)|)",
            x = ":(nth|eq|gt|lt|first|last|even|odd)(?:\\((\\d*)\\)|)(?=[^-]|$)",
            T = g + "*([\\x20\\t\\r\\n\\f>+~])" + g + "*",
            N = "(?=[^\\x20\\t\\r\\n\\f])(?:\\\\.|" + E + "|" + S.replace(2, 7) + "|[^\\\\(),])+",
            C = new RegExp("^" + g + "+|((?:^|[^\\\\])(?:\\\\.)*)" + g + "+$", "g"),
            k = new RegExp("^" + T),
            L = new RegExp(N + "?(?=" + g + "*,|$)", "g"),
            A = new RegExp("^(?:(?!,)(?:(?:^|,)" + g + "*" + N + ")*?|" + g + "*(.*?))(\\)|$)"),
            O = new RegExp(N.slice(19, -6) + "\\x20\\t\\r\\n\\f>+~])+|" + T, "g"),
            M = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
            _ = /[\x20\t\r\n\f]*[+~]/,
            D = /:not\($/,
            P = /h\d/i,
            H = /input|select|textarea|button/i,
            B = /\\(?!\\)/g,
            j = {
                ID: new RegExp("^#(" + y + ")"),
                CLASS: new RegExp("^\\.(" + y + ")"),
                NAME: new RegExp("^\\[name=['\"]?(" + y + ")['\"]?\\]"),
                TAG: new RegExp("^(" + y.replace("[-", "[-\\*") + ")"),
                ATTR: new RegExp("^" + E),
                PSEUDO: new RegExp("^" + S),
                CHILD: new RegExp("^:(only|nth|last|first)-child(?:\\(" + g + "*(even|odd|(([+-]|)(\\d*)n|)" + g + "*(?:([+-]|)" + g + "*(\\d+)|))" + g + "*\\)|)", "i"),
                POS: new RegExp(x, "ig"),
                needsContext: new RegExp("^" + g + "*[>+~]|" + x, "i")
            }, F = {}, I = [],
            q = {}, R = [],
            U = function (e) {
                return e.sizzleFilter = !0, e
            }, z = function (e) {
                return function (t) {
                    return t.nodeName.toLowerCase() === "input" && t.type === e
                }
            }, W = function (e) {
                return function (t) {
                    var n = t.nodeName.toLowerCase();
                    return(n === "input" || n === "button") && t.type === e
                }
            }, X = function (e) {
                var t = !1,
                    n = u.createElement("div");
                try {
                    t = e(n)
                } catch(r) {}
                return n = null, t
            }, V = X(function (e) {
                e.innerHTML = "<select></select>";
                var t = typeof e.lastChild.getAttribute("multiple");
                return t !== "boolean" && t !== "string"
            }),
            $ = X(function (e) {
                e.id = m + 0, e.innerHTML = "<a name='" + m + "'></a><div name='" + m + "'></div>", a.insertBefore(e, a.firstChild);
                var t = u.getElementsByName && u.getElementsByName(m)
                    .length === 2 + u.getElementsByName(m + 0)
                    .length;
                return o = !u.getElementById(m), a.removeChild(e), t
            }),
            J = X(function (e) {
                return e.appendChild(u.createComment("")), e.getElementsByTagName("*")
                    .length === 0
            }),
            K = X(function (e) {
                return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== f && e.firstChild.getAttribute("href") === "#"
            }),
            Q = X(function (e) {
                return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", !e.getElementsByClassName || e.getElementsByClassName("e")
                    .length === 0 ? !1 : (e.lastChild.className = "e", e.getElementsByClassName("e")
                        .length !== 1)
            }),
            G = function (e, t, n, r) {
                n = n || [], t = t || u;
                var i, s, o, a, f = t.nodeType;
                if(f !== 1 && f !== 9) return [];
                if(!e || typeof e != "string") return n;
                o = et(t);
                if(!o && !r)
                    if(i = M.exec(e))
                        if(a = i[1]) {
                            if(f === 9) {
                                s = t.getElementById(a);
                                if(!s || !s.parentNode) return n;
                                if(s.id === a) return n.push(s), n
                            } else if(t.ownerDocument && (s = t.ownerDocument.getElementById(a)) && tt(t, s) && s.id === a) return n.push(s), n
                        } else {
                            if(i[2]) return d.apply(n, p.call(t.getElementsByTagName(e), 0)), n;
                            if((a = i[3]) && Q && t.getElementsByClassName) return d.apply(n, p.call(t.getElementsByClassName(a), 0)), n
                        }
                return ht(e, t, n, r, o)
            }, Y = G.selectors = {
                cacheLength: 50,
                match: j,
                order: ["ID", "TAG"],
                attrHandle: {},
                createPseudo: U,
                find: {
                    ID: o ? function (e, t, n) {
                        if(typeof t.getElementById !== f && !n) {
                            var r = t.getElementById(e);
                            return r && r.parentNode ? [r] : []
                        }
                    } : function (e, n, r) {
                        if(typeof n.getElementById !== f && !r) {
                            var i = n.getElementById(e);
                            return i ? i.id === e || typeof i.getAttributeNode !== f && i.getAttributeNode("id")
                                .value === e ? [i] : t : []
                        }
                    },
                    TAG: J ? function (e, t) {
                        if(typeof t.getElementsByTagName !== f) return t.getElementsByTagName(e)
                    } : function (e, t) {
                        var n = t.getElementsByTagName(e);
                        if(e === "*") {
                            var r, i = [],
                                s = 0;
                            for(; r = n[s]; s++) r.nodeType === 1 && i.push(r);
                            return i
                        }
                        return n
                    }
                },
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function (e) {
                        return e[1] = e[1].replace(B, ""), e[3] = (e[4] || e[5] || "")
                            .replace(B, ""), e[2] === "~=" && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function (e) {
                        return e[1] = e[1].toLowerCase(), e[1] === "nth" ? (e[2] || G.error(e[0]), e[3] = +(e[3] ? e[4] + (e[5] || 1) : 2 * (e[2] === "even" || e[2] === "odd")), e[4] = +(e[6] + e[7] || e[2] === "odd")) : e[2] && G.error(e[0]), e
                    },
                    PSEUDO: function (e) {
                        var t, n = e[4];
                        return j.CHILD.test(e[0]) ? null : (n && (t = A.exec(n)) && t.pop() && (e[0] = e[0].slice(0, t[0].length - n.length - 1), n = t[0].slice(0, -1)), e.splice(2, 3, n || e[3]), e)
                    }
                },
                filter: {
                    ID: o ? function (e) {
                        return e = e.replace(B, ""),
                        function (t) {
                            return t.getAttribute("id") === e
                        }
                    } : function (e) {
                        return e = e.replace(B, ""),
                        function (t) {
                            var n = typeof t.getAttributeNode !== f && t.getAttributeNode("id");
                            return n && n.value === e
                        }
                    },
                    TAG: function (e) {
                        return e === "*" ? function () {
                            return !0
                        } : (e = e.replace(B, "")
                            .toLowerCase(), function (t) {
                                return t.nodeName && t.nodeName.toLowerCase() === e
                            })
                    },
                    CLASS: function (e) {
                        var t = F[e];
                        return t || (t = F[e] = new RegExp("(^|" + g + ")" + e + "(" + g + "|$)"), I.push(e), I.length > Y.cacheLength && delete F[I.shift()]),
                        function (e) {
                            return t.test(e.className || typeof e.getAttribute !== f && e.getAttribute("class") || "")
                        }
                    },
                    ATTR: function (e, t, n) {
                        return t ? function (r) {
                            var i = G.attr(r, e),
                                s = i + "";
                            if(i == null) return t === "!=";
                            switch(t) {
                            case "=":
                                return s === n;
                            case "!=":
                                return s !== n;
                            case "^=":
                                return n && s.indexOf(n) === 0;
                            case "*=":
                                return n && s.indexOf(n) > -1;
                            case "$=":
                                return n && s.substr(s.length - n.length) === n;
                            case "~=":
                                return(" " + s + " ")
                                    .indexOf(n) > -1;
                            case "|=":
                                return s === n || s.substr(0, n.length + 1) === n + "-"
                            }
                        } : function (t) {
                            return G.attr(t, e) != null
                        }
                    },
                    CHILD: function (e, t, n, r) {
                        if(e === "nth") {
                            var i = h++;
                            return function (e) {
                                var t, s, o = 0,
                                    u = e;
                                if(n === 1 && r === 0) return !0;
                                t = e.parentNode;
                                if(t && (t[m] !== i || !e.sizset)) {
                                    for(u = t.firstChild; u; u = u.nextSibling)
                                        if(u.nodeType === 1) {
                                            u.sizset = ++o;
                                            if(u === e) break
                                        }
                                    t[m] = i
                                }
                                return s = e.sizset - r, n === 0 ? s === 0 : s % n === 0 && s / n >= 0
                            }
                        }
                        return function (t) {
                            var n = t;
                            switch(e) {
                            case "only":
                            case "first":
                                while(n = n.previousSibling)
                                    if(n.nodeType === 1) return !1;
                                if(e === "first") return !0;
                                n = t;
                            case "last":
                                while(n = n.nextSibling)
                                    if(n.nodeType === 1) return !1;
                                return !0
                            }
                        }
                    },
                    PSEUDO: function (e, t, n, r) {
                        var i = Y.pseudos[e] || Y.pseudos[e.toLowerCase()];
                        return i || G.error("unsupported pseudo: " + e), i.sizzleFilter ? i(t, n, r) : i
                    }
                },
                pseudos: {
                    not: U(function (e, t, n) {
                        var r = ct(e.replace(C, "$1"), t, n);
                        return function (e) {
                            return !r(e)
                        }
                    }),
                    enabled: function (e) {
                        return e.disabled === !1
                    },
                    disabled: function (e) {
                        return e.disabled === !0
                    },
                    checked: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return t === "input" && !! e.checked || t === "option" && !! e.selected
                    },
                    selected: function (e) {
                        return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                    },
                    parent: function (e) {
                        return !Y.pseudos.empty(e)
                    },
                    empty: function (e) {
                        var t;
                        e = e.firstChild;
                        while(e) {
                            if(e.nodeName > "@" || (t = e.nodeType) === 3 || t === 4) return !1;
                            e = e.nextSibling
                        }
                        return !0
                    },
                    contains: U(function (e) {
                        return function (t) {
                            return(t.textContent || t.innerText || nt(t))
                                .indexOf(e) > -1
                        }
                    }),
                    has: U(function (e) {
                        return function (t) {
                            return G(e, t)
                                .length > 0
                        }
                    }),
                    header: function (e) {
                        return P.test(e.nodeName)
                    },
                    text: function (e) {
                        var t, n;
                        return e.nodeName.toLowerCase() === "input" && (t = e.type) === "text" && ((n = e.getAttribute("type")) == null || n.toLowerCase() === t)
                    },
                    radio: z("radio"),
                    checkbox: z("checkbox"),
                    file: z("file"),
                    password: z("password"),
                    image: z("image"),
                    submit: W("submit"),
                    reset: W("reset"),
                    button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return t === "input" && e.type === "button" || t === "button"
                    },
                    input: function (e) {
                        return H.test(e.nodeName)
                    },
                    focus: function (e) {
                        var t = e.ownerDocument;
                        return e === t.activeElement && (!t.hasFocus || t.hasFocus()) && ( !! e.type || !! e.href)
                    },
                    active: function (e) {
                        return e === e.ownerDocument.activeElement
                    }
                },
                setFilters: {
                    first: function (e, t, n) {
                        return n ? e.slice(1) : [e[0]]
                    },
                    last: function (e, t, n) {
                        var r = e.pop();
                        return n ? e : [r]
                    },
                    even: function (e, t, n) {
                        var r = [],
                            i = n ? 1 : 0,
                            s = e.length;
                        for(; i < s; i += 2) r.push(e[i]);
                        return r
                    },
                    odd: function (e, t, n) {
                        var r = [],
                            i = n ? 0 : 1,
                            s = e.length;
                        for(; i < s; i += 2) r.push(e[i]);
                        return r
                    },
                    lt: function (e, t, n) {
                        return n ? e.slice(+t) : e.slice(0, +t)
                    },
                    gt: function (e, t, n) {
                        return n ? e.slice(0, +t + 1) : e.slice(+t + 1)
                    },
                    eq: function (e, t, n) {
                        var r = e.splice(+t, 1);
                        return n ? e : r
                    }
                }
            };
        Y.setFilters.nth = Y.setFilters.eq, Y.filters = Y.pseudos, K || (Y.attrHandle = {
            href: function (e) {
                return e.getAttribute("href", 2)
            },
            type: function (e) {
                return e.getAttribute("type")
            }
        }), $ && (Y.order.push("NAME"), Y.find.NAME = function (e, t) {
            if(typeof t.getElementsByName !== f) return t.getElementsByName(e)
        }), Q && (Y.order.splice(1, 0, "CLASS"), Y.find.CLASS = function (e, t, n) {
            if(typeof t.getElementsByClassName !== f && !n) return t.getElementsByClassName(e)
        });
        try {
            p.call(a.childNodes, 0)[0].nodeType
        } catch(Z) {
            p = function (e) {
                var t, n = [];
                for(; t = this[e]; e++) n.push(t);
                return n
            }
        }
        var et = G.isXML = function (e) {
            var t = e && (e.ownerDocument || e)
                .documentElement;
            return t ? t.nodeName !== "HTML" : !1
        }, tt = G.contains = a.compareDocumentPosition ? function (e, t) {
                return !!(e.compareDocumentPosition(t) & 16)
            } : a.contains ? function (e, t) {
                var n = e.nodeType === 9 ? e.documentElement : e,
                    r = t.parentNode;
                return e === r || !! (r && r.nodeType === 1 && n.contains && n.contains(r))
            } : function (e, t) {
                while(t = t.parentNode)
                    if(t === e) return !0;
                return !1
            }, nt = G.getText = function (e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if(i) {
                    if(i === 1 || i === 9 || i === 11) {
                        if(typeof e.textContent == "string") return e.textContent;
                        for(e = e.firstChild; e; e = e.nextSibling) n += nt(e)
                    } else if(i === 3 || i === 4) return e.nodeValue
                } else
                    for(; t = e[r]; r++) n += nt(t);
                return n
            };
        G.attr = function (e, t) {
            var n, r = et(e);
            return r || (t = t.toLowerCase()), Y.attrHandle[t] ? Y.attrHandle[t](e) : V || r ? e.getAttribute(t) : (n = e.getAttributeNode(t), n ? typeof e[t] == "boolean" ? e[t] ? t : null : n.specified ? n.value : null : null)
        }, G.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, [0, 0].sort(function () {
            return c = 0
        }), a.compareDocumentPosition ? i = function (e, t) {
            return e === t ? (l = !0, 0) : (!e.compareDocumentPosition || !t.compareDocumentPosition ? e.compareDocumentPosition : e.compareDocumentPosition(t) & 4) ? -1 : 1
        } : (i = function (e, t) {
            if(e === t) return l = !0, 0;
            if(e.sourceIndex && t.sourceIndex) return e.sourceIndex - t.sourceIndex;
            var n, r, i = [],
                o = [],
                u = e.parentNode,
                a = t.parentNode,
                f = u;
            if(u === a) return s(e, t);
            if(!u) return -1;
            if(!a) return 1;
            while(f) i.unshift(f), f = f.parentNode;
            f = a;
            while(f) o.unshift(f), f = f.parentNode;
            n = i.length, r = o.length;
            for(var c = 0; c < n && c < r; c++)
                if(i[c] !== o[c]) return s(i[c], o[c]);
            return c === n ? s(e, o[c], -1) : s(i[c], t, 1)
        }, s = function (e, t, n) {
            if(e === t) return n;
            var r = e.nextSibling;
            while(r) {
                if(r === t) return -1;
                r = r.nextSibling
            }
            return 1
        }), G.uniqueSort = function (e) {
            var t, n = 1;
            if(i) {
                l = c, e.sort(i);
                if(l)
                    for(; t = e[n]; n++) t === e[n - 1] && e.splice(n--, 1)
            }
            return e
        };
        var ct = G.compile = function (e, t, n) {
            var r, i, s, o = q[e];
            if(o && o.context === t) return o;
            i = ot(e, t, n);
            for(s = 0; r = i[s]; s++) i[s] = ft(r, t, n);
            return o = q[e] = lt(i), o.context = t, o.runs = o.dirruns = 0, R.push(e), R.length > Y.cacheLength && delete q[R.shift()], o
        };
        G.matches = function (e, t) {
            return G(e, null, null, t)
        }, G.matchesSelector = function (e, t) {
            return G(t, null, null, [e])
                .length > 0
        };
        var ht = function (e, t, i, s, o) {
            e = e.replace(C, "$1");
            var u, a, f, l, c, h, v, m, g, y = e.match(L),
                b = e.match(O),
                w = t.nodeType;
            if(j.POS.test(e)) return st(e, t, i, s, y);
            if(s) u = p.call(s, 0);
            else if(y && y.length === 1) {
                if(b.length > 1 && w === 9 && !o && (y = j.ID.exec(b[0]))) {
                    t = Y.find.ID(y[1], t, o)[0];
                    if(!t) return i;
                    e = e.slice(b.shift()
                        .length)
                }
                m = (y = _.exec(b[0])) && !y.index && t.parentNode || t, g = b.pop(), h = g.split(":not")[0];
                for(f = 0, l = Y.order.length; f < l; f++) {
                    v = Y.order[f];
                    if(y = j[v].exec(h)) {
                        u = Y.find[v]((y[1] || "")
                            .replace(B, ""), m, o);
                        if(u == null) continue;
                        h === g && (e = e.slice(0, e.length - g.length) + h.replace(j[v], ""), e || d.apply(i, p.call(u, 0)));
                        break
                    }
                }
            }
            if(e) {
                a = ct(e, t, o), r = a.dirruns++, u == null && (u = Y.find.TAG("*", _.test(e) && t.parentNode || t));
                for(f = 0; c = u[f]; f++) n = a.runs++, a(c, t) && i.push(c)
            }
            return i
        };
        u.querySelectorAll && function () {
            var e, t = ht,
                n = /'|\\/g,
                r = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
                i = [],
                s = [":active"],
                o = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.oMatchesSelector || a.msMatchesSelector;
            X(function (e) {
                e.innerHTML = "<select><option selected></option></select>", e.querySelectorAll("[selected]")
                    .length || i.push("\\[" + g + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked")
                    .length || i.push(":checked")
            }), X(function (e) {
                e.innerHTML = "<p test=''></p>", e.querySelectorAll("[test^='']")
                    .length && i.push("[*^$]=" + g + "*(?:\"\"|'')"), e.innerHTML = "<input type='hidden'>", e.querySelectorAll(":enabled")
                    .length || i.push(":enabled", ":disabled")
            }), i = i.length && new RegExp(i.join("|")), ht = function (e, r, s, o, u) {
                if(!o && !u && (!i || !i.test(e)))
                    if(r.nodeType === 9) try {
                        return d.apply(s, p.call(r.querySelectorAll(e), 0)), s
                    } catch(a) {} else if(r.nodeType === 1 && r.nodeName.toLowerCase() !== "object") {
                        var f = r.getAttribute("id"),
                            l = f || m,
                            c = _.test(e) && r.parentNode || r;
                        f ? l = l.replace(n, "\\$&") : r.setAttribute("id", l);
                        try {
                            return d.apply(s, p.call(c.querySelectorAll(e.replace(L, "[id='" + l + "'] $&")), 0)), s
                        } catch(a) {} finally {
                            f || r.removeAttribute("id")
                        }
                    }
                return t(e, r, s, o, u)
            }, o && (X(function (t) {
                e = o.call(t, "div");
                try {
                    o.call(t, "[test!='']:sizzle"), s.push(Y.match.PSEUDO)
                } catch(n) {}
            }), s = new RegExp(s.join("|")), G.matchesSelector = function (t, n) {
                n = n.replace(r, "='$1']");
                if(!et(t) && !s.test(n) && (!i || !i.test(n))) try {
                    var u = o.call(t, n);
                    if(u || e || t.document && t.document.nodeType !== 11) return u
                } catch(a) {}
                return G(n, null, null, [t])
                    .length > 0
            })
        }(), G.attr = v.attr, v.find = G, v.expr = G.selectors, v.expr[":"] = v.expr.pseudos, v.unique = G.uniqueSort, v.text = G.getText, v.isXMLDoc = G.isXML, v.contains = G.contains
    }(e);
    var nt = /Until$/,
        rt = /^(?:parents|prev(?:Until|All))/,
        it = /^.[^:#\[\.,]*$/,
        st = v.expr.match.needsContext,
        ot = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    v.fn.extend({
        find: function (e) {
            var t, n, r, i, s, o, u = this;
            if(typeof e != "string") return v(e)
                .filter(function () {
                    for(t = 0, n = u.length; t < n; t++)
                        if(v.contains(u[t], this)) return !0
                });
            o = this.pushStack("", "find", e);
            for(t = 0, n = this.length; t < n; t++) {
                r = o.length, v.find(e, this[t], o);
                if(t > 0)
                    for(i = r; i < o.length; i++)
                        for(s = 0; s < r; s++)
                            if(o[s] === o[i]) {
                                o.splice(i--, 1);
                                break
                            }
            }
            return o
        },
        has: function (e) {
            var t, n = v(e, this),
                r = n.length;
            return this.filter(function () {
                for(t = 0; t < r; t++)
                    if(v.contains(this, n[t])) return !0
            })
        },
        not: function (e) {
            return this.pushStack(ft(this, e, !1), "not", e)
        },
        filter: function (e) {
            return this.pushStack(ft(this, e, !0), "filter", e)
        },
        is: function (e) {
            return !!e && (typeof e == "string" ? st.test(e) ? v(e, this.context)
                .index(this[0]) >= 0 : v.filter(e, this)
                .length > 0 : this.filter(e)
                .length > 0)
        },
        closest: function (e, t) {
            var n, r = 0,
                i = this.length,
                s = [],
                o = st.test(e) || typeof e != "string" ? v(e, t || this.context) : 0;
            for(; r < i; r++) {
                n = this[r];
                while(n && n.ownerDocument && n !== t && n.nodeType !== 11) {
                    if(o ? o.index(n) > -1 : v.find.matchesSelector(n, e)) {
                        s.push(n);
                        break
                    }
                    n = n.parentNode
                }
            }
            return s = s.length > 1 ? v.unique(s) : s, this.pushStack(s, "closest", e)
        },
        index: function (e) {
            return e ? typeof e == "string" ? v.inArray(this[0], v(e)) : v.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.prevAll()
                .length : -1
        },
        add: function (e, t) {
            var n = typeof e == "string" ? v(e, t) : v.makeArray(e && e.nodeType ? [e] : e),
                r = v.merge(this.get(), n);
            return this.pushStack(ut(n[0]) || ut(r[0]) ? r : v.unique(r))
        },
        addBack: function (e) {
            return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
        }
    }), v.fn.andSelf = v.fn.addBack, v.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && t.nodeType !== 11 ? t : null
        },
        parents: function (e) {
            return v.dir(e, "parentNode")
        },
        parentsUntil: function (e, t, n) {
            return v.dir(e, "parentNode", n)
        },
        next: function (e) {
            return at(e, "nextSibling")
        },
        prev: function (e) {
            return at(e, "previousSibling")
        },
        nextAll: function (e) {
            return v.dir(e, "nextSibling")
        },
        prevAll: function (e) {
            return v.dir(e, "previousSibling")
        },
        nextUntil: function (e, t, n) {
            return v.dir(e, "nextSibling", n)
        },
        prevUntil: function (e, t, n) {
            return v.dir(e, "previousSibling", n)
        },
        siblings: function (e) {
            return v.sibling((e.parentNode || {})
                .firstChild, e)
        },
        children: function (e) {
            return v.sibling(e.firstChild)
        },
        contents: function (e) {
            return v.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : v.merge([], e.childNodes)
        }
    }, function (e, t) {
        v.fn[e] = function (n, r) {
            var i = v.map(this, t, n);
            return nt.test(e) || (r = n), r && typeof r == "string" && (i = v.filter(r, i)), i = this.length > 1 && !ot[e] ? v.unique(i) : i, this.length > 1 && rt.test(e) && (i = i.reverse()), this.pushStack(i, e, l.call(arguments)
                .join(","))
        }
    }), v.extend({
        filter: function (e, t, n) {
            return n && (e = ":not(" + e + ")"), t.length === 1 ? v.find.matchesSelector(t[0], e) ? [t[0]] : [] : v.find.matches(e, t)
        },
        dir: function (e, n, r) {
            var i = [],
                s = e[n];
            while(s && s.nodeType !== 9 && (r === t || s.nodeType !== 1 || !v(s)
                .is(r))) s.nodeType === 1 && i.push(s), s = s[n];
            return i
        },
        sibling: function (e, t) {
            var n = [];
            for(; e; e = e.nextSibling) e.nodeType === 1 && e !== t && n.push(e);
            return n
        }
    });
    var ct = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        ht = / jQuery\d+="(?:null|\d+)"/g,
        pt = /^\s+/,
        dt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        vt = /<([\w:]+)/,
        mt = /<tbody/i,
        gt = /<|&#?\w+;/,
        yt = /<(?:script|style|link)/i,
        bt = /<(?:script|object|embed|option|style)/i,
        wt = new RegExp("<(?:" + ct + ")[\\s/>]", "i"),
        Et = /^(?:checkbox|radio)$/,
        St = /checked\s*(?:[^=]|=\s*.checked.)/i,
        xt = /\/(java|ecma)script/i,
        Tt = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
        Nt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        }, Ct = lt(i),
        kt = Ct.appendChild(i.createElement("div"));
    Nt.optgroup = Nt.option, Nt.tbody = Nt.tfoot = Nt.colgroup = Nt.caption = Nt.thead, Nt.th = Nt.td, v.support.htmlSerialize || (Nt._default = [1, "X<div>", "</div>"]), v.fn.extend({
        text: function (e) {
            return v.access(this, function (e) {
                return e === t ? v.text(this) : this.empty()
                    .append((this[0] && this[0].ownerDocument || i)
                        .createTextNode(e))
            }, null, e, arguments.length)
        },
        wrapAll: function (e) {
            if(v.isFunction(e)) return this.each(function (t) {
                v(this)
                    .wrapAll(e.call(this, t))
            });
            if(this[0]) {
                var t = v(e, this[0].ownerDocument)
                    .eq(0)
                    .clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    var e = this;
                    while(e.firstChild && e.firstChild.nodeType === 1) e = e.firstChild;
                    return e
                })
                    .append(this)
            }
            return this
        },
        wrapInner: function (e) {
            return v.isFunction(e) ? this.each(function (t) {
                v(this)
                    .wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = v(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function (e) {
            var t = v.isFunction(e);
            return this.each(function (n) {
                v(this)
                    .wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function () {
            return this.parent()
                .each(function () {
                    v.nodeName(this, "body") || v(this)
                        .replaceWith(this.childNodes)
                })
                .end()
        },
        append: function () {
            return this.domManip(arguments, !0, function (e) {
                (this.nodeType === 1 || this.nodeType === 11) && this.appendChild(e)
            })
        },
        prepend: function () {
            return this.domManip(arguments, !0, function (e) {
                (this.nodeType === 1 || this.nodeType === 11) && this.insertBefore(e, this.firstChild)
            })
        },
        before: function () {
            if(!ut(this[0])) return this.domManip(arguments, !1, function (e) {
                this.parentNode.insertBefore(e, this)
            });
            if(arguments.length) {
                var e = v.clean(arguments);
                return this.pushStack(v.merge(e, this), "before", this.selector)
            }
        },
        after: function () {
            if(!ut(this[0])) return this.domManip(arguments, !1, function (e) {
                this.parentNode.insertBefore(e, this.nextSibling)
            });
            if(arguments.length) {
                var e = v.clean(arguments);
                return this.pushStack(v.merge(this, e), "after", this.selector)
            }
        },
        remove: function (e, t) {
            var n, r = 0;
            for(;
                (n = this[r]) != null; r++)
                if(!e || v.filter(e, [n])
                    .length)!t && n.nodeType === 1 && (v.cleanData(n.getElementsByTagName("*")), v.cleanData([n])), n.parentNode && n.parentNode.removeChild(n);
            return this
        },
        empty: function () {
            var e, t = 0;
            for(;
                (e = this[t]) != null; t++) {
                e.nodeType === 1 && v.cleanData(e.getElementsByTagName("*"));
                while(e.firstChild) e.removeChild(e.firstChild)
            }
            return this
        },
        clone: function (e, t) {
            return e = e == null ? !1 : e, t = t == null ? e : t, this.map(function () {
                return v.clone(this, e, t)
            })
        },
        html: function (e) {
            return v.access(this, function (e) {
                var n = this[0] || {}, r = 0,
                    i = this.length;
                if(e === t) return n.nodeType === 1 ? n.innerHTML.replace(ht, "") : t;
                if(typeof e == "string" && !yt.test(e) && (v.support.htmlSerialize || !wt.test(e)) && (v.support.leadingWhitespace || !pt.test(e)) && !Nt[(vt.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(dt, "<$1></$2>");
                    try {
                        for(; r < i; r++) n = this[r] || {}, n.nodeType === 1 && (v.cleanData(n.getElementsByTagName("*")), n.innerHTML = e);
                        n = 0
                    } catch(s) {}
                }
                n && this.empty()
                    .append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function (e) {
            return ut(this[0]) ? this.length ? this.pushStack(v(v.isFunction(e) ? e() : e), "replaceWith", e) : this : v.isFunction(e) ? this.each(function (t) {
                var n = v(this),
                    r = n.html();
                n.replaceWith(e.call(this, t, r))
            }) : (typeof e != "string" && (e = v(e)
                .detach()), this.each(function () {
                var t = this.nextSibling,
                    n = this.parentNode;
                v(this)
                    .remove(), t ? v(t)
                    .before(e) : v(n)
                    .append(e)
            }))
        },
        detach: function (e) {
            return this.remove(e, !0)
        },
        domManip: function (e, n, r) {
            e = [].concat.apply([], e);
            var i, s, o, u, a = 0,
                f = e[0],
                l = [],
                c = this.length;
            if(!v.support.checkClone && c > 1 && typeof f == "string" && St.test(f)) return this.each(function () {
                v(this)
                    .domManip(e, n, r)
            });
            if(v.isFunction(f)) return this.each(function (i) {
                var s = v(this);
                e[0] = f.call(this, i, n ? s.html() : t), s.domManip(e, n, r)
            });
            if(this[0]) {
                i = v.buildFragment(e, this, l), o = i.fragment, s = o.firstChild, o.childNodes.length === 1 && (o = s);
                if(s) {
                    n = n && v.nodeName(s, "tr");
                    for(u = i.cacheable || c - 1; a < c; a++) r.call(n && v.nodeName(this[a], "table") ? Lt(this[a], "tbody") : this[a], a === u ? o : v.clone(o, !0, !0))
                }
                o = s = null, l.length && v.each(l, function (e, t) {
                    t.src ? v.ajax ? v.ajax({
                        url: t.src,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        "throws": !0
                    }) : v.error("no ajax") : v.globalEval((t.text || t.textContent || t.innerHTML || "")
                        .replace(Tt, "")), t.parentNode && t.parentNode.removeChild(t)
                })
            }
            return this
        }
    }), v.buildFragment = function (e, n, r) {
        var s, o, u, a = e[0];
        return n = n || i, n = (n[0] || n)
            .ownerDocument || n[0] || n, typeof n.createDocumentFragment == "undefined" && (n = i), e.length === 1 && typeof a == "string" && a.length < 512 && n === i && a.charAt(0) === "<" && !bt.test(a) && (v.support.checkClone || !St.test(a)) && (v.support.html5Clone || !wt.test(a)) && (o = !0, s = v.fragments[a], u = s !== t), s || (s = n.createDocumentFragment(), v.clean(e, n, s, r), o && (v.fragments[a] = u && s)), {
                fragment: s,
                cacheable: o
        }
    }, v.fragments = {}, v.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        v.fn[e] = function (n) {
            var r, i = 0,
                s = [],
                o = v(n),
                u = o.length,
                a = this.length === 1 && this[0].parentNode;
            if((a == null || a && a.nodeType === 11 && a.childNodes.length === 1) && u === 1) return o[t](this[0]), this;
            for(; i < u; i++) r = (i > 0 ? this.clone(!0) : this)
                .get(), v(o[i])[t](r), s = s.concat(r);
            return this.pushStack(s, e, o.selector)
        }
    }), v.extend({
        clone: function (e, t, n) {
            var r, i, s, o;
            v.support.html5Clone || v.isXMLDoc(e) || !wt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (kt.innerHTML = e.outerHTML, kt.removeChild(o = kt.firstChild));
            if((!v.support.noCloneEvent || !v.support.noCloneChecked) && (e.nodeType === 1 || e.nodeType === 11) && !v.isXMLDoc(e)) {
                Ot(e, o), r = Mt(e), i = Mt(o);
                for(s = 0; r[s]; ++s) i[s] && Ot(r[s], i[s])
            }
            if(t) {
                At(e, o);
                if(n) {
                    r = Mt(e), i = Mt(o);
                    for(s = 0; r[s]; ++s) At(r[s], i[s])
                }
            }
            return r = i = null, o
        },
        clean: function (e, t, n, r) {
            var s, o, u, a, f, l, c, h, p, d, m, g, y = 0,
                b = [];
            if(!t || typeof t.createDocumentFragment == "undefined") t = i;
            for(o = t === i && Ct;
                (u = e[y]) != null; y++) {
                typeof u == "number" && (u += "");
                if(!u) continue;
                if(typeof u == "string")
                    if(!gt.test(u)) u = t.createTextNode(u);
                    else {
                        o = o || lt(t), c = c || o.appendChild(t.createElement("div")), u = u.replace(dt, "<$1></$2>"), a = (vt.exec(u) || ["", ""])[1].toLowerCase(), f = Nt[a] || Nt._default, l = f[0], c.innerHTML = f[1] + u + f[2];
                        while(l--) c = c.lastChild;
                        if(!v.support.tbody) {
                            h = mt.test(u), p = a === "table" && !h ? c.firstChild && c.firstChild.childNodes : f[1] === "<table>" && !h ? c.childNodes : [];
                            for(s = p.length - 1; s >= 0; --s) v.nodeName(p[s], "tbody") && !p[s].childNodes.length && p[s].parentNode.removeChild(p[s])
                        }!v.support.leadingWhitespace && pt.test(u) && c.insertBefore(t.createTextNode(pt.exec(u)[0]), c.firstChild), u = c.childNodes, c = o.lastChild
                    }
                u.nodeType ? b.push(u) : b = v.merge(b, u)
            }
            c && (o.removeChild(c), u = c = o = null);
            if(!v.support.appendChecked)
                for(y = 0;
                    (u = b[y]) != null; y++) v.nodeName(u, "input") ? _t(u) : typeof u.getElementsByTagName != "undefined" && v.grep(u.getElementsByTagName("input"), _t);
            if(n) {
                m = function (e) {
                    if(!e.type || xt.test(e.type)) return r ? r.push(e.parentNode ? e.parentNode.removeChild(e) : e) : n.appendChild(e)
                };
                for(y = 0;
                    (u = b[y]) != null; y++)
                    if(!v.nodeName(u, "script") || !m(u)) n.appendChild(u), typeof u.getElementsByTagName != "undefined" && (g = v.grep(v.merge([], u.getElementsByTagName("script")), m), b.splice.apply(b, [y + 1, 0].concat(g)), y += g.length)
            }
            return b
        },
        cleanData: function (e, t) {
            var n, r, i, s, o = 0,
                u = v.expando,
                a = v.cache,
                f = v.support.deleteExpando,
                l = v.event.special;
            for(;
                (i = e[o]) != null; o++)
                if(t || v.acceptData(i)) {
                    r = i[u], n = r && a[r];
                    if(n) {
                        if(n.events)
                            for(s in n.events) l[s] ? v.event.remove(i, s) : v.removeEvent(i, s, n.handle);
                        a[r] && (delete a[r], f ? delete i[u] : i.removeAttribute ? i.removeAttribute(u) : i[u] = null, v.deletedIds.push(r))
                    }
                }
        }
    }),
    function () {
        var e, t;
        v.uaMatch = function (e) {
            e = e.toLowerCase();
            var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
            return {
                browser: t[1] || "",
                version: t[2] || "0"
            }
        }, e = v.uaMatch(o.userAgent), t = {}, e.browser && (t[e.browser] = !0, t.version = e.version), t.webkit && (t.safari = !0), v.browser = t, v.sub = function () {
            function e(t, n) {
                return new e.fn.init(t, n)
            }
            v.extend(!0, e, this), e.superclass = this, e.fn = e.prototype = this(), e.fn.constructor = e, e.sub = this.sub, e.fn.init = function (r, i) {
                return i && i instanceof v && !(i instanceof e) && (i = e(i)), v.fn.init.call(this, r, i, t)
            }, e.fn.init.prototype = e.fn;
            var t = e(i);
            return e
        }
    }();
    var Dt, Pt, Ht, Bt = /alpha\([^)]*\)/i,
        jt = /opacity=([^)]*)/,
        Ft = /^(top|right|bottom|left)$/,
        It = /^margin/,
        qt = new RegExp("^(" + m + ")(.*)$", "i"),
        Rt = new RegExp("^(" + m + ")(?!px)[a-z%]+$", "i"),
        Ut = new RegExp("^([-+])=(" + m + ")", "i"),
        zt = {}, Wt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, Xt = {
            letterSpacing: 0,
            fontWeight: 400,
            lineHeight: 1
        }, Vt = ["Top", "Right", "Bottom", "Left"],
        $t = ["Webkit", "O", "Moz", "ms"],
        Jt = v.fn.toggle;
    v.fn.extend({
        css: function (e, n) {
            return v.access(this, function (e, n, r) {
                return r !== t ? v.style(e, n, r) : v.css(e, n)
            }, e, n, arguments.length > 1)
        },
        show: function () {
            return Gt(this, !0)
        },
        hide: function () {
            return Gt(this)
        },
        toggle: function (e, t) {
            var n = typeof e == "boolean";
            return v.isFunction(e) && v.isFunction(t) ? Jt.apply(this, arguments) : this.each(function () {
                (n ? e : Qt(this)) ? v(this)
                    .show() : v(this)
                    .hide()
            })
        }
    }), v.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if(t) {
                        var n = Dt(e, "opacity");
                        return n === "" ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": v.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (e, n, r, i) {
            if(!e || e.nodeType === 3 || e.nodeType === 8 || !e.style) return;
            var s, o, u, a = v.camelCase(n),
                f = e.style;
            n = v.cssProps[a] || (v.cssProps[a] = Kt(f, a)), u = v.cssHooks[n] || v.cssHooks[a];
            if(r === t) return u && "get" in u && (s = u.get(e, !1, i)) !== t ? s : f[n];
            o = typeof r, o === "string" && (s = Ut.exec(r)) && (r = (s[1] + 1) * s[2] + parseFloat(v.css(e, n)), o = "number");
            if(r == null || o === "number" && isNaN(r)) return;
            o === "number" && !v.cssNumber[a] && (r += "px");
            if(!u || !("set" in u) || (r = u.set(e, r, i)) !== t) try {
                f[n] = r
            } catch(l) {}
        },
        css: function (e, n, r, i) {
            var s, o, u, a = v.camelCase(n);
            return n = v.cssProps[a] || (v.cssProps[a] = Kt(e.style, a)), u = v.cssHooks[n] || v.cssHooks[a], u && "get" in u && (s = u.get(e, !0, i)), s === t && (s = Dt(e, n)), s === "normal" && n in Xt && (s = Xt[n]), r || i !== t ? (o = parseFloat(s), r || v.isNumeric(o) ? o || 0 : s) : s
        },
        swap: function (e, t, n) {
            var r, i, s = {};
            for(i in t) s[i] = e.style[i], e.style[i] = t[i];
            r = n.call(e);
            for(i in t) e.style[i] = s[i];
            return r
        }
    }), e.getComputedStyle ? Dt = function (e, t) {
        var n, r, i, s, o = getComputedStyle(e, null),
            u = e.style;
        return o && (n = o[t], n === "" && !v.contains(e.ownerDocument.documentElement, e) && (n = v.style(e, t)), Rt.test(n) && It.test(t) && (r = u.width, i = u.minWidth, s = u.maxWidth, u.minWidth = u.maxWidth = u.width = n, n = o.width, u.width = r, u.minWidth = i, u.maxWidth = s)), n
    } : i.documentElement.currentStyle && (Dt = function (e, t) {
        var n, r, i = e.currentStyle && e.currentStyle[t],
            s = e.style;
        return i == null && s && s[t] && (i = s[t]), Rt.test(i) && !Ft.test(t) && (n = s.left, r = e.runtimeStyle && e.runtimeStyle.left, r && (e.runtimeStyle.left = e.currentStyle.left), s.left = t === "fontSize" ? "1em" : i, i = s.pixelLeft + "px", s.left = n, r && (e.runtimeStyle.left = r)), i === "" ? "auto" : i
    }), v.each(["height", "width"], function (e, t) {
        v.cssHooks[t] = {
            get: function (e, n, r) {
                if(n) return e.offsetWidth !== 0 || Dt(e, "display") !== "none" ? en(e, t, r) : v.swap(e, Wt, function () {
                    return en(e, t, r)
                })
            },
            set: function (e, n, r) {
                return Yt(e, n, r ? Zt(e, t, r, v.support.boxSizing && v.css(e, "boxSizing") === "border-box") : 0)
            }
        }
    }), v.support.opacity || (v.cssHooks.opacity = {
        get: function (e, t) {
            return jt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function (e, t) {
            var n = e.style,
                r = e.currentStyle,
                i = v.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")" : "",
                s = r && r.filter || n.filter || "";
            n.zoom = 1;
            if(t >= 1 && v.trim(s.replace(Bt, "")) === "" && n.removeAttribute) {
                n.removeAttribute("filter");
                if(r && !r.filter) return
            }
            n.filter = Bt.test(s) ? s.replace(Bt, i) : s + " " + i
        }
    }), v(function () {
        v.support.reliableMarginRight || (v.cssHooks.marginRight = {
            get: function (e, t) {
                return v.swap(e, {
                    display: "inline-block"
                }, function () {
                    if(t) return Dt(e, "marginRight")
                })
            }
        }), !v.support.pixelPosition && v.fn.position && v.each(["top", "left"], function (e, t) {
            v.cssHooks[t] = {
                get: function (e, n) {
                    if(n) {
                        var r = Dt(e, t);
                        return Rt.test(r) ? v(e)
                            .position()[t] + "px" : r
                    }
                }
            }
        })
    }), v.expr && v.expr.filters && (v.expr.filters.hidden = function (e) {
        return e.offsetWidth === 0 && e.offsetHeight === 0 || !v.support.reliableHiddenOffsets && (e.style && e.style.display || Dt(e, "display")) === "none"
    }, v.expr.filters.visible = function (e) {
        return !v.expr.filters.hidden(e)
    }), v.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (e, t) {
        v.cssHooks[e + t] = {
            expand: function (n) {
                var r, i = typeof n == "string" ? n.split(" ") : [n],
                    s = {};
                for(r = 0; r < 4; r++) s[e + Vt[r] + t] = i[r] || i[r - 2] || i[0];
                return s
            }
        }, It.test(e) || (v.cssHooks[e + t].set = Yt)
    });
    var nn = /%20/g,
        rn = /\[\]$/,
        sn = /\r?\n/g,
        on = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        un = /^(?:select|textarea)/i;
    v.fn.extend({
        serialize: function () {
            return v.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                return this.elements ? v.makeArray(this.elements) : this
            })
                .filter(function () {
                    return this.name && !this.disabled && (this.checked || un.test(this.nodeName) || on.test(this.type))
                })
                .map(function (e, t) {
                    var n = v(this)
                        .val();
                    return n == null ? null : v.isArray(n) ? v.map(n, function (e, n) {
                        return {
                            name: t.name,
                            value: e.replace(sn, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(sn, "\r\n")
                    }
                })
                .get()
        }
    }), v.param = function (e, n) {
        var r, i = [],
            s = function (e, t) {
                t = v.isFunction(t) ? t() : t == null ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        n === t && (n = v.ajaxSettings && v.ajaxSettings.traditional);
        if(v.isArray(e) || e.jquery && !v.isPlainObject(e)) v.each(e, function () {
            s(this.name, this.value)
        });
        else
            for(r in e) an(r, e[r], n, s);
        return i.join("&")
            .replace(nn, "+")
    };
    var fn, ln, cn = /#.*$/,
        hn = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        pn = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
        dn = /^(?:GET|HEAD)$/,
        vn = /^\/\//,
        mn = /\?/,
        gn = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        yn = /([?&])_=[^&]*/,
        bn = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        wn = v.fn.load,
        En = {}, Sn = {}, xn = ["*/"] + ["*"];
    try {
        fn = s.href
    } catch(Tn) {
        fn = i.createElement("a"), fn.href = "", fn = fn.href
    }
    ln = bn.exec(fn.toLowerCase()) || [], v.fn.load = function (e, n, r) {
        if(typeof e != "string" && wn) return wn.apply(this, arguments);
        if(!this.length) return this;
        var i, s, o, u = this,
            a = e.indexOf(" ");
        return a >= 0 && (i = e.slice(a, e.length), e = e.slice(0, a)), v.isFunction(n) ? (r = n, n = t) : typeof n == "object" && (s = "POST"), v.ajax({
            url: e,
            type: s,
            dataType: "html",
            data: n,
            complete: function (e, t) {
                r && u.each(r, o || [e.responseText, t, e])
            }
        })
            .done(function (e) {
                o = arguments, u.html(i ? v("<div>")
                    .append(e.replace(gn, ""))
                    .find(i) : e)
            }), this
    }, v.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (e, t) {
        v.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), v.each(["get", "post"], function (e, n) {
        v[n] = function (e, r, i, s) {
            return v.isFunction(r) && (s = s || i, i = r, r = t), v.ajax({
                type: n,
                url: e,
                data: r,
                success: i,
                dataType: s
            })
        }
    }), v.extend({
        getScript: function (e, n) {
            return v.get(e, t, n, "script")
        },
        getJSON: function (e, t, n) {
            return v.get(e, t, n, "json")
        },
        ajaxSetup: function (e, t) {
            return t ? kn(e, v.ajaxSettings) : (t = e, e = v.ajaxSettings), kn(e, t), e
        },
        ajaxSettings: {
            url: fn,
            isLocal: pn.test(ln[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": xn
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": e.String,
                "text html": !0,
                "text json": v.parseJSON,
                "text xml": v.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: Nn(En),
        ajaxTransport: Nn(Sn),
        ajax: function (e, n) {
            function T(e, n, s, a) {
                var l, y, b, w, S, T = n;
                if(E === 2) return;
                E = 2, u && clearTimeout(u), o = t, i = a || "", x.readyState = e > 0 ? 4 : 0, s && (w = Ln(c, x, s));
                if(e >= 200 && e < 300 || e === 304) c.ifModified && (S = x.getResponseHeader("Last-Modified"), S && (v.lastModified[r] = S), S = x.getResponseHeader("Etag"), S && (v.etag[r] = S)), e === 304 ? (T = "notmodified", l = !0) : (l = An(c, w), T = l.state, y = l.data, b = l.error, l = !b);
                else {
                    b = T;
                    if(!T || e) T = "error", e < 0 && (e = 0)
                }
                x.status = e, x.statusText = "" + (n || T), l ? d.resolveWith(h, [y, T, x]) : d.rejectWith(h, [x, T, b]), x.statusCode(g), g = t, f && p.trigger("ajax" + (l ? "Success" : "Error"), [x, c, l ? y : b]), m.fireWith(h, [x, T]), f && (p.trigger("ajaxComplete", [x, c]), --v.active || v.event.trigger("ajaxStop"))
            }
            typeof e == "object" && (n = e, e = t), n = n || {};
            var r, i, s, o, u, a, f, l, c = v.ajaxSetup({}, n),
                h = c.context || c,
                p = h !== c && (h.nodeType || h instanceof v) ? v(h) : v.event,
                d = v.Deferred(),
                m = v.Callbacks("once memory"),
                g = c.statusCode || {}, b = {}, w = {}, E = 0,
                S = "canceled",
                x = {
                    readyState: 0,
                    setRequestHeader: function (e, t) {
                        if(!E) {
                            var n = e.toLowerCase();
                            e = w[n] = w[n] || e, b[e] = t
                        }
                        return this
                    },
                    getAllResponseHeaders: function () {
                        return E === 2 ? i : null
                    },
                    getResponseHeader: function (e) {
                        var n;
                        if(E === 2) {
                            if(!s) {
                                s = {};
                                while(n = hn.exec(i)) s[n[1].toLowerCase()] = n[2]
                            }
                            n = s[e.toLowerCase()]
                        }
                        return n === t ? null : n
                    },
                    overrideMimeType: function (e) {
                        return E || (c.mimeType = e), this
                    },
                    abort: function (e) {
                        return e = e || S, o && o.abort(e), T(0, e), this
                    }
                };
            d.promise(x), x.success = x.done, x.error = x.fail, x.complete = m.add, x.statusCode = function (e) {
                if(e) {
                    var t;
                    if(E < 2)
                        for(t in e) g[t] = [g[t], e[t]];
                    else t = e[x.status], x.always(t)
                }
                return this
            }, c.url = ((e || c.url) + "")
                .replace(cn, "")
                .replace(vn, ln[1] + "//"), c.dataTypes = v.trim(c.dataType || "*")
                .toLowerCase()
                .split(y), c.crossDomain == null && (a = bn.exec(c.url.toLowerCase()), c.crossDomain = !(!a || a[1] == ln[1] && a[2] == ln[2] && (a[3] || (a[1] === "http:" ? 80 : 443)) == (ln[3] || (ln[1] === "http:" ? 80 : 443)))), c.data && c.processData && typeof c.data != "string" && (c.data = v.param(c.data, c.traditional)), Cn(En, c, n, x);
            if(E === 2) return x;
            f = c.global, c.type = c.type.toUpperCase(), c.hasContent = !dn.test(c.type), f && v.active++ === 0 && v.event.trigger("ajaxStart");
            if(!c.hasContent) {
                c.data && (c.url += (mn.test(c.url) ? "&" : "?") + c.data, delete c.data), r = c.url;
                if(c.cache === !1) {
                    var N = v.now(),
                        C = c.url.replace(yn, "$1_=" + N);
                    c.url = C + (C === c.url ? (mn.test(c.url) ? "&" : "?") + "_=" + N : "")
                }
            }(c.data && c.hasContent && c.contentType !== !1 || n.contentType) && x.setRequestHeader("Content-Type", c.contentType), c.ifModified && (r = r || c.url, v.lastModified[r] && x.setRequestHeader("If-Modified-Since", v.lastModified[r]), v.etag[r] && x.setRequestHeader("If-None-Match", v.etag[r])), x.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + (c.dataTypes[0] !== "*" ? ", " + xn + "; q=0.01" : "") : c.accepts["*"]);
            for(l in c.headers) x.setRequestHeader(l, c.headers[l]);
            if(!c.beforeSend || c.beforeSend.call(h, x, c) !== !1 && E !== 2) {
                S = "abort";
                for(l in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) x[l](c[l]);
                o = Cn(Sn, c, n, x);
                if(!o) T(-1, "No Transport");
                else {
                    x.readyState = 1, f && p.trigger("ajaxSend", [x, c]), c.async && c.timeout > 0 && (u = setTimeout(function () {
                        x.abort("timeout")
                    }, c.timeout));
                    try {
                        E = 1, o.send(b, T)
                    } catch(k) {
                        if(!(E < 2)) throw k;
                        T(-1, k)
                    }
                }
                return x
            }
            return x.abort()
        },
        active: 0,
        lastModified: {},
        etag: {}
    });
    var On = [],
        Mn = /\?/,
        _n = /(=)\?(?=&|$)|\?\?/,
        Dn = v.now();
    v.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = On.pop() || v.expando + "_" + Dn++;
            return this[e] = !0, e
        }
    }), v.ajaxPrefilter("json jsonp", function (n, r, i) {
        var s, o, u, a = n.data,
            f = n.url,
            l = n.jsonp !== !1,
            c = l && _n.test(f),
            h = l && !c && typeof a == "string" && !(n.contentType || "")
                .indexOf("application/x-www-form-urlencoded") && _n.test(a);
        if(n.dataTypes[0] === "jsonp" || c || h) return s = n.jsonpCallback = v.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, o = e[s], c ? n.url = f.replace(_n, "$1" + s) : h ? n.data = a.replace(_n, "$1" + s) : l && (n.url += (Mn.test(f) ? "&" : "?") + n.jsonp + "=" + s), n.converters["script json"] = function () {
            return u || v.error(s + " was not called"), u[0]
        }, n.dataTypes[0] = "json", e[s] = function () {
            u = arguments
        }, i.always(function () {
            e[s] = o, n[s] && (n.jsonpCallback = r.jsonpCallback, On.push(s)), u && v.isFunction(o) && o(u[0]), u = o = t
        }), "script"
    }), v.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function (e) {
                return v.globalEval(e), e
            }
        }
    }), v.ajaxPrefilter("script", function (e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), v.ajaxTransport("script", function (e) {
        if(e.crossDomain) {
            var n, r = i.head || i.getElementsByTagName("head")[0] || i.documentElement;
            return {
                send: function (s, o) {
                    n = i.createElement("script"), n.async = "async", e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function (e, i) {
                        if(i || !n.readyState || /loaded|complete/.test(n.readyState)) n.onload = n.onreadystatechange = null, r && n.parentNode && r.removeChild(n), n = t, i || o(200, "success")
                    }, r.insertBefore(n, r.firstChild)
                },
                abort: function () {
                    n && n.onload(0, 1)
                }
            }
        }
    });
    var Pn, Hn = e.ActiveXObject ? function () {
            for(var e in Pn) Pn[e](0, 1)
        } : !1,
        Bn = 0;
    v.ajaxSettings.xhr = e.ActiveXObject ? function () {
        return !this.isLocal && jn() || Fn()
    } : jn,
    function (e) {
        v.extend(v.support, {
            ajax: !! e,
            cors: !! e && "withCredentials" in e
        })
    }(v.ajaxSettings.xhr()), v.support.ajax && v.ajaxTransport(function (n) {
        if(!n.crossDomain || v.support.cors) {
            var r;
            return {
                send: function (i, s) {
                    var o, u, a = n.xhr();
                    n.username ? a.open(n.type, n.url, n.async, n.username, n.password) : a.open(n.type, n.url, n.async);
                    if(n.xhrFields)
                        for(u in n.xhrFields) a[u] = n.xhrFields[u];
                    n.mimeType && a.overrideMimeType && a.overrideMimeType(n.mimeType), !n.crossDomain && !i["X-Requested-With"] && (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for(u in i) a.setRequestHeader(u, i[u])
                    } catch(f) {}
                    a.send(n.hasContent && n.data || null), r = function (e, i) {
                        var u, f, l, c, h;
                        try {
                            if(r && (i || a.readyState === 4)) {
                                r = t, o && (a.onreadystatechange = v.noop, Hn && delete Pn[o]);
                                if(i) a.readyState !== 4 && a.abort();
                                else {
                                    u = a.status, l = a.getAllResponseHeaders(), c = {}, h = a.responseXML, h && h.documentElement && (c.xml = h);
                                    try {
                                        c.text = a.responseText
                                    } catch(e) {}
                                    try {
                                        f = a.statusText
                                    } catch(p) {
                                        f = ""
                                    }!u && n.isLocal && !n.crossDomain ? u = c.text ? 200 : 404 : u === 1223 && (u = 204)
                                }
                            }
                        } catch(d) {
                            i || s(-1, d)
                        }
                        c && s(u, f, c, l)
                    }, n.async ? a.readyState === 4 ? setTimeout(r, 0) : (o = ++Bn, Hn && (Pn || (Pn = {}, v(e)
                        .unload(Hn)), Pn[o] = r), a.onreadystatechange = r) : r()
                },
                abort: function () {
                    r && r(0, 1)
                }
            }
        }
    });
    var In, qn, Rn = /^(?:toggle|show|hide)$/,
        Un = new RegExp("^(?:([-+])=|)(" + m + ")([a-z%]*)$", "i"),
        zn = /queueHooks$/,
        Wn = [Qn],
        Xn = {
            "*": [
                function (e, t) {
                    var n, r, i, s = this.createTween(e, t),
                        o = Un.exec(t),
                        u = s.cur(),
                        a = +u || 0,
                        f = 1;
                    if(o) {
                        n = +o[2], r = o[3] || (v.cssNumber[e] ? "" : "px");
                        if(r !== "px" && a) {
                            a = v.css(s.elem, e, !0) || n || 1;
                            do i = f = f || ".5", a /= f, v.style(s.elem, e, a + r), f = s.cur() / u; while (f !== 1 && f !== i)
                        }
                        s.unit = r, s.start = a, s.end = o[1] ? a + (o[1] + 1) * n : n
                    }
                    return s
                }
            ]
        };
    v.Animation = v.extend(Jn, {
        tweener: function (e, t) {
            v.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            var n, r = 0,
                i = e.length;
            for(; r < i; r++) n = e[r], Xn[n] = Xn[n] || [], Xn[n].unshift(t)
        },
        prefilter: function (e, t) {
            t ? Wn.unshift(e) : Wn.push(e)
        }
    }), v.Tween = Gn, Gn.prototype = {
        constructor: Gn,
        init: function (e, t, n, r, i, s) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = s || (v.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var e = Gn.propHooks[this.prop];
            return e && e.get ? e.get(this) : Gn.propHooks._default.get(this)
        },
        run: function (e) {
            var t, n = Gn.propHooks[this.prop];
            return this.pos = t = v.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration), this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Gn.propHooks._default.set(this), this
        }
    }, Gn.prototype.init.prototype = Gn.prototype, Gn.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return e.elem[e.prop] == null || !! e.elem.style && e.elem.style[e.prop] != null ? (t = v.css(e.elem, e.prop, !1, ""), !t || t === "auto" ? 0 : t) : e.elem[e.prop]
            },
            set: function (e) {
                v.fx.step[e.prop] ? v.fx.step[e.prop](e) : e.elem.style && (e.elem.style[v.cssProps[e.prop]] != null || v.cssHooks[e.prop]) ? v.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, Gn.propHooks.scrollTop = Gn.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, v.each(["toggle", "show", "hide"], function (e, t) {
        var n = v.fn[t];
        v.fn[t] = function (r, i, s) {
            return r == null || typeof r == "boolean" || !e && v.isFunction(r) && v.isFunction(i) ? n.apply(this, arguments) : this.animate(Yn(t, !0), r, i, s)
        }
    }), v.fn.extend({
        fadeTo: function (e, t, n, r) {
            return this.filter(Qt)
                .css("opacity", 0)
                .show()
                .end()
                .animate({
                    opacity: t
                }, e, n, r)
        },
        animate: function (e, t, n, r) {
            var i = v.isEmptyObject(e),
                s = v.speed(t, n, r),
                o = function () {
                    var t = Jn(this, v.extend({}, e), s);
                    i && t.stop(!0)
                };
            return i || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
        },
        stop: function (e, n, r) {
            var i = function (e) {
                var t = e.stop;
                delete e.stop, t(r)
            };
            return typeof e != "string" && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                var t = !0,
                    n = e != null && e + "queueHooks",
                    s = v.timers,
                    o = v._data(this);
                if(n) o[n] && o[n].stop && i(o[n]);
                else
                    for(n in o) o[n] && o[n].stop && zn.test(n) && i(o[n]);
                for(n = s.length; n--;) s[n].elem === this && (e == null || s[n].queue === e) && (s[n].anim.stop(r), t = !1, s.splice(n, 1));
                (t || !r) && v.dequeue(this, e)
            })
        }
    }), v.each({
        slideDown: Yn("show"),
        slideUp: Yn("hide"),
        slideToggle: Yn("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (e, t) {
        v.fn[e] = function (e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), v.speed = function (e, t, n) {
        var r = e && typeof e == "object" ? v.extend({}, e) : {
            complete: n || !n && t || v.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !v.isFunction(t) && t
        };
        r.duration = v.fx.off ? 0 : typeof r.duration == "number" ? r.duration : r.duration in v.fx.speeds ? v.fx.speeds[r.duration] : v.fx.speeds._default;
        if(r.queue == null || r.queue === !0) r.queue = "fx";
        return r.old = r.complete, r.complete = function () {
            v.isFunction(r.old) && r.old.call(this), r.queue && v.dequeue(this, r.queue)
        }, r
    }, v.easing = {
        linear: function (e) {
            return e
        },
        swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, v.timers = [], v.fx = Gn.prototype.init, v.fx.tick = function () {
        var e, t = v.timers,
            n = 0;
        for(; n < t.length; n++) e = t[n], !e() && t[n] === e && t.splice(n--, 1);
        t.length || v.fx.stop()
    }, v.fx.timer = function (e) {
        e() && v.timers.push(e) && !qn && (qn = setInterval(v.fx.tick, v.fx.interval))
    }, v.fx.interval = 13, v.fx.stop = function () {
        clearInterval(qn), qn = null
    }, v.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, v.fx.step = {}, v.expr && v.expr.filters && (v.expr.filters.animated = function (e) {
        return v.grep(v.timers, function (t) {
            return e === t.elem
        })
            .length
    });
    var Zn = /^(?:body|html)$/i;
    v.fn.offset = function (e) {
        if(arguments.length) return e === t ? this : this.each(function (t) {
            v.offset.setOffset(this, e, t)
        });
        var n, r, i, s, o, u, a, f, l, c, h = this[0],
            p = h && h.ownerDocument;
        if(!p) return;
        return(i = p.body) === h ? v.offset.bodyOffset(h) : (r = p.documentElement, v.contains(r, h) ? (n = h.getBoundingClientRect(), s = er(p), o = r.clientTop || i.clientTop || 0, u = r.clientLeft || i.clientLeft || 0, a = s.pageYOffset || r.scrollTop, f = s.pageXOffset || r.scrollLeft, l = n.top + a - o, c = n.left + f - u, {
            top: l,
            left: c
        }) : {
            top: 0,
            left: 0
        })
    }, v.offset = {
        bodyOffset: function (e) {
            var t = e.offsetTop,
                n = e.offsetLeft;
            return v.support.doesNotIncludeMarginInBodyOffset && (t += parseFloat(v.css(e, "marginTop")) || 0, n += parseFloat(v.css(e, "marginLeft")) || 0), {
                top: t,
                left: n
            }
        },
        setOffset: function (e, t, n) {
            var r = v.css(e, "position");
            r === "static" && (e.style.position = "relative");
            var i = v(e),
                s = i.offset(),
                o = v.css(e, "top"),
                u = v.css(e, "left"),
                a = (r === "absolute" || r === "fixed") && v.inArray("auto", [o, u]) > -1,
                f = {}, l = {}, c, h;
            a ? (l = i.position(), c = l.top, h = l.left) : (c = parseFloat(o) || 0, h = parseFloat(u) || 0), v.isFunction(t) && (t = t.call(e, n, s)), t.top != null && (f.top = t.top - s.top + c), t.left != null && (f.left = t.left - s.left + h), "using" in t ? t.using.call(e, f) : i.css(f)
        }
    }, v.fn.extend({
        position: function () {
            if(!this[0]) return;
            var e = this[0],
                t = this.offsetParent(),
                n = this.offset(),
                r = Zn.test(t[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : t.offset();
            return n.top -= parseFloat(v.css(e, "marginTop")) || 0, n.left -= parseFloat(v.css(e, "marginLeft")) || 0, r.top += parseFloat(v.css(t[0], "borderTopWidth")) || 0, r.left += parseFloat(v.css(t[0], "borderLeftWidth")) || 0, {
                top: n.top - r.top,
                left: n.left - r.left
            }
        },
        offsetParent: function () {
            return this.map(function () {
                var e = this.offsetParent || i.body;
                while(e && !Zn.test(e.nodeName) && v.css(e, "position") === "static") e = e.offsetParent;
                return e || i.body
            })
        }
    }), v.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (e, n) {
        var r = /Y/.test(n);
        v.fn[e] = function (i) {
            return v.access(this, function (e, i, s) {
                var o = er(e);
                if(s === t) return o ? n in o ? o[n] : o.document.documentElement[i] : e[i];
                o ? o.scrollTo(r ? v(o)
                    .scrollLeft() : s, r ? s : v(o)
                    .scrollTop()) : e[i] = s
            }, e, i, arguments.length, null)
        }
    }), v.each({
        Height: "height",
        Width: "width"
    }, function (e, n) {
        v.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        }, function (r, i) {
            v.fn[i] = function (i, s) {
                var o = arguments.length && (r || typeof i != "boolean"),
                    u = r || (i === !0 || s === !0 ? "margin" : "border");
                return v.access(this, function (n, r, i) {
                    var s;
                    return v.isWindow(n) ? n.document.documentElement["client" + e] : n.nodeType === 9 ? (s = n.documentElement, Math.max(n.body["scroll" + e], s["scroll" + e], n.body["offset" + e], s["offset" + e], s["client" + e])) : i === t ? v.css(n, r, i, u) : v.style(n, r, i, u)
                }, n, o ? i : t, o)
            }
        })
    }), e.jQuery = e.$ = v, typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function () {
        return v
    })
})(window),
function (e, t) {
    "$:nomunge";

    function N(e) {
        return typeof e == "string"
    }

    function C(e) {
        var t = r.call(arguments, 1);
        return function () {
            return e.apply(this, t.concat(r.call(arguments)))
        }
    }

    function k(e) {
        return e.replace(/^[^#]*#?(.*)$/, "$1")
    }

    function L(e) {
        return e.replace(/(?:^[^?#]*\?([^#]*).*$)?.*/, "$1")
    }

    function A(r, o, a, f, l) {
        var c, h, p, d, g;
        return f !== n ? (p = a.match(r ? /^([^#]*)\#?(.*)$/ : /^([^#?]*)\??([^#]*)(#?.*)/), g = p[3] || "", l === 2 && N(f) ? h = f.replace(r ? S : E, "") : (d = u(p[2]), f = N(f) ? u[r ? m : v](f) : f, h = l === 2 ? f : l === 1 ? e.extend({}, f, d) : e.extend({}, d, f), h = s(h), r && (h = h.replace(x, i))), c = p[1] + (r ? "#" : h || !p[1] ? "?" : "") + h + g) : c = o(a !== n ? a : t[y][b]), c
    }

    function O(e, t, r) {
        return t === n || typeof t == "boolean" ? (r = t, t = s[e ? m : v]()) : t = N(t) ? t.replace(e ? S : E, "") : t, u(t, r)
    }

    function M(t, r, i, o) {
        return !N(i) && typeof i != "object" && (o = i, i = r, r = n), this.each(function () {
            var n = e(this),
                u = r || h()[(this.nodeName || "")
                    .toLowerCase()] || "",
                a = u && n.attr(u) || "";
            n.attr(u, s[t](a, i, o))
        })
    }
    var n, r = Array.prototype.slice,
        i = decodeURIComponent,
        s = e.param,
        o, u, a, f = e.bbq = e.bbq || {}, l, c, h, p = e.event.special,
        d = "hashchange",
        v = "querystring",
        m = "fragment",
        g = "elemUrlAttr",
        y = "location",
        b = "href",
        w = "src",
        E = /^.*\?|#.*$/g,
        S = /^.*\#/,
        x, T = {};
    s[v] = C(A, 0, L), s[m] = o = C(A, 1, k), o.noEscape = function (t) {
        t = t || "";
        var n = e.map(t.split(""), encodeURIComponent);
        x = new RegExp(n.join("|"), "g")
    }, o.noEscape(",/"), e.deparam = u = function (t, r) {
        var s = {}, o = {
                "true": !0,
                "false": !1,
                "null": null
            };
        return e.each(t.replace(/\+/g, " ")
            .split("&"), function (t, u) {
                var a = u.split("="),
                    f = i(a[0]),
                    l, c = s,
                    h = 0,
                    p = f.split("]["),
                    d = p.length - 1;
                /\[/.test(p[0]) && /\]$/.test(p[d]) ? (p[d] = p[d].replace(/\]$/, ""), p = p.shift()
                    .split("[")
                    .concat(p), d = p.length - 1) : d = 0;
                if(a.length === 2) {
                    l = i(a[1]), r && (l = l && !isNaN(l) ? +l : l === "undefined" ? n : o[l] !== n ? o[l] : l);
                    if(d)
                        for(; h <= d; h++) f = p[h] === "" ? c.length : p[h], c = c[f] = h < d ? c[f] || (p[h + 1] && isNaN(p[h + 1]) ? {} : []) : l;
                    else e.isArray(s[f]) ? s[f].push(l) : s[f] !== n ? s[f] = [s[f], l] : s[f] = l
                } else f && (s[f] = r ? n : "")
            }), s
    }, u[v] = C(O, 0), u[m] = a = C(O, 1), e[g] || (e[g] = function (t) {
        return e.extend(T, t)
    })({
        a: b,
        base: b,
        iframe: w,
        img: w,
        input: w,
        form: "action",
        link: b,
        script: w
    }), h = e[g], e.fn[v] = C(M, v), e.fn[m] = C(M, m), f.pushState = l = function (e, r) {
        N(e) && /^#/.test(e) && r === n && (r = 2);
        var i = e !== n,
            s = o(t[y][b], i ? e : {}, i ? r : 2);
        t[y][b] = s + (/#/.test(s) ? "" : "#")
    }, f.getState = c = function (e, t) {
        return e === n || typeof e == "boolean" ? a(e) : a(t)[e]
    }, f.removeState = function (t) {
        var r = {};
        t !== n && (r = c(), e.each(e.isArray(t) ? t : arguments, function (e, t) {
            delete r[t]
        })), l(r, 2)
    }, p[d] = e.extend(p[d], {
        add: function (t) {
            function i(e) {
                var t = e[m] = o();
                e.getState = function (e, r) {
                    return e === n || typeof e == "boolean" ? u(t, e) : u(t, r)[e]
                }, r.apply(this, arguments)
            }
            var r;
            if(e.isFunction(t)) return r = t, i;
            r = t.handler, t.handler = i
        }
    })
}(jQuery, this),
function (e, t, n) {
    "$:nomunge";

    function h(e) {
        return e = e || t[s][u], e.replace(/^[^#]*#?(.*)$/, "$1")
    }
    var r, i = e.event.special,
        s = "location",
        o = "hashchange",
        u = "href",
        a = e.browser,
        f = document.documentMode,
        l = a.msie && (f === n || f < 8),
        c = "on" + o in t && !l;
    e[o + "Delay"] = 100, i[o] = e.extend(i[o], {
        setup: function () {
            if(c) return !1;
            e(r.start)
        },
        teardown: function () {
            if(c) return !1;
            e(r.stop)
        }
    }), r = function () {
        function c() {
            a = f = function (e) {
                return e
            }, l && (i = e('<iframe src="javascript:0"/>')
                .hide()
                .insertAfter("body")[0].contentWindow, f = function () {
                    return h(i.document[s][u])
                }, a = function (e, t) {
                    if(e !== t) {
                        var n = i.document;
                        n.open()
                            .close(), n[s].hash = "#" + e
                    }
                }, a(h()))
        }
        var n = {}, r, i, a, f;
        return n.start = function () {
            if(r) return;
            var n = h();
            a || c(),
            function i() {
                var l = h(),
                    c = f(n);
                l !== n ? (a(n = l, c), e(t)
                    .trigger(o)) : c !== n && (t[s][u] = t[s][u].replace(/#.*/, "") + "#" + c), r = setTimeout(i, e[o + "Delay"])
            }()
        }, n.stop = function () {
            i || (r && clearTimeout(r), r = 0)
        }, n
    }()
}(jQuery, this),
function (e) {
    e.fn.labelize = function (t) {
        var n = {
            animate: !0,
            fadeSpeed: 150,
            fadedOpacity: .35
        };
        e.extend(n, t);
        var r = function (e, t, r) {
            r = r && n.animate, r ? e.stop()
                .fadeTo(n.fadeSpeed, t) : e.css("opacity", t)
        };
        return e(this)
            .each(function () {
                var t = e(this),
                    i = e("label[for=" + t.attr("id") + "]"),
                    s = function (e, s) {
                        s = s === !1 ? !1 : !0;
                        var o = t.val()
                            .length > 0,
                            u = e && e.type === "focus" || t.is(":focus");
                        o ? r(i, 0, s) : u ? r(i, n.fadedOpacity, s) : r(i, 1, s)
                    };
                t.bind("focus blur keyup change", s), s(null, !1)
            })
    }
}(jQuery), window.ontouchstart && function () {
    var e = 10,
        t = {
            start: "touchstart",
            move: "touchmove",
            end: "touchend"
        };
    $.event.special.click = {
        add: function (e) {
            var r = e.handler;
            e.handler = function (e, t) {
                if(!t) return !1;
                r.call(this, e)
            }, e.startHandle = function () {
                n.apply(this, arguments)
            }, $(this)
                .on(t.start, e.selector, e.startHandle)
        },
        remove: function (e) {
            $(this)
                .off(t.start, e.selector, e.startHandle)
        }
    };
    var n = function (n) {
        var r = n.originalEvent.touches[0].screenX,
            i = n.originalEvent.touches[0].screenY,
            s = function (t) {
                var n = Math.abs(t.originalEvent.touches[0].screenX - r) > e,
                    s = Math.abs(t.originalEvent.touches[0].screenY - i) > e;
                (n || s) && u()
            }, o = function () {
                u(), $(this)
                    .trigger("click", !0)
            }, u = $.proxy(function () {
                $(this)
                    .off(t.move, $.proxy(s, this)), $(this)
                    .off(t.end, $.proxy(o, this))
            }, this);
        $(this)
            .on(t.move, $.proxy(s, this)), $(this)
            .on(t.end, $.proxy(o, this))
    }
}(), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function (e, t, n, r, i) {
        return jQuery.easing[jQuery.easing.def](e, t, n, r, i)
    },
    easeInQuad: function (e, t, n, r, i) {
        return r * (t /= i) * t + n
    },
    easeOutQuad: function (e, t, n, r, i) {
        return -r * (t /= i) * (t - 2) + n
    },
    easeInOutQuad: function (e, t, n, r, i) {
        return(t /= i / 2) < 1 ? r / 2 * t * t + n : -r / 2 * (--t * (t - 2) - 1) + n
    },
    easeInCubic: function (e, t, n, r, i) {
        return r * (t /= i) * t * t + n
    },
    easeOutCubic: function (e, t, n, r, i) {
        return r * ((t = t / i - 1) * t * t + 1) + n
    },
    easeInOutCubic: function (e, t, n, r, i) {
        return(t /= i / 2) < 1 ? r / 2 * t * t * t + n : r / 2 * ((t -= 2) * t * t + 2) + n
    },
    easeInQuart: function (e, t, n, r, i) {
        return r * (t /= i) * t * t * t + n
    },
    easeOutQuart: function (e, t, n, r, i) {
        return -r * ((t = t / i - 1) * t * t * t - 1) + n
    },
    easeInOutQuart: function (e, t, n, r, i) {
        return(t /= i / 2) < 1 ? r / 2 * t * t * t * t + n : -r / 2 * ((t -= 2) * t * t * t - 2) + n
    },
    easeInQuint: function (e, t, n, r, i) {
        return r * (t /= i) * t * t * t * t + n
    },
    easeOutQuint: function (e, t, n, r, i) {
        return r * ((t = t / i - 1) * t * t * t * t + 1) + n
    },
    easeInOutQuint: function (e, t, n, r, i) {
        return(t /= i / 2) < 1 ? r / 2 * t * t * t * t * t + n : r / 2 * ((t -= 2) * t * t * t * t + 2) + n
    },
    easeInSine: function (e, t, n, r, i) {
        return -r * Math.cos(t / i * (Math.PI / 2)) + r + n
    },
    easeOutSine: function (e, t, n, r, i) {
        return r * Math.sin(t / i * (Math.PI / 2)) + n
    },
    easeInOutSine: function (e, t, n, r, i) {
        return -r / 2 * (Math.cos(Math.PI * t / i) - 1) + n
    },
    easeInExpo: function (e, t, n, r, i) {
        return t == 0 ? n : r * Math.pow(2, 10 * (t / i - 1)) + n
    },
    easeOutExpo: function (e, t, n, r, i) {
        return t == i ? n + r : r * (-Math.pow(2, -10 * t / i) + 1) + n
    },
    easeInOutExpo: function (e, t, n, r, i) {
        return t == 0 ? n : t == i ? n + r : (t /= i / 2) < 1 ? r / 2 * Math.pow(2, 10 * (t - 1)) + n : r / 2 * (-Math.pow(2, -10 * --t) + 2) + n
    },
    easeInCirc: function (e, t, n, r, i) {
        return -r * (Math.sqrt(1 - (t /= i) * t) - 1) + n
    },
    easeOutCirc: function (e, t, n, r, i) {
        return r * Math.sqrt(1 - (t = t / i - 1) * t) + n
    },
    easeInOutCirc: function (e, t, n, r, i) {
        return(t /= i / 2) < 1 ? -r / 2 * (Math.sqrt(1 - t * t) - 1) + n : r / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n
    },
    easeInElastic: function (e, t, n, r, i) {
        var s = 1.70158,
            o = 0,
            u = r;
        if(t == 0) return n;
        if((t /= i) == 1) return n + r;
        o || (o = i * .3);
        if(u < Math.abs(r)) {
            u = r;
            var s = o / 4
        } else var s = o / (2 * Math.PI) * Math.asin(r / u);
        return -(u * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o)) + n
    },
    easeOutElastic: function (e, t, n, r, i) {
        var s = 1.70158,
            o = 0,
            u = r;
        if(t == 0) return n;
        if((t /= i) == 1) return n + r;
        o || (o = i * .3);
        if(u < Math.abs(r)) {
            u = r;
            var s = o / 4
        } else var s = o / (2 * Math.PI) * Math.asin(r / u);
        return u * Math.pow(2, -10 * t) * Math.sin((t * i - s) * 2 * Math.PI / o) + r + n
    },
    easeInOutElastic: function (e, t, n, r, i) {
        var s = 1.70158,
            o = 0,
            u = r;
        if(t == 0) return n;
        if((t /= i / 2) == 2) return n + r;
        o || (o = i * .3 * 1.5);
        if(u < Math.abs(r)) {
            u = r;
            var s = o / 4
        } else var s = o / (2 * Math.PI) * Math.asin(r / u);
        return t < 1 ? -0.5 * u * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o) + n : u * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o) * .5 + r + n
    },
    easeInBack: function (e, t, n, r, i, s) {
        return s == undefined && (s = 1.70158), r * (t /= i) * t * ((s + 1) * t - s) + n
    },
    easeOutBack: function (e, t, n, r, i, s) {
        return s == undefined && (s = 1.70158), r * ((t = t / i - 1) * t * ((s + 1) * t + s) + 1) + n
    },
    easeInOutBack: function (e, t, n, r, i, s) {
        return s == undefined && (s = 1.70158), (t /= i / 2) < 1 ? r / 2 * t * t * (((s *= 1.525) + 1) * t - s) + n : r / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + n
    },
    easeInBounce: function (e, t, n, r, i) {
        return r - jQuery.easing.easeOutBounce(e, i - t, 0, r, i) + n
    },
    easeOutBounce: function (e, t, n, r, i) {
        return(t /= i) < 1 / 2.75 ? r * 7.5625 * t * t + n : t < 2 / 2.75 ? r * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n : t < 2.5 / 2.75 ? r * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n : r * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n
    },
    easeInOutBounce: function (e, t, n, r, i) {
        return t < i / 2 ? jQuery.easing.easeInBounce(e, t * 2, 0, r, i) * .5 + n : jQuery.easing.easeOutBounce(e, t * 2 - i, 0, r, i) * .5 + r * .5 + n
    }
}),
function (e) {
    function r(t) {
        var n = t || window.event,
            r = [].slice.call(arguments, 1),
            i = 0,
            s = !0,
            o = 0,
            u = 0;
        return t = e.event.fix(n), t.type = "mousewheel", n.wheelDelta && (i = n.wheelDelta / 120), n.detail && (i = -n.detail / 3), u = i, n.axis !== undefined && n.axis === n.HORIZONTAL_AXIS && (u = 0, o = -1 * i), n.wheelDeltaY !== undefined && (u = n.wheelDeltaY / 120), n.wheelDeltaX !== undefined && (o = -1 * n.wheelDeltaX / 120), r.unshift(t, i, o, u), (e.event.dispatch || e.event.handle)
            .apply(this, r)
    }
    var t = ["DOMMouseScroll", "mousewheel"];
    if(e.event.fixHooks)
        for(var n = t.length; n;) e.event.fixHooks[t[--n]] = e.event.mouseHooks;
    e.event.special.mousewheel = {
        setup: function () {
            if(this.addEventListener)
                for(var e = t.length; e;) this.addEventListener(t[--e], r, !1);
            else this.onmousewheel = r
        },
        teardown: function () {
            if(this.removeEventListener)
                for(var e = t.length; e;) this.removeEventListener(t[--e], r, !1);
            else this.onmousewheel = null
        }
    }, e.fn.extend({
        mousewheel: function (e) {
            return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
        },
        unmousewheel: function (e) {
            return this.unbind("mousewheel", e)
        }
    })
}(jQuery),
function (e, t, n) {
    "use strict";
    var r = e.document,
        i = e.Modernizr,
        s = function (e) {
            return e.charAt(0)
                .toUpperCase() + e.slice(1)
        }, o = "Moz Webkit O Ms".split(" "),
        u = function (e) {
            var t = r.documentElement.style,
                n;
            if(typeof t[e] == "string") return e;
            e = s(e);
            for(var i = 0, u = o.length; i < u; i++) {
                n = o[i] + e;
                if(typeof t[n] == "string") return n
            }
        }, a = u("transform"),
        f = u("transitionProperty"),
        l = {
            csstransforms: function () {
                return !!a
            },
            csstransforms3d: function () {
                var e = !! u("perspective");
                if(e) {
                    var n = " -o- -moz- -ms- -webkit- -khtml- ".split(" "),
                        r = "@media (" + n.join("transform-3d),(") + "modernizr)",
                        i = t("<style>" + r + "{#modernizr{height:3px}}" + "</style>")
                            .appendTo("head"),
                        s = t('<div id="modernizr" />')
                            .appendTo("html");
                    e = s.height() === 3, s.remove(), i.remove()
                }
                return e
            },
            csstransitions: function () {
                return !!f
            }
        }, c;
    if(i)
        for(c in l) i.hasOwnProperty(c) || i.addTest(c, l[c]);
    else {
        i = e.Modernizr = {
            _version: "1.6ish: miniModernizr for Isotope"
        };
        var h = " ",
            p;
        for(c in l) p = l[c](), i[c] = p, h += " " + (p ? "" : "no-") + c;
        t("html")
            .addClass(h)
    } if(i.csstransforms) {
        var d = i.csstransforms3d ? {
            translate: function (e) {
                return "translate3d(" + e[0] + "px, " + e[1] + "px, 0) "
            },
            scale: function (e) {
                return "scale3d(" + e + ", " + e + ", 1) "
            }
        } : {
            translate: function (e) {
                return "translate(" + e[0] + "px, " + e[1] + "px) "
            },
            scale: function (e) {
                return "scale(" + e + ") "
            }
        }, v = function (e, n, r) {
                var i = t.data(e, "isoTransform") || {}, s = {}, o, u = {}, f;
                s[n] = r, t.extend(i, s);
                for(o in i) f = i[o], u[o] = d[o](f);
                var l = u.translate || "",
                    c = u.scale || "",
                    h = l + c;
                t.data(e, "isoTransform", i), e.style[a] = h
            };
        t.cssNumber.scale = !0, t.cssHooks.scale = {
            set: function (e, t) {
                v(e, "scale", t)
            },
            get: function (e, n) {
                var r = t.data(e, "isoTransform");
                return r && r.scale ? r.scale : 1
            }
        }, t.fx.step.scale = function (e) {
            t.cssHooks.scale.set(e.elem, e.now + e.unit)
        }, t.cssNumber.translate = !0, t.cssHooks.translate = {
            set: function (e, t) {
                v(e, "translate", t)
            },
            get: function (e, n) {
                var r = t.data(e, "isoTransform");
                return r && r.translate ? r.translate : [0, 0]
            }
        }
    }
    var m, g;
    i.csstransitions && (m = {
        WebkitTransitionProperty: "webkitTransitionEnd",
        MozTransitionProperty: "transitionend",
        OTransitionProperty: "oTransitionEnd",
        transitionProperty: "transitionEnd"
    }[f], g = u("transitionDuration"));
    var y = t.event,
        b;
    y.special.smartresize = {
        setup: function () {
            t(this)
                .bind("resize", y.special.smartresize.handler)
        },
        teardown: function () {
            t(this)
                .unbind("resize", y.special.smartresize.handler)
        },
        handler: function (e, t) {
            var n = this,
                r = arguments;
            e.type = "smartresize", b && clearTimeout(b), b = setTimeout(function () {
                jQuery.event.handle.apply(n, r)
            }, t === "execAsap" ? 0 : 100)
        }
    }, t.fn.smartresize = function (e) {
        return e ? this.bind("smartresize", e) : this.trigger("smartresize", ["execAsap"])
    }, t.Isotope = function (e, n, r) {
        this.element = t(n), this._create(e), this._init(r)
    };
    var w = ["width", "height"],
        E = t(e);
    t.Isotope.settings = {
        resizable: !0,
        layoutMode: "masonry",
        containerClass: "isotope",
        itemClass: "isotope-item",
        hiddenClass: "isotope-hidden",
        hiddenStyle: {
            opacity: 0,
            scale: .001
        },
        visibleStyle: {
            opacity: 1,
            scale: 1
        },
        containerStyle: {
            position: "relative",
            overflow: "hidden"
        },
        animationEngine: "best-available",
        animationOptions: {
            queue: !1,
            duration: 800
        },
        sortBy: "original-order",
        sortAscending: !0,
        resizesContainer: !0,
        transformsEnabled: !t.browser.opera,
        itemPositionDataEnabled: !1
    }, t.Isotope.prototype = {
        _create: function (e) {
            this.options = t.extend({}, t.Isotope.settings, e), this.styleQueue = [], this.elemCount = 0;
            var n = this.element[0].style;
            this.originalStyle = {};
            var r = w.slice(0);
            for(var i in this.options.containerStyle) r.push(i);
            for(var s = 0, o = r.length; s < o; s++) i = r[s], this.originalStyle[i] = n[i] || "";
            this.element.css(this.options.containerStyle), this._updateAnimationEngine(), this._updateUsingTransforms();
            var u = {
                "original-order": function (e, t) {
                    return t.elemCount++, t.elemCount
                },
                random: function () {
                    return Math.random()
                }
            };
            this.options.getSortData = t.extend(this.options.getSortData, u), this.reloadItems(), this.offset = {
                left: parseInt(this.element.css("padding-left") || 0, 10),
                top: parseInt(this.element.css("padding-top") || 0, 10)
            };
            var a = this;
            setTimeout(function () {
                a.element.addClass(a.options.containerClass)
            }, 0), this.options.resizable && E.bind("smartresize.isotope", function () {
                a.resize()
            }), this.element.delegate("." + this.options.hiddenClass, "click", function () {
                return !1
            })
        },
        _getAtoms: function (e) {
            var t = this.options.itemSelector,
                n = t ? e.filter(t)
                    .add(e.find(t)) : e,
                r = {
                    position: "absolute"
                };
            return this.usingTransforms && (r.left = 0, r.top = 0), n.css(r)
                .addClass(this.options.itemClass), this.updateSortData(n, !0), n
        },
        _init: function (e) {
            this.$filteredAtoms = this._filter(this.$allAtoms), this._sort(), this.reLayout(e)
        },
        option: function (e) {
            if(t.isPlainObject(e)) {
                this.options = t.extend(!0, this.options, e);
                var n;
                for(var r in e) n = "_update" + s(r), this[n] && this[n]()
            }
        },
        _updateAnimationEngine: function () {
            var e = this.options.animationEngine.toLowerCase()
                .replace(/[ _\-]/g, ""),
                t;
            switch(e) {
            case "css":
            case "none":
                t = !1;
                break;
            case "jquery":
                t = !0;
                break;
            default:
                t = !i.csstransitions
            }
            this.isUsingJQueryAnimation = t, this._updateUsingTransforms()
        },
        _updateTransformsEnabled: function () {
            this._updateUsingTransforms()
        },
        _updateUsingTransforms: function () {
            var e = this.usingTransforms = this.options.transformsEnabled && i.csstransforms && i.csstransitions && !this.isUsingJQueryAnimation;
            e || (delete this.options.hiddenStyle.scale, delete this.options.visibleStyle.scale), this.getPositionStyles = e ? this._translate : this._positionAbs
        },
        _filter: function (e) {
            var t = this.options.filter === "" ? "*" : this.options.filter;
            if(!t) return e;
            var n = this.options.hiddenClass,
                r = "." + n,
                i = e.filter(r),
                s = i;
            if(t !== "*") {
                s = i.filter(t);
                var o = e.not(r)
                    .not(t)
                    .addClass(n);
                this.styleQueue.push({
                    $el: o,
                    style: this.options.hiddenStyle
                })
            }
            return this.styleQueue.push({
                $el: s,
                style: this.options.visibleStyle
            }), s.removeClass(n), e.filter(t)
        },
        updateSortData: function (e, n) {
            var r = this,
                i = this.options.getSortData,
                s, o;
            e.each(function () {
                s = t(this), o = {};
                for(var e in i)!n && e === "original-order" ? o[e] = t.data(this, "isotope-sort-data")[e] : o[e] = i[e](s, r);
                t.data(this, "isotope-sort-data", o)
            })
        },
        _sort: function () {
            var e = this.options.sortBy,
                t = this._getSorter,
                n = this.options.sortAscending ? 1 : -1,
                r = function (r, i) {
                    var s = t(r, e),
                        o = t(i, e);
                    return s === o && e !== "original-order" && (s = t(r, "original-order"), o = t(i, "original-order")), (s > o ? 1 : s < o ? -1 : 0) * n
                };
            this.$filteredAtoms.sort(r)
        },
        _getSorter: function (e, n) {
            return t.data(e, "isotope-sort-data")[n]
        },
        _translate: function (e, t) {
            return {
                translate: [e, t]
            }
        },
        _positionAbs: function (e, t) {
            return {
                left: e,
                top: t
            }
        },
        _pushPosition: function (e, t, n) {
            t = Math.round(t + this.offset.left), n = Math.round(n + this.offset.top);
            var r = this.getPositionStyles(t, n);
            this.styleQueue.push({
                $el: e,
                style: r
            }), this.options.itemPositionDataEnabled && e.data("isotope-item-position", {
                x: t,
                y: n
            })
        },
        layout: function (e, t) {
            var n = this.options.layoutMode;
            this["_" + n + "Layout"](e);
            if(this.options.resizesContainer) {
                var r = this["_" + n + "GetContainerSize"]();
                this.styleQueue.push({
                    $el: this.element,
                    style: r
                })
            }
            this._processStyleQueue(e, t), this.isLaidOut = !0
        },
        _processStyleQueue: function (e, n) {
            var r = this.isLaidOut ? this.isUsingJQueryAnimation ? "animate" : "css" : "css",
                s = this.options.animationOptions,
                o = this.options.onLayout,
                u, a, f, l;
            a = function (e, t) {
                t.$el[r](t.style, s)
            };
            if(this._isInserting && this.isUsingJQueryAnimation) a = function (e, t) {
                u = t.$el.hasClass("no-transition") ? "css" : r, t.$el[u](t.style, s)
            };
            else if(n || o || s.complete) {
                var c = !1,
                    h = [n, o, s.complete],
                    p = this;
                f = !0, l = function () {
                    if(c) return;
                    var t;
                    for(var n = 0, r = h.length; n < r; n++) t = h[n], typeof t == "function" && t.call(p.element, e, p);
                    c = !0
                };
                if(this.isUsingJQueryAnimation && r === "animate") s.complete = l, f = !1;
                else if(i.csstransitions) {
                    var d = 0,
                        v = this.styleQueue[0],
                        y = v && v.$el,
                        b;
                    while(!y || !y.length) {
                        b = this.styleQueue[d++];
                        if(!b) return;
                        y = b.$el
                    }
                    var w = parseFloat(getComputedStyle(y[0])[g]);
                    w > 0 && (a = function (e, t) {
                        t.$el[r](t.style, s)
                            .one(m, l)
                    }, f = !1)
                }
            }
            t.each(this.styleQueue, a), f && l(), this.styleQueue = []
        },
        resize: function () {
            this["_" + this.options.layoutMode + "ResizeChanged"]() && this.reLayout()
        },
        reLayout: function (e) {
            this["_" + this.options.layoutMode + "Reset"](), this.layout(this.$filteredAtoms, e)
        },
        addItems: function (e, t) {
            var n = this._getAtoms(e);
            this.$allAtoms = this.$allAtoms.add(n), t && t(n)
        },
        insert: function (e, t) {
            this.element.append(e);
            var n = this;
            this.addItems(e, function (e) {
                var r = n._filter(e);
                n._addHideAppended(r), n._sort(), n.reLayout(), n._revealAppended(r, t)
            })
        },
        appended: function (e, t) {
            var n = this;
            this.addItems(e, function (e) {
                n._addHideAppended(e), n.layout(e), n._revealAppended(e, t)
            })
        },
        _addHideAppended: function (e) {
            this.$filteredAtoms = this.$filteredAtoms.add(e), e.addClass("no-transition"), this._isInserting = !0, this.styleQueue.push({
                $el: e,
                style: this.options.hiddenStyle
            })
        },
        _revealAppended: function (e, t) {
            var n = this;
            setTimeout(function () {
                e.removeClass("no-transition"), n.styleQueue.push({
                    $el: e,
                    style: n.options.visibleStyle
                }), n._isInserting = !1, n._processStyleQueue(e, t)
            }, 10)
        },
        reloadItems: function () {
            this.$allAtoms = this._getAtoms(this.element.children())
        },
        remove: function (e, t) {
            var n = this,
                r = function () {
                    n.$allAtoms = n.$allAtoms.not(e), e.remove(), t && t.call(n.element)
                };
            e.filter(":not(." + this.options.hiddenClass + ")")
                .length ? (this.styleQueue.push({
                    $el: e,
                    style: this.options.hiddenStyle
                }), this.$filteredAtoms = this.$filteredAtoms.not(e), this._sort(), this.reLayout(r)) : r()
        },
        shuffle: function (e) {
            this.updateSortData(this.$allAtoms), this.options.sortBy = "random", this._sort(), this.reLayout(e)
        },
        destroy: function () {
            var e = this.usingTransforms,
                t = this.options;
            this.$allAtoms.removeClass(t.hiddenClass + " " + t.itemClass)
                .each(function () {
                    var t = this.style;
                    t.position = "", t.top = "", t.left = "", t.opacity = "", e && (t[a] = "")
                });
            var n = this.element[0].style;
            for(var r in this.originalStyle) n[r] = this.originalStyle[r];
            this.element.unbind(".isotope")
                .undelegate("." + t.hiddenClass, "click")
                .removeClass(t.containerClass)
                .removeData("isotope"), E.unbind(".isotope")
        },
        _getSegments: function (e) {
            var t = this.options.layoutMode,
                n = e ? "rowHeight" : "columnWidth",
                r = e ? "height" : "width",
                i = e ? "rows" : "cols",
                o = this.element[r](),
                u, a = this.options[t] && this.options[t][n] || this.$filteredAtoms["outer" + s(r)](!0) || o;
            u = Math.floor(o / a), u = Math.max(u, 1), this[t][i] = u, this[t][n] = a
        },
        _checkIfSegmentsChanged: function (e) {
            var t = this.options.layoutMode,
                n = e ? "rows" : "cols",
                r = this[t][n];
            return this._getSegments(e), this[t][n] !== r
        },
        _masonryReset: function () {
            this.masonry = {}, this._getSegments();
            var e = this.masonry.cols;
            this.masonry.colYs = [];
            while(e--) this.masonry.colYs.push(0)
        },
        _masonryLayout: function (e) {
            var n = this,
                r = n.masonry;
            e.each(function () {
                var e = t(this),
                    i = Math.ceil(e.outerWidth(!0) / r.columnWidth);
                i = Math.min(i, r.cols);
                if(i === 1) n._masonryPlaceBrick(e, r.colYs);
                else {
                    var s = r.cols + 1 - i,
                        o = [],
                        u, a;
                    for(a = 0; a < s; a++) u = r.colYs.slice(a, a + i), o[a] = Math.max.apply(Math, u);
                    n._masonryPlaceBrick(e, o)
                }
            })
        },
        _masonryPlaceBrick: function (e, t) {
            var n = Math.min.apply(Math, t),
                r = 0;
            for(var i = 0, s = t.length; i < s; i++)
                if(t[i] === n) {
                    r = i;
                    break
                }
            var o = this.masonry.columnWidth * r,
                u = n;
            this._pushPosition(e, o, u);
            var a = n + e.outerHeight(!0),
                f = this.masonry.cols + 1 - s;
            for(i = 0; i < f; i++) this.masonry.colYs[r + i] = a
        },
        _masonryGetContainerSize: function () {
            var e = Math.max.apply(Math, this.masonry.colYs);
            return {
                height: e
            }
        },
        _masonryResizeChanged: function () {
            return this._checkIfSegmentsChanged()
        },
        _fitRowsReset: function () {
            this.fitRows = {
                x: 0,
                y: 0,
                height: 0
            }
        },
        _fitRowsLayout: function (e) {
            var n = this,
                r = this.element.width(),
                i = this.fitRows;
            e.each(function () {
                var e = t(this),
                    s = e.outerWidth(!0),
                    o = e.outerHeight(!0);
                i.x !== 0 && s + i.x > r && (i.x = 0, i.y = i.height), n._pushPosition(e, i.x, i.y), i.height = Math.max(i.y + o, i.height), i.x += s
            })
        },
        _fitRowsGetContainerSize: function () {
            return {
                height: this.fitRows.height
            }
        },
        _fitRowsResizeChanged: function () {
            return !0
        },
        _cellsByRowReset: function () {
            this.cellsByRow = {
                index: 0
            }, this._getSegments(), this._getSegments(!0)
        },
        _cellsByRowLayout: function (e) {
            var n = this,
                r = this.cellsByRow;
            e.each(function () {
                var e = t(this),
                    i = r.index % r.cols,
                    s = Math.floor(r.index / r.cols),
                    o = (i + .5) * r.columnWidth - e.outerWidth(!0) / 2,
                    u = (s + .5) * r.rowHeight - e.outerHeight(!0) / 2;
                n._pushPosition(e, o, u), r.index++
            })
        },
        _cellsByRowGetContainerSize: function () {
            return {
                height: Math.ceil(this.$filteredAtoms.length / this.cellsByRow.cols) * this.cellsByRow.rowHeight + this.offset.top
            }
        },
        _cellsByRowResizeChanged: function () {
            return this._checkIfSegmentsChanged()
        },
        _straightDownReset: function () {
            this.straightDown = {
                y: 0
            }
        },
        _straightDownLayout: function (e) {
            var n = this;
            e.each(function (e) {
                var r = t(this);
                n._pushPosition(r, 0, n.straightDown.y), n.straightDown.y += r.outerHeight(!0)
            })
        },
        _straightDownGetContainerSize: function () {
            return {
                height: this.straightDown.y
            }
        },
        _straightDownResizeChanged: function () {
            return !0
        },
        _masonryHorizontalReset: function () {
            this.masonryHorizontal = {}, this._getSegments(!0);
            var e = this.masonryHorizontal.rows;
            this.masonryHorizontal.rowXs = [];
            while(e--) this.masonryHorizontal.rowXs.push(0)
        },
        _masonryHorizontalLayout: function (e) {
            var n = this,
                r = n.masonryHorizontal;
            e.each(function () {
                var e = t(this),
                    i = Math.ceil(e.outerHeight(!0) / r.rowHeight);
                i = Math.min(i, r.rows);
                if(i === 1) n._masonryHorizontalPlaceBrick(e, r.rowXs);
                else {
                    var s = r.rows + 1 - i,
                        o = [],
                        u, a;
                    for(a = 0; a < s; a++) u = r.rowXs.slice(a, a + i), o[a] = Math.max.apply(Math, u);
                    n._masonryHorizontalPlaceBrick(e, o)
                }
            })
        },
        _masonryHorizontalPlaceBrick: function (e, t) {
            var n = Math.min.apply(Math, t),
                r = 0;
            for(var i = 0, s = t.length; i < s; i++)
                if(t[i] === n) {
                    r = i;
                    break
                }
            var o = n,
                u = this.masonryHorizontal.rowHeight * r;
            this._pushPosition(e, o, u);
            var a = n + e.outerWidth(!0),
                f = this.masonryHorizontal.rows + 1 - s;
            for(i = 0; i < f; i++) this.masonryHorizontal.rowXs[r + i] = a
        },
        _masonryHorizontalGetContainerSize: function () {
            var e = Math.max.apply(Math, this.masonryHorizontal.rowXs);
            return {
                width: e
            }
        },
        _masonryHorizontalResizeChanged: function () {
            return this._checkIfSegmentsChanged(!0)
        },
        _fitColumnsReset: function () {
            this.fitColumns = {
                x: 0,
                y: 0,
                width: 0
            }
        },
        _fitColumnsLayout: function (e) {
            var n = this,
                r = this.element.height(),
                i = this.fitColumns;
            e.each(function () {
                var e = t(this),
                    s = e.outerWidth(!0),
                    o = e.outerHeight(!0);
                i.y !== 0 && o + i.y > r && (i.x = i.width, i.y = 0), n._pushPosition(e, i.x, i.y), i.width = Math.max(i.x + s, i.width), i.y += o
            })
        },
        _fitColumnsGetContainerSize: function () {
            return {
                width: this.fitColumns.width
            }
        },
        _fitColumnsResizeChanged: function () {
            return !0
        },
        _cellsByColumnReset: function () {
            this.cellsByColumn = {
                index: 0
            }, this._getSegments(), this._getSegments(!0)
        },
        _cellsByColumnLayout: function (e) {
            var n = this,
                r = this.cellsByColumn;
            e.each(function () {
                var e = t(this),
                    i = Math.floor(r.index / r.rows),
                    s = r.index % r.rows,
                    o = (i + .5) * r.columnWidth - e.outerWidth(!0) / 2,
                    u = (s + .5) * r.rowHeight - e.outerHeight(!0) / 2;
                n._pushPosition(e, o, u), r.index++
            })
        },
        _cellsByColumnGetContainerSize: function () {
            return {
                width: Math.ceil(this.$filteredAtoms.length / this.cellsByColumn.rows) * this.cellsByColumn.columnWidth
            }
        },
        _cellsByColumnResizeChanged: function () {
            return this._checkIfSegmentsChanged(!0)
        },
        _straightAcrossReset: function () {
            this.straightAcross = {
                x: 0
            }
        },
        _straightAcrossLayout: function (e) {
            var n = this;
            e.each(function (e) {
                var r = t(this);
                n._pushPosition(r, n.straightAcross.x, 0), n.straightAcross.x += r.outerWidth(!0)
            })
        },
        _straightAcrossGetContainerSize: function () {
            return {
                width: this.straightAcross.x
            }
        },
        _straightAcrossResizeChanged: function () {
            return !0
        }
    }, t.fn.imagesLoaded = function (e) {
        function n() {
            e.call(i, s)
        }

        function r(e) {
            var i = e.target;
            i.src !== u && t.inArray(i, a) === -1 && (a.push(i), --o <= 0 && (setTimeout(n), s.unbind(".imagesLoaded", r)))
        }
        var i = this,
            s = i.find("img")
                .add(i.filter("img")),
            o = s.length,
            u = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",
            a = [];
        return o || n(), s.bind("load.imagesLoaded error.imagesLoaded", r)
            .each(function () {
                var e = this.src;
                this.src = u, this.src = e
            }), i
    };
    var S = function (t) {
        e.console && e.console.error(t)
    };
    t.fn.isotope = function (e, n) {
        if(typeof e == "string") {
            var r = Array.prototype.slice.call(arguments, 1);
            this.each(function () {
                var n = t.data(this, "isotope");
                if(!n) {
                    S("cannot call methods on isotope prior to initialization; attempted to call method '" + e + "'");
                    return
                }
                if(!t.isFunction(n[e]) || e.charAt(0) === "_") {
                    S("no such method '" + e + "' for isotope instance");
                    return
                }
                n[e].apply(n, r)
            })
        } else this.each(function () {
            var r = t.data(this, "isotope");
            r ? (r.option(e), r._init(n)) : t.data(this, "isotope", new t.Isotope(e, this, n))
        });
        return this
    }
}(window, jQuery), $.Isotope.prototype._getMasonryGutterColumns = function () {
    var e = this.options.masonry && this.options.masonry.gutterWidth || 0;
    containerWidth = this.element.width(), this.masonry.columnWidth = this.options.masonry && this.options.masonry.columnWidth || this.$filteredAtoms.outerWidth(!0) || containerWidth, this.masonry.columnWidth += e, this.masonry.cols = Math.floor((containerWidth + e) / this.masonry.columnWidth), this.masonry.cols = Math.max(this.masonry.cols, 1)
}, $.Isotope.prototype._masonryReset = function () {
    this.masonry = {}, this._getMasonryGutterColumns();
    var e = this.masonry.cols;
    this.masonry.colYs = [];
    while(e--) this.masonry.colYs.push(0)
}, $.Isotope.prototype._masonryResizeChanged = function () {
    var e = this.masonry.cols;
    return this._getMasonryGutterColumns(), this.masonry.cols !== e
},
function () {
    var e = 0,
        t = ["ms", "moz", "webkit", "o"];
    for(var n = 0; n < t.length && !window.requestAnimationFrame; ++n) window.requestAnimationFrame = window[t[n] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[t[n] + "CancelAnimationFrame"] || window[t[n] + "CancelRequestAnimationFrame"];
    window.requestAnimationFrame || (window.requestAnimationFrame = function (t, n) {
        var r = (new Date)
            .getTime(),
            i = Math.max(0, 16 - (r - e)),
            s = window.setTimeout(function () {
                t(r + i)
            }, i);
        return e = r + i, s
    }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function (e) {
        clearTimeout(e)
    })
}(),
function () {
    function C(e, t, n) {
        if(e === t) return e !== 0 || 1 / e == 1 / t;
        if(e == null || t == null) return e === t;
        e._chain && (e = e._wrapped), t._chain && (t = t._wrapped);
        if(e.isEqual && S.isFunction(e.isEqual)) return e.isEqual(t);
        if(t.isEqual && S.isFunction(t.isEqual)) return t.isEqual(e);
        var r = a.call(e);
        if(r != a.call(t)) return !1;
        switch(r) {
        case "[object String]":
            return e == String(t);
        case "[object Number]":
            return e != +e ? t != +t : e == 0 ? 1 / e == 1 / t : e == +t;
        case "[object Date]":
        case "[object Boolean]":
            return +e == +t;
        case "[object RegExp]":
            return e.source == t.source && e.global == t.global && e.multiline == t.multiline && e.ignoreCase == t.ignoreCase
        }
        if(typeof e != "object" || typeof t != "object") return !1;
        var i = n.length;
        while(i--)
            if(n[i] == e) return !0;
        n.push(e);
        var s = 0,
            o = !0;
        if(r == "[object Array]") {
            s = e.length, o = s == t.length;
            if(o)
                while(s--)
                    if(!(o = s in e == s in t && C(e[s], t[s], n))) break
        } else {
            if("constructor" in e != "constructor" in t || e.constructor != t.constructor) return !1;
            for(var u in e)
                if(S.has(e, u)) {
                    s++;
                    if(!(o = S.has(t, u) && C(e[u], t[u], n))) break
                }
            if(o) {
                for(u in t)
                    if(S.has(t, u) && !(s--)) break;
                o = !s
            }
        }
        return n.pop(), o
    }
    var e = this,
        t = e._,
        n = {}, r = Array.prototype,
        i = Object.prototype,
        s = Function.prototype,
        o = r.slice,
        u = r.unshift,
        a = i.toString,
        f = i.hasOwnProperty,
        l = r.forEach,
        c = r.map,
        h = r.reduce,
        p = r.reduceRight,
        d = r.filter,
        v = r.every,
        m = r.some,
        g = r.indexOf,
        y = r.lastIndexOf,
        b = Array.isArray,
        w = Object.keys,
        E = s.bind,
        S = function (e) {
            return new P(e)
        };
    typeof exports != "undefined" ? (typeof module != "undefined" && module.exports && (exports = module.exports = S), exports._ = S) : e._ = S, S.VERSION = "1.3.3";
    var x = S.each = S.forEach = function (e, t, r) {
        if(e == null) return;
        if(l && e.forEach === l) e.forEach(t, r);
        else if(e.length === +e.length) {
            for(var i = 0, s = e.length; i < s; i++)
                if(i in e && t.call(r, e[i], i, e) === n) return
        } else
            for(var o in e)
                if(S.has(e, o) && t.call(r, e[o], o, e) === n) return
    };
    S.map = S.collect = function (e, t, n) {
        var r = [];
        return e == null ? r : c && e.map === c ? e.map(t, n) : (x(e, function (e, i, s) {
            r[r.length] = t.call(n, e, i, s)
        }), e.length === +e.length && (r.length = e.length), r)
    }, S.reduce = S.foldl = S.inject = function (e, t, n, r) {
        var i = arguments.length > 2;
        e == null && (e = []);
        if(h && e.reduce === h) return r && (t = S.bind(t, r)), i ? e.reduce(t, n) : e.reduce(t);
        x(e, function (e, s, o) {
            i ? n = t.call(r, n, e, s, o) : (n = e, i = !0)
        });
        if(!i) throw new TypeError("Reduce of empty array with no initial value");
        return n
    }, S.reduceRight = S.foldr = function (e, t, n, r) {
        var i = arguments.length > 2;
        e == null && (e = []);
        if(p && e.reduceRight === p) return r && (t = S.bind(t, r)), i ? e.reduceRight(t, n) : e.reduceRight(t);
        var s = S.toArray(e)
            .reverse();
        return r && !i && (t = S.bind(t, r)), i ? S.reduce(s, t, n, r) : S.reduce(s, t)
    }, S.find = S.detect = function (e, t, n) {
        var r;
        return T(e, function (e, i, s) {
            if(t.call(n, e, i, s)) return r = e, !0
        }), r
    }, S.filter = S.select = function (e, t, n) {
        var r = [];
        return e == null ? r : d && e.filter === d ? e.filter(t, n) : (x(e, function (e, i, s) {
            t.call(n, e, i, s) && (r[r.length] = e)
        }), r)
    }, S.reject = function (e, t, n) {
        var r = [];
        return e == null ? r : (x(e, function (e, i, s) {
            t.call(n, e, i, s) || (r[r.length] = e)
        }), r)
    }, S.every = S.all = function (e, t, r) {
        var i = !0;
        return e == null ? i : v && e.every === v ? e.every(t, r) : (x(e, function (e, s, o) {
            if(!(i = i && t.call(r, e, s, o))) return n
        }), !! i)
    };
    var T = S.some = S.any = function (e, t, r) {
        t || (t = S.identity);
        var i = !1;
        return e == null ? i : m && e.some === m ? e.some(t, r) : (x(e, function (e, s, o) {
            if(i || (i = t.call(r, e, s, o))) return n
        }), !! i)
    };
    S.include = S.contains = function (e, t) {
        var n = !1;
        return e == null ? n : g && e.indexOf === g ? e.indexOf(t) != -1 : (n = T(e, function (e) {
            return e === t
        }), n)
    }, S.invoke = function (e, t) {
        var n = o.call(arguments, 2);
        return S.map(e, function (e) {
            return(S.isFunction(t) ? t || e : e[t])
                .apply(e, n)
        })
    }, S.pluck = function (e, t) {
        return S.map(e, function (e) {
            return e[t]
        })
    }, S.max = function (e, t, n) {
        if(!t && S.isArray(e) && e[0] === +e[0]) return Math.max.apply(Math, e);
        if(!t && S.isEmpty(e)) return -Infinity;
        var r = {
            computed: -Infinity
        };
        return x(e, function (e, i, s) {
            var o = t ? t.call(n, e, i, s) : e;
            o >= r.computed && (r = {
                value: e,
                computed: o
            })
        }), r.value
    }, S.min = function (e, t, n) {
        if(!t && S.isArray(e) && e[0] === +e[0]) return Math.min.apply(Math, e);
        if(!t && S.isEmpty(e)) return Infinity;
        var r = {
            computed: Infinity
        };
        return x(e, function (e, i, s) {
            var o = t ? t.call(n, e, i, s) : e;
            o < r.computed && (r = {
                value: e,
                computed: o
            })
        }), r.value
    }, S.shuffle = function (e) {
        var t = [],
            n;
        return x(e, function (e, r, i) {
            n = Math.floor(Math.random() * (r + 1)), t[r] = t[n], t[n] = e
        }), t
    }, S.sortBy = function (e, t, n) {
        var r = S.isFunction(t) ? t : function (e) {
                return e[t]
            };
        return S.pluck(S.map(e, function (e, t, i) {
                return {
                    value: e,
                    criteria: r.call(n, e, t, i)
                }
            })
            .sort(function (e, t) {
                var n = e.criteria,
                    r = t.criteria;
                return n === void 0 ? 1 : r === void 0 ? -1 : n < r ? -1 : n > r ? 1 : 0
            }), "value")
    }, S.groupBy = function (e, t) {
        var n = {}, r = S.isFunction(t) ? t : function (e) {
                return e[t]
            };
        return x(e, function (e, t) {
            var i = r(e, t);
            (n[i] || (n[i] = []))
                .push(e)
        }), n
    }, S.sortedIndex = function (e, t, n) {
        n || (n = S.identity);
        var r = 0,
            i = e.length;
        while(r < i) {
            var s = r + i >> 1;
            n(e[s]) < n(t) ? r = s + 1 : i = s
        }
        return r
    }, S.toArray = function (e) {
        return e ? S.isArray(e) ? o.call(e) : S.isArguments(e) ? o.call(e) : e.toArray && S.isFunction(e.toArray) ? e.toArray() : S.values(e) : []
    }, S.size = function (e) {
        return S.isArray(e) ? e.length : S.keys(e)
            .length
    }, S.first = S.head = S.take = function (e, t, n) {
        return t != null && !n ? o.call(e, 0, t) : e[0]
    }, S.initial = function (e, t, n) {
        return o.call(e, 0, e.length - (t == null || n ? 1 : t))
    }, S.last = function (e, t, n) {
        return t != null && !n ? o.call(e, Math.max(e.length - t, 0)) : e[e.length - 1]
    }, S.rest = S.tail = function (e, t, n) {
        return o.call(e, t == null || n ? 1 : t)
    }, S.compact = function (e) {
        return S.filter(e, function (e) {
            return !!e
        })
    }, S.flatten = function (e, t) {
        return S.reduce(e, function (e, n) {
            return S.isArray(n) ? e.concat(t ? n : S.flatten(n)) : (e[e.length] = n, e)
        }, [])
    }, S.without = function (e) {
        return S.difference(e, o.call(arguments, 1))
    }, S.uniq = S.unique = function (e, t, n) {
        var r = n ? S.map(e, n) : e,
            i = [];
        return e.length < 3 && (t = !0), S.reduce(r, function (n, r, s) {
            if(t ? S.last(n) !== r || !n.length : !S.include(n, r)) n.push(r), i.push(e[s]);
            return n
        }, []), i
    }, S.union = function () {
        return S.uniq(S.flatten(arguments, !0))
    }, S.intersection = S.intersect = function (e) {
        var t = o.call(arguments, 1);
        return S.filter(S.uniq(e), function (e) {
            return S.every(t, function (t) {
                return S.indexOf(t, e) >= 0
            })
        })
    }, S.difference = function (e) {
        var t = S.flatten(o.call(arguments, 1), !0);
        return S.filter(e, function (e) {
            return !S.include(t, e)
        })
    }, S.zip = function () {
        var e = o.call(arguments),
            t = S.max(S.pluck(e, "length")),
            n = new Array(t);
        for(var r = 0; r < t; r++) n[r] = S.pluck(e, "" + r);
        return n
    }, S.indexOf = function (e, t, n) {
        if(e == null) return -1;
        var r, i;
        if(n) return r = S.sortedIndex(e, t), e[r] === t ? r : -1;
        if(g && e.indexOf === g) return e.indexOf(t);
        for(r = 0, i = e.length; r < i; r++)
            if(r in e && e[r] === t) return r;
        return -1
    }, S.lastIndexOf = function (e, t) {
        if(e == null) return -1;
        if(y && e.lastIndexOf === y) return e.lastIndexOf(t);
        var n = e.length;
        while(n--)
            if(n in e && e[n] === t) return n;
        return -1
    }, S.range = function (e, t, n) {
        arguments.length <= 1 && (t = e || 0, e = 0), n = arguments[2] || 1;
        var r = Math.max(Math.ceil((t - e) / n), 0),
            i = 0,
            s = new Array(r);
        while(i < r) s[i++] = e, e += n;
        return s
    };
    var N = function () {};
    S.bind = function (t, n) {
        var r, i;
        if(t.bind === E && E) return E.apply(t, o.call(arguments, 1));
        if(!S.isFunction(t)) throw new TypeError;
        return i = o.call(arguments, 2), r = function () {
            if(this instanceof r) {
                N.prototype = t.prototype;
                var e = new N,
                    s = t.apply(e, i.concat(o.call(arguments)));
                return Object(s) === s ? s : e
            }
            return t.apply(n, i.concat(o.call(arguments)))
        }
    }, S.bindAll = function (e) {
        var t = o.call(arguments, 1);
        return t.length == 0 && (t = S.functions(e)), x(t, function (t) {
            e[t] = S.bind(e[t], e)
        }), e
    }, S.memoize = function (e, t) {
        var n = {};
        return t || (t = S.identity),
        function () {
            var r = t.apply(this, arguments);
            return S.has(n, r) ? n[r] : n[r] = e.apply(this, arguments)
        }
    }, S.delay = function (e, t) {
        var n = o.call(arguments, 2);
        return setTimeout(function () {
            return e.apply(null, n)
        }, t)
    }, S.defer = function (e) {
        return S.delay.apply(S, [e, 1].concat(o.call(arguments, 1)))
    }, S.throttle = function (e, t) {
        var n, r, i, s, o, u, a = S.debounce(function () {
                o = s = !1
            }, t);
        return function () {
            n = this, r = arguments;
            var f = function () {
                i = null, o && e.apply(n, r), a()
            };
            return i || (i = setTimeout(f, t)), s ? o = !0 : u = e.apply(n, r), a(), s = !0, u
        }
    }, S.debounce = function (e, t, n) {
        var r;
        return function () {
            var i = this,
                s = arguments,
                o = function () {
                    r = null, n || e.apply(i, s)
                };
            n && !r && e.apply(i, s), clearTimeout(r), r = setTimeout(o, t)
        }
    }, S.once = function (e) {
        var t = !1,
            n;
        return function () {
            return t ? n : (t = !0, n = e.apply(this, arguments))
        }
    }, S.wrap = function (e, t) {
        return function () {
            var n = [e].concat(o.call(arguments, 0));
            return t.apply(this, n)
        }
    }, S.compose = function () {
        var e = arguments;
        return function () {
            var t = arguments;
            for(var n = e.length - 1; n >= 0; n--) t = [e[n].apply(this, t)];
            return t[0]
        }
    }, S.after = function (e, t) {
        return e <= 0 ? t() : function () {
            if(--e < 1) return t.apply(this, arguments)
        }
    }, S.keys = w || function (e) {
        if(e !== Object(e)) throw new TypeError("Invalid object");
        var t = [];
        for(var n in e) S.has(e, n) && (t[t.length] = n);
        return t
    }, S.values = function (e) {
        return S.map(e, S.identity)
    }, S.functions = S.methods = function (e) {
        var t = [];
        for(var n in e) S.isFunction(e[n]) && t.push(n);
        return t.sort()
    }, S.extend = function (e) {
        return x(o.call(arguments, 1), function (t) {
            for(var n in t) e[n] = t[n]
        }), e
    }, S.pick = function (e) {
        var t = {};
        return x(S.flatten(o.call(arguments, 1)), function (n) {
            n in e && (t[n] = e[n])
        }), t
    }, S.defaults = function (e) {
        return x(o.call(arguments, 1), function (t) {
            for(var n in t) e[n] == null && (e[n] = t[n])
        }), e
    }, S.clone = function (e) {
        return S.isObject(e) ? S.isArray(e) ? e.slice() : S.extend({}, e) : e
    }, S.tap = function (e, t) {
        return t(e), e
    }, S.isEqual = function (e, t) {
        return C(e, t, [])
    }, S.isEmpty = function (e) {
        if(e == null) return !0;
        if(S.isArray(e) || S.isString(e)) return e.length === 0;
        for(var t in e)
            if(S.has(e, t)) return !1;
        return !0
    }, S.isElement = function (e) {
        return !!e && e.nodeType == 1
    }, S.isArray = b || function (e) {
        return a.call(e) == "[object Array]"
    }, S.isObject = function (e) {
        return e === Object(e)
    }, S.isArguments = function (e) {
        return a.call(e) == "[object Arguments]"
    }, S.isArguments(arguments) || (S.isArguments = function (e) {
        return !!e && !! S.has(e, "callee")
    }), S.isFunction = function (e) {
        return a.call(e) == "[object Function]"
    }, S.isString = function (e) {
        return a.call(e) == "[object String]"
    }, S.isNumber = function (e) {
        return a.call(e) == "[object Number]"
    }, S.isFinite = function (e) {
        return S.isNumber(e) && isFinite(e)
    }, S.isNaN = function (e) {
        return e !== e
    }, S.isBoolean = function (e) {
        return e === !0 || e === !1 || a.call(e) == "[object Boolean]"
    }, S.isDate = function (e) {
        return a.call(e) == "[object Date]"
    }, S.isRegExp = function (e) {
        return a.call(e) == "[object RegExp]"
    }, S.isNull = function (e) {
        return e === null
    }, S.isUndefined = function (e) {
        return e === void 0
    }, S.has = function (e, t) {
        return f.call(e, t)
    }, S.noConflict = function () {
        return e._ = t, this
    }, S.identity = function (e) {
        return e
    }, S.times = function (e, t, n) {
        for(var r = 0; r < e; r++) t.call(n, r)
    }, S.escape = function (e) {
        return("" + e)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#x27;")
            .replace(/\//g, "&#x2F;")
    }, S.result = function (e, t) {
        if(e == null) return null;
        var n = e[t];
        return S.isFunction(n) ? n.call(e) : n
    }, S.mixin = function (e) {
        x(S.functions(e), function (t) {
            B(t, S[t] = e[t])
        })
    };
    var k = 0;
    S.uniqueId = function (e) {
        var t = k++;
        return e ? e + t : t
    }, S.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var L = /.^/,
        A = {
            "\\": "\\",
            "'": "'",
            r: "\r",
            n: "\n",
            t: "	",
            u2028: "\u2028",
            u2029: "\u2029"
        };
    for(var O in A) A[A[O]] = O;
    var M = /\\|'|\r|\n|\t|\u2028|\u2029/g,
        _ = /\\(\\|'|r|n|t|u2028|u2029)/g,
        D = function (e) {
            return e.replace(_, function (e, t) {
                return A[t]
            })
        };
    S.template = function (e, t, n) {
        n = S.defaults(n || {}, S.templateSettings);
        var r = "__p+='" + e.replace(M, function (e) {
            return "\\" + A[e]
        })
            .replace(n.escape || L, function (e, t) {
                return "'+\n_.escape(" + D(t) + ")+\n'"
            })
            .replace(n.interpolate || L, function (e, t) {
                return "'+\n(" + D(t) + ")+\n'"
            })
            .replace(n.evaluate || L, function (e, t) {
                return "';\n" + D(t) + "\n;__p+='"
            }) + "';\n";
        n.variable || (r = "with(obj||{}){\n" + r + "}\n"), r = "var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};\n" + r + "return __p;\n";
        var i = new Function(n.variable || "obj", "_", r);
        if(t) return i(t, S);
        var s = function (e) {
            return i.call(this, e, S)
        };
        return s.source = "function(" + (n.variable || "obj") + "){\n" + r + "}", s
    }, S.chain = function (e) {
        return S(e)
            .chain()
    };
    var P = function (e) {
        this._wrapped = e
    };
    S.prototype = P.prototype;
    var H = function (e, t) {
        return t ? S(e)
            .chain() : e
    }, B = function (e, t) {
            P.prototype[e] = function () {
                var e = o.call(arguments);
                return u.call(e, this._wrapped), H(t.apply(S, e), this._chain)
            }
        };
    S.mixin(S), x(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (e) {
        var t = r[e];
        P.prototype[e] = function () {
            var n = this._wrapped;
            t.apply(n, arguments);
            var r = n.length;
            return(e == "shift" || e == "splice") && r === 0 && delete n[0], H(n, this._chain)
        }
    }), x(["concat", "join", "slice"], function (e) {
        var t = r[e];
        P.prototype[e] = function () {
            return H(t.apply(this._wrapped, arguments), this._chain)
        }
    }), P.prototype.chain = function () {
        return this._chain = !0, this
    }, P.prototype.value = function () {
        return this._wrapped
    }
}.call(this),
function () {
    var e = this,
        t = e.Backbone,
        n = Array.prototype.slice,
        r = Array.prototype.splice,
        i;
    typeof exports != "undefined" ? i = exports :
        i = e.Backbone = {}, i.VERSION = "0.9.2";
    var s = e._;
    !s && typeof require != "undefined" && (s = require("underscore"));
    var o = e.jQuery || e.Zepto || e.ender;
    i.setDomLibrary = function (e) {
        o = e
    }, i.noConflict = function () {
        return e.Backbone = t, this
    }, i.emulateHTTP = !1, i.emulateJSON = !1;
    var u = /\s+/,
        a = i.Events = {
            on: function (e, t, n) {
                var r, i, s, o, a;
                if(!t) return this;
                e = e.split(u), r = this._callbacks || (this._callbacks = {});
                while(i = e.shift()) a = r[i], s = a ? a.tail : {}, s.next = o = {}, s.context = n, s.callback = t, r[i] = {
                    tail: o,
                    next: a ? a.next : s
                };
                return this
            },
            off: function (e, t, n) {
                var r, i, o, a, f, l;
                if(!(i = this._callbacks)) return;
                if(!(e || t || n)) return delete this._callbacks, this;
                e = e ? e.split(u) : s.keys(i);
                while(r = e.shift()) {
                    o = i[r], delete i[r];
                    if(!o || !t && !n) continue;
                    a = o.tail;
                    while((o = o.next) !== a) f = o.callback, l = o.context, (t && f !== t || n && l !== n) && this.on(r, f, l)
                }
                return this
            },
            trigger: function (e) {
                var t, r, i, s, o, a, f;
                if(!(i = this._callbacks)) return this;
                a = i.all, e = e.split(u), f = n.call(arguments, 1);
                while(t = e.shift()) {
                    if(r = i[t]) {
                        s = r.tail;
                        while((r = r.next) !== s) r.callback.apply(r.context || this, f)
                    }
                    if(r = a) {
                        s = r.tail, o = [t].concat(f);
                        while((r = r.next) !== s) r.callback.apply(r.context || this, o)
                    }
                }
                return this
            }
        };
    a.bind = a.on, a.unbind = a.off;
    var f = i.Model = function (e, t) {
        var n;
        e || (e = {}), t && t.parse && (e = this.parse(e));
        if(n = C(this, "defaults")) e = s.extend({}, n, e);
        t && t.collection && (this.collection = t.collection), this.attributes = {}, this._escapedAttributes = {}, this.cid = s.uniqueId("c"), this.changed = {}, this._silent = {}, this._pending = {}, this.set(e, {
            silent: !0
        }), this.changed = {}, this._silent = {}, this._pending = {}, this._previousAttributes = s.clone(this.attributes), this.initialize.apply(this, arguments)
    };
    s.extend(f.prototype, a, {
        changed: null,
        _silent: null,
        _pending: null,
        idAttribute: "id",
        initialize: function () {},
        toJSON: function (e) {
            return s.clone(this.attributes)
        },
        get: function (e) {
            return this.attributes[e]
        },
        escape: function (e) {
            var t;
            if(t = this._escapedAttributes[e]) return t;
            var n = this.get(e);
            return this._escapedAttributes[e] = s.escape(n == null ? "" : "" + n)
        },
        has: function (e) {
            return this.get(e) != null
        },
        set: function (e, t, n) {
            var r, i, o;
            s.isObject(e) || e == null ? (r = e, n = t) : (r = {}, r[e] = t), n || (n = {});
            if(!r) return this;
            r instanceof f && (r = r.attributes);
            if(n.unset)
                for(i in r) r[i] = void 0;
            if(!this._validate(r, n)) return !1;
            this.idAttribute in r && (this.id = r[this.idAttribute]);
            var u = n.changes = {}, a = this.attributes,
                l = this._escapedAttributes,
                c = this._previousAttributes || {};
            for(i in r) {
                o = r[i];
                if(!s.isEqual(a[i], o) || n.unset && s.has(a, i)) delete l[i], (n.silent ? this._silent : u)[i] = !0;
                n.unset ? delete a[i] : a[i] = o, !s.isEqual(c[i], o) || s.has(a, i) != s.has(c, i) ? (this.changed[i] = o, n.silent || (this._pending[i] = !0)) : (delete this.changed[i], delete this._pending[i])
            }
            return n.silent || this.change(n), this
        },
        unset: function (e, t) {
            return(t || (t = {}))
                .unset = !0, this.set(e, null, t)
        },
        clear: function (e) {
            return(e || (e = {}))
                .unset = !0, this.set(s.clone(this.attributes), e)
        },
        fetch: function (e) {
            e = e ? s.clone(e) : {};
            var t = this,
                n = e.success;
            return e.success = function (r, i, s) {
                if(!t.set(t.parse(r, s), e)) return !1;
                n && n(t, r)
            }, e.error = i.wrapError(e.error, t, e), (this.sync || i.sync)
                .call(this, "read", this, e)
        },
        save: function (e, t, n) {
            var r, o;
            s.isObject(e) || e == null ? (r = e, n = t) : (r = {}, r[e] = t), n = n ? s.clone(n) : {};
            if(n.wait) {
                if(!this._validate(r, n)) return !1;
                o = s.clone(this.attributes)
            }
            var u = s.extend({}, n, {
                silent: !0
            });
            if(r && !this.set(r, n.wait ? u : n)) return !1;
            var a = this,
                f = n.success;
            n.success = function (e, t, i) {
                var o = a.parse(e, i);
                n.wait && (delete n.wait, o = s.extend(r || {}, o));
                if(!a.set(o, n)) return !1;
                f ? f(a, e) : a.trigger("sync", a, e, n)
            }, n.error = i.wrapError(n.error, a, n);
            var l = this.isNew() ? "create" : "update",
                c = (this.sync || i.sync)
                    .call(this, l, this, n);
            return n.wait && this.set(o, u), c
        },
        destroy: function (e) {
            e = e ? s.clone(e) : {};
            var t = this,
                n = e.success,
                r = function () {
                    t.trigger("destroy", t, t.collection, e)
                };
            if(this.isNew()) return r(), !1;
            e.success = function (i) {
                e.wait && r(), n ? n(t, i) : t.trigger("sync", t, i, e)
            }, e.error = i.wrapError(e.error, t, e);
            var o = (this.sync || i.sync)
                .call(this, "delete", this, e);
            return e.wait || r(), o
        },
        url: function () {
            var e = C(this, "urlRoot") || C(this.collection, "url") || k();
            return this.isNew() ? e : e + (e.charAt(e.length - 1) == "/" ? "" : "/") + encodeURIComponent(this.id)
        },
        parse: function (e, t) {
            return e
        },
        clone: function () {
            return new this.constructor(this.attributes)
        },
        isNew: function () {
            return this.id == null
        },
        change: function (e) {
            e || (e = {});
            var t = this._changing;
            this._changing = !0;
            for(var n in this._silent) this._pending[n] = !0;
            var r = s.extend({}, e.changes, this._silent);
            this._silent = {};
            for(var n in r) this.trigger("change:" + n, this, this.get(n), e);
            if(t) return this;
            while(!s.isEmpty(this._pending)) {
                this._pending = {}, this.trigger("change", this, e);
                for(var n in this.changed) {
                    if(this._pending[n] || this._silent[n]) continue;
                    delete this.changed[n]
                }
                this._previousAttributes = s.clone(this.attributes)
            }
            return this._changing = !1, this
        },
        hasChanged: function (e) {
            return arguments.length ? s.has(this.changed, e) : !s.isEmpty(this.changed)
        },
        changedAttributes: function (e) {
            if(!e) return this.hasChanged() ? s.clone(this.changed) : !1;
            var t, n = !1,
                r = this._previousAttributes;
            for(var i in e) {
                if(s.isEqual(r[i], t = e[i])) continue;
                (n || (n = {}))[i] = t
            }
            return n
        },
        previous: function (e) {
            return !arguments.length || !this._previousAttributes ? null : this._previousAttributes[e]
        },
        previousAttributes: function () {
            return s.clone(this._previousAttributes)
        },
        isValid: function () {
            return !this.validate(this.attributes)
        },
        _validate: function (e, t) {
            if(t.silent || !this.validate) return !0;
            e = s.extend({}, this.attributes, e);
            var n = this.validate(e, t);
            return n ? (t && t.error ? t.error(this, n, t) : this.trigger("error", this, n, t), !1) : !0
        }
    });
    var l = i.Collection = function (e, t) {
        t || (t = {}), t.model && (this.model = t.model), t.comparator && (this.comparator = t.comparator), this._reset(), this.initialize.apply(this, arguments), e && this.reset(e, {
            silent: !0,
            parse: t.parse
        })
    };
    s.extend(l.prototype, a, {
        model: f,
        initialize: function () {},
        toJSON: function (e) {
            return this.map(function (t) {
                return t.toJSON(e)
            })
        },
        add: function (e, t) {
            var n, i, o, u, a, f, l = {}, c = {}, h = [];
            t || (t = {}), e = s.isArray(e) ? e.slice() : [e];
            for(n = 0, o = e.length; n < o; n++) {
                if(!(u = e[n] = this._prepareModel(e[n], t))) throw new Error("Can't add an invalid model to a collection");
                a = u.cid, f = u.id;
                if(l[a] || this._byCid[a] || f != null && (c[f] || this._byId[f])) {
                    h.push(n);
                    continue
                }
                l[a] = c[f] = u
            }
            n = h.length;
            while(n--) e.splice(h[n], 1);
            for(n = 0, o = e.length; n < o; n++)(u = e[n])
                .on("all", this._onModelEvent, this), this._byCid[u.cid] = u, u.id != null && (this._byId[u.id] = u);
            this.length += o, i = t.at != null ? t.at : this.models.length, r.apply(this.models, [i, 0].concat(e)), this.comparator && this.sort({
                silent: !0
            });
            if(t.silent) return this;
            for(n = 0, o = this.models.length; n < o; n++) {
                if(!l[(u = this.models[n])
                    .cid]) continue;
                t.index = n, u.trigger("add", u, this, t)
            }
            return this
        },
        remove: function (e, t) {
            var n, r, i, o;
            t || (t = {}), e = s.isArray(e) ? e.slice() : [e];
            for(n = 0, r = e.length; n < r; n++) {
                o = this.getByCid(e[n]) || this.get(e[n]);
                if(!o) continue;
                delete this._byId[o.id], delete this._byCid[o.cid], i = this.indexOf(o), this.models.splice(i, 1), this.length--, t.silent || (t.index = i, o.trigger("remove", o, this, t)), this._removeReference(o)
            }
            return this
        },
        push: function (e, t) {
            return e = this._prepareModel(e, t), this.add(e, t), e
        },
        pop: function (e) {
            var t = this.at(this.length - 1);
            return this.remove(t, e), t
        },
        unshift: function (e, t) {
            return e = this._prepareModel(e, t), this.add(e, s.extend({
                at: 0
            }, t)), e
        },
        shift: function (e) {
            var t = this.at(0);
            return this.remove(t, e), t
        },
        get: function (e) {
            return e == null ? void 0 : this._byId[e.id != null ? e.id : e]
        },
        getByCid: function (e) {
            return e && this._byCid[e.cid || e]
        },
        at: function (e) {
            return this.models[e]
        },
        where: function (e) {
            return s.isEmpty(e) ? [] : this.filter(function (t) {
                for(var n in e)
                    if(e[n] !== t.get(n)) return !1;
                return !0
            })
        },
        sort: function (e) {
            e || (e = {});
            if(!this.comparator) throw new Error("Cannot sort a set without a comparator");
            var t = s.bind(this.comparator, this);
            return this.comparator.length == 1 ? this.models = this.sortBy(t) : this.models.sort(t), e.silent || this.trigger("reset", this, e), this
        },
        pluck: function (e) {
            return s.map(this.models, function (t) {
                return t.get(e)
            })
        },
        reset: function (e, t) {
            e || (e = []), t || (t = {});
            for(var n = 0, r = this.models.length; n < r; n++) this._removeReference(this.models[n]);
            return this._reset(), this.add(e, s.extend({
                silent: !0
            }, t)), t.silent || this.trigger("reset", this, t), this
        },
        fetch: function (e) {
            e = e ? s.clone(e) : {}, e.parse === undefined && (e.parse = !0);
            var t = this,
                n = e.success;
            return e.success = function (r, i, s) {
                t[e.add ? "add" : "reset"](t.parse(r, s), e), n && n(t, r)
            }, e.error = i.wrapError(e.error, t, e), (this.sync || i.sync)
                .call(this, "read", this, e)
        },
        create: function (e, t) {
            var n = this;
            t = t ? s.clone(t) : {}, e = this._prepareModel(e, t);
            if(!e) return !1;
            t.wait || n.add(e, t);
            var r = t.success;
            return t.success = function (i, s, o) {
                t.wait && n.add(i, t), r ? r(i, s) : i.trigger("sync", e, s, t)
            }, e.save(null, t), e
        },
        parse: function (e, t) {
            return e
        },
        chain: function () {
            return s(this.models)
                .chain()
        },
        _reset: function (e) {
            this.length = 0, this.models = [], this._byId = {}, this._byCid = {}
        },
        _prepareModel: function (e, t) {
            t || (t = {});
            if(e instanceof f) e.collection || (e.collection = this);
            else {
                var n = e;
                t.collection = this, e = new this.model(n, t), e._validate(e.attributes, t) || (e = !1)
            }
            return e
        },
        _removeReference: function (e) {
            this == e.collection && delete e.collection, e.off("all", this._onModelEvent, this)
        },
        _onModelEvent: function (e, t, n, r) {
            if((e == "add" || e == "remove") && n != this) return;
            e == "destroy" && this.remove(t, r), t && e === "change:" + t.idAttribute && (delete this._byId[t.previous(t.idAttribute)], this._byId[t.id] = t), this.trigger.apply(this, arguments)
        }
    });
    var c = ["forEach", "each", "map", "reduce", "reduceRight", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "sortBy", "sortedIndex", "toArray", "size", "first", "initial", "rest", "last", "without", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "groupBy"];
    s.each(c, function (e) {
        l.prototype[e] = function () {
            return s[e].apply(s, [this.models].concat(s.toArray(arguments)))
        }
    });
    var h = i.Router = function (e) {
        e || (e = {}), e.routes && (this.routes = e.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
    }, p = /:\w+/g,
        d = /\*\w+/g,
        v = /[-[\]{}()+?.,\\^$|#\s]/g;
    s.extend(h.prototype, a, {
        initialize: function () {},
        route: function (e, t, n) {
            return i.history || (i.history = new m), s.isRegExp(e) || (e = this._routeToRegExp(e)), n || (n = this[t]), i.history.route(e, s.bind(function (r) {
                var s = this._extractParameters(e, r);
                n && n.apply(this, s), this.trigger.apply(this, ["route:" + t].concat(s)), i.history.trigger("route", this, t, s)
            }, this)), this
        },
        navigate: function (e, t) {
            i.history.navigate(e, t)
        },
        _bindRoutes: function () {
            if(!this.routes) return;
            var e = [];
            for(var t in this.routes) e.unshift([t, this.routes[t]]);
            for(var n = 0, r = e.length; n < r; n++) this.route(e[n][0], e[n][1], this[e[n][1]])
        },
        _routeToRegExp: function (e) {
            return e = e.replace(v, "\\$&")
                .replace(p, "([^/]+)")
                .replace(d, "(.*?)"), new RegExp("^" + e + "$")
        },
        _extractParameters: function (e, t) {
            return e.exec(t)
                .slice(1)
        }
    });
    var m = i.History = function () {
        this.handlers = [], s.bindAll(this, "checkUrl")
    }, g = /^[#\/]/,
        y = /msie [\w.]+/;
    m.started = !1, s.extend(m.prototype, a, {
        interval: 50,
        getHash: function (e) {
            var t = e ? e.location : window.location,
                n = t.href.match(/#(.*)$/);
            return n ? n[1] : ""
        },
        getFragment: function (e, t) {
            if(e == null)
                if(this._hasPushState || t) {
                    e = window.location.pathname;
                    var n = window.location.search;
                    n && (e += n)
                } else e = this.getHash();
            return e.indexOf(this.options.root) || (e = e.substr(this.options.root.length)), e.replace(g, "")
        },
        start: function (e) {
            if(m.started) throw new Error("Backbone.history has already been started");
            m.started = !0, this.options = s.extend({}, {
                root: "/"
            }, this.options, e), this._wantsHashChange = this.options.hashChange !== !1, this._wantsPushState = !! this.options.pushState, this._hasPushState = !! (this.options.pushState && window.history && window.history.pushState);
            var t = this.getFragment(),
                n = document.documentMode,
                r = y.exec(navigator.userAgent.toLowerCase()) && (!n || n <= 7);
            r && (this.iframe = o('<iframe src="javascript:0" tabindex="-1" />')
                .hide()
                .appendTo("body")[0].contentWindow, this.navigate(t)), this._hasPushState ? o(window)
                .bind("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !r ? o(window)
                .bind("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), this.fragment = t;
            var i = window.location,
                u = i.pathname == this.options.root;
            if(this._wantsHashChange && this._wantsPushState && !this._hasPushState && !u) return this.fragment = this.getFragment(null, !0), window.location.replace(this.options.root + "#" + this.fragment), !0;
            this._wantsPushState && this._hasPushState && u && i.hash && (this.fragment = this.getHash()
                .replace(g, ""), window.history.replaceState({}, document.title, i.protocol + "//" + i.host + this.options.root + this.fragment));
            if(!this.options.silent) return this.loadUrl()
        },
        stop: function () {
            o(window)
                .unbind("popstate", this.checkUrl)
                .unbind("hashchange", this.checkUrl), clearInterval(this._checkUrlInterval), m.started = !1
        },
        route: function (e, t) {
            this.handlers.unshift({
                route: e,
                callback: t
            })
        },
        checkUrl: function (e) {
            var t = this.getFragment();
            t == this.fragment && this.iframe && (t = this.getFragment(this.getHash(this.iframe)));
            if(t == this.fragment) return !1;
            this.iframe && this.navigate(t), this.loadUrl() || this.loadUrl(this.getHash())
        },
        loadUrl: function (e) {
            var t = this.fragment = this.getFragment(e),
                n = s.any(this.handlers, function (e) {
                    if(e.route.test(t)) return e.callback(t), !0
                });
            return n
        },
        navigate: function (e, t) {
            if(!m.started) return !1;
            if(!t || t === !0) t = {
                trigger: t
            };
            var n = (e || "")
                .replace(g, "");
            if(this.fragment == n) return;
            this._hasPushState ? (n.indexOf(this.options.root) != 0 && (n = this.options.root + n), this.fragment = n, window.history[t.replace ? "replaceState" : "pushState"]({}, document.title, n)) : this._wantsHashChange ? (this.fragment = n, this._updateHash(window.location, n, t.replace), this.iframe && n != this.getFragment(this.getHash(this.iframe)) && (t.replace || this.iframe.document.open()
                .close(), this._updateHash(this.iframe.location, n, t.replace))) : window.location.assign(this.options.root + e), t.trigger && this.loadUrl(e)
        },
        _updateHash: function (e, t, n) {
            n ? e.replace(e.toString()
                .replace(/(javascript:|#).*$/, "") + "#" + t) : e.hash = t
        }
    });
    var b = i.View = function (e) {
        this.cid = s.uniqueId("view"), this._configure(e || {}), this._ensureElement(), this.initialize.apply(this, arguments), this.delegateEvents()
    }, w = /^(\S+)\s*(.*)$/,
        E = ["model", "collection", "el", "id", "attributes", "className", "tagName"];
    s.extend(b.prototype, a, {
        tagName: "div",
        $: function (e) {
            return this.$el.find(e)
        },
        initialize: function () {},
        render: function () {
            return this
        },
        remove: function () {
            return this.$el.remove(), this
        },
        make: function (e, t, n) {
            var r = document.createElement(e);
            return t && o(r)
                .attr(t), n && o(r)
                .html(n), r
        },
        setElement: function (e, t) {
            return this.$el && this.undelegateEvents(), this.$el = e instanceof o ? e : o(e), this.el = this.$el[0], t !== !1 && this.delegateEvents(), this
        },
        delegateEvents: function (e) {
            if(!e && !(e = C(this, "events"))) return;
            this.undelegateEvents();
            for(var t in e) {
                var n = e[t];
                s.isFunction(n) || (n = this[e[t]]);
                if(!n) throw new Error('Method "' + e[t] + '" does not exist');
                var r = t.match(w),
                    i = r[1],
                    o = r[2];
                n = s.bind(n, this), i += ".delegateEvents" + this.cid, o === "" ? this.$el.bind(i, n) : this.$el.delegate(o, i, n)
            }
        },
        undelegateEvents: function () {
            this.$el.unbind(".delegateEvents" + this.cid)
        },
        _configure: function (e) {
            this.options && (e = s.extend({}, this.options, e));
            for(var t = 0, n = E.length; t < n; t++) {
                var r = E[t];
                e[r] && (this[r] = e[r])
            }
            this.options = e
        },
        _ensureElement: function () {
            if(!this.el) {
                var e = C(this, "attributes") || {};
                this.id && (e.id = this.id), this.className && (e["class"] = this.className), this.setElement(this.make(this.tagName, e), !1)
            } else this.setElement(this.el, !1)
        }
    });
    var S = function (e, t) {
        var n = N(this, e, t);
        return n.extend = this.extend, n
    };
    f.extend = l.extend = h.extend = b.extend = S;
    var x = {
        create: "POST",
        update: "PUT",
        "delete": "DELETE",
        read: "GET"
    };
    i.sync = function (e, t, n) {
        var r = x[e];
        n || (n = {});
        var u = {
            type: r,
            dataType: "json"
        };
        return n.url || (u.url = C(t, "url") || k()), !n.data && t && (e == "create" || e == "update") && (u.contentType = "application/json", u.data = JSON.stringify(t.toJSON())), i.emulateJSON && (u.contentType = "application/x-www-form-urlencoded", u.data = u.data ? {
            model: u.data
        } : {}), i.emulateHTTP && (r === "PUT" || r === "DELETE") && (i.emulateJSON && (u.data._method = r), u.type = "POST", u.beforeSend = function (e) {
            e.setRequestHeader("X-HTTP-Method-Override", r)
        }), u.type !== "GET" && !i.emulateJSON && (u.processData = !1), o.ajax(s.extend(u, n))
    }, i.wrapError = function (e, t, n) {
        return function (r, i) {
            i = r === t ? i : r, e ? e(t, i, n) : t.trigger("error", t, i, n)
        }
    };
    var T = function () {}, N = function (e, t, n) {
            var r;
            return t && t.hasOwnProperty("constructor") ? r = t.constructor : r = function () {
                e.apply(this, arguments)
            }, s.extend(r, e), T.prototype = e.prototype, r.prototype = new T, t && s.extend(r.prototype, t), n && s.extend(r, n), r.prototype.constructor = r, r.__super__ = e.prototype, r
        }, C = function (e, t) {
            return !e || !e[t] ? null : s.isFunction(e[t]) ? e[t]() : e[t]
        }, k = function () {
            throw new Error('A "url" property or function must be specified')
        }
}.call(this),
function () {
    function u(e, t) {
        var n = e.split("&"),
            r = this;
        _.each(n, function (e) {
            var n = e.split("=");
            n.length > 1 && n[1] && t(n[0], n[1])
        })
    }
    var e = /^\?(.*)/,
        t = /:([\w\d]+)/g,
        n = /\*([\w\d]+)/g,
        r = /[-[\]{}()+?.,\\^$|#\s]/g,
        i = /(\?.*)$/,
        s = /^([^\?]*)/;
    Backbone.Router.arrayValueSplit = "|";
    var o = Backbone.History.prototype.getFragment;
    _.extend(Backbone.History.prototype, {
        getFragment: function (e, t, n) {
            return e = o.apply(this, arguments), n && (e = e.replace(i, "")), e
        },
        getQueryParameters: function (t, n) {
            t = o.apply(this, arguments);
            var r = t.replace(s, ""),
                i = r.match(e);
            if(i) {
                r = i[1];
                var a = {};
                return u(r, function (e, t) {
                    a[e] ? _.isString(a[e]) ? a[e] = [a[e], t] : a[e].push(t) : a[e] = t
                }), a
            }
            return {}
        }
    }), _.extend(Backbone.Router.prototype, {
        getFragment: function (e, t, n) {
            return e = o.apply(this, arguments), n && (e = e.replace(i, "")), e
        },
        _routeToRegExp: function (e) {
            e = e.replace(r, "\\$&");
            var i = e.match(t, "([^/?]*)"),
                s = 0,
                o = !1;
            i && (e = e.replace(t, "([^/?]*)"), s = i.length), i = e.match(n), i ? (e = e.replace(n, "([^?]*)"), isWildcard = !0) : e += "([?]{1}.*)?";
            var u = new RegExp("^" + e + "$");
            return u.paramCount = s, u.isWildCard = o, u
        },
        _extractParameters: function (t, n) {
            var r = t.exec(n)
                .slice(1),
                i = r.length && r[r.length - 1] && r[r.length - 1].match(e);
            if(i) {
                var s = i[1],
                    o = {};
                if(s) {
                    var a = this;
                    u(s, function (e, t) {
                        a._setParamValue(e, t, o)
                    })
                }
                r[r.length - 1] = o
            }
            for(var f = 0; f < t.paramCount; f++) _.isString(r[f]) && (r[f] = decodeURIComponent(r[f]));
            return r
        },
        _setParamValue: function (e, t, n) {
            var r = e.split("."),
                i = n;
            for(var s = 0; s < r.length; s++) {
                var o = r[s];
                s === r.length - 1 ? i[o] = this._decodeParamValue(t, i[o]) : i = i[o] = i[o] || {}
            }
        },
        _decodeParamValue: function (e, t) {
            if(e.indexOf(Backbone.Router.arrayValueSplit) >= 0) {
                var n = e.split(Backbone.Router.arrayValueSplit);
                for(var r = n.length - 1; r >= 0; r--) n[r] ? n[r] = decodeURIComponent(n[r]) : n.splice(r, 1);
                return n
            }
            return t ? _.isArray(t) ? (t.push(e), t) : [t, e] : decodeURIComponent(e)
        },
        toFragment: function (e, t) {
            return t && (_.isString(t) || (t = this._toQueryString(t)), e += "?" + t), e
        },
        _toQueryString: function (e, t) {
            function n(e) {
                return e.replace(Backbone.Router.arrayValueSplit, encodeURIComponent(Backbone.Router.arrayValueSplit))
            }
            if(!e) return "";
            t = t || "";
            var r = "";
            for(var i in e) {
                var s = e[i];
                if(_.isString(s) || _.isNumber(s) || _.isBoolean(s) || _.isDate(s)) {
                    s = this._toQueryParam(s);
                    if(_.isBoolean(s) || s) r += (r ? "&" : "") + this._toQueryParamName(i, t) + "=" + n(encodeURIComponent(s))
                } else if(_.isArray(s)) {
                    var o = "";
                    for(var u in s) {
                        var a = this._toQueryParam(s[u]);
                        if(_.isBoolean(a) || a) o += Backbone.Router.arrayValueSplit + n(a)
                    }
                    o && (r += (r ? "&" : "") + this._toQueryParamName(i, t) + "=" + o)
                } else {
                    var f = this._toQueryString(s, this._toQueryParamName(i, t, !0));
                    f && (r += (r ? "&" : "") + f)
                }
            }
            return r
        },
        _toQueryParamName: function (e, t, n) {
            return t + e + (n ? "." : "")
        },
        _toQueryParam: function (e) {
            return _.isNull(e) || _.isUndefined(e) ? null : _.isDate(e) ? e.getDate()
                .getTime() : e
        }
    })
}();