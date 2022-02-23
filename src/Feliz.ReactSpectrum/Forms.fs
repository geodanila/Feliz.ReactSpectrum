namespace Feliz.ReactSpectrum

open Feliz.ReactSpectrum
open Feliz
open Fable.Core
open Fable.React

[<Erase>]
type FormControl =
    inherit BaseControl
    static member inline isDisabled (value: bool) = Interop.mkAttr "isDisabled" value
    static member inline isReadOnly (value: bool) = Interop.mkAttr "isReadOnly" value
    static member inline isRequired (value: bool) = Interop.mkAttr "isRequired" value
    static member inline autoFocus (value: bool) = Interop.mkAttr "autoFocus" value
    static member inline value (value: string) = Interop.mkAttr "value" value
    static member inline defaultValue (value: string) = Interop.mkAttr "defaultValue" value
    static member inline validationState (value: ValidationState) = Interop.mkAttr "validationState" value
    static member inline validationState (value: bool) =
        match value with
        | true -> Interop.mkAttr "validationState" ValidationState.Valid
        | false -> Interop.mkAttr "validationState" ValidationState.Invalid
    static member inline onKeyDown (handler: SpectrumKeyboardEvent -> unit) = Interop.mkAttr "onKeyDown" handler
    static member inline onKeyUp (handler: SpectrumKeyboardEvent -> unit) = Interop.mkAttr "onKeyUp" handler
    static member inline name (value: string) = Interop.mkAttr "name" value

[<Erase>]
type Checkbox =
    inherit FormControl
    static member inline isEmphasized (value: bool) = Interop.mkAttr "isEmphasized" value
    static member inline isIndeterminate (value: bool) = Interop.mkAttr "isIndeterminate" value
    static member inline content (value: string) = prop.children([ Html.text value ])
    static member inline content (value: ReactElement) = prop.children([ value ])
    static member inline defaultSelected (value: bool) = Interop.mkAttr "defaultSelected" value
    static member inline isSelected (value: bool) = Interop.mkAttr "isSelected" value
    static member inline onChange (handler: bool -> unit) = Interop.mkAttr "onChange" handler

[<Erase>]
type CheckboxGroup =
    inherit BaseComponent
    static member inline children (xs: seq<ReactElement>) = prop.children(xs)
    static member inline orientation (value: Orientation) = Interop.mkAttr "orientation" value
    static member inline isEmphasized (value: bool) = Interop.mkAttr "isEmphasized" value
    static member inline name (value: string) = Interop.mkAttr "name" value
    static member inline value (value: seq<string>) = Interop.mkAttr "value" (value |> Array.ofSeq)
    static member inline defaultValue (value: seq<string>) = Interop.mkAttr "defaultValue" (value |> Array.ofSeq)
    static member inline isDisabled (value: bool) = Interop.mkAttr "isDisabled" value
    static member inline isReadOnly (value: bool) = Interop.mkAttr "isReadOnly" value
    static member inline label (element: ReactElement) = Interop.mkAttr "label" element
    static member inline label (element: string) = Interop.mkAttr "label" element
    static member inline labelPosition (value: LabelPosition) = Interop.mkAttr "labelPosition" value
    static member inline labelAlign (value: Alignment) = Interop.mkAttr "labelAlign" value
    static member inline necessityIndicator (value: NecessityIndicator) = Interop.mkAttr "necessityIndicator" value
    static member inline isRequired (value: bool) = Interop.mkAttr "isRequired" value
    static member inline validationState (value: ValidationState) = Interop.mkAttr "validationState" value
    static member inline validationState (value: bool) =
        match value with
        | true -> Interop.mkAttr "validationState" ValidationState.Valid
        | false -> Interop.mkAttr "validationState" ValidationState.Invalid
    static member inline onChange (handler: seq<'a> -> unit) = Interop.mkAttr "onChange" handler

[<Erase>]
type TextFormControl =
    inherit FormControl
    static member inline icon (element: ReactElement) = Interop.mkAttr "icon" element
    static member inline isQuiet (value: bool) = Interop.mkAttr "isQuiet" value
    static member inline isDisabled (value: bool) = Interop.mkAttr "isDisabled" value
    static member inline description (value: string) = Interop.mkAttr "description" value
    static member inline description (element: ReactElement) = Interop.mkAttr "description" element
    static member inline errorMessage (value: string) = Interop.mkAttr "errorMessage" value
    static member inline errorMessage (element: ReactElement) = Interop.mkAttr "errorMessage" element
    static member inline placeholder (value: string) = Interop.mkAttr "placeholder" value
    static member inline defaultValue (value: string) = Interop.mkAttr "defaultValue" value
    static member inline label (value: string) = Interop.mkAttr "label" value
    static member inline autoComplete (value: string) = Interop.mkAttr "autoComplete" value
    static member inline maxLength (value: int) = Interop.mkAttr "maxLength" value
    static member inline minLength (value: int) = Interop.mkAttr "minLength" value
    static member inline pattern (value: string) = Interop.mkAttr "pattern" value
    static member inline type' (value: TextFieldType) = Interop.mkAttr "type" value
    static member inline type' (value: string) = Interop.mkAttr "type" value
    static member inline inputMode (value: TextInputMode) = Interop.mkAttr "inputMode" value
    static member inline labelPosition (value: LabelPosition) = Interop.mkAttr "labelPosition" value
    static member inline labelAlign (value: Alignment) = Interop.mkAttr "labelAlign" value
    static member inline necessityIndicator (value: NecessityIndicator) = Interop.mkAttr "necessityIndicator" value

    // ----------- Events -----------
    static member inline onCopy (handler: SpectrumClipboardEvent -> unit) = Interop.mkAttr "onCopy" handler
    static member inline onCut (handler: SpectrumClipboardEvent -> unit) = Interop.mkAttr "onCut" handler
    static member inline onPaste (handler: SpectrumClipboardEvent -> unit) = Interop.mkAttr "onPaste" handler
    static member inline onCompositionStart (handler: SpectrumCompositionEvent -> unit) = Interop.mkAttr "onCompositionStart" handler
    static member inline onCompositionEnd (handler: SpectrumCompositionEvent -> unit) = Interop.mkAttr "onCompositionEnd" handler
    static member inline onCompositionUpdate (handler: SpectrumCompositionEvent -> unit) = Interop.mkAttr "onCompositionUpdate" handler
    static member inline onSelect (handler: SpectrumEvent -> unit) = Interop.mkAttr "onSelect" handler
    static member inline onBeforeInput (handler: SpectrumInputEvent -> unit) = Interop.mkAttr "onBeforeInput" handler
    static member inline onInput (handler: SpectrumInputEvent -> unit) = Interop.mkAttr "onInput" handler
    static member inline onChange (handler: 'a -> unit) = Interop.mkAttr "onChange" handler

[<Erase>]
type TextField =
    class
        inherit TextFormControl
    end


[<Erase>]
type TextArea =
    class
        inherit TextFormControl
    end

[<Erase>]
type Switch =
    inherit FormControl
    static member inline isEmphasized (value: bool) = Interop.mkAttr "isEmphasized" value
    static member inline content (value: string) = Interop.mkAttr "children" value
    static member inline content (element: ReactElement) = Interop.mkAttr "children" element
    static member inline defaultSelected (value: bool) = Interop.mkAttr "defaultSelected" value
    static member inline isSelected (value: bool) = Interop.mkAttr "isSelected" value
    static member inline onChange (handler: bool -> unit) = Interop.mkAttr "onChange" handler

[<Erase>]
type SearchField =
    inherit TextFormControl
    static member inline onSubmit (handler: string -> unit) = Interop.mkAttr "onSubmit" handler
    static member inline onClear (handler: unit -> unit) = Interop.mkAttr "onClear" handler

[<Erase>]
type NumberField =
    inherit TextFormControl
    static member inline hideStepper (value: bool) = Interop.mkAttr "hideStepper" value
    static member inline decrementAriaLabel (value: string) = Interop.mkAttr "decrementAriaLabel" value
    static member inline incrementAriaLabel (value: string) = Interop.mkAttr "incrementAriaLabel" value
    static member inline formatOptions (value: NumberFormatOptions) = Interop.mkAttr "formatOptions" value
    static member inline minValue (value: int) = Interop.mkAttr "minValue" value
    static member inline minValue (value: float) = Interop.mkAttr "minValue" value
    static member inline maxValue (value: int) = Interop.mkAttr "maxValue" value
    static member inline maxValue (value: float) = Interop.mkAttr "maxValue" value
    static member inline defaultValue (value: int) = Interop.mkAttr "defaultValue" value
    static member inline defaultValue (value: float) = Interop.mkAttr "defaultValue" value
    static member inline value (value: int) = Interop.mkAttr "value" value
    static member inline value (value: float) = Interop.mkAttr "value" value
    static member inline step (value: int) = Interop.mkAttr "step" value
    static member inline step (value: float) = Interop.mkAttr "step" value
    static member inline onChange (handler: 'a -> unit) = Interop.mkAttr "onChange" handler

[<Erase>]
type Radio =
    inherit BaseControl
    static member inline value (value: string) = Interop.mkAttr "value" value
    static member inline content (value: string) = Interop.mkAttr "children" value
    static member inline content (value: ReactElement) = Interop.mkAttr "children" value
    static member inline isDisabled (value: bool) = Interop.mkAttr "isDisabled" value
    static member inline autoFocus (value: bool) = Interop.mkAttr "autoFocus" value
    static member inline onKeyDown (handler: SpectrumKeyboardEvent -> unit) = Interop.mkAttr "onKeyDown" handler
    static member inline onKeyUp (handler: SpectrumKeyboardEvent -> unit) = Interop.mkAttr "onKeyUp" handler

[<Erase>]
type RadioGroup =
    inherit FormControl
    static member inline children (xs: seq<ReactElement>) = prop.children(xs)
    static member inline isEmphasized (value: bool) = Interop.mkAttr "isEmphasized" value
    static member inline orientation (value: Orientation) = Interop.mkAttr "orientation" value
    static member inline label (element: ReactElement) = Interop.mkAttr "label" element
    static member inline label (element: string) = Interop.mkAttr "label" element
    static member inline labelPosition (value: LabelPosition) = Interop.mkAttr "labelPosition" value
    static member inline labelAlign (value: Alignment) = Interop.mkAttr "labelAlign" value
    static member inline necessityIndicator (value: NecessityIndicator) = Interop.mkAttr "necessityIndicator" value
    static member inline onChange (handler: string -> unit) = Interop.mkAttr "onChange" handler

[<Erase>]
type Form =
    inherit BaseControl
    static member inline children (xs: seq<ReactElement>) = prop.children(xs)
    static member inline isQuiet (value: bool) = Interop.mkAttr "isQuiet" value
    static member inline isEmphasized (value: bool) = Interop.mkAttr "isEmphasized" value
    static member inline isDisabled (value: bool) = Interop.mkAttr "isDisabled" value
    static member inline isRequired (value: bool) = Interop.mkAttr "isRequired" value
    static member inline isReadOnly (value: bool) = Interop.mkAttr "isReadOnly" value
    static member inline validationState (value: ValidationState) = Interop.mkAttr "validationState" value
    static member inline validationState (value: bool) =
        match value with
        | true -> Interop.mkAttr "validationState" ValidationState.Valid
        | false -> Interop.mkAttr "validationState" ValidationState.Invalid
    static member inline action (value: string) = Interop.mkAttr "action" value
    static member inline encType (value: FormEncodingType) = Interop.mkAttr "encType" value
    static member inline method (value: FormMethod) = Interop.mkAttr "method" value
    static member inline target (value: FormTarget) = Interop.mkAttr "target" value
    static member inline label (element: ReactElement) = Interop.mkAttr "label" element
    static member inline label (element: string) = Interop.mkAttr "label" element
    static member inline labelPosition (value: LabelPosition) = Interop.mkAttr "labelPosition" value
    static member inline labelAlign (value: Alignment) = Interop.mkAttr "labelAlign" value
    static member inline necessityIndicator (value: NecessityIndicator) = Interop.mkAttr "necessityIndicator" value