module AppShell

open Feliz.ReactSpectrum
open Feliz
open Fable.Core
open Fable.Core.JsInterop

[<ReactComponent>]
let AppShell () =
    Spectrum.Provider [
        Provider.defaultTheme
        Provider.colorScheme ColorScheme.Light
        Provider.locale "en-US"
        Provider.scale Scale.Medium
        Provider.id "spectrum-provider"
        Provider.children [
            Spectrum.Text "Currently working on the documentation... Stay tuned"
        ]
    ]