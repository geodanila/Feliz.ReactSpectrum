namespace Feliz.ReactSpectrum

open Feliz.ReactSpectrum
open Browser.Types
open Feliz
open Fable.Core
open Fable.Core.JsInterop
open Fable.React

[<Erase>]
type Content =
     inherit BaseComponent
     static member inline children (xs: seq<ReactElement>) = prop.children(xs)

[<Erase>]
type View =
    inherit BaseComponent
    static member inline elementType (value: string) = Interop.mkAttr "elementType" value
    static member inline children (xs: seq<ReactElement>) = prop.children(xs)

    // ----------- Background -----------
    static member inline backgroundColor (value: BackgroundColorValue) = Interop.mkAttr "backgroundColor" value
    static member inline backgroundColor (value: ResponsivePropOptions<BackgroundColorValue>) = Interop.mkAttr "backgroundColor" value

    // ----------- Spacing -----------
    static member inline padding (value: int) = Interop.mkAttr "padding" value
    static member inline padding (value: float) = Interop.mkAttr "padding" value
    static member inline padding (value: string) = Interop.mkAttr "padding" value
    static member inline padding (value: DimValue) = Interop.mkAttr "padding" value
    static member inline padding (value: ResponsivePropOptions<DimValue>) = Interop.mkAttr "padding" value

    static member inline paddingTop (value: int) = Interop.mkAttr "paddingTop" value
    static member inline paddingTop (value: float) = Interop.mkAttr "paddingTop" value
    static member inline paddingTop (value: string) = Interop.mkAttr "paddingTop" value
    static member inline paddingTop (value: DimValue) = Interop.mkAttr "paddingTop" value
    static member inline paddingTop (value: ResponsivePropOptions<DimValue>) = Interop.mkAttr "paddingTop" value

    static member inline paddingBottom (value: int) = Interop.mkAttr "paddingBottom" value
    static member inline paddingBottom (value: float) = Interop.mkAttr "paddingBottom" value
    static member inline paddingBottom (value: string) = Interop.mkAttr "paddingBottom" value
    static member inline paddingBottom (value: DimValue) = Interop.mkAttr "paddingBottom" value
    static member inline paddingBottom (value: ResponsivePropOptions<DimValue>) = Interop.mkAttr "paddingBottom" value

    static member inline paddingStart (value: int) = Interop.mkAttr "paddingStart" value
    static member inline paddingStart (value: float) = Interop.mkAttr "paddingStart" value
    static member inline paddingStart (value: string) = Interop.mkAttr "paddingStart" value
    static member inline paddingStart (value: DimValue) = Interop.mkAttr "paddingStart" value
    static member inline paddingStart (value: ResponsivePropOptions<DimValue>) = Interop.mkAttr "paddingStart" value

    static member inline paddingEnd (value: int) = Interop.mkAttr "paddingEnd" value
    static member inline paddingEnd (value: float) = Interop.mkAttr "paddingEnd" value
    static member inline paddingEnd (value: string) = Interop.mkAttr "paddingEnd" value
    static member inline paddingEnd (value: DimValue) = Interop.mkAttr "paddingEnd" value
    static member inline paddingEnd (value: ResponsivePropOptions<DimValue>) = Interop.mkAttr "paddingEnd" value

    static member inline paddingX (value: int) = Interop.mkAttr "paddingX" value
    static member inline paddingX (value: float) = Interop.mkAttr "paddingX" value
    static member inline paddingX (value: string) = Interop.mkAttr "paddingX" value
    static member inline paddingX (value: DimValue) = Interop.mkAttr "paddingX" value
    static member inline paddingX (value: ResponsivePropOptions<DimValue>) = Interop.mkAttr "paddingX" value

    static member inline paddingY (value: int) = Interop.mkAttr "paddingY" value
    static member inline paddingY (value: float) = Interop.mkAttr "paddingY" value
    static member inline paddingY (value: string) = Interop.mkAttr "paddingY" value
    static member inline paddingY (value: DimValue) = Interop.mkAttr "paddingY" value
    static member inline paddingY (value: ResponsivePropOptions<DimValue>) = Interop.mkAttr "paddingY" value

    // ----------- Borders -----------
    static member inline borderWidth (value: BorderSizeValue) = Interop.mkAttr "borderWidth" value
    static member inline borderWidth (value: ResponsivePropOptions<BorderSizeValue>) = Interop.mkAttr "borderWidth" value

    static member inline borderStartWidth (value: BorderSizeValue) = Interop.mkAttr "borderStartWidth" value
    static member inline borderStartWidth (value: ResponsivePropOptions<BorderSizeValue>) = Interop.mkAttr "borderStartWidth" value

    static member inline borderEndWidth (value: BorderSizeValue) = Interop.mkAttr "borderEndWidth" value
    static member inline borderEndWidth (value: ResponsivePropOptions<BorderSizeValue>) = Interop.mkAttr "borderEndWidth" value

    static member inline borderTopWidth (value: BorderSizeValue) = Interop.mkAttr "borderTopWidth" value
    static member inline borderTopWidth (value: ResponsivePropOptions<BorderSizeValue>) = Interop.mkAttr "borderTopWidth" value

    static member inline borderBottomWidth (value: BorderSizeValue) = Interop.mkAttr "borderBottomWidth" value
    static member inline borderBottomWidth (value: ResponsivePropOptions<BorderSizeValue>) = Interop.mkAttr "borderBottomWidth" value

    static member inline borderXWidth (value: BorderSizeValue) = Interop.mkAttr "borderXWidth" value
    static member inline borderXWidth (value: ResponsivePropOptions<BorderSizeValue>) = Interop.mkAttr "borderXWidth" value

    static member inline borderYWidth (value: BorderSizeValue) = Interop.mkAttr "borderYWidth" value
    static member inline borderYWidth (value: ResponsivePropOptions<BorderSizeValue>) = Interop.mkAttr "borderYWidth" value

    static member inline borderColor (value: BorderColorValue) = Interop.mkAttr "borderColor" value
    static member inline borderColor (value: ResponsivePropOptions<BorderColorValue>) = Interop.mkAttr "borderColor" value

    static member inline borderStartColor (value: BorderColorValue) = Interop.mkAttr "borderStartColor" value
    static member inline borderStartColor (value: ResponsivePropOptions<BorderColorValue>) = Interop.mkAttr "borderStartColor" value

    static member inline borderEndColor (value: BorderColorValue) = Interop.mkAttr "borderEndColor" value
    static member inline borderEndColor (value: ResponsivePropOptions<BorderColorValue>) = Interop.mkAttr "borderEndColor" value

    static member inline borderTopColor (value: BorderColorValue) = Interop.mkAttr "borderTopColor" value
    static member inline borderTopColor (value: ResponsivePropOptions<BorderColorValue>) = Interop.mkAttr "borderTopColor" value

    static member inline borderBottomColor (value: BorderColorValue) = Interop.mkAttr "borderBottomColor" value
    static member inline borderBottomColor (value: ResponsivePropOptions<BorderColorValue>) = Interop.mkAttr "borderBottomColor" value

    static member inline borderXColor (value: BorderColorValue) = Interop.mkAttr "borderXColor" value
    static member inline borderXColor (value: ResponsivePropOptions<BorderColorValue>) = Interop.mkAttr "borderXColor" value

    static member inline borderYColor (value: BorderColorValue) = Interop.mkAttr "borderYColor" value
    static member inline borderYColor (value: ResponsivePropOptions<BorderColorValue>) = Interop.mkAttr "borderYColor" value

    static member inline borderRadius (value: BorderRadiusValue) = Interop.mkAttr "borderRadius" value
    static member inline borderRadius (value: ResponsivePropOptions<BorderRadiusValue>) = Interop.mkAttr "borderRadius" value

    static member inline borderTopStartRadius (value: BorderRadiusValue) = Interop.mkAttr "borderTopStartRadius" value
    static member inline borderTopStartRadius (value: ResponsivePropOptions<BorderRadiusValue>) = Interop.mkAttr "borderTopStartRadius" value

    static member inline borderTopEndRadius (value: BorderRadiusValue) = Interop.mkAttr "borderTopEndRadius" value
    static member inline borderTopEndRadius (value: ResponsivePropOptions<BorderRadiusValue>) = Interop.mkAttr "borderTopEndRadius" value

    static member inline borderBottomStartRadius (value: BorderRadiusValue) = Interop.mkAttr "borderBottomStartRadius" value
    static member inline borderBottomStartRadius (value: ResponsivePropOptions<BorderRadiusValue>) = Interop.mkAttr "borderBottomStartRadius" value

    static member inline borderBottomEndRadius (value: BorderRadiusValue) = Interop.mkAttr "borderBottomEndRadius" value
    static member inline borderBottomEndRadius (value: ResponsivePropOptions<BorderRadiusValue>) = Interop.mkAttr "borderBottomEndRadius" value

[<Erase>]
type Divider =
    inherit BaseComponent
    static member inline size (value: DividerSize) = Interop.mkAttr "size" value
    static member inline orientation (value: Orientation) = Interop.mkAttr "orientation" value

[<Erase>]
type Header =
    inherit BaseComponent
    static member inline content (value: string) = Interop.mkAttr "children" value
    static member inline content (value: ReactElement) = Interop.mkAttr "children" value
    static member inline children (xs: seq<ReactElement>) = prop.children(xs)

[<Erase>]
type Footer =
    inherit BaseComponent
    static member inline content (value: string) = Interop.mkAttr "children" value
    static member inline content (value: ReactElement) = Interop.mkAttr "children" value
    static member inline children (xs: seq<ReactElement>) = prop.children(xs)

[<Erase>]
type Heading =
    inherit BaseComponent
    static member inline content (value: string) = Interop.mkAttr "children" value
    static member inline content (value: ReactElement) = Interop.mkAttr "children" value
    static member inline children (xs: seq<ReactElement>) = prop.children(xs)
    static member inline level (value: int) = Interop.mkAttr "level" value

[<Erase>]
type Image =
    inherit BaseComponent
    static member inline src (value: string) = Interop.mkAttr "src" value
    static member inline alt (value: string) = Interop.mkAttr "alt" value
    static member inline objectFit (value: ImageObjectFit) = Interop.mkAttr "objectFit" value

[<Erase>]
type IllustratedMessage =
    inherit BaseComponent
    static member inline children (xs: seq<ReactElement>) = prop.children(xs)

[<Erase>]
type Well =
    inherit BaseComponent
    static member inline children (xs: seq<ReactElement>) = prop.children(xs)
    static member inline content (value: string) = Interop.mkAttr "children" value
    static member inline content (value: ReactElement) = Interop.mkAttr "children" value