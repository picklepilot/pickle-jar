var zl = Object.defineProperty;
var Hl = (e, n, t) => n in e ? zl(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var Lo = (e, n, t) => Hl(e, typeof n != "symbol" ? n + "" : n, t);
import { defineComponent as H, computed as E, provide as De, createElementBlock as M, openBlock as O, normalizeClass as z, renderSlot as Y, createElementVNode as I, createBlock as fe, withCtx as U, createCommentVNode as ae, inject as pe, ref as C, h as ie, watch as le, onMounted as se, useSlots as Wl, Fragment as xe, toDisplayString as he, unref as F, shallowRef as Co, getCurrentScope as Gl, onScopeDispose as Ca, shallowReadonly as cn, triggerRef as qr, onUnmounted as we, watchEffect as Fe, cloneVNode as Sa, nextTick as He, toRaw as Bt, reactive as So, getCurrentInstance as Oa, Teleport as Oo, createVNode as W, renderList as Ke, withModifiers as wn, withKeys as Ea, Transition as it, normalizeStyle as Gt, mergeProps as Qe, normalizeProps as Ct, withDirectives as on, vShow as rn, guardReactiveProps as Ht, createTextVNode as Wt, useAttrs as Ul, resolveDynamicComponent as ql, createSlots as Kl, resolveComponent as Yl } from "vue";
import ut from "clsx";
import { twMerge as yt } from "tailwind-merge";
const Xl = /* @__PURE__ */ H({
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
      return yt(ut(l));
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
    return De("alert-context", {
      variant: t.variant,
      bgClasses: o.value,
      borderClasses: r.value,
      colorClass: a.value
    }), (l, i) => (O(), M("div", {
      class: z(
        n(
          l.flush ? "rounded-0" : "rounded-md",
          "relative w-full rounded-lg border border-ring px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current bg-card text-card-foreground",
          l.theme.alert
        )
      )
    }, [
      Y(l.$slots, "default")
    ], 2));
  }
}), Jl = /* @__PURE__ */ H({
  __name: "AlertClose",
  emits: ["close"],
  setup(e, { emit: n }) {
    return (t, o) => (O(), M("button", {
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
}), wf = /* @__PURE__ */ H({
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
    return (t, o) => (O(), fe(Xl, {
      flush: t.flush,
      variant: t.variant,
      theme: t.theme
    }, {
      default: U(() => [
        Y(t.$slots, "default"),
        t.dismissable ? (O(), fe(Jl, {
          key: 0,
          onClose: o[0] || (o[0] = (r) => t.$emit("close", r))
        })) : ae("", !0)
      ]),
      _: 3
    }, 8, ["flush", "variant", "theme"]));
  }
}), Ql = { class: "col-start-2 line-clamp-1 min-h-4 font-medium" }, xf = /* @__PURE__ */ H({
  __name: "AlertTitle",
  setup(e) {
    return (n, t) => (O(), M("div", Ql, [
      Y(n.$slots, "default")
    ]));
  }
}), Zl = { class: "text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed" }, kf = /* @__PURE__ */ H({
  __name: "AlertDescription",
  setup(e) {
    return (n, t) => (O(), M("div", Zl, [
      Y(n.$slots, "default")
    ]));
  }
}), ei = { class: "shrink-0" }, Cf = /* @__PURE__ */ H({
  __name: "AlertIcon",
  setup(e) {
    return (n, t) => (O(), M("div", ei, [
      Y(n.$slots, "default")
    ]));
  }
}), ti = { class: "flex items-center" }, Sf = /* @__PURE__ */ H({
  __name: "AlertAction",
  setup(e) {
    return (n, t) => (O(), M("div", ti, [
      Y(n.$slots, "default")
    ]));
  }
}), ni = /* @__PURE__ */ H({
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
      return yt(ut(t));
    }
    return (t, o) => (O(), M("span", {
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
      Y(t.$slots, "default")
    ], 2));
  }
}), oi = ["aria-disabled", "aria-busy", "aria-expanded", "disabled"], ri = {
  key: 0,
  "aria-hidden": "true"
}, ai = { key: 0 }, li = /* @__PURE__ */ H({
  __name: "Button",
  props: {
    variant: { default: "default" },
    size: { default: "default" },
    disabled: { type: Boolean, default: !1 },
    processing: { type: Boolean, default: !1 },
    theme: { default: () => ({
      button: "",
      buttonDisabled: "",
      buttonIcon: ""
    }) },
    icon: { type: Boolean }
  },
  emits: ["click"],
  setup(e, { emit: n }) {
    function t(...s) {
      return yt(ut(s));
    }
    const o = n, r = pe("dropdown"), a = C(), l = E(() => {
      var u, d, c, m;
      return (u = r == null ? void 0 : r.triggerRef) == null || u.value, ((c = (d = r == null ? void 0 : r.triggerRef) == null ? void 0 : d.value) == null ? void 0 : c.querySelector("button")) === a.value && ((m = r == null ? void 0 : r.isOpen) == null ? void 0 : m.value) === !0;
    });
    function i(s) {
      s.preventDefault(), o("click", s);
    }
    return (s, u) => (O(), M("button", {
      ref_key: "buttonRef",
      ref: a,
      onClick: i,
      class: z(
        t(
          "inline-flex items-center cursor-pointer justify-center whitespace-nowrap rounded-md text-sm ring-offset-background focus:outline-none focus:ring-3 focus:ring-ring/30 transition-[box-shadow,color] disabled:pointer-events-none disabled:opacity-50",
          // Variant styles
          s.variant === "default" && "bg-primary text-primary-foreground hover:bg-primary/90",
          s.variant === "destructive" && "bg-destructive text-destructive-foreground hover:bg-destructive/90",
          s.variant === "outline" && "border border-ring bg-background hover:bg-accent hover:text-accent-foreground",
          s.variant === "secondary" && "bg-secondary text-secondary-foreground hover:bg-secondary/80",
          s.variant === "ghost" && "hover:bg-accent hover:text-accent-foreground",
          s.variant === "link" && "text-primary underline-offset-4 hover:underline",
          // Size styles
          s.size === "default" && "h-10 px-4 py-2",
          s.size === "sm" && "rounded-md px-3 py-1.5",
          s.size === "lg" && "h-11 rounded-md px-8",
          s.size === "xs" && "h-7 rounded-md px-1",
          s.icon && "size-5",
          l.value && "outline-none ring-3 ring-ring",
          s.theme.button
        )
      ),
      "aria-disabled": s.disabled,
      "aria-busy": s.processing,
      "aria-expanded": l.value,
      disabled: s.disabled
    }, [
      Y(s.$slots, "default", {}, void 0, !0),
      s.processing ? (O(), M("span", ri, [
        s.$slots.processing ? (O(), M("span", ai, [
          Y(s.$slots, "processing", {}, void 0, !0)
        ])) : ae("", !0)
      ])) : ae("", !0)
    ], 10, oi));
  }
}), Hn = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [o, r] of n)
    t[o] = r;
  return t;
}, ot = /* @__PURE__ */ Hn(li, [["__scopeId", "data-v-f28663f3"]]);
/**
 * @license lucide-vue-next v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kr = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), ii = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (n, t, o) => o ? o.toUpperCase() : t.toLowerCase()
), si = (e) => {
  const n = ii(e);
  return n.charAt(0).toUpperCase() + n.slice(1);
}, ui = (...e) => e.filter((n, t, o) => !!n && n.trim() !== "" && o.indexOf(n) === t).join(" ").trim();
/**
 * @license lucide-vue-next v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Jn = {
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
const di = ({ size: e, strokeWidth: n = 2, absoluteStrokeWidth: t, color: o, iconNode: r, name: a, class: l, ...i }, { slots: s }) => ie(
  "svg",
  {
    ...Jn,
    width: e || Jn.width,
    height: e || Jn.height,
    stroke: o || Jn.stroke,
    "stroke-width": t ? Number(n) * 24 / Number(e) : n,
    class: ui(
      "lucide",
      ...a ? [`lucide-${Kr(si(a))}-icon`, `lucide-${Kr(a)}`] : ["lucide-icon"]
    ),
    ...i
  },
  [...r.map((u) => ie(...u)), ...s.default ? [s.default()] : []]
);
/**
 * @license lucide-vue-next v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yt = (e, n) => (t, { slots: o }) => ie(
  di,
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
const ci = Yt("check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
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
const fi = Yt("clipboard", [
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
const pi = Yt("ellipsis-vertical", [
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
const mi = Yt("grip-horizontal", [
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
const vi = Yt("loader", [
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
const hi = Yt("trash-2", [
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
  ), se(() => {
    n(), window.addEventListener(
      "storybook-theme-change",
      r
    );
    const a = new MutationObserver((l) => {
      l.forEach((i) => {
        i.type === "attributes" && i.attributeName === "class" && n();
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
const gi = { key: 2 }, bi = ["innerHTML"], yi = { class: "text-sm" }, wi = /* @__PURE__ */ H({
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
      return yt(ut(h));
    }
    const a = e, l = Wl(), i = C("demo"), s = C(""), u = C(!0), d = C(""), c = C(!1), m = C(null), f = E(() => !!l.demo), { isDark: p } = Ta(), v = E(() => a.autoTheme ? p.value ? a.darkTheme : a.lightTheme : a.shikiTheme), g = async () => {
      try {
        u.value = !0, d.value = "";
        const h = t(a.language), k = `${h}-${v.value}`;
        if (o.has(k)) {
          m.value = o.get(k), await x();
          return;
        }
        const { getSingletonHighlighter: b } = await import("shiki");
        m.value = await b({
          themes: [v.value],
          langs: [h]
        }), o.set(k, m.value), await x();
      } catch (h) {
        console.error("Failed to initialize highlighter:", h), d.value = h instanceof Error ? h.message : "Failed to initialize syntax highlighter";
      } finally {
        u.value = !1;
      }
    }, x = async () => {
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
          }, T = {
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
          s.value = m.value.codeToHtml(
            a.code,
            T
          );
        } catch (k) {
          console.error("Failed to highlight code:", k), d.value = k instanceof Error ? k.message : "Failed to highlight code";
        }
    }, y = async () => {
      try {
        await navigator.clipboard.writeText(a.code), c.value = !0, setTimeout(() => {
          c.value = !1;
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
        h[1] !== (k == null ? void 0 : k[1]) ? await g() : await x();
      },
      {
        immediate: !0
      }
    ), se(g), (h, k) => (O(), M("div", {
      class: z(
        r(
          "relative overflow-hidden rounded-lg border border-border bg-muted/50",
          h.customTheme.container
        )
      )
    }, [
      h.showHeader ? (O(), M("div", {
        key: 0,
        class: z(
          r(
            "flex border-b border-border bg-muted/30 h-10 pr-4",
            h.customTheme.tabNav
          )
        )
      }, [
        f.value ? (O(), M(xe, { key: 0 }, [
          I("button", {
            onClick: k[0] || (k[0] = (b) => i.value = "demo"),
            class: z(
              r(
                "px-4 py-2 text-sm font-medium transition-colors",
                i.value === "demo" ? "bg-background text-foreground border-b-2 border-primary" : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              )
            )
          }, " Demo ", 2),
          I("button", {
            onClick: k[1] || (k[1] = (b) => i.value = "code"),
            class: z(
              r(
                "px-4 py-2 text-sm font-medium transition-colors",
                i.value === "code" ? "bg-background text-foreground border-b-2 border-primary" : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              )
            )
          }, " Code ", 2)
        ], 64)) : ae("", !0),
        I("span", {
          class: z(
            r(
              "ml-auto self-center font-mono text-muted-foreground capitalize text-sm",
              h.customTheme.languageLabel
            )
          )
        }, he(h.language), 3)
      ], 2)) : ae("", !0),
      f.value && i.value === "demo" ? (O(), M("div", {
        key: 1,
        class: z(r("p-4", h.customTheme.demo))
      }, [
        Y(h.$slots, "demo", {}, void 0, !0)
      ], 2)) : ae("", !0),
      !f.value || i.value === "code" ? (O(), M("div", gi, [
        I("div", {
          class: z(r("relative", h.customTheme.content))
        }, [
          h.showCopyButton ? (O(), fe(ot, {
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
            default: U(() => [
              c.value ? (O(), fe(F(ci), {
                key: 0,
                class: "size-4 text-green-500 shrink-0"
              })) : (O(), fe(F(fi), {
                key: 1,
                class: "size-4 shrink-0"
              }))
            ]),
            _: 1
          }, 8, ["class", "aria-label"])) : ae("", !0),
          I("div", {
            class: z(r("overflow-auto max-h-96", h.customTheme.content))
          }, [
            u.value ? (O(), M("div", {
              key: 1,
              class: z(
                r(
                  "flex items-center justify-center py-8 text-muted-foreground",
                  h.customTheme.loading
                )
              )
            }, k[2] || (k[2] = [
              I("span", { class: "text-sm" }, "Loading syntax highlighting...", -1)
            ]), 2)) : (O(), M("div", {
              key: 0,
              class: z(
                r(
                  "font-mono text-sm leading-relaxed [&>pre]:p-4",
                  h.customTheme.pre
                )
              ),
              innerHTML: s.value
            }, null, 10, bi)),
            d.value ? (O(), M("div", {
              key: 2,
              class: z(
                r(
                  "flex items-center justify-center py-8 text-destructive",
                  h.customTheme.error
                )
              )
            }, [
              I("span", yi, he(d.value), 1)
            ], 2)) : ae("", !0)
          ], 2)
        ], 2)
      ])) : ae("", !0)
    ], 2));
  }
}), Of = /* @__PURE__ */ Hn(wi, [["__scopeId", "data-v-50694f4e"]]);
function xi(e, n) {
  const t = this;
  let o;
  return function(...r) {
    clearTimeout(o), o = setTimeout(() => {
      e.apply(t, r);
    }, n);
  };
}
function me(...e) {
  return yt(ut(e));
}
function Bo(...e) {
  return e.join(" ");
}
Bo(
  "relative rounded-lg border border-border rounded-md hover:bg-accent/50 shadow-xs focus-within:outline-none focus-within:ring-3 focus-within:ring-ring/40 transition-[box-shadow,color] flex items-start flex-wrap gap-1 p-1 flex-1 min-w-[120px] border-0 bg-transparent pl-2.5 py-0.5 pr-8 text-sm truncate ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50 absolute inset-y-0 right-0 items-center pr-2 text-muted-foreground size-4 text-inherit transition duration-200 ease-out translate-y-1 opacity-0 translate-y-0 opacity-100 duration-150 ease-in fixed left-0 z-10 overflow-x-hidden overflow-y-auto bg-popover p-3 text-base shadow-lg border focus:outline-hidden sm:text-sm border-t border-border px-2 first:border-t-0 py-2 first:pt-0 last:pb-0 font-medium -mx-2.5 cursor-pointer hover:bg-accent rounded-md px-2 py-1 flex w-full truncate bg-accent opacity-50 pointer-events-none"
), Bo(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 bg-destructive text-destructive-foreground hover:bg-destructive/90 border border-border bg-background hover:bg-accent hover:text-accent-foreground bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:bg-accent hover:text-accent-foreground text-primary underline-offset-4 hover:underline"
), Bo(
  "w-full overflow-hidden h-full border border-border bg-background rounded-lg sm:min-w-60 flex flex-col md:flex-row overflow-y-auto p-3 mb-4 last:mb-0 sortable-drag flex min-w-px grow items-center space-x-2 text-base font-semibold shrink-0 text-sm h-5 w-5 group flex w-full hover:bg-accent/50 rounded-md items-center gap-2 [&.selected]:bg-accent/50 drag-handle shrink-0 text-muted-foreground/70 hover:text-foreground rounded-sm hover:bg-black/5 size-3.5 ml-auto flex items-center space-x-1 p-1 size-4 sticky bottom-0 z-2 gap-2 p-3 bg-background/90 backdrop-blur-sm flex -space-x-px transition duration-200 ease-out translate-y-1 opacity-0 translate-y-0 opacity-100 duration-150 ease-in"
);
const ki = ["disabled", "type", "placeholder", "value"], _a = /* @__PURE__ */ H({
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
      return O(), M("input", {
        disabled: r.disabled,
        type: r.type,
        placeholder: r.placeholder,
        value: r.modelValue ?? r.value,
        onInput: o,
        class: z(
          F(me)(
            "flex w-full rounded-md border border-ring bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground/70 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40 transition-[box-shadow,color] disabled:cursor-not-allowed disabled:opacity-50",
            ((l = r.theme) == null ? void 0 : l.input) || ""
          )
        )
      }, null, 42, ki);
    };
  }
}), Ci = ["top", "right", "bottom", "left"], Yr = ["start", "end"], Xr = /* @__PURE__ */ Ci.reduce((e, n) => e.concat(n, n + "-" + Yr[0], n + "-" + Yr[1]), []), Ut = Math.min, nt = Math.max, fo = Math.round, Qn = Math.floor, St = (e) => ({
  x: e,
  y: e
}), Si = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Oi = {
  start: "end",
  end: "start"
};
function nr(e, n, t) {
  return nt(e, Ut(n, t));
}
function At(e, n) {
  return typeof e == "function" ? e(n) : e;
}
function ht(e) {
  return e.split("-")[0];
}
function vt(e) {
  return e.split("-")[1];
}
function br(e) {
  return e === "x" ? "y" : "x";
}
function yr(e) {
  return e === "y" ? "height" : "width";
}
function kt(e) {
  return ["top", "bottom"].includes(ht(e)) ? "y" : "x";
}
function wr(e) {
  return br(kt(e));
}
function Da(e, n, t) {
  t === void 0 && (t = !1);
  const o = vt(e), r = wr(e), a = yr(r);
  let l = r === "x" ? o === (t ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return n.reference[a] > n.floating[a] && (l = mo(l)), [l, mo(l)];
}
function Ei(e) {
  const n = mo(e);
  return [po(e), n, po(n)];
}
function po(e) {
  return e.replace(/start|end/g, (n) => Oi[n]);
}
function Ti(e, n, t) {
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
function _i(e, n, t, o) {
  const r = vt(e);
  let a = Ti(ht(e), t === "start", o);
  return r && (a = a.map((l) => l + "-" + r), n && (a = a.concat(a.map(po)))), a;
}
function mo(e) {
  return e.replace(/left|right|bottom|top/g, (n) => Si[n]);
}
function Di(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Pa(e) {
  return typeof e != "number" ? Di(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function vo(e) {
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
  const a = kt(n), l = wr(n), i = yr(l), s = ht(n), u = a === "y", d = o.x + o.width / 2 - r.width / 2, c = o.y + o.height / 2 - r.height / 2, m = o[i] / 2 - r[i] / 2;
  let f;
  switch (s) {
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
  switch (vt(n)) {
    case "start":
      f[l] -= m * (t && u ? -1 : 1);
      break;
    case "end":
      f[l] += m * (t && u ? -1 : 1);
      break;
  }
  return f;
}
const Pi = async (e, n, t) => {
  const {
    placement: o = "bottom",
    strategy: r = "absolute",
    middleware: a = [],
    platform: l
  } = t, i = a.filter(Boolean), s = await (l.isRTL == null ? void 0 : l.isRTL(n));
  let u = await l.getElementRects({
    reference: e,
    floating: n,
    strategy: r
  }), {
    x: d,
    y: c
  } = Jr(u, o, s), m = o, f = {}, p = 0;
  for (let v = 0; v < i.length; v++) {
    const {
      name: g,
      fn: x
    } = i[v], {
      x: y,
      y: h,
      data: k,
      reset: b
    } = await x({
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
    d = y ?? d, c = h ?? c, f = {
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
      x: d,
      y: c
    } = Jr(u, m, s)), v = -1);
  }
  return {
    x: d,
    y: c,
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
    elements: i,
    strategy: s
  } = e, {
    boundary: u = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: c = "floating",
    altBoundary: m = !1,
    padding: f = 0
  } = At(n, e), p = Pa(f), g = i[m ? c === "floating" ? "reference" : "floating" : c], x = vo(await a.getClippingRect({
    element: (t = await (a.isElement == null ? void 0 : a.isElement(g))) == null || t ? g : g.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(i.floating)),
    boundary: u,
    rootBoundary: d,
    strategy: s
  })), y = c === "floating" ? {
    x: o,
    y: r,
    width: l.floating.width,
    height: l.floating.height
  } : l.reference, h = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(i.floating)), k = await (a.isElement == null ? void 0 : a.isElement(h)) ? await (a.getScale == null ? void 0 : a.getScale(h)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, b = vo(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: y,
    offsetParent: h,
    strategy: s
  }) : y);
  return {
    top: (x.top - b.top + p.top) / k.y,
    bottom: (b.bottom - x.bottom + p.bottom) / k.y,
    left: (x.left - b.left + p.left) / k.x,
    right: (b.right - x.right + p.right) / k.x
  };
}
const $i = (e) => ({
  name: "arrow",
  options: e,
  async fn(n) {
    const {
      x: t,
      y: o,
      placement: r,
      rects: a,
      platform: l,
      elements: i,
      middlewareData: s
    } = n, {
      element: u,
      padding: d = 0
    } = At(e, n) || {};
    if (u == null)
      return {};
    const c = Pa(d), m = {
      x: t,
      y: o
    }, f = wr(r), p = yr(f), v = await l.getDimensions(u), g = f === "y", x = g ? "top" : "left", y = g ? "bottom" : "right", h = g ? "clientHeight" : "clientWidth", k = a.reference[p] + a.reference[f] - m[f] - a.floating[p], b = m[f] - a.reference[f], T = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(u));
    let S = T ? T[h] : 0;
    (!S || !await (l.isElement == null ? void 0 : l.isElement(T))) && (S = i.floating[h] || a.floating[p]);
    const _ = k / 2 - b / 2, X = S / 2 - v[p] / 2 - 1, P = Ut(c[x], X), V = Ut(c[y], X), q = P, w = S - v[p] - V, $ = S / 2 - v[p] / 2 + _, L = nr(q, $, w), K = !s.arrow && vt(r) != null && $ !== L && a.reference[p] / 2 - ($ < q ? P : V) - v[p] / 2 < 0, ne = K ? $ < q ? $ - q : $ - w : 0;
    return {
      [f]: m[f] + ne,
      data: {
        [f]: L,
        centerOffset: $ - L - ne,
        ...K && {
          alignmentOffset: ne
        }
      },
      reset: K
    };
  }
});
function Ii(e, n, t) {
  return (e ? [...t.filter((r) => vt(r) === e), ...t.filter((r) => vt(r) !== e)] : t.filter((r) => ht(r) === r)).filter((r) => e ? vt(r) === e || (n ? po(r) !== r : !1) : !0);
}
const Ai = function(e) {
  return e === void 0 && (e = {}), {
    name: "autoPlacement",
    options: e,
    async fn(n) {
      var t, o, r;
      const {
        rects: a,
        middlewareData: l,
        placement: i,
        platform: s,
        elements: u
      } = n, {
        crossAxis: d = !1,
        alignment: c,
        allowedPlacements: m = Xr,
        autoAlignment: f = !0,
        ...p
      } = At(e, n), v = c !== void 0 || m === Xr ? Ii(c || null, f, m) : m, g = await Eo(n, p), x = ((t = l.autoPlacement) == null ? void 0 : t.index) || 0, y = v[x];
      if (y == null)
        return {};
      const h = Da(y, a, await (s.isRTL == null ? void 0 : s.isRTL(u.floating)));
      if (i !== y)
        return {
          reset: {
            placement: v[0]
          }
        };
      const k = [g[ht(y)], g[h[0]], g[h[1]]], b = [...((o = l.autoPlacement) == null ? void 0 : o.overflows) || [], {
        placement: y,
        overflows: k
      }], T = v[x + 1];
      if (T)
        return {
          data: {
            index: x + 1,
            overflows: b
          },
          reset: {
            placement: T
          }
        };
      const S = b.map((P) => {
        const V = vt(P.placement);
        return [P.placement, V && d ? (
          // Check along the mainAxis and main crossAxis side.
          P.overflows.slice(0, 2).reduce((q, w) => q + w, 0)
        ) : (
          // Check only the mainAxis.
          P.overflows[0]
        ), P.overflows];
      }).sort((P, V) => P[1] - V[1]), X = ((r = S.filter((P) => P[2].slice(
        0,
        // Aligned placements should not check their opposite crossAxis
        // side.
        vt(P[0]) ? 2 : 3
      ).every((V) => V <= 0))[0]) == null ? void 0 : r[0]) || S[0][0];
      return X !== i ? {
        data: {
          index: x + 1,
          overflows: b
        },
        reset: {
          placement: X
        }
      } : {};
    }
  };
}, Ri = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(n) {
      var t, o;
      const {
        placement: r,
        middlewareData: a,
        rects: l,
        initialPlacement: i,
        platform: s,
        elements: u
      } = n, {
        mainAxis: d = !0,
        crossAxis: c = !0,
        fallbackPlacements: m,
        fallbackStrategy: f = "bestFit",
        fallbackAxisSideDirection: p = "none",
        flipAlignment: v = !0,
        ...g
      } = At(e, n);
      if ((t = a.arrow) != null && t.alignmentOffset)
        return {};
      const x = ht(r), y = kt(i), h = ht(i) === i, k = await (s.isRTL == null ? void 0 : s.isRTL(u.floating)), b = m || (h || !v ? [mo(i)] : Ei(i)), T = p !== "none";
      !m && T && b.push(..._i(i, v, p, k));
      const S = [i, ...b], _ = await Eo(n, g), X = [];
      let P = ((o = a.flip) == null ? void 0 : o.overflows) || [];
      if (d && X.push(_[x]), c) {
        const $ = Da(r, l, k);
        X.push(_[$[0]], _[$[1]]);
      }
      if (P = [...P, {
        placement: r,
        overflows: X
      }], !X.every(($) => $ <= 0)) {
        var V, q;
        const $ = (((V = a.flip) == null ? void 0 : V.index) || 0) + 1, L = S[$];
        if (L && (!(c === "alignment" ? y !== kt(L) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        P.every((ce) => ce.overflows[0] > 0 && kt(ce.placement) === y)))
          return {
            data: {
              index: $,
              overflows: P
            },
            reset: {
              placement: L
            }
          };
        let K = (q = P.filter((ne) => ne.overflows[0] <= 0).sort((ne, ce) => ne.overflows[1] - ce.overflows[1])[0]) == null ? void 0 : q.placement;
        if (!K)
          switch (f) {
            case "bestFit": {
              var w;
              const ne = (w = P.filter((ce) => {
                if (T) {
                  const oe = kt(ce.placement);
                  return oe === y || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  oe === "y";
                }
                return !0;
              }).map((ce) => [ce.placement, ce.overflows.filter((oe) => oe > 0).reduce((oe, Se) => oe + Se, 0)]).sort((ce, oe) => ce[1] - oe[1])[0]) == null ? void 0 : w[0];
              ne && (K = ne);
              break;
            }
            case "initialPlacement":
              K = i;
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
async function Mi(e, n) {
  const {
    placement: t,
    platform: o,
    elements: r
  } = e, a = await (o.isRTL == null ? void 0 : o.isRTL(r.floating)), l = ht(t), i = vt(t), s = kt(t) === "y", u = ["left", "top"].includes(l) ? -1 : 1, d = a && s ? -1 : 1, c = At(n, e);
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
  return i && typeof p == "number" && (f = i === "end" ? p * -1 : p), s ? {
    x: f * d,
    y: m * u
  } : {
    x: m * u,
    y: f * d
  };
}
const Fi = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(n) {
      var t, o;
      const {
        x: r,
        y: a,
        placement: l,
        middlewareData: i
      } = n, s = await Mi(n, e);
      return l === ((t = i.offset) == null ? void 0 : t.placement) && (o = i.arrow) != null && o.alignmentOffset ? {} : {
        x: r + s.x,
        y: a + s.y,
        data: {
          ...s,
          placement: l
        }
      };
    }
  };
}, Li = function(e) {
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
        limiter: i = {
          fn: (g) => {
            let {
              x,
              y
            } = g;
            return {
              x,
              y
            };
          }
        },
        ...s
      } = At(e, n), u = {
        x: t,
        y: o
      }, d = await Eo(n, s), c = kt(ht(r)), m = br(c);
      let f = u[m], p = u[c];
      if (a) {
        const g = m === "y" ? "top" : "left", x = m === "y" ? "bottom" : "right", y = f + d[g], h = f - d[x];
        f = nr(y, f, h);
      }
      if (l) {
        const g = c === "y" ? "top" : "left", x = c === "y" ? "bottom" : "right", y = p + d[g], h = p - d[x];
        p = nr(y, p, h);
      }
      const v = i.fn({
        ...n,
        [m]: f,
        [c]: p
      });
      return {
        ...v,
        data: {
          x: v.x - t,
          y: v.y - o,
          enabled: {
            [m]: a,
            [c]: l
          }
        }
      };
    }
  };
}, Bi = function(e) {
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
        offset: i = 0,
        mainAxis: s = !0,
        crossAxis: u = !0
      } = At(e, n), d = {
        x: t,
        y: o
      }, c = kt(r), m = br(c);
      let f = d[m], p = d[c];
      const v = At(i, n), g = typeof v == "number" ? {
        mainAxis: v,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...v
      };
      if (s) {
        const h = m === "y" ? "height" : "width", k = a.reference[m] - a.floating[h] + g.mainAxis, b = a.reference[m] + a.reference[h] - g.mainAxis;
        f < k ? f = k : f > b && (f = b);
      }
      if (u) {
        var x, y;
        const h = m === "y" ? "width" : "height", k = ["top", "left"].includes(ht(r)), b = a.reference[c] - a.floating[h] + (k && ((x = l.offset) == null ? void 0 : x[c]) || 0) + (k ? 0 : g.crossAxis), T = a.reference[c] + a.reference[h] + (k ? 0 : ((y = l.offset) == null ? void 0 : y[c]) || 0) - (k ? g.crossAxis : 0);
        p < b ? p = b : p > T && (p = T);
      }
      return {
        [m]: f,
        [c]: p
      };
    }
  };
}, Ni = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(n) {
      var t, o;
      const {
        placement: r,
        rects: a,
        platform: l,
        elements: i
      } = n, {
        apply: s = () => {
        },
        ...u
      } = At(e, n), d = await Eo(n, u), c = ht(r), m = vt(r), f = kt(r) === "y", {
        width: p,
        height: v
      } = a.floating;
      let g, x;
      c === "top" || c === "bottom" ? (g = c, x = m === (await (l.isRTL == null ? void 0 : l.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (x = c, g = m === "end" ? "top" : "bottom");
      const y = v - d.top - d.bottom, h = p - d.left - d.right, k = Ut(v - d[g], y), b = Ut(p - d[x], h), T = !n.middlewareData.shift;
      let S = k, _ = b;
      if ((t = n.middlewareData.shift) != null && t.enabled.x && (_ = h), (o = n.middlewareData.shift) != null && o.enabled.y && (S = y), T && !m) {
        const P = nt(d.left, 0), V = nt(d.right, 0), q = nt(d.top, 0), w = nt(d.bottom, 0);
        f ? _ = p - 2 * (P !== 0 || V !== 0 ? P + V : nt(d.left, d.right)) : S = v - 2 * (q !== 0 || w !== 0 ? q + w : nt(d.top, d.bottom));
      }
      await s({
        ...n,
        availableWidth: _,
        availableHeight: S
      });
      const X = await l.getDimensions(i.floating);
      return p !== X.width || v !== X.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function To() {
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
  return To() ? e instanceof Node || e instanceof at(e).Node : !1;
}
function gt(e) {
  return To() ? e instanceof Element || e instanceof at(e).Element : !1;
}
function Et(e) {
  return To() ? e instanceof HTMLElement || e instanceof at(e).HTMLElement : !1;
}
function Qr(e) {
  return !To() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof at(e).ShadowRoot;
}
function Wn(e) {
  const {
    overflow: n,
    overflowX: t,
    overflowY: o,
    display: r
  } = bt(e);
  return /auto|scroll|overlay|hidden|clip/.test(n + o + t) && !["inline", "contents"].includes(r);
}
function Vi(e) {
  return ["table", "td", "th"].includes(sn(e));
}
function _o(e) {
  return [":popover-open", ":modal"].some((n) => {
    try {
      return e.matches(n);
    } catch {
      return !1;
    }
  });
}
function kr(e) {
  const n = Cr(), t = gt(e) ? bt(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((o) => t[o] ? t[o] !== "none" : !1) || (t.containerType ? t.containerType !== "normal" : !1) || !n && (t.backdropFilter ? t.backdropFilter !== "none" : !1) || !n && (t.filter ? t.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((o) => (t.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (t.contain || "").includes(o));
}
function ji(e) {
  let n = qt(e);
  for (; Et(n) && !xn(n); ) {
    if (kr(n))
      return n;
    if (_o(n))
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
function bt(e) {
  return at(e).getComputedStyle(e);
}
function Do(e) {
  return gt(e) ? {
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
function $a(e) {
  const n = qt(e);
  return xn(n) ? e.ownerDocument ? e.ownerDocument.body : e.body : Et(n) && Wn(n) ? n : $a(n);
}
function Vn(e, n, t) {
  var o;
  n === void 0 && (n = []), t === void 0 && (t = !0);
  const r = $a(e), a = r === ((o = e.ownerDocument) == null ? void 0 : o.body), l = at(r);
  if (a) {
    const i = or(l);
    return n.concat(l, l.visualViewport || [], Wn(r) ? r : [], i && t ? Vn(i) : []);
  }
  return n.concat(r, Vn(r, [], t));
}
function or(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Ia(e) {
  const n = bt(e);
  let t = parseFloat(n.width) || 0, o = parseFloat(n.height) || 0;
  const r = Et(e), a = r ? e.offsetWidth : t, l = r ? e.offsetHeight : o, i = fo(t) !== a || fo(o) !== l;
  return i && (t = a, o = l), {
    width: t,
    height: o,
    $: i
  };
}
function Sr(e) {
  return gt(e) ? e : e.contextElement;
}
function bn(e) {
  const n = Sr(e);
  if (!Et(n))
    return St(1);
  const t = n.getBoundingClientRect(), {
    width: o,
    height: r,
    $: a
  } = Ia(n);
  let l = (a ? fo(t.width) : t.width) / o, i = (a ? fo(t.height) : t.height) / r;
  return (!l || !Number.isFinite(l)) && (l = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: l,
    y: i
  };
}
const zi = /* @__PURE__ */ St(0);
function Aa(e) {
  const n = at(e);
  return !Cr() || !n.visualViewport ? zi : {
    x: n.visualViewport.offsetLeft,
    y: n.visualViewport.offsetTop
  };
}
function Hi(e, n, t) {
  return n === void 0 && (n = !1), !t || n && t !== at(e) ? !1 : n;
}
function ln(e, n, t, o) {
  n === void 0 && (n = !1), t === void 0 && (t = !1);
  const r = e.getBoundingClientRect(), a = Sr(e);
  let l = St(1);
  n && (o ? gt(o) && (l = bn(o)) : l = bn(e));
  const i = Hi(a, t, o) ? Aa(a) : St(0);
  let s = (r.left + i.x) / l.x, u = (r.top + i.y) / l.y, d = r.width / l.x, c = r.height / l.y;
  if (a) {
    const m = at(a), f = o && gt(o) ? at(o) : o;
    let p = m, v = or(p);
    for (; v && o && f !== p; ) {
      const g = bn(v), x = v.getBoundingClientRect(), y = bt(v), h = x.left + (v.clientLeft + parseFloat(y.paddingLeft)) * g.x, k = x.top + (v.clientTop + parseFloat(y.paddingTop)) * g.y;
      s *= g.x, u *= g.y, d *= g.x, c *= g.y, s += h, u += k, p = at(v), v = or(p);
    }
  }
  return vo({
    width: d,
    height: c,
    x: s,
    y: u
  });
}
function Or(e, n) {
  const t = Do(e).scrollLeft;
  return n ? n.left + t : ln(Dt(e)).left + t;
}
function Ra(e, n, t) {
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
function Wi(e) {
  let {
    elements: n,
    rect: t,
    offsetParent: o,
    strategy: r
  } = e;
  const a = r === "fixed", l = Dt(o), i = n ? _o(n.floating) : !1;
  if (o === l || i && a)
    return t;
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = St(1);
  const d = St(0), c = Et(o);
  if ((c || !c && !a) && ((sn(o) !== "body" || Wn(l)) && (s = Do(o)), Et(o))) {
    const f = ln(o);
    u = bn(o), d.x = f.x + o.clientLeft, d.y = f.y + o.clientTop;
  }
  const m = l && !c && !a ? Ra(l, s, !0) : St(0);
  return {
    width: t.width * u.x,
    height: t.height * u.y,
    x: t.x * u.x - s.scrollLeft * u.x + d.x + m.x,
    y: t.y * u.y - s.scrollTop * u.y + d.y + m.y
  };
}
function Gi(e) {
  return Array.from(e.getClientRects());
}
function Ui(e) {
  const n = Dt(e), t = Do(e), o = e.ownerDocument.body, r = nt(n.scrollWidth, n.clientWidth, o.scrollWidth, o.clientWidth), a = nt(n.scrollHeight, n.clientHeight, o.scrollHeight, o.clientHeight);
  let l = -t.scrollLeft + Or(e);
  const i = -t.scrollTop;
  return bt(o).direction === "rtl" && (l += nt(n.clientWidth, o.clientWidth) - r), {
    width: r,
    height: a,
    x: l,
    y: i
  };
}
function qi(e, n) {
  const t = at(e), o = Dt(e), r = t.visualViewport;
  let a = o.clientWidth, l = o.clientHeight, i = 0, s = 0;
  if (r) {
    a = r.width, l = r.height;
    const u = Cr();
    (!u || u && n === "fixed") && (i = r.offsetLeft, s = r.offsetTop);
  }
  return {
    width: a,
    height: l,
    x: i,
    y: s
  };
}
function Ki(e, n) {
  const t = ln(e, !0, n === "fixed"), o = t.top + e.clientTop, r = t.left + e.clientLeft, a = Et(e) ? bn(e) : St(1), l = e.clientWidth * a.x, i = e.clientHeight * a.y, s = r * a.x, u = o * a.y;
  return {
    width: l,
    height: i,
    x: s,
    y: u
  };
}
function Zr(e, n, t) {
  let o;
  if (n === "viewport")
    o = qi(e, t);
  else if (n === "document")
    o = Ui(Dt(e));
  else if (gt(n))
    o = Ki(n, t);
  else {
    const r = Aa(e);
    o = {
      x: n.x - r.x,
      y: n.y - r.y,
      width: n.width,
      height: n.height
    };
  }
  return vo(o);
}
function Ma(e, n) {
  const t = qt(e);
  return t === n || !gt(t) || xn(t) ? !1 : bt(t).position === "fixed" || Ma(t, n);
}
function Yi(e, n) {
  const t = n.get(e);
  if (t)
    return t;
  let o = Vn(e, [], !1).filter((i) => gt(i) && sn(i) !== "body"), r = null;
  const a = bt(e).position === "fixed";
  let l = a ? qt(e) : e;
  for (; gt(l) && !xn(l); ) {
    const i = bt(l), s = kr(l);
    !s && i.position === "fixed" && (r = null), (a ? !s && !r : !s && i.position === "static" && !!r && ["absolute", "fixed"].includes(r.position) || Wn(l) && !s && Ma(e, l)) ? o = o.filter((d) => d !== l) : r = i, l = qt(l);
  }
  return n.set(e, o), o;
}
function Xi(e) {
  let {
    element: n,
    boundary: t,
    rootBoundary: o,
    strategy: r
  } = e;
  const l = [...t === "clippingAncestors" ? _o(n) ? [] : Yi(n, this._c) : [].concat(t), o], i = l[0], s = l.reduce((u, d) => {
    const c = Zr(n, d, r);
    return u.top = nt(c.top, u.top), u.right = Ut(c.right, u.right), u.bottom = Ut(c.bottom, u.bottom), u.left = nt(c.left, u.left), u;
  }, Zr(n, i, r));
  return {
    width: s.right - s.left,
    height: s.bottom - s.top,
    x: s.left,
    y: s.top
  };
}
function Ji(e) {
  const {
    width: n,
    height: t
  } = Ia(e);
  return {
    width: n,
    height: t
  };
}
function Qi(e, n, t) {
  const o = Et(n), r = Dt(n), a = t === "fixed", l = ln(e, !0, a, n);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const s = St(0);
  function u() {
    s.x = Or(r);
  }
  if (o || !o && !a)
    if ((sn(n) !== "body" || Wn(r)) && (i = Do(n)), o) {
      const f = ln(n, !0, a, n);
      s.x = f.x + n.clientLeft, s.y = f.y + n.clientTop;
    } else r && u();
  a && !o && r && u();
  const d = r && !o && !a ? Ra(r, i) : St(0), c = l.left + i.scrollLeft - s.x - d.x, m = l.top + i.scrollTop - s.y - d.y;
  return {
    x: c,
    y: m,
    width: l.width,
    height: l.height
  };
}
function No(e) {
  return bt(e).position === "static";
}
function ea(e, n) {
  if (!Et(e) || bt(e).position === "fixed")
    return null;
  if (n)
    return n(e);
  let t = e.offsetParent;
  return Dt(e) === t && (t = t.ownerDocument.body), t;
}
function Fa(e, n) {
  const t = at(e);
  if (_o(e))
    return t;
  if (!Et(e)) {
    let r = qt(e);
    for (; r && !xn(r); ) {
      if (gt(r) && !No(r))
        return r;
      r = qt(r);
    }
    return t;
  }
  let o = ea(e, n);
  for (; o && Vi(o) && No(o); )
    o = ea(o, n);
  return o && xn(o) && No(o) && !kr(o) ? t : o || ji(e) || t;
}
const Zi = async function(e) {
  const n = this.getOffsetParent || Fa, t = this.getDimensions, o = await t(e.floating);
  return {
    reference: Qi(e.reference, await n(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function es(e) {
  return bt(e).direction === "rtl";
}
const ts = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Wi,
  getDocumentElement: Dt,
  getClippingRect: Xi,
  getOffsetParent: Fa,
  getElementRects: Zi,
  getClientRects: Gi,
  getDimensions: Ji,
  getScale: bn,
  isElement: gt,
  isRTL: es
};
function La(e, n) {
  return e.x === n.x && e.y === n.y && e.width === n.width && e.height === n.height;
}
function ns(e, n) {
  let t = null, o;
  const r = Dt(e);
  function a() {
    var i;
    clearTimeout(o), (i = t) == null || i.disconnect(), t = null;
  }
  function l(i, s) {
    i === void 0 && (i = !1), s === void 0 && (s = 1), a();
    const u = e.getBoundingClientRect(), {
      left: d,
      top: c,
      width: m,
      height: f
    } = u;
    if (i || n(), !m || !f)
      return;
    const p = Qn(c), v = Qn(r.clientWidth - (d + m)), g = Qn(r.clientHeight - (c + f)), x = Qn(d), h = {
      rootMargin: -p + "px " + -v + "px " + -g + "px " + -x + "px",
      threshold: nt(0, Ut(1, s)) || 1
    };
    let k = !0;
    function b(T) {
      const S = T[0].intersectionRatio;
      if (S !== s) {
        if (!k)
          return l();
        S ? l(!1, S) : o = setTimeout(() => {
          l(!1, 1e-7);
        }, 1e3);
      }
      S === 1 && !La(u, e.getBoundingClientRect()) && l(), k = !1;
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
function Po(e, n, t, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: r = !0,
    ancestorResize: a = !0,
    elementResize: l = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: s = !1
  } = o, u = Sr(e), d = r || a ? [...u ? Vn(u) : [], ...Vn(n)] : [];
  d.forEach((x) => {
    r && x.addEventListener("scroll", t, {
      passive: !0
    }), a && x.addEventListener("resize", t);
  });
  const c = u && i ? ns(u, t) : null;
  let m = -1, f = null;
  l && (f = new ResizeObserver((x) => {
    let [y] = x;
    y && y.target === u && f && (f.unobserve(n), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      var h;
      (h = f) == null || h.observe(n);
    })), t();
  }), u && !s && f.observe(u), f.observe(n));
  let p, v = s ? ln(e) : null;
  s && g();
  function g() {
    const x = ln(e);
    v && !La(v, x) && t(), v = x, p = requestAnimationFrame(g);
  }
  return t(), () => {
    var x;
    d.forEach((y) => {
      r && y.removeEventListener("scroll", t), a && y.removeEventListener("resize", t);
    }), c == null || c(), (x = f) == null || x.disconnect(), f = null, s && cancelAnimationFrame(p);
  };
}
const Cn = Fi, $o = Ai, Sn = Li, Er = Ri, Tr = Ni, os = $i, _r = Bi, rs = (e, n, t) => {
  const o = /* @__PURE__ */ new Map(), r = {
    platform: ts,
    ...t
  }, a = {
    ...r.platform,
    _c: o
  };
  return Pi(e, n, {
    ...r,
    platform: a
  });
};
function as(e) {
  return e != null && typeof e == "object" && "$el" in e;
}
function rr(e) {
  if (as(e)) {
    const n = e.$el;
    return xr(n) && sn(n) === "#comment" ? null : n;
  }
  return e;
}
function vn(e) {
  return typeof e == "function" ? e() : F(e);
}
function ls(e) {
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const t = rr(vn(e.element));
      return t == null ? {} : os({
        element: t,
        padding: e.padding
      }).fn(n);
    }
  };
}
function Ba(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function ta(e, n) {
  const t = Ba(e);
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
  }), i = E(() => {
    var S;
    return (S = vn(t.strategy)) != null ? S : "absolute";
  }), s = E(() => {
    var S;
    return (S = vn(t.transform)) != null ? S : !0;
  }), u = E(() => rr(e.value)), d = E(() => rr(n.value)), c = C(0), m = C(0), f = C(i.value), p = C(l.value), v = Co({}), g = C(!1), x = E(() => {
    const S = {
      position: f.value,
      left: "0",
      top: "0"
    };
    if (!d.value)
      return S;
    const _ = ta(d.value, c.value), X = ta(d.value, m.value);
    return s.value ? {
      ...S,
      transform: "translate(" + _ + "px, " + X + "px)",
      ...Ba(d.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: f.value,
      left: _ + "px",
      top: X + "px"
    };
  });
  let y;
  function h() {
    if (u.value == null || d.value == null)
      return;
    const S = r.value;
    rs(u.value, d.value, {
      middleware: a.value,
      placement: l.value,
      strategy: i.value
    }).then((_) => {
      c.value = _.x, m.value = _.y, f.value = _.strategy, p.value = _.placement, v.value = _.middlewareData, g.value = S !== !1;
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
    if (u.value != null && d.value != null) {
      y = o(u.value, d.value, h);
      return;
    }
  }
  function T() {
    r.value || (g.value = !1);
  }
  return le([a, l, i, r], h, {
    flush: "sync"
  }), le([u, d], b, {
    flush: "sync"
  }), le(r, T, {
    flush: "sync"
  }), Gl() && Ca(k), {
    x: cn(c),
    y: cn(m),
    strategy: cn(f),
    placement: cn(p),
    middlewareData: cn(v),
    isPositioned: cn(g),
    floatingStyles: x,
    update: h
  };
}
function fn(e, n, t) {
  let o = t.initialDeps ?? [], r;
  function a() {
    var l, i, s, u;
    let d;
    t.key && ((l = t.debug) != null && l.call(t)) && (d = Date.now());
    const c = e();
    if (!(c.length !== o.length || c.some((p, v) => o[v] !== p)))
      return r;
    o = c;
    let f;
    if (t.key && ((i = t.debug) != null && i.call(t)) && (f = Date.now()), r = n(...c), t.key && ((s = t.debug) != null && s.call(t))) {
      const p = Math.round((Date.now() - d) * 100) / 100, v = Math.round((Date.now() - f) * 100) / 100, g = v / 16, x = (y, h) => {
        for (y = String(y); y.length < h; )
          y = " " + y;
        return y;
      };
      console.info(
        `%c⏱ ${x(v, 5)} /${x(p, 5)} ms`,
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
const is = (e, n) => Math.abs(e - n) < 1, ss = (e, n, t) => {
  let o;
  return function(...r) {
    e.clearTimeout(o), o = e.setTimeout(() => n.apply(this, r), t);
  };
}, us = (e) => e, ds = (e) => {
  const n = Math.max(e.startIndex - e.overscan, 0), t = Math.min(e.endIndex + e.overscan, e.count - 1), o = [];
  for (let r = n; r <= t; r++)
    o.push(r);
  return o;
}, cs = (e, n) => {
  const t = e.scrollElement;
  if (!t)
    return;
  const o = e.targetWindow;
  if (!o)
    return;
  const r = (l) => {
    const { width: i, height: s } = l;
    n({ width: Math.round(i), height: Math.round(s) });
  };
  if (r(t.getBoundingClientRect()), !o.ResizeObserver)
    return () => {
    };
  const a = new o.ResizeObserver((l) => {
    const i = () => {
      const s = l[0];
      if (s != null && s.borderBoxSize) {
        const u = s.borderBoxSize[0];
        if (u) {
          r({ width: u.inlineSize, height: u.blockSize });
          return;
        }
      }
      r(t.getBoundingClientRect());
    };
    e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(i) : i();
  });
  return a.observe(t, { box: "border-box" }), () => {
    a.unobserve(t);
  };
}, na = {
  passive: !0
}, oa = typeof window > "u" ? !0 : "onscrollend" in window, fs = (e, n) => {
  const t = e.scrollElement;
  if (!t)
    return;
  const o = e.targetWindow;
  if (!o)
    return;
  let r = 0;
  const a = e.options.useScrollendEvent && oa ? () => {
  } : ss(
    o,
    () => {
      n(r, !1);
    },
    e.options.isScrollingResetDelay
  ), l = (d) => () => {
    const { horizontal: c, isRtl: m } = e.options;
    r = c ? t.scrollLeft * (m && -1 || 1) : t.scrollTop, a(), n(r, d);
  }, i = l(!0), s = l(!1);
  s(), t.addEventListener("scroll", i, na);
  const u = e.options.useScrollendEvent && oa;
  return u && t.addEventListener("scrollend", s, na), () => {
    t.removeEventListener("scroll", i), u && t.removeEventListener("scrollend", s);
  };
}, ps = (e, n, t) => {
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
}, ms = (e, {
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
class vs {
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
        getItemKey: us,
        rangeExtractor: ds,
        onChange: () => {
        },
        measureElement: ps,
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
        const i = t[l];
        if (r.has(i.lane))
          continue;
        const s = a.get(
          i.lane
        );
        if (s == null || i.end > s.end ? a.set(i.lane, i) : i.end < s.end && r.set(i.lane, !0), r.size === this.options.lanes)
          break;
      }
      return a.size === this.options.lanes ? Array.from(a.values()).sort((l, i) => l.end === i.end ? l.index - i.index : l.end - i.end)[0] : void 0;
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
      ({ count: t, paddingStart: o, scrollMargin: r, getItemKey: a, enabled: l }, i) => {
        if (!l)
          return this.measurementsCache = [], this.itemSizeCache.clear(), [];
        this.measurementsCache.length === 0 && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((d) => {
          this.itemSizeCache.set(d.key, d.size);
        }));
        const s = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [];
        const u = this.measurementsCache.slice(0, s);
        for (let d = s; d < t; d++) {
          const c = a(d), m = this.options.lanes === 1 ? u[d - 1] : this.getFurthestMeasurement(u, d), f = m ? m.end + this.options.gap : o + r, p = i.get(c), v = typeof p == "number" ? p : this.options.estimateSize(d), g = f + v, x = m ? m.lane : d % this.options.lanes;
          u[d] = {
            index: d,
            start: f,
            size: v,
            end: g,
            key: c,
            lane: x
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
      (t, o, r, a) => this.range = t.length > 0 && o > 0 ? hs({
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
      const l = a.key, i = this.elementsCache.get(l);
      i !== t && (i && this.observer.unobserve(i), this.observer.observe(t), this.elementsCache.set(l, t)), t.isConnected && this.resizeItem(r, this.options.measureElement(t, o, this));
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
          const i = t[a], s = o[i];
          r.push(s);
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
          o[Na(
            0,
            o.length - 1,
            (r) => Vo(o[r]).start,
            t
          )]
        );
    }, this.getOffsetForAlignment = (t, o, r = 0) => {
      const a = this.getSize(), l = this.getScrollOffset();
      o === "auto" && (o = t >= l + a ? "end" : "start"), o === "center" ? t += (r - a) / 2 : o === "end" && (t -= a);
      const i = this.options.horizontal ? "scrollWidth" : "scrollHeight", u = (this.scrollElement ? "document" in this.scrollElement ? this.scrollElement.document.documentElement[i] : this.scrollElement[i] : 0) - a;
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
      const i = o === "end" ? r.end + this.options.scrollPaddingEnd : r.start - this.options.scrollPaddingStart;
      return [
        this.getOffsetForAlignment(i, o, r.size),
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
      const [l, i] = a;
      this._scrollToOffset(l, { adjustments: void 0, behavior: r }), r !== "smooth" && this.isDynamicMode() && this.targetWindow && (this.scrollToIndexTimeoutId = this.targetWindow.setTimeout(() => {
        if (this.scrollToIndexTimeoutId = null, this.elementsCache.has(
          this.options.getItemKey(t)
        )) {
          const [u] = Vo(
            this.getOffsetForIndex(t, i)
          );
          is(u, this.getScrollOffset()) || this.scrollToIndex(t, { align: i, behavior: r });
        } else
          this.scrollToIndex(t, { align: i, behavior: r });
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
        for (; l >= 0 && a.some((i) => i === null); ) {
          const i = o[l];
          a[i.lane] === null && (a[i.lane] = i.end), l--;
        }
        r = Math.max(...a.filter((i) => i !== null));
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
function hs({
  measurements: e,
  outerSize: n,
  scrollOffset: t,
  lanes: o
}) {
  const r = e.length - 1, a = (s) => e[s].start;
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
  ), i = l;
  if (o === 1)
    for (; i < r && e[i].end < t + n; )
      i++;
  else if (o > 1) {
    const s = Array(o).fill(0);
    for (; i < r && s.some((d) => d < t + n); ) {
      const d = e[i];
      s[d.lane] = d.end, i++;
    }
    const u = Array(o).fill(t + n);
    for (; l >= 0 && u.some((d) => d >= t); ) {
      const d = e[l];
      u[d.lane] = d.start, l--;
    }
    l = Math.max(0, l - l % o), i = Math.min(r, i + (o - 1 - i % o));
  }
  return { startIndex: l, endIndex: i };
}
function gs(e) {
  const n = new vs(F(e)), t = Co(n), o = n._didMount();
  return le(
    () => F(e).getScrollElement(),
    (r) => {
      r && n._willUpdate();
    },
    {
      immediate: !0
    }
  ), le(
    () => F(e),
    (r) => {
      n.setOptions({
        ...r,
        onChange: (a, l) => {
          var i;
          qr(t), (i = r.onChange) == null || i.call(r, a, l);
        }
      }), n._willUpdate(), qr(t);
    },
    {
      immediate: !0
    }
  ), Ca(o), t;
}
function bs(e) {
  return gs(
    E(() => ({
      observeElementRect: cs,
      observeElementOffset: fs,
      scrollToFn: ms,
      ...F(e)
    }))
  );
}
function Va(e, n, t) {
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
function ys() {
  let e = Kt();
  return we(() => e.dispose()), e;
}
function ws() {
  let e = ys();
  return (n) => {
    e.dispose(), e.nextFrame(n);
  };
}
let xs = 0;
function ks() {
  return ++xs;
}
function Me() {
  return ks();
}
function N(e) {
  var n;
  if (e == null || e.value == null) return null;
  let t = (n = e.value.$el) != null ? n : e.value;
  return t instanceof Node ? t : null;
}
function $e(e, n, ...t) {
  if (e in n) {
    let r = n[e];
    return typeof r == "function" ? r(...t) : r;
  }
  let o = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map((r) => `"${r}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(o, $e), o;
}
var Cs = Object.defineProperty, Ss = (e, n, t) => n in e ? Cs(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, ra = (e, n, t) => (Ss(e, typeof n != "symbol" ? n + "" : n, t), t);
let Os = class {
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
}, Gn = new Os();
function dt(e) {
  var n, t;
  return Gn.isServer ? null : e ? "ownerDocument" in e ? e.ownerDocument : "value" in e ? (t = (n = N(e)) == null ? void 0 : n.ownerDocument) != null ? t : document : null : document;
}
let ho = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var qe = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(qe || {}), jn = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(jn || {}), Es = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Es || {});
function Io(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(ho)).sort((n, t) => Math.sign((n.tabIndex || Number.MAX_SAFE_INTEGER) - (t.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var Pr = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Pr || {});
function ja(e, n = 0) {
  var t;
  return e === ((t = dt(e)) == null ? void 0 : t.body) ? !1 : $e(n, { 0() {
    return e.matches(ho);
  }, 1() {
    let o = e;
    for (; o !== null; ) {
      if (o.matches(ho)) return !0;
      o = o.parentElement;
    }
    return !1;
  } });
}
var Ts = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(Ts || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function an(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let _s = ["textarea", "input"].join(",");
function Ds(e) {
  var n, t;
  return (t = (n = e == null ? void 0 : e.matches) == null ? void 0 : n.call(e, _s)) != null ? t : !1;
}
function za(e, n = (t) => t) {
  return e.slice().sort((t, o) => {
    let r = n(t), a = n(o);
    if (r === null || a === null) return 0;
    let l = r.compareDocumentPosition(a);
    return l & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : l & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function mt(e, n, { sorted: t = !0, relativeTo: o = null, skipElements: r = [] } = {}) {
  var a;
  let l = (a = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? a : document, i = Array.isArray(e) ? t ? za(e) : e : Io(e);
  r.length > 0 && i.length > 1 && (i = i.filter((p) => !r.includes(p))), o = o ?? l.activeElement;
  let s = (() => {
    if (n & 5) return 1;
    if (n & 10) return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), u = (() => {
    if (n & 1) return 0;
    if (n & 2) return Math.max(0, i.indexOf(o)) - 1;
    if (n & 4) return Math.max(0, i.indexOf(o)) + 1;
    if (n & 8) return i.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), d = n & 32 ? { preventScroll: !0 } : {}, c = 0, m = i.length, f;
  do {
    if (c >= m || c + m <= 0) return 0;
    let p = u + c;
    if (n & 16) p = (p + m) % m;
    else {
      if (p < 0) return 3;
      if (p >= m) return 1;
    }
    f = i[p], f == null || f.focus(d), c += s;
  } while (f !== l.activeElement);
  return n & 6 && Ds(f) && f.select(), 2;
}
function Ha() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function Ps() {
  return /Android/gi.test(window.navigator.userAgent);
}
function Wa() {
  return Ha() || Ps();
}
function Dn(e, n, t, o) {
  Gn.isServer || Fe((r) => {
    e.value && (document.addEventListener(n, t, o), r(() => document.removeEventListener(n, t, o)));
  });
}
function Ga(e, n, t, o) {
  Gn.isServer || Fe((r) => {
    e.value && (window.addEventListener(n, t, o), r(() => window.removeEventListener(n, t, o)));
  });
}
const aa = 30;
function $r(e, n, t = E(() => !0)) {
  function o(l, i) {
    if (l.defaultPrevented) return;
    let s = i(l);
    if (s === null || !s.getRootNode().contains(s)) return;
    let u = function d(c) {
      return typeof c == "function" ? d(c()) : Array.isArray(c) || c instanceof Set ? c : [c];
    }(e);
    for (let d of u) {
      if (d === null) continue;
      let c = d instanceof HTMLElement ? d : N(d);
      if (c != null && c.contains(s) || l.composed && l.composedPath().includes(c)) return;
    }
    return !ja(s, Pr.Loose) && s.tabIndex !== -1 && l.preventDefault(), n(l, s);
  }
  let r = C(null);
  Dn(t, "pointerdown", (l) => {
    var i, s;
    r.value = ((s = (i = l.composedPath) == null ? void 0 : i.call(l)) == null ? void 0 : s[0]) || l.target;
  }, !0), Dn(t, "mousedown", (l) => {
    var i, s;
    r.value = ((s = (i = l.composedPath) == null ? void 0 : i.call(l)) == null ? void 0 : s[0]) || l.target;
  }, !0), Dn(t, "click", (l) => {
    Wa() || r.value && (o(l, () => r.value), r.value = null);
  }, !0);
  let a = { x: 0, y: 0 };
  Dn(t, "touchstart", (l) => {
    a.x = l.touches[0].clientX, a.y = l.touches[0].clientY;
  }, !0), Dn(t, "touchend", (l) => {
    let i = { x: l.changedTouches[0].clientX, y: l.changedTouches[0].clientY };
    if (!(Math.abs(i.x - a.x) >= aa || Math.abs(i.y - a.y) >= aa)) return o(l, () => l.target instanceof HTMLElement ? l.target : null);
  }, !0), Ga(t, "blur", (l) => o(l, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
function la(e, n) {
  if (e) return e;
  let t = n ?? "button";
  if (typeof t == "string" && t.toLowerCase() === "button") return "button";
}
function Ir(e, n) {
  let t = C(la(e.value.type, e.value.as));
  return se(() => {
    t.value = la(e.value.type, e.value.as);
  }), Fe(() => {
    var o;
    t.value || N(n) && N(n) instanceof HTMLButtonElement && !((o = N(n)) != null && o.hasAttribute("type")) && (t.value = "button");
  }), t;
}
function ia(e) {
  return [e.screenX, e.screenY];
}
function $s() {
  let e = C([-1, -1]);
  return { wasMoved(n) {
    let t = ia(n);
    return e.value[0] === t[0] && e.value[1] === t[1] ? !1 : (e.value = t, !0);
  }, update(n) {
    e.value = ia(n);
  } };
}
function Is({ container: e, accept: n, walk: t, enabled: o }) {
  Fe(() => {
    let r = e.value;
    if (!r || o !== void 0 && !o.value) return;
    let a = dt(e);
    if (!a) return;
    let l = Object.assign((s) => n(s), { acceptNode: n }), i = a.createTreeWalker(r, NodeFilter.SHOW_ELEMENT, l, !1);
    for (; i.nextNode(); ) t(i.currentNode);
  });
}
var st = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(st || {}), jt = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(jt || {});
function ge({ visible: e = !0, features: n = 0, ourProps: t, theirProps: o, ...r }) {
  var a;
  let l = qa(o, t), i = Object.assign(r, { props: l });
  if (e || n & 2 && l.static) return jo(i);
  if (n & 1) {
    let s = (a = l.unmount) == null || a ? 0 : 1;
    return $e(s, { 0() {
      return null;
    }, 1() {
      return jo({ ...r, props: { ...l, hidden: !0, style: { display: "none" } } });
    } });
  }
  return jo(i);
}
function jo({ props: e, attrs: n, slots: t, slot: o, name: r }) {
  var a, l;
  let { as: i, ...s } = En(e, ["unmount", "static"]), u = (a = t.default) == null ? void 0 : a.call(t, o), d = {};
  if (o) {
    let c = !1, m = [];
    for (let [f, p] of Object.entries(o)) typeof p == "boolean" && (c = !0), p === !0 && m.push(f);
    c && (d["data-headlessui-state"] = m.join(" "));
  }
  if (i === "template") {
    if (u = Ua(u ?? []), Object.keys(s).length > 0 || Object.keys(n).length > 0) {
      let [c, ...m] = u ?? [];
      if (!As(c) || m.length > 0) throw new Error(['Passing props on "template"!', "", `The current component <${r} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(s).concat(Object.keys(n)).map((v) => v.trim()).filter((v, g, x) => x.indexOf(v) === g).sort((v, g) => v.localeCompare(g)).map((v) => `  - ${v}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((v) => `  - ${v}`).join(`
`)].join(`
`));
      let f = qa((l = c.props) != null ? l : {}, s, d), p = Sa(c, f, !0);
      for (let v in f) v.startsWith("on") && (p.props || (p.props = {}), p.props[v] = f[v]);
      return p;
    }
    return Array.isArray(u) && u.length === 1 ? u[0] : u;
  }
  return ie(i, Object.assign({}, s, d), { default: () => u });
}
function Ua(e) {
  return e.flatMap((n) => n.type === xe ? Ua(n.children) : [n]);
}
function qa(...e) {
  if (e.length === 0) return {};
  if (e.length === 1) return e[0];
  let n = {}, t = {};
  for (let o of e) for (let r in o) r.startsWith("on") && typeof o[r] == "function" ? (t[r] != null || (t[r] = []), t[r].push(o[r])) : n[r] = o[r];
  if (n.disabled || n["aria-disabled"]) return Object.assign(n, Object.fromEntries(Object.keys(t).map((o) => [o, void 0])));
  for (let o in t) Object.assign(n, { [o](r, ...a) {
    let l = t[o];
    for (let i of l) {
      if (r instanceof Event && r.defaultPrevented) return;
      i(r, ...a);
    }
  } });
  return n;
}
function Ka(e) {
  let n = Object.assign({}, e);
  for (let t in n) n[t] === void 0 && delete n[t];
  return n;
}
function En(e, n = []) {
  let t = Object.assign({}, e);
  for (let o of n) o in t && delete t[o];
  return t;
}
function As(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
var Tt = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Tt || {});
let Rt = H({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: n, attrs: t }) {
  return () => {
    var o;
    let { features: r, ...a } = e, l = { "aria-hidden": (r & 2) === 2 ? !0 : (o = a["aria-hidden"]) != null ? o : void 0, hidden: (r & 4) === 4 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(r & 4) === 4 && (r & 2) !== 2 && { display: "none" } } };
    return ge({ ourProps: l, theirProps: a, slot: {}, attrs: t, slots: n, name: "Hidden" });
  };
} }), Ya = Symbol("Context");
var _e = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(_e || {});
function Rs() {
  return Tn() !== null;
}
function Tn() {
  return pe(Ya, null);
}
function Ar(e) {
  De(Ya, e);
}
var Te = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(Te || {}), Xa = ((e) => (e[e.Left = 0] = "Left", e[e.Right = 2] = "Right", e))(Xa || {});
function Ms(e) {
  function n() {
    document.readyState !== "loading" && (e(), document.removeEventListener("DOMContentLoaded", n));
  }
  typeof window < "u" && typeof document < "u" && (document.addEventListener("DOMContentLoaded", n), n());
}
let $t = [];
Ms(() => {
  function e(n) {
    if (!(n.target instanceof HTMLElement) || n.target === document.body || $t[0] === n.target) return;
    let t = n.target;
    t = t.closest(ho), $t.unshift(t ?? n.target), $t = $t.filter((o) => o != null && o.isConnected), $t.splice(10);
  }
  window.addEventListener("click", e, { capture: !0 }), window.addEventListener("mousedown", e, { capture: !0 }), window.addEventListener("focus", e, { capture: !0 }), document.body.addEventListener("click", e, { capture: !0 }), document.body.addEventListener("mousedown", e, { capture: !0 }), document.body.addEventListener("focus", e, { capture: !0 });
});
function Fs(e) {
  throw new Error("Unexpected object: " + e);
}
var ze = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(ze || {});
function sa(e, n) {
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
      Fs(e);
  }
}
function Ja(e = {}, n = null, t = []) {
  for (let [o, r] of Object.entries(e)) Za(t, Qa(n, o), r);
  return t;
}
function Qa(e, n) {
  return e ? e + "[" + n + "]" : n;
}
function Za(e, n, t) {
  if (Array.isArray(t)) for (let [o, r] of t.entries()) Za(e, Qa(n, o.toString()), r);
  else t instanceof Date ? e.push([n, t.toISOString()]) : typeof t == "boolean" ? e.push([n, t ? "1" : "0"]) : typeof t == "string" ? e.push([n, t]) : typeof t == "number" ? e.push([n, `${t}`]) : t == null ? e.push([n, ""]) : Ja(t, n, e);
}
function Ls(e) {
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
function Bs(e, n) {
  return e === n;
}
var Ns = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Ns || {}), Vs = ((e) => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(Vs || {}), js = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Focus = 1] = "Focus", e[e.Other = 2] = "Other", e))(js || {});
let el = Symbol("ComboboxContext");
function un(e) {
  let n = pe(el, null);
  if (n === null) {
    let t = new Error(`<${e} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t, un), t;
  }
  return n;
}
let tl = Symbol("VirtualContext"), zs = H({ name: "VirtualProvider", setup(e, { slots: n }) {
  let t = un("VirtualProvider"), o = E(() => {
    let i = N(t.optionsRef);
    if (!i) return { start: 0, end: 0 };
    let s = window.getComputedStyle(i);
    return { start: parseFloat(s.paddingBlockStart || s.paddingTop), end: parseFloat(s.paddingBlockEnd || s.paddingBottom) };
  }), r = bs(E(() => ({ scrollPaddingStart: o.value.start, scrollPaddingEnd: o.value.end, count: t.virtual.value.options.length, estimateSize() {
    return 40;
  }, getScrollElement() {
    return N(t.optionsRef);
  }, overscan: 12 }))), a = E(() => {
    var i;
    return (i = t.virtual.value) == null ? void 0 : i.options;
  }), l = C(0);
  return le([a], () => {
    l.value += 1;
  }), De(tl, t.virtual.value ? r : null), () => [ie("div", { style: { position: "relative", width: "100%", height: `${r.value.getTotalSize()}px` }, ref: (i) => {
    i && t.activationTrigger.value !== 0 && t.activeOptionIndex.value !== null && t.virtual.value.options.length > t.activeOptionIndex.value && r.value.scrollToIndex(t.activeOptionIndex.value);
  } }, r.value.getVirtualItems().map((i) => Sa(n.default({ option: t.virtual.value.options[i.index], open: t.comboboxState.value === 0 })[0], { key: `${l.value}-${i.index}`, "data-index": i.index, "aria-setsize": t.virtual.value.options.length, "aria-posinset": i.index + 1, style: { position: "absolute", top: 0, left: 0, transform: `translateY(${i.start}px)`, overflowAnchor: "none" } })))];
} }), Rr = H({ name: "Combobox", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: !1 }, by: { type: [String, Function], nullable: !0, default: null }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, form: { type: String, optional: !0 }, name: { type: String, optional: !0 }, nullable: { type: Boolean, default: !1 }, multiple: { type: [Boolean], default: !1 }, immediate: { type: [Boolean], default: !1 }, virtual: { type: Object, default: null } }, inheritAttrs: !1, setup(e, { slots: n, attrs: t, emit: o }) {
  let r = C(1), a = C(null), l = C(null), i = C(null), s = C(null), u = C({ static: !1, hold: !1 }), d = C([]), c = C(null), m = C(2), f = C(!1);
  function p(P = (V) => V) {
    let V = c.value !== null ? d.value[c.value] : null, q = P(d.value.slice()), w = q.length > 0 && q[0].dataRef.order.value !== null ? q.sort((L, K) => L.dataRef.order.value - K.dataRef.order.value) : za(q, (L) => N(L.dataRef.domRef)), $ = V ? w.indexOf(V) : null;
    return $ === -1 && ($ = null), { options: w, activeOptionIndex: $ };
  }
  let v = E(() => e.multiple ? 1 : 0), g = E(() => e.nullable), [x, y] = Va(E(() => e.modelValue), (P) => o("update:modelValue", P), E(() => e.defaultValue)), h = E(() => x.value === void 0 ? $e(v.value, { 1: [], 0: void 0 }) : x.value), k = null, b = null;
  function T(P) {
    return $e(v.value, { 0() {
      return y == null ? void 0 : y(P);
    }, 1: () => {
      let V = Bt(_.value.value).slice(), q = Bt(P), w = V.findIndex(($) => _.compare(q, Bt($)));
      return w === -1 ? V.push(q) : V.splice(w, 1), y == null ? void 0 : y(V);
    } });
  }
  let S = E(() => {
    var P;
    return (P = e.virtual) == null ? void 0 : P.options;
  });
  le([S], ([P], [V]) => {
    if (_.virtual.value && P && V && c.value !== null) {
      let q = P.indexOf(V[c.value]);
      q !== -1 ? c.value = q : c.value = null;
    }
  });
  let _ = { comboboxState: r, value: h, mode: v, compare(P, V) {
    if (typeof e.by == "string") {
      let q = e.by;
      return (P == null ? void 0 : P[q]) === (V == null ? void 0 : V[q]);
    }
    return e.by === null ? Bs(P, V) : e.by(P, V);
  }, calculateIndex(P) {
    return _.virtual.value ? e.by === null ? _.virtual.value.options.indexOf(P) : _.virtual.value.options.findIndex((V) => _.compare(V, P)) : d.value.findIndex((V) => _.compare(V.dataRef.value, P));
  }, defaultValue: E(() => e.defaultValue), nullable: g, immediate: E(() => e.immediate), virtual: E(() => {
    var P;
    return e.virtual ? { options: e.virtual.options, disabled: (P = e.virtual.disabled) != null ? P : () => !1 } : null;
  }), inputRef: l, labelRef: a, buttonRef: i, optionsRef: s, disabled: E(() => e.disabled), options: d, change(P) {
    y(P);
  }, activeOptionIndex: E(() => {
    if (f.value && c.value === null && (_.virtual.value ? _.virtual.value.options.length > 0 : d.value.length > 0)) {
      if (_.virtual.value) {
        let V = _.virtual.value.options.findIndex((q) => {
          var w;
          return !((w = _.virtual.value) != null && w.disabled(q));
        });
        if (V !== -1) return V;
      }
      let P = d.value.findIndex((V) => !V.dataRef.disabled);
      if (P !== -1) return P;
    }
    return c.value;
  }), activationTrigger: m, optionsPropsRef: u, closeCombobox() {
    f.value = !1, !e.disabled && r.value !== 1 && (r.value = 1, c.value = null);
  }, openCombobox() {
    if (f.value = !0, !e.disabled && r.value !== 0) {
      if (_.value.value) {
        let P = _.calculateIndex(_.value.value);
        P !== -1 && (c.value = P);
      }
      r.value = 0;
    }
  }, setActivationTrigger(P) {
    m.value = P;
  }, goToOption(P, V, q) {
    f.value = !1, k !== null && cancelAnimationFrame(k), k = requestAnimationFrame(() => {
      if (e.disabled || s.value && !u.value.static && r.value === 1) return;
      if (_.virtual.value) {
        c.value = P === ze.Specific ? V : sa({ focus: P }, { resolveItems: () => _.virtual.value.options, resolveActiveIndex: () => {
          var L, K;
          return (K = (L = _.activeOptionIndex.value) != null ? L : _.virtual.value.options.findIndex((ne) => {
            var ce;
            return !((ce = _.virtual.value) != null && ce.disabled(ne));
          })) != null ? K : null;
        }, resolveDisabled: (L) => _.virtual.value.disabled(L), resolveId() {
          throw new Error("Function not implemented.");
        } }), m.value = q ?? 2;
        return;
      }
      let w = p();
      if (w.activeOptionIndex === null) {
        let L = w.options.findIndex((K) => !K.dataRef.disabled);
        L !== -1 && (w.activeOptionIndex = L);
      }
      let $ = P === ze.Specific ? V : sa({ focus: P }, { resolveItems: () => w.options, resolveActiveIndex: () => w.activeOptionIndex, resolveId: (L) => L.id, resolveDisabled: (L) => L.dataRef.disabled });
      c.value = $, m.value = q ?? 2, d.value = w.options;
    });
  }, selectOption(P) {
    let V = d.value.find((w) => w.id === P);
    if (!V) return;
    let { dataRef: q } = V;
    T(q.value);
  }, selectActiveOption() {
    if (_.activeOptionIndex.value !== null) {
      if (_.virtual.value) T(_.virtual.value.options[_.activeOptionIndex.value]);
      else {
        let { dataRef: P } = d.value[_.activeOptionIndex.value];
        T(P.value);
      }
      _.goToOption(ze.Specific, _.activeOptionIndex.value);
    }
  }, registerOption(P, V) {
    let q = So({ id: P, dataRef: V });
    if (_.virtual.value) {
      d.value.push(q);
      return;
    }
    b && cancelAnimationFrame(b);
    let w = p(($) => ($.push(q), $));
    c.value === null && _.isSelected(V.value.value) && (w.activeOptionIndex = w.options.indexOf(q)), d.value = w.options, c.value = w.activeOptionIndex, m.value = 2, w.options.some(($) => !N($.dataRef.domRef)) && (b = requestAnimationFrame(() => {
      let $ = p();
      d.value = $.options, c.value = $.activeOptionIndex;
    }));
  }, unregisterOption(P, V) {
    if (k !== null && cancelAnimationFrame(k), V && (f.value = !0), _.virtual.value) {
      d.value = d.value.filter((w) => w.id !== P);
      return;
    }
    let q = p((w) => {
      let $ = w.findIndex((L) => L.id === P);
      return $ !== -1 && w.splice($, 1), w;
    });
    d.value = q.options, c.value = q.activeOptionIndex, m.value = 2;
  }, isSelected(P) {
    return $e(v.value, { 0: () => _.compare(Bt(_.value.value), Bt(P)), 1: () => Bt(_.value.value).some((V) => _.compare(Bt(V), Bt(P))) });
  }, isActive(P) {
    return c.value === _.calculateIndex(P);
  } };
  $r([l, i, s], () => _.closeCombobox(), E(() => r.value === 0)), De(el, _), Ar(E(() => $e(r.value, { 0: _e.Open, 1: _e.Closed })));
  let X = E(() => {
    var P;
    return (P = N(l)) == null ? void 0 : P.closest("form");
  });
  return se(() => {
    le([X], () => {
      if (!X.value || e.defaultValue === void 0) return;
      function P() {
        _.change(e.defaultValue);
      }
      return X.value.addEventListener("reset", P), () => {
        var V;
        (V = X.value) == null || V.removeEventListener("reset", P);
      };
    }, { immediate: !0 });
  }), () => {
    var P, V, q;
    let { name: w, disabled: $, form: L, ...K } = e, ne = { open: r.value === 0, disabled: $, activeIndex: _.activeOptionIndex.value, activeOption: _.activeOptionIndex.value === null ? null : _.virtual.value ? _.virtual.value.options[(P = _.activeOptionIndex.value) != null ? P : 0] : (q = (V = _.options.value[_.activeOptionIndex.value]) == null ? void 0 : V.dataRef.value) != null ? q : null, value: h.value };
    return ie(xe, [...w != null && h.value != null ? Ja({ [w]: h.value }).map(([ce, oe]) => ie(Rt, Ka({ features: Tt.Hidden, key: ce, as: "input", type: "hidden", hidden: !0, readOnly: !0, form: L, disabled: $, name: ce, value: oe }))) : [], ge({ theirProps: { ...t, ...En(K, ["by", "defaultValue", "immediate", "modelValue", "multiple", "nullable", "onUpdate:modelValue", "virtual"]) }, ourProps: {}, slot: ne, slots: n, attrs: t, name: "Combobox" })]);
  };
} });
H({ name: "ComboboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: () => `headlessui-combobox-label-${Me()}` } }, setup(e, { attrs: n, slots: t }) {
  let o = un("ComboboxLabel");
  function r() {
    var a;
    (a = N(o.inputRef)) == null || a.focus({ preventScroll: !0 });
  }
  return () => {
    let a = { open: o.comboboxState.value === 0, disabled: o.disabled.value }, { id: l, ...i } = e, s = { id: l, ref: o.labelRef, onClick: r };
    return ge({ ourProps: s, theirProps: i, slot: a, attrs: n, slots: t, name: "ComboboxLabel" });
  };
} });
let Mr = H({ name: "ComboboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: () => `headlessui-combobox-button-${Me()}` } }, setup(e, { attrs: n, slots: t, expose: o }) {
  let r = un("ComboboxButton");
  o({ el: r.buttonRef, $el: r.buttonRef });
  function a(s) {
    r.disabled.value || (r.comboboxState.value === 0 ? r.closeCombobox() : (s.preventDefault(), r.openCombobox()), He(() => {
      var u;
      return (u = N(r.inputRef)) == null ? void 0 : u.focus({ preventScroll: !0 });
    }));
  }
  function l(s) {
    switch (s.key) {
      case Te.ArrowDown:
        s.preventDefault(), s.stopPropagation(), r.comboboxState.value === 1 && r.openCombobox(), He(() => {
          var u;
          return (u = r.inputRef.value) == null ? void 0 : u.focus({ preventScroll: !0 });
        });
        return;
      case Te.ArrowUp:
        s.preventDefault(), s.stopPropagation(), r.comboboxState.value === 1 && (r.openCombobox(), He(() => {
          r.value.value || r.goToOption(ze.Last);
        })), He(() => {
          var u;
          return (u = r.inputRef.value) == null ? void 0 : u.focus({ preventScroll: !0 });
        });
        return;
      case Te.Escape:
        if (r.comboboxState.value !== 0) return;
        s.preventDefault(), r.optionsRef.value && !r.optionsPropsRef.value.static && s.stopPropagation(), r.closeCombobox(), He(() => {
          var u;
          return (u = r.inputRef.value) == null ? void 0 : u.focus({ preventScroll: !0 });
        });
        return;
    }
  }
  let i = Ir(E(() => ({ as: e.as, type: n.type })), r.buttonRef);
  return () => {
    var s, u;
    let d = { open: r.comboboxState.value === 0, disabled: r.disabled.value, value: r.value.value }, { id: c, ...m } = e, f = { ref: r.buttonRef, id: c, type: i.value, tabindex: "-1", "aria-haspopup": "listbox", "aria-controls": (s = N(r.optionsRef)) == null ? void 0 : s.id, "aria-expanded": r.comboboxState.value === 0, "aria-labelledby": r.labelRef.value ? [(u = N(r.labelRef)) == null ? void 0 : u.id, c].join(" ") : void 0, disabled: r.disabled.value === !0 ? !0 : void 0, onKeydown: l, onClick: a };
    return ge({ ourProps: f, theirProps: m, slot: d, attrs: n, slots: t, name: "ComboboxButton" });
  };
} }), Fr = H({ name: "ComboboxInput", props: { as: { type: [Object, String], default: "input" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, displayValue: { type: Function }, defaultValue: { type: String, default: void 0 }, id: { type: String, default: () => `headlessui-combobox-input-${Me()}` } }, emits: { change: (e) => !0 }, setup(e, { emit: n, attrs: t, slots: o, expose: r }) {
  let a = un("ComboboxInput"), l = E(() => dt(N(a.inputRef))), i = { value: !1 };
  r({ el: a.inputRef, $el: a.inputRef });
  function s() {
    a.change(null);
    let h = N(a.optionsRef);
    h && (h.scrollTop = 0), a.goToOption(ze.Nothing);
  }
  let u = E(() => {
    var h;
    let k = a.value.value;
    return N(a.inputRef) ? typeof e.displayValue < "u" && k !== void 0 ? (h = e.displayValue(k)) != null ? h : "" : typeof k == "string" ? k : "" : "";
  });
  se(() => {
    le([u, a.comboboxState, l], ([h, k], [b, T]) => {
      if (i.value) return;
      let S = N(a.inputRef);
      S && ((T === 0 && k === 1 || h !== b) && (S.value = h), requestAnimationFrame(() => {
        var _;
        if (i.value || !S || ((_ = l.value) == null ? void 0 : _.activeElement) !== S) return;
        let { selectionStart: X, selectionEnd: P } = S;
        Math.abs((P ?? 0) - (X ?? 0)) === 0 && X === 0 && S.setSelectionRange(S.value.length, S.value.length);
      }));
    }, { immediate: !0 }), le([a.comboboxState], ([h], [k]) => {
      if (h === 0 && k === 1) {
        if (i.value) return;
        let b = N(a.inputRef);
        if (!b) return;
        let T = b.value, { selectionStart: S, selectionEnd: _, selectionDirection: X } = b;
        b.value = "", b.value = T, X !== null ? b.setSelectionRange(S, _, X) : b.setSelectionRange(S, _);
      }
    });
  });
  let d = C(!1);
  function c() {
    d.value = !0;
  }
  function m() {
    Kt().nextFrame(() => {
      d.value = !1;
    });
  }
  let f = ws();
  function p(h) {
    switch (i.value = !0, f(() => {
      d.value || (i.value = !1);
    }), h.key) {
      case Te.Enter:
        if (i.value = !1, a.comboboxState.value !== 0 || d.value) return;
        if (h.preventDefault(), h.stopPropagation(), a.activeOptionIndex.value === null) {
          a.closeCombobox();
          return;
        }
        a.selectActiveOption(), a.mode.value === 0 && a.closeCombobox();
        break;
      case Te.ArrowDown:
        return i.value = !1, h.preventDefault(), h.stopPropagation(), $e(a.comboboxState.value, { 0: () => a.goToOption(ze.Next), 1: () => a.openCombobox() });
      case Te.ArrowUp:
        return i.value = !1, h.preventDefault(), h.stopPropagation(), $e(a.comboboxState.value, { 0: () => a.goToOption(ze.Previous), 1: () => {
          a.openCombobox(), He(() => {
            a.value.value || a.goToOption(ze.Last);
          });
        } });
      case Te.Home:
        if (h.shiftKey) break;
        return i.value = !1, h.preventDefault(), h.stopPropagation(), a.goToOption(ze.First);
      case Te.PageUp:
        return i.value = !1, h.preventDefault(), h.stopPropagation(), a.goToOption(ze.First);
      case Te.End:
        if (h.shiftKey) break;
        return i.value = !1, h.preventDefault(), h.stopPropagation(), a.goToOption(ze.Last);
      case Te.PageDown:
        return i.value = !1, h.preventDefault(), h.stopPropagation(), a.goToOption(ze.Last);
      case Te.Escape:
        if (i.value = !1, a.comboboxState.value !== 0) return;
        h.preventDefault(), a.optionsRef.value && !a.optionsPropsRef.value.static && h.stopPropagation(), a.nullable.value && a.mode.value === 0 && a.value.value === null && s(), a.closeCombobox();
        break;
      case Te.Tab:
        if (i.value = !1, a.comboboxState.value !== 0) return;
        a.mode.value === 0 && a.activationTrigger.value !== 1 && a.selectActiveOption(), a.closeCombobox();
        break;
    }
  }
  function v(h) {
    n("change", h), a.nullable.value && a.mode.value === 0 && h.target.value === "" && s(), a.openCombobox();
  }
  function g(h) {
    var k, b, T;
    let S = (k = h.relatedTarget) != null ? k : $t.find((_) => _ !== h.currentTarget);
    if (i.value = !1, !((b = N(a.optionsRef)) != null && b.contains(S)) && !((T = N(a.buttonRef)) != null && T.contains(S)) && a.comboboxState.value === 0) return h.preventDefault(), a.mode.value === 0 && (a.nullable.value && a.value.value === null ? s() : a.activationTrigger.value !== 1 && a.selectActiveOption()), a.closeCombobox();
  }
  function x(h) {
    var k, b, T;
    let S = (k = h.relatedTarget) != null ? k : $t.find((_) => _ !== h.currentTarget);
    (b = N(a.buttonRef)) != null && b.contains(S) || (T = N(a.optionsRef)) != null && T.contains(S) || a.disabled.value || a.immediate.value && a.comboboxState.value !== 0 && (a.openCombobox(), Kt().nextFrame(() => {
      a.setActivationTrigger(1);
    }));
  }
  let y = E(() => {
    var h, k, b, T;
    return (T = (b = (k = e.defaultValue) != null ? k : a.defaultValue.value !== void 0 ? (h = e.displayValue) == null ? void 0 : h.call(e, a.defaultValue.value) : null) != null ? b : a.defaultValue.value) != null ? T : "";
  });
  return () => {
    var h, k, b, T, S, _, X;
    let P = { open: a.comboboxState.value === 0 }, { id: V, displayValue: q, onChange: w, ...$ } = e, L = { "aria-controls": (h = a.optionsRef.value) == null ? void 0 : h.id, "aria-expanded": a.comboboxState.value === 0, "aria-activedescendant": a.activeOptionIndex.value === null ? void 0 : a.virtual.value ? (k = a.options.value.find((K) => !a.virtual.value.disabled(K.dataRef.value) && a.compare(K.dataRef.value, a.virtual.value.options[a.activeOptionIndex.value]))) == null ? void 0 : k.id : (b = a.options.value[a.activeOptionIndex.value]) == null ? void 0 : b.id, "aria-labelledby": (_ = (T = N(a.labelRef)) == null ? void 0 : T.id) != null ? _ : (S = N(a.buttonRef)) == null ? void 0 : S.id, "aria-autocomplete": "list", id: V, onCompositionstart: c, onCompositionend: m, onKeydown: p, onInput: v, onFocus: x, onBlur: g, role: "combobox", type: (X = t.type) != null ? X : "text", tabIndex: 0, ref: a.inputRef, defaultValue: y.value, disabled: a.disabled.value === !0 ? !0 : void 0 };
    return ge({ ourProps: L, theirProps: $, slot: P, attrs: t, slots: o, features: st.RenderStrategy | st.Static, name: "ComboboxInput" });
  };
} }), Lr = H({ name: "ComboboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, hold: { type: [Boolean], default: !1 } }, setup(e, { attrs: n, slots: t, expose: o }) {
  let r = un("ComboboxOptions"), a = `headlessui-combobox-options-${Me()}`;
  o({ el: r.optionsRef, $el: r.optionsRef }), Fe(() => {
    r.optionsPropsRef.value.static = e.static;
  }), Fe(() => {
    r.optionsPropsRef.value.hold = e.hold;
  });
  let l = Tn(), i = E(() => l !== null ? (l.value & _e.Open) === _e.Open : r.comboboxState.value === 0);
  Is({ container: E(() => N(r.optionsRef)), enabled: E(() => r.comboboxState.value === 0), accept(u) {
    return u.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : u.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(u) {
    u.setAttribute("role", "none");
  } });
  function s(u) {
    u.preventDefault();
  }
  return () => {
    var u, d, c;
    let m = { open: r.comboboxState.value === 0 }, f = { "aria-labelledby": (c = (u = N(r.labelRef)) == null ? void 0 : u.id) != null ? c : (d = N(r.buttonRef)) == null ? void 0 : d.id, id: a, ref: r.optionsRef, role: "listbox", "aria-multiselectable": r.mode.value === 1 ? !0 : void 0, onMousedown: s }, p = En(e, ["hold"]);
    return ge({ ourProps: f, theirProps: p, slot: m, attrs: n, slots: r.virtual.value && r.comboboxState.value === 0 ? { ...t, default: () => [ie(zs, {}, t.default)] } : t, features: st.RenderStrategy | st.Static, visible: i.value, name: "ComboboxOptions" });
  };
} }), zn = H({ name: "ComboboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: !1 }, order: { type: [Number], default: null } }, setup(e, { slots: n, attrs: t, expose: o }) {
  let r = un("ComboboxOption"), a = `headlessui-combobox-option-${Me()}`, l = C(null), i = E(() => {
    var y;
    return e.disabled || ((y = r.virtual.value) == null ? void 0 : y.disabled(e.value));
  });
  o({ el: l, $el: l });
  let s = E(() => {
    var y;
    return r.virtual.value ? r.activeOptionIndex.value === r.calculateIndex(e.value) : r.activeOptionIndex.value === null ? !1 : ((y = r.options.value[r.activeOptionIndex.value]) == null ? void 0 : y.id) === a;
  }), u = E(() => r.isSelected(e.value)), d = pe(tl, null), c = E(() => ({ disabled: e.disabled, value: e.value, domRef: l, order: E(() => e.order) }));
  se(() => r.registerOption(a, c)), we(() => r.unregisterOption(a, s.value)), Fe(() => {
    let y = N(l);
    y && (d == null || d.value.measureElement(y));
  }), Fe(() => {
    r.comboboxState.value === 0 && s.value && (r.virtual.value || r.activationTrigger.value !== 0 && He(() => {
      var y, h;
      return (h = (y = N(l)) == null ? void 0 : y.scrollIntoView) == null ? void 0 : h.call(y, { block: "nearest" });
    }));
  });
  function m(y) {
    y.preventDefault(), y.button === Xa.Left && (i.value || (r.selectOption(a), Wa() || requestAnimationFrame(() => {
      var h;
      return (h = N(r.inputRef)) == null ? void 0 : h.focus({ preventScroll: !0 });
    }), r.mode.value === 0 && r.closeCombobox()));
  }
  function f() {
    var y;
    if (e.disabled || (y = r.virtual.value) != null && y.disabled(e.value)) return r.goToOption(ze.Nothing);
    let h = r.calculateIndex(e.value);
    r.goToOption(ze.Specific, h);
  }
  let p = $s();
  function v(y) {
    p.update(y);
  }
  function g(y) {
    var h;
    if (!p.wasMoved(y) || e.disabled || (h = r.virtual.value) != null && h.disabled(e.value) || s.value) return;
    let k = r.calculateIndex(e.value);
    r.goToOption(ze.Specific, k, 0);
  }
  function x(y) {
    var h;
    p.wasMoved(y) && (e.disabled || (h = r.virtual.value) != null && h.disabled(e.value) || s.value && (r.optionsPropsRef.value.hold || r.goToOption(ze.Nothing)));
  }
  return () => {
    let { disabled: y } = e, h = { active: s.value, selected: u.value, disabled: y }, k = { id: a, ref: l, role: "option", tabIndex: y === !0 ? void 0 : -1, "aria-disabled": y === !0 ? !0 : void 0, "aria-selected": u.value, disabled: void 0, onMousedown: m, onFocus: f, onPointerenter: v, onMouseenter: v, onPointermove: g, onMousemove: g, onPointerleave: x, onMouseleave: x }, b = En(e, ["order", "value"]);
    return ge({ ourProps: k, theirProps: b, slot: h, attrs: t, slots: n, name: "ComboboxOption" });
  };
} });
function Br(e, n, t, o) {
  Gn.isServer || Fe((r) => {
    e = e ?? window, e.addEventListener(n, t, o), r(() => e.removeEventListener(n, t, o));
  });
}
var rt = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(rt || {});
function Nr() {
  let e = C(0), n = C(!0);
  return Ga(n, "keydown", (t) => {
    t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
  }), e;
}
function nl(e) {
  if (!e) return /* @__PURE__ */ new Set();
  if (typeof e == "function") return new Set(e());
  let n = /* @__PURE__ */ new Set();
  for (let t of e.value) {
    let o = N(t);
    o instanceof HTMLElement && n.add(o);
  }
  return n;
}
var ol = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(ol || {});
let Pn = Object.assign(H({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: [Object, Function], default: C(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: n, slots: t, expose: o }) {
  let r = C(null);
  o({ el: r, $el: r });
  let a = E(() => dt(r)), l = C(!1);
  se(() => l.value = !0), we(() => l.value = !1), Ws({ ownerDocument: a }, E(() => l.value && !!(e.features & 16)));
  let i = Gs({ ownerDocument: a, container: r, initialFocus: E(() => e.initialFocus) }, E(() => l.value && !!(e.features & 2)));
  Us({ ownerDocument: a, container: r, containers: e.containers, previousActiveElement: i }, E(() => l.value && !!(e.features & 8)));
  let s = Nr();
  function u(f) {
    let p = N(r);
    p && ((v) => v())(() => {
      $e(s.value, { [rt.Forwards]: () => {
        mt(p, qe.First, { skipElements: [f.relatedTarget] });
      }, [rt.Backwards]: () => {
        mt(p, qe.Last, { skipElements: [f.relatedTarget] });
      } });
    });
  }
  let d = C(!1);
  function c(f) {
    f.key === "Tab" && (d.value = !0, requestAnimationFrame(() => {
      d.value = !1;
    }));
  }
  function m(f) {
    if (!l.value) return;
    let p = nl(e.containers);
    N(r) instanceof HTMLElement && p.add(N(r));
    let v = f.relatedTarget;
    v instanceof HTMLElement && v.dataset.headlessuiFocusGuard !== "true" && (rl(p, v) || (d.value ? mt(N(r), $e(s.value, { [rt.Forwards]: () => qe.Next, [rt.Backwards]: () => qe.Previous }) | qe.WrapAround, { relativeTo: f.target }) : f.target instanceof HTMLElement && an(f.target)));
  }
  return () => {
    let f = {}, p = { ref: r, onKeydown: c, onFocusout: m }, { features: v, initialFocus: g, containers: x, ...y } = e;
    return ie(xe, [!!(v & 4) && ie(Rt, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: u, features: Tt.Focusable }), ge({ ourProps: p, theirProps: { ...n, ...y }, slot: f, attrs: n, slots: t, name: "FocusTrap" }), !!(v & 4) && ie(Rt, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: u, features: Tt.Focusable })]);
  };
} }), { features: ol });
function Hs(e) {
  let n = C($t.slice());
  return le([e], ([t], [o]) => {
    o === !0 && t === !1 ? Dr(() => {
      n.value.splice(0);
    }) : o === !1 && t === !0 && (n.value = $t.slice());
  }, { flush: "post" }), () => {
    var t;
    return (t = n.value.find((o) => o != null && o.isConnected)) != null ? t : null;
  };
}
function Ws({ ownerDocument: e }, n) {
  let t = Hs(n);
  se(() => {
    Fe(() => {
      var o, r;
      n.value || ((o = e.value) == null ? void 0 : o.activeElement) === ((r = e.value) == null ? void 0 : r.body) && an(t());
    }, { flush: "post" });
  }), we(() => {
    n.value && an(t());
  });
}
function Gs({ ownerDocument: e, container: n, initialFocus: t }, o) {
  let r = C(null), a = C(!1);
  return se(() => a.value = !0), we(() => a.value = !1), se(() => {
    le([n, t, o], (l, i) => {
      if (l.every((u, d) => (i == null ? void 0 : i[d]) === u) || !o.value) return;
      let s = N(n);
      s && Dr(() => {
        var u, d;
        if (!a.value) return;
        let c = N(t), m = (u = e.value) == null ? void 0 : u.activeElement;
        if (c) {
          if (c === m) {
            r.value = m;
            return;
          }
        } else if (s.contains(m)) {
          r.value = m;
          return;
        }
        c ? an(c) : mt(s, qe.First | qe.NoScroll) === jn.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), r.value = (d = e.value) == null ? void 0 : d.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), r;
}
function Us({ ownerDocument: e, container: n, containers: t, previousActiveElement: o }, r) {
  var a;
  Br((a = e.value) == null ? void 0 : a.defaultView, "focus", (l) => {
    if (!r.value) return;
    let i = nl(t);
    N(n) instanceof HTMLElement && i.add(N(n));
    let s = o.value;
    if (!s) return;
    let u = l.target;
    u && u instanceof HTMLElement ? rl(i, u) ? (o.value = u, an(u)) : (l.preventDefault(), l.stopPropagation(), an(s)) : an(o.value);
  }, !0);
}
function rl(e, n) {
  for (let t of e) if (t.contains(n)) return !0;
  return !1;
}
function qs(e) {
  let n = Co(e.getSnapshot());
  return we(e.subscribe(() => {
    n.value = e.getSnapshot();
  })), n;
}
function Ks(e, n) {
  let t = e(), o = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return t;
  }, subscribe(r) {
    return o.add(r), () => o.delete(r);
  }, dispatch(r, ...a) {
    let l = n[r].call(t, ...a);
    l && (t = l, o.forEach((i) => i()));
  } };
}
function Ys() {
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
function Xs() {
  return Ha() ? { before({ doc: e, d: n, meta: t }) {
    function o(r) {
      return t.containers.flatMap((a) => a()).some((a) => a.contains(r));
    }
    n.microTask(() => {
      var r;
      if (window.getComputedStyle(e.documentElement).scrollBehavior !== "auto") {
        let i = Kt();
        i.style(e.documentElement, "scrollBehavior", "auto"), n.add(() => n.microTask(() => i.dispose()));
      }
      let a = (r = window.scrollY) != null ? r : window.pageYOffset, l = null;
      n.addEventListener(e, "click", (i) => {
        if (i.target instanceof HTMLElement) try {
          let s = i.target.closest("a");
          if (!s) return;
          let { hash: u } = new URL(s.href), d = e.querySelector(u);
          d && !o(d) && (l = d);
        } catch {
        }
      }, !0), n.addEventListener(e, "touchstart", (i) => {
        if (i.target instanceof HTMLElement) if (o(i.target)) {
          let s = i.target;
          for (; s.parentElement && o(s.parentElement); ) s = s.parentElement;
          n.style(s, "overscrollBehavior", "contain");
        } else n.style(i.target, "touchAction", "none");
      }), n.addEventListener(e, "touchmove", (i) => {
        if (i.target instanceof HTMLElement) {
          if (i.target.tagName === "INPUT") return;
          if (o(i.target)) {
            let s = i.target;
            for (; s.parentElement && s.dataset.headlessuiPortal !== "" && !(s.scrollHeight > s.clientHeight || s.scrollWidth > s.clientWidth); ) s = s.parentElement;
            s.dataset.headlessuiPortal === "" && i.preventDefault();
          } else i.preventDefault();
        }
      }, { passive: !1 }), n.add(() => {
        var i;
        let s = (i = window.scrollY) != null ? i : window.pageYOffset;
        a !== s && window.scrollTo(0, a), l && l.isConnected && (l.scrollIntoView({ block: "nearest" }), l = null);
      });
    });
  } } : {};
}
function Js() {
  return { before({ doc: e, d: n }) {
    n.style(e.documentElement, "overflow", "hidden");
  } };
}
function Qs(e) {
  let n = {};
  for (let t of e) Object.assign(n, t(n));
  return n;
}
let nn = Ks(() => /* @__PURE__ */ new Map(), { PUSH(e, n) {
  var t;
  let o = (t = this.get(e)) != null ? t : { doc: e, count: 0, d: Kt(), meta: /* @__PURE__ */ new Set() };
  return o.count++, o.meta.add(n), this.set(e, o), this;
}, POP(e, n) {
  let t = this.get(e);
  return t && (t.count--, t.meta.delete(n)), this;
}, SCROLL_PREVENT({ doc: e, d: n, meta: t }) {
  let o = { doc: e, d: n, meta: Qs(t) }, r = [Xs(), Ys(), Js()];
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
function Zs(e, n, t) {
  let o = qs(nn), r = E(() => {
    let a = e.value ? o.value.get(e.value) : void 0;
    return a ? a.count > 0 : !1;
  });
  return le([e, n], ([a, l], [i], s) => {
    if (!a || !l) return;
    nn.dispatch("PUSH", a, t);
    let u = !1;
    s(() => {
      u || (nn.dispatch("POP", i ?? a, t), u = !0);
    });
  }, { immediate: !0 }), r;
}
let zo = /* @__PURE__ */ new Map(), $n = /* @__PURE__ */ new Map();
function ua(e, n = C(!0)) {
  Fe((t) => {
    var o;
    if (!n.value) return;
    let r = N(e);
    if (!r) return;
    t(function() {
      var l;
      if (!r) return;
      let i = (l = $n.get(r)) != null ? l : 1;
      if (i === 1 ? $n.delete(r) : $n.set(r, i - 1), i !== 1) return;
      let s = zo.get(r);
      s && (s["aria-hidden"] === null ? r.removeAttribute("aria-hidden") : r.setAttribute("aria-hidden", s["aria-hidden"]), r.inert = s.inert, zo.delete(r));
    });
    let a = (o = $n.get(r)) != null ? o : 0;
    $n.set(r, a + 1), a === 0 && (zo.set(r, { "aria-hidden": r.getAttribute("aria-hidden"), inert: r.inert }), r.setAttribute("aria-hidden", "true"), r.inert = !0);
  });
}
function al({ defaultContainers: e = [], portals: n, mainTreeNodeRef: t } = {}) {
  let o = C(null), r = dt(o);
  function a() {
    var l, i, s;
    let u = [];
    for (let d of e) d !== null && (d instanceof HTMLElement ? u.push(d) : "value" in d && d.value instanceof HTMLElement && u.push(d.value));
    if (n != null && n.value) for (let d of n.value) u.push(d);
    for (let d of (l = r == null ? void 0 : r.querySelectorAll("html > *, body > *")) != null ? l : []) d !== document.body && d !== document.head && d instanceof HTMLElement && d.id !== "headlessui-portal-root" && (d.contains(N(o)) || d.contains((s = (i = N(o)) == null ? void 0 : i.getRootNode()) == null ? void 0 : s.host) || u.some((c) => d.contains(c)) || u.push(d));
    return u;
  }
  return { resolveContainers: a, contains(l) {
    return a().some((i) => i.contains(l));
  }, mainTreeNodeRef: o, MainTreeNode() {
    return t != null ? null : ie(Rt, { features: Tt.Hidden, ref: o });
  } };
}
function eu() {
  let e = C(null);
  return { mainTreeNodeRef: e, MainTreeNode() {
    return ie(Rt, { features: Tt.Hidden, ref: e });
  } };
}
let ll = Symbol("ForcePortalRootContext");
function tu() {
  return pe(ll, !1);
}
let ar = H({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: n, attrs: t }) {
  return De(ll, e.force), () => {
    let { force: o, ...r } = e;
    return ge({ theirProps: r, ourProps: {}, slot: {}, slots: n, attrs: t, name: "ForcePortalRoot" });
  };
} }), il = Symbol("StackContext");
var lr = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(lr || {});
function nu() {
  return pe(il, () => {
  });
}
function ou({ type: e, enabled: n, element: t, onUpdate: o }) {
  let r = nu();
  function a(...l) {
    o == null || o(...l), r(...l);
  }
  se(() => {
    le(n, (l, i) => {
      l ? a(0, e, t) : i === !0 && a(1, e, t);
    }, { immediate: !0, flush: "sync" });
  }), we(() => {
    n.value && a(1, e, t);
  }), De(il, a);
}
let sl = Symbol("DescriptionContext");
function ru() {
  let e = pe(sl, null);
  if (e === null) throw new Error("Missing parent");
  return e;
}
function ul({ slot: e = C({}), name: n = "Description", props: t = {} } = {}) {
  let o = C([]);
  function r(a) {
    return o.value.push(a), () => {
      let l = o.value.indexOf(a);
      l !== -1 && o.value.splice(l, 1);
    };
  }
  return De(sl, { register: r, slot: e, name: n, props: t }), E(() => o.value.length > 0 ? o.value.join(" ") : void 0);
}
H({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: () => `headlessui-description-${Me()}` } }, setup(e, { attrs: n, slots: t }) {
  let o = ru();
  return se(() => we(o.register(e.id))), () => {
    let { name: r = "Description", slot: a = C({}), props: l = {} } = o, { id: i, ...s } = e, u = { ...Object.entries(l).reduce((d, [c, m]) => Object.assign(d, { [c]: F(m) }), {}), id: i };
    return ge({ ourProps: u, theirProps: s, slot: a.value, attrs: n, slots: t, name: r });
  };
} });
function au(e) {
  let n = dt(e);
  if (!n) {
    if (e === null) return null;
    throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`);
  }
  let t = n.getElementById("headlessui-portal-root");
  if (t) return t;
  let o = n.createElement("div");
  return o.setAttribute("id", "headlessui-portal-root"), n.body.appendChild(o);
}
let dl = H({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: n, attrs: t }) {
  let o = C(null), r = E(() => dt(o)), a = tu(), l = pe(fl, null), i = C(a === !0 || l == null ? au(o.value) : l.resolveTarget()), s = C(!1);
  se(() => {
    s.value = !0;
  }), Fe(() => {
    a || l != null && (i.value = l.resolveTarget());
  });
  let u = pe(ir, null), d = !1, c = Oa();
  return le(o, () => {
    if (d || !u) return;
    let m = N(o);
    m && (we(u.register(m), c), d = !0);
  }), we(() => {
    var m, f;
    let p = (m = r.value) == null ? void 0 : m.getElementById("headlessui-portal-root");
    p && i.value === p && i.value.children.length <= 0 && ((f = i.value.parentElement) == null || f.removeChild(i.value));
  }), () => {
    if (!s.value || i.value === null) return null;
    let m = { ref: o, "data-headlessui-portal": "" };
    return ie(Oo, { to: i.value }, ge({ ourProps: m, theirProps: e, slot: {}, attrs: t, slots: n, name: "Portal" }));
  };
} }), ir = Symbol("PortalParentContext");
function cl() {
  let e = pe(ir, null), n = C([]);
  function t(a) {
    return n.value.push(a), e && e.register(a), () => o(a);
  }
  function o(a) {
    let l = n.value.indexOf(a);
    l !== -1 && n.value.splice(l, 1), e && e.unregister(a);
  }
  let r = { register: t, unregister: o, portals: n };
  return [n, H({ name: "PortalWrapper", setup(a, { slots: l }) {
    return De(ir, r), () => {
      var i;
      return (i = l.default) == null ? void 0 : i.call(l);
    };
  } })];
}
let fl = Symbol("PortalGroupContext"), lu = H({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: n, slots: t }) {
  let o = So({ resolveTarget() {
    return e.target;
  } });
  return De(fl, o), () => {
    let { target: r, ...a } = e;
    return ge({ theirProps: a, ourProps: {}, slot: {}, attrs: n, slots: t, name: "PortalGroup" });
  };
} });
var iu = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(iu || {});
let sr = Symbol("DialogContext");
function Un(e) {
  let n = pe(sr, null);
  if (n === null) {
    let t = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t, Un), t;
  }
  return n;
}
let Zn = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", su = H({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: Zn }, initialFocus: { type: Object, default: null }, id: { type: String, default: () => `headlessui-dialog-${Me()}` }, role: { type: String, default: "dialog" } }, emits: { close: (e) => !0 }, setup(e, { emit: n, attrs: t, slots: o, expose: r }) {
  var a;
  let l = C(!1);
  se(() => {
    l.value = !0;
  });
  let i = !1, s = E(() => e.role === "dialog" || e.role === "alertdialog" ? e.role : (i || (i = !0, console.warn(`Invalid role [${s}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog")), u = C(0), d = Tn(), c = E(() => e.open === Zn && d !== null ? (d.value & _e.Open) === _e.Open : e.open), m = C(null), f = E(() => dt(m));
  if (r({ el: m, $el: m }), !(e.open !== Zn || d !== null)) throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof c.value != "boolean") throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${c.value === Zn ? void 0 : e.open}`);
  let p = E(() => l.value && c.value ? 0 : 1), v = E(() => p.value === 0), g = E(() => u.value > 1), x = pe(sr, null) !== null, [y, h] = cl(), { resolveContainers: k, mainTreeNodeRef: b, MainTreeNode: T } = al({ portals: y, defaultContainers: [E(() => {
    var oe;
    return (oe = L.panelRef.value) != null ? oe : m.value;
  })] }), S = E(() => g.value ? "parent" : "leaf"), _ = E(() => d !== null ? (d.value & _e.Closing) === _e.Closing : !1), X = E(() => x || _.value ? !1 : v.value), P = E(() => {
    var oe, Se, We;
    return (We = Array.from((Se = (oe = f.value) == null ? void 0 : oe.querySelectorAll("body > *")) != null ? Se : []).find((Be) => Be.id === "headlessui-portal-root" ? !1 : Be.contains(N(b)) && Be instanceof HTMLElement)) != null ? We : null;
  });
  ua(P, X);
  let V = E(() => g.value ? !0 : v.value), q = E(() => {
    var oe, Se, We;
    return (We = Array.from((Se = (oe = f.value) == null ? void 0 : oe.querySelectorAll("[data-headlessui-portal]")) != null ? Se : []).find((Be) => Be.contains(N(b)) && Be instanceof HTMLElement)) != null ? We : null;
  });
  ua(q, V), ou({ type: "Dialog", enabled: E(() => p.value === 0), element: m, onUpdate: (oe, Se) => {
    if (Se === "Dialog") return $e(oe, { [lr.Add]: () => u.value += 1, [lr.Remove]: () => u.value -= 1 });
  } });
  let w = ul({ name: "DialogDescription", slot: E(() => ({ open: c.value })) }), $ = C(null), L = { titleId: $, panelRef: C(null), dialogState: p, setTitleId(oe) {
    $.value !== oe && ($.value = oe);
  }, close() {
    n("close", !1);
  } };
  De(sr, L);
  let K = E(() => !(!v.value || g.value));
  $r(k, (oe, Se) => {
    oe.preventDefault(), L.close(), He(() => Se == null ? void 0 : Se.focus());
  }, K);
  let ne = E(() => !(g.value || p.value !== 0));
  Br((a = f.value) == null ? void 0 : a.defaultView, "keydown", (oe) => {
    ne.value && (oe.defaultPrevented || oe.key === Te.Escape && (oe.preventDefault(), oe.stopPropagation(), L.close()));
  });
  let ce = E(() => !(_.value || p.value !== 0 || x));
  return Zs(f, ce, (oe) => {
    var Se;
    return { containers: [...(Se = oe.containers) != null ? Se : [], k] };
  }), Fe((oe) => {
    if (p.value !== 0) return;
    let Se = N(m);
    if (!Se) return;
    let We = new ResizeObserver((Be) => {
      for (let Xt of Be) {
        let wt = Xt.target.getBoundingClientRect();
        wt.x === 0 && wt.y === 0 && wt.width === 0 && wt.height === 0 && L.close();
      }
    });
    We.observe(Se), oe(() => We.disconnect());
  }), () => {
    let { id: oe, open: Se, initialFocus: We, ...Be } = e, Xt = { ...t, ref: m, id: oe, role: s.value, "aria-modal": p.value === 0 ? !0 : void 0, "aria-labelledby": $.value, "aria-describedby": w.value }, wt = { open: p.value === 0 };
    return ie(ar, { force: !0 }, () => [ie(dl, () => ie(lu, { target: m.value }, () => ie(ar, { force: !1 }, () => ie(Pn, { initialFocus: We, containers: k, features: v.value ? $e(S.value, { parent: Pn.features.RestoreFocus, leaf: Pn.features.All & ~Pn.features.FocusLock }) : Pn.features.None }, () => ie(h, {}, () => ge({ ourProps: Xt, theirProps: { ...Be, ...t }, slot: wt, attrs: t, slots: o, visible: p.value === 0, features: st.RenderStrategy | st.Static, name: "Dialog" })))))), ie(T)]);
  };
} });
H({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-overlay-${Me()}` } }, setup(e, { attrs: n, slots: t }) {
  let o = Un("DialogOverlay");
  function r(a) {
    a.target === a.currentTarget && (a.preventDefault(), a.stopPropagation(), o.close());
  }
  return () => {
    let { id: a, ...l } = e;
    return ge({ ourProps: { id: a, "aria-hidden": !0, onClick: r }, theirProps: l, slot: { open: o.dialogState.value === 0 }, attrs: n, slots: t, name: "DialogOverlay" });
  };
} });
H({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-backdrop-${Me()}` } }, inheritAttrs: !1, setup(e, { attrs: n, slots: t, expose: o }) {
  let r = Un("DialogBackdrop"), a = C(null);
  return o({ el: a, $el: a }), se(() => {
    if (r.panelRef.value === null) throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { id: l, ...i } = e, s = { id: l, ref: a, "aria-hidden": !0 };
    return ie(ar, { force: !0 }, () => ie(dl, () => ge({ ourProps: s, theirProps: { ...n, ...i }, slot: { open: r.dialogState.value === 0 }, attrs: n, slots: t, name: "DialogBackdrop" })));
  };
} });
let uu = H({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-panel-${Me()}` } }, setup(e, { attrs: n, slots: t, expose: o }) {
  let r = Un("DialogPanel");
  o({ el: r.panelRef, $el: r.panelRef });
  function a(l) {
    l.stopPropagation();
  }
  return () => {
    let { id: l, ...i } = e, s = { id: l, ref: r.panelRef, onClick: a };
    return ge({ ourProps: s, theirProps: i, slot: { open: r.dialogState.value === 0 }, attrs: n, slots: t, name: "DialogPanel" });
  };
} }), du = H({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: () => `headlessui-dialog-title-${Me()}` } }, setup(e, { attrs: n, slots: t }) {
  let o = Un("DialogTitle");
  return se(() => {
    o.setTitleId(e.id), we(() => o.setTitleId(null));
  }), () => {
    let { id: r, ...a } = e;
    return ge({ ourProps: { id: r }, theirProps: a, slot: { open: o.dialogState.value === 0 }, attrs: n, slots: t, name: "DialogTitle" });
  };
} });
var cu = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(cu || {});
let pl = Symbol("PopoverContext");
function Ao(e) {
  let n = pe(pl, null);
  if (n === null) {
    let t = new Error(`<${e} /> is missing a parent <${gl.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t, Ao), t;
  }
  return n;
}
let ml = Symbol("PopoverGroupContext");
function vl() {
  return pe(ml, null);
}
let hl = Symbol("PopoverPanelContext");
function fu() {
  return pe(hl, null);
}
let gl = H({ name: "Popover", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: n, attrs: t, expose: o }) {
  var r;
  let a = C(null);
  o({ el: a, $el: a });
  let l = C(1), i = C(null), s = C(null), u = C(null), d = C(null), c = E(() => dt(a)), m = E(() => {
    var b, T;
    if (!N(i) || !N(d)) return !1;
    for (let w of document.querySelectorAll("body > *")) if (Number(w == null ? void 0 : w.contains(N(i))) ^ Number(w == null ? void 0 : w.contains(N(d)))) return !0;
    let S = Io(), _ = S.indexOf(N(i)), X = (_ + S.length - 1) % S.length, P = (_ + 1) % S.length, V = S[X], q = S[P];
    return !((b = N(d)) != null && b.contains(V)) && !((T = N(d)) != null && T.contains(q));
  }), f = { popoverState: l, buttonId: C(null), panelId: C(null), panel: d, button: i, isPortalled: m, beforePanelSentinel: s, afterPanelSentinel: u, togglePopover() {
    l.value = $e(l.value, { 0: 1, 1: 0 });
  }, closePopover() {
    l.value !== 1 && (l.value = 1);
  }, close(b) {
    f.closePopover();
    let T = b ? b instanceof HTMLElement ? b : b.value instanceof HTMLElement ? N(b) : N(f.button) : N(f.button);
    T == null || T.focus();
  } };
  De(pl, f), Ar(E(() => $e(l.value, { 0: _e.Open, 1: _e.Closed })));
  let p = { buttonId: f.buttonId, panelId: f.panelId, close() {
    f.closePopover();
  } }, v = vl(), g = v == null ? void 0 : v.registerPopover, [x, y] = cl(), h = al({ mainTreeNodeRef: v == null ? void 0 : v.mainTreeNodeRef, portals: x, defaultContainers: [i, d] });
  function k() {
    var b, T, S, _;
    return (_ = v == null ? void 0 : v.isFocusWithinPopoverGroup()) != null ? _ : ((b = c.value) == null ? void 0 : b.activeElement) && (((T = N(i)) == null ? void 0 : T.contains(c.value.activeElement)) || ((S = N(d)) == null ? void 0 : S.contains(c.value.activeElement)));
  }
  return Fe(() => g == null ? void 0 : g(p)), Br((r = c.value) == null ? void 0 : r.defaultView, "focus", (b) => {
    var T, S;
    b.target !== window && b.target instanceof HTMLElement && l.value === 0 && (k() || i && d && (h.contains(b.target) || (T = N(f.beforePanelSentinel)) != null && T.contains(b.target) || (S = N(f.afterPanelSentinel)) != null && S.contains(b.target) || f.closePopover()));
  }, !0), $r(h.resolveContainers, (b, T) => {
    var S;
    f.closePopover(), ja(T, Pr.Loose) || (b.preventDefault(), (S = N(i)) == null || S.focus());
  }, E(() => l.value === 0)), () => {
    let b = { open: l.value === 0, close: f.close };
    return ie(xe, [ie(y, {}, () => ge({ theirProps: { ...e, ...t }, ourProps: { ref: a }, slot: b, slots: n, attrs: t, name: "Popover" })), ie(h.MainTreeNode)]);
  };
} }), pu = H({ name: "PopoverButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: !1 }, id: { type: String, default: () => `headlessui-popover-button-${Me()}` } }, inheritAttrs: !1, setup(e, { attrs: n, slots: t, expose: o }) {
  let r = Ao("PopoverButton"), a = E(() => dt(r.button));
  o({ el: r.button, $el: r.button }), se(() => {
    r.buttonId.value = e.id;
  }), we(() => {
    r.buttonId.value = null;
  });
  let l = vl(), i = l == null ? void 0 : l.closeOthers, s = fu(), u = E(() => s === null ? !1 : s.value === r.panelId.value), d = C(null), c = `headlessui-focus-sentinel-${Me()}`;
  u.value || Fe(() => {
    r.button.value = N(d);
  });
  let m = Ir(E(() => ({ as: e.as, type: n.type })), d);
  function f(h) {
    var k, b, T, S, _;
    if (u.value) {
      if (r.popoverState.value === 1) return;
      switch (h.key) {
        case Te.Space:
        case Te.Enter:
          h.preventDefault(), (b = (k = h.target).click) == null || b.call(k), r.closePopover(), (T = N(r.button)) == null || T.focus();
          break;
      }
    } else switch (h.key) {
      case Te.Space:
      case Te.Enter:
        h.preventDefault(), h.stopPropagation(), r.popoverState.value === 1 && (i == null || i(r.buttonId.value)), r.togglePopover();
        break;
      case Te.Escape:
        if (r.popoverState.value !== 0) return i == null ? void 0 : i(r.buttonId.value);
        if (!N(r.button) || (S = a.value) != null && S.activeElement && !((_ = N(r.button)) != null && _.contains(a.value.activeElement))) return;
        h.preventDefault(), h.stopPropagation(), r.closePopover();
        break;
    }
  }
  function p(h) {
    u.value || h.key === Te.Space && h.preventDefault();
  }
  function v(h) {
    var k, b;
    e.disabled || (u.value ? (r.closePopover(), (k = N(r.button)) == null || k.focus()) : (h.preventDefault(), h.stopPropagation(), r.popoverState.value === 1 && (i == null || i(r.buttonId.value)), r.togglePopover(), (b = N(r.button)) == null || b.focus()));
  }
  function g(h) {
    h.preventDefault(), h.stopPropagation();
  }
  let x = Nr();
  function y() {
    let h = N(r.panel);
    if (!h) return;
    function k() {
      $e(x.value, { [rt.Forwards]: () => mt(h, qe.First), [rt.Backwards]: () => mt(h, qe.Last) }) === jn.Error && mt(Io().filter((b) => b.dataset.headlessuiFocusGuard !== "true"), $e(x.value, { [rt.Forwards]: qe.Next, [rt.Backwards]: qe.Previous }), { relativeTo: N(r.button) });
    }
    k();
  }
  return () => {
    let h = r.popoverState.value === 0, k = { open: h }, { id: b, ...T } = e, S = u.value ? { ref: d, type: m.value, onKeydown: f, onClick: v } : { ref: d, id: b, type: m.value, "aria-expanded": r.popoverState.value === 0, "aria-controls": N(r.panel) ? r.panelId.value : void 0, disabled: e.disabled ? !0 : void 0, onKeydown: f, onKeyup: p, onClick: v, onMousedown: g };
    return ie(xe, [ge({ ourProps: S, theirProps: { ...n, ...T }, slot: k, attrs: n, slots: t, name: "PopoverButton" }), h && !u.value && r.isPortalled.value && ie(Rt, { id: c, features: Tt.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: y })]);
  };
} });
H({ name: "PopoverOverlay", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 } }, setup(e, { attrs: n, slots: t }) {
  let o = Ao("PopoverOverlay"), r = `headlessui-popover-overlay-${Me()}`, a = Tn(), l = E(() => a !== null ? (a.value & _e.Open) === _e.Open : o.popoverState.value === 0);
  function i() {
    o.closePopover();
  }
  return () => {
    let s = { open: o.popoverState.value === 0 };
    return ge({ ourProps: { id: r, "aria-hidden": !0, onClick: i }, theirProps: e, slot: s, attrs: n, slots: t, features: st.RenderStrategy | st.Static, visible: l.value, name: "PopoverOverlay" });
  };
} });
let mu = H({ name: "PopoverPanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, focus: { type: Boolean, default: !1 }, id: { type: String, default: () => `headlessui-popover-panel-${Me()}` } }, inheritAttrs: !1, setup(e, { attrs: n, slots: t, expose: o }) {
  let { focus: r } = e, a = Ao("PopoverPanel"), l = E(() => dt(a.panel)), i = `headlessui-focus-sentinel-before-${Me()}`, s = `headlessui-focus-sentinel-after-${Me()}`;
  o({ el: a.panel, $el: a.panel }), se(() => {
    a.panelId.value = e.id;
  }), we(() => {
    a.panelId.value = null;
  }), De(hl, a.panelId), Fe(() => {
    var g, x;
    if (!r || a.popoverState.value !== 0 || !a.panel) return;
    let y = (g = l.value) == null ? void 0 : g.activeElement;
    (x = N(a.panel)) != null && x.contains(y) || mt(N(a.panel), qe.First);
  });
  let u = Tn(), d = E(() => u !== null ? (u.value & _e.Open) === _e.Open : a.popoverState.value === 0);
  function c(g) {
    var x, y;
    switch (g.key) {
      case Te.Escape:
        if (a.popoverState.value !== 0 || !N(a.panel) || l.value && !((x = N(a.panel)) != null && x.contains(l.value.activeElement))) return;
        g.preventDefault(), g.stopPropagation(), a.closePopover(), (y = N(a.button)) == null || y.focus();
        break;
    }
  }
  function m(g) {
    var x, y, h, k, b;
    let T = g.relatedTarget;
    T && N(a.panel) && ((x = N(a.panel)) != null && x.contains(T) || (a.closePopover(), ((h = (y = N(a.beforePanelSentinel)) == null ? void 0 : y.contains) != null && h.call(y, T) || (b = (k = N(a.afterPanelSentinel)) == null ? void 0 : k.contains) != null && b.call(k, T)) && T.focus({ preventScroll: !0 })));
  }
  let f = Nr();
  function p() {
    let g = N(a.panel);
    if (!g) return;
    function x() {
      $e(f.value, { [rt.Forwards]: () => {
        var y;
        mt(g, qe.First) === jn.Error && ((y = N(a.afterPanelSentinel)) == null || y.focus());
      }, [rt.Backwards]: () => {
        var y;
        (y = N(a.button)) == null || y.focus({ preventScroll: !0 });
      } });
    }
    x();
  }
  function v() {
    let g = N(a.panel);
    if (!g) return;
    function x() {
      $e(f.value, { [rt.Forwards]: () => {
        let y = N(a.button), h = N(a.panel);
        if (!y) return;
        let k = Io(), b = k.indexOf(y), T = k.slice(0, b + 1), S = [...k.slice(b + 1), ...T];
        for (let _ of S.slice()) if (_.dataset.headlessuiFocusGuard === "true" || h != null && h.contains(_)) {
          let X = S.indexOf(_);
          X !== -1 && S.splice(X, 1);
        }
        mt(S, qe.First, { sorted: !1 });
      }, [rt.Backwards]: () => {
        var y;
        mt(g, qe.Previous) === jn.Error && ((y = N(a.button)) == null || y.focus());
      } });
    }
    x();
  }
  return () => {
    let g = { open: a.popoverState.value === 0, close: a.close }, { id: x, focus: y, ...h } = e, k = { ref: a.panel, id: x, onKeydown: c, onFocusout: r && a.popoverState.value === 0 ? m : void 0, tabIndex: -1 };
    return ge({ ourProps: k, theirProps: { ...n, ...h }, attrs: n, slot: g, slots: { ...t, default: (...b) => {
      var T;
      return [ie(xe, [d.value && a.isPortalled.value && ie(Rt, { id: i, ref: a.beforePanelSentinel, features: Tt.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: p }), (T = t.default) == null ? void 0 : T.call(t, ...b), d.value && a.isPortalled.value && ie(Rt, { id: s, ref: a.afterPanelSentinel, features: Tt.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: v })])];
    } }, features: st.RenderStrategy | st.Static, visible: d.value, name: "PopoverPanel" });
  };
} });
H({ name: "PopoverGroup", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" } }, setup(e, { attrs: n, slots: t, expose: o }) {
  let r = C(null), a = Co([]), l = E(() => dt(r)), i = eu();
  o({ el: r, $el: r });
  function s(m) {
    let f = a.value.indexOf(m);
    f !== -1 && a.value.splice(f, 1);
  }
  function u(m) {
    return a.value.push(m), () => {
      s(m);
    };
  }
  function d() {
    var m;
    let f = l.value;
    if (!f) return !1;
    let p = f.activeElement;
    return (m = N(r)) != null && m.contains(p) ? !0 : a.value.some((v) => {
      var g, x;
      return ((g = f.getElementById(v.buttonId.value)) == null ? void 0 : g.contains(p)) || ((x = f.getElementById(v.panelId.value)) == null ? void 0 : x.contains(p));
    });
  }
  function c(m) {
    for (let f of a.value) f.buttonId.value !== m && f.close();
  }
  return De(ml, { registerPopover: u, unregisterPopover: s, isFocusWithinPopoverGroup: d, closeOthers: c, mainTreeNodeRef: i.mainTreeNodeRef }), () => ie(xe, [ge({ ourProps: { ref: r }, theirProps: { ...e, ...n }, slot: {}, attrs: n, slots: t, name: "PopoverGroup" }), ie(i.MainTreeNode)]);
} });
let bl = Symbol("LabelContext");
function yl() {
  let e = pe(bl, null);
  if (e === null) {
    let n = new Error("You used a <Label /> component, but it is not inside a parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(n, yl), n;
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
  return De(bl, { register: r, slot: e, name: n, props: t }), E(() => o.value.length > 0 ? o.value.join(" ") : void 0);
}
H({ name: "Label", props: { as: { type: [Object, String], default: "label" }, passive: { type: [Boolean], default: !1 }, id: { type: String, default: () => `headlessui-label-${Me()}` } }, setup(e, { slots: n, attrs: t }) {
  let o = yl();
  return se(() => we(o.register(e.id))), () => {
    let { name: r = "Label", slot: a = {}, props: l = {} } = o, { id: i, passive: s, ...u } = e, d = { ...Object.entries(l).reduce((c, [m, f]) => Object.assign(c, { [m]: F(f) }), {}), id: i };
    return s && (delete d.onClick, delete d.htmlFor, delete u.onClick), ge({ ourProps: d, theirProps: u, slot: a, attrs: t, slots: n, name: r });
  };
} });
let wl = Symbol("GroupContext");
H({ name: "SwitchGroup", props: { as: { type: [Object, String], default: "template" } }, setup(e, { slots: n, attrs: t }) {
  let o = C(null), r = vu({ name: "SwitchLabel", props: { htmlFor: E(() => {
    var l;
    return (l = o.value) == null ? void 0 : l.id;
  }), onClick(l) {
    o.value && (l.currentTarget.tagName === "LABEL" && l.preventDefault(), o.value.click(), o.value.focus({ preventScroll: !0 }));
  } } }), a = ul({ name: "SwitchDescription" });
  return De(wl, { switchRef: o, labelledby: r, describedby: a }), () => ge({ theirProps: e, ourProps: {}, slot: {}, slots: n, attrs: t, name: "SwitchGroup" });
} });
let hu = H({ name: "Switch", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "button" }, modelValue: { type: Boolean, default: void 0 }, defaultChecked: { type: Boolean, optional: !0 }, form: { type: String, optional: !0 }, name: { type: String, optional: !0 }, value: { type: String, optional: !0 }, id: { type: String, default: () => `headlessui-switch-${Me()}` }, disabled: { type: Boolean, default: !1 }, tabIndex: { type: Number, default: 0 } }, inheritAttrs: !1, setup(e, { emit: n, attrs: t, slots: o, expose: r }) {
  let a = pe(wl, null), [l, i] = Va(E(() => e.modelValue), (g) => n("update:modelValue", g), E(() => e.defaultChecked));
  function s() {
    i(!l.value);
  }
  let u = C(null), d = a === null ? u : a.switchRef, c = Ir(E(() => ({ as: e.as, type: t.type })), d);
  r({ el: d, $el: d });
  function m(g) {
    g.preventDefault(), s();
  }
  function f(g) {
    g.key === Te.Space ? (g.preventDefault(), s()) : g.key === Te.Enter && Ls(g.currentTarget);
  }
  function p(g) {
    g.preventDefault();
  }
  let v = E(() => {
    var g, x;
    return (x = (g = N(d)) == null ? void 0 : g.closest) == null ? void 0 : x.call(g, "form");
  });
  return se(() => {
    le([v], () => {
      if (!v.value || e.defaultChecked === void 0) return;
      function g() {
        i(e.defaultChecked);
      }
      return v.value.addEventListener("reset", g), () => {
        var x;
        (x = v.value) == null || x.removeEventListener("reset", g);
      };
    }, { immediate: !0 });
  }), () => {
    let { id: g, name: x, value: y, form: h, tabIndex: k, ...b } = e, T = { checked: l.value }, S = { id: g, ref: d, role: "switch", type: c.value, tabIndex: k === -1 ? 0 : k, "aria-checked": l.value, "aria-labelledby": a == null ? void 0 : a.labelledby.value, "aria-describedby": a == null ? void 0 : a.describedby.value, onClick: m, onKeyup: f, onKeypress: p };
    return ie(xe, [x != null && l.value != null ? ie(Rt, Ka({ features: Tt.Hidden, as: "input", type: "checkbox", hidden: !0, readOnly: !0, checked: l.value, form: h, disabled: b.disabled, name: x, value: y })) : null, ge({ ourProps: S, theirProps: { ...t, ...En(b, ["modelValue", "defaultChecked"]) }, slot: T, attrs: t, slots: o, name: "Switch" })]);
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
function eo(e, ...n) {
  e && n.length > 0 && e.classList.remove(...n);
}
var ur = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(ur || {});
function bu(e, n) {
  let t = Kt();
  if (!e) return t.dispose;
  let { transitionDuration: o, transitionDelay: r } = getComputedStyle(e), [a, l] = [o, r].map((i) => {
    let [s = 0] = i.split(",").filter(Boolean).map((u) => u.includes("ms") ? parseFloat(u) : parseFloat(u) * 1e3).sort((u, d) => d - u);
    return s;
  });
  return a !== 0 ? t.setTimeout(() => n("finished"), a + l) : n("finished"), t.add(() => n("cancelled")), t.dispose;
}
function da(e, n, t, o, r, a) {
  let l = Kt(), i = a !== void 0 ? gu(a) : () => {
  };
  return eo(e, ...r), Ho(e, ...n, ...t), l.nextFrame(() => {
    eo(e, ...t), Ho(e, ...o), l.add(bu(e, (s) => (eo(e, ...o, ...n), Ho(e, ...r), i(s))));
  }), l.add(() => eo(e, ...n, ...t, ...o, ...r)), l.add(() => i("cancelled")), l.dispose;
}
function Jt(e = "") {
  return e.split(/\s+/).filter((n) => n.length > 1);
}
let Vr = Symbol("TransitionContext");
var yu = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(yu || {});
function wu() {
  return pe(Vr, null) !== null;
}
function xu() {
  let e = pe(Vr, null);
  if (e === null) throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function ku() {
  let e = pe(jr, null);
  if (e === null) throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let jr = Symbol("NestingContext");
function Ro(e) {
  return "children" in e ? Ro(e.children) : e.value.filter(({ state: n }) => n === "visible").length > 0;
}
function xl(e) {
  let n = C([]), t = C(!1);
  se(() => t.value = !0), we(() => t.value = !1);
  function o(a, l = jt.Hidden) {
    let i = n.value.findIndex(({ id: s }) => s === a);
    i !== -1 && ($e(l, { [jt.Unmount]() {
      n.value.splice(i, 1);
    }, [jt.Hidden]() {
      n.value[i].state = "hidden";
    } }), !Ro(n) && t.value && (e == null || e()));
  }
  function r(a) {
    let l = n.value.find(({ id: i }) => i === a);
    return l ? l.state !== "visible" && (l.state = "visible") : n.value.push({ id: a, state: "visible" }), () => o(a, jt.Unmount);
  }
  return { children: n, register: r, unregister: o };
}
let kl = st.RenderStrategy, dr = H({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: n, attrs: t, slots: o, expose: r }) {
  let a = C(0);
  function l() {
    a.value |= _e.Opening, n("beforeEnter");
  }
  function i() {
    a.value &= ~_e.Opening, n("afterEnter");
  }
  function s() {
    a.value |= _e.Closing, n("beforeLeave");
  }
  function u() {
    a.value &= ~_e.Closing, n("afterLeave");
  }
  if (!wu() && Rs()) return () => ie(Cl, { ...e, onBeforeEnter: l, onAfterEnter: i, onBeforeLeave: s, onAfterLeave: u }, o);
  let d = C(null), c = E(() => e.unmount ? jt.Unmount : jt.Hidden);
  r({ el: d, $el: d });
  let { show: m, appear: f } = xu(), { register: p, unregister: v } = ku(), g = C(m.value ? "visible" : "hidden"), x = { value: !0 }, y = Me(), h = { value: !1 }, k = xl(() => {
    !h.value && g.value !== "hidden" && (g.value = "hidden", v(y), u());
  });
  se(() => {
    let w = p(y);
    we(w);
  }), Fe(() => {
    if (c.value === jt.Hidden && y) {
      if (m.value && g.value !== "visible") {
        g.value = "visible";
        return;
      }
      $e(g.value, { hidden: () => v(y), visible: () => p(y) });
    }
  });
  let b = Jt(e.enter), T = Jt(e.enterFrom), S = Jt(e.enterTo), _ = Jt(e.entered), X = Jt(e.leave), P = Jt(e.leaveFrom), V = Jt(e.leaveTo);
  se(() => {
    Fe(() => {
      if (g.value === "visible") {
        let w = N(d);
        if (w instanceof Comment && w.data === "") throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function q(w) {
    let $ = x.value && !f.value, L = N(d);
    !L || !(L instanceof HTMLElement) || $ || (h.value = !0, m.value && l(), m.value || s(), w(m.value ? da(L, b, T, S, _, (K) => {
      h.value = !1, K === ur.Finished && i();
    }) : da(L, X, P, V, _, (K) => {
      h.value = !1, K === ur.Finished && (Ro(k) || (g.value = "hidden", v(y), u()));
    })));
  }
  return se(() => {
    le([m], (w, $, L) => {
      q(L), x.value = !1;
    }, { immediate: !0 });
  }), De(jr, k), Ar(E(() => $e(g.value, { visible: _e.Open, hidden: _e.Closed }) | a.value)), () => {
    let { appear: w, show: $, enter: L, enterFrom: K, enterTo: ne, entered: ce, leave: oe, leaveFrom: Se, leaveTo: We, ...Be } = e, Xt = { ref: d }, wt = { ...Be, ...f.value && m.value && Gn.isServer ? { class: z([t.class, Be.class, ...b, ...T]) } : {} };
    return ge({ theirProps: wt, ourProps: Xt, slot: {}, slots: o, attrs: t, features: kl, visible: g.value === "visible", name: "TransitionChild" });
  };
} }), Cu = dr, Cl = H({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: n, attrs: t, slots: o }) {
  let r = Tn(), a = E(() => e.show === null && r !== null ? (r.value & _e.Open) === _e.Open : e.show);
  Fe(() => {
    if (![!0, !1].includes(a.value)) throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let l = C(a.value ? "visible" : "hidden"), i = xl(() => {
    l.value = "hidden";
  }), s = C(!0), u = { show: a, appear: E(() => e.appear || !s.value) };
  return se(() => {
    Fe(() => {
      s.value = !1, a.value ? l.value = "visible" : Ro(i) || (l.value = "hidden");
    });
  }), De(jr, i), De(Vr, u), () => {
    let d = En(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), c = { unmount: e.unmount };
    return ge({ ourProps: { ...c, as: "template" }, theirProps: {}, slot: {}, slots: { ...o, default: () => [ie(Cu, { onBeforeEnter: () => n("beforeEnter"), onAfterEnter: () => n("afterEnter"), onBeforeLeave: () => n("beforeLeave"), onAfterLeave: () => n("afterLeave"), ...t, ...c, ...d }, o.default)] }, attrs: {}, features: kl, visible: l.value === "visible", name: "Transition" });
  };
} });
const Su = { class: "relative" }, Ou = { class: "flex items-start flex-wrap gap-1 p-1" }, Eu = ["onClick"], Tu = { class: "sr-only" }, _u = { key: 0 }, Du = { key: 1 }, Pu = { key: 1 }, $u = { class: "border-t border-ring px-2 first:border-t-0 py-2 first:pt-0 last:pb-0" }, Iu = { class: "flex items-center text-base font-medium" }, Au = { key: 1 }, Ru = { class: "-mx-2.5" }, Mu = { key: 1 }, Fu = { key: 1 }, Wo = /* @__PURE__ */ H({
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
    const o = t, r = e, a = C(), l = C(""), i = C(), s = C(!1), u = E(() => l.value ? r.items.filter(
      (p) => r.displayProperty(p).toLowerCase().includes(l.value.toLowerCase())
    ) : r.items), { floatingStyles: d } = On(i, a, {
      strategy: "fixed",
      transform: !1,
      middleware: [
        Sn({
          padding: 10,
          limiter: _r({
            offset: 10
          })
        }),
        $o({
          allowedPlacements: ["top-start", "bottom-start"]
        }),
        Cn(10),
        Tr({
          apply({ availableHeight: p, elements: v }) {
            const g = v.reference.getBoundingClientRect().width;
            Object.assign(v.floating.style, {
              minWidth: `${g}px`,
              maxHeight: `${p - 20}px`
            });
          }
        })
      ],
      whileElementsMounted: Po
    }), c = (p, v) => p.reduce(
      (g, x) => {
        var y;
        return (g[y = v(x)] || (g[y] = [])).push(x), g;
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
      open: s
    }), (p, v) => (O(), M("div", {
      class: z(F(me)("relative rounded-lg"))
    }, [
      W(F(Rr), {
        "model-value": p.modelValue,
        multiple: p.multiple,
        nullable: p.nullable,
        "onUpdate:modelValue": v[3] || (v[3] = (g) => p.$emit("update:modelValue", g))
      }, {
        default: U(() => {
          var g, x;
          return [
            I("div", Su, [
              I("div", {
                ref_key: "reference",
                ref: i,
                class: z(
                  F(me)(
                    "border border-ring rounded-md hover:bg-accent/50 shadow-xs focus-within:outline-none focus-within:ring-3 focus-within:ring-ring/40 transition-[box-shadow,color]",
                    p.theme.baseDropdownInputContainer
                  )
                )
              }, [
                I("div", Ou, [
                  p.multiple && ((g = p.modelValue) != null && g.length) ? (O(!0), M(xe, { key: 0 }, Ke(p.modelValue, (y) => (O(), M("div", {
                    key: y[p.uidProperty],
                    class: "flex items-center gap-1 rounded-md bg-accent px-2 py-0.5 text-sm"
                  }, [
                    I("span", null, he(p.displayProperty(y)), 1),
                    I("button", {
                      type: "button",
                      class: "ml-1 rounded-full hover:bg-accent-foreground/20",
                      onClick: wn((h) => m(y), ["stop"])
                    }, [
                      I("span", Tu, "Remove " + he(p.displayProperty(y)), 1),
                      v[4] || (v[4] = I("svg", {
                        class: "size-3",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "2"
                      }, [
                        I("path", { d: "M18 6L6 18M6 6l12 12" })
                      ], -1))
                    ], 8, Eu)
                  ]))), 128)) : ae("", !0),
                  W(F(Fr), {
                    class: z([
                      "flex-1 min-w-[120px] rounded-md border-0 bg-transparent pl-2.5 py-0.5 pr-8 text-sm truncate ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50",
                      p.multiple && ((x = p.modelValue) != null && x.length) ? "pl-1" : "",
                      p.theme.baseDropdownInputText
                    ]),
                    displayValue: p.displayProperty,
                    placeholder: p.placeholder,
                    autoComplete: "off",
                    onFocus: v[0] || (v[0] = (y) => s.value = !0),
                    onBlur: v[1] || (v[1] = (y) => s.value = !1),
                    onChange: v[2] || (v[2] = (y) => l.value = y.target.value),
                    onKeydown: Ea(f, ["delete"])
                  }, null, 8, ["class", "displayValue", "placeholder"])
                ]),
                W(F(Mr), {
                  class: z([
                    "absolute inset-y-0 right-0 flex items-center pr-2 text-muted-foreground"
                  ])
                }, {
                  default: U(() => [
                    W(F(hr), { class: "size-4 text-inherit" })
                  ]),
                  _: 1
                })
              ], 2),
              W(it, {
                "enter-active-class": "transition duration-200 ease-out",
                "enter-from-class": "translate-y-1 opacity-0",
                "enter-to-class": "translate-y-0 opacity-100",
                "leave-active-class": "transition duration-150 ease-in",
                "leave-from-class": "translate-y-0 opacity-100",
                "leave-to-class": "translate-y-1 opacity-0"
              }, {
                default: U(() => [
                  W(F(Lr), {
                    ref_key: "floating",
                    ref: a,
                    class: z(
                      F(me)(
                        "fixed left-0 z-10 overflow-x-hidden overflow-y-auto rounded-lg bg-popover p-3 text-base shadow-lg border border-ring focus:outline-hidden sm:text-sm",
                        p.theme.generalFloatingPanelContainer
                      )
                    ),
                    style: Gt(F(d)),
                    static: p.isStatic
                  }, {
                    default: U(() => [
                      u.value.length === 0 ? (O(), M("div", _u, [
                        p.$slots.empty ? Y(p.$slots, "empty", { key: 0 }) : (O(), M("span", Du, "No results"))
                      ])) : ae("", !0),
                      p.groupBy ? (O(), M("div", Pu, [
                        (O(!0), M(xe, null, Ke(c(
                          p.items,
                          (y) => y[p.groupBy]
                        ), (y, h) => (O(), M("div", $u, [
                          I("div", Iu, [
                            p.$slots.group ? Y(p.$slots, "group", Qe({
                              key: 0,
                              ref_for: !0
                            }, {
                              group: y,
                              groupName: h
                            })) : (O(), M("span", Au, he([
                              "undefined",
                              null,
                              void 0
                            ].includes(h) ? "Uncategorized" : h), 1))
                          ]),
                          I("div", Ru, [
                            (O(!0), M(xe, null, Ke(y, (k) => {
                              var b;
                              return O(), fe(F(zn), {
                                key: k[p.uidProperty],
                                value: k,
                                disabled: (b = p.disabledItems) == null ? void 0 : b.some(
                                  (T) => T[p.uidProperty] === k[p.uidProperty]
                                )
                              }, {
                                default: U(({ active: T, selected: S, disabled: _ }) => [
                                  I("span", {
                                    class: z([
                                      "cursor-pointer hover:bg-accent rounded-md px-2 py-1 flex w-full truncate",
                                      T && "bg-accent",
                                      S && "bg-accent",
                                      _ && "opacity-50 cursor-not-allowed pointer-events-none"
                                    ])
                                  }, [
                                    p.$slots.item ? Y(p.$slots, "item", Qe({
                                      key: 0,
                                      ref_for: !0
                                    }, {
                                      item: k,
                                      active: T,
                                      selected: S,
                                      disabled: _
                                    })) : (O(), M("span", Mu, he(p.displayProperty(k)), 1))
                                  ], 2)
                                ]),
                                _: 2
                              }, 1032, ["value", "disabled"]);
                            }), 128))
                          ])
                        ]))), 256))
                      ])) : (O(!0), M(xe, { key: 2 }, Ke(u.value, (y) => {
                        var h;
                        return O(), fe(F(zn), {
                          key: y[p.uidProperty],
                          value: y,
                          disabled: (h = p.disabledItems) == null ? void 0 : h.some(
                            (k) => k[p.uidProperty] === y[p.uidProperty]
                          )
                        }, {
                          default: U(({ active: k, selected: b, disabled: T }) => [
                            I("span", {
                              class: z([
                                "cursor-pointer hover:bg-accent rounded-md px-2 py-1 flex w-full truncate",
                                k && "bg-accent",
                                b && "bg-accent",
                                T && "opacity-50 cursor-not-allowed pointer-events-none"
                              ])
                            }, [
                              p.$slots.item ? Y(p.$slots, "item", Qe({
                                key: 0,
                                ref_for: !0
                              }, {
                                item: y,
                                active: k,
                                selected: b,
                                disabled: T
                              })) : (O(), M("span", Fu, he(p.displayProperty(y)), 1))
                            ], 2)
                          ]),
                          _: 2
                        }, 1032, ["value", "disabled"]);
                      }), 128)),
                      p.$slots.options ? Y(p.$slots, "options", Ct(Qe({ key: 3 }, { filteredItems: u.value }))) : ae("", !0)
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
}), Lu = { class: "w-full space-y-3" }, Bu = ["onClick"], Nu = /* @__PURE__ */ H({
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
      set: (s) => {
        a("update:modelValue", s);
      }
    }), a = n, l = C(""), i = (s) => {
      l.value = s, r.value = s, setTimeout(() => {
        l.value = "";
      }, 300);
    };
    return (s, u) => (O(), M("div", null, [
      I("div", Lu, [
        (O(!0), M(xe, null, Ke(o.value, (d, c) => (O(), M("div", {
          key: `color-${c}`,
          class: "flex w-full items-center space-x-3"
        }, [
          (O(!0), M(xe, null, Ke(d, (m) => (O(), M("div", {
            key: `${c}-${m.name}`,
            class: z(
              F(ut)(
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
            onClick: (f) => i(m.hex)
          }, [
            l.value === m.hex ? (O(), M("div", {
              key: 0,
              class: z(["absolute inset-0 rounded-full animate-color-flash", m.background])
            }, null, 2)) : ae("", !0)
          ], 10, Bu))), 128))
        ]))), 128))
      ])
    ]));
  }
}), Vu = { class: "relative" }, ju = /* @__PURE__ */ H({
  __name: "Dropdown",
  setup(e, { expose: n }) {
    const t = C(!1), o = C(), r = C(/* @__PURE__ */ new Map()), a = C(null), l = () => Array.from(r.value.entries()).sort(([, d], [, c]) => {
      const m = d.compareDocumentPosition(c);
      return m & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : m & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
    }), i = So({
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
    De("dropdown", i), De("triggerRef", o);
    const s = (u) => {
      if (t.value)
        switch (u.key) {
          case "Escape":
            u.preventDefault(), t.value = !1, a.value = null;
            break;
        }
    };
    return se(() => {
      document.addEventListener("keydown", s);
    }), we(() => {
      document.removeEventListener("keydown", s);
    }), n({
      isOpen: t,
      open: i.open,
      close: i.close,
      toggle: i.toggle,
      triggerRef: o
    }), (u, d) => (O(), M("div", Vu, [
      Y(u.$slots, "default")
    ]));
  }
}), zu = /* @__PURE__ */ H({
  __name: "DropdownTrigger",
  setup(e, { expose: n }) {
    var l;
    const t = pe("dropdown"), o = C();
    console.log("DropdownTrigger context:", {
      dropdown: t,
      isOpen: (l = t == null ? void 0 : t.isOpen) == null ? void 0 : l.value
    }), se(() => {
      console.log("DropdownTrigger mounted"), t && o.value && t.setTriggerRef(o.value);
    });
    const r = (i) => {
      console.log("Trigger clicked"), i.preventDefault(), i.stopPropagation(), t == null || t.toggle();
    }, a = (i) => {
      switch (console.log("Trigger keydown", i.key), i.key) {
        case "Enter":
        case " ":
          i.preventDefault(), t == null || t.toggle();
          break;
      }
    };
    return n({
      triggerRef: o
    }), (i, s) => (O(), M("div", {
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
      Y(i.$slots, "default")
    ], 544));
  }
}), Hu = /* @__PURE__ */ H({
  __name: "DropdownContent",
  props: {
    side: { default: "bottom" },
    align: { default: "start" },
    sideOffset: { default: 4 },
    alignOffset: { default: 0 },
    avoidCollisions: { type: Boolean, default: !0 }
  },
  setup(e) {
    const n = e, t = pe("dropdown"), o = pe("triggerRef"), r = C(), a = E(
      () => {
        var c;
        return (o == null ? void 0 : o.value) || ((c = t == null ? void 0 : t.triggerRef) == null ? void 0 : c.value);
      }
    ), { floatingStyles: l, update: i } = On(
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
    ), s = (c) => {
      c.stopPropagation();
    }, u = (c) => {
      if (t != null && t.isOpen)
        switch (c.key) {
          case "ArrowDown":
            c.preventDefault(), t.focusNext();
            break;
          case "ArrowUp":
            c.preventDefault(), t.focusPrevious();
            break;
          case "Home":
            c.preventDefault(), t.focusFirst();
            break;
          case "End":
            c.preventDefault(), t.focusLast();
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
    return le(
      () => t == null ? void 0 : t.isOpen,
      async (c) => {
        c ? (console.log("Dropdown opened, adding click outside handler"), document.addEventListener("click", d, !0), setTimeout(() => {
          t == null || t.focusFirst();
        }, 50)) : (console.log("Dropdown closed, removing click outside handler"), document.removeEventListener("click", d, !0));
      }
    ), le(
      () => a.value,
      async (c) => {
        c && (t != null && t.isOpen) && await He();
      }
    ), se(async () => {
      await He(), i && i();
    }), we(() => {
      console.log("DropdownContent unmounted"), document.removeEventListener("click", d, !0);
    }), (c, m) => (O(), M("div", {
      ref_key: "contentRef",
      ref: r,
      class: "absolute z-50",
      style: Gt(F(l))
    }, [
      W(it, {
        "enter-active-class": "transition-all duration-200 ease-out",
        "leave-active-class": "transition-all duration-200 ease-in",
        "enter-from-class": "opacity-0 scale-95",
        "enter-to-class": "opacity-100 scale-100",
        "leave-from-class": "opacity-100 scale-100",
        "leave-to-class": "opacity-0 scale-95"
      }, {
        default: U(() => {
          var f;
          return [
            on(I("div", {
              role: "menu",
              class: z([
                "relative min-w-[8rem] overflow-hidden rounded-md border border-ring bg-popover p-1 text-foreground shadow-lg"
              ]),
              onClick: s,
              onKeydown: u,
              tabindex: "-1"
            }, [
              Y(c.$slots, "default")
            ], 544), [
              [rn, (f = F(t)) == null ? void 0 : f.isOpen]
            ])
          ];
        }),
        _: 3
      })
    ], 4));
  }
}), Wu = /* @__PURE__ */ H({
  __name: "DropdownItem",
  props: {
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["click", "select"],
  setup(e, { expose: n, emit: t }) {
    const o = e, r = t, a = pe("dropdown"), l = C(), i = C();
    se(() => {
      i.value = `dropdown-item-${Math.random().toString(36).substr(2, 9)}`, a && l.value && i.value && a.registerItem(l.value, i.value);
    }), we(() => {
      a && i.value && a.unregisterItem(i.value);
    });
    const s = E(() => (a == null ? void 0 : a.getActiveItemId()) === i.value), u = (p) => {
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
      o.disabled || a && i.value && a.focusItem(i.value);
    }, m = () => {
      o.disabled;
    }, f = () => {
      o.disabled || a && i.value && a.focusItem(i.value);
    };
    return n({
      itemRef: l
    }), (p, v) => (O(), M("div", {
      ref_key: "itemRef",
      ref: l,
      role: "menuitem",
      tabindex: "-1",
      class: z([
        "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground",
        s.value ? "text-accent-foreground bg-accent" : "text-foreground/70 hover:text-accent-foreground",
        p.disabled && "pointer-events-none opacity-50"
      ]),
      onClick: u,
      onKeydown: d,
      onMouseenter: c,
      onMouseleave: m,
      onFocus: f
    }, [
      Y(p.$slots, "default")
    ], 34));
  }
}), Gu = {
  class: /* @__PURE__ */ z(["px-2 py-1.5 text-sm font-semibold text-foreground"])
}, Tf = /* @__PURE__ */ H({
  __name: "DropdownLabel",
  setup(e) {
    return (n, t) => (O(), M("div", Gu, [
      Y(n.$slots, "default")
    ]));
  }
}), Uu = {
  role: "separator",
  class: /* @__PURE__ */ z(["-mx-1 my-1 h-px bg-gray-200", "dark:bg-gray-700"])
}, _f = /* @__PURE__ */ H({
  __name: "DropdownSeparator",
  setup(e) {
    return (n, t) => (O(), M("div", Uu));
  }
}), qu = { class: "relative" }, Df = /* @__PURE__ */ H({
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
    const o = e, r = t, a = C(!1), l = C(), i = C(), s = {
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
    De("dropdown", s);
    const { floatingStyles: u, placement: d } = On(l, i, {
      placement: `${o.side}-${o.align}`,
      middleware: [
        Cn({ mainAxis: o.sideOffset, crossAxis: o.alignOffset }),
        ...o.avoidCollisions ? [Er()] : [],
        ...o.avoidCollisions ? [Sn()] : [],
        $o()
      ],
      whileElementsMounted: Po
    }), c = E(() => d.value ? d.value.split("-")[0] : o.side), m = E(() => {
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
      open: s.open,
      close: s.close,
      toggle: s.toggle,
      triggerRef: l,
      contentRef: i,
      floatingStyles: u,
      actualSide: c,
      transformOrigin: m
    }), (f, p) => (O(), M("div", qu, [
      Y(f.$slots, "default")
    ]));
  }
}), Pf = /* @__PURE__ */ H({
  __name: "DropdownSubContent",
  setup(e) {
    const n = pe("dropdown"), t = C(), o = C({}), r = C("left");
    se(() => {
      var i;
      if (t.value) {
        const s = (i = Oa()) == null ? void 0 : i.parent;
        s && s.exposed && (s.exposed.contentRef = t.value, s.exposed.floatingStyles && (o.value = s.exposed.floatingStyles.value), s.exposed.transformOrigin && (r.value = s.exposed.transformOrigin.value));
      }
    });
    const a = (i) => {
      i.stopPropagation();
    }, l = (i) => {
      var d;
      if (!(n != null && n.isOpen) || !t.value) return;
      const s = i.target, u = (d = n.triggerRef) == null ? void 0 : d.value;
      u && !u.contains(s) && !t.value.contains(s) && n.close();
    };
    return se(() => {
      setTimeout(() => {
        document.addEventListener("click", l, !0);
      }, 0);
    }), we(() => {
      document.removeEventListener("click", l, !0);
    }), (i, s) => (O(), fe(Oo, { to: "body" }, [
      W(it, {
        "enter-active-class": "transition-all duration-200 ease-out",
        "leave-active-class": "transition-all duration-150 ease-in",
        "enter-from-class": "opacity-0 scale-95",
        "enter-to-class": "opacity-100 scale-100",
        "leave-from-class": "opacity-100 scale-100",
        "leave-to-class": "opacity-0 scale-95"
      }, {
        default: U(() => {
          var u;
          return [
            on(I("div", {
              ref_key: "contentRef",
              ref: t,
              role: "menu",
              class: z([
                "fixed z-50 min-w-[8rem] overflow-hidden rounded-md border bg-white p-1 text-gray-900 shadow-lg",
                "dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700"
              ]),
              style: Gt({
                ...o.value,
                transformOrigin: `${r.value} center`
              }),
              onClick: a
            }, [
              Y(i.$slots, "default")
            ], 4), [
              [rn, (u = F(n)) == null ? void 0 : u.isOpen]
            ])
          ];
        }),
        _: 3
      })
    ]));
  }
}), Ku = ["data-state"], $f = /* @__PURE__ */ H({
  __name: "DropdownSubTrigger",
  emits: ["click", "keydown"],
  setup(e, { expose: n, emit: t }) {
    const o = t, r = pe("dropdown"), a = C();
    se(() => {
      r && a.value && r.setTriggerRef(a.value);
    });
    const l = (d) => {
      d.preventDefault(), d.stopPropagation(), r == null || r.toggle(), o("click", d);
    }, i = (d) => {
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
    }, s = () => {
      r == null || r.open();
    }, u = () => {
    };
    return n({
      triggerRef: a
    }), (d, c) => {
      var m;
      return O(), M("div", {
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
        "data-state": (m = F(r)) != null && m.isOpen ? "open" : "closed",
        onClick: l,
        onKeydown: i,
        onMouseenter: s,
        onMouseleave: u
      }, [
        Y(d.$slots, "default"),
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
      ], 40, Ku);
    };
  }
}), Yu = ["innerHTML"], Go = /* @__PURE__ */ H({
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
    return (n, t) => (O(), M("div", {
      class: z(
        F(me)(
          "bg-card border border-border border-dashed rounded-lg p-6",
          n.theme.container
        )
      )
    }, [
      I("h3", {
        class: z(F(me)("text-base font-semibold text-zinc-900", n.theme.title)),
        innerHTML: n.title
      }, null, 10, Yu),
      I("div", {
        class: z(F(me)("mt-1 text-muted-foreground", n.theme.description))
      }, [
        Y(n.$slots, "default")
      ], 2)
    ], 2));
  }
}), Xu = ["aria-labelledby", "aria-describedby"], Ju = /* @__PURE__ */ H({
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
    function o(...g) {
      return yt(ut(g));
    }
    const r = t, a = e, l = C(), i = C(), s = E(
      () => `modal-title-${Math.random().toString(36).substr(2, 9)}`
    ), u = E(
      () => `modal-description-${Math.random().toString(36).substr(2, 9)}`
    );
    let d = null;
    const c = () => {
      a.preventBodyScroll && (d = document.body.style.overflow, document.body.style.overflow = "hidden");
    }, m = () => {
      a.preventBodyScroll && d !== null && (document.body.style.overflow = d, d = null);
    }, f = () => {
      r("close"), r("update:open", !1);
    }, p = (g) => {
      a.closeOnBackdropClick && g.target === i.value && f();
    }, v = (g) => {
      a.closeOnEscape && g.key === "Escape" && (g.preventDefault(), f());
    };
    return le(
      () => a.open,
      async (g) => {
        g ? (c(), await He()) : m();
      }
    ), se(() => {
      a.open && c();
    }), we(() => {
      m();
    }), n({
      close: f,
      modalContainerRef: l,
      backdropRef: i,
      titleId: s.value,
      descriptionId: u.value
    }), (g, x) => (O(), fe(Oo, { to: "body" }, [
      W(it, {
        "enter-active-class": "transition-all duration-300 ease-out",
        "enter-from-class": "opacity-0",
        "enter-to-class": "opacity-100",
        "leave-active-class": "transition-all duration-200 ease-in",
        "leave-from-class": "opacity-100",
        "leave-to-class": "opacity-0"
      }, {
        default: U(() => [
          g.open ? (O(), M("div", {
            key: 0,
            ref_key: "backdropRef",
            ref: i,
            onClick: p,
            class: z(
              o(
                "fixed inset-0 bg-primary/20 backdrop-blur-sm",
                g.theme.backdrop
              )
            ),
            style: { zIndex: "var(--z-modal-backdrop)" }
          }, null, 2)) : ae("", !0)
        ]),
        _: 1
      }),
      W(it, {
        "enter-active-class": "transition-all duration-150 ease-out",
        "enter-from-class": "opacity-0 scale-95 translate-y-4",
        "enter-to-class": "opacity-100 scale-100 translate-y-0",
        "leave-active-class": "transition-all duration-150 ease-in",
        "leave-from-class": "opacity-100 scale-100 translate-y-0",
        "leave-to-class": "opacity-0 scale-95 translate-y-4"
      }, {
        default: U(() => [
          g.open ? (O(), M("div", {
            key: 0,
            ref_key: "modalContainerRef",
            ref: l,
            class: z(
              o(
                "fixed inset-0 z-50 flex items-center justify-center",
                g.theme.backdrop
              )
            ),
            style: { zIndex: "var(--z-modal-backdrop)" },
            onKeydown: v,
            tabindex: "-1",
            role: "dialog",
            "aria-modal": !0,
            "aria-labelledby": s.value,
            "aria-describedby": u.value
          }, [
            Y(g.$slots, "default", {}, void 0, !0)
          ], 42, Xu)) : ae("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), Qu = /* @__PURE__ */ Hn(Ju, [["__scopeId", "data-v-5c2d2b38"]]), Zu = /* @__PURE__ */ H({
  __name: "ModalContent",
  props: {
    size: { default: "default" },
    theme: { default: () => ({
      container: ""
    }) }
  },
  setup(e, { expose: n }) {
    function t(...l) {
      return yt(ut(l));
    }
    const o = C(), r = (l) => {
      if (!o.value || l.key !== "Tab") return;
      const i = o.value.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (i.length === 0) return;
      const s = i[0], u = i[i.length - 1];
      l.shiftKey ? document.activeElement === s && (l.preventDefault(), u.focus()) : document.activeElement === u && (l.preventDefault(), s.focus());
    };
    return n({
      modalRef: o,
      focusFirstElement: async () => {
        var i;
        await He();
        const l = (i = o.value) == null ? void 0 : i.querySelector(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        l ? l.focus() : o.value && o.value.focus();
      }
    }), (l, i) => (O(), M("div", {
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
      onClick: i[0] || (i[0] = wn(() => {
      }, ["stop"])),
      onKeydown: r
    }, [
      Y(l.$slots, "default")
    ], 34));
  }
}), ed = ["aria-label"], td = /* @__PURE__ */ H({
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
      return yt(ut(o));
    }
    return (o, r) => (O(), M("button", {
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
      W(F(gr), { class: "size-4" })
    ], 10, ed));
  }
}), nd = /* @__PURE__ */ H({
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
    }), (r, a) => (O(), fe(Qu, {
      open: r.open,
      "close-on-backdrop-click": r.closeOnBackdropClick,
      "close-on-escape": r.closeOnEscape,
      "prevent-body-scroll": r.preventBodyScroll,
      theme: r.theme,
      onClose: a[1] || (a[1] = (l) => r.$emit("close")),
      "onUpdate:open": a[2] || (a[2] = (l) => r.$emit("update:open", l))
    }, {
      default: U(() => [
        W(Zu, {
          size: r.size,
          theme: r.theme
        }, {
          default: U(() => [
            W(td, {
              "close-button-label": r.closeButtonLabel,
              theme: r.theme,
              onClose: a[0] || (a[0] = (l) => r.$emit("close"))
            }, null, 8, ["close-button-label", "theme"]),
            Y(r.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        }, 8, ["size", "theme"])
      ]),
      _: 3
    }, 8, ["open", "close-on-backdrop-click", "close-on-escape", "prevent-body-scroll", "theme"]));
  }
}), If = /* @__PURE__ */ Hn(nd, [["__scopeId", "data-v-5e273e5b"]]), od = { class: "flex-1 min-w-0" }, Af = /* @__PURE__ */ H({
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
      return yt(ut(o));
    }
    return (o, r) => (O(), M("div", {
      class: z(t("flex items-center justify-between p-6", o.theme.header))
    }, [
      I("div", od, [
        Y(o.$slots, "default")
      ])
    ], 2));
  }
}), rd = ["id"], Rf = /* @__PURE__ */ H({
  __name: "ModalTitle",
  props: {
    titleId: {}
  },
  setup(e) {
    return (n, t) => (O(), M("h2", {
      id: n.titleId,
      class: "text-lg font-semibold text-foreground"
    }, [
      Y(n.$slots, "default")
    ], 8, rd));
  }
}), Mf = /* @__PURE__ */ H({
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
      return yt(ut(t));
    }
    return (t, o) => (O(), M("div", {
      class: z(n("flex-1 grow overflow-auto px-6", t.theme.content))
    }, [
      Y(t.$slots, "default")
    ], 2));
  }
}), Ff = /* @__PURE__ */ H({
  __name: "ModalFooter",
  props: {
    theme: { default: () => ({
      footer: ""
    }) }
  },
  setup(e) {
    function n(...t) {
      return yt(ut(t));
    }
    return (t, o) => (O(), M("div", {
      class: z(n("flex items-center justify-end gap-3 p-6", t.theme.footer))
    }, [
      Y(t.$slots, "default")
    ], 2));
  }
}), ad = /* @__PURE__ */ H({
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
          limiter: _r({
            offset: 10
          })
        }),
        $o({
          allowedPlacements: ["top-start", "bottom-start"]
        }),
        Cn(10),
        Tr({
          apply({ availableHeight: e, elements: n }) {
            const t = n.reference.getBoundingClientRect().width;
            Object.assign(n.floating.style, {
              minWidth: `${t}px`,
              maxHeight: `${e - 20}px`
            });
          }
        })
      ],
      whileElementsMounted: Po
    }) },
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(e, { expose: n, emit: t }) {
    const o = e, r = t, a = C(), l = C(), i = C(o.open ?? !1);
    le(
      () => o.open,
      (c) => {
        c !== void 0 && (i.value = c);
      },
      { immediate: !0 }
    );
    const s = (c) => {
      i.value = c, r("update:open", c);
    }, { floatingStyles: u } = On(a, l, {
      strategy: o.floatingOptions.strategy,
      transform: o.floatingOptions.transform,
      placement: o.floatingOptions.placement,
      middleware: o.floatingOptions.middleware,
      open: i.value,
      whileElementsMounted: o.floatingOptions.whileElementsMounted
    });
    return n({
      /** Reference to the floating element */
      floating: l,
      /** Reference to the trigger element */
      reference: a,
      /** Method to close the popover */
      close: () => {
        s(!1);
      },
      /** Current open state of the popover */
      isOpen: i
    }), (c, m) => (O(), fe(F(gl), {
      class: z(F(me)("relative inline-block text-left", c.theme.popoverMenu)),
      open: i.value,
      "onUpdate:open": s
    }, {
      default: U(({ open: f }) => [
        I("div", null, [
          W(F(pu), {
            ref_key: "reference",
            ref: a,
            class: z(
              F(me)(f ? "is-open" : "is-closed", c.theme.popoverMenuButton)
            )
          }, {
            default: U(() => [
              Y(c.$slots, "trigger")
            ]),
            _: 2
          }, 1032, ["class"])
        ]),
        W(it, {
          "enter-active-class": "transition duration-200 ease-out",
          "enter-from-class": "translate-y-1 opacity-0",
          "enter-to-class": "translate-y-0 opacity-100",
          "leave-active-class": "transition duration-150 ease-in",
          "leave-from-class": "translate-y-0 opacity-100",
          "leave-to-class": "translate-y-1 opacity-0"
        }, {
          default: U(() => [
            W(F(mu), {
              ref_key: "floating",
              ref: l,
              class: z(
                F(me)(
                  "fixed z-50 transform overflow-x-hidden overflow-y-auto rounded-lg bg-background p-3 text-base shadow-lg ring-1 ring-ring focus:outline-hidden sm:text-sm",
                  c.theme.popoverMenuItems
                )
              ),
              style: Gt(F(u))
            }, {
              default: U(({ close: p }) => [
                Y(c.$slots, "default", Ct(Ht({ close: p })))
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
}), ld = { class: "relative" }, id = { key: 0 }, sd = { class: "flex items-center gap-2" }, ud = { key: 2 }, dd = { key: 1 }, cd = { key: 3 }, fd = { class: "border-t border-border px-2 first:border-t-0 py-2 first:pt-0 last:pb-0" }, pd = { class: "flex items-center text-base font-medium" }, md = { key: 1 }, vd = { class: "-mx-2.5" }, hd = { key: 1 }, gd = { key: 1 }, Sl = /* @__PURE__ */ H({
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
          limiter: _r({
            offset: 10
          })
        }),
        $o({
          allowedPlacements: ["top-start", "bottom-start"]
        }),
        Cn(10),
        Tr({
          apply({ availableHeight: e, elements: n }) {
            const t = n.reference.getBoundingClientRect().width;
            Object.assign(n.floating.style, {
              minWidth: `${t}px`,
              maxHeight: `${e - 20}px`
            });
          }
        })
      ],
      whileElementsMounted: Po
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
    const o = t, r = e, a = C([]), l = C(), i = C(""), s = C(), u = C(!1), d = C(!1), c = C(!1), m = E({
      get: () => r.modelValue,
      set: (v) => {
        o("update:modelValue", v);
      }
    }), { floatingStyles: f } = On(s, l, {
      strategy: r.floatingOptions.strategy,
      transform: r.floatingOptions.transform,
      placement: r.floatingOptions.placement,
      middleware: r.floatingOptions.middleware,
      whileElementsMounted: r.floatingOptions.whileElementsMounted
    });
    le(
      () => i.value,
      xi(async () => {
        const v = new AbortController();
        r.searcher ? (u.value = !0, a.value = await r.searcher(
          i.value,
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
      (x, y) => {
        var h;
        return (x[h = g(y)] || (x[h] = [])).push(y), x;
      },
      {}
    );
    return n({
      focused: c,
      query: i,
      searching: u
    }), (v, g) => (O(), M("div", {
      class: z(F(me)("relative rounded-lg"))
    }, [
      W(F(Rr), {
        "model-value": m.value,
        immediate: v.immediate,
        nullable: v.nullable,
        multiple: v.multiple,
        "onUpdate:modelValue": g[3] || (g[3] = (x) => m.value = x)
      }, {
        default: U(() => [
          I("div", ld, [
            I("div", {
              ref_key: "reference",
              ref: s,
              class: z(F(me)(v.theme.baseDropdownInputContainer))
            }, [
              W(F(Fr), {
                class: z(
                  F(me)(
                    "flex w-full rounded-md border border-border bg-background pl-2.5 py-1.5 pr-8 text-sm truncate ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40 transition-[box-shadow,color] disabled:cursor-not-allowed disabled:opacity-50",
                    v.theme.baseDropdownInputText
                  )
                ),
                displayValue: v.displayProperty,
                placeholder: v.placeholder,
                autoComplete: "off",
                onFocus: g[0] || (g[0] = () => {
                  d.value = !0, c.value = !0;
                }),
                onBlur: g[1] || (g[1] = (x) => c.value = !1),
                onChange: g[2] || (g[2] = (x) => i.value = x.target.value)
              }, null, 8, ["class", "displayValue", "placeholder"]),
              W(F(Mr), {
                class: z([
                  "absolute inset-y-0 right-0 flex items-center pr-2 text-muted-foreground"
                ])
              }, {
                default: U(() => [
                  W(F(hr), { class: "size-4 text-inherit" })
                ]),
                _: 1
              })
            ], 2),
            W(it, {
              "enter-active-class": "transition duration-200 ease-out",
              "enter-from-class": "translate-y-1 opacity-0",
              "enter-to-class": "translate-y-0 opacity-100",
              "leave-active-class": "transition duration-150 ease-in",
              "leave-from-class": "translate-y-0 opacity-100",
              "leave-to-class": "translate-y-1 opacity-0"
            }, {
              default: U(() => [
                W(F(Lr), {
                  ref_key: "floating",
                  ref: l,
                  class: z(
                    F(me)(
                      "fixed left-0 z-10 overflow-x-hidden overflow-y-auto rounded-lg bg-popover p-3 text-base shadow-lg ring-1 ring-black/5 focus:outline-hidden sm:text-sm",
                      v.theme.generalFloatingPanelContainer
                    )
                  ),
                  style: Gt(F(f)),
                  static: v.isStatic
                }, {
                  default: U(() => [
                    v.$slots.static ? (O(), M("div", id, [
                      Y(v.$slots, "static", Ct(Ht({ query: i.value, searching: u.value })))
                    ])) : ae("", !0),
                    u.value ? Y(v.$slots, "searching", { key: 1 }, () => [
                      I("span", sd, [
                        W(F(vi), { class: "size-4 animate-spin" }),
                        g[4] || (g[4] = I("span", null, "Searching...", -1))
                      ])
                    ]) : ae("", !0),
                    a.value.length === 0 && !u.value ? (O(), M("div", ud, [
                      v.$slots.empty ? Y(v.$slots, "empty", { key: 0 }) : (O(), M("span", dd, "No results"))
                    ])) : ae("", !0),
                    v.groupBy && !u.value ? (O(), M("div", cd, [
                      (O(!0), M(xe, null, Ke(p(
                        [
                          ...v.prependItems,
                          ...a.value,
                          ...v.postpendItems
                        ],
                        (x) => x[v.groupBy]
                      ), (x, y) => (O(), M("div", fd, [
                        I("div", pd, [
                          v.$slots.group ? Y(v.$slots, "group", Qe({
                            key: 0,
                            ref_for: !0
                          }, {
                            group: x,
                            groupName: y
                          })) : (O(), M("span", md, he([
                            "undefined",
                            null,
                            void 0
                          ].includes(y) ? "Uncategorized" : y), 1))
                        ]),
                        I("div", vd, [
                          u.value ? ae("", !0) : (O(!0), M(xe, { key: 0 }, Ke(x, (h) => (O(), fe(F(zn), {
                            key: h[v.uidProperty],
                            value: h
                          }, {
                            default: U(({ active: k, selected: b }) => [
                              I("span", {
                                class: z([
                                  "cursor-pointer hover:bg-accent rounded-md px-2 py-1 flex w-full truncate",
                                  k && "bg-accent",
                                  b && "bg-accent"
                                ])
                              }, [
                                v.$slots.item ? Y(v.$slots, "item", Qe({
                                  key: 0,
                                  ref_for: !0
                                }, {
                                  item: h,
                                  active: k,
                                  selected: b
                                })) : (O(), M("span", hd, he(v.displayProperty(h)), 1))
                              ], 2)
                            ]),
                            _: 2
                          }, 1032, ["value"]))), 128))
                        ])
                      ]))), 256))
                    ])) : u.value ? ae("", !0) : (O(!0), M(xe, { key: 4 }, Ke(a.value, (x) => (O(), fe(F(zn), {
                      key: x[v.uidProperty],
                      value: x
                    }, {
                      default: U(({ active: y, selected: h }) => [
                        I("span", {
                          class: z([
                            "cursor-pointer hover:bg-accent rounded-md px-2 py-1 flex w-full truncate",
                            y && "bg-accent",
                            h && "bg-accent"
                          ])
                        }, [
                          v.$slots.item ? Y(v.$slots, "item", Qe({
                            key: 0,
                            ref_for: !0
                          }, { item: x, active: y, selected: h })) : (O(), M("span", gd, he(v.displayProperty(x)), 1))
                        ], 2)
                      ]),
                      _: 2
                    }, 1032, ["value"]))), 128)),
                    v.$slots.options ? Y(v.$slots, "options", Ct(Qe({ key: 5 }, { filteredItems: a.value }))) : ae("", !0)
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
}), bd = { class: "relative" }, Lf = /* @__PURE__ */ H({
  __name: "Tooltip",
  setup(e, { expose: n }) {
    const t = C(!1), o = C(), r = C("body"), a = So({
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
    return De("tooltip", a), De("triggerRef", o), n({
      isVisible: t,
      show: a.show,
      hide: a.hide,
      triggerRef: o,
      portalTarget: r
    }), (l, i) => (O(), M("div", bd, [
      Y(l.$slots, "default")
    ]));
  }
}), Bf = /* @__PURE__ */ H({
  __name: "TooltipTrigger",
  props: {
    delay: { default: 300 },
    hideDelay: { default: 0 }
  },
  setup(e) {
    const n = e, t = pe("tooltip"), o = C();
    let r = null, a = null;
    const l = () => {
      a && (clearTimeout(a), a = null), n.delay > 0 ? r = window.setTimeout(() => {
        t == null || t.show();
      }, n.delay) : t == null || t.show();
    }, i = () => {
      r && (clearTimeout(r), r = null), n.hideDelay > 0 ? a = window.setTimeout(() => {
        t == null || t.hide();
      }, n.hideDelay) : t == null || t.hide();
    }, s = () => {
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
    }), we(() => {
      r && clearTimeout(r), a && clearTimeout(a);
    }), (d, c) => (O(), M("div", {
      ref_key: "triggerRef",
      ref: o,
      onMouseenter: l,
      onMouseleave: i,
      onFocus: s,
      onBlur: u
    }, [
      Y(d.$slots, "default")
    ], 544));
  }
}), yd = {
  role: "tooltip",
  class: "relative max-w-xs rounded-md bg-primary px-3 py-2 text-sm text-primary-foreground shadow-lg pointer-events-auto transform-gpu"
}, Nf = /* @__PURE__ */ H({
  __name: "TooltipContent",
  props: {
    side: { default: "top" },
    align: { default: "center" },
    sideOffset: { default: 8 },
    alignOffset: { default: 0 },
    avoidCollisions: { type: Boolean, default: !0 }
  },
  setup(e) {
    const n = e, t = pe("tooltip"), o = pe("triggerRef"), r = C(), a = C(), l = E(
      () => {
        var p;
        return (o == null ? void 0 : o.value) || ((p = t == null ? void 0 : t.triggerRef) == null ? void 0 : p.value);
      }
    ), i = E(() => `${n.side}-${n.align}`), { floatingStyles: s, middlewareData: u, update: d } = On(
      l || C(null),
      r,
      {
        strategy: "fixed",
        placement: i,
        middleware: [
          Cn({
            mainAxis: n.sideOffset,
            crossAxis: n.alignOffset
          }),
          ...n.avoidCollisions ? [Er()] : [],
          ...n.avoidCollisions ? [Sn()] : [],
          ls({ element: a })
        ]
      }
    ), c = E(() => {
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
          d();
        });
      }
    ), le(
      () => t == null ? void 0 : t.isVisible,
      (p) => {
        p && He(() => {
          d();
        });
      },
      { immediate: !0 }
    ), le(s, (p) => {
      process.env.NODE_ENV === "development" && console.log("Tooltip positioning:", {
        requestedPlacement: i.value,
        actualPlacement: c.value,
        styles: p,
        triggerRef: l.value,
        contentRef: r.value
      });
    });
    const m = E(() => {
      const p = c.value, [v, g] = p.split("-"), x = g || "center";
      switch (v) {
        case "top":
          switch (x) {
            case "start":
              return "bottom-[-4px] left-4";
            case "end":
              return "bottom-[-4px] right-4";
            default:
              return "bottom-[-4px] left-1/2 transform -translate-x-1/2";
          }
        case "bottom":
          switch (x) {
            case "start":
              return "top-[-4px] left-4";
            case "end":
              return "top-[-4px] right-4";
            default:
              return "top-[-4px] left-1/2 transform -translate-x-1/2";
          }
        case "left":
          switch (x) {
            case "start":
              return "right-[-4px] top-4";
            case "end":
              return "right-[-4px] bottom-4";
            default:
              return "right-[-4px] top-1/2 transform -translate-y-1/2";
          }
        case "right":
          switch (x) {
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
    return se(async () => {
      await He(), setTimeout(() => {
        d();
      }, 100);
    }), (p, v) => {
      var g;
      return O(), fe(Oo, {
        to: ((g = F(t)) == null ? void 0 : g.portalTarget) || "body"
      }, [
        I("div", {
          ref_key: "contentRef",
          ref: r,
          class: "fixed z-[9999] pointer-events-none",
          style: Gt(F(s))
        }, [
          W(it, {
            "enter-active-class": "transition-all duration-200 ease-out",
            "leave-active-class": "transition-all duration-150 ease-in",
            "enter-from-class": "opacity-0 scale-95 translate-y-1",
            "enter-to-class": "opacity-100 scale-100 translate-y-0",
            "leave-from-class": "opacity-100 scale-100 translate-y-0",
            "leave-to-class": "opacity-0 scale-95 translate-y-1"
          }, {
            default: U(() => {
              var x;
              return [
                on(I("div", yd, [
                  Y(p.$slots, "default"),
                  I("div", {
                    ref_key: "arrowRef",
                    ref: a,
                    class: z(["absolute w-2 h-2 bg-primary rotate-45", m.value]),
                    style: Gt(f.value)
                  }, null, 6)
                ], 512), [
                  [rn, (x = F(t)) == null ? void 0 : x.isVisible]
                ])
              ];
            }),
            _: 3
          })
        ], 4)
      ], 8, ["to"]);
    };
  }
}), wd = { class: "flex items-center gap-3" }, xd = { class: "flex items-center gap-2" }, kd = {
  key: 0,
  class: "w-2 h-2 bg-yellow-200 rounded-full m-0.5"
}, Cd = ["aria-label"], Sd = {
  key: 0,
  class: "w-4 h-4",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
}, Od = {
  key: 1,
  class: "w-4 h-4",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
}, Ed = { class: "mt-2 text-xs opacity-70" }, Vf = /* @__PURE__ */ H({
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
    }[n.variant], n.theme.container].filter(Boolean).join(" ")), i = E(() => ["font-medium", n.theme.text].filter(Boolean).join(" ")), s = E(() => ["p-2 rounded-md transition-colors hover:bg-accent hover:text-accent-foreground", n.theme.button].filter(Boolean).join(" "));
    return (u, d) => (O(), M("div", {
      class: z(l.value)
    }, [
      I("div", wd, [
        I("div", xd, [
          I("div", {
            class: z([
              "w-4 h-4 rounded-full border-2 transition-colors",
              F(t) ? "bg-yellow-400 border-yellow-600" : "bg-blue-400 border-blue-600"
            ])
          }, [
            F(t) ? (O(), M("div", kd)) : ae("", !0)
          ], 2),
          I("span", {
            class: z(i.value)
          }, he(F(t) ? "Dark" : "Light") + " Theme ", 3)
        ]),
        I("button", {
          onClick: d[0] || (d[0] = //@ts-ignore
          (...c) => F(a) && F(a)(...c)),
          class: z(s.value),
          type: "button",
          "aria-label": `Switch to ${F(t) ? "light" : "dark"} theme`
        }, [
          F(t) ? (O(), M("svg", Sd, d[1] || (d[1] = [
            I("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            }, null, -1)
          ]))) : (O(), M("svg", Od, d[2] || (d[2] = [
            I("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            }, null, -1)
          ])))
        ], 10, Cd)
      ]),
      I("div", Ed, [
        I("p", null, "Background: " + he(F(o)), 1),
        I("p", null, "Theme Class: " + he(F(r)), 1)
      ])
    ], 2));
  }
}), Td = { class: "space-y-4" }, _d = ["onMouseenter", "onMouseleave"], Dd = { class: "font-semibold" }, Pd = { class: "text-sm text-zinc-500" }, jf = /* @__PURE__ */ H({
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
    return (o, r) => (O(), M("div", {
      class: z(
        F(me)(
          "flex h-full w-full max-w-sm flex-col overflow-hidden border-l border-zinc-300/80 p-5",
          ...o.classes
        )
      )
    }, [
      I("ul", Td, [
        (O(!0), M(xe, null, Ke(o.tips, (a) => (O(), M("li", {
          key: a.title,
          class: "space-y-3 rounded-lg border border-zinc-300/80 p-3 hover:shadow-md",
          onMouseenter: (l) => n(a.target),
          onMouseleave: (l) => t(a.target)
        }, [
          I("div", null, [
            W(ni, { classes: ["py-1.5"] }, {
              default: U(() => [
                Wt(he(a.type), 1)
              ]),
              _: 2
            }, 1024)
          ]),
          I("div", null, [
            I("div", Dd, he(a.title), 1),
            I("p", Pd, he(a.description), 1)
          ])
        ], 40, _d))), 128))
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
function ca(e, n) {
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
    n % 2 ? ca(Object(t), !0).forEach(function(o) {
      $d(e, o, t[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ca(Object(t)).forEach(function(o) {
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(t, o));
    });
  }
  return e;
}
function ao(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ao = function(n) {
    return typeof n;
  } : ao = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, ao(e);
}
function $d(e, n, t) {
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
function Id(e, n) {
  if (e == null) return {};
  var t = {}, o = Object.keys(e), r, a;
  for (a = 0; a < o.length; a++)
    r = o[a], !(n.indexOf(r) >= 0) && (t[r] = e[r]);
  return t;
}
function Ad(e, n) {
  if (e == null) return {};
  var t = Id(e, n), o, r;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      o = a[r], !(n.indexOf(o) >= 0) && Object.prototype.propertyIsEnumerable.call(e, o) && (t[o] = e[o]);
  }
  return t;
}
var Rd = "1.15.6";
function It(e) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(e);
}
var Ft = It(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), qn = It(/Edge/i), fa = It(/firefox/i), Mn = It(/safari/i) && !It(/chrome/i) && !It(/android/i), zr = It(/iP(ad|od|hone)/i), Ol = It(/chrome/i) && It(/android/i), El = {
  capture: !1,
  passive: !1
};
function de(e, n, t) {
  e.addEventListener(n, t, !Ft && El);
}
function ue(e, n, t) {
  e.removeEventListener(n, t, !Ft && El);
}
function go(e, n) {
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
function pt(e, n, t, o) {
  if (e) {
    t = t || document;
    do {
      if (n != null && (n[0] === ">" ? e.parentNode === t && go(e, n) : go(e, n)) || o && e === t)
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
function _l(e, n, t) {
  if (e) {
    var o = e.getElementsByTagName(n), r = 0, a = o.length;
    if (t)
      for (; r < a; r++)
        t(o[r], r);
    return o;
  }
  return [];
}
function Ot() {
  var e = document.scrollingElement;
  return e || document.documentElement;
}
function Re(e, n, t, o, r) {
  if (!(!e.getBoundingClientRect && e !== window)) {
    var a, l, i, s, u, d, c;
    if (e !== window && e.parentNode && e !== Ot() ? (a = e.getBoundingClientRect(), l = a.top, i = a.left, s = a.bottom, u = a.right, d = a.height, c = a.width) : (l = 0, i = 0, s = window.innerHeight, u = window.innerWidth, d = window.innerHeight, c = window.innerWidth), (n || t) && e !== window && (r = r || e.parentNode, !Ft))
      do
        if (r && r.getBoundingClientRect && (Q(r, "transform") !== "none" || t && Q(r, "position") !== "static")) {
          var m = r.getBoundingClientRect();
          l -= m.top + parseInt(Q(r, "border-top-width")), i -= m.left + parseInt(Q(r, "border-left-width")), s = l + a.height, u = i + a.width;
          break;
        }
      while (r = r.parentNode);
    if (o && e !== window) {
      var f = yn(r || e), p = f && f.a, v = f && f.d;
      f && (l /= v, i /= p, c /= p, d /= v, s = l + d, u = i + c);
    }
    return {
      top: l,
      left: i,
      bottom: s,
      right: u,
      width: c,
      height: d
    };
  }
}
function ma(e, n, t) {
  for (var o = zt(e, !0), r = Re(e)[n]; o; ) {
    var a = Re(o)[t], l = void 0;
    if (l = r >= a, !l) return o;
    if (o === Ot()) break;
    o = zt(o, !1);
  }
  return !1;
}
function kn(e, n, t, o) {
  for (var r = 0, a = 0, l = e.children; a < l.length; ) {
    if (l[a].style.display !== "none" && l[a] !== Z.ghost && (o || l[a] !== Z.dragged) && pt(l[a], t.draggable, e, !1)) {
      if (r === n)
        return l[a];
      r++;
    }
    a++;
  }
  return null;
}
function Hr(e, n) {
  for (var t = e.lastElementChild; t && (t === Z.ghost || Q(t, "display") === "none" || n && !go(t, n)); )
    t = t.previousElementSibling;
  return t || null;
}
function lt(e, n) {
  var t = 0;
  if (!e || !e.parentNode)
    return -1;
  for (; e = e.previousElementSibling; )
    e.nodeName.toUpperCase() !== "TEMPLATE" && e !== Z.clone && (!n || go(e, n)) && t++;
  return t;
}
function va(e) {
  var n = 0, t = 0, o = Ot();
  if (e)
    do {
      var r = yn(e), a = r.a, l = r.d;
      n += e.scrollLeft * a, t += e.scrollTop * l;
    } while (e !== o && (e = e.parentNode));
  return [n, t];
}
function Md(e, n) {
  for (var t in e)
    if (e.hasOwnProperty(t)) {
      for (var o in n)
        if (n.hasOwnProperty(o) && n[o] === e[t][o]) return Number(t);
    }
  return -1;
}
function zt(e, n) {
  if (!e || !e.getBoundingClientRect) return Ot();
  var t = e, o = !1;
  do
    if (t.clientWidth < t.scrollWidth || t.clientHeight < t.scrollHeight) {
      var r = Q(t);
      if (t.clientWidth < t.scrollWidth && (r.overflowX == "auto" || r.overflowX == "scroll") || t.clientHeight < t.scrollHeight && (r.overflowY == "auto" || r.overflowY == "scroll")) {
        if (!t.getBoundingClientRect || t === document.body) return Ot();
        if (o || n) return t;
        o = !0;
      }
    }
  while (t = t.parentNode);
  return Ot();
}
function Fd(e, n) {
  if (e && n)
    for (var t in n)
      n.hasOwnProperty(t) && (e[t] = n[t]);
  return e;
}
function Uo(e, n) {
  return Math.round(e.top) === Math.round(n.top) && Math.round(e.left) === Math.round(n.left) && Math.round(e.height) === Math.round(n.height) && Math.round(e.width) === Math.round(n.width);
}
var Fn;
function Dl(e, n) {
  return function() {
    if (!Fn) {
      var t = arguments, o = this;
      t.length === 1 ? e.call(o, t[0]) : e.apply(o, t), Fn = setTimeout(function() {
        Fn = void 0;
      }, n);
    }
  };
}
function Ld() {
  clearTimeout(Fn), Fn = void 0;
}
function Pl(e, n, t) {
  e.scrollLeft += n, e.scrollTop += t;
}
function $l(e) {
  var n = window.Polymer, t = window.jQuery || window.Zepto;
  return n && n.dom ? n.dom(e).cloneNode(!0) : t ? t(e).clone(!0)[0] : e.cloneNode(!0);
}
function Il(e, n, t) {
  var o = {};
  return Array.from(e.children).forEach(function(r) {
    var a, l, i, s;
    if (!(!pt(r, n.draggable, e, !1) || r.animated || r === t)) {
      var u = Re(r);
      o.left = Math.min((a = o.left) !== null && a !== void 0 ? a : 1 / 0, u.left), o.top = Math.min((l = o.top) !== null && l !== void 0 ? l : 1 / 0, u.top), o.right = Math.max((i = o.right) !== null && i !== void 0 ? i : -1 / 0, u.right), o.bottom = Math.max((s = o.bottom) !== null && s !== void 0 ? s : -1 / 0, u.bottom);
    }
  }), o.width = o.right - o.left, o.height = o.bottom - o.top, o.x = o.left, o.y = o.top, o;
}
var Ze = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function Bd() {
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
      e.splice(Md(e, {
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
      e.forEach(function(i) {
        var s = 0, u = i.target, d = u.fromRect, c = Re(u), m = u.prevFromRect, f = u.prevToRect, p = i.rect, v = yn(u, !0);
        v && (c.top -= v.f, c.left -= v.e), u.toRect = c, u.thisAnimationDuration && Uo(m, c) && !Uo(d, c) && // Make sure animatingRect is on line between toRect & fromRect
        (p.top - c.top) / (p.left - c.left) === (d.top - c.top) / (d.left - c.left) && (s = Vd(p, m, f, r.options)), Uo(c, d) || (u.prevFromRect = d, u.prevToRect = c, s || (s = r.options.animation), r.animate(u, p, c, s)), s && (a = !0, l = Math.max(l, s), clearTimeout(u.animationResetTimer), u.animationResetTimer = setTimeout(function() {
          u.animationTime = 0, u.prevFromRect = null, u.fromRect = null, u.prevToRect = null, u.thisAnimationDuration = null;
        }, s), u.thisAnimationDuration = s);
      }), clearTimeout(n), a ? n = setTimeout(function() {
        typeof o == "function" && o();
      }, l) : typeof o == "function" && o(), e = [];
    },
    animate: function(o, r, a, l) {
      if (l) {
        Q(o, "transition", ""), Q(o, "transform", "");
        var i = yn(this.el), s = i && i.a, u = i && i.d, d = (r.left - a.left) / (s || 1), c = (r.top - a.top) / (u || 1);
        o.animatingX = !!d, o.animatingY = !!c, Q(o, "transform", "translate3d(" + d + "px," + c + "px,0)"), this.forRepaintDummy = Nd(o), Q(o, "transition", "transform " + l + "ms" + (this.options.easing ? " " + this.options.easing : "")), Q(o, "transform", "translate3d(0,0,0)"), typeof o.animated == "number" && clearTimeout(o.animated), o.animated = setTimeout(function() {
          Q(o, "transition", ""), Q(o, "transform", ""), o.animated = !1, o.animatingX = !1, o.animatingY = !1;
        }, l);
      }
    }
  };
}
function Nd(e) {
  return e.offsetWidth;
}
function Vd(e, n, t, o) {
  return Math.sqrt(Math.pow(n.top - e.top, 2) + Math.pow(n.left - e.left, 2)) / Math.sqrt(Math.pow(n.top - t.top, 2) + Math.pow(n.left - t.left, 2)) * o.animation;
}
var pn = [], qo = {
  initializeByDefault: !0
}, Kn = {
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
    pn.forEach(function(i) {
      var s = i.pluginName;
      if (!(!n.options[s] && !i.initializeByDefault)) {
        var u = new i(n, t, n.options);
        u.sortable = n, u.options = n.options, n[s] = u, Mt(o, u.defaults);
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
function jd(e) {
  var n = e.sortable, t = e.rootEl, o = e.name, r = e.targetEl, a = e.cloneEl, l = e.toEl, i = e.fromEl, s = e.oldIndex, u = e.newIndex, d = e.oldDraggableIndex, c = e.newDraggableIndex, m = e.originalEvent, f = e.putSortable, p = e.extraEventProperties;
  if (n = n || t && t[Ze], !!n) {
    var v, g = n.options, x = "on" + o.charAt(0).toUpperCase() + o.substr(1);
    window.CustomEvent && !Ft && !qn ? v = new CustomEvent(o, {
      bubbles: !0,
      cancelable: !0
    }) : (v = document.createEvent("Event"), v.initEvent(o, !0, !0)), v.to = l || t, v.from = i || t, v.item = r || t, v.clone = a, v.oldIndex = s, v.newIndex = u, v.oldDraggableIndex = d, v.newDraggableIndex = c, v.originalEvent = m, v.pullMode = f ? f.lastPutMode : void 0;
    var y = _t(_t({}, p), Kn.getEventProperties(o, n));
    for (var h in y)
      v[h] = y[h];
    t && t.dispatchEvent(v), g[x] && g[x].call(n, v);
  }
}
var zd = ["evt"], Je = function(n, t) {
  var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = o.evt, a = Ad(o, zd);
  Kn.pluginEvent.bind(Z)(n, t, _t({
    dragEl: j,
    parentEl: Pe,
    ghostEl: te,
    rootEl: Ce,
    nextEl: tn,
    lastDownEl: lo,
    cloneEl: Ee,
    cloneHidden: Vt,
    dragStarted: In,
    putSortable: je,
    activeSortable: Z.active,
    originalEvent: r,
    oldIndex: gn,
    oldDraggableIndex: Ln,
    newIndex: tt,
    newDraggableIndex: Nt,
    hideGhostForTarget: Fl,
    unhideGhostForTarget: Ll,
    cloneNowHidden: function() {
      Vt = !0;
    },
    cloneNowShown: function() {
      Vt = !1;
    },
    dispatchSortableEvent: function(i) {
      Ye({
        sortable: t,
        name: i,
        originalEvent: r
      });
    }
  }, a));
};
function Ye(e) {
  jd(_t({
    putSortable: je,
    cloneEl: Ee,
    targetEl: j,
    rootEl: Ce,
    oldIndex: gn,
    oldDraggableIndex: Ln,
    newIndex: tt,
    newDraggableIndex: Nt
  }, e));
}
var j, Pe, te, Ce, tn, lo, Ee, Vt, gn, tt, Ln, Nt, to, je, hn = !1, bo = !1, yo = [], Qt, ft, Ko, Yo, ha, ga, In, mn, Bn, Nn = !1, no = !1, io, Ue, Xo = [], cr = !1, wo = [], Mo = typeof document < "u", oo = zr, ba = qn || Ft ? "cssFloat" : "float", Hd = Mo && !Ol && !zr && "draggable" in document.createElement("div"), Al = function() {
  if (Mo) {
    if (Ft)
      return !1;
    var e = document.createElement("x");
    return e.style.cssText = "pointer-events:auto", e.style.pointerEvents === "auto";
  }
}(), Rl = function(n, t) {
  var o = Q(n), r = parseInt(o.width) - parseInt(o.paddingLeft) - parseInt(o.paddingRight) - parseInt(o.borderLeftWidth) - parseInt(o.borderRightWidth), a = kn(n, 0, t), l = kn(n, 1, t), i = a && Q(a), s = l && Q(l), u = i && parseInt(i.marginLeft) + parseInt(i.marginRight) + Re(a).width, d = s && parseInt(s.marginLeft) + parseInt(s.marginRight) + Re(l).width;
  if (o.display === "flex")
    return o.flexDirection === "column" || o.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (o.display === "grid")
    return o.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (a && i.float && i.float !== "none") {
    var c = i.float === "left" ? "left" : "right";
    return l && (s.clear === "both" || s.clear === c) ? "vertical" : "horizontal";
  }
  return a && (i.display === "block" || i.display === "flex" || i.display === "table" || i.display === "grid" || u >= r && o[ba] === "none" || l && o[ba] === "none" && u + d > r) ? "vertical" : "horizontal";
}, Wd = function(n, t, o) {
  var r = o ? n.left : n.top, a = o ? n.right : n.bottom, l = o ? n.width : n.height, i = o ? t.left : t.top, s = o ? t.right : t.bottom, u = o ? t.width : t.height;
  return r === i || a === s || r + l / 2 === i + u / 2;
}, Gd = function(n, t) {
  var o;
  return yo.some(function(r) {
    var a = r[Ze].options.emptyInsertThreshold;
    if (!(!a || Hr(r))) {
      var l = Re(r), i = n >= l.left - a && n <= l.right + a, s = t >= l.top - a && t <= l.bottom + a;
      if (i && s)
        return o = r;
    }
  }), o;
}, Ml = function(n) {
  function t(a, l) {
    return function(i, s, u, d) {
      var c = i.options.group.name && s.options.group.name && i.options.group.name === s.options.group.name;
      if (a == null && (l || c))
        return !0;
      if (a == null || a === !1)
        return !1;
      if (l && a === "clone")
        return a;
      if (typeof a == "function")
        return t(a(i, s, u, d), l)(i, s, u, d);
      var m = (l ? i : s).options.group.name;
      return a === !0 || typeof a == "string" && a === m || a.join && a.indexOf(m) > -1;
    };
  }
  var o = {}, r = n.group;
  (!r || ao(r) != "object") && (r = {
    name: r
  }), o.name = r.name, o.checkPull = t(r.pull, !0), o.checkPut = t(r.put), o.revertClone = r.revertClone, n.group = o;
}, Fl = function() {
  !Al && te && Q(te, "display", "none");
}, Ll = function() {
  !Al && te && Q(te, "display", "");
};
Mo && !Ol && document.addEventListener("click", function(e) {
  if (bo)
    return e.preventDefault(), e.stopPropagation && e.stopPropagation(), e.stopImmediatePropagation && e.stopImmediatePropagation(), bo = !1, !1;
}, !0);
var Zt = function(n) {
  if (j) {
    n = n.touches ? n.touches[0] : n;
    var t = Gd(n.clientX, n.clientY);
    if (t) {
      var o = {};
      for (var r in n)
        n.hasOwnProperty(r) && (o[r] = n[r]);
      o.target = o.rootEl = t, o.preventDefault = void 0, o.stopPropagation = void 0, t[Ze]._onDragOver(o);
    }
  }
}, Ud = function(n) {
  j && j.parentNode[Ze]._isOutsideThisEl(n.target);
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
      return Rl(e, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function(l, i) {
      l.setData("Text", i.textContent);
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
    supportPointer: Z.supportPointer !== !1 && "PointerEvent" in window && (!Mn || zr),
    emptyInsertThreshold: 5
  };
  Kn.initializePlugins(this, e, t);
  for (var o in t)
    !(o in n) && (n[o] = t[o]);
  Ml(n);
  for (var r in this)
    r.charAt(0) === "_" && typeof this[r] == "function" && (this[r] = this[r].bind(this));
  this.nativeDraggable = n.forceFallback ? !1 : Hd, this.nativeDraggable && (this.options.touchStartThreshold = 1), n.supportPointer ? de(e, "pointerdown", this._onTapStart) : (de(e, "mousedown", this._onTapStart), de(e, "touchstart", this._onTapStart)), this.nativeDraggable && (de(e, "dragover", this), de(e, "dragenter", this)), yo.push(this.el), n.store && n.store.get && this.sort(n.store.get(this) || []), Mt(this, Bd());
}
Z.prototype = /** @lends Sortable.prototype */
{
  constructor: Z,
  _isOutsideThisEl: function(n) {
    !this.el.contains(n) && n !== this.el && (mn = null);
  },
  _getDirection: function(n, t) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, n, t, j) : this.options.direction;
  },
  _onTapStart: function(n) {
    if (n.cancelable) {
      var t = this, o = this.el, r = this.options, a = r.preventOnFilter, l = n.type, i = n.touches && n.touches[0] || n.pointerType && n.pointerType === "touch" && n, s = (i || n).target, u = n.target.shadowRoot && (n.path && n.path[0] || n.composedPath && n.composedPath()[0]) || s, d = r.filter;
      if (ec(o), !j && !(/mousedown|pointerdown/.test(l) && n.button !== 0 || r.disabled) && !u.isContentEditable && !(!this.nativeDraggable && Mn && s && s.tagName.toUpperCase() === "SELECT") && (s = pt(s, r.draggable, o, !1), !(s && s.animated) && lo !== s)) {
        if (gn = lt(s), Ln = lt(s, r.draggable), typeof d == "function") {
          if (d.call(this, n, s, this)) {
            Ye({
              sortable: t,
              rootEl: u,
              name: "filter",
              targetEl: s,
              toEl: o,
              fromEl: o
            }), Je("filter", t, {
              evt: n
            }), a && n.preventDefault();
            return;
          }
        } else if (d && (d = d.split(",").some(function(c) {
          if (c = pt(u, c.trim(), o, !1), c)
            return Ye({
              sortable: t,
              rootEl: c,
              name: "filter",
              targetEl: s,
              fromEl: o,
              toEl: o
            }), Je("filter", t, {
              evt: n
            }), !0;
        }), d)) {
          a && n.preventDefault();
          return;
        }
        r.handle && !pt(u, r.handle, o, !1) || this._prepareDragStart(n, i, s);
      }
    }
  },
  _prepareDragStart: function(n, t, o) {
    var r = this, a = r.el, l = r.options, i = a.ownerDocument, s;
    if (o && !j && o.parentNode === a) {
      var u = Re(o);
      if (Ce = a, j = o, Pe = j.parentNode, tn = j.nextSibling, lo = o, to = l.group, Z.dragged = j, Qt = {
        target: j,
        clientX: (t || n).clientX,
        clientY: (t || n).clientY
      }, ha = Qt.clientX - u.left, ga = Qt.clientY - u.top, this._lastX = (t || n).clientX, this._lastY = (t || n).clientY, j.style["will-change"] = "all", s = function() {
        if (Je("delayEnded", r, {
          evt: n
        }), Z.eventCanceled) {
          r._onDrop();
          return;
        }
        r._disableDelayedDragEvents(), !fa && r.nativeDraggable && (j.draggable = !0), r._triggerDragStart(n, t), Ye({
          sortable: r,
          name: "choose",
          originalEvent: n
        }), et(j, l.chosenClass, !0);
      }, l.ignore.split(",").forEach(function(d) {
        _l(j, d.trim(), Jo);
      }), de(i, "dragover", Zt), de(i, "mousemove", Zt), de(i, "touchmove", Zt), l.supportPointer ? (de(i, "pointerup", r._onDrop), !this.nativeDraggable && de(i, "pointercancel", r._onDrop)) : (de(i, "mouseup", r._onDrop), de(i, "touchend", r._onDrop), de(i, "touchcancel", r._onDrop)), fa && this.nativeDraggable && (this.options.touchStartThreshold = 4, j.draggable = !0), Je("delayStart", this, {
        evt: n
      }), l.delay && (!l.delayOnTouchOnly || t) && (!this.nativeDraggable || !(qn || Ft))) {
        if (Z.eventCanceled) {
          this._onDrop();
          return;
        }
        l.supportPointer ? (de(i, "pointerup", r._disableDelayedDrag), de(i, "pointercancel", r._disableDelayedDrag)) : (de(i, "mouseup", r._disableDelayedDrag), de(i, "touchend", r._disableDelayedDrag), de(i, "touchcancel", r._disableDelayedDrag)), de(i, "mousemove", r._delayedDragTouchMoveHandler), de(i, "touchmove", r._delayedDragTouchMoveHandler), l.supportPointer && de(i, "pointermove", r._delayedDragTouchMoveHandler), r._dragStartTimer = setTimeout(s, l.delay);
      } else
        s();
    }
  },
  _delayedDragTouchMoveHandler: function(n) {
    var t = n.touches ? n.touches[0] : n;
    Math.max(Math.abs(t.clientX - this._lastX), Math.abs(t.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    j && Jo(j), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var n = this.el.ownerDocument;
    ue(n, "mouseup", this._disableDelayedDrag), ue(n, "touchend", this._disableDelayedDrag), ue(n, "touchcancel", this._disableDelayedDrag), ue(n, "pointerup", this._disableDelayedDrag), ue(n, "pointercancel", this._disableDelayedDrag), ue(n, "mousemove", this._delayedDragTouchMoveHandler), ue(n, "touchmove", this._delayedDragTouchMoveHandler), ue(n, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(n, t) {
    t = t || n.pointerType == "touch" && n, !this.nativeDraggable || t ? this.options.supportPointer ? de(document, "pointermove", this._onTouchMove) : t ? de(document, "touchmove", this._onTouchMove) : de(document, "mousemove", this._onTouchMove) : (de(j, "dragend", this), de(Ce, "dragstart", this._onDragStart));
    try {
      document.selection ? so(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(n, t) {
    if (hn = !1, Ce && j) {
      Je("dragStarted", this, {
        evt: t
      }), this.nativeDraggable && de(document, "dragover", Ud);
      var o = this.options;
      !n && et(j, o.dragClass, !1), et(j, o.ghostClass, !0), Z.active = this, n && this._appendGhost(), Ye({
        sortable: this,
        name: "start",
        originalEvent: t
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (ft) {
      this._lastX = ft.clientX, this._lastY = ft.clientY, Fl();
      for (var n = document.elementFromPoint(ft.clientX, ft.clientY), t = n; n && n.shadowRoot && (n = n.shadowRoot.elementFromPoint(ft.clientX, ft.clientY), n !== t); )
        t = n;
      if (j.parentNode[Ze]._isOutsideThisEl(n), t)
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
        } while (t = Tl(t));
      Ll();
    }
  },
  _onTouchMove: function(n) {
    if (Qt) {
      var t = this.options, o = t.fallbackTolerance, r = t.fallbackOffset, a = n.touches ? n.touches[0] : n, l = te && yn(te, !0), i = te && l && l.a, s = te && l && l.d, u = oo && Ue && va(Ue), d = (a.clientX - Qt.clientX + r.x) / (i || 1) + (u ? u[0] - Xo[0] : 0) / (i || 1), c = (a.clientY - Qt.clientY + r.y) / (s || 1) + (u ? u[1] - Xo[1] : 0) / (s || 1);
      if (!Z.active && !hn) {
        if (o && Math.max(Math.abs(a.clientX - this._lastX), Math.abs(a.clientY - this._lastY)) < o)
          return;
        this._onDragStart(n, !0);
      }
      if (te) {
        l ? (l.e += d - (Ko || 0), l.f += c - (Yo || 0)) : l = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: d,
          f: c
        };
        var m = "matrix(".concat(l.a, ",").concat(l.b, ",").concat(l.c, ",").concat(l.d, ",").concat(l.e, ",").concat(l.f, ")");
        Q(te, "webkitTransform", m), Q(te, "mozTransform", m), Q(te, "msTransform", m), Q(te, "transform", m), Ko = d, Yo = c, ft = a;
      }
      n.cancelable && n.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!te) {
      var n = this.options.fallbackOnBody ? document.body : Ce, t = Re(j, !0, oo, !0, n), o = this.options;
      if (oo) {
        for (Ue = n; Q(Ue, "position") === "static" && Q(Ue, "transform") === "none" && Ue !== document; )
          Ue = Ue.parentNode;
        Ue !== document.body && Ue !== document.documentElement ? (Ue === document && (Ue = Ot()), t.top += Ue.scrollTop, t.left += Ue.scrollLeft) : Ue = Ot(), Xo = va(Ue);
      }
      te = j.cloneNode(!0), et(te, o.ghostClass, !1), et(te, o.fallbackClass, !0), et(te, o.dragClass, !0), Q(te, "transition", ""), Q(te, "transform", ""), Q(te, "box-sizing", "border-box"), Q(te, "margin", 0), Q(te, "top", t.top), Q(te, "left", t.left), Q(te, "width", t.width), Q(te, "height", t.height), Q(te, "opacity", "0.8"), Q(te, "position", oo ? "absolute" : "fixed"), Q(te, "zIndex", "100000"), Q(te, "pointerEvents", "none"), Z.ghost = te, n.appendChild(te), Q(te, "transform-origin", ha / parseInt(te.style.width) * 100 + "% " + ga / parseInt(te.style.height) * 100 + "%");
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
    Je("setupClone", this), Z.eventCanceled || (Ee = $l(j), Ee.removeAttribute("id"), Ee.draggable = !1, Ee.style["will-change"] = "", this._hideClone(), et(Ee, this.options.chosenClass, !1), Z.clone = Ee), o.cloneId = so(function() {
      Je("clone", o), !Z.eventCanceled && (o.options.removeCloneOnHide || Ce.insertBefore(Ee, j), o._hideClone(), Ye({
        sortable: o,
        name: "clone"
      }));
    }), !t && et(j, a.dragClass, !0), t ? (bo = !0, o._loopId = setInterval(o._emulateDragOver, 50)) : (ue(document, "mouseup", o._onDrop), ue(document, "touchend", o._onDrop), ue(document, "touchcancel", o._onDrop), r && (r.effectAllowed = "move", a.setData && a.setData.call(o, r, j)), de(document, "drop", o), Q(j, "transform", "translateZ(0)")), hn = !0, o._dragStartId = so(o._dragStarted.bind(o, t, n)), de(document, "selectstart", o), In = !0, window.getSelection().removeAllRanges(), Mn && Q(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(n) {
    var t = this.el, o = n.target, r, a, l, i = this.options, s = i.group, u = Z.active, d = to === s, c = i.sort, m = je || u, f, p = this, v = !1;
    if (cr) return;
    function g(ce, oe) {
      Je(ce, p, _t({
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
        onMove: function(We, Be) {
          return ro(Ce, t, j, r, We, Re(We), n, Be);
        },
        changed: h
      }, oe));
    }
    function x() {
      g("dragOverAnimationCapture"), p.captureAnimationState(), p !== m && m.captureAnimationState();
    }
    function y(ce) {
      return g("dragOverCompleted", {
        insertion: ce
      }), ce && (d ? u._hideClone() : u._showClone(p), p !== m && (et(j, je ? je.options.ghostClass : u.options.ghostClass, !1), et(j, i.ghostClass, !0)), je !== p && p !== Z.active ? je = p : p === Z.active && je && (je = null), m === p && (p._ignoreWhileAnimating = o), p.animateAll(function() {
        g("dragOverAnimationComplete"), p._ignoreWhileAnimating = null;
      }), p !== m && (m.animateAll(), m._ignoreWhileAnimating = null)), (o === j && !j.animated || o === t && !o.animated) && (mn = null), !i.dragoverBubble && !n.rootEl && o !== document && (j.parentNode[Ze]._isOutsideThisEl(n.target), !ce && Zt(n)), !i.dragoverBubble && n.stopPropagation && n.stopPropagation(), v = !0;
    }
    function h() {
      tt = lt(j), Nt = lt(j, i.draggable), Ye({
        sortable: p,
        name: "change",
        toEl: t,
        newIndex: tt,
        newDraggableIndex: Nt,
        originalEvent: n
      });
    }
    if (n.preventDefault !== void 0 && n.cancelable && n.preventDefault(), o = pt(o, i.draggable, t, !0), g("dragOver"), Z.eventCanceled) return v;
    if (j.contains(n.target) || o.animated && o.animatingX && o.animatingY || p._ignoreWhileAnimating === o)
      return y(!1);
    if (bo = !1, u && !i.disabled && (d ? c || (l = Pe !== Ce) : je === this || (this.lastPutMode = to.checkPull(this, u, j, n)) && s.checkPut(this, u, j, n))) {
      if (f = this._getDirection(n, o) === "vertical", r = Re(j), g("dragOverValid"), Z.eventCanceled) return v;
      if (l)
        return Pe = Ce, x(), this._hideClone(), g("revert"), Z.eventCanceled || (tn ? Ce.insertBefore(j, tn) : Ce.appendChild(j)), y(!0);
      var k = Hr(t, i.draggable);
      if (!k || Xd(n, f, this) && !k.animated) {
        if (k === j)
          return y(!1);
        if (k && t === n.target && (o = k), o && (a = Re(o)), ro(Ce, t, j, r, o, a, n, !!o) !== !1)
          return x(), k && k.nextSibling ? t.insertBefore(j, k.nextSibling) : t.appendChild(j), Pe = t, h(), y(!0);
      } else if (k && Yd(n, f, this)) {
        var b = kn(t, 0, i, !0);
        if (b === j)
          return y(!1);
        if (o = b, a = Re(o), ro(Ce, t, j, r, o, a, n, !1) !== !1)
          return x(), t.insertBefore(j, b), Pe = t, h(), y(!0);
      } else if (o.parentNode === t) {
        a = Re(o);
        var T = 0, S, _ = j.parentNode !== t, X = !Wd(j.animated && j.toRect || r, o.animated && o.toRect || a, f), P = f ? "top" : "left", V = ma(o, "top", "top") || ma(j, "top", "top"), q = V ? V.scrollTop : void 0;
        mn !== o && (S = a[P], Nn = !1, no = !X && i.invertSwap || _), T = Jd(n, o, a, f, X ? 1 : i.swapThreshold, i.invertedSwapThreshold == null ? i.swapThreshold : i.invertedSwapThreshold, no, mn === o);
        var w;
        if (T !== 0) {
          var $ = lt(j);
          do
            $ -= T, w = Pe.children[$];
          while (w && (Q(w, "display") === "none" || w === te));
        }
        if (T === 0 || w === o)
          return y(!1);
        mn = o, Bn = T;
        var L = o.nextElementSibling, K = !1;
        K = T === 1;
        var ne = ro(Ce, t, j, r, o, a, n, K);
        if (ne !== !1)
          return (ne === 1 || ne === -1) && (K = ne === 1), cr = !0, setTimeout(Kd, 30), x(), K && !L ? t.appendChild(j) : o.parentNode.insertBefore(j, K ? L : o), V && Pl(V, 0, q - V.scrollTop), Pe = j.parentNode, S !== void 0 && !no && (io = Math.abs(S - Re(o)[P])), h(), y(!0);
      }
      if (t.contains(j))
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
    if (tt = lt(j), Nt = lt(j, o.draggable), Je("drop", this, {
      evt: n
    }), Pe = j && j.parentNode, tt = lt(j), Nt = lt(j, o.draggable), Z.eventCanceled) {
      this._nulling();
      return;
    }
    hn = !1, no = !1, Nn = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), fr(this.cloneId), fr(this._dragStartId), this.nativeDraggable && (ue(document, "drop", this), ue(t, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), Mn && Q(document.body, "user-select", ""), Q(j, "transform", ""), n && (In && (n.cancelable && n.preventDefault(), !o.dropBubble && n.stopPropagation()), te && te.parentNode && te.parentNode.removeChild(te), (Ce === Pe || je && je.lastPutMode !== "clone") && Ee && Ee.parentNode && Ee.parentNode.removeChild(Ee), j && (this.nativeDraggable && ue(j, "dragend", this), Jo(j), j.style["will-change"] = "", In && !hn && et(j, je ? je.options.ghostClass : this.options.ghostClass, !1), et(j, this.options.chosenClass, !1), Ye({
      sortable: this,
      name: "unchoose",
      toEl: Pe,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: n
    }), Ce !== Pe ? (tt >= 0 && (Ye({
      rootEl: Pe,
      name: "add",
      toEl: Pe,
      fromEl: Ce,
      originalEvent: n
    }), Ye({
      sortable: this,
      name: "remove",
      toEl: Pe,
      originalEvent: n
    }), Ye({
      rootEl: Pe,
      name: "sort",
      toEl: Pe,
      fromEl: Ce,
      originalEvent: n
    }), Ye({
      sortable: this,
      name: "sort",
      toEl: Pe,
      originalEvent: n
    })), je && je.save()) : tt !== gn && tt >= 0 && (Ye({
      sortable: this,
      name: "update",
      toEl: Pe,
      originalEvent: n
    }), Ye({
      sortable: this,
      name: "sort",
      toEl: Pe,
      originalEvent: n
    })), Z.active && ((tt == null || tt === -1) && (tt = gn, Nt = Ln), Ye({
      sortable: this,
      name: "end",
      toEl: Pe,
      originalEvent: n
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    Je("nulling", this), Ce = j = Pe = te = tn = Ee = lo = Vt = Qt = ft = In = tt = Nt = gn = Ln = mn = Bn = je = to = Z.dragged = Z.ghost = Z.clone = Z.active = null, wo.forEach(function(n) {
      n.checked = !0;
    }), wo.length = Ko = Yo = 0;
  },
  handleEvent: function(n) {
    switch (n.type) {
      case "drop":
      case "dragend":
        this._onDrop(n);
        break;
      case "dragenter":
      case "dragover":
        j && (this._onDragOver(n), qd(n));
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
      t = o[r], pt(t, l.draggable, this.el, !1) && n.push(t.getAttribute(l.dataIdAttr) || Zd(t));
    return n;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(n, t) {
    var o = {}, r = this.el;
    this.toArray().forEach(function(a, l) {
      var i = r.children[l];
      pt(i, this.options.draggable, r, !1) && (o[a] = i);
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
    var r = Kn.modifyOption(this, n, t);
    typeof r < "u" ? o[n] = r : o[n] = t, n === "group" && Ml(o);
  },
  /**
   * Destroy
   */
  destroy: function() {
    Je("destroy", this);
    var n = this.el;
    n[Ze] = null, ue(n, "mousedown", this._onTapStart), ue(n, "touchstart", this._onTapStart), ue(n, "pointerdown", this._onTapStart), this.nativeDraggable && (ue(n, "dragover", this), ue(n, "dragenter", this)), Array.prototype.forEach.call(n.querySelectorAll("[draggable]"), function(t) {
      t.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), yo.splice(yo.indexOf(this.el), 1), this.el = n = null;
  },
  _hideClone: function() {
    if (!Vt) {
      if (Je("hideClone", this), Z.eventCanceled) return;
      Q(Ee, "display", "none"), this.options.removeCloneOnHide && Ee.parentNode && Ee.parentNode.removeChild(Ee), Vt = !0;
    }
  },
  _showClone: function(n) {
    if (n.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (Vt) {
      if (Je("showClone", this), Z.eventCanceled) return;
      j.parentNode == Ce && !this.options.group.revertClone ? Ce.insertBefore(Ee, j) : tn ? Ce.insertBefore(Ee, tn) : Ce.appendChild(Ee), this.options.group.revertClone && this.animate(j, Ee), Q(Ee, "display", ""), Vt = !1;
    }
  }
};
function qd(e) {
  e.dataTransfer && (e.dataTransfer.dropEffect = "move"), e.cancelable && e.preventDefault();
}
function ro(e, n, t, o, r, a, l, i) {
  var s, u = e[Ze], d = u.options.onMove, c;
  return window.CustomEvent && !Ft && !qn ? s = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (s = document.createEvent("Event"), s.initEvent("move", !0, !0)), s.to = n, s.from = e, s.dragged = t, s.draggedRect = o, s.related = r || n, s.relatedRect = a || Re(n), s.willInsertAfter = i, s.originalEvent = l, e.dispatchEvent(s), d && (c = d.call(u, s, l)), c;
}
function Jo(e) {
  e.draggable = !1;
}
function Kd() {
  cr = !1;
}
function Yd(e, n, t) {
  var o = Re(kn(t.el, 0, t.options, !0)), r = Il(t.el, t.options, te), a = 10;
  return n ? e.clientX < r.left - a || e.clientY < o.top && e.clientX < o.right : e.clientY < r.top - a || e.clientY < o.bottom && e.clientX < o.left;
}
function Xd(e, n, t) {
  var o = Re(Hr(t.el, t.options.draggable)), r = Il(t.el, t.options, te), a = 10;
  return n ? e.clientX > r.right + a || e.clientY > o.bottom && e.clientX > o.left : e.clientY > r.bottom + a || e.clientX > o.right && e.clientY > o.top;
}
function Jd(e, n, t, o, r, a, l, i) {
  var s = o ? e.clientY : e.clientX, u = o ? t.height : t.width, d = o ? t.top : t.left, c = o ? t.bottom : t.right, m = !1;
  if (!l) {
    if (i && io < u * r) {
      if (!Nn && (Bn === 1 ? s > d + u * a / 2 : s < c - u * a / 2) && (Nn = !0), Nn)
        m = !0;
      else if (Bn === 1 ? s < d + io : s > c - io)
        return -Bn;
    } else if (s > d + u * (1 - r) / 2 && s < c - u * (1 - r) / 2)
      return Qd(n);
  }
  return m = m || l, m && (s < d + u * a / 2 || s > c - u * a / 2) ? s > d + u / 2 ? 1 : -1 : 0;
}
function Qd(e) {
  return lt(j) < lt(e) ? 1 : -1;
}
function Zd(e) {
  for (var n = e.tagName + e.className + e.src + e.href + e.textContent, t = n.length, o = 0; t--; )
    o += n.charCodeAt(t);
  return o.toString(36);
}
function ec(e) {
  wo.length = 0;
  for (var n = e.getElementsByTagName("input"), t = n.length; t--; ) {
    var o = n[t];
    o.checked && wo.push(o);
  }
}
function so(e) {
  return setTimeout(e, 0);
}
function fr(e) {
  return clearTimeout(e);
}
Mo && de(document, "touchmove", function(e) {
  (Z.active || hn) && e.cancelable && e.preventDefault();
});
Z.utils = {
  on: de,
  off: ue,
  css: Q,
  find: _l,
  is: function(n, t) {
    return !!pt(n, t, n, !1);
  },
  extend: Fd,
  throttle: Dl,
  closest: pt,
  toggleClass: et,
  clone: $l,
  index: lt,
  nextTick: so,
  cancelNextTick: fr,
  detectDirection: Rl,
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
    o.utils && (Z.utils = _t(_t({}, Z.utils), o.utils)), Kn.mount(o);
  });
};
Z.create = function(e, n) {
  return new Z(e, n);
};
Z.version = Rd;
var Ae = [], An, pr, mr = !1, Qo, Zo, xo, Rn;
function tc() {
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
      this.sortable.nativeDraggable ? ue(document, "dragover", this._handleAutoScroll) : (ue(document, "pointermove", this._handleFallbackAutoScroll), ue(document, "touchmove", this._handleFallbackAutoScroll), ue(document, "mousemove", this._handleFallbackAutoScroll)), ya(), uo(), Ld();
    },
    nulling: function() {
      xo = pr = An = mr = Rn = Qo = Zo = null, Ae.length = 0;
    },
    _handleFallbackAutoScroll: function(t) {
      this._handleAutoScroll(t, !0);
    },
    _handleAutoScroll: function(t, o) {
      var r = this, a = (t.touches ? t.touches[0] : t).clientX, l = (t.touches ? t.touches[0] : t).clientY, i = document.elementFromPoint(a, l);
      if (xo = t, o || this.options.forceAutoScrollFallback || qn || Ft || Mn) {
        er(t, this.options, i, o);
        var s = zt(i, !0);
        mr && (!Rn || a !== Qo || l !== Zo) && (Rn && ya(), Rn = setInterval(function() {
          var u = zt(document.elementFromPoint(a, l), !0);
          u !== s && (s = u, uo()), er(t, r.options, u, o);
        }, 10), Qo = a, Zo = l);
      } else {
        if (!this.options.bubbleScroll || zt(i, !0) === Ot()) {
          uo();
          return;
        }
        er(t, this.options, zt(i, !1), !1);
      }
    }
  }, Mt(e, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function uo() {
  Ae.forEach(function(e) {
    clearInterval(e.pid);
  }), Ae = [];
}
function ya() {
  clearInterval(Rn);
}
var er = Dl(function(e, n, t, o) {
  if (n.scroll) {
    var r = (e.touches ? e.touches[0] : e).clientX, a = (e.touches ? e.touches[0] : e).clientY, l = n.scrollSensitivity, i = n.scrollSpeed, s = Ot(), u = !1, d;
    pr !== t && (pr = t, uo(), An = n.scroll, d = n.scrollFn, An === !0 && (An = zt(t, !0)));
    var c = 0, m = An;
    do {
      var f = m, p = Re(f), v = p.top, g = p.bottom, x = p.left, y = p.right, h = p.width, k = p.height, b = void 0, T = void 0, S = f.scrollWidth, _ = f.scrollHeight, X = Q(f), P = f.scrollLeft, V = f.scrollTop;
      f === s ? (b = h < S && (X.overflowX === "auto" || X.overflowX === "scroll" || X.overflowX === "visible"), T = k < _ && (X.overflowY === "auto" || X.overflowY === "scroll" || X.overflowY === "visible")) : (b = h < S && (X.overflowX === "auto" || X.overflowX === "scroll"), T = k < _ && (X.overflowY === "auto" || X.overflowY === "scroll"));
      var q = b && (Math.abs(y - r) <= l && P + h < S) - (Math.abs(x - r) <= l && !!P), w = T && (Math.abs(g - a) <= l && V + k < _) - (Math.abs(v - a) <= l && !!V);
      if (!Ae[c])
        for (var $ = 0; $ <= c; $++)
          Ae[$] || (Ae[$] = {});
      (Ae[c].vx != q || Ae[c].vy != w || Ae[c].el !== f) && (Ae[c].el = f, Ae[c].vx = q, Ae[c].vy = w, clearInterval(Ae[c].pid), (q != 0 || w != 0) && (u = !0, Ae[c].pid = setInterval((function() {
        o && this.layer === 0 && Z.active._onTouchMove(xo);
        var L = Ae[this.layer].vy ? Ae[this.layer].vy * i : 0, K = Ae[this.layer].vx ? Ae[this.layer].vx * i : 0;
        typeof d == "function" && d.call(Z.dragged.parentNode[Ze], K, L, e, xo, Ae[this.layer].el) !== "continue" || Pl(Ae[this.layer].el, K, L);
      }).bind({
        layer: c
      }), 24))), c++;
    } while (n.bubbleScroll && m !== s && (m = zt(m, !1)));
    mr = u;
  }
}, 30), Bl = function(n) {
  var t = n.originalEvent, o = n.putSortable, r = n.dragEl, a = n.activeSortable, l = n.dispatchSortableEvent, i = n.hideGhostForTarget, s = n.unhideGhostForTarget;
  if (t) {
    var u = o || a;
    i();
    var d = t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t, c = document.elementFromPoint(d.clientX, d.clientY);
    s(), u && !u.el.contains(c) && (l("spill"), this.onSpill({
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
  drop: Bl
};
Mt(Wr, {
  pluginName: "revertOnSpill"
});
function Gr() {
}
Gr.prototype = {
  onSpill: function(n) {
    var t = n.dragEl, o = n.putSortable, r = o || this.sortable;
    r.captureAnimationState(), t.parentNode && t.parentNode.removeChild(t), r.animateAll();
  },
  drop: Bl
};
Mt(Gr, {
  pluginName: "removeOnSpill"
});
Z.mount(new tc());
Z.mount(Gr, Wr);
const vr = /* @__PURE__ */ H({
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
    const o = e, r = t, a = Ul(), l = C(!1), i = C(null), s = C(null), u = E(() => typeof o.itemKey == "string" ? (d) => d[o.itemKey] : o.itemKey);
    return n({
      containerRef: i,
      sortable: s,
      isDragging: l
    }), le(i, (d) => {
      d && (s.value = new Z(d, {
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
    }), le(
      () => o.options,
      (d) => {
        if (d && (s != null && s.value))
          for (const c in d)
            s.value.option(
              c,
              d[c]
            );
      }
    ), we(() => {
      s.value && (s.value.destroy(), i.value = null, s.value = null);
    }), (d, c) => (O(), fe(ql(d.$props.tag), {
      ref_key: "containerRef",
      ref: i,
      class: z(d.$props.class)
    }, {
      default: U(() => [
        Y(d.$slots, "header"),
        (O(!0), M(xe, null, Ke(e.list, (m, f) => Y(d.$slots, "item", {
          key: u.value(m),
          element: m,
          index: f
        })), 128)),
        Y(d.$slots, "footer")
      ]),
      _: 3
    }, 8, ["class"]));
  }
});
function nc(e) {
  return e.reduce((n, t) => {
    const o = t.group || "Default";
    return n[o] || (n[o] = []), n[o].push(t), n;
  }, {});
}
function en(e) {
  return Object.values(e).flat();
}
const oc = { class: "flex flex-col space-y-4" }, rc = { class: "space-y-2" }, ac = { class: "space-y-2" }, lc = { class: "flex justify-end" }, ic = /* @__PURE__ */ H({
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
      (i) => {
        r.value = {
          ...i,
          id: t.groupId
        };
      },
      { deep: !0 }
    );
    const l = (i) => {
      i();
      const s = {
        ...r.value,
        id: t.groupId
      };
      o("update:modelValue", s), o("update", t.groupId);
    };
    return (i, s) => !i.disabled.includes("groups") && r.value ? (O(), fe(ad, {
      key: 0,
      ref_key: "popover",
      ref: a,
      theme: {
        popoverMenu: "leading-none",
        popoverMenuButton: "rounded-md size-6 flex items-center justify-center hover:bg-zinc-100"
      }
    }, {
      trigger: U(() => [
        I("span", {
          class: "block h-3 w-3 rounded-full",
          style: Gt(`background-color: ${r.value.color || i.defaultGroupColor};`)
        }, null, 4)
      ]),
      default: U(({ close: u }) => [
        I("div", oc, [
          I("div", rc, [
            s[2] || (s[2] = I("div", { class: "block text-sm font-medium text-foreground" }, " Group name ", -1)),
            W(_a, {
              modelValue: r.value.name,
              "onUpdate:modelValue": s[0] || (s[0] = (d) => r.value.name = d),
              type: "text",
              placeholder: `${r.value.name}`,
              theme: {
                input: "py-1.5"
              }
            }, null, 8, ["modelValue", "placeholder"])
          ]),
          I("div", ac, [
            s[3] || (s[3] = I("div", { class: "block text-sm font-medium text-foreground" }, " Group color ", -1)),
            W(Nu, {
              "model-value": r.value.color,
              "onUpdate:modelValue": s[1] || (s[1] = (d) => r.value.color = d)
            }, null, 8, ["model-value"])
          ]),
          I("div", lc, [
            W(ot, {
              onClick: (d) => l(u),
              size: "sm",
              variant: "outline"
            }, {
              default: U(() => s[4] || (s[4] = [
                Wt(" Save ")
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
}), sc = ["id"], uc = { class: "mb-4 last:mb-0" }, dc = { class: "sortable-drag flex min-w-px grow items-center space-x-2 text-base" }, cc = {
  key: 0,
  class: "shrink-0 text-sm"
}, fc = { key: 1 }, pc = ["data-sortable-item-id"], mc = { class: "ml-auto flex items-center space-x-1 p-1" }, vc = { class: "flex -space-x-px" }, zf = /* @__PURE__ */ H({
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
    pe(
      "componentJarTheme"
    );
    const a = C({ Default: [] }), l = C({}), i = C(!1), s = C(), u = C(r.focusedColumn), d = C(""), c = C([]), m = C((Math.random() + 1).toString(36).substring(7)), f = C(!1);
    C({
      id: "",
      name: "",
      color: ""
    }), le(
      () => r.focusedColumn,
      (w) => {
        u.value = w;
      },
      { immediate: !0 }
    );
    const p = E({
      get: () => u.value,
      set: (w) => {
        u.value = w, o("update:focusedColumn", w);
      }
    });
    function v() {
      return `group_${Math.random().toString(36).substring(2, 9)}`;
    }
    le(
      () => r.existingColumns,
      (w) => {
        a.value = w.length === 0 ? {
          Default: []
        } : nc([...w]);
      },
      { immediate: !0 }
    ), le(
      () => r.groupConfiguration,
      () => {
        const w = {};
        Object.entries(r.groupConfiguration).forEach(([$, L]) => {
          const K = L.id || $;
          w[K] = {
            ...L,
            id: K
            // Ensure ID is set
          };
        }), l.value = w;
      },
      { immediate: !0, deep: !0 }
    ), le(
      () => l.value,
      (w) => {
        Object.entries(w).forEach(([$, L]) => {
          L.id || (L.id = $);
        });
      },
      { deep: !0 }
    );
    function g(w) {
      console.log("clicked list item", w.currentTarget);
    }
    function x(w) {
      const $ = l.value[w];
      if (!$) return;
      const L = l.value[w];
      if (L) {
        if (l.value[w] = {
          ...L,
          id: w
          // Ensure we keep the original ID
        }, $.name !== L.name) {
          const K = a.value[$.name] || [];
          delete a.value[$.name], a.value[L.name] = K.map((ne) => ({
            ...ne,
            group: L.name
          }));
        }
        o("update:groupConfiguration", l.value), o("update:existingColumns", en(a.value));
      }
    }
    function y(w, $) {
      const L = a.value[w][$];
      u.value && u.value.id === L.id && (p.value = null), a.value = {
        ...a.value,
        [w]: a.value[w].filter(
          (K, ne) => ne !== $
        )
      }, o("update:existingColumns", en(a.value));
    }
    function h() {
      const w = v(), $ = d.value;
      a.value = {
        ...a.value,
        [w]: []
      }, l.value[w] = {
        id: w,
        name: $,
        color: r.defaultGroupColor
      }, d.value = "", i.value = !1, setTimeout(() => {
        const L = document.getElementById(
          `column-manager-groups-container-${m.value}`
        );
        L && L.scrollTo({
          top: L.scrollHeight,
          behavior: "smooth"
        });
      }, 250);
    }
    function k(w) {
      const $ = l.value[w];
      $ && (delete a.value[$.name], delete l.value[w], o("update:existingColumns", en(a.value)), o("update:groupConfiguration", l.value));
    }
    function b(w) {
      a.value = {
        ...a.value,
        [w]: []
      }, c.value.includes(w) || c.value.push(w);
    }
    function T(w, $) {
      const L = $.splice(w.oldIndex, 1)[0];
      return $.splice(Math.min(w.newIndex, $.length), 0, L), $;
    }
    function S(w, $) {
      a.value[w] = T(
        $,
        a.value[w]
      ), o("update:existingColumns", en(a.value));
    }
    function _(w) {
    }
    function X(w, $) {
      const L = $.from.dataset.groupName || "Default", K = V($).from.map(
        (ne) => a.value[L][ne]
      ).map((ne) => ({ ...ne, group: w }));
      a.value[w].splice(
        V($).to[0],
        0,
        ...K
      ), o("update:existingColumns", en(a.value));
    }
    function P(w, $) {
      a.value[w].splice($.oldIndex, 1), o("update:existingColumns", en(a.value));
    }
    function V(w) {
      var $, L, K;
      return {
        domElements: ($ = w.items) != null && $.length ? w.items : [w.item],
        from: (L = w.oldIndicies) != null && L.length ? w.oldIndicies.map((ne) => ne.index) : [w.oldIndex],
        to: (K = w.newIndicies) != null && K.length ? w.newIndicies.map((ne) => ne.index) : [w.newIndex]
      };
    }
    function q(w, $) {
      console.log("onPickedNewColumn", a.value, w, $), $ && ($.group = w, a.value = {
        ...a.value,
        [w]: [...a.value[w], $]
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
          onClick: (w) => {
            b(w.groupName);
          }
        },
        r.disabled.includes("groups") ? !1 : {
          icon: "fa-trash",
          label: "Remove group",
          onClick: (w) => {
            Object.entries(
              a.value
            ).length <= 1 || k(w.groupId);
          }
        }
      ].filter(Boolean)
    ), n({
      clearAllColumns: b,
      onPickedNewColumn: q,
      removeGroup: k
    }), (w, $) => (O(), M("div", {
      class: z(
        F(me)(
          "w-full overflow-hidden h-full border border-border bg-background rounded-lg sm:min-w-60 flex flex-col md:flex-row",
          w.theme.columnManagerContainer
        )
      )
    }, [
      Object.values(l.value).length === 0 ? (O(), fe(Go, {
        key: 0,
        icon: "fa-exclamation-circle",
        title: "Nothing here, yet"
      }, {
        default: U(() => $[6] || ($[6] = [
          I("p", null, "There are no groups here yet. Add a new group to get started.", -1)
        ])),
        _: 1,
        __: [6]
      })) : ae("", !0),
      I("div", {
        id: `column-manager-groups-container-${m.value}`,
        class: z(
          F(me)("overflow-y-auto h-full", w.theme.columnManagerGroupsContainer)
        )
      }, [
        (O(), fe(F(vr), {
          list: Object.values(l.value).filter(
            (L) => L.name
          ),
          key: "groups",
          "item-key": "id",
          tag: "div",
          class: z(F(me)("p-3", w.theme.columnManagerGroupContainer)),
          "data-group-name": "groups",
          options: {
            animation: 150,
            group: "shared-groups",
            handle: ".drag-handle",
            selectedClass: "selected"
          },
          onStart: $[0] || ($[0] = (L) => f.value = !0),
          onEnd: $[1] || ($[1] = (L) => f.value = !1),
          onUpdate: $[2] || ($[2] = (L) => void 0)
        }, {
          item: U(({ element: L }) => [
            I("div", uc, [
              I("div", {
                class: z(F(me)(w.theme.columnManagerGroupHeader))
              }, [
                I("div", dc, [
                  w.disabled.includes("groups") ? ae("", !0) : Y(w.$slots, "drag-handle", { key: 0 }),
                  W(ic, {
                    modelValue: l.value[L.id],
                    "onUpdate:modelValue": (K) => l.value[L.id] = K,
                    "default-group-color": w.defaultGroupColor,
                    disabled: w.disabled,
                    "group-id": L.id,
                    onUpdate: x
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "default-group-color", "disabled", "group-id"]),
                  I("span", {
                    class: z(["font-semibold", w.theme.columnManagerGroupLabel])
                  }, he(l.value[L.id].name), 3)
                ]),
                w.groupMenuItems ? (O(), M("span", cc)) : ae("", !0)
              ], 2),
              f.value ? ae("", !0) : (O(), M("div", {
                key: 0,
                class: z(
                  F(me)(
                    "group flex items-center justify-end space-x-2 py-2 ",
                    w.theme.typeaheadContainer
                  )
                )
              }, [
                W(Sl, {
                  ref_key: "columnFinderTypeahead",
                  ref: s,
                  "default-items": w.defaultItems,
                  "display-property": () => "",
                  "groups-config": w.typeaheadGroupsConfig,
                  "group-by": w.typeaheadGroupBy,
                  multiple: !1,
                  nullable: !0,
                  searcher: w.searcher,
                  "middleware-options": w.typeaheadMiddlewareOptions,
                  placeholder: "Add a column to group",
                  "onUpdate:modelValue": (K) => q(
                    L.id,
                    K
                  )
                }, Kl({
                  empty: U(() => [
                    W(Go, {
                      icon: "fa-exclamation-circle",
                      title: "No columns found"
                    }, {
                      default: U(() => $[7] || ($[7] = [
                        I("p", null, " There are no columns to show at this time. Try a different search. ", -1)
                      ])),
                      _: 1,
                      __: [7]
                    })
                  ]),
                  static: U(() => [
                    I("div", null, [
                      Y(w.$slots, "typeahead-static")
                    ])
                  ]),
                  item: U(({ item: K, selected: ne, active: ce }) => [
                    Y(w.$slots, "option", Ct(Ht({ item: K, selected: ne, active: ce })))
                  ]),
                  _: 2
                }, [
                  w.$slots["typeahead-group"] ? {
                    name: "group",
                    fn: U((K) => [
                      Y(w.$slots, "typeahead-group", Ct(Ht(K)))
                    ]),
                    key: "0"
                  } : void 0,
                  w.$slots["typeahead-searching"] ? {
                    name: "searching",
                    fn: U(() => [
                      I("div", null, [
                        Y(w.$slots, "typeahead-searching")
                      ])
                    ]),
                    key: "1"
                  } : void 0
                ]), 1032, ["default-items", "groups-config", "group-by", "searcher", "middleware-options", "onUpdate:modelValue"])
              ], 2)),
              !f.value && (a.value[L.id] || []).length === 0 ? (O(), M("div", fc, [
                W(Go, {
                  title: "No columns",
                  description: "There are no columns here yet. Use the picker above to add the first column."
                }, {
                  default: U(() => $[8] || ($[8] = [
                    I("p", null, " There are no columns here yet. Use the picker above to add the first column. ", -1)
                  ])),
                  _: 1,
                  __: [8]
                })
              ])) : ae("", !0),
              f.value ? ae("", !0) : (O(), fe(F(vr), {
                list: a.value[L.id],
                key: JSON.stringify(a.value[L.id]),
                "item-key": "id",
                tag: "div",
                class: z([`sortable-group-${L.id}`]),
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
                onRemove: (K) => P(L.id, K),
                onUpdate: (K) => S(L.id, K)
              }, {
                item: U(({ element: K, index: ne }) => [
                  (O(), M("div", {
                    class: z(["group flex w-full hover:bg-accent/50 rounded-md items-center gap-2 [&.selected]:bg-accent/50", F(me)(w.theme.columnManagerItem)]),
                    key: K.id,
                    "data-sortable-item-id": K.id,
                    onClick: g
                  }, [
                    Y(w.$slots, "drag-handle", {}, () => [
                      W(ot, {
                        variant: "ghost",
                        size: "xs",
                        icon: "",
                        class: "drag-handle shrink-0 text-muted-foreground/70 hover:text-foreground rounded-sm hover:bg-black/5"
                      }, {
                        default: U(() => [
                          W(F(mi), { class: "size-3.5 shrink-0" })
                        ]),
                        _: 1
                      })
                    ]),
                    Y(w.$slots, "column", Ct(Ht({ element: K }))),
                    I("div", mc, [
                      W(ot, {
                        onClick: wn((ce) => y(
                          L.id,
                          ne
                        ), ["prevent", "stop"]),
                        variant: "ghost",
                        size: "xs",
                        icon: "",
                        class: "shrink-0 rounded-sm text-muted-foreground/70 hover:text-foreground hover:bg-black/5"
                      }, {
                        default: U(() => [
                          W(F(gr), { class: "size-4 shrink-0" })
                        ]),
                        _: 2
                      }, 1032, ["onClick"]),
                      W(ot, {
                        onClick: wn((ce) => p.value.value = a.value[L.id][ne], ["prevent", "stop"]),
                        variant: "ghost",
                        size: "xs",
                        icon: "",
                        class: "shrink-0 rounded-sm text-muted-foreground/70 hover:text-foreground hover:bg-black/5"
                      }, {
                        default: U(() => [
                          W(F(pi), { class: "size-4 shrink-0" })
                        ]),
                        _: 2
                      }, 1032, ["onClick"])
                    ])
                  ], 10, pc))
                ]),
                _: 2
              }, 1032, ["list", "class", "data-group-name", "onAdd", "onRemove", "onUpdate"]))
            ])
          ]),
          _: 3
        }, 8, ["list", "class"])),
        w.disabled.includes("groups") ? ae("", !0) : (O(), M("div", {
          key: 0,
          class: z(["sticky bottom-0 z-2 flex items-center gap-2 p-3 bg-background/90 backdrop-blur-sm", F(me)(w.theme.columnManagerNewGroupContainer)])
        }, [
          W(it, {
            "enter-active-class": "transition duration-200 ease-out",
            "enter-from-class": "translate-y-1 opacity-0",
            "enter-to-class": "translate-y-0 opacity-100",
            "leave-active-class": "transition duration-150 ease-in",
            "leave-from-class": "translate-y-0 opacity-100",
            "leave-to-class": "translate-y-1 opacity-0"
          }, {
            default: U(() => [
              on(I("span", vc, [
                W(_a, {
                  id: "column-manager-new-group-name",
                  name: "column-manager-new-group-name",
                  placeholder: "New group name",
                  modelValue: d.value,
                  "onUpdate:modelValue": $[3] || ($[3] = (L) => d.value = L),
                  onKeyup: $[4] || ($[4] = Ea((L) => h(), ["enter"])),
                  theme: {
                    input: "w-full py-1.5"
                  },
                  type: "text"
                }, null, 8, ["modelValue"])
              ], 512), [
                [rn, i.value]
              ])
            ]),
            _: 1
          }),
          W(ot, {
            onClick: $[5] || ($[5] = (L) => i.value = !i.value),
            theme: { button: w.theme.addGroupButton },
            size: "sm",
            variant: "outline"
          }, {
            default: U(() => [
              Wt(he(i.value ? "Cancel" : "Add a group"), 1)
            ]),
            _: 1
          }, 8, ["theme"])
        ], 2))
      ], 10, sc),
      Y(w.$slots, "default")
    ], 2));
  }
});
function hc(e, n) {
  return O(), M("svg", {
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
function gc(e, n) {
  return O(), M("svg", {
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
function wa(e, n) {
  return O(), M("svg", {
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
const bc = { class: "ml-2 grow min-w-px text-left" }, yc = { class: "ml-6 rounded border px-2 py-0.5 text-xs bg-card hidden sm:inline-block" }, wc = { class: "fixed inset-0 bg-background/50 backdrop-blur-sm" }, xc = { class: "fixed inset-0 overflow-y-auto" }, kc = { class: "flex min-h-full items-start justify-center p-4 pt-16 sm:items-center sm:pt-4" }, Cc = { class: "w-[calc(100vw-2rem)] sm:w-[400px] transform overflow-hidden rounded-2xl bg-card p-0 shadow-2xl border transition-all max-h-[calc(100vh-8rem)] sm:max-h-[calc(100vh-4rem)] flex flex-col" }, Sc = { class: "text-xs font-medium text-muted-foreground my-2 px-3" }, Oc = { class: "space-y-0.5" }, Ec = ["href"], Tc = { class: "text-muted-foreground group-hover:text-primary transition" }, _c = { class: "flex-1 min-w-0" }, Dc = { class: "text-sm text-foreground truncate" }, Pc = {
  key: 1,
  class: "py-4 text-center text-sm text-muted-foreground flex-1 flex items-center justify-center"
}, $c = { class: "border-t px-4 py-3 flex items-center gap-2 bg-card rounded-b-2xl flex-shrink-0" }, Ic = { class: "rounded border text-muted-foreground size-5 flex items-center justify-center text-xs bg-card hidden sm:flex" }, Ac = { class: "text-xs text-muted-foreground" }, Hf = /* @__PURE__ */ H({
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
    }, i = (u) => {
      console.log("onSelect", u), t.value = !1, o.value = "", r.value = n.defaultResults;
    }, s = () => {
      t.value = !0;
    };
    return se(() => {
      window.addEventListener("keydown", a), r.value = n.defaultResults;
    }), we(() => {
      window.removeEventListener("keydown", a);
    }), (u, d) => (O(), fe(F(Rr), { "onUpdate:modelValue": i }, {
      default: U(() => [
        W(F(Mr), {
          as: "span",
          onClick: s
        }, {
          default: U(() => [
            W(ot, {
              variant: "outline",
              class: "w-full pr-2 pl-3"
            }, {
              default: U(() => [
                W(F(wa), { class: "size-4 shrink-0" }),
                I("span", bc, he(u.placeholder), 1),
                I("kbd", yc, he(u.keyboardShortcut), 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        W(it, {
          "enter-active-class": "ease-out duration-300",
          "enter-from-class": "opacity-0",
          "enter-to-class": "opacity-100",
          "leave-active-class": "ease-in duration-200",
          "leave-from-class": "opacity-100",
          "leave-to-class": "opacity-0"
        }, {
          default: U(() => [
            on(I("div", {
              class: "fixed inset-0 z-50",
              onClick: d[2] || (d[2] = (c) => t.value = !1)
            }, [
              W(it, {
                "enter-active-class": "ease-out duration-300",
                "enter-from-class": "opacity-0",
                "enter-to-class": "opacity-100",
                "leave-active-class": "ease-in duration-200",
                "leave-from-class": "opacity-100",
                "leave-to-class": "opacity-0"
              }, {
                default: U(() => [
                  on(I("div", wc, null, 512), [
                    [rn, t.value]
                  ])
                ]),
                _: 1
              }),
              I("div", xc, [
                I("div", kc, [
                  W(it, {
                    "enter-active-class": "ease-out duration-300",
                    "enter-from-class": "opacity-0 scale-95",
                    "enter-to-class": "opacity-100 scale-100",
                    "leave-active-class": "ease-in duration-200",
                    "leave-from-class": "opacity-100 scale-100",
                    "leave-to-class": "opacity-0 scale-95"
                  }, {
                    default: U(() => [
                      on(I("div", Cc, [
                        I("div", {
                          class: "relative border-b px-2 pt-2 pb-2 flex-shrink-0",
                          onClick: d[1] || (d[1] = wn(() => {
                          }, ["stop"]))
                        }, [
                          W(F(wa), { class: "pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" }),
                          W(F(Fr), {
                            modelValue: o.value,
                            "onUpdate:modelValue": d[0] || (d[0] = (c) => o.value = c),
                            placeholder: u.inputPlaceholder,
                            autofocus: "",
                            type: "text",
                            onChange: l,
                            class: "flex w-full rounded-md border border-border bg-background pr-3 pl-9 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground/70 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring transition-[box-shadow,color] disabled:cursor-not-allowed disabled:opacity-50"
                          }, null, 8, ["modelValue", "placeholder"])
                        ]),
                        r.value.length > 0 ? (O(), fe(F(Lr), {
                          key: 0,
                          static: "",
                          class: "px-2 pt-2 pb-4 flex-1 overflow-y-auto"
                        }, {
                          default: U(() => [
                            I("div", Sc, he(o.value ? u.resultsLabel : u.defaultResultsLabel), 1),
                            I("div", Oc, [
                              (O(!0), M(xe, null, Ke(r.value, (c) => (O(), fe(F(zn), {
                                key: c.id,
                                value: c
                              }, {
                                default: U(({ active: m, selected: f }) => [
                                  I("a", {
                                    href: c.url,
                                    class: z(["flex items-center gap-3 px-3 py-2 sm:py-1.5 hover:bg-accent/80 transition group rounded-md touch-manipulation", {
                                      "bg-accent": f || m
                                    }])
                                  }, [
                                    I("span", Tc, [
                                      W(F(hc), { class: "size-4 shrink-0" })
                                    ]),
                                    I("div", _c, [
                                      I("div", Dc, he(c.title), 1)
                                    ])
                                  ], 10, Ec)
                                ]),
                                _: 2
                              }, 1032, ["value"]))), 128))
                            ])
                          ]),
                          _: 1
                        })) : o.value ? (O(), M("div", Pc, he(u.noResultsText), 1)) : ae("", !0),
                        I("div", $c, [
                          I("kbd", Ic, [
                            W(F(gc), { class: "size-3" })
                          ]),
                          I("span", Ac, he(u.footerText), 1)
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
}), Rc = { class: "z-51 fixed inset-0 overflow-y-auto" }, Mc = { class: "flex min-h-full items-center justify-center p-4 text-center" }, Fc = { class: "space-y-4" }, Lc = { class: "mt-2 grow" }, Bc = { class: "text-sm text-[var(--muted-foreground)]" }, Nc = {
  key: 0,
  class: "flex items-center justify-end space-x-2 pt-4"
}, Vc = {
  key: 1,
  class: "flex items-center justify-center py-4"
}, Wf = /* @__PURE__ */ H({
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
      await o.onConfirm(), s();
    }
    async function i() {
      await o.onCancel(), s();
    }
    function s() {
      r("update:modelValue", !1);
    }
    function u() {
      r("update:modelValue", !0);
    }
    return n({
      closeModal: s,
      openModal: u
    }), (d, c) => (O(), fe(F(Cl), {
      appear: "",
      show: d.modelValue,
      as: "template"
    }, {
      default: U(() => [
        W(F(su), {
          as: "div",
          onClose: s,
          class: "relative"
        }, {
          default: U(() => [
            W(F(dr), {
              as: "template",
              enter: "duration-300 ease-out",
              "enter-from": "opacity-0",
              "enter-to": "opacity-100",
              leave: "duration-200 ease-in",
              "leave-from": "opacity-100",
              "leave-to": "opacity-0"
            }, {
              default: U(() => c[0] || (c[0] = [
                I("div", { class: "z-50 fixed inset-0 bg-primary/10" }, null, -1)
              ])),
              _: 1,
              __: [0]
            }),
            I("div", Rc, [
              I("div", Mc, [
                W(F(dr), {
                  as: "template",
                  enter: "duration-300 ease-out",
                  "enter-from": "opacity-0 scale-95",
                  "enter-to": "opacity-100 scale-100",
                  leave: "duration-200 ease-in",
                  "leave-from": "opacity-100 scale-100",
                  "leave-to": "opacity-0 scale-95"
                }, {
                  default: U(() => [
                    W(F(uu), { class: "w-full max-w-md transform overflow-hidden rounded-lg bg-[var(--card)] ring-1 ring-[var(--border)] p-6 text-left align-middle shadow-xl transition-all duration-300" }, {
                      default: U(() => [
                        I("div", Fc, [
                          W(F(du), {
                            as: "h3",
                            class: "text-lg font-medium leading-6 text-[var(--card-foreground)]"
                          }, {
                            default: U(() => [
                              Wt(he(d.title), 1)
                            ]),
                            _: 1
                          }),
                          I("div", Lc, [
                            I("p", Bc, he(d.description), 1)
                          ]),
                          d.processing ? (O(), M("div", Vc, [
                            Y(d.$slots, "processing")
                          ])) : (O(), M("div", Nc, [
                            W(ot, {
                              size: "sm",
                              variant: "ghost",
                              onClick: i
                            }, {
                              default: U(() => [
                                Wt(he(d.cancelButtonText), 1)
                              ]),
                              _: 1
                            }),
                            W(ot, {
                              size: "sm",
                              variant: "default",
                              onClick: l
                            }, {
                              default: U(() => [
                                Wt(he(d.confirmButtonText), 1)
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
}), jc = { class: "flex items-center gap-2" }, zc = /* @__PURE__ */ H({
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
    }), i = E({
      get: () => c.find((f) => f.id === t.modelValue.operator),
      set: (f) => {
        const p = f && typeof f == "object" && "id" in f ? f.id : f;
        o("update:modelValue", {
          ...t.modelValue,
          operator: p
        });
      }
    }), s = E({
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
    const d = E(() => [...u.value || []]);
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
    const c = [
      { id: "does", label: "does" },
      { id: "doesnt", label: "doesn't" }
    ], m = [
      { id: "equal", label: "equal" },
      { id: "contain", label: "contain" }
    ];
    return (f, p) => {
      var v;
      return O(), M("div", jc, [
        W(Sl, {
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
        W(Wo, {
          modelValue: i.value,
          "onUpdate:modelValue": p[1] || (p[1] = (g) => i.value = g),
          items: c,
          "display-property": (g) => g.label,
          placeholder: "Select operator...",
          class: "self-start w-32 shrink-0"
        }, null, 8, ["modelValue", "display-property"]),
        W(Wo, {
          modelValue: s.value,
          "onUpdate:modelValue": p[2] || (p[2] = (g) => s.value = g),
          items: m,
          "display-property": (g) => g.label,
          placeholder: "Select comparison...",
          class: "self-start w-32 shrink-0"
        }, null, 8, ["modelValue", "display-property"]),
        W(Wo, {
          modelValue: u.value,
          "onUpdate:modelValue": p[3] || (p[3] = (g) => u.value = g),
          items: (v = l.value) == null ? void 0 : v.defaultValuesGetter(),
          "display-property": a,
          "disabled-items": d.value,
          placeholder: "Select values...",
          class: "self-start grow min-w-64",
          multiple: !0,
          nullable: !0
        }, null, 8, ["modelValue", "items", "disabled-items"]),
        f.showRemove ? (O(), fe(ot, {
          key: 0,
          onClick: p[4] || (p[4] = (g) => f.$emit("remove")),
          class: "text-destructive hover:bg-destructive/80 hover:text-white rounded shrink-0",
          variant: "ghost",
          size: "xs"
        }, {
          default: U(() => [
            W(F(gr), { class: "size-4" })
          ]),
          _: 1
        })) : ae("", !0)
      ]);
    };
  }
}), Ve = [];
for (let e = 0; e < 256; ++e)
  Ve.push((e + 256).toString(16).slice(1));
function Hc(e, n = 0) {
  return (Ve[e[n + 0]] + Ve[e[n + 1]] + Ve[e[n + 2]] + Ve[e[n + 3]] + "-" + Ve[e[n + 4]] + Ve[e[n + 5]] + "-" + Ve[e[n + 6]] + Ve[e[n + 7]] + "-" + Ve[e[n + 8]] + Ve[e[n + 9]] + "-" + Ve[e[n + 10]] + Ve[e[n + 11]] + Ve[e[n + 12]] + Ve[e[n + 13]] + Ve[e[n + 14]] + Ve[e[n + 15]]).toLowerCase();
}
let tr;
const Wc = new Uint8Array(16);
function Gc() {
  if (!tr) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    tr = crypto.getRandomValues.bind(crypto);
  }
  return tr(Wc);
}
const Uc = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), xa = { randomUUID: Uc };
function ko(e, n, t) {
  var r;
  if (xa.randomUUID && !e)
    return xa.randomUUID();
  e = e || {};
  const o = e.random ?? ((r = e.rng) == null ? void 0 : r.call(e)) ?? Gc();
  if (o.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return o[6] = o[6] & 15 | 64, o[8] = o[8] & 63 | 128, Hc(o);
}
const qc = /* @__PURE__ */ H({
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
    return (a, l) => (O(), fe(F(hu), {
      modelValue: r.value,
      "onUpdate:modelValue": l[0] || (l[0] = (i) => r.value = i),
      class: z([
        "relative inline-flex h-6 w-16 items-center rounded-full transition-colors focus:outline-none border focus:ring-2 focus:ring-ring focus:ring-offset-2",
        (r.value, "bg-muted")
      ])
    }, {
      default: U(() => [
        l[1] || (l[1] = I("span", { class: "sr-only" }, "Use AND/OR", -1)),
        I("span", {
          class: z([
            "inline-block absolute h-4 transform rounded-full bg-primary shadow-xs transition-all duration-300 ease-in-out",
            r.value ? "left-9 w-5.5" : "left-1 w-7.5"
          ])
        }, null, 2),
        I("span", {
          class: z(["absolute left-2 text-[10px] font-medium", [r.value ? "text-primary" : "text-muted"]])
        }, "AND", 2),
        I("span", {
          class: z(["absolute right-2 text-[10px] font-medium", [r.value ? "text-muted" : "text-primary"]])
        }, "OR", 2)
      ]),
      _: 1,
      __: [1]
    }, 8, ["modelValue", "class"]));
  }
}), Kc = { class: "relative group-container border rounded-lg p-4 mb-4" }, Yc = { class: "flex items-center gap-2 mb-2" }, Xc = { key: 0 }, Jc = { class: "space-y-2" }, Qc = {
  key: 0,
  class: "pl-6 mt-4 border-l"
}, Zc = { class: "flex gap-2 mt-4" }, ef = /* @__PURE__ */ H({
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
      set: (c) => o("update:modelValue", { ...t.modelValue, conditions: c })
    }), a = E({
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
    function i() {
      r.value.push(l());
    }
    function s(c) {
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
      const f = Yl("QueryGroup", !0);
      return O(), M("div", Kc, [
        I("div", Yc, [
          W(qc, {
            modelValue: a.value,
            "onUpdate:modelValue": m[0] || (m[0] = (v) => a.value = v)
          }, null, 8, ["modelValue"]),
          c.isRoot ? ae("", !0) : (O(), M("span", Xc, [
            W(ot, {
              variant: "ghost",
              size: "sm",
              onClick: m[1] || (m[1] = (v) => c.$emit("remove")),
              class: "text-destructive hover:text-destructive/80"
            }, {
              default: U(() => [
                W(F(hi), { class: "size-4" })
              ]),
              _: 1
            })
          ]))
        ]),
        I("div", Jc, [
          (O(!0), M(xe, null, Ke(r.value, (v, g) => (O(), fe(zc, {
            key: v.id,
            modelValue: r.value[g],
            "onUpdate:modelValue": (x) => r.value[g] = x,
            "available-fields": c.availableFields,
            "show-remove": r.value.length > 1,
            onRemove: (x) => s(g)
          }, null, 8, ["modelValue", "onUpdate:modelValue", "available-fields", "show-remove", "onRemove"]))), 128))
        ]),
        (p = c.modelValue.nestedGroups) != null && p.length ? (O(), M("div", Qc, [
          (O(!0), M(xe, null, Ke(c.modelValue.nestedGroups, (v, g) => (O(), fe(f, {
            key: v.id,
            modelValue: c.modelValue.nestedGroups[g],
            "onUpdate:modelValue": (x) => c.modelValue.nestedGroups[g] = x,
            "available-fields": c.availableFields,
            "is-root": !1,
            onRemove: (x) => d(g)
          }, null, 8, ["modelValue", "onUpdate:modelValue", "available-fields", "onRemove"]))), 128))
        ])) : ae("", !0),
        I("div", Zc, [
          W(ot, {
            variant: "outline",
            size: "sm",
            onClick: i
          }, {
            default: U(() => m[2] || (m[2] = [
              Wt("Add Condition")
            ])),
            _: 1,
            __: [2]
          }),
          W(ot, {
            variant: "outline",
            size: "sm",
            onClick: u
          }, {
            default: U(() => m[3] || (m[3] = [
              Wt("Add Group")
            ])),
            _: 1,
            __: [3]
          })
        ])
      ]);
    };
  }
}), tf = { class: "w-full" }, Gf = /* @__PURE__ */ H({
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
        id: ko(),
        conditions: [i()],
        nestedGroups: [],
        logicalOrOperator: !1
      };
    }
    function i() {
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
    function s(u) {
      a.value = u;
    }
    return n({
      rootGroup: a
    }), (u, d) => (O(), M("div", tf, [
      W(ef, {
        modelValue: a.value,
        "onUpdate:modelValue": [
          d[0] || (d[0] = (c) => a.value = c),
          s
        ],
        "available-fields": o.availableFields,
        "is-root": !0
      }, null, 8, ["modelValue", "available-fields"])
    ]));
  }
}), nf = { class: "absolute top-0 left-0 invisible -z-10 flex flex-nowrap" }, of = ["innerHTML"], rf = { class: "flex space-x-1 sm:space-x-1.5 md:space-x-2 lg:space-x-2.5 xl:space-x-3" }, af = ["onClick", "data-active"], lf = ["innerHTML"], sf = ["innerHTML"], uf = 80, df = /* @__PURE__ */ H({
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
    const a = C(!1), l = C(), i = C(), s = C(), u = C([]), d = C(t.tabs.length), c = E(() => r.value.slice(0, d.value)), m = E(() => r.value.slice(d.value)), f = () => {
      if (!i.value || u.value.length === 0) {
        d.value = t.tabs.length;
        return;
      }
      const b = i.value.offsetWidth;
      let T = 0, S = !0;
      for (let P = 0; P < u.value.length; P++) {
        const V = u.value[P], q = P > 0 ? p() : 0;
        if (T += V.offsetWidth + q, T > b) {
          S = !1;
          break;
        }
      }
      if (S) {
        d.value = t.tabs.length;
        return;
      }
      const _ = b - uf;
      let X = 0;
      T = 0;
      for (let P = 0; P < u.value.length; P++) {
        const V = u.value[P], q = P > 0 ? p() : 0;
        if (T + V.offsetWidth + q <= _)
          T += V.offsetWidth + q, X++;
        else
          break;
      }
      X === 0 && u.value.length > 0 && u.value[0].offsetWidth <= _ && (X = 1), d.value = X;
    }, p = () => {
      const b = window.innerWidth;
      return b < 640 ? 4 : b < 768 ? 6 : b < 1024 ? 8 : b < 1280 ? 10 : 12;
    };
    let v;
    const g = () => {
      clearTimeout(v), v = window.setTimeout(f, 150);
    };
    se(() => {
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
    function x(b) {
      const T = r.value.findIndex(
        (_) => _.id === b
      );
      if (T < d.value && T !== -1) {
        o("clicked", b);
        return;
      }
      const S = r.value.splice(T, 1)[0];
      r.value.splice(d.value - 1, 0, S), o("update", r.value), o("clicked", b);
    }
    function y(b) {
      const T = [...c.value], S = T.splice(b.oldIndex, 1)[0];
      T.splice(b.newIndex, 0, S);
      const _ = [...T, ...m.value];
      r.value = _, o("update", r.value);
    }
    function h() {
      a.value = !0;
    }
    function k() {
      a.value = !1;
    }
    return (b, T) => (O(), M("div", {
      ref_key: "containerRef",
      ref: l,
      class: z(F(me)("relative z-10 mx-auto", b.classes.container, b.theme.container))
    }, [
      I("div", nf, [
        (O(!0), M(xe, null, Ke(r.value, (S) => (O(), M("a", {
          key: `measure-${S.id}`,
          ref_for: !0,
          ref_key: "allTabRefs",
          ref: u,
          class: z(
            F(me)(
              "pj-tab flex cursor-pointer items-center rounded-t-md px-2 py-1.5 text-sm leading-none font-medium transition-all duration-200 ease-in-out transform sm:px-3 sm:py-2 sm:text-base md:px-4 md:py-2.5 md:text-lg lg:px-5 lg:py-3",
              b.style === "classic" ? "px-3 py-2 border-x border-t text-sm leading-none font-medium transition-all duration-200 ease-in-out transform data-[active=false]:relative data-[active=false]:border-transparent data-[active=false]:hover:bg-primary/5 data-[active=true]:border-border data-[active=true]:bg-card sm:px-4 sm:py-2.5 sm:text-base md:px-6 md:py-3 md:text-lg lg:px-8 lg:py-4" : "flex cursor-pointer items-center border-0 px-3 py-2.5 text-sm leading-none font-medium transition-all duration-200 ease-in-out transform hover:no-underline data-[active=false]:relative data-[active=false]:text-foreground/50 data-[active=false]:hover:bg-primary/5 data-[active=false]:hover:text-foreground data-[active=false]:border-b-transparent data-[active=true]:bg-card data-[active=true]:border-b-3 data-[active=true]:border-b-accent sm:px-4 sm:py-3 sm:text-base md:px-6 md:py-3.5 md:text-lg lg:px-8 lg:py-4",
              S.classes || "",
              b.tabClasses,
              b.classes.tab,
              b.theme.tabsNavTab
            )
          )
        }, [
          Y(b.$slots, "left", Qe({ ref_for: !0 }, S), void 0, !0),
          b.$slots.label ? ae("", !0) : (O(), M("span", {
            key: 0,
            innerHTML: S.label
          }, null, 8, of)),
          Y(b.$slots, "label", Qe({ ref_for: !0 }, S), void 0, !0),
          Y(b.$slots, "right", Qe({ ref_for: !0 }, S), void 0, !0)
        ], 2))), 128))
      ]),
      I("div", rf, [
        Y(b.$slots, "before", {}, void 0, !0),
        I("div", {
          ref_key: "tabsContainerRef",
          ref: i,
          class: "flex-1 min-w-0"
        }, [
          (O(), fe(F(vr), {
            list: c.value,
            key: "tabs-nav",
            "item-key": "id",
            tag: "div",
            class: z(
              F(me)(
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
            item: U(({ element: S }) => [
              (O(), M("a", {
                key: S.id,
                href: "#",
                onClick: wn(
                  (_) => {
                    _.preventDefault(), b.$emit("clicked", S.id);
                  },
                  ["prevent"]
                ),
                class: z(
                  F(me)(
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
                Y(b.$slots, "left", Ct(Ht(S)), void 0, !0),
                b.$slots.label ? ae("", !0) : (O(), M("span", {
                  key: 0,
                  innerHTML: S.label
                }, null, 8, lf)),
                Y(b.$slots, "label", Ct(Ht(S)), void 0, !0),
                Y(b.$slots, "right", Ct(Ht(S)), void 0, !0)
              ], 10, af))
            ]),
            _: 3
          }, 8, ["list", "class"]))
        ], 512),
        m.value.length > 0 ? (O(), fe(ju, {
          key: 0,
          class: "flex items-center"
        }, {
          default: U(() => [
            W(zu, { "as-child": "" }, {
              default: U(() => [
                I("button", {
                  ref_key: "moreButtonRef",
                  ref: s,
                  class: z(
                    F(me)(
                      "flex items-center justify-center rounded-t-md px-3 py-1.5 text-sm font-medium transition-all duration-200 ease-in-out transform border border-border bg-card hover:bg-accent hover:text-accent-foreground sm:px-4 sm:py-2 md:px-5 md:py-2.5"
                    )
                  ),
                  "aria-label": "More tabs"
                }, [
                  T[0] || (T[0] = I("span", { class: "hidden sm:inline" }, "More", -1)),
                  T[1] || (T[1] = I("span", { class: "sm:hidden" }, "⋯", -1)),
                  W(F(hr), { class: "ml-1 h-4 w-4 transition-transform duration-200" })
                ], 2)
              ]),
              _: 1
            }),
            W(Hu, {
              align: "end",
              "side-offset": 8,
              class: "min-w-[8rem]"
            }, {
              default: U(() => [
                (O(!0), M(xe, null, Ke(m.value, (S) => (O(), fe(Wu, {
                  key: S.id,
                  onClick: (_) => x(S.id),
                  class: z(
                    F(me)(
                      "flex items-center",
                      S.active ? "bg-accent text-accent-foreground" : ""
                    )
                  )
                }, {
                  default: U(() => [
                    Y(b.$slots, "left", Qe({ ref_for: !0 }, S), void 0, !0),
                    b.$slots.label ? ae("", !0) : (O(), M("span", {
                      key: 0,
                      innerHTML: S.label
                    }, null, 8, sf)),
                    Y(b.$slots, "label", Qe({ ref_for: !0 }, S), void 0, !0),
                    Y(b.$slots, "right", Qe({ ref_for: !0 }, S), void 0, !0)
                  ]),
                  _: 2
                }, 1032, ["onClick", "class"]))), 128))
              ]),
              _: 3
            })
          ]),
          _: 3
        })) : ae("", !0),
        Y(b.$slots, "after", {}, void 0, !0)
      ]),
      (O(), M("hr", {
        key: 0,
        class: z(F(me)("border-t", b.theme.tabsNavLine))
      }, null, 2))
    ], 2));
  }
}), Uf = /* @__PURE__ */ Hn(df, [["__scopeId", "data-v-bcaafe01"]]);
function qf() {
  const e = C("Cancel"), n = C("Confirm"), t = C(""), o = C(""), r = C(""), a = C(!1), l = C(""), i = C(() => {
    console.warn("Cancel callback not set"), a.value = !1;
  }), s = C(() => {
    console.warn("Confirm callback not set"), a.value = !1;
  });
  function u(c, m, f, p, v = "Confirm", g = "Cancel", x = "") {
    l.value = c, o.value = m, n.value = v, e.value = g, t.value = x, s.value = f || (async () => {
      console.warn("Confirm callback not set"), a.value = !1;
    }), i.value = p || (async () => {
      console.warn("Cancel callback not set"), a.value = !1;
    }), a.value = !0;
  }
  function d(c) {
    r.value = c;
  }
  return {
    cancelButtonText: e,
    cancelCallback: i,
    confirmButtonText: n,
    confirmButtonTheme: t,
    confirmCallback: s,
    description: o,
    doOpen: u,
    processing: r,
    show: a,
    title: l,
    toggleProcessing: d
  };
}
function cf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var co = { exports: {} };
/*! algoliasearch-lite.umd.js | 4.25.0 | © Algolia, inc. | https://github.com/algolia/algoliasearch-client-javascript */
var ff = co.exports, ka;
function pf() {
  return ka || (ka = 1, function(e, n) {
    (function(t, o) {
      e.exports = o();
    })(ff, function() {
      function t(D, A, R) {
        return A in D ? Object.defineProperty(D, A, { value: R, enumerable: !0, configurable: !0, writable: !0 }) : D[A] = R, D;
      }
      function o(D, A) {
        var R = Object.keys(D);
        if (Object.getOwnPropertySymbols) {
          var B = Object.getOwnPropertySymbols(D);
          A && (B = B.filter(function(G) {
            return Object.getOwnPropertyDescriptor(D, G).enumerable;
          })), R.push.apply(R, B);
        }
        return R;
      }
      function r(D) {
        for (var A = 1; A < arguments.length; A++) {
          var R = arguments[A] != null ? arguments[A] : {};
          A % 2 ? o(Object(R), !0).forEach(function(B) {
            t(D, B, R[B]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(D, Object.getOwnPropertyDescriptors(R)) : o(Object(R)).forEach(function(B) {
            Object.defineProperty(D, B, Object.getOwnPropertyDescriptor(R, B));
          });
        }
        return D;
      }
      function a(D, A) {
        if (D == null) return {};
        var R, B, G = function(re, J) {
          if (re == null) return {};
          var ve, Oe, be = {}, Ne = Object.keys(re);
          for (Oe = 0; Oe < Ne.length; Oe++) ve = Ne[Oe], J.indexOf(ve) >= 0 || (be[ve] = re[ve]);
          return be;
        }(D, A);
        if (Object.getOwnPropertySymbols) {
          var ee = Object.getOwnPropertySymbols(D);
          for (B = 0; B < ee.length; B++) R = ee[B], A.indexOf(R) >= 0 || Object.prototype.propertyIsEnumerable.call(D, R) && (G[R] = D[R]);
        }
        return G;
      }
      function l(D, A) {
        return function(R) {
          if (Array.isArray(R)) return R;
        }(D) || function(R, B) {
          if (Symbol.iterator in Object(R) || Object.prototype.toString.call(R) === "[object Arguments]") {
            var G = [], ee = !0, re = !1, J = void 0;
            try {
              for (var ve, Oe = R[Symbol.iterator](); !(ee = (ve = Oe.next()).done) && (G.push(ve.value), !B || G.length !== B); ee = !0) ;
            } catch (be) {
              re = !0, J = be;
            } finally {
              try {
                ee || Oe.return == null || Oe.return();
              } finally {
                if (re) throw J;
              }
            }
            return G;
          }
        }(D, A) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }();
      }
      function i(D) {
        return function(A) {
          if (Array.isArray(A)) {
            for (var R = 0, B = new Array(A.length); R < A.length; R++) B[R] = A[R];
            return B;
          }
        }(D) || function(A) {
          if (Symbol.iterator in Object(A) || Object.prototype.toString.call(A) === "[object Arguments]") return Array.from(A);
        }(D) || function() {
          throw new TypeError("Invalid attempt to spread non-iterable instance");
        }();
      }
      function s(D) {
        var A, R = "algoliasearch-client-js-".concat(D.key), B = function() {
          return A === void 0 && (A = D.localStorage || window.localStorage), A;
        }, G = function() {
          return JSON.parse(B().getItem(R) || "{}");
        }, ee = function(J) {
          B().setItem(R, JSON.stringify(J));
        }, re = function() {
          var J = D.timeToLive ? 1e3 * D.timeToLive : null, ve = G(), Oe = Object.fromEntries(Object.entries(ve).filter(function(Ne) {
            return l(Ne, 2)[1].timestamp !== void 0;
          }));
          if (ee(Oe), J) {
            var be = Object.fromEntries(Object.entries(Oe).filter(function(Ne) {
              var Ie = l(Ne, 2)[1], Xe = (/* @__PURE__ */ new Date()).getTime();
              return !(Ie.timestamp + J < Xe);
            }));
            ee(be);
          }
        };
        return { get: function(J, ve) {
          var Oe = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : { miss: function() {
            return Promise.resolve();
          } };
          return Promise.resolve().then(function() {
            re();
            var be = JSON.stringify(J);
            return G()[be];
          }).then(function(be) {
            return Promise.all([be ? be.value : ve(), be !== void 0]);
          }).then(function(be) {
            var Ne = l(be, 2), Ie = Ne[0], Xe = Ne[1];
            return Promise.all([Ie, Xe || Oe.miss(Ie)]);
          }).then(function(be) {
            return l(be, 1)[0];
          });
        }, set: function(J, ve) {
          return Promise.resolve().then(function() {
            var Oe = G();
            return Oe[JSON.stringify(J)] = { timestamp: (/* @__PURE__ */ new Date()).getTime(), value: ve }, B().setItem(R, JSON.stringify(Oe)), ve;
          });
        }, delete: function(J) {
          return Promise.resolve().then(function() {
            var ve = G();
            delete ve[JSON.stringify(J)], B().setItem(R, JSON.stringify(ve));
          });
        }, clear: function() {
          return Promise.resolve().then(function() {
            B().removeItem(R);
          });
        } };
      }
      function u(D) {
        var A = i(D.caches), R = A.shift();
        return R === void 0 ? { get: function(B, G) {
          var ee = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : { miss: function() {
            return Promise.resolve();
          } }, re = G();
          return re.then(function(J) {
            return Promise.all([J, ee.miss(J)]);
          }).then(function(J) {
            return l(J, 1)[0];
          });
        }, set: function(B, G) {
          return Promise.resolve(G);
        }, delete: function(B) {
          return Promise.resolve();
        }, clear: function() {
          return Promise.resolve();
        } } : { get: function(B, G) {
          var ee = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : { miss: function() {
            return Promise.resolve();
          } };
          return R.get(B, G, ee).catch(function() {
            return u({ caches: A }).get(B, G, ee);
          });
        }, set: function(B, G) {
          return R.set(B, G).catch(function() {
            return u({ caches: A }).set(B, G);
          });
        }, delete: function(B) {
          return R.delete(B).catch(function() {
            return u({ caches: A }).delete(B);
          });
        }, clear: function() {
          return R.clear().catch(function() {
            return u({ caches: A }).clear();
          });
        } };
      }
      function d() {
        var D = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { serializable: !0 }, A = {};
        return { get: function(R, B) {
          var G = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : { miss: function() {
            return Promise.resolve();
          } }, ee = JSON.stringify(R);
          if (ee in A) return Promise.resolve(D.serializable ? JSON.parse(A[ee]) : A[ee]);
          var re = B(), J = G && G.miss || function() {
            return Promise.resolve();
          };
          return re.then(function(ve) {
            return J(ve);
          }).then(function() {
            return re;
          });
        }, set: function(R, B) {
          return A[JSON.stringify(R)] = D.serializable ? JSON.stringify(B) : B, Promise.resolve(B);
        }, delete: function(R) {
          return delete A[JSON.stringify(R)], Promise.resolve();
        }, clear: function() {
          return A = {}, Promise.resolve();
        } };
      }
      function c(D) {
        for (var A = D.length - 1; A > 0; A--) {
          var R = Math.floor(Math.random() * (A + 1)), B = D[A];
          D[A] = D[R], D[R] = B;
        }
        return D;
      }
      function m(D, A) {
        return A && Object.keys(A).forEach(function(R) {
          D[R] = A[R](D);
        }), D;
      }
      function f(D) {
        for (var A = arguments.length, R = new Array(A > 1 ? A - 1 : 0), B = 1; B < A; B++) R[B - 1] = arguments[B];
        var G = 0;
        return D.replace(/%s/g, function() {
          return encodeURIComponent(R[G++]);
        });
      }
      var p = { WithinQueryParameters: 0, WithinHeaders: 1 };
      function v(D, A) {
        var R = D || {}, B = R.data || {};
        return Object.keys(R).forEach(function(G) {
          ["timeout", "headers", "queryParameters", "data", "cacheable"].indexOf(G) === -1 && (B[G] = R[G]);
        }), { data: Object.entries(B).length > 0 ? B : void 0, timeout: R.timeout || A, headers: R.headers || {}, queryParameters: R.queryParameters || {}, cacheable: R.cacheable };
      }
      var g = { Read: 1, Write: 2, Any: 3 }, x = 1, y = 2, h = 3;
      function k(D) {
        var A = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : x;
        return r(r({}, D), {}, { status: A, lastUpdate: Date.now() });
      }
      function b(D) {
        return typeof D == "string" ? { protocol: "https", url: D, accept: g.Any } : { protocol: D.protocol || "https", url: D.url, accept: D.accept || g.Any };
      }
      var T = "GET", S = "POST";
      function _(D, A) {
        return Promise.all(A.map(function(R) {
          return D.get(R, function() {
            return Promise.resolve(k(R));
          });
        })).then(function(R) {
          var B = R.filter(function(re) {
            return function(J) {
              return J.status === x || Date.now() - J.lastUpdate > 12e4;
            }(re);
          }), G = R.filter(function(re) {
            return function(J) {
              return J.status === h && Date.now() - J.lastUpdate <= 12e4;
            }(re);
          }), ee = [].concat(i(B), i(G));
          return { getTimeout: function(re, J) {
            return (G.length === 0 && re === 0 ? 1 : G.length + 3 + re) * J;
          }, statelessHosts: ee.length > 0 ? ee.map(function(re) {
            return b(re);
          }) : A };
        });
      }
      function X(D, A, R, B) {
        var G = [], ee = function(Ie, Xe) {
          if (!(Ie.method === T || Ie.data === void 0 && Xe.data === void 0)) {
            var ke = Array.isArray(Ie.data) ? Ie.data : r(r({}, Ie.data), Xe.data);
            return JSON.stringify(ke);
          }
        }(R, B), re = function(Ie, Xe) {
          var ke = r(r({}, Ie.headers), Xe.headers), Ge = {};
          return Object.keys(ke).forEach(function(Pt) {
            var ct = ke[Pt];
            Ge[Pt.toLowerCase()] = ct;
          }), Ge;
        }(D, B), J = R.method, ve = R.method !== T ? {} : r(r({}, R.data), B.data), Oe = r(r(r({ "x-algolia-agent": D.userAgent.value }, D.queryParameters), ve), B.queryParameters), be = 0, Ne = function Ie(Xe, ke) {
          var Ge = Xe.pop();
          if (Ge === void 0) throw { name: "RetryError", message: "Unreachable hosts - your application id may be incorrect. If the error persists, please reach out to the Algolia Support team: https://alg.li/support .", transporterStackTrace: w(G) };
          var Pt = { data: ee, headers: re, method: J, url: V(Ge, R.path, Oe), connectTimeout: ke(be, D.timeouts.connect), responseTimeout: ke(be, B.timeout) }, ct = function(Le) {
            var ye = { request: Pt, response: Le, host: Ge, triesLeft: Xe.length };
            return G.push(ye), ye;
          }, Yn = { onSuccess: function(Le) {
            return function(ye) {
              try {
                return JSON.parse(ye.content);
              } catch (xt) {
                throw /* @__PURE__ */ function(Lt, dn) {
                  return { name: "DeserializationError", message: Lt, response: dn };
                }(xt.message, ye);
              }
            }(Le);
          }, onRetry: function(Le) {
            var ye = ct(Le);
            return Le.isTimedOut && be++, Promise.all([D.logger.info("Retryable failure", $(ye)), D.hostsCache.set(Ge, k(Ge, Le.isTimedOut ? h : y))]).then(function() {
              return Ie(Xe, ke);
            });
          }, onFail: function(Le) {
            throw ct(Le), function(ye, xt) {
              var Lt = ye.content, dn = ye.status, _n = Lt;
              try {
                _n = JSON.parse(Lt).message;
              } catch {
              }
              return /* @__PURE__ */ function(Xn, Fo, jl) {
                return { name: "ApiError", message: Xn, status: Fo, transporterStackTrace: jl };
              }(_n, dn, xt);
            }(Le, w(G));
          } };
          return D.requester.send(Pt).then(function(Le) {
            return function(ye, xt) {
              return function(Lt) {
                var dn = Lt.status;
                return Lt.isTimedOut || function(_n) {
                  var Xn = _n.isTimedOut, Fo = _n.status;
                  return !Xn && ~~Fo == 0;
                }(Lt) || ~~(dn / 100) != 2 && ~~(dn / 100) != 4;
              }(ye) ? xt.onRetry(ye) : ~~(ye.status / 100) == 2 ? xt.onSuccess(ye) : xt.onFail(ye);
            }(Le, Yn);
          });
        };
        return _(D.hostsCache, A).then(function(Ie) {
          return Ne(i(Ie.statelessHosts).reverse(), Ie.getTimeout);
        });
      }
      function P(D) {
        var A = { value: "Algolia for JavaScript (".concat(D, ")"), add: function(R) {
          var B = "; ".concat(R.segment).concat(R.version !== void 0 ? " (".concat(R.version, ")") : "");
          return A.value.indexOf(B) === -1 && (A.value = "".concat(A.value).concat(B)), A;
        } };
        return A;
      }
      function V(D, A, R) {
        var B = q(R), G = "".concat(D.protocol, "://").concat(D.url, "/").concat(A.charAt(0) === "/" ? A.substr(1) : A);
        return B.length && (G += "?".concat(B)), G;
      }
      function q(D) {
        return Object.keys(D).map(function(A) {
          return f("%s=%s", A, (R = D[A], Object.prototype.toString.call(R) === "[object Object]" || Object.prototype.toString.call(R) === "[object Array]" ? JSON.stringify(D[A]) : D[A]));
          var R;
        }).join("&");
      }
      function w(D) {
        return D.map(function(A) {
          return $(A);
        });
      }
      function $(D) {
        var A = D.request.headers["x-algolia-api-key"] ? { "x-algolia-api-key": "*****" } : {};
        return r(r({}, D), {}, { request: r(r({}, D.request), {}, { headers: r(r({}, D.request.headers), A) }) });
      }
      var L = function(D) {
        var A = D.appId, R = /* @__PURE__ */ function(G, ee, re) {
          var J = { "x-algolia-api-key": re, "x-algolia-application-id": ee };
          return { headers: function() {
            return G === p.WithinHeaders ? J : {};
          }, queryParameters: function() {
            return G === p.WithinQueryParameters ? J : {};
          } };
        }(D.authMode !== void 0 ? D.authMode : p.WithinHeaders, A, D.apiKey), B = function(G) {
          var ee = G.hostsCache, re = G.logger, J = G.requester, ve = G.requestsCache, Oe = G.responsesCache, be = G.timeouts, Ne = G.userAgent, Ie = G.hosts, Xe = G.queryParameters, ke = { hostsCache: ee, logger: re, requester: J, requestsCache: ve, responsesCache: Oe, timeouts: be, userAgent: Ne, headers: G.headers, queryParameters: Xe, hosts: Ie.map(function(Ge) {
            return b(Ge);
          }), read: function(Ge, Pt) {
            var ct = v(Pt, ke.timeouts.read), Yn = function() {
              return X(ke, ke.hosts.filter(function(ye) {
                return (ye.accept & g.Read) != 0;
              }), Ge, ct);
            };
            if ((ct.cacheable !== void 0 ? ct.cacheable : Ge.cacheable) !== !0) return Yn();
            var Le = { request: Ge, mappedRequestOptions: ct, transporter: { queryParameters: ke.queryParameters, headers: ke.headers } };
            return ke.responsesCache.get(Le, function() {
              return ke.requestsCache.get(Le, function() {
                return ke.requestsCache.set(Le, Yn()).then(function(ye) {
                  return Promise.all([ke.requestsCache.delete(Le), ye]);
                }, function(ye) {
                  return Promise.all([ke.requestsCache.delete(Le), Promise.reject(ye)]);
                }).then(function(ye) {
                  var xt = l(ye, 2);
                  return xt[0], xt[1];
                });
              });
            }, { miss: function(ye) {
              return ke.responsesCache.set(Le, ye);
            } });
          }, write: function(Ge, Pt) {
            return X(ke, ke.hosts.filter(function(ct) {
              return (ct.accept & g.Write) != 0;
            }), Ge, v(Pt, ke.timeouts.write));
          } };
          return ke;
        }(r(r({ hosts: [{ url: "".concat(A, "-dsn.algolia.net"), accept: g.Read }, { url: "".concat(A, ".algolia.net"), accept: g.Write }].concat(c([{ url: "".concat(A, "-1.algolianet.com") }, { url: "".concat(A, "-2.algolianet.com") }, { url: "".concat(A, "-3.algolianet.com") }])) }, D), {}, { headers: r(r(r({}, R.headers()), { "content-type": "application/x-www-form-urlencoded" }), D.headers), queryParameters: r(r({}, R.queryParameters()), D.queryParameters) }));
        return m({ transporter: B, appId: A, addAlgoliaAgent: function(G, ee) {
          B.userAgent.add({ segment: G, version: ee });
        }, clearCache: function() {
          return Promise.all([B.requestsCache.clear(), B.responsesCache.clear()]).then(function() {
          });
        } }, D.methods);
      }, K = function(D) {
        return function(A, R) {
          return A.method === T ? D.transporter.read(A, R) : D.transporter.write(A, R);
        };
      }, ne = function(D) {
        return function(A) {
          var R = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, B = { transporter: D.transporter, appId: D.appId, indexName: A };
          return m(B, R.methods);
        };
      }, ce = function(D) {
        return function(A, R) {
          var B = A.map(function(G) {
            return r(r({}, G), {}, { params: q(G.params || {}) });
          });
          return D.transporter.read({ method: S, path: "1/indexes/*/queries", data: { requests: B }, cacheable: !0 }, R);
        };
      }, oe = function(D) {
        return function(A, R) {
          return Promise.all(A.map(function(B) {
            var G = B.params, ee = G.facetName, re = G.facetQuery, J = a(G, ["facetName", "facetQuery"]);
            return ne(D)(B.indexName, { methods: { searchForFacetValues: Be } }).searchForFacetValues(ee, re, r(r({}, R), J));
          }));
        };
      }, Se = function(D) {
        return function(A, R, B) {
          return D.transporter.read({ method: S, path: f("1/answers/%s/prediction", D.indexName), data: { query: A, queryLanguages: R }, cacheable: !0 }, B);
        };
      }, We = function(D) {
        return function(A, R) {
          return D.transporter.read({ method: S, path: f("1/indexes/%s/query", D.indexName), data: { query: A }, cacheable: !0 }, R);
        };
      }, Be = function(D) {
        return function(A, R, B) {
          return D.transporter.read({ method: S, path: f("1/indexes/%s/facets/%s/query", D.indexName, A), data: { facetQuery: R }, cacheable: !0 }, B);
        };
      }, Xt = 1, wt = 2, Nl = 3, Vl = function(D) {
        return function(A, R) {
          var B = A.map(function(G) {
            return r(r({}, G), {}, { threshold: G.threshold || 0 });
          });
          return D.transporter.read({ method: S, path: "1/indexes/*/recommendations", data: { requests: B }, cacheable: !0 }, R);
        };
      };
      function Ur(D, A, R) {
        var B, G = { appId: D, apiKey: A, timeouts: { connect: 1, read: 2, write: 30 }, requester: { send: function(ee) {
          return new Promise(function(re) {
            var J = new XMLHttpRequest();
            J.open(ee.method, ee.url, !0), Object.keys(ee.headers).forEach(function(Ne) {
              return J.setRequestHeader(Ne, ee.headers[Ne]);
            });
            var ve, Oe = function(Ne, Ie) {
              return setTimeout(function() {
                J.abort(), re({ status: 0, content: Ie, isTimedOut: !0 });
              }, 1e3 * Ne);
            }, be = Oe(ee.connectTimeout, "Connection timeout");
            J.onreadystatechange = function() {
              J.readyState > J.OPENED && ve === void 0 && (clearTimeout(be), ve = Oe(ee.responseTimeout, "Socket timeout"));
            }, J.onerror = function() {
              J.status === 0 && (clearTimeout(be), clearTimeout(ve), re({ content: J.responseText || "Network request failed", status: J.status, isTimedOut: !1 }));
            }, J.onload = function() {
              clearTimeout(be), clearTimeout(ve), re({ content: J.responseText, status: J.status, isTimedOut: !1 });
            }, J.send(ee.data);
          });
        } }, logger: (B = Nl, { debug: function(ee, re) {
          return Xt >= B && console.debug(ee, re), Promise.resolve();
        }, info: function(ee, re) {
          return wt >= B && console.info(ee, re), Promise.resolve();
        }, error: function(ee, re) {
          return console.error(ee, re), Promise.resolve();
        } }), responsesCache: d(), requestsCache: d({ serializable: !1 }), hostsCache: u({ caches: [s({ key: "".concat("4.25.0", "-").concat(D) }), d()] }), userAgent: P("4.25.0").add({ segment: "Browser", version: "lite" }), authMode: p.WithinQueryParameters };
        return L(r(r(r({}, G), R), {}, { methods: { search: ce, searchForFacetValues: oe, multipleQueries: ce, multipleSearchForFacetValues: oe, customRequest: K, initIndex: function(ee) {
          return function(re) {
            return ne(ee)(re, { methods: { search: We, searchForFacetValues: Be, findAnswers: Se } });
          };
        }, getRecommendations: Vl } }));
      }
      return Ur.version = "4.25.0", Ur;
    });
  }(co)), co.exports;
}
var mf = /* @__PURE__ */ pf();
const vf = /* @__PURE__ */ cf(mf);
class Kf {
  constructor(n) {
    Lo(this, "searchIndex");
    const t = vf(n.appId, n.searchKey);
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
class Yf {
  constructor(n) {
    Lo(this, "items");
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
  wf as Alert,
  Sf as AlertAction,
  kf as AlertDescription,
  Cf as AlertIcon,
  xf as AlertTitle,
  Kf as AlgoliaSearchStrategy,
  jf as AnnouncementsDrawer,
  ni as Badge,
  ot as Button,
  Of as CodeBlock,
  Nu as ColorPicker,
  zf as ColumnManager,
  Wo as Combobox,
  Hf as CommandPalette,
  Wf as ConfirmationDialog,
  ju as Dropdown,
  Hu as DropdownContent,
  Wu as DropdownItem,
  Tf as DropdownLabel,
  _f as DropdownSeparator,
  Df as DropdownSub,
  Pf as DropdownSubContent,
  $f as DropdownSubTrigger,
  zu as DropdownTrigger,
  Go as EmptyState,
  Gf as FluentQueryBuilder,
  _a as Input,
  Yf as LocalSearchStrategy,
  If as Modal,
  Mf as ModalBody,
  td as ModalClose,
  Zu as ModalContent,
  Ff as ModalFooter,
  Af as ModalHeader,
  Rf as ModalTitle,
  ad as Popover,
  Uf as TabsNav,
  Vf as ThemeToggle,
  Lf as Tooltip,
  Nf as TooltipContent,
  Bf as TooltipTrigger,
  Sl as Typeahead,
  qf as useConfirmationDialog
};
//# sourceMappingURL=pickle-jar-ui.es.js.map
