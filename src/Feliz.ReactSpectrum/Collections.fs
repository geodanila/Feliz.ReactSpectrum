namespace Feliz.ReactSpectrum

open Feliz.ReactSpectrum
open Feliz
open Fable.Core
open Fable.React

[<Erase>]
type SelectableBase =
    inherit BaseComponent
    static member inline children (xs: seq<ReactElement>) = Interop.mkAttr "children" (xs |> Array.ofSeq)
    static member inline autoFocus (value: bool) = Interop.mkAttr "autoFocus" value
    static member inline autoFocus (value: FocusStrategy) = Interop.mkAttr "autoFocus" value
    static member inline shouldFocusWrap (value: bool) = Interop.mkAttr "shouldFocusWrap" value
    static member inline items (xs: seq<'a>) = Interop.mkAttr "items" (xs |> Array.ofSeq)
    static member inline itemTemplate (template: 'a -> ReactElement) = Interop.mkAttr "children" template
    static member inline disabledKeys (value: seq<'a>) = Interop.mkAttr "disabledKeys" value
    static member inline selectionMode (value: SelectionMode) = Interop.mkAttr "selectionMode" value
    static member inline disallowEmptySelection (value: bool) = Interop.mkAttr "disallowEmptySelection" value
    static member inline selectedKeys (value: seq<'a>) = Interop.mkAttr "selectedKeys" value
    static member inline defaultSelectedKeys (value: seq<'a>) = Interop.mkAttr "defaultSelectedKeys" value
    static member inline onSelectionChange (handler: 'a list -> unit) =
        let handler' = fun (selection: Fable.Core.JS.Set<'a>) ->
            let items = selection.values() |> List.ofSeq
            handler items

        Interop.mkAttr "onSelectionChange" handler'

[<Erase>]
type ListBox =
    inherit SelectableBase
    static member inline isLoading (value: bool) = Interop.mkAttr "isLoading" value
    static member inline onLoadMore (handler: unit -> 'a) = Interop.mkAttr "onLoadMore" handler

[<Erase>]
type ActionMenu =
    inherit BaseComponent
    static member inline children (xs: seq<ReactElement>) = Interop.mkAttr "children" (xs |> Array.ofSeq)
    static member inline align (value: Alignment) = Interop.mkAttr "align" value
    static member inline direction (value: ActionMenuDirection) = Interop.mkAttr "direction" value
    static member inline shouldFlip (value: bool) = Interop.mkAttr "shouldFlip" value
    static member inline isDisabled (value: bool) = Interop.mkAttr "isDisabled" value
    static member inline isQuiet (value: bool) = Interop.mkAttr "isQuiet" value
    static member inline autoFocus (value: bool) = Interop.mkAttr "autoFocus" value
    static member inline items (xs: seq<'a>) = Interop.mkAttr "items" (xs |> Array.ofSeq)
    static member inline itemTemplate (template: 'a -> ReactElement) = Interop.mkAttr "children" template
    static member inline disabledKeys (value: seq<'a>) = Interop.mkAttr "disabledKeys" value
    static member inline trigger (value: MenuTriggerType) = Interop.mkAttr "trigger" value
    static member inline closeOnSelect (value: bool) = Interop.mkAttr "closeOnSelect" value
    static member inline isOpen (value: bool) = Interop.mkAttr "isOpen" value
    static member inline defaultOpen (value: bool) = Interop.mkAttr "defaultOpen" value
    static member inline onAction (handler: 'a -> unit) = Interop.mkAttr "onAction" handler
    static member inline onOpenChange (handler: bool -> unit) = Interop.mkAttr "onOpenChange" handler

[<Erase>]
type Section =
    static member inline children (xs: seq<ReactElement>) = Interop.mkAttr "children" (xs |> Array.ofSeq)
    static member inline items (xs: seq<'a>) = Interop.mkAttr "items" (xs |> Array.ofSeq)
    static member inline key (value: string) = Interop.mkAttr "key" value
    static member inline title (value: string) = Interop.mkAttr "title" value
    static member inline itemTemplate (template: 'a -> ReactElement) = Interop.mkAttr "children" template
    static member inline ariaLabel (value: string) = Interop.mkAttr "ariaLabel" value

[<Erase>]
type Menu =
    inherit SelectableBase
    static member inline onAction (handler: 'a -> unit) = Interop.mkAttr "onAction" handler

[<Erase>]
type MenuTrigger =
    static member inline children (xs: seq<ReactElement>) = Interop.mkAttr "children" (xs |> Array.ofSeq)
    static member inline trigger (value: MenuTriggerType) = Interop.mkAttr "trigger" value
    static member inline closeOnSelected (value: bool) = Interop.mkAttr "closeOnSelect" value
    static member inline shouldFlip (value: bool) = Interop.mkAttr "shouldFlip" value
    static member inline align (value: Alignment) = Interop.mkAttr "align" value
    static member inline direction (value: MenuDirection) = Interop.mkAttr "direction" value
    static member inline onOpenChange (handler: bool -> unit) = Interop.mkAttr "onOpenChange" handler
    static member inline isOpen (value: bool) = Interop.mkAttr "isOpen" value
    static member inline defaultOpen (value: bool) = Interop.mkAttr "defaultOpen" value

[<Erase>]
type TableView =
    inherit BaseComponent
    static member inline children (xs: seq<ReactElement>) = Interop.mkAttr "children" (xs |> Array.ofSeq)
    static member inline isQuiet (value: bool) = Interop.mkAttr "isQuiet" value
    static member inline density (value: TableViewDensity) = Interop.mkAttr "density" value
    static member inline overflowMode (value: TableViewOverflowMode) = Interop.mkAttr "overflowMode" value
    static member inline renderEmptyState (handler: unit -> ReactElement) = Interop.mkAttr "renderEmptyState" handler
    static member inline sortDescriptor (column: 'a, direction: SortDirection) = Interop.mkAttr "sortDescriptor" {| column = column; direction = direction |}
    static member inline selectionStyle (value: TableViewSelectionStyle) = Interop.mkAttr "selectionStyle" value
    static member inline disabledKeys (value: seq<'a>) = Interop.mkAttr "disabledKeys" value
    static member inline selectionMode (value: SelectionMode) = Interop.mkAttr "selectionMode" value
    static member inline disallowEmptySelection (value: bool) = Interop.mkAttr "disallowEmptySelection" value
    static member inline selectedKeys (value: seq<'a>) = Interop.mkAttr "selectedKeys" value
    static member inline defaultSelectedKeys (value: seq<'a>) = Interop.mkAttr "defaultSelectedKeys" value
    static member inline onSelectionChange (handler: 'a list -> unit) =
        let handler' = fun (selection: Fable.Core.JS.Set<'a>) ->
            let items = selection.values() |> List.ofSeq
            handler items
        Interop.mkAttr "onSelectionChange" handler'
    static member inline onAction (handler: 'a -> unit) = Interop.mkAttr "onAction" handler
    static member inline onSortChange (handler: {| column: 'a; direction: SortDirection |} -> 'b) = Interop.mkAttr "onSortChange" handler

[<Erase>]
type TableHeader =
    static member inline children (xs: seq<ReactElement>) = Interop.mkAttr "children" (xs |> Array.ofSeq)
    static member inline columns (values: seq<'a>) = Interop.mkAttr "columns" (values |> Array.ofSeq)
    static member inline columnTemplate (template: 'a -> ReactElement) = Interop.mkAttr "children" template

[<Erase>]
type Column =
    static member inline key (value: 'a) = Interop.mkAttr "key" value
    static member inline children (xs: seq<ReactElement>) = Interop.mkAttr "children" (xs |> Array.ofSeq)
    static member inline content (value: string) = Column.children [ Html.text value ]
    static member inline content (value: ReactElement) = Column.children [ value ]
    static member inline align (value: ColumnAlignment) = Interop.mkAttr "align" value
    static member inline showDivider (value: bool) = Interop.mkAttr "showDivider" value
    static member inline hideHeader (value: bool) = Interop.mkAttr "hideHeader" value
    static member inline title (element: ReactElement) = Interop.mkAttr "title" element
    static member inline childColumns (xs: seq<'a>) = Interop.mkAttr "childColumns" (xs |> Array.ofSeq)
    static member inline allowsSorting (value: bool) = Interop.mkAttr "allowsSorting" value
    static member inline isRowHeader (value: bool) = Interop.mkAttr "isRowHeader" value
    static member inline textValue (value: string) = Interop.mkAttr "textValue" value
    static member inline width (value: int) = Interop.mkAttr "width" value
    static member inline width (value: float) = Interop.mkAttr "width" value
    static member inline width (value: string) = Interop.mkAttr "width" value
    static member inline minWidth (value: int) = Interop.mkAttr "minWidth" value
    static member inline minWidth (value: float) = Interop.mkAttr "minWidth" value
    static member inline minWidth (value: string) = Interop.mkAttr "minWidth" value
    static member inline maxWidth (value: int) = Interop.mkAttr "maxWidth" value
    static member inline maxWidth (value: float) = Interop.mkAttr "maxWidth" value
    static member inline maxWidth (value: string) = Interop.mkAttr "maxWidth" value

[<Erase>]
type TableBody =
    static member inline children (xs: seq<ReactElement>) = Interop.mkAttr "children" (xs |> Array.ofSeq)
    static member inline items (value: seq<'a>) = Interop.mkAttr "items" value
    static member inline itemTemplate (template: 'a -> ReactElement) = Interop.mkAttr "children" template
    static member inline loadingState (value: LoadingState) = Interop.mkAttr "loadingState" value
    static member inline onLoadMore (handler: unit -> 'a) = Interop.mkAttr "onLoadMore" handler

[<Erase>]
type Row =
    static member inline children (xs: seq<ReactElement>) = Interop.mkAttr "children" (xs |> Array.ofSeq)
    static member inline cellTemplate (template: 'a -> ReactElement) = Interop.mkAttr "children" template
    static member inline textValue (value: string) = Interop.mkAttr "textValue" value

[<Erase>]
type Cell =
    static member inline content (element: ReactElement) = Interop.mkAttr "children" element
    static member inline textValue (value: string) = Interop.mkAttr "textValue" value