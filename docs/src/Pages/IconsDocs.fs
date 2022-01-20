namespace Pages

open Feliz.ReactSpectrum
open Feliz
open Fable.Core
open Fable.Core.JsInterop

[<AutoOpen>]
module IconsDocs =

    [<ReactComponent>]
    let IconsExample1 () =
        let code = """Spectrum.Flex [
    Flex.gap (DimValue.Size Size100)
    Flex.children [
        Spectrum.Icon.Beaker [
            prop.ariaLabel "XXS Beaker"
            Icon.size IconSize.XXS
        ]
        Spectrum.Icon.Beaker [
            prop.ariaLabel "XS Beaker"
            Icon.size IconSize.XS
        ]
        Spectrum.Icon.Beaker [
            prop.ariaLabel "S Beaker"
            Icon.size IconSize.S
        ]
        Spectrum.Icon.Beaker [
            prop.ariaLabel "M Beaker"
            Icon.size IconSize.M
        ]
        Spectrum.Icon.Beaker [
            prop.ariaLabel "L Beaker"
            Icon.size IconSize.L
        ]
        Spectrum.Icon.Beaker [
            prop.ariaLabel "XL Beaker"
            Icon.size IconSize.XL
        ]
        Spectrum.Icon.Beaker [
            prop.ariaLabel "XXL Beaker"
            Icon.size IconSize.XXL
        ]
    ]
]"""

        Example "Icon size" code [] [
            Spectrum.Flex [
                Flex.gap (DimValue.Size Size100)
                Flex.children [
                    Spectrum.Icon.Beaker [
                        prop.ariaLabel "XXS Beaker"
                        Icon.size IconSize.XXS
                    ]
                    Spectrum.Icon.Beaker [
                        prop.ariaLabel "XS Beaker"
                        Icon.size IconSize.XS
                    ]
                    Spectrum.Icon.Beaker [
                        prop.ariaLabel "S Beaker"
                        Icon.size IconSize.S
                    ]
                    Spectrum.Icon.Beaker [
                        prop.ariaLabel "M Beaker"
                        Icon.size IconSize.M
                    ]
                    Spectrum.Icon.Beaker [
                        prop.ariaLabel "L Beaker"
                        Icon.size IconSize.L
                    ]
                    Spectrum.Icon.Beaker [
                        prop.ariaLabel "XL Beaker"
                        Icon.size IconSize.XL
                    ]
                    Spectrum.Icon.Beaker [
                        prop.ariaLabel "XXL Beaker"
                        Icon.size IconSize.XXL
                    ]
                ]
            ]
        ]

    [<ReactComponent>]
    let IconsExample2 () =
        let code = """Spectrum.Flex [
    Flex.gap (DimValue.Size Size100)
    Flex.children [
        Spectrum.Icon.Alert [
            prop.ariaLabel "Default Alert"
        ]
        Spectrum.Icon.Alert [
            prop.ariaLabel "Negative Alert"
            Icon.color SemanticColor.Negative
        ]
        Spectrum.Icon.Alert [
            prop.ariaLabel "Notification Alert"
            Icon.color SemanticColor.Notice
        ]
        Spectrum.Icon.Alert [
            prop.ariaLabel "Positive Alert"
            Icon.color SemanticColor.Positive
        ]
        Spectrum.Icon.Alert [
            prop.ariaLabel "Informative Alert"
            Icon.color SemanticColor.Informative
        ]
    ]
]"""

        Example "Coloring" code [] [
            Spectrum.Flex [
                Flex.gap (DimValue.Size Size100)
                Flex.children [
                    Spectrum.Icon.Alert [
                        prop.ariaLabel "Default Alert"
                    ]
                    Spectrum.Icon.Alert [
                        prop.ariaLabel "Negative Alert"
                        Icon.color SemanticColor.Negative
                    ]
                    Spectrum.Icon.Alert [
                        prop.ariaLabel "Notification Alert"
                        Icon.color SemanticColor.Notice
                    ]
                    Spectrum.Icon.Alert [
                        prop.ariaLabel "Positive Alert"
                        Icon.color SemanticColor.Positive
                    ]
                    Spectrum.Icon.Alert [
                        prop.ariaLabel "Informative Alert"
                        Icon.color SemanticColor.Informative
                    ]
                ]
            ]
        ]

    [<ReactComponent>]
    let WorkflowIconsDocs () =
        let description = [
            Html.text "Workflow icons are graphical metaphors or symbols that can be used to compliment existing experiences."
            Html.br []
            Html.br []
            Html.text " Check the official "
            Html.a [
                prop.children [ Html.text "documentation" ]
                prop.href "https://react-spectrum.adobe.com/react-spectrum/workflow-icons.html"
            ]
            Html.text " for more details."
        ]

        ExampleGroup "Workflow Icons" description [
            IconsExample1 ()
            IconsExample2 ()
        ]