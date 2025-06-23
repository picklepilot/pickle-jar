var Hl = Object.defineProperty;
var Gl = (e, n, t) => n in e ? Hl(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var Bo = (e, n, t) => Gl(e, typeof n != "symbol" ? n + "" : n, t);
import { defineComponent as j, computed as E, provide as Se, createElementBlock as R, openBlock as O, normalizeClass as z, renderSlot as G, createElementVNode as $, createBlock as pe, withCtx as W, createCommentVNode as ae, inject as me, ref as C, unref as L, h as se, watch as le, onMounted as ie, useSlots as Wl, Fragment as xe, toDisplayString as he, shallowRef as So, getCurrentScope as Ul, onScopeDispose as Ca, shallowReadonly as dn, triggerRef as qr, onUnmounted as we, watchEffect as Le, cloneVNode as Sa, nextTick as He, toRaw as Ft, reactive as Hn, getCurrentInstance as Oa, Teleport as Oo, createVNode as U, renderList as Ke, withModifiers as wn, withKeys as Ea, Transition as st, normalizeStyle as Wt, mergeProps as Qe, normalizeProps as kt, withDirectives as on, vShow as rn, guardReactiveProps as Ht, resolveDynamicComponent as _a, createTextVNode as Gt, useAttrs as ql, createSlots as Kl, resolveComponent as Yl } from "vue";
import bt from "clsx";
import { twMerge as Tt } from "tailwind-merge";
const Xl = /* @__PURE__ */ j({
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
      return Tt(bt(l));
    }
    const t = e, o = E(() => ({
      "bg-sky-50": t.variant === "info" || t.variant === "processing",
      "bg-yellow-50": t.variant === "warning",
      "bg-red-50": t.variant === "error",
      "bg-green-50": t.variant === "success",
      "bg-zinc-50": t.variant === "muted"
    })), r = E(() => ({
      "border-sky-200": t.variant === "info" || t.variant === "processing",
      "border-yellow-200": t.variant === "warning",
      "border-red-200": t.variant === "error",
      "border-green-200": t.variant === "success",
      "border-zinc-200": t.variant === "muted"
    })), a = E(() => ({
      "text-sky-800": t.variant === "info" || t.variant === "processing",
      "text-yellow-800": t.variant === "warning",
      "text-red-800": t.variant === "error",
      "text-green-800": t.variant === "success",
      "text-zinc-800": t.variant === "muted"
    }));
    return Se("alert-context", {
      variant: t.variant,
      bgClasses: o.value,
      borderClasses: r.value,
      colorClass: a.value
    }), (l, s) => (O(), R("div", {
      class: z(
        n(
          l.flush ? "rounded-0" : "rounded-md",
          "relative w-full rounded-lg border border-ring px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current bg-card text-card-foreground",
          l.theme.alert
        )
      )
    }, [
      G(l.$slots, "default")
    ], 2));
  }
}), Jl = /* @__PURE__ */ j({
  __name: "AlertClose",
  emits: ["close"],
  setup(e, { emit: n }) {
    return (t, o) => (O(), R("button", {
      onClick: o[0] || (o[0] = (r) => t.$emit("close", !1)),
      class: "absolute right-4 top-4 text-zinc-400 hover:text-zinc-800"
    }, o[1] || (o[1] = [
      $("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "20",
        fill: "currentColor",
        class: "bi bi-x h-6 w-6",
        viewBox: "0 0 16 16"
      }, [
        $("path", { d: "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" })
      ], -1)
    ])));
  }
}), Cf = /* @__PURE__ */ j({
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
    return (t, o) => (O(), pe(Xl, {
      flush: t.flush,
      variant: t.variant,
      theme: t.theme
    }, {
      default: W(() => [
        G(t.$slots, "default"),
        t.dismissable ? (O(), pe(Jl, {
          key: 0,
          onClose: o[0] || (o[0] = (r) => t.$emit("close", r))
        })) : ae("", !0)
      ]),
      _: 3
    }, 8, ["flush", "variant", "theme"]));
  }
}), Ql = { class: "col-start-2 line-clamp-1 min-h-4 font-medium" }, Sf = /* @__PURE__ */ j({
  __name: "AlertTitle",
  setup(e) {
    return (n, t) => (O(), R("div", Ql, [
      G(n.$slots, "default")
    ]));
  }
}), Zl = { class: "text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed" }, Of = /* @__PURE__ */ j({
  __name: "AlertDescription",
  setup(e) {
    return (n, t) => (O(), R("div", Zl, [
      G(n.$slots, "default")
    ]));
  }
}), es = { class: "shrink-0" }, Ef = /* @__PURE__ */ j({
  __name: "AlertIcon",
  setup(e) {
    return (n, t) => (O(), R("div", es, [
      G(n.$slots, "default")
    ]));
  }
}), ts = { class: "flex items-center" }, _f = /* @__PURE__ */ j({
  __name: "AlertAction",
  setup(e) {
    return (n, t) => (O(), R("div", ts, [
      G(n.$slots, "default")
    ]));
  }
}), ns = /* @__PURE__ */ j({
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
      return Tt(bt(t));
    }
    return (t, o) => (O(), R("span", {
      class: z(
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
      G(t.$slots, "default")
    ], 2));
  }
});
function os(e, n) {
  const t = this;
  let o;
  return function(...r) {
    clearTimeout(o), o = setTimeout(() => {
      e.apply(t, r);
    }, n);
  };
}
function de(...e) {
  return Tt(bt(e));
}
function Fo(...e) {
  return e.join(" ");
}
Fo(
  "relative rounded-lg border border-border rounded-md hover:bg-accent/50 shadow-xs focus-within:outline-none focus-within:ring-3 focus-within:ring-ring/40 transition-[box-shadow,color] flex items-start flex-wrap gap-1 p-1 flex-1 min-w-[120px] border-0 bg-transparent pl-2.5 py-0.5 pr-8 text-sm truncate ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50 absolute inset-y-0 right-0 items-center pr-2 text-muted-foreground size-4 text-inherit transition duration-200 ease-out translate-y-1 opacity-0 translate-y-0 opacity-100 duration-150 ease-in fixed left-0 z-10 overflow-x-hidden overflow-y-auto bg-popover p-3 text-base shadow-lg border focus:outline-hidden sm:text-sm border-t border-border px-2 first:border-t-0 py-2 first:pt-0 last:pb-0 font-medium -mx-2.5 cursor-pointer hover:bg-accent rounded-md px-2 py-1 flex w-full truncate bg-accent opacity-50 pointer-events-none"
), Fo(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 bg-destructive text-destructive-foreground hover:bg-destructive/90 border border-border bg-background hover:bg-accent hover:text-accent-foreground bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:bg-accent hover:text-accent-foreground text-primary underline-offset-4 hover:underline"
), Fo(
  "w-full overflow-hidden h-full border border-border bg-background rounded-lg sm:min-w-60 flex flex-col md:flex-row overflow-y-auto p-3 mb-4 last:mb-0 sortable-drag flex min-w-px grow items-center space-x-2 text-base font-semibold shrink-0 text-sm h-5 w-5 group flex w-full hover:bg-accent/50 rounded-md items-center gap-2 [&.selected]:bg-accent/50 drag-handle shrink-0 text-muted-foreground/70 hover:text-foreground rounded-sm hover:bg-black/5 size-3.5 ml-auto flex items-center space-x-1 p-1 size-4 sticky bottom-0 z-2 gap-2 p-3 bg-background/90 backdrop-blur-sm flex -space-x-px transition duration-200 ease-out translate-y-1 opacity-0 translate-y-0 opacity-100 duration-150 ease-in"
);
const rs = ["aria-disabled", "aria-busy", "aria-expanded", "disabled"], as = {
  key: 0,
  "aria-hidden": "true"
}, ls = { key: 0 }, ss = /* @__PURE__ */ j({
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
    const t = n, o = me("dropdown"), r = C(), a = E(() => {
      var i, u, c, d;
      return (i = o == null ? void 0 : o.triggerRef) == null || i.value, ((c = (u = o == null ? void 0 : o.triggerRef) == null ? void 0 : u.value) == null ? void 0 : c.querySelector("button")) === r.value && ((d = o == null ? void 0 : o.isOpen) == null ? void 0 : d.value) === !0;
    });
    function l(s) {
      s.preventDefault(), t("click", s);
    }
    return (s, i) => (O(), R("button", {
      ref_key: "buttonRef",
      ref: r,
      onClick: l,
      class: z(
        L(de)(
          "inline-flex items-center cursor-pointer justify-center whitespace-nowrap text-sm ring-offset-background focus:outline-none focus:ring-3 focus:ring-ring/30 transition-[box-shadow,color] disabled:pointer-events-none disabled:opacity-50 gap-1.5",
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
          s.size === "default" && "px-4 has-[svg]:pl-3 py-2",
          s.size === "lg" && "px-5 py-2 text-lg has-[svg]:pl-4",
          s.size === "sm" && "px-3 py-1.5 has-[svg]:pl-2",
          s.size === "xs" && "px-2 py-1 has-[svg]:pl-1",
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
      G(s.$slots, "default", {}, void 0, !0),
      s.processing ? (O(), R("span", as, [
        s.$slots.processing ? (O(), R("span", ls, [
          G(s.$slots, "processing", {}, void 0, !0)
        ])) : ae("", !0)
      ])) : ae("", !0)
    ], 10, rs));
  }
}), Gn = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [o, r] of n)
    t[o] = r;
  return t;
}, ot = /* @__PURE__ */ Gn(ss, [["__scopeId", "data-v-727def13"]]);
/**
 * @license lucide-vue-next v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kr = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), is = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (n, t, o) => o ? o.toUpperCase() : t.toLowerCase()
), us = (e) => {
  const n = is(e);
  return n.charAt(0).toUpperCase() + n.slice(1);
}, cs = (...e) => e.filter((n, t, o) => !!n && n.trim() !== "" && o.indexOf(n) === t).join(" ").trim();
/**
 * @license lucide-vue-next v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Qn = {
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
const ds = ({ size: e, strokeWidth: n = 2, absoluteStrokeWidth: t, color: o, iconNode: r, name: a, class: l, ...s }, { slots: i }) => se(
  "svg",
  {
    ...Qn,
    width: e || Qn.width,
    height: e || Qn.height,
    stroke: o || Qn.stroke,
    "stroke-width": t ? Number(n) * 24 / Number(e) : n,
    class: cs(
      "lucide",
      ...a ? [`lucide-${Kr(us(a))}-icon`, `lucide-${Kr(a)}`] : ["lucide-icon"]
    ),
    ...s
  },
  [...r.map((u) => se(...u)), ...i.default ? [i.default()] : []]
);
/**
 * @license lucide-vue-next v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yt = (e, n) => (t, { slots: o }) => se(
  ds,
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
const fs = Yt("check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-vue-next v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hr = Yt("chevron-down", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-vue-next v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ps = Yt("clipboard", [
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
const ms = Yt("ellipsis-vertical", [
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
const vs = Yt("grip-horizontal", [
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
const hs = Yt("loader", [
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
const gs = Yt("trash-2", [
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
const gr = Yt("x", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
function Ta() {
  const e = C({
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
  return le(
    () => e.value,
    (a) => {
      console.log("Theme state changed:", a);
    },
    { deep: !0 }
  ), ie(() => {
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
    isDark: E(() => e.value.isDark),
    themeClass: E(() => e.value.themeClass),
    toggleTheme: t,
    setTheme: o,
    updateThemeState: n
  };
}
const bs = { key: 2 }, ys = ["innerHTML"], ws = { class: "text-sm" }, xs = /* @__PURE__ */ j({
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
    }, t = (h) => {
      const k = h.toLowerCase();
      return n[k] || k;
    }, o = /* @__PURE__ */ new Map();
    function r(...h) {
      return Tt(bt(h));
    }
    const a = e, l = Wl(), s = C("demo"), i = C(""), u = C(!0), c = C(""), d = C(!1), m = C(null), f = E(() => !!l.demo), { isDark: p } = Ta(), v = E(() => a.autoTheme ? p.value ? a.darkTheme : a.lightTheme : a.shikiTheme), g = async () => {
      try {
        u.value = !0, c.value = "";
        const h = t(a.language), k = `${h}-${v.value}`;
        if (o.has(k)) {
          m.value = o.get(k), await w();
          return;
        }
        const { getSingletonHighlighter: b } = await import("shiki");
        m.value = await b({
          themes: [v.value],
          langs: [h]
        }), o.set(k, m.value), await w();
      } catch (h) {
        console.error("Failed to initialize highlighter:", h), c.value = h instanceof Error ? h.message : "Failed to initialize syntax highlighter";
      } finally {
        u.value = !1;
      }
    }, w = async () => {
      var h;
      if (m.value)
        try {
          const k = t(a.language), b = {
            lang: k,
            theme: v.value,
            colorReplacements: {
              "#24292e": "#171717",
              "#ffffff": "#f5f5f5",
              "#fff": "#f5f5f5"
            }
          }, _ = {
            ...b,
            ...a.codeToHtmlOptions,
            // Ensure lang and theme are always set correctly
            lang: k,
            theme: v.value,
            // Merge colorReplacements if provided
            colorReplacements: {
              ...b.colorReplacements,
              ...(h = a.codeToHtmlOptions) == null ? void 0 : h.colorReplacements
            }
          };
          i.value = m.value.codeToHtml(
            a.code,
            _
          );
        } catch (k) {
          console.error("Failed to highlight code:", k), c.value = k instanceof Error ? k.message : "Failed to highlight code";
        }
    }, y = async () => {
      try {
        await navigator.clipboard.writeText(a.code), d.value = !0, setTimeout(() => {
          d.value = !1;
        }, 2e3);
      } catch (h) {
        console.error("Failed to copy to clipboard:", h);
      }
    };
    return le(
      [
        () => a.code,
        () => a.language,
        v,
        () => a.codeToHtmlOptions
      ],
      async (h, k) => {
        h[1] !== (k == null ? void 0 : k[1]) ? await g() : await w();
      },
      {
        immediate: !0
      }
    ), ie(g), (h, k) => (O(), R("div", {
      class: z(
        r(
          "relative overflow-hidden rounded-lg border border-border bg-muted/50",
          h.customTheme.container
        )
      )
    }, [
      h.showHeader ? (O(), R("div", {
        key: 0,
        class: z(
          r(
            "flex border-b border-border bg-muted/30 h-10 pr-4",
            h.customTheme.tabNav
          )
        )
      }, [
        f.value ? (O(), R(xe, { key: 0 }, [
          $("button", {
            onClick: k[0] || (k[0] = (b) => s.value = "demo"),
            class: z(
              r(
                "px-4 py-2 text-sm font-medium transition-colors",
                s.value === "demo" ? "bg-background text-foreground border-b-2 border-primary" : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              )
            )
          }, " Demo ", 2),
          $("button", {
            onClick: k[1] || (k[1] = (b) => s.value = "code"),
            class: z(
              r(
                "px-4 py-2 text-sm font-medium transition-colors",
                s.value === "code" ? "bg-background text-foreground border-b-2 border-primary" : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              )
            )
          }, " Code ", 2)
        ], 64)) : ae("", !0),
        $("span", {
          class: z(
            r(
              "ml-auto self-center font-mono text-muted-foreground capitalize text-sm",
              h.customTheme.languageLabel
            )
          )
        }, he(h.language), 3)
      ], 2)) : ae("", !0),
      f.value && s.value === "demo" ? (O(), R("div", {
        key: 1,
        class: z(r("p-4", h.customTheme.demo))
      }, [
        G(h.$slots, "demo", {}, void 0, !0)
      ], 2)) : ae("", !0),
      !f.value || s.value === "code" ? (O(), R("div", bs, [
        $("div", {
          class: z(r("relative", h.customTheme.content))
        }, [
          h.showCopyButton ? (O(), pe(ot, {
            key: 0,
            onClick: y,
            class: z(
              r(
                "absolute right-2 top-2 z-10 inline-flex items-center gap-1 rounded bg-transparent size-9 px-2 py-1 text-xs font-medium text-muted-foreground transition-colors hover:bg-transparent hover:text-accent-foreground",
                h.customTheme.copyButton
              )
            ),
            "aria-label": h.copyButtonLabel,
            variant: "ghost",
            size: "sm"
          }, {
            default: W(() => [
              d.value ? (O(), pe(L(fs), {
                key: 0,
                class: "size-4 text-green-500 shrink-0"
              })) : (O(), pe(L(ps), {
                key: 1,
                class: "size-4 shrink-0"
              }))
            ]),
            _: 1
          }, 8, ["class", "aria-label"])) : ae("", !0),
          $("div", {
            class: z(r("overflow-auto max-h-96", h.customTheme.content))
          }, [
            u.value ? (O(), R("div", {
              key: 1,
              class: z(
                r(
                  "flex items-center justify-center py-8 text-muted-foreground",
                  h.customTheme.loading
                )
              )
            }, k[2] || (k[2] = [
              $("span", { class: "text-sm" }, "Loading syntax highlighting...", -1)
            ]), 2)) : (O(), R("div", {
              key: 0,
              class: z(
                r(
                  "font-mono text-sm leading-relaxed [&>pre]:p-4",
                  h.customTheme.pre
                )
              ),
              innerHTML: i.value
            }, null, 10, ys)),
            c.value ? (O(), R("div", {
              key: 2,
              class: z(
                r(
                  "flex items-center justify-center py-8 text-destructive",
                  h.customTheme.error
                )
              )
            }, [
              $("span", ws, he(c.value), 1)
            ], 2)) : ae("", !0)
          ], 2)
        ], 2)
      ])) : ae("", !0)
    ], 2));
  }
}), Tf = /* @__PURE__ */ Gn(xs, [["__scopeId", "data-v-50694f4e"]]), ks = ["disabled", "type", "placeholder", "value"], Da = /* @__PURE__ */ j({
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
      return O(), R("input", {
        disabled: r.disabled,
        type: r.type,
        placeholder: r.placeholder,
        value: r.modelValue ?? r.value,
        onInput: o,
        class: z(
          L(de)(
            "flex w-full rounded-md border border-ring bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground/70 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40 transition-[box-shadow,color] disabled:cursor-not-allowed disabled:opacity-50",
            ((l = r.theme) == null ? void 0 : l.input) || ""
          )
        )
      }, null, 42, ks);
    };
  }
}), Cs = ["top", "right", "bottom", "left"], Yr = ["start", "end"], Xr = /* @__PURE__ */ Cs.reduce((e, n) => e.concat(n, n + "-" + Yr[0], n + "-" + Yr[1]), []), Ut = Math.min, nt = Math.max, po = Math.round, Zn = Math.floor, Ct = (e) => ({
  x: e,
  y: e
}), Ss = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Os = {
  start: "end",
  end: "start"
};
function nr(e, n, t) {
  return nt(e, Ut(n, t));
}
function At(e, n) {
  return typeof e == "function" ? e(n) : e;
}
function vt(e) {
  return e.split("-")[0];
}
function mt(e) {
  return e.split("-")[1];
}
function br(e) {
  return e === "x" ? "y" : "x";
}
function yr(e) {
  return e === "y" ? "height" : "width";
}
function xt(e) {
  return ["top", "bottom"].includes(vt(e)) ? "y" : "x";
}
function wr(e) {
  return br(xt(e));
}
function $a(e, n, t) {
  t === void 0 && (t = !1);
  const o = mt(e), r = wr(e), a = yr(r);
  let l = r === "x" ? o === (t ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return n.reference[a] > n.floating[a] && (l = vo(l)), [l, vo(l)];
}
function Es(e) {
  const n = vo(e);
  return [mo(e), n, mo(n)];
}
function mo(e) {
  return e.replace(/start|end/g, (n) => Os[n]);
}
function _s(e, n, t) {
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
function Ts(e, n, t, o) {
  const r = mt(e);
  let a = _s(vt(e), t === "start", o);
  return r && (a = a.map((l) => l + "-" + r), n && (a = a.concat(a.map(mo)))), a;
}
function vo(e) {
  return e.replace(/left|right|bottom|top/g, (n) => Ss[n]);
}
function Ds(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Pa(e) {
  return typeof e != "number" ? Ds(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function ho(e) {
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
function Jr(e, n, t) {
  let {
    reference: o,
    floating: r
  } = e;
  const a = xt(n), l = wr(n), s = yr(l), i = vt(n), u = a === "y", c = o.x + o.width / 2 - r.width / 2, d = o.y + o.height / 2 - r.height / 2, m = o[s] / 2 - r[s] / 2;
  let f;
  switch (i) {
    case "top":
      f = {
        x: c,
        y: o.y - r.height
      };
      break;
    case "bottom":
      f = {
        x: c,
        y: o.y + o.height
      };
      break;
    case "right":
      f = {
        x: o.x + o.width,
        y: d
      };
      break;
    case "left":
      f = {
        x: o.x - r.width,
        y: d
      };
      break;
    default:
      f = {
        x: o.x,
        y: o.y
      };
  }
  switch (mt(n)) {
    case "start":
      f[l] -= m * (t && u ? -1 : 1);
      break;
    case "end":
      f[l] += m * (t && u ? -1 : 1);
      break;
  }
  return f;
}
const $s = async (e, n, t) => {
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
    x: c,
    y: d
  } = Jr(u, o, i), m = o, f = {}, p = 0;
  for (let v = 0; v < s.length; v++) {
    const {
      name: g,
      fn: w
    } = s[v], {
      x: y,
      y: h,
      data: k,
      reset: b
    } = await w({
      x: c,
      y: d,
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
    c = y ?? c, d = h ?? d, f = {
      ...f,
      [g]: {
        ...f[g],
        ...k
      }
    }, b && p <= 50 && (p++, typeof b == "object" && (b.placement && (m = b.placement), b.rects && (u = b.rects === !0 ? await l.getElementRects({
      reference: e,
      floating: n,
      strategy: r
    }) : b.rects), {
      x: c,
      y: d
    } = Jr(u, m, i)), v = -1);
  }
  return {
    x: c,
    y: d,
    placement: m,
    strategy: r,
    middlewareData: f
  };
};
async function Eo(e, n) {
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
    rootBoundary: c = "viewport",
    elementContext: d = "floating",
    altBoundary: m = !1,
    padding: f = 0
  } = At(n, e), p = Pa(f), g = s[m ? d === "floating" ? "reference" : "floating" : d], w = ho(await a.getClippingRect({
    element: (t = await (a.isElement == null ? void 0 : a.isElement(g))) == null || t ? g : g.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(s.floating)),
    boundary: u,
    rootBoundary: c,
    strategy: i
  })), y = d === "floating" ? {
    x: o,
    y: r,
    width: l.floating.width,
    height: l.floating.height
  } : l.reference, h = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(s.floating)), k = await (a.isElement == null ? void 0 : a.isElement(h)) ? await (a.getScale == null ? void 0 : a.getScale(h)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, b = ho(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: y,
    offsetParent: h,
    strategy: i
  }) : y);
  return {
    top: (w.top - b.top + p.top) / k.y,
    bottom: (b.bottom - w.bottom + p.bottom) / k.y,
    left: (w.left - b.left + p.left) / k.x,
    right: (b.right - w.right + p.right) / k.x
  };
}
const Ps = (e) => ({
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
      padding: c = 0
    } = At(e, n) || {};
    if (u == null)
      return {};
    const d = Pa(c), m = {
      x: t,
      y: o
    }, f = wr(r), p = yr(f), v = await l.getDimensions(u), g = f === "y", w = g ? "top" : "left", y = g ? "bottom" : "right", h = g ? "clientHeight" : "clientWidth", k = a.reference[p] + a.reference[f] - m[f] - a.floating[p], b = m[f] - a.reference[f], _ = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(u));
    let S = _ ? _[h] : 0;
    (!S || !await (l.isElement == null ? void 0 : l.isElement(_))) && (S = s.floating[h] || a.floating[p]);
    const T = k / 2 - b / 2, X = S / 2 - v[p] / 2 - 1, P = Ut(d[w], X), V = Ut(d[y], X), K = P, x = S - v[p] - V, I = S / 2 - v[p] / 2 + T, B = nr(K, I, x), Y = !i.arrow && mt(r) != null && I !== B && a.reference[p] / 2 - (I < K ? P : V) - v[p] / 2 < 0, ne = Y ? I < K ? I - K : I - x : 0;
    return {
      [f]: m[f] + ne,
      data: {
        [f]: B,
        centerOffset: I - B - ne,
        ...Y && {
          alignmentOffset: ne
        }
      },
      reset: Y
    };
  }
});
function Is(e, n, t) {
  return (e ? [...t.filter((r) => mt(r) === e), ...t.filter((r) => mt(r) !== e)] : t.filter((r) => vt(r) === r)).filter((r) => e ? mt(r) === e || (n ? mo(r) !== r : !1) : !0);
}
const As = function(e) {
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
        crossAxis: c = !1,
        alignment: d,
        allowedPlacements: m = Xr,
        autoAlignment: f = !0,
        ...p
      } = At(e, n), v = d !== void 0 || m === Xr ? Is(d || null, f, m) : m, g = await Eo(n, p), w = ((t = l.autoPlacement) == null ? void 0 : t.index) || 0, y = v[w];
      if (y == null)
        return {};
      const h = $a(y, a, await (i.isRTL == null ? void 0 : i.isRTL(u.floating)));
      if (s !== y)
        return {
          reset: {
            placement: v[0]
          }
        };
      const k = [g[vt(y)], g[h[0]], g[h[1]]], b = [...((o = l.autoPlacement) == null ? void 0 : o.overflows) || [], {
        placement: y,
        overflows: k
      }], _ = v[w + 1];
      if (_)
        return {
          data: {
            index: w + 1,
            overflows: b
          },
          reset: {
            placement: _
          }
        };
      const S = b.map((P) => {
        const V = mt(P.placement);
        return [P.placement, V && c ? (
          // Check along the mainAxis and main crossAxis side.
          P.overflows.slice(0, 2).reduce((K, x) => K + x, 0)
        ) : (
          // Check only the mainAxis.
          P.overflows[0]
        ), P.overflows];
      }).sort((P, V) => P[1] - V[1]), X = ((r = S.filter((P) => P[2].slice(
        0,
        // Aligned placements should not check their opposite crossAxis
        // side.
        mt(P[0]) ? 2 : 3
      ).every((V) => V <= 0))[0]) == null ? void 0 : r[0]) || S[0][0];
      return X !== s ? {
        data: {
          index: w + 1,
          overflows: b
        },
        reset: {
          placement: X
        }
      } : {};
    }
  };
}, Rs = function(e) {
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
        mainAxis: c = !0,
        crossAxis: d = !0,
        fallbackPlacements: m,
        fallbackStrategy: f = "bestFit",
        fallbackAxisSideDirection: p = "none",
        flipAlignment: v = !0,
        ...g
      } = At(e, n);
      if ((t = a.arrow) != null && t.alignmentOffset)
        return {};
      const w = vt(r), y = xt(s), h = vt(s) === s, k = await (i.isRTL == null ? void 0 : i.isRTL(u.floating)), b = m || (h || !v ? [vo(s)] : Es(s)), _ = p !== "none";
      !m && _ && b.push(...Ts(s, v, p, k));
      const S = [s, ...b], T = await Eo(n, g), X = [];
      let P = ((o = a.flip) == null ? void 0 : o.overflows) || [];
      if (c && X.push(T[w]), d) {
        const I = $a(r, l, k);
        X.push(T[I[0]], T[I[1]]);
      }
      if (P = [...P, {
        placement: r,
        overflows: X
      }], !X.every((I) => I <= 0)) {
        var V, K;
        const I = (((V = a.flip) == null ? void 0 : V.index) || 0) + 1, B = S[I];
        if (B && (!(d === "alignment" ? y !== xt(B) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        P.every((fe) => fe.overflows[0] > 0 && xt(fe.placement) === y)))
          return {
            data: {
              index: I,
              overflows: P
            },
            reset: {
              placement: B
            }
          };
        let Y = (K = P.filter((ne) => ne.overflows[0] <= 0).sort((ne, fe) => ne.overflows[1] - fe.overflows[1])[0]) == null ? void 0 : K.placement;
        if (!Y)
          switch (f) {
            case "bestFit": {
              var x;
              const ne = (x = P.filter((fe) => {
                if (_) {
                  const oe = xt(fe.placement);
                  return oe === y || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  oe === "y";
                }
                return !0;
              }).map((fe) => [fe.placement, fe.overflows.filter((oe) => oe > 0).reduce((oe, Oe) => oe + Oe, 0)]).sort((fe, oe) => fe[1] - oe[1])[0]) == null ? void 0 : x[0];
              ne && (Y = ne);
              break;
            }
            case "initialPlacement":
              Y = s;
              break;
          }
        if (r !== Y)
          return {
            reset: {
              placement: Y
            }
          };
      }
      return {};
    }
  };
};
async function Ms(e, n) {
  const {
    placement: t,
    platform: o,
    elements: r
  } = e, a = await (o.isRTL == null ? void 0 : o.isRTL(r.floating)), l = vt(t), s = mt(t), i = xt(t) === "y", u = ["left", "top"].includes(l) ? -1 : 1, c = a && i ? -1 : 1, d = At(n, e);
  let {
    mainAxis: m,
    crossAxis: f,
    alignmentAxis: p
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: d.mainAxis || 0,
    crossAxis: d.crossAxis || 0,
    alignmentAxis: d.alignmentAxis
  };
  return s && typeof p == "number" && (f = s === "end" ? p * -1 : p), i ? {
    x: f * c,
    y: m * u
  } : {
    x: m * u,
    y: f * c
  };
}
const Ls = function(e) {
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
      } = n, i = await Ms(n, e);
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
}, Bs = function(e) {
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
          fn: (g) => {
            let {
              x: w,
              y
            } = g;
            return {
              x: w,
              y
            };
          }
        },
        ...i
      } = At(e, n), u = {
        x: t,
        y: o
      }, c = await Eo(n, i), d = xt(vt(r)), m = br(d);
      let f = u[m], p = u[d];
      if (a) {
        const g = m === "y" ? "top" : "left", w = m === "y" ? "bottom" : "right", y = f + c[g], h = f - c[w];
        f = nr(y, f, h);
      }
      if (l) {
        const g = d === "y" ? "top" : "left", w = d === "y" ? "bottom" : "right", y = p + c[g], h = p - c[w];
        p = nr(y, p, h);
      }
      const v = s.fn({
        ...n,
        [m]: f,
        [d]: p
      });
      return {
        ...v,
        data: {
          x: v.x - t,
          y: v.y - o,
          enabled: {
            [m]: a,
            [d]: l
          }
        }
      };
    }
  };
}, Fs = function(e) {
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
      } = At(e, n), c = {
        x: t,
        y: o
      }, d = xt(r), m = br(d);
      let f = c[m], p = c[d];
      const v = At(s, n), g = typeof v == "number" ? {
        mainAxis: v,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...v
      };
      if (i) {
        const h = m === "y" ? "height" : "width", k = a.reference[m] - a.floating[h] + g.mainAxis, b = a.reference[m] + a.reference[h] - g.mainAxis;
        f < k ? f = k : f > b && (f = b);
      }
      if (u) {
        var w, y;
        const h = m === "y" ? "width" : "height", k = ["top", "left"].includes(vt(r)), b = a.reference[d] - a.floating[h] + (k && ((w = l.offset) == null ? void 0 : w[d]) || 0) + (k ? 0 : g.crossAxis), _ = a.reference[d] + a.reference[h] + (k ? 0 : ((y = l.offset) == null ? void 0 : y[d]) || 0) - (k ? g.crossAxis : 0);
        p < b ? p = b : p > _ && (p = _);
      }
      return {
        [m]: f,
        [d]: p
      };
    }
  };
}, Ns = function(e) {
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
      } = At(e, n), c = await Eo(n, u), d = vt(r), m = mt(r), f = xt(r) === "y", {
        width: p,
        height: v
      } = a.floating;
      let g, w;
      d === "top" || d === "bottom" ? (g = d, w = m === (await (l.isRTL == null ? void 0 : l.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (w = d, g = m === "end" ? "top" : "bottom");
      const y = v - c.top - c.bottom, h = p - c.left - c.right, k = Ut(v - c[g], y), b = Ut(p - c[w], h), _ = !n.middlewareData.shift;
      let S = k, T = b;
      if ((t = n.middlewareData.shift) != null && t.enabled.x && (T = h), (o = n.middlewareData.shift) != null && o.enabled.y && (S = y), _ && !m) {
        const P = nt(c.left, 0), V = nt(c.right, 0), K = nt(c.top, 0), x = nt(c.bottom, 0);
        f ? T = p - 2 * (P !== 0 || V !== 0 ? P + V : nt(c.left, c.right)) : S = v - 2 * (K !== 0 || x !== 0 ? K + x : nt(c.top, c.bottom));
      }
      await i({
        ...n,
        availableWidth: T,
        availableHeight: S
      });
      const X = await l.getDimensions(s.floating);
      return p !== X.width || v !== X.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function _o() {
  return typeof window < "u";
}
function sn(e) {
  return xr(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function at(e) {
  var n;
  return (e == null || (n = e.ownerDocument) == null ? void 0 : n.defaultView) || window;
}
function Dt(e) {
  var n;
  return (n = (xr(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : n.documentElement;
}
function xr(e) {
  return _o() ? e instanceof Node || e instanceof at(e).Node : !1;
}
function ht(e) {
  return _o() ? e instanceof Element || e instanceof at(e).Element : !1;
}
function Ot(e) {
  return _o() ? e instanceof HTMLElement || e instanceof at(e).HTMLElement : !1;
}
function Qr(e) {
  return !_o() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof at(e).ShadowRoot;
}
function Wn(e) {
  const {
    overflow: n,
    overflowX: t,
    overflowY: o,
    display: r
  } = gt(e);
  return /auto|scroll|overlay|hidden|clip/.test(n + o + t) && !["inline", "contents"].includes(r);
}
function Vs(e) {
  return ["table", "td", "th"].includes(sn(e));
}
function To(e) {
  return [":popover-open", ":modal"].some((n) => {
    try {
      return e.matches(n);
    } catch {
      return !1;
    }
  });
}
function kr(e) {
  const n = Cr(), t = ht(e) ? gt(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((o) => t[o] ? t[o] !== "none" : !1) || (t.containerType ? t.containerType !== "normal" : !1) || !n && (t.backdropFilter ? t.backdropFilter !== "none" : !1) || !n && (t.filter ? t.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((o) => (t.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (t.contain || "").includes(o));
}
function zs(e) {
  let n = qt(e);
  for (; Ot(n) && !xn(n); ) {
    if (kr(n))
      return n;
    if (To(n))
      return null;
    n = qt(n);
  }
  return null;
}
function Cr() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function xn(e) {
  return ["html", "body", "#document"].includes(sn(e));
}
function gt(e) {
  return at(e).getComputedStyle(e);
}
function Do(e) {
  return ht(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function qt(e) {
  if (sn(e) === "html")
    return e;
  const n = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Qr(e) && e.host || // Fallback.
    Dt(e)
  );
  return Qr(n) ? n.host : n;
}
function Ia(e) {
  const n = qt(e);
  return xn(n) ? e.ownerDocument ? e.ownerDocument.body : e.body : Ot(n) && Wn(n) ? n : Ia(n);
}
function Vn(e, n, t) {
  var o;
  n === void 0 && (n = []), t === void 0 && (t = !0);
  const r = Ia(e), a = r === ((o = e.ownerDocument) == null ? void 0 : o.body), l = at(r);
  if (a) {
    const s = or(l);
    return n.concat(l, l.visualViewport || [], Wn(r) ? r : [], s && t ? Vn(s) : []);
  }
  return n.concat(r, Vn(r, [], t));
}
function or(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Aa(e) {
  const n = gt(e);
  let t = parseFloat(n.width) || 0, o = parseFloat(n.height) || 0;
  const r = Ot(e), a = r ? e.offsetWidth : t, l = r ? e.offsetHeight : o, s = po(t) !== a || po(o) !== l;
  return s && (t = a, o = l), {
    width: t,
    height: o,
    $: s
  };
}
function Sr(e) {
  return ht(e) ? e : e.contextElement;
}
function bn(e) {
  const n = Sr(e);
  if (!Ot(n))
    return Ct(1);
  const t = n.getBoundingClientRect(), {
    width: o,
    height: r,
    $: a
  } = Aa(n);
  let l = (a ? po(t.width) : t.width) / o, s = (a ? po(t.height) : t.height) / r;
  return (!l || !Number.isFinite(l)) && (l = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: l,
    y: s
  };
}
const js = /* @__PURE__ */ Ct(0);
function Ra(e) {
  const n = at(e);
  return !Cr() || !n.visualViewport ? js : {
    x: n.visualViewport.offsetLeft,
    y: n.visualViewport.offsetTop
  };
}
function Hs(e, n, t) {
  return n === void 0 && (n = !1), !t || n && t !== at(e) ? !1 : n;
}
function ln(e, n, t, o) {
  n === void 0 && (n = !1), t === void 0 && (t = !1);
  const r = e.getBoundingClientRect(), a = Sr(e);
  let l = Ct(1);
  n && (o ? ht(o) && (l = bn(o)) : l = bn(e));
  const s = Hs(a, t, o) ? Ra(a) : Ct(0);
  let i = (r.left + s.x) / l.x, u = (r.top + s.y) / l.y, c = r.width / l.x, d = r.height / l.y;
  if (a) {
    const m = at(a), f = o && ht(o) ? at(o) : o;
    let p = m, v = or(p);
    for (; v && o && f !== p; ) {
      const g = bn(v), w = v.getBoundingClientRect(), y = gt(v), h = w.left + (v.clientLeft + parseFloat(y.paddingLeft)) * g.x, k = w.top + (v.clientTop + parseFloat(y.paddingTop)) * g.y;
      i *= g.x, u *= g.y, c *= g.x, d *= g.y, i += h, u += k, p = at(v), v = or(p);
    }
  }
  return ho({
    width: c,
    height: d,
    x: i,
    y: u
  });
}
function Or(e, n) {
  const t = Do(e).scrollLeft;
  return n ? n.left + t : ln(Dt(e)).left + t;
}
function Ma(e, n, t) {
  t === void 0 && (t = !1);
  const o = e.getBoundingClientRect(), r = o.left + n.scrollLeft - (t ? 0 : (
    // RTL <body> scrollbar.
    Or(e, o)
  )), a = o.top + n.scrollTop;
  return {
    x: r,
    y: a
  };
}
function Gs(e) {
  let {
    elements: n,
    rect: t,
    offsetParent: o,
    strategy: r
  } = e;
  const a = r === "fixed", l = Dt(o), s = n ? To(n.floating) : !1;
  if (o === l || s && a)
    return t;
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = Ct(1);
  const c = Ct(0), d = Ot(o);
  if ((d || !d && !a) && ((sn(o) !== "body" || Wn(l)) && (i = Do(o)), Ot(o))) {
    const f = ln(o);
    u = bn(o), c.x = f.x + o.clientLeft, c.y = f.y + o.clientTop;
  }
  const m = l && !d && !a ? Ma(l, i, !0) : Ct(0);
  return {
    width: t.width * u.x,
    height: t.height * u.y,
    x: t.x * u.x - i.scrollLeft * u.x + c.x + m.x,
    y: t.y * u.y - i.scrollTop * u.y + c.y + m.y
  };
}
function Ws(e) {
  return Array.from(e.getClientRects());
}
function Us(e) {
  const n = Dt(e), t = Do(e), o = e.ownerDocument.body, r = nt(n.scrollWidth, n.clientWidth, o.scrollWidth, o.clientWidth), a = nt(n.scrollHeight, n.clientHeight, o.scrollHeight, o.clientHeight);
  let l = -t.scrollLeft + Or(e);
  const s = -t.scrollTop;
  return gt(o).direction === "rtl" && (l += nt(n.clientWidth, o.clientWidth) - r), {
    width: r,
    height: a,
    x: l,
    y: s
  };
}
function qs(e, n) {
  const t = at(e), o = Dt(e), r = t.visualViewport;
  let a = o.clientWidth, l = o.clientHeight, s = 0, i = 0;
  if (r) {
    a = r.width, l = r.height;
    const u = Cr();
    (!u || u && n === "fixed") && (s = r.offsetLeft, i = r.offsetTop);
  }
  return {
    width: a,
    height: l,
    x: s,
    y: i
  };
}
function Ks(e, n) {
  const t = ln(e, !0, n === "fixed"), o = t.top + e.clientTop, r = t.left + e.clientLeft, a = Ot(e) ? bn(e) : Ct(1), l = e.clientWidth * a.x, s = e.clientHeight * a.y, i = r * a.x, u = o * a.y;
  return {
    width: l,
    height: s,
    x: i,
    y: u
  };
}
function Zr(e, n, t) {
  let o;
  if (n === "viewport")
    o = qs(e, t);
  else if (n === "document")
    o = Us(Dt(e));
  else if (ht(n))
    o = Ks(n, t);
  else {
    const r = Ra(e);
    o = {
      x: n.x - r.x,
      y: n.y - r.y,
      width: n.width,
      height: n.height
    };
  }
  return ho(o);
}
function La(e, n) {
  const t = qt(e);
  return t === n || !ht(t) || xn(t) ? !1 : gt(t).position === "fixed" || La(t, n);
}
function Ys(e, n) {
  const t = n.get(e);
  if (t)
    return t;
  let o = Vn(e, [], !1).filter((s) => ht(s) && sn(s) !== "body"), r = null;
  const a = gt(e).position === "fixed";
  let l = a ? qt(e) : e;
  for (; ht(l) && !xn(l); ) {
    const s = gt(l), i = kr(l);
    !i && s.position === "fixed" && (r = null), (a ? !i && !r : !i && s.position === "static" && !!r && ["absolute", "fixed"].includes(r.position) || Wn(l) && !i && La(e, l)) ? o = o.filter((c) => c !== l) : r = s, l = qt(l);
  }
  return n.set(e, o), o;
}
function Xs(e) {
  let {
    element: n,
    boundary: t,
    rootBoundary: o,
    strategy: r
  } = e;
  const l = [...t === "clippingAncestors" ? To(n) ? [] : Ys(n, this._c) : [].concat(t), o], s = l[0], i = l.reduce((u, c) => {
    const d = Zr(n, c, r);
    return u.top = nt(d.top, u.top), u.right = Ut(d.right, u.right), u.bottom = Ut(d.bottom, u.bottom), u.left = nt(d.left, u.left), u;
  }, Zr(n, s, r));
  return {
    width: i.right - i.left,
    height: i.bottom - i.top,
    x: i.left,
    y: i.top
  };
}
function Js(e) {
  const {
    width: n,
    height: t
  } = Aa(e);
  return {
    width: n,
    height: t
  };
}
function Qs(e, n, t) {
  const o = Ot(n), r = Dt(n), a = t === "fixed", l = ln(e, !0, a, n);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const i = Ct(0);
  function u() {
    i.x = Or(r);
  }
  if (o || !o && !a)
    if ((sn(n) !== "body" || Wn(r)) && (s = Do(n)), o) {
      const f = ln(n, !0, a, n);
      i.x = f.x + n.clientLeft, i.y = f.y + n.clientTop;
    } else r && u();
  a && !o && r && u();
  const c = r && !o && !a ? Ma(r, s) : Ct(0), d = l.left + s.scrollLeft - i.x - c.x, m = l.top + s.scrollTop - i.y - c.y;
  return {
    x: d,
    y: m,
    width: l.width,
    height: l.height
  };
}
function No(e) {
  return gt(e).position === "static";
}
function ea(e, n) {
  if (!Ot(e) || gt(e).position === "fixed")
    return null;
  if (n)
    return n(e);
  let t = e.offsetParent;
  return Dt(e) === t && (t = t.ownerDocument.body), t;
}
function Ba(e, n) {
  const t = at(e);
  if (To(e))
    return t;
  if (!Ot(e)) {
    let r = qt(e);
    for (; r && !xn(r); ) {
      if (ht(r) && !No(r))
        return r;
      r = qt(r);
    }
    return t;
  }
  let o = ea(e, n);
  for (; o && Vs(o) && No(o); )
    o = ea(o, n);
  return o && xn(o) && No(o) && !kr(o) ? t : o || zs(e) || t;
}
const Zs = async function(e) {
  const n = this.getOffsetParent || Ba, t = this.getDimensions, o = await t(e.floating);
  return {
    reference: Qs(e.reference, await n(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function ei(e) {
  return gt(e).direction === "rtl";
}
const ti = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Gs,
  getDocumentElement: Dt,
  getClippingRect: Xs,
  getOffsetParent: Ba,
  getElementRects: Zs,
  getClientRects: Ws,
  getDimensions: Js,
  getScale: bn,
  isElement: ht,
  isRTL: ei
};
function Fa(e, n) {
  return e.x === n.x && e.y === n.y && e.width === n.width && e.height === n.height;
}
function ni(e, n) {
  let t = null, o;
  const r = Dt(e);
  function a() {
    var s;
    clearTimeout(o), (s = t) == null || s.disconnect(), t = null;
  }
  function l(s, i) {
    s === void 0 && (s = !1), i === void 0 && (i = 1), a();
    const u = e.getBoundingClientRect(), {
      left: c,
      top: d,
      width: m,
      height: f
    } = u;
    if (s || n(), !m || !f)
      return;
    const p = Zn(d), v = Zn(r.clientWidth - (c + m)), g = Zn(r.clientHeight - (d + f)), w = Zn(c), h = {
      rootMargin: -p + "px " + -v + "px " + -g + "px " + -w + "px",
      threshold: nt(0, Ut(1, i)) || 1
    };
    let k = !0;
    function b(_) {
      const S = _[0].intersectionRatio;
      if (S !== i) {
        if (!k)
          return l();
        S ? l(!1, S) : o = setTimeout(() => {
          l(!1, 1e-7);
        }, 1e3);
      }
      S === 1 && !Fa(u, e.getBoundingClientRect()) && l(), k = !1;
    }
    try {
      t = new IntersectionObserver(b, {
        ...h,
        // Handle <iframe>s
        root: r.ownerDocument
      });
    } catch {
      t = new IntersectionObserver(b, h);
    }
    t.observe(e);
  }
  return l(!0), a;
}
function $o(e, n, t, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: r = !0,
    ancestorResize: a = !0,
    elementResize: l = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: i = !1
  } = o, u = Sr(e), c = r || a ? [...u ? Vn(u) : [], ...Vn(n)] : [];
  c.forEach((w) => {
    r && w.addEventListener("scroll", t, {
      passive: !0
    }), a && w.addEventListener("resize", t);
  });
  const d = u && s ? ni(u, t) : null;
  let m = -1, f = null;
  l && (f = new ResizeObserver((w) => {
    let [y] = w;
    y && y.target === u && f && (f.unobserve(n), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      var h;
      (h = f) == null || h.observe(n);
    })), t();
  }), u && !i && f.observe(u), f.observe(n));
  let p, v = i ? ln(e) : null;
  i && g();
  function g() {
    const w = ln(e);
    v && !Fa(v, w) && t(), v = w, p = requestAnimationFrame(g);
  }
  return t(), () => {
    var w;
    c.forEach((y) => {
      r && y.removeEventListener("scroll", t), a && y.removeEventListener("resize", t);
    }), d == null || d(), (w = f) == null || w.disconnect(), f = null, i && cancelAnimationFrame(p);
  };
}
const Cn = Ls, Po = As, Sn = Bs, Er = Rs, _r = Ns, oi = Ps, Tr = Fs, ri = (e, n, t) => {
  const o = /* @__PURE__ */ new Map(), r = {
    platform: ti,
    ...t
  }, a = {
    ...r.platform,
    _c: o
  };
  return $s(e, n, {
    ...r,
    platform: a
  });
};
function ai(e) {
  return e != null && typeof e == "object" && "$el" in e;
}
function rr(e) {
  if (ai(e)) {
    const n = e.$el;
    return xr(n) && sn(n) === "#comment" ? null : n;
  }
  return e;
}
function vn(e) {
  return typeof e == "function" ? e() : L(e);
}
function li(e) {
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const t = rr(vn(e.element));
      return t == null ? {} : oi({
        element: t,
        padding: e.padding
      }).fn(n);
    }
  };
}
function Na(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function ta(e, n) {
  const t = Na(e);
  return Math.round(n * t) / t;
}
function On(e, n, t) {
  t === void 0 && (t = {});
  const o = t.whileElementsMounted, r = E(() => {
    var S;
    return (S = vn(t.open)) != null ? S : !0;
  }), a = E(() => vn(t.middleware)), l = E(() => {
    var S;
    return (S = vn(t.placement)) != null ? S : "bottom";
  }), s = E(() => {
    var S;
    return (S = vn(t.strategy)) != null ? S : "absolute";
  }), i = E(() => {
    var S;
    return (S = vn(t.transform)) != null ? S : !0;
  }), u = E(() => rr(e.value)), c = E(() => rr(n.value)), d = C(0), m = C(0), f = C(s.value), p = C(l.value), v = So({}), g = C(!1), w = E(() => {
    const S = {
      position: f.value,
      left: "0",
      top: "0"
    };
    if (!c.value)
      return S;
    const T = ta(c.value, d.value), X = ta(c.value, m.value);
    return i.value ? {
      ...S,
      transform: "translate(" + T + "px, " + X + "px)",
      ...Na(c.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: f.value,
      left: T + "px",
      top: X + "px"
    };
  });
  let y;
  function h() {
    if (u.value == null || c.value == null)
      return;
    const S = r.value;
    ri(u.value, c.value, {
      middleware: a.value,
      placement: l.value,
      strategy: s.value
    }).then((T) => {
      d.value = T.x, m.value = T.y, f.value = T.strategy, p.value = T.placement, v.value = T.middlewareData, g.value = S !== !1;
    });
  }
  function k() {
    typeof y == "function" && (y(), y = void 0);
  }
  function b() {
    if (k(), o === void 0) {
      h();
      return;
    }
    if (u.value != null && c.value != null) {
      y = o(u.value, c.value, h);
      return;
    }
  }
  function _() {
    r.value || (g.value = !1);
  }
  return le([a, l, s, r], h, {
    flush: "sync"
  }), le([u, c], b, {
    flush: "sync"
  }), le(r, _, {
    flush: "sync"
  }), Ul() && Ca(k), {
    x: dn(d),
    y: dn(m),
    strategy: dn(f),
    placement: dn(p),
    middlewareData: dn(v),
    isPositioned: dn(g),
    floatingStyles: w,
    update: h
  };
}
function fn(e, n, t) {
  let o = t.initialDeps ?? [], r;
  function a() {
    var l, s, i, u;
    let c;
    t.key && ((l = t.debug) != null && l.call(t)) && (c = Date.now());
    const d = e();
    if (!(d.length !== o.length || d.some((p, v) => o[v] !== p)))
      return r;
    o = d;
    let f;
    if (t.key && ((s = t.debug) != null && s.call(t)) && (f = Date.now()), r = n(...d), t.key && ((i = t.debug) != null && i.call(t))) {
      const p = Math.round((Date.now() - c) * 100) / 100, v = Math.round((Date.now() - f) * 100) / 100, g = v / 16, w = (y, h) => {
        for (y = String(y); y.length < h; )
          y = " " + y;
        return y;
      };
      console.info(
        `%c⏱ ${w(v, 5)} /${w(p, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * g, 120)
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
function Vo(e, n) {
  if (e === void 0)
    throw new Error("Unexpected undefined");
  return e;
}
const si = (e, n) => Math.abs(e - n) < 1, ii = (e, n, t) => {
  let o;
  return function(...r) {
    e.clearTimeout(o), o = e.setTimeout(() => n.apply(this, r), t);
  };
}, ui = (e) => e, ci = (e) => {
  const n = Math.max(e.startIndex - e.overscan, 0), t = Math.min(e.endIndex + e.overscan, e.count - 1), o = [];
  for (let r = n; r <= t; r++)
    o.push(r);
  return o;
}, di = (e, n) => {
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
}, na = {
  passive: !0
}, oa = typeof window > "u" ? !0 : "onscrollend" in window, fi = (e, n) => {
  const t = e.scrollElement;
  if (!t)
    return;
  const o = e.targetWindow;
  if (!o)
    return;
  let r = 0;
  const a = e.options.useScrollendEvent && oa ? () => {
  } : ii(
    o,
    () => {
      n(r, !1);
    },
    e.options.isScrollingResetDelay
  ), l = (c) => () => {
    const { horizontal: d, isRtl: m } = e.options;
    r = d ? t.scrollLeft * (m && -1 || 1) : t.scrollTop, a(), n(r, c);
  }, s = l(!0), i = l(!1);
  i(), t.addEventListener("scroll", s, na);
  const u = e.options.useScrollendEvent && oa;
  return u && t.addEventListener("scrollend", i, na), () => {
    t.removeEventListener("scroll", s), u && t.removeEventListener("scrollend", i);
  };
}, pi = (e, n, t) => {
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
}, mi = (e, {
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
class vi {
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
        getItemKey: ui,
        rangeExtractor: ci,
        onChange: () => {
        },
        measureElement: pi,
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
    }, this.maybeNotify = fn(
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
    }, this.getMeasurementOptions = fn(
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
    ), this.getMeasurements = fn(
      () => [this.getMeasurementOptions(), this.itemSizeCache],
      ({ count: t, paddingStart: o, scrollMargin: r, getItemKey: a, enabled: l }, s) => {
        if (!l)
          return this.measurementsCache = [], this.itemSizeCache.clear(), [];
        this.measurementsCache.length === 0 && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((c) => {
          this.itemSizeCache.set(c.key, c.size);
        }));
        const i = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [];
        const u = this.measurementsCache.slice(0, i);
        for (let c = i; c < t; c++) {
          const d = a(c), m = this.options.lanes === 1 ? u[c - 1] : this.getFurthestMeasurement(u, c), f = m ? m.end + this.options.gap : o + r, p = s.get(d), v = typeof p == "number" ? p : this.options.estimateSize(c), g = f + v, w = m ? m.lane : c % this.options.lanes;
          u[c] = {
            index: c,
            start: f,
            size: v,
            end: g,
            key: d,
            lane: w
          };
        }
        return this.measurementsCache = u, u;
      },
      {
        key: process.env.NODE_ENV !== "production" && "getMeasurements",
        debug: () => this.options.debug
      }
    ), this.calculateRange = fn(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (t, o, r, a) => this.range = t.length > 0 && o > 0 ? hi({
        measurements: t,
        outerSize: o,
        scrollOffset: r,
        lanes: a
      }) : null,
      {
        key: process.env.NODE_ENV !== "production" && "calculateRange",
        debug: () => this.options.debug
      }
    ), this.getVirtualIndexes = fn(
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
    }, this.getVirtualItems = fn(
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
        return Vo(
          o[Va(
            0,
            o.length - 1,
            (r) => Vo(o[r]).start,
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
          const [u] = Vo(
            this.getOffsetForIndex(t, s)
          );
          si(u, this.getScrollOffset()) || this.scrollToIndex(t, { align: s, behavior: r });
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
const Va = (e, n, t, o) => {
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
function hi({
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
  let l = Va(
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
    for (; s < r && i.some((c) => c < t + n); ) {
      const c = e[s];
      i[c.lane] = c.end, s++;
    }
    const u = Array(o).fill(t + n);
    for (; l >= 0 && u.some((c) => c >= t); ) {
      const c = e[l];
      u[c.lane] = c.start, l--;
    }
    l = Math.max(0, l - l % o), s = Math.min(r, s + (o - 1 - s % o));
  }
  return { startIndex: l, endIndex: s };
}
function gi(e) {
  const n = new vi(L(e)), t = So(n), o = n._didMount();
  return le(
    () => L(e).getScrollElement(),
    (r) => {
      r && n._willUpdate();
    },
    {
      immediate: !0
    }
  ), le(
    () => L(e),
    (r) => {
      n.setOptions({
        ...r,
        onChange: (a, l) => {
          var s;
          qr(t), (s = r.onChange) == null || s.call(r, a, l);
        }
      }), n._willUpdate(), qr(t);
    },
    {
      immediate: !0
    }
  ), Ca(o), t;
}
function bi(e) {
  return gi(
    E(() => ({
      observeElementRect: di,
      observeElementOffset: fi,
      scrollToFn: mi,
      ...L(e)
    }))
  );
}
function za(e, n, t) {
  let o = C(t == null ? void 0 : t.value), r = E(() => e.value !== void 0);
  return [E(() => r.value ? e.value : o.value), function(a) {
    return r.value || (o.value = a), n == null ? void 0 : n(a);
  }];
}
function Dr(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((n) => setTimeout(() => {
    throw n;
  }));
}
function Kt() {
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
    return Dr(() => {
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
    let o = Kt();
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
function yi() {
  let e = Kt();
  return we(() => e.dispose()), e;
}
function wi() {
  let e = yi();
  return (n) => {
    e.dispose(), e.nextFrame(n);
  };
}
let xi = 0;
function ki() {
  return ++xi;
}
function Me() {
  return ki();
}
function N(e) {
  var n;
  if (e == null || e.value == null) return null;
  let t = (n = e.value.$el) != null ? n : e.value;
  return t instanceof Node ? t : null;
}
function Pe(e, n, ...t) {
  if (e in n) {
    let r = n[e];
    return typeof r == "function" ? r(...t) : r;
  }
  let o = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map((r) => `"${r}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(o, Pe), o;
}
var Ci = Object.defineProperty, Si = (e, n, t) => n in e ? Ci(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, ra = (e, n, t) => (Si(e, typeof n != "symbol" ? n + "" : n, t), t);
let Oi = class {
  constructor() {
    ra(this, "current", this.detect()), ra(this, "currentId", 0);
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
}, Un = new Oi();
function ut(e) {
  var n, t;
  return Un.isServer ? null : e ? "ownerDocument" in e ? e.ownerDocument : "value" in e ? (t = (n = N(e)) == null ? void 0 : n.ownerDocument) != null ? t : document : null : document;
}
let go = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var qe = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(qe || {}), zn = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(zn || {}), Ei = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Ei || {});
function Io(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(go)).sort((n, t) => Math.sign((n.tabIndex || Number.MAX_SAFE_INTEGER) - (t.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var $r = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))($r || {});
function ja(e, n = 0) {
  var t;
  return e === ((t = ut(e)) == null ? void 0 : t.body) ? !1 : Pe(n, { 0() {
    return e.matches(go);
  }, 1() {
    let o = e;
    for (; o !== null; ) {
      if (o.matches(go)) return !0;
      o = o.parentElement;
    }
    return !1;
  } });
}
var _i = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(_i || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function an(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let Ti = ["textarea", "input"].join(",");
function Di(e) {
  var n, t;
  return (t = (n = e == null ? void 0 : e.matches) == null ? void 0 : n.call(e, Ti)) != null ? t : !1;
}
function Ha(e, n = (t) => t) {
  return e.slice().sort((t, o) => {
    let r = n(t), a = n(o);
    if (r === null || a === null) return 0;
    let l = r.compareDocumentPosition(a);
    return l & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : l & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function pt(e, n, { sorted: t = !0, relativeTo: o = null, skipElements: r = [] } = {}) {
  var a;
  let l = (a = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? a : document, s = Array.isArray(e) ? t ? Ha(e) : e : Io(e);
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
  })(), c = n & 32 ? { preventScroll: !0 } : {}, d = 0, m = s.length, f;
  do {
    if (d >= m || d + m <= 0) return 0;
    let p = u + d;
    if (n & 16) p = (p + m) % m;
    else {
      if (p < 0) return 3;
      if (p >= m) return 1;
    }
    f = s[p], f == null || f.focus(c), d += i;
  } while (f !== l.activeElement);
  return n & 6 && Di(f) && f.select(), 2;
}
function Ga() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function $i() {
  return /Android/gi.test(window.navigator.userAgent);
}
function Wa() {
  return Ga() || $i();
}
function Dn(e, n, t, o) {
  Un.isServer || Le((r) => {
    e.value && (document.addEventListener(n, t, o), r(() => document.removeEventListener(n, t, o)));
  });
}
function Ua(e, n, t, o) {
  Un.isServer || Le((r) => {
    e.value && (window.addEventListener(n, t, o), r(() => window.removeEventListener(n, t, o)));
  });
}
const aa = 30;
function Pr(e, n, t = E(() => !0)) {
  function o(l, s) {
    if (l.defaultPrevented) return;
    let i = s(l);
    if (i === null || !i.getRootNode().contains(i)) return;
    let u = function c(d) {
      return typeof d == "function" ? c(d()) : Array.isArray(d) || d instanceof Set ? d : [d];
    }(e);
    for (let c of u) {
      if (c === null) continue;
      let d = c instanceof HTMLElement ? c : N(c);
      if (d != null && d.contains(i) || l.composed && l.composedPath().includes(d)) return;
    }
    return !ja(i, $r.Loose) && i.tabIndex !== -1 && l.preventDefault(), n(l, i);
  }
  let r = C(null);
  Dn(t, "pointerdown", (l) => {
    var s, i;
    r.value = ((i = (s = l.composedPath) == null ? void 0 : s.call(l)) == null ? void 0 : i[0]) || l.target;
  }, !0), Dn(t, "mousedown", (l) => {
    var s, i;
    r.value = ((i = (s = l.composedPath) == null ? void 0 : s.call(l)) == null ? void 0 : i[0]) || l.target;
  }, !0), Dn(t, "click", (l) => {
    Wa() || r.value && (o(l, () => r.value), r.value = null);
  }, !0);
  let a = { x: 0, y: 0 };
  Dn(t, "touchstart", (l) => {
    a.x = l.touches[0].clientX, a.y = l.touches[0].clientY;
  }, !0), Dn(t, "touchend", (l) => {
    let s = { x: l.changedTouches[0].clientX, y: l.changedTouches[0].clientY };
    if (!(Math.abs(s.x - a.x) >= aa || Math.abs(s.y - a.y) >= aa)) return o(l, () => l.target instanceof HTMLElement ? l.target : null);
  }, !0), Ua(t, "blur", (l) => o(l, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
function la(e, n) {
  if (e) return e;
  let t = n ?? "button";
  if (typeof t == "string" && t.toLowerCase() === "button") return "button";
}
function Ir(e, n) {
  let t = C(la(e.value.type, e.value.as));
  return ie(() => {
    t.value = la(e.value.type, e.value.as);
  }), Le(() => {
    var o;
    t.value || N(n) && N(n) instanceof HTMLButtonElement && !((o = N(n)) != null && o.hasAttribute("type")) && (t.value = "button");
  }), t;
}
function sa(e) {
  return [e.screenX, e.screenY];
}
function Pi() {
  let e = C([-1, -1]);
  return { wasMoved(n) {
    let t = sa(n);
    return e.value[0] === t[0] && e.value[1] === t[1] ? !1 : (e.value = t, !0);
  }, update(n) {
    e.value = sa(n);
  } };
}
function Ii({ container: e, accept: n, walk: t, enabled: o }) {
  Le(() => {
    let r = e.value;
    if (!r || o !== void 0 && !o.value) return;
    let a = ut(e);
    if (!a) return;
    let l = Object.assign((i) => n(i), { acceptNode: n }), s = a.createTreeWalker(r, NodeFilter.SHOW_ELEMENT, l, !1);
    for (; s.nextNode(); ) t(s.currentNode);
  });
}
var it = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(it || {}), zt = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(zt || {});
function ge({ visible: e = !0, features: n = 0, ourProps: t, theirProps: o, ...r }) {
  var a;
  let l = Ka(o, t), s = Object.assign(r, { props: l });
  if (e || n & 2 && l.static) return zo(s);
  if (n & 1) {
    let i = (a = l.unmount) == null || a ? 0 : 1;
    return Pe(i, { 0() {
      return null;
    }, 1() {
      return zo({ ...r, props: { ...l, hidden: !0, style: { display: "none" } } });
    } });
  }
  return zo(s);
}
function zo({ props: e, attrs: n, slots: t, slot: o, name: r }) {
  var a, l;
  let { as: s, ...i } = En(e, ["unmount", "static"]), u = (a = t.default) == null ? void 0 : a.call(t, o), c = {};
  if (o) {
    let d = !1, m = [];
    for (let [f, p] of Object.entries(o)) typeof p == "boolean" && (d = !0), p === !0 && m.push(f);
    d && (c["data-headlessui-state"] = m.join(" "));
  }
  if (s === "template") {
    if (u = qa(u ?? []), Object.keys(i).length > 0 || Object.keys(n).length > 0) {
      let [d, ...m] = u ?? [];
      if (!Ai(d) || m.length > 0) throw new Error(['Passing props on "template"!', "", `The current component <${r} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(i).concat(Object.keys(n)).map((v) => v.trim()).filter((v, g, w) => w.indexOf(v) === g).sort((v, g) => v.localeCompare(g)).map((v) => `  - ${v}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((v) => `  - ${v}`).join(`
`)].join(`
`));
      let f = Ka((l = d.props) != null ? l : {}, i, c), p = Sa(d, f, !0);
      for (let v in f) v.startsWith("on") && (p.props || (p.props = {}), p.props[v] = f[v]);
      return p;
    }
    return Array.isArray(u) && u.length === 1 ? u[0] : u;
  }
  return se(s, Object.assign({}, i, c), { default: () => u });
}
function qa(e) {
  return e.flatMap((n) => n.type === xe ? qa(n.children) : [n]);
}
function Ka(...e) {
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
function Ya(e) {
  let n = Object.assign({}, e);
  for (let t in n) n[t] === void 0 && delete n[t];
  return n;
}
function En(e, n = []) {
  let t = Object.assign({}, e);
  for (let o of n) o in t && delete t[o];
  return t;
}
function Ai(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
var Et = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Et || {});
let Rt = j({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: n, attrs: t }) {
  return () => {
    var o;
    let { features: r, ...a } = e, l = { "aria-hidden": (r & 2) === 2 ? !0 : (o = a["aria-hidden"]) != null ? o : void 0, hidden: (r & 4) === 4 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(r & 4) === 4 && (r & 2) !== 2 && { display: "none" } } };
    return ge({ ourProps: l, theirProps: a, slot: {}, attrs: t, slots: n, name: "Hidden" });
  };
} }), Xa = Symbol("Context");
var De = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(De || {});
function Ri() {
  return _n() !== null;
}
function _n() {
  return me(Xa, null);
}
function Ar(e) {
  Se(Xa, e);
}
var Te = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(Te || {}), Ja = ((e) => (e[e.Left = 0] = "Left", e[e.Right = 2] = "Right", e))(Ja || {});
function Mi(e) {
  function n() {
    document.readyState !== "loading" && (e(), document.removeEventListener("DOMContentLoaded", n));
  }
  typeof window < "u" && typeof document < "u" && (document.addEventListener("DOMContentLoaded", n), n());
}
let Pt = [];
Mi(() => {
  function e(n) {
    if (!(n.target instanceof HTMLElement) || n.target === document.body || Pt[0] === n.target) return;
    let t = n.target;
    t = t.closest(go), Pt.unshift(t ?? n.target), Pt = Pt.filter((o) => o != null && o.isConnected), Pt.splice(10);
  }
  window.addEventListener("click", e, { capture: !0 }), window.addEventListener("mousedown", e, { capture: !0 }), window.addEventListener("focus", e, { capture: !0 }), document.body.addEventListener("click", e, { capture: !0 }), document.body.addEventListener("mousedown", e, { capture: !0 }), document.body.addEventListener("focus", e, { capture: !0 });
});
function Li(e) {
  throw new Error("Unexpected object: " + e);
}
var je = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(je || {});
function ia(e, n) {
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
      Li(e);
  }
}
function Qa(e = {}, n = null, t = []) {
  for (let [o, r] of Object.entries(e)) el(t, Za(n, o), r);
  return t;
}
function Za(e, n) {
  return e ? e + "[" + n + "]" : n;
}
function el(e, n, t) {
  if (Array.isArray(t)) for (let [o, r] of t.entries()) el(e, Za(n, o.toString()), r);
  else t instanceof Date ? e.push([n, t.toISOString()]) : typeof t == "boolean" ? e.push([n, t ? "1" : "0"]) : typeof t == "string" ? e.push([n, t]) : typeof t == "number" ? e.push([n, `${t}`]) : t == null ? e.push([n, ""]) : Qa(t, n, e);
}
function Bi(e) {
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
function Fi(e, n) {
  return e === n;
}
var Ni = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Ni || {}), Vi = ((e) => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(Vi || {}), zi = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Focus = 1] = "Focus", e[e.Other = 2] = "Other", e))(zi || {});
let tl = Symbol("ComboboxContext");
function un(e) {
  let n = me(tl, null);
  if (n === null) {
    let t = new Error(`<${e} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t, un), t;
  }
  return n;
}
let nl = Symbol("VirtualContext"), ji = j({ name: "VirtualProvider", setup(e, { slots: n }) {
  let t = un("VirtualProvider"), o = E(() => {
    let s = N(t.optionsRef);
    if (!s) return { start: 0, end: 0 };
    let i = window.getComputedStyle(s);
    return { start: parseFloat(i.paddingBlockStart || i.paddingTop), end: parseFloat(i.paddingBlockEnd || i.paddingBottom) };
  }), r = bi(E(() => ({ scrollPaddingStart: o.value.start, scrollPaddingEnd: o.value.end, count: t.virtual.value.options.length, estimateSize() {
    return 40;
  }, getScrollElement() {
    return N(t.optionsRef);
  }, overscan: 12 }))), a = E(() => {
    var s;
    return (s = t.virtual.value) == null ? void 0 : s.options;
  }), l = C(0);
  return le([a], () => {
    l.value += 1;
  }), Se(nl, t.virtual.value ? r : null), () => [se("div", { style: { position: "relative", width: "100%", height: `${r.value.getTotalSize()}px` }, ref: (s) => {
    s && t.activationTrigger.value !== 0 && t.activeOptionIndex.value !== null && t.virtual.value.options.length > t.activeOptionIndex.value && r.value.scrollToIndex(t.activeOptionIndex.value);
  } }, r.value.getVirtualItems().map((s) => Sa(n.default({ option: t.virtual.value.options[s.index], open: t.comboboxState.value === 0 })[0], { key: `${l.value}-${s.index}`, "data-index": s.index, "aria-setsize": t.virtual.value.options.length, "aria-posinset": s.index + 1, style: { position: "absolute", top: 0, left: 0, transform: `translateY(${s.start}px)`, overflowAnchor: "none" } })))];
} }), Rr = j({ name: "Combobox", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: !1 }, by: { type: [String, Function], nullable: !0, default: null }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, form: { type: String, optional: !0 }, name: { type: String, optional: !0 }, nullable: { type: Boolean, default: !1 }, multiple: { type: [Boolean], default: !1 }, immediate: { type: [Boolean], default: !1 }, virtual: { type: Object, default: null } }, inheritAttrs: !1, setup(e, { slots: n, attrs: t, emit: o }) {
  let r = C(1), a = C(null), l = C(null), s = C(null), i = C(null), u = C({ static: !1, hold: !1 }), c = C([]), d = C(null), m = C(2), f = C(!1);
  function p(P = (V) => V) {
    let V = d.value !== null ? c.value[d.value] : null, K = P(c.value.slice()), x = K.length > 0 && K[0].dataRef.order.value !== null ? K.sort((B, Y) => B.dataRef.order.value - Y.dataRef.order.value) : Ha(K, (B) => N(B.dataRef.domRef)), I = V ? x.indexOf(V) : null;
    return I === -1 && (I = null), { options: x, activeOptionIndex: I };
  }
  let v = E(() => e.multiple ? 1 : 0), g = E(() => e.nullable), [w, y] = za(E(() => e.modelValue), (P) => o("update:modelValue", P), E(() => e.defaultValue)), h = E(() => w.value === void 0 ? Pe(v.value, { 1: [], 0: void 0 }) : w.value), k = null, b = null;
  function _(P) {
    return Pe(v.value, { 0() {
      return y == null ? void 0 : y(P);
    }, 1: () => {
      let V = Ft(T.value.value).slice(), K = Ft(P), x = V.findIndex((I) => T.compare(K, Ft(I)));
      return x === -1 ? V.push(K) : V.splice(x, 1), y == null ? void 0 : y(V);
    } });
  }
  let S = E(() => {
    var P;
    return (P = e.virtual) == null ? void 0 : P.options;
  });
  le([S], ([P], [V]) => {
    if (T.virtual.value && P && V && d.value !== null) {
      let K = P.indexOf(V[d.value]);
      K !== -1 ? d.value = K : d.value = null;
    }
  });
  let T = { comboboxState: r, value: h, mode: v, compare(P, V) {
    if (typeof e.by == "string") {
      let K = e.by;
      return (P == null ? void 0 : P[K]) === (V == null ? void 0 : V[K]);
    }
    return e.by === null ? Fi(P, V) : e.by(P, V);
  }, calculateIndex(P) {
    return T.virtual.value ? e.by === null ? T.virtual.value.options.indexOf(P) : T.virtual.value.options.findIndex((V) => T.compare(V, P)) : c.value.findIndex((V) => T.compare(V.dataRef.value, P));
  }, defaultValue: E(() => e.defaultValue), nullable: g, immediate: E(() => e.immediate), virtual: E(() => {
    var P;
    return e.virtual ? { options: e.virtual.options, disabled: (P = e.virtual.disabled) != null ? P : () => !1 } : null;
  }), inputRef: l, labelRef: a, buttonRef: s, optionsRef: i, disabled: E(() => e.disabled), options: c, change(P) {
    y(P);
  }, activeOptionIndex: E(() => {
    if (f.value && d.value === null && (T.virtual.value ? T.virtual.value.options.length > 0 : c.value.length > 0)) {
      if (T.virtual.value) {
        let V = T.virtual.value.options.findIndex((K) => {
          var x;
          return !((x = T.virtual.value) != null && x.disabled(K));
        });
        if (V !== -1) return V;
      }
      let P = c.value.findIndex((V) => !V.dataRef.disabled);
      if (P !== -1) return P;
    }
    return d.value;
  }), activationTrigger: m, optionsPropsRef: u, closeCombobox() {
    f.value = !1, !e.disabled && r.value !== 1 && (r.value = 1, d.value = null);
  }, openCombobox() {
    if (f.value = !0, !e.disabled && r.value !== 0) {
      if (T.value.value) {
        let P = T.calculateIndex(T.value.value);
        P !== -1 && (d.value = P);
      }
      r.value = 0;
    }
  }, setActivationTrigger(P) {
    m.value = P;
  }, goToOption(P, V, K) {
    f.value = !1, k !== null && cancelAnimationFrame(k), k = requestAnimationFrame(() => {
      if (e.disabled || i.value && !u.value.static && r.value === 1) return;
      if (T.virtual.value) {
        d.value = P === je.Specific ? V : ia({ focus: P }, { resolveItems: () => T.virtual.value.options, resolveActiveIndex: () => {
          var B, Y;
          return (Y = (B = T.activeOptionIndex.value) != null ? B : T.virtual.value.options.findIndex((ne) => {
            var fe;
            return !((fe = T.virtual.value) != null && fe.disabled(ne));
          })) != null ? Y : null;
        }, resolveDisabled: (B) => T.virtual.value.disabled(B), resolveId() {
          throw new Error("Function not implemented.");
        } }), m.value = K ?? 2;
        return;
      }
      let x = p();
      if (x.activeOptionIndex === null) {
        let B = x.options.findIndex((Y) => !Y.dataRef.disabled);
        B !== -1 && (x.activeOptionIndex = B);
      }
      let I = P === je.Specific ? V : ia({ focus: P }, { resolveItems: () => x.options, resolveActiveIndex: () => x.activeOptionIndex, resolveId: (B) => B.id, resolveDisabled: (B) => B.dataRef.disabled });
      d.value = I, m.value = K ?? 2, c.value = x.options;
    });
  }, selectOption(P) {
    let V = c.value.find((x) => x.id === P);
    if (!V) return;
    let { dataRef: K } = V;
    _(K.value);
  }, selectActiveOption() {
    if (T.activeOptionIndex.value !== null) {
      if (T.virtual.value) _(T.virtual.value.options[T.activeOptionIndex.value]);
      else {
        let { dataRef: P } = c.value[T.activeOptionIndex.value];
        _(P.value);
      }
      T.goToOption(je.Specific, T.activeOptionIndex.value);
    }
  }, registerOption(P, V) {
    let K = Hn({ id: P, dataRef: V });
    if (T.virtual.value) {
      c.value.push(K);
      return;
    }
    b && cancelAnimationFrame(b);
    let x = p((I) => (I.push(K), I));
    d.value === null && T.isSelected(V.value.value) && (x.activeOptionIndex = x.options.indexOf(K)), c.value = x.options, d.value = x.activeOptionIndex, m.value = 2, x.options.some((I) => !N(I.dataRef.domRef)) && (b = requestAnimationFrame(() => {
      let I = p();
      c.value = I.options, d.value = I.activeOptionIndex;
    }));
  }, unregisterOption(P, V) {
    if (k !== null && cancelAnimationFrame(k), V && (f.value = !0), T.virtual.value) {
      c.value = c.value.filter((x) => x.id !== P);
      return;
    }
    let K = p((x) => {
      let I = x.findIndex((B) => B.id === P);
      return I !== -1 && x.splice(I, 1), x;
    });
    c.value = K.options, d.value = K.activeOptionIndex, m.value = 2;
  }, isSelected(P) {
    return Pe(v.value, { 0: () => T.compare(Ft(T.value.value), Ft(P)), 1: () => Ft(T.value.value).some((V) => T.compare(Ft(V), Ft(P))) });
  }, isActive(P) {
    return d.value === T.calculateIndex(P);
  } };
  Pr([l, s, i], () => T.closeCombobox(), E(() => r.value === 0)), Se(tl, T), Ar(E(() => Pe(r.value, { 0: De.Open, 1: De.Closed })));
  let X = E(() => {
    var P;
    return (P = N(l)) == null ? void 0 : P.closest("form");
  });
  return ie(() => {
    le([X], () => {
      if (!X.value || e.defaultValue === void 0) return;
      function P() {
        T.change(e.defaultValue);
      }
      return X.value.addEventListener("reset", P), () => {
        var V;
        (V = X.value) == null || V.removeEventListener("reset", P);
      };
    }, { immediate: !0 });
  }), () => {
    var P, V, K;
    let { name: x, disabled: I, form: B, ...Y } = e, ne = { open: r.value === 0, disabled: I, activeIndex: T.activeOptionIndex.value, activeOption: T.activeOptionIndex.value === null ? null : T.virtual.value ? T.virtual.value.options[(P = T.activeOptionIndex.value) != null ? P : 0] : (K = (V = T.options.value[T.activeOptionIndex.value]) == null ? void 0 : V.dataRef.value) != null ? K : null, value: h.value };
    return se(xe, [...x != null && h.value != null ? Qa({ [x]: h.value }).map(([fe, oe]) => se(Rt, Ya({ features: Et.Hidden, key: fe, as: "input", type: "hidden", hidden: !0, readOnly: !0, form: B, disabled: I, name: fe, value: oe }))) : [], ge({ theirProps: { ...t, ...En(Y, ["by", "defaultValue", "immediate", "modelValue", "multiple", "nullable", "onUpdate:modelValue", "virtual"]) }, ourProps: {}, slot: ne, slots: n, attrs: t, name: "Combobox" })]);
  };
} });
j({ name: "ComboboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: () => `headlessui-combobox-label-${Me()}` } }, setup(e, { attrs: n, slots: t }) {
  let o = un("ComboboxLabel");
  function r() {
    var a;
    (a = N(o.inputRef)) == null || a.focus({ preventScroll: !0 });
  }
  return () => {
    let a = { open: o.comboboxState.value === 0, disabled: o.disabled.value }, { id: l, ...s } = e, i = { id: l, ref: o.labelRef, onClick: r };
    return ge({ ourProps: i, theirProps: s, slot: a, attrs: n, slots: t, name: "ComboboxLabel" });
  };
} });
let Mr = j({ name: "ComboboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: () => `headlessui-combobox-button-${Me()}` } }, setup(e, { attrs: n, slots: t, expose: o }) {
  let r = un("ComboboxButton");
  o({ el: r.buttonRef, $el: r.buttonRef });
  function a(i) {
    r.disabled.value || (r.comboboxState.value === 0 ? r.closeCombobox() : (i.preventDefault(), r.openCombobox()), He(() => {
      var u;
      return (u = N(r.inputRef)) == null ? void 0 : u.focus({ preventScroll: !0 });
    }));
  }
  function l(i) {
    switch (i.key) {
      case Te.ArrowDown:
        i.preventDefault(), i.stopPropagation(), r.comboboxState.value === 1 && r.openCombobox(), He(() => {
          var u;
          return (u = r.inputRef.value) == null ? void 0 : u.focus({ preventScroll: !0 });
        });
        return;
      case Te.ArrowUp:
        i.preventDefault(), i.stopPropagation(), r.comboboxState.value === 1 && (r.openCombobox(), He(() => {
          r.value.value || r.goToOption(je.Last);
        })), He(() => {
          var u;
          return (u = r.inputRef.value) == null ? void 0 : u.focus({ preventScroll: !0 });
        });
        return;
      case Te.Escape:
        if (r.comboboxState.value !== 0) return;
        i.preventDefault(), r.optionsRef.value && !r.optionsPropsRef.value.static && i.stopPropagation(), r.closeCombobox(), He(() => {
          var u;
          return (u = r.inputRef.value) == null ? void 0 : u.focus({ preventScroll: !0 });
        });
        return;
    }
  }
  let s = Ir(E(() => ({ as: e.as, type: n.type })), r.buttonRef);
  return () => {
    var i, u;
    let c = { open: r.comboboxState.value === 0, disabled: r.disabled.value, value: r.value.value }, { id: d, ...m } = e, f = { ref: r.buttonRef, id: d, type: s.value, tabindex: "-1", "aria-haspopup": "listbox", "aria-controls": (i = N(r.optionsRef)) == null ? void 0 : i.id, "aria-expanded": r.comboboxState.value === 0, "aria-labelledby": r.labelRef.value ? [(u = N(r.labelRef)) == null ? void 0 : u.id, d].join(" ") : void 0, disabled: r.disabled.value === !0 ? !0 : void 0, onKeydown: l, onClick: a };
    return ge({ ourProps: f, theirProps: m, slot: c, attrs: n, slots: t, name: "ComboboxButton" });
  };
} }), Lr = j({ name: "ComboboxInput", props: { as: { type: [Object, String], default: "input" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, displayValue: { type: Function }, defaultValue: { type: String, default: void 0 }, id: { type: String, default: () => `headlessui-combobox-input-${Me()}` } }, emits: { change: (e) => !0 }, setup(e, { emit: n, attrs: t, slots: o, expose: r }) {
  let a = un("ComboboxInput"), l = E(() => ut(N(a.inputRef))), s = { value: !1 };
  r({ el: a.inputRef, $el: a.inputRef });
  function i() {
    a.change(null);
    let h = N(a.optionsRef);
    h && (h.scrollTop = 0), a.goToOption(je.Nothing);
  }
  let u = E(() => {
    var h;
    let k = a.value.value;
    return N(a.inputRef) ? typeof e.displayValue < "u" && k !== void 0 ? (h = e.displayValue(k)) != null ? h : "" : typeof k == "string" ? k : "" : "";
  });
  ie(() => {
    le([u, a.comboboxState, l], ([h, k], [b, _]) => {
      if (s.value) return;
      let S = N(a.inputRef);
      S && ((_ === 0 && k === 1 || h !== b) && (S.value = h), requestAnimationFrame(() => {
        var T;
        if (s.value || !S || ((T = l.value) == null ? void 0 : T.activeElement) !== S) return;
        let { selectionStart: X, selectionEnd: P } = S;
        Math.abs((P ?? 0) - (X ?? 0)) === 0 && X === 0 && S.setSelectionRange(S.value.length, S.value.length);
      }));
    }, { immediate: !0 }), le([a.comboboxState], ([h], [k]) => {
      if (h === 0 && k === 1) {
        if (s.value) return;
        let b = N(a.inputRef);
        if (!b) return;
        let _ = b.value, { selectionStart: S, selectionEnd: T, selectionDirection: X } = b;
        b.value = "", b.value = _, X !== null ? b.setSelectionRange(S, T, X) : b.setSelectionRange(S, T);
      }
    });
  });
  let c = C(!1);
  function d() {
    c.value = !0;
  }
  function m() {
    Kt().nextFrame(() => {
      c.value = !1;
    });
  }
  let f = wi();
  function p(h) {
    switch (s.value = !0, f(() => {
      c.value || (s.value = !1);
    }), h.key) {
      case Te.Enter:
        if (s.value = !1, a.comboboxState.value !== 0 || c.value) return;
        if (h.preventDefault(), h.stopPropagation(), a.activeOptionIndex.value === null) {
          a.closeCombobox();
          return;
        }
        a.selectActiveOption(), a.mode.value === 0 && a.closeCombobox();
        break;
      case Te.ArrowDown:
        return s.value = !1, h.preventDefault(), h.stopPropagation(), Pe(a.comboboxState.value, { 0: () => a.goToOption(je.Next), 1: () => a.openCombobox() });
      case Te.ArrowUp:
        return s.value = !1, h.preventDefault(), h.stopPropagation(), Pe(a.comboboxState.value, { 0: () => a.goToOption(je.Previous), 1: () => {
          a.openCombobox(), He(() => {
            a.value.value || a.goToOption(je.Last);
          });
        } });
      case Te.Home:
        if (h.shiftKey) break;
        return s.value = !1, h.preventDefault(), h.stopPropagation(), a.goToOption(je.First);
      case Te.PageUp:
        return s.value = !1, h.preventDefault(), h.stopPropagation(), a.goToOption(je.First);
      case Te.End:
        if (h.shiftKey) break;
        return s.value = !1, h.preventDefault(), h.stopPropagation(), a.goToOption(je.Last);
      case Te.PageDown:
        return s.value = !1, h.preventDefault(), h.stopPropagation(), a.goToOption(je.Last);
      case Te.Escape:
        if (s.value = !1, a.comboboxState.value !== 0) return;
        h.preventDefault(), a.optionsRef.value && !a.optionsPropsRef.value.static && h.stopPropagation(), a.nullable.value && a.mode.value === 0 && a.value.value === null && i(), a.closeCombobox();
        break;
      case Te.Tab:
        if (s.value = !1, a.comboboxState.value !== 0) return;
        a.mode.value === 0 && a.activationTrigger.value !== 1 && a.selectActiveOption(), a.closeCombobox();
        break;
    }
  }
  function v(h) {
    n("change", h), a.nullable.value && a.mode.value === 0 && h.target.value === "" && i(), a.openCombobox();
  }
  function g(h) {
    var k, b, _;
    let S = (k = h.relatedTarget) != null ? k : Pt.find((T) => T !== h.currentTarget);
    if (s.value = !1, !((b = N(a.optionsRef)) != null && b.contains(S)) && !((_ = N(a.buttonRef)) != null && _.contains(S)) && a.comboboxState.value === 0) return h.preventDefault(), a.mode.value === 0 && (a.nullable.value && a.value.value === null ? i() : a.activationTrigger.value !== 1 && a.selectActiveOption()), a.closeCombobox();
  }
  function w(h) {
    var k, b, _;
    let S = (k = h.relatedTarget) != null ? k : Pt.find((T) => T !== h.currentTarget);
    (b = N(a.buttonRef)) != null && b.contains(S) || (_ = N(a.optionsRef)) != null && _.contains(S) || a.disabled.value || a.immediate.value && a.comboboxState.value !== 0 && (a.openCombobox(), Kt().nextFrame(() => {
      a.setActivationTrigger(1);
    }));
  }
  let y = E(() => {
    var h, k, b, _;
    return (_ = (b = (k = e.defaultValue) != null ? k : a.defaultValue.value !== void 0 ? (h = e.displayValue) == null ? void 0 : h.call(e, a.defaultValue.value) : null) != null ? b : a.defaultValue.value) != null ? _ : "";
  });
  return () => {
    var h, k, b, _, S, T, X;
    let P = { open: a.comboboxState.value === 0 }, { id: V, displayValue: K, onChange: x, ...I } = e, B = { "aria-controls": (h = a.optionsRef.value) == null ? void 0 : h.id, "aria-expanded": a.comboboxState.value === 0, "aria-activedescendant": a.activeOptionIndex.value === null ? void 0 : a.virtual.value ? (k = a.options.value.find((Y) => !a.virtual.value.disabled(Y.dataRef.value) && a.compare(Y.dataRef.value, a.virtual.value.options[a.activeOptionIndex.value]))) == null ? void 0 : k.id : (b = a.options.value[a.activeOptionIndex.value]) == null ? void 0 : b.id, "aria-labelledby": (T = (_ = N(a.labelRef)) == null ? void 0 : _.id) != null ? T : (S = N(a.buttonRef)) == null ? void 0 : S.id, "aria-autocomplete": "list", id: V, onCompositionstart: d, onCompositionend: m, onKeydown: p, onInput: v, onFocus: w, onBlur: g, role: "combobox", type: (X = t.type) != null ? X : "text", tabIndex: 0, ref: a.inputRef, defaultValue: y.value, disabled: a.disabled.value === !0 ? !0 : void 0 };
    return ge({ ourProps: B, theirProps: I, slot: P, attrs: t, slots: o, features: it.RenderStrategy | it.Static, name: "ComboboxInput" });
  };
} }), Br = j({ name: "ComboboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, hold: { type: [Boolean], default: !1 } }, setup(e, { attrs: n, slots: t, expose: o }) {
  let r = un("ComboboxOptions"), a = `headlessui-combobox-options-${Me()}`;
  o({ el: r.optionsRef, $el: r.optionsRef }), Le(() => {
    r.optionsPropsRef.value.static = e.static;
  }), Le(() => {
    r.optionsPropsRef.value.hold = e.hold;
  });
  let l = _n(), s = E(() => l !== null ? (l.value & De.Open) === De.Open : r.comboboxState.value === 0);
  Ii({ container: E(() => N(r.optionsRef)), enabled: E(() => r.comboboxState.value === 0), accept(u) {
    return u.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : u.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(u) {
    u.setAttribute("role", "none");
  } });
  function i(u) {
    u.preventDefault();
  }
  return () => {
    var u, c, d;
    let m = { open: r.comboboxState.value === 0 }, f = { "aria-labelledby": (d = (u = N(r.labelRef)) == null ? void 0 : u.id) != null ? d : (c = N(r.buttonRef)) == null ? void 0 : c.id, id: a, ref: r.optionsRef, role: "listbox", "aria-multiselectable": r.mode.value === 1 ? !0 : void 0, onMousedown: i }, p = En(e, ["hold"]);
    return ge({ ourProps: f, theirProps: p, slot: m, attrs: n, slots: r.virtual.value && r.comboboxState.value === 0 ? { ...t, default: () => [se(ji, {}, t.default)] } : t, features: it.RenderStrategy | it.Static, visible: s.value, name: "ComboboxOptions" });
  };
} }), jn = j({ name: "ComboboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: !1 }, order: { type: [Number], default: null } }, setup(e, { slots: n, attrs: t, expose: o }) {
  let r = un("ComboboxOption"), a = `headlessui-combobox-option-${Me()}`, l = C(null), s = E(() => {
    var y;
    return e.disabled || ((y = r.virtual.value) == null ? void 0 : y.disabled(e.value));
  });
  o({ el: l, $el: l });
  let i = E(() => {
    var y;
    return r.virtual.value ? r.activeOptionIndex.value === r.calculateIndex(e.value) : r.activeOptionIndex.value === null ? !1 : ((y = r.options.value[r.activeOptionIndex.value]) == null ? void 0 : y.id) === a;
  }), u = E(() => r.isSelected(e.value)), c = me(nl, null), d = E(() => ({ disabled: e.disabled, value: e.value, domRef: l, order: E(() => e.order) }));
  ie(() => r.registerOption(a, d)), we(() => r.unregisterOption(a, i.value)), Le(() => {
    let y = N(l);
    y && (c == null || c.value.measureElement(y));
  }), Le(() => {
    r.comboboxState.value === 0 && i.value && (r.virtual.value || r.activationTrigger.value !== 0 && He(() => {
      var y, h;
      return (h = (y = N(l)) == null ? void 0 : y.scrollIntoView) == null ? void 0 : h.call(y, { block: "nearest" });
    }));
  });
  function m(y) {
    y.preventDefault(), y.button === Ja.Left && (s.value || (r.selectOption(a), Wa() || requestAnimationFrame(() => {
      var h;
      return (h = N(r.inputRef)) == null ? void 0 : h.focus({ preventScroll: !0 });
    }), r.mode.value === 0 && r.closeCombobox()));
  }
  function f() {
    var y;
    if (e.disabled || (y = r.virtual.value) != null && y.disabled(e.value)) return r.goToOption(je.Nothing);
    let h = r.calculateIndex(e.value);
    r.goToOption(je.Specific, h);
  }
  let p = Pi();
  function v(y) {
    p.update(y);
  }
  function g(y) {
    var h;
    if (!p.wasMoved(y) || e.disabled || (h = r.virtual.value) != null && h.disabled(e.value) || i.value) return;
    let k = r.calculateIndex(e.value);
    r.goToOption(je.Specific, k, 0);
  }
  function w(y) {
    var h;
    p.wasMoved(y) && (e.disabled || (h = r.virtual.value) != null && h.disabled(e.value) || i.value && (r.optionsPropsRef.value.hold || r.goToOption(je.Nothing)));
  }
  return () => {
    let { disabled: y } = e, h = { active: i.value, selected: u.value, disabled: y }, k = { id: a, ref: l, role: "option", tabIndex: y === !0 ? void 0 : -1, "aria-disabled": y === !0 ? !0 : void 0, "aria-selected": u.value, disabled: void 0, onMousedown: m, onFocus: f, onPointerenter: v, onMouseenter: v, onPointermove: g, onMousemove: g, onPointerleave: w, onMouseleave: w }, b = En(e, ["order", "value"]);
    return ge({ ourProps: k, theirProps: b, slot: h, attrs: t, slots: n, name: "ComboboxOption" });
  };
} });
function Fr(e, n, t, o) {
  Un.isServer || Le((r) => {
    e = e ?? window, e.addEventListener(n, t, o), r(() => e.removeEventListener(n, t, o));
  });
}
var rt = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(rt || {});
function Nr() {
  let e = C(0), n = C(!0);
  return Ua(n, "keydown", (t) => {
    t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
  }), e;
}
function ol(e) {
  if (!e) return /* @__PURE__ */ new Set();
  if (typeof e == "function") return new Set(e());
  let n = /* @__PURE__ */ new Set();
  for (let t of e.value) {
    let o = N(t);
    o instanceof HTMLElement && n.add(o);
  }
  return n;
}
var rl = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(rl || {});
let $n = Object.assign(j({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: [Object, Function], default: C(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: n, slots: t, expose: o }) {
  let r = C(null);
  o({ el: r, $el: r });
  let a = E(() => ut(r)), l = C(!1);
  ie(() => l.value = !0), we(() => l.value = !1), Gi({ ownerDocument: a }, E(() => l.value && !!(e.features & 16)));
  let s = Wi({ ownerDocument: a, container: r, initialFocus: E(() => e.initialFocus) }, E(() => l.value && !!(e.features & 2)));
  Ui({ ownerDocument: a, container: r, containers: e.containers, previousActiveElement: s }, E(() => l.value && !!(e.features & 8)));
  let i = Nr();
  function u(f) {
    let p = N(r);
    p && ((v) => v())(() => {
      Pe(i.value, { [rt.Forwards]: () => {
        pt(p, qe.First, { skipElements: [f.relatedTarget] });
      }, [rt.Backwards]: () => {
        pt(p, qe.Last, { skipElements: [f.relatedTarget] });
      } });
    });
  }
  let c = C(!1);
  function d(f) {
    f.key === "Tab" && (c.value = !0, requestAnimationFrame(() => {
      c.value = !1;
    }));
  }
  function m(f) {
    if (!l.value) return;
    let p = ol(e.containers);
    N(r) instanceof HTMLElement && p.add(N(r));
    let v = f.relatedTarget;
    v instanceof HTMLElement && v.dataset.headlessuiFocusGuard !== "true" && (al(p, v) || (c.value ? pt(N(r), Pe(i.value, { [rt.Forwards]: () => qe.Next, [rt.Backwards]: () => qe.Previous }) | qe.WrapAround, { relativeTo: f.target }) : f.target instanceof HTMLElement && an(f.target)));
  }
  return () => {
    let f = {}, p = { ref: r, onKeydown: d, onFocusout: m }, { features: v, initialFocus: g, containers: w, ...y } = e;
    return se(xe, [!!(v & 4) && se(Rt, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: u, features: Et.Focusable }), ge({ ourProps: p, theirProps: { ...n, ...y }, slot: f, attrs: n, slots: t, name: "FocusTrap" }), !!(v & 4) && se(Rt, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: u, features: Et.Focusable })]);
  };
} }), { features: rl });
function Hi(e) {
  let n = C(Pt.slice());
  return le([e], ([t], [o]) => {
    o === !0 && t === !1 ? Dr(() => {
      n.value.splice(0);
    }) : o === !1 && t === !0 && (n.value = Pt.slice());
  }, { flush: "post" }), () => {
    var t;
    return (t = n.value.find((o) => o != null && o.isConnected)) != null ? t : null;
  };
}
function Gi({ ownerDocument: e }, n) {
  let t = Hi(n);
  ie(() => {
    Le(() => {
      var o, r;
      n.value || ((o = e.value) == null ? void 0 : o.activeElement) === ((r = e.value) == null ? void 0 : r.body) && an(t());
    }, { flush: "post" });
  }), we(() => {
    n.value && an(t());
  });
}
function Wi({ ownerDocument: e, container: n, initialFocus: t }, o) {
  let r = C(null), a = C(!1);
  return ie(() => a.value = !0), we(() => a.value = !1), ie(() => {
    le([n, t, o], (l, s) => {
      if (l.every((u, c) => (s == null ? void 0 : s[c]) === u) || !o.value) return;
      let i = N(n);
      i && Dr(() => {
        var u, c;
        if (!a.value) return;
        let d = N(t), m = (u = e.value) == null ? void 0 : u.activeElement;
        if (d) {
          if (d === m) {
            r.value = m;
            return;
          }
        } else if (i.contains(m)) {
          r.value = m;
          return;
        }
        d ? an(d) : pt(i, qe.First | qe.NoScroll) === zn.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), r.value = (c = e.value) == null ? void 0 : c.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), r;
}
function Ui({ ownerDocument: e, container: n, containers: t, previousActiveElement: o }, r) {
  var a;
  Fr((a = e.value) == null ? void 0 : a.defaultView, "focus", (l) => {
    if (!r.value) return;
    let s = ol(t);
    N(n) instanceof HTMLElement && s.add(N(n));
    let i = o.value;
    if (!i) return;
    let u = l.target;
    u && u instanceof HTMLElement ? al(s, u) ? (o.value = u, an(u)) : (l.preventDefault(), l.stopPropagation(), an(i)) : an(o.value);
  }, !0);
}
function al(e, n) {
  for (let t of e) if (t.contains(n)) return !0;
  return !1;
}
function qi(e) {
  let n = So(e.getSnapshot());
  return we(e.subscribe(() => {
    n.value = e.getSnapshot();
  })), n;
}
function Ki(e, n) {
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
function Yi() {
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
function Xi() {
  return Ga() ? { before({ doc: e, d: n, meta: t }) {
    function o(r) {
      return t.containers.flatMap((a) => a()).some((a) => a.contains(r));
    }
    n.microTask(() => {
      var r;
      if (window.getComputedStyle(e.documentElement).scrollBehavior !== "auto") {
        let s = Kt();
        s.style(e.documentElement, "scrollBehavior", "auto"), n.add(() => n.microTask(() => s.dispose()));
      }
      let a = (r = window.scrollY) != null ? r : window.pageYOffset, l = null;
      n.addEventListener(e, "click", (s) => {
        if (s.target instanceof HTMLElement) try {
          let i = s.target.closest("a");
          if (!i) return;
          let { hash: u } = new URL(i.href), c = e.querySelector(u);
          c && !o(c) && (l = c);
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
function Ji() {
  return { before({ doc: e, d: n }) {
    n.style(e.documentElement, "overflow", "hidden");
  } };
}
function Qi(e) {
  let n = {};
  for (let t of e) Object.assign(n, t(n));
  return n;
}
let nn = Ki(() => /* @__PURE__ */ new Map(), { PUSH(e, n) {
  var t;
  let o = (t = this.get(e)) != null ? t : { doc: e, count: 0, d: Kt(), meta: /* @__PURE__ */ new Set() };
  return o.count++, o.meta.add(n), this.set(e, o), this;
}, POP(e, n) {
  let t = this.get(e);
  return t && (t.count--, t.meta.delete(n)), this;
}, SCROLL_PREVENT({ doc: e, d: n, meta: t }) {
  let o = { doc: e, d: n, meta: Qi(t) }, r = [Xi(), Yi(), Ji()];
  r.forEach(({ before: a }) => a == null ? void 0 : a(o)), r.forEach(({ after: a }) => a == null ? void 0 : a(o));
}, SCROLL_ALLOW({ d: e }) {
  e.dispose();
}, TEARDOWN({ doc: e }) {
  this.delete(e);
} });
nn.subscribe(() => {
  let e = nn.getSnapshot(), n = /* @__PURE__ */ new Map();
  for (let [t] of e) n.set(t, t.documentElement.style.overflow);
  for (let t of e.values()) {
    let o = n.get(t.doc) === "hidden", r = t.count !== 0;
    (r && !o || !r && o) && nn.dispatch(t.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", t), t.count === 0 && nn.dispatch("TEARDOWN", t);
  }
});
function Zi(e, n, t) {
  let o = qi(nn), r = E(() => {
    let a = e.value ? o.value.get(e.value) : void 0;
    return a ? a.count > 0 : !1;
  });
  return le([e, n], ([a, l], [s], i) => {
    if (!a || !l) return;
    nn.dispatch("PUSH", a, t);
    let u = !1;
    i(() => {
      u || (nn.dispatch("POP", s ?? a, t), u = !0);
    });
  }, { immediate: !0 }), r;
}
let jo = /* @__PURE__ */ new Map(), Pn = /* @__PURE__ */ new Map();
function ua(e, n = C(!0)) {
  Le((t) => {
    var o;
    if (!n.value) return;
    let r = N(e);
    if (!r) return;
    t(function() {
      var l;
      if (!r) return;
      let s = (l = Pn.get(r)) != null ? l : 1;
      if (s === 1 ? Pn.delete(r) : Pn.set(r, s - 1), s !== 1) return;
      let i = jo.get(r);
      i && (i["aria-hidden"] === null ? r.removeAttribute("aria-hidden") : r.setAttribute("aria-hidden", i["aria-hidden"]), r.inert = i.inert, jo.delete(r));
    });
    let a = (o = Pn.get(r)) != null ? o : 0;
    Pn.set(r, a + 1), a === 0 && (jo.set(r, { "aria-hidden": r.getAttribute("aria-hidden"), inert: r.inert }), r.setAttribute("aria-hidden", "true"), r.inert = !0);
  });
}
function ll({ defaultContainers: e = [], portals: n, mainTreeNodeRef: t } = {}) {
  let o = C(null), r = ut(o);
  function a() {
    var l, s, i;
    let u = [];
    for (let c of e) c !== null && (c instanceof HTMLElement ? u.push(c) : "value" in c && c.value instanceof HTMLElement && u.push(c.value));
    if (n != null && n.value) for (let c of n.value) u.push(c);
    for (let c of (l = r == null ? void 0 : r.querySelectorAll("html > *, body > *")) != null ? l : []) c !== document.body && c !== document.head && c instanceof HTMLElement && c.id !== "headlessui-portal-root" && (c.contains(N(o)) || c.contains((i = (s = N(o)) == null ? void 0 : s.getRootNode()) == null ? void 0 : i.host) || u.some((d) => c.contains(d)) || u.push(c));
    return u;
  }
  return { resolveContainers: a, contains(l) {
    return a().some((s) => s.contains(l));
  }, mainTreeNodeRef: o, MainTreeNode() {
    return t != null ? null : se(Rt, { features: Et.Hidden, ref: o });
  } };
}
function eu() {
  let e = C(null);
  return { mainTreeNodeRef: e, MainTreeNode() {
    return se(Rt, { features: Et.Hidden, ref: e });
  } };
}
let sl = Symbol("ForcePortalRootContext");
function tu() {
  return me(sl, !1);
}
let ar = j({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: n, attrs: t }) {
  return Se(sl, e.force), () => {
    let { force: o, ...r } = e;
    return ge({ theirProps: r, ourProps: {}, slot: {}, slots: n, attrs: t, name: "ForcePortalRoot" });
  };
} }), il = Symbol("StackContext");
var lr = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(lr || {});
function nu() {
  return me(il, () => {
  });
}
function ou({ type: e, enabled: n, element: t, onUpdate: o }) {
  let r = nu();
  function a(...l) {
    o == null || o(...l), r(...l);
  }
  ie(() => {
    le(n, (l, s) => {
      l ? a(0, e, t) : s === !0 && a(1, e, t);
    }, { immediate: !0, flush: "sync" });
  }), we(() => {
    n.value && a(1, e, t);
  }), Se(il, a);
}
let ul = Symbol("DescriptionContext");
function ru() {
  let e = me(ul, null);
  if (e === null) throw new Error("Missing parent");
  return e;
}
function cl({ slot: e = C({}), name: n = "Description", props: t = {} } = {}) {
  let o = C([]);
  function r(a) {
    return o.value.push(a), () => {
      let l = o.value.indexOf(a);
      l !== -1 && o.value.splice(l, 1);
    };
  }
  return Se(ul, { register: r, slot: e, name: n, props: t }), E(() => o.value.length > 0 ? o.value.join(" ") : void 0);
}
j({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: () => `headlessui-description-${Me()}` } }, setup(e, { attrs: n, slots: t }) {
  let o = ru();
  return ie(() => we(o.register(e.id))), () => {
    let { name: r = "Description", slot: a = C({}), props: l = {} } = o, { id: s, ...i } = e, u = { ...Object.entries(l).reduce((c, [d, m]) => Object.assign(c, { [d]: L(m) }), {}), id: s };
    return ge({ ourProps: u, theirProps: i, slot: a.value, attrs: n, slots: t, name: r });
  };
} });
function au(e) {
  let n = ut(e);
  if (!n) {
    if (e === null) return null;
    throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`);
  }
  let t = n.getElementById("headlessui-portal-root");
  if (t) return t;
  let o = n.createElement("div");
  return o.setAttribute("id", "headlessui-portal-root"), n.body.appendChild(o);
}
let dl = j({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: n, attrs: t }) {
  let o = C(null), r = E(() => ut(o)), a = tu(), l = me(pl, null), s = C(a === !0 || l == null ? au(o.value) : l.resolveTarget()), i = C(!1);
  ie(() => {
    i.value = !0;
  }), Le(() => {
    a || l != null && (s.value = l.resolveTarget());
  });
  let u = me(sr, null), c = !1, d = Oa();
  return le(o, () => {
    if (c || !u) return;
    let m = N(o);
    m && (we(u.register(m), d), c = !0);
  }), we(() => {
    var m, f;
    let p = (m = r.value) == null ? void 0 : m.getElementById("headlessui-portal-root");
    p && s.value === p && s.value.children.length <= 0 && ((f = s.value.parentElement) == null || f.removeChild(s.value));
  }), () => {
    if (!i.value || s.value === null) return null;
    let m = { ref: o, "data-headlessui-portal": "" };
    return se(Oo, { to: s.value }, ge({ ourProps: m, theirProps: e, slot: {}, attrs: t, slots: n, name: "Portal" }));
  };
} }), sr = Symbol("PortalParentContext");
function fl() {
  let e = me(sr, null), n = C([]);
  function t(a) {
    return n.value.push(a), e && e.register(a), () => o(a);
  }
  function o(a) {
    let l = n.value.indexOf(a);
    l !== -1 && n.value.splice(l, 1), e && e.unregister(a);
  }
  let r = { register: t, unregister: o, portals: n };
  return [n, j({ name: "PortalWrapper", setup(a, { slots: l }) {
    return Se(sr, r), () => {
      var s;
      return (s = l.default) == null ? void 0 : s.call(l);
    };
  } })];
}
let pl = Symbol("PortalGroupContext"), lu = j({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: n, slots: t }) {
  let o = Hn({ resolveTarget() {
    return e.target;
  } });
  return Se(pl, o), () => {
    let { target: r, ...a } = e;
    return ge({ theirProps: a, ourProps: {}, slot: {}, attrs: n, slots: t, name: "PortalGroup" });
  };
} });
var su = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(su || {});
let ir = Symbol("DialogContext");
function qn(e) {
  let n = me(ir, null);
  if (n === null) {
    let t = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t, qn), t;
  }
  return n;
}
let eo = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", iu = j({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: eo }, initialFocus: { type: Object, default: null }, id: { type: String, default: () => `headlessui-dialog-${Me()}` }, role: { type: String, default: "dialog" } }, emits: { close: (e) => !0 }, setup(e, { emit: n, attrs: t, slots: o, expose: r }) {
  var a;
  let l = C(!1);
  ie(() => {
    l.value = !0;
  });
  let s = !1, i = E(() => e.role === "dialog" || e.role === "alertdialog" ? e.role : (s || (s = !0, console.warn(`Invalid role [${i}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog")), u = C(0), c = _n(), d = E(() => e.open === eo && c !== null ? (c.value & De.Open) === De.Open : e.open), m = C(null), f = E(() => ut(m));
  if (r({ el: m, $el: m }), !(e.open !== eo || c !== null)) throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof d.value != "boolean") throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${d.value === eo ? void 0 : e.open}`);
  let p = E(() => l.value && d.value ? 0 : 1), v = E(() => p.value === 0), g = E(() => u.value > 1), w = me(ir, null) !== null, [y, h] = fl(), { resolveContainers: k, mainTreeNodeRef: b, MainTreeNode: _ } = ll({ portals: y, defaultContainers: [E(() => {
    var oe;
    return (oe = B.panelRef.value) != null ? oe : m.value;
  })] }), S = E(() => g.value ? "parent" : "leaf"), T = E(() => c !== null ? (c.value & De.Closing) === De.Closing : !1), X = E(() => w || T.value ? !1 : v.value), P = E(() => {
    var oe, Oe, Ge;
    return (Ge = Array.from((Oe = (oe = f.value) == null ? void 0 : oe.querySelectorAll("body > *")) != null ? Oe : []).find((Fe) => Fe.id === "headlessui-portal-root" ? !1 : Fe.contains(N(b)) && Fe instanceof HTMLElement)) != null ? Ge : null;
  });
  ua(P, X);
  let V = E(() => g.value ? !0 : v.value), K = E(() => {
    var oe, Oe, Ge;
    return (Ge = Array.from((Oe = (oe = f.value) == null ? void 0 : oe.querySelectorAll("[data-headlessui-portal]")) != null ? Oe : []).find((Fe) => Fe.contains(N(b)) && Fe instanceof HTMLElement)) != null ? Ge : null;
  });
  ua(K, V), ou({ type: "Dialog", enabled: E(() => p.value === 0), element: m, onUpdate: (oe, Oe) => {
    if (Oe === "Dialog") return Pe(oe, { [lr.Add]: () => u.value += 1, [lr.Remove]: () => u.value -= 1 });
  } });
  let x = cl({ name: "DialogDescription", slot: E(() => ({ open: d.value })) }), I = C(null), B = { titleId: I, panelRef: C(null), dialogState: p, setTitleId(oe) {
    I.value !== oe && (I.value = oe);
  }, close() {
    n("close", !1);
  } };
  Se(ir, B);
  let Y = E(() => !(!v.value || g.value));
  Pr(k, (oe, Oe) => {
    oe.preventDefault(), B.close(), He(() => Oe == null ? void 0 : Oe.focus());
  }, Y);
  let ne = E(() => !(g.value || p.value !== 0));
  Fr((a = f.value) == null ? void 0 : a.defaultView, "keydown", (oe) => {
    ne.value && (oe.defaultPrevented || oe.key === Te.Escape && (oe.preventDefault(), oe.stopPropagation(), B.close()));
  });
  let fe = E(() => !(T.value || p.value !== 0 || w));
  return Zi(f, fe, (oe) => {
    var Oe;
    return { containers: [...(Oe = oe.containers) != null ? Oe : [], k] };
  }), Le((oe) => {
    if (p.value !== 0) return;
    let Oe = N(m);
    if (!Oe) return;
    let Ge = new ResizeObserver((Fe) => {
      for (let Xt of Fe) {
        let yt = Xt.target.getBoundingClientRect();
        yt.x === 0 && yt.y === 0 && yt.width === 0 && yt.height === 0 && B.close();
      }
    });
    Ge.observe(Oe), oe(() => Ge.disconnect());
  }), () => {
    let { id: oe, open: Oe, initialFocus: Ge, ...Fe } = e, Xt = { ...t, ref: m, id: oe, role: i.value, "aria-modal": p.value === 0 ? !0 : void 0, "aria-labelledby": I.value, "aria-describedby": x.value }, yt = { open: p.value === 0 };
    return se(ar, { force: !0 }, () => [se(dl, () => se(lu, { target: m.value }, () => se(ar, { force: !1 }, () => se($n, { initialFocus: Ge, containers: k, features: v.value ? Pe(S.value, { parent: $n.features.RestoreFocus, leaf: $n.features.All & ~$n.features.FocusLock }) : $n.features.None }, () => se(h, {}, () => ge({ ourProps: Xt, theirProps: { ...Fe, ...t }, slot: yt, attrs: t, slots: o, visible: p.value === 0, features: it.RenderStrategy | it.Static, name: "Dialog" })))))), se(_)]);
  };
} });
j({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-overlay-${Me()}` } }, setup(e, { attrs: n, slots: t }) {
  let o = qn("DialogOverlay");
  function r(a) {
    a.target === a.currentTarget && (a.preventDefault(), a.stopPropagation(), o.close());
  }
  return () => {
    let { id: a, ...l } = e;
    return ge({ ourProps: { id: a, "aria-hidden": !0, onClick: r }, theirProps: l, slot: { open: o.dialogState.value === 0 }, attrs: n, slots: t, name: "DialogOverlay" });
  };
} });
j({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-backdrop-${Me()}` } }, inheritAttrs: !1, setup(e, { attrs: n, slots: t, expose: o }) {
  let r = qn("DialogBackdrop"), a = C(null);
  return o({ el: a, $el: a }), ie(() => {
    if (r.panelRef.value === null) throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { id: l, ...s } = e, i = { id: l, ref: a, "aria-hidden": !0 };
    return se(ar, { force: !0 }, () => se(dl, () => ge({ ourProps: i, theirProps: { ...n, ...s }, slot: { open: r.dialogState.value === 0 }, attrs: n, slots: t, name: "DialogBackdrop" })));
  };
} });
let uu = j({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-panel-${Me()}` } }, setup(e, { attrs: n, slots: t, expose: o }) {
  let r = qn("DialogPanel");
  o({ el: r.panelRef, $el: r.panelRef });
  function a(l) {
    l.stopPropagation();
  }
  return () => {
    let { id: l, ...s } = e, i = { id: l, ref: r.panelRef, onClick: a };
    return ge({ ourProps: i, theirProps: s, slot: { open: r.dialogState.value === 0 }, attrs: n, slots: t, name: "DialogPanel" });
  };
} }), cu = j({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: () => `headlessui-dialog-title-${Me()}` } }, setup(e, { attrs: n, slots: t }) {
  let o = qn("DialogTitle");
  return ie(() => {
    o.setTitleId(e.id), we(() => o.setTitleId(null));
  }), () => {
    let { id: r, ...a } = e;
    return ge({ ourProps: { id: r }, theirProps: a, slot: { open: o.dialogState.value === 0 }, attrs: n, slots: t, name: "DialogTitle" });
  };
} });
var du = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(du || {});
let ml = Symbol("PopoverContext");
function Ao(e) {
  let n = me(ml, null);
  if (n === null) {
    let t = new Error(`<${e} /> is missing a parent <${bl.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t, Ao), t;
  }
  return n;
}
let vl = Symbol("PopoverGroupContext");
function hl() {
  return me(vl, null);
}
let gl = Symbol("PopoverPanelContext");
function fu() {
  return me(gl, null);
}
let bl = j({ name: "Popover", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: n, attrs: t, expose: o }) {
  var r;
  let a = C(null);
  o({ el: a, $el: a });
  let l = C(1), s = C(null), i = C(null), u = C(null), c = C(null), d = E(() => ut(a)), m = E(() => {
    var b, _;
    if (!N(s) || !N(c)) return !1;
    for (let x of document.querySelectorAll("body > *")) if (Number(x == null ? void 0 : x.contains(N(s))) ^ Number(x == null ? void 0 : x.contains(N(c)))) return !0;
    let S = Io(), T = S.indexOf(N(s)), X = (T + S.length - 1) % S.length, P = (T + 1) % S.length, V = S[X], K = S[P];
    return !((b = N(c)) != null && b.contains(V)) && !((_ = N(c)) != null && _.contains(K));
  }), f = { popoverState: l, buttonId: C(null), panelId: C(null), panel: c, button: s, isPortalled: m, beforePanelSentinel: i, afterPanelSentinel: u, togglePopover() {
    l.value = Pe(l.value, { 0: 1, 1: 0 });
  }, closePopover() {
    l.value !== 1 && (l.value = 1);
  }, close(b) {
    f.closePopover();
    let _ = b ? b instanceof HTMLElement ? b : b.value instanceof HTMLElement ? N(b) : N(f.button) : N(f.button);
    _ == null || _.focus();
  } };
  Se(ml, f), Ar(E(() => Pe(l.value, { 0: De.Open, 1: De.Closed })));
  let p = { buttonId: f.buttonId, panelId: f.panelId, close() {
    f.closePopover();
  } }, v = hl(), g = v == null ? void 0 : v.registerPopover, [w, y] = fl(), h = ll({ mainTreeNodeRef: v == null ? void 0 : v.mainTreeNodeRef, portals: w, defaultContainers: [s, c] });
  function k() {
    var b, _, S, T;
    return (T = v == null ? void 0 : v.isFocusWithinPopoverGroup()) != null ? T : ((b = d.value) == null ? void 0 : b.activeElement) && (((_ = N(s)) == null ? void 0 : _.contains(d.value.activeElement)) || ((S = N(c)) == null ? void 0 : S.contains(d.value.activeElement)));
  }
  return Le(() => g == null ? void 0 : g(p)), Fr((r = d.value) == null ? void 0 : r.defaultView, "focus", (b) => {
    var _, S;
    b.target !== window && b.target instanceof HTMLElement && l.value === 0 && (k() || s && c && (h.contains(b.target) || (_ = N(f.beforePanelSentinel)) != null && _.contains(b.target) || (S = N(f.afterPanelSentinel)) != null && S.contains(b.target) || f.closePopover()));
  }, !0), Pr(h.resolveContainers, (b, _) => {
    var S;
    f.closePopover(), ja(_, $r.Loose) || (b.preventDefault(), (S = N(s)) == null || S.focus());
  }, E(() => l.value === 0)), () => {
    let b = { open: l.value === 0, close: f.close };
    return se(xe, [se(y, {}, () => ge({ theirProps: { ...e, ...t }, ourProps: { ref: a }, slot: b, slots: n, attrs: t, name: "Popover" })), se(h.MainTreeNode)]);
  };
} }), pu = j({ name: "PopoverButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: !1 }, id: { type: String, default: () => `headlessui-popover-button-${Me()}` } }, inheritAttrs: !1, setup(e, { attrs: n, slots: t, expose: o }) {
  let r = Ao("PopoverButton"), a = E(() => ut(r.button));
  o({ el: r.button, $el: r.button }), ie(() => {
    r.buttonId.value = e.id;
  }), we(() => {
    r.buttonId.value = null;
  });
  let l = hl(), s = l == null ? void 0 : l.closeOthers, i = fu(), u = E(() => i === null ? !1 : i.value === r.panelId.value), c = C(null), d = `headlessui-focus-sentinel-${Me()}`;
  u.value || Le(() => {
    r.button.value = N(c);
  });
  let m = Ir(E(() => ({ as: e.as, type: n.type })), c);
  function f(h) {
    var k, b, _, S, T;
    if (u.value) {
      if (r.popoverState.value === 1) return;
      switch (h.key) {
        case Te.Space:
        case Te.Enter:
          h.preventDefault(), (b = (k = h.target).click) == null || b.call(k), r.closePopover(), (_ = N(r.button)) == null || _.focus();
          break;
      }
    } else switch (h.key) {
      case Te.Space:
      case Te.Enter:
        h.preventDefault(), h.stopPropagation(), r.popoverState.value === 1 && (s == null || s(r.buttonId.value)), r.togglePopover();
        break;
      case Te.Escape:
        if (r.popoverState.value !== 0) return s == null ? void 0 : s(r.buttonId.value);
        if (!N(r.button) || (S = a.value) != null && S.activeElement && !((T = N(r.button)) != null && T.contains(a.value.activeElement))) return;
        h.preventDefault(), h.stopPropagation(), r.closePopover();
        break;
    }
  }
  function p(h) {
    u.value || h.key === Te.Space && h.preventDefault();
  }
  function v(h) {
    var k, b;
    e.disabled || (u.value ? (r.closePopover(), (k = N(r.button)) == null || k.focus()) : (h.preventDefault(), h.stopPropagation(), r.popoverState.value === 1 && (s == null || s(r.buttonId.value)), r.togglePopover(), (b = N(r.button)) == null || b.focus()));
  }
  function g(h) {
    h.preventDefault(), h.stopPropagation();
  }
  let w = Nr();
  function y() {
    let h = N(r.panel);
    if (!h) return;
    function k() {
      Pe(w.value, { [rt.Forwards]: () => pt(h, qe.First), [rt.Backwards]: () => pt(h, qe.Last) }) === zn.Error && pt(Io().filter((b) => b.dataset.headlessuiFocusGuard !== "true"), Pe(w.value, { [rt.Forwards]: qe.Next, [rt.Backwards]: qe.Previous }), { relativeTo: N(r.button) });
    }
    k();
  }
  return () => {
    let h = r.popoverState.value === 0, k = { open: h }, { id: b, ..._ } = e, S = u.value ? { ref: c, type: m.value, onKeydown: f, onClick: v } : { ref: c, id: b, type: m.value, "aria-expanded": r.popoverState.value === 0, "aria-controls": N(r.panel) ? r.panelId.value : void 0, disabled: e.disabled ? !0 : void 0, onKeydown: f, onKeyup: p, onClick: v, onMousedown: g };
    return se(xe, [ge({ ourProps: S, theirProps: { ...n, ..._ }, slot: k, attrs: n, slots: t, name: "PopoverButton" }), h && !u.value && r.isPortalled.value && se(Rt, { id: d, features: Et.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: y })]);
  };
} });
j({ name: "PopoverOverlay", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 } }, setup(e, { attrs: n, slots: t }) {
  let o = Ao("PopoverOverlay"), r = `headlessui-popover-overlay-${Me()}`, a = _n(), l = E(() => a !== null ? (a.value & De.Open) === De.Open : o.popoverState.value === 0);
  function s() {
    o.closePopover();
  }
  return () => {
    let i = { open: o.popoverState.value === 0 };
    return ge({ ourProps: { id: r, "aria-hidden": !0, onClick: s }, theirProps: e, slot: i, attrs: n, slots: t, features: it.RenderStrategy | it.Static, visible: l.value, name: "PopoverOverlay" });
  };
} });
let mu = j({ name: "PopoverPanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, focus: { type: Boolean, default: !1 }, id: { type: String, default: () => `headlessui-popover-panel-${Me()}` } }, inheritAttrs: !1, setup(e, { attrs: n, slots: t, expose: o }) {
  let { focus: r } = e, a = Ao("PopoverPanel"), l = E(() => ut(a.panel)), s = `headlessui-focus-sentinel-before-${Me()}`, i = `headlessui-focus-sentinel-after-${Me()}`;
  o({ el: a.panel, $el: a.panel }), ie(() => {
    a.panelId.value = e.id;
  }), we(() => {
    a.panelId.value = null;
  }), Se(gl, a.panelId), Le(() => {
    var g, w;
    if (!r || a.popoverState.value !== 0 || !a.panel) return;
    let y = (g = l.value) == null ? void 0 : g.activeElement;
    (w = N(a.panel)) != null && w.contains(y) || pt(N(a.panel), qe.First);
  });
  let u = _n(), c = E(() => u !== null ? (u.value & De.Open) === De.Open : a.popoverState.value === 0);
  function d(g) {
    var w, y;
    switch (g.key) {
      case Te.Escape:
        if (a.popoverState.value !== 0 || !N(a.panel) || l.value && !((w = N(a.panel)) != null && w.contains(l.value.activeElement))) return;
        g.preventDefault(), g.stopPropagation(), a.closePopover(), (y = N(a.button)) == null || y.focus();
        break;
    }
  }
  function m(g) {
    var w, y, h, k, b;
    let _ = g.relatedTarget;
    _ && N(a.panel) && ((w = N(a.panel)) != null && w.contains(_) || (a.closePopover(), ((h = (y = N(a.beforePanelSentinel)) == null ? void 0 : y.contains) != null && h.call(y, _) || (b = (k = N(a.afterPanelSentinel)) == null ? void 0 : k.contains) != null && b.call(k, _)) && _.focus({ preventScroll: !0 })));
  }
  let f = Nr();
  function p() {
    let g = N(a.panel);
    if (!g) return;
    function w() {
      Pe(f.value, { [rt.Forwards]: () => {
        var y;
        pt(g, qe.First) === zn.Error && ((y = N(a.afterPanelSentinel)) == null || y.focus());
      }, [rt.Backwards]: () => {
        var y;
        (y = N(a.button)) == null || y.focus({ preventScroll: !0 });
      } });
    }
    w();
  }
  function v() {
    let g = N(a.panel);
    if (!g) return;
    function w() {
      Pe(f.value, { [rt.Forwards]: () => {
        let y = N(a.button), h = N(a.panel);
        if (!y) return;
        let k = Io(), b = k.indexOf(y), _ = k.slice(0, b + 1), S = [...k.slice(b + 1), ..._];
        for (let T of S.slice()) if (T.dataset.headlessuiFocusGuard === "true" || h != null && h.contains(T)) {
          let X = S.indexOf(T);
          X !== -1 && S.splice(X, 1);
        }
        pt(S, qe.First, { sorted: !1 });
      }, [rt.Backwards]: () => {
        var y;
        pt(g, qe.Previous) === zn.Error && ((y = N(a.button)) == null || y.focus());
      } });
    }
    w();
  }
  return () => {
    let g = { open: a.popoverState.value === 0, close: a.close }, { id: w, focus: y, ...h } = e, k = { ref: a.panel, id: w, onKeydown: d, onFocusout: r && a.popoverState.value === 0 ? m : void 0, tabIndex: -1 };
    return ge({ ourProps: k, theirProps: { ...n, ...h }, attrs: n, slot: g, slots: { ...t, default: (...b) => {
      var _;
      return [se(xe, [c.value && a.isPortalled.value && se(Rt, { id: s, ref: a.beforePanelSentinel, features: Et.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: p }), (_ = t.default) == null ? void 0 : _.call(t, ...b), c.value && a.isPortalled.value && se(Rt, { id: i, ref: a.afterPanelSentinel, features: Et.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: v })])];
    } }, features: it.RenderStrategy | it.Static, visible: c.value, name: "PopoverPanel" });
  };
} });
j({ name: "PopoverGroup", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" } }, setup(e, { attrs: n, slots: t, expose: o }) {
  let r = C(null), a = So([]), l = E(() => ut(r)), s = eu();
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
  function c() {
    var m;
    let f = l.value;
    if (!f) return !1;
    let p = f.activeElement;
    return (m = N(r)) != null && m.contains(p) ? !0 : a.value.some((v) => {
      var g, w;
      return ((g = f.getElementById(v.buttonId.value)) == null ? void 0 : g.contains(p)) || ((w = f.getElementById(v.panelId.value)) == null ? void 0 : w.contains(p));
    });
  }
  function d(m) {
    for (let f of a.value) f.buttonId.value !== m && f.close();
  }
  return Se(vl, { registerPopover: u, unregisterPopover: i, isFocusWithinPopoverGroup: c, closeOthers: d, mainTreeNodeRef: s.mainTreeNodeRef }), () => se(xe, [ge({ ourProps: { ref: r }, theirProps: { ...e, ...n }, slot: {}, attrs: n, slots: t, name: "PopoverGroup" }), se(s.MainTreeNode)]);
} });
let yl = Symbol("LabelContext");
function wl() {
  let e = me(yl, null);
  if (e === null) {
    let n = new Error("You used a <Label /> component, but it is not inside a parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(n, wl), n;
  }
  return e;
}
function vu({ slot: e = {}, name: n = "Label", props: t = {} } = {}) {
  let o = C([]);
  function r(a) {
    return o.value.push(a), () => {
      let l = o.value.indexOf(a);
      l !== -1 && o.value.splice(l, 1);
    };
  }
  return Se(yl, { register: r, slot: e, name: n, props: t }), E(() => o.value.length > 0 ? o.value.join(" ") : void 0);
}
j({ name: "Label", props: { as: { type: [Object, String], default: "label" }, passive: { type: [Boolean], default: !1 }, id: { type: String, default: () => `headlessui-label-${Me()}` } }, setup(e, { slots: n, attrs: t }) {
  let o = wl();
  return ie(() => we(o.register(e.id))), () => {
    let { name: r = "Label", slot: a = {}, props: l = {} } = o, { id: s, passive: i, ...u } = e, c = { ...Object.entries(l).reduce((d, [m, f]) => Object.assign(d, { [m]: L(f) }), {}), id: s };
    return i && (delete c.onClick, delete c.htmlFor, delete u.onClick), ge({ ourProps: c, theirProps: u, slot: a, attrs: t, slots: n, name: r });
  };
} });
let xl = Symbol("GroupContext");
j({ name: "SwitchGroup", props: { as: { type: [Object, String], default: "template" } }, setup(e, { slots: n, attrs: t }) {
  let o = C(null), r = vu({ name: "SwitchLabel", props: { htmlFor: E(() => {
    var l;
    return (l = o.value) == null ? void 0 : l.id;
  }), onClick(l) {
    o.value && (l.currentTarget.tagName === "LABEL" && l.preventDefault(), o.value.click(), o.value.focus({ preventScroll: !0 }));
  } } }), a = cl({ name: "SwitchDescription" });
  return Se(xl, { switchRef: o, labelledby: r, describedby: a }), () => ge({ theirProps: e, ourProps: {}, slot: {}, slots: n, attrs: t, name: "SwitchGroup" });
} });
let hu = j({ name: "Switch", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "button" }, modelValue: { type: Boolean, default: void 0 }, defaultChecked: { type: Boolean, optional: !0 }, form: { type: String, optional: !0 }, name: { type: String, optional: !0 }, value: { type: String, optional: !0 }, id: { type: String, default: () => `headlessui-switch-${Me()}` }, disabled: { type: Boolean, default: !1 }, tabIndex: { type: Number, default: 0 } }, inheritAttrs: !1, setup(e, { emit: n, attrs: t, slots: o, expose: r }) {
  let a = me(xl, null), [l, s] = za(E(() => e.modelValue), (g) => n("update:modelValue", g), E(() => e.defaultChecked));
  function i() {
    s(!l.value);
  }
  let u = C(null), c = a === null ? u : a.switchRef, d = Ir(E(() => ({ as: e.as, type: t.type })), c);
  r({ el: c, $el: c });
  function m(g) {
    g.preventDefault(), i();
  }
  function f(g) {
    g.key === Te.Space ? (g.preventDefault(), i()) : g.key === Te.Enter && Bi(g.currentTarget);
  }
  function p(g) {
    g.preventDefault();
  }
  let v = E(() => {
    var g, w;
    return (w = (g = N(c)) == null ? void 0 : g.closest) == null ? void 0 : w.call(g, "form");
  });
  return ie(() => {
    le([v], () => {
      if (!v.value || e.defaultChecked === void 0) return;
      function g() {
        s(e.defaultChecked);
      }
      return v.value.addEventListener("reset", g), () => {
        var w;
        (w = v.value) == null || w.removeEventListener("reset", g);
      };
    }, { immediate: !0 });
  }), () => {
    let { id: g, name: w, value: y, form: h, tabIndex: k, ...b } = e, _ = { checked: l.value }, S = { id: g, ref: c, role: "switch", type: d.value, tabIndex: k === -1 ? 0 : k, "aria-checked": l.value, "aria-labelledby": a == null ? void 0 : a.labelledby.value, "aria-describedby": a == null ? void 0 : a.describedby.value, onClick: m, onKeyup: f, onKeypress: p };
    return se(xe, [w != null && l.value != null ? se(Rt, Ya({ features: Et.Hidden, as: "input", type: "checkbox", hidden: !0, readOnly: !0, checked: l.value, form: h, disabled: b.disabled, name: w, value: y })) : null, ge({ ourProps: S, theirProps: { ...t, ...En(b, ["modelValue", "defaultChecked"]) }, slot: _, attrs: t, slots: o, name: "Switch" })]);
  };
} });
function gu(e) {
  let n = { called: !1 };
  return (...t) => {
    if (!n.called) return n.called = !0, e(...t);
  };
}
function Ho(e, ...n) {
  e && n.length > 0 && e.classList.add(...n);
}
function to(e, ...n) {
  e && n.length > 0 && e.classList.remove(...n);
}
var ur = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(ur || {});
function bu(e, n) {
  let t = Kt();
  if (!e) return t.dispose;
  let { transitionDuration: o, transitionDelay: r } = getComputedStyle(e), [a, l] = [o, r].map((s) => {
    let [i = 0] = s.split(",").filter(Boolean).map((u) => u.includes("ms") ? parseFloat(u) : parseFloat(u) * 1e3).sort((u, c) => c - u);
    return i;
  });
  return a !== 0 ? t.setTimeout(() => n("finished"), a + l) : n("finished"), t.add(() => n("cancelled")), t.dispose;
}
function ca(e, n, t, o, r, a) {
  let l = Kt(), s = a !== void 0 ? gu(a) : () => {
  };
  return to(e, ...r), Ho(e, ...n, ...t), l.nextFrame(() => {
    to(e, ...t), Ho(e, ...o), l.add(bu(e, (i) => (to(e, ...o, ...n), Ho(e, ...r), s(i))));
  }), l.add(() => to(e, ...n, ...t, ...o, ...r)), l.add(() => s("cancelled")), l.dispose;
}
function Jt(e = "") {
  return e.split(/\s+/).filter((n) => n.length > 1);
}
let Vr = Symbol("TransitionContext");
var yu = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(yu || {});
function wu() {
  return me(Vr, null) !== null;
}
function xu() {
  let e = me(Vr, null);
  if (e === null) throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function ku() {
  let e = me(zr, null);
  if (e === null) throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let zr = Symbol("NestingContext");
function Ro(e) {
  return "children" in e ? Ro(e.children) : e.value.filter(({ state: n }) => n === "visible").length > 0;
}
function kl(e) {
  let n = C([]), t = C(!1);
  ie(() => t.value = !0), we(() => t.value = !1);
  function o(a, l = zt.Hidden) {
    let s = n.value.findIndex(({ id: i }) => i === a);
    s !== -1 && (Pe(l, { [zt.Unmount]() {
      n.value.splice(s, 1);
    }, [zt.Hidden]() {
      n.value[s].state = "hidden";
    } }), !Ro(n) && t.value && (e == null || e()));
  }
  function r(a) {
    let l = n.value.find(({ id: s }) => s === a);
    return l ? l.state !== "visible" && (l.state = "visible") : n.value.push({ id: a, state: "visible" }), () => o(a, zt.Unmount);
  }
  return { children: n, register: r, unregister: o };
}
let Cl = it.RenderStrategy, cr = j({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: n, attrs: t, slots: o, expose: r }) {
  let a = C(0);
  function l() {
    a.value |= De.Opening, n("beforeEnter");
  }
  function s() {
    a.value &= ~De.Opening, n("afterEnter");
  }
  function i() {
    a.value |= De.Closing, n("beforeLeave");
  }
  function u() {
    a.value &= ~De.Closing, n("afterLeave");
  }
  if (!wu() && Ri()) return () => se(Sl, { ...e, onBeforeEnter: l, onAfterEnter: s, onBeforeLeave: i, onAfterLeave: u }, o);
  let c = C(null), d = E(() => e.unmount ? zt.Unmount : zt.Hidden);
  r({ el: c, $el: c });
  let { show: m, appear: f } = xu(), { register: p, unregister: v } = ku(), g = C(m.value ? "visible" : "hidden"), w = { value: !0 }, y = Me(), h = { value: !1 }, k = kl(() => {
    !h.value && g.value !== "hidden" && (g.value = "hidden", v(y), u());
  });
  ie(() => {
    let x = p(y);
    we(x);
  }), Le(() => {
    if (d.value === zt.Hidden && y) {
      if (m.value && g.value !== "visible") {
        g.value = "visible";
        return;
      }
      Pe(g.value, { hidden: () => v(y), visible: () => p(y) });
    }
  });
  let b = Jt(e.enter), _ = Jt(e.enterFrom), S = Jt(e.enterTo), T = Jt(e.entered), X = Jt(e.leave), P = Jt(e.leaveFrom), V = Jt(e.leaveTo);
  ie(() => {
    Le(() => {
      if (g.value === "visible") {
        let x = N(c);
        if (x instanceof Comment && x.data === "") throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function K(x) {
    let I = w.value && !f.value, B = N(c);
    !B || !(B instanceof HTMLElement) || I || (h.value = !0, m.value && l(), m.value || i(), x(m.value ? ca(B, b, _, S, T, (Y) => {
      h.value = !1, Y === ur.Finished && s();
    }) : ca(B, X, P, V, T, (Y) => {
      h.value = !1, Y === ur.Finished && (Ro(k) || (g.value = "hidden", v(y), u()));
    })));
  }
  return ie(() => {
    le([m], (x, I, B) => {
      K(B), w.value = !1;
    }, { immediate: !0 });
  }), Se(zr, k), Ar(E(() => Pe(g.value, { visible: De.Open, hidden: De.Closed }) | a.value)), () => {
    let { appear: x, show: I, enter: B, enterFrom: Y, enterTo: ne, entered: fe, leave: oe, leaveFrom: Oe, leaveTo: Ge, ...Fe } = e, Xt = { ref: c }, yt = { ...Fe, ...f.value && m.value && Un.isServer ? { class: z([t.class, Fe.class, ...b, ..._]) } : {} };
    return ge({ theirProps: yt, ourProps: Xt, slot: {}, slots: o, attrs: t, features: Cl, visible: g.value === "visible", name: "TransitionChild" });
  };
} }), Cu = cr, Sl = j({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: n, attrs: t, slots: o }) {
  let r = _n(), a = E(() => e.show === null && r !== null ? (r.value & De.Open) === De.Open : e.show);
  Le(() => {
    if (![!0, !1].includes(a.value)) throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let l = C(a.value ? "visible" : "hidden"), s = kl(() => {
    l.value = "hidden";
  }), i = C(!0), u = { show: a, appear: E(() => e.appear || !i.value) };
  return ie(() => {
    Le(() => {
      i.value = !1, a.value ? l.value = "visible" : Ro(s) || (l.value = "hidden");
    });
  }), Se(zr, s), Se(Vr, u), () => {
    let c = En(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), d = { unmount: e.unmount };
    return ge({ ourProps: { ...d, as: "template" }, theirProps: {}, slot: {}, slots: { ...o, default: () => [se(Cu, { onBeforeEnter: () => n("beforeEnter"), onAfterEnter: () => n("afterEnter"), onBeforeLeave: () => n("beforeLeave"), onAfterLeave: () => n("afterLeave"), ...t, ...d, ...c }, o.default)] }, attrs: {}, features: Cl, visible: l.value === "visible", name: "Transition" });
  };
} });
const Su = { class: "relative" }, Ou = { class: "flex items-start flex-wrap gap-1 p-1" }, Eu = ["onClick"], _u = { class: "sr-only" }, Tu = { key: 0 }, Du = { key: 1 }, $u = { key: 1 }, Pu = { class: "border-t border-ring px-2 first:border-t-0 py-2 first:pt-0 last:pb-0" }, Iu = { class: "flex items-center text-base font-medium" }, Au = { key: 1 }, Ru = { class: "-mx-2.5" }, Mu = { key: 1 }, Lu = { key: 1 }, Go = /* @__PURE__ */ j({
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
    const o = t, r = e, a = C(), l = C(""), s = C(), i = C(!1), u = E(() => l.value ? r.items.filter(
      (p) => r.displayProperty(p).toLowerCase().includes(l.value.toLowerCase())
    ) : r.items), { floatingStyles: c } = On(s, a, {
      strategy: "fixed",
      transform: !1,
      middleware: [
        Sn({
          padding: 10,
          limiter: Tr({
            offset: 10
          })
        }),
        Po({
          allowedPlacements: ["top-start", "bottom-start"]
        }),
        Cn(10),
        _r({
          apply({ availableHeight: p, elements: v }) {
            const g = v.reference.getBoundingClientRect().width;
            Object.assign(v.floating.style, {
              minWidth: `${g}px`,
              maxHeight: `${p - 20}px`
            });
          }
        })
      ],
      whileElementsMounted: $o
    }), d = (p, v) => p.reduce(
      (g, w) => {
        var y;
        return (g[y = v(w)] || (g[y] = [])).push(w), g;
      },
      {}
    ), m = (p) => {
      if (!r.multiple || !Array.isArray(r.modelValue)) return;
      const v = r.modelValue.filter(
        (g) => g[r.uidProperty] !== p[r.uidProperty]
      );
      o("update:modelValue", v);
    }, f = (p) => {
      if (r.multiple && Array.isArray(r.modelValue) && r.modelValue.length > 0 && l.value.length === 0) {
        p.preventDefault();
        const v = r.modelValue.slice(0, -1);
        o("update:modelValue", v);
      }
    };
    return n({
      query: l,
      open: i
    }), (p, v) => (O(), R("div", {
      class: z(L(de)("relative rounded-lg"))
    }, [
      U(L(Rr), {
        "model-value": p.modelValue,
        multiple: p.multiple,
        nullable: p.nullable,
        "onUpdate:modelValue": v[3] || (v[3] = (g) => p.$emit("update:modelValue", g))
      }, {
        default: W(() => {
          var g, w;
          return [
            $("div", Su, [
              $("div", {
                ref_key: "reference",
                ref: s,
                class: z(
                  L(de)(
                    "border border-ring rounded-md hover:bg-accent/50 shadow-xs focus-within:outline-none focus-within:ring-3 focus-within:ring-ring/40 transition-[box-shadow,color]",
                    p.theme.baseDropdownInputContainer
                  )
                )
              }, [
                $("div", Ou, [
                  p.multiple && ((g = p.modelValue) != null && g.length) ? (O(!0), R(xe, { key: 0 }, Ke(p.modelValue, (y) => (O(), R("div", {
                    key: y[p.uidProperty],
                    class: "flex items-center gap-1 rounded-md bg-accent px-2 py-0.5 text-sm"
                  }, [
                    $("span", null, he(p.displayProperty(y)), 1),
                    $("button", {
                      type: "button",
                      class: "ml-1 rounded-full hover:bg-accent-foreground/20",
                      onClick: wn((h) => m(y), ["stop"])
                    }, [
                      $("span", _u, "Remove " + he(p.displayProperty(y)), 1),
                      v[4] || (v[4] = $("svg", {
                        class: "size-3",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "2"
                      }, [
                        $("path", { d: "M18 6L6 18M6 6l12 12" })
                      ], -1))
                    ], 8, Eu)
                  ]))), 128)) : ae("", !0),
                  U(L(Lr), {
                    class: z([
                      "flex-1 min-w-[120px] rounded-md border-0 bg-transparent pl-2.5 py-0.5 pr-8 text-sm truncate ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50",
                      p.multiple && ((w = p.modelValue) != null && w.length) ? "pl-1" : "",
                      p.theme.baseDropdownInputText
                    ]),
                    displayValue: p.displayProperty,
                    placeholder: p.placeholder,
                    autoComplete: "off",
                    onFocus: v[0] || (v[0] = (y) => i.value = !0),
                    onBlur: v[1] || (v[1] = (y) => i.value = !1),
                    onChange: v[2] || (v[2] = (y) => l.value = y.target.value),
                    onKeydown: Ea(f, ["delete"])
                  }, null, 8, ["class", "displayValue", "placeholder"])
                ]),
                U(L(Mr), {
                  class: z([
                    "absolute inset-y-0 right-0 flex items-center pr-2 text-muted-foreground"
                  ])
                }, {
                  default: W(() => [
                    U(L(hr), { class: "size-4 text-inherit" })
                  ]),
                  _: 1
                })
              ], 2),
              U(st, {
                "enter-active-class": "transition duration-200 ease-out",
                "enter-from-class": "translate-y-1 opacity-0",
                "enter-to-class": "translate-y-0 opacity-100",
                "leave-active-class": "transition duration-150 ease-in",
                "leave-from-class": "translate-y-0 opacity-100",
                "leave-to-class": "translate-y-1 opacity-0"
              }, {
                default: W(() => [
                  U(L(Br), {
                    ref_key: "floating",
                    ref: a,
                    class: z(
                      L(de)(
                        "fixed left-0 z-10 overflow-x-hidden overflow-y-auto rounded-lg bg-popover p-3 text-base shadow-lg border border-ring focus:outline-hidden sm:text-sm",
                        p.theme.generalFloatingPanelContainer
                      )
                    ),
                    style: Wt(L(c)),
                    static: p.isStatic
                  }, {
                    default: W(() => [
                      u.value.length === 0 ? (O(), R("div", Tu, [
                        p.$slots.empty ? G(p.$slots, "empty", { key: 0 }) : (O(), R("span", Du, "No results"))
                      ])) : ae("", !0),
                      p.groupBy ? (O(), R("div", $u, [
                        (O(!0), R(xe, null, Ke(d(
                          p.items,
                          (y) => y[p.groupBy]
                        ), (y, h) => (O(), R("div", Pu, [
                          $("div", Iu, [
                            p.$slots.group ? G(p.$slots, "group", Qe({
                              key: 0,
                              ref_for: !0
                            }, {
                              group: y,
                              groupName: h
                            })) : (O(), R("span", Au, he([
                              "undefined",
                              null,
                              void 0
                            ].includes(h) ? "Uncategorized" : h), 1))
                          ]),
                          $("div", Ru, [
                            (O(!0), R(xe, null, Ke(y, (k) => {
                              var b;
                              return O(), pe(L(jn), {
                                key: k[p.uidProperty],
                                value: k,
                                disabled: (b = p.disabledItems) == null ? void 0 : b.some(
                                  (_) => _[p.uidProperty] === k[p.uidProperty]
                                )
                              }, {
                                default: W(({ active: _, selected: S, disabled: T }) => [
                                  $("span", {
                                    class: z([
                                      "cursor-pointer hover:bg-accent rounded-md px-2 py-1 flex w-full truncate",
                                      _ && "bg-accent",
                                      S && "bg-accent",
                                      T && "opacity-50 cursor-not-allowed pointer-events-none"
                                    ])
                                  }, [
                                    p.$slots.item ? G(p.$slots, "item", Qe({
                                      key: 0,
                                      ref_for: !0
                                    }, {
                                      item: k,
                                      active: _,
                                      selected: S,
                                      disabled: T
                                    })) : (O(), R("span", Mu, he(p.displayProperty(k)), 1))
                                  ], 2)
                                ]),
                                _: 2
                              }, 1032, ["value", "disabled"]);
                            }), 128))
                          ])
                        ]))), 256))
                      ])) : (O(!0), R(xe, { key: 2 }, Ke(u.value, (y) => {
                        var h;
                        return O(), pe(L(jn), {
                          key: y[p.uidProperty],
                          value: y,
                          disabled: (h = p.disabledItems) == null ? void 0 : h.some(
                            (k) => k[p.uidProperty] === y[p.uidProperty]
                          )
                        }, {
                          default: W(({ active: k, selected: b, disabled: _ }) => [
                            $("span", {
                              class: z([
                                "cursor-pointer hover:bg-accent rounded-md px-2 py-1 flex w-full truncate",
                                k && "bg-accent",
                                b && "bg-accent",
                                _ && "opacity-50 cursor-not-allowed pointer-events-none"
                              ])
                            }, [
                              p.$slots.item ? G(p.$slots, "item", Qe({
                                key: 0,
                                ref_for: !0
                              }, {
                                item: y,
                                active: k,
                                selected: b,
                                disabled: _
                              })) : (O(), R("span", Lu, he(p.displayProperty(y)), 1))
                            ], 2)
                          ]),
                          _: 2
                        }, 1032, ["value", "disabled"]);
                      }), 128)),
                      p.$slots.options ? G(p.$slots, "options", kt(Qe({ key: 3 }, { filteredItems: u.value }))) : ae("", !0)
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
}), Bu = { class: "w-full space-y-3" }, Fu = ["onClick"], Nu = /* @__PURE__ */ j({
  __name: "ColorPicker",
  props: {
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const t = e, o = C({
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
    }), r = E({
      get: () => t.modelValue,
      set: (i) => {
        a("update:modelValue", i);
      }
    }), a = n, l = C(""), s = (i) => {
      l.value = i, r.value = i, setTimeout(() => {
        l.value = "";
      }, 300);
    };
    return (i, u) => (O(), R("div", null, [
      $("div", Bu, [
        (O(!0), R(xe, null, Ke(o.value, (c, d) => (O(), R("div", {
          key: `color-${d}`,
          class: "flex w-full items-center space-x-3"
        }, [
          (O(!0), R(xe, null, Ke(c, (m) => (O(), R("div", {
            key: `${d}-${m.name}`,
            class: z(
              L(bt)(
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
            l.value === m.hex ? (O(), R("div", {
              key: 0,
              class: z(["absolute inset-0 rounded-full animate-color-flash", m.background])
            }, null, 2)) : ae("", !0)
          ], 10, Fu))), 128))
        ]))), 128))
      ])
    ]));
  }
}), Vu = { class: "relative" }, zu = /* @__PURE__ */ j({
  __name: "Dropdown",
  setup(e, { expose: n }) {
    const t = C(!1), o = C(), r = C(/* @__PURE__ */ new Map()), a = C(null), l = () => Array.from(r.value.entries()).sort(([, c], [, d]) => {
      const m = c.compareDocumentPosition(d);
      return m & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : m & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
    }), s = Hn({
      isOpen: E(() => t.value),
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
      registerItem: (u, c) => {
        r.value.set(c, u);
      },
      unregisterItem: (u) => {
        r.value.delete(u), a.value === u && (a.value = null);
      },
      focusNext: () => {
        const u = l();
        if (u.length === 0) return;
        let c = -1;
        a.value && (c = u.findIndex(([p]) => p === a.value));
        const d = c < u.length - 1 ? c + 1 : 0, [m, f] = u[d];
        a.value = m, f == null || f.focus();
      },
      focusPrevious: () => {
        const u = l();
        if (u.length === 0) return;
        let c = -1;
        a.value && (c = u.findIndex(([p]) => p === a.value));
        const d = c > 0 ? c - 1 : u.length - 1, [m, f] = u[d];
        a.value = m, f == null || f.focus();
      },
      focusFirst: () => {
        const u = l();
        if (u.length === 0) return;
        const [c, d] = u[0];
        a.value = c, d == null || d.focus();
      },
      focusLast: () => {
        const u = l();
        if (u.length === 0) return;
        const [c, d] = u[u.length - 1];
        a.value = c, d == null || d.focus();
      },
      focusItem: (u) => {
        const c = r.value.get(u);
        c && (a.value = u, c.focus());
      },
      getActiveItemId: () => a.value
    });
    Se("dropdown", s), Se("triggerRef", o);
    const i = (u) => {
      if (t.value)
        switch (u.key) {
          case "Escape":
            u.preventDefault(), t.value = !1, a.value = null;
            break;
        }
    };
    return ie(() => {
      document.addEventListener("keydown", i);
    }), we(() => {
      document.removeEventListener("keydown", i);
    }), n({
      isOpen: t,
      open: s.open,
      close: s.close,
      toggle: s.toggle,
      triggerRef: o
    }), (u, c) => (O(), R("div", Vu, [
      G(u.$slots, "default")
    ]));
  }
}), ju = /* @__PURE__ */ j({
  __name: "DropdownTrigger",
  setup(e, { expose: n }) {
    var l;
    const t = me("dropdown"), o = C();
    console.log("DropdownTrigger context:", {
      dropdown: t,
      isOpen: (l = t == null ? void 0 : t.isOpen) == null ? void 0 : l.value
    }), ie(() => {
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
    }), (s, i) => (O(), R("div", {
      ref_key: "triggerRef",
      ref: o,
      role: "button",
      tabindex: "0",
      class: z([
        "inline-flex items-center justify-center",
        "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      ]),
      onClick: r,
      onKeydown: a
    }, [
      G(s.$slots, "default")
    ], 544));
  }
}), Hu = /* @__PURE__ */ j({
  __name: "DropdownContent",
  props: {
    side: { default: "bottom" },
    align: { default: "start" },
    sideOffset: { default: 4 },
    alignOffset: { default: 0 },
    avoidCollisions: { type: Boolean, default: !0 }
  },
  setup(e) {
    const n = e, t = me("dropdown"), o = me("triggerRef"), r = C(), a = E(
      () => {
        var d;
        return (o == null ? void 0 : o.value) || ((d = t == null ? void 0 : t.triggerRef) == null ? void 0 : d.value);
      }
    ), { floatingStyles: l, update: s } = On(
      a || C(null),
      r,
      {
        strategy: "absolute",
        placement: `${n.side}-${n.align}`,
        middleware: [
          Cn({
            mainAxis: n.sideOffset,
            crossAxis: n.alignOffset
          }),
          ...n.avoidCollisions ? [Er()] : [],
          ...n.avoidCollisions ? [Sn()] : []
          // autoPlacement(),
        ]
      }
    ), i = (d) => {
      d.stopPropagation();
    }, u = (d) => {
      if (t != null && t.isOpen)
        switch (d.key) {
          case "ArrowDown":
            d.preventDefault(), d.stopPropagation(), t.focusNext();
            break;
          case "ArrowUp":
            d.preventDefault(), d.stopPropagation(), t.focusPrevious();
            break;
          case "Home":
            d.preventDefault(), d.stopPropagation(), t.focusFirst();
            break;
          case "End":
            d.preventDefault(), d.stopPropagation(), t.focusLast();
            break;
          case "Escape":
            d.preventDefault(), d.stopPropagation(), t.close();
            break;
          case "Enter":
          case " ":
            d.stopPropagation();
            break;
          default:
            d.stopPropagation();
            break;
        }
    }, c = (d) => {
      if (console.log("Click outside detected", {
        isOpen: t == null ? void 0 : t.isOpen,
        hasContent: !!r.value,
        target: d.target
      }), !(t != null && t.isOpen) || !r.value) return;
      const m = d.target, f = a.value;
      console.log("Checking click outside", {
        triggerElement: f,
        isInTrigger: f == null ? void 0 : f.contains(m),
        isInContent: r.value.contains(m)
      }), f && !f.contains(m) && !r.value.contains(m) && (console.log("Closing dropdown"), t.close());
    };
    return le(
      () => t == null ? void 0 : t.isOpen,
      async (d) => {
        d ? (console.log("Dropdown opened, adding click outside handler"), document.addEventListener("click", c, !0), setTimeout(() => {
          t == null || t.focusFirst();
        }, 50)) : (console.log("Dropdown closed, removing click outside handler"), document.removeEventListener("click", c, !0));
      }
    ), le(
      () => a.value,
      async (d) => {
        d && (t != null && t.isOpen) && await He();
      }
    ), ie(async () => {
      await He(), s && s();
    }), we(() => {
      console.log("DropdownContent unmounted"), document.removeEventListener("click", c, !0);
    }), (d, m) => (O(), R("div", {
      ref_key: "contentRef",
      ref: r,
      class: "absolute z-50",
      style: Wt(L(l))
    }, [
      U(st, {
        "enter-active-class": "transition-all duration-200 ease-out",
        "leave-active-class": "transition-all duration-200 ease-in",
        "enter-from-class": "opacity-0 scale-95",
        "enter-to-class": "opacity-100 scale-100",
        "leave-from-class": "opacity-100 scale-100",
        "leave-to-class": "opacity-0 scale-95"
      }, {
        default: W(() => {
          var f;
          return [
            on($("div", {
              role: "menu",
              class: z([
                "relative min-w-[8rem] overflow-hidden rounded-md border border-ring bg-popover p-1 text-foreground shadow-lg"
              ]),
              onClick: i,
              onKeydown: u,
              tabindex: "-1"
            }, [
              G(d.$slots, "default")
            ], 544), [
              [rn, (f = L(t)) == null ? void 0 : f.isOpen]
            ])
          ];
        }),
        _: 3
      })
    ], 4));
  }
}), Gu = /* @__PURE__ */ j({
  __name: "DropdownItem",
  props: {
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["click", "select"],
  setup(e, { expose: n, emit: t }) {
    const o = e, r = t, a = me("dropdown"), l = C(), s = C();
    ie(() => {
      s.value = `dropdown-item-${Math.random().toString(36).substr(2, 9)}`, a && l.value && s.value && a.registerItem(l.value, s.value);
    }), we(() => {
      a && s.value && a.unregisterItem(s.value);
    });
    const i = E(() => (a == null ? void 0 : a.getActiveItemId()) === s.value), u = (p) => {
      o.disabled || (p.preventDefault(), p.stopPropagation(), r("click", p), r("select"), a == null || a.close());
    }, c = (p) => {
      if (!o.disabled)
        switch (p.key) {
          case "Enter":
          case " ":
            p.preventDefault(), r("select"), a == null || a.close();
            break;
        }
    }, d = () => {
      o.disabled || a && s.value && a.focusItem(s.value);
    }, m = () => {
      o.disabled;
    }, f = () => {
      o.disabled || a && s.value && a.focusItem(s.value);
    };
    return n({
      itemRef: l
    }), (p, v) => (O(), R("div", {
      ref_key: "itemRef",
      ref: l,
      role: "menuitem",
      tabindex: "-1",
      class: z([
        "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground",
        i.value ? "text-accent-foreground bg-accent" : "text-foreground/70 hover:text-accent-foreground",
        p.disabled && "pointer-events-none opacity-50"
      ]),
      onClick: u,
      onKeydown: c,
      onMouseenter: d,
      onMouseleave: m,
      onFocus: f
    }, [
      G(p.$slots, "default")
    ], 34));
  }
}), Wu = {
  class: /* @__PURE__ */ z(["px-2 py-1.5 text-sm font-semibold text-foreground"])
}, $f = /* @__PURE__ */ j({
  __name: "DropdownLabel",
  setup(e) {
    return (n, t) => (O(), R("div", Wu, [
      G(n.$slots, "default")
    ]));
  }
}), Uu = {
  role: "separator",
  class: /* @__PURE__ */ z(["-mx-1 my-1 h-px bg-gray-200", "dark:bg-gray-700"])
}, Pf = /* @__PURE__ */ j({
  __name: "DropdownSeparator",
  setup(e) {
    return (n, t) => (O(), R("div", Uu));
  }
}), qu = { class: "relative" }, If = /* @__PURE__ */ j({
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
    const o = e, r = t, a = C(!1), l = C(), s = C(), i = {
      isOpen: E(() => a.value),
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
    Se("dropdown", i);
    const { floatingStyles: u, placement: c } = On(l, s, {
      placement: `${o.side}-${o.align}`,
      middleware: [
        Cn({ mainAxis: o.sideOffset, crossAxis: o.alignOffset }),
        ...o.avoidCollisions ? [Er()] : [],
        ...o.avoidCollisions ? [Sn()] : [],
        Po()
      ],
      whileElementsMounted: $o
    }), d = E(() => c.value ? c.value.split("-")[0] : o.side), m = E(() => {
      switch (d.value) {
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
      actualSide: d,
      transformOrigin: m
    }), (f, p) => (O(), R("div", qu, [
      G(f.$slots, "default")
    ]));
  }
}), Af = /* @__PURE__ */ j({
  __name: "DropdownSubContent",
  setup(e) {
    const n = me("dropdown"), t = C(), o = C({}), r = C("left");
    ie(() => {
      var s;
      if (t.value) {
        const i = (s = Oa()) == null ? void 0 : s.parent;
        i && i.exposed && (i.exposed.contentRef = t.value, i.exposed.floatingStyles && (o.value = i.exposed.floatingStyles.value), i.exposed.transformOrigin && (r.value = i.exposed.transformOrigin.value));
      }
    });
    const a = (s) => {
      s.stopPropagation();
    }, l = (s) => {
      var c;
      if (!(n != null && n.isOpen) || !t.value) return;
      const i = s.target, u = (c = n.triggerRef) == null ? void 0 : c.value;
      u && !u.contains(i) && !t.value.contains(i) && n.close();
    };
    return ie(() => {
      setTimeout(() => {
        document.addEventListener("click", l, !0);
      }, 0);
    }), we(() => {
      document.removeEventListener("click", l, !0);
    }), (s, i) => (O(), pe(Oo, { to: "body" }, [
      U(st, {
        "enter-active-class": "transition-all duration-200 ease-out",
        "leave-active-class": "transition-all duration-150 ease-in",
        "enter-from-class": "opacity-0 scale-95",
        "enter-to-class": "opacity-100 scale-100",
        "leave-from-class": "opacity-100 scale-100",
        "leave-to-class": "opacity-0 scale-95"
      }, {
        default: W(() => {
          var u;
          return [
            on($("div", {
              ref_key: "contentRef",
              ref: t,
              role: "menu",
              class: z([
                "fixed z-50 min-w-[8rem] overflow-hidden rounded-md border bg-white p-1 text-gray-900 shadow-lg",
                "dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700"
              ]),
              style: Wt({
                ...o.value,
                transformOrigin: `${r.value} center`
              }),
              onClick: a
            }, [
              G(s.$slots, "default")
            ], 4), [
              [rn, (u = L(n)) == null ? void 0 : u.isOpen]
            ])
          ];
        }),
        _: 3
      })
    ]));
  }
}), Ku = ["data-state"], Rf = /* @__PURE__ */ j({
  __name: "DropdownSubTrigger",
  emits: ["click", "keydown"],
  setup(e, { expose: n, emit: t }) {
    const o = t, r = me("dropdown"), a = C();
    ie(() => {
      r && a.value && r.setTriggerRef(a.value);
    });
    const l = (c) => {
      c.preventDefault(), c.stopPropagation(), r == null || r.toggle(), o("click", c);
    }, s = (c) => {
      switch (c.key) {
        case "Enter":
        case " ":
          c.preventDefault(), r == null || r.toggle();
          break;
        case "ArrowRight":
          c.preventDefault(), r == null || r.open();
          break;
        case "ArrowLeft":
          c.preventDefault(), r == null || r.close();
          break;
      }
      o("keydown", c);
    }, i = () => {
      r == null || r.open();
    }, u = () => {
    };
    return n({
      triggerRef: a
    }), (c, d) => {
      var m;
      return O(), R("div", {
        ref_key: "triggerRef",
        ref: a,
        role: "menuitem",
        tabindex: "-1",
        class: z([
          "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors",
          "focus:bg-gray-100 focus:text-gray-900",
          "dark:focus:bg-gray-700 dark:focus:text-gray-100",
          "hover:bg-gray-100 hover:text-gray-900",
          "dark:hover:bg-gray-700 dark:hover:text-gray-100",
          "data-[state=open]:bg-gray-100 data-[state=open]:text-gray-900",
          "dark:data-[state=open]:bg-gray-700 dark:data-[state=open]:text-gray-100"
        ]),
        "data-state": (m = L(r)) != null && m.isOpen ? "open" : "closed",
        onClick: l,
        onKeydown: s,
        onMouseenter: i,
        onMouseleave: u
      }, [
        G(c.$slots, "default"),
        d[0] || (d[0] = $("svg", {
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
          $("polyline", { points: "6,9 12,15 18,9" })
        ], -1))
      ], 40, Ku);
    };
  }
}), Yu = ["innerHTML"], Wo = /* @__PURE__ */ j({
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
    return (n, t) => (O(), R("div", {
      class: z(
        L(de)(
          "bg-card border border-border border-dashed rounded-lg p-6",
          n.theme.container
        )
      )
    }, [
      $("h3", {
        class: z(L(de)("text-base font-semibold text-zinc-900", n.theme.title)),
        innerHTML: n.title
      }, null, 10, Yu),
      $("div", {
        class: z(L(de)("mt-1 text-muted-foreground", n.theme.description))
      }, [
        G(n.$slots, "default")
      ], 2)
    ], 2));
  }
}), Xu = ["aria-labelledby", "aria-describedby"], Ju = /* @__PURE__ */ j({
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
      return Tt(bt(w));
    }
    const r = t, a = e, l = C(), s = C(), i = E(
      () => `modal-title-${Math.random().toString(36).substr(2, 9)}`
    ), u = E(
      () => `modal-description-${Math.random().toString(36).substr(2, 9)}`
    );
    let c = null;
    const d = () => {
      a.preventBodyScroll && (c = document.body.style.overflow, document.body.style.overflow = "hidden");
    }, m = () => {
      a.preventBodyScroll && c !== null && (document.body.style.overflow = c, c = null);
    }, f = () => {
      r("close"), r("update:open", !1);
    }, p = (w) => {
      a.closeOnBackdropClick && w.target === l.value && f();
    }, v = (w) => {
      a.closeOnEscape && w.key === "Escape" && (w.preventDefault(), f());
    };
    le(
      () => a.open,
      async (w) => {
        w ? (d(), await He(), l.value && l.value.focus()) : m();
      }
    ), ie(() => {
      a.open && d(), document.addEventListener("keydown", g);
    }), we(() => {
      m(), document.removeEventListener("keydown", g);
    });
    const g = (w) => {
      a.open && a.closeOnEscape && w.key === "Escape" && (w.preventDefault(), f());
    };
    return n({
      close: f,
      modalContainerRef: l,
      backdropRef: s,
      titleId: i.value,
      descriptionId: u.value
    }), (w, y) => (O(), pe(Oo, { to: "body" }, [
      U(st, {
        "enter-active-class": "transition-all duration-300 ease-out",
        "enter-from-class": "opacity-0",
        "enter-to-class": "opacity-100",
        "leave-active-class": "transition-all duration-200 ease-in",
        "leave-from-class": "opacity-100",
        "leave-to-class": "opacity-0"
      }, {
        default: W(() => [
          w.open ? (O(), R("div", {
            key: 0,
            ref_key: "backdropRef",
            ref: s,
            class: z(
              o(
                "fixed inset-0 bg-primary/20 backdrop-blur-sm",
                w.theme.backdrop
              )
            ),
            style: { zIndex: "var(--z-modal-backdrop)" }
          }, null, 2)) : ae("", !0)
        ]),
        _: 1
      }),
      U(st, {
        "enter-active-class": "transition-all duration-150 ease-out",
        "enter-from-class": "opacity-0 scale-95 translate-y-4",
        "enter-to-class": "opacity-100 scale-100 translate-y-0",
        "leave-active-class": "transition-all duration-150 ease-in",
        "leave-from-class": "opacity-100 scale-100 translate-y-0",
        "leave-to-class": "opacity-0 scale-95 translate-y-4"
      }, {
        default: W(() => [
          w.open ? (O(), R("div", {
            key: 0,
            ref_key: "modalContainerRef",
            ref: l,
            onClick: p,
            class: z(
              o(
                "fixed inset-0 z-50 flex items-center justify-center",
                w.theme.backdrop
              )
            ),
            style: { zIndex: "var(--z-modal-backdrop)" },
            onKeydown: v,
            tabindex: "-1",
            role: "dialog",
            "aria-modal": !0,
            "aria-labelledby": i.value,
            "aria-describedby": u.value
          }, [
            G(w.$slots, "default", {}, void 0, !0)
          ], 42, Xu)) : ae("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), Qu = /* @__PURE__ */ Gn(Ju, [["__scopeId", "data-v-96442585"]]), Zu = /* @__PURE__ */ j({
  __name: "ModalContent",
  props: {
    size: { default: "default" },
    theme: { default: () => ({
      container: ""
    }) }
  },
  setup(e, { expose: n }) {
    function t(...l) {
      return Tt(bt(l));
    }
    const o = C(), r = (l) => {
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
        await He();
        const l = (s = o.value) == null ? void 0 : s.querySelector(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        l ? l.focus() : o.value && o.value.focus();
      }
    }), (l, s) => (O(), R("div", {
      ref_key: "modalRef",
      ref: o,
      class: z(
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
      onClick: s[0] || (s[0] = wn(() => {
      }, ["stop"])),
      onKeydown: r
    }, [
      G(l.$slots, "default")
    ], 34));
  }
}), ec = ["aria-label"], tc = /* @__PURE__ */ j({
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
      return Tt(bt(o));
    }
    return (o, r) => (O(), R("button", {
      onClick: r[0] || (r[0] = (a) => o.$emit("close")),
      class: z(
        t(
          "absolute top-6 right-6 p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors",
          o.theme.closeButton
        )
      ),
      type: "button",
      "aria-label": o.closeButtonLabel
    }, [
      U(L(gr), { class: "size-4" })
    ], 10, ec));
  }
}), nc = /* @__PURE__ */ j({
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
    }), (r, a) => (O(), pe(Qu, {
      open: r.open,
      "close-on-backdrop-click": r.closeOnBackdropClick,
      "close-on-escape": r.closeOnEscape,
      "prevent-body-scroll": r.preventBodyScroll,
      theme: r.theme,
      onClose: a[1] || (a[1] = (l) => r.$emit("close")),
      "onUpdate:open": a[2] || (a[2] = (l) => r.$emit("update:open", l))
    }, {
      default: W(() => [
        U(Zu, {
          size: r.size,
          theme: r.theme
        }, {
          default: W(() => [
            U(tc, {
              "close-button-label": r.closeButtonLabel,
              theme: r.theme,
              onClose: a[0] || (a[0] = (l) => r.$emit("close"))
            }, null, 8, ["close-button-label", "theme"]),
            G(r.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        }, 8, ["size", "theme"])
      ]),
      _: 3
    }, 8, ["open", "close-on-backdrop-click", "close-on-escape", "prevent-body-scroll", "theme"]));
  }
}), Mf = /* @__PURE__ */ Gn(nc, [["__scopeId", "data-v-5e273e5b"]]), oc = { class: "flex-1 min-w-0" }, Lf = /* @__PURE__ */ j({
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
      return Tt(bt(o));
    }
    return (o, r) => (O(), R("div", {
      class: z(t("flex items-center justify-between p-6", o.theme.header))
    }, [
      $("div", oc, [
        G(o.$slots, "default")
      ])
    ], 2));
  }
}), rc = ["id"], Bf = /* @__PURE__ */ j({
  __name: "ModalTitle",
  props: {
    titleId: {}
  },
  setup(e) {
    return (n, t) => (O(), R("h2", {
      id: n.titleId,
      class: "text-lg font-semibold text-foreground"
    }, [
      G(n.$slots, "default")
    ], 8, rc));
  }
}), Ff = /* @__PURE__ */ j({
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
      return Tt(bt(t));
    }
    return (t, o) => (O(), R("div", {
      class: z(n("flex-1 grow overflow-auto px-6", t.theme.content))
    }, [
      G(t.$slots, "default")
    ], 2));
  }
}), Nf = /* @__PURE__ */ j({
  __name: "ModalFooter",
  props: {
    theme: { default: () => ({
      footer: ""
    }) }
  },
  setup(e) {
    function n(...t) {
      return Tt(bt(t));
    }
    return (t, o) => (O(), R("div", {
      class: z(n("flex items-center justify-end gap-3 p-6", t.theme.footer))
    }, [
      G(t.$slots, "default")
    ], 2));
  }
}), ac = /* @__PURE__ */ j({
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
        Sn({
          padding: 10,
          limiter: Tr({
            offset: 10
          })
        }),
        Po({
          allowedPlacements: ["top-start", "bottom-start"]
        }),
        Cn(10),
        _r({
          apply({ availableHeight: e, elements: n }) {
            const t = n.reference.getBoundingClientRect().width;
            Object.assign(n.floating.style, {
              minWidth: `${t}px`,
              maxHeight: `${e - 20}px`
            });
          }
        })
      ],
      whileElementsMounted: $o
    }) },
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(e, { expose: n, emit: t }) {
    const o = e, r = t, a = C(), l = C(), s = C(o.open ?? !1);
    le(
      () => o.open,
      (d) => {
        d !== void 0 && (s.value = d);
      },
      { immediate: !0 }
    );
    const i = (d) => {
      s.value = d, r("update:open", d);
    }, { floatingStyles: u } = On(a, l, {
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
    }), (d, m) => (O(), pe(L(bl), {
      class: z(L(de)("relative inline-block text-left", d.theme.popoverMenu)),
      open: s.value,
      "onUpdate:open": i
    }, {
      default: W(({ open: f }) => [
        $("div", null, [
          U(L(pu), {
            ref_key: "reference",
            ref: a,
            class: z(
              L(de)(f ? "is-open" : "is-closed", d.theme.popoverMenuButton)
            )
          }, {
            default: W(() => [
              G(d.$slots, "trigger")
            ]),
            _: 2
          }, 1032, ["class"])
        ]),
        U(st, {
          "enter-active-class": "transition duration-200 ease-out",
          "enter-from-class": "translate-y-1 opacity-0",
          "enter-to-class": "translate-y-0 opacity-100",
          "leave-active-class": "transition duration-150 ease-in",
          "leave-from-class": "translate-y-0 opacity-100",
          "leave-to-class": "translate-y-1 opacity-0"
        }, {
          default: W(() => [
            U(L(mu), {
              ref_key: "floating",
              ref: l,
              class: z(
                L(de)(
                  "fixed z-50 transform overflow-x-hidden overflow-y-auto rounded-lg bg-background p-3 text-base shadow-lg ring-1 ring-ring focus:outline-hidden sm:text-sm",
                  d.theme.popoverMenuItems
                )
              ),
              style: Wt(L(u))
            }, {
              default: W(({ close: p }) => [
                G(d.$slots, "default", kt(Ht({ close: p })))
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
}), lc = { class: "relative" }, sc = { key: 0 }, ic = { class: "flex items-center gap-2" }, uc = { key: 2 }, cc = { key: 1 }, dc = { key: 3 }, fc = { class: "border-t border-border px-2 first:border-t-0 py-2 first:pt-0 last:pb-0" }, pc = { class: "flex items-center text-base font-medium" }, mc = { key: 1 }, vc = { class: "-mx-2.5" }, hc = { key: 1 }, gc = { key: 1 }, Ol = /* @__PURE__ */ j({
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
        Sn({
          padding: 10,
          limiter: Tr({
            offset: 10
          })
        }),
        Po({
          allowedPlacements: ["top-start", "bottom-start"]
        }),
        Cn(10),
        _r({
          apply({ availableHeight: e, elements: n }) {
            const t = n.reference.getBoundingClientRect().width;
            Object.assign(n.floating.style, {
              minWidth: `${t}px`,
              maxHeight: `${e - 20}px`
            });
          }
        })
      ],
      whileElementsMounted: $o
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
    const o = t, r = e, a = C([]), l = C(), s = C(""), i = C(), u = C(!1), c = C(!1), d = C(!1), m = E({
      get: () => r.modelValue,
      set: (v) => {
        o("update:modelValue", v);
      }
    }), { floatingStyles: f } = On(i, l, {
      strategy: r.floatingOptions.strategy,
      transform: r.floatingOptions.transform,
      placement: r.floatingOptions.placement,
      middleware: r.floatingOptions.middleware,
      whileElementsMounted: r.floatingOptions.whileElementsMounted
    });
    le(
      () => s.value,
      os(async () => {
        const v = new AbortController();
        r.searcher ? (u.value = !0, a.value = await r.searcher(
          s.value,
          v
        ), u.value = !1) : a.value = [];
      }, r.debounce)
    ), le(
      () => r.defaultItems,
      (v) => {
        a.value = v;
      },
      { immediate: !0 }
    );
    const p = (v, g) => v.reduce(
      (w, y) => {
        var h;
        return (w[h = g(y)] || (w[h] = [])).push(y), w;
      },
      {}
    );
    return n({
      focused: d,
      query: s,
      searching: u
    }), (v, g) => (O(), R("div", {
      class: z(L(de)("relative rounded-lg"))
    }, [
      U(L(Rr), {
        "model-value": m.value,
        immediate: v.immediate,
        nullable: v.nullable,
        multiple: v.multiple,
        "onUpdate:modelValue": g[3] || (g[3] = (w) => m.value = w)
      }, {
        default: W(() => [
          $("div", lc, [
            $("div", {
              ref_key: "reference",
              ref: i,
              class: z(L(de)(v.theme.baseDropdownInputContainer))
            }, [
              U(L(Lr), {
                class: z(
                  L(de)(
                    "flex w-full rounded-md border border-border bg-background pl-2.5 py-1.5 pr-8 text-sm truncate ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40 transition-[box-shadow,color] disabled:cursor-not-allowed disabled:opacity-50",
                    v.theme.baseDropdownInputText
                  )
                ),
                displayValue: v.displayProperty,
                placeholder: v.placeholder,
                autoComplete: "off",
                onFocus: g[0] || (g[0] = () => {
                  c.value = !0, d.value = !0;
                }),
                onBlur: g[1] || (g[1] = (w) => d.value = !1),
                onChange: g[2] || (g[2] = (w) => s.value = w.target.value)
              }, null, 8, ["class", "displayValue", "placeholder"]),
              U(L(Mr), {
                class: z([
                  "absolute inset-y-0 right-0 flex items-center pr-2 text-muted-foreground"
                ])
              }, {
                default: W(() => [
                  U(L(hr), { class: "size-4 text-inherit" })
                ]),
                _: 1
              })
            ], 2),
            U(st, {
              "enter-active-class": "transition duration-200 ease-out",
              "enter-from-class": "translate-y-1 opacity-0",
              "enter-to-class": "translate-y-0 opacity-100",
              "leave-active-class": "transition duration-150 ease-in",
              "leave-from-class": "translate-y-0 opacity-100",
              "leave-to-class": "translate-y-1 opacity-0"
            }, {
              default: W(() => [
                U(L(Br), {
                  ref_key: "floating",
                  ref: l,
                  class: z(
                    L(de)(
                      "fixed left-0 z-10 overflow-x-hidden overflow-y-auto rounded-lg bg-popover p-3 text-base shadow-lg ring-1 ring-black/5 focus:outline-hidden sm:text-sm",
                      v.theme.generalFloatingPanelContainer
                    )
                  ),
                  style: Wt(L(f)),
                  static: v.isStatic
                }, {
                  default: W(() => [
                    v.$slots.static ? (O(), R("div", sc, [
                      G(v.$slots, "static", kt(Ht({ query: s.value, searching: u.value })))
                    ])) : ae("", !0),
                    u.value ? G(v.$slots, "searching", { key: 1 }, () => [
                      $("span", ic, [
                        U(L(hs), { class: "size-4 animate-spin" }),
                        g[4] || (g[4] = $("span", null, "Searching...", -1))
                      ])
                    ]) : ae("", !0),
                    a.value.length === 0 && !u.value ? (O(), R("div", uc, [
                      v.$slots.empty ? G(v.$slots, "empty", { key: 0 }) : (O(), R("span", cc, "No results"))
                    ])) : ae("", !0),
                    v.groupBy && !u.value ? (O(), R("div", dc, [
                      (O(!0), R(xe, null, Ke(p(
                        [
                          ...v.prependItems,
                          ...a.value,
                          ...v.postpendItems
                        ],
                        (w) => w[v.groupBy]
                      ), (w, y) => (O(), R("div", fc, [
                        $("div", pc, [
                          v.$slots.group ? G(v.$slots, "group", Qe({
                            key: 0,
                            ref_for: !0
                          }, {
                            group: w,
                            groupName: y
                          })) : (O(), R("span", mc, he([
                            "undefined",
                            null,
                            void 0
                          ].includes(y) ? "Uncategorized" : y), 1))
                        ]),
                        $("div", vc, [
                          u.value ? ae("", !0) : (O(!0), R(xe, { key: 0 }, Ke(w, (h) => (O(), pe(L(jn), {
                            key: h[v.uidProperty],
                            value: h
                          }, {
                            default: W(({ active: k, selected: b }) => [
                              $("span", {
                                class: z([
                                  "cursor-pointer hover:bg-accent rounded-md px-2 py-1 flex w-full truncate",
                                  k && "bg-accent",
                                  b && "bg-accent"
                                ])
                              }, [
                                v.$slots.item ? G(v.$slots, "item", Qe({
                                  key: 0,
                                  ref_for: !0
                                }, {
                                  item: h,
                                  active: k,
                                  selected: b
                                })) : (O(), R("span", hc, he(v.displayProperty(h)), 1))
                              ], 2)
                            ]),
                            _: 2
                          }, 1032, ["value"]))), 128))
                        ])
                      ]))), 256))
                    ])) : u.value ? ae("", !0) : (O(!0), R(xe, { key: 4 }, Ke(a.value, (w) => (O(), pe(L(jn), {
                      key: w[v.uidProperty],
                      value: w
                    }, {
                      default: W(({ active: y, selected: h }) => [
                        $("span", {
                          class: z([
                            "cursor-pointer hover:bg-accent rounded-md px-2 py-1 flex w-full truncate",
                            y && "bg-accent",
                            h && "bg-accent"
                          ])
                        }, [
                          v.$slots.item ? G(v.$slots, "item", Qe({
                            key: 0,
                            ref_for: !0
                          }, { item: w, active: y, selected: h })) : (O(), R("span", gc, he(v.displayProperty(w)), 1))
                        ], 2)
                      ]),
                      _: 2
                    }, 1032, ["value"]))), 128)),
                    v.$slots.options ? G(v.$slots, "options", kt(Qe({ key: 5 }, { filteredItems: a.value }))) : ae("", !0)
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
}), bc = { class: "relative" }, Vf = /* @__PURE__ */ j({
  __name: "Tooltip",
  setup(e, { expose: n }) {
    const t = C(!1), o = C(), r = C("body"), a = Hn({
      isVisible: E(() => t.value),
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
      portalTarget: E(() => r.value)
    });
    return Se("tooltip", a), Se("triggerRef", o), n({
      isVisible: t,
      show: a.show,
      hide: a.hide,
      triggerRef: o,
      portalTarget: r
    }), (l, s) => (O(), R("div", bc, [
      G(l.$slots, "default")
    ]));
  }
}), zf = /* @__PURE__ */ j({
  __name: "TooltipTrigger",
  props: {
    delay: { default: 300 },
    hideDelay: { default: 0 }
  },
  setup(e) {
    const n = e, t = me("tooltip"), o = C();
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
    return ie(() => {
      o.value && (t == null || t.setTriggerRef(o.value), process.env.NODE_ENV === "development" && console.log("TooltipTrigger mounted:", {
        triggerRef: o.value,
        tooltip: t
      }));
    }), we(() => {
      r && clearTimeout(r), a && clearTimeout(a);
    }), (c, d) => (O(), R("div", {
      ref_key: "triggerRef",
      ref: o,
      onMouseenter: l,
      onMouseleave: s,
      onFocus: i,
      onBlur: u
    }, [
      G(c.$slots, "default")
    ], 544));
  }
}), yc = {
  role: "tooltip",
  class: "relative max-w-xs rounded-md bg-primary px-3 py-2 text-sm text-primary-foreground shadow-lg pointer-events-auto transform-gpu"
}, jf = /* @__PURE__ */ j({
  __name: "TooltipContent",
  props: {
    side: { default: "top" },
    align: { default: "center" },
    sideOffset: { default: 8 },
    alignOffset: { default: 0 },
    avoidCollisions: { type: Boolean, default: !0 }
  },
  setup(e) {
    const n = e, t = me("tooltip"), o = me("triggerRef"), r = C(), a = C(), l = E(
      () => {
        var p;
        return (o == null ? void 0 : o.value) || ((p = t == null ? void 0 : t.triggerRef) == null ? void 0 : p.value);
      }
    ), s = E(() => `${n.side}-${n.align}`), { floatingStyles: i, middlewareData: u, update: c } = On(
      l || C(null),
      r,
      {
        strategy: "fixed",
        placement: s,
        middleware: [
          Cn({
            mainAxis: n.sideOffset,
            crossAxis: n.alignOffset
          }),
          ...n.avoidCollisions ? [Er()] : [],
          ...n.avoidCollisions ? [Sn()] : [],
          li({ element: a })
        ]
      }
    ), d = E(() => {
      var v;
      const p = (v = u.value) == null ? void 0 : v.flip;
      return p && p.overflows && p.overflows.length > 0 ? p.overflows[0].placement : n.side;
    });
    le(
      [
        () => n.side,
        () => n.align,
        () => n.sideOffset,
        () => n.alignOffset
      ],
      () => {
        He(() => {
          c();
        });
      }
    ), le(
      () => t == null ? void 0 : t.isVisible,
      (p) => {
        p && He(() => {
          c();
        });
      },
      { immediate: !0 }
    ), le(i, (p) => {
      process.env.NODE_ENV === "development" && console.log("Tooltip positioning:", {
        requestedPlacement: s.value,
        actualPlacement: d.value,
        styles: p,
        triggerRef: l.value,
        contentRef: r.value
      });
    });
    const m = E(() => {
      const p = d.value, [v, g] = p.split("-"), w = g || "center";
      switch (v) {
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
    }), f = E(() => {
      var p;
      return ((p = u.value) == null ? void 0 : p.arrow) || {};
    });
    return ie(async () => {
      await He(), setTimeout(() => {
        c();
      }, 100);
    }), (p, v) => {
      var g;
      return O(), pe(Oo, {
        to: ((g = L(t)) == null ? void 0 : g.portalTarget) || "body"
      }, [
        $("div", {
          ref_key: "contentRef",
          ref: r,
          class: "fixed z-[9999] pointer-events-none",
          style: Wt(L(i))
        }, [
          U(st, {
            "enter-active-class": "transition-all duration-200 ease-out",
            "leave-active-class": "transition-all duration-150 ease-in",
            "enter-from-class": "opacity-0 scale-95 translate-y-1",
            "enter-to-class": "opacity-100 scale-100 translate-y-0",
            "leave-from-class": "opacity-100 scale-100 translate-y-0",
            "leave-to-class": "opacity-0 scale-95 translate-y-1"
          }, {
            default: W(() => {
              var w;
              return [
                on($("div", yc, [
                  G(p.$slots, "default"),
                  $("div", {
                    ref_key: "arrowRef",
                    ref: a,
                    class: z(["absolute w-2 h-2 bg-primary rotate-45", m.value]),
                    style: Wt(f.value)
                  }, null, 6)
                ], 512), [
                  [rn, (w = L(t)) == null ? void 0 : w.isVisible]
                ])
              ];
            }),
            _: 3
          })
        ], 4)
      ], 8, ["to"]);
    };
  }
}), wc = { class: "flex items-center gap-3" }, xc = { class: "flex items-center gap-2" }, kc = {
  key: 0,
  class: "w-2 h-2 bg-yellow-200 rounded-full m-0.5"
}, Cc = ["aria-label"], Sc = {
  key: 0,
  class: "w-4 h-4",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
}, Oc = {
  key: 1,
  class: "w-4 h-4",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
}, Ec = { class: "mt-2 text-xs opacity-70" }, Hf = /* @__PURE__ */ j({
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
    const n = e, { isDark: t, background: o, themeClass: r, toggleTheme: a } = Ta(), l = E(() => ["p-4 rounded-lg border transition-colors", {
      default: "bg-card text-card-foreground",
      compact: "bg-muted/50 text-muted-foreground",
      minimal: "bg-transparent"
    }[n.variant], n.theme.container].filter(Boolean).join(" ")), s = E(() => ["font-medium", n.theme.text].filter(Boolean).join(" ")), i = E(() => ["p-2 rounded-md transition-colors hover:bg-accent hover:text-accent-foreground", n.theme.button].filter(Boolean).join(" "));
    return (u, c) => (O(), R("div", {
      class: z(l.value)
    }, [
      $("div", wc, [
        $("div", xc, [
          $("div", {
            class: z([
              "w-4 h-4 rounded-full border-2 transition-colors",
              L(t) ? "bg-yellow-400 border-yellow-600" : "bg-blue-400 border-blue-600"
            ])
          }, [
            L(t) ? (O(), R("div", kc)) : ae("", !0)
          ], 2),
          $("span", {
            class: z(s.value)
          }, he(L(t) ? "Dark" : "Light") + " Theme ", 3)
        ]),
        $("button", {
          onClick: c[0] || (c[0] = //@ts-ignore
          (...d) => L(a) && L(a)(...d)),
          class: z(i.value),
          type: "button",
          "aria-label": `Switch to ${L(t) ? "light" : "dark"} theme`
        }, [
          L(t) ? (O(), R("svg", Sc, c[1] || (c[1] = [
            $("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            }, null, -1)
          ]))) : (O(), R("svg", Oc, c[2] || (c[2] = [
            $("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            }, null, -1)
          ])))
        ], 10, Cc)
      ]),
      $("div", Ec, [
        $("p", null, "Background: " + he(L(o)), 1),
        $("p", null, "Theme Class: " + he(L(r)), 1)
      ])
    ], 2));
  }
}), _c = {
  "aria-label": "Breadcrumb",
  class: "flex"
}, Gf = /* @__PURE__ */ j({
  __name: "Breadcrumbs",
  setup(e) {
    const n = C([]), t = Hn({
      items: E(() => n.value),
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
    return Se("breadcrumb", t), (o, r) => (O(), R("nav", _c, [
      G(o.$slots, "default")
    ]));
  }
}), Tc = { class: "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground" }, Wf = /* @__PURE__ */ j({
  __name: "BreadcrumbList",
  setup(e) {
    return (n, t) => (O(), R("ol", Tc, [
      G(n.$slots, "default")
    ]));
  }
}), Dc = { class: "inline-flex items-center gap-1.5" }, Uf = /* @__PURE__ */ j({
  __name: "BreadcrumbItem",
  setup(e) {
    return (n, t) => (O(), R("li", Dc, [
      G(n.$slots, "default")
    ]));
  }
}), qf = /* @__PURE__ */ j({
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
    const t = e, o = n, r = E(() => t.asChild ? "slot" : t.to ? "router-link" : "a");
    function a(l) {
      o("click", l);
    }
    return (l, s) => (O(), pe(_a(r.value), {
      href: l.href,
      to: l.to,
      class: z(
        L(de)(
          "transition-colors hover:text-foreground",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          "rounded-sm focus-visible:ring-offset-background",
          l.theme.link
        )
      ),
      onClick: a
    }, {
      default: W(() => [
        G(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["href", "to", "class"]));
  }
}), Kf = /* @__PURE__ */ j({
  __name: "BreadcrumbPage",
  props: {
    theme: { default: () => ({
      page: ""
    }) }
  },
  setup(e) {
    return (n, t) => (O(), R("span", {
      class: z(
        L(de)(
          "font-normal text-foreground",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          "rounded-sm focus-visible:ring-offset-background",
          n.theme.page
        )
      ),
      tabindex: "0"
    }, [
      G(n.$slots, "default")
    ], 2));
  }
}), Yf = /* @__PURE__ */ j({
  __name: "BreadcrumbSeparator",
  props: {
    theme: { default: () => ({
      separator: ""
    }) }
  },
  setup(e) {
    return (n, t) => (O(), R("span", {
      class: z(L(de)("size-3.5", n.theme.separator)),
      role: "presentation"
    }, [
      G(n.$slots, "default", {}, () => [
        t[0] || (t[0] = $("svg", {
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
          $("path", { d: "m9 18 6-6-6-6" })
        ], -1))
      ])
    ], 2));
  }
}), Xf = /* @__PURE__ */ j({
  __name: "BreadcrumbEllipsis",
  props: {
    theme: { default: () => ({
      ellipsis: ""
    }) }
  },
  setup(e) {
    return (n, t) => (O(), R("span", {
      class: z(
        L(de)(
          "flex size-9 items-center justify-center",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          "rounded-sm focus-visible:ring-offset-background",
          n.theme.ellipsis
        )
      ),
      role: "presentation",
      tabindex: "0"
    }, [
      G(n.$slots, "default", {}, () => [
        t[0] || (t[0] = $("svg", {
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
          $("circle", {
            cx: "12",
            cy: "12",
            r: "1"
          }),
          $("circle", {
            cx: "19",
            cy: "12",
            r: "1"
          }),
          $("circle", {
            cx: "5",
            cy: "12",
            r: "1"
          })
        ], -1))
      ])
    ], 2));
  }
}), $c = { class: "space-y-4" }, Pc = ["onMouseenter", "onMouseleave"], Ic = { class: "font-semibold" }, Ac = { class: "text-sm text-zinc-500" }, Jf = /* @__PURE__ */ j({
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
    return (o, r) => (O(), R("div", {
      class: z(
        L(de)(
          "flex h-full w-full max-w-sm flex-col overflow-hidden border-l border-zinc-300/80 p-5",
          ...o.classes
        )
      )
    }, [
      $("ul", $c, [
        (O(!0), R(xe, null, Ke(o.tips, (a) => (O(), R("li", {
          key: a.title,
          class: "space-y-3 rounded-lg border border-zinc-300/80 p-3 hover:shadow-md",
          onMouseenter: (l) => n(a.target),
          onMouseleave: (l) => t(a.target)
        }, [
          $("div", null, [
            U(ns, { classes: ["py-1.5"] }, {
              default: W(() => [
                Gt(he(a.type), 1)
              ]),
              _: 2
            }, 1024)
          ]),
          $("div", null, [
            $("div", Ic, he(a.title), 1),
            $("p", Ac, he(a.description), 1)
          ])
        ], 40, Pc))), 128))
      ])
    ], 2));
  }
});
/**!
 * Sortable 1.15.6
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function da(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    n && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _t(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? da(Object(t), !0).forEach(function(o) {
      Rc(e, o, t[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : da(Object(t)).forEach(function(o) {
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(t, o));
    });
  }
  return e;
}
function lo(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? lo = function(n) {
    return typeof n;
  } : lo = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, lo(e);
}
function Rc(e, n, t) {
  return n in e ? Object.defineProperty(e, n, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[n] = t, e;
}
function Mt() {
  return Mt = Object.assign || function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = arguments[n];
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, Mt.apply(this, arguments);
}
function Mc(e, n) {
  if (e == null) return {};
  var t = {}, o = Object.keys(e), r, a;
  for (a = 0; a < o.length; a++)
    r = o[a], !(n.indexOf(r) >= 0) && (t[r] = e[r]);
  return t;
}
function Lc(e, n) {
  if (e == null) return {};
  var t = Mc(e, n), o, r;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      o = a[r], !(n.indexOf(o) >= 0) && Object.prototype.propertyIsEnumerable.call(e, o) && (t[o] = e[o]);
  }
  return t;
}
var Bc = "1.15.6";
function It(e) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(e);
}
var Lt = It(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), Kn = It(/Edge/i), fa = It(/firefox/i), Mn = It(/safari/i) && !It(/chrome/i) && !It(/android/i), jr = It(/iP(ad|od|hone)/i), El = It(/chrome/i) && It(/android/i), _l = {
  capture: !1,
  passive: !1
};
function ce(e, n, t) {
  e.addEventListener(n, t, !Lt && _l);
}
function ue(e, n, t) {
  e.removeEventListener(n, t, !Lt && _l);
}
function bo(e, n) {
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
function Tl(e) {
  return e.host && e !== document && e.host.nodeType ? e.host : e.parentNode;
}
function ft(e, n, t, o) {
  if (e) {
    t = t || document;
    do {
      if (n != null && (n[0] === ">" ? e.parentNode === t && bo(e, n) : bo(e, n)) || o && e === t)
        return e;
      if (e === t) break;
    } while (e = Tl(e));
  }
  return null;
}
var pa = /\s+/g;
function et(e, n, t) {
  if (e && n)
    if (e.classList)
      e.classList[t ? "add" : "remove"](n);
    else {
      var o = (" " + e.className + " ").replace(pa, " ").replace(" " + n + " ", " ");
      e.className = (o + (t ? " " + n : "")).replace(pa, " ");
    }
}
function Q(e, n, t) {
  var o = e && e.style;
  if (o) {
    if (t === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? t = document.defaultView.getComputedStyle(e, "") : e.currentStyle && (t = e.currentStyle), n === void 0 ? t : t[n];
    !(n in o) && n.indexOf("webkit") === -1 && (n = "-webkit-" + n), o[n] = t + (typeof t == "string" ? "" : "px");
  }
}
function yn(e, n) {
  var t = "";
  if (typeof e == "string")
    t = e;
  else
    do {
      var o = Q(e, "transform");
      o && o !== "none" && (t = o + " " + t);
    } while (!n && (e = e.parentNode));
  var r = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return r && new r(t);
}
function Dl(e, n, t) {
  if (e) {
    var o = e.getElementsByTagName(n), r = 0, a = o.length;
    if (t)
      for (; r < a; r++)
        t(o[r], r);
    return o;
  }
  return [];
}
function St() {
  var e = document.scrollingElement;
  return e || document.documentElement;
}
function Re(e, n, t, o, r) {
  if (!(!e.getBoundingClientRect && e !== window)) {
    var a, l, s, i, u, c, d;
    if (e !== window && e.parentNode && e !== St() ? (a = e.getBoundingClientRect(), l = a.top, s = a.left, i = a.bottom, u = a.right, c = a.height, d = a.width) : (l = 0, s = 0, i = window.innerHeight, u = window.innerWidth, c = window.innerHeight, d = window.innerWidth), (n || t) && e !== window && (r = r || e.parentNode, !Lt))
      do
        if (r && r.getBoundingClientRect && (Q(r, "transform") !== "none" || t && Q(r, "position") !== "static")) {
          var m = r.getBoundingClientRect();
          l -= m.top + parseInt(Q(r, "border-top-width")), s -= m.left + parseInt(Q(r, "border-left-width")), i = l + a.height, u = s + a.width;
          break;
        }
      while (r = r.parentNode);
    if (o && e !== window) {
      var f = yn(r || e), p = f && f.a, v = f && f.d;
      f && (l /= v, s /= p, d /= p, c /= v, i = l + c, u = s + d);
    }
    return {
      top: l,
      left: s,
      bottom: i,
      right: u,
      width: d,
      height: c
    };
  }
}
function ma(e, n, t) {
  for (var o = jt(e, !0), r = Re(e)[n]; o; ) {
    var a = Re(o)[t], l = void 0;
    if (l = r >= a, !l) return o;
    if (o === St()) break;
    o = jt(o, !1);
  }
  return !1;
}
function kn(e, n, t, o) {
  for (var r = 0, a = 0, l = e.children; a < l.length; ) {
    if (l[a].style.display !== "none" && l[a] !== Z.ghost && (o || l[a] !== Z.dragged) && ft(l[a], t.draggable, e, !1)) {
      if (r === n)
        return l[a];
      r++;
    }
    a++;
  }
  return null;
}
function Hr(e, n) {
  for (var t = e.lastElementChild; t && (t === Z.ghost || Q(t, "display") === "none" || n && !bo(t, n)); )
    t = t.previousElementSibling;
  return t || null;
}
function lt(e, n) {
  var t = 0;
  if (!e || !e.parentNode)
    return -1;
  for (; e = e.previousElementSibling; )
    e.nodeName.toUpperCase() !== "TEMPLATE" && e !== Z.clone && (!n || bo(e, n)) && t++;
  return t;
}
function va(e) {
  var n = 0, t = 0, o = St();
  if (e)
    do {
      var r = yn(e), a = r.a, l = r.d;
      n += e.scrollLeft * a, t += e.scrollTop * l;
    } while (e !== o && (e = e.parentNode));
  return [n, t];
}
function Fc(e, n) {
  for (var t in e)
    if (e.hasOwnProperty(t)) {
      for (var o in n)
        if (n.hasOwnProperty(o) && n[o] === e[t][o]) return Number(t);
    }
  return -1;
}
function jt(e, n) {
  if (!e || !e.getBoundingClientRect) return St();
  var t = e, o = !1;
  do
    if (t.clientWidth < t.scrollWidth || t.clientHeight < t.scrollHeight) {
      var r = Q(t);
      if (t.clientWidth < t.scrollWidth && (r.overflowX == "auto" || r.overflowX == "scroll") || t.clientHeight < t.scrollHeight && (r.overflowY == "auto" || r.overflowY == "scroll")) {
        if (!t.getBoundingClientRect || t === document.body) return St();
        if (o || n) return t;
        o = !0;
      }
    }
  while (t = t.parentNode);
  return St();
}
function Nc(e, n) {
  if (e && n)
    for (var t in n)
      n.hasOwnProperty(t) && (e[t] = n[t]);
  return e;
}
function Uo(e, n) {
  return Math.round(e.top) === Math.round(n.top) && Math.round(e.left) === Math.round(n.left) && Math.round(e.height) === Math.round(n.height) && Math.round(e.width) === Math.round(n.width);
}
var Ln;
function $l(e, n) {
  return function() {
    if (!Ln) {
      var t = arguments, o = this;
      t.length === 1 ? e.call(o, t[0]) : e.apply(o, t), Ln = setTimeout(function() {
        Ln = void 0;
      }, n);
    }
  };
}
function Vc() {
  clearTimeout(Ln), Ln = void 0;
}
function Pl(e, n, t) {
  e.scrollLeft += n, e.scrollTop += t;
}
function Il(e) {
  var n = window.Polymer, t = window.jQuery || window.Zepto;
  return n && n.dom ? n.dom(e).cloneNode(!0) : t ? t(e).clone(!0)[0] : e.cloneNode(!0);
}
function Al(e, n, t) {
  var o = {};
  return Array.from(e.children).forEach(function(r) {
    var a, l, s, i;
    if (!(!ft(r, n.draggable, e, !1) || r.animated || r === t)) {
      var u = Re(r);
      o.left = Math.min((a = o.left) !== null && a !== void 0 ? a : 1 / 0, u.left), o.top = Math.min((l = o.top) !== null && l !== void 0 ? l : 1 / 0, u.top), o.right = Math.max((s = o.right) !== null && s !== void 0 ? s : -1 / 0, u.right), o.bottom = Math.max((i = o.bottom) !== null && i !== void 0 ? i : -1 / 0, u.bottom);
    }
  }), o.width = o.right - o.left, o.height = o.bottom - o.top, o.x = o.left, o.y = o.top, o;
}
var Ze = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function zc() {
  var e = [], n;
  return {
    captureAnimationState: function() {
      if (e = [], !!this.options.animation) {
        var o = [].slice.call(this.el.children);
        o.forEach(function(r) {
          if (!(Q(r, "display") === "none" || r === Z.ghost)) {
            e.push({
              target: r,
              rect: Re(r)
            });
            var a = _t({}, e[e.length - 1].rect);
            if (r.thisAnimationDuration) {
              var l = yn(r, !0);
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
      e.splice(Fc(e, {
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
        var i = 0, u = s.target, c = u.fromRect, d = Re(u), m = u.prevFromRect, f = u.prevToRect, p = s.rect, v = yn(u, !0);
        v && (d.top -= v.f, d.left -= v.e), u.toRect = d, u.thisAnimationDuration && Uo(m, d) && !Uo(c, d) && // Make sure animatingRect is on line between toRect & fromRect
        (p.top - d.top) / (p.left - d.left) === (c.top - d.top) / (c.left - d.left) && (i = Hc(p, m, f, r.options)), Uo(d, c) || (u.prevFromRect = c, u.prevToRect = d, i || (i = r.options.animation), r.animate(u, p, d, i)), i && (a = !0, l = Math.max(l, i), clearTimeout(u.animationResetTimer), u.animationResetTimer = setTimeout(function() {
          u.animationTime = 0, u.prevFromRect = null, u.fromRect = null, u.prevToRect = null, u.thisAnimationDuration = null;
        }, i), u.thisAnimationDuration = i);
      }), clearTimeout(n), a ? n = setTimeout(function() {
        typeof o == "function" && o();
      }, l) : typeof o == "function" && o(), e = [];
    },
    animate: function(o, r, a, l) {
      if (l) {
        Q(o, "transition", ""), Q(o, "transform", "");
        var s = yn(this.el), i = s && s.a, u = s && s.d, c = (r.left - a.left) / (i || 1), d = (r.top - a.top) / (u || 1);
        o.animatingX = !!c, o.animatingY = !!d, Q(o, "transform", "translate3d(" + c + "px," + d + "px,0)"), this.forRepaintDummy = jc(o), Q(o, "transition", "transform " + l + "ms" + (this.options.easing ? " " + this.options.easing : "")), Q(o, "transform", "translate3d(0,0,0)"), typeof o.animated == "number" && clearTimeout(o.animated), o.animated = setTimeout(function() {
          Q(o, "transition", ""), Q(o, "transform", ""), o.animated = !1, o.animatingX = !1, o.animatingY = !1;
        }, l);
      }
    }
  };
}
function jc(e) {
  return e.offsetWidth;
}
function Hc(e, n, t, o) {
  return Math.sqrt(Math.pow(n.top - e.top, 2) + Math.pow(n.left - e.left, 2)) / Math.sqrt(Math.pow(n.top - t.top, 2) + Math.pow(n.left - t.left, 2)) * o.animation;
}
var pn = [], qo = {
  initializeByDefault: !0
}, Yn = {
  mount: function(n) {
    for (var t in qo)
      qo.hasOwnProperty(t) && !(t in n) && (n[t] = qo[t]);
    pn.forEach(function(o) {
      if (o.pluginName === n.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(n.pluginName, " more than once");
    }), pn.push(n);
  },
  pluginEvent: function(n, t, o) {
    var r = this;
    this.eventCanceled = !1, o.cancel = function() {
      r.eventCanceled = !0;
    };
    var a = n + "Global";
    pn.forEach(function(l) {
      t[l.pluginName] && (t[l.pluginName][a] && t[l.pluginName][a](_t({
        sortable: t
      }, o)), t.options[l.pluginName] && t[l.pluginName][n] && t[l.pluginName][n](_t({
        sortable: t
      }, o)));
    });
  },
  initializePlugins: function(n, t, o, r) {
    pn.forEach(function(s) {
      var i = s.pluginName;
      if (!(!n.options[i] && !s.initializeByDefault)) {
        var u = new s(n, t, n.options);
        u.sortable = n, u.options = n.options, n[i] = u, Mt(o, u.defaults);
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
    return pn.forEach(function(r) {
      typeof r.eventProperties == "function" && Mt(o, r.eventProperties.call(t[r.pluginName], n));
    }), o;
  },
  modifyOption: function(n, t, o) {
    var r;
    return pn.forEach(function(a) {
      n[a.pluginName] && a.optionListeners && typeof a.optionListeners[t] == "function" && (r = a.optionListeners[t].call(n[a.pluginName], o));
    }), r;
  }
};
function Gc(e) {
  var n = e.sortable, t = e.rootEl, o = e.name, r = e.targetEl, a = e.cloneEl, l = e.toEl, s = e.fromEl, i = e.oldIndex, u = e.newIndex, c = e.oldDraggableIndex, d = e.newDraggableIndex, m = e.originalEvent, f = e.putSortable, p = e.extraEventProperties;
  if (n = n || t && t[Ze], !!n) {
    var v, g = n.options, w = "on" + o.charAt(0).toUpperCase() + o.substr(1);
    window.CustomEvent && !Lt && !Kn ? v = new CustomEvent(o, {
      bubbles: !0,
      cancelable: !0
    }) : (v = document.createEvent("Event"), v.initEvent(o, !0, !0)), v.to = l || t, v.from = s || t, v.item = r || t, v.clone = a, v.oldIndex = i, v.newIndex = u, v.oldDraggableIndex = c, v.newDraggableIndex = d, v.originalEvent = m, v.pullMode = f ? f.lastPutMode : void 0;
    var y = _t(_t({}, p), Yn.getEventProperties(o, n));
    for (var h in y)
      v[h] = y[h];
    t && t.dispatchEvent(v), g[w] && g[w].call(n, v);
  }
}
var Wc = ["evt"], Je = function(n, t) {
  var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = o.evt, a = Lc(o, Wc);
  Yn.pluginEvent.bind(Z)(n, t, _t({
    dragEl: H,
    parentEl: $e,
    ghostEl: te,
    rootEl: Ce,
    nextEl: tn,
    lastDownEl: so,
    cloneEl: _e,
    cloneHidden: Vt,
    dragStarted: In,
    putSortable: ze,
    activeSortable: Z.active,
    originalEvent: r,
    oldIndex: gn,
    oldDraggableIndex: Bn,
    newIndex: tt,
    newDraggableIndex: Nt,
    hideGhostForTarget: Bl,
    unhideGhostForTarget: Fl,
    cloneNowHidden: function() {
      Vt = !0;
    },
    cloneNowShown: function() {
      Vt = !1;
    },
    dispatchSortableEvent: function(s) {
      Ye({
        sortable: t,
        name: s,
        originalEvent: r
      });
    }
  }, a));
};
function Ye(e) {
  Gc(_t({
    putSortable: ze,
    cloneEl: _e,
    targetEl: H,
    rootEl: Ce,
    oldIndex: gn,
    oldDraggableIndex: Bn,
    newIndex: tt,
    newDraggableIndex: Nt
  }, e));
}
var H, $e, te, Ce, tn, so, _e, Vt, gn, tt, Bn, Nt, no, ze, hn = !1, yo = !1, wo = [], Qt, dt, Ko, Yo, ha, ga, In, mn, Fn, Nn = !1, oo = !1, io, Ue, Xo = [], dr = !1, xo = [], Mo = typeof document < "u", ro = jr, ba = Kn || Lt ? "cssFloat" : "float", Uc = Mo && !El && !jr && "draggable" in document.createElement("div"), Rl = function() {
  if (Mo) {
    if (Lt)
      return !1;
    var e = document.createElement("x");
    return e.style.cssText = "pointer-events:auto", e.style.pointerEvents === "auto";
  }
}(), Ml = function(n, t) {
  var o = Q(n), r = parseInt(o.width) - parseInt(o.paddingLeft) - parseInt(o.paddingRight) - parseInt(o.borderLeftWidth) - parseInt(o.borderRightWidth), a = kn(n, 0, t), l = kn(n, 1, t), s = a && Q(a), i = l && Q(l), u = s && parseInt(s.marginLeft) + parseInt(s.marginRight) + Re(a).width, c = i && parseInt(i.marginLeft) + parseInt(i.marginRight) + Re(l).width;
  if (o.display === "flex")
    return o.flexDirection === "column" || o.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (o.display === "grid")
    return o.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (a && s.float && s.float !== "none") {
    var d = s.float === "left" ? "left" : "right";
    return l && (i.clear === "both" || i.clear === d) ? "vertical" : "horizontal";
  }
  return a && (s.display === "block" || s.display === "flex" || s.display === "table" || s.display === "grid" || u >= r && o[ba] === "none" || l && o[ba] === "none" && u + c > r) ? "vertical" : "horizontal";
}, qc = function(n, t, o) {
  var r = o ? n.left : n.top, a = o ? n.right : n.bottom, l = o ? n.width : n.height, s = o ? t.left : t.top, i = o ? t.right : t.bottom, u = o ? t.width : t.height;
  return r === s || a === i || r + l / 2 === s + u / 2;
}, Kc = function(n, t) {
  var o;
  return wo.some(function(r) {
    var a = r[Ze].options.emptyInsertThreshold;
    if (!(!a || Hr(r))) {
      var l = Re(r), s = n >= l.left - a && n <= l.right + a, i = t >= l.top - a && t <= l.bottom + a;
      if (s && i)
        return o = r;
    }
  }), o;
}, Ll = function(n) {
  function t(a, l) {
    return function(s, i, u, c) {
      var d = s.options.group.name && i.options.group.name && s.options.group.name === i.options.group.name;
      if (a == null && (l || d))
        return !0;
      if (a == null || a === !1)
        return !1;
      if (l && a === "clone")
        return a;
      if (typeof a == "function")
        return t(a(s, i, u, c), l)(s, i, u, c);
      var m = (l ? s : i).options.group.name;
      return a === !0 || typeof a == "string" && a === m || a.join && a.indexOf(m) > -1;
    };
  }
  var o = {}, r = n.group;
  (!r || lo(r) != "object") && (r = {
    name: r
  }), o.name = r.name, o.checkPull = t(r.pull, !0), o.checkPut = t(r.put), o.revertClone = r.revertClone, n.group = o;
}, Bl = function() {
  !Rl && te && Q(te, "display", "none");
}, Fl = function() {
  !Rl && te && Q(te, "display", "");
};
Mo && !El && document.addEventListener("click", function(e) {
  if (yo)
    return e.preventDefault(), e.stopPropagation && e.stopPropagation(), e.stopImmediatePropagation && e.stopImmediatePropagation(), yo = !1, !1;
}, !0);
var Zt = function(n) {
  if (H) {
    n = n.touches ? n.touches[0] : n;
    var t = Kc(n.clientX, n.clientY);
    if (t) {
      var o = {};
      for (var r in n)
        n.hasOwnProperty(r) && (o[r] = n[r]);
      o.target = o.rootEl = t, o.preventDefault = void 0, o.stopPropagation = void 0, t[Ze]._onDragOver(o);
    }
  }
}, Yc = function(n) {
  H && H.parentNode[Ze]._isOutsideThisEl(n.target);
};
function Z(e, n) {
  if (!(e && e.nodeType && e.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(e));
  this.el = e, this.options = n = Mt({}, n), e[Ze] = this;
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
      return Ml(e, this.options);
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
    supportPointer: Z.supportPointer !== !1 && "PointerEvent" in window && (!Mn || jr),
    emptyInsertThreshold: 5
  };
  Yn.initializePlugins(this, e, t);
  for (var o in t)
    !(o in n) && (n[o] = t[o]);
  Ll(n);
  for (var r in this)
    r.charAt(0) === "_" && typeof this[r] == "function" && (this[r] = this[r].bind(this));
  this.nativeDraggable = n.forceFallback ? !1 : Uc, this.nativeDraggable && (this.options.touchStartThreshold = 1), n.supportPointer ? ce(e, "pointerdown", this._onTapStart) : (ce(e, "mousedown", this._onTapStart), ce(e, "touchstart", this._onTapStart)), this.nativeDraggable && (ce(e, "dragover", this), ce(e, "dragenter", this)), wo.push(this.el), n.store && n.store.get && this.sort(n.store.get(this) || []), Mt(this, zc());
}
Z.prototype = /** @lends Sortable.prototype */
{
  constructor: Z,
  _isOutsideThisEl: function(n) {
    !this.el.contains(n) && n !== this.el && (mn = null);
  },
  _getDirection: function(n, t) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, n, t, H) : this.options.direction;
  },
  _onTapStart: function(n) {
    if (n.cancelable) {
      var t = this, o = this.el, r = this.options, a = r.preventOnFilter, l = n.type, s = n.touches && n.touches[0] || n.pointerType && n.pointerType === "touch" && n, i = (s || n).target, u = n.target.shadowRoot && (n.path && n.path[0] || n.composedPath && n.composedPath()[0]) || i, c = r.filter;
      if (od(o), !H && !(/mousedown|pointerdown/.test(l) && n.button !== 0 || r.disabled) && !u.isContentEditable && !(!this.nativeDraggable && Mn && i && i.tagName.toUpperCase() === "SELECT") && (i = ft(i, r.draggable, o, !1), !(i && i.animated) && so !== i)) {
        if (gn = lt(i), Bn = lt(i, r.draggable), typeof c == "function") {
          if (c.call(this, n, i, this)) {
            Ye({
              sortable: t,
              rootEl: u,
              name: "filter",
              targetEl: i,
              toEl: o,
              fromEl: o
            }), Je("filter", t, {
              evt: n
            }), a && n.preventDefault();
            return;
          }
        } else if (c && (c = c.split(",").some(function(d) {
          if (d = ft(u, d.trim(), o, !1), d)
            return Ye({
              sortable: t,
              rootEl: d,
              name: "filter",
              targetEl: i,
              fromEl: o,
              toEl: o
            }), Je("filter", t, {
              evt: n
            }), !0;
        }), c)) {
          a && n.preventDefault();
          return;
        }
        r.handle && !ft(u, r.handle, o, !1) || this._prepareDragStart(n, s, i);
      }
    }
  },
  _prepareDragStart: function(n, t, o) {
    var r = this, a = r.el, l = r.options, s = a.ownerDocument, i;
    if (o && !H && o.parentNode === a) {
      var u = Re(o);
      if (Ce = a, H = o, $e = H.parentNode, tn = H.nextSibling, so = o, no = l.group, Z.dragged = H, Qt = {
        target: H,
        clientX: (t || n).clientX,
        clientY: (t || n).clientY
      }, ha = Qt.clientX - u.left, ga = Qt.clientY - u.top, this._lastX = (t || n).clientX, this._lastY = (t || n).clientY, H.style["will-change"] = "all", i = function() {
        if (Je("delayEnded", r, {
          evt: n
        }), Z.eventCanceled) {
          r._onDrop();
          return;
        }
        r._disableDelayedDragEvents(), !fa && r.nativeDraggable && (H.draggable = !0), r._triggerDragStart(n, t), Ye({
          sortable: r,
          name: "choose",
          originalEvent: n
        }), et(H, l.chosenClass, !0);
      }, l.ignore.split(",").forEach(function(c) {
        Dl(H, c.trim(), Jo);
      }), ce(s, "dragover", Zt), ce(s, "mousemove", Zt), ce(s, "touchmove", Zt), l.supportPointer ? (ce(s, "pointerup", r._onDrop), !this.nativeDraggable && ce(s, "pointercancel", r._onDrop)) : (ce(s, "mouseup", r._onDrop), ce(s, "touchend", r._onDrop), ce(s, "touchcancel", r._onDrop)), fa && this.nativeDraggable && (this.options.touchStartThreshold = 4, H.draggable = !0), Je("delayStart", this, {
        evt: n
      }), l.delay && (!l.delayOnTouchOnly || t) && (!this.nativeDraggable || !(Kn || Lt))) {
        if (Z.eventCanceled) {
          this._onDrop();
          return;
        }
        l.supportPointer ? (ce(s, "pointerup", r._disableDelayedDrag), ce(s, "pointercancel", r._disableDelayedDrag)) : (ce(s, "mouseup", r._disableDelayedDrag), ce(s, "touchend", r._disableDelayedDrag), ce(s, "touchcancel", r._disableDelayedDrag)), ce(s, "mousemove", r._delayedDragTouchMoveHandler), ce(s, "touchmove", r._delayedDragTouchMoveHandler), l.supportPointer && ce(s, "pointermove", r._delayedDragTouchMoveHandler), r._dragStartTimer = setTimeout(i, l.delay);
      } else
        i();
    }
  },
  _delayedDragTouchMoveHandler: function(n) {
    var t = n.touches ? n.touches[0] : n;
    Math.max(Math.abs(t.clientX - this._lastX), Math.abs(t.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    H && Jo(H), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var n = this.el.ownerDocument;
    ue(n, "mouseup", this._disableDelayedDrag), ue(n, "touchend", this._disableDelayedDrag), ue(n, "touchcancel", this._disableDelayedDrag), ue(n, "pointerup", this._disableDelayedDrag), ue(n, "pointercancel", this._disableDelayedDrag), ue(n, "mousemove", this._delayedDragTouchMoveHandler), ue(n, "touchmove", this._delayedDragTouchMoveHandler), ue(n, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(n, t) {
    t = t || n.pointerType == "touch" && n, !this.nativeDraggable || t ? this.options.supportPointer ? ce(document, "pointermove", this._onTouchMove) : t ? ce(document, "touchmove", this._onTouchMove) : ce(document, "mousemove", this._onTouchMove) : (ce(H, "dragend", this), ce(Ce, "dragstart", this._onDragStart));
    try {
      document.selection ? uo(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(n, t) {
    if (hn = !1, Ce && H) {
      Je("dragStarted", this, {
        evt: t
      }), this.nativeDraggable && ce(document, "dragover", Yc);
      var o = this.options;
      !n && et(H, o.dragClass, !1), et(H, o.ghostClass, !0), Z.active = this, n && this._appendGhost(), Ye({
        sortable: this,
        name: "start",
        originalEvent: t
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (dt) {
      this._lastX = dt.clientX, this._lastY = dt.clientY, Bl();
      for (var n = document.elementFromPoint(dt.clientX, dt.clientY), t = n; n && n.shadowRoot && (n = n.shadowRoot.elementFromPoint(dt.clientX, dt.clientY), n !== t); )
        t = n;
      if (H.parentNode[Ze]._isOutsideThisEl(n), t)
        do {
          if (t[Ze]) {
            var o = void 0;
            if (o = t[Ze]._onDragOver({
              clientX: dt.clientX,
              clientY: dt.clientY,
              target: n,
              rootEl: t
            }), o && !this.options.dragoverBubble)
              break;
          }
          n = t;
        } while (t = Tl(t));
      Fl();
    }
  },
  _onTouchMove: function(n) {
    if (Qt) {
      var t = this.options, o = t.fallbackTolerance, r = t.fallbackOffset, a = n.touches ? n.touches[0] : n, l = te && yn(te, !0), s = te && l && l.a, i = te && l && l.d, u = ro && Ue && va(Ue), c = (a.clientX - Qt.clientX + r.x) / (s || 1) + (u ? u[0] - Xo[0] : 0) / (s || 1), d = (a.clientY - Qt.clientY + r.y) / (i || 1) + (u ? u[1] - Xo[1] : 0) / (i || 1);
      if (!Z.active && !hn) {
        if (o && Math.max(Math.abs(a.clientX - this._lastX), Math.abs(a.clientY - this._lastY)) < o)
          return;
        this._onDragStart(n, !0);
      }
      if (te) {
        l ? (l.e += c - (Ko || 0), l.f += d - (Yo || 0)) : l = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: c,
          f: d
        };
        var m = "matrix(".concat(l.a, ",").concat(l.b, ",").concat(l.c, ",").concat(l.d, ",").concat(l.e, ",").concat(l.f, ")");
        Q(te, "webkitTransform", m), Q(te, "mozTransform", m), Q(te, "msTransform", m), Q(te, "transform", m), Ko = c, Yo = d, dt = a;
      }
      n.cancelable && n.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!te) {
      var n = this.options.fallbackOnBody ? document.body : Ce, t = Re(H, !0, ro, !0, n), o = this.options;
      if (ro) {
        for (Ue = n; Q(Ue, "position") === "static" && Q(Ue, "transform") === "none" && Ue !== document; )
          Ue = Ue.parentNode;
        Ue !== document.body && Ue !== document.documentElement ? (Ue === document && (Ue = St()), t.top += Ue.scrollTop, t.left += Ue.scrollLeft) : Ue = St(), Xo = va(Ue);
      }
      te = H.cloneNode(!0), et(te, o.ghostClass, !1), et(te, o.fallbackClass, !0), et(te, o.dragClass, !0), Q(te, "transition", ""), Q(te, "transform", ""), Q(te, "box-sizing", "border-box"), Q(te, "margin", 0), Q(te, "top", t.top), Q(te, "left", t.left), Q(te, "width", t.width), Q(te, "height", t.height), Q(te, "opacity", "0.8"), Q(te, "position", ro ? "absolute" : "fixed"), Q(te, "zIndex", "100000"), Q(te, "pointerEvents", "none"), Z.ghost = te, n.appendChild(te), Q(te, "transform-origin", ha / parseInt(te.style.width) * 100 + "% " + ga / parseInt(te.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(n, t) {
    var o = this, r = n.dataTransfer, a = o.options;
    if (Je("dragStart", this, {
      evt: n
    }), Z.eventCanceled) {
      this._onDrop();
      return;
    }
    Je("setupClone", this), Z.eventCanceled || (_e = Il(H), _e.removeAttribute("id"), _e.draggable = !1, _e.style["will-change"] = "", this._hideClone(), et(_e, this.options.chosenClass, !1), Z.clone = _e), o.cloneId = uo(function() {
      Je("clone", o), !Z.eventCanceled && (o.options.removeCloneOnHide || Ce.insertBefore(_e, H), o._hideClone(), Ye({
        sortable: o,
        name: "clone"
      }));
    }), !t && et(H, a.dragClass, !0), t ? (yo = !0, o._loopId = setInterval(o._emulateDragOver, 50)) : (ue(document, "mouseup", o._onDrop), ue(document, "touchend", o._onDrop), ue(document, "touchcancel", o._onDrop), r && (r.effectAllowed = "move", a.setData && a.setData.call(o, r, H)), ce(document, "drop", o), Q(H, "transform", "translateZ(0)")), hn = !0, o._dragStartId = uo(o._dragStarted.bind(o, t, n)), ce(document, "selectstart", o), In = !0, window.getSelection().removeAllRanges(), Mn && Q(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(n) {
    var t = this.el, o = n.target, r, a, l, s = this.options, i = s.group, u = Z.active, c = no === i, d = s.sort, m = ze || u, f, p = this, v = !1;
    if (dr) return;
    function g(fe, oe) {
      Je(fe, p, _t({
        evt: n,
        isOwner: c,
        axis: f ? "vertical" : "horizontal",
        revert: l,
        dragRect: r,
        targetRect: a,
        canSort: d,
        fromSortable: m,
        target: o,
        completed: y,
        onMove: function(Ge, Fe) {
          return ao(Ce, t, H, r, Ge, Re(Ge), n, Fe);
        },
        changed: h
      }, oe));
    }
    function w() {
      g("dragOverAnimationCapture"), p.captureAnimationState(), p !== m && m.captureAnimationState();
    }
    function y(fe) {
      return g("dragOverCompleted", {
        insertion: fe
      }), fe && (c ? u._hideClone() : u._showClone(p), p !== m && (et(H, ze ? ze.options.ghostClass : u.options.ghostClass, !1), et(H, s.ghostClass, !0)), ze !== p && p !== Z.active ? ze = p : p === Z.active && ze && (ze = null), m === p && (p._ignoreWhileAnimating = o), p.animateAll(function() {
        g("dragOverAnimationComplete"), p._ignoreWhileAnimating = null;
      }), p !== m && (m.animateAll(), m._ignoreWhileAnimating = null)), (o === H && !H.animated || o === t && !o.animated) && (mn = null), !s.dragoverBubble && !n.rootEl && o !== document && (H.parentNode[Ze]._isOutsideThisEl(n.target), !fe && Zt(n)), !s.dragoverBubble && n.stopPropagation && n.stopPropagation(), v = !0;
    }
    function h() {
      tt = lt(H), Nt = lt(H, s.draggable), Ye({
        sortable: p,
        name: "change",
        toEl: t,
        newIndex: tt,
        newDraggableIndex: Nt,
        originalEvent: n
      });
    }
    if (n.preventDefault !== void 0 && n.cancelable && n.preventDefault(), o = ft(o, s.draggable, t, !0), g("dragOver"), Z.eventCanceled) return v;
    if (H.contains(n.target) || o.animated && o.animatingX && o.animatingY || p._ignoreWhileAnimating === o)
      return y(!1);
    if (yo = !1, u && !s.disabled && (c ? d || (l = $e !== Ce) : ze === this || (this.lastPutMode = no.checkPull(this, u, H, n)) && i.checkPut(this, u, H, n))) {
      if (f = this._getDirection(n, o) === "vertical", r = Re(H), g("dragOverValid"), Z.eventCanceled) return v;
      if (l)
        return $e = Ce, w(), this._hideClone(), g("revert"), Z.eventCanceled || (tn ? Ce.insertBefore(H, tn) : Ce.appendChild(H)), y(!0);
      var k = Hr(t, s.draggable);
      if (!k || Zc(n, f, this) && !k.animated) {
        if (k === H)
          return y(!1);
        if (k && t === n.target && (o = k), o && (a = Re(o)), ao(Ce, t, H, r, o, a, n, !!o) !== !1)
          return w(), k && k.nextSibling ? t.insertBefore(H, k.nextSibling) : t.appendChild(H), $e = t, h(), y(!0);
      } else if (k && Qc(n, f, this)) {
        var b = kn(t, 0, s, !0);
        if (b === H)
          return y(!1);
        if (o = b, a = Re(o), ao(Ce, t, H, r, o, a, n, !1) !== !1)
          return w(), t.insertBefore(H, b), $e = t, h(), y(!0);
      } else if (o.parentNode === t) {
        a = Re(o);
        var _ = 0, S, T = H.parentNode !== t, X = !qc(H.animated && H.toRect || r, o.animated && o.toRect || a, f), P = f ? "top" : "left", V = ma(o, "top", "top") || ma(H, "top", "top"), K = V ? V.scrollTop : void 0;
        mn !== o && (S = a[P], Nn = !1, oo = !X && s.invertSwap || T), _ = ed(n, o, a, f, X ? 1 : s.swapThreshold, s.invertedSwapThreshold == null ? s.swapThreshold : s.invertedSwapThreshold, oo, mn === o);
        var x;
        if (_ !== 0) {
          var I = lt(H);
          do
            I -= _, x = $e.children[I];
          while (x && (Q(x, "display") === "none" || x === te));
        }
        if (_ === 0 || x === o)
          return y(!1);
        mn = o, Fn = _;
        var B = o.nextElementSibling, Y = !1;
        Y = _ === 1;
        var ne = ao(Ce, t, H, r, o, a, n, Y);
        if (ne !== !1)
          return (ne === 1 || ne === -1) && (Y = ne === 1), dr = !0, setTimeout(Jc, 30), w(), Y && !B ? t.appendChild(H) : o.parentNode.insertBefore(H, Y ? B : o), V && Pl(V, 0, K - V.scrollTop), $e = H.parentNode, S !== void 0 && !oo && (io = Math.abs(S - Re(o)[P])), h(), y(!0);
      }
      if (t.contains(H))
        return y(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    ue(document, "mousemove", this._onTouchMove), ue(document, "touchmove", this._onTouchMove), ue(document, "pointermove", this._onTouchMove), ue(document, "dragover", Zt), ue(document, "mousemove", Zt), ue(document, "touchmove", Zt);
  },
  _offUpEvents: function() {
    var n = this.el.ownerDocument;
    ue(n, "mouseup", this._onDrop), ue(n, "touchend", this._onDrop), ue(n, "pointerup", this._onDrop), ue(n, "pointercancel", this._onDrop), ue(n, "touchcancel", this._onDrop), ue(document, "selectstart", this);
  },
  _onDrop: function(n) {
    var t = this.el, o = this.options;
    if (tt = lt(H), Nt = lt(H, o.draggable), Je("drop", this, {
      evt: n
    }), $e = H && H.parentNode, tt = lt(H), Nt = lt(H, o.draggable), Z.eventCanceled) {
      this._nulling();
      return;
    }
    hn = !1, oo = !1, Nn = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), fr(this.cloneId), fr(this._dragStartId), this.nativeDraggable && (ue(document, "drop", this), ue(t, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), Mn && Q(document.body, "user-select", ""), Q(H, "transform", ""), n && (In && (n.cancelable && n.preventDefault(), !o.dropBubble && n.stopPropagation()), te && te.parentNode && te.parentNode.removeChild(te), (Ce === $e || ze && ze.lastPutMode !== "clone") && _e && _e.parentNode && _e.parentNode.removeChild(_e), H && (this.nativeDraggable && ue(H, "dragend", this), Jo(H), H.style["will-change"] = "", In && !hn && et(H, ze ? ze.options.ghostClass : this.options.ghostClass, !1), et(H, this.options.chosenClass, !1), Ye({
      sortable: this,
      name: "unchoose",
      toEl: $e,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: n
    }), Ce !== $e ? (tt >= 0 && (Ye({
      rootEl: $e,
      name: "add",
      toEl: $e,
      fromEl: Ce,
      originalEvent: n
    }), Ye({
      sortable: this,
      name: "remove",
      toEl: $e,
      originalEvent: n
    }), Ye({
      rootEl: $e,
      name: "sort",
      toEl: $e,
      fromEl: Ce,
      originalEvent: n
    }), Ye({
      sortable: this,
      name: "sort",
      toEl: $e,
      originalEvent: n
    })), ze && ze.save()) : tt !== gn && tt >= 0 && (Ye({
      sortable: this,
      name: "update",
      toEl: $e,
      originalEvent: n
    }), Ye({
      sortable: this,
      name: "sort",
      toEl: $e,
      originalEvent: n
    })), Z.active && ((tt == null || tt === -1) && (tt = gn, Nt = Bn), Ye({
      sortable: this,
      name: "end",
      toEl: $e,
      originalEvent: n
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    Je("nulling", this), Ce = H = $e = te = tn = _e = so = Vt = Qt = dt = In = tt = Nt = gn = Bn = mn = Fn = ze = no = Z.dragged = Z.ghost = Z.clone = Z.active = null, xo.forEach(function(n) {
      n.checked = !0;
    }), xo.length = Ko = Yo = 0;
  },
  handleEvent: function(n) {
    switch (n.type) {
      case "drop":
      case "dragend":
        this._onDrop(n);
        break;
      case "dragenter":
      case "dragover":
        H && (this._onDragOver(n), Xc(n));
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
      t = o[r], ft(t, l.draggable, this.el, !1) && n.push(t.getAttribute(l.dataIdAttr) || nd(t));
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
      ft(s, this.options.draggable, r, !1) && (o[a] = s);
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
    return ft(n, t || this.options.draggable, this.el, !1);
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
    var r = Yn.modifyOption(this, n, t);
    typeof r < "u" ? o[n] = r : o[n] = t, n === "group" && Ll(o);
  },
  /**
   * Destroy
   */
  destroy: function() {
    Je("destroy", this);
    var n = this.el;
    n[Ze] = null, ue(n, "mousedown", this._onTapStart), ue(n, "touchstart", this._onTapStart), ue(n, "pointerdown", this._onTapStart), this.nativeDraggable && (ue(n, "dragover", this), ue(n, "dragenter", this)), Array.prototype.forEach.call(n.querySelectorAll("[draggable]"), function(t) {
      t.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), wo.splice(wo.indexOf(this.el), 1), this.el = n = null;
  },
  _hideClone: function() {
    if (!Vt) {
      if (Je("hideClone", this), Z.eventCanceled) return;
      Q(_e, "display", "none"), this.options.removeCloneOnHide && _e.parentNode && _e.parentNode.removeChild(_e), Vt = !0;
    }
  },
  _showClone: function(n) {
    if (n.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (Vt) {
      if (Je("showClone", this), Z.eventCanceled) return;
      H.parentNode == Ce && !this.options.group.revertClone ? Ce.insertBefore(_e, H) : tn ? Ce.insertBefore(_e, tn) : Ce.appendChild(_e), this.options.group.revertClone && this.animate(H, _e), Q(_e, "display", ""), Vt = !1;
    }
  }
};
function Xc(e) {
  e.dataTransfer && (e.dataTransfer.dropEffect = "move"), e.cancelable && e.preventDefault();
}
function ao(e, n, t, o, r, a, l, s) {
  var i, u = e[Ze], c = u.options.onMove, d;
  return window.CustomEvent && !Lt && !Kn ? i = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (i = document.createEvent("Event"), i.initEvent("move", !0, !0)), i.to = n, i.from = e, i.dragged = t, i.draggedRect = o, i.related = r || n, i.relatedRect = a || Re(n), i.willInsertAfter = s, i.originalEvent = l, e.dispatchEvent(i), c && (d = c.call(u, i, l)), d;
}
function Jo(e) {
  e.draggable = !1;
}
function Jc() {
  dr = !1;
}
function Qc(e, n, t) {
  var o = Re(kn(t.el, 0, t.options, !0)), r = Al(t.el, t.options, te), a = 10;
  return n ? e.clientX < r.left - a || e.clientY < o.top && e.clientX < o.right : e.clientY < r.top - a || e.clientY < o.bottom && e.clientX < o.left;
}
function Zc(e, n, t) {
  var o = Re(Hr(t.el, t.options.draggable)), r = Al(t.el, t.options, te), a = 10;
  return n ? e.clientX > r.right + a || e.clientY > o.bottom && e.clientX > o.left : e.clientY > r.bottom + a || e.clientX > o.right && e.clientY > o.top;
}
function ed(e, n, t, o, r, a, l, s) {
  var i = o ? e.clientY : e.clientX, u = o ? t.height : t.width, c = o ? t.top : t.left, d = o ? t.bottom : t.right, m = !1;
  if (!l) {
    if (s && io < u * r) {
      if (!Nn && (Fn === 1 ? i > c + u * a / 2 : i < d - u * a / 2) && (Nn = !0), Nn)
        m = !0;
      else if (Fn === 1 ? i < c + io : i > d - io)
        return -Fn;
    } else if (i > c + u * (1 - r) / 2 && i < d - u * (1 - r) / 2)
      return td(n);
  }
  return m = m || l, m && (i < c + u * a / 2 || i > d - u * a / 2) ? i > c + u / 2 ? 1 : -1 : 0;
}
function td(e) {
  return lt(H) < lt(e) ? 1 : -1;
}
function nd(e) {
  for (var n = e.tagName + e.className + e.src + e.href + e.textContent, t = n.length, o = 0; t--; )
    o += n.charCodeAt(t);
  return o.toString(36);
}
function od(e) {
  xo.length = 0;
  for (var n = e.getElementsByTagName("input"), t = n.length; t--; ) {
    var o = n[t];
    o.checked && xo.push(o);
  }
}
function uo(e) {
  return setTimeout(e, 0);
}
function fr(e) {
  return clearTimeout(e);
}
Mo && ce(document, "touchmove", function(e) {
  (Z.active || hn) && e.cancelable && e.preventDefault();
});
Z.utils = {
  on: ce,
  off: ue,
  css: Q,
  find: Dl,
  is: function(n, t) {
    return !!ft(n, t, n, !1);
  },
  extend: Nc,
  throttle: $l,
  closest: ft,
  toggleClass: et,
  clone: Il,
  index: lt,
  nextTick: uo,
  cancelNextTick: fr,
  detectDirection: Ml,
  getChild: kn,
  expando: Ze
};
Z.get = function(e) {
  return e[Ze];
};
Z.mount = function() {
  for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
    n[t] = arguments[t];
  n[0].constructor === Array && (n = n[0]), n.forEach(function(o) {
    if (!o.prototype || !o.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(o));
    o.utils && (Z.utils = _t(_t({}, Z.utils), o.utils)), Yn.mount(o);
  });
};
Z.create = function(e, n) {
  return new Z(e, n);
};
Z.version = Bc;
var Ae = [], An, pr, mr = !1, Qo, Zo, ko, Rn;
function rd() {
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
      this.sortable.nativeDraggable ? ce(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? ce(document, "pointermove", this._handleFallbackAutoScroll) : o.touches ? ce(document, "touchmove", this._handleFallbackAutoScroll) : ce(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(t) {
      var o = t.originalEvent;
      !this.options.dragOverBubble && !o.rootEl && this._handleAutoScroll(o);
    },
    drop: function() {
      this.sortable.nativeDraggable ? ue(document, "dragover", this._handleAutoScroll) : (ue(document, "pointermove", this._handleFallbackAutoScroll), ue(document, "touchmove", this._handleFallbackAutoScroll), ue(document, "mousemove", this._handleFallbackAutoScroll)), ya(), co(), Vc();
    },
    nulling: function() {
      ko = pr = An = mr = Rn = Qo = Zo = null, Ae.length = 0;
    },
    _handleFallbackAutoScroll: function(t) {
      this._handleAutoScroll(t, !0);
    },
    _handleAutoScroll: function(t, o) {
      var r = this, a = (t.touches ? t.touches[0] : t).clientX, l = (t.touches ? t.touches[0] : t).clientY, s = document.elementFromPoint(a, l);
      if (ko = t, o || this.options.forceAutoScrollFallback || Kn || Lt || Mn) {
        er(t, this.options, s, o);
        var i = jt(s, !0);
        mr && (!Rn || a !== Qo || l !== Zo) && (Rn && ya(), Rn = setInterval(function() {
          var u = jt(document.elementFromPoint(a, l), !0);
          u !== i && (i = u, co()), er(t, r.options, u, o);
        }, 10), Qo = a, Zo = l);
      } else {
        if (!this.options.bubbleScroll || jt(s, !0) === St()) {
          co();
          return;
        }
        er(t, this.options, jt(s, !1), !1);
      }
    }
  }, Mt(e, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function co() {
  Ae.forEach(function(e) {
    clearInterval(e.pid);
  }), Ae = [];
}
function ya() {
  clearInterval(Rn);
}
var er = $l(function(e, n, t, o) {
  if (n.scroll) {
    var r = (e.touches ? e.touches[0] : e).clientX, a = (e.touches ? e.touches[0] : e).clientY, l = n.scrollSensitivity, s = n.scrollSpeed, i = St(), u = !1, c;
    pr !== t && (pr = t, co(), An = n.scroll, c = n.scrollFn, An === !0 && (An = jt(t, !0)));
    var d = 0, m = An;
    do {
      var f = m, p = Re(f), v = p.top, g = p.bottom, w = p.left, y = p.right, h = p.width, k = p.height, b = void 0, _ = void 0, S = f.scrollWidth, T = f.scrollHeight, X = Q(f), P = f.scrollLeft, V = f.scrollTop;
      f === i ? (b = h < S && (X.overflowX === "auto" || X.overflowX === "scroll" || X.overflowX === "visible"), _ = k < T && (X.overflowY === "auto" || X.overflowY === "scroll" || X.overflowY === "visible")) : (b = h < S && (X.overflowX === "auto" || X.overflowX === "scroll"), _ = k < T && (X.overflowY === "auto" || X.overflowY === "scroll"));
      var K = b && (Math.abs(y - r) <= l && P + h < S) - (Math.abs(w - r) <= l && !!P), x = _ && (Math.abs(g - a) <= l && V + k < T) - (Math.abs(v - a) <= l && !!V);
      if (!Ae[d])
        for (var I = 0; I <= d; I++)
          Ae[I] || (Ae[I] = {});
      (Ae[d].vx != K || Ae[d].vy != x || Ae[d].el !== f) && (Ae[d].el = f, Ae[d].vx = K, Ae[d].vy = x, clearInterval(Ae[d].pid), (K != 0 || x != 0) && (u = !0, Ae[d].pid = setInterval((function() {
        o && this.layer === 0 && Z.active._onTouchMove(ko);
        var B = Ae[this.layer].vy ? Ae[this.layer].vy * s : 0, Y = Ae[this.layer].vx ? Ae[this.layer].vx * s : 0;
        typeof c == "function" && c.call(Z.dragged.parentNode[Ze], Y, B, e, ko, Ae[this.layer].el) !== "continue" || Pl(Ae[this.layer].el, Y, B);
      }).bind({
        layer: d
      }), 24))), d++;
    } while (n.bubbleScroll && m !== i && (m = jt(m, !1)));
    mr = u;
  }
}, 30), Nl = function(n) {
  var t = n.originalEvent, o = n.putSortable, r = n.dragEl, a = n.activeSortable, l = n.dispatchSortableEvent, s = n.hideGhostForTarget, i = n.unhideGhostForTarget;
  if (t) {
    var u = o || a;
    s();
    var c = t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t, d = document.elementFromPoint(c.clientX, c.clientY);
    i(), u && !u.el.contains(d) && (l("spill"), this.onSpill({
      dragEl: r,
      putSortable: o
    }));
  }
};
function Gr() {
}
Gr.prototype = {
  startIndex: null,
  dragStart: function(n) {
    var t = n.oldDraggableIndex;
    this.startIndex = t;
  },
  onSpill: function(n) {
    var t = n.dragEl, o = n.putSortable;
    this.sortable.captureAnimationState(), o && o.captureAnimationState();
    var r = kn(this.sortable.el, this.startIndex, this.options);
    r ? this.sortable.el.insertBefore(t, r) : this.sortable.el.appendChild(t), this.sortable.animateAll(), o && o.animateAll();
  },
  drop: Nl
};
Mt(Gr, {
  pluginName: "revertOnSpill"
});
function Wr() {
}
Wr.prototype = {
  onSpill: function(n) {
    var t = n.dragEl, o = n.putSortable, r = o || this.sortable;
    r.captureAnimationState(), t.parentNode && t.parentNode.removeChild(t), r.animateAll();
  },
  drop: Nl
};
Mt(Wr, {
  pluginName: "removeOnSpill"
});
Z.mount(new rd());
Z.mount(Wr, Gr);
const vr = /* @__PURE__ */ j({
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
    const o = e, r = t, a = ql(), l = C(!1), s = C(null), i = C(null), u = E(() => typeof o.itemKey == "string" ? (c) => c[o.itemKey] : o.itemKey);
    return n({
      containerRef: s,
      sortable: i,
      isDragging: l
    }), le(s, (c) => {
      c && (i.value = new Z(c, {
        ...o.options,
        onChoose: (d) => r("choose", d),
        onUnchoose: (d) => r("unchoose", d),
        onStart: (d) => {
          l.value = !0, r("start", d);
        },
        onEnd: (d) => {
          setTimeout(() => {
            l.value = !1, r("end", d);
          });
        },
        onAdd: (d) => r("add", d),
        onUpdate: (d) => r("update", d),
        onSort: (d) => r("sort", d),
        onRemove: (d) => r("remove", d),
        onFilter: (d) => r("filter", d),
        // See https://github.com/MaxLeiter/sortablejs-vue3/pull/56 for context on `attrs`.
        onMove: (d, m) => "onMoveCapture" in a ? (
          /**  eslint-disable-next-line */
          a.onMoveCapture(d, m)
        ) : r("move", d, m),
        onClone: (d) => r("clone", d),
        onChange: (d) => r("change", d)
      }));
    }), le(
      () => o.options,
      (c) => {
        if (c && (i != null && i.value))
          for (const d in c)
            i.value.option(
              d,
              c[d]
            );
      }
    ), we(() => {
      i.value && (i.value.destroy(), s.value = null, i.value = null);
    }), (c, d) => (O(), pe(_a(c.$props.tag), {
      ref_key: "containerRef",
      ref: s,
      class: z(c.$props.class)
    }, {
      default: W(() => [
        G(c.$slots, "header"),
        (O(!0), R(xe, null, Ke(e.list, (m, f) => G(c.$slots, "item", {
          key: u.value(m),
          element: m,
          index: f
        })), 128)),
        G(c.$slots, "footer")
      ]),
      _: 3
    }, 8, ["class"]));
  }
});
function ad(e) {
  return e.reduce((n, t) => {
    const o = t.group || "Default";
    return n[o] || (n[o] = []), n[o].push(t), n;
  }, {});
}
function en(e) {
  return Object.values(e).flat();
}
const ld = { class: "flex flex-col space-y-4" }, sd = { class: "space-y-2" }, id = { class: "space-y-2" }, ud = { class: "flex justify-end" }, cd = /* @__PURE__ */ j({
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
    C(!1);
    const r = C({
      ...t.modelValue,
      id: t.groupId
    }), a = C();
    le(
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
    return (s, i) => !s.disabled.includes("groups") && r.value ? (O(), pe(ac, {
      key: 0,
      ref_key: "popover",
      ref: a,
      theme: {
        popoverMenu: "leading-none",
        popoverMenuButton: "rounded-md size-6 flex items-center justify-center hover:bg-zinc-100"
      }
    }, {
      trigger: W(() => [
        $("span", {
          class: "block h-3 w-3 rounded-full",
          style: Wt(`background-color: ${r.value.color || s.defaultGroupColor};`)
        }, null, 4)
      ]),
      default: W(({ close: u }) => [
        $("div", ld, [
          $("div", sd, [
            i[2] || (i[2] = $("div", { class: "block text-sm font-medium text-foreground" }, " Group name ", -1)),
            U(Da, {
              modelValue: r.value.name,
              "onUpdate:modelValue": i[0] || (i[0] = (c) => r.value.name = c),
              type: "text",
              placeholder: `${r.value.name}`,
              theme: {
                input: "py-1.5"
              }
            }, null, 8, ["modelValue", "placeholder"])
          ]),
          $("div", id, [
            i[3] || (i[3] = $("div", { class: "block text-sm font-medium text-foreground" }, " Group color ", -1)),
            U(Nu, {
              "model-value": r.value.color,
              "onUpdate:modelValue": i[1] || (i[1] = (c) => r.value.color = c)
            }, null, 8, ["model-value"])
          ]),
          $("div", ud, [
            U(ot, {
              onClick: (c) => l(u),
              size: "sm",
              variant: "outline"
            }, {
              default: W(() => i[4] || (i[4] = [
                Gt(" Save ")
              ])),
              _: 2,
              __: [4]
            }, 1032, ["onClick"])
          ])
        ])
      ]),
      _: 1
    }, 512)) : ae("", !0);
  }
}), dd = ["id"], fd = { class: "mb-4 last:mb-0" }, pd = { class: "sortable-drag flex min-w-px grow items-center space-x-2 text-base" }, md = {
  key: 0,
  class: "shrink-0 text-sm"
}, vd = { key: 1 }, hd = ["data-sortable-item-id"], gd = { class: "ml-auto flex items-center space-x-1 p-1" }, bd = { class: "flex -space-x-px" }, Qf = /* @__PURE__ */ j({
  __name: "ColumnManager",
  props: {
    classes: { default: () => ({
      container: "",
      groupContainer: "",
      groupHeader: "",
      groupsContainer: "",
      newGroupContainer: "",
      groupMenuClasses: {
        menu: "",
        menuButton: "h-7 w-7 rounded-lg flex items-center justify-center hover:bg-zinc-100",
        menuItems: "z-50",
        menuItem: "rounded-xl",
        menuItemIcon: "group-hover:bg-indigo-300"
      }
    }) },
    defaultItems: { default: () => [] },
    disabled: { default: () => [] },
    dropDownClasses: { default: () => ({
      container: "",
      inputContainer: "",
      inputeElement: "",
      comboboxOptionsContainer: ""
    }) },
    defaultGroupColor: { default: "#e7e5e4" },
    existingColumns: { default: () => [] },
    groupConfiguration: { default: () => ({}) },
    focusedColumn: { default: null },
    groupMenuItems: { default: () => [] },
    searcher: {},
    theme: { default: () => ({
      addGroupButton: "",
      baseDropdownInputText: "",
      baseDropdownMenuContainer: "",
      baseDropdownMenuHeader: "",
      baseDropdownMenuItem: "",
      baseDropdownMenuItemButton: "",
      baseDropdownMenuItemGroup: "",
      baseDropdownMenuItemIcon: "",
      baseDropdownMenuItems: "",
      baseDropdownMenuTriggerButton: "",
      baseDropdownMenuTriggerButtonActive: "",
      columnManagerContainer: "",
      columnManagerGroupContainer: "",
      columnManagerGroupHeader: "",
      columnManagerGroupLabel: "",
      columnManagerGroupsContainer: "",
      columnManagerItem: "",
      columnManagerNewGroupContainer: "",
      columnManagerNewGroupInput: "",
      columnManagerNewGroupInputButton: "",
      typeaheadContainer: ""
    }) },
    typeaheadGroupBy: { default: "" },
    typeaheadGroupsConfig: { default: () => ({}) },
    typeaheadMiddlewareOptions: { default: () => ({
      autoPlacement: {
        allowedPlacements: ["top-start", "bottom-start"]
      },
      buffer: 20,
      size: {}
    }) }
  },
  emits: [
    "update:existingColumns",
    "update:groupConfiguration",
    "update:focusedColumn"
  ],
  setup(e, { expose: n, emit: t }) {
    const o = t, r = e;
    me(
      "componentJarTheme"
    );
    const a = C({ Default: [] }), l = C({}), s = C(!1), i = C(), u = C(r.focusedColumn), c = C(""), d = C([]), m = C((Math.random() + 1).toString(36).substring(7)), f = C(!1);
    C({
      id: "",
      name: "",
      color: ""
    }), le(
      () => r.focusedColumn,
      (x) => {
        u.value = x;
      },
      { immediate: !0 }
    );
    const p = E({
      get: () => u.value,
      set: (x) => {
        u.value = x, o("update:focusedColumn", x);
      }
    });
    function v() {
      return `group_${Math.random().toString(36).substring(2, 9)}`;
    }
    le(
      () => r.existingColumns,
      (x) => {
        a.value = x.length === 0 ? {
          Default: []
        } : ad([...x]);
      },
      { immediate: !0 }
    ), le(
      () => r.groupConfiguration,
      () => {
        const x = {};
        Object.entries(r.groupConfiguration).forEach(([I, B]) => {
          const Y = B.id || I;
          x[Y] = {
            ...B,
            id: Y
            // Ensure ID is set
          };
        }), l.value = x;
      },
      { immediate: !0, deep: !0 }
    ), le(
      () => l.value,
      (x) => {
        Object.entries(x).forEach(([I, B]) => {
          B.id || (B.id = I);
        });
      },
      { deep: !0 }
    );
    function g(x) {
      console.log("clicked list item", x.currentTarget);
    }
    function w(x) {
      const I = l.value[x];
      if (!I) return;
      const B = l.value[x];
      if (B) {
        if (l.value[x] = {
          ...B,
          id: x
          // Ensure we keep the original ID
        }, I.name !== B.name) {
          const Y = a.value[I.name] || [];
          delete a.value[I.name], a.value[B.name] = Y.map((ne) => ({
            ...ne,
            group: B.name
          }));
        }
        o("update:groupConfiguration", l.value), o("update:existingColumns", en(a.value));
      }
    }
    function y(x, I) {
      const B = a.value[x][I];
      u.value && u.value.id === B.id && (p.value = null), a.value = {
        ...a.value,
        [x]: a.value[x].filter(
          (Y, ne) => ne !== I
        )
      }, o("update:existingColumns", en(a.value));
    }
    function h() {
      const x = v(), I = c.value;
      a.value = {
        ...a.value,
        [x]: []
      }, l.value[x] = {
        id: x,
        name: I,
        color: r.defaultGroupColor
      }, c.value = "", s.value = !1, setTimeout(() => {
        const B = document.getElementById(
          `column-manager-groups-container-${m.value}`
        );
        B && B.scrollTo({
          top: B.scrollHeight,
          behavior: "smooth"
        });
      }, 250);
    }
    function k(x) {
      const I = l.value[x];
      I && (delete a.value[I.name], delete l.value[x], o("update:existingColumns", en(a.value)), o("update:groupConfiguration", l.value));
    }
    function b(x) {
      a.value = {
        ...a.value,
        [x]: []
      }, d.value.includes(x) || d.value.push(x);
    }
    function _(x, I) {
      const B = I.splice(x.oldIndex, 1)[0];
      return I.splice(Math.min(x.newIndex, I.length), 0, B), I;
    }
    function S(x, I) {
      a.value[x] = _(
        I,
        a.value[x]
      ), o("update:existingColumns", en(a.value));
    }
    function T(x) {
    }
    function X(x, I) {
      const B = I.from.dataset.groupName || "Default", Y = V(I).from.map(
        (ne) => a.value[B][ne]
      ).map((ne) => ({ ...ne, group: x }));
      a.value[x].splice(
        V(I).to[0],
        0,
        ...Y
      ), o("update:existingColumns", en(a.value));
    }
    function P(x, I) {
      a.value[x].splice(I.oldIndex, 1), o("update:existingColumns", en(a.value));
    }
    function V(x) {
      var I, B, Y;
      return {
        domElements: (I = x.items) != null && I.length ? x.items : [x.item],
        from: (B = x.oldIndicies) != null && B.length ? x.oldIndicies.map((ne) => ne.index) : [x.oldIndex],
        to: (Y = x.newIndicies) != null && Y.length ? x.newIndicies.map((ne) => ne.index) : [x.newIndex]
      };
    }
    function K(x, I) {
      console.log("onPickedNewColumn", a.value, x, I), I && (I.group = x, a.value = {
        ...a.value,
        [x]: [...a.value[x], I]
      }, o("update:existingColumns", en(a.value)));
    }
    return E(
      () => [
        // {
        //     icon: 'fa-plus',
        //     label: 'Add column to group',
        //     onClick: (context: any) => {
        //         // addingColumnToGroup.value = context.groupName
        //         addingColumnToGroups.value.push(context.groupName)
        //     },
        // },
        {
          icon: "fa-empty-set",
          label: "Empty group",
          onClick: (x) => {
            b(x.groupName);
          }
        },
        r.disabled.includes("groups") ? !1 : {
          icon: "fa-trash",
          label: "Remove group",
          onClick: (x) => {
            Object.entries(
              a.value
            ).length <= 1 || k(x.groupId);
          }
        }
      ].filter(Boolean)
    ), n({
      clearAllColumns: b,
      onPickedNewColumn: K,
      removeGroup: k
    }), (x, I) => (O(), R("div", {
      class: z(
        L(de)(
          "w-full overflow-hidden h-full border border-border bg-background rounded-lg sm:min-w-60 flex flex-col md:flex-row",
          x.theme.columnManagerContainer
        )
      )
    }, [
      Object.values(l.value).length === 0 ? (O(), pe(Wo, {
        key: 0,
        icon: "fa-exclamation-circle",
        title: "Nothing here, yet"
      }, {
        default: W(() => I[6] || (I[6] = [
          $("p", null, "There are no groups here yet. Add a new group to get started.", -1)
        ])),
        _: 1,
        __: [6]
      })) : ae("", !0),
      $("div", {
        id: `column-manager-groups-container-${m.value}`,
        class: z(
          L(de)("overflow-y-auto h-full", x.theme.columnManagerGroupsContainer)
        )
      }, [
        (O(), pe(L(vr), {
          list: Object.values(l.value).filter(
            (B) => B.name
          ),
          key: "groups",
          "item-key": "id",
          tag: "div",
          class: z(L(de)("p-3", x.theme.columnManagerGroupContainer)),
          "data-group-name": "groups",
          options: {
            animation: 150,
            group: "shared-groups",
            handle: ".drag-handle",
            selectedClass: "selected"
          },
          onStart: I[0] || (I[0] = (B) => f.value = !0),
          onEnd: I[1] || (I[1] = (B) => f.value = !1),
          onUpdate: I[2] || (I[2] = (B) => void 0)
        }, {
          item: W(({ element: B }) => [
            $("div", fd, [
              $("div", {
                class: z(L(de)(x.theme.columnManagerGroupHeader))
              }, [
                $("div", pd, [
                  x.disabled.includes("groups") ? ae("", !0) : G(x.$slots, "drag-handle", { key: 0 }),
                  U(cd, {
                    modelValue: l.value[B.id],
                    "onUpdate:modelValue": (Y) => l.value[B.id] = Y,
                    "default-group-color": x.defaultGroupColor,
                    disabled: x.disabled,
                    "group-id": B.id,
                    onUpdate: w
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "default-group-color", "disabled", "group-id"]),
                  $("span", {
                    class: z(["font-semibold", x.theme.columnManagerGroupLabel])
                  }, he(l.value[B.id].name), 3)
                ]),
                x.groupMenuItems ? (O(), R("span", md)) : ae("", !0)
              ], 2),
              f.value ? ae("", !0) : (O(), R("div", {
                key: 0,
                class: z(
                  L(de)(
                    "group flex items-center justify-end space-x-2 py-2 ",
                    x.theme.typeaheadContainer
                  )
                )
              }, [
                U(Ol, {
                  ref_key: "columnFinderTypeahead",
                  ref: i,
                  "default-items": x.defaultItems,
                  "display-property": () => "",
                  "groups-config": x.typeaheadGroupsConfig,
                  "group-by": x.typeaheadGroupBy,
                  multiple: !1,
                  nullable: !0,
                  searcher: x.searcher,
                  "middleware-options": x.typeaheadMiddlewareOptions,
                  placeholder: "Add a column to group",
                  "onUpdate:modelValue": (Y) => K(
                    B.id,
                    Y
                  )
                }, Kl({
                  empty: W(() => [
                    U(Wo, {
                      icon: "fa-exclamation-circle",
                      title: "No columns found"
                    }, {
                      default: W(() => I[7] || (I[7] = [
                        $("p", null, " There are no columns to show at this time. Try a different search. ", -1)
                      ])),
                      _: 1,
                      __: [7]
                    })
                  ]),
                  static: W(() => [
                    $("div", null, [
                      G(x.$slots, "typeahead-static")
                    ])
                  ]),
                  item: W(({ item: Y, selected: ne, active: fe }) => [
                    G(x.$slots, "option", kt(Ht({ item: Y, selected: ne, active: fe })))
                  ]),
                  _: 2
                }, [
                  x.$slots["typeahead-group"] ? {
                    name: "group",
                    fn: W((Y) => [
                      G(x.$slots, "typeahead-group", kt(Ht(Y)))
                    ]),
                    key: "0"
                  } : void 0,
                  x.$slots["typeahead-searching"] ? {
                    name: "searching",
                    fn: W(() => [
                      $("div", null, [
                        G(x.$slots, "typeahead-searching")
                      ])
                    ]),
                    key: "1"
                  } : void 0
                ]), 1032, ["default-items", "groups-config", "group-by", "searcher", "middleware-options", "onUpdate:modelValue"])
              ], 2)),
              !f.value && (a.value[B.id] || []).length === 0 ? (O(), R("div", vd, [
                U(Wo, {
                  title: "No columns",
                  description: "There are no columns here yet. Use the picker above to add the first column."
                }, {
                  default: W(() => I[8] || (I[8] = [
                    $("p", null, " There are no columns here yet. Use the picker above to add the first column. ", -1)
                  ])),
                  _: 1,
                  __: [8]
                })
              ])) : ae("", !0),
              f.value ? ae("", !0) : (O(), pe(L(vr), {
                list: a.value[B.id],
                key: JSON.stringify(a.value[B.id]),
                "item-key": "id",
                tag: "div",
                class: z([`sortable-group-${B.id}`]),
                "data-group-name": B.id,
                options: {
                  animation: 150,
                  group: "shared-columns",
                  handle: ".drag-handle",
                  // multiDrag: true,
                  selectedClass: "selected",
                  emptyInsertThreshold: 100
                },
                onAdd: (Y) => X(B.id, Y),
                onRemove: (Y) => P(B.id, Y),
                onUpdate: (Y) => S(B.id, Y)
              }, {
                item: W(({ element: Y, index: ne }) => [
                  (O(), R("div", {
                    class: z(["group flex w-full hover:bg-accent/50 rounded-md items-center gap-2 [&.selected]:bg-accent/50", L(de)(x.theme.columnManagerItem)]),
                    key: Y.id,
                    "data-sortable-item-id": Y.id,
                    onClick: g
                  }, [
                    G(x.$slots, "drag-handle", {}, () => [
                      U(ot, {
                        variant: "ghost",
                        size: "xs",
                        icon: "",
                        class: "drag-handle shrink-0 text-muted-foreground/70 hover:text-foreground rounded-sm hover:bg-black/5"
                      }, {
                        default: W(() => [
                          U(L(vs), { class: "size-3.5 shrink-0" })
                        ]),
                        _: 1
                      })
                    ]),
                    G(x.$slots, "column", kt(Ht({ element: Y }))),
                    $("div", gd, [
                      U(ot, {
                        onClick: wn((fe) => y(
                          B.id,
                          ne
                        ), ["prevent", "stop"]),
                        variant: "ghost",
                        size: "xs",
                        icon: "",
                        class: "shrink-0 rounded-sm text-muted-foreground/70 hover:text-foreground hover:bg-black/5"
                      }, {
                        default: W(() => [
                          U(L(gr), { class: "size-4 shrink-0" })
                        ]),
                        _: 2
                      }, 1032, ["onClick"]),
                      U(ot, {
                        onClick: wn((fe) => p.value.value = a.value[B.id][ne], ["prevent", "stop"]),
                        variant: "ghost",
                        size: "xs",
                        icon: "",
                        class: "shrink-0 rounded-sm text-muted-foreground/70 hover:text-foreground hover:bg-black/5"
                      }, {
                        default: W(() => [
                          U(L(ms), { class: "size-4 shrink-0" })
                        ]),
                        _: 2
                      }, 1032, ["onClick"])
                    ])
                  ], 10, hd))
                ]),
                _: 2
              }, 1032, ["list", "class", "data-group-name", "onAdd", "onRemove", "onUpdate"]))
            ])
          ]),
          _: 3
        }, 8, ["list", "class"])),
        x.disabled.includes("groups") ? ae("", !0) : (O(), R("div", {
          key: 0,
          class: z(["sticky bottom-0 z-2 flex items-center gap-2 p-3 bg-background/90 backdrop-blur-sm", L(de)(x.theme.columnManagerNewGroupContainer)])
        }, [
          U(st, {
            "enter-active-class": "transition duration-200 ease-out",
            "enter-from-class": "translate-y-1 opacity-0",
            "enter-to-class": "translate-y-0 opacity-100",
            "leave-active-class": "transition duration-150 ease-in",
            "leave-from-class": "translate-y-0 opacity-100",
            "leave-to-class": "translate-y-1 opacity-0"
          }, {
            default: W(() => [
              on($("span", bd, [
                U(Da, {
                  id: "column-manager-new-group-name",
                  name: "column-manager-new-group-name",
                  placeholder: "New group name",
                  modelValue: c.value,
                  "onUpdate:modelValue": I[3] || (I[3] = (B) => c.value = B),
                  onKeyup: I[4] || (I[4] = Ea((B) => h(), ["enter"])),
                  theme: {
                    input: "w-full py-1.5"
                  },
                  type: "text"
                }, null, 8, ["modelValue"])
              ], 512), [
                [rn, s.value]
              ])
            ]),
            _: 1
          }),
          U(ot, {
            onClick: I[5] || (I[5] = (B) => s.value = !s.value),
            theme: { button: x.theme.addGroupButton },
            size: "sm",
            variant: "outline"
          }, {
            default: W(() => [
              Gt(he(s.value ? "Cancel" : "Add a group"), 1)
            ]),
            _: 1
          }, 8, ["theme"])
        ], 2))
      ], 10, dd),
      G(x.$slots, "default")
    ], 2));
  }
});
function yd(e, n) {
  return O(), R("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    $("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
    })
  ]);
}
function wd(e, n) {
  return O(), R("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    $("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m7.49 12-3.75 3.75m0 0 3.75 3.75m-3.75-3.75h16.5V4.499"
    })
  ]);
}
function wa(e, n) {
  return O(), R("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    $("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
    })
  ]);
}
const xd = { class: "ml-2 grow min-w-px text-left" }, kd = { class: "ml-6 rounded border px-2 py-0.5 text-xs bg-card hidden sm:inline-block" }, Cd = { class: "fixed inset-0 bg-background/50 backdrop-blur-sm" }, Sd = { class: "fixed inset-0 overflow-y-auto" }, Od = { class: "flex min-h-full items-start justify-center p-4 pt-16 sm:items-center sm:pt-4" }, Ed = { class: "w-[calc(100vw-2rem)] sm:w-[400px] transform overflow-hidden rounded-2xl bg-card p-0 shadow-2xl border transition-all max-h-[calc(100vh-8rem)] sm:max-h-[calc(100vh-4rem)] flex flex-col" }, _d = { class: "text-xs font-medium text-muted-foreground my-2 px-3" }, Td = { class: "space-y-0.5" }, Dd = ["href"], $d = { class: "text-muted-foreground group-hover:text-primary transition" }, Pd = { class: "flex-1 min-w-0" }, Id = { class: "text-sm text-foreground truncate" }, Ad = {
  key: 1,
  class: "py-4 text-center text-sm text-muted-foreground flex-1 flex items-center justify-center"
}, Rd = { class: "border-t px-4 py-3 flex items-center gap-2 bg-card rounded-b-2xl flex-shrink-0" }, Md = { class: "rounded border text-muted-foreground size-5 flex items-center justify-center text-xs bg-card hidden sm:flex" }, Ld = { class: "text-xs text-muted-foreground" }, Zf = /* @__PURE__ */ j({
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
    const n = e, t = C(!1), o = C(""), r = C([]), a = (u) => {
      (n.triggerModifier === "metaKey" ? u.metaKey : u.ctrlKey) && u.key === n.triggerKey && (u.preventDefault(), t.value = !0), u.key === "Escape" && (t.value = !1);
    }, l = async (u) => {
      const c = u.target;
      if (o.value = c.value, !o.value) {
        r.value = n.defaultResults;
        return;
      }
      try {
        const d = await n.searchStrategy.search(o.value);
        r.value = d;
      } catch (d) {
        console.error("Search error:", d), r.value = [];
      }
    }, s = (u) => {
      console.log("onSelect", u), t.value = !1, o.value = "", r.value = n.defaultResults;
    }, i = () => {
      t.value = !0;
    };
    return ie(() => {
      window.addEventListener("keydown", a), r.value = n.defaultResults;
    }), we(() => {
      window.removeEventListener("keydown", a);
    }), (u, c) => (O(), pe(L(Rr), { "onUpdate:modelValue": s }, {
      default: W(() => [
        U(L(Mr), {
          as: "span",
          onClick: i
        }, {
          default: W(() => [
            U(ot, {
              variant: "outline",
              class: "w-full pr-2 pl-3"
            }, {
              default: W(() => [
                U(L(wa), { class: "size-4 shrink-0" }),
                $("span", xd, he(u.placeholder), 1),
                $("kbd", kd, he(u.keyboardShortcut), 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        U(st, {
          "enter-active-class": "ease-out duration-300",
          "enter-from-class": "opacity-0",
          "enter-to-class": "opacity-100",
          "leave-active-class": "ease-in duration-200",
          "leave-from-class": "opacity-100",
          "leave-to-class": "opacity-0"
        }, {
          default: W(() => [
            on($("div", {
              class: "fixed inset-0 z-50",
              onClick: c[2] || (c[2] = (d) => t.value = !1)
            }, [
              U(st, {
                "enter-active-class": "ease-out duration-300",
                "enter-from-class": "opacity-0",
                "enter-to-class": "opacity-100",
                "leave-active-class": "ease-in duration-200",
                "leave-from-class": "opacity-100",
                "leave-to-class": "opacity-0"
              }, {
                default: W(() => [
                  on($("div", Cd, null, 512), [
                    [rn, t.value]
                  ])
                ]),
                _: 1
              }),
              $("div", Sd, [
                $("div", Od, [
                  U(st, {
                    "enter-active-class": "ease-out duration-300",
                    "enter-from-class": "opacity-0 scale-95",
                    "enter-to-class": "opacity-100 scale-100",
                    "leave-active-class": "ease-in duration-200",
                    "leave-from-class": "opacity-100 scale-100",
                    "leave-to-class": "opacity-0 scale-95"
                  }, {
                    default: W(() => [
                      on($("div", Ed, [
                        $("div", {
                          class: "relative border-b px-2 pt-2 pb-2 flex-shrink-0",
                          onClick: c[1] || (c[1] = wn(() => {
                          }, ["stop"]))
                        }, [
                          U(L(wa), { class: "pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" }),
                          U(L(Lr), {
                            modelValue: o.value,
                            "onUpdate:modelValue": c[0] || (c[0] = (d) => o.value = d),
                            placeholder: u.inputPlaceholder,
                            autofocus: "",
                            type: "text",
                            onChange: l,
                            class: "flex w-full rounded-md border border-border bg-background pr-3 pl-9 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground/70 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring transition-[box-shadow,color] disabled:cursor-not-allowed disabled:opacity-50"
                          }, null, 8, ["modelValue", "placeholder"])
                        ]),
                        r.value.length > 0 ? (O(), pe(L(Br), {
                          key: 0,
                          static: "",
                          class: "px-2 pt-2 pb-4 flex-1 overflow-y-auto"
                        }, {
                          default: W(() => [
                            $("div", _d, he(o.value ? u.resultsLabel : u.defaultResultsLabel), 1),
                            $("div", Td, [
                              (O(!0), R(xe, null, Ke(r.value, (d) => (O(), pe(L(jn), {
                                key: d.id,
                                value: d
                              }, {
                                default: W(({ active: m, selected: f }) => [
                                  $("a", {
                                    href: d.url,
                                    class: z(["flex items-center gap-3 px-3 py-2 sm:py-1.5 hover:bg-accent/80 transition group rounded-md touch-manipulation", {
                                      "bg-accent": f || m
                                    }])
                                  }, [
                                    $("span", $d, [
                                      U(L(yd), { class: "size-4 shrink-0" })
                                    ]),
                                    $("div", Pd, [
                                      $("div", Id, he(d.title), 1)
                                    ])
                                  ], 10, Dd)
                                ]),
                                _: 2
                              }, 1032, ["value"]))), 128))
                            ])
                          ]),
                          _: 1
                        })) : o.value ? (O(), R("div", Ad, he(u.noResultsText), 1)) : ae("", !0),
                        $("div", Rd, [
                          $("kbd", Md, [
                            U(L(wd), { class: "size-3" })
                          ]),
                          $("span", Ld, he(u.footerText), 1)
                        ])
                      ], 512), [
                        [rn, t.value]
                      ])
                    ]),
                    _: 1
                  })
                ])
              ])
            ], 512), [
              [rn, t.value]
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), Bd = { class: "z-51 fixed inset-0 overflow-y-auto" }, Fd = { class: "flex min-h-full items-center justify-center p-4 text-center" }, Nd = { class: "space-y-4" }, Vd = { class: "mt-2 grow" }, zd = { class: "text-sm text-[var(--muted-foreground)]" }, jd = {
  key: 0,
  class: "flex items-center justify-end space-x-2 pt-4"
}, Hd = {
  key: 1,
  class: "flex items-center justify-center py-4"
}, ep = /* @__PURE__ */ j({
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
    le(() => o.modelValue, a), we(() => {
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
    }), (c, d) => (O(), pe(L(Sl), {
      appear: "",
      show: c.modelValue,
      as: "template"
    }, {
      default: W(() => [
        U(L(iu), {
          as: "div",
          onClose: i,
          class: "relative"
        }, {
          default: W(() => [
            U(L(cr), {
              as: "template",
              enter: "duration-300 ease-out",
              "enter-from": "opacity-0",
              "enter-to": "opacity-100",
              leave: "duration-200 ease-in",
              "leave-from": "opacity-100",
              "leave-to": "opacity-0"
            }, {
              default: W(() => d[0] || (d[0] = [
                $("div", { class: "z-50 fixed inset-0 bg-primary/10" }, null, -1)
              ])),
              _: 1,
              __: [0]
            }),
            $("div", Bd, [
              $("div", Fd, [
                U(L(cr), {
                  as: "template",
                  enter: "duration-300 ease-out",
                  "enter-from": "opacity-0 scale-95",
                  "enter-to": "opacity-100 scale-100",
                  leave: "duration-200 ease-in",
                  "leave-from": "opacity-100 scale-100",
                  "leave-to": "opacity-0 scale-95"
                }, {
                  default: W(() => [
                    U(L(uu), { class: "w-full max-w-md transform overflow-hidden rounded-lg bg-[var(--card)] ring-1 ring-[var(--border)] p-6 text-left align-middle shadow-xl transition-all duration-300" }, {
                      default: W(() => [
                        $("div", Nd, [
                          U(L(cu), {
                            as: "h3",
                            class: "text-lg font-medium leading-6 text-[var(--card-foreground)]"
                          }, {
                            default: W(() => [
                              Gt(he(c.title), 1)
                            ]),
                            _: 1
                          }),
                          $("div", Vd, [
                            $("p", zd, he(c.description), 1)
                          ]),
                          c.processing ? (O(), R("div", Hd, [
                            G(c.$slots, "processing")
                          ])) : (O(), R("div", jd, [
                            U(ot, {
                              size: "sm",
                              variant: "ghost",
                              onClick: s
                            }, {
                              default: W(() => [
                                Gt(he(c.cancelButtonText), 1)
                              ]),
                              _: 1
                            }),
                            U(ot, {
                              size: "sm",
                              variant: "default",
                              onClick: l
                            }, {
                              default: W(() => [
                                Gt(he(c.confirmButtonText), 1)
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
}), Gd = { class: "flex items-center gap-2" }, Wd = /* @__PURE__ */ j({
  __name: "QueryCondition",
  props: {
    modelValue: {},
    availableFields: {},
    showRemove: { type: Boolean },
    showLogicalOperator: { type: Boolean }
  },
  emits: ["update:modelValue", "remove"],
  setup(e, { emit: n }) {
    const t = e, o = n, r = (f) => f == null ? void 0 : f.label, a = (f) => f == null ? void 0 : f.label, l = E({
      get: () => t.modelValue.field,
      set: (f) => {
        if (f && typeof f == "object" && "id" in f) {
          const p = t.availableFields.find(
            (v) => v.id === f.id
          );
          o("update:modelValue", {
            ...t.modelValue,
            field: p || null
          });
        } else
          o("update:modelValue", { ...t.modelValue, field: f });
      }
    }), s = E({
      get: () => d.find((f) => f.id === t.modelValue.operator),
      set: (f) => {
        const p = f && typeof f == "object" && "id" in f ? f.id : f;
        o("update:modelValue", {
          ...t.modelValue,
          operator: p
        });
      }
    }), i = E({
      get: () => m.find((f) => f.id === t.modelValue.comparison),
      set: (f) => {
        const p = f && typeof f == "object" && "id" in f ? f.id : f;
        o("update:modelValue", {
          ...t.modelValue,
          comparison: p
        });
      }
    }), u = E({
      get: () => t.modelValue.value,
      set: (f) => o("update:modelValue", { ...t.modelValue, value: f })
    });
    E({
      get: () => t.modelValue.logicalOrOperator,
      set: (f) => o("update:modelValue", {
        ...t.modelValue,
        logicalOrOperator: f
      })
    });
    const c = E(() => [...u.value || []]);
    E(() => {
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
    const d = [
      { id: "does", label: "does" },
      { id: "doesnt", label: "doesn't" }
    ], m = [
      { id: "equal", label: "equal" },
      { id: "contain", label: "contain" }
    ];
    return (f, p) => {
      var v;
      return O(), R("div", Gd, [
        U(Ol, {
          modelValue: l.value,
          "onUpdate:modelValue": p[0] || (p[0] = (g) => l.value = g),
          "default-items": f.availableFields,
          displayProperty: r,
          placeholder: "Select a field...",
          class: "self-start w-64 shrink-0",
          nullable: !0,
          theme: {
            baseDropdownInputText: ""
          }
        }, null, 8, ["modelValue", "default-items"]),
        U(Go, {
          modelValue: s.value,
          "onUpdate:modelValue": p[1] || (p[1] = (g) => s.value = g),
          items: d,
          "display-property": (g) => g.label,
          placeholder: "Select operator...",
          class: "self-start w-32 shrink-0"
        }, null, 8, ["modelValue", "display-property"]),
        U(Go, {
          modelValue: i.value,
          "onUpdate:modelValue": p[2] || (p[2] = (g) => i.value = g),
          items: m,
          "display-property": (g) => g.label,
          placeholder: "Select comparison...",
          class: "self-start w-32 shrink-0"
        }, null, 8, ["modelValue", "display-property"]),
        U(Go, {
          modelValue: u.value,
          "onUpdate:modelValue": p[3] || (p[3] = (g) => u.value = g),
          items: (v = l.value) == null ? void 0 : v.defaultValuesGetter(),
          "display-property": a,
          "disabled-items": c.value,
          placeholder: "Select values...",
          class: "self-start grow min-w-64",
          multiple: !0,
          nullable: !0
        }, null, 8, ["modelValue", "items", "disabled-items"]),
        f.showRemove ? (O(), pe(ot, {
          key: 0,
          onClick: p[4] || (p[4] = (g) => f.$emit("remove")),
          class: "text-destructive hover:bg-destructive/80 hover:text-white rounded shrink-0",
          variant: "ghost",
          size: "xs"
        }, {
          default: W(() => [
            U(L(gr), { class: "size-4" })
          ]),
          _: 1
        })) : ae("", !0)
      ]);
    };
  }
}), Ve = [];
for (let e = 0; e < 256; ++e)
  Ve.push((e + 256).toString(16).slice(1));
function Ud(e, n = 0) {
  return (Ve[e[n + 0]] + Ve[e[n + 1]] + Ve[e[n + 2]] + Ve[e[n + 3]] + "-" + Ve[e[n + 4]] + Ve[e[n + 5]] + "-" + Ve[e[n + 6]] + Ve[e[n + 7]] + "-" + Ve[e[n + 8]] + Ve[e[n + 9]] + "-" + Ve[e[n + 10]] + Ve[e[n + 11]] + Ve[e[n + 12]] + Ve[e[n + 13]] + Ve[e[n + 14]] + Ve[e[n + 15]]).toLowerCase();
}
let tr;
const qd = new Uint8Array(16);
function Kd() {
  if (!tr) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    tr = crypto.getRandomValues.bind(crypto);
  }
  return tr(qd);
}
const Yd = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), xa = { randomUUID: Yd };
function Co(e, n, t) {
  var r;
  if (xa.randomUUID && !e)
    return xa.randomUUID();
  e = e || {};
  const o = e.random ?? ((r = e.rng) == null ? void 0 : r.call(e)) ?? Kd();
  if (o.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return o[6] = o[6] & 15 | 64, o[8] = o[8] & 63 | 128, Ud(o);
}
const Xd = /* @__PURE__ */ j({
  __name: "QueryBuilderLogicSwitch",
  props: {
    modelValue: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const t = e, o = n, r = E({
      get: () => t.modelValue,
      set: (a) => o("update:modelValue", a)
    });
    return (a, l) => (O(), pe(L(hu), {
      modelValue: r.value,
      "onUpdate:modelValue": l[0] || (l[0] = (s) => r.value = s),
      class: z([
        "relative inline-flex h-6 w-16 items-center rounded-full transition-colors focus:outline-none border focus:ring-2 focus:ring-ring focus:ring-offset-2",
        (r.value, "bg-muted")
      ])
    }, {
      default: W(() => [
        l[1] || (l[1] = $("span", { class: "sr-only" }, "Use AND/OR", -1)),
        $("span", {
          class: z([
            "inline-block absolute h-4 transform rounded-full bg-primary shadow-xs transition-all duration-300 ease-in-out",
            r.value ? "left-9 w-5.5" : "left-1 w-7.5"
          ])
        }, null, 2),
        $("span", {
          class: z(["absolute left-2 text-[10px] font-medium", [r.value ? "text-primary" : "text-muted"]])
        }, "AND", 2),
        $("span", {
          class: z(["absolute right-2 text-[10px] font-medium", [r.value ? "text-muted" : "text-primary"]])
        }, "OR", 2)
      ]),
      _: 1,
      __: [1]
    }, 8, ["modelValue", "class"]));
  }
}), Jd = { class: "relative group-container border rounded-lg p-4 mb-4" }, Qd = { class: "flex items-center gap-2 mb-2" }, Zd = { key: 0 }, ef = { class: "space-y-2" }, tf = {
  key: 0,
  class: "pl-6 mt-4 border-l"
}, nf = { class: "flex gap-2 mt-4" }, of = /* @__PURE__ */ j({
  __name: "QueryGroup",
  props: {
    modelValue: {},
    availableFields: {},
    isRoot: { type: Boolean }
  },
  emits: ["update:modelValue", "remove"],
  setup(e, { emit: n }) {
    const t = e, o = n, r = E({
      get: () => t.modelValue.conditions,
      set: (d) => o("update:modelValue", { ...t.modelValue, conditions: d })
    }), a = E({
      get: () => t.modelValue.logicalOrOperator,
      set: (d) => o("update:modelValue", {
        ...t.modelValue,
        logicalOrOperator: d
      })
    });
    function l() {
      return {
        id: Co(),
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
    function i(d) {
      r.value.length > 1 && r.value.splice(d, 1);
    }
    function u() {
      const d = {
        id: Co(),
        conditions: [l()],
        nestedGroups: [],
        logicalOrOperator: !1
      };
      t.modelValue.nestedGroups ? o("update:modelValue", {
        ...t.modelValue,
        nestedGroups: [...t.modelValue.nestedGroups, d]
      }) : o("update:modelValue", {
        ...t.modelValue,
        nestedGroups: [d]
      });
    }
    function c(d) {
      if (!t.modelValue.nestedGroups) return;
      const m = t.modelValue.nestedGroups.filter(
        (f, p) => p !== d
      );
      o("update:modelValue", { ...t.modelValue, nestedGroups: m });
    }
    return (d, m) => {
      var p;
      const f = Yl("QueryGroup", !0);
      return O(), R("div", Jd, [
        $("div", Qd, [
          U(Xd, {
            modelValue: a.value,
            "onUpdate:modelValue": m[0] || (m[0] = (v) => a.value = v)
          }, null, 8, ["modelValue"]),
          d.isRoot ? ae("", !0) : (O(), R("span", Zd, [
            U(ot, {
              variant: "ghost",
              size: "sm",
              onClick: m[1] || (m[1] = (v) => d.$emit("remove")),
              class: "text-destructive hover:text-destructive/80"
            }, {
              default: W(() => [
                U(L(gs), { class: "size-4" })
              ]),
              _: 1
            })
          ]))
        ]),
        $("div", ef, [
          (O(!0), R(xe, null, Ke(r.value, (v, g) => (O(), pe(Wd, {
            key: v.id,
            modelValue: r.value[g],
            "onUpdate:modelValue": (w) => r.value[g] = w,
            "available-fields": d.availableFields,
            "show-remove": r.value.length > 1,
            onRemove: (w) => i(g)
          }, null, 8, ["modelValue", "onUpdate:modelValue", "available-fields", "show-remove", "onRemove"]))), 128))
        ]),
        (p = d.modelValue.nestedGroups) != null && p.length ? (O(), R("div", tf, [
          (O(!0), R(xe, null, Ke(d.modelValue.nestedGroups, (v, g) => (O(), pe(f, {
            key: v.id,
            modelValue: d.modelValue.nestedGroups[g],
            "onUpdate:modelValue": (w) => d.modelValue.nestedGroups[g] = w,
            "available-fields": d.availableFields,
            "is-root": !1,
            onRemove: (w) => c(g)
          }, null, 8, ["modelValue", "onUpdate:modelValue", "available-fields", "onRemove"]))), 128))
        ])) : ae("", !0),
        $("div", nf, [
          U(ot, {
            variant: "outline",
            size: "sm",
            onClick: s
          }, {
            default: W(() => m[2] || (m[2] = [
              Gt("Add Condition")
            ])),
            _: 1,
            __: [2]
          }),
          U(ot, {
            variant: "outline",
            size: "sm",
            onClick: u
          }, {
            default: W(() => m[3] || (m[3] = [
              Gt("Add Group")
            ])),
            _: 1,
            __: [3]
          })
        ])
      ]);
    };
  }
}), rf = { class: "w-full" }, tp = /* @__PURE__ */ j({
  __name: "FluentQueryBuilder",
  props: {
    modelValue: {},
    availableFields: {}
  },
  emits: ["update:modelValue"],
  setup(e, { expose: n, emit: t }) {
    const o = e, r = t, a = C(o.modelValue || l());
    le(
      a,
      (u) => {
        r("update:modelValue", [u]);
      },
      { deep: !0 }
    );
    function l() {
      return {
        id: Co(),
        conditions: [s()],
        nestedGroups: [],
        logicalOrOperator: !1
      };
    }
    function s() {
      return {
        id: Co(),
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
    }), (u, c) => (O(), R("div", rf, [
      U(of, {
        modelValue: a.value,
        "onUpdate:modelValue": [
          c[0] || (c[0] = (d) => a.value = d),
          i
        ],
        "available-fields": o.availableFields,
        "is-root": !0
      }, null, 8, ["modelValue", "available-fields"])
    ]));
  }
}), af = { class: "absolute top-0 left-0 invisible -z-10 flex flex-nowrap" }, lf = ["innerHTML"], sf = { class: "flex space-x-1 sm:space-x-1.5 md:space-x-2 lg:space-x-2.5 xl:space-x-3" }, uf = ["onClick", "data-active"], cf = ["innerHTML"], df = ["innerHTML"], ff = 80, pf = /* @__PURE__ */ j({
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
    const t = e, o = n, r = C(t.tabs);
    C();
    const a = C(!1), l = C(), s = C(), i = C(), u = C([]), c = C(t.tabs.length), d = E(() => r.value.slice(0, c.value)), m = E(() => r.value.slice(c.value)), f = () => {
      if (!s.value || u.value.length === 0) {
        c.value = t.tabs.length;
        return;
      }
      const b = s.value.offsetWidth;
      let _ = 0, S = !0;
      for (let P = 0; P < u.value.length; P++) {
        const V = u.value[P], K = P > 0 ? p() : 0;
        if (_ += V.offsetWidth + K, _ > b) {
          S = !1;
          break;
        }
      }
      if (S) {
        c.value = t.tabs.length;
        return;
      }
      const T = b - ff;
      let X = 0;
      _ = 0;
      for (let P = 0; P < u.value.length; P++) {
        const V = u.value[P], K = P > 0 ? p() : 0;
        if (_ + V.offsetWidth + K <= T)
          _ += V.offsetWidth + K, X++;
        else
          break;
      }
      X === 0 && u.value.length > 0 && u.value[0].offsetWidth <= T && (X = 1), c.value = X;
    }, p = () => {
      const b = window.innerWidth;
      return b < 640 ? 4 : b < 768 ? 6 : b < 1024 ? 8 : b < 1280 ? 10 : 12;
    };
    let v;
    const g = () => {
      clearTimeout(v), v = window.setTimeout(f, 150);
    };
    ie(() => {
      He(f), window.addEventListener("resize", g);
    }), we(() => {
      window.removeEventListener("resize", g), clearTimeout(v);
    }), le(
      () => t.tabs,
      (b) => {
        r.value = b, He(f);
      },
      { deep: !0 }
    );
    function w(b) {
      const _ = r.value.findIndex(
        (T) => T.id === b
      );
      if (_ < c.value && _ !== -1) {
        o("clicked", b);
        return;
      }
      const S = r.value.splice(_, 1)[0];
      r.value.splice(c.value - 1, 0, S), o("update", r.value), o("clicked", b);
    }
    function y(b) {
      const _ = [...d.value], S = _.splice(b.oldIndex, 1)[0];
      _.splice(b.newIndex, 0, S);
      const T = [..._, ...m.value];
      r.value = T, o("update", r.value);
    }
    function h() {
      a.value = !0;
    }
    function k() {
      a.value = !1;
    }
    return (b, _) => (O(), R("div", {
      ref_key: "containerRef",
      ref: l,
      class: z(L(de)("relative z-10 mx-auto", b.classes.container, b.theme.container))
    }, [
      $("div", af, [
        (O(!0), R(xe, null, Ke(r.value, (S) => (O(), R("a", {
          key: `measure-${S.id}`,
          ref_for: !0,
          ref_key: "allTabRefs",
          ref: u,
          class: z(
            L(de)(
              "pj-tab flex cursor-pointer items-center rounded-t-md px-2 py-1.5 text-sm leading-none font-medium transition-all duration-200 ease-in-out transform sm:px-3 sm:py-2 sm:text-base md:px-4 md:py-2.5 md:text-lg lg:px-5 lg:py-3",
              b.style === "classic" ? "px-3 py-2 border-x border-t text-sm leading-none font-medium transition-all duration-200 ease-in-out transform data-[active=false]:relative data-[active=false]:border-transparent data-[active=false]:hover:bg-primary/5 data-[active=true]:border-border data-[active=true]:bg-card sm:px-4 sm:py-2.5 sm:text-base md:px-6 md:py-3 md:text-lg lg:px-8 lg:py-4" : "flex cursor-pointer items-center border-0 px-3 py-2.5 text-sm leading-none font-medium transition-all duration-200 ease-in-out transform hover:no-underline data-[active=false]:relative data-[active=false]:text-foreground/50 data-[active=false]:hover:bg-primary/5 data-[active=false]:hover:text-foreground data-[active=false]:border-b-transparent data-[active=true]:bg-card data-[active=true]:border-b-3 data-[active=true]:border-b-accent sm:px-4 sm:py-3 sm:text-base md:px-6 md:py-3.5 md:text-lg lg:px-8 lg:py-4",
              S.classes || "",
              b.tabClasses,
              b.classes.tab,
              b.theme.tabsNavTab
            )
          )
        }, [
          G(b.$slots, "left", Qe({ ref_for: !0 }, S), void 0, !0),
          b.$slots.label ? ae("", !0) : (O(), R("span", {
            key: 0,
            innerHTML: S.label
          }, null, 8, lf)),
          G(b.$slots, "label", Qe({ ref_for: !0 }, S), void 0, !0),
          G(b.$slots, "right", Qe({ ref_for: !0 }, S), void 0, !0)
        ], 2))), 128))
      ]),
      $("div", sf, [
        G(b.$slots, "before", {}, void 0, !0),
        $("div", {
          ref_key: "tabsContainerRef",
          ref: s,
          class: "flex-1 min-w-0"
        }, [
          (O(), pe(L(vr), {
            list: d.value,
            key: "tabs-nav",
            "item-key": "id",
            tag: "div",
            class: z(
              L(de)(
                "flex flex-wrap space-x-0.5 sm:space-x-1 md:space-x-1.5 lg:space-x-2",
                b.theme.sortableContainer
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
            onStart: h,
            onEnd: k
          }, {
            item: W(({ element: S }) => [
              (O(), R("a", {
                key: S.id,
                href: "#",
                onClick: wn(
                  (T) => {
                    T.preventDefault(), b.$emit("clicked", S.id);
                  },
                  ["prevent"]
                ),
                class: z(
                  L(de)(
                    "pj-tab flex cursor-pointer items-center rounded-t-md px-2 py-1.5 text-sm leading-none font-medium transition-all duration-200 ease-in-out transform sm:px-3 sm:py-2 sm:text-base md:px-4 md:py-2.5 md:text-lg lg:px-5 lg:py-3",
                    b.style === "classic" ? "px-3 py-2 border-x border-t text-sm leading-none font-medium transition-all duration-200 ease-in-out transform data-[active=false]:relative data-[active=false]:border-transparent data-[active=false]:hover:bg-primary/5 data-[active=true]:border-border data-[active=true]:bg-card sm:px-4 sm:py-2.5 sm:text-base md:px-6 md:py-3 md:text-lg lg:px-8 lg:py-4" : "flex cursor-pointer items-center border-0 px-3 py-2.5 text-sm leading-none font-medium transition-all duration-200 ease-in-out transform hover:no-underline data-[active=false]:relative data-[active=false]:text-foreground/50 data-[active=false]:hover:bg-primary/5 data-[active=false]:hover:text-foreground data-[active=false]:border-b-transparent data-[active=true]:bg-card data-[active=true]:border-b-3 data-[active=true]:border-b-accent sm:px-4 sm:py-3 sm:text-base md:px-6 md:py-3.5 md:text-lg lg:px-8 lg:py-4",
                    S.classes || "",
                    b.tabClasses,
                    b.classes.tab,
                    b.theme.tabsNavTab
                  )
                ),
                "data-active": ((S == null ? void 0 : S.active) ?? !1).toString()
              }, [
                G(b.$slots, "left", kt(Ht(S)), void 0, !0),
                b.$slots.label ? ae("", !0) : (O(), R("span", {
                  key: 0,
                  innerHTML: S.label
                }, null, 8, cf)),
                G(b.$slots, "label", kt(Ht(S)), void 0, !0),
                G(b.$slots, "right", kt(Ht(S)), void 0, !0)
              ], 10, uf))
            ]),
            _: 3
          }, 8, ["list", "class"]))
        ], 512),
        m.value.length > 0 ? (O(), pe(zu, {
          key: 0,
          class: "flex items-center"
        }, {
          default: W(() => [
            U(ju, { "as-child": "" }, {
              default: W(() => [
                $("button", {
                  ref_key: "moreButtonRef",
                  ref: i,
                  class: z(
                    L(de)(
                      "flex items-center justify-center rounded-t-md px-3 py-1.5 text-sm font-medium transition-all duration-200 ease-in-out transform border border-border bg-card hover:bg-accent hover:text-accent-foreground sm:px-4 sm:py-2 md:px-5 md:py-2.5"
                    )
                  ),
                  "aria-label": "More tabs"
                }, [
                  _[0] || (_[0] = $("span", { class: "hidden sm:inline" }, "More", -1)),
                  _[1] || (_[1] = $("span", { class: "sm:hidden" }, "⋯", -1)),
                  U(L(hr), { class: "ml-1 h-4 w-4 transition-transform duration-200" })
                ], 2)
              ]),
              _: 1
            }),
            U(Hu, {
              align: "end",
              "side-offset": 8,
              class: "min-w-[8rem]"
            }, {
              default: W(() => [
                (O(!0), R(xe, null, Ke(m.value, (S) => (O(), pe(Gu, {
                  key: S.id,
                  onClick: (T) => w(S.id),
                  class: z(
                    L(de)(
                      "flex items-center",
                      S.active ? "bg-accent text-accent-foreground" : ""
                    )
                  )
                }, {
                  default: W(() => [
                    G(b.$slots, "left", Qe({ ref_for: !0 }, S), void 0, !0),
                    b.$slots.label ? ae("", !0) : (O(), R("span", {
                      key: 0,
                      innerHTML: S.label
                    }, null, 8, df)),
                    G(b.$slots, "label", Qe({ ref_for: !0 }, S), void 0, !0),
                    G(b.$slots, "right", Qe({ ref_for: !0 }, S), void 0, !0)
                  ]),
                  _: 2
                }, 1032, ["onClick", "class"]))), 128))
              ]),
              _: 3
            })
          ]),
          _: 3
        })) : ae("", !0),
        G(b.$slots, "after", {}, void 0, !0)
      ]),
      (O(), R("hr", {
        key: 0,
        class: z(L(de)("border-t", b.theme.tabsNavLine))
      }, null, 2))
    ], 2));
  }
}), np = /* @__PURE__ */ Gn(pf, [["__scopeId", "data-v-bcaafe01"]]);
function op() {
  const e = C("Cancel"), n = C("Confirm"), t = C(""), o = C(""), r = C(""), a = C(!1), l = C(""), s = C(() => {
    console.warn("Cancel callback not set"), a.value = !1;
  }), i = C(() => {
    console.warn("Confirm callback not set"), a.value = !1;
  });
  function u(d, m, f, p, v = "Confirm", g = "Cancel", w = "") {
    l.value = d, o.value = m, n.value = v, e.value = g, t.value = w, i.value = f || (async () => {
      console.warn("Confirm callback not set"), a.value = !1;
    }), s.value = p || (async () => {
      console.warn("Cancel callback not set"), a.value = !1;
    }), a.value = !0;
  }
  function c(d) {
    r.value = d;
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
    toggleProcessing: c
  };
}
function mf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var fo = { exports: {} };
/*! algoliasearch-lite.umd.js | 4.25.0 | © Algolia, inc. | https://github.com/algolia/algoliasearch-client-javascript */
var vf = fo.exports, ka;
function hf() {
  return ka || (ka = 1, function(e, n) {
    (function(t, o) {
      e.exports = o();
    })(vf, function() {
      function t(D, A, M) {
        return A in D ? Object.defineProperty(D, A, { value: M, enumerable: !0, configurable: !0, writable: !0 }) : D[A] = M, D;
      }
      function o(D, A) {
        var M = Object.keys(D);
        if (Object.getOwnPropertySymbols) {
          var F = Object.getOwnPropertySymbols(D);
          A && (F = F.filter(function(q) {
            return Object.getOwnPropertyDescriptor(D, q).enumerable;
          })), M.push.apply(M, F);
        }
        return M;
      }
      function r(D) {
        for (var A = 1; A < arguments.length; A++) {
          var M = arguments[A] != null ? arguments[A] : {};
          A % 2 ? o(Object(M), !0).forEach(function(F) {
            t(D, F, M[F]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(D, Object.getOwnPropertyDescriptors(M)) : o(Object(M)).forEach(function(F) {
            Object.defineProperty(D, F, Object.getOwnPropertyDescriptor(M, F));
          });
        }
        return D;
      }
      function a(D, A) {
        if (D == null) return {};
        var M, F, q = function(re, J) {
          if (re == null) return {};
          var ve, Ee, be = {}, Ne = Object.keys(re);
          for (Ee = 0; Ee < Ne.length; Ee++) ve = Ne[Ee], J.indexOf(ve) >= 0 || (be[ve] = re[ve]);
          return be;
        }(D, A);
        if (Object.getOwnPropertySymbols) {
          var ee = Object.getOwnPropertySymbols(D);
          for (F = 0; F < ee.length; F++) M = ee[F], A.indexOf(M) >= 0 || Object.prototype.propertyIsEnumerable.call(D, M) && (q[M] = D[M]);
        }
        return q;
      }
      function l(D, A) {
        return function(M) {
          if (Array.isArray(M)) return M;
        }(D) || function(M, F) {
          if (Symbol.iterator in Object(M) || Object.prototype.toString.call(M) === "[object Arguments]") {
            var q = [], ee = !0, re = !1, J = void 0;
            try {
              for (var ve, Ee = M[Symbol.iterator](); !(ee = (ve = Ee.next()).done) && (q.push(ve.value), !F || q.length !== F); ee = !0) ;
            } catch (be) {
              re = !0, J = be;
            } finally {
              try {
                ee || Ee.return == null || Ee.return();
              } finally {
                if (re) throw J;
              }
            }
            return q;
          }
        }(D, A) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }();
      }
      function s(D) {
        return function(A) {
          if (Array.isArray(A)) {
            for (var M = 0, F = new Array(A.length); M < A.length; M++) F[M] = A[M];
            return F;
          }
        }(D) || function(A) {
          if (Symbol.iterator in Object(A) || Object.prototype.toString.call(A) === "[object Arguments]") return Array.from(A);
        }(D) || function() {
          throw new TypeError("Invalid attempt to spread non-iterable instance");
        }();
      }
      function i(D) {
        var A, M = "algoliasearch-client-js-".concat(D.key), F = function() {
          return A === void 0 && (A = D.localStorage || window.localStorage), A;
        }, q = function() {
          return JSON.parse(F().getItem(M) || "{}");
        }, ee = function(J) {
          F().setItem(M, JSON.stringify(J));
        }, re = function() {
          var J = D.timeToLive ? 1e3 * D.timeToLive : null, ve = q(), Ee = Object.fromEntries(Object.entries(ve).filter(function(Ne) {
            return l(Ne, 2)[1].timestamp !== void 0;
          }));
          if (ee(Ee), J) {
            var be = Object.fromEntries(Object.entries(Ee).filter(function(Ne) {
              var Ie = l(Ne, 2)[1], Xe = (/* @__PURE__ */ new Date()).getTime();
              return !(Ie.timestamp + J < Xe);
            }));
            ee(be);
          }
        };
        return { get: function(J, ve) {
          var Ee = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : { miss: function() {
            return Promise.resolve();
          } };
          return Promise.resolve().then(function() {
            re();
            var be = JSON.stringify(J);
            return q()[be];
          }).then(function(be) {
            return Promise.all([be ? be.value : ve(), be !== void 0]);
          }).then(function(be) {
            var Ne = l(be, 2), Ie = Ne[0], Xe = Ne[1];
            return Promise.all([Ie, Xe || Ee.miss(Ie)]);
          }).then(function(be) {
            return l(be, 1)[0];
          });
        }, set: function(J, ve) {
          return Promise.resolve().then(function() {
            var Ee = q();
            return Ee[JSON.stringify(J)] = { timestamp: (/* @__PURE__ */ new Date()).getTime(), value: ve }, F().setItem(M, JSON.stringify(Ee)), ve;
          });
        }, delete: function(J) {
          return Promise.resolve().then(function() {
            var ve = q();
            delete ve[JSON.stringify(J)], F().setItem(M, JSON.stringify(ve));
          });
        }, clear: function() {
          return Promise.resolve().then(function() {
            F().removeItem(M);
          });
        } };
      }
      function u(D) {
        var A = s(D.caches), M = A.shift();
        return M === void 0 ? { get: function(F, q) {
          var ee = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : { miss: function() {
            return Promise.resolve();
          } }, re = q();
          return re.then(function(J) {
            return Promise.all([J, ee.miss(J)]);
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
          var ee = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : { miss: function() {
            return Promise.resolve();
          } };
          return M.get(F, q, ee).catch(function() {
            return u({ caches: A }).get(F, q, ee);
          });
        }, set: function(F, q) {
          return M.set(F, q).catch(function() {
            return u({ caches: A }).set(F, q);
          });
        }, delete: function(F) {
          return M.delete(F).catch(function() {
            return u({ caches: A }).delete(F);
          });
        }, clear: function() {
          return M.clear().catch(function() {
            return u({ caches: A }).clear();
          });
        } };
      }
      function c() {
        var D = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { serializable: !0 }, A = {};
        return { get: function(M, F) {
          var q = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : { miss: function() {
            return Promise.resolve();
          } }, ee = JSON.stringify(M);
          if (ee in A) return Promise.resolve(D.serializable ? JSON.parse(A[ee]) : A[ee]);
          var re = F(), J = q && q.miss || function() {
            return Promise.resolve();
          };
          return re.then(function(ve) {
            return J(ve);
          }).then(function() {
            return re;
          });
        }, set: function(M, F) {
          return A[JSON.stringify(M)] = D.serializable ? JSON.stringify(F) : F, Promise.resolve(F);
        }, delete: function(M) {
          return delete A[JSON.stringify(M)], Promise.resolve();
        }, clear: function() {
          return A = {}, Promise.resolve();
        } };
      }
      function d(D) {
        for (var A = D.length - 1; A > 0; A--) {
          var M = Math.floor(Math.random() * (A + 1)), F = D[A];
          D[A] = D[M], D[M] = F;
        }
        return D;
      }
      function m(D, A) {
        return A && Object.keys(A).forEach(function(M) {
          D[M] = A[M](D);
        }), D;
      }
      function f(D) {
        for (var A = arguments.length, M = new Array(A > 1 ? A - 1 : 0), F = 1; F < A; F++) M[F - 1] = arguments[F];
        var q = 0;
        return D.replace(/%s/g, function() {
          return encodeURIComponent(M[q++]);
        });
      }
      var p = { WithinQueryParameters: 0, WithinHeaders: 1 };
      function v(D, A) {
        var M = D || {}, F = M.data || {};
        return Object.keys(M).forEach(function(q) {
          ["timeout", "headers", "queryParameters", "data", "cacheable"].indexOf(q) === -1 && (F[q] = M[q]);
        }), { data: Object.entries(F).length > 0 ? F : void 0, timeout: M.timeout || A, headers: M.headers || {}, queryParameters: M.queryParameters || {}, cacheable: M.cacheable };
      }
      var g = { Read: 1, Write: 2, Any: 3 }, w = 1, y = 2, h = 3;
      function k(D) {
        var A = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : w;
        return r(r({}, D), {}, { status: A, lastUpdate: Date.now() });
      }
      function b(D) {
        return typeof D == "string" ? { protocol: "https", url: D, accept: g.Any } : { protocol: D.protocol || "https", url: D.url, accept: D.accept || g.Any };
      }
      var _ = "GET", S = "POST";
      function T(D, A) {
        return Promise.all(A.map(function(M) {
          return D.get(M, function() {
            return Promise.resolve(k(M));
          });
        })).then(function(M) {
          var F = M.filter(function(re) {
            return function(J) {
              return J.status === w || Date.now() - J.lastUpdate > 12e4;
            }(re);
          }), q = M.filter(function(re) {
            return function(J) {
              return J.status === h && Date.now() - J.lastUpdate <= 12e4;
            }(re);
          }), ee = [].concat(s(F), s(q));
          return { getTimeout: function(re, J) {
            return (q.length === 0 && re === 0 ? 1 : q.length + 3 + re) * J;
          }, statelessHosts: ee.length > 0 ? ee.map(function(re) {
            return b(re);
          }) : A };
        });
      }
      function X(D, A, M, F) {
        var q = [], ee = function(Ie, Xe) {
          if (!(Ie.method === _ || Ie.data === void 0 && Xe.data === void 0)) {
            var ke = Array.isArray(Ie.data) ? Ie.data : r(r({}, Ie.data), Xe.data);
            return JSON.stringify(ke);
          }
        }(M, F), re = function(Ie, Xe) {
          var ke = r(r({}, Ie.headers), Xe.headers), We = {};
          return Object.keys(ke).forEach(function($t) {
            var ct = ke[$t];
            We[$t.toLowerCase()] = ct;
          }), We;
        }(D, F), J = M.method, ve = M.method !== _ ? {} : r(r({}, M.data), F.data), Ee = r(r(r({ "x-algolia-agent": D.userAgent.value }, D.queryParameters), ve), F.queryParameters), be = 0, Ne = function Ie(Xe, ke) {
          var We = Xe.pop();
          if (We === void 0) throw { name: "RetryError", message: "Unreachable hosts - your application id may be incorrect. If the error persists, please reach out to the Algolia Support team: https://alg.li/support .", transporterStackTrace: x(q) };
          var $t = { data: ee, headers: re, method: J, url: V(We, M.path, Ee), connectTimeout: ke(be, D.timeouts.connect), responseTimeout: ke(be, F.timeout) }, ct = function(Be) {
            var ye = { request: $t, response: Be, host: We, triesLeft: Xe.length };
            return q.push(ye), ye;
          }, Xn = { onSuccess: function(Be) {
            return function(ye) {
              try {
                return JSON.parse(ye.content);
              } catch (wt) {
                throw /* @__PURE__ */ function(Bt, cn) {
                  return { name: "DeserializationError", message: Bt, response: cn };
                }(wt.message, ye);
              }
            }(Be);
          }, onRetry: function(Be) {
            var ye = ct(Be);
            return Be.isTimedOut && be++, Promise.all([D.logger.info("Retryable failure", I(ye)), D.hostsCache.set(We, k(We, Be.isTimedOut ? h : y))]).then(function() {
              return Ie(Xe, ke);
            });
          }, onFail: function(Be) {
            throw ct(Be), function(ye, wt) {
              var Bt = ye.content, cn = ye.status, Tn = Bt;
              try {
                Tn = JSON.parse(Bt).message;
              } catch {
              }
              return /* @__PURE__ */ function(Jn, Lo, jl) {
                return { name: "ApiError", message: Jn, status: Lo, transporterStackTrace: jl };
              }(Tn, cn, wt);
            }(Be, x(q));
          } };
          return D.requester.send($t).then(function(Be) {
            return function(ye, wt) {
              return function(Bt) {
                var cn = Bt.status;
                return Bt.isTimedOut || function(Tn) {
                  var Jn = Tn.isTimedOut, Lo = Tn.status;
                  return !Jn && ~~Lo == 0;
                }(Bt) || ~~(cn / 100) != 2 && ~~(cn / 100) != 4;
              }(ye) ? wt.onRetry(ye) : ~~(ye.status / 100) == 2 ? wt.onSuccess(ye) : wt.onFail(ye);
            }(Be, Xn);
          });
        };
        return T(D.hostsCache, A).then(function(Ie) {
          return Ne(s(Ie.statelessHosts).reverse(), Ie.getTimeout);
        });
      }
      function P(D) {
        var A = { value: "Algolia for JavaScript (".concat(D, ")"), add: function(M) {
          var F = "; ".concat(M.segment).concat(M.version !== void 0 ? " (".concat(M.version, ")") : "");
          return A.value.indexOf(F) === -1 && (A.value = "".concat(A.value).concat(F)), A;
        } };
        return A;
      }
      function V(D, A, M) {
        var F = K(M), q = "".concat(D.protocol, "://").concat(D.url, "/").concat(A.charAt(0) === "/" ? A.substr(1) : A);
        return F.length && (q += "?".concat(F)), q;
      }
      function K(D) {
        return Object.keys(D).map(function(A) {
          return f("%s=%s", A, (M = D[A], Object.prototype.toString.call(M) === "[object Object]" || Object.prototype.toString.call(M) === "[object Array]" ? JSON.stringify(D[A]) : D[A]));
          var M;
        }).join("&");
      }
      function x(D) {
        return D.map(function(A) {
          return I(A);
        });
      }
      function I(D) {
        var A = D.request.headers["x-algolia-api-key"] ? { "x-algolia-api-key": "*****" } : {};
        return r(r({}, D), {}, { request: r(r({}, D.request), {}, { headers: r(r({}, D.request.headers), A) }) });
      }
      var B = function(D) {
        var A = D.appId, M = /* @__PURE__ */ function(q, ee, re) {
          var J = { "x-algolia-api-key": re, "x-algolia-application-id": ee };
          return { headers: function() {
            return q === p.WithinHeaders ? J : {};
          }, queryParameters: function() {
            return q === p.WithinQueryParameters ? J : {};
          } };
        }(D.authMode !== void 0 ? D.authMode : p.WithinHeaders, A, D.apiKey), F = function(q) {
          var ee = q.hostsCache, re = q.logger, J = q.requester, ve = q.requestsCache, Ee = q.responsesCache, be = q.timeouts, Ne = q.userAgent, Ie = q.hosts, Xe = q.queryParameters, ke = { hostsCache: ee, logger: re, requester: J, requestsCache: ve, responsesCache: Ee, timeouts: be, userAgent: Ne, headers: q.headers, queryParameters: Xe, hosts: Ie.map(function(We) {
            return b(We);
          }), read: function(We, $t) {
            var ct = v($t, ke.timeouts.read), Xn = function() {
              return X(ke, ke.hosts.filter(function(ye) {
                return (ye.accept & g.Read) != 0;
              }), We, ct);
            };
            if ((ct.cacheable !== void 0 ? ct.cacheable : We.cacheable) !== !0) return Xn();
            var Be = { request: We, mappedRequestOptions: ct, transporter: { queryParameters: ke.queryParameters, headers: ke.headers } };
            return ke.responsesCache.get(Be, function() {
              return ke.requestsCache.get(Be, function() {
                return ke.requestsCache.set(Be, Xn()).then(function(ye) {
                  return Promise.all([ke.requestsCache.delete(Be), ye]);
                }, function(ye) {
                  return Promise.all([ke.requestsCache.delete(Be), Promise.reject(ye)]);
                }).then(function(ye) {
                  var wt = l(ye, 2);
                  return wt[0], wt[1];
                });
              });
            }, { miss: function(ye) {
              return ke.responsesCache.set(Be, ye);
            } });
          }, write: function(We, $t) {
            return X(ke, ke.hosts.filter(function(ct) {
              return (ct.accept & g.Write) != 0;
            }), We, v($t, ke.timeouts.write));
          } };
          return ke;
        }(r(r({ hosts: [{ url: "".concat(A, "-dsn.algolia.net"), accept: g.Read }, { url: "".concat(A, ".algolia.net"), accept: g.Write }].concat(d([{ url: "".concat(A, "-1.algolianet.com") }, { url: "".concat(A, "-2.algolianet.com") }, { url: "".concat(A, "-3.algolianet.com") }])) }, D), {}, { headers: r(r(r({}, M.headers()), { "content-type": "application/x-www-form-urlencoded" }), D.headers), queryParameters: r(r({}, M.queryParameters()), D.queryParameters) }));
        return m({ transporter: F, appId: A, addAlgoliaAgent: function(q, ee) {
          F.userAgent.add({ segment: q, version: ee });
        }, clearCache: function() {
          return Promise.all([F.requestsCache.clear(), F.responsesCache.clear()]).then(function() {
          });
        } }, D.methods);
      }, Y = function(D) {
        return function(A, M) {
          return A.method === _ ? D.transporter.read(A, M) : D.transporter.write(A, M);
        };
      }, ne = function(D) {
        return function(A) {
          var M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, F = { transporter: D.transporter, appId: D.appId, indexName: A };
          return m(F, M.methods);
        };
      }, fe = function(D) {
        return function(A, M) {
          var F = A.map(function(q) {
            return r(r({}, q), {}, { params: K(q.params || {}) });
          });
          return D.transporter.read({ method: S, path: "1/indexes/*/queries", data: { requests: F }, cacheable: !0 }, M);
        };
      }, oe = function(D) {
        return function(A, M) {
          return Promise.all(A.map(function(F) {
            var q = F.params, ee = q.facetName, re = q.facetQuery, J = a(q, ["facetName", "facetQuery"]);
            return ne(D)(F.indexName, { methods: { searchForFacetValues: Fe } }).searchForFacetValues(ee, re, r(r({}, M), J));
          }));
        };
      }, Oe = function(D) {
        return function(A, M, F) {
          return D.transporter.read({ method: S, path: f("1/answers/%s/prediction", D.indexName), data: { query: A, queryLanguages: M }, cacheable: !0 }, F);
        };
      }, Ge = function(D) {
        return function(A, M) {
          return D.transporter.read({ method: S, path: f("1/indexes/%s/query", D.indexName), data: { query: A }, cacheable: !0 }, M);
        };
      }, Fe = function(D) {
        return function(A, M, F) {
          return D.transporter.read({ method: S, path: f("1/indexes/%s/facets/%s/query", D.indexName, A), data: { facetQuery: M }, cacheable: !0 }, F);
        };
      }, Xt = 1, yt = 2, Vl = 3, zl = function(D) {
        return function(A, M) {
          var F = A.map(function(q) {
            return r(r({}, q), {}, { threshold: q.threshold || 0 });
          });
          return D.transporter.read({ method: S, path: "1/indexes/*/recommendations", data: { requests: F }, cacheable: !0 }, M);
        };
      };
      function Ur(D, A, M) {
        var F, q = { appId: D, apiKey: A, timeouts: { connect: 1, read: 2, write: 30 }, requester: { send: function(ee) {
          return new Promise(function(re) {
            var J = new XMLHttpRequest();
            J.open(ee.method, ee.url, !0), Object.keys(ee.headers).forEach(function(Ne) {
              return J.setRequestHeader(Ne, ee.headers[Ne]);
            });
            var ve, Ee = function(Ne, Ie) {
              return setTimeout(function() {
                J.abort(), re({ status: 0, content: Ie, isTimedOut: !0 });
              }, 1e3 * Ne);
            }, be = Ee(ee.connectTimeout, "Connection timeout");
            J.onreadystatechange = function() {
              J.readyState > J.OPENED && ve === void 0 && (clearTimeout(be), ve = Ee(ee.responseTimeout, "Socket timeout"));
            }, J.onerror = function() {
              J.status === 0 && (clearTimeout(be), clearTimeout(ve), re({ content: J.responseText || "Network request failed", status: J.status, isTimedOut: !1 }));
            }, J.onload = function() {
              clearTimeout(be), clearTimeout(ve), re({ content: J.responseText, status: J.status, isTimedOut: !1 });
            }, J.send(ee.data);
          });
        } }, logger: (F = Vl, { debug: function(ee, re) {
          return Xt >= F && console.debug(ee, re), Promise.resolve();
        }, info: function(ee, re) {
          return yt >= F && console.info(ee, re), Promise.resolve();
        }, error: function(ee, re) {
          return console.error(ee, re), Promise.resolve();
        } }), responsesCache: c(), requestsCache: c({ serializable: !1 }), hostsCache: u({ caches: [i({ key: "".concat("4.25.0", "-").concat(D) }), c()] }), userAgent: P("4.25.0").add({ segment: "Browser", version: "lite" }), authMode: p.WithinQueryParameters };
        return B(r(r(r({}, q), M), {}, { methods: { search: fe, searchForFacetValues: oe, multipleQueries: fe, multipleSearchForFacetValues: oe, customRequest: Y, initIndex: function(ee) {
          return function(re) {
            return ne(ee)(re, { methods: { search: Ge, searchForFacetValues: Fe, findAnswers: Oe } });
          };
        }, getRecommendations: zl } }));
      }
      return Ur.version = "4.25.0", Ur;
    });
  }(fo)), fo.exports;
}
var gf = /* @__PURE__ */ hf();
const bf = /* @__PURE__ */ mf(gf);
class rp {
  constructor(n) {
    Bo(this, "searchIndex");
    const t = bf(n.appId, n.searchKey);
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
class ap {
  constructor(n) {
    Bo(this, "items");
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
  Cf as Alert,
  _f as AlertAction,
  Of as AlertDescription,
  Ef as AlertIcon,
  Sf as AlertTitle,
  rp as AlgoliaSearchStrategy,
  Jf as AnnouncementsDrawer,
  ns as Badge,
  Xf as BreadcrumbEllipsis,
  Uf as BreadcrumbItem,
  qf as BreadcrumbLink,
  Wf as BreadcrumbList,
  Kf as BreadcrumbPage,
  Yf as BreadcrumbSeparator,
  Gf as Breadcrumbs,
  ot as Button,
  Tf as CodeBlock,
  Nu as ColorPicker,
  Qf as ColumnManager,
  Go as Combobox,
  Zf as CommandPalette,
  ep as ConfirmationDialog,
  zu as Dropdown,
  Hu as DropdownContent,
  Gu as DropdownItem,
  $f as DropdownLabel,
  Pf as DropdownSeparator,
  If as DropdownSub,
  Af as DropdownSubContent,
  Rf as DropdownSubTrigger,
  ju as DropdownTrigger,
  Wo as EmptyState,
  tp as FluentQueryBuilder,
  Da as Input,
  ap as LocalSearchStrategy,
  Mf as Modal,
  Ff as ModalBody,
  tc as ModalClose,
  Zu as ModalContent,
  Nf as ModalFooter,
  Lf as ModalHeader,
  Bf as ModalTitle,
  ac as Popover,
  np as TabsNav,
  Hf as ThemeToggle,
  Vf as Tooltip,
  jf as TooltipContent,
  zf as TooltipTrigger,
  Ol as Typeahead,
  op as useConfirmationDialog
};
//# sourceMappingURL=pickle-jar-ui.es.js.map
