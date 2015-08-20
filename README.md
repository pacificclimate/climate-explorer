# PCIC Climate Explorer

## Development

To set up the Flask server use Virtualenv:

```bash
virtualenv venv
venv/bin/pip install -r requirements.txt
venv/bin/python scripts/devserver.py -p <port>
```

Any changes to the js files will need node and webpack

```bash  
cd ce/static/js
npm install
npm install -g webpack
webpack --watch
```    
