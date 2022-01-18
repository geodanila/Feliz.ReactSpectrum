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
        Example "Using the Provider component" code [
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
    Provider.locale "en-US"
    Provider.scale Scale.Medium
    Provider.breakpoints(M = 640, L = 1024)
    Provider.children [
        Spectrum.View [
            View.height (DimValue.Size Size1000)
            View.backgroundColor (ResponsiveProp.make(
                baseValue = (BackgroundColorValue.Color Celery600),
                mediumValue = (BackgroundColorValue.Color Blue600),
                largeValue = (BackgroundColorValue.Color Magenta600))
            )
        ]
    ]
]"""
        Example "Overriding the default size breakpoints using the Provider component" code [
            Spectrum.Provider [
                Provider.defaultTheme
                Provider.colorScheme ColorScheme.Light
                Provider.locale "en-US"
                Provider.scale Scale.Medium
                Provider.breakpoints(M = 640, L = 1024)
                Provider.children [
                    Spectrum.View [
                        View.height (DimValue.Size Size1000)
                        View.backgroundColor (ResponsiveProp.make(
                            baseValue = (BackgroundColorValue.Color Celery600),
                            mediumValue = (BackgroundColorValue.Color Blue600),
                            largeValue = (BackgroundColorValue.Color Magenta600))
                        )
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
        ]