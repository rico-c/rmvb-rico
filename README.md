# Rick & Morty Character Browser
This is a demo from Yu Cao

## Getting Started
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Stack
- Nextjs Approuter
- Typescript
- Tailwindcss
- shacnui

## Key point
### data flow
I used context to control the list data and the search component and all the hook will influence it, that make sure all the application is using single one data source
### ui component
I used tailwindcss for styling, and shacn for basic ui components.
### some hooks
Some hooks are used to fetch data or do some debounce work, they could be resused when the application scale up
### typescript
To make the application more stable and function params more readable and do static type check
### debounce
When input change value frequently, we need a debounce
