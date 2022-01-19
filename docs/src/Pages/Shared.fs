namespace Pages

open Feliz.ReactSpectrum
open Feliz
open Fable.Core
open Fable.Core.JsInterop

[<Fable.Core.Erase>]
module Libraries =

    type IPrism =
        abstract highlightAll: unit -> unit
        abstract highlightAllUnder: Browser.Types.HTMLElement -> unit

    [<Global>]
    let Prism: IPrism = jsNative

[<AutoOpen>]
module SharedModule =

    type CodeType =
        | FSharp
        | Bash

    [<ReactComponent>]
    let Code (lang: CodeType) (text: string) =
        let elementRef = React.useElementRef()

        React.useEffectOnce(fun () ->
            match elementRef.current with
            | Some element -> Libraries.Prism.highlightAllUnder(element)
            | None -> Browser.Dom.console.warn("Failed to find element"))

        let className =
            match lang with
            | FSharp -> "language-fsharp"
            | Bash -> "language-bash"

        Html.pre [
            prop.ref elementRef
            prop.className className
            prop.children [
                Html.code text
            ]
        ]

    [<ReactComponent>]
    let CodeResult (elements: ReactElement list) =
        Spectrum.Well [
            Well.UNSAFE_className "example-result"
            Well.children elements
        ]

    [<ReactComponent>]
    let ExampleGroup (title: string) (description: ReactElement list) (examples: ReactElement list) =
        React.fragment [
            Html.h1 [
                prop.className "title example-group-title"
                prop.children [ Html.text title ]
            ]
            Html.p [
                prop.className "example-group-description"
                prop.children description
            ]

            for i, example in List.indexed examples do
                example
                if i <> examples.Length - 1 then
                    Html.br []
                    Spectrum.Divider [
                        Divider.size DividerSize.S
                    ]
                    Html.br []
        ]

    [<ReactComponent>]
    let Example (title: string) (code: string) (description: ReactElement list) (elements: ReactElement list) =
        React.fragment [
            Html.h2 [
                prop.className "subtitle"
                prop.children [ Html.text title ]
            ]
            for el in description do el
            Spectrum.Flex [
                Flex.direction FlexDirection.Column
                Flex.gap (DimValue.Size Size100)
                Flex.children [
                    Code FSharp code
                    CodeResult elements
                ]
            ]
        ]

    let colorsList = [
        ColorValue.Blue400
        ColorValue.Blue500
        ColorValue.Blue600
        ColorValue.Blue700
        ColorValue.Celery400
        ColorValue.Celery500
        ColorValue.Celery600
        ColorValue.Celery700
        ColorValue.Chartreuse400
        ColorValue.Chartreuse500
        ColorValue.Chartreuse600
        ColorValue.Chartreuse700
        ColorValue.Fuchsia400
        ColorValue.Fuchsia500
        ColorValue.Fuchsia600
        ColorValue.Fuchsia700
        ColorValue.Gray50
        ColorValue.Gray75
        ColorValue.Gray100
        ColorValue.Gray200
        ColorValue.Gray300
        ColorValue.Gray400
        ColorValue.Gray500
        ColorValue.Gray600
        ColorValue.Gray700
        ColorValue.Gray800
        ColorValue.Gray900
        ColorValue.Green400
        ColorValue.Green500
        ColorValue.Green600
        ColorValue.Green700
        ColorValue.Indigo400
        ColorValue.Indigo500
        ColorValue.Indigo600
        ColorValue.Indigo700
        ColorValue.Informative
        ColorValue.Magenta400
        ColorValue.Magenta500
        ColorValue.Magenta600
        ColorValue.Magenta700
        ColorValue.Negative
        ColorValue.Notice
        ColorValue.Orange400
        ColorValue.Orange500
    ]