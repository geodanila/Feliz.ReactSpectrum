namespace Pages

open Feliz.ReactSpectrum
open Feliz
open Fable.Core
open Fable.Core.JsInterop

[<AutoOpen>]
module OverviewDocsModule =

    [<ReactComponent>]
    let OverviewDocs () =
        Html.p "Getting stared docs..."