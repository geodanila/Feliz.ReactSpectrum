namespace Pages

open Feliz.ReactSpectrum
open Feliz
open Fable.Core
open Fable.Core.JsInterop

[<AutoOpen>]
module CollectionsDocs =

    [<ReactComponent>]
    let ListBoxExample1 () =
        let code = """Spectrum.ListBox [
    ListBox.width (DimValue.Size Size2400)
    ListBox.ariaLabel "Alignment"
    ListBox.children [
        Spectrum.Item "Left"
        Spectrum.Item "Middle"
        Spectrum.Item "Right"
    ]
]"""
        Example "Default example" code [] [
            Spectrum.ListBox [
                ListBox.width (DimValue.Size Size2400)
                ListBox.ariaLabel "Alignment"
                ListBox.children [
                    Spectrum.Item "Left"
                    Spectrum.Item "Middle"
                    Spectrum.Item "Right"
                ]
            ]
        ]

    [<ReactComponent>]
    let ListBoxExample2 () =
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

let animalId, setAnimalId = React.useState<int option>(Option.None)
React.fragment [
    Spectrum.ListBox [
        ListBox.width (DimValue.Size Size2400)
        ListBox.ariaLabel "Animals"
        ListBox.items options
        ListBox.itemTemplate (fun (obj: {| id: int; name: string |}) ->
            Spectrum.Item obj.name
        )
        ListBox.selectionMode SelectionMode.Single
        ListBox.onSelectionChange (fun selection ->
            match selection with
            | [ id ] -> setAnimalId (Some id)
            | _ -> setAnimalId None
        )
    ]
    let text =
        match animalId with
        | Some _ ->  $"Animal id: {animalId}"
        | None -> "None selected"
    Html.p text
]"""

        Example "Content example" code [] [
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

            let animalId, setAnimalId = React.useState<int option>(Option.None)
            React.fragment [
                Spectrum.ListBox [
                    ListBox.width (DimValue.Size Size2400)
                    ListBox.ariaLabel "Animals"
                    ListBox.items options
                    ListBox.itemTemplate (fun (obj: {| id: int; name: string |}) ->
                        Spectrum.Item obj.name
                    )
                    ListBox.selectionMode SelectionMode.Single
                    ListBox.onSelectionChange (fun selection ->
                        match selection with
                        | [ id ] -> setAnimalId (Some id)
                        | _ -> setAnimalId None
                    )
                ]
                let text =
                    match animalId with
                    | Some _ ->  $"Animal id: {animalId}"
                    | None -> "None selected"
                Html.p text
            ]
        ]

    [<ReactComponent>]
    let ListBoxExample3 () =
        let code = """let options = [
    {| name = "Koala" |}
    {| name = "Kangaroo" |}
    {| name = "Platypus" |}
    {| name = "Bald Eagle" |}
    {| name = "Bison" |}
    {| name = "Skunk" |}
]

let animal, setAnimal = React.useState(["Bison"])

Spectrum.Flex [
    Flex.direction FlexDirection.Row
    Flex.gap (DimValue.Size Size350)
    Flex.children [
        Spectrum.ListBox [
            ListBox.selectionMode SelectionMode.Multiple
            ListBox.ariaLabel "Pick an animal"
            ListBox.items options
            ListBox.defaultSelectedKeys ["Bison"; "Koala"]
            ListBox.width (DimValue.Size Size2400)
            ListBox.itemTemplate (fun (item: {| name: string |}) ->
                Spectrum.Item [
                    Item.key item.name
                    Item.textValue item.name
                    Item.children [
                        Spectrum.Text item.name
                    ]
                ]
            )
        ]
        Spectrum.ListBox [
            ListBox.selectionMode SelectionMode.Multiple
            ListBox.ariaLabel "Pick an animal"
            ListBox.items options
            ListBox.selectedKeys animal
            ListBox.onSelectionChange setAnimal
            ListBox.width (DimValue.Size Size2400)
            ListBox.itemTemplate (fun (item: {| name: string |}) ->
                Spectrum.Item [
                    Item.key item.name
                    Item.textValue item.name
                    Item.children [
                        Spectrum.Text item.name
                    ]
                ]
            )
        ]
    ]
]"""

        Example "Selection example" code [] [
            let options = [
                {| name = "Koala" |}
                {| name = "Kangaroo" |}
                {| name = "Platypus" |}
                {| name = "Bald Eagle" |}
                {| name = "Bison" |}
                {| name = "Skunk" |}
            ]

            let animal, setAnimal = React.useState(["Bison"])

            Spectrum.Flex [
                Flex.direction FlexDirection.Row
                Flex.gap (DimValue.Size Size350)
                Flex.children [
                    Spectrum.ListBox [
                        ListBox.selectionMode SelectionMode.Multiple
                        ListBox.ariaLabel "Pick an animal"
                        ListBox.items options
                        ListBox.defaultSelectedKeys ["Bison"; "Koala"]
                        ListBox.width (DimValue.Size Size2400)
                        ListBox.itemTemplate (fun (item: {| name: string |}) ->
                            Spectrum.Item [
                                Item.key item.name
                                Item.textValue item.name
                                Item.children [
                                    Spectrum.Text item.name
                                ]
                            ]
                        )
                    ]
                    Spectrum.ListBox [
                        ListBox.selectionMode SelectionMode.Multiple
                        ListBox.ariaLabel "Pick an animal"
                        ListBox.items options
                        ListBox.selectedKeys animal
                        ListBox.onSelectionChange setAnimal
                        ListBox.width (DimValue.Size Size2400)
                        ListBox.itemTemplate (fun (item: {| name: string |}) ->
                            Spectrum.Item [
                                Item.key item.name
                                Item.textValue item.name
                                Item.children [
                                    Spectrum.Text item.name
                                ]
                            ]
                        )
                    ]
                ]
            ]
        ]

    [<ReactComponent>]
    let ListBoxExample4 () =
        let code = """Spectrum.ListBox [
    ListBox.width (DimValue.Size Size2400)
    ListBox.ariaLabel "Pick your favorite"
    ListBox.selectionMode SelectionMode.Single
    ListBox.children [
        Spectrum.Section [
            Section.title "Animals"
            Section.children [
                Spectrum.Item [
                    Item.key "Aardvark"
                    Item.content "Aardvark"
                ]
                Spectrum.Item [
                    Item.key "Kangaroo"
                    Item.content "Kangaroo"
                ]
                Spectrum.Item [
                    Item.key "Snake"
                    Item.content "Snake"
                ]
            ]
        ]
        Spectrum.Section [
            Section.title "People"
            Section.children [
                Spectrum.Item [
                    Item.key "Danni"
                    Item.content "Danni"
                ]
                Spectrum.Item [
                    Item.key "Devon"
                    Item.content "Devon"
                ]
                Spectrum.Item [
                    Item.key "Ross"
                    Item.content "Ross"
                ]
            ]
        ]
    ]
]"""

        Example "Sections" code [] [
            Spectrum.ListBox [
                ListBox.width (DimValue.Size Size2400)
                ListBox.ariaLabel "Pick your favorite"
                ListBox.selectionMode SelectionMode.Single
                ListBox.children [
                    Spectrum.Section [
                        Section.title "Animals"
                        Section.children [
                            Spectrum.Item [
                                Item.key "Aardvark"
                                Item.content "Aardvark"
                            ]
                            Spectrum.Item [
                                Item.key "Kangaroo"
                                Item.content "Kangaroo"
                            ]
                            Spectrum.Item [
                                Item.key "Snake"
                                Item.content "Snake"
                            ]
                        ]
                    ]
                    Spectrum.Section [
                        Section.title "People"
                        Section.children [
                            Spectrum.Item [
                                Item.key "Danni"
                                Item.content "Danni"
                            ]
                            Spectrum.Item [
                                Item.key "Devon"
                                Item.content "Devon"
                            ]
                            Spectrum.Item [
                                Item.key "Ross"
                                Item.content "Ross"
                            ]
                        ]
                    ]
                ]
            ]
        ]

    [<ReactComponent>]
    let ListBoxExample5 () =
        let code = """let options = [
    {| name = "Australian"
        animals = [|
            {| id = 2; name = "Koala" |}
            {| id = 3; name = "Kangaroo" |}
            {| id = 4; name = "Platypus" |} |] |}
    {| name = "American"
        animals = [|
            {| id = 6; name = "Bald Eagle" |}
            {| id = 7; name = "Bison" |}
            {| id = 8; name = "Skunk" |} |] |}
]
let selected, setSelected = React.useState<string list>([])

Spectrum.ListBox [
    ListBox.ariaLabel "Pick an animal"
    ListBox.items options
    ListBox.selectedKeys selected
    ListBox.selectionMode SelectionMode.Single
    ListBox.onSelectionChange setSelected
    ListBox.width (DimValue.Size Size2400)
    ListBox.itemTemplate (fun (item: {| name: string; animals: {| id: int; name: string |} array |} ) ->
        Spectrum.Section [
            Section.key item.name
            Section.title item.name
            Section.items item.animals
            Section.itemTemplate (fun (inner: {| id: int; name: string |}) ->
                Spectrum.Item [
                    Item.key (inner.id.ToString())
                    Item.textValue inner.name
                    Item.children [ Spectrum.Text inner.name ]
                ]
            )
        ]
    )
]"""

        Example "Dynamic items" code [] [
            let options = [
                {| name = "Australian"
                   animals = [|
                       {| id = 2; name = "Koala" |}
                       {| id = 3; name = "Kangaroo" |}
                       {| id = 4; name = "Platypus" |} |] |}
                {| name = "American"
                   animals = [|
                       {| id = 6; name = "Bald Eagle" |}
                       {| id = 7; name = "Bison" |}
                       {| id = 8; name = "Skunk" |} |] |}
            ]
            let selected, setSelected = React.useState<string list>([])

            Spectrum.ListBox [
                ListBox.ariaLabel "Pick an animal"
                ListBox.items options
                ListBox.selectedKeys selected
                ListBox.selectionMode SelectionMode.Single
                ListBox.onSelectionChange setSelected
                ListBox.width (DimValue.Size Size2400)
                ListBox.itemTemplate (fun (item: {| name: string; animals: {| id: int; name: string |} array |} ) ->
                    Spectrum.Section [
                        Section.key item.name
                        Section.title item.name
                        Section.items item.animals
                        Section.itemTemplate (fun (inner: {| id: int; name: string |}) ->
                            Spectrum.Item [
                                Item.key (inner.id.ToString())
                                Item.textValue inner.name
                                Item.children [ Spectrum.Text inner.name ]
                            ]
                        )
                    ]
                )
            ]
        ]

    [<ReactComponent>]
    let ListBoxExample6 () =
        let code = """let frequency, setFrequency = React.useState<string list>([])

React.fragment [
    Spectrum.ListBox [
        ListBox.ariaLabel "Choose frequency"
        ListBox.selectionMode SelectionMode.Single
        ListBox.onSelectionChange setFrequency
        ListBox.width (DimValue.Size Size2400)
        ListBox.children [
            Spectrum.Item [
                Item.key "Rarely"
                Item.content "Rarely"
            ]
            Spectrum.Item [
                Item.key "Sometimes"
                Item.content "Sometimes"
            ]
            Spectrum.Item [
                Item.key "Always"
                Item.content "Always"
            ]
        ]
    ]
    Html.p $"You selected: {match frequency with | [ value ] -> value | _ -> System.String.Empty}"
]"""

        Example "Events" code [] [
            let frequency, setFrequency = React.useState<string list>([])

            React.fragment [
                Spectrum.ListBox [
                    ListBox.ariaLabel "Choose frequency"
                    ListBox.selectionMode SelectionMode.Single
                    ListBox.onSelectionChange setFrequency
                    ListBox.width (DimValue.Size Size2400)
                    ListBox.children [
                        Spectrum.Item [
                            Item.key "Rarely"
                            Item.content "Rarely"
                        ]
                        Spectrum.Item [
                            Item.key "Sometimes"
                            Item.content "Sometimes"
                        ]
                        Spectrum.Item [
                            Item.key "Always"
                            Item.content "Always"
                        ]
                    ]
                ]
                Html.p $"You selected: {match frequency with | [ value ] -> value | _ -> System.String.Empty}"
            ]
        ]

    [<ReactComponent>]
    let ListBoxExample7 () =
        let code = """Spectrum.ListBox [
    ListBox.width (DimValue.Size Size2400)
    ListBox.ariaLabel "Options"
    ListBox.selectionMode SelectionMode.Single
    ListBox.children [
        Spectrum.Section [
            Section.title "Permissions"
            Section.children [
                Spectrum.Item [
                    Item.textValue "Read"
                    Item.children [
                        Spectrum.Icon.Book [
                            Icon.size IconSize.S
                        ]
                        Spectrum.Text "Read"
                        Spectrum.Text [
                            Text.content "Read only"
                            Text.slot "description"
                        ]
                    ]
                ]
                Spectrum.Item [
                    Item.textValue "Write"
                    Item.children [
                        Spectrum.Icon.Draw [
                            Icon.size IconSize.S
                        ]
                        Spectrum.Text "Write"
                        Spectrum.Text [
                            Text.content "Read and Write Only"
                            Text.slot "description"
                        ]
                    ]
                ]
                Spectrum.Item [
                    Item.textValue "Admin"
                    Item.children [
                        Spectrum.Icon.BulkEditUsers [
                            Icon.size IconSize.S
                        ]
                        Spectrum.Text "Admin"
                        Spectrum.Text [
                            Text.content "Full access"
                            Text.slot "description"
                        ]
                    ]
                ]
            ]
        ]
    ]
]"""

        Example "Complex items" code [] [
            Spectrum.ListBox [
                ListBox.width (DimValue.Size Size2400)
                ListBox.ariaLabel "Options"
                ListBox.selectionMode SelectionMode.Single
                ListBox.children [
                    Spectrum.Section [
                        Section.title "Permissions"
                        Section.children [
                            Spectrum.Item [
                                Item.textValue "Read"
                                Item.children [
                                    Spectrum.Icon.Book [
                                        Icon.size IconSize.S
                                    ]
                                    Spectrum.Text "Read"
                                    Spectrum.Text [
                                        Text.content "Read only"
                                        Text.slot "description"
                                    ]
                                ]
                            ]
                            Spectrum.Item [
                                Item.textValue "Write"
                                Item.children [
                                    Spectrum.Icon.Draw [
                                        Icon.size IconSize.S
                                    ]
                                    Spectrum.Text "Write"
                                    Spectrum.Text [
                                        Text.content "Read and Write Only"
                                        Text.slot "description"
                                    ]
                                ]
                            ]
                            Spectrum.Item [
                                Item.textValue "Admin"
                                Item.children [
                                    Spectrum.Icon.BulkEditUsers [
                                        Icon.size IconSize.S
                                    ]
                                    Spectrum.Text "Admin"
                                    Spectrum.Text [
                                        Text.content "Full access"
                                        Text.slot "description"
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ]
        ]

    [<ReactComponent>]
    let ListBoxExample8 () =
        let code = """Spectrum.ListBox [
    ListBox.width (DimValue.Size Size2400)
    ListBox.ariaLabel "Pick your favorite"
    ListBox.disabledKeys [ "Snake"; "Ross" ]
    ListBox.selectionMode SelectionMode.Single
    ListBox.children [
        Spectrum.Section [
            Section.title "Animals"
            Section.children [
                Spectrum.Item [
                    Item.key "Aardvark"
                    Item.content "Aardvark"
                ]
                Spectrum.Item [
                    Item.key "Kangaroo"
                    Item.content "Kangaroo"
                ]
                Spectrum.Item [
                    Item.key "Snake"
                    Item.content "Snake"
                ]
            ]
        ]
        Spectrum.Section [
            Section.title "People"
            Section.children [
                Spectrum.Item [
                    Item.key "Danni"
                    Item.content "Danni"
                ]
                Spectrum.Item [
                    Item.key "Devon"
                    Item.content "Devon"
                ]
                Spectrum.Item [
                    Item.key "Ross"
                    Item.content "Ross"
                ]
            ]
        ]
    ]
]"""

        Example "Disabled keys" code [] [
            Spectrum.ListBox [
                ListBox.width (DimValue.Size Size2400)
                ListBox.ariaLabel "Pick your favorite"
                ListBox.disabledKeys [ "Snake"; "Ross" ]
                ListBox.selectionMode SelectionMode.Single
                ListBox.children [
                    Spectrum.Section [
                        Section.title "Animals"
                        Section.children [
                            Spectrum.Item [
                                Item.key "Aardvark"
                                Item.content "Aardvark"
                            ]
                            Spectrum.Item [
                                Item.key "Kangaroo"
                                Item.content "Kangaroo"
                            ]
                            Spectrum.Item [
                                Item.key "Snake"
                                Item.content "Snake"
                            ]
                        ]
                    ]
                    Spectrum.Section [
                        Section.title "People"
                        Section.children [
                            Spectrum.Item [
                                Item.key "Danni"
                                Item.content "Danni"
                            ]
                            Spectrum.Item [
                                Item.key "Devon"
                                Item.content "Devon"
                            ]
                            Spectrum.Item [
                                Item.key "Ross"
                                Item.content "Ross"
                            ]
                        ]
                    ]
                ]
            ]
        ]

    [<ReactComponent>]
    let ListBoxDocs () =
        let description = [
            Html.text "A list of options that can allow selection of one or more."
            Html.br []
            Html.br []
            Html.text " Check the official "
            Html.a [
                prop.children [ Html.text "documentation" ]
                prop.href "https://react-spectrum.adobe.com/react-spectrum/ListBox.html"
            ]
            Html.text " for more details."
        ]

        ExampleGroup "ListBox" description [
            ListBoxExample1 ()
            ListBoxExample2 ()
            ListBoxExample3 ()
            ListBoxExample4 ()
            ListBoxExample5 ()
            ListBoxExample6 ()
            ListBoxExample7 ()
            ListBoxExample8 ()
        ]

    [<ReactComponent>]
    let MenuExample1 () =
        let code = """Spectrum.MenuTrigger [
    Spectrum.ActionButton [
        ActionButton.content "Edit"
    ]
    Spectrum.Menu [
        Menu.onAction (fun x -> Browser.Dom.window.alert(x))
        Menu.children [
            Spectrum.Item [
                Item.key "cut"
                Item.content "Cut"
            ]
            Spectrum.Item [
                Item.key "copy"
                Item.content "Copy"
            ]
            Spectrum.Item [
                Item.key "paste"
                Item.content "Paste"
            ]
            Spectrum.Item [
                Item.key "replace"
                Item.content "Replace"
            ]
        ]
    ]
]"""


        Example "Default example" code [] [
            Spectrum.MenuTrigger [
                Spectrum.ActionButton [
                    ActionButton.content "Edit"
                ]
                Spectrum.Menu [
                    Menu.onAction (fun x -> Browser.Dom.window.alert(x))
                    Menu.children [
                        Spectrum.Item [
                            Item.key "cut"
                            Item.content "Cut"
                        ]
                        Spectrum.Item [
                            Item.key "copy"
                            Item.content "Copy"
                        ]
                        Spectrum.Item [
                            Item.key "paste"
                            Item.content "Paste"
                        ]
                        Spectrum.Item [
                            Item.key "replace"
                            Item.content "Replace"
                        ]
                    ]
                ]
            ]
        ]

    [<ReactComponent>]
    let MenuExample2 () =
        let code = """let menuItems = [
    {| id = "cut"; name = "Cut" |}
    {| id = "copy"; name = "Copy" |}
    {| id = "Paste"; name = "Paste" |}
    {| id = "replace"; name = "Replace" |}
]

Spectrum.MenuTrigger [
    Spectrum.ActionButton [ Html.text "Edit" ]
    Spectrum.Menu [
        Menu.items menuItems
        Menu.itemTemplate (fun (item: {| id: string; name: string |}) ->
            Spectrum.Item [
                Item.key item.id
                Item.content item.name
            ]
        )
    ]
]"""


        Example "Using an item template" code [] [
            let menuItems = [
                {| id = "cut"; name = "Cut" |}
                {| id = "copy"; name = "Copy" |}
                {| id = "Paste"; name = "Paste" |}
                {| id = "replace"; name = "Replace" |}
            ]

            Spectrum.MenuTrigger [
                Spectrum.ActionButton [ Html.text "Edit" ]
                Spectrum.Menu [
                    Menu.items menuItems
                    Menu.itemTemplate (fun (item: {| id: string; name: string |}) ->
                        Spectrum.Item [
                            Item.key item.id
                            Item.content item.name
                        ]
                    )
                ]
            ]
        ]

    [<ReactComponent>]
    let MenuExample3 () =
        let code = """let action, setAction = React.useState("")

React.fragment [
    Spectrum.MenuTrigger [
        Spectrum.ActionButton [ Html.text "Edit" ]
        Spectrum.Menu [
            Menu.onAction setAction
            Menu.children [
                Spectrum.Item [
                    Item.key "cut"
                    Item.content "Cut"
                ]
                Spectrum.Item [
                    Item.key "copy"
                    Item.content "Copy"
                ]
                Spectrum.Item [
                    Item.key "paste"
                    Item.content "Paste"
                ]
            ]
        ]
    ]
    Html.p $"Action: {action}"
]"""


        Example "Events" code [] [
            let action, setAction = React.useState("")

            React.fragment [
                Spectrum.MenuTrigger [
                    Spectrum.ActionButton [ Html.text "Edit" ]
                    Spectrum.Menu [
                        Menu.onAction setAction
                        Menu.children [
                            Spectrum.Item [
                                Item.key "cut"
                                Item.content "Cut"
                            ]
                            Spectrum.Item [
                                Item.key "copy"
                                Item.content "Copy"
                            ]
                            Spectrum.Item [
                                Item.key "paste"
                                Item.content "Paste"
                            ]
                        ]
                    ]
                ]
                Html.p $"Action: {action}"
            ]
        ]

    [<ReactComponent>]
    let MenuExample4 () =
        let code = """let selected, setSelected = React.useState([ "middle" ])

React.fragment [
    Spectrum.MenuTrigger [
        Spectrum.ActionButton [ Html.text "Align" ]
        Spectrum.Menu [
            Menu.selectionMode SelectionMode.Single
            Menu.selectedKeys selected
            Menu.onSelectionChange setSelected
            Menu.children [
                Spectrum.Item [
                    Item.key "left"
                    Item.content "Left"
                ]
                Spectrum.Item [
                    Item.key "middle"
                    Item.content "Middle"
                ]
                Spectrum.Item [
                    Item.key "right"
                    Item.content "Right"
                ]
            ]
        ]
    ]
    match selected with
    | [ selected' ] -> Html.p $"Current selection (controlled): {selected'}"
    | _ -> Html.p $"No selection"
]"""


        Example "Selection" code [] [
            let selected, setSelected = React.useState([ "middle" ])

            React.fragment [
                Spectrum.MenuTrigger [
                    Spectrum.ActionButton [ Html.text "Align" ]
                    Spectrum.Menu [
                        Menu.selectionMode SelectionMode.Single
                        Menu.selectedKeys selected
                        Menu.onSelectionChange setSelected
                        Menu.children [
                            Spectrum.Item [
                                Item.key "left"
                                Item.content "Left"
                            ]
                            Spectrum.Item [
                                Item.key "middle"
                                Item.content "Middle"
                            ]
                            Spectrum.Item [
                                Item.key "right"
                                Item.content "Right"
                            ]
                        ]
                    ]
                ]
                match selected with
                | [ selected' ] -> Html.p $"Current selection (controlled): {selected'}"
                | _ -> Html.p $"No selection"
            ]
        ]

    [<ReactComponent>]
    let MenuExample5 () =
        let code = """let selected, setSelected = React.useState([ "Sidebar"; "Console" ])

React.fragment [
    Spectrum.MenuTrigger [
        MenuTrigger.closeOnSelected false
        MenuTrigger.children [
            Spectrum.ActionButton [ Html.text "Show" ]
            Spectrum.Menu [
                Menu.selectionMode SelectionMode.Multiple
                Menu.selectedKeys selected
                Menu.onSelectionChange setSelected
                Menu.children [
                    Spectrum.Item [
                        Item.key "Sidebar"
                        Item.content "Sidebar"
                    ]
                    Spectrum.Item [
                        Item.key "Searchbar"
                        Item.content "Searchbar"
                    ]
                    Spectrum.Item [
                        Item.key "Tools"
                        Item.content "Tools"
                    ]
                    Spectrum.Item [
                        Item.key "Console"
                        Item.content "Console"
                    ]
                ]
            ]
        ]
    ]
    Html.p $"Current selection (controlled): {selected |> Array.ofList}"
]"""


        Example "Selection (multiple)" code [] [
            let selected, setSelected = React.useState([ "Sidebar"; "Console" ])

            React.fragment [
                Spectrum.MenuTrigger [
                    MenuTrigger.closeOnSelected false
                    MenuTrigger.children [
                        Spectrum.ActionButton [ Html.text "Show" ]
                        Spectrum.Menu [
                            Menu.selectionMode SelectionMode.Multiple
                            Menu.selectedKeys selected
                            Menu.onSelectionChange setSelected
                            Menu.children [
                                Spectrum.Item [
                                    Item.key "Sidebar"
                                    Item.content "Sidebar"
                                ]
                                Spectrum.Item [
                                    Item.key "Searchbar"
                                    Item.content "Searchbar"
                                ]
                                Spectrum.Item [
                                    Item.key "Tools"
                                    Item.content "Tools"
                                ]
                                Spectrum.Item [
                                    Item.key "Console"
                                    Item.content "Console"
                                ]
                            ]
                        ]
                    ]
                ]
                Html.p $"Current selection (controlled): {selected |> Array.ofList}"
            ]
        ]

    [<ReactComponent>]
    let MenuExample6 () =
        let code = """let selected, setSelected = React.useState([ "bold"; "left" ])

Spectrum.MenuTrigger [
    Spectrum.ActionButton [ Html.text "Edit" ]
    Spectrum.Menu [
        Menu.selectionMode SelectionMode.Multiple
        Menu.selectedKeys selected
        Menu.onSelectionChange setSelected
        Menu.children [
            Spectrum.Section [
                Section.title "Styles"
                Section.children [
                    Spectrum.Item [
                        Item.key "bold"
                        Item.content "Bold"
                    ]
                    Spectrum.Item [
                        Item.key "underline"
                        Item.content "Underline"
                    ]
                ]
            ]
            Spectrum.Section [
                Section.title "Align"
                Section.children [
                    Spectrum.Item [
                        Item.key "left"
                        Item.content "Left"
                    ]
                    Spectrum.Item [
                        Item.key "middle"
                        Item.content "Middle"
                    ]
                    Spectrum.Item [
                        Item.key "right"
                        Item.content "Right"
                    ]
                ]
            ]
        ]
    ]
]"""


        Example "Sections" code [] [
            let selected, setSelected = React.useState([ "bold"; "left" ])

            Spectrum.MenuTrigger [
                Spectrum.ActionButton [ Html.text "Edit" ]
                Spectrum.Menu [
                    Menu.selectionMode SelectionMode.Multiple
                    Menu.selectedKeys selected
                    Menu.onSelectionChange setSelected
                    Menu.children [
                        Spectrum.Section [
                            Section.title "Styles"
                            Section.children [
                                Spectrum.Item [
                                    Item.key "bold"
                                    Item.content "Bold"
                                ]
                                Spectrum.Item [
                                    Item.key "underline"
                                    Item.content "Underline"
                                ]
                            ]
                        ]
                        Spectrum.Section [
                            Section.title "Align"
                            Section.children [
                                Spectrum.Item [
                                    Item.key "left"
                                    Item.content "Left"
                                ]
                                Spectrum.Item [
                                    Item.key "middle"
                                    Item.content "Middle"
                                ]
                                Spectrum.Item [
                                    Item.key "right"
                                    Item.content "Right"
                                ]
                            ]
                        ]
                    ]
                ]
            ]
        ]

    [<ReactComponent>]
    let MenuExample7 () =
        let code = """Spectrum.MenuTrigger [
    Spectrum.ActionButton [ Html.text "Edit" ]
    Spectrum.Menu [
        Spectrum.Item [
            Item.key "cut"
            Item.textValue "Cut"
            Item.children [
                Spectrum.Icon.Cut [ Icon.size IconSize.S ]
                Spectrum.Text "Cut"
                Spectrum.Keyboard "⌘X"
            ]
        ]
        Spectrum.Item [
            Item.key "copy"
            Item.textValue "Copy"
            Item.children [
                Spectrum.Icon.Copy [ Icon.size IconSize.S ]
                Spectrum.Text "Copy"
                Spectrum.Keyboard "⌘C"
            ]
        ]
        Spectrum.Item [
            Item.key "paste"
            Item.textValue "Paste"
            Item.children [
                Spectrum.Icon.Paste [ Icon.size IconSize.S ]
                Spectrum.Text "Paste"
                Spectrum.Keyboard "⌘V"
            ]
        ]
    ]
]"""


        Example "Complex items" code [] [
            Spectrum.MenuTrigger [
                Spectrum.ActionButton [ Html.text "Edit" ]
                Spectrum.Menu [
                    Spectrum.Item [
                        Item.key "cut"
                        Item.textValue "Cut"
                        Item.children [
                            Spectrum.Icon.Cut [ Icon.size IconSize.S ]
                            Spectrum.Text "Cut"
                            Spectrum.Keyboard "⌘X"
                        ]
                    ]
                    Spectrum.Item [
                        Item.key "copy"
                        Item.textValue "Copy"
                        Item.children [
                            Spectrum.Icon.Copy [ Icon.size IconSize.S ]
                            Spectrum.Text "Copy"
                            Spectrum.Keyboard "⌘C"
                        ]
                    ]
                    Spectrum.Item [
                        Item.key "paste"
                        Item.textValue "Paste"
                        Item.children [
                            Spectrum.Icon.Paste [ Icon.size IconSize.S ]
                            Spectrum.Text "Paste"
                            Spectrum.Keyboard "⌘V"
                        ]
                    ]
                ]
            ]
        ]

    [<ReactComponent>]
    let MenuExample8 () =
        let code = """let items = [
    {| name = "tiff"; id = "a1b2c3" |}
    {| name = "png"; id = "g5h1j9" |}
    {| name = "jpg"; id = "p8k3i4" |}
    {| name = "PDF"; id = "j7i3a0" |}
]

Spectrum.MenuTrigger [
    Spectrum.ActionButton [ Html.text "Filter" ]
    Spectrum.Menu [
        Menu.items items
        Menu.disabledKeys [ "a1b2c3"; "p8k3i4" ]
        Menu.itemTemplate (fun (item: {| name: string; id: string |}) ->
            Spectrum.Item item.name
        )
    ]
]"""


        Example "Disabled keys" code [] [
            let items = [
                {| name = "tiff"; id = "a1b2c3" |}
                {| name = "png"; id = "g5h1j9" |}
                {| name = "jpg"; id = "p8k3i4" |}
                {| name = "PDF"; id = "j7i3a0" |}
            ]

            Spectrum.MenuTrigger [
                Spectrum.ActionButton [ Html.text "Filter" ]
                Spectrum.Menu [
                    Menu.items items
                    Menu.disabledKeys [ "a1b2c3"; "p8k3i4" ]
                    Menu.itemTemplate (fun (item: {| name: string; id: string |}) ->
                        Spectrum.Item item.name
                    )
                ]
            ]
        ]

    [<ReactComponent>]
    let MenuDocs () =
        let description = [
            Html.text "Menus display a list of actions or options that a user can choose."
            Html.br []
            Html.br []
            Html.text " Check the official "
            Html.a [
                prop.children [ Html.text "documentation" ]
                prop.href "https://react-spectrum.adobe.com/react-spectrum/Menu.html"
            ]
            Html.text " for more details."
        ]

        ExampleGroup "Menu" description [
            MenuExample1 ()
            MenuExample2 ()
            MenuExample3 ()
            MenuExample4 ()
            MenuExample5 ()
            MenuExample6 ()
            MenuExample7 ()
            MenuExample8 ()
        ]

    [<ReactComponent>]
    let MenuTriggerExample1 () =
        let code = """let isOpen, setIsOpen = React.useState(false)

Spectrum.Flex [
    Flex.gap (DimValue.Size Size100)
    Flex.alignItems FlexAlignItems.Center
    Flex.children [
        Spectrum.MenuTrigger [
            MenuTrigger.onOpenChange setIsOpen
            MenuTrigger.children [
                Spectrum.ActionButton [ Html.text "Edit" ]
                Spectrum.Menu [
                    Spectrum.Item [
                        Item.key "cut"
                        Item.textValue "Cut"
                        Item.children [ Spectrum.Text "Cut" ]
                    ]
                    Spectrum.Item [
                        Item.key "copy"
                        Item.textValue "Copy"
                        Item.children [ Spectrum.Text "Copy" ]
                    ]
                    Spectrum.Item [
                        Item.key "paste"
                        Item.textValue "Paste"
                        Item.children [ Spectrum.Text "Paste" ]
                    ]
                ]
            ]
        ]
        Html.div $"Currently open: {isOpen}"
    ]
]"""


        Example "Events" code [] [
            let isOpen, setIsOpen = React.useState(false)

            Spectrum.Flex [
                Flex.gap (DimValue.Size Size100)
                Flex.alignItems FlexAlignItems.Center
                Flex.children [
                    Spectrum.MenuTrigger [
                        MenuTrigger.onOpenChange setIsOpen
                        MenuTrigger.children [
                            Spectrum.ActionButton [ Html.text "Edit" ]
                            Spectrum.Menu [
                                Spectrum.Item [
                                    Item.key "cut"
                                    Item.textValue "Cut"
                                    Item.children [ Spectrum.Text "Cut" ]
                                ]
                                Spectrum.Item [
                                    Item.key "copy"
                                    Item.textValue "Copy"
                                    Item.children [ Spectrum.Text "Copy" ]
                                ]
                                Spectrum.Item [
                                    Item.key "paste"
                                    Item.textValue "Paste"
                                    Item.children [ Spectrum.Text "Paste" ]
                                ]
                            ]
                        ]
                    ]
                    Html.div $"Currently open: {isOpen}"
                ]
            ]
        ]

    [<ReactComponent>]
    let MenuTriggerExample2 () =
        let code = """Spectrum.Flex [
    Flex.gap (DimValue.Size Size100)
    Flex.children [
        Spectrum.MenuTrigger [
            MenuTrigger.align Alignment.Start
            MenuTrigger.children [
                Spectrum.ActionButton "Edit"
                Spectrum.Menu [
                    Spectrum.Item [
                        Item.key "cut"
                        Item.content "Cut"
                    ]
                    Spectrum.Item [
                        Item.key "copy"
                        Item.content "Copy"
                    ]
                    Spectrum.Item [
                        Item.key "paste"
                        Item.content "Paste"
                    ]
                ]
            ]
        ]
        Spectrum.MenuTrigger [
            MenuTrigger.align Alignment.End
            MenuTrigger.direction MenuDirection.Top
            MenuTrigger.shouldFlip false
            MenuTrigger.children [
                Spectrum.ActionButton "View"
                Spectrum.Menu [
                    Spectrum.Item [
                        Item.key "sidebar"
                        Item.content "Sidebar"
                    ]
                    Spectrum.Item [
                        Item.key "options"
                        Item.content "Page options"
                    ]
                    Spectrum.Item [
                        Item.key "edit"
                        Item.content "Edit panel"
                    ]
                ]
            ]
        ]
        Spectrum.MenuTrigger [
            MenuTrigger.align Alignment.Start
            MenuTrigger.direction MenuDirection.Start
            MenuTrigger.children [
                Spectrum.ActionButton "Edit"
                Spectrum.Menu [
                    Spectrum.Item [
                        Item.key "cut"
                        Item.content "Cut"
                    ]
                    Spectrum.Item [
                        Item.key "copy"
                        Item.content "Copy"
                    ]
                    Spectrum.Item [
                        Item.key "paste"
                        Item.content "Paste"
                    ]
                ]
            ]
        ]
        Spectrum.MenuTrigger [
            MenuTrigger.align Alignment.End
            MenuTrigger.direction MenuDirection.End
            MenuTrigger.children [
                Spectrum.ActionButton "View"
                Spectrum.Menu [
                    Spectrum.Item [
                        Item.key "sidebar"
                        Item.content "Sidebar"
                    ]
                    Spectrum.Item [
                        Item.key "options"
                        Item.content "Page options"
                    ]
                    Spectrum.Item [
                        Item.key "edit"
                        Item.content "Edit panel"
                    ]
                ]
            ]
        ]
    ]
]"""


        Example "Alignment and direction" code [] [
            Spectrum.Flex [
                Flex.gap (DimValue.Size Size100)
                Flex.children [
                    Spectrum.MenuTrigger [
                        MenuTrigger.align Alignment.Start
                        MenuTrigger.children [
                            Spectrum.ActionButton "Edit"
                            Spectrum.Menu [
                                Spectrum.Item [
                                    Item.key "cut"
                                    Item.content "Cut"
                                ]
                                Spectrum.Item [
                                    Item.key "copy"
                                    Item.content "Copy"
                                ]
                                Spectrum.Item [
                                    Item.key "paste"
                                    Item.content "Paste"
                                ]
                            ]
                        ]
                    ]
                    Spectrum.MenuTrigger [
                        MenuTrigger.align Alignment.End
                        MenuTrigger.direction MenuDirection.Top
                        MenuTrigger.shouldFlip false
                        MenuTrigger.children [
                            Spectrum.ActionButton "View"
                            Spectrum.Menu [
                                Spectrum.Item [
                                    Item.key "sidebar"
                                    Item.content "Sidebar"
                                ]
                                Spectrum.Item [
                                    Item.key "options"
                                    Item.content "Page options"
                                ]
                                Spectrum.Item [
                                    Item.key "edit"
                                    Item.content "Edit panel"
                                ]
                            ]
                        ]
                    ]
                    Spectrum.MenuTrigger [
                        MenuTrigger.align Alignment.Start
                        MenuTrigger.direction MenuDirection.Start
                        MenuTrigger.children [
                            Spectrum.ActionButton "Edit"
                            Spectrum.Menu [
                                Spectrum.Item [
                                    Item.key "cut"
                                    Item.content "Cut"
                                ]
                                Spectrum.Item [
                                    Item.key "copy"
                                    Item.content "Copy"
                                ]
                                Spectrum.Item [
                                    Item.key "paste"
                                    Item.content "Paste"
                                ]
                            ]
                        ]
                    ]
                    Spectrum.MenuTrigger [
                        MenuTrigger.align Alignment.End
                        MenuTrigger.direction MenuDirection.End
                        MenuTrigger.children [
                            Spectrum.ActionButton "View"
                            Spectrum.Menu [
                                Spectrum.Item [
                                    Item.key "sidebar"
                                    Item.content "Sidebar"
                                ]
                                Spectrum.Item [
                                    Item.key "options"
                                    Item.content "Page options"
                                ]
                                Spectrum.Item [
                                    Item.key "edit"
                                    Item.content "Edit panel"
                                ]
                            ]
                        ]
                    ]
                ]
            ]
        ]

    [<ReactComponent>]
    let MenuTriggerExample3 () =
        let code = """let isOpen, setIsOpen = React.useState(false)
let selection, setSelection = React.useState([])

Spectrum.MenuTrigger [
    MenuTrigger.isOpen isOpen
    MenuTrigger.onOpenChange setIsOpen
    MenuTrigger.children [
        Spectrum.ActionButton [ Html.text "View" ]
        Spectrum.Menu [
            Menu.selectionMode SelectionMode.Multiple
            Menu.selectedKeys selection
            Menu.onSelectionChange setSelection
            Menu.children [
                Spectrum.Item [
                    Item.key "side"
                    Item.textValue "Sidebar"
                    Item.children [ Spectrum.Text "Sidebar" ]
                ]
                Spectrum.Item [
                    Item.key "options"
                    Item.textValue "Page options"
                    Item.children [ Spectrum.Text "Page options" ]
                ]
                Spectrum.Item [
                    Item.key "edit"
                    Item.textValue "Edit panel"
                    Item.children [ Spectrum.Text "Edit panel" ]
                ]
            ]
        ]
    ]
]"""


        Example "Open and selection" code [] [
            let isOpen, setIsOpen = React.useState(false)
            let selection, setSelection = React.useState([])

            Spectrum.MenuTrigger [
                MenuTrigger.isOpen isOpen
                MenuTrigger.onOpenChange setIsOpen
                MenuTrigger.children [
                    Spectrum.ActionButton [ Html.text "View" ]
                    Spectrum.Menu [
                        Menu.selectionMode SelectionMode.Multiple
                        Menu.selectedKeys selection
                        Menu.onSelectionChange setSelection
                        Menu.children [
                            Spectrum.Item [
                                Item.key "side"
                                Item.textValue "Sidebar"
                                Item.children [ Spectrum.Text "Sidebar" ]
                            ]
                            Spectrum.Item [
                                Item.key "options"
                                Item.textValue "Page options"
                                Item.children [ Spectrum.Text "Page options" ]
                            ]
                            Spectrum.Item [
                                Item.key "edit"
                                Item.textValue "Edit panel"
                                Item.children [ Spectrum.Text "Edit panel" ]
                            ]
                        ]
                    ]
                ]
            ]
        ]

    [<ReactComponent>]
    let MenuTriggerDocs () =
        let description = [
            Html.text "The MenuTrigger serves as a wrapper around a Menu and its associated trigger, linking the Menu's open state with the trigger's press state."
            Html.br []
            Html.br []
            Html.text " Check the official "
            Html.a [
                prop.children [ Html.text "documentation" ]
                prop.href "https://react-spectrum.adobe.com/react-spectrum/MenuTrigger.html"
            ]
            Html.text " for more details."
        ]

        ExampleGroup "MenuTrigger" description [
            MenuTriggerExample1 ()
            MenuTriggerExample2 ()
            MenuTriggerExample3 ()
        ]

    [<ReactComponent>]
    let TableViewExample1 () =
        let code = """Spectrum.TableView [
    TableView.ariaLabel "Example table with static contents"
    TableView.selectionMode SelectionMode.Multiple
    TableView.children [
        Spectrum.TableHeader [
            Spectrum.Column "Name"
            Spectrum.Column "Type"
            Spectrum.Column [
                Column.align ColumnAlignment.End
                Column.content "Date Modified"
            ]
        ]
        Spectrum.TableBody [
            Spectrum.Row [
                Spectrum.Cell "Games"
                Spectrum.Cell "File folder"
                Spectrum.Cell "6/7/2020"
            ]
            Spectrum.Row [
                Spectrum.Cell "Program Files"
                Spectrum.Cell "File folder"
                Spectrum.Cell "4/7/2021"
            ]
            Spectrum.Row [
                Spectrum.Cell "bootmgr"
                Spectrum.Cell "System file"
                Spectrum.Cell "11/20/2010"
            ]
            Spectrum.Row [
                Spectrum.Cell "log.txt"
                Spectrum.Cell "Text Document"
                Spectrum.Cell "1/18/2016"
            ]
        ]
    ]
]"""

        Example "Default example" code [] [
            Spectrum.TableView [
                TableView.ariaLabel "Example table with static contents"
                TableView.selectionMode SelectionMode.Multiple
                TableView.children [
                    Spectrum.TableHeader [
                        Spectrum.Column "Name"
                        Spectrum.Column "Type"
                        Spectrum.Column [
                            Column.align ColumnAlignment.End
                            Column.content "Date Modified"
                        ]
                    ]
                    Spectrum.TableBody [
                        Spectrum.Row [
                            Spectrum.Cell "Games"
                            Spectrum.Cell "File folder"
                            Spectrum.Cell "6/7/2020"
                        ]
                        Spectrum.Row [
                            Spectrum.Cell "Program Files"
                            Spectrum.Cell "File folder"
                            Spectrum.Cell "4/7/2021"
                        ]
                        Spectrum.Row [
                            Spectrum.Cell "bootmgr"
                            Spectrum.Cell "System file"
                            Spectrum.Cell "11/20/2010"
                        ]
                        Spectrum.Row [
                            Spectrum.Cell "log.txt"
                            Spectrum.Cell "Text Document"
                            Spectrum.Cell "1/18/2016"
                        ]
                    ]
                ]
            ]
        ]

    [<ReactComponent>]
    let TableViewExample2 () =
        let code = """let columns = [
    {| name = "Name"; uid = "name" |}
    {| name = "Type"; uid = "entryType" |}
    {| name = "Date Modified"; uid = "date" |}
]

let rows = [
    {| id = 1; name = "Games"; date = "6/7/2020"; entryType = "File folder" |}
    {| id = 2; name = "Program Files"; date = "4/7/2021"; entryType = "File folder" |}
    {| id = 3; name = "bootmgr"; date = "11/20/2010"; entryType = "System file" |}
    {| id = 4; name = "log.txt"; date = "1/18/2016"; entryType = "Text Document" |}
]

Spectrum.TableView [
    TableView.ariaLabel "Example table with dynamic content"
    TableView.maxWidth (DimValue.Size Size6000)
    TableView.selectionMode SelectionMode.Multiple
    TableView.disabledKeys [ 3 ]
    TableView.children [
        Spectrum.TableHeader [
            TableHeader.columns columns
            TableHeader.columnTemplate (fun (col: {| name: string; uid: string |}) ->
                Spectrum.Column [
                    Column.key col.uid
                    Column.align (if col.uid = "date" then ColumnAlignment.End else ColumnAlignment.Start)
                    Column.content col.name
                ]
            )
        ]
        Spectrum.TableBody [
            TableBody.items rows
            TableBody.itemTemplate (fun (item: {| id: int; name: string; date: string; entryType: string |}) ->
                Spectrum.Row [
                    Row.cellTemplate (fun columnKey ->
                        let entry: string = item?(columnKey)
                        Spectrum.Cell entry
                    )
                ]
            )
        ]
    ]
]"""

        Example "More complex example" code [] [
            let columns = [
                {| name = "Name"; uid = "name" |}
                {| name = "Type"; uid = "entryType" |}
                {| name = "Date Modified"; uid = "date" |}
            ]

            let rows = [
                {| id = 1; name = "Games"; date = "6/7/2020"; entryType = "File folder" |}
                {| id = 2; name = "Program Files"; date = "4/7/2021"; entryType = "File folder" |}
                {| id = 3; name = "bootmgr"; date = "11/20/2010"; entryType = "System file" |}
                {| id = 4; name = "log.txt"; date = "1/18/2016"; entryType = "Text Document" |}
            ]

            Spectrum.TableView [
                TableView.ariaLabel "Example table with dynamic content"
                TableView.maxWidth (DimValue.Size Size6000)
                TableView.selectionMode SelectionMode.Multiple
                TableView.disabledKeys [ 3 ]
                TableView.children [
                    Spectrum.TableHeader [
                        TableHeader.columns columns
                        TableHeader.columnTemplate (fun (col: {| name: string; uid: string |}) ->
                            Spectrum.Column [
                                Column.key col.uid
                                Column.align (if col.uid = "date" then ColumnAlignment.End else ColumnAlignment.Start)
                                Column.content col.name
                            ]
                        )
                    ]
                    Spectrum.TableBody [
                        TableBody.items rows
                        TableBody.itemTemplate (fun (item: {| id: int; name: string; date: string; entryType: string |}) ->
                            Spectrum.Row [
                                Row.cellTemplate (fun columnKey ->
                                    let entry: string = item?(columnKey)
                                    Spectrum.Cell entry
                                )
                            ]
                        )
                    ]
                ]
            ]
        ]

    [<ReactComponent>]
    let TableViewExample3 () =
        let code = """let columns = [
    {| id = "firstName"; name = "First Name" |}
    {| id = "lastName"; name = "Last Name" |}
    {| id = "city"; name = "City" |}
]

let rows = [
    {| id = 1; firstName = "George"; lastName = "Danila"; city = "Sibiu" |}
    {| id = 2; firstName = "Andras"; lastName = "Rodmell"; city = "Tilburg" |}
    {| id = 3; firstName = "Hansiain"; lastName = "Muino"; city = "Hollola" |}
    {| id = 4; firstName = "Northrop"; lastName = "Adnet"; city = "Lai Cach" |}
    {| id = 5; firstName = "Giana"; lastName = "Phython"; city = "Laspezia" |}
    {| id = 6; firstName = "Maud"; lastName = "Jaram"; city = "Tipaz" |}
    {| id = 7; firstName = "Maud"; lastName = "Jaram"; city = "Testing" |}
    {| id = 8; firstName = "Andras"; lastName = "Rodmell"; city = "Tilburg" |}
    {| id = 9; firstName = "Hansiain"; lastName = "Muino"; city = "Hollola" |}
    {| id = 10; firstName = "Northrop"; lastName = "Adnet"; city = "Lai Cach" |}
    {| id = 11; firstName = "Giana"; lastName = "Phython"; city = "Laspezia" |}
    {| id = 12; firstName = "Maud"; lastName = "Jaram"; city = "Tipaz" |}
    {| id = 13; firstName = "Maud"; lastName = "Jaram"; city = "Testing" |}
    {| id = 14; firstName = "Andras"; lastName = "Rodmell"; city = "Tilburg" |}
    {| id = 15; firstName = "Hansiain"; lastName = "Muino"; city = "Hollola" |}
    {| id = 16; firstName = "Northrop"; lastName = "Adnet"; city = "Lai Cach" |}
    {| id = 17; firstName = "Giana"; lastName = "Phython"; city = "Laspezia" |}
    {| id = 18; firstName = "Maud"; lastName = "Jaram"; city = "Tipaz" |}
    {| id = 19; firstName = "Maud"; lastName = "Jaram"; city = "Testing" |}
    {| id = 20; firstName = "Andras"; lastName = "Rodmell"; city = "Tilburg" |}
    {| id = 21; firstName = "Hansiain"; lastName = "Muino"; city = "Hollola" |}
    {| id = 22; firstName = "Northrop"; lastName = "Adnet"; city = "Lai Cach" |}
    {| id = 23; firstName = "Giana"; lastName = "Phython"; city = "Laspezia" |}
    {| id = 24; firstName = "Maud"; lastName = "Jaram"; city = "Tipaz" |}
    {| id = 25; firstName = "Maud"; lastName = "Jaram"; city = "Testing" |}
    {| id = 26; firstName = "Northrop"; lastName = "Adnet"; city = "Lai Cach" |}
    {| id = 27; firstName = "Giana"; lastName = "Phython"; city = "Laspezia" |}
    {| id = 28; firstName = "Maud"; lastName = "Jaram"; city = "Tipaz" |}
    {| id = 29; firstName = "Maud"; lastName = "Jaram"; city = "Testing" |}
    {| id = 30; firstName = "Northrop"; lastName = "Adnet"; city = "Lai Cach" |}
    {| id = 31; firstName = "Giana"; lastName = "Phython"; city = "Laspezia" |}
    {| id = 32; firstName = "Maud"; lastName = "Jaram"; city = "Tipaz" |}
    {| id = 33; firstName = "Maud"; lastName = "Jaram"; city = "Testing" |}
    {| id = 34; firstName = "Andras"; lastName = "Rodmell"; city = "Tilburg" |}
    {| id = 35; firstName = "Hansiain"; lastName = "Muino"; city = "Hollola" |}
    {| id = 36; firstName = "Northrop"; lastName = "Adnet"; city = "Lai Cach" |}
    {| id = 37; firstName = "Giana"; lastName = "Phython"; city = "Laspezia" |}
    {| id = 38; firstName = "Maud"; lastName = "Jaram"; city = "Tipaz" |}
    {| id = 39; firstName = "Maud"; lastName = "Jaram"; city = "Testing" |}
    {| id = 40; firstName = "Northrop"; lastName = "Adnet"; city = "Lai Cach" |}
    {| id = 41; firstName = "Giana"; lastName = "Phython"; city = "Laspezia" |}
    {| id = 42; firstName = "Maud"; lastName = "Jaram"; city = "Tipaz" |}
    {| id = 43; firstName = "Maud"; lastName = "Jaram"; city = "Testing" |}
    {| id = 44; firstName = "Andras"; lastName = "Rodmell"; city = "Tilburg" |}
    {| id = 45; firstName = "Hansiain"; lastName = "Muino"; city = "Hollola" |}
    {| id = 46; firstName = "Northrop"; lastName = "Adnet"; city = "Lai Cach" |}
    {| id = 47; firstName = "Giana"; lastName = "Phython"; city = "Laspezia" |}
    {| id = 48; firstName = "Maud"; lastName = "Jaram"; city = "Tipaz" |}
    {| id = 49; firstName = "Maud"; lastName = "Jaram"; city = "Testing" |}
]

Spectrum.Flex [
    Flex.height (DimValue.Size Size5000)
    Flex.width "100%"
    Flex.direction FlexDirection.Column
    Flex.gap (DimValue.Size Size150)
    Flex.children [
        Spectrum.ActionButton [
            ActionButton.alignSelf FlexAlignSelf.Start
            ActionButton.content "Add"
        ]
        Spectrum.TableView [
            TableView.flex true
            TableView.ariaLabel "Example table with dynamic content"
            TableView.selectionMode SelectionMode.Single
            TableView.selectionStyle TableViewSelectionStyle.Highlight
            TableView.onAction (fun x -> Browser.Dom.window.alert(x))
            TableView.children [
                Spectrum.TableHeader [
                    TableHeader.columns columns
                    TableHeader.columnTemplate (fun (col: {| id: string; name: string |} ) ->
                        Spectrum.Column [
                            Column.key col.id
                            Column.content col.name
                        ]
                    )
                ]
                Spectrum.TableBody [
                    TableBody.items rows
                    TableBody.itemTemplate (fun (item: {| firstName: string; lastName: string; city: string |}) ->
                        Spectrum.Row [
                            Row.cellTemplate (fun columnKey ->
                                Spectrum.Cell (item?(columnKey) |> string)
                            )
                        ]
                    )
                ]
            ]
        ]
    ]
]"""

        Example "Layout + highlight selection + action" code [] [
            let columns = [
                {| id = "firstName"; name = "First Name" |}
                {| id = "lastName"; name = "Last Name" |}
                {| id = "city"; name = "City" |}
            ]

            let rows = [
                {| id = 1; firstName = "George"; lastName = "Danila"; city = "Sibiu" |}
                {| id = 2; firstName = "Andras"; lastName = "Rodmell"; city = "Tilburg" |}
                {| id = 3; firstName = "Hansiain"; lastName = "Muino"; city = "Hollola" |}
                {| id = 4; firstName = "Northrop"; lastName = "Adnet"; city = "Lai Cach" |}
                {| id = 5; firstName = "Giana"; lastName = "Phython"; city = "Laspezia" |}
                {| id = 6; firstName = "Maud"; lastName = "Jaram"; city = "Tipaz" |}
                {| id = 7; firstName = "Maud"; lastName = "Jaram"; city = "Testing" |}
                {| id = 8; firstName = "Andras"; lastName = "Rodmell"; city = "Tilburg" |}
                {| id = 9; firstName = "Hansiain"; lastName = "Muino"; city = "Hollola" |}
                {| id = 10; firstName = "Northrop"; lastName = "Adnet"; city = "Lai Cach" |}
                {| id = 11; firstName = "Giana"; lastName = "Phython"; city = "Laspezia" |}
                {| id = 12; firstName = "Maud"; lastName = "Jaram"; city = "Tipaz" |}
                {| id = 13; firstName = "Maud"; lastName = "Jaram"; city = "Testing" |}
                {| id = 14; firstName = "Andras"; lastName = "Rodmell"; city = "Tilburg" |}
                {| id = 15; firstName = "Hansiain"; lastName = "Muino"; city = "Hollola" |}
                {| id = 16; firstName = "Northrop"; lastName = "Adnet"; city = "Lai Cach" |}
                {| id = 17; firstName = "Giana"; lastName = "Phython"; city = "Laspezia" |}
                {| id = 18; firstName = "Maud"; lastName = "Jaram"; city = "Tipaz" |}
                {| id = 19; firstName = "Maud"; lastName = "Jaram"; city = "Testing" |}
                {| id = 20; firstName = "Andras"; lastName = "Rodmell"; city = "Tilburg" |}
                {| id = 21; firstName = "Hansiain"; lastName = "Muino"; city = "Hollola" |}
                {| id = 22; firstName = "Northrop"; lastName = "Adnet"; city = "Lai Cach" |}
                {| id = 23; firstName = "Giana"; lastName = "Phython"; city = "Laspezia" |}
                {| id = 24; firstName = "Maud"; lastName = "Jaram"; city = "Tipaz" |}
                {| id = 25; firstName = "Maud"; lastName = "Jaram"; city = "Testing" |}
                {| id = 26; firstName = "Northrop"; lastName = "Adnet"; city = "Lai Cach" |}
                {| id = 27; firstName = "Giana"; lastName = "Phython"; city = "Laspezia" |}
                {| id = 28; firstName = "Maud"; lastName = "Jaram"; city = "Tipaz" |}
                {| id = 29; firstName = "Maud"; lastName = "Jaram"; city = "Testing" |}
                {| id = 30; firstName = "Northrop"; lastName = "Adnet"; city = "Lai Cach" |}
                {| id = 31; firstName = "Giana"; lastName = "Phython"; city = "Laspezia" |}
                {| id = 32; firstName = "Maud"; lastName = "Jaram"; city = "Tipaz" |}
                {| id = 33; firstName = "Maud"; lastName = "Jaram"; city = "Testing" |}
                {| id = 34; firstName = "Andras"; lastName = "Rodmell"; city = "Tilburg" |}
                {| id = 35; firstName = "Hansiain"; lastName = "Muino"; city = "Hollola" |}
                {| id = 36; firstName = "Northrop"; lastName = "Adnet"; city = "Lai Cach" |}
                {| id = 37; firstName = "Giana"; lastName = "Phython"; city = "Laspezia" |}
                {| id = 38; firstName = "Maud"; lastName = "Jaram"; city = "Tipaz" |}
                {| id = 39; firstName = "Maud"; lastName = "Jaram"; city = "Testing" |}
                {| id = 40; firstName = "Northrop"; lastName = "Adnet"; city = "Lai Cach" |}
                {| id = 41; firstName = "Giana"; lastName = "Phython"; city = "Laspezia" |}
                {| id = 42; firstName = "Maud"; lastName = "Jaram"; city = "Tipaz" |}
                {| id = 43; firstName = "Maud"; lastName = "Jaram"; city = "Testing" |}
                {| id = 44; firstName = "Andras"; lastName = "Rodmell"; city = "Tilburg" |}
                {| id = 45; firstName = "Hansiain"; lastName = "Muino"; city = "Hollola" |}
                {| id = 46; firstName = "Northrop"; lastName = "Adnet"; city = "Lai Cach" |}
                {| id = 47; firstName = "Giana"; lastName = "Phython"; city = "Laspezia" |}
                {| id = 48; firstName = "Maud"; lastName = "Jaram"; city = "Tipaz" |}
                {| id = 49; firstName = "Maud"; lastName = "Jaram"; city = "Testing" |}
            ]

            Spectrum.Flex [
                Flex.height (DimValue.Size Size5000)
                Flex.width "100%"
                Flex.direction FlexDirection.Column
                Flex.gap (DimValue.Size Size150)
                Flex.children [
                    Spectrum.ActionButton [
                        ActionButton.alignSelf FlexAlignSelf.Start
                        ActionButton.content "Add"
                    ]
                    Spectrum.TableView [
                        TableView.flex true
                        TableView.ariaLabel "Example table with dynamic content"
                        TableView.selectionMode SelectionMode.Single
                        TableView.selectionStyle TableViewSelectionStyle.Highlight
                        TableView.onAction (fun x -> Browser.Dom.window.alert(x))
                        TableView.children [
                            Spectrum.TableHeader [
                                TableHeader.columns columns
                                TableHeader.columnTemplate (fun (col: {| id: string; name: string |} ) ->
                                    Spectrum.Column [
                                        Column.key col.id
                                        Column.content col.name
                                    ]
                                )
                            ]
                            Spectrum.TableBody [
                                TableBody.items rows
                                TableBody.itemTemplate (fun (item: {| firstName: string; lastName: string; city: string |}) ->
                                    Spectrum.Row [
                                        Row.cellTemplate (fun columnKey ->
                                            Spectrum.Cell (item?(columnKey) |> string)
                                        )
                                    ]
                                )
                            ]
                        ]
                    ]
                ]
            ]
        ]

    [<ReactComponent>]
    let TableViewDocs () =
        let description = [
            Html.text "Tables are containers for displaying information. They allow users to quickly scan, sort, compare, and take action on large amounts of data."
            Html.br []
            Html.br []
            Html.text " Check the official "
            Html.a [
                prop.children [ Html.text "documentation" ]
                prop.href "https://react-spectrum.adobe.com/react-spectrum/TableView.html"
            ]
            Html.text " for more details."
            Html.br []
            Html.br []
            Html.text "Please note that the following examples require the you to open "
            Html.em "Fable.Core.JsInterop"
            Html.text " in order to access the dynamic operator (?)."
        ]

        ExampleGroup "TableView" description [
            TableViewExample1 ()
            TableViewExample2 ()
            TableViewExample3 ()
        ]