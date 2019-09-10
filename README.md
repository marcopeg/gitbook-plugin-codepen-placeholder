# gitbook-plugin-codepen-placeholder

Super duper basic Codepen integration for Gitbook 3.x.

### book.json

```json
{
    "plugins": [
        "codepen-placeholder"
    ],
    "codepen-placeholder": {
        "account": "marcopeg",
        "username": "Marco Pegoraro",
        "height": "300px",
        "width": "100%",
        "themeId": "0",
        "defaultTab": "html,result"
    }
}
```

### Embed your Codepen:

```
{% codepen id="qBWxQLB" %}{% endcodepen %}

{% codepen id="qBWxQLB", height="400px", defaultTab="result" %}{% endcodepen %}
```
