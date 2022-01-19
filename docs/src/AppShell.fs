module AppShell

open Feliz.ReactSpectrum
open Feliz
open Feliz.Router
open Fable.Core
open Fable.Core.JsInterop
open Pages
open Elmish
open Elmish.React

[<StringEnum; RequireQualifiedAccess>]
type SectionId =
    | General
    | Application
    | Layout
    | Buttons
    | Content
    | Collections

[<StringEnum; RequireQualifiedAccess>]
type DocsId =
    | Overview
    | Installation
    | Provider
    | Flex
    | Grid
    | ActionButton
    | ActionGroup
    | Button
    | ButtonGroup
    | LogicButton
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
        makeNavSection SectionId.Layout "Layout" [
            makeNavItem DocsId.Flex "Flex"
            makeNavItem DocsId.Grid "Grid"
        ]
        makeNavSection SectionId.Buttons "Buttons" [
            makeNavItem DocsId.ActionButton "ActionButton"
            makeNavItem DocsId.ActionGroup "ActionGroup"
            makeNavItem DocsId.Button "Button"
            makeNavItem DocsId.ButtonGroup "ButtonGroup"
            makeNavItem DocsId.LogicButton "LogicButton"
            makeNavItem DocsId.ToggleButton "ToggleButton"
        ]
    ]

let getDocs = function
    | DocsId.Overview -> OverviewDocs ()
    | DocsId.Installation -> InstallationDocs ()
    | DocsId.ActionButton -> ActionButtonDocs ()
    | DocsId.ActionGroup -> ActionGroupDocs ()
    | DocsId.Button -> ButtonDocs ()
    | DocsId.ButtonGroup -> ButtonGroupDocs ()
    | DocsId.ToggleButton -> ToggleButtonDocs ()
    | DocsId.Provider -> ProviderDocs ()
    | DocsId.Flex -> FlexDocs ()
    | DocsId.Grid -> GridDocs ()
    | DocsId.LogicButton -> LogicButtonDocs ()

let parseUrl = function
    | [ "" ] -> DocsId.Overview
    | [ "installation" ] -> DocsId.Installation
    | [ "application"; "provider" ] -> DocsId.Provider
    | [ "layout"; "flex" ] -> DocsId.Flex
    | [ "layout"; "grid" ] -> DocsId.Grid
    | [ "buttons"; "actionbutton" ] -> DocsId.ActionButton
    | [ "buttons"; "actiongroup" ] -> DocsId.ActionGroup
    | [ "buttons"; "button" ] -> DocsId.Button
    | [ "buttons"; "buttongroup" ] -> DocsId.ButtonGroup
    | [ "buttons"; "logicbutton" ] -> DocsId.LogicButton
    | [ "buttons"; "togglebutton" ] -> DocsId.ToggleButton
    | _ -> DocsId.Overview

let makeUrl = function
    | DocsId.Overview -> Router.format ""
    | DocsId.Installation -> Router.format "installation"
    | DocsId.Provider -> Router.format [ "application"; "provider" ]
    | DocsId.Flex -> Router.format [ "layout"; "flex" ]
    | DocsId.Grid -> Router.format [ "layout"; "grid" ]
    | DocsId.ActionButton -> Router.format [ "buttons"; "actionbutton" ]
    | DocsId.ActionGroup -> Router.format [ "buttons"; "actiongroup" ]
    | DocsId.Button -> Router.format [ "buttons"; "button" ]
    | DocsId.ButtonGroup -> Router.format [ "buttons"; "buttongroup" ]
    | DocsId.LogicButton -> Router.format [ "buttons"; "logicbutton" ]
    | DocsId.ToggleButton -> Router.format [ "buttons"; "togglebutton" ]

type Model =
    {
        SelectedDoc: DocsId
    }

type Msg =
    | SelectDocsId of DocsId

let init () : Model * Cmd<Msg> =
    let cmd = Cmd<_>.Empty
    let model = { SelectedDoc = Router.currentUrl () |> parseUrl }
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
                                            | [ newSelection ] -> (makeUrl newSelection |> Router.navigate)
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
                                    React.router [
                                        router.onUrlChanged (parseUrl >> SelectDocsId >> dispatch)
                                        router.children [
                                            getDocs model.SelectedDoc
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ]
        ]
    ]
