namespace Pages

open Feliz.ReactSpectrum
open Feliz
open Fable.Core
open Fable.Core.JsInterop

[<AutoOpen>]
module FormsDocs =

    [<ReactComponent>]
    let CheckboxExample1 () =
        let code = """Spectrum.Checkbox [
    Checkbox.content "Unsubscribe"
]"""

        Example "Default example" code [] [
            Spectrum.Checkbox [
                Checkbox.content "Unsubscribe"
            ]
        ]

    [<ReactComponent>]
    let CheckboxExample2 () =
        let code = """let selected, setSelected = React.useState(true)
Spectrum.Flex [
    Flex.direction FlexDirection.Row
    Flex.children [
        Spectrum.Checkbox [
            Checkbox.defaultSelected true
            Checkbox.content "Subscribe (uncontrolled)"
        ]
        Spectrum.Checkbox [
            Checkbox.isSelected selected
            Checkbox.onChange setSelected
            Checkbox.content "Subscribe (controlled)"
        ]
    ]
]"""

        Example "Value" code [] [
            let selected, setSelected = React.useState(true)
            Spectrum.Flex [
                Flex.direction FlexDirection.Row
                Flex.children [
                    Spectrum.Checkbox [
                        Checkbox.defaultSelected true
                        Checkbox.content "Subscribe (uncontrolled)"
                    ]
                    Spectrum.Checkbox [
                        Checkbox.isSelected selected
                        Checkbox.onChange setSelected
                        Checkbox.content "Subscribe (controlled)"
                    ]
                ]
            ]
        ]

    [<ReactComponent>]
    let CheckboxExample3 () =
        let code = """Spectrum.Checkbox [
    Checkbox.isIndeterminate true
    Checkbox.content "Subscribe"
]"""

        Example "Indeterminate" code [] [
            Spectrum.Checkbox [
                Checkbox.isIndeterminate true
                Checkbox.content "Subscribe"
            ]
        ]

    [<ReactComponent>]
    let CheckboxExample4 () =
        let code = """let selected, setSelected = React.useState(false)
    Spectrum.Flex [
        Flex.direction FlexDirection.Column
        Flex.children [
            Spectrum.Checkbox [
                Checkbox.isSelected selected
                Checkbox.onChange setSelected
                Checkbox.content "Subscribe"
            ]
            Spectrum.View [
                let status = if selected then "subscribed" else "unsubscribed"
                Html.text $"You are {status}"
            ]
        ]
    ]"""

        Example "Events" code [] [
            let selected, setSelected = React.useState(false)
            Spectrum.Flex [
                Flex.direction FlexDirection.Column
                Flex.children [
                    Spectrum.Checkbox [
                        Checkbox.isSelected selected
                        Checkbox.onChange setSelected
                        Checkbox.content "Subscribe"
                    ]
                    Spectrum.View [
                        let status = if selected then "subscribed" else "unsubscribed"
                        Html.text $"You are {status}"
                    ]
                ]
            ]
        ]

    [<ReactComponent>]
    let CheckboxExample5 () =
        let code = """Spectrum.Checkbox [
        Checkbox.validationState ValidationState.Invalid
        Checkbox.content "I accept the terms and conditions"
    ]"""

        Example "Validation" code [] [
            Spectrum.Checkbox [
                Checkbox.validationState ValidationState.Invalid
                Checkbox.content "I accept the terms and conditions"
            ]
        ]

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
            CheckboxExample1 ()
            CheckboxExample2 ()
            CheckboxExample3 ()
            CheckboxExample4 ()
            CheckboxExample5 ()
        ]

    [<ReactComponent>]
    let CheckboxGroupExample1 () =
        let code = """Spectrum.CheckboxGroup [
    CheckboxGroup.label "Favorite sports"
    CheckboxGroup.children [
        Spectrum.Checkbox [
            Checkbox.value "soccer"
            Checkbox.content "Soccer"
        ]
        Spectrum.Checkbox [
            Checkbox.value "baseball"
            Checkbox.content "Baseball"
        ]
        Spectrum.Checkbox [
            Checkbox.value "basketball"
            Checkbox.content "Basketball"
        ]
    ]
]"""

        Example "Default example" code [] [
            Spectrum.CheckboxGroup [
                CheckboxGroup.label "Favorite sports"
                CheckboxGroup.children [
                    Spectrum.Checkbox [
                        Checkbox.value "soccer"
                        Checkbox.content "Soccer"
                    ]
                    Spectrum.Checkbox [
                        Checkbox.value "baseball"
                        Checkbox.content "Baseball"
                    ]
                    Spectrum.Checkbox [
                        Checkbox.value "basketball"
                        Checkbox.content "Basketball"
                    ]
                ]
            ]
        ]

    [<ReactComponent>]
    let CheckboxGroupExample2 () =
        let code = """let selected, setSelected = React.useState([ "soccer"; "baseball" ])
let joinStr (s: seq<string>) = System.String.Join(", ", s)

Spectrum.Flex [
    Flex.gap (DimValue.Size Size300)
    Flex.children [
        Spectrum.CheckboxGroup [
            CheckboxGroup.label "Favorite sports (uncontrolled)"
            CheckboxGroup.defaultValue [ "soccer"; "baseball" ]
            CheckboxGroup.children [
                Spectrum.Checkbox [
                    Checkbox.value "soccer"
                    Checkbox.content "Soccer"
                ]
                Spectrum.Checkbox [
                    Checkbox.value "baseball"
                    Checkbox.content "Baseball"
                ]
                Spectrum.Checkbox [
                    Checkbox.value "basketball"
                    Checkbox.content "Basketball"
                ]
            ]
        ]
        Spectrum.Flex [
            Flex.direction FlexDirection.Column
            Flex.gap (DimValue.Size Size200)
            Flex.children [
                Spectrum.CheckboxGroup [
                    CheckboxGroup.label "Favorite sports (controlled)"
                    CheckboxGroup.value selected
                    CheckboxGroup.onChange (List.ofSeq >> setSelected)
                    CheckboxGroup.children [
                        Spectrum.Checkbox [
                            Checkbox.value "soccer"
                            Checkbox.content "Soccer"
                        ]
                        Spectrum.Checkbox [
                            Checkbox.value "baseball"
                            Checkbox.content "Baseball"
                        ]
                        Spectrum.Checkbox [
                            Checkbox.value "basketball"
                            Checkbox.content "Basketball"
                        ]
                    ]
                ]
                Html.p $"Selected: {selected |> joinStr}"
            ]
        ]
    ]
]"""

        Example "Value" code [] [
            let selected, setSelected = React.useState([ "soccer"; "baseball" ])
            let joinStr (s: seq<string>) = System.String.Join(", ", s)

            Spectrum.Flex [
                Flex.gap (DimValue.Size Size300)
                Flex.children [
                    Spectrum.CheckboxGroup [
                        CheckboxGroup.label "Favorite sports (uncontrolled)"
                        CheckboxGroup.defaultValue [ "soccer"; "baseball" ]
                        CheckboxGroup.children [
                            Spectrum.Checkbox [
                                Checkbox.value "soccer"
                                Checkbox.content "Soccer"
                            ]
                            Spectrum.Checkbox [
                                Checkbox.value "baseball"
                                Checkbox.content "Baseball"
                            ]
                            Spectrum.Checkbox [
                                Checkbox.value "basketball"
                                Checkbox.content "Basketball"
                            ]
                        ]
                    ]
                    Spectrum.Flex [
                        Flex.direction FlexDirection.Column
                        Flex.gap (DimValue.Size Size200)
                        Flex.children [
                            Spectrum.CheckboxGroup [
                                CheckboxGroup.label "Favorite sports (controlled)"
                                CheckboxGroup.value selected
                                CheckboxGroup.onChange (List.ofSeq >> setSelected)
                                CheckboxGroup.children [
                                    Spectrum.Checkbox [
                                        Checkbox.value "soccer"
                                        Checkbox.content "Soccer"
                                    ]
                                    Spectrum.Checkbox [
                                        Checkbox.value "baseball"
                                        Checkbox.content "Baseball"
                                    ]
                                    Spectrum.Checkbox [
                                        Checkbox.value "basketball"
                                        Checkbox.content "Basketball"
                                    ]
                                ]
                            ]
                            Html.p $"Selected: {selected |> joinStr}"
                        ]
                    ]
                ]
            ]
        ]

    [<ReactComponent>]
    let CheckboxGroupExample3 () =
        let code = """Spectrum.Flex [
Flex.gap (DimValue.Size Size300)
Flex.wrap true
Flex.children [
    Spectrum.CheckboxGroup [
        CheckboxGroup.label "Favorite sports"
        CheckboxGroup.children [
            Spectrum.Checkbox [
                Checkbox.value "soccer"
                Checkbox.content "Soccer"
            ]
            Spectrum.Checkbox [
                Checkbox.value "baseball"
                Checkbox.content "Baseball"
            ]
            Spectrum.Checkbox [
                Checkbox.value "basketball"
                Checkbox.content "Basketball"
            ]
        ]
    ]
    Spectrum.CheckboxGroup [
        CheckboxGroup.label "Favorite sports"
        CheckboxGroup.isRequired true
        CheckboxGroup.necessityIndicator NecessityIndicator.Icon
        CheckboxGroup.children [
            Spectrum.Checkbox [
                Checkbox.value "soccer"
                Checkbox.content "Soccer"
            ]
            Spectrum.Checkbox [
                Checkbox.value "baseball"
                Checkbox.content "Baseball"
            ]
            Spectrum.Checkbox [
                Checkbox.value "basketball"
                Checkbox.content "Basketball"
            ]
        ]
    ]
    Spectrum.CheckboxGroup [
        CheckboxGroup.label "Favorite sports"
        CheckboxGroup.isRequired true
        CheckboxGroup.necessityIndicator NecessityIndicator.Label
        CheckboxGroup.children [
            Spectrum.Checkbox [
                Checkbox.value "soccer"
                Checkbox.content "Soccer"
            ]
            Spectrum.Checkbox [
                Checkbox.value "baseball"
                Checkbox.content "Baseball"
            ]
            Spectrum.Checkbox [
                Checkbox.value "basketball"
                Checkbox.content "Basketball"
            ]
        ]
    ]
    Spectrum.CheckboxGroup [
        CheckboxGroup.label "Favorite sports"
        CheckboxGroup.necessityIndicator NecessityIndicator.Label
        CheckboxGroup.children [
            Spectrum.Checkbox [
                Checkbox.value "soccer"
                Checkbox.content "Soccer"
            ]
            Spectrum.Checkbox [
                Checkbox.value "baseball"
                Checkbox.content "Baseball"
            ]
            Spectrum.Checkbox [
                Checkbox.value "basketball"
                Checkbox.content "Basketball"
            ]
        ]
    ]
]
]"""

        Example "Labeling" code [] [
            Spectrum.Flex [
                Flex.gap (DimValue.Size Size300)
                Flex.wrap true
                Flex.children [
                    Spectrum.CheckboxGroup [
                        CheckboxGroup.label "Favorite sports"
                        CheckboxGroup.children [
                            Spectrum.Checkbox [
                                Checkbox.value "soccer"
                                Checkbox.content "Soccer"
                            ]
                            Spectrum.Checkbox [
                                Checkbox.value "baseball"
                                Checkbox.content "Baseball"
                            ]
                            Spectrum.Checkbox [
                                Checkbox.value "basketball"
                                Checkbox.content "Basketball"
                            ]
                        ]
                    ]
                    Spectrum.CheckboxGroup [
                        CheckboxGroup.label "Favorite sports"
                        CheckboxGroup.isRequired true
                        CheckboxGroup.necessityIndicator NecessityIndicator.Icon
                        CheckboxGroup.children [
                            Spectrum.Checkbox [
                                Checkbox.value "soccer"
                                Checkbox.content "Soccer"
                            ]
                            Spectrum.Checkbox [
                                Checkbox.value "baseball"
                                Checkbox.content "Baseball"
                            ]
                            Spectrum.Checkbox [
                                Checkbox.value "basketball"
                                Checkbox.content "Basketball"
                            ]
                        ]
                    ]
                    Spectrum.CheckboxGroup [
                        CheckboxGroup.label "Favorite sports"
                        CheckboxGroup.isRequired true
                        CheckboxGroup.necessityIndicator NecessityIndicator.Label
                        CheckboxGroup.children [
                            Spectrum.Checkbox [
                                Checkbox.value "soccer"
                                Checkbox.content "Soccer"
                            ]
                            Spectrum.Checkbox [
                                Checkbox.value "baseball"
                                Checkbox.content "Baseball"
                            ]
                            Spectrum.Checkbox [
                                Checkbox.value "basketball"
                                Checkbox.content "Basketball"
                            ]
                        ]
                    ]
                    Spectrum.CheckboxGroup [
                        CheckboxGroup.label "Favorite sports"
                        CheckboxGroup.necessityIndicator NecessityIndicator.Label
                        CheckboxGroup.children [
                            Spectrum.Checkbox [
                                Checkbox.value "soccer"
                                Checkbox.content "Soccer"
                            ]
                            Spectrum.Checkbox [
                                Checkbox.value "baseball"
                                Checkbox.content "Baseball"
                            ]
                            Spectrum.Checkbox [
                                Checkbox.value "basketball"
                                Checkbox.content "Basketball"
                            ]
                        ]
                    ]
                ]
            ]
        ]

    [<ReactComponent>]
    let CheckboxGroupExample4 () =
        let code = """let selected, setSelected = React.useState([])
Spectrum.CheckboxGroup [
    CheckboxGroup.label "Sandwich condiments"
    CheckboxGroup.value selected
    CheckboxGroup.onChange (List.ofSeq >> setSelected)
    CheckboxGroup.isRequired true
    if selected.Length = 0 then
        CheckboxGroup.validationState ValidationState.Invalid
    CheckboxGroup.children [
        Spectrum.Checkbox [
            Checkbox.value "lettuce"
            Checkbox.content "Lettuce"
        ]
        Spectrum.Checkbox [
            Checkbox.value "tomato"
            Checkbox.content "Tomato"
        ]
        Spectrum.Checkbox [
            Checkbox.value "onion"
            Checkbox.content "Onion"
        ]
        Spectrum.Checkbox [
            Checkbox.value "sprouts"
            Checkbox.content "Sprouts"
        ]
    ]
]"""

        Example "Validation" code [] [
            let selected, setSelected = React.useState([])
            Spectrum.CheckboxGroup [
                CheckboxGroup.label "Sandwich condiments"
                CheckboxGroup.value selected
                CheckboxGroup.onChange (List.ofSeq >> setSelected)
                CheckboxGroup.isRequired true
                if selected.Length = 0 then
                    CheckboxGroup.validationState ValidationState.Invalid
                CheckboxGroup.children [
                    Spectrum.Checkbox [
                        Checkbox.value "lettuce"
                        Checkbox.content "Lettuce"
                    ]
                    Spectrum.Checkbox [
                        Checkbox.value "tomato"
                        Checkbox.content "Tomato"
                    ]
                    Spectrum.Checkbox [
                        Checkbox.value "onion"
                        Checkbox.content "Onion"
                    ]
                    Spectrum.Checkbox [
                        Checkbox.value "sprouts"
                        Checkbox.content "Sprouts"
                    ]
                ]
            ]
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
            CheckboxGroupExample1 ()
            CheckboxGroupExample2 ()
            CheckboxGroupExample3 ()
            CheckboxGroupExample4 ()
        ]

    [<ReactComponent>]
    let FormExample1 () =
        let code = """Spectrum.Form [
    Form.maxWidth (DimValue.Size Size3600)
    Form.children [
        Spectrum.TextField [
            TextField.label "Email"
            TextField.type' TextFieldType.Email
            TextField.placeholder "abc@adobe.com"
        ]
        Spectrum.TextField [
            TextField.label "Password"
            TextField.type' TextFieldType.Password
            TextField.placeholder "1234"
        ]
        Spectrum.Checkbox [
            Checkbox.content "Remember me"
        ]
    ]
]"""

        Example "Default example" code [] [
            Spectrum.Form [
                Form.maxWidth (DimValue.Size Size3600)
                Form.children [
                    Spectrum.TextField [
                        TextField.label "Email"
                        TextField.type' TextFieldType.Email
                        TextField.placeholder "abc@adobe.com"
                    ]
                    Spectrum.TextField [
                        TextField.label "Password"
                        TextField.type' TextFieldType.Password
                        TextField.placeholder "1234"
                    ]
                    Spectrum.Checkbox [
                        Checkbox.content "Remember me"
                    ]
                ]
            ]
        ]

    [<ReactComponent>]
    let FormExample2 () =
        let code = """Spectrum.Form [
    Form.maxWidth (DimValue.Size Size3600)
    Form.isRequired true
    Form.necessityIndicator NecessityIndicator.Label
    Form.children [
        Spectrum.TextField [
            TextField.label "Name"
            TextField.placeholder "Jane Smith"
        ]
        Spectrum.TextField [
            TextField.label "Email"
            TextField.placeholder "abc@adobe.com"
        ]
        Spectrum.TextField [
            TextField.label "Address"
            TextField.placeholder "123 Any Street"
            TextField.isRequired false
        ]
    ]
]"""

        Example "Content" code [] [
            Spectrum.Form [
                Form.maxWidth (DimValue.Size Size3600)
                Form.isRequired true
                Form.necessityIndicator NecessityIndicator.Label
                Form.children [
                    Spectrum.TextField [
                        TextField.label "Name"
                        TextField.placeholder "Jane Smith"
                    ]
                    Spectrum.TextField [
                        TextField.label "Email"
                        TextField.placeholder "abc@adobe.com"
                    ]
                    Spectrum.TextField [
                        TextField.label "Address"
                        TextField.placeholder "123 Any Street"
                        TextField.isRequired false
                    ]
                ]
            ]
        ]

    [<ReactComponent>]
    let FormExample3 () =
        let code = """React.fragment [
    Html.h3 [
        prop.id "label-3"
        prop.children [ Html.text "Personal Information" ]
    ]
    Spectrum.Form [
        Form.maxWidth (DimValue.Size Size3600)
        Form.ariaLabeledBy "label-3"
        Form.children [
            Spectrum.TextField [
                TextField.label "First Name"
                TextField.placeholder "John"
            ]
            Spectrum.TextField [
                TextField.label "Last Name"
                TextField.placeholder "Smith"
            ]
            Spectrum.RadioGroup [
                RadioGroup.label "Favorite pet"
                RadioGroup.children [
                    Spectrum.Radio [
                        Radio.value "dogs"
                        Radio.content "Dogs"
                    ]
                    Spectrum.Radio [
                        Radio.value "cats"
                        Radio.content "Cats"
                    ]
                    Spectrum.Radio [
                        Radio.value "dragons"
                        Radio.content "Dragons"
                    ]
                ]
            ]
        ]
    ]
]"""

        Example "Labeling" code [] [
            React.fragment [
                Html.h3 [
                    prop.id "label-3"
                    prop.children [ Html.text "Personal Information" ]
                ]
                Spectrum.Form [
                    Form.maxWidth (DimValue.Size Size3600)
                    Form.ariaLabeledBy "label-3"
                    Form.children [
                        Spectrum.TextField [
                            TextField.label "First Name"
                            TextField.placeholder "John"
                        ]
                        Spectrum.TextField [
                            TextField.label "Last Name"
                            TextField.placeholder "Smith"
                        ]
                        Spectrum.RadioGroup [
                            RadioGroup.label "Favorite pet"
                            RadioGroup.children [
                                Spectrum.Radio [
                                    Radio.value "dogs"
                                    Radio.content "Dogs"
                                ]
                                Spectrum.Radio [
                                    Radio.value "cats"
                                    Radio.content "Cats"
                                ]
                                Spectrum.Radio [
                                    Radio.value "dragons"
                                    Radio.content "Dragons"
                                ]
                            ]
                        ]
                    ]
                ]
            ]
        ]

    [<ReactComponent>]
    let FormExample4 () =
        let code = """Spectrum.Form [
    Form.isQuiet true
    Form.ariaLabel "Quiet example"
    Form.maxWidth (DimValue.Size Size3600)
    Form.children [
        Spectrum.TextField [
            TextField.label "Name"
            TextField.placeholder "John Smith"
        ]
        Spectrum.TextField [
            TextField.label "Address"
            TextField.placeholder "123 Any Street"
        ]
    ]
]"""

        Example "Quiet" code [] [
            Spectrum.Form [
                Form.isQuiet true
                Form.ariaLabel "Quiet example"
                Form.maxWidth (DimValue.Size Size3600)
                Form.children [
                    Spectrum.TextField [
                        TextField.label "Name"
                        TextField.placeholder "John Smith"
                    ]
                    Spectrum.TextField [
                        TextField.label "Address"
                        TextField.placeholder "123 Any Street"
                    ]
                ]
            ]
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
            FormExample1 ()
            FormExample2 ()
            FormExample3 ()
            FormExample4 ()
        ]

    [<ReactComponent>]
    let NumberFieldExample1 () =
        let code = """Spectrum.NumberField [
    NumberField.label "Width"
    NumberField.defaultValue 1024
    NumberField.minValue 0
]"""

        Example "Default example" code [] [
            Spectrum.NumberField [
                NumberField.label "Width"
                NumberField.defaultValue 1024
                NumberField.minValue 0
            ]
        ]

    [<ReactComponent>]
    let NumberFieldExample2 () =
        let code = """let value, setValue = React.useState(15)
Spectrum.Flex [
    Flex.gap (DimValue.Size Size150)
    Flex.wrap true
    Flex.children [
        Spectrum.NumberField [
            NumberField.width "200px"
            NumberField.label "Cookies (uncontrolled)"
            NumberField.defaultValue 15
            NumberField.minValue 0
        ]
        Spectrum.NumberField [
            NumberField.width "200px"
            NumberField.label "Cookies (controlled)"
            NumberField.value value
            NumberField.onChange setValue
            NumberField.minValue 0
        ]
    ]
]"""

        Example "Value" code [] [
            let value, setValue = React.useState(15)
            Spectrum.Flex [
                Flex.gap (DimValue.Size Size150)
                Flex.wrap true
                Flex.children [
                    Spectrum.NumberField [
                        NumberField.width "200px"
                        NumberField.label "Cookies (uncontrolled)"
                        NumberField.defaultValue 15
                        NumberField.minValue 0
                    ]
                    Spectrum.NumberField [
                        NumberField.width "200px"
                        NumberField.label "Cookies (controlled)"
                        NumberField.value value
                        NumberField.onChange setValue
                        NumberField.minValue 0
                    ]
                ]
            ]
        ]

    [<ReactComponent>]
    let NumberFieldExample3 () =
        let code = """Spectrum.NumberField [
    NumberField.label "Adjust exposure"
    NumberField.defaultValue 0
    NumberField.formatOptions <| NumberFormat.make(
        signDisplay = NumberFormatSignDisplay.ExceptZero,
        minimumFractionDigits = 1,
        maximumFractionDigits = 2)
]"""

        Example "Number formatting" code [] [
            Spectrum.NumberField [
                NumberField.label "Adjust exposure"
                NumberField.defaultValue 0
                NumberField.formatOptions <| NumberFormat.make(
                    signDisplay = NumberFormatSignDisplay.ExceptZero,
                    minimumFractionDigits = 1,
                    maximumFractionDigits = 2)
            ]
        ]

    [<ReactComponent>]
    let NumberFieldExample4 () =
        let code = """Spectrum.NumberField [
    NumberField.label "Sales tax"
    NumberField.defaultValue 0.05
    NumberField.minValue 0
    NumberField.formatOptions <| NumberFormat.make(
        style = NumberFormatStyle.Percent)
]"""

        Example "Percentage" code [] [
            Spectrum.NumberField [
                NumberField.label "Sales tax"
                NumberField.defaultValue 0.05
                NumberField.minValue 0
                NumberField.formatOptions <| NumberFormat.make(
                    style = NumberFormatStyle.Percent)
            ]
        ]

    [<ReactComponent>]
    let NumberFieldExample5 () =
        let code = """Spectrum.NumberField [
    NumberField.label "Transaction amount"
    NumberField.defaultValue 45
    NumberField.formatOptions <| NumberFormat.make(
        style = NumberFormatStyle.Currency,
        currency = "EUR",
        currencyDisplay = NumberFormatCurrencyDisplay.Symbol,
        currencySign = NumberFormatCurrencySign.Accounting)
]"""

        Example "Currency values" code [] [
            Spectrum.NumberField [
                NumberField.label "Transaction amount"
                NumberField.defaultValue 45
                NumberField.formatOptions <| NumberFormat.make(
                    style = NumberFormatStyle.Currency,
                    currency = "EUR",
                    currencyDisplay = NumberFormatCurrencyDisplay.Symbol,
                    currencySign = NumberFormatCurrencySign.Accounting)
            ]
        ]

    [<ReactComponent>]
    let NumberFieldExample6 () =
        let code = """Spectrum.NumberField [
    NumberField.label "Package width"
    NumberField.defaultValue 4
    NumberField.minValue 0
    NumberField.formatOptions <| NumberFormat.make(
        style = NumberFormatStyle.Unit,
        unit = "inch",
        unitDisplay = NumberFormatUnitDisplay.Long)
]"""

        Example "Units" code [] [
            Spectrum.NumberField [
                NumberField.label "Package width"
                NumberField.defaultValue 4
                NumberField.minValue 0
                NumberField.formatOptions <| NumberFormat.make(
                    style = NumberFormatStyle.Unit,
                    unit = "inch",
                    unitDisplay = NumberFormatUnitDisplay.Long)
            ]
        ]

    [<ReactComponent>]
    let NumberFieldExample7 () =
        let code = """Spectrum.Flex [
    Flex.direction FlexDirection.Column
    Flex.gap (DimValue.Size Size150)
    Flex.children [
        Spectrum.NumberField [
            NumberField.label "Step"
            NumberField.step 10
        ]
        Spectrum.NumberField [
            NumberField.label "Step + minValue"
            NumberField.step 3
            NumberField.minValue 2
        ]
        Spectrum.NumberField [
            NumberField.label "Step + minValue + maxValue"
            NumberField.step 3
            NumberField.minValue 2
            NumberField.maxValue 21
        ]
    ]
]"""

        Example "Step values" code [] [
            Spectrum.Flex [
                Flex.direction FlexDirection.Column
                Flex.gap (DimValue.Size Size150)
                Flex.children [
                    Spectrum.NumberField [
                        NumberField.label "Step"
                        NumberField.step 10
                    ]
                    Spectrum.NumberField [
                        NumberField.label "Step + minValue"
                        NumberField.step 3
                        NumberField.minValue 2
                    ]
                    Spectrum.NumberField [
                        NumberField.label "Step + minValue + maxValue"
                        NumberField.step 3
                        NumberField.minValue 2
                        NumberField.maxValue 21
                    ]
                ]
            ]
        ]

    [<ReactComponent>]
    let NumberFieldExample8 () =
        let code = """let value, setValue = React.useState(0)
Spectrum.Flex [
    Flex.direction FlexDirection.Column
    Flex.gap (DimValue.Size Size150)
    Flex.children [
        Spectrum.NumberField [
            NumberField.onChange setValue
            NumberField.label "Number of cookies to buy"
            NumberField.minValue 0
        ]
        Html.pre $"How many cookies you are ordering: {value}"
    ]
]"""

        Example "Events" code [] [
            let value, setValue = React.useState(0)
            Spectrum.Flex [
                Flex.direction FlexDirection.Column
                Flex.gap (DimValue.Size Size150)
                Flex.children [
                    Spectrum.NumberField [
                        NumberField.onChange setValue
                        NumberField.label "Number of cookies to buy"
                        NumberField.minValue 0
                    ]
                    Html.pre $"How many cookies you are ordering: {value}"
                ]
            ]
        ]

    [<ReactComponent>]
    let NumberFieldExample9 () =
        let code = """let value, setValue = React.useState(15)
let isValid = React.useMemo ((fun () -> value % 3 = 0 && value % 5 = 0), [| value |])
Spectrum.NumberField [
    NumberField.value value
    NumberField.onChange setValue
    NumberField.label "FizzBuzz values only"
    NumberField.validationState isValid
]"""

        Example "Validation" code [] [
            let value, setValue = React.useState(15)
            let isValid = React.useMemo ((fun () -> value % 3 = 0 && value % 5 = 0), [| value |])
            Spectrum.NumberField [
                NumberField.value value
                NumberField.onChange setValue
                NumberField.label "FizzBuzz values only"
                NumberField.validationState isValid
            ]
        ]

    [<ReactComponent>]
    let NumberFieldExample10 () =
        let code = """let value, setValue = React.useState(1)
let checkIfValid () = value > 0 || JS.isNaN(float(value))
let isValid = React.useMemo(checkIfValid, [| value |])
Spectrum.NumberField [
    NumberField.validationState isValid
    NumberField.value value
    NumberField.onChange setValue
    NumberField.label "Positive numbers only"
    NumberField.description "Enter a positive number."
    if value = 0 then NumberField.errorMessage "Is zero positive?"
    else NumberField.errorMessage "Positive numbers are bigger than 0."
]"""

        Example "Help text" code [] [
            let value, setValue = React.useState(1)
            let checkIfValid () = value > 0 || JS.isNaN(float(value))
            let isValid = React.useMemo(checkIfValid, [| value |])
            Spectrum.NumberField [
                NumberField.validationState isValid
                NumberField.value value
                NumberField.onChange setValue
                NumberField.label "Positive numbers only"
                NumberField.description "Enter a positive number."
                if value = 0 then NumberField.errorMessage "Is zero positive?"
                else NumberField.errorMessage "Positive numbers are bigger than 0."
            ]
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
            NumberFieldExample1 ()
            NumberFieldExample2 ()
            NumberFieldExample3 ()
            NumberFieldExample4 ()
            NumberFieldExample5 ()
            NumberFieldExample6 ()
            NumberFieldExample7 ()
            NumberFieldExample8 ()
            NumberFieldExample9 ()
            NumberFieldExample10 ()
        ]

    [<ReactComponent>]
    let RadioGroupExample1 () =
        let code = """Spectrum.RadioGroup [
    RadioGroup.label "Favorite pet"
    RadioGroup.children [
        Spectrum.Radio [
            Radio.value "dogs"
            Radio.content "Dogs"
        ]
        Spectrum.Radio [
            Radio.value "cats"
            Radio.content "Cats"
        ]
    ]
]"""

        Example "Default example" code [] [
            Spectrum.RadioGroup [
                RadioGroup.label "Favorite pet"
                RadioGroup.children [
                    Spectrum.Radio [
                        Radio.value "dogs"
                        Radio.content "Dogs"
                    ]
                    Spectrum.Radio [
                        Radio.value "cats"
                        Radio.content "Cats"
                    ]
                ]
            ]
        ]

    [<ReactComponent>]
    let RadioGroupExample2 () =
        let code = """let selected, setSelected = React.useState("yes")

Spectrum.Flex [
    Flex.gap (DimValue.Size Size300)
    Flex.children [
        Spectrum.RadioGroup [
            RadioGroup.label "Are you a wizard? (uncontrolled)"
            RadioGroup.defaultValue "yes"
            RadioGroup.children [
                Spectrum.Radio [
                    Radio.value "yes"
                    Radio.content "Yes"
                ]
                Spectrum.Radio [
                    Radio.value "no"
                    Radio.content "No"
                ]
            ]
        ]
        Spectrum.RadioGroup [
            RadioGroup.label "Are you a wizard? (controlled)"
            RadioGroup.value selected
            RadioGroup.onChange setSelected
            RadioGroup.children [
                Spectrum.Radio [
                    Radio.value "yes"
                    Radio.content "Yes"
                ]
                Spectrum.Radio [
                    Radio.value "no"
                    Radio.content "No"
                ]
            ]
        ]
    ]
]"""

        Example "Value" code [] [
            let selected, setSelected = React.useState("yes")
            Spectrum.Flex [
                Flex.gap (DimValue.Size Size300)
                Flex.children [
                    Spectrum.RadioGroup [
                        RadioGroup.label "Are you a wizard? (uncontrolled)"
                        RadioGroup.defaultValue "yes"
                        RadioGroup.children [
                            Spectrum.Radio [
                                Radio.value "yes"
                                Radio.content "Yes"
                            ]
                            Spectrum.Radio [
                                Radio.value "no"
                                Radio.content "No"
                            ]
                        ]
                    ]
                    Spectrum.RadioGroup [
                        RadioGroup.label "Are you a wizard? (controlled)"
                        RadioGroup.value selected
                        RadioGroup.onChange setSelected
                        RadioGroup.children [
                            Spectrum.Radio [
                                Radio.value "yes"
                                Radio.content "Yes"
                            ]
                            Spectrum.Radio [
                                Radio.value "no"
                                Radio.content "No"
                            ]
                        ]
                    ]
                ]
            ]
        ]

    [<ReactComponent>]
    let RadioGroupExample3 () =
        let code = """let selected, setSelected = React.useState("")

React.fragment [
    Spectrum.RadioGroup [
        RadioGroup.label "Favorite avatar"
        RadioGroup.value selected
        RadioGroup.onChange setSelected
        RadioGroup.children [
            Spectrum.Radio [
                Radio.value "wizard"
                Radio.content "Wizard"
            ]
            Spectrum.Radio [
                Radio.value "dragon"
                Radio.content "Dragon"
            ]
        ]
    ]
    Html.div $"You have selected: {selected}"
]"""

        Example "Events" code [] [
            let selected, setSelected = React.useState("")

            React.fragment [
                Spectrum.RadioGroup [
                    RadioGroup.label "Favorite avatar"
                    RadioGroup.value selected
                    RadioGroup.onChange setSelected
                    RadioGroup.children [
                        Spectrum.Radio [
                            Radio.value "wizard"
                            Radio.content "Wizard"
                        ]
                        Spectrum.Radio [
                            Radio.value "dragon"
                            Radio.content "Dragon"
                        ]
                    ]
                ]
                Html.div $"You have selected: {selected}"
            ]
        ]

    [<ReactComponent>]
    let RadioGroupExample4 () =
        let code = """Spectrum.RadioGroup [
    RadioGroup.label "Favorite avatar"
    RadioGroup.orientation Orientation.Horizontal
    RadioGroup.children [
        Spectrum.Radio [
            Radio.value "wizard"
            Radio.content "Wizard"
        ]
        Spectrum.Radio [
            Radio.value "dragon"
            Radio.content "Dragon"
        ]
    ]
]"""

        Example "Orientation" code [] [
            Spectrum.RadioGroup [
                RadioGroup.label "Favorite avatar"
                RadioGroup.orientation Orientation.Horizontal
                RadioGroup.children [
                    Spectrum.Radio [
                        Radio.value "wizard"
                        Radio.content "Wizard"
                    ]
                    Spectrum.Radio [
                        Radio.value "dragon"
                        Radio.content "Dragon"
                    ]
                ]
            ]
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
            RadioGroupExample1 ()
            RadioGroupExample2 ()
            RadioGroupExample3 ()
            RadioGroupExample4 ()
        ]

    [<ReactComponent>]
    let SearchFieldExample1 () =
        let code = """let submittedText, setSubmittedText = React.useState("")
React.fragment [
    Spectrum.SearchField [
        SearchField.label "Search"
        SearchField.placeholder "Enter text"
        SearchField.onSubmit setSubmittedText
    ]
    Html.p $"Submitted text: {submittedText}"
]"""

        Example "Default example" code [] [
            let submittedText, setSubmittedText = React.useState("")
            React.fragment [
                Spectrum.SearchField [
                    SearchField.label "Search"
                    SearchField.placeholder "Enter text"
                    SearchField.onSubmit setSubmittedText
                ]
                Html.p $"Submitted text: {submittedText}"
            ]
        ]

    [<ReactComponent>]
    let SearchFieldExample2 () =
        let code = """let searchValue, setSearchValue = React.useState("puppies")
Spectrum.Flex [
    Flex.gap (DimValue.Size Size300)
    Flex.children [
        Spectrum.SearchField [
            SearchField.defaultValue "puppies"
            SearchField.label "Search (uncontrolled)"
        ]
        Spectrum.SearchField [
            SearchField.value searchValue
            SearchField.onChange setSearchValue
            SearchField.label "Search (controlled)"
        ]
    ]
]"""

        Example "Value" code [] [
            let searchValue, setSearchValue = React.useState("puppies")
            Spectrum.Flex [
                Flex.gap (DimValue.Size Size300)
                Flex.children [
                    Spectrum.SearchField [
                        SearchField.defaultValue "puppies"
                        SearchField.label "Search (uncontrolled)"
                    ]
                    Spectrum.SearchField [
                        SearchField.value searchValue
                        SearchField.onChange setSearchValue
                        SearchField.label "Search (controlled)"
                    ]
                ]
            ]
        ]

    [<ReactComponent>]
    let SearchFieldExample3 () =
        let code = """let currentText, setCurrentText = React.useState("")
let submittedText, setSubmittedText = React.useState("")
Spectrum.Flex [
    Flex.direction FlexDirection.Column
    Flex.children [
        Spectrum.SearchField [
            SearchField.value currentText
            SearchField.onChange setCurrentText
            SearchField.label "Your text"
            SearchField.placeholder "Enter some text"
            SearchField.onClear (fun () -> setCurrentText "")
            SearchField.onSubmit setSubmittedText
        ]
        Html.pre $"Mirrored text: {currentText}"
        Html.pre $"Submitted text: {submittedText}"
    ]
]"""

        Example "Properties" code [] [
            let currentText, setCurrentText = React.useState("")
            let submittedText, setSubmittedText = React.useState("")
            Spectrum.Flex [
                Flex.direction FlexDirection.Column
                Flex.children [
                    Spectrum.SearchField [
                        SearchField.value currentText
                        SearchField.onChange setCurrentText
                        SearchField.label "Your text"
                        SearchField.placeholder "Enter some text"
                        SearchField.onClear (fun () -> setCurrentText "")
                        SearchField.onSubmit setSubmittedText
                    ]
                    Html.pre $"Mirrored text: {currentText}"
                    Html.pre $"Submitted text: {submittedText}"
                ]
            ]
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
            SearchFieldExample1 ()
            SearchFieldExample2 ()
            SearchFieldExample3 ()
        ]

    [<ReactComponent>]
    let SwitchExample1 () =
        let code = """Spectrum.Switch [
    Switch.content "Low power mode"
]"""

        Example "Default example" code [] [
            Spectrum.Switch [
                Switch.content "Low power mode"
            ]
        ]

    [<ReactComponent>]
    let SwitchExample2 () =
        let code = """let selected, setSelected = React.useState(false)
React.fragment [
    Spectrum.Switch [
        Switch.defaultSelected true
        Switch.content "Low power mode (uncontrolled)"
    ]
    Spectrum.Flex [
        Flex.direction FlexDirection.Column
        Flex.gap (DimValue.Size Size100)
        Flex.children [
            Spectrum.Switch [
                Switch.isSelected selected
                Switch.onChange setSelected
                Switch.content "Low power mode (controlled)"
            ]
            Html.div $"The switch is on: {selected}"
        ]
    ]
]"""

        Example "Value" code [] [
            let selected, setSelected = React.useState(false)
            React.fragment [
                Spectrum.Switch [
                    Switch.defaultSelected true
                    Switch.content "Low power mode (uncontrolled)"
                ]
                Spectrum.Flex [
                    Flex.direction FlexDirection.Column
                    Flex.gap (DimValue.Size Size100)
                    Flex.children [
                        Spectrum.Switch [
                            Switch.isSelected selected
                            Switch.onChange setSelected
                            Switch.content "Low power mode (controlled)"
                        ]
                        Html.div $"The switch is on: {selected}"
                    ]
                ]
            ]
        ]

    [<ReactComponent>]
    let SwitchExample3 () =
        let code = """Spectrum.Switch [
    Switch.isDisabled true
    Switch.content "Switch label"
]"""

        Example "Disabled" code [] [
            Spectrum.Switch [
                Switch.isDisabled true
                Switch.content "Switch label"
            ]
        ]

    [<ReactComponent>]
    let SwitchExample4 () =
        let code = """Spectrum.Switch [
    Switch.isEmphasized true
    Switch.defaultSelected true
    Switch.content "Switch label"
]"""

        Example "Emphasized" code [] [
            Spectrum.Switch [
                Switch.isEmphasized true
                Switch.defaultSelected true
                Switch.content "Switch label"
            ]
        ]

    [<ReactComponent>]
    let SwitchExample5 () =
        let code = """Spectrum.Switch [
    Switch.isReadOnly true
    Switch.defaultSelected true
    Switch.content "Switch label"
]"""

        Example "Read-only" code [] [
            Spectrum.Switch [
                Switch.isReadOnly true
                Switch.defaultSelected true
                Switch.content "Switch label"
            ]
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
            SwitchExample1 ()
            SwitchExample2 ()
            SwitchExample3 ()
            SwitchExample4 ()
            SwitchExample5 ()
        ]

    [<ReactComponent>]
    let TextAreaExample1 () =
        let code = """Spectrum.TextArea [
    TextArea.label "Name"
]"""

        Example "Default example" code [] [
            Spectrum.TextArea [
                TextArea.label "Name"
            ]
        ]

    [<ReactComponent>]
    let TextAreaExample2 () =
        let code = """let value, setValue = React.useState("This is on a wait list")
Spectrum.Flex [
    Flex.gap (DimValue.Size Size150)
    Flex.wrap true
    Flex.children [
        Spectrum.TextArea [
            TextArea.label "Notes (uncontrolled)"
            TextArea.defaultValue "This is on a wait list"
        ]
        Spectrum.TextArea [
            TextArea.label "Notes (controlled)"
            TextArea.value value
            TextArea.onChange setValue
        ]
    ]
]"""

        Example "Value" code [] [
            let value, setValue = React.useState("This is on a wait list")
            Spectrum.Flex [
                Flex.gap (DimValue.Size Size150)
                Flex.wrap true
                Flex.children [
                    Spectrum.TextArea [
                        TextArea.label "Notes (uncontrolled)"
                        TextArea.defaultValue "This is on a wait list"
                    ]
                    Spectrum.TextArea [
                        TextArea.label "Notes (controlled)"
                        TextArea.value value
                        TextArea.onChange setValue
                    ]
                ]
            ]
        ]

    [<ReactComponent>]
    let TextAreaExample3 () =
        let code = """Spectrum.TextArea [
    TextArea.label "Email"
    TextArea.placeholder "abc@gmail.com"
]"""

        Example "todo" code [] [
            Spectrum.TextArea [
                TextArea.label "Email"
                TextArea.placeholder "abc@gmail.com"
            ]
        ]

    [<ReactComponent>]
    let TextAreaExample4 () =
        let code = """Spectrum.Flex [
    Flex.gap (DimValue.Size Size150)
    Flex.wrap true
    Flex.children [
        Spectrum.TextArea [
            TextArea.label "Street address"
        ]
        Spectrum.TextArea [
            TextArea.label "Street address"
            TextArea.isRequired true
            TextArea.necessityIndicator NecessityIndicator.Icon
        ]
        Spectrum.TextArea [
            TextArea.label "Street address"
            TextArea.isRequired true
            TextArea.necessityIndicator NecessityIndicator.Label
        ]
        Spectrum.TextArea [
            TextArea.label "Street address"
            TextArea.necessityIndicator NecessityIndicator.Label
        ]
    ]
]"""

        Example "todo" code [] [
            Spectrum.Flex [
                Flex.gap (DimValue.Size Size150)
                Flex.wrap true
                Flex.children [
                    Spectrum.TextArea [
                        TextArea.label "Street address"
                    ]
                    Spectrum.TextArea [
                        TextArea.label "Street address"
                        TextArea.isRequired true
                        TextArea.necessityIndicator NecessityIndicator.Icon
                    ]
                    Spectrum.TextArea [
                        TextArea.label "Street address"
                        TextArea.isRequired true
                        TextArea.necessityIndicator NecessityIndicator.Label
                    ]
                    Spectrum.TextArea [
                        TextArea.label "Street address"
                        TextArea.necessityIndicator NecessityIndicator.Label
                    ]
                ]
            ]
        ]

    [<ReactComponent>]
    let TextAreaExample5 () =
        let code = """let text, setText = React.useState("")
Spectrum.Flex [
    Flex.gap (DimValue.Size Size150)
    Flex.direction FlexDirection.Column
    Flex.children [
        Spectrum.TextArea [
            TextArea.label "Your text"
            TextArea.placeholder "Enter some text..."
            TextArea.onChange setText
        ]
        Html.pre $"Mirrored text: {text}"
    ]
]"""

        Example "Events" code [] [
            let text, setText = React.useState("")
            Spectrum.Flex [
                Flex.gap (DimValue.Size Size150)
                Flex.direction FlexDirection.Column
                Flex.children [
                    Spectrum.TextArea [
                        TextArea.label "Your text"
                        TextArea.placeholder "Enter some text..."
                        TextArea.onChange setText
                    ]
                    Html.pre $"Mirrored text: {text}"
                ]
            ]
        ]

    [<ReactComponent>]
    let TextAreaExample6 () =
        let code = """let value, setValue = React.useState("me@email.com")
let regex = System.Text.RegularExpressions.Regex("^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$")
let isValid = React.useMemo((fun () -> regex.IsMatch(value)), [| value |])

Spectrum.TextArea [
    TextArea.validationState isValid
    TextArea.placeholder "Enter your email"
    TextArea.value value
    TextArea.onChange setValue
    TextArea.label "Email"
    TextArea.errorMessage "Invalid email"
]"""

        Example "Validation" code [] [
            let value, setValue = React.useState("me@email.com")
            let regex = System.Text.RegularExpressions.Regex("^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$")
            let isValid = React.useMemo((fun () -> regex.IsMatch(value)), [| value |])

            Spectrum.TextArea [
                TextArea.validationState isValid
                TextArea.placeholder "Enter your email"
                TextArea.value value
                TextArea.onChange setValue
                TextArea.label "Email"
                TextArea.errorMessage "Invalid email"
            ]
        ]

    [<ReactComponent>]
    let TextAreaExample7 () =
        let code = """Spectrum.TextArea [
    TextArea.label "Email"
    TextArea.placeholder "Email Address"
    TextArea.isQuiet true
]"""

        Example "Quiet" code [] [
            Spectrum.TextArea [
                TextArea.label "Email"
                TextArea.placeholder "Email Address"
                TextArea.isQuiet true
            ]
        ]

    [<ReactComponent>]
    let TextAreaExample8 () =
        let code = """Spectrum.TextArea [
    TextArea.label "Email"
    TextArea.placeholder "Email Address"
    TextArea.isDisabled true
]"""

        Example "Disabled" code [] [
            Spectrum.TextArea [
                TextArea.label "Email"
                TextArea.placeholder "Email Address"
                TextArea.isDisabled true
            ]
        ]

    [<ReactComponent>]
    let TextAreaExample9 () =
        let code = """Spectrum.TextArea [
    TextArea.label "Email"
    TextArea.placeholder "Email Address"
    TextArea.isReadOnly true
]"""

        Example "Read-only" code [] [
            Spectrum.TextArea [
                TextArea.label "Email"
                TextArea.placeholder "Email Address"
                TextArea.isReadOnly true
            ]
        ]

    [<ReactComponent>]
    let TextAreaExample10 () =
        let code = """Spectrum.TextArea [
    TextArea.label "Search"
    TextArea.labelPosition LabelPosition.Side
    TextArea.labelAlign Alignment.End
]"""

        Example "Label asignment and position" code [] [
            Spectrum.TextArea [
                TextArea.label "Search"
                TextArea.labelPosition LabelPosition.Side
                TextArea.labelAlign Alignment.End
            ]
        ]

    [<ReactComponent>]
    let TextAreaExample11 () =
        let code = """let value, setValue = React.useState("0")
let regex = System.Text.RegularExpressions.Regex("^\d$")
let isValid = React.useMemo((fun () -> regex.IsMatch(value)), [| value |])
Spectrum.TextArea [
    TextArea.validationState isValid
    TextArea.value value
    TextArea.onChange setValue
    TextArea.label "Favorite number"
    TextArea.maxLength 1
    TextArea.description "Enter a single digit number"
    match value with
    | "" -> TextArea.errorMessage "Empty input not allowed"
    | _ -> TextArea.errorMessage "Single digit numbers are 0-9"
]"""

        Example "Help text" code [] [
            let value, setValue = React.useState("0")
            let regex = System.Text.RegularExpressions.Regex("^\d$")
            let isValid = React.useMemo((fun () -> regex.IsMatch(value)), [| value |])
            Spectrum.TextArea [
                TextArea.validationState isValid
                TextArea.value value
                TextArea.onChange setValue
                TextArea.label "Favorite number"
                TextArea.maxLength 1
                TextArea.description "Enter a single digit number"
                match value with
                | "" -> TextArea.errorMessage "Empty input not allowed"
                | _ -> TextArea.errorMessage "Single digit numbers are 0-9"
            ]
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
            TextAreaExample1 ()
            TextAreaExample2 ()
            TextAreaExample3 ()
            TextAreaExample4 ()
            TextAreaExample5 ()
            TextAreaExample6 ()
            TextAreaExample7 ()
            TextAreaExample8 ()
            TextAreaExample9 ()
            TextAreaExample10 ()
            TextAreaExample11 ()
        ]

    [<ReactComponent>]
    let TextFieldExample1 () =
        let code = """Spectrum.TextField [
    TextField.label "Name"
]"""

        Example "Default example" code [] [
            Spectrum.TextField [
                TextField.label "Name"
            ]
        ]

    [<ReactComponent>]
    let TextFieldExample2 () =
        let code = """let value, setValue = React.useState("me@email.com")
Spectrum.Flex [
    Flex.gap (DimValue.Size Size150)
    Flex.wrap true
    Flex.children [
        Spectrum.TextField [
            TextField.label "Email (uncontrolled)"
            TextField.defaultValue "me@email.com"
        ]
        Spectrum.TextField [
            TextField.label "Email (controlled)"
            TextField.defaultValue value
            TextField.onChange setValue
        ]
    ]
]"""

        Example "Value" code [] [
            let value, setValue = React.useState("me@email.com")
            Spectrum.Flex [
                Flex.gap (DimValue.Size Size150)
                Flex.wrap true
                Flex.children [
                    Spectrum.TextField [
                        TextField.label "Email (uncontrolled)"
                        TextField.defaultValue "me@email.com"
                    ]
                    Spectrum.TextField [
                        TextField.label "Email (controlled)"
                        TextField.defaultValue value
                        TextField.onChange setValue
                    ]
                ]
            ]
        ]

    [<ReactComponent>]
    let TextFieldExample3 () =
        let code = """Spectrum.TextField [
    TextField.label "Email"
    TextField.placeholder "abc@gmail.com"
]"""

        Example "Placeholder" code [] [
            Spectrum.TextField [
                TextField.label "Email"
                TextField.placeholder "abc@gmail.com"
            ]
        ]

    [<ReactComponent>]
    let TextFieldExample4 () =
        let code = """Spectrum.Flex [
    Flex.gap (DimValue.Size Size150)
    Flex.wrap true
    Flex.children [
        Spectrum.TextField [
            TextField.label "Street address"
        ]
        Spectrum.TextField [
            TextField.label "Street address"
            TextField.isRequired true
            TextField.necessityIndicator NecessityIndicator.Icon
        ]
        Spectrum.TextField [
            TextField.label "Street address"
            TextField.isRequired true
            TextField.necessityIndicator NecessityIndicator.Label
        ]
        Spectrum.TextField [
            TextField.label "Street address"
            TextField.necessityIndicator NecessityIndicator.Label
        ]
    ]
]"""

        Example "Labeling" code [] [
            Spectrum.Flex [
                Flex.gap (DimValue.Size Size150)
                Flex.wrap true
                Flex.children [
                    Spectrum.TextField [
                        TextField.label "Street address"
                    ]
                    Spectrum.TextField [
                        TextField.label "Street address"
                        TextField.isRequired true
                        TextField.necessityIndicator NecessityIndicator.Icon
                    ]
                    Spectrum.TextField [
                        TextField.label "Street address"
                        TextField.isRequired true
                        TextField.necessityIndicator NecessityIndicator.Label
                    ]
                    Spectrum.TextField [
                        TextField.label "Street address"
                        TextField.necessityIndicator NecessityIndicator.Label
                    ]
                ]
            ]
        ]

    [<ReactComponent>]
    let TextFieldExample5 () =
        let code = """let text, setText = React.useState("")
Spectrum.Flex [
    Flex.gap (DimValue.Size Size150)
    Flex.direction FlexDirection.Column
    Flex.children [
        Spectrum.TextField [
            TextField.label "Your text"
            TextField.placeholder "Enter some text..."
            TextField.onChange setText
        ]
        Html.pre $"Mirrored text: {text}"
    ]
]"""

        Example "Events" code [] [
            let text, setText = React.useState("")
            Spectrum.Flex [
                Flex.gap (DimValue.Size Size150)
                Flex.direction FlexDirection.Column
                Flex.children [
                    Spectrum.TextField [
                        TextField.label "Your text"
                        TextField.placeholder "Enter some text..."
                        TextField.onChange setText
                    ]
                    Html.pre $"Mirrored text: {text}"
                ]
            ]
        ]

    [<ReactComponent>]
    let TextFieldExample6 () =
        let code = """let value, setValue = React.useState("me@email.com")
let regex = System.Text.RegularExpressions.Regex("^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$")
let isValid = React.useMemo((fun () -> regex.IsMatch(value)), [| value |])

Spectrum.TextField [
    TextField.validationState (if isValid then ValidationState.Valid else ValidationState.Invalid)
    TextField.placeholder "Enter your email"
    TextField.value value
    TextField.onChange setValue
    TextField.label "Email"
    TextField.errorMessage "Invalid email"
]"""

        Example "Validation" code [] [
            let value, setValue = React.useState("me@email.com")
            let regex = System.Text.RegularExpressions.Regex("^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$")
            let isValid = React.useMemo((fun () -> regex.IsMatch(value)), [| value |])

            Spectrum.TextField [
                TextField.validationState (if isValid then ValidationState.Valid else ValidationState.Invalid)
                TextField.placeholder "Enter your email"
                TextField.value value
                TextField.onChange setValue
                TextField.label "Email"
                TextField.errorMessage "Invalid email"
            ]
        ]

    [<ReactComponent>]
    let TextFieldExample7 () =
        let code = """Spectrum.TextField [
    TextField.label "Email"
    TextField.placeholder "Email Address"
    TextField.isQuiet true
]"""

        Example "Quiet" code [] [
            Spectrum.TextField [
                TextField.label "Email"
                TextField.placeholder "Email Address"
                TextField.isQuiet true
            ]
        ]

    [<ReactComponent>]
    let TextFieldExample8 () =
        let code = """Spectrum.TextField [
    TextField.label "Email"
    TextField.placeholder "Email Address"
    TextField.isDisabled true
]"""

        Example "Disabled" code [] [
            Spectrum.TextField [
                TextField.label "Email"
                TextField.placeholder "Email Address"
                TextField.isDisabled true
            ]
        ]

    [<ReactComponent>]
    let TextFieldExample9 () =
        let code = """Spectrum.TextField [
    TextField.label "Email"
    TextField.placeholder "Email Address"
    TextField.isReadOnly true
]"""

        Example "Read-only" code [] [
            Spectrum.TextField [
                TextField.label "Email"
                TextField.placeholder "Email Address"
                TextField.isReadOnly true
            ]
        ]

    [<ReactComponent>]
    let TextFieldExample10 () =
        let code = """Spectrum.TextField [
    TextField.label "Search"
    TextField.labelPosition LabelPosition.Side
    TextField.labelAlign Alignment.End
]"""

        Example "Label alignment and position" code [] [
            Spectrum.TextField [
                TextField.label "Search"
                TextField.labelPosition LabelPosition.Side
                TextField.labelAlign Alignment.End
            ]
        ]

    [<ReactComponent>]
    let TextFieldExample11 () =
        let code = """let value, setValue = React.useState("0")
let regex = System.Text.RegularExpressions.Regex("^\d$")
let isValid = React.useMemo((fun () -> regex.IsMatch(value)), [| value |])
Spectrum.TextField [
    TextField.validationState isValid
    TextField.value value
    TextField.onChange setValue
    TextField.label "Favorite number"
    TextField.maxLength 1
    TextField.description "Enter a single digit number"
    match value with
    | "" -> TextField.errorMessage "Empty input not allowed"
    | _ -> TextField.errorMessage "Single digit numbers are 0-9"
]"""

        Example "Help text" code [] [
            let value, setValue = React.useState("0")
            let regex = System.Text.RegularExpressions.Regex("^\d$")
            let isValid = React.useMemo((fun () -> regex.IsMatch(value)), [| value |])
            Spectrum.TextField [
                TextField.validationState isValid
                TextField.value value
                TextField.onChange setValue
                TextField.label "Favorite number"
                TextField.maxLength 1
                TextField.description "Enter a single digit number"
                match value with
                | "" -> TextField.errorMessage "Empty input not allowed"
                | _ -> TextField.errorMessage "Single digit numbers are 0-9"
            ]
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
            TextFieldExample1 ()
            TextFieldExample2 ()
            TextFieldExample3 ()
            TextFieldExample4 ()
            TextFieldExample5 ()
            TextFieldExample6 ()
            TextFieldExample7 ()
            TextFieldExample8 ()
            TextFieldExample9 ()
            TextFieldExample10 ()
            TextFieldExample11 ()
        ]