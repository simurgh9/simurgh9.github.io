Hosting a website. Shuu!

# Notes

## On Dependencies

- `npm install` for summoning `node_modules` directory and `package-lock.json`.
- `npm update` for updating packages in `node_modules`.

Beware of the infinite upgrade-downgrade loops due to broken
auditing. The `npm audit` is broken for the front-end tooling by
design. Read,

_facebook/create-react-app (CRA)_ [Github issue](https://github.com/facebook/create-react-app/issues/11174).

The production flag, e. g., `npm audit --production` sorts out the
vulnerabilities without being stuck in the audit loop. Without it,
`npm audit` complains about the following vulnerability as "6 high
severity vulnerabilities,"

_Inefficient Regular Expression Complexity in nth-check:_ [Details on Github](https://github.com/advisories/GHSA-rp65-9cf3-cjxr)


The complain is that some transitive dependency is using _nth-check_
version smaller than 2.0.1. The command `npm list nth-check`
identifies the culprit,

```
└─┬ react-scripts@5.0.1
  ├─┬ @svgr/webpack@5.5.0
  │ └─┬ @svgr/plugin-svgo@5.5.0
  │   └─┬ svgo@1.3.2
  │     └─┬ css-select@2.1.0
  │       └── nth-check@1.0.2    <--- BOOO!
  └─┬ html-webpack-plugin@5.5.0
    └─┬ pretty-error@4.0.0
      └─┬ renderkid@3.0.0
        └─┬ css-select@4.3.0
          └── nth-check@2.1.1
```

Since our kind friends at ~Facebook~ Meta, are in no hurry to fix
this, I have resorted to,

[Manually installing nth-check](https://github.com/facebook/create-react-app/issues/12132#issuecomment-1149787462)

Therefore, remove,

```json
...
"overrides": {
    "nth-check": "^2.0.1"
  }
...
```

From `package.json` once Meta fixes CRA. For the time being, now `npm
audit` with or without the production flag does not report the
`nth-check` vulnerability.

## Installing NodeJS and NPM

- [NodeSource PPA](https://github.com/nodesource/distributions/blob/master/README.md) usually has more recent versions of Node and NPM.
    - Note that: [Debian Testing is not supported.](https://github.com/nodesource/distributions/issues/1008) So there, just run `sudo apt install nodejs npm`.

## Quirks in Source Code

- CSS files page.css and urdu.css are still exclusively using `em`. This maybe the expected behaviour since the page.css is also applied when urdu.css isn't overriding it. [Read this](https://www.w3.org/Style/Examples/007/units.en.html) for more on CSS units.
- `display: flex;` i. e., display attribute is not inherited by child elements. [Read](https://www.w3.org/TR/CSS22/propidx.html) for more.

# License

Copyright (C) 2020  Tashfeen, Ahmad

[GNU General Public License](COPYING) 

<https://www.gnu.org/licenses/>.
