namespace Feliz.ReactSpectrum

open Feliz
open Fable.Core
open Fable.Core.JsInterop
open Fable.React

[<Erase>]
type Spectrum =
    // ----------- Application -----------
    /// Provider is the container for all React Spectrum applications. It defines the theme, locale, and other application level settings, and can also be used to provide common properties to a group of components.
    static member inline Provider (properties: IReactProperty list) =
        Interop.reactApi.createElement (import "Provider" "@adobe/react-spectrum", createObj !!properties)

    static member inline useProvider : (unit -> IProviderContext) = import "useProvider" "@adobe/react-spectrum"

    // ----------- Layout -----------
    /// The Flex component can be used to layout its children in one dimension with flexbox. Any React Spectrum component can be used as a child, and Flex components can be nested to create more complex layouts.
    /// In addition to the properties widely supported by CSS, React Spectrum also shims the gap property, along with rowGap and columnGap. These properties make it much easier to build layouts with consistent space between each item. The gap can be defined with Spectrum dimension variables to ensure consistency across applications, and allow the layout to adapt to different devices automatically. In addition, these values can be autocompleted in many IDEs for convenience.
    /// All Flex props also support object syntax to define responsive layouts that change at certain breakpoints. See the layout docs for more details.
    static member inline Flex (properties: IReactProperty list) =
        Interop.reactApi.createElement (import "Flex" "@adobe/react-spectrum", createObj !!properties)
    /// The Flex component can be used to layout its children in one dimension with flexbox. Any React Spectrum component can be used as a child, and Flex components can be nested to create more complex layouts.
    /// In addition to the properties widely supported by CSS, React Spectrum also shims the gap property, along with rowGap and columnGap. These properties make it much easier to build layouts with consistent space between each item. The gap can be defined with Spectrum dimension variables to ensure consistency across applications, and allow the layout to adapt to different devices automatically. In addition, these values can be autocompleted in many IDEs for convenience.
    /// All Flex props also support object syntax to define responsive layouts that change at certain breakpoints. See the layout docs for more details.
    static member inline Flex (children: #seq<ReactElement>) =
        ofImport "ActionButton" "@adobe/react-spectrum" [] children

    /// The Grid component can be used to layout its children in two dimensions with CSS grid. Any React Spectrum component can be used as a child, and Spectrum dimension variables can be used to define sizing and spacing, which ensures consistency across applications, and allows the layout to adapt to different devices automatically. In addition, these values can be autocompleted in many IDEs for convenience.
    /// All Grid props also support object syntax to define responsive layouts that change at certain breakpoints. See the layout docs for more details.
    static member inline Grid (properties: IReactProperty list) =
        Interop.reactApi.createElement (import "Grid" "@adobe/react-spectrum", createObj !!properties)
    /// The Grid component can be used to layout its children in two dimensions with CSS grid. Any React Spectrum component can be used as a child, and Spectrum dimension variables can be used to define sizing and spacing, which ensures consistency across applications, and allows the layout to adapt to different devices automatically. In addition, these values can be autocompleted in many IDEs for convenience.
    /// All Grid props also support object syntax to define responsive layouts that change at certain breakpoints. See the layout docs for more details.
    static member inline Grid (children: #seq<ReactElement>) =
        ofImport "ActionButton" "@adobe/react-spectrum" [] children

    /// The repeat function can be used to make a repeating fragment of the columns or rows list.
    static member inline repeat (count: RepeatCount, value: DimValue) : string =
        let repeatNative = import "repeat" "@adobe/react-spectrum"
        ignore repeatNative
        emitJsExpr (count, value) "repeatNative($0, $1)"
    /// The repeat function can be used to make a repeating fragment of the columns or rows list.
    static member inline repeat (count: RepeatCount, value: DimValue list) : string =
        let repeatNative = import "repeat" "@adobe/react-spectrum"
        ignore repeatNative
        emitJsExpr (count, value |> Array.ofList) "repeatNative($0, $1)"

    /// The minmax function defines a size range greater than or equal to min and less than or equal to max.
    static member inline minmax (min: DimValue, max: DimValue) : string =
        let minmaxNative = import "minmax" "@adobe/react-spectrum"
        ignore minmaxNative
        emitJsExpr (min, max) "minmaxNative($0, $1)"

    /// The fitContent function clamps a given size to an available size.
    static member inline fitContent (dimension: DimValue) : string =
        let fitContentNative = import "fitContent" "@adobe/react-spectrum"
        ignore fitContentNative
        emitJsExpr (dimension) "fitContentNative($0)"

    // ----------- Buttons -----------
    /// ActionButtons allow users to perform an action. They’re used for similar, task-based options within a workflow, and are ideal for interfaces where buttons aren’t meant to draw a lot of attention.
    static member inline ActionButton (children: #seq<ReactElement>) =
        ofImport "ActionButton" "@adobe/react-spectrum" [] children
    /// ActionButtons allow users to perform an action. They’re used for similar, task-based options within a workflow, and are ideal for interfaces where buttons aren’t meant to draw a lot of attention.
    static member inline ActionButton (properties: IReactProperty list) =
        Interop.reactApi.createElement (import "ActionButton" "@adobe/react-spectrum", createObj !!properties)
    /// ActionButtons allow users to perform an action. They’re used for similar, task-based options within a workflow, and are ideal for interfaces where buttons aren’t meant to draw a lot of attention.
    static member inline ActionButton (text: string) =
        let properties = [ prop.children [ Html.text text ] ]
        Interop.reactApi.createElement (import "ActionButton" "@adobe/react-spectrum", createObj !!properties)

    /// Buttons allow users to perform an action or to navigate to another page. They have multiple styles for various needs, and are ideal for calling attention to where a user needs to do something in order to move forward in a flow.
    static member inline Button (children: #seq<ReactElement>) =
        ofImport "Button" "@adobe/react-spectrum" [] children
    /// Buttons allow users to perform an action or to navigate to another page. They have multiple styles for various needs, and are ideal for calling attention to where a user needs to do something in order to move forward in a flow.
    static member inline Button (properties: IReactProperty list) =
        Interop.reactApi.createElement (import "Button" "@adobe/react-spectrum", createObj !!properties)

    /// A LogicButton displays an operator within a boolean logic sequence. (And / Or)
    static member inline LogicButton (children: #seq<ReactElement>) =
        ofImport "LogicButton" "@adobe/react-spectrum" [] children
    /// A LogicButton displays an operator within a boolean logic sequence. (And / Or)
    static member inline LogicButton (properties: IReactProperty list) =
        Interop.reactApi.createElement (import "LogicButton" "@adobe/react-spectrum", createObj !!properties)

    /// ToggleButtons allow users to toggle a selection on or off, for example switching between two states or modes.
    static member inline ToggleButton (children: #seq<ReactElement>) =
        ofImport "ToggleButton" "@adobe/react-spectrum" [] children
    /// ToggleButtons allow users to toggle a selection on or off, for example switching between two states or modes.
    static member inline ToggleButton (properties: IReactProperty list) =
        Interop.reactApi.createElement (import "ToggleButton" "@adobe/react-spectrum", createObj !!properties)

    /// ActionGroups accept a list of Item elements as children, each with a key prop. Alternatively, a function that returns Item elements is also supported. See the collection components docs for more details about this API.
    static member inline ActionGroup (children: #seq<ReactElement>) =
        ofImport "ActionGroup" "@adobe/react-spectrum" [] children
    /// ActionGroups accept a list of Item elements as children, each with a key prop. Alternatively, a function that returns Item elements is also supported. See the collection components docs for more details about this API.
    static member inline ActionGroup (properties: IReactProperty list) =
        Interop.reactApi.createElement (import "ActionGroup" "@adobe/react-spectrum", createObj !!properties)
    static member inline Item (properties: IReactProperty list) =
        Interop.reactApi.createElement (import "Item" "@adobe/react-spectrum", createObj !!properties)
    static member inline Item (text: string) =
        let properties = [ Interop.mkAttr "children" text ]
        Interop.reactApi.createElement (import "Item" "@adobe/react-spectrum", createObj !!properties)

    /// ButtonGroup handles overflow for a grouping of buttons whose actions are related to each other.
    static member inline ButtonGroup (children: #seq<ReactElement>) =
        ofImport "ButtonGroup" "@adobe/react-spectrum" [] children
    /// ButtonGroup handles overflow for a grouping of buttons whose actions are related to each other.
    static member inline ButtonGroup (properties: IReactProperty list) =
        Interop.reactApi.createElement (import "ButtonGroup" "@adobe/react-spectrum", createObj !!properties)

    // ----------- Collections -----------
    /// A list of options that can allow selection of one or more.
    static member inline ListBox (children: #seq<ReactElement>) =
        ofImport "ListBox" "@adobe/react-spectrum" [] children
    /// A list of options that can allow selection of one or more.
    static member inline ListBox (properties: IReactProperty list) =
        Interop.reactApi.createElement (import "ListBox" "@adobe/react-spectrum", createObj !!properties)

    static member inline Section (children: #seq<ReactElement>) =
        ofImport "Section" "@adobe/react-spectrum" [] children
    static member inline Section (properties: IReactProperty list) =
        Interop.reactApi.createElement (import "Section" "@adobe/react-spectrum", createObj !!properties)

    /// Menus display a list of actions or options that a user can choose.
    static member inline Menu (children: #seq<ReactElement>) =
        ofImport "Menu" "@adobe/react-spectrum" [] children
    /// Menus display a list of actions or options that a user can choose.
    static member inline Menu (properties: IReactProperty list) =
        Interop.reactApi.createElement (import "Menu" "@adobe/react-spectrum", createObj !!properties)

    static member inline MenuTrigger (children: #seq<ReactElement>) =
        ofImport "MenuTrigger" "@adobe/react-spectrum" [] children
    static member inline MenuTrigger (properties: IReactProperty list) =
        Interop.reactApi.createElement (import "MenuTrigger" "@adobe/react-spectrum", createObj !!properties)

    /// Tables are containers for displaying information. They allow users to quickly scan, sort, compare, and take action on large amounts of data.
    static member inline TableView (children: #seq<ReactElement>) =
        ofImport "TableView" "@adobe/react-spectrum" [] children
    /// Tables are containers for displaying information. They allow users to quickly scan, sort, compare, and take action on large amounts of data.
    static member inline TableView (properties: IReactProperty list) =
        Interop.reactApi.createElement (import "TableView" "@adobe/react-spectrum", createObj !!properties)
    static member inline Cell (children: #seq<ReactElement>) =
        ofImport "Cell" "@adobe/react-spectrum" [] children
    static member inline Cell (properties: IReactProperty list) =
        Interop.reactApi.createElement (import "Cell" "@adobe/react-spectrum", createObj !!properties)
    static member inline Cell (content: string) =
        Interop.reactApi.createElement (import "Cell" "@adobe/react-spectrum", createObj !![ Interop.mkAttr "children" content ])
    static member inline Cell (content: ReactElement) =
        Interop.reactApi.createElement (import "Cell" "@adobe/react-spectrum", createObj !![ Interop.mkAttr "children" content ])
    static member inline Column (children: #seq<ReactElement>) =
        ofImport "Column" "@adobe/react-spectrum" [] children
    static member inline Column (properties: IReactProperty list) =
        Interop.reactApi.createElement (import "Column" "@adobe/react-spectrum", createObj !!properties)
    static member inline Column (content: string) =
        Interop.reactApi.createElement (import "Column" "@adobe/react-spectrum", createObj !![ Interop.mkAttr "children" content ])
    static member inline Column (content: ReactElement) =
        Interop.reactApi.createElement (import "Column" "@adobe/react-spectrum", createObj !![ Interop.mkAttr "children" content ])
    static member inline Row (children: #seq<ReactElement>) =
        ofImport "Row" "@adobe/react-spectrum" [] children
    static member inline Row (properties: IReactProperty list) =
        Interop.reactApi.createElement (import "Row" "@adobe/react-spectrum", createObj !!properties)
    static member inline TableBody (children: #seq<ReactElement>) =
        ofImport "TableBody" "@adobe/react-spectrum" [] children
    static member inline TableBody (properties: IReactProperty list) =
        Interop.reactApi.createElement (import "TableBody" "@adobe/react-spectrum", createObj !!properties)
    static member inline TableHeader (children: #seq<ReactElement>) =
        ofImport "TableHeader" "@adobe/react-spectrum" [] children
    static member inline TableHeader (properties: IReactProperty list) =
        Interop.reactApi.createElement (import "TableHeader" "@adobe/react-spectrum", createObj !!properties)

    // ----------- Form -----------
    /// Checkboxes allow users to select multiple items from a list of individual items, or to mark one individual item as selected.
    static member inline Checkbox (children: #seq<ReactElement>) =
        ofImport "Checkbox" "@adobe/react-spectrum" [] children
    /// Checkboxes allow users to select multiple items from a list of individual items, or to mark one individual item as selected.
    static member inline Checkbox (properties: IReactProperty list) =
        Interop.reactApi.createElement (import "Checkbox" "@adobe/react-spectrum", createObj !!properties)

    /// A CheckboxGroup allows users to select one or more items from a list of choices.
    static member inline CheckboxGroup (children: #seq<ReactElement>) =
        ofImport "CheckboxGroup" "@adobe/react-spectrum" [] children
    /// A CheckboxGroup allows users to select one or more items from a list of choices.
    static member inline CheckboxGroup (properties: IReactProperty list) =
        Interop.reactApi.createElement (import "CheckboxGroup" "@adobe/react-spectrum", createObj !!properties)

    /// TextFields are text inputs that allow users to input custom text entries with a keyboard. Various decorations can be displayed around the field to communicate the entry requirements.
    static member inline TextField (children: #seq<ReactElement>) =
        ofImport "TextField" "@adobe/react-spectrum" [] children
    /// TextFields are text inputs that allow users to input custom text entries with a keyboard. Various decorations can be displayed around the field to communicate the entry requirements.
    static member inline TextField (properties: IReactProperty list) =
        Interop.reactApi.createElement (import "TextField" "@adobe/react-spectrum", createObj !!properties)

    /// TextAreas are multiline text inputs, useful for cases where users have a sizable amount of text to enter. They allow for all customizations that are available to text fields.
    static member inline TextArea (children: #seq<ReactElement>) =
        ofImport "TextArea" "@adobe/react-spectrum" [] children
    /// TextAreas are multiline text inputs, useful for cases where users have a sizable amount of text to enter. They allow for all customizations that are available to text fields.
    static member inline TextArea (properties: IReactProperty list) =
        Interop.reactApi.createElement (import "TextArea" "@adobe/react-spectrum", createObj !!properties)

    /// Switches allow users to turn an individual option on or off. They are usually used to activate or deactivate a specific setting.
    static member inline Switch (children: #seq<ReactElement>) =
        ofImport "Switch" "@adobe/react-spectrum" [] children
    /// Switches allow users to turn an individual option on or off. They are usually used to activate or deactivate a specific setting.
    static member inline Switch (properties: IReactProperty list) =
        Interop.reactApi.createElement (import "Switch" "@adobe/react-spectrum", createObj !!properties)

    /// A SearchField is a text field designed for searches.
    static member inline SearchField (children: #seq<ReactElement>) =
        ofImport "SearchField" "@adobe/react-spectrum" [] children
    /// A SearchField is a text field designed for searches.
    static member inline SearchField (properties: IReactProperty list) =
        Interop.reactApi.createElement (import "SearchField" "@adobe/react-spectrum", createObj !!properties)

    /// NumberFields allow users to enter a number, and increment or decrement the value using stepper buttons.
    static member inline NumberField (children: #seq<ReactElement>) =
        ofImport "NumberField" "@adobe/react-spectrum" [] children
    /// NumberFields allow users to enter a number, and increment or decrement the value using stepper buttons.
    static member inline NumberField (properties: IReactProperty list) =
        Interop.reactApi.createElement (import "NumberField" "@adobe/react-spectrum", createObj !!properties)

    static member inline Radio (children: #seq<ReactElement>) =
        ofImport "Radio" "@adobe/react-spectrum" [] children
    static member inline Radio (properties: IReactProperty list) =
        Interop.reactApi.createElement (import "Radio" "@adobe/react-spectrum", createObj !!properties)
    /// Radio buttons allow users to select a single option from a list of mutually exclusive options. All possible options are exposed up front for users to compare.
    static member inline RadioGroup (children: #seq<ReactElement>) =
        ofImport "RadioGroup" "@adobe/react-spectrum" [] children
    /// Radio buttons allow users to select a single option from a list of mutually exclusive options. All possible options are exposed up front for users to compare.
    static member inline RadioGroup (properties: IReactProperty list) =
        Interop.reactApi.createElement (import "RadioGroup" "@adobe/react-spectrum", createObj !!properties)

    /// Forms allow users to enter data that can be submitted while providing alignment and styling for form fields.
    static member inline Form (children: #seq<ReactElement>) =
        ofImport "Form" "@adobe/react-spectrum" [] children
    /// Forms allow users to enter data that can be submitted while providing alignment and styling for form fields.
    static member inline Form (properties: IReactProperty list) =
        Interop.reactApi.createElement (import "Form" "@adobe/react-spectrum", createObj !!properties)

    // ----------- Navigation -----------
    /// Breadcrumbs show hierarchy and navigational context for a user’s location within an application.
    static member inline Breadcrumbs (children: #seq<ReactElement>) =
        ofImport "Breadcrumbs" "@adobe/react-spectrum" [] children
    /// Breadcrumbs show hierarchy and navigational context for a user’s location within an application.
    static member inline Breadcrumbs (properties: IReactProperty list) =
        Interop.reactApi.createElement (import "Breadcrumbs" "@adobe/react-spectrum", createObj !!properties)

    /// Links allow users to navigate to a different location. They can be presented inline inside a paragraph or as standalone text.
    static member inline Link (children: #seq<ReactElement>) =
        ofImport "Link" "@adobe/react-spectrum" [] children
    /// Links allow users to navigate to a different location. They can be presented inline inside a paragraph or as standalone text.
    static member inline Link (properties: IReactProperty list) =
        Interop.reactApi.createElement (import "Link" "@adobe/react-spectrum", createObj !!properties)

    /// Tabs organize content into multiple sections and allow users to navigate between them. The content under the set of tabs should be related and form a coherent unit.
    static member inline Tabs (children: #seq<ReactElement>) =
        ofImport "Tabs" "@adobe/react-spectrum" [] children
    /// Tabs organize content into multiple sections and allow users to navigate between them. The content under the set of tabs should be related and form a coherent unit.
    static member inline Tabs (properties: IReactProperty list) =
        Interop.reactApi.createElement (import "Tabs" "@adobe/react-spectrum", createObj !!properties)
    static member inline TabList (children: #seq<ReactElement>) =
        ofImport "TabList" "@adobe/react-spectrum" [] children
    static member inline TabList (properties: IReactProperty list) =
        Interop.reactApi.createElement (import "TabList" "@adobe/react-spectrum", createObj !!properties)
    static member inline TabPanels (children: #seq<ReactElement>) =
        ofImport "TabPanels" "@adobe/react-spectrum" [] children
    static member inline TabPanels (properties: IReactProperty list) =
        Interop.reactApi.createElement (import "TabPanels" "@adobe/react-spectrum", createObj !!properties)

    // ----------- Content -----------
    /// The View component can be used as a general purpose container element, similar to a div. It supports Spectrum style props, which enable you to use Spectrum variables for styling to ensure consistency with other Spectrum components. In addition, Spectrum variables automatically adapt to color scheme changes (e.g. dark mode), and platform scale (e.g. touch vs. mouse input). See Styling to learn more.
    static member inline View (children: #seq<ReactElement>) =
        ofImport "View" "@adobe/react-spectrum" [] children
    /// The View component can be used as a general purpose container element, similar to a div. It supports Spectrum style props, which enable you to use Spectrum variables for styling to ensure consistency with other Spectrum components. In addition, Spectrum variables automatically adapt to color scheme changes (e.g. dark mode), and platform scale (e.g. touch vs. mouse input). See Styling to learn more.
    static member inline View (properties: IReactProperty list) =
        Interop.reactApi.createElement (import "View" "@adobe/react-spectrum", createObj !!properties)

    /// An IllustratedMessage displays an illustration and a message, usually for an empty state or an error page.
    static member inline IllustratedMessage (children: #seq<ReactElement>) =
        ofImport "IllustratedMessage" "@adobe/react-spectrum" [] children
    /// An IllustratedMessage displays an illustration and a message, usually for an empty state or an error page.
    static member inline IllustratedMessage (properties: IReactProperty list) =
        Interop.reactApi.createElement (import "IllustratedMessage" "@adobe/react-spectrum", createObj !!properties)

    /// The Content component represents the primary content within a Spectrum container such as a Dialog or IllustratedMessage. Content provides no specific styling by itself, but receives styling from the parent container. In addition, Content will be automatically placed within the container's layout according to Spectrum guidelines.
    static member inline Content (text: string) =
        let properties = [ prop.children [ Html.text text ] ]
        Interop.reactApi.createElement (import "Content" "@adobe/react-spectrum", createObj !!properties)
    /// The Content component represents the primary content within a Spectrum container such as a Dialog or IllustratedMessage. Content provides no specific styling by itself, but receives styling from the parent container. In addition, Content will be automatically placed within the container's layout according to Spectrum guidelines.
    static member inline Content (children: #seq<ReactElement>) =
        ofImport "Content" "@adobe/react-spectrum" [] children
    /// The Content component represents the primary content within a Spectrum container such as a Dialog or IllustratedMessage. Content provides no specific styling by itself, but receives styling from the parent container. In addition, Content will be automatically placed within the container's layout according to Spectrum guidelines.
    static member inline Content (properties: IReactProperty list) =
        Interop.reactApi.createElement (import "Content" "@adobe/react-spectrum", createObj !!properties)

    /// Heading is used to create various levels of typographic hierarchies.
    static member inline Heading (text: string) =
        let properties = [ prop.children [ Html.text text ] ]
        Interop.reactApi.createElement (import "Heading" "@adobe/react-spectrum", createObj !!properties)
    /// Heading is used to create various levels of typographic hierarchies.
    static member inline Heading (children: #seq<ReactElement>) =
        ofImport "Heading" "@adobe/react-spectrum" [] children
    /// Heading is used to create various levels of typographic hierarchies.
    static member inline Heading (properties: IReactProperty list) =
        Interop.reactApi.createElement (import "Heading" "@adobe/react-spectrum", createObj !!properties)

    /// The Text component represents text with no specific semantic meaning within a Spectrum container such as a Button or Menu. Text provides no styling by itself, but receives styling from the parent container. In addition, Text will be automatically placed within the container's layout according to Spectrum guidelines.
    static member inline Text (value: string) =
        let properties = [ prop.children [ Html.text value ] ]
        Interop.reactApi.createElement (import "Text" "@adobe/react-spectrum", createObj !!properties)
    /// The Text component represents text with no specific semantic meaning within a Spectrum container such as a Button or Menu. Text provides no styling by itself, but receives styling from the parent container. In addition, Text will be automatically placed within the container's layout according to Spectrum guidelines.
    static member inline Text (properties: IReactProperty list) =
        Interop.reactApi.createElement (import "Text" "@adobe/react-spectrum", createObj !!properties)

    /// The Keyboard component represents text that specifies a keyboard command, which can be used within a Spectrum container such as a Menu. Keyboard provides no specific styling by itself, but receives styling from the parent container. In addition, Keyboard will be automatically placed within the container's layout according to Spectrum guidelines.
    static member inline Keyboard (text: string) =
        let properties = [ prop.children [ Html.text text ] ]
        Interop.reactApi.createElement (import "Keyboard" "@adobe/react-spectrum", createObj !!properties)

    /// Dividers bring clarity to a layout by grouping and dividing content in close proximity. They can also be used to establish rhythm and hierarchy.
    static member inline Divider () =
        ofImport "Divider" "@adobe/react-spectrum" [] []
    /// Dividers bring clarity to a layout by grouping and dividing content in close proximity. They can also be used to establish rhythm and hierarchy.
    static member inline Divider (properties: IReactProperty list) =
        Interop.reactApi.createElement (import "Divider" "@adobe/react-spectrum", createObj !!properties)

    /// Header represents a header within a Spectrum container.
    static member inline Header (children: #seq<ReactElement>) =
        ofImport "Header" "@adobe/react-spectrum" [] children
    /// Header represents a header within a Spectrum container.
    static member inline Header (text: string) =
        let properties = [ prop.children [ Html.text text ] ]
        Interop.reactApi.createElement (import "Header" "@adobe/react-spectrum", createObj !!properties)
    /// Header represents a header within a Spectrum container.
    static member inline Header (properties: IReactProperty list) =
        Interop.reactApi.createElement (import "Header" "@adobe/react-spectrum", createObj !!properties)

    /// Footer represents a footer within a Spectrum container.
    static member inline Footer (children: #seq<ReactElement>) =
        ofImport "Footer" "@adobe/react-spectrum" [] children
    /// Footer represents a footer within a Spectrum container.
    static member inline Footer (text: string) =
        let properties = [ prop.children [ Html.text text ] ]
        Interop.reactApi.createElement (import "Footer" "@adobe/react-spectrum", createObj !!properties)
    /// Footer represents a footer within a Spectrum container.
    static member inline Footer (properties: IReactProperty list) =
        Interop.reactApi.createElement (import "Footer" "@adobe/react-spectrum", createObj !!properties)

    /// Image is used to insert and display an image within a component.
    static member inline Image (properties: IReactProperty list) =
        Interop.reactApi.createElement (import "Image" "@adobe/react-spectrum", createObj !!properties)

    // ----------- Overlays -----------
    static member inline DialogClose (builder: (unit -> unit) -> ReactElement) : ReactElement =
        builder |> unbox<ReactElement>

    /// AlertDialogs are a specific type of Dialog. They display important information that users need to acknowledge.
    static member inline AlertDialog (content: ReactElement) =
        ofImport "AlertDialog" "@adobe/react-spectrum" [] [content]
    /// AlertDialogs are a specific type of Dialog. They display important information that users need to acknowledge.
    static member inline AlertDialog (properties: IReactProperty list) =
        Interop.reactApi.createElement (import "AlertDialog" "@adobe/react-spectrum", createObj !!properties)

    /// Dialogs are windows containing contextual information, tasks, or workflows that appear over the user interface. Depending on the kind of Dialog, further interactions may be blocked until the Dialog is acknowledged.
    static member inline Dialog (children: #seq<ReactElement>) =
        ofImport "Dialog" "@adobe/react-spectrum" [] children
    /// Dialogs are windows containing contextual information, tasks, or workflows that appear over the user interface. Depending on the kind of Dialog, further interactions may be blocked until the Dialog is acknowledged.
    static member inline Dialog (properties: IReactProperty list) =
        Interop.reactApi.createElement (import "Dialog" "@adobe/react-spectrum", createObj !!properties)

    /// A DialogContainer accepts a single Dialog as a child, and manages showing and hiding it in a modal. Useful in cases where there is no trigger element or when the trigger unmounts while the dialog is open.
    static member inline DialogContainer (content: ReactElement) =
        ofImport "DialogContainer" "@adobe/react-spectrum" [] [content]
    /// A DialogContainer accepts a single Dialog as a child, and manages showing and hiding it in a modal. Useful in cases where there is no trigger element or when the trigger unmounts while the dialog is open.
    static member inline DialogContainer (properties: IReactProperty list) =
        Interop.reactApi.createElement (import "DialogContainer" "@adobe/react-spectrum", createObj !!properties)

    /// DialogTrigger serves as a wrapper around a Dialog and its associated trigger, linking the Dialog's open state with the trigger's press state. Additionally, it allows you to customize the type and positioning of the Dialog.
    static member inline DialogTrigger (children: #seq<ReactElement>) =
        ofImport "DialogTrigger" "@adobe/react-spectrum" [] children
    /// DialogTrigger serves as a wrapper around a Dialog and its associated trigger, linking the Dialog's open state with the trigger's press state. Additionally, it allows you to customize the type and positioning of the Dialog.
    static member inline DialogTrigger (properties: IReactProperty list) =
        Interop.reactApi.createElement (import "DialogTrigger" "@adobe/react-spectrum", createObj !!properties)

    static member inline TooltipTrigger (children: #seq<ReactElement>) =
        ofImport "TooltipTrigger" "@adobe/react-spectrum" [] children
    static member inline TooltipTrigger (properties: IReactProperty list) =
        Interop.reactApi.createElement (import "TooltipTrigger" "@adobe/react-spectrum", createObj !!properties)

    /// Display container for Tooltip content. Has a directional arrow dependent on its placement.
    static member inline Tooltip (children: #seq<ReactElement>) =
        ofImport "Tooltip" "@adobe/react-spectrum" [] children
    /// Display container for Tooltip content. Has a directional arrow dependent on its placement.
    static member inline Tooltip (text: string) =
        let properties = [ Interop.mkAttr "children" text ]
        Interop.reactApi.createElement (import "Tooltip" "@adobe/react-spectrum", createObj !!properties)
    /// Display container for Tooltip content. Has a directional arrow dependent on its placement.
    static member inline Tooltip (properties: IReactProperty list) =
        Interop.reactApi.createElement (import "Tooltip" "@adobe/react-spectrum", createObj !!properties)

    static member inline useDialogContainer : (unit -> IDialog) = import "useDialogContainer" "@adobe/react-spectrum"

    /// Contextual help shows a user extra information about the state of an adjacent component, or a total view.
    static member inline ContextualHelp (children: #seq<ReactElement>) =
        ofImport "ContextualHelp" "@adobe/react-spectrum" [] children
    /// Contextual help shows a user extra information about the state of an adjacent component, or a total view.
    static member inline ContextualHelp (properties: IReactProperty list) =
        Interop.reactApi.createElement (import "ContextualHelp" "@adobe/react-spectrum", createObj !!properties)

    // ----------- Pickers -----------
    /// Pickers allow users to choose a single option from a collapsible list of options when space is limited.
    static member inline Picker (children: #seq<ReactElement>) =
        ofImport "Picker" "@adobe/react-spectrum" [] children
    /// Pickers allow users to choose a single option from a collapsible list of options when space is limited.
    static member inline Picker (properties: IReactProperty list) =
        Interop.reactApi.createElement (import "Picker" "@adobe/react-spectrum", createObj !!properties)

    /// ComboBoxes combine a text entry with a picker menu, allowing users to filter longer lists to only the selections matching a query.
    static member inline ComboBox (children: #seq<ReactElement>) =
        ofImport "ComboBox" "@adobe/react-spectrum" [] children
    /// ComboBoxes combine a text entry with a picker menu, allowing users to filter longer lists to only the selections matching a query.
    static member inline ComboBox (properties: IReactProperty list) =
        Interop.reactApi.createElement (import "ComboBox" "@adobe/react-spectrum", createObj !!properties)

    // ----------- Sliders -----------
    /// RangeSliders allow users to quickly select a subset range. They should be used when the upper and lower bounds to the range are invariable.
    static member inline RangeSlider (children: #seq<ReactElement>) =
        ofImport "RangeSlider" "@adobe/react-spectrum" [] children
    /// RangeSliders allow users to quickly select a subset range. They should be used when the upper and lower bounds to the range are invariable.
    static member inline RangeSlider (properties: IReactProperty list) =
        Interop.reactApi.createElement (import "RangeSlider" "@adobe/react-spectrum", createObj !!properties)

    /// Sliders allow users to quickly select a value within a range. They should be used when the upper and lower bounds to the range are invariable.
    static member inline Slider (children: #seq<ReactElement>) =
        ofImport "Slider" "@adobe/react-spectrum" [] children
    /// Sliders allow users to quickly select a value within a range. They should be used when the upper and lower bounds to the range are invariable.
    static member inline Slider (properties: IReactProperty list) =
        Interop.reactApi.createElement (import "Slider" "@adobe/react-spectrum", createObj !!properties)

    // ----------- Status -----------
    /// Meters are visual representations of a quantity or an achievement. Their progress is determined by user actions, rather than system actions.
    static member inline Meter (children: #seq<ReactElement>) =
        ofImport "Meter" "@adobe/react-spectrum" [] children
    /// Meters are visual representations of a quantity or an achievement. Their progress is determined by user actions, rather than system actions.
    static member inline Meter (properties: IReactProperty list) =
        Interop.reactApi.createElement (import "Meter" "@adobe/react-spectrum", createObj !!properties)

    /// ProgressBars show the progression of a system operation: downloading, uploading, processing, etc., in a visual way. They can represent either determinate or indeterminate progress.
    static member inline ProgressBar (children: #seq<ReactElement>) =
        ofImport "ProgressBar" "@adobe/react-spectrum" [] children
    /// ProgressBars show the progression of a system operation: downloading, uploading, processing, etc., in a visual way. They can represent either determinate or indeterminate progress.
    static member inline ProgressBar (properties: IReactProperty list) =
        Interop.reactApi.createElement (import "ProgressBar" "@adobe/react-spectrum", createObj !!properties)

    /// ProgressCircles show the progression of a system operation such as downloading, uploading, processing, etc. in a visual way. They can represent determinate or indeterminate progress.
    static member inline ProgressCircle (children: #seq<ReactElement>) =
        ofImport "ProgressCircle" "@adobe/react-spectrum" [] children
    /// ProgressCircles show the progression of a system operation such as downloading, uploading, processing, etc. in a visual way. They can represent determinate or indeterminate progress.
    static member inline ProgressCircle (properties: IReactProperty list) =
        Interop.reactApi.createElement (import "ProgressCircle" "@adobe/react-spectrum", createObj !!properties)

    /// Status lights are used to color code categories and labels commonly found in data visualization. When status lights have a semantic meaning, they should use semantic variant colors.
    static member inline StatusLight (children: #seq<ReactElement>) =
        ofImport "StatusLight" "@adobe/react-spectrum" [] children
    /// Status lights are used to color code categories and labels commonly found in data visualization. When status lights have a semantic meaning, they should use semantic variant colors.
    static member inline StatusLight (properties: IReactProperty list) =
        Interop.reactApi.createElement (import "StatusLight" "@adobe/react-spectrum", createObj !!properties)

    /// A Well is a content container that displays non-editable content separate from other content on the screen. Often this is used to display preformatted text, such as code/markup examples on a documentation page.
    static member inline Well (children: #seq<ReactElement>) =
        ofImport "Well" "@adobe/react-spectrum" [] children
    /// A Well is a content container that displays non-editable content separate from other content on the screen. Often this is used to display preformatted text, such as code/markup examples on a documentation page.
    static member inline Well (properties: IReactProperty list) =
        Interop.reactApi.createElement (import "Well" "@adobe/react-spectrum", createObj !!properties)

[<Erase>]
module Spectrum =
    [<Erase>]
    type Illustrations =
        static member inline NotFound (properties: IReactProperty list) =
            let NotFound = importDefault "@spectrum-icons/illustrations/NotFound"
            Interop.reactApi.createElement (NotFound, createObj !!properties)

        static member inline Error (properties: IReactProperty list) =
            let Error = importDefault "@spectrum-icons/illustrations/Error"
            Interop.reactApi.createElement (Error, createObj !!properties)

        static member inline NoSearchResults (properties: IReactProperty list) =
            let NoSearchResults = importDefault "@spectrum-icons/illustrations/NoSearchResults"
            Interop.reactApi.createElement (NoSearchResults, createObj !!properties)

        static member inline Timeout (properties: IReactProperty list) =
            let Timeout = importDefault "@spectrum-icons/illustrations/Timeout"
            Interop.reactApi.createElement (Timeout, createObj !!properties)

        static member inline Unauthorized (properties: IReactProperty list) =
            let Unauthorized = importDefault "@spectrum-icons/illustrations/Unauthorized"
            Interop.reactApi.createElement (Unauthorized, createObj !!properties)

        static member inline Unavailable (properties: IReactProperty list) =
            let Unavailable = importDefault "@spectrum-icons/illustrations/Unavailable"
            Interop.reactApi.createElement (Unavailable, createObj !!properties)

        static member inline Upload (properties: IReactProperty list) =
            let Upload = importDefault "@spectrum-icons/illustrations/Upload"
            Interop.reactApi.createElement (Upload, createObj !!properties)

    [<Erase>]
    type Icon =
        static member inline TableSelectRow (properties: IReactProperty list) =
            let TableSelectRow = importDefault "@spectrum-icons/workflow/TableSelectRow"
            Interop.reactApi.createElement (TableSelectRow, createObj !!properties)

        static member inline Ribbon (properties: IReactProperty list) =
            let Ribbon = importDefault "@spectrum-icons/workflow/Ribbon"
            Interop.reactApi.createElement (Ribbon, createObj !!properties)

        static member inline Polygon (properties: IReactProperty list) =
            let Polygon = importDefault "@spectrum-icons/workflow/Polygon"
            Interop.reactApi.createElement (Polygon, createObj !!properties)

        static member inline UsersAdd (properties: IReactProperty list) =
            let UsersAdd = importDefault "@spectrum-icons/workflow/UsersAdd"
            Interop.reactApi.createElement (UsersAdd, createObj !!properties)

        static member inline Spellcheck (properties: IReactProperty list) =
            let Spellcheck = importDefault "@spectrum-icons/workflow/Spellcheck"
            Interop.reactApi.createElement (Spellcheck, createObj !!properties)

        static member inline Gears (properties: IReactProperty list) =
            let Gears = importDefault "@spectrum-icons/workflow/Gears"
            Interop.reactApi.createElement (Gears, createObj !!properties)

        static member inline ChevronDown (properties: IReactProperty list) =
            let ChevronDown = importDefault "@spectrum-icons/workflow/ChevronDown"
            Interop.reactApi.createElement (ChevronDown, createObj !!properties)

        static member inline ImageSearch (properties: IReactProperty list) =
            let ImageSearch = importDefault "@spectrum-icons/workflow/ImageSearch"
            Interop.reactApi.createElement (ImageSearch, createObj !!properties)

        static member inline Stop (properties: IReactProperty list) =
            let Stop = importDefault "@spectrum-icons/workflow/Stop"
            Interop.reactApi.createElement (Stop, createObj !!properties)

        static member inline Cut (properties: IReactProperty list) =
            let Cut = importDefault "@spectrum-icons/workflow/Cut"
            Interop.reactApi.createElement (Cut, createObj !!properties)

        static member inline Channel (properties: IReactProperty list) =
            let Channel = importDefault "@spectrum-icons/workflow/Channel"
            Interop.reactApi.createElement (Channel, createObj !!properties)

        static member inline ``123`` (properties: IReactProperty list) =
            let ``123`` = importDefault "@spectrum-icons/workflow/123"
            Interop.reactApi.createElement (``123``, createObj !!properties)

        static member inline BidRule (properties: IReactProperty list) =
            let BidRule = importDefault "@spectrum-icons/workflow/BidRule"
            Interop.reactApi.createElement (BidRule, createObj !!properties)

        static member inline TextBulletedHierarchy (properties: IReactProperty list) =
            let TextBulletedHierarchy = importDefault "@spectrum-icons/workflow/TextBulletedHierarchy"
            Interop.reactApi.createElement (TextBulletedHierarchy, createObj !!properties)

        static member inline GraphBullet (properties: IReactProperty list) =
            let GraphBullet = importDefault "@spectrum-icons/workflow/GraphBullet"
            Interop.reactApi.createElement (GraphBullet, createObj !!properties)

        static member inline StepForwardCircle (properties: IReactProperty list) =
            let StepForwardCircle = importDefault "@spectrum-icons/workflow/StepForwardCircle"
            Interop.reactApi.createElement (StepForwardCircle, createObj !!properties)

        static member inline Remove (properties: IReactProperty list) =
            let Remove = importDefault "@spectrum-icons/workflow/Remove"
            Interop.reactApi.createElement (Remove, createObj !!properties)

        static member inline MoveTo (properties: IReactProperty list) =
            let MoveTo = importDefault "@spectrum-icons/workflow/MoveTo"
            Interop.reactApi.createElement (MoveTo, createObj !!properties)

        static member inline VisitShare (properties: IReactProperty list) =
            let VisitShare = importDefault "@spectrum-icons/workflow/VisitShare"
            Interop.reactApi.createElement (VisitShare, createObj !!properties)

        static member inline EmailSchedule (properties: IReactProperty list) =
            let EmailSchedule = importDefault "@spectrum-icons/workflow/EmailSchedule"
            Interop.reactApi.createElement (EmailSchedule, createObj !!properties)

        static member inline MBox (properties: IReactProperty list) =
            let MBox = importDefault "@spectrum-icons/workflow/MBox"
            Interop.reactApi.createElement (MBox, createObj !!properties)

        static member inline CheckmarkCircleOutline (properties: IReactProperty list) =
            let CheckmarkCircleOutline = importDefault "@spectrum-icons/workflow/CheckmarkCircleOutline"
            Interop.reactApi.createElement (CheckmarkCircleOutline, createObj !!properties)

        static member inline AlertAdd (properties: IReactProperty list) =
            let AlertAdd = importDefault "@spectrum-icons/workflow/AlertAdd"
            Interop.reactApi.createElement (AlertAdd, createObj !!properties)

        static member inline Exposure (properties: IReactProperty list) =
            let Exposure = importDefault "@spectrum-icons/workflow/Exposure"
            Interop.reactApi.createElement (Exposure, createObj !!properties)

        static member inline LocationBasedEvent (properties: IReactProperty list) =
            let LocationBasedEvent = importDefault "@spectrum-icons/workflow/LocationBasedEvent"
            Interop.reactApi.createElement (LocationBasedEvent, createObj !!properties)

        static member inline JourneyReports (properties: IReactProperty list) =
            let JourneyReports = importDefault "@spectrum-icons/workflow/JourneyReports"
            Interop.reactApi.createElement (JourneyReports, createObj !!properties)

        static member inline ChevronDoubleRight (properties: IReactProperty list) =
            let ChevronDoubleRight = importDefault "@spectrum-icons/workflow/ChevronDoubleRight"
            Interop.reactApi.createElement (ChevronDoubleRight, createObj !!properties)

        static member inline FolderRemove (properties: IReactProperty list) =
            let FolderRemove = importDefault "@spectrum-icons/workflow/FolderRemove"
            Interop.reactApi.createElement (FolderRemove, createObj !!properties)

        static member inline GraphGantt (properties: IReactProperty list) =
            let GraphGantt = importDefault "@spectrum-icons/workflow/GraphGantt"
            Interop.reactApi.createElement (GraphGantt, createObj !!properties)

        static member inline SelectSubstract (properties: IReactProperty list) =
            let SelectSubstract = importDefault "@spectrum-icons/workflow/SelectSubstract"
            Interop.reactApi.createElement (SelectSubstract, createObj !!properties)

        static member inline StepBackwardCircle (properties: IReactProperty list) =
            let StepBackwardCircle = importDefault "@spectrum-icons/workflow/StepBackwardCircle"
            Interop.reactApi.createElement (StepBackwardCircle, createObj !!properties)

        static member inline ExperienceAdd (properties: IReactProperty list) =
            let ExperienceAdd = importDefault "@spectrum-icons/workflow/ExperienceAdd"
            Interop.reactApi.createElement (ExperienceAdd, createObj !!properties)

        static member inline Wrench (properties: IReactProperty list) =
            let Wrench = importDefault "@spectrum-icons/workflow/Wrench"
            Interop.reactApi.createElement (Wrench, createObj !!properties)

        static member inline MarginRight (properties: IReactProperty list) =
            let MarginRight = importDefault "@spectrum-icons/workflow/MarginRight"
            Interop.reactApi.createElement (MarginRight, createObj !!properties)

        static member inline UserDeveloper (properties: IReactProperty list) =
            let UserDeveloper = importDefault "@spectrum-icons/workflow/UserDeveloper"
            Interop.reactApi.createElement (UserDeveloper, createObj !!properties)

        static member inline SortOrderDown (properties: IReactProperty list) =
            let SortOrderDown = importDefault "@spectrum-icons/workflow/SortOrderDown"
            Interop.reactApi.createElement (SortOrderDown, createObj !!properties)

        static member inline TextAlignCenter (properties: IReactProperty list) =
            let TextAlignCenter = importDefault "@spectrum-icons/workflow/TextAlignCenter"
            Interop.reactApi.createElement (TextAlignCenter, createObj !!properties)

        static member inline DragHandle (properties: IReactProperty list) =
            let DragHandle = importDefault "@spectrum-icons/workflow/DragHandle"
            Interop.reactApi.createElement (DragHandle, createObj !!properties)

        static member inline Download (properties: IReactProperty list) =
            let Download = importDefault "@spectrum-icons/workflow/Download"
            Interop.reactApi.createElement (Download, createObj !!properties)

        static member inline FileCSV (properties: IReactProperty list) =
            let FileCSV = importDefault "@spectrum-icons/workflow/FileCSV"
            Interop.reactApi.createElement (FileCSV, createObj !!properties)

        static member inline FilmrollAutoAdd (properties: IReactProperty list) =
            let FilmrollAutoAdd = importDefault "@spectrum-icons/workflow/FilmrollAutoAdd"
            Interop.reactApi.createElement (FilmrollAutoAdd, createObj !!properties)

        static member inline Line (properties: IReactProperty list) =
            let Line = importDefault "@spectrum-icons/workflow/Line"
            Interop.reactApi.createElement (Line, createObj !!properties)

        static member inline Clock (properties: IReactProperty list) =
            let Clock = importDefault "@spectrum-icons/workflow/Clock"
            Interop.reactApi.createElement (Clock, createObj !!properties)

        static member inline DataUpload (properties: IReactProperty list) =
            let DataUpload = importDefault "@spectrum-icons/workflow/DataUpload"
            Interop.reactApi.createElement (DataUpload, createObj !!properties)

        static member inline Multiple (properties: IReactProperty list) =
            let Multiple = importDefault "@spectrum-icons/workflow/Multiple"
            Interop.reactApi.createElement (Multiple, createObj !!properties)

        static member inline SeatAdd (properties: IReactProperty list) =
            let SeatAdd = importDefault "@spectrum-icons/workflow/SeatAdd"
            Interop.reactApi.createElement (SeatAdd, createObj !!properties)

        static member inline ConfidenceFour (properties: IReactProperty list) =
            let ConfidenceFour = importDefault "@spectrum-icons/workflow/ConfidenceFour"
            Interop.reactApi.createElement (ConfidenceFour, createObj !!properties)

        static member inline MergeLayers (properties: IReactProperty list) =
            let MergeLayers = importDefault "@spectrum-icons/workflow/MergeLayers"
            Interop.reactApi.createElement (MergeLayers, createObj !!properties)

        static member inline Gradient (properties: IReactProperty list) =
            let Gradient = importDefault "@spectrum-icons/workflow/Gradient"
            Interop.reactApi.createElement (Gradient, createObj !!properties)

        static member inline FileSingleWebPage (properties: IReactProperty list) =
            let FileSingleWebPage = importDefault "@spectrum-icons/workflow/FileSingleWebPage"
            Interop.reactApi.createElement (FileSingleWebPage, createObj !!properties)

        static member inline VectorDraw (properties: IReactProperty list) =
            let VectorDraw = importDefault "@spectrum-icons/workflow/VectorDraw"
            Interop.reactApi.createElement (VectorDraw, createObj !!properties)

        static member inline Segments (properties: IReactProperty list) =
            let Segments = importDefault "@spectrum-icons/workflow/Segments"
            Interop.reactApi.createElement (Segments, createObj !!properties)

        static member inline DeviceRotateLandscape (properties: IReactProperty list) =
            let DeviceRotateLandscape = importDefault "@spectrum-icons/workflow/DeviceRotateLandscape"
            Interop.reactApi.createElement (DeviceRotateLandscape, createObj !!properties)

        static member inline GlobeSearch (properties: IReactProperty list) =
            let GlobeSearch = importDefault "@spectrum-icons/workflow/GlobeSearch"
            Interop.reactApi.createElement (GlobeSearch, createObj !!properties)

        static member inline ApproveReject (properties: IReactProperty list) =
            let ApproveReject = importDefault "@spectrum-icons/workflow/ApproveReject"
            Interop.reactApi.createElement (ApproveReject, createObj !!properties)

        static member inline Events (properties: IReactProperty list) =
            let Events = importDefault "@spectrum-icons/workflow/Events"
            Interop.reactApi.createElement (Events, createObj !!properties)

        static member inline Monitoring (properties: IReactProperty list) =
            let Monitoring = importDefault "@spectrum-icons/workflow/Monitoring"
            Interop.reactApi.createElement (Monitoring, createObj !!properties)

        static member inline BackAndroid (properties: IReactProperty list) =
            let BackAndroid = importDefault "@spectrum-icons/workflow/BackAndroid"
            Interop.reactApi.createElement (BackAndroid, createObj !!properties)

        static member inline Feedback (properties: IReactProperty list) =
            let Feedback = importDefault "@spectrum-icons/workflow/Feedback"
            Interop.reactApi.createElement (Feedback, createObj !!properties)

        static member inline Folder (properties: IReactProperty list) =
            let Folder = importDefault "@spectrum-icons/workflow/Folder"
            Interop.reactApi.createElement (Folder, createObj !!properties)

        static member inline GraphPathing (properties: IReactProperty list) =
            let GraphPathing = importDefault "@spectrum-icons/workflow/GraphPathing"
            Interop.reactApi.createElement (GraphPathing, createObj !!properties)

        static member inline Underline (properties: IReactProperty list) =
            let Underline = importDefault "@spectrum-icons/workflow/Underline"
            Interop.reactApi.createElement (Underline, createObj !!properties)

        static member inline Key (properties: IReactProperty list) =
            let Key = importDefault "@spectrum-icons/workflow/Key"
            Interop.reactApi.createElement (Key, createObj !!properties)

        static member inline Ungroup (properties: IReactProperty list) =
            let Ungroup = importDefault "@spectrum-icons/workflow/Ungroup"
            Interop.reactApi.createElement (Ungroup, createObj !!properties)

        static member inline ``3DMaterials`` (properties: IReactProperty list) =
            let ``3DMaterials`` = importDefault "@spectrum-icons/workflow/3DMaterials"
            Interop.reactApi.createElement (``3DMaterials``, createObj !!properties)

        static member inline SelectContainer (properties: IReactProperty list) =
            let SelectContainer = importDefault "@spectrum-icons/workflow/SelectContainer"
            Interop.reactApi.createElement (SelectContainer, createObj !!properties)

        static member inline TableRowAddTop (properties: IReactProperty list) =
            let TableRowAddTop = importDefault "@spectrum-icons/workflow/TableRowAddTop"
            Interop.reactApi.createElement (TableRowAddTop, createObj !!properties)

        static member inline ZoomIn (properties: IReactProperty list) =
            let ZoomIn = importDefault "@spectrum-icons/workflow/ZoomIn"
            Interop.reactApi.createElement (ZoomIn, createObj !!properties)

        static member inline Send (properties: IReactProperty list) =
            let Send = importDefault "@spectrum-icons/workflow/Send"
            Interop.reactApi.createElement (Send, createObj !!properties)

        static member inline ChevronUpDown (properties: IReactProperty list) =
            let ChevronUpDown = importDefault "@spectrum-icons/workflow/ChevronUpDown"
            Interop.reactApi.createElement (ChevronUpDown, createObj !!properties)

        static member inline JourneyEvent (properties: IReactProperty list) =
            let JourneyEvent = importDefault "@spectrum-icons/workflow/JourneyEvent"
            Interop.reactApi.createElement (JourneyEvent, createObj !!properties)

        static member inline CloudError (properties: IReactProperty list) =
            let CloudError = importDefault "@spectrum-icons/workflow/CloudError"
            Interop.reactApi.createElement (CloudError, createObj !!properties)

        static member inline TextIndentIncrease (properties: IReactProperty list) =
            let TextIndentIncrease = importDefault "@spectrum-icons/workflow/TextIndentIncrease"
            Interop.reactApi.createElement (TextIndentIncrease, createObj !!properties)

        static member inline BreadcrumbNavigation (properties: IReactProperty list) =
            let BreadcrumbNavigation = importDefault "@spectrum-icons/workflow/BreadcrumbNavigation"
            Interop.reactApi.createElement (BreadcrumbNavigation, createObj !!properties)

        static member inline FileCode (properties: IReactProperty list) =
            let FileCode = importDefault "@spectrum-icons/workflow/FileCode"
            Interop.reactApi.createElement (FileCode, createObj !!properties)

        static member inline JourneyEvent2 (properties: IReactProperty list) =
            let JourneyEvent2 = importDefault "@spectrum-icons/workflow/JourneyEvent2"
            Interop.reactApi.createElement (JourneyEvent2, createObj !!properties)

        static member inline ReportAdd (properties: IReactProperty list) =
            let ReportAdd = importDefault "@spectrum-icons/workflow/ReportAdd"
            Interop.reactApi.createElement (ReportAdd, createObj !!properties)

        static member inline Building (properties: IReactProperty list) =
            let Building = importDefault "@spectrum-icons/workflow/Building"
            Interop.reactApi.createElement (Building, createObj !!properties)

        static member inline WebPages (properties: IReactProperty list) =
            let WebPages = importDefault "@spectrum-icons/workflow/WebPages"
            Interop.reactApi.createElement (WebPages, createObj !!properties)

        static member inline CollectionCheck (properties: IReactProperty list) =
            let CollectionCheck = importDefault "@spectrum-icons/workflow/CollectionCheck"
            Interop.reactApi.createElement (CollectionCheck, createObj !!properties)

        static member inline Histogram (properties: IReactProperty list) =
            let Histogram = importDefault "@spectrum-icons/workflow/Histogram"
            Interop.reactApi.createElement (Histogram, createObj !!properties)

        static member inline MarketingActivities (properties: IReactProperty list) =
            let MarketingActivities = importDefault "@spectrum-icons/workflow/MarketingActivities"
            Interop.reactApi.createElement (MarketingActivities, createObj !!properties)

        static member inline DeleteOutline (properties: IReactProperty list) =
            let DeleteOutline = importDefault "@spectrum-icons/workflow/DeleteOutline"
            Interop.reactApi.createElement (DeleteOutline, createObj !!properties)

        static member inline ColumnTwoA (properties: IReactProperty list) =
            let ColumnTwoA = importDefault "@spectrum-icons/workflow/ColumnTwoA"
            Interop.reactApi.createElement (ColumnTwoA, createObj !!properties)

        static member inline Circle (properties: IReactProperty list) =
            let Circle = importDefault "@spectrum-icons/workflow/Circle"
            Interop.reactApi.createElement (Circle, createObj !!properties)

        static member inline VisibilityOff (properties: IReactProperty list) =
            let VisibilityOff = importDefault "@spectrum-icons/workflow/VisibilityOff"
            Interop.reactApi.createElement (VisibilityOff, createObj !!properties)

        static member inline Game (properties: IReactProperty list) =
            let Game = importDefault "@spectrum-icons/workflow/Game"
            Interop.reactApi.createElement (Game, createObj !!properties)

        static member inline FlashlightOff (properties: IReactProperty list) =
            let FlashlightOff = importDefault "@spectrum-icons/workflow/FlashlightOff"
            Interop.reactApi.createElement (FlashlightOff, createObj !!properties)

        static member inline AnchorSelect (properties: IReactProperty list) =
            let AnchorSelect = importDefault "@spectrum-icons/workflow/AnchorSelect"
            Interop.reactApi.createElement (AnchorSelect, createObj !!properties)

        static member inline Hand3 (properties: IReactProperty list) =
            let Hand3 = importDefault "@spectrum-icons/workflow/Hand3"
            Interop.reactApi.createElement (Hand3, createObj !!properties)

        static member inline MultipleAdd (properties: IReactProperty list) =
            let MultipleAdd = importDefault "@spectrum-icons/workflow/MultipleAdd"
            Interop.reactApi.createElement (MultipleAdd, createObj !!properties)

        static member inline UploadToCloud (properties: IReactProperty list) =
            let UploadToCloud = importDefault "@spectrum-icons/workflow/UploadToCloud"
            Interop.reactApi.createElement (UploadToCloud, createObj !!properties)

        static member inline ViewWeek (properties: IReactProperty list) =
            let ViewWeek = importDefault "@spectrum-icons/workflow/ViewWeek"
            Interop.reactApi.createElement (ViewWeek, createObj !!properties)

        static member inline SelectIntersect (properties: IReactProperty list) =
            let SelectIntersect = importDefault "@spectrum-icons/workflow/SelectIntersect"
            Interop.reactApi.createElement (SelectIntersect, createObj !!properties)

        static member inline ViewDetail (properties: IReactProperty list) =
            let ViewDetail = importDefault "@spectrum-icons/workflow/ViewDetail"
            Interop.reactApi.createElement (ViewDetail, createObj !!properties)

        static member inline GraphTrend (properties: IReactProperty list) =
            let GraphTrend = importDefault "@spectrum-icons/workflow/GraphTrend"
            Interop.reactApi.createElement (GraphTrend, createObj !!properties)

        static member inline Shield (properties: IReactProperty list) =
            let Shield = importDefault "@spectrum-icons/workflow/Shield"
            Interop.reactApi.createElement (Shield, createObj !!properties)

        static member inline TextIndentDecrease (properties: IReactProperty list) =
            let TextIndentDecrease = importDefault "@spectrum-icons/workflow/TextIndentDecrease"
            Interop.reactApi.createElement (TextIndentDecrease, createObj !!properties)

        static member inline BracketsSquare (properties: IReactProperty list) =
            let BracketsSquare = importDefault "@spectrum-icons/workflow/BracketsSquare"
            Interop.reactApi.createElement (BracketsSquare, createObj !!properties)

        static member inline Branch1 (properties: IReactProperty list) =
            let Branch1 = importDefault "@spectrum-icons/workflow/Branch1"
            Interop.reactApi.createElement (Branch1, createObj !!properties)

        static member inline ImageMapCircle (properties: IReactProperty list) =
            let ImageMapCircle = importDefault "@spectrum-icons/workflow/ImageMapCircle"
            Interop.reactApi.createElement (ImageMapCircle, createObj !!properties)

        static member inline DeviceTablet (properties: IReactProperty list) =
            let DeviceTablet = importDefault "@spectrum-icons/workflow/DeviceTablet"
            Interop.reactApi.createElement (DeviceTablet, createObj !!properties)

        static member inline Servers (properties: IReactProperty list) =
            let Servers = importDefault "@spectrum-icons/workflow/Servers"
            Interop.reactApi.createElement (Servers, createObj !!properties)

        static member inline Apps (properties: IReactProperty list) =
            let Apps = importDefault "@spectrum-icons/workflow/Apps"
            Interop.reactApi.createElement (Apps, createObj !!properties)

        static member inline ChevronRight (properties: IReactProperty list) =
            let ChevronRight = importDefault "@spectrum-icons/workflow/ChevronRight"
            Interop.reactApi.createElement (ChevronRight, createObj !!properties)

        static member inline At (properties: IReactProperty list) =
            let At = importDefault "@spectrum-icons/workflow/At"
            Interop.reactApi.createElement (At, createObj !!properties)

        static member inline Fast (properties: IReactProperty list) =
            let Fast = importDefault "@spectrum-icons/workflow/Fast"
            Interop.reactApi.createElement (Fast, createObj !!properties)

        static member inline RegionSelect (properties: IReactProperty list) =
            let RegionSelect = importDefault "@spectrum-icons/workflow/RegionSelect"
            Interop.reactApi.createElement (RegionSelect, createObj !!properties)

        static member inline ReplyAll (properties: IReactProperty list) =
            let ReplyAll = importDefault "@spectrum-icons/workflow/ReplyAll"
            Interop.reactApi.createElement (ReplyAll, createObj !!properties)

        static member inline LocationContribution (properties: IReactProperty list) =
            let LocationContribution = importDefault "@spectrum-icons/workflow/LocationContribution"
            Interop.reactApi.createElement (LocationContribution, createObj !!properties)

        static member inline Boolean (properties: IReactProperty list) =
            let Boolean = importDefault "@spectrum-icons/workflow/Boolean"
            Interop.reactApi.createElement (Boolean, createObj !!properties)

        static member inline Annotate (properties: IReactProperty list) =
            let Annotate = importDefault "@spectrum-icons/workflow/Annotate"
            Interop.reactApi.createElement (Annotate, createObj !!properties)

        static member inline Money (properties: IReactProperty list) =
            let Money = importDefault "@spectrum-icons/workflow/Money"
            Interop.reactApi.createElement (Money, createObj !!properties)

        static member inline GraphConfidenceBands (properties: IReactProperty list) =
            let GraphConfidenceBands = importDefault "@spectrum-icons/workflow/GraphConfidenceBands"
            Interop.reactApi.createElement (GraphConfidenceBands, createObj !!properties)

        static member inline FileHTML (properties: IReactProperty list) =
            let FileHTML = importDefault "@spectrum-icons/workflow/FileHTML"
            Interop.reactApi.createElement (FileHTML, createObj !!properties)

        static member inline DistributeRightEdge (properties: IReactProperty list) =
            let DistributeRightEdge = importDefault "@spectrum-icons/workflow/DistributeRightEdge"
            Interop.reactApi.createElement (DistributeRightEdge, createObj !!properties)

        static member inline Play (properties: IReactProperty list) =
            let Play = importDefault "@spectrum-icons/workflow/Play"
            Interop.reactApi.createElement (Play, createObj !!properties)

        static member inline AnswerFavorite (properties: IReactProperty list) =
            let AnswerFavorite = importDefault "@spectrum-icons/workflow/AnswerFavorite"
            Interop.reactApi.createElement (AnswerFavorite, createObj !!properties)

        static member inline Pending (properties: IReactProperty list) =
            let Pending = importDefault "@spectrum-icons/workflow/Pending"
            Interop.reactApi.createElement (Pending, createObj !!properties)

        static member inline ArrowRight (properties: IReactProperty list) =
            let ArrowRight = importDefault "@spectrum-icons/workflow/ArrowRight"
            Interop.reactApi.createElement (ArrowRight, createObj !!properties)

        static member inline ExperienceImport (properties: IReactProperty list) =
            let ExperienceImport = importDefault "@spectrum-icons/workflow/ExperienceImport"
            Interop.reactApi.createElement (ExperienceImport, createObj !!properties)

        static member inline CropRotate (properties: IReactProperty list) =
            let CropRotate = importDefault "@spectrum-icons/workflow/CropRotate"
            Interop.reactApi.createElement (CropRotate, createObj !!properties)

        static member inline RotateCCW (properties: IReactProperty list) =
            let RotateCCW = importDefault "@spectrum-icons/workflow/RotateCCW"
            Interop.reactApi.createElement (RotateCCW, createObj !!properties)

        static member inline CollectionEdit (properties: IReactProperty list) =
            let CollectionEdit = importDefault "@spectrum-icons/workflow/CollectionEdit"
            Interop.reactApi.createElement (CollectionEdit, createObj !!properties)

        static member inline Brackets (properties: IReactProperty list) =
            let Brackets = importDefault "@spectrum-icons/workflow/Brackets"
            Interop.reactApi.createElement (Brackets, createObj !!properties)

        static member inline CCLibrary (properties: IReactProperty list) =
            let CCLibrary = importDefault "@spectrum-icons/workflow/CCLibrary"
            Interop.reactApi.createElement (CCLibrary, createObj !!properties)

        static member inline EditCircle (properties: IReactProperty list) =
            let EditCircle = importDefault "@spectrum-icons/workflow/EditCircle"
            Interop.reactApi.createElement (EditCircle, createObj !!properties)

        static member inline EventShare (properties: IReactProperty list) =
            let EventShare = importDefault "@spectrum-icons/workflow/EventShare"
            Interop.reactApi.createElement (EventShare, createObj !!properties)

        static member inline ImageNext (properties: IReactProperty list) =
            let ImageNext = importDefault "@spectrum-icons/workflow/ImageNext"
            Interop.reactApi.createElement (ImageNext, createObj !!properties)

        static member inline ThumbDownOutline (properties: IReactProperty list) =
            let ThumbDownOutline = importDefault "@spectrum-icons/workflow/ThumbDownOutline"
            Interop.reactApi.createElement (ThumbDownOutline, createObj !!properties)

        static member inline Switch (properties: IReactProperty list) =
            let Switch = importDefault "@spectrum-icons/workflow/Switch"
            Interop.reactApi.createElement (Switch, createObj !!properties)

        static member inline BoxImport (properties: IReactProperty list) =
            let BoxImport = importDefault "@spectrum-icons/workflow/BoxImport"
            Interop.reactApi.createElement (BoxImport, createObj !!properties)

        static member inline OnAir (properties: IReactProperty list) =
            let OnAir = importDefault "@spectrum-icons/workflow/OnAir"
            Interop.reactApi.createElement (OnAir, createObj !!properties)

        static member inline PageGear (properties: IReactProperty list) =
            let PageGear = importDefault "@spectrum-icons/workflow/PageGear"
            Interop.reactApi.createElement (PageGear, createObj !!properties)

        static member inline AddToSelection (properties: IReactProperty list) =
            let AddToSelection = importDefault "@spectrum-icons/workflow/AddToSelection"
            Interop.reactApi.createElement (AddToSelection, createObj !!properties)

        static member inline DataAdd (properties: IReactProperty list) =
            let DataAdd = importDefault "@spectrum-icons/workflow/DataAdd"
            Interop.reactApi.createElement (DataAdd, createObj !!properties)

        static member inline MarginTop (properties: IReactProperty list) =
            let MarginTop = importDefault "@spectrum-icons/workflow/MarginTop"
            Interop.reactApi.createElement (MarginTop, createObj !!properties)

        static member inline OfferDelete (properties: IReactProperty list) =
            let OfferDelete = importDefault "@spectrum-icons/workflow/OfferDelete"
            Interop.reactApi.createElement (OfferDelete, createObj !!properties)

        static member inline ThumbDown (properties: IReactProperty list) =
            let ThumbDown = importDefault "@spectrum-icons/workflow/ThumbDown"
            Interop.reactApi.createElement (ThumbDown, createObj !!properties)

        static member inline PageTag (properties: IReactProperty list) =
            let PageTag = importDefault "@spectrum-icons/workflow/PageTag"
            Interop.reactApi.createElement (PageTag, createObj !!properties)

        static member inline Type (properties: IReactProperty list) =
            let Type = importDefault "@spectrum-icons/workflow/Type"
            Interop.reactApi.createElement (Type, createObj !!properties)

        static member inline Airplane (properties: IReactProperty list) =
            let Airplane = importDefault "@spectrum-icons/workflow/Airplane"
            Interop.reactApi.createElement (Airplane, createObj !!properties)

        static member inline Feed (properties: IReactProperty list) =
            let Feed = importDefault "@spectrum-icons/workflow/Feed"
            Interop.reactApi.createElement (Feed, createObj !!properties)

        static member inline PaddingBottom (properties: IReactProperty list) =
            let PaddingBottom = importDefault "@spectrum-icons/workflow/PaddingBottom"
            Interop.reactApi.createElement (PaddingBottom, createObj !!properties)

        static member inline TextSizeAdd (properties: IReactProperty list) =
            let TextSizeAdd = importDefault "@spectrum-icons/workflow/TextSizeAdd"
            Interop.reactApi.createElement (TextSizeAdd, createObj !!properties)

        static member inline Preset (properties: IReactProperty list) =
            let Preset = importDefault "@spectrum-icons/workflow/Preset"
            Interop.reactApi.createElement (Preset, createObj !!properties)

        static member inline DeviceDesktop (properties: IReactProperty list) =
            let DeviceDesktop = importDefault "@spectrum-icons/workflow/DeviceDesktop"
            Interop.reactApi.createElement (DeviceDesktop, createObj !!properties)

        static member inline PagesExclude (properties: IReactProperty list) =
            let PagesExclude = importDefault "@spectrum-icons/workflow/PagesExclude"
            Interop.reactApi.createElement (PagesExclude, createObj !!properties)

        static member inline IdentityService (properties: IReactProperty list) =
            let IdentityService = importDefault "@spectrum-icons/workflow/IdentityService"
            Interop.reactApi.createElement (IdentityService, createObj !!properties)

        static member inline GraphProfitCurve (properties: IReactProperty list) =
            let GraphProfitCurve = importDefault "@spectrum-icons/workflow/GraphProfitCurve"
            Interop.reactApi.createElement (GraphProfitCurve, createObj !!properties)

        static member inline Hand2 (properties: IReactProperty list) =
            let Hand2 = importDefault "@spectrum-icons/workflow/Hand2"
            Interop.reactApi.createElement (Hand2, createObj !!properties)

        static member inline Export (properties: IReactProperty list) =
            let Export = importDefault "@spectrum-icons/workflow/Export"
            Interop.reactApi.createElement (Export, createObj !!properties)

        static member inline Temperature (properties: IReactProperty list) =
            let Temperature = importDefault "@spectrum-icons/workflow/Temperature"
            Interop.reactApi.createElement (Temperature, createObj !!properties)

        static member inline Looks (properties: IReactProperty list) =
            let Looks = importDefault "@spectrum-icons/workflow/Looks"
            Interop.reactApi.createElement (Looks, createObj !!properties)

        static member inline ChatAdd (properties: IReactProperty list) =
            let ChatAdd = importDefault "@spectrum-icons/workflow/ChatAdd"
            Interop.reactApi.createElement (ChatAdd, createObj !!properties)

        static member inline Feature (properties: IReactProperty list) =
            let Feature = importDefault "@spectrum-icons/workflow/Feature"
            Interop.reactApi.createElement (Feature, createObj !!properties)

        static member inline CheckmarkCircle (properties: IReactProperty list) =
            let CheckmarkCircle = importDefault "@spectrum-icons/workflow/CheckmarkCircle"
            Interop.reactApi.createElement (CheckmarkCircle, createObj !!properties)

        static member inline Summarize (properties: IReactProperty list) =
            let Summarize = importDefault "@spectrum-icons/workflow/Summarize"
            Interop.reactApi.createElement (Summarize, createObj !!properties)

        static member inline FacebookCoverImage (properties: IReactProperty list) =
            let FacebookCoverImage = importDefault "@spectrum-icons/workflow/FacebookCoverImage"
            Interop.reactApi.createElement (FacebookCoverImage, createObj !!properties)

        static member inline GenderMale (properties: IReactProperty list) =
            let GenderMale = importDefault "@spectrum-icons/workflow/GenderMale"
            Interop.reactApi.createElement (GenderMale, createObj !!properties)

        static member inline LinkOut (properties: IReactProperty list) =
            let LinkOut = importDefault "@spectrum-icons/workflow/LinkOut"
            Interop.reactApi.createElement (LinkOut, createObj !!properties)

        static member inline TableColumnSplit (properties: IReactProperty list) =
            let TableColumnSplit = importDefault "@spectrum-icons/workflow/TableColumnSplit"
            Interop.reactApi.createElement (TableColumnSplit, createObj !!properties)

        static member inline SplitView (properties: IReactProperty list) =
            let SplitView = importDefault "@spectrum-icons/workflow/SplitView"
            Interop.reactApi.createElement (SplitView, createObj !!properties)

        static member inline FileZip (properties: IReactProperty list) =
            let FileZip = importDefault "@spectrum-icons/workflow/FileZip"
            Interop.reactApi.createElement (FileZip, createObj !!properties)

        static member inline Delegate (properties: IReactProperty list) =
            let Delegate = importDefault "@spectrum-icons/workflow/Delegate"
            Interop.reactApi.createElement (Delegate, createObj !!properties)

        static member inline Sharpen (properties: IReactProperty list) =
            let Sharpen = importDefault "@spectrum-icons/workflow/Sharpen"
            Interop.reactApi.createElement (Sharpen, createObj !!properties)

        static member inline Pattern (properties: IReactProperty list) =
            let Pattern = importDefault "@spectrum-icons/workflow/Pattern"
            Interop.reactApi.createElement (Pattern, createObj !!properties)

        static member inline MoveUpDown (properties: IReactProperty list) =
            let MoveUpDown = importDefault "@spectrum-icons/workflow/MoveUpDown"
            Interop.reactApi.createElement (MoveUpDown, createObj !!properties)

        static member inline GearsAdd (properties: IReactProperty list) =
            let GearsAdd = importDefault "@spectrum-icons/workflow/GearsAdd"
            Interop.reactApi.createElement (GearsAdd, createObj !!properties)

        static member inline Minimize (properties: IReactProperty list) =
            let Minimize = importDefault "@spectrum-icons/workflow/Minimize"
            Interop.reactApi.createElement (Minimize, createObj !!properties)

        static member inline CollectionAdd (properties: IReactProperty list) =
            let CollectionAdd = importDefault "@spectrum-icons/workflow/CollectionAdd"
            Interop.reactApi.createElement (CollectionAdd, createObj !!properties)

        static member inline PopIn (properties: IReactProperty list) =
            let PopIn = importDefault "@spectrum-icons/workflow/PopIn"
            Interop.reactApi.createElement (PopIn, createObj !!properties)

        static member inline Promote (properties: IReactProperty list) =
            let Promote = importDefault "@spectrum-icons/workflow/Promote"
            Interop.reactApi.createElement (Promote, createObj !!properties)

        static member inline LocationBasedDate (properties: IReactProperty list) =
            let LocationBasedDate = importDefault "@spectrum-icons/workflow/LocationBasedDate"
            Interop.reactApi.createElement (LocationBasedDate, createObj !!properties)

        static member inline SocialNetwork (properties: IReactProperty list) =
            let SocialNetwork = importDefault "@spectrum-icons/workflow/SocialNetwork"
            Interop.reactApi.createElement (SocialNetwork, createObj !!properties)

        static member inline AlertCheck (properties: IReactProperty list) =
            let AlertCheck = importDefault "@spectrum-icons/workflow/AlertCheck"
            Interop.reactApi.createElement (AlertCheck, createObj !!properties)

        static member inline Divide (properties: IReactProperty list) =
            let Divide = importDefault "@spectrum-icons/workflow/Divide"
            Interop.reactApi.createElement (Divide, createObj !!properties)

        static member inline AddCircle (properties: IReactProperty list) =
            let AddCircle = importDefault "@spectrum-icons/workflow/AddCircle"
            Interop.reactApi.createElement (AddCircle, createObj !!properties)

        static member inline FileEmail (properties: IReactProperty list) =
            let FileEmail = importDefault "@spectrum-icons/workflow/FileEmail"
            Interop.reactApi.createElement (FileEmail, createObj !!properties)

        static member inline LockClosed (properties: IReactProperty list) =
            let LockClosed = importDefault "@spectrum-icons/workflow/LockClosed"
            Interop.reactApi.createElement (LockClosed, createObj !!properties)

        static member inline SmallCaps (properties: IReactProperty list) =
            let SmallCaps = importDefault "@spectrum-icons/workflow/SmallCaps"
            Interop.reactApi.createElement (SmallCaps, createObj !!properties)

        static member inline StopCircle (properties: IReactProperty list) =
            let StopCircle = importDefault "@spectrum-icons/workflow/StopCircle"
            Interop.reactApi.createElement (StopCircle, createObj !!properties)

        static member inline ClockCheck (properties: IReactProperty list) =
            let ClockCheck = importDefault "@spectrum-icons/workflow/ClockCheck"
            Interop.reactApi.createElement (ClockCheck, createObj !!properties)

        static member inline SyncRemove (properties: IReactProperty list) =
            let SyncRemove = importDefault "@spectrum-icons/workflow/SyncRemove"
            Interop.reactApi.createElement (SyncRemove, createObj !!properties)

        static member inline EditExclude (properties: IReactProperty list) =
            let EditExclude = importDefault "@spectrum-icons/workflow/EditExclude"
            Interop.reactApi.createElement (EditExclude, createObj !!properties)

        static member inline SaveAsFloppy (properties: IReactProperty list) =
            let SaveAsFloppy = importDefault "@spectrum-icons/workflow/SaveAsFloppy"
            Interop.reactApi.createElement (SaveAsFloppy, createObj !!properties)

        static member inline ConversionFunnel (properties: IReactProperty list) =
            let ConversionFunnel = importDefault "@spectrum-icons/workflow/ConversionFunnel"
            Interop.reactApi.createElement (ConversionFunnel, createObj !!properties)

        static member inline GearsDelete (properties: IReactProperty list) =
            let GearsDelete = importDefault "@spectrum-icons/workflow/GearsDelete"
            Interop.reactApi.createElement (GearsDelete, createObj !!properties)

        static member inline SaveFloppy (properties: IReactProperty list) =
            let SaveFloppy = importDefault "@spectrum-icons/workflow/SaveFloppy"
            Interop.reactApi.createElement (SaveFloppy, createObj !!properties)

        static member inline ImageAutoMode (properties: IReactProperty list) =
            let ImageAutoMode = importDefault "@spectrum-icons/workflow/ImageAutoMode"
            Interop.reactApi.createElement (ImageAutoMode, createObj !!properties)

        static member inline Edit (properties: IReactProperty list) =
            let Edit = importDefault "@spectrum-icons/workflow/Edit"
            Interop.reactApi.createElement (Edit, createObj !!properties)

        static member inline PasteList (properties: IReactProperty list) =
            let PasteList = importDefault "@spectrum-icons/workflow/PasteList"
            Interop.reactApi.createElement (PasteList, createObj !!properties)

        static member inline TextUnderline (properties: IReactProperty list) =
            let TextUnderline = importDefault "@spectrum-icons/workflow/TextUnderline"
            Interop.reactApi.createElement (TextUnderline, createObj !!properties)

        static member inline Copy (properties: IReactProperty list) =
            let Copy = importDefault "@spectrum-icons/workflow/Copy"
            Interop.reactApi.createElement (Copy, createObj !!properties)

        static member inline FileShare (properties: IReactProperty list) =
            let FileShare = importDefault "@spectrum-icons/workflow/FileShare"
            Interop.reactApi.createElement (FileShare, createObj !!properties)

        static member inline GlobeCheck (properties: IReactProperty list) =
            let GlobeCheck = importDefault "@spectrum-icons/workflow/GlobeCheck"
            Interop.reactApi.createElement (GlobeCheck, createObj !!properties)

        static member inline DownloadFromCloud (properties: IReactProperty list) =
            let DownloadFromCloud = importDefault "@spectrum-icons/workflow/DownloadFromCloud"
            Interop.reactApi.createElement (DownloadFromCloud, createObj !!properties)

        static member inline Education (properties: IReactProperty list) =
            let Education = importDefault "@spectrum-icons/workflow/Education"
            Interop.reactApi.createElement (Education, createObj !!properties)

        static member inline NewItem (properties: IReactProperty list) =
            let NewItem = importDefault "@spectrum-icons/workflow/NewItem"
            Interop.reactApi.createElement (NewItem, createObj !!properties)

        static member inline TableRowSplit (properties: IReactProperty list) =
            let TableRowSplit = importDefault "@spectrum-icons/workflow/TableRowSplit"
            Interop.reactApi.createElement (TableRowSplit, createObj !!properties)

        static member inline FileGear (properties: IReactProperty list) =
            let FileGear = importDefault "@spectrum-icons/workflow/FileGear"
            Interop.reactApi.createElement (FileGear, createObj !!properties)

        static member inline DataDownload (properties: IReactProperty list) =
            let DataDownload = importDefault "@spectrum-icons/workflow/DataDownload"
            Interop.reactApi.createElement (DataDownload, createObj !!properties)

        static member inline Code (properties: IReactProperty list) =
            let Code = importDefault "@spectrum-icons/workflow/Code"
            Interop.reactApi.createElement (Code, createObj !!properties)

        static member inline SentimentPositive (properties: IReactProperty list) =
            let SentimentPositive = importDefault "@spectrum-icons/workflow/SentimentPositive"
            Interop.reactApi.createElement (SentimentPositive, createObj !!properties)

        static member inline LinkPage (properties: IReactProperty list) =
            let LinkPage = importDefault "@spectrum-icons/workflow/LinkPage"
            Interop.reactApi.createElement (LinkPage, createObj !!properties)

        static member inline SentimentNeutral (properties: IReactProperty list) =
            let SentimentNeutral = importDefault "@spectrum-icons/workflow/SentimentNeutral"
            Interop.reactApi.createElement (SentimentNeutral, createObj !!properties)

        static member inline ExcludeOverlap (properties: IReactProperty list) =
            let ExcludeOverlap = importDefault "@spectrum-icons/workflow/ExcludeOverlap"
            Interop.reactApi.createElement (ExcludeOverlap, createObj !!properties)

        static member inline RailRightClose (properties: IReactProperty list) =
            let RailRightClose = importDefault "@spectrum-icons/workflow/RailRightClose"
            Interop.reactApi.createElement (RailRightClose, createObj !!properties)

        static member inline Attach (properties: IReactProperty list) =
            let Attach = importDefault "@spectrum-icons/workflow/Attach"
            Interop.reactApi.createElement (Attach, createObj !!properties)

        static member inline Globe (properties: IReactProperty list) =
            let Globe = importDefault "@spectrum-icons/workflow/Globe"
            Interop.reactApi.createElement (Globe, createObj !!properties)

        static member inline PageExclude (properties: IReactProperty list) =
            let PageExclude = importDefault "@spectrum-icons/workflow/PageExclude"
            Interop.reactApi.createElement (PageExclude, createObj !!properties)

        static member inline ModernGridView (properties: IReactProperty list) =
            let ModernGridView = importDefault "@spectrum-icons/workflow/ModernGridView"
            Interop.reactApi.createElement (ModernGridView, createObj !!properties)

        static member inline AssetsDownloaded (properties: IReactProperty list) =
            let AssetsDownloaded = importDefault "@spectrum-icons/workflow/AssetsDownloaded"
            Interop.reactApi.createElement (AssetsDownloaded, createObj !!properties)

        static member inline Actions (properties: IReactProperty list) =
            let Actions = importDefault "@spectrum-icons/workflow/Actions"
            Interop.reactApi.createElement (Actions, createObj !!properties)

        static member inline BookmarkSingle (properties: IReactProperty list) =
            let BookmarkSingle = importDefault "@spectrum-icons/workflow/BookmarkSingle"
            Interop.reactApi.createElement (BookmarkSingle, createObj !!properties)

        static member inline Starburst (properties: IReactProperty list) =
            let Starburst = importDefault "@spectrum-icons/workflow/Starburst"
            Interop.reactApi.createElement (Starburst, createObj !!properties)

        static member inline OS (properties: IReactProperty list) =
            let OS = importDefault "@spectrum-icons/workflow/OS"
            Interop.reactApi.createElement (OS, createObj !!properties)

        static member inline Question (properties: IReactProperty list) =
            let Question = importDefault "@spectrum-icons/workflow/Question"
            Interop.reactApi.createElement (Question, createObj !!properties)

        static member inline LabelExclude (properties: IReactProperty list) =
            let LabelExclude = importDefault "@spectrum-icons/workflow/LabelExclude"
            Interop.reactApi.createElement (LabelExclude, createObj !!properties)

        static member inline Star (properties: IReactProperty list) =
            let Star = importDefault "@spectrum-icons/workflow/Star"
            Interop.reactApi.createElement (Star, createObj !!properties)

        static member inline Experience (properties: IReactProperty list) =
            let Experience = importDefault "@spectrum-icons/workflow/Experience"
            Interop.reactApi.createElement (Experience, createObj !!properties)

        static member inline ColorPalette (properties: IReactProperty list) =
            let ColorPalette = importDefault "@spectrum-icons/workflow/ColorPalette"
            Interop.reactApi.createElement (ColorPalette, createObj !!properties)

        static member inline SelectBoxAll (properties: IReactProperty list) =
            let SelectBoxAll = importDefault "@spectrum-icons/workflow/SelectBoxAll"
            Interop.reactApi.createElement (SelectBoxAll, createObj !!properties)

        static member inline UserAdmin (properties: IReactProperty list) =
            let UserAdmin = importDefault "@spectrum-icons/workflow/UserAdmin"
            Interop.reactApi.createElement (UserAdmin, createObj !!properties)

        static member inline Event (properties: IReactProperty list) =
            let Event = importDefault "@spectrum-icons/workflow/Event"
            Interop.reactApi.createElement (Event, createObj !!properties)

        static member inline SaveTo (properties: IReactProperty list) =
            let SaveTo = importDefault "@spectrum-icons/workflow/SaveTo"
            Interop.reactApi.createElement (SaveTo, createObj !!properties)

        static member inline RSS (properties: IReactProperty list) =
            let RSS = importDefault "@spectrum-icons/workflow/RSS"
            Interop.reactApi.createElement (RSS, createObj !!properties)

        static member inline SentimentNegative (properties: IReactProperty list) =
            let SentimentNegative = importDefault "@spectrum-icons/workflow/SentimentNegative"
            Interop.reactApi.createElement (SentimentNegative, createObj !!properties)

        static member inline TableAndChart (properties: IReactProperty list) =
            let TableAndChart = importDefault "@spectrum-icons/workflow/TableAndChart"
            Interop.reactApi.createElement (TableAndChart, createObj !!properties)

        static member inline WorkflowAdd (properties: IReactProperty list) =
            let WorkflowAdd = importDefault "@spectrum-icons/workflow/WorkflowAdd"
            Interop.reactApi.createElement (WorkflowAdd, createObj !!properties)

        static member inline PasteHTML (properties: IReactProperty list) =
            let PasteHTML = importDefault "@spectrum-icons/workflow/PasteHTML"
            Interop.reactApi.createElement (PasteHTML, createObj !!properties)

        static member inline LinkUser (properties: IReactProperty list) =
            let LinkUser = importDefault "@spectrum-icons/workflow/LinkUser"
            Interop.reactApi.createElement (LinkUser, createObj !!properties)

        static member inline DocumentOutline (properties: IReactProperty list) =
            let DocumentOutline = importDefault "@spectrum-icons/workflow/DocumentOutline"
            Interop.reactApi.createElement (DocumentOutline, createObj !!properties)

        static member inline Box (properties: IReactProperty list) =
            let Box = importDefault "@spectrum-icons/workflow/Box"
            Interop.reactApi.createElement (Box, createObj !!properties)

        static member inline Bug (properties: IReactProperty list) =
            let Bug = importDefault "@spectrum-icons/workflow/Bug"
            Interop.reactApi.createElement (Bug, createObj !!properties)

        static member inline Stadium (properties: IReactProperty list) =
            let Stadium = importDefault "@spectrum-icons/workflow/Stadium"
            Interop.reactApi.createElement (Stadium, createObj !!properties)

        static member inline Tableau (properties: IReactProperty list) =
            let Tableau = importDefault "@spectrum-icons/workflow/Tableau"
            Interop.reactApi.createElement (Tableau, createObj !!properties)

        static member inline CloudOutline (properties: IReactProperty list) =
            let CloudOutline = importDefault "@spectrum-icons/workflow/CloudOutline"
            Interop.reactApi.createElement (CloudOutline, createObj !!properties)

        static member inline TextAlignJustify (properties: IReactProperty list) =
            let TextAlignJustify = importDefault "@spectrum-icons/workflow/TextAlignJustify"
            Interop.reactApi.createElement (TextAlignJustify, createObj !!properties)

        static member inline MagicWand (properties: IReactProperty list) =
            let MagicWand = importDefault "@spectrum-icons/workflow/MagicWand"
            Interop.reactApi.createElement (MagicWand, createObj !!properties)

        static member inline Merge (properties: IReactProperty list) =
            let Merge = importDefault "@spectrum-icons/workflow/Merge"
            Interop.reactApi.createElement (Merge, createObj !!properties)

        static member inline Bell (properties: IReactProperty list) =
            let Bell = importDefault "@spectrum-icons/workflow/Bell"
            Interop.reactApi.createElement (Bell, createObj !!properties)

        static member inline LockOpen (properties: IReactProperty list) =
            let LockOpen = importDefault "@spectrum-icons/workflow/LockOpen"
            Interop.reactApi.createElement (LockOpen, createObj !!properties)

        static member inline Flag (properties: IReactProperty list) =
            let Flag = importDefault "@spectrum-icons/workflow/Flag"
            Interop.reactApi.createElement (Flag, createObj !!properties)

        static member inline PinOn (properties: IReactProperty list) =
            let PinOn = importDefault "@spectrum-icons/workflow/PinOn"
            Interop.reactApi.createElement (PinOn, createObj !!properties)

        static member inline TagBold (properties: IReactProperty list) =
            let TagBold = importDefault "@spectrum-icons/workflow/TagBold"
            Interop.reactApi.createElement (TagBold, createObj !!properties)

        static member inline ShowOneLayer (properties: IReactProperty list) =
            let ShowOneLayer = importDefault "@spectrum-icons/workflow/ShowOneLayer"
            Interop.reactApi.createElement (ShowOneLayer, createObj !!properties)

        static member inline CloneStamp (properties: IReactProperty list) =
            let CloneStamp = importDefault "@spectrum-icons/workflow/CloneStamp"
            Interop.reactApi.createElement (CloneStamp, createObj !!properties)

        static member inline MoreVertical (properties: IReactProperty list) =
            let MoreVertical = importDefault "@spectrum-icons/workflow/MoreVertical"
            Interop.reactApi.createElement (MoreVertical, createObj !!properties)

        static member inline Subscribe (properties: IReactProperty list) =
            let Subscribe = importDefault "@spectrum-icons/workflow/Subscribe"
            Interop.reactApi.createElement (Subscribe, createObj !!properties)

        static member inline ShareLight (properties: IReactProperty list) =
            let ShareLight = importDefault "@spectrum-icons/workflow/ShareLight"
            Interop.reactApi.createElement (ShareLight, createObj !!properties)

        static member inline User (properties: IReactProperty list) =
            let User = importDefault "@spectrum-icons/workflow/User"
            Interop.reactApi.createElement (User, createObj !!properties)

        static member inline CollectionLink (properties: IReactProperty list) =
            let CollectionLink = importDefault "@spectrum-icons/workflow/CollectionLink"
            Interop.reactApi.createElement (CollectionLink, createObj !!properties)

        static member inline Measure (properties: IReactProperty list) =
            let Measure = importDefault "@spectrum-icons/workflow/Measure"
            Interop.reactApi.createElement (Measure, createObj !!properties)

        static member inline GraphDonut (properties: IReactProperty list) =
            let GraphDonut = importDefault "@spectrum-icons/workflow/GraphDonut"
            Interop.reactApi.createElement (GraphDonut, createObj !!properties)

        static member inline FileMobile (properties: IReactProperty list) =
            let FileMobile = importDefault "@spectrum-icons/workflow/FileMobile"
            Interop.reactApi.createElement (FileMobile, createObj !!properties)

        static member inline ViewColumn (properties: IReactProperty list) =
            let ViewColumn = importDefault "@spectrum-icons/workflow/ViewColumn"
            Interop.reactApi.createElement (ViewColumn, createObj !!properties)

        static member inline GraphArea (properties: IReactProperty list) =
            let GraphArea = importDefault "@spectrum-icons/workflow/GraphArea"
            Interop.reactApi.createElement (GraphArea, createObj !!properties)

        static member inline DeviceTV (properties: IReactProperty list) =
            let DeviceTV = importDefault "@spectrum-icons/workflow/DeviceTV"
            Interop.reactApi.createElement (DeviceTV, createObj !!properties)

        static member inline TableRowAddBottom (properties: IReactProperty list) =
            let TableRowAddBottom = importDefault "@spectrum-icons/workflow/TableRowAddBottom"
            Interop.reactApi.createElement (TableRowAddBottom, createObj !!properties)

        static member inline FolderOpen (properties: IReactProperty list) =
            let FolderOpen = importDefault "@spectrum-icons/workflow/FolderOpen"
            Interop.reactApi.createElement (FolderOpen, createObj !!properties)

        static member inline Magnify (properties: IReactProperty list) =
            let Magnify = importDefault "@spectrum-icons/workflow/Magnify"
            Interop.reactApi.createElement (Magnify, createObj !!properties)

        static member inline GenderFemale (properties: IReactProperty list) =
            let GenderFemale = importDefault "@spectrum-icons/workflow/GenderFemale"
            Interop.reactApi.createElement (GenderFemale, createObj !!properties)

        static member inline LayersForward (properties: IReactProperty list) =
            let LayersForward = importDefault "@spectrum-icons/workflow/LayersForward"
            Interop.reactApi.createElement (LayersForward, createObj !!properties)

        static member inline Hammer (properties: IReactProperty list) =
            let Hammer = importDefault "@spectrum-icons/workflow/Hammer"
            Interop.reactApi.createElement (Hammer, createObj !!properties)

        static member inline VideoFilled (properties: IReactProperty list) =
            let VideoFilled = importDefault "@spectrum-icons/workflow/VideoFilled"
            Interop.reactApi.createElement (VideoFilled, createObj !!properties)

        static member inline GlobeClock (properties: IReactProperty list) =
            let GlobeClock = importDefault "@spectrum-icons/workflow/GlobeClock"
            Interop.reactApi.createElement (GlobeClock, createObj !!properties)

        static member inline Labels (properties: IReactProperty list) =
            let Labels = importDefault "@spectrum-icons/workflow/Labels"
            Interop.reactApi.createElement (Labels, createObj !!properties)

        static member inline LogOut (properties: IReactProperty list) =
            let LogOut = importDefault "@spectrum-icons/workflow/LogOut"
            Interop.reactApi.createElement (LogOut, createObj !!properties)

        static member inline GlobeGrid (properties: IReactProperty list) =
            let GlobeGrid = importDefault "@spectrum-icons/workflow/GlobeGrid"
            Interop.reactApi.createElement (GlobeGrid, createObj !!properties)

        static member inline Browse (properties: IReactProperty list) =
            let Browse = importDefault "@spectrum-icons/workflow/Browse"
            Interop.reactApi.createElement (Browse, createObj !!properties)

        static member inline PlatformDataMapping (properties: IReactProperty list) =
            let PlatformDataMapping = importDefault "@spectrum-icons/workflow/PlatformDataMapping"
            Interop.reactApi.createElement (PlatformDataMapping, createObj !!properties)

        static member inline RemoveCircle (properties: IReactProperty list) =
            let RemoveCircle = importDefault "@spectrum-icons/workflow/RemoveCircle"
            Interop.reactApi.createElement (RemoveCircle, createObj !!properties)

        static member inline TestABEdit (properties: IReactProperty list) =
            let TestABEdit = importDefault "@spectrum-icons/workflow/TestABEdit"
            Interop.reactApi.createElement (TestABEdit, createObj !!properties)

        static member inline Replies (properties: IReactProperty list) =
            let Replies = importDefault "@spectrum-icons/workflow/Replies"
            Interop.reactApi.createElement (Replies, createObj !!properties)

        static member inline FolderLocked (properties: IReactProperty list) =
            let FolderLocked = importDefault "@spectrum-icons/workflow/FolderLocked"
            Interop.reactApi.createElement (FolderLocked, createObj !!properties)

        static member inline Organisations (properties: IReactProperty list) =
            let Organisations = importDefault "@spectrum-icons/workflow/Organisations"
            Interop.reactApi.createElement (Organisations, createObj !!properties)

        static member inline EmailGear (properties: IReactProperty list) =
            let EmailGear = importDefault "@spectrum-icons/workflow/EmailGear"
            Interop.reactApi.createElement (EmailGear, createObj !!properties)

        static member inline ViewCard (properties: IReactProperty list) =
            let ViewCard = importDefault "@spectrum-icons/workflow/ViewCard"
            Interop.reactApi.createElement (ViewCard, createObj !!properties)

        static member inline Import (properties: IReactProperty list) =
            let Import = importDefault "@spectrum-icons/workflow/Import"
            Interop.reactApi.createElement (Import, createObj !!properties)

        static member inline LinearGradient (properties: IReactProperty list) =
            let LinearGradient = importDefault "@spectrum-icons/workflow/LinearGradient"
            Interop.reactApi.createElement (LinearGradient, createObj !!properties)

        static member inline GraphBubble (properties: IReactProperty list) =
            let GraphBubble = importDefault "@spectrum-icons/workflow/GraphBubble"
            Interop.reactApi.createElement (GraphBubble, createObj !!properties)

        static member inline FlagExclude (properties: IReactProperty list) =
            let FlagExclude = importDefault "@spectrum-icons/workflow/FlagExclude"
            Interop.reactApi.createElement (FlagExclude, createObj !!properties)

        static member inline Targeted (properties: IReactProperty list) =
            let Targeted = importDefault "@spectrum-icons/workflow/Targeted"
            Interop.reactApi.createElement (Targeted, createObj !!properties)

        static member inline FolderDelete (properties: IReactProperty list) =
            let FolderDelete = importDefault "@spectrum-icons/workflow/FolderDelete"
            Interop.reactApi.createElement (FolderDelete, createObj !!properties)

        static member inline CheckPause (properties: IReactProperty list) =
            let CheckPause = importDefault "@spectrum-icons/workflow/CheckPause"
            Interop.reactApi.createElement (CheckPause, createObj !!properties)

        static member inline Algorithm (properties: IReactProperty list) =
            let Algorithm = importDefault "@spectrum-icons/workflow/Algorithm"
            Interop.reactApi.createElement (Algorithm, createObj !!properties)

        static member inline Curate (properties: IReactProperty list) =
            let Curate = importDefault "@spectrum-icons/workflow/Curate"
            Interop.reactApi.createElement (Curate, createObj !!properties)

        static member inline IntersectOverlap (properties: IReactProperty list) =
            let IntersectOverlap = importDefault "@spectrum-icons/workflow/IntersectOverlap"
            Interop.reactApi.createElement (IntersectOverlap, createObj !!properties)

        static member inline Survey (properties: IReactProperty list) =
            let Survey = importDefault "@spectrum-icons/workflow/Survey"
            Interop.reactApi.createElement (Survey, createObj !!properties)

        static member inline Effects (properties: IReactProperty list) =
            let Effects = importDefault "@spectrum-icons/workflow/Effects"
            Interop.reactApi.createElement (Effects, createObj !!properties)

        static member inline TreeCollapseAll (properties: IReactProperty list) =
            let TreeCollapseAll = importDefault "@spectrum-icons/workflow/TreeCollapseAll"
            Interop.reactApi.createElement (TreeCollapseAll, createObj !!properties)

        static member inline Preview (properties: IReactProperty list) =
            let Preview = importDefault "@spectrum-icons/workflow/Preview"
            Interop.reactApi.createElement (Preview, createObj !!properties)

        static member inline AdDisplay (properties: IReactProperty list) =
            let AdDisplay = importDefault "@spectrum-icons/workflow/AdDisplay"
            Interop.reactApi.createElement (AdDisplay, createObj !!properties)

        static member inline GraphBarVerticalAdd (properties: IReactProperty list) =
            let GraphBarVerticalAdd = importDefault "@spectrum-icons/workflow/GraphBarVerticalAdd"
            Interop.reactApi.createElement (GraphBarVerticalAdd, createObj !!properties)

        static member inline UsersShare (properties: IReactProperty list) =
            let UsersShare = importDefault "@spectrum-icons/workflow/UsersShare"
            Interop.reactApi.createElement (UsersShare, createObj !!properties)

        static member inline ColorWheel (properties: IReactProperty list) =
            let ColorWheel = importDefault "@spectrum-icons/workflow/ColorWheel"
            Interop.reactApi.createElement (ColorWheel, createObj !!properties)

        static member inline LinkOff (properties: IReactProperty list) =
            let LinkOff = importDefault "@spectrum-icons/workflow/LinkOff"
            Interop.reactApi.createElement (LinkOff, createObj !!properties)

        static member inline Heart (properties: IReactProperty list) =
            let Heart = importDefault "@spectrum-icons/workflow/Heart"
            Interop.reactApi.createElement (Heart, createObj !!properties)

        static member inline FolderArchive (properties: IReactProperty list) =
            let FolderArchive = importDefault "@spectrum-icons/workflow/FolderArchive"
            Interop.reactApi.createElement (FolderArchive, createObj !!properties)

        static member inline AssetsModified (properties: IReactProperty list) =
            let AssetsModified = importDefault "@spectrum-icons/workflow/AssetsModified"
            Interop.reactApi.createElement (AssetsModified, createObj !!properties)

        static member inline ExperienceExport (properties: IReactProperty list) =
            let ExperienceExport = importDefault "@spectrum-icons/workflow/ExperienceExport"
            Interop.reactApi.createElement (ExperienceExport, createObj !!properties)

        static member inline FlipVertical (properties: IReactProperty list) =
            let FlipVertical = importDefault "@spectrum-icons/workflow/FlipVertical"
            Interop.reactApi.createElement (FlipVertical, createObj !!properties)

        static member inline Link (properties: IReactProperty list) =
            let Link = importDefault "@spectrum-icons/workflow/Link"
            Interop.reactApi.createElement (Link, createObj !!properties)

        static member inline Sync (properties: IReactProperty list) =
            let Sync = importDefault "@spectrum-icons/workflow/Sync"
            Interop.reactApi.createElement (Sync, createObj !!properties)

        static member inline GraphBarVertical (properties: IReactProperty list) =
            let GraphBarVertical = importDefault "@spectrum-icons/workflow/GraphBarVertical"
            Interop.reactApi.createElement (GraphBarVertical, createObj !!properties)

        static member inline BoxExport (properties: IReactProperty list) =
            let BoxExport = importDefault "@spectrum-icons/workflow/BoxExport"
            Interop.reactApi.createElement (BoxExport, createObj !!properties)

        static member inline RotateCW (properties: IReactProperty list) =
            let RotateCW = importDefault "@spectrum-icons/workflow/RotateCW"
            Interop.reactApi.createElement (RotateCW, createObj !!properties)

        static member inline FlashOff (properties: IReactProperty list) =
            let FlashOff = importDefault "@spectrum-icons/workflow/FlashOff"
            Interop.reactApi.createElement (FlashOff, createObj !!properties)

        static member inline TextSpaceAfter (properties: IReactProperty list) =
            let TextSpaceAfter = importDefault "@spectrum-icons/workflow/TextSpaceAfter"
            Interop.reactApi.createElement (TextSpaceAfter, createObj !!properties)

        static member inline ShareCheck (properties: IReactProperty list) =
            let ShareCheck = importDefault "@spectrum-icons/workflow/ShareCheck"
            Interop.reactApi.createElement (ShareCheck, createObj !!properties)

        static member inline ProjectNameEdit (properties: IReactProperty list) =
            let ProjectNameEdit = importDefault "@spectrum-icons/workflow/ProjectNameEdit"
            Interop.reactApi.createElement (ProjectNameEdit, createObj !!properties)

        static member inline LinkOutLight (properties: IReactProperty list) =
            let LinkOutLight = importDefault "@spectrum-icons/workflow/LinkOutLight"
            Interop.reactApi.createElement (LinkOutLight, createObj !!properties)

        static member inline Teapot (properties: IReactProperty list) =
            let Teapot = importDefault "@spectrum-icons/workflow/Teapot"
            Interop.reactApi.createElement (Teapot, createObj !!properties)

        static member inline BulkEditUsers (properties: IReactProperty list) =
            let BulkEditUsers = importDefault "@spectrum-icons/workflow/BulkEditUsers"
            Interop.reactApi.createElement (BulkEditUsers, createObj !!properties)

        static member inline EmailNotification (properties: IReactProperty list) =
            let EmailNotification = importDefault "@spectrum-icons/workflow/EmailNotification"
            Interop.reactApi.createElement (EmailNotification, createObj !!properties)

        static member inline Gauge4 (properties: IReactProperty list) =
            let Gauge4 = importDefault "@spectrum-icons/workflow/Gauge4"
            Interop.reactApi.createElement (Gauge4, createObj !!properties)

        static member inline Spam (properties: IReactProperty list) =
            let Spam = importDefault "@spectrum-icons/workflow/Spam"
            Interop.reactApi.createElement (Spam, createObj !!properties)

        static member inline DataBook (properties: IReactProperty list) =
            let DataBook = importDefault "@spectrum-icons/workflow/DataBook"
            Interop.reactApi.createElement (DataBook, createObj !!properties)

        static member inline SelectGear (properties: IReactProperty list) =
            let SelectGear = importDefault "@spectrum-icons/workflow/SelectGear"
            Interop.reactApi.createElement (SelectGear, createObj !!properties)

        static member inline FileFolder (properties: IReactProperty list) =
            let FileFolder = importDefault "@spectrum-icons/workflow/FileFolder"
            Interop.reactApi.createElement (FileFolder, createObj !!properties)

        static member inline Separator (properties: IReactProperty list) =
            let Separator = importDefault "@spectrum-icons/workflow/Separator"
            Interop.reactApi.createElement (Separator, createObj !!properties)

        static member inline FileSpace (properties: IReactProperty list) =
            let FileSpace = importDefault "@spectrum-icons/workflow/FileSpace"
            Interop.reactApi.createElement (FileSpace, createObj !!properties)

        static member inline Delete (properties: IReactProperty list) =
            let Delete = importDefault "@spectrum-icons/workflow/Delete"
            Interop.reactApi.createElement (Delete, createObj !!properties)

        static member inline Flashlight (properties: IReactProperty list) =
            let Flashlight = importDefault "@spectrum-icons/workflow/Flashlight"
            Interop.reactApi.createElement (Flashlight, createObj !!properties)

        static member inline Heal (properties: IReactProperty list) =
            let Heal = importDefault "@spectrum-icons/workflow/Heal"
            Interop.reactApi.createElement (Heal, createObj !!properties)

        static member inline Rename (properties: IReactProperty list) =
            let Rename = importDefault "@spectrum-icons/workflow/Rename"
            Interop.reactApi.createElement (Rename, createObj !!properties)

        static member inline ImageCarousel (properties: IReactProperty list) =
            let ImageCarousel = importDefault "@spectrum-icons/workflow/ImageCarousel"
            Interop.reactApi.createElement (ImageCarousel, createObj !!properties)

        static member inline Visit (properties: IReactProperty list) =
            let Visit = importDefault "@spectrum-icons/workflow/Visit"
            Interop.reactApi.createElement (Visit, createObj !!properties)

        static member inline Efficient (properties: IReactProperty list) =
            let Efficient = importDefault "@spectrum-icons/workflow/Efficient"
            Interop.reactApi.createElement (Efficient, createObj !!properties)

        static member inline MultipleExclude (properties: IReactProperty list) =
            let MultipleExclude = importDefault "@spectrum-icons/workflow/MultipleExclude"
            Interop.reactApi.createElement (MultipleExclude, createObj !!properties)

        static member inline ViewBiWeek (properties: IReactProperty list) =
            let ViewBiWeek = importDefault "@spectrum-icons/workflow/ViewBiWeek"
            Interop.reactApi.createElement (ViewBiWeek, createObj !!properties)

        static member inline Asset (properties: IReactProperty list) =
            let Asset = importDefault "@spectrum-icons/workflow/Asset"
            Interop.reactApi.createElement (Asset, createObj !!properties)

        static member inline Straighten (properties: IReactProperty list) =
            let Straighten = importDefault "@spectrum-icons/workflow/Straighten"
            Interop.reactApi.createElement (Straighten, createObj !!properties)

        static member inline Blower (properties: IReactProperty list) =
            let Blower = importDefault "@spectrum-icons/workflow/Blower"
            Interop.reactApi.createElement (Blower, createObj !!properties)

        static member inline FastForwardCircle (properties: IReactProperty list) =
            let FastForwardCircle = importDefault "@spectrum-icons/workflow/FastForwardCircle"
            Interop.reactApi.createElement (FastForwardCircle, createObj !!properties)

        static member inline HelpOutline (properties: IReactProperty list) =
            let HelpOutline = importDefault "@spectrum-icons/workflow/HelpOutline"
            Interop.reactApi.createElement (HelpOutline, createObj !!properties)

        static member inline Anchor (properties: IReactProperty list) =
            let Anchor = importDefault "@spectrum-icons/workflow/Anchor"
            Interop.reactApi.createElement (Anchor, createObj !!properties)

        static member inline SubstractFromSelection (properties: IReactProperty list) =
            let SubstractFromSelection = importDefault "@spectrum-icons/workflow/SubstractFromSelection"
            Interop.reactApi.createElement (SubstractFromSelection, createObj !!properties)

        static member inline TableRowRemoveCenter (properties: IReactProperty list) =
            let TableRowRemoveCenter = importDefault "@spectrum-icons/workflow/TableRowRemoveCenter"
            Interop.reactApi.createElement (TableRowRemoveCenter, createObj !!properties)

        static member inline FileImportant (properties: IReactProperty list) =
            let FileImportant = importDefault "@spectrum-icons/workflow/FileImportant"
            Interop.reactApi.createElement (FileImportant, createObj !!properties)

        static member inline DataRemove (properties: IReactProperty list) =
            let DataRemove = importDefault "@spectrum-icons/workflow/DataRemove"
            Interop.reactApi.createElement (DataRemove, createObj !!properties)

        static member inline USA (properties: IReactProperty list) =
            let USA = importDefault "@spectrum-icons/workflow/USA"
            Interop.reactApi.createElement (USA, createObj !!properties)

        static member inline Rail (properties: IReactProperty list) =
            let Rail = importDefault "@spectrum-icons/workflow/Rail"
            Interop.reactApi.createElement (Rail, createObj !!properties)

        static member inline Properties (properties: IReactProperty list) =
            let Properties = importDefault "@spectrum-icons/workflow/Properties"
            Interop.reactApi.createElement (Properties, createObj !!properties)

        static member inline Portrait (properties: IReactProperty list) =
            let Portrait = importDefault "@spectrum-icons/workflow/Portrait"
            Interop.reactApi.createElement (Portrait, createObj !!properties)

        static member inline Deduplication (properties: IReactProperty list) =
            let Deduplication = importDefault "@spectrum-icons/workflow/Deduplication"
            Interop.reactApi.createElement (Deduplication, createObj !!properties)

        static member inline Light (properties: IReactProperty list) =
            let Light = importDefault "@spectrum-icons/workflow/Light"
            Interop.reactApi.createElement (Light, createObj !!properties)

        static member inline Cloud (properties: IReactProperty list) =
            let Cloud = importDefault "@spectrum-icons/workflow/Cloud"
            Interop.reactApi.createElement (Cloud, createObj !!properties)

        static member inline OpenRecent (properties: IReactProperty list) =
            let OpenRecent = importDefault "@spectrum-icons/workflow/OpenRecent"
            Interop.reactApi.createElement (OpenRecent, createObj !!properties)

        static member inline SMSRefresh (properties: IReactProperty list) =
            let SMSRefresh = importDefault "@spectrum-icons/workflow/SMSRefresh"
            Interop.reactApi.createElement (SMSRefresh, createObj !!properties)

        static member inline TextTracking (properties: IReactProperty list) =
            let TextTracking = importDefault "@spectrum-icons/workflow/TextTracking"
            Interop.reactApi.createElement (TextTracking, createObj !!properties)

        static member inline Cancel (properties: IReactProperty list) =
            let Cancel = importDefault "@spectrum-icons/workflow/Cancel"
            Interop.reactApi.createElement (Cancel, createObj !!properties)

        static member inline Orbit (properties: IReactProperty list) =
            let Orbit = importDefault "@spectrum-icons/workflow/Orbit"
            Interop.reactApi.createElement (Orbit, createObj !!properties)

        static member inline ShoppingCart (properties: IReactProperty list) =
            let ShoppingCart = importDefault "@spectrum-icons/workflow/ShoppingCart"
            Interop.reactApi.createElement (ShoppingCart, createObj !!properties)

        static member inline FlashlightOn (properties: IReactProperty list) =
            let FlashlightOn = importDefault "@spectrum-icons/workflow/FlashlightOn"
            Interop.reactApi.createElement (FlashlightOn, createObj !!properties)

        static member inline Organize (properties: IReactProperty list) =
            let Organize = importDefault "@spectrum-icons/workflow/Organize"
            Interop.reactApi.createElement (Organize, createObj !!properties)

        static member inline PeopleGroup (properties: IReactProperty list) =
            let PeopleGroup = importDefault "@spectrum-icons/workflow/PeopleGroup"
            Interop.reactApi.createElement (PeopleGroup, createObj !!properties)

        static member inline DividePath (properties: IReactProperty list) =
            let DividePath = importDefault "@spectrum-icons/workflow/DividePath"
            Interop.reactApi.createElement (DividePath, createObj !!properties)

        static member inline OpenInLight (properties: IReactProperty list) =
            let OpenInLight = importDefault "@spectrum-icons/workflow/OpenInLight"
            Interop.reactApi.createElement (OpenInLight, createObj !!properties)

        static member inline TextStrikethrough (properties: IReactProperty list) =
            let TextStrikethrough = importDefault "@spectrum-icons/workflow/TextStrikethrough"
            Interop.reactApi.createElement (TextStrikethrough, createObj !!properties)

        static member inline Pawn (properties: IReactProperty list) =
            let Pawn = importDefault "@spectrum-icons/workflow/Pawn"
            Interop.reactApi.createElement (Pawn, createObj !!properties)

        static member inline FileUser (properties: IReactProperty list) =
            let FileUser = importDefault "@spectrum-icons/workflow/FileUser"
            Interop.reactApi.createElement (FileUser, createObj !!properties)

        static member inline MoreCircle (properties: IReactProperty list) =
            let MoreCircle = importDefault "@spectrum-icons/workflow/MoreCircle"
            Interop.reactApi.createElement (MoreCircle, createObj !!properties)

        static member inline WebPage (properties: IReactProperty list) =
            let WebPage = importDefault "@spectrum-icons/workflow/WebPage"
            Interop.reactApi.createElement (WebPage, createObj !!properties)

        static member inline RotateCCWBold (properties: IReactProperty list) =
            let RotateCCWBold = importDefault "@spectrum-icons/workflow/RotateCCWBold"
            Interop.reactApi.createElement (RotateCCWBold, createObj !!properties)

        static member inline CloudDisconnected (properties: IReactProperty list) =
            let CloudDisconnected = importDefault "@spectrum-icons/workflow/CloudDisconnected"
            Interop.reactApi.createElement (CloudDisconnected, createObj !!properties)

        static member inline ExportOriginal (properties: IReactProperty list) =
            let ExportOriginal = importDefault "@spectrum-icons/workflow/ExportOriginal"
            Interop.reactApi.createElement (ExportOriginal, createObj !!properties)

        static member inline TableAdd (properties: IReactProperty list) =
            let TableAdd = importDefault "@spectrum-icons/workflow/TableAdd"
            Interop.reactApi.createElement (TableAdd, createObj !!properties)

        static member inline TextBold (properties: IReactProperty list) =
            let TextBold = importDefault "@spectrum-icons/workflow/TextBold"
            Interop.reactApi.createElement (TextBold, createObj !!properties)

        static member inline TableHistogram (properties: IReactProperty list) =
            let TableHistogram = importDefault "@spectrum-icons/workflow/TableHistogram"
            Interop.reactApi.createElement (TableHistogram, createObj !!properties)

        static member inline UserGroup (properties: IReactProperty list) =
            let UserGroup = importDefault "@spectrum-icons/workflow/UserGroup"
            Interop.reactApi.createElement (UserGroup, createObj !!properties)

        static member inline AdPrint (properties: IReactProperty list) =
            let AdPrint = importDefault "@spectrum-icons/workflow/AdPrint"
            Interop.reactApi.createElement (AdPrint, createObj !!properties)

        static member inline RotateRightOutline (properties: IReactProperty list) =
            let RotateRightOutline = importDefault "@spectrum-icons/workflow/RotateRightOutline"
            Interop.reactApi.createElement (RotateRightOutline, createObj !!properties)

        static member inline ImageMapPolygon (properties: IReactProperty list) =
            let ImageMapPolygon = importDefault "@spectrum-icons/workflow/ImageMapPolygon"
            Interop.reactApi.createElement (ImageMapPolygon, createObj !!properties)

        static member inline InvertAdj (properties: IReactProperty list) =
            let InvertAdj = importDefault "@spectrum-icons/workflow/InvertAdj"
            Interop.reactApi.createElement (InvertAdj, createObj !!properties)

        static member inline DocumentFragmentGroup (properties: IReactProperty list) =
            let DocumentFragmentGroup = importDefault "@spectrum-icons/workflow/DocumentFragmentGroup"
            Interop.reactApi.createElement (DocumentFragmentGroup, createObj !!properties)

        static member inline Gauge5 (properties: IReactProperty list) =
            let Gauge5 = importDefault "@spectrum-icons/workflow/Gauge5"
            Interop.reactApi.createElement (Gauge5, createObj !!properties)

        static member inline FlashOn (properties: IReactProperty list) =
            let FlashOn = importDefault "@spectrum-icons/workflow/FlashOn"
            Interop.reactApi.createElement (FlashOn, createObj !!properties)

        static member inline UserEdit (properties: IReactProperty list) =
            let UserEdit = importDefault "@spectrum-icons/workflow/UserEdit"
            Interop.reactApi.createElement (UserEdit, createObj !!properties)

        static member inline AutomatedSegment (properties: IReactProperty list) =
            let AutomatedSegment = importDefault "@spectrum-icons/workflow/AutomatedSegment"
            Interop.reactApi.createElement (AutomatedSegment, createObj !!properties)

        static member inline Slice (properties: IReactProperty list) =
            let Slice = importDefault "@spectrum-icons/workflow/Slice"
            Interop.reactApi.createElement (Slice, createObj !!properties)

        static member inline CameraRefresh (properties: IReactProperty list) =
            let CameraRefresh = importDefault "@spectrum-icons/workflow/CameraRefresh"
            Interop.reactApi.createElement (CameraRefresh, createObj !!properties)

        static member inline Follow (properties: IReactProperty list) =
            let Follow = importDefault "@spectrum-icons/workflow/Follow"
            Interop.reactApi.createElement (Follow, createObj !!properties)

        static member inline Attributes (properties: IReactProperty list) =
            let Attributes = importDefault "@spectrum-icons/workflow/Attributes"
            Interop.reactApi.createElement (Attributes, createObj !!properties)

        static member inline Seat (properties: IReactProperty list) =
            let Seat = importDefault "@spectrum-icons/workflow/Seat"
            Interop.reactApi.createElement (Seat, createObj !!properties)

        static member inline Answer (properties: IReactProperty list) =
            let Answer = importDefault "@spectrum-icons/workflow/Answer"
            Interop.reactApi.createElement (Answer, createObj !!properties)

        static member inline ShowAllLayers (properties: IReactProperty list) =
            let ShowAllLayers = importDefault "@spectrum-icons/workflow/ShowAllLayers"
            Interop.reactApi.createElement (ShowAllLayers, createObj !!properties)

        static member inline BreakdownAdd (properties: IReactProperty list) =
            let BreakdownAdd = importDefault "@spectrum-icons/workflow/BreakdownAdd"
            Interop.reactApi.createElement (BreakdownAdd, createObj !!properties)

        static member inline FastForward (properties: IReactProperty list) =
            let FastForward = importDefault "@spectrum-icons/workflow/FastForward"
            Interop.reactApi.createElement (FastForward, createObj !!properties)

        static member inline AssetsExpired (properties: IReactProperty list) =
            let AssetsExpired = importDefault "@spectrum-icons/workflow/AssetsExpired"
            Interop.reactApi.createElement (AssetsExpired, createObj !!properties)

        static member inline Spin (properties: IReactProperty list) =
            let Spin = importDefault "@spectrum-icons/workflow/Spin"
            Interop.reactApi.createElement (Spin, createObj !!properties)

        static member inline Moon (properties: IReactProperty list) =
            let Moon = importDefault "@spectrum-icons/workflow/Moon"
            Interop.reactApi.createElement (Moon, createObj !!properties)

        static member inline Crosshairs (properties: IReactProperty list) =
            let Crosshairs = importDefault "@spectrum-icons/workflow/Crosshairs"
            Interop.reactApi.createElement (Crosshairs, createObj !!properties)

        static member inline PublishRemove (properties: IReactProperty list) =
            let PublishRemove = importDefault "@spectrum-icons/workflow/PublishRemove"
            Interop.reactApi.createElement (PublishRemove, createObj !!properties)

        static member inline ImageText (properties: IReactProperty list) =
            let ImageText = importDefault "@spectrum-icons/workflow/ImageText"
            Interop.reactApi.createElement (ImageText, createObj !!properties)

        static member inline ImageAdd (properties: IReactProperty list) =
            let ImageAdd = importDefault "@spectrum-icons/workflow/ImageAdd"
            Interop.reactApi.createElement (ImageAdd, createObj !!properties)

        static member inline VoiceOver (properties: IReactProperty list) =
            let VoiceOver = importDefault "@spectrum-icons/workflow/VoiceOver"
            Interop.reactApi.createElement (VoiceOver, createObj !!properties)

        static member inline TestProfile (properties: IReactProperty list) =
            let TestProfile = importDefault "@spectrum-icons/workflow/TestProfile"
            Interop.reactApi.createElement (TestProfile, createObj !!properties)

        static member inline MovieCamera (properties: IReactProperty list) =
            let MovieCamera = importDefault "@spectrum-icons/workflow/MovieCamera"
            Interop.reactApi.createElement (MovieCamera, createObj !!properties)

        static member inline UserAdd (properties: IReactProperty list) =
            let UserAdd = importDefault "@spectrum-icons/workflow/UserAdd"
            Interop.reactApi.createElement (UserAdd, createObj !!properties)

        static member inline DataUnavailable (properties: IReactProperty list) =
            let DataUnavailable = importDefault "@spectrum-icons/workflow/DataUnavailable"
            Interop.reactApi.createElement (DataUnavailable, createObj !!properties)

        static member inline Add (properties: IReactProperty list) =
            let Add = importDefault "@spectrum-icons/workflow/Add"
            Interop.reactApi.createElement (Add, createObj !!properties)

        static member inline Home (properties: IReactProperty list) =
            let Home = importDefault "@spectrum-icons/workflow/Home"
            Interop.reactApi.createElement (Home, createObj !!properties)

        static member inline Close (properties: IReactProperty list) =
            let Close = importDefault "@spectrum-icons/workflow/Close"
            Interop.reactApi.createElement (Close, createObj !!properties)

        static member inline BeakerCheck (properties: IReactProperty list) =
            let BeakerCheck = importDefault "@spectrum-icons/workflow/BeakerCheck"
            Interop.reactApi.createElement (BeakerCheck, createObj !!properties)

        static member inline AlignTop (properties: IReactProperty list) =
            let AlignTop = importDefault "@spectrum-icons/workflow/AlignTop"
            Interop.reactApi.createElement (AlignTop, createObj !!properties)

        static member inline PublishSchedule (properties: IReactProperty list) =
            let PublishSchedule = importDefault "@spectrum-icons/workflow/PublishSchedule"
            Interop.reactApi.createElement (PublishSchedule, createObj !!properties)

        static member inline CampaignAdd (properties: IReactProperty list) =
            let CampaignAdd = importDefault "@spectrum-icons/workflow/CampaignAdd"
            Interop.reactApi.createElement (CampaignAdd, createObj !!properties)

        static member inline Breakdown (properties: IReactProperty list) =
            let Breakdown = importDefault "@spectrum-icons/workflow/Breakdown"
            Interop.reactApi.createElement (Breakdown, createObj !!properties)

        static member inline FindAndReplace (properties: IReactProperty list) =
            let FindAndReplace = importDefault "@spectrum-icons/workflow/FindAndReplace"
            Interop.reactApi.createElement (FindAndReplace, createObj !!properties)

        static member inline JourneyAction (properties: IReactProperty list) =
            let JourneyAction = importDefault "@spectrum-icons/workflow/JourneyAction"
            Interop.reactApi.createElement (JourneyAction, createObj !!properties)

        static member inline FolderAdd (properties: IReactProperty list) =
            let FolderAdd = importDefault "@spectrum-icons/workflow/FolderAdd"
            Interop.reactApi.createElement (FolderAdd, createObj !!properties)

        static member inline Forecast (properties: IReactProperty list) =
            let Forecast = importDefault "@spectrum-icons/workflow/Forecast"
            Interop.reactApi.createElement (Forecast, createObj !!properties)

        static member inline UserShare (properties: IReactProperty list) =
            let UserShare = importDefault "@spectrum-icons/workflow/UserShare"
            Interop.reactApi.createElement (UserShare, createObj !!properties)

        static member inline FolderOpenOutline (properties: IReactProperty list) =
            let FolderOpenOutline = importDefault "@spectrum-icons/workflow/FolderOpenOutline"
            Interop.reactApi.createElement (FolderOpenOutline, createObj !!properties)

        static member inline DocumentRefresh (properties: IReactProperty list) =
            let DocumentRefresh = importDefault "@spectrum-icons/workflow/DocumentRefresh"
            Interop.reactApi.createElement (DocumentRefresh, createObj !!properties)

        static member inline Checkmark (properties: IReactProperty list) =
            let Checkmark = importDefault "@spectrum-icons/workflow/Checkmark"
            Interop.reactApi.createElement (Checkmark, createObj !!properties)

        static member inline ChevronLeft (properties: IReactProperty list) =
            let ChevronLeft = importDefault "@spectrum-icons/workflow/ChevronLeft"
            Interop.reactApi.createElement (ChevronLeft, createObj !!properties)

        static member inline RangeMask (properties: IReactProperty list) =
            let RangeMask = importDefault "@spectrum-icons/workflow/RangeMask"
            Interop.reactApi.createElement (RangeMask, createObj !!properties)

        static member inline DistributeSpaceVert (properties: IReactProperty list) =
            let DistributeSpaceVert = importDefault "@spectrum-icons/workflow/DistributeSpaceVert"
            Interop.reactApi.createElement (DistributeSpaceVert, createObj !!properties)

        static member inline Alias (properties: IReactProperty list) =
            let Alias = importDefault "@spectrum-icons/workflow/Alias"
            Interop.reactApi.createElement (Alias, createObj !!properties)

        static member inline BookmarkSmallOutline (properties: IReactProperty list) =
            let BookmarkSmallOutline = importDefault "@spectrum-icons/workflow/BookmarkSmallOutline"
            Interop.reactApi.createElement (BookmarkSmallOutline, createObj !!properties)

        static member inline Perspective (properties: IReactProperty list) =
            let Perspective = importDefault "@spectrum-icons/workflow/Perspective"
            Interop.reactApi.createElement (Perspective, createObj !!properties)

        static member inline Gauge1 (properties: IReactProperty list) =
            let Gauge1 = importDefault "@spectrum-icons/workflow/Gauge1"
            Interop.reactApi.createElement (Gauge1, createObj !!properties)

        static member inline FolderOutline (properties: IReactProperty list) =
            let FolderOutline = importDefault "@spectrum-icons/workflow/FolderOutline"
            Interop.reactApi.createElement (FolderOutline, createObj !!properties)

        static member inline CameraFlip (properties: IReactProperty list) =
            let CameraFlip = importDefault "@spectrum-icons/workflow/CameraFlip"
            Interop.reactApi.createElement (CameraFlip, createObj !!properties)

        static member inline DevicePhone (properties: IReactProperty list) =
            let DevicePhone = importDefault "@spectrum-icons/workflow/DevicePhone"
            Interop.reactApi.createElement (DevicePhone, createObj !!properties)

        static member inline Comment (properties: IReactProperty list) =
            let Comment = importDefault "@spectrum-icons/workflow/Comment"
            Interop.reactApi.createElement (Comment, createObj !!properties)

        static member inline TestABGear (properties: IReactProperty list) =
            let TestABGear = importDefault "@spectrum-icons/workflow/TestABGear"
            Interop.reactApi.createElement (TestABGear, createObj !!properties)

        static member inline ImageCheck (properties: IReactProperty list) =
            let ImageCheck = importDefault "@spectrum-icons/workflow/ImageCheck"
            Interop.reactApi.createElement (ImageCheck, createObj !!properties)

        static member inline FollowOff (properties: IReactProperty list) =
            let FollowOff = importDefault "@spectrum-icons/workflow/FollowOff"
            Interop.reactApi.createElement (FollowOff, createObj !!properties)

        static member inline Offer (properties: IReactProperty list) =
            let Offer = importDefault "@spectrum-icons/workflow/Offer"
            Interop.reactApi.createElement (Offer, createObj !!properties)

        static member inline TextExclude (properties: IReactProperty list) =
            let TextExclude = importDefault "@spectrum-icons/workflow/TextExclude"
            Interop.reactApi.createElement (TextExclude, createObj !!properties)

        static member inline GraphBarHorizontalAdd (properties: IReactProperty list) =
            let GraphBarHorizontalAdd = importDefault "@spectrum-icons/workflow/GraphBarHorizontalAdd"
            Interop.reactApi.createElement (GraphBarHorizontalAdd, createObj !!properties)

        static member inline Shapes (properties: IReactProperty list) =
            let Shapes = importDefault "@spectrum-icons/workflow/Shapes"
            Interop.reactApi.createElement (Shapes, createObj !!properties)

        static member inline GlobeOutline (properties: IReactProperty list) =
            let GlobeOutline = importDefault "@spectrum-icons/workflow/GlobeOutline"
            Interop.reactApi.createElement (GlobeOutline, createObj !!properties)

        static member inline GlobeStrike (properties: IReactProperty list) =
            let GlobeStrike = importDefault "@spectrum-icons/workflow/GlobeStrike"
            Interop.reactApi.createElement (GlobeStrike, createObj !!properties)

        static member inline Help (properties: IReactProperty list) =
            let Help = importDefault "@spectrum-icons/workflow/Help"
            Interop.reactApi.createElement (Help, createObj !!properties)

        static member inline GearsEdit (properties: IReactProperty list) =
            let GearsEdit = importDefault "@spectrum-icons/workflow/GearsEdit"
            Interop.reactApi.createElement (GearsEdit, createObj !!properties)

        static member inline Revenue (properties: IReactProperty list) =
            let Revenue = importDefault "@spectrum-icons/workflow/Revenue"
            Interop.reactApi.createElement (Revenue, createObj !!properties)

        static member inline InfoOutline (properties: IReactProperty list) =
            let InfoOutline = importDefault "@spectrum-icons/workflow/InfoOutline"
            Interop.reactApi.createElement (InfoOutline, createObj !!properties)

        static member inline FileWorkflow (properties: IReactProperty list) =
            let FileWorkflow = importDefault "@spectrum-icons/workflow/FileWorkflow"
            Interop.reactApi.createElement (FileWorkflow, createObj !!properties)

        static member inline Panel (properties: IReactProperty list) =
            let Panel = importDefault "@spectrum-icons/workflow/Panel"
            Interop.reactApi.createElement (Panel, createObj !!properties)

        static member inline Sampler (properties: IReactProperty list) =
            let Sampler = importDefault "@spectrum-icons/workflow/Sampler"
            Interop.reactApi.createElement (Sampler, createObj !!properties)

        static member inline TransferToPlatform (properties: IReactProperty list) =
            let TransferToPlatform = importDefault "@spectrum-icons/workflow/TransferToPlatform"
            Interop.reactApi.createElement (TransferToPlatform, createObj !!properties)

        static member inline DesktopAndMobile (properties: IReactProperty list) =
            let DesktopAndMobile = importDefault "@spectrum-icons/workflow/DesktopAndMobile"
            Interop.reactApi.createElement (DesktopAndMobile, createObj !!properties)

        static member inline Trophy (properties: IReactProperty list) =
            let Trophy = importDefault "@spectrum-icons/workflow/Trophy"
            Interop.reactApi.createElement (Trophy, createObj !!properties)

        static member inline ChevronDoubleLeft (properties: IReactProperty list) =
            let ChevronDoubleLeft = importDefault "@spectrum-icons/workflow/ChevronDoubleLeft"
            Interop.reactApi.createElement (ChevronDoubleLeft, createObj !!properties)

        static member inline DistributeTopEdge (properties: IReactProperty list) =
            let DistributeTopEdge = importDefault "@spectrum-icons/workflow/DistributeTopEdge"
            Interop.reactApi.createElement (DistributeTopEdge, createObj !!properties)

        static member inline DeselectCircular (properties: IReactProperty list) =
            let DeselectCircular = importDefault "@spectrum-icons/workflow/DeselectCircular"
            Interop.reactApi.createElement (DeselectCircular, createObj !!properties)

        static member inline AEMScreens (properties: IReactProperty list) =
            let AEMScreens = importDefault "@spectrum-icons/workflow/AEMScreens"
            Interop.reactApi.createElement (AEMScreens, createObj !!properties)

        static member inline AttachmentExclude (properties: IReactProperty list) =
            let AttachmentExclude = importDefault "@spectrum-icons/workflow/AttachmentExclude"
            Interop.reactApi.createElement (AttachmentExclude, createObj !!properties)

        static member inline UserExclude (properties: IReactProperty list) =
            let UserExclude = importDefault "@spectrum-icons/workflow/UserExclude"
            Interop.reactApi.createElement (UserExclude, createObj !!properties)

        static member inline UserActivity (properties: IReactProperty list) =
            let UserActivity = importDefault "@spectrum-icons/workflow/UserActivity"
            Interop.reactApi.createElement (UserActivity, createObj !!properties)

        static member inline SelectionMove (properties: IReactProperty list) =
            let SelectionMove = importDefault "@spectrum-icons/workflow/SelectionMove"
            Interop.reactApi.createElement (SelectionMove, createObj !!properties)

        static member inline TextBulletedAttach (properties: IReactProperty list) =
            let TextBulletedAttach = importDefault "@spectrum-icons/workflow/TextBulletedAttach"
            Interop.reactApi.createElement (TextBulletedAttach, createObj !!properties)

        static member inline OpenRecentOutline (properties: IReactProperty list) =
            let OpenRecentOutline = importDefault "@spectrum-icons/workflow/OpenRecentOutline"
            Interop.reactApi.createElement (OpenRecentOutline, createObj !!properties)

        static member inline Paste (properties: IReactProperty list) =
            let Paste = importDefault "@spectrum-icons/workflow/Paste"
            Interop.reactApi.createElement (Paste, createObj !!properties)

        static member inline BookmarkSingleOutline (properties: IReactProperty list) =
            let BookmarkSingleOutline = importDefault "@spectrum-icons/workflow/BookmarkSingleOutline"
            Interop.reactApi.createElement (BookmarkSingleOutline, createObj !!properties)

        static member inline Info (properties: IReactProperty list) =
            let Info = importDefault "@spectrum-icons/workflow/Info"
            Interop.reactApi.createElement (Info, createObj !!properties)

        static member inline MoveLeftRight (properties: IReactProperty list) =
            let MoveLeftRight = importDefault "@spectrum-icons/workflow/MoveLeftRight"
            Interop.reactApi.createElement (MoveLeftRight, createObj !!properties)

        static member inline TrimPath (properties: IReactProperty list) =
            let TrimPath = importDefault "@spectrum-icons/workflow/TrimPath"
            Interop.reactApi.createElement (TrimPath, createObj !!properties)

        static member inline Reply (properties: IReactProperty list) =
            let Reply = importDefault "@spectrum-icons/workflow/Reply"
            Interop.reactApi.createElement (Reply, createObj !!properties)

        static member inline GraphTrendAdd (properties: IReactProperty list) =
            let GraphTrendAdd = importDefault "@spectrum-icons/workflow/GraphTrendAdd"
            Interop.reactApi.createElement (GraphTrendAdd, createObj !!properties)

        static member inline Dropdown (properties: IReactProperty list) =
            let Dropdown = importDefault "@spectrum-icons/workflow/Dropdown"
            Interop.reactApi.createElement (Dropdown, createObj !!properties)

        static member inline SortOrderUp (properties: IReactProperty list) =
            let SortOrderUp = importDefault "@spectrum-icons/workflow/SortOrderUp"
            Interop.reactApi.createElement (SortOrderUp, createObj !!properties)

        static member inline FileAdd (properties: IReactProperty list) =
            let FileAdd = importDefault "@spectrum-icons/workflow/FileAdd"
            Interop.reactApi.createElement (FileAdd, createObj !!properties)

        static member inline VolumeMute (properties: IReactProperty list) =
            let VolumeMute = importDefault "@spectrum-icons/workflow/VolumeMute"
            Interop.reactApi.createElement (VolumeMute, createObj !!properties)

        static member inline DeviceLaptop (properties: IReactProperty list) =
            let DeviceLaptop = importDefault "@spectrum-icons/workflow/DeviceLaptop"
            Interop.reactApi.createElement (DeviceLaptop, createObj !!properties)

        static member inline DataMapping (properties: IReactProperty list) =
            let DataMapping = importDefault "@spectrum-icons/workflow/DataMapping"
            Interop.reactApi.createElement (DataMapping, createObj !!properties)

        static member inline PublishPending (properties: IReactProperty list) =
            let PublishPending = importDefault "@spectrum-icons/workflow/PublishPending"
            Interop.reactApi.createElement (PublishPending, createObj !!properties)

        static member inline EmailLightning (properties: IReactProperty list) =
            let EmailLightning = importDefault "@spectrum-icons/workflow/EmailLightning"
            Interop.reactApi.createElement (EmailLightning, createObj !!properties)

        static member inline FileData (properties: IReactProperty list) =
            let FileData = importDefault "@spectrum-icons/workflow/FileData"
            Interop.reactApi.createElement (FileData, createObj !!properties)

        static member inline EmailCheck (properties: IReactProperty list) =
            let EmailCheck = importDefault "@spectrum-icons/workflow/EmailCheck"
            Interop.reactApi.createElement (EmailCheck, createObj !!properties)

        static member inline Hand (properties: IReactProperty list) =
            let Hand = importDefault "@spectrum-icons/workflow/Hand"
            Interop.reactApi.createElement (Hand, createObj !!properties)

        static member inline SelectAdd (properties: IReactProperty list) =
            let SelectAdd = importDefault "@spectrum-icons/workflow/SelectAdd"
            Interop.reactApi.createElement (SelectAdd, createObj !!properties)

        static member inline GlobeExit (properties: IReactProperty list) =
            let GlobeExit = importDefault "@spectrum-icons/workflow/GlobeExit"
            Interop.reactApi.createElement (GlobeExit, createObj !!properties)

        static member inline GraphStream (properties: IReactProperty list) =
            let GraphStream = importDefault "@spectrum-icons/workflow/GraphStream"
            Interop.reactApi.createElement (GraphStream, createObj !!properties)

        static member inline FilterDelete (properties: IReactProperty list) =
            let FilterDelete = importDefault "@spectrum-icons/workflow/FilterDelete"
            Interop.reactApi.createElement (FilterDelete, createObj !!properties)

        static member inline SMSKey (properties: IReactProperty list) =
            let SMSKey = importDefault "@spectrum-icons/workflow/SMSKey"
            Interop.reactApi.createElement (SMSKey, createObj !!properties)

        static member inline Layers (properties: IReactProperty list) =
            let Layers = importDefault "@spectrum-icons/workflow/Layers"
            Interop.reactApi.createElement (Layers, createObj !!properties)

        static member inline NoteAdd (properties: IReactProperty list) =
            let NoteAdd = importDefault "@spectrum-icons/workflow/NoteAdd"
            Interop.reactApi.createElement (NoteAdd, createObj !!properties)

        static member inline DataEdit (properties: IReactProperty list) =
            let DataEdit = importDefault "@spectrum-icons/workflow/DataEdit"
            Interop.reactApi.createElement (DataEdit, createObj !!properties)

        static member inline FileCheckedOut (properties: IReactProperty list) =
            let FileCheckedOut = importDefault "@spectrum-icons/workflow/FileCheckedOut"
            Interop.reactApi.createElement (FileCheckedOut, createObj !!properties)

        static member inline CloseCircle (properties: IReactProperty list) =
            let CloseCircle = importDefault "@spectrum-icons/workflow/CloseCircle"
            Interop.reactApi.createElement (CloseCircle, createObj !!properties)

        static member inline PaddingTop (properties: IReactProperty list) =
            let PaddingTop = importDefault "@spectrum-icons/workflow/PaddingTop"
            Interop.reactApi.createElement (PaddingTop, createObj !!properties)

        static member inline FlashAuto (properties: IReactProperty list) =
            let FlashAuto = importDefault "@spectrum-icons/workflow/FlashAuto"
            Interop.reactApi.createElement (FlashAuto, createObj !!properties)

        static member inline DistributeHorizontally (properties: IReactProperty list) =
            let DistributeHorizontally = importDefault "@spectrum-icons/workflow/DistributeHorizontally"
            Interop.reactApi.createElement (DistributeHorizontally, createObj !!properties)

        static member inline TableColumnAddRight (properties: IReactProperty list) =
            let TableColumnAddRight = importDefault "@spectrum-icons/workflow/TableColumnAddRight"
            Interop.reactApi.createElement (TableColumnAddRight, createObj !!properties)

        static member inline FileWord (properties: IReactProperty list) =
            let FileWord = importDefault "@spectrum-icons/workflow/FileWord"
            Interop.reactApi.createElement (FileWord, createObj !!properties)

        static member inline Login (properties: IReactProperty list) =
            let Login = importDefault "@spectrum-icons/workflow/Login"
            Interop.reactApi.createElement (Login, createObj !!properties)

        static member inline VolumeTwo (properties: IReactProperty list) =
            let VolumeTwo = importDefault "@spectrum-icons/workflow/VolumeTwo"
            Interop.reactApi.createElement (VolumeTwo, createObj !!properties)

        static member inline CalendarUnlocked (properties: IReactProperty list) =
            let CalendarUnlocked = importDefault "@spectrum-icons/workflow/CalendarUnlocked"
            Interop.reactApi.createElement (CalendarUnlocked, createObj !!properties)

        static member inline DistributeSpaceHoriz (properties: IReactProperty list) =
            let DistributeSpaceHoriz = importDefault "@spectrum-icons/workflow/DistributeSpaceHoriz"
            Interop.reactApi.createElement (DistributeSpaceHoriz, createObj !!properties)

        static member inline AddTo (properties: IReactProperty list) =
            let AddTo = importDefault "@spectrum-icons/workflow/AddTo"
            Interop.reactApi.createElement (AddTo, createObj !!properties)

        static member inline Pan (properties: IReactProperty list) =
            let Pan = importDefault "@spectrum-icons/workflow/Pan"
            Interop.reactApi.createElement (Pan, createObj !!properties)

        static member inline RealTimeCustomerProfile (properties: IReactProperty list) =
            let RealTimeCustomerProfile = importDefault "@spectrum-icons/workflow/RealTimeCustomerProfile"
            Interop.reactApi.createElement (RealTimeCustomerProfile, createObj !!properties)

        static member inline PolygonSelect (properties: IReactProperty list) =
            let PolygonSelect = importDefault "@spectrum-icons/workflow/PolygonSelect"
            Interop.reactApi.createElement (PolygonSelect, createObj !!properties)

        static member inline DistributeHorizontalCenter (properties: IReactProperty list) =
            let DistributeHorizontalCenter = importDefault "@spectrum-icons/workflow/DistributeHorizontalCenter"
            Interop.reactApi.createElement (DistributeHorizontalCenter, createObj !!properties)

        static member inline RailRightOpen (properties: IReactProperty list) =
            let RailRightOpen = importDefault "@spectrum-icons/workflow/RailRightOpen"
            Interop.reactApi.createElement (RailRightOpen, createObj !!properties)

        static member inline JourneyVoyager (properties: IReactProperty list) =
            let JourneyVoyager = importDefault "@spectrum-icons/workflow/JourneyVoyager"
            Interop.reactApi.createElement (JourneyVoyager, createObj !!properties)

        static member inline Stage (properties: IReactProperty list) =
            let Stage = importDefault "@spectrum-icons/workflow/Stage"
            Interop.reactApi.createElement (Stage, createObj !!properties)

        static member inline LayersSendToBack (properties: IReactProperty list) =
            let LayersSendToBack = importDefault "@spectrum-icons/workflow/LayersSendToBack"
            Interop.reactApi.createElement (LayersSendToBack, createObj !!properties)

        static member inline DataCheck (properties: IReactProperty list) =
            let DataCheck = importDefault "@spectrum-icons/workflow/DataCheck"
            Interop.reactApi.createElement (DataCheck, createObj !!properties)

        static member inline NoEdit (properties: IReactProperty list) =
            let NoEdit = importDefault "@spectrum-icons/workflow/NoEdit"
            Interop.reactApi.createElement (NoEdit, createObj !!properties)

        static member inline ArrowLeft (properties: IReactProperty list) =
            let ArrowLeft = importDefault "@spectrum-icons/workflow/ArrowLeft"
            Interop.reactApi.createElement (ArrowLeft, createObj !!properties)

        static member inline Select (properties: IReactProperty list) =
            let Select = importDefault "@spectrum-icons/workflow/Select"
            Interop.reactApi.createElement (Select, createObj !!properties)

        static member inline BoxAdd (properties: IReactProperty list) =
            let BoxAdd = importDefault "@spectrum-icons/workflow/BoxAdd"
            Interop.reactApi.createElement (BoxAdd, createObj !!properties)

        static member inline Vignette (properties: IReactProperty list) =
            let Vignette = importDefault "@spectrum-icons/workflow/Vignette"
            Interop.reactApi.createElement (Vignette, createObj !!properties)

        static member inline ProjectAdd (properties: IReactProperty list) =
            let ProjectAdd = importDefault "@spectrum-icons/workflow/ProjectAdd"
            Interop.reactApi.createElement (ProjectAdd, createObj !!properties)

        static member inline Asterisk (properties: IReactProperty list) =
            let Asterisk = importDefault "@spectrum-icons/workflow/Asterisk"
            Interop.reactApi.createElement (Asterisk, createObj !!properties)

        static member inline Audio (properties: IReactProperty list) =
            let Audio = importDefault "@spectrum-icons/workflow/Audio"
            Interop.reactApi.createElement (Audio, createObj !!properties)

        static member inline Artboard (properties: IReactProperty list) =
            let Artboard = importDefault "@spectrum-icons/workflow/Artboard"
            Interop.reactApi.createElement (Artboard, createObj !!properties)

        static member inline ImageMapRectangle (properties: IReactProperty list) =
            let ImageMapRectangle = importDefault "@spectrum-icons/workflow/ImageMapRectangle"
            Interop.reactApi.createElement (ImageMapRectangle, createObj !!properties)

        static member inline Table (properties: IReactProperty list) =
            let Table = importDefault "@spectrum-icons/workflow/Table"
            Interop.reactApi.createElement (Table, createObj !!properties)

        static member inline Ship (properties: IReactProperty list) =
            let Ship = importDefault "@spectrum-icons/workflow/Ship"
            Interop.reactApi.createElement (Ship, createObj !!properties)

        static member inline Watch (properties: IReactProperty list) =
            let Watch = importDefault "@spectrum-icons/workflow/Watch"
            Interop.reactApi.createElement (Watch, createObj !!properties)

        static member inline DevicePhoneRefresh (properties: IReactProperty list) =
            let DevicePhoneRefresh = importDefault "@spectrum-icons/workflow/DevicePhoneRefresh"
            Interop.reactApi.createElement (DevicePhoneRefresh, createObj !!properties)

        static member inline Gauge2 (properties: IReactProperty list) =
            let Gauge2 = importDefault "@spectrum-icons/workflow/Gauge2"
            Interop.reactApi.createElement (Gauge2, createObj !!properties)

        static member inline ViewedMarkAs (properties: IReactProperty list) =
            let ViewedMarkAs = importDefault "@spectrum-icons/workflow/ViewedMarkAs"
            Interop.reactApi.createElement (ViewedMarkAs, createObj !!properties)

        static member inline Workflow (properties: IReactProperty list) =
            let Workflow = importDefault "@spectrum-icons/workflow/Workflow"
            Interop.reactApi.createElement (Workflow, createObj !!properties)

        static member inline PaddingRight (properties: IReactProperty list) =
            let PaddingRight = importDefault "@spectrum-icons/workflow/PaddingRight"
            Interop.reactApi.createElement (PaddingRight, createObj !!properties)

        static member inline Erase (properties: IReactProperty list) =
            let Erase = importDefault "@spectrum-icons/workflow/Erase"
            Interop.reactApi.createElement (Erase, createObj !!properties)

        static member inline HotFixes (properties: IReactProperty list) =
            let HotFixes = importDefault "@spectrum-icons/workflow/HotFixes"
            Interop.reactApi.createElement (HotFixes, createObj !!properties)

        static member inline CalendarLocked (properties: IReactProperty list) =
            let CalendarLocked = importDefault "@spectrum-icons/workflow/CalendarLocked"
            Interop.reactApi.createElement (CalendarLocked, createObj !!properties)

        static member inline AlertCircleFilled (properties: IReactProperty list) =
            let AlertCircleFilled = importDefault "@spectrum-icons/workflow/AlertCircleFilled"
            Interop.reactApi.createElement (AlertCircleFilled, createObj !!properties)

        static member inline TagUnderline (properties: IReactProperty list) =
            let TagUnderline = importDefault "@spectrum-icons/workflow/TagUnderline"
            Interop.reactApi.createElement (TagUnderline, createObj !!properties)

        static member inline DeviceRotatePortrait (properties: IReactProperty list) =
            let DeviceRotatePortrait = importDefault "@spectrum-icons/workflow/DeviceRotatePortrait"
            Interop.reactApi.createElement (DeviceRotatePortrait, createObj !!properties)

        static member inline FileJson (properties: IReactProperty list) =
            let FileJson = importDefault "@spectrum-icons/workflow/FileJson"
            Interop.reactApi.createElement (FileJson, createObj !!properties)

        static member inline Selection (properties: IReactProperty list) =
            let Selection = importDefault "@spectrum-icons/workflow/Selection"
            Interop.reactApi.createElement (Selection, createObj !!properties)

        static member inline Ellipse (properties: IReactProperty list) =
            let Ellipse = importDefault "@spectrum-icons/workflow/Ellipse"
            Interop.reactApi.createElement (Ellipse, createObj !!properties)

        static member inline TextRomanUppercase (properties: IReactProperty list) =
            let TextRomanUppercase = importDefault "@spectrum-icons/workflow/TextRomanUppercase"
            Interop.reactApi.createElement (TextRomanUppercase, createObj !!properties)

        static member inline FeedManagement (properties: IReactProperty list) =
            let FeedManagement = importDefault "@spectrum-icons/workflow/FeedManagement"
            Interop.reactApi.createElement (FeedManagement, createObj !!properties)

        static member inline Homepage (properties: IReactProperty list) =
            let Homepage = importDefault "@spectrum-icons/workflow/Homepage"
            Interop.reactApi.createElement (Homepage, createObj !!properties)

        static member inline ConfidenceThree (properties: IReactProperty list) =
            let ConfidenceThree = importDefault "@spectrum-icons/workflow/ConfidenceThree"
            Interop.reactApi.createElement (ConfidenceThree, createObj !!properties)

        static member inline StrokeWidth (properties: IReactProperty list) =
            let StrokeWidth = importDefault "@spectrum-icons/workflow/StrokeWidth"
            Interop.reactApi.createElement (StrokeWidth, createObj !!properties)

        static member inline VideoOutline (properties: IReactProperty list) =
            let VideoOutline = importDefault "@spectrum-icons/workflow/VideoOutline"
            Interop.reactApi.createElement (VideoOutline, createObj !!properties)

        static member inline ZoomOut (properties: IReactProperty list) =
            let ZoomOut = importDefault "@spectrum-icons/workflow/ZoomOut"
            Interop.reactApi.createElement (ZoomOut, createObj !!properties)

        static member inline ShareAndroid (properties: IReactProperty list) =
            let ShareAndroid = importDefault "@spectrum-icons/workflow/ShareAndroid"
            Interop.reactApi.createElement (ShareAndroid, createObj !!properties)

        static member inline MobileServices (properties: IReactProperty list) =
            let MobileServices = importDefault "@spectrum-icons/workflow/MobileServices"
            Interop.reactApi.createElement (MobileServices, createObj !!properties)

        static member inline ForPlacementOnly (properties: IReactProperty list) =
            let ForPlacementOnly = importDefault "@spectrum-icons/workflow/ForPlacementOnly"
            Interop.reactApi.createElement (ForPlacementOnly, createObj !!properties)

        static member inline Relevance (properties: IReactProperty list) =
            let Relevance = importDefault "@spectrum-icons/workflow/Relevance"
            Interop.reactApi.createElement (Relevance, createObj !!properties)

        static member inline LinkGlobe (properties: IReactProperty list) =
            let LinkGlobe = importDefault "@spectrum-icons/workflow/LinkGlobe"
            Interop.reactApi.createElement (LinkGlobe, createObj !!properties)

        static member inline TableColumnRemoveCenter (properties: IReactProperty list) =
            let TableColumnRemoveCenter = importDefault "@spectrum-icons/workflow/TableColumnRemoveCenter"
            Interop.reactApi.createElement (TableColumnRemoveCenter, createObj !!properties)

        static member inline GraphBarVerticalStacked (properties: IReactProperty list) =
            let GraphBarVerticalStacked = importDefault "@spectrum-icons/workflow/GraphBarVerticalStacked"
            Interop.reactApi.createElement (GraphBarVerticalStacked, createObj !!properties)

        static member inline Keyboard (properties: IReactProperty list) =
            let Keyboard = importDefault "@spectrum-icons/workflow/Keyboard"
            Interop.reactApi.createElement (Keyboard, createObj !!properties)

        static member inline FilterStar (properties: IReactProperty list) =
            let FilterStar = importDefault "@spectrum-icons/workflow/FilterStar"
            Interop.reactApi.createElement (FilterStar, createObj !!properties)

        static member inline ArrowUpRight (properties: IReactProperty list) =
            let ArrowUpRight = importDefault "@spectrum-icons/workflow/ArrowUpRight"
            Interop.reactApi.createElement (ArrowUpRight, createObj !!properties)

        static member inline Alert (properties: IReactProperty list) =
            let Alert = importDefault "@spectrum-icons/workflow/Alert"
            Interop.reactApi.createElement (Alert, createObj !!properties)

        static member inline TextLetteredUpperCase (properties: IReactProperty list) =
            let TextLetteredUpperCase = importDefault "@spectrum-icons/workflow/TextLetteredUpperCase"
            Interop.reactApi.createElement (TextLetteredUpperCase, createObj !!properties)

        static member inline ABC (properties: IReactProperty list) =
            let ABC = importDefault "@spectrum-icons/workflow/ABC"
            Interop.reactApi.createElement (ABC, createObj !!properties)

        static member inline Article (properties: IReactProperty list) =
            let Article = importDefault "@spectrum-icons/workflow/Article"
            Interop.reactApi.createElement (Article, createObj !!properties)

        static member inline PageBreak (properties: IReactProperty list) =
            let PageBreak = importDefault "@spectrum-icons/workflow/PageBreak"
            Interop.reactApi.createElement (PageBreak, createObj !!properties)

        static member inline Segmentation (properties: IReactProperty list) =
            let Segmentation = importDefault "@spectrum-icons/workflow/Segmentation"
            Interop.reactApi.createElement (Segmentation, createObj !!properties)

        static member inline FolderGear (properties: IReactProperty list) =
            let FolderGear = importDefault "@spectrum-icons/workflow/FolderGear"
            Interop.reactApi.createElement (FolderGear, createObj !!properties)

        static member inline AlignMiddle (properties: IReactProperty list) =
            let AlignMiddle = importDefault "@spectrum-icons/workflow/AlignMiddle"
            Interop.reactApi.createElement (AlignMiddle, createObj !!properties)

        static member inline GraphStreamRanked (properties: IReactProperty list) =
            let GraphStreamRanked = importDefault "@spectrum-icons/workflow/GraphStreamRanked"
            Interop.reactApi.createElement (GraphStreamRanked, createObj !!properties)

        static member inline History (properties: IReactProperty list) =
            let History = importDefault "@spectrum-icons/workflow/History"
            Interop.reactApi.createElement (History, createObj !!properties)

        static member inline EmailGearOutline (properties: IReactProperty list) =
            let EmailGearOutline = importDefault "@spectrum-icons/workflow/EmailGearOutline"
            Interop.reactApi.createElement (EmailGearOutline, createObj !!properties)

        static member inline Project (properties: IReactProperty list) =
            let Project = importDefault "@spectrum-icons/workflow/Project"
            Interop.reactApi.createElement (Project, createObj !!properties)

        static member inline ViewDay (properties: IReactProperty list) =
            let ViewDay = importDefault "@spectrum-icons/workflow/ViewDay"
            Interop.reactApi.createElement (ViewDay, createObj !!properties)

        static member inline Snapshot (properties: IReactProperty list) =
            let Snapshot = importDefault "@spectrum-icons/workflow/Snapshot"
            Interop.reactApi.createElement (Snapshot, createObj !!properties)

        static member inline Data (properties: IReactProperty list) =
            let Data = importDefault "@spectrum-icons/workflow/Data"
            Interop.reactApi.createElement (Data, createObj !!properties)

        static member inline GraphHistogram (properties: IReactProperty list) =
            let GraphHistogram = importDefault "@spectrum-icons/workflow/GraphHistogram"
            Interop.reactApi.createElement (GraphHistogram, createObj !!properties)

        static member inline Function (properties: IReactProperty list) =
            let Function = importDefault "@spectrum-icons/workflow/Function"
            Interop.reactApi.createElement (Function, createObj !!properties)

        static member inline Contrast (properties: IReactProperty list) =
            let Contrast = importDefault "@spectrum-icons/workflow/Contrast"
            Interop.reactApi.createElement (Contrast, createObj !!properties)

        static member inline RailRight (properties: IReactProperty list) =
            let RailRight = importDefault "@spectrum-icons/workflow/RailRight"
            Interop.reactApi.createElement (RailRight, createObj !!properties)

        static member inline ColumnSettings (properties: IReactProperty list) =
            let ColumnSettings = importDefault "@spectrum-icons/workflow/ColumnSettings"
            Interop.reactApi.createElement (ColumnSettings, createObj !!properties)

        static member inline FilterEdit (properties: IReactProperty list) =
            let FilterEdit = importDefault "@spectrum-icons/workflow/FilterEdit"
            Interop.reactApi.createElement (FilterEdit, createObj !!properties)

        static member inline EmailExcludeOutline (properties: IReactProperty list) =
            let EmailExcludeOutline = importDefault "@spectrum-icons/workflow/EmailExcludeOutline"
            Interop.reactApi.createElement (EmailExcludeOutline, createObj !!properties)

        static member inline RewindCircle (properties: IReactProperty list) =
            let RewindCircle = importDefault "@spectrum-icons/workflow/RewindCircle"
            Interop.reactApi.createElement (RewindCircle, createObj !!properties)

        static member inline TextStyle (properties: IReactProperty list) =
            let TextStyle = importDefault "@spectrum-icons/workflow/TextStyle"
            Interop.reactApi.createElement (TextStyle, createObj !!properties)

        static member inline Gauge3 (properties: IReactProperty list) =
            let Gauge3 = importDefault "@spectrum-icons/workflow/Gauge3"
            Interop.reactApi.createElement (Gauge3, createObj !!properties)

        static member inline Engagement (properties: IReactProperty list) =
            let Engagement = importDefault "@spectrum-icons/workflow/Engagement"
            Interop.reactApi.createElement (Engagement, createObj !!properties)

        static member inline EditIn (properties: IReactProperty list) =
            let EditIn = importDefault "@spectrum-icons/workflow/EditIn"
            Interop.reactApi.createElement (EditIn, createObj !!properties)

        static member inline VolumeThree (properties: IReactProperty list) =
            let VolumeThree = importDefault "@spectrum-icons/workflow/VolumeThree"
            Interop.reactApi.createElement (VolumeThree, createObj !!properties)

        static member inline TextBulletedHierarchyExclude (properties: IReactProperty list) =
            let TextBulletedHierarchyExclude = importDefault "@spectrum-icons/workflow/TextBulletedHierarchyExclude"
            Interop.reactApi.createElement (TextBulletedHierarchyExclude, createObj !!properties)

        static member inline EmailCancel (properties: IReactProperty list) =
            let EmailCancel = importDefault "@spectrum-icons/workflow/EmailCancel"
            Interop.reactApi.createElement (EmailCancel, createObj !!properties)

        static member inline TextItalic (properties: IReactProperty list) =
            let TextItalic = importDefault "@spectrum-icons/workflow/TextItalic"
            Interop.reactApi.createElement (TextItalic, createObj !!properties)

        static member inline UserLock (properties: IReactProperty list) =
            let UserLock = importDefault "@spectrum-icons/workflow/UserLock"
            Interop.reactApi.createElement (UserLock, createObj !!properties)

        static member inline FilterAdd (properties: IReactProperty list) =
            let FilterAdd = importDefault "@spectrum-icons/workflow/FilterAdd"
            Interop.reactApi.createElement (FilterAdd, createObj !!properties)

        static member inline CropLightning (properties: IReactProperty list) =
            let CropLightning = importDefault "@spectrum-icons/workflow/CropLightning"
            Interop.reactApi.createElement (CropLightning, createObj !!properties)

        static member inline DataCorrelated (properties: IReactProperty list) =
            let DataCorrelated = importDefault "@spectrum-icons/workflow/DataCorrelated"
            Interop.reactApi.createElement (DataCorrelated, createObj !!properties)

        static member inline TableColumnMerge (properties: IReactProperty list) =
            let TableColumnMerge = importDefault "@spectrum-icons/workflow/TableColumnMerge"
            Interop.reactApi.createElement (TableColumnMerge, createObj !!properties)

        static member inline Transparency (properties: IReactProperty list) =
            let Transparency = importDefault "@spectrum-icons/workflow/Transparency"
            Interop.reactApi.createElement (Transparency, createObj !!properties)

        static member inline TreeExpandAll (properties: IReactProperty list) =
            let TreeExpandAll = importDefault "@spectrum-icons/workflow/TreeExpandAll"
            Interop.reactApi.createElement (TreeExpandAll, createObj !!properties)

        static member inline Briefcase (properties: IReactProperty list) =
            let Briefcase = importDefault "@spectrum-icons/workflow/Briefcase"
            Interop.reactApi.createElement (Briefcase, createObj !!properties)

        static member inline ConfidenceOne (properties: IReactProperty list) =
            let ConfidenceOne = importDefault "@spectrum-icons/workflow/ConfidenceOne"
            Interop.reactApi.createElement (ConfidenceOne, createObj !!properties)

        static member inline PasteText (properties: IReactProperty list) =
            let PasteText = importDefault "@spectrum-icons/workflow/PasteText"
            Interop.reactApi.createElement (PasteText, createObj !!properties)

        static member inline TextBaselineShift (properties: IReactProperty list) =
            let TextBaselineShift = importDefault "@spectrum-icons/workflow/TextBaselineShift"
            Interop.reactApi.createElement (TextBaselineShift, createObj !!properties)

        static member inline Draft (properties: IReactProperty list) =
            let Draft = importDefault "@spectrum-icons/workflow/Draft"
            Interop.reactApi.createElement (Draft, createObj !!properties)

        static member inline AlignRight (properties: IReactProperty list) =
            let AlignRight = importDefault "@spectrum-icons/workflow/AlignRight"
            Interop.reactApi.createElement (AlignRight, createObj !!properties)

        static member inline DistributeVertically (properties: IReactProperty list) =
            let DistributeVertically = importDefault "@spectrum-icons/workflow/DistributeVertically"
            Interop.reactApi.createElement (DistributeVertically, createObj !!properties)

        static member inline Draw (properties: IReactProperty list) =
            let Draw = importDefault "@spectrum-icons/workflow/Draw"
            Interop.reactApi.createElement (Draw, createObj !!properties)

        static member inline ClassicGridView (properties: IReactProperty list) =
            let ClassicGridView = importDefault "@spectrum-icons/workflow/ClassicGridView"
            Interop.reactApi.createElement (ClassicGridView, createObj !!properties)

        static member inline PrintPreview (properties: IReactProperty list) =
            let PrintPreview = importDefault "@spectrum-icons/workflow/PrintPreview"
            Interop.reactApi.createElement (PrintPreview, createObj !!properties)

        static member inline Image (properties: IReactProperty list) =
            let Image = importDefault "@spectrum-icons/workflow/Image"
            Interop.reactApi.createElement (Image, createObj !!properties)

        static member inline Compare (properties: IReactProperty list) =
            let Compare = importDefault "@spectrum-icons/workflow/Compare"
            Interop.reactApi.createElement (Compare, createObj !!properties)

        static member inline PropertiesCopy (properties: IReactProperty list) =
            let PropertiesCopy = importDefault "@spectrum-icons/workflow/PropertiesCopy"
            Interop.reactApi.createElement (PropertiesCopy, createObj !!properties)

        static member inline SelectionChecked (properties: IReactProperty list) =
            let SelectionChecked = importDefault "@spectrum-icons/workflow/SelectionChecked"
            Interop.reactApi.createElement (SelectionChecked, createObj !!properties)

        static member inline GraphBarHorizontalStacked (properties: IReactProperty list) =
            let GraphBarHorizontalStacked = importDefault "@spectrum-icons/workflow/GraphBarHorizontalStacked"
            Interop.reactApi.createElement (GraphBarHorizontalStacked, createObj !!properties)

        static member inline CreditCard (properties: IReactProperty list) =
            let CreditCard = importDefault "@spectrum-icons/workflow/CreditCard"
            Interop.reactApi.createElement (CreditCard, createObj !!properties)

        static member inline AppleFiles (properties: IReactProperty list) =
            let AppleFiles = importDefault "@spectrum-icons/workflow/AppleFiles"
            Interop.reactApi.createElement (AppleFiles, createObj !!properties)

        static member inline CloseCaptions (properties: IReactProperty list) =
            let CloseCaptions = importDefault "@spectrum-icons/workflow/CloseCaptions"
            Interop.reactApi.createElement (CloseCaptions, createObj !!properties)

        static member inline News (properties: IReactProperty list) =
            let News = importDefault "@spectrum-icons/workflow/News"
            Interop.reactApi.createElement (News, createObj !!properties)

        static member inline Border (properties: IReactProperty list) =
            let Border = importDefault "@spectrum-icons/workflow/Border"
            Interop.reactApi.createElement (Border, createObj !!properties)

        static member inline Report (properties: IReactProperty list) =
            let Report = importDefault "@spectrum-icons/workflow/Report"
            Interop.reactApi.createElement (Report, createObj !!properties)

        static member inline PushNotification (properties: IReactProperty list) =
            let PushNotification = importDefault "@spectrum-icons/workflow/PushNotification"
            Interop.reactApi.createElement (PushNotification, createObj !!properties)

        static member inline Amusementpark (properties: IReactProperty list) =
            let Amusementpark = importDefault "@spectrum-icons/workflow/Amusementpark"
            Interop.reactApi.createElement (Amusementpark, createObj !!properties)

        static member inline Devices (properties: IReactProperty list) =
            let Devices = importDefault "@spectrum-icons/workflow/Devices"
            Interop.reactApi.createElement (Devices, createObj !!properties)

        static member inline Date (properties: IReactProperty list) =
            let Date = importDefault "@spectrum-icons/workflow/Date"
            Interop.reactApi.createElement (Date, createObj !!properties)

        static member inline TableRowMerge (properties: IReactProperty list) =
            let TableRowMerge = importDefault "@spectrum-icons/workflow/TableRowMerge"
            Interop.reactApi.createElement (TableRowMerge, createObj !!properties)

        static member inline UserArrow (properties: IReactProperty list) =
            let UserArrow = importDefault "@spectrum-icons/workflow/UserArrow"
            Interop.reactApi.createElement (UserArrow, createObj !!properties)

        static member inline RailLeft (properties: IReactProperty list) =
            let RailLeft = importDefault "@spectrum-icons/workflow/RailLeft"
            Interop.reactApi.createElement (RailLeft, createObj !!properties)

        static member inline Landscape (properties: IReactProperty list) =
            let Landscape = importDefault "@spectrum-icons/workflow/Landscape"
            Interop.reactApi.createElement (Landscape, createObj !!properties)

        static member inline RotateLeft (properties: IReactProperty list) =
            let RotateLeft = importDefault "@spectrum-icons/workflow/RotateLeft"
            Interop.reactApi.createElement (RotateLeft, createObj !!properties)

        static member inline SelectBox (properties: IReactProperty list) =
            let SelectBox = importDefault "@spectrum-icons/workflow/SelectBox"
            Interop.reactApi.createElement (SelectBox, createObj !!properties)

        static member inline Pivot (properties: IReactProperty list) =
            let Pivot = importDefault "@spectrum-icons/workflow/Pivot"
            Interop.reactApi.createElement (Pivot, createObj !!properties)

        static member inline GraphTree (properties: IReactProperty list) =
            let GraphTree = importDefault "@spectrum-icons/workflow/GraphTree"
            Interop.reactApi.createElement (GraphTree, createObj !!properties)

        static member inline SQLQuery (properties: IReactProperty list) =
            let SQLQuery = importDefault "@spectrum-icons/workflow/SQLQuery"
            Interop.reactApi.createElement (SQLQuery, createObj !!properties)

        static member inline MoreSmallList (properties: IReactProperty list) =
            let MoreSmallList = importDefault "@spectrum-icons/workflow/MoreSmallList"
            Interop.reactApi.createElement (MoreSmallList, createObj !!properties)

        static member inline AlertCircle (properties: IReactProperty list) =
            let AlertCircle = importDefault "@spectrum-icons/workflow/AlertCircle"
            Interop.reactApi.createElement (AlertCircle, createObj !!properties)

        static member inline SpotHeal (properties: IReactProperty list) =
            let SpotHeal = importDefault "@spectrum-icons/workflow/SpotHeal"
            Interop.reactApi.createElement (SpotHeal, createObj !!properties)

        static member inline MultipleCheck (properties: IReactProperty list) =
            let MultipleCheck = importDefault "@spectrum-icons/workflow/MultipleCheck"
            Interop.reactApi.createElement (MultipleCheck, createObj !!properties)

        static member inline Note (properties: IReactProperty list) =
            let Note = importDefault "@spectrum-icons/workflow/Note"
            Interop.reactApi.createElement (Note, createObj !!properties)

        static member inline Shop (properties: IReactProperty list) =
            let Shop = importDefault "@spectrum-icons/workflow/Shop"
            Interop.reactApi.createElement (Shop, createObj !!properties)

        static member inline MarginBottom (properties: IReactProperty list) =
            let MarginBottom = importDefault "@spectrum-icons/workflow/MarginBottom"
            Interop.reactApi.createElement (MarginBottom, createObj !!properties)

        static member inline LoupeView (properties: IReactProperty list) =
            let LoupeView = importDefault "@spectrum-icons/workflow/LoupeView"
            Interop.reactApi.createElement (LoupeView, createObj !!properties)

        static member inline ArrowUp (properties: IReactProperty list) =
            let ArrowUp = importDefault "@spectrum-icons/workflow/ArrowUp"
            Interop.reactApi.createElement (ArrowUp, createObj !!properties)

        static member inline GraphDonutAdd (properties: IReactProperty list) =
            let GraphDonutAdd = importDefault "@spectrum-icons/workflow/GraphDonutAdd"
            Interop.reactApi.createElement (GraphDonutAdd, createObj !!properties)

        static member inline FullScreenExit (properties: IReactProperty list) =
            let FullScreenExit = importDefault "@spectrum-icons/workflow/FullScreenExit"
            Interop.reactApi.createElement (FullScreenExit, createObj !!properties)

        static member inline SMS (properties: IReactProperty list) =
            let SMS = importDefault "@spectrum-icons/workflow/SMS"
            Interop.reactApi.createElement (SMS, createObj !!properties)

        static member inline VideoCheckedOut (properties: IReactProperty list) =
            let VideoCheckedOut = importDefault "@spectrum-icons/workflow/VideoCheckedOut"
            Interop.reactApi.createElement (VideoCheckedOut, createObj !!properties)

        static member inline LayersBringToFront (properties: IReactProperty list) =
            let LayersBringToFront = importDefault "@spectrum-icons/workflow/LayersBringToFront"
            Interop.reactApi.createElement (LayersBringToFront, createObj !!properties)

        static member inline RailTop (properties: IReactProperty list) =
            let RailTop = importDefault "@spectrum-icons/workflow/RailTop"
            Interop.reactApi.createElement (RailTop, createObj !!properties)

        static member inline FolderAddTo (properties: IReactProperty list) =
            let FolderAddTo = importDefault "@spectrum-icons/workflow/FolderAddTo"
            Interop.reactApi.createElement (FolderAddTo, createObj !!properties)

        static member inline Unmerge (properties: IReactProperty list) =
            let Unmerge = importDefault "@spectrum-icons/workflow/Unmerge"
            Interop.reactApi.createElement (Unmerge, createObj !!properties)

        static member inline AssetsAdded (properties: IReactProperty list) =
            let AssetsAdded = importDefault "@spectrum-icons/workflow/AssetsAdded"
            Interop.reactApi.createElement (AssetsAdded, createObj !!properties)

        static member inline TextColor (properties: IReactProperty list) =
            let TextColor = importDefault "@spectrum-icons/workflow/TextColor"
            Interop.reactApi.createElement (TextColor, createObj !!properties)

        static member inline Filmroll (properties: IReactProperty list) =
            let Filmroll = importDefault "@spectrum-icons/workflow/Filmroll"
            Interop.reactApi.createElement (Filmroll, createObj !!properties)

        static member inline TextLetteredLowerCase (properties: IReactProperty list) =
            let TextLetteredLowerCase = importDefault "@spectrum-icons/workflow/TextLetteredLowerCase"
            Interop.reactApi.createElement (TextLetteredLowerCase, createObj !!properties)

        static member inline TableColumnAddLeft (properties: IReactProperty list) =
            let TableColumnAddLeft = importDefault "@spectrum-icons/workflow/TableColumnAddLeft"
            Interop.reactApi.createElement (TableColumnAddLeft, createObj !!properties)

        static member inline TableEdit (properties: IReactProperty list) =
            let TableEdit = importDefault "@spectrum-icons/workflow/TableEdit"
            Interop.reactApi.createElement (TableEdit, createObj !!properties)

        static member inline TextAlignRight (properties: IReactProperty list) =
            let TextAlignRight = importDefault "@spectrum-icons/workflow/TextAlignRight"
            Interop.reactApi.createElement (TextAlignRight, createObj !!properties)

        static member inline Branch2 (properties: IReactProperty list) =
            let Branch2 = importDefault "@spectrum-icons/workflow/Branch2"
            Interop.reactApi.createElement (Branch2, createObj !!properties)

        static member inline FileXML (properties: IReactProperty list) =
            let FileXML = importDefault "@spectrum-icons/workflow/FileXML"
            Interop.reactApi.createElement (FileXML, createObj !!properties)

        static member inline AssetCheck (properties: IReactProperty list) =
            let AssetCheck = importDefault "@spectrum-icons/workflow/AssetCheck"
            Interop.reactApi.createElement (AssetCheck, createObj !!properties)

        static member inline Scribble (properties: IReactProperty list) =
            let Scribble = importDefault "@spectrum-icons/workflow/Scribble"
            Interop.reactApi.createElement (Scribble, createObj !!properties)

        static member inline SaveToLight (properties: IReactProperty list) =
            let SaveToLight = importDefault "@spectrum-icons/workflow/SaveToLight"
            Interop.reactApi.createElement (SaveToLight, createObj !!properties)

        static member inline Launch (properties: IReactProperty list) =
            let Launch = importDefault "@spectrum-icons/workflow/Launch"
            Interop.reactApi.createElement (Launch, createObj !!properties)

        static member inline SuccessMetric (properties: IReactProperty list) =
            let SuccessMetric = importDefault "@spectrum-icons/workflow/SuccessMetric"
            Interop.reactApi.createElement (SuccessMetric, createObj !!properties)

        static member inline LayersBackward (properties: IReactProperty list) =
            let LayersBackward = importDefault "@spectrum-icons/workflow/LayersBackward"
            Interop.reactApi.createElement (LayersBackward, createObj !!properties)

        static member inline FeedAdd (properties: IReactProperty list) =
            let FeedAdd = importDefault "@spectrum-icons/workflow/FeedAdd"
            Interop.reactApi.createElement (FeedAdd, createObj !!properties)

        static member inline FileTxt (properties: IReactProperty list) =
            let FileTxt = importDefault "@spectrum-icons/workflow/FileTxt"
            Interop.reactApi.createElement (FileTxt, createObj !!properties)

        static member inline GlobeStrikeClock (properties: IReactProperty list) =
            let GlobeStrikeClock = importDefault "@spectrum-icons/workflow/GlobeStrikeClock"
            Interop.reactApi.createElement (GlobeStrikeClock, createObj !!properties)

        static member inline Maximize (properties: IReactProperty list) =
            let Maximize = importDefault "@spectrum-icons/workflow/Maximize"
            Interop.reactApi.createElement (Maximize, createObj !!properties)

        static member inline GraphScatter (properties: IReactProperty list) =
            let GraphScatter = importDefault "@spectrum-icons/workflow/GraphScatter"
            Interop.reactApi.createElement (GraphScatter, createObj !!properties)

        static member inline PublishCheck (properties: IReactProperty list) =
            let PublishCheck = importDefault "@spectrum-icons/workflow/PublishCheck"
            Interop.reactApi.createElement (PublishCheck, createObj !!properties)

        static member inline TextKerning (properties: IReactProperty list) =
            let TextKerning = importDefault "@spectrum-icons/workflow/TextKerning"
            Interop.reactApi.createElement (TextKerning, createObj !!properties)

        static member inline GlobeEnter (properties: IReactProperty list) =
            let GlobeEnter = importDefault "@spectrum-icons/workflow/GlobeEnter"
            Interop.reactApi.createElement (GlobeEnter, createObj !!properties)

        static member inline PaddingLeft (properties: IReactProperty list) =
            let PaddingLeft = importDefault "@spectrum-icons/workflow/PaddingLeft"
            Interop.reactApi.createElement (PaddingLeft, createObj !!properties)

        static member inline AnnotatePen (properties: IReactProperty list) =
            let AnnotatePen = importDefault "@spectrum-icons/workflow/AnnotatePen"
            Interop.reactApi.createElement (AnnotatePen, createObj !!properties)

        static member inline ViewGrid (properties: IReactProperty list) =
            let ViewGrid = importDefault "@spectrum-icons/workflow/ViewGrid"
            Interop.reactApi.createElement (ViewGrid, createObj !!properties)

        static member inline DistributeBottomEdge (properties: IReactProperty list) =
            let DistributeBottomEdge = importDefault "@spectrum-icons/workflow/DistributeBottomEdge"
            Interop.reactApi.createElement (DistributeBottomEdge, createObj !!properties)

        static member inline GraphPie (properties: IReactProperty list) =
            let GraphPie = importDefault "@spectrum-icons/workflow/GraphPie"
            Interop.reactApi.createElement (GraphPie, createObj !!properties)

        static member inline Graphic (properties: IReactProperty list) =
            let Graphic = importDefault "@spectrum-icons/workflow/Graphic"
            Interop.reactApi.createElement (Graphic, createObj !!properties)

        static member inline PauseCircle (properties: IReactProperty list) =
            let PauseCircle = importDefault "@spectrum-icons/workflow/PauseCircle"
            Interop.reactApi.createElement (PauseCircle, createObj !!properties)

        static member inline Condition (properties: IReactProperty list) =
            let Condition = importDefault "@spectrum-icons/workflow/Condition"
            Interop.reactApi.createElement (Condition, createObj !!properties)

        static member inline ConfidenceTwo (properties: IReactProperty list) =
            let ConfidenceTwo = importDefault "@spectrum-icons/workflow/ConfidenceTwo"
            Interop.reactApi.createElement (ConfidenceTwo, createObj !!properties)

        static member inline TextParagraph (properties: IReactProperty list) =
            let TextParagraph = importDefault "@spectrum-icons/workflow/TextParagraph"
            Interop.reactApi.createElement (TextParagraph, createObj !!properties)

        static member inline Back (properties: IReactProperty list) =
            let Back = importDefault "@spectrum-icons/workflow/Back"
            Interop.reactApi.createElement (Back, createObj !!properties)

        static member inline Folder2Color (properties: IReactProperty list) =
            let Folder2Color = importDefault "@spectrum-icons/workflow/Folder2Color"
            Interop.reactApi.createElement (Folder2Color, createObj !!properties)

        static member inline Button (properties: IReactProperty list) =
            let Button = importDefault "@spectrum-icons/workflow/Button"
            Interop.reactApi.createElement (Button, createObj !!properties)

        static member inline TreeCollapse (properties: IReactProperty list) =
            let TreeCollapse = importDefault "@spectrum-icons/workflow/TreeCollapse"
            Interop.reactApi.createElement (TreeCollapse, createObj !!properties)

        static member inline TagItalic (properties: IReactProperty list) =
            let TagItalic = importDefault "@spectrum-icons/workflow/TagItalic"
            Interop.reactApi.createElement (TagItalic, createObj !!properties)

        static member inline NewsAdd (properties: IReactProperty list) =
            let NewsAdd = importDefault "@spectrum-icons/workflow/NewsAdd"
            Interop.reactApi.createElement (NewsAdd, createObj !!properties)

        static member inline Camera (properties: IReactProperty list) =
            let Camera = importDefault "@spectrum-icons/workflow/Camera"
            Interop.reactApi.createElement (Camera, createObj !!properties)

        static member inline ColumnTwoC (properties: IReactProperty list) =
            let ColumnTwoC = importDefault "@spectrum-icons/workflow/ColumnTwoC"
            Interop.reactApi.createElement (ColumnTwoC, createObj !!properties)

        static member inline FilePDF (properties: IReactProperty list) =
            let FilePDF = importDefault "@spectrum-icons/workflow/FilePDF"
            Interop.reactApi.createElement (FilePDF, createObj !!properties)

        static member inline SubtractFrontPath (properties: IReactProperty list) =
            let SubtractFrontPath = importDefault "@spectrum-icons/workflow/SubtractFrontPath"
            Interop.reactApi.createElement (SubtractFrontPath, createObj !!properties)

        static member inline Resize (properties: IReactProperty list) =
            let Resize = importDefault "@spectrum-icons/workflow/Resize"
            Interop.reactApi.createElement (Resize, createObj !!properties)

        static member inline TextSpaceBefore (properties: IReactProperty list) =
            let TextSpaceBefore = importDefault "@spectrum-icons/workflow/TextSpaceBefore"
            Interop.reactApi.createElement (TextSpaceBefore, createObj !!properties)

        static member inline Duplicate (properties: IReactProperty list) =
            let Duplicate = importDefault "@spectrum-icons/workflow/Duplicate"
            Interop.reactApi.createElement (Duplicate, createObj !!properties)

        static member inline ImageProfile (properties: IReactProperty list) =
            let ImageProfile = importDefault "@spectrum-icons/workflow/ImageProfile"
            Interop.reactApi.createElement (ImageProfile, createObj !!properties)

        static member inline LineHeight (properties: IReactProperty list) =
            let LineHeight = importDefault "@spectrum-icons/workflow/LineHeight"
            Interop.reactApi.createElement (LineHeight, createObj !!properties)

        static member inline DownloadFromCloudOutline (properties: IReactProperty list) =
            let DownloadFromCloudOutline = importDefault "@spectrum-icons/workflow/DownloadFromCloudOutline"
            Interop.reactApi.createElement (DownloadFromCloudOutline, createObj !!properties)

        static member inline Hand1 (properties: IReactProperty list) =
            let Hand1 = importDefault "@spectrum-icons/workflow/Hand1"
            Interop.reactApi.createElement (Hand1, createObj !!properties)

        static member inline CoverImage (properties: IReactProperty list) =
            let CoverImage = importDefault "@spectrum-icons/workflow/CoverImage"
            Interop.reactApi.createElement (CoverImage, createObj !!properties)

        static member inline TextEdit (properties: IReactProperty list) =
            let TextEdit = importDefault "@spectrum-icons/workflow/TextEdit"
            Interop.reactApi.createElement (TextEdit, createObj !!properties)

        static member inline FileCampaign (properties: IReactProperty list) =
            let FileCampaign = importDefault "@spectrum-icons/workflow/FileCampaign"
            Interop.reactApi.createElement (FileCampaign, createObj !!properties)

        static member inline Beaker (properties: IReactProperty list) =
            let Beaker = importDefault "@spectrum-icons/workflow/Beaker"
            Interop.reactApi.createElement (Beaker, createObj !!properties)

        static member inline Replay (properties: IReactProperty list) =
            let Replay = importDefault "@spectrum-icons/workflow/Replay"
            Interop.reactApi.createElement (Replay, createObj !!properties)

        static member inline AssetsPublished (properties: IReactProperty list) =
            let AssetsPublished = importDefault "@spectrum-icons/workflow/AssetsPublished"
            Interop.reactApi.createElement (AssetsPublished, createObj !!properties)

        static member inline Chat (properties: IReactProperty list) =
            let Chat = importDefault "@spectrum-icons/workflow/Chat"
            Interop.reactApi.createElement (Chat, createObj !!properties)

        static member inline ThumbUpOutline (properties: IReactProperty list) =
            let ThumbUpOutline = importDefault "@spectrum-icons/workflow/ThumbUpOutline"
            Interop.reactApi.createElement (ThumbUpOutline, createObj !!properties)

        static member inline SMSLightning (properties: IReactProperty list) =
            let SMSLightning = importDefault "@spectrum-icons/workflow/SMSLightning"
            Interop.reactApi.createElement (SMSLightning, createObj !!properties)

        static member inline StarOutline (properties: IReactProperty list) =
            let StarOutline = importDefault "@spectrum-icons/workflow/StarOutline"
            Interop.reactApi.createElement (StarOutline, createObj !!properties)

        static member inline Trap (properties: IReactProperty list) =
            let Trap = importDefault "@spectrum-icons/workflow/Trap"
            Interop.reactApi.createElement (Trap, createObj !!properties)

        static member inline AssetsLinkedPublished (properties: IReactProperty list) =
            let AssetsLinkedPublished = importDefault "@spectrum-icons/workflow/AssetsLinkedPublished"
            Interop.reactApi.createElement (AssetsLinkedPublished, createObj !!properties)

        static member inline UserCheckedOut (properties: IReactProperty list) =
            let UserCheckedOut = importDefault "@spectrum-icons/workflow/UserCheckedOut"
            Interop.reactApi.createElement (UserCheckedOut, createObj !!properties)

        static member inline Form (properties: IReactProperty list) =
            let Form = importDefault "@spectrum-icons/workflow/Form"
            Interop.reactApi.createElement (Form, createObj !!properties)

        static member inline RotateLeftOutline (properties: IReactProperty list) =
            let RotateLeftOutline = importDefault "@spectrum-icons/workflow/RotateLeftOutline"
            Interop.reactApi.createElement (RotateLeftOutline, createObj !!properties)

        static member inline Slow (properties: IReactProperty list) =
            let Slow = importDefault "@spectrum-icons/workflow/Slow"
            Interop.reactApi.createElement (Slow, createObj !!properties)

        static member inline RectSelect (properties: IReactProperty list) =
            let RectSelect = importDefault "@spectrum-icons/workflow/RectSelect"
            Interop.reactApi.createElement (RectSelect, createObj !!properties)

        static member inline Rewind (properties: IReactProperty list) =
            let Rewind = importDefault "@spectrum-icons/workflow/Rewind"
            Interop.reactApi.createElement (Rewind, createObj !!properties)

        static member inline Revert (properties: IReactProperty list) =
            let Revert = importDefault "@spectrum-icons/workflow/Revert"
            Interop.reactApi.createElement (Revert, createObj !!properties)

        static member inline ImageAlbum (properties: IReactProperty list) =
            let ImageAlbum = importDefault "@spectrum-icons/workflow/ImageAlbum"
            Interop.reactApi.createElement (ImageAlbum, createObj !!properties)

        static member inline LinkNav (properties: IReactProperty list) =
            let LinkNav = importDefault "@spectrum-icons/workflow/LinkNav"
            Interop.reactApi.createElement (LinkNav, createObj !!properties)

        static member inline Sandbox (properties: IReactProperty list) =
            let Sandbox = importDefault "@spectrum-icons/workflow/Sandbox"
            Interop.reactApi.createElement (Sandbox, createObj !!properties)

        static member inline Menu (properties: IReactProperty list) =
            let Menu = importDefault "@spectrum-icons/workflow/Menu"
            Interop.reactApi.createElement (Menu, createObj !!properties)

        static member inline SubstractBackPath (properties: IReactProperty list) =
            let SubstractBackPath = importDefault "@spectrum-icons/workflow/SubstractBackPath"
            Interop.reactApi.createElement (SubstractBackPath, createObj !!properties)

        static member inline Car (properties: IReactProperty list) =
            let Car = importDefault "@spectrum-icons/workflow/Car"
            Interop.reactApi.createElement (Car, createObj !!properties)

        static member inline CampaignEdit (properties: IReactProperty list) =
            let CampaignEdit = importDefault "@spectrum-icons/workflow/CampaignEdit"
            Interop.reactApi.createElement (CampaignEdit, createObj !!properties)

        static member inline TableMergeCells (properties: IReactProperty list) =
            let TableMergeCells = importDefault "@spectrum-icons/workflow/TableMergeCells"
            Interop.reactApi.createElement (TableMergeCells, createObj !!properties)

        static member inline Dashboard (properties: IReactProperty list) =
            let Dashboard = importDefault "@spectrum-icons/workflow/Dashboard"
            Interop.reactApi.createElement (Dashboard, createObj !!properties)

        static member inline Campaign (properties: IReactProperty list) =
            let Campaign = importDefault "@spectrum-icons/workflow/Campaign"
            Interop.reactApi.createElement (Campaign, createObj !!properties)

        static member inline Deselect (properties: IReactProperty list) =
            let Deselect = importDefault "@spectrum-icons/workflow/Deselect"
            Interop.reactApi.createElement (Deselect, createObj !!properties)

        static member inline FilterHeart (properties: IReactProperty list) =
            let FilterHeart = importDefault "@spectrum-icons/workflow/FilterHeart"
            Interop.reactApi.createElement (FilterHeart, createObj !!properties)

        static member inline Blur (properties: IReactProperty list) =
            let Blur = importDefault "@spectrum-icons/workflow/Blur"
            Interop.reactApi.createElement (Blur, createObj !!properties)

        static member inline ProjectEdit (properties: IReactProperty list) =
            let ProjectEdit = importDefault "@spectrum-icons/workflow/ProjectEdit"
            Interop.reactApi.createElement (ProjectEdit, createObj !!properties)

        static member inline EmailRefresh (properties: IReactProperty list) =
            let EmailRefresh = importDefault "@spectrum-icons/workflow/EmailRefresh"
            Interop.reactApi.createElement (EmailRefresh, createObj !!properties)

        static member inline ChevronUp (properties: IReactProperty list) =
            let ChevronUp = importDefault "@spectrum-icons/workflow/ChevronUp"
            Interop.reactApi.createElement (ChevronUp, createObj !!properties)

        static member inline CampaignClose (properties: IReactProperty list) =
            let CampaignClose = importDefault "@spectrum-icons/workflow/CampaignClose"
            Interop.reactApi.createElement (CampaignClose, createObj !!properties)

        static member inline JourneyData (properties: IReactProperty list) =
            let JourneyData = importDefault "@spectrum-icons/workflow/JourneyData"
            Interop.reactApi.createElement (JourneyData, createObj !!properties)

        static member inline Location (properties: IReactProperty list) =
            let Location = importDefault "@spectrum-icons/workflow/Location"
            Interop.reactApi.createElement (Location, createObj !!properties)

        static member inline FilterRemove (properties: IReactProperty list) =
            let FilterRemove = importDefault "@spectrum-icons/workflow/FilterRemove"
            Interop.reactApi.createElement (FilterRemove, createObj !!properties)

        static member inline More (properties: IReactProperty list) =
            let More = importDefault "@spectrum-icons/workflow/More"
            Interop.reactApi.createElement (More, createObj !!properties)

        static member inline Calendar (properties: IReactProperty list) =
            let Calendar = importDefault "@spectrum-icons/workflow/Calendar"
            Interop.reactApi.createElement (Calendar, createObj !!properties)

        static member inline Brush (properties: IReactProperty list) =
            let Brush = importDefault "@spectrum-icons/workflow/Brush"
            Interop.reactApi.createElement (Brush, createObj !!properties)

        static member inline Bookmark (properties: IReactProperty list) =
            let Bookmark = importDefault "@spectrum-icons/workflow/Bookmark"
            Interop.reactApi.createElement (Bookmark, createObj !!properties)

        static member inline EventExclude (properties: IReactProperty list) =
            let EventExclude = importDefault "@spectrum-icons/workflow/EventExclude"
            Interop.reactApi.createElement (EventExclude, createObj !!properties)

        static member inline DataSettings (properties: IReactProperty list) =
            let DataSettings = importDefault "@spectrum-icons/workflow/DataSettings"
            Interop.reactApi.createElement (DataSettings, createObj !!properties)

        static member inline Card (properties: IReactProperty list) =
            let Card = importDefault "@spectrum-icons/workflow/Card"
            Interop.reactApi.createElement (Card, createObj !!properties)

        static member inline BidRuleAdd (properties: IReactProperty list) =
            let BidRuleAdd = importDefault "@spectrum-icons/workflow/BidRuleAdd"
            Interop.reactApi.createElement (BidRuleAdd, createObj !!properties)

        static member inline FlipHorizontal (properties: IReactProperty list) =
            let FlipHorizontal = importDefault "@spectrum-icons/workflow/FlipHorizontal"
            Interop.reactApi.createElement (FlipHorizontal, createObj !!properties)

        static member inline Shuffle (properties: IReactProperty list) =
            let Shuffle = importDefault "@spectrum-icons/workflow/Shuffle"
            Interop.reactApi.createElement (Shuffle, createObj !!properties)

        static member inline BranchCircle (properties: IReactProperty list) =
            let BranchCircle = importDefault "@spectrum-icons/workflow/BranchCircle"
            Interop.reactApi.createElement (BranchCircle, createObj !!properties)

        static member inline Captcha (properties: IReactProperty list) =
            let Captcha = importDefault "@spectrum-icons/workflow/Captcha"
            Interop.reactApi.createElement (Captcha, createObj !!properties)

        static member inline Stopwatch (properties: IReactProperty list) =
            let Stopwatch = importDefault "@spectrum-icons/workflow/Stopwatch"
            Interop.reactApi.createElement (Stopwatch, createObj !!properties)

        static member inline TextSuperscript (properties: IReactProperty list) =
            let TextSuperscript = importDefault "@spectrum-icons/workflow/TextSuperscript"
            Interop.reactApi.createElement (TextSuperscript, createObj !!properties)

        static member inline HotelBed (properties: IReactProperty list) =
            let HotelBed = importDefault "@spectrum-icons/workflow/HotelBed"
            Interop.reactApi.createElement (HotelBed, createObj !!properties)

        static member inline DateInput (properties: IReactProperty list) =
            let DateInput = importDefault "@spectrum-icons/workflow/DateInput"
            Interop.reactApi.createElement (DateInput, createObj !!properties)

        static member inline Dolly (properties: IReactProperty list) =
            let Dolly = importDefault "@spectrum-icons/workflow/Dolly"
            Interop.reactApi.createElement (Dolly, createObj !!properties)

        static member inline Variable (properties: IReactProperty list) =
            let Variable = importDefault "@spectrum-icons/workflow/Variable"
            Interop.reactApi.createElement (Variable, createObj !!properties)

        static member inline AppRefresh (properties: IReactProperty list) =
            let AppRefresh = importDefault "@spectrum-icons/workflow/AppRefresh"
            Interop.reactApi.createElement (AppRefresh, createObj !!properties)

        static member inline Retweet (properties: IReactProperty list) =
            let Retweet = importDefault "@spectrum-icons/workflow/Retweet"
            Interop.reactApi.createElement (Retweet, createObj !!properties)

        static member inline StraightenOutline (properties: IReactProperty list) =
            let StraightenOutline = importDefault "@spectrum-icons/workflow/StraightenOutline"
            Interop.reactApi.createElement (StraightenOutline, createObj !!properties)

        static member inline DevicePreview (properties: IReactProperty list) =
            let DevicePreview = importDefault "@spectrum-icons/workflow/DevicePreview"
            Interop.reactApi.createElement (DevicePreview, createObj !!properties)

        static member inline Tips (properties: IReactProperty list) =
            let Tips = importDefault "@spectrum-icons/workflow/Tips"
            Interop.reactApi.createElement (Tips, createObj !!properties)

        static member inline TextSize (properties: IReactProperty list) =
            let TextSize = importDefault "@spectrum-icons/workflow/TextSize"
            Interop.reactApi.createElement (TextSize, createObj !!properties)

        static member inline Crop (properties: IReactProperty list) =
            let Crop = importDefault "@spectrum-icons/workflow/Crop"
            Interop.reactApi.createElement (Crop, createObj !!properties)

        static member inline QuickSelect (properties: IReactProperty list) =
            let QuickSelect = importDefault "@spectrum-icons/workflow/QuickSelect"
            Interop.reactApi.createElement (QuickSelect, createObj !!properties)

        static member inline TextAlignLeft (properties: IReactProperty list) =
            let TextAlignLeft = importDefault "@spectrum-icons/workflow/TextAlignLeft"
            Interop.reactApi.createElement (TextAlignLeft, createObj !!properties)

        static member inline SelectCircular (properties: IReactProperty list) =
            let SelectCircular = importDefault "@spectrum-icons/workflow/SelectCircular"
            Interop.reactApi.createElement (SelectCircular, createObj !!properties)

        static member inline Search (properties: IReactProperty list) =
            let Search = importDefault "@spectrum-icons/workflow/Search"
            Interop.reactApi.createElement (Search, createObj !!properties)

        static member inline GraphSunburst (properties: IReactProperty list) =
            let GraphSunburst = importDefault "@spectrum-icons/workflow/GraphSunburst"
            Interop.reactApi.createElement (GraphSunburst, createObj !!properties)

        static member inline RailBottom (properties: IReactProperty list) =
            let RailBottom = importDefault "@spectrum-icons/workflow/RailBottom"
            Interop.reactApi.createElement (RailBottom, createObj !!properties)

        static member inline PlayCircle (properties: IReactProperty list) =
            let PlayCircle = importDefault "@spectrum-icons/workflow/PlayCircle"
            Interop.reactApi.createElement (PlayCircle, createObj !!properties)

        static member inline AlignBottom (properties: IReactProperty list) =
            let AlignBottom = importDefault "@spectrum-icons/workflow/AlignBottom"
            Interop.reactApi.createElement (AlignBottom, createObj !!properties)

        static member inline MoreSmallListVert (properties: IReactProperty list) =
            let MoreSmallListVert = importDefault "@spectrum-icons/workflow/MoreSmallListVert"
            Interop.reactApi.createElement (MoreSmallListVert, createObj !!properties)

        static member inline TableSelectColumn (properties: IReactProperty list) =
            let TableSelectColumn = importDefault "@spectrum-icons/workflow/TableSelectColumn"
            Interop.reactApi.createElement (TableSelectColumn, createObj !!properties)

        static member inline TaskList (properties: IReactProperty list) =
            let TaskList = importDefault "@spectrum-icons/workflow/TaskList"
            Interop.reactApi.createElement (TaskList, createObj !!properties)

        static member inline MoreSmall (properties: IReactProperty list) =
            let MoreSmall = importDefault "@spectrum-icons/workflow/MoreSmall"
            Interop.reactApi.createElement (MoreSmall, createObj !!properties)

        static member inline PinOff (properties: IReactProperty list) =
            let PinOff = importDefault "@spectrum-icons/workflow/PinOff"
            Interop.reactApi.createElement (PinOff, createObj !!properties)

        static member inline TextDecrease (properties: IReactProperty list) =
            let TextDecrease = importDefault "@spectrum-icons/workflow/TextDecrease"
            Interop.reactApi.createElement (TextDecrease, createObj !!properties)

        static member inline RotateCWBold (properties: IReactProperty list) =
            let RotateCWBold = importDefault "@spectrum-icons/workflow/RotateCWBold"
            Interop.reactApi.createElement (RotateCWBold, createObj !!properties)

        static member inline Filter (properties: IReactProperty list) =
            let Filter = importDefault "@spectrum-icons/workflow/Filter"
            Interop.reactApi.createElement (Filter, createObj !!properties)

        static member inline TreeExpand (properties: IReactProperty list) =
            let TreeExpand = importDefault "@spectrum-icons/workflow/TreeExpand"
            Interop.reactApi.createElement (TreeExpand, createObj !!properties)

        static member inline Visibility (properties: IReactProperty list) =
            let Visibility = importDefault "@spectrum-icons/workflow/Visibility"
            Interop.reactApi.createElement (Visibility, createObj !!properties)

        static member inline StepBackward (properties: IReactProperty list) =
            let StepBackward = importDefault "@spectrum-icons/workflow/StepBackward"
            Interop.reactApi.createElement (StepBackward, createObj !!properties)

        static member inline Redo (properties: IReactProperty list) =
            let Redo = importDefault "@spectrum-icons/workflow/Redo"
            Interop.reactApi.createElement (Redo, createObj !!properties)

        static member inline MarginLeft (properties: IReactProperty list) =
            let MarginLeft = importDefault "@spectrum-icons/workflow/MarginLeft"
            Interop.reactApi.createElement (MarginLeft, createObj !!properties)

        static member inline TestAB (properties: IReactProperty list) =
            let TestAB = importDefault "@spectrum-icons/workflow/TestAB"
            Interop.reactApi.createElement (TestAB, createObj !!properties)

        static member inline Gift (properties: IReactProperty list) =
            let Gift = importDefault "@spectrum-icons/workflow/Gift"
            Interop.reactApi.createElement (Gift, createObj !!properties)

        static member inline MapView (properties: IReactProperty list) =
            let MapView = importDefault "@spectrum-icons/workflow/MapView"
            Interop.reactApi.createElement (MapView, createObj !!properties)

        static member inline TextIncrease (properties: IReactProperty list) =
            let TextIncrease = importDefault "@spectrum-icons/workflow/TextIncrease"
            Interop.reactApi.createElement (TextIncrease, createObj !!properties)

        static member inline Messenger (properties: IReactProperty list) =
            let Messenger = importDefault "@spectrum-icons/workflow/Messenger"
            Interop.reactApi.createElement (Messenger, createObj !!properties)

        static member inline GraphStreamRankedAdd (properties: IReactProperty list) =
            let GraphStreamRankedAdd = importDefault "@spectrum-icons/workflow/GraphStreamRankedAdd"
            Interop.reactApi.createElement (GraphStreamRankedAdd, createObj !!properties)

        static member inline Target (properties: IReactProperty list) =
            let Target = importDefault "@spectrum-icons/workflow/Target"
            Interop.reactApi.createElement (Target, createObj !!properties)

        static member inline EmailKey (properties: IReactProperty list) =
            let EmailKey = importDefault "@spectrum-icons/workflow/EmailKey"
            Interop.reactApi.createElement (EmailKey, createObj !!properties)

        static member inline Book (properties: IReactProperty list) =
            let Book = importDefault "@spectrum-icons/workflow/Book"
            Interop.reactApi.createElement (Book, createObj !!properties)

        static member inline Compass (properties: IReactProperty list) =
            let Compass = importDefault "@spectrum-icons/workflow/Compass"
            Interop.reactApi.createElement (Compass, createObj !!properties)

        static member inline Archive (properties: IReactProperty list) =
            let Archive = importDefault "@spectrum-icons/workflow/Archive"
            Interop.reactApi.createElement (Archive, createObj !!properties)

        static member inline FileKey (properties: IReactProperty list) =
            let FileKey = importDefault "@spectrum-icons/workflow/FileKey"
            Interop.reactApi.createElement (FileKey, createObj !!properties)

        static member inline Move (properties: IReactProperty list) =
            let Move = importDefault "@spectrum-icons/workflow/Move"
            Interop.reactApi.createElement (Move, createObj !!properties)

        static member inline DocumentFragment (properties: IReactProperty list) =
            let DocumentFragment = importDefault "@spectrum-icons/workflow/DocumentFragment"
            Interop.reactApi.createElement (DocumentFragment, createObj !!properties)

        static member inline PersonalizationField (properties: IReactProperty list) =
            let PersonalizationField = importDefault "@spectrum-icons/workflow/PersonalizationField"
            Interop.reactApi.createElement (PersonalizationField, createObj !!properties)

        static member inline Inbox (properties: IReactProperty list) =
            let Inbox = importDefault "@spectrum-icons/workflow/Inbox"
            Interop.reactApi.createElement (Inbox, createObj !!properties)

        static member inline ViewSingle (properties: IReactProperty list) =
            let ViewSingle = importDefault "@spectrum-icons/workflow/ViewSingle"
            Interop.reactApi.createElement (ViewSingle, createObj !!properties)

        static member inline EmailOutline (properties: IReactProperty list) =
            let EmailOutline = importDefault "@spectrum-icons/workflow/EmailOutline"
            Interop.reactApi.createElement (EmailOutline, createObj !!properties)

        static member inline Rectangle (properties: IReactProperty list) =
            let Rectangle = importDefault "@spectrum-icons/workflow/Rectangle"
            Interop.reactApi.createElement (Rectangle, createObj !!properties)

        static member inline EmailExclude (properties: IReactProperty list) =
            let EmailExclude = importDefault "@spectrum-icons/workflow/EmailExclude"
            Interop.reactApi.createElement (EmailExclude, createObj !!properties)

        static member inline Undo (properties: IReactProperty list) =
            let Undo = importDefault "@spectrum-icons/workflow/Undo"
            Interop.reactApi.createElement (Undo, createObj !!properties)

        static member inline Train (properties: IReactProperty list) =
            let Train = importDefault "@spectrum-icons/workflow/Train"
            Interop.reactApi.createElement (Train, createObj !!properties)

        static member inline VolumeOne (properties: IReactProperty list) =
            let VolumeOne = importDefault "@spectrum-icons/workflow/VolumeOne"
            Interop.reactApi.createElement (VolumeOne, createObj !!properties)

        static member inline CalendarAdd (properties: IReactProperty list) =
            let CalendarAdd = importDefault "@spectrum-icons/workflow/CalendarAdd"
            Interop.reactApi.createElement (CalendarAdd, createObj !!properties)

        static member inline ArchiveRemove (properties: IReactProperty list) =
            let ArchiveRemove = importDefault "@spectrum-icons/workflow/ArchiveRemove"
            Interop.reactApi.createElement (ArchiveRemove, createObj !!properties)

        static member inline TextBulleted (properties: IReactProperty list) =
            let TextBulleted = importDefault "@spectrum-icons/workflow/TextBulleted"
            Interop.reactApi.createElement (TextBulleted, createObj !!properties)

        static member inline LinkCheck (properties: IReactProperty list) =
            let LinkCheck = importDefault "@spectrum-icons/workflow/LinkCheck"
            Interop.reactApi.createElement (LinkCheck, createObj !!properties)

        static member inline UsersExclude (properties: IReactProperty list) =
            let UsersExclude = importDefault "@spectrum-icons/workflow/UsersExclude"
            Interop.reactApi.createElement (UsersExclude, createObj !!properties)

        static member inline Demographic (properties: IReactProperty list) =
            let Demographic = importDefault "@spectrum-icons/workflow/Demographic"
            Interop.reactApi.createElement (Demographic, createObj !!properties)

        static member inline BookmarkSmall (properties: IReactProperty list) =
            let BookmarkSmall = importDefault "@spectrum-icons/workflow/BookmarkSmall"
            Interop.reactApi.createElement (BookmarkSmall, createObj !!properties)

        static member inline UsersLock (properties: IReactProperty list) =
            let UsersLock = importDefault "@spectrum-icons/workflow/UsersLock"
            Interop.reactApi.createElement (UsersLock, createObj !!properties)

        static member inline FolderSearch (properties: IReactProperty list) =
            let FolderSearch = importDefault "@spectrum-icons/workflow/FolderSearch"
            Interop.reactApi.createElement (FolderSearch, createObj !!properties)

        static member inline TextNumbered (properties: IReactProperty list) =
            let TextNumbered = importDefault "@spectrum-icons/workflow/TextNumbered"
            Interop.reactApi.createElement (TextNumbered, createObj !!properties)

        static member inline ArrowDown (properties: IReactProperty list) =
            let ArrowDown = importDefault "@spectrum-icons/workflow/ArrowDown"
            Interop.reactApi.createElement (ArrowDown, createObj !!properties)

        static member inline KeyClock (properties: IReactProperty list) =
            let KeyClock = importDefault "@spectrum-icons/workflow/KeyClock"
            Interop.reactApi.createElement (KeyClock, createObj !!properties)

        static member inline ViewRow (properties: IReactProperty list) =
            let ViewRow = importDefault "@spectrum-icons/workflow/ViewRow"
            Interop.reactApi.createElement (ViewRow, createObj !!properties)

        static member inline Reorder (properties: IReactProperty list) =
            let Reorder = importDefault "@spectrum-icons/workflow/Reorder"
            Interop.reactApi.createElement (Reorder, createObj !!properties)

        static member inline Forward (properties: IReactProperty list) =
            let Forward = importDefault "@spectrum-icons/workflow/Forward"
            Interop.reactApi.createElement (Forward, createObj !!properties)

        static member inline GraphAreaStacked (properties: IReactProperty list) =
            let GraphAreaStacked = importDefault "@spectrum-icons/workflow/GraphAreaStacked"
            Interop.reactApi.createElement (GraphAreaStacked, createObj !!properties)

        static member inline JumpToTop (properties: IReactProperty list) =
            let JumpToTop = importDefault "@spectrum-icons/workflow/JumpToTop"
            Interop.reactApi.createElement (JumpToTop, createObj !!properties)

        static member inline FileExcel (properties: IReactProperty list) =
            let FileExcel = importDefault "@spectrum-icons/workflow/FileExcel"
            Interop.reactApi.createElement (FileExcel, createObj !!properties)

        static member inline Unlink (properties: IReactProperty list) =
            let Unlink = importDefault "@spectrum-icons/workflow/Unlink"
            Interop.reactApi.createElement (Unlink, createObj !!properties)

        static member inline Collection (properties: IReactProperty list) =
            let Collection = importDefault "@spectrum-icons/workflow/Collection"
            Interop.reactApi.createElement (Collection, createObj !!properties)

        static member inline ViewAllTags (properties: IReactProperty list) =
            let ViewAllTags = importDefault "@spectrum-icons/workflow/ViewAllTags"
            Interop.reactApi.createElement (ViewAllTags, createObj !!properties)

        static member inline Mailbox (properties: IReactProperty list) =
            let Mailbox = importDefault "@spectrum-icons/workflow/Mailbox"
            Interop.reactApi.createElement (Mailbox, createObj !!properties)

        static member inline App (properties: IReactProperty list) =
            let App = importDefault "@spectrum-icons/workflow/App"
            Interop.reactApi.createElement (App, createObj !!properties)

        static member inline Group (properties: IReactProperty list) =
            let Group = importDefault "@spectrum-icons/workflow/Group"
            Interop.reactApi.createElement (Group, createObj !!properties)

        static member inline ApplicationDelivery (properties: IReactProperty list) =
            let ApplicationDelivery = importDefault "@spectrum-icons/workflow/ApplicationDelivery"
            Interop.reactApi.createElement (ApplicationDelivery, createObj !!properties)

        static member inline EditInLight (properties: IReactProperty list) =
            let EditInLight = importDefault "@spectrum-icons/workflow/EditInLight"
            Interop.reactApi.createElement (EditInLight, createObj !!properties)

        static member inline Hand4 (properties: IReactProperty list) =
            let Hand4 = importDefault "@spectrum-icons/workflow/Hand4"
            Interop.reactApi.createElement (Hand4, createObj !!properties)

        static member inline Settings (properties: IReactProperty list) =
            let Settings = importDefault "@spectrum-icons/workflow/Settings"
            Interop.reactApi.createElement (Settings, createObj !!properties)

        static member inline TrendInspect (properties: IReactProperty list) =
            let TrendInspect = importDefault "@spectrum-icons/workflow/TrendInspect"
            Interop.reactApi.createElement (TrendInspect, createObj !!properties)

        static member inline Text (properties: IReactProperty list) =
            let Text = importDefault "@spectrum-icons/workflow/Text"
            Interop.reactApi.createElement (Text, createObj !!properties)

        static member inline Refresh (properties: IReactProperty list) =
            let Refresh = importDefault "@spectrum-icons/workflow/Refresh"
            Interop.reactApi.createElement (Refresh, createObj !!properties)

        static member inline Branch3 (properties: IReactProperty list) =
            let Branch3 = importDefault "@spectrum-icons/workflow/Branch3"
            Interop.reactApi.createElement (Branch3, createObj !!properties)

        static member inline DataUser (properties: IReactProperty list) =
            let DataUser = importDefault "@spectrum-icons/workflow/DataUser"
            Interop.reactApi.createElement (DataUser, createObj !!properties)

        static member inline NamingOrder (properties: IReactProperty list) =
            let NamingOrder = importDefault "@spectrum-icons/workflow/NamingOrder"
            Interop.reactApi.createElement (NamingOrder, createObj !!properties)

        static member inline CampaignDelete (properties: IReactProperty list) =
            let CampaignDelete = importDefault "@spectrum-icons/workflow/CampaignDelete"
            Interop.reactApi.createElement (CampaignDelete, createObj !!properties)

        static member inline Back30Seconds (properties: IReactProperty list) =
            let Back30Seconds = importDefault "@spectrum-icons/workflow/Back30Seconds"
            Interop.reactApi.createElement (Back30Seconds, createObj !!properties)

        static member inline FullScreen (properties: IReactProperty list) =
            let FullScreen = importDefault "@spectrum-icons/workflow/FullScreen"
            Interop.reactApi.createElement (FullScreen, createObj !!properties)

        static member inline EmailKeyOutline (properties: IReactProperty list) =
            let EmailKeyOutline = importDefault "@spectrum-icons/workflow/EmailKeyOutline"
            Interop.reactApi.createElement (EmailKeyOutline, createObj !!properties)

        static member inline TestABRemove (properties: IReactProperty list) =
            let TestABRemove = importDefault "@spectrum-icons/workflow/TestABRemove"
            Interop.reactApi.createElement (TestABRemove, createObj !!properties)

        static member inline Label (properties: IReactProperty list) =
            let Label = importDefault "@spectrum-icons/workflow/Label"
            Interop.reactApi.createElement (Label, createObj !!properties)

        static member inline PageRule (properties: IReactProperty list) =
            let PageRule = importDefault "@spectrum-icons/workflow/PageRule"
            Interop.reactApi.createElement (PageRule, createObj !!properties)

        static member inline TextSubscript (properties: IReactProperty list) =
            let TextSubscript = importDefault "@spectrum-icons/workflow/TextSubscript"
            Interop.reactApi.createElement (TextSubscript, createObj !!properties)

        static member inline CollectionExclude (properties: IReactProperty list) =
            let CollectionExclude = importDefault "@spectrum-icons/workflow/CollectionExclude"
            Interop.reactApi.createElement (CollectionExclude, createObj !!properties)

        static member inline DistributeLeftEdge (properties: IReactProperty list) =
            let DistributeLeftEdge = importDefault "@spectrum-icons/workflow/DistributeLeftEdge"
            Interop.reactApi.createElement (DistributeLeftEdge, createObj !!properties)

        static member inline FileTemplate (properties: IReactProperty list) =
            let FileTemplate = importDefault "@spectrum-icons/workflow/FileTemplate"
            Interop.reactApi.createElement (FileTemplate, createObj !!properties)

        static member inline PublishReject (properties: IReactProperty list) =
            let PublishReject = importDefault "@spectrum-icons/workflow/PublishReject"
            Interop.reactApi.createElement (PublishReject, createObj !!properties)

        static member inline AlignCenter (properties: IReactProperty list) =
            let AlignCenter = importDefault "@spectrum-icons/workflow/AlignCenter"
            Interop.reactApi.createElement (AlignCenter, createObj !!properties)

        static member inline OpenIn (properties: IReactProperty list) =
            let OpenIn = importDefault "@spectrum-icons/workflow/OpenIn"
            Interop.reactApi.createElement (OpenIn, createObj !!properties)

        static member inline GraphTrendAlert (properties: IReactProperty list) =
            let GraphTrendAlert = importDefault "@spectrum-icons/workflow/GraphTrendAlert"
            Interop.reactApi.createElement (GraphTrendAlert, createObj !!properties)

        static member inline Images (properties: IReactProperty list) =
            let Images = importDefault "@spectrum-icons/workflow/Images"
            Interop.reactApi.createElement (Images, createObj !!properties)

        static member inline RotateRight (properties: IReactProperty list) =
            let RotateRight = importDefault "@spectrum-icons/workflow/RotateRight"
            Interop.reactApi.createElement (RotateRight, createObj !!properties)

        static member inline Document (properties: IReactProperty list) =
            let Document = importDefault "@spectrum-icons/workflow/Document"
            Interop.reactApi.createElement (Document, createObj !!properties)

        static member inline StepForward (properties: IReactProperty list) =
            let StepForward = importDefault "@spectrum-icons/workflow/StepForward"
            Interop.reactApi.createElement (StepForward, createObj !!properties)

        static member inline ExperienceAddTo (properties: IReactProperty list) =
            let ExperienceAddTo = importDefault "@spectrum-icons/workflow/ExperienceAddTo"
            Interop.reactApi.createElement (ExperienceAddTo, createObj !!properties)

        static member inline FileGlobe (properties: IReactProperty list) =
            let FileGlobe = importDefault "@spectrum-icons/workflow/FileGlobe"
            Interop.reactApi.createElement (FileGlobe, createObj !!properties)

        static member inline Reuse (properties: IReactProperty list) =
            let Reuse = importDefault "@spectrum-icons/workflow/Reuse"
            Interop.reactApi.createElement (Reuse, createObj !!properties)

        static member inline GlobeRemove (properties: IReactProperty list) =
            let GlobeRemove = importDefault "@spectrum-icons/workflow/GlobeRemove"
            Interop.reactApi.createElement (GlobeRemove, createObj !!properties)

        static member inline FolderUser (properties: IReactProperty list) =
            let FolderUser = importDefault "@spectrum-icons/workflow/FolderUser"
            Interop.reactApi.createElement (FolderUser, createObj !!properties)

        static member inline CallCenter (properties: IReactProperty list) =
            let CallCenter = importDefault "@spectrum-icons/workflow/CallCenter"
            Interop.reactApi.createElement (CallCenter, createObj !!properties)

        static member inline BeakerShare (properties: IReactProperty list) =
            let BeakerShare = importDefault "@spectrum-icons/workflow/BeakerShare"
            Interop.reactApi.createElement (BeakerShare, createObj !!properties)

        static member inline TextStroke (properties: IReactProperty list) =
            let TextStroke = importDefault "@spectrum-icons/workflow/TextStroke"
            Interop.reactApi.createElement (TextStroke, createObj !!properties)

        static member inline FileChart (properties: IReactProperty list) =
            let FileChart = importDefault "@spectrum-icons/workflow/FileChart"
            Interop.reactApi.createElement (FileChart, createObj !!properties)

        static member inline TextRomanLowercase (properties: IReactProperty list) =
            let TextRomanLowercase = importDefault "@spectrum-icons/workflow/TextRomanLowercase"
            Interop.reactApi.createElement (TextRomanLowercase, createObj !!properties)

        static member inline PageShare (properties: IReactProperty list) =
            let PageShare = importDefault "@spectrum-icons/workflow/PageShare"
            Interop.reactApi.createElement (PageShare, createObj !!properties)

        static member inline Calculator (properties: IReactProperty list) =
            let Calculator = importDefault "@spectrum-icons/workflow/Calculator"
            Interop.reactApi.createElement (Calculator, createObj !!properties)

        static member inline ColumnTwoB (properties: IReactProperty list) =
            let ColumnTwoB = importDefault "@spectrum-icons/workflow/ColumnTwoB"
            Interop.reactApi.createElement (ColumnTwoB, createObj !!properties)

        static member inline Journey (properties: IReactProperty list) =
            let Journey = importDefault "@spectrum-icons/workflow/Journey"
            Interop.reactApi.createElement (Journey, createObj !!properties)

        static member inline Share (properties: IReactProperty list) =
            let Share = importDefault "@spectrum-icons/workflow/Share"
            Interop.reactApi.createElement (Share, createObj !!properties)

        static member inline GraphBarHorizontal (properties: IReactProperty list) =
            let GraphBarHorizontal = importDefault "@spectrum-icons/workflow/GraphBarHorizontal"
            Interop.reactApi.createElement (GraphBarHorizontal, createObj !!properties)

        static member inline Extension (properties: IReactProperty list) =
            let Extension = importDefault "@spectrum-icons/workflow/Extension"
            Interop.reactApi.createElement (Extension, createObj !!properties)

        static member inline ViewStack (properties: IReactProperty list) =
            let ViewStack = importDefault "@spectrum-icons/workflow/ViewStack"
            Interop.reactApi.createElement (ViewStack, createObj !!properties)

        static member inline Capitals (properties: IReactProperty list) =
            let Capitals = importDefault "@spectrum-icons/workflow/Capitals"
            Interop.reactApi.createElement (Capitals, createObj !!properties)

        static member inline Pause (properties: IReactProperty list) =
            let Pause = importDefault "@spectrum-icons/workflow/Pause"
            Interop.reactApi.createElement (Pause, createObj !!properties)

        static member inline Print (properties: IReactProperty list) =
            let Print = importDefault "@spectrum-icons/workflow/Print"
            Interop.reactApi.createElement (Print, createObj !!properties)

        static member inline FilingCabinet (properties: IReactProperty list) =
            let FilingCabinet = importDefault "@spectrum-icons/workflow/FilingCabinet"
            Interop.reactApi.createElement (FilingCabinet, createObj !!properties)

        static member inline Individual (properties: IReactProperty list) =
            let Individual = importDefault "@spectrum-icons/workflow/Individual"
            Interop.reactApi.createElement (Individual, createObj !!properties)

        static member inline DistributeVerticalCenter (properties: IReactProperty list) =
            let DistributeVerticalCenter = importDefault "@spectrum-icons/workflow/DistributeVerticalCenter"
            Interop.reactApi.createElement (DistributeVerticalCenter, createObj !!properties)

        static member inline TextAdd (properties: IReactProperty list) =
            let TextAdd = importDefault "@spectrum-icons/workflow/TextAdd"
            Interop.reactApi.createElement (TextAdd, createObj !!properties)

        static member inline OutlinePath (properties: IReactProperty list) =
            let OutlinePath = importDefault "@spectrum-icons/workflow/OutlinePath"
            Interop.reactApi.createElement (OutlinePath, createObj !!properties)

        static member inline ColorFill (properties: IReactProperty list) =
            let ColorFill = importDefault "@spectrum-icons/workflow/ColorFill"
            Interop.reactApi.createElement (ColorFill, createObj !!properties)

        static member inline Plug (properties: IReactProperty list) =
            let Plug = importDefault "@spectrum-icons/workflow/Plug"
            Interop.reactApi.createElement (Plug, createObj !!properties)

        static member inline AlignLeft (properties: IReactProperty list) =
            let AlignLeft = importDefault "@spectrum-icons/workflow/AlignLeft"
            Interop.reactApi.createElement (AlignLeft, createObj !!properties)

        static member inline Stamp (properties: IReactProperty list) =
            let Stamp = importDefault "@spectrum-icons/workflow/Stamp"
            Interop.reactApi.createElement (Stamp, createObj !!properties)

        static member inline ShowMenu (properties: IReactProperty list) =
            let ShowMenu = importDefault "@spectrum-icons/workflow/ShowMenu"
            Interop.reactApi.createElement (ShowMenu, createObj !!properties)

        static member inline ImageCheckedOut (properties: IReactProperty list) =
            let ImageCheckedOut = importDefault "@spectrum-icons/workflow/ImageCheckedOut"
            Interop.reactApi.createElement (ImageCheckedOut, createObj !!properties)

        static member inline ThumbUp (properties: IReactProperty list) =
            let ThumbUp = importDefault "@spectrum-icons/workflow/ThumbUp"
            Interop.reactApi.createElement (ThumbUp, createObj !!properties)

        static member inline DataRefresh (properties: IReactProperty list) =
            let DataRefresh = importDefault "@spectrum-icons/workflow/DataRefresh"
            Interop.reactApi.createElement (DataRefresh, createObj !!properties)

        static member inline KeyExclude (properties: IReactProperty list) =
            let KeyExclude = importDefault "@spectrum-icons/workflow/KeyExclude"
            Interop.reactApi.createElement (KeyExclude, createObj !!properties)

        static member inline CollectionAddTo (properties: IReactProperty list) =
            let CollectionAddTo = importDefault "@spectrum-icons/workflow/CollectionAddTo"
            Interop.reactApi.createElement (CollectionAddTo, createObj !!properties)

        static member inline Hand0 (properties: IReactProperty list) =
            let Hand0 = importDefault "@spectrum-icons/workflow/Hand0"
            Interop.reactApi.createElement (Hand0, createObj !!properties)

        static member inline UploadToCloudOutline (properties: IReactProperty list) =
            let UploadToCloudOutline = importDefault "@spectrum-icons/workflow/UploadToCloudOutline"
            Interop.reactApi.createElement (UploadToCloudOutline, createObj !!properties)

        static member inline Email (properties: IReactProperty list) =
            let Email = importDefault "@spectrum-icons/workflow/Email"
            Interop.reactApi.createElement (Email, createObj !!properties)

        static member inline RadialGradient (properties: IReactProperty list) =
            let RadialGradient = importDefault "@spectrum-icons/workflow/RadialGradient"
            Interop.reactApi.createElement (RadialGradient, createObj !!properties)

        static member inline ShareWindows (properties: IReactProperty list) =
            let ShareWindows = importDefault "@spectrum-icons/workflow/ShareWindows"
            Interop.reactApi.createElement (ShareWindows, createObj !!properties)

        static member inline FilterCheck (properties: IReactProperty list) =
            let FilterCheck = importDefault "@spectrum-icons/workflow/FilterCheck"
            Interop.reactApi.createElement (FilterCheck, createObj !!properties)

        static member inline ViewList (properties: IReactProperty list) =
            let ViewList = importDefault "@spectrum-icons/workflow/ViewList"
            Interop.reactApi.createElement (ViewList, createObj !!properties)
