# Deploying Slax for free

Slax is a Ruby on Rails 7.1 app with a PostgreSQL database and a React frontend.
The combo below is free: Render's free web tier for the app, Neon's free tier
for Postgres. No paid subscriptions needed.

**Your questions, answered up front:**
- **Database:** yes, it's PostgreSQL.
- **Do you need to pay for Postgres?** No. Neon's free tier covers a project
  this size. That replaces whatever database the old GoDaddy/Render setup used.
- **GoDaddy domain:** not needed. Render gives you a free `https://slax-xxxx.onrender.com`
  URL. If your GoDaddy domain is still alive you can point it at Render later
  (Render dashboard → Settings → Custom Domain); if it expired, nothing breaks.

## What was fixed (2026 modernization)

- Upgraded Rails 5.1 → 7.1, Ruby 2.x → 3.3, webpack 3 build works on modern Node.
  This is why the old Render service crashed with "Exited with status 1" — the old
  Rails 5.1 code cannot boot on the modern Ruby that Render installs.
- All secrets moved out of the code into environment variables
  (`config/initializers/pusher.rb`, `app/views/layouts/application.html.erb`,
  `config/database.yml`). The old Pusher keys that were committed to the public
  repo are no longer in the code — **rotate them in the Pusher dashboard** since
  they were public.
- Signup no longer assumes a channel with id 1 exists (fresh databases work);
  after login/signup you're taken to the General channel (or the first one).
- Fixed a data leak: API responses no longer include password hashes or session
  tokens; message/emoji/subscription/profile writes are attributed to the
  logged-in user server-side instead of trusting client parameters.
- Pusher failures can no longer break sending messages — without Pusher keys the
  app simply skips live updates and everything else works.
- The Gif button is hidden unless a Giphy API key is configured, and uses your
  key when it is (the old hardcoded demo key is gone).
- Fixed several frontend crashes: empty-channel scrolling, realtime callback
  binding, and channel-creation navigation.

## Steps

### 1. Commit and push this code to GitHub

The changes are committed locally in `slax-revive` (on `master`, on top of your
existing history — nothing was force-pushed). Push with:

```bash
cd slax-revive
git push origin master
```

(If `git push` asks you to log in, run `gh auth login` first and follow the prompts.)

### 2. Create the free database (Neon)

1. Sign up at https://neon.tech (free, no credit card).
2. Create a project → it gives you a **connection string** like
   `postgresql://user:password@ep-xxx.us-east-2.aws.neon.tech/neondb?sslmode=require`
3. Copy it — you'll paste it into Render as `DATABASE_URL`.

### 3. (Optional but recommended) free Pusher keys for live messaging

Without these, chat still works — new messages just appear on refresh/page change
instead of instantly.

1. Sign up at https://pusher.com (free Sandbox plan).
2. Create a Channels app → copy **app_id**, **key**, **secret**, **cluster**.

### 4. (Optional) free Giphy key for the Gif button

1. Create an app at https://developers.giphy.com (free) → copy the API key.
2. Without it, the Gif button is hidden; typing messages is unaffected.

### 5. Deploy on Render

1. Go to https://dashboard.render.com → **New → Blueprint** → select your `slax` repo.
   Render reads `render.yaml` from the repo and fills in the service definition.
2. When prompted for env vars, fill in:
   - `DATABASE_URL` → the Neon connection string from step 2 (**required**)
   - `PUSHER_APP_ID`, `PUSHER_KEY`, `PUSHER_SECRET`, `PUSHER_CLUSTER` → from step 3 (optional)
   - `GIPHY_API_KEY` → from step 4 (optional)
   - `SECRET_KEY_BASE` is auto-generated.
3. Click **Apply**. Render builds (~5 min: `bundle install`, frontend build,
   asset precompile, `db:migrate`) and starts the app.

Free-tier notes: the web service sleeps after ~15 min of inactivity and wakes on
the next visit (first load takes ~30s). The Neon database never sleeps.

### 6. Sanity check

- Open the URL, sign up a new user → you land in `#general`.
- Post a message → it appears.
- Open a second browser/incognito window, sign up another user → with Pusher keys,
  messages appear live in both windows.

## If something fails

- **Build fails on `bundle install`:** check the Render build logs; the Ruby version
  is pinned by `.ruby-version` (3.3.6), which Render respects.
- **`db:migrate` fails:** `DATABASE_URL` is wrong or the DB isn't reachable
  (Neon requires `?sslmode=require`, which their dashboard string includes).
- **App boots but pages error:** `SECRET_KEY_BASE` missing, or check
  **Logs** in the Render dashboard.
- Delete the old broken `slaxrails` service in the Render dashboard to avoid
  confusion (it runs the 2017 code and will never boot).
