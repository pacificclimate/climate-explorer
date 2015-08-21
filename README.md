# PCIC Climate Explorer

## Development

To set up the Flask server use Virtualenv:

```bash
virtualenv venv
venv/bin/python setup.py develop
venv/bin/python scripts/devserver.py -p <port>
```

Any changes to the js files will need node and webpack

```bash  
cd ce/static/js
npm install
npm install -g webpack
webpack --watch
```    
