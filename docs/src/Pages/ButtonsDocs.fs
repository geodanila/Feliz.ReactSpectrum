namespace Pages

open Feliz.ReactSpectrum
open Feliz
open Fable.Core
open Fable.Core.JsInterop

[<AutoOpen>]
module GeneralDocs =

    [<ReactComponent>]
    let ActionButtonExample1 () =
        let code = """Spectrum.ActionButton [
    ActionButton.content "Press me"
    ActionButton.onPress (fun ev ->
        Browser.Dom.window.alert("I was clicked!")
    )
]"""
        let description = []

        Example "Default example" code description [
            Spectrum.ActionButton [
                ActionButton.content "Press me"
                ActionButton.onPress (fun ev ->
                    Browser.Dom.window.alert("I was clicked!")
                )
            ]
        ]

    [<ReactComponent>]
    let ActionButtonExample2 () =
        let code = """Spectrum.ActionButton [
    ActionButton.children [
        Spectrum.Icon.Airplane [
            Icon.size IconSize.M
        ]
        Spectrum.Text "I have an airplane icon"
    ]
    ActionButton.onPress (fun ev ->
        Browser.Dom.console.log("Event: ", ev)
    )
]"""
        let description = []

        Example "Adding an icon" code description [
            Spectrum.ActionButton [
                ActionButton.children [
                    Spectrum.Icon.Airplane [
                        Icon.size IconSize.M
                    ]
                    Spectrum.Text "I have an airplane icon"
                ]
                ActionButton.onPress (fun ev ->
                    Browser.Dom.console.log("Event: ", ev)
                )
            ]
        ]

    [<ReactComponent>]
    let ActionButtonExample3 () =
        let code = """Spectrum.ActionButton [
    ActionButton.ariaLabel "Edit"
    ActionButton.children [
        Spectrum.Icon.Edit [
            Icon.size IconSize.S
        ]
    ]
    ActionButton.onPress (fun ev ->
        Browser.Dom.console.log("Event: ", ev)
    )
]"""
        let description = []

        Example "Icon-only" code description [
            Spectrum.ActionButton [
                ActionButton.ariaLabel "Edit"
                ActionButton.children [
                    Spectrum.Icon.Edit [
                        Icon.size IconSize.S
                    ]
                ]
                ActionButton.onPress (fun ev ->
                    Browser.Dom.console.log("Event: ", ev)
                )
            ]
        ]

    [<ReactComponent>]
    let ActionButtonDocs () =
        let description = [
            Html.text "ActionButtons allow users to perform an action. They’re used for similar, task-based options within a workflow, and are ideal for interfaces where buttons aren’t meant to draw a lot of attention."
            Html.br []
            Html.br []
            Html.text " Check the official "
            Html.a [
                prop.children [ Html.text "documentation" ]
                prop.href "https://react-spectrum.adobe.com/react-spectrum/ActionButton.html"
            ]
            Html.text " for more details."
        ]

        ExampleGroup "ActionButton" description [
            ActionButtonExample1 ()
            ActionButtonExample2 ()
            ActionButtonExample3 ()
        ]

    [<ReactComponent>]
    let ActionGroupExample1 () =
        let code = """let action, setAction = React.useState("")

React.fragment [
    Spectrum.ActionGroup [
        ActionGroup.onAction setAction
        ActionGroup.children [
            Spectrum.Item [
                Item.key "add"
                Item.title "Add"
            ]
            Spectrum.Item [
                Item.key "delete"
                Item.title "Delete"
            ]
            Spectrum.Item [
                Item.key "edit"
                Item.title "Edit"
            ]
        ]
    ]
    Html.p $"Action {action}"
]"""
        let description = []

        Example "Default example" code description [
            let action, setAction = React.useState("")

            React.fragment [
                Spectrum.ActionGroup [
                    ActionGroup.onAction setAction
                    ActionGroup.children [
                        Spectrum.Item [
                            Item.key "add"
                            Item.title "Add"
                        ]
                        Spectrum.Item [
                            Item.key "delete"
                            Item.title "Delete"
                        ]
                        Spectrum.Item [
                            Item.key "edit"
                            Item.title "Edit"
                        ]
                    ]
                ]
                Html.p $"Action {action}"
            ]
        ]

    [<ReactComponent>]
    let ActionGroupExample2 () =
        let code = """let selected, setSelected = React.useState([ "list" ])

React.fragment [
    Spectrum.ActionGroup [
        ActionGroup.selectionMode SelectionMode.Multiple
        ActionGroup.selectedKeys selected
        ActionGroup.onSelectionChange(
            function
            | Set keys -> setSelected keys
            | _ -> ()
        )
        ActionGroup.children [
            Spectrum.Item [
                Item.key "grid"
                Item.children [ Spectrum.Text "Grid view" ]
            ]
            Spectrum.Item [
                Item.key "list"
                Item.children [ Spectrum.Text "List view" ]
            ]
            Spectrum.Item [
                Item.key "gallery"
                Item.children [ Spectrum.Text "Gallery view" ]
            ]
        ]
    ]
    Spectrum.Text $"Current selection (controller): %A{selected}"
]"""
        let description = []

        Example "Multiple selection" code description [
            let selected, setSelected = React.useState([ "list" ])

            React.fragment [
                Spectrum.ActionGroup [
                    ActionGroup.selectionMode SelectionMode.Multiple
                    ActionGroup.selectedKeys selected
                    ActionGroup.onSelectionChange(
                        function
                        | Set keys -> setSelected keys
                        | _ -> ()
                    )
                    ActionGroup.children [
                        Spectrum.Item [
                            Item.key "grid"
                            Item.children [ Spectrum.Text "Grid view" ]
                        ]
                        Spectrum.Item [
                            Item.key "list"
                            Item.children [ Spectrum.Text "List view" ]
                        ]
                        Spectrum.Item [
                            Item.key "gallery"
                            Item.children [ Spectrum.Text "Gallery view" ]
                        ]
                    ]
                ]
                Spectrum.Text $"Current selection (controller): %A{selected |> Array.ofList}"
            ]
        ]

    [<ReactComponent>]
    let ActionGroupExample3 () =
        let code = """Spectrum.ActionGroup [
    ActionGroup.children [
        Spectrum.Item [
            Item.key "edit2"
            Item.children [
                Spectrum.Icon.Draw []
                Spectrum.Text "Edit"
            ]
        ]
        Spectrum.Item [
            Item.key "copy2"
            Item.children [
                Spectrum.Icon.Copy []
                Spectrum.Text "Copy"
            ]
        ]
        Spectrum.Item [
            Item.key "delete2"
            Item.children [
                Spectrum.Icon.Delete []
                Spectrum.Text "Delete"
            ]
        ]
    ]
]"""
        let description = []

        Example "With icons" code description [
            Spectrum.ActionGroup [
                ActionGroup.children [
                    Spectrum.Item [
                        Item.key "edit2"
                        Item.children [
                            Spectrum.Icon.Draw []
                            Spectrum.Text "Edit"
                        ]
                    ]
                    Spectrum.Item [
                        Item.key "copy2"
                        Item.children [
                            Spectrum.Icon.Copy []
                            Spectrum.Text "Copy"
                        ]
                    ]
                    Spectrum.Item [
                        Item.key "delete2"
                        Item.children [
                            Spectrum.Icon.Delete []
                            Spectrum.Text "Delete"
                        ]
                    ]
                ]
            ]
        ]

    [<ReactComponent>]
    let ActionGroupExample4 () =
        let code = """let items = [
    {| label = "React"; name = "_React" |}
    {| label = "Add"; name = "_Add" |}
    {| label = "Delete"; name = "_Delete" |}
]

Spectrum.ActionGroup [
    ActionGroup.items items
    ActionGroup.isEmphasized true
    ActionGroup.selectionMode SelectionMode.Single
    ActionGroup.onSelectionChange (
        function
        | Set [ item ] -> Browser.Dom.console.log("Selection: ", item)
        | _ -> ()
    )
    ActionGroup.itemTemplate (fun (item: {| label: string; name: string |}) ->
        Spectrum.Item [
            Item.key item.name
            Item.children [ Spectrum.Text item.label ]
        ]
    )
]"""
        let description = []

        Example "Using an item template" code description [
            let items = [
                {| label = "React"; name = "_React" |}
                {| label = "Add"; name = "_Add" |}
                {| label = "Delete"; name = "_Delete" |}
            ]

            Spectrum.ActionGroup [
                ActionGroup.items items
                ActionGroup.isEmphasized true
                ActionGroup.selectionMode SelectionMode.Single
                ActionGroup.onSelectionChange (
                    function
                    | Set [ item ] -> Browser.Dom.console.log("Selection: ", item)
                    | _ -> ()
                )
                ActionGroup.itemTemplate (fun (item: {| label: string; name: string |}) ->
                    Spectrum.Item [
                        Item.key item.name
                        Item.children [ Spectrum.Text item.label ]
                    ]
                )
            ]
        ]

    [<ReactComponent>]
    let ActionGroupExample5 () =
        let code = """Spectrum.ActionGroup [
    ActionGroup.overflowMode ActionGroupOverflowMode.Collapse
    ActionGroup.maxWidth 250
    ActionGroup.children [
        Spectrum.Item [
            Item.key "edit"
            Item.textValue "Edit"
            Item.children [
                Spectrum.Icon.Draw []
                Spectrum.Text "Edit"
            ]
        ]
        Spectrum.Item [
            Item.key "copy"
            Item.textValue "Copy"
            Item.children [
                Spectrum.Icon.Copy []
                Spectrum.Text "Copy"
            ]
        ]
        Spectrum.Item [
            Item.key "delete"
            Item.textValue "Delete"
            Item.children [
                Spectrum.Icon.Delete []
                Spectrum.Text "Delete"
            ]
        ]
        Spectrum.Item [
            Item.key "move"
            Item.textValue "Move"
            Item.children [
                Spectrum.Icon.Move []
                Spectrum.Text "Move"
            ]
        ]
        Spectrum.Item [
            Item.key "duplicate"
            Item.textValue "Duplicate"
            Item.children [
                Spectrum.Icon.Duplicate []
                Spectrum.Text "Duplicate"
            ]
        ]
    ]
]"""
        let description = []

        Example "Collapsing buttons" code description [
            Spectrum.ActionGroup [
                ActionGroup.overflowMode ActionGroupOverflowMode.Collapse
                ActionGroup.maxWidth 250
                ActionGroup.children [
                    Spectrum.Item [
                        Item.key "edit"
                        Item.textValue "Edit"
                        Item.children [
                            Spectrum.Icon.Draw []
                            Spectrum.Text "Edit"
                        ]
                    ]
                    Spectrum.Item [
                        Item.key "copy"
                        Item.textValue "Copy"
                        Item.children [
                            Spectrum.Icon.Copy []
                            Spectrum.Text "Copy"
                        ]
                    ]
                    Spectrum.Item [
                        Item.key "delete"
                        Item.textValue "Delete"
                        Item.children [
                            Spectrum.Icon.Delete []
                            Spectrum.Text "Delete"
                        ]
                    ]
                    Spectrum.Item [
                        Item.key "move"
                        Item.textValue "Move"
                        Item.children [
                            Spectrum.Icon.Move []
                            Spectrum.Text "Move"
                        ]
                    ]
                    Spectrum.Item [
                        Item.key "duplicate"
                        Item.textValue "Duplicate"
                        Item.children [
                            Spectrum.Icon.Duplicate []
                            Spectrum.Text "Duplicate"
                        ]
                    ]
                ]
            ]
        ]

    [<ReactComponent>]
    let ActionGroupExample6 () =
        let code = """Spectrum.ActionGroup [
    ActionGroup.ariaLabel "Text style"
    ActionGroup.overflowMode ActionGroupOverflowMode.Collapse
    ActionGroup.selectionMode SelectionMode.Multiple
    ActionGroup.isEmphasized true
    ActionGroup.summaryIcon (Spectrum.Icon.TextStyle [])
    ActionGroup.maxWidth 100
    ActionGroup.children [
        Spectrum.Item [
            Item.key "bold"
            Item.textValue "Bold"
            Item.children [
                Spectrum.Icon.TagBold []
                Spectrum.Text "Bold"
            ]
        ]
        Spectrum.Item [
            Item.key "italic"
            Item.textValue "Italic"
            Item.children [
                Spectrum.Icon.TagItalic []
                Spectrum.Text "Italic"
            ]
        ]
        Spectrum.Item [
            Item.key "underline"
            Item.textValue "Underline"
            Item.children [
                Spectrum.Icon.TagUnderline []
                Spectrum.Text "Underline"
            ]
        ]
        Spectrum.Item [
            Item.key "strike"
            Item.textValue "Strikethrough"
            Item.children [
                Spectrum.Icon.TextStrikethrough []
                Spectrum.Text "Strikethrough"
            ]
        ]
    ]
]"""
        let description = []

        Example "Collapsed with multiple selection" code description [
            Spectrum.ActionGroup [
                ActionGroup.ariaLabel "Text style"
                ActionGroup.overflowMode ActionGroupOverflowMode.Collapse
                ActionGroup.selectionMode SelectionMode.Multiple
                ActionGroup.isEmphasized true
                ActionGroup.summaryIcon (Spectrum.Icon.TextStyle [])
                ActionGroup.maxWidth 100
                ActionGroup.children [
                    Spectrum.Item [
                        Item.key "bold"
                        Item.textValue "Bold"
                        Item.children [
                            Spectrum.Icon.TagBold []
                            Spectrum.Text "Bold"
                        ]
                    ]
                    Spectrum.Item [
                        Item.key "italic"
                        Item.textValue "Italic"
                        Item.children [
                            Spectrum.Icon.TagItalic []
                            Spectrum.Text "Italic"
                        ]
                    ]
                    Spectrum.Item [
                        Item.key "underline"
                        Item.textValue "Underline"
                        Item.children [
                            Spectrum.Icon.TagUnderline []
                            Spectrum.Text "Underline"
                        ]
                    ]
                    Spectrum.Item [
                        Item.key "strike"
                        Item.textValue "Strikethrough"
                        Item.children [
                            Spectrum.Icon.TextStrikethrough []
                            Spectrum.Text "Strikethrough"
                        ]
                    ]
                ]
            ]
        ]

    [<ReactComponent>]
    let ActionGroupDocs () =
        let description = [
            Html.text "An ActionGroup is a grouping of ActionButtons that are related to one another."
            Html.br []
            Html.br []
            Html.text " Check the official "
            Html.a [
                prop.children [ Html.text "documentation" ]
                prop.href "https://react-spectrum.adobe.com/react-spectrum/ActionGroup.html"
            ]
            Html.text " for more details."
        ]

        ExampleGroup "ActionGroup" description [
            ActionGroupExample1 ()
            ActionGroupExample2 ()
            ActionGroupExample3 ()
            ActionGroupExample4 ()
            ActionGroupExample5 ()
            ActionGroupExample6 ()
        ]

    [<ReactComponent>]
    let ButtonExample1 () =
        let code = """Spectrum.Button [
    Button.variant ButtonVariant.CTA
    Button.content "Save"
]"""
        let description = []

        Example "Default example" code description [
            Spectrum.Button [
                Button.variant ButtonVariant.CTA
                Button.content "Save"
            ]
        ]

    [<ReactComponent>]
    let ButtonExample2 () =
        let code = """Spectrum.Button [
    Button.variant ButtonVariant.Primary
    Button.children [
        Spectrum.Icon.Bell []
        Spectrum.Text "Icon + Label"
    ]
]"""
        let description = []

        Example "Icon + label" code description [
            Spectrum.Button [
                Button.variant ButtonVariant.Primary
                Button.children [
                    Spectrum.Icon.Bell []
                    Spectrum.Text "Icon + Label"
                ]
            ]
        ]

    [<ReactComponent>]
    let ButtonExample3 () =
        let code = """Spectrum.Flex [
    Flex.direction FlexDirection.Row
    Flex.alignItems FlexAlignItems.Center
    Flex.gap (DimValue.Size Size100)
    Flex.children [
        Spectrum.Button [
            Button.variant ButtonVariant.CTA
            Button.content "CTA"
        ]
        Spectrum.Button [
            Button.variant ButtonVariant.Primary
            Button.content "Primary"
        ]
        Spectrum.Button [
            Button.variant ButtonVariant.Secondary
            Button.content "Secondary"
        ]
        Spectrum.Button [
            Button.variant ButtonVariant.Negative
            Button.content "Negative"
        ]
        Spectrum.View [
            View.backgroundColor (BackgroundColorValue.Color Green400)
            View.padding 20
            View.children [
                Spectrum.Button [
                    Button.variant ButtonVariant.OverBackground
                    Button.content "Over background"
                ]
            ]
        ]
    ]
]"""
        let description = []

        Example "Button variants" code description [
            Spectrum.Flex [
                Flex.direction FlexDirection.Row
                Flex.alignItems FlexAlignItems.Center
                Flex.gap (DimValue.Size Size100)
                Flex.children [
                    Spectrum.Button [
                        Button.variant ButtonVariant.CTA
                        Button.content "CTA"
                    ]
                    Spectrum.Button [
                        Button.variant ButtonVariant.Primary
                        Button.content "Primary"
                    ]
                    Spectrum.Button [
                        Button.variant ButtonVariant.Secondary
                        Button.content "Secondary"
                    ]
                    Spectrum.Button [
                        Button.variant ButtonVariant.Negative
                        Button.content "Negative"
                    ]
                    Spectrum.View [
                        View.backgroundColor (BackgroundColorValue.Color Green400)
                        View.padding 20
                        View.children [
                            Spectrum.Button [
                                Button.variant ButtonVariant.OverBackground
                                Button.content "Over background"
                            ]
                        ]
                    ]
                ]
            ]
        ]

    [<ReactComponent>]
    let ButtonDocs () =
        let description = [
            Html.text "Buttons allow users to perform an action or to navigate to another page. They have multiple styles for various needs, and are ideal for calling attention to where a user needs to do something in order to move forward in a flow."
            Html.br []
            Html.br []
            Html.text " Check the official "
            Html.a [
                prop.children [ Html.text "documentation" ]
                prop.href "https://react-spectrum.adobe.com/react-spectrum/Button.html"
            ]
            Html.text " for more details."
        ]

        ExampleGroup "Button" description [
            ButtonExample1 ()
            ButtonExample2 ()
            ButtonExample3 ()
        ]

    [<ReactComponent>]
    let ButtonGroupExample1 () =
        let code = """Spectrum.ButtonGroup [
    Spectrum.Button [
        Button.variant ButtonVariant.Secondary
        Button.content "No, thanks"
    ]
    Spectrum.Button [
        Button.variant ButtonVariant.Secondary
        Button.content "Remind me later"
    ]
    Spectrum.Button [
        Button.variant ButtonVariant.Primary
        Button.content "Rate now"
    ]
]"""
        let description = []

        Example "Default example" code description [
            Spectrum.ButtonGroup [
                Spectrum.Button [
                    Button.variant ButtonVariant.Secondary
                    Button.content "No, thanks"
                ]
                Spectrum.Button [
                    Button.variant ButtonVariant.Secondary
                    Button.content "Remind me later"
                ]
                Spectrum.Button [
                    Button.variant ButtonVariant.Primary
                    Button.content "Rate now"
                ]
            ]
        ]

    [<ReactComponent>]
    let ButtonGroupExample2 () =
        let code = """Spectrum.ButtonGroup [
    ButtonGroup.orientation Orientation.Vertical
    ButtonGroup.children [
        Spectrum.Button [
            Button.variant ButtonVariant.Secondary
            Button.content "No, thanks"
        ]
        Spectrum.Button [
            Button.variant ButtonVariant.Secondary
            Button.content "Remind me later"
        ]
        Spectrum.Button [
            Button.variant ButtonVariant.Primary
            Button.content "Rate now"
        ]
    ]
]"""
        let description = []

        Example "Orientation" code description [
            Spectrum.ButtonGroup [
                ButtonGroup.orientation Orientation.Vertical
                ButtonGroup.children [
                    Spectrum.Button [
                        Button.variant ButtonVariant.Secondary
                        Button.content "No, thanks"
                    ]
                    Spectrum.Button [
                        Button.variant ButtonVariant.Secondary
                        Button.content "Remind me later"
                    ]
                    Spectrum.Button [
                        Button.variant ButtonVariant.Primary
                        Button.content "Rate now"
                    ]
                ]
            ]
        ]

    [<ReactComponent>]
    let ButtonGroupExample3 () =
        let code = """Spectrum.Flex [
    Flex.gap (DimValue.Number 10)
    Flex.direction FlexDirection.Column
    Flex.alignItems FlexAlignItems.Start
    Flex.children [
        Spectrum.Text "align = 'end'"
        Spectrum.ButtonGroup [
            ButtonGroup.orientation Orientation.Vertical
            ButtonGroup.align ButtonGroupAlignment.End
            ButtonGroup.children [
                Spectrum.Button [
                    Button.variant ButtonVariant.Secondary
                    Button.content "No, thanks"
                ]
                Spectrum.Button [
                    Button.variant ButtonVariant.Secondary
                    Button.content "Remind me later"
                ]
                Spectrum.Button [
                    Button.variant ButtonVariant.Primary
                    Button.content "Rate now"
                ]
            ]
        ]
        Spectrum.Text "align = 'center'"
        Spectrum.ButtonGroup [
            ButtonGroup.orientation Orientation.Vertical
            ButtonGroup.align ButtonGroupAlignment.Center
            ButtonGroup.children [
                Spectrum.Button [
                    Button.variant ButtonVariant.Secondary
                    Button.content "No, thanks"
                ]
                Spectrum.Button [
                    Button.variant ButtonVariant.Secondary
                    Button.content "Remind me later"
                ]
                Spectrum.Button [
                    Button.variant ButtonVariant.Primary
                    Button.content "Rate now"
                ]
            ]
        ]
    ]
]"""
        let description = []

        Example "Alignment" code description [
            Spectrum.Flex [
                Flex.gap (DimValue.Number 10)
                Flex.direction FlexDirection.Column
                Flex.alignItems FlexAlignItems.Start
                Flex.children [
                    Spectrum.Text "align = 'end'"
                    Spectrum.ButtonGroup [
                        ButtonGroup.orientation Orientation.Vertical
                        ButtonGroup.align ButtonGroupAlignment.End
                        ButtonGroup.children [
                            Spectrum.Button [
                                Button.variant ButtonVariant.Secondary
                                Button.content "No, thanks"
                            ]
                            Spectrum.Button [
                                Button.variant ButtonVariant.Secondary
                                Button.content "Remind me later"
                            ]
                            Spectrum.Button [
                                Button.variant ButtonVariant.Primary
                                Button.content "Rate now"
                            ]
                        ]
                    ]
                    Spectrum.Text "align = 'center'"
                    Spectrum.ButtonGroup [
                        ButtonGroup.orientation Orientation.Vertical
                        ButtonGroup.align ButtonGroupAlignment.Center
                        ButtonGroup.children [
                            Spectrum.Button [
                                Button.variant ButtonVariant.Secondary
                                Button.content "No, thanks"
                            ]
                            Spectrum.Button [
                                Button.variant ButtonVariant.Secondary
                                Button.content "Remind me later"
                            ]
                            Spectrum.Button [
                                Button.variant ButtonVariant.Primary
                                Button.content "Rate now"
                            ]
                        ]
                    ]
                ]
            ]
        ]

    [<ReactComponent>]
    let ButtonGroupDocs () =
        let description = [
            Html.text "ButtonGroup handles overflow for a grouping of buttons whose actions are related to each other."
            Html.br []
            Html.br []
            Html.text " Check the official "
            Html.a [
                prop.children [ Html.text "documentation" ]
                prop.href "https://react-spectrum.adobe.com/react-spectrum/ButtonGroup.html"
            ]
            Html.text " for more details."
        ]

        ExampleGroup "ButtonGroup" description [
            ButtonGroupExample1 ()
            ButtonGroupExample2 ()
            ButtonGroupExample3 ()
        ]

    [<ReactComponent>]
    let LogicButtonExample1 () =
        let code = """Spectrum.LogicButton [
    LogicButton.variant LogicButtonVariant.And
    LogicButton.children [
        Spectrum.Text "And"
    ]
]"""
        let description = []

        Example "Default example" code description [
            Spectrum.LogicButton [
                LogicButton.variant LogicButtonVariant.And
                LogicButton.children [
                    Spectrum.Text "And"
                ]
            ]
        ]

    [<ReactComponent>]
    let LogicButtonExample2 () =
        let code = """Spectrum.LogicButton [
    LogicButton.variant LogicButtonVariant.Or
    LogicButton.children [
        Spectrum.Text "Or"
    ]
]"""
        let description = []

        Example "Or variant" code description [
            Spectrum.LogicButton [
                LogicButton.variant LogicButtonVariant.Or
                LogicButton.children [
                    Spectrum.Text "Or"
                ]
            ]
        ]

    [<ReactComponent>]
    let LogicButtonExample3 () =
        let code = """let variant, setVariant = React.useState(LogicButtonVariant.Or)

Spectrum.LogicButton [
    LogicButton.variant variant
    LogicButton.onPress (fun _ ->
        let newVariant =
            match variant with
            | LogicButtonVariant.And -> LogicButtonVariant.Or
            | LogicButtonVariant.Or -> LogicButtonVariant.And
        setVariant newVariant
    )
    LogicButton.content (variant.ToString())
]"""
        let description = []

        Example "Events" code description [
            let variant, setVariant = React.useState(LogicButtonVariant.Or)

            Spectrum.LogicButton [
                LogicButton.variant variant
                LogicButton.onPress (fun _ ->
                    let newVariant =
                        match variant with
                        | LogicButtonVariant.And -> LogicButtonVariant.Or
                        | LogicButtonVariant.Or -> LogicButtonVariant.And
                    setVariant newVariant
                )
                LogicButton.content (variant.ToString())
            ]
        ]

    [<ReactComponent>]
    let LogicButtonDocs () =
        let description = [
            Html.text "A LogicButton displays an operator within a boolean logic sequence."
            Html.br []
            Html.br []
            Html.text " Check the official "
            Html.a [
                prop.children [ Html.text "documentation" ]
                prop.href "https://react-spectrum.adobe.com/react-spectrum/LogicButton.html"
            ]
            Html.text " for more details."
        ]

        ExampleGroup "LogicButton" description [
            LogicButtonExample1 ()
            LogicButtonExample2 ()
            LogicButtonExample3 ()
        ]

    [<ReactComponent>]
    let ToggleButtonDocs () =
        let description = [
            Html.text "ToggleButtons allow users to toggle a selection on or off, for example switching between two states or modes."
            Html.br []
            Html.br []
            Html.text " Check the official "
            Html.a [
                prop.children [ Html.text "documentation" ]
                prop.href "https://react-spectrum.adobe.com/react-spectrum/ToggleButton.html"
            ]
            Html.text " for more details."
        ]

        ExampleGroup "ToggleButton" description [

        ]