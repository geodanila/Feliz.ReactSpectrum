namespace Feliz.ReactSpectrum

open Feliz.ReactSpectrum
open Browser.Types
open Feliz
open Fable.Core
open Fable.React

[<Erase>]
type Picker =
    inherit BaseControl
    static member inline children (xs: seq<ReactElement>) = Interop.mkAttr "children" (xs |> Array.ofSeq)
    static member inline isQuiet (value: bool) = Interop.mkAttr "isQuiet" value
    static member inline align (value: Alignment) = Interop.mkAttr "align" value
    static member inline direction (value: PickerMenuDirection) = Interop.mkAttr "direction" value
    static member inline menuWidth (value: int) = Interop.mkAttr "menuWidth" value
    static member inline menuWidth (value: float) = Interop.mkAttr "menuWidth" value
    static member inline menuWidth (value: DimValue) = Interop.mkAttr "menuWidth" value
    static member inline autoFocus (value: bool) = Interop.mkAttr "autoFocus" value
    static member inline autoComplete (value: string) = Interop.mkAttr "autoComplete" value
    static member inline name (value: string) = Interop.mkAttr "name" value
    static member inline isOpen (value: bool) = Interop.mkAttr "isOpen" value
    static member inline defaultOpen (value: bool) = Interop.mkAttr "defaultOpen" value
    static member inline shouldFlip (value: bool) = Interop.mkAttr "shouldFlip" value
    static member inline items (xs: seq<'a>) = Interop.mkAttr "items" (xs |> Array.ofSeq)
    static member inline itemTemplate (template: 'a -> ReactElement) = Interop.mkAttr "children" template
    static member inline disabledKeys (xs: seq<'a>) = Interop.mkAttr "disabledKeys" (xs |> Array.ofSeq)
    static member inline isLoading (value: bool) = Interop.mkAttr "isLoading" value
    static member inline isDisabled (value: bool) = Interop.mkAttr "isDisabled" value
    static member inline validationState (value: ValidationState) = Interop.mkAttr "validationState" value
    static member inline validationState (value: bool) =
        match value with
        | true -> Interop.mkAttr "validationState" ValidationState.Valid
        | false -> Interop.mkAttr "validationState" ValidationState.Invalid
    static member inline isRequired (value: bool) = Interop.mkAttr "isRequired" value
    static member inline label (element: ReactElement) = Interop.mkAttr "label" element
    static member inline label (element: string) = Interop.mkAttr "label" element
    static member inline labelPosition (value: LabelPosition) = Interop.mkAttr "labelPosition" value
    static member inline labelAlign (value: Alignment) = Interop.mkAttr "labelAlign" value
    static member inline description (value: string) = Interop.mkAttr "description" value
    static member inline description (element: ReactElement) = Interop.mkAttr "description" element
    static member inline errorMessage (value: string) = Interop.mkAttr "errorMessage" value
    static member inline errorMessage (element: ReactElement) = Interop.mkAttr "errorMessage" element
    static member inline necessityIndicator (value: NecessityIndicator) = Interop.mkAttr "necessityIndicator" value
    static member inline placeholder (value: string) = Interop.mkAttr "placeholder" value
    static member inline selectedKey (value: 'a) = Interop.mkAttr "selectedKey" value
    static member inline defaultSelectedKey (value: 'a) = Interop.mkAttr "defaultSelectedKey" value

    static member inline onOpenChange (handler: bool -> unit) = Interop.mkAttr "onOpenChange" handler
    static member inline onLoadMore (handler: unit -> 'a) = Interop.mkAttr "onLoadMore" handler
    static member inline onSelectionChange (handler: 'a -> 'b) = Interop.mkAttr "onSelectionChange" handler
    static member inline onKeyDown (handler: SpectrumKeyboardEvent -> unit) = Interop.mkAttr "onKeyDown" handler
    static member inline onKeyUp (handler: SpectrumKeyboardEvent -> unit) = Interop.mkAttr "onKeyUp" handler

[<Erase>]
type ComboBox =
    inherit BaseControl
    static member inline children (xs: seq<ReactElement>) = Interop.mkAttr "children" (xs |> Array.ofSeq)
    static member inline menuTrigger (value: MenuTriggerAction) = Interop.mkAttr "menuTrigger" value
    static member inline isQuiet (value: bool) = Interop.mkAttr "isQuiet" value
    static member inline direction (value: PickerMenuDirection) = Interop.mkAttr "direction" value
    static member inline loadingState (value: LoadingState) = Interop.mkAttr "loadingState" value
    static member inline shouldFlip (value: bool) = Interop.mkAttr "shouldFlip" value
    static member inline shouldFocusWrap (value: bool) = Interop.mkAttr "shouldFocusWrap" value
    static member inline defaultItems (xs: seq<'a>) = Interop.mkAttr "defaultItems" (xs |> Array.ofSeq)
    static member inline items (xs: seq<'a>) = Interop.mkAttr "items" (xs |> Array.ofSeq)
    static member inline itemTemplate (template: 'a -> ReactElement) = Interop.mkAttr "children" template
    static member inline inputValue (value: string) = Interop.mkAttr "inputValue" value
    static member inline defaultInputValue (value: string) = Interop.mkAttr "defaultInputValue" value
    static member inline allowsCustomValue (value: bool) = Interop.mkAttr "allowsCustomValue" value
    static member inline disabledKeys (xs: seq<'a>) = Interop.mkAttr "disabledKeys" (xs |> Array.ofSeq)
    static member inline selectedKey (value: 'a) = Interop.mkAttr "selectedKey" value
    static member inline defaultSelectedKey (value: 'a) = Interop.mkAttr "defaultSelectedKey" value
    static member inline isDisabled (value: bool) = Interop.mkAttr "isDisabled" value
    static member inline isReadOnly (value: bool) = Interop.mkAttr "isReadOnly" value
    static member inline placeholder (value: string) = Interop.mkAttr "placeholder" value
    static member inline validationState (value: ValidationState) = Interop.mkAttr "validationState" value
    static member inline validationState (value: bool) =
        match value with
        | true -> Interop.mkAttr "validationState" ValidationState.Valid
        | false -> Interop.mkAttr "validationState" ValidationState.Invalid
    static member inline autoFocus (value: bool) = Interop.mkAttr "autoFocus" value
    static member inline isRequired (value: bool) = Interop.mkAttr "isRequired" value
    static member inline label (element: ReactElement) = Interop.mkAttr "label" element
    static member inline label (element: string) = Interop.mkAttr "label" element
    static member inline labelPosition (value: LabelPosition) = Interop.mkAttr "labelPosition" value
    static member inline labelAlign (value: Alignment) = Interop.mkAttr "labelAlign" value
    static member inline description (value: string) = Interop.mkAttr "description" value
    static member inline description (element: ReactElement) = Interop.mkAttr "description" element
    static member inline errorMessage (value: string) = Interop.mkAttr "errorMessage" value
    static member inline errorMessage (element: ReactElement) = Interop.mkAttr "errorMessage" element
    static member inline necessityIndicator (value: NecessityIndicator) = Interop.mkAttr "necessityIndicator" value

    static member inline onOpenChange (handler: bool -> MenuTriggerAction -> unit) = Interop.mkAttr "onOpenChange" handler
    static member inline onInputChange (handler: string -> unit) = Interop.mkAttr "onInputChange" handler
    static member inline onSelectionChange (handler: 'a -> 'b) = Interop.mkAttr "onSelectionChange" handler
    static member inline onKeyDown (handler: SpectrumKeyboardEvent -> unit) = Interop.mkAttr "onKeyDown" handler
    static member inline onKeyUp (handler: SpectrumKeyboardEvent -> unit) = Interop.mkAttr "onKeyUp" handler
    static member inline onLoadMore (handler: unit -> 'a) = Interop.mkAttr "onLoadMore" handler