# First launch: training wheels

## 1. Create the GitHub repository

Sign in as `donovan-townes` and create a repository. Suggested name: `z8phyr-website` (you can choose another). Private is fine. If you plan to use the commands below, leave the repository empty: do not initialize it with a README, license, or .gitignore.

Send the repository URL back to this task if you want help connecting and pushing it. No repository has been created or pushed by this preparation step.

## 2. Put this project in the repository

Unzip the source into a permanent development folder. Open that folder in your editor. The folder containing `package.json` is the project root.

In its terminal, run:

```sh
git init -b main
git add .
git commit -m "Initial Z8phyR website"
```

Git may ask you to configure your name and email. Use the identity associated with your development GitHub account. GitHub Desktop is also an option if you prefer a visual interface.

Copy the exact remote URL from your new GitHub repository. Replace `YOUR-REPOSITORY-URL` in the following command with that URL:

```sh
git remote add origin YOUR-REPOSITORY-URL
git push -u origin main
```

If GitHub asks you to sign in, use `donovan-townes`. Do not paste access tokens into chat or save them in source files. If the repository already has commits, stop and ask for help integrating those commits instead of force-pushing.

## 3. Import into Vercel

1. Open https://vercel.com/new and select the Vercel account/team that should own Z8phyR.
2. Connect the `donovan-townes` GitHub account if needed. Allow Vercel to access this repository.
3. Select the repository and choose Import.
4. Framework preset: **Next.js**.
5. Root directory: repository root, where `package.json` sits. If you uploaded a containing folder accidentally, select that folder or fix the repository structure.
6. Leave build, install, and output settings on their detected defaults. The build is `npm run build`; do not set output to `dist` or `out`.
7. Node.js: **22.x** (also specified in package.json).
8. No environment variables are required for this version.
9. Choose Deploy. Wait for Ready, then open the generated Vercel URL.

Check the page on desktop and phone, test the player and external links, and confirm `/cool-breeze-records` returns a not-found page. Review deployment protection settings for the intended audience.

## 4. Connect the domain

After the Vercel URL looks right, open Project → Settings → Domains. Add `z8phyr.com` and optionally `www.z8phyr.com`. Choose a primary hostname and use Vercel's suggested redirect for the other.

Copy the exact DNS records Vercel shows into your DNS provider. Do not use old IP addresses from a tutorial. Preserve mail records (MX, SPF, DKIM, DMARC). Wait for domain verification and HTTPS, then open the domain in a signed-out/private browser window.

The existing Sites draft stays separate; nothing in this project changes its sharing or your DNS automatically.

## 5. Make future updates

For a simple direct update: edit → `npm run build` → commit → push to `main`. Once connected, Vercel builds and publishes that production branch automatically.

For changes you want to review first:

```sh
git switch -c update-homepage
# Make your changes, then:
npm run build
git add .
git commit -m "Update homepage"
git push -u origin update-homepage
```

Open a pull request on GitHub. Review its Vercel preview. Merge into `main` when ready to publish. Use a fresh descriptive branch name for each later change.

If a deployment goes wrong, use Vercel's rollback option for a known-good deployment, then correct or revert the source in GitHub so the next push does not reintroduce the problem. Your repository is the source of truth; edits happen in source files, not in built `.next` files.

## Help if something looks wrong

- Repository missing in Vercel: check GitHub account and repository access for the Vercel integration.
- Build fails: open the deployment's build logs and share the first meaningful error.
- Changes not appearing: check that the expected commit deployed to the production branch and that you're viewing the right URL.
- Domain not verified: compare DNS records with those shown in your project's Domains settings.

Official references: https://vercel.com/docs/getting-started-with-vercel and https://vercel.com/docs/git
