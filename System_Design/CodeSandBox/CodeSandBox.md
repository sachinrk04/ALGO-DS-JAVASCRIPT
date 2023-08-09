<!-- Frontend System Design For CodeSandBox -->

- Requirement (Functional/ Non-Functional)-------------------------------------------------------------

  - Functional

        - Online editor
        - Templates to start quick
        - Language support
        - Realtime preview of my app/website
        - Code editor
        - Debugging Code in the sandbox - console capabilities
        - Link to my Github - publish repository, commit to it
        - Login access
        - Pair Programming
        - Support for extensibility - complete ownership
        - File explorer
        - add/remove package
        - deploying integrations with netlify, vercel

  - Non-Functional

        - Very fast real time update, very low latency, high on performance
        - Latest tech
        - Authorisation
        - Realtime preview via client side
        - UI enhancements - Theming/Drag and Drop
        - Device support

- Scoping----------------------------------------------------------------------------------------------

  - Online editor/Code editor

        - code auto-completetion
        - typescript/flow
        - extension support
        - code suggestion/highlighting
        - terminal - future?

  - Templates to start quick
  - Realtime preview of my app/website
  - File explorer

        - Support for multiple file types
        - file/folder creation/deletion/rename
        - drag and drop could come in moving and copying
        - keyboard shortcuts that are useful to developers in the sandbox

  - Debugging Code in the sandbox

        - console capabilities - optional

  - Very fast real time update, very low latency, high on performance
  - UI enhancements - Theming/Drag and Drop
  - Deployment integrations

        - Update of server of any client changes
        - build system
        - deployment system
        - auto refresh preview

- Tech Choices-----------------------------------------------------------------------------------------

  - Code editor

        - Use an existing library like Monaco/Codemirror
        - React

  - Realtime

        - Browser APIs
        - Worker per Language
        - iframe

- Implementation---------------------------------------------------------------------------------------
