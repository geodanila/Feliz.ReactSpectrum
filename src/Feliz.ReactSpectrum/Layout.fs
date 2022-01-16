namespace Feliz.ReactSpectrum

open Feliz
open Fable.Core
open Fable.React

[<Erase>]
type Flex =
    inherit BaseComponent
    static member inline children (elements: seq<ReactElement>) = prop.children(elements)

    static member inline direction (value: FlexDirection) = Interop.mkAttr "direction" value
    static member inline direction (value: ResponsivePropOptions<FlexDirection>) = Interop.mkAttr "direction" value

    static member inline wrap (value: bool) = Interop.mkAttr "wrap" value
    static member inline wrap (value: FlexWrap) = Interop.mkAttr "wrap" value
    static member inline wrap (value: ResponsivePropOptions<FlexWrap>) = Interop.mkAttr "wrap" value

    static member inline justifyContent (value: FlexJustifyContent) = Interop.mkAttr "justifyContent" value
    static member inline justifyContent (value: ResponsivePropOptions<FlexJustifyContent>) = Interop.mkAttr "justifyContent" value

    static member inline alignContent (value: FlexAlignContent) = Interop.mkAttr "alignContent" value
    static member inline alignContent (value: ResponsivePropOptions<FlexAlignContent>) = Interop.mkAttr "alignContent" value

    static member inline alignItems (value: FlexAlignItems) = Interop.mkAttr "alignItems" value
    static member inline alignItems (value: ResponsivePropOptions<FlexAlignItems>) = Interop.mkAttr "alignItems" value

    static member inline gap (value: DimValue) = Interop.mkAttr "gap" value
    static member inline gap (value: ResponsivePropOptions<DimValue>) = Interop.mkAttr "gap" value

    static member inline columnGap (value: DimValue) = Interop.mkAttr "columnGap" value
    static member inline columnGap (value: ResponsivePropOptions<DimValue>) = Interop.mkAttr "columnGap" value

    static member inline rowGap (value: DimValue) = Interop.mkAttr "rowGap" value
    static member inline rowGap (value: ResponsivePropOptions<DimValue>) = Interop.mkAttr "rowGap" value

[<Erase>]
type Grid =
    inherit BaseComponent

    static member inline children (elements: seq<ReactElement>) = prop.children(elements)

    static member inline areas (value: string list) = Interop.mkAttr "areas" (value |> Array.ofList)
    static member inline areas (value: ResponsivePropOptions<string list>) = Interop.mkAttr "areas" (value |> ResponsiveProp.map Array.ofList)

    static member inline rows (value: string) = Interop.mkAttr "rows" value
    static member inline rows (value: string list) = Interop.mkAttr "rows" (value |> Array.ofList)
    static member inline rows (value: DimValue list) = Interop.mkAttr "rows" (value |> Array.ofList)
    static member inline rows (value: ResponsivePropOptions<string>) = Interop.mkAttr "rows" value
    static member inline rows (value: ResponsivePropOptions<string list>) = Interop.mkAttr "rows" (value |> ResponsiveProp.map Array.ofList)
    static member inline rows (value: ResponsivePropOptions<DimValue list>) = Interop.mkAttr "rows" (value |> ResponsiveProp.map Array.ofList)

    static member inline columns (value: string) = Interop.mkAttr "columns" value
    static member inline columns (value: string list) = Interop.mkAttr "columns" (value |> Array.ofList)
    static member inline columns (value: DimValue list) = Interop.mkAttr "columns" (value |> Array.ofList)
    static member inline columns (value: ResponsivePropOptions<string>) = Interop.mkAttr "columns" value
    static member inline columns (value: ResponsivePropOptions<string list>) = Interop.mkAttr "columns" (value |> ResponsiveProp.map Array.ofList)
    static member inline columns (value: ResponsivePropOptions<DimValue list>) = Interop.mkAttr "columns" (value |> ResponsiveProp.map Array.ofList)

    static member inline autoRows (value: DimValue) = Interop.mkAttr "autoRows" value
    static member inline autoRows (value: ResponsivePropOptions<DimValue>) = Interop.mkAttr "autoRows" value

    static member inline autoColumns (value: DimValue) = Interop.mkAttr "autoColumns" value
    static member inline autoColumns (value: ResponsivePropOptions<DimValue>) = Interop.mkAttr "autoColumns" value

    static member inline autoFlow (value: GridAutoFlow) = Interop.mkAttr "autoFlow" value
    static member inline autoFlow (value: ResponsivePropOptions<GridAutoFlow>) = Interop.mkAttr "autoFlow" value

    static member inline justifyItems (value: GridJustifyItems) = Interop.mkAttr "justifyItems" value
    static member inline justifyItems (value: ResponsivePropOptions<GridJustifyItems>) = Interop.mkAttr "justifyItems" value

    static member inline justifyContent (value: GridJustifyContent) = Interop.mkAttr "justifyContent" value
    static member inline justifyContent (value: ResponsivePropOptions<GridJustifyContent>) = Interop.mkAttr "justifyContent" value

    static member inline alignContent (value: GridAlignContent) = Interop.mkAttr "alignContent" value
    static member inline alignContent (value: ResponsivePropOptions<GridAlignContent>) = Interop.mkAttr "alignContent" value

    static member inline alignItems (value: GridAlignItems) = Interop.mkAttr "alignItems" value
    static member inline alignItems (value: ResponsivePropOptions<GridAlignItems>) = Interop.mkAttr "alignItems" value

    static member inline gap (value: DimValue) = Interop.mkAttr "gap" value
    static member inline gap (value: ResponsivePropOptions<DimValue>) = Interop.mkAttr "gap" value

    static member inline columnGap (value: DimValue) = Interop.mkAttr "columnGap" value
    static member inline columnGap (value: ResponsivePropOptions<DimValue>) = Interop.mkAttr "columnGap" value

    static member inline rowGap (value: DimValue) = Interop.mkAttr "rowGap" value
    static member inline rowGap (value: ResponsivePropOptions<DimValue>) = Interop.mkAttr "rowGap" value