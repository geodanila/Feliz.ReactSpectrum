namespace Pages

open Feliz.ReactSpectrum
open Feliz
open Fable.Core
open Fable.Core.JsInterop

[<AutoOpen>]
module ContentDocs =

    [<ReactComponent>]
    let ContentDocs () =
        let description = [
            Html.text "Content represents the primary content within a Spectrum container."
            Html.br []
            Html.br []
            Html.text " Check the official "
            Html.a [
                prop.children [ Html.text "documentation" ]
                prop.href "https://react-spectrum.adobe.com/react-spectrum/Content.html"
            ]
            Html.text " for more details."
        ]

        ExampleGroup "Content" description [
        ]

    [<ReactComponent>]
    let DividerDocs () =
        let description = [
            Html.text "Dividers bring clarity to a layout by grouping and dividing content in close proximity. They can also be used to establish rhythm and hierarchy."
            Html.br []
            Html.br []
            Html.text " Check the official "
            Html.a [
                prop.children [ Html.text "documentation" ]
                prop.href "https://react-spectrum.adobe.com/react-spectrum/Divider.html"
            ]
            Html.text " for more details."
        ]

        ExampleGroup "Divider" description [
        ]

    [<ReactComponent>]
    let FooterDocs () =
        let description = [
            Html.text "Footer represents a footer within a Spectrum container."
            Html.br []
            Html.br []
            Html.text " Check the official "
            Html.a [
                prop.children [ Html.text "documentation" ]
                prop.href "https://react-spectrum.adobe.com/react-spectrum/Footer.html"
            ]
            Html.text " for more details."
        ]

        ExampleGroup "Footer" description [
        ]

    [<ReactComponent>]
    let HeaderDocs () =
        let description = [
            Html.text "Header represents a header within a Spectrum container."
            Html.br []
            Html.br []
            Html.text " Check the official "
            Html.a [
                prop.children [ Html.text "documentation" ]
                prop.href "https://react-spectrum.adobe.com/react-spectrum/Header.html"
            ]
            Html.text " for more details."
        ]

        ExampleGroup "Header" description [
        ]

    [<ReactComponent>]
    let HeadingDocs () =
        let description = [
            Html.text "Heading is used to create various levels of typographic hierarchies."
            Html.br []
            Html.br []
            Html.text " Check the official "
            Html.a [
                prop.children [ Html.text "documentation" ]
                prop.href "https://react-spectrum.adobe.com/react-spectrum/Heading.html"
            ]
            Html.text " for more details."
        ]

        ExampleGroup "Heading" description [
        ]

    [<ReactComponent>]
    let IllustratedMessageDocs () =
        let description = [
            Html.text "An IllustratedMessage displays an illustration and a message, usually for an empty state or an error page."
            Html.br []
            Html.br []
            Html.text " Check the official "
            Html.a [
                prop.children [ Html.text "documentation" ]
                prop.href "https://react-spectrum.adobe.com/react-spectrum/IllustratedMessage.html"
            ]
            Html.text " for more details."
        ]

        ExampleGroup "IllustratedMessage" description [
        ]

    [<ReactComponent>]
    let ImageDocs () =
        let description = [
            Html.text "Image is used to insert and display an image within a component."
            Html.br []
            Html.br []
            Html.text " Check the official "
            Html.a [
                prop.children [ Html.text "documentation" ]
                prop.href "https://react-spectrum.adobe.com/react-spectrum/Image.html"
            ]
            Html.text " for more details."
        ]

        ExampleGroup "Image" description [
        ]

    [<ReactComponent>]
    let KeyboardDocs () =
        let description = [
            Html.text "Keyboard represents text that specifies a keyboard command."
            Html.br []
            Html.br []
            Html.text " Check the official "
            Html.a [
                prop.children [ Html.text "documentation" ]
                prop.href "https://react-spectrum.adobe.com/react-spectrum/Keyboard.html"
            ]
            Html.text " for more details."
        ]

        ExampleGroup "Keyboard" description [
        ]

    [<ReactComponent>]
    let TextDocs () =
        let description = [
            Html.text "Text represents text with no specific semantic meaning."
            Html.br []
            Html.br []
            Html.text " Check the official "
            Html.a [
                prop.children [ Html.text "documentation" ]
                prop.href "https://react-spectrum.adobe.com/react-spectrum/Text.html"
            ]
            Html.text " for more details."
        ]

        ExampleGroup "Text" description [
        ]

    [<ReactComponent>]
    let ViewDocs () =
        let description = [
            Html.text "View is a general purpose container with no specific semantics that can be used for custom styling purposes. It supports Spectrum style props to ensure consistency with other Spectrum components."
            Html.br []
            Html.br []
            Html.text " Check the official "
            Html.a [
                prop.children [ Html.text "documentation" ]
                prop.href "https://react-spectrum.adobe.com/react-spectrum/View.html"
            ]
            Html.text " for more details."
        ]

        ExampleGroup "View" description [
        ]

    [<ReactComponent>]
    let WellDocs () =
        let description = [
            Html.text "A Well is a content container that displays non-editable content separate from other content on the screen. Often this is used to display preformatted text, such as code/markup examples on a documentation page."
            Html.br []
            Html.br []
            Html.text " Check the official "
            Html.a [
                prop.children [ Html.text "documentation" ]
                prop.href "https://react-spectrum.adobe.com/react-spectrum/Well.html"
            ]
            Html.text " for more details."
        ]

        ExampleGroup "Well" description [
        ]