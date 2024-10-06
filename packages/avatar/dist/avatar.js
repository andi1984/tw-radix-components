"use client";
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Avatar = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const RadixAvatar = __importStar(require("@radix-ui/react-avatar"));
const Avatar = () => ((0, jsx_runtime_1.jsxs)("div", { style: { display: "flex", gap: 20 }, children: [(0, jsx_runtime_1.jsxs)(RadixAvatar.Root, { className: "AvatarRoot", children: [(0, jsx_runtime_1.jsx)(RadixAvatar.Image, { className: "AvatarImage", src: "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80", alt: "Colm Tuite" }), (0, jsx_runtime_1.jsx)(RadixAvatar.Fallback, { className: "AvatarFallback", delayMs: 600, children: "CT" })] }), (0, jsx_runtime_1.jsxs)(RadixAvatar.Root, { className: "AvatarRoot", children: [(0, jsx_runtime_1.jsx)(RadixAvatar.Image, { className: "AvatarImage", src: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80", alt: "Pedro Duarte" }), (0, jsx_runtime_1.jsx)(RadixAvatar.Fallback, { className: "AvatarFallback", delayMs: 600, children: "JD" })] }), (0, jsx_runtime_1.jsx)(RadixAvatar.Root, { className: "AvatarRoot", children: (0, jsx_runtime_1.jsx)(RadixAvatar.Fallback, { className: "AvatarFallback", children: "PD" }) })] }));
exports.Avatar = Avatar;
exports.default = exports.Avatar;
