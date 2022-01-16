namespace Feliz.ReactSpectrum

open Feliz.ReactSpectrum
open Browser.Types
open Feliz
open Fable.Core
open Fable.React

[<Erase>]
type AlertDialog =
    inherit BaseComponent
    static member inline content (value: string) = Interop.mkAttr "children" value
    static member inline content (value: ReactElement) = Interop.mkAttr "children" value
    static member inline children (xs: seq<ReactElement>) = prop.children(xs)
    static member inline title (value: string) = Interop.mkAttr "title" value
    static member inline primaryActionLabel (value: string) = Interop.mkAttr "primaryActionLabel" value
    static member inline variant (value: AlertDialogVariant) = Interop.mkAttr "variant" value
    static member inline cancelLabel (value: string) = Interop.mkAttr "cancelLabel" value
    static member inline secondaryActionLabel (value: string) = Interop.mkAttr "secondaryActionLabel" value
    static member inline isPrimaryActionDisabled (value: bool) = Interop.mkAttr "isPrimaryActionDisabled" value
    static member inline isSecondaryActionDisabled (value: bool) = Interop.mkAttr "isSecondaryActionDisabled" value
    static member inline autoFocusButton (value: AutoFocusButton) = Interop.mkAttr "autoFocusButton" value
    static member inline onCancel (handler: unit -> unit) = Interop.mkAttr "onCancel" handler
    static member inline onPrimaryAction (handler: unit -> unit) = Interop.mkAttr "onPrimaryAction" handler
    static member inline onSecondaryAction (handler: unit -> unit) = Interop.mkAttr "onSecondaryAction" handler

[<Erase>]
type Dialog =
    inherit BaseComponent
    static member inline children (xs: seq<ReactElement>) = prop.children(xs)
    static member inline content (value: ReactElement) = Interop.mkAttr "children" value
    static member inline size (value: DialogSize) = Interop.mkAttr "size" value
    static member inline isDismissable (value: bool) = Interop.mkAttr "isDismissable" value
    static member inline onDismiss (handler: unit -> unit) = Interop.mkAttr "onDismiss" handler

[<Erase>]
type DialogContainer =
    static member inline children (xs: seq<ReactElement>) = prop.children(xs)
    static member inline content (value: ReactElement) = Interop.mkAttr "children" value
    static member inline type' (value: DialogContainerType) = Interop.mkAttr "type" value
    static member inline isDimissable (value: bool) = Interop.mkAttr "isDismissable" value
    static member inline isKeyboardDismissDisabled (value: bool) = Interop.mkAttr "isKeyboardDismissDisabled" value
    static member inline onDismiss (handler: unit -> unit) = Interop.mkAttr "onDismiss" handler

[<Erase>]
type DialogTrigger =
    static member inline children (xs: seq<ReactElement>) = prop.children(xs)
    static member inline type' (value: DialogTriggerType) = Interop.mkAttr "type" value
    static member inline mobileType' (value: MobileDialogTriggerType) = Interop.mkAttr "type" value
    static member inline hideArrow (value: bool) = Interop.mkAttr "hideArrow" value
    static member inline targetRef (value: IRefValue<HTMLElement option>) = Interop.mkAttr "targetRef" value
    static member inline isDismissable (value: bool) = Interop.mkAttr "isDismissable" value
    static member inline isKeyboardDismissDisabled (value: bool) = Interop.mkAttr "isKeyboardDismissDisabled" value
    static member inline isOpen (value: bool) = Interop.mkAttr "isOpen" value
    static member inline defaultOpen (value: bool) = Interop.mkAttr "defaultOpen" value
    static member inline placement (value: Placement) = Interop.mkAttr "placement" value
    static member inline containerPadding (value: int) = Interop.mkAttr "containerPadding" value
    static member inline containerPadding (value: float) = Interop.mkAttr "containerPadding" value
    static member inline offset (value: int) = Interop.mkAttr "offset" value
    static member inline offset (value: float) = Interop.mkAttr "offset" value
    static member inline crossOffset (value: int) = Interop.mkAttr "crossOffset" value
    static member inline crossOffset (value: float) = Interop.mkAttr "crossOffset" value
    static member inline shouldFlip (value: bool) = Interop.mkAttr "shouldFlip" value
    static member inline onOpenChange (handler: bool -> unit) = Interop.mkAttr "onOpenChange" handler

[<Erase>]
type Tooltip =
    static member inline children (xs: seq<ReactElement>) = prop.children(xs)
    static member inline content (value: string) = Interop.mkAttr "children" value
    static member inline isOpen (value: bool) = Interop.mkAttr "isOpen" value
    static member inline variant (value: TooltipVariant) = Interop.mkAttr "variant" value
    static member inline placement (value: TooltipPlacement) = Interop.mkAttr "placement" value
    static member inline showIcon (value: bool) = Interop.mkAttr "showIcon" value

[<Erase>]
type TooltipTrigger =
    static member inline children (xs: seq<ReactElement>) = prop.children(xs)
    static member inline offset (value: int) = Interop.mkAttr "offset" value
    static member inline offset (value: float) = Interop.mkAttr "offset" value
    static member inline crossOffset (value: int) = Interop.mkAttr "crossOffset" value
    static member inline crossOffset (value: float) = Interop.mkAttr "crossOffset" value
    static member inline isDisabled (value: bool) = Interop.mkAttr "isDisabled" value
    static member inline delay (value: int) = Interop.mkAttr "delay" value
    static member inline delay (value: float) = Interop.mkAttr "delay" value
    static member inline triggerOnFocus = Interop.mkAttr "trigger" "focus"
    static member inline isOpen (value: bool) = Interop.mkAttr "isOpen" value
    static member inline defaultOpen (value: bool) = Interop.mkAttr "defaultOpen" value
    static member inline placement (value: TooltipPlacement) = Interop.mkAttr "placement" value
    static member inline containerPadding (value: int) = Interop.mkAttr "containerPadding" value
    static member inline containerPadding (value: float) = Interop.mkAttr "containerPadding" value
    static member inline shouldFlip (value: bool) = Interop.mkAttr "shouldFlip" value
    static member inline onOpenChange (handler: bool -> unit) = Interop.mkAttr "onOpenChange" handler