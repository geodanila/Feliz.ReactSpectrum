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
    | Collections
    | Forms
    | Icons
    | Navigation
    | Overlays
    | Pickers
    | Sliders
    | Status
    | Content'

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
    | ListBox
    | Menu
    | MenuTrigger
    | TableView
    | Checkbox
    | CheckboxGroup
    | Form
    | NumberField
    | RadioGroup
    | SearchField
    | Switch
    | TextArea
    | TextField
    | WorkflowIcons
    | Breadcrumbs
    | Link
    | Tabs
    | AlertDialog
    | Dialog
    | DialogContainer
    | DialogTrigger
    | Tooltip
    | ComboBox
    | Picker
    | RangeSlider
    | Slider
    | Meter
    | ProgressBar
    | ProgressCircle
    | StatusLight
    | Content
    | Divider
    | Footer
    | Header
    | Heading
    | IllustratedMessage
    | Image
    | Keyboard
    | Text
    | View
    | Well

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
        makeNavSection SectionId.Collections "Collections" [
            makeNavItem DocsId.ListBox "ListBox"
            makeNavItem DocsId.Menu "Menu"
            makeNavItem DocsId.MenuTrigger "MenuTrigger"
            makeNavItem DocsId.TableView "TableView"
        ]
        makeNavSection SectionId.Forms "Forms" [
            makeNavItem DocsId.Checkbox "Checkbox"
            makeNavItem DocsId.CheckboxGroup "CheckboxGroup"
            makeNavItem DocsId.Form "Form"
            makeNavItem DocsId.NumberField "NumberField"
            makeNavItem DocsId.RadioGroup "RadioGroup"
            makeNavItem DocsId.SearchField "SearchField"
            makeNavItem DocsId.Switch "Switch"
            makeNavItem DocsId.TextArea "TextArea"
            makeNavItem DocsId.TextField "TextField"
        ]
        makeNavSection SectionId.Icons "Icons" [
            makeNavItem DocsId.WorkflowIcons "Workflow Icons"
        ]
        makeNavSection SectionId.Navigation "Navigation" [
            makeNavItem DocsId.Breadcrumbs "Breadcrumbs"
            makeNavItem DocsId.Link "Link"
            makeNavItem DocsId.Tabs "Tabs"
        ]
        makeNavSection SectionId.Overlays "Overlays" [
            makeNavItem DocsId.AlertDialog "AlertDialog"
            makeNavItem DocsId.Dialog "Dialog"
            makeNavItem DocsId.DialogContainer "DialogContainer"
            makeNavItem DocsId.DialogTrigger "DialogTrigger"
            makeNavItem DocsId.Tooltip "Tooltip"
        ]
        makeNavSection SectionId.Pickers "Pickers" [
            makeNavItem DocsId.ComboBox "ComboBox"
            makeNavItem DocsId.Picker "Picker"
        ]
        makeNavSection SectionId.Sliders "Sliders" [
            makeNavItem DocsId.RangeSlider "RangeSlider"
            makeNavItem DocsId.Slider "Slider"
        ]
        makeNavSection SectionId.Status "Status" [
            makeNavItem DocsId.Meter "Meter"
            makeNavItem DocsId.ProgressBar "ProgressBar"
            makeNavItem DocsId.ProgressCircle "ProgressCircle"
            makeNavItem DocsId.StatusLight "StatusLight"
        ]
        makeNavSection SectionId.Content' "Content" [
            makeNavItem DocsId.Content "Content"
            makeNavItem DocsId.Divider "Divider"
            makeNavItem DocsId.Footer "Footer"
            makeNavItem DocsId.Header "Header"
            makeNavItem DocsId.Heading "Heading"
            makeNavItem DocsId.IllustratedMessage "IllustratedMessage"
            makeNavItem DocsId.Image "Image"
            makeNavItem DocsId.Keyboard "Keyboard"
            makeNavItem DocsId.Text "Text"
            makeNavItem DocsId.View "View"
            makeNavItem DocsId.Well "Well"
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
    | DocsId.ListBox -> ListBoxDocs ()
    | DocsId.Menu -> MenuDocs ()
    | DocsId.MenuTrigger -> MenuTriggerDocs ()
    | DocsId.TableView -> TableViewDocs ()
    | DocsId.Checkbox -> CheckboxDocs ()
    | DocsId.CheckboxGroup -> CheckboxGroupDocs ()
    | DocsId.Form -> FormDocs ()
    | DocsId.NumberField -> NumberFieldDocs ()
    | DocsId.RadioGroup -> RadioGroupDocs ()
    | DocsId.SearchField -> SearchFieldDocs ()
    | DocsId.Switch -> SwitchDocs ()
    | DocsId.TextArea -> TextAreaDocs ()
    | DocsId.TextField -> TextFieldDocs ()
    | DocsId.WorkflowIcons -> WorkflowIconsDocs ()
    | DocsId.Breadcrumbs -> BreadcrumbsDocs ()
    | DocsId.Link -> LinkDocs ()
    | DocsId.Tabs -> TabsDocs ()
    | DocsId.AlertDialog -> AlertDialogDocs ()
    | DocsId.Dialog -> DialogDocs ()
    | DocsId.DialogContainer -> DialogContainerDocs ()
    | DocsId.DialogTrigger -> DialogTriggerDocs ()
    | DocsId.Tooltip -> TooltipDocs ()
    | DocsId.ComboBox -> ComboBoxDocs ()
    | DocsId.Picker -> PickerDocs ()
    | DocsId.RangeSlider -> RangeSliderDocs ()
    | DocsId.Slider -> SliderDocs ()
    | DocsId.Meter -> MeterDocs ()
    | DocsId.ProgressBar -> ProgressBarDocs ()
    | DocsId.ProgressCircle -> ProgressCircleDocs ()
    | DocsId.StatusLight -> StatusLightDocs ()
    | DocsId.Content -> ContentDocs ()
    | DocsId.Divider -> DividerDocs ()
    | DocsId.Footer -> FooterDocs ()
    | DocsId.Header -> HeaderDocs ()
    | DocsId.Heading -> HeadingDocs ()
    | DocsId.IllustratedMessage -> IllustratedMessageDocs ()
    | DocsId.Image -> ImageDocs ()
    | DocsId.Keyboard -> KeyboardDocs ()
    | DocsId.Text -> TextDocs ()
    | DocsId.View -> ViewDocs ()
    | DocsId.Well -> WellDocs ()

let parseUrl = function
    | [ "" ] -> DocsId.Overview
    | [ "installation" ] -> DocsId.Installation
    | [ "provider" ] -> DocsId.Provider
    | [ "flex" ] -> DocsId.Flex
    | [ "grid" ] -> DocsId.Grid
    | [ "actionbutton" ] -> DocsId.ActionButton
    | [ "actiongroup" ] -> DocsId.ActionGroup
    | [ "button" ] -> DocsId.Button
    | [ "buttongroup" ] -> DocsId.ButtonGroup
    | [ "logicbutton" ] -> DocsId.LogicButton
    | [ "togglebutton" ] -> DocsId.ToggleButton
    | [ "listbox" ] -> DocsId.ListBox
    | [ "menu" ] -> DocsId.Menu
    | [ "menutrigger" ] -> DocsId.MenuTrigger
    | [ "tableview" ] -> DocsId.TableView
    | [ "checkbox" ] -> DocsId.Checkbox
    | [ "checkboxgroup" ] -> DocsId.CheckboxGroup
    | [ "form" ] -> DocsId.Form
    | [ "numberfield" ] -> DocsId.NumberField
    | [ "radiogroup" ] -> DocsId.RadioGroup
    | [ "searchfield" ] -> DocsId.SearchField
    | [ "switch" ] -> DocsId.Switch
    | [ "textarea" ] -> DocsId.TextArea
    | [ "textfield" ] -> DocsId.TextField
    | [ "icons" ] -> DocsId.WorkflowIcons
    | [ "breadcrumbs" ] -> DocsId.Breadcrumbs
    | [ "link" ] -> DocsId.Link
    | [ "tabs" ] -> DocsId.Tabs
    | [ "alertdialog" ] -> DocsId.AlertDialog
    | [ "dialog" ] -> DocsId.Dialog
    | [ "dialogcontainer" ] -> DocsId.DialogContainer
    | [ "dialogtrigger" ] -> DocsId.DialogTrigger
    | [ "tooltip" ] -> DocsId.Tooltip
    | [ "combobox" ] -> DocsId.ComboBox
    | [ "picker" ] -> DocsId.Picker
    | [ "rangeslider" ] -> DocsId.RangeSlider
    | [ "slider" ] -> DocsId.Slider
    | [ "meter" ] -> DocsId.Meter
    | [ "progressbar" ] -> DocsId.ProgressBar
    | [ "progresscircle" ] -> DocsId.ProgressCircle
    | [ "statuslight" ] -> DocsId.StatusLight
    | [ "content" ] -> DocsId.Content
    | [ "divider" ] -> DocsId.Divider
    | [ "footer" ] -> DocsId.Footer
    | [ "header" ] -> DocsId.Header
    | [ "heading" ] -> DocsId.Heading
    | [ "illustratedmessage" ] -> DocsId.IllustratedMessage
    | [ "image" ] -> DocsId.Image
    | [ "keyboard" ] -> DocsId.Keyboard
    | [ "text" ] -> DocsId.Text
    | [ "view" ] -> DocsId.View
    | [ "well" ] -> DocsId.Well
    | _ -> DocsId.Overview

let makeUrl = function
    | DocsId.Overview -> Router.format ""
    | DocsId.Installation -> Router.format "installation"
    | DocsId.Provider -> Router.format "provider"
    | DocsId.Flex -> Router.format "flex"
    | DocsId.Grid -> Router.format "grid"
    | DocsId.ActionButton -> Router.format "actionbutton"
    | DocsId.ActionGroup -> Router.format "actiongroup"
    | DocsId.Button -> Router.format "button"
    | DocsId.ButtonGroup -> Router.format "buttongroup"
    | DocsId.LogicButton -> Router.format "logicbutton"
    | DocsId.ToggleButton -> Router.format "togglebutton"
    | DocsId.ListBox -> Router.format "listbox"
    | DocsId.Menu -> Router.format "menu"
    | DocsId.MenuTrigger -> Router.format "menutrigger"
    | DocsId.TableView -> Router.format "tableview"
    | DocsId.Checkbox -> Router.format "checkbox"
    | DocsId.CheckboxGroup -> Router.format "checkboxgroup"
    | DocsId.Form -> Router.format "form"
    | DocsId.NumberField -> Router.format "numberfield"
    | DocsId.RadioGroup -> Router.format "radiogroup"
    | DocsId.SearchField -> Router.format "searchfield"
    | DocsId.Switch -> Router.format "switch"
    | DocsId.TextArea -> Router.format "textarea"
    | DocsId.TextField -> Router.format "textfield"
    | DocsId.WorkflowIcons -> Router.format "icons"
    | DocsId.Breadcrumbs -> Router.format "breadcrumbs"
    | DocsId.Link -> Router.format "link"
    | DocsId.Tabs -> Router.format "tabs"
    | DocsId.AlertDialog -> Router.format "alertdialog"
    | DocsId.Dialog -> Router.format "dialog"
    | DocsId.DialogContainer -> Router.format "dialogcontainer"
    | DocsId.DialogTrigger -> Router.format "dialogtrigger"
    | DocsId.Tooltip -> Router.format "tooltip"
    | DocsId.ComboBox -> Router.format "combobox"
    | DocsId.Picker -> Router.format "picker"
    | DocsId.RangeSlider -> Router.format "rangeslider"
    | DocsId.Slider -> Router.format "slider"
    | DocsId.Meter -> Router.format "meter"
    | DocsId.ProgressBar -> Router.format "progressbar"
    | DocsId.ProgressCircle -> Router.format "progresscircle"
    | DocsId.StatusLight -> Router.format "statuslight"
    | DocsId.Content -> Router.format "content"
    | DocsId.Divider -> Router.format "divider"
    | DocsId.Footer -> Router.format "footer"
    | DocsId.Header -> Router.format "header"
    | DocsId.Heading -> Router.format "heading"
    | DocsId.IllustratedMessage -> Router.format "illustratedmessage"
    | DocsId.Image -> Router.format "image"
    | DocsId.Keyboard -> Router.format "keyboard"
    | DocsId.Text -> Router.format "text"
    | DocsId.View -> Router.format "view"
    | DocsId.Well -> Router.format "well"

type Model =
    {
        SelectedDoc: DocsId
    }

type Msg =
    | SelectDocsId of DocsId

let init () : Model * Cmd<Msg> =
    let model = { SelectedDoc = Router.currentUrl () |> parseUrl }
    model, Cmd.Empty

let update (msg: Msg) (model: Model) : Model * Cmd<Msg> =
    match msg with
    | SelectDocsId id -> { model with SelectedDoc = id }, Cmd.Empty

[<ReactComponent>]
let Shell model dispatch =
    let navSections = buildNavSections()
    let isToggled, setIsToggled = React.useState(false)

    Spectrum.Flex [
        Flex.id "main"
        Flex.direction FlexDirection.Column
        Flex.alignItems FlexAlignItems.Center
        Flex.children [
            Spectrum.View [
                View.id "toggle-host"
                View.borderBottomColor BorderColorValue.Dark
                View.borderBottomWidth BorderSizeValue.Thin
                View.alignSelf FlexAlignSelf.Stretch
                View.children [
                    Spectrum.ToggleButton [
                        ToggleButton.isSelected isToggled
                        ToggleButton.onChange setIsToggled
                        ToggleButton.children [
                            if isToggled then Spectrum.Icon.Menu []
                            else Spectrum.Icon.ShowMenu []
                        ]
                        View.alignSelf FlexAlignSelf.Start
                    ]
                ]
            ]
            Spectrum.Flex [
                Flex.id "main-content"
                Flex.flex 1
                Flex.columnGap (DimValue.Size Size300)
                Flex.direction FlexDirection.Row
                Flex.children [
                    Spectrum.View [
                        View.id "navigation-list-host"
                        if not isToggled then View.UNSAFE_className "collapsed"
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
                                    | [ newSelection ] ->
                                        (makeUrl newSelection |> Router.navigate)
                                        setIsToggled(false)
                                        Browser.Dom.document.getElementById("content-host")
                                        |> (fun x -> x.scrollTo(0, 0))
                                    | _ -> ()
                                )
                            ]
                        ]
                    ]
                    Spectrum.View [
                        View.id "content-host"
                        View.children [
                            Html.div [
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

let view (model: Model) dispatch =
    Spectrum.Provider [
        Provider.defaultTheme
        Provider.colorScheme ColorScheme.Light
        Provider.locale "en-US"
        Provider.scale Scale.Medium
        Provider.id "spectrum-provider"
        Provider.children [
            Shell model dispatch
        ]
    ]
