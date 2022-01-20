namespace Pages

open Feliz.ReactSpectrum
open Feliz
open Fable.Core
open Fable.Core.JsInterop

[<AutoOpen>]
module ContentDocs =

    [<ReactComponent>]
    let ContentExample1 () =
        let code = """Spectrum.Content "Content is king"
"""

        Example "Default example" code [] [
            Spectrum.Content "Content is king"
        ]

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
            ContentExample1 ()
        ]

    [<ReactComponent>]
    let DividerExample1 () =
        let code = """Spectrum.Flex [
    Flex.direction FlexDirection.Column
    Flex.gap (DimValue.Size Size125)
    Flex.children [
        Spectrum.Text "Content above"
        Spectrum.Divider ()
        Spectrum.Text "Content below"
    ]
]"""

        Example "Default example" code [] [
            Spectrum.Flex [
                Flex.direction FlexDirection.Column
                Flex.gap (DimValue.Size Size125)
                Flex.children [
                    Spectrum.Text "Content above"
                    Spectrum.Divider ()
                    Spectrum.Text "Content below"
                ]
            ]
        ]

    [<ReactComponent>]
    let DividerExample2 () =
        let code = """Spectrum.Flex [
    Flex.direction FlexDirection.Row
    Flex.gap (DimValue.Size Size125)
    Flex.children [
        Spectrum.Text "Content left"
        Spectrum.Divider [
            Divider.orientation Orientation.Vertical
        ]
        Spectrum.Text "Content right"
    ]
]"""

        Example "Vertical" code [] [
            Spectrum.Flex [
                Flex.direction FlexDirection.Row
                Flex.gap (DimValue.Size Size125)
                Flex.children [
                    Spectrum.Text "Content left"
                    Spectrum.Divider [
                        Divider.orientation Orientation.Vertical
                    ]
                    Spectrum.Text "Content right"
                ]
            ]
        ]

    [<ReactComponent>]
    let DividerExample3 () =
        let code = """Spectrum.Flex [
    Flex.direction FlexDirection.Column
    Flex.gap (DimValue.Size Size125)
    Flex.children [
        Spectrum.Text "Content above large Divider"
        Spectrum.Divider [ Divider.size DividerSize.L ]
        Spectrum.Text "Content above medium Divider"
        Spectrum.Divider [ Divider.size DividerSize.M ]
        Spectrum.Text "Content above small Divider"
        Spectrum.Divider [ Divider.size DividerSize.S ]
    ]
]"""

        Example "Size" code [] [
            Spectrum.Flex [
                Flex.direction FlexDirection.Column
                Flex.gap (DimValue.Size Size125)
                Flex.children [
                    Spectrum.Text "Content above large Divider"
                    Spectrum.Divider [ Divider.size DividerSize.L ]
                    Spectrum.Text "Content above medium Divider"
                    Spectrum.Divider [ Divider.size DividerSize.M ]
                    Spectrum.Text "Content above small Divider"
                    Spectrum.Divider [ Divider.size DividerSize.S ]
                ]
            ]
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
            DividerExample1 ()
            DividerExample2 ()
            DividerExample3 ()
        ]

    [<ReactComponent>]
    let FooterExample1 () =
        let code = """Spectrum.Footer "© All rights reserved."
"""

        Example "Default example" code [] [
            Spectrum.Footer "© All rights reserved."
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
            FooterExample1 ()
        ]

    [<ReactComponent>]
    let HeaderExample1 () =
        let code = """Spectrum.Header "Header example..."
"""

        Example "Default example" code [] [
            Spectrum.Header "Header example..."
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
            HeaderExample1 ()
        ]

    [<ReactComponent>]
    let HeadingExample1 () =
        let code = """Spectrum.Heading [
    Heading.level 4
    Heading.content "A level 4 heading..."
]"""

        Example "Default example" code [] [
            Spectrum.Heading [
                Heading.level 4
                Heading.content "A level 4 heading..."
            ]
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
            HeadingExample1 ()
        ]

    [<ReactComponent>]
    let IllustratedMessageExample1 () =
        let code = """Spectrum.IllustratedMessage [
    Spectrum.Illustrations.NoSearchResults []
    Spectrum.Heading "No matching results"
    Spectrum.Content "Try another search"
]"""

        Example "No search results" code [] [
            Spectrum.IllustratedMessage [
                Spectrum.Illustrations.NoSearchResults []
                Spectrum.Heading "No matching results"
                Spectrum.Content "Try another search"
            ]
        ]

    [<ReactComponent>]
    let IllustratedMessageExample2 () =
        let code = """Spectrum.IllustratedMessage [
    Spectrum.Illustrations.Unauthorized []
    Spectrum.Heading "Error 403: Access not allowed"
    Spectrum.Content "You do not have permission to access this page. Try checking the URL or visit a different page."
]"""

        Example "403 forbidden" code [] [
            Spectrum.IllustratedMessage [
                Spectrum.Illustrations.Unauthorized []
                Spectrum.Heading "Error 403: Access not allowed"
                Spectrum.Content "You do not have permission to access this page. Try checking the URL or visit a different page."
            ]
        ]

    [<ReactComponent>]
    let IllustratedMessageExample3 () =
        let code = """Spectrum.IllustratedMessage [
    Spectrum.Illustrations.NotFound []
    Spectrum.Heading "Error 404: Page not found"
    Spectrum.Content "This page isn't available. Try checking the URL or visit a different page."
]"""

        Example "404 not found" code [] [
            Spectrum.IllustratedMessage [
                Spectrum.Illustrations.NotFound []
                Spectrum.Heading "Error 404: Page not found"
                Spectrum.Content "This page isn't available. Try checking the URL or visit a different page."
            ]
        ]

    [<ReactComponent>]
    let IllustratedMessageExample4 () =
        let code = """Spectrum.IllustratedMessage [
    Spectrum.Illustrations.Error []
    Spectrum.Heading "Error 500: Internal server error"
    Spectrum.Content "Something went wrong. Please try again later."
]"""

        Example "500 internal server error" code [] [
            Spectrum.IllustratedMessage [
                Spectrum.Illustrations.Error []
                Spectrum.Heading "Error 500: Internal server error"
                Spectrum.Content "Something went wrong. Please try again later."
            ]
        ]

    [<ReactComponent>]
    let IllustratedMessageExample5 () =
        let code = """Spectrum.IllustratedMessage [
    Spectrum.Illustrations.Unavailable []
    Spectrum.Heading "Error 503: Service unavailble"
    Spectrum.Content "This page isn't working. Try a different page or try again later."
]"""

        Example "503 service unavailable" code [] [
            Spectrum.IllustratedMessage [
                Spectrum.Illustrations.Unavailable []
                Spectrum.Heading "Error 503: Service unavailble"
                Spectrum.Content "This page isn't working. Try a different page or try again later."
            ]
        ]

    [<ReactComponent>]
    let IllustratedMessageExample6 () =
        let code = """Spectrum.IllustratedMessage [
    Spectrum.Illustrations.Timeout []
    Spectrum.Heading "Error 504: Server timeout"
    Spectrum.Content "The server took too long. Please try again later."
]"""

        Example "504 server timeout" code [] [
            Spectrum.IllustratedMessage [
                Spectrum.Illustrations.Timeout []
                Spectrum.Heading "Error 504: Server timeout"
                Spectrum.Content "The server took too long. Please try again later."
            ]
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
            IllustratedMessageExample1 ()
            IllustratedMessageExample2 ()
            IllustratedMessageExample3 ()
            IllustratedMessageExample4 ()
            IllustratedMessageExample5 ()
            IllustratedMessageExample6 ()
        ]

    [<ReactComponent>]
    let ImageExample1 () =
        let code = """Spectrum.Image [
    Image.src "https://i.imgur.com/Z7AzH2c.png"
    Image.alt "Sky and roof"
]"""

        Example "Default example" code [] [
            Spectrum.Image [
                Image.src "https://i.imgur.com/Z7AzH2c.png"
                Image.alt "Sky and roof"
            ]
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
            ImageExample1 ()
        ]

    [<ReactComponent>]
    let KeyboardExample1 () =
        let code = """Spectrum.Keyboard "⌘V"
"""

        Example "Default example" code [] [
            Spectrum.Keyboard "⌘V"
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
            KeyboardExample1 ()
        ]

    [<ReactComponent>]
    let TextExample1 () =
        let code = """Spectrum.Text "A piece of text..."
"""

        Example "Default example" code [] [
            Spectrum.Text "A piece of text..."
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
            TextExample1 ()
        ]

    [<ReactComponent>]
    let ViewExample1 () =
        let code = """Spectrum.View [
    View.width 200
    View.borderColor BorderColorValue.Hover
    View.borderWidth BorderSizeValue.Thicker
    View.padding (DimValue.Size Size250)
    View.borderRadius BorderRadiusValue.Medium
    View.backgroundColor (
        ResponsiveProp.make(
            base' = BackgroundColorValue.Color StaticGreen400,
            S = BackgroundColorValue.LabelGray,
            M = BackgroundColorValue.Color StaticBlue300,
            L = BackgroundColorValue.Color StaticRed400
        )
    )
    View.children [
        Spectrum.ActionButton [
            ActionButton.content "Click me!"
        ]
    ]
]"""

        Example "Default example" code [] [
            Spectrum.View [
                View.width 200
                View.borderColor BorderColorValue.Hover
                View.borderWidth BorderSizeValue.Thicker
                View.padding (DimValue.Size Size250)
                View.borderRadius BorderRadiusValue.Medium
                View.backgroundColor (
                    ResponsiveProp.make(
                        base' = BackgroundColorValue.Color StaticGreen400,
                        S = BackgroundColorValue.LabelGray,
                        M = BackgroundColorValue.Color StaticBlue300,
                        L = BackgroundColorValue.Color StaticRed400
                    )
                )
                View.children [
                    Spectrum.ActionButton [
                        ActionButton.content "Click me!"
                    ]
                ]
            ]
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
            ViewExample1 ()
        ]

    [<ReactComponent>]
    let WellExample1 () =
        let code = """Spectrum.Well [
    Well.content "Better a little which is well done, than a great deal imperfectly."
]"""

        Example "Default example" code [] [
            Spectrum.Well [
                Well.content "Better a little which is well done, than a great deal imperfectly."
            ]
        ]

    [<ReactComponent>]
    let WellExample2 () =
        let code = """Spectrum.Well [
    Well.role "region"
    Well.ariaLabeledBy "well-label"
    Well.children [
        Html.h3 [
            prop.id "well-label"
            prop.children [ Html.text "Shipping Address" ]
        ]
        Html.p [
            Html.text "601 Townsend Street"
            Html.br []
            Html.text " San Francisco, CA 94103"
        ]
    ]
]"""

        Example "Another example" code [] [
            Spectrum.Well [
                Well.role "region"
                Well.ariaLabeledBy "well-label"
                Well.children [
                    Html.h3 [
                        prop.id "well-label"
                        prop.children [ Html.text "Shipping Address" ]
                    ]
                    Html.p [
                        Html.text "601 Townsend Street"
                        Html.br []
                        Html.text " San Francisco, CA 94103"
                    ]
                ]
            ]
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
            WellExample1 ()
            WellExample2 ()
        ]