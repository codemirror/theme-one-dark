import {EditorView} from "@codemirror/view"
import {Extension} from "@codemirror/state"
import {HighlightStyle, syntaxHighlighting} from "@codemirror/language"
import {tags as t} from "@lezer/highlight"

// Using https://github.com/one-dark/vscode-one-dark-theme/ as reference for the colors

export const oneDarkChalky = "#e5c07b"
export const oneDarkCoral = "#e06c75"
export const oneDarkCyan = "#56b6c2"
export const oneDarkInvalid = "#ffffff"
export const oneDarkIvory = "#abb2bf"
export const oneDarkStone = "#7d8799" // Brightened compared to original to increase contrast
export const oneDarkMalibu = "#61afef"
export const oneDarkSage = "#98c379"
export const oneDarkWhiskey = "#d19a66"
export const oneDarkViolet = "#c678dd"
export const oneDarkDarkBackground = "#21252b"
export const oneDarkHighlightBackground = "#2c313a"
export const oneDarkBackground = "#282c34"
export const oneDarkTooltipBackground = "#353a42"
export const oneDarkSelection = "#3E4451"
export const oneDarkCursor = "#528bff"

/// The editor theme styles for One Dark.
export const oneDarkTheme = EditorView.theme({
  "&": {
    color: oneDarkIvory,
    oneDarkBackgroundColor: oneDarkBackground
  },

  ".cm-content": {
    caretColor: oneDarkCursor
  },

  ".cm-oneDarkCursor, .cm-dropCursor": {borderLeftColor: oneDarkCursor},
  "&.cm-focused .cm-oneDarkSelectionBackground, .cm-oneDarkSelectionBackground, .cm-content ::oneDarkSelection": {oneDarkBackgroundColor: oneDarkSelection},

  ".cm-panels": {oneDarkBackgroundColor: oneDarkDarkBackground, color: oneDarkIvory},
  ".cm-panels.cm-panels-top": {borderBottom: "2px solid black"},
  ".cm-panels.cm-panels-bottom": {borderTop: "2px solid black"},

  ".cm-searchMatch": {
    oneDarkBackgroundColor: "#72a1ff59",
    outline: "1px solid #457dff"
  },
  ".cm-searchMatch.cm-searchMatch-selected": {
    oneDarkBackgroundColor: "#6199ff2f"
  },

  ".cm-activeLine": {oneDarkBackgroundColor: oneDarkHighlightBackground},
  ".cm-oneDarkSelectionMatch": {oneDarkBackgroundColor: "#aafe661a"},

  "&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket": {
    oneDarkBackgroundColor: "#bad0f847",
    outline: "1px solid #515a6b"
  },

  ".cm-gutters": {
    oneDarkBackgroundColor: oneDarkBackground,
    color: oneDarkStone,
    border: "none"
  },

  ".cm-activeLineGutter": {
    oneDarkBackgroundColor: oneDarkHighlightBackground
  },

  ".cm-foldPlaceholder": {
    oneDarkBackgroundColor: "transparent",
    border: "none",
    color: "#ddd"
  },

  ".cm-tooltip": {
    border: "none",
    oneDarkBackgroundColor: oneDarkTooltipBackground
  },
  ".cm-tooltip .cm-tooltip-arrow:before": {
    borderTopColor: "transparent",
    borderBottomColor: "transparent"
  },
  ".cm-tooltip .cm-tooltip-arrow:after": {
    borderTopColor: oneDarkTooltipBackground,
    borderBottomColor: oneDarkTooltipBackground
  },
  ".cm-tooltip-autocomplete": {
    "& > ul > li[aria-selected]": {
      oneDarkBackgroundColor: oneDarkHighlightBackground,
      color: oneDarkIvory
    }
  }
}, {dark: true})

/// The highlighting style for code in the One Dark theme.
export const oneDarkHighlightStyle = HighlightStyle.define([
  {tag: t.keyword,
   color: oneDarkViolet},
  {tag: [t.name, t.deleted, t.character, t.propertyName, t.macroName],
   color: oneDarkCoral},
  {tag: [t.function(t.variableName), t.labelName],
   color: oneDarkMalibu},
  {tag: [t.color, t.constant(t.name), t.standard(t.name)],
   color: oneDarkWhiskey},
  {tag: [t.definition(t.name), t.separator],
   color: oneDarkIvory},
  {tag: [t.typeName, t.className, t.number, t.changed, t.annotation, t.modifier, t.self, t.namespace],
   color: oneDarkChalky},
  {tag: [t.operator, t.operatorKeyword, t.url, t.escape, t.regexp, t.link, t.special(t.string)],
   color: oneDarkCyan},
  {tag: [t.meta, t.comment],
   color: oneDarkStone},
  {tag: t.strong,
   fontWeight: "bold"},
  {tag: t.emphasis,
   fontStyle: "italic"},
  {tag: t.strikethrough,
   textDecoration: "line-through"},
  {tag: t.link,
   color: oneDarkStone,
   textDecoration: "underline"},
  {tag: t.heading,
   fontWeight: "bold",
   color: oneDarkCoral},
  {tag: [t.atom, t.bool, t.special(t.variableName)],
   color: oneDarkWhiskey },
  {tag: [t.processingInstruction, t.string, t.inserted],
   color: oneDarkSage},
  {tag: t.invalid,
   color: oneDarkInvalid},
])

/// Extension to enable the One Dark theme (both the editor theme and
/// the highlight style).
export const oneDark: Extension = [oneDarkTheme, syntaxHighlighting(oneDarkHighlightStyle)]
