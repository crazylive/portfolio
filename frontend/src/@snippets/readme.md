# Making components using IntelliJ IDEA

## Set Up IntelliJ IDEA

### Settings example (File -> Settings -> Tools -> External Tools)

**Program**: `$ProjectFileDir$/node_modules/.bin/ts-node`\
**Arguments**: `--project tsnodeconfig.json ./src/@snippets --type=$Prompt$ --path $FileDirRelativeToProjectRoot$/$Prompt$`\
**Working directory**: `$ProjectFileDir$`

## Shortcut keys
(File -> Settings -> Keymap)
Look for the name is used when creating the component

## How to use

1. Choose any directory and call the created External Tool 
2. The first $Prompt$ is used for typing the snippet name (just directory name in @snippets/components/)
3. The second is used for the component name to be used in the generated snippet.
