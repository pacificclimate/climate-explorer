# PCIC Climate Explorer

This project links together the various modules required to run the PCIC Climate Explorer

## Deployment

You can try it out with docker-compose:

```bash
BACKEND_PORT=<port> FRONTEND_PORT=<port> MDDB_DSN=postgresql://db_user:db_pass@db_host/db_name PUBLIC_URL=<ip/url> docker-compose up
```

Or follow each submodule's documentation to deploy each module independently

## Using the submodules

1. After the first checkout of `climate-explorer`, one needs to initialize the submodules:

    ```bash
$ git submodule update --init
    ```

1. When updating the main repo with freshly tagged submodules, run:

    ```bash
cd <submodule>
git checkout master
git pull
git checkout `git describe --abbrev=0` # Checks out latest annotated tag
    ```
    `git submodule status` should now show the changed submodule SHA references

1. To complete the release:

    1. Update NEWS.md
    1. Commit these changes tagging the release

        ```bash
git add NEWS.md
git commit -m"Bump to version x.x.x"
git tag -a -m"x.x.x" x.x.x
git push --follow-tags
        ```