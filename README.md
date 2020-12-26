# Portfolio Template

Fork the repository
```bash
git clone whatever
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
 - Navigation `pug/_partials/_header.pug`

Any changes to the templates or sass after this will need to be recompiled. This can be done in one step with 
```bash
npm run build
```

That's it! If this helps you get a portfolio up, please consider giving my repository a star! 