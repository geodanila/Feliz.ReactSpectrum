namespace Pages

open Feliz.ReactSpectrum
open Feliz
open Fable.Core
open Fable.Core.JsInterop

[<AutoOpen>]
module SliderDocs =

    [<ReactComponent>]
    let RangeSliderExample1 () =
        let code = """Spectrum.RangeSlider [
    RangeSlider.label "Range"
    RangeSlider.defaultValue {| start = 12; ``end`` = 36 |}
]"""

        Example "Default example" code [] [
            Spectrum.RangeSlider [
                RangeSlider.label "Range"
                RangeSlider.defaultValue {| start = 12; ``end`` = 36 |}
            ]
        ]

    [<ReactComponent>]
    let RangeSliderExample2 () =
        let code = """let value, setValue = React.useState({| start = 25; ``end`` = 75 |})
Spectrum.Flex [
    Flex.gap (DimValue.Size Size150)
    Flex.wrap true
    Flex.children [
        Spectrum.RangeSlider [
            RangeSlider.label "Range (Uncontrolled)"
            RangeSlider.defaultValue {| start = 25; ``end`` = 75 |}
        ]
        Spectrum.RangeSlider [
            RangeSlider.label "Range (Controlled)"
            RangeSlider.value {| start = value.start; ``end`` = value.``end`` |}
            RangeSlider.onChange (fun x -> setValue {| start = x.start; ``end`` = x.``end`` |})
        ]
    ]
]"""

        Example "Value" code [] [
            let value, setValue = React.useState({| start = 25; ``end`` = 75 |})
            Spectrum.Flex [
                Flex.gap (DimValue.Size Size150)
                Flex.wrap true
                Flex.children [
                    Spectrum.RangeSlider [
                        RangeSlider.label "Range (Uncontrolled)"
                        RangeSlider.defaultValue {| start = 25; ``end`` = 75 |}
                    ]
                    Spectrum.RangeSlider [
                        RangeSlider.label "Range (Controlled)"
                        RangeSlider.value {| start = value.start; ``end`` = value.``end`` |}
                        RangeSlider.onChange (fun x -> setValue {| start = x.start; ``end`` = x.``end`` |})
                    ]
                ]
            ]
        ]

    [<ReactComponent>]
    let RangeSliderExample3 () =
        let code = """Spectrum.RangeSlider [
    RangeSlider.label "Range"
    RangeSlider.minValue 50
    RangeSlider.maxValue 150
    RangeSlider.defaultValue {| start = 75; ``end`` = 100 |}
]"""

        Example "Different scale" code [] [
            Spectrum.RangeSlider [
                RangeSlider.label "Range"
                RangeSlider.minValue 50
                RangeSlider.maxValue 150
                RangeSlider.defaultValue {| start = 75; ``end`` = 100 |}
            ]
        ]

    [<ReactComponent>]
    let RangeSliderExample4 () =
        let code = """Spectrum.RangeSlider [
    RangeSlider.label "Price range"
    RangeSlider.formatOptions <| NumberFormat.make(style = NumberFormatStyle.Currency, currency = "JPY")
    RangeSlider.defaultValue {| start = 75; ``end`` = 100 |}
]"""

        Example "Number format" code [] [
            Spectrum.RangeSlider [
                RangeSlider.label "Price range"
                RangeSlider.formatOptions <| NumberFormat.make(style = NumberFormatStyle.Currency, currency = "JPY")
                RangeSlider.defaultValue {| start = 75; ``end`` = 100 |}
            ]
        ]

    [<ReactComponent>]
    let RangeSliderExample5 () =
        let code = """Spectrum.RangeSlider [
    RangeSlider.label "Search radius"
    RangeSlider.maxValue 200
    RangeSlider.defaultValue {| start = 15; ``end`` = 60 |}
    RangeSlider.getValueLabel (fun m -> $"{m.start}m to {m.``end``}m away")
]"""

        Example "Using the getValueLabel prop" code [] [
            Spectrum.RangeSlider [
                RangeSlider.label "Search radius"
                RangeSlider.maxValue 200
                RangeSlider.defaultValue {| start = 15; ``end`` = 60 |}
                RangeSlider.getValueLabel (fun m -> $"{m.start}m to {m.``end``}m away")
            ]
        ]

    [<ReactComponent>]
    let RangeSliderDocs () =
        let description = [
            Html.text "RangeSliders allow users to quickly select a subset range. They should be used when the upper and lower bounds to the range are invariable."
            Html.br []
            Html.br []
            Html.text " Check the official "
            Html.a [
                prop.children [ Html.text "documentation" ]
                prop.href "https://react-spectrum.adobe.com/react-spectrum/RangeSlider.html"
            ]
            Html.text " for more details."
        ]

        ExampleGroup "RangeSlider" description [
            RangeSliderExample1 ()
            RangeSliderExample2 ()
            RangeSliderExample3 ()
            RangeSliderExample4 ()
            RangeSliderExample5 ()
        ]

    [<ReactComponent>]
    let SliderExample1 () =
        let code = """Spectrum.Slider [
    Slider.label "Cookies to buy"
    Slider.defaultValue 12
]"""

        Example "Default example" code [] [
            Spectrum.Slider [
                Slider.label "Cookies to buy"
                Slider.defaultValue 12
            ]
        ]

    [<ReactComponent>]
    let SliderExample2 () =
        let code = """let value, setValue = React.useState(25)
Spectrum.Flex [
    Flex.gap (DimValue.Size Size150)
    Flex.wrap true
    Flex.children [
        Spectrum.Slider [
            Slider.label "Cookies to buy (Uncontrolled)"
            Slider.defaultValue 25
        ]
        Spectrum.Slider [
            Slider.label "Cookies to buy (Controlled)"
            Slider.value value
            Slider.onChange setValue
        ]
    ]
]"""

        Example "Value" code [] [
            let value, setValue = React.useState(25)
            Spectrum.Flex [
                Flex.gap (DimValue.Size Size150)
                Flex.wrap true
                Flex.children [
                    Spectrum.Slider [
                        Slider.label "Cookies to buy (Uncontrolled)"
                        Slider.defaultValue 25
                    ]
                    Spectrum.Slider [
                        Slider.label "Cookies to buy (Controlled)"
                        Slider.value value
                        Slider.onChange setValue
                    ]
                ]
            ]
        ]

    [<ReactComponent>]
    let SliderExample3 () =
        let code = """Spectrum.Slider [
    Slider.label "Currency"
    Slider.formatOptions <| NumberFormat.make(style = NumberFormatStyle.Currency, currency = "USD")
    Slider.defaultValue 60
]"""

        Example "Number format" code [] [
            Spectrum.Slider [
                Slider.label "Currency"
                Slider.formatOptions <| NumberFormat.make(style = NumberFormatStyle.Currency, currency = "USD")
                Slider.defaultValue 60
            ]
        ]

    [<ReactComponent>]
    let SliderDocs () =
        let description = [
            Html.text "Sliders allow users to quickly select a value within a range. They should be used when the upper and lower bounds to the range are invariable."
            Html.br []
            Html.br []
            Html.text " Check the official "
            Html.a [
                prop.children [ Html.text "documentation" ]
                prop.href "https://react-spectrum.adobe.com/react-spectrum/Slider.html"
            ]
            Html.text " for more details."
        ]

        ExampleGroup "Slider" description [
            SliderExample1 ()
            SliderExample2 ()
            SliderExample3 ()
        ]