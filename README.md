# See Holidays

See Holidays is your simple guide to official public holidays worldwide. Our easy-to-use calendar helps you track international holidays for seamless business and travel planning.

## Get started

### Prerequisites

Make sure the following tools are installed on your machine:

- [mise](https://mise.jdx.dev/)
- [pnpm](https://pnpm.io/)
- [mkcert](https://github.com/FiloSottile/mkcert)

### Setup

1. Clone the repo
2. `$ pnpm install`
3. `$ cp .env.example .env` and update the `.env` file with your environment variables
4. `$ pnpm dev` to start the development server

### Local env HTTPs support

#### Auto HTTPs

If you runn the dev environment and preview the site on the same computer, just run `$ pnpm dev:auto-https` to enable HTTPS support automatically.

#### Manual HTTPs

If your dev environment on another server and you want to preview the site on your computer, you need to run the following command to generate a self-signed certificate:

```bash
$ mkcert 192.168.21.159 vpn-hz-growthbox.duckdns.org localhost
```

- `192.168.21.159` is the IP address of your dev server
- `vpn-hz-growthbox.duckdns.org` is the domain name of your dev server
- `localhost` is for accessing the site via VSCode's port forwarding feature.

You can replace them with your own values.

Then, copy the generated key and cert files to the `certificates` directory in the project root on your dev server, the `certificates` directory should look like this:

```
certificates/
├── cert.pem
└── key.pem
```

Now you can run the dev server with HTTPS support with `$ pnpm dev:https`.

## External services used in this project

- [Vercel](https://vercel.com/) for hosting
- [Upstash](https://upstash.com/) for Redis
- [Turso](https://turso.tech/) for SQLite database
- [IPLocate](https://iplocate.io/) for IP geolocation
