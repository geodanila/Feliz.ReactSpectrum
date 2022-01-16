namespace Feliz.ReactSpectrum

open Browser.Types
open Feliz
open Fable.Core
open Fable.Core.JsInterop

[<Erase>]
type BaseComponent =
    static member inline key (value: 'a) = Interop.mkAttr "key" value
    static member inline slot (value: string) = Interop.mkAttr "slot" value
    static member inline ref (value: Fable.React.IRefValue<_>) = prop.ref value

    // ----------- Layout -----------
    static member inline flex (value: int) = Interop.mkAttr "flex" value
    static member inline flex (value: float) = Interop.mkAttr "flex" value
    static member inline flex (value: string) = Interop.mkAttr "flex" value
    static member inline flex (value: bool) = Interop.mkAttr "flex" value
    static member inline flex (value: DimValue) = Interop.mkAttr "flex" value
    static member inline flex (value: ResponsivePropOptions<DimValue>) = Interop.mkAttr "flex" value

    static member inline flexGrow (value: int) = Interop.mkAttr "flexGrow" value
    static member inline flexGrow (value: float) = Interop.mkAttr "flexGrow" value
    static member inline flexGrow (value: DimValue) = Interop.mkAttr "flexGrow" value
    static member inline flexGrow (value: ResponsivePropOptions<DimValue>) = Interop.mkAttr "flexGrow" value

    static member inline flexShrink (value: int) = Interop.mkAttr "flexShrink" value
    static member inline flexShrink (value: float) = Interop.mkAttr "flexShrink" value
    static member inline flexShrink (value: DimValue) = Interop.mkAttr "flexShrink" value
    static member inline flexShrink (value: ResponsivePropOptions<DimValue>) = Interop.mkAttr "flexShrink" value

    static member inline flexBasis (value: int) = Interop.mkAttr "flexBasis" value
    static member inline flexBasis (value: float) = Interop.mkAttr "flexBasis" value
    static member inline flexBasis (value: string) = Interop.mkAttr "flexBasis" value
    static member inline flexBasis (value: DimValue) = Interop.mkAttr "flexBasis" value
    static member inline flexBasis (value: ResponsivePropOptions<DimValue>) = Interop.mkAttr "flexBasis" value

    static member inline alignSelf (value: FlexAlignSelf) = Interop.mkAttr "alignSelf" value
    static member inline alignSelf (value: ResponsivePropOptions<FlexAlignSelf>) = Interop.mkAttr "alignSelf" value

    static member inline justifySelf (value: FlexJustifySelf) = Interop.mkAttr "justifySelf" value
    static member inline justifySelf (value: ResponsivePropOptions<FlexJustifySelf>) = Interop.mkAttr "justifySelf" value

    static member inline order (value: int) = Interop.mkAttr "order" value
    static member inline order (value: float) = Interop.mkAttr "order" value
    static member inline order (value: DimValue) = Interop.mkAttr "order" value
    static member inline order (value: ResponsivePropOptions<DimValue>) = Interop.mkAttr "order" value

    static member inline gridArea (value: string) = Interop.mkAttr "gridArea" value
    static member inline gridArea (value: ResponsivePropOptions<string>) = Interop.mkAttr "gridArea" value

    static member inline gridColumn (value: string) = Interop.mkAttr "gridColumn" value
    static member inline gridColumn (value: ResponsivePropOptions<string>) = Interop.mkAttr "gridColumn" value

    static member inline gridRow (value: string) = Interop.mkAttr "gridRow" value
    static member inline gridRow (value: ResponsivePropOptions<string>) = Interop.mkAttr "gridRow" value

    static member inline gridColumnStart (value: string) = Interop.mkAttr "gridColumnStart" value
    static member inline gridColumnStart (value: ResponsivePropOptions<string>) = Interop.mkAttr "gridColumnStart" value

    static member inline gridColumnEnd (value: string) = Interop.mkAttr "gridColumnEnd" value
    static member inline gridColumnEnd (value: ResponsivePropOptions<string>) = Interop.mkAttr "gridColumnEnd" value

    static member inline gridRowStart (value: string) = Interop.mkAttr "gridRowStart" value
    static member inline gridRowStart (value: ResponsivePropOptions<string>) = Interop.mkAttr "gridRowStart" value

    static member inline gridRowEnd (value: string) = Interop.mkAttr "gridRowEnd" value
    static member inline gridRowEnd (value: ResponsivePropOptions<string>) = Interop.mkAttr "gridRowEnd" value

    static member inline overflow (value: Overflow) = Interop.mkAttr "overflow" value
    static member inline overflow (value: ResponsivePropOptions<Overflow>) = Interop.mkAttr "overflow" value

    // ----------- Spacing -----------
    static member inline margin (value: int) = Interop.mkAttr "margin" value
    static member inline margin (value: float) = Interop.mkAttr "margin" value
    static member inline margin (value: string) = Interop.mkAttr "margin" value
    static member inline margin (value: DimValue) = Interop.mkAttr "margin" value
    static member inline margin (value: ResponsivePropOptions<DimValue>) = Interop.mkAttr "margin" value

    static member inline marginTop (value: int) = Interop.mkAttr "marginTop" value
    static member inline marginTop (value: float) = Interop.mkAttr "marginTop" value
    static member inline marginTop (value: string) = Interop.mkAttr "marginTop" value
    static member inline marginTop (value: DimValue) = Interop.mkAttr "marginTop" value
    static member inline marginTop (value: ResponsivePropOptions<DimValue>) = Interop.mkAttr "marginTop" value

    static member inline marginBottom (value: int) = Interop.mkAttr "marginBottom" value
    static member inline marginBottom (value: float) = Interop.mkAttr "marginBottom" value
    static member inline marginBottom (value: string) = Interop.mkAttr "marginBottom" value
    static member inline marginBottom (value: DimValue) = Interop.mkAttr "marginBottom" value
    static member inline marginBottom (value: ResponsivePropOptions<DimValue>) = Interop.mkAttr "marginBottom" value

    static member inline marginStart (value: int) = Interop.mkAttr "marginStart" value
    static member inline marginStart (value: float) = Interop.mkAttr "marginStart" value
    static member inline marginStart (value: string) = Interop.mkAttr "marginStart" value
    static member inline marginStart (value: DimValue) = Interop.mkAttr "marginStart" value
    static member inline marginStart (value: ResponsivePropOptions<DimValue>) = Interop.mkAttr "marginStart" value

    static member inline marginEnd (value: int) = Interop.mkAttr "marginEnd" value
    static member inline marginEnd (value: float) = Interop.mkAttr "marginEnd" value
    static member inline marginEnd (value: string) = Interop.mkAttr "marginEnd" value
    static member inline marginEnd (value: DimValue) = Interop.mkAttr "marginEnd" value
    static member inline marginEnd (value: ResponsivePropOptions<DimValue>) = Interop.mkAttr "marginEnd" value

    static member inline marginX (value: int) = Interop.mkAttr "marginX" value
    static member inline marginX (value: float) = Interop.mkAttr "marginX" value
    static member inline marginX (value: string) = Interop.mkAttr "marginX" value
    static member inline marginX (value: DimValue) = Interop.mkAttr "marginX" value
    static member inline marginX (value: ResponsivePropOptions<DimValue>) = Interop.mkAttr "marginX" value

    static member inline marginY (value: int) = Interop.mkAttr "marginY" value
    static member inline marginY (value: float) = Interop.mkAttr "marginY" value
    static member inline marginY (value: string) = Interop.mkAttr "marginY" value
    static member inline marginY (value: DimValue) = Interop.mkAttr "marginY" value
    static member inline marginY (value: ResponsivePropOptions<DimValue>) = Interop.mkAttr "marginY" value

    // ----------- Sizing -----------
    static member inline width (value: int) = Interop.mkAttr "width" value
    static member inline width (value: float) = Interop.mkAttr "width" value
    static member inline width (value: string) = Interop.mkAttr "width" value
    static member inline width (value: DimValue) = Interop.mkAttr "width" value
    static member inline width (value: ResponsivePropOptions<DimValue>) = Interop.mkAttr "width" value

    static member inline minWidth (value: int) = Interop.mkAttr "minWidth" value
    static member inline minWidth (value: float) = Interop.mkAttr "minWidth" value
    static member inline minWidth (value: string) = Interop.mkAttr "minWidth" value
    static member inline minWidth (value: DimValue) = Interop.mkAttr "minWidth" value
    static member inline minWidth (value: ResponsivePropOptions<DimValue>) = Interop.mkAttr "minWidth" value

    static member inline maxWidth (value: int) = Interop.mkAttr "maxWidth" value
    static member inline maxWidth (value: float) = Interop.mkAttr "maxWidth" value
    static member inline maxWidth (value: string) = Interop.mkAttr "maxWidth" value
    static member inline maxWidth (value: DimValue) = Interop.mkAttr "maxWidth" value
    static member inline maxWidth (value: ResponsivePropOptions<DimValue>) = Interop.mkAttr "maxWidth" value

    static member inline height (value: int) = Interop.mkAttr "height" value
    static member inline height (value: float) = Interop.mkAttr "height" value
    static member inline height (value: string) = Interop.mkAttr "height" value
    static member inline height (value: DimValue) = Interop.mkAttr "height" value
    static member inline height (value: ResponsivePropOptions<DimValue>) = Interop.mkAttr "height" value

    static member inline minHeight (value: int) = Interop.mkAttr "minHeight" value
    static member inline minHeight (value: float) = Interop.mkAttr "minHeight" value
    static member inline minHeight (value: string) = Interop.mkAttr "minHeight" value
    static member inline minHeight (value: DimValue) = Interop.mkAttr "minHeight" value
    static member inline minHeight (value: ResponsivePropOptions<DimValue>) = Interop.mkAttr "minHeight" value

    static member inline maxHeight (value: int) = Interop.mkAttr "maxHeight" value
    static member inline maxHeight (value: float) = Interop.mkAttr "maxHeight" value
    static member inline maxHeight (value: string) = Interop.mkAttr "maxHeight" value
    static member inline maxHeight (value: DimValue) = Interop.mkAttr "maxHeight" value
    static member inline maxHeight (value: ResponsivePropOptions<DimValue>) = Interop.mkAttr "maxHeight" value

    // ----------- Positioning -----------
    static member inline position (value: PositionValue) = Interop.mkAttr "position" value
    static member inline position (value: ResponsivePropOptions<PositionValue>) = Interop.mkAttr "position" value

    static member inline top (value: int) = Interop.mkAttr "top" value
    static member inline top (value: float) = Interop.mkAttr "top" value
    static member inline top (value: string) = Interop.mkAttr "top" value
    static member inline top (value: DimValue) = Interop.mkAttr "top" value
    static member inline top (value: ResponsivePropOptions<DimValue>) = Interop.mkAttr "top" value

    static member inline bottom (value: int) = Interop.mkAttr "bottom" value
    static member inline bottom (value: float) = Interop.mkAttr "bottom" value
    static member inline bottom (value: string) = Interop.mkAttr "bottom" value
    static member inline bottom (value: DimValue) = Interop.mkAttr "bottom" value
    static member inline bottom (value: ResponsivePropOptions<DimValue>) = Interop.mkAttr "bottom" value

    static member inline left (value: int) = Interop.mkAttr "left" value
    static member inline left (value: float) = Interop.mkAttr "left" value
    static member inline left (value: string) = Interop.mkAttr "left" value
    static member inline left (value: DimValue) = Interop.mkAttr "left" value
    static member inline left (value: ResponsivePropOptions<DimValue>) = Interop.mkAttr "left" value

    static member inline right (value: int) = Interop.mkAttr "right" value
    static member inline right (value: float) = Interop.mkAttr "right" value
    static member inline right (value: string) = Interop.mkAttr "right" value
    static member inline right (value: DimValue) = Interop.mkAttr "right" value
    static member inline right (value: ResponsivePropOptions<DimValue>) = Interop.mkAttr "right" value

    static member inline start (value: int) = Interop.mkAttr "start" value
    static member inline start (value: float) = Interop.mkAttr "start" value
    static member inline start (value: string) = Interop.mkAttr "start" value
    static member inline start (value: DimValue) = Interop.mkAttr "start" value
    static member inline start (value: ResponsivePropOptions<DimValue>) = Interop.mkAttr "start" value

    static member inline end' (value: int) = Interop.mkAttr "end" value
    static member inline end' (value: float) = Interop.mkAttr "end" value
    static member inline end' (value: string) = Interop.mkAttr "end" value
    static member inline end' (value: DimValue) = Interop.mkAttr "end" value
    static member inline end' (value: ResponsivePropOptions<DimValue>) = Interop.mkAttr "end" value

    static member inline zIndex (value: int) = Interop.mkAttr "zIndex" value
    static member inline zIndex (value: float) = Interop.mkAttr "zIndex" value
    static member inline zIndex (value: DimValue) = Interop.mkAttr "zIndex" value
    static member inline zIndex (value: ResponsivePropOptions<DimValue>) = Interop.mkAttr "zIndex" value

    static member inline isHidden (value: bool) = Interop.mkAttr "isHidden" value
    static member inline isHidden (value: DimValue) = Interop.mkAttr "isHidden" value
    static member inline isHidden (value: ResponsivePropOptions<DimValue>) = Interop.mkAttr "isHidden" value

    // ----------- Accessibility -----------
    static member inline id (value: string) = Interop.mkAttr "id" value
    static member inline excludeFromTabOrder (value: bool) = Interop.mkAttr "excludeFromTabOrder" value
    static member inline ariaExpanded (value: bool) = Interop.mkAttr "aria-expanded" value
    static member inline ariaHasPopup (value: bool) = Interop.mkAttr "aria-haspopup" value
    static member inline ariaHasPopup (value: AriaHasPopupValue) = Interop.mkAttr "aria-haspopup" value
    static member inline ariaControls (value: string) = Interop.mkAttr "aria-controls" value
    static member inline ariaPressed (value: bool) = Interop.mkAttr "aria-pressed" value
    static member inline ariaLabel (value: string) = Interop.mkAttr "aria-label" value
    static member inline ariaLabeledBy (value: string) = Interop.mkAttr "aria-labelledby" value
    static member inline ariaDescribedBy (value: string) = Interop.mkAttr "aria-describedby" value
    static member inline ariaDetails (value: string) = Interop.mkAttr "aria-details" value
    static member inline role (value: string) = Interop.mkAttr "role" value

    // ----------- Advanced -----------
    static member inline UNSAFE_className (value: string) = Interop.mkAttr "UNSAFE_className" value
    static member inline UNSAFE_style (properties: #IStyleAttribute list) = Interop.mkAttr "UNSAFE_style" (createObj !!properties)

[<Erase>]
type BaseControl =
    inherit BaseComponent

    // ----------- Events -----------
    static member inline onFocus (handler: SpectrumFocusEvent -> unit) = Interop.mkAttr "onFocus" handler
    static member inline onBlur (handler: SpectrumFocusEvent -> unit) = Interop.mkAttr "onBlur" handler
    static member inline onFocusChange (handler: bool -> unit) = Interop.mkAttr "onFocusChange" handler

[<Erase>]
type Item =
    static member inline key (value: 'a) = Interop.mkAttr "key" value
    static member inline content (value: string) = Interop.mkAttr "children" value
    static member inline content (value: ReactElement) = Interop.mkAttr "children" value
    static member inline children (elements: seq<ReactElement>) = prop.children(elements)
    static member inline title (value: ReactElement) = Interop.mkAttr "title" value
    static member inline title (value: string) = Item.title (Html.text value)
    static member inline textValue (value: string) = Interop.mkAttr "textValue" value
    static member inline ariaLabel (value: string) = Interop.mkAttr "aria-label" value
    static member inline childItems (value: seq<ReactElement>) = Interop.mkAttr "childItems" (value |> Array.ofSeq)
    static member inline hasChildItems (value: bool) = Interop.mkAttr "hasChildItems" value

[<Erase>]
type Text =
    inherit BaseComponent
    static member inline content (value: string) = prop.children [ Html.text value ]