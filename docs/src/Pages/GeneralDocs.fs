namespace Pages

open Feliz.ReactSpectrum
open Feliz
open Fable.Core
open Fable.Core.JsInterop

[<AutoOpen>]
module GeneralDocs =

    [<ReactComponent>]
    let OverviewDocs () =
        React.fragment [
            Html.h1 [
                prop.className "title"
                prop.children [
                    Html.text "Feliz.ReactSpectrum"
                    Html.a [
                        prop.href "https://www.nuget.org/packages/Feliz.ReactSpectrum/"
                        prop.children [
                            Html.img [
                                prop.alt "NuGet badge"
                                prop.src "https://img.shields.io/nuget/v/Feliz.ReactSpectrum.svg?style=square"
                            ]
                        ]
                    ]
                ]
            ]
            Html.h2 [
                prop.className "subtitle"
                prop.children [
                    Html.text "Feliz-style Fable bindings for Adobe's React Spectrum components"
                ]
            ]
            Spectrum.Divider [
                Divider.size DividerSize.M
                Divider.marginTop 10
                Divider.marginBottom 10
            ]
            Html.p [
                prop.children [
                    Html.text "Fable bindings for "
                    Html.a [
                        prop.href "https://react-spectrum.adobe.com/react-spectrum/"
                        prop.children [
                            Html.text "Adobe's React Spectrum components"
                        ]
                    ]
                    Html.text ", written in the excelent "
                    Html.a [
                        prop.href "https://github.com/Zaid-Ajaj/Feliz"
                        prop.children [
                            Html.text "Feliz DSL style"
                        ]
                    ]
                    Html.text "."
                ]
            ]
            Html.h2 [
                prop.className "subtitle paragraph"
                prop.children [ Html.text "Features" ]
            ]
            Html.ul [
                prop.className "bullet-list"
                prop.children [
                    Html.li "Covers all React Spectrum components as of version 3.15.1"
                    Html.li "Fully erased - the generated JS is zero size"
                    Html.li [
                        prop.children [
                            Html.text "Compatible with the "
                            Html.a [
                                prop.href "https://github.com/zaid-ajaj/femto"
                                prop.children [ Html.text "Femto dotnet tool" ]
                            ]
                        ]
                    ]
                ]
            ]
        ]

    [<ReactComponent>]
    let InstallationDocs () =
        React.fragment [
            Html.h2 [
                prop.className "subtitle"
                prop.children [
                    Html.text "Using the Femto dotnet tool"
                ]
            ]
            Html.p [
                prop.className "paragraph"
                prop.children [
                    Html.text "The easiest way to install the package is using the "
                    Html.a [
                        prop.href "https://github.com/zaid-ajaj/femto"
                        prop.children [ Html.text "Femto dotnet tool" ]
                    ]
                    Html.text " since this will also take care of installing the correct npm dependencies."
                    Code Bash "dotnet femto install Feliz.ReactSpectrum"
                ]
            ]
            Html.h2 [
                prop.className "subtitle"
                prop.children [
                    Html.text "Manual installation"
                ]
            ]
            Html.p [
                prop.className "paragraph"
                prop.children [ Html.text "You can install the package using NuGet:" ]
            ]
            Code Bash "dotnet add package Feliz.ReactSpectrum"
            Html.p [
                prop.className "paragraph"
                prop.children [ Html.text "Or in case you use Paket:" ]
            ]
            Code Bash "dotnet paket add Feliz.ReactSpectrum"
            Html.p [
                prop.className "paragraph"
                prop.children [ Html.text "Don't forget to also install the npm dependencies:" ]
            ]
            Code Bash """npm install @adobe/react-spectrum
npm install @spectrum-icons/illustrations
npm install @spectrum-icons/workflow"""
        ]