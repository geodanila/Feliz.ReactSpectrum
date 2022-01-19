namespace Pages

open Feliz.ReactSpectrum
open Feliz
open Fable.Core
open Fable.Core.JsInterop

[<AutoOpen>]
module SliderDocs =

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
        ]