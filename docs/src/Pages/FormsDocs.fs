namespace Pages

open Feliz.ReactSpectrum
open Feliz
open Fable.Core
open Fable.Core.JsInterop

[<AutoOpen>]
module FormsDocs =

    [<ReactComponent>]
    let CheckboxDocs () =
        let description = [
            Html.text "Checkboxes allow users to select multiple items from a list of individual items, or to mark one individual item as selected."
            Html.br []
            Html.br []
            Html.text " Check the official "
            Html.a [
                prop.children [ Html.text "documentation" ]
                prop.href "https://react-spectrum.adobe.com/react-spectrum/Checkbox.html"
            ]
            Html.text " for more details."
        ]

        ExampleGroup "Checkbox" description [
        ]

    [<ReactComponent>]
    let CheckboxGroupDocs () =
        let description = [
            Html.text "A CheckboxGroup allows users to select one or more items from a list of choices."
            Html.br []
            Html.br []
            Html.text " Check the official "
            Html.a [
                prop.children [ Html.text "documentation" ]
                prop.href "https://react-spectrum.adobe.com/react-spectrum/CheckboxGroup.html"
            ]
            Html.text " for more details."
        ]

        ExampleGroup "CheckboxGroup" description [
        ]

    [<ReactComponent>]
    let FormDocs () =
        let description = [
            Html.text "Forms allow users to enter data that can be submitted while providing alignment and styling for form fields."
            Html.br []
            Html.br []
            Html.text " Check the official "
            Html.a [
                prop.children [ Html.text "documentation" ]
                prop.href "https://react-spectrum.adobe.com/react-spectrum/Form.html"
            ]
            Html.text " for more details."
        ]

        ExampleGroup "Form" description [
        ]

    [<ReactComponent>]
    let NumberFieldDocs () =
        let description = [
            Html.text "NumberFields allow users to enter a number, and increment or decrement the value using stepper buttons."
            Html.br []
            Html.br []
            Html.text " Check the official "
            Html.a [
                prop.children [ Html.text "documentation" ]
                prop.href "https://react-spectrum.adobe.com/react-spectrum/NumberField.html"
            ]
            Html.text " for more details."
        ]

        ExampleGroup "NumberField" description [
        ]

    [<ReactComponent>]
    let RadioGroupDocs () =
        let description = [
            Html.text "Radio buttons allow users to select a single option from a list of mutually exclusive options. All possible options are exposed up front for users to compare."
            Html.br []
            Html.br []
            Html.text " Check the official "
            Html.a [
                prop.children [ Html.text "documentation" ]
                prop.href "https://react-spectrum.adobe.com/react-spectrum/RadioGroup.html"
            ]
            Html.text " for more details."
        ]

        ExampleGroup "RadioGroup" description [
        ]

    [<ReactComponent>]
    let SearchFieldDocs () =
        let description = [
            Html.text "A SearchField is a text field designed for searches."
            Html.br []
            Html.br []
            Html.text " Check the official "
            Html.a [
                prop.children [ Html.text "documentation" ]
                prop.href "https://react-spectrum.adobe.com/react-spectrum/SearchField.html"
            ]
            Html.text " for more details."
        ]

        ExampleGroup "SearchField" description [
        ]

    [<ReactComponent>]
    let SwitchDocs () =
        let description = [
            Html.text "Switches allow users to turn an individual option on or off. They are usually used to activate or deactivate a specific setting."
            Html.br []
            Html.br []
            Html.text " Check the official "
            Html.a [
                prop.children [ Html.text "documentation" ]
                prop.href "https://react-spectrum.adobe.com/react-spectrum/Switch.html"
            ]
            Html.text " for more details."
        ]

        ExampleGroup "Switch" description [
        ]

    [<ReactComponent>]
    let TextAreaDocs () =
        let description = [
            Html.text "TextAreas are multiline text inputs, useful for cases where users have a sizable amount of text to enter. They allow for all customizations that are available to text fields."
            Html.br []
            Html.br []
            Html.text " Check the official "
            Html.a [
                prop.children [ Html.text "documentation" ]
                prop.href "https://react-spectrum.adobe.com/react-spectrum/TextArea.html"
            ]
            Html.text " for more details."
        ]

        ExampleGroup "TextArea" description [
        ]

    [<ReactComponent>]
    let TextFieldDocs () =
        let description = [
            Html.text "TextFields are text inputs that allow users to input custom text entries with a keyboard. Various decorations can be displayed around the field to communicate the entry requirements."
            Html.br []
            Html.br []
            Html.text " Check the official "
            Html.a [
                prop.children [ Html.text "documentation" ]
                prop.href "https://react-spectrum.adobe.com/react-spectrum/TextField.html"
            ]
            Html.text " for more details."
        ]

        ExampleGroup "TextField" description [
        ]