namespace Feliz.ReactSpectrum

open Feliz.ReactSpectrum
open Browser.Types
open Feliz
open Fable.Core
open Fable.React

[<Erase>]
type Meter =
    inherit BaseComponent
    static member inline variant (value: MeterVariant) = Interop.mkAttr "variant" value
    static member inline size (value: MeterSize) = Interop.mkAttr "size" value
    static member inline labelPosition (value: LabelPosition) = Interop.mkAttr "labelPosition" value
    static member inline label (value: string) = Interop.mkAttr "label" value
    static member inline label (value: ReactElement) = Interop.mkAttr "label" value
    static member inline showValueLabel (value: bool) = Interop.mkAttr "showValueLabel" value
    static member inline formatOptions (value: NumberFormatOptions) = Interop.mkAttr "formatOptions" value
    static member inline valueLabel (value: string) = Interop.mkAttr "valueLabel" value
    static member inline valueLabel (value: ReactElement) = Interop.mkAttr "valueLabel" value
    static member inline value (value: 'a) = Interop.mkAttr "value" value
    static member inline minValue (value: 'a) = Interop.mkAttr "minValue" value
    static member inline maxValue (value: 'a) = Interop.mkAttr "maxValue" value

[<Erase>]
type ProgressBar =
    inherit BaseComponent
    static member inline overBackgroundVariant = Interop.mkAttr "variant" "overBackground"
    static member inline isIndeterminate (value: bool) = Interop.mkAttr "isIndeterminate" value
    static member inline size (value: ProgressBarSize) = Interop.mkAttr "size" value
    static member inline labelPosition (value: LabelPosition) = Interop.mkAttr "labelPosition" value
    static member inline label (value: string) = Interop.mkAttr "label" value
    static member inline label (value: ReactElement) = Interop.mkAttr "label" value
    static member inline showValueLabel (value: bool) = Interop.mkAttr "showValueLabel" value
    static member inline formatOptions (value: NumberFormatOptions) = Interop.mkAttr "formatOptions" value
    static member inline valueLabel (value: string) = Interop.mkAttr "valueLabel" value
    static member inline valueLabel (value: ReactElement) = Interop.mkAttr "valueLabel" value
    static member inline value (value: 'a) = Interop.mkAttr "value" value
    static member inline minValue (value: 'a) = Interop.mkAttr "minValue" value
    static member inline maxValue (value: 'a) = Interop.mkAttr "maxValue" value

[<Erase>]
type ProgressCircle =
    inherit BaseComponent
    static member inline overBackgroundVariant = Interop.mkAttr "variant" "overBackground"
    static member inline isIndeterminate (value: bool) = Interop.mkAttr "isIndeterminate" value
    static member inline size (value: ProgressCircleSize) = Interop.mkAttr "size" value
    static member inline value (value: 'a) = Interop.mkAttr "value" value
    static member inline minValue (value: 'a) = Interop.mkAttr "minValue" value
    static member inline maxValue (value: 'a) = Interop.mkAttr "maxValue" value

[<Erase>]
type StatusLight =
    inherit BaseComponent
    static member inline children (xs: seq<ReactElement>) = prop.children(xs)
    static member inline content (value: string) = Interop.mkAttr "children" value
    static member inline content (value: ReactElement) = Interop.mkAttr "children" value
    static member inline variant (value: StatusLightVariant) = Interop.mkAttr "variant" value
    static member inline isDisabled (value: bool) = Interop.mkAttr "isDisabled" value