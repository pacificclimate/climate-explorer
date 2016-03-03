# PCIC Climate Explorer

This project links together the various modules required to run the PCIC Climate Explorer

## Deployment

You can try it out with docker-compose:

```bash
BACKEND_PORT=<port> FRONTEND_PORT=<port> MDDB_DSN=postgresql://db_user:db_pass@db_host/db_name PUBLIC_URL=<ip/url> docker-compose up
```

Or follow each submodule's documentation to deploy each module independently

## Updating

1. For all submodules run:

  ```bash
cd <submodule>
git checkout master
git pull
git checkout `git describe --abbrev=0` # Checks out latest annotated tag
  ```

`git status` should now show the changed submodule SHA references

2. Update NEWS.md
3. Commit these changes tagging the release

  ```bash
git add NEWS.md
git commit -m"Bump to version x.x.x"
git tag -a -m"x.x.x" x.x.x
git push --follow-tags
  ```