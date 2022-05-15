Hosting a website. Shuu!

# Notes

- `npm audit` is broken for front-end tooling by design. See [here](https://github.com/facebook/create-react-app/issues/11174).
    - `npm audit --production` sorts out the vulnerabilities without being stuck in the audit loop.
- `npm install` for summoning `node_modules` directory and `package-lock.json`.
- `npm update` for updating packages in `node_modules`. Beware of upgrade-downgrade loops due to broken auditing.
- [NodeSource PPA](https://github.com/nodesource/distributions/blob/master/README.md) usually has more recent versions of Node and NPM.
- CSS files page.css and urdu.css are still exclusively using `em`. [Read this](https://www.w3.org/Style/Examples/007/units.en.html) for more on CSS units.

# License

Copyright (C) 2020  Tashfeen, Ahmad

[GNU General Public License](COPYING) 

<https://www.gnu.org/licenses/>.
