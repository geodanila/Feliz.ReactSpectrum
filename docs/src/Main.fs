module Main

open Browser.Dom
open Feliz
open Fable.Core.JsInterop
open AppShell

open Elmish
open Elmish.React
open Elmish.HMR

importSideEffects "./css/main.css"

let init () = (), Cmd<_>.Empty
let update () () = (), Cmd<_>.Empty
let view () _ = AppShell ()

Program.mkProgram init update view
|> Program.withReactSynchronous "app-root"
|> Program.run