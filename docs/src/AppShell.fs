module AppShell

open Feliz.ReactSpectrum
open Feliz
open Fable.Core
open Fable.Core.JsInterop
open Pages
open Elmish
open Elmish.React

[<StringEnum; RequireQualifiedAccess>]
type SectionId =
    | General
    | Application
    | Buttons
    | Content
    | Collections

[<StringEnum; RequireQualifiedAccess>]
type DocsId =
    | Overview
    | Installation
    | Provider
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
        ]
        makeNavSection SectionId.Application "Application" [
            makeNavItem DocsId.Provider "Provider"
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
    | DocsId.Button -> ButtonDocs ()
    | DocsId.ActionButton -> ActionButtonDocs ()
    | DocsId.ToggleButton -> ToggleButtonDocs ()
    | DocsId.Provider -> ProviderDocs ()

type Model =
    { SelectedDoc: DocsId }

type Msg =
    | SelectDocsId of DocsId

let init () : Model * Cmd<Msg> =
    let cmd = Cmd<_>.Empty
    let model = { SelectedDoc = DocsId.Overview }
    model, cmd

let update (msg: Msg) (model: Model) : Model * Cmd<Msg> =
    let cmd = Cmd<_>.Empty
    match msg with
    | SelectDocsId id -> { model with SelectedDoc = id }, cmd

let view (model: Model) dispatch =
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
                                        ListBox.id "navigation-list"
                                        ListBox.children navSections
                                        ListBox.ariaLabel "Navigation panel"
                                        ListBox.selectionMode SelectionMode.Single
                                        ListBox.disallowEmptySelection true
                                        ListBox.selectedKeys [ model.SelectedDoc ]
                                        ListBox.onSelectionChange (
                                            function
                                            | [ newSelection ] -> (SelectDocsId(newSelection) |> dispatch)
                                            | _ -> ()
                                        )
                                    ]
                                ]
                            ]
                            Spectrum.View [
                                View.flexGrow 1
                                View.paddingTop 20
                                View.id "content-host"
                                View.children [
                                    getDocs model.SelectedDoc
                                ]
                            ]
                        ]
                    ]
                ]
            ]
        ]
    ]
