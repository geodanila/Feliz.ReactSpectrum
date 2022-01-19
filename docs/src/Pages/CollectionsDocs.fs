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
        let description = []

        Example "Default example" code description [
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
        let description = []

        Example "Content example" code description [
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
        let description = []

        Example "Selection example" code description [
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

    let makeItem key text =
        Spectrum.Item [
            Item.key key
            Item.textValue text
            Item.content text
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
                makeItem "Aardvark" "Aardvark"
                makeItem "Kangaroo" "Kangaroo"
                makeItem "Snake" "Snake"
            ]
        ]
        Spectrum.Section [
            Section.title "People"
            Section.children [
                makeItem "Danni" "Danni"
                makeItem "Devon" "Devon"
                makeItem "Ross" "Ross"
            ]
        ]
    ]
]"""
        let description = []

        Example "Sections" code description [
            Spectrum.ListBox [
                ListBox.width (DimValue.Size Size2400)
                ListBox.ariaLabel "Pick your favorite"
                ListBox.selectionMode SelectionMode.Single
                ListBox.children [
                    Spectrum.Section [
                        Section.title "Animals"
                        Section.children [
                            makeItem "Aardvark" "Aardvark"
                            makeItem "Kangaroo" "Kangaroo"
                            makeItem "Snake" "Snake"
                        ]
                    ]
                    Spectrum.Section [
                        Section.title "People"
                        Section.children [
                            makeItem "Danni" "Danni"
                            makeItem "Devon" "Devon"
                            makeItem "Ross" "Ross"
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
        let description = []

        Example "Dynamic items" code description [
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
let makeItem x =
    Spectrum.Item [
        Item.key x
        Item.textValue x
        Item.children [ Spectrum.Text x ]
    ]

React.fragment [
    Spectrum.ListBox [
        ListBox.ariaLabel "Choose frequency"
        ListBox.selectionMode SelectionMode.Single
        ListBox.onSelectionChange setFrequency
        ListBox.width (DimValue.Size Size2400)
        ListBox.children [
            makeItem "Rarely"
            makeItem "Sometimes"
            makeItem "Always"
        ]
    ]
    Html.p $"You selected: {match frequency with | [ value ] -> value | _ -> System.String.Empty}"
]"""
        let description = []

        Example "Events" code description [
            let frequency, setFrequency = React.useState<string list>([])
            let makeItem x =
                Spectrum.Item [
                    Item.key x
                    Item.textValue x
                    Item.children [ Spectrum.Text x ]
                ]

            React.fragment [
                Spectrum.ListBox [
                    ListBox.ariaLabel "Choose frequency"
                    ListBox.selectionMode SelectionMode.Single
                    ListBox.onSelectionChange setFrequency
                    ListBox.width (DimValue.Size Size2400)
                    ListBox.children [
                        makeItem "Rarely"
                        makeItem "Sometimes"
                        makeItem "Always"
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
        let description = []

        Example "Complex items" code description [
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
        let code = """let makeItem x =
    {| id = x; name = $"Item {x}" |}

let loadItems page =
    async {
        do! Async.Sleep 2000
        let items =
            match page with
            | i when i >= 1 && i <= 5 ->
                [ (i - 1) * 20 + 1 .. i * 20 ] |> List.map makeItem
            | _ -> []
        return items
    }

let items, setItems = React.useState<{| id: int; name: string |} list>([])
let isLoading, setIsLoading = React.useState(false)
let page, setPage = React.useState(0)
let loadMore () =
    if not isLoading && page < 5 then
        async {
            setIsLoading true
            let! newItems = loadItems (page + 1)
            setIsLoading false
            setPage (page + 1)
            setItems (items @ newItems)
        }
        |> Async.StartAsPromise
        |> unbox
    else null

// load the initial page
React.useEffectOnce(loadMore >> ignore)

Spectrum.Flex [
    Flex.maxHeight (DimValue.Size Size2400)
    Flex.children [
        Spectrum.ListBox [
            ListBox.ariaLabel "Pick an item"
            ListBox.items items
            ListBox.isLoading isLoading
            ListBox.onLoadMore loadMore
            ListBox.width (DimValue.Size Size2400)
            ListBox.itemTemplate (fun (item: {| id: int; name: string |}) ->
                Spectrum.Item [
                    Item.key $"{item.id}"
                    Item.textValue item.name
                    Item.children [ Spectrum.Text item.name ]
                ]
            )
        ]
    ]
]"""
        let description = []

        Example "Async loading more items" code description [
            let makeItem x =
                {| id = x; name = $"Item {x}" |}

            let loadItems page =
                async {
                    do! Async.Sleep 2000
                    let items =
                        match page with
                        | i when i >= 1 && i <= 5 ->
                            [ (i - 1) * 20 + 1 .. i * 20 ] |> List.map makeItem
                        | _ -> []
                    return items
                }

            let items, setItems = React.useState<{| id: int; name: string |} list>([])
            let isLoading, setIsLoading = React.useState(false)
            let page, setPage = React.useState(0)
            let loadMore () =
                if not isLoading && page < 5 then
                    async {
                        setIsLoading true
                        let! newItems = loadItems (page + 1)
                        setIsLoading false
                        setPage (page + 1)
                        setItems (items @ newItems)
                    }
                    |> Async.StartAsPromise
                    |> unbox
                else null

            // load the initial page
            React.useEffectOnce(loadMore >> ignore)

            Spectrum.Flex [
                Flex.maxHeight (DimValue.Size Size2400)
                Flex.children [
                    Spectrum.ListBox [
                        ListBox.ariaLabel "Pick an item"
                        ListBox.items items
                        ListBox.isLoading isLoading
                        ListBox.onLoadMore loadMore
                        ListBox.width (DimValue.Size Size2400)
                        ListBox.itemTemplate (fun (item: {| id: int; name: string |}) ->
                            Spectrum.Item [
                                Item.key $"{item.id}"
                                Item.textValue item.name
                                Item.children [ Spectrum.Text item.name ]
                            ]
                        )
                    ]
                ]
            ]
        ]

    [<ReactComponent>]
    let ListBoxExample9 () =
        let code = """Spectrum.ListBox [
    ListBox.width (DimValue.Size Size2400)
    ListBox.ariaLabel "Pick your favorite"
    ListBox.disabledKeys [ "Snake"; "Ross" ]
    ListBox.selectionMode SelectionMode.Single
    ListBox.children [
        Spectrum.Section [
            Section.title "Animals"
            Section.children [
                makeItem "Aardvark" "Aardvark"
                makeItem "Kangaroo" "Kangaroo"
                makeItem "Snake" "Snake"
            ]
        ]
        Spectrum.Section [
            Section.title "People"
            Section.children [
                makeItem "Danni" "Danni"
                makeItem "Devon" "Devon"
                makeItem "Ross" "Ross"
            ]
        ]
    ]
]"""
        let description = []

        Example "Disabled keys" code description [
            Spectrum.ListBox [
                ListBox.width (DimValue.Size Size2400)
                ListBox.ariaLabel "Pick your favorite"
                ListBox.disabledKeys [ "Snake"; "Ross" ]
                ListBox.selectionMode SelectionMode.Single
                ListBox.children [
                    Spectrum.Section [
                        Section.title "Animals"
                        Section.children [
                            makeItem "Aardvark" "Aardvark"
                            makeItem "Kangaroo" "Kangaroo"
                            makeItem "Snake" "Snake"
                        ]
                    ]
                    Spectrum.Section [
                        Section.title "People"
                        Section.children [
                            makeItem "Danni" "Danni"
                            makeItem "Devon" "Devon"
                            makeItem "Ross" "Ross"
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
            ListBoxExample9 ()
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
            makeItem "cut" "Cut"
            makeItem "copy" "Copy"
            makeItem "paste" "Paste"
            makeItem "replace" "Replace"
        ]
    ]
]"""
        let description = []

        Example "Default example" code description [
            Spectrum.MenuTrigger [
                Spectrum.ActionButton [
                    ActionButton.content "Edit"
                ]
                Spectrum.Menu [
                    Menu.onAction (fun x -> Browser.Dom.window.alert(x))
                    Menu.children [
                        makeItem "cut" "Cut"
                        makeItem "copy" "Copy"
                        makeItem "paste" "Paste"
                        makeItem "replace" "Replace"
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
            makeItem item.id item.name
        )
    ]
]"""
        let description = []

        Example "Using an item template" code description [
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
                        makeItem item.id item.name
                    )
                ]
            ]
        ]

    [<ReactComponent>]
    let MenuExample3 () =
        let code = """let action, setAction = React.useState("")

let makeItem key text =
    Spectrum.Item [
        Item.key key
        Item.textValue text
        Item.children [ Spectrum.Text text ]
    ]

React.fragment [
    Spectrum.MenuTrigger [
        Spectrum.ActionButton [ Html.text "Edit" ]
        Spectrum.Menu [
            Menu.onAction setAction
            Menu.children [
                makeItem "cut" "Cut"
                makeItem "copy" "Copy"
                makeItem "paste" "Paste"
            ]
        ]
    ]
    Html.p $"Action: {action}"
]"""
        let description = []

        Example "Events" code description [
            let action, setAction = React.useState("")

            let makeItem key text =
                Spectrum.Item [
                    Item.key key
                    Item.textValue text
                    Item.children [ Spectrum.Text text ]
                ]

            React.fragment [
                Spectrum.MenuTrigger [
                    Spectrum.ActionButton [ Html.text "Edit" ]
                    Spectrum.Menu [
                        Menu.onAction setAction
                        Menu.children [
                            makeItem "cut" "Cut"
                            makeItem "copy" "Copy"
                            makeItem "paste" "Paste"
                        ]
                    ]
                ]
                Html.p $"Action: {action}"
            ]
        ]

    [<ReactComponent>]
    let MenuExample4 () =
        Html.none

    [<ReactComponent>]
    let MenuExample5 () =
        Html.none

    [<ReactComponent>]
    let MenuExample6 () =
        Html.none

    [<ReactComponent>]
    let MenuExample7 () =
        Html.none

    [<ReactComponent>]
    let MenuExample8 () =
        Html.none

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
        ]

        ExampleGroup "TableView" description [
        ]