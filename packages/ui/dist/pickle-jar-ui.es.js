var zl = Object.defineProperty;
var Hl = (e, n, t) => n in e ? zl(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var Fo = (e, n, t) => Hl(e, typeof n != "symbol" ? n + "" : n, t);
import { defineComponent as Y, computed as O, createElementBlock as M, openBlock as E, normalizeClass as z, createElementVNode as T, createCommentVNode as te, renderSlot as X, inject as fe, ref as S, h as ie, watch as le, onMounted as se, useSlots as Wl, Fragment as we, toDisplayString as ve, createBlock as he, withCtx as q, unref as F, shallowRef as ko, getCurrentScope as Gl, onScopeDispose as ka, shallowReadonly as dn, triggerRef as Ur, onUnmounted as xe, watchEffect as Le, cloneVNode as Sa, provide as $e, nextTick as Ue, toRaw as Lt, reactive as So, getCurrentInstance as Ca, Teleport as Co, createVNode as G, renderList as Ke, withModifiers as yn, withKeys as Oa, Transition as it, normalizeStyle as Ht, mergeProps as Qe, normalizeProps as xt, withDirectives as tn, vShow as nn, guardReactiveProps as jt, createTextVNode as zt, useAttrs as Ul, resolveDynamicComponent as ql, createSlots as Kl, resolveComponent as Yl } from "vue";
import an from "clsx";
import { twMerge as kn } from "tailwind-merge";
const Xl = { class: "flex" }, Jl = {
  key: 0,
  class: "shrink-0"
}, Ql = { class: "ml-3 grow" }, Zl = {
  key: 0,
  class: "font-medium line-clamp-1 text-foreground"
}, ei = {
  key: 1,
  class: "mt-1 text-sm text-foreground-muted"
}, ti = {
  key: 1,
  class: "flex items-center"
}, ni = { key: 2 }, gf = /* @__PURE__ */ Y({
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
    function t(...i) {
      return kn(an(i));
    }
    const o = e, r = O(() => ({
      "bg-sky-50": o.variant === "info" || o.variant === "processing",
      "bg-yellow-50": o.variant === "warning",
      "bg-red-50": o.variant === "error",
      "bg-green-50": o.variant === "success",
      "bg-zinc-50": o.variant === "muted"
    })), a = O(() => ({
      "border-sky-200": o.variant === "info" || o.variant === "processing",
      "border-yellow-200": o.variant === "warning",
      "border-red-200": o.variant === "error",
      "border-green-200": o.variant === "success",
      "border-zinc-200": o.variant === "muted"
    })), l = O(() => ({
      "text-sky-800": o.variant === "info" || o.variant === "processing",
      "text-yellow-800": o.variant === "warning",
      "text-red-800": o.variant === "error",
      "text-green-800": o.variant === "success",
      "text-zinc-800": o.variant === "muted"
    }));
    return (i, s) => (E(), M("div", {
      class: z(
        t(
          i.flush ? "rounded-0" : "rounded-md",
          "relative border p-4",
          r.value,
          a.value,
          l.value,
          i.theme.alert
        )
      )
    }, [
      T("div", Xl, [
        i.$slots.icon ? (E(), M("div", Jl, [
          X(i.$slots, "icon")
        ])) : te("", !0),
        T("div", Ql, [
          i.$slots.title ? (E(), M("div", Zl, [
            X(i.$slots, "title")
          ])) : te("", !0),
          i.$slots.body ? (E(), M("div", ei, [
            X(i.$slots, "body")
          ])) : te("", !0)
        ]),
        i.$slots.action ? (E(), M("div", ti, [
          X(i.$slots, "action")
        ])) : te("", !0),
        i.dismissable ? (E(), M("div", ni, [
          T("button", {
            onClick: s[0] || (s[0] = (u) => i.$emit("close", !1)),
            class: "absolute right-4 top-4 text-zinc-400 hover:text-zinc-800"
          }, s[1] || (s[1] = [
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
          ]))
        ])) : te("", !0)
      ])
    ], 2));
  }
}), oi = /* @__PURE__ */ Y({
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
      return kn(an(t));
    }
    return (t, o) => (E(), M("span", {
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
      X(t.$slots, "default")
    ], 2));
  }
}), ri = ["aria-disabled", "aria-busy", "aria-expanded", "disabled"], ai = {
  key: 0,
  "aria-hidden": "true"
}, li = { key: 0 }, ii = /* @__PURE__ */ Y({
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
      return kn(an(s));
    }
    const o = n, r = fe("dropdown"), a = S(), l = O(() => {
      var u, d, c, m;
      return (u = r == null ? void 0 : r.triggerRef) == null || u.value, ((c = (d = r == null ? void 0 : r.triggerRef) == null ? void 0 : d.value) == null ? void 0 : c.querySelector("button")) === a.value && ((m = r == null ? void 0 : r.isOpen) == null ? void 0 : m.value) === !0;
    });
    function i(s) {
      s.preventDefault(), o("click", s);
    }
    return (s, u) => (E(), M("button", {
      ref_key: "buttonRef",
      ref: a,
      onClick: i,
      class: z(
        t(
          "inline-flex items-center cursor-pointer justify-center whitespace-nowrap rounded-md text-sm ring-offset-background focus:outline-none focus:ring-3 focus:ring-ring transition-[box-shadow,color] disabled:pointer-events-none disabled:opacity-50",
          // Variant styles
          s.variant === "default" && "bg-primary text-primary-foreground hover:bg-primary/90",
          s.variant === "destructive" && "bg-destructive text-destructive-foreground hover:bg-destructive/90",
          s.variant === "outline" && "border border-border bg-background hover:bg-accent hover:text-accent-foreground",
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
      X(s.$slots, "default", {}, void 0, !0),
      s.processing ? (E(), M("span", ai, [
        s.$slots.processing ? (E(), M("span", li, [
          X(s.$slots, "processing", {}, void 0, !0)
        ])) : te("", !0)
      ])) : te("", !0)
    ], 10, ri));
  }
}), Oo = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [o, r] of n)
    t[o] = r;
  return t;
}, ot = /* @__PURE__ */ Oo(ii, [["__scopeId", "data-v-b674bc67"]]);
/**
 * @license lucide-vue-next v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qr = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), si = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (n, t, o) => o ? o.toUpperCase() : t.toLowerCase()
), ui = (e) => {
  const n = si(e);
  return n.charAt(0).toUpperCase() + n.slice(1);
}, di = (...e) => e.filter((n, t, o) => !!n && n.trim() !== "" && o.indexOf(n) === t).join(" ").trim();
/**
 * @license lucide-vue-next v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Xn = {
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
const ci = ({ size: e, strokeWidth: n = 2, absoluteStrokeWidth: t, color: o, iconNode: r, name: a, class: l, ...i }, { slots: s }) => ie(
  "svg",
  {
    ...Xn,
    width: e || Xn.width,
    height: e || Xn.height,
    stroke: o || Xn.stroke,
    "stroke-width": t ? Number(n) * 24 / Number(e) : n,
    class: di(
      "lucide",
      ...a ? [`lucide-${qr(ui(a))}-icon`, `lucide-${qr(a)}`] : ["lucide-icon"]
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
const qt = (e, n) => (t, { slots: o }) => ie(
  ci,
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
const fi = qt("check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-vue-next v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hr = qt("chevron-down", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-vue-next v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pi = qt("clipboard", [
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
const mi = qt("ellipsis-vertical", [
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
const vi = qt("grip-horizontal", [
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
const hi = qt("loader", [
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
const gi = qt("trash-2", [
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
const Ea = qt("x", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
function Ta() {
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
    isDark: O(() => e.value.isDark),
    themeClass: O(() => e.value.themeClass),
    toggleTheme: t,
    setTheme: o,
    updateThemeState: n
  };
}
const bi = { key: 2 }, yi = ["innerHTML"], wi = { class: "text-sm" }, xi = /* @__PURE__ */ Y({
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
      return kn(an(h));
    }
    const a = e, l = Wl(), i = S("demo"), s = S(""), u = S(!0), d = S(""), c = S(!1), m = S(null), f = O(() => !!l.demo), { isDark: p } = Ta(), v = O(() => a.autoTheme ? p.value ? a.darkTheme : a.lightTheme : a.shikiTheme), g = async () => {
      try {
        u.value = !0, d.value = "";
        const h = t(a.language), k = `${h}-${v.value}`;
        if (o.has(k)) {
          m.value = o.get(k), await b();
          return;
        }
        const { getSingletonHighlighter: w } = await import("shiki");
        m.value = await w({
          themes: [v.value],
          langs: [h]
        }), o.set(k, m.value), await b();
      } catch (h) {
        console.error("Failed to initialize highlighter:", h), d.value = h instanceof Error ? h.message : "Failed to initialize syntax highlighter";
      } finally {
        u.value = !1;
      }
    }, b = async () => {
      var h;
      if (m.value)
        try {
          const k = t(a.language), w = {
            lang: k,
            theme: v.value,
            colorReplacements: {
              "#24292e": "#171717",
              "#ffffff": "#f5f5f5",
              "#fff": "#f5f5f5"
            }
          }, D = {
            ...w,
            ...a.codeToHtmlOptions,
            // Ensure lang and theme are always set correctly
            lang: k,
            theme: v.value,
            // Merge colorReplacements if provided
            colorReplacements: {
              ...w.colorReplacements,
              ...(h = a.codeToHtmlOptions) == null ? void 0 : h.colorReplacements
            }
          };
          s.value = m.value.codeToHtml(
            a.code,
            D
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
        h[1] !== (k == null ? void 0 : k[1]) ? await g() : await b();
      },
      {
        immediate: !0
      }
    ), se(g), (h, k) => (E(), M("div", {
      class: z(
        r(
          "relative overflow-hidden rounded-lg border border-border bg-muted/50",
          h.customTheme.container
        )
      )
    }, [
      h.showHeader ? (E(), M("div", {
        key: 0,
        class: z(
          r(
            "flex border-b border-border bg-muted/30 h-10 pr-4",
            h.customTheme.tabNav
          )
        )
      }, [
        f.value ? (E(), M(we, { key: 0 }, [
          T("button", {
            onClick: k[0] || (k[0] = (w) => i.value = "demo"),
            class: z(
              r(
                "px-4 py-2 text-sm font-medium transition-colors",
                i.value === "demo" ? "bg-background text-foreground border-b-2 border-primary" : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              )
            )
          }, " Demo ", 2),
          T("button", {
            onClick: k[1] || (k[1] = (w) => i.value = "code"),
            class: z(
              r(
                "px-4 py-2 text-sm font-medium transition-colors",
                i.value === "code" ? "bg-background text-foreground border-b-2 border-primary" : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              )
            )
          }, " Code ", 2)
        ], 64)) : te("", !0),
        T("span", {
          class: z(
            r(
              "ml-auto self-center font-mono text-muted-foreground capitalize text-sm",
              h.customTheme.languageLabel
            )
          )
        }, ve(h.language), 3)
      ], 2)) : te("", !0),
      f.value && i.value === "demo" ? (E(), M("div", {
        key: 1,
        class: z(r("p-4", h.customTheme.demo))
      }, [
        X(h.$slots, "demo", {}, void 0, !0)
      ], 2)) : te("", !0),
      !f.value || i.value === "code" ? (E(), M("div", bi, [
        T("div", {
          class: z(r("relative", h.customTheme.content))
        }, [
          h.showCopyButton ? (E(), he(ot, {
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
            default: q(() => [
              c.value ? (E(), he(F(fi), {
                key: 0,
                class: "size-4 text-green-500 shrink-0"
              })) : (E(), he(F(pi), {
                key: 1,
                class: "size-4 shrink-0"
              }))
            ]),
            _: 1
          }, 8, ["class", "aria-label"])) : te("", !0),
          T("div", {
            class: z(r("overflow-auto max-h-96", h.customTheme.content))
          }, [
            u.value ? (E(), M("div", {
              key: 1,
              class: z(
                r(
                  "flex items-center justify-center py-8 text-muted-foreground",
                  h.customTheme.loading
                )
              )
            }, k[2] || (k[2] = [
              T("span", { class: "text-sm" }, "Loading syntax highlighting...", -1)
            ]), 2)) : (E(), M("div", {
              key: 0,
              class: z(
                r(
                  "font-mono text-sm leading-relaxed [&>pre]:p-4",
                  h.customTheme.pre
                )
              ),
              innerHTML: s.value
            }, null, 10, yi)),
            d.value ? (E(), M("div", {
              key: 2,
              class: z(
                r(
                  "flex items-center justify-center py-8 text-destructive",
                  h.customTheme.error
                )
              )
            }, [
              T("span", wi, ve(d.value), 1)
            ], 2)) : te("", !0)
          ], 2)
        ], 2)
      ])) : te("", !0)
    ], 2));
  }
}), bf = /* @__PURE__ */ Oo(xi, [["__scopeId", "data-v-50694f4e"]]);
function ki(e, n) {
  const t = this;
  let o;
  return function(...r) {
    clearTimeout(o), o = setTimeout(() => {
      e.apply(t, r);
    }, n);
  };
}
function pe(...e) {
  return kn(an(e));
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
const Si = ["disabled", "type", "placeholder", "value"], Da = /* @__PURE__ */ Y({
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
      return E(), M("input", {
        disabled: r.disabled,
        type: r.type,
        placeholder: r.placeholder,
        value: r.modelValue ?? r.value,
        onInput: o,
        class: z(
          F(pe)(
            "flex w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground/70 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring transition-[box-shadow,color] disabled:cursor-not-allowed disabled:opacity-50",
            ((l = r.theme) == null ? void 0 : l.input) || ""
          )
        )
      }, null, 42, Si);
    };
  }
}), Ci = ["top", "right", "bottom", "left"], Kr = ["start", "end"], Yr = /* @__PURE__ */ Ci.reduce((e, n) => e.concat(n, n + "-" + Kr[0], n + "-" + Kr[1]), []), Wt = Math.min, nt = Math.max, co = Math.round, Jn = Math.floor, kt = (e) => ({
  x: e,
  y: e
}), Oi = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Ei = {
  start: "end",
  end: "start"
};
function nr(e, n, t) {
  return nt(e, Wt(n, t));
}
function $t(e, n) {
  return typeof e == "function" ? e(n) : e;
}
function vt(e) {
  return e.split("-")[0];
}
function mt(e) {
  return e.split("-")[1];
}
function gr(e) {
  return e === "x" ? "y" : "x";
}
function br(e) {
  return e === "y" ? "height" : "width";
}
function wt(e) {
  return ["top", "bottom"].includes(vt(e)) ? "y" : "x";
}
function yr(e) {
  return gr(wt(e));
}
function _a(e, n, t) {
  t === void 0 && (t = !1);
  const o = mt(e), r = yr(e), a = br(r);
  let l = r === "x" ? o === (t ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return n.reference[a] > n.floating[a] && (l = po(l)), [l, po(l)];
}
function Ti(e) {
  const n = po(e);
  return [fo(e), n, fo(n)];
}
function fo(e) {
  return e.replace(/start|end/g, (n) => Ei[n]);
}
function Di(e, n, t) {
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
  const r = mt(e);
  let a = Di(vt(e), t === "start", o);
  return r && (a = a.map((l) => l + "-" + r), n && (a = a.concat(a.map(fo)))), a;
}
function po(e) {
  return e.replace(/left|right|bottom|top/g, (n) => Oi[n]);
}
function Pi(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Pa(e) {
  return typeof e != "number" ? Pi(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function mo(e) {
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
function Xr(e, n, t) {
  let {
    reference: o,
    floating: r
  } = e;
  const a = wt(n), l = yr(n), i = br(l), s = vt(n), u = a === "y", d = o.x + o.width / 2 - r.width / 2, c = o.y + o.height / 2 - r.height / 2, m = o[i] / 2 - r[i] / 2;
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
const $i = async (e, n, t) => {
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
  } = Xr(u, o, s), m = o, f = {}, p = 0;
  for (let v = 0; v < i.length; v++) {
    const {
      name: g,
      fn: b
    } = i[v], {
      x: y,
      y: h,
      data: k,
      reset: w
    } = await b({
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
    }, w && p <= 50 && (p++, typeof w == "object" && (w.placement && (m = w.placement), w.rects && (u = w.rects === !0 ? await l.getElementRects({
      reference: e,
      floating: n,
      strategy: r
    }) : w.rects), {
      x: d,
      y: c
    } = Xr(u, m, s)), v = -1);
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
  } = $t(n, e), p = Pa(f), g = i[m ? c === "floating" ? "reference" : "floating" : c], b = mo(await a.getClippingRect({
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
  }, w = mo(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: y,
    offsetParent: h,
    strategy: s
  }) : y);
  return {
    top: (b.top - w.top + p.top) / k.y,
    bottom: (w.bottom - b.bottom + p.bottom) / k.y,
    left: (b.left - w.left + p.left) / k.x,
    right: (w.right - b.right + p.right) / k.x
  };
}
const Ii = (e) => ({
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
    } = $t(e, n) || {};
    if (u == null)
      return {};
    const c = Pa(d), m = {
      x: t,
      y: o
    }, f = yr(r), p = br(f), v = await l.getDimensions(u), g = f === "y", b = g ? "top" : "left", y = g ? "bottom" : "right", h = g ? "clientHeight" : "clientWidth", k = a.reference[p] + a.reference[f] - m[f] - a.floating[p], w = m[f] - a.reference[f], D = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(u));
    let C = D ? D[h] : 0;
    (!C || !await (l.isElement == null ? void 0 : l.isElement(D))) && (C = i.floating[h] || a.floating[p]);
    const _ = k / 2 - w / 2, K = C / 2 - v[p] / 2 - 1, $ = Wt(c[b], K), B = Wt(c[y], K), W = $, x = C - v[p] - B, I = C / 2 - v[p] / 2 + _, L = nr(W, I, x), U = !s.arrow && mt(r) != null && I !== L && a.reference[p] / 2 - (I < W ? $ : B) - v[p] / 2 < 0, oe = U ? I < W ? I - W : I - x : 0;
    return {
      [f]: m[f] + oe,
      data: {
        [f]: L,
        centerOffset: I - L - oe,
        ...U && {
          alignmentOffset: oe
        }
      },
      reset: U
    };
  }
});
function Ri(e, n, t) {
  return (e ? [...t.filter((r) => mt(r) === e), ...t.filter((r) => mt(r) !== e)] : t.filter((r) => vt(r) === r)).filter((r) => e ? mt(r) === e || (n ? fo(r) !== r : !1) : !0);
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
        allowedPlacements: m = Yr,
        autoAlignment: f = !0,
        ...p
      } = $t(e, n), v = c !== void 0 || m === Yr ? Ri(c || null, f, m) : m, g = await Eo(n, p), b = ((t = l.autoPlacement) == null ? void 0 : t.index) || 0, y = v[b];
      if (y == null)
        return {};
      const h = _a(y, a, await (s.isRTL == null ? void 0 : s.isRTL(u.floating)));
      if (i !== y)
        return {
          reset: {
            placement: v[0]
          }
        };
      const k = [g[vt(y)], g[h[0]], g[h[1]]], w = [...((o = l.autoPlacement) == null ? void 0 : o.overflows) || [], {
        placement: y,
        overflows: k
      }], D = v[b + 1];
      if (D)
        return {
          data: {
            index: b + 1,
            overflows: w
          },
          reset: {
            placement: D
          }
        };
      const C = w.map(($) => {
        const B = mt($.placement);
        return [$.placement, B && d ? (
          // Check along the mainAxis and main crossAxis side.
          $.overflows.slice(0, 2).reduce((W, x) => W + x, 0)
        ) : (
          // Check only the mainAxis.
          $.overflows[0]
        ), $.overflows];
      }).sort(($, B) => $[1] - B[1]), K = ((r = C.filter(($) => $[2].slice(
        0,
        // Aligned placements should not check their opposite crossAxis
        // side.
        mt($[0]) ? 2 : 3
      ).every((B) => B <= 0))[0]) == null ? void 0 : r[0]) || C[0][0];
      return K !== i ? {
        data: {
          index: b + 1,
          overflows: w
        },
        reset: {
          placement: K
        }
      } : {};
    }
  };
}, Mi = function(e) {
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
      } = $t(e, n);
      if ((t = a.arrow) != null && t.alignmentOffset)
        return {};
      const b = vt(r), y = wt(i), h = vt(i) === i, k = await (s.isRTL == null ? void 0 : s.isRTL(u.floating)), w = m || (h || !v ? [po(i)] : Ti(i)), D = p !== "none";
      !m && D && w.push(..._i(i, v, p, k));
      const C = [i, ...w], _ = await Eo(n, g), K = [];
      let $ = ((o = a.flip) == null ? void 0 : o.overflows) || [];
      if (d && K.push(_[b]), c) {
        const I = _a(r, l, k);
        K.push(_[I[0]], _[I[1]]);
      }
      if ($ = [...$, {
        placement: r,
        overflows: K
      }], !K.every((I) => I <= 0)) {
        var B, W;
        const I = (((B = a.flip) == null ? void 0 : B.index) || 0) + 1, L = C[I];
        if (L && (!(c === "alignment" ? y !== wt(L) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        $.every((ce) => ce.overflows[0] > 0 && wt(ce.placement) === y)))
          return {
            data: {
              index: I,
              overflows: $
            },
            reset: {
              placement: L
            }
          };
        let U = (W = $.filter((oe) => oe.overflows[0] <= 0).sort((oe, ce) => oe.overflows[1] - ce.overflows[1])[0]) == null ? void 0 : W.placement;
        if (!U)
          switch (f) {
            case "bestFit": {
              var x;
              const oe = (x = $.filter((ce) => {
                if (D) {
                  const re = wt(ce.placement);
                  return re === y || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  re === "y";
                }
                return !0;
              }).map((ce) => [ce.placement, ce.overflows.filter((re) => re > 0).reduce((re, Ce) => re + Ce, 0)]).sort((ce, re) => ce[1] - re[1])[0]) == null ? void 0 : x[0];
              oe && (U = oe);
              break;
            }
            case "initialPlacement":
              U = i;
              break;
          }
        if (r !== U)
          return {
            reset: {
              placement: U
            }
          };
      }
      return {};
    }
  };
};
async function Li(e, n) {
  const {
    placement: t,
    platform: o,
    elements: r
  } = e, a = await (o.isRTL == null ? void 0 : o.isRTL(r.floating)), l = vt(t), i = mt(t), s = wt(t) === "y", u = ["left", "top"].includes(l) ? -1 : 1, d = a && s ? -1 : 1, c = $t(n, e);
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
      } = n, s = await Li(n, e);
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
}, Ni = function(e) {
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
              x: b,
              y
            } = g;
            return {
              x: b,
              y
            };
          }
        },
        ...s
      } = $t(e, n), u = {
        x: t,
        y: o
      }, d = await Eo(n, s), c = wt(vt(r)), m = gr(c);
      let f = u[m], p = u[c];
      if (a) {
        const g = m === "y" ? "top" : "left", b = m === "y" ? "bottom" : "right", y = f + d[g], h = f - d[b];
        f = nr(y, f, h);
      }
      if (l) {
        const g = c === "y" ? "top" : "left", b = c === "y" ? "bottom" : "right", y = p + d[g], h = p - d[b];
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
}, Vi = function(e) {
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
      } = $t(e, n), d = {
        x: t,
        y: o
      }, c = wt(r), m = gr(c);
      let f = d[m], p = d[c];
      const v = $t(i, n), g = typeof v == "number" ? {
        mainAxis: v,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...v
      };
      if (s) {
        const h = m === "y" ? "height" : "width", k = a.reference[m] - a.floating[h] + g.mainAxis, w = a.reference[m] + a.reference[h] - g.mainAxis;
        f < k ? f = k : f > w && (f = w);
      }
      if (u) {
        var b, y;
        const h = m === "y" ? "width" : "height", k = ["top", "left"].includes(vt(r)), w = a.reference[c] - a.floating[h] + (k && ((b = l.offset) == null ? void 0 : b[c]) || 0) + (k ? 0 : g.crossAxis), D = a.reference[c] + a.reference[h] + (k ? 0 : ((y = l.offset) == null ? void 0 : y[c]) || 0) - (k ? g.crossAxis : 0);
        p < w ? p = w : p > D && (p = D);
      }
      return {
        [m]: f,
        [c]: p
      };
    }
  };
}, Bi = function(e) {
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
      } = $t(e, n), d = await Eo(n, u), c = vt(r), m = mt(r), f = wt(r) === "y", {
        width: p,
        height: v
      } = a.floating;
      let g, b;
      c === "top" || c === "bottom" ? (g = c, b = m === (await (l.isRTL == null ? void 0 : l.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (b = c, g = m === "end" ? "top" : "bottom");
      const y = v - d.top - d.bottom, h = p - d.left - d.right, k = Wt(v - d[g], y), w = Wt(p - d[b], h), D = !n.middlewareData.shift;
      let C = k, _ = w;
      if ((t = n.middlewareData.shift) != null && t.enabled.x && (_ = h), (o = n.middlewareData.shift) != null && o.enabled.y && (C = y), D && !m) {
        const $ = nt(d.left, 0), B = nt(d.right, 0), W = nt(d.top, 0), x = nt(d.bottom, 0);
        f ? _ = p - 2 * ($ !== 0 || B !== 0 ? $ + B : nt(d.left, d.right)) : C = v - 2 * (W !== 0 || x !== 0 ? W + x : nt(d.top, d.bottom));
      }
      await s({
        ...n,
        availableWidth: _,
        availableHeight: C
      });
      const K = await l.getDimensions(i.floating);
      return p !== K.width || v !== K.height ? {
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
function ln(e) {
  return wr(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function at(e) {
  var n;
  return (e == null || (n = e.ownerDocument) == null ? void 0 : n.defaultView) || window;
}
function Tt(e) {
  var n;
  return (n = (wr(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : n.documentElement;
}
function wr(e) {
  return To() ? e instanceof Node || e instanceof at(e).Node : !1;
}
function ht(e) {
  return To() ? e instanceof Element || e instanceof at(e).Element : !1;
}
function Ct(e) {
  return To() ? e instanceof HTMLElement || e instanceof at(e).HTMLElement : !1;
}
function Jr(e) {
  return !To() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof at(e).ShadowRoot;
}
function Hn(e) {
  const {
    overflow: n,
    overflowX: t,
    overflowY: o,
    display: r
  } = gt(e);
  return /auto|scroll|overlay|hidden|clip/.test(n + o + t) && !["inline", "contents"].includes(r);
}
function ji(e) {
  return ["table", "td", "th"].includes(ln(e));
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
function xr(e) {
  const n = kr(), t = ht(e) ? gt(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((o) => t[o] ? t[o] !== "none" : !1) || (t.containerType ? t.containerType !== "normal" : !1) || !n && (t.backdropFilter ? t.backdropFilter !== "none" : !1) || !n && (t.filter ? t.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((o) => (t.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (t.contain || "").includes(o));
}
function zi(e) {
  let n = Gt(e);
  for (; Ct(n) && !wn(n); ) {
    if (xr(n))
      return n;
    if (Do(n))
      return null;
    n = Gt(n);
  }
  return null;
}
function kr() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function wn(e) {
  return ["html", "body", "#document"].includes(ln(e));
}
function gt(e) {
  return at(e).getComputedStyle(e);
}
function _o(e) {
  return ht(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Gt(e) {
  if (ln(e) === "html")
    return e;
  const n = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Jr(e) && e.host || // Fallback.
    Tt(e)
  );
  return Jr(n) ? n.host : n;
}
function $a(e) {
  const n = Gt(e);
  return wn(n) ? e.ownerDocument ? e.ownerDocument.body : e.body : Ct(n) && Hn(n) ? n : $a(n);
}
function Bn(e, n, t) {
  var o;
  n === void 0 && (n = []), t === void 0 && (t = !0);
  const r = $a(e), a = r === ((o = e.ownerDocument) == null ? void 0 : o.body), l = at(r);
  if (a) {
    const i = or(l);
    return n.concat(l, l.visualViewport || [], Hn(r) ? r : [], i && t ? Bn(i) : []);
  }
  return n.concat(r, Bn(r, [], t));
}
function or(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Ia(e) {
  const n = gt(e);
  let t = parseFloat(n.width) || 0, o = parseFloat(n.height) || 0;
  const r = Ct(e), a = r ? e.offsetWidth : t, l = r ? e.offsetHeight : o, i = co(t) !== a || co(o) !== l;
  return i && (t = a, o = l), {
    width: t,
    height: o,
    $: i
  };
}
function Sr(e) {
  return ht(e) ? e : e.contextElement;
}
function gn(e) {
  const n = Sr(e);
  if (!Ct(n))
    return kt(1);
  const t = n.getBoundingClientRect(), {
    width: o,
    height: r,
    $: a
  } = Ia(n);
  let l = (a ? co(t.width) : t.width) / o, i = (a ? co(t.height) : t.height) / r;
  return (!l || !Number.isFinite(l)) && (l = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: l,
    y: i
  };
}
const Hi = /* @__PURE__ */ kt(0);
function Ra(e) {
  const n = at(e);
  return !kr() || !n.visualViewport ? Hi : {
    x: n.visualViewport.offsetLeft,
    y: n.visualViewport.offsetTop
  };
}
function Wi(e, n, t) {
  return n === void 0 && (n = !1), !t || n && t !== at(e) ? !1 : n;
}
function rn(e, n, t, o) {
  n === void 0 && (n = !1), t === void 0 && (t = !1);
  const r = e.getBoundingClientRect(), a = Sr(e);
  let l = kt(1);
  n && (o ? ht(o) && (l = gn(o)) : l = gn(e));
  const i = Wi(a, t, o) ? Ra(a) : kt(0);
  let s = (r.left + i.x) / l.x, u = (r.top + i.y) / l.y, d = r.width / l.x, c = r.height / l.y;
  if (a) {
    const m = at(a), f = o && ht(o) ? at(o) : o;
    let p = m, v = or(p);
    for (; v && o && f !== p; ) {
      const g = gn(v), b = v.getBoundingClientRect(), y = gt(v), h = b.left + (v.clientLeft + parseFloat(y.paddingLeft)) * g.x, k = b.top + (v.clientTop + parseFloat(y.paddingTop)) * g.y;
      s *= g.x, u *= g.y, d *= g.x, c *= g.y, s += h, u += k, p = at(v), v = or(p);
    }
  }
  return mo({
    width: d,
    height: c,
    x: s,
    y: u
  });
}
function Cr(e, n) {
  const t = _o(e).scrollLeft;
  return n ? n.left + t : rn(Tt(e)).left + t;
}
function Aa(e, n, t) {
  t === void 0 && (t = !1);
  const o = e.getBoundingClientRect(), r = o.left + n.scrollLeft - (t ? 0 : (
    // RTL <body> scrollbar.
    Cr(e, o)
  )), a = o.top + n.scrollTop;
  return {
    x: r,
    y: a
  };
}
function Gi(e) {
  let {
    elements: n,
    rect: t,
    offsetParent: o,
    strategy: r
  } = e;
  const a = r === "fixed", l = Tt(o), i = n ? Do(n.floating) : !1;
  if (o === l || i && a)
    return t;
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = kt(1);
  const d = kt(0), c = Ct(o);
  if ((c || !c && !a) && ((ln(o) !== "body" || Hn(l)) && (s = _o(o)), Ct(o))) {
    const f = rn(o);
    u = gn(o), d.x = f.x + o.clientLeft, d.y = f.y + o.clientTop;
  }
  const m = l && !c && !a ? Aa(l, s, !0) : kt(0);
  return {
    width: t.width * u.x,
    height: t.height * u.y,
    x: t.x * u.x - s.scrollLeft * u.x + d.x + m.x,
    y: t.y * u.y - s.scrollTop * u.y + d.y + m.y
  };
}
function Ui(e) {
  return Array.from(e.getClientRects());
}
function qi(e) {
  const n = Tt(e), t = _o(e), o = e.ownerDocument.body, r = nt(n.scrollWidth, n.clientWidth, o.scrollWidth, o.clientWidth), a = nt(n.scrollHeight, n.clientHeight, o.scrollHeight, o.clientHeight);
  let l = -t.scrollLeft + Cr(e);
  const i = -t.scrollTop;
  return gt(o).direction === "rtl" && (l += nt(n.clientWidth, o.clientWidth) - r), {
    width: r,
    height: a,
    x: l,
    y: i
  };
}
function Ki(e, n) {
  const t = at(e), o = Tt(e), r = t.visualViewport;
  let a = o.clientWidth, l = o.clientHeight, i = 0, s = 0;
  if (r) {
    a = r.width, l = r.height;
    const u = kr();
    (!u || u && n === "fixed") && (i = r.offsetLeft, s = r.offsetTop);
  }
  return {
    width: a,
    height: l,
    x: i,
    y: s
  };
}
function Yi(e, n) {
  const t = rn(e, !0, n === "fixed"), o = t.top + e.clientTop, r = t.left + e.clientLeft, a = Ct(e) ? gn(e) : kt(1), l = e.clientWidth * a.x, i = e.clientHeight * a.y, s = r * a.x, u = o * a.y;
  return {
    width: l,
    height: i,
    x: s,
    y: u
  };
}
function Qr(e, n, t) {
  let o;
  if (n === "viewport")
    o = Ki(e, t);
  else if (n === "document")
    o = qi(Tt(e));
  else if (ht(n))
    o = Yi(n, t);
  else {
    const r = Ra(e);
    o = {
      x: n.x - r.x,
      y: n.y - r.y,
      width: n.width,
      height: n.height
    };
  }
  return mo(o);
}
function Ma(e, n) {
  const t = Gt(e);
  return t === n || !ht(t) || wn(t) ? !1 : gt(t).position === "fixed" || Ma(t, n);
}
function Xi(e, n) {
  const t = n.get(e);
  if (t)
    return t;
  let o = Bn(e, [], !1).filter((i) => ht(i) && ln(i) !== "body"), r = null;
  const a = gt(e).position === "fixed";
  let l = a ? Gt(e) : e;
  for (; ht(l) && !wn(l); ) {
    const i = gt(l), s = xr(l);
    !s && i.position === "fixed" && (r = null), (a ? !s && !r : !s && i.position === "static" && !!r && ["absolute", "fixed"].includes(r.position) || Hn(l) && !s && Ma(e, l)) ? o = o.filter((d) => d !== l) : r = i, l = Gt(l);
  }
  return n.set(e, o), o;
}
function Ji(e) {
  let {
    element: n,
    boundary: t,
    rootBoundary: o,
    strategy: r
  } = e;
  const l = [...t === "clippingAncestors" ? Do(n) ? [] : Xi(n, this._c) : [].concat(t), o], i = l[0], s = l.reduce((u, d) => {
    const c = Qr(n, d, r);
    return u.top = nt(c.top, u.top), u.right = Wt(c.right, u.right), u.bottom = Wt(c.bottom, u.bottom), u.left = nt(c.left, u.left), u;
  }, Qr(n, i, r));
  return {
    width: s.right - s.left,
    height: s.bottom - s.top,
    x: s.left,
    y: s.top
  };
}
function Qi(e) {
  const {
    width: n,
    height: t
  } = Ia(e);
  return {
    width: n,
    height: t
  };
}
function Zi(e, n, t) {
  const o = Ct(n), r = Tt(n), a = t === "fixed", l = rn(e, !0, a, n);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const s = kt(0);
  function u() {
    s.x = Cr(r);
  }
  if (o || !o && !a)
    if ((ln(n) !== "body" || Hn(r)) && (i = _o(n)), o) {
      const f = rn(n, !0, a, n);
      s.x = f.x + n.clientLeft, s.y = f.y + n.clientTop;
    } else r && u();
  a && !o && r && u();
  const d = r && !o && !a ? Aa(r, i) : kt(0), c = l.left + i.scrollLeft - s.x - d.x, m = l.top + i.scrollTop - s.y - d.y;
  return {
    x: c,
    y: m,
    width: l.width,
    height: l.height
  };
}
function Vo(e) {
  return gt(e).position === "static";
}
function Zr(e, n) {
  if (!Ct(e) || gt(e).position === "fixed")
    return null;
  if (n)
    return n(e);
  let t = e.offsetParent;
  return Tt(e) === t && (t = t.ownerDocument.body), t;
}
function La(e, n) {
  const t = at(e);
  if (Do(e))
    return t;
  if (!Ct(e)) {
    let r = Gt(e);
    for (; r && !wn(r); ) {
      if (ht(r) && !Vo(r))
        return r;
      r = Gt(r);
    }
    return t;
  }
  let o = Zr(e, n);
  for (; o && ji(o) && Vo(o); )
    o = Zr(o, n);
  return o && wn(o) && Vo(o) && !xr(o) ? t : o || zi(e) || t;
}
const es = async function(e) {
  const n = this.getOffsetParent || La, t = this.getDimensions, o = await t(e.floating);
  return {
    reference: Zi(e.reference, await n(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function ts(e) {
  return gt(e).direction === "rtl";
}
const ns = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Gi,
  getDocumentElement: Tt,
  getClippingRect: Ji,
  getOffsetParent: La,
  getElementRects: es,
  getClientRects: Ui,
  getDimensions: Qi,
  getScale: gn,
  isElement: ht,
  isRTL: ts
};
function Fa(e, n) {
  return e.x === n.x && e.y === n.y && e.width === n.width && e.height === n.height;
}
function os(e, n) {
  let t = null, o;
  const r = Tt(e);
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
    const p = Jn(c), v = Jn(r.clientWidth - (d + m)), g = Jn(r.clientHeight - (c + f)), b = Jn(d), h = {
      rootMargin: -p + "px " + -v + "px " + -g + "px " + -b + "px",
      threshold: nt(0, Wt(1, s)) || 1
    };
    let k = !0;
    function w(D) {
      const C = D[0].intersectionRatio;
      if (C !== s) {
        if (!k)
          return l();
        C ? l(!1, C) : o = setTimeout(() => {
          l(!1, 1e-7);
        }, 1e3);
      }
      C === 1 && !Fa(u, e.getBoundingClientRect()) && l(), k = !1;
    }
    try {
      t = new IntersectionObserver(w, {
        ...h,
        // Handle <iframe>s
        root: r.ownerDocument
      });
    } catch {
      t = new IntersectionObserver(w, h);
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
  } = o, u = Sr(e), d = r || a ? [...u ? Bn(u) : [], ...Bn(n)] : [];
  d.forEach((b) => {
    r && b.addEventListener("scroll", t, {
      passive: !0
    }), a && b.addEventListener("resize", t);
  });
  const c = u && i ? os(u, t) : null;
  let m = -1, f = null;
  l && (f = new ResizeObserver((b) => {
    let [y] = b;
    y && y.target === u && f && (f.unobserve(n), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      var h;
      (h = f) == null || h.observe(n);
    })), t();
  }), u && !s && f.observe(u), f.observe(n));
  let p, v = s ? rn(e) : null;
  s && g();
  function g() {
    const b = rn(e);
    v && !Fa(v, b) && t(), v = b, p = requestAnimationFrame(g);
  }
  return t(), () => {
    var b;
    d.forEach((y) => {
      r && y.removeEventListener("scroll", t), a && y.removeEventListener("resize", t);
    }), c == null || c(), (b = f) == null || b.disconnect(), f = null, s && cancelAnimationFrame(p);
  };
}
const Sn = Fi, $o = Ai, Cn = Ni, Or = Mi, Er = Bi, rs = Ii, Tr = Vi, as = (e, n, t) => {
  const o = /* @__PURE__ */ new Map(), r = {
    platform: ns,
    ...t
  }, a = {
    ...r.platform,
    _c: o
  };
  return $i(e, n, {
    ...r,
    platform: a
  });
};
function ls(e) {
  return e != null && typeof e == "object" && "$el" in e;
}
function rr(e) {
  if (ls(e)) {
    const n = e.$el;
    return wr(n) && ln(n) === "#comment" ? null : n;
  }
  return e;
}
function mn(e) {
  return typeof e == "function" ? e() : F(e);
}
function is(e) {
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const t = rr(mn(e.element));
      return t == null ? {} : rs({
        element: t,
        padding: e.padding
      }).fn(n);
    }
  };
}
function Na(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function ea(e, n) {
  const t = Na(e);
  return Math.round(n * t) / t;
}
function On(e, n, t) {
  t === void 0 && (t = {});
  const o = t.whileElementsMounted, r = O(() => {
    var C;
    return (C = mn(t.open)) != null ? C : !0;
  }), a = O(() => mn(t.middleware)), l = O(() => {
    var C;
    return (C = mn(t.placement)) != null ? C : "bottom";
  }), i = O(() => {
    var C;
    return (C = mn(t.strategy)) != null ? C : "absolute";
  }), s = O(() => {
    var C;
    return (C = mn(t.transform)) != null ? C : !0;
  }), u = O(() => rr(e.value)), d = O(() => rr(n.value)), c = S(0), m = S(0), f = S(i.value), p = S(l.value), v = ko({}), g = S(!1), b = O(() => {
    const C = {
      position: f.value,
      left: "0",
      top: "0"
    };
    if (!d.value)
      return C;
    const _ = ea(d.value, c.value), K = ea(d.value, m.value);
    return s.value ? {
      ...C,
      transform: "translate(" + _ + "px, " + K + "px)",
      ...Na(d.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: f.value,
      left: _ + "px",
      top: K + "px"
    };
  });
  let y;
  function h() {
    if (u.value == null || d.value == null)
      return;
    const C = r.value;
    as(u.value, d.value, {
      middleware: a.value,
      placement: l.value,
      strategy: i.value
    }).then((_) => {
      c.value = _.x, m.value = _.y, f.value = _.strategy, p.value = _.placement, v.value = _.middlewareData, g.value = C !== !1;
    });
  }
  function k() {
    typeof y == "function" && (y(), y = void 0);
  }
  function w() {
    if (k(), o === void 0) {
      h();
      return;
    }
    if (u.value != null && d.value != null) {
      y = o(u.value, d.value, h);
      return;
    }
  }
  function D() {
    r.value || (g.value = !1);
  }
  return le([a, l, i, r], h, {
    flush: "sync"
  }), le([u, d], w, {
    flush: "sync"
  }), le(r, D, {
    flush: "sync"
  }), Gl() && ka(k), {
    x: dn(c),
    y: dn(m),
    strategy: dn(f),
    placement: dn(p),
    middlewareData: dn(v),
    isPositioned: dn(g),
    floatingStyles: b,
    update: h
  };
}
function cn(e, n, t) {
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
      const p = Math.round((Date.now() - d) * 100) / 100, v = Math.round((Date.now() - f) * 100) / 100, g = v / 16, b = (y, h) => {
        for (y = String(y); y.length < h; )
          y = " " + y;
        return y;
      };
      console.info(
        `%c⏱ ${b(v, 5)} /${b(p, 5)} ms`,
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
function Bo(e, n) {
  if (e === void 0)
    throw new Error("Unexpected undefined");
  return e;
}
const ss = (e, n) => Math.abs(e - n) < 1, us = (e, n, t) => {
  let o;
  return function(...r) {
    e.clearTimeout(o), o = e.setTimeout(() => n.apply(this, r), t);
  };
}, ds = (e) => e, cs = (e) => {
  const n = Math.max(e.startIndex - e.overscan, 0), t = Math.min(e.endIndex + e.overscan, e.count - 1), o = [];
  for (let r = n; r <= t; r++)
    o.push(r);
  return o;
}, fs = (e, n) => {
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
}, ta = {
  passive: !0
}, na = typeof window > "u" ? !0 : "onscrollend" in window, ps = (e, n) => {
  const t = e.scrollElement;
  if (!t)
    return;
  const o = e.targetWindow;
  if (!o)
    return;
  let r = 0;
  const a = e.options.useScrollendEvent && na ? () => {
  } : us(
    o,
    () => {
      n(r, !1);
    },
    e.options.isScrollingResetDelay
  ), l = (d) => () => {
    const { horizontal: c, isRtl: m } = e.options;
    r = c ? t.scrollLeft * (m && -1 || 1) : t.scrollTop, a(), n(r, d);
  }, i = l(!0), s = l(!1);
  s(), t.addEventListener("scroll", i, ta);
  const u = e.options.useScrollendEvent && na;
  return u && t.addEventListener("scrollend", s, ta), () => {
    t.removeEventListener("scroll", i), u && t.removeEventListener("scrollend", s);
  };
}, ms = (e, n, t) => {
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
}, vs = (e, {
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
class hs {
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
        getItemKey: ds,
        rangeExtractor: cs,
        onChange: () => {
        },
        measureElement: ms,
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
    }, this.maybeNotify = cn(
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
    }, this.getMeasurementOptions = cn(
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
    ), this.getMeasurements = cn(
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
          const c = a(d), m = this.options.lanes === 1 ? u[d - 1] : this.getFurthestMeasurement(u, d), f = m ? m.end + this.options.gap : o + r, p = i.get(c), v = typeof p == "number" ? p : this.options.estimateSize(d), g = f + v, b = m ? m.lane : d % this.options.lanes;
          u[d] = {
            index: d,
            start: f,
            size: v,
            end: g,
            key: c,
            lane: b
          };
        }
        return this.measurementsCache = u, u;
      },
      {
        key: process.env.NODE_ENV !== "production" && "getMeasurements",
        debug: () => this.options.debug
      }
    ), this.calculateRange = cn(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (t, o, r, a) => this.range = t.length > 0 && o > 0 ? gs({
        measurements: t,
        outerSize: o,
        scrollOffset: r,
        lanes: a
      }) : null,
      {
        key: process.env.NODE_ENV !== "production" && "calculateRange",
        debug: () => this.options.debug
      }
    ), this.getVirtualIndexes = cn(
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
    }, this.getVirtualItems = cn(
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
        return Bo(
          o[Va(
            0,
            o.length - 1,
            (r) => Bo(o[r]).start,
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
          const [u] = Bo(
            this.getOffsetForIndex(t, i)
          );
          ss(u, this.getScrollOffset()) || this.scrollToIndex(t, { align: i, behavior: r });
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
function gs({
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
  let l = Va(
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
function bs(e) {
  const n = new hs(F(e)), t = ko(n), o = n._didMount();
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
          Ur(t), (i = r.onChange) == null || i.call(r, a, l);
        }
      }), n._willUpdate(), Ur(t);
    },
    {
      immediate: !0
    }
  ), ka(o), t;
}
function ys(e) {
  return bs(
    O(() => ({
      observeElementRect: fs,
      observeElementOffset: ps,
      scrollToFn: vs,
      ...F(e)
    }))
  );
}
function Ba(e, n, t) {
  let o = S(t == null ? void 0 : t.value), r = O(() => e.value !== void 0);
  return [O(() => r.value ? e.value : o.value), function(a) {
    return r.value || (o.value = a), n == null ? void 0 : n(a);
  }];
}
function Dr(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((n) => setTimeout(() => {
    throw n;
  }));
}
function Ut() {
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
    let o = Ut();
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
function ws() {
  let e = Ut();
  return xe(() => e.dispose()), e;
}
function xs() {
  let e = ws();
  return (n) => {
    e.dispose(), e.nextFrame(n);
  };
}
let ks = 0;
function Ss() {
  return ++ks;
}
function Me() {
  return Ss();
}
function V(e) {
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
var Cs = Object.defineProperty, Os = (e, n, t) => n in e ? Cs(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, oa = (e, n, t) => (Os(e, typeof n != "symbol" ? n + "" : n, t), t);
let Es = class {
  constructor() {
    oa(this, "current", this.detect()), oa(this, "currentId", 0);
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
}, Wn = new Es();
function ut(e) {
  var n, t;
  return Wn.isServer ? null : e ? "ownerDocument" in e ? e.ownerDocument : "value" in e ? (t = (n = V(e)) == null ? void 0 : n.ownerDocument) != null ? t : document : null : document;
}
let vo = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var qe = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(qe || {}), jn = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(jn || {}), Ts = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Ts || {});
function Io(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(vo)).sort((n, t) => Math.sign((n.tabIndex || Number.MAX_SAFE_INTEGER) - (t.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var _r = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(_r || {});
function ja(e, n = 0) {
  var t;
  return e === ((t = ut(e)) == null ? void 0 : t.body) ? !1 : Pe(n, { 0() {
    return e.matches(vo);
  }, 1() {
    let o = e;
    for (; o !== null; ) {
      if (o.matches(vo)) return !0;
      o = o.parentElement;
    }
    return !1;
  } });
}
var Ds = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(Ds || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function on(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let _s = ["textarea", "input"].join(",");
function Ps(e) {
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
function pt(e, n, { sorted: t = !0, relativeTo: o = null, skipElements: r = [] } = {}) {
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
  return n & 6 && Ps(f) && f.select(), 2;
}
function Ha() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function $s() {
  return /Android/gi.test(window.navigator.userAgent);
}
function Wa() {
  return Ha() || $s();
}
function _n(e, n, t, o) {
  Wn.isServer || Le((r) => {
    e.value && (document.addEventListener(n, t, o), r(() => document.removeEventListener(n, t, o)));
  });
}
function Ga(e, n, t, o) {
  Wn.isServer || Le((r) => {
    e.value && (window.addEventListener(n, t, o), r(() => window.removeEventListener(n, t, o)));
  });
}
const ra = 30;
function Pr(e, n, t = O(() => !0)) {
  function o(l, i) {
    if (l.defaultPrevented) return;
    let s = i(l);
    if (s === null || !s.getRootNode().contains(s)) return;
    let u = function d(c) {
      return typeof c == "function" ? d(c()) : Array.isArray(c) || c instanceof Set ? c : [c];
    }(e);
    for (let d of u) {
      if (d === null) continue;
      let c = d instanceof HTMLElement ? d : V(d);
      if (c != null && c.contains(s) || l.composed && l.composedPath().includes(c)) return;
    }
    return !ja(s, _r.Loose) && s.tabIndex !== -1 && l.preventDefault(), n(l, s);
  }
  let r = S(null);
  _n(t, "pointerdown", (l) => {
    var i, s;
    r.value = ((s = (i = l.composedPath) == null ? void 0 : i.call(l)) == null ? void 0 : s[0]) || l.target;
  }, !0), _n(t, "mousedown", (l) => {
    var i, s;
    r.value = ((s = (i = l.composedPath) == null ? void 0 : i.call(l)) == null ? void 0 : s[0]) || l.target;
  }, !0), _n(t, "click", (l) => {
    Wa() || r.value && (o(l, () => r.value), r.value = null);
  }, !0);
  let a = { x: 0, y: 0 };
  _n(t, "touchstart", (l) => {
    a.x = l.touches[0].clientX, a.y = l.touches[0].clientY;
  }, !0), _n(t, "touchend", (l) => {
    let i = { x: l.changedTouches[0].clientX, y: l.changedTouches[0].clientY };
    if (!(Math.abs(i.x - a.x) >= ra || Math.abs(i.y - a.y) >= ra)) return o(l, () => l.target instanceof HTMLElement ? l.target : null);
  }, !0), Ga(t, "blur", (l) => o(l, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
function aa(e, n) {
  if (e) return e;
  let t = n ?? "button";
  if (typeof t == "string" && t.toLowerCase() === "button") return "button";
}
function $r(e, n) {
  let t = S(aa(e.value.type, e.value.as));
  return se(() => {
    t.value = aa(e.value.type, e.value.as);
  }), Le(() => {
    var o;
    t.value || V(n) && V(n) instanceof HTMLButtonElement && !((o = V(n)) != null && o.hasAttribute("type")) && (t.value = "button");
  }), t;
}
function la(e) {
  return [e.screenX, e.screenY];
}
function Is() {
  let e = S([-1, -1]);
  return { wasMoved(n) {
    let t = la(n);
    return e.value[0] === t[0] && e.value[1] === t[1] ? !1 : (e.value = t, !0);
  }, update(n) {
    e.value = la(n);
  } };
}
function Rs({ container: e, accept: n, walk: t, enabled: o }) {
  Le(() => {
    let r = e.value;
    if (!r || o !== void 0 && !o.value) return;
    let a = ut(e);
    if (!a) return;
    let l = Object.assign((s) => n(s), { acceptNode: n }), i = a.createTreeWalker(r, NodeFilter.SHOW_ELEMENT, l, !1);
    for (; i.nextNode(); ) t(i.currentNode);
  });
}
var st = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(st || {}), Vt = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(Vt || {});
function ge({ visible: e = !0, features: n = 0, ourProps: t, theirProps: o, ...r }) {
  var a;
  let l = qa(o, t), i = Object.assign(r, { props: l });
  if (e || n & 2 && l.static) return jo(i);
  if (n & 1) {
    let s = (a = l.unmount) == null || a ? 0 : 1;
    return Pe(s, { 0() {
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
      if (!As(c) || m.length > 0) throw new Error(['Passing props on "template"!', "", `The current component <${r} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(s).concat(Object.keys(n)).map((v) => v.trim()).filter((v, g, b) => b.indexOf(v) === g).sort((v, g) => v.localeCompare(g)).map((v) => `  - ${v}`).join(`
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
  return e.flatMap((n) => n.type === we ? Ua(n.children) : [n]);
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
var Ot = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Ot || {});
let It = Y({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: n, attrs: t }) {
  return () => {
    var o;
    let { features: r, ...a } = e, l = { "aria-hidden": (r & 2) === 2 ? !0 : (o = a["aria-hidden"]) != null ? o : void 0, hidden: (r & 4) === 4 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(r & 4) === 4 && (r & 2) !== 2 && { display: "none" } } };
    return ge({ ourProps: l, theirProps: a, slot: {}, attrs: t, slots: n, name: "Hidden" });
  };
} }), Ya = Symbol("Context");
var De = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(De || {});
function Ms() {
  return Tn() !== null;
}
function Tn() {
  return fe(Ya, null);
}
function Ir(e) {
  $e(Ya, e);
}
var Te = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(Te || {}), Xa = ((e) => (e[e.Left = 0] = "Left", e[e.Right = 2] = "Right", e))(Xa || {});
function Ls(e) {
  function n() {
    document.readyState !== "loading" && (e(), document.removeEventListener("DOMContentLoaded", n));
  }
  typeof window < "u" && typeof document < "u" && (document.addEventListener("DOMContentLoaded", n), n());
}
let _t = [];
Ls(() => {
  function e(n) {
    if (!(n.target instanceof HTMLElement) || n.target === document.body || _t[0] === n.target) return;
    let t = n.target;
    t = t.closest(vo), _t.unshift(t ?? n.target), _t = _t.filter((o) => o != null && o.isConnected), _t.splice(10);
  }
  window.addEventListener("click", e, { capture: !0 }), window.addEventListener("mousedown", e, { capture: !0 }), window.addEventListener("focus", e, { capture: !0 }), document.body.addEventListener("click", e, { capture: !0 }), document.body.addEventListener("mousedown", e, { capture: !0 }), document.body.addEventListener("focus", e, { capture: !0 });
});
function Fs(e) {
  throw new Error("Unexpected object: " + e);
}
var ze = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(ze || {});
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
function Ns(e) {
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
function Vs(e, n) {
  return e === n;
}
var Bs = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Bs || {}), js = ((e) => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(js || {}), zs = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Focus = 1] = "Focus", e[e.Other = 2] = "Other", e))(zs || {});
let el = Symbol("ComboboxContext");
function sn(e) {
  let n = fe(el, null);
  if (n === null) {
    let t = new Error(`<${e} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t, sn), t;
  }
  return n;
}
let tl = Symbol("VirtualContext"), Hs = Y({ name: "VirtualProvider", setup(e, { slots: n }) {
  let t = sn("VirtualProvider"), o = O(() => {
    let i = V(t.optionsRef);
    if (!i) return { start: 0, end: 0 };
    let s = window.getComputedStyle(i);
    return { start: parseFloat(s.paddingBlockStart || s.paddingTop), end: parseFloat(s.paddingBlockEnd || s.paddingBottom) };
  }), r = ys(O(() => ({ scrollPaddingStart: o.value.start, scrollPaddingEnd: o.value.end, count: t.virtual.value.options.length, estimateSize() {
    return 40;
  }, getScrollElement() {
    return V(t.optionsRef);
  }, overscan: 12 }))), a = O(() => {
    var i;
    return (i = t.virtual.value) == null ? void 0 : i.options;
  }), l = S(0);
  return le([a], () => {
    l.value += 1;
  }), $e(tl, t.virtual.value ? r : null), () => [ie("div", { style: { position: "relative", width: "100%", height: `${r.value.getTotalSize()}px` }, ref: (i) => {
    i && t.activationTrigger.value !== 0 && t.activeOptionIndex.value !== null && t.virtual.value.options.length > t.activeOptionIndex.value && r.value.scrollToIndex(t.activeOptionIndex.value);
  } }, r.value.getVirtualItems().map((i) => Sa(n.default({ option: t.virtual.value.options[i.index], open: t.comboboxState.value === 0 })[0], { key: `${l.value}-${i.index}`, "data-index": i.index, "aria-setsize": t.virtual.value.options.length, "aria-posinset": i.index + 1, style: { position: "absolute", top: 0, left: 0, transform: `translateY(${i.start}px)`, overflowAnchor: "none" } })))];
} }), Rr = Y({ name: "Combobox", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: !1 }, by: { type: [String, Function], nullable: !0, default: null }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, form: { type: String, optional: !0 }, name: { type: String, optional: !0 }, nullable: { type: Boolean, default: !1 }, multiple: { type: [Boolean], default: !1 }, immediate: { type: [Boolean], default: !1 }, virtual: { type: Object, default: null } }, inheritAttrs: !1, setup(e, { slots: n, attrs: t, emit: o }) {
  let r = S(1), a = S(null), l = S(null), i = S(null), s = S(null), u = S({ static: !1, hold: !1 }), d = S([]), c = S(null), m = S(2), f = S(!1);
  function p($ = (B) => B) {
    let B = c.value !== null ? d.value[c.value] : null, W = $(d.value.slice()), x = W.length > 0 && W[0].dataRef.order.value !== null ? W.sort((L, U) => L.dataRef.order.value - U.dataRef.order.value) : za(W, (L) => V(L.dataRef.domRef)), I = B ? x.indexOf(B) : null;
    return I === -1 && (I = null), { options: x, activeOptionIndex: I };
  }
  let v = O(() => e.multiple ? 1 : 0), g = O(() => e.nullable), [b, y] = Ba(O(() => e.modelValue), ($) => o("update:modelValue", $), O(() => e.defaultValue)), h = O(() => b.value === void 0 ? Pe(v.value, { 1: [], 0: void 0 }) : b.value), k = null, w = null;
  function D($) {
    return Pe(v.value, { 0() {
      return y == null ? void 0 : y($);
    }, 1: () => {
      let B = Lt(_.value.value).slice(), W = Lt($), x = B.findIndex((I) => _.compare(W, Lt(I)));
      return x === -1 ? B.push(W) : B.splice(x, 1), y == null ? void 0 : y(B);
    } });
  }
  let C = O(() => {
    var $;
    return ($ = e.virtual) == null ? void 0 : $.options;
  });
  le([C], ([$], [B]) => {
    if (_.virtual.value && $ && B && c.value !== null) {
      let W = $.indexOf(B[c.value]);
      W !== -1 ? c.value = W : c.value = null;
    }
  });
  let _ = { comboboxState: r, value: h, mode: v, compare($, B) {
    if (typeof e.by == "string") {
      let W = e.by;
      return ($ == null ? void 0 : $[W]) === (B == null ? void 0 : B[W]);
    }
    return e.by === null ? Vs($, B) : e.by($, B);
  }, calculateIndex($) {
    return _.virtual.value ? e.by === null ? _.virtual.value.options.indexOf($) : _.virtual.value.options.findIndex((B) => _.compare(B, $)) : d.value.findIndex((B) => _.compare(B.dataRef.value, $));
  }, defaultValue: O(() => e.defaultValue), nullable: g, immediate: O(() => e.immediate), virtual: O(() => {
    var $;
    return e.virtual ? { options: e.virtual.options, disabled: ($ = e.virtual.disabled) != null ? $ : () => !1 } : null;
  }), inputRef: l, labelRef: a, buttonRef: i, optionsRef: s, disabled: O(() => e.disabled), options: d, change($) {
    y($);
  }, activeOptionIndex: O(() => {
    if (f.value && c.value === null && (_.virtual.value ? _.virtual.value.options.length > 0 : d.value.length > 0)) {
      if (_.virtual.value) {
        let B = _.virtual.value.options.findIndex((W) => {
          var x;
          return !((x = _.virtual.value) != null && x.disabled(W));
        });
        if (B !== -1) return B;
      }
      let $ = d.value.findIndex((B) => !B.dataRef.disabled);
      if ($ !== -1) return $;
    }
    return c.value;
  }), activationTrigger: m, optionsPropsRef: u, closeCombobox() {
    f.value = !1, !e.disabled && r.value !== 1 && (r.value = 1, c.value = null);
  }, openCombobox() {
    if (f.value = !0, !e.disabled && r.value !== 0) {
      if (_.value.value) {
        let $ = _.calculateIndex(_.value.value);
        $ !== -1 && (c.value = $);
      }
      r.value = 0;
    }
  }, setActivationTrigger($) {
    m.value = $;
  }, goToOption($, B, W) {
    f.value = !1, k !== null && cancelAnimationFrame(k), k = requestAnimationFrame(() => {
      if (e.disabled || s.value && !u.value.static && r.value === 1) return;
      if (_.virtual.value) {
        c.value = $ === ze.Specific ? B : ia({ focus: $ }, { resolveItems: () => _.virtual.value.options, resolveActiveIndex: () => {
          var L, U;
          return (U = (L = _.activeOptionIndex.value) != null ? L : _.virtual.value.options.findIndex((oe) => {
            var ce;
            return !((ce = _.virtual.value) != null && ce.disabled(oe));
          })) != null ? U : null;
        }, resolveDisabled: (L) => _.virtual.value.disabled(L), resolveId() {
          throw new Error("Function not implemented.");
        } }), m.value = W ?? 2;
        return;
      }
      let x = p();
      if (x.activeOptionIndex === null) {
        let L = x.options.findIndex((U) => !U.dataRef.disabled);
        L !== -1 && (x.activeOptionIndex = L);
      }
      let I = $ === ze.Specific ? B : ia({ focus: $ }, { resolveItems: () => x.options, resolveActiveIndex: () => x.activeOptionIndex, resolveId: (L) => L.id, resolveDisabled: (L) => L.dataRef.disabled });
      c.value = I, m.value = W ?? 2, d.value = x.options;
    });
  }, selectOption($) {
    let B = d.value.find((x) => x.id === $);
    if (!B) return;
    let { dataRef: W } = B;
    D(W.value);
  }, selectActiveOption() {
    if (_.activeOptionIndex.value !== null) {
      if (_.virtual.value) D(_.virtual.value.options[_.activeOptionIndex.value]);
      else {
        let { dataRef: $ } = d.value[_.activeOptionIndex.value];
        D($.value);
      }
      _.goToOption(ze.Specific, _.activeOptionIndex.value);
    }
  }, registerOption($, B) {
    let W = So({ id: $, dataRef: B });
    if (_.virtual.value) {
      d.value.push(W);
      return;
    }
    w && cancelAnimationFrame(w);
    let x = p((I) => (I.push(W), I));
    c.value === null && _.isSelected(B.value.value) && (x.activeOptionIndex = x.options.indexOf(W)), d.value = x.options, c.value = x.activeOptionIndex, m.value = 2, x.options.some((I) => !V(I.dataRef.domRef)) && (w = requestAnimationFrame(() => {
      let I = p();
      d.value = I.options, c.value = I.activeOptionIndex;
    }));
  }, unregisterOption($, B) {
    if (k !== null && cancelAnimationFrame(k), B && (f.value = !0), _.virtual.value) {
      d.value = d.value.filter((x) => x.id !== $);
      return;
    }
    let W = p((x) => {
      let I = x.findIndex((L) => L.id === $);
      return I !== -1 && x.splice(I, 1), x;
    });
    d.value = W.options, c.value = W.activeOptionIndex, m.value = 2;
  }, isSelected($) {
    return Pe(v.value, { 0: () => _.compare(Lt(_.value.value), Lt($)), 1: () => Lt(_.value.value).some((B) => _.compare(Lt(B), Lt($))) });
  }, isActive($) {
    return c.value === _.calculateIndex($);
  } };
  Pr([l, i, s], () => _.closeCombobox(), O(() => r.value === 0)), $e(el, _), Ir(O(() => Pe(r.value, { 0: De.Open, 1: De.Closed })));
  let K = O(() => {
    var $;
    return ($ = V(l)) == null ? void 0 : $.closest("form");
  });
  return se(() => {
    le([K], () => {
      if (!K.value || e.defaultValue === void 0) return;
      function $() {
        _.change(e.defaultValue);
      }
      return K.value.addEventListener("reset", $), () => {
        var B;
        (B = K.value) == null || B.removeEventListener("reset", $);
      };
    }, { immediate: !0 });
  }), () => {
    var $, B, W;
    let { name: x, disabled: I, form: L, ...U } = e, oe = { open: r.value === 0, disabled: I, activeIndex: _.activeOptionIndex.value, activeOption: _.activeOptionIndex.value === null ? null : _.virtual.value ? _.virtual.value.options[($ = _.activeOptionIndex.value) != null ? $ : 0] : (W = (B = _.options.value[_.activeOptionIndex.value]) == null ? void 0 : B.dataRef.value) != null ? W : null, value: h.value };
    return ie(we, [...x != null && h.value != null ? Ja({ [x]: h.value }).map(([ce, re]) => ie(It, Ka({ features: Ot.Hidden, key: ce, as: "input", type: "hidden", hidden: !0, readOnly: !0, form: L, disabled: I, name: ce, value: re }))) : [], ge({ theirProps: { ...t, ...En(U, ["by", "defaultValue", "immediate", "modelValue", "multiple", "nullable", "onUpdate:modelValue", "virtual"]) }, ourProps: {}, slot: oe, slots: n, attrs: t, name: "Combobox" })]);
  };
} });
Y({ name: "ComboboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: () => `headlessui-combobox-label-${Me()}` } }, setup(e, { attrs: n, slots: t }) {
  let o = sn("ComboboxLabel");
  function r() {
    var a;
    (a = V(o.inputRef)) == null || a.focus({ preventScroll: !0 });
  }
  return () => {
    let a = { open: o.comboboxState.value === 0, disabled: o.disabled.value }, { id: l, ...i } = e, s = { id: l, ref: o.labelRef, onClick: r };
    return ge({ ourProps: s, theirProps: i, slot: a, attrs: n, slots: t, name: "ComboboxLabel" });
  };
} });
let Ar = Y({ name: "ComboboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: () => `headlessui-combobox-button-${Me()}` } }, setup(e, { attrs: n, slots: t, expose: o }) {
  let r = sn("ComboboxButton");
  o({ el: r.buttonRef, $el: r.buttonRef });
  function a(s) {
    r.disabled.value || (r.comboboxState.value === 0 ? r.closeCombobox() : (s.preventDefault(), r.openCombobox()), Ue(() => {
      var u;
      return (u = V(r.inputRef)) == null ? void 0 : u.focus({ preventScroll: !0 });
    }));
  }
  function l(s) {
    switch (s.key) {
      case Te.ArrowDown:
        s.preventDefault(), s.stopPropagation(), r.comboboxState.value === 1 && r.openCombobox(), Ue(() => {
          var u;
          return (u = r.inputRef.value) == null ? void 0 : u.focus({ preventScroll: !0 });
        });
        return;
      case Te.ArrowUp:
        s.preventDefault(), s.stopPropagation(), r.comboboxState.value === 1 && (r.openCombobox(), Ue(() => {
          r.value.value || r.goToOption(ze.Last);
        })), Ue(() => {
          var u;
          return (u = r.inputRef.value) == null ? void 0 : u.focus({ preventScroll: !0 });
        });
        return;
      case Te.Escape:
        if (r.comboboxState.value !== 0) return;
        s.preventDefault(), r.optionsRef.value && !r.optionsPropsRef.value.static && s.stopPropagation(), r.closeCombobox(), Ue(() => {
          var u;
          return (u = r.inputRef.value) == null ? void 0 : u.focus({ preventScroll: !0 });
        });
        return;
    }
  }
  let i = $r(O(() => ({ as: e.as, type: n.type })), r.buttonRef);
  return () => {
    var s, u;
    let d = { open: r.comboboxState.value === 0, disabled: r.disabled.value, value: r.value.value }, { id: c, ...m } = e, f = { ref: r.buttonRef, id: c, type: i.value, tabindex: "-1", "aria-haspopup": "listbox", "aria-controls": (s = V(r.optionsRef)) == null ? void 0 : s.id, "aria-expanded": r.comboboxState.value === 0, "aria-labelledby": r.labelRef.value ? [(u = V(r.labelRef)) == null ? void 0 : u.id, c].join(" ") : void 0, disabled: r.disabled.value === !0 ? !0 : void 0, onKeydown: l, onClick: a };
    return ge({ ourProps: f, theirProps: m, slot: d, attrs: n, slots: t, name: "ComboboxButton" });
  };
} }), Mr = Y({ name: "ComboboxInput", props: { as: { type: [Object, String], default: "input" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, displayValue: { type: Function }, defaultValue: { type: String, default: void 0 }, id: { type: String, default: () => `headlessui-combobox-input-${Me()}` } }, emits: { change: (e) => !0 }, setup(e, { emit: n, attrs: t, slots: o, expose: r }) {
  let a = sn("ComboboxInput"), l = O(() => ut(V(a.inputRef))), i = { value: !1 };
  r({ el: a.inputRef, $el: a.inputRef });
  function s() {
    a.change(null);
    let h = V(a.optionsRef);
    h && (h.scrollTop = 0), a.goToOption(ze.Nothing);
  }
  let u = O(() => {
    var h;
    let k = a.value.value;
    return V(a.inputRef) ? typeof e.displayValue < "u" && k !== void 0 ? (h = e.displayValue(k)) != null ? h : "" : typeof k == "string" ? k : "" : "";
  });
  se(() => {
    le([u, a.comboboxState, l], ([h, k], [w, D]) => {
      if (i.value) return;
      let C = V(a.inputRef);
      C && ((D === 0 && k === 1 || h !== w) && (C.value = h), requestAnimationFrame(() => {
        var _;
        if (i.value || !C || ((_ = l.value) == null ? void 0 : _.activeElement) !== C) return;
        let { selectionStart: K, selectionEnd: $ } = C;
        Math.abs(($ ?? 0) - (K ?? 0)) === 0 && K === 0 && C.setSelectionRange(C.value.length, C.value.length);
      }));
    }, { immediate: !0 }), le([a.comboboxState], ([h], [k]) => {
      if (h === 0 && k === 1) {
        if (i.value) return;
        let w = V(a.inputRef);
        if (!w) return;
        let D = w.value, { selectionStart: C, selectionEnd: _, selectionDirection: K } = w;
        w.value = "", w.value = D, K !== null ? w.setSelectionRange(C, _, K) : w.setSelectionRange(C, _);
      }
    });
  });
  let d = S(!1);
  function c() {
    d.value = !0;
  }
  function m() {
    Ut().nextFrame(() => {
      d.value = !1;
    });
  }
  let f = xs();
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
        return i.value = !1, h.preventDefault(), h.stopPropagation(), Pe(a.comboboxState.value, { 0: () => a.goToOption(ze.Next), 1: () => a.openCombobox() });
      case Te.ArrowUp:
        return i.value = !1, h.preventDefault(), h.stopPropagation(), Pe(a.comboboxState.value, { 0: () => a.goToOption(ze.Previous), 1: () => {
          a.openCombobox(), Ue(() => {
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
    var k, w, D;
    let C = (k = h.relatedTarget) != null ? k : _t.find((_) => _ !== h.currentTarget);
    if (i.value = !1, !((w = V(a.optionsRef)) != null && w.contains(C)) && !((D = V(a.buttonRef)) != null && D.contains(C)) && a.comboboxState.value === 0) return h.preventDefault(), a.mode.value === 0 && (a.nullable.value && a.value.value === null ? s() : a.activationTrigger.value !== 1 && a.selectActiveOption()), a.closeCombobox();
  }
  function b(h) {
    var k, w, D;
    let C = (k = h.relatedTarget) != null ? k : _t.find((_) => _ !== h.currentTarget);
    (w = V(a.buttonRef)) != null && w.contains(C) || (D = V(a.optionsRef)) != null && D.contains(C) || a.disabled.value || a.immediate.value && a.comboboxState.value !== 0 && (a.openCombobox(), Ut().nextFrame(() => {
      a.setActivationTrigger(1);
    }));
  }
  let y = O(() => {
    var h, k, w, D;
    return (D = (w = (k = e.defaultValue) != null ? k : a.defaultValue.value !== void 0 ? (h = e.displayValue) == null ? void 0 : h.call(e, a.defaultValue.value) : null) != null ? w : a.defaultValue.value) != null ? D : "";
  });
  return () => {
    var h, k, w, D, C, _, K;
    let $ = { open: a.comboboxState.value === 0 }, { id: B, displayValue: W, onChange: x, ...I } = e, L = { "aria-controls": (h = a.optionsRef.value) == null ? void 0 : h.id, "aria-expanded": a.comboboxState.value === 0, "aria-activedescendant": a.activeOptionIndex.value === null ? void 0 : a.virtual.value ? (k = a.options.value.find((U) => !a.virtual.value.disabled(U.dataRef.value) && a.compare(U.dataRef.value, a.virtual.value.options[a.activeOptionIndex.value]))) == null ? void 0 : k.id : (w = a.options.value[a.activeOptionIndex.value]) == null ? void 0 : w.id, "aria-labelledby": (_ = (D = V(a.labelRef)) == null ? void 0 : D.id) != null ? _ : (C = V(a.buttonRef)) == null ? void 0 : C.id, "aria-autocomplete": "list", id: B, onCompositionstart: c, onCompositionend: m, onKeydown: p, onInput: v, onFocus: b, onBlur: g, role: "combobox", type: (K = t.type) != null ? K : "text", tabIndex: 0, ref: a.inputRef, defaultValue: y.value, disabled: a.disabled.value === !0 ? !0 : void 0 };
    return ge({ ourProps: L, theirProps: I, slot: $, attrs: t, slots: o, features: st.RenderStrategy | st.Static, name: "ComboboxInput" });
  };
} }), Lr = Y({ name: "ComboboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, hold: { type: [Boolean], default: !1 } }, setup(e, { attrs: n, slots: t, expose: o }) {
  let r = sn("ComboboxOptions"), a = `headlessui-combobox-options-${Me()}`;
  o({ el: r.optionsRef, $el: r.optionsRef }), Le(() => {
    r.optionsPropsRef.value.static = e.static;
  }), Le(() => {
    r.optionsPropsRef.value.hold = e.hold;
  });
  let l = Tn(), i = O(() => l !== null ? (l.value & De.Open) === De.Open : r.comboboxState.value === 0);
  Rs({ container: O(() => V(r.optionsRef)), enabled: O(() => r.comboboxState.value === 0), accept(u) {
    return u.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : u.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(u) {
    u.setAttribute("role", "none");
  } });
  function s(u) {
    u.preventDefault();
  }
  return () => {
    var u, d, c;
    let m = { open: r.comboboxState.value === 0 }, f = { "aria-labelledby": (c = (u = V(r.labelRef)) == null ? void 0 : u.id) != null ? c : (d = V(r.buttonRef)) == null ? void 0 : d.id, id: a, ref: r.optionsRef, role: "listbox", "aria-multiselectable": r.mode.value === 1 ? !0 : void 0, onMousedown: s }, p = En(e, ["hold"]);
    return ge({ ourProps: f, theirProps: p, slot: m, attrs: n, slots: r.virtual.value && r.comboboxState.value === 0 ? { ...t, default: () => [ie(Hs, {}, t.default)] } : t, features: st.RenderStrategy | st.Static, visible: i.value, name: "ComboboxOptions" });
  };
} }), zn = Y({ name: "ComboboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: !1 }, order: { type: [Number], default: null } }, setup(e, { slots: n, attrs: t, expose: o }) {
  let r = sn("ComboboxOption"), a = `headlessui-combobox-option-${Me()}`, l = S(null), i = O(() => {
    var y;
    return e.disabled || ((y = r.virtual.value) == null ? void 0 : y.disabled(e.value));
  });
  o({ el: l, $el: l });
  let s = O(() => {
    var y;
    return r.virtual.value ? r.activeOptionIndex.value === r.calculateIndex(e.value) : r.activeOptionIndex.value === null ? !1 : ((y = r.options.value[r.activeOptionIndex.value]) == null ? void 0 : y.id) === a;
  }), u = O(() => r.isSelected(e.value)), d = fe(tl, null), c = O(() => ({ disabled: e.disabled, value: e.value, domRef: l, order: O(() => e.order) }));
  se(() => r.registerOption(a, c)), xe(() => r.unregisterOption(a, s.value)), Le(() => {
    let y = V(l);
    y && (d == null || d.value.measureElement(y));
  }), Le(() => {
    r.comboboxState.value === 0 && s.value && (r.virtual.value || r.activationTrigger.value !== 0 && Ue(() => {
      var y, h;
      return (h = (y = V(l)) == null ? void 0 : y.scrollIntoView) == null ? void 0 : h.call(y, { block: "nearest" });
    }));
  });
  function m(y) {
    y.preventDefault(), y.button === Xa.Left && (i.value || (r.selectOption(a), Wa() || requestAnimationFrame(() => {
      var h;
      return (h = V(r.inputRef)) == null ? void 0 : h.focus({ preventScroll: !0 });
    }), r.mode.value === 0 && r.closeCombobox()));
  }
  function f() {
    var y;
    if (e.disabled || (y = r.virtual.value) != null && y.disabled(e.value)) return r.goToOption(ze.Nothing);
    let h = r.calculateIndex(e.value);
    r.goToOption(ze.Specific, h);
  }
  let p = Is();
  function v(y) {
    p.update(y);
  }
  function g(y) {
    var h;
    if (!p.wasMoved(y) || e.disabled || (h = r.virtual.value) != null && h.disabled(e.value) || s.value) return;
    let k = r.calculateIndex(e.value);
    r.goToOption(ze.Specific, k, 0);
  }
  function b(y) {
    var h;
    p.wasMoved(y) && (e.disabled || (h = r.virtual.value) != null && h.disabled(e.value) || s.value && (r.optionsPropsRef.value.hold || r.goToOption(ze.Nothing)));
  }
  return () => {
    let { disabled: y } = e, h = { active: s.value, selected: u.value, disabled: y }, k = { id: a, ref: l, role: "option", tabIndex: y === !0 ? void 0 : -1, "aria-disabled": y === !0 ? !0 : void 0, "aria-selected": u.value, disabled: void 0, onMousedown: m, onFocus: f, onPointerenter: v, onMouseenter: v, onPointermove: g, onMousemove: g, onPointerleave: b, onMouseleave: b }, w = En(e, ["order", "value"]);
    return ge({ ourProps: k, theirProps: w, slot: h, attrs: t, slots: n, name: "ComboboxOption" });
  };
} });
function Fr(e, n, t, o) {
  Wn.isServer || Le((r) => {
    e = e ?? window, e.addEventListener(n, t, o), r(() => e.removeEventListener(n, t, o));
  });
}
var rt = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(rt || {});
function Nr() {
  let e = S(0), n = S(!0);
  return Ga(n, "keydown", (t) => {
    t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
  }), e;
}
function nl(e) {
  if (!e) return /* @__PURE__ */ new Set();
  if (typeof e == "function") return new Set(e());
  let n = /* @__PURE__ */ new Set();
  for (let t of e.value) {
    let o = V(t);
    o instanceof HTMLElement && n.add(o);
  }
  return n;
}
var ol = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(ol || {});
let Pn = Object.assign(Y({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: [Object, Function], default: S(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: n, slots: t, expose: o }) {
  let r = S(null);
  o({ el: r, $el: r });
  let a = O(() => ut(r)), l = S(!1);
  se(() => l.value = !0), xe(() => l.value = !1), Gs({ ownerDocument: a }, O(() => l.value && !!(e.features & 16)));
  let i = Us({ ownerDocument: a, container: r, initialFocus: O(() => e.initialFocus) }, O(() => l.value && !!(e.features & 2)));
  qs({ ownerDocument: a, container: r, containers: e.containers, previousActiveElement: i }, O(() => l.value && !!(e.features & 8)));
  let s = Nr();
  function u(f) {
    let p = V(r);
    p && ((v) => v())(() => {
      Pe(s.value, { [rt.Forwards]: () => {
        pt(p, qe.First, { skipElements: [f.relatedTarget] });
      }, [rt.Backwards]: () => {
        pt(p, qe.Last, { skipElements: [f.relatedTarget] });
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
    let p = nl(e.containers);
    V(r) instanceof HTMLElement && p.add(V(r));
    let v = f.relatedTarget;
    v instanceof HTMLElement && v.dataset.headlessuiFocusGuard !== "true" && (rl(p, v) || (d.value ? pt(V(r), Pe(s.value, { [rt.Forwards]: () => qe.Next, [rt.Backwards]: () => qe.Previous }) | qe.WrapAround, { relativeTo: f.target }) : f.target instanceof HTMLElement && on(f.target)));
  }
  return () => {
    let f = {}, p = { ref: r, onKeydown: c, onFocusout: m }, { features: v, initialFocus: g, containers: b, ...y } = e;
    return ie(we, [!!(v & 4) && ie(It, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: u, features: Ot.Focusable }), ge({ ourProps: p, theirProps: { ...n, ...y }, slot: f, attrs: n, slots: t, name: "FocusTrap" }), !!(v & 4) && ie(It, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: u, features: Ot.Focusable })]);
  };
} }), { features: ol });
function Ws(e) {
  let n = S(_t.slice());
  return le([e], ([t], [o]) => {
    o === !0 && t === !1 ? Dr(() => {
      n.value.splice(0);
    }) : o === !1 && t === !0 && (n.value = _t.slice());
  }, { flush: "post" }), () => {
    var t;
    return (t = n.value.find((o) => o != null && o.isConnected)) != null ? t : null;
  };
}
function Gs({ ownerDocument: e }, n) {
  let t = Ws(n);
  se(() => {
    Le(() => {
      var o, r;
      n.value || ((o = e.value) == null ? void 0 : o.activeElement) === ((r = e.value) == null ? void 0 : r.body) && on(t());
    }, { flush: "post" });
  }), xe(() => {
    n.value && on(t());
  });
}
function Us({ ownerDocument: e, container: n, initialFocus: t }, o) {
  let r = S(null), a = S(!1);
  return se(() => a.value = !0), xe(() => a.value = !1), se(() => {
    le([n, t, o], (l, i) => {
      if (l.every((u, d) => (i == null ? void 0 : i[d]) === u) || !o.value) return;
      let s = V(n);
      s && Dr(() => {
        var u, d;
        if (!a.value) return;
        let c = V(t), m = (u = e.value) == null ? void 0 : u.activeElement;
        if (c) {
          if (c === m) {
            r.value = m;
            return;
          }
        } else if (s.contains(m)) {
          r.value = m;
          return;
        }
        c ? on(c) : pt(s, qe.First | qe.NoScroll) === jn.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), r.value = (d = e.value) == null ? void 0 : d.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), r;
}
function qs({ ownerDocument: e, container: n, containers: t, previousActiveElement: o }, r) {
  var a;
  Fr((a = e.value) == null ? void 0 : a.defaultView, "focus", (l) => {
    if (!r.value) return;
    let i = nl(t);
    V(n) instanceof HTMLElement && i.add(V(n));
    let s = o.value;
    if (!s) return;
    let u = l.target;
    u && u instanceof HTMLElement ? rl(i, u) ? (o.value = u, on(u)) : (l.preventDefault(), l.stopPropagation(), on(s)) : on(o.value);
  }, !0);
}
function rl(e, n) {
  for (let t of e) if (t.contains(n)) return !0;
  return !1;
}
function Ks(e) {
  let n = ko(e.getSnapshot());
  return xe(e.subscribe(() => {
    n.value = e.getSnapshot();
  })), n;
}
function Ys(e, n) {
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
function Xs() {
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
function Js() {
  return Ha() ? { before({ doc: e, d: n, meta: t }) {
    function o(r) {
      return t.containers.flatMap((a) => a()).some((a) => a.contains(r));
    }
    n.microTask(() => {
      var r;
      if (window.getComputedStyle(e.documentElement).scrollBehavior !== "auto") {
        let i = Ut();
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
function Qs() {
  return { before({ doc: e, d: n }) {
    n.style(e.documentElement, "overflow", "hidden");
  } };
}
function Zs(e) {
  let n = {};
  for (let t of e) Object.assign(n, t(n));
  return n;
}
let en = Ys(() => /* @__PURE__ */ new Map(), { PUSH(e, n) {
  var t;
  let o = (t = this.get(e)) != null ? t : { doc: e, count: 0, d: Ut(), meta: /* @__PURE__ */ new Set() };
  return o.count++, o.meta.add(n), this.set(e, o), this;
}, POP(e, n) {
  let t = this.get(e);
  return t && (t.count--, t.meta.delete(n)), this;
}, SCROLL_PREVENT({ doc: e, d: n, meta: t }) {
  let o = { doc: e, d: n, meta: Zs(t) }, r = [Js(), Xs(), Qs()];
  r.forEach(({ before: a }) => a == null ? void 0 : a(o)), r.forEach(({ after: a }) => a == null ? void 0 : a(o));
}, SCROLL_ALLOW({ d: e }) {
  e.dispose();
}, TEARDOWN({ doc: e }) {
  this.delete(e);
} });
en.subscribe(() => {
  let e = en.getSnapshot(), n = /* @__PURE__ */ new Map();
  for (let [t] of e) n.set(t, t.documentElement.style.overflow);
  for (let t of e.values()) {
    let o = n.get(t.doc) === "hidden", r = t.count !== 0;
    (r && !o || !r && o) && en.dispatch(t.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", t), t.count === 0 && en.dispatch("TEARDOWN", t);
  }
});
function eu(e, n, t) {
  let o = Ks(en), r = O(() => {
    let a = e.value ? o.value.get(e.value) : void 0;
    return a ? a.count > 0 : !1;
  });
  return le([e, n], ([a, l], [i], s) => {
    if (!a || !l) return;
    en.dispatch("PUSH", a, t);
    let u = !1;
    s(() => {
      u || (en.dispatch("POP", i ?? a, t), u = !0);
    });
  }, { immediate: !0 }), r;
}
let zo = /* @__PURE__ */ new Map(), $n = /* @__PURE__ */ new Map();
function sa(e, n = S(!0)) {
  Le((t) => {
    var o;
    if (!n.value) return;
    let r = V(e);
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
  let o = S(null), r = ut(o);
  function a() {
    var l, i, s;
    let u = [];
    for (let d of e) d !== null && (d instanceof HTMLElement ? u.push(d) : "value" in d && d.value instanceof HTMLElement && u.push(d.value));
    if (n != null && n.value) for (let d of n.value) u.push(d);
    for (let d of (l = r == null ? void 0 : r.querySelectorAll("html > *, body > *")) != null ? l : []) d !== document.body && d !== document.head && d instanceof HTMLElement && d.id !== "headlessui-portal-root" && (d.contains(V(o)) || d.contains((s = (i = V(o)) == null ? void 0 : i.getRootNode()) == null ? void 0 : s.host) || u.some((c) => d.contains(c)) || u.push(d));
    return u;
  }
  return { resolveContainers: a, contains(l) {
    return a().some((i) => i.contains(l));
  }, mainTreeNodeRef: o, MainTreeNode() {
    return t != null ? null : ie(It, { features: Ot.Hidden, ref: o });
  } };
}
function tu() {
  let e = S(null);
  return { mainTreeNodeRef: e, MainTreeNode() {
    return ie(It, { features: Ot.Hidden, ref: e });
  } };
}
let ll = Symbol("ForcePortalRootContext");
function nu() {
  return fe(ll, !1);
}
let ar = Y({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: n, attrs: t }) {
  return $e(ll, e.force), () => {
    let { force: o, ...r } = e;
    return ge({ theirProps: r, ourProps: {}, slot: {}, slots: n, attrs: t, name: "ForcePortalRoot" });
  };
} }), il = Symbol("StackContext");
var lr = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(lr || {});
function ou() {
  return fe(il, () => {
  });
}
function ru({ type: e, enabled: n, element: t, onUpdate: o }) {
  let r = ou();
  function a(...l) {
    o == null || o(...l), r(...l);
  }
  se(() => {
    le(n, (l, i) => {
      l ? a(0, e, t) : i === !0 && a(1, e, t);
    }, { immediate: !0, flush: "sync" });
  }), xe(() => {
    n.value && a(1, e, t);
  }), $e(il, a);
}
let sl = Symbol("DescriptionContext");
function au() {
  let e = fe(sl, null);
  if (e === null) throw new Error("Missing parent");
  return e;
}
function ul({ slot: e = S({}), name: n = "Description", props: t = {} } = {}) {
  let o = S([]);
  function r(a) {
    return o.value.push(a), () => {
      let l = o.value.indexOf(a);
      l !== -1 && o.value.splice(l, 1);
    };
  }
  return $e(sl, { register: r, slot: e, name: n, props: t }), O(() => o.value.length > 0 ? o.value.join(" ") : void 0);
}
Y({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: () => `headlessui-description-${Me()}` } }, setup(e, { attrs: n, slots: t }) {
  let o = au();
  return se(() => xe(o.register(e.id))), () => {
    let { name: r = "Description", slot: a = S({}), props: l = {} } = o, { id: i, ...s } = e, u = { ...Object.entries(l).reduce((d, [c, m]) => Object.assign(d, { [c]: F(m) }), {}), id: i };
    return ge({ ourProps: u, theirProps: s, slot: a.value, attrs: n, slots: t, name: r });
  };
} });
function lu(e) {
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
let dl = Y({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: n, attrs: t }) {
  let o = S(null), r = O(() => ut(o)), a = nu(), l = fe(fl, null), i = S(a === !0 || l == null ? lu(o.value) : l.resolveTarget()), s = S(!1);
  se(() => {
    s.value = !0;
  }), Le(() => {
    a || l != null && (i.value = l.resolveTarget());
  });
  let u = fe(ir, null), d = !1, c = Ca();
  return le(o, () => {
    if (d || !u) return;
    let m = V(o);
    m && (xe(u.register(m), c), d = !0);
  }), xe(() => {
    var m, f;
    let p = (m = r.value) == null ? void 0 : m.getElementById("headlessui-portal-root");
    p && i.value === p && i.value.children.length <= 0 && ((f = i.value.parentElement) == null || f.removeChild(i.value));
  }), () => {
    if (!s.value || i.value === null) return null;
    let m = { ref: o, "data-headlessui-portal": "" };
    return ie(Co, { to: i.value }, ge({ ourProps: m, theirProps: e, slot: {}, attrs: t, slots: n, name: "Portal" }));
  };
} }), ir = Symbol("PortalParentContext");
function cl() {
  let e = fe(ir, null), n = S([]);
  function t(a) {
    return n.value.push(a), e && e.register(a), () => o(a);
  }
  function o(a) {
    let l = n.value.indexOf(a);
    l !== -1 && n.value.splice(l, 1), e && e.unregister(a);
  }
  let r = { register: t, unregister: o, portals: n };
  return [n, Y({ name: "PortalWrapper", setup(a, { slots: l }) {
    return $e(ir, r), () => {
      var i;
      return (i = l.default) == null ? void 0 : i.call(l);
    };
  } })];
}
let fl = Symbol("PortalGroupContext"), iu = Y({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: n, slots: t }) {
  let o = So({ resolveTarget() {
    return e.target;
  } });
  return $e(fl, o), () => {
    let { target: r, ...a } = e;
    return ge({ theirProps: a, ourProps: {}, slot: {}, attrs: n, slots: t, name: "PortalGroup" });
  };
} });
var su = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(su || {});
let sr = Symbol("DialogContext");
function Gn(e) {
  let n = fe(sr, null);
  if (n === null) {
    let t = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t, Gn), t;
  }
  return n;
}
let Qn = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", uu = Y({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: Qn }, initialFocus: { type: Object, default: null }, id: { type: String, default: () => `headlessui-dialog-${Me()}` }, role: { type: String, default: "dialog" } }, emits: { close: (e) => !0 }, setup(e, { emit: n, attrs: t, slots: o, expose: r }) {
  var a;
  let l = S(!1);
  se(() => {
    l.value = !0;
  });
  let i = !1, s = O(() => e.role === "dialog" || e.role === "alertdialog" ? e.role : (i || (i = !0, console.warn(`Invalid role [${s}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog")), u = S(0), d = Tn(), c = O(() => e.open === Qn && d !== null ? (d.value & De.Open) === De.Open : e.open), m = S(null), f = O(() => ut(m));
  if (r({ el: m, $el: m }), !(e.open !== Qn || d !== null)) throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof c.value != "boolean") throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${c.value === Qn ? void 0 : e.open}`);
  let p = O(() => l.value && c.value ? 0 : 1), v = O(() => p.value === 0), g = O(() => u.value > 1), b = fe(sr, null) !== null, [y, h] = cl(), { resolveContainers: k, mainTreeNodeRef: w, MainTreeNode: D } = al({ portals: y, defaultContainers: [O(() => {
    var re;
    return (re = L.panelRef.value) != null ? re : m.value;
  })] }), C = O(() => g.value ? "parent" : "leaf"), _ = O(() => d !== null ? (d.value & De.Closing) === De.Closing : !1), K = O(() => b || _.value ? !1 : v.value), $ = O(() => {
    var re, Ce, He;
    return (He = Array.from((Ce = (re = f.value) == null ? void 0 : re.querySelectorAll("body > *")) != null ? Ce : []).find((Ne) => Ne.id === "headlessui-portal-root" ? !1 : Ne.contains(V(w)) && Ne instanceof HTMLElement)) != null ? He : null;
  });
  sa($, K);
  let B = O(() => g.value ? !0 : v.value), W = O(() => {
    var re, Ce, He;
    return (He = Array.from((Ce = (re = f.value) == null ? void 0 : re.querySelectorAll("[data-headlessui-portal]")) != null ? Ce : []).find((Ne) => Ne.contains(V(w)) && Ne instanceof HTMLElement)) != null ? He : null;
  });
  sa(W, B), ru({ type: "Dialog", enabled: O(() => p.value === 0), element: m, onUpdate: (re, Ce) => {
    if (Ce === "Dialog") return Pe(re, { [lr.Add]: () => u.value += 1, [lr.Remove]: () => u.value -= 1 });
  } });
  let x = ul({ name: "DialogDescription", slot: O(() => ({ open: c.value })) }), I = S(null), L = { titleId: I, panelRef: S(null), dialogState: p, setTitleId(re) {
    I.value !== re && (I.value = re);
  }, close() {
    n("close", !1);
  } };
  $e(sr, L);
  let U = O(() => !(!v.value || g.value));
  Pr(k, (re, Ce) => {
    re.preventDefault(), L.close(), Ue(() => Ce == null ? void 0 : Ce.focus());
  }, U);
  let oe = O(() => !(g.value || p.value !== 0));
  Fr((a = f.value) == null ? void 0 : a.defaultView, "keydown", (re) => {
    oe.value && (re.defaultPrevented || re.key === Te.Escape && (re.preventDefault(), re.stopPropagation(), L.close()));
  });
  let ce = O(() => !(_.value || p.value !== 0 || b));
  return eu(f, ce, (re) => {
    var Ce;
    return { containers: [...(Ce = re.containers) != null ? Ce : [], k] };
  }), Le((re) => {
    if (p.value !== 0) return;
    let Ce = V(m);
    if (!Ce) return;
    let He = new ResizeObserver((Ne) => {
      for (let Kt of Ne) {
        let bt = Kt.target.getBoundingClientRect();
        bt.x === 0 && bt.y === 0 && bt.width === 0 && bt.height === 0 && L.close();
      }
    });
    He.observe(Ce), re(() => He.disconnect());
  }), () => {
    let { id: re, open: Ce, initialFocus: He, ...Ne } = e, Kt = { ...t, ref: m, id: re, role: s.value, "aria-modal": p.value === 0 ? !0 : void 0, "aria-labelledby": I.value, "aria-describedby": x.value }, bt = { open: p.value === 0 };
    return ie(ar, { force: !0 }, () => [ie(dl, () => ie(iu, { target: m.value }, () => ie(ar, { force: !1 }, () => ie(Pn, { initialFocus: He, containers: k, features: v.value ? Pe(C.value, { parent: Pn.features.RestoreFocus, leaf: Pn.features.All & ~Pn.features.FocusLock }) : Pn.features.None }, () => ie(h, {}, () => ge({ ourProps: Kt, theirProps: { ...Ne, ...t }, slot: bt, attrs: t, slots: o, visible: p.value === 0, features: st.RenderStrategy | st.Static, name: "Dialog" })))))), ie(D)]);
  };
} });
Y({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-overlay-${Me()}` } }, setup(e, { attrs: n, slots: t }) {
  let o = Gn("DialogOverlay");
  function r(a) {
    a.target === a.currentTarget && (a.preventDefault(), a.stopPropagation(), o.close());
  }
  return () => {
    let { id: a, ...l } = e;
    return ge({ ourProps: { id: a, "aria-hidden": !0, onClick: r }, theirProps: l, slot: { open: o.dialogState.value === 0 }, attrs: n, slots: t, name: "DialogOverlay" });
  };
} });
Y({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-backdrop-${Me()}` } }, inheritAttrs: !1, setup(e, { attrs: n, slots: t, expose: o }) {
  let r = Gn("DialogBackdrop"), a = S(null);
  return o({ el: a, $el: a }), se(() => {
    if (r.panelRef.value === null) throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { id: l, ...i } = e, s = { id: l, ref: a, "aria-hidden": !0 };
    return ie(ar, { force: !0 }, () => ie(dl, () => ge({ ourProps: s, theirProps: { ...n, ...i }, slot: { open: r.dialogState.value === 0 }, attrs: n, slots: t, name: "DialogBackdrop" })));
  };
} });
let du = Y({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-panel-${Me()}` } }, setup(e, { attrs: n, slots: t, expose: o }) {
  let r = Gn("DialogPanel");
  o({ el: r.panelRef, $el: r.panelRef });
  function a(l) {
    l.stopPropagation();
  }
  return () => {
    let { id: l, ...i } = e, s = { id: l, ref: r.panelRef, onClick: a };
    return ge({ ourProps: s, theirProps: i, slot: { open: r.dialogState.value === 0 }, attrs: n, slots: t, name: "DialogPanel" });
  };
} }), cu = Y({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: () => `headlessui-dialog-title-${Me()}` } }, setup(e, { attrs: n, slots: t }) {
  let o = Gn("DialogTitle");
  return se(() => {
    o.setTitleId(e.id), xe(() => o.setTitleId(null));
  }), () => {
    let { id: r, ...a } = e;
    return ge({ ourProps: { id: r }, theirProps: a, slot: { open: o.dialogState.value === 0 }, attrs: n, slots: t, name: "DialogTitle" });
  };
} });
var fu = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(fu || {});
let pl = Symbol("PopoverContext");
function Ro(e) {
  let n = fe(pl, null);
  if (n === null) {
    let t = new Error(`<${e} /> is missing a parent <${gl.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t, Ro), t;
  }
  return n;
}
let ml = Symbol("PopoverGroupContext");
function vl() {
  return fe(ml, null);
}
let hl = Symbol("PopoverPanelContext");
function pu() {
  return fe(hl, null);
}
let gl = Y({ name: "Popover", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: n, attrs: t, expose: o }) {
  var r;
  let a = S(null);
  o({ el: a, $el: a });
  let l = S(1), i = S(null), s = S(null), u = S(null), d = S(null), c = O(() => ut(a)), m = O(() => {
    var w, D;
    if (!V(i) || !V(d)) return !1;
    for (let x of document.querySelectorAll("body > *")) if (Number(x == null ? void 0 : x.contains(V(i))) ^ Number(x == null ? void 0 : x.contains(V(d)))) return !0;
    let C = Io(), _ = C.indexOf(V(i)), K = (_ + C.length - 1) % C.length, $ = (_ + 1) % C.length, B = C[K], W = C[$];
    return !((w = V(d)) != null && w.contains(B)) && !((D = V(d)) != null && D.contains(W));
  }), f = { popoverState: l, buttonId: S(null), panelId: S(null), panel: d, button: i, isPortalled: m, beforePanelSentinel: s, afterPanelSentinel: u, togglePopover() {
    l.value = Pe(l.value, { 0: 1, 1: 0 });
  }, closePopover() {
    l.value !== 1 && (l.value = 1);
  }, close(w) {
    f.closePopover();
    let D = w ? w instanceof HTMLElement ? w : w.value instanceof HTMLElement ? V(w) : V(f.button) : V(f.button);
    D == null || D.focus();
  } };
  $e(pl, f), Ir(O(() => Pe(l.value, { 0: De.Open, 1: De.Closed })));
  let p = { buttonId: f.buttonId, panelId: f.panelId, close() {
    f.closePopover();
  } }, v = vl(), g = v == null ? void 0 : v.registerPopover, [b, y] = cl(), h = al({ mainTreeNodeRef: v == null ? void 0 : v.mainTreeNodeRef, portals: b, defaultContainers: [i, d] });
  function k() {
    var w, D, C, _;
    return (_ = v == null ? void 0 : v.isFocusWithinPopoverGroup()) != null ? _ : ((w = c.value) == null ? void 0 : w.activeElement) && (((D = V(i)) == null ? void 0 : D.contains(c.value.activeElement)) || ((C = V(d)) == null ? void 0 : C.contains(c.value.activeElement)));
  }
  return Le(() => g == null ? void 0 : g(p)), Fr((r = c.value) == null ? void 0 : r.defaultView, "focus", (w) => {
    var D, C;
    w.target !== window && w.target instanceof HTMLElement && l.value === 0 && (k() || i && d && (h.contains(w.target) || (D = V(f.beforePanelSentinel)) != null && D.contains(w.target) || (C = V(f.afterPanelSentinel)) != null && C.contains(w.target) || f.closePopover()));
  }, !0), Pr(h.resolveContainers, (w, D) => {
    var C;
    f.closePopover(), ja(D, _r.Loose) || (w.preventDefault(), (C = V(i)) == null || C.focus());
  }, O(() => l.value === 0)), () => {
    let w = { open: l.value === 0, close: f.close };
    return ie(we, [ie(y, {}, () => ge({ theirProps: { ...e, ...t }, ourProps: { ref: a }, slot: w, slots: n, attrs: t, name: "Popover" })), ie(h.MainTreeNode)]);
  };
} }), mu = Y({ name: "PopoverButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: !1 }, id: { type: String, default: () => `headlessui-popover-button-${Me()}` } }, inheritAttrs: !1, setup(e, { attrs: n, slots: t, expose: o }) {
  let r = Ro("PopoverButton"), a = O(() => ut(r.button));
  o({ el: r.button, $el: r.button }), se(() => {
    r.buttonId.value = e.id;
  }), xe(() => {
    r.buttonId.value = null;
  });
  let l = vl(), i = l == null ? void 0 : l.closeOthers, s = pu(), u = O(() => s === null ? !1 : s.value === r.panelId.value), d = S(null), c = `headlessui-focus-sentinel-${Me()}`;
  u.value || Le(() => {
    r.button.value = V(d);
  });
  let m = $r(O(() => ({ as: e.as, type: n.type })), d);
  function f(h) {
    var k, w, D, C, _;
    if (u.value) {
      if (r.popoverState.value === 1) return;
      switch (h.key) {
        case Te.Space:
        case Te.Enter:
          h.preventDefault(), (w = (k = h.target).click) == null || w.call(k), r.closePopover(), (D = V(r.button)) == null || D.focus();
          break;
      }
    } else switch (h.key) {
      case Te.Space:
      case Te.Enter:
        h.preventDefault(), h.stopPropagation(), r.popoverState.value === 1 && (i == null || i(r.buttonId.value)), r.togglePopover();
        break;
      case Te.Escape:
        if (r.popoverState.value !== 0) return i == null ? void 0 : i(r.buttonId.value);
        if (!V(r.button) || (C = a.value) != null && C.activeElement && !((_ = V(r.button)) != null && _.contains(a.value.activeElement))) return;
        h.preventDefault(), h.stopPropagation(), r.closePopover();
        break;
    }
  }
  function p(h) {
    u.value || h.key === Te.Space && h.preventDefault();
  }
  function v(h) {
    var k, w;
    e.disabled || (u.value ? (r.closePopover(), (k = V(r.button)) == null || k.focus()) : (h.preventDefault(), h.stopPropagation(), r.popoverState.value === 1 && (i == null || i(r.buttonId.value)), r.togglePopover(), (w = V(r.button)) == null || w.focus()));
  }
  function g(h) {
    h.preventDefault(), h.stopPropagation();
  }
  let b = Nr();
  function y() {
    let h = V(r.panel);
    if (!h) return;
    function k() {
      Pe(b.value, { [rt.Forwards]: () => pt(h, qe.First), [rt.Backwards]: () => pt(h, qe.Last) }) === jn.Error && pt(Io().filter((w) => w.dataset.headlessuiFocusGuard !== "true"), Pe(b.value, { [rt.Forwards]: qe.Next, [rt.Backwards]: qe.Previous }), { relativeTo: V(r.button) });
    }
    k();
  }
  return () => {
    let h = r.popoverState.value === 0, k = { open: h }, { id: w, ...D } = e, C = u.value ? { ref: d, type: m.value, onKeydown: f, onClick: v } : { ref: d, id: w, type: m.value, "aria-expanded": r.popoverState.value === 0, "aria-controls": V(r.panel) ? r.panelId.value : void 0, disabled: e.disabled ? !0 : void 0, onKeydown: f, onKeyup: p, onClick: v, onMousedown: g };
    return ie(we, [ge({ ourProps: C, theirProps: { ...n, ...D }, slot: k, attrs: n, slots: t, name: "PopoverButton" }), h && !u.value && r.isPortalled.value && ie(It, { id: c, features: Ot.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: y })]);
  };
} });
Y({ name: "PopoverOverlay", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 } }, setup(e, { attrs: n, slots: t }) {
  let o = Ro("PopoverOverlay"), r = `headlessui-popover-overlay-${Me()}`, a = Tn(), l = O(() => a !== null ? (a.value & De.Open) === De.Open : o.popoverState.value === 0);
  function i() {
    o.closePopover();
  }
  return () => {
    let s = { open: o.popoverState.value === 0 };
    return ge({ ourProps: { id: r, "aria-hidden": !0, onClick: i }, theirProps: e, slot: s, attrs: n, slots: t, features: st.RenderStrategy | st.Static, visible: l.value, name: "PopoverOverlay" });
  };
} });
let vu = Y({ name: "PopoverPanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, focus: { type: Boolean, default: !1 }, id: { type: String, default: () => `headlessui-popover-panel-${Me()}` } }, inheritAttrs: !1, setup(e, { attrs: n, slots: t, expose: o }) {
  let { focus: r } = e, a = Ro("PopoverPanel"), l = O(() => ut(a.panel)), i = `headlessui-focus-sentinel-before-${Me()}`, s = `headlessui-focus-sentinel-after-${Me()}`;
  o({ el: a.panel, $el: a.panel }), se(() => {
    a.panelId.value = e.id;
  }), xe(() => {
    a.panelId.value = null;
  }), $e(hl, a.panelId), Le(() => {
    var g, b;
    if (!r || a.popoverState.value !== 0 || !a.panel) return;
    let y = (g = l.value) == null ? void 0 : g.activeElement;
    (b = V(a.panel)) != null && b.contains(y) || pt(V(a.panel), qe.First);
  });
  let u = Tn(), d = O(() => u !== null ? (u.value & De.Open) === De.Open : a.popoverState.value === 0);
  function c(g) {
    var b, y;
    switch (g.key) {
      case Te.Escape:
        if (a.popoverState.value !== 0 || !V(a.panel) || l.value && !((b = V(a.panel)) != null && b.contains(l.value.activeElement))) return;
        g.preventDefault(), g.stopPropagation(), a.closePopover(), (y = V(a.button)) == null || y.focus();
        break;
    }
  }
  function m(g) {
    var b, y, h, k, w;
    let D = g.relatedTarget;
    D && V(a.panel) && ((b = V(a.panel)) != null && b.contains(D) || (a.closePopover(), ((h = (y = V(a.beforePanelSentinel)) == null ? void 0 : y.contains) != null && h.call(y, D) || (w = (k = V(a.afterPanelSentinel)) == null ? void 0 : k.contains) != null && w.call(k, D)) && D.focus({ preventScroll: !0 })));
  }
  let f = Nr();
  function p() {
    let g = V(a.panel);
    if (!g) return;
    function b() {
      Pe(f.value, { [rt.Forwards]: () => {
        var y;
        pt(g, qe.First) === jn.Error && ((y = V(a.afterPanelSentinel)) == null || y.focus());
      }, [rt.Backwards]: () => {
        var y;
        (y = V(a.button)) == null || y.focus({ preventScroll: !0 });
      } });
    }
    b();
  }
  function v() {
    let g = V(a.panel);
    if (!g) return;
    function b() {
      Pe(f.value, { [rt.Forwards]: () => {
        let y = V(a.button), h = V(a.panel);
        if (!y) return;
        let k = Io(), w = k.indexOf(y), D = k.slice(0, w + 1), C = [...k.slice(w + 1), ...D];
        for (let _ of C.slice()) if (_.dataset.headlessuiFocusGuard === "true" || h != null && h.contains(_)) {
          let K = C.indexOf(_);
          K !== -1 && C.splice(K, 1);
        }
        pt(C, qe.First, { sorted: !1 });
      }, [rt.Backwards]: () => {
        var y;
        pt(g, qe.Previous) === jn.Error && ((y = V(a.button)) == null || y.focus());
      } });
    }
    b();
  }
  return () => {
    let g = { open: a.popoverState.value === 0, close: a.close }, { id: b, focus: y, ...h } = e, k = { ref: a.panel, id: b, onKeydown: c, onFocusout: r && a.popoverState.value === 0 ? m : void 0, tabIndex: -1 };
    return ge({ ourProps: k, theirProps: { ...n, ...h }, attrs: n, slot: g, slots: { ...t, default: (...w) => {
      var D;
      return [ie(we, [d.value && a.isPortalled.value && ie(It, { id: i, ref: a.beforePanelSentinel, features: Ot.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: p }), (D = t.default) == null ? void 0 : D.call(t, ...w), d.value && a.isPortalled.value && ie(It, { id: s, ref: a.afterPanelSentinel, features: Ot.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: v })])];
    } }, features: st.RenderStrategy | st.Static, visible: d.value, name: "PopoverPanel" });
  };
} });
Y({ name: "PopoverGroup", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" } }, setup(e, { attrs: n, slots: t, expose: o }) {
  let r = S(null), a = ko([]), l = O(() => ut(r)), i = tu();
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
    return (m = V(r)) != null && m.contains(p) ? !0 : a.value.some((v) => {
      var g, b;
      return ((g = f.getElementById(v.buttonId.value)) == null ? void 0 : g.contains(p)) || ((b = f.getElementById(v.panelId.value)) == null ? void 0 : b.contains(p));
    });
  }
  function c(m) {
    for (let f of a.value) f.buttonId.value !== m && f.close();
  }
  return $e(ml, { registerPopover: u, unregisterPopover: s, isFocusWithinPopoverGroup: d, closeOthers: c, mainTreeNodeRef: i.mainTreeNodeRef }), () => ie(we, [ge({ ourProps: { ref: r }, theirProps: { ...e, ...n }, slot: {}, attrs: n, slots: t, name: "PopoverGroup" }), ie(i.MainTreeNode)]);
} });
let bl = Symbol("LabelContext");
function yl() {
  let e = fe(bl, null);
  if (e === null) {
    let n = new Error("You used a <Label /> component, but it is not inside a parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(n, yl), n;
  }
  return e;
}
function hu({ slot: e = {}, name: n = "Label", props: t = {} } = {}) {
  let o = S([]);
  function r(a) {
    return o.value.push(a), () => {
      let l = o.value.indexOf(a);
      l !== -1 && o.value.splice(l, 1);
    };
  }
  return $e(bl, { register: r, slot: e, name: n, props: t }), O(() => o.value.length > 0 ? o.value.join(" ") : void 0);
}
Y({ name: "Label", props: { as: { type: [Object, String], default: "label" }, passive: { type: [Boolean], default: !1 }, id: { type: String, default: () => `headlessui-label-${Me()}` } }, setup(e, { slots: n, attrs: t }) {
  let o = yl();
  return se(() => xe(o.register(e.id))), () => {
    let { name: r = "Label", slot: a = {}, props: l = {} } = o, { id: i, passive: s, ...u } = e, d = { ...Object.entries(l).reduce((c, [m, f]) => Object.assign(c, { [m]: F(f) }), {}), id: i };
    return s && (delete d.onClick, delete d.htmlFor, delete u.onClick), ge({ ourProps: d, theirProps: u, slot: a, attrs: t, slots: n, name: r });
  };
} });
let wl = Symbol("GroupContext");
Y({ name: "SwitchGroup", props: { as: { type: [Object, String], default: "template" } }, setup(e, { slots: n, attrs: t }) {
  let o = S(null), r = hu({ name: "SwitchLabel", props: { htmlFor: O(() => {
    var l;
    return (l = o.value) == null ? void 0 : l.id;
  }), onClick(l) {
    o.value && (l.currentTarget.tagName === "LABEL" && l.preventDefault(), o.value.click(), o.value.focus({ preventScroll: !0 }));
  } } }), a = ul({ name: "SwitchDescription" });
  return $e(wl, { switchRef: o, labelledby: r, describedby: a }), () => ge({ theirProps: e, ourProps: {}, slot: {}, slots: n, attrs: t, name: "SwitchGroup" });
} });
let gu = Y({ name: "Switch", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "button" }, modelValue: { type: Boolean, default: void 0 }, defaultChecked: { type: Boolean, optional: !0 }, form: { type: String, optional: !0 }, name: { type: String, optional: !0 }, value: { type: String, optional: !0 }, id: { type: String, default: () => `headlessui-switch-${Me()}` }, disabled: { type: Boolean, default: !1 }, tabIndex: { type: Number, default: 0 } }, inheritAttrs: !1, setup(e, { emit: n, attrs: t, slots: o, expose: r }) {
  let a = fe(wl, null), [l, i] = Ba(O(() => e.modelValue), (g) => n("update:modelValue", g), O(() => e.defaultChecked));
  function s() {
    i(!l.value);
  }
  let u = S(null), d = a === null ? u : a.switchRef, c = $r(O(() => ({ as: e.as, type: t.type })), d);
  r({ el: d, $el: d });
  function m(g) {
    g.preventDefault(), s();
  }
  function f(g) {
    g.key === Te.Space ? (g.preventDefault(), s()) : g.key === Te.Enter && Ns(g.currentTarget);
  }
  function p(g) {
    g.preventDefault();
  }
  let v = O(() => {
    var g, b;
    return (b = (g = V(d)) == null ? void 0 : g.closest) == null ? void 0 : b.call(g, "form");
  });
  return se(() => {
    le([v], () => {
      if (!v.value || e.defaultChecked === void 0) return;
      function g() {
        i(e.defaultChecked);
      }
      return v.value.addEventListener("reset", g), () => {
        var b;
        (b = v.value) == null || b.removeEventListener("reset", g);
      };
    }, { immediate: !0 });
  }), () => {
    let { id: g, name: b, value: y, form: h, tabIndex: k, ...w } = e, D = { checked: l.value }, C = { id: g, ref: d, role: "switch", type: c.value, tabIndex: k === -1 ? 0 : k, "aria-checked": l.value, "aria-labelledby": a == null ? void 0 : a.labelledby.value, "aria-describedby": a == null ? void 0 : a.describedby.value, onClick: m, onKeyup: f, onKeypress: p };
    return ie(we, [b != null && l.value != null ? ie(It, Ka({ features: Ot.Hidden, as: "input", type: "checkbox", hidden: !0, readOnly: !0, checked: l.value, form: h, disabled: w.disabled, name: b, value: y })) : null, ge({ ourProps: C, theirProps: { ...t, ...En(w, ["modelValue", "defaultChecked"]) }, slot: D, attrs: t, slots: o, name: "Switch" })]);
  };
} });
function bu(e) {
  let n = { called: !1 };
  return (...t) => {
    if (!n.called) return n.called = !0, e(...t);
  };
}
function Ho(e, ...n) {
  e && n.length > 0 && e.classList.add(...n);
}
function Zn(e, ...n) {
  e && n.length > 0 && e.classList.remove(...n);
}
var ur = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(ur || {});
function yu(e, n) {
  let t = Ut();
  if (!e) return t.dispose;
  let { transitionDuration: o, transitionDelay: r } = getComputedStyle(e), [a, l] = [o, r].map((i) => {
    let [s = 0] = i.split(",").filter(Boolean).map((u) => u.includes("ms") ? parseFloat(u) : parseFloat(u) * 1e3).sort((u, d) => d - u);
    return s;
  });
  return a !== 0 ? t.setTimeout(() => n("finished"), a + l) : n("finished"), t.add(() => n("cancelled")), t.dispose;
}
function ua(e, n, t, o, r, a) {
  let l = Ut(), i = a !== void 0 ? bu(a) : () => {
  };
  return Zn(e, ...r), Ho(e, ...n, ...t), l.nextFrame(() => {
    Zn(e, ...t), Ho(e, ...o), l.add(yu(e, (s) => (Zn(e, ...o, ...n), Ho(e, ...r), i(s))));
  }), l.add(() => Zn(e, ...n, ...t, ...o, ...r)), l.add(() => i("cancelled")), l.dispose;
}
function Yt(e = "") {
  return e.split(/\s+/).filter((n) => n.length > 1);
}
let Vr = Symbol("TransitionContext");
var wu = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(wu || {});
function xu() {
  return fe(Vr, null) !== null;
}
function ku() {
  let e = fe(Vr, null);
  if (e === null) throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function Su() {
  let e = fe(Br, null);
  if (e === null) throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let Br = Symbol("NestingContext");
function Ao(e) {
  return "children" in e ? Ao(e.children) : e.value.filter(({ state: n }) => n === "visible").length > 0;
}
function xl(e) {
  let n = S([]), t = S(!1);
  se(() => t.value = !0), xe(() => t.value = !1);
  function o(a, l = Vt.Hidden) {
    let i = n.value.findIndex(({ id: s }) => s === a);
    i !== -1 && (Pe(l, { [Vt.Unmount]() {
      n.value.splice(i, 1);
    }, [Vt.Hidden]() {
      n.value[i].state = "hidden";
    } }), !Ao(n) && t.value && (e == null || e()));
  }
  function r(a) {
    let l = n.value.find(({ id: i }) => i === a);
    return l ? l.state !== "visible" && (l.state = "visible") : n.value.push({ id: a, state: "visible" }), () => o(a, Vt.Unmount);
  }
  return { children: n, register: r, unregister: o };
}
let kl = st.RenderStrategy, dr = Y({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: n, attrs: t, slots: o, expose: r }) {
  let a = S(0);
  function l() {
    a.value |= De.Opening, n("beforeEnter");
  }
  function i() {
    a.value &= ~De.Opening, n("afterEnter");
  }
  function s() {
    a.value |= De.Closing, n("beforeLeave");
  }
  function u() {
    a.value &= ~De.Closing, n("afterLeave");
  }
  if (!xu() && Ms()) return () => ie(Sl, { ...e, onBeforeEnter: l, onAfterEnter: i, onBeforeLeave: s, onAfterLeave: u }, o);
  let d = S(null), c = O(() => e.unmount ? Vt.Unmount : Vt.Hidden);
  r({ el: d, $el: d });
  let { show: m, appear: f } = ku(), { register: p, unregister: v } = Su(), g = S(m.value ? "visible" : "hidden"), b = { value: !0 }, y = Me(), h = { value: !1 }, k = xl(() => {
    !h.value && g.value !== "hidden" && (g.value = "hidden", v(y), u());
  });
  se(() => {
    let x = p(y);
    xe(x);
  }), Le(() => {
    if (c.value === Vt.Hidden && y) {
      if (m.value && g.value !== "visible") {
        g.value = "visible";
        return;
      }
      Pe(g.value, { hidden: () => v(y), visible: () => p(y) });
    }
  });
  let w = Yt(e.enter), D = Yt(e.enterFrom), C = Yt(e.enterTo), _ = Yt(e.entered), K = Yt(e.leave), $ = Yt(e.leaveFrom), B = Yt(e.leaveTo);
  se(() => {
    Le(() => {
      if (g.value === "visible") {
        let x = V(d);
        if (x instanceof Comment && x.data === "") throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function W(x) {
    let I = b.value && !f.value, L = V(d);
    !L || !(L instanceof HTMLElement) || I || (h.value = !0, m.value && l(), m.value || s(), x(m.value ? ua(L, w, D, C, _, (U) => {
      h.value = !1, U === ur.Finished && i();
    }) : ua(L, K, $, B, _, (U) => {
      h.value = !1, U === ur.Finished && (Ao(k) || (g.value = "hidden", v(y), u()));
    })));
  }
  return se(() => {
    le([m], (x, I, L) => {
      W(L), b.value = !1;
    }, { immediate: !0 });
  }), $e(Br, k), Ir(O(() => Pe(g.value, { visible: De.Open, hidden: De.Closed }) | a.value)), () => {
    let { appear: x, show: I, enter: L, enterFrom: U, enterTo: oe, entered: ce, leave: re, leaveFrom: Ce, leaveTo: He, ...Ne } = e, Kt = { ref: d }, bt = { ...Ne, ...f.value && m.value && Wn.isServer ? { class: z([t.class, Ne.class, ...w, ...D]) } : {} };
    return ge({ theirProps: bt, ourProps: Kt, slot: {}, slots: o, attrs: t, features: kl, visible: g.value === "visible", name: "TransitionChild" });
  };
} }), Cu = dr, Sl = Y({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: n, attrs: t, slots: o }) {
  let r = Tn(), a = O(() => e.show === null && r !== null ? (r.value & De.Open) === De.Open : e.show);
  Le(() => {
    if (![!0, !1].includes(a.value)) throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let l = S(a.value ? "visible" : "hidden"), i = xl(() => {
    l.value = "hidden";
  }), s = S(!0), u = { show: a, appear: O(() => e.appear || !s.value) };
  return se(() => {
    Le(() => {
      s.value = !1, a.value ? l.value = "visible" : Ao(i) || (l.value = "hidden");
    });
  }), $e(Br, i), $e(Vr, u), () => {
    let d = En(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), c = { unmount: e.unmount };
    return ge({ ourProps: { ...c, as: "template" }, theirProps: {}, slot: {}, slots: { ...o, default: () => [ie(Cu, { onBeforeEnter: () => n("beforeEnter"), onAfterEnter: () => n("afterEnter"), onBeforeLeave: () => n("beforeLeave"), onAfterLeave: () => n("afterLeave"), ...t, ...c, ...d }, o.default)] }, attrs: {}, features: kl, visible: l.value === "visible", name: "Transition" });
  };
} });
const Ou = { class: "relative" }, Eu = { class: "flex items-start flex-wrap gap-1 p-1" }, Tu = ["onClick"], Du = { class: "sr-only" }, _u = { key: 0 }, Pu = { key: 1 }, $u = { key: 1 }, Iu = { class: "border-t border-border px-2 first:border-t-0 py-2 first:pt-0 last:pb-0" }, Ru = { class: "flex items-center text-base font-medium" }, Au = { key: 1 }, Mu = { class: "-mx-2.5" }, Lu = { key: 1 }, Fu = { key: 1 }, Wo = /* @__PURE__ */ Y({
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
    const o = t, r = e, a = S(), l = S(""), i = S(), s = S(!1), u = O(() => l.value ? r.items.filter(
      (p) => r.displayProperty(p).toLowerCase().includes(l.value.toLowerCase())
    ) : r.items), { floatingStyles: d } = On(i, a, {
      strategy: "fixed",
      transform: !1,
      middleware: [
        Cn({
          padding: 10,
          limiter: Tr({
            offset: 10
          })
        }),
        $o({
          allowedPlacements: ["top-start", "bottom-start"]
        }),
        Sn(10),
        Er({
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
      (g, b) => {
        var y;
        return (g[y = v(b)] || (g[y] = [])).push(b), g;
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
    }), (p, v) => (E(), M(we, null, [
      v[5] || (v[5] = T("div", { class: "hidden relative rounded-lg border border-border rounded-md hover:bg-accent/50 shadow-xs focus-within:outline-none focus-within:ring-3 focus-within:ring-ring/40 transition-[box-shadow,color] flex items-start flex-wrap gap-1 p-1 flex-1 min-w-[120px] border-0 bg-transparent pl-2.5 py-0.5 pr-8 text-sm truncate ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50 absolute inset-y-0 right-0 items-center pr-2 text-muted-foreground size-4 text-inherit transition duration-200 ease-out translate-y-1 opacity-0 translate-y-0 opacity-100 duration-150 ease-in fixed left-0 z-10 overflow-x-hidden overflow-y-auto bg-popover p-3 text-base shadow-lg border focus:outline-hidden sm:text-sm border-t border-border px-2 first:border-t-0 py-2 first:pt-0 last:pb-0 font-medium -mx-2.5 cursor-pointer hover:bg-accent rounded-md px-2 py-1 flex w-full truncate bg-accent opacity-50 pointer-events-none" }, null, -1)),
      T("div", {
        class: z(F(pe)("relative rounded-lg"))
      }, [
        G(F(Rr), {
          "model-value": p.modelValue,
          multiple: p.multiple,
          nullable: p.nullable,
          "onUpdate:modelValue": v[3] || (v[3] = (g) => p.$emit("update:modelValue", g))
        }, {
          default: q(() => {
            var g, b;
            return [
              T("div", Ou, [
                T("div", {
                  ref_key: "reference",
                  ref: i,
                  class: z(
                    F(pe)(
                      "border border-border rounded-md hover:bg-accent/50 shadow-xs focus-within:outline-none focus-within:ring-3 focus-within:ring-ring/40 transition-[box-shadow,color]",
                      p.theme.baseDropdownInputContainer
                    )
                  )
                }, [
                  T("div", Eu, [
                    p.multiple && ((g = p.modelValue) != null && g.length) ? (E(!0), M(we, { key: 0 }, Ke(p.modelValue, (y) => (E(), M("div", {
                      key: y[p.uidProperty],
                      class: "flex items-center gap-1 rounded-md bg-accent px-2 py-0.5 text-sm"
                    }, [
                      T("span", null, ve(p.displayProperty(y)), 1),
                      T("button", {
                        type: "button",
                        class: "ml-1 rounded-full hover:bg-accent-foreground/20",
                        onClick: yn((h) => m(y), ["stop"])
                      }, [
                        T("span", Du, "Remove " + ve(p.displayProperty(y)), 1),
                        v[4] || (v[4] = T("svg", {
                          class: "size-3",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          stroke: "currentColor",
                          "stroke-width": "2"
                        }, [
                          T("path", { d: "M18 6L6 18M6 6l12 12" })
                        ], -1))
                      ], 8, Tu)
                    ]))), 128)) : te("", !0),
                    G(F(Mr), {
                      class: z([
                        "flex-1 min-w-[120px] rounded-md border-0 bg-transparent pl-2.5 py-0.5 pr-8 text-sm truncate ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50",
                        p.multiple && ((b = p.modelValue) != null && b.length) ? "pl-1" : "",
                        p.theme.baseDropdownInputText
                      ]),
                      displayValue: p.displayProperty,
                      placeholder: p.placeholder,
                      autoComplete: "off",
                      onFocus: v[0] || (v[0] = (y) => s.value = !0),
                      onBlur: v[1] || (v[1] = (y) => s.value = !1),
                      onChange: v[2] || (v[2] = (y) => l.value = y.target.value),
                      onKeydown: Oa(f, ["delete"])
                    }, null, 8, ["class", "displayValue", "placeholder"])
                  ]),
                  G(F(Ar), {
                    class: z([
                      "absolute inset-y-0 right-0 flex items-center pr-2 text-muted-foreground"
                    ])
                  }, {
                    default: q(() => [
                      G(F(hr), { class: "size-4 text-inherit" })
                    ]),
                    _: 1
                  })
                ], 2),
                G(it, {
                  "enter-active-class": "transition duration-200 ease-out",
                  "enter-from-class": "translate-y-1 opacity-0",
                  "enter-to-class": "translate-y-0 opacity-100",
                  "leave-active-class": "transition duration-150 ease-in",
                  "leave-from-class": "translate-y-0 opacity-100",
                  "leave-to-class": "translate-y-1 opacity-0"
                }, {
                  default: q(() => [
                    G(F(Lr), {
                      ref_key: "floating",
                      ref: a,
                      class: z(
                        F(pe)(
                          "fixed left-0 z-10 overflow-x-hidden overflow-y-auto rounded-lg bg-popover p-3 text-base shadow-lg border focus:outline-hidden sm:text-sm",
                          p.theme.generalFloatingPanelContainer
                        )
                      ),
                      style: Ht(F(d)),
                      static: p.isStatic
                    }, {
                      default: q(() => [
                        u.value.length === 0 ? (E(), M("div", _u, [
                          p.$slots.empty ? X(p.$slots, "empty", { key: 0 }) : (E(), M("span", Pu, "No results"))
                        ])) : te("", !0),
                        p.groupBy ? (E(), M("div", $u, [
                          (E(!0), M(we, null, Ke(c(
                            p.items,
                            (y) => y[p.groupBy]
                          ), (y, h) => (E(), M("div", Iu, [
                            T("div", Ru, [
                              p.$slots.group ? X(p.$slots, "group", Qe({
                                key: 0,
                                ref_for: !0
                              }, {
                                group: y,
                                groupName: h
                              })) : (E(), M("span", Au, ve([
                                "undefined",
                                null,
                                void 0
                              ].includes(h) ? "Uncategorized" : h), 1))
                            ]),
                            T("div", Mu, [
                              (E(!0), M(we, null, Ke(y, (k) => {
                                var w;
                                return E(), he(F(zn), {
                                  key: k[p.uidProperty],
                                  value: k,
                                  disabled: (w = p.disabledItems) == null ? void 0 : w.some(
                                    (D) => D[p.uidProperty] === k[p.uidProperty]
                                  )
                                }, {
                                  default: q(({ active: D, selected: C, disabled: _ }) => [
                                    T("span", {
                                      class: z([
                                        "cursor-pointer hover:bg-accent rounded-md px-2 py-1 flex w-full truncate",
                                        D && "bg-accent",
                                        C && "bg-accent",
                                        _ && "opacity-50 cursor-not-allowed pointer-events-none"
                                      ])
                                    }, [
                                      p.$slots.item ? X(p.$slots, "item", Qe({
                                        key: 0,
                                        ref_for: !0
                                      }, {
                                        item: k,
                                        active: D,
                                        selected: C,
                                        disabled: _
                                      })) : (E(), M("span", Lu, ve(p.displayProperty(k)), 1))
                                    ], 2)
                                  ]),
                                  _: 2
                                }, 1032, ["value", "disabled"]);
                              }), 128))
                            ])
                          ]))), 256))
                        ])) : (E(!0), M(we, { key: 2 }, Ke(u.value, (y) => {
                          var h;
                          return E(), he(F(zn), {
                            key: y[p.uidProperty],
                            value: y,
                            disabled: (h = p.disabledItems) == null ? void 0 : h.some(
                              (k) => k[p.uidProperty] === y[p.uidProperty]
                            )
                          }, {
                            default: q(({ active: k, selected: w, disabled: D }) => [
                              T("span", {
                                class: z([
                                  "cursor-pointer hover:bg-accent rounded-md px-2 py-1 flex w-full truncate",
                                  k && "bg-accent",
                                  w && "bg-accent",
                                  D && "opacity-50 cursor-not-allowed pointer-events-none"
                                ])
                              }, [
                                p.$slots.item ? X(p.$slots, "item", Qe({
                                  key: 0,
                                  ref_for: !0
                                }, {
                                  item: y,
                                  active: k,
                                  selected: w,
                                  disabled: D
                                })) : (E(), M("span", Fu, ve(p.displayProperty(y)), 1))
                              ], 2)
                            ]),
                            _: 2
                          }, 1032, ["value", "disabled"]);
                        }), 128)),
                        p.$slots.options ? X(p.$slots, "options", xt(Qe({ key: 3 }, { filteredItems: u.value }))) : te("", !0)
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
      ], 2)
    ], 64));
  }
}), Nu = { class: "w-full space-y-3" }, Vu = ["onClick"], Bu = /* @__PURE__ */ Y({
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
    }), r = O({
      get: () => t.modelValue,
      set: (s) => {
        a("update:modelValue", s);
      }
    }), a = n, l = S(""), i = (s) => {
      l.value = s, r.value = s, setTimeout(() => {
        l.value = "";
      }, 300);
    };
    return (s, u) => (E(), M("div", null, [
      T("div", Nu, [
        (E(!0), M(we, null, Ke(o.value, (d, c) => (E(), M("div", {
          key: `color-${c}`,
          class: "flex w-full items-center space-x-3"
        }, [
          (E(!0), M(we, null, Ke(d, (m) => (E(), M("div", {
            key: `${c}-${m.name}`,
            class: z(
              F(an)(
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
            l.value === m.hex ? (E(), M("div", {
              key: 0,
              class: z(["absolute inset-0 rounded-full animate-color-flash", m.background])
            }, null, 2)) : te("", !0)
          ], 10, Vu))), 128))
        ]))), 128))
      ])
    ]));
  }
}), ju = { class: "relative" }, zu = /* @__PURE__ */ Y({
  __name: "Dropdown",
  setup(e, { expose: n }) {
    const t = S(!1), o = S(), r = S(/* @__PURE__ */ new Map()), a = S(null), l = () => Array.from(r.value.entries()).sort(([, d], [, c]) => {
      const m = d.compareDocumentPosition(c);
      return m & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : m & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
    }), i = So({
      isOpen: O(() => t.value),
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
    $e("dropdown", i), $e("triggerRef", o);
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
    }), xe(() => {
      document.removeEventListener("keydown", s);
    }), n({
      isOpen: t,
      open: i.open,
      close: i.close,
      toggle: i.toggle,
      triggerRef: o
    }), (u, d) => (E(), M("div", ju, [
      X(u.$slots, "default")
    ]));
  }
}), Hu = /* @__PURE__ */ Y({
  __name: "DropdownTrigger",
  setup(e, { expose: n }) {
    var l;
    const t = fe("dropdown"), o = S();
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
    }), (i, s) => (E(), M("div", {
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
      X(i.$slots, "default")
    ], 544));
  }
}), Wu = /* @__PURE__ */ Y({
  __name: "DropdownContent",
  props: {
    side: { default: "bottom" },
    align: { default: "start" },
    sideOffset: { default: 4 },
    alignOffset: { default: 0 },
    avoidCollisions: { type: Boolean, default: !0 }
  },
  setup(e) {
    const n = e, t = fe("dropdown"), o = fe("triggerRef"), r = S(), a = O(
      () => {
        var c;
        return (o == null ? void 0 : o.value) || ((c = t == null ? void 0 : t.triggerRef) == null ? void 0 : c.value);
      }
    ), { floatingStyles: l, update: i } = On(
      a || S(null),
      r,
      {
        strategy: "absolute",
        placement: `${n.side}-${n.align}`,
        middleware: [
          Sn({
            mainAxis: n.sideOffset,
            crossAxis: n.alignOffset
          }),
          ...n.avoidCollisions ? [Or()] : [],
          ...n.avoidCollisions ? [Cn()] : []
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
        c && (t != null && t.isOpen) && await Ue();
      }
    ), se(async () => {
      await Ue(), i && i();
    }), xe(() => {
      console.log("DropdownContent unmounted"), document.removeEventListener("click", d, !0);
    }), (c, m) => (E(), M("div", {
      ref_key: "contentRef",
      ref: r,
      class: "absolute z-50",
      style: Ht(F(l))
    }, [
      G(it, {
        "enter-active-class": "transition-all duration-200 ease-out",
        "leave-active-class": "transition-all duration-200 ease-in",
        "enter-from-class": "opacity-0 scale-95",
        "enter-to-class": "opacity-100 scale-100",
        "leave-from-class": "opacity-100 scale-100",
        "leave-to-class": "opacity-0 scale-95"
      }, {
        default: q(() => {
          var f;
          return [
            tn(T("div", {
              role: "menu",
              class: z([
                "relative min-w-[8rem] overflow-hidden rounded-md border bg-white p-1 text-gray-900 shadow-lg",
                "dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700"
              ]),
              onClick: s,
              onKeydown: u,
              tabindex: "-1"
            }, [
              X(c.$slots, "default")
            ], 544), [
              [nn, (f = F(t)) == null ? void 0 : f.isOpen]
            ])
          ];
        }),
        _: 3
      })
    ], 4));
  }
}), Gu = /* @__PURE__ */ Y({
  __name: "DropdownItem",
  props: {
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["click", "select"],
  setup(e, { expose: n, emit: t }) {
    const o = e, r = t, a = fe("dropdown"), l = S(), i = S();
    se(() => {
      i.value = `dropdown-item-${Math.random().toString(36).substr(2, 9)}`, a && l.value && i.value && a.registerItem(l.value, i.value);
    }), xe(() => {
      a && i.value && a.unregisterItem(i.value);
    });
    const s = O(() => (a == null ? void 0 : a.getActiveItemId()) === i.value), u = (p) => {
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
    }), (p, v) => (E(), M("div", {
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
      X(p.$slots, "default")
    ], 34));
  }
}), Uu = {
  class: /* @__PURE__ */ z([
    "px-2 py-1.5 text-sm font-semibold text-gray-900",
    "dark:text-gray-100"
  ])
}, wf = /* @__PURE__ */ Y({
  __name: "DropdownLabel",
  setup(e) {
    return (n, t) => (E(), M("div", Uu, [
      X(n.$slots, "default")
    ]));
  }
}), qu = {
  role: "separator",
  class: /* @__PURE__ */ z(["-mx-1 my-1 h-px bg-gray-200", "dark:bg-gray-700"])
}, xf = /* @__PURE__ */ Y({
  __name: "DropdownSeparator",
  setup(e) {
    return (n, t) => (E(), M("div", qu));
  }
}), Ku = { class: "relative" }, kf = /* @__PURE__ */ Y({
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
    const o = e, r = t, a = S(!1), l = S(), i = S(), s = {
      isOpen: O(() => a.value),
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
    $e("dropdown", s);
    const { floatingStyles: u, placement: d } = On(l, i, {
      placement: `${o.side}-${o.align}`,
      middleware: [
        Sn({ mainAxis: o.sideOffset, crossAxis: o.alignOffset }),
        ...o.avoidCollisions ? [Or()] : [],
        ...o.avoidCollisions ? [Cn()] : [],
        $o()
      ],
      whileElementsMounted: Po
    }), c = O(() => d.value ? d.value.split("-")[0] : o.side), m = O(() => {
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
    }), (f, p) => (E(), M("div", Ku, [
      X(f.$slots, "default")
    ]));
  }
}), Sf = /* @__PURE__ */ Y({
  __name: "DropdownSubContent",
  setup(e) {
    const n = fe("dropdown"), t = S(), o = S({}), r = S("left");
    se(() => {
      var i;
      if (t.value) {
        const s = (i = Ca()) == null ? void 0 : i.parent;
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
    }), xe(() => {
      document.removeEventListener("click", l, !0);
    }), (i, s) => (E(), he(Co, { to: "body" }, [
      G(it, {
        "enter-active-class": "transition-all duration-200 ease-out",
        "leave-active-class": "transition-all duration-150 ease-in",
        "enter-from-class": "opacity-0 scale-95",
        "enter-to-class": "opacity-100 scale-100",
        "leave-from-class": "opacity-100 scale-100",
        "leave-to-class": "opacity-0 scale-95"
      }, {
        default: q(() => {
          var u;
          return [
            tn(T("div", {
              ref_key: "contentRef",
              ref: t,
              role: "menu",
              class: z([
                "fixed z-50 min-w-[8rem] overflow-hidden rounded-md border bg-white p-1 text-gray-900 shadow-lg",
                "dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700"
              ]),
              style: Ht({
                ...o.value,
                transformOrigin: `${r.value} center`
              }),
              onClick: a
            }, [
              X(i.$slots, "default")
            ], 4), [
              [nn, (u = F(n)) == null ? void 0 : u.isOpen]
            ])
          ];
        }),
        _: 3
      })
    ]));
  }
}), Yu = ["data-state"], Cf = /* @__PURE__ */ Y({
  __name: "DropdownSubTrigger",
  emits: ["click", "keydown"],
  setup(e, { expose: n, emit: t }) {
    const o = t, r = fe("dropdown"), a = S();
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
      return E(), M("div", {
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
        X(d.$slots, "default"),
        c[0] || (c[0] = T("svg", {
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
      ], 40, Yu);
    };
  }
}), Xu = ["innerHTML"], Go = /* @__PURE__ */ Y({
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
    return (n, t) => (E(), M("div", {
      class: z(
        F(pe)(
          "bg-card border border-border border-dashed rounded-lg p-6",
          n.theme.container
        )
      )
    }, [
      T("h3", {
        class: z(F(pe)("text-base font-semibold text-zinc-900", n.theme.title)),
        innerHTML: n.title
      }, null, 10, Xu),
      T("div", {
        class: z(F(pe)("mt-1 text-muted-foreground", n.theme.description))
      }, [
        X(n.$slots, "default")
      ], 2)
    ], 2));
  }
}), Ju = ["aria-labelledby", "aria-describedby"], Qu = { class: "flex-1 min-w-0" }, Zu = ["id"], ed = ["aria-label"], td = /* @__PURE__ */ Y({
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
    function o(...b) {
      return kn(an(b));
    }
    const r = t, a = e, l = S(), i = S(), s = O(() => a.open), u = O(
      () => `modal-title-${Math.random().toString(36).substr(2, 9)}`
    ), d = O(
      () => `modal-description-${Math.random().toString(36).substr(2, 9)}`
    );
    let c = null;
    const m = () => {
      a.preventBodyScroll && (c = document.body.style.overflow, document.body.style.overflow = "hidden");
    }, f = () => {
      a.preventBodyScroll && c !== null && (document.body.style.overflow = c, c = null);
    }, p = () => {
      r("close"), r("update:open", !1);
    }, v = (b) => {
      a.closeOnBackdropClick && b.target === l.value && p();
    }, g = (b) => {
      a.closeOnEscape && b.key === "Escape" && (b.preventDefault(), p());
    };
    return le(s, async (b) => {
      var y;
      if (b) {
        m(), await Ue();
        const h = (y = i.value) == null ? void 0 : y.querySelector(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        h ? h.focus() : i.value && i.value.focus();
      } else
        f();
    }), se(() => {
      s.value && m();
    }), xe(() => {
      f();
    }), n({
      close: p
    }), (b, y) => (E(), he(Co, { to: "body" }, [
      G(it, {
        "enter-active-class": "transition-all duration-300 ease-out",
        "enter-from-class": "opacity-0",
        "enter-to-class": "opacity-100",
        "leave-active-class": "transition-all duration-200 ease-in",
        "leave-from-class": "opacity-100",
        "leave-to-class": "opacity-0"
      }, {
        default: q(() => [
          s.value ? (E(), M("div", {
            key: 0,
            ref_key: "backdropRef",
            ref: l,
            onClick: v,
            onKeydown: g,
            class: z(
              o(
                "fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm",
                b.theme.backdrop
              )
            ),
            style: { zIndex: "var(--z-modal-backdrop)" },
            tabindex: "-1",
            role: "dialog",
            "aria-modal": !0,
            "aria-labelledby": u.value,
            "aria-describedby": d.value
          }, null, 42, Ju)) : te("", !0)
        ]),
        _: 1
      }),
      G(it, {
        "enter-active-class": "transition-all duration-300 ease-out",
        "enter-from-class": "opacity-0 scale-95 translate-y-4",
        "enter-to-class": "opacity-100 scale-100 translate-y-0",
        "leave-active-class": "transition-all duration-200 ease-in",
        "leave-from-class": "opacity-100 scale-100 translate-y-0",
        "leave-to-class": "opacity-0 scale-95 translate-y-4"
      }, {
        default: q(() => [
          s.value ? (E(), M("div", {
            key: 0,
            ref_key: "modalRef",
            ref: i,
            class: z(
              o(
                "absolute mx-auto left-0 right-0 w-full max-w-lg max-h-[90vh] overflow-hidden rounded-lg bg-card shadow-lg border border-border",
                b.size === "sm" && "max-w-md",
                b.size === "lg" && "max-w-2xl",
                b.size === "xl" && "max-w-4xl",
                b.size === "full" && "max-w-[95vw] max-h-[95vh]",
                b.theme.container
              )
            ),
            style: { zIndex: "var(--z-modal)" },
            onClick: y[0] || (y[0] = yn(() => {
            }, ["stop"]))
          }, [
            b.$slots.header || b.$slots.title ? (E(), M("div", {
              key: 0,
              class: z(
                o(
                  "flex items-center justify-between p-6 border-b border-border",
                  b.theme.header
                )
              )
            }, [
              T("div", Qu, [
                X(b.$slots, "header", {}, () => [
                  b.$slots.title ? (E(), M("h2", {
                    key: 0,
                    id: u.value,
                    class: "text-lg font-semibold text-foreground"
                  }, [
                    X(b.$slots, "title", {}, void 0, !0)
                  ], 8, Zu)) : te("", !0)
                ], !0)
              ]),
              b.showCloseButton ? (E(), M("button", {
                key: 0,
                onClick: p,
                class: z(
                  o(
                    "ml-4 p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors",
                    b.theme.closeButton
                  )
                ),
                type: "button",
                "aria-label": b.closeButtonLabel
              }, y[1] || (y[1] = [
                T("svg", {
                  class: "w-5 h-5",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24"
                }, [
                  T("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M6 18L18 6M6 6l12 12"
                  })
                ], -1)
              ]), 10, ed)) : te("", !0)
            ], 2)) : te("", !0),
            T("div", {
              class: z(o("flex-1 overflow-auto", b.theme.content))
            }, [
              T("div", {
                class: z(
                  o(
                    "p-6",
                    !b.$slots.header && !b.$slots.title && "pt-6",
                    !b.$slots.footer && "pb-6"
                  )
                )
              }, [
                X(b.$slots, "default", {}, void 0, !0)
              ], 2)
            ], 2),
            b.$slots.footer ? (E(), M("div", {
              key: 1,
              class: z(
                o(
                  "flex items-center justify-end gap-3 p-6 border-t border-border bg-muted/30",
                  b.theme.footer
                )
              )
            }, [
              X(b.$slots, "footer", {}, void 0, !0)
            ], 2)) : te("", !0)
          ], 2)) : te("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), Of = /* @__PURE__ */ Oo(td, [["__scopeId", "data-v-2e97be6b"]]), nd = /* @__PURE__ */ Y({
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
        Cn({
          padding: 10,
          limiter: Tr({
            offset: 10
          })
        }),
        $o({
          allowedPlacements: ["top-start", "bottom-start"]
        }),
        Sn(10),
        Er({
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
    const o = e, r = t, a = S(), l = S(), i = S(o.open ?? !1);
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
    }), (c, m) => (E(), he(F(gl), {
      class: z(F(pe)("relative inline-block text-left", c.theme.popoverMenu)),
      open: i.value,
      "onUpdate:open": s
    }, {
      default: q(({ open: f }) => [
        T("div", null, [
          G(F(mu), {
            ref_key: "reference",
            ref: a,
            class: z(
              F(pe)(f ? "is-open" : "is-closed", c.theme.popoverMenuButton)
            )
          }, {
            default: q(() => [
              X(c.$slots, "trigger")
            ]),
            _: 2
          }, 1032, ["class"])
        ]),
        G(it, {
          "enter-active-class": "transition duration-200 ease-out",
          "enter-from-class": "translate-y-1 opacity-0",
          "enter-to-class": "translate-y-0 opacity-100",
          "leave-active-class": "transition duration-150 ease-in",
          "leave-from-class": "translate-y-0 opacity-100",
          "leave-to-class": "translate-y-1 opacity-0"
        }, {
          default: q(() => [
            G(F(vu), {
              ref_key: "floating",
              ref: l,
              class: z(
                F(pe)(
                  "fixed z-50 transform overflow-x-hidden overflow-y-auto rounded-lg bg-background p-3 text-base shadow-lg ring-1 ring-ring focus:outline-hidden sm:text-sm",
                  c.theme.popoverMenuItems
                )
              ),
              style: Ht(F(u))
            }, {
              default: q(({ close: p }) => [
                X(c.$slots, "default", xt(jt({ close: p })))
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
}), od = { class: "relative" }, rd = { key: 0 }, ad = { class: "flex items-center gap-2" }, ld = { key: 2 }, id = { key: 1 }, sd = { key: 3 }, ud = { class: "border-t border-border px-2 first:border-t-0 py-2 first:pt-0 last:pb-0" }, dd = { class: "flex items-center text-base font-medium" }, cd = { key: 1 }, fd = { class: "-mx-2.5" }, pd = { key: 1 }, md = { key: 1 }, Cl = /* @__PURE__ */ Y({
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
        Cn({
          padding: 10,
          limiter: Tr({
            offset: 10
          })
        }),
        $o({
          allowedPlacements: ["top-start", "bottom-start"]
        }),
        Sn(10),
        Er({
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
    const o = t, r = e, a = S([]), l = S(), i = S(""), s = S(), u = S(!1), d = S(!1), c = S(!1), m = O({
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
      ki(async () => {
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
      (b, y) => {
        var h;
        return (b[h = g(y)] || (b[h] = [])).push(y), b;
      },
      {}
    );
    return n({
      focused: c,
      query: i,
      searching: u
    }), (v, g) => (E(), M("div", {
      class: z(F(pe)("relative rounded-lg"))
    }, [
      G(F(Rr), {
        "model-value": m.value,
        immediate: v.immediate,
        nullable: v.nullable,
        multiple: v.multiple,
        "onUpdate:modelValue": g[3] || (g[3] = (b) => m.value = b)
      }, {
        default: q(() => [
          T("div", od, [
            T("div", {
              ref_key: "reference",
              ref: s,
              class: z(F(pe)(v.theme.baseDropdownInputContainer))
            }, [
              G(F(Mr), {
                class: z(
                  F(pe)(
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
                onBlur: g[1] || (g[1] = (b) => c.value = !1),
                onChange: g[2] || (g[2] = (b) => i.value = b.target.value)
              }, null, 8, ["class", "displayValue", "placeholder"]),
              G(F(Ar), {
                class: z([
                  "absolute inset-y-0 right-0 flex items-center pr-2 text-muted-foreground"
                ])
              }, {
                default: q(() => [
                  G(F(hr), { class: "size-4 text-inherit" })
                ]),
                _: 1
              })
            ], 2),
            G(it, {
              "enter-active-class": "transition duration-200 ease-out",
              "enter-from-class": "translate-y-1 opacity-0",
              "enter-to-class": "translate-y-0 opacity-100",
              "leave-active-class": "transition duration-150 ease-in",
              "leave-from-class": "translate-y-0 opacity-100",
              "leave-to-class": "translate-y-1 opacity-0"
            }, {
              default: q(() => [
                G(F(Lr), {
                  ref_key: "floating",
                  ref: l,
                  class: z(
                    F(pe)(
                      "fixed left-0 z-10 overflow-x-hidden overflow-y-auto rounded-lg bg-popover p-3 text-base shadow-lg ring-1 ring-black/5 focus:outline-hidden sm:text-sm",
                      v.theme.generalFloatingPanelContainer
                    )
                  ),
                  style: Ht(F(f)),
                  static: v.isStatic
                }, {
                  default: q(() => [
                    v.$slots.static ? (E(), M("div", rd, [
                      X(v.$slots, "static", xt(jt({ query: i.value, searching: u.value })))
                    ])) : te("", !0),
                    u.value ? X(v.$slots, "searching", { key: 1 }, () => [
                      T("span", ad, [
                        G(F(hi), { class: "size-4 animate-spin" }),
                        g[4] || (g[4] = T("span", null, "Searching...", -1))
                      ])
                    ]) : te("", !0),
                    a.value.length === 0 && !u.value ? (E(), M("div", ld, [
                      v.$slots.empty ? X(v.$slots, "empty", { key: 0 }) : (E(), M("span", id, "No results"))
                    ])) : te("", !0),
                    v.groupBy && !u.value ? (E(), M("div", sd, [
                      (E(!0), M(we, null, Ke(p(
                        [
                          ...v.prependItems,
                          ...a.value,
                          ...v.postpendItems
                        ],
                        (b) => b[v.groupBy]
                      ), (b, y) => (E(), M("div", ud, [
                        T("div", dd, [
                          v.$slots.group ? X(v.$slots, "group", Qe({
                            key: 0,
                            ref_for: !0
                          }, {
                            group: b,
                            groupName: y
                          })) : (E(), M("span", cd, ve([
                            "undefined",
                            null,
                            void 0
                          ].includes(y) ? "Uncategorized" : y), 1))
                        ]),
                        T("div", fd, [
                          u.value ? te("", !0) : (E(!0), M(we, { key: 0 }, Ke(b, (h) => (E(), he(F(zn), {
                            key: h[v.uidProperty],
                            value: h
                          }, {
                            default: q(({ active: k, selected: w }) => [
                              T("span", {
                                class: z([
                                  "cursor-pointer hover:bg-accent rounded-md px-2 py-1 flex w-full truncate",
                                  k && "bg-accent",
                                  w && "bg-accent"
                                ])
                              }, [
                                v.$slots.item ? X(v.$slots, "item", Qe({
                                  key: 0,
                                  ref_for: !0
                                }, {
                                  item: h,
                                  active: k,
                                  selected: w
                                })) : (E(), M("span", pd, ve(v.displayProperty(h)), 1))
                              ], 2)
                            ]),
                            _: 2
                          }, 1032, ["value"]))), 128))
                        ])
                      ]))), 256))
                    ])) : u.value ? te("", !0) : (E(!0), M(we, { key: 4 }, Ke(a.value, (b) => (E(), he(F(zn), {
                      key: b[v.uidProperty],
                      value: b
                    }, {
                      default: q(({ active: y, selected: h }) => [
                        T("span", {
                          class: z([
                            "cursor-pointer hover:bg-accent rounded-md px-2 py-1 flex w-full truncate",
                            y && "bg-accent",
                            h && "bg-accent"
                          ])
                        }, [
                          v.$slots.item ? X(v.$slots, "item", Qe({
                            key: 0,
                            ref_for: !0
                          }, { item: b, active: y, selected: h })) : (E(), M("span", md, ve(v.displayProperty(b)), 1))
                        ], 2)
                      ]),
                      _: 2
                    }, 1032, ["value"]))), 128)),
                    v.$slots.options ? X(v.$slots, "options", xt(Qe({ key: 5 }, { filteredItems: a.value }))) : te("", !0)
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
}), vd = { class: "relative" }, Ef = /* @__PURE__ */ Y({
  __name: "Tooltip",
  setup(e, { expose: n }) {
    const t = S(!1), o = S(), r = S("body"), a = So({
      isVisible: O(() => t.value),
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
      portalTarget: O(() => r.value)
    });
    return $e("tooltip", a), $e("triggerRef", o), n({
      isVisible: t,
      show: a.show,
      hide: a.hide,
      triggerRef: o,
      portalTarget: r
    }), (l, i) => (E(), M("div", vd, [
      X(l.$slots, "default")
    ]));
  }
}), Tf = /* @__PURE__ */ Y({
  __name: "TooltipTrigger",
  props: {
    delay: { default: 300 },
    hideDelay: { default: 0 }
  },
  setup(e) {
    const n = e, t = fe("tooltip"), o = S();
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
    }), xe(() => {
      r && clearTimeout(r), a && clearTimeout(a);
    }), (d, c) => (E(), M("div", {
      ref_key: "triggerRef",
      ref: o,
      onMouseenter: l,
      onMouseleave: i,
      onFocus: s,
      onBlur: u
    }, [
      X(d.$slots, "default")
    ], 544));
  }
}), hd = {
  role: "tooltip",
  class: "relative max-w-xs rounded-md bg-primary px-3 py-2 text-sm text-primary-foreground shadow-lg pointer-events-auto transform-gpu"
}, Df = /* @__PURE__ */ Y({
  __name: "TooltipContent",
  props: {
    side: { default: "top" },
    align: { default: "center" },
    sideOffset: { default: 8 },
    alignOffset: { default: 0 },
    avoidCollisions: { type: Boolean, default: !0 }
  },
  setup(e) {
    const n = e, t = fe("tooltip"), o = fe("triggerRef"), r = S(), a = S(), l = O(
      () => {
        var p;
        return (o == null ? void 0 : o.value) || ((p = t == null ? void 0 : t.triggerRef) == null ? void 0 : p.value);
      }
    ), i = O(() => `${n.side}-${n.align}`), { floatingStyles: s, middlewareData: u, update: d } = On(
      l || S(null),
      r,
      {
        strategy: "fixed",
        placement: i,
        middleware: [
          Sn({
            mainAxis: n.sideOffset,
            crossAxis: n.alignOffset
          }),
          ...n.avoidCollisions ? [Or()] : [],
          ...n.avoidCollisions ? [Cn()] : [],
          is({ element: a })
        ]
      }
    ), c = O(() => {
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
        Ue(() => {
          d();
        });
      }
    ), le(
      () => t == null ? void 0 : t.isVisible,
      (p) => {
        p && Ue(() => {
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
    const m = O(() => {
      const p = c.value, [v, g] = p.split("-"), b = g || "center";
      switch (v) {
        case "top":
          switch (b) {
            case "start":
              return "bottom-[-4px] left-4";
            case "end":
              return "bottom-[-4px] right-4";
            default:
              return "bottom-[-4px] left-1/2 transform -translate-x-1/2";
          }
        case "bottom":
          switch (b) {
            case "start":
              return "top-[-4px] left-4";
            case "end":
              return "top-[-4px] right-4";
            default:
              return "top-[-4px] left-1/2 transform -translate-x-1/2";
          }
        case "left":
          switch (b) {
            case "start":
              return "right-[-4px] top-4";
            case "end":
              return "right-[-4px] bottom-4";
            default:
              return "right-[-4px] top-1/2 transform -translate-y-1/2";
          }
        case "right":
          switch (b) {
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
    }), f = O(() => {
      var p;
      return ((p = u.value) == null ? void 0 : p.arrow) || {};
    });
    return se(async () => {
      await Ue(), setTimeout(() => {
        d();
      }, 100);
    }), (p, v) => {
      var g;
      return E(), he(Co, {
        to: ((g = F(t)) == null ? void 0 : g.portalTarget) || "body"
      }, [
        T("div", {
          ref_key: "contentRef",
          ref: r,
          class: "fixed z-[9999] pointer-events-none",
          style: Ht(F(s))
        }, [
          G(it, {
            "enter-active-class": "transition-all duration-200 ease-out",
            "leave-active-class": "transition-all duration-150 ease-in",
            "enter-from-class": "opacity-0 scale-95 translate-y-1",
            "enter-to-class": "opacity-100 scale-100 translate-y-0",
            "leave-from-class": "opacity-100 scale-100 translate-y-0",
            "leave-to-class": "opacity-0 scale-95 translate-y-1"
          }, {
            default: q(() => {
              var b;
              return [
                tn(T("div", hd, [
                  X(p.$slots, "default"),
                  T("div", {
                    ref_key: "arrowRef",
                    ref: a,
                    class: z(["absolute w-2 h-2 bg-primary rotate-45", m.value]),
                    style: Ht(f.value)
                  }, null, 6)
                ], 512), [
                  [nn, (b = F(t)) == null ? void 0 : b.isVisible]
                ])
              ];
            }),
            _: 3
          })
        ], 4)
      ], 8, ["to"]);
    };
  }
}), gd = { class: "flex items-center gap-3" }, bd = { class: "flex items-center gap-2" }, yd = {
  key: 0,
  class: "w-2 h-2 bg-yellow-200 rounded-full m-0.5"
}, wd = ["aria-label"], xd = {
  key: 0,
  class: "w-4 h-4",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
}, kd = {
  key: 1,
  class: "w-4 h-4",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
}, Sd = { class: "mt-2 text-xs opacity-70" }, _f = /* @__PURE__ */ Y({
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
    const n = e, { isDark: t, background: o, themeClass: r, toggleTheme: a } = Ta(), l = O(() => ["p-4 rounded-lg border transition-colors", {
      default: "bg-card text-card-foreground",
      compact: "bg-muted/50 text-muted-foreground",
      minimal: "bg-transparent"
    }[n.variant], n.theme.container].filter(Boolean).join(" ")), i = O(() => ["font-medium", n.theme.text].filter(Boolean).join(" ")), s = O(() => ["p-2 rounded-md transition-colors hover:bg-accent hover:text-accent-foreground", n.theme.button].filter(Boolean).join(" "));
    return (u, d) => (E(), M("div", {
      class: z(l.value)
    }, [
      T("div", gd, [
        T("div", bd, [
          T("div", {
            class: z([
              "w-4 h-4 rounded-full border-2 transition-colors",
              F(t) ? "bg-yellow-400 border-yellow-600" : "bg-blue-400 border-blue-600"
            ])
          }, [
            F(t) ? (E(), M("div", yd)) : te("", !0)
          ], 2),
          T("span", {
            class: z(i.value)
          }, ve(F(t) ? "Dark" : "Light") + " Theme ", 3)
        ]),
        T("button", {
          onClick: d[0] || (d[0] = //@ts-ignore
          (...c) => F(a) && F(a)(...c)),
          class: z(s.value),
          type: "button",
          "aria-label": `Switch to ${F(t) ? "light" : "dark"} theme`
        }, [
          F(t) ? (E(), M("svg", xd, d[1] || (d[1] = [
            T("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            }, null, -1)
          ]))) : (E(), M("svg", kd, d[2] || (d[2] = [
            T("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            }, null, -1)
          ])))
        ], 10, wd)
      ]),
      T("div", Sd, [
        T("p", null, "Background: " + ve(F(o)), 1),
        T("p", null, "Theme Class: " + ve(F(r)), 1)
      ])
    ], 2));
  }
}), Cd = { class: "space-y-4" }, Od = ["onMouseenter", "onMouseleave"], Ed = { class: "font-semibold" }, Td = { class: "text-sm text-zinc-500" }, Pf = /* @__PURE__ */ Y({
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
    return (o, r) => (E(), M("div", {
      class: z(
        F(pe)(
          "flex h-full w-full max-w-sm flex-col overflow-hidden border-l border-zinc-300/80 p-5",
          ...o.classes
        )
      )
    }, [
      T("ul", Cd, [
        (E(!0), M(we, null, Ke(o.tips, (a) => (E(), M("li", {
          key: a.title,
          class: "space-y-3 rounded-lg border border-zinc-300/80 p-3 hover:shadow-md",
          onMouseenter: (l) => n(a.target),
          onMouseleave: (l) => t(a.target)
        }, [
          T("div", null, [
            G(oi, { classes: ["py-1.5"] }, {
              default: q(() => [
                zt(ve(a.type), 1)
              ]),
              _: 2
            }, 1024)
          ]),
          T("div", null, [
            T("div", Ed, ve(a.title), 1),
            T("p", Td, ve(a.description), 1)
          ])
        ], 40, Od))), 128))
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
function Et(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? da(Object(t), !0).forEach(function(o) {
      Dd(e, o, t[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : da(Object(t)).forEach(function(o) {
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(t, o));
    });
  }
  return e;
}
function ro(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ro = function(n) {
    return typeof n;
  } : ro = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, ro(e);
}
function Dd(e, n, t) {
  return n in e ? Object.defineProperty(e, n, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[n] = t, e;
}
function Rt() {
  return Rt = Object.assign || function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = arguments[n];
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, Rt.apply(this, arguments);
}
function _d(e, n) {
  if (e == null) return {};
  var t = {}, o = Object.keys(e), r, a;
  for (a = 0; a < o.length; a++)
    r = o[a], !(n.indexOf(r) >= 0) && (t[r] = e[r]);
  return t;
}
function Pd(e, n) {
  if (e == null) return {};
  var t = _d(e, n), o, r;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      o = a[r], !(n.indexOf(o) >= 0) && Object.prototype.propertyIsEnumerable.call(e, o) && (t[o] = e[o]);
  }
  return t;
}
var $d = "1.15.6";
function Pt(e) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(e);
}
var At = Pt(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), Un = Pt(/Edge/i), ca = Pt(/firefox/i), Mn = Pt(/safari/i) && !Pt(/chrome/i) && !Pt(/android/i), jr = Pt(/iP(ad|od|hone)/i), Ol = Pt(/chrome/i) && Pt(/android/i), El = {
  capture: !1,
  passive: !1
};
function de(e, n, t) {
  e.addEventListener(n, t, !At && El);
}
function ue(e, n, t) {
  e.removeEventListener(n, t, !At && El);
}
function ho(e, n) {
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
      if (n != null && (n[0] === ">" ? e.parentNode === t && ho(e, n) : ho(e, n)) || o && e === t)
        return e;
      if (e === t) break;
    } while (e = Tl(e));
  }
  return null;
}
var fa = /\s+/g;
function et(e, n, t) {
  if (e && n)
    if (e.classList)
      e.classList[t ? "add" : "remove"](n);
    else {
      var o = (" " + e.className + " ").replace(fa, " ").replace(" " + n + " ", " ");
      e.className = (o + (t ? " " + n : "")).replace(fa, " ");
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
function bn(e, n) {
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
function Ae(e, n, t, o, r) {
  if (!(!e.getBoundingClientRect && e !== window)) {
    var a, l, i, s, u, d, c;
    if (e !== window && e.parentNode && e !== St() ? (a = e.getBoundingClientRect(), l = a.top, i = a.left, s = a.bottom, u = a.right, d = a.height, c = a.width) : (l = 0, i = 0, s = window.innerHeight, u = window.innerWidth, d = window.innerHeight, c = window.innerWidth), (n || t) && e !== window && (r = r || e.parentNode, !At))
      do
        if (r && r.getBoundingClientRect && (Q(r, "transform") !== "none" || t && Q(r, "position") !== "static")) {
          var m = r.getBoundingClientRect();
          l -= m.top + parseInt(Q(r, "border-top-width")), i -= m.left + parseInt(Q(r, "border-left-width")), s = l + a.height, u = i + a.width;
          break;
        }
      while (r = r.parentNode);
    if (o && e !== window) {
      var f = bn(r || e), p = f && f.a, v = f && f.d;
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
function pa(e, n, t) {
  for (var o = Bt(e, !0), r = Ae(e)[n]; o; ) {
    var a = Ae(o)[t], l = void 0;
    if (l = r >= a, !l) return o;
    if (o === St()) break;
    o = Bt(o, !1);
  }
  return !1;
}
function xn(e, n, t, o) {
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
function zr(e, n) {
  for (var t = e.lastElementChild; t && (t === Z.ghost || Q(t, "display") === "none" || n && !ho(t, n)); )
    t = t.previousElementSibling;
  return t || null;
}
function lt(e, n) {
  var t = 0;
  if (!e || !e.parentNode)
    return -1;
  for (; e = e.previousElementSibling; )
    e.nodeName.toUpperCase() !== "TEMPLATE" && e !== Z.clone && (!n || ho(e, n)) && t++;
  return t;
}
function ma(e) {
  var n = 0, t = 0, o = St();
  if (e)
    do {
      var r = bn(e), a = r.a, l = r.d;
      n += e.scrollLeft * a, t += e.scrollTop * l;
    } while (e !== o && (e = e.parentNode));
  return [n, t];
}
function Id(e, n) {
  for (var t in e)
    if (e.hasOwnProperty(t)) {
      for (var o in n)
        if (n.hasOwnProperty(o) && n[o] === e[t][o]) return Number(t);
    }
  return -1;
}
function Bt(e, n) {
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
function Rd(e, n) {
  if (e && n)
    for (var t in n)
      n.hasOwnProperty(t) && (e[t] = n[t]);
  return e;
}
function Uo(e, n) {
  return Math.round(e.top) === Math.round(n.top) && Math.round(e.left) === Math.round(n.left) && Math.round(e.height) === Math.round(n.height) && Math.round(e.width) === Math.round(n.width);
}
var Ln;
function _l(e, n) {
  return function() {
    if (!Ln) {
      var t = arguments, o = this;
      t.length === 1 ? e.call(o, t[0]) : e.apply(o, t), Ln = setTimeout(function() {
        Ln = void 0;
      }, n);
    }
  };
}
function Ad() {
  clearTimeout(Ln), Ln = void 0;
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
    if (!(!ft(r, n.draggable, e, !1) || r.animated || r === t)) {
      var u = Ae(r);
      o.left = Math.min((a = o.left) !== null && a !== void 0 ? a : 1 / 0, u.left), o.top = Math.min((l = o.top) !== null && l !== void 0 ? l : 1 / 0, u.top), o.right = Math.max((i = o.right) !== null && i !== void 0 ? i : -1 / 0, u.right), o.bottom = Math.max((s = o.bottom) !== null && s !== void 0 ? s : -1 / 0, u.bottom);
    }
  }), o.width = o.right - o.left, o.height = o.bottom - o.top, o.x = o.left, o.y = o.top, o;
}
var Ze = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function Md() {
  var e = [], n;
  return {
    captureAnimationState: function() {
      if (e = [], !!this.options.animation) {
        var o = [].slice.call(this.el.children);
        o.forEach(function(r) {
          if (!(Q(r, "display") === "none" || r === Z.ghost)) {
            e.push({
              target: r,
              rect: Ae(r)
            });
            var a = Et({}, e[e.length - 1].rect);
            if (r.thisAnimationDuration) {
              var l = bn(r, !0);
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
      e.splice(Id(e, {
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
        var s = 0, u = i.target, d = u.fromRect, c = Ae(u), m = u.prevFromRect, f = u.prevToRect, p = i.rect, v = bn(u, !0);
        v && (c.top -= v.f, c.left -= v.e), u.toRect = c, u.thisAnimationDuration && Uo(m, c) && !Uo(d, c) && // Make sure animatingRect is on line between toRect & fromRect
        (p.top - c.top) / (p.left - c.left) === (d.top - c.top) / (d.left - c.left) && (s = Fd(p, m, f, r.options)), Uo(c, d) || (u.prevFromRect = d, u.prevToRect = c, s || (s = r.options.animation), r.animate(u, p, c, s)), s && (a = !0, l = Math.max(l, s), clearTimeout(u.animationResetTimer), u.animationResetTimer = setTimeout(function() {
          u.animationTime = 0, u.prevFromRect = null, u.fromRect = null, u.prevToRect = null, u.thisAnimationDuration = null;
        }, s), u.thisAnimationDuration = s);
      }), clearTimeout(n), a ? n = setTimeout(function() {
        typeof o == "function" && o();
      }, l) : typeof o == "function" && o(), e = [];
    },
    animate: function(o, r, a, l) {
      if (l) {
        Q(o, "transition", ""), Q(o, "transform", "");
        var i = bn(this.el), s = i && i.a, u = i && i.d, d = (r.left - a.left) / (s || 1), c = (r.top - a.top) / (u || 1);
        o.animatingX = !!d, o.animatingY = !!c, Q(o, "transform", "translate3d(" + d + "px," + c + "px,0)"), this.forRepaintDummy = Ld(o), Q(o, "transition", "transform " + l + "ms" + (this.options.easing ? " " + this.options.easing : "")), Q(o, "transform", "translate3d(0,0,0)"), typeof o.animated == "number" && clearTimeout(o.animated), o.animated = setTimeout(function() {
          Q(o, "transition", ""), Q(o, "transform", ""), o.animated = !1, o.animatingX = !1, o.animatingY = !1;
        }, l);
      }
    }
  };
}
function Ld(e) {
  return e.offsetWidth;
}
function Fd(e, n, t, o) {
  return Math.sqrt(Math.pow(n.top - e.top, 2) + Math.pow(n.left - e.left, 2)) / Math.sqrt(Math.pow(n.top - t.top, 2) + Math.pow(n.left - t.left, 2)) * o.animation;
}
var fn = [], qo = {
  initializeByDefault: !0
}, qn = {
  mount: function(n) {
    for (var t in qo)
      qo.hasOwnProperty(t) && !(t in n) && (n[t] = qo[t]);
    fn.forEach(function(o) {
      if (o.pluginName === n.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(n.pluginName, " more than once");
    }), fn.push(n);
  },
  pluginEvent: function(n, t, o) {
    var r = this;
    this.eventCanceled = !1, o.cancel = function() {
      r.eventCanceled = !0;
    };
    var a = n + "Global";
    fn.forEach(function(l) {
      t[l.pluginName] && (t[l.pluginName][a] && t[l.pluginName][a](Et({
        sortable: t
      }, o)), t.options[l.pluginName] && t[l.pluginName][n] && t[l.pluginName][n](Et({
        sortable: t
      }, o)));
    });
  },
  initializePlugins: function(n, t, o, r) {
    fn.forEach(function(i) {
      var s = i.pluginName;
      if (!(!n.options[s] && !i.initializeByDefault)) {
        var u = new i(n, t, n.options);
        u.sortable = n, u.options = n.options, n[s] = u, Rt(o, u.defaults);
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
    return fn.forEach(function(r) {
      typeof r.eventProperties == "function" && Rt(o, r.eventProperties.call(t[r.pluginName], n));
    }), o;
  },
  modifyOption: function(n, t, o) {
    var r;
    return fn.forEach(function(a) {
      n[a.pluginName] && a.optionListeners && typeof a.optionListeners[t] == "function" && (r = a.optionListeners[t].call(n[a.pluginName], o));
    }), r;
  }
};
function Nd(e) {
  var n = e.sortable, t = e.rootEl, o = e.name, r = e.targetEl, a = e.cloneEl, l = e.toEl, i = e.fromEl, s = e.oldIndex, u = e.newIndex, d = e.oldDraggableIndex, c = e.newDraggableIndex, m = e.originalEvent, f = e.putSortable, p = e.extraEventProperties;
  if (n = n || t && t[Ze], !!n) {
    var v, g = n.options, b = "on" + o.charAt(0).toUpperCase() + o.substr(1);
    window.CustomEvent && !At && !Un ? v = new CustomEvent(o, {
      bubbles: !0,
      cancelable: !0
    }) : (v = document.createEvent("Event"), v.initEvent(o, !0, !0)), v.to = l || t, v.from = i || t, v.item = r || t, v.clone = a, v.oldIndex = s, v.newIndex = u, v.oldDraggableIndex = d, v.newDraggableIndex = c, v.originalEvent = m, v.pullMode = f ? f.lastPutMode : void 0;
    var y = Et(Et({}, p), qn.getEventProperties(o, n));
    for (var h in y)
      v[h] = y[h];
    t && t.dispatchEvent(v), g[b] && g[b].call(n, v);
  }
}
var Vd = ["evt"], Je = function(n, t) {
  var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = o.evt, a = Pd(o, Vd);
  qn.pluginEvent.bind(Z)(n, t, Et({
    dragEl: j,
    parentEl: _e,
    ghostEl: ne,
    rootEl: Se,
    nextEl: Zt,
    lastDownEl: ao,
    cloneEl: Ee,
    cloneHidden: Nt,
    dragStarted: In,
    putSortable: je,
    activeSortable: Z.active,
    originalEvent: r,
    oldIndex: hn,
    oldDraggableIndex: Fn,
    newIndex: tt,
    newDraggableIndex: Ft,
    hideGhostForTarget: Ll,
    unhideGhostForTarget: Fl,
    cloneNowHidden: function() {
      Nt = !0;
    },
    cloneNowShown: function() {
      Nt = !1;
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
  Nd(Et({
    putSortable: je,
    cloneEl: Ee,
    targetEl: j,
    rootEl: Se,
    oldIndex: hn,
    oldDraggableIndex: Fn,
    newIndex: tt,
    newDraggableIndex: Ft
  }, e));
}
var j, _e, ne, Se, Zt, ao, Ee, Nt, hn, tt, Fn, Ft, eo, je, vn = !1, go = !1, bo = [], Xt, ct, Ko, Yo, va, ha, In, pn, Nn, Vn = !1, to = !1, lo, Ge, Xo = [], cr = !1, yo = [], Mo = typeof document < "u", no = jr, ga = Un || At ? "cssFloat" : "float", Bd = Mo && !Ol && !jr && "draggable" in document.createElement("div"), Rl = function() {
  if (Mo) {
    if (At)
      return !1;
    var e = document.createElement("x");
    return e.style.cssText = "pointer-events:auto", e.style.pointerEvents === "auto";
  }
}(), Al = function(n, t) {
  var o = Q(n), r = parseInt(o.width) - parseInt(o.paddingLeft) - parseInt(o.paddingRight) - parseInt(o.borderLeftWidth) - parseInt(o.borderRightWidth), a = xn(n, 0, t), l = xn(n, 1, t), i = a && Q(a), s = l && Q(l), u = i && parseInt(i.marginLeft) + parseInt(i.marginRight) + Ae(a).width, d = s && parseInt(s.marginLeft) + parseInt(s.marginRight) + Ae(l).width;
  if (o.display === "flex")
    return o.flexDirection === "column" || o.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (o.display === "grid")
    return o.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (a && i.float && i.float !== "none") {
    var c = i.float === "left" ? "left" : "right";
    return l && (s.clear === "both" || s.clear === c) ? "vertical" : "horizontal";
  }
  return a && (i.display === "block" || i.display === "flex" || i.display === "table" || i.display === "grid" || u >= r && o[ga] === "none" || l && o[ga] === "none" && u + d > r) ? "vertical" : "horizontal";
}, jd = function(n, t, o) {
  var r = o ? n.left : n.top, a = o ? n.right : n.bottom, l = o ? n.width : n.height, i = o ? t.left : t.top, s = o ? t.right : t.bottom, u = o ? t.width : t.height;
  return r === i || a === s || r + l / 2 === i + u / 2;
}, zd = function(n, t) {
  var o;
  return bo.some(function(r) {
    var a = r[Ze].options.emptyInsertThreshold;
    if (!(!a || zr(r))) {
      var l = Ae(r), i = n >= l.left - a && n <= l.right + a, s = t >= l.top - a && t <= l.bottom + a;
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
  (!r || ro(r) != "object") && (r = {
    name: r
  }), o.name = r.name, o.checkPull = t(r.pull, !0), o.checkPut = t(r.put), o.revertClone = r.revertClone, n.group = o;
}, Ll = function() {
  !Rl && ne && Q(ne, "display", "none");
}, Fl = function() {
  !Rl && ne && Q(ne, "display", "");
};
Mo && !Ol && document.addEventListener("click", function(e) {
  if (go)
    return e.preventDefault(), e.stopPropagation && e.stopPropagation(), e.stopImmediatePropagation && e.stopImmediatePropagation(), go = !1, !1;
}, !0);
var Jt = function(n) {
  if (j) {
    n = n.touches ? n.touches[0] : n;
    var t = zd(n.clientX, n.clientY);
    if (t) {
      var o = {};
      for (var r in n)
        n.hasOwnProperty(r) && (o[r] = n[r]);
      o.target = o.rootEl = t, o.preventDefault = void 0, o.stopPropagation = void 0, t[Ze]._onDragOver(o);
    }
  }
}, Hd = function(n) {
  j && j.parentNode[Ze]._isOutsideThisEl(n.target);
};
function Z(e, n) {
  if (!(e && e.nodeType && e.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(e));
  this.el = e, this.options = n = Rt({}, n), e[Ze] = this;
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
      return Al(e, this.options);
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
    supportPointer: Z.supportPointer !== !1 && "PointerEvent" in window && (!Mn || jr),
    emptyInsertThreshold: 5
  };
  qn.initializePlugins(this, e, t);
  for (var o in t)
    !(o in n) && (n[o] = t[o]);
  Ml(n);
  for (var r in this)
    r.charAt(0) === "_" && typeof this[r] == "function" && (this[r] = this[r].bind(this));
  this.nativeDraggable = n.forceFallback ? !1 : Bd, this.nativeDraggable && (this.options.touchStartThreshold = 1), n.supportPointer ? de(e, "pointerdown", this._onTapStart) : (de(e, "mousedown", this._onTapStart), de(e, "touchstart", this._onTapStart)), this.nativeDraggable && (de(e, "dragover", this), de(e, "dragenter", this)), bo.push(this.el), n.store && n.store.get && this.sort(n.store.get(this) || []), Rt(this, Md());
}
Z.prototype = /** @lends Sortable.prototype */
{
  constructor: Z,
  _isOutsideThisEl: function(n) {
    !this.el.contains(n) && n !== this.el && (pn = null);
  },
  _getDirection: function(n, t) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, n, t, j) : this.options.direction;
  },
  _onTapStart: function(n) {
    if (n.cancelable) {
      var t = this, o = this.el, r = this.options, a = r.preventOnFilter, l = n.type, i = n.touches && n.touches[0] || n.pointerType && n.pointerType === "touch" && n, s = (i || n).target, u = n.target.shadowRoot && (n.path && n.path[0] || n.composedPath && n.composedPath()[0]) || s, d = r.filter;
      if (Jd(o), !j && !(/mousedown|pointerdown/.test(l) && n.button !== 0 || r.disabled) && !u.isContentEditable && !(!this.nativeDraggable && Mn && s && s.tagName.toUpperCase() === "SELECT") && (s = ft(s, r.draggable, o, !1), !(s && s.animated) && ao !== s)) {
        if (hn = lt(s), Fn = lt(s, r.draggable), typeof d == "function") {
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
          if (c = ft(u, c.trim(), o, !1), c)
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
        r.handle && !ft(u, r.handle, o, !1) || this._prepareDragStart(n, i, s);
      }
    }
  },
  _prepareDragStart: function(n, t, o) {
    var r = this, a = r.el, l = r.options, i = a.ownerDocument, s;
    if (o && !j && o.parentNode === a) {
      var u = Ae(o);
      if (Se = a, j = o, _e = j.parentNode, Zt = j.nextSibling, ao = o, eo = l.group, Z.dragged = j, Xt = {
        target: j,
        clientX: (t || n).clientX,
        clientY: (t || n).clientY
      }, va = Xt.clientX - u.left, ha = Xt.clientY - u.top, this._lastX = (t || n).clientX, this._lastY = (t || n).clientY, j.style["will-change"] = "all", s = function() {
        if (Je("delayEnded", r, {
          evt: n
        }), Z.eventCanceled) {
          r._onDrop();
          return;
        }
        r._disableDelayedDragEvents(), !ca && r.nativeDraggable && (j.draggable = !0), r._triggerDragStart(n, t), Ye({
          sortable: r,
          name: "choose",
          originalEvent: n
        }), et(j, l.chosenClass, !0);
      }, l.ignore.split(",").forEach(function(d) {
        Dl(j, d.trim(), Jo);
      }), de(i, "dragover", Jt), de(i, "mousemove", Jt), de(i, "touchmove", Jt), l.supportPointer ? (de(i, "pointerup", r._onDrop), !this.nativeDraggable && de(i, "pointercancel", r._onDrop)) : (de(i, "mouseup", r._onDrop), de(i, "touchend", r._onDrop), de(i, "touchcancel", r._onDrop)), ca && this.nativeDraggable && (this.options.touchStartThreshold = 4, j.draggable = !0), Je("delayStart", this, {
        evt: n
      }), l.delay && (!l.delayOnTouchOnly || t) && (!this.nativeDraggable || !(Un || At))) {
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
    t = t || n.pointerType == "touch" && n, !this.nativeDraggable || t ? this.options.supportPointer ? de(document, "pointermove", this._onTouchMove) : t ? de(document, "touchmove", this._onTouchMove) : de(document, "mousemove", this._onTouchMove) : (de(j, "dragend", this), de(Se, "dragstart", this._onDragStart));
    try {
      document.selection ? io(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(n, t) {
    if (vn = !1, Se && j) {
      Je("dragStarted", this, {
        evt: t
      }), this.nativeDraggable && de(document, "dragover", Hd);
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
    if (ct) {
      this._lastX = ct.clientX, this._lastY = ct.clientY, Ll();
      for (var n = document.elementFromPoint(ct.clientX, ct.clientY), t = n; n && n.shadowRoot && (n = n.shadowRoot.elementFromPoint(ct.clientX, ct.clientY), n !== t); )
        t = n;
      if (j.parentNode[Ze]._isOutsideThisEl(n), t)
        do {
          if (t[Ze]) {
            var o = void 0;
            if (o = t[Ze]._onDragOver({
              clientX: ct.clientX,
              clientY: ct.clientY,
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
    if (Xt) {
      var t = this.options, o = t.fallbackTolerance, r = t.fallbackOffset, a = n.touches ? n.touches[0] : n, l = ne && bn(ne, !0), i = ne && l && l.a, s = ne && l && l.d, u = no && Ge && ma(Ge), d = (a.clientX - Xt.clientX + r.x) / (i || 1) + (u ? u[0] - Xo[0] : 0) / (i || 1), c = (a.clientY - Xt.clientY + r.y) / (s || 1) + (u ? u[1] - Xo[1] : 0) / (s || 1);
      if (!Z.active && !vn) {
        if (o && Math.max(Math.abs(a.clientX - this._lastX), Math.abs(a.clientY - this._lastY)) < o)
          return;
        this._onDragStart(n, !0);
      }
      if (ne) {
        l ? (l.e += d - (Ko || 0), l.f += c - (Yo || 0)) : l = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: d,
          f: c
        };
        var m = "matrix(".concat(l.a, ",").concat(l.b, ",").concat(l.c, ",").concat(l.d, ",").concat(l.e, ",").concat(l.f, ")");
        Q(ne, "webkitTransform", m), Q(ne, "mozTransform", m), Q(ne, "msTransform", m), Q(ne, "transform", m), Ko = d, Yo = c, ct = a;
      }
      n.cancelable && n.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!ne) {
      var n = this.options.fallbackOnBody ? document.body : Se, t = Ae(j, !0, no, !0, n), o = this.options;
      if (no) {
        for (Ge = n; Q(Ge, "position") === "static" && Q(Ge, "transform") === "none" && Ge !== document; )
          Ge = Ge.parentNode;
        Ge !== document.body && Ge !== document.documentElement ? (Ge === document && (Ge = St()), t.top += Ge.scrollTop, t.left += Ge.scrollLeft) : Ge = St(), Xo = ma(Ge);
      }
      ne = j.cloneNode(!0), et(ne, o.ghostClass, !1), et(ne, o.fallbackClass, !0), et(ne, o.dragClass, !0), Q(ne, "transition", ""), Q(ne, "transform", ""), Q(ne, "box-sizing", "border-box"), Q(ne, "margin", 0), Q(ne, "top", t.top), Q(ne, "left", t.left), Q(ne, "width", t.width), Q(ne, "height", t.height), Q(ne, "opacity", "0.8"), Q(ne, "position", no ? "absolute" : "fixed"), Q(ne, "zIndex", "100000"), Q(ne, "pointerEvents", "none"), Z.ghost = ne, n.appendChild(ne), Q(ne, "transform-origin", va / parseInt(ne.style.width) * 100 + "% " + ha / parseInt(ne.style.height) * 100 + "%");
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
    Je("setupClone", this), Z.eventCanceled || (Ee = $l(j), Ee.removeAttribute("id"), Ee.draggable = !1, Ee.style["will-change"] = "", this._hideClone(), et(Ee, this.options.chosenClass, !1), Z.clone = Ee), o.cloneId = io(function() {
      Je("clone", o), !Z.eventCanceled && (o.options.removeCloneOnHide || Se.insertBefore(Ee, j), o._hideClone(), Ye({
        sortable: o,
        name: "clone"
      }));
    }), !t && et(j, a.dragClass, !0), t ? (go = !0, o._loopId = setInterval(o._emulateDragOver, 50)) : (ue(document, "mouseup", o._onDrop), ue(document, "touchend", o._onDrop), ue(document, "touchcancel", o._onDrop), r && (r.effectAllowed = "move", a.setData && a.setData.call(o, r, j)), de(document, "drop", o), Q(j, "transform", "translateZ(0)")), vn = !0, o._dragStartId = io(o._dragStarted.bind(o, t, n)), de(document, "selectstart", o), In = !0, window.getSelection().removeAllRanges(), Mn && Q(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(n) {
    var t = this.el, o = n.target, r, a, l, i = this.options, s = i.group, u = Z.active, d = eo === s, c = i.sort, m = je || u, f, p = this, v = !1;
    if (cr) return;
    function g(ce, re) {
      Je(ce, p, Et({
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
        onMove: function(He, Ne) {
          return oo(Se, t, j, r, He, Ae(He), n, Ne);
        },
        changed: h
      }, re));
    }
    function b() {
      g("dragOverAnimationCapture"), p.captureAnimationState(), p !== m && m.captureAnimationState();
    }
    function y(ce) {
      return g("dragOverCompleted", {
        insertion: ce
      }), ce && (d ? u._hideClone() : u._showClone(p), p !== m && (et(j, je ? je.options.ghostClass : u.options.ghostClass, !1), et(j, i.ghostClass, !0)), je !== p && p !== Z.active ? je = p : p === Z.active && je && (je = null), m === p && (p._ignoreWhileAnimating = o), p.animateAll(function() {
        g("dragOverAnimationComplete"), p._ignoreWhileAnimating = null;
      }), p !== m && (m.animateAll(), m._ignoreWhileAnimating = null)), (o === j && !j.animated || o === t && !o.animated) && (pn = null), !i.dragoverBubble && !n.rootEl && o !== document && (j.parentNode[Ze]._isOutsideThisEl(n.target), !ce && Jt(n)), !i.dragoverBubble && n.stopPropagation && n.stopPropagation(), v = !0;
    }
    function h() {
      tt = lt(j), Ft = lt(j, i.draggable), Ye({
        sortable: p,
        name: "change",
        toEl: t,
        newIndex: tt,
        newDraggableIndex: Ft,
        originalEvent: n
      });
    }
    if (n.preventDefault !== void 0 && n.cancelable && n.preventDefault(), o = ft(o, i.draggable, t, !0), g("dragOver"), Z.eventCanceled) return v;
    if (j.contains(n.target) || o.animated && o.animatingX && o.animatingY || p._ignoreWhileAnimating === o)
      return y(!1);
    if (go = !1, u && !i.disabled && (d ? c || (l = _e !== Se) : je === this || (this.lastPutMode = eo.checkPull(this, u, j, n)) && s.checkPut(this, u, j, n))) {
      if (f = this._getDirection(n, o) === "vertical", r = Ae(j), g("dragOverValid"), Z.eventCanceled) return v;
      if (l)
        return _e = Se, b(), this._hideClone(), g("revert"), Z.eventCanceled || (Zt ? Se.insertBefore(j, Zt) : Se.appendChild(j)), y(!0);
      var k = zr(t, i.draggable);
      if (!k || qd(n, f, this) && !k.animated) {
        if (k === j)
          return y(!1);
        if (k && t === n.target && (o = k), o && (a = Ae(o)), oo(Se, t, j, r, o, a, n, !!o) !== !1)
          return b(), k && k.nextSibling ? t.insertBefore(j, k.nextSibling) : t.appendChild(j), _e = t, h(), y(!0);
      } else if (k && Ud(n, f, this)) {
        var w = xn(t, 0, i, !0);
        if (w === j)
          return y(!1);
        if (o = w, a = Ae(o), oo(Se, t, j, r, o, a, n, !1) !== !1)
          return b(), t.insertBefore(j, w), _e = t, h(), y(!0);
      } else if (o.parentNode === t) {
        a = Ae(o);
        var D = 0, C, _ = j.parentNode !== t, K = !jd(j.animated && j.toRect || r, o.animated && o.toRect || a, f), $ = f ? "top" : "left", B = pa(o, "top", "top") || pa(j, "top", "top"), W = B ? B.scrollTop : void 0;
        pn !== o && (C = a[$], Vn = !1, to = !K && i.invertSwap || _), D = Kd(n, o, a, f, K ? 1 : i.swapThreshold, i.invertedSwapThreshold == null ? i.swapThreshold : i.invertedSwapThreshold, to, pn === o);
        var x;
        if (D !== 0) {
          var I = lt(j);
          do
            I -= D, x = _e.children[I];
          while (x && (Q(x, "display") === "none" || x === ne));
        }
        if (D === 0 || x === o)
          return y(!1);
        pn = o, Nn = D;
        var L = o.nextElementSibling, U = !1;
        U = D === 1;
        var oe = oo(Se, t, j, r, o, a, n, U);
        if (oe !== !1)
          return (oe === 1 || oe === -1) && (U = oe === 1), cr = !0, setTimeout(Gd, 30), b(), U && !L ? t.appendChild(j) : o.parentNode.insertBefore(j, U ? L : o), B && Pl(B, 0, W - B.scrollTop), _e = j.parentNode, C !== void 0 && !to && (lo = Math.abs(C - Ae(o)[$])), h(), y(!0);
      }
      if (t.contains(j))
        return y(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    ue(document, "mousemove", this._onTouchMove), ue(document, "touchmove", this._onTouchMove), ue(document, "pointermove", this._onTouchMove), ue(document, "dragover", Jt), ue(document, "mousemove", Jt), ue(document, "touchmove", Jt);
  },
  _offUpEvents: function() {
    var n = this.el.ownerDocument;
    ue(n, "mouseup", this._onDrop), ue(n, "touchend", this._onDrop), ue(n, "pointerup", this._onDrop), ue(n, "pointercancel", this._onDrop), ue(n, "touchcancel", this._onDrop), ue(document, "selectstart", this);
  },
  _onDrop: function(n) {
    var t = this.el, o = this.options;
    if (tt = lt(j), Ft = lt(j, o.draggable), Je("drop", this, {
      evt: n
    }), _e = j && j.parentNode, tt = lt(j), Ft = lt(j, o.draggable), Z.eventCanceled) {
      this._nulling();
      return;
    }
    vn = !1, to = !1, Vn = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), fr(this.cloneId), fr(this._dragStartId), this.nativeDraggable && (ue(document, "drop", this), ue(t, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), Mn && Q(document.body, "user-select", ""), Q(j, "transform", ""), n && (In && (n.cancelable && n.preventDefault(), !o.dropBubble && n.stopPropagation()), ne && ne.parentNode && ne.parentNode.removeChild(ne), (Se === _e || je && je.lastPutMode !== "clone") && Ee && Ee.parentNode && Ee.parentNode.removeChild(Ee), j && (this.nativeDraggable && ue(j, "dragend", this), Jo(j), j.style["will-change"] = "", In && !vn && et(j, je ? je.options.ghostClass : this.options.ghostClass, !1), et(j, this.options.chosenClass, !1), Ye({
      sortable: this,
      name: "unchoose",
      toEl: _e,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: n
    }), Se !== _e ? (tt >= 0 && (Ye({
      rootEl: _e,
      name: "add",
      toEl: _e,
      fromEl: Se,
      originalEvent: n
    }), Ye({
      sortable: this,
      name: "remove",
      toEl: _e,
      originalEvent: n
    }), Ye({
      rootEl: _e,
      name: "sort",
      toEl: _e,
      fromEl: Se,
      originalEvent: n
    }), Ye({
      sortable: this,
      name: "sort",
      toEl: _e,
      originalEvent: n
    })), je && je.save()) : tt !== hn && tt >= 0 && (Ye({
      sortable: this,
      name: "update",
      toEl: _e,
      originalEvent: n
    }), Ye({
      sortable: this,
      name: "sort",
      toEl: _e,
      originalEvent: n
    })), Z.active && ((tt == null || tt === -1) && (tt = hn, Ft = Fn), Ye({
      sortable: this,
      name: "end",
      toEl: _e,
      originalEvent: n
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    Je("nulling", this), Se = j = _e = ne = Zt = Ee = ao = Nt = Xt = ct = In = tt = Ft = hn = Fn = pn = Nn = je = eo = Z.dragged = Z.ghost = Z.clone = Z.active = null, yo.forEach(function(n) {
      n.checked = !0;
    }), yo.length = Ko = Yo = 0;
  },
  handleEvent: function(n) {
    switch (n.type) {
      case "drop":
      case "dragend":
        this._onDrop(n);
        break;
      case "dragenter":
      case "dragover":
        j && (this._onDragOver(n), Wd(n));
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
      t = o[r], ft(t, l.draggable, this.el, !1) && n.push(t.getAttribute(l.dataIdAttr) || Xd(t));
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
      ft(i, this.options.draggable, r, !1) && (o[a] = i);
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
    var r = qn.modifyOption(this, n, t);
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
    }), this._onDrop(), this._disableDelayedDragEvents(), bo.splice(bo.indexOf(this.el), 1), this.el = n = null;
  },
  _hideClone: function() {
    if (!Nt) {
      if (Je("hideClone", this), Z.eventCanceled) return;
      Q(Ee, "display", "none"), this.options.removeCloneOnHide && Ee.parentNode && Ee.parentNode.removeChild(Ee), Nt = !0;
    }
  },
  _showClone: function(n) {
    if (n.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (Nt) {
      if (Je("showClone", this), Z.eventCanceled) return;
      j.parentNode == Se && !this.options.group.revertClone ? Se.insertBefore(Ee, j) : Zt ? Se.insertBefore(Ee, Zt) : Se.appendChild(Ee), this.options.group.revertClone && this.animate(j, Ee), Q(Ee, "display", ""), Nt = !1;
    }
  }
};
function Wd(e) {
  e.dataTransfer && (e.dataTransfer.dropEffect = "move"), e.cancelable && e.preventDefault();
}
function oo(e, n, t, o, r, a, l, i) {
  var s, u = e[Ze], d = u.options.onMove, c;
  return window.CustomEvent && !At && !Un ? s = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (s = document.createEvent("Event"), s.initEvent("move", !0, !0)), s.to = n, s.from = e, s.dragged = t, s.draggedRect = o, s.related = r || n, s.relatedRect = a || Ae(n), s.willInsertAfter = i, s.originalEvent = l, e.dispatchEvent(s), d && (c = d.call(u, s, l)), c;
}
function Jo(e) {
  e.draggable = !1;
}
function Gd() {
  cr = !1;
}
function Ud(e, n, t) {
  var o = Ae(xn(t.el, 0, t.options, !0)), r = Il(t.el, t.options, ne), a = 10;
  return n ? e.clientX < r.left - a || e.clientY < o.top && e.clientX < o.right : e.clientY < r.top - a || e.clientY < o.bottom && e.clientX < o.left;
}
function qd(e, n, t) {
  var o = Ae(zr(t.el, t.options.draggable)), r = Il(t.el, t.options, ne), a = 10;
  return n ? e.clientX > r.right + a || e.clientY > o.bottom && e.clientX > o.left : e.clientY > r.bottom + a || e.clientX > o.right && e.clientY > o.top;
}
function Kd(e, n, t, o, r, a, l, i) {
  var s = o ? e.clientY : e.clientX, u = o ? t.height : t.width, d = o ? t.top : t.left, c = o ? t.bottom : t.right, m = !1;
  if (!l) {
    if (i && lo < u * r) {
      if (!Vn && (Nn === 1 ? s > d + u * a / 2 : s < c - u * a / 2) && (Vn = !0), Vn)
        m = !0;
      else if (Nn === 1 ? s < d + lo : s > c - lo)
        return -Nn;
    } else if (s > d + u * (1 - r) / 2 && s < c - u * (1 - r) / 2)
      return Yd(n);
  }
  return m = m || l, m && (s < d + u * a / 2 || s > c - u * a / 2) ? s > d + u / 2 ? 1 : -1 : 0;
}
function Yd(e) {
  return lt(j) < lt(e) ? 1 : -1;
}
function Xd(e) {
  for (var n = e.tagName + e.className + e.src + e.href + e.textContent, t = n.length, o = 0; t--; )
    o += n.charCodeAt(t);
  return o.toString(36);
}
function Jd(e) {
  yo.length = 0;
  for (var n = e.getElementsByTagName("input"), t = n.length; t--; ) {
    var o = n[t];
    o.checked && yo.push(o);
  }
}
function io(e) {
  return setTimeout(e, 0);
}
function fr(e) {
  return clearTimeout(e);
}
Mo && de(document, "touchmove", function(e) {
  (Z.active || vn) && e.cancelable && e.preventDefault();
});
Z.utils = {
  on: de,
  off: ue,
  css: Q,
  find: Dl,
  is: function(n, t) {
    return !!ft(n, t, n, !1);
  },
  extend: Rd,
  throttle: _l,
  closest: ft,
  toggleClass: et,
  clone: $l,
  index: lt,
  nextTick: io,
  cancelNextTick: fr,
  detectDirection: Al,
  getChild: xn,
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
    o.utils && (Z.utils = Et(Et({}, Z.utils), o.utils)), qn.mount(o);
  });
};
Z.create = function(e, n) {
  return new Z(e, n);
};
Z.version = $d;
var Re = [], Rn, pr, mr = !1, Qo, Zo, wo, An;
function Qd() {
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
      this.sortable.nativeDraggable ? ue(document, "dragover", this._handleAutoScroll) : (ue(document, "pointermove", this._handleFallbackAutoScroll), ue(document, "touchmove", this._handleFallbackAutoScroll), ue(document, "mousemove", this._handleFallbackAutoScroll)), ba(), so(), Ad();
    },
    nulling: function() {
      wo = pr = Rn = mr = An = Qo = Zo = null, Re.length = 0;
    },
    _handleFallbackAutoScroll: function(t) {
      this._handleAutoScroll(t, !0);
    },
    _handleAutoScroll: function(t, o) {
      var r = this, a = (t.touches ? t.touches[0] : t).clientX, l = (t.touches ? t.touches[0] : t).clientY, i = document.elementFromPoint(a, l);
      if (wo = t, o || this.options.forceAutoScrollFallback || Un || At || Mn) {
        er(t, this.options, i, o);
        var s = Bt(i, !0);
        mr && (!An || a !== Qo || l !== Zo) && (An && ba(), An = setInterval(function() {
          var u = Bt(document.elementFromPoint(a, l), !0);
          u !== s && (s = u, so()), er(t, r.options, u, o);
        }, 10), Qo = a, Zo = l);
      } else {
        if (!this.options.bubbleScroll || Bt(i, !0) === St()) {
          so();
          return;
        }
        er(t, this.options, Bt(i, !1), !1);
      }
    }
  }, Rt(e, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function so() {
  Re.forEach(function(e) {
    clearInterval(e.pid);
  }), Re = [];
}
function ba() {
  clearInterval(An);
}
var er = _l(function(e, n, t, o) {
  if (n.scroll) {
    var r = (e.touches ? e.touches[0] : e).clientX, a = (e.touches ? e.touches[0] : e).clientY, l = n.scrollSensitivity, i = n.scrollSpeed, s = St(), u = !1, d;
    pr !== t && (pr = t, so(), Rn = n.scroll, d = n.scrollFn, Rn === !0 && (Rn = Bt(t, !0)));
    var c = 0, m = Rn;
    do {
      var f = m, p = Ae(f), v = p.top, g = p.bottom, b = p.left, y = p.right, h = p.width, k = p.height, w = void 0, D = void 0, C = f.scrollWidth, _ = f.scrollHeight, K = Q(f), $ = f.scrollLeft, B = f.scrollTop;
      f === s ? (w = h < C && (K.overflowX === "auto" || K.overflowX === "scroll" || K.overflowX === "visible"), D = k < _ && (K.overflowY === "auto" || K.overflowY === "scroll" || K.overflowY === "visible")) : (w = h < C && (K.overflowX === "auto" || K.overflowX === "scroll"), D = k < _ && (K.overflowY === "auto" || K.overflowY === "scroll"));
      var W = w && (Math.abs(y - r) <= l && $ + h < C) - (Math.abs(b - r) <= l && !!$), x = D && (Math.abs(g - a) <= l && B + k < _) - (Math.abs(v - a) <= l && !!B);
      if (!Re[c])
        for (var I = 0; I <= c; I++)
          Re[I] || (Re[I] = {});
      (Re[c].vx != W || Re[c].vy != x || Re[c].el !== f) && (Re[c].el = f, Re[c].vx = W, Re[c].vy = x, clearInterval(Re[c].pid), (W != 0 || x != 0) && (u = !0, Re[c].pid = setInterval((function() {
        o && this.layer === 0 && Z.active._onTouchMove(wo);
        var L = Re[this.layer].vy ? Re[this.layer].vy * i : 0, U = Re[this.layer].vx ? Re[this.layer].vx * i : 0;
        typeof d == "function" && d.call(Z.dragged.parentNode[Ze], U, L, e, wo, Re[this.layer].el) !== "continue" || Pl(Re[this.layer].el, U, L);
      }).bind({
        layer: c
      }), 24))), c++;
    } while (n.bubbleScroll && m !== s && (m = Bt(m, !1)));
    mr = u;
  }
}, 30), Nl = function(n) {
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
function Hr() {
}
Hr.prototype = {
  startIndex: null,
  dragStart: function(n) {
    var t = n.oldDraggableIndex;
    this.startIndex = t;
  },
  onSpill: function(n) {
    var t = n.dragEl, o = n.putSortable;
    this.sortable.captureAnimationState(), o && o.captureAnimationState();
    var r = xn(this.sortable.el, this.startIndex, this.options);
    r ? this.sortable.el.insertBefore(t, r) : this.sortable.el.appendChild(t), this.sortable.animateAll(), o && o.animateAll();
  },
  drop: Nl
};
Rt(Hr, {
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
Rt(Wr, {
  pluginName: "removeOnSpill"
});
Z.mount(new Qd());
Z.mount(Wr, Hr);
const vr = /* @__PURE__ */ Y({
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
    const o = e, r = t, a = Ul(), l = S(!1), i = S(null), s = S(null), u = O(() => typeof o.itemKey == "string" ? (d) => d[o.itemKey] : o.itemKey);
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
    ), xe(() => {
      s.value && (s.value.destroy(), i.value = null, s.value = null);
    }), (d, c) => (E(), he(ql(d.$props.tag), {
      ref_key: "containerRef",
      ref: i,
      class: z(d.$props.class)
    }, {
      default: q(() => [
        X(d.$slots, "header"),
        (E(!0), M(we, null, Ke(e.list, (m, f) => X(d.$slots, "item", {
          key: u.value(m),
          element: m,
          index: f
        })), 128)),
        X(d.$slots, "footer")
      ]),
      _: 3
    }, 8, ["class"]));
  }
});
function Zd(e) {
  return e.reduce((n, t) => {
    const o = t.group || "Default";
    return n[o] || (n[o] = []), n[o].push(t), n;
  }, {});
}
function Qt(e) {
  return Object.values(e).flat();
}
const ec = { class: "flex flex-col space-y-4" }, tc = { class: "space-y-2" }, nc = { class: "space-y-2" }, oc = { class: "flex justify-end" }, rc = /* @__PURE__ */ Y({
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
    return (i, s) => !i.disabled.includes("groups") && r.value ? (E(), he(nd, {
      key: 0,
      ref_key: "popover",
      ref: a,
      theme: {
        popoverMenu: "leading-none",
        popoverMenuButton: "rounded-md size-6 flex items-center justify-center hover:bg-zinc-100"
      }
    }, {
      trigger: q(() => [
        T("span", {
          class: "block h-3 w-3 rounded-full",
          style: Ht(`background-color: ${r.value.color || i.defaultGroupColor};`)
        }, null, 4)
      ]),
      default: q(({ close: u }) => [
        T("div", ec, [
          T("div", tc, [
            s[2] || (s[2] = T("div", { class: "block text-sm font-medium text-foreground" }, " Group name ", -1)),
            G(Da, {
              modelValue: r.value.name,
              "onUpdate:modelValue": s[0] || (s[0] = (d) => r.value.name = d),
              type: "text",
              placeholder: `${r.value.name}`,
              theme: {
                input: "py-1.5"
              }
            }, null, 8, ["modelValue", "placeholder"])
          ]),
          T("div", nc, [
            s[3] || (s[3] = T("div", { class: "block text-sm font-medium text-foreground" }, " Group color ", -1)),
            G(Bu, {
              "model-value": r.value.color,
              "onUpdate:modelValue": s[1] || (s[1] = (d) => r.value.color = d)
            }, null, 8, ["model-value"])
          ]),
          T("div", oc, [
            G(ot, {
              onClick: (d) => l(u),
              size: "sm",
              variant: "outline"
            }, {
              default: q(() => s[4] || (s[4] = [
                zt(" Save ")
              ])),
              _: 2,
              __: [4]
            }, 1032, ["onClick"])
          ])
        ])
      ]),
      _: 1
    }, 512)) : te("", !0);
  }
}), ac = ["id"], lc = { class: "mb-4 last:mb-0" }, ic = { class: "sortable-drag flex min-w-px grow items-center space-x-2 text-base" }, sc = {
  key: 0,
  class: "shrink-0 text-sm"
}, uc = { key: 1 }, dc = ["data-sortable-item-id"], cc = { class: "ml-auto flex items-center space-x-1 p-1" }, fc = { class: "flex -space-x-px" }, $f = /* @__PURE__ */ Y({
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
    fe(
      "componentJarTheme"
    );
    const a = S({ Default: [] }), l = S({}), i = S(!1), s = S(), u = S(r.focusedColumn), d = S(""), c = S([]), m = S((Math.random() + 1).toString(36).substring(7)), f = S(!1);
    S({
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
    const p = O({
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
        } : Zd([...x]);
      },
      { immediate: !0 }
    ), le(
      () => r.groupConfiguration,
      () => {
        const x = {};
        Object.entries(r.groupConfiguration).forEach(([I, L]) => {
          const U = L.id || I;
          x[U] = {
            ...L,
            id: U
            // Ensure ID is set
          };
        }), l.value = x;
      },
      { immediate: !0, deep: !0 }
    ), le(
      () => l.value,
      (x) => {
        Object.entries(x).forEach(([I, L]) => {
          L.id || (L.id = I);
        });
      },
      { deep: !0 }
    );
    function g(x) {
      console.log("clicked list item", x.currentTarget);
    }
    function b(x) {
      const I = l.value[x];
      if (!I) return;
      const L = l.value[x];
      if (L) {
        if (l.value[x] = {
          ...L,
          id: x
          // Ensure we keep the original ID
        }, I.name !== L.name) {
          const U = a.value[I.name] || [];
          delete a.value[I.name], a.value[L.name] = U.map((oe) => ({
            ...oe,
            group: L.name
          }));
        }
        o("update:groupConfiguration", l.value), o("update:existingColumns", Qt(a.value));
      }
    }
    function y(x, I) {
      const L = a.value[x][I];
      u.value && u.value.id === L.id && (p.value = null), a.value = {
        ...a.value,
        [x]: a.value[x].filter(
          (U, oe) => oe !== I
        )
      }, o("update:existingColumns", Qt(a.value));
    }
    function h() {
      const x = v(), I = d.value;
      a.value = {
        ...a.value,
        [x]: []
      }, l.value[x] = {
        id: x,
        name: I,
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
    function k(x) {
      const I = l.value[x];
      I && (delete a.value[I.name], delete l.value[x], o("update:existingColumns", Qt(a.value)), o("update:groupConfiguration", l.value));
    }
    function w(x) {
      a.value = {
        ...a.value,
        [x]: []
      }, c.value.includes(x) || c.value.push(x);
    }
    function D(x, I) {
      const L = I.splice(x.oldIndex, 1)[0];
      return I.splice(Math.min(x.newIndex, I.length), 0, L), I;
    }
    function C(x, I) {
      a.value[x] = D(
        I,
        a.value[x]
      ), o("update:existingColumns", Qt(a.value));
    }
    function _(x) {
    }
    function K(x, I) {
      const L = I.from.dataset.groupName || "Default", U = B(I).from.map(
        (oe) => a.value[L][oe]
      ).map((oe) => ({ ...oe, group: x }));
      a.value[x].splice(
        B(I).to[0],
        0,
        ...U
      ), o("update:existingColumns", Qt(a.value));
    }
    function $(x, I) {
      a.value[x].splice(I.oldIndex, 1), o("update:existingColumns", Qt(a.value));
    }
    function B(x) {
      var I, L, U;
      return {
        domElements: (I = x.items) != null && I.length ? x.items : [x.item],
        from: (L = x.oldIndicies) != null && L.length ? x.oldIndicies.map((oe) => oe.index) : [x.oldIndex],
        to: (U = x.newIndicies) != null && U.length ? x.newIndicies.map((oe) => oe.index) : [x.newIndex]
      };
    }
    function W(x, I) {
      console.log("onPickedNewColumn", a.value, x, I), I && (I.group = x, a.value = {
        ...a.value,
        [x]: [...a.value[x], I]
      }, o("update:existingColumns", Qt(a.value)));
    }
    return O(
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
            w(x.groupName);
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
      clearAllColumns: w,
      onPickedNewColumn: W,
      removeGroup: k
    }), (x, I) => (E(), M("div", {
      class: z(
        F(pe)(
          "w-full overflow-hidden h-full border border-border bg-background rounded-lg sm:min-w-60 flex flex-col md:flex-row",
          x.theme.columnManagerContainer
        )
      )
    }, [
      Object.values(l.value).length === 0 ? (E(), he(Go, {
        key: 0,
        icon: "fa-exclamation-circle",
        title: "Nothing here, yet"
      }, {
        default: q(() => I[6] || (I[6] = [
          T("p", null, "There are no groups here yet. Add a new group to get started.", -1)
        ])),
        _: 1,
        __: [6]
      })) : te("", !0),
      T("div", {
        id: `column-manager-groups-container-${m.value}`,
        class: z(
          F(pe)("overflow-y-auto h-full", x.theme.columnManagerGroupsContainer)
        )
      }, [
        (E(), he(F(vr), {
          list: Object.values(l.value).filter(
            (L) => L.name
          ),
          key: "groups",
          "item-key": "id",
          tag: "div",
          class: z(F(pe)("p-3", x.theme.columnManagerGroupContainer)),
          "data-group-name": "groups",
          options: {
            animation: 150,
            group: "shared-groups",
            handle: ".drag-handle",
            selectedClass: "selected"
          },
          onStart: I[0] || (I[0] = (L) => f.value = !0),
          onEnd: I[1] || (I[1] = (L) => f.value = !1),
          onUpdate: I[2] || (I[2] = (L) => void 0)
        }, {
          item: q(({ element: L }) => [
            T("div", lc, [
              T("div", {
                class: z(F(pe)(x.theme.columnManagerGroupHeader))
              }, [
                T("div", ic, [
                  x.disabled.includes("groups") ? te("", !0) : X(x.$slots, "drag-handle", { key: 0 }),
                  G(rc, {
                    modelValue: l.value[L.id],
                    "onUpdate:modelValue": (U) => l.value[L.id] = U,
                    "default-group-color": x.defaultGroupColor,
                    disabled: x.disabled,
                    "group-id": L.id,
                    onUpdate: b
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "default-group-color", "disabled", "group-id"]),
                  T("span", {
                    class: z(["font-semibold", x.theme.columnManagerGroupLabel])
                  }, ve(l.value[L.id].name), 3)
                ]),
                x.groupMenuItems ? (E(), M("span", sc)) : te("", !0)
              ], 2),
              f.value ? te("", !0) : (E(), M("div", {
                key: 0,
                class: z(
                  F(pe)(
                    "group flex items-center justify-end space-x-2 py-2 ",
                    x.theme.typeaheadContainer
                  )
                )
              }, [
                G(Cl, {
                  ref_key: "columnFinderTypeahead",
                  ref: s,
                  "default-items": x.defaultItems,
                  "display-property": () => "",
                  "groups-config": x.typeaheadGroupsConfig,
                  "group-by": x.typeaheadGroupBy,
                  multiple: !1,
                  nullable: !0,
                  searcher: x.searcher,
                  "middleware-options": x.typeaheadMiddlewareOptions,
                  placeholder: "Add a column to group",
                  "onUpdate:modelValue": (U) => W(
                    L.id,
                    U
                  )
                }, Kl({
                  empty: q(() => [
                    G(Go, {
                      icon: "fa-exclamation-circle",
                      title: "No columns found"
                    }, {
                      default: q(() => I[7] || (I[7] = [
                        T("p", null, " There are no columns to show at this time. Try a different search. ", -1)
                      ])),
                      _: 1,
                      __: [7]
                    })
                  ]),
                  static: q(() => [
                    T("div", null, [
                      X(x.$slots, "typeahead-static")
                    ])
                  ]),
                  item: q(({ item: U, selected: oe, active: ce }) => [
                    X(x.$slots, "option", xt(jt({ item: U, selected: oe, active: ce })))
                  ]),
                  _: 2
                }, [
                  x.$slots["typeahead-group"] ? {
                    name: "group",
                    fn: q((U) => [
                      X(x.$slots, "typeahead-group", xt(jt(U)))
                    ]),
                    key: "0"
                  } : void 0,
                  x.$slots["typeahead-searching"] ? {
                    name: "searching",
                    fn: q(() => [
                      T("div", null, [
                        X(x.$slots, "typeahead-searching")
                      ])
                    ]),
                    key: "1"
                  } : void 0
                ]), 1032, ["default-items", "groups-config", "group-by", "searcher", "middleware-options", "onUpdate:modelValue"])
              ], 2)),
              !f.value && (a.value[L.id] || []).length === 0 ? (E(), M("div", uc, [
                G(Go, {
                  title: "No columns",
                  description: "There are no columns here yet. Use the picker above to add the first column."
                }, {
                  default: q(() => I[8] || (I[8] = [
                    T("p", null, " There are no columns here yet. Use the picker above to add the first column. ", -1)
                  ])),
                  _: 1,
                  __: [8]
                })
              ])) : te("", !0),
              f.value ? te("", !0) : (E(), he(F(vr), {
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
                onAdd: (U) => K(L.id, U),
                onRemove: (U) => $(L.id, U),
                onUpdate: (U) => C(L.id, U)
              }, {
                item: q(({ element: U, index: oe }) => [
                  (E(), M("div", {
                    class: z(["group flex w-full hover:bg-accent/50 rounded-md items-center gap-2 [&.selected]:bg-accent/50", F(pe)(x.theme.columnManagerItem)]),
                    key: U.id,
                    "data-sortable-item-id": U.id,
                    onClick: g
                  }, [
                    X(x.$slots, "drag-handle", {}, () => [
                      G(ot, {
                        variant: "ghost",
                        size: "xs",
                        icon: "",
                        class: "drag-handle shrink-0 text-muted-foreground/70 hover:text-foreground rounded-sm hover:bg-black/5"
                      }, {
                        default: q(() => [
                          G(F(vi), { class: "size-3.5 shrink-0" })
                        ]),
                        _: 1
                      })
                    ]),
                    X(x.$slots, "column", xt(jt({ element: U }))),
                    T("div", cc, [
                      G(ot, {
                        onClick: yn((ce) => y(
                          L.id,
                          oe
                        ), ["prevent", "stop"]),
                        variant: "ghost",
                        size: "xs",
                        icon: "",
                        class: "shrink-0 rounded-sm text-muted-foreground/70 hover:text-foreground hover:bg-black/5"
                      }, {
                        default: q(() => [
                          G(F(Ea), { class: "size-4 shrink-0" })
                        ]),
                        _: 2
                      }, 1032, ["onClick"]),
                      G(ot, {
                        onClick: yn((ce) => p.value.value = a.value[L.id][oe], ["prevent", "stop"]),
                        variant: "ghost",
                        size: "xs",
                        icon: "",
                        class: "shrink-0 rounded-sm text-muted-foreground/70 hover:text-foreground hover:bg-black/5"
                      }, {
                        default: q(() => [
                          G(F(mi), { class: "size-4 shrink-0" })
                        ]),
                        _: 2
                      }, 1032, ["onClick"])
                    ])
                  ], 10, dc))
                ]),
                _: 2
              }, 1032, ["list", "class", "data-group-name", "onAdd", "onRemove", "onUpdate"]))
            ])
          ]),
          _: 3
        }, 8, ["list", "class"])),
        x.disabled.includes("groups") ? te("", !0) : (E(), M("div", {
          key: 0,
          class: z(["sticky bottom-0 z-2 flex items-center gap-2 p-3 bg-background/90 backdrop-blur-sm", F(pe)(x.theme.columnManagerNewGroupContainer)])
        }, [
          G(it, {
            "enter-active-class": "transition duration-200 ease-out",
            "enter-from-class": "translate-y-1 opacity-0",
            "enter-to-class": "translate-y-0 opacity-100",
            "leave-active-class": "transition duration-150 ease-in",
            "leave-from-class": "translate-y-0 opacity-100",
            "leave-to-class": "translate-y-1 opacity-0"
          }, {
            default: q(() => [
              tn(T("span", fc, [
                G(Da, {
                  id: "column-manager-new-group-name",
                  name: "column-manager-new-group-name",
                  placeholder: "New group name",
                  modelValue: d.value,
                  "onUpdate:modelValue": I[3] || (I[3] = (L) => d.value = L),
                  onKeyup: I[4] || (I[4] = Oa((L) => h(), ["enter"])),
                  theme: {
                    input: "w-full py-1.5"
                  },
                  type: "text"
                }, null, 8, ["modelValue"])
              ], 512), [
                [nn, i.value]
              ])
            ]),
            _: 1
          }),
          G(ot, {
            onClick: I[5] || (I[5] = (L) => i.value = !i.value),
            theme: { button: x.theme.addGroupButton },
            size: "sm",
            variant: "outline"
          }, {
            default: q(() => [
              zt(ve(i.value ? "Cancel" : "Add a group"), 1)
            ]),
            _: 1
          }, 8, ["theme"])
        ], 2))
      ], 10, ac),
      X(x.$slots, "default")
    ], 2));
  }
});
function pc(e, n) {
  return E(), M("svg", {
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
function mc(e, n) {
  return E(), M("svg", {
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
function ya(e, n) {
  return E(), M("svg", {
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
const vc = { class: "ml-2 grow min-w-px text-left" }, hc = { class: "ml-6 rounded border px-2 py-0.5 text-xs bg-card hidden sm:inline-block" }, gc = { class: "fixed inset-0 bg-background/50 backdrop-blur-sm" }, bc = { class: "fixed inset-0 overflow-y-auto" }, yc = { class: "flex min-h-full items-start justify-center p-4 pt-16 sm:items-center sm:pt-4" }, wc = { class: "w-[calc(100vw-2rem)] sm:w-[400px] transform overflow-hidden rounded-2xl bg-card p-0 shadow-2xl border transition-all max-h-[calc(100vh-8rem)] sm:max-h-[calc(100vh-4rem)] flex flex-col" }, xc = { class: "text-xs font-medium text-muted-foreground my-2 px-3" }, kc = { class: "space-y-0.5" }, Sc = ["href"], Cc = { class: "text-muted-foreground group-hover:text-primary transition" }, Oc = { class: "flex-1 min-w-0" }, Ec = { class: "text-sm text-foreground truncate" }, Tc = {
  key: 1,
  class: "py-4 text-center text-sm text-muted-foreground flex-1 flex items-center justify-center"
}, Dc = { class: "border-t px-4 py-3 flex items-center gap-2 bg-card rounded-b-2xl flex-shrink-0" }, _c = { class: "rounded border text-muted-foreground size-5 flex items-center justify-center text-xs bg-card hidden sm:flex" }, Pc = { class: "text-xs text-muted-foreground" }, If = /* @__PURE__ */ Y({
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
    }, i = (u) => {
      console.log("onSelect", u), t.value = !1, o.value = "", r.value = n.defaultResults;
    }, s = () => {
      t.value = !0;
    };
    return se(() => {
      window.addEventListener("keydown", a), r.value = n.defaultResults;
    }), xe(() => {
      window.removeEventListener("keydown", a);
    }), (u, d) => (E(), he(F(Rr), { "onUpdate:modelValue": i }, {
      default: q(() => [
        G(F(Ar), {
          as: "span",
          onClick: s
        }, {
          default: q(() => [
            G(ot, {
              variant: "outline",
              class: "w-full pr-2 pl-3"
            }, {
              default: q(() => [
                G(F(ya), { class: "size-4 shrink-0" }),
                T("span", vc, ve(u.placeholder), 1),
                T("kbd", hc, ve(u.keyboardShortcut), 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        G(it, {
          "enter-active-class": "ease-out duration-300",
          "enter-from-class": "opacity-0",
          "enter-to-class": "opacity-100",
          "leave-active-class": "ease-in duration-200",
          "leave-from-class": "opacity-100",
          "leave-to-class": "opacity-0"
        }, {
          default: q(() => [
            tn(T("div", {
              class: "fixed inset-0 z-50",
              onClick: d[2] || (d[2] = (c) => t.value = !1)
            }, [
              G(it, {
                "enter-active-class": "ease-out duration-300",
                "enter-from-class": "opacity-0",
                "enter-to-class": "opacity-100",
                "leave-active-class": "ease-in duration-200",
                "leave-from-class": "opacity-100",
                "leave-to-class": "opacity-0"
              }, {
                default: q(() => [
                  tn(T("div", gc, null, 512), [
                    [nn, t.value]
                  ])
                ]),
                _: 1
              }),
              T("div", bc, [
                T("div", yc, [
                  G(it, {
                    "enter-active-class": "ease-out duration-300",
                    "enter-from-class": "opacity-0 scale-95",
                    "enter-to-class": "opacity-100 scale-100",
                    "leave-active-class": "ease-in duration-200",
                    "leave-from-class": "opacity-100 scale-100",
                    "leave-to-class": "opacity-0 scale-95"
                  }, {
                    default: q(() => [
                      tn(T("div", wc, [
                        T("div", {
                          class: "relative border-b px-2 pt-2 pb-2 flex-shrink-0",
                          onClick: d[1] || (d[1] = yn(() => {
                          }, ["stop"]))
                        }, [
                          G(F(ya), { class: "pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" }),
                          G(F(Mr), {
                            modelValue: o.value,
                            "onUpdate:modelValue": d[0] || (d[0] = (c) => o.value = c),
                            placeholder: u.inputPlaceholder,
                            autofocus: "",
                            type: "text",
                            onChange: l,
                            class: "flex w-full rounded-md border border-border bg-background pr-3 pl-9 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground/70 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring transition-[box-shadow,color] disabled:cursor-not-allowed disabled:opacity-50"
                          }, null, 8, ["modelValue", "placeholder"])
                        ]),
                        r.value.length > 0 ? (E(), he(F(Lr), {
                          key: 0,
                          static: "",
                          class: "px-2 pt-2 pb-4 flex-1 overflow-y-auto"
                        }, {
                          default: q(() => [
                            T("div", xc, ve(o.value ? u.resultsLabel : u.defaultResultsLabel), 1),
                            T("div", kc, [
                              (E(!0), M(we, null, Ke(r.value, (c) => (E(), he(F(zn), {
                                key: c.id,
                                value: c
                              }, {
                                default: q(({ active: m, selected: f }) => [
                                  T("a", {
                                    href: c.url,
                                    class: z(["flex items-center gap-3 px-3 py-2 sm:py-1.5 hover:bg-accent/80 transition group rounded-md touch-manipulation", {
                                      "bg-accent": f || m
                                    }])
                                  }, [
                                    T("span", Cc, [
                                      G(F(pc), { class: "size-4 shrink-0" })
                                    ]),
                                    T("div", Oc, [
                                      T("div", Ec, ve(c.title), 1)
                                    ])
                                  ], 10, Sc)
                                ]),
                                _: 2
                              }, 1032, ["value"]))), 128))
                            ])
                          ]),
                          _: 1
                        })) : o.value ? (E(), M("div", Tc, ve(u.noResultsText), 1)) : te("", !0),
                        T("div", Dc, [
                          T("kbd", _c, [
                            G(F(mc), { class: "size-3" })
                          ]),
                          T("span", Pc, ve(u.footerText), 1)
                        ])
                      ], 512), [
                        [nn, t.value]
                      ])
                    ]),
                    _: 1
                  })
                ])
              ])
            ], 512), [
              [nn, t.value]
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), $c = { class: "z-51 fixed inset-0 overflow-y-auto" }, Ic = { class: "flex min-h-full items-center justify-center p-4 text-center" }, Rc = { class: "space-y-4" }, Ac = { class: "mt-2 grow" }, Mc = { class: "text-sm text-[var(--muted-foreground)]" }, Lc = {
  key: 0,
  class: "flex items-center justify-end space-x-2 pt-4"
}, Fc = {
  key: 1,
  class: "flex items-center justify-center py-4"
}, Rf = /* @__PURE__ */ Y({
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
    le(() => o.modelValue, a), xe(() => {
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
    }), (d, c) => (E(), he(F(Sl), {
      appear: "",
      show: d.modelValue,
      as: "template"
    }, {
      default: q(() => [
        G(F(uu), {
          as: "div",
          onClose: s,
          class: "relative"
        }, {
          default: q(() => [
            G(F(dr), {
              as: "template",
              enter: "duration-300 ease-out",
              "enter-from": "opacity-0",
              "enter-to": "opacity-100",
              leave: "duration-200 ease-in",
              "leave-from": "opacity-100",
              "leave-to": "opacity-0"
            }, {
              default: q(() => c[0] || (c[0] = [
                T("div", { class: "z-50 fixed inset-0 bg-primary/10" }, null, -1)
              ])),
              _: 1,
              __: [0]
            }),
            T("div", $c, [
              T("div", Ic, [
                G(F(dr), {
                  as: "template",
                  enter: "duration-300 ease-out",
                  "enter-from": "opacity-0 scale-95",
                  "enter-to": "opacity-100 scale-100",
                  leave: "duration-200 ease-in",
                  "leave-from": "opacity-100 scale-100",
                  "leave-to": "opacity-0 scale-95"
                }, {
                  default: q(() => [
                    G(F(du), { class: "w-full max-w-md transform overflow-hidden rounded-lg bg-[var(--card)] ring-1 ring-[var(--border)] p-6 text-left align-middle shadow-xl transition-all duration-300" }, {
                      default: q(() => [
                        T("div", Rc, [
                          G(F(cu), {
                            as: "h3",
                            class: "text-lg font-medium leading-6 text-[var(--card-foreground)]"
                          }, {
                            default: q(() => [
                              zt(ve(d.title), 1)
                            ]),
                            _: 1
                          }),
                          T("div", Ac, [
                            T("p", Mc, ve(d.description), 1)
                          ]),
                          d.processing ? (E(), M("div", Fc, [
                            X(d.$slots, "processing")
                          ])) : (E(), M("div", Lc, [
                            G(ot, {
                              size: "sm",
                              variant: "ghost",
                              onClick: i
                            }, {
                              default: q(() => [
                                zt(ve(d.cancelButtonText), 1)
                              ]),
                              _: 1
                            }),
                            G(ot, {
                              size: "sm",
                              variant: "default",
                              onClick: l
                            }, {
                              default: q(() => [
                                zt(ve(d.confirmButtonText), 1)
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
}), Nc = { class: "flex items-center gap-2" }, Vc = /* @__PURE__ */ Y({
  __name: "QueryCondition",
  props: {
    modelValue: {},
    availableFields: {},
    showRemove: { type: Boolean },
    showLogicalOperator: { type: Boolean }
  },
  emits: ["update:modelValue", "remove"],
  setup(e, { emit: n }) {
    const t = e, o = n, r = (f) => f == null ? void 0 : f.label, a = (f) => f == null ? void 0 : f.label, l = O({
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
    }), i = O({
      get: () => c.find((f) => f.id === t.modelValue.operator),
      set: (f) => {
        const p = f && typeof f == "object" && "id" in f ? f.id : f;
        o("update:modelValue", {
          ...t.modelValue,
          operator: p
        });
      }
    }), s = O({
      get: () => m.find((f) => f.id === t.modelValue.comparison),
      set: (f) => {
        const p = f && typeof f == "object" && "id" in f ? f.id : f;
        o("update:modelValue", {
          ...t.modelValue,
          comparison: p
        });
      }
    }), u = O({
      get: () => t.modelValue.value,
      set: (f) => o("update:modelValue", { ...t.modelValue, value: f })
    });
    O({
      get: () => t.modelValue.logicalOrOperator,
      set: (f) => o("update:modelValue", {
        ...t.modelValue,
        logicalOrOperator: f
      })
    });
    const d = O(() => [...u.value || []]);
    O(() => {
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
      return E(), M("div", Nc, [
        G(Cl, {
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
        G(Wo, {
          modelValue: i.value,
          "onUpdate:modelValue": p[1] || (p[1] = (g) => i.value = g),
          items: c,
          "display-property": (g) => g.label,
          placeholder: "Select operator...",
          class: "self-start w-32 shrink-0"
        }, null, 8, ["modelValue", "display-property"]),
        G(Wo, {
          modelValue: s.value,
          "onUpdate:modelValue": p[2] || (p[2] = (g) => s.value = g),
          items: m,
          "display-property": (g) => g.label,
          placeholder: "Select comparison...",
          class: "self-start w-32 shrink-0"
        }, null, 8, ["modelValue", "display-property"]),
        G(Wo, {
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
        f.showRemove ? (E(), he(ot, {
          key: 0,
          onClick: p[4] || (p[4] = (g) => f.$emit("remove")),
          class: "text-destructive hover:bg-destructive/80 hover:text-white rounded shrink-0",
          variant: "ghost",
          size: "xs"
        }, {
          default: q(() => [
            G(F(Ea), { class: "size-4" })
          ]),
          _: 1
        })) : te("", !0)
      ]);
    };
  }
}), Be = [];
for (let e = 0; e < 256; ++e)
  Be.push((e + 256).toString(16).slice(1));
function Bc(e, n = 0) {
  return (Be[e[n + 0]] + Be[e[n + 1]] + Be[e[n + 2]] + Be[e[n + 3]] + "-" + Be[e[n + 4]] + Be[e[n + 5]] + "-" + Be[e[n + 6]] + Be[e[n + 7]] + "-" + Be[e[n + 8]] + Be[e[n + 9]] + "-" + Be[e[n + 10]] + Be[e[n + 11]] + Be[e[n + 12]] + Be[e[n + 13]] + Be[e[n + 14]] + Be[e[n + 15]]).toLowerCase();
}
let tr;
const jc = new Uint8Array(16);
function zc() {
  if (!tr) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    tr = crypto.getRandomValues.bind(crypto);
  }
  return tr(jc);
}
const Hc = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), wa = { randomUUID: Hc };
function xo(e, n, t) {
  var r;
  if (wa.randomUUID && !e)
    return wa.randomUUID();
  e = e || {};
  const o = e.random ?? ((r = e.rng) == null ? void 0 : r.call(e)) ?? zc();
  if (o.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return o[6] = o[6] & 15 | 64, o[8] = o[8] & 63 | 128, Bc(o);
}
const Wc = /* @__PURE__ */ Y({
  __name: "QueryBuilderLogicSwitch",
  props: {
    modelValue: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const t = e, o = n, r = O({
      get: () => t.modelValue,
      set: (a) => o("update:modelValue", a)
    });
    return (a, l) => (E(), he(F(gu), {
      modelValue: r.value,
      "onUpdate:modelValue": l[0] || (l[0] = (i) => r.value = i),
      class: z([
        "relative inline-flex h-6 w-16 items-center rounded-full transition-colors focus:outline-none border focus:ring-2 focus:ring-ring focus:ring-offset-2",
        (r.value, "bg-muted")
      ])
    }, {
      default: q(() => [
        l[1] || (l[1] = T("span", { class: "sr-only" }, "Use AND/OR", -1)),
        T("span", {
          class: z([
            "inline-block absolute h-4 transform rounded-full bg-primary shadow-xs transition-all duration-300 ease-in-out",
            r.value ? "left-9 w-5.5" : "left-1 w-7.5"
          ])
        }, null, 2),
        T("span", {
          class: z(["absolute left-2 text-[10px] font-medium", [r.value ? "text-primary" : "text-muted"]])
        }, "AND", 2),
        T("span", {
          class: z(["absolute right-2 text-[10px] font-medium", [r.value ? "text-muted" : "text-primary"]])
        }, "OR", 2)
      ]),
      _: 1,
      __: [1]
    }, 8, ["modelValue", "class"]));
  }
}), Gc = { class: "relative group-container border rounded-lg p-4 mb-4" }, Uc = { class: "flex items-center gap-2 mb-2" }, qc = { key: 0 }, Kc = { class: "space-y-2" }, Yc = {
  key: 0,
  class: "pl-6 mt-4 border-l"
}, Xc = { class: "flex gap-2 mt-4" }, Jc = /* @__PURE__ */ Y({
  __name: "QueryGroup",
  props: {
    modelValue: {},
    availableFields: {},
    isRoot: { type: Boolean }
  },
  emits: ["update:modelValue", "remove"],
  setup(e, { emit: n }) {
    const t = e, o = n, r = O({
      get: () => t.modelValue.conditions,
      set: (c) => o("update:modelValue", { ...t.modelValue, conditions: c })
    }), a = O({
      get: () => t.modelValue.logicalOrOperator,
      set: (c) => o("update:modelValue", {
        ...t.modelValue,
        logicalOrOperator: c
      })
    });
    function l() {
      return {
        id: xo(),
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
        id: xo(),
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
      return E(), M("div", Gc, [
        T("div", Uc, [
          G(Wc, {
            modelValue: a.value,
            "onUpdate:modelValue": m[0] || (m[0] = (v) => a.value = v)
          }, null, 8, ["modelValue"]),
          c.isRoot ? te("", !0) : (E(), M("span", qc, [
            G(ot, {
              variant: "ghost",
              size: "sm",
              onClick: m[1] || (m[1] = (v) => c.$emit("remove")),
              class: "text-destructive hover:text-destructive/80"
            }, {
              default: q(() => [
                G(F(gi), { class: "size-4" })
              ]),
              _: 1
            })
          ]))
        ]),
        T("div", Kc, [
          (E(!0), M(we, null, Ke(r.value, (v, g) => (E(), he(Vc, {
            key: v.id,
            modelValue: r.value[g],
            "onUpdate:modelValue": (b) => r.value[g] = b,
            "available-fields": c.availableFields,
            "show-remove": r.value.length > 1,
            onRemove: (b) => s(g)
          }, null, 8, ["modelValue", "onUpdate:modelValue", "available-fields", "show-remove", "onRemove"]))), 128))
        ]),
        (p = c.modelValue.nestedGroups) != null && p.length ? (E(), M("div", Yc, [
          (E(!0), M(we, null, Ke(c.modelValue.nestedGroups, (v, g) => (E(), he(f, {
            key: v.id,
            modelValue: c.modelValue.nestedGroups[g],
            "onUpdate:modelValue": (b) => c.modelValue.nestedGroups[g] = b,
            "available-fields": c.availableFields,
            "is-root": !1,
            onRemove: (b) => d(g)
          }, null, 8, ["modelValue", "onUpdate:modelValue", "available-fields", "onRemove"]))), 128))
        ])) : te("", !0),
        T("div", Xc, [
          G(ot, {
            variant: "outline",
            size: "sm",
            onClick: i
          }, {
            default: q(() => m[2] || (m[2] = [
              zt("Add Condition")
            ])),
            _: 1,
            __: [2]
          }),
          G(ot, {
            variant: "outline",
            size: "sm",
            onClick: u
          }, {
            default: q(() => m[3] || (m[3] = [
              zt("Add Group")
            ])),
            _: 1,
            __: [3]
          })
        ])
      ]);
    };
  }
}), Qc = { class: "w-full" }, Af = /* @__PURE__ */ Y({
  __name: "FluentQueryBuilder",
  props: {
    modelValue: {},
    availableFields: {}
  },
  emits: ["update:modelValue"],
  setup(e, { expose: n, emit: t }) {
    const o = e, r = t, a = S(o.modelValue || l());
    le(
      a,
      (u) => {
        r("update:modelValue", [u]);
      },
      { deep: !0 }
    );
    function l() {
      return {
        id: xo(),
        conditions: [i()],
        nestedGroups: [],
        logicalOrOperator: !1
      };
    }
    function i() {
      return {
        id: xo(),
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
    }), (u, d) => (E(), M("div", Qc, [
      G(Jc, {
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
}), Zc = { class: "absolute top-0 left-0 invisible -z-10 flex flex-nowrap" }, ef = ["innerHTML"], tf = { class: "flex space-x-1 sm:space-x-1.5 md:space-x-2 lg:space-x-2.5 xl:space-x-3" }, nf = ["onClick", "data-active"], of = ["innerHTML"], rf = ["innerHTML"], af = 80, lf = /* @__PURE__ */ Y({
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
    const a = S(!1), l = S(), i = S(), s = S(), u = S([]), d = S(t.tabs.length), c = O(() => r.value.slice(0, d.value)), m = O(() => r.value.slice(d.value)), f = () => {
      if (!i.value || u.value.length === 0) {
        d.value = t.tabs.length;
        return;
      }
      const w = i.value.offsetWidth;
      let D = 0, C = !0;
      for (let $ = 0; $ < u.value.length; $++) {
        const B = u.value[$], W = $ > 0 ? p() : 0;
        if (D += B.offsetWidth + W, D > w) {
          C = !1;
          break;
        }
      }
      if (C) {
        d.value = t.tabs.length;
        return;
      }
      const _ = w - af;
      let K = 0;
      D = 0;
      for (let $ = 0; $ < u.value.length; $++) {
        const B = u.value[$], W = $ > 0 ? p() : 0;
        if (D + B.offsetWidth + W <= _)
          D += B.offsetWidth + W, K++;
        else
          break;
      }
      K === 0 && u.value.length > 0 && u.value[0].offsetWidth <= _ && (K = 1), d.value = K;
    }, p = () => {
      const w = window.innerWidth;
      return w < 640 ? 4 : w < 768 ? 6 : w < 1024 ? 8 : w < 1280 ? 10 : 12;
    };
    let v;
    const g = () => {
      clearTimeout(v), v = window.setTimeout(f, 150);
    };
    se(() => {
      Ue(f), window.addEventListener("resize", g);
    }), xe(() => {
      window.removeEventListener("resize", g), clearTimeout(v);
    }), le(
      () => t.tabs,
      (w) => {
        r.value = w, Ue(f);
      },
      { deep: !0 }
    );
    function b(w) {
      const D = r.value.findIndex(
        (_) => _.id === w
      );
      if (D < d.value && D !== -1) {
        o("clicked", w);
        return;
      }
      const C = r.value.splice(D, 1)[0];
      r.value.splice(d.value - 1, 0, C), o("update", r.value), o("clicked", w);
    }
    function y(w) {
      const D = [...c.value], C = D.splice(w.oldIndex, 1)[0];
      D.splice(w.newIndex, 0, C);
      const _ = [...D, ...m.value];
      r.value = _, o("update", r.value);
    }
    function h() {
      a.value = !0;
    }
    function k() {
      a.value = !1;
    }
    return (w, D) => (E(), M("div", {
      ref_key: "containerRef",
      ref: l,
      class: z(F(pe)("relative z-10 mx-auto", w.classes.container, w.theme.container))
    }, [
      T("div", Zc, [
        (E(!0), M(we, null, Ke(r.value, (C) => (E(), M("a", {
          key: `measure-${C.id}`,
          ref_for: !0,
          ref_key: "allTabRefs",
          ref: u,
          class: z(
            F(pe)(
              "pj-tab flex cursor-pointer items-center rounded-t-md px-2 py-1.5 text-sm leading-none font-medium transition-all duration-200 ease-in-out transform sm:px-3 sm:py-2 sm:text-base md:px-4 md:py-2.5 md:text-lg lg:px-5 lg:py-3",
              w.style === "classic" ? "px-3 py-2 border-x border-t text-sm leading-none font-medium transition-all duration-200 ease-in-out transform data-[active=false]:relative data-[active=false]:border-transparent data-[active=false]:hover:bg-primary/5 data-[active=true]:border-border data-[active=true]:bg-card sm:px-4 sm:py-2.5 sm:text-base md:px-6 md:py-3 md:text-lg lg:px-8 lg:py-4" : "flex cursor-pointer items-center border-0 px-3 py-2.5 text-sm leading-none font-medium transition-all duration-200 ease-in-out transform hover:no-underline data-[active=false]:relative data-[active=false]:text-foreground/50 data-[active=false]:hover:bg-primary/5 data-[active=false]:hover:text-foreground data-[active=false]:border-b-transparent data-[active=true]:bg-card data-[active=true]:border-b-3 data-[active=true]:border-b-accent sm:px-4 sm:py-3 sm:text-base md:px-6 md:py-3.5 md:text-lg lg:px-8 lg:py-4",
              C.classes || "",
              w.tabClasses,
              w.classes.tab,
              w.theme.tabsNavTab
            )
          )
        }, [
          X(w.$slots, "left", Qe({ ref_for: !0 }, C), void 0, !0),
          w.$slots.label ? te("", !0) : (E(), M("span", {
            key: 0,
            innerHTML: C.label
          }, null, 8, ef)),
          X(w.$slots, "label", Qe({ ref_for: !0 }, C), void 0, !0),
          X(w.$slots, "right", Qe({ ref_for: !0 }, C), void 0, !0)
        ], 2))), 128))
      ]),
      T("div", tf, [
        X(w.$slots, "before", {}, void 0, !0),
        T("div", {
          ref_key: "tabsContainerRef",
          ref: i,
          class: "flex-1 min-w-0"
        }, [
          (E(), he(F(vr), {
            list: c.value,
            key: "tabs-nav",
            "item-key": "id",
            tag: "div",
            class: z(
              F(pe)(
                "flex flex-wrap space-x-0.5 sm:space-x-1 md:space-x-1.5 lg:space-x-2",
                w.theme.sortableContainer
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
            item: q(({ element: C }) => [
              (E(), M("a", {
                key: C.id,
                href: "#",
                onClick: yn(
                  (_) => {
                    _.preventDefault(), w.$emit("clicked", C.id);
                  },
                  ["prevent"]
                ),
                class: z(
                  F(pe)(
                    "pj-tab flex cursor-pointer items-center rounded-t-md px-2 py-1.5 text-sm leading-none font-medium transition-all duration-200 ease-in-out transform sm:px-3 sm:py-2 sm:text-base md:px-4 md:py-2.5 md:text-lg lg:px-5 lg:py-3",
                    w.style === "classic" ? "px-3 py-2 border-x border-t text-sm leading-none font-medium transition-all duration-200 ease-in-out transform data-[active=false]:relative data-[active=false]:border-transparent data-[active=false]:hover:bg-primary/5 data-[active=true]:border-border data-[active=true]:bg-card sm:px-4 sm:py-2.5 sm:text-base md:px-6 md:py-3 md:text-lg lg:px-8 lg:py-4" : "flex cursor-pointer items-center border-0 px-3 py-2.5 text-sm leading-none font-medium transition-all duration-200 ease-in-out transform hover:no-underline data-[active=false]:relative data-[active=false]:text-foreground/50 data-[active=false]:hover:bg-primary/5 data-[active=false]:hover:text-foreground data-[active=false]:border-b-transparent data-[active=true]:bg-card data-[active=true]:border-b-3 data-[active=true]:border-b-accent sm:px-4 sm:py-3 sm:text-base md:px-6 md:py-3.5 md:text-lg lg:px-8 lg:py-4",
                    C.classes || "",
                    w.tabClasses,
                    w.classes.tab,
                    w.theme.tabsNavTab
                  )
                ),
                "data-active": ((C == null ? void 0 : C.active) ?? !1).toString()
              }, [
                X(w.$slots, "left", xt(jt(C)), void 0, !0),
                w.$slots.label ? te("", !0) : (E(), M("span", {
                  key: 0,
                  innerHTML: C.label
                }, null, 8, of)),
                X(w.$slots, "label", xt(jt(C)), void 0, !0),
                X(w.$slots, "right", xt(jt(C)), void 0, !0)
              ], 10, nf))
            ]),
            _: 3
          }, 8, ["list", "class"]))
        ], 512),
        m.value.length > 0 ? (E(), he(zu, {
          key: 0,
          class: "flex items-center"
        }, {
          default: q(() => [
            G(Hu, { "as-child": "" }, {
              default: q(() => [
                T("button", {
                  ref_key: "moreButtonRef",
                  ref: s,
                  class: z(
                    F(pe)(
                      "flex items-center justify-center rounded-t-md px-3 py-1.5 text-sm font-medium transition-all duration-200 ease-in-out transform border border-border bg-card hover:bg-accent hover:text-accent-foreground sm:px-4 sm:py-2 md:px-5 md:py-2.5"
                    )
                  ),
                  "aria-label": "More tabs"
                }, [
                  D[0] || (D[0] = T("span", { class: "hidden sm:inline" }, "More", -1)),
                  D[1] || (D[1] = T("span", { class: "sm:hidden" }, "⋯", -1)),
                  G(F(hr), { class: "ml-1 h-4 w-4 transition-transform duration-200" })
                ], 2)
              ]),
              _: 1
            }),
            G(Wu, {
              align: "end",
              "side-offset": 8,
              class: "min-w-[8rem]"
            }, {
              default: q(() => [
                (E(!0), M(we, null, Ke(m.value, (C) => (E(), he(Gu, {
                  key: C.id,
                  onClick: (_) => b(C.id),
                  class: z(
                    F(pe)(
                      "flex items-center",
                      C.active ? "bg-accent text-accent-foreground" : ""
                    )
                  )
                }, {
                  default: q(() => [
                    X(w.$slots, "left", Qe({ ref_for: !0 }, C), void 0, !0),
                    w.$slots.label ? te("", !0) : (E(), M("span", {
                      key: 0,
                      innerHTML: C.label
                    }, null, 8, rf)),
                    X(w.$slots, "label", Qe({ ref_for: !0 }, C), void 0, !0),
                    X(w.$slots, "right", Qe({ ref_for: !0 }, C), void 0, !0)
                  ]),
                  _: 2
                }, 1032, ["onClick", "class"]))), 128))
              ]),
              _: 3
            })
          ]),
          _: 3
        })) : te("", !0),
        X(w.$slots, "after", {}, void 0, !0)
      ]),
      (E(), M("hr", {
        key: 0,
        class: z(F(pe)("border-t", w.theme.tabsNavLine))
      }, null, 2))
    ], 2));
  }
}), Mf = /* @__PURE__ */ Oo(lf, [["__scopeId", "data-v-bcaafe01"]]);
function Lf() {
  const e = S("Cancel"), n = S("Confirm"), t = S(""), o = S(""), r = S(""), a = S(!1), l = S(""), i = S(() => {
    console.warn("Cancel callback not set"), a.value = !1;
  }), s = S(() => {
    console.warn("Confirm callback not set"), a.value = !1;
  });
  function u(c, m, f, p, v = "Confirm", g = "Cancel", b = "") {
    l.value = c, o.value = m, n.value = v, e.value = g, t.value = b, s.value = f || (async () => {
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
function sf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var uo = { exports: {} };
/*! algoliasearch-lite.umd.js | 4.25.0 | © Algolia, inc. | https://github.com/algolia/algoliasearch-client-javascript */
var uf = uo.exports, xa;
function df() {
  return xa || (xa = 1, function(e, n) {
    (function(t, o) {
      e.exports = o();
    })(uf, function() {
      function t(P, R, A) {
        return R in P ? Object.defineProperty(P, R, { value: A, enumerable: !0, configurable: !0, writable: !0 }) : P[R] = A, P;
      }
      function o(P, R) {
        var A = Object.keys(P);
        if (Object.getOwnPropertySymbols) {
          var N = Object.getOwnPropertySymbols(P);
          R && (N = N.filter(function(H) {
            return Object.getOwnPropertyDescriptor(P, H).enumerable;
          })), A.push.apply(A, N);
        }
        return A;
      }
      function r(P) {
        for (var R = 1; R < arguments.length; R++) {
          var A = arguments[R] != null ? arguments[R] : {};
          R % 2 ? o(Object(A), !0).forEach(function(N) {
            t(P, N, A[N]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(P, Object.getOwnPropertyDescriptors(A)) : o(Object(A)).forEach(function(N) {
            Object.defineProperty(P, N, Object.getOwnPropertyDescriptor(A, N));
          });
        }
        return P;
      }
      function a(P, R) {
        if (P == null) return {};
        var A, N, H = function(ae, J) {
          if (ae == null) return {};
          var me, Oe, be = {}, Ve = Object.keys(ae);
          for (Oe = 0; Oe < Ve.length; Oe++) me = Ve[Oe], J.indexOf(me) >= 0 || (be[me] = ae[me]);
          return be;
        }(P, R);
        if (Object.getOwnPropertySymbols) {
          var ee = Object.getOwnPropertySymbols(P);
          for (N = 0; N < ee.length; N++) A = ee[N], R.indexOf(A) >= 0 || Object.prototype.propertyIsEnumerable.call(P, A) && (H[A] = P[A]);
        }
        return H;
      }
      function l(P, R) {
        return function(A) {
          if (Array.isArray(A)) return A;
        }(P) || function(A, N) {
          if (Symbol.iterator in Object(A) || Object.prototype.toString.call(A) === "[object Arguments]") {
            var H = [], ee = !0, ae = !1, J = void 0;
            try {
              for (var me, Oe = A[Symbol.iterator](); !(ee = (me = Oe.next()).done) && (H.push(me.value), !N || H.length !== N); ee = !0) ;
            } catch (be) {
              ae = !0, J = be;
            } finally {
              try {
                ee || Oe.return == null || Oe.return();
              } finally {
                if (ae) throw J;
              }
            }
            return H;
          }
        }(P, R) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }();
      }
      function i(P) {
        return function(R) {
          if (Array.isArray(R)) {
            for (var A = 0, N = new Array(R.length); A < R.length; A++) N[A] = R[A];
            return N;
          }
        }(P) || function(R) {
          if (Symbol.iterator in Object(R) || Object.prototype.toString.call(R) === "[object Arguments]") return Array.from(R);
        }(P) || function() {
          throw new TypeError("Invalid attempt to spread non-iterable instance");
        }();
      }
      function s(P) {
        var R, A = "algoliasearch-client-js-".concat(P.key), N = function() {
          return R === void 0 && (R = P.localStorage || window.localStorage), R;
        }, H = function() {
          return JSON.parse(N().getItem(A) || "{}");
        }, ee = function(J) {
          N().setItem(A, JSON.stringify(J));
        }, ae = function() {
          var J = P.timeToLive ? 1e3 * P.timeToLive : null, me = H(), Oe = Object.fromEntries(Object.entries(me).filter(function(Ve) {
            return l(Ve, 2)[1].timestamp !== void 0;
          }));
          if (ee(Oe), J) {
            var be = Object.fromEntries(Object.entries(Oe).filter(function(Ve) {
              var Ie = l(Ve, 2)[1], Xe = (/* @__PURE__ */ new Date()).getTime();
              return !(Ie.timestamp + J < Xe);
            }));
            ee(be);
          }
        };
        return { get: function(J, me) {
          var Oe = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : { miss: function() {
            return Promise.resolve();
          } };
          return Promise.resolve().then(function() {
            ae();
            var be = JSON.stringify(J);
            return H()[be];
          }).then(function(be) {
            return Promise.all([be ? be.value : me(), be !== void 0]);
          }).then(function(be) {
            var Ve = l(be, 2), Ie = Ve[0], Xe = Ve[1];
            return Promise.all([Ie, Xe || Oe.miss(Ie)]);
          }).then(function(be) {
            return l(be, 1)[0];
          });
        }, set: function(J, me) {
          return Promise.resolve().then(function() {
            var Oe = H();
            return Oe[JSON.stringify(J)] = { timestamp: (/* @__PURE__ */ new Date()).getTime(), value: me }, N().setItem(A, JSON.stringify(Oe)), me;
          });
        }, delete: function(J) {
          return Promise.resolve().then(function() {
            var me = H();
            delete me[JSON.stringify(J)], N().setItem(A, JSON.stringify(me));
          });
        }, clear: function() {
          return Promise.resolve().then(function() {
            N().removeItem(A);
          });
        } };
      }
      function u(P) {
        var R = i(P.caches), A = R.shift();
        return A === void 0 ? { get: function(N, H) {
          var ee = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : { miss: function() {
            return Promise.resolve();
          } }, ae = H();
          return ae.then(function(J) {
            return Promise.all([J, ee.miss(J)]);
          }).then(function(J) {
            return l(J, 1)[0];
          });
        }, set: function(N, H) {
          return Promise.resolve(H);
        }, delete: function(N) {
          return Promise.resolve();
        }, clear: function() {
          return Promise.resolve();
        } } : { get: function(N, H) {
          var ee = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : { miss: function() {
            return Promise.resolve();
          } };
          return A.get(N, H, ee).catch(function() {
            return u({ caches: R }).get(N, H, ee);
          });
        }, set: function(N, H) {
          return A.set(N, H).catch(function() {
            return u({ caches: R }).set(N, H);
          });
        }, delete: function(N) {
          return A.delete(N).catch(function() {
            return u({ caches: R }).delete(N);
          });
        }, clear: function() {
          return A.clear().catch(function() {
            return u({ caches: R }).clear();
          });
        } };
      }
      function d() {
        var P = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { serializable: !0 }, R = {};
        return { get: function(A, N) {
          var H = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : { miss: function() {
            return Promise.resolve();
          } }, ee = JSON.stringify(A);
          if (ee in R) return Promise.resolve(P.serializable ? JSON.parse(R[ee]) : R[ee]);
          var ae = N(), J = H && H.miss || function() {
            return Promise.resolve();
          };
          return ae.then(function(me) {
            return J(me);
          }).then(function() {
            return ae;
          });
        }, set: function(A, N) {
          return R[JSON.stringify(A)] = P.serializable ? JSON.stringify(N) : N, Promise.resolve(N);
        }, delete: function(A) {
          return delete R[JSON.stringify(A)], Promise.resolve();
        }, clear: function() {
          return R = {}, Promise.resolve();
        } };
      }
      function c(P) {
        for (var R = P.length - 1; R > 0; R--) {
          var A = Math.floor(Math.random() * (R + 1)), N = P[R];
          P[R] = P[A], P[A] = N;
        }
        return P;
      }
      function m(P, R) {
        return R && Object.keys(R).forEach(function(A) {
          P[A] = R[A](P);
        }), P;
      }
      function f(P) {
        for (var R = arguments.length, A = new Array(R > 1 ? R - 1 : 0), N = 1; N < R; N++) A[N - 1] = arguments[N];
        var H = 0;
        return P.replace(/%s/g, function() {
          return encodeURIComponent(A[H++]);
        });
      }
      var p = { WithinQueryParameters: 0, WithinHeaders: 1 };
      function v(P, R) {
        var A = P || {}, N = A.data || {};
        return Object.keys(A).forEach(function(H) {
          ["timeout", "headers", "queryParameters", "data", "cacheable"].indexOf(H) === -1 && (N[H] = A[H]);
        }), { data: Object.entries(N).length > 0 ? N : void 0, timeout: A.timeout || R, headers: A.headers || {}, queryParameters: A.queryParameters || {}, cacheable: A.cacheable };
      }
      var g = { Read: 1, Write: 2, Any: 3 }, b = 1, y = 2, h = 3;
      function k(P) {
        var R = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : b;
        return r(r({}, P), {}, { status: R, lastUpdate: Date.now() });
      }
      function w(P) {
        return typeof P == "string" ? { protocol: "https", url: P, accept: g.Any } : { protocol: P.protocol || "https", url: P.url, accept: P.accept || g.Any };
      }
      var D = "GET", C = "POST";
      function _(P, R) {
        return Promise.all(R.map(function(A) {
          return P.get(A, function() {
            return Promise.resolve(k(A));
          });
        })).then(function(A) {
          var N = A.filter(function(ae) {
            return function(J) {
              return J.status === b || Date.now() - J.lastUpdate > 12e4;
            }(ae);
          }), H = A.filter(function(ae) {
            return function(J) {
              return J.status === h && Date.now() - J.lastUpdate <= 12e4;
            }(ae);
          }), ee = [].concat(i(N), i(H));
          return { getTimeout: function(ae, J) {
            return (H.length === 0 && ae === 0 ? 1 : H.length + 3 + ae) * J;
          }, statelessHosts: ee.length > 0 ? ee.map(function(ae) {
            return w(ae);
          }) : R };
        });
      }
      function K(P, R, A, N) {
        var H = [], ee = function(Ie, Xe) {
          if (!(Ie.method === D || Ie.data === void 0 && Xe.data === void 0)) {
            var ke = Array.isArray(Ie.data) ? Ie.data : r(r({}, Ie.data), Xe.data);
            return JSON.stringify(ke);
          }
        }(A, N), ae = function(Ie, Xe) {
          var ke = r(r({}, Ie.headers), Xe.headers), We = {};
          return Object.keys(ke).forEach(function(Dt) {
            var dt = ke[Dt];
            We[Dt.toLowerCase()] = dt;
          }), We;
        }(P, N), J = A.method, me = A.method !== D ? {} : r(r({}, A.data), N.data), Oe = r(r(r({ "x-algolia-agent": P.userAgent.value }, P.queryParameters), me), N.queryParameters), be = 0, Ve = function Ie(Xe, ke) {
          var We = Xe.pop();
          if (We === void 0) throw { name: "RetryError", message: "Unreachable hosts - your application id may be incorrect. If the error persists, please reach out to the Algolia Support team: https://alg.li/support .", transporterStackTrace: x(H) };
          var Dt = { data: ee, headers: ae, method: J, url: B(We, A.path, Oe), connectTimeout: ke(be, P.timeouts.connect), responseTimeout: ke(be, N.timeout) }, dt = function(Fe) {
            var ye = { request: Dt, response: Fe, host: We, triesLeft: Xe.length };
            return H.push(ye), ye;
          }, Kn = { onSuccess: function(Fe) {
            return function(ye) {
              try {
                return JSON.parse(ye.content);
              } catch (yt) {
                throw /* @__PURE__ */ function(Mt, un) {
                  return { name: "DeserializationError", message: Mt, response: un };
                }(yt.message, ye);
              }
            }(Fe);
          }, onRetry: function(Fe) {
            var ye = dt(Fe);
            return Fe.isTimedOut && be++, Promise.all([P.logger.info("Retryable failure", I(ye)), P.hostsCache.set(We, k(We, Fe.isTimedOut ? h : y))]).then(function() {
              return Ie(Xe, ke);
            });
          }, onFail: function(Fe) {
            throw dt(Fe), function(ye, yt) {
              var Mt = ye.content, un = ye.status, Dn = Mt;
              try {
                Dn = JSON.parse(Mt).message;
              } catch {
              }
              return /* @__PURE__ */ function(Yn, Lo, jl) {
                return { name: "ApiError", message: Yn, status: Lo, transporterStackTrace: jl };
              }(Dn, un, yt);
            }(Fe, x(H));
          } };
          return P.requester.send(Dt).then(function(Fe) {
            return function(ye, yt) {
              return function(Mt) {
                var un = Mt.status;
                return Mt.isTimedOut || function(Dn) {
                  var Yn = Dn.isTimedOut, Lo = Dn.status;
                  return !Yn && ~~Lo == 0;
                }(Mt) || ~~(un / 100) != 2 && ~~(un / 100) != 4;
              }(ye) ? yt.onRetry(ye) : ~~(ye.status / 100) == 2 ? yt.onSuccess(ye) : yt.onFail(ye);
            }(Fe, Kn);
          });
        };
        return _(P.hostsCache, R).then(function(Ie) {
          return Ve(i(Ie.statelessHosts).reverse(), Ie.getTimeout);
        });
      }
      function $(P) {
        var R = { value: "Algolia for JavaScript (".concat(P, ")"), add: function(A) {
          var N = "; ".concat(A.segment).concat(A.version !== void 0 ? " (".concat(A.version, ")") : "");
          return R.value.indexOf(N) === -1 && (R.value = "".concat(R.value).concat(N)), R;
        } };
        return R;
      }
      function B(P, R, A) {
        var N = W(A), H = "".concat(P.protocol, "://").concat(P.url, "/").concat(R.charAt(0) === "/" ? R.substr(1) : R);
        return N.length && (H += "?".concat(N)), H;
      }
      function W(P) {
        return Object.keys(P).map(function(R) {
          return f("%s=%s", R, (A = P[R], Object.prototype.toString.call(A) === "[object Object]" || Object.prototype.toString.call(A) === "[object Array]" ? JSON.stringify(P[R]) : P[R]));
          var A;
        }).join("&");
      }
      function x(P) {
        return P.map(function(R) {
          return I(R);
        });
      }
      function I(P) {
        var R = P.request.headers["x-algolia-api-key"] ? { "x-algolia-api-key": "*****" } : {};
        return r(r({}, P), {}, { request: r(r({}, P.request), {}, { headers: r(r({}, P.request.headers), R) }) });
      }
      var L = function(P) {
        var R = P.appId, A = /* @__PURE__ */ function(H, ee, ae) {
          var J = { "x-algolia-api-key": ae, "x-algolia-application-id": ee };
          return { headers: function() {
            return H === p.WithinHeaders ? J : {};
          }, queryParameters: function() {
            return H === p.WithinQueryParameters ? J : {};
          } };
        }(P.authMode !== void 0 ? P.authMode : p.WithinHeaders, R, P.apiKey), N = function(H) {
          var ee = H.hostsCache, ae = H.logger, J = H.requester, me = H.requestsCache, Oe = H.responsesCache, be = H.timeouts, Ve = H.userAgent, Ie = H.hosts, Xe = H.queryParameters, ke = { hostsCache: ee, logger: ae, requester: J, requestsCache: me, responsesCache: Oe, timeouts: be, userAgent: Ve, headers: H.headers, queryParameters: Xe, hosts: Ie.map(function(We) {
            return w(We);
          }), read: function(We, Dt) {
            var dt = v(Dt, ke.timeouts.read), Kn = function() {
              return K(ke, ke.hosts.filter(function(ye) {
                return (ye.accept & g.Read) != 0;
              }), We, dt);
            };
            if ((dt.cacheable !== void 0 ? dt.cacheable : We.cacheable) !== !0) return Kn();
            var Fe = { request: We, mappedRequestOptions: dt, transporter: { queryParameters: ke.queryParameters, headers: ke.headers } };
            return ke.responsesCache.get(Fe, function() {
              return ke.requestsCache.get(Fe, function() {
                return ke.requestsCache.set(Fe, Kn()).then(function(ye) {
                  return Promise.all([ke.requestsCache.delete(Fe), ye]);
                }, function(ye) {
                  return Promise.all([ke.requestsCache.delete(Fe), Promise.reject(ye)]);
                }).then(function(ye) {
                  var yt = l(ye, 2);
                  return yt[0], yt[1];
                });
              });
            }, { miss: function(ye) {
              return ke.responsesCache.set(Fe, ye);
            } });
          }, write: function(We, Dt) {
            return K(ke, ke.hosts.filter(function(dt) {
              return (dt.accept & g.Write) != 0;
            }), We, v(Dt, ke.timeouts.write));
          } };
          return ke;
        }(r(r({ hosts: [{ url: "".concat(R, "-dsn.algolia.net"), accept: g.Read }, { url: "".concat(R, ".algolia.net"), accept: g.Write }].concat(c([{ url: "".concat(R, "-1.algolianet.com") }, { url: "".concat(R, "-2.algolianet.com") }, { url: "".concat(R, "-3.algolianet.com") }])) }, P), {}, { headers: r(r(r({}, A.headers()), { "content-type": "application/x-www-form-urlencoded" }), P.headers), queryParameters: r(r({}, A.queryParameters()), P.queryParameters) }));
        return m({ transporter: N, appId: R, addAlgoliaAgent: function(H, ee) {
          N.userAgent.add({ segment: H, version: ee });
        }, clearCache: function() {
          return Promise.all([N.requestsCache.clear(), N.responsesCache.clear()]).then(function() {
          });
        } }, P.methods);
      }, U = function(P) {
        return function(R, A) {
          return R.method === D ? P.transporter.read(R, A) : P.transporter.write(R, A);
        };
      }, oe = function(P) {
        return function(R) {
          var A = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, N = { transporter: P.transporter, appId: P.appId, indexName: R };
          return m(N, A.methods);
        };
      }, ce = function(P) {
        return function(R, A) {
          var N = R.map(function(H) {
            return r(r({}, H), {}, { params: W(H.params || {}) });
          });
          return P.transporter.read({ method: C, path: "1/indexes/*/queries", data: { requests: N }, cacheable: !0 }, A);
        };
      }, re = function(P) {
        return function(R, A) {
          return Promise.all(R.map(function(N) {
            var H = N.params, ee = H.facetName, ae = H.facetQuery, J = a(H, ["facetName", "facetQuery"]);
            return oe(P)(N.indexName, { methods: { searchForFacetValues: Ne } }).searchForFacetValues(ee, ae, r(r({}, A), J));
          }));
        };
      }, Ce = function(P) {
        return function(R, A, N) {
          return P.transporter.read({ method: C, path: f("1/answers/%s/prediction", P.indexName), data: { query: R, queryLanguages: A }, cacheable: !0 }, N);
        };
      }, He = function(P) {
        return function(R, A) {
          return P.transporter.read({ method: C, path: f("1/indexes/%s/query", P.indexName), data: { query: R }, cacheable: !0 }, A);
        };
      }, Ne = function(P) {
        return function(R, A, N) {
          return P.transporter.read({ method: C, path: f("1/indexes/%s/facets/%s/query", P.indexName, R), data: { facetQuery: A }, cacheable: !0 }, N);
        };
      }, Kt = 1, bt = 2, Vl = 3, Bl = function(P) {
        return function(R, A) {
          var N = R.map(function(H) {
            return r(r({}, H), {}, { threshold: H.threshold || 0 });
          });
          return P.transporter.read({ method: C, path: "1/indexes/*/recommendations", data: { requests: N }, cacheable: !0 }, A);
        };
      };
      function Gr(P, R, A) {
        var N, H = { appId: P, apiKey: R, timeouts: { connect: 1, read: 2, write: 30 }, requester: { send: function(ee) {
          return new Promise(function(ae) {
            var J = new XMLHttpRequest();
            J.open(ee.method, ee.url, !0), Object.keys(ee.headers).forEach(function(Ve) {
              return J.setRequestHeader(Ve, ee.headers[Ve]);
            });
            var me, Oe = function(Ve, Ie) {
              return setTimeout(function() {
                J.abort(), ae({ status: 0, content: Ie, isTimedOut: !0 });
              }, 1e3 * Ve);
            }, be = Oe(ee.connectTimeout, "Connection timeout");
            J.onreadystatechange = function() {
              J.readyState > J.OPENED && me === void 0 && (clearTimeout(be), me = Oe(ee.responseTimeout, "Socket timeout"));
            }, J.onerror = function() {
              J.status === 0 && (clearTimeout(be), clearTimeout(me), ae({ content: J.responseText || "Network request failed", status: J.status, isTimedOut: !1 }));
            }, J.onload = function() {
              clearTimeout(be), clearTimeout(me), ae({ content: J.responseText, status: J.status, isTimedOut: !1 });
            }, J.send(ee.data);
          });
        } }, logger: (N = Vl, { debug: function(ee, ae) {
          return Kt >= N && console.debug(ee, ae), Promise.resolve();
        }, info: function(ee, ae) {
          return bt >= N && console.info(ee, ae), Promise.resolve();
        }, error: function(ee, ae) {
          return console.error(ee, ae), Promise.resolve();
        } }), responsesCache: d(), requestsCache: d({ serializable: !1 }), hostsCache: u({ caches: [s({ key: "".concat("4.25.0", "-").concat(P) }), d()] }), userAgent: $("4.25.0").add({ segment: "Browser", version: "lite" }), authMode: p.WithinQueryParameters };
        return L(r(r(r({}, H), A), {}, { methods: { search: ce, searchForFacetValues: re, multipleQueries: ce, multipleSearchForFacetValues: re, customRequest: U, initIndex: function(ee) {
          return function(ae) {
            return oe(ee)(ae, { methods: { search: He, searchForFacetValues: Ne, findAnswers: Ce } });
          };
        }, getRecommendations: Bl } }));
      }
      return Gr.version = "4.25.0", Gr;
    });
  }(uo)), uo.exports;
}
var cf = /* @__PURE__ */ df();
const ff = /* @__PURE__ */ sf(cf);
class Ff {
  constructor(n) {
    Fo(this, "searchIndex");
    const t = ff(n.appId, n.searchKey);
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
class Nf {
  constructor(n) {
    Fo(this, "items");
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
  gf as Alert,
  Ff as AlgoliaSearchStrategy,
  Pf as AnnouncementsDrawer,
  oi as Badge,
  ot as Button,
  bf as CodeBlock,
  Bu as ColorPicker,
  $f as ColumnManager,
  Wo as Combobox,
  If as CommandPalette,
  Rf as ConfirmationDialog,
  zu as Dropdown,
  Wu as DropdownContent,
  Gu as DropdownItem,
  wf as DropdownLabel,
  xf as DropdownSeparator,
  kf as DropdownSub,
  Sf as DropdownSubContent,
  Cf as DropdownSubTrigger,
  Hu as DropdownTrigger,
  Go as EmptyState,
  Af as FluentQueryBuilder,
  Da as Input,
  Nf as LocalSearchStrategy,
  Of as Modal,
  nd as Popover,
  Mf as TabsNav,
  _f as ThemeToggle,
  Ef as Tooltip,
  Df as TooltipContent,
  Tf as TooltipTrigger,
  Cl as Typeahead,
  Lf as useConfirmationDialog
};
//# sourceMappingURL=pickle-jar-ui.es.js.map
