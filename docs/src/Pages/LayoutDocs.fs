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
    let FlexExample5 () =
        let code = """Spectrum.Flex [
    Flex.direction FlexDirection.Column
    Flex.gap (DimValue.Size Size100)
    Flex.alignItems FlexAlignItems.Center
    Flex.children [
        Spectrum.View [
            View.backgroundColor (BackgroundColorValue.Color Celery600)
            View.width (DimValue.Size Size800)
            View.height (DimValue.Size Size800)
        ]
        Spectrum.View [
            View.backgroundColor (BackgroundColorValue.Color Blue600)
            View.width (DimValue.Size Size2000)
            View.height (DimValue.Size Size800)
        ]
        Spectrum.View [
            View.backgroundColor (BackgroundColorValue.Color Magenta600)
            View.width (DimValue.Size Size800)
            View.height (DimValue.Size Size800)
        ]
    ]
]"""
        let description = []

        Example "Alignment" code description [
            Spectrum.Flex [
                Flex.direction FlexDirection.Column
                Flex.gap (DimValue.Size Size100)
                Flex.alignItems FlexAlignItems.Center
                Flex.children [
                    Spectrum.View [
                        View.backgroundColor (BackgroundColorValue.Color Celery600)
                        View.width (DimValue.Size Size800)
                        View.height (DimValue.Size Size800)
                    ]
                    Spectrum.View [
                        View.backgroundColor (BackgroundColorValue.Color Blue600)
                        View.width (DimValue.Size Size2000)
                        View.height (DimValue.Size Size800)
                    ]
                    Spectrum.View [
                        View.backgroundColor (BackgroundColorValue.Color Magenta600)
                        View.width (DimValue.Size Size800)
                        View.height (DimValue.Size Size800)
                    ]
                ]
            ]
        ]

    [<ReactComponent>]
    let FlexExample6 () =
        let code = """Spectrum.View [
    View.height (DimValue.Size Size3000)
    View.borderWidth BorderSizeValue.Thin
    View.borderColor BorderColorValue.Dark
    View.children [
        Spectrum.Flex [
            Flex.direction FlexDirection.Column
            Flex.gap (DimValue.Size Size100)
            Flex.justifyContent FlexJustifyContent.Center
            Flex.height "100%"
            Flex.children [
                Spectrum.View [
                    View.backgroundColor (BackgroundColorValue.Color Celery600)
                    View.width (DimValue.Size Size800)
                    View.height (DimValue.Size Size800)
                ]
                Spectrum.View [
                    View.backgroundColor (BackgroundColorValue.Color Blue600)
                    View.width (DimValue.Size Size2000)
                    View.height (DimValue.Size Size800)
                ]
                Spectrum.View [
                    View.backgroundColor (BackgroundColorValue.Color Magenta600)
                    View.width (DimValue.Size Size800)
                    View.height (DimValue.Size Size800)
                ]
            ]
        ]
    ]
]"""
        let description = []

        Example "Justification" code description [
            Spectrum.View [
                View.height (DimValue.Size Size3000)
                View.borderWidth BorderSizeValue.Thin
                View.borderColor BorderColorValue.Dark
                View.children [
                    Spectrum.Flex [
                        Flex.direction FlexDirection.Column
                        Flex.gap (DimValue.Size Size100)
                        Flex.justifyContent FlexJustifyContent.Center
                        Flex.height "100%"
                        Flex.children [
                            Spectrum.View [
                                View.backgroundColor (BackgroundColorValue.Color Celery600)
                                View.width (DimValue.Size Size800)
                                View.height (DimValue.Size Size800)
                            ]
                            Spectrum.View [
                                View.backgroundColor (BackgroundColorValue.Color Blue600)
                                View.width (DimValue.Size Size2000)
                                View.height (DimValue.Size Size800)
                            ]
                            Spectrum.View [
                                View.backgroundColor (BackgroundColorValue.Color Magenta600)
                                View.width (DimValue.Size Size800)
                                View.height (DimValue.Size Size800)
                            ]
                        ]
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
            FlexExample5 ()
            FlexExample6 ()
        ]

    [<ReactComponent>]
    let GridExample1 () =
        let code = """Spectrum.Grid [
    Grid.areas [ "header header"; "sidebar content"; "footer footer" ]
    Grid.columns [ "1fr"; "3fr" ]
    Grid.rows [
        DimValue.Size Size1000
        DimValue.String "auto"
        DimValue.Size Size1000
    ]
    Grid.height (DimValue.Size Size6000)
    Grid.width "80%"
    Grid.gap (DimValue.Size Size100)
    Grid.children [
        Spectrum.View [
            View.backgroundColor (BackgroundColorValue.Color Celery600)
            View.gridArea "header"
        ]
        Spectrum.View [
            View.backgroundColor (BackgroundColorValue.Color Blue600)
            View.gridArea "sidebar"
        ]
        Spectrum.View [
            View.backgroundColor (BackgroundColorValue.Color Purple600)
            View.gridArea "content"
        ]
        Spectrum.View [
            View.backgroundColor (BackgroundColorValue.Color Magenta600)
            View.gridArea "footer"
        ]
    ]
]"""
        let description = []

        Example "Explicit grid" code description [
            Spectrum.Grid [
                Grid.areas [ "header header"; "sidebar content"; "footer footer" ]
                Grid.columns [ "1fr"; "3fr" ]
                Grid.rows [
                    DimValue.Size Size1000
                    DimValue.String "auto"
                    DimValue.Size Size1000
                ]
                Grid.height (DimValue.Size Size6000)
                Grid.width "80%"
                Grid.gap (DimValue.Size Size100)
                Grid.children [
                    Spectrum.View [
                        View.backgroundColor (BackgroundColorValue.Color Celery600)
                        View.gridArea "header"
                    ]
                    Spectrum.View [
                        View.backgroundColor (BackgroundColorValue.Color Blue600)
                        View.gridArea "sidebar"
                    ]
                    Spectrum.View [
                        View.backgroundColor (BackgroundColorValue.Color Purple600)
                        View.gridArea "content"
                    ]
                    Spectrum.View [
                        View.backgroundColor (BackgroundColorValue.Color Magenta600)
                        View.gridArea "footer"
                    ]
                ]
            ]
        ]

    [<ReactComponent>]
    let GridExample2 () =
        let code = """Spectrum.Grid [
    Grid.height (DimValue.Size Size6000)
    Grid.width "100%"
    Grid.columns (Spectrum.repeat(AutoFit, DimValue.Size Size800))
    Grid.autoRows (DimValue.Size Size800)
    Grid.justifyContent GridJustifyContent.Center
    Grid.gap (DimValue.Size Size200)
    Grid.children [
        for color in colors do
            Spectrum.View [
                View.key (unbox<string> color)
                View.backgroundColor (BackgroundColorValue.Color color)
            ]
    ]
]"""
        let description = []

        let colors = SharedModule.colorsList

        Example "Implicit grid" code description [
            Spectrum.Grid [
                Grid.height (DimValue.Size Size6000)
                Grid.width "100%"
                Grid.columns (Spectrum.repeat(AutoFit, DimValue.Size Size800))
                Grid.autoRows (DimValue.Size Size800)
                Grid.justifyContent GridJustifyContent.Center
                Grid.gap (DimValue.Size Size200)
                Grid.children [
                    for color in colors do
                        Spectrum.View [
                            View.key (unbox<string> color)
                            View.backgroundColor (BackgroundColorValue.Color color)
                        ]
                ]
            ]
        ]

    [<ReactComponent>]
    let GridDocs () =
        let description = [
            Html.text "A layout container using CSS grid. Supports Spectrum dimensions as values to ensure consistent and adaptive sizing and spacing."
            Html.br []
            Html.br []
            Html.text " Check the official "
            Html.a [
                prop.children [ Html.text "documentation" ]
                prop.href "https://react-spectrum.adobe.com/react-spectrum/Grid.html"
            ]
            Html.text " for more details."
        ]

        ExampleGroup "Grid" description [
            GridExample1 ()
            GridExample2 ()
        ]