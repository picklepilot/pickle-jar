var Jl = Object.defineProperty;
var Ql = (e, n, t) => n in e ? Jl(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var Ho = (e, n, t) => Ql(e, typeof n != "symbol" ? n + "" : n, t);
import { defineComponent as N, computed as T, provide as ke, createElementBlock as R, openBlock as E, normalizeClass as W, renderSlot as B, createElementVNode as I, createBlock as fe, withCtx as V, createCommentVNode as le, inject as me, ref as S, unref as P, h as ie, watch as re, onMounted as se, useSlots as Zl, Fragment as be, toDisplayString as ge, shallowRef as Do, getCurrentScope as es, onScopeDispose as Da, shallowReadonly as vn, triggerRef as Qr, onUnmounted as ye, watchEffect as Ve, cloneVNode as $a, nextTick as ze, toRaw as Ht, reactive as Kn, getCurrentInstance as Pa, Teleport as $o, createVNode as H, renderList as He, withModifiers as dn, withKeys as Ia, Transition as ft, normalizeStyle as Jt, mergeProps as nt, normalizeProps as rt, withDirectives as Yt, vShow as Xt, guardReactiveProps as pt, resolveDynamicComponent as Ra, createTextVNode as wt, createSlots as ts, readonly as xn, toRef as Zr, resolveComponent as ns, useAttrs as os } from "vue";
import _t from "clsx";
import { twMerge as Rt } from "tailwind-merge";
const rs = /* @__PURE__ */ N({
  __name: "AlertRoot",
  props: {
    flush: { type: Boolean, default: !1 },
    variant: { default: "info" },
    theme: { default: () => ({
      alert: ""
    }) }
  },
  setup(e) {
    function n(...l) {
      return Rt(_t(l));
    }
    const t = e, o = T(() => ({
      "bg-sky-50": t.variant === "info" || t.variant === "processing",
      "bg-yellow-50": t.variant === "warning",
      "bg-red-50": t.variant === "error",
      "bg-green-50": t.variant === "success",
      "bg-zinc-50": t.variant === "muted"
    })), r = T(() => ({
      "border-sky-200": t.variant === "info" || t.variant === "processing",
      "border-yellow-200": t.variant === "warning",
      "border-red-200": t.variant === "error",
      "border-green-200": t.variant === "success",
      "border-zinc-200": t.variant === "muted"
    })), a = T(() => ({
      "text-sky-800": t.variant === "info" || t.variant === "processing",
      "text-yellow-800": t.variant === "warning",
      "text-red-800": t.variant === "error",
      "text-green-800": t.variant === "success",
      "text-zinc-800": t.variant === "muted"
    }));
    return ke("alert-context", {
      variant: t.variant,
      bgClasses: o.value,
      borderClasses: r.value,
      colorClass: a.value
    }), (l, s) => (E(), R("div", {
      class: W(
        n(
          l.flush ? "rounded-0" : "rounded-md",
          "relative w-full rounded-lg border border-ring px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current bg-card text-card-foreground",
          l.theme.alert
        )
      )
    }, [
      B(l.$slots, "default")
    ], 2));
  }
}), as = /* @__PURE__ */ N({
  __name: "AlertClose",
  emits: ["close"],
  setup(e, { emit: n }) {
    return (t, o) => (E(), R("button", {
      onClick: o[0] || (o[0] = (r) => t.$emit("close", !1)),
      class: "absolute right-4 top-4 text-zinc-400 hover:text-zinc-800"
    }, o[1] || (o[1] = [
      I("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "20",
        fill: "currentColor",
        class: "bi bi-x h-6 w-6",
        viewBox: "0 0 16 16"
      }, [
        I("path", { d: "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" })
      ], -1)
    ])));
  }
}), ep = /* @__PURE__ */ N({
  __name: "Alert",
  props: {
    dismissable: { type: Boolean, default: !1 },
    flush: { type: Boolean, default: !1 },
    variant: { default: "info" },
    theme: { default: () => ({
      alert: ""
    }) }
  },
  emits: ["close"],
  setup(e, { emit: n }) {
    return (t, o) => (E(), fe(rs, {
      flush: t.flush,
      variant: t.variant,
      theme: t.theme
    }, {
      default: V(() => [
        B(t.$slots, "default"),
        t.dismissable ? (E(), fe(as, {
          key: 0,
          onClose: o[0] || (o[0] = (r) => t.$emit("close", r))
        })) : le("", !0)
      ]),
      _: 3
    }, 8, ["flush", "variant", "theme"]));
  }
}), ls = { class: "col-start-2 line-clamp-1 min-h-4 font-medium" }, tp = /* @__PURE__ */ N({
  __name: "AlertTitle",
  setup(e) {
    return (n, t) => (E(), R("div", ls, [
      B(n.$slots, "default")
    ]));
  }
}), ss = { class: "text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed" }, np = /* @__PURE__ */ N({
  __name: "AlertDescription",
  setup(e) {
    return (n, t) => (E(), R("div", ss, [
      B(n.$slots, "default")
    ]));
  }
}), is = { class: "shrink-0" }, op = /* @__PURE__ */ N({
  __name: "AlertIcon",
  setup(e) {
    return (n, t) => (E(), R("div", is, [
      B(n.$slots, "default")
    ]));
  }
}), us = { class: "flex items-center" }, rp = /* @__PURE__ */ N({
  __name: "AlertAction",
  setup(e) {
    return (n, t) => (E(), R("div", us, [
      B(n.$slots, "default")
    ]));
  }
}), ds = /* @__PURE__ */ N({
  __name: "Badge",
  props: {
    variant: { default: "default" },
    size: { default: "default" },
    theme: { default: () => ({
      badge: ""
    }) }
  },
  setup(e) {
    function n(...t) {
      return Rt(_t(t));
    }
    return (t, o) => (E(), R("span", {
      class: W(
        n(
          "inline-flex items-center justify-center rounded-full px-2.5 py-0.5 font-medium transition-colors",
          // Variant styles
          t.variant === "default" && "bg-primary text-primary-foreground hover:bg-primary/80",
          t.variant === "secondary" && "bg-secondary text-secondary-foreground hover:bg-secondary/80",
          t.variant === "destructive" && "bg-destructive text-destructive-foreground hover:bg-destructive/80",
          t.variant === "outline" && "text-foreground border border-border hover:bg-accent hover:text-accent-foreground",
          // Size styles
          t.size === "default" && "text-xs h-6",
          t.size === "sm" && "text-xs h-5",
          t.size === "lg" && "text-sm h-7",
          t.theme.badge
        )
      )
    }, [
      B(t.$slots, "default")
    ], 2));
  }
});
function cs(e, n) {
  const t = this;
  let o;
  return function(...r) {
    clearTimeout(o), o = setTimeout(() => {
      e.apply(t, r);
    }, n);
  };
}
function ce(...e) {
  return Rt(_t(e));
}
function Wo(...e) {
  return e.join(" ");
}
Wo(
  "relative rounded-lg border border-border rounded-md hover:bg-accent/50 shadow-xs focus-within:outline-none focus-within:ring-3 focus-within:ring-ring/40 transition-[box-shadow,color] flex items-start flex-wrap gap-1 p-1 flex-1 min-w-[120px] border-0 bg-transparent pl-2.5 py-0.5 pr-8 text-sm truncate ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50 absolute inset-y-0 right-0 items-center pr-2 text-muted-foreground size-4 text-inherit transition duration-200 ease-out translate-y-1 opacity-0 translate-y-0 opacity-100 duration-150 ease-in fixed left-0 z-10 overflow-x-hidden overflow-y-auto bg-popover p-3 text-base shadow-lg border focus:outline-hidden sm:text-sm border-t border-border px-2 first:border-t-0 py-2 first:pt-0 last:pb-0 font-medium -mx-2.5 cursor-pointer hover:bg-accent rounded-md px-2 py-1 flex w-full truncate bg-accent opacity-50 pointer-events-none"
), Wo(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 bg-destructive text-destructive-foreground hover:bg-destructive/90 border border-border bg-background hover:bg-accent hover:text-accent-foreground bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:bg-accent hover:text-accent-foreground text-primary underline-offset-4 hover:underline"
), Wo(
  "w-full overflow-hidden h-full border border-border bg-background rounded-lg sm:min-w-60 flex flex-col md:flex-row overflow-y-auto p-3 mb-4 last:mb-0 sortable-drag flex min-w-px grow items-center space-x-2 text-base font-semibold shrink-0 text-sm h-5 w-5 group flex w-full hover:bg-accent/50 rounded-md items-center gap-2 [&.selected]:bg-accent/50 drag-handle shrink-0 text-muted-foreground/70 hover:text-foreground rounded-sm hover:bg-black/5 size-3.5 ml-auto flex items-center space-x-1 p-1 size-4 sticky bottom-0 z-2 gap-2 p-3 bg-background/90 backdrop-blur-sm flex -space-x-px transition duration-200 ease-out translate-y-1 opacity-0 translate-y-0 opacity-100 duration-150 ease-in"
);
const fs = ["aria-disabled", "aria-busy", "aria-expanded", "disabled"], ps = {
  key: 0,
  "aria-hidden": "true"
}, ms = { key: 0 }, vs = /* @__PURE__ */ N({
  __name: "Button",
  props: {
    variant: { default: "default" },
    size: { default: "default" },
    disabled: { type: Boolean, default: !1 },
    processing: { type: Boolean, default: !1 },
    round: { type: Boolean, default: !1 },
    theme: { default: () => ({
      button: "",
      buttonDisabled: "",
      buttonIcon: ""
    }) },
    icon: { type: Boolean }
  },
  emits: ["click"],
  setup(e, { emit: n }) {
    const t = n, o = me("dropdown"), r = S(), a = T(() => {
      var i, u, d, c;
      return (i = o == null ? void 0 : o.triggerRef) == null || i.value, ((d = (u = o == null ? void 0 : o.triggerRef) == null ? void 0 : u.value) == null ? void 0 : d.querySelector("button")) === r.value && ((c = o == null ? void 0 : o.isOpen) == null ? void 0 : c.value) === !0;
    });
    function l(s) {
      s.preventDefault(), t("click", s);
    }
    return (s, i) => (E(), R("button", {
      ref_key: "buttonRef",
      ref: r,
      onClick: l,
      class: W(
        P(ce)(
          "inline-flex items-center cursor-pointer justify-center whitespace-nowrap text-sm ring-offset-background focus:outline-none focus:ring-3 focus:ring-ring/40 transition-[box-shadow,color] disabled:pointer-events-none disabled:opacity-50 gap-1.5",
          // Svg styles
          "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0",
          // Border radius - round prop overrides default rounded-md
          s.round ? "rounded-full" : "rounded-md",
          // Variant styles
          s.variant === "default" && "bg-primary text-primary-foreground hover:bg-primary/90",
          s.variant === "destructive" && "bg-destructive text-destructive-foreground hover:bg-destructive/90",
          s.variant === "outline" && "border border-ring bg-background hover:bg-accent hover:text-accent-foreground",
          s.variant === "secondary" && "bg-secondary text-secondary-foreground hover:bg-secondary/80",
          s.variant === "ghost" && "hover:bg-accent hover:text-accent-foreground",
          s.variant === "link" && "text-primary underline-offset-4 hover:underline",
          // Size styles
          s.size === "default" && "px-4 py-2",
          s.size === "lg" && "px-5 py-2 text-lg",
          s.size === "sm" && "px-3 py-1.5",
          s.size === "xs" && "px-2 py-1",
          s.size === "icon" && "size-9",
          a.value && "outline-none ring-3 ring-ring",
          s.theme.button
        )
      ),
      "aria-disabled": s.disabled,
      "aria-busy": s.processing,
      "aria-expanded": a.value,
      disabled: s.disabled
    }, [
      B(s.$slots, "default", {}, void 0, !0),
      s.processing ? (E(), R("span", ps, [
        s.$slots.processing ? (E(), R("span", ms, [
          B(s.$slots, "processing", {}, void 0, !0)
        ])) : le("", !0)
      ])) : le("", !0)
    ], 10, fs));
  }
}), tn = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [o, r] of n)
    t[o] = r;
  return t;
}, Ze = /* @__PURE__ */ tn(vs, [["__scopeId", "data-v-8b6e09a3"]]);
/**
 * @license lucide-vue-next v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ea = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), gs = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (n, t, o) => o ? o.toUpperCase() : t.toLowerCase()
), hs = (e) => {
  const n = gs(e);
  return n.charAt(0).toUpperCase() + n.slice(1);
}, bs = (...e) => e.filter((n, t, o) => !!n && n.trim() !== "" && o.indexOf(n) === t).join(" ").trim();
/**
 * @license lucide-vue-next v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var oo = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
/**
 * @license lucide-vue-next v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ys = ({ size: e, strokeWidth: n = 2, absoluteStrokeWidth: t, color: o, iconNode: r, name: a, class: l, ...s }, { slots: i }) => ie(
  "svg",
  {
    ...oo,
    width: e || oo.width,
    height: e || oo.height,
    stroke: o || oo.stroke,
    "stroke-width": t ? Number(n) * 24 / Number(e) : n,
    class: bs(
      "lucide",
      ...a ? [`lucide-${ea(hs(a))}-icon`, `lucide-${ea(a)}`] : ["lucide-icon"]
    ),
    ...s
  },
  [...r.map((u) => ie(...u)), ...i.default ? [i.default()] : []]
);
/**
 * @license lucide-vue-next v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nn = (e, n) => (t, { slots: o }) => ie(
  ys,
  {
    ...t,
    iconNode: n,
    name: e
  },
  o
);
/**
 * @license lucide-vue-next v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ws = nn("check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-vue-next v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yn = nn("chevron-down", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-vue-next v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xs = nn("clipboard", [
  ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }],
  [
    "path",
    {
      d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
      key: "116196"
    }
  ]
]);
/**
 * @license lucide-vue-next v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cs = nn("ellipsis-vertical", [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "12", cy: "5", r: "1", key: "gxeob9" }],
  ["circle", { cx: "12", cy: "19", r: "1", key: "lyex9k" }]
]);
/**
 * @license lucide-vue-next v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ks = nn("grip-horizontal", [
  ["circle", { cx: "12", cy: "9", r: "1", key: "124mty" }],
  ["circle", { cx: "19", cy: "9", r: "1", key: "1ruzo2" }],
  ["circle", { cx: "5", cy: "9", r: "1", key: "1a8b28" }],
  ["circle", { cx: "12", cy: "15", r: "1", key: "1e56xg" }],
  ["circle", { cx: "19", cy: "15", r: "1", key: "1a92ep" }],
  ["circle", { cx: "5", cy: "15", r: "1", key: "5r1jwy" }]
]);
/**
 * @license lucide-vue-next v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ss = nn("loader", [
  ["path", { d: "M12 2v4", key: "3427ic" }],
  ["path", { d: "m16.2 7.8 2.9-2.9", key: "r700ao" }],
  ["path", { d: "M18 12h4", key: "wj9ykh" }],
  ["path", { d: "m16.2 16.2 2.9 2.9", key: "1bxg5t" }],
  ["path", { d: "M12 18v4", key: "jadmvz" }],
  ["path", { d: "m4.9 19.1 2.9-2.9", key: "bwix9q" }],
  ["path", { d: "M2 12h4", key: "j09sii" }],
  ["path", { d: "m4.9 4.9 2.9 2.9", key: "giyufr" }]
]);
/**
 * @license lucide-vue-next v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _s = nn("trash-2", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
]);
/**
 * @license lucide-vue-next v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Po = nn("x", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
function Aa() {
  const e = S({
    isDark: !1,
    themeClass: "light"
  }), n = () => {
    const a = document.documentElement.classList.contains("dark");
    e.value = {
      isDark: a,
      themeClass: a ? "dark" : "light"
    };
  }, t = () => {
    const a = !e.value.isDark;
    document.documentElement.classList.toggle("dark", a), n(), window.dispatchEvent(
      new CustomEvent("storybook-theme-change", {
        detail: {
          isDark: a,
          themeClass: a ? "dark" : "light"
        }
      })
    );
  }, o = (a) => {
    document.documentElement.classList.toggle("dark", a), n(), window.dispatchEvent(
      new CustomEvent("storybook-theme-change", {
        detail: {
          isDark: a,
          themeClass: a ? "dark" : "light"
        }
      })
    );
  }, r = (a) => {
    if (a.detail) {
      const { isDark: l } = a.detail;
      document.documentElement.classList.toggle("dark", l), n();
    }
  };
  return re(
    () => e.value,
    (a) => {
      console.log("Theme state changed:", a);
    },
    { deep: !0 }
  ), se(() => {
    n(), window.addEventListener(
      "storybook-theme-change",
      r
    );
    const a = new MutationObserver((l) => {
      l.forEach((s) => {
        s.type === "attributes" && s.attributeName === "class" && n();
      });
    });
    return a.observe(document.documentElement, {
      attributes: !0,
      attributeFilter: ["class"]
    }), () => {
      window.removeEventListener(
        "storybook-theme-change",
        r
      ), a.disconnect();
    };
  }), {
    themeState: e,
    isDark: T(() => e.value.isDark),
    themeClass: T(() => e.value.themeClass),
    background: T(
      () => e.value.isDark ? "dark" : "light"
    ),
    toggleTheme: t,
    setTheme: o,
    updateThemeState: n
  };
}
const Es = { key: 2 }, Os = ["innerHTML"], Ts = { class: "text-sm" }, Ds = /* @__PURE__ */ N({
  __name: "CodeBlock",
  props: {
    code: {},
    language: { default: "typescript" },
    shikiTheme: { default: "min-dark" },
    autoTheme: { type: Boolean, default: !1 },
    darkTheme: { default: "min-dark" },
    lightTheme: { default: "min-light" },
    showHeader: { type: Boolean, default: !0 },
    showCopyButton: { type: Boolean, default: !0 },
    copyButtonLabel: { default: "Copy" },
    codeToHtmlOptions: { default: () => ({}) },
    customTheme: { default: () => ({
      container: "",
      header: "",
      languageLabel: "",
      copyButton: "",
      content: "",
      pre: "",
      code: "",
      loading: "",
      error: "",
      tabNav: "",
      demo: ""
    }) }
  },
  setup(e) {
    const n = {
      js: "javascript",
      ts: "typescript",
      md: "markdown",
      sh: "bash",
      shell: "bash"
    }, t = (v) => {
      const x = v.toLowerCase();
      return n[x] || x;
    }, o = /* @__PURE__ */ new Map();
    function r(...v) {
      return Rt(_t(v));
    }
    const a = e, l = Zl(), s = S("demo"), i = S(""), u = S(!0), d = S(""), c = S(!1), m = S(null), f = T(() => !!l.demo), { isDark: p } = Aa(), g = T(() => a.autoTheme ? p.value ? a.darkTheme : a.lightTheme : a.shikiTheme), b = async () => {
      try {
        u.value = !0, d.value = "";
        const v = t(a.language), x = `${v}-${g.value}`;
        if (o.has(x)) {
          m.value = o.get(x), await w();
          return;
        }
        const { getSingletonHighlighter: h } = await import("shiki");
        m.value = await h({
          themes: [g.value],
          langs: [v]
        }), o.set(x, m.value), await w();
      } catch (v) {
        console.error("Failed to initialize highlighter:", v), d.value = v instanceof Error ? v.message : "Failed to initialize syntax highlighter";
      } finally {
        u.value = !1;
      }
    }, w = async () => {
      var v;
      if (m.value)
        try {
          const x = t(a.language), h = {
            lang: x,
            theme: g.value,
            colorReplacements: {
              "#24292e": "#171717",
              "#ffffff": "#f5f5f5",
              "#fff": "#f5f5f5"
            }
          }, C = {
            ...h,
            ...a.codeToHtmlOptions,
            // Ensure lang and theme are always set correctly
            lang: x,
            theme: g.value,
            // Merge colorReplacements if provided
            colorReplacements: {
              ...h.colorReplacements,
              ...(v = a.codeToHtmlOptions) == null ? void 0 : v.colorReplacements
            }
          };
          i.value = m.value.codeToHtml(
            a.code,
            C
          );
        } catch (x) {
          console.error("Failed to highlight code:", x), d.value = x instanceof Error ? x.message : "Failed to highlight code";
        }
    }, y = async () => {
      try {
        await navigator.clipboard.writeText(a.code), c.value = !0, setTimeout(() => {
          c.value = !1;
        }, 2e3);
      } catch (v) {
        console.error("Failed to copy to clipboard:", v);
      }
    };
    return re(
      [
        () => a.code,
        () => a.language,
        g,
        () => a.codeToHtmlOptions
      ],
      async (v, x) => {
        v[1] !== (x == null ? void 0 : x[1]) ? await b() : await w();
      },
      {
        immediate: !0
      }
    ), se(b), (v, x) => (E(), R("div", {
      class: W(
        r(
          "relative overflow-hidden rounded-lg border border-border bg-muted/50",
          v.customTheme.container
        )
      )
    }, [
      v.showHeader ? (E(), R("div", {
        key: 0,
        class: W(
          r(
            "flex border-b border-border bg-muted/30 h-10 pr-4",
            v.customTheme.tabNav
          )
        )
      }, [
        f.value ? (E(), R(be, { key: 0 }, [
          I("button", {
            onClick: x[0] || (x[0] = (h) => s.value = "demo"),
            class: W(
              r(
                "px-4 py-2 text-sm font-medium transition-colors",
                s.value === "demo" ? "bg-background text-foreground border-b-2 border-primary" : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              )
            )
          }, " Demo ", 2),
          I("button", {
            onClick: x[1] || (x[1] = (h) => s.value = "code"),
            class: W(
              r(
                "px-4 py-2 text-sm font-medium transition-colors",
                s.value === "code" ? "bg-background text-foreground border-b-2 border-primary" : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              )
            )
          }, " Code ", 2)
        ], 64)) : le("", !0),
        I("span", {
          class: W(
            r(
              "ml-auto self-center font-mono text-muted-foreground capitalize text-sm",
              v.customTheme.languageLabel
            )
          )
        }, ge(v.language), 3)
      ], 2)) : le("", !0),
      f.value && s.value === "demo" ? (E(), R("div", {
        key: 1,
        class: W(r("p-4", v.customTheme.demo))
      }, [
        B(v.$slots, "demo", {}, void 0, !0)
      ], 2)) : le("", !0),
      !f.value || s.value === "code" ? (E(), R("div", Es, [
        I("div", {
          class: W(r("relative", v.customTheme.content))
        }, [
          v.showCopyButton ? (E(), fe(Ze, {
            key: 0,
            onClick: y,
            class: W(
              r(
                "absolute right-2 top-2 z-10 inline-flex items-center gap-1 rounded bg-transparent size-9 px-2 py-1 text-xs font-medium text-muted-foreground transition-colors hover:bg-transparent hover:text-accent-foreground",
                v.customTheme.copyButton
              )
            ),
            "aria-label": v.copyButtonLabel,
            variant: "ghost",
            size: "sm"
          }, {
            default: V(() => [
              c.value ? (E(), fe(P(ws), {
                key: 0,
                class: "size-4 text-green-500 shrink-0"
              })) : (E(), fe(P(xs), {
                key: 1,
                class: "size-4 shrink-0"
              }))
            ]),
            _: 1
          }, 8, ["class", "aria-label"])) : le("", !0),
          I("div", {
            class: W(r("overflow-auto max-h-96", v.customTheme.content))
          }, [
            u.value ? (E(), R("div", {
              key: 1,
              class: W(
                r(
                  "flex items-center justify-center py-8 text-muted-foreground",
                  v.customTheme.loading
                )
              )
            }, x[2] || (x[2] = [
              I("span", { class: "text-sm" }, "Loading syntax highlighting...", -1)
            ]), 2)) : (E(), R("div", {
              key: 0,
              class: W(
                r(
                  "font-mono text-sm leading-relaxed [&>pre]:p-4",
                  v.customTheme.pre
                )
              ),
              innerHTML: i.value
            }, null, 10, Os)),
            d.value ? (E(), R("div", {
              key: 2,
              class: W(
                r(
                  "flex items-center justify-center py-8 text-destructive",
                  v.customTheme.error
                )
              )
            }, [
              I("span", Ts, ge(d.value), 1)
            ], 2)) : le("", !0)
          ], 2)
        ], 2)
      ])) : le("", !0)
    ], 2));
  }
}), ap = /* @__PURE__ */ tn(Ds, [["__scopeId", "data-v-50694f4e"]]), $s = ["disabled", "type", "placeholder", "value"], Ma = /* @__PURE__ */ N({
  __name: "Input",
  props: {
    disabled: { type: Boolean },
    type: {},
    placeholder: {},
    value: {},
    modelValue: {},
    theme: {}
  },
  emits: ["update:modelValue", "update:value", "input"],
  setup(e, { emit: n }) {
    const t = n, o = (r) => {
      const a = r.target;
      t("update:modelValue", a.value), t("update:value", a.value), t("input", a.value);
    };
    return (r, a) => {
      var l;
      return E(), R("input", {
        disabled: r.disabled,
        type: r.type,
        placeholder: r.placeholder,
        value: r.modelValue ?? r.value,
        onInput: o,
        class: W(
          P(ce)(
            "flex w-full rounded-md border border-ring bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground/70 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40 transition-[box-shadow,color] disabled:cursor-not-allowed disabled:opacity-50",
            ((l = r.theme) == null ? void 0 : l.input) || ""
          )
        )
      }, null, 42, $s);
    };
  }
}), Ps = ["top", "right", "bottom", "left"], ta = ["start", "end"], na = /* @__PURE__ */ Ps.reduce((e, n) => e.concat(n, n + "-" + ta[0], n + "-" + ta[1]), []), Qt = Math.min, st = Math.max, bo = Math.round, ro = Math.floor, Tt = (e) => ({
  x: e,
  y: e
}), Is = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Rs = {
  start: "end",
  end: "start"
};
function ir(e, n, t) {
  return st(e, Qt(n, t));
}
function Vt(e, n) {
  return typeof e == "function" ? e(n) : e;
}
function Ct(e) {
  return e.split("-")[0];
}
function xt(e) {
  return e.split("-")[1];
}
function xr(e) {
  return e === "x" ? "y" : "x";
}
function Cr(e) {
  return e === "y" ? "height" : "width";
}
function Ot(e) {
  return ["top", "bottom"].includes(Ct(e)) ? "y" : "x";
}
function kr(e) {
  return xr(Ot(e));
}
function La(e, n, t) {
  t === void 0 && (t = !1);
  const o = xt(e), r = kr(e), a = Cr(r);
  let l = r === "x" ? o === (t ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return n.reference[a] > n.floating[a] && (l = wo(l)), [l, wo(l)];
}
function As(e) {
  const n = wo(e);
  return [yo(e), n, yo(n)];
}
function yo(e) {
  return e.replace(/start|end/g, (n) => Rs[n]);
}
function Ms(e, n, t) {
  const o = ["left", "right"], r = ["right", "left"], a = ["top", "bottom"], l = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return t ? n ? r : o : n ? o : r;
    case "left":
    case "right":
      return n ? a : l;
    default:
      return [];
  }
}
function Ls(e, n, t, o) {
  const r = xt(e);
  let a = Ms(Ct(e), t === "start", o);
  return r && (a = a.map((l) => l + "-" + r), n && (a = a.concat(a.map(yo)))), a;
}
function wo(e) {
  return e.replace(/left|right|bottom|top/g, (n) => Is[n]);
}
function Fs(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Fa(e) {
  return typeof e != "number" ? Fs(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function xo(e) {
  const {
    x: n,
    y: t,
    width: o,
    height: r
  } = e;
  return {
    width: o,
    height: r,
    top: t,
    left: n,
    right: n + o,
    bottom: t + r,
    x: n,
    y: t
  };
}
function oa(e, n, t) {
  let {
    reference: o,
    floating: r
  } = e;
  const a = Ot(n), l = kr(n), s = Cr(l), i = Ct(n), u = a === "y", d = o.x + o.width / 2 - r.width / 2, c = o.y + o.height / 2 - r.height / 2, m = o[s] / 2 - r[s] / 2;
  let f;
  switch (i) {
    case "top":
      f = {
        x: d,
        y: o.y - r.height
      };
      break;
    case "bottom":
      f = {
        x: d,
        y: o.y + o.height
      };
      break;
    case "right":
      f = {
        x: o.x + o.width,
        y: c
      };
      break;
    case "left":
      f = {
        x: o.x - r.width,
        y: c
      };
      break;
    default:
      f = {
        x: o.x,
        y: o.y
      };
  }
  switch (xt(n)) {
    case "start":
      f[l] -= m * (t && u ? -1 : 1);
      break;
    case "end":
      f[l] += m * (t && u ? -1 : 1);
      break;
  }
  return f;
}
const Bs = async (e, n, t) => {
  const {
    placement: o = "bottom",
    strategy: r = "absolute",
    middleware: a = [],
    platform: l
  } = t, s = a.filter(Boolean), i = await (l.isRTL == null ? void 0 : l.isRTL(n));
  let u = await l.getElementRects({
    reference: e,
    floating: n,
    strategy: r
  }), {
    x: d,
    y: c
  } = oa(u, o, i), m = o, f = {}, p = 0;
  for (let g = 0; g < s.length; g++) {
    const {
      name: b,
      fn: w
    } = s[g], {
      x: y,
      y: v,
      data: x,
      reset: h
    } = await w({
      x: d,
      y: c,
      initialPlacement: o,
      placement: m,
      strategy: r,
      middlewareData: f,
      rects: u,
      platform: l,
      elements: {
        reference: e,
        floating: n
      }
    });
    d = y ?? d, c = v ?? c, f = {
      ...f,
      [b]: {
        ...f[b],
        ...x
      }
    }, h && p <= 50 && (p++, typeof h == "object" && (h.placement && (m = h.placement), h.rects && (u = h.rects === !0 ? await l.getElementRects({
      reference: e,
      floating: n,
      strategy: r
    }) : h.rects), {
      x: d,
      y: c
    } = oa(u, m, i)), g = -1);
  }
  return {
    x: d,
    y: c,
    placement: m,
    strategy: r,
    middlewareData: f
  };
};
async function Io(e, n) {
  var t;
  n === void 0 && (n = {});
  const {
    x: o,
    y: r,
    platform: a,
    rects: l,
    elements: s,
    strategy: i
  } = e, {
    boundary: u = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: c = "floating",
    altBoundary: m = !1,
    padding: f = 0
  } = Vt(n, e), p = Fa(f), b = s[m ? c === "floating" ? "reference" : "floating" : c], w = xo(await a.getClippingRect({
    element: (t = await (a.isElement == null ? void 0 : a.isElement(b))) == null || t ? b : b.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(s.floating)),
    boundary: u,
    rootBoundary: d,
    strategy: i
  })), y = c === "floating" ? {
    x: o,
    y: r,
    width: l.floating.width,
    height: l.floating.height
  } : l.reference, v = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(s.floating)), x = await (a.isElement == null ? void 0 : a.isElement(v)) ? await (a.getScale == null ? void 0 : a.getScale(v)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, h = xo(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: y,
    offsetParent: v,
    strategy: i
  }) : y);
  return {
    top: (w.top - h.top + p.top) / x.y,
    bottom: (h.bottom - w.bottom + p.bottom) / x.y,
    left: (w.left - h.left + p.left) / x.x,
    right: (h.right - w.right + p.right) / x.x
  };
}
const Vs = (e) => ({
  name: "arrow",
  options: e,
  async fn(n) {
    const {
      x: t,
      y: o,
      placement: r,
      rects: a,
      platform: l,
      elements: s,
      middlewareData: i
    } = n, {
      element: u,
      padding: d = 0
    } = Vt(e, n) || {};
    if (u == null)
      return {};
    const c = Fa(d), m = {
      x: t,
      y: o
    }, f = kr(r), p = Cr(f), g = await l.getDimensions(u), b = f === "y", w = b ? "top" : "left", y = b ? "bottom" : "right", v = b ? "clientHeight" : "clientWidth", x = a.reference[p] + a.reference[f] - m[f] - a.floating[p], h = m[f] - a.reference[f], C = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(u));
    let k = C ? C[v] : 0;
    (!k || !await (l.isElement == null ? void 0 : l.isElement(C))) && (k = s.floating[v] || a.floating[p]);
    const O = x / 2 - h / 2, A = k / 2 - g[p] / 2 - 1, _ = Qt(c[w], A), D = Qt(c[y], A), z = _, j = k - g[p] - D, K = k / 2 - g[p] / 2 + O, Y = ir(z, K, j), Z = !i.arrow && xt(r) != null && K !== Y && a.reference[p] / 2 - (K < z ? _ : D) - g[p] / 2 < 0, pe = Z ? K < z ? K - z : K - j : 0;
    return {
      [f]: m[f] + pe,
      data: {
        [f]: Y,
        centerOffset: K - Y - pe,
        ...Z && {
          alignmentOffset: pe
        }
      },
      reset: Z
    };
  }
});
function Ns(e, n, t) {
  return (e ? [...t.filter((r) => xt(r) === e), ...t.filter((r) => xt(r) !== e)] : t.filter((r) => Ct(r) === r)).filter((r) => e ? xt(r) === e || (n ? yo(r) !== r : !1) : !0);
}
const zs = function(e) {
  return e === void 0 && (e = {}), {
    name: "autoPlacement",
    options: e,
    async fn(n) {
      var t, o, r;
      const {
        rects: a,
        middlewareData: l,
        placement: s,
        platform: i,
        elements: u
      } = n, {
        crossAxis: d = !1,
        alignment: c,
        allowedPlacements: m = na,
        autoAlignment: f = !0,
        ...p
      } = Vt(e, n), g = c !== void 0 || m === na ? Ns(c || null, f, m) : m, b = await Io(n, p), w = ((t = l.autoPlacement) == null ? void 0 : t.index) || 0, y = g[w];
      if (y == null)
        return {};
      const v = La(y, a, await (i.isRTL == null ? void 0 : i.isRTL(u.floating)));
      if (s !== y)
        return {
          reset: {
            placement: g[0]
          }
        };
      const x = [b[Ct(y)], b[v[0]], b[v[1]]], h = [...((o = l.autoPlacement) == null ? void 0 : o.overflows) || [], {
        placement: y,
        overflows: x
      }], C = g[w + 1];
      if (C)
        return {
          data: {
            index: w + 1,
            overflows: h
          },
          reset: {
            placement: C
          }
        };
      const k = h.map((_) => {
        const D = xt(_.placement);
        return [_.placement, D && d ? (
          // Check along the mainAxis and main crossAxis side.
          _.overflows.slice(0, 2).reduce((z, j) => z + j, 0)
        ) : (
          // Check only the mainAxis.
          _.overflows[0]
        ), _.overflows];
      }).sort((_, D) => _[1] - D[1]), A = ((r = k.filter((_) => _[2].slice(
        0,
        // Aligned placements should not check their opposite crossAxis
        // side.
        xt(_[0]) ? 2 : 3
      ).every((D) => D <= 0))[0]) == null ? void 0 : r[0]) || k[0][0];
      return A !== s ? {
        data: {
          index: w + 1,
          overflows: h
        },
        reset: {
          placement: A
        }
      } : {};
    }
  };
}, js = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(n) {
      var t, o;
      const {
        placement: r,
        middlewareData: a,
        rects: l,
        initialPlacement: s,
        platform: i,
        elements: u
      } = n, {
        mainAxis: d = !0,
        crossAxis: c = !0,
        fallbackPlacements: m,
        fallbackStrategy: f = "bestFit",
        fallbackAxisSideDirection: p = "none",
        flipAlignment: g = !0,
        ...b
      } = Vt(e, n);
      if ((t = a.arrow) != null && t.alignmentOffset)
        return {};
      const w = Ct(r), y = Ot(s), v = Ct(s) === s, x = await (i.isRTL == null ? void 0 : i.isRTL(u.floating)), h = m || (v || !g ? [wo(s)] : As(s)), C = p !== "none";
      !m && C && h.push(...Ls(s, g, p, x));
      const k = [s, ...h], O = await Io(n, b), A = [];
      let _ = ((o = a.flip) == null ? void 0 : o.overflows) || [];
      if (d && A.push(O[w]), c) {
        const K = La(r, l, x);
        A.push(O[K[0]], O[K[1]]);
      }
      if (_ = [..._, {
        placement: r,
        overflows: A
      }], !A.every((K) => K <= 0)) {
        var D, z;
        const K = (((D = a.flip) == null ? void 0 : D.index) || 0) + 1, Y = k[K];
        if (Y && (!(c === "alignment" ? y !== Ot(Y) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        _.every((ve) => ve.overflows[0] > 0 && Ot(ve.placement) === y)))
          return {
            data: {
              index: K,
              overflows: _
            },
            reset: {
              placement: Y
            }
          };
        let Z = (z = _.filter((pe) => pe.overflows[0] <= 0).sort((pe, ve) => pe.overflows[1] - ve.overflows[1])[0]) == null ? void 0 : z.placement;
        if (!Z)
          switch (f) {
            case "bestFit": {
              var j;
              const pe = (j = _.filter((ve) => {
                if (C) {
                  const ne = Ot(ve.placement);
                  return ne === y || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  ne === "y";
                }
                return !0;
              }).map((ve) => [ve.placement, ve.overflows.filter((ne) => ne > 0).reduce((ne, Se) => ne + Se, 0)]).sort((ve, ne) => ve[1] - ne[1])[0]) == null ? void 0 : j[0];
              pe && (Z = pe);
              break;
            }
            case "initialPlacement":
              Z = s;
              break;
          }
        if (r !== Z)
          return {
            reset: {
              placement: Z
            }
          };
      }
      return {};
    }
  };
};
async function Gs(e, n) {
  const {
    placement: t,
    platform: o,
    elements: r
  } = e, a = await (o.isRTL == null ? void 0 : o.isRTL(r.floating)), l = Ct(t), s = xt(t), i = Ot(t) === "y", u = ["left", "top"].includes(l) ? -1 : 1, d = a && i ? -1 : 1, c = Vt(n, e);
  let {
    mainAxis: m,
    crossAxis: f,
    alignmentAxis: p
  } = typeof c == "number" ? {
    mainAxis: c,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: c.mainAxis || 0,
    crossAxis: c.crossAxis || 0,
    alignmentAxis: c.alignmentAxis
  };
  return s && typeof p == "number" && (f = s === "end" ? p * -1 : p), i ? {
    x: f * d,
    y: m * u
  } : {
    x: m * u,
    y: f * d
  };
}
const Hs = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(n) {
      var t, o;
      const {
        x: r,
        y: a,
        placement: l,
        middlewareData: s
      } = n, i = await Gs(n, e);
      return l === ((t = s.offset) == null ? void 0 : t.placement) && (o = s.arrow) != null && o.alignmentOffset ? {} : {
        x: r + i.x,
        y: a + i.y,
        data: {
          ...i,
          placement: l
        }
      };
    }
  };
}, Ws = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(n) {
      const {
        x: t,
        y: o,
        placement: r
      } = n, {
        mainAxis: a = !0,
        crossAxis: l = !1,
        limiter: s = {
          fn: (b) => {
            let {
              x: w,
              y
            } = b;
            return {
              x: w,
              y
            };
          }
        },
        ...i
      } = Vt(e, n), u = {
        x: t,
        y: o
      }, d = await Io(n, i), c = Ot(Ct(r)), m = xr(c);
      let f = u[m], p = u[c];
      if (a) {
        const b = m === "y" ? "top" : "left", w = m === "y" ? "bottom" : "right", y = f + d[b], v = f - d[w];
        f = ir(y, f, v);
      }
      if (l) {
        const b = c === "y" ? "top" : "left", w = c === "y" ? "bottom" : "right", y = p + d[b], v = p - d[w];
        p = ir(y, p, v);
      }
      const g = s.fn({
        ...n,
        [m]: f,
        [c]: p
      });
      return {
        ...g,
        data: {
          x: g.x - t,
          y: g.y - o,
          enabled: {
            [m]: a,
            [c]: l
          }
        }
      };
    }
  };
}, Us = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(n) {
      const {
        x: t,
        y: o,
        placement: r,
        rects: a,
        middlewareData: l
      } = n, {
        offset: s = 0,
        mainAxis: i = !0,
        crossAxis: u = !0
      } = Vt(e, n), d = {
        x: t,
        y: o
      }, c = Ot(r), m = xr(c);
      let f = d[m], p = d[c];
      const g = Vt(s, n), b = typeof g == "number" ? {
        mainAxis: g,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...g
      };
      if (i) {
        const v = m === "y" ? "height" : "width", x = a.reference[m] - a.floating[v] + b.mainAxis, h = a.reference[m] + a.reference[v] - b.mainAxis;
        f < x ? f = x : f > h && (f = h);
      }
      if (u) {
        var w, y;
        const v = m === "y" ? "width" : "height", x = ["top", "left"].includes(Ct(r)), h = a.reference[c] - a.floating[v] + (x && ((w = l.offset) == null ? void 0 : w[c]) || 0) + (x ? 0 : b.crossAxis), C = a.reference[c] + a.reference[v] + (x ? 0 : ((y = l.offset) == null ? void 0 : y[c]) || 0) - (x ? b.crossAxis : 0);
        p < h ? p = h : p > C && (p = C);
      }
      return {
        [m]: f,
        [c]: p
      };
    }
  };
}, qs = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(n) {
      var t, o;
      const {
        placement: r,
        rects: a,
        platform: l,
        elements: s
      } = n, {
        apply: i = () => {
        },
        ...u
      } = Vt(e, n), d = await Io(n, u), c = Ct(r), m = xt(r), f = Ot(r) === "y", {
        width: p,
        height: g
      } = a.floating;
      let b, w;
      c === "top" || c === "bottom" ? (b = c, w = m === (await (l.isRTL == null ? void 0 : l.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (w = c, b = m === "end" ? "top" : "bottom");
      const y = g - d.top - d.bottom, v = p - d.left - d.right, x = Qt(g - d[b], y), h = Qt(p - d[w], v), C = !n.middlewareData.shift;
      let k = x, O = h;
      if ((t = n.middlewareData.shift) != null && t.enabled.x && (O = v), (o = n.middlewareData.shift) != null && o.enabled.y && (k = y), C && !m) {
        const _ = st(d.left, 0), D = st(d.right, 0), z = st(d.top, 0), j = st(d.bottom, 0);
        f ? O = p - 2 * (_ !== 0 || D !== 0 ? _ + D : st(d.left, d.right)) : k = g - 2 * (z !== 0 || j !== 0 ? z + j : st(d.top, d.bottom));
      }
      await i({
        ...n,
        availableWidth: O,
        availableHeight: k
      });
      const A = await l.getDimensions(s.floating);
      return p !== A.width || g !== A.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Ro() {
  return typeof window < "u";
}
function fn(e) {
  return Sr(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function ut(e) {
  var n;
  return (e == null || (n = e.ownerDocument) == null ? void 0 : n.defaultView) || window;
}
function At(e) {
  var n;
  return (n = (Sr(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : n.documentElement;
}
function Sr(e) {
  return Ro() ? e instanceof Node || e instanceof ut(e).Node : !1;
}
function kt(e) {
  return Ro() ? e instanceof Element || e instanceof ut(e).Element : !1;
}
function $t(e) {
  return Ro() ? e instanceof HTMLElement || e instanceof ut(e).HTMLElement : !1;
}
function ra(e) {
  return !Ro() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof ut(e).ShadowRoot;
}
function Xn(e) {
  const {
    overflow: n,
    overflowX: t,
    overflowY: o,
    display: r
  } = St(e);
  return /auto|scroll|overlay|hidden|clip/.test(n + o + t) && !["inline", "contents"].includes(r);
}
function Ks(e) {
  return ["table", "td", "th"].includes(fn(e));
}
function Ao(e) {
  return [":popover-open", ":modal"].some((n) => {
    try {
      return e.matches(n);
    } catch {
      return !1;
    }
  });
}
function _r(e) {
  const n = Er(), t = kt(e) ? St(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((o) => t[o] ? t[o] !== "none" : !1) || (t.containerType ? t.containerType !== "normal" : !1) || !n && (t.backdropFilter ? t.backdropFilter !== "none" : !1) || !n && (t.filter ? t.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((o) => (t.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (t.contain || "").includes(o));
}
function Ys(e) {
  let n = Zt(e);
  for (; $t(n) && !_n(n); ) {
    if (_r(n))
      return n;
    if (Ao(n))
      return null;
    n = Zt(n);
  }
  return null;
}
function Er() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function _n(e) {
  return ["html", "body", "#document"].includes(fn(e));
}
function St(e) {
  return ut(e).getComputedStyle(e);
}
function Mo(e) {
  return kt(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Zt(e) {
  if (fn(e) === "html")
    return e;
  const n = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    ra(e) && e.host || // Fallback.
    At(e)
  );
  return ra(n) ? n.host : n;
}
function Ba(e) {
  const n = Zt(e);
  return _n(n) ? e.ownerDocument ? e.ownerDocument.body : e.body : $t(n) && Xn(n) ? n : Ba(n);
}
function Wn(e, n, t) {
  var o;
  n === void 0 && (n = []), t === void 0 && (t = !0);
  const r = Ba(e), a = r === ((o = e.ownerDocument) == null ? void 0 : o.body), l = ut(r);
  if (a) {
    const s = ur(l);
    return n.concat(l, l.visualViewport || [], Xn(r) ? r : [], s && t ? Wn(s) : []);
  }
  return n.concat(r, Wn(r, [], t));
}
function ur(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Va(e) {
  const n = St(e);
  let t = parseFloat(n.width) || 0, o = parseFloat(n.height) || 0;
  const r = $t(e), a = r ? e.offsetWidth : t, l = r ? e.offsetHeight : o, s = bo(t) !== a || bo(o) !== l;
  return s && (t = a, o = l), {
    width: t,
    height: o,
    $: s
  };
}
function Or(e) {
  return kt(e) ? e : e.contextElement;
}
function kn(e) {
  const n = Or(e);
  if (!$t(n))
    return Tt(1);
  const t = n.getBoundingClientRect(), {
    width: o,
    height: r,
    $: a
  } = Va(n);
  let l = (a ? bo(t.width) : t.width) / o, s = (a ? bo(t.height) : t.height) / r;
  return (!l || !Number.isFinite(l)) && (l = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: l,
    y: s
  };
}
const Xs = /* @__PURE__ */ Tt(0);
function Na(e) {
  const n = ut(e);
  return !Er() || !n.visualViewport ? Xs : {
    x: n.visualViewport.offsetLeft,
    y: n.visualViewport.offsetTop
  };
}
function Js(e, n, t) {
  return n === void 0 && (n = !1), !t || n && t !== ut(e) ? !1 : n;
}
function cn(e, n, t, o) {
  n === void 0 && (n = !1), t === void 0 && (t = !1);
  const r = e.getBoundingClientRect(), a = Or(e);
  let l = Tt(1);
  n && (o ? kt(o) && (l = kn(o)) : l = kn(e));
  const s = Js(a, t, o) ? Na(a) : Tt(0);
  let i = (r.left + s.x) / l.x, u = (r.top + s.y) / l.y, d = r.width / l.x, c = r.height / l.y;
  if (a) {
    const m = ut(a), f = o && kt(o) ? ut(o) : o;
    let p = m, g = ur(p);
    for (; g && o && f !== p; ) {
      const b = kn(g), w = g.getBoundingClientRect(), y = St(g), v = w.left + (g.clientLeft + parseFloat(y.paddingLeft)) * b.x, x = w.top + (g.clientTop + parseFloat(y.paddingTop)) * b.y;
      i *= b.x, u *= b.y, d *= b.x, c *= b.y, i += v, u += x, p = ut(g), g = ur(p);
    }
  }
  return xo({
    width: d,
    height: c,
    x: i,
    y: u
  });
}
function Tr(e, n) {
  const t = Mo(e).scrollLeft;
  return n ? n.left + t : cn(At(e)).left + t;
}
function za(e, n, t) {
  t === void 0 && (t = !1);
  const o = e.getBoundingClientRect(), r = o.left + n.scrollLeft - (t ? 0 : (
    // RTL <body> scrollbar.
    Tr(e, o)
  )), a = o.top + n.scrollTop;
  return {
    x: r,
    y: a
  };
}
function Qs(e) {
  let {
    elements: n,
    rect: t,
    offsetParent: o,
    strategy: r
  } = e;
  const a = r === "fixed", l = At(o), s = n ? Ao(n.floating) : !1;
  if (o === l || s && a)
    return t;
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = Tt(1);
  const d = Tt(0), c = $t(o);
  if ((c || !c && !a) && ((fn(o) !== "body" || Xn(l)) && (i = Mo(o)), $t(o))) {
    const f = cn(o);
    u = kn(o), d.x = f.x + o.clientLeft, d.y = f.y + o.clientTop;
  }
  const m = l && !c && !a ? za(l, i, !0) : Tt(0);
  return {
    width: t.width * u.x,
    height: t.height * u.y,
    x: t.x * u.x - i.scrollLeft * u.x + d.x + m.x,
    y: t.y * u.y - i.scrollTop * u.y + d.y + m.y
  };
}
function Zs(e) {
  return Array.from(e.getClientRects());
}
function ei(e) {
  const n = At(e), t = Mo(e), o = e.ownerDocument.body, r = st(n.scrollWidth, n.clientWidth, o.scrollWidth, o.clientWidth), a = st(n.scrollHeight, n.clientHeight, o.scrollHeight, o.clientHeight);
  let l = -t.scrollLeft + Tr(e);
  const s = -t.scrollTop;
  return St(o).direction === "rtl" && (l += st(n.clientWidth, o.clientWidth) - r), {
    width: r,
    height: a,
    x: l,
    y: s
  };
}
function ti(e, n) {
  const t = ut(e), o = At(e), r = t.visualViewport;
  let a = o.clientWidth, l = o.clientHeight, s = 0, i = 0;
  if (r) {
    a = r.width, l = r.height;
    const u = Er();
    (!u || u && n === "fixed") && (s = r.offsetLeft, i = r.offsetTop);
  }
  return {
    width: a,
    height: l,
    x: s,
    y: i
  };
}
function ni(e, n) {
  const t = cn(e, !0, n === "fixed"), o = t.top + e.clientTop, r = t.left + e.clientLeft, a = $t(e) ? kn(e) : Tt(1), l = e.clientWidth * a.x, s = e.clientHeight * a.y, i = r * a.x, u = o * a.y;
  return {
    width: l,
    height: s,
    x: i,
    y: u
  };
}
function aa(e, n, t) {
  let o;
  if (n === "viewport")
    o = ti(e, t);
  else if (n === "document")
    o = ei(At(e));
  else if (kt(n))
    o = ni(n, t);
  else {
    const r = Na(e);
    o = {
      x: n.x - r.x,
      y: n.y - r.y,
      width: n.width,
      height: n.height
    };
  }
  return xo(o);
}
function ja(e, n) {
  const t = Zt(e);
  return t === n || !kt(t) || _n(t) ? !1 : St(t).position === "fixed" || ja(t, n);
}
function oi(e, n) {
  const t = n.get(e);
  if (t)
    return t;
  let o = Wn(e, [], !1).filter((s) => kt(s) && fn(s) !== "body"), r = null;
  const a = St(e).position === "fixed";
  let l = a ? Zt(e) : e;
  for (; kt(l) && !_n(l); ) {
    const s = St(l), i = _r(l);
    !i && s.position === "fixed" && (r = null), (a ? !i && !r : !i && s.position === "static" && !!r && ["absolute", "fixed"].includes(r.position) || Xn(l) && !i && ja(e, l)) ? o = o.filter((d) => d !== l) : r = s, l = Zt(l);
  }
  return n.set(e, o), o;
}
function ri(e) {
  let {
    element: n,
    boundary: t,
    rootBoundary: o,
    strategy: r
  } = e;
  const l = [...t === "clippingAncestors" ? Ao(n) ? [] : oi(n, this._c) : [].concat(t), o], s = l[0], i = l.reduce((u, d) => {
    const c = aa(n, d, r);
    return u.top = st(c.top, u.top), u.right = Qt(c.right, u.right), u.bottom = Qt(c.bottom, u.bottom), u.left = st(c.left, u.left), u;
  }, aa(n, s, r));
  return {
    width: i.right - i.left,
    height: i.bottom - i.top,
    x: i.left,
    y: i.top
  };
}
function ai(e) {
  const {
    width: n,
    height: t
  } = Va(e);
  return {
    width: n,
    height: t
  };
}
function li(e, n, t) {
  const o = $t(n), r = At(n), a = t === "fixed", l = cn(e, !0, a, n);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const i = Tt(0);
  function u() {
    i.x = Tr(r);
  }
  if (o || !o && !a)
    if ((fn(n) !== "body" || Xn(r)) && (s = Mo(n)), o) {
      const f = cn(n, !0, a, n);
      i.x = f.x + n.clientLeft, i.y = f.y + n.clientTop;
    } else r && u();
  a && !o && r && u();
  const d = r && !o && !a ? za(r, s) : Tt(0), c = l.left + s.scrollLeft - i.x - d.x, m = l.top + s.scrollTop - i.y - d.y;
  return {
    x: c,
    y: m,
    width: l.width,
    height: l.height
  };
}
function Uo(e) {
  return St(e).position === "static";
}
function la(e, n) {
  if (!$t(e) || St(e).position === "fixed")
    return null;
  if (n)
    return n(e);
  let t = e.offsetParent;
  return At(e) === t && (t = t.ownerDocument.body), t;
}
function Ga(e, n) {
  const t = ut(e);
  if (Ao(e))
    return t;
  if (!$t(e)) {
    let r = Zt(e);
    for (; r && !_n(r); ) {
      if (kt(r) && !Uo(r))
        return r;
      r = Zt(r);
    }
    return t;
  }
  let o = la(e, n);
  for (; o && Ks(o) && Uo(o); )
    o = la(o, n);
  return o && _n(o) && Uo(o) && !_r(o) ? t : o || Ys(e) || t;
}
const si = async function(e) {
  const n = this.getOffsetParent || Ga, t = this.getDimensions, o = await t(e.floating);
  return {
    reference: li(e.reference, await n(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function ii(e) {
  return St(e).direction === "rtl";
}
const ui = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Qs,
  getDocumentElement: At,
  getClippingRect: ri,
  getOffsetParent: Ga,
  getElementRects: si,
  getClientRects: Zs,
  getDimensions: ai,
  getScale: kn,
  isElement: kt,
  isRTL: ii
};
function Ha(e, n) {
  return e.x === n.x && e.y === n.y && e.width === n.width && e.height === n.height;
}
function di(e, n) {
  let t = null, o;
  const r = At(e);
  function a() {
    var s;
    clearTimeout(o), (s = t) == null || s.disconnect(), t = null;
  }
  function l(s, i) {
    s === void 0 && (s = !1), i === void 0 && (i = 1), a();
    const u = e.getBoundingClientRect(), {
      left: d,
      top: c,
      width: m,
      height: f
    } = u;
    if (s || n(), !m || !f)
      return;
    const p = ro(c), g = ro(r.clientWidth - (d + m)), b = ro(r.clientHeight - (c + f)), w = ro(d), v = {
      rootMargin: -p + "px " + -g + "px " + -b + "px " + -w + "px",
      threshold: st(0, Qt(1, i)) || 1
    };
    let x = !0;
    function h(C) {
      const k = C[0].intersectionRatio;
      if (k !== i) {
        if (!x)
          return l();
        k ? l(!1, k) : o = setTimeout(() => {
          l(!1, 1e-7);
        }, 1e3);
      }
      k === 1 && !Ha(u, e.getBoundingClientRect()) && l(), x = !1;
    }
    try {
      t = new IntersectionObserver(h, {
        ...v,
        // Handle <iframe>s
        root: r.ownerDocument
      });
    } catch {
      t = new IntersectionObserver(h, v);
    }
    t.observe(e);
  }
  return l(!0), a;
}
function Lo(e, n, t, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: r = !0,
    ancestorResize: a = !0,
    elementResize: l = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: i = !1
  } = o, u = Or(e), d = r || a ? [...u ? Wn(u) : [], ...Wn(n)] : [];
  d.forEach((w) => {
    r && w.addEventListener("scroll", t, {
      passive: !0
    }), a && w.addEventListener("resize", t);
  });
  const c = u && s ? di(u, t) : null;
  let m = -1, f = null;
  l && (f = new ResizeObserver((w) => {
    let [y] = w;
    y && y.target === u && f && (f.unobserve(n), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      var v;
      (v = f) == null || v.observe(n);
    })), t();
  }), u && !i && f.observe(u), f.observe(n));
  let p, g = i ? cn(e) : null;
  i && b();
  function b() {
    const w = cn(e);
    g && !Ha(g, w) && t(), g = w, p = requestAnimationFrame(b);
  }
  return t(), () => {
    var w;
    d.forEach((y) => {
      r && y.removeEventListener("scroll", t), a && y.removeEventListener("resize", t);
    }), c == null || c(), (w = f) == null || w.disconnect(), f = null, i && cancelAnimationFrame(p);
  };
}
const On = Hs, Fo = zs, Tn = Ws, Dr = js, $r = qs, ci = Vs, Pr = Us, fi = (e, n, t) => {
  const o = /* @__PURE__ */ new Map(), r = {
    platform: ui,
    ...t
  }, a = {
    ...r.platform,
    _c: o
  };
  return Bs(e, n, {
    ...r,
    platform: a
  });
};
function pi(e) {
  return e != null && typeof e == "object" && "$el" in e;
}
function dr(e) {
  if (pi(e)) {
    const n = e.$el;
    return Sr(n) && fn(n) === "#comment" ? null : n;
  }
  return e;
}
function yn(e) {
  return typeof e == "function" ? e() : P(e);
}
function mi(e) {
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const t = dr(yn(e.element));
      return t == null ? {} : ci({
        element: t,
        padding: e.padding
      }).fn(n);
    }
  };
}
function Wa(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function sa(e, n) {
  const t = Wa(e);
  return Math.round(n * t) / t;
}
function Dn(e, n, t) {
  t === void 0 && (t = {});
  const o = t.whileElementsMounted, r = T(() => {
    var k;
    return (k = yn(t.open)) != null ? k : !0;
  }), a = T(() => yn(t.middleware)), l = T(() => {
    var k;
    return (k = yn(t.placement)) != null ? k : "bottom";
  }), s = T(() => {
    var k;
    return (k = yn(t.strategy)) != null ? k : "absolute";
  }), i = T(() => {
    var k;
    return (k = yn(t.transform)) != null ? k : !0;
  }), u = T(() => dr(e.value)), d = T(() => dr(n.value)), c = S(0), m = S(0), f = S(s.value), p = S(l.value), g = Do({}), b = S(!1), w = T(() => {
    const k = {
      position: f.value,
      left: "0",
      top: "0"
    };
    if (!d.value)
      return k;
    const O = sa(d.value, c.value), A = sa(d.value, m.value);
    return i.value ? {
      ...k,
      transform: "translate(" + O + "px, " + A + "px)",
      ...Wa(d.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: f.value,
      left: O + "px",
      top: A + "px"
    };
  });
  let y;
  function v() {
    if (u.value == null || d.value == null)
      return;
    const k = r.value;
    fi(u.value, d.value, {
      middleware: a.value,
      placement: l.value,
      strategy: s.value
    }).then((O) => {
      c.value = O.x, m.value = O.y, f.value = O.strategy, p.value = O.placement, g.value = O.middlewareData, b.value = k !== !1;
    });
  }
  function x() {
    typeof y == "function" && (y(), y = void 0);
  }
  function h() {
    if (x(), o === void 0) {
      v();
      return;
    }
    if (u.value != null && d.value != null) {
      y = o(u.value, d.value, v);
      return;
    }
  }
  function C() {
    r.value || (b.value = !1);
  }
  return re([a, l, s, r], v, {
    flush: "sync"
  }), re([u, d], h, {
    flush: "sync"
  }), re(r, C, {
    flush: "sync"
  }), es() && Da(x), {
    x: vn(c),
    y: vn(m),
    strategy: vn(f),
    placement: vn(p),
    middlewareData: vn(g),
    isPositioned: vn(b),
    floatingStyles: w,
    update: v
  };
}
function gn(e, n, t) {
  let o = t.initialDeps ?? [], r;
  function a() {
    var l, s, i, u;
    let d;
    t.key && ((l = t.debug) != null && l.call(t)) && (d = Date.now());
    const c = e();
    if (!(c.length !== o.length || c.some((p, g) => o[g] !== p)))
      return r;
    o = c;
    let f;
    if (t.key && ((s = t.debug) != null && s.call(t)) && (f = Date.now()), r = n(...c), t.key && ((i = t.debug) != null && i.call(t))) {
      const p = Math.round((Date.now() - d) * 100) / 100, g = Math.round((Date.now() - f) * 100) / 100, b = g / 16, w = (y, v) => {
        for (y = String(y); y.length < v; )
          y = " " + y;
        return y;
      };
      console.info(
        `%c⏱ ${w(g, 5)} /${w(p, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * b, 120)
        )}deg 100% 31%);`,
        t == null ? void 0 : t.key
      );
    }
    return (u = t == null ? void 0 : t.onChange) == null || u.call(t, r), r;
  }
  return a.updateDeps = (l) => {
    o = l;
  }, a;
}
function qo(e, n) {
  if (e === void 0)
    throw new Error("Unexpected undefined");
  return e;
}
const vi = (e, n) => Math.abs(e - n) < 1, gi = (e, n, t) => {
  let o;
  return function(...r) {
    e.clearTimeout(o), o = e.setTimeout(() => n.apply(this, r), t);
  };
}, hi = (e) => e, bi = (e) => {
  const n = Math.max(e.startIndex - e.overscan, 0), t = Math.min(e.endIndex + e.overscan, e.count - 1), o = [];
  for (let r = n; r <= t; r++)
    o.push(r);
  return o;
}, yi = (e, n) => {
  const t = e.scrollElement;
  if (!t)
    return;
  const o = e.targetWindow;
  if (!o)
    return;
  const r = (l) => {
    const { width: s, height: i } = l;
    n({ width: Math.round(s), height: Math.round(i) });
  };
  if (r(t.getBoundingClientRect()), !o.ResizeObserver)
    return () => {
    };
  const a = new o.ResizeObserver((l) => {
    const s = () => {
      const i = l[0];
      if (i != null && i.borderBoxSize) {
        const u = i.borderBoxSize[0];
        if (u) {
          r({ width: u.inlineSize, height: u.blockSize });
          return;
        }
      }
      r(t.getBoundingClientRect());
    };
    e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(s) : s();
  });
  return a.observe(t, { box: "border-box" }), () => {
    a.unobserve(t);
  };
}, ia = {
  passive: !0
}, ua = typeof window > "u" ? !0 : "onscrollend" in window, wi = (e, n) => {
  const t = e.scrollElement;
  if (!t)
    return;
  const o = e.targetWindow;
  if (!o)
    return;
  let r = 0;
  const a = e.options.useScrollendEvent && ua ? () => {
  } : gi(
    o,
    () => {
      n(r, !1);
    },
    e.options.isScrollingResetDelay
  ), l = (d) => () => {
    const { horizontal: c, isRtl: m } = e.options;
    r = c ? t.scrollLeft * (m && -1 || 1) : t.scrollTop, a(), n(r, d);
  }, s = l(!0), i = l(!1);
  i(), t.addEventListener("scroll", s, ia);
  const u = e.options.useScrollendEvent && ua;
  return u && t.addEventListener("scrollend", i, ia), () => {
    t.removeEventListener("scroll", s), u && t.removeEventListener("scrollend", i);
  };
}, xi = (e, n, t) => {
  if (n != null && n.borderBoxSize) {
    const o = n.borderBoxSize[0];
    if (o)
      return Math.round(
        o[t.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  return Math.round(
    e.getBoundingClientRect()[t.options.horizontal ? "width" : "height"]
  );
}, Ci = (e, {
  adjustments: n = 0,
  behavior: t
}, o) => {
  var r, a;
  const l = e + n;
  (a = (r = o.scrollElement) == null ? void 0 : r.scrollTo) == null || a.call(r, {
    [o.options.horizontal ? "left" : "top"]: l,
    behavior: t
  });
};
class ki {
  constructor(n) {
    this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.scrollToIndexTimeoutId = null, this.measurementsCache = [], this.itemSizeCache = /* @__PURE__ */ new Map(), this.pendingMeasuredCacheIndexes = [], this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this.elementsCache = /* @__PURE__ */ new Map(), this.observer = /* @__PURE__ */ (() => {
      let t = null;
      const o = () => t || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : t = new this.targetWindow.ResizeObserver((r) => {
        r.forEach((a) => {
          const l = () => {
            this._measureElement(a.target, a);
          };
          this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(l) : l();
        });
      }));
      return {
        disconnect: () => {
          var r;
          (r = o()) == null || r.disconnect(), t = null;
        },
        observe: (r) => {
          var a;
          return (a = o()) == null ? void 0 : a.observe(r, { box: "border-box" });
        },
        unobserve: (r) => {
          var a;
          return (a = o()) == null ? void 0 : a.unobserve(r);
        }
      };
    })(), this.range = null, this.setOptions = (t) => {
      Object.entries(t).forEach(([o, r]) => {
        typeof r > "u" && delete t[o];
      }), this.options = {
        debug: !1,
        initialOffset: 0,
        overscan: 1,
        paddingStart: 0,
        paddingEnd: 0,
        scrollPaddingStart: 0,
        scrollPaddingEnd: 0,
        horizontal: !1,
        getItemKey: hi,
        rangeExtractor: bi,
        onChange: () => {
        },
        measureElement: xi,
        initialRect: { width: 0, height: 0 },
        scrollMargin: 0,
        gap: 0,
        indexAttribute: "data-index",
        initialMeasurementsCache: [],
        lanes: 1,
        isScrollingResetDelay: 150,
        enabled: !0,
        isRtl: !1,
        useScrollendEvent: !1,
        useAnimationFrameWithResizeObserver: !1,
        ...t
      };
    }, this.notify = (t) => {
      var o, r;
      (r = (o = this.options).onChange) == null || r.call(o, this, t);
    }, this.maybeNotify = gn(
      () => (this.calculateRange(), [
        this.isScrolling,
        this.range ? this.range.startIndex : null,
        this.range ? this.range.endIndex : null
      ]),
      (t) => {
        this.notify(t);
      },
      {
        key: process.env.NODE_ENV !== "production" && "maybeNotify",
        debug: () => this.options.debug,
        initialDeps: [
          this.isScrolling,
          this.range ? this.range.startIndex : null,
          this.range ? this.range.endIndex : null
        ]
      }
    ), this.cleanup = () => {
      this.unsubs.filter(Boolean).forEach((t) => t()), this.unsubs = [], this.observer.disconnect(), this.scrollElement = null, this.targetWindow = null;
    }, this._didMount = () => () => {
      this.cleanup();
    }, this._willUpdate = () => {
      var t;
      const o = this.options.enabled ? this.options.getScrollElement() : null;
      if (this.scrollElement !== o) {
        if (this.cleanup(), !o) {
          this.maybeNotify();
          return;
        }
        this.scrollElement = o, this.scrollElement && "ownerDocument" in this.scrollElement ? this.targetWindow = this.scrollElement.ownerDocument.defaultView : this.targetWindow = ((t = this.scrollElement) == null ? void 0 : t.window) ?? null, this.elementsCache.forEach((r) => {
          this.observer.observe(r);
        }), this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        }), this.unsubs.push(
          this.options.observeElementRect(this, (r) => {
            this.scrollRect = r, this.maybeNotify();
          })
        ), this.unsubs.push(
          this.options.observeElementOffset(this, (r, a) => {
            this.scrollAdjustments = 0, this.scrollDirection = a ? this.getScrollOffset() < r ? "forward" : "backward" : null, this.scrollOffset = r, this.isScrolling = a, this.maybeNotify();
          })
        );
      }
    }, this.getSize = () => this.options.enabled ? (this.scrollRect = this.scrollRect ?? this.options.initialRect, this.scrollRect[this.options.horizontal ? "width" : "height"]) : (this.scrollRect = null, 0), this.getScrollOffset = () => this.options.enabled ? (this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset == "function" ? this.options.initialOffset() : this.options.initialOffset), this.scrollOffset) : (this.scrollOffset = null, 0), this.getFurthestMeasurement = (t, o) => {
      const r = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map();
      for (let l = o - 1; l >= 0; l--) {
        const s = t[l];
        if (r.has(s.lane))
          continue;
        const i = a.get(
          s.lane
        );
        if (i == null || s.end > i.end ? a.set(s.lane, s) : s.end < i.end && r.set(s.lane, !0), r.size === this.options.lanes)
          break;
      }
      return a.size === this.options.lanes ? Array.from(a.values()).sort((l, s) => l.end === s.end ? l.index - s.index : l.end - s.end)[0] : void 0;
    }, this.getMeasurementOptions = gn(
      () => [
        this.options.count,
        this.options.paddingStart,
        this.options.scrollMargin,
        this.options.getItemKey,
        this.options.enabled
      ],
      (t, o, r, a, l) => (this.pendingMeasuredCacheIndexes = [], {
        count: t,
        paddingStart: o,
        scrollMargin: r,
        getItemKey: a,
        enabled: l
      }),
      {
        key: !1
      }
    ), this.getMeasurements = gn(
      () => [this.getMeasurementOptions(), this.itemSizeCache],
      ({ count: t, paddingStart: o, scrollMargin: r, getItemKey: a, enabled: l }, s) => {
        if (!l)
          return this.measurementsCache = [], this.itemSizeCache.clear(), [];
        this.measurementsCache.length === 0 && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((d) => {
          this.itemSizeCache.set(d.key, d.size);
        }));
        const i = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [];
        const u = this.measurementsCache.slice(0, i);
        for (let d = i; d < t; d++) {
          const c = a(d), m = this.options.lanes === 1 ? u[d - 1] : this.getFurthestMeasurement(u, d), f = m ? m.end + this.options.gap : o + r, p = s.get(c), g = typeof p == "number" ? p : this.options.estimateSize(d), b = f + g, w = m ? m.lane : d % this.options.lanes;
          u[d] = {
            index: d,
            start: f,
            size: g,
            end: b,
            key: c,
            lane: w
          };
        }
        return this.measurementsCache = u, u;
      },
      {
        key: process.env.NODE_ENV !== "production" && "getMeasurements",
        debug: () => this.options.debug
      }
    ), this.calculateRange = gn(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (t, o, r, a) => this.range = t.length > 0 && o > 0 ? Si({
        measurements: t,
        outerSize: o,
        scrollOffset: r,
        lanes: a
      }) : null,
      {
        key: process.env.NODE_ENV !== "production" && "calculateRange",
        debug: () => this.options.debug
      }
    ), this.getVirtualIndexes = gn(
      () => {
        let t = null, o = null;
        const r = this.calculateRange();
        return r && (t = r.startIndex, o = r.endIndex), this.maybeNotify.updateDeps([this.isScrolling, t, o]), [
          this.options.rangeExtractor,
          this.options.overscan,
          this.options.count,
          t,
          o
        ];
      },
      (t, o, r, a, l) => a === null || l === null ? [] : t({
        startIndex: a,
        endIndex: l,
        overscan: o,
        count: r
      }),
      {
        key: process.env.NODE_ENV !== "production" && "getVirtualIndexes",
        debug: () => this.options.debug
      }
    ), this.indexFromElement = (t) => {
      const o = this.options.indexAttribute, r = t.getAttribute(o);
      return r ? parseInt(r, 10) : (console.warn(
        `Missing attribute name '${o}={index}' on measured element.`
      ), -1);
    }, this._measureElement = (t, o) => {
      const r = this.indexFromElement(t), a = this.measurementsCache[r];
      if (!a)
        return;
      const l = a.key, s = this.elementsCache.get(l);
      s !== t && (s && this.observer.unobserve(s), this.observer.observe(t), this.elementsCache.set(l, t)), t.isConnected && this.resizeItem(r, this.options.measureElement(t, o, this));
    }, this.resizeItem = (t, o) => {
      const r = this.measurementsCache[t];
      if (!r)
        return;
      const a = this.itemSizeCache.get(r.key) ?? r.size, l = o - a;
      l !== 0 && ((this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(r, l, this) : r.start < this.getScrollOffset() + this.scrollAdjustments) && (process.env.NODE_ENV !== "production" && this.options.debug && console.info("correction", l), this._scrollToOffset(this.getScrollOffset(), {
        adjustments: this.scrollAdjustments += l,
        behavior: void 0
      })), this.pendingMeasuredCacheIndexes.push(r.index), this.itemSizeCache = new Map(this.itemSizeCache.set(r.key, o)), this.notify(!1));
    }, this.measureElement = (t) => {
      if (!t) {
        this.elementsCache.forEach((o, r) => {
          o.isConnected || (this.observer.unobserve(o), this.elementsCache.delete(r));
        });
        return;
      }
      this._measureElement(t, void 0);
    }, this.getVirtualItems = gn(
      () => [this.getVirtualIndexes(), this.getMeasurements()],
      (t, o) => {
        const r = [];
        for (let a = 0, l = t.length; a < l; a++) {
          const s = t[a], i = o[s];
          r.push(i);
        }
        return r;
      },
      {
        key: process.env.NODE_ENV !== "production" && "getVirtualItems",
        debug: () => this.options.debug
      }
    ), this.getVirtualItemForOffset = (t) => {
      const o = this.getMeasurements();
      if (o.length !== 0)
        return qo(
          o[Ua(
            0,
            o.length - 1,
            (r) => qo(o[r]).start,
            t
          )]
        );
    }, this.getOffsetForAlignment = (t, o, r = 0) => {
      const a = this.getSize(), l = this.getScrollOffset();
      o === "auto" && (o = t >= l + a ? "end" : "start"), o === "center" ? t += (r - a) / 2 : o === "end" && (t -= a);
      const s = this.options.horizontal ? "scrollWidth" : "scrollHeight", u = (this.scrollElement ? "document" in this.scrollElement ? this.scrollElement.document.documentElement[s] : this.scrollElement[s] : 0) - a;
      return Math.max(Math.min(u, t), 0);
    }, this.getOffsetForIndex = (t, o = "auto") => {
      t = Math.max(0, Math.min(t, this.options.count - 1));
      const r = this.measurementsCache[t];
      if (!r)
        return;
      const a = this.getSize(), l = this.getScrollOffset();
      if (o === "auto")
        if (r.end >= l + a - this.options.scrollPaddingEnd)
          o = "end";
        else if (r.start <= l + this.options.scrollPaddingStart)
          o = "start";
        else
          return [l, o];
      const s = o === "end" ? r.end + this.options.scrollPaddingEnd : r.start - this.options.scrollPaddingStart;
      return [
        this.getOffsetForAlignment(s, o, r.size),
        o
      ];
    }, this.isDynamicMode = () => this.elementsCache.size > 0, this.cancelScrollToIndex = () => {
      this.scrollToIndexTimeoutId !== null && this.targetWindow && (this.targetWindow.clearTimeout(this.scrollToIndexTimeoutId), this.scrollToIndexTimeoutId = null);
    }, this.scrollToOffset = (t, { align: o = "start", behavior: r } = {}) => {
      this.cancelScrollToIndex(), r === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      ), this._scrollToOffset(this.getOffsetForAlignment(t, o), {
        adjustments: void 0,
        behavior: r
      });
    }, this.scrollToIndex = (t, { align: o = "auto", behavior: r } = {}) => {
      t = Math.max(0, Math.min(t, this.options.count - 1)), this.cancelScrollToIndex(), r === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      );
      const a = this.getOffsetForIndex(t, o);
      if (!a) return;
      const [l, s] = a;
      this._scrollToOffset(l, { adjustments: void 0, behavior: r }), r !== "smooth" && this.isDynamicMode() && this.targetWindow && (this.scrollToIndexTimeoutId = this.targetWindow.setTimeout(() => {
        if (this.scrollToIndexTimeoutId = null, this.elementsCache.has(
          this.options.getItemKey(t)
        )) {
          const [u] = qo(
            this.getOffsetForIndex(t, s)
          );
          vi(u, this.getScrollOffset()) || this.scrollToIndex(t, { align: s, behavior: r });
        } else
          this.scrollToIndex(t, { align: s, behavior: r });
      }));
    }, this.scrollBy = (t, { behavior: o } = {}) => {
      this.cancelScrollToIndex(), o === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      ), this._scrollToOffset(this.getScrollOffset() + t, {
        adjustments: void 0,
        behavior: o
      });
    }, this.getTotalSize = () => {
      var t;
      const o = this.getMeasurements();
      let r;
      if (o.length === 0)
        r = this.options.paddingStart;
      else if (this.options.lanes === 1)
        r = ((t = o[o.length - 1]) == null ? void 0 : t.end) ?? 0;
      else {
        const a = Array(this.options.lanes).fill(null);
        let l = o.length - 1;
        for (; l >= 0 && a.some((s) => s === null); ) {
          const s = o[l];
          a[s.lane] === null && (a[s.lane] = s.end), l--;
        }
        r = Math.max(...a.filter((s) => s !== null));
      }
      return Math.max(
        r - this.options.scrollMargin + this.options.paddingEnd,
        0
      );
    }, this._scrollToOffset = (t, {
      adjustments: o,
      behavior: r
    }) => {
      this.options.scrollToFn(t, { behavior: r, adjustments: o }, this);
    }, this.measure = () => {
      this.itemSizeCache = /* @__PURE__ */ new Map(), this.notify(!1);
    }, this.setOptions(n);
  }
}
const Ua = (e, n, t, o) => {
  for (; e <= n; ) {
    const r = (e + n) / 2 | 0, a = t(r);
    if (a < o)
      e = r + 1;
    else if (a > o)
      n = r - 1;
    else
      return r;
  }
  return e > 0 ? e - 1 : 0;
};
function Si({
  measurements: e,
  outerSize: n,
  scrollOffset: t,
  lanes: o
}) {
  const r = e.length - 1, a = (i) => e[i].start;
  if (e.length <= o)
    return {
      startIndex: 0,
      endIndex: r
    };
  let l = Ua(
    0,
    r,
    a,
    t
  ), s = l;
  if (o === 1)
    for (; s < r && e[s].end < t + n; )
      s++;
  else if (o > 1) {
    const i = Array(o).fill(0);
    for (; s < r && i.some((d) => d < t + n); ) {
      const d = e[s];
      i[d.lane] = d.end, s++;
    }
    const u = Array(o).fill(t + n);
    for (; l >= 0 && u.some((d) => d >= t); ) {
      const d = e[l];
      u[d.lane] = d.start, l--;
    }
    l = Math.max(0, l - l % o), s = Math.min(r, s + (o - 1 - s % o));
  }
  return { startIndex: l, endIndex: s };
}
function _i(e) {
  const n = new ki(P(e)), t = Do(n), o = n._didMount();
  return re(
    () => P(e).getScrollElement(),
    (r) => {
      r && n._willUpdate();
    },
    {
      immediate: !0
    }
  ), re(
    () => P(e),
    (r) => {
      n.setOptions({
        ...r,
        onChange: (a, l) => {
          var s;
          Qr(t), (s = r.onChange) == null || s.call(r, a, l);
        }
      }), n._willUpdate(), Qr(t);
    },
    {
      immediate: !0
    }
  ), Da(o), t;
}
function Ei(e) {
  return _i(
    T(() => ({
      observeElementRect: yi,
      observeElementOffset: wi,
      scrollToFn: Ci,
      ...P(e)
    }))
  );
}
function qa(e, n, t) {
  let o = S(t == null ? void 0 : t.value), r = T(() => e.value !== void 0);
  return [T(() => r.value ? e.value : o.value), function(a) {
    return r.value || (o.value = a), n == null ? void 0 : n(a);
  }];
}
function Ir(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((n) => setTimeout(() => {
    throw n;
  }));
}
function en() {
  let e = [], n = { addEventListener(t, o, r, a) {
    return t.addEventListener(o, r, a), n.add(() => t.removeEventListener(o, r, a));
  }, requestAnimationFrame(...t) {
    let o = requestAnimationFrame(...t);
    n.add(() => cancelAnimationFrame(o));
  }, nextFrame(...t) {
    n.requestAnimationFrame(() => {
      n.requestAnimationFrame(...t);
    });
  }, setTimeout(...t) {
    let o = setTimeout(...t);
    n.add(() => clearTimeout(o));
  }, microTask(...t) {
    let o = { current: !0 };
    return Ir(() => {
      o.current && t[0]();
    }), n.add(() => {
      o.current = !1;
    });
  }, style(t, o, r) {
    let a = t.style.getPropertyValue(o);
    return Object.assign(t.style, { [o]: r }), this.add(() => {
      Object.assign(t.style, { [o]: a });
    });
  }, group(t) {
    let o = en();
    return t(o), this.add(() => o.dispose());
  }, add(t) {
    return e.push(t), () => {
      let o = e.indexOf(t);
      if (o >= 0) for (let r of e.splice(o, 1)) r();
    };
  }, dispose() {
    for (let t of e.splice(0)) t();
  } };
  return n;
}
function Oi() {
  let e = en();
  return ye(() => e.dispose()), e;
}
function Ti() {
  let e = Oi();
  return (n) => {
    e.dispose(), e.nextFrame(n);
  };
}
let Di = 0;
function $i() {
  return ++Di;
}
function Be() {
  return $i();
}
function G(e) {
  var n;
  if (e == null || e.value == null) return null;
  let t = (n = e.value.$el) != null ? n : e.value;
  return t instanceof Node ? t : null;
}
function Re(e, n, ...t) {
  if (e in n) {
    let r = n[e];
    return typeof r == "function" ? r(...t) : r;
  }
  let o = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map((r) => `"${r}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(o, Re), o;
}
var Pi = Object.defineProperty, Ii = (e, n, t) => n in e ? Pi(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, da = (e, n, t) => (Ii(e, typeof n != "symbol" ? n + "" : n, t), t);
let Ri = class {
  constructor() {
    da(this, "current", this.detect()), da(this, "currentId", 0);
  }
  set(n) {
    this.current !== n && (this.currentId = 0, this.current = n);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window > "u" || typeof document > "u" ? "server" : "client";
  }
}, Jn = new Ri();
function vt(e) {
  var n, t;
  return Jn.isServer ? null : e ? "ownerDocument" in e ? e.ownerDocument : "value" in e ? (t = (n = G(e)) == null ? void 0 : n.ownerDocument) != null ? t : document : null : document;
}
let Co = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var Je = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(Je || {}), Un = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Un || {}), Ai = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Ai || {});
function Bo(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(Co)).sort((n, t) => Math.sign((n.tabIndex || Number.MAX_SAFE_INTEGER) - (t.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var Rr = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Rr || {});
function Ka(e, n = 0) {
  var t;
  return e === ((t = vt(e)) == null ? void 0 : t.body) ? !1 : Re(n, { 0() {
    return e.matches(Co);
  }, 1() {
    let o = e;
    for (; o !== null; ) {
      if (o.matches(Co)) return !0;
      o = o.parentElement;
    }
    return !1;
  } });
}
var Mi = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(Mi || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function un(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let Li = ["textarea", "input"].join(",");
function Fi(e) {
  var n, t;
  return (t = (n = e == null ? void 0 : e.matches) == null ? void 0 : n.call(e, Li)) != null ? t : !1;
}
function Ya(e, n = (t) => t) {
  return e.slice().sort((t, o) => {
    let r = n(t), a = n(o);
    if (r === null || a === null) return 0;
    let l = r.compareDocumentPosition(a);
    return l & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : l & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function yt(e, n, { sorted: t = !0, relativeTo: o = null, skipElements: r = [] } = {}) {
  var a;
  let l = (a = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? a : document, s = Array.isArray(e) ? t ? Ya(e) : e : Bo(e);
  r.length > 0 && s.length > 1 && (s = s.filter((p) => !r.includes(p))), o = o ?? l.activeElement;
  let i = (() => {
    if (n & 5) return 1;
    if (n & 10) return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), u = (() => {
    if (n & 1) return 0;
    if (n & 2) return Math.max(0, s.indexOf(o)) - 1;
    if (n & 4) return Math.max(0, s.indexOf(o)) + 1;
    if (n & 8) return s.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), d = n & 32 ? { preventScroll: !0 } : {}, c = 0, m = s.length, f;
  do {
    if (c >= m || c + m <= 0) return 0;
    let p = u + c;
    if (n & 16) p = (p + m) % m;
    else {
      if (p < 0) return 3;
      if (p >= m) return 1;
    }
    f = s[p], f == null || f.focus(d), c += i;
  } while (f !== l.activeElement);
  return n & 6 && Fi(f) && f.select(), 2;
}
function Xa() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function Bi() {
  return /Android/gi.test(window.navigator.userAgent);
}
function Ja() {
  return Xa() || Bi();
}
function Rn(e, n, t, o) {
  Jn.isServer || Ve((r) => {
    e.value && (document.addEventListener(n, t, o), r(() => document.removeEventListener(n, t, o)));
  });
}
function Qa(e, n, t, o) {
  Jn.isServer || Ve((r) => {
    e.value && (window.addEventListener(n, t, o), r(() => window.removeEventListener(n, t, o)));
  });
}
const ca = 30;
function Ar(e, n, t = T(() => !0)) {
  function o(l, s) {
    if (l.defaultPrevented) return;
    let i = s(l);
    if (i === null || !i.getRootNode().contains(i)) return;
    let u = function d(c) {
      return typeof c == "function" ? d(c()) : Array.isArray(c) || c instanceof Set ? c : [c];
    }(e);
    for (let d of u) {
      if (d === null) continue;
      let c = d instanceof HTMLElement ? d : G(d);
      if (c != null && c.contains(i) || l.composed && l.composedPath().includes(c)) return;
    }
    return !Ka(i, Rr.Loose) && i.tabIndex !== -1 && l.preventDefault(), n(l, i);
  }
  let r = S(null);
  Rn(t, "pointerdown", (l) => {
    var s, i;
    r.value = ((i = (s = l.composedPath) == null ? void 0 : s.call(l)) == null ? void 0 : i[0]) || l.target;
  }, !0), Rn(t, "mousedown", (l) => {
    var s, i;
    r.value = ((i = (s = l.composedPath) == null ? void 0 : s.call(l)) == null ? void 0 : i[0]) || l.target;
  }, !0), Rn(t, "click", (l) => {
    Ja() || r.value && (o(l, () => r.value), r.value = null);
  }, !0);
  let a = { x: 0, y: 0 };
  Rn(t, "touchstart", (l) => {
    a.x = l.touches[0].clientX, a.y = l.touches[0].clientY;
  }, !0), Rn(t, "touchend", (l) => {
    let s = { x: l.changedTouches[0].clientX, y: l.changedTouches[0].clientY };
    if (!(Math.abs(s.x - a.x) >= ca || Math.abs(s.y - a.y) >= ca)) return o(l, () => l.target instanceof HTMLElement ? l.target : null);
  }, !0), Qa(t, "blur", (l) => o(l, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
function fa(e, n) {
  if (e) return e;
  let t = n ?? "button";
  if (typeof t == "string" && t.toLowerCase() === "button") return "button";
}
function Mr(e, n) {
  let t = S(fa(e.value.type, e.value.as));
  return se(() => {
    t.value = fa(e.value.type, e.value.as);
  }), Ve(() => {
    var o;
    t.value || G(n) && G(n) instanceof HTMLButtonElement && !((o = G(n)) != null && o.hasAttribute("type")) && (t.value = "button");
  }), t;
}
function pa(e) {
  return [e.screenX, e.screenY];
}
function Vi() {
  let e = S([-1, -1]);
  return { wasMoved(n) {
    let t = pa(n);
    return e.value[0] === t[0] && e.value[1] === t[1] ? !1 : (e.value = t, !0);
  }, update(n) {
    e.value = pa(n);
  } };
}
function Ni({ container: e, accept: n, walk: t, enabled: o }) {
  Ve(() => {
    let r = e.value;
    if (!r || o !== void 0 && !o.value) return;
    let a = vt(e);
    if (!a) return;
    let l = Object.assign((i) => n(i), { acceptNode: n }), s = a.createTreeWalker(r, NodeFilter.SHOW_ELEMENT, l, !1);
    for (; s.nextNode(); ) t(s.currentNode);
  });
}
var mt = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(mt || {}), qt = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(qt || {});
function we({ visible: e = !0, features: n = 0, ourProps: t, theirProps: o, ...r }) {
  var a;
  let l = el(o, t), s = Object.assign(r, { props: l });
  if (e || n & 2 && l.static) return Ko(s);
  if (n & 1) {
    let i = (a = l.unmount) == null || a ? 0 : 1;
    return Re(i, { 0() {
      return null;
    }, 1() {
      return Ko({ ...r, props: { ...l, hidden: !0, style: { display: "none" } } });
    } });
  }
  return Ko(s);
}
function Ko({ props: e, attrs: n, slots: t, slot: o, name: r }) {
  var a, l;
  let { as: s, ...i } = $n(e, ["unmount", "static"]), u = (a = t.default) == null ? void 0 : a.call(t, o), d = {};
  if (o) {
    let c = !1, m = [];
    for (let [f, p] of Object.entries(o)) typeof p == "boolean" && (c = !0), p === !0 && m.push(f);
    c && (d["data-headlessui-state"] = m.join(" "));
  }
  if (s === "template") {
    if (u = Za(u ?? []), Object.keys(i).length > 0 || Object.keys(n).length > 0) {
      let [c, ...m] = u ?? [];
      if (!zi(c) || m.length > 0) throw new Error(['Passing props on "template"!', "", `The current component <${r} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(i).concat(Object.keys(n)).map((g) => g.trim()).filter((g, b, w) => w.indexOf(g) === b).sort((g, b) => g.localeCompare(b)).map((g) => `  - ${g}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((g) => `  - ${g}`).join(`
`)].join(`
`));
      let f = el((l = c.props) != null ? l : {}, i, d), p = $a(c, f, !0);
      for (let g in f) g.startsWith("on") && (p.props || (p.props = {}), p.props[g] = f[g]);
      return p;
    }
    return Array.isArray(u) && u.length === 1 ? u[0] : u;
  }
  return ie(s, Object.assign({}, i, d), { default: () => u });
}
function Za(e) {
  return e.flatMap((n) => n.type === be ? Za(n.children) : [n]);
}
function el(...e) {
  if (e.length === 0) return {};
  if (e.length === 1) return e[0];
  let n = {}, t = {};
  for (let o of e) for (let r in o) r.startsWith("on") && typeof o[r] == "function" ? (t[r] != null || (t[r] = []), t[r].push(o[r])) : n[r] = o[r];
  if (n.disabled || n["aria-disabled"]) return Object.assign(n, Object.fromEntries(Object.keys(t).map((o) => [o, void 0])));
  for (let o in t) Object.assign(n, { [o](r, ...a) {
    let l = t[o];
    for (let s of l) {
      if (r instanceof Event && r.defaultPrevented) return;
      s(r, ...a);
    }
  } });
  return n;
}
function tl(e) {
  let n = Object.assign({}, e);
  for (let t in n) n[t] === void 0 && delete n[t];
  return n;
}
function $n(e, n = []) {
  let t = Object.assign({}, e);
  for (let o of n) o in t && delete t[o];
  return t;
}
function zi(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
var Pt = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Pt || {});
let Nt = N({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: n, attrs: t }) {
  return () => {
    var o;
    let { features: r, ...a } = e, l = { "aria-hidden": (r & 2) === 2 ? !0 : (o = a["aria-hidden"]) != null ? o : void 0, hidden: (r & 4) === 4 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(r & 4) === 4 && (r & 2) !== 2 && { display: "none" } } };
    return we({ ourProps: l, theirProps: a, slot: {}, attrs: t, slots: n, name: "Hidden" });
  };
} }), nl = Symbol("Context");
var Pe = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(Pe || {});
function ji() {
  return Pn() !== null;
}
function Pn() {
  return me(nl, null);
}
function Lr(e) {
  ke(nl, e);
}
var $e = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))($e || {}), ol = ((e) => (e[e.Left = 0] = "Left", e[e.Right = 2] = "Right", e))(ol || {});
function Gi(e) {
  function n() {
    document.readyState !== "loading" && (e(), document.removeEventListener("DOMContentLoaded", n));
  }
  typeof window < "u" && typeof document < "u" && (document.addEventListener("DOMContentLoaded", n), n());
}
let Ft = [];
Gi(() => {
  function e(n) {
    if (!(n.target instanceof HTMLElement) || n.target === document.body || Ft[0] === n.target) return;
    let t = n.target;
    t = t.closest(Co), Ft.unshift(t ?? n.target), Ft = Ft.filter((o) => o != null && o.isConnected), Ft.splice(10);
  }
  window.addEventListener("click", e, { capture: !0 }), window.addEventListener("mousedown", e, { capture: !0 }), window.addEventListener("focus", e, { capture: !0 }), document.body.addEventListener("click", e, { capture: !0 }), document.body.addEventListener("mousedown", e, { capture: !0 }), document.body.addEventListener("focus", e, { capture: !0 });
});
function Hi(e) {
  throw new Error("Unexpected object: " + e);
}
var qe = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(qe || {});
function ma(e, n) {
  let t = n.resolveItems();
  if (t.length <= 0) return null;
  let o = n.resolveActiveIndex(), r = o ?? -1;
  switch (e.focus) {
    case 0: {
      for (let a = 0; a < t.length; ++a) if (!n.resolveDisabled(t[a], a, t)) return a;
      return o;
    }
    case 1: {
      r === -1 && (r = t.length);
      for (let a = r - 1; a >= 0; --a) if (!n.resolveDisabled(t[a], a, t)) return a;
      return o;
    }
    case 2: {
      for (let a = r + 1; a < t.length; ++a) if (!n.resolveDisabled(t[a], a, t)) return a;
      return o;
    }
    case 3: {
      for (let a = t.length - 1; a >= 0; --a) if (!n.resolveDisabled(t[a], a, t)) return a;
      return o;
    }
    case 4: {
      for (let a = 0; a < t.length; ++a) if (n.resolveId(t[a], a, t) === e.id) return a;
      return o;
    }
    case 5:
      return null;
    default:
      Hi(e);
  }
}
function rl(e = {}, n = null, t = []) {
  for (let [o, r] of Object.entries(e)) ll(t, al(n, o), r);
  return t;
}
function al(e, n) {
  return e ? e + "[" + n + "]" : n;
}
function ll(e, n, t) {
  if (Array.isArray(t)) for (let [o, r] of t.entries()) ll(e, al(n, o.toString()), r);
  else t instanceof Date ? e.push([n, t.toISOString()]) : typeof t == "boolean" ? e.push([n, t ? "1" : "0"]) : typeof t == "string" ? e.push([n, t]) : typeof t == "number" ? e.push([n, `${t}`]) : t == null ? e.push([n, ""]) : rl(t, n, e);
}
function Wi(e) {
  var n, t;
  let o = (n = e == null ? void 0 : e.form) != null ? n : e.closest("form");
  if (o) {
    for (let r of o.elements) if (r !== e && (r.tagName === "INPUT" && r.type === "submit" || r.tagName === "BUTTON" && r.type === "submit" || r.nodeName === "INPUT" && r.type === "image")) {
      r.click();
      return;
    }
    (t = o.requestSubmit) == null || t.call(o);
  }
}
function Ui(e, n) {
  return e === n;
}
var qi = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(qi || {}), Ki = ((e) => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(Ki || {}), Yi = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Focus = 1] = "Focus", e[e.Other = 2] = "Other", e))(Yi || {});
let sl = Symbol("ComboboxContext");
function pn(e) {
  let n = me(sl, null);
  if (n === null) {
    let t = new Error(`<${e} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t, pn), t;
  }
  return n;
}
let il = Symbol("VirtualContext"), Xi = N({ name: "VirtualProvider", setup(e, { slots: n }) {
  let t = pn("VirtualProvider"), o = T(() => {
    let s = G(t.optionsRef);
    if (!s) return { start: 0, end: 0 };
    let i = window.getComputedStyle(s);
    return { start: parseFloat(i.paddingBlockStart || i.paddingTop), end: parseFloat(i.paddingBlockEnd || i.paddingBottom) };
  }), r = Ei(T(() => ({ scrollPaddingStart: o.value.start, scrollPaddingEnd: o.value.end, count: t.virtual.value.options.length, estimateSize() {
    return 40;
  }, getScrollElement() {
    return G(t.optionsRef);
  }, overscan: 12 }))), a = T(() => {
    var s;
    return (s = t.virtual.value) == null ? void 0 : s.options;
  }), l = S(0);
  return re([a], () => {
    l.value += 1;
  }), ke(il, t.virtual.value ? r : null), () => [ie("div", { style: { position: "relative", width: "100%", height: `${r.value.getTotalSize()}px` }, ref: (s) => {
    s && t.activationTrigger.value !== 0 && t.activeOptionIndex.value !== null && t.virtual.value.options.length > t.activeOptionIndex.value && r.value.scrollToIndex(t.activeOptionIndex.value);
  } }, r.value.getVirtualItems().map((s) => $a(n.default({ option: t.virtual.value.options[s.index], open: t.comboboxState.value === 0 })[0], { key: `${l.value}-${s.index}`, "data-index": s.index, "aria-setsize": t.virtual.value.options.length, "aria-posinset": s.index + 1, style: { position: "absolute", top: 0, left: 0, transform: `translateY(${s.start}px)`, overflowAnchor: "none" } })))];
} }), Fr = N({ name: "Combobox", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: !1 }, by: { type: [String, Function], nullable: !0, default: null }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, form: { type: String, optional: !0 }, name: { type: String, optional: !0 }, nullable: { type: Boolean, default: !1 }, multiple: { type: [Boolean], default: !1 }, immediate: { type: [Boolean], default: !1 }, virtual: { type: Object, default: null } }, inheritAttrs: !1, setup(e, { slots: n, attrs: t, emit: o }) {
  let r = S(1), a = S(null), l = S(null), s = S(null), i = S(null), u = S({ static: !1, hold: !1 }), d = S([]), c = S(null), m = S(2), f = S(!1);
  function p(_ = (D) => D) {
    let D = c.value !== null ? d.value[c.value] : null, z = _(d.value.slice()), j = z.length > 0 && z[0].dataRef.order.value !== null ? z.sort((Y, Z) => Y.dataRef.order.value - Z.dataRef.order.value) : Ya(z, (Y) => G(Y.dataRef.domRef)), K = D ? j.indexOf(D) : null;
    return K === -1 && (K = null), { options: j, activeOptionIndex: K };
  }
  let g = T(() => e.multiple ? 1 : 0), b = T(() => e.nullable), [w, y] = qa(T(() => e.modelValue), (_) => o("update:modelValue", _), T(() => e.defaultValue)), v = T(() => w.value === void 0 ? Re(g.value, { 1: [], 0: void 0 }) : w.value), x = null, h = null;
  function C(_) {
    return Re(g.value, { 0() {
      return y == null ? void 0 : y(_);
    }, 1: () => {
      let D = Ht(O.value.value).slice(), z = Ht(_), j = D.findIndex((K) => O.compare(z, Ht(K)));
      return j === -1 ? D.push(z) : D.splice(j, 1), y == null ? void 0 : y(D);
    } });
  }
  let k = T(() => {
    var _;
    return (_ = e.virtual) == null ? void 0 : _.options;
  });
  re([k], ([_], [D]) => {
    if (O.virtual.value && _ && D && c.value !== null) {
      let z = _.indexOf(D[c.value]);
      z !== -1 ? c.value = z : c.value = null;
    }
  });
  let O = { comboboxState: r, value: v, mode: g, compare(_, D) {
    if (typeof e.by == "string") {
      let z = e.by;
      return (_ == null ? void 0 : _[z]) === (D == null ? void 0 : D[z]);
    }
    return e.by === null ? Ui(_, D) : e.by(_, D);
  }, calculateIndex(_) {
    return O.virtual.value ? e.by === null ? O.virtual.value.options.indexOf(_) : O.virtual.value.options.findIndex((D) => O.compare(D, _)) : d.value.findIndex((D) => O.compare(D.dataRef.value, _));
  }, defaultValue: T(() => e.defaultValue), nullable: b, immediate: T(() => e.immediate), virtual: T(() => {
    var _;
    return e.virtual ? { options: e.virtual.options, disabled: (_ = e.virtual.disabled) != null ? _ : () => !1 } : null;
  }), inputRef: l, labelRef: a, buttonRef: s, optionsRef: i, disabled: T(() => e.disabled), options: d, change(_) {
    y(_);
  }, activeOptionIndex: T(() => {
    if (f.value && c.value === null && (O.virtual.value ? O.virtual.value.options.length > 0 : d.value.length > 0)) {
      if (O.virtual.value) {
        let D = O.virtual.value.options.findIndex((z) => {
          var j;
          return !((j = O.virtual.value) != null && j.disabled(z));
        });
        if (D !== -1) return D;
      }
      let _ = d.value.findIndex((D) => !D.dataRef.disabled);
      if (_ !== -1) return _;
    }
    return c.value;
  }), activationTrigger: m, optionsPropsRef: u, closeCombobox() {
    f.value = !1, !e.disabled && r.value !== 1 && (r.value = 1, c.value = null);
  }, openCombobox() {
    if (f.value = !0, !e.disabled && r.value !== 0) {
      if (O.value.value) {
        let _ = O.calculateIndex(O.value.value);
        _ !== -1 && (c.value = _);
      }
      r.value = 0;
    }
  }, setActivationTrigger(_) {
    m.value = _;
  }, goToOption(_, D, z) {
    f.value = !1, x !== null && cancelAnimationFrame(x), x = requestAnimationFrame(() => {
      if (e.disabled || i.value && !u.value.static && r.value === 1) return;
      if (O.virtual.value) {
        c.value = _ === qe.Specific ? D : ma({ focus: _ }, { resolveItems: () => O.virtual.value.options, resolveActiveIndex: () => {
          var Y, Z;
          return (Z = (Y = O.activeOptionIndex.value) != null ? Y : O.virtual.value.options.findIndex((pe) => {
            var ve;
            return !((ve = O.virtual.value) != null && ve.disabled(pe));
          })) != null ? Z : null;
        }, resolveDisabled: (Y) => O.virtual.value.disabled(Y), resolveId() {
          throw new Error("Function not implemented.");
        } }), m.value = z ?? 2;
        return;
      }
      let j = p();
      if (j.activeOptionIndex === null) {
        let Y = j.options.findIndex((Z) => !Z.dataRef.disabled);
        Y !== -1 && (j.activeOptionIndex = Y);
      }
      let K = _ === qe.Specific ? D : ma({ focus: _ }, { resolveItems: () => j.options, resolveActiveIndex: () => j.activeOptionIndex, resolveId: (Y) => Y.id, resolveDisabled: (Y) => Y.dataRef.disabled });
      c.value = K, m.value = z ?? 2, d.value = j.options;
    });
  }, selectOption(_) {
    let D = d.value.find((j) => j.id === _);
    if (!D) return;
    let { dataRef: z } = D;
    C(z.value);
  }, selectActiveOption() {
    if (O.activeOptionIndex.value !== null) {
      if (O.virtual.value) C(O.virtual.value.options[O.activeOptionIndex.value]);
      else {
        let { dataRef: _ } = d.value[O.activeOptionIndex.value];
        C(_.value);
      }
      O.goToOption(qe.Specific, O.activeOptionIndex.value);
    }
  }, registerOption(_, D) {
    let z = Kn({ id: _, dataRef: D });
    if (O.virtual.value) {
      d.value.push(z);
      return;
    }
    h && cancelAnimationFrame(h);
    let j = p((K) => (K.push(z), K));
    c.value === null && O.isSelected(D.value.value) && (j.activeOptionIndex = j.options.indexOf(z)), d.value = j.options, c.value = j.activeOptionIndex, m.value = 2, j.options.some((K) => !G(K.dataRef.domRef)) && (h = requestAnimationFrame(() => {
      let K = p();
      d.value = K.options, c.value = K.activeOptionIndex;
    }));
  }, unregisterOption(_, D) {
    if (x !== null && cancelAnimationFrame(x), D && (f.value = !0), O.virtual.value) {
      d.value = d.value.filter((j) => j.id !== _);
      return;
    }
    let z = p((j) => {
      let K = j.findIndex((Y) => Y.id === _);
      return K !== -1 && j.splice(K, 1), j;
    });
    d.value = z.options, c.value = z.activeOptionIndex, m.value = 2;
  }, isSelected(_) {
    return Re(g.value, { 0: () => O.compare(Ht(O.value.value), Ht(_)), 1: () => Ht(O.value.value).some((D) => O.compare(Ht(D), Ht(_))) });
  }, isActive(_) {
    return c.value === O.calculateIndex(_);
  } };
  Ar([l, s, i], () => O.closeCombobox(), T(() => r.value === 0)), ke(sl, O), Lr(T(() => Re(r.value, { 0: Pe.Open, 1: Pe.Closed })));
  let A = T(() => {
    var _;
    return (_ = G(l)) == null ? void 0 : _.closest("form");
  });
  return se(() => {
    re([A], () => {
      if (!A.value || e.defaultValue === void 0) return;
      function _() {
        O.change(e.defaultValue);
      }
      return A.value.addEventListener("reset", _), () => {
        var D;
        (D = A.value) == null || D.removeEventListener("reset", _);
      };
    }, { immediate: !0 });
  }), () => {
    var _, D, z;
    let { name: j, disabled: K, form: Y, ...Z } = e, pe = { open: r.value === 0, disabled: K, activeIndex: O.activeOptionIndex.value, activeOption: O.activeOptionIndex.value === null ? null : O.virtual.value ? O.virtual.value.options[(_ = O.activeOptionIndex.value) != null ? _ : 0] : (z = (D = O.options.value[O.activeOptionIndex.value]) == null ? void 0 : D.dataRef.value) != null ? z : null, value: v.value };
    return ie(be, [...j != null && v.value != null ? rl({ [j]: v.value }).map(([ve, ne]) => ie(Nt, tl({ features: Pt.Hidden, key: ve, as: "input", type: "hidden", hidden: !0, readOnly: !0, form: Y, disabled: K, name: ve, value: ne }))) : [], we({ theirProps: { ...t, ...$n(Z, ["by", "defaultValue", "immediate", "modelValue", "multiple", "nullable", "onUpdate:modelValue", "virtual"]) }, ourProps: {}, slot: pe, slots: n, attrs: t, name: "Combobox" })]);
  };
} });
N({ name: "ComboboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: () => `headlessui-combobox-label-${Be()}` } }, setup(e, { attrs: n, slots: t }) {
  let o = pn("ComboboxLabel");
  function r() {
    var a;
    (a = G(o.inputRef)) == null || a.focus({ preventScroll: !0 });
  }
  return () => {
    let a = { open: o.comboboxState.value === 0, disabled: o.disabled.value }, { id: l, ...s } = e, i = { id: l, ref: o.labelRef, onClick: r };
    return we({ ourProps: i, theirProps: s, slot: a, attrs: n, slots: t, name: "ComboboxLabel" });
  };
} });
let Br = N({ name: "ComboboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: () => `headlessui-combobox-button-${Be()}` } }, setup(e, { attrs: n, slots: t, expose: o }) {
  let r = pn("ComboboxButton");
  o({ el: r.buttonRef, $el: r.buttonRef });
  function a(i) {
    r.disabled.value || (r.comboboxState.value === 0 ? r.closeCombobox() : (i.preventDefault(), r.openCombobox()), ze(() => {
      var u;
      return (u = G(r.inputRef)) == null ? void 0 : u.focus({ preventScroll: !0 });
    }));
  }
  function l(i) {
    switch (i.key) {
      case $e.ArrowDown:
        i.preventDefault(), i.stopPropagation(), r.comboboxState.value === 1 && r.openCombobox(), ze(() => {
          var u;
          return (u = r.inputRef.value) == null ? void 0 : u.focus({ preventScroll: !0 });
        });
        return;
      case $e.ArrowUp:
        i.preventDefault(), i.stopPropagation(), r.comboboxState.value === 1 && (r.openCombobox(), ze(() => {
          r.value.value || r.goToOption(qe.Last);
        })), ze(() => {
          var u;
          return (u = r.inputRef.value) == null ? void 0 : u.focus({ preventScroll: !0 });
        });
        return;
      case $e.Escape:
        if (r.comboboxState.value !== 0) return;
        i.preventDefault(), r.optionsRef.value && !r.optionsPropsRef.value.static && i.stopPropagation(), r.closeCombobox(), ze(() => {
          var u;
          return (u = r.inputRef.value) == null ? void 0 : u.focus({ preventScroll: !0 });
        });
        return;
    }
  }
  let s = Mr(T(() => ({ as: e.as, type: n.type })), r.buttonRef);
  return () => {
    var i, u;
    let d = { open: r.comboboxState.value === 0, disabled: r.disabled.value, value: r.value.value }, { id: c, ...m } = e, f = { ref: r.buttonRef, id: c, type: s.value, tabindex: "-1", "aria-haspopup": "listbox", "aria-controls": (i = G(r.optionsRef)) == null ? void 0 : i.id, "aria-expanded": r.comboboxState.value === 0, "aria-labelledby": r.labelRef.value ? [(u = G(r.labelRef)) == null ? void 0 : u.id, c].join(" ") : void 0, disabled: r.disabled.value === !0 ? !0 : void 0, onKeydown: l, onClick: a };
    return we({ ourProps: f, theirProps: m, slot: d, attrs: n, slots: t, name: "ComboboxButton" });
  };
} }), Vr = N({ name: "ComboboxInput", props: { as: { type: [Object, String], default: "input" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, displayValue: { type: Function }, defaultValue: { type: String, default: void 0 }, id: { type: String, default: () => `headlessui-combobox-input-${Be()}` } }, emits: { change: (e) => !0 }, setup(e, { emit: n, attrs: t, slots: o, expose: r }) {
  let a = pn("ComboboxInput"), l = T(() => vt(G(a.inputRef))), s = { value: !1 };
  r({ el: a.inputRef, $el: a.inputRef });
  function i() {
    a.change(null);
    let v = G(a.optionsRef);
    v && (v.scrollTop = 0), a.goToOption(qe.Nothing);
  }
  let u = T(() => {
    var v;
    let x = a.value.value;
    return G(a.inputRef) ? typeof e.displayValue < "u" && x !== void 0 ? (v = e.displayValue(x)) != null ? v : "" : typeof x == "string" ? x : "" : "";
  });
  se(() => {
    re([u, a.comboboxState, l], ([v, x], [h, C]) => {
      if (s.value) return;
      let k = G(a.inputRef);
      k && ((C === 0 && x === 1 || v !== h) && (k.value = v), requestAnimationFrame(() => {
        var O;
        if (s.value || !k || ((O = l.value) == null ? void 0 : O.activeElement) !== k) return;
        let { selectionStart: A, selectionEnd: _ } = k;
        Math.abs((_ ?? 0) - (A ?? 0)) === 0 && A === 0 && k.setSelectionRange(k.value.length, k.value.length);
      }));
    }, { immediate: !0 }), re([a.comboboxState], ([v], [x]) => {
      if (v === 0 && x === 1) {
        if (s.value) return;
        let h = G(a.inputRef);
        if (!h) return;
        let C = h.value, { selectionStart: k, selectionEnd: O, selectionDirection: A } = h;
        h.value = "", h.value = C, A !== null ? h.setSelectionRange(k, O, A) : h.setSelectionRange(k, O);
      }
    });
  });
  let d = S(!1);
  function c() {
    d.value = !0;
  }
  function m() {
    en().nextFrame(() => {
      d.value = !1;
    });
  }
  let f = Ti();
  function p(v) {
    switch (s.value = !0, f(() => {
      d.value || (s.value = !1);
    }), v.key) {
      case $e.Enter:
        if (s.value = !1, a.comboboxState.value !== 0 || d.value) return;
        if (v.preventDefault(), v.stopPropagation(), a.activeOptionIndex.value === null) {
          a.closeCombobox();
          return;
        }
        a.selectActiveOption(), a.mode.value === 0 && a.closeCombobox();
        break;
      case $e.ArrowDown:
        return s.value = !1, v.preventDefault(), v.stopPropagation(), Re(a.comboboxState.value, { 0: () => a.goToOption(qe.Next), 1: () => a.openCombobox() });
      case $e.ArrowUp:
        return s.value = !1, v.preventDefault(), v.stopPropagation(), Re(a.comboboxState.value, { 0: () => a.goToOption(qe.Previous), 1: () => {
          a.openCombobox(), ze(() => {
            a.value.value || a.goToOption(qe.Last);
          });
        } });
      case $e.Home:
        if (v.shiftKey) break;
        return s.value = !1, v.preventDefault(), v.stopPropagation(), a.goToOption(qe.First);
      case $e.PageUp:
        return s.value = !1, v.preventDefault(), v.stopPropagation(), a.goToOption(qe.First);
      case $e.End:
        if (v.shiftKey) break;
        return s.value = !1, v.preventDefault(), v.stopPropagation(), a.goToOption(qe.Last);
      case $e.PageDown:
        return s.value = !1, v.preventDefault(), v.stopPropagation(), a.goToOption(qe.Last);
      case $e.Escape:
        if (s.value = !1, a.comboboxState.value !== 0) return;
        v.preventDefault(), a.optionsRef.value && !a.optionsPropsRef.value.static && v.stopPropagation(), a.nullable.value && a.mode.value === 0 && a.value.value === null && i(), a.closeCombobox();
        break;
      case $e.Tab:
        if (s.value = !1, a.comboboxState.value !== 0) return;
        a.mode.value === 0 && a.activationTrigger.value !== 1 && a.selectActiveOption(), a.closeCombobox();
        break;
    }
  }
  function g(v) {
    n("change", v), a.nullable.value && a.mode.value === 0 && v.target.value === "" && i(), a.openCombobox();
  }
  function b(v) {
    var x, h, C;
    let k = (x = v.relatedTarget) != null ? x : Ft.find((O) => O !== v.currentTarget);
    if (s.value = !1, !((h = G(a.optionsRef)) != null && h.contains(k)) && !((C = G(a.buttonRef)) != null && C.contains(k)) && a.comboboxState.value === 0) return v.preventDefault(), a.mode.value === 0 && (a.nullable.value && a.value.value === null ? i() : a.activationTrigger.value !== 1 && a.selectActiveOption()), a.closeCombobox();
  }
  function w(v) {
    var x, h, C;
    let k = (x = v.relatedTarget) != null ? x : Ft.find((O) => O !== v.currentTarget);
    (h = G(a.buttonRef)) != null && h.contains(k) || (C = G(a.optionsRef)) != null && C.contains(k) || a.disabled.value || a.immediate.value && a.comboboxState.value !== 0 && (a.openCombobox(), en().nextFrame(() => {
      a.setActivationTrigger(1);
    }));
  }
  let y = T(() => {
    var v, x, h, C;
    return (C = (h = (x = e.defaultValue) != null ? x : a.defaultValue.value !== void 0 ? (v = e.displayValue) == null ? void 0 : v.call(e, a.defaultValue.value) : null) != null ? h : a.defaultValue.value) != null ? C : "";
  });
  return () => {
    var v, x, h, C, k, O, A;
    let _ = { open: a.comboboxState.value === 0 }, { id: D, displayValue: z, onChange: j, ...K } = e, Y = { "aria-controls": (v = a.optionsRef.value) == null ? void 0 : v.id, "aria-expanded": a.comboboxState.value === 0, "aria-activedescendant": a.activeOptionIndex.value === null ? void 0 : a.virtual.value ? (x = a.options.value.find((Z) => !a.virtual.value.disabled(Z.dataRef.value) && a.compare(Z.dataRef.value, a.virtual.value.options[a.activeOptionIndex.value]))) == null ? void 0 : x.id : (h = a.options.value[a.activeOptionIndex.value]) == null ? void 0 : h.id, "aria-labelledby": (O = (C = G(a.labelRef)) == null ? void 0 : C.id) != null ? O : (k = G(a.buttonRef)) == null ? void 0 : k.id, "aria-autocomplete": "list", id: D, onCompositionstart: c, onCompositionend: m, onKeydown: p, onInput: g, onFocus: w, onBlur: b, role: "combobox", type: (A = t.type) != null ? A : "text", tabIndex: 0, ref: a.inputRef, defaultValue: y.value, disabled: a.disabled.value === !0 ? !0 : void 0 };
    return we({ ourProps: Y, theirProps: K, slot: _, attrs: t, slots: o, features: mt.RenderStrategy | mt.Static, name: "ComboboxInput" });
  };
} }), Nr = N({ name: "ComboboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, hold: { type: [Boolean], default: !1 } }, setup(e, { attrs: n, slots: t, expose: o }) {
  let r = pn("ComboboxOptions"), a = `headlessui-combobox-options-${Be()}`;
  o({ el: r.optionsRef, $el: r.optionsRef }), Ve(() => {
    r.optionsPropsRef.value.static = e.static;
  }), Ve(() => {
    r.optionsPropsRef.value.hold = e.hold;
  });
  let l = Pn(), s = T(() => l !== null ? (l.value & Pe.Open) === Pe.Open : r.comboboxState.value === 0);
  Ni({ container: T(() => G(r.optionsRef)), enabled: T(() => r.comboboxState.value === 0), accept(u) {
    return u.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : u.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(u) {
    u.setAttribute("role", "none");
  } });
  function i(u) {
    u.preventDefault();
  }
  return () => {
    var u, d, c;
    let m = { open: r.comboboxState.value === 0 }, f = { "aria-labelledby": (c = (u = G(r.labelRef)) == null ? void 0 : u.id) != null ? c : (d = G(r.buttonRef)) == null ? void 0 : d.id, id: a, ref: r.optionsRef, role: "listbox", "aria-multiselectable": r.mode.value === 1 ? !0 : void 0, onMousedown: i }, p = $n(e, ["hold"]);
    return we({ ourProps: f, theirProps: p, slot: m, attrs: n, slots: r.virtual.value && r.comboboxState.value === 0 ? { ...t, default: () => [ie(Xi, {}, t.default)] } : t, features: mt.RenderStrategy | mt.Static, visible: s.value, name: "ComboboxOptions" });
  };
} }), qn = N({ name: "ComboboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: !1 }, order: { type: [Number], default: null } }, setup(e, { slots: n, attrs: t, expose: o }) {
  let r = pn("ComboboxOption"), a = `headlessui-combobox-option-${Be()}`, l = S(null), s = T(() => {
    var y;
    return e.disabled || ((y = r.virtual.value) == null ? void 0 : y.disabled(e.value));
  });
  o({ el: l, $el: l });
  let i = T(() => {
    var y;
    return r.virtual.value ? r.activeOptionIndex.value === r.calculateIndex(e.value) : r.activeOptionIndex.value === null ? !1 : ((y = r.options.value[r.activeOptionIndex.value]) == null ? void 0 : y.id) === a;
  }), u = T(() => r.isSelected(e.value)), d = me(il, null), c = T(() => ({ disabled: e.disabled, value: e.value, domRef: l, order: T(() => e.order) }));
  se(() => r.registerOption(a, c)), ye(() => r.unregisterOption(a, i.value)), Ve(() => {
    let y = G(l);
    y && (d == null || d.value.measureElement(y));
  }), Ve(() => {
    r.comboboxState.value === 0 && i.value && (r.virtual.value || r.activationTrigger.value !== 0 && ze(() => {
      var y, v;
      return (v = (y = G(l)) == null ? void 0 : y.scrollIntoView) == null ? void 0 : v.call(y, { block: "nearest" });
    }));
  });
  function m(y) {
    y.preventDefault(), y.button === ol.Left && (s.value || (r.selectOption(a), Ja() || requestAnimationFrame(() => {
      var v;
      return (v = G(r.inputRef)) == null ? void 0 : v.focus({ preventScroll: !0 });
    }), r.mode.value === 0 && r.closeCombobox()));
  }
  function f() {
    var y;
    if (e.disabled || (y = r.virtual.value) != null && y.disabled(e.value)) return r.goToOption(qe.Nothing);
    let v = r.calculateIndex(e.value);
    r.goToOption(qe.Specific, v);
  }
  let p = Vi();
  function g(y) {
    p.update(y);
  }
  function b(y) {
    var v;
    if (!p.wasMoved(y) || e.disabled || (v = r.virtual.value) != null && v.disabled(e.value) || i.value) return;
    let x = r.calculateIndex(e.value);
    r.goToOption(qe.Specific, x, 0);
  }
  function w(y) {
    var v;
    p.wasMoved(y) && (e.disabled || (v = r.virtual.value) != null && v.disabled(e.value) || i.value && (r.optionsPropsRef.value.hold || r.goToOption(qe.Nothing)));
  }
  return () => {
    let { disabled: y } = e, v = { active: i.value, selected: u.value, disabled: y }, x = { id: a, ref: l, role: "option", tabIndex: y === !0 ? void 0 : -1, "aria-disabled": y === !0 ? !0 : void 0, "aria-selected": u.value, disabled: void 0, onMousedown: m, onFocus: f, onPointerenter: g, onMouseenter: g, onPointermove: b, onMousemove: b, onPointerleave: w, onMouseleave: w }, h = $n(e, ["order", "value"]);
    return we({ ourProps: x, theirProps: h, slot: v, attrs: t, slots: n, name: "ComboboxOption" });
  };
} });
function zr(e, n, t, o) {
  Jn.isServer || Ve((r) => {
    e = e ?? window, e.addEventListener(n, t, o), r(() => e.removeEventListener(n, t, o));
  });
}
var it = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(it || {});
function jr() {
  let e = S(0), n = S(!0);
  return Qa(n, "keydown", (t) => {
    t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
  }), e;
}
function ul(e) {
  if (!e) return /* @__PURE__ */ new Set();
  if (typeof e == "function") return new Set(e());
  let n = /* @__PURE__ */ new Set();
  for (let t of e.value) {
    let o = G(t);
    o instanceof HTMLElement && n.add(o);
  }
  return n;
}
var dl = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(dl || {});
let An = Object.assign(N({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: [Object, Function], default: S(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: n, slots: t, expose: o }) {
  let r = S(null);
  o({ el: r, $el: r });
  let a = T(() => vt(r)), l = S(!1);
  se(() => l.value = !0), ye(() => l.value = !1), Qi({ ownerDocument: a }, T(() => l.value && !!(e.features & 16)));
  let s = Zi({ ownerDocument: a, container: r, initialFocus: T(() => e.initialFocus) }, T(() => l.value && !!(e.features & 2)));
  eu({ ownerDocument: a, container: r, containers: e.containers, previousActiveElement: s }, T(() => l.value && !!(e.features & 8)));
  let i = jr();
  function u(f) {
    let p = G(r);
    p && ((g) => g())(() => {
      Re(i.value, { [it.Forwards]: () => {
        yt(p, Je.First, { skipElements: [f.relatedTarget] });
      }, [it.Backwards]: () => {
        yt(p, Je.Last, { skipElements: [f.relatedTarget] });
      } });
    });
  }
  let d = S(!1);
  function c(f) {
    f.key === "Tab" && (d.value = !0, requestAnimationFrame(() => {
      d.value = !1;
    }));
  }
  function m(f) {
    if (!l.value) return;
    let p = ul(e.containers);
    G(r) instanceof HTMLElement && p.add(G(r));
    let g = f.relatedTarget;
    g instanceof HTMLElement && g.dataset.headlessuiFocusGuard !== "true" && (cl(p, g) || (d.value ? yt(G(r), Re(i.value, { [it.Forwards]: () => Je.Next, [it.Backwards]: () => Je.Previous }) | Je.WrapAround, { relativeTo: f.target }) : f.target instanceof HTMLElement && un(f.target)));
  }
  return () => {
    let f = {}, p = { ref: r, onKeydown: c, onFocusout: m }, { features: g, initialFocus: b, containers: w, ...y } = e;
    return ie(be, [!!(g & 4) && ie(Nt, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: u, features: Pt.Focusable }), we({ ourProps: p, theirProps: { ...n, ...y }, slot: f, attrs: n, slots: t, name: "FocusTrap" }), !!(g & 4) && ie(Nt, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: u, features: Pt.Focusable })]);
  };
} }), { features: dl });
function Ji(e) {
  let n = S(Ft.slice());
  return re([e], ([t], [o]) => {
    o === !0 && t === !1 ? Ir(() => {
      n.value.splice(0);
    }) : o === !1 && t === !0 && (n.value = Ft.slice());
  }, { flush: "post" }), () => {
    var t;
    return (t = n.value.find((o) => o != null && o.isConnected)) != null ? t : null;
  };
}
function Qi({ ownerDocument: e }, n) {
  let t = Ji(n);
  se(() => {
    Ve(() => {
      var o, r;
      n.value || ((o = e.value) == null ? void 0 : o.activeElement) === ((r = e.value) == null ? void 0 : r.body) && un(t());
    }, { flush: "post" });
  }), ye(() => {
    n.value && un(t());
  });
}
function Zi({ ownerDocument: e, container: n, initialFocus: t }, o) {
  let r = S(null), a = S(!1);
  return se(() => a.value = !0), ye(() => a.value = !1), se(() => {
    re([n, t, o], (l, s) => {
      if (l.every((u, d) => (s == null ? void 0 : s[d]) === u) || !o.value) return;
      let i = G(n);
      i && Ir(() => {
        var u, d;
        if (!a.value) return;
        let c = G(t), m = (u = e.value) == null ? void 0 : u.activeElement;
        if (c) {
          if (c === m) {
            r.value = m;
            return;
          }
        } else if (i.contains(m)) {
          r.value = m;
          return;
        }
        c ? un(c) : yt(i, Je.First | Je.NoScroll) === Un.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), r.value = (d = e.value) == null ? void 0 : d.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), r;
}
function eu({ ownerDocument: e, container: n, containers: t, previousActiveElement: o }, r) {
  var a;
  zr((a = e.value) == null ? void 0 : a.defaultView, "focus", (l) => {
    if (!r.value) return;
    let s = ul(t);
    G(n) instanceof HTMLElement && s.add(G(n));
    let i = o.value;
    if (!i) return;
    let u = l.target;
    u && u instanceof HTMLElement ? cl(s, u) ? (o.value = u, un(u)) : (l.preventDefault(), l.stopPropagation(), un(i)) : un(o.value);
  }, !0);
}
function cl(e, n) {
  for (let t of e) if (t.contains(n)) return !0;
  return !1;
}
function tu(e) {
  let n = Do(e.getSnapshot());
  return ye(e.subscribe(() => {
    n.value = e.getSnapshot();
  })), n;
}
function nu(e, n) {
  let t = e(), o = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return t;
  }, subscribe(r) {
    return o.add(r), () => o.delete(r);
  }, dispatch(r, ...a) {
    let l = n[r].call(t, ...a);
    l && (t = l, o.forEach((s) => s()));
  } };
}
function ou() {
  let e;
  return { before({ doc: n }) {
    var t;
    let o = n.documentElement, r = (t = n.defaultView) != null ? t : window;
    e = Math.max(0, r.innerWidth - o.clientWidth);
  }, after({ doc: n, d: t }) {
    let o = n.documentElement, r = Math.max(0, o.clientWidth - o.offsetWidth), a = Math.max(0, e - r);
    t.style(o, "paddingRight", `${a}px`);
  } };
}
function ru() {
  return Xa() ? { before({ doc: e, d: n, meta: t }) {
    function o(r) {
      return t.containers.flatMap((a) => a()).some((a) => a.contains(r));
    }
    n.microTask(() => {
      var r;
      if (window.getComputedStyle(e.documentElement).scrollBehavior !== "auto") {
        let s = en();
        s.style(e.documentElement, "scrollBehavior", "auto"), n.add(() => n.microTask(() => s.dispose()));
      }
      let a = (r = window.scrollY) != null ? r : window.pageYOffset, l = null;
      n.addEventListener(e, "click", (s) => {
        if (s.target instanceof HTMLElement) try {
          let i = s.target.closest("a");
          if (!i) return;
          let { hash: u } = new URL(i.href), d = e.querySelector(u);
          d && !o(d) && (l = d);
        } catch {
        }
      }, !0), n.addEventListener(e, "touchstart", (s) => {
        if (s.target instanceof HTMLElement) if (o(s.target)) {
          let i = s.target;
          for (; i.parentElement && o(i.parentElement); ) i = i.parentElement;
          n.style(i, "overscrollBehavior", "contain");
        } else n.style(s.target, "touchAction", "none");
      }), n.addEventListener(e, "touchmove", (s) => {
        if (s.target instanceof HTMLElement) {
          if (s.target.tagName === "INPUT") return;
          if (o(s.target)) {
            let i = s.target;
            for (; i.parentElement && i.dataset.headlessuiPortal !== "" && !(i.scrollHeight > i.clientHeight || i.scrollWidth > i.clientWidth); ) i = i.parentElement;
            i.dataset.headlessuiPortal === "" && s.preventDefault();
          } else s.preventDefault();
        }
      }, { passive: !1 }), n.add(() => {
        var s;
        let i = (s = window.scrollY) != null ? s : window.pageYOffset;
        a !== i && window.scrollTo(0, a), l && l.isConnected && (l.scrollIntoView({ block: "nearest" }), l = null);
      });
    });
  } } : {};
}
function au() {
  return { before({ doc: e, d: n }) {
    n.style(e.documentElement, "overflow", "hidden");
  } };
}
function lu(e) {
  let n = {};
  for (let t of e) Object.assign(n, t(n));
  return n;
}
let sn = nu(() => /* @__PURE__ */ new Map(), { PUSH(e, n) {
  var t;
  let o = (t = this.get(e)) != null ? t : { doc: e, count: 0, d: en(), meta: /* @__PURE__ */ new Set() };
  return o.count++, o.meta.add(n), this.set(e, o), this;
}, POP(e, n) {
  let t = this.get(e);
  return t && (t.count--, t.meta.delete(n)), this;
}, SCROLL_PREVENT({ doc: e, d: n, meta: t }) {
  let o = { doc: e, d: n, meta: lu(t) }, r = [ru(), ou(), au()];
  r.forEach(({ before: a }) => a == null ? void 0 : a(o)), r.forEach(({ after: a }) => a == null ? void 0 : a(o));
}, SCROLL_ALLOW({ d: e }) {
  e.dispose();
}, TEARDOWN({ doc: e }) {
  this.delete(e);
} });
sn.subscribe(() => {
  let e = sn.getSnapshot(), n = /* @__PURE__ */ new Map();
  for (let [t] of e) n.set(t, t.documentElement.style.overflow);
  for (let t of e.values()) {
    let o = n.get(t.doc) === "hidden", r = t.count !== 0;
    (r && !o || !r && o) && sn.dispatch(t.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", t), t.count === 0 && sn.dispatch("TEARDOWN", t);
  }
});
function su(e, n, t) {
  let o = tu(sn), r = T(() => {
    let a = e.value ? o.value.get(e.value) : void 0;
    return a ? a.count > 0 : !1;
  });
  return re([e, n], ([a, l], [s], i) => {
    if (!a || !l) return;
    sn.dispatch("PUSH", a, t);
    let u = !1;
    i(() => {
      u || (sn.dispatch("POP", s ?? a, t), u = !0);
    });
  }, { immediate: !0 }), r;
}
let Yo = /* @__PURE__ */ new Map(), Mn = /* @__PURE__ */ new Map();
function va(e, n = S(!0)) {
  Ve((t) => {
    var o;
    if (!n.value) return;
    let r = G(e);
    if (!r) return;
    t(function() {
      var l;
      if (!r) return;
      let s = (l = Mn.get(r)) != null ? l : 1;
      if (s === 1 ? Mn.delete(r) : Mn.set(r, s - 1), s !== 1) return;
      let i = Yo.get(r);
      i && (i["aria-hidden"] === null ? r.removeAttribute("aria-hidden") : r.setAttribute("aria-hidden", i["aria-hidden"]), r.inert = i.inert, Yo.delete(r));
    });
    let a = (o = Mn.get(r)) != null ? o : 0;
    Mn.set(r, a + 1), a === 0 && (Yo.set(r, { "aria-hidden": r.getAttribute("aria-hidden"), inert: r.inert }), r.setAttribute("aria-hidden", "true"), r.inert = !0);
  });
}
function fl({ defaultContainers: e = [], portals: n, mainTreeNodeRef: t } = {}) {
  let o = S(null), r = vt(o);
  function a() {
    var l, s, i;
    let u = [];
    for (let d of e) d !== null && (d instanceof HTMLElement ? u.push(d) : "value" in d && d.value instanceof HTMLElement && u.push(d.value));
    if (n != null && n.value) for (let d of n.value) u.push(d);
    for (let d of (l = r == null ? void 0 : r.querySelectorAll("html > *, body > *")) != null ? l : []) d !== document.body && d !== document.head && d instanceof HTMLElement && d.id !== "headlessui-portal-root" && (d.contains(G(o)) || d.contains((i = (s = G(o)) == null ? void 0 : s.getRootNode()) == null ? void 0 : i.host) || u.some((c) => d.contains(c)) || u.push(d));
    return u;
  }
  return { resolveContainers: a, contains(l) {
    return a().some((s) => s.contains(l));
  }, mainTreeNodeRef: o, MainTreeNode() {
    return t != null ? null : ie(Nt, { features: Pt.Hidden, ref: o });
  } };
}
function iu() {
  let e = S(null);
  return { mainTreeNodeRef: e, MainTreeNode() {
    return ie(Nt, { features: Pt.Hidden, ref: e });
  } };
}
let pl = Symbol("ForcePortalRootContext");
function uu() {
  return me(pl, !1);
}
let cr = N({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: n, attrs: t }) {
  return ke(pl, e.force), () => {
    let { force: o, ...r } = e;
    return we({ theirProps: r, ourProps: {}, slot: {}, slots: n, attrs: t, name: "ForcePortalRoot" });
  };
} }), ml = Symbol("StackContext");
var fr = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(fr || {});
function du() {
  return me(ml, () => {
  });
}
function cu({ type: e, enabled: n, element: t, onUpdate: o }) {
  let r = du();
  function a(...l) {
    o == null || o(...l), r(...l);
  }
  se(() => {
    re(n, (l, s) => {
      l ? a(0, e, t) : s === !0 && a(1, e, t);
    }, { immediate: !0, flush: "sync" });
  }), ye(() => {
    n.value && a(1, e, t);
  }), ke(ml, a);
}
let vl = Symbol("DescriptionContext");
function fu() {
  let e = me(vl, null);
  if (e === null) throw new Error("Missing parent");
  return e;
}
function gl({ slot: e = S({}), name: n = "Description", props: t = {} } = {}) {
  let o = S([]);
  function r(a) {
    return o.value.push(a), () => {
      let l = o.value.indexOf(a);
      l !== -1 && o.value.splice(l, 1);
    };
  }
  return ke(vl, { register: r, slot: e, name: n, props: t }), T(() => o.value.length > 0 ? o.value.join(" ") : void 0);
}
N({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: () => `headlessui-description-${Be()}` } }, setup(e, { attrs: n, slots: t }) {
  let o = fu();
  return se(() => ye(o.register(e.id))), () => {
    let { name: r = "Description", slot: a = S({}), props: l = {} } = o, { id: s, ...i } = e, u = { ...Object.entries(l).reduce((d, [c, m]) => Object.assign(d, { [c]: P(m) }), {}), id: s };
    return we({ ourProps: u, theirProps: i, slot: a.value, attrs: n, slots: t, name: r });
  };
} });
function pu(e) {
  let n = vt(e);
  if (!n) {
    if (e === null) return null;
    throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`);
  }
  let t = n.getElementById("headlessui-portal-root");
  if (t) return t;
  let o = n.createElement("div");
  return o.setAttribute("id", "headlessui-portal-root"), n.body.appendChild(o);
}
let hl = N({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: n, attrs: t }) {
  let o = S(null), r = T(() => vt(o)), a = uu(), l = me(yl, null), s = S(a === !0 || l == null ? pu(o.value) : l.resolveTarget()), i = S(!1);
  se(() => {
    i.value = !0;
  }), Ve(() => {
    a || l != null && (s.value = l.resolveTarget());
  });
  let u = me(pr, null), d = !1, c = Pa();
  return re(o, () => {
    if (d || !u) return;
    let m = G(o);
    m && (ye(u.register(m), c), d = !0);
  }), ye(() => {
    var m, f;
    let p = (m = r.value) == null ? void 0 : m.getElementById("headlessui-portal-root");
    p && s.value === p && s.value.children.length <= 0 && ((f = s.value.parentElement) == null || f.removeChild(s.value));
  }), () => {
    if (!i.value || s.value === null) return null;
    let m = { ref: o, "data-headlessui-portal": "" };
    return ie($o, { to: s.value }, we({ ourProps: m, theirProps: e, slot: {}, attrs: t, slots: n, name: "Portal" }));
  };
} }), pr = Symbol("PortalParentContext");
function bl() {
  let e = me(pr, null), n = S([]);
  function t(a) {
    return n.value.push(a), e && e.register(a), () => o(a);
  }
  function o(a) {
    let l = n.value.indexOf(a);
    l !== -1 && n.value.splice(l, 1), e && e.unregister(a);
  }
  let r = { register: t, unregister: o, portals: n };
  return [n, N({ name: "PortalWrapper", setup(a, { slots: l }) {
    return ke(pr, r), () => {
      var s;
      return (s = l.default) == null ? void 0 : s.call(l);
    };
  } })];
}
let yl = Symbol("PortalGroupContext"), mu = N({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: n, slots: t }) {
  let o = Kn({ resolveTarget() {
    return e.target;
  } });
  return ke(yl, o), () => {
    let { target: r, ...a } = e;
    return we({ theirProps: a, ourProps: {}, slot: {}, attrs: n, slots: t, name: "PortalGroup" });
  };
} });
var vu = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(vu || {});
let mr = Symbol("DialogContext");
function Qn(e) {
  let n = me(mr, null);
  if (n === null) {
    let t = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t, Qn), t;
  }
  return n;
}
let ao = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", gu = N({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: ao }, initialFocus: { type: Object, default: null }, id: { type: String, default: () => `headlessui-dialog-${Be()}` }, role: { type: String, default: "dialog" } }, emits: { close: (e) => !0 }, setup(e, { emit: n, attrs: t, slots: o, expose: r }) {
  var a;
  let l = S(!1);
  se(() => {
    l.value = !0;
  });
  let s = !1, i = T(() => e.role === "dialog" || e.role === "alertdialog" ? e.role : (s || (s = !0, console.warn(`Invalid role [${i}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog")), u = S(0), d = Pn(), c = T(() => e.open === ao && d !== null ? (d.value & Pe.Open) === Pe.Open : e.open), m = S(null), f = T(() => vt(m));
  if (r({ el: m, $el: m }), !(e.open !== ao || d !== null)) throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof c.value != "boolean") throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${c.value === ao ? void 0 : e.open}`);
  let p = T(() => l.value && c.value ? 0 : 1), g = T(() => p.value === 0), b = T(() => u.value > 1), w = me(mr, null) !== null, [y, v] = bl(), { resolveContainers: x, mainTreeNodeRef: h, MainTreeNode: C } = fl({ portals: y, defaultContainers: [T(() => {
    var ne;
    return (ne = Y.panelRef.value) != null ? ne : m.value;
  })] }), k = T(() => b.value ? "parent" : "leaf"), O = T(() => d !== null ? (d.value & Pe.Closing) === Pe.Closing : !1), A = T(() => w || O.value ? !1 : g.value), _ = T(() => {
    var ne, Se, je;
    return (je = Array.from((Se = (ne = f.value) == null ? void 0 : ne.querySelectorAll("body > *")) != null ? Se : []).find((Me) => Me.id === "headlessui-portal-root" ? !1 : Me.contains(G(h)) && Me instanceof HTMLElement)) != null ? je : null;
  });
  va(_, A);
  let D = T(() => b.value ? !0 : g.value), z = T(() => {
    var ne, Se, je;
    return (je = Array.from((Se = (ne = f.value) == null ? void 0 : ne.querySelectorAll("[data-headlessui-portal]")) != null ? Se : []).find((Me) => Me.contains(G(h)) && Me instanceof HTMLElement)) != null ? je : null;
  });
  va(z, D), cu({ type: "Dialog", enabled: T(() => p.value === 0), element: m, onUpdate: (ne, Se) => {
    if (Se === "Dialog") return Re(ne, { [fr.Add]: () => u.value += 1, [fr.Remove]: () => u.value -= 1 });
  } });
  let j = gl({ name: "DialogDescription", slot: T(() => ({ open: c.value })) }), K = S(null), Y = { titleId: K, panelRef: S(null), dialogState: p, setTitleId(ne) {
    K.value !== ne && (K.value = ne);
  }, close() {
    n("close", !1);
  } };
  ke(mr, Y);
  let Z = T(() => !(!g.value || b.value));
  Ar(x, (ne, Se) => {
    ne.preventDefault(), Y.close(), ze(() => Se == null ? void 0 : Se.focus());
  }, Z);
  let pe = T(() => !(b.value || p.value !== 0));
  zr((a = f.value) == null ? void 0 : a.defaultView, "keydown", (ne) => {
    pe.value && (ne.defaultPrevented || ne.key === $e.Escape && (ne.preventDefault(), ne.stopPropagation(), Y.close()));
  });
  let ve = T(() => !(O.value || p.value !== 0 || w));
  return su(f, ve, (ne) => {
    var Se;
    return { containers: [...(Se = ne.containers) != null ? Se : [], x] };
  }), Ve((ne) => {
    if (p.value !== 0) return;
    let Se = G(m);
    if (!Se) return;
    let je = new ResizeObserver((Me) => {
      for (let Mt of Me) {
        let dt = Mt.target.getBoundingClientRect();
        dt.x === 0 && dt.y === 0 && dt.width === 0 && dt.height === 0 && Y.close();
      }
    });
    je.observe(Se), ne(() => je.disconnect());
  }), () => {
    let { id: ne, open: Se, initialFocus: je, ...Me } = e, Mt = { ...t, ref: m, id: ne, role: i.value, "aria-modal": p.value === 0 ? !0 : void 0, "aria-labelledby": K.value, "aria-describedby": j.value }, dt = { open: p.value === 0 };
    return ie(cr, { force: !0 }, () => [ie(hl, () => ie(mu, { target: m.value }, () => ie(cr, { force: !1 }, () => ie(An, { initialFocus: je, containers: x, features: g.value ? Re(k.value, { parent: An.features.RestoreFocus, leaf: An.features.All & ~An.features.FocusLock }) : An.features.None }, () => ie(v, {}, () => we({ ourProps: Mt, theirProps: { ...Me, ...t }, slot: dt, attrs: t, slots: o, visible: p.value === 0, features: mt.RenderStrategy | mt.Static, name: "Dialog" })))))), ie(C)]);
  };
} });
N({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-overlay-${Be()}` } }, setup(e, { attrs: n, slots: t }) {
  let o = Qn("DialogOverlay");
  function r(a) {
    a.target === a.currentTarget && (a.preventDefault(), a.stopPropagation(), o.close());
  }
  return () => {
    let { id: a, ...l } = e;
    return we({ ourProps: { id: a, "aria-hidden": !0, onClick: r }, theirProps: l, slot: { open: o.dialogState.value === 0 }, attrs: n, slots: t, name: "DialogOverlay" });
  };
} });
N({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-backdrop-${Be()}` } }, inheritAttrs: !1, setup(e, { attrs: n, slots: t, expose: o }) {
  let r = Qn("DialogBackdrop"), a = S(null);
  return o({ el: a, $el: a }), se(() => {
    if (r.panelRef.value === null) throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { id: l, ...s } = e, i = { id: l, ref: a, "aria-hidden": !0 };
    return ie(cr, { force: !0 }, () => ie(hl, () => we({ ourProps: i, theirProps: { ...n, ...s }, slot: { open: r.dialogState.value === 0 }, attrs: n, slots: t, name: "DialogBackdrop" })));
  };
} });
let hu = N({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-panel-${Be()}` } }, setup(e, { attrs: n, slots: t, expose: o }) {
  let r = Qn("DialogPanel");
  o({ el: r.panelRef, $el: r.panelRef });
  function a(l) {
    l.stopPropagation();
  }
  return () => {
    let { id: l, ...s } = e, i = { id: l, ref: r.panelRef, onClick: a };
    return we({ ourProps: i, theirProps: s, slot: { open: r.dialogState.value === 0 }, attrs: n, slots: t, name: "DialogPanel" });
  };
} }), bu = N({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: () => `headlessui-dialog-title-${Be()}` } }, setup(e, { attrs: n, slots: t }) {
  let o = Qn("DialogTitle");
  return se(() => {
    o.setTitleId(e.id), ye(() => o.setTitleId(null));
  }), () => {
    let { id: r, ...a } = e;
    return we({ ourProps: { id: r }, theirProps: a, slot: { open: o.dialogState.value === 0 }, attrs: n, slots: t, name: "DialogTitle" });
  };
} });
var yu = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(yu || {});
let wl = Symbol("PopoverContext");
function Vo(e) {
  let n = me(wl, null);
  if (n === null) {
    let t = new Error(`<${e} /> is missing a parent <${Sl.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t, Vo), t;
  }
  return n;
}
let xl = Symbol("PopoverGroupContext");
function Cl() {
  return me(xl, null);
}
let kl = Symbol("PopoverPanelContext");
function wu() {
  return me(kl, null);
}
let Sl = N({ name: "Popover", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: n, attrs: t, expose: o }) {
  var r;
  let a = S(null);
  o({ el: a, $el: a });
  let l = S(1), s = S(null), i = S(null), u = S(null), d = S(null), c = T(() => vt(a)), m = T(() => {
    var h, C;
    if (!G(s) || !G(d)) return !1;
    for (let j of document.querySelectorAll("body > *")) if (Number(j == null ? void 0 : j.contains(G(s))) ^ Number(j == null ? void 0 : j.contains(G(d)))) return !0;
    let k = Bo(), O = k.indexOf(G(s)), A = (O + k.length - 1) % k.length, _ = (O + 1) % k.length, D = k[A], z = k[_];
    return !((h = G(d)) != null && h.contains(D)) && !((C = G(d)) != null && C.contains(z));
  }), f = { popoverState: l, buttonId: S(null), panelId: S(null), panel: d, button: s, isPortalled: m, beforePanelSentinel: i, afterPanelSentinel: u, togglePopover() {
    l.value = Re(l.value, { 0: 1, 1: 0 });
  }, closePopover() {
    l.value !== 1 && (l.value = 1);
  }, close(h) {
    f.closePopover();
    let C = h ? h instanceof HTMLElement ? h : h.value instanceof HTMLElement ? G(h) : G(f.button) : G(f.button);
    C == null || C.focus();
  } };
  ke(wl, f), Lr(T(() => Re(l.value, { 0: Pe.Open, 1: Pe.Closed })));
  let p = { buttonId: f.buttonId, panelId: f.panelId, close() {
    f.closePopover();
  } }, g = Cl(), b = g == null ? void 0 : g.registerPopover, [w, y] = bl(), v = fl({ mainTreeNodeRef: g == null ? void 0 : g.mainTreeNodeRef, portals: w, defaultContainers: [s, d] });
  function x() {
    var h, C, k, O;
    return (O = g == null ? void 0 : g.isFocusWithinPopoverGroup()) != null ? O : ((h = c.value) == null ? void 0 : h.activeElement) && (((C = G(s)) == null ? void 0 : C.contains(c.value.activeElement)) || ((k = G(d)) == null ? void 0 : k.contains(c.value.activeElement)));
  }
  return Ve(() => b == null ? void 0 : b(p)), zr((r = c.value) == null ? void 0 : r.defaultView, "focus", (h) => {
    var C, k;
    h.target !== window && h.target instanceof HTMLElement && l.value === 0 && (x() || s && d && (v.contains(h.target) || (C = G(f.beforePanelSentinel)) != null && C.contains(h.target) || (k = G(f.afterPanelSentinel)) != null && k.contains(h.target) || f.closePopover()));
  }, !0), Ar(v.resolveContainers, (h, C) => {
    var k;
    f.closePopover(), Ka(C, Rr.Loose) || (h.preventDefault(), (k = G(s)) == null || k.focus());
  }, T(() => l.value === 0)), () => {
    let h = { open: l.value === 0, close: f.close };
    return ie(be, [ie(y, {}, () => we({ theirProps: { ...e, ...t }, ourProps: { ref: a }, slot: h, slots: n, attrs: t, name: "Popover" })), ie(v.MainTreeNode)]);
  };
} }), xu = N({ name: "PopoverButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: !1 }, id: { type: String, default: () => `headlessui-popover-button-${Be()}` } }, inheritAttrs: !1, setup(e, { attrs: n, slots: t, expose: o }) {
  let r = Vo("PopoverButton"), a = T(() => vt(r.button));
  o({ el: r.button, $el: r.button }), se(() => {
    r.buttonId.value = e.id;
  }), ye(() => {
    r.buttonId.value = null;
  });
  let l = Cl(), s = l == null ? void 0 : l.closeOthers, i = wu(), u = T(() => i === null ? !1 : i.value === r.panelId.value), d = S(null), c = `headlessui-focus-sentinel-${Be()}`;
  u.value || Ve(() => {
    r.button.value = G(d);
  });
  let m = Mr(T(() => ({ as: e.as, type: n.type })), d);
  function f(v) {
    var x, h, C, k, O;
    if (u.value) {
      if (r.popoverState.value === 1) return;
      switch (v.key) {
        case $e.Space:
        case $e.Enter:
          v.preventDefault(), (h = (x = v.target).click) == null || h.call(x), r.closePopover(), (C = G(r.button)) == null || C.focus();
          break;
      }
    } else switch (v.key) {
      case $e.Space:
      case $e.Enter:
        v.preventDefault(), v.stopPropagation(), r.popoverState.value === 1 && (s == null || s(r.buttonId.value)), r.togglePopover();
        break;
      case $e.Escape:
        if (r.popoverState.value !== 0) return s == null ? void 0 : s(r.buttonId.value);
        if (!G(r.button) || (k = a.value) != null && k.activeElement && !((O = G(r.button)) != null && O.contains(a.value.activeElement))) return;
        v.preventDefault(), v.stopPropagation(), r.closePopover();
        break;
    }
  }
  function p(v) {
    u.value || v.key === $e.Space && v.preventDefault();
  }
  function g(v) {
    var x, h;
    e.disabled || (u.value ? (r.closePopover(), (x = G(r.button)) == null || x.focus()) : (v.preventDefault(), v.stopPropagation(), r.popoverState.value === 1 && (s == null || s(r.buttonId.value)), r.togglePopover(), (h = G(r.button)) == null || h.focus()));
  }
  function b(v) {
    v.preventDefault(), v.stopPropagation();
  }
  let w = jr();
  function y() {
    let v = G(r.panel);
    if (!v) return;
    function x() {
      Re(w.value, { [it.Forwards]: () => yt(v, Je.First), [it.Backwards]: () => yt(v, Je.Last) }) === Un.Error && yt(Bo().filter((h) => h.dataset.headlessuiFocusGuard !== "true"), Re(w.value, { [it.Forwards]: Je.Next, [it.Backwards]: Je.Previous }), { relativeTo: G(r.button) });
    }
    x();
  }
  return () => {
    let v = r.popoverState.value === 0, x = { open: v }, { id: h, ...C } = e, k = u.value ? { ref: d, type: m.value, onKeydown: f, onClick: g } : { ref: d, id: h, type: m.value, "aria-expanded": r.popoverState.value === 0, "aria-controls": G(r.panel) ? r.panelId.value : void 0, disabled: e.disabled ? !0 : void 0, onKeydown: f, onKeyup: p, onClick: g, onMousedown: b };
    return ie(be, [we({ ourProps: k, theirProps: { ...n, ...C }, slot: x, attrs: n, slots: t, name: "PopoverButton" }), v && !u.value && r.isPortalled.value && ie(Nt, { id: c, features: Pt.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: y })]);
  };
} });
N({ name: "PopoverOverlay", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 } }, setup(e, { attrs: n, slots: t }) {
  let o = Vo("PopoverOverlay"), r = `headlessui-popover-overlay-${Be()}`, a = Pn(), l = T(() => a !== null ? (a.value & Pe.Open) === Pe.Open : o.popoverState.value === 0);
  function s() {
    o.closePopover();
  }
  return () => {
    let i = { open: o.popoverState.value === 0 };
    return we({ ourProps: { id: r, "aria-hidden": !0, onClick: s }, theirProps: e, slot: i, attrs: n, slots: t, features: mt.RenderStrategy | mt.Static, visible: l.value, name: "PopoverOverlay" });
  };
} });
let Cu = N({ name: "PopoverPanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, focus: { type: Boolean, default: !1 }, id: { type: String, default: () => `headlessui-popover-panel-${Be()}` } }, inheritAttrs: !1, setup(e, { attrs: n, slots: t, expose: o }) {
  let { focus: r } = e, a = Vo("PopoverPanel"), l = T(() => vt(a.panel)), s = `headlessui-focus-sentinel-before-${Be()}`, i = `headlessui-focus-sentinel-after-${Be()}`;
  o({ el: a.panel, $el: a.panel }), se(() => {
    a.panelId.value = e.id;
  }), ye(() => {
    a.panelId.value = null;
  }), ke(kl, a.panelId), Ve(() => {
    var b, w;
    if (!r || a.popoverState.value !== 0 || !a.panel) return;
    let y = (b = l.value) == null ? void 0 : b.activeElement;
    (w = G(a.panel)) != null && w.contains(y) || yt(G(a.panel), Je.First);
  });
  let u = Pn(), d = T(() => u !== null ? (u.value & Pe.Open) === Pe.Open : a.popoverState.value === 0);
  function c(b) {
    var w, y;
    switch (b.key) {
      case $e.Escape:
        if (a.popoverState.value !== 0 || !G(a.panel) || l.value && !((w = G(a.panel)) != null && w.contains(l.value.activeElement))) return;
        b.preventDefault(), b.stopPropagation(), a.closePopover(), (y = G(a.button)) == null || y.focus();
        break;
    }
  }
  function m(b) {
    var w, y, v, x, h;
    let C = b.relatedTarget;
    C && G(a.panel) && ((w = G(a.panel)) != null && w.contains(C) || (a.closePopover(), ((v = (y = G(a.beforePanelSentinel)) == null ? void 0 : y.contains) != null && v.call(y, C) || (h = (x = G(a.afterPanelSentinel)) == null ? void 0 : x.contains) != null && h.call(x, C)) && C.focus({ preventScroll: !0 })));
  }
  let f = jr();
  function p() {
    let b = G(a.panel);
    if (!b) return;
    function w() {
      Re(f.value, { [it.Forwards]: () => {
        var y;
        yt(b, Je.First) === Un.Error && ((y = G(a.afterPanelSentinel)) == null || y.focus());
      }, [it.Backwards]: () => {
        var y;
        (y = G(a.button)) == null || y.focus({ preventScroll: !0 });
      } });
    }
    w();
  }
  function g() {
    let b = G(a.panel);
    if (!b) return;
    function w() {
      Re(f.value, { [it.Forwards]: () => {
        let y = G(a.button), v = G(a.panel);
        if (!y) return;
        let x = Bo(), h = x.indexOf(y), C = x.slice(0, h + 1), k = [...x.slice(h + 1), ...C];
        for (let O of k.slice()) if (O.dataset.headlessuiFocusGuard === "true" || v != null && v.contains(O)) {
          let A = k.indexOf(O);
          A !== -1 && k.splice(A, 1);
        }
        yt(k, Je.First, { sorted: !1 });
      }, [it.Backwards]: () => {
        var y;
        yt(b, Je.Previous) === Un.Error && ((y = G(a.button)) == null || y.focus());
      } });
    }
    w();
  }
  return () => {
    let b = { open: a.popoverState.value === 0, close: a.close }, { id: w, focus: y, ...v } = e, x = { ref: a.panel, id: w, onKeydown: c, onFocusout: r && a.popoverState.value === 0 ? m : void 0, tabIndex: -1 };
    return we({ ourProps: x, theirProps: { ...n, ...v }, attrs: n, slot: b, slots: { ...t, default: (...h) => {
      var C;
      return [ie(be, [d.value && a.isPortalled.value && ie(Nt, { id: s, ref: a.beforePanelSentinel, features: Pt.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: p }), (C = t.default) == null ? void 0 : C.call(t, ...h), d.value && a.isPortalled.value && ie(Nt, { id: i, ref: a.afterPanelSentinel, features: Pt.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: g })])];
    } }, features: mt.RenderStrategy | mt.Static, visible: d.value, name: "PopoverPanel" });
  };
} });
N({ name: "PopoverGroup", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" } }, setup(e, { attrs: n, slots: t, expose: o }) {
  let r = S(null), a = Do([]), l = T(() => vt(r)), s = iu();
  o({ el: r, $el: r });
  function i(m) {
    let f = a.value.indexOf(m);
    f !== -1 && a.value.splice(f, 1);
  }
  function u(m) {
    return a.value.push(m), () => {
      i(m);
    };
  }
  function d() {
    var m;
    let f = l.value;
    if (!f) return !1;
    let p = f.activeElement;
    return (m = G(r)) != null && m.contains(p) ? !0 : a.value.some((g) => {
      var b, w;
      return ((b = f.getElementById(g.buttonId.value)) == null ? void 0 : b.contains(p)) || ((w = f.getElementById(g.panelId.value)) == null ? void 0 : w.contains(p));
    });
  }
  function c(m) {
    for (let f of a.value) f.buttonId.value !== m && f.close();
  }
  return ke(xl, { registerPopover: u, unregisterPopover: i, isFocusWithinPopoverGroup: d, closeOthers: c, mainTreeNodeRef: s.mainTreeNodeRef }), () => ie(be, [we({ ourProps: { ref: r }, theirProps: { ...e, ...n }, slot: {}, attrs: n, slots: t, name: "PopoverGroup" }), ie(s.MainTreeNode)]);
} });
let _l = Symbol("LabelContext");
function El() {
  let e = me(_l, null);
  if (e === null) {
    let n = new Error("You used a <Label /> component, but it is not inside a parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(n, El), n;
  }
  return e;
}
function ku({ slot: e = {}, name: n = "Label", props: t = {} } = {}) {
  let o = S([]);
  function r(a) {
    return o.value.push(a), () => {
      let l = o.value.indexOf(a);
      l !== -1 && o.value.splice(l, 1);
    };
  }
  return ke(_l, { register: r, slot: e, name: n, props: t }), T(() => o.value.length > 0 ? o.value.join(" ") : void 0);
}
N({ name: "Label", props: { as: { type: [Object, String], default: "label" }, passive: { type: [Boolean], default: !1 }, id: { type: String, default: () => `headlessui-label-${Be()}` } }, setup(e, { slots: n, attrs: t }) {
  let o = El();
  return se(() => ye(o.register(e.id))), () => {
    let { name: r = "Label", slot: a = {}, props: l = {} } = o, { id: s, passive: i, ...u } = e, d = { ...Object.entries(l).reduce((c, [m, f]) => Object.assign(c, { [m]: P(f) }), {}), id: s };
    return i && (delete d.onClick, delete d.htmlFor, delete u.onClick), we({ ourProps: d, theirProps: u, slot: a, attrs: t, slots: n, name: r });
  };
} });
let Ol = Symbol("GroupContext");
N({ name: "SwitchGroup", props: { as: { type: [Object, String], default: "template" } }, setup(e, { slots: n, attrs: t }) {
  let o = S(null), r = ku({ name: "SwitchLabel", props: { htmlFor: T(() => {
    var l;
    return (l = o.value) == null ? void 0 : l.id;
  }), onClick(l) {
    o.value && (l.currentTarget.tagName === "LABEL" && l.preventDefault(), o.value.click(), o.value.focus({ preventScroll: !0 }));
  } } }), a = gl({ name: "SwitchDescription" });
  return ke(Ol, { switchRef: o, labelledby: r, describedby: a }), () => we({ theirProps: e, ourProps: {}, slot: {}, slots: n, attrs: t, name: "SwitchGroup" });
} });
let Su = N({ name: "Switch", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "button" }, modelValue: { type: Boolean, default: void 0 }, defaultChecked: { type: Boolean, optional: !0 }, form: { type: String, optional: !0 }, name: { type: String, optional: !0 }, value: { type: String, optional: !0 }, id: { type: String, default: () => `headlessui-switch-${Be()}` }, disabled: { type: Boolean, default: !1 }, tabIndex: { type: Number, default: 0 } }, inheritAttrs: !1, setup(e, { emit: n, attrs: t, slots: o, expose: r }) {
  let a = me(Ol, null), [l, s] = qa(T(() => e.modelValue), (b) => n("update:modelValue", b), T(() => e.defaultChecked));
  function i() {
    s(!l.value);
  }
  let u = S(null), d = a === null ? u : a.switchRef, c = Mr(T(() => ({ as: e.as, type: t.type })), d);
  r({ el: d, $el: d });
  function m(b) {
    b.preventDefault(), i();
  }
  function f(b) {
    b.key === $e.Space ? (b.preventDefault(), i()) : b.key === $e.Enter && Wi(b.currentTarget);
  }
  function p(b) {
    b.preventDefault();
  }
  let g = T(() => {
    var b, w;
    return (w = (b = G(d)) == null ? void 0 : b.closest) == null ? void 0 : w.call(b, "form");
  });
  return se(() => {
    re([g], () => {
      if (!g.value || e.defaultChecked === void 0) return;
      function b() {
        s(e.defaultChecked);
      }
      return g.value.addEventListener("reset", b), () => {
        var w;
        (w = g.value) == null || w.removeEventListener("reset", b);
      };
    }, { immediate: !0 });
  }), () => {
    let { id: b, name: w, value: y, form: v, tabIndex: x, ...h } = e, C = { checked: l.value }, k = { id: b, ref: d, role: "switch", type: c.value, tabIndex: x === -1 ? 0 : x, "aria-checked": l.value, "aria-labelledby": a == null ? void 0 : a.labelledby.value, "aria-describedby": a == null ? void 0 : a.describedby.value, onClick: m, onKeyup: f, onKeypress: p };
    return ie(be, [w != null && l.value != null ? ie(Nt, tl({ features: Pt.Hidden, as: "input", type: "checkbox", hidden: !0, readOnly: !0, checked: l.value, form: v, disabled: h.disabled, name: w, value: y })) : null, we({ ourProps: k, theirProps: { ...t, ...$n(h, ["modelValue", "defaultChecked"]) }, slot: C, attrs: t, slots: o, name: "Switch" })]);
  };
} });
function _u(e) {
  let n = { called: !1 };
  return (...t) => {
    if (!n.called) return n.called = !0, e(...t);
  };
}
function Xo(e, ...n) {
  e && n.length > 0 && e.classList.add(...n);
}
function lo(e, ...n) {
  e && n.length > 0 && e.classList.remove(...n);
}
var vr = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(vr || {});
function Eu(e, n) {
  let t = en();
  if (!e) return t.dispose;
  let { transitionDuration: o, transitionDelay: r } = getComputedStyle(e), [a, l] = [o, r].map((s) => {
    let [i = 0] = s.split(",").filter(Boolean).map((u) => u.includes("ms") ? parseFloat(u) : parseFloat(u) * 1e3).sort((u, d) => d - u);
    return i;
  });
  return a !== 0 ? t.setTimeout(() => n("finished"), a + l) : n("finished"), t.add(() => n("cancelled")), t.dispose;
}
function ga(e, n, t, o, r, a) {
  let l = en(), s = a !== void 0 ? _u(a) : () => {
  };
  return lo(e, ...r), Xo(e, ...n, ...t), l.nextFrame(() => {
    lo(e, ...t), Xo(e, ...o), l.add(Eu(e, (i) => (lo(e, ...o, ...n), Xo(e, ...r), s(i))));
  }), l.add(() => lo(e, ...n, ...t, ...o, ...r)), l.add(() => s("cancelled")), l.dispose;
}
function on(e = "") {
  return e.split(/\s+/).filter((n) => n.length > 1);
}
let Gr = Symbol("TransitionContext");
var Ou = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(Ou || {});
function Tu() {
  return me(Gr, null) !== null;
}
function Du() {
  let e = me(Gr, null);
  if (e === null) throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function $u() {
  let e = me(Hr, null);
  if (e === null) throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let Hr = Symbol("NestingContext");
function No(e) {
  return "children" in e ? No(e.children) : e.value.filter(({ state: n }) => n === "visible").length > 0;
}
function Tl(e) {
  let n = S([]), t = S(!1);
  se(() => t.value = !0), ye(() => t.value = !1);
  function o(a, l = qt.Hidden) {
    let s = n.value.findIndex(({ id: i }) => i === a);
    s !== -1 && (Re(l, { [qt.Unmount]() {
      n.value.splice(s, 1);
    }, [qt.Hidden]() {
      n.value[s].state = "hidden";
    } }), !No(n) && t.value && (e == null || e()));
  }
  function r(a) {
    let l = n.value.find(({ id: s }) => s === a);
    return l ? l.state !== "visible" && (l.state = "visible") : n.value.push({ id: a, state: "visible" }), () => o(a, qt.Unmount);
  }
  return { children: n, register: r, unregister: o };
}
let Dl = mt.RenderStrategy, gr = N({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: n, attrs: t, slots: o, expose: r }) {
  let a = S(0);
  function l() {
    a.value |= Pe.Opening, n("beforeEnter");
  }
  function s() {
    a.value &= ~Pe.Opening, n("afterEnter");
  }
  function i() {
    a.value |= Pe.Closing, n("beforeLeave");
  }
  function u() {
    a.value &= ~Pe.Closing, n("afterLeave");
  }
  if (!Tu() && ji()) return () => ie($l, { ...e, onBeforeEnter: l, onAfterEnter: s, onBeforeLeave: i, onAfterLeave: u }, o);
  let d = S(null), c = T(() => e.unmount ? qt.Unmount : qt.Hidden);
  r({ el: d, $el: d });
  let { show: m, appear: f } = Du(), { register: p, unregister: g } = $u(), b = S(m.value ? "visible" : "hidden"), w = { value: !0 }, y = Be(), v = { value: !1 }, x = Tl(() => {
    !v.value && b.value !== "hidden" && (b.value = "hidden", g(y), u());
  });
  se(() => {
    let j = p(y);
    ye(j);
  }), Ve(() => {
    if (c.value === qt.Hidden && y) {
      if (m.value && b.value !== "visible") {
        b.value = "visible";
        return;
      }
      Re(b.value, { hidden: () => g(y), visible: () => p(y) });
    }
  });
  let h = on(e.enter), C = on(e.enterFrom), k = on(e.enterTo), O = on(e.entered), A = on(e.leave), _ = on(e.leaveFrom), D = on(e.leaveTo);
  se(() => {
    Ve(() => {
      if (b.value === "visible") {
        let j = G(d);
        if (j instanceof Comment && j.data === "") throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function z(j) {
    let K = w.value && !f.value, Y = G(d);
    !Y || !(Y instanceof HTMLElement) || K || (v.value = !0, m.value && l(), m.value || i(), j(m.value ? ga(Y, h, C, k, O, (Z) => {
      v.value = !1, Z === vr.Finished && s();
    }) : ga(Y, A, _, D, O, (Z) => {
      v.value = !1, Z === vr.Finished && (No(x) || (b.value = "hidden", g(y), u()));
    })));
  }
  return se(() => {
    re([m], (j, K, Y) => {
      z(Y), w.value = !1;
    }, { immediate: !0 });
  }), ke(Hr, x), Lr(T(() => Re(b.value, { visible: Pe.Open, hidden: Pe.Closed }) | a.value)), () => {
    let { appear: j, show: K, enter: Y, enterFrom: Z, enterTo: pe, entered: ve, leave: ne, leaveFrom: Se, leaveTo: je, ...Me } = e, Mt = { ref: d }, dt = { ...Me, ...f.value && m.value && Jn.isServer ? { class: W([t.class, Me.class, ...h, ...C]) } : {} };
    return we({ theirProps: dt, ourProps: Mt, slot: {}, slots: o, attrs: t, features: Dl, visible: b.value === "visible", name: "TransitionChild" });
  };
} }), Pu = gr, $l = N({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: n, attrs: t, slots: o }) {
  let r = Pn(), a = T(() => e.show === null && r !== null ? (r.value & Pe.Open) === Pe.Open : e.show);
  Ve(() => {
    if (![!0, !1].includes(a.value)) throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let l = S(a.value ? "visible" : "hidden"), s = Tl(() => {
    l.value = "hidden";
  }), i = S(!0), u = { show: a, appear: T(() => e.appear || !i.value) };
  return se(() => {
    Ve(() => {
      i.value = !1, a.value ? l.value = "visible" : No(s) || (l.value = "hidden");
    });
  }), ke(Hr, s), ke(Gr, u), () => {
    let d = $n(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), c = { unmount: e.unmount };
    return we({ ourProps: { ...c, as: "template" }, theirProps: {}, slot: {}, slots: { ...o, default: () => [ie(Pu, { onBeforeEnter: () => n("beforeEnter"), onAfterEnter: () => n("afterEnter"), onBeforeLeave: () => n("beforeLeave"), onAfterLeave: () => n("afterLeave"), ...t, ...c, ...d }, o.default)] }, attrs: {}, features: Dl, visible: l.value === "visible", name: "Transition" });
  };
} });
const Iu = { class: "relative" }, Ru = { class: "flex items-start flex-wrap gap-1 p-1" }, Au = ["onClick"], Mu = { class: "sr-only" }, Lu = { key: 0 }, Fu = { key: 1 }, Bu = { key: 1 }, Vu = { class: "border-t border-ring px-2 first:border-t-0 py-2 first:pt-0 last:pb-0" }, Nu = { class: "flex items-center text-base font-medium" }, zu = { key: 1 }, ju = { class: "-mx-2.5" }, Gu = { key: 1 }, Hu = { key: 1 }, Jo = /* @__PURE__ */ N({
  __name: "Combobox",
  props: {
    displayProperty: { type: Function, default: (e) => e.name },
    groupBy: { default: void 0 },
    isStatic: { type: Boolean, default: !1 },
    items: { default: () => [] },
    modelValue: { default: void 0 },
    multiple: { type: Boolean, default: !1 },
    nullable: { type: Boolean, default: !1 },
    placeholder: { default: "Select an option..." },
    theme: { default: () => ({
      baseDropdownInputContainer: "",
      baseDropdownInputText: "",
      generalFloatingPanelContainer: ""
    }) },
    uidProperty: { default: "id" },
    valueProperty: { default: "value" },
    disabledItems: { default: () => [] }
  },
  emits: ["update:modelValue"],
  setup(e, { expose: n, emit: t }) {
    const o = t, r = e, a = S(), l = S(""), s = S(), i = S(!1), u = T(() => l.value ? r.items.filter(
      (p) => r.displayProperty(p).toLowerCase().includes(l.value.toLowerCase())
    ) : r.items), { floatingStyles: d } = Dn(s, a, {
      strategy: "fixed",
      transform: !1,
      middleware: [
        Tn({
          padding: 10,
          limiter: Pr({
            offset: 10
          })
        }),
        Fo({
          allowedPlacements: ["top-start", "bottom-start"]
        }),
        On(10),
        $r({
          apply({ availableHeight: p, elements: g }) {
            const b = g.reference.getBoundingClientRect().width;
            Object.assign(g.floating.style, {
              minWidth: `${b}px`,
              maxHeight: `${p - 20}px`
            });
          }
        })
      ],
      whileElementsMounted: Lo
    }), c = (p, g) => p.reduce(
      (b, w) => {
        var y;
        return (b[y = g(w)] || (b[y] = [])).push(w), b;
      },
      {}
    ), m = (p) => {
      if (!r.multiple || !Array.isArray(r.modelValue)) return;
      const g = r.modelValue.filter(
        (b) => b[r.uidProperty] !== p[r.uidProperty]
      );
      o("update:modelValue", g);
    }, f = (p) => {
      if (r.multiple && Array.isArray(r.modelValue) && r.modelValue.length > 0 && l.value.length === 0) {
        p.preventDefault();
        const g = r.modelValue.slice(0, -1);
        o("update:modelValue", g);
      }
    };
    return n({
      query: l,
      open: i
    }), (p, g) => (E(), R("div", {
      class: W(P(ce)("relative rounded-lg"))
    }, [
      H(P(Fr), {
        "model-value": p.modelValue,
        multiple: p.multiple,
        nullable: p.nullable,
        "onUpdate:modelValue": g[3] || (g[3] = (b) => p.$emit("update:modelValue", b))
      }, {
        default: V(() => {
          var b, w;
          return [
            I("div", Iu, [
              I("div", {
                ref_key: "reference",
                ref: s,
                class: W(
                  P(ce)(
                    "border border-ring rounded-md hover:bg-accent/50 shadow-xs focus-within:outline-none focus-within:ring-3 focus-within:ring-ring/40 transition-[box-shadow,color]",
                    p.theme.baseDropdownInputContainer
                  )
                )
              }, [
                I("div", Ru, [
                  p.multiple && ((b = p.modelValue) != null && b.length) ? (E(!0), R(be, { key: 0 }, He(p.modelValue, (y) => (E(), R("div", {
                    key: y[p.uidProperty],
                    class: "flex items-center gap-1 rounded-md bg-accent px-2 py-0.5 text-sm"
                  }, [
                    I("span", null, ge(p.displayProperty(y)), 1),
                    I("button", {
                      type: "button",
                      class: "ml-1 rounded-full hover:bg-accent-foreground/20",
                      onClick: dn((v) => m(y), ["stop"])
                    }, [
                      I("span", Mu, "Remove " + ge(p.displayProperty(y)), 1),
                      g[4] || (g[4] = I("svg", {
                        class: "size-3",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "2"
                      }, [
                        I("path", { d: "M18 6L6 18M6 6l12 12" })
                      ], -1))
                    ], 8, Au)
                  ]))), 128)) : le("", !0),
                  H(P(Vr), {
                    class: W([
                      "flex-1 min-w-[120px] rounded-md border-0 bg-transparent pl-2.5 py-0.5 pr-8 text-sm truncate ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50",
                      p.multiple && ((w = p.modelValue) != null && w.length) ? "pl-1" : "",
                      p.theme.baseDropdownInputText
                    ]),
                    displayValue: p.displayProperty,
                    placeholder: p.placeholder,
                    autoComplete: "off",
                    onFocus: g[0] || (g[0] = (y) => i.value = !0),
                    onBlur: g[1] || (g[1] = (y) => i.value = !1),
                    onChange: g[2] || (g[2] = (y) => l.value = y.target.value),
                    onKeydown: Ia(f, ["delete"])
                  }, null, 8, ["class", "displayValue", "placeholder"])
                ]),
                H(P(Br), {
                  class: W([
                    "absolute inset-y-0 right-0 flex items-center pr-2 text-muted-foreground"
                  ])
                }, {
                  default: V(() => [
                    H(P(Yn), { class: "size-4 text-inherit" })
                  ]),
                  _: 1
                })
              ], 2),
              H(ft, {
                "enter-active-class": "transition duration-200 ease-out",
                "enter-from-class": "translate-y-1 opacity-0",
                "enter-to-class": "translate-y-0 opacity-100",
                "leave-active-class": "transition duration-150 ease-in",
                "leave-from-class": "translate-y-0 opacity-100",
                "leave-to-class": "translate-y-1 opacity-0"
              }, {
                default: V(() => [
                  H(P(Nr), {
                    ref_key: "floating",
                    ref: a,
                    class: W(
                      P(ce)(
                        "fixed left-0 z-10 overflow-x-hidden overflow-y-auto rounded-lg bg-popover p-3 text-base shadow-lg border border-ring focus:outline-hidden sm:text-sm",
                        p.theme.generalFloatingPanelContainer
                      )
                    ),
                    style: Jt(P(d)),
                    static: p.isStatic
                  }, {
                    default: V(() => [
                      u.value.length === 0 ? (E(), R("div", Lu, [
                        p.$slots.empty ? B(p.$slots, "empty", { key: 0 }) : (E(), R("span", Fu, "No results"))
                      ])) : le("", !0),
                      p.groupBy ? (E(), R("div", Bu, [
                        (E(!0), R(be, null, He(c(
                          p.items,
                          (y) => y[p.groupBy]
                        ), (y, v) => (E(), R("div", Vu, [
                          I("div", Nu, [
                            p.$slots.group ? B(p.$slots, "group", nt({
                              key: 0,
                              ref_for: !0
                            }, {
                              group: y,
                              groupName: v
                            })) : (E(), R("span", zu, ge([
                              "undefined",
                              null,
                              void 0
                            ].includes(v) ? "Uncategorized" : v), 1))
                          ]),
                          I("div", ju, [
                            (E(!0), R(be, null, He(y, (x) => {
                              var h;
                              return E(), fe(P(qn), {
                                key: x[p.uidProperty],
                                value: x,
                                disabled: (h = p.disabledItems) == null ? void 0 : h.some(
                                  (C) => C[p.uidProperty] === x[p.uidProperty]
                                )
                              }, {
                                default: V(({ active: C, selected: k, disabled: O }) => [
                                  I("span", {
                                    class: W([
                                      "cursor-pointer hover:bg-accent rounded-md px-2 py-1 flex w-full truncate",
                                      C && "bg-accent",
                                      k && "bg-accent",
                                      O && "opacity-50 cursor-not-allowed pointer-events-none"
                                    ])
                                  }, [
                                    p.$slots.item ? B(p.$slots, "item", nt({
                                      key: 0,
                                      ref_for: !0
                                    }, {
                                      item: x,
                                      active: C,
                                      selected: k,
                                      disabled: O
                                    })) : (E(), R("span", Gu, ge(p.displayProperty(x)), 1))
                                  ], 2)
                                ]),
                                _: 2
                              }, 1032, ["value", "disabled"]);
                            }), 128))
                          ])
                        ]))), 256))
                      ])) : (E(!0), R(be, { key: 2 }, He(u.value, (y) => {
                        var v;
                        return E(), fe(P(qn), {
                          key: y[p.uidProperty],
                          value: y,
                          disabled: (v = p.disabledItems) == null ? void 0 : v.some(
                            (x) => x[p.uidProperty] === y[p.uidProperty]
                          )
                        }, {
                          default: V(({ active: x, selected: h, disabled: C }) => [
                            I("span", {
                              class: W([
                                "cursor-pointer hover:bg-accent rounded-md px-2 py-1 flex w-full truncate",
                                x && "bg-accent",
                                h && "bg-accent",
                                C && "opacity-50 cursor-not-allowed pointer-events-none"
                              ])
                            }, [
                              p.$slots.item ? B(p.$slots, "item", nt({
                                key: 0,
                                ref_for: !0
                              }, {
                                item: y,
                                active: x,
                                selected: h,
                                disabled: C
                              })) : (E(), R("span", Hu, ge(p.displayProperty(y)), 1))
                            ], 2)
                          ]),
                          _: 2
                        }, 1032, ["value", "disabled"]);
                      }), 128)),
                      p.$slots.options ? B(p.$slots, "options", rt(nt({ key: 3 }, { filteredItems: u.value }))) : le("", !0)
                    ]),
                    _: 3
                  }, 8, ["class", "style", "static"])
                ]),
                _: 3
              })
            ])
          ];
        }),
        _: 3
      }, 8, ["model-value", "multiple", "nullable"])
    ], 2));
  }
}), Wu = { class: "w-full space-y-3" }, Uu = ["onClick"], qu = /* @__PURE__ */ N({
  __name: "ColorPicker",
  props: {
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const t = e, o = S({
      green: [
        {
          name: "green-50",
          background: "bg-green-50",
          text: "text-green-800",
          ring: "ring-green-50",
          hex: "#f0fdf4"
        },
        {
          name: "green-100",
          background: "bg-green-100",
          text: "text-green-800",
          hex: "#dcfce7"
        },
        {
          name: "green-200",
          background: "bg-green-200",
          text: "text-green-800",
          hex: "#bbf7d0"
        },
        {
          name: "green-300",
          background: "bg-green-300",
          text: "text-green-800",
          hex: "#86efac"
        },
        {
          name: "green-400",
          background: "bg-green-400",
          text: "text-green-800",
          hex: "#4ade80"
        },
        {
          name: "green-500",
          background: "bg-green-500",
          text: "text-green-800",
          hex: "#22c55e"
        },
        {
          name: "green-600",
          background: "bg-green-600",
          text: "text-green-200",
          hex: "#16a34a"
        },
        {
          name: "green-700",
          background: "bg-green-700",
          text: "text-green-200",
          hex: "#15803d"
        },
        {
          name: "green-800",
          background: "bg-green-800",
          text: "text-green-200",
          hex: "#166534"
        },
        {
          name: "green-900",
          background: "bg-green-900",
          text: "text-green-200",
          hex: "#14532d"
        }
      ],
      blue: [
        {
          name: "blue-50",
          background: "bg-blue-50",
          text: "text-blue-800",
          hex: "#eff6ff"
        },
        {
          name: "blue-100",
          background: "bg-blue-100",
          text: "text-blue-800",
          hex: "#dbeafe"
        },
        {
          name: "blue-200",
          background: "bg-blue-200",
          text: "text-blue-800",
          hex: "#bfdbfe"
        },
        {
          name: "blue-300",
          background: "bg-blue-300",
          text: "text-blue-800",
          hex: "#93c5fd"
        },
        {
          name: "blue-400",
          background: "bg-blue-400",
          text: "text-blue-800",
          hex: "#60a5fa"
        },
        {
          name: "blue-500",
          background: "bg-blue-500",
          text: "text-blue-800",
          hex: "#3b82f6"
        },
        {
          name: "blue-600",
          background: "bg-blue-600",
          text: "text-blue-200",
          hex: "#2563eb"
        },
        {
          name: "blue-700",
          background: "bg-blue-700",
          text: "text-blue-200",
          hex: "#1d4ed8"
        },
        {
          name: "blue-800",
          background: "bg-blue-800",
          text: "text-blue-200",
          hex: "#1e40af"
        },
        {
          name: "blue-900",
          background: "bg-blue-900",
          text: "text-blue-200",
          hex: "#1e3a8a"
        }
      ],
      yellow: [
        {
          name: "yellow-50",
          background: "bg-yellow-50",
          text: "text-yellow-800",
          hex: "#fefce8"
        },
        {
          name: "yellow-100",
          background: "bg-yellow-100",
          text: "text-yellow-800",
          hex: "#fef9c3"
        },
        {
          name: "yellow-200",
          background: "bg-yellow-200",
          text: "text-yellow-800",
          hex: "#fef08a"
        },
        {
          name: "yellow-300",
          background: "bg-yellow-300",
          text: "text-yellow-800",
          hex: "#fde047"
        },
        {
          name: "yellow-400",
          background: "bg-yellow-400",
          text: "text-yellow-800",
          hex: "#facc15"
        },
        {
          name: "yellow-500",
          background: "bg-yellow-500",
          text: "text-yellow-800",
          hex: "#eab308"
        },
        {
          name: "yellow-600",
          background: "bg-yellow-600",
          text: "text-yellow-200",
          hex: "#ca8a04"
        },
        {
          name: "yellow-700",
          background: "bg-yellow-700",
          text: "text-yellow-200",
          hex: "#a16207"
        },
        {
          name: "yellow-800",
          background: "bg-yellow-800",
          text: "text-yellow-200",
          hex: "#854d0e"
        },
        {
          name: "yellow-900",
          background: "bg-yellow-900",
          text: "text-yellow-200",
          hex: "#713f12"
        }
      ],
      red: [
        {
          name: "red-50",
          background: "bg-red-50",
          text: "text-red-800",
          hex: "#fef2f2"
        },
        {
          name: "red-100",
          background: "bg-red-100",
          text: "text-red-800",
          hex: "#fee2e2"
        },
        {
          name: "red-200",
          background: "bg-red-200",
          text: "text-red-800",
          hex: "#fecaca"
        },
        {
          name: "red-300",
          background: "bg-red-300",
          text: "text-red-800",
          hex: "#fca5a5"
        },
        {
          name: "red-400",
          background: "bg-red-400",
          text: "text-red-800",
          hex: "#f87171"
        },
        {
          name: "red-500",
          background: "bg-red-500",
          text: "text-red-800",
          hex: "#ef4444"
        },
        {
          name: "red-600",
          background: "bg-red-600",
          text: "text-red-200",
          hex: "#dc2626"
        },
        {
          name: "red-700",
          background: "bg-red-700",
          text: "text-red-200",
          hex: "#b91c1c"
        },
        {
          name: "red-800",
          background: "bg-red-800",
          text: "text-red-200",
          hex: "#991b1b"
        },
        {
          name: "red-900",
          background: "bg-red-900",
          text: "text-red-200",
          hex: "#7f1d1d"
        }
      ],
      orange: [
        {
          name: "orange-50",
          background: "bg-orange-50",
          text: "text-orange-800",
          hex: "#fff7ed"
        },
        {
          name: "orange-100",
          background: "bg-orange-100",
          text: "text-orange-800",
          hex: "#ffedd5"
        },
        {
          name: "orange-200",
          background: "bg-orange-200",
          text: "text-orange-800",
          hex: "#fed7aa"
        },
        {
          name: "orange-300",
          background: "bg-orange-300",
          text: "text-orange-800",
          hex: "#fdba74"
        },
        {
          name: "orange-400",
          background: "bg-orange-400",
          text: "text-orange-800",
          hex: "#fb923c"
        },
        {
          name: "orange-500",
          background: "bg-orange-500",
          text: "text-orange-800",
          hex: "#f97316"
        },
        {
          name: "orange-600",
          background: "bg-orange-600",
          text: "text-orange-200",
          hex: "#ea580c"
        },
        {
          name: "orange-700",
          background: "bg-orange-700",
          text: "text-orange-200",
          hex: "#c2410c"
        },
        {
          name: "orange-800",
          background: "bg-orange-800",
          text: "text-orange-200",
          hex: "#9a3412"
        },
        {
          name: "orange-900",
          background: "bg-orange-900",
          text: "text-orange-200",
          hex: "#7c2d12"
        }
      ],
      stone: [
        {
          name: "stone-50",
          background: "bg-stone-50",
          text: "text-stone-800",
          hex: "#f7f7f7"
        },
        {
          name: "stone-100",
          background: "bg-stone-100",
          text: "text-stone-800",
          hex: "#e1e1e1"
        },
        {
          name: "stone-200",
          background: "bg-stone-200",
          text: "text-stone-800",
          hex: "#cfcfcf"
        },
        {
          name: "stone-300",
          background: "bg-stone-300",
          text: "text-stone-800",
          hex: "#b1b1b1"
        },
        {
          name: "stone-400",
          background: "bg-stone-400",
          text: "text-stone-800",
          hex: "#9e9e9e"
        },
        {
          name: "stone-500",
          background: "bg-stone-500",
          text: "text-stone-800",
          hex: "#828282"
        },
        {
          name: "stone-600",
          background: "bg-stone-600",
          text: "text-stone-200",
          hex: "#636363"
        },
        {
          name: "stone-700",
          background: "bg-stone-700",
          text: "text-stone-200",
          hex: "#4c4c4c"
        },
        {
          name: "stone-800",
          background: "bg-stone-800",
          text: "text-stone-200",
          hex: "#333333"
        },
        {
          name: "stone-900",
          background: "bg-stone-900",
          text: "text-stone-200",
          hex: "#1f1f1f"
        }
      ]
    }), r = T({
      get: () => t.modelValue,
      set: (i) => {
        a("update:modelValue", i);
      }
    }), a = n, l = S(""), s = (i) => {
      l.value = i, r.value = i, setTimeout(() => {
        l.value = "";
      }, 300);
    };
    return (i, u) => (E(), R("div", null, [
      I("div", Wu, [
        (E(!0), R(be, null, He(o.value, (d, c) => (E(), R("div", {
          key: `color-${c}`,
          class: "flex w-full items-center space-x-3"
        }, [
          (E(!0), R(be, null, He(d, (m) => (E(), R("div", {
            key: `${c}-${m.name}`,
            class: W(
              P(_t)(
                "flex h-6 w-6 items-center justify-center rounded-full text-xs text-foreground",
                "hover:ring-[1.5px] hover:ring-ring hover:ring-offset-2",
                "relative",
                m.background,
                m.text,
                {
                  "ring-[1.5px] ring-ring ring-offset-2": r.value === m.hex
                }
              )
            ),
            onClick: (f) => s(m.hex)
          }, [
            l.value === m.hex ? (E(), R("div", {
              key: 0,
              class: W(["absolute inset-0 rounded-full animate-color-flash", m.background])
            }, null, 2)) : le("", !0)
          ], 10, Uu))), 128))
        ]))), 128))
      ])
    ]));
  }
}), Ku = { class: "relative" }, Wr = /* @__PURE__ */ N({
  __name: "Dropdown",
  setup(e, { expose: n }) {
    const t = S(!1), o = S(), r = S(/* @__PURE__ */ new Map()), a = S(null), l = () => Array.from(r.value.entries()).sort(([, d], [, c]) => {
      const m = d.compareDocumentPosition(c);
      return m & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : m & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
    }), s = Kn({
      isOpen: T(() => t.value),
      triggerRef: o,
      open: () => {
        t.value = !0;
      },
      close: () => {
        t.value = !1, a.value = null;
      },
      toggle: () => {
        t.value = !t.value, t.value || (a.value = null);
      },
      setTriggerRef: (u) => {
        o.value = u;
      },
      // Keyboard navigation
      registerItem: (u, d) => {
        r.value.set(d, u);
      },
      unregisterItem: (u) => {
        r.value.delete(u), a.value === u && (a.value = null);
      },
      focusNext: () => {
        const u = l();
        if (u.length === 0) return;
        let d = -1;
        a.value && (d = u.findIndex(([p]) => p === a.value));
        const c = d < u.length - 1 ? d + 1 : 0, [m, f] = u[c];
        a.value = m, f == null || f.focus();
      },
      focusPrevious: () => {
        const u = l();
        if (u.length === 0) return;
        let d = -1;
        a.value && (d = u.findIndex(([p]) => p === a.value));
        const c = d > 0 ? d - 1 : u.length - 1, [m, f] = u[c];
        a.value = m, f == null || f.focus();
      },
      focusFirst: () => {
        const u = l();
        if (u.length === 0) return;
        const [d, c] = u[0];
        a.value = d, c == null || c.focus();
      },
      focusLast: () => {
        const u = l();
        if (u.length === 0) return;
        const [d, c] = u[u.length - 1];
        a.value = d, c == null || c.focus();
      },
      focusItem: (u) => {
        const d = r.value.get(u);
        d && (a.value = u, d.focus());
      },
      getActiveItemId: () => a.value
    });
    ke("dropdown", s), ke("triggerRef", o);
    const i = (u) => {
      if (t.value)
        switch (u.key) {
          case "Escape":
            u.preventDefault(), t.value = !1, a.value = null;
            break;
        }
    };
    return se(() => {
      document.addEventListener("keydown", i);
    }), ye(() => {
      document.removeEventListener("keydown", i);
    }), n({
      isOpen: t,
      open: s.open,
      close: s.close,
      toggle: s.toggle,
      triggerRef: o
    }), (u, d) => (E(), R("div", Ku, [
      B(u.$slots, "default")
    ]));
  }
}), Ur = /* @__PURE__ */ N({
  __name: "DropdownTrigger",
  setup(e, { expose: n }) {
    var l;
    const t = me("dropdown"), o = S();
    console.log("DropdownTrigger context:", {
      dropdown: t,
      isOpen: (l = t == null ? void 0 : t.isOpen) == null ? void 0 : l.value
    }), se(() => {
      console.log("DropdownTrigger mounted"), t && o.value && t.setTriggerRef(o.value);
    });
    const r = (s) => {
      console.log("Trigger clicked"), s.preventDefault(), s.stopPropagation(), t == null || t.toggle();
    }, a = (s) => {
      switch (console.log("Trigger keydown", s.key), s.key) {
        case "Enter":
        case " ":
          s.preventDefault(), t == null || t.toggle();
          break;
      }
    };
    return n({
      triggerRef: o
    }), (s, i) => (E(), R("div", {
      ref_key: "triggerRef",
      ref: o,
      role: "button",
      tabindex: "0",
      class: W([
        "inline-flex items-center justify-center",
        "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      ]),
      onClick: r,
      onKeydown: a
    }, [
      B(s.$slots, "default")
    ], 544));
  }
}), qr = /* @__PURE__ */ N({
  __name: "DropdownContent",
  props: {
    side: { default: "bottom" },
    align: { default: "start" },
    sideOffset: { default: 4 },
    alignOffset: { default: 0 },
    avoidCollisions: { type: Boolean, default: !0 }
  },
  setup(e) {
    const n = e, t = me("dropdown"), o = me("triggerRef"), r = S(), a = T(
      () => {
        var c;
        return (o == null ? void 0 : o.value) || ((c = t == null ? void 0 : t.triggerRef) == null ? void 0 : c.value);
      }
    ), { floatingStyles: l, update: s } = Dn(
      a || S(null),
      r,
      {
        strategy: "absolute",
        placement: `${n.side}-${n.align}`,
        middleware: [
          On({
            mainAxis: n.sideOffset,
            crossAxis: n.alignOffset
          }),
          ...n.avoidCollisions ? [Dr()] : [],
          ...n.avoidCollisions ? [Tn()] : []
          // autoPlacement(),
        ]
      }
    ), i = (c) => {
      c.stopPropagation();
    }, u = (c) => {
      if (t != null && t.isOpen)
        switch (c.key) {
          case "ArrowDown":
            c.preventDefault(), c.stopPropagation(), t.focusNext();
            break;
          case "ArrowUp":
            c.preventDefault(), c.stopPropagation(), t.focusPrevious();
            break;
          case "Home":
            c.preventDefault(), c.stopPropagation(), t.focusFirst();
            break;
          case "End":
            c.preventDefault(), c.stopPropagation(), t.focusLast();
            break;
          case "Escape":
            c.preventDefault(), c.stopPropagation(), t.close();
            break;
          case "Enter":
          case " ":
            c.stopPropagation();
            break;
          default:
            c.stopPropagation();
            break;
        }
    }, d = (c) => {
      if (console.log("Click outside detected", {
        isOpen: t == null ? void 0 : t.isOpen,
        hasContent: !!r.value,
        target: c.target
      }), !(t != null && t.isOpen) || !r.value) return;
      const m = c.target, f = a.value;
      console.log("Checking click outside", {
        triggerElement: f,
        isInTrigger: f == null ? void 0 : f.contains(m),
        isInContent: r.value.contains(m)
      }), f && !f.contains(m) && !r.value.contains(m) && (console.log("Closing dropdown"), t.close());
    };
    return re(
      () => t == null ? void 0 : t.isOpen,
      async (c) => {
        c ? (console.log("Dropdown opened, adding click outside handler"), document.addEventListener("click", d, !0), setTimeout(() => {
          t == null || t.focusFirst();
        }, 50)) : (console.log("Dropdown closed, removing click outside handler"), document.removeEventListener("click", d, !0));
      }
    ), re(
      () => a.value,
      async (c) => {
        c && (t != null && t.isOpen) && await ze();
      }
    ), se(async () => {
      await ze(), s && s();
    }), ye(() => {
      console.log("DropdownContent unmounted"), document.removeEventListener("click", d, !0);
    }), (c, m) => (E(), R("div", {
      ref_key: "contentRef",
      ref: r,
      class: "absolute z-50",
      style: Jt(P(l))
    }, [
      H(ft, {
        "enter-active-class": "transition-all duration-200 ease-out",
        "leave-active-class": "transition-all duration-200 ease-in",
        "enter-from-class": "opacity-0 scale-95",
        "enter-to-class": "opacity-100 scale-100",
        "leave-from-class": "opacity-100 scale-100",
        "leave-to-class": "opacity-0 scale-95"
      }, {
        default: V(() => {
          var f;
          return [
            Yt(I("div", {
              role: "menu",
              class: W([
                "relative min-w-[8rem] overflow-hidden rounded-md border border-ring bg-popover p-1 text-foreground shadow-lg"
              ]),
              onClick: i,
              onKeydown: u,
              tabindex: "-1"
            }, [
              B(c.$slots, "default")
            ], 544), [
              [Xt, (f = P(t)) == null ? void 0 : f.isOpen]
            ])
          ];
        }),
        _: 3
      })
    ], 4));
  }
}), Vn = /* @__PURE__ */ N({
  __name: "DropdownItem",
  props: {
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["click", "select"],
  setup(e, { expose: n, emit: t }) {
    const o = e, r = t, a = me("dropdown"), l = S(), s = S();
    se(() => {
      s.value = `dropdown-item-${Math.random().toString(36).substr(2, 9)}`, a && l.value && s.value && a.registerItem(l.value, s.value);
    }), ye(() => {
      a && s.value && a.unregisterItem(s.value);
    });
    const i = T(() => (a == null ? void 0 : a.getActiveItemId()) === s.value), u = (p) => {
      o.disabled || (p.preventDefault(), p.stopPropagation(), r("click", p), r("select"), a == null || a.close());
    }, d = (p) => {
      if (!o.disabled)
        switch (p.key) {
          case "Enter":
          case " ":
            p.preventDefault(), r("select"), a == null || a.close();
            break;
        }
    }, c = () => {
      o.disabled || a && s.value && a.focusItem(s.value);
    }, m = () => {
      o.disabled;
    }, f = () => {
      o.disabled || a && s.value && a.focusItem(s.value);
    };
    return n({
      itemRef: l
    }), (p, g) => (E(), R("div", {
      ref_key: "itemRef",
      ref: l,
      role: "menuitem",
      tabindex: "-1",
      class: W([
        "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground",
        i.value ? "text-accent-foreground bg-accent" : "text-foreground/70 hover:text-accent-foreground",
        p.disabled && "pointer-events-none opacity-50"
      ]),
      onClick: u,
      onKeydown: d,
      onMouseenter: c,
      onMouseleave: m,
      onFocus: f
    }, [
      B(p.$slots, "default")
    ], 34));
  }
}), Yu = {
  class: /* @__PURE__ */ W(["px-2 py-1.5 text-sm font-semibold text-foreground"])
}, sp = /* @__PURE__ */ N({
  __name: "DropdownLabel",
  setup(e) {
    return (n, t) => (E(), R("div", Yu, [
      B(n.$slots, "default")
    ]));
  }
}), Xu = {
  role: "separator",
  class: /* @__PURE__ */ W(["-mx-1 my-1 h-px bg-gray-200", "dark:bg-gray-700"])
}, Ju = /* @__PURE__ */ N({
  __name: "DropdownSeparator",
  setup(e) {
    return (n, t) => (E(), R("div", Xu));
  }
}), Qu = { class: "relative" }, ip = /* @__PURE__ */ N({
  __name: "DropdownSub",
  props: {
    side: { default: "right" },
    align: { default: "start" },
    sideOffset: { default: 0 },
    alignOffset: { default: 0 },
    avoidCollisions: { type: Boolean, default: !0 }
  },
  emits: ["open", "close"],
  setup(e, { expose: n, emit: t }) {
    const o = e, r = t, a = S(!1), l = S(), s = S(), i = {
      isOpen: T(() => a.value),
      triggerRef: l,
      open: () => {
        a.value = !0, r("open");
      },
      close: () => {
        a.value = !1, r("close");
      },
      toggle: () => {
        a.value ? (a.value = !1, r("close")) : (a.value = !0, r("open"));
      },
      setTriggerRef: (f) => {
        l.value = f;
      }
    };
    ke("dropdown", i);
    const { floatingStyles: u, placement: d } = Dn(l, s, {
      placement: `${o.side}-${o.align}`,
      middleware: [
        On({ mainAxis: o.sideOffset, crossAxis: o.alignOffset }),
        ...o.avoidCollisions ? [Dr()] : [],
        ...o.avoidCollisions ? [Tn()] : [],
        Fo()
      ],
      whileElementsMounted: Lo
    }), c = T(() => d.value ? d.value.split("-")[0] : o.side), m = T(() => {
      switch (c.value) {
        case "top":
          return "bottom";
        case "bottom":
          return "top";
        case "left":
          return "right";
        case "right":
          return "left";
        default:
          return "top";
      }
    });
    return n({
      isOpen: a,
      open: i.open,
      close: i.close,
      toggle: i.toggle,
      triggerRef: l,
      contentRef: s,
      floatingStyles: u,
      actualSide: c,
      transformOrigin: m
    }), (f, p) => (E(), R("div", Qu, [
      B(f.$slots, "default")
    ]));
  }
}), up = /* @__PURE__ */ N({
  __name: "DropdownSubContent",
  setup(e) {
    const n = me("dropdown"), t = S(), o = S({}), r = S("left");
    se(() => {
      var s;
      if (t.value) {
        const i = (s = Pa()) == null ? void 0 : s.parent;
        i && i.exposed && (i.exposed.contentRef = t.value, i.exposed.floatingStyles && (o.value = i.exposed.floatingStyles.value), i.exposed.transformOrigin && (r.value = i.exposed.transformOrigin.value));
      }
    });
    const a = (s) => {
      s.stopPropagation();
    }, l = (s) => {
      var d;
      if (!(n != null && n.isOpen) || !t.value) return;
      const i = s.target, u = (d = n.triggerRef) == null ? void 0 : d.value;
      u && !u.contains(i) && !t.value.contains(i) && n.close();
    };
    return se(() => {
      setTimeout(() => {
        document.addEventListener("click", l, !0);
      }, 0);
    }), ye(() => {
      document.removeEventListener("click", l, !0);
    }), (s, i) => (E(), fe($o, { to: "body" }, [
      H(ft, {
        "enter-active-class": "transition-all duration-200 ease-out",
        "leave-active-class": "transition-all duration-150 ease-in",
        "enter-from-class": "opacity-0 scale-95",
        "enter-to-class": "opacity-100 scale-100",
        "leave-from-class": "opacity-100 scale-100",
        "leave-to-class": "opacity-0 scale-95"
      }, {
        default: V(() => {
          var u;
          return [
            Yt(I("div", {
              ref_key: "contentRef",
              ref: t,
              role: "menu",
              class: W([
                "fixed z-50 min-w-[8rem] overflow-hidden rounded-md border bg-white p-1 text-gray-900 shadow-lg",
                "dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700"
              ]),
              style: Jt({
                ...o.value,
                transformOrigin: `${r.value} center`
              }),
              onClick: a
            }, [
              B(s.$slots, "default")
            ], 4), [
              [Xt, (u = P(n)) == null ? void 0 : u.isOpen]
            ])
          ];
        }),
        _: 3
      })
    ]));
  }
}), Zu = ["data-state"], dp = /* @__PURE__ */ N({
  __name: "DropdownSubTrigger",
  emits: ["click", "keydown"],
  setup(e, { expose: n, emit: t }) {
    const o = t, r = me("dropdown"), a = S();
    se(() => {
      r && a.value && r.setTriggerRef(a.value);
    });
    const l = (d) => {
      d.preventDefault(), d.stopPropagation(), r == null || r.toggle(), o("click", d);
    }, s = (d) => {
      switch (d.key) {
        case "Enter":
        case " ":
          d.preventDefault(), r == null || r.toggle();
          break;
        case "ArrowRight":
          d.preventDefault(), r == null || r.open();
          break;
        case "ArrowLeft":
          d.preventDefault(), r == null || r.close();
          break;
      }
      o("keydown", d);
    }, i = () => {
      r == null || r.open();
    }, u = () => {
    };
    return n({
      triggerRef: a
    }), (d, c) => {
      var m;
      return E(), R("div", {
        ref_key: "triggerRef",
        ref: a,
        role: "menuitem",
        tabindex: "-1",
        class: W([
          "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors",
          "focus:bg-gray-100 focus:text-gray-900",
          "dark:focus:bg-gray-700 dark:focus:text-gray-100",
          "hover:bg-gray-100 hover:text-gray-900",
          "dark:hover:bg-gray-700 dark:hover:text-gray-100",
          "data-[state=open]:bg-gray-100 data-[state=open]:text-gray-900",
          "dark:data-[state=open]:bg-gray-700 dark:data-[state=open]:text-gray-100"
        ]),
        "data-state": (m = P(r)) != null && m.isOpen ? "open" : "closed",
        onClick: l,
        onKeydown: s,
        onMouseenter: i,
        onMouseleave: u
      }, [
        B(d.$slots, "default"),
        c[0] || (c[0] = I("svg", {
          class: "ml-auto h-4 w-4",
          xmlns: "http://www.w3.org/2000/svg",
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }, [
          I("polyline", { points: "6,9 12,15 18,9" })
        ], -1))
      ], 40, Zu);
    };
  }
}), ed = ["innerHTML"], Pl = /* @__PURE__ */ N({
  __name: "EmptyState",
  props: {
    theme: { default: () => ({
      container: "",
      title: "",
      description: ""
    }) },
    title: {}
  },
  setup(e) {
    return (n, t) => (E(), R("div", {
      class: W(
        P(ce)(
          "bg-card border border-ring border-dashed rounded-lg p-6",
          n.theme.container
        )
      )
    }, [
      I("h3", {
        class: W(P(ce)("text-base font-semibold text-foreground", n.theme.title)),
        innerHTML: n.title
      }, null, 10, ed),
      I("div", {
        class: W(P(ce)("mt-1 text-muted-foreground", n.theme.description))
      }, [
        B(n.$slots, "default")
      ], 2)
    ], 2));
  }
}), td = ["aria-labelledby", "aria-describedby"], nd = /* @__PURE__ */ N({
  __name: "ModalRoot",
  props: {
    open: { type: Boolean, default: !1 },
    closeOnBackdropClick: { type: Boolean, default: !0 },
    closeOnEscape: { type: Boolean, default: !0 },
    preventBodyScroll: { type: Boolean, default: !0 },
    theme: { default: () => ({
      backdrop: ""
    }) }
  },
  emits: ["close", "update:open"],
  setup(e, { expose: n, emit: t }) {
    function o(...w) {
      return Rt(_t(w));
    }
    const r = t, a = e, l = S(), s = S(), i = T(
      () => `modal-title-${Math.random().toString(36).substr(2, 9)}`
    ), u = T(
      () => `modal-description-${Math.random().toString(36).substr(2, 9)}`
    );
    let d = null;
    const c = () => {
      a.preventBodyScroll && (d = document.body.style.overflow, document.body.style.overflow = "hidden");
    }, m = () => {
      a.preventBodyScroll && d !== null && (document.body.style.overflow = d, d = null);
    }, f = () => {
      r("close"), r("update:open", !1);
    }, p = (w) => {
      a.closeOnBackdropClick && w.target === l.value && f();
    }, g = (w) => {
      a.closeOnEscape && w.key === "Escape" && (w.preventDefault(), f());
    };
    re(
      () => a.open,
      async (w) => {
        w ? (c(), await ze(), l.value && l.value.focus()) : m();
      }
    ), se(() => {
      a.open && c(), document.addEventListener("keydown", b);
    }), ye(() => {
      m(), document.removeEventListener("keydown", b);
    });
    const b = (w) => {
      a.open && a.closeOnEscape && w.key === "Escape" && (w.preventDefault(), f());
    };
    return n({
      close: f,
      modalContainerRef: l,
      backdropRef: s,
      titleId: i.value,
      descriptionId: u.value
    }), (w, y) => (E(), fe($o, { to: "body" }, [
      H(ft, {
        "enter-active-class": "transition-all duration-300 ease-out",
        "enter-from-class": "opacity-0",
        "enter-to-class": "opacity-100",
        "leave-active-class": "transition-all duration-200 ease-in",
        "leave-from-class": "opacity-100",
        "leave-to-class": "opacity-0"
      }, {
        default: V(() => [
          w.open ? (E(), R("div", {
            key: 0,
            ref_key: "backdropRef",
            ref: s,
            class: W(
              o(
                "fixed inset-0 bg-primary/20 backdrop-blur-sm",
                w.theme.backdrop
              )
            ),
            style: { zIndex: "var(--z-modal-backdrop)" }
          }, null, 2)) : le("", !0)
        ]),
        _: 1
      }),
      H(ft, {
        "enter-active-class": "transition-all duration-150 ease-out",
        "enter-from-class": "opacity-0 scale-95 translate-y-4",
        "enter-to-class": "opacity-100 scale-100 translate-y-0",
        "leave-active-class": "transition-all duration-150 ease-in",
        "leave-from-class": "opacity-100 scale-100 translate-y-0",
        "leave-to-class": "opacity-0 scale-95 translate-y-4"
      }, {
        default: V(() => [
          w.open ? (E(), R("div", {
            key: 0,
            ref_key: "modalContainerRef",
            ref: l,
            onClick: p,
            class: W(
              o(
                "fixed inset-0 z-50 flex items-center justify-center",
                w.theme.backdrop
              )
            ),
            style: { zIndex: "var(--z-modal-backdrop)" },
            onKeydown: g,
            tabindex: "-1",
            role: "dialog",
            "aria-modal": !0,
            "aria-labelledby": i.value,
            "aria-describedby": u.value
          }, [
            B(w.$slots, "default", {}, void 0, !0)
          ], 42, td)) : le("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), od = /* @__PURE__ */ tn(nd, [["__scopeId", "data-v-96442585"]]), rd = /* @__PURE__ */ N({
  __name: "ModalContent",
  props: {
    size: { default: "default" },
    theme: { default: () => ({
      container: ""
    }) }
  },
  setup(e, { expose: n }) {
    function t(...l) {
      return Rt(_t(l));
    }
    const o = S(), r = (l) => {
      if (!o.value || l.key !== "Tab") return;
      const s = o.value.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (s.length === 0) return;
      const i = s[0], u = s[s.length - 1];
      l.shiftKey ? document.activeElement === i && (l.preventDefault(), u.focus()) : document.activeElement === u && (l.preventDefault(), i.focus());
    };
    return n({
      modalRef: o,
      focusFirstElement: async () => {
        var s;
        await ze();
        const l = (s = o.value) == null ? void 0 : s.querySelector(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        l ? l.focus() : o.value && o.value.focus();
      }
    }), (l, s) => (E(), R("div", {
      ref_key: "modalRef",
      ref: o,
      class: W(
        t(
          "relative w-full max-w-lg max-h-[90vh] overflow-hidden rounded-lg bg-card shadow-lg border border-ring flex flex-col",
          l.size === "sm" && "max-w-md",
          l.size === "lg" && "max-w-2xl",
          l.size === "xl" && "max-w-4xl",
          l.size === "full" && "max-w-[95vw] max-h-[95vh]",
          l.theme.container
        )
      ),
      style: { zIndex: "var(--z-modal)" },
      onClick: s[0] || (s[0] = dn(() => {
      }, ["stop"])),
      onKeydown: r
    }, [
      B(l.$slots, "default")
    ], 34));
  }
}), ad = ["aria-label"], ld = /* @__PURE__ */ N({
  __name: "ModalClose",
  props: {
    closeButtonLabel: { default: "Close modal" },
    theme: { default: () => ({
      closeButton: ""
    }) }
  },
  emits: ["close"],
  setup(e, { emit: n }) {
    function t(...o) {
      return Rt(_t(o));
    }
    return (o, r) => (E(), R("button", {
      onClick: r[0] || (r[0] = (a) => o.$emit("close")),
      class: W(
        t(
          "absolute top-6 right-6 p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors",
          o.theme.closeButton
        )
      ),
      type: "button",
      "aria-label": o.closeButtonLabel
    }, [
      H(P(Po), { class: "size-4" })
    ], 10, ad));
  }
}), sd = /* @__PURE__ */ N({
  __name: "Modal",
  props: {
    open: { type: Boolean, default: !1 },
    size: { default: "default" },
    showCloseButton: { type: Boolean, default: !0 },
    closeOnBackdropClick: { type: Boolean, default: !0 },
    closeOnEscape: { type: Boolean, default: !0 },
    preventBodyScroll: { type: Boolean, default: !0 },
    closeButtonLabel: { default: "Close modal" },
    theme: { default: () => ({
      backdrop: "",
      container: "",
      header: "",
      content: "",
      footer: "",
      closeButton: ""
    }) }
  },
  emits: ["close", "update:open"],
  setup(e, { expose: n, emit: t }) {
    const o = t;
    return `${Math.random().toString(36).substr(2, 9)}`, n({
      close: () => o("close")
    }), (r, a) => (E(), fe(od, {
      open: r.open,
      "close-on-backdrop-click": r.closeOnBackdropClick,
      "close-on-escape": r.closeOnEscape,
      "prevent-body-scroll": r.preventBodyScroll,
      theme: r.theme,
      onClose: a[1] || (a[1] = (l) => r.$emit("close")),
      "onUpdate:open": a[2] || (a[2] = (l) => r.$emit("update:open", l))
    }, {
      default: V(() => [
        H(rd, {
          size: r.size,
          theme: r.theme
        }, {
          default: V(() => [
            H(ld, {
              "close-button-label": r.closeButtonLabel,
              theme: r.theme,
              onClose: a[0] || (a[0] = (l) => r.$emit("close"))
            }, null, 8, ["close-button-label", "theme"]),
            B(r.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        }, 8, ["size", "theme"])
      ]),
      _: 3
    }, 8, ["open", "close-on-backdrop-click", "close-on-escape", "prevent-body-scroll", "theme"]));
  }
}), cp = /* @__PURE__ */ tn(sd, [["__scopeId", "data-v-5e273e5b"]]), id = { class: "flex-1 min-w-0" }, fp = /* @__PURE__ */ N({
  __name: "ModalHeader",
  props: {
    showCloseButton: { type: Boolean, default: !0 },
    closeButtonLabel: { default: "Close modal" },
    theme: { default: () => ({
      header: "",
      closeButton: ""
    }) }
  },
  emits: ["close"],
  setup(e, { emit: n }) {
    function t(...o) {
      return Rt(_t(o));
    }
    return (o, r) => (E(), R("div", {
      class: W(t("flex items-center justify-between p-6", o.theme.header))
    }, [
      I("div", id, [
        B(o.$slots, "default")
      ])
    ], 2));
  }
}), ud = ["id"], pp = /* @__PURE__ */ N({
  __name: "ModalTitle",
  props: {
    titleId: {}
  },
  setup(e) {
    return (n, t) => (E(), R("h2", {
      id: n.titleId,
      class: "text-lg font-semibold text-foreground"
    }, [
      B(n.$slots, "default")
    ], 8, ud));
  }
}), mp = /* @__PURE__ */ N({
  __name: "ModalBody",
  props: {
    hasHeader: { type: Boolean, default: !1 },
    hasFooter: { type: Boolean, default: !1 },
    theme: { default: () => ({
      content: ""
    }) }
  },
  setup(e) {
    function n(...t) {
      return Rt(_t(t));
    }
    return (t, o) => (E(), R("div", {
      class: W(n("flex-1 grow overflow-auto px-6", t.theme.content))
    }, [
      B(t.$slots, "default")
    ], 2));
  }
}), vp = /* @__PURE__ */ N({
  __name: "ModalFooter",
  props: {
    theme: { default: () => ({
      footer: ""
    }) }
  },
  setup(e) {
    function n(...t) {
      return Rt(_t(t));
    }
    return (t, o) => (E(), R("div", {
      class: W(n("flex items-center justify-end gap-3 p-6", t.theme.footer))
    }, [
      B(t.$slots, "default")
    ], 2));
  }
}), dd = /* @__PURE__ */ N({
  __name: "Popover",
  props: {
    theme: { default: () => ({
      popoverMenu: "",
      popoverMenuButton: "",
      popoverMenuItems: "",
      popoverMenuItem: "",
      popoverMenuItemIcon: ""
    }) },
    context: { default: () => ({}) },
    allowedPlacements: { default: () => ["top-start", "bottom-start"] },
    floatingOptions: { default: () => ({
      strategy: "fixed",
      transform: !1,
      middleware: [
        Tn({
          padding: 10,
          limiter: Pr({
            offset: 10
          })
        }),
        Fo({
          allowedPlacements: ["top-start", "bottom-start"]
        }),
        On(10),
        $r({
          apply({ availableHeight: e, elements: n }) {
            const t = n.reference.getBoundingClientRect().width;
            Object.assign(n.floating.style, {
              minWidth: `${t}px`,
              maxHeight: `${e - 20}px`
            });
          }
        })
      ],
      whileElementsMounted: Lo
    }) },
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(e, { expose: n, emit: t }) {
    const o = e, r = t, a = S(), l = S(), s = S(o.open ?? !1);
    re(
      () => o.open,
      (c) => {
        c !== void 0 && (s.value = c);
      },
      { immediate: !0 }
    );
    const i = (c) => {
      s.value = c, r("update:open", c);
    }, { floatingStyles: u } = Dn(a, l, {
      strategy: o.floatingOptions.strategy,
      transform: o.floatingOptions.transform,
      placement: o.floatingOptions.placement,
      middleware: o.floatingOptions.middleware,
      open: s.value,
      whileElementsMounted: o.floatingOptions.whileElementsMounted
    });
    return n({
      /** Reference to the floating element */
      floating: l,
      /** Reference to the trigger element */
      reference: a,
      /** Method to close the popover */
      close: () => {
        i(!1);
      },
      /** Current open state of the popover */
      isOpen: s
    }), (c, m) => (E(), fe(P(Sl), {
      class: W(P(ce)("relative inline-block text-left", c.theme.popoverMenu)),
      open: s.value,
      "onUpdate:open": i
    }, {
      default: V(({ open: f }) => [
        I("div", null, [
          H(P(xu), {
            ref_key: "reference",
            ref: a,
            class: W(
              P(ce)(f ? "is-open" : "is-closed", c.theme.popoverMenuButton)
            )
          }, {
            default: V(() => [
              B(c.$slots, "trigger")
            ]),
            _: 2
          }, 1032, ["class"])
        ]),
        H(ft, {
          "enter-active-class": "transition duration-200 ease-out",
          "enter-from-class": "translate-y-1 opacity-0",
          "enter-to-class": "translate-y-0 opacity-100",
          "leave-active-class": "transition duration-150 ease-in",
          "leave-from-class": "translate-y-0 opacity-100",
          "leave-to-class": "translate-y-1 opacity-0"
        }, {
          default: V(() => [
            H(P(Cu), {
              ref_key: "floating",
              ref: l,
              class: W(
                P(ce)(
                  "fixed z-50 transform overflow-x-hidden overflow-y-auto rounded-lg bg-background p-3 text-base shadow-lg ring-1 ring-ring focus:outline-hidden sm:text-sm",
                  c.theme.popoverMenuItems
                )
              ),
              style: Jt(P(u))
            }, {
              default: V(({ close: p }) => [
                B(c.$slots, "default", rt(pt({ close: p })))
              ]),
              _: 3
            }, 8, ["class", "style"])
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["class", "open"]));
  }
}), cd = ["data-group-id", "data-shared-group"], fd = { class: "flex flex-col" }, pd = ["onDragstart", "onDragend", "onDragover", "onDrop"], md = {
  key: 1,
  class: ""
}, vd = { class: "flex-1 min-w-0" }, gd = /* @__PURE__ */ N({
  __name: "Sortable",
  props: {
    items: {},
    groupId: {},
    disabled: { type: Boolean, default: !1 },
    sharedGroup: { default: void 0 }
  },
  emits: ["update:items", "item-moved", "drag-start", "drag-end", "cross-group-drag"],
  setup(e, { emit: n }) {
    const t = e, o = n, r = S([...t.items]), a = S(!1), l = S(null), s = S(-1), i = S(-1), u = S(!1);
    re(
      () => t.items,
      (v) => {
        r.value = [...v];
      },
      { deep: !0 }
    );
    const d = (v, x, h) => {
      if (!t.disabled) {
        if (v.stopPropagation(), console.log("Drag start:", { item: x, index: h, groupId: t.groupId }), a.value = !0, l.value = x, s.value = h, v.dataTransfer) {
          const C = {
            item: x,
            sourceGroupId: t.groupId,
            sourceIndex: h
          };
          v.dataTransfer.setData("application/json", JSON.stringify(C)), v.dataTransfer.effectAllowed = "move", console.log("Drag data set:", C);
        }
        o("drag-start", { item: x, groupId: t.groupId, index: h });
      }
    }, c = (v, x, h) => {
      console.log("Drag end:", {
        item: x,
        groupId: t.groupId,
        index: h,
        isDragging: a.value
      }), a.value = !1, l.value = null, s.value = -1, i.value = -1, u.value = !1, o("drag-end", { item: x, groupId: t.groupId, index: h });
    }, m = (v, x) => {
      var k;
      v.preventDefault(), console.log("Drop event triggered:", {
        isDragging: a.value,
        draggedItem: l.value,
        draggedIndex: s.value,
        targetIndex: x,
        groupId: t.groupId
      });
      const h = (k = v.dataTransfer) == null ? void 0 : k.getData("application/json");
      let C = !1;
      if (h)
        try {
          const O = JSON.parse(h);
          if (console.log("Drag data:", O), O.sourceGroupId !== t.groupId) {
            console.log("Cross-group drop detected"), C = !0, o("cross-group-drag", {
              item: O.item,
              fromGroup: O.sourceGroupId,
              fromIndex: O.sourceIndex
            });
            return;
          }
        } catch (O) {
          console.warn("Failed to parse drag data:", O);
        }
      if (!a.value || !l.value) {
        console.log("No drag state or item - returning early");
        return;
      }
      if (x !== void 0 && x !== s.value) {
        console.log("Within-group reorder:", {
          from: s.value,
          to: x
        });
        const O = [...r.value], [A] = O.splice(s.value, 1);
        O.splice(x, 0, A), r.value = O, o("update:items", O), o("item-moved", {
          item: l.value,
          fromGroup: t.groupId,
          toGroup: t.groupId,
          fromIndex: s.value,
          toIndex: x
        });
      }
    }, f = (v) => {
      v.preventDefault(), v.dataTransfer && (v.dataTransfer.dropEffect = "move");
    }, p = (v, x) => {
      console.log(
        "Item drop at index:",
        x,
        "dragged from:",
        s.value
      ), m(v, x);
    }, g = (v, x) => {
      v.preventDefault(), v.dataTransfer && (v.dataTransfer.dropEffect = "move"), x !== s.value && (i.value = x);
    }, b = (v) => {
      const x = v.currentTarget;
      x && (x.style.opacity = "1");
    }, w = () => {
      i.value = -1;
    }, y = (v) => {
      console.log("Container drop event"), m(v);
    };
    return (v, x) => (E(), R("div", {
      class: W(["w-full rounded-lg relative transition-colors", {
        "min-h-[100px]": r.value.length === 0,
        "ring-2 ring-primary/20 bg-primary/5": r.value.length === 0 && a.value
      }]),
      "data-group-id": v.groupId,
      "data-shared-group": v.sharedGroup,
      onDrop: x[0] || (x[0] = (h) => y(h)),
      onDragover: f,
      onDragleave: w
    }, [
      I("div", fd, [
        (E(!0), R(be, null, He(r.value, (h, C) => (E(), R("div", {
          key: `${v.groupId}-${h.id || h}`,
          class: W(["cursor-grab select-none transition-all duration-200 ease-in-out relative", {
            "opacity-50 rotate-1 z-10 shadow-none": a.value && C === s.value,
            "translate-y-1": !1
          }]),
          draggable: "true",
          onDragstart: (k) => d(k, h, C),
          onDragend: (k) => c(k, h, C),
          onDragover: (k) => g(k, C),
          onDrop: (k) => p(k, C),
          onDragleave: b
        }, [
          I("div", {
            class: W(["w-full rounded-md transition-all duration-200 ease-in-out flex items-center justify-between gap-3", {
              "ring-1 ring-ring shadow-md shadow-ring": a.value && C === s.value,
              "ring-1 ring-accent shadow-md": a.value && C === i.value && C !== s.value
            }])
          }, [
            v.$slots.item ? B(v.$slots, "item", {
              key: 0,
              item: h,
              index: C,
              isDragging: a.value && C === s.value,
              isDropTarget: a.value && C === i.value && C !== s.value
            }, void 0, !0) : (E(), R("div", md, [
              I("div", vd, ge(h.label || h), 1),
              I("div", {
                class: W(["text-muted-foreground text-sm font-bold opacity-60 transition-opacity duration-200 select-none", {
                  "opacity-100 text-muted-foreground": a.value && C === s.value,
                  "opacity-100 text-muted": !a.value
                }])
              }, " ⋮⋮ ", 2)
            ]))
          ], 2)
        ], 42, pd))), 128))
      ])
    ], 42, cd));
  }
}), Il = /* @__PURE__ */ tn(gd, [["__scopeId", "data-v-e0978ead"]]), hd = { class: "relative" }, bd = { key: 0 }, yd = { class: "flex items-center gap-2" }, wd = { key: 2 }, xd = { key: 1 }, Cd = { key: 3 }, kd = { class: "border-t border-border px-2 first:border-t-0 py-2 first:pt-0 last:pb-0" }, Sd = { class: "flex items-center text-base font-medium" }, _d = { key: 1 }, Ed = { class: "-mx-2.5" }, Od = { key: 1 }, Td = { key: 1 }, Rl = /* @__PURE__ */ N({
  __name: "Typeahead",
  props: {
    debounce: { default: 600 },
    defaultItems: { default: () => [] },
    disabled: { default: () => [] },
    displayProperty: { type: Function, default: (e) => e.name },
    groupBy: {},
    groupsConfig: { default: () => ({}) },
    immediate: { type: Boolean, default: !1 },
    isStatic: { type: Boolean, default: !1 },
    items: { default: () => [] },
    floatingOptions: { default: () => ({
      strategy: "fixed",
      transform: !1,
      middleware: [
        Tn({
          padding: 10,
          limiter: Pr({
            offset: 10
          })
        }),
        Fo({
          allowedPlacements: ["top-start", "bottom-start"]
        }),
        On(10),
        $r({
          apply({ availableHeight: e, elements: n }) {
            const t = n.reference.getBoundingClientRect().width;
            Object.assign(n.floating.style, {
              minWidth: `${t}px`,
              maxHeight: `${e - 20}px`
            });
          }
        })
      ],
      whileElementsMounted: Lo
    }) },
    middlewareOptions: { default: () => ({
      autoPlacement: {
        allowedPlacements: ["top-start", "bottom-start"]
      },
      buffer: 20,
      size: {}
    }) },
    modelValue: { default: void 0 },
    multiple: { type: Boolean, default: !1 },
    nullable: { type: Boolean, default: !1 },
    placeholder: { default: "Search..." },
    prependItems: { default: () => [] },
    postpendItems: { default: () => [] },
    searcher: { type: Function, default: void 0 },
    theme: { default: () => ({
      baseDropdownInputContainer: "",
      baseDropdownInputText: "",
      generalFloatingPanelContainer: ""
    }) },
    uidProperty: { default: "id" },
    valueProperty: { default: "value" }
  },
  emits: ["update:modelValue"],
  setup(e, { expose: n, emit: t }) {
    const o = t, r = e, a = S([]), l = S(), s = S(""), i = S(), u = S(!1), d = S(!1), c = S(!1), m = T({
      get: () => r.modelValue,
      set: (g) => {
        o("update:modelValue", g);
      }
    }), { floatingStyles: f } = Dn(i, l, {
      strategy: r.floatingOptions.strategy,
      transform: r.floatingOptions.transform,
      placement: r.floatingOptions.placement,
      middleware: r.floatingOptions.middleware,
      whileElementsMounted: r.floatingOptions.whileElementsMounted
    });
    re(
      () => s.value,
      cs(async () => {
        const g = new AbortController();
        r.searcher ? (u.value = !0, a.value = await r.searcher(
          s.value,
          g
        ), u.value = !1) : a.value = [];
      }, r.debounce)
    ), re(
      () => r.defaultItems,
      (g) => {
        a.value = g;
      },
      { immediate: !0 }
    );
    const p = (g, b) => g.reduce(
      (w, y) => {
        var v;
        return (w[v = b(y)] || (w[v] = [])).push(y), w;
      },
      {}
    );
    return n({
      focused: c,
      query: s,
      searching: u
    }), (g, b) => (E(), R("div", {
      class: W(P(ce)("relative rounded-lg"))
    }, [
      H(P(Fr), {
        "model-value": m.value,
        immediate: g.immediate,
        nullable: g.nullable,
        multiple: g.multiple,
        "onUpdate:modelValue": b[3] || (b[3] = (w) => m.value = w)
      }, {
        default: V(() => [
          I("div", hd, [
            I("div", {
              ref_key: "reference",
              ref: i,
              class: W(P(ce)(g.theme.baseDropdownInputContainer))
            }, [
              H(P(Vr), {
                class: W(
                  P(ce)(
                    "flex w-full rounded-md border border-border bg-background pl-2.5 py-1.5 pr-8 text-sm truncate ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40 transition-[box-shadow,color] disabled:cursor-not-allowed disabled:opacity-50",
                    g.theme.baseDropdownInputText
                  )
                ),
                displayValue: g.displayProperty,
                placeholder: g.placeholder,
                autoComplete: "off",
                onFocus: b[0] || (b[0] = () => {
                  d.value = !0, c.value = !0;
                }),
                onBlur: b[1] || (b[1] = (w) => c.value = !1),
                onChange: b[2] || (b[2] = (w) => s.value = w.target.value)
              }, null, 8, ["class", "displayValue", "placeholder"]),
              H(P(Br), {
                class: W([
                  "absolute inset-y-0 right-0 flex items-center pr-2 text-muted-foreground"
                ])
              }, {
                default: V(() => [
                  H(P(Yn), { class: "size-4 text-inherit" })
                ]),
                _: 1
              })
            ], 2),
            H(ft, {
              "enter-active-class": "transition duration-200 ease-out",
              "enter-from-class": "translate-y-1 opacity-0",
              "enter-to-class": "translate-y-0 opacity-100",
              "leave-active-class": "transition duration-150 ease-in",
              "leave-from-class": "translate-y-0 opacity-100",
              "leave-to-class": "translate-y-1 opacity-0"
            }, {
              default: V(() => [
                H(P(Nr), {
                  ref_key: "floating",
                  ref: l,
                  class: W(
                    P(ce)(
                      "fixed left-0 z-10 overflow-x-hidden overflow-y-auto rounded-lg bg-popover p-3 text-base shadow-lg ring-1 ring-black/5 focus:outline-hidden sm:text-sm",
                      g.theme.generalFloatingPanelContainer
                    )
                  ),
                  style: Jt(P(f)),
                  static: g.isStatic
                }, {
                  default: V(() => [
                    g.$slots.static ? (E(), R("div", bd, [
                      B(g.$slots, "static", rt(pt({ query: s.value, searching: u.value })))
                    ])) : le("", !0),
                    u.value ? B(g.$slots, "searching", { key: 1 }, () => [
                      I("span", yd, [
                        H(P(Ss), { class: "size-4 animate-spin" }),
                        b[4] || (b[4] = I("span", null, "Searching...", -1))
                      ])
                    ]) : le("", !0),
                    a.value.length === 0 && !u.value ? (E(), R("div", wd, [
                      g.$slots.empty ? B(g.$slots, "empty", { key: 0 }) : (E(), R("span", xd, "No results"))
                    ])) : le("", !0),
                    g.groupBy && !u.value ? (E(), R("div", Cd, [
                      (E(!0), R(be, null, He(p(
                        [
                          ...g.prependItems,
                          ...a.value,
                          ...g.postpendItems
                        ],
                        (w) => w[g.groupBy]
                      ), (w, y) => (E(), R("div", kd, [
                        I("div", Sd, [
                          g.$slots.group ? B(g.$slots, "group", nt({
                            key: 0,
                            ref_for: !0
                          }, {
                            group: w,
                            groupName: y
                          })) : (E(), R("span", _d, ge([
                            "undefined",
                            null,
                            void 0
                          ].includes(y) ? "Uncategorized" : y), 1))
                        ]),
                        I("div", Ed, [
                          u.value ? le("", !0) : (E(!0), R(be, { key: 0 }, He(w, (v) => (E(), fe(P(qn), {
                            key: v[g.uidProperty],
                            value: v
                          }, {
                            default: V(({ active: x, selected: h }) => [
                              I("span", {
                                class: W([
                                  "cursor-pointer hover:bg-accent rounded-md px-2 py-1 flex w-full truncate",
                                  x && "bg-accent",
                                  h && "bg-accent"
                                ])
                              }, [
                                g.$slots.item ? B(g.$slots, "item", nt({
                                  key: 0,
                                  ref_for: !0
                                }, {
                                  item: v,
                                  active: x,
                                  selected: h
                                })) : (E(), R("span", Od, ge(g.displayProperty(v)), 1))
                              ], 2)
                            ]),
                            _: 2
                          }, 1032, ["value"]))), 128))
                        ])
                      ]))), 256))
                    ])) : u.value ? le("", !0) : (E(!0), R(be, { key: 4 }, He(a.value, (w) => (E(), fe(P(qn), {
                      key: w[g.uidProperty],
                      value: w
                    }, {
                      default: V(({ active: y, selected: v }) => [
                        I("span", {
                          class: W([
                            "cursor-pointer hover:bg-accent rounded-md px-2 py-1 flex w-full truncate",
                            y && "bg-accent",
                            v && "bg-accent"
                          ])
                        }, [
                          g.$slots.item ? B(g.$slots, "item", nt({
                            key: 0,
                            ref_for: !0
                          }, { item: w, active: y, selected: v })) : (E(), R("span", Td, ge(g.displayProperty(w)), 1))
                        ], 2)
                      ]),
                      _: 2
                    }, 1032, ["value"]))), 128)),
                    g.$slots.options ? B(g.$slots, "options", rt(nt({ key: 5 }, { filteredItems: a.value }))) : le("", !0)
                  ]),
                  _: 3
                }, 8, ["class", "style", "static"])
              ]),
              _: 3
            })
          ])
        ]),
        _: 3
      }, 8, ["model-value", "immediate", "nullable", "multiple"])
    ], 2));
  }
}), Dd = { class: "relative" }, gp = /* @__PURE__ */ N({
  __name: "Tooltip",
  setup(e, { expose: n }) {
    const t = S(!1), o = S(), r = S("body"), a = Kn({
      isVisible: T(() => t.value),
      triggerRef: o,
      show: () => {
        t.value = !0;
      },
      hide: () => {
        t.value = !1;
      },
      setTriggerRef: (l) => {
        o.value = l;
      },
      portalTarget: T(() => r.value)
    });
    return ke("tooltip", a), ke("triggerRef", o), n({
      isVisible: t,
      show: a.show,
      hide: a.hide,
      triggerRef: o,
      portalTarget: r
    }), (l, s) => (E(), R("div", Dd, [
      B(l.$slots, "default")
    ]));
  }
}), hp = /* @__PURE__ */ N({
  __name: "TooltipTrigger",
  props: {
    delay: { default: 300 },
    hideDelay: { default: 0 }
  },
  setup(e) {
    const n = e, t = me("tooltip"), o = S();
    let r = null, a = null;
    const l = () => {
      a && (clearTimeout(a), a = null), n.delay > 0 ? r = window.setTimeout(() => {
        t == null || t.show();
      }, n.delay) : t == null || t.show();
    }, s = () => {
      r && (clearTimeout(r), r = null), n.hideDelay > 0 ? a = window.setTimeout(() => {
        t == null || t.hide();
      }, n.hideDelay) : t == null || t.hide();
    }, i = () => {
      n.delay > 0 ? r = window.setTimeout(() => {
        t == null || t.show();
      }, n.delay) : t == null || t.show();
    }, u = () => {
      r && (clearTimeout(r), r = null), t == null || t.hide();
    };
    return se(() => {
      o.value && (t == null || t.setTriggerRef(o.value), process.env.NODE_ENV === "development" && console.log("TooltipTrigger mounted:", {
        triggerRef: o.value,
        tooltip: t
      }));
    }), ye(() => {
      r && clearTimeout(r), a && clearTimeout(a);
    }), (d, c) => (E(), R("div", {
      ref_key: "triggerRef",
      ref: o,
      onMouseenter: l,
      onMouseleave: s,
      onFocus: i,
      onBlur: u
    }, [
      B(d.$slots, "default")
    ], 544));
  }
}), $d = {
  role: "tooltip",
  class: "relative max-w-xs rounded-md bg-tooltip px-3 py-2 text-sm text-tooltip-foreground shadow-lg pointer-events-auto transform-gpu"
}, bp = /* @__PURE__ */ N({
  __name: "TooltipContent",
  props: {
    side: { default: "top" },
    align: { default: "center" },
    sideOffset: { default: 8 },
    alignOffset: { default: 0 },
    avoidCollisions: { type: Boolean, default: !0 }
  },
  setup(e) {
    const n = e, t = me("tooltip"), o = me("triggerRef"), r = S(), a = S(), l = T(
      () => {
        var p;
        return (o == null ? void 0 : o.value) || ((p = t == null ? void 0 : t.triggerRef) == null ? void 0 : p.value);
      }
    ), s = T(() => `${n.side}-${n.align}`), { floatingStyles: i, middlewareData: u, update: d } = Dn(
      l || S(null),
      r,
      {
        strategy: "fixed",
        placement: s,
        middleware: [
          On({
            mainAxis: n.sideOffset,
            crossAxis: n.alignOffset
          }),
          ...n.avoidCollisions ? [Dr()] : [],
          ...n.avoidCollisions ? [Tn()] : [],
          mi({ element: a })
        ]
      }
    ), c = T(() => {
      var g;
      const p = (g = u.value) == null ? void 0 : g.flip;
      return p && p.overflows && p.overflows.length > 0 ? p.overflows[0].placement : n.side;
    });
    re(
      [
        () => n.side,
        () => n.align,
        () => n.sideOffset,
        () => n.alignOffset
      ],
      () => {
        ze(() => {
          d();
        });
      }
    ), re(
      () => t == null ? void 0 : t.isVisible,
      (p) => {
        p && ze(() => {
          d();
        });
      },
      { immediate: !0 }
    ), re(i, (p) => {
      process.env.NODE_ENV === "development" && console.log("Tooltip positioning:", {
        requestedPlacement: s.value,
        actualPlacement: c.value,
        styles: p,
        triggerRef: l.value,
        contentRef: r.value
      });
    });
    const m = T(() => {
      const p = c.value, [g, b] = p.split("-"), w = b || "center";
      switch (g) {
        case "top":
          switch (w) {
            case "start":
              return "bottom-[-4px] left-4";
            case "end":
              return "bottom-[-4px] right-4";
            default:
              return "bottom-[-4px] left-1/2 transform -translate-x-1/2";
          }
        case "bottom":
          switch (w) {
            case "start":
              return "top-[-4px] left-4";
            case "end":
              return "top-[-4px] right-4";
            default:
              return "top-[-4px] left-1/2 transform -translate-x-1/2";
          }
        case "left":
          switch (w) {
            case "start":
              return "right-[-4px] top-4";
            case "end":
              return "right-[-4px] bottom-4";
            default:
              return "right-[-4px] top-1/2 transform -translate-y-1/2";
          }
        case "right":
          switch (w) {
            case "start":
              return "left-[-4px] top-4";
            case "end":
              return "left-[-4px] bottom-4";
            default:
              return "left-[-4px] top-1/2 transform -translate-y-1/2";
          }
        default:
          return "bottom-[-4px] left-1/2 transform -translate-x-1/2";
      }
    }), f = T(() => {
      var p;
      return ((p = u.value) == null ? void 0 : p.arrow) || {};
    });
    return se(async () => {
      await ze(), setTimeout(() => {
        d();
      }, 100);
    }), (p, g) => {
      var b;
      return E(), fe($o, {
        to: ((b = P(t)) == null ? void 0 : b.portalTarget) || "body"
      }, [
        I("div", {
          ref_key: "contentRef",
          ref: r,
          class: "fixed z-[9999] pointer-events-none",
          style: Jt(P(i))
        }, [
          H(ft, {
            "enter-active-class": "transition-all duration-200 ease-out",
            "leave-active-class": "transition-all duration-150 ease-in",
            "enter-from-class": "opacity-0 scale-95 translate-y-1",
            "enter-to-class": "opacity-100 scale-100 translate-y-0",
            "leave-from-class": "opacity-100 scale-100 translate-y-0",
            "leave-to-class": "opacity-0 scale-95 translate-y-1"
          }, {
            default: V(() => {
              var w;
              return [
                Yt(I("div", $d, [
                  B(p.$slots, "default"),
                  I("div", {
                    ref_key: "arrowRef",
                    ref: a,
                    class: W(["absolute w-2 h-2 bg-tooltip rotate-45", m.value]),
                    style: Jt(f.value)
                  }, null, 6)
                ], 512), [
                  [Xt, (w = P(t)) == null ? void 0 : w.isVisible]
                ])
              ];
            }),
            _: 3
          })
        ], 4)
      ], 8, ["to"]);
    };
  }
}), Pd = { class: "flex items-center gap-3" }, Id = { class: "flex items-center gap-2" }, Rd = {
  key: 0,
  class: "w-2 h-2 bg-yellow-200 rounded-full m-0.5"
}, Ad = ["aria-label"], Md = {
  key: 0,
  class: "w-4 h-4",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
}, Ld = {
  key: 1,
  class: "w-4 h-4",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
}, Fd = { class: "mt-2 text-xs opacity-70" }, yp = /* @__PURE__ */ N({
  __name: "ThemeToggle",
  props: {
    variant: { default: "default" },
    showDetails: { type: Boolean, default: !0 },
    theme: { default: () => ({
      container: "",
      text: "",
      button: ""
    }) }
  },
  setup(e) {
    const n = e, { isDark: t, background: o, themeClass: r, toggleTheme: a } = Aa(), l = T(() => ["p-4 rounded-lg border transition-colors", {
      default: "bg-card text-card-foreground",
      compact: "bg-muted/50 text-muted-foreground",
      minimal: "bg-transparent"
    }[n.variant], n.theme.container].filter(Boolean).join(" ")), s = T(() => ["font-medium", n.theme.text].filter(Boolean).join(" ")), i = T(() => ["p-2 rounded-md transition-colors hover:bg-accent hover:text-accent-foreground", n.theme.button].filter(Boolean).join(" "));
    return (u, d) => (E(), R("div", {
      class: W(l.value)
    }, [
      I("div", Pd, [
        I("div", Id, [
          I("div", {
            class: W([
              "w-4 h-4 rounded-full border-2 transition-colors",
              P(t) ? "bg-yellow-400 border-yellow-600" : "bg-blue-400 border-blue-600"
            ])
          }, [
            P(t) ? (E(), R("div", Rd)) : le("", !0)
          ], 2),
          I("span", {
            class: W(s.value)
          }, ge(P(t) ? "Dark" : "Light") + " Theme ", 3)
        ]),
        I("button", {
          onClick: d[0] || (d[0] = //@ts-ignore
          (...c) => P(a) && P(a)(...c)),
          class: W(i.value),
          type: "button",
          "aria-label": `Switch to ${P(t) ? "light" : "dark"} theme`
        }, [
          P(t) ? (E(), R("svg", Md, d[1] || (d[1] = [
            I("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            }, null, -1)
          ]))) : (E(), R("svg", Ld, d[2] || (d[2] = [
            I("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            }, null, -1)
          ])))
        ], 10, Ad)
      ]),
      I("div", Fd, [
        I("p", null, "Background: " + ge(P(o)), 1),
        I("p", null, "Theme Class: " + ge(P(r)), 1)
      ])
    ], 2));
  }
}), Bd = {
  "aria-label": "Breadcrumb",
  class: "flex"
}, wp = /* @__PURE__ */ N({
  __name: "Breadcrumbs",
  setup(e) {
    const n = S([]), t = Kn({
      items: T(() => n.value),
      addItem: (o) => {
        const r = n.value.findIndex((a) => a.id === o.id);
        r >= 0 ? n.value[r] = {
          ...n.value[r],
          ...o
        } : n.value.push(o);
      },
      removeItem: (o) => {
        const r = n.value.findIndex((a) => a.id === o);
        r >= 0 && n.value.splice(r, 1);
      },
      updateItem: (o, r) => {
        const a = n.value.findIndex((l) => l.id === o);
        a >= 0 && (n.value[a] = { ...n.value[a], ...r });
      },
      getItems: () => n.value
    });
    return ke("breadcrumb", t), (o, r) => (E(), R("nav", Bd, [
      B(o.$slots, "default")
    ]));
  }
}), Vd = { class: "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground" }, xp = /* @__PURE__ */ N({
  __name: "BreadcrumbList",
  setup(e) {
    return (n, t) => (E(), R("ol", Vd, [
      B(n.$slots, "default")
    ]));
  }
}), Nd = { class: "inline-flex items-center gap-1.5" }, Cp = /* @__PURE__ */ N({
  __name: "BreadcrumbItem",
  setup(e) {
    return (n, t) => (E(), R("li", Nd, [
      B(n.$slots, "default")
    ]));
  }
}), kp = /* @__PURE__ */ N({
  __name: "BreadcrumbLink",
  props: {
    href: { default: void 0 },
    to: { default: void 0 },
    asChild: { type: Boolean, default: !1 },
    theme: { default: () => ({
      link: ""
    }) }
  },
  emits: ["click"],
  setup(e, { emit: n }) {
    const t = e, o = n, r = T(() => t.asChild ? "slot" : t.to ? "router-link" : "a");
    function a(l) {
      o("click", l);
    }
    return (l, s) => (E(), fe(Ra(r.value), {
      href: l.href,
      to: l.to,
      class: W(
        P(ce)(
          "transition-colors hover:text-foreground",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          "rounded-sm focus-visible:ring-offset-background",
          l.theme.link
        )
      ),
      onClick: a
    }, {
      default: V(() => [
        B(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["href", "to", "class"]));
  }
}), Sp = /* @__PURE__ */ N({
  __name: "BreadcrumbPage",
  props: {
    theme: { default: () => ({
      page: ""
    }) }
  },
  setup(e) {
    return (n, t) => (E(), R("span", {
      class: W(
        P(ce)(
          "font-normal text-foreground",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          "rounded-sm focus-visible:ring-offset-background",
          n.theme.page
        )
      ),
      tabindex: "0"
    }, [
      B(n.$slots, "default")
    ], 2));
  }
}), _p = /* @__PURE__ */ N({
  __name: "BreadcrumbSeparator",
  props: {
    theme: { default: () => ({
      separator: ""
    }) }
  },
  setup(e) {
    return (n, t) => (E(), R("span", {
      class: W(P(ce)("size-3.5", n.theme.separator)),
      role: "presentation"
    }, [
      B(n.$slots, "default", {}, () => [
        t[0] || (t[0] = I("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          class: "size-3.5"
        }, [
          I("path", { d: "m9 18 6-6-6-6" })
        ], -1))
      ])
    ], 2));
  }
}), Ep = /* @__PURE__ */ N({
  __name: "BreadcrumbEllipsis",
  props: {
    theme: { default: () => ({
      ellipsis: ""
    }) }
  },
  setup(e) {
    return (n, t) => (E(), R("span", {
      class: W(
        P(ce)(
          "flex size-9 items-center justify-center",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          "rounded-sm focus-visible:ring-offset-background",
          n.theme.ellipsis
        )
      ),
      role: "presentation",
      tabindex: "0"
    }, [
      B(n.$slots, "default", {}, () => [
        t[0] || (t[0] = I("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          class: "size-4"
        }, [
          I("circle", {
            cx: "12",
            cy: "12",
            r: "1"
          }),
          I("circle", {
            cx: "19",
            cy: "12",
            r: "1"
          }),
          I("circle", {
            cx: "5",
            cy: "12",
            r: "1"
          })
        ], -1))
      ])
    ], 2));
  }
}), zd = { class: "space-y-4" }, jd = ["onMouseenter", "onMouseleave"], Gd = { class: "font-semibold" }, Hd = { class: "text-sm text-zinc-500" }, Op = /* @__PURE__ */ N({
  __name: "AnnouncementsDrawer",
  props: {
    classes: { default: () => [""] },
    tips: { default: () => [] }
  },
  setup(e) {
    function n(o) {
      document.querySelectorAll(o).forEach((r) => {
        r.classList.add("active");
      });
    }
    function t(o) {
      document.querySelectorAll(o).forEach((r) => {
        r.classList.remove("active");
      });
    }
    return (o, r) => (E(), R("div", {
      class: W(
        P(ce)(
          "flex h-full w-full max-w-sm flex-col overflow-hidden border-l border-zinc-300/80 p-5",
          ...o.classes
        )
      )
    }, [
      I("ul", zd, [
        (E(!0), R(be, null, He(o.tips, (a) => (E(), R("li", {
          key: a.title,
          class: "space-y-3 rounded-lg border border-zinc-300/80 p-3 hover:shadow-md",
          onMouseenter: (l) => n(a.target),
          onMouseleave: (l) => t(a.target)
        }, [
          I("div", null, [
            H(ds, { classes: ["py-1.5"] }, {
              default: V(() => [
                wt(ge(a.type), 1)
              ]),
              _: 2
            }, 1024)
          ]),
          I("div", null, [
            I("div", Gd, ge(a.title), 1),
            I("p", Hd, ge(a.description), 1)
          ])
        ], 40, jd))), 128))
      ])
    ], 2));
  }
}), Wd = { class: "flex flex-col space-y-4" }, Ud = { class: "space-y-2" }, qd = { class: "space-y-2" }, Kd = { class: "flex justify-end" }, Yd = /* @__PURE__ */ N({
  __name: "ColumnManagerGroupMetaForm",
  props: {
    defaultGroupColor: {},
    disabled: {},
    modelValue: {},
    groupId: {}
  },
  emits: ["update:modelValue", "update"],
  setup(e, { emit: n }) {
    const t = e, o = n;
    S(!1);
    const r = S({
      ...t.modelValue,
      id: t.groupId
    }), a = S();
    re(
      () => t.modelValue,
      (s) => {
        r.value = {
          ...s,
          id: t.groupId
        };
      },
      { deep: !0 }
    );
    const l = (s) => {
      s();
      const i = {
        ...r.value,
        id: t.groupId
      };
      o("update:modelValue", i), o("update", t.groupId);
    };
    return (s, i) => !s.disabled.includes("groups") && r.value ? (E(), fe(dd, {
      key: 0,
      ref_key: "popover",
      ref: a,
      theme: {
        popoverMenu: "leading-none",
        popoverMenuButton: "rounded-md size-6 flex items-center justify-center hover:bg-zinc-100"
      }
    }, {
      trigger: V(() => [
        I("span", {
          class: "block h-3 w-3 rounded-full",
          style: Jt(`background-color: ${r.value.color || s.defaultGroupColor};`)
        }, null, 4)
      ]),
      default: V(({ close: u }) => [
        I("div", Wd, [
          I("div", Ud, [
            i[2] || (i[2] = I("div", { class: "block text-sm font-medium text-foreground" }, " Group name ", -1)),
            H(Ma, {
              modelValue: r.value.name,
              "onUpdate:modelValue": i[0] || (i[0] = (d) => r.value.name = d),
              type: "text",
              placeholder: `${r.value.name}`,
              theme: {
                input: "py-1.5"
              }
            }, null, 8, ["modelValue", "placeholder"])
          ]),
          I("div", qd, [
            i[3] || (i[3] = I("div", { class: "block text-sm font-medium text-foreground" }, " Group color ", -1)),
            H(qu, {
              "model-value": r.value.color,
              "onUpdate:modelValue": i[1] || (i[1] = (d) => r.value.color = d)
            }, null, 8, ["model-value"])
          ]),
          I("div", Kd, [
            H(Ze, {
              onClick: (d) => l(u),
              size: "sm",
              variant: "outline"
            }, {
              default: V(() => i[4] || (i[4] = [
                wt(" Save ")
              ])),
              _: 2,
              __: [4]
            }, 1032, ["onClick"])
          ])
        ])
      ]),
      _: 1
    }, 512)) : le("", !0);
  }
}), Al = Symbol("ColumnManagerContext");
function Xd(e) {
  ke(Al, e);
}
function zo() {
  const e = me(Al);
  if (!e)
    throw new Error(
      "useColumnManagerContext must be used within a ColumnManager provider"
    );
  return e;
}
const Jd = { class: "flex min-w-px grow items-center space-x-2 text-base pl-1 pr-2" }, Qd = { class: "font-semibold grow" }, Zd = /* @__PURE__ */ N({
  __name: "ColumnManagerGroupHeader",
  props: {
    group: {},
    defaultGroupColor: { default: "#e7e5e4" }
  },
  emits: ["group-update", "add-column", "edit-group", "delete-group"],
  setup(e, { emit: n }) {
    const t = e, o = n, a = zo().disabled || [], l = S({ ...t.group });
    re(
      () => t.group,
      (i) => {
        l.value = { ...i };
      },
      { deep: !0 }
    );
    const s = (i) => {
      o("group-update", l.value);
    };
    return (i, u) => (E(), R("div", Jd, [
      B(i.$slots, "drag-handle"),
      H(Yd, {
        modelValue: l.value,
        "onUpdate:modelValue": u[0] || (u[0] = (d) => l.value = d),
        "default-group-color": i.defaultGroupColor,
        disabled: P(a),
        "group-id": i.group.id,
        onUpdate: s
      }, null, 8, ["modelValue", "default-group-color", "disabled", "group-id"]),
      I("span", Qd, ge(l.value.name), 1),
      H(P(Wr), null, {
        default: V(() => [
          H(P(Ur), { asChild: "" }, {
            default: V(() => [
              H(P(Ze), {
                variant: "outline",
                size: "sm",
                class: "size-6 text-muted-foreground p-0"
              }, {
                default: V(() => [
                  H(P(Yn), { class: "size-3.5" })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          H(P(qr), {
            class: "w-40",
            side: "bottom",
            align: "end"
          }, {
            default: V(() => [
              B(i.$slots, "dropdown-content", {
                group: i.group,
                groupData: l.value,
                emit: o
              }, () => [
                H(P(Vn), {
                  onSelect: u[1] || (u[1] = (d) => o("add-column"))
                }, {
                  default: V(() => u[4] || (u[4] = [
                    wt(" Add column ")
                  ])),
                  _: 1,
                  __: [4]
                }),
                H(P(Ju)),
                H(P(Vn), {
                  onSelect: u[2] || (u[2] = (d) => o("edit-group", l.value))
                }, {
                  default: V(() => u[5] || (u[5] = [
                    wt(" Edit group ")
                  ])),
                  _: 1,
                  __: [5]
                }),
                H(P(Vn), {
                  onSelect: u[3] || (u[3] = (d) => o("delete-group", l.value))
                }, {
                  default: V(() => u[6] || (u[6] = [
                    wt(" Delete group ")
                  ])),
                  _: 1,
                  __: [6]
                })
              ])
            ]),
            _: 3
          })
        ]),
        _: 3
      })
    ]));
  }
}), ec = ["data-sortable-item-id"], tc = { class: "flex-1 min-w-px flex text-sm" }, nc = { class: "ml-auto flex items-center space-x-0.5" }, oc = /* @__PURE__ */ N({
  __name: "ColumnManagerColumn",
  props: {
    column: {},
    index: {}
  },
  emits: ["remove", "edit", "click"],
  setup(e, { emit: n }) {
    const t = e, o = n, r = () => {
      o("remove", String(t.column.id));
    }, a = () => {
      o("edit", t.column);
    };
    return (l, s) => (E(), R("div", {
      class: "group flex w-full hover:bg-accent/40 p-1 rounded-md items-center gap-2 [&.selected]:bg-accent/50",
      "data-sortable-item-id": l.column.id,
      onClick: s[0] || (s[0] = (i) => l.$emit("click", i))
    }, [
      B(l.$slots, "drag-handle", {}, () => [
        H(Ze, {
          variant: "ghost",
          size: "xs",
          icon: "",
          class: "drag-handle shrink-0 size-6 text-muted-foreground/70 hover:text-foreground rounded-sm hover:bg-black/5"
        }, {
          default: V(() => [
            H(P(ks), { class: "size-3.5 shrink-0" })
          ]),
          _: 1
        })
      ]),
      B(l.$slots, "content", { column: l.column }, () => [
        I("div", tc, ge(l.column.name), 1)
      ]),
      I("div", nc, [
        B(l.$slots, "actions", {
          column: l.column,
          onRemove: r,
          onEdit: a
        }, () => [
          H(Ze, {
            onClick: dn(r, ["prevent", "stop"]),
            variant: "ghost",
            size: "xs",
            icon: "",
            class: "shrink-0 size-6 rounded-sm text-muted-foreground/70 hover:text-foreground hover:bg-black/5"
          }, {
            default: V(() => [
              H(P(Po), { class: "size-3.5 shrink-0" })
            ]),
            _: 1
          }),
          H(Ze, {
            onClick: dn(a, ["prevent", "stop"]),
            variant: "ghost",
            size: "xs",
            icon: "",
            class: "shrink-0 size-6 rounded-sm text-muted-foreground/70 hover:text-foreground hover:bg-black/5"
          }, {
            default: V(() => [
              H(P(Cs), { class: "size-3.5 shrink-0" })
            ]),
            _: 1
          })
        ])
      ])
    ], 8, ec));
  }
}), rc = {
  key: 0,
  class: "w-full relative"
}, ac = {
  key: 0,
  class: "absolute z-1 inset-0 p-3 text-center border border-dashed border-muted rounded-lg bg-muted/30 flex items-center justify-center"
}, lc = /* @__PURE__ */ N({
  __name: "ColumnManagerColumnList",
  props: {
    columns: {},
    groupId: {},
    draggingGroup: { type: Boolean }
  },
  emits: ["column-add", "column-remove", "column-reordered", "column-edit", "column-click", "column-drag-start", "column-drag-end", "column-drag-enter", "column-drag-leave"],
  setup(e, { emit: n }) {
    const t = e, o = n;
    zo();
    const r = (c) => {
      o("column-reordered", {
        groupId: t.groupId,
        newColumns: c
      });
    }, a = (c) => {
      o("column-reordered", {
        groupId: t.groupId,
        newColumns: c.newColumns || c
      });
    }, l = (c) => {
      if (c.fromGroup && c.fromGroup !== t.groupId) {
        const m = {
          fromGroup: c.fromGroup,
          fromIndex: c.fromIndex,
          item: c.item,
          toGroup: t.groupId
        };
        o("column-add", m);
      }
    }, s = (c) => {
      o("column-remove", c);
    }, i = (c) => {
      o("column-edit", c);
    }, u = () => {
      o("column-drag-start", {});
    }, d = () => {
      o("column-drag-end", {});
    };
    return (c, m) => c.draggingGroup ? le("", !0) : (E(), R("div", rc, [
      H(Il, {
        items: c.columns,
        "group-id": c.groupId,
        "shared-group": "shared-columns",
        disabled: !1,
        class: "relative z-2",
        "onUpdate:items": r,
        onItemMoved: a,
        onCrossGroupDrag: l,
        onDragStart: u,
        onDragEnd: d
      }, {
        item: V(({ item: f, index: p, isDragging: g, isDropTarget: b }) => [
          H(oc, {
            column: f,
            index: p,
            onRemove: s,
            onEdit: i
          }, {
            content: V(({ column: w }) => [
              B(c.$slots, "column-content", { column: w }, void 0, !0)
            ]),
            actions: V(({ column: w, onRemove: y, onEdit: v }) => [
              B(c.$slots, "column-actions", {
                column: w,
                onRemove: y,
                onEdit: v
              }, void 0, !0)
            ]),
            _: 2
          }, 1032, ["column", "index"])
        ]),
        _: 3
      }, 8, ["items", "group-id"]),
      c.columns.length === 0 ? (E(), R("div", ac, m[0] || (m[0] = [
        I("p", { class: "text-sm text-muted-foreground" }, " There are no columns here yet. Use the picker above to add the first column. ", -1)
      ]))) : le("", !0)
    ]));
  }
}), sc = /* @__PURE__ */ tn(lc, [["__scopeId", "data-v-75b3ad55"]]), ic = { class: "group flex items-center space-x-2 py-1 px-2" }, uc = /* @__PURE__ */ N({
  __name: "ColumnManagerColumnPicker",
  props: {
    groupId: {},
    availableColumns: {}
  },
  emits: ["column-add", "close"],
  setup(e, { emit: n }) {
    const t = e, o = n, a = zo().searcher || (() => Promise.resolve([])), l = S({}), s = S(""), i = S({
      autoPlacement: {
        allowedPlacements: ["top-start", "bottom-start"]
      },
      buffer: 20,
      size: {}
    }), u = (d) => {
      d && o("column-add", t.groupId, d);
    };
    return (d, c) => (E(), R("div", ic, [
      H(Rl, {
        class: "grow",
        "default-items": d.availableColumns,
        "display-property": () => "",
        "groups-config": l.value,
        "group-by": s.value,
        multiple: !1,
        nullable: !0,
        searcher: P(a),
        "middleware-options": i.value,
        placeholder: "Add a column to group",
        "onUpdate:modelValue": u
      }, ts({
        empty: V(() => [
          H(Pl, {
            icon: "fa-exclamation-circle",
            title: "No columns found"
          }, {
            default: V(() => c[1] || (c[1] = [
              I("p", null, " There are no columns to show at this time. Try a different search. ", -1)
            ])),
            _: 1,
            __: [1]
          })
        ]),
        static: V(() => [
          I("div", null, [
            B(d.$slots, "typeahead-static")
          ])
        ]),
        item: V(({ item: m, selected: f, active: p }) => [
          B(d.$slots, "option", rt(pt({ item: m, selected: f, active: p })))
        ]),
        _: 2
      }, [
        d.$slots["typeahead-group"] ? {
          name: "group",
          fn: V((m) => [
            B(d.$slots, "typeahead-group", rt(pt(m)))
          ]),
          key: "0"
        } : void 0,
        d.$slots["typeahead-searching"] ? {
          name: "searching",
          fn: V(() => [
            I("div", null, [
              B(d.$slots, "typeahead-searching")
            ])
          ]),
          key: "1"
        } : void 0
      ]), 1032, ["default-items", "groups-config", "group-by", "searcher", "middleware-options"]),
      H(P(Ze), {
        variant: "ghost",
        class: "text-muted-foreground p-0 w-5 hover:bg-accent/40",
        onClick: c[0] || (c[0] = (m) => o("close"))
      }, {
        default: V(() => [
          H(P(Po), { class: "size-4" })
        ]),
        _: 1
      })
    ]));
  }
}), dc = { class: "sortable-drag flex min-w-px grow items-center space-x-2 text-base" }, cc = /* @__PURE__ */ N({
  __name: "ColumnManagerGroup",
  props: {
    group: {},
    columns: {},
    availableColumns: {},
    draggingGroup: { type: Boolean },
    defaultGroupColor: { default: "#e7e5e4" }
  },
  emits: ["group-update", "column-add", "column-added", "column-removed", "column-reordered", "column-edit", "column-drag-start", "column-drag-end", "column-drag-enter", "column-drag-leave", "edit-group", "delete-group"],
  setup(e, { emit: n }) {
    const t = e, o = n, r = zo(), a = r.draggedOverGroupId, l = r.setDraggedOverGroupId, s = S(!1), i = r.isDraggingColumn, u = T(() => (i == null ? void 0 : i.value) && (a == null ? void 0 : a.value) === t.group.id), d = (A) => {
      A.preventDefault(), A.dataTransfer && (A.dataTransfer.dropEffect = "move"), i != null && i.value && l && l(t.group.id);
    }, c = (A) => {
      const _ = A.currentTarget, D = A.relatedTarget;
      _ && D && !_.contains(D) && l && l(null);
    }, m = (A) => {
      l && l(null);
    }, f = (A) => {
      o("group-update", A);
    }, p = (A, _) => {
      o("column-add", A, _), s.value = !1;
    }, g = (A) => {
      o("column-added", A);
    }, b = (A) => {
      o("column-removed", A);
    }, w = (A) => {
      o("column-reordered", A);
    }, y = (A) => {
      o("column-edit", A);
    }, v = (A) => {
      o("column-drag-start", A);
    }, x = (A) => {
      o("column-drag-end", A);
    }, h = (A, _) => {
      o("column-drag-enter", A, _);
    }, C = (A, _) => {
      o("column-drag-leave", A, _);
    }, k = (A) => {
      o("edit-group", A);
    }, O = (A) => {
      o("delete-group", A);
    };
    return (A, _) => (E(), R("div", {
      class: W(["mb-2 w-full space-y-2", {
        "ring-2 rounded-md ring-primary/20 bg-primary/5": u.value
      }]),
      onDragover: d,
      onDragleave: c,
      onDrop: m
    }, [
      I("div", dc, [
        B(A.$slots, "drag-handle"),
        H(Zd, {
          group: A.group,
          "default-group-color": A.defaultGroupColor,
          onGroupUpdate: f,
          onAddColumn: _[0] || (_[0] = (D) => s.value = !0),
          onEditGroup: k,
          onDeleteGroup: O
        }, {
          "dropdown-content": V(({ group: D, groupData: z, emit: j }) => [
            B(A.$slots, "dropdown-content", {
              group: D,
              groupData: z,
              emit: j
            })
          ]),
          _: 3
        }, 8, ["group", "default-group-color"])
      ]),
      !A.draggingGroup && s.value ? (E(), fe(uc, {
        key: 0,
        "group-id": A.group.id,
        "available-columns": A.availableColumns,
        onColumnAdd: p,
        onClose: _[1] || (_[1] = (D) => s.value = !1)
      }, {
        option: V(({ item: D, selected: z, active: j }) => [
          B(A.$slots, "option", rt(pt({ item: D, selected: z, active: j })))
        ]),
        _: 3
      }, 8, ["group-id", "available-columns"])) : le("", !0),
      H(sc, {
        columns: A.columns,
        "group-id": A.group.id,
        "dragging-group": A.draggingGroup,
        onColumnAdd: g,
        onColumnRemove: b,
        onColumnReorder: w,
        onColumnEdit: y,
        onColumnDragStart: v,
        onColumnDragEnd: x,
        onColumnDragEnter: h,
        onColumnDragLeave: C
      }, {
        "column-content": V(({ column: D }) => [
          B(A.$slots, "column-content", { column: D })
        ]),
        "column-actions": V(({ column: D, onRemove: z, onEdit: j }) => [
          B(A.$slots, "column-actions", {
            column: D,
            onRemove: z,
            onEdit: j
          })
        ]),
        _: 3
      }, 8, ["columns", "group-id", "dragging-group"])
    ], 34));
  }
}), fc = { class: "sticky bottom-0 z-2 flex items-center gap-2 p-3 bg-background/90 backdrop-blur-sm" }, pc = { class: "flex -space-x-px" }, mc = /* @__PURE__ */ N({
  __name: "ColumnManagerAddGroup",
  emits: ["group-add"],
  setup(e, { emit: n }) {
    const t = n, o = S(!1), r = S(""), a = () => {
      r.value.trim() && (t("group-add", {
        name: r.value.trim(),
        color: "#e7e5e4"
      }), r.value = "", o.value = !1);
    };
    return (l, s) => (E(), R("div", fc, [
      H(ft, {
        "enter-active-class": "transition duration-200 ease-out",
        "enter-from-class": "translate-y-1 opacity-0",
        "enter-to-class": "translate-y-0 opacity-100",
        "leave-active-class": "transition duration-150 ease-in",
        "leave-from-class": "translate-y-0 opacity-100",
        "leave-to-class": "translate-y-1 opacity-0"
      }, {
        default: V(() => [
          Yt(I("span", pc, [
            H(Ma, {
              id: "column-manager-new-group-name",
              name: "column-manager-new-group-name",
              placeholder: "New group name",
              modelValue: r.value,
              "onUpdate:modelValue": s[0] || (s[0] = (i) => r.value = i),
              onKeyup: Ia(a, ["enter"]),
              theme: {
                input: "w-full py-1.5"
              },
              type: "text"
            }, null, 8, ["modelValue"])
          ], 512), [
            [Xt, o.value]
          ])
        ]),
        _: 1
      }),
      H(Ze, {
        onClick: s[1] || (s[1] = (i) => o.value = !o.value),
        size: "sm",
        variant: "outline"
      }, {
        default: V(() => [
          wt(ge(o.value ? "Cancel" : "Add a group"), 1)
        ]),
        _: 1
      })
    ]));
  }
});
function vc(e) {
  return e.reduce((n, t) => {
    const o = t.group || "Default";
    return n[o] || (n[o] = []), n[o].push(t), n;
  }, {});
}
function gc(e) {
  return Object.values(e).flat();
}
function hc(e) {
  const {
    columns: n,
    groups: t,
    focusedColumn: o,
    onUpdate: r,
    onFocusedColumnChange: a
  } = e, l = S({}), s = S(null), i = o || s, u = () => `group_${Math.random().toString(36).substring(2, 9)}`;
  re(
    () => n.value,
    (C) => {
      l.value = C.length === 0 ? { Default: [] } : vc([...C]);
    },
    { immediate: !0 }
  ), re(
    () => t.value,
    (C) => {
      const k = C.map((O) => ({
        ...O,
        id: O.id || u()
      }));
      t.value = k;
    },
    { immediate: !0, deep: !0 }
  );
  const d = T(() => {
    const C = /* @__PURE__ */ new Set();
    return Object.values(l.value).forEach((k) => {
      k.forEach((O) => C.add(O.id));
    }), n.value.filter((k) => !C.has(k.id));
  }), c = T(() => t.value.map((C) => ({
    ...C,
    columns: l.value[C.id] || []
  }))), m = (C, k) => {
    const O = { ...k, group: C };
    l.value = {
      ...l.value,
      [C]: [
        ...l.value[C] || [],
        O
      ]
    }, h();
  }, f = (C, k) => {
    var _;
    const A = (l.value[C] || []).filter((D) => D.id !== k);
    l.value = {
      ...l.value,
      [C]: A
    }, ((_ = i.value) == null ? void 0 : _.id) === k && y(null), h();
  }, p = (C, k, O, A) => {
    const _ = l.value[C] || [], D = l.value[k] || [], z = _.findIndex((Z) => Z.id === O);
    if (z === -1)
      return;
    const [j] = _.splice(z, 1), K = { ...j, group: k }, Y = A ?? D.length;
    D.splice(Y, 0, K), l.value = {
      ...l.value,
      [C]: _,
      [k]: D
    }, h();
  }, g = (C) => {
    const k = {
      id: u(),
      name: C.name || "New Group",
      color: C.color || "#e7e5e4",
      ...C
    };
    return t.value = [...t.value, k], l.value[k.id] = [], h(), k;
  }, b = (C) => {
    const k = l.value[C] || [];
    if (k.length > 0) {
      const A = t.value.filter((_) => _.id !== C)[0];
      if (A)
        l.value[A.id] = [
          ...l.value[A.id] || [],
          ...k.map((_) => ({
            ..._,
            group: A.id
          }))
        ];
      else {
        const _ = {
          id: u(),
          name: "Default",
          color: "#e7e5e4"
        };
        t.value = [_], l.value[_.id] = k.map(
          (D) => ({
            ...D,
            group: _.id
          })
        );
      }
    }
    t.value = t.value.filter((O) => O.id !== C), delete l.value[C], h();
  }, w = (C, k) => {
    const O = t.value.findIndex((_) => _.id === C);
    if (O === -1) return;
    const A = { ...t.value[O], ...k };
    if (t.value[O] = A, k.name && k.name !== t.value[O].name) {
      const _ = l.value[C] || [];
      l.value[C] = _.map((D) => ({
        ...D,
        group: k.name
      }));
    }
    h();
  }, y = (C) => {
    i.value = C, a && a(C);
  }, v = (C, k) => {
    l.value[C] = k.map((O) => ({
      ...O,
      group: C
    })), h();
  }, x = (C) => {
    l.value[C] = [], h();
  }, h = () => {
    r && r(gc(l.value), t.value);
  };
  return {
    // State
    groupedColumns: xn(l),
    focusedColumn: xn(i),
    // Computed
    availableColumns: d,
    groupsWithColumns: c,
    // Actions
    addColumn: m,
    removeColumn: f,
    moveColumn: p,
    addGroup: g,
    removeGroup: b,
    updateGroup: w,
    setFocusedColumn: y,
    reorderColumns: v,
    clearGroup: x,
    // Utilities
    generateGroupId: u
  };
}
const bc = { class: "w-full overflow-hidden h-full rounded-lg flex flex-col md:flex-row" }, yc = {
  key: 1,
  class: "overflow-y-auto h-full w-full p-1 pt-4 md:w-[350px] md:shrink-0"
}, Tp = /* @__PURE__ */ N({
  __name: "ColumnManagerRefactored",
  props: {
    columns: {},
    groups: {},
    focusedColumn: { default: null },
    disabled: { default: () => [] },
    defaultGroupColor: { default: "#e7e5e4" },
    theme: { default: () => ({}) },
    searcher: { type: Function, default: () => Promise.resolve([]) },
    defaultItems: { default: () => [] },
    onColumnSelect: {}
  },
  emits: ["update:columns", "update:groups", "update:focusedColumn", "column-select", "edit-group", "delete-group", "group-add"],
  setup(e, { expose: n, emit: t }) {
    const o = e, r = t, a = Zr(o, "columns"), l = Zr(o, "groups"), s = S(
      o.focusedColumn || null
    );
    re(
      () => o.focusedColumn,
      (X) => {
        s.value = X || null;
      },
      { immediate: !0 }
    );
    const {
      groupedColumns: i,
      availableColumns: u,
      addColumn: d,
      removeColumn: c,
      moveColumn: m,
      addGroup: f,
      removeGroup: p,
      updateGroup: g,
      setFocusedColumn: b,
      reorderColumns: w,
      clearGroup: y
    } = hc({
      columns: a,
      groups: l,
      focusedColumn: s,
      onUpdate: (X, _e) => {
        r("update:columns", X), r("update:groups", _e);
      },
      onFocusedColumnChange: (X) => {
        s.value = X, r("update:focusedColumn", X);
      }
    }), v = S(!1), x = S(null), h = S(!1);
    Xd({
      theme: o.theme,
      disabled: o.disabled,
      onColumnSelect: o.onColumnSelect,
      searcher: o.searcher,
      defaultItems: o.defaultItems,
      isDraggingColumn: xn(v),
      draggedOverGroupId: xn(x),
      setDraggedOverGroupId: (X) => {
        x.value = X;
      }
    });
    const C = (X) => [...i.value[X] || []], k = (X) => {
      g(X.id, X);
    }, O = (X, _e) => {
      d(X, _e);
    }, A = (X) => {
      const _e = X.fromGroup, Ke = X.toGroup, $ = X.item;
      !_e || !Ke || _e === Ke || $ && m(_e, Ke, String($.id));
    }, _ = (X) => {
      if (typeof X == "string") {
        const _e = X;
        for (const [Ke, $] of Object.entries(i.value))
          if ($.find((L) => L.id === _e)) {
            c(Ke, _e);
            return;
          }
      } else if (X.columnId) {
        const _e = X.columnId, Ke = X.groupId;
        if (Ke)
          c(Ke, _e);
        else
          for (const [$, M] of Object.entries(i.value))
            if (M.find((F) => F.id === _e)) {
              c($, _e);
              return;
            }
      }
    }, D = (X) => {
      if (X.groupId && Array.isArray(X.newColumns)) {
        const _e = X.groupId, Ke = X.newColumns;
        w(_e, Ke);
      }
    }, z = (X) => {
      b(X), r("column-select", X);
    }, j = (X) => {
      const _e = f(X);
      r("group-add", _e);
    }, K = (X) => {
      r("update:groups", X);
    }, Y = () => {
    }, Z = () => {
    }, pe = () => {
      h.value = !0;
    }, ve = () => {
      h.value = !1;
    }, ne = () => {
      v.value = !0;
    }, Se = () => {
      v.value = !1, x.value = null;
    }, je = (X) => {
      C(X).length === 0 && (x.value = X);
    }, Me = (X) => {
      x.value === X && (x.value = null);
    };
    n({
      addColumn: d,
      removeColumn: c,
      moveColumn: m,
      addGroup: f,
      removeGroup: p,
      updateGroup: g,
      setFocusedColumn: b,
      clearGroup: y,
      focusedColumn: xn(s),
      groupedColumns: xn(i)
    }), re(
      () => i.value,
      (X) => {
      },
      { deep: !0 }
    ), re(
      () => l.value,
      (X) => {
      },
      { deep: !0 }
    );
    const Mt = (X) => {
      r("edit-group", X);
    }, dt = (X) => {
      r("delete-group", X);
    };
    return (X, _e) => (E(), R("div", bc, [
      X.groups.length === 0 ? (E(), fe(Pl, {
        key: 0,
        icon: "fa-exclamation-circle",
        title: "Nothing here, yet"
      }, {
        default: V(() => _e[0] || (_e[0] = [
          I("p", null, "There are no groups here yet. Add a new group to get started.", -1)
        ])),
        _: 1,
        __: [0]
      })) : (E(), R("div", yc, [
        H(Il, {
          items: X.groups,
          "group-id": "groups",
          "shared-group": "shared-groups",
          disabled: !1,
          "onUpdate:items": K,
          onItemMoved: Y,
          onCrossGroupDrag: Z,
          onDragStart: pe,
          onDragEnd: ve
        }, {
          item: V(({ item: Ke, index: $, isDragging: M, isDropTarget: L }) => [
            H(cc, {
              group: Ke,
              columns: C(Ke.id),
              "available-columns": P(u),
              "dragging-group": h.value,
              "default-group-color": X.defaultGroupColor,
              onGroupUpdate: k,
              onColumnAdd: O,
              onColumnAdded: A,
              onColumnRemoved: _,
              onColumnReordered: D,
              onColumnEdit: z,
              onColumnDragStart: ne,
              onColumnDragEnd: Se,
              onColumnDragEnter: je,
              onColumnDragLeave: Me,
              onEditGroup: Mt,
              onDeleteGroup: dt
            }, {
              "drag-handle": V(() => [
                B(X.$slots, "drag-handle")
              ]),
              option: V(({ item: F, selected: q, active: Q }) => [
                B(X.$slots, "option", rt(pt({ item: F, selected: q, active: Q })))
              ]),
              "column-content": V(({ column: F }) => [
                B(X.$slots, "column-content", { column: F })
              ]),
              "column-actions": V(({ column: F, onRemove: q, onEdit: Q }) => [
                B(X.$slots, "column-actions", {
                  column: F,
                  onRemove: q,
                  onEdit: Q
                })
              ]),
              "dropdown-content": V(({ group: F, groupData: q, emit: Q }) => [
                B(X.$slots, "dropdown-content", {
                  group: F,
                  groupData: q,
                  emit: Q
                })
              ]),
              _: 2
            }, 1032, ["group", "columns", "available-columns", "dragging-group", "default-group-color"])
          ]),
          _: 3
        }, 8, ["items"]),
        X.disabled.includes("groups") ? le("", !0) : (E(), fe(mc, {
          key: 0,
          onGroupAdd: j
        }))
      ])),
      B(X.$slots, "default")
    ]));
  }
});
function wc(e, n) {
  return E(), R("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    I("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
    })
  ]);
}
function xc(e, n) {
  return E(), R("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    I("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m7.49 12-3.75 3.75m0 0 3.75 3.75m-3.75-3.75h16.5V4.499"
    })
  ]);
}
function ha(e, n) {
  return E(), R("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    I("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
    })
  ]);
}
const Cc = { class: "ml-2 grow min-w-px text-left" }, kc = { class: "ml-6 rounded border px-2 py-0.5 text-xs bg-card hidden sm:inline-block" }, Sc = { class: "fixed inset-0 bg-background/50 backdrop-blur-sm" }, _c = { class: "fixed inset-0 overflow-y-auto" }, Ec = { class: "flex min-h-full items-start justify-center p-4 pt-16 sm:items-center sm:pt-4" }, Oc = { class: "w-[calc(100vw-2rem)] sm:w-[400px] transform overflow-hidden rounded-2xl bg-card p-0 shadow-2xl border transition-all max-h-[calc(100vh-8rem)] sm:max-h-[calc(100vh-4rem)] flex flex-col" }, Tc = { class: "text-xs font-medium text-muted-foreground my-2 px-3" }, Dc = { class: "space-y-0.5" }, $c = ["href"], Pc = { class: "text-muted-foreground group-hover:text-primary transition" }, Ic = { class: "flex-1 min-w-0" }, Rc = { class: "text-sm text-foreground truncate" }, Ac = {
  key: 1,
  class: "py-4 text-center text-sm text-muted-foreground flex-1 flex items-center justify-center"
}, Mc = { class: "border-t px-4 py-3 flex items-center gap-2 bg-card rounded-b-2xl flex-shrink-0" }, Lc = { class: "rounded border text-muted-foreground size-5 flex items-center justify-center text-xs bg-card hidden sm:flex" }, Fc = { class: "text-xs text-muted-foreground" }, Dp = /* @__PURE__ */ N({
  __name: "CommandPalette",
  props: {
    searchStrategy: {},
    placeholder: { default: "Search..." },
    inputPlaceholder: { default: "Search..." },
    resultsLabel: { default: "Results" },
    noResultsText: { default: "No results found" },
    footerText: { default: "Go to Page" },
    keyboardShortcut: { default: "⌘K" },
    triggerKey: { default: "k" },
    triggerModifier: { default: "metaKey" },
    defaultResults: { default: () => [] },
    defaultResultsLabel: { default: "Quick Actions" }
  },
  setup(e) {
    const n = e, t = S(!1), o = S(""), r = S([]), a = (u) => {
      (n.triggerModifier === "metaKey" ? u.metaKey : u.ctrlKey) && u.key === n.triggerKey && (u.preventDefault(), t.value = !0), u.key === "Escape" && (t.value = !1);
    }, l = async (u) => {
      const d = u.target;
      if (o.value = d.value, !o.value) {
        r.value = n.defaultResults;
        return;
      }
      try {
        const c = await n.searchStrategy.search(o.value);
        r.value = c;
      } catch (c) {
        console.error("Search error:", c), r.value = [];
      }
    }, s = (u) => {
      console.log("onSelect", u), t.value = !1, o.value = "", r.value = n.defaultResults;
    }, i = () => {
      t.value = !0;
    };
    return se(() => {
      window.addEventListener("keydown", a), r.value = n.defaultResults;
    }), ye(() => {
      window.removeEventListener("keydown", a);
    }), (u, d) => (E(), fe(P(Fr), { "onUpdate:modelValue": s }, {
      default: V(() => [
        H(P(Br), {
          as: "span",
          onClick: i
        }, {
          default: V(() => [
            H(Ze, {
              variant: "outline",
              class: "w-full pr-2 pl-3"
            }, {
              default: V(() => [
                H(P(ha), { class: "size-4 shrink-0" }),
                I("span", Cc, ge(u.placeholder), 1),
                I("kbd", kc, ge(u.keyboardShortcut), 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        H(ft, {
          "enter-active-class": "ease-out duration-300",
          "enter-from-class": "opacity-0",
          "enter-to-class": "opacity-100",
          "leave-active-class": "ease-in duration-200",
          "leave-from-class": "opacity-100",
          "leave-to-class": "opacity-0"
        }, {
          default: V(() => [
            Yt(I("div", {
              class: "fixed inset-0 z-50",
              onClick: d[2] || (d[2] = (c) => t.value = !1)
            }, [
              H(ft, {
                "enter-active-class": "ease-out duration-300",
                "enter-from-class": "opacity-0",
                "enter-to-class": "opacity-100",
                "leave-active-class": "ease-in duration-200",
                "leave-from-class": "opacity-100",
                "leave-to-class": "opacity-0"
              }, {
                default: V(() => [
                  Yt(I("div", Sc, null, 512), [
                    [Xt, t.value]
                  ])
                ]),
                _: 1
              }),
              I("div", _c, [
                I("div", Ec, [
                  H(ft, {
                    "enter-active-class": "ease-out duration-300",
                    "enter-from-class": "opacity-0 scale-95",
                    "enter-to-class": "opacity-100 scale-100",
                    "leave-active-class": "ease-in duration-200",
                    "leave-from-class": "opacity-100 scale-100",
                    "leave-to-class": "opacity-0 scale-95"
                  }, {
                    default: V(() => [
                      Yt(I("div", Oc, [
                        I("div", {
                          class: "relative border-b px-2 pt-2 pb-2 flex-shrink-0",
                          onClick: d[1] || (d[1] = dn(() => {
                          }, ["stop"]))
                        }, [
                          H(P(ha), { class: "pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" }),
                          H(P(Vr), {
                            modelValue: o.value,
                            "onUpdate:modelValue": d[0] || (d[0] = (c) => o.value = c),
                            placeholder: u.inputPlaceholder,
                            autofocus: "",
                            type: "text",
                            onChange: l,
                            class: "flex w-full rounded-md border border-border bg-background pr-3 pl-9 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground/70 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40 transition-[box-shadow,color] disabled:cursor-not-allowed disabled:opacity-50"
                          }, null, 8, ["modelValue", "placeholder"])
                        ]),
                        r.value.length > 0 ? (E(), fe(P(Nr), {
                          key: 0,
                          static: "",
                          class: "px-2 pt-2 pb-4 flex-1 overflow-y-auto"
                        }, {
                          default: V(() => [
                            I("div", Tc, ge(o.value ? u.resultsLabel : u.defaultResultsLabel), 1),
                            I("div", Dc, [
                              (E(!0), R(be, null, He(r.value, (c) => (E(), fe(P(qn), {
                                key: c.id,
                                value: c
                              }, {
                                default: V(({ active: m, selected: f }) => [
                                  I("a", {
                                    href: c.url,
                                    class: W(["flex items-center gap-3 px-3 py-2 sm:py-1.5 hover:bg-accent/80 transition group rounded-md touch-manipulation", {
                                      "bg-accent": f || m
                                    }])
                                  }, [
                                    I("span", Pc, [
                                      H(P(wc), { class: "size-4 shrink-0" })
                                    ]),
                                    I("div", Ic, [
                                      I("div", Rc, ge(c.title), 1)
                                    ])
                                  ], 10, $c)
                                ]),
                                _: 2
                              }, 1032, ["value"]))), 128))
                            ])
                          ]),
                          _: 1
                        })) : o.value ? (E(), R("div", Ac, ge(u.noResultsText), 1)) : le("", !0),
                        I("div", Mc, [
                          I("kbd", Lc, [
                            H(P(xc), { class: "size-3" })
                          ]),
                          I("span", Fc, ge(u.footerText), 1)
                        ])
                      ], 512), [
                        [Xt, t.value]
                      ])
                    ]),
                    _: 1
                  })
                ])
              ])
            ], 512), [
              [Xt, t.value]
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), Bc = { class: "z-51 fixed inset-0 overflow-y-auto" }, Vc = { class: "flex min-h-full items-center justify-center p-4 text-center" }, Nc = { class: "space-y-4" }, zc = { class: "mt-2 grow" }, jc = { class: "text-sm text-[var(--muted-foreground)]" }, Gc = {
  key: 0,
  class: "flex items-center justify-end space-x-2 pt-4"
}, Hc = {
  key: 1,
  class: "flex items-center justify-center py-4"
}, $p = /* @__PURE__ */ N({
  __name: "ConfirmationDialog",
  props: {
    modelValue: { type: Boolean },
    title: {},
    description: {},
    confirmButtonText: { default: "Confirm" },
    cancelButtonText: { default: "Cancel" },
    processing: { type: Boolean, default: !1 },
    onConfirm: { type: Function, default: () => Promise.resolve() },
    onCancel: { type: Function, default: () => Promise.resolve() }
  },
  emits: ["update:modelValue"],
  setup(e, { expose: n, emit: t }) {
    const o = e, r = t;
    function a() {
      o.modelValue ? (document.body.style.overflow = "hidden", document.body.style.paddingRight = "var(--removed-body-scroll-bar-size)") : (document.body.style.overflow = "", document.body.style.paddingRight = "");
    }
    re(() => o.modelValue, a), ye(() => {
      document.body.style.overflow = "", document.body.style.paddingRight = "";
    });
    async function l() {
      await o.onConfirm(), i();
    }
    async function s() {
      await o.onCancel(), i();
    }
    function i() {
      r("update:modelValue", !1);
    }
    function u() {
      r("update:modelValue", !0);
    }
    return n({
      closeModal: i,
      openModal: u
    }), (d, c) => (E(), fe(P($l), {
      appear: "",
      show: d.modelValue,
      as: "template"
    }, {
      default: V(() => [
        H(P(gu), {
          as: "div",
          onClose: i,
          class: "relative"
        }, {
          default: V(() => [
            H(P(gr), {
              as: "template",
              enter: "duration-300 ease-out",
              "enter-from": "opacity-0",
              "enter-to": "opacity-100",
              leave: "duration-200 ease-in",
              "leave-from": "opacity-100",
              "leave-to": "opacity-0"
            }, {
              default: V(() => c[0] || (c[0] = [
                I("div", { class: "z-50 fixed inset-0 bg-primary/10" }, null, -1)
              ])),
              _: 1,
              __: [0]
            }),
            I("div", Bc, [
              I("div", Vc, [
                H(P(gr), {
                  as: "template",
                  enter: "duration-300 ease-out",
                  "enter-from": "opacity-0 scale-95",
                  "enter-to": "opacity-100 scale-100",
                  leave: "duration-200 ease-in",
                  "leave-from": "opacity-100 scale-100",
                  "leave-to": "opacity-0 scale-95"
                }, {
                  default: V(() => [
                    H(P(hu), { class: "w-full max-w-md transform overflow-hidden rounded-lg bg-[var(--card)] ring-1 ring-[var(--border)] p-6 text-left align-middle shadow-xl transition-all duration-300" }, {
                      default: V(() => [
                        I("div", Nc, [
                          H(P(bu), {
                            as: "h3",
                            class: "text-lg font-medium leading-6 text-[var(--card-foreground)]"
                          }, {
                            default: V(() => [
                              wt(ge(d.title), 1)
                            ]),
                            _: 1
                          }),
                          I("div", zc, [
                            I("p", jc, ge(d.description), 1)
                          ]),
                          d.processing ? (E(), R("div", Hc, [
                            B(d.$slots, "processing")
                          ])) : (E(), R("div", Gc, [
                            H(Ze, {
                              size: "sm",
                              variant: "ghost",
                              onClick: s
                            }, {
                              default: V(() => [
                                wt(ge(d.cancelButtonText), 1)
                              ]),
                              _: 1
                            }),
                            H(Ze, {
                              size: "sm",
                              variant: "default",
                              onClick: l
                            }, {
                              default: V(() => [
                                wt(ge(d.confirmButtonText), 1)
                              ]),
                              _: 1
                            })
                          ]))
                        ])
                      ]),
                      _: 3
                    })
                  ]),
                  _: 3
                })
              ])
            ])
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["show"]));
  }
}), Wc = { class: "flex items-center gap-2" }, Uc = /* @__PURE__ */ N({
  __name: "QueryCondition",
  props: {
    modelValue: {},
    availableFields: {},
    showRemove: { type: Boolean },
    showLogicalOperator: { type: Boolean }
  },
  emits: ["update:modelValue", "remove"],
  setup(e, { emit: n }) {
    const t = e, o = n, r = (f) => f == null ? void 0 : f.label, a = (f) => f == null ? void 0 : f.label, l = T({
      get: () => t.modelValue.field,
      set: (f) => {
        if (f && typeof f == "object" && "id" in f) {
          const p = t.availableFields.find(
            (g) => g.id === f.id
          );
          o("update:modelValue", {
            ...t.modelValue,
            field: p || null
          });
        } else
          o("update:modelValue", { ...t.modelValue, field: f });
      }
    }), s = T({
      get: () => c.find((f) => f.id === t.modelValue.operator),
      set: (f) => {
        const p = f && typeof f == "object" && "id" in f ? f.id : f;
        o("update:modelValue", {
          ...t.modelValue,
          operator: p
        });
      }
    }), i = T({
      get: () => m.find((f) => f.id === t.modelValue.comparison),
      set: (f) => {
        const p = f && typeof f == "object" && "id" in f ? f.id : f;
        o("update:modelValue", {
          ...t.modelValue,
          comparison: p
        });
      }
    }), u = T({
      get: () => t.modelValue.value,
      set: (f) => o("update:modelValue", { ...t.modelValue, value: f })
    });
    T({
      get: () => t.modelValue.logicalOrOperator,
      set: (f) => o("update:modelValue", {
        ...t.modelValue,
        logicalOrOperator: f
      })
    });
    const d = T(() => [...u.value || []]);
    T(() => {
      if (!l.value)
        return [
          { id: "value1", label: "Value 1" },
          { id: "value2", label: "Value 2" },
          { id: "value3", label: "Value 3" }
        ];
      switch (l.value.type) {
        case "boolean":
          return [
            { id: "true", label: "Yes" },
            { id: "false", label: "No" }
          ];
        case "number":
          return [
            { id: "1", label: "1" },
            { id: "2", label: "2" },
            { id: "3", label: "3" }
          ];
        default:
          return [
            { id: "value1", label: "Value 1" },
            { id: "value2", label: "Value 2" },
            { id: "value3", label: "Value 3" }
          ];
      }
    });
    const c = [
      { id: "does", label: "does" },
      { id: "doesnt", label: "doesn't" }
    ], m = [
      { id: "equal", label: "equal" },
      { id: "contain", label: "contain" }
    ];
    return (f, p) => {
      var g;
      return E(), R("div", Wc, [
        H(Rl, {
          modelValue: l.value,
          "onUpdate:modelValue": p[0] || (p[0] = (b) => l.value = b),
          "default-items": f.availableFields,
          displayProperty: r,
          placeholder: "Select a field...",
          class: "self-start w-64 shrink-0",
          nullable: !0,
          theme: {
            baseDropdownInputText: ""
          }
        }, null, 8, ["modelValue", "default-items"]),
        H(Jo, {
          modelValue: s.value,
          "onUpdate:modelValue": p[1] || (p[1] = (b) => s.value = b),
          items: c,
          "display-property": (b) => b.label,
          placeholder: "Select operator...",
          class: "self-start w-32 shrink-0"
        }, null, 8, ["modelValue", "display-property"]),
        H(Jo, {
          modelValue: i.value,
          "onUpdate:modelValue": p[2] || (p[2] = (b) => i.value = b),
          items: m,
          "display-property": (b) => b.label,
          placeholder: "Select comparison...",
          class: "self-start w-32 shrink-0"
        }, null, 8, ["modelValue", "display-property"]),
        H(Jo, {
          modelValue: u.value,
          "onUpdate:modelValue": p[3] || (p[3] = (b) => u.value = b),
          items: (g = l.value) == null ? void 0 : g.defaultValuesGetter(),
          "display-property": a,
          "disabled-items": d.value,
          placeholder: "Select values...",
          class: "self-start grow min-w-64",
          multiple: !0,
          nullable: !0
        }, null, 8, ["modelValue", "items", "disabled-items"]),
        f.showRemove ? (E(), fe(Ze, {
          key: 0,
          onClick: p[4] || (p[4] = (b) => f.$emit("remove")),
          class: "text-destructive hover:bg-destructive/80 hover:text-white rounded shrink-0",
          variant: "ghost",
          size: "xs"
        }, {
          default: V(() => [
            H(P(Po), { class: "size-4" })
          ]),
          _: 1
        })) : le("", !0)
      ]);
    };
  }
}), We = [];
for (let e = 0; e < 256; ++e)
  We.push((e + 256).toString(16).slice(1));
function qc(e, n = 0) {
  return (We[e[n + 0]] + We[e[n + 1]] + We[e[n + 2]] + We[e[n + 3]] + "-" + We[e[n + 4]] + We[e[n + 5]] + "-" + We[e[n + 6]] + We[e[n + 7]] + "-" + We[e[n + 8]] + We[e[n + 9]] + "-" + We[e[n + 10]] + We[e[n + 11]] + We[e[n + 12]] + We[e[n + 13]] + We[e[n + 14]] + We[e[n + 15]]).toLowerCase();
}
let Qo;
const Kc = new Uint8Array(16);
function Yc() {
  if (!Qo) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    Qo = crypto.getRandomValues.bind(crypto);
  }
  return Qo(Kc);
}
const Xc = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), ba = { randomUUID: Xc };
function ko(e, n, t) {
  var r;
  if (ba.randomUUID && !e)
    return ba.randomUUID();
  e = e || {};
  const o = e.random ?? ((r = e.rng) == null ? void 0 : r.call(e)) ?? Yc();
  if (o.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return o[6] = o[6] & 15 | 64, o[8] = o[8] & 63 | 128, qc(o);
}
const Jc = /* @__PURE__ */ N({
  __name: "QueryBuilderLogicSwitch",
  props: {
    modelValue: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const t = e, o = n, r = T({
      get: () => t.modelValue,
      set: (a) => o("update:modelValue", a)
    });
    return (a, l) => (E(), fe(P(Su), {
      modelValue: r.value,
      "onUpdate:modelValue": l[0] || (l[0] = (s) => r.value = s),
      class: W([
        "relative inline-flex h-6 w-16 items-center rounded-full transition-colors focus:outline-none border focus:ring-2 focus:ring-ring focus:ring-offset-2",
        (r.value, "bg-muted")
      ])
    }, {
      default: V(() => [
        l[1] || (l[1] = I("span", { class: "sr-only" }, "Use AND/OR", -1)),
        I("span", {
          class: W([
            "inline-block absolute h-4 transform rounded-full bg-primary shadow-xs transition-all duration-300 ease-in-out",
            r.value ? "left-9 w-5.5" : "left-1 w-7.5"
          ])
        }, null, 2),
        I("span", {
          class: W(["absolute left-2 text-[10px] font-medium", [r.value ? "text-primary" : "text-muted"]])
        }, "AND", 2),
        I("span", {
          class: W(["absolute right-2 text-[10px] font-medium", [r.value ? "text-muted" : "text-primary"]])
        }, "OR", 2)
      ]),
      _: 1,
      __: [1]
    }, 8, ["modelValue", "class"]));
  }
}), Qc = { class: "relative group-container border rounded-lg p-4 mb-4" }, Zc = { class: "flex items-center gap-2 mb-2" }, ef = { key: 0 }, tf = { class: "space-y-2" }, nf = {
  key: 0,
  class: "pl-6 mt-4 border-l"
}, of = { class: "flex gap-2 mt-4" }, rf = /* @__PURE__ */ N({
  __name: "QueryGroup",
  props: {
    modelValue: {},
    availableFields: {},
    isRoot: { type: Boolean }
  },
  emits: ["update:modelValue", "remove"],
  setup(e, { emit: n }) {
    const t = e, o = n, r = T({
      get: () => t.modelValue.conditions,
      set: (c) => o("update:modelValue", { ...t.modelValue, conditions: c })
    }), a = T({
      get: () => t.modelValue.logicalOrOperator,
      set: (c) => o("update:modelValue", {
        ...t.modelValue,
        logicalOrOperator: c
      })
    });
    function l() {
      return {
        id: ko(),
        field: null,
        operator: "does",
        comparison: "equal",
        value: [],
        logicalOperator: "AND",
        logicalOrOperator: !1
      };
    }
    function s() {
      r.value.push(l());
    }
    function i(c) {
      r.value.length > 1 && r.value.splice(c, 1);
    }
    function u() {
      const c = {
        id: ko(),
        conditions: [l()],
        nestedGroups: [],
        logicalOrOperator: !1
      };
      t.modelValue.nestedGroups ? o("update:modelValue", {
        ...t.modelValue,
        nestedGroups: [...t.modelValue.nestedGroups, c]
      }) : o("update:modelValue", {
        ...t.modelValue,
        nestedGroups: [c]
      });
    }
    function d(c) {
      if (!t.modelValue.nestedGroups) return;
      const m = t.modelValue.nestedGroups.filter(
        (f, p) => p !== c
      );
      o("update:modelValue", { ...t.modelValue, nestedGroups: m });
    }
    return (c, m) => {
      var p;
      const f = ns("QueryGroup", !0);
      return E(), R("div", Qc, [
        I("div", Zc, [
          H(Jc, {
            modelValue: a.value,
            "onUpdate:modelValue": m[0] || (m[0] = (g) => a.value = g)
          }, null, 8, ["modelValue"]),
          c.isRoot ? le("", !0) : (E(), R("span", ef, [
            H(Ze, {
              variant: "ghost",
              size: "sm",
              onClick: m[1] || (m[1] = (g) => c.$emit("remove")),
              class: "text-destructive hover:text-destructive/80"
            }, {
              default: V(() => [
                H(P(_s), { class: "size-4" })
              ]),
              _: 1
            })
          ]))
        ]),
        I("div", tf, [
          (E(!0), R(be, null, He(r.value, (g, b) => (E(), fe(Uc, {
            key: g.id,
            modelValue: r.value[b],
            "onUpdate:modelValue": (w) => r.value[b] = w,
            "available-fields": c.availableFields,
            "show-remove": r.value.length > 1,
            onRemove: (w) => i(b)
          }, null, 8, ["modelValue", "onUpdate:modelValue", "available-fields", "show-remove", "onRemove"]))), 128))
        ]),
        (p = c.modelValue.nestedGroups) != null && p.length ? (E(), R("div", nf, [
          (E(!0), R(be, null, He(c.modelValue.nestedGroups, (g, b) => (E(), fe(f, {
            key: g.id,
            modelValue: c.modelValue.nestedGroups[b],
            "onUpdate:modelValue": (w) => c.modelValue.nestedGroups[b] = w,
            "available-fields": c.availableFields,
            "is-root": !1,
            onRemove: (w) => d(b)
          }, null, 8, ["modelValue", "onUpdate:modelValue", "available-fields", "onRemove"]))), 128))
        ])) : le("", !0),
        I("div", of, [
          H(Ze, {
            variant: "outline",
            size: "sm",
            onClick: s
          }, {
            default: V(() => m[2] || (m[2] = [
              wt("Add Condition")
            ])),
            _: 1,
            __: [2]
          }),
          H(Ze, {
            variant: "outline",
            size: "sm",
            onClick: u
          }, {
            default: V(() => m[3] || (m[3] = [
              wt("Add Group")
            ])),
            _: 1,
            __: [3]
          })
        ])
      ]);
    };
  }
}), af = { class: "w-full" }, Pp = /* @__PURE__ */ N({
  __name: "FluentQueryBuilder",
  props: {
    modelValue: {},
    availableFields: {}
  },
  emits: ["update:modelValue"],
  setup(e, { expose: n, emit: t }) {
    const o = e, r = t, a = S(o.modelValue || l());
    re(
      a,
      (u) => {
        r("update:modelValue", [u]);
      },
      { deep: !0 }
    );
    function l() {
      return {
        id: ko(),
        conditions: [s()],
        nestedGroups: [],
        logicalOrOperator: !1
      };
    }
    function s() {
      return {
        id: ko(),
        field: null,
        operator: "does",
        comparison: "equal",
        value: [],
        logicalOperator: "AND",
        logicalOrOperator: !1
      };
    }
    function i(u) {
      a.value = u;
    }
    return n({
      rootGroup: a
    }), (u, d) => (E(), R("div", af, [
      H(rf, {
        modelValue: a.value,
        "onUpdate:modelValue": [
          d[0] || (d[0] = (c) => a.value = c),
          i
        ],
        "available-fields": o.availableFields,
        "is-root": !0
      }, null, 8, ["modelValue", "available-fields"])
    ]));
  }
});
/**!
 * Sortable 1.15.6
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function ya(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    n && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function It(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? ya(Object(t), !0).forEach(function(o) {
      lf(e, o, t[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ya(Object(t)).forEach(function(o) {
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(t, o));
    });
  }
  return e;
}
function fo(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? fo = function(n) {
    return typeof n;
  } : fo = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, fo(e);
}
function lf(e, n, t) {
  return n in e ? Object.defineProperty(e, n, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[n] = t, e;
}
function zt() {
  return zt = Object.assign || function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = arguments[n];
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, zt.apply(this, arguments);
}
function sf(e, n) {
  if (e == null) return {};
  var t = {}, o = Object.keys(e), r, a;
  for (a = 0; a < o.length; a++)
    r = o[a], !(n.indexOf(r) >= 0) && (t[r] = e[r]);
  return t;
}
function uf(e, n) {
  if (e == null) return {};
  var t = sf(e, n), o, r;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      o = a[r], !(n.indexOf(o) >= 0) && Object.prototype.propertyIsEnumerable.call(e, o) && (t[o] = e[o]);
  }
  return t;
}
var df = "1.15.6";
function Bt(e) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(e);
}
var jt = Bt(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), Zn = Bt(/Edge/i), wa = Bt(/firefox/i), Nn = Bt(/safari/i) && !Bt(/chrome/i) && !Bt(/android/i), Kr = Bt(/iP(ad|od|hone)/i), Ml = Bt(/chrome/i) && Bt(/android/i), Ll = {
  capture: !1,
  passive: !1
};
function de(e, n, t) {
  e.addEventListener(n, t, !jt && Ll);
}
function ue(e, n, t) {
  e.removeEventListener(n, t, !jt && Ll);
}
function So(e, n) {
  if (n) {
    if (n[0] === ">" && (n = n.substring(1)), e)
      try {
        if (e.matches)
          return e.matches(n);
        if (e.msMatchesSelector)
          return e.msMatchesSelector(n);
        if (e.webkitMatchesSelector)
          return e.webkitMatchesSelector(n);
      } catch {
        return !1;
      }
    return !1;
  }
}
function Fl(e) {
  return e.host && e !== document && e.host.nodeType ? e.host : e.parentNode;
}
function bt(e, n, t, o) {
  if (e) {
    t = t || document;
    do {
      if (n != null && (n[0] === ">" ? e.parentNode === t && So(e, n) : So(e, n)) || o && e === t)
        return e;
      if (e === t) break;
    } while (e = Fl(e));
  }
  return null;
}
var xa = /\s+/g;
function at(e, n, t) {
  if (e && n)
    if (e.classList)
      e.classList[t ? "add" : "remove"](n);
    else {
      var o = (" " + e.className + " ").replace(xa, " ").replace(" " + n + " ", " ");
      e.className = (o + (t ? " " + n : "")).replace(xa, " ");
    }
}
function ee(e, n, t) {
  var o = e && e.style;
  if (o) {
    if (t === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? t = document.defaultView.getComputedStyle(e, "") : e.currentStyle && (t = e.currentStyle), n === void 0 ? t : t[n];
    !(n in o) && n.indexOf("webkit") === -1 && (n = "-webkit-" + n), o[n] = t + (typeof t == "string" ? "" : "px");
  }
}
function Sn(e, n) {
  var t = "";
  if (typeof e == "string")
    t = e;
  else
    do {
      var o = ee(e, "transform");
      o && o !== "none" && (t = o + " " + t);
    } while (!n && (e = e.parentNode));
  var r = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return r && new r(t);
}
function Bl(e, n, t) {
  if (e) {
    var o = e.getElementsByTagName(n), r = 0, a = o.length;
    if (t)
      for (; r < a; r++)
        t(o[r], r);
    return o;
  }
  return [];
}
function Dt() {
  var e = document.scrollingElement;
  return e || document.documentElement;
}
function Fe(e, n, t, o, r) {
  if (!(!e.getBoundingClientRect && e !== window)) {
    var a, l, s, i, u, d, c;
    if (e !== window && e.parentNode && e !== Dt() ? (a = e.getBoundingClientRect(), l = a.top, s = a.left, i = a.bottom, u = a.right, d = a.height, c = a.width) : (l = 0, s = 0, i = window.innerHeight, u = window.innerWidth, d = window.innerHeight, c = window.innerWidth), (n || t) && e !== window && (r = r || e.parentNode, !jt))
      do
        if (r && r.getBoundingClientRect && (ee(r, "transform") !== "none" || t && ee(r, "position") !== "static")) {
          var m = r.getBoundingClientRect();
          l -= m.top + parseInt(ee(r, "border-top-width")), s -= m.left + parseInt(ee(r, "border-left-width")), i = l + a.height, u = s + a.width;
          break;
        }
      while (r = r.parentNode);
    if (o && e !== window) {
      var f = Sn(r || e), p = f && f.a, g = f && f.d;
      f && (l /= g, s /= p, c /= p, d /= g, i = l + d, u = s + c);
    }
    return {
      top: l,
      left: s,
      bottom: i,
      right: u,
      width: c,
      height: d
    };
  }
}
function Ca(e, n, t) {
  for (var o = Kt(e, !0), r = Fe(e)[n]; o; ) {
    var a = Fe(o)[t], l = void 0;
    if (l = r >= a, !l) return o;
    if (o === Dt()) break;
    o = Kt(o, !1);
  }
  return !1;
}
function En(e, n, t, o) {
  for (var r = 0, a = 0, l = e.children; a < l.length; ) {
    if (l[a].style.display !== "none" && l[a] !== te.ghost && (o || l[a] !== te.dragged) && bt(l[a], t.draggable, e, !1)) {
      if (r === n)
        return l[a];
      r++;
    }
    a++;
  }
  return null;
}
function Yr(e, n) {
  for (var t = e.lastElementChild; t && (t === te.ghost || ee(t, "display") === "none" || n && !So(t, n)); )
    t = t.previousElementSibling;
  return t || null;
}
function ct(e, n) {
  var t = 0;
  if (!e || !e.parentNode)
    return -1;
  for (; e = e.previousElementSibling; )
    e.nodeName.toUpperCase() !== "TEMPLATE" && e !== te.clone && (!n || So(e, n)) && t++;
  return t;
}
function ka(e) {
  var n = 0, t = 0, o = Dt();
  if (e)
    do {
      var r = Sn(e), a = r.a, l = r.d;
      n += e.scrollLeft * a, t += e.scrollTop * l;
    } while (e !== o && (e = e.parentNode));
  return [n, t];
}
function cf(e, n) {
  for (var t in e)
    if (e.hasOwnProperty(t)) {
      for (var o in n)
        if (n.hasOwnProperty(o) && n[o] === e[t][o]) return Number(t);
    }
  return -1;
}
function Kt(e, n) {
  if (!e || !e.getBoundingClientRect) return Dt();
  var t = e, o = !1;
  do
    if (t.clientWidth < t.scrollWidth || t.clientHeight < t.scrollHeight) {
      var r = ee(t);
      if (t.clientWidth < t.scrollWidth && (r.overflowX == "auto" || r.overflowX == "scroll") || t.clientHeight < t.scrollHeight && (r.overflowY == "auto" || r.overflowY == "scroll")) {
        if (!t.getBoundingClientRect || t === document.body) return Dt();
        if (o || n) return t;
        o = !0;
      }
    }
  while (t = t.parentNode);
  return Dt();
}
function ff(e, n) {
  if (e && n)
    for (var t in n)
      n.hasOwnProperty(t) && (e[t] = n[t]);
  return e;
}
function Zo(e, n) {
  return Math.round(e.top) === Math.round(n.top) && Math.round(e.left) === Math.round(n.left) && Math.round(e.height) === Math.round(n.height) && Math.round(e.width) === Math.round(n.width);
}
var zn;
function Vl(e, n) {
  return function() {
    if (!zn) {
      var t = arguments, o = this;
      t.length === 1 ? e.call(o, t[0]) : e.apply(o, t), zn = setTimeout(function() {
        zn = void 0;
      }, n);
    }
  };
}
function pf() {
  clearTimeout(zn), zn = void 0;
}
function Nl(e, n, t) {
  e.scrollLeft += n, e.scrollTop += t;
}
function zl(e) {
  var n = window.Polymer, t = window.jQuery || window.Zepto;
  return n && n.dom ? n.dom(e).cloneNode(!0) : t ? t(e).clone(!0)[0] : e.cloneNode(!0);
}
function jl(e, n, t) {
  var o = {};
  return Array.from(e.children).forEach(function(r) {
    var a, l, s, i;
    if (!(!bt(r, n.draggable, e, !1) || r.animated || r === t)) {
      var u = Fe(r);
      o.left = Math.min((a = o.left) !== null && a !== void 0 ? a : 1 / 0, u.left), o.top = Math.min((l = o.top) !== null && l !== void 0 ? l : 1 / 0, u.top), o.right = Math.max((s = o.right) !== null && s !== void 0 ? s : -1 / 0, u.right), o.bottom = Math.max((i = o.bottom) !== null && i !== void 0 ? i : -1 / 0, u.bottom);
    }
  }), o.width = o.right - o.left, o.height = o.bottom - o.top, o.x = o.left, o.y = o.top, o;
}
var ot = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function mf() {
  var e = [], n;
  return {
    captureAnimationState: function() {
      if (e = [], !!this.options.animation) {
        var o = [].slice.call(this.el.children);
        o.forEach(function(r) {
          if (!(ee(r, "display") === "none" || r === te.ghost)) {
            e.push({
              target: r,
              rect: Fe(r)
            });
            var a = It({}, e[e.length - 1].rect);
            if (r.thisAnimationDuration) {
              var l = Sn(r, !0);
              l && (a.top -= l.f, a.left -= l.e);
            }
            r.fromRect = a;
          }
        });
      }
    },
    addAnimationState: function(o) {
      e.push(o);
    },
    removeAnimationState: function(o) {
      e.splice(cf(e, {
        target: o
      }), 1);
    },
    animateAll: function(o) {
      var r = this;
      if (!this.options.animation) {
        clearTimeout(n), typeof o == "function" && o();
        return;
      }
      var a = !1, l = 0;
      e.forEach(function(s) {
        var i = 0, u = s.target, d = u.fromRect, c = Fe(u), m = u.prevFromRect, f = u.prevToRect, p = s.rect, g = Sn(u, !0);
        g && (c.top -= g.f, c.left -= g.e), u.toRect = c, u.thisAnimationDuration && Zo(m, c) && !Zo(d, c) && // Make sure animatingRect is on line between toRect & fromRect
        (p.top - c.top) / (p.left - c.left) === (d.top - c.top) / (d.left - c.left) && (i = gf(p, m, f, r.options)), Zo(c, d) || (u.prevFromRect = d, u.prevToRect = c, i || (i = r.options.animation), r.animate(u, p, c, i)), i && (a = !0, l = Math.max(l, i), clearTimeout(u.animationResetTimer), u.animationResetTimer = setTimeout(function() {
          u.animationTime = 0, u.prevFromRect = null, u.fromRect = null, u.prevToRect = null, u.thisAnimationDuration = null;
        }, i), u.thisAnimationDuration = i);
      }), clearTimeout(n), a ? n = setTimeout(function() {
        typeof o == "function" && o();
      }, l) : typeof o == "function" && o(), e = [];
    },
    animate: function(o, r, a, l) {
      if (l) {
        ee(o, "transition", ""), ee(o, "transform", "");
        var s = Sn(this.el), i = s && s.a, u = s && s.d, d = (r.left - a.left) / (i || 1), c = (r.top - a.top) / (u || 1);
        o.animatingX = !!d, o.animatingY = !!c, ee(o, "transform", "translate3d(" + d + "px," + c + "px,0)"), this.forRepaintDummy = vf(o), ee(o, "transition", "transform " + l + "ms" + (this.options.easing ? " " + this.options.easing : "")), ee(o, "transform", "translate3d(0,0,0)"), typeof o.animated == "number" && clearTimeout(o.animated), o.animated = setTimeout(function() {
          ee(o, "transition", ""), ee(o, "transform", ""), o.animated = !1, o.animatingX = !1, o.animatingY = !1;
        }, l);
      }
    }
  };
}
function vf(e) {
  return e.offsetWidth;
}
function gf(e, n, t, o) {
  return Math.sqrt(Math.pow(n.top - e.top, 2) + Math.pow(n.left - e.left, 2)) / Math.sqrt(Math.pow(n.top - t.top, 2) + Math.pow(n.left - t.left, 2)) * o.animation;
}
var hn = [], er = {
  initializeByDefault: !0
}, eo = {
  mount: function(n) {
    for (var t in er)
      er.hasOwnProperty(t) && !(t in n) && (n[t] = er[t]);
    hn.forEach(function(o) {
      if (o.pluginName === n.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(n.pluginName, " more than once");
    }), hn.push(n);
  },
  pluginEvent: function(n, t, o) {
    var r = this;
    this.eventCanceled = !1, o.cancel = function() {
      r.eventCanceled = !0;
    };
    var a = n + "Global";
    hn.forEach(function(l) {
      t[l.pluginName] && (t[l.pluginName][a] && t[l.pluginName][a](It({
        sortable: t
      }, o)), t.options[l.pluginName] && t[l.pluginName][n] && t[l.pluginName][n](It({
        sortable: t
      }, o)));
    });
  },
  initializePlugins: function(n, t, o, r) {
    hn.forEach(function(s) {
      var i = s.pluginName;
      if (!(!n.options[i] && !s.initializeByDefault)) {
        var u = new s(n, t, n.options);
        u.sortable = n, u.options = n.options, n[i] = u, zt(o, u.defaults);
      }
    });
    for (var a in n.options)
      if (n.options.hasOwnProperty(a)) {
        var l = this.modifyOption(n, a, n.options[a]);
        typeof l < "u" && (n.options[a] = l);
      }
  },
  getEventProperties: function(n, t) {
    var o = {};
    return hn.forEach(function(r) {
      typeof r.eventProperties == "function" && zt(o, r.eventProperties.call(t[r.pluginName], n));
    }), o;
  },
  modifyOption: function(n, t, o) {
    var r;
    return hn.forEach(function(a) {
      n[a.pluginName] && a.optionListeners && typeof a.optionListeners[t] == "function" && (r = a.optionListeners[t].call(n[a.pluginName], o));
    }), r;
  }
};
function hf(e) {
  var n = e.sortable, t = e.rootEl, o = e.name, r = e.targetEl, a = e.cloneEl, l = e.toEl, s = e.fromEl, i = e.oldIndex, u = e.newIndex, d = e.oldDraggableIndex, c = e.newDraggableIndex, m = e.originalEvent, f = e.putSortable, p = e.extraEventProperties;
  if (n = n || t && t[ot], !!n) {
    var g, b = n.options, w = "on" + o.charAt(0).toUpperCase() + o.substr(1);
    window.CustomEvent && !jt && !Zn ? g = new CustomEvent(o, {
      bubbles: !0,
      cancelable: !0
    }) : (g = document.createEvent("Event"), g.initEvent(o, !0, !0)), g.to = l || t, g.from = s || t, g.item = r || t, g.clone = a, g.oldIndex = i, g.newIndex = u, g.oldDraggableIndex = d, g.newDraggableIndex = c, g.originalEvent = m, g.pullMode = f ? f.lastPutMode : void 0;
    var y = It(It({}, p), eo.getEventProperties(o, n));
    for (var v in y)
      g[v] = y[v];
    t && t.dispatchEvent(g), b[w] && b[w].call(n, g);
  }
}
var bf = ["evt"], tt = function(n, t) {
  var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = o.evt, a = uf(o, bf);
  eo.pluginEvent.bind(te)(n, t, It({
    dragEl: U,
    parentEl: Ie,
    ghostEl: oe,
    rootEl: Oe,
    nextEl: ln,
    lastDownEl: po,
    cloneEl: De,
    cloneHidden: Ut,
    dragStarted: Ln,
    putSortable: Ue,
    activeSortable: te.active,
    originalEvent: r,
    oldIndex: Cn,
    oldDraggableIndex: jn,
    newIndex: lt,
    newDraggableIndex: Wt,
    hideGhostForTarget: Ul,
    unhideGhostForTarget: ql,
    cloneNowHidden: function() {
      Ut = !0;
    },
    cloneNowShown: function() {
      Ut = !1;
    },
    dispatchSortableEvent: function(s) {
      Qe({
        sortable: t,
        name: s,
        originalEvent: r
      });
    }
  }, a));
};
function Qe(e) {
  hf(It({
    putSortable: Ue,
    cloneEl: De,
    targetEl: U,
    rootEl: Oe,
    oldIndex: Cn,
    oldDraggableIndex: jn,
    newIndex: lt,
    newDraggableIndex: Wt
  }, e));
}
var U, Ie, oe, Oe, ln, po, De, Ut, Cn, lt, jn, Wt, so, Ue, wn = !1, _o = !1, Eo = [], rn, ht, tr, nr, Sa, _a, Ln, bn, Gn, Hn = !1, io = !1, mo, Xe, or = [], hr = !1, Oo = [], jo = typeof document < "u", uo = Kr, Ea = Zn || jt ? "cssFloat" : "float", yf = jo && !Ml && !Kr && "draggable" in document.createElement("div"), Gl = function() {
  if (jo) {
    if (jt)
      return !1;
    var e = document.createElement("x");
    return e.style.cssText = "pointer-events:auto", e.style.pointerEvents === "auto";
  }
}(), Hl = function(n, t) {
  var o = ee(n), r = parseInt(o.width) - parseInt(o.paddingLeft) - parseInt(o.paddingRight) - parseInt(o.borderLeftWidth) - parseInt(o.borderRightWidth), a = En(n, 0, t), l = En(n, 1, t), s = a && ee(a), i = l && ee(l), u = s && parseInt(s.marginLeft) + parseInt(s.marginRight) + Fe(a).width, d = i && parseInt(i.marginLeft) + parseInt(i.marginRight) + Fe(l).width;
  if (o.display === "flex")
    return o.flexDirection === "column" || o.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (o.display === "grid")
    return o.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (a && s.float && s.float !== "none") {
    var c = s.float === "left" ? "left" : "right";
    return l && (i.clear === "both" || i.clear === c) ? "vertical" : "horizontal";
  }
  return a && (s.display === "block" || s.display === "flex" || s.display === "table" || s.display === "grid" || u >= r && o[Ea] === "none" || l && o[Ea] === "none" && u + d > r) ? "vertical" : "horizontal";
}, wf = function(n, t, o) {
  var r = o ? n.left : n.top, a = o ? n.right : n.bottom, l = o ? n.width : n.height, s = o ? t.left : t.top, i = o ? t.right : t.bottom, u = o ? t.width : t.height;
  return r === s || a === i || r + l / 2 === s + u / 2;
}, xf = function(n, t) {
  var o;
  return Eo.some(function(r) {
    var a = r[ot].options.emptyInsertThreshold;
    if (!(!a || Yr(r))) {
      var l = Fe(r), s = n >= l.left - a && n <= l.right + a, i = t >= l.top - a && t <= l.bottom + a;
      if (s && i)
        return o = r;
    }
  }), o;
}, Wl = function(n) {
  function t(a, l) {
    return function(s, i, u, d) {
      var c = s.options.group.name && i.options.group.name && s.options.group.name === i.options.group.name;
      if (a == null && (l || c))
        return !0;
      if (a == null || a === !1)
        return !1;
      if (l && a === "clone")
        return a;
      if (typeof a == "function")
        return t(a(s, i, u, d), l)(s, i, u, d);
      var m = (l ? s : i).options.group.name;
      return a === !0 || typeof a == "string" && a === m || a.join && a.indexOf(m) > -1;
    };
  }
  var o = {}, r = n.group;
  (!r || fo(r) != "object") && (r = {
    name: r
  }), o.name = r.name, o.checkPull = t(r.pull, !0), o.checkPut = t(r.put), o.revertClone = r.revertClone, n.group = o;
}, Ul = function() {
  !Gl && oe && ee(oe, "display", "none");
}, ql = function() {
  !Gl && oe && ee(oe, "display", "");
};
jo && !Ml && document.addEventListener("click", function(e) {
  if (_o)
    return e.preventDefault(), e.stopPropagation && e.stopPropagation(), e.stopImmediatePropagation && e.stopImmediatePropagation(), _o = !1, !1;
}, !0);
var an = function(n) {
  if (U) {
    n = n.touches ? n.touches[0] : n;
    var t = xf(n.clientX, n.clientY);
    if (t) {
      var o = {};
      for (var r in n)
        n.hasOwnProperty(r) && (o[r] = n[r]);
      o.target = o.rootEl = t, o.preventDefault = void 0, o.stopPropagation = void 0, t[ot]._onDragOver(o);
    }
  }
}, Cf = function(n) {
  U && U.parentNode[ot]._isOutsideThisEl(n.target);
};
function te(e, n) {
  if (!(e && e.nodeType && e.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(e));
  this.el = e, this.options = n = zt({}, n), e[ot] = this;
  var t = {
    group: null,
    sort: !0,
    disabled: !1,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(e.nodeName) ? ">li" : ">*",
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: !1,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: !0,
    direction: function() {
      return Hl(e, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function(l, s) {
      l.setData("Text", s.textContent);
    },
    dropBubble: !1,
    dragoverBubble: !1,
    dataIdAttr: "data-id",
    delay: 0,
    delayOnTouchOnly: !1,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: !1,
    fallbackClass: "sortable-fallback",
    fallbackOnBody: !1,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    // Disabled on Safari: #1571; Enabled on Safari IOS: #2244
    supportPointer: te.supportPointer !== !1 && "PointerEvent" in window && (!Nn || Kr),
    emptyInsertThreshold: 5
  };
  eo.initializePlugins(this, e, t);
  for (var o in t)
    !(o in n) && (n[o] = t[o]);
  Wl(n);
  for (var r in this)
    r.charAt(0) === "_" && typeof this[r] == "function" && (this[r] = this[r].bind(this));
  this.nativeDraggable = n.forceFallback ? !1 : yf, this.nativeDraggable && (this.options.touchStartThreshold = 1), n.supportPointer ? de(e, "pointerdown", this._onTapStart) : (de(e, "mousedown", this._onTapStart), de(e, "touchstart", this._onTapStart)), this.nativeDraggable && (de(e, "dragover", this), de(e, "dragenter", this)), Eo.push(this.el), n.store && n.store.get && this.sort(n.store.get(this) || []), zt(this, mf());
}
te.prototype = /** @lends Sortable.prototype */
{
  constructor: te,
  _isOutsideThisEl: function(n) {
    !this.el.contains(n) && n !== this.el && (bn = null);
  },
  _getDirection: function(n, t) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, n, t, U) : this.options.direction;
  },
  _onTapStart: function(n) {
    if (n.cancelable) {
      var t = this, o = this.el, r = this.options, a = r.preventOnFilter, l = n.type, s = n.touches && n.touches[0] || n.pointerType && n.pointerType === "touch" && n, i = (s || n).target, u = n.target.shadowRoot && (n.path && n.path[0] || n.composedPath && n.composedPath()[0]) || i, d = r.filter;
      if ($f(o), !U && !(/mousedown|pointerdown/.test(l) && n.button !== 0 || r.disabled) && !u.isContentEditable && !(!this.nativeDraggable && Nn && i && i.tagName.toUpperCase() === "SELECT") && (i = bt(i, r.draggable, o, !1), !(i && i.animated) && po !== i)) {
        if (Cn = ct(i), jn = ct(i, r.draggable), typeof d == "function") {
          if (d.call(this, n, i, this)) {
            Qe({
              sortable: t,
              rootEl: u,
              name: "filter",
              targetEl: i,
              toEl: o,
              fromEl: o
            }), tt("filter", t, {
              evt: n
            }), a && n.preventDefault();
            return;
          }
        } else if (d && (d = d.split(",").some(function(c) {
          if (c = bt(u, c.trim(), o, !1), c)
            return Qe({
              sortable: t,
              rootEl: c,
              name: "filter",
              targetEl: i,
              fromEl: o,
              toEl: o
            }), tt("filter", t, {
              evt: n
            }), !0;
        }), d)) {
          a && n.preventDefault();
          return;
        }
        r.handle && !bt(u, r.handle, o, !1) || this._prepareDragStart(n, s, i);
      }
    }
  },
  _prepareDragStart: function(n, t, o) {
    var r = this, a = r.el, l = r.options, s = a.ownerDocument, i;
    if (o && !U && o.parentNode === a) {
      var u = Fe(o);
      if (Oe = a, U = o, Ie = U.parentNode, ln = U.nextSibling, po = o, so = l.group, te.dragged = U, rn = {
        target: U,
        clientX: (t || n).clientX,
        clientY: (t || n).clientY
      }, Sa = rn.clientX - u.left, _a = rn.clientY - u.top, this._lastX = (t || n).clientX, this._lastY = (t || n).clientY, U.style["will-change"] = "all", i = function() {
        if (tt("delayEnded", r, {
          evt: n
        }), te.eventCanceled) {
          r._onDrop();
          return;
        }
        r._disableDelayedDragEvents(), !wa && r.nativeDraggable && (U.draggable = !0), r._triggerDragStart(n, t), Qe({
          sortable: r,
          name: "choose",
          originalEvent: n
        }), at(U, l.chosenClass, !0);
      }, l.ignore.split(",").forEach(function(d) {
        Bl(U, d.trim(), rr);
      }), de(s, "dragover", an), de(s, "mousemove", an), de(s, "touchmove", an), l.supportPointer ? (de(s, "pointerup", r._onDrop), !this.nativeDraggable && de(s, "pointercancel", r._onDrop)) : (de(s, "mouseup", r._onDrop), de(s, "touchend", r._onDrop), de(s, "touchcancel", r._onDrop)), wa && this.nativeDraggable && (this.options.touchStartThreshold = 4, U.draggable = !0), tt("delayStart", this, {
        evt: n
      }), l.delay && (!l.delayOnTouchOnly || t) && (!this.nativeDraggable || !(Zn || jt))) {
        if (te.eventCanceled) {
          this._onDrop();
          return;
        }
        l.supportPointer ? (de(s, "pointerup", r._disableDelayedDrag), de(s, "pointercancel", r._disableDelayedDrag)) : (de(s, "mouseup", r._disableDelayedDrag), de(s, "touchend", r._disableDelayedDrag), de(s, "touchcancel", r._disableDelayedDrag)), de(s, "mousemove", r._delayedDragTouchMoveHandler), de(s, "touchmove", r._delayedDragTouchMoveHandler), l.supportPointer && de(s, "pointermove", r._delayedDragTouchMoveHandler), r._dragStartTimer = setTimeout(i, l.delay);
      } else
        i();
    }
  },
  _delayedDragTouchMoveHandler: function(n) {
    var t = n.touches ? n.touches[0] : n;
    Math.max(Math.abs(t.clientX - this._lastX), Math.abs(t.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    U && rr(U), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var n = this.el.ownerDocument;
    ue(n, "mouseup", this._disableDelayedDrag), ue(n, "touchend", this._disableDelayedDrag), ue(n, "touchcancel", this._disableDelayedDrag), ue(n, "pointerup", this._disableDelayedDrag), ue(n, "pointercancel", this._disableDelayedDrag), ue(n, "mousemove", this._delayedDragTouchMoveHandler), ue(n, "touchmove", this._delayedDragTouchMoveHandler), ue(n, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(n, t) {
    t = t || n.pointerType == "touch" && n, !this.nativeDraggable || t ? this.options.supportPointer ? de(document, "pointermove", this._onTouchMove) : t ? de(document, "touchmove", this._onTouchMove) : de(document, "mousemove", this._onTouchMove) : (de(U, "dragend", this), de(Oe, "dragstart", this._onDragStart));
    try {
      document.selection ? vo(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(n, t) {
    if (wn = !1, Oe && U) {
      tt("dragStarted", this, {
        evt: t
      }), this.nativeDraggable && de(document, "dragover", Cf);
      var o = this.options;
      !n && at(U, o.dragClass, !1), at(U, o.ghostClass, !0), te.active = this, n && this._appendGhost(), Qe({
        sortable: this,
        name: "start",
        originalEvent: t
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (ht) {
      this._lastX = ht.clientX, this._lastY = ht.clientY, Ul();
      for (var n = document.elementFromPoint(ht.clientX, ht.clientY), t = n; n && n.shadowRoot && (n = n.shadowRoot.elementFromPoint(ht.clientX, ht.clientY), n !== t); )
        t = n;
      if (U.parentNode[ot]._isOutsideThisEl(n), t)
        do {
          if (t[ot]) {
            var o = void 0;
            if (o = t[ot]._onDragOver({
              clientX: ht.clientX,
              clientY: ht.clientY,
              target: n,
              rootEl: t
            }), o && !this.options.dragoverBubble)
              break;
          }
          n = t;
        } while (t = Fl(t));
      ql();
    }
  },
  _onTouchMove: function(n) {
    if (rn) {
      var t = this.options, o = t.fallbackTolerance, r = t.fallbackOffset, a = n.touches ? n.touches[0] : n, l = oe && Sn(oe, !0), s = oe && l && l.a, i = oe && l && l.d, u = uo && Xe && ka(Xe), d = (a.clientX - rn.clientX + r.x) / (s || 1) + (u ? u[0] - or[0] : 0) / (s || 1), c = (a.clientY - rn.clientY + r.y) / (i || 1) + (u ? u[1] - or[1] : 0) / (i || 1);
      if (!te.active && !wn) {
        if (o && Math.max(Math.abs(a.clientX - this._lastX), Math.abs(a.clientY - this._lastY)) < o)
          return;
        this._onDragStart(n, !0);
      }
      if (oe) {
        l ? (l.e += d - (tr || 0), l.f += c - (nr || 0)) : l = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: d,
          f: c
        };
        var m = "matrix(".concat(l.a, ",").concat(l.b, ",").concat(l.c, ",").concat(l.d, ",").concat(l.e, ",").concat(l.f, ")");
        ee(oe, "webkitTransform", m), ee(oe, "mozTransform", m), ee(oe, "msTransform", m), ee(oe, "transform", m), tr = d, nr = c, ht = a;
      }
      n.cancelable && n.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!oe) {
      var n = this.options.fallbackOnBody ? document.body : Oe, t = Fe(U, !0, uo, !0, n), o = this.options;
      if (uo) {
        for (Xe = n; ee(Xe, "position") === "static" && ee(Xe, "transform") === "none" && Xe !== document; )
          Xe = Xe.parentNode;
        Xe !== document.body && Xe !== document.documentElement ? (Xe === document && (Xe = Dt()), t.top += Xe.scrollTop, t.left += Xe.scrollLeft) : Xe = Dt(), or = ka(Xe);
      }
      oe = U.cloneNode(!0), at(oe, o.ghostClass, !1), at(oe, o.fallbackClass, !0), at(oe, o.dragClass, !0), ee(oe, "transition", ""), ee(oe, "transform", ""), ee(oe, "box-sizing", "border-box"), ee(oe, "margin", 0), ee(oe, "top", t.top), ee(oe, "left", t.left), ee(oe, "width", t.width), ee(oe, "height", t.height), ee(oe, "opacity", "0.8"), ee(oe, "position", uo ? "absolute" : "fixed"), ee(oe, "zIndex", "100000"), ee(oe, "pointerEvents", "none"), te.ghost = oe, n.appendChild(oe), ee(oe, "transform-origin", Sa / parseInt(oe.style.width) * 100 + "% " + _a / parseInt(oe.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(n, t) {
    var o = this, r = n.dataTransfer, a = o.options;
    if (tt("dragStart", this, {
      evt: n
    }), te.eventCanceled) {
      this._onDrop();
      return;
    }
    tt("setupClone", this), te.eventCanceled || (De = zl(U), De.removeAttribute("id"), De.draggable = !1, De.style["will-change"] = "", this._hideClone(), at(De, this.options.chosenClass, !1), te.clone = De), o.cloneId = vo(function() {
      tt("clone", o), !te.eventCanceled && (o.options.removeCloneOnHide || Oe.insertBefore(De, U), o._hideClone(), Qe({
        sortable: o,
        name: "clone"
      }));
    }), !t && at(U, a.dragClass, !0), t ? (_o = !0, o._loopId = setInterval(o._emulateDragOver, 50)) : (ue(document, "mouseup", o._onDrop), ue(document, "touchend", o._onDrop), ue(document, "touchcancel", o._onDrop), r && (r.effectAllowed = "move", a.setData && a.setData.call(o, r, U)), de(document, "drop", o), ee(U, "transform", "translateZ(0)")), wn = !0, o._dragStartId = vo(o._dragStarted.bind(o, t, n)), de(document, "selectstart", o), Ln = !0, window.getSelection().removeAllRanges(), Nn && ee(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(n) {
    var t = this.el, o = n.target, r, a, l, s = this.options, i = s.group, u = te.active, d = so === i, c = s.sort, m = Ue || u, f, p = this, g = !1;
    if (hr) return;
    function b(ve, ne) {
      tt(ve, p, It({
        evt: n,
        isOwner: d,
        axis: f ? "vertical" : "horizontal",
        revert: l,
        dragRect: r,
        targetRect: a,
        canSort: c,
        fromSortable: m,
        target: o,
        completed: y,
        onMove: function(je, Me) {
          return co(Oe, t, U, r, je, Fe(je), n, Me);
        },
        changed: v
      }, ne));
    }
    function w() {
      b("dragOverAnimationCapture"), p.captureAnimationState(), p !== m && m.captureAnimationState();
    }
    function y(ve) {
      return b("dragOverCompleted", {
        insertion: ve
      }), ve && (d ? u._hideClone() : u._showClone(p), p !== m && (at(U, Ue ? Ue.options.ghostClass : u.options.ghostClass, !1), at(U, s.ghostClass, !0)), Ue !== p && p !== te.active ? Ue = p : p === te.active && Ue && (Ue = null), m === p && (p._ignoreWhileAnimating = o), p.animateAll(function() {
        b("dragOverAnimationComplete"), p._ignoreWhileAnimating = null;
      }), p !== m && (m.animateAll(), m._ignoreWhileAnimating = null)), (o === U && !U.animated || o === t && !o.animated) && (bn = null), !s.dragoverBubble && !n.rootEl && o !== document && (U.parentNode[ot]._isOutsideThisEl(n.target), !ve && an(n)), !s.dragoverBubble && n.stopPropagation && n.stopPropagation(), g = !0;
    }
    function v() {
      lt = ct(U), Wt = ct(U, s.draggable), Qe({
        sortable: p,
        name: "change",
        toEl: t,
        newIndex: lt,
        newDraggableIndex: Wt,
        originalEvent: n
      });
    }
    if (n.preventDefault !== void 0 && n.cancelable && n.preventDefault(), o = bt(o, s.draggable, t, !0), b("dragOver"), te.eventCanceled) return g;
    if (U.contains(n.target) || o.animated && o.animatingX && o.animatingY || p._ignoreWhileAnimating === o)
      return y(!1);
    if (_o = !1, u && !s.disabled && (d ? c || (l = Ie !== Oe) : Ue === this || (this.lastPutMode = so.checkPull(this, u, U, n)) && i.checkPut(this, u, U, n))) {
      if (f = this._getDirection(n, o) === "vertical", r = Fe(U), b("dragOverValid"), te.eventCanceled) return g;
      if (l)
        return Ie = Oe, w(), this._hideClone(), b("revert"), te.eventCanceled || (ln ? Oe.insertBefore(U, ln) : Oe.appendChild(U)), y(!0);
      var x = Yr(t, s.draggable);
      if (!x || Ef(n, f, this) && !x.animated) {
        if (x === U)
          return y(!1);
        if (x && t === n.target && (o = x), o && (a = Fe(o)), co(Oe, t, U, r, o, a, n, !!o) !== !1)
          return w(), x && x.nextSibling ? t.insertBefore(U, x.nextSibling) : t.appendChild(U), Ie = t, v(), y(!0);
      } else if (x && _f(n, f, this)) {
        var h = En(t, 0, s, !0);
        if (h === U)
          return y(!1);
        if (o = h, a = Fe(o), co(Oe, t, U, r, o, a, n, !1) !== !1)
          return w(), t.insertBefore(U, h), Ie = t, v(), y(!0);
      } else if (o.parentNode === t) {
        a = Fe(o);
        var C = 0, k, O = U.parentNode !== t, A = !wf(U.animated && U.toRect || r, o.animated && o.toRect || a, f), _ = f ? "top" : "left", D = Ca(o, "top", "top") || Ca(U, "top", "top"), z = D ? D.scrollTop : void 0;
        bn !== o && (k = a[_], Hn = !1, io = !A && s.invertSwap || O), C = Of(n, o, a, f, A ? 1 : s.swapThreshold, s.invertedSwapThreshold == null ? s.swapThreshold : s.invertedSwapThreshold, io, bn === o);
        var j;
        if (C !== 0) {
          var K = ct(U);
          do
            K -= C, j = Ie.children[K];
          while (j && (ee(j, "display") === "none" || j === oe));
        }
        if (C === 0 || j === o)
          return y(!1);
        bn = o, Gn = C;
        var Y = o.nextElementSibling, Z = !1;
        Z = C === 1;
        var pe = co(Oe, t, U, r, o, a, n, Z);
        if (pe !== !1)
          return (pe === 1 || pe === -1) && (Z = pe === 1), hr = !0, setTimeout(Sf, 30), w(), Z && !Y ? t.appendChild(U) : o.parentNode.insertBefore(U, Z ? Y : o), D && Nl(D, 0, z - D.scrollTop), Ie = U.parentNode, k !== void 0 && !io && (mo = Math.abs(k - Fe(o)[_])), v(), y(!0);
      }
      if (t.contains(U))
        return y(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    ue(document, "mousemove", this._onTouchMove), ue(document, "touchmove", this._onTouchMove), ue(document, "pointermove", this._onTouchMove), ue(document, "dragover", an), ue(document, "mousemove", an), ue(document, "touchmove", an);
  },
  _offUpEvents: function() {
    var n = this.el.ownerDocument;
    ue(n, "mouseup", this._onDrop), ue(n, "touchend", this._onDrop), ue(n, "pointerup", this._onDrop), ue(n, "pointercancel", this._onDrop), ue(n, "touchcancel", this._onDrop), ue(document, "selectstart", this);
  },
  _onDrop: function(n) {
    var t = this.el, o = this.options;
    if (lt = ct(U), Wt = ct(U, o.draggable), tt("drop", this, {
      evt: n
    }), Ie = U && U.parentNode, lt = ct(U), Wt = ct(U, o.draggable), te.eventCanceled) {
      this._nulling();
      return;
    }
    wn = !1, io = !1, Hn = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), br(this.cloneId), br(this._dragStartId), this.nativeDraggable && (ue(document, "drop", this), ue(t, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), Nn && ee(document.body, "user-select", ""), ee(U, "transform", ""), n && (Ln && (n.cancelable && n.preventDefault(), !o.dropBubble && n.stopPropagation()), oe && oe.parentNode && oe.parentNode.removeChild(oe), (Oe === Ie || Ue && Ue.lastPutMode !== "clone") && De && De.parentNode && De.parentNode.removeChild(De), U && (this.nativeDraggable && ue(U, "dragend", this), rr(U), U.style["will-change"] = "", Ln && !wn && at(U, Ue ? Ue.options.ghostClass : this.options.ghostClass, !1), at(U, this.options.chosenClass, !1), Qe({
      sortable: this,
      name: "unchoose",
      toEl: Ie,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: n
    }), Oe !== Ie ? (lt >= 0 && (Qe({
      rootEl: Ie,
      name: "add",
      toEl: Ie,
      fromEl: Oe,
      originalEvent: n
    }), Qe({
      sortable: this,
      name: "remove",
      toEl: Ie,
      originalEvent: n
    }), Qe({
      rootEl: Ie,
      name: "sort",
      toEl: Ie,
      fromEl: Oe,
      originalEvent: n
    }), Qe({
      sortable: this,
      name: "sort",
      toEl: Ie,
      originalEvent: n
    })), Ue && Ue.save()) : lt !== Cn && lt >= 0 && (Qe({
      sortable: this,
      name: "update",
      toEl: Ie,
      originalEvent: n
    }), Qe({
      sortable: this,
      name: "sort",
      toEl: Ie,
      originalEvent: n
    })), te.active && ((lt == null || lt === -1) && (lt = Cn, Wt = jn), Qe({
      sortable: this,
      name: "end",
      toEl: Ie,
      originalEvent: n
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    tt("nulling", this), Oe = U = Ie = oe = ln = De = po = Ut = rn = ht = Ln = lt = Wt = Cn = jn = bn = Gn = Ue = so = te.dragged = te.ghost = te.clone = te.active = null, Oo.forEach(function(n) {
      n.checked = !0;
    }), Oo.length = tr = nr = 0;
  },
  handleEvent: function(n) {
    switch (n.type) {
      case "drop":
      case "dragend":
        this._onDrop(n);
        break;
      case "dragenter":
      case "dragover":
        U && (this._onDragOver(n), kf(n));
        break;
      case "selectstart":
        n.preventDefault();
        break;
    }
  },
  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function() {
    for (var n = [], t, o = this.el.children, r = 0, a = o.length, l = this.options; r < a; r++)
      t = o[r], bt(t, l.draggable, this.el, !1) && n.push(t.getAttribute(l.dataIdAttr) || Df(t));
    return n;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(n, t) {
    var o = {}, r = this.el;
    this.toArray().forEach(function(a, l) {
      var s = r.children[l];
      bt(s, this.options.draggable, r, !1) && (o[a] = s);
    }, this), t && this.captureAnimationState(), n.forEach(function(a) {
      o[a] && (r.removeChild(o[a]), r.appendChild(o[a]));
    }), t && this.animateAll();
  },
  /**
   * Save the current sorting
   */
  save: function() {
    var n = this.options.store;
    n && n.set && n.set(this);
  },
  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function(n, t) {
    return bt(n, t || this.options.draggable, this.el, !1);
  },
  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function(n, t) {
    var o = this.options;
    if (t === void 0)
      return o[n];
    var r = eo.modifyOption(this, n, t);
    typeof r < "u" ? o[n] = r : o[n] = t, n === "group" && Wl(o);
  },
  /**
   * Destroy
   */
  destroy: function() {
    tt("destroy", this);
    var n = this.el;
    n[ot] = null, ue(n, "mousedown", this._onTapStart), ue(n, "touchstart", this._onTapStart), ue(n, "pointerdown", this._onTapStart), this.nativeDraggable && (ue(n, "dragover", this), ue(n, "dragenter", this)), Array.prototype.forEach.call(n.querySelectorAll("[draggable]"), function(t) {
      t.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), Eo.splice(Eo.indexOf(this.el), 1), this.el = n = null;
  },
  _hideClone: function() {
    if (!Ut) {
      if (tt("hideClone", this), te.eventCanceled) return;
      ee(De, "display", "none"), this.options.removeCloneOnHide && De.parentNode && De.parentNode.removeChild(De), Ut = !0;
    }
  },
  _showClone: function(n) {
    if (n.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (Ut) {
      if (tt("showClone", this), te.eventCanceled) return;
      U.parentNode == Oe && !this.options.group.revertClone ? Oe.insertBefore(De, U) : ln ? Oe.insertBefore(De, ln) : Oe.appendChild(De), this.options.group.revertClone && this.animate(U, De), ee(De, "display", ""), Ut = !1;
    }
  }
};
function kf(e) {
  e.dataTransfer && (e.dataTransfer.dropEffect = "move"), e.cancelable && e.preventDefault();
}
function co(e, n, t, o, r, a, l, s) {
  var i, u = e[ot], d = u.options.onMove, c;
  return window.CustomEvent && !jt && !Zn ? i = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (i = document.createEvent("Event"), i.initEvent("move", !0, !0)), i.to = n, i.from = e, i.dragged = t, i.draggedRect = o, i.related = r || n, i.relatedRect = a || Fe(n), i.willInsertAfter = s, i.originalEvent = l, e.dispatchEvent(i), d && (c = d.call(u, i, l)), c;
}
function rr(e) {
  e.draggable = !1;
}
function Sf() {
  hr = !1;
}
function _f(e, n, t) {
  var o = Fe(En(t.el, 0, t.options, !0)), r = jl(t.el, t.options, oe), a = 10;
  return n ? e.clientX < r.left - a || e.clientY < o.top && e.clientX < o.right : e.clientY < r.top - a || e.clientY < o.bottom && e.clientX < o.left;
}
function Ef(e, n, t) {
  var o = Fe(Yr(t.el, t.options.draggable)), r = jl(t.el, t.options, oe), a = 10;
  return n ? e.clientX > r.right + a || e.clientY > o.bottom && e.clientX > o.left : e.clientY > r.bottom + a || e.clientX > o.right && e.clientY > o.top;
}
function Of(e, n, t, o, r, a, l, s) {
  var i = o ? e.clientY : e.clientX, u = o ? t.height : t.width, d = o ? t.top : t.left, c = o ? t.bottom : t.right, m = !1;
  if (!l) {
    if (s && mo < u * r) {
      if (!Hn && (Gn === 1 ? i > d + u * a / 2 : i < c - u * a / 2) && (Hn = !0), Hn)
        m = !0;
      else if (Gn === 1 ? i < d + mo : i > c - mo)
        return -Gn;
    } else if (i > d + u * (1 - r) / 2 && i < c - u * (1 - r) / 2)
      return Tf(n);
  }
  return m = m || l, m && (i < d + u * a / 2 || i > c - u * a / 2) ? i > d + u / 2 ? 1 : -1 : 0;
}
function Tf(e) {
  return ct(U) < ct(e) ? 1 : -1;
}
function Df(e) {
  for (var n = e.tagName + e.className + e.src + e.href + e.textContent, t = n.length, o = 0; t--; )
    o += n.charCodeAt(t);
  return o.toString(36);
}
function $f(e) {
  Oo.length = 0;
  for (var n = e.getElementsByTagName("input"), t = n.length; t--; ) {
    var o = n[t];
    o.checked && Oo.push(o);
  }
}
function vo(e) {
  return setTimeout(e, 0);
}
function br(e) {
  return clearTimeout(e);
}
jo && de(document, "touchmove", function(e) {
  (te.active || wn) && e.cancelable && e.preventDefault();
});
te.utils = {
  on: de,
  off: ue,
  css: ee,
  find: Bl,
  is: function(n, t) {
    return !!bt(n, t, n, !1);
  },
  extend: ff,
  throttle: Vl,
  closest: bt,
  toggleClass: at,
  clone: zl,
  index: ct,
  nextTick: vo,
  cancelNextTick: br,
  detectDirection: Hl,
  getChild: En,
  expando: ot
};
te.get = function(e) {
  return e[ot];
};
te.mount = function() {
  for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
    n[t] = arguments[t];
  n[0].constructor === Array && (n = n[0]), n.forEach(function(o) {
    if (!o.prototype || !o.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(o));
    o.utils && (te.utils = It(It({}, te.utils), o.utils)), eo.mount(o);
  });
};
te.create = function(e, n) {
  return new te(e, n);
};
te.version = df;
var Le = [], Fn, yr, wr = !1, ar, lr, To, Bn;
function Pf() {
  function e() {
    this.defaults = {
      scroll: !0,
      forceAutoScrollFallback: !1,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: !0
    };
    for (var n in this)
      n.charAt(0) === "_" && typeof this[n] == "function" && (this[n] = this[n].bind(this));
  }
  return e.prototype = {
    dragStarted: function(t) {
      var o = t.originalEvent;
      this.sortable.nativeDraggable ? de(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? de(document, "pointermove", this._handleFallbackAutoScroll) : o.touches ? de(document, "touchmove", this._handleFallbackAutoScroll) : de(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(t) {
      var o = t.originalEvent;
      !this.options.dragOverBubble && !o.rootEl && this._handleAutoScroll(o);
    },
    drop: function() {
      this.sortable.nativeDraggable ? ue(document, "dragover", this._handleAutoScroll) : (ue(document, "pointermove", this._handleFallbackAutoScroll), ue(document, "touchmove", this._handleFallbackAutoScroll), ue(document, "mousemove", this._handleFallbackAutoScroll)), Oa(), go(), pf();
    },
    nulling: function() {
      To = yr = Fn = wr = Bn = ar = lr = null, Le.length = 0;
    },
    _handleFallbackAutoScroll: function(t) {
      this._handleAutoScroll(t, !0);
    },
    _handleAutoScroll: function(t, o) {
      var r = this, a = (t.touches ? t.touches[0] : t).clientX, l = (t.touches ? t.touches[0] : t).clientY, s = document.elementFromPoint(a, l);
      if (To = t, o || this.options.forceAutoScrollFallback || Zn || jt || Nn) {
        sr(t, this.options, s, o);
        var i = Kt(s, !0);
        wr && (!Bn || a !== ar || l !== lr) && (Bn && Oa(), Bn = setInterval(function() {
          var u = Kt(document.elementFromPoint(a, l), !0);
          u !== i && (i = u, go()), sr(t, r.options, u, o);
        }, 10), ar = a, lr = l);
      } else {
        if (!this.options.bubbleScroll || Kt(s, !0) === Dt()) {
          go();
          return;
        }
        sr(t, this.options, Kt(s, !1), !1);
      }
    }
  }, zt(e, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function go() {
  Le.forEach(function(e) {
    clearInterval(e.pid);
  }), Le = [];
}
function Oa() {
  clearInterval(Bn);
}
var sr = Vl(function(e, n, t, o) {
  if (n.scroll) {
    var r = (e.touches ? e.touches[0] : e).clientX, a = (e.touches ? e.touches[0] : e).clientY, l = n.scrollSensitivity, s = n.scrollSpeed, i = Dt(), u = !1, d;
    yr !== t && (yr = t, go(), Fn = n.scroll, d = n.scrollFn, Fn === !0 && (Fn = Kt(t, !0)));
    var c = 0, m = Fn;
    do {
      var f = m, p = Fe(f), g = p.top, b = p.bottom, w = p.left, y = p.right, v = p.width, x = p.height, h = void 0, C = void 0, k = f.scrollWidth, O = f.scrollHeight, A = ee(f), _ = f.scrollLeft, D = f.scrollTop;
      f === i ? (h = v < k && (A.overflowX === "auto" || A.overflowX === "scroll" || A.overflowX === "visible"), C = x < O && (A.overflowY === "auto" || A.overflowY === "scroll" || A.overflowY === "visible")) : (h = v < k && (A.overflowX === "auto" || A.overflowX === "scroll"), C = x < O && (A.overflowY === "auto" || A.overflowY === "scroll"));
      var z = h && (Math.abs(y - r) <= l && _ + v < k) - (Math.abs(w - r) <= l && !!_), j = C && (Math.abs(b - a) <= l && D + x < O) - (Math.abs(g - a) <= l && !!D);
      if (!Le[c])
        for (var K = 0; K <= c; K++)
          Le[K] || (Le[K] = {});
      (Le[c].vx != z || Le[c].vy != j || Le[c].el !== f) && (Le[c].el = f, Le[c].vx = z, Le[c].vy = j, clearInterval(Le[c].pid), (z != 0 || j != 0) && (u = !0, Le[c].pid = setInterval((function() {
        o && this.layer === 0 && te.active._onTouchMove(To);
        var Y = Le[this.layer].vy ? Le[this.layer].vy * s : 0, Z = Le[this.layer].vx ? Le[this.layer].vx * s : 0;
        typeof d == "function" && d.call(te.dragged.parentNode[ot], Z, Y, e, To, Le[this.layer].el) !== "continue" || Nl(Le[this.layer].el, Z, Y);
      }).bind({
        layer: c
      }), 24))), c++;
    } while (n.bubbleScroll && m !== i && (m = Kt(m, !1)));
    wr = u;
  }
}, 30), Kl = function(n) {
  var t = n.originalEvent, o = n.putSortable, r = n.dragEl, a = n.activeSortable, l = n.dispatchSortableEvent, s = n.hideGhostForTarget, i = n.unhideGhostForTarget;
  if (t) {
    var u = o || a;
    s();
    var d = t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t, c = document.elementFromPoint(d.clientX, d.clientY);
    i(), u && !u.el.contains(c) && (l("spill"), this.onSpill({
      dragEl: r,
      putSortable: o
    }));
  }
};
function Xr() {
}
Xr.prototype = {
  startIndex: null,
  dragStart: function(n) {
    var t = n.oldDraggableIndex;
    this.startIndex = t;
  },
  onSpill: function(n) {
    var t = n.dragEl, o = n.putSortable;
    this.sortable.captureAnimationState(), o && o.captureAnimationState();
    var r = En(this.sortable.el, this.startIndex, this.options);
    r ? this.sortable.el.insertBefore(t, r) : this.sortable.el.appendChild(t), this.sortable.animateAll(), o && o.animateAll();
  },
  drop: Kl
};
zt(Xr, {
  pluginName: "revertOnSpill"
});
function Jr() {
}
Jr.prototype = {
  onSpill: function(n) {
    var t = n.dragEl, o = n.putSortable, r = o || this.sortable;
    r.captureAnimationState(), t.parentNode && t.parentNode.removeChild(t), r.animateAll();
  },
  drop: Kl
};
zt(Jr, {
  pluginName: "removeOnSpill"
});
te.mount(new Pf());
te.mount(Jr, Xr);
const Yl = /* @__PURE__ */ N({
  __name: "Sortable",
  props: {
    /** All SortableJS options are supported; events are handled by the `defineEmits` below and should be used with v-on */
    options: {
      type: Object,
      default: null,
      required: !1
    },
    /** Your list of items **/
    list: {
      type: [Array, Object],
      default: [],
      required: !0
    },
    /** The name of the key present in each item in the list that corresponds to a unique value. */
    itemKey: {
      type: [String, Function],
      default: "",
      required: !0
    },
    /** The element type to render as. */
    tag: {
      type: String,
      default: "div",
      required: !1
    }
  },
  emits: ["choose", "unchoose", "start", "end", "add", "update", "sort", "remove", "filter", "move", "clone", "change"],
  setup(e, { expose: n, emit: t }) {
    const o = e, r = t, a = os(), l = S(!1), s = S(null), i = S(null), u = T(() => typeof o.itemKey == "string" ? (d) => d[o.itemKey] : o.itemKey);
    return n({
      containerRef: s,
      sortable: i,
      isDragging: l
    }), re(s, (d) => {
      d && (i.value = new te(d, {
        ...o.options,
        onChoose: (c) => r("choose", c),
        onUnchoose: (c) => r("unchoose", c),
        onStart: (c) => {
          l.value = !0, r("start", c);
        },
        onEnd: (c) => {
          setTimeout(() => {
            l.value = !1, r("end", c);
          });
        },
        onAdd: (c) => r("add", c),
        onUpdate: (c) => r("update", c),
        onSort: (c) => r("sort", c),
        onRemove: (c) => r("remove", c),
        onFilter: (c) => r("filter", c),
        // See https://github.com/MaxLeiter/sortablejs-vue3/pull/56 for context on `attrs`.
        onMove: (c, m) => "onMoveCapture" in a ? (
          /**  eslint-disable-next-line */
          a.onMoveCapture(c, m)
        ) : r("move", c, m),
        onClone: (c) => r("clone", c),
        onChange: (c) => r("change", c)
      }));
    }), re(
      () => o.options,
      (d) => {
        if (d && (i != null && i.value))
          for (const c in d)
            i.value.option(
              c,
              d[c]
            );
      }
    ), ye(() => {
      i.value && (i.value.destroy(), s.value = null, i.value = null);
    }), (d, c) => (E(), fe(Ra(d.$props.tag), {
      ref_key: "containerRef",
      ref: s,
      class: W(d.$props.class)
    }, {
      default: V(() => [
        B(d.$slots, "header"),
        (E(!0), R(be, null, He(e.list, (m, f) => B(d.$slots, "item", {
          key: u.value(m),
          element: m,
          index: f
        })), 128)),
        B(d.$slots, "footer")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), If = { class: "absolute top-0 left-0 invisible -z-10 flex flex-nowrap" }, Rf = ["innerHTML"], Af = { class: "flex space-x-1 sm:space-x-1.5 md:space-x-2 lg:space-x-2.5 xl:space-x-3" }, Mf = ["onClick", "data-active"], Lf = ["innerHTML"], Ff = ["innerHTML"], Bf = 80, Vf = /* @__PURE__ */ N({
  __name: "TabsNav",
  props: {
    classes: { default: () => ({
      container: "",
      line: "",
      tab: ""
    }) },
    style: { default: "classic" },
    idField: { default: "id" },
    disabled: { default: () => [] },
    tabClasses: { default: () => [] },
    tabs: {},
    theme: { default: () => ({
      container: "",
      sortableContainer: "",
      tabsNavTab: "",
      tabsNavLine: ""
    }) }
  },
  emits: ["clicked", "update"],
  setup(e, { emit: n }) {
    const t = e, o = n, r = S(t.tabs);
    S();
    const a = S(!1), l = S(), s = S(), i = S(), u = S([]), d = S(t.tabs.length), c = T(() => r.value.slice(0, d.value)), m = T(() => r.value.slice(d.value)), f = () => {
      if (!s.value || u.value.length === 0) {
        d.value = t.tabs.length;
        return;
      }
      const h = s.value.offsetWidth;
      let C = 0, k = !0;
      for (let _ = 0; _ < u.value.length; _++) {
        const D = u.value[_], z = _ > 0 ? p() : 0;
        if (C += D.offsetWidth + z, C > h) {
          k = !1;
          break;
        }
      }
      if (k) {
        d.value = t.tabs.length;
        return;
      }
      const O = h - Bf;
      let A = 0;
      C = 0;
      for (let _ = 0; _ < u.value.length; _++) {
        const D = u.value[_], z = _ > 0 ? p() : 0;
        if (C + D.offsetWidth + z <= O)
          C += D.offsetWidth + z, A++;
        else
          break;
      }
      A === 0 && u.value.length > 0 && u.value[0].offsetWidth <= O && (A = 1), d.value = A;
    }, p = () => {
      const h = window.innerWidth;
      return h < 640 ? 4 : h < 768 ? 6 : h < 1024 ? 8 : h < 1280 ? 10 : 12;
    };
    let g;
    const b = () => {
      clearTimeout(g), g = window.setTimeout(f, 150);
    };
    se(() => {
      ze(f), window.addEventListener("resize", b);
    }), ye(() => {
      window.removeEventListener("resize", b), clearTimeout(g);
    }), re(
      () => t.tabs,
      (h) => {
        r.value = h, ze(f);
      },
      { deep: !0 }
    );
    function w(h) {
      const C = r.value.findIndex(
        (O) => O.id === h
      );
      if (C < d.value && C !== -1) {
        o("clicked", h);
        return;
      }
      const k = r.value.splice(C, 1)[0];
      r.value.splice(d.value - 1, 0, k), o("update", r.value), o("clicked", h);
    }
    function y(h) {
      const C = [...c.value], k = C.splice(h.oldIndex, 1)[0];
      C.splice(h.newIndex, 0, k);
      const O = [...C, ...m.value];
      r.value = O, o("update", r.value);
    }
    function v() {
      a.value = !0;
    }
    function x() {
      a.value = !1;
    }
    return (h, C) => (E(), R("div", {
      ref_key: "containerRef",
      ref: l,
      class: W(P(ce)("relative z-10 mx-auto", h.classes.container, h.theme.container))
    }, [
      I("div", If, [
        (E(!0), R(be, null, He(r.value, (k) => (E(), R("a", {
          key: `measure-${k.id}`,
          ref_for: !0,
          ref_key: "allTabRefs",
          ref: u,
          class: W(
            P(ce)(
              "pj-tab flex cursor-pointer items-center rounded-t-md px-2 py-1.5 text-sm leading-none font-medium transition-all duration-200 ease-in-out transform sm:px-3 sm:py-2 sm:text-base md:px-4 md:py-2.5 md:text-lg lg:px-5 lg:py-3",
              h.style === "classic" ? "px-3 py-2 border-x border-t text-sm leading-none font-medium transition-all duration-200 ease-in-out transform data-[active=false]:relative data-[active=false]:border-transparent data-[active=false]:hover:bg-primary/5 data-[active=true]:border-border data-[active=true]:bg-card sm:px-4 sm:py-2.5 sm:text-base md:px-6 md:py-3 md:text-lg lg:px-8 lg:py-4" : "flex cursor-pointer items-center border-0 px-3 py-2.5 text-sm leading-none font-medium transition-all duration-200 ease-in-out transform hover:no-underline data-[active=false]:relative data-[active=false]:text-foreground/50 data-[active=false]:hover:bg-primary/5 data-[active=false]:hover:text-foreground data-[active=false]:border-b-transparent data-[active=true]:bg-card data-[active=true]:border-b-3 data-[active=true]:border-b-accent sm:px-4 sm:py-3 sm:text-base md:px-6 md:py-3.5 md:text-lg lg:px-8 lg:py-4",
              k.classes || "",
              h.tabClasses,
              h.classes.tab,
              h.theme.tabsNavTab
            )
          )
        }, [
          B(h.$slots, "left", nt({ ref_for: !0 }, k), void 0, !0),
          h.$slots.label ? le("", !0) : (E(), R("span", {
            key: 0,
            innerHTML: k.label
          }, null, 8, Rf)),
          B(h.$slots, "label", nt({ ref_for: !0 }, k), void 0, !0),
          B(h.$slots, "right", nt({ ref_for: !0 }, k), void 0, !0)
        ], 2))), 128))
      ]),
      I("div", Af, [
        B(h.$slots, "before", {}, void 0, !0),
        I("div", {
          ref_key: "tabsContainerRef",
          ref: s,
          class: "flex-1 min-w-0"
        }, [
          (E(), fe(P(Yl), {
            list: c.value,
            key: "tabs-nav",
            "item-key": "id",
            tag: "div",
            class: W(
              P(ce)(
                "flex flex-wrap space-x-0.5 sm:space-x-1 md:space-x-1.5 lg:space-x-2",
                h.theme.sortableContainer
              )
            ),
            options: {
              animation: 300,
              chosenClass: "sortable-chosen",
              dragClass: "sortable-drag",
              easing: "cubic-bezier(0.4, 0, 0.2, 1)",
              fallbackClass: "sortable-fallback",
              fallbackOnBody: !0,
              ghostClass: "sortable-ghost",
              group: "shared-tabs-nav",
              horizontal: !0,
              scroll: !0,
              scrollSensitivity: 30,
              scrollSpeed: 10,
              selectedClass: "selected"
            },
            onUpdate: y,
            onStart: v,
            onEnd: x
          }, {
            item: V(({ element: k }) => [
              (E(), R("a", {
                key: k.id,
                href: "#",
                onClick: dn(
                  (O) => {
                    O.preventDefault(), h.$emit("clicked", k.id);
                  },
                  ["prevent"]
                ),
                class: W(
                  P(ce)(
                    "pj-tab flex cursor-pointer items-center rounded-t-md px-2 py-1.5 text-sm leading-none font-medium transition-all duration-200 ease-in-out transform sm:px-3 sm:py-2 sm:text-base md:px-4 md:py-2.5 md:text-lg lg:px-5 lg:py-3",
                    h.style === "classic" ? "px-3 py-2 border-x border-t text-sm leading-none font-medium transition-all duration-200 ease-in-out transform data-[active=false]:relative data-[active=false]:border-transparent data-[active=false]:hover:bg-primary/5 data-[active=true]:border-border data-[active=true]:bg-card sm:px-4 sm:py-2.5 sm:text-base md:px-6 md:py-3 md:text-lg lg:px-8 lg:py-4" : "flex cursor-pointer items-center border-0 px-3 py-2.5 text-sm leading-none font-medium transition-all duration-200 ease-in-out transform hover:no-underline data-[active=false]:relative data-[active=false]:text-foreground/50 data-[active=false]:hover:bg-primary/5 data-[active=false]:hover:text-foreground data-[active=false]:border-b-transparent data-[active=true]:bg-card data-[active=true]:border-b-3 data-[active=true]:border-b-accent sm:px-4 sm:py-3 sm:text-base md:px-6 md:py-3.5 md:text-lg lg:px-8 lg:py-4",
                    k.classes || "",
                    h.tabClasses,
                    h.classes.tab,
                    h.theme.tabsNavTab
                  )
                ),
                "data-active": ((k == null ? void 0 : k.active) ?? !1).toString()
              }, [
                B(h.$slots, "left", rt(pt(k)), void 0, !0),
                h.$slots.label ? le("", !0) : (E(), R("span", {
                  key: 0,
                  innerHTML: k.label
                }, null, 8, Lf)),
                B(h.$slots, "label", rt(pt(k)), void 0, !0),
                B(h.$slots, "right", rt(pt(k)), void 0, !0)
              ], 10, Mf))
            ]),
            _: 3
          }, 8, ["list", "class"]))
        ], 512),
        m.value.length > 0 ? (E(), fe(Wr, {
          key: 0,
          class: "flex items-center"
        }, {
          default: V(() => [
            H(Ur, { "as-child": "" }, {
              default: V(() => [
                I("button", {
                  ref_key: "moreButtonRef",
                  ref: i,
                  class: W(
                    P(ce)(
                      "flex items-center justify-center rounded-t-md px-3 py-1.5 text-sm font-medium transition-all duration-200 ease-in-out transform border border-border bg-card hover:bg-accent hover:text-accent-foreground sm:px-4 sm:py-2 md:px-5 md:py-2.5"
                    )
                  ),
                  "aria-label": "More tabs"
                }, [
                  C[0] || (C[0] = I("span", { class: "hidden sm:inline" }, "More", -1)),
                  C[1] || (C[1] = I("span", { class: "sm:hidden" }, "⋯", -1)),
                  H(P(Yn), { class: "ml-1 h-4 w-4 transition-transform duration-200" })
                ], 2)
              ]),
              _: 1
            }),
            H(qr, {
              align: "end",
              "side-offset": 8,
              class: "min-w-[8rem]"
            }, {
              default: V(() => [
                (E(!0), R(be, null, He(m.value, (k) => (E(), fe(Vn, {
                  key: k.id,
                  onClick: (O) => w(k.id),
                  class: W(
                    P(ce)(
                      "flex items-center",
                      k.active ? "bg-accent text-accent-foreground" : ""
                    )
                  )
                }, {
                  default: V(() => [
                    B(h.$slots, "left", nt({ ref_for: !0 }, k), void 0, !0),
                    h.$slots.label ? le("", !0) : (E(), R("span", {
                      key: 0,
                      innerHTML: k.label
                    }, null, 8, Ff)),
                    B(h.$slots, "label", nt({ ref_for: !0 }, k), void 0, !0),
                    B(h.$slots, "right", nt({ ref_for: !0 }, k), void 0, !0)
                  ]),
                  _: 2
                }, 1032, ["onClick", "class"]))), 128))
              ]),
              _: 3
            })
          ]),
          _: 3
        })) : le("", !0),
        B(h.$slots, "after", {}, void 0, !0)
      ]),
      (E(), R("hr", {
        key: 0,
        class: W(P(ce)("border-t", h.theme.tabsNavLine))
      }, null, 2))
    ], 2));
  }
}), Ip = /* @__PURE__ */ tn(Vf, [["__scopeId", "data-v-5f5f2499"]]), Rp = /* @__PURE__ */ N({
  __name: "Tabs",
  props: {
    modelValue: {},
    defaultValue: {},
    orientation: { default: "horizontal" },
    classes: { default: () => ({
      container: "",
      line: "",
      tab: ""
    }) },
    style: { default: "classic" },
    disabled: { default: () => [] },
    tabClasses: { default: () => [] },
    tabs: {},
    theme: { default: () => ({
      container: "",
      sortableContainer: "",
      tabsNavTab: "",
      tabsNavLine: ""
    }) }
  },
  emits: ["update:modelValue", "clicked", "update"],
  setup(e, { expose: n, emit: t }) {
    const o = e, r = t, a = S(o.defaultValue || o.modelValue || ""), l = S(o.tabs || []), s = S(), i = T({
      get: () => a.value,
      set: (u) => {
        a.value = u, r("update:modelValue", u);
      }
    });
    return ke("tabs", {
      value: i,
      orientation: T(() => o.orientation),
      style: T(() => o.style),
      classes: T(() => o.classes),
      disabled: T(() => o.disabled),
      tabClasses: T(() => o.tabClasses),
      theme: T(() => o.theme),
      tabs: l,
      onValueChange: (u) => {
        i.value = u, r("clicked", u);
      },
      onTabsUpdate: (u) => {
        l.value = u, r("update", u);
      }
    }), re(
      () => o.modelValue,
      (u) => {
        u !== void 0 && (a.value = u);
      }
    ), re(
      () => o.tabs,
      (u) => {
        u && (l.value = u);
      },
      { deep: !0 }
    ), n({
      setValue: (u) => {
        i.value = u;
      },
      getValue: () => i.value,
      getTabs: () => l.value,
      setTabs: (u) => {
        l.value = u;
      }
    }), (u, d) => (E(), R("div", {
      ref_key: "containerRef",
      ref: s,
      class: W(P(ce)("relative z-10 mx-auto", u.classes.container, u.theme.container))
    }, [
      B(u.$slots, "default")
    ], 2));
  }
}), Nf = 80, zf = /* @__PURE__ */ N({
  __name: "TabsList",
  setup(e, { expose: n }) {
    const t = me("tabs");
    if (!t)
      throw new Error("TabsList must be used within a Tabs component");
    const { value: o, orientation: r, style: a, disabled: l, theme: s, tabs: i, onTabsUpdate: u } = t, d = S(), c = S(), m = S(), f = S([]), p = S(i.value.length), g = S(!1), b = T(() => i.value.slice(0, p.value)), w = T(() => i.value.slice(p.value)), y = () => {
      if (!c.value || f.value.length === 0) {
        p.value = i.value.length;
        return;
      }
      const _ = c.value.offsetWidth;
      let D = 0, z = !0;
      for (let Y = 0; Y < f.value.length; Y++) {
        const Z = f.value[Y], pe = Y > 0 ? v() : 0;
        if (D += Z.offsetWidth + pe, D > _) {
          z = !1;
          break;
        }
      }
      if (z) {
        p.value = i.value.length;
        return;
      }
      const j = _ - Nf;
      let K = 0;
      D = 0;
      for (let Y = 0; Y < f.value.length; Y++) {
        const Z = f.value[Y], pe = Y > 0 ? v() : 0;
        if (D + Z.offsetWidth + pe <= j)
          D += Z.offsetWidth + pe, K++;
        else
          break;
      }
      K === 0 && f.value.length > 0 && f.value[0].offsetWidth <= j && (K = 1), p.value = K;
    }, v = () => {
      const _ = window.innerWidth;
      return _ < 640 ? 4 : _ < 768 ? 6 : _ < 1024 ? 8 : _ < 1280 ? 10 : 12;
    };
    let x;
    const h = () => {
      clearTimeout(x), x = window.setTimeout(y, 150);
    };
    se(() => {
      ze(y), window.addEventListener("resize", h);
    }), ye(() => {
      window.removeEventListener("resize", h), clearTimeout(x);
    }), re(
      () => i.value,
      () => {
        ze(y);
      },
      { deep: !0 }
    );
    function C(_) {
      const D = i.value.findIndex((K) => K.id === _);
      if (D < p.value && D !== -1)
        return;
      const z = [...i.value], j = z.splice(D, 1)[0];
      z.splice(p.value - 1, 0, j), u(z);
    }
    function k(_) {
      const D = [...b.value], z = D.splice(_.oldIndex, 1)[0];
      D.splice(_.newIndex, 0, z);
      const j = [...D, ...w.value];
      u(j);
    }
    function O() {
      g.value = !0;
    }
    function A() {
      g.value = !1;
    }
    return n({
      calculateVisibleTabs: y,
      getVisibleTabs: () => b.value,
      getOverflowTabs: () => w.value
    }), (_, D) => (E(), R(be, null, [
      I("div", {
        ref_key: "containerRef",
        ref: d,
        class: W(
          P(ce)(
            "flex space-x-1 sm:space-x-1.5 md:space-x-2 lg:space-x-2.5 xl:space-x-3",
            P(r).value === "vertical" ? "flex-col space-y-1" : ""
          )
        )
      }, [
        B(_.$slots, "before", {}, void 0, !0),
        I("div", {
          ref_key: "tabsContainerRef",
          ref: c,
          class: "flex-1 min-w-0"
        }, [
          (E(), fe(P(Yl), {
            list: b.value,
            key: "tabs-nav",
            "item-key": "id",
            tag: "div",
            class: W(
              P(ce)(
                "flex flex-wrap space-x-0.5 sm:space-x-1 md:space-x-1.5 lg:space-x-2",
                P(r).value === "vertical" ? "flex-col space-y-1" : "",
                P(s).value.sortableContainer
              )
            ),
            options: {
              animation: 300,
              chosenClass: "sortable-chosen",
              dragClass: "sortable-drag",
              easing: "cubic-bezier(0.4, 0, 0.2, 1)",
              fallbackClass: "sortable-fallback",
              fallbackOnBody: !0,
              ghostClass: "sortable-ghost",
              group: "shared-tabs-nav",
              horizontal: P(r).value === "horizontal",
              scroll: !0,
              scrollSensitivity: 30,
              scrollSpeed: 10,
              selectedClass: "selected"
            },
            onUpdate: k,
            onStart: O,
            onEnd: A
          }, {
            item: V(({ element: z }) => [
              B(_.$slots, "trigger", { tab: z }, void 0, !0)
            ]),
            _: 3
          }, 8, ["list", "class", "options"]))
        ], 512),
        w.value.length > 0 ? (E(), fe(Wr, {
          key: 0,
          class: "flex items-center"
        }, {
          default: V(() => [
            H(Ur, { "as-child": "" }, {
              default: V(() => [
                I("button", {
                  ref_key: "moreButtonRef",
                  ref: m,
                  class: W(
                    P(ce)(
                      "flex items-center justify-center rounded-t-md px-3 py-1.5 text-sm font-medium transition-all duration-200 ease-in-out transform border border-border bg-card hover:bg-accent hover:text-accent-foreground sm:px-4 sm:py-2 md:px-5 md:py-2.5"
                    )
                  ),
                  "aria-label": "More tabs"
                }, [
                  D[0] || (D[0] = I("span", { class: "hidden sm:inline" }, "More", -1)),
                  D[1] || (D[1] = I("span", { class: "sm:hidden" }, "⋯", -1)),
                  H(P(Yn), { class: "ml-1 h-4 w-4 transition-transform duration-200" })
                ], 2)
              ]),
              _: 1
            }),
            H(qr, {
              align: "end",
              "side-offset": 8,
              class: "min-w-[8rem]"
            }, {
              default: V(() => [
                (E(!0), R(be, null, He(w.value, (z) => (E(), fe(Vn, {
                  key: z.id,
                  onClick: (j) => C(z.id),
                  class: W(
                    P(ce)(
                      "flex items-center",
                      z.active ? "bg-accent text-accent-foreground" : ""
                    )
                  )
                }, {
                  default: V(() => [
                    B(_.$slots, "overflow-trigger", { tab: z }, void 0, !0)
                  ]),
                  _: 2
                }, 1032, ["onClick", "class"]))), 128))
              ]),
              _: 3
            })
          ]),
          _: 3
        })) : le("", !0),
        B(_.$slots, "after", {}, void 0, !0)
      ], 2),
      P(a).value === "classic" && !P(l).value.includes("border") ? (E(), R("hr", {
        key: 0,
        class: W(P(ce)("border-t", P(s).value.tabsNavLine))
      }, null, 2)) : le("", !0)
    ], 64));
  }
}), Ap = /* @__PURE__ */ tn(zf, [["__scopeId", "data-v-e35b1a38"]]), jf = ["data-active", "data-disabled"], Gf = ["innerHTML"], Mp = /* @__PURE__ */ N({
  __name: "TabsTrigger",
  props: {
    tab: {}
  },
  setup(e) {
    const n = e, t = me("tabs");
    if (!t)
      throw new Error("TabsTrigger must be used within a Tabs component");
    const { style: o, theme: r } = t, a = T(() => ce(
      "pj-tab flex cursor-pointer items-center rounded-t-md px-2 py-1.5 text-sm leading-none font-medium transition-all duration-200 ease-in-out transform sm:px-3 sm:py-2 sm:text-base md:px-4 md:py-2.5 md:text-lg lg:px-5 lg:py-3",
      o.value === "classic" ? "px-3 py-2 border-x border-t text-sm leading-none font-medium transition-all duration-200 ease-in-out transform data-[active=false]:relative data-[active=false]:border-transparent data-[active=false]:hover:bg-primary/5 data-[active=true]:border-border data-[active=true]:bg-card sm:px-4 sm:py-2.5 sm:text-base md:px-6 md:py-3 md:text-lg lg:px-8 lg:py-4" : "flex cursor-pointer items-center border-0 px-3 py-2.5 text-sm leading-none font-medium transition-all duration-200 ease-in-out transform hover:no-underline data-[active=false]:relative data-[active=false]:text-foreground/50 data-[active=false]:hover:bg-primary/5 data-[active=false]:hover:text-foreground data-[active=false]:border-b-transparent data-[active=true]:bg-card data-[active=true]:border-b-3 data-[active=true]:border-b-accent sm:px-4 sm:py-3 sm:text-base md:px-6 md:py-3.5 md:text-lg lg:px-8 lg:py-4",
      n.tab.classes || "",
      r.value.tabsNavTab
    )), l = (s) => {
      s.preventDefault(), !n.tab.disabled && t.onValueChange(n.tab.id);
    };
    return (s, i) => {
      var u, d;
      return E(), R("a", {
        key: s.tab.id,
        href: "#",
        onClick: dn(l, ["prevent"]),
        class: W(a.value),
        "data-active": (((u = s.tab) == null ? void 0 : u.active) ?? !1).toString(),
        "data-disabled": (((d = s.tab) == null ? void 0 : d.disabled) ?? !1).toString()
      }, [
        B(s.$slots, "left", rt(pt(s.tab))),
        s.$slots.default ? le("", !0) : (E(), R("span", {
          key: 0,
          innerHTML: s.tab.label
        }, null, 8, Gf)),
        B(s.$slots, "default", rt(pt(s.tab))),
        B(s.$slots, "right", rt(pt(s.tab)))
      ], 10, jf);
    };
  }
}), Hf = ["aria-labelledby"], Lp = /* @__PURE__ */ N({
  __name: "TabsContent",
  props: {
    value: {},
    class: {}
  },
  setup(e) {
    const n = e, t = me("tabs");
    if (!t)
      throw new Error("TabsContent must be used within a Tabs component");
    const { value: o, orientation: r } = t, a = T(() => o.value === n.value), l = T(() => ce(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      r.value === "vertical" ? "mt-0 ml-2" : "",
      n.class
    ));
    return (s, i) => Yt((E(), R("div", {
      class: W(l.value),
      role: "tabpanel",
      "aria-labelledby": `tab-${P(o)}`
    }, [
      B(s.$slots, "default")
    ], 10, Hf)), [
      [Xt, a.value]
    ]);
  }
});
function Fp() {
  const e = S("Cancel"), n = S("Confirm"), t = S(""), o = S(""), r = S(""), a = S(!1), l = S(""), s = S(() => {
    console.warn("Cancel callback not set"), a.value = !1;
  }), i = S(() => {
    console.warn("Confirm callback not set"), a.value = !1;
  });
  function u(c, m, f, p, g = "Confirm", b = "Cancel", w = "") {
    l.value = c, o.value = m, n.value = g, e.value = b, t.value = w, i.value = f || (async () => {
      console.warn("Confirm callback not set"), a.value = !1;
    }), s.value = p || (async () => {
      console.warn("Cancel callback not set"), a.value = !1;
    }), a.value = !0;
  }
  function d(c) {
    r.value = c;
  }
  return {
    cancelButtonText: e,
    cancelCallback: s,
    confirmButtonText: n,
    confirmButtonTheme: t,
    confirmCallback: i,
    description: o,
    doOpen: u,
    processing: r,
    show: a,
    title: l,
    toggleProcessing: d
  };
}
function Wf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ho = { exports: {} };
/*! algoliasearch-lite.umd.js | 4.25.2 | © Algolia, inc. | https://github.com/algolia/algoliasearch-client-javascript */
var Uf = ho.exports, Ta;
function qf() {
  return Ta || (Ta = 1, function(e, n) {
    (function(t, o) {
      e.exports = o();
    })(Uf, function() {
      function t($, M, L) {
        return M in $ ? Object.defineProperty($, M, { value: L, enumerable: !0, configurable: !0, writable: !0 }) : $[M] = L, $;
      }
      function o($, M) {
        var L = Object.keys($);
        if (Object.getOwnPropertySymbols) {
          var F = Object.getOwnPropertySymbols($);
          M && (F = F.filter(function(q) {
            return Object.getOwnPropertyDescriptor($, q).enumerable;
          })), L.push.apply(L, F);
        }
        return L;
      }
      function r($) {
        for (var M = 1; M < arguments.length; M++) {
          var L = arguments[M] != null ? arguments[M] : {};
          M % 2 ? o(Object(L), !0).forEach(function(F) {
            t($, F, L[F]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties($, Object.getOwnPropertyDescriptors(L)) : o(Object(L)).forEach(function(F) {
            Object.defineProperty($, F, Object.getOwnPropertyDescriptor(L, F));
          });
        }
        return $;
      }
      function a($, M) {
        if ($ == null) return {};
        var L, F, q = function(ae, J) {
          if (ae == null) return {};
          var he, Te, xe = {}, Ge = Object.keys(ae);
          for (Te = 0; Te < Ge.length; Te++) he = Ge[Te], J.indexOf(he) >= 0 || (xe[he] = ae[he]);
          return xe;
        }($, M);
        if (Object.getOwnPropertySymbols) {
          var Q = Object.getOwnPropertySymbols($);
          for (F = 0; F < Q.length; F++) L = Q[F], M.indexOf(L) >= 0 || Object.prototype.propertyIsEnumerable.call($, L) && (q[L] = $[L]);
        }
        return q;
      }
      function l($, M) {
        return function(L) {
          if (Array.isArray(L)) return L;
        }($) || function(L, F) {
          if (Symbol.iterator in Object(L) || Object.prototype.toString.call(L) === "[object Arguments]") {
            var q = [], Q = !0, ae = !1, J = void 0;
            try {
              for (var he, Te = L[Symbol.iterator](); !(Q = (he = Te.next()).done) && (q.push(he.value), !F || q.length !== F); Q = !0) ;
            } catch (xe) {
              ae = !0, J = xe;
            } finally {
              try {
                Q || Te.return == null || Te.return();
              } finally {
                if (ae) throw J;
              }
            }
            return q;
          }
        }($, M) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }();
      }
      function s($) {
        return function(M) {
          if (Array.isArray(M)) {
            for (var L = 0, F = new Array(M.length); L < M.length; L++) F[L] = M[L];
            return F;
          }
        }($) || function(M) {
          if (Symbol.iterator in Object(M) || Object.prototype.toString.call(M) === "[object Arguments]") return Array.from(M);
        }($) || function() {
          throw new TypeError("Invalid attempt to spread non-iterable instance");
        }();
      }
      function i($) {
        var M, L = "algoliasearch-client-js-".concat($.key), F = function() {
          return M === void 0 && (M = $.localStorage || window.localStorage), M;
        }, q = function() {
          return JSON.parse(F().getItem(L) || "{}");
        }, Q = function(J) {
          F().setItem(L, JSON.stringify(J));
        }, ae = function() {
          var J = $.timeToLive ? 1e3 * $.timeToLive : null, he = q(), Te = Object.fromEntries(Object.entries(he).filter(function(Ge) {
            return l(Ge, 2)[1].timestamp !== void 0;
          }));
          if (Q(Te), J) {
            var xe = Object.fromEntries(Object.entries(Te).filter(function(Ge) {
              var Ae = l(Ge, 2)[1], et = (/* @__PURE__ */ new Date()).getTime();
              return !(Ae.timestamp + J < et);
            }));
            Q(xe);
          }
        };
        return { get: function(J, he) {
          var Te = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : { miss: function() {
            return Promise.resolve();
          } };
          return Promise.resolve().then(function() {
            ae();
            var xe = JSON.stringify(J);
            return q()[xe];
          }).then(function(xe) {
            return Promise.all([xe ? xe.value : he(), xe !== void 0]);
          }).then(function(xe) {
            var Ge = l(xe, 2), Ae = Ge[0], et = Ge[1];
            return Promise.all([Ae, et || Te.miss(Ae)]);
          }).then(function(xe) {
            return l(xe, 1)[0];
          });
        }, set: function(J, he) {
          return Promise.resolve().then(function() {
            var Te = q();
            return Te[JSON.stringify(J)] = { timestamp: (/* @__PURE__ */ new Date()).getTime(), value: he }, F().setItem(L, JSON.stringify(Te)), he;
          });
        }, delete: function(J) {
          return Promise.resolve().then(function() {
            var he = q();
            delete he[JSON.stringify(J)], F().setItem(L, JSON.stringify(he));
          });
        }, clear: function() {
          return Promise.resolve().then(function() {
            F().removeItem(L);
          });
        } };
      }
      function u($) {
        var M = s($.caches), L = M.shift();
        return L === void 0 ? { get: function(F, q) {
          var Q = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : { miss: function() {
            return Promise.resolve();
          } }, ae = q();
          return ae.then(function(J) {
            return Promise.all([J, Q.miss(J)]);
          }).then(function(J) {
            return l(J, 1)[0];
          });
        }, set: function(F, q) {
          return Promise.resolve(q);
        }, delete: function(F) {
          return Promise.resolve();
        }, clear: function() {
          return Promise.resolve();
        } } : { get: function(F, q) {
          var Q = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : { miss: function() {
            return Promise.resolve();
          } };
          return L.get(F, q, Q).catch(function() {
            return u({ caches: M }).get(F, q, Q);
          });
        }, set: function(F, q) {
          return L.set(F, q).catch(function() {
            return u({ caches: M }).set(F, q);
          });
        }, delete: function(F) {
          return L.delete(F).catch(function() {
            return u({ caches: M }).delete(F);
          });
        }, clear: function() {
          return L.clear().catch(function() {
            return u({ caches: M }).clear();
          });
        } };
      }
      function d() {
        var $ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { serializable: !0 }, M = {};
        return { get: function(L, F) {
          var q = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : { miss: function() {
            return Promise.resolve();
          } }, Q = JSON.stringify(L);
          if (Q in M) return Promise.resolve($.serializable ? JSON.parse(M[Q]) : M[Q]);
          var ae = F(), J = q && q.miss || function() {
            return Promise.resolve();
          };
          return ae.then(function(he) {
            return J(he);
          }).then(function() {
            return ae;
          });
        }, set: function(L, F) {
          return M[JSON.stringify(L)] = $.serializable ? JSON.stringify(F) : F, Promise.resolve(F);
        }, delete: function(L) {
          return delete M[JSON.stringify(L)], Promise.resolve();
        }, clear: function() {
          return M = {}, Promise.resolve();
        } };
      }
      function c($) {
        for (var M = $.length - 1; M > 0; M--) {
          var L = Math.floor(Math.random() * (M + 1)), F = $[M];
          $[M] = $[L], $[L] = F;
        }
        return $;
      }
      function m($, M) {
        return M && Object.keys(M).forEach(function(L) {
          $[L] = M[L]($);
        }), $;
      }
      function f($) {
        for (var M = arguments.length, L = new Array(M > 1 ? M - 1 : 0), F = 1; F < M; F++) L[F - 1] = arguments[F];
        var q = 0;
        return $.replace(/%s/g, function() {
          return encodeURIComponent(L[q++]);
        });
      }
      var p = { WithinQueryParameters: 0, WithinHeaders: 1 };
      function g($, M) {
        var L = $ || {}, F = L.data || {};
        return Object.keys(L).forEach(function(q) {
          ["timeout", "headers", "queryParameters", "data", "cacheable"].indexOf(q) === -1 && (F[q] = L[q]);
        }), { data: Object.entries(F).length > 0 ? F : void 0, timeout: L.timeout || M, headers: L.headers || {}, queryParameters: L.queryParameters || {}, cacheable: L.cacheable };
      }
      var b = { Read: 1, Write: 2, Any: 3 }, w = 1, y = 2, v = 3;
      function x($) {
        var M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : w;
        return r(r({}, $), {}, { status: M, lastUpdate: Date.now() });
      }
      function h($) {
        return typeof $ == "string" ? { protocol: "https", url: $, accept: b.Any } : { protocol: $.protocol || "https", url: $.url, accept: $.accept || b.Any };
      }
      var C = "GET", k = "POST";
      function O($, M) {
        return Promise.all(M.map(function(L) {
          return $.get(L, function() {
            return Promise.resolve(x(L));
          });
        })).then(function(L) {
          var F = L.filter(function(ae) {
            return function(J) {
              return J.status === w || Date.now() - J.lastUpdate > 12e4;
            }(ae);
          }), q = L.filter(function(ae) {
            return function(J) {
              return J.status === v && Date.now() - J.lastUpdate <= 12e4;
            }(ae);
          }), Q = [].concat(s(F), s(q));
          return { getTimeout: function(ae, J) {
            return (q.length === 0 && ae === 0 ? 1 : q.length + 3 + ae) * J;
          }, statelessHosts: Q.length > 0 ? Q.map(function(ae) {
            return h(ae);
          }) : M };
        });
      }
      function A($, M, L, F) {
        var q = [], Q = function(Ae, et) {
          if (!(Ae.method === C || Ae.data === void 0 && et.data === void 0)) {
            var Ee = Array.isArray(Ae.data) ? Ae.data : r(r({}, Ae.data), et.data);
            return JSON.stringify(Ee);
          }
        }(L, F), ae = function(Ae, et) {
          var Ee = r(r({}, Ae.headers), et.headers), Ye = {};
          return Object.keys(Ee).forEach(function(Lt) {
            var gt = Ee[Lt];
            Ye[Lt.toLowerCase()] = gt;
          }), Ye;
        }($, F), J = L.method, he = L.method !== C ? {} : r(r({}, L.data), F.data), Te = r(r(r({ "x-algolia-agent": $.userAgent.value }, $.queryParameters), he), F.queryParameters), xe = 0, Ge = function Ae(et, Ee) {
          var Ye = et.pop();
          if (Ye === void 0) throw { name: "RetryError", message: "Unreachable hosts - your application id may be incorrect. If the error persists, please reach out to the Algolia Support team: https://alg.li/support .", transporterStackTrace: j(q) };
          var Lt = { data: Q, headers: ae, method: J, url: D(Ye, L.path, Te), connectTimeout: Ee(xe, $.timeouts.connect), responseTimeout: Ee(xe, F.timeout) }, gt = function(Ne) {
            var Ce = { request: Lt, response: Ne, host: Ye, triesLeft: et.length };
            return q.push(Ce), Ce;
          }, to = { onSuccess: function(Ne) {
            return function(Ce) {
              try {
                return JSON.parse(Ce.content);
              } catch (Et) {
                throw /* @__PURE__ */ function(Gt, mn) {
                  return { name: "DeserializationError", message: Gt, response: mn };
                }(Et.message, Ce);
              }
            }(Ne);
          }, onRetry: function(Ne) {
            var Ce = gt(Ne);
            return Ne.isTimedOut && xe++, Promise.all([$.logger.info("Retryable failure", K(Ce)), $.hostsCache.set(Ye, x(Ye, Ne.isTimedOut ? v : y))]).then(function() {
              return Ae(et, Ee);
            });
          }, onFail: function(Ne) {
            throw gt(Ne), function(Ce, Et) {
              var Gt = Ce.content, mn = Ce.status, In = Gt;
              try {
                In = JSON.parse(Gt).message;
              } catch {
              }
              return /* @__PURE__ */ function(no, Go, Xl) {
                return { name: "ApiError", message: no, status: Go, transporterStackTrace: Xl };
              }(In, mn, Et);
            }(Ne, j(q));
          } };
          return $.requester.send(Lt).then(function(Ne) {
            return function(Ce, Et) {
              return function(Gt) {
                var mn = Gt.status;
                return Gt.isTimedOut || function(In) {
                  var no = In.isTimedOut, Go = In.status;
                  return !no && ~~Go == 0;
                }(Gt) || ~~(mn / 100) != 2 && ~~(mn / 100) != 4;
              }(Ce) ? Et.onRetry(Ce) : ~~(Ce.status / 100) == 2 ? Et.onSuccess(Ce) : Et.onFail(Ce);
            }(Ne, to);
          });
        };
        return O($.hostsCache, M).then(function(Ae) {
          return Ge(s(Ae.statelessHosts).reverse(), Ae.getTimeout);
        });
      }
      function _($) {
        var M = { value: "Algolia for JavaScript (".concat($, ")"), add: function(L) {
          var F = "; ".concat(L.segment).concat(L.version !== void 0 ? " (".concat(L.version, ")") : "");
          return M.value.indexOf(F) === -1 && (M.value = "".concat(M.value).concat(F)), M;
        } };
        return M;
      }
      function D($, M, L) {
        var F = z(L), q = "".concat($.protocol, "://").concat($.url, "/").concat(M.charAt(0) === "/" ? M.substr(1) : M);
        return F.length && (q += "?".concat(F)), q;
      }
      function z($) {
        return Object.keys($).map(function(M) {
          return f("%s=%s", M, (L = $[M], Object.prototype.toString.call(L) === "[object Object]" || Object.prototype.toString.call(L) === "[object Array]" ? JSON.stringify($[M]) : $[M]));
          var L;
        }).join("&");
      }
      function j($) {
        return $.map(function(M) {
          return K(M);
        });
      }
      function K($) {
        var M = $.request.headers["x-algolia-api-key"] ? { "x-algolia-api-key": "*****" } : {};
        return r(r({}, $), {}, { request: r(r({}, $.request), {}, { headers: r(r({}, $.request.headers), M) }) });
      }
      var Y = function($) {
        var M = $.appId, L = /* @__PURE__ */ function(q, Q, ae) {
          var J = { "x-algolia-api-key": ae, "x-algolia-application-id": Q };
          return { headers: function() {
            return q === p.WithinHeaders ? J : {};
          }, queryParameters: function() {
            return q === p.WithinQueryParameters ? J : {};
          } };
        }($.authMode !== void 0 ? $.authMode : p.WithinHeaders, M, $.apiKey), F = function(q) {
          var Q = q.hostsCache, ae = q.logger, J = q.requester, he = q.requestsCache, Te = q.responsesCache, xe = q.timeouts, Ge = q.userAgent, Ae = q.hosts, et = q.queryParameters, Ee = { hostsCache: Q, logger: ae, requester: J, requestsCache: he, responsesCache: Te, timeouts: xe, userAgent: Ge, headers: q.headers, queryParameters: et, hosts: Ae.map(function(Ye) {
            return h(Ye);
          }), read: function(Ye, Lt) {
            var gt = g(Lt, Ee.timeouts.read), to = function() {
              return A(Ee, Ee.hosts.filter(function(Ce) {
                return (Ce.accept & b.Read) != 0;
              }), Ye, gt);
            };
            if ((gt.cacheable !== void 0 ? gt.cacheable : Ye.cacheable) !== !0) return to();
            var Ne = { request: Ye, mappedRequestOptions: gt, transporter: { queryParameters: Ee.queryParameters, headers: Ee.headers } };
            return Ee.responsesCache.get(Ne, function() {
              return Ee.requestsCache.get(Ne, function() {
                return Ee.requestsCache.set(Ne, to()).then(function(Ce) {
                  return Promise.all([Ee.requestsCache.delete(Ne), Ce]);
                }, function(Ce) {
                  return Promise.all([Ee.requestsCache.delete(Ne), Promise.reject(Ce)]);
                }).then(function(Ce) {
                  var Et = l(Ce, 2);
                  return Et[0], Et[1];
                });
              });
            }, { miss: function(Ce) {
              return Ee.responsesCache.set(Ne, Ce);
            } });
          }, write: function(Ye, Lt) {
            return A(Ee, Ee.hosts.filter(function(gt) {
              return (gt.accept & b.Write) != 0;
            }), Ye, g(Lt, Ee.timeouts.write));
          } };
          return Ee;
        }(r(r({ hosts: [{ url: "".concat(M, "-dsn.algolia.net"), accept: b.Read }, { url: "".concat(M, ".algolia.net"), accept: b.Write }].concat(c([{ url: "".concat(M, "-1.algolianet.com") }, { url: "".concat(M, "-2.algolianet.com") }, { url: "".concat(M, "-3.algolianet.com") }])) }, $), {}, { headers: r(r(r({}, L.headers()), { "content-type": "application/x-www-form-urlencoded" }), $.headers), queryParameters: r(r({}, L.queryParameters()), $.queryParameters) }));
        return m({ transporter: F, appId: M, addAlgoliaAgent: function(q, Q) {
          F.userAgent.add({ segment: q, version: Q });
        }, clearCache: function() {
          return Promise.all([F.requestsCache.clear(), F.responsesCache.clear()]).then(function() {
          });
        } }, $.methods);
      }, Z = function($) {
        return function(M, L) {
          return M.method === C ? $.transporter.read(M, L) : $.transporter.write(M, L);
        };
      }, pe = function($) {
        return function(M) {
          var L = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, F = { transporter: $.transporter, appId: $.appId, indexName: M };
          return m(F, L.methods);
        };
      }, ve = function($) {
        return function(M, L) {
          var F = M.map(function(q) {
            return r(r({}, q), {}, { params: z(q.params || {}) });
          });
          return $.transporter.read({ method: k, path: "1/indexes/*/queries", data: { requests: F }, cacheable: !0 }, L);
        };
      }, ne = function($) {
        return function(M, L) {
          return Promise.all(M.map(function(F) {
            var q = F.params, Q = q.facetName, ae = q.facetQuery, J = a(q, ["facetName", "facetQuery"]);
            return pe($)(F.indexName, { methods: { searchForFacetValues: Me } }).searchForFacetValues(Q, ae, r(r({}, L), J));
          }));
        };
      }, Se = function($) {
        return function(M, L, F) {
          return $.transporter.read({ method: k, path: f("1/answers/%s/prediction", $.indexName), data: { query: M, queryLanguages: L }, cacheable: !0 }, F);
        };
      }, je = function($) {
        return function(M, L) {
          return $.transporter.read({ method: k, path: f("1/indexes/%s/query", $.indexName), data: { query: M }, cacheable: !0 }, L);
        };
      }, Me = function($) {
        return function(M, L, F) {
          return $.transporter.read({ method: k, path: f("1/indexes/%s/facets/%s/query", $.indexName, M), data: { facetQuery: L }, cacheable: !0 }, F);
        };
      }, Mt = 1, dt = 2, X = 3, _e = function($) {
        return function(M, L) {
          var F = M.map(function(q) {
            return r(r({}, q), {}, { threshold: q.threshold || 0 });
          });
          return $.transporter.read({ method: k, path: "1/indexes/*/recommendations", data: { requests: F }, cacheable: !0 }, L);
        };
      };
      function Ke($, M, L) {
        var F, q = { appId: $, apiKey: M, timeouts: { connect: 1, read: 2, write: 30 }, requester: { send: function(Q) {
          return new Promise(function(ae) {
            var J = new XMLHttpRequest();
            J.open(Q.method, Q.url, !0), Object.keys(Q.headers).forEach(function(Ge) {
              return J.setRequestHeader(Ge, Q.headers[Ge]);
            });
            var he, Te = function(Ge, Ae) {
              return setTimeout(function() {
                J.abort(), ae({ status: 0, content: Ae, isTimedOut: !0 });
              }, 1e3 * Ge);
            }, xe = Te(Q.connectTimeout, "Connection timeout");
            J.onreadystatechange = function() {
              J.readyState > J.OPENED && he === void 0 && (clearTimeout(xe), he = Te(Q.responseTimeout, "Socket timeout"));
            }, J.onerror = function() {
              J.status === 0 && (clearTimeout(xe), clearTimeout(he), ae({ content: J.responseText || "Network request failed", status: J.status, isTimedOut: !1 }));
            }, J.onload = function() {
              clearTimeout(xe), clearTimeout(he), ae({ content: J.responseText, status: J.status, isTimedOut: !1 });
            }, J.send(Q.data);
          });
        } }, logger: (F = X, { debug: function(Q, ae) {
          return Mt >= F && console.debug(Q, ae), Promise.resolve();
        }, info: function(Q, ae) {
          return dt >= F && console.info(Q, ae), Promise.resolve();
        }, error: function(Q, ae) {
          return console.error(Q, ae), Promise.resolve();
        } }), responsesCache: d(), requestsCache: d({ serializable: !1 }), hostsCache: u({ caches: [i({ key: "".concat("4.25.2", "-").concat($) }), d()] }), userAgent: _("4.25.2").add({ segment: "Browser", version: "lite" }), authMode: p.WithinQueryParameters };
        return Y(r(r(r({}, q), L), {}, { methods: { search: ve, searchForFacetValues: ne, multipleQueries: ve, multipleSearchForFacetValues: ne, customRequest: Z, initIndex: function(Q) {
          return function(ae) {
            return pe(Q)(ae, { methods: { search: je, searchForFacetValues: Me, findAnswers: Se } });
          };
        }, getRecommendations: _e } }));
      }
      return Ke.version = "4.25.2", Ke;
    });
  }(ho)), ho.exports;
}
var Kf = /* @__PURE__ */ qf();
const Yf = /* @__PURE__ */ Wf(Kf);
class Bp {
  constructor(n) {
    Ho(this, "searchIndex");
    const t = Yf(n.appId, n.searchKey);
    this.searchIndex = t.initIndex(n.indexName);
  }
  async search(n) {
    if (!n)
      return [];
    try {
      const { hits: t } = await this.searchIndex.search(n);
      return t.map((o) => ({
        id: o.objectID,
        url: o.url || "",
        title: o.title || "",
        description: o.description || "",
        ...o
        // Include any additional fields from Algolia
      }));
    } catch (t) {
      return console.error("Algolia search error:", t), [];
    }
  }
}
class Vp {
  constructor(n) {
    Ho(this, "items");
    this.items = n;
  }
  async search(n) {
    if (!n)
      return [];
    const t = n.toLowerCase();
    return this.items.filter((o) => [
      o.title,
      o.description,
      ...o.keywords || []
    ].join(" ").toLowerCase().includes(t)).map((o) => ({
      id: o.id,
      url: o.url,
      title: o.title,
      description: o.description
    })).slice(0, 10);
  }
}
export {
  ep as Alert,
  rp as AlertAction,
  np as AlertDescription,
  op as AlertIcon,
  tp as AlertTitle,
  Bp as AlgoliaSearchStrategy,
  Op as AnnouncementsDrawer,
  ds as Badge,
  Ep as BreadcrumbEllipsis,
  Cp as BreadcrumbItem,
  kp as BreadcrumbLink,
  xp as BreadcrumbList,
  Sp as BreadcrumbPage,
  _p as BreadcrumbSeparator,
  wp as Breadcrumbs,
  Ze as Button,
  ap as CodeBlock,
  qu as ColorPicker,
  Tp as ColumnManager,
  Jo as Combobox,
  Dp as CommandPalette,
  $p as ConfirmationDialog,
  Wr as Dropdown,
  qr as DropdownContent,
  Vn as DropdownItem,
  sp as DropdownLabel,
  Ju as DropdownSeparator,
  ip as DropdownSub,
  up as DropdownSubContent,
  dp as DropdownSubTrigger,
  Ur as DropdownTrigger,
  Pl as EmptyState,
  Pp as FluentQueryBuilder,
  Ma as Input,
  Vp as LocalSearchStrategy,
  cp as Modal,
  mp as ModalBody,
  ld as ModalClose,
  rd as ModalContent,
  vp as ModalFooter,
  fp as ModalHeader,
  pp as ModalTitle,
  dd as Popover,
  Il as Sortable,
  Rp as Tabs,
  Lp as TabsContent,
  Ap as TabsList,
  Ip as TabsNav,
  Mp as TabsTrigger,
  yp as ThemeToggle,
  gp as Tooltip,
  bp as TooltipContent,
  hp as TooltipTrigger,
  Rl as Typeahead,
  Fp as useConfirmationDialog
};
//# sourceMappingURL=pickle-jar-ui.es.js.map
