namespace Pages

open Feliz.ReactSpectrum
open Feliz
open Fable.Core
open Fable.Core.JsInterop

[<AutoOpen>]
module PickersDocs =

    [<ReactComponent>]
    let ComboBoxDocs () =
        let description = [
            Html.text "ComboBoxes combine a text entry with a picker menu, allowing users to filter longer lists to only the selections matching a query."
            Html.br []
            Html.br []
            Html.text " Check the official "
            Html.a [
                prop.children [ Html.text "documentation" ]
                prop.href "https://react-spectrum.adobe.com/react-spectrum/ComboBox.html"
            ]
            Html.text " for more details."
        ]

        ExampleGroup "ComboBox" description [
        ]

    [<ReactComponent>]
    let PickerDocs () =
        let description = [
            Html.text "Pickers allow users to choose a single option from a collapsible list of options when space is limited."
            Html.br []
            Html.br []
            Html.text " Check the official "
            Html.a [
                prop.children [ Html.text "documentation" ]
                prop.href "https://react-spectrum.adobe.com/react-spectrum/Picker.html"
            ]
            Html.text " for more details."
        ]

        ExampleGroup "Picker" description [
        ]