namespace Feliz.ReactSpectrum

open Feliz.ReactSpectrum
open Browser.Types
open Feliz
open Fable.Core
open Fable.React

[<Erase>]
type RangeSlider =
    inherit BaseComponent
    static member inline formatOptions (value: NumberFormatOptions) = Interop.mkAttr "formatOptions" value
    static member inline labelPosition (value: LabelPosition) = Interop.mkAttr "labelPosition" value
    static member inline showValueLabel (value: bool) = Interop.mkAttr "showValueLabel" value
    static member inline getValueLabel (handler: {| start: 'a; ``end``: 'a |} -> string) = Interop.mkAttr "getValueLabel" handler
    static member inline orientation (value: Orientation) = Interop.mkAttr "orientation" value
    static member inline isDisabled (value: bool) = Interop.mkAttr "isDisabled" value
    static member inline minValue (value: 'a) = Interop.mkAttr "minValue" value
    static member inline maxValue (value: 'a) = Interop.mkAttr "maxValue" value
    static member inline step (value: 'a) = Interop.mkAttr "step" value
    static member inline value (value: {| start: 'a; ``end``: 'a |}) = Interop.mkAttr "value" value
    static member inline defaultValue (value: {| start: 'a; ``end``: 'a |}) = Interop.mkAttr "defaultValue" value
    static member inline label (value: string) = Interop.mkAttr "label" value
    static member inline label (value: ReactElement) = Interop.mkAttr "label" value

    static member inline onChange (handler: {| start: 'a; ``end``: 'a |} -> unit) = Interop.mkAttr "onChange" handler
    static member inline onChangeEnd (handler: {| start: 'a; ``end``: 'a |} -> unit) = Interop.mkAttr "onChangeEnd" handler

[<Erase>]
type Slider =
    inherit BaseComponent
    static member inline isFilled (value: bool) = Interop.mkAttr "isFilled" value
    static member inline fillOffset (value: int) = Interop.mkAttr "fillOffset" value
    static member inline trackGradient (xs: seq<string>) = Interop.mkAttr "trackGradient" (xs |> Array.ofSeq)
    static member inline formatOptions (value: NumberFormatOptions) = Interop.mkAttr "formatOptions" value
    static member inline labelPosition (value: LabelPosition) = Interop.mkAttr "labelPosition" value
    static member inline showValueLabel (value: bool) = Interop.mkAttr "showValueLabel" value
    static member inline getValueLabel (handler: 'a -> string) = Interop.mkAttr "getValueLabel" handler
    static member inline orientation (value: Orientation) = Interop.mkAttr "orientation" value
    static member inline isDisabled (value: bool) = Interop.mkAttr "isDisabled" value
    static member inline minValue (value: 'a) = Interop.mkAttr "minValue" value
    static member inline maxValue (value: 'a) = Interop.mkAttr "maxValue" value
    static member inline step (value: 'a) = Interop.mkAttr "step" value
    static member inline value (value: 'a) = Interop.mkAttr "value" value
    static member inline defaultValue (value: 'a) = Interop.mkAttr "defaultValue" value
    static member inline label (value: string) = Interop.mkAttr "label" value
    static member inline label (value: ReactElement) = Interop.mkAttr "label" value

    static member inline onChange (handler: 'a -> unit) = Interop.mkAttr "onChange" handler
    static member inline onChangeEnd (handler: 'a -> unit) = Interop.mkAttr "onChangeEnd" handler