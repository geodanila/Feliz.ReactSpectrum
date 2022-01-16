namespace Feliz.ReactSpectrum

open Feliz
open Fable.Core
open Fable.Core.JsInterop
open Fable.React

[<StringEnum; RequireQualifiedAccess>]
type ButtonVariant =
    | [<CompiledName("cta")>] CTA
    | OverBackground
    | Primary
    | Secondary
    | Negative

[<StringEnum; RequireQualifiedAccess>]
type LogicButtonVariant =
    | And
    | Or

[<Erase>]
type ButtonBase =
    inherit BaseControl
    static member inline content (value: string) = Interop.mkAttr "children" value
    static member inline type' (buttonType: ButtonType) = Interop.mkAttr "type" buttonType
    static member inline children (node: ReactElement) = prop.children(node)
    static member inline children (elements: seq<ReactElement>) = prop.children(elements)
    static member inline isQuiet (value: bool) = Interop.mkAttr "isQuiet" value
    static member inline isDisabled (value: bool) = Interop.mkAttr "isDisabled" value
    static member inline autoFocus (value: bool) = Interop.mkAttr "autoFocus" value

    // ----------- Events -----------
    static member inline onKeyDown (handler: SpectrumKeyboardEvent -> unit) = Interop.mkAttr "onKeyDown" handler
    static member inline onKeyUp (handler: SpectrumKeyboardEvent -> unit) = Interop.mkAttr "onKeyUp" handler

    static member inline onPress (handler: SpectrumPressEvent -> unit) = Interop.mkAttr "onPress" handler
    static member inline onPressStart (handler: SpectrumPressEvent -> unit) = Interop.mkAttr "onPressStart" handler
    static member inline onPressEnd (handler: SpectrumPressEvent -> unit) = Interop.mkAttr "onPressEnd" handler
    static member inline onPressChange (handler: bool -> unit) = Interop.mkAttr "onPressChange" handler
    static member inline onPressUp (handler: SpectrumPressEvent -> unit) = Interop.mkAttr "onPressUp" handler

[<Erase>]
type Button =
    inherit ButtonBase
    static member inline variant (value: ButtonVariant) = Interop.mkAttr "variant" value
    static member inline href (value: string) = Interop.mkAttr "href" value
    static member inline target (value: string) = Interop.mkAttr "target" value
    static member inline rel (value: string) = Interop.mkAttr "rel" value
    static member inline elementType (value: string) = Interop.mkAttr "elementType" value

[<Erase>]
type ActionButton =
    inherit ButtonBase
    static member inline staticColor (value: StaticColorValue) = Interop.mkAttr "staticColor" value

[<Erase>]
type LogicButton =
    inherit ButtonBase
    static member inline variant (value: LogicButtonVariant) = Interop.mkAttr "variant" value

[<Erase>]
type ToggleButton =
    inherit ButtonBase
    static member inline isEmphasized (value: bool) = Interop.mkAttr "isEmphasized" value
    static member inline isSelected (value: bool) = Interop.mkAttr "isSelected" value
    static member inline defaultSelected (value: bool) = Interop.mkAttr "defaultSelected" value
    static member inline staticColor (value: StaticColorValue) = Interop.mkAttr "staticColor" value
    // HACK: current version of ReactSpectrum is bugged when dealing with toggle button state and throws an error
    static member inline onChange (handler: bool -> unit) =
        let handler' v =
            Fable.Core.JS.setTimeout (fun () -> handler v) 0 |> ignore
        Interop.mkAttr "onChange" handler'

[<Erase>]
type ActionGroup =
    inherit BaseComponent

    static member inline children (xs: seq<ReactElement>) = Interop.mkAttr "children" (xs |> Array.ofSeq)
    static member inline items (xs: seq<'a>) = Interop.mkAttr "items" (xs |> Array.ofSeq)
    static member inline itemTemplate (template: 'a -> ReactElement) = Interop.mkAttr "children" template
    static member inline isEmphasized (value: bool) = Interop.mkAttr "isEmphasized" value
    static member inline density (value: Density) = Interop.mkAttr "density" value
    static member inline isJustified (value: bool) = Interop.mkAttr "isJustified" value
    static member inline isQuiet (value: bool) = Interop.mkAttr "isQuiet" value
    static member inline staticColor (value: StaticColorValue) = Interop.mkAttr "staticColor" value
    static member inline overflowMode (value: ActionGroupOverflowMode) = Interop.mkAttr "overflowMode" value
    static member inline buttonLabelBehavior (value: ButtonLabelBehavior) = Interop.mkAttr "buttonLabelBehavior" value
    static member inline summaryIcon (value: ReactElement) = Interop.mkAttr "summaryIcon" value
    static member inline orientation (value: Orientation) = Interop.mkAttr "orientation" value
    static member inline disabledKeys (value: seq<'a>) = Interop.mkAttr "disabledKeys" (value |> Array.ofSeq)
    static member inline isDisabled (value: bool) = Interop.mkAttr "isDisabled" value
    static member inline selectionMode (value: SelectionMode) = Interop.mkAttr "selectionMode" value
    static member inline disallowEmptySelection (value: bool) = Interop.mkAttr "disallowEmptySelection" value
    static member inline selectedKeys (value: seq<'a>) = Interop.mkAttr "selectedKeys" (value |> Array.ofSeq)
    static member inline defaultSelectedKeys (value: seq<'a>) = Interop.mkAttr "defaultSelectedKeys" (value |> Array.ofSeq)
    static member inline onAction (value: 'a -> unit) = Interop.mkAttr "onAction" value
    static member inline onSelectionChange (handler: ActionGroupSelection<'a> -> unit) =
        let callback = fun x ->
            match !!x with
            | "all" -> handler ActionGroupSelection.All
            | set ->
                let set': Fable.Core.JS.Set<'a> = !!set
                let values = set'.values() |> List.ofSeq
                handler (Set values)
        Interop.mkAttr "onSelectionChange" callback

[<Erase>]
type ButtonGroup =
    inherit BaseComponent

    static member inline children (elements: seq<ReactElement>) = prop.children (elements)
    static member inline isDisabled (value: bool) = Interop.mkAttr "isDisabled" value
    static member inline orientation (value: Orientation) = Interop.mkAttr "orientation" value
    static member inline align (value: ButtonGroupAlignment) = Interop.mkAttr "align" value