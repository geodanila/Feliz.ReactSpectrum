namespace Pages

open Feliz.ReactSpectrum
open Feliz
open Fable.Core
open Fable.Core.JsInterop

[<AutoOpen>]
module NavigationDocs =

    [<ReactComponent>]
    let BreadcrumbsDocs () =
        let description = [
            Html.text "Breadcrumbs show hierarchy and navigational context for a user’s location within an application."
            Html.br []
            Html.br []
            Html.text " Check the official "
            Html.a [
                prop.children [ Html.text "documentation" ]
                prop.href "https://react-spectrum.adobe.com/react-spectrum/Breadcrumbs.html"
            ]
            Html.text " for more details."
        ]

        ExampleGroup "Breadcrumbs" description [
        ]

    [<ReactComponent>]
    let LinkDocs () =
        let description = [
            Html.text "Links allow users to navigate to a different location. They can be presented inline inside a paragraph or as standalone text."
            Html.br []
            Html.br []
            Html.text " Check the official "
            Html.a [
                prop.children [ Html.text "documentation" ]
                prop.href "https://react-spectrum.adobe.com/react-spectrum/Link.html"
            ]
            Html.text " for more details."
        ]

        ExampleGroup "Link" description [
        ]

    [<ReactComponent>]
    let TabsDocs () =
        let description = [
            Html.text "Tabs organize content into multiple sections and allow users to navigate between them. The content under the set of tabs should be related and form a coherent unit."
            Html.br []
            Html.br []
            Html.text " Check the official "
            Html.a [
                prop.children [ Html.text "documentation" ]
                prop.href "https://react-spectrum.adobe.com/react-spectrum/Tabs.html"
            ]
            Html.text " for more details."
        ]

        ExampleGroup "Tabs" description [
        ]