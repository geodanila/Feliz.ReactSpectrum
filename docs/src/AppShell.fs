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
        Provider.children [
            Spectrum.ActionButton [
                ActionButton.content "Say hello world!"
                ActionButton.onPress (fun ev ->
                    Browser.Dom.console.log("Event: ", ev)
                    Browser.Dom.window.alert("Hello world!")
                )
            ]
        ]
    ]