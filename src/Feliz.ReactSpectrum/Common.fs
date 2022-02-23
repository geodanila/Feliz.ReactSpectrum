namespace Feliz.ReactSpectrum

open Fable.Core

[<StringEnum; RequireQualifiedAccess>]
type ButtonType =
    | Button
    | Submit
    | Reset

[<StringEnum; RequireQualifiedAccess>]
type Overflow =
    | Visible
    | Hidden
    | Clip
    | Scroll
    | Auto
    | Initial
    | Inherit
    | Unset

[<StringEnum; RequireQualifiedAccess>]
type LinkVariant =
    | Primary
    | Secondary
    | OverBackground

[<StringEnum; RequireQualifiedAccess>]
type ColorScheme = Light | Dark

[<StringEnum; RequireQualifiedAccess>]
type IconSize =
    | [<CompiledName("XXS")>] XXS
    | [<CompiledName("XS")>] XS
    | [<CompiledName("S")>] S
    | [<CompiledName("M")>] M
    | [<CompiledName("L")>] L
    | [<CompiledName("XL")>] XL
    | [<CompiledName("XXL")>] XXL

[<StringEnum; RequireQualifiedAccess>]
type BreadcrumbsSize =
    | [<CompiledName("S")>] S
    | [<CompiledName("M")>] M
    | [<CompiledName("L")>] L

[<StringEnum; RequireQualifiedAccess>]
type SemanticColor =
    | Negative
    | Notice
    | Positive
    | Informative

[<StringEnum; RequireQualifiedAccess>]
type PointerType =
    | Mouse
    | Pen
    | Touch
    | Keyboard
    | Virtual

[<StringEnum>]
type LayoutSize =
    | [<CompiledName("size-0")>] Size0
    | [<CompiledName("size-10")>] Size10
    | [<CompiledName("size-25")>] Size25
    | [<CompiledName("size-40")>] Size40
    | [<CompiledName("size-50")>] Size50
    | [<CompiledName("size-65")>] Size65
    | [<CompiledName("size-75")>] Size75
    | [<CompiledName("size-85")>] Size85
    | [<CompiledName("size-100")>] Size100
    | [<CompiledName("size-115")>] Size115
    | [<CompiledName("size-125")>] Size125
    | [<CompiledName("size-130")>] Size130
    | [<CompiledName("size-150")>] Size150
    | [<CompiledName("size-160")>] Size160
    | [<CompiledName("size-175")>] Size175
    | [<CompiledName("size-200")>] Size200
    | [<CompiledName("size-225")>] Size225
    | [<CompiledName("size-250")>] Size250
    | [<CompiledName("size-300")>] Size300
    | [<CompiledName("size-350")>] Size350
    | [<CompiledName("size-400")>] Size400
    | [<CompiledName("size-450")>] Size450
    | [<CompiledName("size-500")>] Size500
    | [<CompiledName("size-550")>] Size550
    | [<CompiledName("size-600")>] Size600
    | [<CompiledName("size-675")>] Size675
    | [<CompiledName("size-700")>] Size700
    | [<CompiledName("size-800")>] Size800
    | [<CompiledName("size-900")>] Size900
    | [<CompiledName("size-1000")>] Size1000
    | [<CompiledName("size-1200")>] Size1200
    | [<CompiledName("size-1250")>] Size1250
    | [<CompiledName("size-1600")>] Size1600
    | [<CompiledName("size-1700")>] Size1700
    | [<CompiledName("size-2000")>] Size2000
    | [<CompiledName("size-2400")>] Size2400
    | [<CompiledName("size-3000")>] Size3000
    | [<CompiledName("size-3400")>] Size3400
    | [<CompiledName("size-3600")>] Size3600
    | [<CompiledName("size-4600")>] Size4600
    | [<CompiledName("size-5000")>] Size5000
    | [<CompiledName("size-6000")>] Size6000

[<StringEnum>]
type LayoutStaticSize =
    | [<CompiledName("static-size-0")>] StaticSize0
    | [<CompiledName("static-size-10")>] StaticSize10
    | [<CompiledName("static-size-25")>] StaticSize25
    | [<CompiledName("static-size-50")>] StaticSize50
    | [<CompiledName("static-size-40")>] StaticSize40
    | [<CompiledName("static-size-65")>] StaticSize65
    | [<CompiledName("static-size-100")>] StaticSize100
    | [<CompiledName("static-size-115")>] StaticSize115
    | [<CompiledName("static-size-125")>] StaticSize125
    | [<CompiledName("static-size-130")>] StaticSize130
    | [<CompiledName("static-size-150")>] StaticSize150
    | [<CompiledName("static-size-160")>] StaticSize160
    | [<CompiledName("static-size-175")>] StaticSize175
    | [<CompiledName("static-size-200")>] StaticSize200
    | [<CompiledName("static-size-225")>] StaticSize225
    | [<CompiledName("static-size-250")>] StaticSize250
    | [<CompiledName("static-size-300")>] StaticSize300
    | [<CompiledName("static-size-400")>] StaticSize400
    | [<CompiledName("static-size-450")>] StaticSize450
    | [<CompiledName("static-size-500")>] StaticSize500
    | [<CompiledName("static-size-550")>] StaticSize550
    | [<CompiledName("static-size-600")>] StaticSize600
    | [<CompiledName("static-size-700")>] StaticSize700
    | [<CompiledName("static-size-800")>] StaticSize800
    | [<CompiledName("static-size-900")>] StaticSize900
    | [<CompiledName("static-size-1000")>] StaticSize1000
    | [<CompiledName("static-size-1200")>] StaticSize1200
    | [<CompiledName("static-size-1700")>] StaticSize1700
    | [<CompiledName("static-size-2400")>] StaticSize2400
    | [<CompiledName("static-size-2600")>] StaticSize2600
    | [<CompiledName("static-size-3400")>] StaticSize3400
    | [<CompiledName("static-size-3600")>] StaticSize3600
    | [<CompiledName("static-size-4600")>] StaticSize4600
    | [<CompiledName("static-size-5000")>] StaticSize5000
    | [<CompiledName("static-size-6000")>] StaticSize6000

[<StringEnum; RequireQualifiedAccess>]
type FlexDirection =
    | Column
    | Row
    | [<CompiledName("row-reverse")>] RowReverse
    | [<CompiledName("column-reverse")>] ColumnReverse

[<StringEnum; RequireQualifiedAccess>]
type FlexAlignSelf =
    | Auto
    | Normal
    | Start
    | End
    | Center
    | [<CompiledName("flex-start")>] FlexStart
    | [<CompiledName("flex-end")>] FlexEnd
    | [<CompiledName("self-start")>] SelfStart
    | [<CompiledName("self-end")>] SelfEnd
    | Stretch

[<StringEnum; RequireQualifiedAccess>]
type FlexJustifyContent =
    | Start
    | End
    | Center
    | Left
    | Right
    | [<CompiledName("space-between")>] SpaceBetween
    | [<CompiledName("space-around")>] SpaceAround
    | [<CompiledName("space-evenly")>] SpaceEvenly
    | Stretch
    | Baseline
    | [<CompiledName("first baseline")>] FirstBaseline
    | [<CompiledName("last baseline")>] LastBaseline
    | [<CompiledName("safe center")>] SafeCenter
    | [<CompiledName("unsafe center")>] UnsafeCenter

[<StringEnum; RequireQualifiedAccess>]
type FlexAlignContent =
    | Start
    | End
    | Center
    | [<CompiledName("space-between")>] SpaceBetween
    | [<CompiledName("space-around")>] SpaceAround
    | [<CompiledName("space-evenly")>] SpaceEvenly
    | Stretch
    | Baseline
    | [<CompiledName("first baseline")>] FirstBaseline
    | [<CompiledName("last baseline")>] LastBaseline
    | [<CompiledName("safe center")>] SafeCenter
    | [<CompiledName("unsafe center")>] UnsafeCenter

[<StringEnum; RequireQualifiedAccess>]
type FlexAlignItems =
    | Start
    | End
    | Center
    | Stretch
    | [<CompiledName("self-start")>] SelfStart
    | [<CompiledName("self-end")>] SelfEnd
    | Baseline
    | [<CompiledName("first baseline")>] FirstBaseline
    | [<CompiledName("last baseline")>] LastBaseline
    | [<CompiledName("safe center")>] SafeCenter
    | [<CompiledName("unsafe center")>] UnsafeCenter

[<StringEnum; RequireQualifiedAccess>]
type FlexJustifySelf =
    | Auto
    | Normal
    | Start
    | End
    | [<CompiledName("flex-start")>] FlexStart
    | [<CompiledName("flex-end")>] FlexEnd
    | [<CompiledName("self-start")>] SelfStart
    | [<CompiledName("self-end")>] SelfEnd
    | Center
    | Left
    | Right
    | Stretch

[<StringEnum; RequireQualifiedAccess>]
type FlexWrap =
    | Wrap
    | [<CompiledName("nowrap")>] NoWrap
    | [<CompiledName("wrap-reverse")>] WrapReverse

[<StringEnum; RequireQualifiedAccess>]
type GridAutoFlow =
    | Row
    | Column
    | [<CompiledName("row dense")>] RowDense
    | [<CompiledName("column dense")>] ColumnDense

[<StringEnum; RequireQualifiedAccess>]
type GridJustifyItems =
    | Auto
    | Normal
    | Start
    | End
    | Center
    | Left
    | Right
    | Stretch
    | [<CompiledName("self-start")>] SelfStart
    | [<CompiledName("self-end")>] SelfEnd
    | Baseline
    | [<CompiledName("first baseline")>] FirstBaseline
    | [<CompiledName("last baseline")>] LastBaseline
    | [<CompiledName("safe center")>] SafeCenter
    | [<CompiledName("unsafe center")>] UnsafeCenter
    | [<CompiledName("legacy right")>] LegacyRight
    | [<CompiledName("legacy left")>] LegacyLeft
    | [<CompiledName("legacy center")>] LegacyCenter


[<StringEnum; RequireQualifiedAccess>]
type GridJustifyContent =
    | Start
    | End
    | Center
    | Left
    | Right
    | [<CompiledName("space-between")>] SpaceBetween
    | [<CompiledName("space-around")>] SpaceAround
    | [<CompiledName("space-evenly")>] SpaceEvenly
    | Stretch
    | Baseline
    | [<CompiledName("first baseline")>] FirstBaseline
    | [<CompiledName("last baseline")>] LastBaseline
    | [<CompiledName("safe center")>] SafeCenter
    | [<CompiledName("unsafe center")>] UnsafeCenter

[<StringEnum; RequireQualifiedAccess>]
type GridAlignContent =
    | Start
    | End
    | Center
    | [<CompiledName("space-between")>] SpaceBetween
    | [<CompiledName("space-around")>] SpaceAround
    | [<CompiledName("space-evenly")>] SpaceEvenly
    | Stretch
    | Baseline
    | [<CompiledName("first baseline")>] FirstBaseline
    | [<CompiledName("last baseline")>] LastBaseline
    | [<CompiledName("safe center")>] SafeCenter
    | [<CompiledName("unsafe center")>] UnsafeCenter

[<StringEnum; RequireQualifiedAccess>]
type GridAlignItems =
    | Start
    | End
    | Center
    | Stretch
    | [<CompiledName("self-start")>] SelfStart
    | [<CompiledName("self-end")>] SelfEnd
    | Baseline
    | [<CompiledName("first baseline")>] FirstBaseline
    | [<CompiledName("last baseline")>] LastBaseline
    | [<CompiledName("safe center")>] SafeCenter
    | [<CompiledName("unsafe center")>] UnsafeCenter

[<StringEnum>]
type ColorValue =
    | [<CompiledName("celery-400")>] Celery400
    | [<CompiledName("celery-500")>] Celery500
    | [<CompiledName("celery-600")>] Celery600
    | [<CompiledName("celery-700")>] Celery700
    | [<CompiledName("chartreuse-400")>] Chartreuse400
    | [<CompiledName("chartreuse-500")>] Chartreuse500
    | [<CompiledName("chartreuse-600")>] Chartreuse600
    | [<CompiledName("chartreuse-700")>] Chartreuse700
    | [<CompiledName("yellow-400")>] Yellow400
    | [<CompiledName("yellow-500")>] Yellow500
    | [<CompiledName("yellow-600")>] Yellow600
    | [<CompiledName("yellow-700")>] Yellow700
    | [<CompiledName("magenta-400")>] Magenta400
    | [<CompiledName("magenta-500")>] Magenta500
    | [<CompiledName("magenta-600")>] Magenta600
    | [<CompiledName("magenta-700")>] Magenta700
    | [<CompiledName("fuchsia-400")>] Fuchsia400
    | [<CompiledName("fuchsia-500")>] Fuchsia500
    | [<CompiledName("fuchsia-600")>] Fuchsia600
    | [<CompiledName("fuchsia-700")>] Fuchsia700
    | [<CompiledName("purple-400")>] Purple400
    | [<CompiledName("purple-500")>] Purple500
    | [<CompiledName("purple-600")>] Purple600
    | [<CompiledName("purple-700")>] Purple700
    | [<CompiledName("indigo-400")>] Indigo400
    | [<CompiledName("indigo-500")>] Indigo500
    | [<CompiledName("indigo-600")>] Indigo600
    | [<CompiledName("indigo-700")>] Indigo700
    | [<CompiledName("seafoam-400")>] Seafoam400
    | [<CompiledName("seafoam-500")>] Seafoam500
    | [<CompiledName("seafoam-600")>] Seafoam600
    | [<CompiledName("seafoam-700")>] Seafoam700
    | [<CompiledName("red-400")>] Red400
    | [<CompiledName("red-500")>] Red500
    | [<CompiledName("red-600")>] Red600
    | [<CompiledName("red-700")>] Red700
    | [<CompiledName("orange-400")>] Orange400
    | [<CompiledName("orange-500")>] Orange500
    | [<CompiledName("orange-600")>] Orange600
    | [<CompiledName("orange-700")>] Orange700
    | [<CompiledName("green-400")>] Green400
    | [<CompiledName("green-500")>] Green500
    | [<CompiledName("green-600")>] Green600
    | [<CompiledName("green-700")>] Green700
    | [<CompiledName("blue-400")>] Blue400
    | [<CompiledName("blue-500")>] Blue500
    | [<CompiledName("blue-600")>] Blue600
    | [<CompiledName("blue-700")>] Blue700
    | [<CompiledName("gray-50")>] Gray50
    | [<CompiledName("gray-75")>] Gray75
    | [<CompiledName("gray-100")>] Gray100
    | [<CompiledName("gray-200")>] Gray200
    | [<CompiledName("gray-300")>] Gray300
    | [<CompiledName("gray-400")>] Gray400
    | [<CompiledName("gray-500")>] Gray500
    | [<CompiledName("gray-600")>] Gray600
    | [<CompiledName("gray-700")>] Gray700
    | [<CompiledName("gray-800")>] Gray800
    | [<CompiledName("gray-900")>] Gray900
    | [<CompiledName("static-black")>] StaticBlack
    | [<CompiledName("static-white")>] StaticWhite
    | [<CompiledName("static-blue")>] StaticBlue
    | [<CompiledName("static-gray-50")>] StaticGray50
    | [<CompiledName("static-gray-75")>] StaticGray75
    | [<CompiledName("static-gray-100")>] StaticGray100
    | [<CompiledName("static-gray-200")>] StaticGray200
    | [<CompiledName("static-gray-300")>] StaticGray300
    | [<CompiledName("static-gray-400")>] StaticGray400
    | [<CompiledName("static-gray-500")>] StaticGray500
    | [<CompiledName("static-gray-600")>] StaticGray600
    | [<CompiledName("static-gray-700")>] StaticGray700
    | [<CompiledName("static-gray-800")>] StaticGray800
    | [<CompiledName("static-gray-900")>] StaticGray900
    | [<CompiledName("static-blue-200")>] StaticBlue200
    | [<CompiledName("static-blue-300")>] StaticBlue300
    | [<CompiledName("static-blue-400")>] StaticBlue400
    | [<CompiledName("static-blue-500")>] StaticBlue500
    | [<CompiledName("static-blue-600")>] StaticBlue600
    | [<CompiledName("static-blue-700")>] StaticBlue700
    | [<CompiledName("static-blue-800")>] StaticBlue800
    | [<CompiledName("static-red-400")>] StaticRed400
    | [<CompiledName("static-red-500")>] StaticRed500
    | [<CompiledName("static-red-600")>] StaticRed600
    | [<CompiledName("static-red-700")>] StaticRed700
    | [<CompiledName("static-orange-400")>] StaticOrange400
    | [<CompiledName("static-orange-500")>] StaticOrange500
    | [<CompiledName("static-orange-600")>] StaticOrange600
    | [<CompiledName("static-orange-700")>] StaticOrange700
    | [<CompiledName("static-green-400")>] StaticGreen400
    | [<CompiledName("static-green-500")>] StaticGreen500
    | [<CompiledName("static-green-600")>] StaticGreen600
    | [<CompiledName("static-green-700")>] StaticGreen700
    | [<CompiledName("static-celery-200")>] StaticCelery200
    | [<CompiledName("static-celery-300")>] StaticCelery300
    | [<CompiledName("static-celery-400")>] StaticCelery400
    | [<CompiledName("static-celery-500")>] StaticCelery500
    | [<CompiledName("static-celery-600")>] StaticCelery600
    | [<CompiledName("static-celery-700")>] StaticCelery700
    | [<CompiledName("static-chartreuse-300")>] StaticChartreuse300
    | [<CompiledName("static-chartreuse-400")>] StaticChartreuse400
    | [<CompiledName("static-chartreuse-500")>] StaticChartreuse500
    | [<CompiledName("static-chartreuse-600")>] StaticChartreuse600
    | [<CompiledName("static-chartreuse-700")>] StaticChartreuse700
    | [<CompiledName("static-yellow-200")>] StaticYellow200
    | [<CompiledName("static-yellow-300")>] StaticYellow300
    | [<CompiledName("static-yellow-400")>] StaticYellow400
    | [<CompiledName("static-yellow-500")>] StaticYellow500
    | [<CompiledName("static-yellow-600")>] StaticYellow600
    | [<CompiledName("static-yellow-700")>] StaticYellow700
    | [<CompiledName("static-magenta-200")>] StaticMagenta200
    | [<CompiledName("static-magenta-300")>] StaticMagenta300
    | [<CompiledName("static-magenta-400")>] StaticMagenta400
    | [<CompiledName("static-magenta-500")>] StaticMagenta500
    | [<CompiledName("static-magenta-600")>] StaticMagenta600
    | [<CompiledName("static-magenta-700")>] StaticMagenta700
    | [<CompiledName("static-fuchsia-400")>] StaticFuchsia400
    | [<CompiledName("static-fuchsia-500")>] StaticFuchsia500
    | [<CompiledName("static-fuchsia-600")>] StaticFuchsia600
    | [<CompiledName("static-fuchsia-700")>] StaticFuchsia700
    | [<CompiledName("static-purple-400")>] StaticPurple400
    | [<CompiledName("static-purple-500")>] StaticPurple500
    | [<CompiledName("static-purple-600")>] StaticPurple600
    | [<CompiledName("static-purple-700")>] StaticPurple700
    | [<CompiledName("static-purple-800")>] StaticPurple800
    | [<CompiledName("static-indigo-200")>] StaticIndigo200
    | [<CompiledName("static-indigo-300")>] StaticIndigo300
    | [<CompiledName("static-indigo-400")>] StaticIndigo400
    | [<CompiledName("static-indigo-500")>] StaticIndigo500
    | [<CompiledName("static-indigo-600")>] StaticIndigo600
    | [<CompiledName("static-indigo-700")>] StaticIndigo700
    | [<CompiledName("static-seafoam-200")>] StaticSeafoam200
    | [<CompiledName("static-seafoam-300")>] StaticSeafoam300
    | [<CompiledName("static-seafoam-400")>] StaticSeafoam400
    | [<CompiledName("static-seafoam-500")>] StaticSeafoam500
    | [<CompiledName("static-seafoam-600")>] StaticSeafoam600
    | [<CompiledName("static-seafoam-700")>] StaticSeafoam700
    | [<CompiledName("negative")>] Negative
    | [<CompiledName("notice")>] Notice
    | [<CompiledName("positive")>] Positive
    | [<CompiledName("informative")>] Informative

[<Erase; RequireQualifiedAccess>]
type BackgroundColorValue =
    | [<CompiledName("default")>] Default
    | [<CompiledName("transparent")>] Transparent
    | [<CompiledName("label-gray")>] LabelGray
    | Color of ColorValue

[<StringEnum; RequireQualifiedAccess>]
type PositionValue =
    | Static
    | Relative
    | Absolute
    | Fixed
    | Sticky

[<StringEnum; RequireQualifiedAccess>]
type AriaHasPopupValue =
    | Menu
    | [<CompiledName("listbox")>] ListBox
    | Tree
    | Grid
    | Dialog

[<StringEnum; RequireQualifiedAccess>]
type BorderSizeValue =
    | Thin
    | Thick
    | Thicker
    | Thickest

[<Erase; RequireQualifiedAccess>]
type BorderColorValue =
    | [<CompiledName("default")>] Default
    | [<CompiledName("negative")>] Negative
    | [<CompiledName("notice")>] Notice
    | [<CompiledName("positive")>] Positive
    | [<CompiledName("informative")>] Informative
    | [<CompiledName("hover")>] Hover
    | [<CompiledName("down")>] Down
    | [<CompiledName("focus")>] Focus
    | [<CompiledName("mouse-focus")>] MouseFocus
    | [<CompiledName("disabled")>] Disabled
    | [<CompiledName("extralight")>] ExtraLight
    | [<CompiledName("light")>] Light
    | [<CompiledName("mid")>] Mid
    | [<CompiledName("dark")>] Dark
    | [<CompiledName("transparent")>] Transparent
    | [<CompiledName("translucent-dark")>] TranslucentDark
    | [<CompiledName("translucent-darker")>] TranslucentDarker
    | Color of ColorValue

[<StringEnum; RequireQualifiedAccess>]
type BorderRadiusValue =
    | [<CompiledName("xsmall")>] ExtraSmall
    | [<CompiledName("small")>] Small
    | [<CompiledName("regular")>] Regular
    | [<CompiledName("medium")>] Medium
    | [<CompiledName("large")>] Large

[<Erase; RequireQualifiedAccess>]
type DimValue =
    | String of string
    | Number of int
    | NumberF of float
    | Boolean of bool
    | Size of LayoutSize
    | StaticSize of LayoutStaticSize
    | [<CompiledName("single-line-height")>] SingleLineHeight
    | [<CompiledName("single-line-width")>] SingleLineWidth

[<Erase>]
type RepeatCount =
    | Number of int
    | [<CompiledName("auto-fill")>] AutoFill
    | [<CompiledName("auto-fit")>] AutoFit

[<StringEnum; RequireQualifiedAccess>]
type ValidationState =
    | Valid
    | Invalid

[<StringEnum; RequireQualifiedAccess>]
type Scale =
    | Medium
    | Large

[<StringEnum; RequireQualifiedAccess>]
type Density =
    | Compact
    | Regular

[<StringEnum; RequireQualifiedAccess>]
type StaticColorValue =
    | White
    | Black

[<StringEnum; RequireQualifiedAccess>]
type ActionGroupOverflowMode =
    | Wrap
    | Collapse

[<StringEnum; RequireQualifiedAccess>]
type TableViewOverflowMode =
    | Wrap
    | Truncate

[<Erase>]
type ActionGroupSelection<'a> =
    | [<CompiledName("all")>] All
    | Set of 'a list

[<StringEnum; RequireQualifiedAccess>]
type ButtonLabelBehavior =
    | Show
    | Collapse
    | Hide

[<StringEnum; RequireQualifiedAccess>]
type Orientation =
    | Horizontal
    | Vertical

[<StringEnum; RequireQualifiedAccess>]
type SelectionMode =
    | None
    | Single
    | Multiple

[<StringEnum; RequireQualifiedAccess>]
type ButtonGroupAlignment =
    | Start
    | Center
    | End

[<Erase>]
type SpectrumEvent =
    inherit Browser.Types.Event

[<Erase>]
type SpectrumKeyboardEvent =
    inherit Browser.Types.KeyboardEvent
    abstract member stopPropagation: unit -> unit
    abstract member continuePropagation: unit -> unit

[<Erase>]
type SpectrumCompositionEvent =
    inherit Browser.Types.CompositionEvent

[<Erase>]
type SpectrumClipboardEvent =
    inherit Browser.Types.ClipboardEvent

[<Erase>]
type SpectrumFocusEvent =
    inherit Browser.Types.FocusEvent

[<Erase>]
type SpectrumInputEvent =
    inherit Browser.Types.UIEvent
    abstract member data: string
    abstract member dataTransfer: Browser.Types.DataTransfer
    abstract member inputType: string
    abstract member isComposing: bool

[<StringEnum; RequireQualifiedAccess>]
type PressEventType =
    | [<CompiledName("pressstart")>] PressStart
    | [<CompiledName("pressend")>] PressEnd
    | [<CompiledName("pressup")>] PressUp
    | Press

[<Erase>]
type SpectrumPressEvent =
    abstract member ``type``: PressEventType
    abstract member pointerType: PointerType
    abstract member target: Browser.Types.HTMLElement
    abstract member shiftKey: bool
    abstract member ctrlKey: bool
    abstract member metaKey: bool
    abstract member altKey: bool

[<StringEnum; RequireQualifiedAccess>]
type DialogTriggerType =
    | Modal
    | Popover
    | Tray
    | Fullscreen
    | FullscreenTakeover

[<StringEnum; RequireQualifiedAccess>]
type MobileDialogTriggerType =
    | Modal
    | Tray
    | Fullscreen
    | FullscreenTakeover

[<StringEnum; RequireQualifiedAccess>]
type Placement =
    | Bottom
    | [<CompiledName("bottom left")>] BottomLeft
    | [<CompiledName("bottom right")>] BottomRight
    | [<CompiledName("bottom start")>] BottomStart
    | [<CompiledName("bottom end")>] BottomEnd
    | Top
    | [<CompiledName("top left")>] TopLeft
    | [<CompiledName("top right")>] TopRight
    | [<CompiledName("top start")>] TopStart
    | [<CompiledName("top end")>] TopEnd
    | Left
    | [<CompiledName("left top")>] LeftTop
    | [<CompiledName("left bottom")>] LeftBottom
    | Start
    | [<CompiledName("start top")>] StartTop
    | [<CompiledName("start bottom")>] StartBottom
    | Right
    | [<CompiledName("right top")>] RightTop
    | [<CompiledName("right bottom")>] RightBottom
    | End
    | [<CompiledName("end top")>] EndTop
    | [<CompiledName("end bottom")>] EndBottom

[<StringEnum; RequireQualifiedAccess>]
type AlertDialogVariant =
    | Confirmation
    | Information
    | Destructive
    | Error
    | Warning

[<StringEnum; RequireQualifiedAccess>]
type AutoFocusButton =
    | Cancel
    | Primary
    | Secondary

[<StringEnum; RequireQualifiedAccess>]
type DividerSize =
    | [<CompiledName("S")>] S
    | [<CompiledName("M")>] M
    | [<CompiledName("L")>] L


[<StringEnum; RequireQualifiedAccess>]
type DialogSize =
    | [<CompiledName("S")>] S
    | [<CompiledName("M")>] M
    | [<CompiledName("L")>] L

[<StringEnum; RequireQualifiedAccess>]
type FocusStrategy = First | Last

[<StringEnum; RequireQualifiedAccess>]
type Alignment = Start | End

[<StringEnum; RequireQualifiedAccess>]
type MenuDirection =
    | Bottom
    | Top
    | Left
    | Right
    | Start
    | End

[<StringEnum; RequireQualifiedAccess>]
type MenuTriggerType =
    | Press
    | LongPress

[<StringEnum; RequireQualifiedAccess>]
type NecessityIndicator = Icon | Label

[<StringEnum; RequireQualifiedAccess>]
type TableViewDensity =
    | Compact
    | Regular
    | Spacious

[<StringEnum; RequireQualifiedAccess>]
type SortDirection = Ascending | Descending

[<StringEnum; RequireQualifiedAccess>]
type TableViewSelectionStyle = Checkbox | Highlight

[<StringEnum; RequireQualifiedAccess>]
type ColumnAlignment =
    | Start
    | Center
    | End

[<StringEnum; RequireQualifiedAccess>]
type LoadingState =
    | Loading
    | Sorting
    | LoadingMore
    | Error
    | Idle
    | Filtering

[<StringEnum; RequireQualifiedAccess>]
type LabelPosition = Top | Side

[<StringEnum; RequireQualifiedAccess>]
type TextFieldType =
    | Text
    | Search
    | Url
    | Tel
    | Email
    | Password

[<StringEnum; RequireQualifiedAccess>]
type TextInputMode =
    | None
    | Text
    | Tel
    | Url
    | Email
    | Numeric
    | Decimal
    | Search

[<StringEnum; RequireQualifiedAccess>]
type NumberFormatStyle =
    | Decimal
    | Currency
    | Percent
    | Unit

[<StringEnum; RequireQualifiedAccess>]
type NumberFormatLocaleMatcher =
    | Lookup
    | [<CompiledName("best fit")>] BestFit

[<StringEnum; RequireQualifiedAccess>]
type NumberFormatCurrencyDisplay =
    | Symbol
    | NarrowSymbol
    | Code
    | Name

[<StringEnum; RequireQualifiedAccess>]
type NumberFormatCurrencySign =
    | Standard
    | Accounting

[<StringEnum; RequireQualifiedAccess>]
type NumberFormatSignDisplay =
    | Auto
    | Never
    | Always
    | ExceptZero

[<StringEnum; RequireQualifiedAccess>]
type NumberFormatNotation =
    | Standard
    | Scientific
    | Engineering
    | Compact

[<StringEnum; RequireQualifiedAccess>]
type NumberFormatUnitDisplay =
    | Long
    | Short
    | Narrow

[<Erase>]
type NumberFormatOptions =
    abstract member localeMatcher: NumberFormatLocaleMatcher option
    abstract member style: NumberFormatStyle option
    abstract member currency: string option
    abstract member currencyDisplay: NumberFormatCurrencyDisplay option
    abstract member currencySign: NumberFormatCurrencySign option
    abstract member useGrouping: bool option
    abstract member signDisplay: NumberFormatSignDisplay option
    abstract member notation: NumberFormatNotation option
    abstract member unit: string option
    abstract member unitDisplay: NumberFormatUnitDisplay option
    abstract member minimumIntegerDigits: int option
    abstract member minimumFractionDigits: int option
    abstract member maximumFractionDigits: int option
    abstract member minimumSignificantDigits: int option
    abstract member maximumSignificantDigits: int option

[<Erase>]
type NumberFormat =
    static member inline make (?localeMatcher: NumberFormatLocaleMatcher,
      ?style: NumberFormatStyle,
      ?currency: string,
      ?currencyDisplay: NumberFormatCurrencyDisplay,
      ?currencySign: NumberFormatCurrencySign,
      ?useGrouping: bool,
      ?signDisplay: NumberFormatSignDisplay,
      ?notation: NumberFormatNotation,
      ?unit: string,
      ?unitDisplay: NumberFormatUnitDisplay,
      ?minimumIntegerDigits: int,
      ?minimumFractionDigits: int,
      ?maximumFractionDigits: int,
      ?minimumSignificantDigits: int,
      ?maximumSignificantDigits: int) =
        { new NumberFormatOptions with
            member _.localeMatcher = localeMatcher
            member _.style = style
            member _.currency = currency
            member _.currencyDisplay = currencyDisplay
            member _.currencySign = currencySign
            member _.useGrouping = useGrouping
            member _.signDisplay = signDisplay
            member _.notation = notation
            member _.unit = unit
            member _.unitDisplay = unitDisplay
            member _.minimumIntegerDigits = minimumIntegerDigits
            member _.minimumFractionDigits = minimumFractionDigits
            member _.maximumFractionDigits = maximumFractionDigits
            member _.minimumSignificantDigits = minimumSignificantDigits
            member _.maximumSignificantDigits = maximumSignificantDigits }

[<Erase>]
type ResponsivePropOptions<'a> =
    abstract member ``base``: 'a option
    abstract member S: 'a option
    abstract member M: 'a option
    abstract member L: 'a option

[<Erase>]
type ResponsiveProp =
    static member inline make (?base', ?S, ?M, ?L) =
        { new ResponsivePropOptions<'a> with
            member _.``base`` = base'
            member _.S = S
            member _.M = M
            member _.L = L }
    static member inline map (f: 'a -> 'b) (prop: ResponsivePropOptions<'a>) : ResponsivePropOptions<'b> =
        {  new ResponsivePropOptions<'b> with
            member _.``base`` = prop.``base`` |> Option.map f
            member _.S = prop.S |> Option.map f
            member _.M = prop.M |> Option.map f
            member _.L = prop.L |> Option.map f
        }

[<StringEnum; RequireQualifiedAccess>]
type FormEncodingType =
    | [<CompiledName("application/x-www-form-urlencoded")>] FormUrlEncoded
    | [<CompiledName("multipart/form-data")>] MultipartFormData
    | [<CompiledName("text/plain")>] TextPlain

[<StringEnum; RequireQualifiedAccess>]
type FormMethod = Get | Post

[<StringEnum; RequireQualifiedAccess>]
type FormTarget =
    | [<CompiledName("_blank")>] Blank
    | [<CompiledName("_self")>] Self
    | [<CompiledName("_parent")>] Parent
    | [<CompiledName("_top")>] Top

[<StringEnum; RequireQualifiedAccess>]
type ImageObjectFit =
    | Contain
    | Cover
    | Fill
    | None
    | [<CompiledName("scale-down")>] ScaleDown

[<StringEnum; RequireQualifiedAccess>]
type DialogContainerType =
    | Modal
    | Fullscreen
    | FullscreenTakeover

[<StringEnum; RequireQualifiedAccess>]
type TooltipVariant =
    | Neutral
    | Positive
    | Negative
    | Info

[<StringEnum; RequireQualifiedAccess>]
type TooltipPlacement =
    | Start
    | End
    | Right
    | Left
    | Top
    | Bottom

[<StringEnum; RequireQualifiedAccess>]
type ContextualHelpVariant =
    | Help
    | Info

[<StringEnum; RequireQualifiedAccess>]
type MenuTriggerAction =
    | Focus
    | Input
    | Manual

[<StringEnum; RequireQualifiedAccess>]
type PickerMenuDirection =
    | Bottom
    | Top

[<Erase>]
type IDialog =
    abstract member dismiss: unit -> unit

[<Erase>]
type CSSModule =
    abstract member Item: string -> string

[<Erase>]
type ITheme =
    abstract member ``global``: CSSModule option
    abstract member light: CSSModule option
    abstract member dark: CSSModule option
    abstract member medium: CSSModule option
    abstract member large: CSSModule option

(*/** Whether descendants should be displayed with the quiet style. */
  isQuiet?: boolean,
  /** Whether descendants should be displayed with the emphasized style. */
  isEmphasized?: boolean,
  /** Whether descendants should be disabled. */
  isDisabled?: boolean,
  /** Whether descendants should be displayed with the required style. */
  isRequired?: boolean,
  /** Whether descendants should be read only. */
  isReadOnly?: boolean,
  /** Whether descendants should be displayed with the validation state style. */
  validationState?: ValidationState*)

[<Erase>]
type ContextProps =
    abstract member isQuiet: bool option
    abstract member isEmphasized: bool option
    abstract member isDisabled: bool option
    abstract member isRequired: bool option
    abstract member isReadOnly: bool option
    abstract member validationState: ValidationState option

[<Erase>]
type Breakpoints =
    abstract member S: int option
    abstract member M: int option
    abstract member L: int option
    abstract member Item: string -> int

[<Erase>]
type IProviderContext =
    inherit ContextProps
    abstract member version: string
    abstract member theme: ITheme
    abstract member colorScheme: ColorScheme
    abstract member scale: Scale
    abstract member breakpoints: Breakpoints

[<Erase; RequireQualifiedAccess>]
type MeterVariant =
    | Positive
    | Warning
    | Critical

[<Erase; RequireQualifiedAccess>]
type MeterSize =
    | [<CompiledName("S")>] S
    | [<CompiledName("L")>] L

[<Erase; RequireQualifiedAccess>]
type ProgressBarSize =
    | [<CompiledName("S")>] S
    | [<CompiledName("L")>] L

[<Erase; RequireQualifiedAccess>]
type ProgressCircleSize =
    | [<CompiledName("S")>] S
    | [<CompiledName("M")>] M
    | [<CompiledName("L")>] L

[<Erase; RequireQualifiedAccess>]
type StatusLightVariant =
    | Positive
    | Negative
    | Notice
    | Info
    | Neutral
    | Celery
    | Chartreuse
    | Yellow
    | Magenta
    | Fuschia
    | Purple
    | Indigo
    | Seafoam