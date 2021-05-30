# Portfolio Template

MIT online portfolio. 
Nodejs and NPM are required.

Note: This has become more specialized. Including the use of AWS services. Forms will not work without a decent amount of configuration on your part.

Fork the repository
```bash
git clone https://github.com/nickolasjadams/portfolio2020
```

You'll have a portfolio ready for hosting in no time!
Copy your resume PDF into the /pdf directory.
Copy your own logo to `/images/logo.png`

Run the setup shell script
```bash
./setup
```
This will prompt you for some important information.
This information will be saved to `prod.json` and the portfolio will be compiled.

The information in `prod.json` will be injected into the pug templates. 

Places you need to modify content
 - Home Page `pug/index.pug`
 - The SEO tag in `pug/index.pug` and `pug/resume.pug`
 - Navigation `pug/partials/_header.pug`
 - Color variables in the top of `sass/styles.scss`
 - Images in `images/clients/*`

Any changes to the templates or sass after this will need to be recompiled. This can be done in one step with 
```bash
npm run build
```

That's it! If this helps you get a portfolio up, please consider giving my repository a star! 

## More build options
If you are working on changes a lot then there are more npm scripts.
```
watch:build will watch prod.json, pug, and sass files.
watch:pug will use nodemon to watch prod.json and pug. The native cli does not account for json changes.
watch:sass will watch for sass file changes.
build will compile both pug and sass once.
pug will compile once.
sass will compile once
```