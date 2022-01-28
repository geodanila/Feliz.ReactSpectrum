namespace Pages

open Feliz.ReactSpectrum
open Feliz
open Fable.Core
open Fable.Core.JsInterop

[<AutoOpen>]
module PickersDocs =

    [<ReactComponent>]
    let ComboBoxExample1 () =
        let code = """Spectrum.ComboBox [
    ComboBox.label "Favorite animal"
    ComboBox.children [
        Spectrum.Item [
            Item.key "red panda"
            Item.content "Red Panda"
        ]
        Spectrum.Item [
            Item.key "cat"
            Item.content "Cat"
        ]
        Spectrum.Item [
            Item.key "dog"
            Item.content "Dog"
        ]
        Spectrum.Item [
            Item.key "aardvark"
            Item.content "Aardvark"
        ]
        Spectrum.Item [
            Item.key "kangaroo"
            Item.content "Kangaroo"
        ]
        Spectrum.Item [
            Item.key "snake"
            Item.content "Snake"
        ]
    ]
]"""

        Example "Default example" code [] [
            Spectrum.ComboBox [
                ComboBox.label "Favorite animal"
                ComboBox.children [
                    Spectrum.Item [
                        Item.key "red panda"
                        Item.content "Red Panda"
                    ]
                    Spectrum.Item [
                        Item.key "cat"
                        Item.content "Cat"
                    ]
                    Spectrum.Item [
                        Item.key "dog"
                        Item.content "Dog"
                    ]
                    Spectrum.Item [
                        Item.key "aardvark"
                        Item.content "Aardvark"
                    ]
                    Spectrum.Item [
                        Item.key "kangaroo"
                        Item.content "Kangaroo"
                    ]
                    Spectrum.Item [
                        Item.key "snake"
                        Item.content "Snake"
                    ]
                ]
            ]
        ]

    [<ReactComponent>]
    let ComboBoxExample2 () =
        let code = """let options = [
    {| id = 1; name = "Aerospace" |}
    {| id = 2; name = "Mechanical" |}
    {| id = 3; name = "Civil" |}
    {| id = 4; name = "Biomedical" |}
    {| id = 5; name = "Nuclear" |}
    {| id = 6; name = "Industrial" |}
    {| id = 7; name = "Chemical" |}
    {| id = 8; name = "Agricultural" |}
    {| id = 9; name = "Electrical" |}
]
let majorId, setMajorId = React.useState<int option>(None)
React.fragment [
    Html.p $"Topic id: {majorId}"
    Spectrum.ComboBox [
        ComboBox.label "Pick an engineering major"
        ComboBox.placeholder "Search engineering majors..."
        ComboBox.defaultItems options
        ComboBox.onSelectionChange setMajorId
        ComboBox.itemTemplate (fun item ->
            let name: string = item?name
            Spectrum.Item name
        )
    ]
]"""

        Example "Content" code [] [
            let options = [
                {| id = 1; name = "Aerospace" |}
                {| id = 2; name = "Mechanical" |}
                {| id = 3; name = "Civil" |}
                {| id = 4; name = "Biomedical" |}
                {| id = 5; name = "Nuclear" |}
                {| id = 6; name = "Industrial" |}
                {| id = 7; name = "Chemical" |}
                {| id = 8; name = "Agricultural" |}
                {| id = 9; name = "Electrical" |}
            ]
            let majorId, setMajorId = React.useState<int option>(None)
            React.fragment [
                Html.p $"Topic id: {majorId}"
                Spectrum.ComboBox [
                    ComboBox.label "Pick an engineering major"
                    ComboBox.placeholder "Search engineering majors..."
                    ComboBox.defaultItems options
                    ComboBox.onSelectionChange setMajorId
                    ComboBox.itemTemplate (fun item ->
                        let name: string = item?name
                        Spectrum.Item name
                    )
                ]
            ]
        ]

    [<ReactComponent>]
    let ComboBoxExample3 () =
        let code = """let options = [
    {| id = 1; name = "Adobe Photoshop" |}
    {| id = 2; name = "Adobe XD" |}
    {| id = 3; name = "Adobe InDesign" |}
    {| id = 4; name = "Adobe AfterEffects" |}
    {| id = 5; name = "Adobe Illustrator" |}
    {| id = 6; name = "Adobe Lightroom" |}
    {| id = 7; name = "Adobe Premiere Pro" |}
    {| id = 8; name = "Adobe Fresco" |}
    {| id = 9; name = "Adobe Dreamweaver" |}
]
let value, setValue = React.useState("Adobe XD")
Spectrum.Flex [
    Flex.gap (DimValue.Size Size150)
    Flex.wrap true
    Flex.children [
        Spectrum.ComboBox [
            ComboBox.label "Adobe product (Uncontrolled)"
            ComboBox.defaultItems options
            ComboBox.defaultInputValue "Adobe XD"
            ComboBox.itemTemplate (fun item ->
                let name: string = item?name
                Spectrum.Item name
            )
        ]
        Spectrum.ComboBox [
            ComboBox.label "Adobe product (Controlled)"
            ComboBox.defaultItems options
            ComboBox.inputValue value
            ComboBox.onInputChange setValue
            ComboBox.itemTemplate (fun item ->
                let name: string = item?name
                Spectrum.Item name
            )
        ]
    ]
]"""

        Example "Value" code [] [
            let options = [
                {| id = 1; name = "Adobe Photoshop" |}
                {| id = 2; name = "Adobe XD" |}
                {| id = 3; name = "Adobe InDesign" |}
                {| id = 4; name = "Adobe AfterEffects" |}
                {| id = 5; name = "Adobe Illustrator" |}
                {| id = 6; name = "Adobe Lightroom" |}
                {| id = 7; name = "Adobe Premiere Pro" |}
                {| id = 8; name = "Adobe Fresco" |}
                {| id = 9; name = "Adobe Dreamweaver" |}
            ]
            let value, setValue = React.useState("Adobe XD")
            Spectrum.Flex [
                Flex.gap (DimValue.Size Size150)
                Flex.wrap true
                Flex.children [
                    Spectrum.ComboBox [
                        ComboBox.label "Adobe product (Uncontrolled)"
                        ComboBox.defaultItems options
                        ComboBox.defaultInputValue "Adobe XD"
                        ComboBox.itemTemplate (fun item ->
                            let name: string = item?name
                            Spectrum.Item name
                        )
                    ]
                    Spectrum.ComboBox [
                        ComboBox.label "Adobe product (Controlled)"
                        ComboBox.defaultItems options
                        ComboBox.inputValue value
                        ComboBox.onInputChange setValue
                        ComboBox.itemTemplate (fun item ->
                            let name: string = item?name
                            Spectrum.Item name
                        )
                    ]
                ]
            ]
        ]

    [<ReactComponent>]
    let ComboBoxExample4 () =
        let code = """let options = [
    {| name = "Apple" |}
    {| name = "Banana" |}
    {| name = "Orange" |}
    {| name = "Grapes" |}
    {| name = "Watermelon" |}
    {| name = "Pear" |}
]
React.fragment [
    Html.p "Please indicate what fruit you would like included with your delivery. If your desired choice does not appear in the list feel free to write your own selection."
    Spectrum.ComboBox [
        ComboBox.label "Preferred fruit"
        ComboBox.defaultItems options
        ComboBox.allowsCustomValue true
        ComboBox.itemTemplate (fun item ->
            let name: string = item?name
            Spectrum.Item [
                Item.key name
                Item.content name
            ]
        )
    ]
]"""

        Example "Custom value" code [] [
            let options = [
                {| name = "Apple" |}
                {| name = "Banana" |}
                {| name = "Orange" |}
                {| name = "Grapes" |}
                {| name = "Watermelon" |}
                {| name = "Pear" |}
            ]
            React.fragment [
                Html.p "Please indicate what fruit you would like included with your delivery. If your desired choice does not appear in the list feel free to write your own selection."
                Spectrum.ComboBox [
                    ComboBox.label "Preferred fruit"
                    ComboBox.defaultItems options
                    ComboBox.allowsCustomValue true
                    ComboBox.itemTemplate (fun item ->
                        let name: string = item?name
                        Spectrum.Item [
                            Item.key name
                            Item.content name
                        ]
                    )
                ]
            ]
        ]

    [<ReactComponent>]
    let ComboBoxExample5 () =
        let code = """Spectrum.ComboBox [
    ComboBox.label "Preferred fruit or vegetable"
    ComboBox.children [
        Spectrum.Section [
            Section.title "Fruit"
            Section.children [
                Spectrum.Item [
                    Item.key "Apple"
                    Item.content "Apple"
                ]
                Spectrum.Item [
                    Item.key "Banana"
                    Item.content "Banana"
                ]
                Spectrum.Item [
                    Item.key "Orange"
                    Item.content "Orange"
                ]
            ]
        ]
        Spectrum.Section [
            Section.title "Vegetables"
            Section.children [
                Spectrum.Item [
                    Item.key "Cabbage"
                    Item.content "Cabbage"
                ]
                Spectrum.Item [
                    Item.key "Lettuce"
                    Item.content "Lettuce"
                ]
                Spectrum.Item [
                    Item.key "Carrots"
                    Item.content "Carrots"
                ]
            ]
        ]
    ]
]"""

        Example "Sections" code [] [
            Spectrum.ComboBox [
                ComboBox.label "Preferred fruit or vegetable"
                ComboBox.children [
                    Spectrum.Section [
                        Section.title "Fruit"
                        Section.children [
                            Spectrum.Item [
                                Item.key "Apple"
                                Item.content "Apple"
                            ]
                            Spectrum.Item [
                                Item.key "Banana"
                                Item.content "Banana"
                            ]
                            Spectrum.Item [
                                Item.key "Orange"
                                Item.content "Orange"
                            ]
                        ]
                    ]
                    Spectrum.Section [
                        Section.title "Vegetables"
                        Section.children [
                            Spectrum.Item [
                                Item.key "Cabbage"
                                Item.content "Cabbage"
                            ]
                            Spectrum.Item [
                                Item.key "Lettuce"
                                Item.content "Lettuce"
                            ]
                            Spectrum.Item [
                                Item.key "Carrots"
                                Item.content "Carrots"
                            ]
                        ]
                    ]
                ]
            ]
        ]

    [<ReactComponent>]
    let ComboBoxExample6 () =
        let code = """let options = [
    {| id = 1; name = "Aerospace" |}
    {| id = 2; name = "Mechanical" |}
    {| id = 3; name = "Civil" |}
    {| id = 4; name = "Biomedical" |}
    {| id = 5; name = "Nuclear" |}
    {| id = 6; name = "Industrial" |}
    {| id = 7; name = "Chemical" |}
    {| id = 8; name = "Chemical" |}
    {| id = 9; name = "Electrical" |}
]

let value, setValue = React.useState("")
let majorId, setMajorId = React.useState(0)

let onSelectionChange id = setMajorId(id)
let onInputChange value = setValue(value)

React.fragment [
    Html.p $"Current selected major id: {majorId}"
    Html.p $"Current input text: {value}"
    Spectrum.ComboBox [
        ComboBox.label "Pick an engineering major"
        ComboBox.defaultItems options
        ComboBox.selectedKey majorId
        ComboBox.onSelectionChange onSelectionChange
        ComboBox.onInputChange onInputChange
        ComboBox.itemTemplate (fun item ->
            let name: string = item?name
            Spectrum.Item name
        )
    ]
]"""

        Example "Events" code [] [
            let options = [
                {| id = 1; name = "Aerospace" |}
                {| id = 2; name = "Mechanical" |}
                {| id = 3; name = "Civil" |}
                {| id = 4; name = "Biomedical" |}
                {| id = 5; name = "Nuclear" |}
                {| id = 6; name = "Industrial" |}
                {| id = 7; name = "Chemical" |}
                {| id = 8; name = "Chemical" |}
                {| id = 9; name = "Electrical" |}
            ]

            let value, setValue = React.useState("")
            let majorId, setMajorId = React.useState(0)

            let onSelectionChange id = setMajorId(id)
            let onInputChange value = setValue(value)

            React.fragment [
                Html.p $"Current selected major id: {majorId}"
                Html.p $"Current input text: {value}"
                Spectrum.ComboBox [
                    ComboBox.label "Pick an engineering major"
                    ComboBox.defaultItems options
                    ComboBox.selectedKey majorId
                    ComboBox.onSelectionChange onSelectionChange
                    ComboBox.onInputChange onInputChange
                    ComboBox.itemTemplate (fun item ->
                        let name: string = item?name
                        Spectrum.Item name
                    )
                ]
            ]
        ]

    [<ReactComponent>]
    let ComboBoxExample7 () =
        let code = """Spectrum.ComboBox [
    ComboBox.label "Select action"
    ComboBox.children [
        Spectrum.Item [
            Item.textValue "Add to queue"
            Item.children [
                Spectrum.Icon.Add []
                Spectrum.Text "Add to queue"
                Spectrum.Text [
                    Text.slot "description"
                    Text.content "Add to current watch queue"
                ]
            ]
        ]
        Spectrum.Item [
            Item.textValue "Add review"
            Item.children [
                Spectrum.Icon.Draw []
                Spectrum.Text "Add review"
                Spectrum.Text [
                    Text.slot "description"
                    Text.content "Post a review for the episode"
                ]
            ]
        ]
        Spectrum.Item [
            Item.textValue "Subscribe to series"
            Item.children [
                Spectrum.Icon.Bell []
                Spectrum.Text "Subscribe to series"
                Spectrum.Text [
                    Text.slot "description"
                    Text.content "Add series to your subscription list and be notified when a new episode airs"
                ]
            ]
        ]
        Spectrum.Item [
            Item.textValue "Report"
            Item.children [
                Spectrum.Icon.Alert []
                Spectrum.Text "Report"
                Spectrum.Text [
                    Text.slot "description"
                    Text.content "Report an issue/violation"
                ]
            ]
        ]
    ]
]"""

        Example "Complex items" code [] [
            Spectrum.ComboBox [
                ComboBox.label "Select action"
                ComboBox.children [
                    Spectrum.Item [
                        Item.textValue "Add to queue"
                        Item.children [
                            Spectrum.Icon.Add []
                            Spectrum.Text "Add to queue"
                            Spectrum.Text [
                                Text.slot "description"
                                Text.content "Add to current watch queue"
                            ]
                        ]
                    ]
                    Spectrum.Item [
                        Item.textValue "Add review"
                        Item.children [
                            Spectrum.Icon.Draw []
                            Spectrum.Text "Add review"
                            Spectrum.Text [
                                Text.slot "description"
                                Text.content "Post a review for the episode"
                            ]
                        ]
                    ]
                    Spectrum.Item [
                        Item.textValue "Subscribe to series"
                        Item.children [
                            Spectrum.Icon.Bell []
                            Spectrum.Text "Subscribe to series"
                            Spectrum.Text [
                                Text.slot "description"
                                Text.content "Add series to your subscription list and be notified when a new episode airs"
                            ]
                        ]
                    ]
                    Spectrum.Item [
                        Item.textValue "Report"
                        Item.children [
                            Spectrum.Icon.Alert []
                            Spectrum.Text "Report"
                            Spectrum.Text [
                                Text.slot "description"
                                Text.content "Report an issue/violation"
                            ]
                        ]
                    ]
                ]
            ]
        ]

    [<ReactComponent>]
    let ComboBoxDocs () =
        let description = [
            Html.text "ComboBoxes combine a text entry with a picker menu, allowing users to filter longer lists to only the selections matching a query."
            Html.br []
            Html.br []
            Html.text " Check the official "
            Html.a [
                prop.children [ Html.text "documentation" ]
                prop.href "https://react-spectrum.adobe.com/react-spectrum/ComboBox.html"
            ]
            Html.text " for more details."
            Html.br []
            Html.br []
            Html.text "Please note that the following examples require the you to open "
            Html.em "Fable.Core.JsInterop"
            Html.text " in order to access the dynamic operator (?)."
        ]

        ExampleGroup "ComboBox" description [
            ComboBoxExample1 ()
            ComboBoxExample2 ()
            ComboBoxExample3 ()
            ComboBoxExample4 ()
            ComboBoxExample5 ()
            ComboBoxExample6 ()
            ComboBoxExample7 ()
        ]

    [<ReactComponent>]
    let PickerExample1 () =
        let code = """Spectrum.Picker [
    Picker.label "Choose frequency"
    Picker.children [
        Spectrum.Item [
            Item.key "rarely"
            Item.content "Rarely"
        ]
        Spectrum.Item [
            Item.key "sometimes"
            Item.content "Sometimes"
        ]
        Spectrum.Item [
            Item.key "always"
            Item.content "Always"
        ]
    ]
]"""

        Example "Default example" code [] [
            Spectrum.Picker [
                Picker.label "Choose frequency"
                Picker.children [
                    Spectrum.Item [
                        Item.key "rarely"
                        Item.content "Rarely"
                    ]
                    Spectrum.Item [
                        Item.key "sometimes"
                        Item.content "Sometimes"
                    ]
                    Spectrum.Item [
                        Item.key "always"
                        Item.content "Always"
                    ]
                ]
            ]
        ]

    [<ReactComponent>]
    let PickerExample2 () =
        let code = """let options = [
    {| id = 1; name = "Aardvark" |}
    {| id = 2; name = "Cat" |}
    {| id = 3; name = "Dog" |}
    {| id = 4; name = "Kangaroo" |}
    {| id = 5; name = "Koala" |}
    {| id = 6; name = "Penguin" |}
    {| id = 7; name = "Snake" |}
    {| id = 8; name = "Turtle" |}
    {| id = 9; name = "Wombat" |}
]

let animalId, setAnimalId = React.useState<int option>(None)
React.fragment [
    Spectrum.Picker [
        Picker.label "Pick an animal"
        Picker.items options
        Picker.onSelectionChange setAnimalId
        Picker.itemTemplate (fun item ->
            let name: string = item?name
            Spectrum.Item name
        )
    ]
    Html.p $"Animal id: {animalId}"
]"""

        Example "Content" code [] [
            let options = [
                {| id = 1; name = "Aardvark" |}
                {| id = 2; name = "Cat" |}
                {| id = 3; name = "Dog" |}
                {| id = 4; name = "Kangaroo" |}
                {| id = 5; name = "Koala" |}
                {| id = 6; name = "Penguin" |}
                {| id = 7; name = "Snake" |}
                {| id = 8; name = "Turtle" |}
                {| id = 9; name = "Wombat" |}
            ]

            let animalId, setAnimalId = React.useState<int option>(None)
            React.fragment [
                Spectrum.Picker [
                    Picker.label "Pick an animal"
                    Picker.items options
                    Picker.onSelectionChange setAnimalId
                    Picker.itemTemplate (fun item ->
                        let name: string = item?name
                        Spectrum.Item name
                    )
                ]
                Html.p $"Animal id: {animalId}"
            ]
        ]

    [<ReactComponent>]
    let PickerExample3 () =
        let code = """let options = [
    {| name = "Koala" |}
    {| name = "Kangaroo" |}
    {| name = "Platypus" |}
    {| name = "Bald Eagle" |}
    {| name = "Bison" |}
    {| name = "Skunk" |}
]
let animal, setAnimal = React.useState("Bison")
Spectrum.Flex [
    Flex.gap (DimValue.Size Size150)
    Flex.wrap true
    Flex.children [
        Spectrum.Picker [
            Picker.label "Pick an animal (Uncontrolled)"
            Picker.items options
            Picker.defaultSelectedKey "Bison"
            Picker.itemTemplate (fun item ->
                let name: string = item?name
                Spectrum.Item [
                    Item.key name
                    Item.content name
                ]
            )
        ]
        Spectrum.Picker [
            Picker.label "Pick an animal (Controlled)"
            Picker.items options
            Picker.selectedKey animal
            Picker.onSelectionChange setAnimal
            Picker.itemTemplate (fun item ->
                let name: string = item?name
                Spectrum.Item [
                    Item.key name
                    Item.content name
                ]
            )
        ]
    ]
]"""

        Example "Selection" code [] [
            let options = [
                {| name = "Koala" |}
                {| name = "Kangaroo" |}
                {| name = "Platypus" |}
                {| name = "Bald Eagle" |}
                {| name = "Bison" |}
                {| name = "Skunk" |}
            ]
            let animal, setAnimal = React.useState("Bison")
            Spectrum.Flex [
                Flex.gap (DimValue.Size Size150)
                Flex.wrap true
                Flex.children [
                    Spectrum.Picker [
                        Picker.label "Pick an animal (Uncontrolled)"
                        Picker.items options
                        Picker.defaultSelectedKey "Bison"
                        Picker.itemTemplate (fun item ->
                            let name: string = item?name
                            Spectrum.Item [
                                Item.key name
                                Item.content name
                            ]
                        )
                    ]
                    Spectrum.Picker [
                        Picker.label "Pick an animal (Controlled)"
                        Picker.items options
                        Picker.selectedKey animal
                        Picker.onSelectionChange setAnimal
                        Picker.itemTemplate (fun item ->
                            let name: string = item?name
                            Spectrum.Item [
                                Item.key name
                                Item.content name
                            ]
                        )
                    ]
                ]
            ]
        ]

    [<ReactComponent>]
    let PickerDocs () =
        let description = [
            Html.text "Pickers allow users to choose a single option from a collapsible list of options when space is limited."
            Html.br []
            Html.br []
            Html.text " Check the official "
            Html.a [
                prop.children [ Html.text "documentation" ]
                prop.href "https://react-spectrum.adobe.com/react-spectrum/Picker.html"
            ]
            Html.text " for more details."
            Html.br []
            Html.br []
            Html.text "Please note that the following examples require the you to open "
            Html.em "Fable.Core.JsInterop"
            Html.text " in order to access the dynamic operator (?)."
        ]

        ExampleGroup "Picker" description [
            PickerExample1 ()
            PickerExample2 ()
            PickerExample3 ()
        ]