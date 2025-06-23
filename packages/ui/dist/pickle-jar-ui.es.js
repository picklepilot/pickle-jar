var ql = Object.defineProperty;
var Kl = (e, n, t) => n in e ? ql(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var Vo = (e, n, t) => Kl(e, typeof n != "symbol" ? n + "" : n, t);
import { defineComponent as j, computed as _, provide as ke, createElementBlock as A, openBlock as S, normalizeClass as V, renderSlot as U, createElementVNode as T, createBlock as fe, withCtx as G, createCommentVNode as le, inject as me, ref as k, unref as I, h as ue, watch as se, onMounted as ie, useSlots as Yl, Fragment as ge, toDisplayString as he, shallowRef as _o, getCurrentScope as Xl, onScopeDispose as Ca, shallowReadonly as fn, triggerRef as qr, onUnmounted as be, watchEffect as Le, cloneVNode as Sa, nextTick as Fe, toRaw as Vt, reactive as Wn, getCurrentInstance as _a, Teleport as Eo, createVNode as q, renderList as We, withModifiers as ln, withKeys as Ea, Transition as it, normalizeStyle as qt, mergeProps as Qe, normalizeProps as at, withDirectives as Wt, vShow as Ut, guardReactiveProps as vt, resolveDynamicComponent as Oa, createTextVNode as Gt, useAttrs as Jl, createSlots as Ql, resolveComponent as Zl } from "vue";
import wt from "clsx";
import { twMerge as $t } from "tailwind-merge";
const es = /* @__PURE__ */ j({
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
      return $t(wt(l));
    }
    const t = e, o = _(() => ({
      "bg-sky-50": t.variant === "info" || t.variant === "processing",
      "bg-yellow-50": t.variant === "warning",
      "bg-red-50": t.variant === "error",
      "bg-green-50": t.variant === "success",
      "bg-zinc-50": t.variant === "muted"
    })), r = _(() => ({
      "border-sky-200": t.variant === "info" || t.variant === "processing",
      "border-yellow-200": t.variant === "warning",
      "border-red-200": t.variant === "error",
      "border-green-200": t.variant === "success",
      "border-zinc-200": t.variant === "muted"
    })), a = _(() => ({
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
    }), (l, s) => (S(), A("div", {
      class: V(
        n(
          l.flush ? "rounded-0" : "rounded-md",
          "relative w-full rounded-lg border border-ring px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current bg-card text-card-foreground",
          l.theme.alert
        )
      )
    }, [
      U(l.$slots, "default")
    ], 2));
  }
}), ts = /* @__PURE__ */ j({
  __name: "AlertClose",
  emits: ["close"],
  setup(e, { emit: n }) {
    return (t, o) => (S(), A("button", {
      onClick: o[0] || (o[0] = (r) => t.$emit("close", !1)),
      class: "absolute right-4 top-4 text-zinc-400 hover:text-zinc-800"
    }, o[1] || (o[1] = [
      T("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "20",
        fill: "currentColor",
        class: "bi bi-x h-6 w-6",
        viewBox: "0 0 16 16"
      }, [
        T("path", { d: "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" })
      ], -1)
    ])));
  }
}), Tf = /* @__PURE__ */ j({
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
    return (t, o) => (S(), fe(es, {
      flush: t.flush,
      variant: t.variant,
      theme: t.theme
    }, {
      default: G(() => [
        U(t.$slots, "default"),
        t.dismissable ? (S(), fe(ts, {
          key: 0,
          onClose: o[0] || (o[0] = (r) => t.$emit("close", r))
        })) : le("", !0)
      ]),
      _: 3
    }, 8, ["flush", "variant", "theme"]));
  }
}), ns = { class: "col-start-2 line-clamp-1 min-h-4 font-medium" }, $f = /* @__PURE__ */ j({
  __name: "AlertTitle",
  setup(e) {
    return (n, t) => (S(), A("div", ns, [
      U(n.$slots, "default")
    ]));
  }
}), os = { class: "text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed" }, Df = /* @__PURE__ */ j({
  __name: "AlertDescription",
  setup(e) {
    return (n, t) => (S(), A("div", os, [
      U(n.$slots, "default")
    ]));
  }
}), rs = { class: "shrink-0" }, Pf = /* @__PURE__ */ j({
  __name: "AlertIcon",
  setup(e) {
    return (n, t) => (S(), A("div", rs, [
      U(n.$slots, "default")
    ]));
  }
}), as = { class: "flex items-center" }, If = /* @__PURE__ */ j({
  __name: "AlertAction",
  setup(e) {
    return (n, t) => (S(), A("div", as, [
      U(n.$slots, "default")
    ]));
  }
}), ls = /* @__PURE__ */ j({
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
      return $t(wt(t));
    }
    return (t, o) => (S(), A("span", {
      class: V(
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
      U(t.$slots, "default")
    ], 2));
  }
});
function ss(e, n) {
  const t = this;
  let o;
  return function(...r) {
    clearTimeout(o), o = setTimeout(() => {
      e.apply(t, r);
    }, n);
  };
}
function ae(...e) {
  return $t(wt(e));
}
function No(...e) {
  return e.join(" ");
}
No(
  "relative rounded-lg border border-border rounded-md hover:bg-accent/50 shadow-xs focus-within:outline-none focus-within:ring-3 focus-within:ring-ring/40 transition-[box-shadow,color] flex items-start flex-wrap gap-1 p-1 flex-1 min-w-[120px] border-0 bg-transparent pl-2.5 py-0.5 pr-8 text-sm truncate ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50 absolute inset-y-0 right-0 items-center pr-2 text-muted-foreground size-4 text-inherit transition duration-200 ease-out translate-y-1 opacity-0 translate-y-0 opacity-100 duration-150 ease-in fixed left-0 z-10 overflow-x-hidden overflow-y-auto bg-popover p-3 text-base shadow-lg border focus:outline-hidden sm:text-sm border-t border-border px-2 first:border-t-0 py-2 first:pt-0 last:pb-0 font-medium -mx-2.5 cursor-pointer hover:bg-accent rounded-md px-2 py-1 flex w-full truncate bg-accent opacity-50 pointer-events-none"
), No(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 bg-destructive text-destructive-foreground hover:bg-destructive/90 border border-border bg-background hover:bg-accent hover:text-accent-foreground bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:bg-accent hover:text-accent-foreground text-primary underline-offset-4 hover:underline"
), No(
  "w-full overflow-hidden h-full border border-border bg-background rounded-lg sm:min-w-60 flex flex-col md:flex-row overflow-y-auto p-3 mb-4 last:mb-0 sortable-drag flex min-w-px grow items-center space-x-2 text-base font-semibold shrink-0 text-sm h-5 w-5 group flex w-full hover:bg-accent/50 rounded-md items-center gap-2 [&.selected]:bg-accent/50 drag-handle shrink-0 text-muted-foreground/70 hover:text-foreground rounded-sm hover:bg-black/5 size-3.5 ml-auto flex items-center space-x-1 p-1 size-4 sticky bottom-0 z-2 gap-2 p-3 bg-background/90 backdrop-blur-sm flex -space-x-px transition duration-200 ease-out translate-y-1 opacity-0 translate-y-0 opacity-100 duration-150 ease-in"
);
const is = ["aria-disabled", "aria-busy", "aria-expanded", "disabled"], us = {
  key: 0,
  "aria-hidden": "true"
}, cs = { key: 0 }, ds = /* @__PURE__ */ j({
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
    const t = n, o = me("dropdown"), r = k(), a = _(() => {
      var u, i, c, d;
      return (u = o == null ? void 0 : o.triggerRef) == null || u.value, ((c = (i = o == null ? void 0 : o.triggerRef) == null ? void 0 : i.value) == null ? void 0 : c.querySelector("button")) === r.value && ((d = o == null ? void 0 : o.isOpen) == null ? void 0 : d.value) === !0;
    });
    function l(s) {
      s.preventDefault(), t("click", s);
    }
    return (s, u) => (S(), A("button", {
      ref_key: "buttonRef",
      ref: r,
      onClick: l,
      class: V(
        I(ae)(
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
      U(s.$slots, "default", {}, void 0, !0),
      s.processing ? (S(), A("span", us, [
        s.$slots.processing ? (S(), A("span", cs, [
          U(s.$slots, "processing", {}, void 0, !0)
        ])) : le("", !0)
      ])) : le("", !0)
    ], 10, is));
  }
}), Cn = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [o, r] of n)
    t[o] = r;
  return t;
}, ot = /* @__PURE__ */ Cn(ds, [["__scopeId", "data-v-727def13"]]);
/**
 * @license lucide-vue-next v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kr = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), fs = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (n, t, o) => o ? o.toUpperCase() : t.toLowerCase()
), ps = (e) => {
  const n = fs(e);
  return n.charAt(0).toUpperCase() + n.slice(1);
}, ms = (...e) => e.filter((n, t, o) => !!n && n.trim() !== "" && o.indexOf(n) === t).join(" ").trim();
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
const vs = ({ size: e, strokeWidth: n = 2, absoluteStrokeWidth: t, color: o, iconNode: r, name: a, class: l, ...s }, { slots: u }) => ue(
  "svg",
  {
    ...Qn,
    width: e || Qn.width,
    height: e || Qn.height,
    stroke: o || Qn.stroke,
    "stroke-width": t ? Number(n) * 24 / Number(e) : n,
    class: ms(
      "lucide",
      ...a ? [`lucide-${Kr(ps(a))}-icon`, `lucide-${Kr(a)}`] : ["lucide-icon"]
    ),
    ...s
  },
  [...r.map((i) => ue(...i)), ...u.default ? [u.default()] : []]
);
/**
 * @license lucide-vue-next v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jt = (e, n) => (t, { slots: o }) => ue(
  vs,
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
const hs = Jt("check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-vue-next v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Oo = Jt("chevron-down", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-vue-next v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gs = Jt("clipboard", [
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
const bs = Jt("ellipsis-vertical", [
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
const ys = Jt("grip-horizontal", [
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
const ws = Jt("loader", [
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
const xs = Jt("trash-2", [
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
const gr = Jt("x", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
function Ta() {
  const e = k({
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
  return se(
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
    isDark: _(() => e.value.isDark),
    themeClass: _(() => e.value.themeClass),
    toggleTheme: t,
    setTheme: o,
    updateThemeState: n
  };
}
const ks = { key: 2 }, Cs = ["innerHTML"], Ss = { class: "text-sm" }, _s = /* @__PURE__ */ j({
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
      const C = h.toLowerCase();
      return n[C] || C;
    }, o = /* @__PURE__ */ new Map();
    function r(...h) {
      return $t(wt(h));
    }
    const a = e, l = Yl(), s = k("demo"), u = k(""), i = k(!0), c = k(""), d = k(!1), m = k(null), f = _(() => !!l.demo), { isDark: p } = Ta(), v = _(() => a.autoTheme ? p.value ? a.darkTheme : a.lightTheme : a.shikiTheme), g = async () => {
      try {
        i.value = !0, c.value = "";
        const h = t(a.language), C = `${h}-${v.value}`;
        if (o.has(C)) {
          m.value = o.get(C), await w();
          return;
        }
        const { getSingletonHighlighter: y } = await import("shiki");
        m.value = await y({
          themes: [v.value],
          langs: [h]
        }), o.set(C, m.value), await w();
      } catch (h) {
        console.error("Failed to initialize highlighter:", h), c.value = h instanceof Error ? h.message : "Failed to initialize syntax highlighter";
      } finally {
        i.value = !1;
      }
    }, w = async () => {
      var h;
      if (m.value)
        try {
          const C = t(a.language), y = {
            lang: C,
            theme: v.value,
            colorReplacements: {
              "#24292e": "#171717",
              "#ffffff": "#f5f5f5",
              "#fff": "#f5f5f5"
            }
          }, $ = {
            ...y,
            ...a.codeToHtmlOptions,
            // Ensure lang and theme are always set correctly
            lang: C,
            theme: v.value,
            // Merge colorReplacements if provided
            colorReplacements: {
              ...y.colorReplacements,
              ...(h = a.codeToHtmlOptions) == null ? void 0 : h.colorReplacements
            }
          };
          u.value = m.value.codeToHtml(
            a.code,
            $
          );
        } catch (C) {
          console.error("Failed to highlight code:", C), c.value = C instanceof Error ? C.message : "Failed to highlight code";
        }
    }, b = async () => {
      try {
        await navigator.clipboard.writeText(a.code), d.value = !0, setTimeout(() => {
          d.value = !1;
        }, 2e3);
      } catch (h) {
        console.error("Failed to copy to clipboard:", h);
      }
    };
    return se(
      [
        () => a.code,
        () => a.language,
        v,
        () => a.codeToHtmlOptions
      ],
      async (h, C) => {
        h[1] !== (C == null ? void 0 : C[1]) ? await g() : await w();
      },
      {
        immediate: !0
      }
    ), ie(g), (h, C) => (S(), A("div", {
      class: V(
        r(
          "relative overflow-hidden rounded-lg border border-border bg-muted/50",
          h.customTheme.container
        )
      )
    }, [
      h.showHeader ? (S(), A("div", {
        key: 0,
        class: V(
          r(
            "flex border-b border-border bg-muted/30 h-10 pr-4",
            h.customTheme.tabNav
          )
        )
      }, [
        f.value ? (S(), A(ge, { key: 0 }, [
          T("button", {
            onClick: C[0] || (C[0] = (y) => s.value = "demo"),
            class: V(
              r(
                "px-4 py-2 text-sm font-medium transition-colors",
                s.value === "demo" ? "bg-background text-foreground border-b-2 border-primary" : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              )
            )
          }, " Demo ", 2),
          T("button", {
            onClick: C[1] || (C[1] = (y) => s.value = "code"),
            class: V(
              r(
                "px-4 py-2 text-sm font-medium transition-colors",
                s.value === "code" ? "bg-background text-foreground border-b-2 border-primary" : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              )
            )
          }, " Code ", 2)
        ], 64)) : le("", !0),
        T("span", {
          class: V(
            r(
              "ml-auto self-center font-mono text-muted-foreground capitalize text-sm",
              h.customTheme.languageLabel
            )
          )
        }, he(h.language), 3)
      ], 2)) : le("", !0),
      f.value && s.value === "demo" ? (S(), A("div", {
        key: 1,
        class: V(r("p-4", h.customTheme.demo))
      }, [
        U(h.$slots, "demo", {}, void 0, !0)
      ], 2)) : le("", !0),
      !f.value || s.value === "code" ? (S(), A("div", ks, [
        T("div", {
          class: V(r("relative", h.customTheme.content))
        }, [
          h.showCopyButton ? (S(), fe(ot, {
            key: 0,
            onClick: b,
            class: V(
              r(
                "absolute right-2 top-2 z-10 inline-flex items-center gap-1 rounded bg-transparent size-9 px-2 py-1 text-xs font-medium text-muted-foreground transition-colors hover:bg-transparent hover:text-accent-foreground",
                h.customTheme.copyButton
              )
            ),
            "aria-label": h.copyButtonLabel,
            variant: "ghost",
            size: "sm"
          }, {
            default: G(() => [
              d.value ? (S(), fe(I(hs), {
                key: 0,
                class: "size-4 text-green-500 shrink-0"
              })) : (S(), fe(I(gs), {
                key: 1,
                class: "size-4 shrink-0"
              }))
            ]),
            _: 1
          }, 8, ["class", "aria-label"])) : le("", !0),
          T("div", {
            class: V(r("overflow-auto max-h-96", h.customTheme.content))
          }, [
            i.value ? (S(), A("div", {
              key: 1,
              class: V(
                r(
                  "flex items-center justify-center py-8 text-muted-foreground",
                  h.customTheme.loading
                )
              )
            }, C[2] || (C[2] = [
              T("span", { class: "text-sm" }, "Loading syntax highlighting...", -1)
            ]), 2)) : (S(), A("div", {
              key: 0,
              class: V(
                r(
                  "font-mono text-sm leading-relaxed [&>pre]:p-4",
                  h.customTheme.pre
                )
              ),
              innerHTML: u.value
            }, null, 10, Cs)),
            c.value ? (S(), A("div", {
              key: 2,
              class: V(
                r(
                  "flex items-center justify-center py-8 text-destructive",
                  h.customTheme.error
                )
              )
            }, [
              T("span", Ss, he(c.value), 1)
            ], 2)) : le("", !0)
          ], 2)
        ], 2)
      ])) : le("", !0)
    ], 2));
  }
}), Rf = /* @__PURE__ */ Cn(_s, [["__scopeId", "data-v-50694f4e"]]), Es = ["disabled", "type", "placeholder", "value"], $a = /* @__PURE__ */ j({
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
      return S(), A("input", {
        disabled: r.disabled,
        type: r.type,
        placeholder: r.placeholder,
        value: r.modelValue ?? r.value,
        onInput: o,
        class: V(
          I(ae)(
            "flex w-full rounded-md border border-ring bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground/70 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40 transition-[box-shadow,color] disabled:cursor-not-allowed disabled:opacity-50",
            ((l = r.theme) == null ? void 0 : l.input) || ""
          )
        )
      }, null, 42, Es);
    };
  }
}), Os = ["top", "right", "bottom", "left"], Yr = ["start", "end"], Xr = /* @__PURE__ */ Os.reduce((e, n) => e.concat(n, n + "-" + Yr[0], n + "-" + Yr[1]), []), Kt = Math.min, nt = Math.max, po = Math.round, Zn = Math.floor, St = (e) => ({
  x: e,
  y: e
}), Ts = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, $s = {
  start: "end",
  end: "start"
};
function rr(e, n, t) {
  return nt(e, Kt(n, t));
}
function At(e, n) {
  return typeof e == "function" ? e(n) : e;
}
function gt(e) {
  return e.split("-")[0];
}
function ht(e) {
  return e.split("-")[1];
}
function br(e) {
  return e === "x" ? "y" : "x";
}
function yr(e) {
  return e === "y" ? "height" : "width";
}
function Ct(e) {
  return ["top", "bottom"].includes(gt(e)) ? "y" : "x";
}
function wr(e) {
  return br(Ct(e));
}
function Da(e, n, t) {
  t === void 0 && (t = !1);
  const o = ht(e), r = wr(e), a = yr(r);
  let l = r === "x" ? o === (t ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return n.reference[a] > n.floating[a] && (l = vo(l)), [l, vo(l)];
}
function Ds(e) {
  const n = vo(e);
  return [mo(e), n, mo(n)];
}
function mo(e) {
  return e.replace(/start|end/g, (n) => $s[n]);
}
function Ps(e, n, t) {
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
function Is(e, n, t, o) {
  const r = ht(e);
  let a = Ps(gt(e), t === "start", o);
  return r && (a = a.map((l) => l + "-" + r), n && (a = a.concat(a.map(mo)))), a;
}
function vo(e) {
  return e.replace(/left|right|bottom|top/g, (n) => Ts[n]);
}
function Rs(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Pa(e) {
  return typeof e != "number" ? Rs(e) : {
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
  const a = Ct(n), l = wr(n), s = yr(l), u = gt(n), i = a === "y", c = o.x + o.width / 2 - r.width / 2, d = o.y + o.height / 2 - r.height / 2, m = o[s] / 2 - r[s] / 2;
  let f;
  switch (u) {
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
  switch (ht(n)) {
    case "start":
      f[l] -= m * (t && i ? -1 : 1);
      break;
    case "end":
      f[l] += m * (t && i ? -1 : 1);
      break;
  }
  return f;
}
const As = async (e, n, t) => {
  const {
    placement: o = "bottom",
    strategy: r = "absolute",
    middleware: a = [],
    platform: l
  } = t, s = a.filter(Boolean), u = await (l.isRTL == null ? void 0 : l.isRTL(n));
  let i = await l.getElementRects({
    reference: e,
    floating: n,
    strategy: r
  }), {
    x: c,
    y: d
  } = Jr(i, o, u), m = o, f = {}, p = 0;
  for (let v = 0; v < s.length; v++) {
    const {
      name: g,
      fn: w
    } = s[v], {
      x: b,
      y: h,
      data: C,
      reset: y
    } = await w({
      x: c,
      y: d,
      initialPlacement: o,
      placement: m,
      strategy: r,
      middlewareData: f,
      rects: i,
      platform: l,
      elements: {
        reference: e,
        floating: n
      }
    });
    c = b ?? c, d = h ?? d, f = {
      ...f,
      [g]: {
        ...f[g],
        ...C
      }
    }, y && p <= 50 && (p++, typeof y == "object" && (y.placement && (m = y.placement), y.rects && (i = y.rects === !0 ? await l.getElementRects({
      reference: e,
      floating: n,
      strategy: r
    }) : y.rects), {
      x: c,
      y: d
    } = Jr(i, m, u)), v = -1);
  }
  return {
    x: c,
    y: d,
    placement: m,
    strategy: r,
    middlewareData: f
  };
};
async function To(e, n) {
  var t;
  n === void 0 && (n = {});
  const {
    x: o,
    y: r,
    platform: a,
    rects: l,
    elements: s,
    strategy: u
  } = e, {
    boundary: i = "clippingAncestors",
    rootBoundary: c = "viewport",
    elementContext: d = "floating",
    altBoundary: m = !1,
    padding: f = 0
  } = At(n, e), p = Pa(f), g = s[m ? d === "floating" ? "reference" : "floating" : d], w = ho(await a.getClippingRect({
    element: (t = await (a.isElement == null ? void 0 : a.isElement(g))) == null || t ? g : g.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(s.floating)),
    boundary: i,
    rootBoundary: c,
    strategy: u
  })), b = d === "floating" ? {
    x: o,
    y: r,
    width: l.floating.width,
    height: l.floating.height
  } : l.reference, h = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(s.floating)), C = await (a.isElement == null ? void 0 : a.isElement(h)) ? await (a.getScale == null ? void 0 : a.getScale(h)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, y = ho(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: b,
    offsetParent: h,
    strategy: u
  }) : b);
  return {
    top: (w.top - y.top + p.top) / C.y,
    bottom: (y.bottom - w.bottom + p.bottom) / C.y,
    left: (w.left - y.left + p.left) / C.x,
    right: (y.right - w.right + p.right) / C.x
  };
}
const Ms = (e) => ({
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
      middlewareData: u
    } = n, {
      element: i,
      padding: c = 0
    } = At(e, n) || {};
    if (i == null)
      return {};
    const d = Pa(c), m = {
      x: t,
      y: o
    }, f = wr(r), p = yr(f), v = await l.getDimensions(i), g = f === "y", w = g ? "top" : "left", b = g ? "bottom" : "right", h = g ? "clientHeight" : "clientWidth", C = a.reference[p] + a.reference[f] - m[f] - a.floating[p], y = m[f] - a.reference[f], $ = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(i));
    let E = $ ? $[h] : 0;
    (!E || !await (l.isElement == null ? void 0 : l.isElement($))) && (E = s.floating[h] || a.floating[p]);
    const P = C / 2 - y / 2, X = E / 2 - v[p] / 2 - 1, O = Kt(d[w], X), F = Kt(d[b], X), H = O, x = E - v[p] - F, D = E / 2 - v[p] / 2 + P, L = rr(H, D, x), K = !u.arrow && ht(r) != null && D !== L && a.reference[p] / 2 - (D < H ? O : F) - v[p] / 2 < 0, Q = K ? D < H ? D - H : D - x : 0;
    return {
      [f]: m[f] + Q,
      data: {
        [f]: L,
        centerOffset: D - L - Q,
        ...K && {
          alignmentOffset: Q
        }
      },
      reset: K
    };
  }
});
function Ls(e, n, t) {
  return (e ? [...t.filter((r) => ht(r) === e), ...t.filter((r) => ht(r) !== e)] : t.filter((r) => gt(r) === r)).filter((r) => e ? ht(r) === e || (n ? mo(r) !== r : !1) : !0);
}
const Bs = function(e) {
  return e === void 0 && (e = {}), {
    name: "autoPlacement",
    options: e,
    async fn(n) {
      var t, o, r;
      const {
        rects: a,
        middlewareData: l,
        placement: s,
        platform: u,
        elements: i
      } = n, {
        crossAxis: c = !1,
        alignment: d,
        allowedPlacements: m = Xr,
        autoAlignment: f = !0,
        ...p
      } = At(e, n), v = d !== void 0 || m === Xr ? Ls(d || null, f, m) : m, g = await To(n, p), w = ((t = l.autoPlacement) == null ? void 0 : t.index) || 0, b = v[w];
      if (b == null)
        return {};
      const h = Da(b, a, await (u.isRTL == null ? void 0 : u.isRTL(i.floating)));
      if (s !== b)
        return {
          reset: {
            placement: v[0]
          }
        };
      const C = [g[gt(b)], g[h[0]], g[h[1]]], y = [...((o = l.autoPlacement) == null ? void 0 : o.overflows) || [], {
        placement: b,
        overflows: C
      }], $ = v[w + 1];
      if ($)
        return {
          data: {
            index: w + 1,
            overflows: y
          },
          reset: {
            placement: $
          }
        };
      const E = y.map((O) => {
        const F = ht(O.placement);
        return [O.placement, F && c ? (
          // Check along the mainAxis and main crossAxis side.
          O.overflows.slice(0, 2).reduce((H, x) => H + x, 0)
        ) : (
          // Check only the mainAxis.
          O.overflows[0]
        ), O.overflows];
      }).sort((O, F) => O[1] - F[1]), X = ((r = E.filter((O) => O[2].slice(
        0,
        // Aligned placements should not check their opposite crossAxis
        // side.
        ht(O[0]) ? 2 : 3
      ).every((F) => F <= 0))[0]) == null ? void 0 : r[0]) || E[0][0];
      return X !== s ? {
        data: {
          index: w + 1,
          overflows: y
        },
        reset: {
          placement: X
        }
      } : {};
    }
  };
}, Fs = function(e) {
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
        platform: u,
        elements: i
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
      const w = gt(r), b = Ct(s), h = gt(s) === s, C = await (u.isRTL == null ? void 0 : u.isRTL(i.floating)), y = m || (h || !v ? [vo(s)] : Ds(s)), $ = p !== "none";
      !m && $ && y.push(...Is(s, v, p, C));
      const E = [s, ...y], P = await To(n, g), X = [];
      let O = ((o = a.flip) == null ? void 0 : o.overflows) || [];
      if (c && X.push(P[w]), d) {
        const D = Da(r, l, C);
        X.push(P[D[0]], P[D[1]]);
      }
      if (O = [...O, {
        placement: r,
        overflows: X
      }], !X.every((D) => D <= 0)) {
        var F, H;
        const D = (((F = a.flip) == null ? void 0 : F.index) || 0) + 1, L = E[D];
        if (L && (!(d === "alignment" ? b !== Ct(L) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        O.every((pe) => pe.overflows[0] > 0 && Ct(pe.placement) === b)))
          return {
            data: {
              index: D,
              overflows: O
            },
            reset: {
              placement: L
            }
          };
        let K = (H = O.filter((Q) => Q.overflows[0] <= 0).sort((Q, pe) => Q.overflows[1] - pe.overflows[1])[0]) == null ? void 0 : H.placement;
        if (!K)
          switch (f) {
            case "bestFit": {
              var x;
              const Q = (x = O.filter((pe) => {
                if ($) {
                  const oe = Ct(pe.placement);
                  return oe === b || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  oe === "y";
                }
                return !0;
              }).map((pe) => [pe.placement, pe.overflows.filter((oe) => oe > 0).reduce((oe, _e) => oe + _e, 0)]).sort((pe, oe) => pe[1] - oe[1])[0]) == null ? void 0 : x[0];
              Q && (K = Q);
              break;
            }
            case "initialPlacement":
              K = s;
              break;
          }
        if (r !== K)
          return {
            reset: {
              placement: K
            }
          };
      }
      return {};
    }
  };
};
async function Vs(e, n) {
  const {
    placement: t,
    platform: o,
    elements: r
  } = e, a = await (o.isRTL == null ? void 0 : o.isRTL(r.floating)), l = gt(t), s = ht(t), u = Ct(t) === "y", i = ["left", "top"].includes(l) ? -1 : 1, c = a && u ? -1 : 1, d = At(n, e);
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
  return s && typeof p == "number" && (f = s === "end" ? p * -1 : p), u ? {
    x: f * c,
    y: m * i
  } : {
    x: m * i,
    y: f * c
  };
}
const Ns = function(e) {
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
      } = n, u = await Vs(n, e);
      return l === ((t = s.offset) == null ? void 0 : t.placement) && (o = s.arrow) != null && o.alignmentOffset ? {} : {
        x: r + u.x,
        y: a + u.y,
        data: {
          ...u,
          placement: l
        }
      };
    }
  };
}, zs = function(e) {
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
              y: b
            } = g;
            return {
              x: w,
              y: b
            };
          }
        },
        ...u
      } = At(e, n), i = {
        x: t,
        y: o
      }, c = await To(n, u), d = Ct(gt(r)), m = br(d);
      let f = i[m], p = i[d];
      if (a) {
        const g = m === "y" ? "top" : "left", w = m === "y" ? "bottom" : "right", b = f + c[g], h = f - c[w];
        f = rr(b, f, h);
      }
      if (l) {
        const g = d === "y" ? "top" : "left", w = d === "y" ? "bottom" : "right", b = p + c[g], h = p - c[w];
        p = rr(b, p, h);
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
}, js = function(e) {
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
        mainAxis: u = !0,
        crossAxis: i = !0
      } = At(e, n), c = {
        x: t,
        y: o
      }, d = Ct(r), m = br(d);
      let f = c[m], p = c[d];
      const v = At(s, n), g = typeof v == "number" ? {
        mainAxis: v,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...v
      };
      if (u) {
        const h = m === "y" ? "height" : "width", C = a.reference[m] - a.floating[h] + g.mainAxis, y = a.reference[m] + a.reference[h] - g.mainAxis;
        f < C ? f = C : f > y && (f = y);
      }
      if (i) {
        var w, b;
        const h = m === "y" ? "width" : "height", C = ["top", "left"].includes(gt(r)), y = a.reference[d] - a.floating[h] + (C && ((w = l.offset) == null ? void 0 : w[d]) || 0) + (C ? 0 : g.crossAxis), $ = a.reference[d] + a.reference[h] + (C ? 0 : ((b = l.offset) == null ? void 0 : b[d]) || 0) - (C ? g.crossAxis : 0);
        p < y ? p = y : p > $ && (p = $);
      }
      return {
        [m]: f,
        [d]: p
      };
    }
  };
}, Hs = function(e) {
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
        apply: u = () => {
        },
        ...i
      } = At(e, n), c = await To(n, i), d = gt(r), m = ht(r), f = Ct(r) === "y", {
        width: p,
        height: v
      } = a.floating;
      let g, w;
      d === "top" || d === "bottom" ? (g = d, w = m === (await (l.isRTL == null ? void 0 : l.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (w = d, g = m === "end" ? "top" : "bottom");
      const b = v - c.top - c.bottom, h = p - c.left - c.right, C = Kt(v - c[g], b), y = Kt(p - c[w], h), $ = !n.middlewareData.shift;
      let E = C, P = y;
      if ((t = n.middlewareData.shift) != null && t.enabled.x && (P = h), (o = n.middlewareData.shift) != null && o.enabled.y && (E = b), $ && !m) {
        const O = nt(c.left, 0), F = nt(c.right, 0), H = nt(c.top, 0), x = nt(c.bottom, 0);
        f ? P = p - 2 * (O !== 0 || F !== 0 ? O + F : nt(c.left, c.right)) : E = v - 2 * (H !== 0 || x !== 0 ? H + x : nt(c.top, c.bottom));
      }
      await u({
        ...n,
        availableWidth: P,
        availableHeight: E
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
function $o() {
  return typeof window < "u";
}
function un(e) {
  return xr(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function lt(e) {
  var n;
  return (e == null || (n = e.ownerDocument) == null ? void 0 : n.defaultView) || window;
}
function Dt(e) {
  var n;
  return (n = (xr(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : n.documentElement;
}
function xr(e) {
  return $o() ? e instanceof Node || e instanceof lt(e).Node : !1;
}
function bt(e) {
  return $o() ? e instanceof Element || e instanceof lt(e).Element : !1;
}
function Et(e) {
  return $o() ? e instanceof HTMLElement || e instanceof lt(e).HTMLElement : !1;
}
function Qr(e) {
  return !$o() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof lt(e).ShadowRoot;
}
function Un(e) {
  const {
    overflow: n,
    overflowX: t,
    overflowY: o,
    display: r
  } = yt(e);
  return /auto|scroll|overlay|hidden|clip/.test(n + o + t) && !["inline", "contents"].includes(r);
}
function Ws(e) {
  return ["table", "td", "th"].includes(un(e));
}
function Do(e) {
  return [":popover-open", ":modal"].some((n) => {
    try {
      return e.matches(n);
    } catch {
      return !1;
    }
  });
}
function kr(e) {
  const n = Cr(), t = bt(e) ? yt(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((o) => t[o] ? t[o] !== "none" : !1) || (t.containerType ? t.containerType !== "normal" : !1) || !n && (t.backdropFilter ? t.backdropFilter !== "none" : !1) || !n && (t.filter ? t.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((o) => (t.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (t.contain || "").includes(o));
}
function Us(e) {
  let n = Yt(e);
  for (; Et(n) && !xn(n); ) {
    if (kr(n))
      return n;
    if (Do(n))
      return null;
    n = Yt(n);
  }
  return null;
}
function Cr() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function xn(e) {
  return ["html", "body", "#document"].includes(un(e));
}
function yt(e) {
  return lt(e).getComputedStyle(e);
}
function Po(e) {
  return bt(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Yt(e) {
  if (un(e) === "html")
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
  const n = Yt(e);
  return xn(n) ? e.ownerDocument ? e.ownerDocument.body : e.body : Et(n) && Un(n) ? n : Ia(n);
}
function zn(e, n, t) {
  var o;
  n === void 0 && (n = []), t === void 0 && (t = !0);
  const r = Ia(e), a = r === ((o = e.ownerDocument) == null ? void 0 : o.body), l = lt(r);
  if (a) {
    const s = ar(l);
    return n.concat(l, l.visualViewport || [], Un(r) ? r : [], s && t ? zn(s) : []);
  }
  return n.concat(r, zn(r, [], t));
}
function ar(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Ra(e) {
  const n = yt(e);
  let t = parseFloat(n.width) || 0, o = parseFloat(n.height) || 0;
  const r = Et(e), a = r ? e.offsetWidth : t, l = r ? e.offsetHeight : o, s = po(t) !== a || po(o) !== l;
  return s && (t = a, o = l), {
    width: t,
    height: o,
    $: s
  };
}
function Sr(e) {
  return bt(e) ? e : e.contextElement;
}
function yn(e) {
  const n = Sr(e);
  if (!Et(n))
    return St(1);
  const t = n.getBoundingClientRect(), {
    width: o,
    height: r,
    $: a
  } = Ra(n);
  let l = (a ? po(t.width) : t.width) / o, s = (a ? po(t.height) : t.height) / r;
  return (!l || !Number.isFinite(l)) && (l = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: l,
    y: s
  };
}
const Gs = /* @__PURE__ */ St(0);
function Aa(e) {
  const n = lt(e);
  return !Cr() || !n.visualViewport ? Gs : {
    x: n.visualViewport.offsetLeft,
    y: n.visualViewport.offsetTop
  };
}
function qs(e, n, t) {
  return n === void 0 && (n = !1), !t || n && t !== lt(e) ? !1 : n;
}
function sn(e, n, t, o) {
  n === void 0 && (n = !1), t === void 0 && (t = !1);
  const r = e.getBoundingClientRect(), a = Sr(e);
  let l = St(1);
  n && (o ? bt(o) && (l = yn(o)) : l = yn(e));
  const s = qs(a, t, o) ? Aa(a) : St(0);
  let u = (r.left + s.x) / l.x, i = (r.top + s.y) / l.y, c = r.width / l.x, d = r.height / l.y;
  if (a) {
    const m = lt(a), f = o && bt(o) ? lt(o) : o;
    let p = m, v = ar(p);
    for (; v && o && f !== p; ) {
      const g = yn(v), w = v.getBoundingClientRect(), b = yt(v), h = w.left + (v.clientLeft + parseFloat(b.paddingLeft)) * g.x, C = w.top + (v.clientTop + parseFloat(b.paddingTop)) * g.y;
      u *= g.x, i *= g.y, c *= g.x, d *= g.y, u += h, i += C, p = lt(v), v = ar(p);
    }
  }
  return ho({
    width: c,
    height: d,
    x: u,
    y: i
  });
}
function _r(e, n) {
  const t = Po(e).scrollLeft;
  return n ? n.left + t : sn(Dt(e)).left + t;
}
function Ma(e, n, t) {
  t === void 0 && (t = !1);
  const o = e.getBoundingClientRect(), r = o.left + n.scrollLeft - (t ? 0 : (
    // RTL <body> scrollbar.
    _r(e, o)
  )), a = o.top + n.scrollTop;
  return {
    x: r,
    y: a
  };
}
function Ks(e) {
  let {
    elements: n,
    rect: t,
    offsetParent: o,
    strategy: r
  } = e;
  const a = r === "fixed", l = Dt(o), s = n ? Do(n.floating) : !1;
  if (o === l || s && a)
    return t;
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  }, i = St(1);
  const c = St(0), d = Et(o);
  if ((d || !d && !a) && ((un(o) !== "body" || Un(l)) && (u = Po(o)), Et(o))) {
    const f = sn(o);
    i = yn(o), c.x = f.x + o.clientLeft, c.y = f.y + o.clientTop;
  }
  const m = l && !d && !a ? Ma(l, u, !0) : St(0);
  return {
    width: t.width * i.x,
    height: t.height * i.y,
    x: t.x * i.x - u.scrollLeft * i.x + c.x + m.x,
    y: t.y * i.y - u.scrollTop * i.y + c.y + m.y
  };
}
function Ys(e) {
  return Array.from(e.getClientRects());
}
function Xs(e) {
  const n = Dt(e), t = Po(e), o = e.ownerDocument.body, r = nt(n.scrollWidth, n.clientWidth, o.scrollWidth, o.clientWidth), a = nt(n.scrollHeight, n.clientHeight, o.scrollHeight, o.clientHeight);
  let l = -t.scrollLeft + _r(e);
  const s = -t.scrollTop;
  return yt(o).direction === "rtl" && (l += nt(n.clientWidth, o.clientWidth) - r), {
    width: r,
    height: a,
    x: l,
    y: s
  };
}
function Js(e, n) {
  const t = lt(e), o = Dt(e), r = t.visualViewport;
  let a = o.clientWidth, l = o.clientHeight, s = 0, u = 0;
  if (r) {
    a = r.width, l = r.height;
    const i = Cr();
    (!i || i && n === "fixed") && (s = r.offsetLeft, u = r.offsetTop);
  }
  return {
    width: a,
    height: l,
    x: s,
    y: u
  };
}
function Qs(e, n) {
  const t = sn(e, !0, n === "fixed"), o = t.top + e.clientTop, r = t.left + e.clientLeft, a = Et(e) ? yn(e) : St(1), l = e.clientWidth * a.x, s = e.clientHeight * a.y, u = r * a.x, i = o * a.y;
  return {
    width: l,
    height: s,
    x: u,
    y: i
  };
}
function Zr(e, n, t) {
  let o;
  if (n === "viewport")
    o = Js(e, t);
  else if (n === "document")
    o = Xs(Dt(e));
  else if (bt(n))
    o = Qs(n, t);
  else {
    const r = Aa(e);
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
  const t = Yt(e);
  return t === n || !bt(t) || xn(t) ? !1 : yt(t).position === "fixed" || La(t, n);
}
function Zs(e, n) {
  const t = n.get(e);
  if (t)
    return t;
  let o = zn(e, [], !1).filter((s) => bt(s) && un(s) !== "body"), r = null;
  const a = yt(e).position === "fixed";
  let l = a ? Yt(e) : e;
  for (; bt(l) && !xn(l); ) {
    const s = yt(l), u = kr(l);
    !u && s.position === "fixed" && (r = null), (a ? !u && !r : !u && s.position === "static" && !!r && ["absolute", "fixed"].includes(r.position) || Un(l) && !u && La(e, l)) ? o = o.filter((c) => c !== l) : r = s, l = Yt(l);
  }
  return n.set(e, o), o;
}
function ei(e) {
  let {
    element: n,
    boundary: t,
    rootBoundary: o,
    strategy: r
  } = e;
  const l = [...t === "clippingAncestors" ? Do(n) ? [] : Zs(n, this._c) : [].concat(t), o], s = l[0], u = l.reduce((i, c) => {
    const d = Zr(n, c, r);
    return i.top = nt(d.top, i.top), i.right = Kt(d.right, i.right), i.bottom = Kt(d.bottom, i.bottom), i.left = nt(d.left, i.left), i;
  }, Zr(n, s, r));
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top
  };
}
function ti(e) {
  const {
    width: n,
    height: t
  } = Ra(e);
  return {
    width: n,
    height: t
  };
}
function ni(e, n, t) {
  const o = Et(n), r = Dt(n), a = t === "fixed", l = sn(e, !0, a, n);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = St(0);
  function i() {
    u.x = _r(r);
  }
  if (o || !o && !a)
    if ((un(n) !== "body" || Un(r)) && (s = Po(n)), o) {
      const f = sn(n, !0, a, n);
      u.x = f.x + n.clientLeft, u.y = f.y + n.clientTop;
    } else r && i();
  a && !o && r && i();
  const c = r && !o && !a ? Ma(r, s) : St(0), d = l.left + s.scrollLeft - u.x - c.x, m = l.top + s.scrollTop - u.y - c.y;
  return {
    x: d,
    y: m,
    width: l.width,
    height: l.height
  };
}
function zo(e) {
  return yt(e).position === "static";
}
function ea(e, n) {
  if (!Et(e) || yt(e).position === "fixed")
    return null;
  if (n)
    return n(e);
  let t = e.offsetParent;
  return Dt(e) === t && (t = t.ownerDocument.body), t;
}
function Ba(e, n) {
  const t = lt(e);
  if (Do(e))
    return t;
  if (!Et(e)) {
    let r = Yt(e);
    for (; r && !xn(r); ) {
      if (bt(r) && !zo(r))
        return r;
      r = Yt(r);
    }
    return t;
  }
  let o = ea(e, n);
  for (; o && Ws(o) && zo(o); )
    o = ea(o, n);
  return o && xn(o) && zo(o) && !kr(o) ? t : o || Us(e) || t;
}
const oi = async function(e) {
  const n = this.getOffsetParent || Ba, t = this.getDimensions, o = await t(e.floating);
  return {
    reference: ni(e.reference, await n(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function ri(e) {
  return yt(e).direction === "rtl";
}
const ai = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Ks,
  getDocumentElement: Dt,
  getClippingRect: ei,
  getOffsetParent: Ba,
  getElementRects: oi,
  getClientRects: Ys,
  getDimensions: ti,
  getScale: yn,
  isElement: bt,
  isRTL: ri
};
function Fa(e, n) {
  return e.x === n.x && e.y === n.y && e.width === n.width && e.height === n.height;
}
function li(e, n) {
  let t = null, o;
  const r = Dt(e);
  function a() {
    var s;
    clearTimeout(o), (s = t) == null || s.disconnect(), t = null;
  }
  function l(s, u) {
    s === void 0 && (s = !1), u === void 0 && (u = 1), a();
    const i = e.getBoundingClientRect(), {
      left: c,
      top: d,
      width: m,
      height: f
    } = i;
    if (s || n(), !m || !f)
      return;
    const p = Zn(d), v = Zn(r.clientWidth - (c + m)), g = Zn(r.clientHeight - (d + f)), w = Zn(c), h = {
      rootMargin: -p + "px " + -v + "px " + -g + "px " + -w + "px",
      threshold: nt(0, Kt(1, u)) || 1
    };
    let C = !0;
    function y($) {
      const E = $[0].intersectionRatio;
      if (E !== u) {
        if (!C)
          return l();
        E ? l(!1, E) : o = setTimeout(() => {
          l(!1, 1e-7);
        }, 1e3);
      }
      E === 1 && !Fa(i, e.getBoundingClientRect()) && l(), C = !1;
    }
    try {
      t = new IntersectionObserver(y, {
        ...h,
        // Handle <iframe>s
        root: r.ownerDocument
      });
    } catch {
      t = new IntersectionObserver(y, h);
    }
    t.observe(e);
  }
  return l(!0), a;
}
function Io(e, n, t, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: r = !0,
    ancestorResize: a = !0,
    elementResize: l = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: u = !1
  } = o, i = Sr(e), c = r || a ? [...i ? zn(i) : [], ...zn(n)] : [];
  c.forEach((w) => {
    r && w.addEventListener("scroll", t, {
      passive: !0
    }), a && w.addEventListener("resize", t);
  });
  const d = i && s ? li(i, t) : null;
  let m = -1, f = null;
  l && (f = new ResizeObserver((w) => {
    let [b] = w;
    b && b.target === i && f && (f.unobserve(n), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      var h;
      (h = f) == null || h.observe(n);
    })), t();
  }), i && !u && f.observe(i), f.observe(n));
  let p, v = u ? sn(e) : null;
  u && g();
  function g() {
    const w = sn(e);
    v && !Fa(v, w) && t(), v = w, p = requestAnimationFrame(g);
  }
  return t(), () => {
    var w;
    c.forEach((b) => {
      r && b.removeEventListener("scroll", t), a && b.removeEventListener("resize", t);
    }), d == null || d(), (w = f) == null || w.disconnect(), f = null, u && cancelAnimationFrame(p);
  };
}
const Sn = Ns, Ro = Bs, _n = zs, Er = Fs, Or = Hs, si = Ms, Tr = js, ii = (e, n, t) => {
  const o = /* @__PURE__ */ new Map(), r = {
    platform: ai,
    ...t
  }, a = {
    ...r.platform,
    _c: o
  };
  return As(e, n, {
    ...r,
    platform: a
  });
};
function ui(e) {
  return e != null && typeof e == "object" && "$el" in e;
}
function lr(e) {
  if (ui(e)) {
    const n = e.$el;
    return xr(n) && un(n) === "#comment" ? null : n;
  }
  return e;
}
function hn(e) {
  return typeof e == "function" ? e() : I(e);
}
function ci(e) {
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const t = lr(hn(e.element));
      return t == null ? {} : si({
        element: t,
        padding: e.padding
      }).fn(n);
    }
  };
}
function Va(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function ta(e, n) {
  const t = Va(e);
  return Math.round(n * t) / t;
}
function En(e, n, t) {
  t === void 0 && (t = {});
  const o = t.whileElementsMounted, r = _(() => {
    var E;
    return (E = hn(t.open)) != null ? E : !0;
  }), a = _(() => hn(t.middleware)), l = _(() => {
    var E;
    return (E = hn(t.placement)) != null ? E : "bottom";
  }), s = _(() => {
    var E;
    return (E = hn(t.strategy)) != null ? E : "absolute";
  }), u = _(() => {
    var E;
    return (E = hn(t.transform)) != null ? E : !0;
  }), i = _(() => lr(e.value)), c = _(() => lr(n.value)), d = k(0), m = k(0), f = k(s.value), p = k(l.value), v = _o({}), g = k(!1), w = _(() => {
    const E = {
      position: f.value,
      left: "0",
      top: "0"
    };
    if (!c.value)
      return E;
    const P = ta(c.value, d.value), X = ta(c.value, m.value);
    return u.value ? {
      ...E,
      transform: "translate(" + P + "px, " + X + "px)",
      ...Va(c.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: f.value,
      left: P + "px",
      top: X + "px"
    };
  });
  let b;
  function h() {
    if (i.value == null || c.value == null)
      return;
    const E = r.value;
    ii(i.value, c.value, {
      middleware: a.value,
      placement: l.value,
      strategy: s.value
    }).then((P) => {
      d.value = P.x, m.value = P.y, f.value = P.strategy, p.value = P.placement, v.value = P.middlewareData, g.value = E !== !1;
    });
  }
  function C() {
    typeof b == "function" && (b(), b = void 0);
  }
  function y() {
    if (C(), o === void 0) {
      h();
      return;
    }
    if (i.value != null && c.value != null) {
      b = o(i.value, c.value, h);
      return;
    }
  }
  function $() {
    r.value || (g.value = !1);
  }
  return se([a, l, s, r], h, {
    flush: "sync"
  }), se([i, c], y, {
    flush: "sync"
  }), se(r, $, {
    flush: "sync"
  }), Xl() && Ca(C), {
    x: fn(d),
    y: fn(m),
    strategy: fn(f),
    placement: fn(p),
    middlewareData: fn(v),
    isPositioned: fn(g),
    floatingStyles: w,
    update: h
  };
}
function pn(e, n, t) {
  let o = t.initialDeps ?? [], r;
  function a() {
    var l, s, u, i;
    let c;
    t.key && ((l = t.debug) != null && l.call(t)) && (c = Date.now());
    const d = e();
    if (!(d.length !== o.length || d.some((p, v) => o[v] !== p)))
      return r;
    o = d;
    let f;
    if (t.key && ((s = t.debug) != null && s.call(t)) && (f = Date.now()), r = n(...d), t.key && ((u = t.debug) != null && u.call(t))) {
      const p = Math.round((Date.now() - c) * 100) / 100, v = Math.round((Date.now() - f) * 100) / 100, g = v / 16, w = (b, h) => {
        for (b = String(b); b.length < h; )
          b = " " + b;
        return b;
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
    return (i = t == null ? void 0 : t.onChange) == null || i.call(t, r), r;
  }
  return a.updateDeps = (l) => {
    o = l;
  }, a;
}
function jo(e, n) {
  if (e === void 0)
    throw new Error("Unexpected undefined");
  return e;
}
const di = (e, n) => Math.abs(e - n) < 1, fi = (e, n, t) => {
  let o;
  return function(...r) {
    e.clearTimeout(o), o = e.setTimeout(() => n.apply(this, r), t);
  };
}, pi = (e) => e, mi = (e) => {
  const n = Math.max(e.startIndex - e.overscan, 0), t = Math.min(e.endIndex + e.overscan, e.count - 1), o = [];
  for (let r = n; r <= t; r++)
    o.push(r);
  return o;
}, vi = (e, n) => {
  const t = e.scrollElement;
  if (!t)
    return;
  const o = e.targetWindow;
  if (!o)
    return;
  const r = (l) => {
    const { width: s, height: u } = l;
    n({ width: Math.round(s), height: Math.round(u) });
  };
  if (r(t.getBoundingClientRect()), !o.ResizeObserver)
    return () => {
    };
  const a = new o.ResizeObserver((l) => {
    const s = () => {
      const u = l[0];
      if (u != null && u.borderBoxSize) {
        const i = u.borderBoxSize[0];
        if (i) {
          r({ width: i.inlineSize, height: i.blockSize });
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
}, oa = typeof window > "u" ? !0 : "onscrollend" in window, hi = (e, n) => {
  const t = e.scrollElement;
  if (!t)
    return;
  const o = e.targetWindow;
  if (!o)
    return;
  let r = 0;
  const a = e.options.useScrollendEvent && oa ? () => {
  } : fi(
    o,
    () => {
      n(r, !1);
    },
    e.options.isScrollingResetDelay
  ), l = (c) => () => {
    const { horizontal: d, isRtl: m } = e.options;
    r = d ? t.scrollLeft * (m && -1 || 1) : t.scrollTop, a(), n(r, c);
  }, s = l(!0), u = l(!1);
  u(), t.addEventListener("scroll", s, na);
  const i = e.options.useScrollendEvent && oa;
  return i && t.addEventListener("scrollend", u, na), () => {
    t.removeEventListener("scroll", s), i && t.removeEventListener("scrollend", u);
  };
}, gi = (e, n, t) => {
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
}, bi = (e, {
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
class yi {
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
        getItemKey: pi,
        rangeExtractor: mi,
        onChange: () => {
        },
        measureElement: gi,
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
    }, this.maybeNotify = pn(
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
        const u = a.get(
          s.lane
        );
        if (u == null || s.end > u.end ? a.set(s.lane, s) : s.end < u.end && r.set(s.lane, !0), r.size === this.options.lanes)
          break;
      }
      return a.size === this.options.lanes ? Array.from(a.values()).sort((l, s) => l.end === s.end ? l.index - s.index : l.end - s.end)[0] : void 0;
    }, this.getMeasurementOptions = pn(
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
    ), this.getMeasurements = pn(
      () => [this.getMeasurementOptions(), this.itemSizeCache],
      ({ count: t, paddingStart: o, scrollMargin: r, getItemKey: a, enabled: l }, s) => {
        if (!l)
          return this.measurementsCache = [], this.itemSizeCache.clear(), [];
        this.measurementsCache.length === 0 && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((c) => {
          this.itemSizeCache.set(c.key, c.size);
        }));
        const u = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [];
        const i = this.measurementsCache.slice(0, u);
        for (let c = u; c < t; c++) {
          const d = a(c), m = this.options.lanes === 1 ? i[c - 1] : this.getFurthestMeasurement(i, c), f = m ? m.end + this.options.gap : o + r, p = s.get(d), v = typeof p == "number" ? p : this.options.estimateSize(c), g = f + v, w = m ? m.lane : c % this.options.lanes;
          i[c] = {
            index: c,
            start: f,
            size: v,
            end: g,
            key: d,
            lane: w
          };
        }
        return this.measurementsCache = i, i;
      },
      {
        key: process.env.NODE_ENV !== "production" && "getMeasurements",
        debug: () => this.options.debug
      }
    ), this.calculateRange = pn(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (t, o, r, a) => this.range = t.length > 0 && o > 0 ? wi({
        measurements: t,
        outerSize: o,
        scrollOffset: r,
        lanes: a
      }) : null,
      {
        key: process.env.NODE_ENV !== "production" && "calculateRange",
        debug: () => this.options.debug
      }
    ), this.getVirtualIndexes = pn(
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
    }, this.getVirtualItems = pn(
      () => [this.getVirtualIndexes(), this.getMeasurements()],
      (t, o) => {
        const r = [];
        for (let a = 0, l = t.length; a < l; a++) {
          const s = t[a], u = o[s];
          r.push(u);
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
        return jo(
          o[Na(
            0,
            o.length - 1,
            (r) => jo(o[r]).start,
            t
          )]
        );
    }, this.getOffsetForAlignment = (t, o, r = 0) => {
      const a = this.getSize(), l = this.getScrollOffset();
      o === "auto" && (o = t >= l + a ? "end" : "start"), o === "center" ? t += (r - a) / 2 : o === "end" && (t -= a);
      const s = this.options.horizontal ? "scrollWidth" : "scrollHeight", i = (this.scrollElement ? "document" in this.scrollElement ? this.scrollElement.document.documentElement[s] : this.scrollElement[s] : 0) - a;
      return Math.max(Math.min(i, t), 0);
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
          const [i] = jo(
            this.getOffsetForIndex(t, s)
          );
          di(i, this.getScrollOffset()) || this.scrollToIndex(t, { align: s, behavior: r });
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
const Na = (e, n, t, o) => {
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
function wi({
  measurements: e,
  outerSize: n,
  scrollOffset: t,
  lanes: o
}) {
  const r = e.length - 1, a = (u) => e[u].start;
  if (e.length <= o)
    return {
      startIndex: 0,
      endIndex: r
    };
  let l = Na(
    0,
    r,
    a,
    t
  ), s = l;
  if (o === 1)
    for (; s < r && e[s].end < t + n; )
      s++;
  else if (o > 1) {
    const u = Array(o).fill(0);
    for (; s < r && u.some((c) => c < t + n); ) {
      const c = e[s];
      u[c.lane] = c.end, s++;
    }
    const i = Array(o).fill(t + n);
    for (; l >= 0 && i.some((c) => c >= t); ) {
      const c = e[l];
      i[c.lane] = c.start, l--;
    }
    l = Math.max(0, l - l % o), s = Math.min(r, s + (o - 1 - s % o));
  }
  return { startIndex: l, endIndex: s };
}
function xi(e) {
  const n = new yi(I(e)), t = _o(n), o = n._didMount();
  return se(
    () => I(e).getScrollElement(),
    (r) => {
      r && n._willUpdate();
    },
    {
      immediate: !0
    }
  ), se(
    () => I(e),
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
function ki(e) {
  return xi(
    _(() => ({
      observeElementRect: vi,
      observeElementOffset: hi,
      scrollToFn: bi,
      ...I(e)
    }))
  );
}
function za(e, n, t) {
  let o = k(t == null ? void 0 : t.value), r = _(() => e.value !== void 0);
  return [_(() => r.value ? e.value : o.value), function(a) {
    return r.value || (o.value = a), n == null ? void 0 : n(a);
  }];
}
function $r(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((n) => setTimeout(() => {
    throw n;
  }));
}
function Xt() {
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
    return $r(() => {
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
    let o = Xt();
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
function Ci() {
  let e = Xt();
  return be(() => e.dispose()), e;
}
function Si() {
  let e = Ci();
  return (n) => {
    e.dispose(), e.nextFrame(n);
  };
}
let _i = 0;
function Ei() {
  return ++_i;
}
function Me() {
  return Ei();
}
function z(e) {
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
var Oi = Object.defineProperty, Ti = (e, n, t) => n in e ? Oi(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, ra = (e, n, t) => (Ti(e, typeof n != "symbol" ? n + "" : n, t), t);
let $i = class {
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
}, Gn = new $i();
function ct(e) {
  var n, t;
  return Gn.isServer ? null : e ? "ownerDocument" in e ? e.ownerDocument : "value" in e ? (t = (n = z(e)) == null ? void 0 : n.ownerDocument) != null ? t : document : null : document;
}
let go = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var Ke = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(Ke || {}), jn = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(jn || {}), Di = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Di || {});
function Ao(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(go)).sort((n, t) => Math.sign((n.tabIndex || Number.MAX_SAFE_INTEGER) - (t.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var Dr = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Dr || {});
function ja(e, n = 0) {
  var t;
  return e === ((t = ct(e)) == null ? void 0 : t.body) ? !1 : Pe(n, { 0() {
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
var Pi = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(Pi || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function an(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let Ii = ["textarea", "input"].join(",");
function Ri(e) {
  var n, t;
  return (t = (n = e == null ? void 0 : e.matches) == null ? void 0 : n.call(e, Ii)) != null ? t : !1;
}
function Ha(e, n = (t) => t) {
  return e.slice().sort((t, o) => {
    let r = n(t), a = n(o);
    if (r === null || a === null) return 0;
    let l = r.compareDocumentPosition(a);
    return l & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : l & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function mt(e, n, { sorted: t = !0, relativeTo: o = null, skipElements: r = [] } = {}) {
  var a;
  let l = (a = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? a : document, s = Array.isArray(e) ? t ? Ha(e) : e : Ao(e);
  r.length > 0 && s.length > 1 && (s = s.filter((p) => !r.includes(p))), o = o ?? l.activeElement;
  let u = (() => {
    if (n & 5) return 1;
    if (n & 10) return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), i = (() => {
    if (n & 1) return 0;
    if (n & 2) return Math.max(0, s.indexOf(o)) - 1;
    if (n & 4) return Math.max(0, s.indexOf(o)) + 1;
    if (n & 8) return s.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), c = n & 32 ? { preventScroll: !0 } : {}, d = 0, m = s.length, f;
  do {
    if (d >= m || d + m <= 0) return 0;
    let p = i + d;
    if (n & 16) p = (p + m) % m;
    else {
      if (p < 0) return 3;
      if (p >= m) return 1;
    }
    f = s[p], f == null || f.focus(c), d += u;
  } while (f !== l.activeElement);
  return n & 6 && Ri(f) && f.select(), 2;
}
function Wa() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function Ai() {
  return /Android/gi.test(window.navigator.userAgent);
}
function Ua() {
  return Wa() || Ai();
}
function Dn(e, n, t, o) {
  Gn.isServer || Le((r) => {
    e.value && (document.addEventListener(n, t, o), r(() => document.removeEventListener(n, t, o)));
  });
}
function Ga(e, n, t, o) {
  Gn.isServer || Le((r) => {
    e.value && (window.addEventListener(n, t, o), r(() => window.removeEventListener(n, t, o)));
  });
}
const aa = 30;
function Pr(e, n, t = _(() => !0)) {
  function o(l, s) {
    if (l.defaultPrevented) return;
    let u = s(l);
    if (u === null || !u.getRootNode().contains(u)) return;
    let i = function c(d) {
      return typeof d == "function" ? c(d()) : Array.isArray(d) || d instanceof Set ? d : [d];
    }(e);
    for (let c of i) {
      if (c === null) continue;
      let d = c instanceof HTMLElement ? c : z(c);
      if (d != null && d.contains(u) || l.composed && l.composedPath().includes(d)) return;
    }
    return !ja(u, Dr.Loose) && u.tabIndex !== -1 && l.preventDefault(), n(l, u);
  }
  let r = k(null);
  Dn(t, "pointerdown", (l) => {
    var s, u;
    r.value = ((u = (s = l.composedPath) == null ? void 0 : s.call(l)) == null ? void 0 : u[0]) || l.target;
  }, !0), Dn(t, "mousedown", (l) => {
    var s, u;
    r.value = ((u = (s = l.composedPath) == null ? void 0 : s.call(l)) == null ? void 0 : u[0]) || l.target;
  }, !0), Dn(t, "click", (l) => {
    Ua() || r.value && (o(l, () => r.value), r.value = null);
  }, !0);
  let a = { x: 0, y: 0 };
  Dn(t, "touchstart", (l) => {
    a.x = l.touches[0].clientX, a.y = l.touches[0].clientY;
  }, !0), Dn(t, "touchend", (l) => {
    let s = { x: l.changedTouches[0].clientX, y: l.changedTouches[0].clientY };
    if (!(Math.abs(s.x - a.x) >= aa || Math.abs(s.y - a.y) >= aa)) return o(l, () => l.target instanceof HTMLElement ? l.target : null);
  }, !0), Ga(t, "blur", (l) => o(l, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
function la(e, n) {
  if (e) return e;
  let t = n ?? "button";
  if (typeof t == "string" && t.toLowerCase() === "button") return "button";
}
function Ir(e, n) {
  let t = k(la(e.value.type, e.value.as));
  return ie(() => {
    t.value = la(e.value.type, e.value.as);
  }), Le(() => {
    var o;
    t.value || z(n) && z(n) instanceof HTMLButtonElement && !((o = z(n)) != null && o.hasAttribute("type")) && (t.value = "button");
  }), t;
}
function sa(e) {
  return [e.screenX, e.screenY];
}
function Mi() {
  let e = k([-1, -1]);
  return { wasMoved(n) {
    let t = sa(n);
    return e.value[0] === t[0] && e.value[1] === t[1] ? !1 : (e.value = t, !0);
  }, update(n) {
    e.value = sa(n);
  } };
}
function Li({ container: e, accept: n, walk: t, enabled: o }) {
  Le(() => {
    let r = e.value;
    if (!r || o !== void 0 && !o.value) return;
    let a = ct(e);
    if (!a) return;
    let l = Object.assign((u) => n(u), { acceptNode: n }), s = a.createTreeWalker(r, NodeFilter.SHOW_ELEMENT, l, !1);
    for (; s.nextNode(); ) t(s.currentNode);
  });
}
var ut = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(ut || {}), jt = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(jt || {});
function ye({ visible: e = !0, features: n = 0, ourProps: t, theirProps: o, ...r }) {
  var a;
  let l = Ka(o, t), s = Object.assign(r, { props: l });
  if (e || n & 2 && l.static) return Ho(s);
  if (n & 1) {
    let u = (a = l.unmount) == null || a ? 0 : 1;
    return Pe(u, { 0() {
      return null;
    }, 1() {
      return Ho({ ...r, props: { ...l, hidden: !0, style: { display: "none" } } });
    } });
  }
  return Ho(s);
}
function Ho({ props: e, attrs: n, slots: t, slot: o, name: r }) {
  var a, l;
  let { as: s, ...u } = On(e, ["unmount", "static"]), i = (a = t.default) == null ? void 0 : a.call(t, o), c = {};
  if (o) {
    let d = !1, m = [];
    for (let [f, p] of Object.entries(o)) typeof p == "boolean" && (d = !0), p === !0 && m.push(f);
    d && (c["data-headlessui-state"] = m.join(" "));
  }
  if (s === "template") {
    if (i = qa(i ?? []), Object.keys(u).length > 0 || Object.keys(n).length > 0) {
      let [d, ...m] = i ?? [];
      if (!Bi(d) || m.length > 0) throw new Error(['Passing props on "template"!', "", `The current component <${r} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(u).concat(Object.keys(n)).map((v) => v.trim()).filter((v, g, w) => w.indexOf(v) === g).sort((v, g) => v.localeCompare(g)).map((v) => `  - ${v}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((v) => `  - ${v}`).join(`
`)].join(`
`));
      let f = Ka((l = d.props) != null ? l : {}, u, c), p = Sa(d, f, !0);
      for (let v in f) v.startsWith("on") && (p.props || (p.props = {}), p.props[v] = f[v]);
      return p;
    }
    return Array.isArray(i) && i.length === 1 ? i[0] : i;
  }
  return ue(s, Object.assign({}, u, c), { default: () => i });
}
function qa(e) {
  return e.flatMap((n) => n.type === ge ? qa(n.children) : [n]);
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
function On(e, n = []) {
  let t = Object.assign({}, e);
  for (let o of n) o in t && delete t[o];
  return t;
}
function Bi(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
var Ot = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Ot || {});
let Mt = j({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: n, attrs: t }) {
  return () => {
    var o;
    let { features: r, ...a } = e, l = { "aria-hidden": (r & 2) === 2 ? !0 : (o = a["aria-hidden"]) != null ? o : void 0, hidden: (r & 4) === 4 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(r & 4) === 4 && (r & 2) !== 2 && { display: "none" } } };
    return ye({ ourProps: l, theirProps: a, slot: {}, attrs: t, slots: n, name: "Hidden" });
  };
} }), Xa = Symbol("Context");
var $e = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))($e || {});
function Fi() {
  return Tn() !== null;
}
function Tn() {
  return me(Xa, null);
}
function Rr(e) {
  ke(Xa, e);
}
var Te = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(Te || {}), Ja = ((e) => (e[e.Left = 0] = "Left", e[e.Right = 2] = "Right", e))(Ja || {});
function Vi(e) {
  function n() {
    document.readyState !== "loading" && (e(), document.removeEventListener("DOMContentLoaded", n));
  }
  typeof window < "u" && typeof document < "u" && (document.addEventListener("DOMContentLoaded", n), n());
}
let It = [];
Vi(() => {
  function e(n) {
    if (!(n.target instanceof HTMLElement) || n.target === document.body || It[0] === n.target) return;
    let t = n.target;
    t = t.closest(go), It.unshift(t ?? n.target), It = It.filter((o) => o != null && o.isConnected), It.splice(10);
  }
  window.addEventListener("click", e, { capture: !0 }), window.addEventListener("mousedown", e, { capture: !0 }), window.addEventListener("focus", e, { capture: !0 }), document.body.addEventListener("click", e, { capture: !0 }), document.body.addEventListener("mousedown", e, { capture: !0 }), document.body.addEventListener("focus", e, { capture: !0 });
});
function Ni(e) {
  throw new Error("Unexpected object: " + e);
}
var He = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(He || {});
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
      Ni(e);
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
function zi(e) {
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
function ji(e, n) {
  return e === n;
}
var Hi = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Hi || {}), Wi = ((e) => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(Wi || {}), Ui = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Focus = 1] = "Focus", e[e.Other = 2] = "Other", e))(Ui || {});
let tl = Symbol("ComboboxContext");
function cn(e) {
  let n = me(tl, null);
  if (n === null) {
    let t = new Error(`<${e} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t, cn), t;
  }
  return n;
}
let nl = Symbol("VirtualContext"), Gi = j({ name: "VirtualProvider", setup(e, { slots: n }) {
  let t = cn("VirtualProvider"), o = _(() => {
    let s = z(t.optionsRef);
    if (!s) return { start: 0, end: 0 };
    let u = window.getComputedStyle(s);
    return { start: parseFloat(u.paddingBlockStart || u.paddingTop), end: parseFloat(u.paddingBlockEnd || u.paddingBottom) };
  }), r = ki(_(() => ({ scrollPaddingStart: o.value.start, scrollPaddingEnd: o.value.end, count: t.virtual.value.options.length, estimateSize() {
    return 40;
  }, getScrollElement() {
    return z(t.optionsRef);
  }, overscan: 12 }))), a = _(() => {
    var s;
    return (s = t.virtual.value) == null ? void 0 : s.options;
  }), l = k(0);
  return se([a], () => {
    l.value += 1;
  }), ke(nl, t.virtual.value ? r : null), () => [ue("div", { style: { position: "relative", width: "100%", height: `${r.value.getTotalSize()}px` }, ref: (s) => {
    s && t.activationTrigger.value !== 0 && t.activeOptionIndex.value !== null && t.virtual.value.options.length > t.activeOptionIndex.value && r.value.scrollToIndex(t.activeOptionIndex.value);
  } }, r.value.getVirtualItems().map((s) => Sa(n.default({ option: t.virtual.value.options[s.index], open: t.comboboxState.value === 0 })[0], { key: `${l.value}-${s.index}`, "data-index": s.index, "aria-setsize": t.virtual.value.options.length, "aria-posinset": s.index + 1, style: { position: "absolute", top: 0, left: 0, transform: `translateY(${s.start}px)`, overflowAnchor: "none" } })))];
} }), Ar = j({ name: "Combobox", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: !1 }, by: { type: [String, Function], nullable: !0, default: null }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, form: { type: String, optional: !0 }, name: { type: String, optional: !0 }, nullable: { type: Boolean, default: !1 }, multiple: { type: [Boolean], default: !1 }, immediate: { type: [Boolean], default: !1 }, virtual: { type: Object, default: null } }, inheritAttrs: !1, setup(e, { slots: n, attrs: t, emit: o }) {
  let r = k(1), a = k(null), l = k(null), s = k(null), u = k(null), i = k({ static: !1, hold: !1 }), c = k([]), d = k(null), m = k(2), f = k(!1);
  function p(O = (F) => F) {
    let F = d.value !== null ? c.value[d.value] : null, H = O(c.value.slice()), x = H.length > 0 && H[0].dataRef.order.value !== null ? H.sort((L, K) => L.dataRef.order.value - K.dataRef.order.value) : Ha(H, (L) => z(L.dataRef.domRef)), D = F ? x.indexOf(F) : null;
    return D === -1 && (D = null), { options: x, activeOptionIndex: D };
  }
  let v = _(() => e.multiple ? 1 : 0), g = _(() => e.nullable), [w, b] = za(_(() => e.modelValue), (O) => o("update:modelValue", O), _(() => e.defaultValue)), h = _(() => w.value === void 0 ? Pe(v.value, { 1: [], 0: void 0 }) : w.value), C = null, y = null;
  function $(O) {
    return Pe(v.value, { 0() {
      return b == null ? void 0 : b(O);
    }, 1: () => {
      let F = Vt(P.value.value).slice(), H = Vt(O), x = F.findIndex((D) => P.compare(H, Vt(D)));
      return x === -1 ? F.push(H) : F.splice(x, 1), b == null ? void 0 : b(F);
    } });
  }
  let E = _(() => {
    var O;
    return (O = e.virtual) == null ? void 0 : O.options;
  });
  se([E], ([O], [F]) => {
    if (P.virtual.value && O && F && d.value !== null) {
      let H = O.indexOf(F[d.value]);
      H !== -1 ? d.value = H : d.value = null;
    }
  });
  let P = { comboboxState: r, value: h, mode: v, compare(O, F) {
    if (typeof e.by == "string") {
      let H = e.by;
      return (O == null ? void 0 : O[H]) === (F == null ? void 0 : F[H]);
    }
    return e.by === null ? ji(O, F) : e.by(O, F);
  }, calculateIndex(O) {
    return P.virtual.value ? e.by === null ? P.virtual.value.options.indexOf(O) : P.virtual.value.options.findIndex((F) => P.compare(F, O)) : c.value.findIndex((F) => P.compare(F.dataRef.value, O));
  }, defaultValue: _(() => e.defaultValue), nullable: g, immediate: _(() => e.immediate), virtual: _(() => {
    var O;
    return e.virtual ? { options: e.virtual.options, disabled: (O = e.virtual.disabled) != null ? O : () => !1 } : null;
  }), inputRef: l, labelRef: a, buttonRef: s, optionsRef: u, disabled: _(() => e.disabled), options: c, change(O) {
    b(O);
  }, activeOptionIndex: _(() => {
    if (f.value && d.value === null && (P.virtual.value ? P.virtual.value.options.length > 0 : c.value.length > 0)) {
      if (P.virtual.value) {
        let F = P.virtual.value.options.findIndex((H) => {
          var x;
          return !((x = P.virtual.value) != null && x.disabled(H));
        });
        if (F !== -1) return F;
      }
      let O = c.value.findIndex((F) => !F.dataRef.disabled);
      if (O !== -1) return O;
    }
    return d.value;
  }), activationTrigger: m, optionsPropsRef: i, closeCombobox() {
    f.value = !1, !e.disabled && r.value !== 1 && (r.value = 1, d.value = null);
  }, openCombobox() {
    if (f.value = !0, !e.disabled && r.value !== 0) {
      if (P.value.value) {
        let O = P.calculateIndex(P.value.value);
        O !== -1 && (d.value = O);
      }
      r.value = 0;
    }
  }, setActivationTrigger(O) {
    m.value = O;
  }, goToOption(O, F, H) {
    f.value = !1, C !== null && cancelAnimationFrame(C), C = requestAnimationFrame(() => {
      if (e.disabled || u.value && !i.value.static && r.value === 1) return;
      if (P.virtual.value) {
        d.value = O === He.Specific ? F : ia({ focus: O }, { resolveItems: () => P.virtual.value.options, resolveActiveIndex: () => {
          var L, K;
          return (K = (L = P.activeOptionIndex.value) != null ? L : P.virtual.value.options.findIndex((Q) => {
            var pe;
            return !((pe = P.virtual.value) != null && pe.disabled(Q));
          })) != null ? K : null;
        }, resolveDisabled: (L) => P.virtual.value.disabled(L), resolveId() {
          throw new Error("Function not implemented.");
        } }), m.value = H ?? 2;
        return;
      }
      let x = p();
      if (x.activeOptionIndex === null) {
        let L = x.options.findIndex((K) => !K.dataRef.disabled);
        L !== -1 && (x.activeOptionIndex = L);
      }
      let D = O === He.Specific ? F : ia({ focus: O }, { resolveItems: () => x.options, resolveActiveIndex: () => x.activeOptionIndex, resolveId: (L) => L.id, resolveDisabled: (L) => L.dataRef.disabled });
      d.value = D, m.value = H ?? 2, c.value = x.options;
    });
  }, selectOption(O) {
    let F = c.value.find((x) => x.id === O);
    if (!F) return;
    let { dataRef: H } = F;
    $(H.value);
  }, selectActiveOption() {
    if (P.activeOptionIndex.value !== null) {
      if (P.virtual.value) $(P.virtual.value.options[P.activeOptionIndex.value]);
      else {
        let { dataRef: O } = c.value[P.activeOptionIndex.value];
        $(O.value);
      }
      P.goToOption(He.Specific, P.activeOptionIndex.value);
    }
  }, registerOption(O, F) {
    let H = Wn({ id: O, dataRef: F });
    if (P.virtual.value) {
      c.value.push(H);
      return;
    }
    y && cancelAnimationFrame(y);
    let x = p((D) => (D.push(H), D));
    d.value === null && P.isSelected(F.value.value) && (x.activeOptionIndex = x.options.indexOf(H)), c.value = x.options, d.value = x.activeOptionIndex, m.value = 2, x.options.some((D) => !z(D.dataRef.domRef)) && (y = requestAnimationFrame(() => {
      let D = p();
      c.value = D.options, d.value = D.activeOptionIndex;
    }));
  }, unregisterOption(O, F) {
    if (C !== null && cancelAnimationFrame(C), F && (f.value = !0), P.virtual.value) {
      c.value = c.value.filter((x) => x.id !== O);
      return;
    }
    let H = p((x) => {
      let D = x.findIndex((L) => L.id === O);
      return D !== -1 && x.splice(D, 1), x;
    });
    c.value = H.options, d.value = H.activeOptionIndex, m.value = 2;
  }, isSelected(O) {
    return Pe(v.value, { 0: () => P.compare(Vt(P.value.value), Vt(O)), 1: () => Vt(P.value.value).some((F) => P.compare(Vt(F), Vt(O))) });
  }, isActive(O) {
    return d.value === P.calculateIndex(O);
  } };
  Pr([l, s, u], () => P.closeCombobox(), _(() => r.value === 0)), ke(tl, P), Rr(_(() => Pe(r.value, { 0: $e.Open, 1: $e.Closed })));
  let X = _(() => {
    var O;
    return (O = z(l)) == null ? void 0 : O.closest("form");
  });
  return ie(() => {
    se([X], () => {
      if (!X.value || e.defaultValue === void 0) return;
      function O() {
        P.change(e.defaultValue);
      }
      return X.value.addEventListener("reset", O), () => {
        var F;
        (F = X.value) == null || F.removeEventListener("reset", O);
      };
    }, { immediate: !0 });
  }), () => {
    var O, F, H;
    let { name: x, disabled: D, form: L, ...K } = e, Q = { open: r.value === 0, disabled: D, activeIndex: P.activeOptionIndex.value, activeOption: P.activeOptionIndex.value === null ? null : P.virtual.value ? P.virtual.value.options[(O = P.activeOptionIndex.value) != null ? O : 0] : (H = (F = P.options.value[P.activeOptionIndex.value]) == null ? void 0 : F.dataRef.value) != null ? H : null, value: h.value };
    return ue(ge, [...x != null && h.value != null ? Qa({ [x]: h.value }).map(([pe, oe]) => ue(Mt, Ya({ features: Ot.Hidden, key: pe, as: "input", type: "hidden", hidden: !0, readOnly: !0, form: L, disabled: D, name: pe, value: oe }))) : [], ye({ theirProps: { ...t, ...On(K, ["by", "defaultValue", "immediate", "modelValue", "multiple", "nullable", "onUpdate:modelValue", "virtual"]) }, ourProps: {}, slot: Q, slots: n, attrs: t, name: "Combobox" })]);
  };
} });
j({ name: "ComboboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: () => `headlessui-combobox-label-${Me()}` } }, setup(e, { attrs: n, slots: t }) {
  let o = cn("ComboboxLabel");
  function r() {
    var a;
    (a = z(o.inputRef)) == null || a.focus({ preventScroll: !0 });
  }
  return () => {
    let a = { open: o.comboboxState.value === 0, disabled: o.disabled.value }, { id: l, ...s } = e, u = { id: l, ref: o.labelRef, onClick: r };
    return ye({ ourProps: u, theirProps: s, slot: a, attrs: n, slots: t, name: "ComboboxLabel" });
  };
} });
let Mr = j({ name: "ComboboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: () => `headlessui-combobox-button-${Me()}` } }, setup(e, { attrs: n, slots: t, expose: o }) {
  let r = cn("ComboboxButton");
  o({ el: r.buttonRef, $el: r.buttonRef });
  function a(u) {
    r.disabled.value || (r.comboboxState.value === 0 ? r.closeCombobox() : (u.preventDefault(), r.openCombobox()), Fe(() => {
      var i;
      return (i = z(r.inputRef)) == null ? void 0 : i.focus({ preventScroll: !0 });
    }));
  }
  function l(u) {
    switch (u.key) {
      case Te.ArrowDown:
        u.preventDefault(), u.stopPropagation(), r.comboboxState.value === 1 && r.openCombobox(), Fe(() => {
          var i;
          return (i = r.inputRef.value) == null ? void 0 : i.focus({ preventScroll: !0 });
        });
        return;
      case Te.ArrowUp:
        u.preventDefault(), u.stopPropagation(), r.comboboxState.value === 1 && (r.openCombobox(), Fe(() => {
          r.value.value || r.goToOption(He.Last);
        })), Fe(() => {
          var i;
          return (i = r.inputRef.value) == null ? void 0 : i.focus({ preventScroll: !0 });
        });
        return;
      case Te.Escape:
        if (r.comboboxState.value !== 0) return;
        u.preventDefault(), r.optionsRef.value && !r.optionsPropsRef.value.static && u.stopPropagation(), r.closeCombobox(), Fe(() => {
          var i;
          return (i = r.inputRef.value) == null ? void 0 : i.focus({ preventScroll: !0 });
        });
        return;
    }
  }
  let s = Ir(_(() => ({ as: e.as, type: n.type })), r.buttonRef);
  return () => {
    var u, i;
    let c = { open: r.comboboxState.value === 0, disabled: r.disabled.value, value: r.value.value }, { id: d, ...m } = e, f = { ref: r.buttonRef, id: d, type: s.value, tabindex: "-1", "aria-haspopup": "listbox", "aria-controls": (u = z(r.optionsRef)) == null ? void 0 : u.id, "aria-expanded": r.comboboxState.value === 0, "aria-labelledby": r.labelRef.value ? [(i = z(r.labelRef)) == null ? void 0 : i.id, d].join(" ") : void 0, disabled: r.disabled.value === !0 ? !0 : void 0, onKeydown: l, onClick: a };
    return ye({ ourProps: f, theirProps: m, slot: c, attrs: n, slots: t, name: "ComboboxButton" });
  };
} }), Lr = j({ name: "ComboboxInput", props: { as: { type: [Object, String], default: "input" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, displayValue: { type: Function }, defaultValue: { type: String, default: void 0 }, id: { type: String, default: () => `headlessui-combobox-input-${Me()}` } }, emits: { change: (e) => !0 }, setup(e, { emit: n, attrs: t, slots: o, expose: r }) {
  let a = cn("ComboboxInput"), l = _(() => ct(z(a.inputRef))), s = { value: !1 };
  r({ el: a.inputRef, $el: a.inputRef });
  function u() {
    a.change(null);
    let h = z(a.optionsRef);
    h && (h.scrollTop = 0), a.goToOption(He.Nothing);
  }
  let i = _(() => {
    var h;
    let C = a.value.value;
    return z(a.inputRef) ? typeof e.displayValue < "u" && C !== void 0 ? (h = e.displayValue(C)) != null ? h : "" : typeof C == "string" ? C : "" : "";
  });
  ie(() => {
    se([i, a.comboboxState, l], ([h, C], [y, $]) => {
      if (s.value) return;
      let E = z(a.inputRef);
      E && (($ === 0 && C === 1 || h !== y) && (E.value = h), requestAnimationFrame(() => {
        var P;
        if (s.value || !E || ((P = l.value) == null ? void 0 : P.activeElement) !== E) return;
        let { selectionStart: X, selectionEnd: O } = E;
        Math.abs((O ?? 0) - (X ?? 0)) === 0 && X === 0 && E.setSelectionRange(E.value.length, E.value.length);
      }));
    }, { immediate: !0 }), se([a.comboboxState], ([h], [C]) => {
      if (h === 0 && C === 1) {
        if (s.value) return;
        let y = z(a.inputRef);
        if (!y) return;
        let $ = y.value, { selectionStart: E, selectionEnd: P, selectionDirection: X } = y;
        y.value = "", y.value = $, X !== null ? y.setSelectionRange(E, P, X) : y.setSelectionRange(E, P);
      }
    });
  });
  let c = k(!1);
  function d() {
    c.value = !0;
  }
  function m() {
    Xt().nextFrame(() => {
      c.value = !1;
    });
  }
  let f = Si();
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
        return s.value = !1, h.preventDefault(), h.stopPropagation(), Pe(a.comboboxState.value, { 0: () => a.goToOption(He.Next), 1: () => a.openCombobox() });
      case Te.ArrowUp:
        return s.value = !1, h.preventDefault(), h.stopPropagation(), Pe(a.comboboxState.value, { 0: () => a.goToOption(He.Previous), 1: () => {
          a.openCombobox(), Fe(() => {
            a.value.value || a.goToOption(He.Last);
          });
        } });
      case Te.Home:
        if (h.shiftKey) break;
        return s.value = !1, h.preventDefault(), h.stopPropagation(), a.goToOption(He.First);
      case Te.PageUp:
        return s.value = !1, h.preventDefault(), h.stopPropagation(), a.goToOption(He.First);
      case Te.End:
        if (h.shiftKey) break;
        return s.value = !1, h.preventDefault(), h.stopPropagation(), a.goToOption(He.Last);
      case Te.PageDown:
        return s.value = !1, h.preventDefault(), h.stopPropagation(), a.goToOption(He.Last);
      case Te.Escape:
        if (s.value = !1, a.comboboxState.value !== 0) return;
        h.preventDefault(), a.optionsRef.value && !a.optionsPropsRef.value.static && h.stopPropagation(), a.nullable.value && a.mode.value === 0 && a.value.value === null && u(), a.closeCombobox();
        break;
      case Te.Tab:
        if (s.value = !1, a.comboboxState.value !== 0) return;
        a.mode.value === 0 && a.activationTrigger.value !== 1 && a.selectActiveOption(), a.closeCombobox();
        break;
    }
  }
  function v(h) {
    n("change", h), a.nullable.value && a.mode.value === 0 && h.target.value === "" && u(), a.openCombobox();
  }
  function g(h) {
    var C, y, $;
    let E = (C = h.relatedTarget) != null ? C : It.find((P) => P !== h.currentTarget);
    if (s.value = !1, !((y = z(a.optionsRef)) != null && y.contains(E)) && !(($ = z(a.buttonRef)) != null && $.contains(E)) && a.comboboxState.value === 0) return h.preventDefault(), a.mode.value === 0 && (a.nullable.value && a.value.value === null ? u() : a.activationTrigger.value !== 1 && a.selectActiveOption()), a.closeCombobox();
  }
  function w(h) {
    var C, y, $;
    let E = (C = h.relatedTarget) != null ? C : It.find((P) => P !== h.currentTarget);
    (y = z(a.buttonRef)) != null && y.contains(E) || ($ = z(a.optionsRef)) != null && $.contains(E) || a.disabled.value || a.immediate.value && a.comboboxState.value !== 0 && (a.openCombobox(), Xt().nextFrame(() => {
      a.setActivationTrigger(1);
    }));
  }
  let b = _(() => {
    var h, C, y, $;
    return ($ = (y = (C = e.defaultValue) != null ? C : a.defaultValue.value !== void 0 ? (h = e.displayValue) == null ? void 0 : h.call(e, a.defaultValue.value) : null) != null ? y : a.defaultValue.value) != null ? $ : "";
  });
  return () => {
    var h, C, y, $, E, P, X;
    let O = { open: a.comboboxState.value === 0 }, { id: F, displayValue: H, onChange: x, ...D } = e, L = { "aria-controls": (h = a.optionsRef.value) == null ? void 0 : h.id, "aria-expanded": a.comboboxState.value === 0, "aria-activedescendant": a.activeOptionIndex.value === null ? void 0 : a.virtual.value ? (C = a.options.value.find((K) => !a.virtual.value.disabled(K.dataRef.value) && a.compare(K.dataRef.value, a.virtual.value.options[a.activeOptionIndex.value]))) == null ? void 0 : C.id : (y = a.options.value[a.activeOptionIndex.value]) == null ? void 0 : y.id, "aria-labelledby": (P = ($ = z(a.labelRef)) == null ? void 0 : $.id) != null ? P : (E = z(a.buttonRef)) == null ? void 0 : E.id, "aria-autocomplete": "list", id: F, onCompositionstart: d, onCompositionend: m, onKeydown: p, onInput: v, onFocus: w, onBlur: g, role: "combobox", type: (X = t.type) != null ? X : "text", tabIndex: 0, ref: a.inputRef, defaultValue: b.value, disabled: a.disabled.value === !0 ? !0 : void 0 };
    return ye({ ourProps: L, theirProps: D, slot: O, attrs: t, slots: o, features: ut.RenderStrategy | ut.Static, name: "ComboboxInput" });
  };
} }), Br = j({ name: "ComboboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, hold: { type: [Boolean], default: !1 } }, setup(e, { attrs: n, slots: t, expose: o }) {
  let r = cn("ComboboxOptions"), a = `headlessui-combobox-options-${Me()}`;
  o({ el: r.optionsRef, $el: r.optionsRef }), Le(() => {
    r.optionsPropsRef.value.static = e.static;
  }), Le(() => {
    r.optionsPropsRef.value.hold = e.hold;
  });
  let l = Tn(), s = _(() => l !== null ? (l.value & $e.Open) === $e.Open : r.comboboxState.value === 0);
  Li({ container: _(() => z(r.optionsRef)), enabled: _(() => r.comboboxState.value === 0), accept(i) {
    return i.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : i.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(i) {
    i.setAttribute("role", "none");
  } });
  function u(i) {
    i.preventDefault();
  }
  return () => {
    var i, c, d;
    let m = { open: r.comboboxState.value === 0 }, f = { "aria-labelledby": (d = (i = z(r.labelRef)) == null ? void 0 : i.id) != null ? d : (c = z(r.buttonRef)) == null ? void 0 : c.id, id: a, ref: r.optionsRef, role: "listbox", "aria-multiselectable": r.mode.value === 1 ? !0 : void 0, onMousedown: u }, p = On(e, ["hold"]);
    return ye({ ourProps: f, theirProps: p, slot: m, attrs: n, slots: r.virtual.value && r.comboboxState.value === 0 ? { ...t, default: () => [ue(Gi, {}, t.default)] } : t, features: ut.RenderStrategy | ut.Static, visible: s.value, name: "ComboboxOptions" });
  };
} }), Hn = j({ name: "ComboboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: !1 }, order: { type: [Number], default: null } }, setup(e, { slots: n, attrs: t, expose: o }) {
  let r = cn("ComboboxOption"), a = `headlessui-combobox-option-${Me()}`, l = k(null), s = _(() => {
    var b;
    return e.disabled || ((b = r.virtual.value) == null ? void 0 : b.disabled(e.value));
  });
  o({ el: l, $el: l });
  let u = _(() => {
    var b;
    return r.virtual.value ? r.activeOptionIndex.value === r.calculateIndex(e.value) : r.activeOptionIndex.value === null ? !1 : ((b = r.options.value[r.activeOptionIndex.value]) == null ? void 0 : b.id) === a;
  }), i = _(() => r.isSelected(e.value)), c = me(nl, null), d = _(() => ({ disabled: e.disabled, value: e.value, domRef: l, order: _(() => e.order) }));
  ie(() => r.registerOption(a, d)), be(() => r.unregisterOption(a, u.value)), Le(() => {
    let b = z(l);
    b && (c == null || c.value.measureElement(b));
  }), Le(() => {
    r.comboboxState.value === 0 && u.value && (r.virtual.value || r.activationTrigger.value !== 0 && Fe(() => {
      var b, h;
      return (h = (b = z(l)) == null ? void 0 : b.scrollIntoView) == null ? void 0 : h.call(b, { block: "nearest" });
    }));
  });
  function m(b) {
    b.preventDefault(), b.button === Ja.Left && (s.value || (r.selectOption(a), Ua() || requestAnimationFrame(() => {
      var h;
      return (h = z(r.inputRef)) == null ? void 0 : h.focus({ preventScroll: !0 });
    }), r.mode.value === 0 && r.closeCombobox()));
  }
  function f() {
    var b;
    if (e.disabled || (b = r.virtual.value) != null && b.disabled(e.value)) return r.goToOption(He.Nothing);
    let h = r.calculateIndex(e.value);
    r.goToOption(He.Specific, h);
  }
  let p = Mi();
  function v(b) {
    p.update(b);
  }
  function g(b) {
    var h;
    if (!p.wasMoved(b) || e.disabled || (h = r.virtual.value) != null && h.disabled(e.value) || u.value) return;
    let C = r.calculateIndex(e.value);
    r.goToOption(He.Specific, C, 0);
  }
  function w(b) {
    var h;
    p.wasMoved(b) && (e.disabled || (h = r.virtual.value) != null && h.disabled(e.value) || u.value && (r.optionsPropsRef.value.hold || r.goToOption(He.Nothing)));
  }
  return () => {
    let { disabled: b } = e, h = { active: u.value, selected: i.value, disabled: b }, C = { id: a, ref: l, role: "option", tabIndex: b === !0 ? void 0 : -1, "aria-disabled": b === !0 ? !0 : void 0, "aria-selected": i.value, disabled: void 0, onMousedown: m, onFocus: f, onPointerenter: v, onMouseenter: v, onPointermove: g, onMousemove: g, onPointerleave: w, onMouseleave: w }, y = On(e, ["order", "value"]);
    return ye({ ourProps: C, theirProps: y, slot: h, attrs: t, slots: n, name: "ComboboxOption" });
  };
} });
function Fr(e, n, t, o) {
  Gn.isServer || Le((r) => {
    e = e ?? window, e.addEventListener(n, t, o), r(() => e.removeEventListener(n, t, o));
  });
}
var rt = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(rt || {});
function Vr() {
  let e = k(0), n = k(!0);
  return Ga(n, "keydown", (t) => {
    t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
  }), e;
}
function ol(e) {
  if (!e) return /* @__PURE__ */ new Set();
  if (typeof e == "function") return new Set(e());
  let n = /* @__PURE__ */ new Set();
  for (let t of e.value) {
    let o = z(t);
    o instanceof HTMLElement && n.add(o);
  }
  return n;
}
var rl = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(rl || {});
let Pn = Object.assign(j({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: [Object, Function], default: k(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: n, slots: t, expose: o }) {
  let r = k(null);
  o({ el: r, $el: r });
  let a = _(() => ct(r)), l = k(!1);
  ie(() => l.value = !0), be(() => l.value = !1), Ki({ ownerDocument: a }, _(() => l.value && !!(e.features & 16)));
  let s = Yi({ ownerDocument: a, container: r, initialFocus: _(() => e.initialFocus) }, _(() => l.value && !!(e.features & 2)));
  Xi({ ownerDocument: a, container: r, containers: e.containers, previousActiveElement: s }, _(() => l.value && !!(e.features & 8)));
  let u = Vr();
  function i(f) {
    let p = z(r);
    p && ((v) => v())(() => {
      Pe(u.value, { [rt.Forwards]: () => {
        mt(p, Ke.First, { skipElements: [f.relatedTarget] });
      }, [rt.Backwards]: () => {
        mt(p, Ke.Last, { skipElements: [f.relatedTarget] });
      } });
    });
  }
  let c = k(!1);
  function d(f) {
    f.key === "Tab" && (c.value = !0, requestAnimationFrame(() => {
      c.value = !1;
    }));
  }
  function m(f) {
    if (!l.value) return;
    let p = ol(e.containers);
    z(r) instanceof HTMLElement && p.add(z(r));
    let v = f.relatedTarget;
    v instanceof HTMLElement && v.dataset.headlessuiFocusGuard !== "true" && (al(p, v) || (c.value ? mt(z(r), Pe(u.value, { [rt.Forwards]: () => Ke.Next, [rt.Backwards]: () => Ke.Previous }) | Ke.WrapAround, { relativeTo: f.target }) : f.target instanceof HTMLElement && an(f.target)));
  }
  return () => {
    let f = {}, p = { ref: r, onKeydown: d, onFocusout: m }, { features: v, initialFocus: g, containers: w, ...b } = e;
    return ue(ge, [!!(v & 4) && ue(Mt, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: i, features: Ot.Focusable }), ye({ ourProps: p, theirProps: { ...n, ...b }, slot: f, attrs: n, slots: t, name: "FocusTrap" }), !!(v & 4) && ue(Mt, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: i, features: Ot.Focusable })]);
  };
} }), { features: rl });
function qi(e) {
  let n = k(It.slice());
  return se([e], ([t], [o]) => {
    o === !0 && t === !1 ? $r(() => {
      n.value.splice(0);
    }) : o === !1 && t === !0 && (n.value = It.slice());
  }, { flush: "post" }), () => {
    var t;
    return (t = n.value.find((o) => o != null && o.isConnected)) != null ? t : null;
  };
}
function Ki({ ownerDocument: e }, n) {
  let t = qi(n);
  ie(() => {
    Le(() => {
      var o, r;
      n.value || ((o = e.value) == null ? void 0 : o.activeElement) === ((r = e.value) == null ? void 0 : r.body) && an(t());
    }, { flush: "post" });
  }), be(() => {
    n.value && an(t());
  });
}
function Yi({ ownerDocument: e, container: n, initialFocus: t }, o) {
  let r = k(null), a = k(!1);
  return ie(() => a.value = !0), be(() => a.value = !1), ie(() => {
    se([n, t, o], (l, s) => {
      if (l.every((i, c) => (s == null ? void 0 : s[c]) === i) || !o.value) return;
      let u = z(n);
      u && $r(() => {
        var i, c;
        if (!a.value) return;
        let d = z(t), m = (i = e.value) == null ? void 0 : i.activeElement;
        if (d) {
          if (d === m) {
            r.value = m;
            return;
          }
        } else if (u.contains(m)) {
          r.value = m;
          return;
        }
        d ? an(d) : mt(u, Ke.First | Ke.NoScroll) === jn.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), r.value = (c = e.value) == null ? void 0 : c.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), r;
}
function Xi({ ownerDocument: e, container: n, containers: t, previousActiveElement: o }, r) {
  var a;
  Fr((a = e.value) == null ? void 0 : a.defaultView, "focus", (l) => {
    if (!r.value) return;
    let s = ol(t);
    z(n) instanceof HTMLElement && s.add(z(n));
    let u = o.value;
    if (!u) return;
    let i = l.target;
    i && i instanceof HTMLElement ? al(s, i) ? (o.value = i, an(i)) : (l.preventDefault(), l.stopPropagation(), an(u)) : an(o.value);
  }, !0);
}
function al(e, n) {
  for (let t of e) if (t.contains(n)) return !0;
  return !1;
}
function Ji(e) {
  let n = _o(e.getSnapshot());
  return be(e.subscribe(() => {
    n.value = e.getSnapshot();
  })), n;
}
function Qi(e, n) {
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
function Zi() {
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
function eu() {
  return Wa() ? { before({ doc: e, d: n, meta: t }) {
    function o(r) {
      return t.containers.flatMap((a) => a()).some((a) => a.contains(r));
    }
    n.microTask(() => {
      var r;
      if (window.getComputedStyle(e.documentElement).scrollBehavior !== "auto") {
        let s = Xt();
        s.style(e.documentElement, "scrollBehavior", "auto"), n.add(() => n.microTask(() => s.dispose()));
      }
      let a = (r = window.scrollY) != null ? r : window.pageYOffset, l = null;
      n.addEventListener(e, "click", (s) => {
        if (s.target instanceof HTMLElement) try {
          let u = s.target.closest("a");
          if (!u) return;
          let { hash: i } = new URL(u.href), c = e.querySelector(i);
          c && !o(c) && (l = c);
        } catch {
        }
      }, !0), n.addEventListener(e, "touchstart", (s) => {
        if (s.target instanceof HTMLElement) if (o(s.target)) {
          let u = s.target;
          for (; u.parentElement && o(u.parentElement); ) u = u.parentElement;
          n.style(u, "overscrollBehavior", "contain");
        } else n.style(s.target, "touchAction", "none");
      }), n.addEventListener(e, "touchmove", (s) => {
        if (s.target instanceof HTMLElement) {
          if (s.target.tagName === "INPUT") return;
          if (o(s.target)) {
            let u = s.target;
            for (; u.parentElement && u.dataset.headlessuiPortal !== "" && !(u.scrollHeight > u.clientHeight || u.scrollWidth > u.clientWidth); ) u = u.parentElement;
            u.dataset.headlessuiPortal === "" && s.preventDefault();
          } else s.preventDefault();
        }
      }, { passive: !1 }), n.add(() => {
        var s;
        let u = (s = window.scrollY) != null ? s : window.pageYOffset;
        a !== u && window.scrollTo(0, a), l && l.isConnected && (l.scrollIntoView({ block: "nearest" }), l = null);
      });
    });
  } } : {};
}
function tu() {
  return { before({ doc: e, d: n }) {
    n.style(e.documentElement, "overflow", "hidden");
  } };
}
function nu(e) {
  let n = {};
  for (let t of e) Object.assign(n, t(n));
  return n;
}
let rn = Qi(() => /* @__PURE__ */ new Map(), { PUSH(e, n) {
  var t;
  let o = (t = this.get(e)) != null ? t : { doc: e, count: 0, d: Xt(), meta: /* @__PURE__ */ new Set() };
  return o.count++, o.meta.add(n), this.set(e, o), this;
}, POP(e, n) {
  let t = this.get(e);
  return t && (t.count--, t.meta.delete(n)), this;
}, SCROLL_PREVENT({ doc: e, d: n, meta: t }) {
  let o = { doc: e, d: n, meta: nu(t) }, r = [eu(), Zi(), tu()];
  r.forEach(({ before: a }) => a == null ? void 0 : a(o)), r.forEach(({ after: a }) => a == null ? void 0 : a(o));
}, SCROLL_ALLOW({ d: e }) {
  e.dispose();
}, TEARDOWN({ doc: e }) {
  this.delete(e);
} });
rn.subscribe(() => {
  let e = rn.getSnapshot(), n = /* @__PURE__ */ new Map();
  for (let [t] of e) n.set(t, t.documentElement.style.overflow);
  for (let t of e.values()) {
    let o = n.get(t.doc) === "hidden", r = t.count !== 0;
    (r && !o || !r && o) && rn.dispatch(t.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", t), t.count === 0 && rn.dispatch("TEARDOWN", t);
  }
});
function ou(e, n, t) {
  let o = Ji(rn), r = _(() => {
    let a = e.value ? o.value.get(e.value) : void 0;
    return a ? a.count > 0 : !1;
  });
  return se([e, n], ([a, l], [s], u) => {
    if (!a || !l) return;
    rn.dispatch("PUSH", a, t);
    let i = !1;
    u(() => {
      i || (rn.dispatch("POP", s ?? a, t), i = !0);
    });
  }, { immediate: !0 }), r;
}
let Wo = /* @__PURE__ */ new Map(), In = /* @__PURE__ */ new Map();
function ua(e, n = k(!0)) {
  Le((t) => {
    var o;
    if (!n.value) return;
    let r = z(e);
    if (!r) return;
    t(function() {
      var l;
      if (!r) return;
      let s = (l = In.get(r)) != null ? l : 1;
      if (s === 1 ? In.delete(r) : In.set(r, s - 1), s !== 1) return;
      let u = Wo.get(r);
      u && (u["aria-hidden"] === null ? r.removeAttribute("aria-hidden") : r.setAttribute("aria-hidden", u["aria-hidden"]), r.inert = u.inert, Wo.delete(r));
    });
    let a = (o = In.get(r)) != null ? o : 0;
    In.set(r, a + 1), a === 0 && (Wo.set(r, { "aria-hidden": r.getAttribute("aria-hidden"), inert: r.inert }), r.setAttribute("aria-hidden", "true"), r.inert = !0);
  });
}
function ll({ defaultContainers: e = [], portals: n, mainTreeNodeRef: t } = {}) {
  let o = k(null), r = ct(o);
  function a() {
    var l, s, u;
    let i = [];
    for (let c of e) c !== null && (c instanceof HTMLElement ? i.push(c) : "value" in c && c.value instanceof HTMLElement && i.push(c.value));
    if (n != null && n.value) for (let c of n.value) i.push(c);
    for (let c of (l = r == null ? void 0 : r.querySelectorAll("html > *, body > *")) != null ? l : []) c !== document.body && c !== document.head && c instanceof HTMLElement && c.id !== "headlessui-portal-root" && (c.contains(z(o)) || c.contains((u = (s = z(o)) == null ? void 0 : s.getRootNode()) == null ? void 0 : u.host) || i.some((d) => c.contains(d)) || i.push(c));
    return i;
  }
  return { resolveContainers: a, contains(l) {
    return a().some((s) => s.contains(l));
  }, mainTreeNodeRef: o, MainTreeNode() {
    return t != null ? null : ue(Mt, { features: Ot.Hidden, ref: o });
  } };
}
function ru() {
  let e = k(null);
  return { mainTreeNodeRef: e, MainTreeNode() {
    return ue(Mt, { features: Ot.Hidden, ref: e });
  } };
}
let sl = Symbol("ForcePortalRootContext");
function au() {
  return me(sl, !1);
}
let sr = j({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: n, attrs: t }) {
  return ke(sl, e.force), () => {
    let { force: o, ...r } = e;
    return ye({ theirProps: r, ourProps: {}, slot: {}, slots: n, attrs: t, name: "ForcePortalRoot" });
  };
} }), il = Symbol("StackContext");
var ir = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(ir || {});
function lu() {
  return me(il, () => {
  });
}
function su({ type: e, enabled: n, element: t, onUpdate: o }) {
  let r = lu();
  function a(...l) {
    o == null || o(...l), r(...l);
  }
  ie(() => {
    se(n, (l, s) => {
      l ? a(0, e, t) : s === !0 && a(1, e, t);
    }, { immediate: !0, flush: "sync" });
  }), be(() => {
    n.value && a(1, e, t);
  }), ke(il, a);
}
let ul = Symbol("DescriptionContext");
function iu() {
  let e = me(ul, null);
  if (e === null) throw new Error("Missing parent");
  return e;
}
function cl({ slot: e = k({}), name: n = "Description", props: t = {} } = {}) {
  let o = k([]);
  function r(a) {
    return o.value.push(a), () => {
      let l = o.value.indexOf(a);
      l !== -1 && o.value.splice(l, 1);
    };
  }
  return ke(ul, { register: r, slot: e, name: n, props: t }), _(() => o.value.length > 0 ? o.value.join(" ") : void 0);
}
j({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: () => `headlessui-description-${Me()}` } }, setup(e, { attrs: n, slots: t }) {
  let o = iu();
  return ie(() => be(o.register(e.id))), () => {
    let { name: r = "Description", slot: a = k({}), props: l = {} } = o, { id: s, ...u } = e, i = { ...Object.entries(l).reduce((c, [d, m]) => Object.assign(c, { [d]: I(m) }), {}), id: s };
    return ye({ ourProps: i, theirProps: u, slot: a.value, attrs: n, slots: t, name: r });
  };
} });
function uu(e) {
  let n = ct(e);
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
  let o = k(null), r = _(() => ct(o)), a = au(), l = me(pl, null), s = k(a === !0 || l == null ? uu(o.value) : l.resolveTarget()), u = k(!1);
  ie(() => {
    u.value = !0;
  }), Le(() => {
    a || l != null && (s.value = l.resolveTarget());
  });
  let i = me(ur, null), c = !1, d = _a();
  return se(o, () => {
    if (c || !i) return;
    let m = z(o);
    m && (be(i.register(m), d), c = !0);
  }), be(() => {
    var m, f;
    let p = (m = r.value) == null ? void 0 : m.getElementById("headlessui-portal-root");
    p && s.value === p && s.value.children.length <= 0 && ((f = s.value.parentElement) == null || f.removeChild(s.value));
  }), () => {
    if (!u.value || s.value === null) return null;
    let m = { ref: o, "data-headlessui-portal": "" };
    return ue(Eo, { to: s.value }, ye({ ourProps: m, theirProps: e, slot: {}, attrs: t, slots: n, name: "Portal" }));
  };
} }), ur = Symbol("PortalParentContext");
function fl() {
  let e = me(ur, null), n = k([]);
  function t(a) {
    return n.value.push(a), e && e.register(a), () => o(a);
  }
  function o(a) {
    let l = n.value.indexOf(a);
    l !== -1 && n.value.splice(l, 1), e && e.unregister(a);
  }
  let r = { register: t, unregister: o, portals: n };
  return [n, j({ name: "PortalWrapper", setup(a, { slots: l }) {
    return ke(ur, r), () => {
      var s;
      return (s = l.default) == null ? void 0 : s.call(l);
    };
  } })];
}
let pl = Symbol("PortalGroupContext"), cu = j({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: n, slots: t }) {
  let o = Wn({ resolveTarget() {
    return e.target;
  } });
  return ke(pl, o), () => {
    let { target: r, ...a } = e;
    return ye({ theirProps: a, ourProps: {}, slot: {}, attrs: n, slots: t, name: "PortalGroup" });
  };
} });
var du = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(du || {});
let cr = Symbol("DialogContext");
function qn(e) {
  let n = me(cr, null);
  if (n === null) {
    let t = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t, qn), t;
  }
  return n;
}
let eo = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", fu = j({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: eo }, initialFocus: { type: Object, default: null }, id: { type: String, default: () => `headlessui-dialog-${Me()}` }, role: { type: String, default: "dialog" } }, emits: { close: (e) => !0 }, setup(e, { emit: n, attrs: t, slots: o, expose: r }) {
  var a;
  let l = k(!1);
  ie(() => {
    l.value = !0;
  });
  let s = !1, u = _(() => e.role === "dialog" || e.role === "alertdialog" ? e.role : (s || (s = !0, console.warn(`Invalid role [${u}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog")), i = k(0), c = Tn(), d = _(() => e.open === eo && c !== null ? (c.value & $e.Open) === $e.Open : e.open), m = k(null), f = _(() => ct(m));
  if (r({ el: m, $el: m }), !(e.open !== eo || c !== null)) throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof d.value != "boolean") throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${d.value === eo ? void 0 : e.open}`);
  let p = _(() => l.value && d.value ? 0 : 1), v = _(() => p.value === 0), g = _(() => i.value > 1), w = me(cr, null) !== null, [b, h] = fl(), { resolveContainers: C, mainTreeNodeRef: y, MainTreeNode: $ } = ll({ portals: b, defaultContainers: [_(() => {
    var oe;
    return (oe = L.panelRef.value) != null ? oe : m.value;
  })] }), E = _(() => g.value ? "parent" : "leaf"), P = _(() => c !== null ? (c.value & $e.Closing) === $e.Closing : !1), X = _(() => w || P.value ? !1 : v.value), O = _(() => {
    var oe, _e, Ue;
    return (Ue = Array.from((_e = (oe = f.value) == null ? void 0 : oe.querySelectorAll("body > *")) != null ? _e : []).find((Ve) => Ve.id === "headlessui-portal-root" ? !1 : Ve.contains(z(y)) && Ve instanceof HTMLElement)) != null ? Ue : null;
  });
  ua(O, X);
  let F = _(() => g.value ? !0 : v.value), H = _(() => {
    var oe, _e, Ue;
    return (Ue = Array.from((_e = (oe = f.value) == null ? void 0 : oe.querySelectorAll("[data-headlessui-portal]")) != null ? _e : []).find((Ve) => Ve.contains(z(y)) && Ve instanceof HTMLElement)) != null ? Ue : null;
  });
  ua(H, F), su({ type: "Dialog", enabled: _(() => p.value === 0), element: m, onUpdate: (oe, _e) => {
    if (_e === "Dialog") return Pe(oe, { [ir.Add]: () => i.value += 1, [ir.Remove]: () => i.value -= 1 });
  } });
  let x = cl({ name: "DialogDescription", slot: _(() => ({ open: d.value })) }), D = k(null), L = { titleId: D, panelRef: k(null), dialogState: p, setTitleId(oe) {
    D.value !== oe && (D.value = oe);
  }, close() {
    n("close", !1);
  } };
  ke(cr, L);
  let K = _(() => !(!v.value || g.value));
  Pr(C, (oe, _e) => {
    oe.preventDefault(), L.close(), Fe(() => _e == null ? void 0 : _e.focus());
  }, K);
  let Q = _(() => !(g.value || p.value !== 0));
  Fr((a = f.value) == null ? void 0 : a.defaultView, "keydown", (oe) => {
    Q.value && (oe.defaultPrevented || oe.key === Te.Escape && (oe.preventDefault(), oe.stopPropagation(), L.close()));
  });
  let pe = _(() => !(P.value || p.value !== 0 || w));
  return ou(f, pe, (oe) => {
    var _e;
    return { containers: [...(_e = oe.containers) != null ? _e : [], C] };
  }), Le((oe) => {
    if (p.value !== 0) return;
    let _e = z(m);
    if (!_e) return;
    let Ue = new ResizeObserver((Ve) => {
      for (let Qt of Ve) {
        let xt = Qt.target.getBoundingClientRect();
        xt.x === 0 && xt.y === 0 && xt.width === 0 && xt.height === 0 && L.close();
      }
    });
    Ue.observe(_e), oe(() => Ue.disconnect());
  }), () => {
    let { id: oe, open: _e, initialFocus: Ue, ...Ve } = e, Qt = { ...t, ref: m, id: oe, role: u.value, "aria-modal": p.value === 0 ? !0 : void 0, "aria-labelledby": D.value, "aria-describedby": x.value }, xt = { open: p.value === 0 };
    return ue(sr, { force: !0 }, () => [ue(dl, () => ue(cu, { target: m.value }, () => ue(sr, { force: !1 }, () => ue(Pn, { initialFocus: Ue, containers: C, features: v.value ? Pe(E.value, { parent: Pn.features.RestoreFocus, leaf: Pn.features.All & ~Pn.features.FocusLock }) : Pn.features.None }, () => ue(h, {}, () => ye({ ourProps: Qt, theirProps: { ...Ve, ...t }, slot: xt, attrs: t, slots: o, visible: p.value === 0, features: ut.RenderStrategy | ut.Static, name: "Dialog" })))))), ue($)]);
  };
} });
j({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-overlay-${Me()}` } }, setup(e, { attrs: n, slots: t }) {
  let o = qn("DialogOverlay");
  function r(a) {
    a.target === a.currentTarget && (a.preventDefault(), a.stopPropagation(), o.close());
  }
  return () => {
    let { id: a, ...l } = e;
    return ye({ ourProps: { id: a, "aria-hidden": !0, onClick: r }, theirProps: l, slot: { open: o.dialogState.value === 0 }, attrs: n, slots: t, name: "DialogOverlay" });
  };
} });
j({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-backdrop-${Me()}` } }, inheritAttrs: !1, setup(e, { attrs: n, slots: t, expose: o }) {
  let r = qn("DialogBackdrop"), a = k(null);
  return o({ el: a, $el: a }), ie(() => {
    if (r.panelRef.value === null) throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { id: l, ...s } = e, u = { id: l, ref: a, "aria-hidden": !0 };
    return ue(sr, { force: !0 }, () => ue(dl, () => ye({ ourProps: u, theirProps: { ...n, ...s }, slot: { open: r.dialogState.value === 0 }, attrs: n, slots: t, name: "DialogBackdrop" })));
  };
} });
let pu = j({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-panel-${Me()}` } }, setup(e, { attrs: n, slots: t, expose: o }) {
  let r = qn("DialogPanel");
  o({ el: r.panelRef, $el: r.panelRef });
  function a(l) {
    l.stopPropagation();
  }
  return () => {
    let { id: l, ...s } = e, u = { id: l, ref: r.panelRef, onClick: a };
    return ye({ ourProps: u, theirProps: s, slot: { open: r.dialogState.value === 0 }, attrs: n, slots: t, name: "DialogPanel" });
  };
} }), mu = j({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: () => `headlessui-dialog-title-${Me()}` } }, setup(e, { attrs: n, slots: t }) {
  let o = qn("DialogTitle");
  return ie(() => {
    o.setTitleId(e.id), be(() => o.setTitleId(null));
  }), () => {
    let { id: r, ...a } = e;
    return ye({ ourProps: { id: r }, theirProps: a, slot: { open: o.dialogState.value === 0 }, attrs: n, slots: t, name: "DialogTitle" });
  };
} });
var vu = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(vu || {});
let ml = Symbol("PopoverContext");
function Mo(e) {
  let n = me(ml, null);
  if (n === null) {
    let t = new Error(`<${e} /> is missing a parent <${bl.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t, Mo), t;
  }
  return n;
}
let vl = Symbol("PopoverGroupContext");
function hl() {
  return me(vl, null);
}
let gl = Symbol("PopoverPanelContext");
function hu() {
  return me(gl, null);
}
let bl = j({ name: "Popover", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: n, attrs: t, expose: o }) {
  var r;
  let a = k(null);
  o({ el: a, $el: a });
  let l = k(1), s = k(null), u = k(null), i = k(null), c = k(null), d = _(() => ct(a)), m = _(() => {
    var y, $;
    if (!z(s) || !z(c)) return !1;
    for (let x of document.querySelectorAll("body > *")) if (Number(x == null ? void 0 : x.contains(z(s))) ^ Number(x == null ? void 0 : x.contains(z(c)))) return !0;
    let E = Ao(), P = E.indexOf(z(s)), X = (P + E.length - 1) % E.length, O = (P + 1) % E.length, F = E[X], H = E[O];
    return !((y = z(c)) != null && y.contains(F)) && !(($ = z(c)) != null && $.contains(H));
  }), f = { popoverState: l, buttonId: k(null), panelId: k(null), panel: c, button: s, isPortalled: m, beforePanelSentinel: u, afterPanelSentinel: i, togglePopover() {
    l.value = Pe(l.value, { 0: 1, 1: 0 });
  }, closePopover() {
    l.value !== 1 && (l.value = 1);
  }, close(y) {
    f.closePopover();
    let $ = y ? y instanceof HTMLElement ? y : y.value instanceof HTMLElement ? z(y) : z(f.button) : z(f.button);
    $ == null || $.focus();
  } };
  ke(ml, f), Rr(_(() => Pe(l.value, { 0: $e.Open, 1: $e.Closed })));
  let p = { buttonId: f.buttonId, panelId: f.panelId, close() {
    f.closePopover();
  } }, v = hl(), g = v == null ? void 0 : v.registerPopover, [w, b] = fl(), h = ll({ mainTreeNodeRef: v == null ? void 0 : v.mainTreeNodeRef, portals: w, defaultContainers: [s, c] });
  function C() {
    var y, $, E, P;
    return (P = v == null ? void 0 : v.isFocusWithinPopoverGroup()) != null ? P : ((y = d.value) == null ? void 0 : y.activeElement) && ((($ = z(s)) == null ? void 0 : $.contains(d.value.activeElement)) || ((E = z(c)) == null ? void 0 : E.contains(d.value.activeElement)));
  }
  return Le(() => g == null ? void 0 : g(p)), Fr((r = d.value) == null ? void 0 : r.defaultView, "focus", (y) => {
    var $, E;
    y.target !== window && y.target instanceof HTMLElement && l.value === 0 && (C() || s && c && (h.contains(y.target) || ($ = z(f.beforePanelSentinel)) != null && $.contains(y.target) || (E = z(f.afterPanelSentinel)) != null && E.contains(y.target) || f.closePopover()));
  }, !0), Pr(h.resolveContainers, (y, $) => {
    var E;
    f.closePopover(), ja($, Dr.Loose) || (y.preventDefault(), (E = z(s)) == null || E.focus());
  }, _(() => l.value === 0)), () => {
    let y = { open: l.value === 0, close: f.close };
    return ue(ge, [ue(b, {}, () => ye({ theirProps: { ...e, ...t }, ourProps: { ref: a }, slot: y, slots: n, attrs: t, name: "Popover" })), ue(h.MainTreeNode)]);
  };
} }), gu = j({ name: "PopoverButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: !1 }, id: { type: String, default: () => `headlessui-popover-button-${Me()}` } }, inheritAttrs: !1, setup(e, { attrs: n, slots: t, expose: o }) {
  let r = Mo("PopoverButton"), a = _(() => ct(r.button));
  o({ el: r.button, $el: r.button }), ie(() => {
    r.buttonId.value = e.id;
  }), be(() => {
    r.buttonId.value = null;
  });
  let l = hl(), s = l == null ? void 0 : l.closeOthers, u = hu(), i = _(() => u === null ? !1 : u.value === r.panelId.value), c = k(null), d = `headlessui-focus-sentinel-${Me()}`;
  i.value || Le(() => {
    r.button.value = z(c);
  });
  let m = Ir(_(() => ({ as: e.as, type: n.type })), c);
  function f(h) {
    var C, y, $, E, P;
    if (i.value) {
      if (r.popoverState.value === 1) return;
      switch (h.key) {
        case Te.Space:
        case Te.Enter:
          h.preventDefault(), (y = (C = h.target).click) == null || y.call(C), r.closePopover(), ($ = z(r.button)) == null || $.focus();
          break;
      }
    } else switch (h.key) {
      case Te.Space:
      case Te.Enter:
        h.preventDefault(), h.stopPropagation(), r.popoverState.value === 1 && (s == null || s(r.buttonId.value)), r.togglePopover();
        break;
      case Te.Escape:
        if (r.popoverState.value !== 0) return s == null ? void 0 : s(r.buttonId.value);
        if (!z(r.button) || (E = a.value) != null && E.activeElement && !((P = z(r.button)) != null && P.contains(a.value.activeElement))) return;
        h.preventDefault(), h.stopPropagation(), r.closePopover();
        break;
    }
  }
  function p(h) {
    i.value || h.key === Te.Space && h.preventDefault();
  }
  function v(h) {
    var C, y;
    e.disabled || (i.value ? (r.closePopover(), (C = z(r.button)) == null || C.focus()) : (h.preventDefault(), h.stopPropagation(), r.popoverState.value === 1 && (s == null || s(r.buttonId.value)), r.togglePopover(), (y = z(r.button)) == null || y.focus()));
  }
  function g(h) {
    h.preventDefault(), h.stopPropagation();
  }
  let w = Vr();
  function b() {
    let h = z(r.panel);
    if (!h) return;
    function C() {
      Pe(w.value, { [rt.Forwards]: () => mt(h, Ke.First), [rt.Backwards]: () => mt(h, Ke.Last) }) === jn.Error && mt(Ao().filter((y) => y.dataset.headlessuiFocusGuard !== "true"), Pe(w.value, { [rt.Forwards]: Ke.Next, [rt.Backwards]: Ke.Previous }), { relativeTo: z(r.button) });
    }
    C();
  }
  return () => {
    let h = r.popoverState.value === 0, C = { open: h }, { id: y, ...$ } = e, E = i.value ? { ref: c, type: m.value, onKeydown: f, onClick: v } : { ref: c, id: y, type: m.value, "aria-expanded": r.popoverState.value === 0, "aria-controls": z(r.panel) ? r.panelId.value : void 0, disabled: e.disabled ? !0 : void 0, onKeydown: f, onKeyup: p, onClick: v, onMousedown: g };
    return ue(ge, [ye({ ourProps: E, theirProps: { ...n, ...$ }, slot: C, attrs: n, slots: t, name: "PopoverButton" }), h && !i.value && r.isPortalled.value && ue(Mt, { id: d, features: Ot.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: b })]);
  };
} });
j({ name: "PopoverOverlay", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 } }, setup(e, { attrs: n, slots: t }) {
  let o = Mo("PopoverOverlay"), r = `headlessui-popover-overlay-${Me()}`, a = Tn(), l = _(() => a !== null ? (a.value & $e.Open) === $e.Open : o.popoverState.value === 0);
  function s() {
    o.closePopover();
  }
  return () => {
    let u = { open: o.popoverState.value === 0 };
    return ye({ ourProps: { id: r, "aria-hidden": !0, onClick: s }, theirProps: e, slot: u, attrs: n, slots: t, features: ut.RenderStrategy | ut.Static, visible: l.value, name: "PopoverOverlay" });
  };
} });
let bu = j({ name: "PopoverPanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, focus: { type: Boolean, default: !1 }, id: { type: String, default: () => `headlessui-popover-panel-${Me()}` } }, inheritAttrs: !1, setup(e, { attrs: n, slots: t, expose: o }) {
  let { focus: r } = e, a = Mo("PopoverPanel"), l = _(() => ct(a.panel)), s = `headlessui-focus-sentinel-before-${Me()}`, u = `headlessui-focus-sentinel-after-${Me()}`;
  o({ el: a.panel, $el: a.panel }), ie(() => {
    a.panelId.value = e.id;
  }), be(() => {
    a.panelId.value = null;
  }), ke(gl, a.panelId), Le(() => {
    var g, w;
    if (!r || a.popoverState.value !== 0 || !a.panel) return;
    let b = (g = l.value) == null ? void 0 : g.activeElement;
    (w = z(a.panel)) != null && w.contains(b) || mt(z(a.panel), Ke.First);
  });
  let i = Tn(), c = _(() => i !== null ? (i.value & $e.Open) === $e.Open : a.popoverState.value === 0);
  function d(g) {
    var w, b;
    switch (g.key) {
      case Te.Escape:
        if (a.popoverState.value !== 0 || !z(a.panel) || l.value && !((w = z(a.panel)) != null && w.contains(l.value.activeElement))) return;
        g.preventDefault(), g.stopPropagation(), a.closePopover(), (b = z(a.button)) == null || b.focus();
        break;
    }
  }
  function m(g) {
    var w, b, h, C, y;
    let $ = g.relatedTarget;
    $ && z(a.panel) && ((w = z(a.panel)) != null && w.contains($) || (a.closePopover(), ((h = (b = z(a.beforePanelSentinel)) == null ? void 0 : b.contains) != null && h.call(b, $) || (y = (C = z(a.afterPanelSentinel)) == null ? void 0 : C.contains) != null && y.call(C, $)) && $.focus({ preventScroll: !0 })));
  }
  let f = Vr();
  function p() {
    let g = z(a.panel);
    if (!g) return;
    function w() {
      Pe(f.value, { [rt.Forwards]: () => {
        var b;
        mt(g, Ke.First) === jn.Error && ((b = z(a.afterPanelSentinel)) == null || b.focus());
      }, [rt.Backwards]: () => {
        var b;
        (b = z(a.button)) == null || b.focus({ preventScroll: !0 });
      } });
    }
    w();
  }
  function v() {
    let g = z(a.panel);
    if (!g) return;
    function w() {
      Pe(f.value, { [rt.Forwards]: () => {
        let b = z(a.button), h = z(a.panel);
        if (!b) return;
        let C = Ao(), y = C.indexOf(b), $ = C.slice(0, y + 1), E = [...C.slice(y + 1), ...$];
        for (let P of E.slice()) if (P.dataset.headlessuiFocusGuard === "true" || h != null && h.contains(P)) {
          let X = E.indexOf(P);
          X !== -1 && E.splice(X, 1);
        }
        mt(E, Ke.First, { sorted: !1 });
      }, [rt.Backwards]: () => {
        var b;
        mt(g, Ke.Previous) === jn.Error && ((b = z(a.button)) == null || b.focus());
      } });
    }
    w();
  }
  return () => {
    let g = { open: a.popoverState.value === 0, close: a.close }, { id: w, focus: b, ...h } = e, C = { ref: a.panel, id: w, onKeydown: d, onFocusout: r && a.popoverState.value === 0 ? m : void 0, tabIndex: -1 };
    return ye({ ourProps: C, theirProps: { ...n, ...h }, attrs: n, slot: g, slots: { ...t, default: (...y) => {
      var $;
      return [ue(ge, [c.value && a.isPortalled.value && ue(Mt, { id: s, ref: a.beforePanelSentinel, features: Ot.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: p }), ($ = t.default) == null ? void 0 : $.call(t, ...y), c.value && a.isPortalled.value && ue(Mt, { id: u, ref: a.afterPanelSentinel, features: Ot.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: v })])];
    } }, features: ut.RenderStrategy | ut.Static, visible: c.value, name: "PopoverPanel" });
  };
} });
j({ name: "PopoverGroup", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" } }, setup(e, { attrs: n, slots: t, expose: o }) {
  let r = k(null), a = _o([]), l = _(() => ct(r)), s = ru();
  o({ el: r, $el: r });
  function u(m) {
    let f = a.value.indexOf(m);
    f !== -1 && a.value.splice(f, 1);
  }
  function i(m) {
    return a.value.push(m), () => {
      u(m);
    };
  }
  function c() {
    var m;
    let f = l.value;
    if (!f) return !1;
    let p = f.activeElement;
    return (m = z(r)) != null && m.contains(p) ? !0 : a.value.some((v) => {
      var g, w;
      return ((g = f.getElementById(v.buttonId.value)) == null ? void 0 : g.contains(p)) || ((w = f.getElementById(v.panelId.value)) == null ? void 0 : w.contains(p));
    });
  }
  function d(m) {
    for (let f of a.value) f.buttonId.value !== m && f.close();
  }
  return ke(vl, { registerPopover: i, unregisterPopover: u, isFocusWithinPopoverGroup: c, closeOthers: d, mainTreeNodeRef: s.mainTreeNodeRef }), () => ue(ge, [ye({ ourProps: { ref: r }, theirProps: { ...e, ...n }, slot: {}, attrs: n, slots: t, name: "PopoverGroup" }), ue(s.MainTreeNode)]);
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
function yu({ slot: e = {}, name: n = "Label", props: t = {} } = {}) {
  let o = k([]);
  function r(a) {
    return o.value.push(a), () => {
      let l = o.value.indexOf(a);
      l !== -1 && o.value.splice(l, 1);
    };
  }
  return ke(yl, { register: r, slot: e, name: n, props: t }), _(() => o.value.length > 0 ? o.value.join(" ") : void 0);
}
j({ name: "Label", props: { as: { type: [Object, String], default: "label" }, passive: { type: [Boolean], default: !1 }, id: { type: String, default: () => `headlessui-label-${Me()}` } }, setup(e, { slots: n, attrs: t }) {
  let o = wl();
  return ie(() => be(o.register(e.id))), () => {
    let { name: r = "Label", slot: a = {}, props: l = {} } = o, { id: s, passive: u, ...i } = e, c = { ...Object.entries(l).reduce((d, [m, f]) => Object.assign(d, { [m]: I(f) }), {}), id: s };
    return u && (delete c.onClick, delete c.htmlFor, delete i.onClick), ye({ ourProps: c, theirProps: i, slot: a, attrs: t, slots: n, name: r });
  };
} });
let xl = Symbol("GroupContext");
j({ name: "SwitchGroup", props: { as: { type: [Object, String], default: "template" } }, setup(e, { slots: n, attrs: t }) {
  let o = k(null), r = yu({ name: "SwitchLabel", props: { htmlFor: _(() => {
    var l;
    return (l = o.value) == null ? void 0 : l.id;
  }), onClick(l) {
    o.value && (l.currentTarget.tagName === "LABEL" && l.preventDefault(), o.value.click(), o.value.focus({ preventScroll: !0 }));
  } } }), a = cl({ name: "SwitchDescription" });
  return ke(xl, { switchRef: o, labelledby: r, describedby: a }), () => ye({ theirProps: e, ourProps: {}, slot: {}, slots: n, attrs: t, name: "SwitchGroup" });
} });
let wu = j({ name: "Switch", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "button" }, modelValue: { type: Boolean, default: void 0 }, defaultChecked: { type: Boolean, optional: !0 }, form: { type: String, optional: !0 }, name: { type: String, optional: !0 }, value: { type: String, optional: !0 }, id: { type: String, default: () => `headlessui-switch-${Me()}` }, disabled: { type: Boolean, default: !1 }, tabIndex: { type: Number, default: 0 } }, inheritAttrs: !1, setup(e, { emit: n, attrs: t, slots: o, expose: r }) {
  let a = me(xl, null), [l, s] = za(_(() => e.modelValue), (g) => n("update:modelValue", g), _(() => e.defaultChecked));
  function u() {
    s(!l.value);
  }
  let i = k(null), c = a === null ? i : a.switchRef, d = Ir(_(() => ({ as: e.as, type: t.type })), c);
  r({ el: c, $el: c });
  function m(g) {
    g.preventDefault(), u();
  }
  function f(g) {
    g.key === Te.Space ? (g.preventDefault(), u()) : g.key === Te.Enter && zi(g.currentTarget);
  }
  function p(g) {
    g.preventDefault();
  }
  let v = _(() => {
    var g, w;
    return (w = (g = z(c)) == null ? void 0 : g.closest) == null ? void 0 : w.call(g, "form");
  });
  return ie(() => {
    se([v], () => {
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
    let { id: g, name: w, value: b, form: h, tabIndex: C, ...y } = e, $ = { checked: l.value }, E = { id: g, ref: c, role: "switch", type: d.value, tabIndex: C === -1 ? 0 : C, "aria-checked": l.value, "aria-labelledby": a == null ? void 0 : a.labelledby.value, "aria-describedby": a == null ? void 0 : a.describedby.value, onClick: m, onKeyup: f, onKeypress: p };
    return ue(ge, [w != null && l.value != null ? ue(Mt, Ya({ features: Ot.Hidden, as: "input", type: "checkbox", hidden: !0, readOnly: !0, checked: l.value, form: h, disabled: y.disabled, name: w, value: b })) : null, ye({ ourProps: E, theirProps: { ...t, ...On(y, ["modelValue", "defaultChecked"]) }, slot: $, attrs: t, slots: o, name: "Switch" })]);
  };
} });
function xu(e) {
  let n = { called: !1 };
  return (...t) => {
    if (!n.called) return n.called = !0, e(...t);
  };
}
function Uo(e, ...n) {
  e && n.length > 0 && e.classList.add(...n);
}
function to(e, ...n) {
  e && n.length > 0 && e.classList.remove(...n);
}
var dr = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(dr || {});
function ku(e, n) {
  let t = Xt();
  if (!e) return t.dispose;
  let { transitionDuration: o, transitionDelay: r } = getComputedStyle(e), [a, l] = [o, r].map((s) => {
    let [u = 0] = s.split(",").filter(Boolean).map((i) => i.includes("ms") ? parseFloat(i) : parseFloat(i) * 1e3).sort((i, c) => c - i);
    return u;
  });
  return a !== 0 ? t.setTimeout(() => n("finished"), a + l) : n("finished"), t.add(() => n("cancelled")), t.dispose;
}
function ca(e, n, t, o, r, a) {
  let l = Xt(), s = a !== void 0 ? xu(a) : () => {
  };
  return to(e, ...r), Uo(e, ...n, ...t), l.nextFrame(() => {
    to(e, ...t), Uo(e, ...o), l.add(ku(e, (u) => (to(e, ...o, ...n), Uo(e, ...r), s(u))));
  }), l.add(() => to(e, ...n, ...t, ...o, ...r)), l.add(() => s("cancelled")), l.dispose;
}
function Zt(e = "") {
  return e.split(/\s+/).filter((n) => n.length > 1);
}
let Nr = Symbol("TransitionContext");
var Cu = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(Cu || {});
function Su() {
  return me(Nr, null) !== null;
}
function _u() {
  let e = me(Nr, null);
  if (e === null) throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function Eu() {
  let e = me(zr, null);
  if (e === null) throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let zr = Symbol("NestingContext");
function Lo(e) {
  return "children" in e ? Lo(e.children) : e.value.filter(({ state: n }) => n === "visible").length > 0;
}
function kl(e) {
  let n = k([]), t = k(!1);
  ie(() => t.value = !0), be(() => t.value = !1);
  function o(a, l = jt.Hidden) {
    let s = n.value.findIndex(({ id: u }) => u === a);
    s !== -1 && (Pe(l, { [jt.Unmount]() {
      n.value.splice(s, 1);
    }, [jt.Hidden]() {
      n.value[s].state = "hidden";
    } }), !Lo(n) && t.value && (e == null || e()));
  }
  function r(a) {
    let l = n.value.find(({ id: s }) => s === a);
    return l ? l.state !== "visible" && (l.state = "visible") : n.value.push({ id: a, state: "visible" }), () => o(a, jt.Unmount);
  }
  return { children: n, register: r, unregister: o };
}
let Cl = ut.RenderStrategy, fr = j({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: n, attrs: t, slots: o, expose: r }) {
  let a = k(0);
  function l() {
    a.value |= $e.Opening, n("beforeEnter");
  }
  function s() {
    a.value &= ~$e.Opening, n("afterEnter");
  }
  function u() {
    a.value |= $e.Closing, n("beforeLeave");
  }
  function i() {
    a.value &= ~$e.Closing, n("afterLeave");
  }
  if (!Su() && Fi()) return () => ue(Sl, { ...e, onBeforeEnter: l, onAfterEnter: s, onBeforeLeave: u, onAfterLeave: i }, o);
  let c = k(null), d = _(() => e.unmount ? jt.Unmount : jt.Hidden);
  r({ el: c, $el: c });
  let { show: m, appear: f } = _u(), { register: p, unregister: v } = Eu(), g = k(m.value ? "visible" : "hidden"), w = { value: !0 }, b = Me(), h = { value: !1 }, C = kl(() => {
    !h.value && g.value !== "hidden" && (g.value = "hidden", v(b), i());
  });
  ie(() => {
    let x = p(b);
    be(x);
  }), Le(() => {
    if (d.value === jt.Hidden && b) {
      if (m.value && g.value !== "visible") {
        g.value = "visible";
        return;
      }
      Pe(g.value, { hidden: () => v(b), visible: () => p(b) });
    }
  });
  let y = Zt(e.enter), $ = Zt(e.enterFrom), E = Zt(e.enterTo), P = Zt(e.entered), X = Zt(e.leave), O = Zt(e.leaveFrom), F = Zt(e.leaveTo);
  ie(() => {
    Le(() => {
      if (g.value === "visible") {
        let x = z(c);
        if (x instanceof Comment && x.data === "") throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function H(x) {
    let D = w.value && !f.value, L = z(c);
    !L || !(L instanceof HTMLElement) || D || (h.value = !0, m.value && l(), m.value || u(), x(m.value ? ca(L, y, $, E, P, (K) => {
      h.value = !1, K === dr.Finished && s();
    }) : ca(L, X, O, F, P, (K) => {
      h.value = !1, K === dr.Finished && (Lo(C) || (g.value = "hidden", v(b), i()));
    })));
  }
  return ie(() => {
    se([m], (x, D, L) => {
      H(L), w.value = !1;
    }, { immediate: !0 });
  }), ke(zr, C), Rr(_(() => Pe(g.value, { visible: $e.Open, hidden: $e.Closed }) | a.value)), () => {
    let { appear: x, show: D, enter: L, enterFrom: K, enterTo: Q, entered: pe, leave: oe, leaveFrom: _e, leaveTo: Ue, ...Ve } = e, Qt = { ref: c }, xt = { ...Ve, ...f.value && m.value && Gn.isServer ? { class: V([t.class, Ve.class, ...y, ...$]) } : {} };
    return ye({ theirProps: xt, ourProps: Qt, slot: {}, slots: o, attrs: t, features: Cl, visible: g.value === "visible", name: "TransitionChild" });
  };
} }), Ou = fr, Sl = j({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: n, attrs: t, slots: o }) {
  let r = Tn(), a = _(() => e.show === null && r !== null ? (r.value & $e.Open) === $e.Open : e.show);
  Le(() => {
    if (![!0, !1].includes(a.value)) throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let l = k(a.value ? "visible" : "hidden"), s = kl(() => {
    l.value = "hidden";
  }), u = k(!0), i = { show: a, appear: _(() => e.appear || !u.value) };
  return ie(() => {
    Le(() => {
      u.value = !1, a.value ? l.value = "visible" : Lo(s) || (l.value = "hidden");
    });
  }), ke(zr, s), ke(Nr, i), () => {
    let c = On(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), d = { unmount: e.unmount };
    return ye({ ourProps: { ...d, as: "template" }, theirProps: {}, slot: {}, slots: { ...o, default: () => [ue(Ou, { onBeforeEnter: () => n("beforeEnter"), onAfterEnter: () => n("afterEnter"), onBeforeLeave: () => n("beforeLeave"), onAfterLeave: () => n("afterLeave"), ...t, ...d, ...c }, o.default)] }, attrs: {}, features: Cl, visible: l.value === "visible", name: "Transition" });
  };
} });
const Tu = { class: "relative" }, $u = { class: "flex items-start flex-wrap gap-1 p-1" }, Du = ["onClick"], Pu = { class: "sr-only" }, Iu = { key: 0 }, Ru = { key: 1 }, Au = { key: 1 }, Mu = { class: "border-t border-ring px-2 first:border-t-0 py-2 first:pt-0 last:pb-0" }, Lu = { class: "flex items-center text-base font-medium" }, Bu = { key: 1 }, Fu = { class: "-mx-2.5" }, Vu = { key: 1 }, Nu = { key: 1 }, Go = /* @__PURE__ */ j({
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
    const o = t, r = e, a = k(), l = k(""), s = k(), u = k(!1), i = _(() => l.value ? r.items.filter(
      (p) => r.displayProperty(p).toLowerCase().includes(l.value.toLowerCase())
    ) : r.items), { floatingStyles: c } = En(s, a, {
      strategy: "fixed",
      transform: !1,
      middleware: [
        _n({
          padding: 10,
          limiter: Tr({
            offset: 10
          })
        }),
        Ro({
          allowedPlacements: ["top-start", "bottom-start"]
        }),
        Sn(10),
        Or({
          apply({ availableHeight: p, elements: v }) {
            const g = v.reference.getBoundingClientRect().width;
            Object.assign(v.floating.style, {
              minWidth: `${g}px`,
              maxHeight: `${p - 20}px`
            });
          }
        })
      ],
      whileElementsMounted: Io
    }), d = (p, v) => p.reduce(
      (g, w) => {
        var b;
        return (g[b = v(w)] || (g[b] = [])).push(w), g;
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
      open: u
    }), (p, v) => (S(), A("div", {
      class: V(I(ae)("relative rounded-lg"))
    }, [
      q(I(Ar), {
        "model-value": p.modelValue,
        multiple: p.multiple,
        nullable: p.nullable,
        "onUpdate:modelValue": v[3] || (v[3] = (g) => p.$emit("update:modelValue", g))
      }, {
        default: G(() => {
          var g, w;
          return [
            T("div", Tu, [
              T("div", {
                ref_key: "reference",
                ref: s,
                class: V(
                  I(ae)(
                    "border border-ring rounded-md hover:bg-accent/50 shadow-xs focus-within:outline-none focus-within:ring-3 focus-within:ring-ring/40 transition-[box-shadow,color]",
                    p.theme.baseDropdownInputContainer
                  )
                )
              }, [
                T("div", $u, [
                  p.multiple && ((g = p.modelValue) != null && g.length) ? (S(!0), A(ge, { key: 0 }, We(p.modelValue, (b) => (S(), A("div", {
                    key: b[p.uidProperty],
                    class: "flex items-center gap-1 rounded-md bg-accent px-2 py-0.5 text-sm"
                  }, [
                    T("span", null, he(p.displayProperty(b)), 1),
                    T("button", {
                      type: "button",
                      class: "ml-1 rounded-full hover:bg-accent-foreground/20",
                      onClick: ln((h) => m(b), ["stop"])
                    }, [
                      T("span", Pu, "Remove " + he(p.displayProperty(b)), 1),
                      v[4] || (v[4] = T("svg", {
                        class: "size-3",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "2"
                      }, [
                        T("path", { d: "M18 6L6 18M6 6l12 12" })
                      ], -1))
                    ], 8, Du)
                  ]))), 128)) : le("", !0),
                  q(I(Lr), {
                    class: V([
                      "flex-1 min-w-[120px] rounded-md border-0 bg-transparent pl-2.5 py-0.5 pr-8 text-sm truncate ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50",
                      p.multiple && ((w = p.modelValue) != null && w.length) ? "pl-1" : "",
                      p.theme.baseDropdownInputText
                    ]),
                    displayValue: p.displayProperty,
                    placeholder: p.placeholder,
                    autoComplete: "off",
                    onFocus: v[0] || (v[0] = (b) => u.value = !0),
                    onBlur: v[1] || (v[1] = (b) => u.value = !1),
                    onChange: v[2] || (v[2] = (b) => l.value = b.target.value),
                    onKeydown: Ea(f, ["delete"])
                  }, null, 8, ["class", "displayValue", "placeholder"])
                ]),
                q(I(Mr), {
                  class: V([
                    "absolute inset-y-0 right-0 flex items-center pr-2 text-muted-foreground"
                  ])
                }, {
                  default: G(() => [
                    q(I(Oo), { class: "size-4 text-inherit" })
                  ]),
                  _: 1
                })
              ], 2),
              q(it, {
                "enter-active-class": "transition duration-200 ease-out",
                "enter-from-class": "translate-y-1 opacity-0",
                "enter-to-class": "translate-y-0 opacity-100",
                "leave-active-class": "transition duration-150 ease-in",
                "leave-from-class": "translate-y-0 opacity-100",
                "leave-to-class": "translate-y-1 opacity-0"
              }, {
                default: G(() => [
                  q(I(Br), {
                    ref_key: "floating",
                    ref: a,
                    class: V(
                      I(ae)(
                        "fixed left-0 z-10 overflow-x-hidden overflow-y-auto rounded-lg bg-popover p-3 text-base shadow-lg border border-ring focus:outline-hidden sm:text-sm",
                        p.theme.generalFloatingPanelContainer
                      )
                    ),
                    style: qt(I(c)),
                    static: p.isStatic
                  }, {
                    default: G(() => [
                      i.value.length === 0 ? (S(), A("div", Iu, [
                        p.$slots.empty ? U(p.$slots, "empty", { key: 0 }) : (S(), A("span", Ru, "No results"))
                      ])) : le("", !0),
                      p.groupBy ? (S(), A("div", Au, [
                        (S(!0), A(ge, null, We(d(
                          p.items,
                          (b) => b[p.groupBy]
                        ), (b, h) => (S(), A("div", Mu, [
                          T("div", Lu, [
                            p.$slots.group ? U(p.$slots, "group", Qe({
                              key: 0,
                              ref_for: !0
                            }, {
                              group: b,
                              groupName: h
                            })) : (S(), A("span", Bu, he([
                              "undefined",
                              null,
                              void 0
                            ].includes(h) ? "Uncategorized" : h), 1))
                          ]),
                          T("div", Fu, [
                            (S(!0), A(ge, null, We(b, (C) => {
                              var y;
                              return S(), fe(I(Hn), {
                                key: C[p.uidProperty],
                                value: C,
                                disabled: (y = p.disabledItems) == null ? void 0 : y.some(
                                  ($) => $[p.uidProperty] === C[p.uidProperty]
                                )
                              }, {
                                default: G(({ active: $, selected: E, disabled: P }) => [
                                  T("span", {
                                    class: V([
                                      "cursor-pointer hover:bg-accent rounded-md px-2 py-1 flex w-full truncate",
                                      $ && "bg-accent",
                                      E && "bg-accent",
                                      P && "opacity-50 cursor-not-allowed pointer-events-none"
                                    ])
                                  }, [
                                    p.$slots.item ? U(p.$slots, "item", Qe({
                                      key: 0,
                                      ref_for: !0
                                    }, {
                                      item: C,
                                      active: $,
                                      selected: E,
                                      disabled: P
                                    })) : (S(), A("span", Vu, he(p.displayProperty(C)), 1))
                                  ], 2)
                                ]),
                                _: 2
                              }, 1032, ["value", "disabled"]);
                            }), 128))
                          ])
                        ]))), 256))
                      ])) : (S(!0), A(ge, { key: 2 }, We(i.value, (b) => {
                        var h;
                        return S(), fe(I(Hn), {
                          key: b[p.uidProperty],
                          value: b,
                          disabled: (h = p.disabledItems) == null ? void 0 : h.some(
                            (C) => C[p.uidProperty] === b[p.uidProperty]
                          )
                        }, {
                          default: G(({ active: C, selected: y, disabled: $ }) => [
                            T("span", {
                              class: V([
                                "cursor-pointer hover:bg-accent rounded-md px-2 py-1 flex w-full truncate",
                                C && "bg-accent",
                                y && "bg-accent",
                                $ && "opacity-50 cursor-not-allowed pointer-events-none"
                              ])
                            }, [
                              p.$slots.item ? U(p.$slots, "item", Qe({
                                key: 0,
                                ref_for: !0
                              }, {
                                item: b,
                                active: C,
                                selected: y,
                                disabled: $
                              })) : (S(), A("span", Nu, he(p.displayProperty(b)), 1))
                            ], 2)
                          ]),
                          _: 2
                        }, 1032, ["value", "disabled"]);
                      }), 128)),
                      p.$slots.options ? U(p.$slots, "options", at(Qe({ key: 3 }, { filteredItems: i.value }))) : le("", !0)
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
}), zu = { class: "w-full space-y-3" }, ju = ["onClick"], Hu = /* @__PURE__ */ j({
  __name: "ColorPicker",
  props: {
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const t = e, o = k({
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
    }), r = _({
      get: () => t.modelValue,
      set: (u) => {
        a("update:modelValue", u);
      }
    }), a = n, l = k(""), s = (u) => {
      l.value = u, r.value = u, setTimeout(() => {
        l.value = "";
      }, 300);
    };
    return (u, i) => (S(), A("div", null, [
      T("div", zu, [
        (S(!0), A(ge, null, We(o.value, (c, d) => (S(), A("div", {
          key: `color-${d}`,
          class: "flex w-full items-center space-x-3"
        }, [
          (S(!0), A(ge, null, We(c, (m) => (S(), A("div", {
            key: `${d}-${m.name}`,
            class: V(
              I(wt)(
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
            l.value === m.hex ? (S(), A("div", {
              key: 0,
              class: V(["absolute inset-0 rounded-full animate-color-flash", m.background])
            }, null, 2)) : le("", !0)
          ], 10, ju))), 128))
        ]))), 128))
      ])
    ]));
  }
}), Wu = { class: "relative" }, _l = /* @__PURE__ */ j({
  __name: "Dropdown",
  setup(e, { expose: n }) {
    const t = k(!1), o = k(), r = k(/* @__PURE__ */ new Map()), a = k(null), l = () => Array.from(r.value.entries()).sort(([, c], [, d]) => {
      const m = c.compareDocumentPosition(d);
      return m & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : m & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
    }), s = Wn({
      isOpen: _(() => t.value),
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
      setTriggerRef: (i) => {
        o.value = i;
      },
      // Keyboard navigation
      registerItem: (i, c) => {
        r.value.set(c, i);
      },
      unregisterItem: (i) => {
        r.value.delete(i), a.value === i && (a.value = null);
      },
      focusNext: () => {
        const i = l();
        if (i.length === 0) return;
        let c = -1;
        a.value && (c = i.findIndex(([p]) => p === a.value));
        const d = c < i.length - 1 ? c + 1 : 0, [m, f] = i[d];
        a.value = m, f == null || f.focus();
      },
      focusPrevious: () => {
        const i = l();
        if (i.length === 0) return;
        let c = -1;
        a.value && (c = i.findIndex(([p]) => p === a.value));
        const d = c > 0 ? c - 1 : i.length - 1, [m, f] = i[d];
        a.value = m, f == null || f.focus();
      },
      focusFirst: () => {
        const i = l();
        if (i.length === 0) return;
        const [c, d] = i[0];
        a.value = c, d == null || d.focus();
      },
      focusLast: () => {
        const i = l();
        if (i.length === 0) return;
        const [c, d] = i[i.length - 1];
        a.value = c, d == null || d.focus();
      },
      focusItem: (i) => {
        const c = r.value.get(i);
        c && (a.value = i, c.focus());
      },
      getActiveItemId: () => a.value
    });
    ke("dropdown", s), ke("triggerRef", o);
    const u = (i) => {
      if (t.value)
        switch (i.key) {
          case "Escape":
            i.preventDefault(), t.value = !1, a.value = null;
            break;
        }
    };
    return ie(() => {
      document.addEventListener("keydown", u);
    }), be(() => {
      document.removeEventListener("keydown", u);
    }), n({
      isOpen: t,
      open: s.open,
      close: s.close,
      toggle: s.toggle,
      triggerRef: o
    }), (i, c) => (S(), A("div", Wu, [
      U(i.$slots, "default")
    ]));
  }
}), El = /* @__PURE__ */ j({
  __name: "DropdownTrigger",
  setup(e, { expose: n }) {
    var l;
    const t = me("dropdown"), o = k();
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
    }), (s, u) => (S(), A("div", {
      ref_key: "triggerRef",
      ref: o,
      role: "button",
      tabindex: "0",
      class: V([
        "inline-flex items-center justify-center",
        "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      ]),
      onClick: r,
      onKeydown: a
    }, [
      U(s.$slots, "default")
    ], 544));
  }
}), Ol = /* @__PURE__ */ j({
  __name: "DropdownContent",
  props: {
    side: { default: "bottom" },
    align: { default: "start" },
    sideOffset: { default: 4 },
    alignOffset: { default: 0 },
    avoidCollisions: { type: Boolean, default: !0 }
  },
  setup(e) {
    const n = e, t = me("dropdown"), o = me("triggerRef"), r = k(), a = _(
      () => {
        var d;
        return (o == null ? void 0 : o.value) || ((d = t == null ? void 0 : t.triggerRef) == null ? void 0 : d.value);
      }
    ), { floatingStyles: l, update: s } = En(
      a || k(null),
      r,
      {
        strategy: "absolute",
        placement: `${n.side}-${n.align}`,
        middleware: [
          Sn({
            mainAxis: n.sideOffset,
            crossAxis: n.alignOffset
          }),
          ...n.avoidCollisions ? [Er()] : [],
          ...n.avoidCollisions ? [_n()] : []
          // autoPlacement(),
        ]
      }
    ), u = (d) => {
      d.stopPropagation();
    }, i = (d) => {
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
    return se(
      () => t == null ? void 0 : t.isOpen,
      async (d) => {
        d ? (console.log("Dropdown opened, adding click outside handler"), document.addEventListener("click", c, !0), setTimeout(() => {
          t == null || t.focusFirst();
        }, 50)) : (console.log("Dropdown closed, removing click outside handler"), document.removeEventListener("click", c, !0));
      }
    ), se(
      () => a.value,
      async (d) => {
        d && (t != null && t.isOpen) && await Fe();
      }
    ), ie(async () => {
      await Fe(), s && s();
    }), be(() => {
      console.log("DropdownContent unmounted"), document.removeEventListener("click", c, !0);
    }), (d, m) => (S(), A("div", {
      ref_key: "contentRef",
      ref: r,
      class: "absolute z-50",
      style: qt(I(l))
    }, [
      q(it, {
        "enter-active-class": "transition-all duration-200 ease-out",
        "leave-active-class": "transition-all duration-200 ease-in",
        "enter-from-class": "opacity-0 scale-95",
        "enter-to-class": "opacity-100 scale-100",
        "leave-from-class": "opacity-100 scale-100",
        "leave-to-class": "opacity-0 scale-95"
      }, {
        default: G(() => {
          var f;
          return [
            Wt(T("div", {
              role: "menu",
              class: V([
                "relative min-w-[8rem] overflow-hidden rounded-md border border-ring bg-popover p-1 text-foreground shadow-lg"
              ]),
              onClick: u,
              onKeydown: i,
              tabindex: "-1"
            }, [
              U(d.$slots, "default")
            ], 544), [
              [Ut, (f = I(t)) == null ? void 0 : f.isOpen]
            ])
          ];
        }),
        _: 3
      })
    ], 4));
  }
}), Tl = /* @__PURE__ */ j({
  __name: "DropdownItem",
  props: {
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["click", "select"],
  setup(e, { expose: n, emit: t }) {
    const o = e, r = t, a = me("dropdown"), l = k(), s = k();
    ie(() => {
      s.value = `dropdown-item-${Math.random().toString(36).substr(2, 9)}`, a && l.value && s.value && a.registerItem(l.value, s.value);
    }), be(() => {
      a && s.value && a.unregisterItem(s.value);
    });
    const u = _(() => (a == null ? void 0 : a.getActiveItemId()) === s.value), i = (p) => {
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
    }), (p, v) => (S(), A("div", {
      ref_key: "itemRef",
      ref: l,
      role: "menuitem",
      tabindex: "-1",
      class: V([
        "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground",
        u.value ? "text-accent-foreground bg-accent" : "text-foreground/70 hover:text-accent-foreground",
        p.disabled && "pointer-events-none opacity-50"
      ]),
      onClick: i,
      onKeydown: c,
      onMouseenter: d,
      onMouseleave: m,
      onFocus: f
    }, [
      U(p.$slots, "default")
    ], 34));
  }
}), Uu = {
  class: /* @__PURE__ */ V(["px-2 py-1.5 text-sm font-semibold text-foreground"])
}, Mf = /* @__PURE__ */ j({
  __name: "DropdownLabel",
  setup(e) {
    return (n, t) => (S(), A("div", Uu, [
      U(n.$slots, "default")
    ]));
  }
}), Gu = {
  role: "separator",
  class: /* @__PURE__ */ V(["-mx-1 my-1 h-px bg-gray-200", "dark:bg-gray-700"])
}, Lf = /* @__PURE__ */ j({
  __name: "DropdownSeparator",
  setup(e) {
    return (n, t) => (S(), A("div", Gu));
  }
}), qu = { class: "relative" }, Bf = /* @__PURE__ */ j({
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
    const o = e, r = t, a = k(!1), l = k(), s = k(), u = {
      isOpen: _(() => a.value),
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
    ke("dropdown", u);
    const { floatingStyles: i, placement: c } = En(l, s, {
      placement: `${o.side}-${o.align}`,
      middleware: [
        Sn({ mainAxis: o.sideOffset, crossAxis: o.alignOffset }),
        ...o.avoidCollisions ? [Er()] : [],
        ...o.avoidCollisions ? [_n()] : [],
        Ro()
      ],
      whileElementsMounted: Io
    }), d = _(() => c.value ? c.value.split("-")[0] : o.side), m = _(() => {
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
      open: u.open,
      close: u.close,
      toggle: u.toggle,
      triggerRef: l,
      contentRef: s,
      floatingStyles: i,
      actualSide: d,
      transformOrigin: m
    }), (f, p) => (S(), A("div", qu, [
      U(f.$slots, "default")
    ]));
  }
}), Ff = /* @__PURE__ */ j({
  __name: "DropdownSubContent",
  setup(e) {
    const n = me("dropdown"), t = k(), o = k({}), r = k("left");
    ie(() => {
      var s;
      if (t.value) {
        const u = (s = _a()) == null ? void 0 : s.parent;
        u && u.exposed && (u.exposed.contentRef = t.value, u.exposed.floatingStyles && (o.value = u.exposed.floatingStyles.value), u.exposed.transformOrigin && (r.value = u.exposed.transformOrigin.value));
      }
    });
    const a = (s) => {
      s.stopPropagation();
    }, l = (s) => {
      var c;
      if (!(n != null && n.isOpen) || !t.value) return;
      const u = s.target, i = (c = n.triggerRef) == null ? void 0 : c.value;
      i && !i.contains(u) && !t.value.contains(u) && n.close();
    };
    return ie(() => {
      setTimeout(() => {
        document.addEventListener("click", l, !0);
      }, 0);
    }), be(() => {
      document.removeEventListener("click", l, !0);
    }), (s, u) => (S(), fe(Eo, { to: "body" }, [
      q(it, {
        "enter-active-class": "transition-all duration-200 ease-out",
        "leave-active-class": "transition-all duration-150 ease-in",
        "enter-from-class": "opacity-0 scale-95",
        "enter-to-class": "opacity-100 scale-100",
        "leave-from-class": "opacity-100 scale-100",
        "leave-to-class": "opacity-0 scale-95"
      }, {
        default: G(() => {
          var i;
          return [
            Wt(T("div", {
              ref_key: "contentRef",
              ref: t,
              role: "menu",
              class: V([
                "fixed z-50 min-w-[8rem] overflow-hidden rounded-md border bg-white p-1 text-gray-900 shadow-lg",
                "dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700"
              ]),
              style: qt({
                ...o.value,
                transformOrigin: `${r.value} center`
              }),
              onClick: a
            }, [
              U(s.$slots, "default")
            ], 4), [
              [Ut, (i = I(n)) == null ? void 0 : i.isOpen]
            ])
          ];
        }),
        _: 3
      })
    ]));
  }
}), Ku = ["data-state"], Vf = /* @__PURE__ */ j({
  __name: "DropdownSubTrigger",
  emits: ["click", "keydown"],
  setup(e, { expose: n, emit: t }) {
    const o = t, r = me("dropdown"), a = k();
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
    }, u = () => {
      r == null || r.open();
    }, i = () => {
    };
    return n({
      triggerRef: a
    }), (c, d) => {
      var m;
      return S(), A("div", {
        ref_key: "triggerRef",
        ref: a,
        role: "menuitem",
        tabindex: "-1",
        class: V([
          "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors",
          "focus:bg-gray-100 focus:text-gray-900",
          "dark:focus:bg-gray-700 dark:focus:text-gray-100",
          "hover:bg-gray-100 hover:text-gray-900",
          "dark:hover:bg-gray-700 dark:hover:text-gray-100",
          "data-[state=open]:bg-gray-100 data-[state=open]:text-gray-900",
          "dark:data-[state=open]:bg-gray-700 dark:data-[state=open]:text-gray-100"
        ]),
        "data-state": (m = I(r)) != null && m.isOpen ? "open" : "closed",
        onClick: l,
        onKeydown: s,
        onMouseenter: u,
        onMouseleave: i
      }, [
        U(c.$slots, "default"),
        d[0] || (d[0] = T("svg", {
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
          T("polyline", { points: "6,9 12,15 18,9" })
        ], -1))
      ], 40, Ku);
    };
  }
}), Yu = ["innerHTML"], qo = /* @__PURE__ */ j({
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
    return (n, t) => (S(), A("div", {
      class: V(
        I(ae)(
          "bg-card border border-border border-dashed rounded-lg p-6",
          n.theme.container
        )
      )
    }, [
      T("h3", {
        class: V(I(ae)("text-base font-semibold text-zinc-900", n.theme.title)),
        innerHTML: n.title
      }, null, 10, Yu),
      T("div", {
        class: V(I(ae)("mt-1 text-muted-foreground", n.theme.description))
      }, [
        U(n.$slots, "default")
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
      return $t(wt(w));
    }
    const r = t, a = e, l = k(), s = k(), u = _(
      () => `modal-title-${Math.random().toString(36).substr(2, 9)}`
    ), i = _(
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
    se(
      () => a.open,
      async (w) => {
        w ? (d(), await Fe(), l.value && l.value.focus()) : m();
      }
    ), ie(() => {
      a.open && d(), document.addEventListener("keydown", g);
    }), be(() => {
      m(), document.removeEventListener("keydown", g);
    });
    const g = (w) => {
      a.open && a.closeOnEscape && w.key === "Escape" && (w.preventDefault(), f());
    };
    return n({
      close: f,
      modalContainerRef: l,
      backdropRef: s,
      titleId: u.value,
      descriptionId: i.value
    }), (w, b) => (S(), fe(Eo, { to: "body" }, [
      q(it, {
        "enter-active-class": "transition-all duration-300 ease-out",
        "enter-from-class": "opacity-0",
        "enter-to-class": "opacity-100",
        "leave-active-class": "transition-all duration-200 ease-in",
        "leave-from-class": "opacity-100",
        "leave-to-class": "opacity-0"
      }, {
        default: G(() => [
          w.open ? (S(), A("div", {
            key: 0,
            ref_key: "backdropRef",
            ref: s,
            class: V(
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
      q(it, {
        "enter-active-class": "transition-all duration-150 ease-out",
        "enter-from-class": "opacity-0 scale-95 translate-y-4",
        "enter-to-class": "opacity-100 scale-100 translate-y-0",
        "leave-active-class": "transition-all duration-150 ease-in",
        "leave-from-class": "opacity-100 scale-100 translate-y-0",
        "leave-to-class": "opacity-0 scale-95 translate-y-4"
      }, {
        default: G(() => [
          w.open ? (S(), A("div", {
            key: 0,
            ref_key: "modalContainerRef",
            ref: l,
            onClick: p,
            class: V(
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
            "aria-labelledby": u.value,
            "aria-describedby": i.value
          }, [
            U(w.$slots, "default", {}, void 0, !0)
          ], 42, Xu)) : le("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), Qu = /* @__PURE__ */ Cn(Ju, [["__scopeId", "data-v-96442585"]]), Zu = /* @__PURE__ */ j({
  __name: "ModalContent",
  props: {
    size: { default: "default" },
    theme: { default: () => ({
      container: ""
    }) }
  },
  setup(e, { expose: n }) {
    function t(...l) {
      return $t(wt(l));
    }
    const o = k(), r = (l) => {
      if (!o.value || l.key !== "Tab") return;
      const s = o.value.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (s.length === 0) return;
      const u = s[0], i = s[s.length - 1];
      l.shiftKey ? document.activeElement === u && (l.preventDefault(), i.focus()) : document.activeElement === i && (l.preventDefault(), u.focus());
    };
    return n({
      modalRef: o,
      focusFirstElement: async () => {
        var s;
        await Fe();
        const l = (s = o.value) == null ? void 0 : s.querySelector(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        l ? l.focus() : o.value && o.value.focus();
      }
    }), (l, s) => (S(), A("div", {
      ref_key: "modalRef",
      ref: o,
      class: V(
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
      onClick: s[0] || (s[0] = ln(() => {
      }, ["stop"])),
      onKeydown: r
    }, [
      U(l.$slots, "default")
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
      return $t(wt(o));
    }
    return (o, r) => (S(), A("button", {
      onClick: r[0] || (r[0] = (a) => o.$emit("close")),
      class: V(
        t(
          "absolute top-6 right-6 p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors",
          o.theme.closeButton
        )
      ),
      type: "button",
      "aria-label": o.closeButtonLabel
    }, [
      q(I(gr), { class: "size-4" })
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
    }), (r, a) => (S(), fe(Qu, {
      open: r.open,
      "close-on-backdrop-click": r.closeOnBackdropClick,
      "close-on-escape": r.closeOnEscape,
      "prevent-body-scroll": r.preventBodyScroll,
      theme: r.theme,
      onClose: a[1] || (a[1] = (l) => r.$emit("close")),
      "onUpdate:open": a[2] || (a[2] = (l) => r.$emit("update:open", l))
    }, {
      default: G(() => [
        q(Zu, {
          size: r.size,
          theme: r.theme
        }, {
          default: G(() => [
            q(tc, {
              "close-button-label": r.closeButtonLabel,
              theme: r.theme,
              onClose: a[0] || (a[0] = (l) => r.$emit("close"))
            }, null, 8, ["close-button-label", "theme"]),
            U(r.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        }, 8, ["size", "theme"])
      ]),
      _: 3
    }, 8, ["open", "close-on-backdrop-click", "close-on-escape", "prevent-body-scroll", "theme"]));
  }
}), Nf = /* @__PURE__ */ Cn(nc, [["__scopeId", "data-v-5e273e5b"]]), oc = { class: "flex-1 min-w-0" }, zf = /* @__PURE__ */ j({
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
      return $t(wt(o));
    }
    return (o, r) => (S(), A("div", {
      class: V(t("flex items-center justify-between p-6", o.theme.header))
    }, [
      T("div", oc, [
        U(o.$slots, "default")
      ])
    ], 2));
  }
}), rc = ["id"], jf = /* @__PURE__ */ j({
  __name: "ModalTitle",
  props: {
    titleId: {}
  },
  setup(e) {
    return (n, t) => (S(), A("h2", {
      id: n.titleId,
      class: "text-lg font-semibold text-foreground"
    }, [
      U(n.$slots, "default")
    ], 8, rc));
  }
}), Hf = /* @__PURE__ */ j({
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
      return $t(wt(t));
    }
    return (t, o) => (S(), A("div", {
      class: V(n("flex-1 grow overflow-auto px-6", t.theme.content))
    }, [
      U(t.$slots, "default")
    ], 2));
  }
}), Wf = /* @__PURE__ */ j({
  __name: "ModalFooter",
  props: {
    theme: { default: () => ({
      footer: ""
    }) }
  },
  setup(e) {
    function n(...t) {
      return $t(wt(t));
    }
    return (t, o) => (S(), A("div", {
      class: V(n("flex items-center justify-end gap-3 p-6", t.theme.footer))
    }, [
      U(t.$slots, "default")
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
        _n({
          padding: 10,
          limiter: Tr({
            offset: 10
          })
        }),
        Ro({
          allowedPlacements: ["top-start", "bottom-start"]
        }),
        Sn(10),
        Or({
          apply({ availableHeight: e, elements: n }) {
            const t = n.reference.getBoundingClientRect().width;
            Object.assign(n.floating.style, {
              minWidth: `${t}px`,
              maxHeight: `${e - 20}px`
            });
          }
        })
      ],
      whileElementsMounted: Io
    }) },
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(e, { expose: n, emit: t }) {
    const o = e, r = t, a = k(), l = k(), s = k(o.open ?? !1);
    se(
      () => o.open,
      (d) => {
        d !== void 0 && (s.value = d);
      },
      { immediate: !0 }
    );
    const u = (d) => {
      s.value = d, r("update:open", d);
    }, { floatingStyles: i } = En(a, l, {
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
        u(!1);
      },
      /** Current open state of the popover */
      isOpen: s
    }), (d, m) => (S(), fe(I(bl), {
      class: V(I(ae)("relative inline-block text-left", d.theme.popoverMenu)),
      open: s.value,
      "onUpdate:open": u
    }, {
      default: G(({ open: f }) => [
        T("div", null, [
          q(I(gu), {
            ref_key: "reference",
            ref: a,
            class: V(
              I(ae)(f ? "is-open" : "is-closed", d.theme.popoverMenuButton)
            )
          }, {
            default: G(() => [
              U(d.$slots, "trigger")
            ]),
            _: 2
          }, 1032, ["class"])
        ]),
        q(it, {
          "enter-active-class": "transition duration-200 ease-out",
          "enter-from-class": "translate-y-1 opacity-0",
          "enter-to-class": "translate-y-0 opacity-100",
          "leave-active-class": "transition duration-150 ease-in",
          "leave-from-class": "translate-y-0 opacity-100",
          "leave-to-class": "translate-y-1 opacity-0"
        }, {
          default: G(() => [
            q(I(bu), {
              ref_key: "floating",
              ref: l,
              class: V(
                I(ae)(
                  "fixed z-50 transform overflow-x-hidden overflow-y-auto rounded-lg bg-background p-3 text-base shadow-lg ring-1 ring-ring focus:outline-hidden sm:text-sm",
                  d.theme.popoverMenuItems
                )
              ),
              style: qt(I(i))
            }, {
              default: G(({ close: p }) => [
                U(d.$slots, "default", at(vt({ close: p })))
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
}), lc = { class: "relative" }, sc = { key: 0 }, ic = { class: "flex items-center gap-2" }, uc = { key: 2 }, cc = { key: 1 }, dc = { key: 3 }, fc = { class: "border-t border-border px-2 first:border-t-0 py-2 first:pt-0 last:pb-0" }, pc = { class: "flex items-center text-base font-medium" }, mc = { key: 1 }, vc = { class: "-mx-2.5" }, hc = { key: 1 }, gc = { key: 1 }, $l = /* @__PURE__ */ j({
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
        _n({
          padding: 10,
          limiter: Tr({
            offset: 10
          })
        }),
        Ro({
          allowedPlacements: ["top-start", "bottom-start"]
        }),
        Sn(10),
        Or({
          apply({ availableHeight: e, elements: n }) {
            const t = n.reference.getBoundingClientRect().width;
            Object.assign(n.floating.style, {
              minWidth: `${t}px`,
              maxHeight: `${e - 20}px`
            });
          }
        })
      ],
      whileElementsMounted: Io
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
    const o = t, r = e, a = k([]), l = k(), s = k(""), u = k(), i = k(!1), c = k(!1), d = k(!1), m = _({
      get: () => r.modelValue,
      set: (v) => {
        o("update:modelValue", v);
      }
    }), { floatingStyles: f } = En(u, l, {
      strategy: r.floatingOptions.strategy,
      transform: r.floatingOptions.transform,
      placement: r.floatingOptions.placement,
      middleware: r.floatingOptions.middleware,
      whileElementsMounted: r.floatingOptions.whileElementsMounted
    });
    se(
      () => s.value,
      ss(async () => {
        const v = new AbortController();
        r.searcher ? (i.value = !0, a.value = await r.searcher(
          s.value,
          v
        ), i.value = !1) : a.value = [];
      }, r.debounce)
    ), se(
      () => r.defaultItems,
      (v) => {
        a.value = v;
      },
      { immediate: !0 }
    );
    const p = (v, g) => v.reduce(
      (w, b) => {
        var h;
        return (w[h = g(b)] || (w[h] = [])).push(b), w;
      },
      {}
    );
    return n({
      focused: d,
      query: s,
      searching: i
    }), (v, g) => (S(), A("div", {
      class: V(I(ae)("relative rounded-lg"))
    }, [
      q(I(Ar), {
        "model-value": m.value,
        immediate: v.immediate,
        nullable: v.nullable,
        multiple: v.multiple,
        "onUpdate:modelValue": g[3] || (g[3] = (w) => m.value = w)
      }, {
        default: G(() => [
          T("div", lc, [
            T("div", {
              ref_key: "reference",
              ref: u,
              class: V(I(ae)(v.theme.baseDropdownInputContainer))
            }, [
              q(I(Lr), {
                class: V(
                  I(ae)(
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
              q(I(Mr), {
                class: V([
                  "absolute inset-y-0 right-0 flex items-center pr-2 text-muted-foreground"
                ])
              }, {
                default: G(() => [
                  q(I(Oo), { class: "size-4 text-inherit" })
                ]),
                _: 1
              })
            ], 2),
            q(it, {
              "enter-active-class": "transition duration-200 ease-out",
              "enter-from-class": "translate-y-1 opacity-0",
              "enter-to-class": "translate-y-0 opacity-100",
              "leave-active-class": "transition duration-150 ease-in",
              "leave-from-class": "translate-y-0 opacity-100",
              "leave-to-class": "translate-y-1 opacity-0"
            }, {
              default: G(() => [
                q(I(Br), {
                  ref_key: "floating",
                  ref: l,
                  class: V(
                    I(ae)(
                      "fixed left-0 z-10 overflow-x-hidden overflow-y-auto rounded-lg bg-popover p-3 text-base shadow-lg ring-1 ring-black/5 focus:outline-hidden sm:text-sm",
                      v.theme.generalFloatingPanelContainer
                    )
                  ),
                  style: qt(I(f)),
                  static: v.isStatic
                }, {
                  default: G(() => [
                    v.$slots.static ? (S(), A("div", sc, [
                      U(v.$slots, "static", at(vt({ query: s.value, searching: i.value })))
                    ])) : le("", !0),
                    i.value ? U(v.$slots, "searching", { key: 1 }, () => [
                      T("span", ic, [
                        q(I(ws), { class: "size-4 animate-spin" }),
                        g[4] || (g[4] = T("span", null, "Searching...", -1))
                      ])
                    ]) : le("", !0),
                    a.value.length === 0 && !i.value ? (S(), A("div", uc, [
                      v.$slots.empty ? U(v.$slots, "empty", { key: 0 }) : (S(), A("span", cc, "No results"))
                    ])) : le("", !0),
                    v.groupBy && !i.value ? (S(), A("div", dc, [
                      (S(!0), A(ge, null, We(p(
                        [
                          ...v.prependItems,
                          ...a.value,
                          ...v.postpendItems
                        ],
                        (w) => w[v.groupBy]
                      ), (w, b) => (S(), A("div", fc, [
                        T("div", pc, [
                          v.$slots.group ? U(v.$slots, "group", Qe({
                            key: 0,
                            ref_for: !0
                          }, {
                            group: w,
                            groupName: b
                          })) : (S(), A("span", mc, he([
                            "undefined",
                            null,
                            void 0
                          ].includes(b) ? "Uncategorized" : b), 1))
                        ]),
                        T("div", vc, [
                          i.value ? le("", !0) : (S(!0), A(ge, { key: 0 }, We(w, (h) => (S(), fe(I(Hn), {
                            key: h[v.uidProperty],
                            value: h
                          }, {
                            default: G(({ active: C, selected: y }) => [
                              T("span", {
                                class: V([
                                  "cursor-pointer hover:bg-accent rounded-md px-2 py-1 flex w-full truncate",
                                  C && "bg-accent",
                                  y && "bg-accent"
                                ])
                              }, [
                                v.$slots.item ? U(v.$slots, "item", Qe({
                                  key: 0,
                                  ref_for: !0
                                }, {
                                  item: h,
                                  active: C,
                                  selected: y
                                })) : (S(), A("span", hc, he(v.displayProperty(h)), 1))
                              ], 2)
                            ]),
                            _: 2
                          }, 1032, ["value"]))), 128))
                        ])
                      ]))), 256))
                    ])) : i.value ? le("", !0) : (S(!0), A(ge, { key: 4 }, We(a.value, (w) => (S(), fe(I(Hn), {
                      key: w[v.uidProperty],
                      value: w
                    }, {
                      default: G(({ active: b, selected: h }) => [
                        T("span", {
                          class: V([
                            "cursor-pointer hover:bg-accent rounded-md px-2 py-1 flex w-full truncate",
                            b && "bg-accent",
                            h && "bg-accent"
                          ])
                        }, [
                          v.$slots.item ? U(v.$slots, "item", Qe({
                            key: 0,
                            ref_for: !0
                          }, { item: w, active: b, selected: h })) : (S(), A("span", gc, he(v.displayProperty(w)), 1))
                        ], 2)
                      ]),
                      _: 2
                    }, 1032, ["value"]))), 128)),
                    v.$slots.options ? U(v.$slots, "options", at(Qe({ key: 5 }, { filteredItems: a.value }))) : le("", !0)
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
}), bc = { class: "relative" }, Uf = /* @__PURE__ */ j({
  __name: "Tooltip",
  setup(e, { expose: n }) {
    const t = k(!1), o = k(), r = k("body"), a = Wn({
      isVisible: _(() => t.value),
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
      portalTarget: _(() => r.value)
    });
    return ke("tooltip", a), ke("triggerRef", o), n({
      isVisible: t,
      show: a.show,
      hide: a.hide,
      triggerRef: o,
      portalTarget: r
    }), (l, s) => (S(), A("div", bc, [
      U(l.$slots, "default")
    ]));
  }
}), Gf = /* @__PURE__ */ j({
  __name: "TooltipTrigger",
  props: {
    delay: { default: 300 },
    hideDelay: { default: 0 }
  },
  setup(e) {
    const n = e, t = me("tooltip"), o = k();
    let r = null, a = null;
    const l = () => {
      a && (clearTimeout(a), a = null), n.delay > 0 ? r = window.setTimeout(() => {
        t == null || t.show();
      }, n.delay) : t == null || t.show();
    }, s = () => {
      r && (clearTimeout(r), r = null), n.hideDelay > 0 ? a = window.setTimeout(() => {
        t == null || t.hide();
      }, n.hideDelay) : t == null || t.hide();
    }, u = () => {
      n.delay > 0 ? r = window.setTimeout(() => {
        t == null || t.show();
      }, n.delay) : t == null || t.show();
    }, i = () => {
      r && (clearTimeout(r), r = null), t == null || t.hide();
    };
    return ie(() => {
      o.value && (t == null || t.setTriggerRef(o.value), process.env.NODE_ENV === "development" && console.log("TooltipTrigger mounted:", {
        triggerRef: o.value,
        tooltip: t
      }));
    }), be(() => {
      r && clearTimeout(r), a && clearTimeout(a);
    }), (c, d) => (S(), A("div", {
      ref_key: "triggerRef",
      ref: o,
      onMouseenter: l,
      onMouseleave: s,
      onFocus: u,
      onBlur: i
    }, [
      U(c.$slots, "default")
    ], 544));
  }
}), yc = {
  role: "tooltip",
  class: "relative max-w-xs rounded-md bg-tooltip px-3 py-2 text-sm text-tooltip-foreground shadow-lg pointer-events-auto transform-gpu"
}, qf = /* @__PURE__ */ j({
  __name: "TooltipContent",
  props: {
    side: { default: "top" },
    align: { default: "center" },
    sideOffset: { default: 8 },
    alignOffset: { default: 0 },
    avoidCollisions: { type: Boolean, default: !0 }
  },
  setup(e) {
    const n = e, t = me("tooltip"), o = me("triggerRef"), r = k(), a = k(), l = _(
      () => {
        var p;
        return (o == null ? void 0 : o.value) || ((p = t == null ? void 0 : t.triggerRef) == null ? void 0 : p.value);
      }
    ), s = _(() => `${n.side}-${n.align}`), { floatingStyles: u, middlewareData: i, update: c } = En(
      l || k(null),
      r,
      {
        strategy: "fixed",
        placement: s,
        middleware: [
          Sn({
            mainAxis: n.sideOffset,
            crossAxis: n.alignOffset
          }),
          ...n.avoidCollisions ? [Er()] : [],
          ...n.avoidCollisions ? [_n()] : [],
          ci({ element: a })
        ]
      }
    ), d = _(() => {
      var v;
      const p = (v = i.value) == null ? void 0 : v.flip;
      return p && p.overflows && p.overflows.length > 0 ? p.overflows[0].placement : n.side;
    });
    se(
      [
        () => n.side,
        () => n.align,
        () => n.sideOffset,
        () => n.alignOffset
      ],
      () => {
        Fe(() => {
          c();
        });
      }
    ), se(
      () => t == null ? void 0 : t.isVisible,
      (p) => {
        p && Fe(() => {
          c();
        });
      },
      { immediate: !0 }
    ), se(u, (p) => {
      process.env.NODE_ENV === "development" && console.log("Tooltip positioning:", {
        requestedPlacement: s.value,
        actualPlacement: d.value,
        styles: p,
        triggerRef: l.value,
        contentRef: r.value
      });
    });
    const m = _(() => {
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
    }), f = _(() => {
      var p;
      return ((p = i.value) == null ? void 0 : p.arrow) || {};
    });
    return ie(async () => {
      await Fe(), setTimeout(() => {
        c();
      }, 100);
    }), (p, v) => {
      var g;
      return S(), fe(Eo, {
        to: ((g = I(t)) == null ? void 0 : g.portalTarget) || "body"
      }, [
        T("div", {
          ref_key: "contentRef",
          ref: r,
          class: "fixed z-[9999] pointer-events-none",
          style: qt(I(u))
        }, [
          q(it, {
            "enter-active-class": "transition-all duration-200 ease-out",
            "leave-active-class": "transition-all duration-150 ease-in",
            "enter-from-class": "opacity-0 scale-95 translate-y-1",
            "enter-to-class": "opacity-100 scale-100 translate-y-0",
            "leave-from-class": "opacity-100 scale-100 translate-y-0",
            "leave-to-class": "opacity-0 scale-95 translate-y-1"
          }, {
            default: G(() => {
              var w;
              return [
                Wt(T("div", yc, [
                  U(p.$slots, "default"),
                  T("div", {
                    ref_key: "arrowRef",
                    ref: a,
                    class: V(["absolute w-2 h-2 bg-tooltip rotate-45", m.value]),
                    style: qt(f.value)
                  }, null, 6)
                ], 512), [
                  [Ut, (w = I(t)) == null ? void 0 : w.isVisible]
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
}, _c = {
  key: 1,
  class: "w-4 h-4",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
}, Ec = { class: "mt-2 text-xs opacity-70" }, Kf = /* @__PURE__ */ j({
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
    const n = e, { isDark: t, background: o, themeClass: r, toggleTheme: a } = Ta(), l = _(() => ["p-4 rounded-lg border transition-colors", {
      default: "bg-card text-card-foreground",
      compact: "bg-muted/50 text-muted-foreground",
      minimal: "bg-transparent"
    }[n.variant], n.theme.container].filter(Boolean).join(" ")), s = _(() => ["font-medium", n.theme.text].filter(Boolean).join(" ")), u = _(() => ["p-2 rounded-md transition-colors hover:bg-accent hover:text-accent-foreground", n.theme.button].filter(Boolean).join(" "));
    return (i, c) => (S(), A("div", {
      class: V(l.value)
    }, [
      T("div", wc, [
        T("div", xc, [
          T("div", {
            class: V([
              "w-4 h-4 rounded-full border-2 transition-colors",
              I(t) ? "bg-yellow-400 border-yellow-600" : "bg-blue-400 border-blue-600"
            ])
          }, [
            I(t) ? (S(), A("div", kc)) : le("", !0)
          ], 2),
          T("span", {
            class: V(s.value)
          }, he(I(t) ? "Dark" : "Light") + " Theme ", 3)
        ]),
        T("button", {
          onClick: c[0] || (c[0] = //@ts-ignore
          (...d) => I(a) && I(a)(...d)),
          class: V(u.value),
          type: "button",
          "aria-label": `Switch to ${I(t) ? "light" : "dark"} theme`
        }, [
          I(t) ? (S(), A("svg", Sc, c[1] || (c[1] = [
            T("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            }, null, -1)
          ]))) : (S(), A("svg", _c, c[2] || (c[2] = [
            T("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            }, null, -1)
          ])))
        ], 10, Cc)
      ]),
      T("div", Ec, [
        T("p", null, "Background: " + he(I(o)), 1),
        T("p", null, "Theme Class: " + he(I(r)), 1)
      ])
    ], 2));
  }
}), Oc = {
  "aria-label": "Breadcrumb",
  class: "flex"
}, Yf = /* @__PURE__ */ j({
  __name: "Breadcrumbs",
  setup(e) {
    const n = k([]), t = Wn({
      items: _(() => n.value),
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
    return ke("breadcrumb", t), (o, r) => (S(), A("nav", Oc, [
      U(o.$slots, "default")
    ]));
  }
}), Tc = { class: "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground" }, Xf = /* @__PURE__ */ j({
  __name: "BreadcrumbList",
  setup(e) {
    return (n, t) => (S(), A("ol", Tc, [
      U(n.$slots, "default")
    ]));
  }
}), $c = { class: "inline-flex items-center gap-1.5" }, Jf = /* @__PURE__ */ j({
  __name: "BreadcrumbItem",
  setup(e) {
    return (n, t) => (S(), A("li", $c, [
      U(n.$slots, "default")
    ]));
  }
}), Qf = /* @__PURE__ */ j({
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
    const t = e, o = n, r = _(() => t.asChild ? "slot" : t.to ? "router-link" : "a");
    function a(l) {
      o("click", l);
    }
    return (l, s) => (S(), fe(Oa(r.value), {
      href: l.href,
      to: l.to,
      class: V(
        I(ae)(
          "transition-colors hover:text-foreground",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          "rounded-sm focus-visible:ring-offset-background",
          l.theme.link
        )
      ),
      onClick: a
    }, {
      default: G(() => [
        U(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["href", "to", "class"]));
  }
}), Zf = /* @__PURE__ */ j({
  __name: "BreadcrumbPage",
  props: {
    theme: { default: () => ({
      page: ""
    }) }
  },
  setup(e) {
    return (n, t) => (S(), A("span", {
      class: V(
        I(ae)(
          "font-normal text-foreground",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          "rounded-sm focus-visible:ring-offset-background",
          n.theme.page
        )
      ),
      tabindex: "0"
    }, [
      U(n.$slots, "default")
    ], 2));
  }
}), ep = /* @__PURE__ */ j({
  __name: "BreadcrumbSeparator",
  props: {
    theme: { default: () => ({
      separator: ""
    }) }
  },
  setup(e) {
    return (n, t) => (S(), A("span", {
      class: V(I(ae)("size-3.5", n.theme.separator)),
      role: "presentation"
    }, [
      U(n.$slots, "default", {}, () => [
        t[0] || (t[0] = T("svg", {
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
          T("path", { d: "m9 18 6-6-6-6" })
        ], -1))
      ])
    ], 2));
  }
}), tp = /* @__PURE__ */ j({
  __name: "BreadcrumbEllipsis",
  props: {
    theme: { default: () => ({
      ellipsis: ""
    }) }
  },
  setup(e) {
    return (n, t) => (S(), A("span", {
      class: V(
        I(ae)(
          "flex size-9 items-center justify-center",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          "rounded-sm focus-visible:ring-offset-background",
          n.theme.ellipsis
        )
      ),
      role: "presentation",
      tabindex: "0"
    }, [
      U(n.$slots, "default", {}, () => [
        t[0] || (t[0] = T("svg", {
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
          T("circle", {
            cx: "12",
            cy: "12",
            r: "1"
          }),
          T("circle", {
            cx: "19",
            cy: "12",
            r: "1"
          }),
          T("circle", {
            cx: "5",
            cy: "12",
            r: "1"
          })
        ], -1))
      ])
    ], 2));
  }
}), Dc = { class: "space-y-4" }, Pc = ["onMouseenter", "onMouseleave"], Ic = { class: "font-semibold" }, Rc = { class: "text-sm text-zinc-500" }, np = /* @__PURE__ */ j({
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
    return (o, r) => (S(), A("div", {
      class: V(
        I(ae)(
          "flex h-full w-full max-w-sm flex-col overflow-hidden border-l border-zinc-300/80 p-5",
          ...o.classes
        )
      )
    }, [
      T("ul", Dc, [
        (S(!0), A(ge, null, We(o.tips, (a) => (S(), A("li", {
          key: a.title,
          class: "space-y-3 rounded-lg border border-zinc-300/80 p-3 hover:shadow-md",
          onMouseenter: (l) => n(a.target),
          onMouseleave: (l) => t(a.target)
        }, [
          T("div", null, [
            q(ls, { classes: ["py-1.5"] }, {
              default: G(() => [
                Gt(he(a.type), 1)
              ]),
              _: 2
            }, 1024)
          ]),
          T("div", null, [
            T("div", Ic, he(a.title), 1),
            T("p", Rc, he(a.description), 1)
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
function Tt(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? da(Object(t), !0).forEach(function(o) {
      Ac(e, o, t[o]);
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
function Ac(e, n, t) {
  return n in e ? Object.defineProperty(e, n, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[n] = t, e;
}
function Lt() {
  return Lt = Object.assign || function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = arguments[n];
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, Lt.apply(this, arguments);
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
function Rt(e) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(e);
}
var Bt = Rt(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), Kn = Rt(/Edge/i), fa = Rt(/firefox/i), Ln = Rt(/safari/i) && !Rt(/chrome/i) && !Rt(/android/i), jr = Rt(/iP(ad|od|hone)/i), Dl = Rt(/chrome/i) && Rt(/android/i), Pl = {
  capture: !1,
  passive: !1
};
function de(e, n, t) {
  e.addEventListener(n, t, !Bt && Pl);
}
function ce(e, n, t) {
  e.removeEventListener(n, t, !Bt && Pl);
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
function Il(e) {
  return e.host && e !== document && e.host.nodeType ? e.host : e.parentNode;
}
function pt(e, n, t, o) {
  if (e) {
    t = t || document;
    do {
      if (n != null && (n[0] === ">" ? e.parentNode === t && bo(e, n) : bo(e, n)) || o && e === t)
        return e;
      if (e === t) break;
    } while (e = Il(e));
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
function Z(e, n, t) {
  var o = e && e.style;
  if (o) {
    if (t === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? t = document.defaultView.getComputedStyle(e, "") : e.currentStyle && (t = e.currentStyle), n === void 0 ? t : t[n];
    !(n in o) && n.indexOf("webkit") === -1 && (n = "-webkit-" + n), o[n] = t + (typeof t == "string" ? "" : "px");
  }
}
function wn(e, n) {
  var t = "";
  if (typeof e == "string")
    t = e;
  else
    do {
      var o = Z(e, "transform");
      o && o !== "none" && (t = o + " " + t);
    } while (!n && (e = e.parentNode));
  var r = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return r && new r(t);
}
function Rl(e, n, t) {
  if (e) {
    var o = e.getElementsByTagName(n), r = 0, a = o.length;
    if (t)
      for (; r < a; r++)
        t(o[r], r);
    return o;
  }
  return [];
}
function _t() {
  var e = document.scrollingElement;
  return e || document.documentElement;
}
function Ae(e, n, t, o, r) {
  if (!(!e.getBoundingClientRect && e !== window)) {
    var a, l, s, u, i, c, d;
    if (e !== window && e.parentNode && e !== _t() ? (a = e.getBoundingClientRect(), l = a.top, s = a.left, u = a.bottom, i = a.right, c = a.height, d = a.width) : (l = 0, s = 0, u = window.innerHeight, i = window.innerWidth, c = window.innerHeight, d = window.innerWidth), (n || t) && e !== window && (r = r || e.parentNode, !Bt))
      do
        if (r && r.getBoundingClientRect && (Z(r, "transform") !== "none" || t && Z(r, "position") !== "static")) {
          var m = r.getBoundingClientRect();
          l -= m.top + parseInt(Z(r, "border-top-width")), s -= m.left + parseInt(Z(r, "border-left-width")), u = l + a.height, i = s + a.width;
          break;
        }
      while (r = r.parentNode);
    if (o && e !== window) {
      var f = wn(r || e), p = f && f.a, v = f && f.d;
      f && (l /= v, s /= p, d /= p, c /= v, u = l + c, i = s + d);
    }
    return {
      top: l,
      left: s,
      bottom: u,
      right: i,
      width: d,
      height: c
    };
  }
}
function ma(e, n, t) {
  for (var o = Ht(e, !0), r = Ae(e)[n]; o; ) {
    var a = Ae(o)[t], l = void 0;
    if (l = r >= a, !l) return o;
    if (o === _t()) break;
    o = Ht(o, !1);
  }
  return !1;
}
function kn(e, n, t, o) {
  for (var r = 0, a = 0, l = e.children; a < l.length; ) {
    if (l[a].style.display !== "none" && l[a] !== ee.ghost && (o || l[a] !== ee.dragged) && pt(l[a], t.draggable, e, !1)) {
      if (r === n)
        return l[a];
      r++;
    }
    a++;
  }
  return null;
}
function Hr(e, n) {
  for (var t = e.lastElementChild; t && (t === ee.ghost || Z(t, "display") === "none" || n && !bo(t, n)); )
    t = t.previousElementSibling;
  return t || null;
}
function st(e, n) {
  var t = 0;
  if (!e || !e.parentNode)
    return -1;
  for (; e = e.previousElementSibling; )
    e.nodeName.toUpperCase() !== "TEMPLATE" && e !== ee.clone && (!n || bo(e, n)) && t++;
  return t;
}
function va(e) {
  var n = 0, t = 0, o = _t();
  if (e)
    do {
      var r = wn(e), a = r.a, l = r.d;
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
function Ht(e, n) {
  if (!e || !e.getBoundingClientRect) return _t();
  var t = e, o = !1;
  do
    if (t.clientWidth < t.scrollWidth || t.clientHeight < t.scrollHeight) {
      var r = Z(t);
      if (t.clientWidth < t.scrollWidth && (r.overflowX == "auto" || r.overflowX == "scroll") || t.clientHeight < t.scrollHeight && (r.overflowY == "auto" || r.overflowY == "scroll")) {
        if (!t.getBoundingClientRect || t === document.body) return _t();
        if (o || n) return t;
        o = !0;
      }
    }
  while (t = t.parentNode);
  return _t();
}
function Vc(e, n) {
  if (e && n)
    for (var t in n)
      n.hasOwnProperty(t) && (e[t] = n[t]);
  return e;
}
function Ko(e, n) {
  return Math.round(e.top) === Math.round(n.top) && Math.round(e.left) === Math.round(n.left) && Math.round(e.height) === Math.round(n.height) && Math.round(e.width) === Math.round(n.width);
}
var Bn;
function Al(e, n) {
  return function() {
    if (!Bn) {
      var t = arguments, o = this;
      t.length === 1 ? e.call(o, t[0]) : e.apply(o, t), Bn = setTimeout(function() {
        Bn = void 0;
      }, n);
    }
  };
}
function Nc() {
  clearTimeout(Bn), Bn = void 0;
}
function Ml(e, n, t) {
  e.scrollLeft += n, e.scrollTop += t;
}
function Ll(e) {
  var n = window.Polymer, t = window.jQuery || window.Zepto;
  return n && n.dom ? n.dom(e).cloneNode(!0) : t ? t(e).clone(!0)[0] : e.cloneNode(!0);
}
function Bl(e, n, t) {
  var o = {};
  return Array.from(e.children).forEach(function(r) {
    var a, l, s, u;
    if (!(!pt(r, n.draggable, e, !1) || r.animated || r === t)) {
      var i = Ae(r);
      o.left = Math.min((a = o.left) !== null && a !== void 0 ? a : 1 / 0, i.left), o.top = Math.min((l = o.top) !== null && l !== void 0 ? l : 1 / 0, i.top), o.right = Math.max((s = o.right) !== null && s !== void 0 ? s : -1 / 0, i.right), o.bottom = Math.max((u = o.bottom) !== null && u !== void 0 ? u : -1 / 0, i.bottom);
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
          if (!(Z(r, "display") === "none" || r === ee.ghost)) {
            e.push({
              target: r,
              rect: Ae(r)
            });
            var a = Tt({}, e[e.length - 1].rect);
            if (r.thisAnimationDuration) {
              var l = wn(r, !0);
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
        var u = 0, i = s.target, c = i.fromRect, d = Ae(i), m = i.prevFromRect, f = i.prevToRect, p = s.rect, v = wn(i, !0);
        v && (d.top -= v.f, d.left -= v.e), i.toRect = d, i.thisAnimationDuration && Ko(m, d) && !Ko(c, d) && // Make sure animatingRect is on line between toRect & fromRect
        (p.top - d.top) / (p.left - d.left) === (c.top - d.top) / (c.left - d.left) && (u = Hc(p, m, f, r.options)), Ko(d, c) || (i.prevFromRect = c, i.prevToRect = d, u || (u = r.options.animation), r.animate(i, p, d, u)), u && (a = !0, l = Math.max(l, u), clearTimeout(i.animationResetTimer), i.animationResetTimer = setTimeout(function() {
          i.animationTime = 0, i.prevFromRect = null, i.fromRect = null, i.prevToRect = null, i.thisAnimationDuration = null;
        }, u), i.thisAnimationDuration = u);
      }), clearTimeout(n), a ? n = setTimeout(function() {
        typeof o == "function" && o();
      }, l) : typeof o == "function" && o(), e = [];
    },
    animate: function(o, r, a, l) {
      if (l) {
        Z(o, "transition", ""), Z(o, "transform", "");
        var s = wn(this.el), u = s && s.a, i = s && s.d, c = (r.left - a.left) / (u || 1), d = (r.top - a.top) / (i || 1);
        o.animatingX = !!c, o.animatingY = !!d, Z(o, "transform", "translate3d(" + c + "px," + d + "px,0)"), this.forRepaintDummy = jc(o), Z(o, "transition", "transform " + l + "ms" + (this.options.easing ? " " + this.options.easing : "")), Z(o, "transform", "translate3d(0,0,0)"), typeof o.animated == "number" && clearTimeout(o.animated), o.animated = setTimeout(function() {
          Z(o, "transition", ""), Z(o, "transform", ""), o.animated = !1, o.animatingX = !1, o.animatingY = !1;
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
var mn = [], Yo = {
  initializeByDefault: !0
}, Yn = {
  mount: function(n) {
    for (var t in Yo)
      Yo.hasOwnProperty(t) && !(t in n) && (n[t] = Yo[t]);
    mn.forEach(function(o) {
      if (o.pluginName === n.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(n.pluginName, " more than once");
    }), mn.push(n);
  },
  pluginEvent: function(n, t, o) {
    var r = this;
    this.eventCanceled = !1, o.cancel = function() {
      r.eventCanceled = !0;
    };
    var a = n + "Global";
    mn.forEach(function(l) {
      t[l.pluginName] && (t[l.pluginName][a] && t[l.pluginName][a](Tt({
        sortable: t
      }, o)), t.options[l.pluginName] && t[l.pluginName][n] && t[l.pluginName][n](Tt({
        sortable: t
      }, o)));
    });
  },
  initializePlugins: function(n, t, o, r) {
    mn.forEach(function(s) {
      var u = s.pluginName;
      if (!(!n.options[u] && !s.initializeByDefault)) {
        var i = new s(n, t, n.options);
        i.sortable = n, i.options = n.options, n[u] = i, Lt(o, i.defaults);
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
    return mn.forEach(function(r) {
      typeof r.eventProperties == "function" && Lt(o, r.eventProperties.call(t[r.pluginName], n));
    }), o;
  },
  modifyOption: function(n, t, o) {
    var r;
    return mn.forEach(function(a) {
      n[a.pluginName] && a.optionListeners && typeof a.optionListeners[t] == "function" && (r = a.optionListeners[t].call(n[a.pluginName], o));
    }), r;
  }
};
function Wc(e) {
  var n = e.sortable, t = e.rootEl, o = e.name, r = e.targetEl, a = e.cloneEl, l = e.toEl, s = e.fromEl, u = e.oldIndex, i = e.newIndex, c = e.oldDraggableIndex, d = e.newDraggableIndex, m = e.originalEvent, f = e.putSortable, p = e.extraEventProperties;
  if (n = n || t && t[Ze], !!n) {
    var v, g = n.options, w = "on" + o.charAt(0).toUpperCase() + o.substr(1);
    window.CustomEvent && !Bt && !Kn ? v = new CustomEvent(o, {
      bubbles: !0,
      cancelable: !0
    }) : (v = document.createEvent("Event"), v.initEvent(o, !0, !0)), v.to = l || t, v.from = s || t, v.item = r || t, v.clone = a, v.oldIndex = u, v.newIndex = i, v.oldDraggableIndex = c, v.newDraggableIndex = d, v.originalEvent = m, v.pullMode = f ? f.lastPutMode : void 0;
    var b = Tt(Tt({}, p), Yn.getEventProperties(o, n));
    for (var h in b)
      v[h] = b[h];
    t && t.dispatchEvent(v), g[w] && g[w].call(n, v);
  }
}
var Uc = ["evt"], Je = function(n, t) {
  var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = o.evt, a = Lc(o, Uc);
  Yn.pluginEvent.bind(ee)(n, t, Tt({
    dragEl: W,
    parentEl: De,
    ghostEl: ne,
    rootEl: Se,
    nextEl: on,
    lastDownEl: so,
    cloneEl: Oe,
    cloneHidden: zt,
    dragStarted: Rn,
    putSortable: je,
    activeSortable: ee.active,
    originalEvent: r,
    oldIndex: bn,
    oldDraggableIndex: Fn,
    newIndex: tt,
    newDraggableIndex: Nt,
    hideGhostForTarget: zl,
    unhideGhostForTarget: jl,
    cloneNowHidden: function() {
      zt = !0;
    },
    cloneNowShown: function() {
      zt = !1;
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
  Wc(Tt({
    putSortable: je,
    cloneEl: Oe,
    targetEl: W,
    rootEl: Se,
    oldIndex: bn,
    oldDraggableIndex: Fn,
    newIndex: tt,
    newDraggableIndex: Nt
  }, e));
}
var W, De, ne, Se, on, so, Oe, zt, bn, tt, Fn, Nt, no, je, gn = !1, yo = !1, wo = [], en, ft, Xo, Jo, ha, ga, Rn, vn, Vn, Nn = !1, oo = !1, io, qe, Qo = [], pr = !1, xo = [], Bo = typeof document < "u", ro = jr, ba = Kn || Bt ? "cssFloat" : "float", Gc = Bo && !Dl && !jr && "draggable" in document.createElement("div"), Fl = function() {
  if (Bo) {
    if (Bt)
      return !1;
    var e = document.createElement("x");
    return e.style.cssText = "pointer-events:auto", e.style.pointerEvents === "auto";
  }
}(), Vl = function(n, t) {
  var o = Z(n), r = parseInt(o.width) - parseInt(o.paddingLeft) - parseInt(o.paddingRight) - parseInt(o.borderLeftWidth) - parseInt(o.borderRightWidth), a = kn(n, 0, t), l = kn(n, 1, t), s = a && Z(a), u = l && Z(l), i = s && parseInt(s.marginLeft) + parseInt(s.marginRight) + Ae(a).width, c = u && parseInt(u.marginLeft) + parseInt(u.marginRight) + Ae(l).width;
  if (o.display === "flex")
    return o.flexDirection === "column" || o.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (o.display === "grid")
    return o.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (a && s.float && s.float !== "none") {
    var d = s.float === "left" ? "left" : "right";
    return l && (u.clear === "both" || u.clear === d) ? "vertical" : "horizontal";
  }
  return a && (s.display === "block" || s.display === "flex" || s.display === "table" || s.display === "grid" || i >= r && o[ba] === "none" || l && o[ba] === "none" && i + c > r) ? "vertical" : "horizontal";
}, qc = function(n, t, o) {
  var r = o ? n.left : n.top, a = o ? n.right : n.bottom, l = o ? n.width : n.height, s = o ? t.left : t.top, u = o ? t.right : t.bottom, i = o ? t.width : t.height;
  return r === s || a === u || r + l / 2 === s + i / 2;
}, Kc = function(n, t) {
  var o;
  return wo.some(function(r) {
    var a = r[Ze].options.emptyInsertThreshold;
    if (!(!a || Hr(r))) {
      var l = Ae(r), s = n >= l.left - a && n <= l.right + a, u = t >= l.top - a && t <= l.bottom + a;
      if (s && u)
        return o = r;
    }
  }), o;
}, Nl = function(n) {
  function t(a, l) {
    return function(s, u, i, c) {
      var d = s.options.group.name && u.options.group.name && s.options.group.name === u.options.group.name;
      if (a == null && (l || d))
        return !0;
      if (a == null || a === !1)
        return !1;
      if (l && a === "clone")
        return a;
      if (typeof a == "function")
        return t(a(s, u, i, c), l)(s, u, i, c);
      var m = (l ? s : u).options.group.name;
      return a === !0 || typeof a == "string" && a === m || a.join && a.indexOf(m) > -1;
    };
  }
  var o = {}, r = n.group;
  (!r || lo(r) != "object") && (r = {
    name: r
  }), o.name = r.name, o.checkPull = t(r.pull, !0), o.checkPut = t(r.put), o.revertClone = r.revertClone, n.group = o;
}, zl = function() {
  !Fl && ne && Z(ne, "display", "none");
}, jl = function() {
  !Fl && ne && Z(ne, "display", "");
};
Bo && !Dl && document.addEventListener("click", function(e) {
  if (yo)
    return e.preventDefault(), e.stopPropagation && e.stopPropagation(), e.stopImmediatePropagation && e.stopImmediatePropagation(), yo = !1, !1;
}, !0);
var tn = function(n) {
  if (W) {
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
  W && W.parentNode[Ze]._isOutsideThisEl(n.target);
};
function ee(e, n) {
  if (!(e && e.nodeType && e.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(e));
  this.el = e, this.options = n = Lt({}, n), e[Ze] = this;
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
      return Vl(e, this.options);
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
    supportPointer: ee.supportPointer !== !1 && "PointerEvent" in window && (!Ln || jr),
    emptyInsertThreshold: 5
  };
  Yn.initializePlugins(this, e, t);
  for (var o in t)
    !(o in n) && (n[o] = t[o]);
  Nl(n);
  for (var r in this)
    r.charAt(0) === "_" && typeof this[r] == "function" && (this[r] = this[r].bind(this));
  this.nativeDraggable = n.forceFallback ? !1 : Gc, this.nativeDraggable && (this.options.touchStartThreshold = 1), n.supportPointer ? de(e, "pointerdown", this._onTapStart) : (de(e, "mousedown", this._onTapStart), de(e, "touchstart", this._onTapStart)), this.nativeDraggable && (de(e, "dragover", this), de(e, "dragenter", this)), wo.push(this.el), n.store && n.store.get && this.sort(n.store.get(this) || []), Lt(this, zc());
}
ee.prototype = /** @lends Sortable.prototype */
{
  constructor: ee,
  _isOutsideThisEl: function(n) {
    !this.el.contains(n) && n !== this.el && (vn = null);
  },
  _getDirection: function(n, t) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, n, t, W) : this.options.direction;
  },
  _onTapStart: function(n) {
    if (n.cancelable) {
      var t = this, o = this.el, r = this.options, a = r.preventOnFilter, l = n.type, s = n.touches && n.touches[0] || n.pointerType && n.pointerType === "touch" && n, u = (s || n).target, i = n.target.shadowRoot && (n.path && n.path[0] || n.composedPath && n.composedPath()[0]) || u, c = r.filter;
      if (od(o), !W && !(/mousedown|pointerdown/.test(l) && n.button !== 0 || r.disabled) && !i.isContentEditable && !(!this.nativeDraggable && Ln && u && u.tagName.toUpperCase() === "SELECT") && (u = pt(u, r.draggable, o, !1), !(u && u.animated) && so !== u)) {
        if (bn = st(u), Fn = st(u, r.draggable), typeof c == "function") {
          if (c.call(this, n, u, this)) {
            Ye({
              sortable: t,
              rootEl: i,
              name: "filter",
              targetEl: u,
              toEl: o,
              fromEl: o
            }), Je("filter", t, {
              evt: n
            }), a && n.preventDefault();
            return;
          }
        } else if (c && (c = c.split(",").some(function(d) {
          if (d = pt(i, d.trim(), o, !1), d)
            return Ye({
              sortable: t,
              rootEl: d,
              name: "filter",
              targetEl: u,
              fromEl: o,
              toEl: o
            }), Je("filter", t, {
              evt: n
            }), !0;
        }), c)) {
          a && n.preventDefault();
          return;
        }
        r.handle && !pt(i, r.handle, o, !1) || this._prepareDragStart(n, s, u);
      }
    }
  },
  _prepareDragStart: function(n, t, o) {
    var r = this, a = r.el, l = r.options, s = a.ownerDocument, u;
    if (o && !W && o.parentNode === a) {
      var i = Ae(o);
      if (Se = a, W = o, De = W.parentNode, on = W.nextSibling, so = o, no = l.group, ee.dragged = W, en = {
        target: W,
        clientX: (t || n).clientX,
        clientY: (t || n).clientY
      }, ha = en.clientX - i.left, ga = en.clientY - i.top, this._lastX = (t || n).clientX, this._lastY = (t || n).clientY, W.style["will-change"] = "all", u = function() {
        if (Je("delayEnded", r, {
          evt: n
        }), ee.eventCanceled) {
          r._onDrop();
          return;
        }
        r._disableDelayedDragEvents(), !fa && r.nativeDraggable && (W.draggable = !0), r._triggerDragStart(n, t), Ye({
          sortable: r,
          name: "choose",
          originalEvent: n
        }), et(W, l.chosenClass, !0);
      }, l.ignore.split(",").forEach(function(c) {
        Rl(W, c.trim(), Zo);
      }), de(s, "dragover", tn), de(s, "mousemove", tn), de(s, "touchmove", tn), l.supportPointer ? (de(s, "pointerup", r._onDrop), !this.nativeDraggable && de(s, "pointercancel", r._onDrop)) : (de(s, "mouseup", r._onDrop), de(s, "touchend", r._onDrop), de(s, "touchcancel", r._onDrop)), fa && this.nativeDraggable && (this.options.touchStartThreshold = 4, W.draggable = !0), Je("delayStart", this, {
        evt: n
      }), l.delay && (!l.delayOnTouchOnly || t) && (!this.nativeDraggable || !(Kn || Bt))) {
        if (ee.eventCanceled) {
          this._onDrop();
          return;
        }
        l.supportPointer ? (de(s, "pointerup", r._disableDelayedDrag), de(s, "pointercancel", r._disableDelayedDrag)) : (de(s, "mouseup", r._disableDelayedDrag), de(s, "touchend", r._disableDelayedDrag), de(s, "touchcancel", r._disableDelayedDrag)), de(s, "mousemove", r._delayedDragTouchMoveHandler), de(s, "touchmove", r._delayedDragTouchMoveHandler), l.supportPointer && de(s, "pointermove", r._delayedDragTouchMoveHandler), r._dragStartTimer = setTimeout(u, l.delay);
      } else
        u();
    }
  },
  _delayedDragTouchMoveHandler: function(n) {
    var t = n.touches ? n.touches[0] : n;
    Math.max(Math.abs(t.clientX - this._lastX), Math.abs(t.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    W && Zo(W), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var n = this.el.ownerDocument;
    ce(n, "mouseup", this._disableDelayedDrag), ce(n, "touchend", this._disableDelayedDrag), ce(n, "touchcancel", this._disableDelayedDrag), ce(n, "pointerup", this._disableDelayedDrag), ce(n, "pointercancel", this._disableDelayedDrag), ce(n, "mousemove", this._delayedDragTouchMoveHandler), ce(n, "touchmove", this._delayedDragTouchMoveHandler), ce(n, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(n, t) {
    t = t || n.pointerType == "touch" && n, !this.nativeDraggable || t ? this.options.supportPointer ? de(document, "pointermove", this._onTouchMove) : t ? de(document, "touchmove", this._onTouchMove) : de(document, "mousemove", this._onTouchMove) : (de(W, "dragend", this), de(Se, "dragstart", this._onDragStart));
    try {
      document.selection ? uo(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(n, t) {
    if (gn = !1, Se && W) {
      Je("dragStarted", this, {
        evt: t
      }), this.nativeDraggable && de(document, "dragover", Yc);
      var o = this.options;
      !n && et(W, o.dragClass, !1), et(W, o.ghostClass, !0), ee.active = this, n && this._appendGhost(), Ye({
        sortable: this,
        name: "start",
        originalEvent: t
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (ft) {
      this._lastX = ft.clientX, this._lastY = ft.clientY, zl();
      for (var n = document.elementFromPoint(ft.clientX, ft.clientY), t = n; n && n.shadowRoot && (n = n.shadowRoot.elementFromPoint(ft.clientX, ft.clientY), n !== t); )
        t = n;
      if (W.parentNode[Ze]._isOutsideThisEl(n), t)
        do {
          if (t[Ze]) {
            var o = void 0;
            if (o = t[Ze]._onDragOver({
              clientX: ft.clientX,
              clientY: ft.clientY,
              target: n,
              rootEl: t
            }), o && !this.options.dragoverBubble)
              break;
          }
          n = t;
        } while (t = Il(t));
      jl();
    }
  },
  _onTouchMove: function(n) {
    if (en) {
      var t = this.options, o = t.fallbackTolerance, r = t.fallbackOffset, a = n.touches ? n.touches[0] : n, l = ne && wn(ne, !0), s = ne && l && l.a, u = ne && l && l.d, i = ro && qe && va(qe), c = (a.clientX - en.clientX + r.x) / (s || 1) + (i ? i[0] - Qo[0] : 0) / (s || 1), d = (a.clientY - en.clientY + r.y) / (u || 1) + (i ? i[1] - Qo[1] : 0) / (u || 1);
      if (!ee.active && !gn) {
        if (o && Math.max(Math.abs(a.clientX - this._lastX), Math.abs(a.clientY - this._lastY)) < o)
          return;
        this._onDragStart(n, !0);
      }
      if (ne) {
        l ? (l.e += c - (Xo || 0), l.f += d - (Jo || 0)) : l = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: c,
          f: d
        };
        var m = "matrix(".concat(l.a, ",").concat(l.b, ",").concat(l.c, ",").concat(l.d, ",").concat(l.e, ",").concat(l.f, ")");
        Z(ne, "webkitTransform", m), Z(ne, "mozTransform", m), Z(ne, "msTransform", m), Z(ne, "transform", m), Xo = c, Jo = d, ft = a;
      }
      n.cancelable && n.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!ne) {
      var n = this.options.fallbackOnBody ? document.body : Se, t = Ae(W, !0, ro, !0, n), o = this.options;
      if (ro) {
        for (qe = n; Z(qe, "position") === "static" && Z(qe, "transform") === "none" && qe !== document; )
          qe = qe.parentNode;
        qe !== document.body && qe !== document.documentElement ? (qe === document && (qe = _t()), t.top += qe.scrollTop, t.left += qe.scrollLeft) : qe = _t(), Qo = va(qe);
      }
      ne = W.cloneNode(!0), et(ne, o.ghostClass, !1), et(ne, o.fallbackClass, !0), et(ne, o.dragClass, !0), Z(ne, "transition", ""), Z(ne, "transform", ""), Z(ne, "box-sizing", "border-box"), Z(ne, "margin", 0), Z(ne, "top", t.top), Z(ne, "left", t.left), Z(ne, "width", t.width), Z(ne, "height", t.height), Z(ne, "opacity", "0.8"), Z(ne, "position", ro ? "absolute" : "fixed"), Z(ne, "zIndex", "100000"), Z(ne, "pointerEvents", "none"), ee.ghost = ne, n.appendChild(ne), Z(ne, "transform-origin", ha / parseInt(ne.style.width) * 100 + "% " + ga / parseInt(ne.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(n, t) {
    var o = this, r = n.dataTransfer, a = o.options;
    if (Je("dragStart", this, {
      evt: n
    }), ee.eventCanceled) {
      this._onDrop();
      return;
    }
    Je("setupClone", this), ee.eventCanceled || (Oe = Ll(W), Oe.removeAttribute("id"), Oe.draggable = !1, Oe.style["will-change"] = "", this._hideClone(), et(Oe, this.options.chosenClass, !1), ee.clone = Oe), o.cloneId = uo(function() {
      Je("clone", o), !ee.eventCanceled && (o.options.removeCloneOnHide || Se.insertBefore(Oe, W), o._hideClone(), Ye({
        sortable: o,
        name: "clone"
      }));
    }), !t && et(W, a.dragClass, !0), t ? (yo = !0, o._loopId = setInterval(o._emulateDragOver, 50)) : (ce(document, "mouseup", o._onDrop), ce(document, "touchend", o._onDrop), ce(document, "touchcancel", o._onDrop), r && (r.effectAllowed = "move", a.setData && a.setData.call(o, r, W)), de(document, "drop", o), Z(W, "transform", "translateZ(0)")), gn = !0, o._dragStartId = uo(o._dragStarted.bind(o, t, n)), de(document, "selectstart", o), Rn = !0, window.getSelection().removeAllRanges(), Ln && Z(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(n) {
    var t = this.el, o = n.target, r, a, l, s = this.options, u = s.group, i = ee.active, c = no === u, d = s.sort, m = je || i, f, p = this, v = !1;
    if (pr) return;
    function g(pe, oe) {
      Je(pe, p, Tt({
        evt: n,
        isOwner: c,
        axis: f ? "vertical" : "horizontal",
        revert: l,
        dragRect: r,
        targetRect: a,
        canSort: d,
        fromSortable: m,
        target: o,
        completed: b,
        onMove: function(Ue, Ve) {
          return ao(Se, t, W, r, Ue, Ae(Ue), n, Ve);
        },
        changed: h
      }, oe));
    }
    function w() {
      g("dragOverAnimationCapture"), p.captureAnimationState(), p !== m && m.captureAnimationState();
    }
    function b(pe) {
      return g("dragOverCompleted", {
        insertion: pe
      }), pe && (c ? i._hideClone() : i._showClone(p), p !== m && (et(W, je ? je.options.ghostClass : i.options.ghostClass, !1), et(W, s.ghostClass, !0)), je !== p && p !== ee.active ? je = p : p === ee.active && je && (je = null), m === p && (p._ignoreWhileAnimating = o), p.animateAll(function() {
        g("dragOverAnimationComplete"), p._ignoreWhileAnimating = null;
      }), p !== m && (m.animateAll(), m._ignoreWhileAnimating = null)), (o === W && !W.animated || o === t && !o.animated) && (vn = null), !s.dragoverBubble && !n.rootEl && o !== document && (W.parentNode[Ze]._isOutsideThisEl(n.target), !pe && tn(n)), !s.dragoverBubble && n.stopPropagation && n.stopPropagation(), v = !0;
    }
    function h() {
      tt = st(W), Nt = st(W, s.draggable), Ye({
        sortable: p,
        name: "change",
        toEl: t,
        newIndex: tt,
        newDraggableIndex: Nt,
        originalEvent: n
      });
    }
    if (n.preventDefault !== void 0 && n.cancelable && n.preventDefault(), o = pt(o, s.draggable, t, !0), g("dragOver"), ee.eventCanceled) return v;
    if (W.contains(n.target) || o.animated && o.animatingX && o.animatingY || p._ignoreWhileAnimating === o)
      return b(!1);
    if (yo = !1, i && !s.disabled && (c ? d || (l = De !== Se) : je === this || (this.lastPutMode = no.checkPull(this, i, W, n)) && u.checkPut(this, i, W, n))) {
      if (f = this._getDirection(n, o) === "vertical", r = Ae(W), g("dragOverValid"), ee.eventCanceled) return v;
      if (l)
        return De = Se, w(), this._hideClone(), g("revert"), ee.eventCanceled || (on ? Se.insertBefore(W, on) : Se.appendChild(W)), b(!0);
      var C = Hr(t, s.draggable);
      if (!C || Zc(n, f, this) && !C.animated) {
        if (C === W)
          return b(!1);
        if (C && t === n.target && (o = C), o && (a = Ae(o)), ao(Se, t, W, r, o, a, n, !!o) !== !1)
          return w(), C && C.nextSibling ? t.insertBefore(W, C.nextSibling) : t.appendChild(W), De = t, h(), b(!0);
      } else if (C && Qc(n, f, this)) {
        var y = kn(t, 0, s, !0);
        if (y === W)
          return b(!1);
        if (o = y, a = Ae(o), ao(Se, t, W, r, o, a, n, !1) !== !1)
          return w(), t.insertBefore(W, y), De = t, h(), b(!0);
      } else if (o.parentNode === t) {
        a = Ae(o);
        var $ = 0, E, P = W.parentNode !== t, X = !qc(W.animated && W.toRect || r, o.animated && o.toRect || a, f), O = f ? "top" : "left", F = ma(o, "top", "top") || ma(W, "top", "top"), H = F ? F.scrollTop : void 0;
        vn !== o && (E = a[O], Nn = !1, oo = !X && s.invertSwap || P), $ = ed(n, o, a, f, X ? 1 : s.swapThreshold, s.invertedSwapThreshold == null ? s.swapThreshold : s.invertedSwapThreshold, oo, vn === o);
        var x;
        if ($ !== 0) {
          var D = st(W);
          do
            D -= $, x = De.children[D];
          while (x && (Z(x, "display") === "none" || x === ne));
        }
        if ($ === 0 || x === o)
          return b(!1);
        vn = o, Vn = $;
        var L = o.nextElementSibling, K = !1;
        K = $ === 1;
        var Q = ao(Se, t, W, r, o, a, n, K);
        if (Q !== !1)
          return (Q === 1 || Q === -1) && (K = Q === 1), pr = !0, setTimeout(Jc, 30), w(), K && !L ? t.appendChild(W) : o.parentNode.insertBefore(W, K ? L : o), F && Ml(F, 0, H - F.scrollTop), De = W.parentNode, E !== void 0 && !oo && (io = Math.abs(E - Ae(o)[O])), h(), b(!0);
      }
      if (t.contains(W))
        return b(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    ce(document, "mousemove", this._onTouchMove), ce(document, "touchmove", this._onTouchMove), ce(document, "pointermove", this._onTouchMove), ce(document, "dragover", tn), ce(document, "mousemove", tn), ce(document, "touchmove", tn);
  },
  _offUpEvents: function() {
    var n = this.el.ownerDocument;
    ce(n, "mouseup", this._onDrop), ce(n, "touchend", this._onDrop), ce(n, "pointerup", this._onDrop), ce(n, "pointercancel", this._onDrop), ce(n, "touchcancel", this._onDrop), ce(document, "selectstart", this);
  },
  _onDrop: function(n) {
    var t = this.el, o = this.options;
    if (tt = st(W), Nt = st(W, o.draggable), Je("drop", this, {
      evt: n
    }), De = W && W.parentNode, tt = st(W), Nt = st(W, o.draggable), ee.eventCanceled) {
      this._nulling();
      return;
    }
    gn = !1, oo = !1, Nn = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), mr(this.cloneId), mr(this._dragStartId), this.nativeDraggable && (ce(document, "drop", this), ce(t, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), Ln && Z(document.body, "user-select", ""), Z(W, "transform", ""), n && (Rn && (n.cancelable && n.preventDefault(), !o.dropBubble && n.stopPropagation()), ne && ne.parentNode && ne.parentNode.removeChild(ne), (Se === De || je && je.lastPutMode !== "clone") && Oe && Oe.parentNode && Oe.parentNode.removeChild(Oe), W && (this.nativeDraggable && ce(W, "dragend", this), Zo(W), W.style["will-change"] = "", Rn && !gn && et(W, je ? je.options.ghostClass : this.options.ghostClass, !1), et(W, this.options.chosenClass, !1), Ye({
      sortable: this,
      name: "unchoose",
      toEl: De,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: n
    }), Se !== De ? (tt >= 0 && (Ye({
      rootEl: De,
      name: "add",
      toEl: De,
      fromEl: Se,
      originalEvent: n
    }), Ye({
      sortable: this,
      name: "remove",
      toEl: De,
      originalEvent: n
    }), Ye({
      rootEl: De,
      name: "sort",
      toEl: De,
      fromEl: Se,
      originalEvent: n
    }), Ye({
      sortable: this,
      name: "sort",
      toEl: De,
      originalEvent: n
    })), je && je.save()) : tt !== bn && tt >= 0 && (Ye({
      sortable: this,
      name: "update",
      toEl: De,
      originalEvent: n
    }), Ye({
      sortable: this,
      name: "sort",
      toEl: De,
      originalEvent: n
    })), ee.active && ((tt == null || tt === -1) && (tt = bn, Nt = Fn), Ye({
      sortable: this,
      name: "end",
      toEl: De,
      originalEvent: n
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    Je("nulling", this), Se = W = De = ne = on = Oe = so = zt = en = ft = Rn = tt = Nt = bn = Fn = vn = Vn = je = no = ee.dragged = ee.ghost = ee.clone = ee.active = null, xo.forEach(function(n) {
      n.checked = !0;
    }), xo.length = Xo = Jo = 0;
  },
  handleEvent: function(n) {
    switch (n.type) {
      case "drop":
      case "dragend":
        this._onDrop(n);
        break;
      case "dragenter":
      case "dragover":
        W && (this._onDragOver(n), Xc(n));
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
      t = o[r], pt(t, l.draggable, this.el, !1) && n.push(t.getAttribute(l.dataIdAttr) || nd(t));
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
      pt(s, this.options.draggable, r, !1) && (o[a] = s);
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
    return pt(n, t || this.options.draggable, this.el, !1);
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
    typeof r < "u" ? o[n] = r : o[n] = t, n === "group" && Nl(o);
  },
  /**
   * Destroy
   */
  destroy: function() {
    Je("destroy", this);
    var n = this.el;
    n[Ze] = null, ce(n, "mousedown", this._onTapStart), ce(n, "touchstart", this._onTapStart), ce(n, "pointerdown", this._onTapStart), this.nativeDraggable && (ce(n, "dragover", this), ce(n, "dragenter", this)), Array.prototype.forEach.call(n.querySelectorAll("[draggable]"), function(t) {
      t.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), wo.splice(wo.indexOf(this.el), 1), this.el = n = null;
  },
  _hideClone: function() {
    if (!zt) {
      if (Je("hideClone", this), ee.eventCanceled) return;
      Z(Oe, "display", "none"), this.options.removeCloneOnHide && Oe.parentNode && Oe.parentNode.removeChild(Oe), zt = !0;
    }
  },
  _showClone: function(n) {
    if (n.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (zt) {
      if (Je("showClone", this), ee.eventCanceled) return;
      W.parentNode == Se && !this.options.group.revertClone ? Se.insertBefore(Oe, W) : on ? Se.insertBefore(Oe, on) : Se.appendChild(Oe), this.options.group.revertClone && this.animate(W, Oe), Z(Oe, "display", ""), zt = !1;
    }
  }
};
function Xc(e) {
  e.dataTransfer && (e.dataTransfer.dropEffect = "move"), e.cancelable && e.preventDefault();
}
function ao(e, n, t, o, r, a, l, s) {
  var u, i = e[Ze], c = i.options.onMove, d;
  return window.CustomEvent && !Bt && !Kn ? u = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (u = document.createEvent("Event"), u.initEvent("move", !0, !0)), u.to = n, u.from = e, u.dragged = t, u.draggedRect = o, u.related = r || n, u.relatedRect = a || Ae(n), u.willInsertAfter = s, u.originalEvent = l, e.dispatchEvent(u), c && (d = c.call(i, u, l)), d;
}
function Zo(e) {
  e.draggable = !1;
}
function Jc() {
  pr = !1;
}
function Qc(e, n, t) {
  var o = Ae(kn(t.el, 0, t.options, !0)), r = Bl(t.el, t.options, ne), a = 10;
  return n ? e.clientX < r.left - a || e.clientY < o.top && e.clientX < o.right : e.clientY < r.top - a || e.clientY < o.bottom && e.clientX < o.left;
}
function Zc(e, n, t) {
  var o = Ae(Hr(t.el, t.options.draggable)), r = Bl(t.el, t.options, ne), a = 10;
  return n ? e.clientX > r.right + a || e.clientY > o.bottom && e.clientX > o.left : e.clientY > r.bottom + a || e.clientX > o.right && e.clientY > o.top;
}
function ed(e, n, t, o, r, a, l, s) {
  var u = o ? e.clientY : e.clientX, i = o ? t.height : t.width, c = o ? t.top : t.left, d = o ? t.bottom : t.right, m = !1;
  if (!l) {
    if (s && io < i * r) {
      if (!Nn && (Vn === 1 ? u > c + i * a / 2 : u < d - i * a / 2) && (Nn = !0), Nn)
        m = !0;
      else if (Vn === 1 ? u < c + io : u > d - io)
        return -Vn;
    } else if (u > c + i * (1 - r) / 2 && u < d - i * (1 - r) / 2)
      return td(n);
  }
  return m = m || l, m && (u < c + i * a / 2 || u > d - i * a / 2) ? u > c + i / 2 ? 1 : -1 : 0;
}
function td(e) {
  return st(W) < st(e) ? 1 : -1;
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
function mr(e) {
  return clearTimeout(e);
}
Bo && de(document, "touchmove", function(e) {
  (ee.active || gn) && e.cancelable && e.preventDefault();
});
ee.utils = {
  on: de,
  off: ce,
  css: Z,
  find: Rl,
  is: function(n, t) {
    return !!pt(n, t, n, !1);
  },
  extend: Vc,
  throttle: Al,
  closest: pt,
  toggleClass: et,
  clone: Ll,
  index: st,
  nextTick: uo,
  cancelNextTick: mr,
  detectDirection: Vl,
  getChild: kn,
  expando: Ze
};
ee.get = function(e) {
  return e[Ze];
};
ee.mount = function() {
  for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
    n[t] = arguments[t];
  n[0].constructor === Array && (n = n[0]), n.forEach(function(o) {
    if (!o.prototype || !o.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(o));
    o.utils && (ee.utils = Tt(Tt({}, ee.utils), o.utils)), Yn.mount(o);
  });
};
ee.create = function(e, n) {
  return new ee(e, n);
};
ee.version = Bc;
var Re = [], An, vr, hr = !1, er, tr, ko, Mn;
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
      this.sortable.nativeDraggable ? de(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? de(document, "pointermove", this._handleFallbackAutoScroll) : o.touches ? de(document, "touchmove", this._handleFallbackAutoScroll) : de(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(t) {
      var o = t.originalEvent;
      !this.options.dragOverBubble && !o.rootEl && this._handleAutoScroll(o);
    },
    drop: function() {
      this.sortable.nativeDraggable ? ce(document, "dragover", this._handleAutoScroll) : (ce(document, "pointermove", this._handleFallbackAutoScroll), ce(document, "touchmove", this._handleFallbackAutoScroll), ce(document, "mousemove", this._handleFallbackAutoScroll)), ya(), co(), Nc();
    },
    nulling: function() {
      ko = vr = An = hr = Mn = er = tr = null, Re.length = 0;
    },
    _handleFallbackAutoScroll: function(t) {
      this._handleAutoScroll(t, !0);
    },
    _handleAutoScroll: function(t, o) {
      var r = this, a = (t.touches ? t.touches[0] : t).clientX, l = (t.touches ? t.touches[0] : t).clientY, s = document.elementFromPoint(a, l);
      if (ko = t, o || this.options.forceAutoScrollFallback || Kn || Bt || Ln) {
        nr(t, this.options, s, o);
        var u = Ht(s, !0);
        hr && (!Mn || a !== er || l !== tr) && (Mn && ya(), Mn = setInterval(function() {
          var i = Ht(document.elementFromPoint(a, l), !0);
          i !== u && (u = i, co()), nr(t, r.options, i, o);
        }, 10), er = a, tr = l);
      } else {
        if (!this.options.bubbleScroll || Ht(s, !0) === _t()) {
          co();
          return;
        }
        nr(t, this.options, Ht(s, !1), !1);
      }
    }
  }, Lt(e, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function co() {
  Re.forEach(function(e) {
    clearInterval(e.pid);
  }), Re = [];
}
function ya() {
  clearInterval(Mn);
}
var nr = Al(function(e, n, t, o) {
  if (n.scroll) {
    var r = (e.touches ? e.touches[0] : e).clientX, a = (e.touches ? e.touches[0] : e).clientY, l = n.scrollSensitivity, s = n.scrollSpeed, u = _t(), i = !1, c;
    vr !== t && (vr = t, co(), An = n.scroll, c = n.scrollFn, An === !0 && (An = Ht(t, !0)));
    var d = 0, m = An;
    do {
      var f = m, p = Ae(f), v = p.top, g = p.bottom, w = p.left, b = p.right, h = p.width, C = p.height, y = void 0, $ = void 0, E = f.scrollWidth, P = f.scrollHeight, X = Z(f), O = f.scrollLeft, F = f.scrollTop;
      f === u ? (y = h < E && (X.overflowX === "auto" || X.overflowX === "scroll" || X.overflowX === "visible"), $ = C < P && (X.overflowY === "auto" || X.overflowY === "scroll" || X.overflowY === "visible")) : (y = h < E && (X.overflowX === "auto" || X.overflowX === "scroll"), $ = C < P && (X.overflowY === "auto" || X.overflowY === "scroll"));
      var H = y && (Math.abs(b - r) <= l && O + h < E) - (Math.abs(w - r) <= l && !!O), x = $ && (Math.abs(g - a) <= l && F + C < P) - (Math.abs(v - a) <= l && !!F);
      if (!Re[d])
        for (var D = 0; D <= d; D++)
          Re[D] || (Re[D] = {});
      (Re[d].vx != H || Re[d].vy != x || Re[d].el !== f) && (Re[d].el = f, Re[d].vx = H, Re[d].vy = x, clearInterval(Re[d].pid), (H != 0 || x != 0) && (i = !0, Re[d].pid = setInterval((function() {
        o && this.layer === 0 && ee.active._onTouchMove(ko);
        var L = Re[this.layer].vy ? Re[this.layer].vy * s : 0, K = Re[this.layer].vx ? Re[this.layer].vx * s : 0;
        typeof c == "function" && c.call(ee.dragged.parentNode[Ze], K, L, e, ko, Re[this.layer].el) !== "continue" || Ml(Re[this.layer].el, K, L);
      }).bind({
        layer: d
      }), 24))), d++;
    } while (n.bubbleScroll && m !== u && (m = Ht(m, !1)));
    hr = i;
  }
}, 30), Hl = function(n) {
  var t = n.originalEvent, o = n.putSortable, r = n.dragEl, a = n.activeSortable, l = n.dispatchSortableEvent, s = n.hideGhostForTarget, u = n.unhideGhostForTarget;
  if (t) {
    var i = o || a;
    s();
    var c = t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t, d = document.elementFromPoint(c.clientX, c.clientY);
    u(), i && !i.el.contains(d) && (l("spill"), this.onSpill({
      dragEl: r,
      putSortable: o
    }));
  }
};
function Wr() {
}
Wr.prototype = {
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
  drop: Hl
};
Lt(Wr, {
  pluginName: "revertOnSpill"
});
function Ur() {
}
Ur.prototype = {
  onSpill: function(n) {
    var t = n.dragEl, o = n.putSortable, r = o || this.sortable;
    r.captureAnimationState(), t.parentNode && t.parentNode.removeChild(t), r.animateAll();
  },
  drop: Hl
};
Lt(Ur, {
  pluginName: "removeOnSpill"
});
ee.mount(new rd());
ee.mount(Ur, Wr);
const Co = /* @__PURE__ */ j({
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
    const o = e, r = t, a = Jl(), l = k(!1), s = k(null), u = k(null), i = _(() => typeof o.itemKey == "string" ? (c) => c[o.itemKey] : o.itemKey);
    return n({
      containerRef: s,
      sortable: u,
      isDragging: l
    }), se(s, (c) => {
      c && (u.value = new ee(c, {
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
    }), se(
      () => o.options,
      (c) => {
        if (c && (u != null && u.value))
          for (const d in c)
            u.value.option(
              d,
              c[d]
            );
      }
    ), be(() => {
      u.value && (u.value.destroy(), s.value = null, u.value = null);
    }), (c, d) => (S(), fe(Oa(c.$props.tag), {
      ref_key: "containerRef",
      ref: s,
      class: V(c.$props.class)
    }, {
      default: G(() => [
        U(c.$slots, "header"),
        (S(!0), A(ge, null, We(e.list, (m, f) => U(c.$slots, "item", {
          key: i.value(m),
          element: m,
          index: f
        })), 128)),
        U(c.$slots, "footer")
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
function nn(e) {
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
    k(!1);
    const r = k({
      ...t.modelValue,
      id: t.groupId
    }), a = k();
    se(
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
      const u = {
        ...r.value,
        id: t.groupId
      };
      o("update:modelValue", u), o("update", t.groupId);
    };
    return (s, u) => !s.disabled.includes("groups") && r.value ? (S(), fe(ac, {
      key: 0,
      ref_key: "popover",
      ref: a,
      theme: {
        popoverMenu: "leading-none",
        popoverMenuButton: "rounded-md size-6 flex items-center justify-center hover:bg-zinc-100"
      }
    }, {
      trigger: G(() => [
        T("span", {
          class: "block h-3 w-3 rounded-full",
          style: qt(`background-color: ${r.value.color || s.defaultGroupColor};`)
        }, null, 4)
      ]),
      default: G(({ close: i }) => [
        T("div", ld, [
          T("div", sd, [
            u[2] || (u[2] = T("div", { class: "block text-sm font-medium text-foreground" }, " Group name ", -1)),
            q($a, {
              modelValue: r.value.name,
              "onUpdate:modelValue": u[0] || (u[0] = (c) => r.value.name = c),
              type: "text",
              placeholder: `${r.value.name}`,
              theme: {
                input: "py-1.5"
              }
            }, null, 8, ["modelValue", "placeholder"])
          ]),
          T("div", id, [
            u[3] || (u[3] = T("div", { class: "block text-sm font-medium text-foreground" }, " Group color ", -1)),
            q(Hu, {
              "model-value": r.value.color,
              "onUpdate:modelValue": u[1] || (u[1] = (c) => r.value.color = c)
            }, null, 8, ["model-value"])
          ]),
          T("div", ud, [
            q(ot, {
              onClick: (c) => l(i),
              size: "sm",
              variant: "outline"
            }, {
              default: G(() => u[4] || (u[4] = [
                Gt(" Save ")
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
}), dd = ["id"], fd = { class: "mb-4 last:mb-0" }, pd = { class: "sortable-drag flex min-w-px grow items-center space-x-2 text-base" }, md = {
  key: 0,
  class: "shrink-0 text-sm"
}, vd = { key: 1 }, hd = ["data-sortable-item-id"], gd = { class: "ml-auto flex items-center space-x-1 p-1" }, bd = { class: "flex -space-x-px" }, op = /* @__PURE__ */ j({
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
    const a = k({ Default: [] }), l = k({}), s = k(!1), u = k(), i = k(r.focusedColumn), c = k(""), d = k([]), m = k((Math.random() + 1).toString(36).substring(7)), f = k(!1);
    k({
      id: "",
      name: "",
      color: ""
    }), se(
      () => r.focusedColumn,
      (x) => {
        i.value = x;
      },
      { immediate: !0 }
    );
    const p = _({
      get: () => i.value,
      set: (x) => {
        i.value = x, o("update:focusedColumn", x);
      }
    });
    function v() {
      return `group_${Math.random().toString(36).substring(2, 9)}`;
    }
    se(
      () => r.existingColumns,
      (x) => {
        a.value = x.length === 0 ? {
          Default: []
        } : ad([...x]);
      },
      { immediate: !0 }
    ), se(
      () => r.groupConfiguration,
      () => {
        const x = {};
        Object.entries(r.groupConfiguration).forEach(([D, L]) => {
          const K = L.id || D;
          x[K] = {
            ...L,
            id: K
            // Ensure ID is set
          };
        }), l.value = x;
      },
      { immediate: !0, deep: !0 }
    ), se(
      () => l.value,
      (x) => {
        Object.entries(x).forEach(([D, L]) => {
          L.id || (L.id = D);
        });
      },
      { deep: !0 }
    );
    function g(x) {
      console.log("clicked list item", x.currentTarget);
    }
    function w(x) {
      const D = l.value[x];
      if (!D) return;
      const L = l.value[x];
      if (L) {
        if (l.value[x] = {
          ...L,
          id: x
          // Ensure we keep the original ID
        }, D.name !== L.name) {
          const K = a.value[D.name] || [];
          delete a.value[D.name], a.value[L.name] = K.map((Q) => ({
            ...Q,
            group: L.name
          }));
        }
        o("update:groupConfiguration", l.value), o("update:existingColumns", nn(a.value));
      }
    }
    function b(x, D) {
      const L = a.value[x][D];
      i.value && i.value.id === L.id && (p.value = null), a.value = {
        ...a.value,
        [x]: a.value[x].filter(
          (K, Q) => Q !== D
        )
      }, o("update:existingColumns", nn(a.value));
    }
    function h() {
      const x = v(), D = c.value;
      a.value = {
        ...a.value,
        [x]: []
      }, l.value[x] = {
        id: x,
        name: D,
        color: r.defaultGroupColor
      }, c.value = "", s.value = !1, setTimeout(() => {
        const L = document.getElementById(
          `column-manager-groups-container-${m.value}`
        );
        L && L.scrollTo({
          top: L.scrollHeight,
          behavior: "smooth"
        });
      }, 250);
    }
    function C(x) {
      const D = l.value[x];
      D && (delete a.value[D.name], delete l.value[x], o("update:existingColumns", nn(a.value)), o("update:groupConfiguration", l.value));
    }
    function y(x) {
      a.value = {
        ...a.value,
        [x]: []
      }, d.value.includes(x) || d.value.push(x);
    }
    function $(x, D) {
      const L = D.splice(x.oldIndex, 1)[0];
      return D.splice(Math.min(x.newIndex, D.length), 0, L), D;
    }
    function E(x, D) {
      a.value[x] = $(
        D,
        a.value[x]
      ), o("update:existingColumns", nn(a.value));
    }
    function P(x) {
    }
    function X(x, D) {
      const L = D.from.dataset.groupName || "Default", K = F(D).from.map(
        (Q) => a.value[L][Q]
      ).map((Q) => ({ ...Q, group: x }));
      a.value[x].splice(
        F(D).to[0],
        0,
        ...K
      ), o("update:existingColumns", nn(a.value));
    }
    function O(x, D) {
      a.value[x].splice(D.oldIndex, 1), o("update:existingColumns", nn(a.value));
    }
    function F(x) {
      var D, L, K;
      return {
        domElements: (D = x.items) != null && D.length ? x.items : [x.item],
        from: (L = x.oldIndicies) != null && L.length ? x.oldIndicies.map((Q) => Q.index) : [x.oldIndex],
        to: (K = x.newIndicies) != null && K.length ? x.newIndicies.map((Q) => Q.index) : [x.newIndex]
      };
    }
    function H(x, D) {
      console.log("onPickedNewColumn", a.value, x, D), D && (D.group = x, a.value = {
        ...a.value,
        [x]: [...a.value[x], D]
      }, o("update:existingColumns", nn(a.value)));
    }
    return _(
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
            y(x.groupName);
          }
        },
        r.disabled.includes("groups") ? !1 : {
          icon: "fa-trash",
          label: "Remove group",
          onClick: (x) => {
            Object.entries(
              a.value
            ).length <= 1 || C(x.groupId);
          }
        }
      ].filter(Boolean)
    ), n({
      clearAllColumns: y,
      onPickedNewColumn: H,
      removeGroup: C
    }), (x, D) => (S(), A("div", {
      class: V(
        I(ae)(
          "w-full overflow-hidden h-full border border-border bg-background rounded-lg sm:min-w-60 flex flex-col md:flex-row",
          x.theme.columnManagerContainer
        )
      )
    }, [
      Object.values(l.value).length === 0 ? (S(), fe(qo, {
        key: 0,
        icon: "fa-exclamation-circle",
        title: "Nothing here, yet"
      }, {
        default: G(() => D[6] || (D[6] = [
          T("p", null, "There are no groups here yet. Add a new group to get started.", -1)
        ])),
        _: 1,
        __: [6]
      })) : le("", !0),
      T("div", {
        id: `column-manager-groups-container-${m.value}`,
        class: V(
          I(ae)("overflow-y-auto h-full", x.theme.columnManagerGroupsContainer)
        )
      }, [
        (S(), fe(I(Co), {
          list: Object.values(l.value).filter(
            (L) => L.name
          ),
          key: "groups",
          "item-key": "id",
          tag: "div",
          class: V(I(ae)("p-3", x.theme.columnManagerGroupContainer)),
          "data-group-name": "groups",
          options: {
            animation: 150,
            group: "shared-groups",
            handle: ".drag-handle",
            selectedClass: "selected"
          },
          onStart: D[0] || (D[0] = (L) => f.value = !0),
          onEnd: D[1] || (D[1] = (L) => f.value = !1),
          onUpdate: D[2] || (D[2] = (L) => void 0)
        }, {
          item: G(({ element: L }) => [
            T("div", fd, [
              T("div", {
                class: V(I(ae)(x.theme.columnManagerGroupHeader))
              }, [
                T("div", pd, [
                  x.disabled.includes("groups") ? le("", !0) : U(x.$slots, "drag-handle", { key: 0 }),
                  q(cd, {
                    modelValue: l.value[L.id],
                    "onUpdate:modelValue": (K) => l.value[L.id] = K,
                    "default-group-color": x.defaultGroupColor,
                    disabled: x.disabled,
                    "group-id": L.id,
                    onUpdate: w
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "default-group-color", "disabled", "group-id"]),
                  T("span", {
                    class: V(["font-semibold", x.theme.columnManagerGroupLabel])
                  }, he(l.value[L.id].name), 3)
                ]),
                x.groupMenuItems ? (S(), A("span", md)) : le("", !0)
              ], 2),
              f.value ? le("", !0) : (S(), A("div", {
                key: 0,
                class: V(
                  I(ae)(
                    "group flex items-center justify-end space-x-2 py-2 ",
                    x.theme.typeaheadContainer
                  )
                )
              }, [
                q($l, {
                  ref_key: "columnFinderTypeahead",
                  ref: u,
                  "default-items": x.defaultItems,
                  "display-property": () => "",
                  "groups-config": x.typeaheadGroupsConfig,
                  "group-by": x.typeaheadGroupBy,
                  multiple: !1,
                  nullable: !0,
                  searcher: x.searcher,
                  "middleware-options": x.typeaheadMiddlewareOptions,
                  placeholder: "Add a column to group",
                  "onUpdate:modelValue": (K) => H(
                    L.id,
                    K
                  )
                }, Ql({
                  empty: G(() => [
                    q(qo, {
                      icon: "fa-exclamation-circle",
                      title: "No columns found"
                    }, {
                      default: G(() => D[7] || (D[7] = [
                        T("p", null, " There are no columns to show at this time. Try a different search. ", -1)
                      ])),
                      _: 1,
                      __: [7]
                    })
                  ]),
                  static: G(() => [
                    T("div", null, [
                      U(x.$slots, "typeahead-static")
                    ])
                  ]),
                  item: G(({ item: K, selected: Q, active: pe }) => [
                    U(x.$slots, "option", at(vt({ item: K, selected: Q, active: pe })))
                  ]),
                  _: 2
                }, [
                  x.$slots["typeahead-group"] ? {
                    name: "group",
                    fn: G((K) => [
                      U(x.$slots, "typeahead-group", at(vt(K)))
                    ]),
                    key: "0"
                  } : void 0,
                  x.$slots["typeahead-searching"] ? {
                    name: "searching",
                    fn: G(() => [
                      T("div", null, [
                        U(x.$slots, "typeahead-searching")
                      ])
                    ]),
                    key: "1"
                  } : void 0
                ]), 1032, ["default-items", "groups-config", "group-by", "searcher", "middleware-options", "onUpdate:modelValue"])
              ], 2)),
              !f.value && (a.value[L.id] || []).length === 0 ? (S(), A("div", vd, [
                q(qo, {
                  title: "No columns",
                  description: "There are no columns here yet. Use the picker above to add the first column."
                }, {
                  default: G(() => D[8] || (D[8] = [
                    T("p", null, " There are no columns here yet. Use the picker above to add the first column. ", -1)
                  ])),
                  _: 1,
                  __: [8]
                })
              ])) : le("", !0),
              f.value ? le("", !0) : (S(), fe(I(Co), {
                list: a.value[L.id],
                key: JSON.stringify(a.value[L.id]),
                "item-key": "id",
                tag: "div",
                class: V([`sortable-group-${L.id}`]),
                "data-group-name": L.id,
                options: {
                  animation: 150,
                  group: "shared-columns",
                  handle: ".drag-handle",
                  // multiDrag: true,
                  selectedClass: "selected",
                  emptyInsertThreshold: 100
                },
                onAdd: (K) => X(L.id, K),
                onRemove: (K) => O(L.id, K),
                onUpdate: (K) => E(L.id, K)
              }, {
                item: G(({ element: K, index: Q }) => [
                  (S(), A("div", {
                    class: V(["group flex w-full hover:bg-accent/50 rounded-md items-center gap-2 [&.selected]:bg-accent/50", I(ae)(x.theme.columnManagerItem)]),
                    key: K.id,
                    "data-sortable-item-id": K.id,
                    onClick: g
                  }, [
                    U(x.$slots, "drag-handle", {}, () => [
                      q(ot, {
                        variant: "ghost",
                        size: "xs",
                        icon: "",
                        class: "drag-handle shrink-0 text-muted-foreground/70 hover:text-foreground rounded-sm hover:bg-black/5"
                      }, {
                        default: G(() => [
                          q(I(ys), { class: "size-3.5 shrink-0" })
                        ]),
                        _: 1
                      })
                    ]),
                    U(x.$slots, "column", at(vt({ element: K }))),
                    T("div", gd, [
                      q(ot, {
                        onClick: ln((pe) => b(
                          L.id,
                          Q
                        ), ["prevent", "stop"]),
                        variant: "ghost",
                        size: "xs",
                        icon: "",
                        class: "shrink-0 rounded-sm text-muted-foreground/70 hover:text-foreground hover:bg-black/5"
                      }, {
                        default: G(() => [
                          q(I(gr), { class: "size-4 shrink-0" })
                        ]),
                        _: 2
                      }, 1032, ["onClick"]),
                      q(ot, {
                        onClick: ln((pe) => p.value = a.value[L.id][Q], ["prevent", "stop"]),
                        variant: "ghost",
                        size: "xs",
                        icon: "",
                        class: "shrink-0 rounded-sm text-muted-foreground/70 hover:text-foreground hover:bg-black/5"
                      }, {
                        default: G(() => [
                          q(I(bs), { class: "size-4 shrink-0" })
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
        x.disabled.includes("groups") ? le("", !0) : (S(), A("div", {
          key: 0,
          class: V(["sticky bottom-0 z-2 flex items-center gap-2 p-3 bg-background/90 backdrop-blur-sm", I(ae)(x.theme.columnManagerNewGroupContainer)])
        }, [
          q(it, {
            "enter-active-class": "transition duration-200 ease-out",
            "enter-from-class": "translate-y-1 opacity-0",
            "enter-to-class": "translate-y-0 opacity-100",
            "leave-active-class": "transition duration-150 ease-in",
            "leave-from-class": "translate-y-0 opacity-100",
            "leave-to-class": "translate-y-1 opacity-0"
          }, {
            default: G(() => [
              Wt(T("span", bd, [
                q($a, {
                  id: "column-manager-new-group-name",
                  name: "column-manager-new-group-name",
                  placeholder: "New group name",
                  modelValue: c.value,
                  "onUpdate:modelValue": D[3] || (D[3] = (L) => c.value = L),
                  onKeyup: D[4] || (D[4] = Ea((L) => h(), ["enter"])),
                  theme: {
                    input: "w-full py-1.5"
                  },
                  type: "text"
                }, null, 8, ["modelValue"])
              ], 512), [
                [Ut, s.value]
              ])
            ]),
            _: 1
          }),
          q(ot, {
            onClick: D[5] || (D[5] = (L) => s.value = !s.value),
            theme: { button: x.theme.addGroupButton },
            size: "sm",
            variant: "outline"
          }, {
            default: G(() => [
              Gt(he(s.value ? "Cancel" : "Add a group"), 1)
            ]),
            _: 1
          }, 8, ["theme"])
        ], 2))
      ], 10, dd),
      U(x.$slots, "default")
    ], 2));
  }
});
function yd(e, n) {
  return S(), A("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    T("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
    })
  ]);
}
function wd(e, n) {
  return S(), A("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    T("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m7.49 12-3.75 3.75m0 0 3.75 3.75m-3.75-3.75h16.5V4.499"
    })
  ]);
}
function wa(e, n) {
  return S(), A("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    T("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
    })
  ]);
}
const xd = { class: "ml-2 grow min-w-px text-left" }, kd = { class: "ml-6 rounded border px-2 py-0.5 text-xs bg-card hidden sm:inline-block" }, Cd = { class: "fixed inset-0 bg-background/50 backdrop-blur-sm" }, Sd = { class: "fixed inset-0 overflow-y-auto" }, _d = { class: "flex min-h-full items-start justify-center p-4 pt-16 sm:items-center sm:pt-4" }, Ed = { class: "w-[calc(100vw-2rem)] sm:w-[400px] transform overflow-hidden rounded-2xl bg-card p-0 shadow-2xl border transition-all max-h-[calc(100vh-8rem)] sm:max-h-[calc(100vh-4rem)] flex flex-col" }, Od = { class: "text-xs font-medium text-muted-foreground my-2 px-3" }, Td = { class: "space-y-0.5" }, $d = ["href"], Dd = { class: "text-muted-foreground group-hover:text-primary transition" }, Pd = { class: "flex-1 min-w-0" }, Id = { class: "text-sm text-foreground truncate" }, Rd = {
  key: 1,
  class: "py-4 text-center text-sm text-muted-foreground flex-1 flex items-center justify-center"
}, Ad = { class: "border-t px-4 py-3 flex items-center gap-2 bg-card rounded-b-2xl flex-shrink-0" }, Md = { class: "rounded border text-muted-foreground size-5 flex items-center justify-center text-xs bg-card hidden sm:flex" }, Ld = { class: "text-xs text-muted-foreground" }, rp = /* @__PURE__ */ j({
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
    const n = e, t = k(!1), o = k(""), r = k([]), a = (i) => {
      (n.triggerModifier === "metaKey" ? i.metaKey : i.ctrlKey) && i.key === n.triggerKey && (i.preventDefault(), t.value = !0), i.key === "Escape" && (t.value = !1);
    }, l = async (i) => {
      const c = i.target;
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
    }, s = (i) => {
      console.log("onSelect", i), t.value = !1, o.value = "", r.value = n.defaultResults;
    }, u = () => {
      t.value = !0;
    };
    return ie(() => {
      window.addEventListener("keydown", a), r.value = n.defaultResults;
    }), be(() => {
      window.removeEventListener("keydown", a);
    }), (i, c) => (S(), fe(I(Ar), { "onUpdate:modelValue": s }, {
      default: G(() => [
        q(I(Mr), {
          as: "span",
          onClick: u
        }, {
          default: G(() => [
            q(ot, {
              variant: "outline",
              class: "w-full pr-2 pl-3"
            }, {
              default: G(() => [
                q(I(wa), { class: "size-4 shrink-0" }),
                T("span", xd, he(i.placeholder), 1),
                T("kbd", kd, he(i.keyboardShortcut), 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        q(it, {
          "enter-active-class": "ease-out duration-300",
          "enter-from-class": "opacity-0",
          "enter-to-class": "opacity-100",
          "leave-active-class": "ease-in duration-200",
          "leave-from-class": "opacity-100",
          "leave-to-class": "opacity-0"
        }, {
          default: G(() => [
            Wt(T("div", {
              class: "fixed inset-0 z-50",
              onClick: c[2] || (c[2] = (d) => t.value = !1)
            }, [
              q(it, {
                "enter-active-class": "ease-out duration-300",
                "enter-from-class": "opacity-0",
                "enter-to-class": "opacity-100",
                "leave-active-class": "ease-in duration-200",
                "leave-from-class": "opacity-100",
                "leave-to-class": "opacity-0"
              }, {
                default: G(() => [
                  Wt(T("div", Cd, null, 512), [
                    [Ut, t.value]
                  ])
                ]),
                _: 1
              }),
              T("div", Sd, [
                T("div", _d, [
                  q(it, {
                    "enter-active-class": "ease-out duration-300",
                    "enter-from-class": "opacity-0 scale-95",
                    "enter-to-class": "opacity-100 scale-100",
                    "leave-active-class": "ease-in duration-200",
                    "leave-from-class": "opacity-100 scale-100",
                    "leave-to-class": "opacity-0 scale-95"
                  }, {
                    default: G(() => [
                      Wt(T("div", Ed, [
                        T("div", {
                          class: "relative border-b px-2 pt-2 pb-2 flex-shrink-0",
                          onClick: c[1] || (c[1] = ln(() => {
                          }, ["stop"]))
                        }, [
                          q(I(wa), { class: "pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" }),
                          q(I(Lr), {
                            modelValue: o.value,
                            "onUpdate:modelValue": c[0] || (c[0] = (d) => o.value = d),
                            placeholder: i.inputPlaceholder,
                            autofocus: "",
                            type: "text",
                            onChange: l,
                            class: "flex w-full rounded-md border border-border bg-background pr-3 pl-9 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground/70 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring transition-[box-shadow,color] disabled:cursor-not-allowed disabled:opacity-50"
                          }, null, 8, ["modelValue", "placeholder"])
                        ]),
                        r.value.length > 0 ? (S(), fe(I(Br), {
                          key: 0,
                          static: "",
                          class: "px-2 pt-2 pb-4 flex-1 overflow-y-auto"
                        }, {
                          default: G(() => [
                            T("div", Od, he(o.value ? i.resultsLabel : i.defaultResultsLabel), 1),
                            T("div", Td, [
                              (S(!0), A(ge, null, We(r.value, (d) => (S(), fe(I(Hn), {
                                key: d.id,
                                value: d
                              }, {
                                default: G(({ active: m, selected: f }) => [
                                  T("a", {
                                    href: d.url,
                                    class: V(["flex items-center gap-3 px-3 py-2 sm:py-1.5 hover:bg-accent/80 transition group rounded-md touch-manipulation", {
                                      "bg-accent": f || m
                                    }])
                                  }, [
                                    T("span", Dd, [
                                      q(I(yd), { class: "size-4 shrink-0" })
                                    ]),
                                    T("div", Pd, [
                                      T("div", Id, he(d.title), 1)
                                    ])
                                  ], 10, $d)
                                ]),
                                _: 2
                              }, 1032, ["value"]))), 128))
                            ])
                          ]),
                          _: 1
                        })) : o.value ? (S(), A("div", Rd, he(i.noResultsText), 1)) : le("", !0),
                        T("div", Ad, [
                          T("kbd", Md, [
                            q(I(wd), { class: "size-3" })
                          ]),
                          T("span", Ld, he(i.footerText), 1)
                        ])
                      ], 512), [
                        [Ut, t.value]
                      ])
                    ]),
                    _: 1
                  })
                ])
              ])
            ], 512), [
              [Ut, t.value]
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), Bd = { class: "z-51 fixed inset-0 overflow-y-auto" }, Fd = { class: "flex min-h-full items-center justify-center p-4 text-center" }, Vd = { class: "space-y-4" }, Nd = { class: "mt-2 grow" }, zd = { class: "text-sm text-[var(--muted-foreground)]" }, jd = {
  key: 0,
  class: "flex items-center justify-end space-x-2 pt-4"
}, Hd = {
  key: 1,
  class: "flex items-center justify-center py-4"
}, ap = /* @__PURE__ */ j({
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
    se(() => o.modelValue, a), be(() => {
      document.body.style.overflow = "", document.body.style.paddingRight = "";
    });
    async function l() {
      await o.onConfirm(), u();
    }
    async function s() {
      await o.onCancel(), u();
    }
    function u() {
      r("update:modelValue", !1);
    }
    function i() {
      r("update:modelValue", !0);
    }
    return n({
      closeModal: u,
      openModal: i
    }), (c, d) => (S(), fe(I(Sl), {
      appear: "",
      show: c.modelValue,
      as: "template"
    }, {
      default: G(() => [
        q(I(fu), {
          as: "div",
          onClose: u,
          class: "relative"
        }, {
          default: G(() => [
            q(I(fr), {
              as: "template",
              enter: "duration-300 ease-out",
              "enter-from": "opacity-0",
              "enter-to": "opacity-100",
              leave: "duration-200 ease-in",
              "leave-from": "opacity-100",
              "leave-to": "opacity-0"
            }, {
              default: G(() => d[0] || (d[0] = [
                T("div", { class: "z-50 fixed inset-0 bg-primary/10" }, null, -1)
              ])),
              _: 1,
              __: [0]
            }),
            T("div", Bd, [
              T("div", Fd, [
                q(I(fr), {
                  as: "template",
                  enter: "duration-300 ease-out",
                  "enter-from": "opacity-0 scale-95",
                  "enter-to": "opacity-100 scale-100",
                  leave: "duration-200 ease-in",
                  "leave-from": "opacity-100 scale-100",
                  "leave-to": "opacity-0 scale-95"
                }, {
                  default: G(() => [
                    q(I(pu), { class: "w-full max-w-md transform overflow-hidden rounded-lg bg-[var(--card)] ring-1 ring-[var(--border)] p-6 text-left align-middle shadow-xl transition-all duration-300" }, {
                      default: G(() => [
                        T("div", Vd, [
                          q(I(mu), {
                            as: "h3",
                            class: "text-lg font-medium leading-6 text-[var(--card-foreground)]"
                          }, {
                            default: G(() => [
                              Gt(he(c.title), 1)
                            ]),
                            _: 1
                          }),
                          T("div", Nd, [
                            T("p", zd, he(c.description), 1)
                          ]),
                          c.processing ? (S(), A("div", Hd, [
                            U(c.$slots, "processing")
                          ])) : (S(), A("div", jd, [
                            q(ot, {
                              size: "sm",
                              variant: "ghost",
                              onClick: s
                            }, {
                              default: G(() => [
                                Gt(he(c.cancelButtonText), 1)
                              ]),
                              _: 1
                            }),
                            q(ot, {
                              size: "sm",
                              variant: "default",
                              onClick: l
                            }, {
                              default: G(() => [
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
}), Wd = { class: "flex items-center gap-2" }, Ud = /* @__PURE__ */ j({
  __name: "QueryCondition",
  props: {
    modelValue: {},
    availableFields: {},
    showRemove: { type: Boolean },
    showLogicalOperator: { type: Boolean }
  },
  emits: ["update:modelValue", "remove"],
  setup(e, { emit: n }) {
    const t = e, o = n, r = (f) => f == null ? void 0 : f.label, a = (f) => f == null ? void 0 : f.label, l = _({
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
    }), s = _({
      get: () => d.find((f) => f.id === t.modelValue.operator),
      set: (f) => {
        const p = f && typeof f == "object" && "id" in f ? f.id : f;
        o("update:modelValue", {
          ...t.modelValue,
          operator: p
        });
      }
    }), u = _({
      get: () => m.find((f) => f.id === t.modelValue.comparison),
      set: (f) => {
        const p = f && typeof f == "object" && "id" in f ? f.id : f;
        o("update:modelValue", {
          ...t.modelValue,
          comparison: p
        });
      }
    }), i = _({
      get: () => t.modelValue.value,
      set: (f) => o("update:modelValue", { ...t.modelValue, value: f })
    });
    _({
      get: () => t.modelValue.logicalOrOperator,
      set: (f) => o("update:modelValue", {
        ...t.modelValue,
        logicalOrOperator: f
      })
    });
    const c = _(() => [...i.value || []]);
    _(() => {
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
      return S(), A("div", Wd, [
        q($l, {
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
        q(Go, {
          modelValue: s.value,
          "onUpdate:modelValue": p[1] || (p[1] = (g) => s.value = g),
          items: d,
          "display-property": (g) => g.label,
          placeholder: "Select operator...",
          class: "self-start w-32 shrink-0"
        }, null, 8, ["modelValue", "display-property"]),
        q(Go, {
          modelValue: u.value,
          "onUpdate:modelValue": p[2] || (p[2] = (g) => u.value = g),
          items: m,
          "display-property": (g) => g.label,
          placeholder: "Select comparison...",
          class: "self-start w-32 shrink-0"
        }, null, 8, ["modelValue", "display-property"]),
        q(Go, {
          modelValue: i.value,
          "onUpdate:modelValue": p[3] || (p[3] = (g) => i.value = g),
          items: (v = l.value) == null ? void 0 : v.defaultValuesGetter(),
          "display-property": a,
          "disabled-items": c.value,
          placeholder: "Select values...",
          class: "self-start grow min-w-64",
          multiple: !0,
          nullable: !0
        }, null, 8, ["modelValue", "items", "disabled-items"]),
        f.showRemove ? (S(), fe(ot, {
          key: 0,
          onClick: p[4] || (p[4] = (g) => f.$emit("remove")),
          class: "text-destructive hover:bg-destructive/80 hover:text-white rounded shrink-0",
          variant: "ghost",
          size: "xs"
        }, {
          default: G(() => [
            q(I(gr), { class: "size-4" })
          ]),
          _: 1
        })) : le("", !0)
      ]);
    };
  }
}), ze = [];
for (let e = 0; e < 256; ++e)
  ze.push((e + 256).toString(16).slice(1));
function Gd(e, n = 0) {
  return (ze[e[n + 0]] + ze[e[n + 1]] + ze[e[n + 2]] + ze[e[n + 3]] + "-" + ze[e[n + 4]] + ze[e[n + 5]] + "-" + ze[e[n + 6]] + ze[e[n + 7]] + "-" + ze[e[n + 8]] + ze[e[n + 9]] + "-" + ze[e[n + 10]] + ze[e[n + 11]] + ze[e[n + 12]] + ze[e[n + 13]] + ze[e[n + 14]] + ze[e[n + 15]]).toLowerCase();
}
let or;
const qd = new Uint8Array(16);
function Kd() {
  if (!or) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    or = crypto.getRandomValues.bind(crypto);
  }
  return or(qd);
}
const Yd = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), xa = { randomUUID: Yd };
function So(e, n, t) {
  var r;
  if (xa.randomUUID && !e)
    return xa.randomUUID();
  e = e || {};
  const o = e.random ?? ((r = e.rng) == null ? void 0 : r.call(e)) ?? Kd();
  if (o.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return o[6] = o[6] & 15 | 64, o[8] = o[8] & 63 | 128, Gd(o);
}
const Xd = /* @__PURE__ */ j({
  __name: "QueryBuilderLogicSwitch",
  props: {
    modelValue: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const t = e, o = n, r = _({
      get: () => t.modelValue,
      set: (a) => o("update:modelValue", a)
    });
    return (a, l) => (S(), fe(I(wu), {
      modelValue: r.value,
      "onUpdate:modelValue": l[0] || (l[0] = (s) => r.value = s),
      class: V([
        "relative inline-flex h-6 w-16 items-center rounded-full transition-colors focus:outline-none border focus:ring-2 focus:ring-ring focus:ring-offset-2",
        (r.value, "bg-muted")
      ])
    }, {
      default: G(() => [
        l[1] || (l[1] = T("span", { class: "sr-only" }, "Use AND/OR", -1)),
        T("span", {
          class: V([
            "inline-block absolute h-4 transform rounded-full bg-primary shadow-xs transition-all duration-300 ease-in-out",
            r.value ? "left-9 w-5.5" : "left-1 w-7.5"
          ])
        }, null, 2),
        T("span", {
          class: V(["absolute left-2 text-[10px] font-medium", [r.value ? "text-primary" : "text-muted"]])
        }, "AND", 2),
        T("span", {
          class: V(["absolute right-2 text-[10px] font-medium", [r.value ? "text-muted" : "text-primary"]])
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
    const t = e, o = n, r = _({
      get: () => t.modelValue.conditions,
      set: (d) => o("update:modelValue", { ...t.modelValue, conditions: d })
    }), a = _({
      get: () => t.modelValue.logicalOrOperator,
      set: (d) => o("update:modelValue", {
        ...t.modelValue,
        logicalOrOperator: d
      })
    });
    function l() {
      return {
        id: So(),
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
    function u(d) {
      r.value.length > 1 && r.value.splice(d, 1);
    }
    function i() {
      const d = {
        id: So(),
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
      const f = Zl("QueryGroup", !0);
      return S(), A("div", Jd, [
        T("div", Qd, [
          q(Xd, {
            modelValue: a.value,
            "onUpdate:modelValue": m[0] || (m[0] = (v) => a.value = v)
          }, null, 8, ["modelValue"]),
          d.isRoot ? le("", !0) : (S(), A("span", Zd, [
            q(ot, {
              variant: "ghost",
              size: "sm",
              onClick: m[1] || (m[1] = (v) => d.$emit("remove")),
              class: "text-destructive hover:text-destructive/80"
            }, {
              default: G(() => [
                q(I(xs), { class: "size-4" })
              ]),
              _: 1
            })
          ]))
        ]),
        T("div", ef, [
          (S(!0), A(ge, null, We(r.value, (v, g) => (S(), fe(Ud, {
            key: v.id,
            modelValue: r.value[g],
            "onUpdate:modelValue": (w) => r.value[g] = w,
            "available-fields": d.availableFields,
            "show-remove": r.value.length > 1,
            onRemove: (w) => u(g)
          }, null, 8, ["modelValue", "onUpdate:modelValue", "available-fields", "show-remove", "onRemove"]))), 128))
        ]),
        (p = d.modelValue.nestedGroups) != null && p.length ? (S(), A("div", tf, [
          (S(!0), A(ge, null, We(d.modelValue.nestedGroups, (v, g) => (S(), fe(f, {
            key: v.id,
            modelValue: d.modelValue.nestedGroups[g],
            "onUpdate:modelValue": (w) => d.modelValue.nestedGroups[g] = w,
            "available-fields": d.availableFields,
            "is-root": !1,
            onRemove: (w) => c(g)
          }, null, 8, ["modelValue", "onUpdate:modelValue", "available-fields", "onRemove"]))), 128))
        ])) : le("", !0),
        T("div", nf, [
          q(ot, {
            variant: "outline",
            size: "sm",
            onClick: s
          }, {
            default: G(() => m[2] || (m[2] = [
              Gt("Add Condition")
            ])),
            _: 1,
            __: [2]
          }),
          q(ot, {
            variant: "outline",
            size: "sm",
            onClick: i
          }, {
            default: G(() => m[3] || (m[3] = [
              Gt("Add Group")
            ])),
            _: 1,
            __: [3]
          })
        ])
      ]);
    };
  }
}), rf = { class: "w-full" }, lp = /* @__PURE__ */ j({
  __name: "FluentQueryBuilder",
  props: {
    modelValue: {},
    availableFields: {}
  },
  emits: ["update:modelValue"],
  setup(e, { expose: n, emit: t }) {
    const o = e, r = t, a = k(o.modelValue || l());
    se(
      a,
      (i) => {
        r("update:modelValue", [i]);
      },
      { deep: !0 }
    );
    function l() {
      return {
        id: So(),
        conditions: [s()],
        nestedGroups: [],
        logicalOrOperator: !1
      };
    }
    function s() {
      return {
        id: So(),
        field: null,
        operator: "does",
        comparison: "equal",
        value: [],
        logicalOperator: "AND",
        logicalOrOperator: !1
      };
    }
    function u(i) {
      a.value = i;
    }
    return n({
      rootGroup: a
    }), (i, c) => (S(), A("div", rf, [
      q(of, {
        modelValue: a.value,
        "onUpdate:modelValue": [
          c[0] || (c[0] = (d) => a.value = d),
          u
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
    const t = e, o = n, r = k(t.tabs);
    k();
    const a = k(!1), l = k(), s = k(), u = k(), i = k([]), c = k(t.tabs.length), d = _(() => r.value.slice(0, c.value)), m = _(() => r.value.slice(c.value)), f = () => {
      if (!s.value || i.value.length === 0) {
        c.value = t.tabs.length;
        return;
      }
      const y = s.value.offsetWidth;
      let $ = 0, E = !0;
      for (let O = 0; O < i.value.length; O++) {
        const F = i.value[O], H = O > 0 ? p() : 0;
        if ($ += F.offsetWidth + H, $ > y) {
          E = !1;
          break;
        }
      }
      if (E) {
        c.value = t.tabs.length;
        return;
      }
      const P = y - ff;
      let X = 0;
      $ = 0;
      for (let O = 0; O < i.value.length; O++) {
        const F = i.value[O], H = O > 0 ? p() : 0;
        if ($ + F.offsetWidth + H <= P)
          $ += F.offsetWidth + H, X++;
        else
          break;
      }
      X === 0 && i.value.length > 0 && i.value[0].offsetWidth <= P && (X = 1), c.value = X;
    }, p = () => {
      const y = window.innerWidth;
      return y < 640 ? 4 : y < 768 ? 6 : y < 1024 ? 8 : y < 1280 ? 10 : 12;
    };
    let v;
    const g = () => {
      clearTimeout(v), v = window.setTimeout(f, 150);
    };
    ie(() => {
      Fe(f), window.addEventListener("resize", g);
    }), be(() => {
      window.removeEventListener("resize", g), clearTimeout(v);
    }), se(
      () => t.tabs,
      (y) => {
        r.value = y, Fe(f);
      },
      { deep: !0 }
    );
    function w(y) {
      const $ = r.value.findIndex(
        (P) => P.id === y
      );
      if ($ < c.value && $ !== -1) {
        o("clicked", y);
        return;
      }
      const E = r.value.splice($, 1)[0];
      r.value.splice(c.value - 1, 0, E), o("update", r.value), o("clicked", y);
    }
    function b(y) {
      const $ = [...d.value], E = $.splice(y.oldIndex, 1)[0];
      $.splice(y.newIndex, 0, E);
      const P = [...$, ...m.value];
      r.value = P, o("update", r.value);
    }
    function h() {
      a.value = !0;
    }
    function C() {
      a.value = !1;
    }
    return (y, $) => (S(), A("div", {
      ref_key: "containerRef",
      ref: l,
      class: V(I(ae)("relative z-10 mx-auto", y.classes.container, y.theme.container))
    }, [
      T("div", af, [
        (S(!0), A(ge, null, We(r.value, (E) => (S(), A("a", {
          key: `measure-${E.id}`,
          ref_for: !0,
          ref_key: "allTabRefs",
          ref: i,
          class: V(
            I(ae)(
              "pj-tab flex cursor-pointer items-center rounded-t-md px-2 py-1.5 text-sm leading-none font-medium transition-all duration-200 ease-in-out transform sm:px-3 sm:py-2 sm:text-base md:px-4 md:py-2.5 md:text-lg lg:px-5 lg:py-3",
              y.style === "classic" ? "px-3 py-2 border-x border-t text-sm leading-none font-medium transition-all duration-200 ease-in-out transform data-[active=false]:relative data-[active=false]:border-transparent data-[active=false]:hover:bg-primary/5 data-[active=true]:border-border data-[active=true]:bg-card sm:px-4 sm:py-2.5 sm:text-base md:px-6 md:py-3 md:text-lg lg:px-8 lg:py-4" : "flex cursor-pointer items-center border-0 px-3 py-2.5 text-sm leading-none font-medium transition-all duration-200 ease-in-out transform hover:no-underline data-[active=false]:relative data-[active=false]:text-foreground/50 data-[active=false]:hover:bg-primary/5 data-[active=false]:hover:text-foreground data-[active=false]:border-b-transparent data-[active=true]:bg-card data-[active=true]:border-b-3 data-[active=true]:border-b-accent sm:px-4 sm:py-3 sm:text-base md:px-6 md:py-3.5 md:text-lg lg:px-8 lg:py-4",
              E.classes || "",
              y.tabClasses,
              y.classes.tab,
              y.theme.tabsNavTab
            )
          )
        }, [
          U(y.$slots, "left", Qe({ ref_for: !0 }, E), void 0, !0),
          y.$slots.label ? le("", !0) : (S(), A("span", {
            key: 0,
            innerHTML: E.label
          }, null, 8, lf)),
          U(y.$slots, "label", Qe({ ref_for: !0 }, E), void 0, !0),
          U(y.$slots, "right", Qe({ ref_for: !0 }, E), void 0, !0)
        ], 2))), 128))
      ]),
      T("div", sf, [
        U(y.$slots, "before", {}, void 0, !0),
        T("div", {
          ref_key: "tabsContainerRef",
          ref: s,
          class: "flex-1 min-w-0"
        }, [
          (S(), fe(I(Co), {
            list: d.value,
            key: "tabs-nav",
            "item-key": "id",
            tag: "div",
            class: V(
              I(ae)(
                "flex flex-wrap space-x-0.5 sm:space-x-1 md:space-x-1.5 lg:space-x-2",
                y.theme.sortableContainer
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
            onUpdate: b,
            onStart: h,
            onEnd: C
          }, {
            item: G(({ element: E }) => [
              (S(), A("a", {
                key: E.id,
                href: "#",
                onClick: ln(
                  (P) => {
                    P.preventDefault(), y.$emit("clicked", E.id);
                  },
                  ["prevent"]
                ),
                class: V(
                  I(ae)(
                    "pj-tab flex cursor-pointer items-center rounded-t-md px-2 py-1.5 text-sm leading-none font-medium transition-all duration-200 ease-in-out transform sm:px-3 sm:py-2 sm:text-base md:px-4 md:py-2.5 md:text-lg lg:px-5 lg:py-3",
                    y.style === "classic" ? "px-3 py-2 border-x border-t text-sm leading-none font-medium transition-all duration-200 ease-in-out transform data-[active=false]:relative data-[active=false]:border-transparent data-[active=false]:hover:bg-primary/5 data-[active=true]:border-border data-[active=true]:bg-card sm:px-4 sm:py-2.5 sm:text-base md:px-6 md:py-3 md:text-lg lg:px-8 lg:py-4" : "flex cursor-pointer items-center border-0 px-3 py-2.5 text-sm leading-none font-medium transition-all duration-200 ease-in-out transform hover:no-underline data-[active=false]:relative data-[active=false]:text-foreground/50 data-[active=false]:hover:bg-primary/5 data-[active=false]:hover:text-foreground data-[active=false]:border-b-transparent data-[active=true]:bg-card data-[active=true]:border-b-3 data-[active=true]:border-b-accent sm:px-4 sm:py-3 sm:text-base md:px-6 md:py-3.5 md:text-lg lg:px-8 lg:py-4",
                    E.classes || "",
                    y.tabClasses,
                    y.classes.tab,
                    y.theme.tabsNavTab
                  )
                ),
                "data-active": ((E == null ? void 0 : E.active) ?? !1).toString()
              }, [
                U(y.$slots, "left", at(vt(E)), void 0, !0),
                y.$slots.label ? le("", !0) : (S(), A("span", {
                  key: 0,
                  innerHTML: E.label
                }, null, 8, cf)),
                U(y.$slots, "label", at(vt(E)), void 0, !0),
                U(y.$slots, "right", at(vt(E)), void 0, !0)
              ], 10, uf))
            ]),
            _: 3
          }, 8, ["list", "class"]))
        ], 512),
        m.value.length > 0 ? (S(), fe(_l, {
          key: 0,
          class: "flex items-center"
        }, {
          default: G(() => [
            q(El, { "as-child": "" }, {
              default: G(() => [
                T("button", {
                  ref_key: "moreButtonRef",
                  ref: u,
                  class: V(
                    I(ae)(
                      "flex items-center justify-center rounded-t-md px-3 py-1.5 text-sm font-medium transition-all duration-200 ease-in-out transform border border-border bg-card hover:bg-accent hover:text-accent-foreground sm:px-4 sm:py-2 md:px-5 md:py-2.5"
                    )
                  ),
                  "aria-label": "More tabs"
                }, [
                  $[0] || ($[0] = T("span", { class: "hidden sm:inline" }, "More", -1)),
                  $[1] || ($[1] = T("span", { class: "sm:hidden" }, "⋯", -1)),
                  q(I(Oo), { class: "ml-1 h-4 w-4 transition-transform duration-200" })
                ], 2)
              ]),
              _: 1
            }),
            q(Ol, {
              align: "end",
              "side-offset": 8,
              class: "min-w-[8rem]"
            }, {
              default: G(() => [
                (S(!0), A(ge, null, We(m.value, (E) => (S(), fe(Tl, {
                  key: E.id,
                  onClick: (P) => w(E.id),
                  class: V(
                    I(ae)(
                      "flex items-center",
                      E.active ? "bg-accent text-accent-foreground" : ""
                    )
                  )
                }, {
                  default: G(() => [
                    U(y.$slots, "left", Qe({ ref_for: !0 }, E), void 0, !0),
                    y.$slots.label ? le("", !0) : (S(), A("span", {
                      key: 0,
                      innerHTML: E.label
                    }, null, 8, df)),
                    U(y.$slots, "label", Qe({ ref_for: !0 }, E), void 0, !0),
                    U(y.$slots, "right", Qe({ ref_for: !0 }, E), void 0, !0)
                  ]),
                  _: 2
                }, 1032, ["onClick", "class"]))), 128))
              ]),
              _: 3
            })
          ]),
          _: 3
        })) : le("", !0),
        U(y.$slots, "after", {}, void 0, !0)
      ]),
      (S(), A("hr", {
        key: 0,
        class: V(I(ae)("border-t", y.theme.tabsNavLine))
      }, null, 2))
    ], 2));
  }
}), sp = /* @__PURE__ */ Cn(pf, [["__scopeId", "data-v-5f5f2499"]]), ip = /* @__PURE__ */ j({
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
    const o = e, r = t, a = k(o.defaultValue || o.modelValue || ""), l = k(o.tabs || []), s = k(), u = _({
      get: () => a.value,
      set: (i) => {
        a.value = i, r("update:modelValue", i);
      }
    });
    return ke("tabs", {
      value: u,
      orientation: _(() => o.orientation),
      style: _(() => o.style),
      classes: _(() => o.classes),
      disabled: _(() => o.disabled),
      tabClasses: _(() => o.tabClasses),
      theme: _(() => o.theme),
      tabs: l,
      onValueChange: (i) => {
        u.value = i, r("clicked", i);
      },
      onTabsUpdate: (i) => {
        l.value = i, r("update", i);
      }
    }), se(
      () => o.modelValue,
      (i) => {
        i !== void 0 && (a.value = i);
      }
    ), se(
      () => o.tabs,
      (i) => {
        i && (l.value = i);
      },
      { deep: !0 }
    ), n({
      setValue: (i) => {
        u.value = i;
      },
      getValue: () => u.value,
      getTabs: () => l.value,
      setTabs: (i) => {
        l.value = i;
      }
    }), (i, c) => (S(), A("div", {
      ref_key: "containerRef",
      ref: s,
      class: V(I(ae)("relative z-10 mx-auto", i.classes.container, i.theme.container))
    }, [
      U(i.$slots, "default")
    ], 2));
  }
}), mf = 80, vf = /* @__PURE__ */ j({
  __name: "TabsList",
  setup(e, { expose: n }) {
    const t = me("tabs");
    if (!t)
      throw new Error("TabsList must be used within a Tabs component");
    const { value: o, orientation: r, style: a, disabled: l, theme: s, tabs: u, onTabsUpdate: i } = t, c = k(), d = k(), m = k(), f = k([]), p = k(u.value.length), v = k(!1), g = _(() => u.value.slice(0, p.value)), w = _(() => u.value.slice(p.value)), b = () => {
      if (!d.value || f.value.length === 0) {
        p.value = u.value.length;
        return;
      }
      const O = d.value.offsetWidth;
      let F = 0, H = !0;
      for (let L = 0; L < f.value.length; L++) {
        const K = f.value[L], Q = L > 0 ? h() : 0;
        if (F += K.offsetWidth + Q, F > O) {
          H = !1;
          break;
        }
      }
      if (H) {
        p.value = u.value.length;
        return;
      }
      const x = O - mf;
      let D = 0;
      F = 0;
      for (let L = 0; L < f.value.length; L++) {
        const K = f.value[L], Q = L > 0 ? h() : 0;
        if (F + K.offsetWidth + Q <= x)
          F += K.offsetWidth + Q, D++;
        else
          break;
      }
      D === 0 && f.value.length > 0 && f.value[0].offsetWidth <= x && (D = 1), p.value = D;
    }, h = () => {
      const O = window.innerWidth;
      return O < 640 ? 4 : O < 768 ? 6 : O < 1024 ? 8 : O < 1280 ? 10 : 12;
    };
    let C;
    const y = () => {
      clearTimeout(C), C = window.setTimeout(b, 150);
    };
    ie(() => {
      Fe(b), window.addEventListener("resize", y);
    }), be(() => {
      window.removeEventListener("resize", y), clearTimeout(C);
    }), se(
      () => u.value,
      () => {
        Fe(b);
      },
      { deep: !0 }
    );
    function $(O) {
      const F = u.value.findIndex((D) => D.id === O);
      if (F < p.value && F !== -1)
        return;
      const H = [...u.value], x = H.splice(F, 1)[0];
      H.splice(p.value - 1, 0, x), i(H);
    }
    function E(O) {
      const F = [...g.value], H = F.splice(O.oldIndex, 1)[0];
      F.splice(O.newIndex, 0, H);
      const x = [...F, ...w.value];
      i(x);
    }
    function P() {
      v.value = !0;
    }
    function X() {
      v.value = !1;
    }
    return n({
      calculateVisibleTabs: b,
      getVisibleTabs: () => g.value,
      getOverflowTabs: () => w.value
    }), (O, F) => (S(), A(ge, null, [
      T("div", {
        ref_key: "containerRef",
        ref: c,
        class: V(
          I(ae)(
            "flex space-x-1 sm:space-x-1.5 md:space-x-2 lg:space-x-2.5 xl:space-x-3",
            I(r).value === "vertical" ? "flex-col space-y-1" : ""
          )
        )
      }, [
        U(O.$slots, "before", {}, void 0, !0),
        T("div", {
          ref_key: "tabsContainerRef",
          ref: d,
          class: "flex-1 min-w-0"
        }, [
          (S(), fe(I(Co), {
            list: g.value,
            key: "tabs-nav",
            "item-key": "id",
            tag: "div",
            class: V(
              I(ae)(
                "flex flex-wrap space-x-0.5 sm:space-x-1 md:space-x-1.5 lg:space-x-2",
                I(r).value === "vertical" ? "flex-col space-y-1" : "",
                I(s).value.sortableContainer
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
              horizontal: I(r).value === "horizontal",
              scroll: !0,
              scrollSensitivity: 30,
              scrollSpeed: 10,
              selectedClass: "selected"
            },
            onUpdate: E,
            onStart: P,
            onEnd: X
          }, {
            item: G(({ element: H }) => [
              U(O.$slots, "trigger", { tab: H }, void 0, !0)
            ]),
            _: 3
          }, 8, ["list", "class", "options"]))
        ], 512),
        w.value.length > 0 ? (S(), fe(_l, {
          key: 0,
          class: "flex items-center"
        }, {
          default: G(() => [
            q(El, { "as-child": "" }, {
              default: G(() => [
                T("button", {
                  ref_key: "moreButtonRef",
                  ref: m,
                  class: V(
                    I(ae)(
                      "flex items-center justify-center rounded-t-md px-3 py-1.5 text-sm font-medium transition-all duration-200 ease-in-out transform border border-border bg-card hover:bg-accent hover:text-accent-foreground sm:px-4 sm:py-2 md:px-5 md:py-2.5"
                    )
                  ),
                  "aria-label": "More tabs"
                }, [
                  F[0] || (F[0] = T("span", { class: "hidden sm:inline" }, "More", -1)),
                  F[1] || (F[1] = T("span", { class: "sm:hidden" }, "⋯", -1)),
                  q(I(Oo), { class: "ml-1 h-4 w-4 transition-transform duration-200" })
                ], 2)
              ]),
              _: 1
            }),
            q(Ol, {
              align: "end",
              "side-offset": 8,
              class: "min-w-[8rem]"
            }, {
              default: G(() => [
                (S(!0), A(ge, null, We(w.value, (H) => (S(), fe(Tl, {
                  key: H.id,
                  onClick: (x) => $(H.id),
                  class: V(
                    I(ae)(
                      "flex items-center",
                      H.active ? "bg-accent text-accent-foreground" : ""
                    )
                  )
                }, {
                  default: G(() => [
                    U(O.$slots, "overflow-trigger", { tab: H }, void 0, !0)
                  ]),
                  _: 2
                }, 1032, ["onClick", "class"]))), 128))
              ]),
              _: 3
            })
          ]),
          _: 3
        })) : le("", !0),
        U(O.$slots, "after", {}, void 0, !0)
      ], 2),
      I(a).value === "classic" && !I(l).value.includes("border") ? (S(), A("hr", {
        key: 0,
        class: V(I(ae)("border-t", I(s).value.tabsNavLine))
      }, null, 2)) : le("", !0)
    ], 64));
  }
}), up = /* @__PURE__ */ Cn(vf, [["__scopeId", "data-v-e35b1a38"]]), hf = ["data-active", "data-disabled"], gf = ["innerHTML"], cp = /* @__PURE__ */ j({
  __name: "TabsTrigger",
  props: {
    tab: {}
  },
  setup(e) {
    const n = e, t = me("tabs");
    if (!t)
      throw new Error("TabsTrigger must be used within a Tabs component");
    const { style: o, theme: r } = t, a = _(() => ae(
      "pj-tab flex cursor-pointer items-center rounded-t-md px-2 py-1.5 text-sm leading-none font-medium transition-all duration-200 ease-in-out transform sm:px-3 sm:py-2 sm:text-base md:px-4 md:py-2.5 md:text-lg lg:px-5 lg:py-3",
      o.value === "classic" ? "px-3 py-2 border-x border-t text-sm leading-none font-medium transition-all duration-200 ease-in-out transform data-[active=false]:relative data-[active=false]:border-transparent data-[active=false]:hover:bg-primary/5 data-[active=true]:border-border data-[active=true]:bg-card sm:px-4 sm:py-2.5 sm:text-base md:px-6 md:py-3 md:text-lg lg:px-8 lg:py-4" : "flex cursor-pointer items-center border-0 px-3 py-2.5 text-sm leading-none font-medium transition-all duration-200 ease-in-out transform hover:no-underline data-[active=false]:relative data-[active=false]:text-foreground/50 data-[active=false]:hover:bg-primary/5 data-[active=false]:hover:text-foreground data-[active=false]:border-b-transparent data-[active=true]:bg-card data-[active=true]:border-b-3 data-[active=true]:border-b-accent sm:px-4 sm:py-3 sm:text-base md:px-6 md:py-3.5 md:text-lg lg:px-8 lg:py-4",
      n.tab.classes || "",
      r.value.tabsNavTab
    )), l = (s) => {
      s.preventDefault(), !n.tab.disabled && t.onValueChange(n.tab.id);
    };
    return (s, u) => {
      var i, c;
      return S(), A("a", {
        key: s.tab.id,
        href: "#",
        onClick: ln(l, ["prevent"]),
        class: V(a.value),
        "data-active": (((i = s.tab) == null ? void 0 : i.active) ?? !1).toString(),
        "data-disabled": (((c = s.tab) == null ? void 0 : c.disabled) ?? !1).toString()
      }, [
        U(s.$slots, "left", at(vt(s.tab))),
        s.$slots.default ? le("", !0) : (S(), A("span", {
          key: 0,
          innerHTML: s.tab.label
        }, null, 8, gf)),
        U(s.$slots, "default", at(vt(s.tab))),
        U(s.$slots, "right", at(vt(s.tab)))
      ], 10, hf);
    };
  }
}), bf = ["aria-labelledby"], dp = /* @__PURE__ */ j({
  __name: "TabsContent",
  props: {
    value: {},
    class: {}
  },
  setup(e) {
    const n = e, t = me("tabs");
    if (!t)
      throw new Error("TabsContent must be used within a Tabs component");
    const { value: o, orientation: r } = t, a = _(() => o.value === n.value), l = _(() => ae(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      r.value === "vertical" ? "mt-0 ml-2" : "",
      n.class
    ));
    return (s, u) => Wt((S(), A("div", {
      class: V(l.value),
      role: "tabpanel",
      "aria-labelledby": `tab-${I(o)}`
    }, [
      U(s.$slots, "default")
    ], 10, bf)), [
      [Ut, a.value]
    ]);
  }
});
function fp() {
  const e = k("Cancel"), n = k("Confirm"), t = k(""), o = k(""), r = k(""), a = k(!1), l = k(""), s = k(() => {
    console.warn("Cancel callback not set"), a.value = !1;
  }), u = k(() => {
    console.warn("Confirm callback not set"), a.value = !1;
  });
  function i(d, m, f, p, v = "Confirm", g = "Cancel", w = "") {
    l.value = d, o.value = m, n.value = v, e.value = g, t.value = w, u.value = f || (async () => {
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
    confirmCallback: u,
    description: o,
    doOpen: i,
    processing: r,
    show: a,
    title: l,
    toggleProcessing: c
  };
}
function yf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var fo = { exports: {} };
/*! algoliasearch-lite.umd.js | 4.25.0 | © Algolia, inc. | https://github.com/algolia/algoliasearch-client-javascript */
var wf = fo.exports, ka;
function xf() {
  return ka || (ka = 1, function(e, n) {
    (function(t, o) {
      e.exports = o();
    })(wf, function() {
      function t(R, M, B) {
        return M in R ? Object.defineProperty(R, M, { value: B, enumerable: !0, configurable: !0, writable: !0 }) : R[M] = B, R;
      }
      function o(R, M) {
        var B = Object.keys(R);
        if (Object.getOwnPropertySymbols) {
          var N = Object.getOwnPropertySymbols(R);
          M && (N = N.filter(function(Y) {
            return Object.getOwnPropertyDescriptor(R, Y).enumerable;
          })), B.push.apply(B, N);
        }
        return B;
      }
      function r(R) {
        for (var M = 1; M < arguments.length; M++) {
          var B = arguments[M] != null ? arguments[M] : {};
          M % 2 ? o(Object(B), !0).forEach(function(N) {
            t(R, N, B[N]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(R, Object.getOwnPropertyDescriptors(B)) : o(Object(B)).forEach(function(N) {
            Object.defineProperty(R, N, Object.getOwnPropertyDescriptor(B, N));
          });
        }
        return R;
      }
      function a(R, M) {
        if (R == null) return {};
        var B, N, Y = function(re, J) {
          if (re == null) return {};
          var ve, Ee, we = {}, Ne = Object.keys(re);
          for (Ee = 0; Ee < Ne.length; Ee++) ve = Ne[Ee], J.indexOf(ve) >= 0 || (we[ve] = re[ve]);
          return we;
        }(R, M);
        if (Object.getOwnPropertySymbols) {
          var te = Object.getOwnPropertySymbols(R);
          for (N = 0; N < te.length; N++) B = te[N], M.indexOf(B) >= 0 || Object.prototype.propertyIsEnumerable.call(R, B) && (Y[B] = R[B]);
        }
        return Y;
      }
      function l(R, M) {
        return function(B) {
          if (Array.isArray(B)) return B;
        }(R) || function(B, N) {
          if (Symbol.iterator in Object(B) || Object.prototype.toString.call(B) === "[object Arguments]") {
            var Y = [], te = !0, re = !1, J = void 0;
            try {
              for (var ve, Ee = B[Symbol.iterator](); !(te = (ve = Ee.next()).done) && (Y.push(ve.value), !N || Y.length !== N); te = !0) ;
            } catch (we) {
              re = !0, J = we;
            } finally {
              try {
                te || Ee.return == null || Ee.return();
              } finally {
                if (re) throw J;
              }
            }
            return Y;
          }
        }(R, M) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }();
      }
      function s(R) {
        return function(M) {
          if (Array.isArray(M)) {
            for (var B = 0, N = new Array(M.length); B < M.length; B++) N[B] = M[B];
            return N;
          }
        }(R) || function(M) {
          if (Symbol.iterator in Object(M) || Object.prototype.toString.call(M) === "[object Arguments]") return Array.from(M);
        }(R) || function() {
          throw new TypeError("Invalid attempt to spread non-iterable instance");
        }();
      }
      function u(R) {
        var M, B = "algoliasearch-client-js-".concat(R.key), N = function() {
          return M === void 0 && (M = R.localStorage || window.localStorage), M;
        }, Y = function() {
          return JSON.parse(N().getItem(B) || "{}");
        }, te = function(J) {
          N().setItem(B, JSON.stringify(J));
        }, re = function() {
          var J = R.timeToLive ? 1e3 * R.timeToLive : null, ve = Y(), Ee = Object.fromEntries(Object.entries(ve).filter(function(Ne) {
            return l(Ne, 2)[1].timestamp !== void 0;
          }));
          if (te(Ee), J) {
            var we = Object.fromEntries(Object.entries(Ee).filter(function(Ne) {
              var Ie = l(Ne, 2)[1], Xe = (/* @__PURE__ */ new Date()).getTime();
              return !(Ie.timestamp + J < Xe);
            }));
            te(we);
          }
        };
        return { get: function(J, ve) {
          var Ee = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : { miss: function() {
            return Promise.resolve();
          } };
          return Promise.resolve().then(function() {
            re();
            var we = JSON.stringify(J);
            return Y()[we];
          }).then(function(we) {
            return Promise.all([we ? we.value : ve(), we !== void 0]);
          }).then(function(we) {
            var Ne = l(we, 2), Ie = Ne[0], Xe = Ne[1];
            return Promise.all([Ie, Xe || Ee.miss(Ie)]);
          }).then(function(we) {
            return l(we, 1)[0];
          });
        }, set: function(J, ve) {
          return Promise.resolve().then(function() {
            var Ee = Y();
            return Ee[JSON.stringify(J)] = { timestamp: (/* @__PURE__ */ new Date()).getTime(), value: ve }, N().setItem(B, JSON.stringify(Ee)), ve;
          });
        }, delete: function(J) {
          return Promise.resolve().then(function() {
            var ve = Y();
            delete ve[JSON.stringify(J)], N().setItem(B, JSON.stringify(ve));
          });
        }, clear: function() {
          return Promise.resolve().then(function() {
            N().removeItem(B);
          });
        } };
      }
      function i(R) {
        var M = s(R.caches), B = M.shift();
        return B === void 0 ? { get: function(N, Y) {
          var te = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : { miss: function() {
            return Promise.resolve();
          } }, re = Y();
          return re.then(function(J) {
            return Promise.all([J, te.miss(J)]);
          }).then(function(J) {
            return l(J, 1)[0];
          });
        }, set: function(N, Y) {
          return Promise.resolve(Y);
        }, delete: function(N) {
          return Promise.resolve();
        }, clear: function() {
          return Promise.resolve();
        } } : { get: function(N, Y) {
          var te = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : { miss: function() {
            return Promise.resolve();
          } };
          return B.get(N, Y, te).catch(function() {
            return i({ caches: M }).get(N, Y, te);
          });
        }, set: function(N, Y) {
          return B.set(N, Y).catch(function() {
            return i({ caches: M }).set(N, Y);
          });
        }, delete: function(N) {
          return B.delete(N).catch(function() {
            return i({ caches: M }).delete(N);
          });
        }, clear: function() {
          return B.clear().catch(function() {
            return i({ caches: M }).clear();
          });
        } };
      }
      function c() {
        var R = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { serializable: !0 }, M = {};
        return { get: function(B, N) {
          var Y = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : { miss: function() {
            return Promise.resolve();
          } }, te = JSON.stringify(B);
          if (te in M) return Promise.resolve(R.serializable ? JSON.parse(M[te]) : M[te]);
          var re = N(), J = Y && Y.miss || function() {
            return Promise.resolve();
          };
          return re.then(function(ve) {
            return J(ve);
          }).then(function() {
            return re;
          });
        }, set: function(B, N) {
          return M[JSON.stringify(B)] = R.serializable ? JSON.stringify(N) : N, Promise.resolve(N);
        }, delete: function(B) {
          return delete M[JSON.stringify(B)], Promise.resolve();
        }, clear: function() {
          return M = {}, Promise.resolve();
        } };
      }
      function d(R) {
        for (var M = R.length - 1; M > 0; M--) {
          var B = Math.floor(Math.random() * (M + 1)), N = R[M];
          R[M] = R[B], R[B] = N;
        }
        return R;
      }
      function m(R, M) {
        return M && Object.keys(M).forEach(function(B) {
          R[B] = M[B](R);
        }), R;
      }
      function f(R) {
        for (var M = arguments.length, B = new Array(M > 1 ? M - 1 : 0), N = 1; N < M; N++) B[N - 1] = arguments[N];
        var Y = 0;
        return R.replace(/%s/g, function() {
          return encodeURIComponent(B[Y++]);
        });
      }
      var p = { WithinQueryParameters: 0, WithinHeaders: 1 };
      function v(R, M) {
        var B = R || {}, N = B.data || {};
        return Object.keys(B).forEach(function(Y) {
          ["timeout", "headers", "queryParameters", "data", "cacheable"].indexOf(Y) === -1 && (N[Y] = B[Y]);
        }), { data: Object.entries(N).length > 0 ? N : void 0, timeout: B.timeout || M, headers: B.headers || {}, queryParameters: B.queryParameters || {}, cacheable: B.cacheable };
      }
      var g = { Read: 1, Write: 2, Any: 3 }, w = 1, b = 2, h = 3;
      function C(R) {
        var M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : w;
        return r(r({}, R), {}, { status: M, lastUpdate: Date.now() });
      }
      function y(R) {
        return typeof R == "string" ? { protocol: "https", url: R, accept: g.Any } : { protocol: R.protocol || "https", url: R.url, accept: R.accept || g.Any };
      }
      var $ = "GET", E = "POST";
      function P(R, M) {
        return Promise.all(M.map(function(B) {
          return R.get(B, function() {
            return Promise.resolve(C(B));
          });
        })).then(function(B) {
          var N = B.filter(function(re) {
            return function(J) {
              return J.status === w || Date.now() - J.lastUpdate > 12e4;
            }(re);
          }), Y = B.filter(function(re) {
            return function(J) {
              return J.status === h && Date.now() - J.lastUpdate <= 12e4;
            }(re);
          }), te = [].concat(s(N), s(Y));
          return { getTimeout: function(re, J) {
            return (Y.length === 0 && re === 0 ? 1 : Y.length + 3 + re) * J;
          }, statelessHosts: te.length > 0 ? te.map(function(re) {
            return y(re);
          }) : M };
        });
      }
      function X(R, M, B, N) {
        var Y = [], te = function(Ie, Xe) {
          if (!(Ie.method === $ || Ie.data === void 0 && Xe.data === void 0)) {
            var Ce = Array.isArray(Ie.data) ? Ie.data : r(r({}, Ie.data), Xe.data);
            return JSON.stringify(Ce);
          }
        }(B, N), re = function(Ie, Xe) {
          var Ce = r(r({}, Ie.headers), Xe.headers), Ge = {};
          return Object.keys(Ce).forEach(function(Pt) {
            var dt = Ce[Pt];
            Ge[Pt.toLowerCase()] = dt;
          }), Ge;
        }(R, N), J = B.method, ve = B.method !== $ ? {} : r(r({}, B.data), N.data), Ee = r(r(r({ "x-algolia-agent": R.userAgent.value }, R.queryParameters), ve), N.queryParameters), we = 0, Ne = function Ie(Xe, Ce) {
          var Ge = Xe.pop();
          if (Ge === void 0) throw { name: "RetryError", message: "Unreachable hosts - your application id may be incorrect. If the error persists, please reach out to the Algolia Support team: https://alg.li/support .", transporterStackTrace: x(Y) };
          var Pt = { data: te, headers: re, method: J, url: F(Ge, B.path, Ee), connectTimeout: Ce(we, R.timeouts.connect), responseTimeout: Ce(we, N.timeout) }, dt = function(Be) {
            var xe = { request: Pt, response: Be, host: Ge, triesLeft: Xe.length };
            return Y.push(xe), xe;
          }, Xn = { onSuccess: function(Be) {
            return function(xe) {
              try {
                return JSON.parse(xe.content);
              } catch (kt) {
                throw /* @__PURE__ */ function(Ft, dn) {
                  return { name: "DeserializationError", message: Ft, response: dn };
                }(kt.message, xe);
              }
            }(Be);
          }, onRetry: function(Be) {
            var xe = dt(Be);
            return Be.isTimedOut && we++, Promise.all([R.logger.info("Retryable failure", D(xe)), R.hostsCache.set(Ge, C(Ge, Be.isTimedOut ? h : b))]).then(function() {
              return Ie(Xe, Ce);
            });
          }, onFail: function(Be) {
            throw dt(Be), function(xe, kt) {
              var Ft = xe.content, dn = xe.status, $n = Ft;
              try {
                $n = JSON.parse(Ft).message;
              } catch {
              }
              return /* @__PURE__ */ function(Jn, Fo, Gl) {
                return { name: "ApiError", message: Jn, status: Fo, transporterStackTrace: Gl };
              }($n, dn, kt);
            }(Be, x(Y));
          } };
          return R.requester.send(Pt).then(function(Be) {
            return function(xe, kt) {
              return function(Ft) {
                var dn = Ft.status;
                return Ft.isTimedOut || function($n) {
                  var Jn = $n.isTimedOut, Fo = $n.status;
                  return !Jn && ~~Fo == 0;
                }(Ft) || ~~(dn / 100) != 2 && ~~(dn / 100) != 4;
              }(xe) ? kt.onRetry(xe) : ~~(xe.status / 100) == 2 ? kt.onSuccess(xe) : kt.onFail(xe);
            }(Be, Xn);
          });
        };
        return P(R.hostsCache, M).then(function(Ie) {
          return Ne(s(Ie.statelessHosts).reverse(), Ie.getTimeout);
        });
      }
      function O(R) {
        var M = { value: "Algolia for JavaScript (".concat(R, ")"), add: function(B) {
          var N = "; ".concat(B.segment).concat(B.version !== void 0 ? " (".concat(B.version, ")") : "");
          return M.value.indexOf(N) === -1 && (M.value = "".concat(M.value).concat(N)), M;
        } };
        return M;
      }
      function F(R, M, B) {
        var N = H(B), Y = "".concat(R.protocol, "://").concat(R.url, "/").concat(M.charAt(0) === "/" ? M.substr(1) : M);
        return N.length && (Y += "?".concat(N)), Y;
      }
      function H(R) {
        return Object.keys(R).map(function(M) {
          return f("%s=%s", M, (B = R[M], Object.prototype.toString.call(B) === "[object Object]" || Object.prototype.toString.call(B) === "[object Array]" ? JSON.stringify(R[M]) : R[M]));
          var B;
        }).join("&");
      }
      function x(R) {
        return R.map(function(M) {
          return D(M);
        });
      }
      function D(R) {
        var M = R.request.headers["x-algolia-api-key"] ? { "x-algolia-api-key": "*****" } : {};
        return r(r({}, R), {}, { request: r(r({}, R.request), {}, { headers: r(r({}, R.request.headers), M) }) });
      }
      var L = function(R) {
        var M = R.appId, B = /* @__PURE__ */ function(Y, te, re) {
          var J = { "x-algolia-api-key": re, "x-algolia-application-id": te };
          return { headers: function() {
            return Y === p.WithinHeaders ? J : {};
          }, queryParameters: function() {
            return Y === p.WithinQueryParameters ? J : {};
          } };
        }(R.authMode !== void 0 ? R.authMode : p.WithinHeaders, M, R.apiKey), N = function(Y) {
          var te = Y.hostsCache, re = Y.logger, J = Y.requester, ve = Y.requestsCache, Ee = Y.responsesCache, we = Y.timeouts, Ne = Y.userAgent, Ie = Y.hosts, Xe = Y.queryParameters, Ce = { hostsCache: te, logger: re, requester: J, requestsCache: ve, responsesCache: Ee, timeouts: we, userAgent: Ne, headers: Y.headers, queryParameters: Xe, hosts: Ie.map(function(Ge) {
            return y(Ge);
          }), read: function(Ge, Pt) {
            var dt = v(Pt, Ce.timeouts.read), Xn = function() {
              return X(Ce, Ce.hosts.filter(function(xe) {
                return (xe.accept & g.Read) != 0;
              }), Ge, dt);
            };
            if ((dt.cacheable !== void 0 ? dt.cacheable : Ge.cacheable) !== !0) return Xn();
            var Be = { request: Ge, mappedRequestOptions: dt, transporter: { queryParameters: Ce.queryParameters, headers: Ce.headers } };
            return Ce.responsesCache.get(Be, function() {
              return Ce.requestsCache.get(Be, function() {
                return Ce.requestsCache.set(Be, Xn()).then(function(xe) {
                  return Promise.all([Ce.requestsCache.delete(Be), xe]);
                }, function(xe) {
                  return Promise.all([Ce.requestsCache.delete(Be), Promise.reject(xe)]);
                }).then(function(xe) {
                  var kt = l(xe, 2);
                  return kt[0], kt[1];
                });
              });
            }, { miss: function(xe) {
              return Ce.responsesCache.set(Be, xe);
            } });
          }, write: function(Ge, Pt) {
            return X(Ce, Ce.hosts.filter(function(dt) {
              return (dt.accept & g.Write) != 0;
            }), Ge, v(Pt, Ce.timeouts.write));
          } };
          return Ce;
        }(r(r({ hosts: [{ url: "".concat(M, "-dsn.algolia.net"), accept: g.Read }, { url: "".concat(M, ".algolia.net"), accept: g.Write }].concat(d([{ url: "".concat(M, "-1.algolianet.com") }, { url: "".concat(M, "-2.algolianet.com") }, { url: "".concat(M, "-3.algolianet.com") }])) }, R), {}, { headers: r(r(r({}, B.headers()), { "content-type": "application/x-www-form-urlencoded" }), R.headers), queryParameters: r(r({}, B.queryParameters()), R.queryParameters) }));
        return m({ transporter: N, appId: M, addAlgoliaAgent: function(Y, te) {
          N.userAgent.add({ segment: Y, version: te });
        }, clearCache: function() {
          return Promise.all([N.requestsCache.clear(), N.responsesCache.clear()]).then(function() {
          });
        } }, R.methods);
      }, K = function(R) {
        return function(M, B) {
          return M.method === $ ? R.transporter.read(M, B) : R.transporter.write(M, B);
        };
      }, Q = function(R) {
        return function(M) {
          var B = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, N = { transporter: R.transporter, appId: R.appId, indexName: M };
          return m(N, B.methods);
        };
      }, pe = function(R) {
        return function(M, B) {
          var N = M.map(function(Y) {
            return r(r({}, Y), {}, { params: H(Y.params || {}) });
          });
          return R.transporter.read({ method: E, path: "1/indexes/*/queries", data: { requests: N }, cacheable: !0 }, B);
        };
      }, oe = function(R) {
        return function(M, B) {
          return Promise.all(M.map(function(N) {
            var Y = N.params, te = Y.facetName, re = Y.facetQuery, J = a(Y, ["facetName", "facetQuery"]);
            return Q(R)(N.indexName, { methods: { searchForFacetValues: Ve } }).searchForFacetValues(te, re, r(r({}, B), J));
          }));
        };
      }, _e = function(R) {
        return function(M, B, N) {
          return R.transporter.read({ method: E, path: f("1/answers/%s/prediction", R.indexName), data: { query: M, queryLanguages: B }, cacheable: !0 }, N);
        };
      }, Ue = function(R) {
        return function(M, B) {
          return R.transporter.read({ method: E, path: f("1/indexes/%s/query", R.indexName), data: { query: M }, cacheable: !0 }, B);
        };
      }, Ve = function(R) {
        return function(M, B, N) {
          return R.transporter.read({ method: E, path: f("1/indexes/%s/facets/%s/query", R.indexName, M), data: { facetQuery: B }, cacheable: !0 }, N);
        };
      }, Qt = 1, xt = 2, Wl = 3, Ul = function(R) {
        return function(M, B) {
          var N = M.map(function(Y) {
            return r(r({}, Y), {}, { threshold: Y.threshold || 0 });
          });
          return R.transporter.read({ method: E, path: "1/indexes/*/recommendations", data: { requests: N }, cacheable: !0 }, B);
        };
      };
      function Gr(R, M, B) {
        var N, Y = { appId: R, apiKey: M, timeouts: { connect: 1, read: 2, write: 30 }, requester: { send: function(te) {
          return new Promise(function(re) {
            var J = new XMLHttpRequest();
            J.open(te.method, te.url, !0), Object.keys(te.headers).forEach(function(Ne) {
              return J.setRequestHeader(Ne, te.headers[Ne]);
            });
            var ve, Ee = function(Ne, Ie) {
              return setTimeout(function() {
                J.abort(), re({ status: 0, content: Ie, isTimedOut: !0 });
              }, 1e3 * Ne);
            }, we = Ee(te.connectTimeout, "Connection timeout");
            J.onreadystatechange = function() {
              J.readyState > J.OPENED && ve === void 0 && (clearTimeout(we), ve = Ee(te.responseTimeout, "Socket timeout"));
            }, J.onerror = function() {
              J.status === 0 && (clearTimeout(we), clearTimeout(ve), re({ content: J.responseText || "Network request failed", status: J.status, isTimedOut: !1 }));
            }, J.onload = function() {
              clearTimeout(we), clearTimeout(ve), re({ content: J.responseText, status: J.status, isTimedOut: !1 });
            }, J.send(te.data);
          });
        } }, logger: (N = Wl, { debug: function(te, re) {
          return Qt >= N && console.debug(te, re), Promise.resolve();
        }, info: function(te, re) {
          return xt >= N && console.info(te, re), Promise.resolve();
        }, error: function(te, re) {
          return console.error(te, re), Promise.resolve();
        } }), responsesCache: c(), requestsCache: c({ serializable: !1 }), hostsCache: i({ caches: [u({ key: "".concat("4.25.0", "-").concat(R) }), c()] }), userAgent: O("4.25.0").add({ segment: "Browser", version: "lite" }), authMode: p.WithinQueryParameters };
        return L(r(r(r({}, Y), B), {}, { methods: { search: pe, searchForFacetValues: oe, multipleQueries: pe, multipleSearchForFacetValues: oe, customRequest: K, initIndex: function(te) {
          return function(re) {
            return Q(te)(re, { methods: { search: Ue, searchForFacetValues: Ve, findAnswers: _e } });
          };
        }, getRecommendations: Ul } }));
      }
      return Gr.version = "4.25.0", Gr;
    });
  }(fo)), fo.exports;
}
var kf = /* @__PURE__ */ xf();
const Cf = /* @__PURE__ */ yf(kf);
class pp {
  constructor(n) {
    Vo(this, "searchIndex");
    const t = Cf(n.appId, n.searchKey);
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
class mp {
  constructor(n) {
    Vo(this, "items");
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
  Tf as Alert,
  If as AlertAction,
  Df as AlertDescription,
  Pf as AlertIcon,
  $f as AlertTitle,
  pp as AlgoliaSearchStrategy,
  np as AnnouncementsDrawer,
  ls as Badge,
  tp as BreadcrumbEllipsis,
  Jf as BreadcrumbItem,
  Qf as BreadcrumbLink,
  Xf as BreadcrumbList,
  Zf as BreadcrumbPage,
  ep as BreadcrumbSeparator,
  Yf as Breadcrumbs,
  ot as Button,
  Rf as CodeBlock,
  Hu as ColorPicker,
  op as ColumnManager,
  Go as Combobox,
  rp as CommandPalette,
  ap as ConfirmationDialog,
  _l as Dropdown,
  Ol as DropdownContent,
  Tl as DropdownItem,
  Mf as DropdownLabel,
  Lf as DropdownSeparator,
  Bf as DropdownSub,
  Ff as DropdownSubContent,
  Vf as DropdownSubTrigger,
  El as DropdownTrigger,
  qo as EmptyState,
  lp as FluentQueryBuilder,
  $a as Input,
  mp as LocalSearchStrategy,
  Nf as Modal,
  Hf as ModalBody,
  tc as ModalClose,
  Zu as ModalContent,
  Wf as ModalFooter,
  zf as ModalHeader,
  jf as ModalTitle,
  ac as Popover,
  ip as Tabs,
  dp as TabsContent,
  up as TabsList,
  sp as TabsNav,
  cp as TabsTrigger,
  Kf as ThemeToggle,
  Uf as Tooltip,
  qf as TooltipContent,
  Gf as TooltipTrigger,
  $l as Typeahead,
  fp as useConfirmationDialog
};
//# sourceMappingURL=pickle-jar-ui.es.js.map
