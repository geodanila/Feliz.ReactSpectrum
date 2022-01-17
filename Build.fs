open Fake.Core
open Fake.IO

open Helpers

initializeContext()

open Fake.Core.TargetOperators

let (</>) = Path.combine
let libPath = "./src/Feliz.ReactSpectrum"
let docsPath = "./docs"
let docsSrcPath = docsPath </> "src"
let docsPublishPath = docsSrcPath </> "dist"

let cleanCacheDirs () =
    [ libPath </> "bin"
      libPath </> "obj"
      docsSrcPath </> "bin"
      docsSrcPath </> "obj" ]
    |> Shell.cleanDirs

let cleanFableFiles () =
    // Delete *.fs.js files created by Fable
    run dotnet "fable clean --yes" libPath
    run dotnet "fable clean --yes" docsSrcPath

let validateFemto projectPath =
    run dotnet "femto --validate" projectPath

let publish projectPath =
    [ projectPath </> "bin"
      projectPath </> "obj" ] |> Shell.cleanDirs
    validateFemto projectPath
    run dotnet "restore --no-cache" projectPath
    run dotnet "pack -c Release" projectPath
    let nugetKey =
        match Environment.environVarOrNone "NUGET_KEY" with
        | Some nugetKey -> nugetKey
        | None -> failwith "The Nuget API key must be set in a NUGET_KEY environmental variable"

    let nupkg =
        projectPath </> "bin" </> "Release"
        |> DirectoryInfo.ofPath
        |> DirectoryInfo.getFiles
        |> Seq.head
        |> (fun x -> x.FullName)

    let pushCmd = sprintf "nuget push %s -s nuget.org -k %s" nupkg nugetKey
    //run dotnet pushCmd projectPath
    printfn "Would run '%s'" pushCmd

Target.create "Clean" <| fun _ ->
    cleanFableFiles()
    cleanCacheDirs()

Target.create "InstallNpmPackages" <| fun _ ->
    run npm "install" docsPath

Target.create "BuildDocs" <| fun _ ->
    run npm "run build" docsPath

Target.create "RunDocs" <| fun _ ->
    run npm "run start" docsPath

Target.create "PublishDocs" <| fun _ ->
    run npm "run publish-docs" docsPath

Target.create "PublishNuget" <| fun _ ->
    publish libPath

open Fake.Core.TargetOperators

let dependencies = [
    "Clean"
        ==> "InstallNpmPackages"
        ==> "BuildDocs"

    "InstallNpmPackages"
        ==> "RunDocs"

    "Clean"
        ==> "InstallNpmPackages"
        ==> "BuildDocs"
        ==> "PublishDocs"

    "Clean"
        ==> "InstallNpmPackages"
        ==> "PublishNuget"
]

[<EntryPoint>]
let main args = runOrDefault args
