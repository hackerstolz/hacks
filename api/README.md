# thinktecture-hacks Web API

Web API for upcoming demo app. Stay tuned!

## Setup
### Database

Add a user named `hacks` with the password `hacks` to your local PostgreSQL instance. The app will then initialize a database.
 
### Building & Running {Hacks}

Simply open up this folder in a shell of your choice and run `npm run watch` - that's it! You'll now be able to use the API and add new code. The code will be compiled by `tsc` on the fly as you save your changes. `nodemon` 
will then incorporate those changes and reboot the app, as soon as it registers any changes made to the `build`-folder.

## Code Style Guide
### Namings

Naming is built by "Classname", "filename"

* Model: Sample, sample.ts
* Controller: SampleController, sampleController.ts
* Service: SampleService, sampleService.ts

## Project structure

* **dist:** contains all files after building the app (git ignored)
* **src:** contains all source files. Note: No task is allowed to write files into this folder. It serves as a pure source folder
* **gulpTasks:** contains all necessary Web API gulp tasks
* **typings:** contains all necessary Web API typings (git ignored)

## Tests

Write tests for new features and bug fixes. Test files are placed side-by-side with its source file and are prefixed with `*.spec.ts`.
