namespace Pages

open Feliz.ReactSpectrum
open Feliz
open Fable.Core
open Fable.Core.JsInterop

[<AutoOpen>]
module APIDescriptionDocsModule =

    [<ReactComponent>]
    let APIDescriptionDocs () =
        Html.p "API Description Docs..."