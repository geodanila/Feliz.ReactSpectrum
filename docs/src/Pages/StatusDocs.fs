namespace Pages

open Feliz.ReactSpectrum
open Feliz
open Fable.Core
open Fable.Core.JsInterop

[<AutoOpen>]
module StatusDocs =

    [<ReactComponent>]
    let MeterExample1 () =
        let code = """Spectrum.Meter [
    Meter.label "Storage space"
    Meter.variant MeterVariant.Positive
    Meter.value 35
]"""

        Example "Default example" code [] [
            Spectrum.Meter [
                Meter.label "Storage space"
                Meter.variant MeterVariant.Positive
                Meter.value 35
            ]
        ]

    [<ReactComponent>]
    let MeterExample2 () =
        let code = """Spectrum.Meter [
    Meter.label "Progress"
    Meter.marginBottom (DimValue.Size Size300)
    Meter.value 25
    Meter.valueLabel "1 of 4"
    Meter.variant MeterVariant.Warning
]"""

        Example "Warning example" code [] [
            Spectrum.Meter [
                Meter.label "Progress"
                Meter.marginBottom (DimValue.Size Size300)
                Meter.value 25
                Meter.valueLabel "1 of 4"
                Meter.variant MeterVariant.Warning
            ]
        ]

    [<ReactComponent>]
    let MeterExample3 () =
        let code = """Spectrum.Flex [
    Flex.direction FlexDirection.Column
    Flex.maxWidth (DimValue.Size Size3000)
    Flex.gap (DimValue.Size Size300)
    Flex.children [
        Spectrum.Meter [
            Meter.label "Space used"
            Meter.showValueLabel false
            Meter.value 90
            Meter.variant MeterVariant.Critical
        ]
        Spectrum.Meter [
            Meter.label "Space used"
            Meter.valueLabel "54 of 60GB"
            Meter.value 90
            Meter.variant MeterVariant.Critical
        ]
        Spectrum.Meter [
            Meter.label "Space used"
            Meter.value 89.123
            Meter.formatOptions <| NumberFormat.make(style = NumberFormatStyle.Percent, minimumFractionDigits = 2)
            Meter.variant MeterVariant.Critical
        ]
    ]
]"""

        Example "Labels and formatting" code [] [
            Spectrum.Flex [
                Flex.direction FlexDirection.Column
                Flex.maxWidth (DimValue.Size Size3000)
                Flex.gap (DimValue.Size Size300)
                Flex.children [
                    Spectrum.Meter [
                        Meter.label "Space used"
                        Meter.showValueLabel false
                        Meter.value 90
                        Meter.variant MeterVariant.Critical
                    ]
                    Spectrum.Meter [
                        Meter.label "Space used"
                        Meter.valueLabel "54 of 60GB"
                        Meter.value 90
                        Meter.variant MeterVariant.Critical
                    ]
                    Spectrum.Meter [
                        Meter.label "Space used"
                        Meter.value 89.123
                        Meter.formatOptions <| NumberFormat.make(style = NumberFormatStyle.Percent, minimumFractionDigits = 2)
                        Meter.variant MeterVariant.Critical
                    ]
                ]
            ]
        ]

    [<ReactComponent>]
    let MeterDocs () =
        let description = [
            Html.text "Meters are visual representations of a quantity or an achievement. Their progress is determined by user actions, rather than system actions."
            Html.br []
            Html.br []
            Html.text " Check the official "
            Html.a [
                prop.children [ Html.text "documentation" ]
                prop.href "https://react-spectrum.adobe.com/react-spectrum/Meter.html"
            ]
            Html.text " for more details."
        ]

        ExampleGroup "Meter" description [
            MeterExample1 ()
            MeterExample2 ()
            MeterExample3 ()
        ]

    [<ReactComponent>]
    let ProgressBarExample1 () =
        let code = """Spectrum.ProgressBar [
    ProgressBar.label "Loading..."
    ProgressBar.value 50
]"""

        Example "Default example" code [] [
            Spectrum.ProgressBar [
                ProgressBar.label "Loading..."
                ProgressBar.value 50
            ]
        ]

    [<ReactComponent>]
    let ProgressBarExample2 () =
        let code = """Spectrum.ProgressBar [
    ProgressBar.label "Loading..."
    ProgressBar.isIndeterminate true
]"""

        Example "Indeterminate" code [] [
            Spectrum.ProgressBar [
                ProgressBar.label "Loading..."
                ProgressBar.isIndeterminate true
            ]
        ]

    [<ReactComponent>]
    let ProgressBarExample3 () =
        let code = """Spectrum.View [
    View.backgroundColor (BackgroundColorValue.Color Positive)
    View.padding (DimValue.Size Size300)
    View.children [
        Spectrum.ProgressBar [
            ProgressBar.overBackgroundVariant
            ProgressBar.label "Loading..."
            ProgressBar.value 5
        ]
    ]
]"""

        Example "Over background" code [] [
            Spectrum.View [
                View.backgroundColor (BackgroundColorValue.Color Positive)
                View.padding (DimValue.Size Size300)
                View.children [
                    Spectrum.ProgressBar [
                        ProgressBar.overBackgroundVariant
                        ProgressBar.label "Loading..."
                        ProgressBar.value 5
                    ]
                ]
            ]
        ]

    [<ReactComponent>]
    let ProgressBarDocs () =
        let description = [
            Html.text "ProgressBars show the progression of a system operation: downloading, uploading, processing, etc., in a visual way. They can represent either determinate or indeterminate progress."
            Html.br []
            Html.br []
            Html.text " Check the official "
            Html.a [
                prop.children [ Html.text "documentation" ]
                prop.href "https://react-spectrum.adobe.com/react-spectrum/ProgressBar.html"
            ]
            Html.text " for more details."
        ]

        ExampleGroup "ProgressBar" description [
            ProgressBarExample1 ()
            ProgressBarExample2 ()
            ProgressBarExample3 ()
        ]

    [<ReactComponent>]
    let ProgressCircleExample1 () =
        let code = """Spectrum.ProgressCircle [
    ProgressCircle.ariaLabel "Loading..."
    ProgressCircle.value 50
]"""

        Example "Default example" code [] [
            Spectrum.ProgressCircle [
                ProgressCircle.ariaLabel "Loading..."
                ProgressCircle.value 50
            ]
        ]

    [<ReactComponent>]
    let ProgressCircleExample2 () =
        let code = """Spectrum.ProgressCircle [
    ProgressCircle.ariaLabel "Loading..."
    ProgressCircle.isIndeterminate true
]"""

        Example "Indeterminate" code [] [
            Spectrum.ProgressCircle [
                ProgressCircle.ariaLabel "Loading..."
                ProgressCircle.isIndeterminate true
            ]
        ]

    [<ReactComponent>]
    let ProgressCircleExample3 () =
        let code = """Spectrum.View [
    View.backgroundColor (BackgroundColorValue.Color Positive)
    View.padding (DimValue.Size Size300)
    View.children [
        Spectrum.ProgressCircle [
            ProgressCircle.overBackgroundVariant
            ProgressCircle.isIndeterminate true
            ProgressCircle.ariaLabel "Loading..."
        ]
    ]
]"""

        Example "Over background" code [] [
            Spectrum.View [
                View.backgroundColor (BackgroundColorValue.Color Positive)
                View.padding (DimValue.Size Size300)
                View.children [
                    Spectrum.ProgressCircle [
                        ProgressCircle.overBackgroundVariant
                        ProgressCircle.isIndeterminate true
                        ProgressCircle.ariaLabel "Loading..."
                    ]
                ]
            ]
        ]

    [<ReactComponent>]
    let ProgressCircleDocs () =
        let description = [
            Html.text "ProgressCircles show the progression of a system operation such as downloading, uploading, processing, etc. in a visual way. They can represent determinate or indeterminate progress."
            Html.br []
            Html.br []
            Html.text " Check the official "
            Html.a [
                prop.children [ Html.text "documentation" ]
                prop.href "https://react-spectrum.adobe.com/react-spectrum/ProgressCircle.html"
            ]
            Html.text " for more details."
        ]

        ExampleGroup "ProgressCircle" description [
            ProgressCircleExample1 ()
            ProgressCircleExample2 ()
            ProgressCircleExample3 ()
        ]

    [<ReactComponent>]
    let StatusLightExample1 () =
        let code = """Spectrum.StatusLight [
    StatusLight.variant StatusLightVariant.Positive
    StatusLight.content "Ready"
]"""

        Example "Default example" code [] [
            Spectrum.StatusLight [
                StatusLight.variant StatusLightVariant.Positive
                StatusLight.content "Ready"
            ]
        ]

    [<ReactComponent>]
    let StatusLightDocs () =
        let description = [
            Html.text "Status lights are used to color code categories and labels commonly found in data visualization. When status lights have a semantic meaning, they should use semantic variant colors."
            Html.br []
            Html.br []
            Html.text " Check the official "
            Html.a [
                prop.children [ Html.text "documentation" ]
                prop.href "https://react-spectrum.adobe.com/react-spectrum/StatusLight.html"
            ]
            Html.text " for more details."
        ]

        ExampleGroup "StatusLight" description [
            StatusLightExample1 ()
        ]