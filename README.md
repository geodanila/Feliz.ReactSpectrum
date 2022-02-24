# Feliz.ReactSpectrum [<img src="https://img.shields.io/nuget/v/Feliz.ReactSpectrum.svg?style=square">](https://www.nuget.org/packages/Feliz.ReactSpectrum/)
Feliz-style Fable bindings for Adobe's [React Spectrum components](https://react-spectrum.adobe.com/react-spectrum/getting-started.html)

# Installing
- Using the [Femto](https://github.com/zaid-ajaj/femto) dotnet tool makes sure the required npm dependencies are correctly installed:
    ```
    dotnet femto install Feliz.ReactSpectrum
    ```
- Using NuGet:
    ```
    dotnet add package Feliz.ReactSpectrum
    ```
- Don't forget to also install the npm dependencies manually if you're not using Femto:
    ```
    npm install @adobe/react-spectrum
    npm install @spectrum-icons/illustrations
    npm install @spectrum-icons/workflow
    ```

# Documentation
See it in action here: https://geodanila.github.io/Feliz.ReactSpectrum/

# Running the docs locally
- Make sure you have the [.NET 6 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/6.0) installed
- Run a `dotnet tool restore` in order to restore the tools required for building the bindings library and docs app
- Run `dotnet run RunDocs` - wait a bit and a browser window will open showing the docs app. The app will run in development mode, with hot module reloading enabled
