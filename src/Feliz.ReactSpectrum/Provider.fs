namespace Feliz.ReactSpectrum

open Feliz
open Fable.Core
open Fable.Core.JsInterop
open Fable.React
open Feliz.ReactSpectrum

[<Erase>]
type Provider =
    inherit BaseComponent
    static member inline defaultTheme =
        let theme = import "defaultTheme" "@adobe/react-spectrum"
        Interop.mkAttr "theme" theme

    static member inline theme value = Interop.mkAttr "theme" value
    static member inline colorScheme (value: ColorScheme) = Interop.mkAttr "colorScheme" value
    static member inline defaultColorScheme (value: ColorScheme) = Interop.mkAttr "defaultColorScheme" value
    static member inline children (elements: seq<ReactElement>) = prop.children(elements)
    static member inline isEmphasized (value: bool) = Interop.mkAttr "isEmphasized" value
    static member inline isQuiet (value: bool) = Interop.mkAttr "isQuiet" value
    static member inline isDisabled (value: bool) = Interop.mkAttr "isDisabled" value
    static member inline isRequired (value: bool) = Interop.mkAttr "isRequired" value
    static member inline isReadOnly (value: bool) = Interop.mkAttr "isReadOnly" value
    static member inline validateState (value: ValidationState) = Interop.mkAttr "validationState" value
    static member inline locale (value: string) = Interop.mkAttr "locale" value
    static member inline scale (value: Scale) = Interop.mkAttr "scale" value
    static member inline breakpoints (?S: int, ?M: int, ?L: int) = Interop.mkAttr "breakpoints" {| S = S; M = M; L = L |}