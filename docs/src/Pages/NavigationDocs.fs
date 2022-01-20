namespace Pages

open Feliz.ReactSpectrum
open Feliz
open Fable.Core
open Fable.Core.JsInterop

[<AutoOpen>]
module NavigationDocs =

    [<ReactComponent>]
    let BreadcrumbsExample1 () =
        let code = """Spectrum.Breadcrumbs [
    makeItem "home" "Home"
    makeItem "trendy" "Trendy"
    makeItem "march 2020 assets" "March 2020 Assets"
]"""

        Example "Default example" code [] [
            Spectrum.Breadcrumbs [
                makeItem "home" "Home"
                makeItem "trendy" "Trendy"
                makeItem "march 2020 assets" "March 2020 Assets"
            ]
        ]

    [<ReactComponent>]
    let BreadcrumbsExample2 () =
        let code = """let folders = [
    {| id = 1; label = "Home" |}
    {| id = 2; label = "Trendy" |}
    {| id = 3; label = "March 2020 Assets" |}
]
let folderId, setFolderId = React.useState(JS.undefined<int>)
Html.div [
    Spectrum.Breadcrumbs [
        Breadcrumbs.onAction setFolderId
        Breadcrumbs.children [
            for folder in folders do
                Spectrum.Item [
                    Item.key folder.id
                    Item.content folder.label
                ]
        ]
    ]
    Html.p $"You pressed folder ID: {folderId}"
]"""

        Example "Events" code [] [
            let folders = [
                {| id = 1; label = "Home" |}
                {| id = 2; label = "Trendy" |}
                {| id = 3; label = "March 2020 Assets" |}
            ]
            let folderId, setFolderId = React.useState(JS.undefined<int>)
            Html.div [
                Spectrum.Breadcrumbs [
                    Breadcrumbs.onAction setFolderId
                    Breadcrumbs.children [
                        for folder in folders do
                            Spectrum.Item [
                                Item.key folder.id
                                Item.content folder.label
                            ]
                    ]
                ]
                Html.p $"You pressed folder ID: {folderId}"
            ]
        ]

    [<ReactComponent>]
    let BreadcrumbsExample3 () =
        let code = """Spectrum.Flex [
    Flex.direction FlexDirection.Column
    Flex.gap (DimValue.Size Size150)
    Flex.children [
        Spectrum.Breadcrumbs [
            Breadcrumbs.size BreadcrumbsSize.S
            Breadcrumbs.children [
                makeItem "home" "Home"
                makeItem "trendy" "Trendy"
            ]
        ]
        Spectrum.Breadcrumbs [
            Breadcrumbs.size BreadcrumbsSize.M
            Breadcrumbs.children [
                makeItem "home" "Home"
                makeItem "trendy" "Trendy"
            ]
        ]
        Spectrum.Breadcrumbs [
            Breadcrumbs.size BreadcrumbsSize.L
            Breadcrumbs.children [
                makeItem "home" "Home"
                makeItem "trendy" "Trendy"
            ]
        ]
    ]
]"""

        Example "Sizes" code [] [
            Spectrum.Flex [
                Flex.direction FlexDirection.Column
                Flex.gap (DimValue.Size Size150)
                Flex.children [
                    Spectrum.Breadcrumbs [
                        Breadcrumbs.size BreadcrumbsSize.S
                        Breadcrumbs.children [
                            makeItem "home" "Home"
                            makeItem "trendy" "Trendy"
                        ]
                    ]
                    Spectrum.Breadcrumbs [
                        Breadcrumbs.size BreadcrumbsSize.M
                        Breadcrumbs.children [
                            makeItem "home" "Home"
                            makeItem "trendy" "Trendy"
                        ]
                    ]
                    Spectrum.Breadcrumbs [
                        Breadcrumbs.size BreadcrumbsSize.L
                        Breadcrumbs.children [
                            makeItem "home" "Home"
                            makeItem "trendy" "Trendy"
                        ]
                    ]
                ]
            ]
        ]

    [<ReactComponent>]
    let BreadcrumbsExample4 () =
        let code = """Spectrum.Breadcrumbs [
    Breadcrumbs.isMultiline true
    Breadcrumbs.children [
        makeItem "home" "Home"
        makeItem "trendy" "Trendy"
        makeItem "march 2020 assets" "March 2020 Assets"
    ]
]"""

        Example "Multiline" code [] [
            Spectrum.Breadcrumbs [
                Breadcrumbs.isMultiline true
                Breadcrumbs.children [
                    makeItem "home" "Home"
                    makeItem "trendy" "Trendy"
                    makeItem "march 2020 assets" "March 2020 Assets"
                ]
            ]
        ]

    [<ReactComponent>]
    let BreadcrumbsExample5 () =
        let code = """Spectrum.View [
    View.overflow Overflow.Hidden
    View.width "200px"
    View.children [
        Spectrum.Breadcrumbs [
            Breadcrumbs.showRoot true
            Breadcrumbs.children [
                makeItem "home" "Home"
                makeItem "trendy" "Trendy"
                makeItem "march 2020 assets" "March 2020 Assets"
                makeItem "winter" "Winter"
                makeItem "holiday" "Holiday"
            ]
        ]
    ]
]"""

        Example "Root context" code [] [
            Spectrum.View [
                View.overflow Overflow.Hidden
                View.width "200px"
                View.children [
                    Spectrum.Breadcrumbs [
                        Breadcrumbs.showRoot true
                        Breadcrumbs.children [
                            makeItem "home" "Home"
                            makeItem "trendy" "Trendy"
                            makeItem "march 2020 assets" "March 2020 Assets"
                            makeItem "winter" "Winter"
                            makeItem "holiday" "Holiday"
                        ]
                    ]
                ]
            ]
        ]

    [<ReactComponent>]
    let BreadcrumbsDocs () =
        let description = [
            Html.text "Breadcrumbs show hierarchy and navigational context for a user’s location within an application."
            Html.br []
            Html.br []
            Html.text " Check the official "
            Html.a [
                prop.children [ Html.text "documentation" ]
                prop.href "https://react-spectrum.adobe.com/react-spectrum/Breadcrumbs.html"
            ]
            Html.text " for more details."
        ]

        ExampleGroup "Breadcrumbs" description [
            BreadcrumbsExample1 ()
            BreadcrumbsExample2 ()
            BreadcrumbsExample3 ()
            BreadcrumbsExample4 ()
            BreadcrumbsExample5 ()
        ]

    [<ReactComponent>]
    let LinkExample1 () =
        let code = """Spectrum.Link [
    Html.a [
        prop.href "https://www.imdb.com/title/tt6348138/"
        prop.target.blank
        prop.children [ Html.text "The missing link" ]
    ]
]"""

        Example "Default example" code [] [
            Spectrum.Link [
                Html.a [
                    prop.href "https://www.imdb.com/title/tt6348138/"
                    prop.target.blank
                    prop.children [ Html.text "The missing link" ]
                ]
            ]
        ]

    [<ReactComponent>]
    let LinkExample2 () =
        let code = """Spectrum.Link [
    Link.onPress <| fun _ -> Browser.Dom.window.alert("Pressed!")
    Link.content "A label"
]"""

        Example "Plain-text content" code [] [
            Spectrum.Link [
                Link.onPress <| fun _ -> Browser.Dom.window.alert("Pressed!")
                Link.content "A label"
            ]
        ]

    [<ReactComponent>]
    let LinkExample3 () =
        let code = """Spectrum.Flex [
    Flex.direction FlexDirection.Column
    Flex.children [
        Html.p [
            Html.text "Would you like to "
            Spectrum.Link [
                Link.variant LinkVariant.Primary
                Link.content "learn more"
            ]
            Html.text " about this fine component?"
        ]
        Html.p [
            Html.text "Would you like to "
            Spectrum.Link [
                Link.variant LinkVariant.Secondary
                Link.content "learn more"
            ]
            Html.text " about this fine component?"
        ]
        Html.p [
            Html.text "Would you like to "
            Spectrum.Link [
                Link.variant LinkVariant.Primary
                Link.isQuiet true
                Link.content "learn more"
            ]
            Html.text " about this fine component?"
        ]
        Spectrum.View [
            View.backgroundColor (BackgroundColorValue.Color Positive)
            View.padding (DimValue.Size Size300)
            View.children [
                Spectrum.Link [
                    Link.variant LinkVariant.OverBackground
                    Link.content "learn more"
                ]
            ]
        ]
    ]
]"""

        Example "Variants" code [] [
            Spectrum.Flex [
                Flex.direction FlexDirection.Column
                Flex.children [
                    Html.p [
                        Html.text "Would you like to "
                        Spectrum.Link [
                            Link.variant LinkVariant.Primary
                            Link.content "learn more"
                        ]
                        Html.text " about this fine component?"
                    ]
                    Html.p [
                        Html.text "Would you like to "
                        Spectrum.Link [
                            Link.variant LinkVariant.Secondary
                            Link.content "learn more"
                        ]
                        Html.text " about this fine component?"
                    ]
                    Html.p [
                        Html.text "Would you like to "
                        Spectrum.Link [
                            Link.variant LinkVariant.Primary
                            Link.isQuiet true
                            Link.content "learn more"
                        ]
                        Html.text " about this fine component?"
                    ]
                    Spectrum.View [
                        View.backgroundColor (BackgroundColorValue.Color Positive)
                        View.padding (DimValue.Size Size300)
                        View.children [
                            Spectrum.Link [
                                Link.variant LinkVariant.OverBackground
                                Link.content "learn more"
                            ]
                        ]
                    ]
                ]
            ]
        ]

    [<ReactComponent>]
    let LinkDocs () =
        let description = [
            Html.text "Links allow users to navigate to a different location. They can be presented inline inside a paragraph or as standalone text."
            Html.br []
            Html.br []
            Html.text " Check the official "
            Html.a [
                prop.children [ Html.text "documentation" ]
                prop.href "https://react-spectrum.adobe.com/react-spectrum/Link.html"
            ]
            Html.text " for more details."
        ]

        ExampleGroup "Link" description [
            LinkExample1 ()
            LinkExample2 ()
            LinkExample3 ()
        ]

    [<ReactComponent>]
    let TabsExample1 () =
        let code = """Spectrum.Tabs [
    Tabs.ariaLabel "History of Ancient Rome"
    Tabs.defaultSelectedKey "FoR"
    Tabs.children [
        Spectrum.TabList [
            TabList.children [
                Spectrum.Item [
                    Item.key "FoR"
                    Item.content "Founding of Rome"
                ]
                Spectrum.Item [
                    Item.key "MaR"
                    Item.content "Monarchy and Republic"
                ]
                Spectrum.Item [
                    Item.key "Emp"
                    Item.content "Empire"
                ]
            ]
        ]
        Spectrum.TabPanels [
            TabPanels.children [
                Spectrum.Item [
                    Item.key "FoR"
                    Item.content "Arma virumque cano, Troiae qui primus ab oris."
                ]
                Spectrum.Item [
                    Item.key "MaR"
                    Item.content "Senatus Populusque Romanus."
                ]
                Spectrum.Item [
                    Item.key "Emp"
                    Item.content "Alea jacta est."
                ]
            ]
        ]
    ]
]"""

        Example "Default example" code [] [
            Spectrum.Tabs [
                Tabs.ariaLabel "History of Ancient Rome"
                Tabs.defaultSelectedKey "FoR"
                Tabs.children [
                    Spectrum.TabList [
                        TabList.children [
                            Spectrum.Item [
                                Item.key "FoR"
                                Item.content "Founding of Rome"
                            ]
                            Spectrum.Item [
                                Item.key "MaR"
                                Item.content "Monarchy and Republic"
                            ]
                            Spectrum.Item [
                                Item.key "Emp"
                                Item.content "Empire"
                            ]
                        ]
                    ]
                    Spectrum.TabPanels [
                        TabPanels.children [
                            Spectrum.Item [
                                Item.key "FoR"
                                Item.content "Arma virumque cano, Troiae qui primus ab oris."
                            ]
                            Spectrum.Item [
                                Item.key "MaR"
                                Item.content "Senatus Populusque Romanus."
                            ]
                            Spectrum.Item [
                                Item.key "Emp"
                                Item.content "Alea jacta est."
                            ]
                        ]
                    ]
                ]
            ]
        ]

    [<ReactComponent>]
    let TabsExample2 () =
        let code = """let tabs = [
    {| id = 1
        name = "Founding of Rome"
        children = "Arma virumque cano, Troiae qui primus ab oris." |}
    {| id = 2
        name = "Monarchy and Republic"
        children = "Senatus Populusque Romanus." |}
    {| id = 3
        name = "Empire"
        children = "Alea jacta est." |}
]
let tabId, setTabId = React.useState(1)

React.fragment [
    Html.p $"Current tab id: {tabId}"
    Spectrum.Tabs [
        Tabs.ariaLabel "History of Ancient Rome"
        Tabs.items tabs
        Tabs.onSelectionChange setTabId
        Tabs.children [
            Spectrum.TabList [
                TabList.itemTemplate (fun item ->
                    let name: string = item?name
                    Spectrum.Item name
                )
            ]
            Spectrum.TabPanels [
                TabPanels.itemTemplate (fun item ->
                    let children: string = item?children
                    Spectrum.Item children
                )
            ]
        ]
    ]
]"""

        Example "Dynamic content" code [] [
            let tabs = [
                {| id = 1
                   name = "Founding of Rome"
                   children = "Arma virumque cano, Troiae qui primus ab oris." |}
                {| id = 2
                   name = "Monarchy and Republic"
                   children = "Senatus Populusque Romanus." |}
                {| id = 3
                   name = "Empire"
                   children = "Alea jacta est." |}
            ]
            let tabId, setTabId = React.useState(1)

            React.fragment [
                Html.p $"Current tab id: {tabId}"
                Spectrum.Tabs [
                    Tabs.ariaLabel "History of Ancient Rome"
                    Tabs.items tabs
                    Tabs.onSelectionChange setTabId
                    Tabs.children [
                        Spectrum.TabList [
                            TabList.itemTemplate (fun item ->
                                let name: string = item?name
                                Spectrum.Item name
                            )
                        ]
                        Spectrum.TabPanels [
                            TabPanels.itemTemplate (fun item ->
                                let children: string = item?children
                                Spectrum.Item children
                            )
                        ]
                    ]
                ]
            ]
        ]

    [<ReactComponent>]
    let TabsExample3 () =
        let code = """Spectrum.Tabs [
    Tabs.ariaLabel "History of Ancient Rome"
    Tabs.children [
        Spectrum.TabList [
            Spectrum.Item [
                Item.key "FoR"
                Item.children [
                    Spectrum.Icon.Bookmark []
                    Spectrum.Text "Founding of Rome"
                ]
            ]
            Spectrum.Item [
                Item.key "MaR"
                Item.children [
                    Spectrum.Icon.Calendar []
                    Spectrum.Text "Monarchy and Republic"
                ]
            ]
            Spectrum.Item [
                Item.key "Emp"
                Item.children [
                    Spectrum.Icon.Dashboard []
                    Spectrum.Text "Empire"
                ]
            ]
        ]
        Spectrum.TabPanels [
            Spectrum.Item [
                Item.key "FoR"
                Item.content "Arma virumque cano, Troiae qui primus ab oris."
            ]
            Spectrum.Item [
                Item.key "MaR"
                Item.content "Senatus Populusque Romanus."
            ]
            Spectrum.Item [
                Item.key "Emp"
                Item.content "Alea jacta est."
            ]
        ]
    ]
]"""

        Example "Icons in tabs" code [] [
            Spectrum.Tabs [
                Tabs.ariaLabel "History of Ancient Rome"
                Tabs.children [
                    Spectrum.TabList [
                        Spectrum.Item [
                            Item.key "FoR"
                            Item.children [
                                Spectrum.Icon.Bookmark []
                                Spectrum.Text "Founding of Rome"
                            ]
                        ]
                        Spectrum.Item [
                            Item.key "MaR"
                            Item.children [
                                Spectrum.Icon.Calendar []
                                Spectrum.Text "Monarchy and Republic"
                            ]
                        ]
                        Spectrum.Item [
                            Item.key "Emp"
                            Item.children [
                                Spectrum.Icon.Dashboard []
                                Spectrum.Text "Empire"
                            ]
                        ]
                    ]
                    Spectrum.TabPanels [
                        Spectrum.Item [
                            Item.key "FoR"
                            Item.content "Arma virumque cano, Troiae qui primus ab oris."
                        ]
                        Spectrum.Item [
                            Item.key "MaR"
                            Item.content "Senatus Populusque Romanus."
                        ]
                        Spectrum.Item [
                            Item.key "Emp"
                            Item.content "Alea jacta est."
                        ]
                    ]
                ]
            ]
        ]

    [<ReactComponent>]
    let TabsExample4 () =
        let code = """let tabs = [
    {| id = 1; name = "Keyboard Settings"; children = "No keyboard detected" |}
    {| id = 2; name = "Mouse Settings"; children = "No mouse detected" |}
    {| id = 3; name = "Gamepad Settings"; children = "No gamepad detected" |}
]
let tab, setTab = React.useState(2)

Spectrum.Flex [
    Flex.gap (DimValue.Size Size150)
    Flex.wrap true
    Flex.children [
        Html.span [
            prop.id "label-2"
            prop.children [
                Html.text "Settings (uncontrolled)"
            ]
        ]
        Spectrum.Tabs [
            Tabs.ariaLabeledBy "label-2"
            Tabs.items tabs
            Tabs.defaultSelectedKey 2
            Tabs.marginBottom (DimValue.Size Size400)
            Tabs.children [
                Spectrum.TabList [
                    TabList.itemTemplate (fun item ->
                        let name: string = item?name
                        Spectrum.Item name
                    )
                ]
                Spectrum.TabPanels [
                    TabPanels.itemTemplate (fun item ->
                        let children: string = item?children
                        Spectrum.Item children
                    )
                ]
            ]
        ]
        Html.span [
            prop.id "label-3"
            prop.children [
                Html.text "Settings (controlled)"
            ]
        ]
        Spectrum.Tabs [
            Tabs.ariaLabeledBy "label-3"
            Tabs.items tabs
            Tabs.selectedKey tab
            Tabs.onSelectionChange setTab
            Tabs.children [
                Spectrum.TabList [
                    TabList.itemTemplate (fun item ->
                        let name: string = item?name
                        Spectrum.Item name
                    )
                ]
                Spectrum.TabPanels [
                    TabPanels.itemTemplate (fun item ->
                        let children: string = item?children
                        Spectrum.Item children
                    )
                ]
            ]
        ]
    ]
]"""

        Example "Selection" code [] [
            let tabs = [
                {| id = 1; name = "Keyboard Settings"; children = "No keyboard detected" |}
                {| id = 2; name = "Mouse Settings"; children = "No mouse detected" |}
                {| id = 3; name = "Gamepad Settings"; children = "No gamepad detected" |}
            ]
            let tab, setTab = React.useState(2)

            Spectrum.Flex [
                Flex.gap (DimValue.Size Size150)
                Flex.wrap true
                Flex.children [
                    Html.span [
                        prop.id "label-2"
                        prop.children [
                            Html.text "Settings (uncontrolled)"
                        ]
                    ]
                    Spectrum.Tabs [
                        Tabs.ariaLabeledBy "label-2"
                        Tabs.items tabs
                        Tabs.defaultSelectedKey 2
                        Tabs.marginBottom (DimValue.Size Size400)
                        Tabs.children [
                            Spectrum.TabList [
                                TabList.itemTemplate (fun item ->
                                    let name: string = item?name
                                    Spectrum.Item name
                                )
                            ]
                            Spectrum.TabPanels [
                                TabPanels.itemTemplate (fun item ->
                                    let children: string = item?children
                                    Spectrum.Item children
                                )
                            ]
                        ]
                    ]
                    Html.span [
                        prop.id "label-3"
                        prop.children [
                            Html.text "Settings (controlled)"
                        ]
                    ]
                    Spectrum.Tabs [
                        Tabs.ariaLabeledBy "label-3"
                        Tabs.items tabs
                        Tabs.selectedKey tab
                        Tabs.onSelectionChange setTab
                        Tabs.children [
                            Spectrum.TabList [
                                TabList.itemTemplate (fun item ->
                                    let name: string = item?name
                                    Spectrum.Item name
                                )
                            ]
                            Spectrum.TabPanels [
                                TabPanels.itemTemplate (fun item ->
                                    let children: string = item?children
                                    Spectrum.Item children
                                )
                            ]
                        ]
                    ]
                ]
            ]
        ]

    [<ReactComponent>]
    let TabsDocs () =
        let description = [
            Html.text "Tabs organize content into multiple sections and allow users to navigate between them. The content under the set of tabs should be related and form a coherent unit."
            Html.br []
            Html.br []
            Html.text " Check the official "
            Html.a [
                prop.children [ Html.text "documentation" ]
                prop.href "https://react-spectrum.adobe.com/react-spectrum/Tabs.html"
            ]
            Html.text " for more details."
        ]

        ExampleGroup "Tabs" description [
            TabsExample1 ()
            TabsExample2 ()
            TabsExample3 ()
            TabsExample4 ()
        ]