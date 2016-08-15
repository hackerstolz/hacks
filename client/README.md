# thinktecture-hacks Client

Client for upcoming demo app. Stay tuned!


## Installation and Setup

Execute `npm i` to install all necessary packages and then `npm run watch` to start up the development server.

### Platforms

* `npm run build-desktop`: Builds the desktop platforms (win, linux, macOs)
* `npm run build-mobile`: Builds the desktop platforms (android, iOS, WinPhone)

## Code Style Guide
### Namings

Naming is built by "Classname", "filename"

* Model: Sample, sample.ts
* Component: SampleComponent, sample.ts, sample.html
* Directive: SampleDirective, sample.ts
* Pipe: SamplePipe, sample.ts
* Service: SampleService, sample.ts

## Project structure

* **dist:** contains all files after building the app (git ignored)
* **src:** contains all source files. Note: No task is allowed to write files into this folder. It serves as a pure source folder
* **gulpTasks:** contains all necessary gulp tasks
* **typings:** contains all necessary typings (git ignored)

## Tests

Write tests for new features and bug fixes. Test files are placed side-by-side with its source file and are prefixed with `*.spec.ts`.
