# DevJonny blog server

- URL: https://devjonny.me
- Application: `/home/ubuntu/dev/devjonny-blog`
- Service: `devjonny-blog.service` (systemd, user ubuntu)
- Origin: `http://127.0.0.1:3582`
- Routing: Cloudflare Tunnel `9dd06c8f-cf07-4bdf-b42c-33206077fc48`
- Tunnel configuration: `/etc/cloudflared/config.yml`

## Operations

```bash
systemctl status devjonny-blog
journalctl -u devjonny-blog -n 100 --no-pager
sudo systemctl restart devjonny-blog
```

The service definition is in `ops/devjonny-blog.service`.

## Deployment

Push to `main` runs a build check, syncs source into the application directory,
installs dependencies, builds, restarts the service, and checks `/` and `/post`.
GitHub Actions uses `BLOG_DEPLOY_HOST` and `BLOG_DEPLOY_KEY` repository secrets.

The retired server at 140.245.64.120 and its PM2 deployment are no longer used.
