namespace Pages

open Feliz.ReactSpectrum
open Feliz
open Fable.Core
open Fable.Core.JsInterop

[<AutoOpen>]
module CollectionsDocs =

    [<ReactComponent>]
    let ListBoxDocs () =
        let description = [
            Html.text "A list of options that can allow selection of one or more."
            Html.br []
            Html.br []
            Html.text " Check the official "
            Html.a [
                prop.children [ Html.text "documentation" ]
                prop.href "https://react-spectrum.adobe.com/react-spectrum/ListBox.html"
            ]
            Html.text " for more details."
        ]

        ExampleGroup "ListBox" description [
        ]

    [<ReactComponent>]
    let MenuDocs () =
        let description = [
            Html.text "Menus display a list of actions or options that a user can choose."
            Html.br []
            Html.br []
            Html.text " Check the official "
            Html.a [
                prop.children [ Html.text "documentation" ]
                prop.href "https://react-spectrum.adobe.com/react-spectrum/Menu.html"
            ]
            Html.text " for more details."
        ]

        ExampleGroup "Menu" description [
        ]

    [<ReactComponent>]
    let MenuTriggerDocs () =
        let description = [
            Html.text "The MenuTrigger serves as a wrapper around a Menu and its associated trigger, linking the Menu's open state with the trigger's press state."
            Html.br []
            Html.br []
            Html.text " Check the official "
            Html.a [
                prop.children [ Html.text "documentation" ]
                prop.href "https://react-spectrum.adobe.com/react-spectrum/MenuTrigger.html"
            ]
            Html.text " for more details."
        ]

        ExampleGroup "MenuTrigger" description [
        ]

    [<ReactComponent>]
    let TableViewDocs () =
        let description = [
            Html.text "Tables are containers for displaying information. They allow users to quickly scan, sort, compare, and take action on large amounts of data."
            Html.br []
            Html.br []
            Html.text " Check the official "
            Html.a [
                prop.children [ Html.text "documentation" ]
                prop.href "https://react-spectrum.adobe.com/react-spectrum/TableView.html"
            ]
            Html.text " for more details."
        ]

        ExampleGroup "TableView" description [
        ]