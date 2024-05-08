## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/your-username/your-project.git
cd your-project
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
# clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# clerk webhook for mongodb
WEBHOOK_SECRET=

# sign-in / sign-up pages
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
fallbackRedirectUrl=/

# mongodb
MONGODB_URI=

# uploadthing
UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=

# https://dashboard.stripe.com/apikeys
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=

# Set this environment variable to support webhooks — https://stripe.com/docs/webhooks#verify-events
# <DEPLOYED_URL>/api/webhook/stripe -> listening for checkout.session.completed
STRIPE_WEBHOOK_SECRET=

NEXT_PUBLIC_SERVER_URL=http://localhost:3000
```

Replace the placeholder values with your actual credentials

**Running the Project**

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

👉 **IMPORTANT** In order to that the app runs correctly please visit your clerk dashboard, go to `Sessions` -> `Customize session token - ✏️ Edit` and add the following

```json
{
  "userId": "{{user.public_metadata.userId}}"
}
```

You also need to go to `User & Authentication` - `Username` and turn on the toggle `User can set usernames to their account` - `Required`

Under `Webhooks` you need to configure the webhook of `yourdomain/api/webhook/clerk` so clerk can fetch userdata to mongodb

Setup Webhooks for Stripe, to test it locally you need to download Stripe CLI and do the following

- `stripe login`
- `stripe listen --forward-to localhost:3000/api/webhook/stripe`
- copy the given webhook secret to ur .env.local
- and then just trigger a payment on the website using 4242 4242 4242 4242 as your card number
