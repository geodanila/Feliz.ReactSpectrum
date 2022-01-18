namespace Pages

open Feliz.ReactSpectrum
open Feliz
open Fable.Core
open Fable.Core.JsInterop

[<AutoOpen>]
module GeneralDocs =

    [<ReactComponent>]
    let ButtonExample1 () =
        let code = """Spectrum.ActionButton [
    ActionButton.content "Press me"
    ActionButton.onPress (fun ev ->
        Browser.Dom.window.alert("I was clicked!")
    )
]"""
        Example "A simple button" code [] [
            Spectrum.ActionButton [
                ActionButton.content "Press me"
                ActionButton.onPress (fun ev ->
                    Browser.Dom.window.alert("I was clicked!")
                )
            ]
        ]

    [<ReactComponent>]
    let ActionButtonDocs () =
        let description = [
            Html.text "ActionButtons allow users to perform an action. They’re used for similar, task-based options within a workflow, and are ideal for interfaces where buttons aren’t meant to draw a lot of attention."
            Html.br []
            Html.br []
            Html.text " Check the official "
            Html.a [
                prop.children [ Html.text "documentation" ]
                prop.href "https://react-spectrum.adobe.com/react-spectrum/ActionButton.html"
            ]
            Html.text " for more details."
        ]

        ExampleGroup "ActionButton" description [
            ButtonExample1 ()
        ]

    [<ReactComponent>]
    let ButtonDocs () =
        Html.p "Button Docs..."

    [<ReactComponent>]
    let ToggleButtonDocs () =
        Html.p "ToggleButton Docs..."