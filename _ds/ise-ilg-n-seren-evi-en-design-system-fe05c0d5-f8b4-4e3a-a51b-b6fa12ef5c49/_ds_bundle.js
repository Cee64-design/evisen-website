/* @ds-bundle: {"format":4,"namespace":"ISEIlgNSerenEviEnDesignSystem_fe05c0","components":[{"name":"Badge","sourcePath":"components/data-display/Badge.jsx"},{"name":"Card","sourcePath":"components/data-display/Card.jsx"},{"name":"Tag","sourcePath":"components/data-display/Tag.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"}],"sourceHashes":{"components/data-display/Badge.jsx":"cafb8935a9df","components/data-display/Card.jsx":"5f1354b6e98d","components/data-display/Tag.jsx":"f53eef44841c","components/forms/Button.jsx":"702e41b799e1","components/forms/Checkbox.jsx":"795ce0647efd","components/forms/Input.jsx":"649bb035cffb"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ISEIlgNSerenEviEnDesignSystem_fe05c0 = window.ISEIlgNSerenEviEnDesignSystem_fe05c0 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/data-display/Badge.jsx
try { (() => {
function Badge({
  children,
  tone = "blue"
}) {
  const tones = {
    blue: {
      background: "var(--ise-blue-16)",
      color: "var(--ise-navy)"
    },
    teal: {
      background: "var(--ise-teal-16)",
      color: "#04565b"
    },
    gold: {
      background: "var(--ise-gold-16)",
      color: "#7a5900"
    },
    navy: {
      background: "var(--ise-navy)",
      color: "#fff"
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      letterSpacing: ".04em",
      fontWeight: 500,
      padding: "4px 12px",
      borderRadius: "var(--radius-pill)",
      ...tones[tone]
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Card.jsx
try { (() => {
function Card({
  children,
  tone = "surface",
  padding = "lg"
}) {
  const tones = {
    surface: {
      background: "#fff",
      boxShadow: "var(--shadow-md)"
    },
    cyan: {
      background: "var(--ise-bg-cyan)",
      boxShadow: "var(--shadow-teal)"
    },
    pink: {
      background: "var(--ise-bg-pink)",
      boxShadow: "var(--shadow-warm)"
    },
    navy: {
      background: "var(--ise-navy)",
      boxShadow: "var(--shadow-lg)",
      color: "#fff"
    }
  };
  const paddings = {
    sm: "var(--space-4)",
    lg: "var(--space-6)"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: "var(--radius-lg)",
      padding: paddings[padding],
      ...tones[tone]
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Card.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Tag.jsx
try { (() => {
function Tag({
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      fontFamily: "var(--font-body)",
      fontWeight: 500,
      fontSize: 13,
      padding: "6px 14px",
      borderRadius: "var(--radius-pill)",
      background: "#fff",
      color: "var(--color-text-body)",
      boxShadow: "inset 0 0 0 1.5px var(--ise-navy-16)"
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function Button({
  children,
  variant = "primary",
  size = "md",
  disabled,
  onClick,
  type = "button"
}) {
  const base = {
    fontFamily: "var(--font-body)",
    fontWeight: 600,
    border: "none",
    borderRadius: "var(--radius-pill)",
    cursor: disabled ? "not-allowed" : "pointer",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    transition: "background-color .15s ease, color .15s ease, box-shadow .15s ease",
    opacity: disabled ? 0.5 : 1
  };
  const sizes = {
    sm: {
      padding: "8px 18px",
      fontSize: 13
    },
    md: {
      padding: "12px 26px",
      fontSize: 15
    },
    lg: {
      padding: "16px 34px",
      fontSize: 17
    }
  };
  const variants = {
    primary: {
      background: "var(--ise-blue)",
      color: "#fff"
    },
    dark: {
      background: "var(--ise-navy)",
      color: "#fff"
    },
    gold: {
      background: "var(--ise-gold)",
      color: "var(--ise-navy)"
    },
    ghost: {
      background: "transparent",
      color: "var(--ise-navy)",
      boxShadow: "inset 0 0 0 1.5px var(--ise-navy)"
    }
  };
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    disabled: disabled,
    onClick: onClick,
    style: {
      ...base,
      ...sizes[size],
      ...variants[variant]
    },
    onMouseEnter: e => {
      if (disabled) return;
      if (variant === "primary") e.currentTarget.style.background = "var(--ise-navy)";
      if (variant === "dark") e.currentTarget.style.background = "#062d54";
      if (variant === "gold") e.currentTarget.style.background = "#d99a00";
      if (variant === "ghost") {
        e.currentTarget.style.background = "var(--ise-navy-08)";
      }
    },
    onMouseLeave: e => {
      if (disabled) return;
      if (variant === "primary") e.currentTarget.style.background = "var(--ise-blue)";
      if (variant === "dark") e.currentTarget.style.background = "var(--ise-navy)";
      if (variant === "gold") e.currentTarget.style.background = "var(--ise-gold)";
      if (variant === "ghost") {
        e.currentTarget.style.background = "transparent";
      }
    }
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked,
  onChange,
  disabled
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      cursor: disabled ? "not-allowed" : "pointer",
      fontFamily: "var(--font-body)",
      fontSize: 15,
      color: "var(--color-text-body)",
      opacity: disabled ? 0.5 : 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.background = checked ? "var(--ise-navy)" : "var(--ise-blue-08)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = checked ? "var(--ise-blue)" : "transparent";
    },
    style: {
      width: 22,
      height: 22,
      borderRadius: "var(--radius-sm)",
      border: checked ? "none" : "1.5px solid var(--ise-navy-32)",
      background: checked ? "var(--ise-blue)" : "transparent",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "background-color .15s ease"
    }
  }, checked && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "10",
    viewBox: "0 0 12 10",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 5L4.2 8.2L11 1",
    stroke: "white",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      display: "none"
    }
  }), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  placeholder,
  type = "text",
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      fontFamily: "var(--font-body)",
      width: "100%"
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: ".06em",
      textTransform: "uppercase",
      color: "var(--color-text-muted)"
    }
  }, label), /*#__PURE__*/React.createElement("input", {
    type: type,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 15,
      padding: "12px 16px",
      borderRadius: "var(--radius-md)",
      border: "1.5px solid var(--ise-navy-16)",
      background: "#fff",
      color: "var(--color-text-body)",
      outline: "none",
      transition: "border-color .15s ease, box-shadow .15s ease"
    },
    onFocus: e => {
      e.currentTarget.style.borderColor = "var(--ise-blue)";
      e.currentTarget.style.boxShadow = "0 0 0 3px var(--ise-blue-16)";
    },
    onBlur: e => {
      e.currentTarget.style.borderColor = "var(--ise-navy-16)";
      e.currentTarget.style.boxShadow = "none";
    }
  }));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

})();
