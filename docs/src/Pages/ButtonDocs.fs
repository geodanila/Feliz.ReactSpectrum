namespace Pages

open Feliz.ReactSpectrum
open Feliz
open Fable.Core
open Fable.Core.JsInterop

[<AutoOpen>]
module ButtonDocsModule =

    [<ReactComponent>]
    let ButtonDocs () =
        Html.p "Button Docs..."