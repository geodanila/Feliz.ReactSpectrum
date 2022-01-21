namespace Pages

open Feliz.ReactSpectrum
open Feliz
open Fable.Core
open Fable.Core.JsInterop

[<AutoOpen>]
module OverlayDocs =

    [<ReactComponent>]
    let AlertDialogExample1 () =
        let code = """Spectrum.DialogTrigger [
    Spectrum.ActionButton [ Html.text "Save" ]
    Spectrum.AlertDialog [
        AlertDialog.title "Low disk space!"
        AlertDialog.variant AlertDialogVariant.Warning
        AlertDialog.primaryActionLabel "Confirm"
        AlertDialog.content "You are running low on disk space.\nDelete unnecessary files to free up space."
    ]
]"""

        Example "Default example" code [] [
            Spectrum.DialogTrigger [
                Spectrum.ActionButton [ Html.text "Save" ]
                Spectrum.AlertDialog [
                    AlertDialog.title "Low disk space!"
                    AlertDialog.variant AlertDialogVariant.Warning
                    AlertDialog.primaryActionLabel "Confirm"
                    AlertDialog.content "You are running low on disk space.\nDelete unnecessary files to free up space."
                ]
            ]
        ]

    [<ReactComponent>]
    let AlertDialogExample2 () =
        let code = """Spectrum.DialogTrigger [
    Spectrum.ActionButton [ Html.text "Exit" ]
    Spectrum.AlertDialog [
        AlertDialog.title "Register profile"
        AlertDialog.variant AlertDialogVariant.Information
        AlertDialog.primaryActionLabel "Register"
        AlertDialog.secondaryActionLabel "Reminder me later"
        AlertDialog.cancelLabel "Cancel"
        AlertDialog.content "You have not saved your profile information \nfor this account. Would you like to register now?"
    ]
]"""

        Example "Content" code [] [
            Spectrum.DialogTrigger [
                Spectrum.ActionButton [ Html.text "Exit" ]
                Spectrum.AlertDialog [
                    AlertDialog.title "Register profile"
                    AlertDialog.variant AlertDialogVariant.Information
                    AlertDialog.primaryActionLabel "Register"
                    AlertDialog.secondaryActionLabel "Reminder me later"
                    AlertDialog.cancelLabel "Cancel"
                    AlertDialog.content "You have not saved your profile information \nfor this account. Would you like to register now?"
                ]
            ]
        ]

    [<ReactComponent>]
    let AlertDialogExample3 () =
        let code = """Spectrum.DialogTrigger [
    Spectrum.ActionButton [ Html.text "Save" ]
    Spectrum.AlertDialog [
        AlertDialog.title "Save file"
        AlertDialog.variant AlertDialogVariant.Confirmation
        AlertDialog.primaryActionLabel "Save"
        AlertDialog.cancelLabel "Cancel"
        AlertDialog.autoFocusButton AutoFocusButton.Primary
        AlertDialog.content "A file with the same name already exists. Overwrite?"
    ]
]"""

        Example "Accessibility" code [] [
            Spectrum.DialogTrigger [
                Spectrum.ActionButton [ Html.text "Save" ]
                Spectrum.AlertDialog [
                    AlertDialog.title "Save file"
                    AlertDialog.variant AlertDialogVariant.Confirmation
                    AlertDialog.primaryActionLabel "Save"
                    AlertDialog.cancelLabel "Cancel"
                    AlertDialog.autoFocusButton AutoFocusButton.Primary
                    AlertDialog.content "A file with the same name already exists. Overwrite?"
                ]
            ]
        ]

    [<ReactComponent>]
    let AlertDialogExample4 () =
        let code = """let onPrimaryAction () = Browser.Dom.window.alert("Primary button pressed.")
let onSecondaryAction () = Browser.Dom.window.alert("Secondary button pressed.")
let onCancel () = Browser.Dom.window.alert("Cancel button pressed.")
Spectrum.DialogTrigger [
    Spectrum.ActionButton [ Html.text "Publish" ]
    Spectrum.AlertDialog [
        AlertDialog.variant AlertDialogVariant.Confirmation
        AlertDialog.title "Confirm publish"
        AlertDialog.primaryActionLabel "Publish"
        AlertDialog.secondaryActionLabel "Save as draft"
        AlertDialog.cancelLabel "Cancel"
        AlertDialog.onPrimaryAction onPrimaryAction
        AlertDialog.onSecondaryAction onSecondaryAction
        AlertDialog.onCancel onCancel
        AlertDialog.content "Are you sure you want to publish this document?"
    ]
]"""

        Example "Events" code [] [
            let onPrimaryAction () = Browser.Dom.window.alert("Primary button pressed.")
            let onSecondaryAction () = Browser.Dom.window.alert("Secondary button pressed.")
            let onCancel () = Browser.Dom.window.alert("Cancel button pressed.")
            Spectrum.DialogTrigger [
                Spectrum.ActionButton [ Html.text "Publish" ]
                Spectrum.AlertDialog [
                    AlertDialog.variant AlertDialogVariant.Confirmation
                    AlertDialog.title "Confirm publish"
                    AlertDialog.primaryActionLabel "Publish"
                    AlertDialog.secondaryActionLabel "Save as draft"
                    AlertDialog.cancelLabel "Cancel"
                    AlertDialog.onPrimaryAction onPrimaryAction
                    AlertDialog.onSecondaryAction onSecondaryAction
                    AlertDialog.onCancel onCancel
                    AlertDialog.content "Are you sure you want to publish this document?"
                ]
            ]
        ]

    [<ReactComponent>]
    let AlertDialogDocs () =
        let description = [
            Html.text "AlertDialogs are a specific type of Dialog. They display important information that users need to acknowledge."
            Html.br []
            Html.br []
            Html.text " Check the official "
            Html.a [
                prop.children [ Html.text "documentation" ]
                prop.href "https://react-spectrum.adobe.com/react-spectrum/AlertDialog.html"
            ]
            Html.text " for more details."
        ]

        ExampleGroup "AlertDialog" description [
            AlertDialogExample1 ()
            AlertDialogExample2 ()
            AlertDialogExample3 ()
            AlertDialogExample4 ()
        ]

    [<ReactComponent>]
    let DialogExample1 () =
        let code = """Spectrum.DialogTrigger [
    Spectrum.ActionButton "Check connectivity"
    Spectrum.DialogClose <| fun close ->
        Spectrum.Dialog [
            Spectrum.Heading "Internet Speed Test"
            Spectrum.Header "Connection status: Connected"
            Spectrum.Divider ()
            Spectrum.Content [
                Spectrum.Text "Start speed test?"
            ]
            Spectrum.ButtonGroup [
                Spectrum.Button [
                    Button.variant ButtonVariant.Secondary
                    Button.onPress (fun _ -> close())
                    Button.content "Cancel"
                ]
                Spectrum.Button [
                    Button.variant ButtonVariant.CTA
                    Button.onPress (fun _ -> close())
                    Button.content "Confirm"
                ]
            ]
        ]
]"""

        Example "Default example" code [] [
            Spectrum.DialogTrigger [
                Spectrum.ActionButton "Check connectivity"
                Spectrum.DialogClose <| fun close ->
                    Spectrum.Dialog [
                        Spectrum.Heading "Internet Speed Test"
                        Spectrum.Header "Connection status: Connected"
                        Spectrum.Divider ()
                        Spectrum.Content [
                            Spectrum.Text "Start speed test?"
                        ]
                        Spectrum.ButtonGroup [
                            Spectrum.Button [
                                Button.variant ButtonVariant.Secondary
                                Button.onPress (fun _ -> close())
                                Button.content "Cancel"
                            ]
                            Spectrum.Button [
                                Button.variant ButtonVariant.CTA
                                Button.onPress (fun _ -> close())
                                Button.content "Confirm"
                            ]
                        ]
                    ]
            ]
        ]

    [<ReactComponent>]
    let DialogExample2 () =
        let code = """Spectrum.DialogTrigger [
    Spectrum.ActionButton "Publish"
    Spectrum.DialogClose <| fun close ->
        Spectrum.Dialog [
            Spectrum.Heading "Publish 3 pages"
            Spectrum.Divider ()
            Spectrum.Content [
                Html.text "Confirm publish"
            ]
            Spectrum.ButtonGroup [
                Spectrum.Button [
                    Button.variant ButtonVariant.Secondary
                    Button.onPress (fun _ -> close())
                    Button.content "Cancel"
                ]
                Spectrum.Button [
                    Button.variant ButtonVariant.CTA
                    Button.autoFocus true
                    Button.onPress (fun _ -> close())
                    Button.content "Confirm"
                ]
            ]
        ]
]"""

        Example "Content" code [] [
            Spectrum.DialogTrigger [
                Spectrum.ActionButton "Publish"
                Spectrum.DialogClose <| fun close ->
                    Spectrum.Dialog [
                        Spectrum.Heading "Publish 3 pages"
                        Spectrum.Divider ()
                        Spectrum.Content [
                            Html.text "Confirm publish"
                        ]
                        Spectrum.ButtonGroup [
                            Spectrum.Button [
                                Button.variant ButtonVariant.Secondary
                                Button.onPress (fun _ -> close())
                                Button.content "Cancel"
                            ]
                            Spectrum.Button [
                                Button.variant ButtonVariant.CTA
                                Button.autoFocus true
                                Button.onPress (fun _ -> close())
                                Button.content "Confirm"
                            ]
                        ]
                    ]
            ]
        ]

    [<ReactComponent>]
    let DialogExample3 () =
        let code = """Spectrum.DialogTrigger [
    DialogTrigger.isDismissable true
    DialogTrigger.children [
        Spectrum.ActionButton "Status"
        Spectrum.Dialog [
            Spectrum.Heading "Status"
            Spectrum.Divider ()
            Spectrum.Content [
                Html.text "Printer Status: Connected"
            ]
        ]
    ]
]"""

        Example "Dismissable" code [] [
            Spectrum.DialogTrigger [
                DialogTrigger.isDismissable true
                DialogTrigger.children [
                    Spectrum.ActionButton "Status"
                    Spectrum.Dialog [
                        Spectrum.Heading "Status"
                        Spectrum.Divider ()
                        Spectrum.Content [
                            Html.text "Printer Status: Connected"
                        ]
                    ]
                ]
            ]
        ]

    [<ReactComponent>]
    let DialogExample4 () =
        let code = """Spectrum.DialogTrigger [
    Spectrum.ActionButton "Register"
    Spectrum.DialogClose <| fun close ->
        Spectrum.Dialog [
            Dialog.size DialogSize.L
            Dialog.children [
                Spectrum.Heading [
                    Spectrum.Flex [
                        Flex.alignItems FlexAlignItems.Center
                        Flex.gap (DimValue.Size Size100)
                        Flex.children [
                            Spectrum.Icon.Book [ Icon.size IconSize.S ]
                            Spectrum.Text "Register for newsletter"
                        ]
                    ]
                ]
                Spectrum.Header [
                    Spectrum.Link [
                        Html.a [
                            prop.href "//example.com"
                            prop.target.blank
                            prop.children [ Html.text "What is this?" ]
                        ]
                    ]
                ]
                Spectrum.Divider ()
                Spectrum.Content [
                    Spectrum.Form [
                        Spectrum.TextField [
                            TextField.label "First Name"
                            TextField.placeholder "John"
                            TextField.autoFocus true
                        ]
                        Spectrum.TextField [
                            TextField.label "Last Name"
                            TextField.placeholder "Smith"
                        ]
                        Spectrum.TextField [
                            TextField.label "Street Address"
                            TextField.placeholder "123 Any Street"
                        ]
                        Spectrum.TextField [
                            TextField.label "City"
                            TextField.placeholder "San Francisco"
                        ]
                    ]
                ]
                Spectrum.Footer [
                    Spectrum.Checkbox [
                        Checkbox.content "I want to receive updates for exclusive offers in my area."
                    ]
                ]
                Spectrum.ButtonGroup [
                    Spectrum.Button [
                        Button.variant ButtonVariant.Secondary
                        Button.onPress (fun _ -> close())
                        Button.content "Cancel"
                    ]
                    Spectrum.Button [
                        Button.variant ButtonVariant.CTA
                        Button.onPress (fun _ -> close())
                        Button.content "Register"
                    ]
                ]
            ]
        ]
]"""

        Example "Complex UI" code [] [
            Spectrum.DialogTrigger [
                Spectrum.ActionButton "Register"
                Spectrum.DialogClose <| fun close ->
                    Spectrum.Dialog [
                        Dialog.size DialogSize.L
                        Dialog.children [
                            Spectrum.Heading [
                                Spectrum.Flex [
                                    Flex.alignItems FlexAlignItems.Center
                                    Flex.gap (DimValue.Size Size100)
                                    Flex.children [
                                        Spectrum.Icon.Book [ Icon.size IconSize.S ]
                                        Spectrum.Text "Register for newsletter"
                                    ]
                                ]
                            ]
                            Spectrum.Header [
                                Spectrum.Link [
                                    Html.a [
                                        prop.href "//example.com"
                                        prop.target.blank
                                        prop.children [ Html.text "What is this?" ]
                                    ]
                                ]
                            ]
                            Spectrum.Divider ()
                            Spectrum.Content [
                                Spectrum.Form [
                                    Spectrum.TextField [
                                        TextField.label "First Name"
                                        TextField.placeholder "John"
                                        TextField.autoFocus true
                                    ]
                                    Spectrum.TextField [
                                        TextField.label "Last Name"
                                        TextField.placeholder "Smith"
                                    ]
                                    Spectrum.TextField [
                                        TextField.label "Street Address"
                                        TextField.placeholder "123 Any Street"
                                    ]
                                    Spectrum.TextField [
                                        TextField.label "City"
                                        TextField.placeholder "San Francisco"
                                    ]
                                ]
                            ]
                            Spectrum.Footer [
                                Spectrum.Checkbox [
                                    Checkbox.content "I want to receive updates for exclusive offers in my area."
                                ]
                            ]
                            Spectrum.ButtonGroup [
                                Spectrum.Button [
                                    Button.variant ButtonVariant.Secondary
                                    Button.onPress (fun _ -> close())
                                    Button.content "Cancel"
                                ]
                                Spectrum.Button [
                                    Button.variant ButtonVariant.CTA
                                    Button.onPress (fun _ -> close())
                                    Button.content "Register"
                                ]
                            ]
                        ]
                    ]
            ]
        ]

    [<ReactComponent>]
    let DialogExample5 () =
        let code = """Spectrum.DialogTrigger [
    Spectrum.ActionButton "Upload"
    Spectrum.DialogClose <| fun close ->
        Spectrum.Dialog [
            Spectrum.Image [
                Image.slot "hero"
                Image.alt ""
                Image.src "https://i.imgur.com/Z7AzH2c.png"
                Image.objectFit ImageObjectFit.Cover
            ]
            Spectrum.Heading "Upload file"
            Spectrum.Divider ()
            Spectrum.Content "Are you sure you want to upload this file?"
            Spectrum.ButtonGroup [
                Spectrum.Button [
                    Button.variant ButtonVariant.Secondary
                    Button.onPress (fun _ -> close())
                    Button.content "Cancel"
                ]
                Spectrum.Button [
                    Button.variant ButtonVariant.CTA
                    Button.onPress (fun _ -> close())
                    Button.content "Confirm"
                ]
            ]
        ]
]"""

        Example "Hero image" code [] [
            Spectrum.DialogTrigger [
                Spectrum.ActionButton "Upload"
                Spectrum.DialogClose <| fun close ->
                    Spectrum.Dialog [
                        Spectrum.Image [
                            Image.slot "hero"
                            Image.alt ""
                            Image.src "https://i.imgur.com/Z7AzH2c.png"
                            Image.objectFit ImageObjectFit.Cover
                        ]
                        Spectrum.Heading "Upload file"
                        Spectrum.Divider ()
                        Spectrum.Content "Are you sure you want to upload this file?"
                        Spectrum.ButtonGroup [
                            Spectrum.Button [
                                Button.variant ButtonVariant.Secondary
                                Button.onPress (fun _ -> close())
                                Button.content "Cancel"
                            ]
                            Spectrum.Button [
                                Button.variant ButtonVariant.CTA
                                Button.onPress (fun _ -> close())
                                Button.content "Confirm"
                            ]
                        ]
                    ]
            ]
        ]

    [<ReactComponent>]
    let DialogExample6 () =
        let code = """let alertSave = fun (close) ->
    close()
    Browser.Dom.window.alert("Profile saved!")

let alertCancel = fun (close) ->
    close()
    Browser.Dom.window.alert("Profile not saved!")

Spectrum.DialogTrigger [
    Spectrum.ActionButton "Set Profile"
    Spectrum.DialogClose <| fun close ->
        Spectrum.Dialog [
            Spectrum.Heading "Profile"
            Spectrum.Divider ()
            Spectrum.ButtonGroup [
                Spectrum.Button [
                    Button.variant ButtonVariant.Secondary
                    Button.onPress (fun _ -> alertCancel(close))
                    Button.content "Cancel"
                ]
                Spectrum.Button [
                    Button.variant ButtonVariant.CTA
                    Button.autoFocus true
                    Button.onPress (fun _ -> alertSave(close))
                    Button.content "Save"
                ]
            ]
            Spectrum.Content [
                Spectrum.Form [
                    Spectrum.TextField [
                        TextField.label "Name"
                    ]
                    Spectrum.Checkbox [
                        Checkbox.content "Make private"
                    ]
                ]
            ]
        ]
]"""

        Example "Events" code [] [
            let alertSave = fun (close) ->
                close()
                Browser.Dom.window.alert("Profile saved!")

            let alertCancel = fun (close) ->
                close()
                Browser.Dom.window.alert("Profile not saved!")

            Spectrum.DialogTrigger [
                Spectrum.ActionButton "Set Profile"
                Spectrum.DialogClose <| fun close ->
                    Spectrum.Dialog [
                        Spectrum.Heading "Profile"
                        Spectrum.Divider ()
                        Spectrum.ButtonGroup [
                            Spectrum.Button [
                                Button.variant ButtonVariant.Secondary
                                Button.onPress (fun _ -> alertCancel(close))
                                Button.content "Cancel"
                            ]
                            Spectrum.Button [
                                Button.variant ButtonVariant.CTA
                                Button.autoFocus true
                                Button.onPress (fun _ -> alertSave(close))
                                Button.content "Save"
                            ]
                        ]
                        Spectrum.Content [
                            Spectrum.Form [
                                Spectrum.TextField [
                                    TextField.label "Name"
                                ]
                                Spectrum.Checkbox [
                                    Checkbox.content "Make private"
                                ]
                            ]
                        ]
                    ]
            ]
        ]

    [<ReactComponent>]
    let DialogDocs () =
        let description = [
            Html.text "Dialogs are windows containing contextual information, tasks, or workflows that appear over the user interface. Depending on the kind of Dialog, further interactions may be blocked until the Dialog is acknowledged."
            Html.br []
            Html.br []
            Html.text " Check the official "
            Html.a [
                prop.children [ Html.text "documentation" ]
                prop.href "https://react-spectrum.adobe.com/react-spectrum/Dialog.html"
            ]
            Html.text " for more details."
        ]

        ExampleGroup "Dialog" description [
            DialogExample1 ()
            DialogExample2 ()
            DialogExample3 ()
            DialogExample4 ()
            DialogExample5 ()
            DialogExample6 ()
        ]

    [<ReactComponent>]
    let DialogContainerExample1 () =
        let code = """let isOpen, setIsOpen = React.useState(false)

React.fragment [
    Spectrum.ActionButton [
        ActionButton.onPress (fun _ -> setIsOpen(true))
        ActionButton.children [
            Spectrum.Icon.Delete []
            Spectrum.Text "Delete"
        ]
    ]
    Spectrum.DialogContainer [
        DialogContainer.onDismiss (fun () -> setIsOpen(false))
        DialogContainer.children [
            if isOpen then
                Spectrum.AlertDialog [
                    AlertDialog.title "Delete"
                    AlertDialog.variant AlertDialogVariant.Destructive
                    AlertDialog.primaryActionLabel "Delete"
                    AlertDialog.content "Are you sure you want to delete this item?"
                ]
        ]
    ]
]"""

        Example "Default example" code [] [
            let isOpen, setIsOpen = React.useState(false)

            React.fragment [
                Spectrum.ActionButton [
                    ActionButton.onPress (fun _ -> setIsOpen(true))
                    ActionButton.children [
                        Spectrum.Icon.Delete []
                        Spectrum.Text "Delete"
                    ]
                ]
                Spectrum.DialogContainer [
                    DialogContainer.onDismiss (fun () -> setIsOpen(false))
                    DialogContainer.children [
                        if isOpen then
                            Spectrum.AlertDialog [
                                AlertDialog.title "Delete"
                                AlertDialog.variant AlertDialogVariant.Destructive
                                AlertDialog.primaryActionLabel "Delete"
                                AlertDialog.content "Are you sure you want to delete this item?"
                            ]
                    ]
                ]
            ]
        ]

    [<ReactComponent>]
    let EditDialog () =
        let dialog = Spectrum.useDialogContainer()
        Spectrum.Dialog [
            Spectrum.Heading "Edit"
            Spectrum.Divider ()
            Spectrum.Content [
                Spectrum.Form [
                    Form.children [
                        Spectrum.TextField [
                            TextField.autoFocus true
                            TextField.label "First Name"
                            TextField.defaultValue "John"
                        ]
                        Spectrum.TextField [
                            TextField.label "Last Name"
                            TextField.defaultValue "Smith"
                        ]
                    ]
                ]
            ]
            Spectrum.ButtonGroup [
                Spectrum.Button [
                    Button.variant ButtonVariant.Secondary
                    Button.onPress (fun _ -> dialog.dismiss())
                    Button.content "Cancel"
                ]
                Spectrum.Button [
                    Button.variant ButtonVariant.CTA
                    Button.onPress (fun _ -> dialog.dismiss())
                    Button.content "Save"
                ]
            ]
        ]

    [<ReactComponent>]
    let DialogContainerExample2 () =
        let code = """let dialog, setDialog = React.useState(JS.undefined<string>)
React.fragment [
    Spectrum.MenuTrigger [
        Spectrum.ActionButton [
            ActionButton.ariaLabel "Actions"
            ActionButton.children [
                Spectrum.Icon.More []
            ]
        ]
        Spectrum.Menu [
            Menu.onAction setDialog
            Menu.children [
                makeItem "edit" "Edit..."
                makeItem "delete" "Delete..."
            ]
        ]
    ]
    Spectrum.DialogContainer [
        DialogContainer.onDismiss (fun () -> setDialog(JS.undefined<string>))
        DialogContainer.type' DialogContainerType.Modal
        DialogContainer.children [
            match dialog with
            | "edit" -> EditDialog ()
            | "delete" ->
                Spectrum.AlertDialog [
                    AlertDialog.title "Delete"
                    AlertDialog.variant AlertDialogVariant.Destructive
                    AlertDialog.primaryActionLabel "Delete"
                    AlertDialog.content "Are you sure you want to delete this item?"
                ]
            | _ -> Html.none
        ]
    ]
]

// EditDialog.fs
[<ReactComponent>]
let EditDialog () =
    let dialog = Spectrum.useDialogContainer()
    Spectrum.Dialog [
        Spectrum.Heading "Edit"
        Spectrum.Divider ()
        Spectrum.Content [
            Spectrum.Form [
                Form.children [
                    Spectrum.TextField [
                        TextField.autoFocus true
                        TextField.label "First Name"
                        TextField.defaultValue "John"
                    ]
                    Spectrum.TextField [
                        TextField.label "Last Name"
                        TextField.defaultValue "Smith"
                    ]
                ]
            ]
        ]
        Spectrum.ButtonGroup [
            Spectrum.Button [
                Button.variant ButtonVariant.Secondary
                Button.onPress (fun _ -> dialog.dismiss())
                Button.content "Cancel"
            ]
            Spectrum.Button [
                Button.variant ButtonVariant.CTA
                Button.onPress (fun _ -> dialog.dismiss())
                Button.content "Save"
            ]
        ]
    ]
"""

        Example "Dialog triggered by a menu item" code [] [
            let dialog, setDialog = React.useState(JS.undefined<string>)
            React.fragment [
                Spectrum.MenuTrigger [
                    Spectrum.ActionButton [
                        ActionButton.ariaLabel "Actions"
                        ActionButton.children [
                            Spectrum.Icon.More []
                        ]
                    ]
                    Spectrum.Menu [
                        Menu.onAction setDialog
                        Menu.children [
                            makeItem "edit" "Edit..."
                            makeItem "delete" "Delete..."
                        ]
                    ]
                ]
                Spectrum.DialogContainer [
                    DialogContainer.onDismiss (fun () -> setDialog(JS.undefined<string>))
                    DialogContainer.type' DialogContainerType.Modal
                    DialogContainer.children [
                        match dialog with
                        | "edit" -> EditDialog ()
                        | "delete" ->
                            Spectrum.AlertDialog [
                                AlertDialog.title "Delete"
                                AlertDialog.variant AlertDialogVariant.Destructive
                                AlertDialog.primaryActionLabel "Delete"
                                AlertDialog.content "Are you sure you want to delete this item?"
                            ]
                        | _ -> Html.none
                    ]
                ]
            ]
        ]

    [<ReactComponent>]
    let DialogContainerDocs () =
        let description = [
            Html.text "A DialogContainer accepts a single Dialog as a child, and manages showing and hiding it in a modal. Useful in cases where there is no trigger element or when the trigger unmounts while the dialog is open."
            Html.br []
            Html.br []
            Html.text " Check the official "
            Html.a [
                prop.children [ Html.text "documentation" ]
                prop.href "https://react-spectrum.adobe.com/react-spectrum/DialogContainer.html"
            ]
            Html.text " for more details."
        ]

        ExampleGroup "DialogContainer" description [
            DialogContainerExample1 ()
            DialogContainerExample2 ()
        ]

    [<ReactComponent>]
    let DialogTriggerExample1 () =
        let code = """Spectrum.DialogTrigger [
    DialogTrigger.type' DialogTriggerType.Popover
    DialogTrigger.children [
        Spectrum.ActionButton "Disk Status"
        Spectrum.Dialog [
            Spectrum.Heading "C://"
            Spectrum.Divider ()
            Spectrum.Content [
                Spectrum.Text "50% disk space remaining."
            ]
        ]
    ]
]"""

        Example "Default example" code [] [
            Spectrum.DialogTrigger [
                DialogTrigger.type' DialogTriggerType.Popover
                DialogTrigger.children [
                    Spectrum.ActionButton "Disk Status"
                    Spectrum.Dialog [
                        Spectrum.Heading "C://"
                        Spectrum.Divider ()
                        Spectrum.Content [
                            Spectrum.Text "50% disk space remaining."
                        ]
                    ]
                ]
            ]
        ]

    [<ReactComponent>]
    let DialogTriggerExample2 () =
        let code = """Spectrum.DialogTrigger [
    DialogTrigger.type' DialogTriggerType.Tray
    DialogTrigger.children [
        Spectrum.ActionButton "Check messages"
        Spectrum.Dialog [
            Spectrum.Heading "New messages"
            Spectrum.Divider ()
            Spectrum.Content [
                Spectrum.Text "You have 5 new messages."
            ]
        ]
    ]
]"""

        Example "Tray dialog" code [] [
            Spectrum.DialogTrigger [
                DialogTrigger.type' DialogTriggerType.Tray
                DialogTrigger.children [
                    Spectrum.ActionButton "Check messages"
                    Spectrum.Dialog [
                        Spectrum.Heading "New messages"
                        Spectrum.Divider ()
                        Spectrum.Content [
                            Spectrum.Text "You have 5 new messages."
                        ]
                    ]
                ]
            ]
        ]

    [<ReactComponent>]
    let DialogTriggerExample3 () =
        let code = """let ref = React.useRef<Browser.Types.HTMLElement option>(None)

Spectrum.Flex [
    Flex.gap (DimValue.Size Size1000)
    Flex.children [
        Spectrum.DialogTrigger [
            DialogTrigger.type' DialogTriggerType.Popover
            DialogTrigger.targetRef ref
            DialogTrigger.children [
                Spectrum.ActionButton "Trigger"
                Spectrum.Dialog [
                    Spectrum.Heading "The heading"
                    Spectrum.Divider ()
                    Spectrum.Content [
                        Spectrum.Text "This is a popover anchored to the span"
                    ]
                ]
            ]
        ]
        Html.span [
            prop.ref ref
            prop.style [
                style.width 140
                style.textAlign.center
            ]
            prop.children [
                Html.text "Popover appears over here"
            ]
        ]
    ]
]"""

        Example "Dialog anchor" code [] [
            let ref = React.useRef<Browser.Types.HTMLElement option>(None)

            Spectrum.Flex [
                Flex.gap (DimValue.Size Size1000)
                Flex.children [
                    Spectrum.DialogTrigger [
                        DialogTrigger.type' DialogTriggerType.Popover
                        DialogTrigger.targetRef ref
                        DialogTrigger.children [
                            Spectrum.ActionButton "Trigger"
                            Spectrum.Dialog [
                                Spectrum.Heading "The heading"
                                Spectrum.Divider ()
                                Spectrum.Content [
                                    Spectrum.Text "This is a popover anchored to the span"
                                ]
                            ]
                        ]
                    ]
                    Html.span [
                        prop.ref ref
                        prop.style [
                            style.width 140
                            style.textAlign.center
                        ]
                        prop.children [
                            Html.text "Popover appears over here"
                        ]
                    ]
                ]
            ]
        ]

    [<ReactComponent>]
    let DialogTriggerExample4 () =
        let code = """Spectrum.DialogTrigger [
    DialogTrigger.type' DialogTriggerType.Popover
    DialogTrigger.placement Placement.RightTop
    DialogTrigger.children [
        Spectrum.ActionButton "Trigger"
        Spectrum.Dialog [
            Spectrum.Heading "The Heading"
            Spectrum.Divider ()
            Spectrum.Content [
                Spectrum.Text "This is a popover placed to the right of its trigger and offset so the arrow is at the top of the dialog."
            ]
        ]
    ]
]"""

        Example "Placement" code [] [
            Spectrum.DialogTrigger [
                DialogTrigger.type' DialogTriggerType.Popover
                DialogTrigger.placement Placement.RightTop
                DialogTrigger.children [
                    Spectrum.ActionButton "Trigger"
                    Spectrum.Dialog [
                        Spectrum.Heading "The Heading"
                        Spectrum.Divider ()
                        Spectrum.Content [
                            Spectrum.Text "This is a popover placed to the right of its trigger and offset so the arrow is at the top of the dialog."
                        ]
                    ]
                ]
            ]
        ]

    [<ReactComponent>]
    let DialogTriggerExample5 () =
        let code = """Spectrum.DialogTrigger [
    DialogTrigger.type' DialogTriggerType.Popover
    DialogTrigger.placement Placement.Top
    DialogTrigger.offset 50
    DialogTrigger.children [
        Spectrum.ActionButton "Trigger"
        Spectrum.Dialog [
            Spectrum.Heading "Offset"
            Spectrum.Divider ()
            Spectrum.Content [
                Spectrum.Text "Offset by an additional 50px."
            ]
        ]
    ]
]"""

        Example "Offset and cross offset" code [] [
            Spectrum.DialogTrigger [
                DialogTrigger.type' DialogTriggerType.Popover
                DialogTrigger.placement Placement.Top
                DialogTrigger.offset 50
                DialogTrigger.children [
                    Spectrum.ActionButton "Trigger"
                    Spectrum.Dialog [
                        Spectrum.Heading "Offset"
                        Spectrum.Divider ()
                        Spectrum.Content [
                            Spectrum.Text "Offset by an additional 50px."
                        ]
                    ]
                ]
            ]
        ]

    [<ReactComponent>]
    let DialogTriggerExample6 () =
        let code = """let isOpen, setIsOpen = React.useState(false)

Spectrum.Flex [
    Flex.alignItems FlexAlignItems.Center
    Flex.gap (DimValue.Size Size100)
    Flex.children [
        Spectrum.DialogTrigger [
            DialogTrigger.type' DialogTriggerType.Popover
            DialogTrigger.placement Placement.Top
            DialogTrigger.onOpenChange setIsOpen
            DialogTrigger.children [
                Spectrum.ActionButton "Whispers"
                Spectrum.Dialog [
                    Spectrum.Heading "Whispers and DMs"
                    Spectrum.Divider ()
                    Spectrum.Content [
                        Spectrum.Text "You have 0 new messages."
                    ]
                ]
            ]
        ]
        Spectrum.Text $"Current open state: {isOpen}"
    ]
]"""

        Example "Events" code [] [
            let isOpen, setIsOpen = React.useState(false)

            Spectrum.Flex [
                Flex.alignItems FlexAlignItems.Center
                Flex.gap (DimValue.Size Size100)
                Flex.children [
                    Spectrum.DialogTrigger [
                        DialogTrigger.type' DialogTriggerType.Popover
                        DialogTrigger.placement Placement.Top
                        DialogTrigger.onOpenChange setIsOpen
                        DialogTrigger.children [
                            Spectrum.ActionButton "Whispers"
                            Spectrum.Dialog [
                                Spectrum.Heading "Whispers and DMs"
                                Spectrum.Divider ()
                                Spectrum.Content [
                                    Spectrum.Text "You have 0 new messages."
                                ]
                            ]
                        ]
                    ]
                    Spectrum.Text $"Current open state: {isOpen}"
                ]
            ]
        ]

    [<ReactComponent>]
    let DialogTriggerDocs () =
        let description = [
            Html.text "DialogTrigger serves as a wrapper around a Dialog and its associated trigger, linking the Dialog's open state with the trigger's press state. Additionally, it allows you to customize the type and positioning of the Dialog."
            Html.br []
            Html.br []
            Html.text " Check the official "
            Html.a [
                prop.children [ Html.text "documentation" ]
                prop.href "https://react-spectrum.adobe.com/react-spectrum/DialogTrigger.html"
            ]
            Html.text " for more details."
        ]

        ExampleGroup "DialogTrigger" description [
            DialogTriggerExample1 ()
            DialogTriggerExample2 ()
            DialogTriggerExample3 ()
            DialogTriggerExample4 ()
            DialogTriggerExample5 ()
            DialogTriggerExample6 ()
        ]

    [<ReactComponent>]
    let TooltipExample1 () =
        let code = """Spectrum.TooltipTrigger [
    TooltipTrigger.delay 0
    TooltipTrigger.children [
        Spectrum.ActionButton [
            ActionButton.ariaLabel "Edit Name"
            ActionButton.children [
                Spectrum.Icon.Edit []
            ]
        ]
        Spectrum.Tooltip [
            Tooltip.content "Change Name"
        ]
    ]
]"""

        Example "Default example" code [] [
            Spectrum.TooltipTrigger [
                TooltipTrigger.delay 0
                TooltipTrigger.children [
                    Spectrum.ActionButton [
                        ActionButton.ariaLabel "Edit Name"
                        ActionButton.children [
                            Spectrum.Icon.Edit []
                        ]
                    ]
                    Spectrum.Tooltip [
                        Tooltip.content "Change Name"
                    ]
                ]
            ]
        ]

    [<ReactComponent>]
    let TooltipExample2 () =
        let code = """Spectrum.Flex [
    Flex.gap (DimValue.Size Size200)
    Flex.children [
        Spectrum.TooltipTrigger [
            Spectrum.ActionButton "Hover me"
            Spectrum.Tooltip "I come up after a delay."
        ]
        Spectrum.TooltipTrigger [
            Spectrum.ActionButton "Then hover me"
            Spectrum.Tooltip "If you did it quickly, I appear immediately."
        ]
    ]
]"""

        Example "Warmup / Cooldown" code [] [
            Spectrum.Flex [
                Flex.gap (DimValue.Size Size200)
                Flex.children [
                    Spectrum.TooltipTrigger [
                        Spectrum.ActionButton "Hover me"
                        Spectrum.Tooltip "I come up after a delay."
                    ]
                    Spectrum.TooltipTrigger [
                        Spectrum.ActionButton "Then hover me"
                        Spectrum.Tooltip "If you did it quickly, I appear immediately."
                    ]
                ]
            ]
        ]

    [<ReactComponent>]
    let TooltipExample3 () =
        let code = """Spectrum.TooltipTrigger [
    TooltipTrigger.placement TooltipPlacement.End
    TooltipTrigger.children [
        Spectrum.ActionButton [
            ActionButton.ariaLabel "Foo"
            ActionButton.content "Placement"
        ]
        Spectrum.Tooltip "In left-to-right, this is on the right. In right-to-left, this is on the left."
    ]
]"""

        Example "Tooltip placement" code [] [
            Spectrum.TooltipTrigger [
                TooltipTrigger.placement TooltipPlacement.End
                TooltipTrigger.children [
                    Spectrum.ActionButton [
                        ActionButton.ariaLabel "Foo"
                        ActionButton.content "Placement"
                    ]
                    Spectrum.Tooltip "In left-to-right, this is on the right. In right-to-left, this is on the left."
                ]
            ]
        ]

    [<ReactComponent>]
    let TooltipExample4 () =
        let code = """Spectrum.TooltipTrigger [
    TooltipTrigger.offset 50
    TooltipTrigger.children [
        Spectrum.ActionButton "Offset"
        Spectrum.Tooltip "This will shift up..."
    ]
]"""

        Example "Offset and cross offset" code [] [
            Spectrum.TooltipTrigger [
                TooltipTrigger.offset 50
                TooltipTrigger.children [
                    Spectrum.ActionButton "Offset"
                    Spectrum.Tooltip "This will shift up..."
                ]
            ]
        ]

    [<ReactComponent>]
    let TooltipExample5 () =
        let code = """Spectrum.Flex [
    Flex.direction FlexDirection.Row
    Flex.gap (DimValue.Size Size100)
    Flex.children [
        Spectrum.TooltipTrigger [
            Spectrum.ActionButton [
                ActionButton.ariaLabel "Approve"
                ActionButton.children [
                    Spectrum.Icon.ThumbUp []
                ]
            ]
            Spectrum.Tooltip [
                Tooltip.variant TooltipVariant.Positive
                Tooltip.showIcon true
                Tooltip.content "Approve workflow"
            ]
        ]
        Spectrum.TooltipTrigger [
            Spectrum.ActionButton [
                ActionButton.ariaLabel "Information"
                ActionButton.children [
                    Spectrum.Icon.Question []
                ]
            ]
            Spectrum.Tooltip [
                Tooltip.variant TooltipVariant.Info
                Tooltip.showIcon true
                Tooltip.content "Show the more information menu"
            ]
        ]
        Spectrum.TooltipTrigger [
            Spectrum.ActionButton [
                ActionButton.ariaLabel "Danger"
                ActionButton.children [
                    Spectrum.Icon.Delete []
                ]
            ]
            Spectrum.Tooltip [
                Tooltip.variant TooltipVariant.Negative
                Tooltip.showIcon true
                Tooltip.content "Dangerous action"
            ]
        ]
    ]
]"""

        Example "Visual variants" code [] [
            Spectrum.Flex [
                Flex.direction FlexDirection.Row
                Flex.gap (DimValue.Size Size100)
                Flex.children [
                    Spectrum.TooltipTrigger [
                        Spectrum.ActionButton [
                            ActionButton.ariaLabel "Approve"
                            ActionButton.children [
                                Spectrum.Icon.ThumbUp []
                            ]
                        ]
                        Spectrum.Tooltip [
                            Tooltip.variant TooltipVariant.Positive
                            Tooltip.showIcon true
                            Tooltip.content "Approve workflow"
                        ]
                    ]
                    Spectrum.TooltipTrigger [
                        Spectrum.ActionButton [
                            ActionButton.ariaLabel "Information"
                            ActionButton.children [
                                Spectrum.Icon.Question []
                            ]
                        ]
                        Spectrum.Tooltip [
                            Tooltip.variant TooltipVariant.Info
                            Tooltip.showIcon true
                            Tooltip.content "Show the more information menu"
                        ]
                    ]
                    Spectrum.TooltipTrigger [
                        Spectrum.ActionButton [
                            ActionButton.ariaLabel "Danger"
                            ActionButton.children [
                                Spectrum.Icon.Delete []
                            ]
                        ]
                        Spectrum.Tooltip [
                            Tooltip.variant TooltipVariant.Negative
                            Tooltip.showIcon true
                            Tooltip.content "Dangerous action"
                        ]
                    ]
                ]
            ]
        ]

    [<ReactComponent>]
    let TooltipDocs () =
        let description = [
            Html.text "Display container for Tooltip content. Has a directional arrow dependent on its placement."
            Html.br []
            Html.br []
            Html.text " Check the official "
            Html.a [
                prop.children [ Html.text "documentation" ]
                prop.href "https://react-spectrum.adobe.com/react-spectrum/Tooltip.html"
            ]
            Html.text " for more details."
        ]

        ExampleGroup "Tooltip" description [
            TooltipExample1 ()
            TooltipExample2 ()
            TooltipExample3 ()
            TooltipExample4 ()
            TooltipExample5 ()
        ]