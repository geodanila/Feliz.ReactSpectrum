namespace Pages

open Feliz.ReactSpectrum
open Feliz
open Fable.Core
open Fable.Core.JsInterop

[<AutoOpen>]
module LayoutDocs =

    [<ReactComponent>]
    let FlexExample1 () =
        let code = """Spectrum.Flex [
    Flex.direction FlexDirection.Column
    Flex.width (DimValue.Size Size2000)
    Flex.gap (DimValue.Size Size100)
    Flex.children [
        Spectrum.View [
            View.backgroundColor (BackgroundColorValue.Color Celery600)
            View.height (DimValue.Size Size800)
        ]
        Spectrum.View [
            View.backgroundColor (BackgroundColorValue.Color Blue600)
            View.height (DimValue.Size Size800)
        ]
        Spectrum.View [
            View.backgroundColor (BackgroundColorValue.Color Magenta600)
            View.height (DimValue.Size Size800)
        ]
    ]
]"""
        let description = []

        Example "Vertical stack" code description [
            Spectrum.Flex [
                Flex.direction FlexDirection.Column
                Flex.width (DimValue.Size Size2000)
                Flex.gap (DimValue.Size Size100)
                Flex.children [
                    Spectrum.View [
                        View.backgroundColor (BackgroundColorValue.Color Celery600)
                        View.height (DimValue.Size Size800)
                    ]
                    Spectrum.View [
                        View.backgroundColor (BackgroundColorValue.Color Blue600)
                        View.height (DimValue.Size Size800)
                    ]
                    Spectrum.View [
                        View.backgroundColor (BackgroundColorValue.Color Magenta600)
                        View.height (DimValue.Size Size800)
                    ]
                ]
            ]
        ]

    [<ReactComponent>]
    let FlexExample2 () =
        let code = """Spectrum.Flex [
    Flex.direction FlexDirection.Row
    Flex.height (DimValue.Size Size800)
    Flex.gap (DimValue.Size Size100)
    Flex.children [
        Spectrum.View [
            View.backgroundColor (BackgroundColorValue.Color Celery600)
            View.width (DimValue.Size Size800)
        ]
        Spectrum.View [
            View.backgroundColor (BackgroundColorValue.Color Blue600)
            View.width (DimValue.Size Size800)
        ]
        Spectrum.View [
            View.backgroundColor (BackgroundColorValue.Color Magenta600)
            View.width (DimValue.Size Size800)
        ]
    ]
]"""
        let description = []

        Example "Horizontal stack" code description [
            Spectrum.Flex [
                Flex.direction FlexDirection.Row
                Flex.height (DimValue.Size Size800)
                Flex.gap (DimValue.Size Size100)
                Flex.children [
                    Spectrum.View [
                        View.backgroundColor (BackgroundColorValue.Color Celery600)
                        View.width (DimValue.Size Size800)
                    ]
                    Spectrum.View [
                        View.backgroundColor (BackgroundColorValue.Color Blue600)
                        View.width (DimValue.Size Size800)
                    ]
                    Spectrum.View [
                        View.backgroundColor (BackgroundColorValue.Color Magenta600)
                        View.width (DimValue.Size Size800)
                    ]
                ]
            ]
        ]

    [<ReactComponent>]
    let FlexExample3 () =
        let code = """Spectrum.Flex [
    Flex.direction FlexDirection.Column
    Flex.gap (DimValue.Size Size100)
    Flex.children [
        Spectrum.View [
            View.backgroundColor (BackgroundColorValue.Color Celery600)
            View.height (DimValue.Size Size800)
        ]
        Spectrum.Flex [
            Flex.direction FlexDirection.Row
            Flex.height (DimValue.Size Size3000)
            Flex.gap (DimValue.Size Size100)
            Flex.children [
                Spectrum.View [
                    View.backgroundColor (BackgroundColorValue.Color Indigo600)
                    View.width (DimValue.Size Size2000)
                ]
                Spectrum.View [
                    View.backgroundColor (BackgroundColorValue.Color Seafoam600)
                    View.flex true
                ]
            ]
        ]
        Spectrum.View [
            View.backgroundColor (BackgroundColorValue.Color Magenta600)
            View.height (DimValue.Size Size800)
        ]
    ]
]"""
        let description = [
            Html.p [
                prop.className "paragraph"
                prop.children [ Html.text "This example shows how you can nest flexboxes to create more complicated layouts. It also uses the flex prop on one of the children to expand it to fill the repaining space." ]
            ]
         ]

        Example "Nesting" code description [
            Spectrum.Flex [
                Flex.direction FlexDirection.Column
                Flex.gap (DimValue.Size Size100)
                Flex.children [
                    Spectrum.View [
                        View.backgroundColor (BackgroundColorValue.Color Celery600)
                        View.height (DimValue.Size Size800)
                    ]
                    Spectrum.Flex [
                        Flex.direction FlexDirection.Row
                        Flex.height (DimValue.Size Size3000)
                        Flex.gap (DimValue.Size Size100)
                        Flex.children [
                            Spectrum.View [
                                View.backgroundColor (BackgroundColorValue.Color Indigo600)
                                View.width (DimValue.Size Size2000)
                            ]
                            Spectrum.View [
                                View.backgroundColor (BackgroundColorValue.Color Seafoam600)
                                View.flex true
                            ]
                        ]
                    ]
                    Spectrum.View [
                        View.backgroundColor (BackgroundColorValue.Color Magenta600)
                        View.height (DimValue.Size Size800)
                    ]
                ]
            ]
        ]

    [<ReactComponent>]
    let FlexExample4 () =
        let colors = SharedModule.colorsList

        let code = """Spectrum.Flex [
    Flex.direction FlexDirection.Row
    Flex.gap (DimValue.Size Size100)
    Flex.wrap true
    Flex.children [
        for color in colors do
            Spectrum.View [
                View.key (unbox<string> color)
                View.backgroundColor (BackgroundColorValue.Color color)
                View.width (DimValue.Size Size800)
                View.height (DimValue.Size Size800)
            ]
    ]
]"""
        let description = [
            Html.p [
                prop.className "paragraph"
                prop.children [ Html.text "This example shows how to enable wrapping of items into multiple rows. Resize your browser window to see the items reflow." ]
            ]
        ]

        Example "Wrapping" code description [
            Spectrum.Flex [
                Flex.direction FlexDirection.Row
                Flex.gap (DimValue.Size Size100)
                Flex.wrap true
                Flex.children [
                    for color in colors do
                        Spectrum.View [
                            View.key (unbox<string> color)
                            View.backgroundColor (BackgroundColorValue.Color color)
                            View.width (DimValue.Size Size800)
                            View.height (DimValue.Size Size800)
                        ]
                ]
            ]
        ]

    [<ReactComponent>]
    let FlexDocs () =
        let description = [
            Html.text "A layout container using flexbox. Provides Spectrum dimension values, and supports the gap property to define consistent spacing between items."
            Html.br []
            Html.br []
            Html.text " Check the official "
            Html.a [
                prop.children [ Html.text "documentation" ]
                prop.href "https://react-spectrum.adobe.com/react-spectrum/Flex.html"
            ]
            Html.text " for more details."
        ]

        ExampleGroup "Flex" description [
            FlexExample1 ()
            FlexExample2 ()
            FlexExample3 ()
            FlexExample4 ()
        ]

    [<ReactComponent>]
    let GridDocs () =
        Html.p "Test"