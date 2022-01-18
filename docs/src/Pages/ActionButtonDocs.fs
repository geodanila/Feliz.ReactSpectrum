namespace Pages

open Feliz.ReactSpectrum
open Feliz
open Fable.Core
open Fable.Core.JsInterop

[<AutoOpen>]
module ActionButtonDocsModule =

    [<ReactComponent>]
    let ButtonExample1 () =
        let code = """
Spectrum.ActionButton [
    ActionButton.content "Press me"
    ActionButton.onPress (fun ev ->
        Browser.Dom.window.alert("I was clicked!")
    )
]
        """
        Example "A simple button" code [
            Spectrum.ActionButton [
                ActionButton.content "Press me"
                ActionButton.onPress (fun ev ->
                    Browser.Dom.window.alert("I was clicked!")
                )
            ]
        ]

    [<ReactComponent>]
    let ActionButtonDocs () =
        let description = "ActionButtons allow users to perform an action. They’re used for similar, task-based options within a workflow, and are ideal for interfaces where buttons aren’t meant to draw a lot of attention."
        ExampleGroup "ActionButton" description [
            ButtonExample1 ()
        ]