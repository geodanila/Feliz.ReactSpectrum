module AppShell

open Feliz.ReactSpectrum
open Feliz
open Fable.Core
open Fable.Core.JsInterop
open Pages

[<StringEnum; RequireQualifiedAccess>]
type SectionId =
    | General
    | Buttons
    | Content
    | Collections

[<StringEnum; RequireQualifiedAccess>]
type DocsId =
    | Overview
    | Installation
    | APIDescription
    | ActionButton
    | Button
    | ToggleButton

let makeNavSection (id: SectionId) title navItems =
    Spectrum.Section [
        Section.key (id |> string)
        Section.title title
        Section.children navItems
    ]

let makeNavItem (id: DocsId) title =
    Spectrum.Item [
        Item.key (id |> string)
        Item.textValue title
        Item.title title
    ]

let buildNavSections () =
    [
        makeNavSection SectionId.General "General" [
            makeNavItem DocsId.Overview "Overview"
            makeNavItem DocsId.Installation "Installation"
            makeNavItem DocsId.APIDescription "API Description"
        ]
        makeNavSection SectionId.Buttons "Buttons" [
            makeNavItem DocsId.ActionButton "ActionButton"
            makeNavItem DocsId.Button "Button"
            makeNavItem DocsId.ToggleButton "ToggleButton"
        ]
    ]

let getDocs = function
    | DocsId.Overview -> OverviewDocs ()
    | DocsId.Installation -> InstallationDocs ()
    | DocsId.APIDescription -> APIDescriptionDocs ()
    | DocsId.Button -> ButtonDocs ()
    | DocsId.ActionButton -> ActionButtonDocs ()
    | DocsId.ToggleButton -> ToggleButtonDocs ()

[<ReactComponent>]
let AppShell () =
    let selection, setSelection = React.useState(DocsId.Overview)
    let navSections = buildNavSections()

    Spectrum.Provider [
        Provider.defaultTheme
        Provider.colorScheme ColorScheme.Light
        Provider.locale "en-US"
        Provider.scale Scale.Medium
        Provider.id "spectrum-provider"
        Provider.children [
            Spectrum.Flex [
                Flex.width "100%"
                Flex.height "100%"
                Flex.direction FlexDirection.Column
                Flex.alignItems FlexAlignItems.Center
                Flex.children [
                    Spectrum.Flex [
                        Flex.columnGap (DimValue.Size Size300)
                        Flex.direction FlexDirection.Row
                        Flex.height "100%"
                        Flex.width "70%"
                        Flex.children [
                            Spectrum.View [
                                View.width 200
                                View.backgroundColor (BackgroundColorValue.Color Gray200)
                                View.children [
                                    Spectrum.ListBox [
                                        ListBox.children navSections
                                        ListBox.selectionMode SelectionMode.Single
                                        ListBox.disallowEmptySelection true
                                        ListBox.selectedKeys [ selection ]
                                        ListBox.onSelectionChange (
                                            function
                                            | [ newSelection ] -> setSelection(newSelection)
                                            | _ -> ()
                                        )
                                    ]
                                ]
                            ]
                            Spectrum.View [
                                View.flexGrow 1
                                View.paddingTop 20
                                View.children [
                                    getDocs selection
                                ]
                            ]
                        ]
                    ]
                ]
            ]
        ]
    ]