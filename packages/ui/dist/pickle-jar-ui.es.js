var tl = Object.defineProperty;
var ol = (e, n, t) => n in e ? tl(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var Io = (e, n, t) => ol(e, typeof n != "symbol" ? n + "" : n, t);
import { defineComponent as L, computed as _, provide as me, createElementBlock as D, openBlock as C, normalizeClass as N, renderSlot as V, createElementVNode as I, createBlock as ue, withCtx as W, createCommentVNode as ae, inject as se, ref as x, resolveDynamicComponent as Xo, unref as R, h as le, watch as oe, onMounted as ne, useSlots as Wn, Fragment as we, toDisplayString as de, onUnmounted as ve, createTextVNode as Je, renderList as Ue, shallowRef as xo, getCurrentScope as nl, onScopeDispose as qn, shallowReadonly as Mt, triggerRef as _n, watchEffect as Ie, cloneVNode as Kn, nextTick as Ve, toRaw as bt, reactive as eo, getCurrentInstance as Yn, Teleport as to, createVNode as U, withModifiers as Ft, withKeys as Jn, Transition as We, normalizeStyle as ot, mergeProps as yt, normalizeProps as Ct, withDirectives as wt, vShow as kt, guardReactiveProps as zt, createSlots as rl, readonly as mt, toRef as $n, resolveComponent as ll } from "vue";
import De from "clsx";
import { twMerge as Re } from "tailwind-merge";
const al = /* @__PURE__ */ L({
  __name: "AlertRoot",
  props: {
    flush: { type: Boolean, default: !1 },
    variant: { default: "info" },
    theme: { default: () => ({
      alert: ""
    }) }
  },
  setup(e) {
    function n(...a) {
      return Re(De(a));
    }
    const t = e, r = _(() => ({
      "bg-sky-50": t.variant === "info" || t.variant === "processing",
      "bg-yellow-50": t.variant === "warning",
      "bg-red-50": t.variant === "error",
      "bg-green-50": t.variant === "success",
      "bg-zinc-50": t.variant === "muted"
    })), o = _(() => ({
      "border-sky-200": t.variant === "info" || t.variant === "processing",
      "border-yellow-200": t.variant === "warning",
      "border-red-200": t.variant === "error",
      "border-green-200": t.variant === "success",
      "border-zinc-200": t.variant === "muted"
    })), l = _(() => ({
      "text-sky-800": t.variant === "info" || t.variant === "processing",
      "text-yellow-800": t.variant === "warning",
      "text-red-800": t.variant === "error",
      "text-green-800": t.variant === "success",
      "text-zinc-800": t.variant === "muted"
    }));
    return me("alert-context", {
      variant: t.variant,
      bgClasses: r.value,
      borderClasses: o.value,
      colorClass: l.value
    }), (a, s) => (C(), D("div", {
      class: N(
        n(
          a.flush ? "rounded-0" : "rounded-md",
          "relative w-full rounded-lg border border-ring px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current bg-card text-card-foreground",
          a.theme.alert
        )
      )
    }, [
      V(a.$slots, "default")
    ], 2));
  }
}), sl = /* @__PURE__ */ L({
  __name: "AlertClose",
  emits: ["close"],
  setup(e, { emit: n }) {
    return (t, r) => (C(), D("button", {
      onClick: r[0] || (r[0] = (o) => t.$emit("close", !1)),
      class: "absolute right-4 top-4 text-zinc-400 hover:text-zinc-800"
    }, r[1] || (r[1] = [
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
}), $d = /* @__PURE__ */ L({
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
    const t = n;
    return (r, o) => (C(), ue(al, {
      flush: r.flush,
      variant: r.variant,
      theme: r.theme
    }, {
      default: W(() => [
        V(r.$slots, "default"),
        r.dismissable ? (C(), ue(sl, {
          key: 0,
          onClose: o[0] || (o[0] = (l) => t("close", l))
        })) : ae("", !0)
      ]),
      _: 3
    }, 8, ["flush", "variant", "theme"]));
  }
}), il = { class: "flex items-center" }, Od = /* @__PURE__ */ L({
  __name: "AlertAction",
  setup(e) {
    return (n, t) => (C(), D("div", il, [
      V(n.$slots, "default")
    ]));
  }
}), ul = { class: "text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed" }, Sd = /* @__PURE__ */ L({
  __name: "AlertDescription",
  setup(e) {
    return (n, t) => (C(), D("div", ul, [
      V(n.$slots, "default")
    ]));
  }
}), cl = { class: "shrink-0" }, Td = /* @__PURE__ */ L({
  __name: "AlertIcon",
  setup(e) {
    return (n, t) => (C(), D("div", cl, [
      V(n.$slots, "default")
    ]));
  }
}), dl = { class: "col-start-2 line-clamp-1 min-h-4 font-medium" }, Ed = /* @__PURE__ */ L({
  __name: "AlertTitle",
  setup(e) {
    return (n, t) => (C(), D("div", dl, [
      V(n.$slots, "default")
    ]));
  }
}), fl = /* @__PURE__ */ L({
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
      return Re(De(t));
    }
    return (t, r) => (C(), D("span", {
      class: N(
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
      V(t.$slots, "default")
    ], 2));
  }
});
function pl(e, n) {
  const t = this;
  let r;
  return function(...o) {
    clearTimeout(r), r = setTimeout(() => {
      e.apply(t, o);
    }, n);
  };
}
function xe(...e) {
  return Re(De(e));
}
function Ro(...e) {
  return e.join(" ");
}
Ro(
  "relative rounded-lg border border-border rounded-md hover:bg-accent/50 shadow-xs focus-within:outline-none focus-within:ring-3 focus-within:ring-ring/40 transition-[box-shadow,color] flex items-start flex-wrap gap-1 p-1 flex-1 min-w-[120px] border-0 bg-transparent pl-2.5 py-0.5 pr-8 text-sm truncate ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50 absolute inset-y-0 right-0 items-center pr-2 text-muted-foreground size-4 text-inherit transition duration-200 ease-out translate-y-1 opacity-0 translate-y-0 opacity-100 duration-150 ease-in fixed left-0 z-10 overflow-x-hidden overflow-y-auto bg-popover p-3 text-base shadow-lg border focus:outline-hidden sm:text-sm border-t border-border px-2 first:border-t-0 py-2 first:pt-0 last:pb-0 font-medium -mx-2.5 cursor-pointer hover:bg-accent rounded-md px-2 py-1 flex w-full truncate bg-accent opacity-50 pointer-events-none"
), Ro(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 bg-destructive text-destructive-foreground hover:bg-destructive/90 border border-border bg-background hover:bg-accent hover:text-accent-foreground bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:bg-accent hover:text-accent-foreground text-primary underline-offset-4 hover:underline"
), Ro(
  "w-full overflow-hidden h-full border border-border bg-background rounded-lg sm:min-w-60 flex flex-col md:flex-row overflow-y-auto p-3 mb-4 last:mb-0 sortable-drag flex min-w-px grow items-center space-x-2 text-base font-semibold shrink-0 text-sm h-5 w-5 group flex w-full hover:bg-accent/50 rounded-md items-center gap-2 [&.selected]:bg-accent/50 drag-handle shrink-0 text-muted-foreground/70 hover:text-foreground rounded-sm hover:bg-black/5 size-3.5 ml-auto flex items-center space-x-1 p-1 size-4 sticky bottom-0 z-2 gap-2 p-3 bg-background/90 backdrop-blur-sm flex -space-x-px transition duration-200 ease-out translate-y-1 opacity-0 translate-y-0 opacity-100 duration-150 ease-in"
);
const ml = {
  key: 0,
  "aria-hidden": "true"
}, vl = { key: 0 }, gl = /* @__PURE__ */ L({
  __name: "Button",
  props: {
    variant: { default: "default" },
    size: { default: "default" },
    disabled: { type: Boolean, default: !1 },
    processing: { type: Boolean, default: !1 },
    round: { type: Boolean, default: !1 },
    to: {},
    theme: { default: () => ({
      button: "",
      buttonDisabled: "",
      buttonIcon: ""
    }) },
    icon: { type: Boolean }
  },
  emits: ["click"],
  setup(e, { emit: n }) {
    const t = n, r = se("dropdown"), o = x(), l = _(() => {
      var c, d, m, f;
      return (c = r == null ? void 0 : r.triggerRef) == null || c.value, ((m = (d = r == null ? void 0 : r.triggerRef) == null ? void 0 : d.value) == null ? void 0 : m.querySelector("button")) === o.value && ((f = r == null ? void 0 : r.isOpen) == null ? void 0 : f.value) === !0;
    }), a = e, s = _(() => !!a.to && !a.disabled);
    function i(u) {
      s.value || (u.preventDefault(), t("click", u));
    }
    return (u, c) => (C(), ue(Xo(s.value ? "RouterLink" : "button"), {
      ref_key: "buttonRef",
      ref: o,
      onClick: i,
      to: s.value ? u.to : void 0,
      class: N(
        R(xe)(
          "inline-flex items-center cursor-pointer justify-center whitespace-nowrap text-sm ring-offset-background focus:outline-none focus:ring-3 focus:ring-ring/40 transition-[box-shadow,color] disabled:pointer-events-none disabled:opacity-50 gap-1.5",
          // Svg styles
          "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0",
          // Border radius - round prop overrides default rounded-md
          u.round ? "rounded-full" : "rounded-md",
          // Variant styles
          u.variant === "default" && "bg-primary text-primary-foreground hover:bg-primary/90",
          u.variant === "destructive" && "bg-destructive text-destructive-foreground hover:bg-destructive/90",
          u.variant === "outline" && "border border-ring bg-background hover:bg-accent hover:text-accent-foreground",
          u.variant === "secondary" && "bg-secondary text-secondary-foreground hover:bg-secondary/80",
          u.variant === "ghost" && "hover:bg-accent hover:text-accent-foreground",
          u.variant === "link" && "text-primary underline-offset-4 hover:underline",
          // Size styles
          u.size === "default" && "px-4 py-2",
          u.size === "lg" && "px-5 py-2 text-lg",
          u.size === "sm" && "px-3 py-1.5",
          u.size === "xs" && "px-2 py-1",
          u.size === "icon" && "size-9",
          l.value && "outline-none ring-3 ring-ring",
          u.theme.button
        )
      ),
      "aria-disabled": u.disabled,
      "aria-busy": u.processing,
      "aria-expanded": l.value,
      disabled: u.disabled
    }, {
      default: W(() => [
        V(u.$slots, "default", {}, void 0, !0),
        u.processing ? (C(), D("span", ml, [
          u.$slots.processing ? (C(), D("span", vl, [
            V(u.$slots, "processing", {}, void 0, !0)
          ])) : ae("", !0)
        ])) : ae("", !0)
      ]),
      _: 3
    }, 8, ["to", "class", "aria-disabled", "aria-busy", "aria-expanded", "disabled"]));
  }
}), Oe = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [r, o] of n)
    t[r] = o;
  return t;
}, Ge = /* @__PURE__ */ Oe(gl, [["__scopeId", "data-v-a33d1779"]]), hl = {}, bl = { class: "rounded-lg border border-border bg-card text-card-foreground shadow-sm" };
function yl(e, n) {
  return C(), D("div", bl, [
    V(e.$slots, "default")
  ]);
}
const Dd = /* @__PURE__ */ Oe(hl, [["render", yl]]), xl = {}, wl = { class: "p-6 pt-0" };
function kl(e, n) {
  return C(), D("div", wl, [
    V(e.$slots, "default")
  ]);
}
const Pd = /* @__PURE__ */ Oe(xl, [["render", kl]]), Cl = {}, _l = { class: "text-sm text-muted-foreground" };
function $l(e, n) {
  return C(), D("p", _l, [
    V(e.$slots, "default")
  ]);
}
const Id = /* @__PURE__ */ Oe(Cl, [["render", $l]]), Ol = {}, Sl = { class: "flex items-center p-6 pt-0" };
function Tl(e, n) {
  return C(), D("div", Sl, [
    V(e.$slots, "default")
  ]);
}
const Rd = /* @__PURE__ */ Oe(Ol, [["render", Tl]]), El = {}, Dl = { class: "flex flex-col gap-1.5 p-6" };
function Pl(e, n) {
  return C(), D("div", Dl, [
    V(e.$slots, "default")
  ]);
}
const Bd = /* @__PURE__ */ Oe(El, [["render", Pl]]), Il = {}, Rl = { class: "text-lg font-semibold leading-none" };
function Bl(e, n) {
  return C(), D("h3", Rl, [
    V(e.$slots, "default")
  ]);
}
const Md = /* @__PURE__ */ Oe(Il, [["render", Bl]]);
/**
 * @license lucide-vue-next v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const On = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Ml = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (n, t, r) => r ? r.toUpperCase() : t.toLowerCase()
), Al = (e) => {
  const n = Ml(e);
  return n.charAt(0).toUpperCase() + n.slice(1);
}, Ll = (...e) => e.filter((n, t, r) => !!n && n.trim() !== "" && r.indexOf(n) === t).join(" ").trim();
/**
 * @license lucide-vue-next v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var io = {
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
const Vl = ({ size: e, strokeWidth: n = 2, absoluteStrokeWidth: t, color: r, iconNode: o, name: l, class: a, ...s }, { slots: i }) => le(
  "svg",
  {
    ...io,
    width: e || io.width,
    height: e || io.height,
    stroke: r || io.stroke,
    "stroke-width": t ? Number(n) * 24 / Number(e) : n,
    class: Ll(
      "lucide",
      ...l ? [`lucide-${On(Al(l))}-icon`, `lucide-${On(l)}`] : ["lucide-icon"]
    ),
    ...s
  },
  [...o.map((u) => le(...u)), ...i.default ? [i.default()] : []]
);
/**
 * @license lucide-vue-next v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const St = (e, n) => (t, { slots: r }) => le(
  Vl,
  {
    ...t,
    iconNode: n,
    name: e
  },
  r
);
/**
 * @license lucide-vue-next v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fl = St("check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-vue-next v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qo = St("chevron-down", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-vue-next v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zl = St("clipboard", [
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
const jl = St("ellipsis-vertical", [
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
const Nl = St("grip-horizontal", [
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
const Gl = St("loader", [
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
const Hl = St("trash-2", [
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
const oo = St("x", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
function Xn() {
  const e = x({
    isDark: !1,
    themeClass: "light"
  }), n = () => {
    const l = document.documentElement.classList.contains("dark");
    e.value = {
      isDark: l,
      themeClass: l ? "dark" : "light"
    };
  }, t = () => {
    const l = !e.value.isDark;
    document.documentElement.classList.toggle("dark", l), n(), window.dispatchEvent(
      new CustomEvent("storybook-theme-change", {
        detail: {
          isDark: l,
          themeClass: l ? "dark" : "light"
        }
      })
    );
  }, r = (l) => {
    document.documentElement.classList.toggle("dark", l), n(), window.dispatchEvent(
      new CustomEvent("storybook-theme-change", {
        detail: {
          isDark: l,
          themeClass: l ? "dark" : "light"
        }
      })
    );
  }, o = (l) => {
    if (l.detail) {
      const { isDark: a } = l.detail;
      document.documentElement.classList.toggle("dark", a), n();
    }
  };
  return oe(
    () => e.value,
    (l) => {
      console.log("Theme state changed:", l);
    },
    { deep: !0 }
  ), ne(() => {
    n(), window.addEventListener(
      "storybook-theme-change",
      o
    );
    const l = new MutationObserver((a) => {
      a.forEach((s) => {
        s.type === "attributes" && s.attributeName === "class" && n();
      });
    });
    return l.observe(document.documentElement, {
      attributes: !0,
      attributeFilter: ["class"]
    }), () => {
      window.removeEventListener(
        "storybook-theme-change",
        o
      ), l.disconnect();
    };
  }), {
    themeState: e,
    isDark: _(() => e.value.isDark),
    themeClass: _(() => e.value.themeClass),
    background: _(
      () => e.value.isDark ? "dark" : "light"
    ),
    toggleTheme: t,
    setTheme: r,
    updateThemeState: n
  };
}
const Qn = Symbol("code-block-context");
function Ul() {
  const e = x([]), n = x(""), t = Wn(), r = _(() => !!t.demo), o = _(() => !!t.tabs), i = {
    tabs: e,
    activeTab: n,
    registerTab: (u) => {
      const c = e.value.findIndex((d) => d.id === u.id);
      c >= 0 ? e.value[c] = u : e.value.push(u), !n.value && e.value.length > 0 && (n.value = e.value[0].id);
    },
    unregisterTab: (u) => {
      const c = e.value.findIndex((d) => d.id === u);
      c >= 0 && (e.value.splice(c, 1), n.value === u && e.value.length > 0 && (n.value = e.value[0].id));
    },
    setActiveTab: (u) => {
      const c = e.value.find((d) => d.id === u);
      c && !c.disabled && (n.value = u);
    },
    hasTabs: o,
    hasDemoSlot: r
  };
  return me(Qn, i), i;
}
function Zn() {
  const e = se(Qn);
  if (!e)
    throw new Error(
      "useCodeBlockContext must be used within a CodeBlock component"
    );
  return e;
}
const Wl = { key: 1 }, ql = ["innerHTML"], Kl = { class: "text-sm" }, Yl = /* @__PURE__ */ L({
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
      const $ = v.toLowerCase();
      return n[$] || $;
    }, r = /* @__PURE__ */ new Map();
    function o(...v) {
      return Re(De(v));
    }
    const l = e;
    Wn();
    const a = x("demo"), s = x(""), i = x(!0), u = x(""), c = x(!1), d = x(null), { hasTabs: m, hasDemoSlot: f } = Ul(), { isDark: p } = Xn(), g = _(() => l.autoTheme ? p.value ? l.darkTheme : l.lightTheme : l.shikiTheme), h = async () => {
      try {
        i.value = !0, u.value = "";
        const v = t(l.language), $ = `${v}-${g.value}`;
        if (r.has($)) {
          d.value = r.get($), await y();
          return;
        }
        const { getSingletonHighlighter: k } = await import("shiki");
        d.value = await k({
          themes: [g.value],
          langs: [v]
        }), r.set($, d.value), await y();
      } catch (v) {
        console.error("Failed to initialize highlighter:", v), u.value = v instanceof Error ? v.message : "Failed to initialize syntax highlighter";
      } finally {
        i.value = !1;
      }
    }, y = async () => {
      var v;
      if (d.value)
        try {
          const $ = t(l.language), k = {
            lang: $,
            theme: g.value,
            colorReplacements: {
              "#24292e": "#171717",
              "#ffffff": "#f5f5f5",
              "#fff": "#f5f5f5"
            }
          }, O = {
            ...k,
            ...l.codeToHtmlOptions,
            // Ensure lang and theme are always set correctly
            lang: $,
            theme: g.value,
            // Merge colorReplacements if provided
            colorReplacements: {
              ...k.colorReplacements,
              ...(v = l.codeToHtmlOptions) == null ? void 0 : v.colorReplacements
            }
          };
          s.value = d.value.codeToHtml(
            l.code,
            O
          );
        } catch ($) {
          console.error("Failed to highlight code:", $), u.value = $ instanceof Error ? $.message : "Failed to highlight code";
        }
    }, w = async () => {
      try {
        await navigator.clipboard.writeText(l.code), c.value = !0, setTimeout(() => {
          c.value = !1;
        }, 2e3);
      } catch (v) {
        console.error("Failed to copy to clipboard:", v);
      }
    };
    return oe(
      [
        () => l.code,
        () => l.language,
        g,
        () => l.codeToHtmlOptions
      ],
      async (v, $) => {
        v[1] !== ($ == null ? void 0 : $[1]) ? await h() : await y();
      },
      {
        immediate: !0
      }
    ), ne(h), (v, $) => (C(), D("div", {
      class: N(
        o(
          "relative overflow-hidden rounded-lg border border-border bg-muted/50",
          v.customTheme.container
        )
      )
    }, [
      v.showHeader && (R(m) || R(f)) ? (C(), D("div", {
        key: 0,
        class: N(
          o(
            "flex border-b border-border bg-muted/30 h-10 pr-4",
            v.customTheme.tabNav
          )
        )
      }, [
        R(m) ? V(v.$slots, "tabs", { key: 0 }, void 0, !0) : R(f) ? (C(), D(we, { key: 1 }, [
          I("button", {
            onClick: $[0] || ($[0] = (k) => a.value = "demo"),
            class: N(
              o(
                "px-4 py-2 text-sm font-medium transition-colors",
                a.value === "demo" ? "bg-background text-foreground border-b-2 border-primary" : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              )
            )
          }, " Demo ", 2),
          I("button", {
            onClick: $[1] || ($[1] = (k) => a.value = "code"),
            class: N(
              o(
                "px-4 py-2 text-sm font-medium transition-colors",
                a.value === "code" ? "bg-background text-foreground border-b-2 border-primary" : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              )
            )
          }, " Code ", 2)
        ], 64)) : ae("", !0),
        I("span", {
          class: N(
            o(
              "ml-auto self-center font-mono text-muted-foreground capitalize text-sm",
              v.customTheme.languageLabel
            )
          )
        }, de(v.language), 3)
      ], 2)) : ae("", !0),
      R(m) ? V(v.$slots, "default", { key: 1 }, void 0, !0) : (C(), D(we, { key: 2 }, [
        R(f) && a.value === "demo" ? (C(), D("div", {
          key: 0,
          class: N(o("p-4", v.customTheme.demo))
        }, [
          V(v.$slots, "demo", {}, void 0, !0)
        ], 2)) : ae("", !0),
        !R(f) || a.value === "code" ? (C(), D("div", Wl, [
          I("div", {
            class: N(o("relative", v.customTheme.content))
          }, [
            v.showCopyButton ? (C(), ue(Ge, {
              key: 0,
              onClick: w,
              class: N(
                o(
                  "absolute right-2 top-2 z-10 inline-flex items-center gap-1 rounded bg-transparent size-9 px-2 py-1 text-xs font-medium text-muted-foreground transition-colors hover:bg-transparent hover:text-accent-foreground",
                  v.customTheme.copyButton
                )
              ),
              "aria-label": v.copyButtonLabel,
              variant: "ghost",
              size: "sm"
            }, {
              default: W(() => [
                c.value ? (C(), ue(R(Fl), {
                  key: 0,
                  class: "size-4 text-green-500 shrink-0"
                })) : (C(), ue(R(zl), {
                  key: 1,
                  class: "size-4 shrink-0"
                }))
              ]),
              _: 1
            }, 8, ["class", "aria-label"])) : ae("", !0),
            I("div", {
              class: N(
                o("overflow-auto max-h-96", v.customTheme.content)
              )
            }, [
              i.value ? (C(), D("div", {
                key: 1,
                class: N(
                  o(
                    "flex items-center justify-center py-8 text-muted-foreground",
                    v.customTheme.loading
                  )
                )
              }, $[2] || ($[2] = [
                I("span", { class: "text-sm" }, "Loading syntax highlighting...", -1)
              ]), 2)) : (C(), D("div", {
                key: 0,
                class: N(
                  o(
                    "font-mono text-sm leading-relaxed [&>pre]:p-4",
                    v.customTheme.pre
                  )
                ),
                innerHTML: s.value
              }, null, 10, ql)),
              u.value ? (C(), D("div", {
                key: 2,
                class: N(
                  o(
                    "flex items-center justify-center py-8 text-destructive",
                    v.customTheme.error
                  )
                )
              }, [
                I("span", Kl, de(u.value), 1)
              ], 2)) : ae("", !0)
            ], 2)
          ], 2)
        ])) : ae("", !0)
      ], 64))
    ], 2));
  }
}), Ad = /* @__PURE__ */ Oe(Yl, [["__scopeId", "data-v-edbf5460"]]), Ld = /* @__PURE__ */ L({
  __name: "CodeBlockTab",
  props: {
    id: {},
    label: {},
    icon: {},
    disabled: { type: Boolean, default: !1 },
    customTheme: { default: "" }
  },
  setup(e) {
    function n(...i) {
      return Re(De(i));
    }
    const t = e, { activeTab: r, registerTab: o, unregisterTab: l } = Zn(), a = _(() => r.value === t.id), s = {
      id: t.id,
      label: t.label,
      icon: t.icon,
      disabled: t.disabled
    };
    return ne(() => {
      o(s);
    }), ve(() => {
      l(t.id);
    }), (i, u) => a.value ? (C(), D("div", {
      key: 0,
      class: N(n("p-4", i.customTheme))
    }, [
      V(i.$slots, "default")
    ], 2)) : ae("", !0);
  }
}), Jl = ["disabled"], Vd = /* @__PURE__ */ L({
  __name: "CodeBlockTabButton",
  props: {
    id: {},
    label: {},
    icon: {},
    disabled: { type: Boolean, default: !1 },
    customTheme: { default: "" }
  },
  setup(e) {
    function n(...s) {
      return Re(De(s));
    }
    const t = e, { activeTab: r, setActiveTab: o } = Zn(), l = _(() => r.value === t.id), a = () => {
      t.disabled || o(t.id);
    };
    return (s, i) => (C(), D("button", {
      onClick: a,
      disabled: s.disabled,
      class: N(
        n(
          "px-4 py-2 text-sm font-medium transition-colors flex items-center",
          l.value ? "bg-background text-foreground border-b-2 border-primary" : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
          s.disabled && "opacity-50 cursor-not-allowed",
          s.customTheme
        )
      )
    }, [
      s.icon ? (C(), ue(Xo(s.icon), {
        key: 0,
        class: "mr-2 size-4"
      })) : ae("", !0),
      Je(" " + de(s.label), 1)
    ], 10, Jl));
  }
}), Xl = { class: "w-full space-y-3" }, Ql = ["onClick"], Zl = /* @__PURE__ */ L({
  __name: "ColorPicker",
  props: {
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const t = e, r = x({
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
    }), o = _({
      get: () => t.modelValue,
      set: (i) => {
        l("update:modelValue", i);
      }
    }), l = n, a = x(""), s = (i) => {
      a.value = i, o.value = i, setTimeout(() => {
        a.value = "";
      }, 300);
    };
    return (i, u) => (C(), D("div", null, [
      I("div", Xl, [
        (C(!0), D(we, null, Ue(r.value, (c, d) => (C(), D("div", {
          key: `color-${d}`,
          class: "flex w-full items-center space-x-3"
        }, [
          (C(!0), D(we, null, Ue(c, (m) => (C(), D("div", {
            key: `${d}-${m.name}`,
            class: N(
              R(De)(
                "flex h-6 w-6 items-center justify-center rounded-full text-xs text-foreground",
                "hover:ring-[1.5px] hover:ring-ring hover:ring-offset-2",
                "relative",
                m.background,
                m.text,
                {
                  "ring-[1.5px] ring-ring ring-offset-2": o.value === m.hex
                }
              )
            ),
            onClick: (f) => s(m.hex)
          }, [
            a.value === m.hex ? (C(), D("div", {
              key: 0,
              class: N(["absolute inset-0 rounded-full animate-color-flash", m.background])
            }, null, 2)) : ae("", !0)
          ], 10, Ql))), 128))
        ]))), 128))
      ])
    ]));
  }
}), ea = ["top", "right", "bottom", "left"], Sn = ["start", "end"], Tn = /* @__PURE__ */ ea.reduce((e, n) => e.concat(n, n + "-" + Sn[0], n + "-" + Sn[1]), []), _t = Math.min, qe = Math.max, mo = Math.round, uo = Math.floor, it = (e) => ({
  x: e,
  y: e
}), ta = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, oa = {
  start: "end",
  end: "start"
};
function No(e, n, t) {
  return qe(e, _t(n, t));
}
function vt(e, n) {
  return typeof e == "function" ? e(n) : e;
}
function nt(e) {
  return e.split("-")[0];
}
function tt(e) {
  return e.split("-")[1];
}
function Zo(e) {
  return e === "x" ? "y" : "x";
}
function en(e) {
  return e === "y" ? "height" : "width";
}
function st(e) {
  return ["top", "bottom"].includes(nt(e)) ? "y" : "x";
}
function tn(e) {
  return Zo(st(e));
}
function er(e, n, t) {
  t === void 0 && (t = !1);
  const r = tt(e), o = tn(e), l = en(o);
  let a = o === "x" ? r === (t ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return n.reference[l] > n.floating[l] && (a = go(a)), [a, go(a)];
}
function na(e) {
  const n = go(e);
  return [vo(e), n, vo(n)];
}
function vo(e) {
  return e.replace(/start|end/g, (n) => oa[n]);
}
function ra(e, n, t) {
  const r = ["left", "right"], o = ["right", "left"], l = ["top", "bottom"], a = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return t ? n ? o : r : n ? r : o;
    case "left":
    case "right":
      return n ? l : a;
    default:
      return [];
  }
}
function la(e, n, t, r) {
  const o = tt(e);
  let l = ra(nt(e), t === "start", r);
  return o && (l = l.map((a) => a + "-" + o), n && (l = l.concat(l.map(vo)))), l;
}
function go(e) {
  return e.replace(/left|right|bottom|top/g, (n) => ta[n]);
}
function aa(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function tr(e) {
  return typeof e != "number" ? aa(e) : {
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
    width: r,
    height: o
  } = e;
  return {
    width: r,
    height: o,
    top: t,
    left: n,
    right: n + r,
    bottom: t + o,
    x: n,
    y: t
  };
}
function En(e, n, t) {
  let {
    reference: r,
    floating: o
  } = e;
  const l = st(n), a = tn(n), s = en(a), i = nt(n), u = l === "y", c = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, m = r[s] / 2 - o[s] / 2;
  let f;
  switch (i) {
    case "top":
      f = {
        x: c,
        y: r.y - o.height
      };
      break;
    case "bottom":
      f = {
        x: c,
        y: r.y + r.height
      };
      break;
    case "right":
      f = {
        x: r.x + r.width,
        y: d
      };
      break;
    case "left":
      f = {
        x: r.x - o.width,
        y: d
      };
      break;
    default:
      f = {
        x: r.x,
        y: r.y
      };
  }
  switch (tt(n)) {
    case "start":
      f[a] -= m * (t && u ? -1 : 1);
      break;
    case "end":
      f[a] += m * (t && u ? -1 : 1);
      break;
  }
  return f;
}
const sa = async (e, n, t) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: l = [],
    platform: a
  } = t, s = l.filter(Boolean), i = await (a.isRTL == null ? void 0 : a.isRTL(n));
  let u = await a.getElementRects({
    reference: e,
    floating: n,
    strategy: o
  }), {
    x: c,
    y: d
  } = En(u, r, i), m = r, f = {}, p = 0;
  for (let g = 0; g < s.length; g++) {
    const {
      name: h,
      fn: y
    } = s[g], {
      x: w,
      y: v,
      data: $,
      reset: k
    } = await y({
      x: c,
      y: d,
      initialPlacement: r,
      placement: m,
      strategy: o,
      middlewareData: f,
      rects: u,
      platform: a,
      elements: {
        reference: e,
        floating: n
      }
    });
    c = w ?? c, d = v ?? d, f = {
      ...f,
      [h]: {
        ...f[h],
        ...$
      }
    }, k && p <= 50 && (p++, typeof k == "object" && (k.placement && (m = k.placement), k.rects && (u = k.rects === !0 ? await a.getElementRects({
      reference: e,
      floating: n,
      strategy: o
    }) : k.rects), {
      x: c,
      y: d
    } = En(u, m, i)), g = -1);
  }
  return {
    x: c,
    y: d,
    placement: m,
    strategy: o,
    middlewareData: f
  };
};
async function wo(e, n) {
  var t;
  n === void 0 && (n = {});
  const {
    x: r,
    y: o,
    platform: l,
    rects: a,
    elements: s,
    strategy: i
  } = e, {
    boundary: u = "clippingAncestors",
    rootBoundary: c = "viewport",
    elementContext: d = "floating",
    altBoundary: m = !1,
    padding: f = 0
  } = vt(n, e), p = tr(f), h = s[m ? d === "floating" ? "reference" : "floating" : d], y = ho(await l.getClippingRect({
    element: (t = await (l.isElement == null ? void 0 : l.isElement(h))) == null || t ? h : h.contextElement || await (l.getDocumentElement == null ? void 0 : l.getDocumentElement(s.floating)),
    boundary: u,
    rootBoundary: c,
    strategy: i
  })), w = d === "floating" ? {
    x: r,
    y: o,
    width: a.floating.width,
    height: a.floating.height
  } : a.reference, v = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(s.floating)), $ = await (l.isElement == null ? void 0 : l.isElement(v)) ? await (l.getScale == null ? void 0 : l.getScale(v)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, k = ho(l.convertOffsetParentRelativeRectToViewportRelativeRect ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: w,
    offsetParent: v,
    strategy: i
  }) : w);
  return {
    top: (y.top - k.top + p.top) / $.y,
    bottom: (k.bottom - y.bottom + p.bottom) / $.y,
    left: (y.left - k.left + p.left) / $.x,
    right: (k.right - y.right + p.right) / $.x
  };
}
const ia = (e) => ({
  name: "arrow",
  options: e,
  async fn(n) {
    const {
      x: t,
      y: r,
      placement: o,
      rects: l,
      platform: a,
      elements: s,
      middlewareData: i
    } = n, {
      element: u,
      padding: c = 0
    } = vt(e, n) || {};
    if (u == null)
      return {};
    const d = tr(c), m = {
      x: t,
      y: r
    }, f = tn(o), p = en(f), g = await a.getDimensions(u), h = f === "y", y = h ? "top" : "left", w = h ? "bottom" : "right", v = h ? "clientHeight" : "clientWidth", $ = l.reference[p] + l.reference[f] - m[f] - l.floating[p], k = m[f] - l.reference[f], O = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(u));
    let S = O ? O[v] : 0;
    (!S || !await (a.isElement == null ? void 0 : a.isElement(O))) && (S = s.floating[v] || l.floating[p]);
    const T = $ / 2 - k / 2, M = S / 2 - g[p] / 2 - 1, b = _t(d[y], M), E = _t(d[w], M), H = b, z = S - g[p] - E, K = S / 2 - g[p] / 2 + T, F = No(H, K, z), Y = !i.arrow && tt(o) != null && K !== F && l.reference[p] / 2 - (K < H ? b : E) - g[p] / 2 < 0, re = Y ? K < H ? K - H : K - z : 0;
    return {
      [f]: m[f] + re,
      data: {
        [f]: F,
        centerOffset: K - F - re,
        ...Y && {
          alignmentOffset: re
        }
      },
      reset: Y
    };
  }
});
function ua(e, n, t) {
  return (e ? [...t.filter((o) => tt(o) === e), ...t.filter((o) => tt(o) !== e)] : t.filter((o) => nt(o) === o)).filter((o) => e ? tt(o) === e || (n ? vo(o) !== o : !1) : !0);
}
const ca = function(e) {
  return e === void 0 && (e = {}), {
    name: "autoPlacement",
    options: e,
    async fn(n) {
      var t, r, o;
      const {
        rects: l,
        middlewareData: a,
        placement: s,
        platform: i,
        elements: u
      } = n, {
        crossAxis: c = !1,
        alignment: d,
        allowedPlacements: m = Tn,
        autoAlignment: f = !0,
        ...p
      } = vt(e, n), g = d !== void 0 || m === Tn ? ua(d || null, f, m) : m, h = await wo(n, p), y = ((t = a.autoPlacement) == null ? void 0 : t.index) || 0, w = g[y];
      if (w == null)
        return {};
      const v = er(w, l, await (i.isRTL == null ? void 0 : i.isRTL(u.floating)));
      if (s !== w)
        return {
          reset: {
            placement: g[0]
          }
        };
      const $ = [h[nt(w)], h[v[0]], h[v[1]]], k = [...((r = a.autoPlacement) == null ? void 0 : r.overflows) || [], {
        placement: w,
        overflows: $
      }], O = g[y + 1];
      if (O)
        return {
          data: {
            index: y + 1,
            overflows: k
          },
          reset: {
            placement: O
          }
        };
      const S = k.map((b) => {
        const E = tt(b.placement);
        return [b.placement, E && c ? (
          // Check along the mainAxis and main crossAxis side.
          b.overflows.slice(0, 2).reduce((H, z) => H + z, 0)
        ) : (
          // Check only the mainAxis.
          b.overflows[0]
        ), b.overflows];
      }).sort((b, E) => b[1] - E[1]), M = ((o = S.filter((b) => b[2].slice(
        0,
        // Aligned placements should not check their opposite crossAxis
        // side.
        tt(b[0]) ? 2 : 3
      ).every((E) => E <= 0))[0]) == null ? void 0 : o[0]) || S[0][0];
      return M !== s ? {
        data: {
          index: y + 1,
          overflows: k
        },
        reset: {
          placement: M
        }
      } : {};
    }
  };
}, da = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(n) {
      var t, r;
      const {
        placement: o,
        middlewareData: l,
        rects: a,
        initialPlacement: s,
        platform: i,
        elements: u
      } = n, {
        mainAxis: c = !0,
        crossAxis: d = !0,
        fallbackPlacements: m,
        fallbackStrategy: f = "bestFit",
        fallbackAxisSideDirection: p = "none",
        flipAlignment: g = !0,
        ...h
      } = vt(e, n);
      if ((t = l.arrow) != null && t.alignmentOffset)
        return {};
      const y = nt(o), w = st(s), v = nt(s) === s, $ = await (i.isRTL == null ? void 0 : i.isRTL(u.floating)), k = m || (v || !g ? [go(s)] : na(s)), O = p !== "none";
      !m && O && k.push(...la(s, g, p, $));
      const S = [s, ...k], T = await wo(n, h), M = [];
      let b = ((r = l.flip) == null ? void 0 : r.overflows) || [];
      if (c && M.push(T[y]), d) {
        const K = er(o, a, $);
        M.push(T[K[0]], T[K[1]]);
      }
      if (b = [...b, {
        placement: o,
        overflows: M
      }], !M.every((K) => K <= 0)) {
        var E, H;
        const K = (((E = l.flip) == null ? void 0 : E.index) || 0) + 1, F = S[K];
        if (F && (!(d === "alignment" ? w !== st(F) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        b.every((te) => te.overflows[0] > 0 && st(te.placement) === w)))
          return {
            data: {
              index: K,
              overflows: b
            },
            reset: {
              placement: F
            }
          };
        let Y = (H = b.filter((re) => re.overflows[0] <= 0).sort((re, te) => re.overflows[1] - te.overflows[1])[0]) == null ? void 0 : H.placement;
        if (!Y)
          switch (f) {
            case "bestFit": {
              var z;
              const re = (z = b.filter((te) => {
                if (O) {
                  const Z = st(te.placement);
                  return Z === w || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  Z === "y";
                }
                return !0;
              }).map((te) => [te.placement, te.overflows.filter((Z) => Z > 0).reduce((Z, ce) => Z + ce, 0)]).sort((te, Z) => te[1] - Z[1])[0]) == null ? void 0 : z[0];
              re && (Y = re);
              break;
            }
            case "initialPlacement":
              Y = s;
              break;
          }
        if (o !== Y)
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
async function fa(e, n) {
  const {
    placement: t,
    platform: r,
    elements: o
  } = e, l = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), a = nt(t), s = tt(t), i = st(t) === "y", u = ["left", "top"].includes(a) ? -1 : 1, c = l && i ? -1 : 1, d = vt(n, e);
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
const pa = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(n) {
      var t, r;
      const {
        x: o,
        y: l,
        placement: a,
        middlewareData: s
      } = n, i = await fa(n, e);
      return a === ((t = s.offset) == null ? void 0 : t.placement) && (r = s.arrow) != null && r.alignmentOffset ? {} : {
        x: o + i.x,
        y: l + i.y,
        data: {
          ...i,
          placement: a
        }
      };
    }
  };
}, ma = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(n) {
      const {
        x: t,
        y: r,
        placement: o
      } = n, {
        mainAxis: l = !0,
        crossAxis: a = !1,
        limiter: s = {
          fn: (h) => {
            let {
              x: y,
              y: w
            } = h;
            return {
              x: y,
              y: w
            };
          }
        },
        ...i
      } = vt(e, n), u = {
        x: t,
        y: r
      }, c = await wo(n, i), d = st(nt(o)), m = Zo(d);
      let f = u[m], p = u[d];
      if (l) {
        const h = m === "y" ? "top" : "left", y = m === "y" ? "bottom" : "right", w = f + c[h], v = f - c[y];
        f = No(w, f, v);
      }
      if (a) {
        const h = d === "y" ? "top" : "left", y = d === "y" ? "bottom" : "right", w = p + c[h], v = p - c[y];
        p = No(w, p, v);
      }
      const g = s.fn({
        ...n,
        [m]: f,
        [d]: p
      });
      return {
        ...g,
        data: {
          x: g.x - t,
          y: g.y - r,
          enabled: {
            [m]: l,
            [d]: a
          }
        }
      };
    }
  };
}, va = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(n) {
      const {
        x: t,
        y: r,
        placement: o,
        rects: l,
        middlewareData: a
      } = n, {
        offset: s = 0,
        mainAxis: i = !0,
        crossAxis: u = !0
      } = vt(e, n), c = {
        x: t,
        y: r
      }, d = st(o), m = Zo(d);
      let f = c[m], p = c[d];
      const g = vt(s, n), h = typeof g == "number" ? {
        mainAxis: g,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...g
      };
      if (i) {
        const v = m === "y" ? "height" : "width", $ = l.reference[m] - l.floating[v] + h.mainAxis, k = l.reference[m] + l.reference[v] - h.mainAxis;
        f < $ ? f = $ : f > k && (f = k);
      }
      if (u) {
        var y, w;
        const v = m === "y" ? "width" : "height", $ = ["top", "left"].includes(nt(o)), k = l.reference[d] - l.floating[v] + ($ && ((y = a.offset) == null ? void 0 : y[d]) || 0) + ($ ? 0 : h.crossAxis), O = l.reference[d] + l.reference[v] + ($ ? 0 : ((w = a.offset) == null ? void 0 : w[d]) || 0) - ($ ? h.crossAxis : 0);
        p < k ? p = k : p > O && (p = O);
      }
      return {
        [m]: f,
        [d]: p
      };
    }
  };
}, ga = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(n) {
      var t, r;
      const {
        placement: o,
        rects: l,
        platform: a,
        elements: s
      } = n, {
        apply: i = () => {
        },
        ...u
      } = vt(e, n), c = await wo(n, u), d = nt(o), m = tt(o), f = st(o) === "y", {
        width: p,
        height: g
      } = l.floating;
      let h, y;
      d === "top" || d === "bottom" ? (h = d, y = m === (await (a.isRTL == null ? void 0 : a.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (y = d, h = m === "end" ? "top" : "bottom");
      const w = g - c.top - c.bottom, v = p - c.left - c.right, $ = _t(g - c[h], w), k = _t(p - c[y], v), O = !n.middlewareData.shift;
      let S = $, T = k;
      if ((t = n.middlewareData.shift) != null && t.enabled.x && (T = v), (r = n.middlewareData.shift) != null && r.enabled.y && (S = w), O && !m) {
        const b = qe(c.left, 0), E = qe(c.right, 0), H = qe(c.top, 0), z = qe(c.bottom, 0);
        f ? T = p - 2 * (b !== 0 || E !== 0 ? b + E : qe(c.left, c.right)) : S = g - 2 * (H !== 0 || z !== 0 ? H + z : qe(c.top, c.bottom));
      }
      await i({
        ...n,
        availableWidth: T,
        availableHeight: S
      });
      const M = await a.getDimensions(s.floating);
      return p !== M.width || g !== M.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function ko() {
  return typeof window < "u";
}
function It(e) {
  return on(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ye(e) {
  var n;
  return (e == null || (n = e.ownerDocument) == null ? void 0 : n.defaultView) || window;
}
function dt(e) {
  var n;
  return (n = (on(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : n.documentElement;
}
function on(e) {
  return ko() ? e instanceof Node || e instanceof Ye(e).Node : !1;
}
function rt(e) {
  return ko() ? e instanceof Element || e instanceof Ye(e).Element : !1;
}
function ut(e) {
  return ko() ? e instanceof HTMLElement || e instanceof Ye(e).HTMLElement : !1;
}
function Dn(e) {
  return !ko() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ye(e).ShadowRoot;
}
function no(e) {
  const {
    overflow: n,
    overflowX: t,
    overflowY: r,
    display: o
  } = lt(e);
  return /auto|scroll|overlay|hidden|clip/.test(n + r + t) && !["inline", "contents"].includes(o);
}
function ha(e) {
  return ["table", "td", "th"].includes(It(e));
}
function Co(e) {
  return [":popover-open", ":modal"].some((n) => {
    try {
      return e.matches(n);
    } catch {
      return !1;
    }
  });
}
function nn(e) {
  const n = rn(), t = rt(e) ? lt(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((r) => t[r] ? t[r] !== "none" : !1) || (t.containerType ? t.containerType !== "normal" : !1) || !n && (t.backdropFilter ? t.backdropFilter !== "none" : !1) || !n && (t.filter ? t.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((r) => (t.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (t.contain || "").includes(r));
}
function ba(e) {
  let n = $t(e);
  for (; ut(n) && !jt(n); ) {
    if (nn(n))
      return n;
    if (Co(n))
      return null;
    n = $t(n);
  }
  return null;
}
function rn() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function jt(e) {
  return ["html", "body", "#document"].includes(It(e));
}
function lt(e) {
  return Ye(e).getComputedStyle(e);
}
function _o(e) {
  return rt(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function $t(e) {
  if (It(e) === "html")
    return e;
  const n = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Dn(e) && e.host || // Fallback.
    dt(e)
  );
  return Dn(n) ? n.host : n;
}
function or(e) {
  const n = $t(e);
  return jt(n) ? e.ownerDocument ? e.ownerDocument.body : e.body : ut(n) && no(n) ? n : or(n);
}
function Xt(e, n, t) {
  var r;
  n === void 0 && (n = []), t === void 0 && (t = !0);
  const o = or(e), l = o === ((r = e.ownerDocument) == null ? void 0 : r.body), a = Ye(o);
  if (l) {
    const s = Go(a);
    return n.concat(a, a.visualViewport || [], no(o) ? o : [], s && t ? Xt(s) : []);
  }
  return n.concat(o, Xt(o, [], t));
}
function Go(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function nr(e) {
  const n = lt(e);
  let t = parseFloat(n.width) || 0, r = parseFloat(n.height) || 0;
  const o = ut(e), l = o ? e.offsetWidth : t, a = o ? e.offsetHeight : r, s = mo(t) !== l || mo(r) !== a;
  return s && (t = l, r = a), {
    width: t,
    height: r,
    $: s
  };
}
function ln(e) {
  return rt(e) ? e : e.contextElement;
}
function Vt(e) {
  const n = ln(e);
  if (!ut(n))
    return it(1);
  const t = n.getBoundingClientRect(), {
    width: r,
    height: o,
    $: l
  } = nr(n);
  let a = (l ? mo(t.width) : t.width) / r, s = (l ? mo(t.height) : t.height) / o;
  return (!a || !Number.isFinite(a)) && (a = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: a,
    y: s
  };
}
const ya = /* @__PURE__ */ it(0);
function rr(e) {
  const n = Ye(e);
  return !rn() || !n.visualViewport ? ya : {
    x: n.visualViewport.offsetLeft,
    y: n.visualViewport.offsetTop
  };
}
function xa(e, n, t) {
  return n === void 0 && (n = !1), !t || n && t !== Ye(e) ? !1 : n;
}
function Pt(e, n, t, r) {
  n === void 0 && (n = !1), t === void 0 && (t = !1);
  const o = e.getBoundingClientRect(), l = ln(e);
  let a = it(1);
  n && (r ? rt(r) && (a = Vt(r)) : a = Vt(e));
  const s = xa(l, t, r) ? rr(l) : it(0);
  let i = (o.left + s.x) / a.x, u = (o.top + s.y) / a.y, c = o.width / a.x, d = o.height / a.y;
  if (l) {
    const m = Ye(l), f = r && rt(r) ? Ye(r) : r;
    let p = m, g = Go(p);
    for (; g && r && f !== p; ) {
      const h = Vt(g), y = g.getBoundingClientRect(), w = lt(g), v = y.left + (g.clientLeft + parseFloat(w.paddingLeft)) * h.x, $ = y.top + (g.clientTop + parseFloat(w.paddingTop)) * h.y;
      i *= h.x, u *= h.y, c *= h.x, d *= h.y, i += v, u += $, p = Ye(g), g = Go(p);
    }
  }
  return ho({
    width: c,
    height: d,
    x: i,
    y: u
  });
}
function an(e, n) {
  const t = _o(e).scrollLeft;
  return n ? n.left + t : Pt(dt(e)).left + t;
}
function lr(e, n, t) {
  t === void 0 && (t = !1);
  const r = e.getBoundingClientRect(), o = r.left + n.scrollLeft - (t ? 0 : (
    // RTL <body> scrollbar.
    an(e, r)
  )), l = r.top + n.scrollTop;
  return {
    x: o,
    y: l
  };
}
function wa(e) {
  let {
    elements: n,
    rect: t,
    offsetParent: r,
    strategy: o
  } = e;
  const l = o === "fixed", a = dt(r), s = n ? Co(n.floating) : !1;
  if (r === a || s && l)
    return t;
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = it(1);
  const c = it(0), d = ut(r);
  if ((d || !d && !l) && ((It(r) !== "body" || no(a)) && (i = _o(r)), ut(r))) {
    const f = Pt(r);
    u = Vt(r), c.x = f.x + r.clientLeft, c.y = f.y + r.clientTop;
  }
  const m = a && !d && !l ? lr(a, i, !0) : it(0);
  return {
    width: t.width * u.x,
    height: t.height * u.y,
    x: t.x * u.x - i.scrollLeft * u.x + c.x + m.x,
    y: t.y * u.y - i.scrollTop * u.y + c.y + m.y
  };
}
function ka(e) {
  return Array.from(e.getClientRects());
}
function Ca(e) {
  const n = dt(e), t = _o(e), r = e.ownerDocument.body, o = qe(n.scrollWidth, n.clientWidth, r.scrollWidth, r.clientWidth), l = qe(n.scrollHeight, n.clientHeight, r.scrollHeight, r.clientHeight);
  let a = -t.scrollLeft + an(e);
  const s = -t.scrollTop;
  return lt(r).direction === "rtl" && (a += qe(n.clientWidth, r.clientWidth) - o), {
    width: o,
    height: l,
    x: a,
    y: s
  };
}
function _a(e, n) {
  const t = Ye(e), r = dt(e), o = t.visualViewport;
  let l = r.clientWidth, a = r.clientHeight, s = 0, i = 0;
  if (o) {
    l = o.width, a = o.height;
    const u = rn();
    (!u || u && n === "fixed") && (s = o.offsetLeft, i = o.offsetTop);
  }
  return {
    width: l,
    height: a,
    x: s,
    y: i
  };
}
function $a(e, n) {
  const t = Pt(e, !0, n === "fixed"), r = t.top + e.clientTop, o = t.left + e.clientLeft, l = ut(e) ? Vt(e) : it(1), a = e.clientWidth * l.x, s = e.clientHeight * l.y, i = o * l.x, u = r * l.y;
  return {
    width: a,
    height: s,
    x: i,
    y: u
  };
}
function Pn(e, n, t) {
  let r;
  if (n === "viewport")
    r = _a(e, t);
  else if (n === "document")
    r = Ca(dt(e));
  else if (rt(n))
    r = $a(n, t);
  else {
    const o = rr(e);
    r = {
      x: n.x - o.x,
      y: n.y - o.y,
      width: n.width,
      height: n.height
    };
  }
  return ho(r);
}
function ar(e, n) {
  const t = $t(e);
  return t === n || !rt(t) || jt(t) ? !1 : lt(t).position === "fixed" || ar(t, n);
}
function Oa(e, n) {
  const t = n.get(e);
  if (t)
    return t;
  let r = Xt(e, [], !1).filter((s) => rt(s) && It(s) !== "body"), o = null;
  const l = lt(e).position === "fixed";
  let a = l ? $t(e) : e;
  for (; rt(a) && !jt(a); ) {
    const s = lt(a), i = nn(a);
    !i && s.position === "fixed" && (o = null), (l ? !i && !o : !i && s.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || no(a) && !i && ar(e, a)) ? r = r.filter((c) => c !== a) : o = s, a = $t(a);
  }
  return n.set(e, r), r;
}
function Sa(e) {
  let {
    element: n,
    boundary: t,
    rootBoundary: r,
    strategy: o
  } = e;
  const a = [...t === "clippingAncestors" ? Co(n) ? [] : Oa(n, this._c) : [].concat(t), r], s = a[0], i = a.reduce((u, c) => {
    const d = Pn(n, c, o);
    return u.top = qe(d.top, u.top), u.right = _t(d.right, u.right), u.bottom = _t(d.bottom, u.bottom), u.left = qe(d.left, u.left), u;
  }, Pn(n, s, o));
  return {
    width: i.right - i.left,
    height: i.bottom - i.top,
    x: i.left,
    y: i.top
  };
}
function Ta(e) {
  const {
    width: n,
    height: t
  } = nr(e);
  return {
    width: n,
    height: t
  };
}
function Ea(e, n, t) {
  const r = ut(n), o = dt(n), l = t === "fixed", a = Pt(e, !0, l, n);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const i = it(0);
  function u() {
    i.x = an(o);
  }
  if (r || !r && !l)
    if ((It(n) !== "body" || no(o)) && (s = _o(n)), r) {
      const f = Pt(n, !0, l, n);
      i.x = f.x + n.clientLeft, i.y = f.y + n.clientTop;
    } else o && u();
  l && !r && o && u();
  const c = o && !r && !l ? lr(o, s) : it(0), d = a.left + s.scrollLeft - i.x - c.x, m = a.top + s.scrollTop - i.y - c.y;
  return {
    x: d,
    y: m,
    width: a.width,
    height: a.height
  };
}
function Bo(e) {
  return lt(e).position === "static";
}
function In(e, n) {
  if (!ut(e) || lt(e).position === "fixed")
    return null;
  if (n)
    return n(e);
  let t = e.offsetParent;
  return dt(e) === t && (t = t.ownerDocument.body), t;
}
function sr(e, n) {
  const t = Ye(e);
  if (Co(e))
    return t;
  if (!ut(e)) {
    let o = $t(e);
    for (; o && !jt(o); ) {
      if (rt(o) && !Bo(o))
        return o;
      o = $t(o);
    }
    return t;
  }
  let r = In(e, n);
  for (; r && ha(r) && Bo(r); )
    r = In(r, n);
  return r && jt(r) && Bo(r) && !nn(r) ? t : r || ba(e) || t;
}
const Da = async function(e) {
  const n = this.getOffsetParent || sr, t = this.getDimensions, r = await t(e.floating);
  return {
    reference: Ea(e.reference, await n(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Pa(e) {
  return lt(e).direction === "rtl";
}
const Ia = {
  convertOffsetParentRelativeRectToViewportRelativeRect: wa,
  getDocumentElement: dt,
  getClippingRect: Sa,
  getOffsetParent: sr,
  getElementRects: Da,
  getClientRects: ka,
  getDimensions: Ta,
  getScale: Vt,
  isElement: rt,
  isRTL: Pa
};
function ir(e, n) {
  return e.x === n.x && e.y === n.y && e.width === n.width && e.height === n.height;
}
function Ra(e, n) {
  let t = null, r;
  const o = dt(e);
  function l() {
    var s;
    clearTimeout(r), (s = t) == null || s.disconnect(), t = null;
  }
  function a(s, i) {
    s === void 0 && (s = !1), i === void 0 && (i = 1), l();
    const u = e.getBoundingClientRect(), {
      left: c,
      top: d,
      width: m,
      height: f
    } = u;
    if (s || n(), !m || !f)
      return;
    const p = uo(d), g = uo(o.clientWidth - (c + m)), h = uo(o.clientHeight - (d + f)), y = uo(c), v = {
      rootMargin: -p + "px " + -g + "px " + -h + "px " + -y + "px",
      threshold: qe(0, _t(1, i)) || 1
    };
    let $ = !0;
    function k(O) {
      const S = O[0].intersectionRatio;
      if (S !== i) {
        if (!$)
          return a();
        S ? a(!1, S) : r = setTimeout(() => {
          a(!1, 1e-7);
        }, 1e3);
      }
      S === 1 && !ir(u, e.getBoundingClientRect()) && a(), $ = !1;
    }
    try {
      t = new IntersectionObserver(k, {
        ...v,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      t = new IntersectionObserver(k, v);
    }
    t.observe(e);
  }
  return a(!0), l;
}
function $o(e, n, t, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: l = !0,
    elementResize: a = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: i = !1
  } = r, u = ln(e), c = o || l ? [...u ? Xt(u) : [], ...Xt(n)] : [];
  c.forEach((y) => {
    o && y.addEventListener("scroll", t, {
      passive: !0
    }), l && y.addEventListener("resize", t);
  });
  const d = u && s ? Ra(u, t) : null;
  let m = -1, f = null;
  a && (f = new ResizeObserver((y) => {
    let [w] = y;
    w && w.target === u && f && (f.unobserve(n), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      var v;
      (v = f) == null || v.observe(n);
    })), t();
  }), u && !i && f.observe(u), f.observe(n));
  let p, g = i ? Pt(e) : null;
  i && h();
  function h() {
    const y = Pt(e);
    g && !ir(g, y) && t(), g = y, p = requestAnimationFrame(h);
  }
  return t(), () => {
    var y;
    c.forEach((w) => {
      o && w.removeEventListener("scroll", t), l && w.removeEventListener("resize", t);
    }), d == null || d(), (y = f) == null || y.disconnect(), f = null, i && cancelAnimationFrame(p);
  };
}
const Nt = pa, Oo = ca, Gt = ma, sn = da, un = ga, Ba = ia, cn = va, Ma = (e, n, t) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Ia,
    ...t
  }, l = {
    ...o.platform,
    _c: r
  };
  return sa(e, n, {
    ...o,
    platform: l
  });
};
function Aa(e) {
  return e != null && typeof e == "object" && "$el" in e;
}
function Ho(e) {
  if (Aa(e)) {
    const n = e.$el;
    return on(n) && It(n) === "#comment" ? null : n;
  }
  return e;
}
function Lt(e) {
  return typeof e == "function" ? e() : R(e);
}
function La(e) {
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const t = Ho(Lt(e.element));
      return t == null ? {} : Ba({
        element: t,
        padding: e.padding
      }).fn(n);
    }
  };
}
function ur(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Rn(e, n) {
  const t = ur(e);
  return Math.round(n * t) / t;
}
function Ht(e, n, t) {
  t === void 0 && (t = {});
  const r = t.whileElementsMounted, o = _(() => {
    var S;
    return (S = Lt(t.open)) != null ? S : !0;
  }), l = _(() => Lt(t.middleware)), a = _(() => {
    var S;
    return (S = Lt(t.placement)) != null ? S : "bottom";
  }), s = _(() => {
    var S;
    return (S = Lt(t.strategy)) != null ? S : "absolute";
  }), i = _(() => {
    var S;
    return (S = Lt(t.transform)) != null ? S : !0;
  }), u = _(() => Ho(e.value)), c = _(() => Ho(n.value)), d = x(0), m = x(0), f = x(s.value), p = x(a.value), g = xo({}), h = x(!1), y = _(() => {
    const S = {
      position: f.value,
      left: "0",
      top: "0"
    };
    if (!c.value)
      return S;
    const T = Rn(c.value, d.value), M = Rn(c.value, m.value);
    return i.value ? {
      ...S,
      transform: "translate(" + T + "px, " + M + "px)",
      ...ur(c.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: f.value,
      left: T + "px",
      top: M + "px"
    };
  });
  let w;
  function v() {
    if (u.value == null || c.value == null)
      return;
    const S = o.value;
    Ma(u.value, c.value, {
      middleware: l.value,
      placement: a.value,
      strategy: s.value
    }).then((T) => {
      d.value = T.x, m.value = T.y, f.value = T.strategy, p.value = T.placement, g.value = T.middlewareData, h.value = S !== !1;
    });
  }
  function $() {
    typeof w == "function" && (w(), w = void 0);
  }
  function k() {
    if ($(), r === void 0) {
      v();
      return;
    }
    if (u.value != null && c.value != null) {
      w = r(u.value, c.value, v);
      return;
    }
  }
  function O() {
    o.value || (h.value = !1);
  }
  return oe([l, a, s, o], v, {
    flush: "sync"
  }), oe([u, c], k, {
    flush: "sync"
  }), oe(o, O, {
    flush: "sync"
  }), nl() && qn($), {
    x: Mt(d),
    y: Mt(m),
    strategy: Mt(f),
    placement: Mt(p),
    middlewareData: Mt(g),
    isPositioned: Mt(h),
    floatingStyles: y,
    update: v
  };
}
function At(e, n, t) {
  let r = t.initialDeps ?? [], o;
  function l() {
    var a, s, i, u;
    let c;
    t.key && ((a = t.debug) != null && a.call(t)) && (c = Date.now());
    const d = e();
    if (!(d.length !== r.length || d.some((p, g) => r[g] !== p)))
      return o;
    r = d;
    let f;
    if (t.key && ((s = t.debug) != null && s.call(t)) && (f = Date.now()), o = n(...d), t.key && ((i = t.debug) != null && i.call(t))) {
      const p = Math.round((Date.now() - c) * 100) / 100, g = Math.round((Date.now() - f) * 100) / 100, h = g / 16, y = (w, v) => {
        for (w = String(w); w.length < v; )
          w = " " + w;
        return w;
      };
      console.info(
        `%c⏱ ${y(g, 5)} /${y(p, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * h, 120)
        )}deg 100% 31%);`,
        t == null ? void 0 : t.key
      );
    }
    return (u = t == null ? void 0 : t.onChange) == null || u.call(t, o), o;
  }
  return l.updateDeps = (a) => {
    r = a;
  }, l;
}
function Mo(e, n) {
  if (e === void 0)
    throw new Error("Unexpected undefined");
  return e;
}
const Va = (e, n) => Math.abs(e - n) < 1, Fa = (e, n, t) => {
  let r;
  return function(...o) {
    e.clearTimeout(r), r = e.setTimeout(() => n.apply(this, o), t);
  };
}, za = (e) => e, ja = (e) => {
  const n = Math.max(e.startIndex - e.overscan, 0), t = Math.min(e.endIndex + e.overscan, e.count - 1), r = [];
  for (let o = n; o <= t; o++)
    r.push(o);
  return r;
}, Na = (e, n) => {
  const t = e.scrollElement;
  if (!t)
    return;
  const r = e.targetWindow;
  if (!r)
    return;
  const o = (a) => {
    const { width: s, height: i } = a;
    n({ width: Math.round(s), height: Math.round(i) });
  };
  if (o(t.getBoundingClientRect()), !r.ResizeObserver)
    return () => {
    };
  const l = new r.ResizeObserver((a) => {
    const s = () => {
      const i = a[0];
      if (i != null && i.borderBoxSize) {
        const u = i.borderBoxSize[0];
        if (u) {
          o({ width: u.inlineSize, height: u.blockSize });
          return;
        }
      }
      o(t.getBoundingClientRect());
    };
    e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(s) : s();
  });
  return l.observe(t, { box: "border-box" }), () => {
    l.unobserve(t);
  };
}, Bn = {
  passive: !0
}, Mn = typeof window > "u" ? !0 : "onscrollend" in window, Ga = (e, n) => {
  const t = e.scrollElement;
  if (!t)
    return;
  const r = e.targetWindow;
  if (!r)
    return;
  let o = 0;
  const l = e.options.useScrollendEvent && Mn ? () => {
  } : Fa(
    r,
    () => {
      n(o, !1);
    },
    e.options.isScrollingResetDelay
  ), a = (c) => () => {
    const { horizontal: d, isRtl: m } = e.options;
    o = d ? t.scrollLeft * (m && -1 || 1) : t.scrollTop, l(), n(o, c);
  }, s = a(!0), i = a(!1);
  i(), t.addEventListener("scroll", s, Bn);
  const u = e.options.useScrollendEvent && Mn;
  return u && t.addEventListener("scrollend", i, Bn), () => {
    t.removeEventListener("scroll", s), u && t.removeEventListener("scrollend", i);
  };
}, Ha = (e, n, t) => {
  if (n != null && n.borderBoxSize) {
    const r = n.borderBoxSize[0];
    if (r)
      return Math.round(
        r[t.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  return Math.round(
    e.getBoundingClientRect()[t.options.horizontal ? "width" : "height"]
  );
}, Ua = (e, {
  adjustments: n = 0,
  behavior: t
}, r) => {
  var o, l;
  const a = e + n;
  (l = (o = r.scrollElement) == null ? void 0 : o.scrollTo) == null || l.call(o, {
    [r.options.horizontal ? "left" : "top"]: a,
    behavior: t
  });
};
class Wa {
  constructor(n) {
    this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.scrollToIndexTimeoutId = null, this.measurementsCache = [], this.itemSizeCache = /* @__PURE__ */ new Map(), this.pendingMeasuredCacheIndexes = [], this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this.elementsCache = /* @__PURE__ */ new Map(), this.observer = /* @__PURE__ */ (() => {
      let t = null;
      const r = () => t || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : t = new this.targetWindow.ResizeObserver((o) => {
        o.forEach((l) => {
          const a = () => {
            this._measureElement(l.target, l);
          };
          this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(a) : a();
        });
      }));
      return {
        disconnect: () => {
          var o;
          (o = r()) == null || o.disconnect(), t = null;
        },
        observe: (o) => {
          var l;
          return (l = r()) == null ? void 0 : l.observe(o, { box: "border-box" });
        },
        unobserve: (o) => {
          var l;
          return (l = r()) == null ? void 0 : l.unobserve(o);
        }
      };
    })(), this.range = null, this.setOptions = (t) => {
      Object.entries(t).forEach(([r, o]) => {
        typeof o > "u" && delete t[r];
      }), this.options = {
        debug: !1,
        initialOffset: 0,
        overscan: 1,
        paddingStart: 0,
        paddingEnd: 0,
        scrollPaddingStart: 0,
        scrollPaddingEnd: 0,
        horizontal: !1,
        getItemKey: za,
        rangeExtractor: ja,
        onChange: () => {
        },
        measureElement: Ha,
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
      var r, o;
      (o = (r = this.options).onChange) == null || o.call(r, this, t);
    }, this.maybeNotify = At(
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
      const r = this.options.enabled ? this.options.getScrollElement() : null;
      if (this.scrollElement !== r) {
        if (this.cleanup(), !r) {
          this.maybeNotify();
          return;
        }
        this.scrollElement = r, this.scrollElement && "ownerDocument" in this.scrollElement ? this.targetWindow = this.scrollElement.ownerDocument.defaultView : this.targetWindow = ((t = this.scrollElement) == null ? void 0 : t.window) ?? null, this.elementsCache.forEach((o) => {
          this.observer.observe(o);
        }), this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        }), this.unsubs.push(
          this.options.observeElementRect(this, (o) => {
            this.scrollRect = o, this.maybeNotify();
          })
        ), this.unsubs.push(
          this.options.observeElementOffset(this, (o, l) => {
            this.scrollAdjustments = 0, this.scrollDirection = l ? this.getScrollOffset() < o ? "forward" : "backward" : null, this.scrollOffset = o, this.isScrolling = l, this.maybeNotify();
          })
        );
      }
    }, this.getSize = () => this.options.enabled ? (this.scrollRect = this.scrollRect ?? this.options.initialRect, this.scrollRect[this.options.horizontal ? "width" : "height"]) : (this.scrollRect = null, 0), this.getScrollOffset = () => this.options.enabled ? (this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset == "function" ? this.options.initialOffset() : this.options.initialOffset), this.scrollOffset) : (this.scrollOffset = null, 0), this.getFurthestMeasurement = (t, r) => {
      const o = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map();
      for (let a = r - 1; a >= 0; a--) {
        const s = t[a];
        if (o.has(s.lane))
          continue;
        const i = l.get(
          s.lane
        );
        if (i == null || s.end > i.end ? l.set(s.lane, s) : s.end < i.end && o.set(s.lane, !0), o.size === this.options.lanes)
          break;
      }
      return l.size === this.options.lanes ? Array.from(l.values()).sort((a, s) => a.end === s.end ? a.index - s.index : a.end - s.end)[0] : void 0;
    }, this.getMeasurementOptions = At(
      () => [
        this.options.count,
        this.options.paddingStart,
        this.options.scrollMargin,
        this.options.getItemKey,
        this.options.enabled
      ],
      (t, r, o, l, a) => (this.pendingMeasuredCacheIndexes = [], {
        count: t,
        paddingStart: r,
        scrollMargin: o,
        getItemKey: l,
        enabled: a
      }),
      {
        key: !1
      }
    ), this.getMeasurements = At(
      () => [this.getMeasurementOptions(), this.itemSizeCache],
      ({ count: t, paddingStart: r, scrollMargin: o, getItemKey: l, enabled: a }, s) => {
        if (!a)
          return this.measurementsCache = [], this.itemSizeCache.clear(), [];
        this.measurementsCache.length === 0 && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((c) => {
          this.itemSizeCache.set(c.key, c.size);
        }));
        const i = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [];
        const u = this.measurementsCache.slice(0, i);
        for (let c = i; c < t; c++) {
          const d = l(c), m = this.options.lanes === 1 ? u[c - 1] : this.getFurthestMeasurement(u, c), f = m ? m.end + this.options.gap : r + o, p = s.get(d), g = typeof p == "number" ? p : this.options.estimateSize(c), h = f + g, y = m ? m.lane : c % this.options.lanes;
          u[c] = {
            index: c,
            start: f,
            size: g,
            end: h,
            key: d,
            lane: y
          };
        }
        return this.measurementsCache = u, u;
      },
      {
        key: process.env.NODE_ENV !== "production" && "getMeasurements",
        debug: () => this.options.debug
      }
    ), this.calculateRange = At(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (t, r, o, l) => this.range = t.length > 0 && r > 0 ? qa({
        measurements: t,
        outerSize: r,
        scrollOffset: o,
        lanes: l
      }) : null,
      {
        key: process.env.NODE_ENV !== "production" && "calculateRange",
        debug: () => this.options.debug
      }
    ), this.getVirtualIndexes = At(
      () => {
        let t = null, r = null;
        const o = this.calculateRange();
        return o && (t = o.startIndex, r = o.endIndex), this.maybeNotify.updateDeps([this.isScrolling, t, r]), [
          this.options.rangeExtractor,
          this.options.overscan,
          this.options.count,
          t,
          r
        ];
      },
      (t, r, o, l, a) => l === null || a === null ? [] : t({
        startIndex: l,
        endIndex: a,
        overscan: r,
        count: o
      }),
      {
        key: process.env.NODE_ENV !== "production" && "getVirtualIndexes",
        debug: () => this.options.debug
      }
    ), this.indexFromElement = (t) => {
      const r = this.options.indexAttribute, o = t.getAttribute(r);
      return o ? parseInt(o, 10) : (console.warn(
        `Missing attribute name '${r}={index}' on measured element.`
      ), -1);
    }, this._measureElement = (t, r) => {
      const o = this.indexFromElement(t), l = this.measurementsCache[o];
      if (!l)
        return;
      const a = l.key, s = this.elementsCache.get(a);
      s !== t && (s && this.observer.unobserve(s), this.observer.observe(t), this.elementsCache.set(a, t)), t.isConnected && this.resizeItem(o, this.options.measureElement(t, r, this));
    }, this.resizeItem = (t, r) => {
      const o = this.measurementsCache[t];
      if (!o)
        return;
      const l = this.itemSizeCache.get(o.key) ?? o.size, a = r - l;
      a !== 0 && ((this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(o, a, this) : o.start < this.getScrollOffset() + this.scrollAdjustments) && (process.env.NODE_ENV !== "production" && this.options.debug && console.info("correction", a), this._scrollToOffset(this.getScrollOffset(), {
        adjustments: this.scrollAdjustments += a,
        behavior: void 0
      })), this.pendingMeasuredCacheIndexes.push(o.index), this.itemSizeCache = new Map(this.itemSizeCache.set(o.key, r)), this.notify(!1));
    }, this.measureElement = (t) => {
      if (!t) {
        this.elementsCache.forEach((r, o) => {
          r.isConnected || (this.observer.unobserve(r), this.elementsCache.delete(o));
        });
        return;
      }
      this._measureElement(t, void 0);
    }, this.getVirtualItems = At(
      () => [this.getVirtualIndexes(), this.getMeasurements()],
      (t, r) => {
        const o = [];
        for (let l = 0, a = t.length; l < a; l++) {
          const s = t[l], i = r[s];
          o.push(i);
        }
        return o;
      },
      {
        key: process.env.NODE_ENV !== "production" && "getVirtualItems",
        debug: () => this.options.debug
      }
    ), this.getVirtualItemForOffset = (t) => {
      const r = this.getMeasurements();
      if (r.length !== 0)
        return Mo(
          r[cr(
            0,
            r.length - 1,
            (o) => Mo(r[o]).start,
            t
          )]
        );
    }, this.getOffsetForAlignment = (t, r, o = 0) => {
      const l = this.getSize(), a = this.getScrollOffset();
      r === "auto" && (r = t >= a + l ? "end" : "start"), r === "center" ? t += (o - l) / 2 : r === "end" && (t -= l);
      const s = this.options.horizontal ? "scrollWidth" : "scrollHeight", u = (this.scrollElement ? "document" in this.scrollElement ? this.scrollElement.document.documentElement[s] : this.scrollElement[s] : 0) - l;
      return Math.max(Math.min(u, t), 0);
    }, this.getOffsetForIndex = (t, r = "auto") => {
      t = Math.max(0, Math.min(t, this.options.count - 1));
      const o = this.measurementsCache[t];
      if (!o)
        return;
      const l = this.getSize(), a = this.getScrollOffset();
      if (r === "auto")
        if (o.end >= a + l - this.options.scrollPaddingEnd)
          r = "end";
        else if (o.start <= a + this.options.scrollPaddingStart)
          r = "start";
        else
          return [a, r];
      const s = r === "end" ? o.end + this.options.scrollPaddingEnd : o.start - this.options.scrollPaddingStart;
      return [
        this.getOffsetForAlignment(s, r, o.size),
        r
      ];
    }, this.isDynamicMode = () => this.elementsCache.size > 0, this.cancelScrollToIndex = () => {
      this.scrollToIndexTimeoutId !== null && this.targetWindow && (this.targetWindow.clearTimeout(this.scrollToIndexTimeoutId), this.scrollToIndexTimeoutId = null);
    }, this.scrollToOffset = (t, { align: r = "start", behavior: o } = {}) => {
      this.cancelScrollToIndex(), o === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      ), this._scrollToOffset(this.getOffsetForAlignment(t, r), {
        adjustments: void 0,
        behavior: o
      });
    }, this.scrollToIndex = (t, { align: r = "auto", behavior: o } = {}) => {
      t = Math.max(0, Math.min(t, this.options.count - 1)), this.cancelScrollToIndex(), o === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      );
      const l = this.getOffsetForIndex(t, r);
      if (!l) return;
      const [a, s] = l;
      this._scrollToOffset(a, { adjustments: void 0, behavior: o }), o !== "smooth" && this.isDynamicMode() && this.targetWindow && (this.scrollToIndexTimeoutId = this.targetWindow.setTimeout(() => {
        if (this.scrollToIndexTimeoutId = null, this.elementsCache.has(
          this.options.getItemKey(t)
        )) {
          const [u] = Mo(
            this.getOffsetForIndex(t, s)
          );
          Va(u, this.getScrollOffset()) || this.scrollToIndex(t, { align: s, behavior: o });
        } else
          this.scrollToIndex(t, { align: s, behavior: o });
      }));
    }, this.scrollBy = (t, { behavior: r } = {}) => {
      this.cancelScrollToIndex(), r === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      ), this._scrollToOffset(this.getScrollOffset() + t, {
        adjustments: void 0,
        behavior: r
      });
    }, this.getTotalSize = () => {
      var t;
      const r = this.getMeasurements();
      let o;
      if (r.length === 0)
        o = this.options.paddingStart;
      else if (this.options.lanes === 1)
        o = ((t = r[r.length - 1]) == null ? void 0 : t.end) ?? 0;
      else {
        const l = Array(this.options.lanes).fill(null);
        let a = r.length - 1;
        for (; a >= 0 && l.some((s) => s === null); ) {
          const s = r[a];
          l[s.lane] === null && (l[s.lane] = s.end), a--;
        }
        o = Math.max(...l.filter((s) => s !== null));
      }
      return Math.max(
        o - this.options.scrollMargin + this.options.paddingEnd,
        0
      );
    }, this._scrollToOffset = (t, {
      adjustments: r,
      behavior: o
    }) => {
      this.options.scrollToFn(t, { behavior: o, adjustments: r }, this);
    }, this.measure = () => {
      this.itemSizeCache = /* @__PURE__ */ new Map(), this.notify(!1);
    }, this.setOptions(n);
  }
}
const cr = (e, n, t, r) => {
  for (; e <= n; ) {
    const o = (e + n) / 2 | 0, l = t(o);
    if (l < r)
      e = o + 1;
    else if (l > r)
      n = o - 1;
    else
      return o;
  }
  return e > 0 ? e - 1 : 0;
};
function qa({
  measurements: e,
  outerSize: n,
  scrollOffset: t,
  lanes: r
}) {
  const o = e.length - 1, l = (i) => e[i].start;
  if (e.length <= r)
    return {
      startIndex: 0,
      endIndex: o
    };
  let a = cr(
    0,
    o,
    l,
    t
  ), s = a;
  if (r === 1)
    for (; s < o && e[s].end < t + n; )
      s++;
  else if (r > 1) {
    const i = Array(r).fill(0);
    for (; s < o && i.some((c) => c < t + n); ) {
      const c = e[s];
      i[c.lane] = c.end, s++;
    }
    const u = Array(r).fill(t + n);
    for (; a >= 0 && u.some((c) => c >= t); ) {
      const c = e[a];
      u[c.lane] = c.start, a--;
    }
    a = Math.max(0, a - a % r), s = Math.min(o, s + (r - 1 - s % r));
  }
  return { startIndex: a, endIndex: s };
}
function Ka(e) {
  const n = new Wa(R(e)), t = xo(n), r = n._didMount();
  return oe(
    () => R(e).getScrollElement(),
    (o) => {
      o && n._willUpdate();
    },
    {
      immediate: !0
    }
  ), oe(
    () => R(e),
    (o) => {
      n.setOptions({
        ...o,
        onChange: (l, a) => {
          var s;
          _n(t), (s = o.onChange) == null || s.call(o, l, a);
        }
      }), n._willUpdate(), _n(t);
    },
    {
      immediate: !0
    }
  ), qn(r), t;
}
function Ya(e) {
  return Ka(
    _(() => ({
      observeElementRect: Na,
      observeElementOffset: Ga,
      scrollToFn: Ua,
      ...R(e)
    }))
  );
}
function dr(e, n, t) {
  let r = x(t == null ? void 0 : t.value), o = _(() => e.value !== void 0);
  return [_(() => o.value ? e.value : r.value), function(l) {
    return o.value || (r.value = l), n == null ? void 0 : n(l);
  }];
}
function dn(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((n) => setTimeout(() => {
    throw n;
  }));
}
function Ot() {
  let e = [], n = { addEventListener(t, r, o, l) {
    return t.addEventListener(r, o, l), n.add(() => t.removeEventListener(r, o, l));
  }, requestAnimationFrame(...t) {
    let r = requestAnimationFrame(...t);
    n.add(() => cancelAnimationFrame(r));
  }, nextFrame(...t) {
    n.requestAnimationFrame(() => {
      n.requestAnimationFrame(...t);
    });
  }, setTimeout(...t) {
    let r = setTimeout(...t);
    n.add(() => clearTimeout(r));
  }, microTask(...t) {
    let r = { current: !0 };
    return dn(() => {
      r.current && t[0]();
    }), n.add(() => {
      r.current = !1;
    });
  }, style(t, r, o) {
    let l = t.style.getPropertyValue(r);
    return Object.assign(t.style, { [r]: o }), this.add(() => {
      Object.assign(t.style, { [r]: l });
    });
  }, group(t) {
    let r = Ot();
    return t(r), this.add(() => r.dispose());
  }, add(t) {
    return e.push(t), () => {
      let r = e.indexOf(t);
      if (r >= 0) for (let o of e.splice(r, 1)) o();
    };
  }, dispose() {
    for (let t of e.splice(0)) t();
  } };
  return n;
}
function Ja() {
  let e = Ot();
  return ve(() => e.dispose()), e;
}
function Xa() {
  let e = Ja();
  return (n) => {
    e.dispose(), e.nextFrame(n);
  };
}
let Qa = 0;
function Za() {
  return ++Qa;
}
function Pe() {
  return Za();
}
function G(e) {
  var n;
  if (e == null || e.value == null) return null;
  let t = (n = e.value.$el) != null ? n : e.value;
  return t instanceof Node ? t : null;
}
function Se(e, n, ...t) {
  if (e in n) {
    let o = n[e];
    return typeof o == "function" ? o(...t) : o;
  }
  let r = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map((o) => `"${o}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(r, Se), r;
}
var es = Object.defineProperty, ts = (e, n, t) => n in e ? es(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, An = (e, n, t) => (ts(e, typeof n != "symbol" ? n + "" : n, t), t);
let os = class {
  constructor() {
    An(this, "current", this.detect()), An(this, "currentId", 0);
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
}, ro = new os();
function Qe(e) {
  var n, t;
  return ro.isServer ? null : e ? "ownerDocument" in e ? e.ownerDocument : "value" in e ? (t = (n = G(e)) == null ? void 0 : n.ownerDocument) != null ? t : document : null : document;
}
let bo = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var Ne = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(Ne || {}), Qt = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Qt || {}), ns = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(ns || {});
function So(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(bo)).sort((n, t) => Math.sign((n.tabIndex || Number.MAX_SAFE_INTEGER) - (t.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var fn = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(fn || {});
function fr(e, n = 0) {
  var t;
  return e === ((t = Qe(e)) == null ? void 0 : t.body) ? !1 : Se(n, { 0() {
    return e.matches(bo);
  }, 1() {
    let r = e;
    for (; r !== null; ) {
      if (r.matches(bo)) return !0;
      r = r.parentElement;
    }
    return !1;
  } });
}
var rs = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(rs || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function Dt(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let ls = ["textarea", "input"].join(",");
function as(e) {
  var n, t;
  return (t = (n = e == null ? void 0 : e.matches) == null ? void 0 : n.call(e, ls)) != null ? t : !1;
}
function pr(e, n = (t) => t) {
  return e.slice().sort((t, r) => {
    let o = n(t), l = n(r);
    if (o === null || l === null) return 0;
    let a = o.compareDocumentPosition(l);
    return a & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : a & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function et(e, n, { sorted: t = !0, relativeTo: r = null, skipElements: o = [] } = {}) {
  var l;
  let a = (l = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? l : document, s = Array.isArray(e) ? t ? pr(e) : e : So(e);
  o.length > 0 && s.length > 1 && (s = s.filter((p) => !o.includes(p))), r = r ?? a.activeElement;
  let i = (() => {
    if (n & 5) return 1;
    if (n & 10) return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), u = (() => {
    if (n & 1) return 0;
    if (n & 2) return Math.max(0, s.indexOf(r)) - 1;
    if (n & 4) return Math.max(0, s.indexOf(r)) + 1;
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
  } while (f !== a.activeElement);
  return n & 6 && as(f) && f.select(), 2;
}
function mr() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function ss() {
  return /Android/gi.test(window.navigator.userAgent);
}
function vr() {
  return mr() || ss();
}
function Kt(e, n, t, r) {
  ro.isServer || Ie((o) => {
    e.value && (document.addEventListener(n, t, r), o(() => document.removeEventListener(n, t, r)));
  });
}
function gr(e, n, t, r) {
  ro.isServer || Ie((o) => {
    e.value && (window.addEventListener(n, t, r), o(() => window.removeEventListener(n, t, r)));
  });
}
const Ln = 30;
function pn(e, n, t = _(() => !0)) {
  function r(a, s) {
    if (a.defaultPrevented) return;
    let i = s(a);
    if (i === null || !i.getRootNode().contains(i)) return;
    let u = function c(d) {
      return typeof d == "function" ? c(d()) : Array.isArray(d) || d instanceof Set ? d : [d];
    }(e);
    for (let c of u) {
      if (c === null) continue;
      let d = c instanceof HTMLElement ? c : G(c);
      if (d != null && d.contains(i) || a.composed && a.composedPath().includes(d)) return;
    }
    return !fr(i, fn.Loose) && i.tabIndex !== -1 && a.preventDefault(), n(a, i);
  }
  let o = x(null);
  Kt(t, "pointerdown", (a) => {
    var s, i;
    o.value = ((i = (s = a.composedPath) == null ? void 0 : s.call(a)) == null ? void 0 : i[0]) || a.target;
  }, !0), Kt(t, "mousedown", (a) => {
    var s, i;
    o.value = ((i = (s = a.composedPath) == null ? void 0 : s.call(a)) == null ? void 0 : i[0]) || a.target;
  }, !0), Kt(t, "click", (a) => {
    vr() || o.value && (r(a, () => o.value), o.value = null);
  }, !0);
  let l = { x: 0, y: 0 };
  Kt(t, "touchstart", (a) => {
    l.x = a.touches[0].clientX, l.y = a.touches[0].clientY;
  }, !0), Kt(t, "touchend", (a) => {
    let s = { x: a.changedTouches[0].clientX, y: a.changedTouches[0].clientY };
    if (!(Math.abs(s.x - l.x) >= Ln || Math.abs(s.y - l.y) >= Ln)) return r(a, () => a.target instanceof HTMLElement ? a.target : null);
  }, !0), gr(t, "blur", (a) => r(a, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
function Vn(e, n) {
  if (e) return e;
  let t = n ?? "button";
  if (typeof t == "string" && t.toLowerCase() === "button") return "button";
}
function mn(e, n) {
  let t = x(Vn(e.value.type, e.value.as));
  return ne(() => {
    t.value = Vn(e.value.type, e.value.as);
  }), Ie(() => {
    var r;
    t.value || G(n) && G(n) instanceof HTMLButtonElement && !((r = G(n)) != null && r.hasAttribute("type")) && (t.value = "button");
  }), t;
}
function Fn(e) {
  return [e.screenX, e.screenY];
}
function is() {
  let e = x([-1, -1]);
  return { wasMoved(n) {
    let t = Fn(n);
    return e.value[0] === t[0] && e.value[1] === t[1] ? !1 : (e.value = t, !0);
  }, update(n) {
    e.value = Fn(n);
  } };
}
function us({ container: e, accept: n, walk: t, enabled: r }) {
  Ie(() => {
    let o = e.value;
    if (!o || r !== void 0 && !r.value) return;
    let l = Qe(e);
    if (!l) return;
    let a = Object.assign((i) => n(i), { acceptNode: n }), s = l.createTreeWalker(o, NodeFilter.SHOW_ELEMENT, a, !1);
    for (; s.nextNode(); ) t(s.currentNode);
  });
}
var Xe = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(Xe || {}), xt = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(xt || {});
function ge({ visible: e = !0, features: n = 0, ourProps: t, theirProps: r, ...o }) {
  var l;
  let a = br(r, t), s = Object.assign(o, { props: a });
  if (e || n & 2 && a.static) return Ao(s);
  if (n & 1) {
    let i = (l = a.unmount) == null || l ? 0 : 1;
    return Se(i, { 0() {
      return null;
    }, 1() {
      return Ao({ ...o, props: { ...a, hidden: !0, style: { display: "none" } } });
    } });
  }
  return Ao(s);
}
function Ao({ props: e, attrs: n, slots: t, slot: r, name: o }) {
  var l, a;
  let { as: s, ...i } = Ut(e, ["unmount", "static"]), u = (l = t.default) == null ? void 0 : l.call(t, r), c = {};
  if (r) {
    let d = !1, m = [];
    for (let [f, p] of Object.entries(r)) typeof p == "boolean" && (d = !0), p === !0 && m.push(f);
    d && (c["data-headlessui-state"] = m.join(" "));
  }
  if (s === "template") {
    if (u = hr(u ?? []), Object.keys(i).length > 0 || Object.keys(n).length > 0) {
      let [d, ...m] = u ?? [];
      if (!cs(d) || m.length > 0) throw new Error(['Passing props on "template"!', "", `The current component <${o} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(i).concat(Object.keys(n)).map((g) => g.trim()).filter((g, h, y) => y.indexOf(g) === h).sort((g, h) => g.localeCompare(h)).map((g) => `  - ${g}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((g) => `  - ${g}`).join(`
`)].join(`
`));
      let f = br((a = d.props) != null ? a : {}, i, c), p = Kn(d, f, !0);
      for (let g in f) g.startsWith("on") && (p.props || (p.props = {}), p.props[g] = f[g]);
      return p;
    }
    return Array.isArray(u) && u.length === 1 ? u[0] : u;
  }
  return le(s, Object.assign({}, i, c), { default: () => u });
}
function hr(e) {
  return e.flatMap((n) => n.type === we ? hr(n.children) : [n]);
}
function br(...e) {
  if (e.length === 0) return {};
  if (e.length === 1) return e[0];
  let n = {}, t = {};
  for (let r of e) for (let o in r) o.startsWith("on") && typeof r[o] == "function" ? (t[o] != null || (t[o] = []), t[o].push(r[o])) : n[o] = r[o];
  if (n.disabled || n["aria-disabled"]) return Object.assign(n, Object.fromEntries(Object.keys(t).map((r) => [r, void 0])));
  for (let r in t) Object.assign(n, { [r](o, ...l) {
    let a = t[r];
    for (let s of a) {
      if (o instanceof Event && o.defaultPrevented) return;
      s(o, ...l);
    }
  } });
  return n;
}
function yr(e) {
  let n = Object.assign({}, e);
  for (let t in n) n[t] === void 0 && delete n[t];
  return n;
}
function Ut(e, n = []) {
  let t = Object.assign({}, e);
  for (let r of n) r in t && delete t[r];
  return t;
}
function cs(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
var ct = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(ct || {});
let gt = L({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: n, attrs: t }) {
  return () => {
    var r;
    let { features: o, ...l } = e, a = { "aria-hidden": (o & 2) === 2 ? !0 : (r = l["aria-hidden"]) != null ? r : void 0, hidden: (o & 4) === 4 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(o & 4) === 4 && (o & 2) !== 2 && { display: "none" } } };
    return ge({ ourProps: a, theirProps: l, slot: {}, attrs: t, slots: n, name: "Hidden" });
  };
} }), xr = Symbol("Context");
var $e = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))($e || {});
function ds() {
  return Wt() !== null;
}
function Wt() {
  return se(xr, null);
}
function vn(e) {
  me(xr, e);
}
var _e = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(_e || {}), wr = ((e) => (e[e.Left = 0] = "Left", e[e.Right = 2] = "Right", e))(wr || {});
function fs(e) {
  function n() {
    document.readyState !== "loading" && (e(), document.removeEventListener("DOMContentLoaded", n));
  }
  typeof window < "u" && typeof document < "u" && (document.addEventListener("DOMContentLoaded", n), n());
}
let pt = [];
fs(() => {
  function e(n) {
    if (!(n.target instanceof HTMLElement) || n.target === document.body || pt[0] === n.target) return;
    let t = n.target;
    t = t.closest(bo), pt.unshift(t ?? n.target), pt = pt.filter((r) => r != null && r.isConnected), pt.splice(10);
  }
  window.addEventListener("click", e, { capture: !0 }), window.addEventListener("mousedown", e, { capture: !0 }), window.addEventListener("focus", e, { capture: !0 }), document.body.addEventListener("click", e, { capture: !0 }), document.body.addEventListener("mousedown", e, { capture: !0 }), document.body.addEventListener("focus", e, { capture: !0 });
});
function ps(e) {
  throw new Error("Unexpected object: " + e);
}
var ze = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(ze || {});
function zn(e, n) {
  let t = n.resolveItems();
  if (t.length <= 0) return null;
  let r = n.resolveActiveIndex(), o = r ?? -1;
  switch (e.focus) {
    case 0: {
      for (let l = 0; l < t.length; ++l) if (!n.resolveDisabled(t[l], l, t)) return l;
      return r;
    }
    case 1: {
      o === -1 && (o = t.length);
      for (let l = o - 1; l >= 0; --l) if (!n.resolveDisabled(t[l], l, t)) return l;
      return r;
    }
    case 2: {
      for (let l = o + 1; l < t.length; ++l) if (!n.resolveDisabled(t[l], l, t)) return l;
      return r;
    }
    case 3: {
      for (let l = t.length - 1; l >= 0; --l) if (!n.resolveDisabled(t[l], l, t)) return l;
      return r;
    }
    case 4: {
      for (let l = 0; l < t.length; ++l) if (n.resolveId(t[l], l, t) === e.id) return l;
      return r;
    }
    case 5:
      return null;
    default:
      ps(e);
  }
}
function kr(e = {}, n = null, t = []) {
  for (let [r, o] of Object.entries(e)) _r(t, Cr(n, r), o);
  return t;
}
function Cr(e, n) {
  return e ? e + "[" + n + "]" : n;
}
function _r(e, n, t) {
  if (Array.isArray(t)) for (let [r, o] of t.entries()) _r(e, Cr(n, r.toString()), o);
  else t instanceof Date ? e.push([n, t.toISOString()]) : typeof t == "boolean" ? e.push([n, t ? "1" : "0"]) : typeof t == "string" ? e.push([n, t]) : typeof t == "number" ? e.push([n, `${t}`]) : t == null ? e.push([n, ""]) : kr(t, n, e);
}
function ms(e) {
  var n, t;
  let r = (n = e == null ? void 0 : e.form) != null ? n : e.closest("form");
  if (r) {
    for (let o of r.elements) if (o !== e && (o.tagName === "INPUT" && o.type === "submit" || o.tagName === "BUTTON" && o.type === "submit" || o.nodeName === "INPUT" && o.type === "image")) {
      o.click();
      return;
    }
    (t = r.requestSubmit) == null || t.call(r);
  }
}
function vs(e, n) {
  return e === n;
}
var gs = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(gs || {}), hs = ((e) => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(hs || {}), bs = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Focus = 1] = "Focus", e[e.Other = 2] = "Other", e))(bs || {});
let $r = Symbol("ComboboxContext");
function Rt(e) {
  let n = se($r, null);
  if (n === null) {
    let t = new Error(`<${e} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t, Rt), t;
  }
  return n;
}
let Or = Symbol("VirtualContext"), ys = L({ name: "VirtualProvider", setup(e, { slots: n }) {
  let t = Rt("VirtualProvider"), r = _(() => {
    let s = G(t.optionsRef);
    if (!s) return { start: 0, end: 0 };
    let i = window.getComputedStyle(s);
    return { start: parseFloat(i.paddingBlockStart || i.paddingTop), end: parseFloat(i.paddingBlockEnd || i.paddingBottom) };
  }), o = Ya(_(() => ({ scrollPaddingStart: r.value.start, scrollPaddingEnd: r.value.end, count: t.virtual.value.options.length, estimateSize() {
    return 40;
  }, getScrollElement() {
    return G(t.optionsRef);
  }, overscan: 12 }))), l = _(() => {
    var s;
    return (s = t.virtual.value) == null ? void 0 : s.options;
  }), a = x(0);
  return oe([l], () => {
    a.value += 1;
  }), me(Or, t.virtual.value ? o : null), () => [le("div", { style: { position: "relative", width: "100%", height: `${o.value.getTotalSize()}px` }, ref: (s) => {
    s && t.activationTrigger.value !== 0 && t.activeOptionIndex.value !== null && t.virtual.value.options.length > t.activeOptionIndex.value && o.value.scrollToIndex(t.activeOptionIndex.value);
  } }, o.value.getVirtualItems().map((s) => Kn(n.default({ option: t.virtual.value.options[s.index], open: t.comboboxState.value === 0 })[0], { key: `${a.value}-${s.index}`, "data-index": s.index, "aria-setsize": t.virtual.value.options.length, "aria-posinset": s.index + 1, style: { position: "absolute", top: 0, left: 0, transform: `translateY(${s.start}px)`, overflowAnchor: "none" } })))];
} }), gn = L({ name: "Combobox", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: !1 }, by: { type: [String, Function], nullable: !0, default: null }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, form: { type: String, optional: !0 }, name: { type: String, optional: !0 }, nullable: { type: Boolean, default: !1 }, multiple: { type: [Boolean], default: !1 }, immediate: { type: [Boolean], default: !1 }, virtual: { type: Object, default: null } }, inheritAttrs: !1, setup(e, { slots: n, attrs: t, emit: r }) {
  let o = x(1), l = x(null), a = x(null), s = x(null), i = x(null), u = x({ static: !1, hold: !1 }), c = x([]), d = x(null), m = x(2), f = x(!1);
  function p(b = (E) => E) {
    let E = d.value !== null ? c.value[d.value] : null, H = b(c.value.slice()), z = H.length > 0 && H[0].dataRef.order.value !== null ? H.sort((F, Y) => F.dataRef.order.value - Y.dataRef.order.value) : pr(H, (F) => G(F.dataRef.domRef)), K = E ? z.indexOf(E) : null;
    return K === -1 && (K = null), { options: z, activeOptionIndex: K };
  }
  let g = _(() => e.multiple ? 1 : 0), h = _(() => e.nullable), [y, w] = dr(_(() => e.modelValue), (b) => r("update:modelValue", b), _(() => e.defaultValue)), v = _(() => y.value === void 0 ? Se(g.value, { 1: [], 0: void 0 }) : y.value), $ = null, k = null;
  function O(b) {
    return Se(g.value, { 0() {
      return w == null ? void 0 : w(b);
    }, 1: () => {
      let E = bt(T.value.value).slice(), H = bt(b), z = E.findIndex((K) => T.compare(H, bt(K)));
      return z === -1 ? E.push(H) : E.splice(z, 1), w == null ? void 0 : w(E);
    } });
  }
  let S = _(() => {
    var b;
    return (b = e.virtual) == null ? void 0 : b.options;
  });
  oe([S], ([b], [E]) => {
    if (T.virtual.value && b && E && d.value !== null) {
      let H = b.indexOf(E[d.value]);
      H !== -1 ? d.value = H : d.value = null;
    }
  });
  let T = { comboboxState: o, value: v, mode: g, compare(b, E) {
    if (typeof e.by == "string") {
      let H = e.by;
      return (b == null ? void 0 : b[H]) === (E == null ? void 0 : E[H]);
    }
    return e.by === null ? vs(b, E) : e.by(b, E);
  }, calculateIndex(b) {
    return T.virtual.value ? e.by === null ? T.virtual.value.options.indexOf(b) : T.virtual.value.options.findIndex((E) => T.compare(E, b)) : c.value.findIndex((E) => T.compare(E.dataRef.value, b));
  }, defaultValue: _(() => e.defaultValue), nullable: h, immediate: _(() => e.immediate), virtual: _(() => {
    var b;
    return e.virtual ? { options: e.virtual.options, disabled: (b = e.virtual.disabled) != null ? b : () => !1 } : null;
  }), inputRef: a, labelRef: l, buttonRef: s, optionsRef: i, disabled: _(() => e.disabled), options: c, change(b) {
    w(b);
  }, activeOptionIndex: _(() => {
    if (f.value && d.value === null && (T.virtual.value ? T.virtual.value.options.length > 0 : c.value.length > 0)) {
      if (T.virtual.value) {
        let E = T.virtual.value.options.findIndex((H) => {
          var z;
          return !((z = T.virtual.value) != null && z.disabled(H));
        });
        if (E !== -1) return E;
      }
      let b = c.value.findIndex((E) => !E.dataRef.disabled);
      if (b !== -1) return b;
    }
    return d.value;
  }), activationTrigger: m, optionsPropsRef: u, closeCombobox() {
    f.value = !1, !e.disabled && o.value !== 1 && (o.value = 1, d.value = null);
  }, openCombobox() {
    if (f.value = !0, !e.disabled && o.value !== 0) {
      if (T.value.value) {
        let b = T.calculateIndex(T.value.value);
        b !== -1 && (d.value = b);
      }
      o.value = 0;
    }
  }, setActivationTrigger(b) {
    m.value = b;
  }, goToOption(b, E, H) {
    f.value = !1, $ !== null && cancelAnimationFrame($), $ = requestAnimationFrame(() => {
      if (e.disabled || i.value && !u.value.static && o.value === 1) return;
      if (T.virtual.value) {
        d.value = b === ze.Specific ? E : zn({ focus: b }, { resolveItems: () => T.virtual.value.options, resolveActiveIndex: () => {
          var F, Y;
          return (Y = (F = T.activeOptionIndex.value) != null ? F : T.virtual.value.options.findIndex((re) => {
            var te;
            return !((te = T.virtual.value) != null && te.disabled(re));
          })) != null ? Y : null;
        }, resolveDisabled: (F) => T.virtual.value.disabled(F), resolveId() {
          throw new Error("Function not implemented.");
        } }), m.value = H ?? 2;
        return;
      }
      let z = p();
      if (z.activeOptionIndex === null) {
        let F = z.options.findIndex((Y) => !Y.dataRef.disabled);
        F !== -1 && (z.activeOptionIndex = F);
      }
      let K = b === ze.Specific ? E : zn({ focus: b }, { resolveItems: () => z.options, resolveActiveIndex: () => z.activeOptionIndex, resolveId: (F) => F.id, resolveDisabled: (F) => F.dataRef.disabled });
      d.value = K, m.value = H ?? 2, c.value = z.options;
    });
  }, selectOption(b) {
    let E = c.value.find((z) => z.id === b);
    if (!E) return;
    let { dataRef: H } = E;
    O(H.value);
  }, selectActiveOption() {
    if (T.activeOptionIndex.value !== null) {
      if (T.virtual.value) O(T.virtual.value.options[T.activeOptionIndex.value]);
      else {
        let { dataRef: b } = c.value[T.activeOptionIndex.value];
        O(b.value);
      }
      T.goToOption(ze.Specific, T.activeOptionIndex.value);
    }
  }, registerOption(b, E) {
    let H = eo({ id: b, dataRef: E });
    if (T.virtual.value) {
      c.value.push(H);
      return;
    }
    k && cancelAnimationFrame(k);
    let z = p((K) => (K.push(H), K));
    d.value === null && T.isSelected(E.value.value) && (z.activeOptionIndex = z.options.indexOf(H)), c.value = z.options, d.value = z.activeOptionIndex, m.value = 2, z.options.some((K) => !G(K.dataRef.domRef)) && (k = requestAnimationFrame(() => {
      let K = p();
      c.value = K.options, d.value = K.activeOptionIndex;
    }));
  }, unregisterOption(b, E) {
    if ($ !== null && cancelAnimationFrame($), E && (f.value = !0), T.virtual.value) {
      c.value = c.value.filter((z) => z.id !== b);
      return;
    }
    let H = p((z) => {
      let K = z.findIndex((F) => F.id === b);
      return K !== -1 && z.splice(K, 1), z;
    });
    c.value = H.options, d.value = H.activeOptionIndex, m.value = 2;
  }, isSelected(b) {
    return Se(g.value, { 0: () => T.compare(bt(T.value.value), bt(b)), 1: () => bt(T.value.value).some((E) => T.compare(bt(E), bt(b))) });
  }, isActive(b) {
    return d.value === T.calculateIndex(b);
  } };
  pn([a, s, i], () => T.closeCombobox(), _(() => o.value === 0)), me($r, T), vn(_(() => Se(o.value, { 0: $e.Open, 1: $e.Closed })));
  let M = _(() => {
    var b;
    return (b = G(a)) == null ? void 0 : b.closest("form");
  });
  return ne(() => {
    oe([M], () => {
      if (!M.value || e.defaultValue === void 0) return;
      function b() {
        T.change(e.defaultValue);
      }
      return M.value.addEventListener("reset", b), () => {
        var E;
        (E = M.value) == null || E.removeEventListener("reset", b);
      };
    }, { immediate: !0 });
  }), () => {
    var b, E, H;
    let { name: z, disabled: K, form: F, ...Y } = e, re = { open: o.value === 0, disabled: K, activeIndex: T.activeOptionIndex.value, activeOption: T.activeOptionIndex.value === null ? null : T.virtual.value ? T.virtual.value.options[(b = T.activeOptionIndex.value) != null ? b : 0] : (H = (E = T.options.value[T.activeOptionIndex.value]) == null ? void 0 : E.dataRef.value) != null ? H : null, value: v.value };
    return le(we, [...z != null && v.value != null ? kr({ [z]: v.value }).map(([te, Z]) => le(gt, yr({ features: ct.Hidden, key: te, as: "input", type: "hidden", hidden: !0, readOnly: !0, form: F, disabled: K, name: te, value: Z }))) : [], ge({ theirProps: { ...t, ...Ut(Y, ["by", "defaultValue", "immediate", "modelValue", "multiple", "nullable", "onUpdate:modelValue", "virtual"]) }, ourProps: {}, slot: re, slots: n, attrs: t, name: "Combobox" })]);
  };
} });
L({ name: "ComboboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: () => `headlessui-combobox-label-${Pe()}` } }, setup(e, { attrs: n, slots: t }) {
  let r = Rt("ComboboxLabel");
  function o() {
    var l;
    (l = G(r.inputRef)) == null || l.focus({ preventScroll: !0 });
  }
  return () => {
    let l = { open: r.comboboxState.value === 0, disabled: r.disabled.value }, { id: a, ...s } = e, i = { id: a, ref: r.labelRef, onClick: o };
    return ge({ ourProps: i, theirProps: s, slot: l, attrs: n, slots: t, name: "ComboboxLabel" });
  };
} });
let hn = L({ name: "ComboboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: () => `headlessui-combobox-button-${Pe()}` } }, setup(e, { attrs: n, slots: t, expose: r }) {
  let o = Rt("ComboboxButton");
  r({ el: o.buttonRef, $el: o.buttonRef });
  function l(i) {
    o.disabled.value || (o.comboboxState.value === 0 ? o.closeCombobox() : (i.preventDefault(), o.openCombobox()), Ve(() => {
      var u;
      return (u = G(o.inputRef)) == null ? void 0 : u.focus({ preventScroll: !0 });
    }));
  }
  function a(i) {
    switch (i.key) {
      case _e.ArrowDown:
        i.preventDefault(), i.stopPropagation(), o.comboboxState.value === 1 && o.openCombobox(), Ve(() => {
          var u;
          return (u = o.inputRef.value) == null ? void 0 : u.focus({ preventScroll: !0 });
        });
        return;
      case _e.ArrowUp:
        i.preventDefault(), i.stopPropagation(), o.comboboxState.value === 1 && (o.openCombobox(), Ve(() => {
          o.value.value || o.goToOption(ze.Last);
        })), Ve(() => {
          var u;
          return (u = o.inputRef.value) == null ? void 0 : u.focus({ preventScroll: !0 });
        });
        return;
      case _e.Escape:
        if (o.comboboxState.value !== 0) return;
        i.preventDefault(), o.optionsRef.value && !o.optionsPropsRef.value.static && i.stopPropagation(), o.closeCombobox(), Ve(() => {
          var u;
          return (u = o.inputRef.value) == null ? void 0 : u.focus({ preventScroll: !0 });
        });
        return;
    }
  }
  let s = mn(_(() => ({ as: e.as, type: n.type })), o.buttonRef);
  return () => {
    var i, u;
    let c = { open: o.comboboxState.value === 0, disabled: o.disabled.value, value: o.value.value }, { id: d, ...m } = e, f = { ref: o.buttonRef, id: d, type: s.value, tabindex: "-1", "aria-haspopup": "listbox", "aria-controls": (i = G(o.optionsRef)) == null ? void 0 : i.id, "aria-expanded": o.comboboxState.value === 0, "aria-labelledby": o.labelRef.value ? [(u = G(o.labelRef)) == null ? void 0 : u.id, d].join(" ") : void 0, disabled: o.disabled.value === !0 ? !0 : void 0, onKeydown: a, onClick: l };
    return ge({ ourProps: f, theirProps: m, slot: c, attrs: n, slots: t, name: "ComboboxButton" });
  };
} }), bn = L({ name: "ComboboxInput", props: { as: { type: [Object, String], default: "input" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, displayValue: { type: Function }, defaultValue: { type: String, default: void 0 }, id: { type: String, default: () => `headlessui-combobox-input-${Pe()}` } }, emits: { change: (e) => !0 }, setup(e, { emit: n, attrs: t, slots: r, expose: o }) {
  let l = Rt("ComboboxInput"), a = _(() => Qe(G(l.inputRef))), s = { value: !1 };
  o({ el: l.inputRef, $el: l.inputRef });
  function i() {
    l.change(null);
    let v = G(l.optionsRef);
    v && (v.scrollTop = 0), l.goToOption(ze.Nothing);
  }
  let u = _(() => {
    var v;
    let $ = l.value.value;
    return G(l.inputRef) ? typeof e.displayValue < "u" && $ !== void 0 ? (v = e.displayValue($)) != null ? v : "" : typeof $ == "string" ? $ : "" : "";
  });
  ne(() => {
    oe([u, l.comboboxState, a], ([v, $], [k, O]) => {
      if (s.value) return;
      let S = G(l.inputRef);
      S && ((O === 0 && $ === 1 || v !== k) && (S.value = v), requestAnimationFrame(() => {
        var T;
        if (s.value || !S || ((T = a.value) == null ? void 0 : T.activeElement) !== S) return;
        let { selectionStart: M, selectionEnd: b } = S;
        Math.abs((b ?? 0) - (M ?? 0)) === 0 && M === 0 && S.setSelectionRange(S.value.length, S.value.length);
      }));
    }, { immediate: !0 }), oe([l.comboboxState], ([v], [$]) => {
      if (v === 0 && $ === 1) {
        if (s.value) return;
        let k = G(l.inputRef);
        if (!k) return;
        let O = k.value, { selectionStart: S, selectionEnd: T, selectionDirection: M } = k;
        k.value = "", k.value = O, M !== null ? k.setSelectionRange(S, T, M) : k.setSelectionRange(S, T);
      }
    });
  });
  let c = x(!1);
  function d() {
    c.value = !0;
  }
  function m() {
    Ot().nextFrame(() => {
      c.value = !1;
    });
  }
  let f = Xa();
  function p(v) {
    switch (s.value = !0, f(() => {
      c.value || (s.value = !1);
    }), v.key) {
      case _e.Enter:
        if (s.value = !1, l.comboboxState.value !== 0 || c.value) return;
        if (v.preventDefault(), v.stopPropagation(), l.activeOptionIndex.value === null) {
          l.closeCombobox();
          return;
        }
        l.selectActiveOption(), l.mode.value === 0 && l.closeCombobox();
        break;
      case _e.ArrowDown:
        return s.value = !1, v.preventDefault(), v.stopPropagation(), Se(l.comboboxState.value, { 0: () => l.goToOption(ze.Next), 1: () => l.openCombobox() });
      case _e.ArrowUp:
        return s.value = !1, v.preventDefault(), v.stopPropagation(), Se(l.comboboxState.value, { 0: () => l.goToOption(ze.Previous), 1: () => {
          l.openCombobox(), Ve(() => {
            l.value.value || l.goToOption(ze.Last);
          });
        } });
      case _e.Home:
        if (v.shiftKey) break;
        return s.value = !1, v.preventDefault(), v.stopPropagation(), l.goToOption(ze.First);
      case _e.PageUp:
        return s.value = !1, v.preventDefault(), v.stopPropagation(), l.goToOption(ze.First);
      case _e.End:
        if (v.shiftKey) break;
        return s.value = !1, v.preventDefault(), v.stopPropagation(), l.goToOption(ze.Last);
      case _e.PageDown:
        return s.value = !1, v.preventDefault(), v.stopPropagation(), l.goToOption(ze.Last);
      case _e.Escape:
        if (s.value = !1, l.comboboxState.value !== 0) return;
        v.preventDefault(), l.optionsRef.value && !l.optionsPropsRef.value.static && v.stopPropagation(), l.nullable.value && l.mode.value === 0 && l.value.value === null && i(), l.closeCombobox();
        break;
      case _e.Tab:
        if (s.value = !1, l.comboboxState.value !== 0) return;
        l.mode.value === 0 && l.activationTrigger.value !== 1 && l.selectActiveOption(), l.closeCombobox();
        break;
    }
  }
  function g(v) {
    n("change", v), l.nullable.value && l.mode.value === 0 && v.target.value === "" && i(), l.openCombobox();
  }
  function h(v) {
    var $, k, O;
    let S = ($ = v.relatedTarget) != null ? $ : pt.find((T) => T !== v.currentTarget);
    if (s.value = !1, !((k = G(l.optionsRef)) != null && k.contains(S)) && !((O = G(l.buttonRef)) != null && O.contains(S)) && l.comboboxState.value === 0) return v.preventDefault(), l.mode.value === 0 && (l.nullable.value && l.value.value === null ? i() : l.activationTrigger.value !== 1 && l.selectActiveOption()), l.closeCombobox();
  }
  function y(v) {
    var $, k, O;
    let S = ($ = v.relatedTarget) != null ? $ : pt.find((T) => T !== v.currentTarget);
    (k = G(l.buttonRef)) != null && k.contains(S) || (O = G(l.optionsRef)) != null && O.contains(S) || l.disabled.value || l.immediate.value && l.comboboxState.value !== 0 && (l.openCombobox(), Ot().nextFrame(() => {
      l.setActivationTrigger(1);
    }));
  }
  let w = _(() => {
    var v, $, k, O;
    return (O = (k = ($ = e.defaultValue) != null ? $ : l.defaultValue.value !== void 0 ? (v = e.displayValue) == null ? void 0 : v.call(e, l.defaultValue.value) : null) != null ? k : l.defaultValue.value) != null ? O : "";
  });
  return () => {
    var v, $, k, O, S, T, M;
    let b = { open: l.comboboxState.value === 0 }, { id: E, displayValue: H, onChange: z, ...K } = e, F = { "aria-controls": (v = l.optionsRef.value) == null ? void 0 : v.id, "aria-expanded": l.comboboxState.value === 0, "aria-activedescendant": l.activeOptionIndex.value === null ? void 0 : l.virtual.value ? ($ = l.options.value.find((Y) => !l.virtual.value.disabled(Y.dataRef.value) && l.compare(Y.dataRef.value, l.virtual.value.options[l.activeOptionIndex.value]))) == null ? void 0 : $.id : (k = l.options.value[l.activeOptionIndex.value]) == null ? void 0 : k.id, "aria-labelledby": (T = (O = G(l.labelRef)) == null ? void 0 : O.id) != null ? T : (S = G(l.buttonRef)) == null ? void 0 : S.id, "aria-autocomplete": "list", id: E, onCompositionstart: d, onCompositionend: m, onKeydown: p, onInput: g, onFocus: y, onBlur: h, role: "combobox", type: (M = t.type) != null ? M : "text", tabIndex: 0, ref: l.inputRef, defaultValue: w.value, disabled: l.disabled.value === !0 ? !0 : void 0 };
    return ge({ ourProps: F, theirProps: K, slot: b, attrs: t, slots: r, features: Xe.RenderStrategy | Xe.Static, name: "ComboboxInput" });
  };
} }), yn = L({ name: "ComboboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, hold: { type: [Boolean], default: !1 } }, setup(e, { attrs: n, slots: t, expose: r }) {
  let o = Rt("ComboboxOptions"), l = `headlessui-combobox-options-${Pe()}`;
  r({ el: o.optionsRef, $el: o.optionsRef }), Ie(() => {
    o.optionsPropsRef.value.static = e.static;
  }), Ie(() => {
    o.optionsPropsRef.value.hold = e.hold;
  });
  let a = Wt(), s = _(() => a !== null ? (a.value & $e.Open) === $e.Open : o.comboboxState.value === 0);
  us({ container: _(() => G(o.optionsRef)), enabled: _(() => o.comboboxState.value === 0), accept(u) {
    return u.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : u.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(u) {
    u.setAttribute("role", "none");
  } });
  function i(u) {
    u.preventDefault();
  }
  return () => {
    var u, c, d;
    let m = { open: o.comboboxState.value === 0 }, f = { "aria-labelledby": (d = (u = G(o.labelRef)) == null ? void 0 : u.id) != null ? d : (c = G(o.buttonRef)) == null ? void 0 : c.id, id: l, ref: o.optionsRef, role: "listbox", "aria-multiselectable": o.mode.value === 1 ? !0 : void 0, onMousedown: i }, p = Ut(e, ["hold"]);
    return ge({ ourProps: f, theirProps: p, slot: m, attrs: n, slots: o.virtual.value && o.comboboxState.value === 0 ? { ...t, default: () => [le(ys, {}, t.default)] } : t, features: Xe.RenderStrategy | Xe.Static, visible: s.value, name: "ComboboxOptions" });
  };
} }), Zt = L({ name: "ComboboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: !1 }, order: { type: [Number], default: null } }, setup(e, { slots: n, attrs: t, expose: r }) {
  let o = Rt("ComboboxOption"), l = `headlessui-combobox-option-${Pe()}`, a = x(null), s = _(() => {
    var w;
    return e.disabled || ((w = o.virtual.value) == null ? void 0 : w.disabled(e.value));
  });
  r({ el: a, $el: a });
  let i = _(() => {
    var w;
    return o.virtual.value ? o.activeOptionIndex.value === o.calculateIndex(e.value) : o.activeOptionIndex.value === null ? !1 : ((w = o.options.value[o.activeOptionIndex.value]) == null ? void 0 : w.id) === l;
  }), u = _(() => o.isSelected(e.value)), c = se(Or, null), d = _(() => ({ disabled: e.disabled, value: e.value, domRef: a, order: _(() => e.order) }));
  ne(() => o.registerOption(l, d)), ve(() => o.unregisterOption(l, i.value)), Ie(() => {
    let w = G(a);
    w && (c == null || c.value.measureElement(w));
  }), Ie(() => {
    o.comboboxState.value === 0 && i.value && (o.virtual.value || o.activationTrigger.value !== 0 && Ve(() => {
      var w, v;
      return (v = (w = G(a)) == null ? void 0 : w.scrollIntoView) == null ? void 0 : v.call(w, { block: "nearest" });
    }));
  });
  function m(w) {
    w.preventDefault(), w.button === wr.Left && (s.value || (o.selectOption(l), vr() || requestAnimationFrame(() => {
      var v;
      return (v = G(o.inputRef)) == null ? void 0 : v.focus({ preventScroll: !0 });
    }), o.mode.value === 0 && o.closeCombobox()));
  }
  function f() {
    var w;
    if (e.disabled || (w = o.virtual.value) != null && w.disabled(e.value)) return o.goToOption(ze.Nothing);
    let v = o.calculateIndex(e.value);
    o.goToOption(ze.Specific, v);
  }
  let p = is();
  function g(w) {
    p.update(w);
  }
  function h(w) {
    var v;
    if (!p.wasMoved(w) || e.disabled || (v = o.virtual.value) != null && v.disabled(e.value) || i.value) return;
    let $ = o.calculateIndex(e.value);
    o.goToOption(ze.Specific, $, 0);
  }
  function y(w) {
    var v;
    p.wasMoved(w) && (e.disabled || (v = o.virtual.value) != null && v.disabled(e.value) || i.value && (o.optionsPropsRef.value.hold || o.goToOption(ze.Nothing)));
  }
  return () => {
    let { disabled: w } = e, v = { active: i.value, selected: u.value, disabled: w }, $ = { id: l, ref: a, role: "option", tabIndex: w === !0 ? void 0 : -1, "aria-disabled": w === !0 ? !0 : void 0, "aria-selected": u.value, disabled: void 0, onMousedown: m, onFocus: f, onPointerenter: g, onMouseenter: g, onPointermove: h, onMousemove: h, onPointerleave: y, onMouseleave: y }, k = Ut(e, ["order", "value"]);
    return ge({ ourProps: $, theirProps: k, slot: v, attrs: t, slots: n, name: "ComboboxOption" });
  };
} });
function xn(e, n, t, r) {
  ro.isServer || Ie((o) => {
    e = e ?? window, e.addEventListener(n, t, r), o(() => e.removeEventListener(n, t, r));
  });
}
var Ke = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(Ke || {});
function wn() {
  let e = x(0), n = x(!0);
  return gr(n, "keydown", (t) => {
    t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
  }), e;
}
function Sr(e) {
  if (!e) return /* @__PURE__ */ new Set();
  if (typeof e == "function") return new Set(e());
  let n = /* @__PURE__ */ new Set();
  for (let t of e.value) {
    let r = G(t);
    r instanceof HTMLElement && n.add(r);
  }
  return n;
}
var Tr = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(Tr || {});
let Yt = Object.assign(L({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: [Object, Function], default: x(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: n, slots: t, expose: r }) {
  let o = x(null);
  r({ el: o, $el: o });
  let l = _(() => Qe(o)), a = x(!1);
  ne(() => a.value = !0), ve(() => a.value = !1), ws({ ownerDocument: l }, _(() => a.value && !!(e.features & 16)));
  let s = ks({ ownerDocument: l, container: o, initialFocus: _(() => e.initialFocus) }, _(() => a.value && !!(e.features & 2)));
  Cs({ ownerDocument: l, container: o, containers: e.containers, previousActiveElement: s }, _(() => a.value && !!(e.features & 8)));
  let i = wn();
  function u(f) {
    let p = G(o);
    p && ((g) => g())(() => {
      Se(i.value, { [Ke.Forwards]: () => {
        et(p, Ne.First, { skipElements: [f.relatedTarget] });
      }, [Ke.Backwards]: () => {
        et(p, Ne.Last, { skipElements: [f.relatedTarget] });
      } });
    });
  }
  let c = x(!1);
  function d(f) {
    f.key === "Tab" && (c.value = !0, requestAnimationFrame(() => {
      c.value = !1;
    }));
  }
  function m(f) {
    if (!a.value) return;
    let p = Sr(e.containers);
    G(o) instanceof HTMLElement && p.add(G(o));
    let g = f.relatedTarget;
    g instanceof HTMLElement && g.dataset.headlessuiFocusGuard !== "true" && (Er(p, g) || (c.value ? et(G(o), Se(i.value, { [Ke.Forwards]: () => Ne.Next, [Ke.Backwards]: () => Ne.Previous }) | Ne.WrapAround, { relativeTo: f.target }) : f.target instanceof HTMLElement && Dt(f.target)));
  }
  return () => {
    let f = {}, p = { ref: o, onKeydown: d, onFocusout: m }, { features: g, initialFocus: h, containers: y, ...w } = e;
    return le(we, [!!(g & 4) && le(gt, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: u, features: ct.Focusable }), ge({ ourProps: p, theirProps: { ...n, ...w }, slot: f, attrs: n, slots: t, name: "FocusTrap" }), !!(g & 4) && le(gt, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: u, features: ct.Focusable })]);
  };
} }), { features: Tr });
function xs(e) {
  let n = x(pt.slice());
  return oe([e], ([t], [r]) => {
    r === !0 && t === !1 ? dn(() => {
      n.value.splice(0);
    }) : r === !1 && t === !0 && (n.value = pt.slice());
  }, { flush: "post" }), () => {
    var t;
    return (t = n.value.find((r) => r != null && r.isConnected)) != null ? t : null;
  };
}
function ws({ ownerDocument: e }, n) {
  let t = xs(n);
  ne(() => {
    Ie(() => {
      var r, o;
      n.value || ((r = e.value) == null ? void 0 : r.activeElement) === ((o = e.value) == null ? void 0 : o.body) && Dt(t());
    }, { flush: "post" });
  }), ve(() => {
    n.value && Dt(t());
  });
}
function ks({ ownerDocument: e, container: n, initialFocus: t }, r) {
  let o = x(null), l = x(!1);
  return ne(() => l.value = !0), ve(() => l.value = !1), ne(() => {
    oe([n, t, r], (a, s) => {
      if (a.every((u, c) => (s == null ? void 0 : s[c]) === u) || !r.value) return;
      let i = G(n);
      i && dn(() => {
        var u, c;
        if (!l.value) return;
        let d = G(t), m = (u = e.value) == null ? void 0 : u.activeElement;
        if (d) {
          if (d === m) {
            o.value = m;
            return;
          }
        } else if (i.contains(m)) {
          o.value = m;
          return;
        }
        d ? Dt(d) : et(i, Ne.First | Ne.NoScroll) === Qt.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), o.value = (c = e.value) == null ? void 0 : c.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), o;
}
function Cs({ ownerDocument: e, container: n, containers: t, previousActiveElement: r }, o) {
  var l;
  xn((l = e.value) == null ? void 0 : l.defaultView, "focus", (a) => {
    if (!o.value) return;
    let s = Sr(t);
    G(n) instanceof HTMLElement && s.add(G(n));
    let i = r.value;
    if (!i) return;
    let u = a.target;
    u && u instanceof HTMLElement ? Er(s, u) ? (r.value = u, Dt(u)) : (a.preventDefault(), a.stopPropagation(), Dt(i)) : Dt(r.value);
  }, !0);
}
function Er(e, n) {
  for (let t of e) if (t.contains(n)) return !0;
  return !1;
}
function _s(e) {
  let n = xo(e.getSnapshot());
  return ve(e.subscribe(() => {
    n.value = e.getSnapshot();
  })), n;
}
function $s(e, n) {
  let t = e(), r = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return t;
  }, subscribe(o) {
    return r.add(o), () => r.delete(o);
  }, dispatch(o, ...l) {
    let a = n[o].call(t, ...l);
    a && (t = a, r.forEach((s) => s()));
  } };
}
function Os() {
  let e;
  return { before({ doc: n }) {
    var t;
    let r = n.documentElement, o = (t = n.defaultView) != null ? t : window;
    e = Math.max(0, o.innerWidth - r.clientWidth);
  }, after({ doc: n, d: t }) {
    let r = n.documentElement, o = Math.max(0, r.clientWidth - r.offsetWidth), l = Math.max(0, e - o);
    t.style(r, "paddingRight", `${l}px`);
  } };
}
function Ss() {
  return mr() ? { before({ doc: e, d: n, meta: t }) {
    function r(o) {
      return t.containers.flatMap((l) => l()).some((l) => l.contains(o));
    }
    n.microTask(() => {
      var o;
      if (window.getComputedStyle(e.documentElement).scrollBehavior !== "auto") {
        let s = Ot();
        s.style(e.documentElement, "scrollBehavior", "auto"), n.add(() => n.microTask(() => s.dispose()));
      }
      let l = (o = window.scrollY) != null ? o : window.pageYOffset, a = null;
      n.addEventListener(e, "click", (s) => {
        if (s.target instanceof HTMLElement) try {
          let i = s.target.closest("a");
          if (!i) return;
          let { hash: u } = new URL(i.href), c = e.querySelector(u);
          c && !r(c) && (a = c);
        } catch {
        }
      }, !0), n.addEventListener(e, "touchstart", (s) => {
        if (s.target instanceof HTMLElement) if (r(s.target)) {
          let i = s.target;
          for (; i.parentElement && r(i.parentElement); ) i = i.parentElement;
          n.style(i, "overscrollBehavior", "contain");
        } else n.style(s.target, "touchAction", "none");
      }), n.addEventListener(e, "touchmove", (s) => {
        if (s.target instanceof HTMLElement) {
          if (s.target.tagName === "INPUT") return;
          if (r(s.target)) {
            let i = s.target;
            for (; i.parentElement && i.dataset.headlessuiPortal !== "" && !(i.scrollHeight > i.clientHeight || i.scrollWidth > i.clientWidth); ) i = i.parentElement;
            i.dataset.headlessuiPortal === "" && s.preventDefault();
          } else s.preventDefault();
        }
      }, { passive: !1 }), n.add(() => {
        var s;
        let i = (s = window.scrollY) != null ? s : window.pageYOffset;
        l !== i && window.scrollTo(0, l), a && a.isConnected && (a.scrollIntoView({ block: "nearest" }), a = null);
      });
    });
  } } : {};
}
function Ts() {
  return { before({ doc: e, d: n }) {
    n.style(e.documentElement, "overflow", "hidden");
  } };
}
function Es(e) {
  let n = {};
  for (let t of e) Object.assign(n, t(n));
  return n;
}
let Et = $s(() => /* @__PURE__ */ new Map(), { PUSH(e, n) {
  var t;
  let r = (t = this.get(e)) != null ? t : { doc: e, count: 0, d: Ot(), meta: /* @__PURE__ */ new Set() };
  return r.count++, r.meta.add(n), this.set(e, r), this;
}, POP(e, n) {
  let t = this.get(e);
  return t && (t.count--, t.meta.delete(n)), this;
}, SCROLL_PREVENT({ doc: e, d: n, meta: t }) {
  let r = { doc: e, d: n, meta: Es(t) }, o = [Ss(), Os(), Ts()];
  o.forEach(({ before: l }) => l == null ? void 0 : l(r)), o.forEach(({ after: l }) => l == null ? void 0 : l(r));
}, SCROLL_ALLOW({ d: e }) {
  e.dispose();
}, TEARDOWN({ doc: e }) {
  this.delete(e);
} });
Et.subscribe(() => {
  let e = Et.getSnapshot(), n = /* @__PURE__ */ new Map();
  for (let [t] of e) n.set(t, t.documentElement.style.overflow);
  for (let t of e.values()) {
    let r = n.get(t.doc) === "hidden", o = t.count !== 0;
    (o && !r || !o && r) && Et.dispatch(t.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", t), t.count === 0 && Et.dispatch("TEARDOWN", t);
  }
});
function Ds(e, n, t) {
  let r = _s(Et), o = _(() => {
    let l = e.value ? r.value.get(e.value) : void 0;
    return l ? l.count > 0 : !1;
  });
  return oe([e, n], ([l, a], [s], i) => {
    if (!l || !a) return;
    Et.dispatch("PUSH", l, t);
    let u = !1;
    i(() => {
      u || (Et.dispatch("POP", s ?? l, t), u = !0);
    });
  }, { immediate: !0 }), o;
}
let Lo = /* @__PURE__ */ new Map(), Jt = /* @__PURE__ */ new Map();
function jn(e, n = x(!0)) {
  Ie((t) => {
    var r;
    if (!n.value) return;
    let o = G(e);
    if (!o) return;
    t(function() {
      var a;
      if (!o) return;
      let s = (a = Jt.get(o)) != null ? a : 1;
      if (s === 1 ? Jt.delete(o) : Jt.set(o, s - 1), s !== 1) return;
      let i = Lo.get(o);
      i && (i["aria-hidden"] === null ? o.removeAttribute("aria-hidden") : o.setAttribute("aria-hidden", i["aria-hidden"]), o.inert = i.inert, Lo.delete(o));
    });
    let l = (r = Jt.get(o)) != null ? r : 0;
    Jt.set(o, l + 1), l === 0 && (Lo.set(o, { "aria-hidden": o.getAttribute("aria-hidden"), inert: o.inert }), o.setAttribute("aria-hidden", "true"), o.inert = !0);
  });
}
function Dr({ defaultContainers: e = [], portals: n, mainTreeNodeRef: t } = {}) {
  let r = x(null), o = Qe(r);
  function l() {
    var a, s, i;
    let u = [];
    for (let c of e) c !== null && (c instanceof HTMLElement ? u.push(c) : "value" in c && c.value instanceof HTMLElement && u.push(c.value));
    if (n != null && n.value) for (let c of n.value) u.push(c);
    for (let c of (a = o == null ? void 0 : o.querySelectorAll("html > *, body > *")) != null ? a : []) c !== document.body && c !== document.head && c instanceof HTMLElement && c.id !== "headlessui-portal-root" && (c.contains(G(r)) || c.contains((i = (s = G(r)) == null ? void 0 : s.getRootNode()) == null ? void 0 : i.host) || u.some((d) => c.contains(d)) || u.push(c));
    return u;
  }
  return { resolveContainers: l, contains(a) {
    return l().some((s) => s.contains(a));
  }, mainTreeNodeRef: r, MainTreeNode() {
    return t != null ? null : le(gt, { features: ct.Hidden, ref: r });
  } };
}
function Ps() {
  let e = x(null);
  return { mainTreeNodeRef: e, MainTreeNode() {
    return le(gt, { features: ct.Hidden, ref: e });
  } };
}
let Pr = Symbol("ForcePortalRootContext");
function Is() {
  return se(Pr, !1);
}
let Uo = L({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: n, attrs: t }) {
  return me(Pr, e.force), () => {
    let { force: r, ...o } = e;
    return ge({ theirProps: o, ourProps: {}, slot: {}, slots: n, attrs: t, name: "ForcePortalRoot" });
  };
} }), Ir = Symbol("StackContext");
var Wo = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(Wo || {});
function Rs() {
  return se(Ir, () => {
  });
}
function Bs({ type: e, enabled: n, element: t, onUpdate: r }) {
  let o = Rs();
  function l(...a) {
    r == null || r(...a), o(...a);
  }
  ne(() => {
    oe(n, (a, s) => {
      a ? l(0, e, t) : s === !0 && l(1, e, t);
    }, { immediate: !0, flush: "sync" });
  }), ve(() => {
    n.value && l(1, e, t);
  }), me(Ir, l);
}
let Rr = Symbol("DescriptionContext");
function Ms() {
  let e = se(Rr, null);
  if (e === null) throw new Error("Missing parent");
  return e;
}
function Br({ slot: e = x({}), name: n = "Description", props: t = {} } = {}) {
  let r = x([]);
  function o(l) {
    return r.value.push(l), () => {
      let a = r.value.indexOf(l);
      a !== -1 && r.value.splice(a, 1);
    };
  }
  return me(Rr, { register: o, slot: e, name: n, props: t }), _(() => r.value.length > 0 ? r.value.join(" ") : void 0);
}
L({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: () => `headlessui-description-${Pe()}` } }, setup(e, { attrs: n, slots: t }) {
  let r = Ms();
  return ne(() => ve(r.register(e.id))), () => {
    let { name: o = "Description", slot: l = x({}), props: a = {} } = r, { id: s, ...i } = e, u = { ...Object.entries(a).reduce((c, [d, m]) => Object.assign(c, { [d]: R(m) }), {}), id: s };
    return ge({ ourProps: u, theirProps: i, slot: l.value, attrs: n, slots: t, name: o });
  };
} });
function As(e) {
  let n = Qe(e);
  if (!n) {
    if (e === null) return null;
    throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`);
  }
  let t = n.getElementById("headlessui-portal-root");
  if (t) return t;
  let r = n.createElement("div");
  return r.setAttribute("id", "headlessui-portal-root"), n.body.appendChild(r);
}
let Mr = L({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: n, attrs: t }) {
  let r = x(null), o = _(() => Qe(r)), l = Is(), a = se(Lr, null), s = x(l === !0 || a == null ? As(r.value) : a.resolveTarget()), i = x(!1);
  ne(() => {
    i.value = !0;
  }), Ie(() => {
    l || a != null && (s.value = a.resolveTarget());
  });
  let u = se(qo, null), c = !1, d = Yn();
  return oe(r, () => {
    if (c || !u) return;
    let m = G(r);
    m && (ve(u.register(m), d), c = !0);
  }), ve(() => {
    var m, f;
    let p = (m = o.value) == null ? void 0 : m.getElementById("headlessui-portal-root");
    p && s.value === p && s.value.children.length <= 0 && ((f = s.value.parentElement) == null || f.removeChild(s.value));
  }), () => {
    if (!i.value || s.value === null) return null;
    let m = { ref: r, "data-headlessui-portal": "" };
    return le(to, { to: s.value }, ge({ ourProps: m, theirProps: e, slot: {}, attrs: t, slots: n, name: "Portal" }));
  };
} }), qo = Symbol("PortalParentContext");
function Ar() {
  let e = se(qo, null), n = x([]);
  function t(l) {
    return n.value.push(l), e && e.register(l), () => r(l);
  }
  function r(l) {
    let a = n.value.indexOf(l);
    a !== -1 && n.value.splice(a, 1), e && e.unregister(l);
  }
  let o = { register: t, unregister: r, portals: n };
  return [n, L({ name: "PortalWrapper", setup(l, { slots: a }) {
    return me(qo, o), () => {
      var s;
      return (s = a.default) == null ? void 0 : s.call(a);
    };
  } })];
}
let Lr = Symbol("PortalGroupContext"), Ls = L({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: n, slots: t }) {
  let r = eo({ resolveTarget() {
    return e.target;
  } });
  return me(Lr, r), () => {
    let { target: o, ...l } = e;
    return ge({ theirProps: l, ourProps: {}, slot: {}, attrs: n, slots: t, name: "PortalGroup" });
  };
} });
var Vs = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Vs || {});
let Ko = Symbol("DialogContext");
function lo(e) {
  let n = se(Ko, null);
  if (n === null) {
    let t = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t, lo), t;
  }
  return n;
}
let co = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", Fs = L({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: co }, initialFocus: { type: Object, default: null }, id: { type: String, default: () => `headlessui-dialog-${Pe()}` }, role: { type: String, default: "dialog" } }, emits: { close: (e) => !0 }, setup(e, { emit: n, attrs: t, slots: r, expose: o }) {
  var l;
  let a = x(!1);
  ne(() => {
    a.value = !0;
  });
  let s = !1, i = _(() => e.role === "dialog" || e.role === "alertdialog" ? e.role : (s || (s = !0, console.warn(`Invalid role [${i}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog")), u = x(0), c = Wt(), d = _(() => e.open === co && c !== null ? (c.value & $e.Open) === $e.Open : e.open), m = x(null), f = _(() => Qe(m));
  if (o({ el: m, $el: m }), !(e.open !== co || c !== null)) throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof d.value != "boolean") throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${d.value === co ? void 0 : e.open}`);
  let p = _(() => a.value && d.value ? 0 : 1), g = _(() => p.value === 0), h = _(() => u.value > 1), y = se(Ko, null) !== null, [w, v] = Ar(), { resolveContainers: $, mainTreeNodeRef: k, MainTreeNode: O } = Dr({ portals: w, defaultContainers: [_(() => {
    var Z;
    return (Z = F.panelRef.value) != null ? Z : m.value;
  })] }), S = _(() => h.value ? "parent" : "leaf"), T = _(() => c !== null ? (c.value & $e.Closing) === $e.Closing : !1), M = _(() => y || T.value ? !1 : g.value), b = _(() => {
    var Z, ce, he;
    return (he = Array.from((ce = (Z = f.value) == null ? void 0 : Z.querySelectorAll("body > *")) != null ? ce : []).find((ie) => ie.id === "headlessui-portal-root" ? !1 : ie.contains(G(k)) && ie instanceof HTMLElement)) != null ? he : null;
  });
  jn(b, M);
  let E = _(() => h.value ? !0 : g.value), H = _(() => {
    var Z, ce, he;
    return (he = Array.from((ce = (Z = f.value) == null ? void 0 : Z.querySelectorAll("[data-headlessui-portal]")) != null ? ce : []).find((ie) => ie.contains(G(k)) && ie instanceof HTMLElement)) != null ? he : null;
  });
  jn(H, E), Bs({ type: "Dialog", enabled: _(() => p.value === 0), element: m, onUpdate: (Z, ce) => {
    if (ce === "Dialog") return Se(Z, { [Wo.Add]: () => u.value += 1, [Wo.Remove]: () => u.value -= 1 });
  } });
  let z = Br({ name: "DialogDescription", slot: _(() => ({ open: d.value })) }), K = x(null), F = { titleId: K, panelRef: x(null), dialogState: p, setTitleId(Z) {
    K.value !== Z && (K.value = Z);
  }, close() {
    n("close", !1);
  } };
  me(Ko, F);
  let Y = _(() => !(!g.value || h.value));
  pn($, (Z, ce) => {
    Z.preventDefault(), F.close(), Ve(() => ce == null ? void 0 : ce.focus());
  }, Y);
  let re = _(() => !(h.value || p.value !== 0));
  xn((l = f.value) == null ? void 0 : l.defaultView, "keydown", (Z) => {
    re.value && (Z.defaultPrevented || Z.key === _e.Escape && (Z.preventDefault(), Z.stopPropagation(), F.close()));
  });
  let te = _(() => !(T.value || p.value !== 0 || y));
  return Ds(f, te, (Z) => {
    var ce;
    return { containers: [...(ce = Z.containers) != null ? ce : [], $] };
  }), Ie((Z) => {
    if (p.value !== 0) return;
    let ce = G(m);
    if (!ce) return;
    let he = new ResizeObserver((ie) => {
      for (let Me of ie) {
        let Te = Me.target.getBoundingClientRect();
        Te.x === 0 && Te.y === 0 && Te.width === 0 && Te.height === 0 && F.close();
      }
    });
    he.observe(ce), Z(() => he.disconnect());
  }), () => {
    let { id: Z, open: ce, initialFocus: he, ...ie } = e, Me = { ...t, ref: m, id: Z, role: i.value, "aria-modal": p.value === 0 ? !0 : void 0, "aria-labelledby": K.value, "aria-describedby": z.value }, Te = { open: p.value === 0 };
    return le(Uo, { force: !0 }, () => [le(Mr, () => le(Ls, { target: m.value }, () => le(Uo, { force: !1 }, () => le(Yt, { initialFocus: he, containers: $, features: g.value ? Se(S.value, { parent: Yt.features.RestoreFocus, leaf: Yt.features.All & ~Yt.features.FocusLock }) : Yt.features.None }, () => le(v, {}, () => ge({ ourProps: Me, theirProps: { ...ie, ...t }, slot: Te, attrs: t, slots: r, visible: p.value === 0, features: Xe.RenderStrategy | Xe.Static, name: "Dialog" })))))), le(O)]);
  };
} });
L({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-overlay-${Pe()}` } }, setup(e, { attrs: n, slots: t }) {
  let r = lo("DialogOverlay");
  function o(l) {
    l.target === l.currentTarget && (l.preventDefault(), l.stopPropagation(), r.close());
  }
  return () => {
    let { id: l, ...a } = e;
    return ge({ ourProps: { id: l, "aria-hidden": !0, onClick: o }, theirProps: a, slot: { open: r.dialogState.value === 0 }, attrs: n, slots: t, name: "DialogOverlay" });
  };
} });
L({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-backdrop-${Pe()}` } }, inheritAttrs: !1, setup(e, { attrs: n, slots: t, expose: r }) {
  let o = lo("DialogBackdrop"), l = x(null);
  return r({ el: l, $el: l }), ne(() => {
    if (o.panelRef.value === null) throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { id: a, ...s } = e, i = { id: a, ref: l, "aria-hidden": !0 };
    return le(Uo, { force: !0 }, () => le(Mr, () => ge({ ourProps: i, theirProps: { ...n, ...s }, slot: { open: o.dialogState.value === 0 }, attrs: n, slots: t, name: "DialogBackdrop" })));
  };
} });
let zs = L({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-panel-${Pe()}` } }, setup(e, { attrs: n, slots: t, expose: r }) {
  let o = lo("DialogPanel");
  r({ el: o.panelRef, $el: o.panelRef });
  function l(a) {
    a.stopPropagation();
  }
  return () => {
    let { id: a, ...s } = e, i = { id: a, ref: o.panelRef, onClick: l };
    return ge({ ourProps: i, theirProps: s, slot: { open: o.dialogState.value === 0 }, attrs: n, slots: t, name: "DialogPanel" });
  };
} }), js = L({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: () => `headlessui-dialog-title-${Pe()}` } }, setup(e, { attrs: n, slots: t }) {
  let r = lo("DialogTitle");
  return ne(() => {
    r.setTitleId(e.id), ve(() => r.setTitleId(null));
  }), () => {
    let { id: o, ...l } = e;
    return ge({ ourProps: { id: o }, theirProps: l, slot: { open: r.dialogState.value === 0 }, attrs: n, slots: t, name: "DialogTitle" });
  };
} });
var Ns = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Ns || {});
let Vr = Symbol("PopoverContext");
function To(e) {
  let n = se(Vr, null);
  if (n === null) {
    let t = new Error(`<${e} /> is missing a parent <${Nr.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t, To), t;
  }
  return n;
}
let Fr = Symbol("PopoverGroupContext");
function zr() {
  return se(Fr, null);
}
let jr = Symbol("PopoverPanelContext");
function Gs() {
  return se(jr, null);
}
let Nr = L({ name: "Popover", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: n, attrs: t, expose: r }) {
  var o;
  let l = x(null);
  r({ el: l, $el: l });
  let a = x(1), s = x(null), i = x(null), u = x(null), c = x(null), d = _(() => Qe(l)), m = _(() => {
    var k, O;
    if (!G(s) || !G(c)) return !1;
    for (let z of document.querySelectorAll("body > *")) if (Number(z == null ? void 0 : z.contains(G(s))) ^ Number(z == null ? void 0 : z.contains(G(c)))) return !0;
    let S = So(), T = S.indexOf(G(s)), M = (T + S.length - 1) % S.length, b = (T + 1) % S.length, E = S[M], H = S[b];
    return !((k = G(c)) != null && k.contains(E)) && !((O = G(c)) != null && O.contains(H));
  }), f = { popoverState: a, buttonId: x(null), panelId: x(null), panel: c, button: s, isPortalled: m, beforePanelSentinel: i, afterPanelSentinel: u, togglePopover() {
    a.value = Se(a.value, { 0: 1, 1: 0 });
  }, closePopover() {
    a.value !== 1 && (a.value = 1);
  }, close(k) {
    f.closePopover();
    let O = k ? k instanceof HTMLElement ? k : k.value instanceof HTMLElement ? G(k) : G(f.button) : G(f.button);
    O == null || O.focus();
  } };
  me(Vr, f), vn(_(() => Se(a.value, { 0: $e.Open, 1: $e.Closed })));
  let p = { buttonId: f.buttonId, panelId: f.panelId, close() {
    f.closePopover();
  } }, g = zr(), h = g == null ? void 0 : g.registerPopover, [y, w] = Ar(), v = Dr({ mainTreeNodeRef: g == null ? void 0 : g.mainTreeNodeRef, portals: y, defaultContainers: [s, c] });
  function $() {
    var k, O, S, T;
    return (T = g == null ? void 0 : g.isFocusWithinPopoverGroup()) != null ? T : ((k = d.value) == null ? void 0 : k.activeElement) && (((O = G(s)) == null ? void 0 : O.contains(d.value.activeElement)) || ((S = G(c)) == null ? void 0 : S.contains(d.value.activeElement)));
  }
  return Ie(() => h == null ? void 0 : h(p)), xn((o = d.value) == null ? void 0 : o.defaultView, "focus", (k) => {
    var O, S;
    k.target !== window && k.target instanceof HTMLElement && a.value === 0 && ($() || s && c && (v.contains(k.target) || (O = G(f.beforePanelSentinel)) != null && O.contains(k.target) || (S = G(f.afterPanelSentinel)) != null && S.contains(k.target) || f.closePopover()));
  }, !0), pn(v.resolveContainers, (k, O) => {
    var S;
    f.closePopover(), fr(O, fn.Loose) || (k.preventDefault(), (S = G(s)) == null || S.focus());
  }, _(() => a.value === 0)), () => {
    let k = { open: a.value === 0, close: f.close };
    return le(we, [le(w, {}, () => ge({ theirProps: { ...e, ...t }, ourProps: { ref: l }, slot: k, slots: n, attrs: t, name: "Popover" })), le(v.MainTreeNode)]);
  };
} }), Hs = L({ name: "PopoverButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: !1 }, id: { type: String, default: () => `headlessui-popover-button-${Pe()}` } }, inheritAttrs: !1, setup(e, { attrs: n, slots: t, expose: r }) {
  let o = To("PopoverButton"), l = _(() => Qe(o.button));
  r({ el: o.button, $el: o.button }), ne(() => {
    o.buttonId.value = e.id;
  }), ve(() => {
    o.buttonId.value = null;
  });
  let a = zr(), s = a == null ? void 0 : a.closeOthers, i = Gs(), u = _(() => i === null ? !1 : i.value === o.panelId.value), c = x(null), d = `headlessui-focus-sentinel-${Pe()}`;
  u.value || Ie(() => {
    o.button.value = G(c);
  });
  let m = mn(_(() => ({ as: e.as, type: n.type })), c);
  function f(v) {
    var $, k, O, S, T;
    if (u.value) {
      if (o.popoverState.value === 1) return;
      switch (v.key) {
        case _e.Space:
        case _e.Enter:
          v.preventDefault(), (k = ($ = v.target).click) == null || k.call($), o.closePopover(), (O = G(o.button)) == null || O.focus();
          break;
      }
    } else switch (v.key) {
      case _e.Space:
      case _e.Enter:
        v.preventDefault(), v.stopPropagation(), o.popoverState.value === 1 && (s == null || s(o.buttonId.value)), o.togglePopover();
        break;
      case _e.Escape:
        if (o.popoverState.value !== 0) return s == null ? void 0 : s(o.buttonId.value);
        if (!G(o.button) || (S = l.value) != null && S.activeElement && !((T = G(o.button)) != null && T.contains(l.value.activeElement))) return;
        v.preventDefault(), v.stopPropagation(), o.closePopover();
        break;
    }
  }
  function p(v) {
    u.value || v.key === _e.Space && v.preventDefault();
  }
  function g(v) {
    var $, k;
    e.disabled || (u.value ? (o.closePopover(), ($ = G(o.button)) == null || $.focus()) : (v.preventDefault(), v.stopPropagation(), o.popoverState.value === 1 && (s == null || s(o.buttonId.value)), o.togglePopover(), (k = G(o.button)) == null || k.focus()));
  }
  function h(v) {
    v.preventDefault(), v.stopPropagation();
  }
  let y = wn();
  function w() {
    let v = G(o.panel);
    if (!v) return;
    function $() {
      Se(y.value, { [Ke.Forwards]: () => et(v, Ne.First), [Ke.Backwards]: () => et(v, Ne.Last) }) === Qt.Error && et(So().filter((k) => k.dataset.headlessuiFocusGuard !== "true"), Se(y.value, { [Ke.Forwards]: Ne.Next, [Ke.Backwards]: Ne.Previous }), { relativeTo: G(o.button) });
    }
    $();
  }
  return () => {
    let v = o.popoverState.value === 0, $ = { open: v }, { id: k, ...O } = e, S = u.value ? { ref: c, type: m.value, onKeydown: f, onClick: g } : { ref: c, id: k, type: m.value, "aria-expanded": o.popoverState.value === 0, "aria-controls": G(o.panel) ? o.panelId.value : void 0, disabled: e.disabled ? !0 : void 0, onKeydown: f, onKeyup: p, onClick: g, onMousedown: h };
    return le(we, [ge({ ourProps: S, theirProps: { ...n, ...O }, slot: $, attrs: n, slots: t, name: "PopoverButton" }), v && !u.value && o.isPortalled.value && le(gt, { id: d, features: ct.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: w })]);
  };
} });
L({ name: "PopoverOverlay", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 } }, setup(e, { attrs: n, slots: t }) {
  let r = To("PopoverOverlay"), o = `headlessui-popover-overlay-${Pe()}`, l = Wt(), a = _(() => l !== null ? (l.value & $e.Open) === $e.Open : r.popoverState.value === 0);
  function s() {
    r.closePopover();
  }
  return () => {
    let i = { open: r.popoverState.value === 0 };
    return ge({ ourProps: { id: o, "aria-hidden": !0, onClick: s }, theirProps: e, slot: i, attrs: n, slots: t, features: Xe.RenderStrategy | Xe.Static, visible: a.value, name: "PopoverOverlay" });
  };
} });
let Us = L({ name: "PopoverPanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, focus: { type: Boolean, default: !1 }, id: { type: String, default: () => `headlessui-popover-panel-${Pe()}` } }, inheritAttrs: !1, setup(e, { attrs: n, slots: t, expose: r }) {
  let { focus: o } = e, l = To("PopoverPanel"), a = _(() => Qe(l.panel)), s = `headlessui-focus-sentinel-before-${Pe()}`, i = `headlessui-focus-sentinel-after-${Pe()}`;
  r({ el: l.panel, $el: l.panel }), ne(() => {
    l.panelId.value = e.id;
  }), ve(() => {
    l.panelId.value = null;
  }), me(jr, l.panelId), Ie(() => {
    var h, y;
    if (!o || l.popoverState.value !== 0 || !l.panel) return;
    let w = (h = a.value) == null ? void 0 : h.activeElement;
    (y = G(l.panel)) != null && y.contains(w) || et(G(l.panel), Ne.First);
  });
  let u = Wt(), c = _(() => u !== null ? (u.value & $e.Open) === $e.Open : l.popoverState.value === 0);
  function d(h) {
    var y, w;
    switch (h.key) {
      case _e.Escape:
        if (l.popoverState.value !== 0 || !G(l.panel) || a.value && !((y = G(l.panel)) != null && y.contains(a.value.activeElement))) return;
        h.preventDefault(), h.stopPropagation(), l.closePopover(), (w = G(l.button)) == null || w.focus();
        break;
    }
  }
  function m(h) {
    var y, w, v, $, k;
    let O = h.relatedTarget;
    O && G(l.panel) && ((y = G(l.panel)) != null && y.contains(O) || (l.closePopover(), ((v = (w = G(l.beforePanelSentinel)) == null ? void 0 : w.contains) != null && v.call(w, O) || (k = ($ = G(l.afterPanelSentinel)) == null ? void 0 : $.contains) != null && k.call($, O)) && O.focus({ preventScroll: !0 })));
  }
  let f = wn();
  function p() {
    let h = G(l.panel);
    if (!h) return;
    function y() {
      Se(f.value, { [Ke.Forwards]: () => {
        var w;
        et(h, Ne.First) === Qt.Error && ((w = G(l.afterPanelSentinel)) == null || w.focus());
      }, [Ke.Backwards]: () => {
        var w;
        (w = G(l.button)) == null || w.focus({ preventScroll: !0 });
      } });
    }
    y();
  }
  function g() {
    let h = G(l.panel);
    if (!h) return;
    function y() {
      Se(f.value, { [Ke.Forwards]: () => {
        let w = G(l.button), v = G(l.panel);
        if (!w) return;
        let $ = So(), k = $.indexOf(w), O = $.slice(0, k + 1), S = [...$.slice(k + 1), ...O];
        for (let T of S.slice()) if (T.dataset.headlessuiFocusGuard === "true" || v != null && v.contains(T)) {
          let M = S.indexOf(T);
          M !== -1 && S.splice(M, 1);
        }
        et(S, Ne.First, { sorted: !1 });
      }, [Ke.Backwards]: () => {
        var w;
        et(h, Ne.Previous) === Qt.Error && ((w = G(l.button)) == null || w.focus());
      } });
    }
    y();
  }
  return () => {
    let h = { open: l.popoverState.value === 0, close: l.close }, { id: y, focus: w, ...v } = e, $ = { ref: l.panel, id: y, onKeydown: d, onFocusout: o && l.popoverState.value === 0 ? m : void 0, tabIndex: -1 };
    return ge({ ourProps: $, theirProps: { ...n, ...v }, attrs: n, slot: h, slots: { ...t, default: (...k) => {
      var O;
      return [le(we, [c.value && l.isPortalled.value && le(gt, { id: s, ref: l.beforePanelSentinel, features: ct.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: p }), (O = t.default) == null ? void 0 : O.call(t, ...k), c.value && l.isPortalled.value && le(gt, { id: i, ref: l.afterPanelSentinel, features: ct.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: g })])];
    } }, features: Xe.RenderStrategy | Xe.Static, visible: c.value, name: "PopoverPanel" });
  };
} });
L({ name: "PopoverGroup", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" } }, setup(e, { attrs: n, slots: t, expose: r }) {
  let o = x(null), l = xo([]), a = _(() => Qe(o)), s = Ps();
  r({ el: o, $el: o });
  function i(m) {
    let f = l.value.indexOf(m);
    f !== -1 && l.value.splice(f, 1);
  }
  function u(m) {
    return l.value.push(m), () => {
      i(m);
    };
  }
  function c() {
    var m;
    let f = a.value;
    if (!f) return !1;
    let p = f.activeElement;
    return (m = G(o)) != null && m.contains(p) ? !0 : l.value.some((g) => {
      var h, y;
      return ((h = f.getElementById(g.buttonId.value)) == null ? void 0 : h.contains(p)) || ((y = f.getElementById(g.panelId.value)) == null ? void 0 : y.contains(p));
    });
  }
  function d(m) {
    for (let f of l.value) f.buttonId.value !== m && f.close();
  }
  return me(Fr, { registerPopover: u, unregisterPopover: i, isFocusWithinPopoverGroup: c, closeOthers: d, mainTreeNodeRef: s.mainTreeNodeRef }), () => le(we, [ge({ ourProps: { ref: o }, theirProps: { ...e, ...n }, slot: {}, attrs: n, slots: t, name: "PopoverGroup" }), le(s.MainTreeNode)]);
} });
let Gr = Symbol("LabelContext");
function Hr() {
  let e = se(Gr, null);
  if (e === null) {
    let n = new Error("You used a <Label /> component, but it is not inside a parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(n, Hr), n;
  }
  return e;
}
function Ws({ slot: e = {}, name: n = "Label", props: t = {} } = {}) {
  let r = x([]);
  function o(l) {
    return r.value.push(l), () => {
      let a = r.value.indexOf(l);
      a !== -1 && r.value.splice(a, 1);
    };
  }
  return me(Gr, { register: o, slot: e, name: n, props: t }), _(() => r.value.length > 0 ? r.value.join(" ") : void 0);
}
L({ name: "Label", props: { as: { type: [Object, String], default: "label" }, passive: { type: [Boolean], default: !1 }, id: { type: String, default: () => `headlessui-label-${Pe()}` } }, setup(e, { slots: n, attrs: t }) {
  let r = Hr();
  return ne(() => ve(r.register(e.id))), () => {
    let { name: o = "Label", slot: l = {}, props: a = {} } = r, { id: s, passive: i, ...u } = e, c = { ...Object.entries(a).reduce((d, [m, f]) => Object.assign(d, { [m]: R(f) }), {}), id: s };
    return i && (delete c.onClick, delete c.htmlFor, delete u.onClick), ge({ ourProps: c, theirProps: u, slot: l, attrs: t, slots: n, name: o });
  };
} });
let Ur = Symbol("GroupContext");
L({ name: "SwitchGroup", props: { as: { type: [Object, String], default: "template" } }, setup(e, { slots: n, attrs: t }) {
  let r = x(null), o = Ws({ name: "SwitchLabel", props: { htmlFor: _(() => {
    var a;
    return (a = r.value) == null ? void 0 : a.id;
  }), onClick(a) {
    r.value && (a.currentTarget.tagName === "LABEL" && a.preventDefault(), r.value.click(), r.value.focus({ preventScroll: !0 }));
  } } }), l = Br({ name: "SwitchDescription" });
  return me(Ur, { switchRef: r, labelledby: o, describedby: l }), () => ge({ theirProps: e, ourProps: {}, slot: {}, slots: n, attrs: t, name: "SwitchGroup" });
} });
let qs = L({ name: "Switch", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "button" }, modelValue: { type: Boolean, default: void 0 }, defaultChecked: { type: Boolean, optional: !0 }, form: { type: String, optional: !0 }, name: { type: String, optional: !0 }, value: { type: String, optional: !0 }, id: { type: String, default: () => `headlessui-switch-${Pe()}` }, disabled: { type: Boolean, default: !1 }, tabIndex: { type: Number, default: 0 } }, inheritAttrs: !1, setup(e, { emit: n, attrs: t, slots: r, expose: o }) {
  let l = se(Ur, null), [a, s] = dr(_(() => e.modelValue), (h) => n("update:modelValue", h), _(() => e.defaultChecked));
  function i() {
    s(!a.value);
  }
  let u = x(null), c = l === null ? u : l.switchRef, d = mn(_(() => ({ as: e.as, type: t.type })), c);
  o({ el: c, $el: c });
  function m(h) {
    h.preventDefault(), i();
  }
  function f(h) {
    h.key === _e.Space ? (h.preventDefault(), i()) : h.key === _e.Enter && ms(h.currentTarget);
  }
  function p(h) {
    h.preventDefault();
  }
  let g = _(() => {
    var h, y;
    return (y = (h = G(c)) == null ? void 0 : h.closest) == null ? void 0 : y.call(h, "form");
  });
  return ne(() => {
    oe([g], () => {
      if (!g.value || e.defaultChecked === void 0) return;
      function h() {
        s(e.defaultChecked);
      }
      return g.value.addEventListener("reset", h), () => {
        var y;
        (y = g.value) == null || y.removeEventListener("reset", h);
      };
    }, { immediate: !0 });
  }), () => {
    let { id: h, name: y, value: w, form: v, tabIndex: $, ...k } = e, O = { checked: a.value }, S = { id: h, ref: c, role: "switch", type: d.value, tabIndex: $ === -1 ? 0 : $, "aria-checked": a.value, "aria-labelledby": l == null ? void 0 : l.labelledby.value, "aria-describedby": l == null ? void 0 : l.describedby.value, onClick: m, onKeyup: f, onKeypress: p };
    return le(we, [y != null && a.value != null ? le(gt, yr({ features: ct.Hidden, as: "input", type: "checkbox", hidden: !0, readOnly: !0, checked: a.value, form: v, disabled: k.disabled, name: y, value: w })) : null, ge({ ourProps: S, theirProps: { ...t, ...Ut(k, ["modelValue", "defaultChecked"]) }, slot: O, attrs: t, slots: r, name: "Switch" })]);
  };
} });
function Ks(e) {
  let n = { called: !1 };
  return (...t) => {
    if (!n.called) return n.called = !0, e(...t);
  };
}
function Vo(e, ...n) {
  e && n.length > 0 && e.classList.add(...n);
}
function fo(e, ...n) {
  e && n.length > 0 && e.classList.remove(...n);
}
var Yo = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(Yo || {});
function Ys(e, n) {
  let t = Ot();
  if (!e) return t.dispose;
  let { transitionDuration: r, transitionDelay: o } = getComputedStyle(e), [l, a] = [r, o].map((s) => {
    let [i = 0] = s.split(",").filter(Boolean).map((u) => u.includes("ms") ? parseFloat(u) : parseFloat(u) * 1e3).sort((u, c) => c - u);
    return i;
  });
  return l !== 0 ? t.setTimeout(() => n("finished"), l + a) : n("finished"), t.add(() => n("cancelled")), t.dispose;
}
function Nn(e, n, t, r, o, l) {
  let a = Ot(), s = l !== void 0 ? Ks(l) : () => {
  };
  return fo(e, ...o), Vo(e, ...n, ...t), a.nextFrame(() => {
    fo(e, ...t), Vo(e, ...r), a.add(Ys(e, (i) => (fo(e, ...r, ...n), Vo(e, ...o), s(i))));
  }), a.add(() => fo(e, ...n, ...t, ...r, ...o)), a.add(() => s("cancelled")), a.dispose;
}
function Tt(e = "") {
  return e.split(/\s+/).filter((n) => n.length > 1);
}
let kn = Symbol("TransitionContext");
var Js = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(Js || {});
function Xs() {
  return se(kn, null) !== null;
}
function Qs() {
  let e = se(kn, null);
  if (e === null) throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function Zs() {
  let e = se(Cn, null);
  if (e === null) throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let Cn = Symbol("NestingContext");
function Eo(e) {
  return "children" in e ? Eo(e.children) : e.value.filter(({ state: n }) => n === "visible").length > 0;
}
function Wr(e) {
  let n = x([]), t = x(!1);
  ne(() => t.value = !0), ve(() => t.value = !1);
  function r(l, a = xt.Hidden) {
    let s = n.value.findIndex(({ id: i }) => i === l);
    s !== -1 && (Se(a, { [xt.Unmount]() {
      n.value.splice(s, 1);
    }, [xt.Hidden]() {
      n.value[s].state = "hidden";
    } }), !Eo(n) && t.value && (e == null || e()));
  }
  function o(l) {
    let a = n.value.find(({ id: s }) => s === l);
    return a ? a.state !== "visible" && (a.state = "visible") : n.value.push({ id: l, state: "visible" }), () => r(l, xt.Unmount);
  }
  return { children: n, register: o, unregister: r };
}
let qr = Xe.RenderStrategy, Jo = L({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: n, attrs: t, slots: r, expose: o }) {
  let l = x(0);
  function a() {
    l.value |= $e.Opening, n("beforeEnter");
  }
  function s() {
    l.value &= ~$e.Opening, n("afterEnter");
  }
  function i() {
    l.value |= $e.Closing, n("beforeLeave");
  }
  function u() {
    l.value &= ~$e.Closing, n("afterLeave");
  }
  if (!Xs() && ds()) return () => le(Kr, { ...e, onBeforeEnter: a, onAfterEnter: s, onBeforeLeave: i, onAfterLeave: u }, r);
  let c = x(null), d = _(() => e.unmount ? xt.Unmount : xt.Hidden);
  o({ el: c, $el: c });
  let { show: m, appear: f } = Qs(), { register: p, unregister: g } = Zs(), h = x(m.value ? "visible" : "hidden"), y = { value: !0 }, w = Pe(), v = { value: !1 }, $ = Wr(() => {
    !v.value && h.value !== "hidden" && (h.value = "hidden", g(w), u());
  });
  ne(() => {
    let z = p(w);
    ve(z);
  }), Ie(() => {
    if (d.value === xt.Hidden && w) {
      if (m.value && h.value !== "visible") {
        h.value = "visible";
        return;
      }
      Se(h.value, { hidden: () => g(w), visible: () => p(w) });
    }
  });
  let k = Tt(e.enter), O = Tt(e.enterFrom), S = Tt(e.enterTo), T = Tt(e.entered), M = Tt(e.leave), b = Tt(e.leaveFrom), E = Tt(e.leaveTo);
  ne(() => {
    Ie(() => {
      if (h.value === "visible") {
        let z = G(c);
        if (z instanceof Comment && z.data === "") throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function H(z) {
    let K = y.value && !f.value, F = G(c);
    !F || !(F instanceof HTMLElement) || K || (v.value = !0, m.value && a(), m.value || i(), z(m.value ? Nn(F, k, O, S, T, (Y) => {
      v.value = !1, Y === Yo.Finished && s();
    }) : Nn(F, M, b, E, T, (Y) => {
      v.value = !1, Y === Yo.Finished && (Eo($) || (h.value = "hidden", g(w), u()));
    })));
  }
  return ne(() => {
    oe([m], (z, K, F) => {
      H(F), y.value = !1;
    }, { immediate: !0 });
  }), me(Cn, $), vn(_(() => Se(h.value, { visible: $e.Open, hidden: $e.Closed }) | l.value)), () => {
    let { appear: z, show: K, enter: F, enterFrom: Y, enterTo: re, entered: te, leave: Z, leaveFrom: ce, leaveTo: he, ...ie } = e, Me = { ref: c }, Te = { ...ie, ...f.value && m.value && ro.isServer ? { class: N([t.class, ie.class, ...k, ...O]) } : {} };
    return ge({ theirProps: Te, ourProps: Me, slot: {}, slots: r, attrs: t, features: qr, visible: h.value === "visible", name: "TransitionChild" });
  };
} }), ei = Jo, Kr = L({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: n, attrs: t, slots: r }) {
  let o = Wt(), l = _(() => e.show === null && o !== null ? (o.value & $e.Open) === $e.Open : e.show);
  Ie(() => {
    if (![!0, !1].includes(l.value)) throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let a = x(l.value ? "visible" : "hidden"), s = Wr(() => {
    a.value = "hidden";
  }), i = x(!0), u = { show: l, appear: _(() => e.appear || !i.value) };
  return ne(() => {
    Ie(() => {
      i.value = !1, l.value ? a.value = "visible" : Eo(s) || (a.value = "hidden");
    });
  }), me(Cn, s), me(kn, u), () => {
    let c = Ut(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), d = { unmount: e.unmount };
    return ge({ ourProps: { ...d, as: "template" }, theirProps: {}, slot: {}, slots: { ...r, default: () => [le(ei, { onBeforeEnter: () => n("beforeEnter"), onAfterEnter: () => n("afterEnter"), onBeforeLeave: () => n("beforeLeave"), onAfterLeave: () => n("afterLeave"), ...t, ...d, ...c }, r.default)] }, attrs: {}, features: qr, visible: a.value === "visible", name: "Transition" });
  };
} });
const ti = { class: "relative" }, oi = { class: "flex items-start flex-wrap gap-1 p-1" }, ni = ["onClick"], ri = { class: "sr-only" }, li = { key: 0 }, ai = { key: 1 }, si = { key: 1 }, ii = { class: "border-t border-ring px-2 first:border-t-0 py-2 first:pt-0 last:pb-0" }, ui = { class: "flex items-center text-base font-medium" }, ci = { key: 1 }, di = { class: "-mx-2.5" }, fi = { key: 1 }, pi = { key: 1 }, Fo = /* @__PURE__ */ L({
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
    const r = t, o = e, l = x(), a = x(""), s = x(), i = x(!1), u = _(() => a.value ? o.items.filter(
      (p) => o.displayProperty(p).toLowerCase().includes(a.value.toLowerCase())
    ) : o.items), { floatingStyles: c } = Ht(s, l, {
      strategy: "fixed",
      transform: !1,
      middleware: [
        Gt({
          padding: 10,
          limiter: cn({
            offset: 10
          })
        }),
        Oo({
          allowedPlacements: ["top-start", "bottom-start"]
        }),
        Nt(10),
        un({
          apply({ availableHeight: p, elements: g }) {
            const h = g.reference.getBoundingClientRect().width;
            Object.assign(g.floating.style, {
              minWidth: `${h}px`,
              maxHeight: `${p - 20}px`
            });
          }
        })
      ],
      whileElementsMounted: $o
    }), d = (p, g) => p.reduce(
      (h, y) => {
        var w;
        return (h[w = g(y)] || (h[w] = [])).push(y), h;
      },
      {}
    ), m = (p) => {
      if (!o.multiple || !Array.isArray(o.modelValue)) return;
      const g = o.modelValue.filter(
        (h) => h[o.uidProperty] !== p[o.uidProperty]
      );
      r("update:modelValue", g);
    }, f = (p) => {
      if (o.multiple && Array.isArray(o.modelValue) && o.modelValue.length > 0 && a.value.length === 0) {
        p.preventDefault();
        const g = o.modelValue.slice(0, -1);
        r("update:modelValue", g);
      }
    };
    return n({
      query: a,
      open: i
    }), (p, g) => (C(), D("div", {
      class: N(R(xe)("relative rounded-lg"))
    }, [
      U(R(gn), {
        "model-value": p.modelValue,
        multiple: p.multiple,
        nullable: p.nullable,
        "onUpdate:modelValue": g[3] || (g[3] = (h) => p.$emit("update:modelValue", h))
      }, {
        default: W(() => {
          var h, y;
          return [
            I("div", ti, [
              I("div", {
                ref_key: "reference",
                ref: s,
                class: N(
                  R(xe)(
                    "border rounded-md hover:bg-accent/50 shadow-xs focus-within:outline-none focus-within:ring-3 focus-within:ring-ring/40 transition-[box-shadow,color]",
                    p.theme.baseDropdownInputContainer
                  )
                )
              }, [
                I("div", oi, [
                  p.multiple && ((h = p.modelValue) != null && h.length) ? (C(!0), D(we, { key: 0 }, Ue(p.modelValue, (w) => (C(), D("div", {
                    key: w[p.uidProperty],
                    class: "flex items-center gap-1 rounded-md bg-accent px-2 py-0.5 text-sm"
                  }, [
                    I("span", null, de(p.displayProperty(w)), 1),
                    I("button", {
                      type: "button",
                      class: "ml-1 rounded-full hover:bg-accent-foreground/20",
                      onClick: Ft((v) => m(w), ["stop"])
                    }, [
                      I("span", ri, "Remove " + de(p.displayProperty(w)), 1),
                      g[4] || (g[4] = I("svg", {
                        class: "size-3",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "2"
                      }, [
                        I("path", { d: "M18 6L6 18M6 6l12 12" })
                      ], -1))
                    ], 8, ni)
                  ]))), 128)) : ae("", !0),
                  U(R(bn), {
                    class: N([
                      "flex-1 min-w-[120px] rounded-md border-0 bg-transparent pl-2.5 py-0.5 pr-8 text-sm truncate ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50",
                      p.multiple && ((y = p.modelValue) != null && y.length) ? "pl-1" : "",
                      p.theme.baseDropdownInputText
                    ]),
                    displayValue: p.displayProperty,
                    placeholder: p.placeholder,
                    autoComplete: "off",
                    onFocus: g[0] || (g[0] = (w) => i.value = !0),
                    onBlur: g[1] || (g[1] = (w) => i.value = !1),
                    onChange: g[2] || (g[2] = (w) => a.value = w.target.value),
                    onKeydown: Jn(f, ["delete"])
                  }, null, 8, ["class", "displayValue", "placeholder"])
                ]),
                U(R(hn), {
                  class: N([
                    "absolute inset-y-0 right-0 flex items-center pr-2 text-muted-foreground"
                  ])
                }, {
                  default: W(() => [
                    U(R(Qo), { class: "size-4 text-inherit" })
                  ]),
                  _: 1
                })
              ], 2),
              U(We, {
                "enter-active-class": "transition duration-200 ease-out",
                "enter-from-class": "translate-y-1 opacity-0",
                "enter-to-class": "translate-y-0 opacity-100",
                "leave-active-class": "transition duration-150 ease-in",
                "leave-from-class": "translate-y-0 opacity-100",
                "leave-to-class": "translate-y-1 opacity-0"
              }, {
                default: W(() => [
                  U(R(yn), {
                    ref_key: "floating",
                    ref: l,
                    class: N(
                      R(xe)(
                        "fixed left-0 z-10 overflow-x-hidden overflow-y-auto rounded-lg bg-popover p-1.5 text-base shadow-lg border border-ring focus:outline-hidden sm:text-sm",
                        p.theme.generalFloatingPanelContainer
                      )
                    ),
                    style: ot(R(c)),
                    static: p.isStatic
                  }, {
                    default: W(() => [
                      u.value.length === 0 ? (C(), D("div", li, [
                        p.$slots.empty ? V(p.$slots, "empty", { key: 0 }) : (C(), D("span", ai, "No results"))
                      ])) : ae("", !0),
                      p.groupBy ? (C(), D("div", si, [
                        (C(!0), D(we, null, Ue(d(
                          p.items,
                          (w) => w[p.groupBy]
                        ), (w, v) => (C(), D("div", ii, [
                          I("div", ui, [
                            p.$slots.group ? V(p.$slots, "group", yt({
                              key: 0,
                              ref_for: !0
                            }, {
                              group: w,
                              groupName: v
                            })) : (C(), D("span", ci, de([
                              "undefined",
                              null,
                              void 0
                            ].includes(v) ? "Uncategorized" : v), 1))
                          ]),
                          I("div", di, [
                            (C(!0), D(we, null, Ue(w, ($) => {
                              var k;
                              return C(), ue(R(Zt), {
                                key: $[p.uidProperty],
                                value: $,
                                disabled: (k = p.disabledItems) == null ? void 0 : k.some(
                                  (O) => O[p.uidProperty] === $[p.uidProperty]
                                )
                              }, {
                                default: W(({ active: O, selected: S, disabled: T }) => [
                                  I("span", {
                                    class: N([
                                      "cursor-pointer hover:bg-accent rounded-md px-2 py-1 flex w-full truncate",
                                      O && "bg-accent",
                                      S && "bg-accent",
                                      T && "opacity-50 cursor-not-allowed pointer-events-none"
                                    ])
                                  }, [
                                    p.$slots.item ? V(p.$slots, "item", yt({
                                      key: 0,
                                      ref_for: !0
                                    }, {
                                      item: $,
                                      active: O,
                                      selected: S,
                                      disabled: T
                                    })) : (C(), D("span", fi, de(p.displayProperty($)), 1))
                                  ], 2)
                                ]),
                                _: 2
                              }, 1032, ["value", "disabled"]);
                            }), 128))
                          ])
                        ]))), 256))
                      ])) : (C(!0), D(we, { key: 2 }, Ue(u.value, (w) => {
                        var v;
                        return C(), ue(R(Zt), {
                          key: w[p.uidProperty],
                          value: w,
                          disabled: (v = p.disabledItems) == null ? void 0 : v.some(
                            ($) => $[p.uidProperty] === w[p.uidProperty]
                          )
                        }, {
                          default: W(({ active: $, selected: k, disabled: O }) => [
                            I("span", {
                              class: N([
                                "cursor-pointer hover:bg-accent rounded-md px-2 py-1 flex w-full truncate",
                                $ && "bg-accent",
                                k && "bg-accent",
                                O && "opacity-50 cursor-not-allowed pointer-events-none"
                              ])
                            }, [
                              p.$slots.item ? V(p.$slots, "item", yt({
                                key: 0,
                                ref_for: !0
                              }, {
                                item: w,
                                active: $,
                                selected: k,
                                disabled: O
                              })) : (C(), D("span", pi, de(p.displayProperty(w)), 1))
                            ], 2)
                          ]),
                          _: 2
                        }, 1032, ["value", "disabled"]);
                      }), 128)),
                      p.$slots.options ? V(p.$slots, "options", Ct(yt({ key: 3 }, { filteredItems: u.value }))) : ae("", !0)
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
}), mi = { class: "relative" }, vi = /* @__PURE__ */ L({
  __name: "Dropdown",
  setup(e, { expose: n }) {
    const t = x(!1), r = x(), o = x(/* @__PURE__ */ new Map()), l = x(null), a = () => Array.from(o.value.entries()).sort(([, c], [, d]) => {
      const m = c.compareDocumentPosition(d);
      return m & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : m & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
    }), s = eo({
      isOpen: _(() => t.value),
      triggerRef: r,
      open: () => {
        t.value = !0;
      },
      close: () => {
        t.value = !1, l.value = null;
      },
      toggle: () => {
        t.value = !t.value, t.value || (l.value = null);
      },
      setTriggerRef: (u) => {
        r.value = u;
      },
      // Keyboard navigation
      registerItem: (u, c) => {
        o.value.set(c, u);
      },
      unregisterItem: (u) => {
        o.value.delete(u), l.value === u && (l.value = null);
      },
      focusNext: () => {
        const u = a();
        if (u.length === 0) return;
        let c = -1;
        l.value && (c = u.findIndex(([p]) => p === l.value));
        const d = c < u.length - 1 ? c + 1 : 0, [m, f] = u[d];
        l.value = m, f == null || f.focus();
      },
      focusPrevious: () => {
        const u = a();
        if (u.length === 0) return;
        let c = -1;
        l.value && (c = u.findIndex(([p]) => p === l.value));
        const d = c > 0 ? c - 1 : u.length - 1, [m, f] = u[d];
        l.value = m, f == null || f.focus();
      },
      focusFirst: () => {
        const u = a();
        if (u.length === 0) return;
        const [c, d] = u[0];
        l.value = c, d == null || d.focus();
      },
      focusLast: () => {
        const u = a();
        if (u.length === 0) return;
        const [c, d] = u[u.length - 1];
        l.value = c, d == null || d.focus();
      },
      focusItem: (u) => {
        const c = o.value.get(u);
        c && (l.value = u, c.focus());
      },
      getActiveItemId: () => l.value
    });
    me("dropdown", s), me("triggerRef", r);
    const i = (u) => {
      if (t.value)
        switch (u.key) {
          case "Escape":
            u.preventDefault(), t.value = !1, l.value = null;
            break;
        }
    };
    return ne(() => {
      document.addEventListener("keydown", i);
    }), ve(() => {
      document.removeEventListener("keydown", i);
    }), n({
      isOpen: t,
      open: s.open,
      close: s.close,
      toggle: s.toggle,
      triggerRef: r
    }), (u, c) => (C(), D("div", mi, [
      V(u.$slots, "default")
    ]));
  }
}), gi = /* @__PURE__ */ L({
  __name: "DropdownContent",
  props: {
    side: { default: "bottom" },
    align: { default: "start" },
    sideOffset: { default: 4 },
    alignOffset: { default: 0 },
    avoidCollisions: { type: Boolean, default: !0 }
  },
  setup(e) {
    const n = e, t = se("dropdown"), r = se("triggerRef"), o = x(), l = _(
      () => {
        var d;
        return (r == null ? void 0 : r.value) || ((d = t == null ? void 0 : t.triggerRef) == null ? void 0 : d.value);
      }
    ), { floatingStyles: a, update: s } = Ht(
      l || x(null),
      o,
      {
        strategy: "absolute",
        placement: `${n.side}-${n.align}`,
        middleware: [
          Nt({
            mainAxis: n.sideOffset,
            crossAxis: n.alignOffset
          }),
          ...n.avoidCollisions ? [sn()] : [],
          ...n.avoidCollisions ? [Gt()] : []
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
        hasContent: !!o.value,
        target: d.target
      }), !(t != null && t.isOpen) || !o.value) return;
      const m = d.target, f = l.value;
      console.log("Checking click outside", {
        triggerElement: f,
        isInTrigger: f == null ? void 0 : f.contains(m),
        isInContent: o.value.contains(m)
      }), f && !f.contains(m) && !o.value.contains(m) && (console.log("Closing dropdown"), t.close());
    };
    return oe(
      () => t == null ? void 0 : t.isOpen,
      async (d) => {
        d ? (console.log("Dropdown opened, adding click outside handler"), document.addEventListener("click", c, !0), setTimeout(() => {
          t == null || t.focusFirst();
        }, 50)) : (console.log("Dropdown closed, removing click outside handler"), document.removeEventListener("click", c, !0));
      }
    ), oe(
      () => l.value,
      async (d) => {
        d && (t != null && t.isOpen) && await Ve();
      }
    ), ne(async () => {
      await Ve(), s && s();
    }), ve(() => {
      console.log("DropdownContent unmounted"), document.removeEventListener("click", c, !0);
    }), (d, m) => (C(), D("div", {
      ref_key: "contentRef",
      ref: o,
      class: "absolute z-50",
      style: ot(R(a))
    }, [
      U(We, {
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
            wt(I("div", {
              role: "menu",
              class: N([
                "relative min-w-[8rem] overflow-hidden rounded-md border border-ring bg-popover p-1 text-foreground shadow-lg"
              ]),
              onClick: i,
              onKeydown: u,
              tabindex: "-1"
            }, [
              V(d.$slots, "default")
            ], 544), [
              [kt, (f = R(t)) == null ? void 0 : f.isOpen]
            ])
          ];
        }),
        _: 3
      })
    ], 4));
  }
}), zo = /* @__PURE__ */ L({
  __name: "DropdownItem",
  props: {
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["click", "select"],
  setup(e, { expose: n, emit: t }) {
    const r = e, o = t, l = se("dropdown"), a = x(), s = x();
    ne(() => {
      s.value = `dropdown-item-${Math.random().toString(36).substr(2, 9)}`, l && a.value && s.value && l.registerItem(a.value, s.value);
    }), ve(() => {
      l && s.value && l.unregisterItem(s.value);
    });
    const i = _(() => (l == null ? void 0 : l.getActiveItemId()) === s.value), u = (p) => {
      r.disabled || (p.preventDefault(), p.stopPropagation(), o("click", p), o("select"), l == null || l.close());
    }, c = (p) => {
      if (!r.disabled)
        switch (p.key) {
          case "Enter":
          case " ":
            p.preventDefault(), o("select"), l == null || l.close();
            break;
        }
    }, d = () => {
      r.disabled || l && s.value && l.focusItem(s.value);
    }, m = () => {
      r.disabled;
    }, f = () => {
      r.disabled || l && s.value && l.focusItem(s.value);
    };
    return n({
      itemRef: a
    }), (p, g) => (C(), D("div", {
      ref_key: "itemRef",
      ref: a,
      role: "menuitem",
      tabindex: "-1",
      class: N([
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
      V(p.$slots, "default")
    ], 34));
  }
}), hi = {
  class: /* @__PURE__ */ N(["px-2 py-1.5 text-sm font-semibold text-foreground"])
}, zd = /* @__PURE__ */ L({
  __name: "DropdownLabel",
  setup(e) {
    return (n, t) => (C(), D("div", hi, [
      V(n.$slots, "default")
    ]));
  }
}), bi = {
  role: "separator",
  class: /* @__PURE__ */ N(["-mx-1 my-1 h-px bg-gray-200", "dark:bg-gray-700"])
}, yi = /* @__PURE__ */ L({
  __name: "DropdownSeparator",
  setup(e) {
    return (n, t) => (C(), D("div", bi));
  }
}), xi = { class: "relative" }, jd = /* @__PURE__ */ L({
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
    const r = e, o = t, l = x(!1), a = x(), s = x(), i = {
      isOpen: _(() => l.value),
      triggerRef: a,
      open: () => {
        l.value = !0, o("open");
      },
      close: () => {
        l.value = !1, o("close");
      },
      toggle: () => {
        l.value ? (l.value = !1, o("close")) : (l.value = !0, o("open"));
      },
      setTriggerRef: (f) => {
        a.value = f;
      }
    };
    me("dropdown", i);
    const { floatingStyles: u, placement: c } = Ht(a, s, {
      placement: `${r.side}-${r.align}`,
      middleware: [
        Nt({ mainAxis: r.sideOffset, crossAxis: r.alignOffset }),
        ...r.avoidCollisions ? [sn()] : [],
        ...r.avoidCollisions ? [Gt()] : [],
        Oo()
      ],
      whileElementsMounted: $o
    }), d = _(() => c.value ? c.value.split("-")[0] : r.side), m = _(() => {
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
      isOpen: l,
      open: i.open,
      close: i.close,
      toggle: i.toggle,
      triggerRef: a,
      contentRef: s,
      floatingStyles: u,
      actualSide: d,
      transformOrigin: m
    }), (f, p) => (C(), D("div", xi, [
      V(f.$slots, "default")
    ]));
  }
}), Nd = /* @__PURE__ */ L({
  __name: "DropdownSubContent",
  setup(e) {
    const n = se("dropdown"), t = x(), r = x({}), o = x("left");
    ne(() => {
      var s;
      if (t.value) {
        const i = (s = Yn()) == null ? void 0 : s.parent;
        i && i.exposed && (i.exposed.contentRef = t.value, i.exposed.floatingStyles && (r.value = i.exposed.floatingStyles.value), i.exposed.transformOrigin && (o.value = i.exposed.transformOrigin.value));
      }
    });
    const l = (s) => {
      s.stopPropagation();
    }, a = (s) => {
      var c;
      if (!(n != null && n.isOpen) || !t.value) return;
      const i = s.target, u = (c = n.triggerRef) == null ? void 0 : c.value;
      u && !u.contains(i) && !t.value.contains(i) && n.close();
    };
    return ne(() => {
      setTimeout(() => {
        document.addEventListener("click", a, !0);
      }, 0);
    }), ve(() => {
      document.removeEventListener("click", a, !0);
    }), (s, i) => (C(), ue(to, { to: "body" }, [
      U(We, {
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
            wt(I("div", {
              ref_key: "contentRef",
              ref: t,
              role: "menu",
              class: N([
                "fixed z-50 min-w-[8rem] overflow-hidden rounded-md border bg-white p-1 text-gray-900 shadow-lg",
                "dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700"
              ]),
              style: ot({
                ...r.value,
                transformOrigin: `${o.value} center`
              }),
              onClick: l
            }, [
              V(s.$slots, "default")
            ], 4), [
              [kt, (u = R(n)) == null ? void 0 : u.isOpen]
            ])
          ];
        }),
        _: 3
      })
    ]));
  }
}), wi = ["data-state"], Gd = /* @__PURE__ */ L({
  __name: "DropdownSubTrigger",
  emits: ["click", "keydown"],
  setup(e, { expose: n, emit: t }) {
    const r = t, o = se("dropdown"), l = x();
    ne(() => {
      o && l.value && o.setTriggerRef(l.value);
    });
    const a = (c) => {
      c.preventDefault(), c.stopPropagation(), o == null || o.toggle(), r("click", c);
    }, s = (c) => {
      switch (c.key) {
        case "Enter":
        case " ":
          c.preventDefault(), o == null || o.toggle();
          break;
        case "ArrowRight":
          c.preventDefault(), o == null || o.open();
          break;
        case "ArrowLeft":
          c.preventDefault(), o == null || o.close();
          break;
      }
      r("keydown", c);
    }, i = () => {
      o == null || o.open();
    }, u = () => {
    };
    return n({
      triggerRef: l
    }), (c, d) => {
      var m;
      return C(), D("div", {
        ref_key: "triggerRef",
        ref: l,
        role: "menuitem",
        tabindex: "-1",
        class: N([
          "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors",
          "focus:bg-gray-100 focus:text-gray-900",
          "dark:focus:bg-gray-700 dark:focus:text-gray-100",
          "hover:bg-gray-100 hover:text-gray-900",
          "dark:hover:bg-gray-700 dark:hover:text-gray-100",
          "data-[state=open]:bg-gray-100 data-[state=open]:text-gray-900",
          "dark:data-[state=open]:bg-gray-700 dark:data-[state=open]:text-gray-100"
        ]),
        "data-state": (m = R(o)) != null && m.isOpen ? "open" : "closed",
        onClick: a,
        onKeydown: s,
        onMouseenter: i,
        onMouseleave: u
      }, [
        V(c.$slots, "default"),
        d[0] || (d[0] = I("svg", {
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
      ], 40, wi);
    };
  }
}), ki = /* @__PURE__ */ L({
  __name: "DropdownTrigger",
  setup(e, { expose: n }) {
    var a;
    const t = se("dropdown"), r = x();
    console.log("DropdownTrigger context:", {
      dropdown: t,
      isOpen: (a = t == null ? void 0 : t.isOpen) == null ? void 0 : a.value
    }), ne(() => {
      console.log("DropdownTrigger mounted"), t && r.value && t.setTriggerRef(r.value);
    });
    const o = (s) => {
      console.log("Trigger clicked"), s.preventDefault(), s.stopPropagation(), t == null || t.toggle();
    }, l = (s) => {
      switch (console.log("Trigger keydown", s.key), s.key) {
        case "Enter":
        case " ":
          s.preventDefault(), t == null || t.toggle();
          break;
      }
    };
    return n({
      triggerRef: r
    }), (s, i) => (C(), D("div", {
      ref_key: "triggerRef",
      ref: r,
      role: "button",
      tabindex: "0",
      class: N([
        "inline-flex items-center justify-center",
        "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      ]),
      onClick: o,
      onKeydown: l
    }, [
      V(s.$slots, "default")
    ], 544));
  }
}), Ci = ["aria-labelledby", "aria-describedby"], _i = /* @__PURE__ */ L({
  __name: "DrawerRoot",
  props: {
    open: { type: Boolean, default: !1 },
    position: { default: "right" },
    closeOnBackdropClick: { type: Boolean, default: !0 },
    closeOnEscape: { type: Boolean, default: !0 },
    preventBodyScroll: { type: Boolean, default: !0 },
    theme: { default: () => ({
      backdrop: ""
    }) }
  },
  emits: ["close", "update:open"],
  setup(e, { expose: n, emit: t }) {
    function r(...b) {
      return Re(De(b));
    }
    const o = t, l = e, a = x(), s = x(), i = x(!1), u = _(
      () => `drawer-title-${Math.random().toString(36).substr(2, 9)}`
    ), c = _(
      () => `drawer-description-${Math.random().toString(36).substr(2, 9)}`
    ), d = _(() => {
      switch (l.position) {
        case "left":
          return "justify-start";
        case "right":
          return "justify-end";
        case "top":
          return "items-start";
        case "bottom":
          return "items-end";
        default:
          return "justify-end";
      }
    }), m = _(() => "transition-all duration-300 ease-out"), f = _(() => {
      switch (l.position) {
        case "left":
          return "opacity-0 -translate-x-full";
        case "right":
          return "opacity-0 translate-x-full";
        case "top":
          return "opacity-0 -translate-y-full";
        case "bottom":
          return "opacity-0 translate-y-full";
        default:
          return "opacity-0 translate-x-full";
      }
    }), p = _(() => "opacity-100 translate-x-0 translate-y-0"), g = _(() => "transition-all duration-200 ease-in"), h = _(() => "opacity-100 translate-x-0 translate-y-0"), y = _(() => {
      switch (l.position) {
        case "left":
          return "opacity-0 -translate-x-full";
        case "right":
          return "opacity-0 translate-x-full";
        case "top":
          return "opacity-0 -translate-y-full";
        case "bottom":
          return "opacity-0 translate-y-full";
        default:
          return "opacity-0 translate-x-full";
      }
    });
    let w = null;
    const v = () => {
      l.preventBodyScroll && (w = document.body.style.overflow, document.body.style.overflow = "hidden");
    }, $ = () => {
      l.preventBodyScroll && w !== null && (document.body.style.overflow = w, w = null);
    }, k = () => {
      i.value || (o("close"), o("update:open", !1));
    }, O = (b) => {
    }, S = (b) => {
      l.closeOnEscape && b.key === "Escape" && (b.preventDefault(), k());
    }, T = (b) => {
      i.value = b;
    };
    oe(
      () => l.open,
      async (b) => {
        b ? (v(), await Ve(), a.value && a.value.focus()) : $();
      }
    ), ne(() => {
      l.open && v(), document.addEventListener("keydown", M);
    }), ve(() => {
      $(), document.removeEventListener("keydown", M);
    });
    const M = (b) => {
      l.open && l.closeOnEscape && b.key === "Escape" && (b.preventDefault(), k());
    };
    return n({
      close: k,
      drawerContainerRef: a,
      backdropRef: s,
      titleId: u.value,
      descriptionId: c.value,
      setDragging: T
    }), (b, E) => (C(), ue(to, { to: "body" }, [
      U(We, {
        "enter-active-class": "transition-all duration-300 ease-out",
        "enter-from-class": "opacity-0",
        "enter-to-class": "opacity-100",
        "leave-active-class": "transition-all duration-200 ease-in",
        "leave-from-class": "opacity-100",
        "leave-to-class": "opacity-0"
      }, {
        default: W(() => [
          b.open ? (C(), D("div", {
            key: 0,
            ref_key: "backdropRef",
            ref: s,
            class: N(r("fixed inset-0 bg-background/50", b.theme.backdrop)),
            style: { zIndex: "var(--z-modal-backdrop)" }
          }, null, 2)) : ae("", !0)
        ]),
        _: 1
      }),
      U(We, {
        "enter-active-class": m.value,
        "enter-from-class": f.value,
        "enter-to-class": p.value,
        "leave-active-class": g.value,
        "leave-from-class": h.value,
        "leave-to-class": y.value
      }, {
        default: W(() => [
          b.open ? (C(), D("div", {
            key: 0,
            ref_key: "drawerContainerRef",
            ref: a,
            onClick: O,
            class: N(
              r(
                "fixed inset-0 z-50 flex",
                d.value,
                b.theme.backdrop
              )
            ),
            style: { zIndex: "var(--z-modal-backdrop)" },
            onKeydown: S,
            tabindex: "-1",
            role: "dialog",
            "aria-modal": !0,
            "aria-labelledby": u.value,
            "aria-describedby": c.value
          }, [
            V(b.$slots, "default", {}, void 0, !0)
          ], 42, Ci)) : ae("", !0)
        ]),
        _: 3
      }, 8, ["enter-active-class", "enter-from-class", "enter-to-class", "leave-active-class", "leave-from-class", "leave-to-class"])
    ]));
  }
}), $i = /* @__PURE__ */ Oe(_i, [["__scopeId", "data-v-6d6a1cc6"]]), Oi = /* @__PURE__ */ L({
  __name: "DrawerContent",
  props: {
    open: { type: Boolean, default: !1 },
    position: { default: "right" },
    size: { default: "default" },
    dragToClose: { type: Boolean, default: !0 },
    dragThreshold: { default: 100 },
    velocityThreshold: { default: 0.5 },
    theme: { default: () => ({
      container: "",
      content: ""
    }) }
  },
  emits: ["close", "update:open", "drag-start", "drag-end"],
  setup(e, { expose: n, emit: t }) {
    function r(...F) {
      return Re(De(F));
    }
    const o = t, l = e, a = x(), s = x(!1), i = x({ x: 0, y: 0 }), u = x({ x: 0, y: 0 }), c = x({ x: 0, y: 0 }), d = x({ x: 0, y: 0 }), m = x(0), f = x(0), p = x(!1), g = _(() => {
      switch (l.position) {
        case "left":
          return "h-full";
        case "right":
          return "h-full";
        case "top":
          return "w-full";
        case "bottom":
          return "w-full";
        default:
          return "h-full";
      }
    }), h = _(() => {
      switch (l.position) {
        case "left":
        case "right":
          switch (l.size) {
            case "sm":
              return "w-80";
            case "default":
              return "w-96";
            case "lg":
              return "w-[28rem]";
            case "xl":
              return "w-[32rem]";
            case "full":
              return "w-full";
            default:
              return "w-96";
          }
        case "top":
        case "bottom":
          switch (l.size) {
            case "sm":
              return "h-64";
            case "default":
              return "h-80";
            case "lg":
              return "h-96";
            case "xl":
              return "h-[28rem]";
            case "full":
              return "h-full";
            default:
              return "h-80";
          }
        default:
          return "w-96";
      }
    }), y = _(() => {
      switch (l.size) {
        case "sm":
          return 320;
        // w-80
        case "default":
          return 384;
        // w-96
        case "lg":
          return 448;
        // w-[28rem]
        case "xl":
          return 512;
        // w-[32rem]
        case "full":
          return window.innerWidth;
        default:
          return 384;
      }
    }), w = _(() => l.position === "right" ? i.value.x >= 0 ? {
      zIndex: "var(--z-modal)",
      transform: `translateX(${i.value.x}px)`,
      width: `${y.value}px`,
      right: "0",
      transition: s.value || p.value ? "none" : "transform 0.7s cubic-bezier(0.32,0.72,0,1)"
    } : {
      zIndex: "var(--z-modal)",
      width: `${y.value - i.value.x}px`,
      right: "0",
      transform: "none",
      transition: p.value || !s.value ? "width 0.7s cubic-bezier(0.32,0.72,0,1)" : "none"
    } : {
      zIndex: "var(--z-modal)",
      transform: `translate(${i.value.x}px, ${i.value.y}px)`,
      transition: s.value ? "none" : "transform 0.7s cubic-bezier(0.32,0.72,0,1)"
    }), v = () => {
      switch (l.position) {
        case "right":
          return { axis: "x", closeDirection: 1, openDirection: -1 };
        case "left":
          return { axis: "x", closeDirection: -1, openDirection: 1 };
        case "top":
          return { axis: "y", closeDirection: -1, openDirection: 1 };
        case "bottom":
          return { axis: "y", closeDirection: 1, openDirection: -1 };
        default:
          return { axis: "x", closeDirection: 1, openDirection: -1 };
      }
    }, $ = (F) => {
      if (!l.dragToClose || F.button !== 0) return;
      F.preventDefault(), T(F.clientX, F.clientY, Date.now());
      const Y = (te) => {
        s.value && M(te.clientX, te.clientY, Date.now());
      }, re = (te) => {
        s.value && (b(Date.now()), document.removeEventListener("mousemove", Y), document.removeEventListener("mouseup", re));
      };
      document.addEventListener("mousemove", Y), document.addEventListener("mouseup", re);
    }, k = (F) => {
      if (!l.dragToClose || F.touches.length !== 1) return;
      F.preventDefault();
      const Y = F.touches[0];
      T(Y.clientX, Y.clientY, Date.now());
    }, O = (F) => {
      if (!s.value || F.touches.length !== 1) return;
      F.preventDefault();
      const Y = F.touches[0];
      M(Y.clientX, Y.clientY, Date.now());
    }, S = (F) => {
      s.value && b(Date.now());
    }, T = (F, Y, re) => {
      s.value = !0, u.value = { x: F, y: Y }, c.value = { x: F, y: Y }, m.value = re, f.value = re, d.value = { x: 0, y: 0 }, o("drag-start"), "vibrate" in navigator && navigator.vibrate(10);
    }, M = (F, Y, re) => {
      const te = F - c.value.x, Z = Y - c.value.y, ce = re - m.value;
      ce > 0 && (d.value = {
        x: te / ce,
        y: Z / ce
      });
      const he = v();
      let ie = { x: i.value.x, y: i.value.y };
      if (l.position === "right") {
        const Te = F - u.value.x;
        if (Te < 0) {
          const J = Math.abs(Te), fe = Math.min(
            0.95,
            J / 20
          ), Ae = Math.max(0.05, 1 - fe);
          ie.x = Te * Ae;
        } else
          ie.x = Te;
      } else if (he.axis === "x")
        if (te * he.closeDirection > 0)
          ie.x += te;
        else {
          const Te = Math.abs(
            i.value.x * he.openDirection
          ), J = Math.min(
            0.95,
            Te / 20
          ), fe = Math.max(0.05, 1 - J);
          ie.x += te * fe;
        }
      else if (he.axis === "y")
        if (Z * he.closeDirection > 0)
          ie.y += Z;
        else {
          const Te = Math.abs(
            i.value.y * he.openDirection
          ), J = Math.min(
            0.95,
            Te / 20
          ), fe = Math.max(0.05, 1 - J);
          ie.y += Z * fe;
        }
      const Me = Math.max(window.innerWidth, window.innerHeight);
      switch (l.position) {
        case "right":
          ie.x = Math.max(
            -Me * 0.3,
            Math.min(ie.x, Me)
          );
          break;
        case "left":
          ie.x = Math.max(
            -Me,
            Math.min(ie.x, Me * 0.3)
          );
          break;
        case "top":
          ie.y = Math.max(
            -Me,
            Math.min(ie.y, Me * 0.3)
          );
          break;
        case "bottom":
          ie.y = Math.max(
            -Me * 0.3,
            Math.min(ie.y, Me)
          );
          break;
      }
      i.value = ie, c.value = { x: F, y: Y }, m.value = re;
    }, b = (F) => {
      s.value = !1, o("drag-end");
      const Y = v();
      F - f.value, Y.axis === "x" ? Math.abs(i.value.x) : Math.abs(i.value.y);
      const re = Y.axis === "x" ? Math.abs(d.value.x) : Math.abs(d.value.y);
      let te = !1;
      if (Y.axis === "x") {
        const Z = i.value.x * Y.closeDirection > 0, ce = i.value.x * Y.closeDirection > (l.dragThreshold ?? 100), he = re > (l.velocityThreshold ?? 0.5);
        te = Z && (ce || he);
      } else {
        const Z = i.value.y * Y.closeDirection > 0, ce = i.value.y * Y.closeDirection > (l.dragThreshold ?? 100), he = re > (l.velocityThreshold ?? 0.5);
        te = Z && (ce || he);
      }
      te ? E() : H();
    }, E = () => {
      let F = { x: 0, y: 0 };
      const Y = Math.max(window.innerWidth, window.innerHeight);
      switch (l.position) {
        case "right":
          F = { x: Y, y: 0 };
          break;
        case "left":
          F = { x: -Y, y: 0 };
          break;
        case "top":
          F = { x: 0, y: -Y };
          break;
        case "bottom":
          F = { x: 0, y: Y };
          break;
      }
      i.value = F, setTimeout(() => {
        o("close"), o("update:open", !1), z();
      }, 500);
    }, H = async () => {
      l.position === "right" && i.value.x < 0 ? (await Ve(), i.value = { x: 0, y: 0 }) : i.value = { x: 0, y: 0 };
    }, z = () => {
      s.value = !1, i.value = { x: 0, y: 0 }, u.value = { x: 0, y: 0 }, c.value = { x: 0, y: 0 }, d.value = { x: 0, y: 0 }, m.value = 0, f.value = 0;
    };
    oe(
      () => l.open,
      (F) => {
        F && z();
      }
    );
    const K = (F) => {
      if (!a.value || F.key !== "Tab") return;
      const Y = a.value.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (Y.length === 0) return;
      const re = Y[0], te = Y[Y.length - 1];
      F.shiftKey ? document.activeElement === re && (F.preventDefault(), te.focus()) : document.activeElement === te && (F.preventDefault(), re.focus());
    };
    return n({
      drawerRef: a
    }), (F, Y) => (C(), D("div", {
      ref_key: "drawerRef",
      ref: a,
      class: N(
        r(
          "relative bg-card shadow-lg border rounded-l-lg border-ring flex flex-col",
          g.value,
          h.value,
          F.theme.container
        )
      ),
      style: ot(w.value),
      onMousedown: $,
      onTouchstart: k,
      onTouchmove: O,
      onTouchend: S,
      onClick: Y[0] || (Y[0] = Ft(() => {
      }, ["stop"])),
      onKeydown: K
    }, [
      V(F.$slots, "default")
    ], 38));
  }
}), Si = /* @__PURE__ */ L({
  __name: "Drawer",
  props: {
    open: { type: Boolean, default: !1 },
    position: { default: "right" },
    size: { default: "default" },
    showCloseButton: { type: Boolean, default: !0 },
    closeOnBackdropClick: { type: Boolean, default: !0 },
    closeOnEscape: { type: Boolean, default: !0 },
    preventBodyScroll: { type: Boolean, default: !0 },
    dragToClose: { type: Boolean, default: !0 },
    dragThreshold: { default: 100 },
    velocityThreshold: { default: 0.5 },
    closeButtonLabel: { default: "Close drawer" },
    theme: { default: () => ({
      backdrop: "",
      container: "",
      content: "",
      closeButton: ""
    }) }
  },
  emits: ["close", "update:open"],
  setup(e, { expose: n, emit: t }) {
    const r = t, o = x(), l = x(), a = () => {
      l.value && l.value.setDragging(!0);
    }, s = () => {
      l.value && l.value.setDragging(!1);
    };
    return `${Math.random().toString(36).substr(2, 9)}`, n({
      close: () => r("close")
    }), (i, u) => (C(), ue($i, {
      ref_key: "drawerRootRef",
      ref: l,
      open: i.open,
      position: i.position,
      "close-on-backdrop-click": i.closeOnBackdropClick,
      "close-on-escape": i.closeOnEscape,
      "prevent-body-scroll": i.preventBodyScroll,
      theme: i.theme,
      onClose: u[2] || (u[2] = (c) => i.$emit("close")),
      "onUpdate:open": u[3] || (u[3] = (c) => i.$emit("update:open", c))
    }, {
      default: W(() => [
        U(Oi, {
          ref_key: "drawerContentRef",
          ref: o,
          open: i.open,
          position: i.position,
          size: i.size,
          "drag-to-close": i.dragToClose,
          "drag-threshold": i.dragThreshold,
          "velocity-threshold": i.velocityThreshold,
          theme: i.theme,
          onClose: u[0] || (u[0] = (c) => i.$emit("close")),
          "onUpdate:open": u[1] || (u[1] = (c) => i.$emit("update:open", c)),
          onDragStart: a,
          onDragEnd: s
        }, {
          default: W(() => [
            V(i.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        }, 8, ["open", "position", "size", "drag-to-close", "drag-threshold", "velocity-threshold", "theme"])
      ]),
      _: 3
    }, 8, ["open", "position", "close-on-backdrop-click", "close-on-escape", "prevent-body-scroll", "theme"]));
  }
}), Hd = /* @__PURE__ */ Oe(Si, [["__scopeId", "data-v-c5acddfa"]]), Ud = /* @__PURE__ */ L({
  __name: "DrawerBody",
  props: {
    hasHeader: { type: Boolean, default: !1 },
    hasFooter: { type: Boolean, default: !1 },
    theme: { default: () => ({
      content: ""
    }) }
  },
  setup(e) {
    function n(...t) {
      return Re(De(t));
    }
    return (t, r) => (C(), D("div", {
      class: N(
        n(
          "flex-1 overflow-auto",
          t.hasHeader && "p-4 pt-0",
          t.hasFooter && "p-4 pb-0",
          !t.hasHeader && !t.hasFooter && "p-4",
          t.theme.content
        )
      )
    }, [
      V(t.$slots, "default")
    ], 2));
  }
}), Ti = ["aria-label"], Ei = { class: "sr-only" }, Di = /* @__PURE__ */ L({
  __name: "DrawerClose",
  props: {
    closeButtonLabel: { default: "Close drawer" },
    theme: { default: () => ({
      closeButton: ""
    }) }
  },
  emits: ["close"],
  setup(e, { emit: n }) {
    function t(...l) {
      return Re(De(l));
    }
    const r = n, o = () => {
      r("close");
    };
    return (l, a) => (C(), D("button", {
      type: "button",
      class: N(
        t(
          "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0",
          l.theme.closeButton
        )
      ),
      "aria-label": l.closeButtonLabel,
      onClick: o
    }, [
      U(R(oo), { class: "h-4 w-4" }),
      I("span", Ei, de(l.closeButtonLabel), 1)
    ], 10, Ti));
  }
}), Wd = /* @__PURE__ */ L({
  __name: "DrawerFooter",
  props: {
    theme: { default: () => ({
      footer: ""
    }) }
  },
  setup(e) {
    function n(...t) {
      return Re(De(t));
    }
    return (t, r) => (C(), D("div", {
      class: N(
        n(
          "flex items-center justify-end space-x-2 p-4 border-t border-border",
          t.theme.footer
        )
      )
    }, [
      V(t.$slots, "default")
    ], 2));
  }
}), Pi = /* @__PURE__ */ L({
  __name: "DrawerHandle",
  props: {
    position: { default: "right" },
    theme: { default: () => ({
      handle: "",
      indicator: ""
    }) }
  },
  setup(e, { expose: n }) {
    function t(...s) {
      return Re(De(s));
    }
    const r = e, o = x(), l = _(() => {
      switch (r.position) {
        case "left":
          return "w-6 h-full";
        // Vertical handle on left side
        case "right":
          return "w-6 h-full";
        // Vertical handle on left side of right drawer
        case "top":
          return "w-full h-6";
        // Horizontal handle on top
        case "bottom":
          return "w-full h-6";
        // Horizontal handle on bottom
        default:
          return "w-6 h-full";
      }
    }), a = _(() => {
      switch (r.position) {
        case "left":
        case "right":
          return "w-1.5 h-12";
        // Vertical indicator
        case "top":
        case "bottom":
          return "w-12 h-1.5";
        // Horizontal indicator
        default:
          return "w-1.5 h-12";
      }
    });
    return n({
      handleRef: o
    }), (s, i) => (C(), D("div", {
      ref_key: "handleRef",
      ref: o,
      class: N(
        t(
          "flex items-center justify-center cursor-grab touch-none select-none",
          l.value,
          s.theme.handle
        )
      )
    }, [
      I("div", {
        class: N(
          t(
            "rounded-full bg-muted-foreground/20 transition-colors",
            a.value,
            s.theme.indicator
          )
        )
      }, null, 2)
    ], 2));
  }
}), Ii = { class: "flex items-center space-x-2" }, qd = /* @__PURE__ */ L({
  __name: "DrawerHeader",
  props: {
    position: { default: "right" },
    showCloseButton: { type: Boolean, default: !0 },
    showDragHandle: { type: Boolean, default: !0 },
    closeButtonLabel: { default: "Close drawer" },
    theme: { default: () => ({
      header: "",
      closeButton: "",
      handle: "",
      indicator: ""
    }) }
  },
  emits: ["close", "update:open"],
  setup(e, { emit: n }) {
    function t(...s) {
      return Re(De(s));
    }
    const r = n, o = e, l = _(() => {
      switch (o.position) {
        case "left":
          return "absolute right-0 top-0 bottom-0";
        // Handle on right side for left drawer
        case "right":
          return "absolute left-0 top-0 bottom-0";
        // Handle on left side for right drawer
        case "top":
          return "absolute left-0 right-0 bottom-0";
        // Handle on bottom for top drawer
        case "bottom":
          return "absolute left-0 right-0 top-0";
        // Handle on top for bottom drawer
        default:
          return "absolute left-0 top-0 bottom-0";
      }
    }), a = () => {
      r("close"), r("update:open", !1);
    };
    return (s, i) => (C(), D(we, null, [
      I("div", {
        class: N(
          t(
            "flex items-center justify-between p-4 border-b border-border relative",
            s.theme.header
          )
        )
      }, [
        I("div", Ii, [
          V(s.$slots, "title", {}, () => [
            V(s.$slots, "default")
          ])
        ]),
        s.showCloseButton ? (C(), ue(Di, {
          key: 0,
          "close-button-label": s.closeButtonLabel,
          theme: { closeButton: s.theme.closeButton },
          onClose: a
        }, null, 8, ["close-button-label", "theme"])) : ae("", !0)
      ], 2),
      s.showDragHandle ? (C(), ue(Pi, {
        key: 0,
        position: s.position,
        class: N(l.value),
        theme: { handle: s.theme.handle, indicator: s.theme.indicator }
      }, null, 8, ["position", "class", "theme"])) : ae("", !0)
    ], 64));
  }
}), Ri = ["id"], Kd = /* @__PURE__ */ L({
  __name: "DrawerTitle",
  props: {
    titleId: { default: "" }
  },
  setup(e) {
    function n(...t) {
      return Re(De(t));
    }
    return (t, r) => (C(), D("h2", {
      id: t.titleId,
      class: N(
        n(
          "text-lg font-semibold leading-none tracking-tight text-foreground"
        )
      )
    }, [
      V(t.$slots, "default")
    ], 10, Ri));
  }
}), Bi = ["innerHTML"], Yr = /* @__PURE__ */ L({
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
    return (n, t) => (C(), D("div", {
      class: N(
        R(xe)(
          "bg-card border border-ring border-dashed rounded-lg p-6",
          n.theme.container
        )
      )
    }, [
      I("h3", {
        class: N(R(xe)("text-base font-semibold text-foreground", n.theme.title)),
        innerHTML: n.title
      }, null, 10, Bi),
      I("div", {
        class: N(R(xe)("mt-1 text-muted-foreground", n.theme.description))
      }, [
        V(n.$slots, "default")
      ], 2)
    ], 2));
  }
}), Mi = ["disabled", "type", "placeholder", "value"], Jr = /* @__PURE__ */ L({
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
    const t = n, r = (o) => {
      const l = o.target;
      t("update:modelValue", l.value), t("update:value", l.value), t("input", l.value);
    };
    return (o, l) => {
      var a;
      return C(), D("input", {
        disabled: o.disabled,
        type: o.type,
        placeholder: o.placeholder,
        value: o.modelValue ?? o.value,
        onInput: r,
        class: N(
          R(xe)(
            "flex w-full rounded-md border border-ring bg-background px-3 py-2 shadow-xs text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground/70 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40 transition-[box-shadow,color] disabled:cursor-not-allowed disabled:opacity-50",
            ((a = o.theme) == null ? void 0 : a.input) || ""
          )
        )
      }, null, 42, Mi);
    };
  }
}), Ai = ["aria-labelledby", "aria-describedby"], Li = /* @__PURE__ */ L({
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
    function r(...y) {
      return Re(De(y));
    }
    const o = t, l = e, a = x(), s = x(), i = _(
      () => `modal-title-${Math.random().toString(36).substr(2, 9)}`
    ), u = _(
      () => `modal-description-${Math.random().toString(36).substr(2, 9)}`
    );
    let c = null;
    const d = () => {
      l.preventBodyScroll && (c = document.body.style.overflow, document.body.style.overflow = "hidden");
    }, m = () => {
      l.preventBodyScroll && c !== null && (document.body.style.overflow = c, c = null);
    }, f = () => {
      o("close"), o("update:open", !1);
    }, p = (y) => {
      l.closeOnBackdropClick && y.target === a.value && f();
    }, g = (y) => {
      l.closeOnEscape && y.key === "Escape" && (y.preventDefault(), f());
    };
    oe(
      () => l.open,
      async (y) => {
        y ? (d(), await Ve(), a.value && a.value.focus()) : m();
      }
    ), ne(() => {
      l.open && d(), document.addEventListener("keydown", h);
    }), ve(() => {
      m(), document.removeEventListener("keydown", h);
    });
    const h = (y) => {
      l.open && l.closeOnEscape && y.key === "Escape" && (y.preventDefault(), f());
    };
    return n({
      close: f,
      modalContainerRef: a,
      backdropRef: s,
      titleId: i.value,
      descriptionId: u.value
    }), (y, w) => (C(), ue(to, { to: "body" }, [
      U(We, {
        "enter-active-class": "transition-all duration-300 ease-out",
        "enter-from-class": "opacity-0",
        "enter-to-class": "opacity-100",
        "leave-active-class": "transition-all duration-200 ease-in",
        "leave-from-class": "opacity-100",
        "leave-to-class": "opacity-0"
      }, {
        default: W(() => [
          y.open ? (C(), D("div", {
            key: 0,
            ref_key: "backdropRef",
            ref: s,
            class: N(
              r(
                "fixed inset-0 bg-primary/20 backdrop-blur-sm",
                y.theme.backdrop
              )
            ),
            style: { zIndex: "var(--z-modal-backdrop)" }
          }, null, 2)) : ae("", !0)
        ]),
        _: 1
      }),
      U(We, {
        "enter-active-class": "transition-all duration-150 ease-out",
        "enter-from-class": "opacity-0 scale-95 translate-y-4",
        "enter-to-class": "opacity-100 scale-100 translate-y-0",
        "leave-active-class": "transition-all duration-150 ease-in",
        "leave-from-class": "opacity-100 scale-100 translate-y-0",
        "leave-to-class": "opacity-0 scale-95 translate-y-4"
      }, {
        default: W(() => [
          y.open ? (C(), D("div", {
            key: 0,
            ref_key: "modalContainerRef",
            ref: a,
            onClick: p,
            class: N(
              r(
                "fixed inset-0 z-50 flex items-center justify-center",
                y.theme.backdrop
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
            V(y.$slots, "default", {}, void 0, !0)
          ], 42, Ai)) : ae("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), Vi = /* @__PURE__ */ Oe(Li, [["__scopeId", "data-v-96442585"]]), Fi = /* @__PURE__ */ L({
  __name: "ModalContent",
  props: {
    size: { default: "default" },
    theme: { default: () => ({
      container: ""
    }) }
  },
  setup(e, { expose: n }) {
    function t(...a) {
      return Re(De(a));
    }
    const r = x(), o = (a) => {
      if (!r.value || a.key !== "Tab") return;
      const s = r.value.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (s.length === 0) return;
      const i = s[0], u = s[s.length - 1];
      a.shiftKey ? document.activeElement === i && (a.preventDefault(), u.focus()) : document.activeElement === u && (a.preventDefault(), i.focus());
    };
    return n({
      modalRef: r,
      focusFirstElement: async () => {
        var s;
        await Ve();
        const a = (s = r.value) == null ? void 0 : s.querySelector(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        a ? a.focus() : r.value && r.value.focus();
      }
    }), (a, s) => (C(), D("div", {
      ref_key: "modalRef",
      ref: r,
      class: N(
        t(
          "relative w-full max-w-lg max-h-[90vh] overflow-hidden rounded-lg bg-card shadow-lg border border-ring flex flex-col",
          a.size === "sm" && "max-w-md",
          a.size === "lg" && "max-w-2xl",
          a.size === "xl" && "max-w-4xl",
          a.size === "full" && "max-w-[95vw] max-h-[95vh]",
          a.theme.container
        )
      ),
      style: { zIndex: "var(--z-modal)" },
      onClick: s[0] || (s[0] = Ft(() => {
      }, ["stop"])),
      onKeydown: o
    }, [
      V(a.$slots, "default")
    ], 34));
  }
}), zi = ["aria-label"], ji = /* @__PURE__ */ L({
  __name: "ModalClose",
  props: {
    closeButtonLabel: { default: "Close modal" },
    theme: { default: () => ({
      closeButton: ""
    }) }
  },
  emits: ["close"],
  setup(e, { emit: n }) {
    function t(...r) {
      return Re(De(r));
    }
    return (r, o) => (C(), D("button", {
      onClick: o[0] || (o[0] = (l) => r.$emit("close")),
      class: N(
        t(
          "absolute top-6 right-6 p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors",
          r.theme.closeButton
        )
      ),
      type: "button",
      "aria-label": r.closeButtonLabel
    }, [
      U(R(oo), { class: "size-4" })
    ], 10, zi));
  }
}), Ni = /* @__PURE__ */ L({
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
    const r = t;
    return `${Math.random().toString(36).substr(2, 9)}`, n({
      close: () => r("close")
    }), (o, l) => (C(), ue(Vi, {
      open: o.open,
      "close-on-backdrop-click": o.closeOnBackdropClick,
      "close-on-escape": o.closeOnEscape,
      "prevent-body-scroll": o.preventBodyScroll,
      theme: o.theme,
      onClose: l[1] || (l[1] = (a) => o.$emit("close")),
      "onUpdate:open": l[2] || (l[2] = (a) => o.$emit("update:open", a))
    }, {
      default: W(() => [
        U(Fi, {
          size: o.size,
          theme: o.theme
        }, {
          default: W(() => [
            U(ji, {
              "close-button-label": o.closeButtonLabel,
              theme: o.theme,
              onClose: l[0] || (l[0] = (a) => o.$emit("close"))
            }, null, 8, ["close-button-label", "theme"]),
            V(o.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        }, 8, ["size", "theme"])
      ]),
      _: 3
    }, 8, ["open", "close-on-backdrop-click", "close-on-escape", "prevent-body-scroll", "theme"]));
  }
}), Yd = /* @__PURE__ */ Oe(Ni, [["__scopeId", "data-v-5e273e5b"]]), Jd = /* @__PURE__ */ L({
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
      return Re(De(t));
    }
    return (t, r) => (C(), D("div", {
      class: N(n("flex-1 grow overflow-auto px-6", t.theme.content))
    }, [
      V(t.$slots, "default")
    ], 2));
  }
}), Xd = /* @__PURE__ */ L({
  __name: "ModalFooter",
  props: {
    theme: { default: () => ({
      footer: ""
    }) }
  },
  setup(e) {
    function n(...t) {
      return Re(De(t));
    }
    return (t, r) => (C(), D("div", {
      class: N(n("flex items-center justify-end gap-3 p-6", t.theme.footer))
    }, [
      V(t.$slots, "default")
    ], 2));
  }
}), Gi = { class: "flex-1 min-w-0" }, Qd = /* @__PURE__ */ L({
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
    function t(...r) {
      return Re(De(r));
    }
    return (r, o) => (C(), D("div", {
      class: N(t("flex items-center justify-between p-6", r.theme.header))
    }, [
      I("div", Gi, [
        V(r.$slots, "default")
      ])
    ], 2));
  }
}), Hi = ["id"], Zd = /* @__PURE__ */ L({
  __name: "ModalTitle",
  props: {
    titleId: {}
  },
  setup(e) {
    return (n, t) => (C(), D("h2", {
      id: n.titleId,
      class: "text-lg font-semibold text-foreground"
    }, [
      V(n.$slots, "default")
    ], 8, Hi));
  }
}), Ui = /* @__PURE__ */ L({
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
        Gt({
          padding: 10,
          limiter: cn({
            offset: 10
          })
        }),
        Oo({
          allowedPlacements: ["top-start", "bottom-start"]
        }),
        Nt(10),
        un({
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
    const r = e, o = t, l = x(), a = x(), s = x(r.open ?? !1);
    oe(
      () => r.open,
      (d) => {
        d !== void 0 && (s.value = d);
      },
      { immediate: !0 }
    );
    const i = (d) => {
      s.value = d, o("update:open", d);
    }, { floatingStyles: u } = Ht(l, a, {
      strategy: r.floatingOptions.strategy,
      transform: r.floatingOptions.transform,
      placement: r.floatingOptions.placement,
      middleware: r.floatingOptions.middleware,
      open: s.value,
      whileElementsMounted: r.floatingOptions.whileElementsMounted
    });
    return n({
      /** Reference to the floating element */
      floating: a,
      /** Reference to the trigger element */
      reference: l,
      /** Method to close the popover */
      close: () => {
        i(!1);
      },
      /** Current open state of the popover */
      isOpen: s
    }), (d, m) => (C(), ue(R(Nr), {
      class: N(R(xe)("relative inline-block text-left", d.theme.popoverMenu)),
      open: s.value,
      "onUpdate:open": i
    }, {
      default: W(({ open: f }) => [
        I("div", null, [
          U(R(Hs), {
            ref_key: "reference",
            ref: l,
            class: N(
              R(xe)(f ? "is-open" : "is-closed", d.theme.popoverMenuButton)
            )
          }, {
            default: W(() => [
              V(d.$slots, "trigger")
            ]),
            _: 2
          }, 1032, ["class"])
        ]),
        U(We, {
          "enter-active-class": "transition duration-200 ease-out",
          "enter-from-class": "translate-y-1 opacity-0",
          "enter-to-class": "translate-y-0 opacity-100",
          "leave-active-class": "transition duration-150 ease-in",
          "leave-from-class": "translate-y-0 opacity-100",
          "leave-to-class": "translate-y-1 opacity-0"
        }, {
          default: W(() => [
            U(R(Us), {
              ref_key: "floating",
              ref: a,
              class: N(
                R(xe)(
                  "fixed z-50 transform overflow-x-hidden overflow-y-auto rounded-lg bg-background p-3 text-base shadow-lg ring-1 ring-ring focus:outline-hidden sm:text-sm",
                  d.theme.popoverMenuItems
                )
              ),
              style: ot(R(u))
            }, {
              default: W(({ close: p }) => [
                V(d.$slots, "default", Ct(zt({ close: p })))
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
}), Wi = ["data-group-id", "data-shared-group"], qi = { class: "flex flex-col" }, Ki = ["onDragstart", "onDragend", "onDragover", "onDrop"], Yi = {
  key: 1,
  class: "flex items-center justify-between w-full"
}, Ji = { class: "flex-1 min-w-0" }, Xi = /* @__PURE__ */ L({
  __name: "Sortable",
  props: {
    items: {},
    groupId: {},
    disabled: { type: Boolean, default: !1 },
    sharedGroup: { default: void 0 }
  },
  emits: ["update:items", "item-moved", "drag-start", "drag-end", "cross-group-drag"],
  setup(e, { emit: n }) {
    const t = e, r = n, o = x([...t.items]), l = x(!1), a = x(null), s = x(-1), i = x(-1), u = x(!1), c = x(null), d = x(null), m = x([]), f = x(null);
    oe(
      () => t.items,
      (b) => {
        o.value = [...b];
      },
      { deep: !0 }
    );
    const p = (b) => {
      const E = b.cloneNode(!0);
      return E.style.position = "fixed", E.style.top = "0", E.style.left = "0", E.style.width = `${b.offsetWidth}px`, E.style.height = `${b.offsetHeight}px`, E.style.opacity = "0.8", E.style.transform = "rotate(5deg) scale(1.05)", E.style.pointerEvents = "none", E.style.zIndex = "9999", E.style.transition = "none", E.classList.add("sortable-ghost"), document.body.appendChild(E), E;
    }, g = (b) => {
      c.value && b.clientX && b.clientY && (c.value.style.left = `${b.clientX - c.value.offsetWidth / 2}px`, c.value.style.top = `${b.clientY - c.value.offsetHeight / 2}px`);
    }, h = () => {
      c.value && (document.body.removeChild(c.value), c.value = null);
    }, y = (b, E, H) => {
      if (t.disabled) return;
      b.stopPropagation(), console.log("Drag start:", { item: E, index: H, groupId: t.groupId }), l.value = !0, a.value = E, s.value = H;
      const z = b.currentTarget;
      if (z && (d.value = z, c.value = p(z), z.style.opacity = "0.3", z.style.transform = "scale(0.95)"), b.dataTransfer) {
        const K = {
          item: E,
          sourceGroupId: t.groupId,
          sourceIndex: H
        };
        b.dataTransfer.setData("application/json", JSON.stringify(K)), b.dataTransfer.effectAllowed = "move", console.log("Drag data set:", K);
      }
      r("drag-start", { item: E, groupId: t.groupId, index: H });
    }, w = (b, E, H) => {
      console.log("Drag end:", {
        item: E,
        groupId: t.groupId,
        index: H,
        isDragging: l.value
      }), h(), d.value && (d.value.style.opacity = "1", d.value.style.transform = "scale(1)", d.value = null), l.value = !1, a.value = null, s.value = -1, i.value = -1, u.value = !1, r("drag-end", { item: E, groupId: t.groupId, index: H });
    }, v = (b, E) => {
      var K;
      b.preventDefault(), console.log("Drop event triggered:", {
        isDragging: l.value,
        draggedItem: a.value,
        draggedIndex: s.value,
        targetIndex: E,
        groupId: t.groupId
      });
      const H = (K = b.dataTransfer) == null ? void 0 : K.getData("application/json");
      let z = !1;
      if (H)
        try {
          const F = JSON.parse(H);
          if (console.log("Drag data:", F), F.sourceGroupId !== t.groupId) {
            console.log("Cross-group drop detected"), z = !0, r("cross-group-drag", {
              item: F.item,
              fromGroup: F.sourceGroupId,
              fromIndex: F.sourceIndex
            });
            return;
          }
        } catch (F) {
          console.warn("Failed to parse drag data:", F);
        }
      if (!l.value || !a.value) {
        console.log("No drag state or item - returning early");
        return;
      }
      if (E !== void 0 && E !== s.value) {
        console.log("Within-group reorder:", {
          from: s.value,
          to: E
        });
        const F = [...o.value], [Y] = F.splice(s.value, 1);
        F.splice(E, 0, Y), o.value = F, r("update:items", F), r("item-moved", {
          item: a.value,
          fromGroup: t.groupId,
          toGroup: t.groupId,
          fromIndex: s.value,
          toIndex: E
        });
      }
    }, $ = (b) => {
      b.preventDefault(), b.dataTransfer && (b.dataTransfer.dropEffect = "move"), g(b);
    }, k = (b, E) => {
      console.log(
        "Item drop at index:",
        E,
        "dragged from:",
        s.value
      ), v(b, E);
    }, O = (b, E) => {
      b.preventDefault(), b.dataTransfer && (b.dataTransfer.dropEffect = "move"), g(b), E !== s.value && (i.value = E);
    }, S = (b) => {
      const E = b.currentTarget;
      E && (E.style.opacity = "1");
    }, T = () => {
      i.value = -1;
    }, M = (b) => {
      console.log("Container drop event"), v(b);
    };
    return (b, E) => (C(), D("div", {
      ref_key: "containerElement",
      ref: f,
      class: N(["w-full rounded-lg relative transition-colors", {
        "min-h-[100px]": o.value.length === 0,
        "ring-2 ring-primary/20 bg-primary/5": o.value.length === 0 && l.value
      }]),
      "data-group-id": b.groupId,
      "data-shared-group": b.sharedGroup,
      onDrop: E[0] || (E[0] = (H) => M(H)),
      onDragover: $,
      onDragleave: T
    }, [
      I("div", qi, [
        (C(!0), D(we, null, Ue(o.value, (H, z) => (C(), D("div", {
          key: `${b.groupId}-${H.id || H}`,
          ref_for: !0,
          ref: (K) => {
            K && (m.value[z] = K);
          },
          class: N(["cursor-grab select-none transition-all duration-300 ease-out relative", {
            "opacity-30 scale-95 z-10": l.value && z === s.value,
            "translate-y-2 bg-accent/10 rounded-md": l.value && z === i.value && z !== s.value,
            "hover:translate-y-0.5": !l.value
          }]),
          draggable: "true",
          onDragstart: (K) => y(K, H, z),
          onDragend: (K) => w(K, H, z),
          onDragover: (K) => O(K, z),
          onDrop: (K) => k(K, z),
          onDragleave: S
        }, [
          I("div", {
            class: N(["w-full rounded-md transition-all duration-300 ease-out flex items-center justify-between gap-3 p-3", {
              "ring-2 ring-primary shadow-lg shadow-primary/20 scale-105": l.value && z === s.value,
              "ring-1 ring-accent shadow-md bg-accent/5": l.value && z === i.value && z !== s.value,
              "hover:shadow-md hover:scale-[1.02]": !l.value
            }])
          }, [
            b.$slots.item ? V(b.$slots, "item", {
              key: 0,
              item: H,
              index: z,
              isDragging: l.value && z === s.value,
              isDropTarget: l.value && z === i.value && z !== s.value
            }, void 0, !0) : (C(), D("div", Yi, [
              I("div", Ji, de(H.label || H), 1),
              I("div", {
                class: N(["text-muted-foreground text-sm font-bold transition-all duration-200 select-none", {
                  "opacity-100 text-primary scale-110": l.value && z === s.value,
                  "opacity-60": !l.value
                }])
              }, " ⋮⋮ ", 2)
            ]))
          ], 2)
        ], 42, Ki))), 128))
      ])
    ], 42, Wi));
  }
}), Xr = /* @__PURE__ */ Oe(Xi, [["__scopeId", "data-v-b8148470"]]), Qi = ["disabled", "placeholder", "value"], ef = /* @__PURE__ */ L({
  __name: "Textarea",
  props: {
    disabled: { type: Boolean },
    placeholder: {},
    value: {},
    modelValue: {},
    theme: {}
  },
  emits: ["update:modelValue", "update:value", "input"],
  setup(e, { emit: n }) {
    const t = n, r = (o) => {
      const l = o.target;
      t("update:modelValue", l.value), t("update:value", l.value), t("input", l.value);
    };
    return (o, l) => {
      var a;
      return C(), D("textarea", {
        disabled: o.disabled,
        placeholder: o.placeholder,
        value: o.modelValue ?? o.value,
        onInput: r,
        class: N(
          R(xe)(
            "flex w-full rounded-md border border-ring bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground/70 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40 transition-[box-shadow,color] disabled:cursor-not-allowed disabled:opacity-50",
            ((a = o.theme) == null ? void 0 : a.textarea) || ""
          )
        )
      }, null, 42, Qi);
    };
  }
}), Zi = { class: "flex items-center gap-3" }, eu = { class: "flex items-center gap-2" }, tu = {
  key: 0,
  class: "w-2 h-2 bg-yellow-200 rounded-full m-0.5"
}, ou = ["aria-label"], nu = {
  key: 0,
  class: "w-4 h-4",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
}, ru = {
  key: 1,
  class: "w-4 h-4",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
}, lu = { class: "mt-2 text-xs opacity-70" }, tf = /* @__PURE__ */ L({
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
    const n = e, { isDark: t, background: r, themeClass: o, toggleTheme: l } = Xn(), a = _(() => ["p-4 rounded-lg border transition-colors", {
      default: "bg-card text-card-foreground",
      compact: "bg-muted/50 text-muted-foreground",
      minimal: "bg-transparent"
    }[n.variant], n.theme.container].filter(Boolean).join(" ")), s = _(() => ["font-medium", n.theme.text].filter(Boolean).join(" ")), i = _(() => ["p-2 rounded-md transition-colors hover:bg-accent hover:text-accent-foreground", n.theme.button].filter(Boolean).join(" "));
    return (u, c) => (C(), D("div", {
      class: N(a.value)
    }, [
      I("div", Zi, [
        I("div", eu, [
          I("div", {
            class: N([
              "w-4 h-4 rounded-full border-2 transition-colors",
              R(t) ? "bg-yellow-400 border-yellow-600" : "bg-blue-400 border-blue-600"
            ])
          }, [
            R(t) ? (C(), D("div", tu)) : ae("", !0)
          ], 2),
          I("span", {
            class: N(s.value)
          }, de(R(t) ? "Dark" : "Light") + " Theme ", 3)
        ]),
        I("button", {
          onClick: c[0] || (c[0] = //@ts-ignore
          (...d) => R(l) && R(l)(...d)),
          class: N(i.value),
          type: "button",
          "aria-label": `Switch to ${R(t) ? "light" : "dark"} theme`
        }, [
          R(t) ? (C(), D("svg", nu, c[1] || (c[1] = [
            I("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            }, null, -1)
          ]))) : (C(), D("svg", ru, c[2] || (c[2] = [
            I("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            }, null, -1)
          ])))
        ], 10, ou)
      ]),
      I("div", lu, [
        I("p", null, "Background: " + de(R(r)), 1),
        I("p", null, "Theme Class: " + de(R(o)), 1)
      ])
    ], 2));
  }
}), au = { class: "relative" }, of = /* @__PURE__ */ L({
  __name: "Tooltip",
  setup(e, { expose: n }) {
    const t = x(!1), r = x(), o = x("body"), l = eo({
      isVisible: _(() => t.value),
      triggerRef: r,
      show: () => {
        t.value = !0;
      },
      hide: () => {
        t.value = !1;
      },
      setTriggerRef: (a) => {
        r.value = a;
      },
      portalTarget: _(() => o.value)
    });
    return me("tooltip", l), me("triggerRef", r), n({
      isVisible: t,
      show: l.show,
      hide: l.hide,
      triggerRef: r,
      portalTarget: o
    }), (a, s) => (C(), D("div", au, [
      V(a.$slots, "default")
    ]));
  }
}), su = {
  role: "tooltip",
  class: "relative max-w-xs rounded-md bg-tooltip px-3 py-2 text-sm text-tooltip-foreground shadow-lg pointer-events-auto transform-gpu"
}, nf = /* @__PURE__ */ L({
  __name: "TooltipContent",
  props: {
    side: { default: "top" },
    align: { default: "center" },
    sideOffset: { default: 8 },
    alignOffset: { default: 0 },
    avoidCollisions: { type: Boolean, default: !0 }
  },
  setup(e) {
    const n = e, t = se("tooltip"), r = se("triggerRef"), o = x(), l = x(), a = _(
      () => {
        var p;
        return (r == null ? void 0 : r.value) || ((p = t == null ? void 0 : t.triggerRef) == null ? void 0 : p.value);
      }
    ), s = _(() => `${n.side}-${n.align}`), { floatingStyles: i, middlewareData: u, update: c } = Ht(
      a || x(null),
      o,
      {
        strategy: "fixed",
        placement: s,
        middleware: [
          Nt({
            mainAxis: n.sideOffset,
            crossAxis: n.alignOffset
          }),
          ...n.avoidCollisions ? [sn()] : [],
          ...n.avoidCollisions ? [Gt()] : [],
          La({ element: l })
        ]
      }
    ), d = _(() => {
      var g;
      const p = (g = u.value) == null ? void 0 : g.flip;
      return p && p.overflows && p.overflows.length > 0 ? p.overflows[0].placement : n.side;
    });
    oe(
      [
        () => n.side,
        () => n.align,
        () => n.sideOffset,
        () => n.alignOffset
      ],
      () => {
        Ve(() => {
          c();
        });
      }
    ), oe(
      () => t == null ? void 0 : t.isVisible,
      (p) => {
        p && Ve(() => {
          c();
        });
      },
      { immediate: !0 }
    ), oe(i, (p) => {
      process.env.NODE_ENV === "development" && console.log("Tooltip positioning:", {
        requestedPlacement: s.value,
        actualPlacement: d.value,
        styles: p,
        triggerRef: a.value,
        contentRef: o.value
      });
    });
    const m = _(() => {
      const p = d.value, [g, h] = p.split("-"), y = h || "center";
      switch (g) {
        case "top":
          switch (y) {
            case "start":
              return "bottom-[-4px] left-4";
            case "end":
              return "bottom-[-4px] right-4";
            default:
              return "bottom-[-4px] left-1/2 transform -translate-x-1/2";
          }
        case "bottom":
          switch (y) {
            case "start":
              return "top-[-4px] left-4";
            case "end":
              return "top-[-4px] right-4";
            default:
              return "top-[-4px] left-1/2 transform -translate-x-1/2";
          }
        case "left":
          switch (y) {
            case "start":
              return "right-[-4px] top-4";
            case "end":
              return "right-[-4px] bottom-4";
            default:
              return "right-[-4px] top-1/2 transform -translate-y-1/2";
          }
        case "right":
          switch (y) {
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
      return ((p = u.value) == null ? void 0 : p.arrow) || {};
    });
    return ne(async () => {
      await Ve(), setTimeout(() => {
        c();
      }, 100);
    }), (p, g) => {
      var h;
      return C(), ue(to, {
        to: ((h = R(t)) == null ? void 0 : h.portalTarget) || "body"
      }, [
        I("div", {
          ref_key: "contentRef",
          ref: o,
          class: "fixed z-[9999] pointer-events-none",
          style: ot(R(i))
        }, [
          U(We, {
            "enter-active-class": "transition-all duration-200 ease-out",
            "leave-active-class": "transition-all duration-150 ease-in",
            "enter-from-class": "opacity-0 scale-95 translate-y-1",
            "enter-to-class": "opacity-100 scale-100 translate-y-0",
            "leave-from-class": "opacity-100 scale-100 translate-y-0",
            "leave-to-class": "opacity-0 scale-95 translate-y-1"
          }, {
            default: W(() => {
              var y;
              return [
                wt(I("div", su, [
                  V(p.$slots, "default"),
                  I("div", {
                    ref_key: "arrowRef",
                    ref: l,
                    class: N(["absolute w-2 h-2 bg-tooltip rotate-45", m.value]),
                    style: ot(f.value)
                  }, null, 6)
                ], 512), [
                  [kt, (y = R(t)) == null ? void 0 : y.isVisible]
                ])
              ];
            }),
            _: 3
          })
        ], 4)
      ], 8, ["to"]);
    };
  }
}), rf = /* @__PURE__ */ L({
  __name: "TooltipTrigger",
  props: {
    delay: { default: 300 },
    hideDelay: { default: 0 }
  },
  setup(e) {
    const n = e, t = se("tooltip"), r = x();
    let o = null, l = null;
    const a = () => {
      l && (clearTimeout(l), l = null), n.delay > 0 ? o = window.setTimeout(() => {
        t == null || t.show();
      }, n.delay) : t == null || t.show();
    }, s = () => {
      o && (clearTimeout(o), o = null), n.hideDelay > 0 ? l = window.setTimeout(() => {
        t == null || t.hide();
      }, n.hideDelay) : t == null || t.hide();
    }, i = () => {
      n.delay > 0 ? o = window.setTimeout(() => {
        t == null || t.show();
      }, n.delay) : t == null || t.show();
    }, u = () => {
      o && (clearTimeout(o), o = null), t == null || t.hide();
    };
    return ne(() => {
      r.value && (t == null || t.setTriggerRef(r.value), process.env.NODE_ENV === "development" && console.log("TooltipTrigger mounted:", {
        triggerRef: r.value,
        tooltip: t
      }));
    }), ve(() => {
      o && clearTimeout(o), l && clearTimeout(l);
    }), (c, d) => (C(), D("div", {
      ref_key: "triggerRef",
      ref: r,
      onMouseenter: a,
      onMouseleave: s,
      onFocus: i,
      onBlur: u
    }, [
      V(c.$slots, "default")
    ], 544));
  }
}), iu = { class: "relative" }, uu = { key: 0 }, cu = { class: "flex items-center gap-2" }, du = { key: 2 }, fu = { key: 1 }, pu = { key: 3 }, mu = { class: "border-t border-border px-2 first:border-t-0 py-2 first:pt-0 last:pb-0" }, vu = { class: "flex items-center text-base font-medium" }, gu = { key: 1 }, hu = { class: "-mx-2.5" }, bu = { key: 1 }, yu = { key: 1 }, Qr = /* @__PURE__ */ L({
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
        Gt({
          padding: 10,
          limiter: cn({
            offset: 10
          })
        }),
        Oo({
          allowedPlacements: ["top-start", "bottom-start"]
        }),
        Nt(10),
        un({
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
    const r = t, o = e, l = x([]), a = x(), s = x(""), i = x(), u = x(!1), c = x(!1), d = x(!1), m = _({
      get: () => o.modelValue,
      set: (g) => {
        r("update:modelValue", g);
      }
    }), { floatingStyles: f } = Ht(i, a, {
      strategy: o.floatingOptions.strategy,
      transform: o.floatingOptions.transform,
      placement: o.floatingOptions.placement,
      middleware: o.floatingOptions.middleware,
      whileElementsMounted: o.floatingOptions.whileElementsMounted
    });
    oe(
      () => s.value,
      pl(async () => {
        const g = new AbortController();
        o.searcher ? (u.value = !0, l.value = await o.searcher(
          s.value,
          g
        ), u.value = !1) : l.value = [];
      }, o.debounce)
    ), oe(
      () => o.defaultItems,
      (g) => {
        l.value = g;
      },
      { immediate: !0 }
    );
    const p = (g, h) => g.reduce(
      (y, w) => {
        var v;
        return (y[v = h(w)] || (y[v] = [])).push(w), y;
      },
      {}
    );
    return n({
      focused: d,
      query: s,
      searching: u
    }), (g, h) => (C(), D("div", {
      class: N(R(xe)("relative rounded-lg"))
    }, [
      U(R(gn), {
        "model-value": m.value,
        immediate: g.immediate,
        nullable: g.nullable,
        multiple: g.multiple,
        "onUpdate:modelValue": h[3] || (h[3] = (y) => m.value = y)
      }, {
        default: W(() => [
          I("div", iu, [
            I("div", {
              ref_key: "reference",
              ref: i,
              class: N(R(xe)(g.theme.baseDropdownInputContainer))
            }, [
              U(R(bn), {
                class: N(
                  R(xe)(
                    "flex w-full rounded-md border bg-background pl-2.5 py-1.5 pr-8 text-sm truncate ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40 transition-[box-shadow,color] disabled:cursor-not-allowed disabled:opacity-50 shadow-xs",
                    g.theme.baseDropdownInputText
                  )
                ),
                displayValue: g.displayProperty,
                placeholder: g.placeholder,
                autoComplete: "off",
                onFocus: h[0] || (h[0] = () => {
                  c.value = !0, d.value = !0;
                }),
                onBlur: h[1] || (h[1] = (y) => d.value = !1),
                onChange: h[2] || (h[2] = (y) => s.value = y.target.value)
              }, null, 8, ["class", "displayValue", "placeholder"]),
              U(R(hn), {
                class: N([
                  "absolute inset-y-0 right-0 flex items-center pr-2 text-muted-foreground"
                ])
              }, {
                default: W(() => [
                  U(R(Qo), { class: "size-4 text-inherit" })
                ]),
                _: 1
              })
            ], 2),
            U(We, {
              "enter-active-class": "transition duration-200 ease-out",
              "enter-from-class": "translate-y-1 opacity-0",
              "enter-to-class": "translate-y-0 opacity-100",
              "leave-active-class": "transition duration-150 ease-in",
              "leave-from-class": "translate-y-0 opacity-100",
              "leave-to-class": "translate-y-1 opacity-0"
            }, {
              default: W(() => [
                U(R(yn), {
                  ref_key: "floating",
                  ref: a,
                  class: N(
                    R(xe)(
                      "fixed left-0 z-10 overflow-x-hidden overflow-y-auto rounded-lg bg-popover p-3 text-base shadow-lg ring-1 ring-black/5 focus:outline-hidden sm:text-sm",
                      g.theme.generalFloatingPanelContainer
                    )
                  ),
                  style: ot(R(f)),
                  static: g.isStatic
                }, {
                  default: W(() => [
                    g.$slots.static ? (C(), D("div", uu, [
                      V(g.$slots, "static", Ct(zt({ query: s.value, searching: u.value })))
                    ])) : ae("", !0),
                    u.value ? V(g.$slots, "searching", { key: 1 }, () => [
                      I("span", cu, [
                        U(R(Gl), { class: "size-4 animate-spin" }),
                        h[4] || (h[4] = I("span", null, "Searching...", -1))
                      ])
                    ]) : ae("", !0),
                    l.value.length === 0 && !u.value ? (C(), D("div", du, [
                      g.$slots.empty ? V(g.$slots, "empty", { key: 0 }) : (C(), D("span", fu, "No results"))
                    ])) : ae("", !0),
                    g.groupBy && !u.value ? (C(), D("div", pu, [
                      (C(!0), D(we, null, Ue(p(
                        [
                          ...g.prependItems,
                          ...l.value,
                          ...g.postpendItems
                        ],
                        (y) => y[g.groupBy]
                      ), (y, w) => (C(), D("div", mu, [
                        I("div", vu, [
                          g.$slots.group ? V(g.$slots, "group", yt({
                            key: 0,
                            ref_for: !0
                          }, {
                            group: y,
                            groupName: w
                          })) : (C(), D("span", gu, de([
                            "undefined",
                            null,
                            void 0
                          ].includes(w) ? "Uncategorized" : w), 1))
                        ]),
                        I("div", hu, [
                          u.value ? ae("", !0) : (C(!0), D(we, { key: 0 }, Ue(y, (v) => (C(), ue(R(Zt), {
                            key: v[g.uidProperty],
                            value: v
                          }, {
                            default: W(({ active: $, selected: k }) => [
                              I("span", {
                                class: N([
                                  "cursor-pointer hover:bg-accent rounded-md px-2 py-1 flex w-full truncate",
                                  $ && "bg-accent",
                                  k && "bg-accent"
                                ])
                              }, [
                                g.$slots.item ? V(g.$slots, "item", yt({
                                  key: 0,
                                  ref_for: !0
                                }, {
                                  item: v,
                                  active: $,
                                  selected: k
                                })) : (C(), D("span", bu, de(g.displayProperty(v)), 1))
                              ], 2)
                            ]),
                            _: 2
                          }, 1032, ["value"]))), 128))
                        ])
                      ]))), 256))
                    ])) : u.value ? ae("", !0) : (C(!0), D(we, { key: 4 }, Ue(l.value, (y) => (C(), ue(R(Zt), {
                      key: y[g.uidProperty],
                      value: y
                    }, {
                      default: W(({ active: w, selected: v }) => [
                        I("span", {
                          class: N([
                            "cursor-pointer hover:bg-accent rounded-md px-2 py-1 flex w-full truncate",
                            w && "bg-accent",
                            v && "bg-accent"
                          ])
                        }, [
                          g.$slots.item ? V(g.$slots, "item", yt({
                            key: 0,
                            ref_for: !0
                          }, { item: y, active: w, selected: v })) : (C(), D("span", yu, de(g.displayProperty(y)), 1))
                        ], 2)
                      ]),
                      _: 2
                    }, 1032, ["value"]))), 128)),
                    g.$slots.options ? V(g.$slots, "options", Ct(yt({ key: 5 }, { filteredItems: l.value }))) : ae("", !0)
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
}), xu = { class: "relative w-full overflow-auto" }, lf = /* @__PURE__ */ L({
  __name: "Table",
  props: {
    class: {},
    striped: { type: Boolean },
    spacing: {}
  },
  setup(e) {
    const n = e, t = xe(
      "relative w-full overflow-auto",
      n.class,
      n.striped && "table-striped",
      n.spacing === "compact" && "table-compact",
      n.spacing === "normal" && "table-normal"
    );
    return (r, o) => (C(), D("div", xu, [
      I("table", {
        class: N([R(t), "group/table w-full caption-bottom text-sm"])
      }, [
        V(r.$slots, "default")
      ], 2)
    ]));
  }
}), wu = {}, ku = { class: "[&_tr:last-child]:border-0" };
function Cu(e, n) {
  return C(), D("tbody", ku, [
    V(e.$slots, "default")
  ]);
}
const af = /* @__PURE__ */ Oe(wu, [["render", Cu]]), _u = {}, $u = { class: "mt-4 text-sm text-muted-foreground" };
function Ou(e, n) {
  return C(), D("caption", $u, [
    V(e.$slots, "default")
  ]);
}
const sf = /* @__PURE__ */ Oe(_u, [["render", Ou]]), Su = {}, Tu = { class: "p-4 align-middle [&:has([role=checkbox])]:pr-0 group-[.table-compact]/table:p-2" };
function Eu(e, n) {
  return C(), D("td", Tu, [
    V(e.$slots, "default")
  ]);
}
const uf = /* @__PURE__ */ Oe(Su, [["render", Eu]]), Du = {}, Pu = { class: "border-t bg-muted/50 [&>tr]:last:border-b-0" };
function Iu(e, n) {
  return C(), D("tfoot", Pu, [
    V(e.$slots, "default")
  ]);
}
const cf = /* @__PURE__ */ Oe(Du, [["render", Iu]]), Ru = {}, Bu = { class: "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 group-[.table-compact]/table:h-9 group-[.table-compact]/table:px-2" };
function Mu(e, n) {
  return C(), D("th", Bu, [
    V(e.$slots, "default")
  ]);
}
const df = /* @__PURE__ */ Oe(Ru, [["render", Mu]]), Au = {}, Lu = { class: "[&_tr]:border-b" };
function Vu(e, n) {
  return C(), D("thead", Lu, [
    V(e.$slots, "default")
  ]);
}
const ff = /* @__PURE__ */ Oe(Au, [["render", Vu]]), Fu = {}, zu = { class: "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted group-[.table-striped]/table:even:bg-muted" };
function ju(e, n) {
  return C(), D("tr", zu, [
    V(e.$slots, "default")
  ]);
}
const pf = /* @__PURE__ */ Oe(Fu, [["render", ju]]), Nu = {
  "aria-label": "Breadcrumb",
  class: "flex"
}, mf = /* @__PURE__ */ L({
  __name: "Breadcrumbs",
  setup(e) {
    const n = x([]), t = eo({
      items: _(() => n.value),
      addItem: (r) => {
        const o = n.value.findIndex((l) => l.id === r.id);
        o >= 0 ? n.value[o] = {
          ...n.value[o],
          ...r
        } : n.value.push(r);
      },
      removeItem: (r) => {
        const o = n.value.findIndex((l) => l.id === r);
        o >= 0 && n.value.splice(o, 1);
      },
      updateItem: (r, o) => {
        const l = n.value.findIndex((a) => a.id === r);
        l >= 0 && (n.value[l] = { ...n.value[l], ...o });
      },
      getItems: () => n.value
    });
    return me("breadcrumb", t), (r, o) => (C(), D("nav", Nu, [
      V(r.$slots, "default")
    ]));
  }
}), Gu = { class: "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground" }, vf = /* @__PURE__ */ L({
  __name: "BreadcrumbList",
  setup(e) {
    return (n, t) => (C(), D("ol", Gu, [
      V(n.$slots, "default")
    ]));
  }
}), Hu = { class: "inline-flex items-center gap-1.5" }, gf = /* @__PURE__ */ L({
  __name: "BreadcrumbItem",
  setup(e) {
    return (n, t) => (C(), D("li", Hu, [
      V(n.$slots, "default")
    ]));
  }
}), hf = /* @__PURE__ */ L({
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
    const t = e, r = n, o = _(() => t.asChild ? "slot" : t.to ? "router-link" : "a");
    function l(a) {
      r("click", a);
    }
    return (a, s) => (C(), ue(Xo(o.value), {
      href: a.href,
      to: a.to,
      class: N(
        R(xe)(
          "transition-colors hover:text-foreground",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          "rounded-sm focus-visible:ring-offset-background",
          a.theme.link
        )
      ),
      onClick: l
    }, {
      default: W(() => [
        V(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["href", "to", "class"]));
  }
}), bf = /* @__PURE__ */ L({
  __name: "BreadcrumbPage",
  props: {
    theme: { default: () => ({
      page: ""
    }) }
  },
  setup(e) {
    return (n, t) => (C(), D("span", {
      class: N(
        R(xe)(
          "font-normal text-foreground",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          "rounded-sm focus-visible:ring-offset-background",
          n.theme.page
        )
      ),
      tabindex: "0"
    }, [
      V(n.$slots, "default")
    ], 2));
  }
}), yf = /* @__PURE__ */ L({
  __name: "BreadcrumbSeparator",
  props: {
    theme: { default: () => ({
      separator: ""
    }) }
  },
  setup(e) {
    return (n, t) => (C(), D("span", {
      class: N(R(xe)("size-3.5", n.theme.separator)),
      role: "presentation"
    }, [
      V(n.$slots, "default", {}, () => [
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
}), xf = /* @__PURE__ */ L({
  __name: "BreadcrumbEllipsis",
  props: {
    theme: { default: () => ({
      ellipsis: ""
    }) }
  },
  setup(e) {
    return (n, t) => (C(), D("span", {
      class: N(
        R(xe)(
          "flex size-9 items-center justify-center",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          "rounded-sm focus-visible:ring-offset-background",
          n.theme.ellipsis
        )
      ),
      role: "presentation",
      tabindex: "0"
    }, [
      V(n.$slots, "default", {}, () => [
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
}), Uu = { class: "space-y-4" }, Wu = ["onMouseenter", "onMouseleave"], qu = { class: "font-semibold" }, Ku = { class: "text-sm text-zinc-500" }, wf = /* @__PURE__ */ L({
  __name: "AnnouncementsDrawer",
  props: {
    classes: { default: () => [""] },
    tips: { default: () => [] }
  },
  setup(e) {
    function n(r) {
      document.querySelectorAll(r).forEach((o) => {
        o.classList.add("active");
      });
    }
    function t(r) {
      document.querySelectorAll(r).forEach((o) => {
        o.classList.remove("active");
      });
    }
    return (r, o) => (C(), D("div", {
      class: N(
        R(xe)(
          "flex h-full w-full max-w-sm flex-col overflow-hidden border-l border-zinc-300/80 p-5",
          ...r.classes
        )
      )
    }, [
      I("ul", Uu, [
        (C(!0), D(we, null, Ue(r.tips, (l) => (C(), D("li", {
          key: l.title,
          class: "space-y-3 rounded-lg border border-zinc-300/80 p-3 hover:shadow-md",
          onMouseenter: (a) => n(l.target),
          onMouseleave: (a) => t(l.target)
        }, [
          I("div", null, [
            U(fl, { classes: ["py-1.5"] }, {
              default: W(() => [
                Je(de(l.type), 1)
              ]),
              _: 2
            }, 1024)
          ]),
          I("div", null, [
            I("div", qu, de(l.title), 1),
            I("p", Ku, de(l.description), 1)
          ])
        ], 40, Wu))), 128))
      ])
    ], 2));
  }
}), Yu = { class: "flex flex-col space-y-4" }, Ju = { class: "space-y-2" }, Xu = { class: "space-y-2" }, Qu = { class: "flex justify-end" }, Zu = /* @__PURE__ */ L({
  __name: "ColumnManagerGroupMetaForm",
  props: {
    defaultGroupColor: {},
    disabled: {},
    modelValue: {},
    groupId: {}
  },
  emits: ["update:modelValue", "update"],
  setup(e, { emit: n }) {
    const t = e, r = n;
    x(!1);
    const o = x({
      ...t.modelValue,
      id: t.groupId
    }), l = x();
    oe(
      () => t.modelValue,
      (s) => {
        o.value = {
          ...s,
          id: t.groupId
        };
      },
      { deep: !0 }
    );
    const a = (s) => {
      s();
      const i = {
        ...o.value,
        id: t.groupId
      };
      r("update:modelValue", i), r("update", t.groupId);
    };
    return (s, i) => !s.disabled.includes("groups") && o.value ? (C(), ue(Ui, {
      key: 0,
      ref_key: "popover",
      ref: l,
      theme: {
        popoverMenu: "leading-none",
        popoverMenuButton: "rounded-md size-6 flex items-center justify-center hover:bg-zinc-100"
      }
    }, {
      trigger: W(() => [
        I("span", {
          class: "block h-3 w-3 rounded-full",
          style: ot(`background-color: ${o.value.color || s.defaultGroupColor};`)
        }, null, 4)
      ]),
      default: W(({ close: u }) => [
        I("div", Yu, [
          I("div", Ju, [
            i[2] || (i[2] = I("div", { class: "block text-sm font-medium text-foreground" }, " Group name ", -1)),
            U(Jr, {
              modelValue: o.value.name,
              "onUpdate:modelValue": i[0] || (i[0] = (c) => o.value.name = c),
              type: "text",
              placeholder: `${o.value.name}`,
              theme: {
                input: "py-1.5"
              }
            }, null, 8, ["modelValue", "placeholder"])
          ]),
          I("div", Xu, [
            i[3] || (i[3] = I("div", { class: "block text-sm font-medium text-foreground" }, " Group color ", -1)),
            U(Zl, {
              "model-value": o.value.color,
              "onUpdate:modelValue": i[1] || (i[1] = (c) => o.value.color = c)
            }, null, 8, ["model-value"])
          ]),
          I("div", Qu, [
            U(Ge, {
              onClick: (c) => a(u),
              size: "sm",
              variant: "outline"
            }, {
              default: W(() => i[4] || (i[4] = [
                Je(" Save ")
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
}), Zr = Symbol("ColumnManagerContext");
function ec(e) {
  me(Zr, e);
}
function Do() {
  const e = se(Zr);
  if (!e)
    throw new Error(
      "useColumnManagerContext must be used within a ColumnManager provider"
    );
  return e;
}
const tc = { class: "flex min-w-px grow items-center space-x-2 text-base pl-1 pr-2" }, oc = { class: "font-semibold grow" }, nc = /* @__PURE__ */ L({
  __name: "ColumnManagerGroupHeader",
  props: {
    group: {},
    defaultGroupColor: { default: "#e7e5e4" }
  },
  emits: ["group-update", "add-column", "edit-group", "delete-group"],
  setup(e, { emit: n }) {
    const t = e, r = n, l = Do().disabled || [], a = x({ ...t.group });
    oe(
      () => t.group,
      (i) => {
        a.value = { ...i };
      },
      { deep: !0 }
    );
    const s = (i) => {
      r("group-update", a.value);
    };
    return (i, u) => (C(), D("div", tc, [
      V(i.$slots, "drag-handle"),
      U(Zu, {
        modelValue: a.value,
        "onUpdate:modelValue": u[0] || (u[0] = (c) => a.value = c),
        "default-group-color": i.defaultGroupColor,
        disabled: R(l),
        "group-id": i.group.id,
        onUpdate: s
      }, null, 8, ["modelValue", "default-group-color", "disabled", "group-id"]),
      I("span", oc, de(a.value.name), 1),
      U(R(vi), null, {
        default: W(() => [
          U(R(ki), { asChild: "" }, {
            default: W(() => [
              U(R(Ge), {
                variant: "outline",
                size: "sm",
                class: "size-6 text-muted-foreground p-0"
              }, {
                default: W(() => [
                  U(R(Qo), { class: "size-3.5" })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          U(R(gi), {
            class: "w-40",
            side: "bottom",
            align: "end"
          }, {
            default: W(() => [
              V(i.$slots, "dropdown-content", {
                group: i.group,
                groupData: a.value,
                emit: r
              }, () => [
                U(R(zo), {
                  onSelect: u[1] || (u[1] = (c) => r("add-column"))
                }, {
                  default: W(() => u[4] || (u[4] = [
                    Je(" Add column ")
                  ])),
                  _: 1,
                  __: [4]
                }),
                U(R(yi)),
                U(R(zo), {
                  onSelect: u[2] || (u[2] = (c) => r("edit-group", a.value))
                }, {
                  default: W(() => u[5] || (u[5] = [
                    Je(" Edit group ")
                  ])),
                  _: 1,
                  __: [5]
                }),
                U(R(zo), {
                  onSelect: u[3] || (u[3] = (c) => r("delete-group", a.value))
                }, {
                  default: W(() => u[6] || (u[6] = [
                    Je(" Delete group ")
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
}), rc = ["data-sortable-item-id"], lc = { class: "flex-1 min-w-px flex text-sm" }, ac = { class: "ml-auto flex items-center space-x-0.5" }, sc = /* @__PURE__ */ L({
  __name: "ColumnManagerColumn",
  props: {
    column: {},
    index: {}
  },
  emits: ["remove", "edit", "click"],
  setup(e, { emit: n }) {
    const t = e, r = n, o = () => {
      r("remove", String(t.column.id));
    }, l = () => {
      r("edit", t.column);
    };
    return (a, s) => (C(), D("div", {
      class: "group flex w-full hover:bg-accent/40 p-1 rounded-md items-center gap-2 [&.selected]:bg-accent/50",
      "data-sortable-item-id": a.column.id,
      onClick: s[0] || (s[0] = (i) => a.$emit("click", i))
    }, [
      V(a.$slots, "drag-handle", {}, () => [
        U(Ge, {
          variant: "ghost",
          size: "xs",
          icon: "",
          class: "drag-handle shrink-0 size-6 text-muted-foreground/70 hover:text-foreground rounded-sm hover:bg-black/5"
        }, {
          default: W(() => [
            U(R(Nl), { class: "size-3.5 shrink-0" })
          ]),
          _: 1
        })
      ]),
      V(a.$slots, "content", { column: a.column }, () => [
        I("div", lc, de(a.column.name), 1)
      ]),
      I("div", ac, [
        V(a.$slots, "actions", {
          column: a.column,
          onRemove: o,
          onEdit: l
        }, () => [
          U(Ge, {
            onClick: Ft(o, ["prevent", "stop"]),
            variant: "ghost",
            size: "xs",
            icon: "",
            class: "shrink-0 size-6 rounded-sm text-muted-foreground/70 hover:text-foreground hover:bg-black/5"
          }, {
            default: W(() => [
              U(R(oo), { class: "size-3.5 shrink-0" })
            ]),
            _: 1
          }),
          U(Ge, {
            onClick: Ft(l, ["prevent", "stop"]),
            variant: "ghost",
            size: "xs",
            icon: "",
            class: "shrink-0 size-6 rounded-sm text-muted-foreground/70 hover:text-foreground hover:bg-black/5"
          }, {
            default: W(() => [
              U(R(jl), { class: "size-3.5 shrink-0" })
            ]),
            _: 1
          })
        ])
      ])
    ], 8, rc));
  }
}), ic = {
  key: 0,
  class: "w-full relative"
}, uc = {
  key: 0,
  class: "absolute z-1 inset-0 p-3 text-center border border-dashed border-muted rounded-lg bg-muted/30 flex items-center justify-center"
}, cc = /* @__PURE__ */ L({
  __name: "ColumnManagerColumnList",
  props: {
    columns: {},
    groupId: {},
    draggingGroup: { type: Boolean }
  },
  emits: ["column-add", "column-remove", "column-reordered", "column-edit", "column-click", "column-drag-start", "column-drag-end", "column-drag-enter", "column-drag-leave"],
  setup(e, { emit: n }) {
    const t = e, r = n;
    Do();
    const o = (d) => {
      r("column-reordered", {
        groupId: t.groupId,
        newColumns: d
      });
    }, l = (d) => {
      r("column-reordered", {
        groupId: t.groupId,
        newColumns: d.newColumns || d
      });
    }, a = (d) => {
      if (d.fromGroup && d.fromGroup !== t.groupId) {
        const m = {
          fromGroup: d.fromGroup,
          fromIndex: d.fromIndex,
          item: d.item,
          toGroup: t.groupId
        };
        r("column-add", m);
      }
    }, s = (d) => {
      r("column-remove", d);
    }, i = (d) => {
      r("column-edit", d);
    }, u = () => {
      r("column-drag-start", {});
    }, c = () => {
      r("column-drag-end", {});
    };
    return (d, m) => d.draggingGroup ? ae("", !0) : (C(), D("div", ic, [
      U(Xr, {
        items: d.columns,
        "group-id": d.groupId,
        "shared-group": "shared-columns",
        disabled: !1,
        class: "relative z-2",
        "onUpdate:items": o,
        onItemMoved: l,
        onCrossGroupDrag: a,
        onDragStart: u,
        onDragEnd: c
      }, {
        item: W(({ item: f, index: p, isDragging: g, isDropTarget: h }) => [
          U(sc, {
            column: f,
            index: p,
            onRemove: s,
            onEdit: i
          }, {
            content: W(({ column: y }) => [
              V(d.$slots, "column-content", { column: y }, void 0, !0)
            ]),
            actions: W(({ column: y, onRemove: w, onEdit: v }) => [
              V(d.$slots, "column-actions", {
                column: y,
                onRemove: w,
                onEdit: v
              }, void 0, !0)
            ]),
            _: 2
          }, 1032, ["column", "index"])
        ]),
        _: 3
      }, 8, ["items", "group-id"]),
      d.columns.length === 0 ? (C(), D("div", uc, m[0] || (m[0] = [
        I("p", { class: "text-sm text-muted-foreground" }, " There are no columns here yet. Use the picker above to add the first column. ", -1)
      ]))) : ae("", !0)
    ]));
  }
}), dc = /* @__PURE__ */ Oe(cc, [["__scopeId", "data-v-75b3ad55"]]), fc = { class: "group flex items-center space-x-2 py-1 px-2" }, pc = /* @__PURE__ */ L({
  __name: "ColumnManagerColumnPicker",
  props: {
    groupId: {},
    availableColumns: {}
  },
  emits: ["column-add", "close"],
  setup(e, { emit: n }) {
    const t = e, r = n, l = Do().searcher || (() => Promise.resolve([])), a = x({}), s = x(""), i = x({
      autoPlacement: {
        allowedPlacements: ["top-start", "bottom-start"]
      },
      buffer: 20,
      size: {}
    }), u = (c) => {
      c && r("column-add", t.groupId, c);
    };
    return (c, d) => (C(), D("div", fc, [
      U(Qr, {
        class: "grow",
        "default-items": c.availableColumns,
        "display-property": () => "",
        "groups-config": a.value,
        "group-by": s.value,
        multiple: !1,
        nullable: !0,
        searcher: R(l),
        "middleware-options": i.value,
        placeholder: "Add a column to group",
        "onUpdate:modelValue": u
      }, rl({
        empty: W(() => [
          U(Yr, {
            icon: "fa-exclamation-circle",
            title: "No columns found"
          }, {
            default: W(() => d[1] || (d[1] = [
              I("p", null, " There are no columns to show at this time. Try a different search. ", -1)
            ])),
            _: 1,
            __: [1]
          })
        ]),
        static: W(() => [
          I("div", null, [
            V(c.$slots, "typeahead-static")
          ])
        ]),
        item: W(({ item: m, selected: f, active: p }) => [
          V(c.$slots, "option", Ct(zt({ item: m, selected: f, active: p })))
        ]),
        _: 2
      }, [
        c.$slots["typeahead-group"] ? {
          name: "group",
          fn: W((m) => [
            V(c.$slots, "typeahead-group", Ct(zt(m)))
          ]),
          key: "0"
        } : void 0,
        c.$slots["typeahead-searching"] ? {
          name: "searching",
          fn: W(() => [
            I("div", null, [
              V(c.$slots, "typeahead-searching")
            ])
          ]),
          key: "1"
        } : void 0
      ]), 1032, ["default-items", "groups-config", "group-by", "searcher", "middleware-options"]),
      U(R(Ge), {
        variant: "ghost",
        class: "text-muted-foreground p-0 w-5 hover:bg-accent/40",
        onClick: d[0] || (d[0] = (m) => r("close"))
      }, {
        default: W(() => [
          U(R(oo), { class: "size-4" })
        ]),
        _: 1
      })
    ]));
  }
}), mc = { class: "sortable-drag flex min-w-px grow items-center space-x-2 text-base" }, vc = /* @__PURE__ */ L({
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
    const t = e, r = n, o = Do(), l = o.draggedOverGroupId, a = o.setDraggedOverGroupId, s = x(!1), i = o.isDraggingColumn, u = _(() => (i == null ? void 0 : i.value) && (l == null ? void 0 : l.value) === t.group.id), c = (M) => {
      M.preventDefault(), M.dataTransfer && (M.dataTransfer.dropEffect = "move"), i != null && i.value && a && a(t.group.id);
    }, d = (M) => {
      const b = M.currentTarget, E = M.relatedTarget;
      b && E && !b.contains(E) && a && a(null);
    }, m = (M) => {
      a && a(null);
    }, f = (M) => {
      r("group-update", M);
    }, p = (M, b) => {
      r("column-add", M, b), s.value = !1;
    }, g = (M) => {
      r("column-added", M);
    }, h = (M) => {
      r("column-removed", M);
    }, y = (M) => {
      r("column-reordered", M);
    }, w = (M) => {
      r("column-edit", M);
    }, v = (M) => {
      r("column-drag-start", M);
    }, $ = (M) => {
      r("column-drag-end", M);
    }, k = (M, b) => {
      r("column-drag-enter", M, b);
    }, O = (M, b) => {
      r("column-drag-leave", M, b);
    }, S = (M) => {
      r("edit-group", M);
    }, T = (M) => {
      r("delete-group", M);
    };
    return (M, b) => (C(), D("div", {
      class: N(["mb-2 w-full space-y-2", {
        "ring-2 rounded-md ring-primary/20 bg-primary/5": u.value
      }]),
      onDragover: c,
      onDragleave: d,
      onDrop: m
    }, [
      I("div", mc, [
        V(M.$slots, "drag-handle"),
        U(nc, {
          group: M.group,
          "default-group-color": M.defaultGroupColor,
          onGroupUpdate: f,
          onAddColumn: b[0] || (b[0] = (E) => s.value = !0),
          onEditGroup: S,
          onDeleteGroup: T
        }, {
          "dropdown-content": W(({ group: E, groupData: H, emit: z }) => [
            V(M.$slots, "dropdown-content", {
              group: E,
              groupData: H,
              emit: z
            })
          ]),
          _: 3
        }, 8, ["group", "default-group-color"])
      ]),
      !M.draggingGroup && s.value ? (C(), ue(pc, {
        key: 0,
        "group-id": M.group.id,
        "available-columns": M.availableColumns,
        onColumnAdd: p,
        onClose: b[1] || (b[1] = (E) => s.value = !1)
      }, {
        option: W(({ item: E, selected: H, active: z }) => [
          V(M.$slots, "option", Ct(zt({ item: E, selected: H, active: z })))
        ]),
        _: 3
      }, 8, ["group-id", "available-columns"])) : ae("", !0),
      U(dc, {
        columns: M.columns,
        "group-id": M.group.id,
        "dragging-group": M.draggingGroup,
        onColumnAdd: g,
        onColumnRemove: h,
        onColumnReorder: y,
        onColumnEdit: w,
        onColumnDragStart: v,
        onColumnDragEnd: $,
        onColumnDragEnter: k,
        onColumnDragLeave: O
      }, {
        "column-content": W(({ column: E }) => [
          V(M.$slots, "column-content", { column: E })
        ]),
        "column-actions": W(({ column: E, onRemove: H, onEdit: z }) => [
          V(M.$slots, "column-actions", {
            column: E,
            onRemove: H,
            onEdit: z
          })
        ]),
        _: 3
      }, 8, ["columns", "group-id", "dragging-group"])
    ], 34));
  }
}), gc = { class: "sticky bottom-0 z-2 flex items-center gap-2 p-3 bg-background/90 backdrop-blur-sm" }, hc = { class: "flex -space-x-px" }, bc = /* @__PURE__ */ L({
  __name: "ColumnManagerAddGroup",
  emits: ["group-add"],
  setup(e, { emit: n }) {
    const t = n, r = x(!1), o = x(""), l = () => {
      o.value.trim() && (t("group-add", {
        name: o.value.trim(),
        color: "#e7e5e4"
      }), o.value = "", r.value = !1);
    };
    return (a, s) => (C(), D("div", gc, [
      U(We, {
        "enter-active-class": "transition duration-200 ease-out",
        "enter-from-class": "translate-y-1 opacity-0",
        "enter-to-class": "translate-y-0 opacity-100",
        "leave-active-class": "transition duration-150 ease-in",
        "leave-from-class": "translate-y-0 opacity-100",
        "leave-to-class": "translate-y-1 opacity-0"
      }, {
        default: W(() => [
          wt(I("span", hc, [
            U(Jr, {
              id: "column-manager-new-group-name",
              name: "column-manager-new-group-name",
              placeholder: "New group name",
              modelValue: o.value,
              "onUpdate:modelValue": s[0] || (s[0] = (i) => o.value = i),
              onKeyup: Jn(l, ["enter"]),
              theme: {
                input: "w-full py-1.5"
              },
              type: "text"
            }, null, 8, ["modelValue"])
          ], 512), [
            [kt, r.value]
          ])
        ]),
        _: 1
      }),
      U(Ge, {
        onClick: s[1] || (s[1] = (i) => r.value = !r.value),
        size: "sm",
        variant: "outline"
      }, {
        default: W(() => [
          Je(de(r.value ? "Cancel" : "Add a group"), 1)
        ]),
        _: 1
      })
    ]));
  }
});
function yc(e) {
  return e.reduce((n, t) => {
    const r = t.group || "Default";
    return n[r] || (n[r] = []), n[r].push(t), n;
  }, {});
}
function xc(e) {
  return Object.values(e).flat();
}
function wc(e) {
  const {
    columns: n,
    groups: t,
    focusedColumn: r,
    onUpdate: o,
    onFocusedColumnChange: l
  } = e, a = x({}), s = x(null), i = r || s, u = () => `group_${Math.random().toString(36).substring(2, 9)}`;
  oe(
    () => n.value,
    (O) => {
      a.value = O.length === 0 ? { Default: [] } : yc([...O]);
    },
    { immediate: !0 }
  ), oe(
    () => t.value,
    (O) => {
      const S = O.map((T) => ({
        ...T,
        id: T.id || u()
      }));
      t.value = S;
    },
    { immediate: !0, deep: !0 }
  );
  const c = _(() => {
    const O = /* @__PURE__ */ new Set();
    return Object.values(a.value).forEach((S) => {
      S.forEach((T) => O.add(T.id));
    }), n.value.filter((S) => !O.has(S.id));
  }), d = _(() => t.value.map((O) => ({
    ...O,
    columns: a.value[O.id] || []
  }))), m = (O, S) => {
    const T = { ...S, group: O };
    a.value = {
      ...a.value,
      [O]: [
        ...a.value[O] || [],
        T
      ]
    }, k();
  }, f = (O, S) => {
    var b;
    const M = (a.value[O] || []).filter((E) => E.id !== S);
    a.value = {
      ...a.value,
      [O]: M
    }, ((b = i.value) == null ? void 0 : b.id) === S && w(null), k();
  }, p = (O, S, T, M) => {
    const b = a.value[O] || [], E = a.value[S] || [], H = b.findIndex((Y) => Y.id === T);
    if (H === -1)
      return;
    const [z] = b.splice(H, 1), K = { ...z, group: S }, F = M ?? E.length;
    E.splice(F, 0, K), a.value = {
      ...a.value,
      [O]: b,
      [S]: E
    }, k();
  }, g = (O) => {
    const S = {
      id: u(),
      name: O.name || "New Group",
      color: O.color || "#e7e5e4",
      ...O
    };
    return t.value = [...t.value, S], a.value[S.id] = [], k(), S;
  }, h = (O) => {
    const S = a.value[O] || [];
    if (S.length > 0) {
      const M = t.value.filter((b) => b.id !== O)[0];
      if (M)
        a.value[M.id] = [
          ...a.value[M.id] || [],
          ...S.map((b) => ({
            ...b,
            group: M.id
          }))
        ];
      else {
        const b = {
          id: u(),
          name: "Default",
          color: "#e7e5e4"
        };
        t.value = [b], a.value[b.id] = S.map(
          (E) => ({
            ...E,
            group: b.id
          })
        );
      }
    }
    t.value = t.value.filter((T) => T.id !== O), delete a.value[O], k();
  }, y = (O, S) => {
    const T = t.value.findIndex((b) => b.id === O);
    if (T === -1) return;
    const M = { ...t.value[T], ...S };
    if (t.value[T] = M, S.name && S.name !== t.value[T].name) {
      const b = a.value[O] || [];
      a.value[O] = b.map((E) => ({
        ...E,
        group: S.name
      }));
    }
    k();
  }, w = (O) => {
    i.value = O, l && l(O);
  }, v = (O, S) => {
    a.value[O] = S.map((T) => ({
      ...T,
      group: O
    })), k();
  }, $ = (O) => {
    a.value[O] = [], k();
  }, k = () => {
    o && o(xc(a.value), t.value);
  };
  return {
    // State
    groupedColumns: mt(a),
    focusedColumn: mt(i),
    // Computed
    availableColumns: c,
    groupsWithColumns: d,
    // Actions
    addColumn: m,
    removeColumn: f,
    moveColumn: p,
    addGroup: g,
    removeGroup: h,
    updateGroup: y,
    setFocusedColumn: w,
    reorderColumns: v,
    clearGroup: $,
    // Utilities
    generateGroupId: u
  };
}
const kc = { class: "w-full overflow-hidden h-full rounded-lg flex flex-col md:flex-row" }, Cc = {
  key: 1,
  class: "overflow-y-auto h-full w-full p-1 pt-4 md:w-[350px] md:shrink-0"
}, kf = /* @__PURE__ */ L({
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
    const r = e, o = t, l = $n(r, "columns"), a = $n(r, "groups"), s = x(
      r.focusedColumn || null
    );
    oe(
      () => r.focusedColumn,
      (J) => {
        s.value = J || null;
      },
      { immediate: !0 }
    );
    const {
      groupedColumns: i,
      availableColumns: u,
      addColumn: c,
      removeColumn: d,
      moveColumn: m,
      addGroup: f,
      removeGroup: p,
      updateGroup: g,
      setFocusedColumn: h,
      reorderColumns: y,
      clearGroup: w
    } = wc({
      columns: l,
      groups: a,
      focusedColumn: s,
      onUpdate: (J, fe) => {
        o("update:columns", J), o("update:groups", fe);
      },
      onFocusedColumnChange: (J) => {
        s.value = J, o("update:focusedColumn", J);
      }
    }), v = x(!1), $ = x(null), k = x(!1);
    ec({
      theme: r.theme,
      disabled: r.disabled,
      onColumnSelect: r.onColumnSelect,
      searcher: r.searcher,
      defaultItems: r.defaultItems,
      isDraggingColumn: mt(v),
      draggedOverGroupId: mt($),
      setDraggedOverGroupId: (J) => {
        $.value = J;
      }
    });
    const O = (J) => [...i.value[J] || []], S = (J) => {
      g(J.id, J);
    }, T = (J, fe) => {
      c(J, fe);
    }, M = (J) => {
      const fe = J.fromGroup, Ae = J.toGroup, P = J.item;
      !fe || !Ae || fe === Ae || P && m(fe, Ae, String(P.id));
    }, b = (J) => {
      if (typeof J == "string") {
        const fe = J;
        for (const [Ae, P] of Object.entries(i.value))
          if (P.find((A) => A.id === fe)) {
            d(Ae, fe);
            return;
          }
      } else if (J.columnId) {
        const fe = J.columnId, Ae = J.groupId;
        if (Ae)
          d(Ae, fe);
        else
          for (const [P, B] of Object.entries(i.value))
            if (B.find((j) => j.id === fe)) {
              d(P, fe);
              return;
            }
      }
    }, E = (J) => {
      if (J.groupId && Array.isArray(J.newColumns)) {
        const fe = J.groupId, Ae = J.newColumns;
        y(fe, Ae);
      }
    }, H = (J) => {
      h(J), o("column-select", J);
    }, z = (J) => {
      const fe = f(J);
      o("group-add", fe);
    }, K = (J) => {
      o("update:groups", J);
    }, F = () => {
    }, Y = () => {
    }, re = () => {
      k.value = !0;
    }, te = () => {
      k.value = !1;
    }, Z = () => {
      v.value = !0;
    }, ce = () => {
      v.value = !1, $.value = null;
    }, he = (J) => {
      O(J).length === 0 && ($.value = J);
    }, ie = (J) => {
      $.value === J && ($.value = null);
    };
    n({
      addColumn: c,
      removeColumn: d,
      moveColumn: m,
      addGroup: f,
      removeGroup: p,
      updateGroup: g,
      setFocusedColumn: h,
      clearGroup: w,
      focusedColumn: mt(s),
      groupedColumns: mt(i)
    }), oe(
      () => i.value,
      (J) => {
      },
      { deep: !0 }
    ), oe(
      () => a.value,
      (J) => {
      },
      { deep: !0 }
    );
    const Me = (J) => {
      o("edit-group", J);
    }, Te = (J) => {
      o("delete-group", J);
    };
    return (J, fe) => (C(), D("div", kc, [
      J.groups.length === 0 ? (C(), ue(Yr, {
        key: 0,
        icon: "fa-exclamation-circle",
        title: "Nothing here, yet"
      }, {
        default: W(() => fe[0] || (fe[0] = [
          I("p", null, "There are no groups here yet. Add a new group to get started.", -1)
        ])),
        _: 1,
        __: [0]
      })) : (C(), D("div", Cc, [
        U(Xr, {
          items: J.groups,
          "group-id": "groups",
          "shared-group": "shared-groups",
          disabled: !1,
          "onUpdate:items": K,
          onItemMoved: F,
          onCrossGroupDrag: Y,
          onDragStart: re,
          onDragEnd: te
        }, {
          item: W(({ item: Ae, index: P, isDragging: B, isDropTarget: A }) => [
            U(vc, {
              group: Ae,
              columns: O(Ae.id),
              "available-columns": R(u),
              "dragging-group": k.value,
              "default-group-color": J.defaultGroupColor,
              onGroupUpdate: S,
              onColumnAdd: T,
              onColumnAdded: M,
              onColumnRemoved: b,
              onColumnReordered: E,
              onColumnEdit: H,
              onColumnDragStart: Z,
              onColumnDragEnd: ce,
              onColumnDragEnter: he,
              onColumnDragLeave: ie,
              onEditGroup: Me,
              onDeleteGroup: Te
            }, {
              "drag-handle": W(() => [
                V(J.$slots, "drag-handle")
              ]),
              option: W(({ item: j, selected: q, active: Q }) => [
                V(J.$slots, "option", Ct(zt({ item: j, selected: q, active: Q })))
              ]),
              "column-content": W(({ column: j }) => [
                V(J.$slots, "column-content", { column: j })
              ]),
              "column-actions": W(({ column: j, onRemove: q, onEdit: Q }) => [
                V(J.$slots, "column-actions", {
                  column: j,
                  onRemove: q,
                  onEdit: Q
                })
              ]),
              "dropdown-content": W(({ group: j, groupData: q, emit: Q }) => [
                V(J.$slots, "dropdown-content", {
                  group: j,
                  groupData: q,
                  emit: Q
                })
              ]),
              _: 2
            }, 1032, ["group", "columns", "available-columns", "dragging-group", "default-group-color"])
          ]),
          _: 3
        }, 8, ["items"]),
        J.disabled.includes("groups") ? ae("", !0) : (C(), ue(bc, {
          key: 0,
          onGroupAdd: z
        }))
      ])),
      V(J.$slots, "default")
    ]));
  }
});
function _c(e, n) {
  return C(), D("svg", {
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
function $c(e, n) {
  return C(), D("svg", {
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
function Gn(e, n) {
  return C(), D("svg", {
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
const Oc = { class: "ml-2 grow min-w-px text-left" }, Sc = { class: "ml-6 rounded border px-2 py-0.5 text-xs bg-card hidden sm:inline-block" }, Tc = { class: "fixed inset-0 bg-background/50 backdrop-blur-sm" }, Ec = { class: "fixed inset-0 overflow-y-auto" }, Dc = { class: "flex min-h-full items-start justify-center p-4 pt-16 sm:items-center sm:pt-4" }, Pc = { class: "w-[calc(100vw-2rem)] sm:w-[400px] transform overflow-hidden rounded-2xl bg-card p-0 shadow-2xl border transition-all max-h-[calc(100vh-8rem)] sm:max-h-[calc(100vh-4rem)] flex flex-col" }, Ic = { class: "text-xs font-medium text-muted-foreground my-2 px-3" }, Rc = { class: "space-y-0.5" }, Bc = ["href"], Mc = { class: "text-muted-foreground group-hover:text-primary transition" }, Ac = { class: "flex-1 min-w-0" }, Lc = { class: "text-sm text-foreground truncate" }, Vc = {
  key: 1,
  class: "py-4 text-center text-sm text-muted-foreground flex-1 flex items-center justify-center"
}, Fc = { class: "border-t px-4 py-3 flex items-center gap-2 bg-card rounded-b-2xl flex-shrink-0" }, zc = { class: "rounded border text-muted-foreground size-5 flex items-center justify-center text-xs bg-card hidden sm:flex" }, jc = { class: "text-xs text-muted-foreground" }, Cf = /* @__PURE__ */ L({
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
    const n = e, t = x(!1), r = x(""), o = x([]), l = (u) => {
      (n.triggerModifier === "metaKey" ? u.metaKey : u.ctrlKey) && u.key === n.triggerKey && (u.preventDefault(), t.value = !0), u.key === "Escape" && (t.value = !1);
    }, a = async (u) => {
      const c = u.target;
      if (r.value = c.value, !r.value) {
        o.value = n.defaultResults;
        return;
      }
      try {
        const d = await n.searchStrategy.search(r.value);
        o.value = d;
      } catch (d) {
        console.error("Search error:", d), o.value = [];
      }
    }, s = (u) => {
      console.log("onSelect", u), t.value = !1, r.value = "", o.value = n.defaultResults;
    }, i = () => {
      t.value = !0;
    };
    return ne(() => {
      window.addEventListener("keydown", l), o.value = n.defaultResults;
    }), ve(() => {
      window.removeEventListener("keydown", l);
    }), (u, c) => (C(), ue(R(gn), { "onUpdate:modelValue": s }, {
      default: W(() => [
        U(R(hn), {
          as: "span",
          onClick: i
        }, {
          default: W(() => [
            U(Ge, {
              variant: "outline",
              class: "w-full pr-2 pl-3"
            }, {
              default: W(() => [
                U(R(Gn), { class: "size-4 shrink-0" }),
                I("span", Oc, de(u.placeholder), 1),
                I("kbd", Sc, de(u.keyboardShortcut), 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        U(We, {
          "enter-active-class": "ease-out duration-300",
          "enter-from-class": "opacity-0",
          "enter-to-class": "opacity-100",
          "leave-active-class": "ease-in duration-200",
          "leave-from-class": "opacity-100",
          "leave-to-class": "opacity-0"
        }, {
          default: W(() => [
            wt(I("div", {
              class: "fixed inset-0 z-50",
              onClick: c[2] || (c[2] = (d) => t.value = !1)
            }, [
              U(We, {
                "enter-active-class": "ease-out duration-300",
                "enter-from-class": "opacity-0",
                "enter-to-class": "opacity-100",
                "leave-active-class": "ease-in duration-200",
                "leave-from-class": "opacity-100",
                "leave-to-class": "opacity-0"
              }, {
                default: W(() => [
                  wt(I("div", Tc, null, 512), [
                    [kt, t.value]
                  ])
                ]),
                _: 1
              }),
              I("div", Ec, [
                I("div", Dc, [
                  U(We, {
                    "enter-active-class": "ease-out duration-300",
                    "enter-from-class": "opacity-0 scale-95",
                    "enter-to-class": "opacity-100 scale-100",
                    "leave-active-class": "ease-in duration-200",
                    "leave-from-class": "opacity-100 scale-100",
                    "leave-to-class": "opacity-0 scale-95"
                  }, {
                    default: W(() => [
                      wt(I("div", Pc, [
                        I("div", {
                          class: "relative border-b px-2 pt-2 pb-2 flex-shrink-0",
                          onClick: c[1] || (c[1] = Ft(() => {
                          }, ["stop"]))
                        }, [
                          U(R(Gn), { class: "pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" }),
                          U(R(bn), {
                            modelValue: r.value,
                            "onUpdate:modelValue": c[0] || (c[0] = (d) => r.value = d),
                            placeholder: u.inputPlaceholder,
                            autofocus: "",
                            type: "text",
                            onChange: a,
                            class: "flex w-full rounded-md border border-border bg-background pr-3 pl-9 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground/70 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40 transition-[box-shadow,color] disabled:cursor-not-allowed disabled:opacity-50"
                          }, null, 8, ["modelValue", "placeholder"])
                        ]),
                        o.value.length > 0 ? (C(), ue(R(yn), {
                          key: 0,
                          static: "",
                          class: "px-2 pt-2 pb-4 flex-1 overflow-y-auto"
                        }, {
                          default: W(() => [
                            I("div", Ic, de(r.value ? u.resultsLabel : u.defaultResultsLabel), 1),
                            I("div", Rc, [
                              (C(!0), D(we, null, Ue(o.value, (d) => (C(), ue(R(Zt), {
                                key: d.id,
                                value: d
                              }, {
                                default: W(({ active: m, selected: f }) => [
                                  I("a", {
                                    href: d.url,
                                    class: N(["flex items-center gap-3 px-3 py-2 sm:py-1.5 hover:bg-accent/80 transition group rounded-md touch-manipulation", {
                                      "bg-accent": f || m
                                    }])
                                  }, [
                                    I("span", Mc, [
                                      U(R(_c), { class: "size-4 shrink-0" })
                                    ]),
                                    I("div", Ac, [
                                      I("div", Lc, de(d.title), 1)
                                    ])
                                  ], 10, Bc)
                                ]),
                                _: 2
                              }, 1032, ["value"]))), 128))
                            ])
                          ]),
                          _: 1
                        })) : r.value ? (C(), D("div", Vc, de(u.noResultsText), 1)) : ae("", !0),
                        I("div", Fc, [
                          I("kbd", zc, [
                            U(R($c), { class: "size-3" })
                          ]),
                          I("span", jc, de(u.footerText), 1)
                        ])
                      ], 512), [
                        [kt, t.value]
                      ])
                    ]),
                    _: 1
                  })
                ])
              ])
            ], 512), [
              [kt, t.value]
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), Nc = { class: "z-51 fixed inset-0 overflow-y-auto" }, Gc = { class: "flex min-h-full items-center justify-center p-4 text-center" }, Hc = { class: "space-y-4" }, Uc = { class: "mt-2 grow" }, Wc = { class: "text-sm text-[var(--muted-foreground)]" }, qc = {
  key: 0,
  class: "flex items-center justify-end space-x-2 pt-4"
}, Kc = {
  key: 1,
  class: "flex items-center justify-center py-4"
}, _f = /* @__PURE__ */ L({
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
    const r = e, o = t;
    function l() {
      r.modelValue ? (document.body.style.overflow = "hidden", document.body.style.paddingRight = "var(--removed-body-scroll-bar-size)") : (document.body.style.overflow = "", document.body.style.paddingRight = "");
    }
    oe(() => r.modelValue, l), ve(() => {
      document.body.style.overflow = "", document.body.style.paddingRight = "";
    });
    async function a() {
      await r.onConfirm(), i();
    }
    async function s() {
      await r.onCancel(), i();
    }
    function i() {
      o("update:modelValue", !1);
    }
    function u() {
      o("update:modelValue", !0);
    }
    return n({
      closeModal: i,
      openModal: u
    }), (c, d) => (C(), ue(R(Kr), {
      appear: "",
      show: c.modelValue,
      as: "template"
    }, {
      default: W(() => [
        U(R(Fs), {
          as: "div",
          onClose: i,
          class: "relative"
        }, {
          default: W(() => [
            U(R(Jo), {
              as: "template",
              enter: "duration-300 ease-out",
              "enter-from": "opacity-0",
              "enter-to": "opacity-100",
              leave: "duration-200 ease-in",
              "leave-from": "opacity-100",
              "leave-to": "opacity-0"
            }, {
              default: W(() => d[0] || (d[0] = [
                I("div", { class: "z-50 fixed inset-0 bg-primary/10" }, null, -1)
              ])),
              _: 1,
              __: [0]
            }),
            I("div", Nc, [
              I("div", Gc, [
                U(R(Jo), {
                  as: "template",
                  enter: "duration-300 ease-out",
                  "enter-from": "opacity-0 scale-95",
                  "enter-to": "opacity-100 scale-100",
                  leave: "duration-200 ease-in",
                  "leave-from": "opacity-100 scale-100",
                  "leave-to": "opacity-0 scale-95"
                }, {
                  default: W(() => [
                    U(R(zs), { class: "w-full max-w-md transform overflow-hidden rounded-lg bg-[var(--card)] ring-1 ring-[var(--border)] p-6 text-left align-middle shadow-xl transition-all duration-300" }, {
                      default: W(() => [
                        I("div", Hc, [
                          U(R(js), {
                            as: "h3",
                            class: "text-lg font-medium leading-6 text-[var(--card-foreground)]"
                          }, {
                            default: W(() => [
                              Je(de(c.title), 1)
                            ]),
                            _: 1
                          }),
                          I("div", Uc, [
                            I("p", Wc, de(c.description), 1)
                          ]),
                          c.processing ? (C(), D("div", Kc, [
                            V(c.$slots, "processing")
                          ])) : (C(), D("div", qc, [
                            U(Ge, {
                              size: "sm",
                              variant: "ghost",
                              onClick: s
                            }, {
                              default: W(() => [
                                Je(de(c.cancelButtonText), 1)
                              ]),
                              _: 1
                            }),
                            U(Ge, {
                              size: "sm",
                              variant: "default",
                              onClick: a
                            }, {
                              default: W(() => [
                                Je(de(c.confirmButtonText), 1)
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
}), Yc = { class: "flex items-center gap-2" }, Jc = /* @__PURE__ */ L({
  __name: "QueryCondition",
  props: {
    modelValue: {},
    availableFields: {},
    showRemove: { type: Boolean },
    showLogicalOperator: { type: Boolean }
  },
  emits: ["update:modelValue", "remove"],
  setup(e, { emit: n }) {
    const t = e, r = n, o = (f) => f == null ? void 0 : f.label, l = (f) => f == null ? void 0 : f.label, a = _({
      get: () => t.modelValue.field,
      set: (f) => {
        if (f && typeof f == "object" && "id" in f) {
          const p = t.availableFields.find(
            (g) => g.id === f.id
          );
          r("update:modelValue", {
            ...t.modelValue,
            field: p || null
          });
        } else
          r("update:modelValue", { ...t.modelValue, field: f });
      }
    }), s = _({
      get: () => d.find((f) => f.id === t.modelValue.operator),
      set: (f) => {
        const p = f && typeof f == "object" && "id" in f ? f.id : f;
        r("update:modelValue", {
          ...t.modelValue,
          operator: p
        });
      }
    }), i = _({
      get: () => m.find((f) => f.id === t.modelValue.comparison),
      set: (f) => {
        const p = f && typeof f == "object" && "id" in f ? f.id : f;
        r("update:modelValue", {
          ...t.modelValue,
          comparison: p
        });
      }
    }), u = _({
      get: () => t.modelValue.value,
      set: (f) => r("update:modelValue", { ...t.modelValue, value: f })
    });
    _({
      get: () => t.modelValue.logicalOrOperator,
      set: (f) => r("update:modelValue", {
        ...t.modelValue,
        logicalOrOperator: f
      })
    });
    const c = _(() => [...u.value || []]);
    _(() => {
      if (!a.value)
        return [
          { id: "value1", label: "Value 1" },
          { id: "value2", label: "Value 2" },
          { id: "value3", label: "Value 3" }
        ];
      switch (a.value.type) {
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
      var g;
      return C(), D("div", Yc, [
        U(Qr, {
          modelValue: a.value,
          "onUpdate:modelValue": p[0] || (p[0] = (h) => a.value = h),
          "default-items": f.availableFields,
          displayProperty: o,
          placeholder: "Select a field...",
          class: "self-start w-64 shrink-0",
          nullable: !0,
          theme: {
            baseDropdownInputText: ""
          }
        }, null, 8, ["modelValue", "default-items"]),
        U(Fo, {
          modelValue: s.value,
          "onUpdate:modelValue": p[1] || (p[1] = (h) => s.value = h),
          items: d,
          "display-property": (h) => h.label,
          placeholder: "Select operator...",
          class: "self-start w-32 shrink-0"
        }, null, 8, ["modelValue", "display-property"]),
        U(Fo, {
          modelValue: i.value,
          "onUpdate:modelValue": p[2] || (p[2] = (h) => i.value = h),
          items: m,
          "display-property": (h) => h.label,
          placeholder: "Select comparison...",
          class: "self-start w-32 shrink-0"
        }, null, 8, ["modelValue", "display-property"]),
        U(Fo, {
          modelValue: u.value,
          "onUpdate:modelValue": p[3] || (p[3] = (h) => u.value = h),
          items: (g = a.value) == null ? void 0 : g.defaultValuesGetter(),
          "display-property": l,
          "disabled-items": c.value,
          placeholder: "Select values...",
          class: "self-start grow min-w-64",
          multiple: !0,
          nullable: !0
        }, null, 8, ["modelValue", "items", "disabled-items"]),
        f.showRemove ? (C(), ue(Ge, {
          key: 0,
          onClick: p[4] || (p[4] = (h) => f.$emit("remove")),
          class: "text-destructive hover:bg-destructive/80 hover:text-white rounded shrink-0",
          variant: "ghost",
          size: "xs"
        }, {
          default: W(() => [
            U(R(oo), { class: "size-4" })
          ]),
          _: 1
        })) : ae("", !0)
      ]);
    };
  }
}), Fe = [];
for (let e = 0; e < 256; ++e)
  Fe.push((e + 256).toString(16).slice(1));
function Xc(e, n = 0) {
  return (Fe[e[n + 0]] + Fe[e[n + 1]] + Fe[e[n + 2]] + Fe[e[n + 3]] + "-" + Fe[e[n + 4]] + Fe[e[n + 5]] + "-" + Fe[e[n + 6]] + Fe[e[n + 7]] + "-" + Fe[e[n + 8]] + Fe[e[n + 9]] + "-" + Fe[e[n + 10]] + Fe[e[n + 11]] + Fe[e[n + 12]] + Fe[e[n + 13]] + Fe[e[n + 14]] + Fe[e[n + 15]]).toLowerCase();
}
let jo;
const Qc = new Uint8Array(16);
function Zc() {
  if (!jo) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    jo = crypto.getRandomValues.bind(crypto);
  }
  return jo(Qc);
}
const ed = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Hn = { randomUUID: ed };
function yo(e, n, t) {
  var o;
  if (Hn.randomUUID && !e)
    return Hn.randomUUID();
  e = e || {};
  const r = e.random ?? ((o = e.rng) == null ? void 0 : o.call(e)) ?? Zc();
  if (r.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, Xc(r);
}
const td = /* @__PURE__ */ L({
  __name: "QueryBuilderLogicSwitch",
  props: {
    modelValue: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const t = e, r = n, o = _({
      get: () => t.modelValue,
      set: (l) => r("update:modelValue", l)
    });
    return (l, a) => (C(), ue(R(qs), {
      modelValue: o.value,
      "onUpdate:modelValue": a[0] || (a[0] = (s) => o.value = s),
      class: N([
        "relative inline-flex h-6 w-16 items-center rounded-full transition-colors focus:outline-none border focus:ring-2 focus:ring-ring focus:ring-offset-2",
        (o.value, "bg-muted")
      ])
    }, {
      default: W(() => [
        a[1] || (a[1] = I("span", { class: "sr-only" }, "Use AND/OR", -1)),
        I("span", {
          class: N([
            "inline-block absolute h-4 transform rounded-full bg-primary shadow-xs transition-all duration-300 ease-in-out",
            o.value ? "left-9 w-5.5" : "left-1 w-7.5"
          ])
        }, null, 2),
        I("span", {
          class: N(["absolute left-2 text-[10px] font-medium", [o.value ? "text-primary" : "text-muted"]])
        }, "AND", 2),
        I("span", {
          class: N(["absolute right-2 text-[10px] font-medium", [o.value ? "text-muted" : "text-primary"]])
        }, "OR", 2)
      ]),
      _: 1,
      __: [1]
    }, 8, ["modelValue", "class"]));
  }
}), od = { class: "relative group-container border rounded-lg p-4 mb-4" }, nd = { class: "flex items-center gap-2 mb-2" }, rd = { key: 0 }, ld = { class: "space-y-2" }, ad = {
  key: 0,
  class: "pl-6 mt-4 border-l"
}, sd = { class: "flex gap-2 mt-4" }, id = /* @__PURE__ */ L({
  __name: "QueryGroup",
  props: {
    modelValue: {},
    availableFields: {},
    isRoot: { type: Boolean }
  },
  emits: ["update:modelValue", "remove"],
  setup(e, { emit: n }) {
    const t = e, r = n, o = _({
      get: () => t.modelValue.conditions,
      set: (d) => r("update:modelValue", { ...t.modelValue, conditions: d })
    }), l = _({
      get: () => t.modelValue.logicalOrOperator,
      set: (d) => r("update:modelValue", {
        ...t.modelValue,
        logicalOrOperator: d
      })
    });
    function a() {
      return {
        id: yo(),
        field: null,
        operator: "does",
        comparison: "equal",
        value: [],
        logicalOperator: "AND",
        logicalOrOperator: !1
      };
    }
    function s() {
      o.value.push(a());
    }
    function i(d) {
      o.value.length > 1 && o.value.splice(d, 1);
    }
    function u() {
      const d = {
        id: yo(),
        conditions: [a()],
        nestedGroups: [],
        logicalOrOperator: !1
      };
      t.modelValue.nestedGroups ? r("update:modelValue", {
        ...t.modelValue,
        nestedGroups: [...t.modelValue.nestedGroups, d]
      }) : r("update:modelValue", {
        ...t.modelValue,
        nestedGroups: [d]
      });
    }
    function c(d) {
      if (!t.modelValue.nestedGroups) return;
      const m = t.modelValue.nestedGroups.filter(
        (f, p) => p !== d
      );
      r("update:modelValue", { ...t.modelValue, nestedGroups: m });
    }
    return (d, m) => {
      var p;
      const f = ll("QueryGroup", !0);
      return C(), D("div", od, [
        I("div", nd, [
          U(td, {
            modelValue: l.value,
            "onUpdate:modelValue": m[0] || (m[0] = (g) => l.value = g)
          }, null, 8, ["modelValue"]),
          d.isRoot ? ae("", !0) : (C(), D("span", rd, [
            U(Ge, {
              variant: "ghost",
              size: "sm",
              onClick: m[1] || (m[1] = (g) => d.$emit("remove")),
              class: "text-destructive hover:text-destructive/80"
            }, {
              default: W(() => [
                U(R(Hl), { class: "size-4" })
              ]),
              _: 1
            })
          ]))
        ]),
        I("div", ld, [
          (C(!0), D(we, null, Ue(o.value, (g, h) => (C(), ue(Jc, {
            key: g.id,
            modelValue: o.value[h],
            "onUpdate:modelValue": (y) => o.value[h] = y,
            "available-fields": d.availableFields,
            "show-remove": o.value.length > 1,
            onRemove: (y) => i(h)
          }, null, 8, ["modelValue", "onUpdate:modelValue", "available-fields", "show-remove", "onRemove"]))), 128))
        ]),
        (p = d.modelValue.nestedGroups) != null && p.length ? (C(), D("div", ad, [
          (C(!0), D(we, null, Ue(d.modelValue.nestedGroups, (g, h) => (C(), ue(f, {
            key: g.id,
            modelValue: d.modelValue.nestedGroups[h],
            "onUpdate:modelValue": (y) => d.modelValue.nestedGroups[h] = y,
            "available-fields": d.availableFields,
            "is-root": !1,
            onRemove: (y) => c(h)
          }, null, 8, ["modelValue", "onUpdate:modelValue", "available-fields", "onRemove"]))), 128))
        ])) : ae("", !0),
        I("div", sd, [
          U(Ge, {
            variant: "outline",
            size: "sm",
            onClick: s
          }, {
            default: W(() => m[2] || (m[2] = [
              Je("Add Condition")
            ])),
            _: 1,
            __: [2]
          }),
          U(Ge, {
            variant: "outline",
            size: "sm",
            onClick: u
          }, {
            default: W(() => m[3] || (m[3] = [
              Je("Add Group")
            ])),
            _: 1,
            __: [3]
          })
        ])
      ]);
    };
  }
}), ud = { class: "w-full" }, $f = /* @__PURE__ */ L({
  __name: "FluentQueryBuilder",
  props: {
    modelValue: {},
    availableFields: {}
  },
  emits: ["update:modelValue"],
  setup(e, { expose: n, emit: t }) {
    const r = e, o = t, l = x(r.modelValue || a());
    oe(
      l,
      (u) => {
        o("update:modelValue", [u]);
      },
      { deep: !0 }
    );
    function a() {
      return {
        id: yo(),
        conditions: [s()],
        nestedGroups: [],
        logicalOrOperator: !1
      };
    }
    function s() {
      return {
        id: yo(),
        field: null,
        operator: "does",
        comparison: "equal",
        value: [],
        logicalOperator: "AND",
        logicalOrOperator: !1
      };
    }
    function i(u) {
      l.value = u;
    }
    return n({
      rootGroup: l
    }), (u, c) => (C(), D("div", ud, [
      U(id, {
        modelValue: l.value,
        "onUpdate:modelValue": [
          c[0] || (c[0] = (d) => l.value = d),
          i
        ],
        "available-fields": r.availableFields,
        "is-root": !0
      }, null, 8, ["modelValue", "available-fields"])
    ]));
  }
}), cd = ["aria-orientation"], Of = /* @__PURE__ */ L({
  __name: "Tabs",
  props: {
    defaultValue: {},
    value: {},
    onValueChange: {},
    orientation: { default: "horizontal" },
    disabled: { type: Boolean, default: !1 },
    class: { default: "" }
  },
  emits: ["update:value", "valueChange"],
  setup(e, { emit: n }) {
    const t = e, r = n, o = x(t.value || t.defaultValue || ""), l = x(/* @__PURE__ */ new Set()), a = _(() => t.value !== void 0);
    oe(
      () => t.value,
      (c) => {
        c !== void 0 && c !== o.value && (o.value = c);
      }
    );
    const s = (c) => {
      t.disabled || !l.value.has(c) || (o.value = c, a.value || r("update:value", c), r("valueChange", c));
    }, i = (c) => {
      l.value.add(c), o.value || (o.value = c);
    }, u = (c) => {
      if (l.value.delete(c), o.value === c && l.value.size > 0) {
        const d = Array.from(l.value)[0];
        s(d);
      }
    };
    return me("tabs", {
      selectedValue: mt(o),
      orientation: mt(_(() => t.orientation)),
      disabled: mt(_(() => t.disabled)),
      selectTab: s,
      registerTab: i,
      unregisterTab: u
    }), (c, d) => (C(), D("div", {
      class: N(
        R(xe)(
          "flex",
          c.orientation === "vertical" ? "flex-row" : "flex-col",
          c.disabled && "opacity-50 pointer-events-none",
          t.class
        )
      ),
      role: "tablist",
      "aria-orientation": c.orientation
    }, [
      V(c.$slots, "default")
    ], 10, cd));
  }
}), dd = ["aria-orientation"], Sf = /* @__PURE__ */ L({
  __name: "TabsList",
  props: {
    disabled: { type: Boolean, default: !1 },
    orientation: { default: "horizontal" },
    class: { default: "" }
  },
  setup(e, { emit: n }) {
    const t = e, r = x(), o = x(), l = x(), a = x({
      transform: "translateX(0px)",
      width: "0",
      height: "0",
      opacity: "0"
    }), s = x({
      transform: "translateX(0px)",
      width: "0",
      opacity: "0"
    }), i = se("tabs"), u = _(
      () => {
        var k;
        return t.orientation || ((k = i == null ? void 0 : i.orientation) == null ? void 0 : k.value) || "horizontal";
      }
    ), c = _(
      () => {
        var k;
        return t.disabled || ((k = i == null ? void 0 : i.disabled) == null ? void 0 : k.value) || !1;
      }
    ), d = x(/* @__PURE__ */ new Map()), m = x(!1), f = x(""), p = (k, O) => {
      d.value.set(k, O);
    }, g = (k) => {
      d.value.delete(k);
    }, h = (k) => {
      const O = d.value.get(k), S = r.value;
      if (!O || !S) return;
      const T = O.getBoundingClientRect(), M = S.getBoundingClientRect();
      if (u.value === "vertical") {
        const E = T.top - M.top;
        a.value = {
          transform: `translateY(${E}px)`,
          width: `${T.width}px`,
          height: `${T.height}px`,
          opacity: "1"
        };
      } else {
        const E = T.left - M.left;
        a.value = {
          transform: `translateX(${E}px)`,
          width: `${T.width}px`,
          height: `${T.height}px`,
          opacity: "1"
        };
      }
    }, y = (k) => {
      const O = d.value.get(k), S = r.value;
      if (!O || !S) return;
      const T = O.getBoundingClientRect(), M = S.getBoundingClientRect(), b = T.left - M.left;
      s.value = {
        transform: `translateX(${b}px)`,
        width: `${T.width}px`,
        opacity: "1"
      };
    };
    return me("tabsList", {
      registerTabElement: p,
      unregisterTabElement: g,
      handleTabHover: (k) => {
        m.value = !0, f.value = k, h(k);
      },
      handleTabLeave: () => {
        m.value = !1, f.value = "", a.value = {
          ...a.value,
          opacity: "0"
        };
      },
      handleTabSelect: (k) => {
        y(k);
      },
      orientation: _(() => u.value)
    }), ne(() => {
      Ve(() => {
        var O;
        const k = (O = i == null ? void 0 : i.selectedValue) == null ? void 0 : O.value;
        k && d.value.has(k) && y(k);
      });
    }), (k, O) => (C(), D("div", {
      ref_key: "tabsListRef",
      ref: r,
      class: N(
        R(xe)(
          "relative flex rounded-md text-muted-foreground",
          u.value === "vertical" ? "flex-col" : "flex-row",
          c.value && "opacity-50 pointer-events-none",
          t.class
        )
      ),
      role: "tablist",
      "aria-orientation": u.value
    }, [
      I("div", {
        ref_key: "backgroundRef",
        ref: o,
        class: "absolute bg-primary/5 rounded-md transition-all duration-200 ease-out pointer-events-none z-0 -top-px",
        style: ot(a.value)
      }, null, 4),
      I("div", {
        ref_key: "underlineRef",
        ref: l,
        class: "absolute bg-primary h-[2px] transition-all duration-200 ease-out pointer-events-none z-0 -bottom-1.5",
        style: ot(s.value)
      }, null, 4),
      V(k.$slots, "default")
    ], 10, dd));
  }
}), fd = ["disabled", "aria-selected", "aria-controls", "data-state"], pd = /* @__PURE__ */ L({
  __name: "TabsTrigger",
  props: {
    value: {},
    disabled: { type: Boolean },
    selected: { type: Boolean },
    class: {}
  },
  emits: ["click", "select", "mouseenter", "mouseleave"],
  setup(e, { emit: n }) {
    const t = e, r = n, o = x(), l = se("tabs"), a = se("tabsList"), s = _(
      () => {
        var c;
        return ((c = l == null ? void 0 : l.selectedValue) == null ? void 0 : c.value) === t.value;
      }
    ), i = _(
      () => {
        var c;
        return t.disabled || ((c = l == null ? void 0 : l.disabled) == null ? void 0 : c.value) || !1;
      }
    ), u = (c) => {
      i.value || (r("click", c), r("select", t.value), l != null && l.selectTab && (l.selectTab(t.value), a == null || a.handleTabSelect(t.value)));
    };
    return ne(() => {
      l != null && l.registerTab && (l.registerTab(t.value), a == null || a.registerTabElement(
        t.value,
        o.value
      ));
    }), ve(() => {
      l != null && l.unregisterTab && (l.unregisterTab(t.value), a == null || a.unregisterTabElement(t.value));
    }), (c, d) => (C(), D("button", {
      ref_key: "tabsTriggerRef",
      ref: o,
      class: N([
        "relative flex items-center justify-center px-3 py-1.5 bg-transparent border-b-2 border-transparent text-foreground text-sm font-medium cursor-pointer transition-all duration-200 ease-in-out",
        "data-[state=inactive]:rounded-md",
        // 'data-[state=active]:after:absolute data-[state=active]:after:-bottom-2.5 data-[state=active]:after:left-0 data-[state=active]:after:w-full data-[state=active]:after:h-[2px] data-[state=active]:after:bg-primary',
        s.value && "text-foreground bg-blue-400",
        i.value && "opacity-50 cursor-not-allowed",
        "focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2"
      ]),
      disabled: i.value,
      "aria-selected": s.value,
      "aria-controls": `panel-${c.value}`,
      "data-state": s.value ? "active" : "inactive",
      role: "tab",
      onClick: u,
      onMouseenter: d[0] || (d[0] = (m) => {
        var f;
        return (f = R(a)) == null ? void 0 : f.handleTabHover(c.value);
      }),
      onMouseleave: d[1] || (d[1] = (m) => {
        var f;
        return (f = R(a)) == null ? void 0 : f.handleTabLeave();
      })
    }, [
      V(c.$slots, "default", {}, void 0, !0)
    ], 42, fd));
  }
}), Tf = /* @__PURE__ */ Oe(pd, [["__scopeId", "data-v-924766b9"]]), Ef = /* @__PURE__ */ L({
  __name: "TabsContent",
  props: {
    value: {},
    selected: { type: Boolean },
    class: { default: "" }
  },
  setup(e, { emit: n }) {
    const t = e;
    return (r, o) => (C(), D("div", {
      class: N(R(xe)("tabs-content pt-1.5", t.class))
    }, [
      V(r.$slots, "default")
    ], 2));
  }
}), md = ["id", "aria-labelledby"], vd = /* @__PURE__ */ L({
  __name: "TabsPanel",
  props: {
    value: {},
    selected: { type: Boolean },
    class: { default: "" }
  },
  setup(e, { emit: n }) {
    const t = e, r = se("tabs"), o = _(
      () => {
        var l;
        return ((l = r == null ? void 0 : r.selectedValue) == null ? void 0 : l.value) === t.value;
      }
    );
    return (l, a) => wt((C(), D("div", {
      class: N(R(xe)("tabs-panel", o.value && "tabs-panel-selected", t.class)),
      id: `panel-${l.value}`,
      role: "tabpanel",
      "aria-labelledby": `tab-${l.value}`
    }, [
      V(l.$slots, "default", {}, void 0, !0)
    ], 10, md)), [
      [kt, o.value]
    ]);
  }
}), Df = /* @__PURE__ */ Oe(vd, [["__scopeId", "data-v-15b21811"]]);
function Pf() {
  const e = x("Cancel"), n = x("Confirm"), t = x(""), r = x(""), o = x(""), l = x(!1), a = x(""), s = x(() => {
    console.warn("Cancel callback not set"), l.value = !1;
  }), i = x(() => {
    console.warn("Confirm callback not set"), l.value = !1;
  });
  function u(d, m, f, p, g = "Confirm", h = "Cancel", y = "") {
    a.value = d, r.value = m, n.value = g, e.value = h, t.value = y, i.value = f || (async () => {
      console.warn("Confirm callback not set"), l.value = !1;
    }), s.value = p || (async () => {
      console.warn("Cancel callback not set"), l.value = !1;
    }), l.value = !0;
  }
  function c(d) {
    o.value = d;
  }
  return {
    cancelButtonText: e,
    cancelCallback: s,
    confirmButtonText: n,
    confirmButtonTheme: t,
    confirmCallback: i,
    description: r,
    doOpen: u,
    processing: o,
    show: l,
    title: a,
    toggleProcessing: c
  };
}
function If(e = {}) {
  const n = x(!1), t = _(() => ({
    open: n.value,
    position: e.position || "right",
    size: e.size || "default",
    showCloseButton: e.showCloseButton ?? !0,
    closeOnBackdropClick: e.closeOnBackdropClick ?? !0,
    closeOnEscape: e.closeOnEscape ?? !0,
    preventBodyScroll: e.preventBodyScroll ?? !0,
    closeButtonLabel: e.closeButtonLabel || "Close drawer",
    theme: e.theme || {}
  }));
  return {
    isOpen: n,
    drawerProps: t,
    open: () => {
      n.value = !0;
    },
    close: () => {
      n.value = !1;
    },
    toggle: () => {
      n.value = !n.value;
    },
    handleUpdateOpen: (s) => {
      n.value = s;
    }
  };
}
function gd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var po = { exports: {} };
/*! algoliasearch-lite.umd.js | 4.25.2 | © Algolia, inc. | https://github.com/algolia/algoliasearch-client-javascript */
var hd = po.exports, Un;
function bd() {
  return Un || (Un = 1, function(e, n) {
    (function(t, r) {
      e.exports = r();
    })(hd, function() {
      function t(P, B, A) {
        return B in P ? Object.defineProperty(P, B, { value: A, enumerable: !0, configurable: !0, writable: !0 }) : P[B] = A, P;
      }
      function r(P, B) {
        var A = Object.keys(P);
        if (Object.getOwnPropertySymbols) {
          var j = Object.getOwnPropertySymbols(P);
          B && (j = j.filter(function(q) {
            return Object.getOwnPropertyDescriptor(P, q).enumerable;
          })), A.push.apply(A, j);
        }
        return A;
      }
      function o(P) {
        for (var B = 1; B < arguments.length; B++) {
          var A = arguments[B] != null ? arguments[B] : {};
          B % 2 ? r(Object(A), !0).forEach(function(j) {
            t(P, j, A[j]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(P, Object.getOwnPropertyDescriptors(A)) : r(Object(A)).forEach(function(j) {
            Object.defineProperty(P, j, Object.getOwnPropertyDescriptor(A, j));
          });
        }
        return P;
      }
      function l(P, B) {
        if (P == null) return {};
        var A, j, q = function(ee, X) {
          if (ee == null) return {};
          var pe, Ce, be = {}, Le = Object.keys(ee);
          for (Ce = 0; Ce < Le.length; Ce++) pe = Le[Ce], X.indexOf(pe) >= 0 || (be[pe] = ee[pe]);
          return be;
        }(P, B);
        if (Object.getOwnPropertySymbols) {
          var Q = Object.getOwnPropertySymbols(P);
          for (j = 0; j < Q.length; j++) A = Q[j], B.indexOf(A) >= 0 || Object.prototype.propertyIsEnumerable.call(P, A) && (q[A] = P[A]);
        }
        return q;
      }
      function a(P, B) {
        return function(A) {
          if (Array.isArray(A)) return A;
        }(P) || function(A, j) {
          if (Symbol.iterator in Object(A) || Object.prototype.toString.call(A) === "[object Arguments]") {
            var q = [], Q = !0, ee = !1, X = void 0;
            try {
              for (var pe, Ce = A[Symbol.iterator](); !(Q = (pe = Ce.next()).done) && (q.push(pe.value), !j || q.length !== j); Q = !0) ;
            } catch (be) {
              ee = !0, X = be;
            } finally {
              try {
                Q || Ce.return == null || Ce.return();
              } finally {
                if (ee) throw X;
              }
            }
            return q;
          }
        }(P, B) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }();
      }
      function s(P) {
        return function(B) {
          if (Array.isArray(B)) {
            for (var A = 0, j = new Array(B.length); A < B.length; A++) j[A] = B[A];
            return j;
          }
        }(P) || function(B) {
          if (Symbol.iterator in Object(B) || Object.prototype.toString.call(B) === "[object Arguments]") return Array.from(B);
        }(P) || function() {
          throw new TypeError("Invalid attempt to spread non-iterable instance");
        }();
      }
      function i(P) {
        var B, A = "algoliasearch-client-js-".concat(P.key), j = function() {
          return B === void 0 && (B = P.localStorage || window.localStorage), B;
        }, q = function() {
          return JSON.parse(j().getItem(A) || "{}");
        }, Q = function(X) {
          j().setItem(A, JSON.stringify(X));
        }, ee = function() {
          var X = P.timeToLive ? 1e3 * P.timeToLive : null, pe = q(), Ce = Object.fromEntries(Object.entries(pe).filter(function(Le) {
            return a(Le, 2)[1].timestamp !== void 0;
          }));
          if (Q(Ce), X) {
            var be = Object.fromEntries(Object.entries(Ce).filter(function(Le) {
              var Ee = a(Le, 2)[1], He = (/* @__PURE__ */ new Date()).getTime();
              return !(Ee.timestamp + X < He);
            }));
            Q(be);
          }
        };
        return { get: function(X, pe) {
          var Ce = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : { miss: function() {
            return Promise.resolve();
          } };
          return Promise.resolve().then(function() {
            ee();
            var be = JSON.stringify(X);
            return q()[be];
          }).then(function(be) {
            return Promise.all([be ? be.value : pe(), be !== void 0]);
          }).then(function(be) {
            var Le = a(be, 2), Ee = Le[0], He = Le[1];
            return Promise.all([Ee, He || Ce.miss(Ee)]);
          }).then(function(be) {
            return a(be, 1)[0];
          });
        }, set: function(X, pe) {
          return Promise.resolve().then(function() {
            var Ce = q();
            return Ce[JSON.stringify(X)] = { timestamp: (/* @__PURE__ */ new Date()).getTime(), value: pe }, j().setItem(A, JSON.stringify(Ce)), pe;
          });
        }, delete: function(X) {
          return Promise.resolve().then(function() {
            var pe = q();
            delete pe[JSON.stringify(X)], j().setItem(A, JSON.stringify(pe));
          });
        }, clear: function() {
          return Promise.resolve().then(function() {
            j().removeItem(A);
          });
        } };
      }
      function u(P) {
        var B = s(P.caches), A = B.shift();
        return A === void 0 ? { get: function(j, q) {
          var Q = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : { miss: function() {
            return Promise.resolve();
          } }, ee = q();
          return ee.then(function(X) {
            return Promise.all([X, Q.miss(X)]);
          }).then(function(X) {
            return a(X, 1)[0];
          });
        }, set: function(j, q) {
          return Promise.resolve(q);
        }, delete: function(j) {
          return Promise.resolve();
        }, clear: function() {
          return Promise.resolve();
        } } : { get: function(j, q) {
          var Q = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : { miss: function() {
            return Promise.resolve();
          } };
          return A.get(j, q, Q).catch(function() {
            return u({ caches: B }).get(j, q, Q);
          });
        }, set: function(j, q) {
          return A.set(j, q).catch(function() {
            return u({ caches: B }).set(j, q);
          });
        }, delete: function(j) {
          return A.delete(j).catch(function() {
            return u({ caches: B }).delete(j);
          });
        }, clear: function() {
          return A.clear().catch(function() {
            return u({ caches: B }).clear();
          });
        } };
      }
      function c() {
        var P = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { serializable: !0 }, B = {};
        return { get: function(A, j) {
          var q = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : { miss: function() {
            return Promise.resolve();
          } }, Q = JSON.stringify(A);
          if (Q in B) return Promise.resolve(P.serializable ? JSON.parse(B[Q]) : B[Q]);
          var ee = j(), X = q && q.miss || function() {
            return Promise.resolve();
          };
          return ee.then(function(pe) {
            return X(pe);
          }).then(function() {
            return ee;
          });
        }, set: function(A, j) {
          return B[JSON.stringify(A)] = P.serializable ? JSON.stringify(j) : j, Promise.resolve(j);
        }, delete: function(A) {
          return delete B[JSON.stringify(A)], Promise.resolve();
        }, clear: function() {
          return B = {}, Promise.resolve();
        } };
      }
      function d(P) {
        for (var B = P.length - 1; B > 0; B--) {
          var A = Math.floor(Math.random() * (B + 1)), j = P[B];
          P[B] = P[A], P[A] = j;
        }
        return P;
      }
      function m(P, B) {
        return B && Object.keys(B).forEach(function(A) {
          P[A] = B[A](P);
        }), P;
      }
      function f(P) {
        for (var B = arguments.length, A = new Array(B > 1 ? B - 1 : 0), j = 1; j < B; j++) A[j - 1] = arguments[j];
        var q = 0;
        return P.replace(/%s/g, function() {
          return encodeURIComponent(A[q++]);
        });
      }
      var p = { WithinQueryParameters: 0, WithinHeaders: 1 };
      function g(P, B) {
        var A = P || {}, j = A.data || {};
        return Object.keys(A).forEach(function(q) {
          ["timeout", "headers", "queryParameters", "data", "cacheable"].indexOf(q) === -1 && (j[q] = A[q]);
        }), { data: Object.entries(j).length > 0 ? j : void 0, timeout: A.timeout || B, headers: A.headers || {}, queryParameters: A.queryParameters || {}, cacheable: A.cacheable };
      }
      var h = { Read: 1, Write: 2, Any: 3 }, y = 1, w = 2, v = 3;
      function $(P) {
        var B = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : y;
        return o(o({}, P), {}, { status: B, lastUpdate: Date.now() });
      }
      function k(P) {
        return typeof P == "string" ? { protocol: "https", url: P, accept: h.Any } : { protocol: P.protocol || "https", url: P.url, accept: P.accept || h.Any };
      }
      var O = "GET", S = "POST";
      function T(P, B) {
        return Promise.all(B.map(function(A) {
          return P.get(A, function() {
            return Promise.resolve($(A));
          });
        })).then(function(A) {
          var j = A.filter(function(ee) {
            return function(X) {
              return X.status === y || Date.now() - X.lastUpdate > 12e4;
            }(ee);
          }), q = A.filter(function(ee) {
            return function(X) {
              return X.status === v && Date.now() - X.lastUpdate <= 12e4;
            }(ee);
          }), Q = [].concat(s(j), s(q));
          return { getTimeout: function(ee, X) {
            return (q.length === 0 && ee === 0 ? 1 : q.length + 3 + ee) * X;
          }, statelessHosts: Q.length > 0 ? Q.map(function(ee) {
            return k(ee);
          }) : B };
        });
      }
      function M(P, B, A, j) {
        var q = [], Q = function(Ee, He) {
          if (!(Ee.method === O || Ee.data === void 0 && He.data === void 0)) {
            var ke = Array.isArray(Ee.data) ? Ee.data : o(o({}, Ee.data), He.data);
            return JSON.stringify(ke);
          }
        }(A, j), ee = function(Ee, He) {
          var ke = o(o({}, Ee.headers), He.headers), je = {};
          return Object.keys(ke).forEach(function(ft) {
            var Ze = ke[ft];
            je[ft.toLowerCase()] = Ze;
          }), je;
        }(P, j), X = A.method, pe = A.method !== O ? {} : o(o({}, A.data), j.data), Ce = o(o(o({ "x-algolia-agent": P.userAgent.value }, P.queryParameters), pe), j.queryParameters), be = 0, Le = function Ee(He, ke) {
          var je = He.pop();
          if (je === void 0) throw { name: "RetryError", message: "Unreachable hosts - your application id may be incorrect. If the error persists, please reach out to the Algolia Support team: https://alg.li/support .", transporterStackTrace: z(q) };
          var ft = { data: Q, headers: ee, method: X, url: E(je, A.path, Ce), connectTimeout: ke(be, P.timeouts.connect), responseTimeout: ke(be, j.timeout) }, Ze = function(Be) {
            var ye = { request: ft, response: Be, host: je, triesLeft: He.length };
            return q.push(ye), ye;
          }, ao = { onSuccess: function(Be) {
            return function(ye) {
              try {
                return JSON.parse(ye.content);
              } catch (at) {
                throw /* @__PURE__ */ function(ht, Bt) {
                  return { name: "DeserializationError", message: ht, response: Bt };
                }(at.message, ye);
              }
            }(Be);
          }, onRetry: function(Be) {
            var ye = Ze(Be);
            return Be.isTimedOut && be++, Promise.all([P.logger.info("Retryable failure", K(ye)), P.hostsCache.set(je, $(je, Be.isTimedOut ? v : w))]).then(function() {
              return Ee(He, ke);
            });
          }, onFail: function(Be) {
            throw Ze(Be), function(ye, at) {
              var ht = ye.content, Bt = ye.status, qt = ht;
              try {
                qt = JSON.parse(ht).message;
              } catch {
              }
              return /* @__PURE__ */ function(so, Po, el) {
                return { name: "ApiError", message: so, status: Po, transporterStackTrace: el };
              }(qt, Bt, at);
            }(Be, z(q));
          } };
          return P.requester.send(ft).then(function(Be) {
            return function(ye, at) {
              return function(ht) {
                var Bt = ht.status;
                return ht.isTimedOut || function(qt) {
                  var so = qt.isTimedOut, Po = qt.status;
                  return !so && ~~Po == 0;
                }(ht) || ~~(Bt / 100) != 2 && ~~(Bt / 100) != 4;
              }(ye) ? at.onRetry(ye) : ~~(ye.status / 100) == 2 ? at.onSuccess(ye) : at.onFail(ye);
            }(Be, ao);
          });
        };
        return T(P.hostsCache, B).then(function(Ee) {
          return Le(s(Ee.statelessHosts).reverse(), Ee.getTimeout);
        });
      }
      function b(P) {
        var B = { value: "Algolia for JavaScript (".concat(P, ")"), add: function(A) {
          var j = "; ".concat(A.segment).concat(A.version !== void 0 ? " (".concat(A.version, ")") : "");
          return B.value.indexOf(j) === -1 && (B.value = "".concat(B.value).concat(j)), B;
        } };
        return B;
      }
      function E(P, B, A) {
        var j = H(A), q = "".concat(P.protocol, "://").concat(P.url, "/").concat(B.charAt(0) === "/" ? B.substr(1) : B);
        return j.length && (q += "?".concat(j)), q;
      }
      function H(P) {
        return Object.keys(P).map(function(B) {
          return f("%s=%s", B, (A = P[B], Object.prototype.toString.call(A) === "[object Object]" || Object.prototype.toString.call(A) === "[object Array]" ? JSON.stringify(P[B]) : P[B]));
          var A;
        }).join("&");
      }
      function z(P) {
        return P.map(function(B) {
          return K(B);
        });
      }
      function K(P) {
        var B = P.request.headers["x-algolia-api-key"] ? { "x-algolia-api-key": "*****" } : {};
        return o(o({}, P), {}, { request: o(o({}, P.request), {}, { headers: o(o({}, P.request.headers), B) }) });
      }
      var F = function(P) {
        var B = P.appId, A = /* @__PURE__ */ function(q, Q, ee) {
          var X = { "x-algolia-api-key": ee, "x-algolia-application-id": Q };
          return { headers: function() {
            return q === p.WithinHeaders ? X : {};
          }, queryParameters: function() {
            return q === p.WithinQueryParameters ? X : {};
          } };
        }(P.authMode !== void 0 ? P.authMode : p.WithinHeaders, B, P.apiKey), j = function(q) {
          var Q = q.hostsCache, ee = q.logger, X = q.requester, pe = q.requestsCache, Ce = q.responsesCache, be = q.timeouts, Le = q.userAgent, Ee = q.hosts, He = q.queryParameters, ke = { hostsCache: Q, logger: ee, requester: X, requestsCache: pe, responsesCache: Ce, timeouts: be, userAgent: Le, headers: q.headers, queryParameters: He, hosts: Ee.map(function(je) {
            return k(je);
          }), read: function(je, ft) {
            var Ze = g(ft, ke.timeouts.read), ao = function() {
              return M(ke, ke.hosts.filter(function(ye) {
                return (ye.accept & h.Read) != 0;
              }), je, Ze);
            };
            if ((Ze.cacheable !== void 0 ? Ze.cacheable : je.cacheable) !== !0) return ao();
            var Be = { request: je, mappedRequestOptions: Ze, transporter: { queryParameters: ke.queryParameters, headers: ke.headers } };
            return ke.responsesCache.get(Be, function() {
              return ke.requestsCache.get(Be, function() {
                return ke.requestsCache.set(Be, ao()).then(function(ye) {
                  return Promise.all([ke.requestsCache.delete(Be), ye]);
                }, function(ye) {
                  return Promise.all([ke.requestsCache.delete(Be), Promise.reject(ye)]);
                }).then(function(ye) {
                  var at = a(ye, 2);
                  return at[0], at[1];
                });
              });
            }, { miss: function(ye) {
              return ke.responsesCache.set(Be, ye);
            } });
          }, write: function(je, ft) {
            return M(ke, ke.hosts.filter(function(Ze) {
              return (Ze.accept & h.Write) != 0;
            }), je, g(ft, ke.timeouts.write));
          } };
          return ke;
        }(o(o({ hosts: [{ url: "".concat(B, "-dsn.algolia.net"), accept: h.Read }, { url: "".concat(B, ".algolia.net"), accept: h.Write }].concat(d([{ url: "".concat(B, "-1.algolianet.com") }, { url: "".concat(B, "-2.algolianet.com") }, { url: "".concat(B, "-3.algolianet.com") }])) }, P), {}, { headers: o(o(o({}, A.headers()), { "content-type": "application/x-www-form-urlencoded" }), P.headers), queryParameters: o(o({}, A.queryParameters()), P.queryParameters) }));
        return m({ transporter: j, appId: B, addAlgoliaAgent: function(q, Q) {
          j.userAgent.add({ segment: q, version: Q });
        }, clearCache: function() {
          return Promise.all([j.requestsCache.clear(), j.responsesCache.clear()]).then(function() {
          });
        } }, P.methods);
      }, Y = function(P) {
        return function(B, A) {
          return B.method === O ? P.transporter.read(B, A) : P.transporter.write(B, A);
        };
      }, re = function(P) {
        return function(B) {
          var A = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, j = { transporter: P.transporter, appId: P.appId, indexName: B };
          return m(j, A.methods);
        };
      }, te = function(P) {
        return function(B, A) {
          var j = B.map(function(q) {
            return o(o({}, q), {}, { params: H(q.params || {}) });
          });
          return P.transporter.read({ method: S, path: "1/indexes/*/queries", data: { requests: j }, cacheable: !0 }, A);
        };
      }, Z = function(P) {
        return function(B, A) {
          return Promise.all(B.map(function(j) {
            var q = j.params, Q = q.facetName, ee = q.facetQuery, X = l(q, ["facetName", "facetQuery"]);
            return re(P)(j.indexName, { methods: { searchForFacetValues: ie } }).searchForFacetValues(Q, ee, o(o({}, A), X));
          }));
        };
      }, ce = function(P) {
        return function(B, A, j) {
          return P.transporter.read({ method: S, path: f("1/answers/%s/prediction", P.indexName), data: { query: B, queryLanguages: A }, cacheable: !0 }, j);
        };
      }, he = function(P) {
        return function(B, A) {
          return P.transporter.read({ method: S, path: f("1/indexes/%s/query", P.indexName), data: { query: B }, cacheable: !0 }, A);
        };
      }, ie = function(P) {
        return function(B, A, j) {
          return P.transporter.read({ method: S, path: f("1/indexes/%s/facets/%s/query", P.indexName, B), data: { facetQuery: A }, cacheable: !0 }, j);
        };
      }, Me = 1, Te = 2, J = 3, fe = function(P) {
        return function(B, A) {
          var j = B.map(function(q) {
            return o(o({}, q), {}, { threshold: q.threshold || 0 });
          });
          return P.transporter.read({ method: S, path: "1/indexes/*/recommendations", data: { requests: j }, cacheable: !0 }, A);
        };
      };
      function Ae(P, B, A) {
        var j, q = { appId: P, apiKey: B, timeouts: { connect: 1, read: 2, write: 30 }, requester: { send: function(Q) {
          return new Promise(function(ee) {
            var X = new XMLHttpRequest();
            X.open(Q.method, Q.url, !0), Object.keys(Q.headers).forEach(function(Le) {
              return X.setRequestHeader(Le, Q.headers[Le]);
            });
            var pe, Ce = function(Le, Ee) {
              return setTimeout(function() {
                X.abort(), ee({ status: 0, content: Ee, isTimedOut: !0 });
              }, 1e3 * Le);
            }, be = Ce(Q.connectTimeout, "Connection timeout");
            X.onreadystatechange = function() {
              X.readyState > X.OPENED && pe === void 0 && (clearTimeout(be), pe = Ce(Q.responseTimeout, "Socket timeout"));
            }, X.onerror = function() {
              X.status === 0 && (clearTimeout(be), clearTimeout(pe), ee({ content: X.responseText || "Network request failed", status: X.status, isTimedOut: !1 }));
            }, X.onload = function() {
              clearTimeout(be), clearTimeout(pe), ee({ content: X.responseText, status: X.status, isTimedOut: !1 });
            }, X.send(Q.data);
          });
        } }, logger: (j = J, { debug: function(Q, ee) {
          return Me >= j && console.debug(Q, ee), Promise.resolve();
        }, info: function(Q, ee) {
          return Te >= j && console.info(Q, ee), Promise.resolve();
        }, error: function(Q, ee) {
          return console.error(Q, ee), Promise.resolve();
        } }), responsesCache: c(), requestsCache: c({ serializable: !1 }), hostsCache: u({ caches: [i({ key: "".concat("4.25.2", "-").concat(P) }), c()] }), userAgent: b("4.25.2").add({ segment: "Browser", version: "lite" }), authMode: p.WithinQueryParameters };
        return F(o(o(o({}, q), A), {}, { methods: { search: te, searchForFacetValues: Z, multipleQueries: te, multipleSearchForFacetValues: Z, customRequest: Y, initIndex: function(Q) {
          return function(ee) {
            return re(Q)(ee, { methods: { search: he, searchForFacetValues: ie, findAnswers: ce } });
          };
        }, getRecommendations: fe } }));
      }
      return Ae.version = "4.25.2", Ae;
    });
  }(po)), po.exports;
}
var yd = /* @__PURE__ */ bd();
const xd = /* @__PURE__ */ gd(yd);
class Rf {
  constructor(n) {
    Io(this, "searchIndex");
    const t = xd(n.appId, n.searchKey);
    this.searchIndex = t.initIndex(n.indexName);
  }
  async search(n) {
    if (!n)
      return [];
    try {
      const { hits: t } = await this.searchIndex.search(n);
      return t.map((r) => ({
        id: r.objectID,
        url: r.url || "",
        title: r.title || "",
        description: r.description || "",
        ...r
        // Include any additional fields from Algolia
      }));
    } catch (t) {
      return console.error("Algolia search error:", t), [];
    }
  }
}
class Bf {
  constructor(n) {
    Io(this, "items");
    this.items = n;
  }
  async search(n) {
    if (!n)
      return [];
    const t = n.toLowerCase();
    return this.items.filter((r) => [
      r.title,
      r.description,
      ...r.keywords || []
    ].join(" ").toLowerCase().includes(t)).map((r) => ({
      id: r.id,
      url: r.url,
      title: r.title,
      description: r.description
    })).slice(0, 10);
  }
}
export {
  $d as Alert,
  Od as AlertAction,
  Sd as AlertDescription,
  Td as AlertIcon,
  Ed as AlertTitle,
  Rf as AlgoliaSearchStrategy,
  wf as AnnouncementsDrawer,
  fl as Badge,
  xf as BreadcrumbEllipsis,
  gf as BreadcrumbItem,
  hf as BreadcrumbLink,
  vf as BreadcrumbList,
  bf as BreadcrumbPage,
  yf as BreadcrumbSeparator,
  mf as Breadcrumbs,
  Ge as Button,
  Dd as Card,
  Pd as CardContent,
  Id as CardDescription,
  Rd as CardFooter,
  Bd as CardHeader,
  Md as CardTitle,
  Ad as CodeBlock,
  Ld as CodeBlockTab,
  Vd as CodeBlockTabButton,
  Zl as ColorPicker,
  kf as ColumnManager,
  Fo as Combobox,
  Cf as CommandPalette,
  _f as ConfirmationDialog,
  Hd as Drawer,
  Ud as DrawerBody,
  Di as DrawerClose,
  Oi as DrawerContent,
  Wd as DrawerFooter,
  Pi as DrawerHandle,
  qd as DrawerHeader,
  Kd as DrawerTitle,
  vi as Dropdown,
  gi as DropdownContent,
  zo as DropdownItem,
  zd as DropdownLabel,
  yi as DropdownSeparator,
  jd as DropdownSub,
  Nd as DropdownSubContent,
  Gd as DropdownSubTrigger,
  ki as DropdownTrigger,
  Yr as EmptyState,
  $f as FluentQueryBuilder,
  Jr as Input,
  Bf as LocalSearchStrategy,
  Yd as Modal,
  Jd as ModalBody,
  ji as ModalClose,
  Fi as ModalContent,
  Xd as ModalFooter,
  Qd as ModalHeader,
  Zd as ModalTitle,
  Ui as Popover,
  Xr as Sortable,
  lf as Table,
  af as TableBody,
  sf as TableCaption,
  uf as TableCell,
  cf as TableFooter,
  df as TableHead,
  ff as TableHeader,
  pf as TableRow,
  Of as Tabs,
  Ef as TabsContent,
  Sf as TabsList,
  Df as TabsPanel,
  Tf as TabsTrigger,
  ef as Textarea,
  tf as ThemeToggle,
  of as Tooltip,
  nf as TooltipContent,
  rf as TooltipTrigger,
  Qr as Typeahead,
  Ul as provideCodeBlockContext,
  Zn as useCodeBlockContext,
  Pf as useConfirmationDialog,
  If as useDrawer
};
//# sourceMappingURL=pickle-jar-ui.es.js.map
