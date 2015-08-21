# PCIC Climate Explorer

## Development

To set up the Flask server use Virtualenv:

```bash
$ virtualenv venv
$ source venv/bin/activate
(venv)$ python setup.py develop
(venv)$ python scripts/devserver.py -p <port>
```

Any changes to the js files will need node and webpack. We reccomend using [nvm](https://github.com/creationix/nvm) to manage your node/npm install.

```bash  
cd ce/static/js
npm install
npm install -g webpack
webpack --watch
```    
