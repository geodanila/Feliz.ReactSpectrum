namespace Feliz.ReactSpectrum

open Feliz
open Fable.Core
open Fable.Core.JsInterop
open Fable.React

[<Erase>]
type Icon =
    static member inline size (value: IconSize) = Interop.mkAttr "size" value
    static member inline color (value: SemanticColor) = Interop.mkAttr "color" value