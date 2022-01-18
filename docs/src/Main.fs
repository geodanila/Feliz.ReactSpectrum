module Main

open Browser.Dom
open Feliz
open Fable.Core.JsInterop
open AppShell

open Elmish
open Elmish.React
open Elmish.HMR

importSideEffects "./css/main.css"

Program.mkProgram AppShell.init AppShell.update AppShell.view
|> Program.withReactSynchronous "app-root"
|> Program.run