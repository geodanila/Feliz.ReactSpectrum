namespace Feliz.ReactSpectrum

open Feliz.ReactSpectrum
open Feliz
open Fable.Core
open Fable.React

[<Erase>]
type Breadcrumbs =
    inherit BaseControl
    static member inline children (xs: seq<ReactElement>) = Interop.mkAttr "children" xs
    static member inline size (value: BreadcrumbsSize) = Interop.mkAttr "size" value
    static member inline showRoot (value: bool) = Interop.mkAttr "showRoot" value
    static member inline isMultiline (value: bool) = Interop.mkAttr "isMultiline" value
    static member inline isDisabled (value: bool) = Interop.mkAttr "isDisabled" value
    static member inline onAction (handler: 'a -> unit) = Interop.mkAttr "onAction" handler

[<Erase>]
type Link =
    inherit BaseControl
    static member inline content (value: string) = Interop.mkAttr "children" value
    static member inline content (value: ReactElement) = Interop.mkAttr "children" value
    static member inline variant (value: LinkVariant) = Interop.mkAttr "variant" value
    static member inline isQuiet (value: bool) = Interop.mkAttr "isQuiet" value
    static member inline autoFocus (value: bool) = Interop.mkAttr "autoFocus" value

    static member inline onKeyDown (handler: SpectrumKeyboardEvent -> unit) = Interop.mkAttr "onKeyDown" handler
    static member inline onKeyUp (handler: SpectrumKeyboardEvent -> unit) = Interop.mkAttr "onKeyUp" handler

    static member inline onPress (handler: SpectrumPressEvent -> unit) = Interop.mkAttr "onPress" handler
    static member inline onPressStart (handler: SpectrumPressEvent -> unit) = Interop.mkAttr "onPressStart" handler
    static member inline onPressEnd (handler: SpectrumPressEvent -> unit) = Interop.mkAttr "onPressEnd" handler
    static member inline onPressChange (handler: bool -> unit) = Interop.mkAttr "onPressChange" handler
    static member inline onPressUp (handler: SpectrumPressEvent -> unit) = Interop.mkAttr "onPressUp" handler

[<Erase>]
type Tabs =
    inherit BaseControl
    static member inline children (xs: seq<ReactElement>) = prop.children(xs)
    static member inline items (xs: seq<'a>) = Interop.mkAttr "items" (xs |> Array.ofSeq)
    static member inline disabledKeys (value: seq<'a>) = Interop.mkAttr "disabledKeys" value
    static member inline disallowEmptySelection (value: bool) = Interop.mkAttr "disallowEmptySelection" value
    static member inline selectedKey (value: 'a) = Interop.mkAttr "selectedKey" value
    static member inline defaultSelectedKey (value: 'a) = Interop.mkAttr "defaultSelectedKey" value
    static member inline isQuiet (value: bool) = Interop.mkAttr "isQuiet" value
    static member inline orientation (value: Orientation) = Interop.mkAttr "orientation" value
    static member inline density (value: Density) = Interop.mkAttr "density" value
    static member inline onSelectionChange (handler: 'a -> unit) = Interop.mkAttr "onSelectionChange" handler

[<Erase>]
type TabList =
    inherit BaseComponent
    static member inline children (xs: seq<ReactElement>) = Interop.mkAttr "children" (xs |> Array.ofSeq)
    static member inline itemTemplate (template: 'a -> ReactElement) = Interop.mkAttr "children" template

[<Erase>]
type TabPanels =
    inherit BaseComponent
    static member inline children (xs: seq<ReactElement>) = Interop.mkAttr "children" (xs |> Array.ofSeq)
    static member inline itemTemplate (template: 'a -> ReactElement) = Interop.mkAttr "children" template