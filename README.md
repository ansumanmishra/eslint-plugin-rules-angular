## ES custom Linting Rules for Angular
### This ES Lint rule checks for
    - Texts without translation using "transloco"
    - Usage of # instead of using private keyword for defining properties and methods

#### Installation:

```code
    npm i eslint-plugin-rules-angular
```

#### Usage
To check texts without translations

```json
    {
        "files": [
            "*.html"
        ],
        "rules": {
            "rules-angular/no-translation": "error"
        },
        "plugins": ["rules-angular"]
    }
```

To check native use of private variables

```json
    {
        "files": [
            "*.ts"
        ],
        "rules": {
            "rules-angular/no-private-keyword": "error",
        },
        "plugins": ["rules-angular"]
    }
```

#### Note
If the installation fails with version conflicts, use "--force" flag
```code
    npm i eslint-plugin-rules-angular --force
```