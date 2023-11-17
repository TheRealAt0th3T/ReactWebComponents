##Process of creating React Webcomponents and consuming them. 

####Creating the React Webcomponent:

To initially create a React app, run `npm create vite` and follow the prompts to create your app. For this app, I chose the `React` framework with the `TypeScript` variant. 

Then follow the instructions to run your newly created app for the first time!

`cd vite-project` <br>
`npm install` <br>
`npm run dev`

Once your component is ready to be exported, navigate to the `main.tsx` and follow the template below to export the webcomponent:

    import [component name] from "./components/[component file]";
    import r2wc from "@r2wc/react-to-web-component";

    customElements.define("[webcomponent name]", r2wc([component name]));
    customElements.define(
        "[webcomponent name]",
        r2wc([component name], [any props])
    );

Run the following to build and create the assets we will need to use for other apps to consume your new webcomponent: `npm run build`

Under  `~/dist/assets` there will be a JavaScript and CSS files need to be able to consume the webcomponent. 


####Consuming with PHP:

To consume a React webcomponent inside your PHP project, you will need to copy over the JavaScript and CSS files previously mentioned. These files I placed under `~/assets`.

Navigate to your main `.php` file and add the following within your `<head>` tags:

    <script src="[path to JS file]"></script>
        <style>
            <?php include '[path to CSS file]'; ?>
        </style>

####Additional Notes:
- the name given to the react component has to be lowercase