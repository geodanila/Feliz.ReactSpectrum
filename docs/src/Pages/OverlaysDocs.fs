namespace Pages

open Feliz.ReactSpectrum
open Feliz
open Fable.Core
open Fable.Core.JsInterop

[<AutoOpen>]
module OverlayDocs =

    [<ReactComponent>]
    let AlertDialogDocs () =
        let description = [
            Html.text "AlertDialogs are a specific type of Dialog. They display important information that users need to acknowledge."
            Html.br []
            Html.br []
            Html.text " Check the official "
            Html.a [
                prop.children [ Html.text "documentation" ]
                prop.href "https://react-spectrum.adobe.com/react-spectrum/AlertDialog.html"
            ]
            Html.text " for more details."
        ]

        ExampleGroup "AlertDialog" description [
        ]

    [<ReactComponent>]
    let DialogDocs () =
        let description = [
            Html.text "Dialogs are windows containing contextual information, tasks, or workflows that appear over the user interface. Depending on the kind of Dialog, further interactions may be blocked until the Dialog is acknowledged."
            Html.br []
            Html.br []
            Html.text " Check the official "
            Html.a [
                prop.children [ Html.text "documentation" ]
                prop.href "https://react-spectrum.adobe.com/react-spectrum/Dialog.html"
            ]
            Html.text " for more details."
        ]

        ExampleGroup "Dialog" description [
        ]

    [<ReactComponent>]
    let DialogContainerDocs () =
        let description = [
            Html.text "A DialogContainer accepts a single Dialog as a child, and manages showing and hiding it in a modal. Useful in cases where there is no trigger element or when the trigger unmounts while the dialog is open."
            Html.br []
            Html.br []
            Html.text " Check the official "
            Html.a [
                prop.children [ Html.text "documentation" ]
                prop.href "https://react-spectrum.adobe.com/react-spectrum/DialogContainer.html"
            ]
            Html.text " for more details."
        ]

        ExampleGroup "DialogContainer" description [
        ]

    [<ReactComponent>]
    let DialogTriggerDocs () =
        let description = [
            Html.text "DialogTrigger serves as a wrapper around a Dialog and its associated trigger, linking the Dialog's open state with the trigger's press state. Additionally, it allows you to customize the type and positioning of the Dialog."
            Html.br []
            Html.br []
            Html.text " Check the official "
            Html.a [
                prop.children [ Html.text "documentation" ]
                prop.href "https://react-spectrum.adobe.com/react-spectrum/DialogTrigger.html"
            ]
            Html.text " for more details."
        ]

        ExampleGroup "DialogTrigger" description [
        ]

    [<ReactComponent>]
    let TooltipDocs () =
        let description = [
            Html.text "Display container for Tooltip content. Has a directional arrow dependent on its placement."
            Html.br []
            Html.br []
            Html.text " Check the official "
            Html.a [
                prop.children [ Html.text "documentation" ]
                prop.href "https://react-spectrum.adobe.com/react-spectrum/Tooltip.html"
            ]
            Html.text " for more details."
        ]

        ExampleGroup "Tooltip" description [
        ]