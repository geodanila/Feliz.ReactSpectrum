namespace Pages

open Feliz.ReactSpectrum
open Feliz
open Fable.Core
open Fable.Core.JsInterop

[<AutoOpen>]
module ApplicationDocs =

    [<ReactComponent>]
    let ProviderExample1 () =
        let code = """Spectrum.Provider [
    Provider.defaultTheme
    Provider.colorScheme ColorScheme.Light
    Provider.locale "en-US"
    Provider.scale Scale.Medium
    Provider.children [
        Spectrum.ActionButton [
            ActionButton.content "Spectrum button"
        ]
    ]
]"""
        Example "Using the Provider component" code [] [
            Spectrum.Provider [
                Provider.defaultTheme
                Provider.colorScheme ColorScheme.Light
                Provider.locale "en-US"
                Provider.scale Scale.Medium
                Provider.children [
                    Spectrum.ActionButton [
                        ActionButton.content "Spectrum button"
                    ]
                ]
            ]
        ]

    [<ReactComponent>]
    let ProviderExample2 () =
        let code = """Spectrum.Provider [
    Provider.defaultTheme
    Provider.colorScheme ColorScheme.Light
    Provider.breakpoints(M = 640, L = 1024)
    Provider.children [
        Spectrum.View [
            View.height (DimValue.Size Size2000)
            View.backgroundColor (ResponsiveProp.make(
                base' = (BackgroundColorValue.Color Celery600),
                M = (BackgroundColorValue.Color Blue600),
                L = (BackgroundColorValue.Color Magenta600))
            )
        ]
    ]
]"""
        let description = [
            Html.p [
                prop.className "paragraph"
                prop.children [ Html.text "You can override the default screen breakpoints as follows. Resize the browser window to see the effects." ]
            ]
        ]

        Example "Provider screen breakpoints" code description [
            Spectrum.Provider [
                Provider.defaultTheme
                Provider.colorScheme ColorScheme.Light
                Provider.breakpoints(M = 640, L = 1024)
                Provider.children [
                    Spectrum.View [
                        View.height (DimValue.Size Size2000)
                        View.backgroundColor (ResponsiveProp.make(
                            base' = (BackgroundColorValue.Color Celery600),
                            M = (BackgroundColorValue.Color Blue600),
                            L = (BackgroundColorValue.Color Magenta600))
                        )
                    ]
                ]
            ]
        ]

    [<ReactComponent>]
    let ProviderExample3 () =
        let code = """Spectrum.Provider [
    Provider.defaultTheme
    Provider.colorScheme ColorScheme.Dark
    Provider.children [
        Spectrum.View [
            View.padding 20
            View.children [
                Spectrum.ActionButton [
                    ActionButton.content "Dark mode!"
                ]
            ]
        ]
    ]
]
"""
        Example "Color scheme" code [] [
            Spectrum.Provider [
                Provider.defaultTheme
                Provider.colorScheme ColorScheme.Dark
                Provider.children [
                    Spectrum.View [
                        View.padding 20
                        View.children [
                            Spectrum.ActionButton [
                                ActionButton.content "Dark mode!"
                            ]
                        ]
                    ]
                ]
            ]
        ]

    [<ReactComponent>]
    let ProviderExample4 () =
        let code = """Spectrum.Flex [
    Flex.direction FlexDirection.Column
    Flex.gap (DimValue.Size Size100)
    Flex.alignItems FlexAlignItems.Start
    Flex.children [
        Spectrum.Provider [
            Provider.isDisabled true
            Provider.children [
                Spectrum.RadioGroup [
                    RadioGroup.label "Favorite animal"
                    RadioGroup.children [
                        Spectrum.Radio [
                            Radio.value "dogs"
                            Radio.content "Dogs"
                        ]
                        Spectrum.Radio [
                            Radio.value "cats"
                            Radio.content "Cats"
                        ]
                        Spectrum.Radio [
                            Radio.value "horses"
                            Radio.content "Horses"
                        ]
                    ]
                ]
                Spectrum.Checkbox [
                    Checkbox.content "I agree"
                ]
                Spectrum.Button [
                    Button.variant ButtonVariant.Primary
                    Button.content "Submit"
                ]
            ]
        ]
    ]
]"""
        let description = [
            Html.p [
                prop.className "paragraph"
                prop.children [ Html.text "You can use a Provider component to define common properties for a group of components within. For example, you can disable multiple components as follows:" ]
            ]
        ]

        Example "Property groups" code description [
            Spectrum.Flex [
                Flex.direction FlexDirection.Column
                Flex.gap (DimValue.Size Size100)
                Flex.alignItems FlexAlignItems.Start
                Flex.children [
                    Spectrum.Provider [
                        Provider.isDisabled true
                        Provider.children [
                            Spectrum.RadioGroup [
                                RadioGroup.label "Favorite animal"
                                RadioGroup.children [
                                    Spectrum.Radio [
                                        Radio.value "dogs"
                                        Radio.content "Dogs"
                                    ]
                                    Spectrum.Radio [
                                        Radio.value "cats"
                                        Radio.content "Cats"
                                    ]
                                    Spectrum.Radio [
                                        Radio.value "horses"
                                        Radio.content "Horses"
                                    ]
                                ]
                            ]
                            Spectrum.Checkbox [
                                Checkbox.content "I agree"
                            ]
                            Spectrum.Button [
                                Button.variant ButtonVariant.Primary
                                Button.content "Submit"
                            ]
                        ]
                    ]
                ]
            ]
        ]

    [<ReactComponent>]
    let ProviderDocs () =
        let description = [
            Html.text "Provider is the container for all React Spectrum applications. It defines the theme, locale, and other application level settings, and can also be used to provide common properties to a group of components."
            Html.br []
            Html.br []
            Html.text " Check the official "
            Html.a [
                prop.children [ Html.text "documentation" ]
                prop.href "https://react-spectrum.adobe.com/react-spectrum/Provider.html"
            ]
            Html.text " for more details."
        ]

        ExampleGroup "Provider" description [
            ProviderExample1 ()
            ProviderExample2 ()
            ProviderExample3 ()
            ProviderExample4 ()
        ]