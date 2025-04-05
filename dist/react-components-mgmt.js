import { jsx as e, jsxs as n, Fragment as E } from "react/jsx-runtime";
import { useRef as I, useState as y, useEffect as P } from "react";
const N = (l) => {
  switch (l) {
    case "secondary":
      return "bg-gray-300 ";
    case "danger":
      return "bg-red-700 ";
    case "success":
      return "bg-green-600 ";
    case "warning":
      return "bg-yellow-600 ";
    default:
      return "bg-gray-900 ";
  }
}, R = ({ children: l, onClose: a, onSelectElement: c, data: p, color: o, customColor: d }) => {
  let i = "w-full h-[40px] flex items-center justify-between p-2 text-white ";
  const r = {};
  return d ? r.backgroundColor = d : i += N(o), /* @__PURE__ */ e(
    "div",
    {
      className: "absolute inline-block border border-gray-300 shadow min-w-[180px] left-3",
      style: {
        zIndex: 100
      },
      children: l || /* @__PURE__ */ n("div", { children: [
        /* @__PURE__ */ n("div", { className: i, style: r, children: [
          /* @__PURE__ */ e("p", { children: "Filtrar por:" }),
          /* @__PURE__ */ e("p", { className: "cursor-pointer", onClick: a, children: "X" })
        ] }),
        /* @__PURE__ */ e("div", { className: "", children: /* @__PURE__ */ e("ul", { children: p.map((s) => /* @__PURE__ */ n(
          "li",
          {
            className: "cursor-pointer hover:bg-gray-200 px-3 py-1 text-gray-500 font-normal",
            onClick: () => c(s),
            children: [
              s.label,
              ":"
            ]
          },
          s.key
        )) }) })
      ] })
    }
  );
}, V = ({ children: l, onClose: a, title: c, color: p, customColor: o, applyChanges: d }) => {
  let i = "w-full h-[40px] flex items-center justify-between p-2 text-white ";
  const r = I(null), s = {};
  return o ? s.backgroundColor = o : i += N(p), /* @__PURE__ */ e(
    "div",
    {
      className: "absolute inline-block border border-gray-300 shadow min-w-[180px] left-3",
      style: {
        zIndex: 100
      },
      children: l || /* @__PURE__ */ n("div", { children: [
        /* @__PURE__ */ n("div", { className: i, style: s, children: [
          /* @__PURE__ */ e("p", { children: c || "Filtro" }),
          /* @__PURE__ */ e("p", { className: "cursor-pointer", onClick: a, children: "X" })
        ] }),
        /* @__PURE__ */ e("div", { className: "py-5 px-2 min-h-[80px] flex items-end", children: /* @__PURE__ */ e(
          "input",
          {
            ref: r,
            type: "text",
            placeholder: "Inicia con",
            className: "borde-0 border-b border-b-gray-300 py-1 px-2 text-gray-500 outline-none",
            style: {
              outline: "none"
            }
          }
        ) }),
        /* @__PURE__ */ e("div", { className: "flex justify-end px-4", children: /* @__PURE__ */ e("button", { onClick: () => {
          var h;
          r && r.current && (r.current.value.length != 0 ? (d(r.current.value), r.current.value = "", a()) : (h = r.current) == null || h.focus());
        }, className: "text-gray-400 py-3 hover:underline cursor-pointer", children: "APLICAR" }) })
      ] })
    }
  );
}, X = ({ element: l, onClose: a }) => /* @__PURE__ */ n("div", { className: "bg-gray-200 text-gray-600 rounded-full px-3 flex flex-nowrap items-center", children: [
  /* @__PURE__ */ n("span", { className: "text-nowrap text-sm py-1", children: [
    /* @__PURE__ */ n("span", { className: "font-medium", children: [
      l.label,
      ":"
    ] }),
    " ",
    l.inputValue
  ] }),
  /* @__PURE__ */ e(
    "span",
    {
      className: "inline-block cursor-pointer bg-gray-100 rounded-full w-[20px] h-[20px] leading-[1] text-center ml-2",
      onClick: (c) => {
        c.stopPropagation(), a(l.key);
      },
      children: "x"
    }
  )
] }), L = ({ Label: l, size: a, rounded: c, placeholder: p, data: o, color: d, customColor: i, onChange: r }) => {
  const [s, b] = y("closed"), [h, C] = y(o), [m, g] = y(null), [f, k] = y([]);
  let u = "border border-gray-300 w-full cursor-text shadow-sm px-5 py-1 flex items-center justify-between ";
  switch (a) {
    case "sm":
      u += "min-h-[25px] ";
      break;
    case "lg":
      u += "min-h-[35px] ";
      break;
    default:
      u += "min-h-[30px] ";
      break;
  }
  switch (c) {
    case "sm":
      u += "rounded ";
      break;
    case "md":
      u += "rounded-md ";
      break;
    default:
      u += "rounded-full ";
      break;
  }
  const F = (t) => {
    g(t), b("value");
  }, w = () => {
    b("closed"), g(null);
  }, S = (t) => {
    k((x) => x.filter((v) => v.key != t));
  }, j = (t) => {
    t.stopPropagation(), k([]);
  };
  P(() => {
    C(o.filter((t) => !f.some((x) => x.key === t.key))), r && r(f);
  }, [f]);
  const A = (t) => {
    if (m) {
      const x = {
        inputValue: t,
        ...m
      };
      k((v) => [
        ...v,
        x
      ]), g(null);
    }
  };
  return /* @__PURE__ */ n("div", { className: "relative", children: [
    l && /* @__PURE__ */ e("p", { className: "text-gray-500 pl-3", children: l }),
    /* @__PURE__ */ e(
      "div",
      {
        className: u,
        onClick: () => {
          h.length > 0 && b("filters");
        },
        children: f.length > 0 ? /* @__PURE__ */ n(E, { children: [
          /* @__PURE__ */ e("div", { className: "flex items-center flex-wrap overflow-hidden gap-1", children: f.map((t) => /* @__PURE__ */ e(X, { element: t, onClose: S }, t.key)) }),
          /* @__PURE__ */ e("div", { className: "px-2 border border-dashed rounded-full text-nowrap text-gray-500 cursor-pointer ml-2 ", onClick: j, children: "X Borrar" })
        ] }) : /* @__PURE__ */ e("span", { className: "text-gray-500 pl-2 pr-3 font-normal rounded-full inline-block border border-dashed", children: p || "+ Agregar Filtro:" })
      }
    ),
    s == "filters" && /* @__PURE__ */ e(
      R,
      {
        onClose: w,
        onSelectElement: F,
        color: d,
        data: h,
        customColor: i
      }
    ),
    s == "value" && /* @__PURE__ */ e(
      V,
      {
        onClose: w,
        title: m == null ? void 0 : m.label,
        color: d,
        customColor: i,
        applyChanges: A
      }
    )
  ] });
};
export {
  L as SearchBar
};
