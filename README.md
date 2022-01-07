Hosting a website. Shuu!

# Notes

- `npm audit` is broken for front-end tooling by design. See [here](https://github.com/facebook/create-react-app/issues/11174).
    - `npm audit --production` sorts out the vulnerabilities without being stuck in the audit loop.
- `npm install` for summoning `node_modules` directory and `package-lock.json`.
- `npm update` for updating packages in `node_modules`. Beware of upgrade-downgrade loops due to broken auditing.
- [NodeSource PPA](https://github.com/nodesource/distributions/blob/master/README.md) usually has more recent versions of Node and NPM.

# License

Copyright (C) 2020  Tashfeen, Ahmad

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the [GNU General Public License](COPYING) for more details.

You should have received a copy of the [GNU General Public License](COPYING) along with this program.  If not, see <https://www.gnu.org/licenses/>.
