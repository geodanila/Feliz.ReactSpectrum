namespace Pages

open Feliz.ReactSpectrum
open Feliz
open Fable.Core
open Fable.Core.JsInterop

[<AutoOpen>]
module IconsDocs =

    [<ReactComponent>]
    let WorkflowIconsDocs () =
        let description = [
            Html.text "Workflow icons are graphical metaphors or symbols that can be used to compliment existing experiences."
            Html.br []
            Html.br []
            Html.text " Check the official "
            Html.a [
                prop.children [ Html.text "documentation" ]
                prop.href "https://react-spectrum.adobe.com/react-spectrum/workflow-icons.html"
            ]
            Html.text " for more details."
        ]

        ExampleGroup "Workflow Icons" description [
        ]