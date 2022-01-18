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
            for example in examples do
                example
                Html.br []
        ]

    [<ReactComponent>]
    let Example (title: string) (code: string) (elements: ReactElement list) =
        React.fragment [
            Html.h2 [
                prop.className "subtitle"
                prop.children [ Html.text title ]
            ]
            Spectrum.Flex [
                Flex.direction FlexDirection.Column
                Flex.gap (DimValue.Size Size100)
                Flex.children [
                    Code FSharp code
                    CodeResult elements
                ]
            ]
        ]