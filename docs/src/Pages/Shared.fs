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
    [<ReactComponent>]
    let Code (text: string) =
        let elementRef = React.useElementRef()

        React.useEffectOnce(fun () ->
            match elementRef.current with
            | Some element -> Libraries.Prism.highlightAllUnder(element)
            | None -> Browser.Dom.console.warn("Failed to find element"))

        Html.pre [
            prop.ref elementRef
            prop.className "language-fsharp"
            prop.children [
                Html.code text
            ]
        ]

    [<ReactComponent>]
    let CodeResult (elements: ReactElement list) =
        Spectrum.Well [
            Well.children elements
        ]

    [<ReactComponent>]
    let ExampleGroup (title: string) (description: string) (examples: ReactElement list) =
        React.fragment [
            Html.h2 [
                prop.className "example-group-title"
                prop.children [ Html.text title ]
            ]
            Html.p [
                prop.className "example-group-description"
                prop.children [ Html.text description ]
            ]
            for example in examples do example
        ]

    [<ReactComponent>]
    let Example (title: string) (code: string) (elements: ReactElement list) =
        React.fragment [
            Html.h4 [
                prop.className "example-title"
                prop.children [ Html.text title ]
            ]
            Spectrum.Flex [
                Flex.direction FlexDirection.Column
                Flex.gap (DimValue.Size Size100)
                Flex.children [
                    Code code
                    CodeResult elements
                ]
            ]
        ]