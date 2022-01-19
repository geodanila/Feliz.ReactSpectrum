namespace Pages

open Feliz.ReactSpectrum
open Feliz
open Fable.Core
open Fable.Core.JsInterop

[<AutoOpen>]
module StatusDocs =

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
        ]